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
    "asof_date": "2026-05-21",
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
          "score_pca": 79.49640287769785,
          "score_pca_percentile": 79.49640287769785,
          "rank_pca": 115,
          "total": 556,
          "adv_notional_sgd": 865032.0,
          "adv_volume_shares": 1300800.0,
          "free_float_shares": 457060801.0,
          "turnover_ratio": 0.0028460108527224148,
          "votes": 442.0,
          "trades": 442.0,
          "spread_pct": 0.007531643117071614,
          "spread_ticks": 1.000936329588015,
          "amihud": 0.0,
          "volatility": 0.1433653116071401
        },
        "pca": {
          "valid": true,
          "window_days": 1,
          "variance_explained": 0.515950020858109,
          "loadings": {
            "log_adv": 0.5538980875634414,
            "log_trades": 0.5062909697128168,
            "log_turnover": 0.5167727741948217,
            "neg_spread": 0.36014279037202845,
            "neg_amihud": 0.0483033329944251,
            "neg_vol": -0.1943610583334144
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
          "peer_median_adv": 2234663.5,
          "peer_median_score_pca": 87.58992805755396,
          "peer_median_trades": 1348.0,
          "peer_median_volatility": 0.29112532477389136,
          "peer_median_spread_pct": 0.007657765504233708,
          "peer_median_spread_ticks": 1.0047961630695443,
          "peer_median_amihud": 0.0,
          "peer_median_turnover_ratio": 0.0028237387018990373,
          "target_vs_peer": {
            "score_pca_delta": -8.09,
            "adv_delta_pct": -61.3,
            "trades_delta_pct": -67.21,
            "volatility_delta_pct": 50.75,
            "spread_pct_delta_pct": 1.65,
            "spread_ticks_delta_pct": -0.38,
            "amihud_delta_pct": null,
            "turnover_ratio_delta_pct": 0.79
          }
        },
        "peer_liquidity": [
          {
            "ticker": "CRPU",
            "score_pca": 79.49640287769785,
            "rank_pca": 115,
            "adv": 865032.0,
            "trades": 442.0,
            "volatility": 0.1433653116071401,
            "spread_pct": 0.007531643117071614,
            "spread_ticks": 1.000936329588015,
            "amihud": 0.0,
            "turnover_ratio": 0.0028460108527224148,
            "is_target": true
          },
          {
            "ticker": "AU8U",
            "score_pca": 87.58992805755396,
            "rank_pca": 70,
            "adv": 2234663.5,
            "trades": 1348.0,
            "volatility": 0.29112532477389136,
            "spread_pct": 0.007657765504233708,
            "spread_ticks": 1.0047961630695443,
            "amihud": 0.0,
            "turnover_ratio": 0.0028237387018990373,
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
              "mean": 0.2639507977918531,
              "median": 0.1447812643997891,
              "min": 0.0,
              "max": 6.608197362010048,
              "p5": 0.0,
              "p95": 0.8614217354412144,
              "count": 556
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 4422986.167986185,
              "median": 15508.099999999999,
              "min": 0.0,
              "max": 555118410.0,
              "p5": 0.0,
              "p95": 17892852.0,
              "count": 556
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.10465659197501,
              "median": 0.03126301048408462,
              "min": 0.0003314123276262361,
              "max": 1.7037037037037037,
              "p5": 0.003324644150862077,
              "p95": 0.4540999820176206,
              "count": 555
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.005857039753954105,
              "median": 0.00030355537564165727,
              "min": 0.0,
              "max": 1.6478808252587174,
              "p5": 0.0,
              "p95": 0.015273092879172018,
              "count": 549
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 8.663154613760724e-05,
              "median": 1.3969128435694071e-08,
              "min": 0.0,
              "max": 0.01685515441496303,
              "p5": 0.0,
              "p95": 5.5118645048055765e-05,
              "count": 417
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 586.1942446043165,
              "median": 8.0,
              "min": 0.0,
              "max": 32345.0,
              "p5": 0.0,
              "p95": 3761.75,
              "count": 556
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.32117415089851775,
              "median": 0.2174639097754406,
              "min": 0.0,
              "max": 1.2730366958631603,
              "p5": 0.050177859062499046,
              "p95": 0.9293677159819156,
              "count": 8
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 12809174.05333627,
              "median": 1502133.0,
              "min": 0.0,
              "max": 82985595.0,
              "p5": 1722.1050000000002,
              "p95": 58894582.599999964,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.050429120809836546,
              "median": 0.008423534782337504,
              "min": 0.004392006336490251,
              "max": 0.22516556291390735,
              "p5": 0.00441293069902395,
              "p95": 0.1930242825607064,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0034379409440372117,
              "median": 0.002834874777310726,
              "min": 0.0,
              "max": 0.010128138397874895,
              "p5": 7.762130265009395e-05,
              "p95": 0.009515415298759421,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.551715152324898e-08,
              "median": 0.0,
              "min": 0.0,
              "max": 1.0809510690675735e-07,
              "p5": 0.0,
              "p95": 7.576035901888935e-08,
              "count": 7
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1488.125,
              "median": 416.0,
              "min": 0.0,
              "max": 6692.0,
              "p5": 7.000000000000001,
              "p95": 5394.199999999998,
              "count": 8
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 2234663.5,
              "median": 2234663.5,
              "min": 2234663.5,
              "max": 2234663.5,
              "p5": 2234663.5,
              "p95": 2234663.5,
              "count": 1
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1348.0,
              "median": 1348.0,
              "min": 1348.0,
              "max": 1348.0,
              "p5": 1348.0,
              "p95": 1348.0,
              "count": 1
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.29112532477389136,
              "median": 0.29112532477389136,
              "min": 0.29112532477389136,
              "max": 0.29112532477389136,
              "p5": 0.29112532477389136,
              "p95": 0.29112532477389136,
              "count": 1
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.007657765504233708,
              "median": 0.007657765504233708,
              "min": 0.007657765504233708,
              "max": 0.007657765504233708,
              "p5": 0.007657765504233708,
              "p95": 0.007657765504233708,
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
              "mean": 0.0028237387018990373,
              "median": 0.0028237387018990373,
              "min": 0.0028237387018990373,
              "max": 0.0028237387018990373,
              "p5": 0.0028237387018990373,
              "p95": 0.0028237387018990373,
              "count": 1
            }
          },
          "returns": {
            "window_days": 1,
            "n_obs": 1,
            "stock": 0.0,
            "market": 0.00015853695362832987,
            "sector": 0.0,
            "peers": 0.0,
            "vs_market": -0.00015853695362832987,
            "vs_sector": 0.0,
            "vs_peers": 0.0
          }
        }
      },
      "30d": {
        "label": "1M",
        "window_days": 21,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 21,
          "score_pca": 81.29496402877699,
          "score_pca_percentile": 81.29496402877699,
          "rank_pca": 105,
          "total": 556,
          "adv_notional_sgd": 477935.5,
          "adv_volume_shares": 718700.0,
          "free_float_shares": 457060801.0,
          "turnover_ratio": 0.00157243849927091,
          "votes": 326.0,
          "trades": 326.0,
          "spread_pct": 0.007539825101523887,
          "spread_ticks": 1.0,
          "amihud": 1.2221790793007083e-08,
          "volatility": 0.1127179712362065
        },
        "pca": {
          "valid": true,
          "window_days": 21,
          "variance_explained": 0.5284128021743696,
          "loadings": {
            "log_adv": 0.5403657911114578,
            "log_trades": 0.4918309199813251,
            "log_turnover": 0.4913623230306036,
            "neg_spread": 0.4125106515472486,
            "neg_amihud": 0.15258977648899127,
            "neg_vol": 0.17669620234709368
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
          "peer_median_volatility": 0.13013705070499357,
          "peer_median_spread_pct": 0.007503437438617174,
          "peer_median_spread_ticks": 1.0036416605972323,
          "peer_median_amihud": 7.185644060414797e-09,
          "peer_median_turnover_ratio": 0.0010219158118342003,
          "target_vs_peer": {
            "score_pca_delta": -2.52,
            "adv_delta_pct": -43.1,
            "trades_delta_pct": -61.0,
            "volatility_delta_pct": 13.39,
            "spread_pct_delta_pct": -0.48,
            "spread_ticks_delta_pct": -0.36,
            "amihud_delta_pct": -70.09,
            "turnover_ratio_delta_pct": 53.87
          }
        },
        "peer_liquidity": [
          {
            "ticker": "CRPU",
            "score_pca": 81.29496402877699,
            "rank_pca": 105,
            "adv": 477935.5,
            "trades": 326.0,
            "volatility": 0.1127179712362065,
            "spread_pct": 0.007539825101523887,
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
            "volatility": 0.13013705070499357,
            "spread_pct": 0.007503437438617174,
            "spread_ticks": 1.0036416605972323,
            "amihud": 7.185644060414797e-09,
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
              "mean": 0.6291066036026941,
              "median": 0.4015346701125927,
              "min": 0.0,
              "max": 5.558776843874918,
              "p5": 0.09372100043682362,
              "p95": 1.930148131362441,
              "count": 556
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 3548756.6804583743,
              "median": 19211.2,
              "min": 0.0,
              "max": 313263925.0,
              "p5": 0.0,
              "p95": 15824757.749999998,
              "count": 556
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.0980219980910365,
              "median": 0.029619336673126866,
              "min": 0.0002879945579246963,
              "max": 1.4782608695652175,
              "p5": 0.003311744120331952,
              "p95": 0.44812671337191584,
              "count": 555
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.006547735366889225,
              "median": 0.0003456286374160352,
              "min": 0.0,
              "max": 2.0598510315733964,
              "p5": 0.0,
              "p95": 0.014863052330420479,
              "count": 549
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 4.695353856444104e-05,
              "median": 1.0396613600051675e-07,
              "min": 0.0,
              "max": 0.007957957957957958,
              "p5": 0.0,
              "p95": 4.3160627880283356e-05,
              "count": 548
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 535.7661870503597,
              "median": 8.0,
              "min": 0.0,
              "max": 12629.0,
              "p5": 0.0,
              "p95": 3043.5,
              "count": 556
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.2924636124395771,
              "median": 0.1418906869250196,
              "min": 0.09416931955898483,
              "max": 1.401999907809055,
              "p5": 0.10066134764601242,
              "p95": 0.9686739520637699,
              "count": 8
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 11379413.190836271,
              "median": 561173.0,
              "min": 0.0,
              "max": 78488037.0,
              "p5": 8054.865000000002,
              "p95": 54682597.64999996,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.04063298513902784,
              "median": 0.008294799428590002,
              "min": 0.004349941916178858,
              "max": 0.1424083769633507,
              "p5": 0.004392818852206197,
              "p95": 0.14154225266601425,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.00247121994061796,
              "median": 0.001029616436337428,
              "min": 0.0,
              "max": 0.008886751071857197,
              "p5": 8.012677415707053e-05,
              "p95": 0.007936322460068113,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 4.5791632750325375e-09,
              "median": 3.34719521608314e-10,
              "min": 0.0,
              "max": 1.6556432303621787e-08,
              "p5": 0.0,
              "p95": 1.5039307774906638e-08,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1322.0,
              "median": 320.0,
              "min": 0.0,
              "max": 6474.0,
              "p5": 11.55,
              "p95": 5100.599999999998,
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
              "mean": 0.13013705070499357,
              "median": 0.13013705070499357,
              "min": 0.13013705070499357,
              "max": 0.13013705070499357,
              "p5": 0.13013705070499357,
              "p95": 0.13013705070499357,
              "count": 1
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.007503437438617174,
              "median": 0.007503437438617174,
              "min": 0.007503437438617174,
              "max": 0.007503437438617174,
              "p5": 0.007503437438617174,
              "p95": 0.007503437438617174,
              "count": 1
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 1.0036416605972323,
              "median": 1.0036416605972323,
              "min": 1.0036416605972323,
              "max": 1.0036416605972323,
              "p5": 1.0036416605972323,
              "p95": 1.0036416605972323,
              "count": 1
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 7.185644060414797e-09,
              "median": 7.185644060414797e-09,
              "min": 7.185644060414797e-09,
              "max": 7.185644060414797e-09,
              "p5": 7.185644060414797e-09,
              "p95": 7.185644060414797e-09,
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
            "stock": -2.220446049250313e-16,
            "market": 0.00613165413872041,
            "sector": -0.00579582843242088,
            "peers": -0.050724637681159535,
            "vs_market": -0.0061316541387206325,
            "vs_sector": 0.005795828432420658,
            "vs_peers": 0.05072463768115931
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
          "amihud": 6.095646422273147e-09,
          "volatility": 0.17861019330374686
        },
        "pca": {
          "valid": true,
          "window_days": 63,
          "variance_explained": 0.5525215089933044,
          "loadings": {
            "log_adv": 0.5258931774117703,
            "log_trades": 0.4748506688132198,
            "log_turnover": 0.48048945611813915,
            "neg_spread": 0.41386606680200205,
            "neg_amihud": 0.2045875727507478,
            "neg_vol": 0.23225394434644972
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
          "peer_median_score_pca": 85.97122302158273,
          "peer_median_trades": 848.0,
          "peer_median_volatility": 0.1831955181322742,
          "peer_median_spread_pct": 0.00759949295938324,
          "peer_median_spread_ticks": 1.0038948393378773,
          "peer_median_amihud": 6.095702901292444e-09,
          "peer_median_turnover_ratio": 0.0013941159742881081,
          "target_vs_peer": {
            "score_pca_delta": -2.34,
            "adv_delta_pct": -39.3,
            "trades_delta_pct": -52.12,
            "volatility_delta_pct": 2.5,
            "spread_pct_delta_pct": -0.91,
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
            "trades": 406.0,
            "volatility": 0.17861019330374686,
            "spread_pct": 0.007668286630131328,
            "spread_ticks": 1.0,
            "amihud": 6.095646422273147e-09,
            "turnover_ratio": 0.002173671419264852,
            "is_target": true
          },
          {
            "ticker": "AU8U",
            "score_pca": 85.97122302158273,
            "rank_pca": 79,
            "adv": 1096435.5,
            "trades": 848.0,
            "volatility": 0.1831955181322742,
            "spread_pct": 0.00759949295938324,
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
              "mean": 0.6926041787403202,
              "median": 0.4764662895324073,
              "min": 0.0,
              "max": 7.013811259728676,
              "p5": 0.1591077817118035,
              "p95": 2.2320494622153784,
              "count": 556
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 3357216.8998488514,
              "median": 13424.5,
              "min": 0.0,
              "max": 285980477.7,
              "p5": 0.0,
              "p95": 13869777.625,
              "count": 556
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.10111334164067089,
              "median": 0.03205574912891988,
              "min": 0.0002805689255457263,
              "max": 1.246661981728742,
              "p5": 0.003473730480762897,
              "p95": 0.44957360805416136,
              "count": 555
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.006562372400952674,
              "median": 0.00026322939118916995,
              "min": 0.0,
              "max": 2.3103289170127215,
              "p5": 0.0,
              "p95": 0.011946076955592232,
              "count": 549
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.4015503698557682e-05,
              "median": 1.3935396338180557e-07,
              "min": 0.0,
              "max": 0.0010537018191403248,
              "p5": 0.0,
              "p95": 3.080752025444165e-05,
              "count": 550
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 495.67446043165467,
              "median": 7.0,
              "min": 0.0,
              "max": 11391.0,
              "p5": 0.0,
              "p95": 2961.25,
              "count": 556
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.3420732342673891,
              "median": 0.1873358974902241,
              "min": 0.13707437222772162,
              "max": 1.3975478017204908,
              "p5": 0.15161190960433046,
              "p95": 1.000911188868969,
              "count": 8
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 10910768.419565365,
              "median": 724405.0,
              "min": 0.0,
              "max": 74036464.0,
              "p5": 3987.69,
              "p95": 51821250.349999964,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.038283054808432374,
              "median": 0.00836406256998663,
              "min": 0.004329099824847234,
              "max": 0.15384615384615383,
              "p5": 0.004394555139992,
              "p95": 0.13819241982507285,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.002590959989332958,
              "median": 0.0012024701957407628,
              "min": 0.0,
              "max": 0.008880210331949037,
              "p5": 0.00011585738011451977,
              "p95": 0.008013752722040331,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 6.083261686576892e-07,
              "median": 6.095674661782796e-09,
              "min": 0.0,
              "max": 4.815115237432181e-06,
              "p5": 3.267082641860938e-11,
              "p95": 3.140886744803374e-06,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1246.375,
              "median": 457.0,
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
            "stock": -0.036231884057971286,
            "market": 0.008827226270709199,
            "sector": -0.017405175048137878,
            "peers": -0.09027777777777757,
            "vs_market": -0.045059110328680485,
            "vs_sector": -0.01882670900983341,
            "vs_peers": 0.05404589371980628
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
          "spread_pct": 0.007489949773338531,
          "spread_ticks": 1.0,
          "amihud": 4.541135179291274e-09,
          "volatility": 0.14093541525191952
        },
        "pca": {
          "valid": true,
          "window_days": 126,
          "variance_explained": 0.5769245838296728,
          "loadings": {
            "log_adv": 0.5040805227989911,
            "log_trades": 0.4486431148319652,
            "log_turnover": 0.4588001309850985,
            "neg_spread": 0.4320058426856531,
            "neg_amihud": 0.26193162831738714,
            "neg_vol": 0.2808690011893179
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
          "peer_median_adv": 1101064.0,
          "peer_median_score_pca": 86.6906474820144,
          "peer_median_trades": 764.5,
          "peer_median_volatility": 0.1616955595443022,
          "peer_median_spread_pct": 0.0070313511065131975,
          "peer_median_spread_ticks": 1.0032629993208255,
          "peer_median_amihud": 5.164666225731466e-09,
          "peer_median_turnover_ratio": 0.0012073123793006789,
          "target_vs_peer": {
            "score_pca_delta": -1.8,
            "adv_delta_pct": -49.4,
            "trades_delta_pct": -55.66,
            "volatility_delta_pct": 12.84,
            "spread_pct_delta_pct": -6.52,
            "spread_ticks_delta_pct": -0.33,
            "amihud_delta_pct": 12.07,
            "turnover_ratio_delta_pct": 52.05
          }
        },
        "peer_liquidity": [
          {
            "ticker": "CRPU",
            "score_pca": 84.89208633093526,
            "rank_pca": 85,
            "adv": 557574.0,
            "trades": 339.0,
            "volatility": 0.14093541525191952,
            "spread_pct": 0.007489949773338531,
            "spread_ticks": 1.0,
            "amihud": 4.541135179291274e-09,
            "turnover_ratio": 0.0018357513883585043,
            "is_target": true
          },
          {
            "ticker": "AU8U",
            "score_pca": 86.6906474820144,
            "rank_pca": 75,
            "adv": 1101064.0,
            "trades": 764.5,
            "volatility": 0.1616955595443022,
            "spread_pct": 0.0070313511065131975,
            "spread_ticks": 1.0032629993208255,
            "amihud": 5.164666225731466e-09,
            "turnover_ratio": 0.0012073123793006789,
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
              "mean": 0.6858252743600405,
              "median": 0.4638054325278048,
              "min": 0.0,
              "max": 6.985699678629191,
              "p5": 0.1526078992561295,
              "p95": 1.8914393249301802,
              "count": 556
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 2741796.680938243,
              "median": 12298.2,
              "min": 0.0,
              "max": 256049087.60000002,
              "p5": 0.0,
              "p95": 11304355.5,
              "count": 556
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.09516519042840216,
              "median": 0.029083885793233743,
              "min": 0.00027417717172845547,
              "max": 1.267605633802817,
              "p5": 0.0036563543655066155,
              "p95": 0.4643085756592909,
              "count": 555
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.003836653330069,
              "median": 0.0002784742463960508,
              "min": 0.0,
              "max": 1.1156153187001516,
              "p5": 0.0,
              "p95": 0.008020635922690814,
              "count": 549
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.0094418472483376e-05,
              "median": 1.6273937017317353e-07,
              "min": 0.0,
              "max": 0.0005977932482434035,
              "p5": 0.0,
              "p95": 3.433937754067513e-05,
              "count": 555
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 403.6456834532374,
              "median": 7.0,
              "min": 0.0,
              "max": 10264.5,
              "p5": 0.0,
              "p95": 2333.625,
              "count": 556
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.35888674990551833,
              "median": 0.16350255156259544,
              "min": 0.11702288468276809,
              "max": 1.3951560301994739,
              "p5": 0.1253922703819711,
              "p95": 1.1026106838264915,
              "count": 8
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 8846821.119315742,
              "median": 631616.375,
              "min": 0.0,
              "max": 57868054.5,
              "p5": 13601.42,
              "p95": 41257423.74999997,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.03589536139099854,
              "median": 0.008156097290058482,
              "min": 0.004274986168547341,
              "max": 0.13333333333333333,
              "p5": 0.004344991259624652,
              "p95": 0.12579667946059614,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.002342490205835843,
              "median": 0.0013260108889664689,
              "min": 0.0,
              "max": 0.006907218692928089,
              "p5": 8.386602361773384e-05,
              "p95": 0.006657644109312026,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 7.970557397712663e-07,
              "median": 4.85290070251137e-09,
              "min": 0.0,
              "max": 6.330000391958183e-06,
              "p5": 3.3048834462562446e-11,
              "p95": 4.1252378606593224e-06,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1131.75,
              "median": 383.25,
              "min": 0.0,
              "max": 5579.0,
              "p5": 8.575000000000001,
              "p95": 4286.274999999998,
              "count": 8
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 1101064.0,
              "median": 1101064.0,
              "min": 1101064.0,
              "max": 1101064.0,
              "p5": 1101064.0,
              "p95": 1101064.0,
              "count": 1
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 764.5,
              "median": 764.5,
              "min": 764.5,
              "max": 764.5,
              "p5": 764.5,
              "p95": 764.5,
              "count": 1
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.1616955595443022,
              "median": 0.1616955595443022,
              "min": 0.1616955595443022,
              "max": 0.1616955595443022,
              "p5": 0.1616955595443022,
              "p95": 0.1616955595443022,
              "count": 1
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.0070313511065131975,
              "median": 0.0070313511065131975,
              "min": 0.0070313511065131975,
              "max": 0.0070313511065131975,
              "p5": 0.0070313511065131975,
              "p95": 0.0070313511065131975,
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
              "mean": 0.0012073123793006789,
              "median": 0.0012073123793006789,
              "min": 0.0012073123793006789,
              "max": 0.0012073123793006789,
              "p5": 0.0012073123793006789,
              "p95": 0.0012073123793006789,
              "count": 1
            }
          },
          "returns": {
            "window_days": 126,
            "n_obs": 126,
            "stock": -0.014814814814816057,
            "market": 0.12010647804296903,
            "sector": -0.010492029288836635,
            "peers": -0.1656050955414009,
            "vs_market": -0.1349212928577851,
            "vs_sector": -0.004322785525979422,
            "vs_peers": 0.15079028072658485
          }
        }
      }
    },
    "period_insights": {
      "1d": {
        "liquidity": "Today’s access looks a little weaker, with bid depth lighter than ask depth even though the spread is 1 tick.",
        "market_comparison": "The stock was flat on the day in line with peers, so the main read is book balance rather than price direction."
      },
      "30d": {
        "liquidity": "Monthly tradability looks average, with a 1M liquidity score of 81.3 keeping access usable but not standout.",
        "market_comparison": "The stock was flat over 1M while peers fell 5.1%, which matters because relative price resilience has not translated into clearly better access."
      },
      "3m": {
        "liquidity": "Over 3M, liquidity still reads as average, with a score of 83.6 pointing to steady but unexceptional access.",
        "market_comparison": "The stock fell 3.6% compared with a 9.0% drop for peers, which matters because better relative performance has not lifted tradability above the group."
      },
      "6m": {
        "liquidity": "Over 6M, tradability looks average and broadly steady, with a score of 84.9 sitting 1.8 points below the peer median.",
        "market_comparison": "The stock fell 1.5% compared with a 16.6% drop for peers, which matters because peer-relative standing in liquidity still trails despite stronger share-price performance."
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
      "current_regime_probability": 0.9999999999997009,
      "current_regime_probability_display": ">99.9%",
      "current_probability_basis": "filtered",
      "historical_probability_basis": "smoothed",
      "current_driver_mix": {
        "market_share": {
          "median": 0.38103412279721743,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "38.1%",
          "display_range": null,
          "display_text": "38.1%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "share_pct",
          "value_pct": 38.1,
          "plain_english": "Market explains about 38.1% of price moves in the current state."
        },
        "sector_share": {
          "median": 0.4762389750081972,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "47.6%",
          "display_range": null,
          "display_text": "47.6%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "share_pct",
          "value_pct": 47.6,
          "plain_english": "Sector explains about 47.6% of price moves in the current state."
        },
        "company_share": {
          "median": 0.1427269021945854,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "14.3%",
          "display_range": null,
          "display_text": "14.3%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "share_pct",
          "value_pct": 14.3,
          "plain_english": "Company-specific explains about 14.3% of price moves in the current state."
        },
        "basis": "current_state"
      },
      "current_sensitivities": {
        "beta_market": {
          "median": -0.7696992476381694,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "-0.77",
          "display_range": null,
          "display_text": "-0.77",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "beta",
          "strength_label": "Modest",
          "plain_english": "Modest market link: a 1% market move has lined up with about a 0.77% stock move in the opposite direction in this state.",
          "value_num": -0.77
        },
        "beta_stock_lag": {
          "median": 0.7759418149447265,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "0.78",
          "display_range": null,
          "display_text": "0.78",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "lag_beta",
          "value_num": 0.78
        },
        "beta_sector": {
          "median": 1.857296235106361,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "1.86",
          "display_range": null,
          "display_text": "1.86",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "beta",
          "strength_label": "High",
          "plain_english": "High sector link: a 1% sector move has lined up with about a 1.86% stock move in the same direction in this state.",
          "value_num": 1.86
        },
        "beta_market_lag": {
          "median": 1.1215868661309059,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "1.12",
          "display_range": null,
          "display_text": "1.12",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "lag_beta",
          "value_num": 1.12
        },
        "beta_sector_lag": {
          "median": -0.39014464603314547,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "-0.39",
          "display_range": null,
          "display_text": "-0.39",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "lag_beta",
          "value_num": -0.39
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
          "period_label": "2025-05-27 to 2025-05-30",
          "n_obs": 4,
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
            "point_estimate_note": "Point estimate only because the current state has 4 trading days.",
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
              "point_estimate_note": "Point estimate only because the current state has 4 trading days.",
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
              "point_estimate_note": "Point estimate only because the current state has 4 trading days.",
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
              "point_estimate_note": "Point estimate only because the current state has 4 trading days.",
              "kind": "share_pct",
              "value_pct": 33.3,
              "plain_english": "Company-specific explains about 33.3% of price moves in the current state."
            }
          },
          "summary": "May: Much more balanced across company, sector, and market factors, though based on only 4 trading days."
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
          "period_label": "2026-05-04 to 2026-05-21",
          "n_obs": 14,
          "partial_month": true,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.8344240810184645,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "83.4%",
            "display_range": null,
            "display_text": "83.4%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 14 trading days.",
            "kind": "share_pct",
            "value_pct": 83.4,
            "plain_english": "Company-specific explains about 83.4% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.12235484086232787,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "12.2%",
              "display_range": null,
              "display_text": "12.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 14 trading days.",
              "kind": "share_pct",
              "value_pct": 12.2,
              "plain_english": "Market explains about 12.2% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.043221078119207584,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "4.3%",
              "display_range": null,
              "display_text": "4.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 14 trading days.",
              "kind": "share_pct",
              "value_pct": 4.3,
              "plain_english": "Sector explains about 4.3% of price moves in the current state."
            },
            "company_share": {
              "median": 0.8344240810184645,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "83.4%",
              "display_range": null,
              "display_text": "83.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 14 trading days.",
              "kind": "share_pct",
              "value_pct": 83.4,
              "plain_english": "Company-specific explains about 83.4% of price moves in the current state."
            }
          },
          "summary": "May: Still clearly company-driven."
        }
      ],
      "regimes": [
        {
          "id": 0,
          "label": "Calm / Liquid",
          "pct_time": 0.34661346366515344,
          "expected_duration_days": 1.956392965164002,
          "current_probability": 0.9999999999997009,
          "current_probability_display": ">99.9%",
          "current_probability_basis": "filtered",
          "n_days_effective": 86.99997937995352,
          "volatility": {
            "median": 3.760407551126035e-128,
            "low": 3.760407551126035e-128,
            "high": 3.760407551126035e-128
          },
          "volatility_label": "Calm / Liquid",
          "jump_probability": 0.09921018294271024,
          "jump_rate": 0.0,
          "risk_score": 0.025922178868785284,
          "metrics": {
            "rolling_vol_10d": 0.0064322578701173656,
            "downside_vol_10d": 0.003506461513673041,
            "drawdown_21d": 0.009391078721796895,
            "amihud_stress": 4.463857191642069e-252,
            "spread_rel": 75.90175909168963,
            "spread_ticks": 1.016980113397352,
            "log_notional": 13.083836257380725,
            "log_trade_count": 5.7157377074017885
          }
        },
        {
          "id": 1,
          "label": "Normal / Active",
          "pct_time": 0.3405638364036012,
          "expected_duration_days": 1.7624402164182982,
          "current_probability": 1.9770682232451646e-220,
          "current_probability_display": "<0.1%",
          "current_probability_basis": "filtered",
          "n_days_effective": 85.48152293730391,
          "volatility": {
            "median": 0.0074214228220380206,
            "low": 0.0074214228220380206,
            "high": 0.0074214228220380206
          },
          "volatility_label": "Normal / Active",
          "jump_probability": 0.22212540127098546,
          "jump_rate": 1.2356576480551587e-175,
          "risk_score": 0.1584640740183001,
          "metrics": {
            "rolling_vol_10d": 0.0066964742621203445,
            "downside_vol_10d": 0.0036657588653414164,
            "drawdown_21d": 0.009939202126942392,
            "amihud_stress": 0.8972791118034221,
            "spread_rel": 74.55458727750292,
            "spread_ticks": 1.003964380849212,
            "log_notional": 13.243161347500724,
            "log_trade_count": 5.838122723460628
          }
        },
        {
          "id": 2,
          "label": "Stressed / Illiquid",
          "pct_time": 0.1454920226404086,
          "expected_duration_days": 1.4582040946846186,
          "current_probability": 2.9903203427487626e-13,
          "current_probability_display": "<0.1%",
          "current_probability_basis": "filtered",
          "n_days_effective": 36.51849768274256,
          "volatility": {
            "median": 0.012289213196596338,
            "low": 0.012289213196596338,
            "high": 0.012289213196596338
          },
          "volatility_label": "Stressed / Illiquid",
          "jump_probability": 0.32063245169987425,
          "jump_rate": 0.10953353105459868,
          "risk_score": 0.5260149641540609,
          "metrics": {
            "rolling_vol_10d": 0.008473126055304547,
            "downside_vol_10d": 0.004517821611127004,
            "drawdown_21d": 0.007668630774509453,
            "amihud_stress": 0.9353988699777543,
            "spread_rel": 77.89787443641282,
            "spread_ticks": 1.053591781717478,
            "log_notional": 13.654840680497284,
            "log_trade_count": 5.792765446986488
          }
        },
        {
          "id": 3,
          "label": "Jump / Tail Shock",
          "pct_time": 0.16733067729083675,
          "expected_duration_days": 20.75862068965487,
          "current_probability": 1.580365149485426e-28,
          "current_probability_display": "<0.1%",
          "current_probability_basis": "filtered",
          "n_days_effective": 42.00000000000003,
          "volatility": {
            "median": 0.014842549552227606,
            "low": 0.014842549552227606,
            "high": 0.014842549552227606
          },
          "volatility_label": "Jump / Tail Shock",
          "jump_probability": 0.1929499369187614,
          "jump_rate": 0.04761904761904824,
          "risk_score": 0.7728623517798318,
          "metrics": {
            "rolling_vol_10d": 0.013703232789931411,
            "downside_vol_10d": 0.010789110461193378,
            "drawdown_21d": 0.051473472696927126,
            "amihud_stress": 0.45792090949976283,
            "spread_rel": 76.65742404215183,
            "spread_ticks": 1.0154334671594105,
            "log_notional": 13.65584267177092,
            "log_trade_count": 6.1565920914484265
          }
        }
      ],
      "transitions": {
        "mean": [
          [
            0.48885524646314027,
            0.4057305651398543,
            0.10529809828326633,
            0.00011609011373890543
          ],
          [
            0.36834674268721657,
            0.4326048675669464,
            0.18757686631999404,
            0.011471523425842919
          ],
          [
            0.34048417543634485,
            0.31698200115212843,
            0.3142249403597508,
            0.028308883051775886
          ],
          [
            0.00023730422401519076,
            0.04769757392870634,
            0.00023787932236214818,
            0.9518272425249162
          ]
        ],
        "low": [],
        "high": [],
        "counts": [
          [
            42.0,
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
            12.0,
            12.0,
            11.0,
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
          "probability": 0.9999999999997009,
          "probability_display": ">99.9%",
          "basis": "filtered"
        },
        {
          "id": 1,
          "label": "Normal / Active",
          "probability": 1.9770682232451646e-220,
          "probability_display": "<0.1%",
          "basis": "filtered"
        },
        {
          "id": 2,
          "label": "Stressed / Illiquid",
          "probability": 2.9903203427487626e-13,
          "probability_display": "<0.1%",
          "basis": "filtered"
        },
        {
          "id": 3,
          "label": "Jump / Tail Shock",
          "probability": 1.580365149485426e-28,
          "probability_display": "<0.1%",
          "basis": "filtered"
        }
      ],
      "jump_risk": {
        "current_probability": 0.09921018294277645,
        "current_score": 0.1658603747650893,
        "current_flag": false,
        "jump_threshold_score": 2.5,
        "method": "robust_residual_and_return_jump_overlay",
        "model_definition": "jump_score_feature_overlay"
      },
      "model_selection": {
        "chosen": 4,
        "criterion": "bic_with_min_state_support",
        "bic": 11081.234737995714,
        "loglik": -5012.9366133107715,
        "n_params": 191,
        "bic_delta_vs_next_best": 521.1921985762583,
        "candidates": [
          {
            "k": 2,
            "valid": true,
            "reason": "ok",
            "bic": 13455.493566611087,
            "loglik": -6476.338674575048,
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
                "bic": 13455.493566611087,
                "loglik": -6476.338674575048,
                "n_params": 91,
                "converged": true,
                "iterations": 9
              },
              {
                "seed": 1337,
                "k": 2,
                "valid": true,
                "reason": "ok",
                "bic": 13455.493566611087,
                "loglik": -6476.338674575048,
                "n_params": 91,
                "converged": true,
                "iterations": 9
              },
              {
                "seed": 2027,
                "k": 2,
                "valid": true,
                "reason": "ok",
                "bic": 13455.493566611087,
                "loglik": -6476.338674575048,
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
            "bic": 11602.426936571972,
            "loglik": -5414.431762546761,
            "n_params": 140,
            "converged": true,
            "iterations": 20,
            "best_seed": 1337,
            "seed_runs": [
              {
                "seed": 42,
                "k": 3,
                "valid": true,
                "reason": "ok",
                "bic": 11602.426936692145,
                "loglik": -5414.431762606848,
                "n_params": 140,
                "converged": true,
                "iterations": 20
              },
              {
                "seed": 1337,
                "k": 3,
                "valid": true,
                "reason": "ok",
                "bic": 11602.426936571972,
                "loglik": -5414.431762546761,
                "n_params": 140,
                "converged": true,
                "iterations": 20
              },
              {
                "seed": 2027,
                "k": 3,
                "valid": true,
                "reason": "ok",
                "bic": 11602.42693661674,
                "loglik": -5414.431762569145,
                "n_params": 140,
                "converged": true,
                "iterations": 18
              }
            ]
          },
          {
            "k": 4,
            "valid": true,
            "reason": "ok",
            "bic": 11081.234737995714,
            "loglik": -5012.9366133107715,
            "n_params": 191,
            "converged": true,
            "iterations": 24,
            "best_seed": 1337,
            "seed_runs": [
              {
                "seed": 42,
                "k": 4,
                "valid": true,
                "reason": "ok",
                "bic": 11081.234781549663,
                "loglik": -5012.936635087746,
                "n_params": 191,
                "converged": true,
                "iterations": 21
              },
              {
                "seed": 1337,
                "k": 4,
                "valid": true,
                "reason": "ok",
                "bic": 11081.234737995714,
                "loglik": -5012.9366133107715,
                "n_params": 191,
                "converged": true,
                "iterations": 24
              },
              {
                "seed": 2027,
                "k": 4,
                "valid": true,
                "reason": "ok",
                "bic": 11081.23475031028,
                "loglik": -5012.936619468054,
                "n_params": 191,
                "converged": true,
                "iterations": 21
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
              "bic": 11081.234781549663,
              "valid": true,
              "reason": null
            },
            {
              "seed": 1337,
              "selected_states": 4,
              "bic": 11081.234737995714,
              "valid": true,
              "reason": null
            },
            {
              "seed": 2027,
              "selected_states": 4,
              "bic": 11081.23475031028,
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
                "2": 6480.650188114798,
                "3": 5542.629261252666,
                "4": 6100.748634946438
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
                "2": 10310.701403474886,
                "3": 9954.535302249327,
                "4": 8793.9381434072
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
                "2": 13455.493566611087,
                "3": 11602.426936692145,
                "4": 11081.234879829997
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
        "bic_delta_vs_next_best": 521.1921985762583,
        "state_count_interpretation": "251 observations allowed the current rule to test up to 4 states; BIC preferred 4 with a 521.19 improvement versus the next best valid state count.",
        "parameter_count": {
          "formula": "k^2 - 1 + 2*k*d",
          "n_parameters": 191,
          "observations_per_parameter": 1.3141361256544504,
          "parameter_pressure_label": "parameter_heavy"
        },
        "state_occupancy": {
          "min_effective_days_required": 7.529999999999999,
          "min_effective_days_observed": 36.51849768274256,
          "passes": true,
          "states": [
            {
              "id": 0,
              "label": "Calm / Liquid",
              "effective_days": 86.99997937995352,
              "pct_time": 0.34661346366515344,
              "passes_min_support": true
            },
            {
              "id": 1,
              "label": "Normal / Active",
              "effective_days": 85.48152293730391,
              "pct_time": 0.3405638364036012,
              "passes_min_support": true
            },
            {
              "id": 2,
              "label": "Stressed / Illiquid",
              "effective_days": 36.51849768274256,
              "pct_time": 0.1454920226404086,
              "passes_min_support": true
            },
            {
              "id": 3,
              "label": "Jump / Tail Shock",
              "effective_days": 42.00000000000003,
              "pct_time": 0.16733067729083675,
              "passes_min_support": true
            }
          ]
        },
        "transition_diagnostics": {
          "self_transition_probabilities": [
            0.48885524646314027,
            0.4326048675669464,
            0.3142249403597508,
            0.9518272425249162
          ],
          "expected_duration_days": [
            1.956392965164002,
            1.7624402164182982,
            1.4582040946846186,
            20.75862068965487
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
              "bic": 11081.234781549663,
              "valid": true,
              "reason": null
            },
            {
              "seed": 1337,
              "selected_states": 4,
              "bic": 11081.234737995714,
              "valid": true,
              "reason": null
            },
            {
              "seed": 2027,
              "selected_states": 4,
              "bic": 11081.23475031028,
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
                "2": 6480.650188114798,
                "3": 5542.629261252666,
                "4": 6100.748634946438
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
                "2": 10310.701403474886,
                "3": 9954.535302249327,
                "4": 8793.9381434072
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
                "2": 13455.493566611087,
                "3": 11602.426936692145,
                "4": 11081.234879829997
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
            "risk_score": 0.025922178868785284,
            "jump_probability": 0.09921018294271024,
            "jump_rate": 0.0,
            "rolling_vol_10d": 0.0064322578701173656,
            "downside_vol_10d": 0.003506461513673041,
            "drawdown_21d": 0.009391078721796895,
            "amihud_stress": 4.463857191642069e-252,
            "spread_rel": 75.90175909168963,
            "spread_ticks": 1.016980113397352,
            "log_notional": 13.083836257380725,
            "log_trade_count": 5.7157377074017885
          },
          {
            "id": 1,
            "label": "Normal / Active",
            "risk_score": 0.1584640740183001,
            "jump_probability": 0.22212540127098546,
            "jump_rate": 1.2356576480551587e-175,
            "rolling_vol_10d": 0.0066964742621203445,
            "downside_vol_10d": 0.0036657588653414164,
            "drawdown_21d": 0.009939202126942392,
            "amihud_stress": 0.8972791118034221,
            "spread_rel": 74.55458727750292,
            "spread_ticks": 1.003964380849212,
            "log_notional": 13.243161347500724,
            "log_trade_count": 5.838122723460628
          },
          {
            "id": 2,
            "label": "Stressed / Illiquid",
            "risk_score": 0.5260149641540609,
            "jump_probability": 0.32063245169987425,
            "jump_rate": 0.10953353105459868,
            "rolling_vol_10d": 0.008473126055304547,
            "downside_vol_10d": 0.004517821611127004,
            "drawdown_21d": 0.007668630774509453,
            "amihud_stress": 0.9353988699777543,
            "spread_rel": 77.89787443641282,
            "spread_ticks": 1.053591781717478,
            "log_notional": 13.654840680497284,
            "log_trade_count": 5.792765446986488
          },
          {
            "id": 3,
            "label": "Jump / Tail Shock",
            "risk_score": 0.7728623517798318,
            "jump_probability": 0.1929499369187614,
            "jump_rate": 0.04761904761904824,
            "rolling_vol_10d": 0.013703232789931411,
            "downside_vol_10d": 0.010789110461193378,
            "drawdown_21d": 0.051473472696927126,
            "amihud_stress": 0.45792090949976283,
            "spread_rel": 76.65742404215183,
            "spread_ticks": 1.0154334671594105,
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
          "trade_date": "2026-05-08",
          "state": 1,
          "probabilities": [
            0.0,
            0.9999957938821761,
            4.206117823964226e-06,
            3.3447062172875473e-25
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            0.0,
            0.9999942636445922,
            5.736355407826107e-06,
            3.035178882993786e-24
          ],
          "jump_probability": 0.16898067662151872,
          "jump_score": 0.8648968009739479
        },
        {
          "trade_date": "2026-05-11",
          "state": 1,
          "probabilities": [
            0.0,
            0.9994600349836391,
            0.0005399650163608948,
            7.28785340275772e-23
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            0.0,
            0.9992632235700907,
            0.0007367764299093194,
            6.6086098007327195e-22
          ],
          "jump_probability": 0.15566805077212556,
          "jump_score": 0.7797218594667336
        },
        {
          "trade_date": "2026-05-12",
          "state": 1,
          "probabilities": [
            0.0,
            0.9999979048375681,
            2.0951624318305794e-06,
            8.076658099975784e-26
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            0.0,
            0.9999971406408695,
            2.8593591303955037e-06,
            7.325388710822155e-25
          ],
          "jump_probability": 0.14041641997052168,
          "jump_score": 0.6744907594765952
        },
        {
          "trade_date": "2026-05-13",
          "state": 1,
          "probabilities": [
            0.0,
            0.9999902258511911,
            9.774148808844724e-06,
            9.877370380794808e-27
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            0.0,
            0.9999866607897228,
            1.3339210277210988e-05,
            8.958556505701809e-26
          ],
          "jump_probability": 0.14112182523823602,
          "jump_score": 0.6795621185704072
        },
        {
          "trade_date": "2026-05-14",
          "state": 1,
          "probabilities": [
            0.0,
            0.9999926984436927,
            7.301556307373857e-06,
            2.088083470021975e-25
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            0.0,
            0.9999900352466076,
            9.964753392415226e-06,
            1.893848737644352e-24
          ],
          "jump_probability": 0.14041641997052026,
          "jump_score": 0.6744907594765851
        },
        {
          "trade_date": "2026-05-15",
          "state": 1,
          "probabilities": [
            0.0,
            0.9999918980093494,
            8.101990650677799e-06,
            2.4192788813728022e-27
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            0.0,
            0.9999951634934572,
            4.836506542780559e-06,
            1.9076993691885026e-24
          ],
          "jump_probability": 0.139724352328269,
          "jump_score": 0.6694945316286194
        },
        {
          "trade_date": "2026-05-18",
          "state": 2,
          "probabilities": [
            0.0,
            4.1816359738967554e-32,
            1.0,
            1.0222830642596353e-25
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            0.0,
            3.865327747399939e-32,
            1.0,
            1.4667720612045038e-22
          ],
          "jump_probability": 0.16986376085161145,
          "jump_score": 0.8703538070644602
        },
        {
          "trade_date": "2026-05-19",
          "state": 0,
          "probabilities": [
            0.9999999864812714,
            3.051693865689017e-217,
            1.3518728544724706e-08,
            8.346521105628041e-29
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            0.9999999805902835,
            4.050087526496174e-217,
            1.94097165498294e-08,
            1.719413392063893e-25
          ],
          "jump_probability": 0.14356923894772425,
          "jump_score": 0.6969947348839889
        },
        {
          "trade_date": "2026-05-20",
          "state": 0,
          "probabilities": [
            0.9999999999654561,
            3.280140201973462e-218,
            3.4543957635731573e-11,
            1.194319721659254e-31
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            0.999999999950403,
            4.353272503907935e-218,
            4.959700374302257e-11,
            2.4603416323533027e-28
          ],
          "jump_probability": 0.1172072574733759,
          "jump_score": 0.49422030059338073
        },
        {
          "trade_date": "2026-05-21",
          "state": 0,
          "probabilities": [
            0.9999999999997009,
            1.9770682232451646e-220,
            2.9903203427487626e-13,
            1.580365149485426e-28
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            0.9999999999997009,
            1.9770682232451646e-220,
            2.9903203427487626e-13,
            1.580365149485426e-28
          ],
          "jump_probability": 0.08342005308537778,
          "jump_score": 0.1658603747650893
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
        "market_link_display": "-0.77",
        "sector_link_display": "1.86",
        "market_link_explainer": "Modest market link. A 1% market move has lined up with about a 0.77% stock move in the opposite direction in this state. This is a point estimate from 251 trading days.",
        "sector_link_explainer": "High sector link. A 1% sector move has lined up with about a 1.86% stock move in the same direction in this state. This is a point estimate from 251 trading days.",
        "stock_persistence_display": "0.78",
        "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
        "history_limited_note": "Read is based on 251 trading days versus the 252-day target."
      },
      "current_summary": {
        "regime_label": "Calm / Liquid",
        "dominant_driver": "sector",
        "dominant_driver_label": "Sector",
        "driver_share_pct": 47.6,
        "driver_share_display": "47.6%",
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
        "jump_risk_score": 0.17,
        "jump_risk_note": "Jump risk is contained based on recent residual and return shocks.",
        "lead_signal_text": "No stable lead signal.",
        "state_term": "state",
        "stay_probability": 0.48885524646314027,
        "effective_days": 87.0,
        "persistence_note": "This looks like a short-lived state, not a sticky regime: the typical run length is about 2.0 days.",
        "expected_duration_days": 2.0
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
          "pct_time": 0.34661346366515344,
          "expected_duration_days": 1.956392965164002,
          "current_probability": 0.9999999999997009,
          "current_probability_display": ">99.9%",
          "current_probability_basis": "filtered",
          "n_days_effective": 86.99997937995352,
          "volatility": {
            "median": 3.760407551126035e-128,
            "low": 3.760407551126035e-128,
            "high": 3.760407551126035e-128
          },
          "volatility_label": "Calm / Liquid",
          "jump_probability": 0.09921018294271024,
          "jump_rate": 0.0,
          "risk_score": 0.025922178868785284,
          "metrics": {
            "rolling_vol_10d": 0.0064322578701173656,
            "downside_vol_10d": 0.003506461513673041,
            "drawdown_21d": 0.009391078721796895,
            "amihud_stress": 4.463857191642069e-252,
            "spread_rel": 75.90175909168963,
            "spread_ticks": 1.016980113397352,
            "log_notional": 13.083836257380725,
            "log_trade_count": 5.7157377074017885
          }
        },
        {
          "id": 1,
          "label": "Normal / Active",
          "pct_time": 0.3405638364036012,
          "expected_duration_days": 1.7624402164182982,
          "current_probability": 1.9770682232451646e-220,
          "current_probability_display": "<0.1%",
          "current_probability_basis": "filtered",
          "n_days_effective": 85.48152293730391,
          "volatility": {
            "median": 0.0074214228220380206,
            "low": 0.0074214228220380206,
            "high": 0.0074214228220380206
          },
          "volatility_label": "Normal / Active",
          "jump_probability": 0.22212540127098546,
          "jump_rate": 1.2356576480551587e-175,
          "risk_score": 0.1584640740183001,
          "metrics": {
            "rolling_vol_10d": 0.0066964742621203445,
            "downside_vol_10d": 0.0036657588653414164,
            "drawdown_21d": 0.009939202126942392,
            "amihud_stress": 0.8972791118034221,
            "spread_rel": 74.55458727750292,
            "spread_ticks": 1.003964380849212,
            "log_notional": 13.243161347500724,
            "log_trade_count": 5.838122723460628
          }
        },
        {
          "id": 2,
          "label": "Stressed / Illiquid",
          "pct_time": 0.1454920226404086,
          "expected_duration_days": 1.4582040946846186,
          "current_probability": 2.9903203427487626e-13,
          "current_probability_display": "<0.1%",
          "current_probability_basis": "filtered",
          "n_days_effective": 36.51849768274256,
          "volatility": {
            "median": 0.012289213196596338,
            "low": 0.012289213196596338,
            "high": 0.012289213196596338
          },
          "volatility_label": "Stressed / Illiquid",
          "jump_probability": 0.32063245169987425,
          "jump_rate": 0.10953353105459868,
          "risk_score": 0.5260149641540609,
          "metrics": {
            "rolling_vol_10d": 0.008473126055304547,
            "downside_vol_10d": 0.004517821611127004,
            "drawdown_21d": 0.007668630774509453,
            "amihud_stress": 0.9353988699777543,
            "spread_rel": 77.89787443641282,
            "spread_ticks": 1.053591781717478,
            "log_notional": 13.654840680497284,
            "log_trade_count": 5.792765446986488
          }
        },
        {
          "id": 3,
          "label": "Jump / Tail Shock",
          "pct_time": 0.16733067729083675,
          "expected_duration_days": 20.75862068965487,
          "current_probability": 1.580365149485426e-28,
          "current_probability_display": "<0.1%",
          "current_probability_basis": "filtered",
          "n_days_effective": 42.00000000000003,
          "volatility": {
            "median": 0.014842549552227606,
            "low": 0.014842549552227606,
            "high": 0.014842549552227606
          },
          "volatility_label": "Jump / Tail Shock",
          "jump_probability": 0.1929499369187614,
          "jump_rate": 0.04761904761904824,
          "risk_score": 0.7728623517798318,
          "metrics": {
            "rolling_vol_10d": 0.013703232789931411,
            "downside_vol_10d": 0.010789110461193378,
            "drawdown_21d": 0.051473472696927126,
            "amihud_stress": 0.45792090949976283,
            "spread_rel": 76.65742404215183,
            "spread_ticks": 1.0154334671594105,
            "log_notional": 13.65584267177092,
            "log_trade_count": 6.1565920914484265
          }
        }
      ],
      "transitions": [
        [
          0.48885524646314027,
          0.4057305651398543,
          0.10529809828326633,
          0.00011609011373890543
        ],
        [
          0.36834674268721657,
          0.4326048675669464,
          0.18757686631999404,
          0.011471523425842919
        ],
        [
          0.34048417543634485,
          0.31698200115212843,
          0.3142249403597508,
          0.028308883051775886
        ],
        [
          0.00023730422401519076,
          0.04769757392870634,
          0.00023787932236214818,
          0.9518272425249162
        ]
      ],
      "transition_intervals": {
        "mean": [
          [
            0.48885524646314027,
            0.4057305651398543,
            0.10529809828326633,
            0.00011609011373890543
          ],
          [
            0.36834674268721657,
            0.4326048675669464,
            0.18757686631999404,
            0.011471523425842919
          ],
          [
            0.34048417543634485,
            0.31698200115212843,
            0.3142249403597508,
            0.028308883051775886
          ],
          [
            0.00023730422401519076,
            0.04769757392870634,
            0.00023787932236214818,
            0.9518272425249162
          ]
        ],
        "low": [],
        "high": [],
        "counts": [
          [
            42.0,
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
            12.0,
            12.0,
            11.0,
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
      "current_regime_probability": 0.9999999999997009,
      "current_regime_probability_display": ">99.9%",
      "current_probability_basis": "filtered",
      "historical_probability_basis": "smoothed",
      "current_state_is_transition": false,
      "state_probabilities": [
        {
          "id": 0,
          "label": "Calm / Liquid",
          "probability": 0.9999999999997009,
          "probability_display": ">99.9%",
          "basis": "filtered"
        },
        {
          "id": 1,
          "label": "Normal / Active",
          "probability": 1.9770682232451646e-220,
          "probability_display": "<0.1%",
          "basis": "filtered"
        },
        {
          "id": 2,
          "label": "Stressed / Illiquid",
          "probability": 2.9903203427487626e-13,
          "probability_display": "<0.1%",
          "basis": "filtered"
        },
        {
          "id": 3,
          "label": "Jump / Tail Shock",
          "probability": 1.580365149485426e-28,
          "probability_display": "<0.1%",
          "basis": "filtered"
        }
      ],
      "jump_risk": {
        "current_probability": 0.09921018294277645,
        "current_score": 0.1658603747650893,
        "current_flag": false,
        "jump_threshold_score": 2.5,
        "method": "robust_residual_and_return_jump_overlay",
        "model_definition": "jump_score_feature_overlay"
      },
      "model_selection": {
        "chosen": 4,
        "criterion": "bic_with_min_state_support",
        "bic": 11081.234737995714,
        "loglik": -5012.9366133107715,
        "n_params": 191,
        "bic_delta_vs_next_best": 521.1921985762583,
        "candidates": [
          {
            "k": 2,
            "valid": true,
            "reason": "ok",
            "bic": 13455.493566611087,
            "loglik": -6476.338674575048,
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
                "bic": 13455.493566611087,
                "loglik": -6476.338674575048,
                "n_params": 91,
                "converged": true,
                "iterations": 9
              },
              {
                "seed": 1337,
                "k": 2,
                "valid": true,
                "reason": "ok",
                "bic": 13455.493566611087,
                "loglik": -6476.338674575048,
                "n_params": 91,
                "converged": true,
                "iterations": 9
              },
              {
                "seed": 2027,
                "k": 2,
                "valid": true,
                "reason": "ok",
                "bic": 13455.493566611087,
                "loglik": -6476.338674575048,
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
            "bic": 11602.426936571972,
            "loglik": -5414.431762546761,
            "n_params": 140,
            "converged": true,
            "iterations": 20,
            "best_seed": 1337,
            "seed_runs": [
              {
                "seed": 42,
                "k": 3,
                "valid": true,
                "reason": "ok",
                "bic": 11602.426936692145,
                "loglik": -5414.431762606848,
                "n_params": 140,
                "converged": true,
                "iterations": 20
              },
              {
                "seed": 1337,
                "k": 3,
                "valid": true,
                "reason": "ok",
                "bic": 11602.426936571972,
                "loglik": -5414.431762546761,
                "n_params": 140,
                "converged": true,
                "iterations": 20
              },
              {
                "seed": 2027,
                "k": 3,
                "valid": true,
                "reason": "ok",
                "bic": 11602.42693661674,
                "loglik": -5414.431762569145,
                "n_params": 140,
                "converged": true,
                "iterations": 18
              }
            ]
          },
          {
            "k": 4,
            "valid": true,
            "reason": "ok",
            "bic": 11081.234737995714,
            "loglik": -5012.9366133107715,
            "n_params": 191,
            "converged": true,
            "iterations": 24,
            "best_seed": 1337,
            "seed_runs": [
              {
                "seed": 42,
                "k": 4,
                "valid": true,
                "reason": "ok",
                "bic": 11081.234781549663,
                "loglik": -5012.936635087746,
                "n_params": 191,
                "converged": true,
                "iterations": 21
              },
              {
                "seed": 1337,
                "k": 4,
                "valid": true,
                "reason": "ok",
                "bic": 11081.234737995714,
                "loglik": -5012.9366133107715,
                "n_params": 191,
                "converged": true,
                "iterations": 24
              },
              {
                "seed": 2027,
                "k": 4,
                "valid": true,
                "reason": "ok",
                "bic": 11081.23475031028,
                "loglik": -5012.936619468054,
                "n_params": 191,
                "converged": true,
                "iterations": 21
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
              "bic": 11081.234781549663,
              "valid": true,
              "reason": null
            },
            {
              "seed": 1337,
              "selected_states": 4,
              "bic": 11081.234737995714,
              "valid": true,
              "reason": null
            },
            {
              "seed": 2027,
              "selected_states": 4,
              "bic": 11081.23475031028,
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
                "2": 6480.650188114798,
                "3": 5542.629261252666,
                "4": 6100.748634946438
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
                "2": 10310.701403474886,
                "3": 9954.535302249327,
                "4": 8793.9381434072
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
                "2": 13455.493566611087,
                "3": 11602.426936692145,
                "4": 11081.234879829997
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
        "bic_delta_vs_next_best": 521.1921985762583,
        "state_count_interpretation": "251 observations allowed the current rule to test up to 4 states; BIC preferred 4 with a 521.19 improvement versus the next best valid state count.",
        "parameter_count": {
          "formula": "k^2 - 1 + 2*k*d",
          "n_parameters": 191,
          "observations_per_parameter": 1.3141361256544504,
          "parameter_pressure_label": "parameter_heavy"
        },
        "state_occupancy": {
          "min_effective_days_required": 7.529999999999999,
          "min_effective_days_observed": 36.51849768274256,
          "passes": true,
          "states": [
            {
              "id": 0,
              "label": "Calm / Liquid",
              "effective_days": 86.99997937995352,
              "pct_time": 0.34661346366515344,
              "passes_min_support": true
            },
            {
              "id": 1,
              "label": "Normal / Active",
              "effective_days": 85.48152293730391,
              "pct_time": 0.3405638364036012,
              "passes_min_support": true
            },
            {
              "id": 2,
              "label": "Stressed / Illiquid",
              "effective_days": 36.51849768274256,
              "pct_time": 0.1454920226404086,
              "passes_min_support": true
            },
            {
              "id": 3,
              "label": "Jump / Tail Shock",
              "effective_days": 42.00000000000003,
              "pct_time": 0.16733067729083675,
              "passes_min_support": true
            }
          ]
        },
        "transition_diagnostics": {
          "self_transition_probabilities": [
            0.48885524646314027,
            0.4326048675669464,
            0.3142249403597508,
            0.9518272425249162
          ],
          "expected_duration_days": [
            1.956392965164002,
            1.7624402164182982,
            1.4582040946846186,
            20.75862068965487
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
              "bic": 11081.234781549663,
              "valid": true,
              "reason": null
            },
            {
              "seed": 1337,
              "selected_states": 4,
              "bic": 11081.234737995714,
              "valid": true,
              "reason": null
            },
            {
              "seed": 2027,
              "selected_states": 4,
              "bic": 11081.23475031028,
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
                "2": 6480.650188114798,
                "3": 5542.629261252666,
                "4": 6100.748634946438
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
                "2": 10310.701403474886,
                "3": 9954.535302249327,
                "4": 8793.9381434072
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
                "2": 13455.493566611087,
                "3": 11602.426936692145,
                "4": 11081.234879829997
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
            "risk_score": 0.025922178868785284,
            "jump_probability": 0.09921018294271024,
            "jump_rate": 0.0,
            "rolling_vol_10d": 0.0064322578701173656,
            "downside_vol_10d": 0.003506461513673041,
            "drawdown_21d": 0.009391078721796895,
            "amihud_stress": 4.463857191642069e-252,
            "spread_rel": 75.90175909168963,
            "spread_ticks": 1.016980113397352,
            "log_notional": 13.083836257380725,
            "log_trade_count": 5.7157377074017885
          },
          {
            "id": 1,
            "label": "Normal / Active",
            "risk_score": 0.1584640740183001,
            "jump_probability": 0.22212540127098546,
            "jump_rate": 1.2356576480551587e-175,
            "rolling_vol_10d": 0.0066964742621203445,
            "downside_vol_10d": 0.0036657588653414164,
            "drawdown_21d": 0.009939202126942392,
            "amihud_stress": 0.8972791118034221,
            "spread_rel": 74.55458727750292,
            "spread_ticks": 1.003964380849212,
            "log_notional": 13.243161347500724,
            "log_trade_count": 5.838122723460628
          },
          {
            "id": 2,
            "label": "Stressed / Illiquid",
            "risk_score": 0.5260149641540609,
            "jump_probability": 0.32063245169987425,
            "jump_rate": 0.10953353105459868,
            "rolling_vol_10d": 0.008473126055304547,
            "downside_vol_10d": 0.004517821611127004,
            "drawdown_21d": 0.007668630774509453,
            "amihud_stress": 0.9353988699777543,
            "spread_rel": 77.89787443641282,
            "spread_ticks": 1.053591781717478,
            "log_notional": 13.654840680497284,
            "log_trade_count": 5.792765446986488
          },
          {
            "id": 3,
            "label": "Jump / Tail Shock",
            "risk_score": 0.7728623517798318,
            "jump_probability": 0.1929499369187614,
            "jump_rate": 0.04761904761904824,
            "rolling_vol_10d": 0.013703232789931411,
            "downside_vol_10d": 0.010789110461193378,
            "drawdown_21d": 0.051473472696927126,
            "amihud_stress": 0.45792090949976283,
            "spread_rel": 76.65742404215183,
            "spread_ticks": 1.0154334671594105,
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
          "trade_date": "2026-05-08",
          "state": 1,
          "probabilities": [
            0.0,
            0.9999957938821761,
            4.206117823964226e-06,
            3.3447062172875473e-25
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            0.0,
            0.9999942636445922,
            5.736355407826107e-06,
            3.035178882993786e-24
          ],
          "jump_probability": 0.16898067662151872,
          "jump_score": 0.8648968009739479
        },
        {
          "trade_date": "2026-05-11",
          "state": 1,
          "probabilities": [
            0.0,
            0.9994600349836391,
            0.0005399650163608948,
            7.28785340275772e-23
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            0.0,
            0.9992632235700907,
            0.0007367764299093194,
            6.6086098007327195e-22
          ],
          "jump_probability": 0.15566805077212556,
          "jump_score": 0.7797218594667336
        },
        {
          "trade_date": "2026-05-12",
          "state": 1,
          "probabilities": [
            0.0,
            0.9999979048375681,
            2.0951624318305794e-06,
            8.076658099975784e-26
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            0.0,
            0.9999971406408695,
            2.8593591303955037e-06,
            7.325388710822155e-25
          ],
          "jump_probability": 0.14041641997052168,
          "jump_score": 0.6744907594765952
        },
        {
          "trade_date": "2026-05-13",
          "state": 1,
          "probabilities": [
            0.0,
            0.9999902258511911,
            9.774148808844724e-06,
            9.877370380794808e-27
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            0.0,
            0.9999866607897228,
            1.3339210277210988e-05,
            8.958556505701809e-26
          ],
          "jump_probability": 0.14112182523823602,
          "jump_score": 0.6795621185704072
        },
        {
          "trade_date": "2026-05-14",
          "state": 1,
          "probabilities": [
            0.0,
            0.9999926984436927,
            7.301556307373857e-06,
            2.088083470021975e-25
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            0.0,
            0.9999900352466076,
            9.964753392415226e-06,
            1.893848737644352e-24
          ],
          "jump_probability": 0.14041641997052026,
          "jump_score": 0.6744907594765851
        },
        {
          "trade_date": "2026-05-15",
          "state": 1,
          "probabilities": [
            0.0,
            0.9999918980093494,
            8.101990650677799e-06,
            2.4192788813728022e-27
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            0.0,
            0.9999951634934572,
            4.836506542780559e-06,
            1.9076993691885026e-24
          ],
          "jump_probability": 0.139724352328269,
          "jump_score": 0.6694945316286194
        },
        {
          "trade_date": "2026-05-18",
          "state": 2,
          "probabilities": [
            0.0,
            4.1816359738967554e-32,
            1.0,
            1.0222830642596353e-25
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            0.0,
            3.865327747399939e-32,
            1.0,
            1.4667720612045038e-22
          ],
          "jump_probability": 0.16986376085161145,
          "jump_score": 0.8703538070644602
        },
        {
          "trade_date": "2026-05-19",
          "state": 0,
          "probabilities": [
            0.9999999864812714,
            3.051693865689017e-217,
            1.3518728544724706e-08,
            8.346521105628041e-29
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            0.9999999805902835,
            4.050087526496174e-217,
            1.94097165498294e-08,
            1.719413392063893e-25
          ],
          "jump_probability": 0.14356923894772425,
          "jump_score": 0.6969947348839889
        },
        {
          "trade_date": "2026-05-20",
          "state": 0,
          "probabilities": [
            0.9999999999654561,
            3.280140201973462e-218,
            3.4543957635731573e-11,
            1.194319721659254e-31
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            0.999999999950403,
            4.353272503907935e-218,
            4.959700374302257e-11,
            2.4603416323533027e-28
          ],
          "jump_probability": 0.1172072574733759,
          "jump_score": 0.49422030059338073
        },
        {
          "trade_date": "2026-05-21",
          "state": 0,
          "probabilities": [
            0.9999999999997009,
            1.9770682232451646e-220,
            2.9903203427487626e-13,
            1.580365149485426e-28
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            0.9999999999997009,
            1.9770682232451646e-220,
            2.9903203427487626e-13,
            1.580365149485426e-28
          ],
          "jump_probability": 0.08342005308537778,
          "jump_score": 0.1658603747650893
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
        "text": "Execution: bid-light",
        "bg": "bg-amber-500/20",
        "textColor": "text-amber-400"
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
    "liq_subtitle": "Trading access is close to peer levels for its size, but the order book is thinner on the bid side today.",
    "market_comparison_title": "How You Compare to the Market",
    "market_comparison_subtitle": "Context relative to market, sector, and peer medians.",
    "perf_title": "Stock Performance",
    "perf_subtitle": "Returns are flat over one month, ahead of peers but behind the market.",
    "perf_insight": "Performance is mixed. The stock returned -0.0% over one month, compared with peers at -5.1% and the market at +0.6%. That matters because relative resilience against peers is not translating into broader market outperformance.",
    "drivers_title": "What Moves Your Stock Price?",
    "drivers_subtitle": "Sector moves are the main influence on the stock now, accounting for 47.6% of the tape.",
    "drivers_strip": [
      {
        "title": "Current Driver (Last 5 Days)",
        "text": "Over the last 5 trading days, moves are mainly sector-driven, accounting for about 47.6% of price changes. Other influences are market 38.1%, and company-specific 14.3%."
      },
      {
        "title": "Driver Mix",
        "text": "Based on the last 5 trading days, current mix is market 38.1%, sector 47.6%, and company-specific 14.3%."
      },
      {
        "title": "Monthly Trend",
        "text": "The driver mix has been consistently company-driven across Mar to May."
      }
    ],
    "drivers_pie_title": "Current Driver Mix (Last 5 Days)",
    "drivers_pie_note": "Based on the last 5 trading days, current split is market 38.1%, sector 47.6%, and company-specific 14.3%.",
    "lead_lag_title": "",
    "lead_lag_note": "",
    "rolling_title": "Monthly Driver Shift",
    "rolling_latest_label": "Latest: {period}",
    "rolling_note": "Each bar shows the monthly split between market-, sector-, and company-driven moves.",
    "drivers_bottom_line": "Sector factors are driving 47.6% of trading while displayed bid depth is only 0.61x ask depth. That matters because broader group moves are meeting a thinner buy side even with a 1 tick spread.",
    "drivers_wtd_title": "Key Reads",
    "drivers_wtd_list": [
      "Main driver now: sector moves are leading, accounting for 47.6% of current price action.",
      "Monthly change: the stock was mostly sector from March through May, so the current read looks more balanced than the recent monthly pattern."
    ],
    "regime_title": "Market State",
    "regime_subtitle": "Current conditions look orderly on spread, but the book is not fully balanced.",
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
    "exec_check_subtitle": "Combines the final continuous-session displayed book before close, trade-size stress tests based on May 21, 2025 to May 21, 2026 (255 trading days • 101,957 trades), large sell-side orders observed today, and intraday spread/depth during the continuous trading session.",
    "order_book_title": "Order Book Depth (Available Liquidity)",
    "order_book_note": "Depth shown is based on the displayed order book.",
    "peer_capacity_title": "Peer Capacity Context",
    "peer_capacity_note": "Immediate buy-side depth is lighter than the monthly baseline, so day-to-day access may feel weaker than the 1M score",
    "impact_summary_title": "Estimated Price Impact (Sell Orders)",
    "impact_summary_subtitle": "Approximate price impact (%) for sell orders.",
    "exec_check_insight": "The current book reads slightly weaker than the broader liquidity profile because displayed bid depth is only 0.61x ask depth, despite a 1 tick spread.",
    "trader_composition_title": "Who's Trading Your Stock?",
    "trader_composition_subtitle": "Shows whether trading is mostly retail-like, institution-like, mixed, or unclassified.",
    "trader_retail_threshold": "Retail-like flow",
    "trader_mixed_threshold": "Mixed flow",
    "trader_instit_threshold": "Institution-like flow",
    "peer_trader_title": "Peer Comparison: Trader Mix",
    "peer_trader_subtitle": "How the trader mix compares with peers.",
    "price_moving_title": "Which Trades Move the Price?",
    "price_moving_subtitle": "Price-moving trades are 23.6% of total trades.",
    "intraday_title": "When Does Trading Happen?",
    "intraday_subtitle": "Order-book conditions are the clearest near-term signal.",
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
    "intraday_insight": "The clearest near-term read is a lighter buy side. Displayed bid depth is 0.61x ask depth while the spread remains 1 tick. That matters because quoted costs look contained, but immediate buy-side access can still feel thinner.",
    "short_title": "Short Selling & Lending",
    "short_subtitle": "Near-term trading quality is being shaped more by book balance than by quoted spread.",
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
    "exec_subtitle": "Liquidity looks mixed for the company’s size, with a lighter bid the main near-term constraint.",
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
    "liq_insight": "Liquidity looks middle of the pack for its size, with a 6M score of 84.9 compared with a peer median of 86.7. That points to access that is broadly serviceable rather than a standout strength. Near-term conditions look a little weaker because displayed bid depth is only 0.61x ask depth, which matters because buy-side access can feel thinner even with a 1 tick spread.",
    "perf_badge": "Context",
    "exec_check_tiles": [
      {
        "title": "Mid Price",
        "value": "0.663",
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
        "value": "0.61x",
        "note": "Bid depth / ask depth on the displayed order book",
        "color": "text-slate-300"
      }
    ],
    "impact_summary_cards": [
      {
        "title": "~S$100K sell",
        "text": "Estimated impact ~-0.38% with 100.0% fill.",
        "cls": "ok"
      },
      {
        "title": "S$1.0M sell",
        "text": "Estimated impact ~-0.67% with 100.0% fill.",
        "cls": "warn"
      },
      {
        "title": "S$2.5M sell",
        "text": "Estimated impact ~-2.34% with 62.5% fill.",
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
        "value": "47.6",
        "suffix": "sector",
        "bar_pct": 48,
        "color_value": "text-amber-400",
        "color_bar": "bg-amber-500",
        "subtext": "Market 38.1% • Company 14.3%",
        "interpretation": {
          "text": "Sector",
          "cls": "interpretation-neutral",
          "icon": "◆"
        }
      }
    ],
    "exec_takeaways": [
      "Structural liquidity is mixed for the stock’s size. The 6M liquidity score is 84.9 compared with a peer median of 86.7, which matters because peer-relative access is neither a clear strength nor a clear weakness.",
      "The main near-term constraint is on the buy side. Displayed bid depth is 0.61x ask depth, which matters because immediate buy-side access can feel thinner even with a 1 tick spread.",
      "Sector moves are the main current driver at 47.6%. That matters because broader group moves still explain a meaningful share of trading."
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
      "overall": "6M liquidity is strong: score 84.9 vs peer median 86.7 (-1.8 pts). Recent trend context is too limited to say whether access has changed from the 1M baseline.",
      "strengths": [
        "6M score 84.9 vs peer median 86.7 (-1.8 pts)."
      ],
      "concerns": [],
      "peer_context": "Primary-period score gap vs peers: -1.8 pts."
    },
    "market_comparison": {
      "returns": {
        "insight": "6M return is -1.5%, better than peers, but worse than market and sector, which shows price performance is mixed across comparison groups.",
        "vs_market": "Worse than market: -1.5% vs market 12.0%.",
        "vs_sector": "Worse than sector: -1.5% vs sector -1.0%.",
        "vs_peers": "Better than peers: -1.5% vs peers -16.6%."
      },
      "adv": {
        "insight": "ADV is S$557.6K, better than market, but worse than sector and peers, which shows trading size is uneven across comparison groups.",
        "vs_market": "Better than market: S$557.6K vs market S$12.3K.",
        "vs_sector": "Worse than sector: S$557.6K vs sector S$631.6K.",
        "vs_peers": "Worse than peers: S$557.6K vs peers S$1.1M."
      },
      "spread": {
        "insight": "Spread is 0.75%, better than market, which keeps trading costs more competitive than comparable names.",
        "vs_market": "Better than market: 0.75% vs market 2.91%.",
        "vs_sector": "In line with sector: 0.75% vs sector 0.82%.",
        "vs_peers": "In line with peers: 0.75% vs peers 0.70%."
      },
      "turnover_ratio": {
        "insight": "Turnover ratio is 0.18%, better than market, sector, and peers, which shows a more active free-float turnover profile than comparable names.",
        "vs_market": "Better than market: 0.18% vs market 0.03%.",
        "vs_sector": "Better than sector: 0.18% vs sector 0.13%.",
        "vs_peers": "Better than peers: 0.18% vs peers 0.12%."
      },
      "volatility": {
        "insight": "Volatility is 14.09%, better than market, sector, and peers, which suggests day-to-day price swings are more contained than comparable names.",
        "vs_market": "Better than market: 14.09% vs market 46.38%.",
        "vs_sector": "Better than sector: 14.09% vs sector 16.35%.",
        "vs_peers": "Better than peers: 14.09% vs peers 16.17%."
      },
      "trades": {
        "insight": "Trades is 339, better than market, but worse than sector and peers, which shows trading frequency is mixed across comparison groups.",
        "vs_market": "Better than market: 339 vs market 7.",
        "vs_sector": "Worse than sector: 339 vs sector 383.",
        "vs_peers": "Worse than peers: 339 vs peers 764."
      },
      "amihud": {
        "insight": "Price impact is 4.54e-09, better than market and peers, which suggests trades move price less than comparable names.",
        "vs_market": "Better than market: 4.54e-09 vs market 1.63e-07.",
        "vs_sector": "In line with sector: 4.54e-09 vs sector 4.85e-09.",
        "vs_peers": "Better than peers: 4.54e-09 vs peers 5.16e-09."
      }
    },
    "performance": {
      "overall": "Performance is strong relative to comparison groups. Recent price performance is weaker than peers and the market, so the tape is not being cushioned by stronger momentum. Recent trend context is too limited to say whether access has changed from the 1M baseline.",
      "conclusion": "The move looks mixed and mainly sector-linked, with liquidity conditions offering only partial confirmation."
    },
    "drivers": {
      "overall": "Sector moves are leading the stock now, with 47.6% of current price action tied to the sector. That matters because day-to-day trading is being shaped more by the broader group than by company-specific developments.",
      "beta": "Current trading conditions look mixed because the spread is only 1 tick, but displayed bid depth is just 0.61x of ask depth. That means quoted costs look contained while immediate buy-side support is thinner.",
      "rolling_change": "The monthly pattern had been mostly sector from March through May, so the current sector-led read marks a shift from the recent backdrop. That matters because the stock is now moving with the group more than it did through most of the last three months."
    },
    "regime": {
      "overall": "The backdrop is orderly today, but it looks changeable rather than durable. A calm, liquid state supports steadier trading in the moment, yet its short typical duration means conditions can shift quickly.",
      "current": "Current market state is Calm / Liquid. Current-state posterior is >99.9% on a filtered basis. The market has been in this state about 34.7% of the time. Jump risk is 10% on the current read. Based on 251 trading days relative to the 252-day target.",
      "transitions": "This looks like a short-lived state, not a sticky regime: the typical run length is about 2.0 days.",
      "trading_implications": "Trading conditions look steady at the moment, but they are not deeply anchored. That matters because day-to-day access can change quickly even while the market still appears calm."
    },
    "execution": {
      "overall": "Displayed liquidity looks orderly but not evenly supported because the spread is 1 tick while bid depth is only 0.61x of ask depth. That matters because the screen appears tradable at the top level, yet immediate buy-side support is thinner than the sell side.",
      "concern": "Trade-size percentiles use May 21, 2025 to May 21, 2026 history (255 trading days • 101,957 trades).",
      "peer_context": "This book does not contradict the broader picture, but it does lean a little weaker than the 6M liquidity score of 84.9 relative to the peer median of 86.7. The trade-size history spans 255 trading days and 101,957 trades, which gives useful context, but the live book still points to slightly thinner near-term visible support than the medium-term profile implies."
    },
    "trader_composition": {
      "overall": "Flow looks mixed on both trade count and trade value, so the trading base does not read as clearly one-sided.",
      "retail_heavy": "The split is mixed rather than retail-led: retail-like trades make up 37.6% of count but only 2.8% of value, while institution-like trades are 21.4% of count and 54.3% of value. That matters because smaller tickets are numerous, but larger value still comes from institution-like flow.",
      "institutional_gap": "Institution-like activity is lower by count than retail-like activity, but it carries most of the trade value at 54.3%. That leaves the flow looking supported by larger tickets without being broad-based on count.",
      "peer_comparison": "The mix stands out more by the gap between count and value than by a clear retail or institutional skew, which makes the peer read more balanced than one-directional."
    },
    "price_moving": {
      "overall": "Price-moving activity is present, but the broader read stays mixed because trade count and trade value point in different directions. Retail-like trades lead on count at 37.6%, while institution-like trades lead on value at 54.3%. That matters because price formation is likely being shaped by larger tickets even though day-to-day activity is more widely distributed. The signal is mixed rather than cleanly one-way, as the count leader and the value leader are different groups.",
      "interpretation": "",
      "asymmetry": ""
    },
    "short_selling": {
      "overall": "Short activity appears material enough to watch, but it is not the main feature of the trading picture. The 1M average short ratio is 5.08%, and the stock has held roughly flat over 1M while peers fell 5.1%, which suggests short pressure is present without dominating trading conditions.",
      "level": "Moderate short interest",
      "correlation": "Moderate negative - shorts somewhat predict drops",
      "trend": "Short positioning is rising sharply, up 39% month on month and 122% year on year. That makes the short backdrop more relevant now, even though the broader picture still looks mixed rather than driven by a single short-led move.",
      "peaks": "5 notable peak days identified."
    },
    "intraday": {
      "overall": "Session split is open 3.9%, continuous 86.6%, and close 8.3%. Current trading concentration score is 0.232.",
      "hhi_interpretation": "A concentration score of 0.232 suggests trading is reasonably spread through the day rather than packed into a few short windows. That supports a steadier flow profile.",
      "best_times": "The continuous session is the clearest source of liquidity because it carries the large majority of activity. That matters more than the open or close for day-to-day access.",
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
        1101064.0
      ],
      "total": 556
    },
    "market_comparison": {
      "sector_name": "REIT - Retail",
      "sector_count": 8,
      "market_count": 556,
      "company": {
        "volatility": 0.14093541525191952,
        "adv": 557574.0,
        "spread_pct": 0.007489949773338531,
        "turnover_ratio": 0.0018357513883585043,
        "amihud": 4.541135179291274e-09,
        "trades": 339.0
      },
      "market": {
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.6858252743600405,
          "median": 0.4638054325278048,
          "min": 0.0,
          "max": 6.985699678629191,
          "p5": 0.1526078992561295,
          "p95": 1.8914393249301802,
          "count": 556
        },
        "adv": {
          "direction": "higher_is_better",
          "mean": 2741796.680938243,
          "median": 12298.2,
          "min": 0.0,
          "max": 256049087.60000002,
          "p5": 0.0,
          "p95": 11304355.5,
          "count": 556
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.09516519042840216,
          "median": 0.029083885793233743,
          "min": 0.00027417717172845547,
          "max": 1.267605633802817,
          "p5": 0.0036563543655066155,
          "p95": 0.4643085756592909,
          "count": 555
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.003836653330069,
          "median": 0.0002784742463960508,
          "min": 0.0,
          "max": 1.1156153187001516,
          "p5": 0.0,
          "p95": 0.008020635922690814,
          "count": 549
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 1.0094418472483376e-05,
          "median": 1.6273937017317353e-07,
          "min": 0.0,
          "max": 0.0005977932482434035,
          "p5": 0.0,
          "p95": 3.433937754067513e-05,
          "count": 555
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 403.6456834532374,
          "median": 7.0,
          "min": 0.0,
          "max": 10264.5,
          "p5": 0.0,
          "p95": 2333.625,
          "count": 556
        }
      },
      "sector": {
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.35888674990551833,
          "median": 0.16350255156259544,
          "min": 0.11702288468276809,
          "max": 1.3951560301994739,
          "p5": 0.1253922703819711,
          "p95": 1.1026106838264915,
          "count": 8
        },
        "adv": {
          "direction": "higher_is_better",
          "mean": 8846821.119315742,
          "median": 631616.375,
          "min": 0.0,
          "max": 57868054.5,
          "p5": 13601.42,
          "p95": 41257423.74999997,
          "count": 8
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.03589536139099854,
          "median": 0.008156097290058482,
          "min": 0.004274986168547341,
          "max": 0.13333333333333333,
          "p5": 0.004344991259624652,
          "p95": 0.12579667946059614,
          "count": 8
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.002342490205835843,
          "median": 0.0013260108889664689,
          "min": 0.0,
          "max": 0.006907218692928089,
          "p5": 8.386602361773384e-05,
          "p95": 0.006657644109312026,
          "count": 8
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 7.970557397712663e-07,
          "median": 4.85290070251137e-09,
          "min": 0.0,
          "max": 6.330000391958183e-06,
          "p5": 3.3048834462562446e-11,
          "p95": 4.1252378606593224e-06,
          "count": 8
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 1131.75,
          "median": 383.25,
          "min": 0.0,
          "max": 5579.0,
          "p5": 8.575000000000001,
          "p95": 4286.274999999998,
          "count": 8
        }
      },
      "peers": {
        "adv": {
          "direction": "higher_is_better",
          "mean": 1101064.0,
          "median": 1101064.0,
          "min": 1101064.0,
          "max": 1101064.0,
          "p5": 1101064.0,
          "p95": 1101064.0,
          "count": 1
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 764.5,
          "median": 764.5,
          "min": 764.5,
          "max": 764.5,
          "p5": 764.5,
          "p95": 764.5,
          "count": 1
        },
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.1616955595443022,
          "median": 0.1616955595443022,
          "min": 0.1616955595443022,
          "max": 0.1616955595443022,
          "p5": 0.1616955595443022,
          "p95": 0.1616955595443022,
          "count": 1
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.0070313511065131975,
          "median": 0.0070313511065131975,
          "min": 0.0070313511065131975,
          "max": 0.0070313511065131975,
          "p5": 0.0070313511065131975,
          "p95": 0.0070313511065131975,
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
          "mean": 0.0012073123793006789,
          "median": 0.0012073123793006789,
          "min": 0.0012073123793006789,
          "max": 0.0012073123793006789,
          "p5": 0.0012073123793006789,
          "p95": 0.0012073123793006789,
          "count": 1
        }
      }
    },
    "returns": [
      {
        "horizon": "1M",
        "stock": -2.220446049250313e-16,
        "market": 0.00613165413872041,
        "sector": -0.00579582843242088,
        "peers": -0.050724637681159535
      },
      {
        "horizon": "3M",
        "stock": -0.036231884057971286,
        "market": 0.008827226270709199,
        "sector": -0.017405175048137878,
        "peers": -0.09027777777777757
      },
      {
        "horizon": "6M",
        "stock": -0.014814814814816057,
        "market": 0.12010647804296903,
        "sector": -0.010492029288836635,
        "peers": -0.1656050955414009
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
      "share_market": 0.38103412279721743,
      "share_sector": 0.4762389750081972,
      "share_idio": 0.1427269021945854,
      "beta_market": -0.7696992476381694,
      "beta_sector": 1.857296235106361,
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
        "current_regime_probability": 0.9999999999997009,
        "current_regime_probability_display": ">99.9%",
        "current_probability_basis": "filtered",
        "historical_probability_basis": "smoothed",
        "current_driver_mix": {
          "market_share": {
            "median": 0.38103412279721743,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "38.1%",
            "display_range": null,
            "display_text": "38.1%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "share_pct",
            "value_pct": 38.1,
            "plain_english": "Market explains about 38.1% of price moves in the current state."
          },
          "sector_share": {
            "median": 0.4762389750081972,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "47.6%",
            "display_range": null,
            "display_text": "47.6%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "share_pct",
            "value_pct": 47.6,
            "plain_english": "Sector explains about 47.6% of price moves in the current state."
          },
          "company_share": {
            "median": 0.1427269021945854,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "14.3%",
            "display_range": null,
            "display_text": "14.3%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "share_pct",
            "value_pct": 14.3,
            "plain_english": "Company-specific explains about 14.3% of price moves in the current state."
          },
          "basis": "current_state"
        },
        "current_sensitivities": {
          "beta_market": {
            "median": -0.7696992476381694,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "-0.77",
            "display_range": null,
            "display_text": "-0.77",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "beta",
            "strength_label": "Modest",
            "plain_english": "Modest market link: a 1% market move has lined up with about a 0.77% stock move in the opposite direction in this state.",
            "value_num": -0.77
          },
          "beta_stock_lag": {
            "median": 0.7759418149447265,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "0.78",
            "display_range": null,
            "display_text": "0.78",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "lag_beta",
            "value_num": 0.78
          },
          "beta_sector": {
            "median": 1.857296235106361,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "1.86",
            "display_range": null,
            "display_text": "1.86",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "beta",
            "strength_label": "High",
            "plain_english": "High sector link: a 1% sector move has lined up with about a 1.86% stock move in the same direction in this state.",
            "value_num": 1.86
          },
          "beta_market_lag": {
            "median": 1.1215868661309059,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "1.12",
            "display_range": null,
            "display_text": "1.12",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "lag_beta",
            "value_num": 1.12
          },
          "beta_sector_lag": {
            "median": -0.39014464603314547,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "-0.39",
            "display_range": null,
            "display_text": "-0.39",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "lag_beta",
            "value_num": -0.39
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
            "period_label": "2025-05-27 to 2025-05-30",
            "n_obs": 4,
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
              "point_estimate_note": "Point estimate only because the current state has 4 trading days.",
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
                "point_estimate_note": "Point estimate only because the current state has 4 trading days.",
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
                "point_estimate_note": "Point estimate only because the current state has 4 trading days.",
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
                "point_estimate_note": "Point estimate only because the current state has 4 trading days.",
                "kind": "share_pct",
                "value_pct": 33.3,
                "plain_english": "Company-specific explains about 33.3% of price moves in the current state."
              }
            },
            "summary": "May: Much more balanced across company, sector, and market factors, though based on only 4 trading days."
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
            "period_label": "2026-05-04 to 2026-05-21",
            "n_obs": 14,
            "partial_month": true,
            "dominant_driver": "company",
            "dominant_driver_label": "Company-specific",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.8344240810184645,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "83.4%",
              "display_range": null,
              "display_text": "83.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 14 trading days.",
              "kind": "share_pct",
              "value_pct": 83.4,
              "plain_english": "Company-specific explains about 83.4% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.12235484086232787,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "12.2%",
                "display_range": null,
                "display_text": "12.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 14 trading days.",
                "kind": "share_pct",
                "value_pct": 12.2,
                "plain_english": "Market explains about 12.2% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.043221078119207584,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "4.3%",
                "display_range": null,
                "display_text": "4.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 14 trading days.",
                "kind": "share_pct",
                "value_pct": 4.3,
                "plain_english": "Sector explains about 4.3% of price moves in the current state."
              },
              "company_share": {
                "median": 0.8344240810184645,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "83.4%",
                "display_range": null,
                "display_text": "83.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 14 trading days.",
                "kind": "share_pct",
                "value_pct": 83.4,
                "plain_english": "Company-specific explains about 83.4% of price moves in the current state."
              }
            },
            "summary": "May: Still clearly company-driven."
          }
        ],
        "regimes": [
          {
            "id": 0,
            "label": "Calm / Liquid",
            "pct_time": 0.34661346366515344,
            "expected_duration_days": 1.956392965164002,
            "current_probability": 0.9999999999997009,
            "current_probability_display": ">99.9%",
            "current_probability_basis": "filtered",
            "n_days_effective": 86.99997937995352,
            "volatility": {
              "median": 3.760407551126035e-128,
              "low": 3.760407551126035e-128,
              "high": 3.760407551126035e-128
            },
            "volatility_label": "Calm / Liquid",
            "jump_probability": 0.09921018294271024,
            "jump_rate": 0.0,
            "risk_score": 0.025922178868785284,
            "metrics": {
              "rolling_vol_10d": 0.0064322578701173656,
              "downside_vol_10d": 0.003506461513673041,
              "drawdown_21d": 0.009391078721796895,
              "amihud_stress": 4.463857191642069e-252,
              "spread_rel": 75.90175909168963,
              "spread_ticks": 1.016980113397352,
              "log_notional": 13.083836257380725,
              "log_trade_count": 5.7157377074017885
            }
          },
          {
            "id": 1,
            "label": "Normal / Active",
            "pct_time": 0.3405638364036012,
            "expected_duration_days": 1.7624402164182982,
            "current_probability": 1.9770682232451646e-220,
            "current_probability_display": "<0.1%",
            "current_probability_basis": "filtered",
            "n_days_effective": 85.48152293730391,
            "volatility": {
              "median": 0.0074214228220380206,
              "low": 0.0074214228220380206,
              "high": 0.0074214228220380206
            },
            "volatility_label": "Normal / Active",
            "jump_probability": 0.22212540127098546,
            "jump_rate": 1.2356576480551587e-175,
            "risk_score": 0.1584640740183001,
            "metrics": {
              "rolling_vol_10d": 0.0066964742621203445,
              "downside_vol_10d": 0.0036657588653414164,
              "drawdown_21d": 0.009939202126942392,
              "amihud_stress": 0.8972791118034221,
              "spread_rel": 74.55458727750292,
              "spread_ticks": 1.003964380849212,
              "log_notional": 13.243161347500724,
              "log_trade_count": 5.838122723460628
            }
          },
          {
            "id": 2,
            "label": "Stressed / Illiquid",
            "pct_time": 0.1454920226404086,
            "expected_duration_days": 1.4582040946846186,
            "current_probability": 2.9903203427487626e-13,
            "current_probability_display": "<0.1%",
            "current_probability_basis": "filtered",
            "n_days_effective": 36.51849768274256,
            "volatility": {
              "median": 0.012289213196596338,
              "low": 0.012289213196596338,
              "high": 0.012289213196596338
            },
            "volatility_label": "Stressed / Illiquid",
            "jump_probability": 0.32063245169987425,
            "jump_rate": 0.10953353105459868,
            "risk_score": 0.5260149641540609,
            "metrics": {
              "rolling_vol_10d": 0.008473126055304547,
              "downside_vol_10d": 0.004517821611127004,
              "drawdown_21d": 0.007668630774509453,
              "amihud_stress": 0.9353988699777543,
              "spread_rel": 77.89787443641282,
              "spread_ticks": 1.053591781717478,
              "log_notional": 13.654840680497284,
              "log_trade_count": 5.792765446986488
            }
          },
          {
            "id": 3,
            "label": "Jump / Tail Shock",
            "pct_time": 0.16733067729083675,
            "expected_duration_days": 20.75862068965487,
            "current_probability": 1.580365149485426e-28,
            "current_probability_display": "<0.1%",
            "current_probability_basis": "filtered",
            "n_days_effective": 42.00000000000003,
            "volatility": {
              "median": 0.014842549552227606,
              "low": 0.014842549552227606,
              "high": 0.014842549552227606
            },
            "volatility_label": "Jump / Tail Shock",
            "jump_probability": 0.1929499369187614,
            "jump_rate": 0.04761904761904824,
            "risk_score": 0.7728623517798318,
            "metrics": {
              "rolling_vol_10d": 0.013703232789931411,
              "downside_vol_10d": 0.010789110461193378,
              "drawdown_21d": 0.051473472696927126,
              "amihud_stress": 0.45792090949976283,
              "spread_rel": 76.65742404215183,
              "spread_ticks": 1.0154334671594105,
              "log_notional": 13.65584267177092,
              "log_trade_count": 6.1565920914484265
            }
          }
        ],
        "transitions": {
          "mean": [
            [
              0.48885524646314027,
              0.4057305651398543,
              0.10529809828326633,
              0.00011609011373890543
            ],
            [
              0.36834674268721657,
              0.4326048675669464,
              0.18757686631999404,
              0.011471523425842919
            ],
            [
              0.34048417543634485,
              0.31698200115212843,
              0.3142249403597508,
              0.028308883051775886
            ],
            [
              0.00023730422401519076,
              0.04769757392870634,
              0.00023787932236214818,
              0.9518272425249162
            ]
          ],
          "low": [],
          "high": [],
          "counts": [
            [
              42.0,
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
              12.0,
              12.0,
              11.0,
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
            "probability": 0.9999999999997009,
            "probability_display": ">99.9%",
            "basis": "filtered"
          },
          {
            "id": 1,
            "label": "Normal / Active",
            "probability": 1.9770682232451646e-220,
            "probability_display": "<0.1%",
            "basis": "filtered"
          },
          {
            "id": 2,
            "label": "Stressed / Illiquid",
            "probability": 2.9903203427487626e-13,
            "probability_display": "<0.1%",
            "basis": "filtered"
          },
          {
            "id": 3,
            "label": "Jump / Tail Shock",
            "probability": 1.580365149485426e-28,
            "probability_display": "<0.1%",
            "basis": "filtered"
          }
        ],
        "jump_risk": {
          "current_probability": 0.09921018294277645,
          "current_score": 0.1658603747650893,
          "current_flag": false,
          "jump_threshold_score": 2.5,
          "method": "robust_residual_and_return_jump_overlay",
          "model_definition": "jump_score_feature_overlay"
        },
        "model_selection": {
          "chosen": 4,
          "criterion": "bic_with_min_state_support",
          "bic": 11081.234737995714,
          "loglik": -5012.9366133107715,
          "n_params": 191,
          "bic_delta_vs_next_best": 521.1921985762583,
          "candidates": [
            {
              "k": 2,
              "valid": true,
              "reason": "ok",
              "bic": 13455.493566611087,
              "loglik": -6476.338674575048,
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
                  "bic": 13455.493566611087,
                  "loglik": -6476.338674575048,
                  "n_params": 91,
                  "converged": true,
                  "iterations": 9
                },
                {
                  "seed": 1337,
                  "k": 2,
                  "valid": true,
                  "reason": "ok",
                  "bic": 13455.493566611087,
                  "loglik": -6476.338674575048,
                  "n_params": 91,
                  "converged": true,
                  "iterations": 9
                },
                {
                  "seed": 2027,
                  "k": 2,
                  "valid": true,
                  "reason": "ok",
                  "bic": 13455.493566611087,
                  "loglik": -6476.338674575048,
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
              "bic": 11602.426936571972,
              "loglik": -5414.431762546761,
              "n_params": 140,
              "converged": true,
              "iterations": 20,
              "best_seed": 1337,
              "seed_runs": [
                {
                  "seed": 42,
                  "k": 3,
                  "valid": true,
                  "reason": "ok",
                  "bic": 11602.426936692145,
                  "loglik": -5414.431762606848,
                  "n_params": 140,
                  "converged": true,
                  "iterations": 20
                },
                {
                  "seed": 1337,
                  "k": 3,
                  "valid": true,
                  "reason": "ok",
                  "bic": 11602.426936571972,
                  "loglik": -5414.431762546761,
                  "n_params": 140,
                  "converged": true,
                  "iterations": 20
                },
                {
                  "seed": 2027,
                  "k": 3,
                  "valid": true,
                  "reason": "ok",
                  "bic": 11602.42693661674,
                  "loglik": -5414.431762569145,
                  "n_params": 140,
                  "converged": true,
                  "iterations": 18
                }
              ]
            },
            {
              "k": 4,
              "valid": true,
              "reason": "ok",
              "bic": 11081.234737995714,
              "loglik": -5012.9366133107715,
              "n_params": 191,
              "converged": true,
              "iterations": 24,
              "best_seed": 1337,
              "seed_runs": [
                {
                  "seed": 42,
                  "k": 4,
                  "valid": true,
                  "reason": "ok",
                  "bic": 11081.234781549663,
                  "loglik": -5012.936635087746,
                  "n_params": 191,
                  "converged": true,
                  "iterations": 21
                },
                {
                  "seed": 1337,
                  "k": 4,
                  "valid": true,
                  "reason": "ok",
                  "bic": 11081.234737995714,
                  "loglik": -5012.9366133107715,
                  "n_params": 191,
                  "converged": true,
                  "iterations": 24
                },
                {
                  "seed": 2027,
                  "k": 4,
                  "valid": true,
                  "reason": "ok",
                  "bic": 11081.23475031028,
                  "loglik": -5012.936619468054,
                  "n_params": 191,
                  "converged": true,
                  "iterations": 21
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
                "bic": 11081.234781549663,
                "valid": true,
                "reason": null
              },
              {
                "seed": 1337,
                "selected_states": 4,
                "bic": 11081.234737995714,
                "valid": true,
                "reason": null
              },
              {
                "seed": 2027,
                "selected_states": 4,
                "bic": 11081.23475031028,
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
                  "2": 6480.650188114798,
                  "3": 5542.629261252666,
                  "4": 6100.748634946438
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
                  "2": 10310.701403474886,
                  "3": 9954.535302249327,
                  "4": 8793.9381434072
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
                  "2": 13455.493566611087,
                  "3": 11602.426936692145,
                  "4": 11081.234879829997
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
          "bic_delta_vs_next_best": 521.1921985762583,
          "state_count_interpretation": "251 observations allowed the current rule to test up to 4 states; BIC preferred 4 with a 521.19 improvement versus the next best valid state count.",
          "parameter_count": {
            "formula": "k^2 - 1 + 2*k*d",
            "n_parameters": 191,
            "observations_per_parameter": 1.3141361256544504,
            "parameter_pressure_label": "parameter_heavy"
          },
          "state_occupancy": {
            "min_effective_days_required": 7.529999999999999,
            "min_effective_days_observed": 36.51849768274256,
            "passes": true,
            "states": [
              {
                "id": 0,
                "label": "Calm / Liquid",
                "effective_days": 86.99997937995352,
                "pct_time": 0.34661346366515344,
                "passes_min_support": true
              },
              {
                "id": 1,
                "label": "Normal / Active",
                "effective_days": 85.48152293730391,
                "pct_time": 0.3405638364036012,
                "passes_min_support": true
              },
              {
                "id": 2,
                "label": "Stressed / Illiquid",
                "effective_days": 36.51849768274256,
                "pct_time": 0.1454920226404086,
                "passes_min_support": true
              },
              {
                "id": 3,
                "label": "Jump / Tail Shock",
                "effective_days": 42.00000000000003,
                "pct_time": 0.16733067729083675,
                "passes_min_support": true
              }
            ]
          },
          "transition_diagnostics": {
            "self_transition_probabilities": [
              0.48885524646314027,
              0.4326048675669464,
              0.3142249403597508,
              0.9518272425249162
            ],
            "expected_duration_days": [
              1.956392965164002,
              1.7624402164182982,
              1.4582040946846186,
              20.75862068965487
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
                "bic": 11081.234781549663,
                "valid": true,
                "reason": null
              },
              {
                "seed": 1337,
                "selected_states": 4,
                "bic": 11081.234737995714,
                "valid": true,
                "reason": null
              },
              {
                "seed": 2027,
                "selected_states": 4,
                "bic": 11081.23475031028,
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
                  "2": 6480.650188114798,
                  "3": 5542.629261252666,
                  "4": 6100.748634946438
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
                  "2": 10310.701403474886,
                  "3": 9954.535302249327,
                  "4": 8793.9381434072
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
                  "2": 13455.493566611087,
                  "3": 11602.426936692145,
                  "4": 11081.234879829997
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
              "risk_score": 0.025922178868785284,
              "jump_probability": 0.09921018294271024,
              "jump_rate": 0.0,
              "rolling_vol_10d": 0.0064322578701173656,
              "downside_vol_10d": 0.003506461513673041,
              "drawdown_21d": 0.009391078721796895,
              "amihud_stress": 4.463857191642069e-252,
              "spread_rel": 75.90175909168963,
              "spread_ticks": 1.016980113397352,
              "log_notional": 13.083836257380725,
              "log_trade_count": 5.7157377074017885
            },
            {
              "id": 1,
              "label": "Normal / Active",
              "risk_score": 0.1584640740183001,
              "jump_probability": 0.22212540127098546,
              "jump_rate": 1.2356576480551587e-175,
              "rolling_vol_10d": 0.0066964742621203445,
              "downside_vol_10d": 0.0036657588653414164,
              "drawdown_21d": 0.009939202126942392,
              "amihud_stress": 0.8972791118034221,
              "spread_rel": 74.55458727750292,
              "spread_ticks": 1.003964380849212,
              "log_notional": 13.243161347500724,
              "log_trade_count": 5.838122723460628
            },
            {
              "id": 2,
              "label": "Stressed / Illiquid",
              "risk_score": 0.5260149641540609,
              "jump_probability": 0.32063245169987425,
              "jump_rate": 0.10953353105459868,
              "rolling_vol_10d": 0.008473126055304547,
              "downside_vol_10d": 0.004517821611127004,
              "drawdown_21d": 0.007668630774509453,
              "amihud_stress": 0.9353988699777543,
              "spread_rel": 77.89787443641282,
              "spread_ticks": 1.053591781717478,
              "log_notional": 13.654840680497284,
              "log_trade_count": 5.792765446986488
            },
            {
              "id": 3,
              "label": "Jump / Tail Shock",
              "risk_score": 0.7728623517798318,
              "jump_probability": 0.1929499369187614,
              "jump_rate": 0.04761904761904824,
              "rolling_vol_10d": 0.013703232789931411,
              "downside_vol_10d": 0.010789110461193378,
              "drawdown_21d": 0.051473472696927126,
              "amihud_stress": 0.45792090949976283,
              "spread_rel": 76.65742404215183,
              "spread_ticks": 1.0154334671594105,
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
            "trade_date": "2026-05-08",
            "state": 1,
            "probabilities": [
              0.0,
              0.9999957938821761,
              4.206117823964226e-06,
              3.3447062172875473e-25
            ],
            "probability_basis": "smoothed",
            "filtered_probabilities": [
              0.0,
              0.9999942636445922,
              5.736355407826107e-06,
              3.035178882993786e-24
            ],
            "jump_probability": 0.16898067662151872,
            "jump_score": 0.8648968009739479
          },
          {
            "trade_date": "2026-05-11",
            "state": 1,
            "probabilities": [
              0.0,
              0.9994600349836391,
              0.0005399650163608948,
              7.28785340275772e-23
            ],
            "probability_basis": "smoothed",
            "filtered_probabilities": [
              0.0,
              0.9992632235700907,
              0.0007367764299093194,
              6.6086098007327195e-22
            ],
            "jump_probability": 0.15566805077212556,
            "jump_score": 0.7797218594667336
          },
          {
            "trade_date": "2026-05-12",
            "state": 1,
            "probabilities": [
              0.0,
              0.9999979048375681,
              2.0951624318305794e-06,
              8.076658099975784e-26
            ],
            "probability_basis": "smoothed",
            "filtered_probabilities": [
              0.0,
              0.9999971406408695,
              2.8593591303955037e-06,
              7.325388710822155e-25
            ],
            "jump_probability": 0.14041641997052168,
            "jump_score": 0.6744907594765952
          },
          {
            "trade_date": "2026-05-13",
            "state": 1,
            "probabilities": [
              0.0,
              0.9999902258511911,
              9.774148808844724e-06,
              9.877370380794808e-27
            ],
            "probability_basis": "smoothed",
            "filtered_probabilities": [
              0.0,
              0.9999866607897228,
              1.3339210277210988e-05,
              8.958556505701809e-26
            ],
            "jump_probability": 0.14112182523823602,
            "jump_score": 0.6795621185704072
          },
          {
            "trade_date": "2026-05-14",
            "state": 1,
            "probabilities": [
              0.0,
              0.9999926984436927,
              7.301556307373857e-06,
              2.088083470021975e-25
            ],
            "probability_basis": "smoothed",
            "filtered_probabilities": [
              0.0,
              0.9999900352466076,
              9.964753392415226e-06,
              1.893848737644352e-24
            ],
            "jump_probability": 0.14041641997052026,
            "jump_score": 0.6744907594765851
          },
          {
            "trade_date": "2026-05-15",
            "state": 1,
            "probabilities": [
              0.0,
              0.9999918980093494,
              8.101990650677799e-06,
              2.4192788813728022e-27
            ],
            "probability_basis": "smoothed",
            "filtered_probabilities": [
              0.0,
              0.9999951634934572,
              4.836506542780559e-06,
              1.9076993691885026e-24
            ],
            "jump_probability": 0.139724352328269,
            "jump_score": 0.6694945316286194
          },
          {
            "trade_date": "2026-05-18",
            "state": 2,
            "probabilities": [
              0.0,
              4.1816359738967554e-32,
              1.0,
              1.0222830642596353e-25
            ],
            "probability_basis": "smoothed",
            "filtered_probabilities": [
              0.0,
              3.865327747399939e-32,
              1.0,
              1.4667720612045038e-22
            ],
            "jump_probability": 0.16986376085161145,
            "jump_score": 0.8703538070644602
          },
          {
            "trade_date": "2026-05-19",
            "state": 0,
            "probabilities": [
              0.9999999864812714,
              3.051693865689017e-217,
              1.3518728544724706e-08,
              8.346521105628041e-29
            ],
            "probability_basis": "smoothed",
            "filtered_probabilities": [
              0.9999999805902835,
              4.050087526496174e-217,
              1.94097165498294e-08,
              1.719413392063893e-25
            ],
            "jump_probability": 0.14356923894772425,
            "jump_score": 0.6969947348839889
          },
          {
            "trade_date": "2026-05-20",
            "state": 0,
            "probabilities": [
              0.9999999999654561,
              3.280140201973462e-218,
              3.4543957635731573e-11,
              1.194319721659254e-31
            ],
            "probability_basis": "smoothed",
            "filtered_probabilities": [
              0.999999999950403,
              4.353272503907935e-218,
              4.959700374302257e-11,
              2.4603416323533027e-28
            ],
            "jump_probability": 0.1172072574733759,
            "jump_score": 0.49422030059338073
          },
          {
            "trade_date": "2026-05-21",
            "state": 0,
            "probabilities": [
              0.9999999999997009,
              1.9770682232451646e-220,
              2.9903203427487626e-13,
              1.580365149485426e-28
            ],
            "probability_basis": "smoothed",
            "filtered_probabilities": [
              0.9999999999997009,
              1.9770682232451646e-220,
              2.9903203427487626e-13,
              1.580365149485426e-28
            ],
            "jump_probability": 0.08342005308537778,
            "jump_score": 0.1658603747650893
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
          "market_link_display": "-0.77",
          "sector_link_display": "1.86",
          "market_link_explainer": "Modest market link. A 1% market move has lined up with about a 0.77% stock move in the opposite direction in this state. This is a point estimate from 251 trading days.",
          "sector_link_explainer": "High sector link. A 1% sector move has lined up with about a 1.86% stock move in the same direction in this state. This is a point estimate from 251 trading days.",
          "stock_persistence_display": "0.78",
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "history_limited_note": "Read is based on 251 trading days versus the 252-day target."
        },
        "current_summary": {
          "regime_label": "Calm / Liquid",
          "dominant_driver": "sector",
          "dominant_driver_label": "Sector",
          "driver_share_pct": 47.6,
          "driver_share_display": "47.6%",
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
          "jump_risk_score": 0.17,
          "jump_risk_note": "Jump risk is contained based on recent residual and return shocks.",
          "lead_signal_text": "No stable lead signal.",
          "state_term": "state",
          "stay_probability": 0.48885524646314027,
          "effective_days": 87.0,
          "persistence_note": "This looks like a short-lived state, not a sticky regime: the typical run length is about 2.0 days.",
          "expected_duration_days": 2.0
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
          "period_label": "2025-05-27 to 2025-05-30",
          "n_obs": 4,
          "partial_month": true,
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "regime_label": null,
          "summary": "May: Much more balanced across company, sector, and market factors, though based on only 4 trading days.",
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
          "period_label": "2026-05-04 to 2026-05-21",
          "n_obs": 14,
          "partial_month": true,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_label": null,
          "summary": "May: Still clearly company-driven.",
          "share_market": 0.12235484086232787,
          "share_sector": 0.043221078119207584,
          "share_company": 0.8344240810184645,
          "share_market_display": "12.2%",
          "share_sector_display": "4.3%",
          "share_company_display": "83.4%",
          "dominant_share_display": "83.4%"
        }
      ],
      "regime": {
        "valid": true,
        "regime_method": "hmm_jump_aware",
        "n_regimes": 4,
        "current_regime_label": "Calm / Liquid",
        "current_regime_probability": 0.9999999999997009,
        "labels": [
          "Calm / Liquid",
          "Normal / Active",
          "Stressed / Illiquid",
          "Jump / Tail Shock"
        ],
        "pct_time": [
          0.34661346366515344,
          0.3405638364036012,
          0.1454920226404086,
          0.16733067729083675
        ],
        "current_regime": 0,
        "regimes": [
          {
            "id": 0,
            "label": "Calm / Liquid",
            "pct_time": 0.34661346366515344,
            "expected_duration_days": 1.956392965164002,
            "current_probability": 0.9999999999997009,
            "current_probability_display": ">99.9%",
            "current_probability_basis": "filtered",
            "n_days_effective": 86.99997937995352,
            "volatility": {
              "median": 3.760407551126035e-128,
              "low": 3.760407551126035e-128,
              "high": 3.760407551126035e-128
            },
            "volatility_label": "Calm / Liquid",
            "jump_probability": 0.09921018294271024,
            "jump_rate": 0.0,
            "risk_score": 0.025922178868785284,
            "metrics": {
              "rolling_vol_10d": 0.0064322578701173656,
              "downside_vol_10d": 0.003506461513673041,
              "drawdown_21d": 0.009391078721796895,
              "amihud_stress": 4.463857191642069e-252,
              "spread_rel": 75.90175909168963,
              "spread_ticks": 1.016980113397352,
              "log_notional": 13.083836257380725,
              "log_trade_count": 5.7157377074017885
            }
          },
          {
            "id": 1,
            "label": "Normal / Active",
            "pct_time": 0.3405638364036012,
            "expected_duration_days": 1.7624402164182982,
            "current_probability": 1.9770682232451646e-220,
            "current_probability_display": "<0.1%",
            "current_probability_basis": "filtered",
            "n_days_effective": 85.48152293730391,
            "volatility": {
              "median": 0.0074214228220380206,
              "low": 0.0074214228220380206,
              "high": 0.0074214228220380206
            },
            "volatility_label": "Normal / Active",
            "jump_probability": 0.22212540127098546,
            "jump_rate": 1.2356576480551587e-175,
            "risk_score": 0.1584640740183001,
            "metrics": {
              "rolling_vol_10d": 0.0066964742621203445,
              "downside_vol_10d": 0.0036657588653414164,
              "drawdown_21d": 0.009939202126942392,
              "amihud_stress": 0.8972791118034221,
              "spread_rel": 74.55458727750292,
              "spread_ticks": 1.003964380849212,
              "log_notional": 13.243161347500724,
              "log_trade_count": 5.838122723460628
            }
          },
          {
            "id": 2,
            "label": "Stressed / Illiquid",
            "pct_time": 0.1454920226404086,
            "expected_duration_days": 1.4582040946846186,
            "current_probability": 2.9903203427487626e-13,
            "current_probability_display": "<0.1%",
            "current_probability_basis": "filtered",
            "n_days_effective": 36.51849768274256,
            "volatility": {
              "median": 0.012289213196596338,
              "low": 0.012289213196596338,
              "high": 0.012289213196596338
            },
            "volatility_label": "Stressed / Illiquid",
            "jump_probability": 0.32063245169987425,
            "jump_rate": 0.10953353105459868,
            "risk_score": 0.5260149641540609,
            "metrics": {
              "rolling_vol_10d": 0.008473126055304547,
              "downside_vol_10d": 0.004517821611127004,
              "drawdown_21d": 0.007668630774509453,
              "amihud_stress": 0.9353988699777543,
              "spread_rel": 77.89787443641282,
              "spread_ticks": 1.053591781717478,
              "log_notional": 13.654840680497284,
              "log_trade_count": 5.792765446986488
            }
          },
          {
            "id": 3,
            "label": "Jump / Tail Shock",
            "pct_time": 0.16733067729083675,
            "expected_duration_days": 20.75862068965487,
            "current_probability": 1.580365149485426e-28,
            "current_probability_display": "<0.1%",
            "current_probability_basis": "filtered",
            "n_days_effective": 42.00000000000003,
            "volatility": {
              "median": 0.014842549552227606,
              "low": 0.014842549552227606,
              "high": 0.014842549552227606
            },
            "volatility_label": "Jump / Tail Shock",
            "jump_probability": 0.1929499369187614,
            "jump_rate": 0.04761904761904824,
            "risk_score": 0.7728623517798318,
            "metrics": {
              "rolling_vol_10d": 0.013703232789931411,
              "downside_vol_10d": 0.010789110461193378,
              "drawdown_21d": 0.051473472696927126,
              "amihud_stress": 0.45792090949976283,
              "spread_rel": 76.65742404215183,
              "spread_ticks": 1.0154334671594105,
              "log_notional": 13.65584267177092,
              "log_trade_count": 6.1565920914484265
            }
          }
        ],
        "transitions": [
          [
            0.48885524646314027,
            0.4057305651398543,
            0.10529809828326633,
            0.00011609011373890543
          ],
          [
            0.36834674268721657,
            0.4326048675669464,
            0.18757686631999404,
            0.011471523425842919
          ],
          [
            0.34048417543634485,
            0.31698200115212843,
            0.3142249403597508,
            0.028308883051775886
          ],
          [
            0.00023730422401519076,
            0.04769757392870634,
            0.00023787932236214818,
            0.9518272425249162
          ]
        ]
      }
    },
    "order_book": {
      "bids": [
        {
          "level": 1,
          "price": 0.66,
          "quantity": 1089200.0,
          "value": 718872.0
        },
        {
          "level": 2,
          "price": 0.655,
          "quantity": 263900.0,
          "value": 172854.5
        },
        {
          "level": 3,
          "price": 0.65,
          "quantity": 369100.0,
          "value": 239915.0
        },
        {
          "level": 4,
          "price": 0.645,
          "quantity": 39800.0,
          "value": 25671.0
        },
        {
          "level": 5,
          "price": 0.64,
          "quantity": 73400.0,
          "value": 46976.0
        },
        {
          "level": 6,
          "price": 0.635,
          "quantity": 56500.0,
          "value": 35877.5
        },
        {
          "level": 7,
          "price": 0.63,
          "quantity": 267900.0,
          "value": 168777.0
        },
        {
          "level": 8,
          "price": 0.625,
          "quantity": 69400.0,
          "value": 43375.0
        },
        {
          "level": 9,
          "price": 0.62,
          "quantity": 46800.0,
          "value": 29016.0
        },
        {
          "level": 10,
          "price": 0.615,
          "quantity": 11500.0,
          "value": 7072.5
        },
        {
          "level": 11,
          "price": 0.61,
          "quantity": 41000.0,
          "value": 25010.0
        },
        {
          "level": 12,
          "price": 0.605,
          "quantity": 5000.0,
          "value": 3025.0
        },
        {
          "level": 13,
          "price": 0.6,
          "quantity": 21800.0,
          "value": 13080.0
        },
        {
          "level": 14,
          "price": 0.58,
          "quantity": 1400.0,
          "value": 812.0
        },
        {
          "level": 15,
          "price": 0.57,
          "quantity": 23000.0,
          "value": 13109.999999999998
        },
        {
          "level": 16,
          "price": 0.565,
          "quantity": 10500.0,
          "value": 5932.499999999999
        },
        {
          "level": 17,
          "price": 0.535,
          "quantity": 1000.0,
          "value": 535.0
        },
        {
          "level": 18,
          "price": 0.525,
          "quantity": 5500.0,
          "value": 2887.5
        },
        {
          "level": 19,
          "price": 0.52,
          "quantity": 10000.0,
          "value": 5200.0
        },
        {
          "level": 20,
          "price": 0.515,
          "quantity": 7000.0,
          "value": 3605.0
        }
      ],
      "asks": [
        {
          "level": 1,
          "price": 0.665,
          "quantity": 493600.0,
          "value": 328244.0
        },
        {
          "level": 2,
          "price": 0.67,
          "quantity": 474400.0,
          "value": 317848.0
        },
        {
          "level": 3,
          "price": 0.675,
          "quantity": 202800.0,
          "value": 136890.0
        },
        {
          "level": 4,
          "price": 0.68,
          "quantity": 423400.0,
          "value": 287912.0
        },
        {
          "level": 5,
          "price": 0.685,
          "quantity": 110400.0,
          "value": 75624.0
        },
        {
          "level": 6,
          "price": 0.69,
          "quantity": 1106600.0,
          "value": 763553.9999999999
        },
        {
          "level": 7,
          "price": 0.695,
          "quantity": 185300.0,
          "value": 128783.49999999999
        },
        {
          "level": 8,
          "price": 0.7,
          "quantity": 103800.0,
          "value": 72660.0
        },
        {
          "level": 9,
          "price": 0.705,
          "quantity": 89300.0,
          "value": 62956.5
        },
        {
          "level": 10,
          "price": 0.71,
          "quantity": 69900.0,
          "value": 49629.0
        },
        {
          "level": 11,
          "price": 0.715,
          "quantity": 100.0,
          "value": 71.5
        },
        {
          "level": 12,
          "price": 0.72,
          "quantity": 20200.0,
          "value": 14544.0
        },
        {
          "level": 13,
          "price": 0.765,
          "quantity": 500.0,
          "value": 382.5
        },
        {
          "level": 14,
          "price": 0.77,
          "quantity": 12400.0,
          "value": 9548.0
        },
        {
          "level": 15,
          "price": 0.8,
          "quantity": 231700.0,
          "value": 185360.0
        },
        {
          "level": 16,
          "price": 0.81,
          "quantity": 1000.0,
          "value": 810.0
        },
        {
          "level": 17,
          "price": 0.825,
          "quantity": 3400.0,
          "value": 2805.0
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
        "snapshot_time": "2026-05-21 08:59:54.014100000",
        "snapshot_basis": "last_continuous_session_snapshot",
        "snapshot_label": "final continuous-session displayed book before close",
        "snapshot_note": "Final continuous-session displayed book before close",
        "snapshot_mic": "XSES",
        "mid_price": 0.6625000000000001,
        "spread_pct": 0.007547169811320759,
        "spread_ticks": 1.0,
        "tick_size": 0.005,
        "displayed_levels_per_side": 100,
        "bid_depth_notional_displayed": 1561603.5,
        "ask_depth_notional_displayed": 2575682.0,
        "bid_depth_notional_top10": 1561603.5,
        "ask_depth_notional_top10": 2575682.0,
        "bid_ask_depth_ratio": 0.6063
      },
      "historical_trade_scenarios": {
        "valid": true,
        "requested_lookback_calendar_days": 365,
        "lookback_calendar_days": 365,
        "effective_calendar_days": 366,
        "history_limited": false,
        "trade_days_used": 255,
        "n_trades_used": 101957,
        "first_trade_date": "2025-05-21",
        "last_trade_date": "2026-05-21",
        "window_label": "May 21, 2025 to May 21, 2026",
        "window_short_label": "May 21, 2025 to May 21, 2026",
        "trade_days_label": "255 trading days",
        "trade_count_label": "101,957 trades",
        "window_detail_label": "255 trading days • 101,957 trades",
        "history_note": "Trade-size percentiles use May 21, 2025 to May 21, 2026 history (255 trading days • 101,957 trades).",
        "scenarios": [
          {
            "key": "p90",
            "label": "90th percentile trade",
            "quantile": 0.9,
            "trade_notional": 3381.0,
            "impact_pct": -0.003774,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 0.22,
            "pct_of_adv": 0.76
          },
          {
            "key": "p95",
            "label": "95th percentile trade",
            "quantile": 0.95,
            "trade_notional": 7881.0,
            "impact_pct": -0.003774,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 0.5,
            "pct_of_adv": 1.77
          },
          {
            "key": "p99_99",
            "label": "99.99th percentile trade",
            "quantile": 0.9999,
            "trade_notional": 338533.0,
            "impact_pct": -0.003774,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 21.68,
            "pct_of_adv": 76.14
          }
        ]
      },
      "l3_sell_order_scenarios": {
        "valid": true,
        "trade_date": "2026-05-21",
        "selection_method": "largest_observed_ask_orders_during_day",
        "orders": [
          {
            "rank": 1,
            "order_id": "8149098049227054080",
            "timestamp": "2026-05-20 22:59:01.400400000",
            "local_timestamp": "2026-05-21 06:59:01",
            "posted_price": 0.69,
            "size_shares": 1000000.0,
            "notional": 690000.0,
            "impact_pct": -0.003774,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 44.19,
            "price_vs_mid_pct": 4.151,
            "executed_event_count": 0,
            "event_count": 1
          },
          {
            "rank": 2,
            "order_id": "8151472994345518080",
            "timestamp": "2026-05-21 06:26:32.375300000",
            "local_timestamp": "2026-05-21 14:26:32",
            "posted_price": 0.665,
            "size_shares": 544100.0,
            "notional": 361826.5,
            "impact_pct": -0.003774,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 23.17,
            "price_vs_mid_pct": 0.377,
            "executed_event_count": 0,
            "event_count": 174
          },
          {
            "rank": 3,
            "order_id": "8151472994346307584",
            "timestamp": "2026-05-21 08:18:43.838900000",
            "local_timestamp": "2026-05-21 16:18:43",
            "posted_price": 0.665,
            "size_shares": 474500.0,
            "notional": 315542.5,
            "impact_pct": -0.003774,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 20.21,
            "price_vs_mid_pct": 0.377,
            "executed_event_count": 0,
            "event_count": 72
          }
        ]
      },
      "intraday_liquidity_profile": {
        "valid": true,
        "trade_date": "2026-05-21",
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
            "bid_depth_notional": 1756806.0,
            "ask_depth_notional": 2208273.5,
            "mid_price": 0.6675
          },
          {
            "bucket": "09:30",
            "spread_pct": 0.007490636704119857,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 1773635.0,
            "ask_depth_notional": 2211035.5,
            "mid_price": 0.6675
          },
          {
            "bucket": "10:00",
            "spread_pct": 0.007490636704119857,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 1806151.0,
            "ask_depth_notional": 2223927.5,
            "mid_price": 0.6675
          },
          {
            "bucket": "10:30",
            "spread_pct": 0.007490636704119857,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 1815097.5,
            "ask_depth_notional": 2224200.5,
            "mid_price": 0.6675
          },
          {
            "bucket": "11:00",
            "spread_pct": 0.007490636704119857,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 1848347.5,
            "ask_depth_notional": 2243228.5,
            "mid_price": 0.6675
          },
          {
            "bucket": "11:30",
            "spread_pct": 0.007490636704119857,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 1817890.5,
            "ask_depth_notional": 2238404.5,
            "mid_price": 0.6675
          },
          {
            "bucket": "13:00",
            "spread_pct": 0.007490636704119857,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 1806281.0,
            "ask_depth_notional": 2222285.5,
            "mid_price": 0.6675
          },
          {
            "bucket": "13:30",
            "spread_pct": 0.007490636704119857,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 1821490.5,
            "ask_depth_notional": 2242412.5,
            "mid_price": 0.6675
          },
          {
            "bucket": "14:00",
            "spread_pct": 0.00754716981132076,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 1502935.5,
            "ask_depth_notional": 2617328.5,
            "mid_price": 0.6625000000000001
          },
          {
            "bucket": "14:30",
            "spread_pct": 0.00754716981132076,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 1524715.5,
            "ask_depth_notional": 2536863.5,
            "mid_price": 0.6625000000000001
          },
          {
            "bucket": "15:00",
            "spread_pct": 0.00754716981132076,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 1547221.5,
            "ask_depth_notional": 2496963.5,
            "mid_price": 0.6625000000000001
          },
          {
            "bucket": "15:30",
            "spread_pct": 0.007490636704119857,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 1603433.5,
            "ask_depth_notional": 2242352.0,
            "mid_price": 0.6675
          },
          {
            "bucket": "16:00",
            "spread_pct": 0.00754716981132076,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 1587075.5,
            "ask_depth_notional": 2582401.5,
            "mid_price": 0.6625000000000001
          },
          {
            "bucket": "16:30",
            "spread_pct": 0.00754716981132076,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 1561603.5,
            "ask_depth_notional": 2575682.0,
            "mid_price": 0.6625000000000001
          }
        ],
        "summary": {
          "median_spread_pct": 0.007490636704119857,
          "median_spread_ticks": 1.0000000000000009,
          "median_bid_depth_notional": 1765220.5,
          "median_ask_depth_notional": 2242382.25,
          "tightest_bucket": "09:00",
          "widest_bucket": "14:00",
          "deepest_bid_bucket": "11:00",
          "thinnest_bid_bucket": "14:00"
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
          "n_trades": 417,
          "n_runs": 190,
          "n_trade_days": 1,
          "first_trade_date": "2026-05-21",
          "last_trade_date": "2026-05-21",
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
            "retail_pct": 0.2829736211031175,
            "mixed_pct": 0.19904076738609114,
            "instit_pct": 0.42685851318944845,
            "ambiguous_pct": 0.09112709832134293,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.09112709832134293,
            "retail_qty_pct": 0.01221931286201698,
            "mixed_qty_pct": 0.04800444338649528,
            "instit_qty_pct": 0.8181385384432278,
            "ambiguous_qty_pct": 0.12163770530825994,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.12163770530825994,
            "retail_notional_pct": 0.012207520085341072,
            "mixed_notional_pct": 0.04804790650666011,
            "instit_notional_pct": 0.8181198235425375,
            "ambiguous_notional_pct": 0.12162474986546133,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.12162474986546133
          },
          "run_composition": {
            "retail_pct": 0.6210526315789474,
            "mixed_pct": 0.2736842105263158,
            "instit_pct": 0.06315789473684211,
            "ambiguous_pct": 0.042105263157894736,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.042105263157894736,
            "retail_notional_pct": 0.012207520085341072,
            "mixed_notional_pct": 0.04804790650666011,
            "instit_notional_pct": 0.8181198235425375,
            "unclear_notional_pct": 0.12162474986546133
          },
          "counts": {
            "trades": {
              "retail": 118,
              "mixed": 83,
              "institutional": 178,
              "ambiguous": 38,
              "unobservable": 0,
              "unclear": 38
            },
            "runs": {
              "retail": 118,
              "mixed": 52,
              "institutional": 12,
              "ambiguous": 8,
              "unobservable": 0,
              "unclear": 8
            }
          },
          "confidence": {
            "high": 0.6842105263157895,
            "medium": 0.2736842105263158,
            "low": 0.042105263157894736,
            "na": 0.0
          },
          "confidence_counts": {
            "high": 130,
            "medium": 52,
            "low": 8,
            "na": 0
          },
          "trade_confidence": {
            "high": 0.709832134292566,
            "medium": 0.19904076738609114,
            "low": 0.09112709832134293,
            "na": 0.0
          },
          "trade_confidence_counts": {
            "high": 296,
            "medium": 83,
            "low": 38,
            "na": 0
          },
          "observability": {
            "avg_feature_coverage": 0.8736842105263156,
            "observable_run_pct": 1.0,
            "ambiguous_run_pct": 0.042105263157894736,
            "unobservable_run_pct": 0.0
          },
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "dominant_share": 0.6210526315789474,
          "dominance_gap": 0.3473684210526316,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 417
            },
            "d2_information": {
              "UNOBSERVABLE": 417
            },
            "d3_urgency": {
              "UNOBSERVABLE": 190
            },
            "participant_confidence": {
              "HIGH": 130,
              "MEDIUM": 52,
              "LOW": 8
            }
          },
          "trade_size": {
            "avg": 2009.7098321342926,
            "median": 67.0
          },
          "run_size": {
            "avg": 4410.784210526316,
            "median": 132.0,
            "avg_length": 1.6368421052631579
          },
          "recent_trades": [
            {
              "trade_id": "BMLL-427",
              "timestamp": "2026-05-21T08:59:54.014100",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 48173,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-426",
              "timestamp": "2026-05-21T08:59:30.713200",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48172,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-425",
              "timestamp": "2026-05-21T08:59:30.561600",
              "price": 0.665,
              "size": 300.0,
              "notional": 199.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48172,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-424",
              "timestamp": "2026-05-21T08:59:30.072100",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48172,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-423",
              "timestamp": "2026-05-21T08:59:22.516100",
              "price": 0.665,
              "size": 300.0,
              "notional": 199.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48172,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-422",
              "timestamp": "2026-05-21T08:59:22.087800",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48172,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-421",
              "timestamp": "2026-05-21T08:59:21.387600",
              "price": 0.665,
              "size": 200.0,
              "notional": 133.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48172,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-420",
              "timestamp": "2026-05-21T08:59:21.145200",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48172,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-419",
              "timestamp": "2026-05-21T08:59:20.598100",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48172,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-418",
              "timestamp": "2026-05-21T08:59:20.506900",
              "price": 0.66,
              "size": 600.0,
              "notional": 396.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48171,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-417",
              "timestamp": "2026-05-21T08:59:20.445900",
              "price": 0.66,
              "size": 100.0,
              "notional": 66.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48171,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-416",
              "timestamp": "2026-05-21T08:59:17.930800",
              "price": 0.665,
              "size": 200.0,
              "notional": 133.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48170,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-415",
              "timestamp": "2026-05-21T08:59:16.992400",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48170,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-414",
              "timestamp": "2026-05-21T08:59:15.962800",
              "price": 0.665,
              "size": 600.0,
              "notional": 399.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48170,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-413",
              "timestamp": "2026-05-21T08:59:06.421100",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48170,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-412",
              "timestamp": "2026-05-21T08:58:40.035700",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 48169,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-411",
              "timestamp": "2026-05-21T08:58:15.284500",
              "price": 0.665,
              "size": 1300.0,
              "notional": 864.5,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 48168,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-410",
              "timestamp": "2026-05-21T08:58:08.129300",
              "price": 0.665,
              "size": 200.0,
              "notional": 133.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 48168,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-409",
              "timestamp": "2026-05-21T08:58:08.068700",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 48168,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-408",
              "timestamp": "2026-05-21T08:57:54.587000",
              "price": 0.665,
              "size": 1400.0,
              "notional": 931.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 48168,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-407",
              "timestamp": "2026-05-21T08:57:37.993500",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 48167,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-406",
              "timestamp": "2026-05-21T08:57:18.976700",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48166,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-405",
              "timestamp": "2026-05-21T08:57:06.701500",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48166,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-404",
              "timestamp": "2026-05-21T08:56:41.274600",
              "price": 0.665,
              "size": 2100.0,
              "notional": 1396.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48165,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-403",
              "timestamp": "2026-05-21T08:56:41.214300",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48165,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-402",
              "timestamp": "2026-05-21T08:56:25.638100",
              "price": 0.665,
              "size": 400.0,
              "notional": 266.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48164,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-401",
              "timestamp": "2026-05-21T08:56:07.173700",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 48163,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-400",
              "timestamp": "2026-05-21T08:55:53.988500",
              "price": 0.665,
              "size": 2000.0,
              "notional": 1330.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 48163,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-399",
              "timestamp": "2026-05-21T08:55:39.605500",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 48163,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-398",
              "timestamp": "2026-05-21T08:55:10.010200",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 48162,
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
              "retail_pct": 0.2829736211031175,
              "mixed_pct": 0.19904076738609114,
              "instit_pct": 0.42685851318944845,
              "ambiguous_pct": 0.09112709832134293,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.09112709832134293,
              "retail_qty_pct": 0.01221931286201698,
              "mixed_qty_pct": 0.04800444338649528,
              "instit_qty_pct": 0.8181385384432278,
              "ambiguous_qty_pct": 0.12163770530825994,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.12163770530825994,
              "retail_notional_pct": 0.012207520085341072,
              "mixed_notional_pct": 0.04804790650666011,
              "instit_notional_pct": 0.8181198235425375,
              "ambiguous_notional_pct": 0.12162474986546133,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.12162474986546133,
              "run_retail_pct": 0.6210526315789474,
              "run_mixed_pct": 0.2736842105263158,
              "run_instit_pct": 0.06315789473684211,
              "run_unclear_pct": 0.042105263157894736,
              "avg_trade_size": 2009.7098321342926,
              "avg_run_notional": 4410.784210526316,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.6842105263157895,
              "medium_confidence_pct": 0.2736842105263158,
              "low_confidence_pct": 0.042105263157894736,
              "na_confidence_pct": 0.0,
              "avg_feature_coverage": 0.8736842105263156,
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
              "retail_pct": 0.3833736884584342,
              "mixed_pct": 0.043583535108958835,
              "instit_pct": 0.5714285714285714,
              "ambiguous_pct": 0.0016142050040355124,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.0016142050040355124,
              "retail_qty_pct": 0.08639219860591285,
              "mixed_qty_pct": 0.0029186553583078665,
              "instit_qty_pct": 0.9105517975483295,
              "ambiguous_qty_pct": 0.00013734848744978195,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.00013734848744978195,
              "retail_notional_pct": 0.0867372028851291,
              "mixed_notional_pct": 0.002926988168515836,
              "instit_notional_pct": 0.9101973277856941,
              "ambiguous_notional_pct": 0.00013848116066096427,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.00013848116066096427,
              "run_retail_pct": 0.753448275862069,
              "run_mixed_pct": 0.04655172413793104,
              "run_instit_pct": 0.19827586206896552,
              "run_unclear_pct": 0.0017241379310344827,
              "avg_trade_size": 1538.6573849878935,
              "avg_run_notional": 3286.8905172413793,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.6396551724137931,
              "low_confidence_pct": 0.3603448275862069,
              "na_confidence_pct": 0.0,
              "avg_feature_coverage": 0.48775862068965514,
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
          "n_trades": 6571,
          "n_runs": 3951,
          "n_trade_days": 21,
          "first_trade_date": "2026-04-22",
          "last_trade_date": "2026-05-21",
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
            "retail_pct": 0.3603713285649064,
            "mixed_pct": 0.2899102115355349,
            "instit_pct": 0.20362197534621823,
            "ambiguous_pct": 0.14609648455334043,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.14609648455334043,
            "retail_qty_pct": 0.031014891298708037,
            "mixed_qty_pct": 0.16821460073678202,
            "instit_qty_pct": 0.5393815181860634,
            "ambiguous_qty_pct": 0.26138898977844655,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.26138898977844655,
            "retail_notional_pct": 0.03099818222625447,
            "mixed_notional_pct": 0.16833922076335978,
            "instit_notional_pct": 0.5389244091188362,
            "ambiguous_notional_pct": 0.26173818789154946,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.26173818789154946
          },
          "run_composition": {
            "retail_pct": 0.5884586180713743,
            "mixed_pct": 0.2604403948367502,
            "instit_pct": 0.05011389521640091,
            "ambiguous_pct": 0.10098709187547457,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.10098709187547457,
            "retail_notional_pct": 0.03099818222625447,
            "mixed_notional_pct": 0.16833922076335978,
            "instit_notional_pct": 0.5389244091188362,
            "unclear_notional_pct": 0.26173818789154946
          },
          "counts": {
            "trades": {
              "retail": 2368,
              "mixed": 1905,
              "institutional": 1338,
              "ambiguous": 960,
              "unobservable": 0,
              "unclear": 960
            },
            "runs": {
              "retail": 2325,
              "mixed": 1029,
              "institutional": 198,
              "ambiguous": 399,
              "unobservable": 0,
              "unclear": 399
            }
          },
          "confidence": {
            "high": 0.6385725132877752,
            "medium": 0.2604403948367502,
            "low": 0.10098709187547457,
            "na": 0.0
          },
          "confidence_counts": {
            "high": 2523,
            "medium": 1029,
            "low": 399,
            "na": 0
          },
          "trade_confidence": {
            "high": 0.5639933039111247,
            "medium": 0.2899102115355349,
            "low": 0.14609648455334043,
            "na": 0.0
          },
          "trade_confidence_counts": {
            "high": 3706,
            "medium": 1905,
            "low": 960,
            "na": 0
          },
          "observability": {
            "avg_feature_coverage": 0.8754492533535811,
            "observable_run_pct": 1.0,
            "ambiguous_run_pct": 0.10098709187547457,
            "unobservable_run_pct": 0.0
          },
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "dominant_share": 0.5884586180713743,
          "dominance_gap": 0.32801822323462415,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 6271,
              "WALK_BOOK": 296,
              "UNOBSERVABLE": 4
            },
            "d2_information": {
              "UNOBSERVABLE": 6571
            },
            "d3_urgency": {
              "UNOBSERVABLE": 3951
            },
            "participant_confidence": {
              "HIGH": 2523,
              "MEDIUM": 1029,
              "LOW": 399
            }
          },
          "trade_size": {
            "avg": 1562.5900928321412,
            "median": 132.0
          },
          "run_size": {
            "avg": 2598.779929131865,
            "median": 133.0,
            "avg_length": 1.3085294862060237
          },
          "recent_trades": [
            {
              "trade_id": "BMLL-427",
              "timestamp": "2026-05-21T08:59:54.014100",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 48173,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-426",
              "timestamp": "2026-05-21T08:59:30.713200",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48172,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-425",
              "timestamp": "2026-05-21T08:59:30.561600",
              "price": 0.665,
              "size": 300.0,
              "notional": 199.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48172,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-424",
              "timestamp": "2026-05-21T08:59:30.072100",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48172,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-423",
              "timestamp": "2026-05-21T08:59:22.516100",
              "price": 0.665,
              "size": 300.0,
              "notional": 199.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48172,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-422",
              "timestamp": "2026-05-21T08:59:22.087800",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48172,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-421",
              "timestamp": "2026-05-21T08:59:21.387600",
              "price": 0.665,
              "size": 200.0,
              "notional": 133.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48172,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-420",
              "timestamp": "2026-05-21T08:59:21.145200",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48172,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-419",
              "timestamp": "2026-05-21T08:59:20.598100",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48172,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-418",
              "timestamp": "2026-05-21T08:59:20.506900",
              "price": 0.66,
              "size": 600.0,
              "notional": 396.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48171,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-417",
              "timestamp": "2026-05-21T08:59:20.445900",
              "price": 0.66,
              "size": 100.0,
              "notional": 66.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48171,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-416",
              "timestamp": "2026-05-21T08:59:17.930800",
              "price": 0.665,
              "size": 200.0,
              "notional": 133.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48170,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-415",
              "timestamp": "2026-05-21T08:59:16.992400",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48170,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-414",
              "timestamp": "2026-05-21T08:59:15.962800",
              "price": 0.665,
              "size": 600.0,
              "notional": 399.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48170,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-413",
              "timestamp": "2026-05-21T08:59:06.421100",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48170,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-412",
              "timestamp": "2026-05-21T08:58:40.035700",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 48169,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-411",
              "timestamp": "2026-05-21T08:58:15.284500",
              "price": 0.665,
              "size": 1300.0,
              "notional": 864.5,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 48168,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-410",
              "timestamp": "2026-05-21T08:58:08.129300",
              "price": 0.665,
              "size": 200.0,
              "notional": 133.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 48168,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-409",
              "timestamp": "2026-05-21T08:58:08.068700",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 48168,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-408",
              "timestamp": "2026-05-21T08:57:54.587000",
              "price": 0.665,
              "size": 1400.0,
              "notional": 931.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 48168,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-407",
              "timestamp": "2026-05-21T08:57:37.993500",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 48167,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-406",
              "timestamp": "2026-05-21T08:57:18.976700",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48166,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-405",
              "timestamp": "2026-05-21T08:57:06.701500",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48166,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-404",
              "timestamp": "2026-05-21T08:56:41.274600",
              "price": 0.665,
              "size": 2100.0,
              "notional": 1396.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48165,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-403",
              "timestamp": "2026-05-21T08:56:41.214300",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48165,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-402",
              "timestamp": "2026-05-21T08:56:25.638100",
              "price": 0.665,
              "size": 400.0,
              "notional": 266.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48164,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-401",
              "timestamp": "2026-05-21T08:56:07.173700",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 48163,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-400",
              "timestamp": "2026-05-21T08:55:53.988500",
              "price": 0.665,
              "size": 2000.0,
              "notional": 1330.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 48163,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-399",
              "timestamp": "2026-05-21T08:55:39.605500",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 48163,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-398",
              "timestamp": "2026-05-21T08:55:10.010200",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 48162,
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
              "retail_pct": 0.3603713285649064,
              "mixed_pct": 0.2899102115355349,
              "instit_pct": 0.20362197534621823,
              "ambiguous_pct": 0.14609648455334043,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.14609648455334043,
              "retail_qty_pct": 0.031014891298708037,
              "mixed_qty_pct": 0.16821460073678202,
              "instit_qty_pct": 0.5393815181860634,
              "ambiguous_qty_pct": 0.26138898977844655,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.26138898977844655,
              "retail_notional_pct": 0.03099818222625447,
              "mixed_notional_pct": 0.16833922076335978,
              "instit_notional_pct": 0.5389244091188362,
              "ambiguous_notional_pct": 0.26173818789154946,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.26173818789154946,
              "run_retail_pct": 0.5884586180713743,
              "run_mixed_pct": 0.2604403948367502,
              "run_instit_pct": 0.05011389521640091,
              "run_unclear_pct": 0.10098709187547457,
              "avg_trade_size": 1562.5900928321412,
              "avg_run_notional": 2598.779929131865,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.6385725132877752,
              "medium_confidence_pct": 0.2604403948367502,
              "low_confidence_pct": 0.10098709187547457,
              "na_confidence_pct": 0.0,
              "avg_feature_coverage": 0.8754492533535811,
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
              "retail_pct": 0.47810560824259457,
              "mixed_pct": 0.045310853530031614,
              "instit_pct": 0.47435897435897434,
              "ambiguous_pct": 0.002224563868399485,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.002224563868399485,
              "retail_qty_pct": 0.18033252043743003,
              "mixed_qty_pct": 0.009819935888587249,
              "instit_qty_pct": 0.809690332673814,
              "ambiguous_qty_pct": 0.00015721100016871425,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.00015721100016871425,
              "retail_notional_pct": 0.18114352145363083,
              "mixed_notional_pct": 0.00975068935374684,
              "instit_notional_pct": 0.8089454402973263,
              "ambiguous_notional_pct": 0.00016034889529607812,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.00016034889529607812,
              "run_retail_pct": 0.7868920460437623,
              "run_mixed_pct": 0.034740226070724876,
              "run_instit_pct": 0.17639738670538213,
              "run_unclear_pct": 0.0019703411801306647,
              "avg_trade_size": 1018.9553330991687,
              "avg_run_notional": 1805.0186663901275,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.7277818106398424,
              "low_confidence_pct": 0.2722181893601576,
              "na_confidence_pct": 0.0,
              "avg_feature_coverage": 0.4835061702789588,
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
          "n_trades": 24061,
          "n_runs": 14006,
          "n_trade_days": 63,
          "first_trade_date": "2026-02-20",
          "last_trade_date": "2026-05-21",
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
            "retail_pct": 0.35069199118906114,
            "mixed_pct": 0.2872698557832177,
            "instit_pct": 0.2254686006400399,
            "ambiguous_pct": 0.13656955238768131,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.13656955238768131,
            "retail_qty_pct": 0.023672366467045385,
            "mixed_qty_pct": 0.18121688220254195,
            "instit_qty_pct": 0.544693883949822,
            "ambiguous_qty_pct": 0.25041686738059066,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.25041686738059066,
            "retail_notional_pct": 0.023645885284369884,
            "mixed_notional_pct": 0.18247859592654236,
            "instit_notional_pct": 0.5431721278501245,
            "ambiguous_notional_pct": 0.25070339093896327,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.25070339093896327
          },
          "run_composition": {
            "retail_pct": 0.5957446808510638,
            "mixed_pct": 0.2537483935456233,
            "instit_pct": 0.04983578466371555,
            "ambiguous_pct": 0.10067114093959731,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.10067114093959731,
            "retail_notional_pct": 0.023645885284369884,
            "mixed_notional_pct": 0.18247859592654236,
            "instit_notional_pct": 0.5431721278501245,
            "unclear_notional_pct": 0.25070339093896327
          },
          "counts": {
            "trades": {
              "retail": 8438,
              "mixed": 6912,
              "institutional": 5425,
              "ambiguous": 3286,
              "unobservable": 0,
              "unclear": 3286
            },
            "runs": {
              "retail": 8344,
              "mixed": 3554,
              "institutional": 698,
              "ambiguous": 1410,
              "unobservable": 0,
              "unclear": 1410
            }
          },
          "confidence": {
            "high": 0.6455090675424818,
            "medium": 0.2538197915179209,
            "low": 0.10067114093959731,
            "na": 0.0
          },
          "confidence_counts": {
            "high": 9041,
            "medium": 3555,
            "low": 1410,
            "na": 0
          },
          "trade_confidence": {
            "high": 0.5760774697643489,
            "medium": 0.28735297784796976,
            "low": 0.13656955238768131,
            "na": 0.0
          },
          "trade_confidence_counts": {
            "high": 13861,
            "medium": 6914,
            "low": 3286,
            "na": 0
          },
          "observability": {
            "avg_feature_coverage": 0.8778202199057544,
            "observable_run_pct": 1.0,
            "ambiguous_run_pct": 0.10067114093959731,
            "unobservable_run_pct": 0.0
          },
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "dominant_share": 0.5957446808510638,
          "dominance_gap": 0.3419962873054405,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 23230,
              "WALK_BOOK": 825,
              "UNOBSERVABLE": 6
            },
            "d2_information": {
              "UNOBSERVABLE": 24061
            },
            "d3_urgency": {
              "UNOBSERVABLE": 14006
            },
            "participant_confidence": {
              "HIGH": 9041,
              "MEDIUM": 3555,
              "LOW": 1410
            }
          },
          "trade_size": {
            "avg": 1932.7177798096504,
            "median": 131.0
          },
          "run_size": {
            "avg": 3320.228652006283,
            "median": 133.0,
            "avg_length": 1.3664857918035127
          },
          "recent_trades": [
            {
              "trade_id": "BMLL-427",
              "timestamp": "2026-05-21T08:59:54.014100",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 48173,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-426",
              "timestamp": "2026-05-21T08:59:30.713200",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48172,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-425",
              "timestamp": "2026-05-21T08:59:30.561600",
              "price": 0.665,
              "size": 300.0,
              "notional": 199.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48172,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-424",
              "timestamp": "2026-05-21T08:59:30.072100",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48172,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-423",
              "timestamp": "2026-05-21T08:59:22.516100",
              "price": 0.665,
              "size": 300.0,
              "notional": 199.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48172,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-422",
              "timestamp": "2026-05-21T08:59:22.087800",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48172,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-421",
              "timestamp": "2026-05-21T08:59:21.387600",
              "price": 0.665,
              "size": 200.0,
              "notional": 133.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48172,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-420",
              "timestamp": "2026-05-21T08:59:21.145200",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48172,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-419",
              "timestamp": "2026-05-21T08:59:20.598100",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48172,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-418",
              "timestamp": "2026-05-21T08:59:20.506900",
              "price": 0.66,
              "size": 600.0,
              "notional": 396.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48171,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-417",
              "timestamp": "2026-05-21T08:59:20.445900",
              "price": 0.66,
              "size": 100.0,
              "notional": 66.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48171,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-416",
              "timestamp": "2026-05-21T08:59:17.930800",
              "price": 0.665,
              "size": 200.0,
              "notional": 133.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48170,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-415",
              "timestamp": "2026-05-21T08:59:16.992400",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48170,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-414",
              "timestamp": "2026-05-21T08:59:15.962800",
              "price": 0.665,
              "size": 600.0,
              "notional": 399.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48170,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-413",
              "timestamp": "2026-05-21T08:59:06.421100",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48170,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-412",
              "timestamp": "2026-05-21T08:58:40.035700",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 48169,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-411",
              "timestamp": "2026-05-21T08:58:15.284500",
              "price": 0.665,
              "size": 1300.0,
              "notional": 864.5,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 48168,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-410",
              "timestamp": "2026-05-21T08:58:08.129300",
              "price": 0.665,
              "size": 200.0,
              "notional": 133.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 48168,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-409",
              "timestamp": "2026-05-21T08:58:08.068700",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 48168,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-408",
              "timestamp": "2026-05-21T08:57:54.587000",
              "price": 0.665,
              "size": 1400.0,
              "notional": 931.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 48168,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-407",
              "timestamp": "2026-05-21T08:57:37.993500",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 48167,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-406",
              "timestamp": "2026-05-21T08:57:18.976700",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48166,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-405",
              "timestamp": "2026-05-21T08:57:06.701500",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48166,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-404",
              "timestamp": "2026-05-21T08:56:41.274600",
              "price": 0.665,
              "size": 2100.0,
              "notional": 1396.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48165,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-403",
              "timestamp": "2026-05-21T08:56:41.214300",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48165,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-402",
              "timestamp": "2026-05-21T08:56:25.638100",
              "price": 0.665,
              "size": 400.0,
              "notional": 266.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48164,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-401",
              "timestamp": "2026-05-21T08:56:07.173700",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 48163,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-400",
              "timestamp": "2026-05-21T08:55:53.988500",
              "price": 0.665,
              "size": 2000.0,
              "notional": 1330.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 48163,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-399",
              "timestamp": "2026-05-21T08:55:39.605500",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 48163,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-398",
              "timestamp": "2026-05-21T08:55:10.010200",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 48162,
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
              "retail_pct": 0.35069199118906114,
              "mixed_pct": 0.2872698557832177,
              "instit_pct": 0.2254686006400399,
              "ambiguous_pct": 0.13656955238768131,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.13656955238768131,
              "retail_qty_pct": 0.023672366467045385,
              "mixed_qty_pct": 0.18121688220254195,
              "instit_qty_pct": 0.544693883949822,
              "ambiguous_qty_pct": 0.25041686738059066,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.25041686738059066,
              "retail_notional_pct": 0.023645885284369884,
              "mixed_notional_pct": 0.18247859592654236,
              "instit_notional_pct": 0.5431721278501245,
              "ambiguous_notional_pct": 0.25070339093896327,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.25070339093896327,
              "run_retail_pct": 0.5957446808510638,
              "run_mixed_pct": 0.2537483935456233,
              "run_instit_pct": 0.04983578466371555,
              "run_unclear_pct": 0.10067114093959731,
              "avg_trade_size": 1932.7177798096504,
              "avg_run_notional": 3320.228652006283,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.6455090675424818,
              "medium_confidence_pct": 0.2538197915179209,
              "low_confidence_pct": 0.10067114093959731,
              "na_confidence_pct": 0.0,
              "avg_feature_coverage": 0.8778202199057544,
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
              "retail_pct": 0.4491000240486894,
              "mixed_pct": 0.044619568233531276,
              "instit_pct": 0.5041530236602105,
              "ambiguous_pct": 0.0021273840575688624,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.0021273840575688624,
              "retail_qty_pct": 0.20589883999016562,
              "mixed_qty_pct": 0.023573903131356027,
              "instit_qty_pct": 0.7699917301803715,
              "ambiguous_qty_pct": 0.0005355266981068818,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.0005355266981068818,
              "retail_notional_pct": 0.20669467575586717,
              "mixed_notional_pct": 0.02381970901910324,
              "instit_notional_pct": 0.7689564850327253,
              "ambiguous_notional_pct": 0.0005291301923043359,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.0005291301923043359,
              "run_retail_pct": 0.7821979481880582,
              "run_mixed_pct": 0.03542696877998376,
              "run_instit_pct": 0.1804561222230423,
              "run_unclear_pct": 0.0019189608089157872,
              "avg_trade_size": 1383.7092605952976,
              "avg_run_notional": 2760.3207432282825,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.7054395158314267,
              "low_confidence_pct": 0.29456048416857333,
              "na_confidence_pct": 0.0,
              "avg_feature_coverage": 0.48586980588973366,
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
          "n_trades": 43353,
          "n_runs": 26807,
          "n_trade_days": 126,
          "first_trade_date": "2025-11-19",
          "last_trade_date": "2026-05-21",
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
            "retail_pct": 0.3763061379835306,
            "mixed_pct": 0.2845939150693147,
            "instit_pct": 0.21431042834405922,
            "ambiguous_pct": 0.12478951860309552,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.12478951860309552,
            "retail_qty_pct": 0.02827037596658075,
            "mixed_qty_pct": 0.1733161496755844,
            "instit_qty_pct": 0.5437116700737712,
            "ambiguous_qty_pct": 0.25470180428406364,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.25470180428406364,
            "retail_notional_pct": 0.028307925363101467,
            "mixed_notional_pct": 0.17396317008682866,
            "instit_notional_pct": 0.5425857246434002,
            "ambiguous_notional_pct": 0.2551431799066697,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.2551431799066697
          },
          "run_composition": {
            "retail_pct": 0.6019323311075465,
            "mixed_pct": 0.25202372514641697,
            "instit_pct": 0.05390383108889469,
            "ambiguous_pct": 0.0921401126571418,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.0921401126571418,
            "retail_notional_pct": 0.028307054636804118,
            "mixed_notional_pct": 0.1739633259739774,
            "instit_notional_pct": 0.5425862108505757,
            "unclear_notional_pct": 0.25514340853864287
          },
          "counts": {
            "trades": {
              "retail": 16314,
              "mixed": 12338,
              "institutional": 9291,
              "ambiguous": 5410,
              "unobservable": 0,
              "unclear": 5410
            },
            "runs": {
              "retail": 16136,
              "mixed": 6756,
              "institutional": 1445,
              "ambiguous": 2470,
              "unobservable": 0,
              "unclear": 2470
            }
          },
          "confidence": {
            "high": 0.6557988585071064,
            "medium": 0.2520610288357519,
            "low": 0.0921401126571418,
            "na": 0.0
          },
          "confidence_counts": {
            "high": 17580,
            "medium": 6757,
            "low": 2470,
            "na": 0
          },
          "trade_confidence": {
            "high": 0.5905473669642239,
            "medium": 0.2846400479782253,
            "low": 0.1248125850575508,
            "na": 0.0
          },
          "trade_confidence_counts": {
            "high": 25602,
            "medium": 12340,
            "low": 5411,
            "na": 0
          },
          "observability": {
            "avg_feature_coverage": 0.8766105867870331,
            "observable_run_pct": 1.0,
            "ambiguous_run_pct": 0.0921401126571418,
            "unobservable_run_pct": 0.0
          },
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "dominant_share": 0.6019323311075465,
          "dominance_gap": 0.34990860596112955,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 42203,
              "WALK_BOOK": 1143,
              "UNOBSERVABLE": 7
            },
            "d2_information": {
              "UNOBSERVABLE": 43353
            },
            "d3_urgency": {
              "UNOBSERVABLE": 26807
            },
            "participant_confidence": {
              "HIGH": 17580,
              "MEDIUM": 6757,
              "LOW": 2470
            }
          },
          "trade_size": {
            "avg": 1737.528775401933,
            "median": 133.0
          },
          "run_size": {
            "avg": 2809.975659342709,
            "median": 136.0,
            "avg_length": 1.3307345096430037
          },
          "recent_trades": [
            {
              "trade_id": "BMLL-427",
              "timestamp": "2026-05-21T08:59:54.014100",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 48173,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-426",
              "timestamp": "2026-05-21T08:59:30.713200",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48172,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-425",
              "timestamp": "2026-05-21T08:59:30.561600",
              "price": 0.665,
              "size": 300.0,
              "notional": 199.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48172,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-424",
              "timestamp": "2026-05-21T08:59:30.072100",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48172,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-423",
              "timestamp": "2026-05-21T08:59:22.516100",
              "price": 0.665,
              "size": 300.0,
              "notional": 199.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48172,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-422",
              "timestamp": "2026-05-21T08:59:22.087800",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48172,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-421",
              "timestamp": "2026-05-21T08:59:21.387600",
              "price": 0.665,
              "size": 200.0,
              "notional": 133.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48172,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-420",
              "timestamp": "2026-05-21T08:59:21.145200",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48172,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-419",
              "timestamp": "2026-05-21T08:59:20.598100",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48172,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-418",
              "timestamp": "2026-05-21T08:59:20.506900",
              "price": 0.66,
              "size": 600.0,
              "notional": 396.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48171,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-417",
              "timestamp": "2026-05-21T08:59:20.445900",
              "price": 0.66,
              "size": 100.0,
              "notional": 66.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48171,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-416",
              "timestamp": "2026-05-21T08:59:17.930800",
              "price": 0.665,
              "size": 200.0,
              "notional": 133.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48170,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-415",
              "timestamp": "2026-05-21T08:59:16.992400",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48170,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-414",
              "timestamp": "2026-05-21T08:59:15.962800",
              "price": 0.665,
              "size": 600.0,
              "notional": 399.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48170,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-413",
              "timestamp": "2026-05-21T08:59:06.421100",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48170,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-412",
              "timestamp": "2026-05-21T08:58:40.035700",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 48169,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-411",
              "timestamp": "2026-05-21T08:58:15.284500",
              "price": 0.665,
              "size": 1300.0,
              "notional": 864.5,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 48168,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-410",
              "timestamp": "2026-05-21T08:58:08.129300",
              "price": 0.665,
              "size": 200.0,
              "notional": 133.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 48168,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-409",
              "timestamp": "2026-05-21T08:58:08.068700",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 48168,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-408",
              "timestamp": "2026-05-21T08:57:54.587000",
              "price": 0.665,
              "size": 1400.0,
              "notional": 931.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 48168,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-407",
              "timestamp": "2026-05-21T08:57:37.993500",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 48167,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-406",
              "timestamp": "2026-05-21T08:57:18.976700",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48166,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-405",
              "timestamp": "2026-05-21T08:57:06.701500",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48166,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-404",
              "timestamp": "2026-05-21T08:56:41.274600",
              "price": 0.665,
              "size": 2100.0,
              "notional": 1396.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48165,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-403",
              "timestamp": "2026-05-21T08:56:41.214300",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48165,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-402",
              "timestamp": "2026-05-21T08:56:25.638100",
              "price": 0.665,
              "size": 400.0,
              "notional": 266.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48164,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-401",
              "timestamp": "2026-05-21T08:56:07.173700",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 48163,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-400",
              "timestamp": "2026-05-21T08:55:53.988500",
              "price": 0.665,
              "size": 2000.0,
              "notional": 1330.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 48163,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-399",
              "timestamp": "2026-05-21T08:55:39.605500",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 48163,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-398",
              "timestamp": "2026-05-21T08:55:10.010200",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 48162,
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
              "retail_pct": 0.3763061379835306,
              "mixed_pct": 0.2845939150693147,
              "instit_pct": 0.21431042834405922,
              "ambiguous_pct": 0.12478951860309552,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.12478951860309552,
              "retail_qty_pct": 0.02827037596658075,
              "mixed_qty_pct": 0.1733161496755844,
              "instit_qty_pct": 0.5437116700737712,
              "ambiguous_qty_pct": 0.25470180428406364,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.25470180428406364,
              "retail_notional_pct": 0.028307925363101467,
              "mixed_notional_pct": 0.17396317008682866,
              "instit_notional_pct": 0.5425857246434002,
              "ambiguous_notional_pct": 0.2551431799066697,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.2551431799066697,
              "run_retail_pct": 0.6019323311075465,
              "run_mixed_pct": 0.25202372514641697,
              "run_instit_pct": 0.05390383108889469,
              "run_unclear_pct": 0.0921401126571418,
              "avg_trade_size": 1737.528775401933,
              "avg_run_notional": 2809.975659342709,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.6557988585071064,
              "medium_confidence_pct": 0.2520610288357519,
              "low_confidence_pct": 0.0921401126571418,
              "na_confidence_pct": 0.0,
              "avg_feature_coverage": 0.8766105867870331,
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
              "retail_pct": 0.4778042420384781,
              "mixed_pct": 0.04717368539925672,
              "instit_pct": 0.4733794632774162,
              "ambiguous_pct": 0.0016426092848489827,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.0016426092848489827,
              "retail_qty_pct": 0.22885279786945806,
              "mixed_qty_pct": 0.02683385000047754,
              "instit_qty_pct": 0.7438795427458073,
              "ambiguous_qty_pct": 0.0004338093842570926,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.0004338093842570926,
              "retail_notional_pct": 0.23130501221713173,
              "mixed_notional_pct": 0.026948730731630594,
              "instit_notional_pct": 0.7413239963114255,
              "ambiguous_notional_pct": 0.0004222607398121023,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.0004222607398121023,
              "run_retail_pct": 0.79133827697325,
              "run_mixed_pct": 0.03585433086151338,
              "run_instit_pct": 0.17142912606281788,
              "run_unclear_pct": 0.0013782661024187598,
              "avg_trade_size": 1460.8785341765395,
              "avg_run_notional": 2762.323533408394,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.7210272935512676,
              "low_confidence_pct": 0.2789727064487324,
              "na_confidence_pct": 0.0,
              "avg_feature_coverage": 0.48499728229219247,
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
      "n_trades": 43353,
      "n_runs": 26807,
      "n_trade_days": 126,
      "first_trade_date": "2025-11-19",
      "last_trade_date": "2026-05-21",
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
        "retail_pct": 0.3763061379835306,
        "mixed_pct": 0.2845939150693147,
        "instit_pct": 0.21431042834405922,
        "ambiguous_pct": 0.12478951860309552,
        "unobservable_pct": 0.0,
        "unclear_pct": 0.12478951860309552,
        "retail_qty_pct": 0.02827037596658075,
        "mixed_qty_pct": 0.1733161496755844,
        "instit_qty_pct": 0.5437116700737712,
        "ambiguous_qty_pct": 0.25470180428406364,
        "unobservable_qty_pct": 0.0,
        "unclear_qty_pct": 0.25470180428406364,
        "retail_notional_pct": 0.028307925363101467,
        "mixed_notional_pct": 0.17396317008682866,
        "instit_notional_pct": 0.5425857246434002,
        "ambiguous_notional_pct": 0.2551431799066697,
        "unobservable_notional_pct": 0.0,
        "unclear_notional_pct": 0.2551431799066697
      },
      "run_composition": {
        "retail_pct": 0.6019323311075465,
        "mixed_pct": 0.25202372514641697,
        "instit_pct": 0.05390383108889469,
        "ambiguous_pct": 0.0921401126571418,
        "unobservable_pct": 0.0,
        "unclear_pct": 0.0921401126571418
      },
      "trade_size": {
        "avg": 1737.528775401933,
        "median": 133.0
      },
      "run_size": {
        "avg": 2809.975659342709,
        "median": 136.0,
        "avg_length": 1.3307345096430037
      },
      "confidence": {
        "high": 0.6557988585071064,
        "medium": 0.2520610288357519,
        "low": 0.0921401126571418,
        "na": 0.0
      },
      "confidence_counts": {
        "high": 17580,
        "medium": 6757,
        "low": 2470,
        "na": 0
      },
      "trade_confidence": {
        "high": 0.5905473669642239,
        "medium": 0.2846400479782253,
        "low": 0.1248125850575508,
        "na": 0.0
      },
      "trade_confidence_counts": {
        "high": 25602,
        "medium": 12340,
        "low": 5411,
        "na": 0
      },
      "counts": {
        "trades": {
          "retail": 16314,
          "mixed": 12338,
          "institutional": 9291,
          "ambiguous": 5410,
          "unobservable": 0,
          "unclear": 5410
        },
        "runs": {
          "retail": 16136,
          "mixed": 6756,
          "institutional": 1445,
          "ambiguous": 2470,
          "unobservable": 0,
          "unclear": 2470
        }
      },
      "observability": {
        "avg_feature_coverage": 0.8766105867870331,
        "observable_run_pct": 1.0,
        "ambiguous_run_pct": 0.0921401126571418,
        "unobservable_run_pct": 0.0
      },
      "dominant_bucket": "RETAIL",
      "dominant_label": "Retail-led",
      "dominant_share": 0.6019323311075465,
      "dominance_gap": 0.34990860596112955,
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
            "n_trades": 4501,
            "n_runs": 2812,
            "retail_pct": 0.3705843145967563,
            "mixed_pct": 0.2803821373028216,
            "instit_pct": 0.20728726949566764,
            "ambiguous_pct": 0.1417462786047545,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.1417462786047545,
            "avg_trade_size": 1564.2040657631637,
            "avg_run_notional": 2503.727773826458,
            "retail_qty_pct": 0.030416631166396865,
            "mixed_qty_pct": 0.15764013139833197,
            "instit_qty_pct": 0.5459752160783089,
            "ambiguous_qty_pct": 0.2659680213569623,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.2659680213569623,
            "retail_notional_pct": 0.030390175673329207,
            "mixed_notional_pct": 0.15786957783078076,
            "instit_notional_pct": 0.5454015403063639,
            "ambiguous_notional_pct": 0.2663387061895261,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.2663387061895261,
            "run_retail_pct": 0.5832147937411095,
            "run_mixed_pct": 0.26600284495021337,
            "run_instit_pct": 0.04800853485064011,
            "run_ambiguous_pct": 0.10277382645803698,
            "run_unobservable_pct": 0.0,
            "run_unclear_pct": 0.10277382645803698,
            "avg_feature_coverage": 0.8736842105263155,
            "high_confidence_pct": 0.6312233285917497,
            "medium_confidence_pct": 0.26600284495021337,
            "low_confidence_pct": 0.10277382645803698,
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
          "retail_pct": 0.3763061379835306,
          "mixed_pct": 0.2845939150693147,
          "instit_pct": 0.21431042834405922,
          "ambiguous_pct": 0.12478951860309552,
          "unobservable_pct": 0.0,
          "unclear_pct": 0.12478951860309552,
          "retail_qty_pct": 0.02827037596658075,
          "mixed_qty_pct": 0.1733161496755844,
          "instit_qty_pct": 0.5437116700737712,
          "ambiguous_qty_pct": 0.25470180428406364,
          "unobservable_qty_pct": 0.0,
          "unclear_qty_pct": 0.25470180428406364,
          "retail_notional_pct": 0.028307925363101467,
          "mixed_notional_pct": 0.17396317008682866,
          "instit_notional_pct": 0.5425857246434002,
          "ambiguous_notional_pct": 0.2551431799066697,
          "unobservable_notional_pct": 0.0,
          "unclear_notional_pct": 0.2551431799066697,
          "run_retail_pct": 0.6019323311075465,
          "run_mixed_pct": 0.25202372514641697,
          "run_instit_pct": 0.05390383108889469,
          "run_unclear_pct": 0.0921401126571418,
          "avg_trade_size": 1737.528775401933,
          "avg_run_notional": 2809.975659342709,
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "high_confidence_pct": 0.6557988585071064,
          "medium_confidence_pct": 0.2520610288357519,
          "low_confidence_pct": 0.0921401126571418,
          "na_confidence_pct": 0.0,
          "avg_feature_coverage": 0.8766105867870331,
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
          "retail_pct": 0.4778042420384781,
          "mixed_pct": 0.04717368539925672,
          "instit_pct": 0.4733794632774162,
          "ambiguous_pct": 0.0016426092848489827,
          "unobservable_pct": 0.0,
          "unclear_pct": 0.0016426092848489827,
          "retail_qty_pct": 0.22885279786945806,
          "mixed_qty_pct": 0.02683385000047754,
          "instit_qty_pct": 0.7438795427458073,
          "ambiguous_qty_pct": 0.0004338093842570926,
          "unobservable_qty_pct": 0.0,
          "unclear_qty_pct": 0.0004338093842570926,
          "retail_notional_pct": 0.23130501221713173,
          "mixed_notional_pct": 0.026948730731630594,
          "instit_notional_pct": 0.7413239963114255,
          "ambiguous_notional_pct": 0.0004222607398121023,
          "unobservable_notional_pct": 0.0,
          "unclear_notional_pct": 0.0004222607398121023,
          "run_retail_pct": 0.79133827697325,
          "run_mixed_pct": 0.03585433086151338,
          "run_instit_pct": 0.17142912606281788,
          "run_unclear_pct": 0.0013782661024187598,
          "avg_trade_size": 1460.8785341765395,
          "avg_run_notional": 2762.323533408394,
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "high_confidence_pct": 0.0,
          "medium_confidence_pct": 0.7210272935512676,
          "low_confidence_pct": 0.2789727064487324,
          "na_confidence_pct": 0.0,
          "avg_feature_coverage": 0.48499728229219247,
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
            "retail_pct": 0.2829736211031175,
            "mixed_pct": 0.19904076738609114,
            "instit_pct": 0.42685851318944845,
            "ambiguous_pct": 0.09112709832134293,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.09112709832134293,
            "retail_qty_pct": 0.01221931286201698,
            "mixed_qty_pct": 0.04800444338649528,
            "instit_qty_pct": 0.8181385384432278,
            "ambiguous_qty_pct": 0.12163770530825994,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.12163770530825994,
            "retail_notional_pct": 0.012207520085341072,
            "mixed_notional_pct": 0.04804790650666011,
            "instit_notional_pct": 0.8181198235425375,
            "ambiguous_notional_pct": 0.12162474986546133,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.12162474986546133,
            "run_retail_pct": 0.6210526315789474,
            "run_mixed_pct": 0.2736842105263158,
            "run_instit_pct": 0.06315789473684211,
            "run_unclear_pct": 0.042105263157894736,
            "avg_trade_size": 2009.7098321342926,
            "avg_run_notional": 4410.784210526316,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.6842105263157895,
            "medium_confidence_pct": 0.2736842105263158,
            "low_confidence_pct": 0.042105263157894736,
            "na_confidence_pct": 0.0,
            "avg_feature_coverage": 0.8736842105263156,
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
            "retail_pct": 0.3833736884584342,
            "mixed_pct": 0.043583535108958835,
            "instit_pct": 0.5714285714285714,
            "ambiguous_pct": 0.0016142050040355124,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.0016142050040355124,
            "retail_qty_pct": 0.08639219860591285,
            "mixed_qty_pct": 0.0029186553583078665,
            "instit_qty_pct": 0.9105517975483295,
            "ambiguous_qty_pct": 0.00013734848744978195,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.00013734848744978195,
            "retail_notional_pct": 0.0867372028851291,
            "mixed_notional_pct": 0.002926988168515836,
            "instit_notional_pct": 0.9101973277856941,
            "ambiguous_notional_pct": 0.00013848116066096427,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.00013848116066096427,
            "run_retail_pct": 0.753448275862069,
            "run_mixed_pct": 0.04655172413793104,
            "run_instit_pct": 0.19827586206896552,
            "run_unclear_pct": 0.0017241379310344827,
            "avg_trade_size": 1538.6573849878935,
            "avg_run_notional": 3286.8905172413793,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.6396551724137931,
            "low_confidence_pct": 0.3603448275862069,
            "na_confidence_pct": 0.0,
            "avg_feature_coverage": 0.48775862068965514,
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
            "retail_pct": 0.3603713285649064,
            "mixed_pct": 0.2899102115355349,
            "instit_pct": 0.20362197534621823,
            "ambiguous_pct": 0.14609648455334043,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.14609648455334043,
            "retail_qty_pct": 0.031014891298708037,
            "mixed_qty_pct": 0.16821460073678202,
            "instit_qty_pct": 0.5393815181860634,
            "ambiguous_qty_pct": 0.26138898977844655,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.26138898977844655,
            "retail_notional_pct": 0.03099818222625447,
            "mixed_notional_pct": 0.16833922076335978,
            "instit_notional_pct": 0.5389244091188362,
            "ambiguous_notional_pct": 0.26173818789154946,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.26173818789154946,
            "run_retail_pct": 0.5884586180713743,
            "run_mixed_pct": 0.2604403948367502,
            "run_instit_pct": 0.05011389521640091,
            "run_unclear_pct": 0.10098709187547457,
            "avg_trade_size": 1562.5900928321412,
            "avg_run_notional": 2598.779929131865,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.6385725132877752,
            "medium_confidence_pct": 0.2604403948367502,
            "low_confidence_pct": 0.10098709187547457,
            "na_confidence_pct": 0.0,
            "avg_feature_coverage": 0.8754492533535811,
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
            "retail_pct": 0.47810560824259457,
            "mixed_pct": 0.045310853530031614,
            "instit_pct": 0.47435897435897434,
            "ambiguous_pct": 0.002224563868399485,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.002224563868399485,
            "retail_qty_pct": 0.18033252043743003,
            "mixed_qty_pct": 0.009819935888587249,
            "instit_qty_pct": 0.809690332673814,
            "ambiguous_qty_pct": 0.00015721100016871425,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.00015721100016871425,
            "retail_notional_pct": 0.18114352145363083,
            "mixed_notional_pct": 0.00975068935374684,
            "instit_notional_pct": 0.8089454402973263,
            "ambiguous_notional_pct": 0.00016034889529607812,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.00016034889529607812,
            "run_retail_pct": 0.7868920460437623,
            "run_mixed_pct": 0.034740226070724876,
            "run_instit_pct": 0.17639738670538213,
            "run_unclear_pct": 0.0019703411801306647,
            "avg_trade_size": 1018.9553330991687,
            "avg_run_notional": 1805.0186663901275,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.7277818106398424,
            "low_confidence_pct": 0.2722181893601576,
            "na_confidence_pct": 0.0,
            "avg_feature_coverage": 0.4835061702789588,
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
            "retail_pct": 0.35069199118906114,
            "mixed_pct": 0.2872698557832177,
            "instit_pct": 0.2254686006400399,
            "ambiguous_pct": 0.13656955238768131,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.13656955238768131,
            "retail_qty_pct": 0.023672366467045385,
            "mixed_qty_pct": 0.18121688220254195,
            "instit_qty_pct": 0.544693883949822,
            "ambiguous_qty_pct": 0.25041686738059066,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.25041686738059066,
            "retail_notional_pct": 0.023645885284369884,
            "mixed_notional_pct": 0.18247859592654236,
            "instit_notional_pct": 0.5431721278501245,
            "ambiguous_notional_pct": 0.25070339093896327,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.25070339093896327,
            "run_retail_pct": 0.5957446808510638,
            "run_mixed_pct": 0.2537483935456233,
            "run_instit_pct": 0.04983578466371555,
            "run_unclear_pct": 0.10067114093959731,
            "avg_trade_size": 1932.7177798096504,
            "avg_run_notional": 3320.228652006283,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.6455090675424818,
            "medium_confidence_pct": 0.2538197915179209,
            "low_confidence_pct": 0.10067114093959731,
            "na_confidence_pct": 0.0,
            "avg_feature_coverage": 0.8778202199057544,
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
            "retail_pct": 0.4491000240486894,
            "mixed_pct": 0.044619568233531276,
            "instit_pct": 0.5041530236602105,
            "ambiguous_pct": 0.0021273840575688624,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.0021273840575688624,
            "retail_qty_pct": 0.20589883999016562,
            "mixed_qty_pct": 0.023573903131356027,
            "instit_qty_pct": 0.7699917301803715,
            "ambiguous_qty_pct": 0.0005355266981068818,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.0005355266981068818,
            "retail_notional_pct": 0.20669467575586717,
            "mixed_notional_pct": 0.02381970901910324,
            "instit_notional_pct": 0.7689564850327253,
            "ambiguous_notional_pct": 0.0005291301923043359,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.0005291301923043359,
            "run_retail_pct": 0.7821979481880582,
            "run_mixed_pct": 0.03542696877998376,
            "run_instit_pct": 0.1804561222230423,
            "run_unclear_pct": 0.0019189608089157872,
            "avg_trade_size": 1383.7092605952976,
            "avg_run_notional": 2760.3207432282825,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.7054395158314267,
            "low_confidence_pct": 0.29456048416857333,
            "na_confidence_pct": 0.0,
            "avg_feature_coverage": 0.48586980588973366,
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
            "retail_pct": 0.3763061379835306,
            "mixed_pct": 0.2845939150693147,
            "instit_pct": 0.21431042834405922,
            "ambiguous_pct": 0.12478951860309552,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.12478951860309552,
            "retail_qty_pct": 0.02827037596658075,
            "mixed_qty_pct": 0.1733161496755844,
            "instit_qty_pct": 0.5437116700737712,
            "ambiguous_qty_pct": 0.25470180428406364,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.25470180428406364,
            "retail_notional_pct": 0.028307925363101467,
            "mixed_notional_pct": 0.17396317008682866,
            "instit_notional_pct": 0.5425857246434002,
            "ambiguous_notional_pct": 0.2551431799066697,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.2551431799066697,
            "run_retail_pct": 0.6019323311075465,
            "run_mixed_pct": 0.25202372514641697,
            "run_instit_pct": 0.05390383108889469,
            "run_unclear_pct": 0.0921401126571418,
            "avg_trade_size": 1737.528775401933,
            "avg_run_notional": 2809.975659342709,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.6557988585071064,
            "medium_confidence_pct": 0.2520610288357519,
            "low_confidence_pct": 0.0921401126571418,
            "na_confidence_pct": 0.0,
            "avg_feature_coverage": 0.8766105867870331,
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
            "retail_pct": 0.4778042420384781,
            "mixed_pct": 0.04717368539925672,
            "instit_pct": 0.4733794632774162,
            "ambiguous_pct": 0.0016426092848489827,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.0016426092848489827,
            "retail_qty_pct": 0.22885279786945806,
            "mixed_qty_pct": 0.02683385000047754,
            "instit_qty_pct": 0.7438795427458073,
            "ambiguous_qty_pct": 0.0004338093842570926,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.0004338093842570926,
            "retail_notional_pct": 0.23130501221713173,
            "mixed_notional_pct": 0.026948730731630594,
            "instit_notional_pct": 0.7413239963114255,
            "ambiguous_notional_pct": 0.0004222607398121023,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.0004222607398121023,
            "run_retail_pct": 0.79133827697325,
            "run_mixed_pct": 0.03585433086151338,
            "run_instit_pct": 0.17142912606281788,
            "run_unclear_pct": 0.0013782661024187598,
            "avg_trade_size": 1460.8785341765395,
            "avg_run_notional": 2762.323533408394,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.7210272935512676,
            "low_confidence_pct": 0.2789727064487324,
            "na_confidence_pct": 0.0,
            "avg_feature_coverage": 0.48499728229219247,
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
          "trade_id": "BMLL-427",
          "timestamp": "2026-05-21T08:59:54.014100",
          "price": 0.665,
          "size": 100.0,
          "notional": 66.5,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 48173,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-426",
          "timestamp": "2026-05-21T08:59:30.713200",
          "price": 0.665,
          "size": 100.0,
          "notional": 66.5,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 48172,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-425",
          "timestamp": "2026-05-21T08:59:30.561600",
          "price": 0.665,
          "size": 300.0,
          "notional": 199.5,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 48172,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-424",
          "timestamp": "2026-05-21T08:59:30.072100",
          "price": 0.665,
          "size": 100.0,
          "notional": 66.5,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 48172,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-423",
          "timestamp": "2026-05-21T08:59:22.516100",
          "price": 0.665,
          "size": 300.0,
          "notional": 199.5,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 48172,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-422",
          "timestamp": "2026-05-21T08:59:22.087800",
          "price": 0.665,
          "size": 100.0,
          "notional": 66.5,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 48172,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-421",
          "timestamp": "2026-05-21T08:59:21.387600",
          "price": 0.665,
          "size": 200.0,
          "notional": 133.0,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 48172,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-420",
          "timestamp": "2026-05-21T08:59:21.145200",
          "price": 0.665,
          "size": 100.0,
          "notional": 66.5,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 48172,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-419",
          "timestamp": "2026-05-21T08:59:20.598100",
          "price": 0.665,
          "size": 100.0,
          "notional": 66.5,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 48172,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-418",
          "timestamp": "2026-05-21T08:59:20.506900",
          "price": 0.66,
          "size": 600.0,
          "notional": 396.0,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 48171,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-417",
          "timestamp": "2026-05-21T08:59:20.445900",
          "price": 0.66,
          "size": 100.0,
          "notional": 66.0,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 48171,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-416",
          "timestamp": "2026-05-21T08:59:17.930800",
          "price": 0.665,
          "size": 200.0,
          "notional": 133.0,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 48170,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-415",
          "timestamp": "2026-05-21T08:59:16.992400",
          "price": 0.665,
          "size": 100.0,
          "notional": 66.5,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 48170,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-414",
          "timestamp": "2026-05-21T08:59:15.962800",
          "price": 0.665,
          "size": 600.0,
          "notional": 399.0,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 48170,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-413",
          "timestamp": "2026-05-21T08:59:06.421100",
          "price": 0.665,
          "size": 100.0,
          "notional": 66.5,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 48170,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-412",
          "timestamp": "2026-05-21T08:58:40.035700",
          "price": 0.665,
          "size": 100.0,
          "notional": 66.5,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 48169,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-411",
          "timestamp": "2026-05-21T08:58:15.284500",
          "price": 0.665,
          "size": 1300.0,
          "notional": 864.5,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 48168,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-410",
          "timestamp": "2026-05-21T08:58:08.129300",
          "price": 0.665,
          "size": 200.0,
          "notional": 133.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 48168,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-409",
          "timestamp": "2026-05-21T08:58:08.068700",
          "price": 0.665,
          "size": 100.0,
          "notional": 66.5,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 48168,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-408",
          "timestamp": "2026-05-21T08:57:54.587000",
          "price": 0.665,
          "size": 1400.0,
          "notional": 931.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 48168,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-407",
          "timestamp": "2026-05-21T08:57:37.993500",
          "price": 0.665,
          "size": 100.0,
          "notional": 66.5,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 48167,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-406",
          "timestamp": "2026-05-21T08:57:18.976700",
          "price": 0.665,
          "size": 100.0,
          "notional": 66.5,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 48166,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-405",
          "timestamp": "2026-05-21T08:57:06.701500",
          "price": 0.665,
          "size": 100.0,
          "notional": 66.5,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 48166,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-404",
          "timestamp": "2026-05-21T08:56:41.274600",
          "price": 0.665,
          "size": 2100.0,
          "notional": 1396.5,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 48165,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-403",
          "timestamp": "2026-05-21T08:56:41.214300",
          "price": 0.665,
          "size": 100.0,
          "notional": 66.5,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 48165,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-402",
          "timestamp": "2026-05-21T08:56:25.638100",
          "price": 0.665,
          "size": 400.0,
          "notional": 266.0,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 48164,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-401",
          "timestamp": "2026-05-21T08:56:07.173700",
          "price": 0.665,
          "size": 100.0,
          "notional": 66.5,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 48163,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-400",
          "timestamp": "2026-05-21T08:55:53.988500",
          "price": 0.665,
          "size": 2000.0,
          "notional": 1330.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 48163,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-399",
          "timestamp": "2026-05-21T08:55:39.605500",
          "price": 0.665,
          "size": 100.0,
          "notional": 66.5,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 48163,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-398",
          "timestamp": "2026-05-21T08:55:10.010200",
          "price": 0.665,
          "size": 100.0,
          "notional": 66.5,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 48162,
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
      "total_trades": 43352,
      "price_moving_trades": 10236,
      "pct_price_moving": 23.61136741096143,
      "all_movers": {
        "count": 10236,
        "avg_size": 1515.2344665885112,
        "median_size": 136.0,
        "retail_count": 5388,
        "mixed_count": 3034,
        "institutional_count": 654,
        "ambiguous_count": 1160,
        "unobservable_count": 0,
        "retail_pct": 52.637749120750286,
        "mixed_pct": 29.64048456428292,
        "instit_pct": 6.389214536928487,
        "unclear_pct": 11.332551778038297
      },
      "positive_movers": {
        "count": 5112,
        "avg_size": 1514.2661384976525,
        "median_size": 137.0,
        "retail_count": 2603,
        "mixed_count": 1534,
        "institutional_count": 332,
        "ambiguous_count": 643,
        "unobservable_count": 0,
        "retail_pct": 50.91940532081377,
        "mixed_pct": 30.007824726134587,
        "instit_pct": 6.494522691705789,
        "unclear_pct": 12.578247261345854
      },
      "negative_movers": {
        "count": 5124,
        "avg_size": 1516.2005269320844,
        "median_size": 136.0,
        "retail_count": 2785,
        "mixed_count": 1500,
        "institutional_count": 322,
        "ambiguous_count": 517,
        "unobservable_count": 0,
        "retail_pct": 54.35206869633099,
        "mixed_pct": 29.274004683840747,
        "instit_pct": 6.284153005464481,
        "unclear_pct": 10.089773614363779
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
            "avg_short_ratio": 0.05079164727722287,
            "max_short_ratio": 0.18750749310634215,
            "interpretation": "Moderate short interest"
          }
        },
        "3M": {
          "stats": {
            "valid": true,
            "avg_short_ratio": 0.0769281763597304,
            "max_short_ratio": 0.36836158192090396,
            "interpretation": "Moderate short interest"
          }
        },
        "6M": {
          "stats": {
            "valid": true,
            "avg_short_ratio": 0.06495468825733781,
            "max_short_ratio": 0.36836158192090396,
            "interpretation": "Moderate short interest"
          }
        }
      },
      "correlation": {
        "valid": true,
        "correlation": -0.15445766749448447,
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
            "avg_short_ratio": 0.0545609797298892
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
            "avg_short_ratio": 0.0545609797298892,
            "change_pct": null
          },
          {
            "month": "2026-04",
            "avg_short_ratio": 0.039248558959178885,
            "change_pct": -28.064783379104124
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
        "interpretation": "Shorts building significantly (+39% MoM) | YoY: +122% ⬆️"
      },
      "short_series": {
        "valid": true,
        "rows": [
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
          },
          {
            "date": "2025-12-26",
            "short_ratio": 0.0009287925696594427,
            "short_vol": 300,
            "total_vol": 323000,
            "close": 0.68,
            "return": 0.0
          }
        ]
      },
      "peer_comparison": [
        {
          "ticker": "CRPU",
          "avg_short_ratio": 0.0769281763597304,
          "max_short_ratio": 0.36836158192090396,
          "is_target": true
        },
        {
          "ticker": "AU8U",
          "avg_short_ratio": 0.062148293999365334,
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
          "opening": 0.013611251277672114,
          "continuous": 0.9430852292786074,
          "closing": 0.03805457438962854,
          "auctions": 0.05691477072139262,
          "other": 0.0
        },
        "1M": {
          "opening": 0.024172967912871615,
          "continuous": 0.8947834556461923,
          "closing": 0.07088555740991317,
          "auctions": 0.10521654435380767,
          "other": 0.0
        },
        "3M": {
          "opening": 0.04466056126298337,
          "continuous": 0.8765330395827353,
          "closing": 0.06609203603398409,
          "auctions": 0.1234669604172647,
          "other": 0.0
        },
        "6M": {
          "opening": 0.03906435994322305,
          "continuous": 0.866034635249882,
          "closing": 0.08314244516944592,
          "auctions": 0.13396536475011794,
          "other": 0.0
        }
      },
      "hhi": {
        "1D": 0.192363174378844,
        "1M": 0.2232397276936579,
        "3M": 0.2193292189199113,
        "6M": 0.23182781706938552
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
          "avg_share": 0.0404
        },
        {
          "time": "10:00",
          "avg_share": 0.0448
        },
        {
          "time": "10:30",
          "avg_share": 0.032
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
          "avg_share": 0.0208
        },
        {
          "time": "13:30",
          "avg_share": 0.0192
        },
        {
          "time": "14:00",
          "avg_share": 0.0322
        },
        {
          "time": "14:30",
          "avg_share": 0.0325
        },
        {
          "time": "15:00",
          "avg_share": 0.0329
        },
        {
          "time": "15:30",
          "avg_share": 0.0491
        },
        {
          "time": "16:00",
          "avg_share": 0.0446
        },
        {
          "time": "16:30",
          "avg_share": 0.0953
        },
        {
          "time": "17:00",
          "avg_share": 0.1159
        }
      ],
      "peers_hhi_rows": [
        {
          "ticker": "CRPU",
          "auctions_pct": 11.883933426880155,
          "hhi": 0.22369675076210602,
          "interp": {
            "text": "Moderate",
            "cls": "bg-amber-500/20 text-amber-400",
            "you": true
          }
        },
        {
          "ticker": "AU8U",
          "auctions_pct": 13.973376667913797,
          "hhi": 0.1710344342215925,
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
