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
      "ticker": "K6S",
      "name": "Prudential USD",
      "marketCap": 39109352403.0,
      "sector": "Insurance - Life",
      "industry": "Financial Services"
    },
    {
      "ticker": "G07",
      "name": "Great Eastern",
      "marketCap": 14909550673.5,
      "sector": "Insurance - Life",
      "industry": "Financial Services"
    },
    {
      "ticker": "S68",
      "name": "SGX",
      "marketCap": 23940579265.26,
      "sector": "Financial Data & Stock Exchanges",
      "industry": "Financial Services"
    },
    {
      "ticker": "U11",
      "name": "UOB",
      "marketCap": 62311075078.78999,
      "sector": "Banks - Regional",
      "industry": "Financial Services"
    },
    {
      "ticker": "O39",
      "name": "OCBC Bank",
      "marketCap": 104750801725.01,
      "sector": "Banks - Regional",
      "industry": "Financial Services"
    },
    {
      "ticker": "D05",
      "name": "DBS",
      "marketCap": 175596651954.75,
      "sector": "Banks - Regional",
      "industry": "Financial Services"
    },
    {
      "ticker": "CJN",
      "name": "B&M Hldg",
      "marketCap": 16815513.599999998,
      "sector": "Asset Management",
      "industry": "Financial Services"
    },
    {
      "ticker": "8A1",
      "name": "Heptamax",
      "marketCap": 4959099.899,
      "sector": "Asset Management",
      "industry": "Financial Services"
    },
    {
      "ticker": "5QY",
      "name": "Net Pac Hldgs",
      "marketCap": 6833194.2639999995,
      "sector": "Mortgage Finance",
      "industry": "Financial Services"
    }
  ]
};

export const REPORT_DATA: ReportData = {
  "meta": {
    "market": "XSES",
    "currency": "USD",
    "ticker": "K6S",
    "company": "Prudential USD",
    "asof_date": "2026-05-21",
    "industry": "Financial Services",
    "sector": "Insurance - Life",
    "market_cap_display": "39.1B",
    "market_cap_category": "large",
    "universe_total": 556,
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
          "score_pca": 15.287769784172662,
          "score_pca_percentile": 15.287769784172662,
          "rank_pca": 472,
          "total": 556,
          "adv_notional_sgd": 0.0,
          "adv_volume_shares": 0.0,
          "free_float_shares": 2557509480.0,
          "turnover_ratio": 0.0,
          "votes": 0.0,
          "trades": 0.0,
          "spread_pct": 0.12026588344411819,
          "spread_ticks": 194.5,
          "amihud": null,
          "volatility": 0.0
        },
        "pca": {
          "valid": true,
          "window_days": 1,
          "variance_explained": 0.515809142746255,
          "loadings": {
            "log_adv": 0.5538218405643014,
            "log_trades": 0.5070501771585195,
            "log_turnover": 0.5162508298923456,
            "neg_spread": 0.3600420078190272,
            "neg_amihud": 0.04888643009419739,
            "neg_vol": -0.19402689749422766
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
          "peer_median_adv": 26990485.877905626,
          "peer_median_score_pca": 83.18345323741008,
          "peer_median_trades": 3276.0,
          "peer_median_volatility": 0.07695139620836727,
          "peer_median_spread_pct": 0.001202328687722795,
          "peer_median_spread_ticks": 2.39481408525519,
          "peer_median_amihud": 2.4586350028485587e-10,
          "peer_median_turnover_ratio": 0.0006135999752620811,
          "target_vs_peer": {
            "score_pca_delta": -67.9,
            "adv_delta_pct": -100.0,
            "trades_delta_pct": -100.0,
            "volatility_delta_pct": 100.0,
            "spread_pct_delta_pct": -9902.75,
            "spread_ticks_delta_pct": 8021.72,
            "amihud_delta_pct": null,
            "turnover_ratio_delta_pct": -100.0
          }
        },
        "peer_liquidity": [
          {
            "ticker": "K6S",
            "score_pca": 15.287769784172662,
            "rank_pca": 472,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.0,
            "spread_pct": 0.12026588344411819,
            "spread_ticks": 194.5,
            "amihud": null,
            "turnover_ratio": 0.0,
            "is_target": true
          },
          {
            "ticker": "G07",
            "score_pca": 69.42446043165468,
            "rank_pca": 171,
            "adv": 264666.7549136688,
            "trades": 140.0,
            "volatility": 0.04848637819632284,
            "spread_pct": 0.0017452520845322986,
            "spread_ticks": 2.745263157894737,
            "amihud": 7.210565403982253e-09,
            "turnover_ratio": 2.310238232379005e-05,
            "is_target": false
          },
          {
            "ticker": "S68",
            "score_pca": 98.02158273381295,
            "rank_pca": 12,
            "adv": 53716305.00089759,
            "trades": 7323.0,
            "volatility": 0.19790702724968157,
            "spread_pct": 0.0006594052909132915,
            "spread_ticks": 1.4650179277374276,
            "amihud": 4.428402170306939e-10,
            "turnover_ratio": 0.003765491160004007,
            "is_target": false
          },
          {
            "ticker": "U11",
            "score_pca": 96.94244604316546,
            "rank_pca": 18,
            "adv": 70293206.29183201,
            "trades": 6412.0,
            "volatility": 0.07813448109469148,
            "spread_pct": 0.00037943041975162695,
            "spread_ticks": 1.4346749892380541,
            "amihud": 3.7845506418448856e-11,
            "turnover_ratio": 0.001667512852686201,
            "is_target": false
          },
          {
            "ticker": "O39",
            "score_pca": 97.66187050359713,
            "rank_pca": 14,
            "adv": 79216367.09060453,
            "trades": 9944.0,
            "volatility": 0.10633913452158801,
            "spread_pct": 0.0005728844555119491,
            "spread_ticks": 1.3353878434201036,
            "amihud": 4.8886783539017844e-11,
            "turnover_ratio": 0.0011366404509475976,
            "is_target": false
          },
          {
            "ticker": "D05",
            "score_pca": 98.38129496402878,
            "rank_pca": 10,
            "adv": 244844729.30607283,
            "trades": 7507.0,
            "volatility": 0.07576831132204308,
            "spread_pct": 0.0003314123276262361,
            "spread_ticks": 2.044365012615643,
            "amihud": 2.998204693725803e-11,
            "turnover_ratio": 0.0020233590752832876,
            "is_target": false
          },
          {
            "ticker": "CJN",
            "score_pca": 8.093525179856115,
            "rank_pca": 512,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.0,
            "spread_pct": 0.29711751662971175,
            "spread_ticks": 67.0,
            "amihud": null,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "8A1",
            "score_pca": 33.45323741007194,
            "rank_pca": 371,
            "adv": 307.8692794698978,
            "trades": 3.0,
            "volatility": 0.18879059618156308,
            "spread_pct": 0.05806451612903219,
            "spread_ticks": 6.0,
            "amihud": 3.184442951082391e-05,
            "turnover_ratio": 9.055949957656468e-05,
            "is_target": false
          },
          {
            "ticker": "5QY",
            "score_pca": 7.014388489208632,
            "rank_pca": 518,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.0,
            "spread_pct": 0.3184079601990049,
            "spread_ticks": 4.923076923076923,
            "amihud": null,
            "turnover_ratio": 0.0,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Insurance - Life",
          "sector_count": 2,
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
              "mean": 3456972.7456072723,
              "median": 12121.014401998276,
              "min": 0.0,
              "max": 433876377.0174544,
              "p5": 0.0,
              "p95": 13984918.64153724,
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
              "mean": 0.00011083978915455622,
              "median": 1.78726493929314e-08,
              "min": 0.0,
              "max": 0.021565143932144412,
              "p5": 0.0,
              "p95": 7.052095071587682e-05,
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
              "mean": 0.02424318909816142,
              "median": 0.02424318909816142,
              "min": 0.0,
              "max": 0.04848637819632284,
              "p5": 0.002424318909816142,
              "p95": 0.046062059286506696,
              "count": 2
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 132333.3774568344,
              "median": 132333.3774568344,
              "min": 0.0,
              "max": 264666.7549136688,
              "p5": 13233.33774568344,
              "p95": 251433.41716798535,
              "count": 2
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.061005567764325246,
              "median": 0.061005567764325246,
              "min": 0.0017452520845322986,
              "max": 0.12026588344411819,
              "p5": 0.0076712836525115935,
              "p95": 0.11433985187613889,
              "count": 2
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 1.1551191161895024e-05,
              "median": 1.1551191161895024e-05,
              "min": 0.0,
              "max": 2.310238232379005e-05,
              "p5": 1.1551191161895025e-06,
              "p95": 2.1947263207600546e-05,
              "count": 2
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 7.210565403982253e-09,
              "median": 7.210565403982253e-09,
              "min": 7.210565403982253e-09,
              "max": 7.210565403982253e-09,
              "p5": 7.210565403982253e-09,
              "p95": 7.210565403982253e-09,
              "count": 1
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 70.0,
              "median": 70.0,
              "min": 0.0,
              "max": 140.0,
              "p5": 7.0,
              "p95": 133.0,
              "count": 2
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 56041947.78920001,
              "median": 26990485.877905626,
              "min": 0.0,
              "max": 244844729.30607283,
              "p5": 0.0,
              "p95": 186874802.53065884,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 3916.125,
              "median": 3276.0,
              "min": 0.0,
              "max": 9944.0,
              "p5": 0.0,
              "p95": 9091.05,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.08692824107073627,
              "median": 0.07695139620836727,
              "min": 0.0,
              "max": 0.19790702724968157,
              "p5": 0.0,
              "p95": 0.1947162763758401,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.08465979719201053,
              "median": 0.001202328687722795,
              "min": 0.0003314123276262361,
              "max": 0.3184079601990049,
              "p5": 0.0003482186598701229,
              "p95": 0.3109563049497523,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 10.86847323174786,
              "median": 2.39481408525519,
              "min": 1.3353878434201036,
              "max": 67.0,
              "p5": 1.3701383444563864,
              "p95": 45.64999999999996,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 5.3086999384636354e-06,
              "median": 2.4586350028485587e-10,
              "min": 2.998204693725803e-11,
              "max": 3.184442951082391e-05,
              "p5": 3.194791180755573e-11,
              "p95": 2.3885124774468927e-05,
              "count": 6
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.001088333177602681,
              "median": 0.0006135999752620811,
              "min": 0.0,
              "max": 0.003765491160004007,
              "p5": 0.0,
              "p95": 0.0031557449303517542,
              "count": 8
            }
          },
          "returns": {
            "window_days": 1,
            "n_obs": 1,
            "stock": 0.0,
            "market": 0.00015853695362832987,
            "sector": 0.000954198473282375,
            "peers": 0.002284339468227703,
            "vs_market": -0.00015853695362832987,
            "vs_sector": -0.000954198473282375,
            "vs_peers": -0.002284339468227703
          }
        }
      },
      "30d": {
        "label": "1M",
        "window_days": 21,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 21,
          "score_pca": 18.165467625899282,
          "score_pca_percentile": 18.165467625899282,
          "rank_pca": 456,
          "total": 556,
          "adv_notional_sgd": 0.0,
          "adv_volume_shares": 0.0,
          "free_float_shares": 2557509480.0,
          "turnover_ratio": 0.0,
          "votes": 0.0,
          "trades": 0.0,
          "spread_pct": 0.12026588344411819,
          "spread_ticks": 194.5,
          "amihud": 5.158207566813322e-06,
          "volatility": 0.17655260367235795
        },
        "pca": {
          "valid": true,
          "window_days": 21,
          "variance_explained": 0.5282772619407593,
          "loadings": {
            "log_adv": 0.5402695573645024,
            "log_trades": 0.4925347290752883,
            "log_turnover": 0.49075008073456744,
            "neg_spread": 0.4123457123901197,
            "neg_amihud": 0.1523904559746613,
            "neg_vol": 0.17728752550653956
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
          "peer_median_adv": 19383739.806236345,
          "peer_median_score_pca": 85.431654676259,
          "peer_median_trades": 3381.5,
          "peer_median_volatility": 0.1765611968591158,
          "peer_median_spread_pct": 0.0017021613435696688,
          "peer_median_spread_ticks": 2.9497539316984107,
          "peer_median_amihud": 5.2942369818190805e-11,
          "peer_median_turnover_ratio": 0.0007747637062618643,
          "target_vs_peer": {
            "score_pca_delta": -67.27,
            "adv_delta_pct": -100.0,
            "trades_delta_pct": -100.0,
            "volatility_delta_pct": 0.0,
            "spread_pct_delta_pct": -6965.48,
            "spread_ticks_delta_pct": 6493.77,
            "amihud_delta_pct": -9742961.34,
            "turnover_ratio_delta_pct": -100.0
          }
        },
        "peer_liquidity": [
          {
            "ticker": "K6S",
            "score_pca": 18.165467625899282,
            "rank_pca": 456,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.17655260367235795,
            "spread_pct": 0.12026588344411819,
            "spread_ticks": 194.5,
            "amihud": 5.158207566813322e-06,
            "turnover_ratio": 0.0,
            "is_target": true
          },
          {
            "ticker": "G07",
            "score_pca": 72.48201438848922,
            "rank_pca": 154,
            "adv": 332192.4375737394,
            "trades": 96.0,
            "volatility": 0.07553003616196934,
            "spread_pct": 0.0026958876664366664,
            "spread_ticks": 4.206896551724138,
            "amihud": 7.210565403982253e-09,
            "turnover_ratio": 2.890484113999778e-05,
            "is_target": false
          },
          {
            "ticker": "S68",
            "score_pca": 98.38129496402878,
            "rank_pca": 10,
            "adv": 38435287.17489895,
            "trades": 6667.0,
            "volatility": 0.21070153253566803,
            "spread_pct": 0.0007084350207026713,
            "spread_ticks": 1.50475854776172,
            "amihud": 2.5006974243093123e-10,
            "turnover_ratio": 0.0028189990481126744,
            "is_target": false
          },
          {
            "ticker": "U11",
            "score_pca": 99.28057553956835,
            "rank_pca": 5,
            "adv": 78339952.58797465,
            "trades": 7380.0,
            "volatility": 0.1273888818984418,
            "spread_pct": 0.000414702045368233,
            "spread_ticks": 1.535850012667849,
            "amihud": 5.667541991712747e-11,
            "turnover_ratio": 0.0019456413060300567,
            "is_target": false
          },
          {
            "ticker": "O39",
            "score_pca": 99.64028776978418,
            "rank_pca": 3,
            "adv": 105287105.80617546,
            "trades": 11311.0,
            "volatility": 0.20189401804141613,
            "spread_pct": 0.0005549652266777465,
            "spread_ticks": 1.2525122391136305,
            "amihud": 4.9209319719254137e-11,
            "turnover_ratio": 0.0015206225713837308,
            "is_target": false
          },
          {
            "ticker": "D05",
            "score_pca": 100.0,
            "rank_pca": 1,
            "adv": 244844729.30607283,
            "trades": 11954.0,
            "volatility": 0.1561814608557306,
            "spread_pct": 0.0002879945579246963,
            "spread_ticks": 1.6926113116726835,
            "amihud": 1.665186447857312e-11,
            "turnover_ratio": 0.002150418973706386,
            "is_target": false
          },
          {
            "ticker": "CJN",
            "score_pca": 11.33093525179856,
            "rank_pca": 494,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.0,
            "spread_pct": 0.2945736434108527,
            "spread_ticks": 66.5,
            "amihud": 0.0,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "8A1",
            "score_pca": 16.18705035971223,
            "rank_pca": 467,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.196940932862501,
            "spread_pct": 0.15155615696887687,
            "spread_ticks": 16.0,
            "amihud": 1.5922214755411955e-05,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "5QY",
            "score_pca": 10.251798561151078,
            "rank_pca": 500,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.4265029447785349,
            "spread_pct": 0.2807017543859649,
            "spread_ticks": 4.363636363636363,
            "amihud": 0.0,
            "turnover_ratio": 0.0,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Insurance - Life",
          "sector_count": 2,
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
              "mean": 2773681.548649395,
              "median": 15015.329529708302,
              "min": 0.0,
              "max": 244844729.30607283,
              "p5": 0.0,
              "p95": 12368511.719416551,
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
              "mean": 6.007419406269958e-05,
              "median": 1.3301834155430146e-07,
              "min": 0.0,
              "max": 0.010181722726726725,
              "p5": 0.0,
              "p95": 5.5221395915493666e-05,
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
              "mean": 0.12604131991716364,
              "median": 0.12604131991716364,
              "min": 0.07553003616196934,
              "max": 0.17655260367235795,
              "p5": 0.08058116453748877,
              "p95": 0.1715014752968385,
              "count": 2
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 166096.2187868697,
              "median": 166096.2187868697,
              "min": 0.0,
              "max": 332192.4375737394,
              "p5": 16609.62187868697,
              "p95": 315582.8156950524,
              "count": 2
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.06148088555527743,
              "median": 0.06148088555527743,
              "min": 0.0026958876664366664,
              "max": 0.12026588344411819,
              "p5": 0.008574387455320742,
              "p95": 0.11438738365523411,
              "count": 2
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 1.445242056999889e-05,
              "median": 1.445242056999889e-05,
              "min": 0.0,
              "max": 2.890484113999778e-05,
              "p5": 1.445242056999889e-06,
              "p95": 2.745959908299789e-05,
              "count": 2
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 2.582709066108652e-06,
              "median": 2.582709066108652e-06,
              "min": 7.210565403982253e-09,
              "max": 5.158207566813322e-06,
              "p5": 2.6476041547444927e-07,
              "p95": 4.9006577167428545e-06,
              "count": 2
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 48.0,
              "median": 48.0,
              "min": 0.0,
              "max": 96.0,
              "p5": 4.800000000000001,
              "p95": 91.19999999999999,
              "count": 2
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 58404908.41408695,
              "median": 19383739.806236345,
              "min": 0.0,
              "max": 244844729.30607283,
              "p5": 0.0,
              "p95": 195999561.0811087,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 4676.0,
              "median": 3381.5,
              "min": 0.0,
              "max": 11954.0,
              "p5": 0.0,
              "p95": 11728.949999999999,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.17439247589178275,
              "median": 0.1765611968591158,
              "min": 0.0,
              "max": 0.4265029447785349,
              "p5": 0.02643551265668927,
              "p95": 0.3509724504935314,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.09143669241035056,
              "median": 0.0017021613435696688,
              "min": 0.0002879945579246963,
              "max": 0.2945736434108527,
              "p5": 0.0003323421785299342,
              "p95": 0.289718482252142,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 12.132033128322046,
              "median": 2.9497539316984107,
              "min": 1.2525122391136305,
              "max": 66.5,
              "p5": 1.340798447140462,
              "p95": 48.824999999999974,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.99122474089531e-06,
              "median": 5.2942369818190805e-11,
              "min": 0.0,
              "max": 1.5922214755411955e-05,
              "p5": 0.0,
              "p95": 1.0351963288909156e-05,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0010580733425466058,
              "median": 0.0007747637062618643,
              "min": 0.0,
              "max": 0.0028189990481126744,
              "p5": 0.0,
              "p95": 0.002584996022070473,
              "count": 8
            }
          },
          "returns": {
            "window_days": 21,
            "n_obs": 21,
            "stock": 0.026490066225165698,
            "market": 0.00613165413872041,
            "sector": 0.011927699070191311,
            "peers": 0.018406772261001736,
            "vs_market": 0.020358412086445288,
            "vs_sector": 0.014562367154974387,
            "vs_peers": 0.008083293964163962
          }
        }
      },
      "3m": {
        "label": "3M",
        "window_days": 63,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 63,
          "score_pca": 12.589928057553957,
          "score_pca_percentile": 12.589928057553957,
          "rank_pca": 487,
          "total": 556,
          "adv_notional_sgd": 0.0,
          "adv_volume_shares": 0.0,
          "free_float_shares": 2557509480.0,
          "turnover_ratio": 0.0,
          "votes": 0.0,
          "trades": 0.0,
          "spread_pct": 0.282341742027606,
          "spread_ticks": 330.0,
          "amihud": 8.666301769750054e-06,
          "volatility": 0.3919757940637534
        },
        "pca": {
          "valid": true,
          "window_days": 63,
          "variance_explained": 0.5523485752315885,
          "loadings": {
            "log_adv": 0.5257655907562416,
            "log_trades": 0.47553260390225294,
            "log_turnover": 0.4799604667667278,
            "neg_spread": 0.4137280402823922,
            "neg_amihud": 0.2043132479254663,
            "neg_vol": 0.23272825773847572
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
          "peer_median_adv": 21107853.10363185,
          "peer_median_score_pca": 86.33093525179856,
          "peer_median_trades": 3599.5,
          "peer_median_volatility": 0.20362196554168205,
          "peer_median_spread_pct": 0.0018378093061530952,
          "peer_median_spread_ticks": 3.04013143321273,
          "peer_median_amihud": 1.285408443254466e-10,
          "peer_median_turnover_ratio": 0.0008172069686336408,
          "target_vs_peer": {
            "score_pca_delta": -73.74,
            "adv_delta_pct": -100.0,
            "trades_delta_pct": -100.0,
            "volatility_delta_pct": -92.5,
            "spread_pct_delta_pct": -15262.95,
            "spread_ticks_delta_pct": 10754.79,
            "amihud_delta_pct": -6741960.72,
            "turnover_ratio_delta_pct": -100.0
          }
        },
        "peer_liquidity": [
          {
            "ticker": "K6S",
            "score_pca": 12.589928057553957,
            "rank_pca": 487,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.3919757940637534,
            "spread_pct": 0.282341742027606,
            "spread_ticks": 330.0,
            "amihud": 8.666301769750054e-06,
            "turnover_ratio": 0.0,
            "is_target": true
          },
          {
            "ticker": "G07",
            "score_pca": 73.92086330935251,
            "rank_pca": 146,
            "adv": 438632.8284225044,
            "trades": 98.0,
            "volatility": 0.1107533480248261,
            "spread_pct": 0.0029834069922870174,
            "spread_ticks": 4.744186046511628,
            "amihud": 9.568111418449889e-09,
            "turnover_ratio": 3.8360699951595564e-05,
            "is_target": false
          },
          {
            "ticker": "S68",
            "score_pca": 98.7410071942446,
            "rank_pca": 8,
            "adv": 41777073.3788412,
            "trades": 7271.0,
            "volatility": 0.22998030028176208,
            "spread_pct": 0.0006922116200191731,
            "spread_ticks": 1.382996632996633,
            "amihud": 1.9823014872138512e-10,
            "turnover_ratio": 0.003217141279918758,
            "is_target": false
          },
          {
            "ticker": "U11",
            "score_pca": 99.28057553956835,
            "rank_pca": 5,
            "adv": 78339952.58797465,
            "trades": 7101.0,
            "volatility": 0.15150464412561493,
            "spread_pct": 0.0004300501343569074,
            "spread_ticks": 1.5722978112059494,
            "amihud": 4.4588946501100545e-11,
            "turnover_ratio": 0.0019456413060300567,
            "is_target": false
          },
          {
            "ticker": "O39",
            "score_pca": 99.64028776978418,
            "rank_pca": 3,
            "adv": 106841347.7930861,
            "trades": 11222.0,
            "volatility": 0.177263630801602,
            "spread_pct": 0.0005589847546261055,
            "spread_ticks": 1.240571562426798,
            "amihud": 5.885153992950807e-11,
            "turnover_ratio": 0.001596053237315686,
            "is_target": false
          },
          {
            "ticker": "D05",
            "score_pca": 100.0,
            "rank_pca": 1,
            "adv": 223520191.9572383,
            "trades": 11391.0,
            "volatility": 0.14601032946599563,
            "spread_pct": 0.0002805689255457263,
            "spread_ticks": 1.5802628664254597,
            "amihud": 1.665186447857312e-11,
            "turnover_ratio": 0.002018812290583946,
            "is_target": false
          },
          {
            "ticker": "CJN",
            "score_pca": 4.496402877697841,
            "rank_pca": 532,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 1.722356695748313,
            "spread_pct": 0.3896809232858114,
            "spread_ticks": 71.75,
            "amihud": 0.00018977147010684257,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "8A1",
            "score_pca": 20.863309352517987,
            "rank_pca": 441,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.27809006763216526,
            "spread_pct": 0.07017543859649114,
            "spread_ticks": 7.2727272727272725,
            "amihud": 4.486426537625364e-05,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "5QY",
            "score_pca": 11.33093525179856,
            "rank_pca": 494,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.6835025198671654,
            "spread_pct": 0.2879999999999999,
            "spread_ticks": 4.5,
            "amihud": 0.0,
            "turnover_ratio": 0.0,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Insurance - Life",
          "sector_count": 2,
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
              "mean": 2623975.4956422076,
              "median": 10492.48830221793,
              "min": 0.0,
              "max": 223520191.9572383,
              "p5": 0.0,
              "p95": 10840513.947236504,
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
              "mean": 1.7931983720323487e-05,
              "median": 1.7829491227772952e-07,
              "min": 0.0,
              "max": 0.0013481473282232963,
              "p5": 0.0,
              "p95": 3.9416346603725e-05,
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
              "mean": 0.2513645710442897,
              "median": 0.2513645710442897,
              "min": 0.1107533480248261,
              "max": 0.3919757940637534,
              "p5": 0.12481447032677247,
              "p95": 0.377914671761807,
              "count": 2
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 219316.4142112522,
              "median": 219316.4142112522,
              "min": 0.0,
              "max": 438632.8284225044,
              "p5": 21931.641421125223,
              "p95": 416701.1870013792,
              "count": 2
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.1426625745099465,
              "median": 0.1426625745099465,
              "min": 0.0029834069922870174,
              "max": 0.282341742027606,
              "p5": 0.01695132374405297,
              "p95": 0.26837382527584003,
              "count": 2
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 1.9180349975797782e-05,
              "median": 1.9180349975797782e-05,
              "min": 0.0,
              "max": 3.8360699951595564e-05,
              "p5": 1.9180349975797783e-06,
              "p95": 3.644266495401578e-05,
              "count": 2
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 4.337934940584252e-06,
              "median": 4.337934940584252e-06,
              "min": 9.568111418449889e-09,
              "max": 8.666301769750054e-06,
              "p5": 4.4240479433503014e-07,
              "p95": 8.233465086833473e-06,
              "count": 2
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 49.0,
              "median": 49.0,
              "min": 0.0,
              "max": 98.0,
              "p5": 4.9,
              "p95": 93.1,
              "count": 2
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 56364649.81819534,
              "median": 21107853.10363185,
              "min": 0.0,
              "max": 223520191.9572383,
              "p5": 0.0,
              "p95": 182682596.49978495,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 4635.375,
              "median": 3599.5,
              "min": 0.0,
              "max": 11391.0,
              "p5": 0.0,
              "p95": 11331.85,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.4374326919934305,
              "median": 0.20362196554168205,
              "min": 0.1107533480248261,
              "max": 1.722356695748313,
              "p5": 0.12309329152923544,
              "p95": 1.3587577341899109,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.09410019803864217,
              "median": 0.0018378093061530952,
              "min": 0.0002805689255457263,
              "max": 0.3896809232858114,
              "p5": 0.00033288734862963967,
              "p95": 0.3540926001357773,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 11.755380274036717,
              "median": 3.04013143321273,
              "min": 1.240571562426798,
              "max": 71.75,
              "p5": 1.2904203371262402,
              "p95": 49.18295454545451,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 2.9330702739626787e-05,
              "median": 1.285408443254466e-10,
              "min": 0.0,
              "max": 0.00018977147010684257,
              "p5": 5.828152567500592e-12,
              "p95": 0.00013905394845113635,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0011020011017250052,
              "median": 0.0008172069686336408,
              "min": 0.0,
              "max": 0.003217141279918758,
              "p5": 0.0,
              "p95": 0.0027977261336515733,
              "count": 8
            }
          },
          "returns": {
            "window_days": 63,
            "n_obs": 63,
            "stock": 0.10085227272727315,
            "market": 0.008827226270709199,
            "sector": 0.05335483618537684,
            "peers": 0.03231167866077023,
            "vs_market": 0.09202504645656395,
            "vs_sector": 0.04749743654189631,
            "vs_peers": 0.06854059406650292
          }
        }
      },
      "6m": {
        "label": "6M",
        "window_days": 126,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 126,
          "score_pca": 13.848920863309353,
          "score_pca_percentile": 13.848920863309353,
          "rank_pca": 480,
          "total": 556,
          "adv_notional_sgd": 0.0,
          "adv_volume_shares": 0.0,
          "free_float_shares": 2557509480.0,
          "turnover_ratio": 0.0,
          "votes": 0.0,
          "trades": 0.0,
          "spread_pct": 0.24824355971896958,
          "spread_ticks": 270.0,
          "amihud": 8.666301769750054e-06,
          "volatility": 0.28180316518425386
        },
        "pca": {
          "valid": true,
          "window_days": 126,
          "variance_explained": 0.5767298288493887,
          "loadings": {
            "log_adv": 0.5039281232305933,
            "log_trades": 0.4493314646004235,
            "log_turnover": 0.45831896182296683,
            "neg_spread": 0.431907285434688,
            "neg_amihud": 0.2616376516162839,
            "neg_vol": 0.28125299432362205
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
          "peer_median_adv": 18526988.998116616,
          "peer_median_score_pca": 85.43165467625899,
          "peer_median_trades": 3185.5,
          "peer_median_volatility": 0.1894915270601185,
          "peer_median_spread_pct": 0.0016948086966371335,
          "peer_median_spread_ticks": 2.2361511460122396,
          "peer_median_amihud": 1.4503440800386764e-10,
          "peer_median_turnover_ratio": 0.0006970940107161887,
          "target_vs_peer": {
            "score_pca_delta": -71.58,
            "adv_delta_pct": -100.0,
            "trades_delta_pct": -100.0,
            "volatility_delta_pct": -48.72,
            "spread_pct_delta_pct": -14547.29,
            "spread_ticks_delta_pct": 11974.32,
            "amihud_delta_pct": -5975241.91,
            "turnover_ratio_delta_pct": -100.0
          }
        },
        "peer_liquidity": [
          {
            "ticker": "K6S",
            "score_pca": 13.848920863309353,
            "rank_pca": 480,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.28180316518425386,
            "spread_pct": 0.24824355971896958,
            "spread_ticks": 270.0,
            "amihud": 8.666301769750054e-06,
            "turnover_ratio": 0.0,
            "is_target": true
          },
          {
            "ticker": "G07",
            "score_pca": 71.94244604316546,
            "rank_pca": 157,
            "adv": 291003.29525644024,
            "trades": 65.5,
            "volatility": 0.08817685091763638,
            "spread_pct": 0.00269963308239662,
            "spread_ticks": 4.191411238825031,
            "amihud": 8.013596758913284e-09,
            "turnover_ratio": 2.5734979379291704e-05,
            "is_target": false
          },
          {
            "ticker": "S68",
            "score_pca": 98.92086330935251,
            "rank_pca": 7,
            "adv": 36762974.70097679,
            "trades": 6305.5,
            "volatility": 0.21331869446820012,
            "spread_pct": 0.0006899843108776473,
            "spread_ticks": 1.2470985816677582,
            "amihud": 2.1680901111377795e-10,
            "turnover_ratio": 0.0029725787048225974,
            "is_target": false
          },
          {
            "ticker": "U11",
            "score_pca": 99.28057553956835,
            "rank_pca": 5,
            "adv": 76498614.87743162,
            "trades": 6416.5,
            "volatility": 0.15103871148207929,
            "spread_pct": 0.00041677970592465325,
            "spread_ticks": 1.515852593973863,
            "amihud": 4.667280029028049e-11,
            "turnover_ratio": 0.0018910638381753955,
            "is_target": false
          },
          {
            "ticker": "O39",
            "score_pca": 99.64028776978418,
            "rank_pca": 3,
            "adv": 85786265.4692003,
            "trades": 9024.5,
            "volatility": 0.16566435965203685,
            "spread_pct": 0.0005758638870747156,
            "spread_ticks": 1.1994391739190593,
            "amihud": 7.325980489395734e-11,
            "turnover_ratio": 0.0013684530420530856,
            "is_target": false
          },
          {
            "ticker": "D05",
            "score_pca": 100.0,
            "rank_pca": 1,
            "adv": 200126042.41771194,
            "trades": 10264.5,
            "volatility": 0.13318555008307695,
            "spread_pct": 0.00027417717172845547,
            "spread_ticks": 1.5660522920244793,
            "amihud": 2.3087491262602664e-11,
            "turnover_ratio": 0.0017946039556072059,
            "is_target": false
          },
          {
            "ticker": "CJN",
            "score_pca": 0.3597122302158274,
            "rank_pca": 555,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 1.3003378330992528,
            "spread_pct": 1.267605633802817,
            "spread_ticks": 260.0,
            "amihud": 0.0003093982516171937,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "8A1",
            "score_pca": 11.870503597122301,
            "rank_pca": 491,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.5061820619672173,
            "spread_pct": 0.15155615696887687,
            "spread_ticks": 15.166666666666668,
            "amihud": 9.5587628327896e-05,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "5QY",
            "score_pca": 24.640287769784173,
            "rank_pca": 420,
            "adv": 1.2896275986934025,
            "trades": 1.0,
            "volatility": 0.7161731350241078,
            "spread_pct": 0.18181818181818177,
            "spread_ticks": 2.90625,
            "amihud": 0.0,
            "turnover_ratio": 4.1785147058312277e-07,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Insurance - Life",
          "sector_count": 2,
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
              "mean": 2142967.6780890794,
              "median": 9612.180687424972,
              "min": 0.0,
              "max": 200126042.41771194,
              "p5": 0.0,
              "p95": 8835399.295903975,
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
              "mean": 1.2915193888330576e-05,
              "median": 2.0821511656371936e-07,
              "min": 0.0,
              "max": 0.0007648400674744817,
              "p5": 0.0,
              "p95": 4.3935142981989155e-05,
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
              "mean": 0.18499000805094512,
              "median": 0.18499000805094512,
              "min": 0.08817685091763638,
              "max": 0.28180316518425386,
              "p5": 0.09785816663096726,
              "p95": 0.272121849470923,
              "count": 2
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 145501.64762822012,
              "median": 145501.64762822012,
              "min": 0.0,
              "max": 291003.29525644024,
              "p5": 14550.164762822013,
              "p95": 276453.1304936182,
              "count": 2
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.1254715964006831,
              "median": 0.1254715964006831,
              "min": 0.00269963308239662,
              "max": 0.24824355971896958,
              "p5": 0.01497682941422527,
              "p95": 0.23596636338714091,
              "count": 2
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 1.2867489689645852e-05,
              "median": 1.2867489689645852e-05,
              "min": 0.0,
              "max": 2.5734979379291704e-05,
              "p5": 1.2867489689645853e-06,
              "p95": 2.4448230410327116e-05,
              "count": 2
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 4.337157683254484e-06,
              "median": 4.337157683254484e-06,
              "min": 8.013596758913284e-09,
              "max": 8.666301769750054e-06,
              "p5": 4.4092800540847034e-07,
              "p95": 8.233387361100497e-06,
              "count": 2
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 32.75,
              "median": 32.75,
              "min": 0.0,
              "max": 65.5,
              "p5": 3.2750000000000004,
              "p95": 62.224999999999994,
              "count": 2
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 49933112.75627559,
              "median": 18526988.998116616,
              "min": 0.0,
              "max": 200126042.41771194,
              "p5": 0.0,
              "p95": 160107120.4857328,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 4009.6875,
              "median": 3185.5,
              "min": 0.0,
              "max": 10264.5,
              "p5": 0.0,
              "p95": 9830.5,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.4092596495867009,
              "median": 0.1894915270601185,
              "min": 0.08817685091763638,
              "max": 1.3003378330992528,
              "p5": 0.10392989562554059,
              "p95": 1.0958801887729517,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.20070455134348472,
              "median": 0.0016948086966371335,
              "min": 0.00027417717172845547,
              "max": 1.267605633802817,
              "p5": 0.0003240880586971247,
              "p95": 0.887580025608194,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 35.97409631838461,
              "median": 2.2361511460122396,
              "min": 1.1994391739190593,
              "max": 260.0,
              "p5": 1.216119966631104,
              "p95": 174.3083333333332,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 5.0624281671369526e-05,
              "median": 1.4503440800386764e-10,
              "min": 0.0,
              "max": 0.0003093982516171937,
              "p5": 8.080621941910933e-12,
              "p95": 0.0002345645334659394,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0010066065464385198,
              "median": 0.0006970940107161887,
              "min": 0.0,
              "max": 0.0029725787048225974,
              "p5": 0.0,
              "p95": 0.0025940485014960763,
              "count": 8
            }
          },
          "returns": {
            "window_days": 126,
            "n_obs": 126,
            "stock": 0.19230769230769296,
            "market": 0.12010647804296903,
            "sector": 0.11914672221632183,
            "peers": 0.08072894452158308,
            "vs_market": 0.07220121426472392,
            "vs_sector": 0.07316097009137112,
            "vs_peers": 0.11157874778610988
          }
        }
      }
    },
    "period_insights": {
      "1d": {
        "liquidity": "1D score 15.3 vs peer median 83.2 (-67.9 pts).",
        "market_comparison": "The stock was flat on the day while peers rose 0.2%. That leaves little sign of a near-term trading backdrop strong enough to change the liquidity picture."
      },
      "30d": {
        "liquidity": "Monthly tradability is weak, with a 1M liquidity score of 18.2 still far below peer levels. That means access remains meaningfully thinner than the company’s size would suggest.",
        "market_comparison": "The stock returned 2.6% over 1M, ahead of peers at 1.8% and the market at 0.6%. That firmer price backdrop has not translated into peer-level accessibility."
      },
      "3m": {
        "liquidity": "Tradability stayed weak over 3M, with a liquidity score of 12.6 showing no sign of a broader improvement. That suggests access has remained consistently thin over the quarter.",
        "market_comparison": "The stock returned 10.1% over 3M compared with 3.2% for peers. Stronger performance has not closed the gap in trading accessibility."
      },
      "6m": {
        "liquidity": "Six-month tradability is weak, with a liquidity score of 13.8 compared with a peer median of 85.4. That is the clearest sign that access screens well below peers on a structural basis.",
        "market_comparison": "The stock returned 19.2% over 6M compared with 8.1% for peers. Even with stronger performance, liquidity has remained well behind the peer group."
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
      "current_regime": 3,
      "current_regime_label": "Jump / Tail Shock",
      "current_regime_probability": 1.0,
      "current_regime_probability_display": ">99.9%",
      "current_probability_basis": "filtered",
      "historical_probability_basis": "smoothed",
      "current_driver_mix": {
        "market_share": {
          "median": 0.3333333333333333,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "33.3%",
          "display_range": null,
          "display_text": "33.3%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
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
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
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
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "share_pct",
          "value_pct": 33.3,
          "plain_english": "Company-specific explains about 33.3% of price moves in the current state."
        },
        "basis": "current_state"
      },
      "current_sensitivities": {
        "beta_market": {
          "median": 0.0,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "0.00",
          "display_range": null,
          "display_text": "0.00",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "beta",
          "strength_label": "Weak",
          "plain_english": "Weak market link: a 1% market move has lined up with about a 0.00% stock move in the same direction in this state.",
          "value_num": 0.0
        },
        "beta_stock_lag": {
          "median": 0.0,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "0.00",
          "display_range": null,
          "display_text": "0.00",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "lag_beta",
          "value_num": 0.0
        },
        "beta_sector": {
          "median": 0.0,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "0.00",
          "display_range": null,
          "display_text": "0.00",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "beta",
          "strength_label": "Weak",
          "plain_english": "Weak sector link: a 1% sector move has lined up with about a 0.00% stock move in the same direction in this state.",
          "value_num": 0.0
        },
        "beta_market_lag": {
          "median": 0.0,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "0.00",
          "display_range": null,
          "display_text": "0.00",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "lag_beta",
          "value_num": 0.0
        },
        "beta_sector_lag": {
          "median": 0.0,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "0.00",
          "display_range": null,
          "display_text": "0.00",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "lag_beta",
          "value_num": 0.0
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
            "median": 0.8012598111160198,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "80.1%",
            "display_range": null,
            "display_text": "80.1%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 4 trading days.",
            "kind": "share_pct",
            "value_pct": 80.1,
            "plain_english": "Market explains about 80.1% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.8012598111160198,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "80.1%",
              "display_range": null,
              "display_text": "80.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 4 trading days.",
              "kind": "share_pct",
              "value_pct": 80.1,
              "plain_english": "Market explains about 80.1% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.14367154564250653,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "14.4%",
              "display_range": null,
              "display_text": "14.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 4 trading days.",
              "kind": "share_pct",
              "value_pct": 14.4,
              "plain_english": "Sector explains about 14.4% of price moves in the current state."
            },
            "company_share": {
              "median": 0.05506864324147359,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "5.5%",
              "display_range": null,
              "display_text": "5.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 4 trading days.",
              "kind": "share_pct",
              "value_pct": 5.5,
              "plain_english": "Company-specific explains about 5.5% of price moves in the current state."
            }
          },
          "summary": "May: Still clearly market-driven, though based on only 4 trading days."
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
            "median": 0.4712872513816686,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "47.1%",
            "display_range": null,
            "display_text": "47.1%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
            "kind": "share_pct",
            "value_pct": 47.1,
            "plain_english": "Company-specific explains about 47.1% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.24956715672804503,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "25.0%",
              "display_range": null,
              "display_text": "25.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 25.0,
              "plain_english": "Market explains about 25.0% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.27914559189028637,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "27.9%",
              "display_range": null,
              "display_text": "27.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 27.9,
              "plain_english": "Sector explains about 27.9% of price moves in the current state."
            },
            "company_share": {
              "median": 0.4712872513816686,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "47.1%",
              "display_range": null,
              "display_text": "47.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 47.1,
              "plain_english": "Company-specific explains about 47.1% of price moves in the current state."
            }
          },
          "summary": "Jun: Mostly company-driven."
        },
        {
          "month_key": "2025-07",
          "month_label": "July 2025",
          "month_short_label": "Jul",
          "period_label": "2025-07-01 to 2025-07-31",
          "n_obs": 23,
          "partial_month": false,
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.4329206662680639,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "43.3%",
            "display_range": null,
            "display_text": "43.3%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 23 trading days.",
            "kind": "share_pct",
            "value_pct": 43.3,
            "plain_english": "Market explains about 43.3% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.4329206662680639,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "43.3%",
              "display_range": null,
              "display_text": "43.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 23 trading days.",
              "kind": "share_pct",
              "value_pct": 43.3,
              "plain_english": "Market explains about 43.3% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.391538344233002,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "39.2%",
              "display_range": null,
              "display_text": "39.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 23 trading days.",
              "kind": "share_pct",
              "value_pct": 39.2,
              "plain_english": "Sector explains about 39.2% of price moves in the current state."
            },
            "company_share": {
              "median": 0.17554098949893418,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "17.6%",
              "display_range": null,
              "display_text": "17.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 23 trading days.",
              "kind": "share_pct",
              "value_pct": 17.6,
              "plain_english": "Company-specific explains about 17.6% of price moves in the current state."
            }
          },
          "summary": "Jul: More mixed, though market-driven still has the largest share."
        },
        {
          "month_key": "2025-08",
          "month_label": "August 2025",
          "month_short_label": "Aug",
          "period_label": "2025-08-01 to 2025-08-29",
          "n_obs": 21,
          "partial_month": false,
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
            "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
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
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
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
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
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
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 33.3,
              "plain_english": "Company-specific explains about 33.3% of price moves in the current state."
            }
          },
          "summary": "Aug: Much more balanced across company, sector, and market factors."
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
            "median": 0.5251771335594325,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "52.5%",
            "display_range": null,
            "display_text": "52.5%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
            "kind": "share_pct",
            "value_pct": 52.5,
            "plain_english": "Company-specific explains about 52.5% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.2465806200480266,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "24.7%",
              "display_range": null,
              "display_text": "24.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 24.7,
              "plain_english": "Market explains about 24.7% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.22824224639254073,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "22.8%",
              "display_range": null,
              "display_text": "22.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 22.8,
              "plain_english": "Sector explains about 22.8% of price moves in the current state."
            },
            "company_share": {
              "median": 0.5251771335594325,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "52.5%",
              "display_range": null,
              "display_text": "52.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 52.5,
              "plain_english": "Company-specific explains about 52.5% of price moves in the current state."
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
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.47300268261199785,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "47.3%",
            "display_range": null,
            "display_text": "47.3%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
            "kind": "share_pct",
            "value_pct": 47.3,
            "plain_english": "Market explains about 47.3% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.47300268261199785,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "47.3%",
              "display_range": null,
              "display_text": "47.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 47.3,
              "plain_english": "Market explains about 47.3% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.28048721744805594,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "28.0%",
              "display_range": null,
              "display_text": "28.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 28.0,
              "plain_english": "Sector explains about 28.0% of price moves in the current state."
            },
            "company_share": {
              "median": 0.24651009993994616,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "24.7%",
              "display_range": null,
              "display_text": "24.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 24.7,
              "plain_english": "Company-specific explains about 24.7% of price moves in the current state."
            }
          },
          "summary": "Oct: Mostly market-driven."
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
            "median": 0.45704172485967764,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "45.7%",
            "display_range": null,
            "display_text": "45.7%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
            "kind": "share_pct",
            "value_pct": 45.7,
            "plain_english": "Market explains about 45.7% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.45704172485967764,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "45.7%",
              "display_range": null,
              "display_text": "45.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 45.7,
              "plain_english": "Market explains about 45.7% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.19744619810304867,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "19.7%",
              "display_range": null,
              "display_text": "19.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 19.7,
              "plain_english": "Sector explains about 19.7% of price moves in the current state."
            },
            "company_share": {
              "median": 0.34551207703727377,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "34.6%",
              "display_range": null,
              "display_text": "34.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 34.6,
              "plain_english": "Company-specific explains about 34.6% of price moves in the current state."
            }
          },
          "summary": "Nov: Mostly market-driven."
        },
        {
          "month_key": "2025-12",
          "month_label": "December 2025",
          "month_short_label": "Dec",
          "period_label": "2025-12-01 to 2025-12-31",
          "n_obs": 22,
          "partial_month": false,
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.3638967687748571,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "36.4%",
            "display_range": null,
            "display_text": "36.4%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
            "kind": "share_pct",
            "value_pct": 36.4,
            "plain_english": "Market explains about 36.4% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.3638967687748571,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "36.4%",
              "display_range": null,
              "display_text": "36.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 36.4,
              "plain_english": "Market explains about 36.4% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.27759210624020475,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "27.8%",
              "display_range": null,
              "display_text": "27.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 27.8,
              "plain_english": "Sector explains about 27.8% of price moves in the current state."
            },
            "company_share": {
              "median": 0.3585111249849382,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "35.9%",
              "display_range": null,
              "display_text": "35.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 35.9,
              "plain_english": "Company-specific explains about 35.9% of price moves in the current state."
            }
          },
          "summary": "Dec: Much more balanced across company, sector, and market factors."
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
            "median": 0.6740837909943584,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "67.4%",
            "display_range": null,
            "display_text": "67.4%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
            "kind": "share_pct",
            "value_pct": 67.4,
            "plain_english": "Company-specific explains about 67.4% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.13138401170565542,
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
              "plain_english": "Market explains about 13.1% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.194532197299986,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "19.5%",
              "display_range": null,
              "display_text": "19.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 19.5,
              "plain_english": "Sector explains about 19.5% of price moves in the current state."
            },
            "company_share": {
              "median": 0.6740837909943584,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "67.4%",
              "display_range": null,
              "display_text": "67.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 67.4,
              "plain_english": "Company-specific explains about 67.4% of price moves in the current state."
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
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.47461420274641536,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "47.5%",
            "display_range": null,
            "display_text": "47.5%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
            "kind": "share_pct",
            "value_pct": 47.5,
            "plain_english": "Market explains about 47.5% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.47461420274641536,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "47.5%",
              "display_range": null,
              "display_text": "47.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
              "kind": "share_pct",
              "value_pct": 47.5,
              "plain_english": "Market explains about 47.5% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.3127047871140637,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "31.3%",
              "display_range": null,
              "display_text": "31.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
              "kind": "share_pct",
              "value_pct": 31.3,
              "plain_english": "Sector explains about 31.3% of price moves in the current state."
            },
            "company_share": {
              "median": 0.21268101013952107,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "21.3%",
              "display_range": null,
              "display_text": "21.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
              "kind": "share_pct",
              "value_pct": 21.3,
              "plain_english": "Company-specific explains about 21.3% of price moves in the current state."
            }
          },
          "summary": "Feb: Mostly market-driven."
        },
        {
          "month_key": "2026-03",
          "month_label": "March 2026",
          "month_short_label": "Mar",
          "period_label": "2026-03-02 to 2026-03-31",
          "n_obs": 22,
          "partial_month": false,
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.48325313249380314,
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
            "plain_english": "Market explains about 48.3% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.48325313249380314,
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
              "plain_english": "Market explains about 48.3% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.3140983893822498,
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
              "plain_english": "Sector explains about 31.4% of price moves in the current state."
            },
            "company_share": {
              "median": 0.20264847812394698,
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
              "plain_english": "Company-specific explains about 20.3% of price moves in the current state."
            }
          },
          "summary": "Mar: Mostly market-driven."
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
            "median": 0.5483280295156168,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "54.8%",
            "display_range": null,
            "display_text": "54.8%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
            "kind": "share_pct",
            "value_pct": 54.8,
            "plain_english": "Company-specific explains about 54.8% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.09847505234815228,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "9.8%",
              "display_range": null,
              "display_text": "9.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 9.8,
              "plain_english": "Market explains about 9.8% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.35319691813623094,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "35.3%",
              "display_range": null,
              "display_text": "35.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 35.3,
              "plain_english": "Sector explains about 35.3% of price moves in the current state."
            },
            "company_share": {
              "median": 0.5483280295156168,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "54.8%",
              "display_range": null,
              "display_text": "54.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 54.8,
              "plain_english": "Company-specific explains about 54.8% of price moves in the current state."
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
            "median": 0.5894545198102372,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "58.9%",
            "display_range": null,
            "display_text": "58.9%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 14 trading days.",
            "kind": "share_pct",
            "value_pct": 58.9,
            "plain_english": "Company-specific explains about 58.9% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.10578219767195468,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "10.6%",
              "display_range": null,
              "display_text": "10.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 14 trading days.",
              "kind": "share_pct",
              "value_pct": 10.6,
              "plain_english": "Market explains about 10.6% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.3047632825178081,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "30.5%",
              "display_range": null,
              "display_text": "30.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 14 trading days.",
              "kind": "share_pct",
              "value_pct": 30.5,
              "plain_english": "Sector explains about 30.5% of price moves in the current state."
            },
            "company_share": {
              "median": 0.5894545198102372,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "58.9%",
              "display_range": null,
              "display_text": "58.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 14 trading days.",
              "kind": "share_pct",
              "value_pct": 58.9,
              "plain_english": "Company-specific explains about 58.9% of price moves in the current state."
            }
          },
          "summary": "May: Mostly company-driven."
        }
      ],
      "regimes": [
        {
          "id": 0,
          "label": "Calm / Liquid",
          "pct_time": 0.4692672283366288,
          "expected_duration_days": 11.757590239965761,
          "current_probability": 0.0,
          "current_probability_display": "<0.1%",
          "current_probability_basis": "filtered",
          "n_days_effective": 117.78607431249384,
          "volatility": {
            "median": 0.0,
            "low": 0.0,
            "high": 0.0
          },
          "volatility_label": "Calm / Liquid",
          "jump_probability": 0.171227307322685,
          "jump_rate": 0.05100522729574931,
          "risk_score": 0.11501611171006272,
          "metrics": {
            "rolling_vol_10d": 0.0017011173689188111,
            "downside_vol_10d": 3.117461939623089e-76,
            "drawdown_21d": 0.0,
            "amihud_stress": 0.0,
            "spread_rel": 2588.7514958117818,
            "spread_ticks": 309.29166666666305,
            "log_notional": 0.0,
            "log_trade_count": 0.0
          }
        },
        {
          "id": 1,
          "label": "Normal / Active",
          "pct_time": 0.1163799579332904,
          "expected_duration_days": 7.282490969707822,
          "current_probability": 0.0,
          "current_probability_display": "<0.1%",
          "current_probability_basis": "filtered",
          "n_days_effective": 29.21136944125589,
          "volatility": {
            "median": 0.0,
            "low": 0.0,
            "high": 0.0
          },
          "volatility_label": "Normal / Active",
          "jump_probability": 0.24621992518271227,
          "jump_rate": 0.1366687097736864,
          "risk_score": 0.2324376071000575,
          "metrics": {
            "rolling_vol_10d": 0.002874449756165014,
            "downside_vol_10d": 3.516153141685354e-114,
            "drawdown_21d": 0.03598381002717549,
            "amihud_stress": 0.0,
            "spread_rel": 2588.7514958117276,
            "spread_ticks": 309.29166666666663,
            "log_notional": 0.0,
            "log_trade_count": 0.0
          }
        },
        {
          "id": 2,
          "label": "Stressed / Illiquid",
          "pct_time": 0.23905400894920317,
          "expected_duration_days": 4.615184640105157,
          "current_probability": 1.5268723657189876e-158,
          "current_probability_display": "<0.1%",
          "current_probability_basis": "filtered",
          "n_days_effective": 60.002556246249995,
          "volatility": {
            "median": 0.0,
            "low": 0.0,
            "high": 0.0
          },
          "volatility_label": "Stressed / Illiquid",
          "jump_probability": 0.21353318589050888,
          "jump_rate": 0.06666406542317957,
          "risk_score": 0.30691928425917786,
          "metrics": {
            "rolling_vol_10d": 0.01502366815284167,
            "downside_vol_10d": 8.783730810203872e-06,
            "drawdown_21d": 5.959400812742467e-162,
            "amihud_stress": 0.0,
            "spread_rel": 2733.503441519726,
            "spread_ticks": 354.2956040150937,
            "log_notional": 0.0,
            "log_trade_count": 0.0
          }
        },
        {
          "id": 3,
          "label": "Jump / Tail Shock",
          "pct_time": 0.17529880478087762,
          "expected_duration_days": 2.6912039925140947,
          "current_probability": 1.0,
          "current_probability_display": ">99.9%",
          "current_probability_basis": "filtered",
          "n_days_effective": 44.000000000000284,
          "volatility": {
            "median": 0.059735019649955395,
            "low": 0.059735019649955395,
            "high": 0.059735019649955395
          },
          "volatility_label": "Jump / Tail Shock",
          "jump_probability": 0.5035623760209423,
          "jump_rate": 0.4318181818181853,
          "risk_score": 0.8451057090364921,
          "metrics": {
            "rolling_vol_10d": 0.03900699922049957,
            "downside_vol_10d": 0.016933052795059845,
            "drawdown_21d": 0.03246150530220364,
            "amihud_stress": 2.840700238748587,
            "spread_rel": 2029.8263958506063,
            "spread_ticks": 242.84433596706376,
            "log_notional": 4.763784736637916,
            "log_trade_count": 0.541895277383432
          }
        }
      ],
      "transitions": {
        "mean": [
          [
            0.9149485583703322,
            8.531320870994013e-05,
            0.008566861013485345,
            0.0763992674074726
          ],
          [
            0.10255616210945966,
            0.8626843474081066,
            0.03441072271914731,
            0.0003487677632864614
          ],
          [
            0.0666882869228059,
            0.03342636807664683,
            0.7833239451981676,
            0.11656139980237962
          ],
          [
            0.06974518533702813,
            0.04659249110271183,
            0.2552432229575629,
            0.628419100602697
          ]
        ],
        "low": [],
        "high": [],
        "counts": [
          [
            108.0,
            0.0,
            1.0,
            9.0
          ],
          [
            3.0,
            25.0,
            1.0,
            0.0
          ],
          [
            4.0,
            2.0,
            47.0,
            7.0
          ],
          [
            3.0,
            2.0,
            11.0,
            27.0
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
          "probability": 0.0,
          "probability_display": "<0.1%",
          "basis": "filtered"
        },
        {
          "id": 2,
          "label": "Stressed / Illiquid",
          "probability": 1.5268723657189876e-158,
          "probability_display": "<0.1%",
          "basis": "filtered"
        },
        {
          "id": 3,
          "label": "Jump / Tail Shock",
          "probability": 1.0,
          "probability_display": ">99.9%",
          "basis": "filtered"
        }
      ],
      "jump_risk": {
        "current_probability": 0.5035623760209423,
        "current_score": 0.0,
        "current_flag": true,
        "jump_threshold_score": 2.5,
        "method": "robust_residual_and_return_jump_overlay",
        "model_definition": "jump_score_feature_overlay"
      },
      "model_selection": {
        "chosen": 4,
        "criterion": "bic_with_min_state_support",
        "bic": 999.3275900903659,
        "loglik": 28.016960641902436,
        "n_params": 191,
        "bic_delta_vs_next_best": 1140.696408082983,
        "candidates": [
          {
            "k": 2,
            "valid": true,
            "reason": "ok",
            "bic": 5400.979565129972,
            "loglik": -2449.0816738344897,
            "n_params": 91,
            "converged": true,
            "iterations": 7,
            "best_seed": 42,
            "seed_runs": [
              {
                "seed": 42,
                "k": 2,
                "valid": true,
                "reason": "ok",
                "bic": 5400.979565129972,
                "loglik": -2449.0816738344897,
                "n_params": 91,
                "converged": true,
                "iterations": 7
              },
              {
                "seed": 1337,
                "k": 2,
                "valid": true,
                "reason": "ok",
                "bic": 5400.979565129972,
                "loglik": -2449.0816738344897,
                "n_params": 91,
                "converged": true,
                "iterations": 7
              },
              {
                "seed": 2027,
                "k": 2,
                "valid": true,
                "reason": "ok",
                "bic": 5400.979565129972,
                "loglik": -2449.0816738344897,
                "n_params": 91,
                "converged": true,
                "iterations": 7
              }
            ]
          },
          {
            "k": 3,
            "valid": true,
            "reason": "ok",
            "bic": 2140.023998173349,
            "loglik": -683.2302933474497,
            "n_params": 140,
            "converged": true,
            "iterations": 10,
            "best_seed": 1337,
            "seed_runs": [
              {
                "seed": 42,
                "k": 3,
                "valid": true,
                "reason": "ok",
                "bic": 2140.023998173355,
                "loglik": -683.2302933474525,
                "n_params": 140,
                "converged": true,
                "iterations": 10
              },
              {
                "seed": 1337,
                "k": 3,
                "valid": true,
                "reason": "ok",
                "bic": 2140.023998173349,
                "loglik": -683.2302933474497,
                "n_params": 140,
                "converged": true,
                "iterations": 10
              },
              {
                "seed": 2027,
                "k": 3,
                "valid": true,
                "reason": "ok",
                "bic": 2140.023998173509,
                "loglik": -683.2302933475297,
                "n_params": 140,
                "converged": true,
                "iterations": 8
              }
            ]
          },
          {
            "k": 4,
            "valid": true,
            "reason": "ok",
            "bic": 999.3275900903659,
            "loglik": 28.016960641902436,
            "n_params": 191,
            "converged": true,
            "iterations": 17,
            "best_seed": 1337,
            "seed_runs": [
              {
                "seed": 42,
                "k": 4,
                "valid": true,
                "reason": "ok",
                "bic": 1278.9160597035984,
                "loglik": -111.77727416471379,
                "n_params": 191,
                "converged": true,
                "iterations": 36
              },
              {
                "seed": 1337,
                "k": 4,
                "valid": true,
                "reason": "ok",
                "bic": 999.3275900903659,
                "loglik": 28.016960641902436,
                "n_params": 191,
                "converged": true,
                "iterations": 17
              },
              {
                "seed": 2027,
                "k": 4,
                "valid": true,
                "reason": "ok",
                "bic": 1242.333419760028,
                "loglik": -93.48595419292865,
                "n_params": 191,
                "converged": true,
                "iterations": 48
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
              "bic": 1278.9160597035984,
              "valid": true,
              "reason": null
            },
            {
              "seed": 1337,
              "selected_states": 4,
              "bic": 999.3275900903659,
              "valid": true,
              "reason": null
            },
            {
              "seed": 2027,
              "selected_states": 4,
              "bic": 1242.333419760028,
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
                "2": 3394.884614830317,
                "3": 1933.6322783321557,
                "4": 1405.6624999135852
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
                "2": 5453.543181034125,
                "3": 3074.0315082692023,
                "4": 2468.1163329681212
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
                "2": 5400.979565129972,
                "3": 2140.023998173355,
                "4": 1278.9160597035984
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
        "bic_delta_vs_next_best": 1140.696408082983,
        "state_count_interpretation": "251 observations allowed the current rule to test up to 4 states; BIC preferred 4 with a 1140.70 improvement versus the next best valid state count.",
        "parameter_count": {
          "formula": "k^2 - 1 + 2*k*d",
          "n_parameters": 191,
          "observations_per_parameter": 1.3141361256544504,
          "parameter_pressure_label": "parameter_heavy"
        },
        "state_occupancy": {
          "min_effective_days_required": 7.529999999999999,
          "min_effective_days_observed": 29.21136944125589,
          "passes": true,
          "states": [
            {
              "id": 0,
              "label": "Calm / Liquid",
              "effective_days": 117.78607431249384,
              "pct_time": 0.4692672283366288,
              "passes_min_support": true
            },
            {
              "id": 1,
              "label": "Normal / Active",
              "effective_days": 29.21136944125589,
              "pct_time": 0.1163799579332904,
              "passes_min_support": true
            },
            {
              "id": 2,
              "label": "Stressed / Illiquid",
              "effective_days": 60.002556246249995,
              "pct_time": 0.23905400894920317,
              "passes_min_support": true
            },
            {
              "id": 3,
              "label": "Jump / Tail Shock",
              "effective_days": 44.000000000000284,
              "pct_time": 0.17529880478087762,
              "passes_min_support": true
            }
          ]
        },
        "transition_diagnostics": {
          "self_transition_probabilities": [
            0.9149485583703322,
            0.8626843474081066,
            0.7833239451981676,
            0.628419100602697
          ],
          "expected_duration_days": [
            11.757590239965761,
            7.282490969707822,
            4.615184640105157,
            2.6912039925140947
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
              "bic": 1278.9160597035984,
              "valid": true,
              "reason": null
            },
            {
              "seed": 1337,
              "selected_states": 4,
              "bic": 999.3275900903659,
              "valid": true,
              "reason": null
            },
            {
              "seed": 2027,
              "selected_states": 4,
              "bic": 1242.333419760028,
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
                "2": 3394.884614830317,
                "3": 1933.6322783321557,
                "4": 1405.6624999135852
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
                "2": 5453.543181034125,
                "3": 3074.0315082692023,
                "4": 2468.1163329681212
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
                "2": 5400.979565129972,
                "3": 2140.023998173355,
                "4": 1278.9160597035984
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
            "risk_score": 0.11501611171006272,
            "jump_probability": 0.171227307322685,
            "jump_rate": 0.05100522729574931,
            "rolling_vol_10d": 0.0017011173689188111,
            "downside_vol_10d": 3.117461939623089e-76,
            "drawdown_21d": 0.0,
            "amihud_stress": 0.0,
            "spread_rel": 2588.7514958117818,
            "spread_ticks": 309.29166666666305,
            "log_notional": 0.0,
            "log_trade_count": 0.0
          },
          {
            "id": 1,
            "label": "Normal / Active",
            "risk_score": 0.2324376071000575,
            "jump_probability": 0.24621992518271227,
            "jump_rate": 0.1366687097736864,
            "rolling_vol_10d": 0.002874449756165014,
            "downside_vol_10d": 3.516153141685354e-114,
            "drawdown_21d": 0.03598381002717549,
            "amihud_stress": 0.0,
            "spread_rel": 2588.7514958117276,
            "spread_ticks": 309.29166666666663,
            "log_notional": 0.0,
            "log_trade_count": 0.0
          },
          {
            "id": 2,
            "label": "Stressed / Illiquid",
            "risk_score": 0.30691928425917786,
            "jump_probability": 0.21353318589050888,
            "jump_rate": 0.06666406542317957,
            "rolling_vol_10d": 0.01502366815284167,
            "downside_vol_10d": 8.783730810203872e-06,
            "drawdown_21d": 5.959400812742467e-162,
            "amihud_stress": 0.0,
            "spread_rel": 2733.503441519726,
            "spread_ticks": 354.2956040150937,
            "log_notional": 0.0,
            "log_trade_count": 0.0
          },
          {
            "id": 3,
            "label": "Jump / Tail Shock",
            "risk_score": 0.8451057090364921,
            "jump_probability": 0.5035623760209423,
            "jump_rate": 0.4318181818181853,
            "rolling_vol_10d": 0.03900699922049957,
            "downside_vol_10d": 0.016933052795059845,
            "drawdown_21d": 0.03246150530220364,
            "amihud_stress": 2.840700238748587,
            "spread_rel": 2029.8263958506063,
            "spread_ticks": 242.84433596706376,
            "log_notional": 4.763784736637916,
            "log_trade_count": 0.541895277383432
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
          "state": 2,
          "probabilities": [
            0.0,
            0.0,
            1.0,
            1.5795732868938306e-19
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            0.0,
            0.0,
            1.0,
            4.847602081192223e-19
          ],
          "jump_probability": 0.0746646494730258,
          "jump_score": 0.06117437731757511
        },
        {
          "trade_date": "2026-05-11",
          "state": 2,
          "probabilities": [
            0.0,
            0.0,
            1.0,
            2.173158212694859e-19
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            0.0,
            0.0,
            1.0,
            6.6692735069835e-19
          ],
          "jump_probability": 0.28399936057162695,
          "jump_score": 1.4459051535945058
        },
        {
          "trade_date": "2026-05-12",
          "state": 2,
          "probabilities": [
            0.0,
            0.0,
            1.0,
            3.5581720401382885e-20
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            0.0,
            0.0,
            1.0,
            1.0919785951137185e-19
          ],
          "jump_probability": 0.1319297461021083,
          "jump_score": 0.6117364394338594
        },
        {
          "trade_date": "2026-05-13",
          "state": 2,
          "probabilities": [
            0.0,
            0.0,
            1.0,
            4.076639764542286e-17
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            0.0,
            0.0,
            1.0,
            7.561495775500098e-18
          ],
          "jump_probability": 0.32615124734332473,
          "jump_score": 1.619004816989435
        },
        {
          "trade_date": "2026-05-14",
          "state": 3,
          "probabilities": [
            0.0,
            0.0,
            0.0,
            1.0
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            0.0,
            0.0,
            0.0,
            1.0
          ],
          "jump_probability": 0.9974539622177891,
          "jump_score": 7.441884917110641
        },
        {
          "trade_date": "2026-05-15",
          "state": 3,
          "probabilities": [
            0.0,
            0.0,
            1.0491568210550258e-160,
            1.0
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            0.0,
            0.0,
            5.6563338034409626e-160,
            1.0
          ],
          "jump_probability": 0.09024845277132695,
          "jump_score": 0.240778187868417
        },
        {
          "trade_date": "2026-05-18",
          "state": 3,
          "probabilities": [
            0.0,
            0.0,
            2.43032477204217e-159,
            1.0
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            0.0,
            0.0,
            1.3102643842716558e-158,
            1.0
          ],
          "jump_probability": 0.09877004195342148,
          "jump_score": 0.3274207732851242
        },
        {
          "trade_date": "2026-05-19",
          "state": 3,
          "probabilities": [
            0.0,
            0.0,
            4.39975652102775e-166,
            1.0
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            0.0,
            0.0,
            2.3720468701497175e-165,
            1.0
          ],
          "jump_probability": 0.7044872256048451,
          "jump_score": 3.005441854721312
        },
        {
          "trade_date": "2026-05-20",
          "state": 3,
          "probabilities": [
            0.0,
            0.0,
            1.0285430306715142e-159,
            1.0
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            0.0,
            0.0,
            5.545198387816196e-159,
            1.0
          ],
          "jump_probability": 0.2200628646818249,
          "jump_score": 1.149739072520063
        },
        {
          "trade_date": "2026-05-21",
          "state": 3,
          "probabilities": [
            0.0,
            0.0,
            1.5268723657189876e-158,
            1.0
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            0.0,
            0.0,
            1.5268723657189876e-158,
            1.0
          ],
          "jump_probability": 0.06994724469321749,
          "jump_score": 0.0
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
        "market_link_display": "0.00",
        "sector_link_display": "0.00",
        "market_link_explainer": "Weak market link. A 1% market move has lined up with about a 0.00% stock move in the same direction in this state. This is a point estimate from 251 trading days.",
        "sector_link_explainer": "Weak sector link. A 1% sector move has lined up with about a 0.00% stock move in the same direction in this state. This is a point estimate from 251 trading days.",
        "stock_persistence_display": "0.00",
        "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
        "history_limited_note": "Read is based on 251 trading days versus the 252-day target."
      },
      "current_summary": {
        "regime_label": "Jump / Tail Shock",
        "dominant_driver": "market",
        "dominant_driver_label": "Market",
        "driver_share_pct": 33.3,
        "driver_share_display": "33.3%",
        "confidence_label": "High, limited history",
        "confidence_pct": 99.9,
        "confidence_display": ">99.9%",
        "probability_basis": "filtered",
        "display_confidence_pct": null,
        "confidence_note": "Based on 251 trading days relative to the 252-day target.",
        "history_days": 251,
        "history_limited": true,
        "volatility_label": "Jump / Tail Shock",
        "jump_risk_label": "Elevated",
        "jump_risk_probability": 50.4,
        "jump_risk_score": 0.0,
        "jump_risk_note": "Jump risk is elevated based on recent residual and return shocks.",
        "lead_signal_text": "No stable lead signal.",
        "state_term": "state",
        "stay_probability": 0.628419100602697,
        "effective_days": 44.0,
        "persistence_note": "This state looks more persistent, with a typical run length of about 2.7 days.",
        "expected_duration_days": 2.7
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
          "pct_time": 0.4692672283366288,
          "expected_duration_days": 11.757590239965761,
          "current_probability": 0.0,
          "current_probability_display": "<0.1%",
          "current_probability_basis": "filtered",
          "n_days_effective": 117.78607431249384,
          "volatility": {
            "median": 0.0,
            "low": 0.0,
            "high": 0.0
          },
          "volatility_label": "Calm / Liquid",
          "jump_probability": 0.171227307322685,
          "jump_rate": 0.05100522729574931,
          "risk_score": 0.11501611171006272,
          "metrics": {
            "rolling_vol_10d": 0.0017011173689188111,
            "downside_vol_10d": 3.117461939623089e-76,
            "drawdown_21d": 0.0,
            "amihud_stress": 0.0,
            "spread_rel": 2588.7514958117818,
            "spread_ticks": 309.29166666666305,
            "log_notional": 0.0,
            "log_trade_count": 0.0
          }
        },
        {
          "id": 1,
          "label": "Normal / Active",
          "pct_time": 0.1163799579332904,
          "expected_duration_days": 7.282490969707822,
          "current_probability": 0.0,
          "current_probability_display": "<0.1%",
          "current_probability_basis": "filtered",
          "n_days_effective": 29.21136944125589,
          "volatility": {
            "median": 0.0,
            "low": 0.0,
            "high": 0.0
          },
          "volatility_label": "Normal / Active",
          "jump_probability": 0.24621992518271227,
          "jump_rate": 0.1366687097736864,
          "risk_score": 0.2324376071000575,
          "metrics": {
            "rolling_vol_10d": 0.002874449756165014,
            "downside_vol_10d": 3.516153141685354e-114,
            "drawdown_21d": 0.03598381002717549,
            "amihud_stress": 0.0,
            "spread_rel": 2588.7514958117276,
            "spread_ticks": 309.29166666666663,
            "log_notional": 0.0,
            "log_trade_count": 0.0
          }
        },
        {
          "id": 2,
          "label": "Stressed / Illiquid",
          "pct_time": 0.23905400894920317,
          "expected_duration_days": 4.615184640105157,
          "current_probability": 1.5268723657189876e-158,
          "current_probability_display": "<0.1%",
          "current_probability_basis": "filtered",
          "n_days_effective": 60.002556246249995,
          "volatility": {
            "median": 0.0,
            "low": 0.0,
            "high": 0.0
          },
          "volatility_label": "Stressed / Illiquid",
          "jump_probability": 0.21353318589050888,
          "jump_rate": 0.06666406542317957,
          "risk_score": 0.30691928425917786,
          "metrics": {
            "rolling_vol_10d": 0.01502366815284167,
            "downside_vol_10d": 8.783730810203872e-06,
            "drawdown_21d": 5.959400812742467e-162,
            "amihud_stress": 0.0,
            "spread_rel": 2733.503441519726,
            "spread_ticks": 354.2956040150937,
            "log_notional": 0.0,
            "log_trade_count": 0.0
          }
        },
        {
          "id": 3,
          "label": "Jump / Tail Shock",
          "pct_time": 0.17529880478087762,
          "expected_duration_days": 2.6912039925140947,
          "current_probability": 1.0,
          "current_probability_display": ">99.9%",
          "current_probability_basis": "filtered",
          "n_days_effective": 44.000000000000284,
          "volatility": {
            "median": 0.059735019649955395,
            "low": 0.059735019649955395,
            "high": 0.059735019649955395
          },
          "volatility_label": "Jump / Tail Shock",
          "jump_probability": 0.5035623760209423,
          "jump_rate": 0.4318181818181853,
          "risk_score": 0.8451057090364921,
          "metrics": {
            "rolling_vol_10d": 0.03900699922049957,
            "downside_vol_10d": 0.016933052795059845,
            "drawdown_21d": 0.03246150530220364,
            "amihud_stress": 2.840700238748587,
            "spread_rel": 2029.8263958506063,
            "spread_ticks": 242.84433596706376,
            "log_notional": 4.763784736637916,
            "log_trade_count": 0.541895277383432
          }
        }
      ],
      "transitions": [
        [
          0.9149485583703322,
          8.531320870994013e-05,
          0.008566861013485345,
          0.0763992674074726
        ],
        [
          0.10255616210945966,
          0.8626843474081066,
          0.03441072271914731,
          0.0003487677632864614
        ],
        [
          0.0666882869228059,
          0.03342636807664683,
          0.7833239451981676,
          0.11656139980237962
        ],
        [
          0.06974518533702813,
          0.04659249110271183,
          0.2552432229575629,
          0.628419100602697
        ]
      ],
      "transition_intervals": {
        "mean": [
          [
            0.9149485583703322,
            8.531320870994013e-05,
            0.008566861013485345,
            0.0763992674074726
          ],
          [
            0.10255616210945966,
            0.8626843474081066,
            0.03441072271914731,
            0.0003487677632864614
          ],
          [
            0.0666882869228059,
            0.03342636807664683,
            0.7833239451981676,
            0.11656139980237962
          ],
          [
            0.06974518533702813,
            0.04659249110271183,
            0.2552432229575629,
            0.628419100602697
          ]
        ],
        "low": [],
        "high": [],
        "counts": [
          [
            108.0,
            0.0,
            1.0,
            9.0
          ],
          [
            3.0,
            25.0,
            1.0,
            0.0
          ],
          [
            4.0,
            2.0,
            47.0,
            7.0
          ],
          [
            3.0,
            2.0,
            11.0,
            27.0
          ]
        ]
      },
      "current_regime": 3,
      "current_regime_label": "Jump / Tail Shock",
      "current_regime_probability": 1.0,
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
          "probability": 0.0,
          "probability_display": "<0.1%",
          "basis": "filtered"
        },
        {
          "id": 2,
          "label": "Stressed / Illiquid",
          "probability": 1.5268723657189876e-158,
          "probability_display": "<0.1%",
          "basis": "filtered"
        },
        {
          "id": 3,
          "label": "Jump / Tail Shock",
          "probability": 1.0,
          "probability_display": ">99.9%",
          "basis": "filtered"
        }
      ],
      "jump_risk": {
        "current_probability": 0.5035623760209423,
        "current_score": 0.0,
        "current_flag": true,
        "jump_threshold_score": 2.5,
        "method": "robust_residual_and_return_jump_overlay",
        "model_definition": "jump_score_feature_overlay"
      },
      "model_selection": {
        "chosen": 4,
        "criterion": "bic_with_min_state_support",
        "bic": 999.3275900903659,
        "loglik": 28.016960641902436,
        "n_params": 191,
        "bic_delta_vs_next_best": 1140.696408082983,
        "candidates": [
          {
            "k": 2,
            "valid": true,
            "reason": "ok",
            "bic": 5400.979565129972,
            "loglik": -2449.0816738344897,
            "n_params": 91,
            "converged": true,
            "iterations": 7,
            "best_seed": 42,
            "seed_runs": [
              {
                "seed": 42,
                "k": 2,
                "valid": true,
                "reason": "ok",
                "bic": 5400.979565129972,
                "loglik": -2449.0816738344897,
                "n_params": 91,
                "converged": true,
                "iterations": 7
              },
              {
                "seed": 1337,
                "k": 2,
                "valid": true,
                "reason": "ok",
                "bic": 5400.979565129972,
                "loglik": -2449.0816738344897,
                "n_params": 91,
                "converged": true,
                "iterations": 7
              },
              {
                "seed": 2027,
                "k": 2,
                "valid": true,
                "reason": "ok",
                "bic": 5400.979565129972,
                "loglik": -2449.0816738344897,
                "n_params": 91,
                "converged": true,
                "iterations": 7
              }
            ]
          },
          {
            "k": 3,
            "valid": true,
            "reason": "ok",
            "bic": 2140.023998173349,
            "loglik": -683.2302933474497,
            "n_params": 140,
            "converged": true,
            "iterations": 10,
            "best_seed": 1337,
            "seed_runs": [
              {
                "seed": 42,
                "k": 3,
                "valid": true,
                "reason": "ok",
                "bic": 2140.023998173355,
                "loglik": -683.2302933474525,
                "n_params": 140,
                "converged": true,
                "iterations": 10
              },
              {
                "seed": 1337,
                "k": 3,
                "valid": true,
                "reason": "ok",
                "bic": 2140.023998173349,
                "loglik": -683.2302933474497,
                "n_params": 140,
                "converged": true,
                "iterations": 10
              },
              {
                "seed": 2027,
                "k": 3,
                "valid": true,
                "reason": "ok",
                "bic": 2140.023998173509,
                "loglik": -683.2302933475297,
                "n_params": 140,
                "converged": true,
                "iterations": 8
              }
            ]
          },
          {
            "k": 4,
            "valid": true,
            "reason": "ok",
            "bic": 999.3275900903659,
            "loglik": 28.016960641902436,
            "n_params": 191,
            "converged": true,
            "iterations": 17,
            "best_seed": 1337,
            "seed_runs": [
              {
                "seed": 42,
                "k": 4,
                "valid": true,
                "reason": "ok",
                "bic": 1278.9160597035984,
                "loglik": -111.77727416471379,
                "n_params": 191,
                "converged": true,
                "iterations": 36
              },
              {
                "seed": 1337,
                "k": 4,
                "valid": true,
                "reason": "ok",
                "bic": 999.3275900903659,
                "loglik": 28.016960641902436,
                "n_params": 191,
                "converged": true,
                "iterations": 17
              },
              {
                "seed": 2027,
                "k": 4,
                "valid": true,
                "reason": "ok",
                "bic": 1242.333419760028,
                "loglik": -93.48595419292865,
                "n_params": 191,
                "converged": true,
                "iterations": 48
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
              "bic": 1278.9160597035984,
              "valid": true,
              "reason": null
            },
            {
              "seed": 1337,
              "selected_states": 4,
              "bic": 999.3275900903659,
              "valid": true,
              "reason": null
            },
            {
              "seed": 2027,
              "selected_states": 4,
              "bic": 1242.333419760028,
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
                "2": 3394.884614830317,
                "3": 1933.6322783321557,
                "4": 1405.6624999135852
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
                "2": 5453.543181034125,
                "3": 3074.0315082692023,
                "4": 2468.1163329681212
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
                "2": 5400.979565129972,
                "3": 2140.023998173355,
                "4": 1278.9160597035984
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
        "bic_delta_vs_next_best": 1140.696408082983,
        "state_count_interpretation": "251 observations allowed the current rule to test up to 4 states; BIC preferred 4 with a 1140.70 improvement versus the next best valid state count.",
        "parameter_count": {
          "formula": "k^2 - 1 + 2*k*d",
          "n_parameters": 191,
          "observations_per_parameter": 1.3141361256544504,
          "parameter_pressure_label": "parameter_heavy"
        },
        "state_occupancy": {
          "min_effective_days_required": 7.529999999999999,
          "min_effective_days_observed": 29.21136944125589,
          "passes": true,
          "states": [
            {
              "id": 0,
              "label": "Calm / Liquid",
              "effective_days": 117.78607431249384,
              "pct_time": 0.4692672283366288,
              "passes_min_support": true
            },
            {
              "id": 1,
              "label": "Normal / Active",
              "effective_days": 29.21136944125589,
              "pct_time": 0.1163799579332904,
              "passes_min_support": true
            },
            {
              "id": 2,
              "label": "Stressed / Illiquid",
              "effective_days": 60.002556246249995,
              "pct_time": 0.23905400894920317,
              "passes_min_support": true
            },
            {
              "id": 3,
              "label": "Jump / Tail Shock",
              "effective_days": 44.000000000000284,
              "pct_time": 0.17529880478087762,
              "passes_min_support": true
            }
          ]
        },
        "transition_diagnostics": {
          "self_transition_probabilities": [
            0.9149485583703322,
            0.8626843474081066,
            0.7833239451981676,
            0.628419100602697
          ],
          "expected_duration_days": [
            11.757590239965761,
            7.282490969707822,
            4.615184640105157,
            2.6912039925140947
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
              "bic": 1278.9160597035984,
              "valid": true,
              "reason": null
            },
            {
              "seed": 1337,
              "selected_states": 4,
              "bic": 999.3275900903659,
              "valid": true,
              "reason": null
            },
            {
              "seed": 2027,
              "selected_states": 4,
              "bic": 1242.333419760028,
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
                "2": 3394.884614830317,
                "3": 1933.6322783321557,
                "4": 1405.6624999135852
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
                "2": 5453.543181034125,
                "3": 3074.0315082692023,
                "4": 2468.1163329681212
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
                "2": 5400.979565129972,
                "3": 2140.023998173355,
                "4": 1278.9160597035984
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
            "risk_score": 0.11501611171006272,
            "jump_probability": 0.171227307322685,
            "jump_rate": 0.05100522729574931,
            "rolling_vol_10d": 0.0017011173689188111,
            "downside_vol_10d": 3.117461939623089e-76,
            "drawdown_21d": 0.0,
            "amihud_stress": 0.0,
            "spread_rel": 2588.7514958117818,
            "spread_ticks": 309.29166666666305,
            "log_notional": 0.0,
            "log_trade_count": 0.0
          },
          {
            "id": 1,
            "label": "Normal / Active",
            "risk_score": 0.2324376071000575,
            "jump_probability": 0.24621992518271227,
            "jump_rate": 0.1366687097736864,
            "rolling_vol_10d": 0.002874449756165014,
            "downside_vol_10d": 3.516153141685354e-114,
            "drawdown_21d": 0.03598381002717549,
            "amihud_stress": 0.0,
            "spread_rel": 2588.7514958117276,
            "spread_ticks": 309.29166666666663,
            "log_notional": 0.0,
            "log_trade_count": 0.0
          },
          {
            "id": 2,
            "label": "Stressed / Illiquid",
            "risk_score": 0.30691928425917786,
            "jump_probability": 0.21353318589050888,
            "jump_rate": 0.06666406542317957,
            "rolling_vol_10d": 0.01502366815284167,
            "downside_vol_10d": 8.783730810203872e-06,
            "drawdown_21d": 5.959400812742467e-162,
            "amihud_stress": 0.0,
            "spread_rel": 2733.503441519726,
            "spread_ticks": 354.2956040150937,
            "log_notional": 0.0,
            "log_trade_count": 0.0
          },
          {
            "id": 3,
            "label": "Jump / Tail Shock",
            "risk_score": 0.8451057090364921,
            "jump_probability": 0.5035623760209423,
            "jump_rate": 0.4318181818181853,
            "rolling_vol_10d": 0.03900699922049957,
            "downside_vol_10d": 0.016933052795059845,
            "drawdown_21d": 0.03246150530220364,
            "amihud_stress": 2.840700238748587,
            "spread_rel": 2029.8263958506063,
            "spread_ticks": 242.84433596706376,
            "log_notional": 4.763784736637916,
            "log_trade_count": 0.541895277383432
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
          "state": 2,
          "probabilities": [
            0.0,
            0.0,
            1.0,
            1.5795732868938306e-19
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            0.0,
            0.0,
            1.0,
            4.847602081192223e-19
          ],
          "jump_probability": 0.0746646494730258,
          "jump_score": 0.06117437731757511
        },
        {
          "trade_date": "2026-05-11",
          "state": 2,
          "probabilities": [
            0.0,
            0.0,
            1.0,
            2.173158212694859e-19
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            0.0,
            0.0,
            1.0,
            6.6692735069835e-19
          ],
          "jump_probability": 0.28399936057162695,
          "jump_score": 1.4459051535945058
        },
        {
          "trade_date": "2026-05-12",
          "state": 2,
          "probabilities": [
            0.0,
            0.0,
            1.0,
            3.5581720401382885e-20
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            0.0,
            0.0,
            1.0,
            1.0919785951137185e-19
          ],
          "jump_probability": 0.1319297461021083,
          "jump_score": 0.6117364394338594
        },
        {
          "trade_date": "2026-05-13",
          "state": 2,
          "probabilities": [
            0.0,
            0.0,
            1.0,
            4.076639764542286e-17
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            0.0,
            0.0,
            1.0,
            7.561495775500098e-18
          ],
          "jump_probability": 0.32615124734332473,
          "jump_score": 1.619004816989435
        },
        {
          "trade_date": "2026-05-14",
          "state": 3,
          "probabilities": [
            0.0,
            0.0,
            0.0,
            1.0
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            0.0,
            0.0,
            0.0,
            1.0
          ],
          "jump_probability": 0.9974539622177891,
          "jump_score": 7.441884917110641
        },
        {
          "trade_date": "2026-05-15",
          "state": 3,
          "probabilities": [
            0.0,
            0.0,
            1.0491568210550258e-160,
            1.0
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            0.0,
            0.0,
            5.6563338034409626e-160,
            1.0
          ],
          "jump_probability": 0.09024845277132695,
          "jump_score": 0.240778187868417
        },
        {
          "trade_date": "2026-05-18",
          "state": 3,
          "probabilities": [
            0.0,
            0.0,
            2.43032477204217e-159,
            1.0
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            0.0,
            0.0,
            1.3102643842716558e-158,
            1.0
          ],
          "jump_probability": 0.09877004195342148,
          "jump_score": 0.3274207732851242
        },
        {
          "trade_date": "2026-05-19",
          "state": 3,
          "probabilities": [
            0.0,
            0.0,
            4.39975652102775e-166,
            1.0
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            0.0,
            0.0,
            2.3720468701497175e-165,
            1.0
          ],
          "jump_probability": 0.7044872256048451,
          "jump_score": 3.005441854721312
        },
        {
          "trade_date": "2026-05-20",
          "state": 3,
          "probabilities": [
            0.0,
            0.0,
            1.0285430306715142e-159,
            1.0
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            0.0,
            0.0,
            5.545198387816196e-159,
            1.0
          ],
          "jump_probability": 0.2200628646818249,
          "jump_score": 1.149739072520063
        },
        {
          "trade_date": "2026-05-21",
          "state": 3,
          "probabilities": [
            0.0,
            0.0,
            1.5268723657189876e-158,
            1.0
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            0.0,
            0.0,
            1.5268723657189876e-158,
            1.0
          ],
          "jump_probability": 0.06994724469321749,
          "jump_score": 0.0
        }
      ]
    }
  },
  "theme": {
    "badges": {
      "liq_section": {
        "text": "Liquidity score: 13.8 — Weak",
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
        "text": "High short interest",
        "bg": "bg-red-500/20",
        "textColor": "text-red-400"
      },
      "header_health": {
        "text": "Liquidity Health: WEAK",
        "bg": "bg-red-500/20",
        "textColor": "text-red-400",
        "dot": "bg-red-500"
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
    "liq_subtitle": "Liquidity remains weak for size, with a 6M score of 13.8 compared with a peer median of 85.4. That keeps access well below comparable names despite somewhat stronger displayed bid depth.",
    "market_comparison_title": "How You Compare to the Market",
    "market_comparison_subtitle": "Context relative to market, sector, and peer medians.",
    "perf_title": "Stock Performance",
    "perf_subtitle": "Recent performance is ahead of both peers and the market, with a 1M return of +2.6% compared with +1.8% for peers and +0.6% for the market.",
    "perf_insight": "The stock has outperformed over the past month, but that stronger tape sits on top of a weak liquidity base. The 6M liquidity score is 71.6 points below the peer median, while market factors still account for 33.3% of trading.",
    "drivers_title": "What Moves Your Stock Price?",
    "drivers_subtitle": "Broader market moves are a meaningful driver at 33.3%, so the tape is not being set by company factors alone.",
    "drivers_strip": [
      {
        "title": "Current Driver (Last 5 Days)",
        "text": "Over the last 5 trading days, moves are mainly market-driven, accounting for about 33.3% of price changes. Other influences are sector 33.3%, and company-specific 33.3%."
      },
      {
        "title": "Driver Mix",
        "text": "Based on the last 5 trading days, current mix is market 33.3%, sector 33.3%, and company-specific 33.3%."
      },
      {
        "title": "Monthly Trend",
        "text": "The driver mix has shifted from market-driven to company-driven over Mar to May."
      }
    ],
    "drivers_pie_title": "Current Driver Mix (Last 5 Days)",
    "drivers_pie_note": "Based on the last 5 trading days, current split is market 33.3%, sector 33.3%, and company-specific 33.3%.",
    "lead_lag_title": "",
    "lead_lag_note": "",
    "rolling_title": "Monthly Driver Shift",
    "rolling_latest_label": "Latest: {period}",
    "rolling_note": "Each bar shows the monthly split between market-, sector-, and company-driven moves.",
    "drivers_bottom_line": "That matters because trading conditions remain demanding, with a 110-tick spread even though displayed bid depth is 1.64x ask depth.",
    "drivers_wtd_title": "Key Reads",
    "drivers_wtd_list": [
      "Market moves are the main current influence, but only as part of an even three-way split across market, sector, and company factors.",
      "The monthly pattern looks more company-driven now, after March was mostly market-driven and April and May were mostly market."
    ],
    "regime_title": "Market State",
    "regime_subtitle": "Current trading conditions look constrained rather than open, with weak structural liquidity still shaping access.",
    "regime_badge_text": "Jump / Tail Shock",
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
    "exec_check_subtitle": "Combines the final continuous-session displayed book before close, trade-size stress tests based on available history from May 23, 2025 to May 14, 2026 (26 trading days • 45 trades), large sell-side orders observed today, and intraday spread/depth during the continuous trading session.",
    "order_book_title": "Order Book Depth (Available Liquidity)",
    "order_book_note": "Depth shown is based on the displayed order book.",
    "peer_capacity_title": "Peer Capacity Context",
    "peer_capacity_note": "Immediate displayed depth broadly matches the stronger monthly liquidity read.",
    "impact_summary_title": "Estimated Price Impact (Sell Orders)",
    "impact_summary_subtitle": "Approximate price impact (%) for sell orders.",
    "exec_check_insight": "Displayed bid depth is 1.64x ask depth, but the spread remains wide at 110 ticks. That leaves the near-term book more balanced than the structural liquidity profile, while trading quality still looks demanding.",
    "trader_composition_title": "Who's Trading Your Stock?",
    "trader_composition_subtitle": "Shows whether trading is mostly retail-like, institution-like, mixed, or unclassified.",
    "trader_retail_threshold": "Retail-like flow",
    "trader_mixed_threshold": "Mixed flow",
    "trader_instit_threshold": "Institution-like flow",
    "peer_trader_title": "Peer Comparison: Trader Mix",
    "peer_trader_subtitle": "How the trader mix compares with peers.",
    "price_moving_title": "Which Trades Move the Price?",
    "price_moving_subtitle": "Price-moving trades are 58.8% of total trades.",
    "intraday_title": "When Does Trading Happen?",
    "intraday_subtitle": "Displayed liquidity is somewhat better on the bid side, but immediate trading quality remains thin.",
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
    "intraday_insight": "Session split is open 0.0%, continuous 100.0%, and close 0.0%. Current trading concentration score is 0.911.",
    "short_title": "Short Selling & Lending",
    "short_subtitle": "The main trading picture is still defined by weak structural liquidity and a wide spread.",
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
    "exec_subtitle": "Trading access screens below peers for the company’s size, even as recent returns have been firmer.",
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
        "value": "13.8/100",
        "sub": "Peer median 85.4 (-71.6 pts)",
        "interp": {
          "text": "Weak",
          "cls": "interpretation-bad",
          "icon": "◆"
        }
      },
      {
        "title": "Volume vs Peers",
        "value": "US$0",
        "sub": "Peer median US$18.5M",
        "interp": {
          "text": "Weak",
          "cls": "interpretation-bad",
          "icon": "◆"
        }
      },
      {
        "title": "Spread",
        "value": "24.82%",
        "sub": "270.00 ticks; peers 0.17%",
        "interp": {
          "text": "Wider",
          "cls": "interpretation-bad",
          "icon": "◆"
        }
      }
    ],
    "liq_insight": "6M liquidity is weak: score 13.8 vs peer median 85.4 (-71.6 pts). Recent trend context is too limited to say whether access has changed from the 1M baseline.",
    "perf_badge": "Context",
    "exec_check_tiles": [
      {
        "title": "Mid Price",
        "value": "15.750",
        "note": "final continuous-session displayed book before close",
        "color": "text-white"
      },
      {
        "title": "Spread",
        "value": "6.98%",
        "note": "110.00 ticks",
        "color": "text-slate-300"
      },
      {
        "title": "Depth",
        "value": "1.64x",
        "note": "Bid depth / ask depth on the displayed order book",
        "color": "text-slate-300"
      }
    ],
    "impact_summary_cards": [
      {
        "title": "~S$100K sell",
        "text": "Estimated impact ~-26.56% with 27.8% fill.",
        "cls": "ok"
      },
      {
        "title": "S$1.0M sell",
        "text": "Estimated impact ~-26.56% with 2.8% fill.",
        "cls": "warn"
      },
      {
        "title": "S$2.5M sell",
        "text": "Estimated impact ~-26.56% with 1.1% fill.",
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
        "value": "14",
        "suffix": "/100",
        "bar_pct": 14,
        "color_value": "text-red-400",
        "color_bar": "bg-red-500",
        "subtext": "Rank 480/556",
        "interpretation": {
          "text": "Weak",
          "cls": "interpretation-bad",
          "icon": "◆"
        }
      },
      {
        "title": "Trading Cost (Spread)",
        "tooltip": {
          "title": "Trading Cost (Spread)",
          "body": "The gap between best buy and sell prices in the selected window."
        },
        "value": "24.82",
        "suffix": "%",
        "bar_pct": 100,
        "color_value": "text-red-400",
        "color_bar": "bg-red-500",
        "subtext": "24.82% • 270.00 ticks vs peers 0.17%",
        "interpretation": {
          "text": "Weak",
          "cls": "interpretation-bad",
          "icon": "◆"
        }
      },
      {
        "title": "Average Traded Volume",
        "tooltip": {
          "title": "Average Traded Volume",
          "body": "Average daily trading value in local currency for the selected window."
        },
        "value": "0",
        "value_prefix": "US$",
        "suffix": "",
        "bar_pct": 0,
        "color_value": "text-red-400",
        "color_bar": "bg-red-500",
        "subtext": "Peer median US$18.5M",
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
        "value": "33.3",
        "suffix": "market",
        "bar_pct": 33,
        "color_value": "text-amber-400",
        "color_bar": "bg-amber-500",
        "subtext": "Sector 33.3% • Company 33.3%",
        "interpretation": {
          "text": "Market",
          "cls": "interpretation-neutral",
          "icon": "◆"
        }
      }
    ],
    "exec_takeaways": [
      "Structural liquidity is weak for the company’s size, with a 6M liquidity score of 13.8 compared with a peer median of 85.4. That leaves the stock screening well below comparable names on access.",
      "Recent returns are firmer, with the stock up 2.6% over one month compared with 1.8% for peers and 0.6% for the market. That gives the tape a stronger price backdrop than the main comparison groups.",
      "The current book is more balanced than the structural ranking suggests, with displayed bid depth at 1.64x ask depth. Trading quality still looks demanding because the spread is 110 ticks, while market factors account for 33.3% of the current driver mix."
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
      "overall": "6M liquidity is weak: score 13.8 vs peer median 85.4 (-71.6 pts). Recent trend context is too limited to say whether access has changed from the 1M baseline.",
      "strengths": [
        "6M score 13.8 vs peer median 85.4 (-71.6 pts)."
      ],
      "concerns": [],
      "peer_context": "Primary-period score gap vs peers: -71.6 pts."
    },
    "market_comparison": {
      "returns": {
        "insight": "6M return is 19.2%, better than market, sector, and peers, which suggests stronger price performance than comparable names.",
        "vs_market": "Better than market: 19.2% vs market 12.0%.",
        "vs_sector": "Better than sector: 19.2% vs sector 11.9%.",
        "vs_peers": "Better than peers: 19.2% vs peers 8.1%."
      },
      "adv": {
        "insight": "average daily volume is US$0, worse than market, sector, and peers, which suggests smaller day-to-day trading size than comparable names.",
        "vs_market": "Worse than market: US$0 vs market US$9.6K.",
        "vs_sector": "Worse than sector: US$0 vs sector US$145.5K.",
        "vs_peers": "Worse than peers: US$0 vs peers US$18.5M."
      },
      "spread": {
        "insight": "Spread is 24.82%, worse than market, sector, and peers, which suggests trading costs are heavier than comparable names.",
        "vs_market": "Worse than market: 24.82% vs market 2.91%.",
        "vs_sector": "Worse than sector: 24.82% vs sector 12.55%.",
        "vs_peers": "Worse than peers: 24.82% vs peers 0.17%."
      },
      "turnover_ratio": {
        "insight": "Turnover ratio is 0.00%, worse than market, sector, and peers, which shows a lighter free-float turnover profile than comparable names.",
        "vs_market": "Worse than market: 0.00% vs market 0.03%.",
        "vs_sector": "Worse than sector: 0.00% vs sector 0.00%.",
        "vs_peers": "Worse than peers: 0.00% vs peers 0.07%."
      },
      "volatility": {
        "insight": "Volatility is 28.18%, better than market, but worse than sector and peers, which shows price variability is mixed across comparison groups.",
        "vs_market": "Better than market: 28.18% vs market 46.38%.",
        "vs_sector": "Worse than sector: 28.18% vs sector 18.50%.",
        "vs_peers": "Worse than peers: 28.18% vs peers 18.95%."
      },
      "trades": {
        "insight": "Trades is 0, worse than market, sector, and peers, which suggests activity is thinner than comparable names.",
        "vs_market": "Worse than market: 0 vs market 7.",
        "vs_sector": "Worse than sector: 0 vs sector 33.",
        "vs_peers": "Worse than peers: 0 vs peers 3186."
      },
      "amihud": {
        "insight": "Price impact is 8.67e-06, worse than market, sector, and peers, which suggests trades move price more than comparable names.",
        "vs_market": "Worse than market: 8.67e-06 vs market 2.08e-07.",
        "vs_sector": "Worse than sector: 8.67e-06 vs sector 4.34e-06.",
        "vs_peers": "Worse than peers: 8.67e-06 vs peers 1.45e-10."
      }
    },
    "performance": {
      "overall": "Recent performance is stronger than the main comparison groups, with a one-month return of 2.6% compared with 1.8% for peers and 0.6% for the market. That move is only partly supported by trading conditions because the six-month liquidity score is 13.8 against a peer median of 85.4, leaving access well below peers despite the firmer tape. The driver mix also suggests this is not purely company-specific, with market factors accounting for 33.3% of trading and indicating a meaningful broader-market influence.",
      "conclusion": "The move looks more broad-market than company-specific, and the return strength sits against a weak liquidity backdrop."
    },
    "drivers": {
      "overall": "Broader market moves are the clearest current driver, but the picture is balanced because market, sector, and company factors each explain 33.3% of recent price moves. That matters because the stock is not trading on company news alone, so day-to-day direction can still be pulled by the wider tape.",
      "beta": "Based on the last 5 trading days, current mix is market 33.3%, sector 33.3%, and company-specific 33.3%.",
      "rolling_change": "The monthly pattern has become more company-driven, with March mostly market-driven and both April and May mostly market. That matters because the current market-led read looks more like a near-term shift than a settled monthly pattern."
    },
    "regime": {
      "overall": "The current backdrop matters because jump-shock conditions can make trading quality less steady, and that sits on top of a six-month liquidity score of 13.8 compared with a peer median of 85.4. That combination leaves the stock more exposed when conditions turn abrupt.",
      "current": "Current market state is Jump / Tail Shock. Current-state posterior is >99.9% on a filtered basis. The market has been in this state about 17.5% of the time. Jump risk is 50% on the current read. Based on 251 trading days relative to the 252-day target.",
      "transitions": "This state looks more settled than a one-day dislocation because its typical run length is about 2.7 days, although the read is mixed. That means the backdrop can persist for several sessions rather than clearing immediately.",
      "trading_implications": "This state looks more persistent, with a typical run length of about 2.7 days."
    },
    "execution": {
      "overall": "Displayed liquidity looks balanced on the screen because bid depth is 1.64x ask depth, which suggests buyers are present even with a wide 110-tick spread. That matters because the book does not show the same degree of stress as the weaker structural liquidity profile.",
      "concern": "The clearest stress point is the 110-tick spread, which indicates trading remains expensive even though displayed depth is skewed to the bid side. Trade-size context is also less settled because the percentile history is based on 26 trading days and 45 trades.",
      "peer_context": "The current book is firmer than the longer-term peer standing implies, with bid depth outweighing ask depth even as the 6M liquidity score sits at 13.8 compared with a peer median of 85.4. That matters because the screen shows a more balanced near-term setup than the stock’s broader liquidity ranking."
    },
    "trader_composition": {
      "overall": "By trade count and value, flow looks mainly retail-like.",
      "retail_heavy": "Retail-like trades account for 83.3% of trade count and 36.9% of trade value, while institution-like trades are 0.0% on both measures. That points to a market driven mainly by smaller individual tickets rather than broad institutional participation.",
      "institutional_gap": "The absence of institution-like trades in both count and value leaves no offset to the retail-heavy mix, which weakens confidence in depth holding up when demand changes.",
      "peer_comparison": "The mix stands out as unusually retail-like relative to peers, with no institution-like participation showing in either trade count or trade value."
    },
    "price_moving": {
      "overall": "Price-moving activity is present, but the flow signal is mixed because the trading base is still mainly retail-like by both count and value. Retail-like trades dominate observed activity at 83.3% of count and 36.9% of value, while institution-like trades are absent. That makes price formation look more dependent on thinner day-to-day flow than on deeper sponsorship. Positive and negative price-moving trade asymmetry is available in the report data.",
      "interpretation": "",
      "asymmetry": ""
    },
    "short_selling": {
      "overall": "Short activity appears elevated, but the signal is mixed and it does not clearly outweigh the broader backdrop. The shares still returned 2.6% over one month, ahead of peers at 1.8% and the market at 0.6%, which suggests short positioning is not dominating trading conditions.",
      "level": "High short interest",
      "correlation": "Strong negative - high shorts coincide with price drops",
      "trend": "Short interest looks stable in the near term, even though it is up 74% year on year. That points to a persistent overhang rather than a fresh source of pressure.",
      "peaks": "5 notable peak days identified."
    },
    "intraday": {
      "overall": "Liquidity is concentrated in the continuous session, with 100.0% of trading there and none at the open or close. That creates a narrow intraday pattern rather than a broad all-day market.",
      "hhi_interpretation": "Highly concentrated - liquidity only in auctions",
      "best_times": "The continuous session is the only part of the day showing activity, which means usable liquidity is confined to that window.",
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
        "K6S",
        "G07",
        "S68",
        "U11",
        "O39",
        "D05",
        "CJN",
        "8A1",
        "5QY"
      ],
      "scores": [
        13.848920863309353,
        71.94244604316546,
        98.92086330935251,
        99.28057553956835,
        99.64028776978418,
        100.0,
        0.3597122302158274,
        11.870503597122301,
        24.640287769784173
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
        0.0,
        291003.29525644024,
        36762974.70097679,
        76498614.87743162,
        85786265.4692003,
        200126042.41771194,
        0.0,
        0.0,
        1.2896275986934025
      ],
      "total": 556
    },
    "market_comparison": {
      "sector_name": "Insurance - Life",
      "sector_count": 2,
      "market_count": 556,
      "company": {
        "volatility": 0.28180316518425386,
        "adv": 0.0,
        "spread_pct": 0.24824355971896958,
        "turnover_ratio": 0.0,
        "amihud": 8.666301769750054e-06,
        "trades": 0.0
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
          "mean": 2142967.6780890794,
          "median": 9612.180687424972,
          "min": 0.0,
          "max": 200126042.41771194,
          "p5": 0.0,
          "p95": 8835399.295903975,
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
          "mean": 1.2915193888330576e-05,
          "median": 2.0821511656371936e-07,
          "min": 0.0,
          "max": 0.0007648400674744817,
          "p5": 0.0,
          "p95": 4.3935142981989155e-05,
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
          "mean": 0.18499000805094512,
          "median": 0.18499000805094512,
          "min": 0.08817685091763638,
          "max": 0.28180316518425386,
          "p5": 0.09785816663096726,
          "p95": 0.272121849470923,
          "count": 2
        },
        "adv": {
          "direction": "higher_is_better",
          "mean": 145501.64762822012,
          "median": 145501.64762822012,
          "min": 0.0,
          "max": 291003.29525644024,
          "p5": 14550.164762822013,
          "p95": 276453.1304936182,
          "count": 2
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.1254715964006831,
          "median": 0.1254715964006831,
          "min": 0.00269963308239662,
          "max": 0.24824355971896958,
          "p5": 0.01497682941422527,
          "p95": 0.23596636338714091,
          "count": 2
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 1.2867489689645852e-05,
          "median": 1.2867489689645852e-05,
          "min": 0.0,
          "max": 2.5734979379291704e-05,
          "p5": 1.2867489689645853e-06,
          "p95": 2.4448230410327116e-05,
          "count": 2
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 4.337157683254484e-06,
          "median": 4.337157683254484e-06,
          "min": 8.013596758913284e-09,
          "max": 8.666301769750054e-06,
          "p5": 4.4092800540847034e-07,
          "p95": 8.233387361100497e-06,
          "count": 2
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 32.75,
          "median": 32.75,
          "min": 0.0,
          "max": 65.5,
          "p5": 3.2750000000000004,
          "p95": 62.224999999999994,
          "count": 2
        }
      },
      "peers": {
        "adv": {
          "direction": "higher_is_better",
          "mean": 49933112.75627559,
          "median": 18526988.998116616,
          "min": 0.0,
          "max": 200126042.41771194,
          "p5": 0.0,
          "p95": 160107120.4857328,
          "count": 8
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 4009.6875,
          "median": 3185.5,
          "min": 0.0,
          "max": 10264.5,
          "p5": 0.0,
          "p95": 9830.5,
          "count": 8
        },
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.4092596495867009,
          "median": 0.1894915270601185,
          "min": 0.08817685091763638,
          "max": 1.3003378330992528,
          "p5": 0.10392989562554059,
          "p95": 1.0958801887729517,
          "count": 8
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.20070455134348472,
          "median": 0.0016948086966371335,
          "min": 0.00027417717172845547,
          "max": 1.267605633802817,
          "p5": 0.0003240880586971247,
          "p95": 0.887580025608194,
          "count": 8
        },
        "spread_ticks": {
          "direction": "neutral",
          "mean": 35.97409631838461,
          "median": 2.2361511460122396,
          "min": 1.1994391739190593,
          "max": 260.0,
          "p5": 1.216119966631104,
          "p95": 174.3083333333332,
          "count": 8
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 5.0624281671369526e-05,
          "median": 1.4503440800386764e-10,
          "min": 0.0,
          "max": 0.0003093982516171937,
          "p5": 8.080621941910933e-12,
          "p95": 0.0002345645334659394,
          "count": 8
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.0010066065464385198,
          "median": 0.0006970940107161887,
          "min": 0.0,
          "max": 0.0029725787048225974,
          "p5": 0.0,
          "p95": 0.0025940485014960763,
          "count": 8
        }
      }
    },
    "returns": [
      {
        "horizon": "1M",
        "stock": 0.026490066225165698,
        "market": 0.00613165413872041,
        "sector": 0.011927699070191311,
        "peers": 0.018406772261001736
      },
      {
        "horizon": "3M",
        "stock": 0.10085227272727315,
        "market": 0.008827226270709199,
        "sector": 0.05335483618537684,
        "peers": 0.03231167866077023
      },
      {
        "horizon": "6M",
        "stock": 0.19230769230769296,
        "market": 0.12010647804296903,
        "sector": 0.11914672221632183,
        "peers": 0.08072894452158308
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
      "share_market": 0.3333333333333333,
      "share_sector": 0.3333333333333333,
      "share_idio": 0.3333333333333333,
      "beta_market": 0,
      "beta_sector": 0,
      "driver_model": {
        "valid": true,
        "model_method": "ols_with_hmm_jump_regimes",
        "regime_method": "hmm_jump_aware",
        "estimation_window_days": 251,
        "reporting_window_days": 63,
        "available_history_days": 251,
        "n_regimes": 4,
        "current_regime": 3,
        "current_regime_label": "Jump / Tail Shock",
        "current_regime_probability": 1.0,
        "current_regime_probability_display": ">99.9%",
        "current_probability_basis": "filtered",
        "historical_probability_basis": "smoothed",
        "current_driver_mix": {
          "market_share": {
            "median": 0.3333333333333333,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "33.3%",
            "display_range": null,
            "display_text": "33.3%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
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
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
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
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "share_pct",
            "value_pct": 33.3,
            "plain_english": "Company-specific explains about 33.3% of price moves in the current state."
          },
          "basis": "current_state"
        },
        "current_sensitivities": {
          "beta_market": {
            "median": 0.0,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "0.00",
            "display_range": null,
            "display_text": "0.00",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "beta",
            "strength_label": "Weak",
            "plain_english": "Weak market link: a 1% market move has lined up with about a 0.00% stock move in the same direction in this state.",
            "value_num": 0.0
          },
          "beta_stock_lag": {
            "median": 0.0,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "0.00",
            "display_range": null,
            "display_text": "0.00",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "lag_beta",
            "value_num": 0.0
          },
          "beta_sector": {
            "median": 0.0,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "0.00",
            "display_range": null,
            "display_text": "0.00",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "beta",
            "strength_label": "Weak",
            "plain_english": "Weak sector link: a 1% sector move has lined up with about a 0.00% stock move in the same direction in this state.",
            "value_num": 0.0
          },
          "beta_market_lag": {
            "median": 0.0,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "0.00",
            "display_range": null,
            "display_text": "0.00",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "lag_beta",
            "value_num": 0.0
          },
          "beta_sector_lag": {
            "median": 0.0,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "0.00",
            "display_range": null,
            "display_text": "0.00",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "lag_beta",
            "value_num": 0.0
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
              "median": 0.8012598111160198,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "80.1%",
              "display_range": null,
              "display_text": "80.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 4 trading days.",
              "kind": "share_pct",
              "value_pct": 80.1,
              "plain_english": "Market explains about 80.1% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.8012598111160198,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "80.1%",
                "display_range": null,
                "display_text": "80.1%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 4 trading days.",
                "kind": "share_pct",
                "value_pct": 80.1,
                "plain_english": "Market explains about 80.1% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.14367154564250653,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "14.4%",
                "display_range": null,
                "display_text": "14.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 4 trading days.",
                "kind": "share_pct",
                "value_pct": 14.4,
                "plain_english": "Sector explains about 14.4% of price moves in the current state."
              },
              "company_share": {
                "median": 0.05506864324147359,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "5.5%",
                "display_range": null,
                "display_text": "5.5%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 4 trading days.",
                "kind": "share_pct",
                "value_pct": 5.5,
                "plain_english": "Company-specific explains about 5.5% of price moves in the current state."
              }
            },
            "summary": "May: Still clearly market-driven, though based on only 4 trading days."
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
              "median": 0.4712872513816686,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "47.1%",
              "display_range": null,
              "display_text": "47.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 47.1,
              "plain_english": "Company-specific explains about 47.1% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.24956715672804503,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "25.0%",
                "display_range": null,
                "display_text": "25.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 25.0,
                "plain_english": "Market explains about 25.0% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.27914559189028637,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "27.9%",
                "display_range": null,
                "display_text": "27.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 27.9,
                "plain_english": "Sector explains about 27.9% of price moves in the current state."
              },
              "company_share": {
                "median": 0.4712872513816686,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "47.1%",
                "display_range": null,
                "display_text": "47.1%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 47.1,
                "plain_english": "Company-specific explains about 47.1% of price moves in the current state."
              }
            },
            "summary": "Jun: Mostly company-driven."
          },
          {
            "month_key": "2025-07",
            "month_label": "July 2025",
            "month_short_label": "Jul",
            "period_label": "2025-07-01 to 2025-07-31",
            "n_obs": 23,
            "partial_month": false,
            "dominant_driver": "market",
            "dominant_driver_label": "Market",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.4329206662680639,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "43.3%",
              "display_range": null,
              "display_text": "43.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 23 trading days.",
              "kind": "share_pct",
              "value_pct": 43.3,
              "plain_english": "Market explains about 43.3% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.4329206662680639,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "43.3%",
                "display_range": null,
                "display_text": "43.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 23 trading days.",
                "kind": "share_pct",
                "value_pct": 43.3,
                "plain_english": "Market explains about 43.3% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.391538344233002,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "39.2%",
                "display_range": null,
                "display_text": "39.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 23 trading days.",
                "kind": "share_pct",
                "value_pct": 39.2,
                "plain_english": "Sector explains about 39.2% of price moves in the current state."
              },
              "company_share": {
                "median": 0.17554098949893418,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "17.6%",
                "display_range": null,
                "display_text": "17.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 23 trading days.",
                "kind": "share_pct",
                "value_pct": 17.6,
                "plain_english": "Company-specific explains about 17.6% of price moves in the current state."
              }
            },
            "summary": "Jul: More mixed, though market-driven still has the largest share."
          },
          {
            "month_key": "2025-08",
            "month_label": "August 2025",
            "month_short_label": "Aug",
            "period_label": "2025-08-01 to 2025-08-29",
            "n_obs": 21,
            "partial_month": false,
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
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
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
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
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
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
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
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 33.3,
                "plain_english": "Company-specific explains about 33.3% of price moves in the current state."
              }
            },
            "summary": "Aug: Much more balanced across company, sector, and market factors."
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
              "median": 0.5251771335594325,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "52.5%",
              "display_range": null,
              "display_text": "52.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 52.5,
              "plain_english": "Company-specific explains about 52.5% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.2465806200480266,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "24.7%",
                "display_range": null,
                "display_text": "24.7%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 24.7,
                "plain_english": "Market explains about 24.7% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.22824224639254073,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "22.8%",
                "display_range": null,
                "display_text": "22.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 22.8,
                "plain_english": "Sector explains about 22.8% of price moves in the current state."
              },
              "company_share": {
                "median": 0.5251771335594325,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "52.5%",
                "display_range": null,
                "display_text": "52.5%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 52.5,
                "plain_english": "Company-specific explains about 52.5% of price moves in the current state."
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
            "dominant_driver": "market",
            "dominant_driver_label": "Market",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.47300268261199785,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "47.3%",
              "display_range": null,
              "display_text": "47.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 47.3,
              "plain_english": "Market explains about 47.3% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.47300268261199785,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "47.3%",
                "display_range": null,
                "display_text": "47.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 47.3,
                "plain_english": "Market explains about 47.3% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.28048721744805594,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "28.0%",
                "display_range": null,
                "display_text": "28.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 28.0,
                "plain_english": "Sector explains about 28.0% of price moves in the current state."
              },
              "company_share": {
                "median": 0.24651009993994616,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "24.7%",
                "display_range": null,
                "display_text": "24.7%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 24.7,
                "plain_english": "Company-specific explains about 24.7% of price moves in the current state."
              }
            },
            "summary": "Oct: Mostly market-driven."
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
              "median": 0.45704172485967764,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "45.7%",
              "display_range": null,
              "display_text": "45.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 45.7,
              "plain_english": "Market explains about 45.7% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.45704172485967764,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "45.7%",
                "display_range": null,
                "display_text": "45.7%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 45.7,
                "plain_english": "Market explains about 45.7% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.19744619810304867,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "19.7%",
                "display_range": null,
                "display_text": "19.7%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 19.7,
                "plain_english": "Sector explains about 19.7% of price moves in the current state."
              },
              "company_share": {
                "median": 0.34551207703727377,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "34.6%",
                "display_range": null,
                "display_text": "34.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 34.6,
                "plain_english": "Company-specific explains about 34.6% of price moves in the current state."
              }
            },
            "summary": "Nov: Mostly market-driven."
          },
          {
            "month_key": "2025-12",
            "month_label": "December 2025",
            "month_short_label": "Dec",
            "period_label": "2025-12-01 to 2025-12-31",
            "n_obs": 22,
            "partial_month": false,
            "dominant_driver": "market",
            "dominant_driver_label": "Market",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.3638967687748571,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "36.4%",
              "display_range": null,
              "display_text": "36.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 36.4,
              "plain_english": "Market explains about 36.4% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.3638967687748571,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "36.4%",
                "display_range": null,
                "display_text": "36.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 36.4,
                "plain_english": "Market explains about 36.4% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.27759210624020475,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "27.8%",
                "display_range": null,
                "display_text": "27.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 27.8,
                "plain_english": "Sector explains about 27.8% of price moves in the current state."
              },
              "company_share": {
                "median": 0.3585111249849382,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "35.9%",
                "display_range": null,
                "display_text": "35.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 35.9,
                "plain_english": "Company-specific explains about 35.9% of price moves in the current state."
              }
            },
            "summary": "Dec: Much more balanced across company, sector, and market factors."
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
              "median": 0.6740837909943584,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "67.4%",
              "display_range": null,
              "display_text": "67.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 67.4,
              "plain_english": "Company-specific explains about 67.4% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.13138401170565542,
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
                "plain_english": "Market explains about 13.1% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.194532197299986,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "19.5%",
                "display_range": null,
                "display_text": "19.5%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 19.5,
                "plain_english": "Sector explains about 19.5% of price moves in the current state."
              },
              "company_share": {
                "median": 0.6740837909943584,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "67.4%",
                "display_range": null,
                "display_text": "67.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 67.4,
                "plain_english": "Company-specific explains about 67.4% of price moves in the current state."
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
            "dominant_driver": "market",
            "dominant_driver_label": "Market",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.47461420274641536,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "47.5%",
              "display_range": null,
              "display_text": "47.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
              "kind": "share_pct",
              "value_pct": 47.5,
              "plain_english": "Market explains about 47.5% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.47461420274641536,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "47.5%",
                "display_range": null,
                "display_text": "47.5%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
                "kind": "share_pct",
                "value_pct": 47.5,
                "plain_english": "Market explains about 47.5% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.3127047871140637,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "31.3%",
                "display_range": null,
                "display_text": "31.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
                "kind": "share_pct",
                "value_pct": 31.3,
                "plain_english": "Sector explains about 31.3% of price moves in the current state."
              },
              "company_share": {
                "median": 0.21268101013952107,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "21.3%",
                "display_range": null,
                "display_text": "21.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
                "kind": "share_pct",
                "value_pct": 21.3,
                "plain_english": "Company-specific explains about 21.3% of price moves in the current state."
              }
            },
            "summary": "Feb: Mostly market-driven."
          },
          {
            "month_key": "2026-03",
            "month_label": "March 2026",
            "month_short_label": "Mar",
            "period_label": "2026-03-02 to 2026-03-31",
            "n_obs": 22,
            "partial_month": false,
            "dominant_driver": "market",
            "dominant_driver_label": "Market",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.48325313249380314,
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
              "plain_english": "Market explains about 48.3% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.48325313249380314,
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
                "plain_english": "Market explains about 48.3% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.3140983893822498,
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
                "plain_english": "Sector explains about 31.4% of price moves in the current state."
              },
              "company_share": {
                "median": 0.20264847812394698,
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
                "plain_english": "Company-specific explains about 20.3% of price moves in the current state."
              }
            },
            "summary": "Mar: Mostly market-driven."
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
              "median": 0.5483280295156168,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "54.8%",
              "display_range": null,
              "display_text": "54.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 54.8,
              "plain_english": "Company-specific explains about 54.8% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.09847505234815228,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "9.8%",
                "display_range": null,
                "display_text": "9.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 9.8,
                "plain_english": "Market explains about 9.8% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.35319691813623094,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "35.3%",
                "display_range": null,
                "display_text": "35.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 35.3,
                "plain_english": "Sector explains about 35.3% of price moves in the current state."
              },
              "company_share": {
                "median": 0.5483280295156168,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "54.8%",
                "display_range": null,
                "display_text": "54.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 54.8,
                "plain_english": "Company-specific explains about 54.8% of price moves in the current state."
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
              "median": 0.5894545198102372,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "58.9%",
              "display_range": null,
              "display_text": "58.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 14 trading days.",
              "kind": "share_pct",
              "value_pct": 58.9,
              "plain_english": "Company-specific explains about 58.9% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.10578219767195468,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "10.6%",
                "display_range": null,
                "display_text": "10.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 14 trading days.",
                "kind": "share_pct",
                "value_pct": 10.6,
                "plain_english": "Market explains about 10.6% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.3047632825178081,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "30.5%",
                "display_range": null,
                "display_text": "30.5%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 14 trading days.",
                "kind": "share_pct",
                "value_pct": 30.5,
                "plain_english": "Sector explains about 30.5% of price moves in the current state."
              },
              "company_share": {
                "median": 0.5894545198102372,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "58.9%",
                "display_range": null,
                "display_text": "58.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 14 trading days.",
                "kind": "share_pct",
                "value_pct": 58.9,
                "plain_english": "Company-specific explains about 58.9% of price moves in the current state."
              }
            },
            "summary": "May: Mostly company-driven."
          }
        ],
        "regimes": [
          {
            "id": 0,
            "label": "Calm / Liquid",
            "pct_time": 0.4692672283366288,
            "expected_duration_days": 11.757590239965761,
            "current_probability": 0.0,
            "current_probability_display": "<0.1%",
            "current_probability_basis": "filtered",
            "n_days_effective": 117.78607431249384,
            "volatility": {
              "median": 0.0,
              "low": 0.0,
              "high": 0.0
            },
            "volatility_label": "Calm / Liquid",
            "jump_probability": 0.171227307322685,
            "jump_rate": 0.05100522729574931,
            "risk_score": 0.11501611171006272,
            "metrics": {
              "rolling_vol_10d": 0.0017011173689188111,
              "downside_vol_10d": 3.117461939623089e-76,
              "drawdown_21d": 0.0,
              "amihud_stress": 0.0,
              "spread_rel": 2588.7514958117818,
              "spread_ticks": 309.29166666666305,
              "log_notional": 0.0,
              "log_trade_count": 0.0
            }
          },
          {
            "id": 1,
            "label": "Normal / Active",
            "pct_time": 0.1163799579332904,
            "expected_duration_days": 7.282490969707822,
            "current_probability": 0.0,
            "current_probability_display": "<0.1%",
            "current_probability_basis": "filtered",
            "n_days_effective": 29.21136944125589,
            "volatility": {
              "median": 0.0,
              "low": 0.0,
              "high": 0.0
            },
            "volatility_label": "Normal / Active",
            "jump_probability": 0.24621992518271227,
            "jump_rate": 0.1366687097736864,
            "risk_score": 0.2324376071000575,
            "metrics": {
              "rolling_vol_10d": 0.002874449756165014,
              "downside_vol_10d": 3.516153141685354e-114,
              "drawdown_21d": 0.03598381002717549,
              "amihud_stress": 0.0,
              "spread_rel": 2588.7514958117276,
              "spread_ticks": 309.29166666666663,
              "log_notional": 0.0,
              "log_trade_count": 0.0
            }
          },
          {
            "id": 2,
            "label": "Stressed / Illiquid",
            "pct_time": 0.23905400894920317,
            "expected_duration_days": 4.615184640105157,
            "current_probability": 1.5268723657189876e-158,
            "current_probability_display": "<0.1%",
            "current_probability_basis": "filtered",
            "n_days_effective": 60.002556246249995,
            "volatility": {
              "median": 0.0,
              "low": 0.0,
              "high": 0.0
            },
            "volatility_label": "Stressed / Illiquid",
            "jump_probability": 0.21353318589050888,
            "jump_rate": 0.06666406542317957,
            "risk_score": 0.30691928425917786,
            "metrics": {
              "rolling_vol_10d": 0.01502366815284167,
              "downside_vol_10d": 8.783730810203872e-06,
              "drawdown_21d": 5.959400812742467e-162,
              "amihud_stress": 0.0,
              "spread_rel": 2733.503441519726,
              "spread_ticks": 354.2956040150937,
              "log_notional": 0.0,
              "log_trade_count": 0.0
            }
          },
          {
            "id": 3,
            "label": "Jump / Tail Shock",
            "pct_time": 0.17529880478087762,
            "expected_duration_days": 2.6912039925140947,
            "current_probability": 1.0,
            "current_probability_display": ">99.9%",
            "current_probability_basis": "filtered",
            "n_days_effective": 44.000000000000284,
            "volatility": {
              "median": 0.059735019649955395,
              "low": 0.059735019649955395,
              "high": 0.059735019649955395
            },
            "volatility_label": "Jump / Tail Shock",
            "jump_probability": 0.5035623760209423,
            "jump_rate": 0.4318181818181853,
            "risk_score": 0.8451057090364921,
            "metrics": {
              "rolling_vol_10d": 0.03900699922049957,
              "downside_vol_10d": 0.016933052795059845,
              "drawdown_21d": 0.03246150530220364,
              "amihud_stress": 2.840700238748587,
              "spread_rel": 2029.8263958506063,
              "spread_ticks": 242.84433596706376,
              "log_notional": 4.763784736637916,
              "log_trade_count": 0.541895277383432
            }
          }
        ],
        "transitions": {
          "mean": [
            [
              0.9149485583703322,
              8.531320870994013e-05,
              0.008566861013485345,
              0.0763992674074726
            ],
            [
              0.10255616210945966,
              0.8626843474081066,
              0.03441072271914731,
              0.0003487677632864614
            ],
            [
              0.0666882869228059,
              0.03342636807664683,
              0.7833239451981676,
              0.11656139980237962
            ],
            [
              0.06974518533702813,
              0.04659249110271183,
              0.2552432229575629,
              0.628419100602697
            ]
          ],
          "low": [],
          "high": [],
          "counts": [
            [
              108.0,
              0.0,
              1.0,
              9.0
            ],
            [
              3.0,
              25.0,
              1.0,
              0.0
            ],
            [
              4.0,
              2.0,
              47.0,
              7.0
            ],
            [
              3.0,
              2.0,
              11.0,
              27.0
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
            "probability": 0.0,
            "probability_display": "<0.1%",
            "basis": "filtered"
          },
          {
            "id": 2,
            "label": "Stressed / Illiquid",
            "probability": 1.5268723657189876e-158,
            "probability_display": "<0.1%",
            "basis": "filtered"
          },
          {
            "id": 3,
            "label": "Jump / Tail Shock",
            "probability": 1.0,
            "probability_display": ">99.9%",
            "basis": "filtered"
          }
        ],
        "jump_risk": {
          "current_probability": 0.5035623760209423,
          "current_score": 0.0,
          "current_flag": true,
          "jump_threshold_score": 2.5,
          "method": "robust_residual_and_return_jump_overlay",
          "model_definition": "jump_score_feature_overlay"
        },
        "model_selection": {
          "chosen": 4,
          "criterion": "bic_with_min_state_support",
          "bic": 999.3275900903659,
          "loglik": 28.016960641902436,
          "n_params": 191,
          "bic_delta_vs_next_best": 1140.696408082983,
          "candidates": [
            {
              "k": 2,
              "valid": true,
              "reason": "ok",
              "bic": 5400.979565129972,
              "loglik": -2449.0816738344897,
              "n_params": 91,
              "converged": true,
              "iterations": 7,
              "best_seed": 42,
              "seed_runs": [
                {
                  "seed": 42,
                  "k": 2,
                  "valid": true,
                  "reason": "ok",
                  "bic": 5400.979565129972,
                  "loglik": -2449.0816738344897,
                  "n_params": 91,
                  "converged": true,
                  "iterations": 7
                },
                {
                  "seed": 1337,
                  "k": 2,
                  "valid": true,
                  "reason": "ok",
                  "bic": 5400.979565129972,
                  "loglik": -2449.0816738344897,
                  "n_params": 91,
                  "converged": true,
                  "iterations": 7
                },
                {
                  "seed": 2027,
                  "k": 2,
                  "valid": true,
                  "reason": "ok",
                  "bic": 5400.979565129972,
                  "loglik": -2449.0816738344897,
                  "n_params": 91,
                  "converged": true,
                  "iterations": 7
                }
              ]
            },
            {
              "k": 3,
              "valid": true,
              "reason": "ok",
              "bic": 2140.023998173349,
              "loglik": -683.2302933474497,
              "n_params": 140,
              "converged": true,
              "iterations": 10,
              "best_seed": 1337,
              "seed_runs": [
                {
                  "seed": 42,
                  "k": 3,
                  "valid": true,
                  "reason": "ok",
                  "bic": 2140.023998173355,
                  "loglik": -683.2302933474525,
                  "n_params": 140,
                  "converged": true,
                  "iterations": 10
                },
                {
                  "seed": 1337,
                  "k": 3,
                  "valid": true,
                  "reason": "ok",
                  "bic": 2140.023998173349,
                  "loglik": -683.2302933474497,
                  "n_params": 140,
                  "converged": true,
                  "iterations": 10
                },
                {
                  "seed": 2027,
                  "k": 3,
                  "valid": true,
                  "reason": "ok",
                  "bic": 2140.023998173509,
                  "loglik": -683.2302933475297,
                  "n_params": 140,
                  "converged": true,
                  "iterations": 8
                }
              ]
            },
            {
              "k": 4,
              "valid": true,
              "reason": "ok",
              "bic": 999.3275900903659,
              "loglik": 28.016960641902436,
              "n_params": 191,
              "converged": true,
              "iterations": 17,
              "best_seed": 1337,
              "seed_runs": [
                {
                  "seed": 42,
                  "k": 4,
                  "valid": true,
                  "reason": "ok",
                  "bic": 1278.9160597035984,
                  "loglik": -111.77727416471379,
                  "n_params": 191,
                  "converged": true,
                  "iterations": 36
                },
                {
                  "seed": 1337,
                  "k": 4,
                  "valid": true,
                  "reason": "ok",
                  "bic": 999.3275900903659,
                  "loglik": 28.016960641902436,
                  "n_params": 191,
                  "converged": true,
                  "iterations": 17
                },
                {
                  "seed": 2027,
                  "k": 4,
                  "valid": true,
                  "reason": "ok",
                  "bic": 1242.333419760028,
                  "loglik": -93.48595419292865,
                  "n_params": 191,
                  "converged": true,
                  "iterations": 48
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
                "bic": 1278.9160597035984,
                "valid": true,
                "reason": null
              },
              {
                "seed": 1337,
                "selected_states": 4,
                "bic": 999.3275900903659,
                "valid": true,
                "reason": null
              },
              {
                "seed": 2027,
                "selected_states": 4,
                "bic": 1242.333419760028,
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
                  "2": 3394.884614830317,
                  "3": 1933.6322783321557,
                  "4": 1405.6624999135852
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
                  "2": 5453.543181034125,
                  "3": 3074.0315082692023,
                  "4": 2468.1163329681212
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
                  "2": 5400.979565129972,
                  "3": 2140.023998173355,
                  "4": 1278.9160597035984
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
          "bic_delta_vs_next_best": 1140.696408082983,
          "state_count_interpretation": "251 observations allowed the current rule to test up to 4 states; BIC preferred 4 with a 1140.70 improvement versus the next best valid state count.",
          "parameter_count": {
            "formula": "k^2 - 1 + 2*k*d",
            "n_parameters": 191,
            "observations_per_parameter": 1.3141361256544504,
            "parameter_pressure_label": "parameter_heavy"
          },
          "state_occupancy": {
            "min_effective_days_required": 7.529999999999999,
            "min_effective_days_observed": 29.21136944125589,
            "passes": true,
            "states": [
              {
                "id": 0,
                "label": "Calm / Liquid",
                "effective_days": 117.78607431249384,
                "pct_time": 0.4692672283366288,
                "passes_min_support": true
              },
              {
                "id": 1,
                "label": "Normal / Active",
                "effective_days": 29.21136944125589,
                "pct_time": 0.1163799579332904,
                "passes_min_support": true
              },
              {
                "id": 2,
                "label": "Stressed / Illiquid",
                "effective_days": 60.002556246249995,
                "pct_time": 0.23905400894920317,
                "passes_min_support": true
              },
              {
                "id": 3,
                "label": "Jump / Tail Shock",
                "effective_days": 44.000000000000284,
                "pct_time": 0.17529880478087762,
                "passes_min_support": true
              }
            ]
          },
          "transition_diagnostics": {
            "self_transition_probabilities": [
              0.9149485583703322,
              0.8626843474081066,
              0.7833239451981676,
              0.628419100602697
            ],
            "expected_duration_days": [
              11.757590239965761,
              7.282490969707822,
              4.615184640105157,
              2.6912039925140947
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
                "bic": 1278.9160597035984,
                "valid": true,
                "reason": null
              },
              {
                "seed": 1337,
                "selected_states": 4,
                "bic": 999.3275900903659,
                "valid": true,
                "reason": null
              },
              {
                "seed": 2027,
                "selected_states": 4,
                "bic": 1242.333419760028,
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
                  "2": 3394.884614830317,
                  "3": 1933.6322783321557,
                  "4": 1405.6624999135852
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
                  "2": 5453.543181034125,
                  "3": 3074.0315082692023,
                  "4": 2468.1163329681212
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
                  "2": 5400.979565129972,
                  "3": 2140.023998173355,
                  "4": 1278.9160597035984
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
              "risk_score": 0.11501611171006272,
              "jump_probability": 0.171227307322685,
              "jump_rate": 0.05100522729574931,
              "rolling_vol_10d": 0.0017011173689188111,
              "downside_vol_10d": 3.117461939623089e-76,
              "drawdown_21d": 0.0,
              "amihud_stress": 0.0,
              "spread_rel": 2588.7514958117818,
              "spread_ticks": 309.29166666666305,
              "log_notional": 0.0,
              "log_trade_count": 0.0
            },
            {
              "id": 1,
              "label": "Normal / Active",
              "risk_score": 0.2324376071000575,
              "jump_probability": 0.24621992518271227,
              "jump_rate": 0.1366687097736864,
              "rolling_vol_10d": 0.002874449756165014,
              "downside_vol_10d": 3.516153141685354e-114,
              "drawdown_21d": 0.03598381002717549,
              "amihud_stress": 0.0,
              "spread_rel": 2588.7514958117276,
              "spread_ticks": 309.29166666666663,
              "log_notional": 0.0,
              "log_trade_count": 0.0
            },
            {
              "id": 2,
              "label": "Stressed / Illiquid",
              "risk_score": 0.30691928425917786,
              "jump_probability": 0.21353318589050888,
              "jump_rate": 0.06666406542317957,
              "rolling_vol_10d": 0.01502366815284167,
              "downside_vol_10d": 8.783730810203872e-06,
              "drawdown_21d": 5.959400812742467e-162,
              "amihud_stress": 0.0,
              "spread_rel": 2733.503441519726,
              "spread_ticks": 354.2956040150937,
              "log_notional": 0.0,
              "log_trade_count": 0.0
            },
            {
              "id": 3,
              "label": "Jump / Tail Shock",
              "risk_score": 0.8451057090364921,
              "jump_probability": 0.5035623760209423,
              "jump_rate": 0.4318181818181853,
              "rolling_vol_10d": 0.03900699922049957,
              "downside_vol_10d": 0.016933052795059845,
              "drawdown_21d": 0.03246150530220364,
              "amihud_stress": 2.840700238748587,
              "spread_rel": 2029.8263958506063,
              "spread_ticks": 242.84433596706376,
              "log_notional": 4.763784736637916,
              "log_trade_count": 0.541895277383432
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
            "state": 2,
            "probabilities": [
              0.0,
              0.0,
              1.0,
              1.5795732868938306e-19
            ],
            "probability_basis": "smoothed",
            "filtered_probabilities": [
              0.0,
              0.0,
              1.0,
              4.847602081192223e-19
            ],
            "jump_probability": 0.0746646494730258,
            "jump_score": 0.06117437731757511
          },
          {
            "trade_date": "2026-05-11",
            "state": 2,
            "probabilities": [
              0.0,
              0.0,
              1.0,
              2.173158212694859e-19
            ],
            "probability_basis": "smoothed",
            "filtered_probabilities": [
              0.0,
              0.0,
              1.0,
              6.6692735069835e-19
            ],
            "jump_probability": 0.28399936057162695,
            "jump_score": 1.4459051535945058
          },
          {
            "trade_date": "2026-05-12",
            "state": 2,
            "probabilities": [
              0.0,
              0.0,
              1.0,
              3.5581720401382885e-20
            ],
            "probability_basis": "smoothed",
            "filtered_probabilities": [
              0.0,
              0.0,
              1.0,
              1.0919785951137185e-19
            ],
            "jump_probability": 0.1319297461021083,
            "jump_score": 0.6117364394338594
          },
          {
            "trade_date": "2026-05-13",
            "state": 2,
            "probabilities": [
              0.0,
              0.0,
              1.0,
              4.076639764542286e-17
            ],
            "probability_basis": "smoothed",
            "filtered_probabilities": [
              0.0,
              0.0,
              1.0,
              7.561495775500098e-18
            ],
            "jump_probability": 0.32615124734332473,
            "jump_score": 1.619004816989435
          },
          {
            "trade_date": "2026-05-14",
            "state": 3,
            "probabilities": [
              0.0,
              0.0,
              0.0,
              1.0
            ],
            "probability_basis": "smoothed",
            "filtered_probabilities": [
              0.0,
              0.0,
              0.0,
              1.0
            ],
            "jump_probability": 0.9974539622177891,
            "jump_score": 7.441884917110641
          },
          {
            "trade_date": "2026-05-15",
            "state": 3,
            "probabilities": [
              0.0,
              0.0,
              1.0491568210550258e-160,
              1.0
            ],
            "probability_basis": "smoothed",
            "filtered_probabilities": [
              0.0,
              0.0,
              5.6563338034409626e-160,
              1.0
            ],
            "jump_probability": 0.09024845277132695,
            "jump_score": 0.240778187868417
          },
          {
            "trade_date": "2026-05-18",
            "state": 3,
            "probabilities": [
              0.0,
              0.0,
              2.43032477204217e-159,
              1.0
            ],
            "probability_basis": "smoothed",
            "filtered_probabilities": [
              0.0,
              0.0,
              1.3102643842716558e-158,
              1.0
            ],
            "jump_probability": 0.09877004195342148,
            "jump_score": 0.3274207732851242
          },
          {
            "trade_date": "2026-05-19",
            "state": 3,
            "probabilities": [
              0.0,
              0.0,
              4.39975652102775e-166,
              1.0
            ],
            "probability_basis": "smoothed",
            "filtered_probabilities": [
              0.0,
              0.0,
              2.3720468701497175e-165,
              1.0
            ],
            "jump_probability": 0.7044872256048451,
            "jump_score": 3.005441854721312
          },
          {
            "trade_date": "2026-05-20",
            "state": 3,
            "probabilities": [
              0.0,
              0.0,
              1.0285430306715142e-159,
              1.0
            ],
            "probability_basis": "smoothed",
            "filtered_probabilities": [
              0.0,
              0.0,
              5.545198387816196e-159,
              1.0
            ],
            "jump_probability": 0.2200628646818249,
            "jump_score": 1.149739072520063
          },
          {
            "trade_date": "2026-05-21",
            "state": 3,
            "probabilities": [
              0.0,
              0.0,
              1.5268723657189876e-158,
              1.0
            ],
            "probability_basis": "smoothed",
            "filtered_probabilities": [
              0.0,
              0.0,
              1.5268723657189876e-158,
              1.0
            ],
            "jump_probability": 0.06994724469321749,
            "jump_score": 0.0
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
          "market_link_display": "0.00",
          "sector_link_display": "0.00",
          "market_link_explainer": "Weak market link. A 1% market move has lined up with about a 0.00% stock move in the same direction in this state. This is a point estimate from 251 trading days.",
          "sector_link_explainer": "Weak sector link. A 1% sector move has lined up with about a 0.00% stock move in the same direction in this state. This is a point estimate from 251 trading days.",
          "stock_persistence_display": "0.00",
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "history_limited_note": "Read is based on 251 trading days versus the 252-day target."
        },
        "current_summary": {
          "regime_label": "Jump / Tail Shock",
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "driver_share_pct": 33.3,
          "driver_share_display": "33.3%",
          "confidence_label": "High, limited history",
          "confidence_pct": 99.9,
          "confidence_display": ">99.9%",
          "probability_basis": "filtered",
          "display_confidence_pct": null,
          "confidence_note": "Based on 251 trading days relative to the 252-day target.",
          "history_days": 251,
          "history_limited": true,
          "volatility_label": "Jump / Tail Shock",
          "jump_risk_label": "Elevated",
          "jump_risk_probability": 50.4,
          "jump_risk_score": 0.0,
          "jump_risk_note": "Jump risk is elevated based on recent residual and return shocks.",
          "lead_signal_text": "No stable lead signal.",
          "state_term": "state",
          "stay_probability": 0.628419100602697,
          "effective_days": 44.0,
          "persistence_note": "This state looks more persistent, with a typical run length of about 2.7 days.",
          "expected_duration_days": 2.7
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
          "summary": "May: Still clearly market-driven, though based on only 4 trading days.",
          "share_market": 0.8012598111160198,
          "share_sector": 0.14367154564250653,
          "share_company": 0.05506864324147359,
          "share_market_display": "80.1%",
          "share_sector_display": "14.4%",
          "share_company_display": "5.5%",
          "dominant_share_display": "80.1%"
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
          "summary": "Jun: Mostly company-driven.",
          "share_market": 0.24956715672804503,
          "share_sector": 0.27914559189028637,
          "share_company": 0.4712872513816686,
          "share_market_display": "25.0%",
          "share_sector_display": "27.9%",
          "share_company_display": "47.1%",
          "dominant_share_display": "47.1%"
        },
        {
          "month_key": "2025-07",
          "month_label": "July 2025",
          "month_short_label": "Jul",
          "period_label": "2025-07-01 to 2025-07-31",
          "n_obs": 23,
          "partial_month": false,
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "regime_label": null,
          "summary": "Jul: More mixed, though market-driven still has the largest share.",
          "share_market": 0.4329206662680639,
          "share_sector": 0.391538344233002,
          "share_company": 0.17554098949893418,
          "share_market_display": "43.3%",
          "share_sector_display": "39.2%",
          "share_company_display": "17.6%",
          "dominant_share_display": "43.3%"
        },
        {
          "month_key": "2025-08",
          "month_label": "August 2025",
          "month_short_label": "Aug",
          "period_label": "2025-08-01 to 2025-08-29",
          "n_obs": 21,
          "partial_month": false,
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "regime_label": null,
          "summary": "Aug: Much more balanced across company, sector, and market factors.",
          "share_market": 0.3333333333333333,
          "share_sector": 0.3333333333333333,
          "share_company": 0.3333333333333333,
          "share_market_display": "33.3%",
          "share_sector_display": "33.3%",
          "share_company_display": "33.3%",
          "dominant_share_display": "33.3%"
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
          "share_market": 0.2465806200480266,
          "share_sector": 0.22824224639254073,
          "share_company": 0.5251771335594325,
          "share_market_display": "24.7%",
          "share_sector_display": "22.8%",
          "share_company_display": "52.5%",
          "dominant_share_display": "52.5%"
        },
        {
          "month_key": "2025-10",
          "month_label": "October 2025",
          "month_short_label": "Oct",
          "period_label": "2025-10-01 to 2025-10-31",
          "n_obs": 22,
          "partial_month": false,
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "regime_label": null,
          "summary": "Oct: Mostly market-driven.",
          "share_market": 0.47300268261199785,
          "share_sector": 0.28048721744805594,
          "share_company": 0.24651009993994616,
          "share_market_display": "47.3%",
          "share_sector_display": "28.0%",
          "share_company_display": "24.7%",
          "dominant_share_display": "47.3%"
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
          "summary": "Nov: Mostly market-driven.",
          "share_market": 0.45704172485967764,
          "share_sector": 0.19744619810304867,
          "share_company": 0.34551207703727377,
          "share_market_display": "45.7%",
          "share_sector_display": "19.7%",
          "share_company_display": "34.6%",
          "dominant_share_display": "45.7%"
        },
        {
          "month_key": "2025-12",
          "month_label": "December 2025",
          "month_short_label": "Dec",
          "period_label": "2025-12-01 to 2025-12-31",
          "n_obs": 22,
          "partial_month": false,
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "regime_label": null,
          "summary": "Dec: Much more balanced across company, sector, and market factors.",
          "share_market": 0.3638967687748571,
          "share_sector": 0.27759210624020475,
          "share_company": 0.3585111249849382,
          "share_market_display": "36.4%",
          "share_sector_display": "27.8%",
          "share_company_display": "35.9%",
          "dominant_share_display": "36.4%"
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
          "share_market": 0.13138401170565542,
          "share_sector": 0.194532197299986,
          "share_company": 0.6740837909943584,
          "share_market_display": "13.1%",
          "share_sector_display": "19.5%",
          "share_company_display": "67.4%",
          "dominant_share_display": "67.4%"
        },
        {
          "month_key": "2026-02",
          "month_label": "February 2026",
          "month_short_label": "Feb",
          "period_label": "2026-02-02 to 2026-02-27",
          "n_obs": 18,
          "partial_month": false,
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "regime_label": null,
          "summary": "Feb: Mostly market-driven.",
          "share_market": 0.47461420274641536,
          "share_sector": 0.3127047871140637,
          "share_company": 0.21268101013952107,
          "share_market_display": "47.5%",
          "share_sector_display": "31.3%",
          "share_company_display": "21.3%",
          "dominant_share_display": "47.5%"
        },
        {
          "month_key": "2026-03",
          "month_label": "March 2026",
          "month_short_label": "Mar",
          "period_label": "2026-03-02 to 2026-03-31",
          "n_obs": 22,
          "partial_month": false,
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "regime_label": null,
          "summary": "Mar: Mostly market-driven.",
          "share_market": 0.48325313249380314,
          "share_sector": 0.3140983893822498,
          "share_company": 0.20264847812394698,
          "share_market_display": "48.3%",
          "share_sector_display": "31.4%",
          "share_company_display": "20.3%",
          "dominant_share_display": "48.3%"
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
          "share_market": 0.09847505234815228,
          "share_sector": 0.35319691813623094,
          "share_company": 0.5483280295156168,
          "share_market_display": "9.8%",
          "share_sector_display": "35.3%",
          "share_company_display": "54.8%",
          "dominant_share_display": "54.8%"
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
          "summary": "May: Mostly company-driven.",
          "share_market": 0.10578219767195468,
          "share_sector": 0.3047632825178081,
          "share_company": 0.5894545198102372,
          "share_market_display": "10.6%",
          "share_sector_display": "30.5%",
          "share_company_display": "58.9%",
          "dominant_share_display": "58.9%"
        }
      ],
      "regime": {
        "valid": true,
        "regime_method": "hmm_jump_aware",
        "n_regimes": 4,
        "current_regime_label": "Jump / Tail Shock",
        "current_regime_probability": 1.0,
        "labels": [
          "Calm / Liquid",
          "Normal / Active",
          "Stressed / Illiquid",
          "Jump / Tail Shock"
        ],
        "pct_time": [
          0.4692672283366288,
          0.1163799579332904,
          0.23905400894920317,
          0.17529880478087762
        ],
        "current_regime": 3,
        "regimes": [
          {
            "id": 0,
            "label": "Calm / Liquid",
            "pct_time": 0.4692672283366288,
            "expected_duration_days": 11.757590239965761,
            "current_probability": 0.0,
            "current_probability_display": "<0.1%",
            "current_probability_basis": "filtered",
            "n_days_effective": 117.78607431249384,
            "volatility": {
              "median": 0.0,
              "low": 0.0,
              "high": 0.0
            },
            "volatility_label": "Calm / Liquid",
            "jump_probability": 0.171227307322685,
            "jump_rate": 0.05100522729574931,
            "risk_score": 0.11501611171006272,
            "metrics": {
              "rolling_vol_10d": 0.0017011173689188111,
              "downside_vol_10d": 3.117461939623089e-76,
              "drawdown_21d": 0.0,
              "amihud_stress": 0.0,
              "spread_rel": 2588.7514958117818,
              "spread_ticks": 309.29166666666305,
              "log_notional": 0.0,
              "log_trade_count": 0.0
            }
          },
          {
            "id": 1,
            "label": "Normal / Active",
            "pct_time": 0.1163799579332904,
            "expected_duration_days": 7.282490969707822,
            "current_probability": 0.0,
            "current_probability_display": "<0.1%",
            "current_probability_basis": "filtered",
            "n_days_effective": 29.21136944125589,
            "volatility": {
              "median": 0.0,
              "low": 0.0,
              "high": 0.0
            },
            "volatility_label": "Normal / Active",
            "jump_probability": 0.24621992518271227,
            "jump_rate": 0.1366687097736864,
            "risk_score": 0.2324376071000575,
            "metrics": {
              "rolling_vol_10d": 0.002874449756165014,
              "downside_vol_10d": 3.516153141685354e-114,
              "drawdown_21d": 0.03598381002717549,
              "amihud_stress": 0.0,
              "spread_rel": 2588.7514958117276,
              "spread_ticks": 309.29166666666663,
              "log_notional": 0.0,
              "log_trade_count": 0.0
            }
          },
          {
            "id": 2,
            "label": "Stressed / Illiquid",
            "pct_time": 0.23905400894920317,
            "expected_duration_days": 4.615184640105157,
            "current_probability": 1.5268723657189876e-158,
            "current_probability_display": "<0.1%",
            "current_probability_basis": "filtered",
            "n_days_effective": 60.002556246249995,
            "volatility": {
              "median": 0.0,
              "low": 0.0,
              "high": 0.0
            },
            "volatility_label": "Stressed / Illiquid",
            "jump_probability": 0.21353318589050888,
            "jump_rate": 0.06666406542317957,
            "risk_score": 0.30691928425917786,
            "metrics": {
              "rolling_vol_10d": 0.01502366815284167,
              "downside_vol_10d": 8.783730810203872e-06,
              "drawdown_21d": 5.959400812742467e-162,
              "amihud_stress": 0.0,
              "spread_rel": 2733.503441519726,
              "spread_ticks": 354.2956040150937,
              "log_notional": 0.0,
              "log_trade_count": 0.0
            }
          },
          {
            "id": 3,
            "label": "Jump / Tail Shock",
            "pct_time": 0.17529880478087762,
            "expected_duration_days": 2.6912039925140947,
            "current_probability": 1.0,
            "current_probability_display": ">99.9%",
            "current_probability_basis": "filtered",
            "n_days_effective": 44.000000000000284,
            "volatility": {
              "median": 0.059735019649955395,
              "low": 0.059735019649955395,
              "high": 0.059735019649955395
            },
            "volatility_label": "Jump / Tail Shock",
            "jump_probability": 0.5035623760209423,
            "jump_rate": 0.4318181818181853,
            "risk_score": 0.8451057090364921,
            "metrics": {
              "rolling_vol_10d": 0.03900699922049957,
              "downside_vol_10d": 0.016933052795059845,
              "drawdown_21d": 0.03246150530220364,
              "amihud_stress": 2.840700238748587,
              "spread_rel": 2029.8263958506063,
              "spread_ticks": 242.84433596706376,
              "log_notional": 4.763784736637916,
              "log_trade_count": 0.541895277383432
            }
          }
        ],
        "transitions": [
          [
            0.9149485583703322,
            8.531320870994013e-05,
            0.008566861013485345,
            0.0763992674074726
          ],
          [
            0.10255616210945966,
            0.8626843474081066,
            0.03441072271914731,
            0.0003487677632864614
          ],
          [
            0.0666882869228059,
            0.03342636807664683,
            0.7833239451981676,
            0.11656139980237962
          ],
          [
            0.06974518533702813,
            0.04659249110271183,
            0.2552432229575629,
            0.628419100602697
          ]
        ]
      }
    },
    "order_book": {
      "bids": [
        {
          "level": 1,
          "price": 15.2,
          "quantity": 200.0,
          "value": 3040.0
        },
        {
          "level": 2,
          "price": 13.1,
          "quantity": 1200.0,
          "value": 15720.0
        },
        {
          "level": 3,
          "price": 9.0,
          "quantity": 1000.0,
          "value": 9000.0
        }
      ],
      "asks": [
        {
          "level": 1,
          "price": 16.3,
          "quantity": 300.0,
          "value": 4890.0
        },
        {
          "level": 2,
          "price": 19.98,
          "quantity": 600.0,
          "value": 11988.0
        }
      ]
    },
    "execution_dynamic": {
      "snapshot": {
        "valid": true,
        "snapshot_time": "2026-05-21 01:00:02.870600000",
        "snapshot_basis": "last_continuous_session_snapshot",
        "snapshot_label": "final continuous-session displayed book before close",
        "snapshot_note": "Final continuous-session displayed book before close",
        "snapshot_mic": "XSES",
        "mid_price": 15.75,
        "spread_pct": 0.06984126984126993,
        "spread_ticks": 110.0,
        "tick_size": 0.01,
        "displayed_levels_per_side": 100,
        "bid_depth_notional_displayed": 27760.0,
        "ask_depth_notional_displayed": 16878.0,
        "bid_depth_notional_top10": 27760.0,
        "ask_depth_notional_top10": 16878.0,
        "bid_ask_depth_ratio": 1.6447
      },
      "historical_trade_scenarios": {
        "valid": true,
        "requested_lookback_calendar_days": 365,
        "lookback_calendar_days": 365,
        "effective_calendar_days": 357,
        "history_limited": true,
        "trade_days_used": 26,
        "n_trades_used": 45,
        "first_trade_date": "2025-05-23",
        "last_trade_date": "2026-05-14",
        "window_label": "May 23, 2025 to May 14, 2026",
        "window_short_label": "May 23, 2025 to May 14, 2026",
        "trade_days_label": "26 trading days",
        "trade_count_label": "45 trades",
        "window_detail_label": "26 trading days • 45 trades",
        "history_note": "Trade-size percentiles use available history from May 23, 2025 to May 14, 2026 (26 trading days • 45 trades), not a full year.",
        "scenarios": [
          {
            "key": "p90",
            "label": "90th percentile trade",
            "quantile": 0.9,
            "trade_notional": 7985.6,
            "impact_pct": -0.12208000000000001,
            "filled_pct": 100.0,
            "levels_consumed": 2,
            "pct_of_bid_depth": 28.77,
            "pct_of_adv": null
          },
          {
            "key": "p95",
            "label": "95th percentile trade",
            "quantile": 0.95,
            "trade_notional": 13600.0,
            "impact_pct": -0.14174899999999999,
            "filled_pct": 100.0,
            "levels_consumed": 2,
            "pct_of_bid_depth": 48.99,
            "pct_of_adv": null
          },
          {
            "key": "p99_99",
            "label": "99.99th percentile trade",
            "quantile": 0.9999,
            "trade_notional": 22514.68,
            "impact_pct": -0.213342,
            "filled_pct": 100.0,
            "levels_consumed": 3,
            "pct_of_bid_depth": 81.1,
            "pct_of_adv": null
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
            "order_id": "8149098049229467648",
            "timestamp": "2026-05-20 22:59:06.627000000",
            "local_timestamp": "2026-05-21 06:59:06",
            "posted_price": 19.98,
            "size_shares": 600.0,
            "notional": 11988.0,
            "impact_pct": -0.138056,
            "filled_pct": 100.0,
            "levels_consumed": 2,
            "pct_of_bid_depth": 43.18,
            "price_vs_mid_pct": 26.857,
            "executed_event_count": 0,
            "event_count": 2
          },
          {
            "rank": 2,
            "order_id": "8146327279925967872",
            "timestamp": "2026-05-21 01:00:02.870600000",
            "local_timestamp": "2026-05-21 09:00:02",
            "posted_price": 16.3,
            "size_shares": 300.0,
            "notional": 4890.0,
            "impact_pct": -0.090103,
            "filled_pct": 100.0,
            "levels_consumed": 2,
            "pct_of_bid_depth": 17.62,
            "price_vs_mid_pct": 3.492,
            "executed_event_count": 0,
            "event_count": 2
          }
        ]
      },
      "intraday_liquidity_profile": {
        "valid": true,
        "trade_date": "2026-05-21",
        "bucket_minutes": 30,
        "displayed_levels_per_side": 100,
        "tick_size": 0.01,
        "timezone": "SGT (UTC+8)",
        "session_label": "SGX continuous trading session",
        "bucket_label_basis": "bucket start time",
        "display_window_label": "SGX continuous trading session",
        "bucket_note": "Buckets cover the SGX continuous trading session (auctions excluded).",
        "reason": null,
        "rows": [
          {
            "bucket": "09:00",
            "spread_pct": 0.06984126984126993,
            "spread_ticks": 110.00000000000014,
            "bid_depth_notional": 27760.0,
            "ask_depth_notional": 16878.0,
            "mid_price": 15.75
          }
        ],
        "summary": {
          "median_spread_pct": 0.06984126984126993,
          "median_spread_ticks": 110.00000000000014,
          "median_bid_depth_notional": 27760.0,
          "median_ask_depth_notional": 16878.0,
          "tightest_bucket": "09:00",
          "widest_bucket": "09:00",
          "deepest_bid_bucket": "09:00",
          "thinnest_bid_bucket": "09:00"
        }
      }
    },
    "peer_capacity": {
      "bx_ticket_pct_adv_50k": null,
      "peers": [
        {
          "ticker": "D05",
          "pct": 0.4
        },
        {
          "ticker": "O39",
          "pct": 1.0
        },
        {
          "ticker": "U11",
          "pct": 1.3
        },
        {
          "ticker": "S68",
          "pct": 2.6
        },
        {
          "ticker": "G07",
          "pct": 306.4
        },
        {
          "ticker": "CJN",
          "pct": null
        },
        {
          "ticker": "8A1",
          "pct": null
        },
        {
          "ticker": "5QY",
          "pct": null
        }
      ]
    },
    "trader_composition": {
      "primary_period": "6m",
      "periods": {
        "1d": {
          "valid": false,
          "currency": "USD",
          "n_trades": 0,
          "n_runs": 0,
          "n_trade_days": 0,
          "first_trade_date": null,
          "last_trade_date": null,
          "period_days": 0,
          "method": {
            "key": "legacy_size_threshold",
            "name": "Trade-size buckets",
            "version": "legacy",
            "unit_of_classification": null
          },
          "thresholds": {
            "retail_max": 10000.0,
            "instit_min": 50000.0
          },
          "composition": {
            "retail_pct": 0.0,
            "mixed_pct": 0.0,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": null,
            "mixed_qty_pct": null,
            "instit_qty_pct": null,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.0,
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
            "avg": 0.0,
            "median": 0.0
          },
          "run_size": {
            "avg": null,
            "median": null,
            "avg_length": null
          },
          "recent_trades": [],
          "peer_comparison": [
            {
              "ticker": "8A1",
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
              "avg_trade_size": 130.93333333333334,
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
              "ticker": "G07",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.9583333333333334,
              "mixed_pct": 0.041666666666666664,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.7894736842105263,
              "mixed_qty_pct": 0.21052631578947367,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.7893989559485697,
              "mixed_notional_pct": 0.21060104405143032,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 3426.15625,
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
              "ticker": "S68",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.775030525030525,
              "mixed_pct": 0.18986568986568986,
              "instit_pct": 0.035103785103785104,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.25462128623654806,
              "mixed_qty_pct": 0.4141393337109315,
              "instit_qty_pct": 0.33123938005252046,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.2546597041598298,
              "mixed_notional_pct": 0.41433033497651384,
              "instit_notional_pct": 0.33100996086365636,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 13169.029609279609,
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
              "ticker": "O39",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.7218614718614719,
              "mixed_pct": 0.23766233766233766,
              "instit_pct": 0.04047619047619048,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.22890689598147843,
              "mixed_qty_pct": 0.44372416074086324,
              "instit_qty_pct": 0.32736894327765836,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.2288465255854147,
              "mixed_notional_pct": 0.4436997804114608,
              "instit_notional_pct": 0.3274536940031245,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 15258.663852813852,
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
              "ticker": "U11",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.6512090096058297,
              "mixed_pct": 0.28751242133156674,
              "instit_pct": 0.06127856906260351,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.1788955454060146,
              "mixed_qty_pct": 0.41995373391067087,
              "instit_qty_pct": 0.40115072068331453,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.17881278181398075,
              "mixed_notional_pct": 0.41983612923911073,
              "instit_notional_pct": 0.4013510889469085,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 21124.91288506128,
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
              "ticker": "D05",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.5329964328180737,
              "mixed_pct": 0.34690844233055884,
              "instit_pct": 0.12009512485136742,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.13044223517312306,
              "mixed_qty_pct": 0.3685864472631699,
              "instit_qty_pct": 0.500971317563707,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.13045721723344308,
              "mixed_notional_pct": 0.3686499590580686,
              "instit_notional_pct": 0.5008928237084883,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 32087.004161712248,
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
          "currency": "USD",
          "n_trades": 5,
          "n_runs": 0,
          "n_trade_days": 2,
          "first_trade_date": "2026-05-05",
          "last_trade_date": "2026-05-14",
          "period_days": 9,
          "method": {
            "key": "legacy_size_threshold",
            "name": "Trade-size buckets",
            "version": "legacy",
            "unit_of_classification": null
          },
          "thresholds": {
            "retail_max": 10000.0,
            "instit_min": 50000.0
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
              "retail": 5,
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
            "avg": 2766.0,
            "median": 1580.0
          },
          "run_size": {
            "avg": null,
            "median": null,
            "avg_length": null
          },
          "recent_trades": [],
          "peer_comparison": [
            {
              "ticker": "K6S",
              "currency": "USD",
              "is_target": true,
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
              "avg_trade_size": 2766.0,
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
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "CJN",
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
              "avg_trade_size": 10304.0,
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
              "ticker": "8A1",
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
              "avg_trade_size": 303.96153846153845,
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
              "ticker": "5QY",
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
              "avg_trade_size": 282.35,
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
              "ticker": "G07",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.8495713172252534,
              "mixed_pct": 0.13717848791894,
              "instit_pct": 0.013250194855806703,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.34657236126224156,
              "mixed_qty_pct": 0.38751360174102284,
              "instit_qty_pct": 0.2659140369967356,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.3464560340236706,
              "mixed_notional_pct": 0.38750500750203015,
              "instit_notional_pct": 0.2660389584742993,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 8979.123148869836,
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
              "ticker": "S68",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.7789661319073083,
              "mixed_pct": 0.20053475935828877,
              "instit_pct": 0.020499108734402853,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.2944594380060327,
              "mixed_qty_pct": 0.495761231941578,
              "instit_qty_pct": 0.20977933005238927,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.2945522764535494,
              "mixed_notional_pct": 0.4953358051110893,
              "instit_notional_pct": 0.21011191843536128,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 11307.677899976457,
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
              "ticker": "O39",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.6799101225003995,
              "mixed_pct": 0.25465604933861063,
              "instit_pct": 0.06543382816098978,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.1647309393970573,
              "mixed_qty_pct": 0.37831361251157525,
              "instit_qty_pct": 0.4569554480913674,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.16453055080658824,
              "mixed_notional_pct": 0.37843254266888754,
              "instit_notional_pct": 0.4570369065245243,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 20413.688634632923,
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
              "ticker": "U11",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.6494116639058662,
              "mixed_pct": 0.27897412463585997,
              "instit_pct": 0.07161421145827383,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.16673312405298224,
              "mixed_qty_pct": 0.389723029780159,
              "instit_qty_pct": 0.44354384616685877,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.16674073153921917,
              "mixed_notional_pct": 0.38956342826353874,
              "instit_notional_pct": 0.4436958401972421,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 21768.919089507053,
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
              "ticker": "D05",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.5328381193948727,
              "mixed_pct": 0.31658005912920306,
              "instit_pct": 0.1505818214759242,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.10192119039987568,
              "mixed_qty_pct": 0.26507304020124905,
              "instit_qty_pct": 0.6330057693988752,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.10167969143862345,
              "mixed_notional_pct": 0.26525012499822104,
              "instit_notional_pct": 0.6330701835631555,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 40004.62108721969,
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
          "currency": "USD",
          "n_trades": 12,
          "n_runs": 0,
          "n_trade_days": 5,
          "first_trade_date": "2026-03-09",
          "last_trade_date": "2026-05-14",
          "period_days": 66,
          "method": {
            "key": "legacy_size_threshold",
            "name": "Trade-size buckets",
            "version": "legacy",
            "unit_of_classification": null
          },
          "thresholds": {
            "retail_max": 10000.0,
            "instit_min": 50000.0
          },
          "composition": {
            "retail_pct": 0.9166666666666666,
            "mixed_pct": 0.08333333333333333,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.6,
            "mixed_qty_pct": 0.4,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.6073652856756024,
            "mixed_notional_pct": 0.3926347143243975,
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
              "retail": 11,
              "mixed": 1,
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
            "avg": 3077.5,
            "median": 1515.0
          },
          "run_size": {
            "avg": null,
            "median": null,
            "avg_length": null
          },
          "recent_trades": [],
          "peer_comparison": [
            {
              "ticker": "K6S",
              "currency": "USD",
              "is_target": true,
              "retail_pct": 0.9166666666666666,
              "mixed_pct": 0.08333333333333333,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.6,
              "mixed_qty_pct": 0.4,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.6073652856756024,
              "mixed_notional_pct": 0.3926347143243975,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 3077.5,
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
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "CJN",
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
              "avg_trade_size": 4270.6,
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
              "ticker": "8A1",
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
              "avg_trade_size": 356.0244897959184,
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
              "ticker": "5QY",
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
              "avg_trade_size": 689.0903225806453,
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
              "ticker": "G07",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.8252427184466019,
              "mixed_pct": 0.15996301433194637,
              "instit_pct": 0.014794267221451687,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.37398660556926333,
              "mixed_qty_pct": 0.4166764579172052,
              "instit_qty_pct": 0.2093369365135315,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.3739490008394097,
              "mixed_notional_pct": 0.41697734881937315,
              "instit_notional_pct": 0.20907365034121717,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 9331.95492371706,
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
              "ticker": "S68",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.7680939862466396,
              "mixed_pct": 0.20827082931079724,
              "instit_pct": 0.023635184442563135,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.2697310316154094,
              "mixed_qty_pct": 0.4925469704461977,
              "instit_qty_pct": 0.23772199793839288,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.2709071685952558,
              "mixed_notional_pct": 0.4924467174198197,
              "instit_notional_pct": 0.23664611398492447,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 11864.087347205514,
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
              "ticker": "O39",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.6882260852651162,
              "mixed_pct": 0.25066902590455753,
              "instit_pct": 0.06110488883032625,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.17149923235488765,
              "mixed_qty_pct": 0.3930089789511218,
              "instit_qty_pct": 0.4354917886939906,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.1714167380592009,
              "mixed_notional_pct": 0.3922722809673678,
              "instit_notional_pct": 0.43631098097343124,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 19508.299839684765,
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
              "ticker": "U11",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.6496479520552982,
              "mixed_pct": 0.2776628796235017,
              "instit_pct": 0.07268916832120009,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.1632408886668058,
              "mixed_qty_pct": 0.3907768967735278,
              "instit_qty_pct": 0.4459822145596664,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.16333643045322518,
              "mixed_notional_pct": 0.3903505432053573,
              "instit_notional_pct": 0.4463130263414175,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 21793.012523898815,
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
              "ticker": "D05",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.5387053141170033,
              "mixed_pct": 0.32445471487969424,
              "instit_pct": 0.1368399710033024,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.10971781899648864,
              "mixed_qty_pct": 0.2923198269985908,
              "instit_qty_pct": 0.5979623540049205,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.10966746351364462,
              "mixed_notional_pct": 0.29170986369495117,
              "instit_notional_pct": 0.5986226727914042,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 36490.37599051219,
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
        "6m": {
          "valid": true,
          "currency": "USD",
          "n_trades": 18,
          "n_runs": 0,
          "n_trade_days": 11,
          "first_trade_date": "2025-11-27",
          "last_trade_date": "2026-05-14",
          "period_days": 168,
          "method": {
            "key": "legacy_size_threshold",
            "name": "Trade-size buckets",
            "version": "legacy",
            "unit_of_classification": null
          },
          "thresholds": {
            "retail_max": 10000.0,
            "instit_min": 50000.0
          },
          "composition": {
            "retail_pct": 0.8333333333333334,
            "mixed_pct": 0.16666666666666666,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.359375,
            "mixed_qty_pct": 0.640625,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.3686491316245044,
            "mixed_notional_pct": 0.6313508683754956,
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
              "retail": 15,
              "mixed": 3,
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
            "avg": 4974.166666666667,
            "median": 1515.0
          },
          "run_size": {
            "avg": null,
            "median": null,
            "avg_length": null
          },
          "recent_trades": [],
          "peer_comparison": [
            {
              "ticker": "K6S",
              "currency": "USD",
              "is_target": true,
              "retail_pct": 0.8333333333333334,
              "mixed_pct": 0.16666666666666666,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.359375,
              "mixed_qty_pct": 0.640625,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.3686491316245044,
              "mixed_notional_pct": 0.6313508683754956,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 4974.166666666667,
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
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "CJN",
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
              "avg_trade_size": 3912.3636363636365,
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
              "ticker": "8A1",
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
              "avg_trade_size": 300.25625,
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
              "ticker": "5QY",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.9976653696498055,
              "mixed_pct": 0.0023346303501945525,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.9221554077995706,
              "mixed_qty_pct": 0.07784459220042937,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.9215276248732074,
              "mixed_notional_pct": 0.0784723751267926,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 580.6995330739298,
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
              "ticker": "G07",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.8137285986049461,
              "mixed_pct": 0.17073557387444516,
              "instit_pct": 0.015535827520608751,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.36004186837629204,
              "mixed_qty_pct": 0.4350385974093942,
              "instit_qty_pct": 0.20491953421431375,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.3604377027410361,
              "mixed_notional_pct": 0.4349850453212188,
              "instit_notional_pct": 0.20457725193774512,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 9487.129993658846,
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
              "ticker": "S68",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.7719280110551342,
              "mixed_pct": 0.20402489581406483,
              "instit_pct": 0.024047093130800952,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.2686121038053686,
              "mixed_qty_pct": 0.48639066685409993,
              "instit_qty_pct": 0.24499722934053145,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.26894859553570144,
              "mixed_notional_pct": 0.48658617646219915,
              "instit_notional_pct": 0.24446522800209938,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 11765.677722707638,
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
              "ticker": "O39",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.6963191983333933,
              "mixed_pct": 0.24497302738510385,
              "instit_pct": 0.058707774281502895,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.17658811109910152,
              "mixed_qty_pct": 0.39775244465273735,
              "instit_qty_pct": 0.42565944424816116,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.17611772593746186,
              "mixed_notional_pct": 0.39716972502507203,
              "instit_notional_pct": 0.4267125490374661,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 18739.00077578198,
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
              "ticker": "U11",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.6420766689952803,
              "mixed_pct": 0.27976223800054034,
              "instit_pct": 0.07816109300417934,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.15566411391951981,
              "mixed_qty_pct": 0.37700595110727053,
              "instit_qty_pct": 0.4673299349732096,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.1550818764991254,
              "mixed_notional_pct": 0.3762740130167157,
              "instit_notional_pct": 0.46864411048415894,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 22806.844568691264,
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
              "ticker": "D05",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.5495547990558468,
              "mixed_pct": 0.3162383441485094,
              "instit_pct": 0.13420685679564381,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.1135962991044339,
              "mixed_qty_pct": 0.28856462482890927,
              "instit_qty_pct": 0.5978390760666569,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.11337636661382823,
              "mixed_notional_pct": 0.28822864481192617,
              "instit_notional_pct": 0.5983949885742456,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 35931.844834812146,
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
      "currency": "USD",
      "n_trades": 18,
      "n_runs": 0,
      "n_trade_days": 11,
      "first_trade_date": "2025-11-27",
      "last_trade_date": "2026-05-14",
      "period_days": 168,
      "method": {
        "key": "legacy_size_threshold",
        "name": "Trade-size buckets",
        "version": "legacy",
        "unit_of_classification": null
      },
      "thresholds": {
        "retail_max": 10000.0,
        "instit_min": 50000.0
      },
      "composition": {
        "retail_pct": 0.8333333333333334,
        "mixed_pct": 0.16666666666666666,
        "instit_pct": 0.0,
        "ambiguous_pct": null,
        "unobservable_pct": null,
        "unclear_pct": null,
        "retail_qty_pct": null,
        "mixed_qty_pct": null,
        "instit_qty_pct": null,
        "ambiguous_qty_pct": null,
        "unobservable_qty_pct": null,
        "unclear_qty_pct": null,
        "retail_notional_pct": 0.3686491316245044,
        "mixed_notional_pct": 0.6313508683754956,
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
        "unclear_pct": null
      },
      "trade_size": {
        "avg": 4974.166666666667,
        "median": 1515.0
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
            "n_trades": 5,
            "n_runs": 0,
            "retail_pct": 1.0,
            "mixed_pct": 0.0,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "avg_trade_size": 2766.0,
            "avg_run_notional": null,
            "retail_qty_pct": 1.0,
            "mixed_qty_pct": 0.0,
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
            "total_quantity": 900.0
          },
          {
            "month": "2026-04",
            "n_trades": 6,
            "n_runs": 0,
            "retail_pct": 0.8333333333333334,
            "mixed_pct": 0.16666666666666666,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "avg_trade_size": 3640.0,
            "avg_run_notional": null,
            "retail_qty_pct": 0.3333333333333333,
            "mixed_qty_pct": 0.6666666666666666,
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
            "total_quantity": 1500.0
          },
          {
            "month": "2026-03",
            "n_trades": 1,
            "n_runs": 0,
            "retail_pct": 1.0,
            "mixed_pct": 0.0,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "avg_trade_size": 1260.0,
            "avg_run_notional": null,
            "retail_qty_pct": 1.0,
            "mixed_qty_pct": 0.0,
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
            "total_quantity": 100.0
          },
          {
            "month": "2026-02",
            "n_trades": 1,
            "n_runs": 0,
            "retail_pct": 0.0,
            "mixed_pct": 1.0,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "avg_trade_size": 22528.0,
            "avg_run_notional": null,
            "retail_qty_pct": 0.0,
            "mixed_qty_pct": 1.0,
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
            "total_quantity": 1600.0
          },
          {
            "month": "2026-01",
            "n_trades": 1,
            "n_runs": 0,
            "retail_pct": 1.0,
            "mixed_pct": 0.0,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "avg_trade_size": 1389.0,
            "avg_run_notional": null,
            "retail_qty_pct": 1.0,
            "mixed_qty_pct": 0.0,
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
            "total_quantity": 100.0
          },
          {
            "month": "2025-12",
            "n_trades": 2,
            "n_runs": 0,
            "retail_pct": 1.0,
            "mixed_pct": 0.0,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "avg_trade_size": 1344.0,
            "avg_run_notional": null,
            "retail_qty_pct": 1.0,
            "mixed_qty_pct": 0.0,
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
            "total_quantity": 200.0
          }
        ]
      },
      "peer_comparison": [
        {
          "ticker": "K6S",
          "currency": "USD",
          "is_target": true,
          "retail_pct": 0.8333333333333334,
          "mixed_pct": 0.16666666666666666,
          "instit_pct": 0.0,
          "ambiguous_pct": null,
          "unobservable_pct": null,
          "unclear_pct": null,
          "retail_qty_pct": 0.359375,
          "mixed_qty_pct": 0.640625,
          "instit_qty_pct": 0.0,
          "ambiguous_qty_pct": null,
          "unobservable_qty_pct": null,
          "unclear_qty_pct": null,
          "retail_notional_pct": 0.3686491316245044,
          "mixed_notional_pct": 0.6313508683754956,
          "instit_notional_pct": 0.0,
          "ambiguous_notional_pct": null,
          "unobservable_notional_pct": null,
          "unclear_notional_pct": null,
          "run_retail_pct": null,
          "run_mixed_pct": null,
          "run_instit_pct": null,
          "run_unclear_pct": null,
          "avg_trade_size": 4974.166666666667,
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
            "retail_max": 10000.0,
            "instit_min": 50000.0
          }
        },
        {
          "ticker": "CJN",
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
          "avg_trade_size": 3912.3636363636365,
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
          "ticker": "8A1",
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
          "avg_trade_size": 300.25625,
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
          "ticker": "5QY",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.9976653696498055,
          "mixed_pct": 0.0023346303501945525,
          "instit_pct": 0.0,
          "ambiguous_pct": null,
          "unobservable_pct": null,
          "unclear_pct": null,
          "retail_qty_pct": 0.9221554077995706,
          "mixed_qty_pct": 0.07784459220042937,
          "instit_qty_pct": 0.0,
          "ambiguous_qty_pct": null,
          "unobservable_qty_pct": null,
          "unclear_qty_pct": null,
          "retail_notional_pct": 0.9215276248732074,
          "mixed_notional_pct": 0.0784723751267926,
          "instit_notional_pct": 0.0,
          "ambiguous_notional_pct": null,
          "unobservable_notional_pct": null,
          "unclear_notional_pct": null,
          "run_retail_pct": null,
          "run_mixed_pct": null,
          "run_instit_pct": null,
          "run_unclear_pct": null,
          "avg_trade_size": 580.6995330739298,
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
          "ticker": "G07",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.8137285986049461,
          "mixed_pct": 0.17073557387444516,
          "instit_pct": 0.015535827520608751,
          "ambiguous_pct": null,
          "unobservable_pct": null,
          "unclear_pct": null,
          "retail_qty_pct": 0.36004186837629204,
          "mixed_qty_pct": 0.4350385974093942,
          "instit_qty_pct": 0.20491953421431375,
          "ambiguous_qty_pct": null,
          "unobservable_qty_pct": null,
          "unclear_qty_pct": null,
          "retail_notional_pct": 0.3604377027410361,
          "mixed_notional_pct": 0.4349850453212188,
          "instit_notional_pct": 0.20457725193774512,
          "ambiguous_notional_pct": null,
          "unobservable_notional_pct": null,
          "unclear_notional_pct": null,
          "run_retail_pct": null,
          "run_mixed_pct": null,
          "run_instit_pct": null,
          "run_unclear_pct": null,
          "avg_trade_size": 9487.129993658846,
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
          "ticker": "S68",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.7719280110551342,
          "mixed_pct": 0.20402489581406483,
          "instit_pct": 0.024047093130800952,
          "ambiguous_pct": null,
          "unobservable_pct": null,
          "unclear_pct": null,
          "retail_qty_pct": 0.2686121038053686,
          "mixed_qty_pct": 0.48639066685409993,
          "instit_qty_pct": 0.24499722934053145,
          "ambiguous_qty_pct": null,
          "unobservable_qty_pct": null,
          "unclear_qty_pct": null,
          "retail_notional_pct": 0.26894859553570144,
          "mixed_notional_pct": 0.48658617646219915,
          "instit_notional_pct": 0.24446522800209938,
          "ambiguous_notional_pct": null,
          "unobservable_notional_pct": null,
          "unclear_notional_pct": null,
          "run_retail_pct": null,
          "run_mixed_pct": null,
          "run_instit_pct": null,
          "run_unclear_pct": null,
          "avg_trade_size": 11765.677722707638,
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
          "ticker": "O39",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.6963191983333933,
          "mixed_pct": 0.24497302738510385,
          "instit_pct": 0.058707774281502895,
          "ambiguous_pct": null,
          "unobservable_pct": null,
          "unclear_pct": null,
          "retail_qty_pct": 0.17658811109910152,
          "mixed_qty_pct": 0.39775244465273735,
          "instit_qty_pct": 0.42565944424816116,
          "ambiguous_qty_pct": null,
          "unobservable_qty_pct": null,
          "unclear_qty_pct": null,
          "retail_notional_pct": 0.17611772593746186,
          "mixed_notional_pct": 0.39716972502507203,
          "instit_notional_pct": 0.4267125490374661,
          "ambiguous_notional_pct": null,
          "unobservable_notional_pct": null,
          "unclear_notional_pct": null,
          "run_retail_pct": null,
          "run_mixed_pct": null,
          "run_instit_pct": null,
          "run_unclear_pct": null,
          "avg_trade_size": 18739.00077578198,
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
          "ticker": "U11",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.6420766689952803,
          "mixed_pct": 0.27976223800054034,
          "instit_pct": 0.07816109300417934,
          "ambiguous_pct": null,
          "unobservable_pct": null,
          "unclear_pct": null,
          "retail_qty_pct": 0.15566411391951981,
          "mixed_qty_pct": 0.37700595110727053,
          "instit_qty_pct": 0.4673299349732096,
          "ambiguous_qty_pct": null,
          "unobservable_qty_pct": null,
          "unclear_qty_pct": null,
          "retail_notional_pct": 0.1550818764991254,
          "mixed_notional_pct": 0.3762740130167157,
          "instit_notional_pct": 0.46864411048415894,
          "ambiguous_notional_pct": null,
          "unobservable_notional_pct": null,
          "unclear_notional_pct": null,
          "run_retail_pct": null,
          "run_mixed_pct": null,
          "run_instit_pct": null,
          "run_unclear_pct": null,
          "avg_trade_size": 22806.844568691264,
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
          "ticker": "D05",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.5495547990558468,
          "mixed_pct": 0.3162383441485094,
          "instit_pct": 0.13420685679564381,
          "ambiguous_pct": null,
          "unobservable_pct": null,
          "unclear_pct": null,
          "retail_qty_pct": 0.1135962991044339,
          "mixed_qty_pct": 0.28856462482890927,
          "instit_qty_pct": 0.5978390760666569,
          "ambiguous_qty_pct": null,
          "unobservable_qty_pct": null,
          "unclear_qty_pct": null,
          "retail_notional_pct": 0.11337636661382823,
          "mixed_notional_pct": 0.28822864481192617,
          "instit_notional_pct": 0.5983949885742456,
          "ambiguous_notional_pct": null,
          "unobservable_notional_pct": null,
          "unclear_notional_pct": null,
          "run_retail_pct": null,
          "run_mixed_pct": null,
          "run_instit_pct": null,
          "run_unclear_pct": null,
          "avg_trade_size": 35931.844834812146,
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
            "ticker": "8A1",
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
            "avg_trade_size": 130.93333333333334,
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
            "ticker": "G07",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.9583333333333334,
            "mixed_pct": 0.041666666666666664,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.7894736842105263,
            "mixed_qty_pct": 0.21052631578947367,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.7893989559485697,
            "mixed_notional_pct": 0.21060104405143032,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 3426.15625,
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
            "ticker": "S68",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.775030525030525,
            "mixed_pct": 0.18986568986568986,
            "instit_pct": 0.035103785103785104,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.25462128623654806,
            "mixed_qty_pct": 0.4141393337109315,
            "instit_qty_pct": 0.33123938005252046,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.2546597041598298,
            "mixed_notional_pct": 0.41433033497651384,
            "instit_notional_pct": 0.33100996086365636,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 13169.029609279609,
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
            "ticker": "O39",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.7218614718614719,
            "mixed_pct": 0.23766233766233766,
            "instit_pct": 0.04047619047619048,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.22890689598147843,
            "mixed_qty_pct": 0.44372416074086324,
            "instit_qty_pct": 0.32736894327765836,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.2288465255854147,
            "mixed_notional_pct": 0.4436997804114608,
            "instit_notional_pct": 0.3274536940031245,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 15258.663852813852,
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
            "ticker": "U11",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.6512090096058297,
            "mixed_pct": 0.28751242133156674,
            "instit_pct": 0.06127856906260351,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.1788955454060146,
            "mixed_qty_pct": 0.41995373391067087,
            "instit_qty_pct": 0.40115072068331453,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.17881278181398075,
            "mixed_notional_pct": 0.41983612923911073,
            "instit_notional_pct": 0.4013510889469085,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 21124.91288506128,
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
            "ticker": "D05",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.5329964328180737,
            "mixed_pct": 0.34690844233055884,
            "instit_pct": 0.12009512485136742,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.13044223517312306,
            "mixed_qty_pct": 0.3685864472631699,
            "instit_qty_pct": 0.500971317563707,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.13045721723344308,
            "mixed_notional_pct": 0.3686499590580686,
            "instit_notional_pct": 0.5008928237084883,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 32087.004161712248,
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
            "ticker": "K6S",
            "currency": "USD",
            "is_target": true,
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
            "avg_trade_size": 2766.0,
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
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "CJN",
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
            "avg_trade_size": 10304.0,
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
            "ticker": "8A1",
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
            "avg_trade_size": 303.96153846153845,
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
            "ticker": "5QY",
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
            "avg_trade_size": 282.35,
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
            "ticker": "G07",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.8495713172252534,
            "mixed_pct": 0.13717848791894,
            "instit_pct": 0.013250194855806703,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.34657236126224156,
            "mixed_qty_pct": 0.38751360174102284,
            "instit_qty_pct": 0.2659140369967356,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.3464560340236706,
            "mixed_notional_pct": 0.38750500750203015,
            "instit_notional_pct": 0.2660389584742993,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 8979.123148869836,
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
            "ticker": "S68",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.7789661319073083,
            "mixed_pct": 0.20053475935828877,
            "instit_pct": 0.020499108734402853,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.2944594380060327,
            "mixed_qty_pct": 0.495761231941578,
            "instit_qty_pct": 0.20977933005238927,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.2945522764535494,
            "mixed_notional_pct": 0.4953358051110893,
            "instit_notional_pct": 0.21011191843536128,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 11307.677899976457,
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
            "ticker": "O39",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.6799101225003995,
            "mixed_pct": 0.25465604933861063,
            "instit_pct": 0.06543382816098978,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.1647309393970573,
            "mixed_qty_pct": 0.37831361251157525,
            "instit_qty_pct": 0.4569554480913674,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.16453055080658824,
            "mixed_notional_pct": 0.37843254266888754,
            "instit_notional_pct": 0.4570369065245243,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 20413.688634632923,
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
            "ticker": "U11",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.6494116639058662,
            "mixed_pct": 0.27897412463585997,
            "instit_pct": 0.07161421145827383,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.16673312405298224,
            "mixed_qty_pct": 0.389723029780159,
            "instit_qty_pct": 0.44354384616685877,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.16674073153921917,
            "mixed_notional_pct": 0.38956342826353874,
            "instit_notional_pct": 0.4436958401972421,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 21768.919089507053,
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
            "ticker": "D05",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.5328381193948727,
            "mixed_pct": 0.31658005912920306,
            "instit_pct": 0.1505818214759242,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.10192119039987568,
            "mixed_qty_pct": 0.26507304020124905,
            "instit_qty_pct": 0.6330057693988752,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.10167969143862345,
            "mixed_notional_pct": 0.26525012499822104,
            "instit_notional_pct": 0.6330701835631555,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 40004.62108721969,
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
            "ticker": "K6S",
            "currency": "USD",
            "is_target": true,
            "retail_pct": 0.9166666666666666,
            "mixed_pct": 0.08333333333333333,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.6,
            "mixed_qty_pct": 0.4,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.6073652856756024,
            "mixed_notional_pct": 0.3926347143243975,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 3077.5,
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
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "CJN",
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
            "avg_trade_size": 4270.6,
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
            "ticker": "8A1",
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
            "avg_trade_size": 356.0244897959184,
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
            "ticker": "5QY",
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
            "avg_trade_size": 689.0903225806453,
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
            "ticker": "G07",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.8252427184466019,
            "mixed_pct": 0.15996301433194637,
            "instit_pct": 0.014794267221451687,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.37398660556926333,
            "mixed_qty_pct": 0.4166764579172052,
            "instit_qty_pct": 0.2093369365135315,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.3739490008394097,
            "mixed_notional_pct": 0.41697734881937315,
            "instit_notional_pct": 0.20907365034121717,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 9331.95492371706,
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
            "ticker": "S68",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.7680939862466396,
            "mixed_pct": 0.20827082931079724,
            "instit_pct": 0.023635184442563135,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.2697310316154094,
            "mixed_qty_pct": 0.4925469704461977,
            "instit_qty_pct": 0.23772199793839288,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.2709071685952558,
            "mixed_notional_pct": 0.4924467174198197,
            "instit_notional_pct": 0.23664611398492447,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 11864.087347205514,
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
            "ticker": "O39",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.6882260852651162,
            "mixed_pct": 0.25066902590455753,
            "instit_pct": 0.06110488883032625,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.17149923235488765,
            "mixed_qty_pct": 0.3930089789511218,
            "instit_qty_pct": 0.4354917886939906,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.1714167380592009,
            "mixed_notional_pct": 0.3922722809673678,
            "instit_notional_pct": 0.43631098097343124,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 19508.299839684765,
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
            "ticker": "U11",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.6496479520552982,
            "mixed_pct": 0.2776628796235017,
            "instit_pct": 0.07268916832120009,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.1632408886668058,
            "mixed_qty_pct": 0.3907768967735278,
            "instit_qty_pct": 0.4459822145596664,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.16333643045322518,
            "mixed_notional_pct": 0.3903505432053573,
            "instit_notional_pct": 0.4463130263414175,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 21793.012523898815,
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
            "ticker": "D05",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.5387053141170033,
            "mixed_pct": 0.32445471487969424,
            "instit_pct": 0.1368399710033024,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.10971781899648864,
            "mixed_qty_pct": 0.2923198269985908,
            "instit_qty_pct": 0.5979623540049205,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.10966746351364462,
            "mixed_notional_pct": 0.29170986369495117,
            "instit_notional_pct": 0.5986226727914042,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 36490.37599051219,
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
        "6m": [
          {
            "ticker": "K6S",
            "currency": "USD",
            "is_target": true,
            "retail_pct": 0.8333333333333334,
            "mixed_pct": 0.16666666666666666,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.359375,
            "mixed_qty_pct": 0.640625,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.3686491316245044,
            "mixed_notional_pct": 0.6313508683754956,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 4974.166666666667,
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
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "CJN",
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
            "avg_trade_size": 3912.3636363636365,
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
            "ticker": "8A1",
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
            "avg_trade_size": 300.25625,
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
            "ticker": "5QY",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.9976653696498055,
            "mixed_pct": 0.0023346303501945525,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.9221554077995706,
            "mixed_qty_pct": 0.07784459220042937,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.9215276248732074,
            "mixed_notional_pct": 0.0784723751267926,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 580.6995330739298,
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
            "ticker": "G07",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.8137285986049461,
            "mixed_pct": 0.17073557387444516,
            "instit_pct": 0.015535827520608751,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.36004186837629204,
            "mixed_qty_pct": 0.4350385974093942,
            "instit_qty_pct": 0.20491953421431375,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.3604377027410361,
            "mixed_notional_pct": 0.4349850453212188,
            "instit_notional_pct": 0.20457725193774512,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 9487.129993658846,
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
            "ticker": "S68",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.7719280110551342,
            "mixed_pct": 0.20402489581406483,
            "instit_pct": 0.024047093130800952,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.2686121038053686,
            "mixed_qty_pct": 0.48639066685409993,
            "instit_qty_pct": 0.24499722934053145,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.26894859553570144,
            "mixed_notional_pct": 0.48658617646219915,
            "instit_notional_pct": 0.24446522800209938,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 11765.677722707638,
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
            "ticker": "O39",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.6963191983333933,
            "mixed_pct": 0.24497302738510385,
            "instit_pct": 0.058707774281502895,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.17658811109910152,
            "mixed_qty_pct": 0.39775244465273735,
            "instit_qty_pct": 0.42565944424816116,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.17611772593746186,
            "mixed_notional_pct": 0.39716972502507203,
            "instit_notional_pct": 0.4267125490374661,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 18739.00077578198,
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
            "ticker": "U11",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.6420766689952803,
            "mixed_pct": 0.27976223800054034,
            "instit_pct": 0.07816109300417934,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.15566411391951981,
            "mixed_qty_pct": 0.37700595110727053,
            "instit_qty_pct": 0.4673299349732096,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.1550818764991254,
            "mixed_notional_pct": 0.3762740130167157,
            "instit_notional_pct": 0.46864411048415894,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 22806.844568691264,
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
            "ticker": "D05",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.5495547990558468,
            "mixed_pct": 0.3162383441485094,
            "instit_pct": 0.13420685679564381,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.1135962991044339,
            "mixed_qty_pct": 0.28856462482890927,
            "instit_qty_pct": 0.5978390760666569,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.11337636661382823,
            "mixed_notional_pct": 0.28822864481192617,
            "instit_notional_pct": 0.5983949885742456,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 35931.844834812146,
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
        "USD": {
          "retail_max": 10000.0,
          "instit_min": 50000.0
        },
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
      "total_trades": 17,
      "price_moving_trades": 10,
      "pct_price_moving": 58.82352941176471,
      "all_movers": {
        "count": 10,
        "avg_size": 2905.9,
        "median_size": 1465.0,
        "retail_count": 9,
        "mixed_count": 1,
        "institutional_count": 0,
        "ambiguous_count": 0,
        "unobservable_count": 0,
        "retail_pct": 90.0,
        "mixed_pct": 10.0,
        "instit_pct": 0.0,
        "unclear_pct": null
      },
      "positive_movers": {
        "count": 7,
        "avg_size": 3325.5714285714284,
        "median_size": 1480.0,
        "retail_count": 6,
        "mixed_count": 1,
        "institutional_count": 0,
        "ambiguous_count": 0,
        "unobservable_count": 0,
        "retail_pct": 85.71428571428571,
        "mixed_pct": 14.285714285714285,
        "instit_pct": 0.0,
        "unclear_pct": null
      },
      "negative_movers": {
        "count": 3,
        "avg_size": 1926.6666666666667,
        "median_size": 1420.0,
        "retail_count": 3,
        "mixed_count": 0,
        "institutional_count": 0,
        "ambiguous_count": 0,
        "unobservable_count": 0,
        "retail_pct": 100.0,
        "mixed_pct": 0.0,
        "instit_pct": 0.0,
        "unclear_pct": null
      }
    },
    "short_selling": {
      "data_available": true,
      "security_name": "DFIRG USD",
      "mapping": {
        "ticker_to_security": "DFIRG USD",
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
            "avg_short_ratio": 752.8862732919254,
            "max_short_ratio": 13371.47,
            "interpretation": "High short interest"
          }
        },
        "3M": {
          "stats": {
            "valid": true,
            "avg_short_ratio": 1348.1295659340658,
            "max_short_ratio": 43473.0,
            "interpretation": "High short interest"
          }
        },
        "6M": {
          "stats": {
            "valid": true,
            "avg_short_ratio": 1528.99689514652,
            "max_short_ratio": 43473.0,
            "interpretation": "High short interest"
          }
        }
      },
      "correlation": {
        "valid": true,
        "correlation": -0.3216986775558439,
        "interpretation": "Strong negative - high shorts coincide with price drops"
      },
      "peaks": [
        {
          "date": "2026-03-09",
          "short_ratio": 43473.0,
          "return_pct": -10.511363636363635
        },
        {
          "date": "2026-01-15",
          "short_ratio": 42678.7,
          "return_pct": 2.2827687776141525
        },
        {
          "date": "2025-12-10",
          "short_ratio": 36864.85,
          "return_pct": 2.105263157894721
        },
        {
          "date": "2025-12-09",
          "short_ratio": 22633.3,
          "return_pct": 2.3076923076923217
        },
        {
          "date": "2026-04-16",
          "short_ratio": 21462.6,
          "return_pct": 4.137931034482767
        }
      ],
      "short_interest_change": {
        "valid": true,
        "monthly_data": [
          {
            "month": "2026-05",
            "avg_short_ratio": 1236.8845918367347
          },
          {
            "month": "2026-04",
            "avg_short_ratio": 1278.0494047619047
          },
          {
            "month": "2026-03",
            "avg_short_ratio": 1976.0454545454545
          },
          {
            "month": "2026-02",
            "avg_short_ratio": 126.34618055555555
          },
          {
            "month": "2026-01",
            "avg_short_ratio": 2032.3190476190475
          },
          {
            "month": "2025-12",
            "avg_short_ratio": 2704.4613636363633
          },
          {
            "month": "2025-11",
            "avg_short_ratio": 1077.0928333333334
          },
          {
            "month": "2025-10",
            "avg_short_ratio": 2319.8012727272726
          },
          {
            "month": "2025-09",
            "avg_short_ratio": 3251.472195322793
          },
          {
            "month": "2025-08",
            "avg_short_ratio": 0.0
          },
          {
            "month": "2025-07",
            "avg_short_ratio": 1216.513043478261
          },
          {
            "month": "2025-06",
            "avg_short_ratio": 711.2285714285714
          }
        ],
        "mom_change": [
          {
            "month": "2026-05",
            "avg_short_ratio": 1236.8845918367347,
            "change_pct": null
          },
          {
            "month": "2026-04",
            "avg_short_ratio": 1278.0494047619047,
            "change_pct": 3.3281045941433876
          },
          {
            "month": "2026-03",
            "avg_short_ratio": 1976.0454545454545,
            "change_pct": 54.61416805820457
          },
          {
            "month": "2026-02",
            "avg_short_ratio": 126.34618055555555,
            "change_pct": -93.60610960315087
          },
          {
            "month": "2026-01",
            "avg_short_ratio": 2032.3190476190475,
            "change_pct": 1508.5322395047936
          },
          {
            "month": "2025-12",
            "avg_short_ratio": 2704.4613636363633,
            "change_pct": 33.07267708801728
          },
          {
            "month": "2025-11",
            "avg_short_ratio": 1077.0928333333334,
            "change_pct": -60.1734804639584
          },
          {
            "month": "2025-10",
            "avg_short_ratio": 2319.8012727272726,
            "change_pct": 115.3761682312997
          },
          {
            "month": "2025-09",
            "avg_short_ratio": 3251.472195322793,
            "change_pct": 40.16166960285362
          },
          {
            "month": "2025-08",
            "avg_short_ratio": 0.0,
            "change_pct": -100.0
          },
          {
            "month": "2025-07",
            "avg_short_ratio": 1216.513043478261,
            "change_pct": null
          },
          {
            "month": "2025-06",
            "avg_short_ratio": 711.2285714285714,
            "change_pct": -41.535475082534035
          }
        ],
        "interpretation": "Short interest stable | YoY: +74% ⬆️"
      },
      "short_series": {
        "valid": true,
        "rows": [
          {
            "date": "2026-05-21",
            "short_ratio": 0.0,
            "short_vol": 3888442,
            "total_vol": 0,
            "close": 15.5,
            "return": 0.0
          },
          {
            "date": "2026-05-20",
            "short_ratio": 0.0,
            "short_vol": 2053129,
            "total_vol": 0,
            "close": 15.5,
            "return": 0.0
          },
          {
            "date": "2026-05-19",
            "short_ratio": 0.0,
            "short_vol": 2402940,
            "total_vol": 0,
            "close": 15.5,
            "return": 0.0
          },
          {
            "date": "2026-05-18",
            "short_ratio": 0.0,
            "short_vol": 3352313,
            "total_vol": 0,
            "close": 15.5,
            "return": 0.0
          },
          {
            "date": "2026-05-15",
            "short_ratio": 0.0,
            "short_vol": 2508750,
            "total_vol": 0,
            "close": 15.5,
            "return": 0.0
          },
          {
            "date": "2026-05-14",
            "short_ratio": 13371.47,
            "short_vol": 2674294,
            "total_vol": 200,
            "close": 15.5,
            "return": -0.01898734177215189
          },
          {
            "date": "2026-05-13",
            "short_ratio": 0.0,
            "short_vol": 2958800,
            "total_vol": 0,
            "close": 15.8,
            "return": 0.0
          },
          {
            "date": "2026-05-12",
            "short_ratio": 0.0,
            "short_vol": 4080185,
            "total_vol": 0,
            "close": 15.8,
            "return": 0.0
          },
          {
            "date": "2026-05-11",
            "short_ratio": 0.0,
            "short_vol": 2724481,
            "total_vol": 0,
            "close": 15.8,
            "return": 0.0
          },
          {
            "date": "2026-05-08",
            "short_ratio": 0.0,
            "short_vol": 3080400,
            "total_vol": 0,
            "close": 15.8,
            "return": 0.0
          },
          {
            "date": "2026-05-07",
            "short_ratio": 0.0,
            "short_vol": 6357300,
            "total_vol": 0,
            "close": 15.8,
            "return": 0.0
          },
          {
            "date": "2026-05-06",
            "short_ratio": 0.0,
            "short_vol": 3047084,
            "total_vol": 0,
            "close": 15.8,
            "return": 0.0
          },
          {
            "date": "2026-05-05",
            "short_ratio": 3944.9142857142856,
            "short_vol": 2761440,
            "total_vol": 700,
            "close": 15.8,
            "return": 0.04635761589403975
          },
          {
            "date": "2026-05-04",
            "short_ratio": 0.0,
            "short_vol": 3656226,
            "total_vol": 0,
            "close": 15.1,
            "return": 0.0
          },
          {
            "date": "2026-04-30",
            "short_ratio": 0.0,
            "short_vol": 9395511,
            "total_vol": 0,
            "close": 15.1,
            "return": 0.0
          },
          {
            "date": "2026-04-29",
            "short_ratio": 0.0,
            "short_vol": 3148318,
            "total_vol": 0,
            "close": 15.1,
            "return": 0.0
          },
          {
            "date": "2026-04-28",
            "short_ratio": 0.0,
            "short_vol": 3484680,
            "total_vol": 0,
            "close": 15.1,
            "return": 0.0
          },
          {
            "date": "2026-04-27",
            "short_ratio": 0.0,
            "short_vol": 3405300,
            "total_vol": 0,
            "close": 15.1,
            "return": 0.0
          },
          {
            "date": "2026-04-24",
            "short_ratio": 0.0,
            "short_vol": 4740215,
            "total_vol": 0,
            "close": 15.1,
            "return": 0.0
          },
          {
            "date": "2026-04-23",
            "short_ratio": 0.0,
            "short_vol": 3129900,
            "total_vol": 0,
            "close": 15.1,
            "return": 0.0
          },
          {
            "date": "2026-04-22",
            "short_ratio": 0.0,
            "short_vol": 3119475,
            "total_vol": 0,
            "close": 15.1,
            "return": 0.0
          },
          {
            "date": "2026-04-21",
            "short_ratio": 0.0,
            "short_vol": 2494570,
            "total_vol": 0,
            "close": 15.1,
            "return": 0.0
          },
          {
            "date": "2026-04-20",
            "short_ratio": 0.0,
            "short_vol": 2583500,
            "total_vol": 0,
            "close": 15.1,
            "return": 0.0
          },
          {
            "date": "2026-04-17",
            "short_ratio": 0.0,
            "short_vol": 2644270,
            "total_vol": 0,
            "close": 15.1,
            "return": 0.0
          },
          {
            "date": "2026-04-16",
            "short_ratio": 21462.6,
            "short_vol": 6438780,
            "total_vol": 300,
            "close": 15.1,
            "return": 0.04137931034482767
          },
          {
            "date": "2026-04-15",
            "short_ratio": 5376.4375,
            "short_vol": 6451725,
            "total_vol": 1200,
            "close": 14.5,
            "return": 0.15079365079365092
          },
          {
            "date": "2026-04-14",
            "short_ratio": 0.0,
            "short_vol": 3235200,
            "total_vol": 0,
            "close": 12.6,
            "return": 0.0
          },
          {
            "date": "2026-04-13",
            "short_ratio": 0.0,
            "short_vol": 3672390,
            "total_vol": 0,
            "close": 12.6,
            "return": 0.0
          },
          {
            "date": "2026-04-10",
            "short_ratio": 0.0,
            "short_vol": 3834430,
            "total_vol": 0,
            "close": 12.6,
            "return": 0.0
          },
          {
            "date": "2026-04-09",
            "short_ratio": 0.0,
            "short_vol": 3267230,
            "total_vol": 0,
            "close": 12.6,
            "return": 0.0
          },
          {
            "date": "2026-04-08",
            "short_ratio": 0.0,
            "short_vol": 5588480,
            "total_vol": 0,
            "close": 12.6,
            "return": 0.0
          },
          {
            "date": "2026-04-07",
            "short_ratio": 0.0,
            "short_vol": 3341010,
            "total_vol": 0,
            "close": 12.6,
            "return": 0.0
          },
          {
            "date": "2026-04-06",
            "short_ratio": 0.0,
            "short_vol": 992270,
            "total_vol": 0,
            "close": 12.6,
            "return": 0.0
          },
          {
            "date": "2026-04-02",
            "short_ratio": 0.0,
            "short_vol": 1917430,
            "total_vol": 0,
            "close": 12.6,
            "return": 0.0
          },
          {
            "date": "2026-04-01",
            "short_ratio": 0.0,
            "short_vol": 3134841,
            "total_vol": 0,
            "close": 12.6,
            "return": 0.0
          },
          {
            "date": "2026-03-31",
            "short_ratio": 0.0,
            "short_vol": 4494123,
            "total_vol": 0,
            "close": 12.6,
            "return": 0.0
          },
          {
            "date": "2026-03-30",
            "short_ratio": 0.0,
            "short_vol": 5681500,
            "total_vol": 0,
            "close": 12.6,
            "return": 0.0
          },
          {
            "date": "2026-03-27",
            "short_ratio": 0.0,
            "short_vol": 3440380,
            "total_vol": 0,
            "close": 12.6,
            "return": 0.0
          },
          {
            "date": "2026-03-26",
            "short_ratio": 0.0,
            "short_vol": 3103890,
            "total_vol": 0,
            "close": 12.6,
            "return": 0.0
          },
          {
            "date": "2026-03-25",
            "short_ratio": 0.0,
            "short_vol": 3866110,
            "total_vol": 0,
            "close": 12.6,
            "return": 0.0
          },
          {
            "date": "2026-03-24",
            "short_ratio": 0.0,
            "short_vol": 2889733,
            "total_vol": 0,
            "close": 12.6,
            "return": 0.0
          },
          {
            "date": "2026-03-23",
            "short_ratio": 0.0,
            "short_vol": 8165870,
            "total_vol": 0,
            "close": 12.6,
            "return": 0.0
          },
          {
            "date": "2026-03-20",
            "short_ratio": 0.0,
            "short_vol": 13891210,
            "total_vol": 0,
            "close": 12.6,
            "return": 0.0
          },
          {
            "date": "2026-03-19",
            "short_ratio": 0.0,
            "short_vol": 3784600,
            "total_vol": 0,
            "close": 12.6,
            "return": 0.0
          },
          {
            "date": "2026-03-18",
            "short_ratio": 0.0,
            "short_vol": 3184200,
            "total_vol": 0,
            "close": 12.6,
            "return": 0.0
          },
          {
            "date": "2026-03-17",
            "short_ratio": 0.0,
            "short_vol": 3332778,
            "total_vol": 0,
            "close": 12.6,
            "return": 0.0
          },
          {
            "date": "2026-03-16",
            "short_ratio": 0.0,
            "short_vol": 5395650,
            "total_vol": 0,
            "close": 12.6,
            "return": 0.0
          },
          {
            "date": "2026-03-13",
            "short_ratio": 0.0,
            "short_vol": 4995981,
            "total_vol": 0,
            "close": 12.6,
            "return": 0.0
          },
          {
            "date": "2026-03-12",
            "short_ratio": 0.0,
            "short_vol": 3656715,
            "total_vol": 0,
            "close": 12.6,
            "return": 0.0
          },
          {
            "date": "2026-03-11",
            "short_ratio": 0.0,
            "short_vol": 3933992,
            "total_vol": 0,
            "close": 12.6,
            "return": 0.0
          },
          {
            "date": "2026-03-10",
            "short_ratio": 0.0,
            "short_vol": 2341126,
            "total_vol": 0,
            "close": 12.6,
            "return": 0.0
          },
          {
            "date": "2026-03-09",
            "short_ratio": 43473.0,
            "short_vol": 4347300,
            "total_vol": 100,
            "close": 12.6,
            "return": -0.10511363636363635
          },
          {
            "date": "2026-03-06",
            "short_ratio": 0.0,
            "short_vol": 2942537,
            "total_vol": 0,
            "close": 14.08,
            "return": 0.0
          },
          {
            "date": "2026-03-05",
            "short_ratio": 0.0,
            "short_vol": 3601521,
            "total_vol": 0,
            "close": 14.08,
            "return": 0.0
          },
          {
            "date": "2026-03-04",
            "short_ratio": 0.0,
            "short_vol": 9460380,
            "total_vol": 0,
            "close": 14.08,
            "return": 0.0
          },
          {
            "date": "2026-03-03",
            "short_ratio": 0.0,
            "short_vol": 22389959,
            "total_vol": 0,
            "close": 14.08,
            "return": 0.0
          },
          {
            "date": "2026-03-02",
            "short_ratio": 0.0,
            "short_vol": 5367242,
            "total_vol": 0,
            "close": 14.08,
            "return": 0.0
          },
          {
            "date": "2026-02-27",
            "short_ratio": 0.0,
            "short_vol": 8799670,
            "total_vol": 0,
            "close": 14.08,
            "return": 0.0
          },
          {
            "date": "2026-02-26",
            "short_ratio": 0.0,
            "short_vol": 4775511,
            "total_vol": 0,
            "close": 14.08,
            "return": 0.0
          },
          {
            "date": "2026-02-25",
            "short_ratio": 0.0,
            "short_vol": 2205520,
            "total_vol": 0,
            "close": 14.08,
            "return": 0.0
          },
          {
            "date": "2026-02-24",
            "short_ratio": 0.0,
            "short_vol": 4581433,
            "total_vol": 0,
            "close": 14.08,
            "return": 0.0
          },
          {
            "date": "2026-02-23",
            "short_ratio": 0.0,
            "short_vol": 3486730,
            "total_vol": 0,
            "close": 14.08,
            "return": 0.0
          },
          {
            "date": "2026-02-20",
            "short_ratio": 0.0,
            "short_vol": 3996994,
            "total_vol": 0,
            "close": 14.08,
            "return": 0.0
          },
          {
            "date": "2026-02-19",
            "short_ratio": 0.0,
            "short_vol": 4006166,
            "total_vol": 0,
            "close": 14.08,
            "return": 0.0
          },
          {
            "date": "2026-02-16",
            "short_ratio": 0.0,
            "short_vol": 1758400,
            "total_vol": 0,
            "close": 14.08,
            "return": 0.0
          },
          {
            "date": "2026-02-13",
            "short_ratio": 2274.23125,
            "short_vol": 3638770,
            "total_vol": 1600,
            "close": 14.08,
            "return": 0.01367890568754504
          },
          {
            "date": "2026-02-12",
            "short_ratio": 0.0,
            "short_vol": 4387830,
            "total_vol": 0,
            "close": 13.89,
            "return": 0.0
          },
          {
            "date": "2026-02-11",
            "short_ratio": 0.0,
            "short_vol": 5538420,
            "total_vol": 0,
            "close": 13.89,
            "return": 0.0
          },
          {
            "date": "2026-02-10",
            "short_ratio": 0.0,
            "short_vol": 2931230,
            "total_vol": 0,
            "close": 13.89,
            "return": 0.0
          },
          {
            "date": "2026-02-09",
            "short_ratio": 0.0,
            "short_vol": 4071130,
            "total_vol": 0,
            "close": 13.89,
            "return": 0.0
          },
          {
            "date": "2026-02-06",
            "short_ratio": 0.0,
            "short_vol": 3029405,
            "total_vol": 0,
            "close": 13.89,
            "return": 0.0
          },
          {
            "date": "2026-02-05",
            "short_ratio": 0.0,
            "short_vol": 3878880,
            "total_vol": 0,
            "close": 13.89,
            "return": 0.0
          },
          {
            "date": "2026-02-04",
            "short_ratio": 0.0,
            "short_vol": 6880030,
            "total_vol": 0,
            "close": 13.89,
            "return": 0.0
          },
          {
            "date": "2026-02-03",
            "short_ratio": 0.0,
            "short_vol": 3265170,
            "total_vol": 0,
            "close": 13.89,
            "return": 0.0
          },
          {
            "date": "2026-02-02",
            "short_ratio": 0.0,
            "short_vol": 5424883,
            "total_vol": 0,
            "close": 13.89,
            "return": 0.0
          },
          {
            "date": "2026-01-30",
            "short_ratio": 0.0,
            "short_vol": 11091750,
            "total_vol": 0,
            "close": 13.89,
            "return": 0.0
          },
          {
            "date": "2026-01-29",
            "short_ratio": 0.0,
            "short_vol": 9093500,
            "total_vol": 0,
            "close": 13.89,
            "return": 0.0
          },
          {
            "date": "2026-01-28",
            "short_ratio": 0.0,
            "short_vol": 3203280,
            "total_vol": 0,
            "close": 13.89,
            "return": 0.0
          },
          {
            "date": "2026-01-27",
            "short_ratio": 0.0,
            "short_vol": 8163569,
            "total_vol": 0,
            "close": 13.89,
            "return": 0.0
          },
          {
            "date": "2026-01-26",
            "short_ratio": 0.0,
            "short_vol": 4918620,
            "total_vol": 0,
            "close": 13.89,
            "return": 0.0
          },
          {
            "date": "2026-01-23",
            "short_ratio": 0.0,
            "short_vol": 5160130,
            "total_vol": 0,
            "close": 13.89,
            "return": 0.0
          },
          {
            "date": "2026-01-22",
            "short_ratio": 0.0,
            "short_vol": 6234206,
            "total_vol": 0,
            "close": 13.89,
            "return": 0.0
          },
          {
            "date": "2026-01-21",
            "short_ratio": 0.0,
            "short_vol": 3726930,
            "total_vol": 0,
            "close": 13.89,
            "return": 0.0
          },
          {
            "date": "2026-01-20",
            "short_ratio": 0.0,
            "short_vol": 6193270,
            "total_vol": 0,
            "close": 13.89,
            "return": 0.0
          },
          {
            "date": "2026-01-19",
            "short_ratio": 0.0,
            "short_vol": 2111120,
            "total_vol": 0,
            "close": 13.89,
            "return": 0.0
          },
          {
            "date": "2026-01-16",
            "short_ratio": 0.0,
            "short_vol": 2875800,
            "total_vol": 0,
            "close": 13.89,
            "return": 0.0
          },
          {
            "date": "2026-01-15",
            "short_ratio": 42678.7,
            "short_vol": 4267870,
            "total_vol": 100,
            "close": 13.89,
            "return": 0.022827687776141525
          },
          {
            "date": "2026-01-14",
            "short_ratio": 0.0,
            "short_vol": 2999360,
            "total_vol": 0,
            "close": 13.58,
            "return": 0.0
          },
          {
            "date": "2026-01-13",
            "short_ratio": 0.0,
            "short_vol": 3832240,
            "total_vol": 0,
            "close": 13.58,
            "return": 0.0
          },
          {
            "date": "2026-01-12",
            "short_ratio": 0.0,
            "short_vol": 3552540,
            "total_vol": 0,
            "close": 13.58,
            "return": 0.0
          },
          {
            "date": "2026-01-09",
            "short_ratio": 0.0,
            "short_vol": 2416690,
            "total_vol": 0,
            "close": 13.58,
            "return": 0.0
          },
          {
            "date": "2026-01-08",
            "short_ratio": 0.0,
            "short_vol": 3128896,
            "total_vol": 0,
            "close": 13.58,
            "return": 0.0
          },
          {
            "date": "2026-01-07",
            "short_ratio": 0.0,
            "short_vol": 2909530,
            "total_vol": 0,
            "close": 13.58,
            "return": 0.0
          },
          {
            "date": "2026-01-06",
            "short_ratio": 0.0,
            "short_vol": 6001121,
            "total_vol": 0,
            "close": 13.58,
            "return": 0.0
          },
          {
            "date": "2026-01-05",
            "short_ratio": 0.0,
            "short_vol": 9875140,
            "total_vol": 0,
            "close": 13.58,
            "return": 0.0
          },
          {
            "date": "2026-01-02",
            "short_ratio": 0.0,
            "short_vol": 1214290,
            "total_vol": 0,
            "close": 13.58,
            "return": 0.0
          },
          {
            "date": "2025-12-31",
            "short_ratio": 0.0,
            "short_vol": 1335330,
            "total_vol": 0,
            "close": 13.58,
            "return": 0.0
          },
          {
            "date": "2025-12-30",
            "short_ratio": 0.0,
            "short_vol": 2557057,
            "total_vol": 0,
            "close": 13.58,
            "return": 0.0
          },
          {
            "date": "2025-12-29",
            "short_ratio": 0.0,
            "short_vol": 1221350,
            "total_vol": 0,
            "close": 13.58,
            "return": 0.0
          },
          {
            "date": "2025-12-26",
            "short_ratio": 0.0,
            "short_vol": 1429690,
            "total_vol": 0,
            "close": 13.58,
            "return": 0.0
          }
        ]
      },
      "peer_comparison": [
        {
          "ticker": "K6S",
          "avg_short_ratio": 1348.1295659340658,
          "max_short_ratio": 43473.0,
          "is_target": true
        },
        {
          "ticker": "G07",
          "avg_short_ratio": 0.0006115971294325253,
          "max_short_ratio": 0.12048192771084337,
          "is_target": false
        },
        {
          "ticker": "D05",
          "avg_short_ratio": 0.057764806371831005,
          "max_short_ratio": 0.4500000874898293,
          "is_target": false
        },
        {
          "ticker": "S68",
          "avg_short_ratio": 0.0806202098335932,
          "max_short_ratio": 0.4301208053691275,
          "is_target": false
        },
        {
          "ticker": "O39",
          "avg_short_ratio": 0.0833725986688181,
          "max_short_ratio": 0.6282301538337058,
          "is_target": false
        },
        {
          "ticker": "U11",
          "avg_short_ratio": 0.0932834355802238,
          "max_short_ratio": 0.5729590452942772,
          "is_target": false
        }
      ]
    },
    "intraday": {
      "session_periods": [
        "1M",
        "3M",
        "6M"
      ],
      "session": {
        "1M": {
          "opening": 0.0,
          "continuous": 1.0,
          "closing": 0.0,
          "auctions": 0.0,
          "other": 0.0
        },
        "3M": {
          "opening": 0.0,
          "continuous": 1.0,
          "closing": 0.0,
          "auctions": 0.0,
          "other": 0.0
        },
        "6M": {
          "opening": 0.0,
          "continuous": 1.0,
          "closing": 0.0,
          "auctions": 0.0,
          "other": 0.0
        }
      },
      "hhi": {
        "1M": 0.8784083437488329,
        "3M": 0.8039852518660646,
        "6M": 0.9109023872118477
      },
      "profile_buckets": [
        {
          "time": "09:00",
          "avg_share": 0.148
        },
        {
          "time": "09:30",
          "avg_share": 0.148
        },
        {
          "time": "10:00",
          "avg_share": 0.05
        },
        {
          "time": "10:30",
          "avg_share": 0.148
        },
        {
          "time": "14:00",
          "avg_share": 0.148
        },
        {
          "time": "14:30",
          "avg_share": 0.1236
        },
        {
          "time": "15:30",
          "avg_share": 0.0801
        },
        {
          "time": "16:00",
          "avg_share": 0.0845
        },
        {
          "time": "16:30",
          "avg_share": 0.0697
        }
      ],
      "peers_hhi_rows": [
        {
          "ticker": "K6S",
          "auctions_pct": 0.0,
          "hhi": 0.8446988603590068,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400",
            "you": true
          }
        },
        {
          "ticker": "G07",
          "auctions_pct": 2.547158218688365,
          "hhi": 0.19083739068090305,
          "interp": {
            "text": "Moderate",
            "cls": "bg-amber-500/20 text-amber-400"
          }
        },
        {
          "ticker": "S68",
          "auctions_pct": 30.22518197727338,
          "hhi": 0.1366523945093455,
          "interp": {
            "text": "Spread out",
            "cls": "bg-emerald-500/20 text-emerald-400"
          }
        },
        {
          "ticker": "U11",
          "auctions_pct": 27.507874709874702,
          "hhi": 0.13058716262882314,
          "interp": {
            "text": "Spread out",
            "cls": "bg-emerald-500/20 text-emerald-400"
          }
        },
        {
          "ticker": "O39",
          "auctions_pct": 29.571443082039607,
          "hhi": 0.13620775698680582,
          "interp": {
            "text": "Spread out",
            "cls": "bg-emerald-500/20 text-emerald-400"
          }
        },
        {
          "ticker": "D05",
          "auctions_pct": 28.34571808732148,
          "hhi": 0.12081417738596822,
          "interp": {
            "text": "Spread out",
            "cls": "bg-emerald-500/20 text-emerald-400"
          }
        },
        {
          "ticker": "CJN",
          "auctions_pct": 0.2063768115942029,
          "hhi": 0.8843430367709214,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "8A1",
          "auctions_pct": 18.35226904650998,
          "hhi": 0.8438778024127395,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "5QY",
          "auctions_pct": 3.2272367529948416,
          "hhi": 0.7360523013866039,
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
