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
    "asof_date": "2026-05-22",
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
          "score_pca": 79.13669064748201,
          "score_pca_percentile": 79.13669064748201,
          "rank_pca": 117,
          "total": 556,
          "adv_notional_sgd": 630537.0,
          "adv_volume_shares": 941100.0,
          "free_float_shares": 457060801.0,
          "turnover_ratio": 0.0020590258406342748,
          "votes": 557.0,
          "trades": 557.0,
          "spread_pct": 0.007638705606470154,
          "spread_ticks": 1.019433198380567,
          "amihud": 1.1924434240149679e-08,
          "volatility": 0.1433653116071401
        },
        "pca": {
          "valid": true,
          "window_days": 1,
          "variance_explained": 0.5307426162249501,
          "loadings": {
            "log_adv": 0.5433264285619307,
            "log_trades": 0.4989579080232194,
            "log_turnover": 0.5042074523820749,
            "neg_spread": 0.3447327245640723,
            "neg_amihud": 0.04679895628940573,
            "neg_vol": -0.2838687184500265
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
          "peer_median_adv": 1452397.0,
          "peer_median_score_pca": 84.17266187050359,
          "peer_median_trades": 1493.0,
          "peer_median_volatility": 0.14667387091967607,
          "peer_median_spread_pct": 0.007738013867385583,
          "peer_median_spread_ticks": 1.0024711696869852,
          "peer_median_amihud": 0.0,
          "peer_median_turnover_ratio": 0.0018352604852686126,
          "target_vs_peer": {
            "score_pca_delta": -5.04,
            "adv_delta_pct": -56.6,
            "trades_delta_pct": -62.69,
            "volatility_delta_pct": 2.26,
            "spread_pct_delta_pct": 1.28,
            "spread_ticks_delta_pct": 1.69,
            "amihud_delta_pct": null,
            "turnover_ratio_delta_pct": 12.19
          }
        },
        "peer_liquidity": [
          {
            "ticker": "CRPU",
            "score_pca": 79.13669064748201,
            "rank_pca": 117,
            "adv": 630537.0,
            "trades": 557.0,
            "volatility": 0.1433653116071401,
            "spread_pct": 0.007638705606470154,
            "spread_ticks": 1.019433198380567,
            "amihud": 1.1924434240149679e-08,
            "turnover_ratio": 0.0020590258406342748,
            "is_target": true
          },
          {
            "ticker": "AU8U",
            "score_pca": 84.17266187050359,
            "rank_pca": 89,
            "adv": 1452397.0,
            "trades": 1493.0,
            "volatility": 0.14667387091967607,
            "spread_pct": 0.007738013867385583,
            "spread_ticks": 1.0024711696869852,
            "amihud": 0.0,
            "turnover_ratio": 0.0018352604852686126,
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
              "mean": 0.19447477580197697,
              "median": 0.10142524721531723,
              "min": 0.0,
              "max": 3.8655476541403457,
              "p5": 0.0,
              "p95": 0.6863781097790387,
              "count": 556
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 3436056.9985602633,
              "median": 11168.900000000001,
              "min": 0.0,
              "max": 341626356.0,
              "p5": 0.0,
              "p95": 15113699.250000002,
              "count": 556
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.10654212937852364,
              "median": 0.033551628240782276,
              "min": 0.000269725108291675,
              "max": 1.7037037037037037,
              "p5": 0.0034119738583874887,
              "p95": 0.48829619890592313,
              "count": 555
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.006891928261115186,
              "median": 0.00021664948455712892,
              "min": 0.0,
              "max": 2.4751169995385935,
              "p5": 0.0,
              "p95": 0.01067838182949719,
              "count": 549
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 0.00015648896861746983,
              "median": 1.2186023917961165e-08,
              "min": 0.0,
              "max": 0.030303030303030328,
              "p5": 0.0,
              "p95": 9.745896464646464e-05,
              "count": 406
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 532.0557553956835,
              "median": 7.0,
              "min": 0.0,
              "max": 20864.0,
              "p5": 0.0,
              "p95": 2951.5,
              "count": 556
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.270490761554502,
              "median": 0.15624001256424852,
              "min": 0.0,
              "max": 1.2730366958631603,
              "p5": 0.032239523720731536,
              "p95": 0.8887006113603122,
              "count": 8
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 7416721.128248874,
              "median": 593082.25,
              "min": 0.0,
              "max": 47901762.0,
              "p5": 7529.200000000001,
              "p95": 34195258.69999998,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.0344205025467731,
              "median": 0.00847559539204094,
              "min": 0.00436181501591727,
              "max": 0.13333333333333333,
              "p5": 0.004382513177865258,
              "p95": 0.1210062893081761,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.002083108951729552,
              "median": 0.0013418395039112663,
              "min": 0.0,
              "max": 0.005897322812539282,
              "p5": 2.8489519700291747e-05,
              "p95": 0.005651889491592597,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 9.939447990833187e-07,
              "median": 5.040186546416907e-10,
              "min": 0.0,
              "max": 6.640811772831108e-06,
              "p5": 0.0,
              "p95": 4.7398260278096275e-06,
              "count": 7
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1342.125,
              "median": 452.0,
              "min": 0.0,
              "max": 5978.0,
              "p5": 2.45,
              "p95": 4700.149999999998,
              "count": 8
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 1452397.0,
              "median": 1452397.0,
              "min": 1452397.0,
              "max": 1452397.0,
              "p5": 1452397.0,
              "p95": 1452397.0,
              "count": 1
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1493.0,
              "median": 1493.0,
              "min": 1493.0,
              "max": 1493.0,
              "p5": 1493.0,
              "p95": 1493.0,
              "count": 1
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.14667387091967607,
              "median": 0.14667387091967607,
              "min": 0.14667387091967607,
              "max": 0.14667387091967607,
              "p5": 0.14667387091967607,
              "p95": 0.14667387091967607,
              "count": 1
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.007738013867385583,
              "median": 0.007738013867385583,
              "min": 0.007738013867385583,
              "max": 0.007738013867385583,
              "p5": 0.007738013867385583,
              "p95": 0.007738013867385583,
              "count": 1
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 1.0024711696869852,
              "median": 1.0024711696869852,
              "min": 1.0024711696869852,
              "max": 1.0024711696869852,
              "p5": 1.0024711696869852,
              "p95": 1.0024711696869852,
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
              "mean": 0.0018352604852686126,
              "median": 0.0018352604852686126,
              "min": 0.0018352604852686126,
              "max": 0.0018352604852686126,
              "p5": 0.0018352604852686126,
              "p95": 0.0018352604852686126,
              "count": 1
            }
          },
          "returns": {
            "window_days": 1,
            "n_obs": 1,
            "stock": 0.007518796992481258,
            "market": 0.0044473308176598,
            "sector": 0.0,
            "peers": 0.0,
            "vs_market": 0.003071466174821458,
            "vs_sector": 0.007518796992481258,
            "vs_peers": 0.007518796992481258
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
          "variance_explained": 0.5220154401382764,
          "loadings": {
            "log_adv": 0.5454595515708723,
            "log_trades": 0.49774010644966316,
            "log_turnover": 0.49341720376516746,
            "neg_spread": 0.4100283902270644,
            "neg_amihud": 0.1315220531788913,
            "neg_vol": 0.16076938699751295
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
          "peer_median_adv": 839596.0000000001,
          "peer_median_score_pca": 83.81294964028777,
          "peer_median_trades": 836.0,
          "peer_median_volatility": 0.12270116261432003,
          "peer_median_spread_pct": 0.007539610471803512,
          "peer_median_spread_ticks": 1.0024813895781637,
          "peer_median_amihud": 5.046565365143366e-09,
          "peer_median_turnover_ratio": 0.0010219158118342003,
          "target_vs_peer": {
            "score_pca_delta": -2.7,
            "adv_delta_pct": -43.1,
            "trades_delta_pct": -61.0,
            "volatility_delta_pct": 8.14,
            "spread_pct_delta_pct": -0.1,
            "spread_ticks_delta_pct": -0.25,
            "amihud_delta_pct": -142.18,
            "turnover_ratio_delta_pct": 53.87
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
            "score_pca": 83.81294964028777,
            "rank_pca": 91,
            "adv": 839596.0000000001,
            "trades": 836.0,
            "volatility": 0.12270116261432003,
            "spread_pct": 0.007539610471803512,
            "spread_ticks": 1.0024813895781637,
            "amihud": 5.046565365143366e-09,
            "turnover_ratio": 0.0010219158118342003,
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
              "mean": 0.617189638685603,
              "median": 0.39560020723816114,
              "min": 0.0,
              "max": 5.873670062235366,
              "p5": 0.08811715448362553,
              "p95": 1.855511738378278,
              "count": 556
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 3522536.092848252,
              "median": 18711.4,
              "min": 0.0,
              "max": 313263925.0,
              "p5": 0.0,
              "p95": 15147616.375,
              "count": 556
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.09723363160566463,
              "median": 0.030390143737166267,
              "min": 0.0002879945579246963,
              "max": 1.4782608695652175,
              "p5": 0.003311744120331952,
              "p95": 0.4356284569902718,
              "count": 555
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.006489828449770089,
              "median": 0.00034183842025659495,
              "min": 0.0,
              "max": 2.0598510315733964,
              "p5": 0.0,
              "p95": 0.013742670822071904,
              "count": 549
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 5.6657275593381676e-05,
              "median": 1.0813370949446431e-07,
              "min": 0.0,
              "max": 0.011904761904761915,
              "p5": 0.0,
              "p95": 4.221505994906925e-05,
              "count": 549
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 536.7823741007194,
              "median": 8.0,
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
              "mean": 0.30063831285172965,
              "median": 0.1370969642613307,
              "min": 0.09001392771956263,
              "max": 1.4823077934618787,
              "p5": 0.09796034295038798,
              "p95": 1.0215893010610013,
              "count": 8
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 10000734.970292723,
              "median": 516781.5,
              "min": 0.0,
              "max": 69289026.0,
              "p5": 8054.865000000002,
              "p95": 48096980.29999997,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.03982323084368036,
              "median": 0.008298369094386028,
              "min": 0.004357836551727306,
              "max": 0.1424083769633507,
              "p5": 0.0043928065596181105,
              "p95": 0.13923211169284463,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0022979539966982874,
              "median": 0.001029616436337428,
              "min": 0.0,
              "max": 0.008605527448650745,
              "p5": 7.104573975260255e-05,
              "p95": 0.007412222505065047,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 4.8059818322331855e-09,
              "median": 3.105700355881638e-10,
              "min": 0.0,
              "max": 2.0558358428538707e-08,
              "p5": 0.0,
              "p95": 1.7640559756102634e-08,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1286.625,
              "median": 320.0,
              "min": 0.0,
              "max": 6286.0,
              "p5": 10.15,
              "p95": 4950.049999999997,
              "count": 8
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 839596.0000000001,
              "median": 839596.0000000001,
              "min": 839596.0000000001,
              "max": 839596.0000000001,
              "p5": 839596.0000000001,
              "p95": 839596.0000000001,
              "count": 1
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 836.0,
              "median": 836.0,
              "min": 836.0,
              "max": 836.0,
              "p5": 836.0,
              "p95": 836.0,
              "count": 1
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.12270116261432003,
              "median": 0.12270116261432003,
              "min": 0.12270116261432003,
              "max": 0.12270116261432003,
              "p5": 0.12270116261432003,
              "p95": 0.12270116261432003,
              "count": 1
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.007539610471803512,
              "median": 0.007539610471803512,
              "min": 0.007539610471803512,
              "max": 0.007539610471803512,
              "p5": 0.007539610471803512,
              "p95": 0.007539610471803512,
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
              "mean": 0.0010219158118342003,
              "median": 0.0010219158118342003,
              "min": 0.0010219158118342003,
              "max": 0.0010219158118342003,
              "p5": 0.0010219158118342003,
              "p95": 0.0010219158118342003,
              "count": 1
            }
          },
          "returns": {
            "window_days": 21,
            "n_obs": 21,
            "stock": -1.1102230246251565e-16,
            "market": 0.013078822058819606,
            "sector": -0.00579582843242088,
            "peers": -0.03676470588235292,
            "vs_market": -0.013078822058819717,
            "vs_sector": 0.005795828432420769,
            "vs_peers": 0.03676470588235281
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
          "votes": 413.0,
          "trades": 413.0,
          "spread_pct": 0.007668286630131328,
          "spread_ticks": 1.0,
          "amihud": 6.095646422273147e-09,
          "volatility": 0.17879181412413195
        },
        "pca": {
          "valid": true,
          "window_days": 63,
          "variance_explained": 0.5570168630086365,
          "loadings": {
            "log_adv": 0.5226852327707812,
            "log_trades": 0.471193415348787,
            "log_turnover": 0.4792638847940171,
            "neg_spread": 0.41379398327122346,
            "neg_amihud": 0.2211269557613723,
            "neg_vol": 0.23443645269387872
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
          "peer_median_adv": 1096435.5,
          "peer_median_score_pca": 85.79136690647482,
          "peer_median_trades": 855.0,
          "peer_median_volatility": 0.1831955181322742,
          "peer_median_spread_pct": 0.007601640182517538,
          "peer_median_spread_ticks": 1.0038948393378773,
          "peer_median_amihud": 6.095702901292444e-09,
          "peer_median_turnover_ratio": 0.0013941159742881081,
          "target_vs_peer": {
            "score_pca_delta": -2.16,
            "adv_delta_pct": -39.3,
            "trades_delta_pct": -51.7,
            "volatility_delta_pct": 2.4,
            "spread_pct_delta_pct": -0.88,
            "spread_ticks_delta_pct": -0.39,
            "amihud_delta_pct": 0.0,
            "turnover_ratio_delta_pct": 55.92
          }
        },
        "peer_liquidity": [
          {
            "ticker": "CRPU",
            "score_pca": 83.63309352517986,
            "rank_pca": 92,
            "adv": 665645.0,
            "trades": 413.0,
            "volatility": 0.17879181412413195,
            "spread_pct": 0.007668286630131328,
            "spread_ticks": 1.0,
            "amihud": 6.095646422273147e-09,
            "turnover_ratio": 0.002173671419264852,
            "is_target": true
          },
          {
            "ticker": "AU8U",
            "score_pca": 85.79136690647482,
            "rank_pca": 80,
            "adv": 1096435.5,
            "trades": 855.0,
            "volatility": 0.1831955181322742,
            "spread_pct": 0.007601640182517538,
            "spread_ticks": 1.0038948393378773,
            "amihud": 6.095702901292444e-09,
            "turnover_ratio": 0.0013941159742881081,
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
              "mean": 0.6921910150449248,
              "median": 0.4717218703060321,
              "min": 0.0,
              "max": 7.013811259728677,
              "p5": 0.15949070695961898,
              "p95": 2.2301976168661084,
              "count": 556
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 3346234.1441047685,
              "median": 13170.0,
              "min": 0.0,
              "max": 284335480.0,
              "p5": 0.0,
              "p95": 14058606.0,
              "count": 556
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.10124315154572552,
              "median": 0.03217061268751127,
              "min": 0.0002805689255457263,
              "max": 1.2394366197183098,
              "p5": 0.0034758312328819923,
              "p95": 0.44957360805416136,
              "count": 555
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0067263761538879936,
              "median": 0.00026665202488717206,
              "min": 0.0,
              "max": 2.4059060048777274,
              "p5": 0.0,
              "p95": 0.011873658779405062,
              "count": 549
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.3812505372463205e-05,
              "median": 1.487180622012699e-07,
              "min": 0.0,
              "max": 0.0007680491551459317,
              "p5": 0.0,
              "p95": 3.370700222460994e-05,
              "count": 551
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 497.69874100719426,
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
              "mean": 0.34559811185255884,
              "median": 0.18766740246652536,
              "min": 0.13736202218693855,
              "max": 1.4249153163749348,
              "p5": 0.15186244936495624,
              "p95": 1.0187000733943576,
              "count": 8
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 10909560.379611094,
              "median": 724405.0,
              "min": 0.0,
              "max": 74036464.0,
              "p5": 3987.69,
              "p95": 51821250.349999964,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.03829284296828309,
              "median": 0.008370219036416337,
              "min": 0.004329596189360625,
              "max": 0.15384615384615383,
              "p5": 0.0043948777769257045,
              "p95": 0.13819241982507285,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0025875047871669254,
              "median": 0.0012024701957407628,
              "min": 0.0,
              "max": 0.008880210331949037,
              "p5": 0.00010618281404962904,
              "p95": 0.008013752722040331,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 6.0842619616477e-07,
              "median": 6.095674661782796e-09,
              "min": 0.0,
              "max": 4.815115237432181e-06,
              "p5": 3.3185605965670984e-11,
              "p95": 3.141166307043653e-06,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1247.875,
              "median": 460.5,
              "min": 0.0,
              "max": 6130.0,
              "p5": 6.65,
              "p95": 4693.949999999998,
              "count": 8
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 1096435.5,
              "median": 1096435.5,
              "min": 1096435.5,
              "max": 1096435.5,
              "p5": 1096435.5,
              "p95": 1096435.5,
              "count": 1
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 855.0,
              "median": 855.0,
              "min": 855.0,
              "max": 855.0,
              "p5": 855.0,
              "p95": 855.0,
              "count": 1
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.1831955181322742,
              "median": 0.1831955181322742,
              "min": 0.1831955181322742,
              "max": 0.1831955181322742,
              "p5": 0.1831955181322742,
              "p95": 0.1831955181322742,
              "count": 1
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.007601640182517538,
              "median": 0.007601640182517538,
              "min": 0.007601640182517538,
              "max": 0.007601640182517538,
              "p5": 0.007601640182517538,
              "p95": 0.007601640182517538,
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
              "mean": 6.095702901292444e-09,
              "median": 6.095702901292444e-09,
              "min": 6.095702901292444e-09,
              "max": 6.095702901292444e-09,
              "p5": 6.095702901292444e-09,
              "p95": 6.095702901292444e-09,
              "count": 1
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0013941159742881081,
              "median": 0.0013941159742881081,
              "min": 0.0013941159742881081,
              "max": 0.0013941159742881081,
              "p5": 0.0013941159742881081,
              "p95": 0.0013941159742881081,
              "count": 1
            }
          },
          "returns": {
            "window_days": 63,
            "n_obs": 63,
            "stock": -0.021897810218977853,
            "market": 0.010074498505991514,
            "sector": -0.017405175048137878,
            "peers": -0.09027777777777757,
            "vs_market": -0.03197230872496937,
            "vs_sector": -0.004492635170839976,
            "vs_peers": 0.06837996755879971
          }
        }
      },
      "6m": {
        "label": "6M",
        "window_days": 126,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 126,
          "score_pca": 84.53237410071942,
          "score_pca_percentile": 84.53237410071942,
          "rank_pca": 87,
          "total": 556,
          "adv_notional_sgd": 560053.5,
          "adv_volume_shares": 844950.0,
          "free_float_shares": 457060801.0,
          "turnover_ratio": 0.0018486599554180538,
          "votes": 339.0,
          "trades": 339.0,
          "spread_pct": 0.007490636704119858,
          "spread_ticks": 1.0,
          "amihud": 4.541135179291274e-09,
          "volatility": 0.14094743066917453
        },
        "pca": {
          "valid": true,
          "window_days": 126,
          "variance_explained": 0.5764387099465414,
          "loadings": {
            "log_adv": 0.5043369557684604,
            "log_trades": 0.44878820121985075,
            "log_turnover": 0.4590374133143914,
            "neg_spread": 0.4328880506758777,
            "neg_amihud": 0.25836363885793356,
            "neg_vol": 0.28173427971727344
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
          "peer_median_volatility": 0.16045127864547296,
          "peer_median_spread_pct": 0.007132110152654033,
          "peer_median_spread_ticks": 1.0027144336532525,
          "peer_median_amihud": 5.138802991109125e-09,
          "peer_median_turnover_ratio": 0.0012379773026249335,
          "target_vs_peer": {
            "score_pca_delta": -2.16,
            "adv_delta_pct": -49.5,
            "trades_delta_pct": -55.86,
            "volatility_delta_pct": 12.16,
            "spread_pct_delta_pct": -5.03,
            "spread_ticks_delta_pct": -0.27,
            "amihud_delta_pct": 11.63,
            "turnover_ratio_delta_pct": 49.33
          }
        },
        "peer_liquidity": [
          {
            "ticker": "CRPU",
            "score_pca": 84.53237410071942,
            "rank_pca": 87,
            "adv": 560053.5,
            "trades": 339.0,
            "volatility": 0.14094743066917453,
            "spread_pct": 0.007490636704119858,
            "spread_ticks": 1.0,
            "amihud": 4.541135179291274e-09,
            "turnover_ratio": 0.0018486599554180538,
            "is_target": true
          },
          {
            "ticker": "AU8U",
            "score_pca": 86.6906474820144,
            "rank_pca": 75,
            "adv": 1108351.5,
            "trades": 768.0,
            "volatility": 0.16045127864547296,
            "spread_pct": 0.007132110152654033,
            "spread_ticks": 1.0027144336532525,
            "amihud": 5.138802991109125e-09,
            "turnover_ratio": 0.0012379773026249335,
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
              "mean": 0.6851689055587717,
              "median": 0.4624945889816816,
              "min": 0.0,
              "max": 6.985699678629192,
              "p5": 0.15323177086063294,
              "p95": 1.8914393249301802,
              "count": 556
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 2747945.1872802232,
              "median": 12310.599999999999,
              "min": 0.0,
              "max": 256049087.60000002,
              "p5": 0.0,
              "p95": 11294544.875,
              "count": 556
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.09526501651742214,
              "median": 0.029185270108170663,
              "min": 0.00027417717172845547,
              "max": 1.267605633802817,
              "p5": 0.003660934704961947,
              "p95": 0.46471971576868987,
              "count": 555
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.003840884285853694,
              "median": 0.00027734223726435956,
              "min": 0.0,
              "max": 1.1156153187001516,
              "p5": 0.0,
              "p95": 0.00804798878443962,
              "count": 549
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.0216300025357189e-05,
              "median": 1.5489757130014514e-07,
              "min": 0.0,
              "max": 0.0006620397444526588,
              "p5": 0.0,
              "p95": 3.3902671039230104e-05,
              "count": 555
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 404.7473021582734,
              "median": 7.0,
              "min": 0.0,
              "max": 10264.5,
              "p5": 0.0,
              "p95": 2348.75,
              "count": 556
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.3584363944812264,
              "median": 0.1628804111131808,
              "min": 0.11701983397127283,
              "max": 1.3927800402783015,
              "p5": 0.12539449281553844,
              "p95": 1.1010662903777295,
              "count": 8
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 8847831.79253441,
              "median": 632856.125,
              "min": 0.0,
              "max": 57868054.5,
              "p5": 13255.060000000001,
              "p95": 41257423.74999997,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.035912070928626784,
              "median": 0.008165425874846931,
              "min": 0.004274986168547341,
              "max": 0.13333333333333333,
              "p5": 0.004344991259624652,
              "p95": 0.12579667946059614,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.002336418902522286,
              "median": 0.0012965008506219111,
              "min": 0.0,
              "max": 0.006907218692928089,
              "p5": 8.300540271012086e-05,
              "p95": 0.006657644109312026,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 7.970547160045892e-07,
              "median": 4.839969085200199e-09,
              "min": 0.0,
              "max": 6.330000391958183e-06,
              "p5": 3.3048834462562446e-11,
              "p95": 4.125244046244744e-06,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1134.9375,
              "median": 383.25,
              "min": 0.0,
              "max": 5579.0,
              "p5": 8.225000000000001,
              "p95": 4294.324999999998,
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
              "mean": 0.16045127864547296,
              "median": 0.16045127864547296,
              "min": 0.16045127864547296,
              "max": 0.16045127864547296,
              "p5": 0.16045127864547296,
              "p95": 0.16045127864547296,
              "count": 1
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.007132110152654033,
              "median": 0.007132110152654033,
              "min": 0.007132110152654033,
              "max": 0.007132110152654033,
              "p5": 0.007132110152654033,
              "p95": 0.007132110152654033,
              "count": 1
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 1.0027144336532525,
              "median": 1.0027144336532525,
              "min": 1.0027144336532525,
              "max": 1.0027144336532525,
              "p5": 1.0027144336532525,
              "p95": 1.0027144336532525,
              "count": 1
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 5.138802991109125e-09,
              "median": 5.138802991109125e-09,
              "min": 5.138802991109125e-09,
              "max": 5.138802991109125e-09,
              "p5": 5.138802991109125e-09,
              "p95": 5.138802991109125e-09,
              "count": 1
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0012379773026249335,
              "median": 0.0012379773026249335,
              "min": 0.0012379773026249335,
              "max": 0.0012379773026249335,
              "p5": 0.0012379773026249335,
              "p95": 0.0012379773026249335,
              "count": 1
            }
          },
          "returns": {
            "window_days": 126,
            "n_obs": 126,
            "stock": -0.014705882352940458,
            "market": 0.12495053752206631,
            "sector": -0.01835894831732765,
            "peers": -0.17610062893081724,
            "vs_market": -0.13965641987500677,
            "vs_sector": 0.003653065964387192,
            "vs_peers": 0.16139474657787678
          }
        }
      }
    },
    "period_insights": {
      "1d": {
        "liquidity": "Immediate access looks orderly. Displayed bid depth matches ask depth at 1.00x and the spread is 1 tick, which supports clean execution today.",
        "market_comparison": "Recent price action is stronger than peers, with a 1M return of -0.0% compared with peers at -3.7%. That matters because relative resilience can help keep trading interest engaged."
      },
      "30d": {
        "liquidity": "1M score 81.1 vs peer median 83.8 (-2.7 pts).",
        "market_comparison": "Return -0.0% vs peers -3.7%."
      },
      "3m": {
        "liquidity": "Liquidity appears broadly steady rather than improving. Balanced displayed depth and a 1-tick spread suggest current access is holding in place.",
        "market_comparison": "Market factors still account for 41.1% of trading, which means broader moves remain a meaningful influence on tradability."
      },
      "6m": {
        "liquidity": "Longer-term liquidity is middle of the pack. A 6M score of 84.5 sits 2.2 points below the peer median, so access is reasonable but not as deep as stronger peers.",
        "market_comparison": "Primary average daily volume is S$560.1K compared with a peer median of S$1.1M. That matters because lower average volume usually means less capacity than the peer group."
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
      "current_regime": 1,
      "current_regime_label": "Normal / Active",
      "current_regime_probability": 0.9999895035322365,
      "current_regime_probability_display": ">99.9%",
      "current_probability_basis": "filtered",
      "historical_probability_basis": "smoothed",
      "current_driver_mix": {
        "market_share": {
          "median": 0.4113653776872972,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "41.1%",
          "display_range": null,
          "display_text": "41.1%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "share_pct",
          "value_pct": 41.1,
          "plain_english": "Market explains about 41.1% of price moves in the current state."
        },
        "sector_share": {
          "median": 0.3408188046991651,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "34.1%",
          "display_range": null,
          "display_text": "34.1%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "share_pct",
          "value_pct": 34.1,
          "plain_english": "Sector explains about 34.1% of price moves in the current state."
        },
        "company_share": {
          "median": 0.24781581761353771,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "24.8%",
          "display_range": null,
          "display_text": "24.8%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "share_pct",
          "value_pct": 24.8,
          "plain_english": "Company-specific explains about 24.8% of price moves in the current state."
        },
        "basis": "current_state"
      },
      "current_sensitivities": {
        "beta_market": {
          "median": 0.524663156107031,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "0.52",
          "display_range": null,
          "display_text": "0.52",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "beta",
          "strength_label": "Modest",
          "plain_english": "Modest market link: a 1% market move has lined up with about a 0.52% stock move in the same direction in this state.",
          "value_num": 0.52
        },
        "beta_stock_lag": {
          "median": 1.112932374185093,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "1.11",
          "display_range": null,
          "display_text": "1.11",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "lag_beta",
          "value_num": 1.11
        },
        "beta_sector": {
          "median": -0.22154713516317925,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "-0.22",
          "display_range": null,
          "display_text": "-0.22",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "beta",
          "strength_label": "Weak",
          "plain_english": "Weak sector link: a 1% sector move has lined up with about a 0.22% stock move in the opposite direction in this state.",
          "value_num": -0.22
        },
        "beta_market_lag": {
          "median": -0.5708279382659502,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "-0.57",
          "display_range": null,
          "display_text": "-0.57",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "lag_beta",
          "value_num": -0.57
        },
        "beta_sector_lag": {
          "median": 0.6822438017436517,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "0.68",
          "display_range": null,
          "display_text": "0.68",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "lag_beta",
          "value_num": 0.68
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
          "period_label": "2025-05-28 to 2025-05-30",
          "n_obs": 3,
          "partial_month": true,
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.3333333333333333,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "33.3%",
            "display_range": null,
            "display_text": "33.3%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 3 trading days.",
            "kind": "share_pct",
            "value_pct": 33.3,
            "plain_english": "Market explains about 33.3% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.3333333333333333,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "33.3%",
              "display_range": null,
              "display_text": "33.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 3 trading days.",
              "kind": "share_pct",
              "value_pct": 33.3,
              "plain_english": "Market explains about 33.3% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.3333333333333333,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "33.3%",
              "display_range": null,
              "display_text": "33.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 3 trading days.",
              "kind": "share_pct",
              "value_pct": 33.3,
              "plain_english": "Sector explains about 33.3% of price moves in the current state."
            },
            "company_share": {
              "median": 0.3333333333333333,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "33.3%",
              "display_range": null,
              "display_text": "33.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 3 trading days.",
              "kind": "share_pct",
              "value_pct": 33.3,
              "plain_english": "Company-specific explains about 33.3% of price moves in the current state."
            }
          },
          "summary": "May: Much more balanced across company, sector, and market factors, though based on only 3 trading days."
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
          "period_label": "2026-05-04 to 2026-05-22",
          "n_obs": 15,
          "partial_month": true,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.8139994538326518,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "81.4%",
            "display_range": null,
            "display_text": "81.4%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
            "kind": "share_pct",
            "value_pct": 81.4,
            "plain_english": "Company-specific explains about 81.4% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.0913438220575653,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "9.1%",
              "display_range": null,
              "display_text": "9.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
              "kind": "share_pct",
              "value_pct": 9.1,
              "plain_english": "Market explains about 9.1% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.09465672410978286,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "9.5%",
              "display_range": null,
              "display_text": "9.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
              "kind": "share_pct",
              "value_pct": 9.5,
              "plain_english": "Sector explains about 9.5% of price moves in the current state."
            },
            "company_share": {
              "median": 0.8139994538326518,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "81.4%",
              "display_range": null,
              "display_text": "81.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
              "kind": "share_pct",
              "value_pct": 81.4,
              "plain_english": "Company-specific explains about 81.4% of price moves in the current state."
            }
          },
          "summary": "May: Still clearly company-driven."
        }
      ],
      "regimes": [
        {
          "id": 0,
          "label": "Calm / Liquid",
          "pct_time": 0.3426293965164095,
          "expected_duration_days": 1.912946715250451,
          "current_probability": 0.0,
          "current_probability_display": "<0.1%",
          "current_probability_basis": "filtered",
          "n_days_effective": 85.99997852561879,
          "volatility": {
            "median": 3.299756484394349e-128,
            "low": 3.299756484394349e-128,
            "high": 3.299756484394349e-128
          },
          "volatility_label": "Calm / Liquid",
          "jump_probability": 0.10021082396187313,
          "jump_rate": 0.0,
          "risk_score": 0.02297769426638093,
          "metrics": {
            "rolling_vol_10d": 0.006509754760363265,
            "downside_vol_10d": 0.0035487079331930063,
            "drawdown_21d": 0.009505604279611708,
            "amihud_stress": 3.437195557616459e-252,
            "spread_rel": 75.85731897616114,
            "spread_ticks": 1.0171097564208393,
            "log_notional": 13.09679268534354,
            "log_trade_count": 5.722481202122028
          }
        },
        {
          "id": 1,
          "label": "Normal / Active",
          "pct_time": 0.343743305511238,
          "expected_duration_days": 1.7657170227006047,
          "current_probability": 0.9999895035322365,
          "current_probability_display": ">99.9%",
          "current_probability_basis": "filtered",
          "n_days_effective": 86.27956968332073,
          "volatility": {
            "median": 0.007420157159258862,
            "low": 0.007420157159258862,
            "high": 0.007420157159258862
          },
          "volatility_label": "Normal / Active",
          "jump_probability": 0.22270032957168412,
          "jump_rate": 4.1991011412691916e-176,
          "risk_score": 0.1484330410920206,
          "metrics": {
            "rolling_vol_10d": 0.006688366230954896,
            "downside_vol_10d": 0.0036669803291624306,
            "drawdown_21d": 0.009918527792807124,
            "amihud_stress": 0.8958658487748017,
            "spread_rel": 74.58761847085692,
            "spread_ticks": 1.0041668318996808,
            "log_notional": 13.244978827531327,
            "log_trade_count": 5.843982053873122
          }
        },
        {
          "id": 2,
          "label": "Stressed / Illiquid",
          "pct_time": 0.14629662068151578,
          "expected_duration_days": 1.4656554359730751,
          "current_probability": 1.0496467763575348e-05,
          "current_probability_display": "<0.1%",
          "current_probability_basis": "filtered",
          "n_days_effective": 36.72045179106046,
          "volatility": {
            "median": 0.012258775127171542,
            "low": 0.012258775127171542,
            "high": 0.012258775127171542
          },
          "volatility_label": "Stressed / Illiquid",
          "jump_probability": 0.32890834798068597,
          "jump_rate": 0.13616390202522594,
          "risk_score": 0.5251788910642508,
          "metrics": {
            "rolling_vol_10d": 0.008523055708458353,
            "downside_vol_10d": 0.004534176031044114,
            "drawdown_21d": 0.007660747269056335,
            "amihud_stress": 0.9354526287502107,
            "spread_rel": 77.85177874859573,
            "spread_ticks": 1.0532644135779807,
            "log_notional": 13.651333507580926,
            "log_trade_count": 5.792489159135572
          }
        },
        {
          "id": 3,
          "label": "Jump / Tail Shock",
          "pct_time": 0.1673306772908367,
          "expected_duration_days": 20.758620689655107,
          "current_probability": 1.7536705659000545e-26,
          "current_probability_display": "<0.1%",
          "current_probability_basis": "filtered",
          "n_days_effective": 42.000000000000014,
          "volatility": {
            "median": 0.014842549552227607,
            "low": 0.014842549552227607,
            "high": 0.014842549552227607
          },
          "volatility_label": "Jump / Tail Shock",
          "jump_probability": 0.19300365090871724,
          "jump_rate": 0.04761904761904786,
          "risk_score": 0.7686329289209936,
          "metrics": {
            "rolling_vol_10d": 0.013703232789931411,
            "downside_vol_10d": 0.010789110461193378,
            "drawdown_21d": 0.05147347269692713,
            "amihud_stress": 0.4579209094997629,
            "spread_rel": 76.65742404215183,
            "spread_ticks": 1.0154334671594103,
            "log_notional": 13.65584267177092,
            "log_trade_count": 6.1565920914484265
          }
        }
      ],
      "transitions": {
        "mean": [
          [
            0.4772462860424861,
            0.4175685981351748,
            0.10506902570743246,
            0.00011609011490666492
          ],
          [
            0.3666379264991081,
            0.43365783580058953,
            0.18837183512418065,
            0.011332402576121675
          ],
          [
            0.3445965921452544,
            0.3091531615322801,
            0.31771139692455613,
            0.028538849397909412
          ],
          [
            0.00023730422401518997,
            0.047697628287793316,
            0.0002378249632747983,
            0.9518272425249168
          ]
        ],
        "low": [],
        "high": [],
        "counts": [
          [
            41.0,
            36.0,
            9.0,
            0.0
          ],
          [
            31.0,
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
          "probability": 0.0,
          "probability_display": "<0.1%",
          "basis": "filtered"
        },
        {
          "id": 1,
          "label": "Normal / Active",
          "probability": 0.9999895035322365,
          "probability_display": ">99.9%",
          "basis": "filtered"
        },
        {
          "id": 2,
          "label": "Stressed / Illiquid",
          "probability": 1.0496467763575348e-05,
          "probability_display": "<0.1%",
          "basis": "filtered"
        },
        {
          "id": 3,
          "label": "Jump / Tail Shock",
          "probability": 1.7536705659000545e-26,
          "probability_display": "<0.1%",
          "basis": "filtered"
        }
      ],
      "jump_risk": {
        "current_probability": 0.2227014443807256,
        "current_score": 0.8424420635309241,
        "current_flag": false,
        "jump_threshold_score": 2.5,
        "method": "robust_residual_and_return_jump_overlay",
        "model_definition": "jump_score_feature_overlay"
      },
      "model_selection": {
        "chosen": 4,
        "criterion": "bic_with_min_state_support",
        "bic": 11065.67458974684,
        "loglik": -5005.156539186335,
        "n_params": 191,
        "bic_delta_vs_next_best": 534.9813366183771,
        "candidates": [
          {
            "k": 2,
            "valid": true,
            "reason": "ok",
            "bic": 13427.526752421329,
            "loglik": -6462.355267480169,
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
                "bic": 13427.526752421329,
                "loglik": -6462.355267480169,
                "n_params": 91,
                "converged": true,
                "iterations": 9
              },
              {
                "seed": 1337,
                "k": 2,
                "valid": true,
                "reason": "ok",
                "bic": 13427.526752421329,
                "loglik": -6462.355267480169,
                "n_params": 91,
                "converged": true,
                "iterations": 9
              },
              {
                "seed": 2027,
                "k": 2,
                "valid": true,
                "reason": "ok",
                "bic": 13427.526752421329,
                "loglik": -6462.355267480169,
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
            "bic": 11600.655926365218,
            "loglik": -5413.546257443384,
            "n_params": 140,
            "converged": true,
            "iterations": 17,
            "best_seed": 1337,
            "seed_runs": [
              {
                "seed": 42,
                "k": 3,
                "valid": true,
                "reason": "ok",
                "bic": 11600.655926418107,
                "loglik": -5413.546257469829,
                "n_params": 140,
                "converged": true,
                "iterations": 24
              },
              {
                "seed": 1337,
                "k": 3,
                "valid": true,
                "reason": "ok",
                "bic": 11600.655926365218,
                "loglik": -5413.546257443384,
                "n_params": 140,
                "converged": true,
                "iterations": 17
              },
              {
                "seed": 2027,
                "k": 3,
                "valid": true,
                "reason": "ok",
                "bic": 11600.65592646007,
                "loglik": -5413.54625749081,
                "n_params": 140,
                "converged": true,
                "iterations": 19
              }
            ]
          },
          {
            "k": 4,
            "valid": true,
            "reason": "ok",
            "bic": 11065.67458974684,
            "loglik": -5005.156539186335,
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
                "bic": 11065.67458974684,
                "loglik": -5005.156539186335,
                "n_params": 191,
                "converged": true,
                "iterations": 21
              },
              {
                "seed": 1337,
                "k": 4,
                "valid": true,
                "reason": "ok",
                "bic": 11065.67462901882,
                "loglik": -5005.156558822325,
                "n_params": 191,
                "converged": true,
                "iterations": 20
              },
              {
                "seed": 2027,
                "k": 4,
                "valid": true,
                "reason": "ok",
                "bic": 12781.389291306183,
                "loglik": -5863.013889966006,
                "n_params": 191,
                "converged": true,
                "iterations": 44
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
              "bic": 11065.67458974684,
              "valid": true,
              "reason": null
            },
            {
              "seed": 1337,
              "selected_states": 4,
              "bic": 11065.67462901882,
              "valid": true,
              "reason": null
            },
            {
              "seed": 2027,
              "selected_states": 3,
              "bic": 11600.65592646007,
              "valid": true,
              "reason": null
            }
          ],
          "selected_state_counts": {
            "4": 2,
            "3": 1
          },
          "selected_state_share": 0.6666666666666666,
          "stable": false,
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
                "2": 6467.869962449742,
                "3": 5525.580118625632,
                "4": 6099.666697886424
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
                "2": 10328.863141209953,
                "3": 9974.363750938483,
                "4": 8811.882226801812
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
                "2": 13427.526752421329,
                "3": 11600.655926418107,
                "4": 11065.674663314352
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
        "bic_delta_vs_next_best": 534.9813366183771,
        "state_count_interpretation": "251 observations allowed the current rule to test up to 4 states; BIC preferred 4 with a 534.98 improvement versus the next best valid state count.",
        "parameter_count": {
          "formula": "k^2 - 1 + 2*k*d",
          "n_parameters": 191,
          "observations_per_parameter": 1.3141361256544504,
          "parameter_pressure_label": "parameter_heavy"
        },
        "state_occupancy": {
          "min_effective_days_required": 7.529999999999999,
          "min_effective_days_observed": 36.72045179106046,
          "passes": true,
          "states": [
            {
              "id": 0,
              "label": "Calm / Liquid",
              "effective_days": 85.99997852561879,
              "pct_time": 0.3426293965164095,
              "passes_min_support": true
            },
            {
              "id": 1,
              "label": "Normal / Active",
              "effective_days": 86.27956968332073,
              "pct_time": 0.343743305511238,
              "passes_min_support": true
            },
            {
              "id": 2,
              "label": "Stressed / Illiquid",
              "effective_days": 36.72045179106046,
              "pct_time": 0.14629662068151578,
              "passes_min_support": true
            },
            {
              "id": 3,
              "label": "Jump / Tail Shock",
              "effective_days": 42.000000000000014,
              "pct_time": 0.1673306772908367,
              "passes_min_support": true
            }
          ]
        },
        "transition_diagnostics": {
          "self_transition_probabilities": [
            0.4772462860424861,
            0.43365783580058953,
            0.31771139692455613,
            0.9518272425249168
          ],
          "expected_duration_days": [
            1.912946715250451,
            1.7657170227006047,
            1.4656554359730751,
            20.758620689655107
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
              "bic": 11065.67458974684,
              "valid": true,
              "reason": null
            },
            {
              "seed": 1337,
              "selected_states": 4,
              "bic": 11065.67462901882,
              "valid": true,
              "reason": null
            },
            {
              "seed": 2027,
              "selected_states": 3,
              "bic": 11600.65592646007,
              "valid": true,
              "reason": null
            }
          ],
          "selected_state_counts": {
            "4": 2,
            "3": 1
          },
          "selected_state_share": 0.6666666666666666,
          "stable": false,
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
                "2": 6467.869962449742,
                "3": 5525.580118625632,
                "4": 6099.666697886424
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
                "2": 10328.863141209953,
                "3": 9974.363750938483,
                "4": 8811.882226801812
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
                "2": 13427.526752421329,
                "3": 11600.655926418107,
                "4": 11065.674663314352
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
            "risk_score": 0.02297769426638093,
            "jump_probability": 0.10021082396187313,
            "jump_rate": 0.0,
            "rolling_vol_10d": 0.006509754760363265,
            "downside_vol_10d": 0.0035487079331930063,
            "drawdown_21d": 0.009505604279611708,
            "amihud_stress": 3.437195557616459e-252,
            "spread_rel": 75.85731897616114,
            "spread_ticks": 1.0171097564208393,
            "log_notional": 13.09679268534354,
            "log_trade_count": 5.722481202122028
          },
          {
            "id": 1,
            "label": "Normal / Active",
            "risk_score": 0.1484330410920206,
            "jump_probability": 0.22270032957168412,
            "jump_rate": 4.1991011412691916e-176,
            "rolling_vol_10d": 0.006688366230954896,
            "downside_vol_10d": 0.0036669803291624306,
            "drawdown_21d": 0.009918527792807124,
            "amihud_stress": 0.8958658487748017,
            "spread_rel": 74.58761847085692,
            "spread_ticks": 1.0041668318996808,
            "log_notional": 13.244978827531327,
            "log_trade_count": 5.843982053873122
          },
          {
            "id": 2,
            "label": "Stressed / Illiquid",
            "risk_score": 0.5251788910642508,
            "jump_probability": 0.32890834798068597,
            "jump_rate": 0.13616390202522594,
            "rolling_vol_10d": 0.008523055708458353,
            "downside_vol_10d": 0.004534176031044114,
            "drawdown_21d": 0.007660747269056335,
            "amihud_stress": 0.9354526287502107,
            "spread_rel": 77.85177874859573,
            "spread_ticks": 1.0532644135779807,
            "log_notional": 13.651333507580926,
            "log_trade_count": 5.792489159135572
          },
          {
            "id": 3,
            "label": "Jump / Tail Shock",
            "risk_score": 0.7686329289209936,
            "jump_probability": 0.19300365090871724,
            "jump_rate": 0.04761904761904786,
            "rolling_vol_10d": 0.013703232789931411,
            "downside_vol_10d": 0.010789110461193378,
            "drawdown_21d": 0.05147347269692713,
            "amihud_stress": 0.4579209094997629,
            "spread_rel": 76.65742404215183,
            "spread_ticks": 1.0154334671594103,
            "log_notional": 13.65584267177092,
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
          "trade_date": "2026-05-11",
          "state": 1,
          "probabilities": [
            0.0,
            0.9996866752965081,
            0.0003133247034918158,
            3.725626956698414e-23
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            0.0,
            0.9995605471648039,
            0.00043945283519620224,
            3.386848430669758e-22
          ],
          "jump_probability": 0.1544534152014349,
          "jump_score": 0.7716602321580738
        },
        {
          "trade_date": "2026-05-12",
          "state": 1,
          "probabilities": [
            0.0,
            0.9999981866302458,
            1.813369754192835e-06,
            5.612214395103193e-26
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            0.0,
            0.9999974563626256,
            2.543637374377759e-06,
            5.102552763833005e-25
          ],
          "jump_probability": 0.14041641997052168,
          "jump_score": 0.6744907594765952
        },
        {
          "trade_date": "2026-05-13",
          "state": 1,
          "probabilities": [
            0.0,
            0.9999926516037431,
            7.348396256930499e-06,
            6.223859870878339e-27
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            0.0,
            0.9999896923080432,
            1.0307691956734568e-05,
            5.6586308578831e-26
          ],
          "jump_probability": 0.14112182523823602,
          "jump_score": 0.6795621185704072
        },
        {
          "trade_date": "2026-05-14",
          "state": 1,
          "probabilities": [
            0.0,
            0.9999943410888176,
            5.658911182465756e-06,
            1.3304627606590135e-25
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            0.0,
            0.9999920621799226,
            7.9378200773262e-06,
            1.2096372312102434e-24
          ],
          "jump_probability": 0.14041641997052026,
          "jump_score": 0.6744907594765851
        },
        {
          "trade_date": "2026-05-15",
          "state": 1,
          "probabilities": [
            0.0,
            0.9999930153507233,
            6.984649276780587e-06,
            1.622061561750186e-27
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            0.0,
            0.9999958587732267,
            4.141226773265088e-06,
            1.284775061792533e-24
          ],
          "jump_probability": 0.139724352328269,
          "jump_score": 0.6694945316286194
        },
        {
          "trade_date": "2026-05-18",
          "state": 2,
          "probabilities": [
            0.0,
            2.954588215632631e-33,
            1.0,
            6.432804390467025e-26
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            0.0,
            2.7769659455306665e-33,
            1.0,
            9.341268481653379e-23
          ],
          "jump_probability": 0.16916437227480796,
          "jump_score": 0.866033812634218
        },
        {
          "trade_date": "2026-05-19",
          "state": 0,
          "probabilities": [
            0.9999999868486474,
            2.3714559982784323e-217,
            1.3151352600301993e-08,
            6.596608110983262e-29
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            0.9999999817861399,
            3.0868834894665186e-217,
            1.8213860193891763e-08,
            1.3266543055756365e-25
          ],
          "jump_probability": 0.14359152555267354,
          "jump_score": 0.6971523378415158
        },
        {
          "trade_date": "2026-05-20",
          "state": 0,
          "probabilities": [
            0.9999999999735465,
            2.290266891675403e-218,
            2.6453476979388375e-11,
            7.70899946676603e-32
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            0.9999999999633635,
            2.981201040828985e-218,
            3.6636530740456033e-11,
            1.5503691010333642e-28
          ],
          "jump_probability": 0.11619630067346705,
          "jump_score": 0.4856921997052867
        },
        {
          "trade_date": "2026-05-21",
          "state": 0,
          "probabilities": [
            0.9999999999998064,
            1.594058467895771e-220,
            1.9351850127802877e-13,
            1.2874004186170462e-29
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            0.9999999999997387,
            1.5349052415050945e-220,
            2.6137411289819727e-13,
            1.1270655130043988e-28
          ],
          "jump_probability": 0.0834133878987866,
          "jump_score": 0.1657845712351896
        },
        {
          "trade_date": "2026-05-22",
          "state": 1,
          "probabilities": [
            0.0,
            0.9999895035322365,
            1.0496467763575348e-05,
            1.7536705659000545e-26
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            0.0,
            0.9999895035322365,
            1.0496467763575348e-05,
            1.7536705659000545e-26
          ],
          "jump_probability": 0.16538538987390247,
          "jump_score": 0.8424420635309241
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
        "market_link_display": "0.52",
        "sector_link_display": "-0.22",
        "market_link_explainer": "Modest market link. A 1% market move has lined up with about a 0.52% stock move in the same direction in this state. This is a point estimate from 251 trading days.",
        "sector_link_explainer": "Weak sector link. A 1% sector move has lined up with about a 0.22% stock move in the opposite direction in this state. This is a point estimate from 251 trading days.",
        "stock_persistence_display": "1.11",
        "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
        "history_limited_note": "Read is based on 251 trading days versus the 252-day target."
      },
      "current_summary": {
        "regime_label": "Normal / Active",
        "dominant_driver": "market",
        "dominant_driver_label": "Market",
        "driver_share_pct": 41.1,
        "driver_share_display": "41.1%",
        "confidence_label": "High, limited history",
        "confidence_pct": 99.9,
        "confidence_display": ">99.9%",
        "probability_basis": "filtered",
        "display_confidence_pct": null,
        "confidence_note": "Based on 251 trading days relative to the 252-day target.",
        "history_days": 251,
        "history_limited": true,
        "volatility_label": "Normal / Active",
        "jump_risk_label": "Contained",
        "jump_risk_probability": 22.3,
        "jump_risk_score": 0.84,
        "jump_risk_note": "Jump risk is contained based on recent residual and return shocks.",
        "lead_signal_text": "No stable lead signal.",
        "state_term": "state",
        "stay_probability": 0.43365783580058953,
        "effective_days": 86.3,
        "persistence_note": "This looks like a short-lived state, not a sticky regime: the typical run length is about 1.8 days.",
        "expected_duration_days": 1.8
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
          "pct_time": 0.3426293965164095,
          "expected_duration_days": 1.912946715250451,
          "current_probability": 0.0,
          "current_probability_display": "<0.1%",
          "current_probability_basis": "filtered",
          "n_days_effective": 85.99997852561879,
          "volatility": {
            "median": 3.299756484394349e-128,
            "low": 3.299756484394349e-128,
            "high": 3.299756484394349e-128
          },
          "volatility_label": "Calm / Liquid",
          "jump_probability": 0.10021082396187313,
          "jump_rate": 0.0,
          "risk_score": 0.02297769426638093,
          "metrics": {
            "rolling_vol_10d": 0.006509754760363265,
            "downside_vol_10d": 0.0035487079331930063,
            "drawdown_21d": 0.009505604279611708,
            "amihud_stress": 3.437195557616459e-252,
            "spread_rel": 75.85731897616114,
            "spread_ticks": 1.0171097564208393,
            "log_notional": 13.09679268534354,
            "log_trade_count": 5.722481202122028
          }
        },
        {
          "id": 1,
          "label": "Normal / Active",
          "pct_time": 0.343743305511238,
          "expected_duration_days": 1.7657170227006047,
          "current_probability": 0.9999895035322365,
          "current_probability_display": ">99.9%",
          "current_probability_basis": "filtered",
          "n_days_effective": 86.27956968332073,
          "volatility": {
            "median": 0.007420157159258862,
            "low": 0.007420157159258862,
            "high": 0.007420157159258862
          },
          "volatility_label": "Normal / Active",
          "jump_probability": 0.22270032957168412,
          "jump_rate": 4.1991011412691916e-176,
          "risk_score": 0.1484330410920206,
          "metrics": {
            "rolling_vol_10d": 0.006688366230954896,
            "downside_vol_10d": 0.0036669803291624306,
            "drawdown_21d": 0.009918527792807124,
            "amihud_stress": 0.8958658487748017,
            "spread_rel": 74.58761847085692,
            "spread_ticks": 1.0041668318996808,
            "log_notional": 13.244978827531327,
            "log_trade_count": 5.843982053873122
          }
        },
        {
          "id": 2,
          "label": "Stressed / Illiquid",
          "pct_time": 0.14629662068151578,
          "expected_duration_days": 1.4656554359730751,
          "current_probability": 1.0496467763575348e-05,
          "current_probability_display": "<0.1%",
          "current_probability_basis": "filtered",
          "n_days_effective": 36.72045179106046,
          "volatility": {
            "median": 0.012258775127171542,
            "low": 0.012258775127171542,
            "high": 0.012258775127171542
          },
          "volatility_label": "Stressed / Illiquid",
          "jump_probability": 0.32890834798068597,
          "jump_rate": 0.13616390202522594,
          "risk_score": 0.5251788910642508,
          "metrics": {
            "rolling_vol_10d": 0.008523055708458353,
            "downside_vol_10d": 0.004534176031044114,
            "drawdown_21d": 0.007660747269056335,
            "amihud_stress": 0.9354526287502107,
            "spread_rel": 77.85177874859573,
            "spread_ticks": 1.0532644135779807,
            "log_notional": 13.651333507580926,
            "log_trade_count": 5.792489159135572
          }
        },
        {
          "id": 3,
          "label": "Jump / Tail Shock",
          "pct_time": 0.1673306772908367,
          "expected_duration_days": 20.758620689655107,
          "current_probability": 1.7536705659000545e-26,
          "current_probability_display": "<0.1%",
          "current_probability_basis": "filtered",
          "n_days_effective": 42.000000000000014,
          "volatility": {
            "median": 0.014842549552227607,
            "low": 0.014842549552227607,
            "high": 0.014842549552227607
          },
          "volatility_label": "Jump / Tail Shock",
          "jump_probability": 0.19300365090871724,
          "jump_rate": 0.04761904761904786,
          "risk_score": 0.7686329289209936,
          "metrics": {
            "rolling_vol_10d": 0.013703232789931411,
            "downside_vol_10d": 0.010789110461193378,
            "drawdown_21d": 0.05147347269692713,
            "amihud_stress": 0.4579209094997629,
            "spread_rel": 76.65742404215183,
            "spread_ticks": 1.0154334671594103,
            "log_notional": 13.65584267177092,
            "log_trade_count": 6.1565920914484265
          }
        }
      ],
      "transitions": [
        [
          0.4772462860424861,
          0.4175685981351748,
          0.10506902570743246,
          0.00011609011490666492
        ],
        [
          0.3666379264991081,
          0.43365783580058953,
          0.18837183512418065,
          0.011332402576121675
        ],
        [
          0.3445965921452544,
          0.3091531615322801,
          0.31771139692455613,
          0.028538849397909412
        ],
        [
          0.00023730422401518997,
          0.047697628287793316,
          0.0002378249632747983,
          0.9518272425249168
        ]
      ],
      "transition_intervals": {
        "mean": [
          [
            0.4772462860424861,
            0.4175685981351748,
            0.10506902570743246,
            0.00011609011490666492
          ],
          [
            0.3666379264991081,
            0.43365783580058953,
            0.18837183512418065,
            0.011332402576121675
          ],
          [
            0.3445965921452544,
            0.3091531615322801,
            0.31771139692455613,
            0.028538849397909412
          ],
          [
            0.00023730422401518997,
            0.047697628287793316,
            0.0002378249632747983,
            0.9518272425249168
          ]
        ],
        "low": [],
        "high": [],
        "counts": [
          [
            41.0,
            36.0,
            9.0,
            0.0
          ],
          [
            31.0,
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
      "current_regime": 1,
      "current_regime_label": "Normal / Active",
      "current_regime_probability": 0.9999895035322365,
      "current_regime_probability_display": ">99.9%",
      "current_probability_basis": "filtered",
      "historical_probability_basis": "smoothed",
      "current_state_is_transition": false,
      "state_probabilities": [
        {
          "id": 0,
          "label": "Calm / Liquid",
          "probability": 0.0,
          "probability_display": "<0.1%",
          "basis": "filtered"
        },
        {
          "id": 1,
          "label": "Normal / Active",
          "probability": 0.9999895035322365,
          "probability_display": ">99.9%",
          "basis": "filtered"
        },
        {
          "id": 2,
          "label": "Stressed / Illiquid",
          "probability": 1.0496467763575348e-05,
          "probability_display": "<0.1%",
          "basis": "filtered"
        },
        {
          "id": 3,
          "label": "Jump / Tail Shock",
          "probability": 1.7536705659000545e-26,
          "probability_display": "<0.1%",
          "basis": "filtered"
        }
      ],
      "jump_risk": {
        "current_probability": 0.2227014443807256,
        "current_score": 0.8424420635309241,
        "current_flag": false,
        "jump_threshold_score": 2.5,
        "method": "robust_residual_and_return_jump_overlay",
        "model_definition": "jump_score_feature_overlay"
      },
      "model_selection": {
        "chosen": 4,
        "criterion": "bic_with_min_state_support",
        "bic": 11065.67458974684,
        "loglik": -5005.156539186335,
        "n_params": 191,
        "bic_delta_vs_next_best": 534.9813366183771,
        "candidates": [
          {
            "k": 2,
            "valid": true,
            "reason": "ok",
            "bic": 13427.526752421329,
            "loglik": -6462.355267480169,
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
                "bic": 13427.526752421329,
                "loglik": -6462.355267480169,
                "n_params": 91,
                "converged": true,
                "iterations": 9
              },
              {
                "seed": 1337,
                "k": 2,
                "valid": true,
                "reason": "ok",
                "bic": 13427.526752421329,
                "loglik": -6462.355267480169,
                "n_params": 91,
                "converged": true,
                "iterations": 9
              },
              {
                "seed": 2027,
                "k": 2,
                "valid": true,
                "reason": "ok",
                "bic": 13427.526752421329,
                "loglik": -6462.355267480169,
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
            "bic": 11600.655926365218,
            "loglik": -5413.546257443384,
            "n_params": 140,
            "converged": true,
            "iterations": 17,
            "best_seed": 1337,
            "seed_runs": [
              {
                "seed": 42,
                "k": 3,
                "valid": true,
                "reason": "ok",
                "bic": 11600.655926418107,
                "loglik": -5413.546257469829,
                "n_params": 140,
                "converged": true,
                "iterations": 24
              },
              {
                "seed": 1337,
                "k": 3,
                "valid": true,
                "reason": "ok",
                "bic": 11600.655926365218,
                "loglik": -5413.546257443384,
                "n_params": 140,
                "converged": true,
                "iterations": 17
              },
              {
                "seed": 2027,
                "k": 3,
                "valid": true,
                "reason": "ok",
                "bic": 11600.65592646007,
                "loglik": -5413.54625749081,
                "n_params": 140,
                "converged": true,
                "iterations": 19
              }
            ]
          },
          {
            "k": 4,
            "valid": true,
            "reason": "ok",
            "bic": 11065.67458974684,
            "loglik": -5005.156539186335,
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
                "bic": 11065.67458974684,
                "loglik": -5005.156539186335,
                "n_params": 191,
                "converged": true,
                "iterations": 21
              },
              {
                "seed": 1337,
                "k": 4,
                "valid": true,
                "reason": "ok",
                "bic": 11065.67462901882,
                "loglik": -5005.156558822325,
                "n_params": 191,
                "converged": true,
                "iterations": 20
              },
              {
                "seed": 2027,
                "k": 4,
                "valid": true,
                "reason": "ok",
                "bic": 12781.389291306183,
                "loglik": -5863.013889966006,
                "n_params": 191,
                "converged": true,
                "iterations": 44
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
              "bic": 11065.67458974684,
              "valid": true,
              "reason": null
            },
            {
              "seed": 1337,
              "selected_states": 4,
              "bic": 11065.67462901882,
              "valid": true,
              "reason": null
            },
            {
              "seed": 2027,
              "selected_states": 3,
              "bic": 11600.65592646007,
              "valid": true,
              "reason": null
            }
          ],
          "selected_state_counts": {
            "4": 2,
            "3": 1
          },
          "selected_state_share": 0.6666666666666666,
          "stable": false,
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
                "2": 6467.869962449742,
                "3": 5525.580118625632,
                "4": 6099.666697886424
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
                "2": 10328.863141209953,
                "3": 9974.363750938483,
                "4": 8811.882226801812
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
                "2": 13427.526752421329,
                "3": 11600.655926418107,
                "4": 11065.674663314352
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
        "bic_delta_vs_next_best": 534.9813366183771,
        "state_count_interpretation": "251 observations allowed the current rule to test up to 4 states; BIC preferred 4 with a 534.98 improvement versus the next best valid state count.",
        "parameter_count": {
          "formula": "k^2 - 1 + 2*k*d",
          "n_parameters": 191,
          "observations_per_parameter": 1.3141361256544504,
          "parameter_pressure_label": "parameter_heavy"
        },
        "state_occupancy": {
          "min_effective_days_required": 7.529999999999999,
          "min_effective_days_observed": 36.72045179106046,
          "passes": true,
          "states": [
            {
              "id": 0,
              "label": "Calm / Liquid",
              "effective_days": 85.99997852561879,
              "pct_time": 0.3426293965164095,
              "passes_min_support": true
            },
            {
              "id": 1,
              "label": "Normal / Active",
              "effective_days": 86.27956968332073,
              "pct_time": 0.343743305511238,
              "passes_min_support": true
            },
            {
              "id": 2,
              "label": "Stressed / Illiquid",
              "effective_days": 36.72045179106046,
              "pct_time": 0.14629662068151578,
              "passes_min_support": true
            },
            {
              "id": 3,
              "label": "Jump / Tail Shock",
              "effective_days": 42.000000000000014,
              "pct_time": 0.1673306772908367,
              "passes_min_support": true
            }
          ]
        },
        "transition_diagnostics": {
          "self_transition_probabilities": [
            0.4772462860424861,
            0.43365783580058953,
            0.31771139692455613,
            0.9518272425249168
          ],
          "expected_duration_days": [
            1.912946715250451,
            1.7657170227006047,
            1.4656554359730751,
            20.758620689655107
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
              "bic": 11065.67458974684,
              "valid": true,
              "reason": null
            },
            {
              "seed": 1337,
              "selected_states": 4,
              "bic": 11065.67462901882,
              "valid": true,
              "reason": null
            },
            {
              "seed": 2027,
              "selected_states": 3,
              "bic": 11600.65592646007,
              "valid": true,
              "reason": null
            }
          ],
          "selected_state_counts": {
            "4": 2,
            "3": 1
          },
          "selected_state_share": 0.6666666666666666,
          "stable": false,
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
                "2": 6467.869962449742,
                "3": 5525.580118625632,
                "4": 6099.666697886424
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
                "2": 10328.863141209953,
                "3": 9974.363750938483,
                "4": 8811.882226801812
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
                "2": 13427.526752421329,
                "3": 11600.655926418107,
                "4": 11065.674663314352
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
            "risk_score": 0.02297769426638093,
            "jump_probability": 0.10021082396187313,
            "jump_rate": 0.0,
            "rolling_vol_10d": 0.006509754760363265,
            "downside_vol_10d": 0.0035487079331930063,
            "drawdown_21d": 0.009505604279611708,
            "amihud_stress": 3.437195557616459e-252,
            "spread_rel": 75.85731897616114,
            "spread_ticks": 1.0171097564208393,
            "log_notional": 13.09679268534354,
            "log_trade_count": 5.722481202122028
          },
          {
            "id": 1,
            "label": "Normal / Active",
            "risk_score": 0.1484330410920206,
            "jump_probability": 0.22270032957168412,
            "jump_rate": 4.1991011412691916e-176,
            "rolling_vol_10d": 0.006688366230954896,
            "downside_vol_10d": 0.0036669803291624306,
            "drawdown_21d": 0.009918527792807124,
            "amihud_stress": 0.8958658487748017,
            "spread_rel": 74.58761847085692,
            "spread_ticks": 1.0041668318996808,
            "log_notional": 13.244978827531327,
            "log_trade_count": 5.843982053873122
          },
          {
            "id": 2,
            "label": "Stressed / Illiquid",
            "risk_score": 0.5251788910642508,
            "jump_probability": 0.32890834798068597,
            "jump_rate": 0.13616390202522594,
            "rolling_vol_10d": 0.008523055708458353,
            "downside_vol_10d": 0.004534176031044114,
            "drawdown_21d": 0.007660747269056335,
            "amihud_stress": 0.9354526287502107,
            "spread_rel": 77.85177874859573,
            "spread_ticks": 1.0532644135779807,
            "log_notional": 13.651333507580926,
            "log_trade_count": 5.792489159135572
          },
          {
            "id": 3,
            "label": "Jump / Tail Shock",
            "risk_score": 0.7686329289209936,
            "jump_probability": 0.19300365090871724,
            "jump_rate": 0.04761904761904786,
            "rolling_vol_10d": 0.013703232789931411,
            "downside_vol_10d": 0.010789110461193378,
            "drawdown_21d": 0.05147347269692713,
            "amihud_stress": 0.4579209094997629,
            "spread_rel": 76.65742404215183,
            "spread_ticks": 1.0154334671594103,
            "log_notional": 13.65584267177092,
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
          "trade_date": "2026-05-11",
          "state": 1,
          "probabilities": [
            0.0,
            0.9996866752965081,
            0.0003133247034918158,
            3.725626956698414e-23
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            0.0,
            0.9995605471648039,
            0.00043945283519620224,
            3.386848430669758e-22
          ],
          "jump_probability": 0.1544534152014349,
          "jump_score": 0.7716602321580738
        },
        {
          "trade_date": "2026-05-12",
          "state": 1,
          "probabilities": [
            0.0,
            0.9999981866302458,
            1.813369754192835e-06,
            5.612214395103193e-26
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            0.0,
            0.9999974563626256,
            2.543637374377759e-06,
            5.102552763833005e-25
          ],
          "jump_probability": 0.14041641997052168,
          "jump_score": 0.6744907594765952
        },
        {
          "trade_date": "2026-05-13",
          "state": 1,
          "probabilities": [
            0.0,
            0.9999926516037431,
            7.348396256930499e-06,
            6.223859870878339e-27
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            0.0,
            0.9999896923080432,
            1.0307691956734568e-05,
            5.6586308578831e-26
          ],
          "jump_probability": 0.14112182523823602,
          "jump_score": 0.6795621185704072
        },
        {
          "trade_date": "2026-05-14",
          "state": 1,
          "probabilities": [
            0.0,
            0.9999943410888176,
            5.658911182465756e-06,
            1.3304627606590135e-25
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            0.0,
            0.9999920621799226,
            7.9378200773262e-06,
            1.2096372312102434e-24
          ],
          "jump_probability": 0.14041641997052026,
          "jump_score": 0.6744907594765851
        },
        {
          "trade_date": "2026-05-15",
          "state": 1,
          "probabilities": [
            0.0,
            0.9999930153507233,
            6.984649276780587e-06,
            1.622061561750186e-27
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            0.0,
            0.9999958587732267,
            4.141226773265088e-06,
            1.284775061792533e-24
          ],
          "jump_probability": 0.139724352328269,
          "jump_score": 0.6694945316286194
        },
        {
          "trade_date": "2026-05-18",
          "state": 2,
          "probabilities": [
            0.0,
            2.954588215632631e-33,
            1.0,
            6.432804390467025e-26
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            0.0,
            2.7769659455306665e-33,
            1.0,
            9.341268481653379e-23
          ],
          "jump_probability": 0.16916437227480796,
          "jump_score": 0.866033812634218
        },
        {
          "trade_date": "2026-05-19",
          "state": 0,
          "probabilities": [
            0.9999999868486474,
            2.3714559982784323e-217,
            1.3151352600301993e-08,
            6.596608110983262e-29
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            0.9999999817861399,
            3.0868834894665186e-217,
            1.8213860193891763e-08,
            1.3266543055756365e-25
          ],
          "jump_probability": 0.14359152555267354,
          "jump_score": 0.6971523378415158
        },
        {
          "trade_date": "2026-05-20",
          "state": 0,
          "probabilities": [
            0.9999999999735465,
            2.290266891675403e-218,
            2.6453476979388375e-11,
            7.70899946676603e-32
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            0.9999999999633635,
            2.981201040828985e-218,
            3.6636530740456033e-11,
            1.5503691010333642e-28
          ],
          "jump_probability": 0.11619630067346705,
          "jump_score": 0.4856921997052867
        },
        {
          "trade_date": "2026-05-21",
          "state": 0,
          "probabilities": [
            0.9999999999998064,
            1.594058467895771e-220,
            1.9351850127802877e-13,
            1.2874004186170462e-29
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            0.9999999999997387,
            1.5349052415050945e-220,
            2.6137411289819727e-13,
            1.1270655130043988e-28
          ],
          "jump_probability": 0.0834133878987866,
          "jump_score": 0.1657845712351896
        },
        {
          "trade_date": "2026-05-22",
          "state": 1,
          "probabilities": [
            0.0,
            0.9999895035322365,
            1.0496467763575348e-05,
            1.7536705659000545e-26
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            0.0,
            0.9999895035322365,
            1.0496467763575348e-05,
            1.7536705659000545e-26
          ],
          "jump_probability": 0.16538538987390247,
          "jump_score": 0.8424420635309241
        }
      ]
    }
  },
  "theme": {
    "badges": {
      "liq_section": {
        "text": "Liquidity score: 84.5 — Strong",
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
    "liq_subtitle": "Liquidity looks serviceable for the stock’s size. The 6M liquidity score is 84.5 compared with a peer median of 86.7, while a 1-tick spread and balanced displayed depth keep near-term access orderly.",
    "market_comparison_title": "How You Compare to the Market",
    "market_comparison_subtitle": "Context relative to market, sector, and peer medians.",
    "perf_title": "Stock Performance",
    "perf_subtitle": "Recent performance is mixed: the stock was flat over 1M, ahead of peers at -3.7% but behind the market at +1.3%.",
    "perf_insight": "Performance is strong relative to comparison groups. Recent price performance is weaker than peers and the market, so the tape is not being cushioned by stronger momentum. Recent trend context is too limited to say whether access has changed from the 1M baseline.",
    "drivers_title": "What Moves Your Stock Price?",
    "drivers_subtitle": "Market moves are the main influence right now, with 41.1% of the current driver mix tied to the broader tape.",
    "drivers_strip": [
      {
        "title": "Current Driver (Last 5 Days)",
        "text": "Over the last 5 trading days, moves are mainly market-driven, accounting for about 41.1% of price changes. Other influences are sector 34.1%, and company-specific 24.8%."
      },
      {
        "title": "Driver Mix",
        "text": "Based on the last 5 trading days, current mix is market 41.1%, sector 34.1%, and company-specific 24.8%."
      },
      {
        "title": "Monthly Trend",
        "text": "The driver mix has been consistently company-driven across Mar to May."
      }
    ],
    "drivers_pie_title": "Current Driver Mix (Last 5 Days)",
    "drivers_pie_note": "Based on the last 5 trading days, current split is market 41.1%, sector 34.1%, and company-specific 24.8%.",
    "lead_lag_title": "",
    "lead_lag_note": "",
    "rolling_title": "Monthly Driver Shift",
    "rolling_latest_label": "Latest: {period}",
    "rolling_note": "Each bar shows the monthly split between market-, sector-, and company-driven moves.",
    "drivers_bottom_line": "That matters because broader conditions are still setting the tone, even as the current book remains orderly with bid depth matching ask depth at 1.00x and the spread at 1 tick.",
    "drivers_wtd_title": "Key Reads",
    "drivers_wtd_list": [
      "Main driver now: market moves are leading, accounting for 41.1% of current price action.",
      "Monthly change: the stock was mostly market from March through May, so the current mix looks more balanced now."
    ],
    "regime_title": "Market State",
    "regime_subtitle": "Current trading conditions look orderly, with a balanced book and no sign of immediate execution stress.",
    "regime_badge_text": "Normal / Active",
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
    "exec_check_subtitle": "Combines the final continuous-session displayed book before close, trade-size stress tests based on May 22, 2025 to May 22, 2026 (255 trading days • 102,413 trades), large sell-side orders observed today, and intraday spread/depth during the continuous trading session.",
    "order_book_title": "Order Book Depth (Available Liquidity)",
    "order_book_note": "Depth shown is based on the displayed order book.",
    "peer_capacity_title": "Peer Capacity Context",
    "peer_capacity_note": "Immediate displayed depth broadly matches the stronger monthly liquidity read.",
    "impact_summary_title": "Estimated Price Impact (Sell Orders)",
    "impact_summary_subtitle": "Approximate price impact (%) for sell orders.",
    "exec_check_insight": "Immediate execution looks steady. Displayed bid depth matches ask depth at 1.00x and the spread is 1 tick, which supports manageable entry and exit despite slightly below-peer structural liquidity.",
    "trader_composition_title": "Who's Trading Your Stock?",
    "trader_composition_subtitle": "Shows whether trading is mostly retail-like, institution-like, mixed, or unclassified.",
    "trader_retail_threshold": "Retail-like flow",
    "trader_mixed_threshold": "Mixed flow",
    "trader_instit_threshold": "Institution-like flow",
    "peer_trader_title": "Peer Comparison: Trader Mix",
    "peer_trader_subtitle": "How the trader mix compares with peers.",
    "price_moving_title": "Which Trades Move the Price?",
    "price_moving_subtitle": "Price-moving trades are 23.3% of total trades.",
    "intraday_title": "When Does Trading Happen?",
    "intraday_subtitle": "Trading conditions look balanced through the day, with current execution supported by a matched book and a 1-tick spread.",
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
    "intraday_insight": "Session split is open 4.0%, continuous 86.4%, and close 8.4%. Current trading concentration score is 0.231.",
    "short_title": "Short Selling & Lending",
    "short_subtitle": "Current execution looks balanced, with no sign of near-term stress in the displayed book.",
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
    "exec_subtitle": "Trading access looks balanced overall, with slightly below-peer structural liquidity offset by orderly current execution.",
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
        "value": "84.5/100",
        "sub": "Peer median 86.7 (-2.2 pts)",
        "interp": {
          "text": "Strong",
          "cls": "interpretation-good",
          "icon": "◆"
        }
      },
      {
        "title": "Volume vs Peers",
        "value": "S$560.1K",
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
        "sub": "1.00 ticks; peers 0.71%",
        "interp": {
          "text": "Wider",
          "cls": "interpretation-bad",
          "icon": "◆"
        }
      }
    ],
    "liq_insight": "Liquidity looks serviceable rather than standout. The 6M liquidity score is 84.5, which is 2.2 points below the peer median of 86.7, so peer-relative access sits in the middle of the range. Near-term execution is steadier than that structural read suggests because displayed bid depth matches ask depth at 1.00x and the spread is 1 tick, which keeps the current trading picture orderly.",
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
        "value": "1.00x",
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
        "text": "Estimated impact ~-0.82% with 100.0% fill.",
        "cls": "warn"
      },
      {
        "title": "S$2.5M sell",
        "text": "Estimated impact ~-2.40% with 85.1% fill.",
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
        "subtext": "Rank 87/556",
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
        "subtext": "0.75% • 1.00 ticks vs peers 0.71%",
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
        "value": "560.1K",
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
        "value": "41.1",
        "suffix": "market",
        "bar_pct": 41,
        "color_value": "text-amber-400",
        "color_bar": "bg-amber-500",
        "subtext": "Sector 34.1% • Company 24.8%",
        "interpretation": {
          "text": "Market",
          "cls": "interpretation-neutral",
          "icon": "◆"
        }
      }
    ],
    "exec_takeaways": [
      "Structural liquidity is broadly in line with peers. The 6M liquidity score is 84.5 compared with a peer median of 86.7, so peer-relative access is not a major constraint.",
      "Current execution is orderly. Displayed bid depth matches ask depth at 1.00x and the spread is 1 tick, which supports manageable entry and exit in the near term.",
      "Near-term trading conditions look balanced. Equal displayed depth on both sides of the book and a 1-tick spread point to stable execution quality at present."
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
      "overall": "6M liquidity is strong: score 84.5 vs peer median 86.7 (-2.2 pts). Recent trend context is too limited to say whether access has changed from the 1M baseline.",
      "strengths": [
        "6M score 84.5 vs peer median 86.7 (-2.2 pts)."
      ],
      "concerns": [],
      "peer_context": "Primary-period score gap vs peers: -2.2 pts."
    },
    "market_comparison": {
      "returns": {
        "insight": "6M return is -1.5%, better than sector and peers, but worse than market, which shows price performance is mixed across comparison groups.",
        "vs_market": "Worse than market: -1.5% vs market 12.5%.",
        "vs_sector": "Better than sector: -1.5% vs sector -1.8%.",
        "vs_peers": "Better than peers: -1.5% vs peers -17.6%."
      },
      "adv": {
        "insight": "ADV is S$560.1K, better than market, but worse than sector and peers, which shows trading size is uneven across comparison groups.",
        "vs_market": "Better than market: S$560.1K vs market S$12.3K.",
        "vs_sector": "Worse than sector: S$560.1K vs sector S$632.9K.",
        "vs_peers": "Worse than peers: S$560.1K vs peers S$1.1M."
      },
      "spread": {
        "insight": "Spread is 0.75%, better than market, which keeps trading costs more competitive than comparable names.",
        "vs_market": "Better than market: 0.75% vs market 2.92%.",
        "vs_sector": "In line with sector: 0.75% vs sector 0.82%.",
        "vs_peers": "In line with peers: 0.75% vs peers 0.71%."
      },
      "turnover_ratio": {
        "insight": "Turnover ratio is 0.18%, better than market, sector, and peers, which shows a more active free-float turnover profile than comparable names.",
        "vs_market": "Better than market: 0.18% vs market 0.03%.",
        "vs_sector": "Better than sector: 0.18% vs sector 0.13%.",
        "vs_peers": "Better than peers: 0.18% vs peers 0.12%."
      },
      "volatility": {
        "insight": "Volatility is 14.09%, better than market, sector, and peers, which suggests day-to-day price swings are more contained than comparable names.",
        "vs_market": "Better than market: 14.09% vs market 46.25%.",
        "vs_sector": "Better than sector: 14.09% vs sector 16.29%.",
        "vs_peers": "Better than peers: 14.09% vs peers 16.05%."
      },
      "trades": {
        "insight": "Trades is 339, better than market, but worse than sector and peers, which shows trading frequency is mixed across comparison groups.",
        "vs_market": "Better than market: 339 vs market 7.",
        "vs_sector": "Worse than sector: 339 vs sector 383.",
        "vs_peers": "Worse than peers: 339 vs peers 768."
      },
      "amihud": {
        "insight": "Price impact is 4.54e-09, better than market and peers, which suggests trades move price less than comparable names.",
        "vs_market": "Better than market: 4.54e-09 vs market 1.55e-07.",
        "vs_sector": "In line with sector: 4.54e-09 vs sector 4.84e-09.",
        "vs_peers": "Better than peers: 4.54e-09 vs peers 5.14e-09."
      }
    },
    "performance": {
      "overall": "Returns are mixed, with the stock flat over 1M, ahead of peers at -3.7% but behind the market at +1.3%. Liquidity only partly confirms that move because the 6M liquidity score of 84.5 sits 2.2 points below the peer median, even though the current book is balanced with bid depth matching ask depth and a 1 tick spread. The driver mix points to a broad market influence rather than a company-specific move, with market factors explaining 41.1% of trading.",
      "conclusion": "The move looks more broad-market than company-specific, with relative peer outperformance not fully backed by stronger structural liquidity."
    },
    "drivers": {
      "overall": "Current driver: Market at 41.1%. Broader market or sector moves still explain a meaningful part of the tape, so the stock is not trading on company news alone.",
      "beta": "The current pattern looks orderly rather than stressed, with displayed bid depth matching ask depth at 1.00x and the spread holding at 1 tick. That matters because market-led trading is not being accompanied by obvious strain in immediate execution conditions.",
      "rolling_change": "The monthly picture has shifted from mostly market in March and April to still clearly company-driven in May, so the latest read points to a more balanced mix than the recent monthly pattern. That matters because the near-term tape appears more exposed to external moves than it was through most of the spring."
    },
    "regime": {
      "overall": "The current backdrop looks orderly rather than stressed, with a 1 tick spread and displayed bid depth matching ask depth at 1.00x. That matters because trading conditions look functional today even though the broader liquidity picture is only middle-of-the-pack for its size.",
      "current": "Current market state is Normal / Active. Current-state posterior is >99.9% on a filtered basis. The market has been in this state about 34.4% of the time. Jump risk is 22% on the current read. Based on 251 trading days relative to the 252-day target.",
      "transitions": "This state does not look durable, with a typical run length of about 1.8 days, so the backdrop can change quickly even if it looks calm now.",
      "trading_implications": "This looks like a short-lived state, not a sticky regime: the typical run length is about 1.8 days."
    },
    "execution": {
      "overall": "Displayed liquidity looks balanced right now because bid depth matches ask depth at 1.00x and the spread is 1 tick. That points to orderly near-term access in the book.",
      "concern": "The main caution is that trade-size context is drawn from a full year of history covering 255 trading days and 102,413 trades, so it is better read as background than as a signal that changes the current book read. That matters because the live book is balanced, but size interpretation still rests on a longer historical frame.",
      "peer_context": "The displayed book is firmer than the broader peer comparison implies, with a balanced depth profile even though the 6M liquidity score of 84.5 sits 2.2 points below the peer median of 86.7. That suggests the current screen supports the broader picture rather than adding a new stress signal."
    },
    "trader_composition": {
      "overall": "Flow looks mixed by trade count and value, so the trading base does not read as clearly retail-led or institution-led.",
      "retail_heavy": "The split is mixed: retail-like trades make up 37.3% of trade count but only 2.8% of trade value, while institution-like trades are 21.4% of count and 54.5% of value. That matters because activity is broad in participation, but most value still comes from larger trades.",
      "institutional_gap": "Institution-like trades account for a much larger share of value than count, which shows that larger tickets are carrying a meaningful part of turnover.",
      "peer_comparison": "The mix does not look one-sided, and the peer comparison in the report frames how unusual that balance is relative to comparable names."
    },
    "price_moving": {
      "overall": "Price-moving trades account fo% of total trades. The signal is mixed because trade count is more retail-like while trade value is more institution-like. That matters because price formation is being shaped by both broad participation and larger tickets. Broader market moves remain an important driver at 41.1%, so price-moving flow is not reading as purely stock-specific.",
      "interpretation": "",
      "asymmetry": ""
    },
    "short_selling": {
      "overall": "Short activity does not look material enough to define the current trading picture. The 1M average short ratio is 4.92%, and the stock still outperformed peers by 3.7% over the past month, which suggests short pressure is not the main force behind trading conditions.",
      "level": "Low short interest",
      "correlation": "Moderate negative - shorts somewhat predict drops",
      "trend": "Short positioning is rising fast, up 32% month on month and 110% year on year. That makes it worth watching, but from a low base it does not yet appear to change the broader liquidity picture.",
      "peaks": "5 notable peak days identified."
    },
    "intraday": {
      "overall": "Liquidity is most available in the continuous session, which carries 86.4% of activity, while the open and close account for 4.0% and 8.4% respectively. That matters because trading access appears to hold through the day rather than relying on short auction windows.",
      "hhi_interpretation": "The concentration score of 0.231 suggests activity is reasonably spread across the session, which supports a steadier intraday liquidity profile.",
      "best_times": "The continuous session stands out as the most reliable part of the day because it captures the clear majority of trading activity.",
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
        84.53237410071942,
        86.6906474820144
      ],
      "is_target": [
        true,
        false
      ],
      "adv": [
        560053.5,
        1108351.5
      ],
      "total": 556
    },
    "market_comparison": {
      "sector_name": "REIT - Retail",
      "sector_count": 8,
      "market_count": 556,
      "company": {
        "volatility": 0.14094743066917453,
        "adv": 560053.5,
        "spread_pct": 0.007490636704119858,
        "turnover_ratio": 0.0018486599554180538,
        "amihud": 4.541135179291274e-09,
        "trades": 339.0
      },
      "market": {
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.6851689055587717,
          "median": 0.4624945889816816,
          "min": 0.0,
          "max": 6.985699678629192,
          "p5": 0.15323177086063294,
          "p95": 1.8914393249301802,
          "count": 556
        },
        "adv": {
          "direction": "higher_is_better",
          "mean": 2747945.1872802232,
          "median": 12310.599999999999,
          "min": 0.0,
          "max": 256049087.60000002,
          "p5": 0.0,
          "p95": 11294544.875,
          "count": 556
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.09526501651742214,
          "median": 0.029185270108170663,
          "min": 0.00027417717172845547,
          "max": 1.267605633802817,
          "p5": 0.003660934704961947,
          "p95": 0.46471971576868987,
          "count": 555
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.003840884285853694,
          "median": 0.00027734223726435956,
          "min": 0.0,
          "max": 1.1156153187001516,
          "p5": 0.0,
          "p95": 0.00804798878443962,
          "count": 549
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 1.0216300025357189e-05,
          "median": 1.5489757130014514e-07,
          "min": 0.0,
          "max": 0.0006620397444526588,
          "p5": 0.0,
          "p95": 3.3902671039230104e-05,
          "count": 555
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 404.7473021582734,
          "median": 7.0,
          "min": 0.0,
          "max": 10264.5,
          "p5": 0.0,
          "p95": 2348.75,
          "count": 556
        }
      },
      "sector": {
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.3584363944812264,
          "median": 0.1628804111131808,
          "min": 0.11701983397127283,
          "max": 1.3927800402783015,
          "p5": 0.12539449281553844,
          "p95": 1.1010662903777295,
          "count": 8
        },
        "adv": {
          "direction": "higher_is_better",
          "mean": 8847831.79253441,
          "median": 632856.125,
          "min": 0.0,
          "max": 57868054.5,
          "p5": 13255.060000000001,
          "p95": 41257423.74999997,
          "count": 8
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.035912070928626784,
          "median": 0.008165425874846931,
          "min": 0.004274986168547341,
          "max": 0.13333333333333333,
          "p5": 0.004344991259624652,
          "p95": 0.12579667946059614,
          "count": 8
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.002336418902522286,
          "median": 0.0012965008506219111,
          "min": 0.0,
          "max": 0.006907218692928089,
          "p5": 8.300540271012086e-05,
          "p95": 0.006657644109312026,
          "count": 8
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 7.970547160045892e-07,
          "median": 4.839969085200199e-09,
          "min": 0.0,
          "max": 6.330000391958183e-06,
          "p5": 3.3048834462562446e-11,
          "p95": 4.125244046244744e-06,
          "count": 8
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 1134.9375,
          "median": 383.25,
          "min": 0.0,
          "max": 5579.0,
          "p5": 8.225000000000001,
          "p95": 4294.324999999998,
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
          "mean": 0.16045127864547296,
          "median": 0.16045127864547296,
          "min": 0.16045127864547296,
          "max": 0.16045127864547296,
          "p5": 0.16045127864547296,
          "p95": 0.16045127864547296,
          "count": 1
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.007132110152654033,
          "median": 0.007132110152654033,
          "min": 0.007132110152654033,
          "max": 0.007132110152654033,
          "p5": 0.007132110152654033,
          "p95": 0.007132110152654033,
          "count": 1
        },
        "spread_ticks": {
          "direction": "neutral",
          "mean": 1.0027144336532525,
          "median": 1.0027144336532525,
          "min": 1.0027144336532525,
          "max": 1.0027144336532525,
          "p5": 1.0027144336532525,
          "p95": 1.0027144336532525,
          "count": 1
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 5.138802991109125e-09,
          "median": 5.138802991109125e-09,
          "min": 5.138802991109125e-09,
          "max": 5.138802991109125e-09,
          "p5": 5.138802991109125e-09,
          "p95": 5.138802991109125e-09,
          "count": 1
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.0012379773026249335,
          "median": 0.0012379773026249335,
          "min": 0.0012379773026249335,
          "max": 0.0012379773026249335,
          "p5": 0.0012379773026249335,
          "p95": 0.0012379773026249335,
          "count": 1
        }
      }
    },
    "returns": [
      {
        "horizon": "1M",
        "stock": -1.1102230246251565e-16,
        "market": 0.013078822058819606,
        "sector": -0.00579582843242088,
        "peers": -0.03676470588235292
      },
      {
        "horizon": "3M",
        "stock": -0.021897810218977853,
        "market": 0.010074498505991514,
        "sector": -0.017405175048137878,
        "peers": -0.09027777777777757
      },
      {
        "horizon": "6M",
        "stock": -0.014705882352940458,
        "market": 0.12495053752206631,
        "sector": -0.01835894831732765,
        "peers": -0.17610062893081724
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
      "share_market": 0.4113653776872972,
      "share_sector": 0.3408188046991651,
      "share_idio": 0.24781581761353771,
      "beta_market": 0.524663156107031,
      "beta_sector": -0.22154713516317925,
      "driver_model": {
        "valid": true,
        "model_method": "ols_with_hmm_jump_regimes",
        "regime_method": "hmm_jump_aware",
        "estimation_window_days": 251,
        "reporting_window_days": 63,
        "available_history_days": 251,
        "n_regimes": 4,
        "current_regime": 1,
        "current_regime_label": "Normal / Active",
        "current_regime_probability": 0.9999895035322365,
        "current_regime_probability_display": ">99.9%",
        "current_probability_basis": "filtered",
        "historical_probability_basis": "smoothed",
        "current_driver_mix": {
          "market_share": {
            "median": 0.4113653776872972,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "41.1%",
            "display_range": null,
            "display_text": "41.1%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "share_pct",
            "value_pct": 41.1,
            "plain_english": "Market explains about 41.1% of price moves in the current state."
          },
          "sector_share": {
            "median": 0.3408188046991651,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "34.1%",
            "display_range": null,
            "display_text": "34.1%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "share_pct",
            "value_pct": 34.1,
            "plain_english": "Sector explains about 34.1% of price moves in the current state."
          },
          "company_share": {
            "median": 0.24781581761353771,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "24.8%",
            "display_range": null,
            "display_text": "24.8%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "share_pct",
            "value_pct": 24.8,
            "plain_english": "Company-specific explains about 24.8% of price moves in the current state."
          },
          "basis": "current_state"
        },
        "current_sensitivities": {
          "beta_market": {
            "median": 0.524663156107031,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "0.52",
            "display_range": null,
            "display_text": "0.52",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "beta",
            "strength_label": "Modest",
            "plain_english": "Modest market link: a 1% market move has lined up with about a 0.52% stock move in the same direction in this state.",
            "value_num": 0.52
          },
          "beta_stock_lag": {
            "median": 1.112932374185093,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "1.11",
            "display_range": null,
            "display_text": "1.11",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "lag_beta",
            "value_num": 1.11
          },
          "beta_sector": {
            "median": -0.22154713516317925,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "-0.22",
            "display_range": null,
            "display_text": "-0.22",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "beta",
            "strength_label": "Weak",
            "plain_english": "Weak sector link: a 1% sector move has lined up with about a 0.22% stock move in the opposite direction in this state.",
            "value_num": -0.22
          },
          "beta_market_lag": {
            "median": -0.5708279382659502,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "-0.57",
            "display_range": null,
            "display_text": "-0.57",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "lag_beta",
            "value_num": -0.57
          },
          "beta_sector_lag": {
            "median": 0.6822438017436517,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "0.68",
            "display_range": null,
            "display_text": "0.68",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "lag_beta",
            "value_num": 0.68
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
            "period_label": "2025-05-28 to 2025-05-30",
            "n_obs": 3,
            "partial_month": true,
            "dominant_driver": "market",
            "dominant_driver_label": "Market",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.3333333333333333,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "33.3%",
              "display_range": null,
              "display_text": "33.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 3 trading days.",
              "kind": "share_pct",
              "value_pct": 33.3,
              "plain_english": "Market explains about 33.3% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.3333333333333333,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "33.3%",
                "display_range": null,
                "display_text": "33.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 3 trading days.",
                "kind": "share_pct",
                "value_pct": 33.3,
                "plain_english": "Market explains about 33.3% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.3333333333333333,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "33.3%",
                "display_range": null,
                "display_text": "33.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 3 trading days.",
                "kind": "share_pct",
                "value_pct": 33.3,
                "plain_english": "Sector explains about 33.3% of price moves in the current state."
              },
              "company_share": {
                "median": 0.3333333333333333,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "33.3%",
                "display_range": null,
                "display_text": "33.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 3 trading days.",
                "kind": "share_pct",
                "value_pct": 33.3,
                "plain_english": "Company-specific explains about 33.3% of price moves in the current state."
              }
            },
            "summary": "May: Much more balanced across company, sector, and market factors, though based on only 3 trading days."
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
            "period_label": "2026-05-04 to 2026-05-22",
            "n_obs": 15,
            "partial_month": true,
            "dominant_driver": "company",
            "dominant_driver_label": "Company-specific",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.8139994538326518,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "81.4%",
              "display_range": null,
              "display_text": "81.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
              "kind": "share_pct",
              "value_pct": 81.4,
              "plain_english": "Company-specific explains about 81.4% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.0913438220575653,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "9.1%",
                "display_range": null,
                "display_text": "9.1%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
                "kind": "share_pct",
                "value_pct": 9.1,
                "plain_english": "Market explains about 9.1% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.09465672410978286,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "9.5%",
                "display_range": null,
                "display_text": "9.5%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
                "kind": "share_pct",
                "value_pct": 9.5,
                "plain_english": "Sector explains about 9.5% of price moves in the current state."
              },
              "company_share": {
                "median": 0.8139994538326518,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "81.4%",
                "display_range": null,
                "display_text": "81.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
                "kind": "share_pct",
                "value_pct": 81.4,
                "plain_english": "Company-specific explains about 81.4% of price moves in the current state."
              }
            },
            "summary": "May: Still clearly company-driven."
          }
        ],
        "regimes": [
          {
            "id": 0,
            "label": "Calm / Liquid",
            "pct_time": 0.3426293965164095,
            "expected_duration_days": 1.912946715250451,
            "current_probability": 0.0,
            "current_probability_display": "<0.1%",
            "current_probability_basis": "filtered",
            "n_days_effective": 85.99997852561879,
            "volatility": {
              "median": 3.299756484394349e-128,
              "low": 3.299756484394349e-128,
              "high": 3.299756484394349e-128
            },
            "volatility_label": "Calm / Liquid",
            "jump_probability": 0.10021082396187313,
            "jump_rate": 0.0,
            "risk_score": 0.02297769426638093,
            "metrics": {
              "rolling_vol_10d": 0.006509754760363265,
              "downside_vol_10d": 0.0035487079331930063,
              "drawdown_21d": 0.009505604279611708,
              "amihud_stress": 3.437195557616459e-252,
              "spread_rel": 75.85731897616114,
              "spread_ticks": 1.0171097564208393,
              "log_notional": 13.09679268534354,
              "log_trade_count": 5.722481202122028
            }
          },
          {
            "id": 1,
            "label": "Normal / Active",
            "pct_time": 0.343743305511238,
            "expected_duration_days": 1.7657170227006047,
            "current_probability": 0.9999895035322365,
            "current_probability_display": ">99.9%",
            "current_probability_basis": "filtered",
            "n_days_effective": 86.27956968332073,
            "volatility": {
              "median": 0.007420157159258862,
              "low": 0.007420157159258862,
              "high": 0.007420157159258862
            },
            "volatility_label": "Normal / Active",
            "jump_probability": 0.22270032957168412,
            "jump_rate": 4.1991011412691916e-176,
            "risk_score": 0.1484330410920206,
            "metrics": {
              "rolling_vol_10d": 0.006688366230954896,
              "downside_vol_10d": 0.0036669803291624306,
              "drawdown_21d": 0.009918527792807124,
              "amihud_stress": 0.8958658487748017,
              "spread_rel": 74.58761847085692,
              "spread_ticks": 1.0041668318996808,
              "log_notional": 13.244978827531327,
              "log_trade_count": 5.843982053873122
            }
          },
          {
            "id": 2,
            "label": "Stressed / Illiquid",
            "pct_time": 0.14629662068151578,
            "expected_duration_days": 1.4656554359730751,
            "current_probability": 1.0496467763575348e-05,
            "current_probability_display": "<0.1%",
            "current_probability_basis": "filtered",
            "n_days_effective": 36.72045179106046,
            "volatility": {
              "median": 0.012258775127171542,
              "low": 0.012258775127171542,
              "high": 0.012258775127171542
            },
            "volatility_label": "Stressed / Illiquid",
            "jump_probability": 0.32890834798068597,
            "jump_rate": 0.13616390202522594,
            "risk_score": 0.5251788910642508,
            "metrics": {
              "rolling_vol_10d": 0.008523055708458353,
              "downside_vol_10d": 0.004534176031044114,
              "drawdown_21d": 0.007660747269056335,
              "amihud_stress": 0.9354526287502107,
              "spread_rel": 77.85177874859573,
              "spread_ticks": 1.0532644135779807,
              "log_notional": 13.651333507580926,
              "log_trade_count": 5.792489159135572
            }
          },
          {
            "id": 3,
            "label": "Jump / Tail Shock",
            "pct_time": 0.1673306772908367,
            "expected_duration_days": 20.758620689655107,
            "current_probability": 1.7536705659000545e-26,
            "current_probability_display": "<0.1%",
            "current_probability_basis": "filtered",
            "n_days_effective": 42.000000000000014,
            "volatility": {
              "median": 0.014842549552227607,
              "low": 0.014842549552227607,
              "high": 0.014842549552227607
            },
            "volatility_label": "Jump / Tail Shock",
            "jump_probability": 0.19300365090871724,
            "jump_rate": 0.04761904761904786,
            "risk_score": 0.7686329289209936,
            "metrics": {
              "rolling_vol_10d": 0.013703232789931411,
              "downside_vol_10d": 0.010789110461193378,
              "drawdown_21d": 0.05147347269692713,
              "amihud_stress": 0.4579209094997629,
              "spread_rel": 76.65742404215183,
              "spread_ticks": 1.0154334671594103,
              "log_notional": 13.65584267177092,
              "log_trade_count": 6.1565920914484265
            }
          }
        ],
        "transitions": {
          "mean": [
            [
              0.4772462860424861,
              0.4175685981351748,
              0.10506902570743246,
              0.00011609011490666492
            ],
            [
              0.3666379264991081,
              0.43365783580058953,
              0.18837183512418065,
              0.011332402576121675
            ],
            [
              0.3445965921452544,
              0.3091531615322801,
              0.31771139692455613,
              0.028538849397909412
            ],
            [
              0.00023730422401518997,
              0.047697628287793316,
              0.0002378249632747983,
              0.9518272425249168
            ]
          ],
          "low": [],
          "high": [],
          "counts": [
            [
              41.0,
              36.0,
              9.0,
              0.0
            ],
            [
              31.0,
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
            "probability": 0.0,
            "probability_display": "<0.1%",
            "basis": "filtered"
          },
          {
            "id": 1,
            "label": "Normal / Active",
            "probability": 0.9999895035322365,
            "probability_display": ">99.9%",
            "basis": "filtered"
          },
          {
            "id": 2,
            "label": "Stressed / Illiquid",
            "probability": 1.0496467763575348e-05,
            "probability_display": "<0.1%",
            "basis": "filtered"
          },
          {
            "id": 3,
            "label": "Jump / Tail Shock",
            "probability": 1.7536705659000545e-26,
            "probability_display": "<0.1%",
            "basis": "filtered"
          }
        ],
        "jump_risk": {
          "current_probability": 0.2227014443807256,
          "current_score": 0.8424420635309241,
          "current_flag": false,
          "jump_threshold_score": 2.5,
          "method": "robust_residual_and_return_jump_overlay",
          "model_definition": "jump_score_feature_overlay"
        },
        "model_selection": {
          "chosen": 4,
          "criterion": "bic_with_min_state_support",
          "bic": 11065.67458974684,
          "loglik": -5005.156539186335,
          "n_params": 191,
          "bic_delta_vs_next_best": 534.9813366183771,
          "candidates": [
            {
              "k": 2,
              "valid": true,
              "reason": "ok",
              "bic": 13427.526752421329,
              "loglik": -6462.355267480169,
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
                  "bic": 13427.526752421329,
                  "loglik": -6462.355267480169,
                  "n_params": 91,
                  "converged": true,
                  "iterations": 9
                },
                {
                  "seed": 1337,
                  "k": 2,
                  "valid": true,
                  "reason": "ok",
                  "bic": 13427.526752421329,
                  "loglik": -6462.355267480169,
                  "n_params": 91,
                  "converged": true,
                  "iterations": 9
                },
                {
                  "seed": 2027,
                  "k": 2,
                  "valid": true,
                  "reason": "ok",
                  "bic": 13427.526752421329,
                  "loglik": -6462.355267480169,
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
              "bic": 11600.655926365218,
              "loglik": -5413.546257443384,
              "n_params": 140,
              "converged": true,
              "iterations": 17,
              "best_seed": 1337,
              "seed_runs": [
                {
                  "seed": 42,
                  "k": 3,
                  "valid": true,
                  "reason": "ok",
                  "bic": 11600.655926418107,
                  "loglik": -5413.546257469829,
                  "n_params": 140,
                  "converged": true,
                  "iterations": 24
                },
                {
                  "seed": 1337,
                  "k": 3,
                  "valid": true,
                  "reason": "ok",
                  "bic": 11600.655926365218,
                  "loglik": -5413.546257443384,
                  "n_params": 140,
                  "converged": true,
                  "iterations": 17
                },
                {
                  "seed": 2027,
                  "k": 3,
                  "valid": true,
                  "reason": "ok",
                  "bic": 11600.65592646007,
                  "loglik": -5413.54625749081,
                  "n_params": 140,
                  "converged": true,
                  "iterations": 19
                }
              ]
            },
            {
              "k": 4,
              "valid": true,
              "reason": "ok",
              "bic": 11065.67458974684,
              "loglik": -5005.156539186335,
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
                  "bic": 11065.67458974684,
                  "loglik": -5005.156539186335,
                  "n_params": 191,
                  "converged": true,
                  "iterations": 21
                },
                {
                  "seed": 1337,
                  "k": 4,
                  "valid": true,
                  "reason": "ok",
                  "bic": 11065.67462901882,
                  "loglik": -5005.156558822325,
                  "n_params": 191,
                  "converged": true,
                  "iterations": 20
                },
                {
                  "seed": 2027,
                  "k": 4,
                  "valid": true,
                  "reason": "ok",
                  "bic": 12781.389291306183,
                  "loglik": -5863.013889966006,
                  "n_params": 191,
                  "converged": true,
                  "iterations": 44
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
                "bic": 11065.67458974684,
                "valid": true,
                "reason": null
              },
              {
                "seed": 1337,
                "selected_states": 4,
                "bic": 11065.67462901882,
                "valid": true,
                "reason": null
              },
              {
                "seed": 2027,
                "selected_states": 3,
                "bic": 11600.65592646007,
                "valid": true,
                "reason": null
              }
            ],
            "selected_state_counts": {
              "4": 2,
              "3": 1
            },
            "selected_state_share": 0.6666666666666666,
            "stable": false,
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
                  "2": 6467.869962449742,
                  "3": 5525.580118625632,
                  "4": 6099.666697886424
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
                  "2": 10328.863141209953,
                  "3": 9974.363750938483,
                  "4": 8811.882226801812
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
                  "2": 13427.526752421329,
                  "3": 11600.655926418107,
                  "4": 11065.674663314352
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
          "bic_delta_vs_next_best": 534.9813366183771,
          "state_count_interpretation": "251 observations allowed the current rule to test up to 4 states; BIC preferred 4 with a 534.98 improvement versus the next best valid state count.",
          "parameter_count": {
            "formula": "k^2 - 1 + 2*k*d",
            "n_parameters": 191,
            "observations_per_parameter": 1.3141361256544504,
            "parameter_pressure_label": "parameter_heavy"
          },
          "state_occupancy": {
            "min_effective_days_required": 7.529999999999999,
            "min_effective_days_observed": 36.72045179106046,
            "passes": true,
            "states": [
              {
                "id": 0,
                "label": "Calm / Liquid",
                "effective_days": 85.99997852561879,
                "pct_time": 0.3426293965164095,
                "passes_min_support": true
              },
              {
                "id": 1,
                "label": "Normal / Active",
                "effective_days": 86.27956968332073,
                "pct_time": 0.343743305511238,
                "passes_min_support": true
              },
              {
                "id": 2,
                "label": "Stressed / Illiquid",
                "effective_days": 36.72045179106046,
                "pct_time": 0.14629662068151578,
                "passes_min_support": true
              },
              {
                "id": 3,
                "label": "Jump / Tail Shock",
                "effective_days": 42.000000000000014,
                "pct_time": 0.1673306772908367,
                "passes_min_support": true
              }
            ]
          },
          "transition_diagnostics": {
            "self_transition_probabilities": [
              0.4772462860424861,
              0.43365783580058953,
              0.31771139692455613,
              0.9518272425249168
            ],
            "expected_duration_days": [
              1.912946715250451,
              1.7657170227006047,
              1.4656554359730751,
              20.758620689655107
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
                "bic": 11065.67458974684,
                "valid": true,
                "reason": null
              },
              {
                "seed": 1337,
                "selected_states": 4,
                "bic": 11065.67462901882,
                "valid": true,
                "reason": null
              },
              {
                "seed": 2027,
                "selected_states": 3,
                "bic": 11600.65592646007,
                "valid": true,
                "reason": null
              }
            ],
            "selected_state_counts": {
              "4": 2,
              "3": 1
            },
            "selected_state_share": 0.6666666666666666,
            "stable": false,
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
                  "2": 6467.869962449742,
                  "3": 5525.580118625632,
                  "4": 6099.666697886424
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
                  "2": 10328.863141209953,
                  "3": 9974.363750938483,
                  "4": 8811.882226801812
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
                  "2": 13427.526752421329,
                  "3": 11600.655926418107,
                  "4": 11065.674663314352
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
              "risk_score": 0.02297769426638093,
              "jump_probability": 0.10021082396187313,
              "jump_rate": 0.0,
              "rolling_vol_10d": 0.006509754760363265,
              "downside_vol_10d": 0.0035487079331930063,
              "drawdown_21d": 0.009505604279611708,
              "amihud_stress": 3.437195557616459e-252,
              "spread_rel": 75.85731897616114,
              "spread_ticks": 1.0171097564208393,
              "log_notional": 13.09679268534354,
              "log_trade_count": 5.722481202122028
            },
            {
              "id": 1,
              "label": "Normal / Active",
              "risk_score": 0.1484330410920206,
              "jump_probability": 0.22270032957168412,
              "jump_rate": 4.1991011412691916e-176,
              "rolling_vol_10d": 0.006688366230954896,
              "downside_vol_10d": 0.0036669803291624306,
              "drawdown_21d": 0.009918527792807124,
              "amihud_stress": 0.8958658487748017,
              "spread_rel": 74.58761847085692,
              "spread_ticks": 1.0041668318996808,
              "log_notional": 13.244978827531327,
              "log_trade_count": 5.843982053873122
            },
            {
              "id": 2,
              "label": "Stressed / Illiquid",
              "risk_score": 0.5251788910642508,
              "jump_probability": 0.32890834798068597,
              "jump_rate": 0.13616390202522594,
              "rolling_vol_10d": 0.008523055708458353,
              "downside_vol_10d": 0.004534176031044114,
              "drawdown_21d": 0.007660747269056335,
              "amihud_stress": 0.9354526287502107,
              "spread_rel": 77.85177874859573,
              "spread_ticks": 1.0532644135779807,
              "log_notional": 13.651333507580926,
              "log_trade_count": 5.792489159135572
            },
            {
              "id": 3,
              "label": "Jump / Tail Shock",
              "risk_score": 0.7686329289209936,
              "jump_probability": 0.19300365090871724,
              "jump_rate": 0.04761904761904786,
              "rolling_vol_10d": 0.013703232789931411,
              "downside_vol_10d": 0.010789110461193378,
              "drawdown_21d": 0.05147347269692713,
              "amihud_stress": 0.4579209094997629,
              "spread_rel": 76.65742404215183,
              "spread_ticks": 1.0154334671594103,
              "log_notional": 13.65584267177092,
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
            "trade_date": "2026-05-11",
            "state": 1,
            "probabilities": [
              0.0,
              0.9996866752965081,
              0.0003133247034918158,
              3.725626956698414e-23
            ],
            "probability_basis": "smoothed",
            "filtered_probabilities": [
              0.0,
              0.9995605471648039,
              0.00043945283519620224,
              3.386848430669758e-22
            ],
            "jump_probability": 0.1544534152014349,
            "jump_score": 0.7716602321580738
          },
          {
            "trade_date": "2026-05-12",
            "state": 1,
            "probabilities": [
              0.0,
              0.9999981866302458,
              1.813369754192835e-06,
              5.612214395103193e-26
            ],
            "probability_basis": "smoothed",
            "filtered_probabilities": [
              0.0,
              0.9999974563626256,
              2.543637374377759e-06,
              5.102552763833005e-25
            ],
            "jump_probability": 0.14041641997052168,
            "jump_score": 0.6744907594765952
          },
          {
            "trade_date": "2026-05-13",
            "state": 1,
            "probabilities": [
              0.0,
              0.9999926516037431,
              7.348396256930499e-06,
              6.223859870878339e-27
            ],
            "probability_basis": "smoothed",
            "filtered_probabilities": [
              0.0,
              0.9999896923080432,
              1.0307691956734568e-05,
              5.6586308578831e-26
            ],
            "jump_probability": 0.14112182523823602,
            "jump_score": 0.6795621185704072
          },
          {
            "trade_date": "2026-05-14",
            "state": 1,
            "probabilities": [
              0.0,
              0.9999943410888176,
              5.658911182465756e-06,
              1.3304627606590135e-25
            ],
            "probability_basis": "smoothed",
            "filtered_probabilities": [
              0.0,
              0.9999920621799226,
              7.9378200773262e-06,
              1.2096372312102434e-24
            ],
            "jump_probability": 0.14041641997052026,
            "jump_score": 0.6744907594765851
          },
          {
            "trade_date": "2026-05-15",
            "state": 1,
            "probabilities": [
              0.0,
              0.9999930153507233,
              6.984649276780587e-06,
              1.622061561750186e-27
            ],
            "probability_basis": "smoothed",
            "filtered_probabilities": [
              0.0,
              0.9999958587732267,
              4.141226773265088e-06,
              1.284775061792533e-24
            ],
            "jump_probability": 0.139724352328269,
            "jump_score": 0.6694945316286194
          },
          {
            "trade_date": "2026-05-18",
            "state": 2,
            "probabilities": [
              0.0,
              2.954588215632631e-33,
              1.0,
              6.432804390467025e-26
            ],
            "probability_basis": "smoothed",
            "filtered_probabilities": [
              0.0,
              2.7769659455306665e-33,
              1.0,
              9.341268481653379e-23
            ],
            "jump_probability": 0.16916437227480796,
            "jump_score": 0.866033812634218
          },
          {
            "trade_date": "2026-05-19",
            "state": 0,
            "probabilities": [
              0.9999999868486474,
              2.3714559982784323e-217,
              1.3151352600301993e-08,
              6.596608110983262e-29
            ],
            "probability_basis": "smoothed",
            "filtered_probabilities": [
              0.9999999817861399,
              3.0868834894665186e-217,
              1.8213860193891763e-08,
              1.3266543055756365e-25
            ],
            "jump_probability": 0.14359152555267354,
            "jump_score": 0.6971523378415158
          },
          {
            "trade_date": "2026-05-20",
            "state": 0,
            "probabilities": [
              0.9999999999735465,
              2.290266891675403e-218,
              2.6453476979388375e-11,
              7.70899946676603e-32
            ],
            "probability_basis": "smoothed",
            "filtered_probabilities": [
              0.9999999999633635,
              2.981201040828985e-218,
              3.6636530740456033e-11,
              1.5503691010333642e-28
            ],
            "jump_probability": 0.11619630067346705,
            "jump_score": 0.4856921997052867
          },
          {
            "trade_date": "2026-05-21",
            "state": 0,
            "probabilities": [
              0.9999999999998064,
              1.594058467895771e-220,
              1.9351850127802877e-13,
              1.2874004186170462e-29
            ],
            "probability_basis": "smoothed",
            "filtered_probabilities": [
              0.9999999999997387,
              1.5349052415050945e-220,
              2.6137411289819727e-13,
              1.1270655130043988e-28
            ],
            "jump_probability": 0.0834133878987866,
            "jump_score": 0.1657845712351896
          },
          {
            "trade_date": "2026-05-22",
            "state": 1,
            "probabilities": [
              0.0,
              0.9999895035322365,
              1.0496467763575348e-05,
              1.7536705659000545e-26
            ],
            "probability_basis": "smoothed",
            "filtered_probabilities": [
              0.0,
              0.9999895035322365,
              1.0496467763575348e-05,
              1.7536705659000545e-26
            ],
            "jump_probability": 0.16538538987390247,
            "jump_score": 0.8424420635309241
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
          "market_link_display": "0.52",
          "sector_link_display": "-0.22",
          "market_link_explainer": "Modest market link. A 1% market move has lined up with about a 0.52% stock move in the same direction in this state. This is a point estimate from 251 trading days.",
          "sector_link_explainer": "Weak sector link. A 1% sector move has lined up with about a 0.22% stock move in the opposite direction in this state. This is a point estimate from 251 trading days.",
          "stock_persistence_display": "1.11",
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "history_limited_note": "Read is based on 251 trading days versus the 252-day target."
        },
        "current_summary": {
          "regime_label": "Normal / Active",
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "driver_share_pct": 41.1,
          "driver_share_display": "41.1%",
          "confidence_label": "High, limited history",
          "confidence_pct": 99.9,
          "confidence_display": ">99.9%",
          "probability_basis": "filtered",
          "display_confidence_pct": null,
          "confidence_note": "Based on 251 trading days relative to the 252-day target.",
          "history_days": 251,
          "history_limited": true,
          "volatility_label": "Normal / Active",
          "jump_risk_label": "Contained",
          "jump_risk_probability": 22.3,
          "jump_risk_score": 0.84,
          "jump_risk_note": "Jump risk is contained based on recent residual and return shocks.",
          "lead_signal_text": "No stable lead signal.",
          "state_term": "state",
          "stay_probability": 0.43365783580058953,
          "effective_days": 86.3,
          "persistence_note": "This looks like a short-lived state, not a sticky regime: the typical run length is about 1.8 days.",
          "expected_duration_days": 1.8
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
          "period_label": "2025-05-28 to 2025-05-30",
          "n_obs": 3,
          "partial_month": true,
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "regime_label": null,
          "summary": "May: Much more balanced across company, sector, and market factors, though based on only 3 trading days.",
          "share_market": 0.3333333333333333,
          "share_sector": 0.3333333333333333,
          "share_company": 0.3333333333333333,
          "share_market_display": "33.3%",
          "share_sector_display": "33.3%",
          "share_company_display": "33.3%",
          "dominant_share_display": "33.3%"
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
          "period_label": "2026-05-04 to 2026-05-22",
          "n_obs": 15,
          "partial_month": true,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_label": null,
          "summary": "May: Still clearly company-driven.",
          "share_market": 0.0913438220575653,
          "share_sector": 0.09465672410978286,
          "share_company": 0.8139994538326518,
          "share_market_display": "9.1%",
          "share_sector_display": "9.5%",
          "share_company_display": "81.4%",
          "dominant_share_display": "81.4%"
        }
      ],
      "regime": {
        "valid": true,
        "regime_method": "hmm_jump_aware",
        "n_regimes": 4,
        "current_regime_label": "Normal / Active",
        "current_regime_probability": 0.9999895035322365,
        "labels": [
          "Calm / Liquid",
          "Normal / Active",
          "Stressed / Illiquid",
          "Jump / Tail Shock"
        ],
        "pct_time": [
          0.3426293965164095,
          0.343743305511238,
          0.14629662068151578,
          0.1673306772908367
        ],
        "current_regime": 1,
        "regimes": [
          {
            "id": 0,
            "label": "Calm / Liquid",
            "pct_time": 0.3426293965164095,
            "expected_duration_days": 1.912946715250451,
            "current_probability": 0.0,
            "current_probability_display": "<0.1%",
            "current_probability_basis": "filtered",
            "n_days_effective": 85.99997852561879,
            "volatility": {
              "median": 3.299756484394349e-128,
              "low": 3.299756484394349e-128,
              "high": 3.299756484394349e-128
            },
            "volatility_label": "Calm / Liquid",
            "jump_probability": 0.10021082396187313,
            "jump_rate": 0.0,
            "risk_score": 0.02297769426638093,
            "metrics": {
              "rolling_vol_10d": 0.006509754760363265,
              "downside_vol_10d": 0.0035487079331930063,
              "drawdown_21d": 0.009505604279611708,
              "amihud_stress": 3.437195557616459e-252,
              "spread_rel": 75.85731897616114,
              "spread_ticks": 1.0171097564208393,
              "log_notional": 13.09679268534354,
              "log_trade_count": 5.722481202122028
            }
          },
          {
            "id": 1,
            "label": "Normal / Active",
            "pct_time": 0.343743305511238,
            "expected_duration_days": 1.7657170227006047,
            "current_probability": 0.9999895035322365,
            "current_probability_display": ">99.9%",
            "current_probability_basis": "filtered",
            "n_days_effective": 86.27956968332073,
            "volatility": {
              "median": 0.007420157159258862,
              "low": 0.007420157159258862,
              "high": 0.007420157159258862
            },
            "volatility_label": "Normal / Active",
            "jump_probability": 0.22270032957168412,
            "jump_rate": 4.1991011412691916e-176,
            "risk_score": 0.1484330410920206,
            "metrics": {
              "rolling_vol_10d": 0.006688366230954896,
              "downside_vol_10d": 0.0036669803291624306,
              "drawdown_21d": 0.009918527792807124,
              "amihud_stress": 0.8958658487748017,
              "spread_rel": 74.58761847085692,
              "spread_ticks": 1.0041668318996808,
              "log_notional": 13.244978827531327,
              "log_trade_count": 5.843982053873122
            }
          },
          {
            "id": 2,
            "label": "Stressed / Illiquid",
            "pct_time": 0.14629662068151578,
            "expected_duration_days": 1.4656554359730751,
            "current_probability": 1.0496467763575348e-05,
            "current_probability_display": "<0.1%",
            "current_probability_basis": "filtered",
            "n_days_effective": 36.72045179106046,
            "volatility": {
              "median": 0.012258775127171542,
              "low": 0.012258775127171542,
              "high": 0.012258775127171542
            },
            "volatility_label": "Stressed / Illiquid",
            "jump_probability": 0.32890834798068597,
            "jump_rate": 0.13616390202522594,
            "risk_score": 0.5251788910642508,
            "metrics": {
              "rolling_vol_10d": 0.008523055708458353,
              "downside_vol_10d": 0.004534176031044114,
              "drawdown_21d": 0.007660747269056335,
              "amihud_stress": 0.9354526287502107,
              "spread_rel": 77.85177874859573,
              "spread_ticks": 1.0532644135779807,
              "log_notional": 13.651333507580926,
              "log_trade_count": 5.792489159135572
            }
          },
          {
            "id": 3,
            "label": "Jump / Tail Shock",
            "pct_time": 0.1673306772908367,
            "expected_duration_days": 20.758620689655107,
            "current_probability": 1.7536705659000545e-26,
            "current_probability_display": "<0.1%",
            "current_probability_basis": "filtered",
            "n_days_effective": 42.000000000000014,
            "volatility": {
              "median": 0.014842549552227607,
              "low": 0.014842549552227607,
              "high": 0.014842549552227607
            },
            "volatility_label": "Jump / Tail Shock",
            "jump_probability": 0.19300365090871724,
            "jump_rate": 0.04761904761904786,
            "risk_score": 0.7686329289209936,
            "metrics": {
              "rolling_vol_10d": 0.013703232789931411,
              "downside_vol_10d": 0.010789110461193378,
              "drawdown_21d": 0.05147347269692713,
              "amihud_stress": 0.4579209094997629,
              "spread_rel": 76.65742404215183,
              "spread_ticks": 1.0154334671594103,
              "log_notional": 13.65584267177092,
              "log_trade_count": 6.1565920914484265
            }
          }
        ],
        "transitions": [
          [
            0.4772462860424861,
            0.4175685981351748,
            0.10506902570743246,
            0.00011609011490666492
          ],
          [
            0.3666379264991081,
            0.43365783580058953,
            0.18837183512418065,
            0.011332402576121675
          ],
          [
            0.3445965921452544,
            0.3091531615322801,
            0.31771139692455613,
            0.028538849397909412
          ],
          [
            0.00023730422401518997,
            0.047697628287793316,
            0.0002378249632747983,
            0.9518272425249168
          ]
        ]
      }
    },
    "order_book": {
      "bids": [
        {
          "level": 1,
          "price": 0.665,
          "quantity": 613700.0,
          "value": 408110.5
        },
        {
          "level": 2,
          "price": 0.66,
          "quantity": 1333900.0,
          "value": 880374.0
        },
        {
          "level": 3,
          "price": 0.655,
          "quantity": 295500.0,
          "value": 193552.5
        },
        {
          "level": 4,
          "price": 0.65,
          "quantity": 352100.0,
          "value": 228865.0
        },
        {
          "level": 5,
          "price": 0.645,
          "quantity": 39800.0,
          "value": 25671.0
        },
        {
          "level": 6,
          "price": 0.64,
          "quantity": 73400.0,
          "value": 46976.0
        },
        {
          "level": 7,
          "price": 0.635,
          "quantity": 56500.0,
          "value": 35877.5
        },
        {
          "level": 8,
          "price": 0.63,
          "quantity": 227900.0,
          "value": 143577.0
        },
        {
          "level": 9,
          "price": 0.625,
          "quantity": 63900.0,
          "value": 39937.5
        },
        {
          "level": 10,
          "price": 0.62,
          "quantity": 70900.0,
          "value": 43958.0
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
          "quantity": 10500.0,
          "value": 5932.499999999999
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
          "quantity": 46300.0,
          "value": 31021.000000000004
        },
        {
          "level": 2,
          "price": 0.675,
          "quantity": 418700.0,
          "value": 282622.5
        },
        {
          "level": 3,
          "price": 0.68,
          "quantity": 447900.0,
          "value": 304572.0
        },
        {
          "level": 4,
          "price": 0.685,
          "quantity": 109400.0,
          "value": 74939.0
        },
        {
          "level": 5,
          "price": 0.69,
          "quantity": 1106600.0,
          "value": 763553.9999999999
        },
        {
          "level": 6,
          "price": 0.695,
          "quantity": 185300.0,
          "value": 128783.49999999999
        },
        {
          "level": 7,
          "price": 0.7,
          "quantity": 104200.0,
          "value": 72940.0
        },
        {
          "level": 8,
          "price": 0.705,
          "quantity": 89300.0,
          "value": 62956.5
        },
        {
          "level": 9,
          "price": 0.71,
          "quantity": 69900.0,
          "value": 49629.0
        },
        {
          "level": 10,
          "price": 0.715,
          "quantity": 14100.0,
          "value": 10081.5
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
          "price": 0.77,
          "quantity": 12400.0,
          "value": 9548.0
        },
        {
          "level": 14,
          "price": 0.8,
          "quantity": 231700.0,
          "value": 185360.0
        },
        {
          "level": 15,
          "price": 0.81,
          "quantity": 1000.0,
          "value": 810.0
        },
        {
          "level": 16,
          "price": 0.825,
          "quantity": 3400.0,
          "value": 2805.0
        },
        {
          "level": 17,
          "price": 0.85,
          "quantity": 150000.0,
          "value": 127500.0
        },
        {
          "level": 18,
          "price": 0.88,
          "quantity": 12000.0,
          "value": 10560.0
        }
      ]
    },
    "execution_dynamic": {
      "snapshot": {
        "valid": true,
        "snapshot_time": "2026-05-22 08:59:58.539400000",
        "snapshot_basis": "last_continuous_session_snapshot",
        "snapshot_label": "final continuous-session displayed book before close",
        "snapshot_note": "Final continuous-session displayed book before close",
        "snapshot_mic": "XSES",
        "mid_price": 0.6675,
        "spread_pct": 0.007490636704119858,
        "spread_ticks": 1.0,
        "tick_size": 0.005,
        "displayed_levels_per_side": 100,
        "bid_depth_notional_displayed": 2127168.5,
        "ask_depth_notional_displayed": 2132608.5,
        "bid_depth_notional_top10": 2127168.5,
        "ask_depth_notional_top10": 2132608.5,
        "bid_ask_depth_ratio": 0.9974
      },
      "historical_trade_scenarios": {
        "valid": true,
        "requested_lookback_calendar_days": 365,
        "lookback_calendar_days": 365,
        "effective_calendar_days": 366,
        "history_limited": false,
        "trade_days_used": 255,
        "n_trades_used": 102413,
        "first_trade_date": "2025-05-22",
        "last_trade_date": "2026-05-22",
        "window_label": "May 22, 2025 to May 22, 2026",
        "window_short_label": "May 22, 2025 to May 22, 2026",
        "trade_days_label": "255 trading days",
        "trade_count_label": "102,413 trades",
        "window_detail_label": "255 trading days • 102,413 trades",
        "history_note": "Trade-size percentiles use May 22, 2025 to May 22, 2026 history (255 trading days • 102,413 trades).",
        "scenarios": [
          {
            "key": "p90",
            "label": "90th percentile trade",
            "quantile": 0.9,
            "trade_notional": 3375.0,
            "impact_pct": -0.003745,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 0.16,
            "pct_of_adv": 0.65
          },
          {
            "key": "p95",
            "label": "95th percentile trade",
            "quantile": 0.95,
            "trade_notional": 7877.5,
            "impact_pct": -0.003745,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 0.37,
            "pct_of_adv": 1.52
          },
          {
            "key": "p99_99",
            "label": "99.99th percentile trade",
            "quantile": 0.9999,
            "trade_notional": 338191.0,
            "impact_pct": -0.003745,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 15.9,
            "pct_of_adv": 65.24
          }
        ]
      },
      "l3_sell_order_scenarios": {
        "valid": true,
        "trade_date": "2026-05-22",
        "selection_method": "largest_observed_ask_orders_during_day",
        "orders": [
          {
            "rank": 1,
            "order_id": "8149098049227054080",
            "timestamp": "2026-05-21 22:59:01.068500000",
            "local_timestamp": "2026-05-22 06:59:01",
            "posted_price": 0.69,
            "size_shares": 1000000.0,
            "notional": 690000.0,
            "impact_pct": -0.0068189999999999995,
            "filled_pct": 100.0,
            "levels_consumed": 2,
            "pct_of_bid_depth": 32.44,
            "price_vs_mid_pct": 3.371,
            "executed_event_count": 0,
            "event_count": 1
          },
          {
            "rank": 2,
            "order_id": "8151868818529040384",
            "timestamp": "2026-05-22 00:30:00.101800000",
            "local_timestamp": "2026-05-22 08:30:00",
            "posted_price": 0.68,
            "size_shares": 300000.0,
            "notional": 204000.0,
            "impact_pct": -0.003745,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 9.59,
            "price_vs_mid_pct": 1.873,
            "executed_event_count": 0,
            "event_count": 8
          },
          {
            "rank": 3,
            "order_id": "8145931455739072512",
            "timestamp": "2026-05-21 22:59:01.068500000",
            "local_timestamp": "2026-05-22 06:59:01",
            "posted_price": 0.8,
            "size_shares": 210000.0,
            "notional": 168000.0,
            "impact_pct": -0.003745,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 7.9,
            "price_vs_mid_pct": 19.85,
            "executed_event_count": 0,
            "event_count": 1
          }
        ]
      },
      "intraday_liquidity_profile": {
        "valid": true,
        "trade_date": "2026-05-22",
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
            "spread_pct": 0.00754716981132076,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 1564511.5,
            "ask_depth_notional": 2135870.5,
            "mid_price": 0.6625000000000001
          },
          {
            "bucket": "09:30",
            "spread_pct": 0.015037593984962419,
            "spread_ticks": 2.0000000000000018,
            "bid_depth_notional": 1587521.5,
            "ask_depth_notional": 2206205.0,
            "mid_price": 0.665
          },
          {
            "bucket": "10:00",
            "spread_pct": 0.007490636704119857,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 1893011.0,
            "ask_depth_notional": 2238234.5,
            "mid_price": 0.6675
          },
          {
            "bucket": "10:30",
            "spread_pct": 0.007490636704119857,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 1914210.5,
            "ask_depth_notional": 2204935.5,
            "mid_price": 0.6675
          },
          {
            "bucket": "11:00",
            "spread_pct": 0.007490636704119857,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 1920094.5,
            "ask_depth_notional": 2186980.0,
            "mid_price": 0.6675
          },
          {
            "bucket": "11:30",
            "spread_pct": 0.007490636704119857,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 1932197.0,
            "ask_depth_notional": 2202682.0,
            "mid_price": 0.6675
          },
          {
            "bucket": "13:00",
            "spread_pct": 0.007490636704119857,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 2015489.0,
            "ask_depth_notional": 2193100.0,
            "mid_price": 0.6675
          },
          {
            "bucket": "13:30",
            "spread_pct": 0.007490636704119857,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 2021562.0,
            "ask_depth_notional": 2186668.0,
            "mid_price": 0.6675
          },
          {
            "bucket": "14:00",
            "spread_pct": 0.007490636704119857,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 2015710.0,
            "ask_depth_notional": 2182519.0,
            "mid_price": 0.6675
          },
          {
            "bucket": "14:30",
            "spread_pct": 0.007490636704119857,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 2038585.5,
            "ask_depth_notional": 2172682.0,
            "mid_price": 0.6675
          },
          {
            "bucket": "15:00",
            "spread_pct": 0.007490636704119857,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 2035195.0,
            "ask_depth_notional": 2172883.0,
            "mid_price": 0.6675
          },
          {
            "bucket": "15:30",
            "spread_pct": 0.007490636704119857,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 2055223.5,
            "ask_depth_notional": 2147755.0,
            "mid_price": 0.6675
          },
          {
            "bucket": "16:00",
            "spread_pct": 0.007490636704119857,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 1935256.5,
            "ask_depth_notional": 2148388.5,
            "mid_price": 0.6675
          },
          {
            "bucket": "16:30",
            "spread_pct": 0.007490636704119857,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 2127168.5,
            "ask_depth_notional": 2132608.5,
            "mid_price": 0.6675
          }
        ],
        "summary": {
          "median_spread_pct": 0.007490636704119857,
          "median_spread_ticks": 1.0000000000000009,
          "median_bid_depth_notional": 1975372.75,
          "median_ask_depth_notional": 2184593.5,
          "tightest_bucket": "10:00",
          "widest_bucket": "09:30",
          "deepest_bid_bucket": "16:30",
          "thinnest_bid_bucket": "09:00"
        }
      }
    },
    "peer_capacity": {
      "bx_ticket_pct_adv_50k": 9.6,
      "peers": [
        {
          "ticker": "AU8U",
          "pct": 117.6
        }
      ]
    },
    "trader_composition": {
      "primary_period": "6m",
      "periods": {
        "1d": {
          "valid": true,
          "currency": "SGD",
          "n_trades": 524,
          "n_runs": 265,
          "n_trade_days": 1,
          "first_trade_date": "2026-05-22",
          "last_trade_date": "2026-05-22",
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
            "retail_pct": 0.29961832061068705,
            "mixed_pct": 0.40076335877862596,
            "instit_pct": 0.2480916030534351,
            "ambiguous_pct": 0.05152671755725191,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.05152671755725191,
            "retail_qty_pct": 0.016961970613656008,
            "mixed_qty_pct": 0.08837510803802939,
            "instit_qty_pct": 0.7894338807260155,
            "ambiguous_qty_pct": 0.10522904062229906,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.10522904062229906,
            "retail_notional_pct": 0.016915242787952638,
            "mixed_notional_pct": 0.08830606779995184,
            "instit_notional_pct": 0.7893577960894712,
            "ambiguous_notional_pct": 0.10542089332262428,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.10542089332262428
          },
          "run_composition": {
            "retail_pct": 0.5924528301886792,
            "mixed_pct": 0.3018867924528302,
            "instit_pct": 0.052830188679245285,
            "ambiguous_pct": 0.052830188679245285,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.052830188679245285,
            "retail_notional_pct": 0.016915242787952638,
            "mixed_notional_pct": 0.08830606779995184,
            "instit_notional_pct": 0.7893577960894712,
            "unclear_notional_pct": 0.10542089332262428
          },
          "counts": {
            "trades": {
              "retail": 157,
              "mixed": 210,
              "institutional": 130,
              "ambiguous": 27,
              "unobservable": 0,
              "unclear": 27
            },
            "runs": {
              "retail": 157,
              "mixed": 80,
              "institutional": 14,
              "ambiguous": 14,
              "unobservable": 0,
              "unclear": 14
            }
          },
          "confidence": {
            "high": 0.6452830188679245,
            "medium": 0.3018867924528302,
            "low": 0.052830188679245285,
            "na": 0.0
          },
          "confidence_counts": {
            "high": 171,
            "medium": 80,
            "low": 14,
            "na": 0
          },
          "trade_confidence": {
            "high": 0.5477099236641222,
            "medium": 0.40076335877862596,
            "low": 0.05152671755725191,
            "na": 0.0
          },
          "trade_confidence_counts": {
            "high": 287,
            "medium": 210,
            "low": 27,
            "na": 0
          },
          "observability": {
            "avg_feature_coverage": 0.8935849056603772,
            "observable_run_pct": 1.0,
            "ambiguous_run_pct": 0.052830188679245285,
            "unobservable_run_pct": 0.0
          },
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "dominant_share": 0.5924528301886792,
          "dominance_gap": 0.29056603773584905,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 524
            },
            "d2_information": {
              "UNOBSERVABLE": 524
            },
            "d3_urgency": {
              "UNOBSERVABLE": 265
            },
            "participant_confidence": {
              "HIGH": 171,
              "MEDIUM": 80,
              "LOW": 14
            }
          },
          "trade_size": {
            "avg": 1180.898854961832,
            "median": 67.0
          },
          "run_size": {
            "avg": 2335.0603773584908,
            "median": 67.0,
            "avg_length": 1.5471698113207548
          },
          "recent_trades": [
            {
              "trade_id": "BMLL-542",
              "timestamp": "2026-05-22T08:59:53.694600",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 48234,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-541",
              "timestamp": "2026-05-22T08:59:52.603500",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 48233,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-540",
              "timestamp": "2026-05-22T08:59:51.966400",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48232,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-539",
              "timestamp": "2026-05-22T08:59:51.906000",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48232,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-538",
              "timestamp": "2026-05-22T08:59:49.302600",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 48231,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-537",
              "timestamp": "2026-05-22T08:59:31.820500",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48230,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-536",
              "timestamp": "2026-05-22T08:59:31.668600",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48230,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-535",
              "timestamp": "2026-05-22T08:59:30.542100",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48230,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-534",
              "timestamp": "2026-05-22T08:59:28.011300",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48230,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-533",
              "timestamp": "2026-05-22T08:59:27.010400",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48230,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-532",
              "timestamp": "2026-05-22T08:59:22.515200",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48230,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-531",
              "timestamp": "2026-05-22T08:59:19.756100",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 48229,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-530",
              "timestamp": "2026-05-22T08:58:46.708100",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48228,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-529",
              "timestamp": "2026-05-22T08:58:46.224600",
              "price": 0.665,
              "size": 200.0,
              "notional": 133.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48228,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-528",
              "timestamp": "2026-05-22T08:58:21.179000",
              "price": 0.67,
              "size": 300.0,
              "notional": 201.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48227,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-527",
              "timestamp": "2026-05-22T08:58:18.128300",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48227,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-526",
              "timestamp": "2026-05-22T08:58:17.464500",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 48226,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-525",
              "timestamp": "2026-05-22T08:58:17.222800",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 48225,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-524",
              "timestamp": "2026-05-22T08:57:44.542400",
              "price": 0.665,
              "size": 200.0,
              "notional": 133.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48224,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-523",
              "timestamp": "2026-05-22T08:57:40.195800",
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
              "trade_id": "BMLL-522",
              "timestamp": "2026-05-22T08:57:33.133400",
              "price": 0.67,
              "size": 200.0,
              "notional": 134.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48223,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-521",
              "timestamp": "2026-05-22T08:57:30.081400",
              "price": 0.67,
              "size": 300.0,
              "notional": 201.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48223,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-520",
              "timestamp": "2026-05-22T08:56:46.293600",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 48222,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-519",
              "timestamp": "2026-05-22T08:56:21.142200",
              "price": 0.67,
              "size": 300.0,
              "notional": 201.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48221,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-518",
              "timestamp": "2026-05-22T08:56:19.150400",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48221,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-517",
              "timestamp": "2026-05-22T08:56:19.120000",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48221,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-516",
              "timestamp": "2026-05-22T08:56:18.969300",
              "price": 0.67,
              "size": 500.0,
              "notional": 335.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48221,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-515",
              "timestamp": "2026-05-22T08:56:18.939200",
              "price": 0.67,
              "size": 400.0,
              "notional": 268.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48221,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-514",
              "timestamp": "2026-05-22T08:56:18.818300",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48221,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-513",
              "timestamp": "2026-05-22T08:56:13.628300",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 48220,
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
              "retail_pct": 0.29961832061068705,
              "mixed_pct": 0.40076335877862596,
              "instit_pct": 0.2480916030534351,
              "ambiguous_pct": 0.05152671755725191,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.05152671755725191,
              "retail_qty_pct": 0.016961970613656008,
              "mixed_qty_pct": 0.08837510803802939,
              "instit_qty_pct": 0.7894338807260155,
              "ambiguous_qty_pct": 0.10522904062229906,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.10522904062229906,
              "retail_notional_pct": 0.016915242787952638,
              "mixed_notional_pct": 0.08830606779995184,
              "instit_notional_pct": 0.7893577960894712,
              "ambiguous_notional_pct": 0.10542089332262428,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.10542089332262428,
              "run_retail_pct": 0.5924528301886792,
              "run_mixed_pct": 0.3018867924528302,
              "run_instit_pct": 0.052830188679245285,
              "run_unclear_pct": 0.052830188679245285,
              "avg_trade_size": 1180.898854961832,
              "avg_run_notional": 2335.0603773584908,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.6452830188679245,
              "medium_confidence_pct": 0.3018867924528302,
              "low_confidence_pct": 0.052830188679245285,
              "na_confidence_pct": 0.0,
              "avg_feature_coverage": 0.8935849056603772,
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
              "retail_pct": 0.5471830985915493,
              "mixed_pct": 0.05070422535211268,
              "instit_pct": 0.40211267605633805,
              "ambiguous_pct": 0.0,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.0,
              "retail_qty_pct": 0.2151911418407736,
              "mixed_qty_pct": 0.005811914424570369,
              "instit_qty_pct": 0.778996943734656,
              "ambiguous_qty_pct": 0.0,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.0,
              "retail_notional_pct": 0.21492677132759985,
              "mixed_notional_pct": 0.0058068591834717275,
              "instit_notional_pct": 0.7792663694889285,
              "ambiguous_notional_pct": 0.0,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.0,
              "run_retail_pct": 0.7825159914712153,
              "run_mixed_pct": 0.03731343283582089,
              "run_instit_pct": 0.18017057569296374,
              "run_unclear_pct": 0.0,
              "avg_trade_size": 911.8647887323943,
              "avg_run_notional": 1380.4349680170576,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.7004264392324094,
              "low_confidence_pct": 0.2995735607675906,
              "na_confidence_pct": 0.0,
              "avg_feature_coverage": 0.4869402985074627,
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
          "n_trades": 6588,
          "n_runs": 4015,
          "n_trade_days": 21,
          "first_trade_date": "2026-04-23",
          "last_trade_date": "2026-05-22",
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
            "retail_pct": 0.36460230722525805,
            "mixed_pct": 0.28916211293260474,
            "instit_pct": 0.20962355798421373,
            "ambiguous_pct": 0.1366120218579235,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.1366120218579235,
            "retail_qty_pct": 0.030721327096908408,
            "mixed_qty_pct": 0.15559969667890242,
            "instit_qty_pct": 0.5677473039988726,
            "ambiguous_qty_pct": 0.24593167222531656,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.24593167222531656,
            "retail_notional_pct": 0.030698117151123992,
            "mixed_notional_pct": 0.15573182309228403,
            "instit_notional_pct": 0.5673581945602111,
            "ambiguous_notional_pct": 0.24621186519638086,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.24621186519638086
          },
          "run_composition": {
            "retail_pct": 0.5887920298879203,
            "mixed_pct": 0.26425902864259027,
            "instit_pct": 0.05031133250311332,
            "ambiguous_pct": 0.09663760896637609,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.09663760896637609,
            "retail_notional_pct": 0.030698117151123992,
            "mixed_notional_pct": 0.15573182309228403,
            "instit_notional_pct": 0.5673581945602111,
            "unclear_notional_pct": 0.24621186519638086
          },
          "counts": {
            "trades": {
              "retail": 2402,
              "mixed": 1905,
              "institutional": 1381,
              "ambiguous": 900,
              "unobservable": 0,
              "unclear": 900
            },
            "runs": {
              "retail": 2364,
              "mixed": 1061,
              "institutional": 202,
              "ambiguous": 388,
              "unobservable": 0,
              "unclear": 388
            }
          },
          "confidence": {
            "high": 0.6391033623910336,
            "medium": 0.26425902864259027,
            "low": 0.09663760896637609,
            "na": 0.0
          },
          "confidence_counts": {
            "high": 2566,
            "medium": 1061,
            "low": 388,
            "na": 0
          },
          "trade_confidence": {
            "high": 0.5742258652094717,
            "medium": 0.28916211293260474,
            "low": 0.1366120218579235,
            "na": 0.0
          },
          "trade_confidence_counts": {
            "high": 3783,
            "medium": 1905,
            "low": 900,
            "na": 0
          },
          "observability": {
            "avg_feature_coverage": 0.8757907845579077,
            "observable_run_pct": 1.0,
            "ambiguous_run_pct": 0.09663760896637609,
            "unobservable_run_pct": 0.0
          },
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "dominant_share": 0.5887920298879203,
          "dominance_gap": 0.3245330012453301,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 6297,
              "WALK_BOOK": 287,
              "UNOBSERVABLE": 4
            },
            "d2_information": {
              "UNOBSERVABLE": 6588
            },
            "d3_urgency": {
              "UNOBSERVABLE": 4015
            },
            "participant_confidence": {
              "HIGH": 2566,
              "MEDIUM": 1061,
              "LOW": 388
            }
          },
          "trade_size": {
            "avg": 1506.9482392228294,
            "median": 67.0
          },
          "run_size": {
            "avg": 2472.671232876712,
            "median": 133.0,
            "avg_length": 1.2993773349937734
          },
          "recent_trades": [
            {
              "trade_id": "BMLL-542",
              "timestamp": "2026-05-22T08:59:53.694600",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 48234,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-541",
              "timestamp": "2026-05-22T08:59:52.603500",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 48233,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-540",
              "timestamp": "2026-05-22T08:59:51.966400",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48232,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-539",
              "timestamp": "2026-05-22T08:59:51.906000",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48232,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-538",
              "timestamp": "2026-05-22T08:59:49.302600",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 48231,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-537",
              "timestamp": "2026-05-22T08:59:31.820500",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48230,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-536",
              "timestamp": "2026-05-22T08:59:31.668600",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48230,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-535",
              "timestamp": "2026-05-22T08:59:30.542100",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48230,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-534",
              "timestamp": "2026-05-22T08:59:28.011300",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48230,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-533",
              "timestamp": "2026-05-22T08:59:27.010400",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48230,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-532",
              "timestamp": "2026-05-22T08:59:22.515200",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48230,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-531",
              "timestamp": "2026-05-22T08:59:19.756100",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 48229,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-530",
              "timestamp": "2026-05-22T08:58:46.708100",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48228,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-529",
              "timestamp": "2026-05-22T08:58:46.224600",
              "price": 0.665,
              "size": 200.0,
              "notional": 133.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48228,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-528",
              "timestamp": "2026-05-22T08:58:21.179000",
              "price": 0.67,
              "size": 300.0,
              "notional": 201.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48227,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-527",
              "timestamp": "2026-05-22T08:58:18.128300",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48227,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-526",
              "timestamp": "2026-05-22T08:58:17.464500",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 48226,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-525",
              "timestamp": "2026-05-22T08:58:17.222800",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 48225,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-524",
              "timestamp": "2026-05-22T08:57:44.542400",
              "price": 0.665,
              "size": 200.0,
              "notional": 133.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48224,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-523",
              "timestamp": "2026-05-22T08:57:40.195800",
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
              "trade_id": "BMLL-522",
              "timestamp": "2026-05-22T08:57:33.133400",
              "price": 0.67,
              "size": 200.0,
              "notional": 134.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48223,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-521",
              "timestamp": "2026-05-22T08:57:30.081400",
              "price": 0.67,
              "size": 300.0,
              "notional": 201.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48223,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-520",
              "timestamp": "2026-05-22T08:56:46.293600",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 48222,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-519",
              "timestamp": "2026-05-22T08:56:21.142200",
              "price": 0.67,
              "size": 300.0,
              "notional": 201.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48221,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-518",
              "timestamp": "2026-05-22T08:56:19.150400",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48221,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-517",
              "timestamp": "2026-05-22T08:56:19.120000",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48221,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-516",
              "timestamp": "2026-05-22T08:56:18.969300",
              "price": 0.67,
              "size": 500.0,
              "notional": 335.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48221,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-515",
              "timestamp": "2026-05-22T08:56:18.939200",
              "price": 0.67,
              "size": 400.0,
              "notional": 268.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48221,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-514",
              "timestamp": "2026-05-22T08:56:18.818300",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48221,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-513",
              "timestamp": "2026-05-22T08:56:13.628300",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 48220,
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
              "retail_pct": 0.36460230722525805,
              "mixed_pct": 0.28916211293260474,
              "instit_pct": 0.20962355798421373,
              "ambiguous_pct": 0.1366120218579235,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.1366120218579235,
              "retail_qty_pct": 0.030721327096908408,
              "mixed_qty_pct": 0.15559969667890242,
              "instit_qty_pct": 0.5677473039988726,
              "ambiguous_qty_pct": 0.24593167222531656,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.24593167222531656,
              "retail_notional_pct": 0.030698117151123992,
              "mixed_notional_pct": 0.15573182309228403,
              "instit_notional_pct": 0.5673581945602111,
              "ambiguous_notional_pct": 0.24621186519638086,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.24621186519638086,
              "run_retail_pct": 0.5887920298879203,
              "run_mixed_pct": 0.26425902864259027,
              "run_instit_pct": 0.05031133250311332,
              "run_unclear_pct": 0.09663760896637609,
              "avg_trade_size": 1506.9482392228294,
              "avg_run_notional": 2472.671232876712,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.6391033623910336,
              "medium_confidence_pct": 0.26425902864259027,
              "low_confidence_pct": 0.09663760896637609,
              "na_confidence_pct": 0.0,
              "avg_feature_coverage": 0.8757907845579077,
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
              "retail_pct": 0.4831361469185944,
              "mixed_pct": 0.04673612337394785,
              "instit_pct": 0.46977456000941786,
              "ambiguous_pct": 0.0003531696980399082,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.0003531696980399082,
              "retail_qty_pct": 0.18545557589700185,
              "mixed_qty_pct": 0.009787508529114575,
              "instit_qty_pct": 0.8047233584017838,
              "ambiguous_qty_pct": 3.3557172099821404e-05,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 3.3557172099821404e-05,
              "retail_notional_pct": 0.18623483778570352,
              "mixed_notional_pct": 0.00973583164490179,
              "instit_notional_pct": 0.8039957520672151,
              "ambiguous_notional_pct": 3.3578502179617574e-05,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 3.3578502179617574e-05,
              "run_retail_pct": 0.7918316315899145,
              "run_mixed_pct": 0.035840800166701395,
              "run_instit_pct": 0.17201500312565118,
              "run_unclear_pct": 0.000312565117732861,
              "avg_trade_size": 1050.0202778268292,
              "avg_run_notional": 1858.5949677016044,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.721712856845176,
              "low_confidence_pct": 0.27828714315482395,
              "na_confidence_pct": 0.0,
              "avg_feature_coverage": 0.4832100437591165,
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
          "n_trades": 24522,
          "n_runs": 14218,
          "n_trade_days": 63,
          "first_trade_date": "2026-02-23",
          "last_trade_date": "2026-05-22",
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
            "retail_pct": 0.34931897887611124,
            "mixed_pct": 0.2895767066307805,
            "instit_pct": 0.2264089389119974,
            "ambiguous_pct": 0.13469537558111083,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.13469537558111083,
            "retail_qty_pct": 0.023539978483373965,
            "mixed_qty_pct": 0.18025038810296962,
            "instit_qty_pct": 0.5488121440626943,
            "ambiguous_qty_pct": 0.24739748935096212,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.24739748935096212,
            "retail_notional_pct": 0.02351151580822483,
            "mixed_notional_pct": 0.1814958929758481,
            "instit_notional_pct": 0.5473625224385074,
            "ambiguous_notional_pct": 0.2476300687774197,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.2476300687774197
          },
          "run_composition": {
            "retail_pct": 0.5958643972429315,
            "mixed_pct": 0.25453650302433534,
            "instit_pct": 0.05000703333802223,
            "ambiguous_pct": 0.09959206639471092,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.09959206639471092,
            "retail_notional_pct": 0.02351151580822483,
            "mixed_notional_pct": 0.1814958929758481,
            "instit_notional_pct": 0.5473625224385074,
            "unclear_notional_pct": 0.2476300687774197
          },
          "counts": {
            "trades": {
              "retail": 8566,
              "mixed": 7101,
              "institutional": 5552,
              "ambiguous": 3303,
              "unobservable": 0,
              "unclear": 3303
            },
            "runs": {
              "retail": 8472,
              "mixed": 3619,
              "institutional": 711,
              "ambiguous": 1416,
              "unobservable": 0,
              "unclear": 1416
            }
          },
          "confidence": {
            "high": 0.6458010972007314,
            "medium": 0.2546068364045576,
            "low": 0.09959206639471092,
            "na": 0.0
          },
          "confidence_counts": {
            "high": 9182,
            "medium": 3620,
            "low": 1416,
            "na": 0
          },
          "trade_confidence": {
            "high": 0.575646358372074,
            "medium": 0.2896582660468151,
            "low": 0.13469537558111083,
            "na": 0.0
          },
          "trade_confidence_counts": {
            "high": 14116,
            "medium": 7103,
            "low": 3303,
            "na": 0
          },
          "observability": {
            "avg_feature_coverage": 0.8781439020959345,
            "observable_run_pct": 1.0,
            "ambiguous_run_pct": 0.09959206639471092,
            "unobservable_run_pct": 0.0
          },
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "dominant_share": 0.5958643972429315,
          "dominance_gap": 0.34132789421859616,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 23691,
              "WALK_BOOK": 825,
              "UNOBSERVABLE": 6
            },
            "d2_information": {
              "UNOBSERVABLE": 24522
            },
            "d3_urgency": {
              "UNOBSERVABLE": 14218
            },
            "participant_confidence": {
              "HIGH": 9182,
              "MEDIUM": 3620,
              "LOW": 1416
            }
          },
          "trade_size": {
            "avg": 1916.8782725715685,
            "median": 131.0
          },
          "run_size": {
            "avg": 3306.068997045998,
            "median": 133.0,
            "avg_length": 1.3706569137712759
          },
          "recent_trades": [
            {
              "trade_id": "BMLL-542",
              "timestamp": "2026-05-22T08:59:53.694600",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 48234,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-541",
              "timestamp": "2026-05-22T08:59:52.603500",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 48233,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-540",
              "timestamp": "2026-05-22T08:59:51.966400",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48232,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-539",
              "timestamp": "2026-05-22T08:59:51.906000",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48232,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-538",
              "timestamp": "2026-05-22T08:59:49.302600",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 48231,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-537",
              "timestamp": "2026-05-22T08:59:31.820500",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48230,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-536",
              "timestamp": "2026-05-22T08:59:31.668600",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48230,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-535",
              "timestamp": "2026-05-22T08:59:30.542100",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48230,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-534",
              "timestamp": "2026-05-22T08:59:28.011300",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48230,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-533",
              "timestamp": "2026-05-22T08:59:27.010400",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48230,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-532",
              "timestamp": "2026-05-22T08:59:22.515200",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48230,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-531",
              "timestamp": "2026-05-22T08:59:19.756100",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 48229,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-530",
              "timestamp": "2026-05-22T08:58:46.708100",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48228,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-529",
              "timestamp": "2026-05-22T08:58:46.224600",
              "price": 0.665,
              "size": 200.0,
              "notional": 133.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48228,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-528",
              "timestamp": "2026-05-22T08:58:21.179000",
              "price": 0.67,
              "size": 300.0,
              "notional": 201.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48227,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-527",
              "timestamp": "2026-05-22T08:58:18.128300",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48227,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-526",
              "timestamp": "2026-05-22T08:58:17.464500",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 48226,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-525",
              "timestamp": "2026-05-22T08:58:17.222800",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 48225,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-524",
              "timestamp": "2026-05-22T08:57:44.542400",
              "price": 0.665,
              "size": 200.0,
              "notional": 133.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48224,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-523",
              "timestamp": "2026-05-22T08:57:40.195800",
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
              "trade_id": "BMLL-522",
              "timestamp": "2026-05-22T08:57:33.133400",
              "price": 0.67,
              "size": 200.0,
              "notional": 134.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48223,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-521",
              "timestamp": "2026-05-22T08:57:30.081400",
              "price": 0.67,
              "size": 300.0,
              "notional": 201.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48223,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-520",
              "timestamp": "2026-05-22T08:56:46.293600",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 48222,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-519",
              "timestamp": "2026-05-22T08:56:21.142200",
              "price": 0.67,
              "size": 300.0,
              "notional": 201.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48221,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-518",
              "timestamp": "2026-05-22T08:56:19.150400",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48221,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-517",
              "timestamp": "2026-05-22T08:56:19.120000",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48221,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-516",
              "timestamp": "2026-05-22T08:56:18.969300",
              "price": 0.67,
              "size": 500.0,
              "notional": 335.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48221,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-515",
              "timestamp": "2026-05-22T08:56:18.939200",
              "price": 0.67,
              "size": 400.0,
              "notional": 268.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48221,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-514",
              "timestamp": "2026-05-22T08:56:18.818300",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48221,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-513",
              "timestamp": "2026-05-22T08:56:13.628300",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 48220,
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
              "retail_pct": 0.34931897887611124,
              "mixed_pct": 0.2895767066307805,
              "instit_pct": 0.2264089389119974,
              "ambiguous_pct": 0.13469537558111083,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.13469537558111083,
              "retail_qty_pct": 0.023539978483373965,
              "mixed_qty_pct": 0.18025038810296962,
              "instit_qty_pct": 0.5488121440626943,
              "ambiguous_qty_pct": 0.24739748935096212,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.24739748935096212,
              "retail_notional_pct": 0.02351151580822483,
              "mixed_notional_pct": 0.1814958929758481,
              "instit_notional_pct": 0.5473625224385074,
              "ambiguous_notional_pct": 0.2476300687774197,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.2476300687774197,
              "run_retail_pct": 0.5958643972429315,
              "run_mixed_pct": 0.25453650302433534,
              "run_instit_pct": 0.05000703333802223,
              "run_unclear_pct": 0.09959206639471092,
              "avg_trade_size": 1916.8782725715685,
              "avg_run_notional": 3306.068997045998,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.6458010972007314,
              "medium_confidence_pct": 0.2546068364045576,
              "low_confidence_pct": 0.09959206639471092,
              "na_confidence_pct": 0.0,
              "avg_feature_coverage": 0.8781439020959345,
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
              "retail_pct": 0.4495456456950615,
              "mixed_pct": 0.04486863035489002,
              "instit_pct": 0.5034830782732708,
              "ambiguous_pct": 0.0021026456767776498,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.0021026456767776498,
              "retail_qty_pct": 0.2034216318839625,
              "mixed_qty_pct": 0.023541631990771687,
              "instit_qty_pct": 0.7725035803325148,
              "ambiguous_qty_pct": 0.0005331557927510394,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.0005331557927510394,
              "retail_notional_pct": 0.20400671206717452,
              "mixed_notional_pct": 0.023816774549331038,
              "instit_notional_pct": 0.7716489310136914,
              "ambiguous_notional_pct": 0.0005275823698030692,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.0005275823698030692,
              "run_retail_pct": 0.7815012917076011,
              "run_mixed_pct": 0.03565840701524579,
              "run_instit_pct": 0.18094822253756868,
              "run_unclear_pct": 0.0018920787395844704,
              "avg_trade_size": 1371.6310588192273,
              "avg_run_notional": 2729.6371393224904,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.7051268056616817,
              "low_confidence_pct": 0.2948731943383182,
              "na_confidence_pct": 0.0,
              "avg_feature_coverage": 0.4860768475057309,
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
          "n_trades": 43115,
          "n_runs": 26483,
          "n_trade_days": 126,
          "first_trade_date": "2025-11-20",
          "last_trade_date": "2026-05-22",
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
            "retail_pct": 0.37311840426765625,
            "mixed_pct": 0.2877652789052534,
            "instit_pct": 0.21366113881479765,
            "ambiguous_pct": 0.1254551780122927,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.1254551780122927,
            "retail_qty_pct": 0.0279122470065927,
            "mixed_qty_pct": 0.1719219411650844,
            "instit_qty_pct": 0.5462165117115652,
            "ambiguous_qty_pct": 0.2539493001167577,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.2539493001167577,
            "retail_notional_pct": 0.027943917036521933,
            "mixed_notional_pct": 0.17255448412686653,
            "instit_notional_pct": 0.5451014918138098,
            "ambiguous_notional_pct": 0.2544001070228017,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.2544001070228017
          },
          "run_composition": {
            "retail_pct": 0.6007249933919873,
            "mixed_pct": 0.25340784654306536,
            "instit_pct": 0.05312842200657025,
            "ambiguous_pct": 0.09273873805837707,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.09273873805837707,
            "retail_notional_pct": 0.02794305078548303,
            "mixed_notional_pct": 0.17255463789937384,
            "instit_notional_pct": 0.5451019775828327,
            "unclear_notional_pct": 0.2544003337323104
          },
          "counts": {
            "trades": {
              "retail": 16087,
              "mixed": 12407,
              "institutional": 9212,
              "ambiguous": 5409,
              "unobservable": 0,
              "unclear": 5409
            },
            "runs": {
              "retail": 15909,
              "mixed": 6711,
              "institutional": 1407,
              "ambiguous": 2456,
              "unobservable": 0,
              "unclear": 2456
            }
          },
          "confidence": {
            "high": 0.6538156553260582,
            "medium": 0.2534456066155647,
            "low": 0.09273873805837707,
            "na": 0.0
          },
          "confidence_counts": {
            "high": 17315,
            "medium": 6712,
            "low": 2456,
            "na": 0
          },
          "trade_confidence": {
            "high": 0.5867099617302562,
            "medium": 0.28781166647338513,
            "low": 0.12547837179635857,
            "na": 0.0
          },
          "trade_confidence_counts": {
            "high": 25296,
            "medium": 12409,
            "low": 5410,
            "na": 0
          },
          "observability": {
            "avg_feature_coverage": 0.8770154438696521,
            "observable_run_pct": 1.0,
            "ambiguous_run_pct": 0.09273873805837707,
            "unobservable_run_pct": 0.0
          },
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "dominant_share": 0.6007249933919873,
          "dominance_gap": 0.3473171468489219,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 41965,
              "WALK_BOOK": 1143,
              "UNOBSERVABLE": 7
            },
            "d2_information": {
              "UNOBSERVABLE": 43115
            },
            "d3_urgency": {
              "UNOBSERVABLE": 26483
            },
            "participant_confidence": {
              "HIGH": 17315,
              "MEDIUM": 6712,
              "LOW": 2456
            }
          },
          "trade_size": {
            "avg": 1756.8040473153194,
            "median": 133.0
          },
          "run_size": {
            "avg": 2860.1192840690255,
            "median": 136.0,
            "avg_length": 1.3339500811841558
          },
          "recent_trades": [
            {
              "trade_id": "BMLL-542",
              "timestamp": "2026-05-22T08:59:53.694600",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 48234,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-541",
              "timestamp": "2026-05-22T08:59:52.603500",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 48233,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-540",
              "timestamp": "2026-05-22T08:59:51.966400",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48232,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-539",
              "timestamp": "2026-05-22T08:59:51.906000",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48232,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-538",
              "timestamp": "2026-05-22T08:59:49.302600",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 48231,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-537",
              "timestamp": "2026-05-22T08:59:31.820500",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48230,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-536",
              "timestamp": "2026-05-22T08:59:31.668600",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48230,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-535",
              "timestamp": "2026-05-22T08:59:30.542100",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48230,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-534",
              "timestamp": "2026-05-22T08:59:28.011300",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48230,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-533",
              "timestamp": "2026-05-22T08:59:27.010400",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48230,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-532",
              "timestamp": "2026-05-22T08:59:22.515200",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48230,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-531",
              "timestamp": "2026-05-22T08:59:19.756100",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 48229,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-530",
              "timestamp": "2026-05-22T08:58:46.708100",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48228,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-529",
              "timestamp": "2026-05-22T08:58:46.224600",
              "price": 0.665,
              "size": 200.0,
              "notional": 133.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48228,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-528",
              "timestamp": "2026-05-22T08:58:21.179000",
              "price": 0.67,
              "size": 300.0,
              "notional": 201.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48227,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-527",
              "timestamp": "2026-05-22T08:58:18.128300",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48227,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-526",
              "timestamp": "2026-05-22T08:58:17.464500",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 48226,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-525",
              "timestamp": "2026-05-22T08:58:17.222800",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 48225,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-524",
              "timestamp": "2026-05-22T08:57:44.542400",
              "price": 0.665,
              "size": 200.0,
              "notional": 133.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48224,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-523",
              "timestamp": "2026-05-22T08:57:40.195800",
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
              "trade_id": "BMLL-522",
              "timestamp": "2026-05-22T08:57:33.133400",
              "price": 0.67,
              "size": 200.0,
              "notional": 134.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48223,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-521",
              "timestamp": "2026-05-22T08:57:30.081400",
              "price": 0.67,
              "size": 300.0,
              "notional": 201.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48223,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-520",
              "timestamp": "2026-05-22T08:56:46.293600",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 48222,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-519",
              "timestamp": "2026-05-22T08:56:21.142200",
              "price": 0.67,
              "size": 300.0,
              "notional": 201.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48221,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-518",
              "timestamp": "2026-05-22T08:56:19.150400",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48221,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-517",
              "timestamp": "2026-05-22T08:56:19.120000",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48221,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-516",
              "timestamp": "2026-05-22T08:56:18.969300",
              "price": 0.67,
              "size": 500.0,
              "notional": 335.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48221,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-515",
              "timestamp": "2026-05-22T08:56:18.939200",
              "price": 0.67,
              "size": 400.0,
              "notional": 268.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48221,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-514",
              "timestamp": "2026-05-22T08:56:18.818300",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48221,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-513",
              "timestamp": "2026-05-22T08:56:13.628300",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 48220,
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
              "retail_pct": 0.37311840426765625,
              "mixed_pct": 0.2877652789052534,
              "instit_pct": 0.21366113881479765,
              "ambiguous_pct": 0.1254551780122927,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.1254551780122927,
              "retail_qty_pct": 0.0279122470065927,
              "mixed_qty_pct": 0.1719219411650844,
              "instit_qty_pct": 0.5462165117115652,
              "ambiguous_qty_pct": 0.2539493001167577,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.2539493001167577,
              "retail_notional_pct": 0.027943917036521933,
              "mixed_notional_pct": 0.17255448412686653,
              "instit_notional_pct": 0.5451014918138098,
              "ambiguous_notional_pct": 0.2544001070228017,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.2544001070228017,
              "run_retail_pct": 0.6007249933919873,
              "run_mixed_pct": 0.25340784654306536,
              "run_instit_pct": 0.05312842200657025,
              "run_unclear_pct": 0.09273873805837707,
              "avg_trade_size": 1756.8040473153194,
              "avg_run_notional": 2860.1192840690255,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.6538156553260582,
              "medium_confidence_pct": 0.2534456066155647,
              "low_confidence_pct": 0.09273873805837707,
              "na_confidence_pct": 0.0,
              "avg_feature_coverage": 0.8770154438696521,
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
              "retail_pct": 0.4788105521422633,
              "mixed_pct": 0.04723523328669627,
              "instit_pct": 0.4723320558833668,
              "ambiguous_pct": 0.0016221586876736217,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.0016221586876736217,
              "retail_qty_pct": 0.228706082050898,
              "mixed_qty_pct": 0.026700615319329515,
              "instit_qty_pct": 0.7441624542878895,
              "ambiguous_qty_pct": 0.0004308483418829021,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.0004308483418829021,
              "retail_notional_pct": 0.2311541242676207,
              "mixed_notional_pct": 0.026842101392013165,
              "instit_notional_pct": 0.7415838689726416,
              "ambiguous_notional_pct": 0.00041990536772459414,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.00041990536772459414,
              "run_retail_pct": 0.7910761355388318,
              "run_mixed_pct": 0.03589028536501509,
              "run_instit_pct": 0.1716774267486725,
              "run_unclear_pct": 0.0013561523474806127,
              "avg_trade_size": 1450.782970375327,
              "avg_run_notional": 2733.2491786682967,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.7205562134698399,
              "low_confidence_pct": 0.27944378653016005,
              "na_confidence_pct": 0.0,
              "avg_feature_coverage": 0.4850603583298316,
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
      "n_trades": 43115,
      "n_runs": 26483,
      "n_trade_days": 126,
      "first_trade_date": "2025-11-20",
      "last_trade_date": "2026-05-22",
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
        "retail_pct": 0.37311840426765625,
        "mixed_pct": 0.2877652789052534,
        "instit_pct": 0.21366113881479765,
        "ambiguous_pct": 0.1254551780122927,
        "unobservable_pct": 0.0,
        "unclear_pct": 0.1254551780122927,
        "retail_qty_pct": 0.0279122470065927,
        "mixed_qty_pct": 0.1719219411650844,
        "instit_qty_pct": 0.5462165117115652,
        "ambiguous_qty_pct": 0.2539493001167577,
        "unobservable_qty_pct": 0.0,
        "unclear_qty_pct": 0.2539493001167577,
        "retail_notional_pct": 0.027943917036521933,
        "mixed_notional_pct": 0.17255448412686653,
        "instit_notional_pct": 0.5451014918138098,
        "ambiguous_notional_pct": 0.2544001070228017,
        "unobservable_notional_pct": 0.0,
        "unclear_notional_pct": 0.2544001070228017
      },
      "run_composition": {
        "retail_pct": 0.6007249933919873,
        "mixed_pct": 0.25340784654306536,
        "instit_pct": 0.05312842200657025,
        "ambiguous_pct": 0.09273873805837707,
        "unobservable_pct": 0.0,
        "unclear_pct": 0.09273873805837707
      },
      "trade_size": {
        "avg": 1756.8040473153194,
        "median": 133.0
      },
      "run_size": {
        "avg": 2860.1192840690255,
        "median": 136.0,
        "avg_length": 1.3339500811841558
      },
      "confidence": {
        "high": 0.6538156553260582,
        "medium": 0.2534456066155647,
        "low": 0.09273873805837707,
        "na": 0.0
      },
      "confidence_counts": {
        "high": 17315,
        "medium": 6712,
        "low": 2456,
        "na": 0
      },
      "trade_confidence": {
        "high": 0.5867099617302562,
        "medium": 0.28781166647338513,
        "low": 0.12547837179635857,
        "na": 0.0
      },
      "trade_confidence_counts": {
        "high": 25296,
        "medium": 12409,
        "low": 5410,
        "na": 0
      },
      "counts": {
        "trades": {
          "retail": 16087,
          "mixed": 12407,
          "institutional": 9212,
          "ambiguous": 5409,
          "unobservable": 0,
          "unclear": 5409
        },
        "runs": {
          "retail": 15909,
          "mixed": 6711,
          "institutional": 1407,
          "ambiguous": 2456,
          "unobservable": 0,
          "unclear": 2456
        }
      },
      "observability": {
        "avg_feature_coverage": 0.8770154438696521,
        "observable_run_pct": 1.0,
        "ambiguous_run_pct": 0.09273873805837707,
        "unobservable_run_pct": 0.0
      },
      "dominant_bucket": "RETAIL",
      "dominant_label": "Retail-led",
      "dominant_share": 0.6007249933919873,
      "dominance_gap": 0.3473171468489219,
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
            "n_trades": 5025,
            "n_runs": 3077,
            "retail_pct": 0.36318407960199006,
            "mixed_pct": 0.2929353233830846,
            "instit_pct": 0.21154228855721394,
            "ambiguous_pct": 0.13233830845771144,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.13233830845771144,
            "avg_trade_size": 1524.2335323383084,
            "avg_run_notional": 2489.2016574585637,
            "retail_qty_pct": 0.02933266021986439,
            "mixed_qty_pct": 0.15205981425549878,
            "instit_qty_pct": 0.5655893949812427,
            "ambiguous_qty_pct": 0.25301813054339406,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.25301813054339406,
            "retail_notional_pct": 0.02930153884699378,
            "mixed_notional_pct": 0.15224955735031528,
            "instit_notional_pct": 0.565110711871041,
            "ambiguous_notional_pct": 0.2533381919316499,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.2533381919316499,
            "run_retail_pct": 0.5840103997400065,
            "run_mixed_pct": 0.2690932726681833,
            "run_instit_pct": 0.048423789405264865,
            "run_ambiguous_pct": 0.09847253818654533,
            "run_unobservable_pct": 0.0,
            "run_unclear_pct": 0.09847253818654533,
            "avg_feature_coverage": 0.8753981150471236,
            "high_confidence_pct": 0.6324341891452714,
            "medium_confidence_pct": 0.2690932726681833,
            "low_confidence_pct": 0.09847253818654533,
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
          "retail_pct": 0.37311840426765625,
          "mixed_pct": 0.2877652789052534,
          "instit_pct": 0.21366113881479765,
          "ambiguous_pct": 0.1254551780122927,
          "unobservable_pct": 0.0,
          "unclear_pct": 0.1254551780122927,
          "retail_qty_pct": 0.0279122470065927,
          "mixed_qty_pct": 0.1719219411650844,
          "instit_qty_pct": 0.5462165117115652,
          "ambiguous_qty_pct": 0.2539493001167577,
          "unobservable_qty_pct": 0.0,
          "unclear_qty_pct": 0.2539493001167577,
          "retail_notional_pct": 0.027943917036521933,
          "mixed_notional_pct": 0.17255448412686653,
          "instit_notional_pct": 0.5451014918138098,
          "ambiguous_notional_pct": 0.2544001070228017,
          "unobservable_notional_pct": 0.0,
          "unclear_notional_pct": 0.2544001070228017,
          "run_retail_pct": 0.6007249933919873,
          "run_mixed_pct": 0.25340784654306536,
          "run_instit_pct": 0.05312842200657025,
          "run_unclear_pct": 0.09273873805837707,
          "avg_trade_size": 1756.8040473153194,
          "avg_run_notional": 2860.1192840690255,
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "high_confidence_pct": 0.6538156553260582,
          "medium_confidence_pct": 0.2534456066155647,
          "low_confidence_pct": 0.09273873805837707,
          "na_confidence_pct": 0.0,
          "avg_feature_coverage": 0.8770154438696521,
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
          "retail_pct": 0.4788105521422633,
          "mixed_pct": 0.04723523328669627,
          "instit_pct": 0.4723320558833668,
          "ambiguous_pct": 0.0016221586876736217,
          "unobservable_pct": 0.0,
          "unclear_pct": 0.0016221586876736217,
          "retail_qty_pct": 0.228706082050898,
          "mixed_qty_pct": 0.026700615319329515,
          "instit_qty_pct": 0.7441624542878895,
          "ambiguous_qty_pct": 0.0004308483418829021,
          "unobservable_qty_pct": 0.0,
          "unclear_qty_pct": 0.0004308483418829021,
          "retail_notional_pct": 0.2311541242676207,
          "mixed_notional_pct": 0.026842101392013165,
          "instit_notional_pct": 0.7415838689726416,
          "ambiguous_notional_pct": 0.00041990536772459414,
          "unobservable_notional_pct": 0.0,
          "unclear_notional_pct": 0.00041990536772459414,
          "run_retail_pct": 0.7910761355388318,
          "run_mixed_pct": 0.03589028536501509,
          "run_instit_pct": 0.1716774267486725,
          "run_unclear_pct": 0.0013561523474806127,
          "avg_trade_size": 1450.782970375327,
          "avg_run_notional": 2733.2491786682967,
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "high_confidence_pct": 0.0,
          "medium_confidence_pct": 0.7205562134698399,
          "low_confidence_pct": 0.27944378653016005,
          "na_confidence_pct": 0.0,
          "avg_feature_coverage": 0.4850603583298316,
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
            "retail_pct": 0.29961832061068705,
            "mixed_pct": 0.40076335877862596,
            "instit_pct": 0.2480916030534351,
            "ambiguous_pct": 0.05152671755725191,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.05152671755725191,
            "retail_qty_pct": 0.016961970613656008,
            "mixed_qty_pct": 0.08837510803802939,
            "instit_qty_pct": 0.7894338807260155,
            "ambiguous_qty_pct": 0.10522904062229906,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.10522904062229906,
            "retail_notional_pct": 0.016915242787952638,
            "mixed_notional_pct": 0.08830606779995184,
            "instit_notional_pct": 0.7893577960894712,
            "ambiguous_notional_pct": 0.10542089332262428,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.10542089332262428,
            "run_retail_pct": 0.5924528301886792,
            "run_mixed_pct": 0.3018867924528302,
            "run_instit_pct": 0.052830188679245285,
            "run_unclear_pct": 0.052830188679245285,
            "avg_trade_size": 1180.898854961832,
            "avg_run_notional": 2335.0603773584908,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.6452830188679245,
            "medium_confidence_pct": 0.3018867924528302,
            "low_confidence_pct": 0.052830188679245285,
            "na_confidence_pct": 0.0,
            "avg_feature_coverage": 0.8935849056603772,
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
            "retail_pct": 0.5471830985915493,
            "mixed_pct": 0.05070422535211268,
            "instit_pct": 0.40211267605633805,
            "ambiguous_pct": 0.0,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.0,
            "retail_qty_pct": 0.2151911418407736,
            "mixed_qty_pct": 0.005811914424570369,
            "instit_qty_pct": 0.778996943734656,
            "ambiguous_qty_pct": 0.0,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.0,
            "retail_notional_pct": 0.21492677132759985,
            "mixed_notional_pct": 0.0058068591834717275,
            "instit_notional_pct": 0.7792663694889285,
            "ambiguous_notional_pct": 0.0,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.0,
            "run_retail_pct": 0.7825159914712153,
            "run_mixed_pct": 0.03731343283582089,
            "run_instit_pct": 0.18017057569296374,
            "run_unclear_pct": 0.0,
            "avg_trade_size": 911.8647887323943,
            "avg_run_notional": 1380.4349680170576,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.7004264392324094,
            "low_confidence_pct": 0.2995735607675906,
            "na_confidence_pct": 0.0,
            "avg_feature_coverage": 0.4869402985074627,
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
            "retail_pct": 0.36460230722525805,
            "mixed_pct": 0.28916211293260474,
            "instit_pct": 0.20962355798421373,
            "ambiguous_pct": 0.1366120218579235,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.1366120218579235,
            "retail_qty_pct": 0.030721327096908408,
            "mixed_qty_pct": 0.15559969667890242,
            "instit_qty_pct": 0.5677473039988726,
            "ambiguous_qty_pct": 0.24593167222531656,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.24593167222531656,
            "retail_notional_pct": 0.030698117151123992,
            "mixed_notional_pct": 0.15573182309228403,
            "instit_notional_pct": 0.5673581945602111,
            "ambiguous_notional_pct": 0.24621186519638086,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.24621186519638086,
            "run_retail_pct": 0.5887920298879203,
            "run_mixed_pct": 0.26425902864259027,
            "run_instit_pct": 0.05031133250311332,
            "run_unclear_pct": 0.09663760896637609,
            "avg_trade_size": 1506.9482392228294,
            "avg_run_notional": 2472.671232876712,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.6391033623910336,
            "medium_confidence_pct": 0.26425902864259027,
            "low_confidence_pct": 0.09663760896637609,
            "na_confidence_pct": 0.0,
            "avg_feature_coverage": 0.8757907845579077,
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
            "retail_pct": 0.4831361469185944,
            "mixed_pct": 0.04673612337394785,
            "instit_pct": 0.46977456000941786,
            "ambiguous_pct": 0.0003531696980399082,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.0003531696980399082,
            "retail_qty_pct": 0.18545557589700185,
            "mixed_qty_pct": 0.009787508529114575,
            "instit_qty_pct": 0.8047233584017838,
            "ambiguous_qty_pct": 3.3557172099821404e-05,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 3.3557172099821404e-05,
            "retail_notional_pct": 0.18623483778570352,
            "mixed_notional_pct": 0.00973583164490179,
            "instit_notional_pct": 0.8039957520672151,
            "ambiguous_notional_pct": 3.3578502179617574e-05,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 3.3578502179617574e-05,
            "run_retail_pct": 0.7918316315899145,
            "run_mixed_pct": 0.035840800166701395,
            "run_instit_pct": 0.17201500312565118,
            "run_unclear_pct": 0.000312565117732861,
            "avg_trade_size": 1050.0202778268292,
            "avg_run_notional": 1858.5949677016044,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.721712856845176,
            "low_confidence_pct": 0.27828714315482395,
            "na_confidence_pct": 0.0,
            "avg_feature_coverage": 0.4832100437591165,
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
            "retail_pct": 0.34931897887611124,
            "mixed_pct": 0.2895767066307805,
            "instit_pct": 0.2264089389119974,
            "ambiguous_pct": 0.13469537558111083,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.13469537558111083,
            "retail_qty_pct": 0.023539978483373965,
            "mixed_qty_pct": 0.18025038810296962,
            "instit_qty_pct": 0.5488121440626943,
            "ambiguous_qty_pct": 0.24739748935096212,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.24739748935096212,
            "retail_notional_pct": 0.02351151580822483,
            "mixed_notional_pct": 0.1814958929758481,
            "instit_notional_pct": 0.5473625224385074,
            "ambiguous_notional_pct": 0.2476300687774197,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.2476300687774197,
            "run_retail_pct": 0.5958643972429315,
            "run_mixed_pct": 0.25453650302433534,
            "run_instit_pct": 0.05000703333802223,
            "run_unclear_pct": 0.09959206639471092,
            "avg_trade_size": 1916.8782725715685,
            "avg_run_notional": 3306.068997045998,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.6458010972007314,
            "medium_confidence_pct": 0.2546068364045576,
            "low_confidence_pct": 0.09959206639471092,
            "na_confidence_pct": 0.0,
            "avg_feature_coverage": 0.8781439020959345,
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
            "retail_pct": 0.4495456456950615,
            "mixed_pct": 0.04486863035489002,
            "instit_pct": 0.5034830782732708,
            "ambiguous_pct": 0.0021026456767776498,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.0021026456767776498,
            "retail_qty_pct": 0.2034216318839625,
            "mixed_qty_pct": 0.023541631990771687,
            "instit_qty_pct": 0.7725035803325148,
            "ambiguous_qty_pct": 0.0005331557927510394,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.0005331557927510394,
            "retail_notional_pct": 0.20400671206717452,
            "mixed_notional_pct": 0.023816774549331038,
            "instit_notional_pct": 0.7716489310136914,
            "ambiguous_notional_pct": 0.0005275823698030692,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.0005275823698030692,
            "run_retail_pct": 0.7815012917076011,
            "run_mixed_pct": 0.03565840701524579,
            "run_instit_pct": 0.18094822253756868,
            "run_unclear_pct": 0.0018920787395844704,
            "avg_trade_size": 1371.6310588192273,
            "avg_run_notional": 2729.6371393224904,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.7051268056616817,
            "low_confidence_pct": 0.2948731943383182,
            "na_confidence_pct": 0.0,
            "avg_feature_coverage": 0.4860768475057309,
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
            "retail_pct": 0.37311840426765625,
            "mixed_pct": 0.2877652789052534,
            "instit_pct": 0.21366113881479765,
            "ambiguous_pct": 0.1254551780122927,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.1254551780122927,
            "retail_qty_pct": 0.0279122470065927,
            "mixed_qty_pct": 0.1719219411650844,
            "instit_qty_pct": 0.5462165117115652,
            "ambiguous_qty_pct": 0.2539493001167577,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.2539493001167577,
            "retail_notional_pct": 0.027943917036521933,
            "mixed_notional_pct": 0.17255448412686653,
            "instit_notional_pct": 0.5451014918138098,
            "ambiguous_notional_pct": 0.2544001070228017,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.2544001070228017,
            "run_retail_pct": 0.6007249933919873,
            "run_mixed_pct": 0.25340784654306536,
            "run_instit_pct": 0.05312842200657025,
            "run_unclear_pct": 0.09273873805837707,
            "avg_trade_size": 1756.8040473153194,
            "avg_run_notional": 2860.1192840690255,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.6538156553260582,
            "medium_confidence_pct": 0.2534456066155647,
            "low_confidence_pct": 0.09273873805837707,
            "na_confidence_pct": 0.0,
            "avg_feature_coverage": 0.8770154438696521,
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
            "retail_pct": 0.4788105521422633,
            "mixed_pct": 0.04723523328669627,
            "instit_pct": 0.4723320558833668,
            "ambiguous_pct": 0.0016221586876736217,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.0016221586876736217,
            "retail_qty_pct": 0.228706082050898,
            "mixed_qty_pct": 0.026700615319329515,
            "instit_qty_pct": 0.7441624542878895,
            "ambiguous_qty_pct": 0.0004308483418829021,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.0004308483418829021,
            "retail_notional_pct": 0.2311541242676207,
            "mixed_notional_pct": 0.026842101392013165,
            "instit_notional_pct": 0.7415838689726416,
            "ambiguous_notional_pct": 0.00041990536772459414,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.00041990536772459414,
            "run_retail_pct": 0.7910761355388318,
            "run_mixed_pct": 0.03589028536501509,
            "run_instit_pct": 0.1716774267486725,
            "run_unclear_pct": 0.0013561523474806127,
            "avg_trade_size": 1450.782970375327,
            "avg_run_notional": 2733.2491786682967,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.7205562134698399,
            "low_confidence_pct": 0.27944378653016005,
            "na_confidence_pct": 0.0,
            "avg_feature_coverage": 0.4850603583298316,
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
          "trade_id": "BMLL-542",
          "timestamp": "2026-05-22T08:59:53.694600",
          "price": 0.67,
          "size": 100.0,
          "notional": 67.0,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 48234,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-541",
          "timestamp": "2026-05-22T08:59:52.603500",
          "price": 0.665,
          "size": 100.0,
          "notional": 66.5,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 48233,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-540",
          "timestamp": "2026-05-22T08:59:51.966400",
          "price": 0.67,
          "size": 100.0,
          "notional": 67.0,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 48232,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-539",
          "timestamp": "2026-05-22T08:59:51.906000",
          "price": 0.67,
          "size": 100.0,
          "notional": 67.0,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 48232,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-538",
          "timestamp": "2026-05-22T08:59:49.302600",
          "price": 0.665,
          "size": 100.0,
          "notional": 66.5,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 48231,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-537",
          "timestamp": "2026-05-22T08:59:31.820500",
          "price": 0.67,
          "size": 100.0,
          "notional": 67.0,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 48230,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-536",
          "timestamp": "2026-05-22T08:59:31.668600",
          "price": 0.67,
          "size": 100.0,
          "notional": 67.0,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 48230,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-535",
          "timestamp": "2026-05-22T08:59:30.542100",
          "price": 0.67,
          "size": 100.0,
          "notional": 67.0,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 48230,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-534",
          "timestamp": "2026-05-22T08:59:28.011300",
          "price": 0.67,
          "size": 100.0,
          "notional": 67.0,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 48230,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-533",
          "timestamp": "2026-05-22T08:59:27.010400",
          "price": 0.67,
          "size": 100.0,
          "notional": 67.0,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 48230,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-532",
          "timestamp": "2026-05-22T08:59:22.515200",
          "price": 0.67,
          "size": 100.0,
          "notional": 67.0,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 48230,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-531",
          "timestamp": "2026-05-22T08:59:19.756100",
          "price": 0.665,
          "size": 100.0,
          "notional": 66.5,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 48229,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-530",
          "timestamp": "2026-05-22T08:58:46.708100",
          "price": 0.665,
          "size": 100.0,
          "notional": 66.5,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 48228,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-529",
          "timestamp": "2026-05-22T08:58:46.224600",
          "price": 0.665,
          "size": 200.0,
          "notional": 133.0,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 48228,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-528",
          "timestamp": "2026-05-22T08:58:21.179000",
          "price": 0.67,
          "size": 300.0,
          "notional": 201.0,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 48227,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-527",
          "timestamp": "2026-05-22T08:58:18.128300",
          "price": 0.67,
          "size": 100.0,
          "notional": 67.0,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 48227,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-526",
          "timestamp": "2026-05-22T08:58:17.464500",
          "price": 0.665,
          "size": 100.0,
          "notional": 66.5,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 48226,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-525",
          "timestamp": "2026-05-22T08:58:17.222800",
          "price": 0.67,
          "size": 100.0,
          "notional": 67.0,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 48225,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-524",
          "timestamp": "2026-05-22T08:57:44.542400",
          "price": 0.665,
          "size": 200.0,
          "notional": 133.0,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 48224,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-523",
          "timestamp": "2026-05-22T08:57:40.195800",
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
          "trade_id": "BMLL-522",
          "timestamp": "2026-05-22T08:57:33.133400",
          "price": 0.67,
          "size": 200.0,
          "notional": 134.0,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 48223,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-521",
          "timestamp": "2026-05-22T08:57:30.081400",
          "price": 0.67,
          "size": 300.0,
          "notional": 201.0,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 48223,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-520",
          "timestamp": "2026-05-22T08:56:46.293600",
          "price": 0.665,
          "size": 100.0,
          "notional": 66.5,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 48222,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-519",
          "timestamp": "2026-05-22T08:56:21.142200",
          "price": 0.67,
          "size": 300.0,
          "notional": 201.0,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 48221,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-518",
          "timestamp": "2026-05-22T08:56:19.150400",
          "price": 0.67,
          "size": 100.0,
          "notional": 67.0,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 48221,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-517",
          "timestamp": "2026-05-22T08:56:19.120000",
          "price": 0.67,
          "size": 100.0,
          "notional": 67.0,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 48221,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-516",
          "timestamp": "2026-05-22T08:56:18.969300",
          "price": 0.67,
          "size": 500.0,
          "notional": 335.0,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 48221,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-515",
          "timestamp": "2026-05-22T08:56:18.939200",
          "price": 0.67,
          "size": 400.0,
          "notional": 268.0,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 48221,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-514",
          "timestamp": "2026-05-22T08:56:18.818300",
          "price": 0.67,
          "size": 100.0,
          "notional": 67.0,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 48221,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-513",
          "timestamp": "2026-05-22T08:56:13.628300",
          "price": 0.665,
          "size": 100.0,
          "notional": 66.5,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 48220,
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
      "total_trades": 43114,
      "price_moving_trades": 10058,
      "pct_price_moving": 23.32884909774087,
      "all_movers": {
        "count": 10058,
        "avg_size": 1543.8514615231657,
        "median_size": 137.0,
        "retail_count": 5263,
        "mixed_count": 3023,
        "institutional_count": 623,
        "ambiguous_count": 1149,
        "unobservable_count": 0,
        "retail_pct": 52.326506263670716,
        "mixed_pct": 30.05567707297673,
        "instit_pct": 6.194074368661761,
        "unclear_pct": 11.423742294690793
      },
      "positive_movers": {
        "count": 5023,
        "avg_size": 1543.9722277523392,
        "median_size": 137.0,
        "retail_count": 2555,
        "mixed_count": 1526,
        "institutional_count": 308,
        "ambiguous_count": 634,
        "unobservable_count": 0,
        "retail_pct": 50.86601632490544,
        "mixed_pct": 30.380250846107902,
        "instit_pct": 6.131793748755723,
        "unclear_pct": 12.621939080230938
      },
      "negative_movers": {
        "count": 5035,
        "avg_size": 1543.7309831181728,
        "median_size": 136.0,
        "retail_count": 2708,
        "mixed_count": 1497,
        "institutional_count": 315,
        "ambiguous_count": 515,
        "unobservable_count": 0,
        "retail_pct": 53.78351539225422,
        "mixed_pct": 29.73187686196624,
        "instit_pct": 6.256206554121152,
        "unclear_pct": 10.228401191658392
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
            "avg_short_ratio": 0.04918891203598944,
            "max_short_ratio": 0.18750749310634215,
            "interpretation": "Low short interest"
          }
        },
        "3M": {
          "stats": {
            "valid": true,
            "avg_short_ratio": 0.07594935552833479,
            "max_short_ratio": 0.36836158192090396,
            "interpretation": "Moderate short interest"
          }
        },
        "6M": {
          "stats": {
            "valid": true,
            "avg_short_ratio": 0.0650140798051476,
            "max_short_ratio": 0.36836158192090396,
            "interpretation": "Moderate short interest"
          }
        }
      },
      "correlation": {
        "valid": true,
        "correlation": -0.15619494332569214,
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
            "avg_short_ratio": 0.051745314513737976
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
            "avg_short_ratio": 0.051745314513737976,
            "change_pct": null
          },
          {
            "month": "2026-04",
            "avg_short_ratio": 0.039248558959178885,
            "change_pct": -24.15050651830766
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
        "interpretation": "Shorts building significantly (+32% MoM) | YoY: +110% ⬆️"
      },
      "short_series": {
        "valid": true,
        "rows": [
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
          },
          {
            "date": "2025-12-29",
            "short_ratio": 0.023554603854389723,
            "short_vol": 4400,
            "total_vol": 186800,
            "close": 0.68,
            "return": 0.0
          }
        ]
      },
      "peer_comparison": [
        {
          "ticker": "CRPU",
          "avg_short_ratio": 0.07594935552833479,
          "max_short_ratio": 0.36836158192090396,
          "is_target": true
        },
        {
          "ticker": "AU8U",
          "avg_short_ratio": 0.06234092976090336,
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
          "opening": 0.006129210881257315,
          "continuous": 0.9609032885415383,
          "closing": 0.02818569482920926,
          "auctions": 0.03909671145846173,
          "other": 0.0
        },
        "1M": {
          "opening": 0.023092997424896594,
          "continuous": 0.8987998501949038,
          "closing": 0.06827886443880099,
          "auctions": 0.10120014980509615,
          "other": 0.0
        },
        "3M": {
          "opening": 0.044183773917680115,
          "continuous": 0.8776831637989376,
          "closing": 0.06552449703656611,
          "auctions": 0.12231683620106233,
          "other": 0.0
        },
        "6M": {
          "opening": 0.03953835763678857,
          "continuous": 0.864034995187763,
          "closing": 0.08446327931920512,
          "auctions": 0.13596500481223706,
          "other": 0.0
        }
      },
      "hhi": {
        "1D": 0.2151741466209387,
        "1M": 0.22229531467921537,
        "3M": 0.21904504613850412,
        "6M": 0.23095937086846818
      },
      "profile_buckets": [
        {
          "time": "08:30",
          "avg_share": 0.019
        },
        {
          "time": "09:00",
          "avg_share": 0.1087
        },
        {
          "time": "09:30",
          "avg_share": 0.0393
        },
        {
          "time": "10:00",
          "avg_share": 0.0464
        },
        {
          "time": "10:30",
          "avg_share": 0.0321
        },
        {
          "time": "11:00",
          "avg_share": 0.0296
        },
        {
          "time": "11:30",
          "avg_share": 0.0366
        },
        {
          "time": "12:00",
          "avg_share": 0.2355
        },
        {
          "time": "12:30",
          "avg_share": 0.0094
        },
        {
          "time": "13:00",
          "avg_share": 0.0209
        },
        {
          "time": "13:30",
          "avg_share": 0.0193
        },
        {
          "time": "14:00",
          "avg_share": 0.0323
        },
        {
          "time": "14:30",
          "avg_share": 0.0326
        },
        {
          "time": "15:00",
          "avg_share": 0.033
        },
        {
          "time": "15:30",
          "avg_share": 0.05
        },
        {
          "time": "16:00",
          "avg_share": 0.0449
        },
        {
          "time": "16:30",
          "avg_share": 0.0956
        },
        {
          "time": "17:00",
          "avg_share": 0.1148
        }
      ],
      "peers_hhi_rows": [
        {
          "ticker": "CRPU",
          "auctions_pct": 11.844156398852279,
          "hhi": 0.2235703959237723,
          "interp": {
            "text": "Moderate",
            "cls": "bg-amber-500/20 text-amber-400",
            "you": true
          }
        },
        {
          "ticker": "AU8U",
          "auctions_pct": 13.953270922546157,
          "hhi": 0.17092331604085992,
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
