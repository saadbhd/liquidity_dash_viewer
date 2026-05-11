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
      "marketCap": 1144044274.45,
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
    "asof_date": "2026-04-30",
    "industry": "Real Estate",
    "sector": "REIT - Retail",
    "market_cap_display": "838.0M",
    "market_cap_category": "small",
    "universe_total": 558,
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
          "score_pca": 76.88172043010752,
          "score_pca_percentile": 76.88172043010752,
          "rank_pca": 130,
          "total": 558,
          "adv_notional_sgd": 623904.0,
          "adv_volume_shares": 931200.0,
          "free_float_shares": 457060801.0,
          "turnover_ratio": 0.002037365702686895,
          "votes": 326.0,
          "trades": 326.0,
          "spread_pct": 0.008078253092011194,
          "spread_ticks": 1.0742424242424242,
          "amihud": 1.2051208186646115e-08,
          "volatility": 0.1433653116071401
        },
        "pca": {
          "valid": true,
          "window_days": 1,
          "variance_explained": 0.514559882464961,
          "loadings": {
            "log_adv": 0.5520143598889956,
            "log_trades": 0.5022139183940489,
            "log_turnover": 0.5093875921154222,
            "neg_spread": 0.38185779765841,
            "neg_amihud": 0.019302446705604572,
            "neg_vol": -0.1933847087159074
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
          "peer_median_adv": 719995.5,
          "peer_median_score_pca": 78.13620071684588,
          "peer_median_trades": 819.0,
          "peer_median_volatility": 0.14229538134807682,
          "peer_median_spread_pct": 0.007685721065065567,
          "peer_median_spread_ticks": 1.0268780151619572,
          "peer_median_amihud": 1.0364907235064943e-08,
          "peer_median_turnover_ratio": 0.0008961109981962329,
          "target_vs_peer": {
            "score_pca_delta": -1.25,
            "adv_delta_pct": -13.3,
            "trades_delta_pct": -60.2,
            "volatility_delta_pct": -0.75,
            "spread_pct_delta_pct": -5.11,
            "spread_ticks_delta_pct": 4.61,
            "amihud_delta_pct": -16.27,
            "turnover_ratio_delta_pct": 127.36
          }
        },
        "peer_liquidity": [
          {
            "ticker": "CRPU",
            "score_pca": 76.88172043010752,
            "rank_pca": 130,
            "adv": 623904.0,
            "trades": 326.0,
            "volatility": 0.1433653116071401,
            "spread_pct": 0.008078253092011194,
            "spread_ticks": 1.0742424242424242,
            "amihud": 1.2051208186646115e-08,
            "turnover_ratio": 0.002037365702686895,
            "is_target": true
          },
          {
            "ticker": "AU8U",
            "score_pca": 78.13620071684588,
            "rank_pca": 123,
            "adv": 719995.5,
            "trades": 819.0,
            "volatility": 0.14229538134807682,
            "spread_pct": 0.007685721065065567,
            "spread_ticks": 1.0268780151619572,
            "amihud": 1.0364907235064943e-08,
            "turnover_ratio": 0.0008961109981962329,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "REIT - Retail",
          "sector_count": 8,
          "market_count": 558,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.2816908744434275,
              "median": 0.160232571142509,
              "min": 0.0,
              "max": 6.389024179247318,
              "p5": 0.0,
              "p95": 0.9118766894451064,
              "count": 558
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 5227244.489114854,
              "median": 25065.0,
              "min": 0.0,
              "max": 901467450.0,
              "p5": 0.0,
              "p95": 16276782.599999964,
              "count": 558
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.10425194310603855,
              "median": 0.026182625328308735,
              "min": 0.00031562120753807416,
              "max": 1.4782608695652175,
              "p5": 0.003381448291571923,
              "p95": 0.5024444581966706,
              "count": 556
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.00470710776152858,
              "median": 0.0005084146121290462,
              "min": 0.0,
              "max": 0.3888998747610573,
              "p5": 0.0,
              "p95": 0.017474662321408145,
              "count": 551
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 0.00010071994254475288,
              "median": 1.82109520336154e-08,
              "min": 0.0,
              "max": 0.027537372147915018,
              "p5": 0.0,
              "p95": 5.463842229118894e-05,
              "count": 442
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 614.763440860215,
              "median": 11.0,
              "min": 0.0,
              "max": 27969.0,
              "p5": 0.0,
              "p95": 3624.8999999999905,
              "count": 558
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.2973080982487225,
              "median": 0.14283034647760845,
              "min": 0.0,
              "max": 1.469613012006543,
              "p5": 0.030197172130689967,
              "p95": 1.0400860297250138,
              "count": 8
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 15895067.368265133,
              "median": 671949.75,
              "min": 0.0,
              "max": 102982140.0,
              "p5": 24997.576142373146,
              "p95": 74441249.99999996,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.039355528056372394,
              "median": 0.008564013423833654,
              "min": 0.00426899268792964,
              "max": 0.15384615384615383,
              "p5": 0.0042968166645094945,
              "p95": 0.14112808460634543,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0044010015427621615,
              "median": 0.0018154887112813585,
              "min": 0.0,
              "max": 0.01230835507560838,
              "p5": 6.27956496727264e-05,
              "p95": 0.01230626049530277,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 4.174145827566913e-08,
              "median": 3.9532952637324604e-10,
              "min": 0.0,
              "max": 2.6925687484395526e-07,
              "p5": 0.0,
              "p95": 1.9209517484676234e-07,
              "count": 7
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1514.375,
              "median": 345.5,
              "min": 0.0,
              "max": 6474.0,
              "p5": 15.05,
              "p95": 5604.249999999998,
              "count": 8
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 719995.5,
              "median": 719995.5,
              "min": 719995.5,
              "max": 719995.5,
              "p5": 719995.5,
              "p95": 719995.5,
              "count": 1
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 819.0,
              "median": 819.0,
              "min": 819.0,
              "max": 819.0,
              "p5": 819.0,
              "p95": 819.0,
              "count": 1
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.14229538134807682,
              "median": 0.14229538134807682,
              "min": 0.14229538134807682,
              "max": 0.14229538134807682,
              "p5": 0.14229538134807682,
              "p95": 0.14229538134807682,
              "count": 1
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.007685721065065567,
              "median": 0.007685721065065567,
              "min": 0.007685721065065567,
              "max": 0.007685721065065567,
              "p5": 0.007685721065065567,
              "p95": 0.007685721065065567,
              "count": 1
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 1.0268780151619572,
              "median": 1.0268780151619572,
              "min": 1.0268780151619572,
              "max": 1.0268780151619572,
              "p5": 1.0268780151619572,
              "p95": 1.0268780151619572,
              "count": 1
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.0364907235064943e-08,
              "median": 1.0364907235064943e-08,
              "min": 1.0364907235064943e-08,
              "max": 1.0364907235064943e-08,
              "p5": 1.0364907235064943e-08,
              "p95": 1.0364907235064943e-08,
              "count": 1
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0008961109981962329,
              "median": 0.0008961109981962329,
              "min": 0.0008961109981962329,
              "max": 0.0008961109981962329,
              "p5": 0.0008961109981962329,
              "p95": 0.0008961109981962329,
              "count": 1
            }
          },
          "returns": {
            "window_days": 1,
            "n_obs": 1,
            "stock": 0.007518796992481258,
            "market": 0.010639794994950824,
            "sector": 0.0,
            "peers": -0.007462686567164201,
            "vs_market": -0.003120998002469566,
            "vs_sector": 0.007518796992481258,
            "vs_peers": 0.014981483559645459
          }
        }
      },
      "30d": {
        "label": "1M",
        "window_days": 21,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 21,
          "score_pca": 82.25806451612904,
          "score_pca_percentile": 82.25806451612904,
          "rank_pca": 100,
          "total": 558,
          "adv_notional_sgd": 665645.0,
          "adv_volume_shares": 993500.0,
          "free_float_shares": 457060801.0,
          "turnover_ratio": 0.002173671419264852,
          "votes": 353.0,
          "trades": 353.0,
          "spread_pct": 0.007731277375652912,
          "spread_ticks": 1.0,
          "amihud": 5.0607336622513225e-09,
          "volatility": 0.12335390028583895
        },
        "pca": {
          "valid": true,
          "window_days": 21,
          "variance_explained": 0.5277732340819956,
          "loadings": {
            "log_adv": 0.5408658644144836,
            "log_trades": 0.49369817316398446,
            "log_turnover": 0.48815586425299945,
            "neg_spread": 0.4169357159753481,
            "neg_amihud": 0.12167737061634099,
            "neg_vol": 0.19180539342037045
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
          "peer_median_adv": 859978.0,
          "peer_median_score_pca": 84.22939068100358,
          "peer_median_trades": 767.0,
          "peer_median_volatility": 0.18783545193742213,
          "peer_median_spread_pct": 0.007507761783799047,
          "peer_median_spread_ticks": 1.0081615120274914,
          "peer_median_amihud": 8.693788528045263e-09,
          "peer_median_turnover_ratio": 0.0010703341118198655,
          "target_vs_peer": {
            "score_pca_delta": -1.97,
            "adv_delta_pct": -22.6,
            "trades_delta_pct": -53.98,
            "volatility_delta_pct": 34.33,
            "spread_pct_delta_pct": -2.98,
            "spread_ticks_delta_pct": -0.81,
            "amihud_delta_pct": 41.79,
            "turnover_ratio_delta_pct": 103.08
          }
        },
        "peer_liquidity": [
          {
            "ticker": "CRPU",
            "score_pca": 82.25806451612904,
            "rank_pca": 100,
            "adv": 665645.0,
            "trades": 353.0,
            "volatility": 0.12335390028583895,
            "spread_pct": 0.007731277375652912,
            "spread_ticks": 1.0,
            "amihud": 5.0607336622513225e-09,
            "turnover_ratio": 0.002173671419264852,
            "is_target": true
          },
          {
            "ticker": "AU8U",
            "score_pca": 84.22939068100358,
            "rank_pca": 89,
            "adv": 859978.0,
            "trades": 767.0,
            "volatility": 0.18783545193742213,
            "spread_pct": 0.007507761783799047,
            "spread_ticks": 1.0081615120274914,
            "amihud": 8.693788528045263e-09,
            "turnover_ratio": 0.0010703341118198655,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "REIT - Retail",
          "sector_count": 8,
          "market_count": 558,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.6494830736513201,
              "median": 0.38944501560688194,
              "min": 0.0,
              "max": 8.049844718999244,
              "p5": 0.034561705544431,
              "p95": 2.0124425144656475,
              "count": 558
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 3148549.933612279,
              "median": 14817.5,
              "min": 0.0,
              "max": 255589391.20000002,
              "p5": 0.0,
              "p95": 13192364.899999984,
              "count": 558
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.10479641865970517,
              "median": 0.030506584605759605,
              "min": 0.00024072671116111928,
              "max": 1.2394366197183098,
              "p5": 0.0032976466502244593,
              "p95": 0.5193435919108051,
              "count": 556
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.004418226783935413,
              "median": 0.0003025948228041995,
              "min": 0.0,
              "max": 0.8766725990376376,
              "p5": 0.0,
              "p95": 0.013019871997280826,
              "count": 551
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 3.587965542916422e-05,
              "median": 9.618871456287589e-08,
              "min": 0.0,
              "max": 0.010416666666666664,
              "p5": 0.0,
              "p95": 6.111895169321125e-05,
              "count": 539
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 469.60394265232975,
              "median": 8.0,
              "min": 0.0,
              "max": 12136.0,
              "p5": 0.0,
              "p95": 2691.999999999999,
              "count": 558
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.33250130981996195,
              "median": 0.14346665932792935,
              "min": 0.07963451988822416,
              "max": 1.6545135133888744,
              "p5": 0.09291674331489183,
              "p95": 1.1489883993564383,
              "count": 8
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 10134326.236029362,
              "median": 700981.75,
              "min": 0.0,
              "max": 68220088.0,
              "p5": 2992.5000000000005,
              "p95": 48008430.79999997,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.03928621403388679,
              "median": 0.008390525565654514,
              "min": 0.004233058864274688,
              "max": 0.15384615384615383,
              "p5": 0.004323388976417426,
              "p95": 0.14112808460634543,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0023808254376265514,
              "median": 0.0010214462473997097,
              "min": 0.0,
              "max": 0.007755315839123227,
              "p5": 0.00010190938609458527,
              "p95": 0.007257836358253938,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 2.5999916923087596e-09,
              "median": 3.5985649047632923e-10,
              "min": 0.0,
              "max": 8.693788528045263e-09,
              "p5": 0.0,
              "p95": 7.864956971756713e-09,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1199.875,
              "median": 382.5,
              "min": 0.0,
              "max": 6054.0,
              "p5": 3.5000000000000004,
              "p95": 4621.099999999998,
              "count": 8
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 859978.0,
              "median": 859978.0,
              "min": 859978.0,
              "max": 859978.0,
              "p5": 859978.0,
              "p95": 859978.0,
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
              "mean": 0.18783545193742213,
              "median": 0.18783545193742213,
              "min": 0.18783545193742213,
              "max": 0.18783545193742213,
              "p5": 0.18783545193742213,
              "p95": 0.18783545193742213,
              "count": 1
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.007507761783799047,
              "median": 0.007507761783799047,
              "min": 0.007507761783799047,
              "max": 0.007507761783799047,
              "p5": 0.007507761783799047,
              "p95": 0.007507761783799047,
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
              "mean": 0.0010703341118198655,
              "median": 0.0010703341118198655,
              "min": 0.0010703341118198655,
              "max": 0.0010703341118198655,
              "p5": 0.0010703341118198655,
              "p95": 0.0010703341118198655,
              "count": 1
            }
          },
          "returns": {
            "window_days": 21,
            "n_obs": 21,
            "stock": 0.055118110236220375,
            "market": 0.005575688013334856,
            "sector": 0.03851845489657735,
            "peers": 0.039062500000000444,
            "vs_market": 0.04954242222288552,
            "vs_sector": 0.016599655339643027,
            "vs_peers": 0.01605561023621993
          }
        }
      },
      "3m": {
        "label": "3M",
        "window_days": 63,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 63,
          "score_pca": 84.05017921146953,
          "score_pca_percentile": 84.05017921146953,
          "rank_pca": 90,
          "total": 558,
          "adv_notional_sgd": 665645.0,
          "adv_volume_shares": 993500.0,
          "free_float_shares": 457060801.0,
          "turnover_ratio": 0.002173671419264852,
          "votes": 391.0,
          "trades": 391.0,
          "spread_pct": 0.007614324265188542,
          "spread_ticks": 1.0,
          "amihud": 5.306741041703646e-09,
          "volatility": 0.1796610805570141
        },
        "pca": {
          "valid": true,
          "window_days": 63,
          "variance_explained": 0.5542944314060634,
          "loadings": {
            "log_adv": 0.5213395114400176,
            "log_trades": 0.4716127273263677,
            "log_turnover": 0.4733740852067658,
            "neg_spread": 0.42679829901884253,
            "neg_amihud": 0.18139711555494284,
            "neg_vol": 0.2581507759292918
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
          "peer_median_adv": 1264870.5,
          "peer_median_score_pca": 86.37992831541219,
          "peer_median_trades": 884.0,
          "peer_median_volatility": 0.2040288597830883,
          "peer_median_spread_pct": 0.007507761783799047,
          "peer_median_spread_ticks": 1.0036416605972323,
          "peer_median_amihud": 6.095702901292444e-09,
          "peer_median_turnover_ratio": 0.001546985376123191,
          "target_vs_peer": {
            "score_pca_delta": -2.33,
            "adv_delta_pct": -47.4,
            "trades_delta_pct": -55.77,
            "volatility_delta_pct": 11.94,
            "spread_pct_delta_pct": -1.42,
            "spread_ticks_delta_pct": -0.36,
            "amihud_delta_pct": 12.94,
            "turnover_ratio_delta_pct": 40.51
          }
        },
        "peer_liquidity": [
          {
            "ticker": "CRPU",
            "score_pca": 84.05017921146953,
            "rank_pca": 90,
            "adv": 665645.0,
            "trades": 391.0,
            "volatility": 0.1796610805570141,
            "spread_pct": 0.007614324265188542,
            "spread_ticks": 1.0,
            "amihud": 5.306741041703646e-09,
            "turnover_ratio": 0.002173671419264852,
            "is_target": true
          },
          {
            "ticker": "AU8U",
            "score_pca": 86.37992831541219,
            "rank_pca": 77,
            "adv": 1264870.5,
            "trades": 884.0,
            "volatility": 0.2040288597830883,
            "spread_pct": 0.007507761783799047,
            "spread_ticks": 1.0036416605972323,
            "amihud": 6.095702901292444e-09,
            "turnover_ratio": 0.001546985376123191,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "REIT - Retail",
          "sector_count": 8,
          "market_count": 558,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.6907782585330128,
              "median": 0.46766188959969324,
              "min": 0.0,
              "max": 7.564774051590232,
              "p5": 0.15554013236796277,
              "p95": 2.2278319811159975,
              "count": 558
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 3284176.4110130025,
              "median": 13176.099999999999,
              "min": 0.0,
              "max": 290156410.0,
              "p5": 0.0,
              "p95": 13621181.09999999,
              "count": 558
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.10025896681994972,
              "median": 0.03014694831469046,
              "min": 0.00026514881605562373,
              "max": 1.3542204201990415,
              "p5": 0.0035375375201740092,
              "p95": 0.46548919358587026,
              "count": 556
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.005953140252602295,
              "median": 0.000250311670707795,
              "min": 0.0,
              "max": 2.0598510315733964,
              "p5": 0.0,
              "p95": 0.010438322993669199,
              "count": 551
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.8213040838505066e-05,
              "median": 1.4232342999466305e-07,
              "min": 0.0,
              "max": 0.002923830374993834,
              "p5": 0.0,
              "p95": 4.5391789577835974e-05,
              "count": 553
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 466.421146953405,
              "median": 7.0,
              "min": 0.0,
              "max": 11391.0,
              "p5": 0.0,
              "p95": 2704.099999999996,
              "count": 558
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.352529240026269,
              "median": 0.20043736827296424,
              "min": 0.12060389422884675,
              "max": 1.3975478017204905,
              "p5": 0.14127390944370533,
              "p95": 1.019461691178355,
              "count": 8
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 10555028.112366393,
              "median": 740900.5,
              "min": 0.0,
              "max": 69800718.0,
              "p5": 7571.550000000001,
              "p95": 49490497.29999997,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.037714950423146446,
              "median": 0.008332049010422329,
              "min": 0.004247569272483084,
              "max": 0.15384615384615383,
              "p5": 0.004341560280955303,
              "p95": 0.13666260657734464,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0026378332436425463,
              "median": 0.0013274705052151712,
              "min": 0.0,
              "max": 0.008113139420650676,
              "p5": 8.612144392734027e-05,
              "p95": 0.007690793538031613,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.0359034264374684e-06,
              "median": 5.44875254694933e-09,
              "min": 0.0,
              "max": 8.237503706876742e-06,
              "p5": 3.6793514848763786e-11,
              "p95": 5.3655998196380735e-06,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1220.25,
              "median": 471.5,
              "min": 0.0,
              "max": 5927.0,
              "p5": 6.300000000000001,
              "p95": 4538.549999999997,
              "count": 8
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 1264870.5,
              "median": 1264870.5,
              "min": 1264870.5,
              "max": 1264870.5,
              "p5": 1264870.5,
              "p95": 1264870.5,
              "count": 1
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 884.0,
              "median": 884.0,
              "min": 884.0,
              "max": 884.0,
              "p5": 884.0,
              "p95": 884.0,
              "count": 1
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.2040288597830883,
              "median": 0.2040288597830883,
              "min": 0.2040288597830883,
              "max": 0.2040288597830883,
              "p5": 0.2040288597830883,
              "p95": 0.2040288597830883,
              "count": 1
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.007507761783799047,
              "median": 0.007507761783799047,
              "min": 0.007507761783799047,
              "max": 0.007507761783799047,
              "p5": 0.007507761783799047,
              "p95": 0.007507761783799047,
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
              "mean": 0.001546985376123191,
              "median": 0.001546985376123191,
              "min": 0.001546985376123191,
              "max": 0.001546985376123191,
              "p5": 0.001546985376123191,
              "p95": 0.001546985376123191,
              "count": 1
            }
          },
          "returns": {
            "window_days": 63,
            "n_obs": 63,
            "stock": -0.021897810218978297,
            "market": 0.0006823926969565797,
            "sector": -0.008242578923160049,
            "peers": -0.1582278481012661,
            "vs_market": -0.022580202915934877,
            "vs_sector": -0.013655231295818249,
            "vs_peers": 0.1363300378822878
          }
        }
      },
      "6m": {
        "label": "6M",
        "window_days": 126,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 126,
          "score_pca": 85.12544802867383,
          "score_pca_percentile": 85.12544802867383,
          "rank_pca": 84,
          "total": 558,
          "adv_notional_sgd": 573307.75,
          "adv_volume_shares": 853700.0,
          "free_float_shares": 457060801.0,
          "turnover_ratio": 0.0018678040167351827,
          "votes": 360.0,
          "trades": 360.0,
          "spread_pct": 0.0074349442379182205,
          "spread_ticks": 1.0,
          "amihud": 3.9140585202070595e-09,
          "volatility": 0.14254074082835394
        },
        "pca": {
          "valid": true,
          "window_days": 126,
          "variance_explained": 0.5787411557100989,
          "loadings": {
            "log_adv": 0.5011447910097956,
            "log_trades": 0.44617622922418776,
            "log_turnover": 0.4557736598815658,
            "neg_spread": 0.4342619267566246,
            "neg_amihud": 0.26579891124244276,
            "neg_vol": 0.2877821391767601
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
          "peer_median_adv": 1120004.25,
          "peer_median_score_pca": 87.09677419354838,
          "peer_median_trades": 749.5,
          "peer_median_volatility": 0.17421776992401755,
          "peer_median_spread_pct": 0.006695461493057415,
          "peer_median_spread_ticks": 1.0063465439173724,
          "peer_median_amihud": 5.601395168776245e-09,
          "peer_median_turnover_ratio": 0.0012379773026249335,
          "target_vs_peer": {
            "score_pca_delta": -1.97,
            "adv_delta_pct": -48.8,
            "trades_delta_pct": -51.97,
            "volatility_delta_pct": 18.18,
            "spread_pct_delta_pct": -11.04,
            "spread_ticks_delta_pct": -0.63,
            "amihud_delta_pct": 30.12,
            "turnover_ratio_delta_pct": 50.88
          }
        },
        "peer_liquidity": [
          {
            "ticker": "CRPU",
            "score_pca": 85.12544802867383,
            "rank_pca": 84,
            "adv": 573307.75,
            "trades": 360.0,
            "volatility": 0.14254074082835394,
            "spread_pct": 0.0074349442379182205,
            "spread_ticks": 1.0,
            "amihud": 3.9140585202070595e-09,
            "turnover_ratio": 0.0018678040167351827,
            "is_target": true
          },
          {
            "ticker": "AU8U",
            "score_pca": 87.09677419354838,
            "rank_pca": 73,
            "adv": 1120004.25,
            "trades": 749.5,
            "volatility": 0.17421776992401755,
            "spread_pct": 0.006695461493057415,
            "spread_ticks": 1.0063465439173724,
            "amihud": 5.601395168776245e-09,
            "turnover_ratio": 0.0012379773026249335,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "REIT - Retail",
          "sector_count": 8,
          "market_count": 558,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.6912215864635497,
              "median": 0.4530927276604192,
              "min": 0.0,
              "max": 6.912950809089334,
              "p5": 0.15470698255634577,
              "p95": 2.0265197574532663,
              "count": 558
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 2640810.038799435,
              "median": 12006.0,
              "min": 0.0,
              "max": 248995371.0,
              "p5": 0.0,
              "p95": 10689058.124999989,
              "count": 558
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.09562291324519033,
              "median": 0.02879495851351771,
              "min": 0.0002712702706268827,
              "max": 1.267605633802817,
              "p5": 0.0035945046646466503,
              "p95": 0.48069699600800087,
              "count": 556
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0033101935128800907,
              "median": 0.00027582151505044477,
              "min": 0.0,
              "max": 0.8750247182123789,
              "p5": 0.0,
              "p95": 0.007244301967593434,
              "count": 551
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 9.731219991714626e-06,
              "median": 1.7202523851543683e-07,
              "min": 0.0,
              "max": 0.0006620397444526588,
              "p5": 0.0,
              "p95": 4.1666531842903055e-05,
              "count": 556
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 382.7231182795699,
              "median": 7.0,
              "min": 0.0,
              "max": 10156.5,
              "p5": 0.0,
              "p95": 2125.374999999998,
              "count": 558
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.3529423246804855,
              "median": 0.17044051782594966,
              "min": 0.1192669152094398,
              "max": 1.3328841135126952,
              "p5": 0.12741275417605974,
              "p95": 1.0614887761644698,
              "count": 8
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 8818702.010966985,
              "median": 641472.625,
              "min": 0.0,
              "max": 57398890.5,
              "p5": 12063.9225,
              "p95": 41026320.299999975,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.03583577845464986,
              "median": 0.00808428434603335,
              "min": 0.00426878513422526,
              "max": 0.13333333333333333,
              "p5": 0.004339138123220977,
              "p95": 0.12579667946059614,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0023249241943163763,
              "median": 0.0011792319944039014,
              "min": 0.0,
              "max": 0.006833889104561173,
              "p5": 8.300540271012086e-05,
              "p95": 0.006677436676072158,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 9.340400023611264e-07,
              "median": 4.757726844491652e-09,
              "min": 0.0,
              "max": 7.421899249138285e-06,
              "p5": 3.1177409481615966e-11,
              "p95": 4.836094182973909e-06,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1114.875,
              "median": 391.25,
              "min": 0.0,
              "max": 5518.0,
              "p5": 7.525,
              "p95": 4221.774999999998,
              "count": 8
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 1120004.25,
              "median": 1120004.25,
              "min": 1120004.25,
              "max": 1120004.25,
              "p5": 1120004.25,
              "p95": 1120004.25,
              "count": 1
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 749.5,
              "median": 749.5,
              "min": 749.5,
              "max": 749.5,
              "p5": 749.5,
              "p95": 749.5,
              "count": 1
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.17421776992401755,
              "median": 0.17421776992401755,
              "min": 0.17421776992401755,
              "max": 0.17421776992401755,
              "p5": 0.17421776992401755,
              "p95": 0.17421776992401755,
              "count": 1
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.006695461493057415,
              "median": 0.006695461493057415,
              "min": 0.006695461493057415,
              "max": 0.006695461493057415,
              "p5": 0.006695461493057415,
              "p95": 0.006695461493057415,
              "count": 1
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 1.0063465439173724,
              "median": 1.0063465439173724,
              "min": 1.0063465439173724,
              "max": 1.0063465439173724,
              "p5": 1.0063465439173724,
              "p95": 1.0063465439173724,
              "count": 1
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 5.601395168776245e-09,
              "median": 5.601395168776245e-09,
              "min": 5.601395168776245e-09,
              "max": 5.601395168776245e-09,
              "p5": 5.601395168776245e-09,
              "p95": 5.601395168776245e-09,
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
            "stock": -0.03597122302158273,
            "market": 0.10640937807566875,
            "sector": -0.02415782635270003,
            "peers": -0.18404907975460105,
            "vs_market": -0.14238060109725148,
            "vs_sector": -0.011813396668882703,
            "vs_peers": 0.14807785673301832
          }
        }
      }
    },
    "period_insights": {
      "1d": {
        "liquidity": "1D score 76.9 vs peer median 78.1 (-1.3 pts).",
        "market_comparison": "The stock rose 0.8% while peers fell 0.7%. That stronger tape can help keep trading interest engaged in the near term."
      },
      "30d": {
        "liquidity": "Monthly tradability looks average, with a 1M liquidity score of 82.3 against a peer median of 84.2. That suggests access is reasonable but not leading the group.",
        "market_comparison": "Return 5.5% vs peers 3.9%."
      },
      "3m": {
        "liquidity": "Three-month liquidity remains middle-of-the-pack, with a score of 84.1 compared with a peer median of 86.4. That points to a tradable name, but not one with standout depth for its size.",
        "market_comparison": "The stock fell 2.2% while peers dropped 15.8%. That relative resilience matters because it points to a steadier trading backdrop than the peer group."
      },
      "6m": {
        "liquidity": "Six-month liquidity is average and broadly steady, with a score of 85.1 compared with a peer median of 87.1. That keeps access credible, though still a touch behind peers.",
        "market_comparison": "The stock fell 3.6% while peers dropped 18.4%. That stronger relative performance matters because it supports a firmer trading backdrop over the period."
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
      "current_regime": 0,
      "current_regime_label": "Low Volatility",
      "current_regime_probability": 1.0,
      "current_driver_mix": {
        "market_share": {
          "median": 0.5559115473166958,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "55.6%",
          "display_range": null,
          "display_text": "55.6%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "share_pct",
          "value_pct": 55.6,
          "plain_english": "Market explains about 55.6% of price moves in the current state."
        },
        "sector_share": {
          "median": 0.2968051702989958,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "29.7%",
          "display_range": null,
          "display_text": "29.7%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "share_pct",
          "value_pct": 29.7,
          "plain_english": "Sector explains about 29.7% of price moves in the current state."
        },
        "company_share": {
          "median": 0.1472832823843085,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "14.7%",
          "display_range": null,
          "display_text": "14.7%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "share_pct",
          "value_pct": 14.7,
          "plain_english": "Company-specific explains about 14.7% of price moves in the current state."
        },
        "basis": "current_state"
      },
      "current_sensitivities": {
        "beta_market": {
          "median": 0.2123118998714093,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "0.21",
          "display_range": null,
          "display_text": "0.21",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "beta",
          "strength_label": "Weak",
          "plain_english": "Weak market link: a 1% market move has lined up with about a 0.21% stock move in the same direction in this state.",
          "value_num": 0.21
        },
        "beta_stock_lag": {
          "median": -0.26880737926433207,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "-0.27",
          "display_range": null,
          "display_text": "-0.27",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "lag_beta",
          "value_num": -0.27
        },
        "beta_sector": {
          "median": -1.2207697990667694,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "-1.22",
          "display_range": null,
          "display_text": "-1.22",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "beta",
          "strength_label": "Moderate",
          "plain_english": "Moderate sector link: a 1% sector move has lined up with about a 1.22% stock move in the opposite direction in this state.",
          "value_num": -1.22
        },
        "beta_market_lag": {
          "median": 0.5930391957767674,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "0.59",
          "display_range": null,
          "display_text": "0.59",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "lag_beta",
          "value_num": 0.59
        },
        "beta_sector_lag": {
          "median": -0.47392522837888823,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "-0.47",
          "display_range": null,
          "display_text": "-0.47",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "lag_beta",
          "value_num": -0.47
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
          "period_label": "2025-05-06 to 2025-05-30",
          "n_obs": 18,
          "partial_month": true,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.5653333970124208,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "56.5%",
            "display_range": null,
            "display_text": "56.5%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
            "kind": "share_pct",
            "value_pct": 56.5,
            "plain_english": "Company-specific explains about 56.5% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.3166797470802355,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "31.7%",
              "display_range": null,
              "display_text": "31.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
              "kind": "share_pct",
              "value_pct": 31.7,
              "plain_english": "Market explains about 31.7% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.11798685590734369,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "11.8%",
              "display_range": null,
              "display_text": "11.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
              "kind": "share_pct",
              "value_pct": 11.8,
              "plain_english": "Sector explains about 11.8% of price moves in the current state."
            },
            "company_share": {
              "median": 0.5653333970124208,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "56.5%",
              "display_range": null,
              "display_text": "56.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
              "kind": "share_pct",
              "value_pct": 56.5,
              "plain_english": "Company-specific explains about 56.5% of price moves in the current state."
            }
          },
          "summary": "May: Mostly company-driven."
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
        }
      ],
      "regimes": [
        {
          "id": 0,
          "label": "Low Volatility",
          "pct_time": 0.5020080321285141,
          "expected_duration_days": 11.363636363636363,
          "current_probability": 1.0,
          "n_days_effective": 125.0,
          "volatility": {
            "median": 0.005583382831410858,
            "low": 0.005583382831410858,
            "high": 0.005583382831410858
          },
          "volatility_label": "Low Volatility",
          "current_probability_display": null
        },
        {
          "id": 1,
          "label": "High Volatility",
          "pct_time": 0.4979919678714859,
          "expected_duration_days": 11.272727272727273,
          "current_probability": 0.0,
          "n_days_effective": 124.0,
          "volatility": {
            "median": 0.010955439243272773,
            "low": 0.010955439243272773,
            "high": 0.010955439243272773
          },
          "volatility_label": "High Volatility",
          "current_probability_display": 0.0
        }
      ],
      "transitions": {
        "mean": [
          [
            0.9193548387096774,
            0.08064516129032258
          ],
          [
            0.08870967741935484,
            0.9112903225806451
          ]
        ],
        "low": [],
        "high": [],
        "counts": [
          [
            114.0,
            10.0
          ],
          [
            11.0,
            113.0
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
        "market_link_display": "0.21",
        "sector_link_display": "-1.22",
        "market_link_explainer": "Weak market link. A 1% market move has lined up with about a 0.21% stock move in the same direction in this state. This is a point estimate from 251 trading days.",
        "sector_link_explainer": "Moderate sector link. A 1% sector move has lined up with about a 1.22% stock move in the opposite direction in this state. This is a point estimate from 251 trading days.",
        "stock_persistence_display": "-0.27",
        "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
        "history_limited_note": "Read is based on 251 trading days versus the 252-day target."
      },
      "current_summary": {
        "regime_label": "Low Volatility",
        "dominant_driver": "market",
        "dominant_driver_label": "Market",
        "driver_share_pct": 55.6,
        "driver_share_display": "55.6%",
        "confidence_label": "High, limited history",
        "confidence_pct": 100.0,
        "display_confidence_pct": null,
        "confidence_note": "Based on 251 trading days relative to the 252-day target.",
        "history_days": 251,
        "history_limited": true,
        "volatility_label": "Low Volatility",
        "lead_signal_text": "No stable lead signal.",
        "state_term": "state",
        "stay_probability": 0.9193548387096774,
        "effective_days": 125.0,
        "persistence_note": "This state looks more persistent, with a typical run length of about 11.4 days.",
        "expected_duration_days": 11.4
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
          "expected_duration_days": 11.363636363636363,
          "current_probability": 1.0,
          "n_days_effective": 125.0,
          "volatility": {
            "median": 0.005583382831410858,
            "low": 0.005583382831410858,
            "high": 0.005583382831410858
          },
          "volatility_label": "Low Volatility"
        },
        {
          "id": 1,
          "label": "High Volatility",
          "pct_time": 0.4979919678714859,
          "expected_duration_days": 11.272727272727273,
          "current_probability": 0.0,
          "n_days_effective": 124.0,
          "volatility": {
            "median": 0.010955439243272773,
            "low": 0.010955439243272773,
            "high": 0.010955439243272773
          },
          "volatility_label": "High Volatility"
        }
      ],
      "transitions": [
        [
          0.9193548387096774,
          0.08064516129032258
        ],
        [
          0.08870967741935484,
          0.9112903225806451
        ]
      ],
      "transition_intervals": {
        "mean": [
          [
            0.9193548387096774,
            0.08064516129032258
          ],
          [
            0.08870967741935484,
            0.9112903225806451
          ]
        ],
        "low": [],
        "high": [],
        "counts": [
          [
            114.0,
            10.0
          ],
          [
            11.0,
            113.0
          ]
        ]
      },
      "current_regime": 0,
      "current_regime_label": "Low Volatility",
      "current_regime_probability": 1.0
    }
  },
  "theme": {
    "badges": {
      "liq_section": {
        "text": "Liquidity score: 85.1 — Strong",
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
    "liq_subtitle": "Liquidity looks mixed rather than standout, with the 6M score 2.0 points below the peer median and the screen still orderly at a 1 tick spread.",
    "market_comparison_title": "How You Compare to the Market",
    "market_comparison_subtitle": "Context relative to market, sector, and peer medians.",
    "perf_title": "Stock Performance",
    "perf_subtitle": "Recent performance is firm, with the stock up 5.5% over 1M compared with peers at 3.9% and the market at 0.6%.",
    "perf_insight": "The return backdrop is stronger than peers, while trading access remains broadly steady. The stock is up 5.5% over 1M, and current execution still shows a 1 tick spread with displayed bid depth at 0.82x of ask depth.",
    "drivers_title": "What Moves Your Stock Price?",
    "drivers_subtitle": "Market factors are the main driver at 55.6%, so the tape is still moving more with the broader backdrop than on company-specific news alone.",
    "drivers_strip": [
      {
        "title": "Current Driver (Last 5 Days)",
        "text": "Over the last 5 trading days, moves are mainly market-driven, accounting for about 55.6% of price changes. Other influences are secto%, and company-specific 14.7%."
      },
      {
        "title": "Driver Mix",
        "text": "Based on the last 5 trading days, current mix is market 55.6%, secto%, and company-specific 14.7%."
      },
      {
        "title": "Monthly Trend",
        "text": "The driver mix has been consistently company-driven across Feb to Apr."
      }
    ],
    "drivers_pie_title": "Current Driver Mix (Last 5 Days)",
    "drivers_pie_note": "Based on the last 5 trading days, current split is market 55.6%, secto%, and company-specific 14.7%.",
    "lead_lag_title": "",
    "lead_lag_note": "",
    "rolling_title": "Monthly Driver Shift",
    "rolling_latest_label": "Latest: {period}",
    "rolling_note": "Each bar shows the monthly split between market-, sector-, and company-driven moves.",
    "drivers_bottom_line": "That matters because trading conditions remain orderly, with a 1 tick spread and displayed bid depth at 0.82x of ask depth, even as liquidity sits slightly below peers on the 6M score.",
    "drivers_wtd_title": "Key Reads",
    "drivers_wtd_list": [
      "Main driver now is the market, which explains 55.6% of current price moves.",
      "The monthly pattern was mostly market from February through April, so the mix looks more balanced now."
    ],
    "regime_title": "Market State",
    "regime_subtitle": "Market-led trading is the clearest current state, with broader factors accounting for more than half of price action.",
    "regime_badge_text": "Low Volatility",
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
    "exec_check_subtitle": "Combines the final continuous-session displayed book before close, trade-size stress tests based on Apr 30, 2025 to Apr 30, 2026 (254 trading days • 99,808 trades), large sell-side orders observed today, and intraday spread/depth during the continuous trading session.",
    "order_book_title": "Order Book Depth (Available Liquidity)",
    "order_book_note": "Depth shown is based on the displayed order book.",
    "peer_capacity_title": "Peer Capacity Context",
    "peer_capacity_note": "Immediate displayed depth broadly matches the stronger monthly liquidity read.",
    "impact_summary_title": "Estimated Price Impact (Sell Orders)",
    "impact_summary_subtitle": "Approximate price impact (%) for sell orders.",
    "exec_check_insight": "Displayed bid depth is 0.82x of ask depth and the spread is 1 tick. That points to orderly near-term execution even as the broader liquidity picture remains mixed for the stock’s size.",
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
    "intraday_subtitle": "Current execution is orderly, and the broader liquidity picture remains mixed.",
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
    "intraday_insight": "The clearest intraday read is stable screen liquidity. The spread is 1 tick, while displayed bid depth at 0.82x of ask depth shows the book is broadly balanced with a modest buy-side shortfall.",
    "short_title": "Short Selling & Lending",
    "short_subtitle": "Price performance is firm while liquidity remains mixed for size.",
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
    "exec_subtitle": "Liquidity is mixed for the stock’s size, with peer standing slightly below par but current execution still orderly.",
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
        "value": "85.1/100",
        "sub": "Peer median 87.1 (-2.0 pts)",
        "interp": {
          "text": "Strong",
          "cls": "interpretation-good",
          "icon": "◆"
        }
      },
      {
        "title": "Volume vs Peers",
        "value": "S$573.3K",
        "sub": "Peer median S$1.1M",
        "interp": {
          "text": "Weak",
          "cls": "interpretation-bad",
          "icon": "◆"
        }
      },
      {
        "title": "Spread",
        "value": "0.74%",
        "sub": "1.00 ticks; peers 0.67%",
        "interp": {
          "text": "Wider",
          "cls": "interpretation-bad",
          "icon": "◆"
        }
      }
    ],
    "liq_insight": "6M liquidity is strong: score 85.1 vs peer median 87.1 (-2.0 pts). Recent trend context is too limited to say whether access has changed from the 1M baseline.",
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
        "value": "0.82x",
        "note": "Bid depth / ask depth on the displayed order book",
        "color": "text-slate-300"
      }
    ],
    "impact_summary_cards": [
      {
        "title": "~S$100K sell",
        "text": "Estimated impact ~-1.12% with 100.0% fill.",
        "cls": "ok"
      },
      {
        "title": "S$1.0M sell",
        "text": "Estimated impact ~-1.12% with 100.0% fill.",
        "cls": "warn"
      },
      {
        "title": "S$2.5M sell",
        "text": "Estimated impact ~-2.24% with 100.0% fill.",
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
        "subtext": "Rank 84/558",
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
        "value": "0.74",
        "suffix": "%",
        "bar_pct": 7,
        "color_value": "text-emerald-400",
        "color_bar": "bg-emerald-500",
        "subtext": "0.74% • 1.00 ticks vs peers 0.67%",
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
        "value": "573.3K",
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
        "value": "55.6",
        "suffix": "market",
        "bar_pct": 56,
        "color_value": "text-amber-400",
        "color_bar": "bg-amber-500",
        "subtext": "Secto% • Company 14.7%",
        "interpretation": {
          "text": "Market",
          "cls": "interpretation-neutral",
          "icon": "◆"
        }
      }
    ],
    "exec_takeaways": [
      "Liquidity is mixed for the stock’s size, with peer standing a little below par. The 6M liquidity score is 85.1 compared with a peer median of 87.1, which leaves access broadly workable rather than clearly strong relative to similar names.",
      "The recent price backdrop is firmer than the main comparison groups. The stock returned 5.5% over 1M, ahead of peers at 3.9% and the market at 0.6%, which supports a more constructive trading backdrop.",
      "Near-term execution still looks orderly, but the bid side is slightly thinner. The spread is 1 tick and displayed bid depth is 0.82x of ask depth, while market factors account for 55.6% of the tape, so trading remains stable but still tied closely to the broader market."
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
      "overall": "6M liquidity is strong: score 85.1 vs peer median 87.1 (-2.0 pts). Recent trend context is too limited to say whether access has changed from the 1M baseline.",
      "strengths": [
        "6M score 85.1 vs peer median 87.1 (-2.0 pts)."
      ],
      "concerns": [],
      "peer_context": "Primary-period score gap vs peers: -2.0 pts."
    },
    "market_comparison": {
      "returns": {
        "insight": "6M return is -3.6%, better than peers, but worse than market and sector, which shows price performance is mixed across comparison groups.",
        "vs_market": "Worse than market: -3.6% vs market 10.6%.",
        "vs_sector": "Worse than sector: -3.6% vs sector -2.4%.",
        "vs_peers": "Better than peers: -3.6% vs peers -18.4%."
      },
      "adv": {
        "insight": "ADV is S$573.3K, better than market, but worse than sector and peers, which shows trading size is uneven across comparison groups.",
        "vs_market": "Better than market: S$573.3K vs market S$12.0K.",
        "vs_sector": "Worse than sector: S$573.3K vs sector S$641.5K.",
        "vs_peers": "Worse than peers: S$573.3K vs peers S$1.1M."
      },
      "spread": {
        "insight": "Spread is 0.74%, better than market, but worse than peers, which shows execution cost is mixed across comparison groups.",
        "vs_market": "Better than market: 0.74% vs market 2.88%.",
        "vs_sector": "In line with sector: 0.74% vs sector 0.81%.",
        "vs_peers": "Worse than peers: 0.74% vs peers 0.67%."
      },
      "turnover_ratio": {
        "insight": "Turnover ratio is 0.19%, better than market, sector, and peers, which shows a more active free-float turnover profile than comparable names.",
        "vs_market": "Better than market: 0.19% vs market 0.03%.",
        "vs_sector": "Better than sector: 0.19% vs sector 0.12%.",
        "vs_peers": "Better than peers: 0.19% vs peers 0.12%."
      },
      "volatility": {
        "insight": "Volatility is 14.25%, better than market, sector, and peers, which suggests day-to-day price swings are more contained than comparable names.",
        "vs_market": "Better than market: 14.25% vs market 45.31%.",
        "vs_sector": "Better than sector: 14.25% vs sector 17.04%.",
        "vs_peers": "Better than peers: 14.25% vs peers 17.42%."
      },
      "trades": {
        "insight": "Trades is 360, better than market, but worse than peers, which shows trading frequency is mixed across comparison groups.",
        "vs_market": "Better than market: 360 vs market 7.",
        "vs_sector": "In line with sector: 360 vs sector 391.",
        "vs_peers": "Worse than peers: 360 vs peers 750."
      },
      "amihud": {
        "insight": "Price impact is 3.91e-09, better than market, sector, and peers, which suggests trades move price less than comparable names.",
        "vs_market": "Better than market: 3.91e-09 vs market 1.72e-07.",
        "vs_sector": "Better than sector: 3.91e-09 vs sector 4.76e-09.",
        "vs_peers": "Better than peers: 3.91e-09 vs peers 5.60e-09."
      }
    },
    "performance": {
      "overall": "Recent performance is ahead of both peers and the market, with a 1M return of 5.5% compared with 3.9% for peers and 0.6% for the market. Liquidity gives a mixed read on that strength because the 6M score of 85.1 is 2.0 points below the peer median, even though current trading conditions look orderly with a 1 tick spread and broadly balanced displayed depth. The move looks more market-linked than company-specific, with market factors accounting for 55.6% of the current driver mix.",
      "conclusion": "The recent gain looks broad-market or sector-linked rather than driven mainly by company-specific trading."
    },
    "drivers": {
      "overall": "The stock is being led mainly by the market now, with 55.6% of price moves tied to broader factors. That matters because the current tape is being shaped more by the external backdrop than by stock-specific news, even as the shares have outperformed over one month with a 5.5% return compared with 3.9% for peers and 0.6% for the market.",
      "beta": "Current trading conditions look stable rather than stressed, with a 1-tick spread and displayed bid depth at 0.82x of ask depth. That matters because the market-led pattern is showing up alongside orderly displayed liquidity rather than a dislocated book.",
      "rolling_change": "The mix has shifted from mostly market through February, March, and April to a more market-led pattern now. That matters because the recent move looks more tied to the broader tape than to a continuation of the earlier stock-specific pattern."
    },
    "regime": {
      "overall": "The backdrop looks steadier than a fast-changing tape because the stock is in a low-volatility state and that state typically lasts about 11.4 days. That matters because trading conditions are more likely to stay orderly than swing sharply day to day.",
      "current": "Current market state is Low Volatility. The market has been in this state about 50.2% of the time. Based on 251 trading days relative to the 252-day target.",
      "transitions": "This state looks reasonably settled because its typical run length is about 11.4 days. The picture is still mixed rather than fully entrenched, so the backdrop looks stable but not immovable.",
      "trading_implications": "Trading conditions look broadly steady, with a 1-tick spread and displayed bid depth at 0.82x of ask depth. That supports a market that is functioning in an orderly way, even if buy-side depth is a little lighter than sell-side depth."
    },
    "execution": {
      "overall": "displayed bid depth is 0.82x ask depth; spread is 1 tick. Immediate displayed depth broadly matches the stronger monthly liquidity read.",
      "concern": "The clearest pressure point is on the bid side, where displayed depth is 0.82x of ask",
      "peer_context": "Immediate displayed depth broadly matches the stronger monthly liquidity read."
    },
    "trader_composition": {
      "overall": "Flow looks mixed by trade count and value, so the trading base is broad rather than clearly dominated by one investor type.",
      "retail_heavy": "The split is mixed: retail-like trades make up 37.2% of trade count but only 3.1% of trade value, while institution-like trades are 21.7% of count and 52.6% of value. That matters because activity is frequent across smaller tickets, but most value still comes from larger participants.",
      "institutional_gap": "Institution-like flow carries over half of trade value despite representing about a fifth of trade count. That gives the tape meaningful value visible support, even as overall participation remains mixed.",
      "peer_comparison": "The mix looks balanced rather than unusual, with meaningful retail-like participation by count and institution-like participation by value. That places the stock in a middle ground relative to peers rather than at either extreme."
    },
    "price_moving": {
      "overall": "Price-moving activity looks meaningful but not dominant, with 23.6% of total trades moving the price. That points to a market where liquidity is active enough to absorb much of the flow. The signal is mixed because trade count is more retail-like while trade value is more institution-like. That matters because price formation is not being driven by a single, clean investor base. The return backdrop is firm, with the stock up 5.5% over one month compared with 3.9% for peers and 0.6% for the market.",
      "interpretation": "",
      "asymmetry": ""
    },
    "short_selling": {
      "overall": "Short activity does not look material to the current trading picture. The primary read is low short interest, and the stock’s 1M return of +5.5%, ahead of peers at +3.9% and the market at +0.6%, points to a firmer backdrop than a market dominated by short pressure.",
      "level": "Low short interest",
      "correlation": "Moderate negative - shorts somewhat predict drops",
      "trend": "Short positioning has fallen sharply, with shorts covering by 73% month on month. That reduces the chance that short activity is a separate source of pressure, although the signal is mixed rather than decisive.",
      "peaks": "5 notable peak days identified."
    },
    "intraday": {
      "overall": "Session split is open 3.7%, continuous 87.2%, and close 8.1%. Current trading concentration score is 0.231.",
      "hhi_interpretation": "A concentration score of 0.231 indicates trading is reasonably well distributed through the session. That supports a steadier flow profile.",
      "best_times": "The continuous session is the clearest source of liquidity because it carries the large majority of activity. The open and close are secondary windows rather than the main source of access.",
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
        85.12544802867383,
        87.09677419354838
      ],
      "is_target": [
        true,
        false
      ],
      "adv": [
        573307.75,
        1120004.25
      ],
      "total": 558
    },
    "market_comparison": {
      "sector_name": "REIT - Retail",
      "sector_count": 8,
      "market_count": 558,
      "company": {
        "volatility": 0.14254074082835394,
        "adv": 573307.75,
        "spread_pct": 0.0074349442379182205,
        "turnover_ratio": 0.0018678040167351827,
        "amihud": 3.9140585202070595e-09,
        "trades": 360.0
      },
      "market": {
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.6912215864635497,
          "median": 0.4530927276604192,
          "min": 0.0,
          "max": 6.912950809089334,
          "p5": 0.15470698255634577,
          "p95": 2.0265197574532663,
          "count": 558
        },
        "adv": {
          "direction": "higher_is_better",
          "mean": 2640810.038799435,
          "median": 12006.0,
          "min": 0.0,
          "max": 248995371.0,
          "p5": 0.0,
          "p95": 10689058.124999989,
          "count": 558
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.09562291324519033,
          "median": 0.02879495851351771,
          "min": 0.0002712702706268827,
          "max": 1.267605633802817,
          "p5": 0.0035945046646466503,
          "p95": 0.48069699600800087,
          "count": 556
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.0033101935128800907,
          "median": 0.00027582151505044477,
          "min": 0.0,
          "max": 0.8750247182123789,
          "p5": 0.0,
          "p95": 0.007244301967593434,
          "count": 551
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 9.731219991714626e-06,
          "median": 1.7202523851543683e-07,
          "min": 0.0,
          "max": 0.0006620397444526588,
          "p5": 0.0,
          "p95": 4.1666531842903055e-05,
          "count": 556
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 382.7231182795699,
          "median": 7.0,
          "min": 0.0,
          "max": 10156.5,
          "p5": 0.0,
          "p95": 2125.374999999998,
          "count": 558
        }
      },
      "sector": {
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.3529423246804855,
          "median": 0.17044051782594966,
          "min": 0.1192669152094398,
          "max": 1.3328841135126952,
          "p5": 0.12741275417605974,
          "p95": 1.0614887761644698,
          "count": 8
        },
        "adv": {
          "direction": "higher_is_better",
          "mean": 8818702.010966985,
          "median": 641472.625,
          "min": 0.0,
          "max": 57398890.5,
          "p5": 12063.9225,
          "p95": 41026320.299999975,
          "count": 8
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.03583577845464986,
          "median": 0.00808428434603335,
          "min": 0.00426878513422526,
          "max": 0.13333333333333333,
          "p5": 0.004339138123220977,
          "p95": 0.12579667946059614,
          "count": 8
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.0023249241943163763,
          "median": 0.0011792319944039014,
          "min": 0.0,
          "max": 0.006833889104561173,
          "p5": 8.300540271012086e-05,
          "p95": 0.006677436676072158,
          "count": 8
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 9.340400023611264e-07,
          "median": 4.757726844491652e-09,
          "min": 0.0,
          "max": 7.421899249138285e-06,
          "p5": 3.1177409481615966e-11,
          "p95": 4.836094182973909e-06,
          "count": 8
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 1114.875,
          "median": 391.25,
          "min": 0.0,
          "max": 5518.0,
          "p5": 7.525,
          "p95": 4221.774999999998,
          "count": 8
        }
      },
      "peers": {
        "adv": {
          "direction": "higher_is_better",
          "mean": 1120004.25,
          "median": 1120004.25,
          "min": 1120004.25,
          "max": 1120004.25,
          "p5": 1120004.25,
          "p95": 1120004.25,
          "count": 1
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 749.5,
          "median": 749.5,
          "min": 749.5,
          "max": 749.5,
          "p5": 749.5,
          "p95": 749.5,
          "count": 1
        },
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.17421776992401755,
          "median": 0.17421776992401755,
          "min": 0.17421776992401755,
          "max": 0.17421776992401755,
          "p5": 0.17421776992401755,
          "p95": 0.17421776992401755,
          "count": 1
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.006695461493057415,
          "median": 0.006695461493057415,
          "min": 0.006695461493057415,
          "max": 0.006695461493057415,
          "p5": 0.006695461493057415,
          "p95": 0.006695461493057415,
          "count": 1
        },
        "spread_ticks": {
          "direction": "neutral",
          "mean": 1.0063465439173724,
          "median": 1.0063465439173724,
          "min": 1.0063465439173724,
          "max": 1.0063465439173724,
          "p5": 1.0063465439173724,
          "p95": 1.0063465439173724,
          "count": 1
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 5.601395168776245e-09,
          "median": 5.601395168776245e-09,
          "min": 5.601395168776245e-09,
          "max": 5.601395168776245e-09,
          "p5": 5.601395168776245e-09,
          "p95": 5.601395168776245e-09,
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
        "stock": 0.055118110236220375,
        "market": 0.005575688013334856,
        "sector": 0.03851845489657735,
        "peers": 0.039062500000000444
      },
      {
        "horizon": "3M",
        "stock": -0.021897810218978297,
        "market": 0.0006823926969565797,
        "sector": -0.008242578923160049,
        "peers": -0.1582278481012661
      },
      {
        "horizon": "6M",
        "stock": -0.03597122302158273,
        "market": 0.10640937807566875,
        "sector": -0.02415782635270003,
        "peers": -0.18404907975460105
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
      "share_market": 0.5559115473166958,
      "share_sector": 0.2968051702989958,
      "share_idio": 0.1472832823843085,
      "beta_market": 0.2123118998714093,
      "beta_sector": -1.2207697990667694,
      "driver_model": {
        "valid": true,
        "model_method": "ols_with_volatility_regimes",
        "estimation_window_days": 251,
        "reporting_window_days": 63,
        "available_history_days": 251,
        "n_regimes": 2,
        "current_regime": 0,
        "current_regime_label": "Low Volatility",
        "current_regime_probability": 1.0,
        "current_driver_mix": {
          "market_share": {
            "median": 0.5559115473166958,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "55.6%",
            "display_range": null,
            "display_text": "55.6%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "share_pct",
            "value_pct": 55.6,
            "plain_english": "Market explains about 55.6% of price moves in the current state."
          },
          "sector_share": {
            "median": 0.2968051702989958,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "29.7%",
            "display_range": null,
            "display_text": "29.7%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "share_pct",
            "value_pct": 29.7,
            "plain_english": "Sector explains about 29.7% of price moves in the current state."
          },
          "company_share": {
            "median": 0.1472832823843085,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "14.7%",
            "display_range": null,
            "display_text": "14.7%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "share_pct",
            "value_pct": 14.7,
            "plain_english": "Company-specific explains about 14.7% of price moves in the current state."
          },
          "basis": "current_state"
        },
        "current_sensitivities": {
          "beta_market": {
            "median": 0.2123118998714093,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "0.21",
            "display_range": null,
            "display_text": "0.21",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "beta",
            "strength_label": "Weak",
            "plain_english": "Weak market link: a 1% market move has lined up with about a 0.21% stock move in the same direction in this state.",
            "value_num": 0.21
          },
          "beta_stock_lag": {
            "median": -0.26880737926433207,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "-0.27",
            "display_range": null,
            "display_text": "-0.27",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "lag_beta",
            "value_num": -0.27
          },
          "beta_sector": {
            "median": -1.2207697990667694,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "-1.22",
            "display_range": null,
            "display_text": "-1.22",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "beta",
            "strength_label": "Moderate",
            "plain_english": "Moderate sector link: a 1% sector move has lined up with about a 1.22% stock move in the opposite direction in this state.",
            "value_num": -1.22
          },
          "beta_market_lag": {
            "median": 0.5930391957767674,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "0.59",
            "display_range": null,
            "display_text": "0.59",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "lag_beta",
            "value_num": 0.59
          },
          "beta_sector_lag": {
            "median": -0.47392522837888823,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "-0.47",
            "display_range": null,
            "display_text": "-0.47",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "lag_beta",
            "value_num": -0.47
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
            "period_label": "2025-05-06 to 2025-05-30",
            "n_obs": 18,
            "partial_month": true,
            "dominant_driver": "company",
            "dominant_driver_label": "Company-specific",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.5653333970124208,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "56.5%",
              "display_range": null,
              "display_text": "56.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
              "kind": "share_pct",
              "value_pct": 56.5,
              "plain_english": "Company-specific explains about 56.5% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.3166797470802355,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "31.7%",
                "display_range": null,
                "display_text": "31.7%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
                "kind": "share_pct",
                "value_pct": 31.7,
                "plain_english": "Market explains about 31.7% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.11798685590734369,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "11.8%",
                "display_range": null,
                "display_text": "11.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
                "kind": "share_pct",
                "value_pct": 11.8,
                "plain_english": "Sector explains about 11.8% of price moves in the current state."
              },
              "company_share": {
                "median": 0.5653333970124208,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "56.5%",
                "display_range": null,
                "display_text": "56.5%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
                "kind": "share_pct",
                "value_pct": 56.5,
                "plain_english": "Company-specific explains about 56.5% of price moves in the current state."
              }
            },
            "summary": "May: Mostly company-driven."
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
          }
        ],
        "regimes": [
          {
            "id": 0,
            "label": "Low Volatility",
            "pct_time": 0.5020080321285141,
            "expected_duration_days": 11.363636363636363,
            "current_probability": 1.0,
            "n_days_effective": 125.0,
            "volatility": {
              "median": 0.005583382831410858,
              "low": 0.005583382831410858,
              "high": 0.005583382831410858
            },
            "volatility_label": "Low Volatility",
            "current_probability_display": null
          },
          {
            "id": 1,
            "label": "High Volatility",
            "pct_time": 0.4979919678714859,
            "expected_duration_days": 11.272727272727273,
            "current_probability": 0.0,
            "n_days_effective": 124.0,
            "volatility": {
              "median": 0.010955439243272773,
              "low": 0.010955439243272773,
              "high": 0.010955439243272773
            },
            "volatility_label": "High Volatility",
            "current_probability_display": 0.0
          }
        ],
        "transitions": {
          "mean": [
            [
              0.9193548387096774,
              0.08064516129032258
            ],
            [
              0.08870967741935484,
              0.9112903225806451
            ]
          ],
          "low": [],
          "high": [],
          "counts": [
            [
              114.0,
              10.0
            ],
            [
              11.0,
              113.0
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
          "market_link_display": "0.21",
          "sector_link_display": "-1.22",
          "market_link_explainer": "Weak market link. A 1% market move has lined up with about a 0.21% stock move in the same direction in this state. This is a point estimate from 251 trading days.",
          "sector_link_explainer": "Moderate sector link. A 1% sector move has lined up with about a 1.22% stock move in the opposite direction in this state. This is a point estimate from 251 trading days.",
          "stock_persistence_display": "-0.27",
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "history_limited_note": "Read is based on 251 trading days versus the 252-day target."
        },
        "current_summary": {
          "regime_label": "Low Volatility",
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "driver_share_pct": 55.6,
          "driver_share_display": "55.6%",
          "confidence_label": "High, limited history",
          "confidence_pct": 100.0,
          "display_confidence_pct": null,
          "confidence_note": "Based on 251 trading days relative to the 252-day target.",
          "history_days": 251,
          "history_limited": true,
          "volatility_label": "Low Volatility",
          "lead_signal_text": "No stable lead signal.",
          "state_term": "state",
          "stay_probability": 0.9193548387096774,
          "effective_days": 125.0,
          "persistence_note": "This state looks more persistent, with a typical run length of about 11.4 days.",
          "expected_duration_days": 11.4
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
          "period_label": "2025-05-06 to 2025-05-30",
          "n_obs": 18,
          "partial_month": true,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_label": null,
          "summary": "May: Mostly company-driven.",
          "share_market": 0.3166797470802355,
          "share_sector": 0.11798685590734369,
          "share_company": 0.5653333970124208,
          "share_market_display": "31.7%",
          "share_sector_display": "11.8%",
          "share_company_display": "56.5%",
          "dominant_share_display": "56.5%"
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
        }
      ],
      "regime": {
        "valid": true,
        "regime_method": "ols_with_volatility_regimes",
        "n_regimes": 2,
        "current_regime_label": "Low Volatility",
        "current_regime_probability": 1.0,
        "labels": [
          "Low Volatility",
          "High Volatility"
        ],
        "pct_time": [
          0.5020080321285141,
          0.4979919678714859
        ],
        "current_regime": 0,
        "regimes": [
          {
            "id": 0,
            "label": "Low Volatility",
            "pct_time": 0.5020080321285141,
            "expected_duration_days": 11.363636363636363,
            "current_probability": 1.0,
            "n_days_effective": 125.0,
            "volatility": {
              "median": 0.005583382831410858,
              "low": 0.005583382831410858,
              "high": 0.005583382831410858
            },
            "volatility_label": "Low Volatility"
          },
          {
            "id": 1,
            "label": "High Volatility",
            "pct_time": 0.4979919678714859,
            "expected_duration_days": 11.272727272727273,
            "current_probability": 0.0,
            "n_days_effective": 124.0,
            "volatility": {
              "median": 0.010955439243272773,
              "low": 0.010955439243272773,
              "high": 0.010955439243272773
            },
            "volatility_label": "High Volatility"
          }
        ],
        "transitions": [
          [
            0.9193548387096774,
            0.08064516129032258
          ],
          [
            0.08870967741935484,
            0.9112903225806451
          ]
        ]
      }
    },
    "order_book": {
      "bids": [
        {
          "level": 1,
          "price": 0.665,
          "quantity": 300.0,
          "value": 199.5
        },
        {
          "level": 2,
          "price": 0.66,
          "quantity": 1906300.0,
          "value": 1258158.0
        },
        {
          "level": 3,
          "price": 0.655,
          "quantity": 738400.0,
          "value": 483652.0
        },
        {
          "level": 4,
          "price": 0.65,
          "quantity": 311000.0,
          "value": 202150.0
        },
        {
          "level": 5,
          "price": 0.645,
          "quantity": 123100.0,
          "value": 79399.5
        },
        {
          "level": 6,
          "price": 0.64,
          "quantity": 204300.0,
          "value": 130752.0
        },
        {
          "level": 7,
          "price": 0.635,
          "quantity": 119600.0,
          "value": 75946.0
        },
        {
          "level": 8,
          "price": 0.63,
          "quantity": 686600.0,
          "value": 432558.0
        },
        {
          "level": 9,
          "price": 0.625,
          "quantity": 168000.0,
          "value": 105000.0
        },
        {
          "level": 10,
          "price": 0.62,
          "quantity": 139700.0,
          "value": 86614.0
        },
        {
          "level": 11,
          "price": 0.615,
          "quantity": 11600.0,
          "value": 7134.0
        },
        {
          "level": 12,
          "price": 0.61,
          "quantity": 63800.0,
          "value": 38918.0
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
          "quantity": 61100.0,
          "value": 36660.0
        },
        {
          "level": 15,
          "price": 0.58,
          "quantity": 400.0,
          "value": 231.99999999999997
        },
        {
          "level": 16,
          "price": 0.57,
          "quantity": 34000.0,
          "value": 19380.0
        },
        {
          "level": 17,
          "price": 0.565,
          "quantity": 500.0,
          "value": 282.5
        },
        {
          "level": 18,
          "price": 0.55,
          "quantity": 3000.0,
          "value": 1650.0000000000002
        },
        {
          "level": 19,
          "price": 0.535,
          "quantity": 1000.0,
          "value": 535.0
        },
        {
          "level": 20,
          "price": 0.515,
          "quantity": 2000.0,
          "value": 1030.0
        },
        {
          "level": 21,
          "price": 0.51,
          "quantity": 6000.0,
          "value": 3060.0
        }
      ],
      "asks": [
        {
          "level": 1,
          "price": 0.67,
          "quantity": 1216600.0,
          "value": 815122.0
        },
        {
          "level": 2,
          "price": 0.675,
          "quantity": 578000.0,
          "value": 390150.0
        },
        {
          "level": 3,
          "price": 0.68,
          "quantity": 362100.0,
          "value": 246228.00000000003
        },
        {
          "level": 4,
          "price": 0.685,
          "quantity": 548200.0,
          "value": 375517.00000000006
        },
        {
          "level": 5,
          "price": 0.69,
          "quantity": 1237200.0,
          "value": 853667.9999999999
        },
        {
          "level": 6,
          "price": 0.695,
          "quantity": 72700.0,
          "value": 50526.5
        },
        {
          "level": 7,
          "price": 0.7,
          "quantity": 151400.0,
          "value": 105980.0
        },
        {
          "level": 8,
          "price": 0.705,
          "quantity": 101000.0,
          "value": 71205.0
        },
        {
          "level": 9,
          "price": 0.71,
          "quantity": 66300.0,
          "value": 47073.0
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
          "quantity": 15200.0,
          "value": 10944.0
        },
        {
          "level": 12,
          "price": 0.73,
          "quantity": 200.0,
          "value": 146.0
        },
        {
          "level": 13,
          "price": 0.75,
          "quantity": 25000.0,
          "value": 18750.0
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
          "price": 0.78,
          "quantity": 600000.0,
          "value": 468000.0
        },
        {
          "level": 17,
          "price": 0.8,
          "quantity": 5000.0,
          "value": 4000.0
        },
        {
          "level": 18,
          "price": 0.82,
          "quantity": 3400.0,
          "value": 2788.0
        },
        {
          "level": 19,
          "price": 0.85,
          "quantity": 150000.0,
          "value": 127500.0
        },
        {
          "level": 20,
          "price": 0.88,
          "quantity": 12000.0,
          "value": 10560.0
        }
      ]
    },
    "execution_dynamic": {
      "snapshot": {
        "valid": true,
        "snapshot_time": "2026-04-30 08:59:57.024500000",
        "snapshot_basis": "last_continuous_session_snapshot",
        "snapshot_label": "final continuous-session displayed book before close",
        "snapshot_note": "Final continuous-session displayed book before close",
        "snapshot_mic": "XSES",
        "mid_price": 0.6675,
        "spread_pct": 0.007490636704119858,
        "spread_ticks": 1.0,
        "tick_size": 0.005,
        "displayed_levels_per_side": 100,
        "bid_depth_notional_displayed": 2966335.5,
        "ask_depth_notional_displayed": 3623951.5,
        "bid_depth_notional_top10": 2966335.5,
        "ask_depth_notional_top10": 3623951.5,
        "bid_ask_depth_ratio": 0.8185
      },
      "historical_trade_scenarios": {
        "valid": true,
        "requested_lookback_calendar_days": 365,
        "lookback_calendar_days": 365,
        "effective_calendar_days": 366,
        "history_limited": false,
        "trade_days_used": 254,
        "n_trades_used": 99808,
        "first_trade_date": "2025-04-30",
        "last_trade_date": "2026-04-30",
        "window_label": "Apr 30, 2025 to Apr 30, 2026",
        "window_short_label": "Apr 30, 2025 to Apr 30, 2026",
        "trade_days_label": "254 trading days",
        "trade_count_label": "99,808 trades",
        "window_detail_label": "254 trading days • 99,808 trades",
        "history_note": "Trade-size percentiles use Apr 30, 2025 to Apr 30, 2026 history (254 trading days • 99,808 trades).",
        "scenarios": [
          {
            "key": "p90",
            "label": "90th percentile trade",
            "quantile": 0.9,
            "trade_notional": 3400.0,
            "impact_pct": -0.0108,
            "filled_pct": 100.0,
            "levels_consumed": 2,
            "pct_of_bid_depth": 0.11,
            "pct_of_adv": 0.53
          },
          {
            "key": "p95",
            "label": "95th percentile trade",
            "quantile": 0.95,
            "trade_notional": 7934.47,
            "impact_pct": -0.011049,
            "filled_pct": 100.0,
            "levels_consumed": 2,
            "pct_of_bid_depth": 0.27,
            "pct_of_adv": 1.23
          },
          {
            "key": "p99_99",
            "label": "99.99th percentile trade",
            "quantile": 0.9999,
            "trade_notional": 340000.0,
            "impact_pct": -0.011231999999999999,
            "filled_pct": 100.0,
            "levels_consumed": 2,
            "pct_of_bid_depth": 11.46,
            "pct_of_adv": 52.73
          }
        ]
      },
      "l3_sell_order_scenarios": {
        "valid": true,
        "trade_date": "2026-04-30",
        "selection_method": "largest_observed_ask_orders_during_day",
        "orders": [
          {
            "rank": 1,
            "order_id": "8137223323647089664",
            "timestamp": "2026-04-29 22:59:01.382600000",
            "local_timestamp": "2026-04-30 06:59:01",
            "posted_price": 0.69,
            "size_shares": 1000000.0,
            "notional": 690000.0,
            "impact_pct": -0.011234,
            "filled_pct": 100.0,
            "levels_consumed": 2,
            "pct_of_bid_depth": 23.26,
            "price_vs_mid_pct": 3.371,
            "executed_event_count": 0,
            "event_count": 1
          },
          {
            "rank": 2,
            "order_id": "8137619147835821056",
            "timestamp": "2026-04-29 22:59:01.382600000",
            "local_timestamp": "2026-04-30 06:59:01",
            "posted_price": 0.78,
            "size_shares": 600000.0,
            "notional": 468000.0,
            "impact_pct": -0.011233,
            "filled_pct": 100.0,
            "levels_consumed": 2,
            "pct_of_bid_depth": 15.78,
            "price_vs_mid_pct": 16.854,
            "executed_event_count": 0,
            "event_count": 1
          },
          {
            "rank": 3,
            "order_id": "8143160686437116928",
            "timestamp": "2026-04-30 00:53:52.729600000",
            "local_timestamp": "2026-04-30 08:53:52",
            "posted_price": 0.675,
            "size_shares": 300000.0,
            "notional": 202500.0,
            "impact_pct": -0.011229,
            "filled_pct": 100.0,
            "levels_consumed": 2,
            "pct_of_bid_depth": 6.83,
            "price_vs_mid_pct": 1.124,
            "executed_event_count": 0,
            "event_count": 2
          }
        ]
      },
      "intraday_liquidity_profile": {
        "valid": true,
        "trade_date": "2026-04-30",
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
            "bid_depth_notional": 3033984.0,
            "ask_depth_notional": 3555386.5,
            "mid_price": 0.6675
          },
          {
            "bucket": "09:30",
            "spread_pct": 0.015037593984962419,
            "spread_ticks": 2.0000000000000018,
            "bid_depth_notional": 2827021.5,
            "ask_depth_notional": 3572384.0,
            "mid_price": 0.665
          },
          {
            "bucket": "10:00",
            "spread_pct": 0.015037593984962419,
            "spread_ticks": 2.0000000000000018,
            "bid_depth_notional": 2883372.5,
            "ask_depth_notional": 3569034.0,
            "mid_price": 0.665
          },
          {
            "bucket": "10:30",
            "spread_pct": 0.015037593984962419,
            "spread_ticks": 2.0000000000000018,
            "bid_depth_notional": 2879284.5,
            "ask_depth_notional": 3572250.0,
            "mid_price": 0.665
          },
          {
            "bucket": "11:00",
            "spread_pct": 0.007490636704119857,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 2896550.0,
            "ask_depth_notional": 3605388.0,
            "mid_price": 0.6675
          },
          {
            "bucket": "11:30",
            "spread_pct": 0.007490636704119857,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 2901921.5,
            "ask_depth_notional": 3606157.5,
            "mid_price": 0.6675
          },
          {
            "bucket": "13:00",
            "spread_pct": 0.007490636704119857,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 2931616.5,
            "ask_depth_notional": 3627478.5,
            "mid_price": 0.6675
          },
          {
            "bucket": "13:30",
            "spread_pct": 0.00754716981132076,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 2938307.0,
            "ask_depth_notional": 3670119.0,
            "mid_price": 0.6625000000000001
          },
          {
            "bucket": "14:00",
            "spread_pct": 0.00754716981132076,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 2950511.0,
            "ask_depth_notional": 3681672.0,
            "mid_price": 0.6625000000000001
          },
          {
            "bucket": "14:30",
            "spread_pct": 0.00754716981132076,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 2951559.5,
            "ask_depth_notional": 3690419.5,
            "mid_price": 0.6625000000000001
          },
          {
            "bucket": "15:00",
            "spread_pct": 0.00754716981132076,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 2952021.5,
            "ask_depth_notional": 3688092.0,
            "mid_price": 0.6625000000000001
          },
          {
            "bucket": "15:30",
            "spread_pct": 0.00754716981132076,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 3027749.5,
            "ask_depth_notional": 3679114.5,
            "mid_price": 0.6625000000000001
          },
          {
            "bucket": "16:00",
            "spread_pct": 0.00754716981132076,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 3006233.5,
            "ask_depth_notional": 3674067.5,
            "mid_price": 0.6625000000000001
          },
          {
            "bucket": "16:30",
            "spread_pct": 0.007490636704119857,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 2966335.5,
            "ask_depth_notional": 3623951.5,
            "mid_price": 0.6675
          }
        ],
        "summary": {
          "median_spread_pct": 0.00754716981132076,
          "median_spread_ticks": 1.0000000000000009,
          "median_bid_depth_notional": 2944409.0,
          "median_ask_depth_notional": 3625715.0,
          "tightest_bucket": "09:00",
          "widest_bucket": "09:30",
          "deepest_bid_bucket": "09:00",
          "thinnest_bid_bucket": "09:30"
        }
      }
    },
    "peer_capacity": {
      "bx_ticket_pct_adv_50k": 7.8,
      "peers": [
        {
          "ticker": "AU8U",
          "pct": 117.7
        }
      ]
    },
    "trader_composition": {
      "primary_period": "6m",
      "periods": {
        "1d": {
          "valid": true,
          "currency": "SGD",
          "n_trades": 295,
          "n_runs": 117,
          "n_trade_days": 1,
          "first_trade_date": "2026-04-30",
          "last_trade_date": "2026-04-30",
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
            "retail_pct": 0.24745762711864408,
            "mixed_pct": 0.1694915254237288,
            "instit_pct": 0.3220338983050847,
            "ambiguous_pct": 0.26101694915254237,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.26101694915254237,
            "retail_qty_pct": 0.025166803230715205,
            "mixed_qty_pct": 0.1737094697413087,
            "instit_qty_pct": 0.5777829802177221,
            "ambiguous_qty_pct": 0.223340746810254,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.223340746810254,
            "retail_notional_pct": 0.02516373057541991,
            "mixed_notional_pct": 0.17376649846257824,
            "instit_notional_pct": 0.5777502424497368,
            "ambiguous_notional_pct": 0.22331952851226505,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.22331952851226505
          },
          "run_composition": {
            "retail_pct": 0.5897435897435898,
            "mixed_pct": 0.23076923076923078,
            "instit_pct": 0.06837606837606838,
            "ambiguous_pct": 0.1111111111111111,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.1111111111111111,
            "retail_notional_pct": 0.02516373057541991,
            "mixed_notional_pct": 0.17376649846257824,
            "instit_notional_pct": 0.5777502424497368,
            "unclear_notional_pct": 0.22331952851226505
          },
          "counts": {
            "trades": {
              "retail": 73,
              "mixed": 50,
              "institutional": 95,
              "ambiguous": 77,
              "unobservable": 0,
              "unclear": 77
            },
            "runs": {
              "retail": 69,
              "mixed": 27,
              "institutional": 8,
              "ambiguous": 13,
              "unobservable": 0,
              "unclear": 13
            }
          },
          "confidence": {
            "high": 0.6581196581196581,
            "medium": 0.23076923076923078,
            "low": 0.1111111111111111,
            "na": 0.0
          },
          "confidence_counts": {
            "high": 77,
            "medium": 27,
            "low": 13,
            "na": 0
          },
          "trade_confidence": {
            "high": 0.5694915254237288,
            "medium": 0.1694915254237288,
            "low": 0.26101694915254237,
            "na": 0.0
          },
          "trade_confidence_counts": {
            "high": 168,
            "medium": 50,
            "low": 77,
            "na": 0
          },
          "observability": {
            "avg_feature_coverage": 0.8769230769230766,
            "observable_run_pct": 1.0,
            "ambiguous_run_pct": 0.1111111111111111,
            "unobservable_run_pct": 0.0
          },
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "dominant_share": 0.5897435897435898,
          "dominance_gap": 0.358974358974359,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 231,
              "WALK_BOOK": 64
            },
            "d2_information": {
              "UNOBSERVABLE": 295
            },
            "d3_urgency": {
              "UNOBSERVABLE": 117
            },
            "participant_confidence": {
              "HIGH": 77,
              "MEDIUM": 27,
              "LOW": 13
            }
          },
          "trade_size": {
            "avg": 1925.9627118644069,
            "median": 134.0
          },
          "run_size": {
            "avg": 4856.059829059829,
            "median": 396.0,
            "avg_length": 1.2478632478632479
          },
          "recent_trades": [
            {
              "trade_id": "BMLL-301",
              "timestamp": "2026-04-30T08:59:56.752700",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 48208,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-300",
              "timestamp": "2026-04-30T08:59:50.419200",
              "price": 0.665,
              "size": 9800.0,
              "notional": 6517.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 48208,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-299",
              "timestamp": "2026-04-30T08:59:50.419200",
              "price": 0.665,
              "size": 200.0,
              "notional": 133.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 48208,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-298",
              "timestamp": "2026-04-30T08:59:49.449200",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 48207,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-297",
              "timestamp": "2026-04-30T08:59:39.101500",
              "price": 0.665,
              "size": 7300.0,
              "notional": 4854.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48206,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-296",
              "timestamp": "2026-04-30T08:59:39.101500",
              "price": 0.665,
              "size": 200.0,
              "notional": 133.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48206,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-295",
              "timestamp": "2026-04-30T08:59:39.101500",
              "price": 0.665,
              "size": 700.0,
              "notional": 465.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48206,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-294",
              "timestamp": "2026-04-30T08:59:39.101500",
              "price": 0.665,
              "size": 1800.0,
              "notional": 1197.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48206,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-293",
              "timestamp": "2026-04-30T08:59:36.988300",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48206,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-292",
              "timestamp": "2026-04-30T08:59:36.112400",
              "price": 0.67,
              "size": 500.0,
              "notional": 335.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 48205,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-291",
              "timestamp": "2026-04-30T08:59:28.714000",
              "price": 0.67,
              "size": 200.0,
              "notional": 134.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 48205,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-290",
              "timestamp": "2026-04-30T08:59:27.685400",
              "price": 0.665,
              "size": 6000.0,
              "notional": 3990.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48204,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-289",
              "timestamp": "2026-04-30T08:59:27.685400",
              "price": 0.665,
              "size": 34000.0,
              "notional": 22610.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48204,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-288",
              "timestamp": "2026-04-30T08:59:24.411500",
              "price": 0.67,
              "size": 600.0,
              "notional": 402.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 48203,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-287",
              "timestamp": "2026-04-30T08:59:24.411400",
              "price": 0.665,
              "size": 200.0,
              "notional": 133.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 48202,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-286",
              "timestamp": "2026-04-30T08:59:20.099100",
              "price": 0.67,
              "size": 200.0,
              "notional": 134.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48201,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-285",
              "timestamp": "2026-04-30T08:59:16.980600",
              "price": 0.67,
              "size": 200.0,
              "notional": 134.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48201,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-284",
              "timestamp": "2026-04-30T08:59:13.923000",
              "price": 0.67,
              "size": 1100.0,
              "notional": 737.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48201,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-283",
              "timestamp": "2026-04-30T08:59:13.560400",
              "price": 0.66,
              "size": 200.0,
              "notional": 132.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 48200,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-282",
              "timestamp": "2026-04-30T08:59:06.083600",
              "price": 0.67,
              "size": 1300.0,
              "notional": 871.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 48199,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-281",
              "timestamp": "2026-04-30T08:59:06.083600",
              "price": 0.67,
              "size": 500.0,
              "notional": 335.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 48199,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-280",
              "timestamp": "2026-04-30T08:59:04.236400",
              "price": 0.67,
              "size": 200.0,
              "notional": 134.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 48199,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-279",
              "timestamp": "2026-04-30T08:59:02.779800",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 48199,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-278",
              "timestamp": "2026-04-30T08:59:02.779800",
              "price": 0.665,
              "size": 400.0,
              "notional": 266.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 48199,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-277",
              "timestamp": "2026-04-30T08:59:02.779800",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 48199,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-276",
              "timestamp": "2026-04-30T08:59:02.779800",
              "price": 0.665,
              "size": 600.0,
              "notional": 399.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 48199,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-275",
              "timestamp": "2026-04-30T08:59:02.779800",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 48199,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-274",
              "timestamp": "2026-04-30T08:59:02.779700",
              "price": 0.665,
              "size": 7000.0,
              "notional": 4655.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 48199,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-273",
              "timestamp": "2026-04-30T08:59:02.779600",
              "price": 0.665,
              "size": 200.0,
              "notional": 133.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 48199,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-272",
              "timestamp": "2026-04-30T08:58:59.734600",
              "price": 0.665,
              "size": 6000.0,
              "notional": 3990.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 48199,
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
              "retail_pct": 0.24745762711864408,
              "mixed_pct": 0.1694915254237288,
              "instit_pct": 0.3220338983050847,
              "ambiguous_pct": 0.26101694915254237,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.26101694915254237,
              "retail_qty_pct": 0.025166803230715205,
              "mixed_qty_pct": 0.1737094697413087,
              "instit_qty_pct": 0.5777829802177221,
              "ambiguous_qty_pct": 0.223340746810254,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.223340746810254,
              "retail_notional_pct": 0.02516373057541991,
              "mixed_notional_pct": 0.17376649846257824,
              "instit_notional_pct": 0.5777502424497368,
              "ambiguous_notional_pct": 0.22331952851226505,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.22331952851226505,
              "run_retail_pct": 0.5897435897435898,
              "run_mixed_pct": 0.23076923076923078,
              "run_instit_pct": 0.06837606837606838,
              "run_unclear_pct": 0.1111111111111111,
              "avg_trade_size": 1925.9627118644069,
              "avg_run_notional": 4856.059829059829,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.6581196581196581,
              "medium_confidence_pct": 0.23076923076923078,
              "low_confidence_pct": 0.1111111111111111,
              "na_confidence_pct": 0.0,
              "avg_feature_coverage": 0.8769230769230766,
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
              "retail_pct": 0.5020408163265306,
              "mixed_pct": 0.05986394557823129,
              "instit_pct": 0.4380952380952381,
              "ambiguous_pct": 0.0,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.0,
              "retail_qty_pct": 0.36878945923689266,
              "mixed_qty_pct": 0.009058468295360967,
              "instit_qty_pct": 0.6221520724677464,
              "ambiguous_qty_pct": 0.0,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.0,
              "retail_notional_pct": 0.36855824301677986,
              "mixed_notional_pct": 0.009042088659880567,
              "instit_notional_pct": 0.6223996683233396,
              "ambiguous_notional_pct": 0.0,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.0,
              "run_retail_pct": 0.8028503562945368,
              "run_mixed_pct": 0.047505938242280284,
              "run_instit_pct": 0.1496437054631829,
              "run_unclear_pct": 0.0,
              "avg_trade_size": 662.8863945578231,
              "avg_run_notional": 1157.2957244655581,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.850356294536817,
              "low_confidence_pct": 0.1496437054631829,
              "na_confidence_pct": 0.0,
              "avg_feature_coverage": 0.48028503562945374,
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
          "n_trades": 8271,
          "n_runs": 4562,
          "n_trade_days": 21,
          "first_trade_date": "2026-04-01",
          "last_trade_date": "2026-04-30",
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
            "retail_pct": 0.33587232499093217,
            "mixed_pct": 0.2780800386893967,
            "instit_pct": 0.25486640067706445,
            "ambiguous_pct": 0.1311812356426067,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.1311812356426067,
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
            "unclear_notional_pct": 0.2510171824451908
          },
          "run_composition": {
            "retail_pct": 0.6034633932485752,
            "mixed_pct": 0.2479175800087681,
            "instit_pct": 0.05830775975449364,
            "ambiguous_pct": 0.09031126698816308,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.09031126698816308,
            "retail_notional_pct": 0.024360075007291017,
            "mixed_notional_pct": 0.17067781786156835,
            "instit_notional_pct": 0.5539449246859498,
            "unclear_notional_pct": 0.2510171824451908
          },
          "counts": {
            "trades": {
              "retail": 2778,
              "mixed": 2300,
              "institutional": 2108,
              "ambiguous": 1085,
              "unobservable": 0,
              "unclear": 1085
            },
            "runs": {
              "retail": 2753,
              "mixed": 1131,
              "institutional": 266,
              "ambiguous": 412,
              "unobservable": 0,
              "unclear": 412
            }
          },
          "confidence": {
            "high": 0.6617711530030689,
            "medium": 0.2479175800087681,
            "low": 0.09031126698816308,
            "na": 0.0
          },
          "confidence_counts": {
            "high": 3019,
            "medium": 1131,
            "low": 412,
            "na": 0
          },
          "trade_confidence": {
            "high": 0.5907387256679966,
            "medium": 0.2780800386893967,
            "low": 0.1311812356426067,
            "na": 0.0
          },
          "trade_confidence_counts": {
            "high": 4886,
            "medium": 2300,
            "low": 1085,
            "na": 0
          },
          "observability": {
            "avg_feature_coverage": 0.8808855765015343,
            "observable_run_pct": 1.0,
            "ambiguous_run_pct": 0.09031126698816308,
            "unobservable_run_pct": 0.0
          },
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "dominant_share": 0.6034633932485752,
          "dominance_gap": 0.35554581323980716,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 8031,
              "WALK_BOOK": 236,
              "UNOBSERVABLE": 4
            },
            "d2_information": {
              "UNOBSERVABLE": 8271
            },
            "d3_urgency": {
              "UNOBSERVABLE": 4562
            },
            "participant_confidence": {
              "HIGH": 3019,
              "MEDIUM": 1131,
              "LOW": 412
            }
          },
          "trade_size": {
            "avg": 1583.4353161649135,
            "median": 129.0
          },
          "run_size": {
            "avg": 2870.800854888207,
            "median": 132.0,
            "avg_length": 1.5063568610258657
          },
          "recent_trades": [
            {
              "trade_id": "BMLL-301",
              "timestamp": "2026-04-30T08:59:56.752700",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 48208,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-300",
              "timestamp": "2026-04-30T08:59:50.419200",
              "price": 0.665,
              "size": 9800.0,
              "notional": 6517.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 48208,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-299",
              "timestamp": "2026-04-30T08:59:50.419200",
              "price": 0.665,
              "size": 200.0,
              "notional": 133.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 48208,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-298",
              "timestamp": "2026-04-30T08:59:49.449200",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 48207,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-297",
              "timestamp": "2026-04-30T08:59:39.101500",
              "price": 0.665,
              "size": 7300.0,
              "notional": 4854.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48206,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-296",
              "timestamp": "2026-04-30T08:59:39.101500",
              "price": 0.665,
              "size": 200.0,
              "notional": 133.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48206,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-295",
              "timestamp": "2026-04-30T08:59:39.101500",
              "price": 0.665,
              "size": 700.0,
              "notional": 465.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48206,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-294",
              "timestamp": "2026-04-30T08:59:39.101500",
              "price": 0.665,
              "size": 1800.0,
              "notional": 1197.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48206,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-293",
              "timestamp": "2026-04-30T08:59:36.988300",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48206,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-292",
              "timestamp": "2026-04-30T08:59:36.112400",
              "price": 0.67,
              "size": 500.0,
              "notional": 335.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 48205,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-291",
              "timestamp": "2026-04-30T08:59:28.714000",
              "price": 0.67,
              "size": 200.0,
              "notional": 134.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 48205,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-290",
              "timestamp": "2026-04-30T08:59:27.685400",
              "price": 0.665,
              "size": 6000.0,
              "notional": 3990.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48204,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-289",
              "timestamp": "2026-04-30T08:59:27.685400",
              "price": 0.665,
              "size": 34000.0,
              "notional": 22610.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48204,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-288",
              "timestamp": "2026-04-30T08:59:24.411500",
              "price": 0.67,
              "size": 600.0,
              "notional": 402.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 48203,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-287",
              "timestamp": "2026-04-30T08:59:24.411400",
              "price": 0.665,
              "size": 200.0,
              "notional": 133.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 48202,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-286",
              "timestamp": "2026-04-30T08:59:20.099100",
              "price": 0.67,
              "size": 200.0,
              "notional": 134.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48201,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-285",
              "timestamp": "2026-04-30T08:59:16.980600",
              "price": 0.67,
              "size": 200.0,
              "notional": 134.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48201,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-284",
              "timestamp": "2026-04-30T08:59:13.923000",
              "price": 0.67,
              "size": 1100.0,
              "notional": 737.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48201,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-283",
              "timestamp": "2026-04-30T08:59:13.560400",
              "price": 0.66,
              "size": 200.0,
              "notional": 132.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 48200,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-282",
              "timestamp": "2026-04-30T08:59:06.083600",
              "price": 0.67,
              "size": 1300.0,
              "notional": 871.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 48199,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-281",
              "timestamp": "2026-04-30T08:59:06.083600",
              "price": 0.67,
              "size": 500.0,
              "notional": 335.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 48199,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-280",
              "timestamp": "2026-04-30T08:59:04.236400",
              "price": 0.67,
              "size": 200.0,
              "notional": 134.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 48199,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-279",
              "timestamp": "2026-04-30T08:59:02.779800",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 48199,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-278",
              "timestamp": "2026-04-30T08:59:02.779800",
              "price": 0.665,
              "size": 400.0,
              "notional": 266.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 48199,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-277",
              "timestamp": "2026-04-30T08:59:02.779800",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 48199,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-276",
              "timestamp": "2026-04-30T08:59:02.779800",
              "price": 0.665,
              "size": 600.0,
              "notional": 399.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 48199,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-275",
              "timestamp": "2026-04-30T08:59:02.779800",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 48199,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-274",
              "timestamp": "2026-04-30T08:59:02.779700",
              "price": 0.665,
              "size": 7000.0,
              "notional": 4655.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 48199,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-273",
              "timestamp": "2026-04-30T08:59:02.779600",
              "price": 0.665,
              "size": 200.0,
              "notional": 133.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 48199,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-272",
              "timestamp": "2026-04-30T08:58:59.734600",
              "price": 0.665,
              "size": 6000.0,
              "notional": 3990.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 48199,
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
              "retail_pct": 0.33587232499093217,
              "mixed_pct": 0.2780800386893967,
              "instit_pct": 0.25486640067706445,
              "ambiguous_pct": 0.1311812356426067,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.1311812356426067,
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
              "run_unclear_pct": 0.09031126698816308,
              "avg_trade_size": 1583.4353161649135,
              "avg_run_notional": 2870.800854888207,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.6617711530030689,
              "medium_confidence_pct": 0.2479175800087681,
              "low_confidence_pct": 0.09031126698816308,
              "na_confidence_pct": 0.0,
              "avg_feature_coverage": 0.8808855765015343,
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
              "retail_pct": 0.4789487620812922,
              "mixed_pct": 0.037402356679465114,
              "instit_pct": 0.48153051767509597,
              "ambiguous_pct": 0.0021183635641466966,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.0021183635641466966,
              "retail_qty_pct": 0.193673674781508,
              "mixed_qty_pct": 0.007370106626178923,
              "instit_qty_pct": 0.7988455459447121,
              "ambiguous_qty_pct": 0.00011067264760099743,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.00011067264760099743,
              "retail_notional_pct": 0.1945957915626132,
              "mixed_notional_pct": 0.007376276334493238,
              "instit_notional_pct": 0.7979147337654632,
              "ambiguous_notional_pct": 0.00011319833743040394,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.00011319833743040394,
              "run_retail_pct": 0.7895113230035757,
              "run_mixed_pct": 0.030035756853396902,
              "run_instit_pct": 0.17854588796185936,
              "run_unclear_pct": 0.0019070321811680572,
              "avg_trade_size": 1281.8907718787236,
              "avg_run_notional": 2308.014541120381,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.7306317044100119,
              "low_confidence_pct": 0.2693682955899881,
              "na_confidence_pct": 0.0,
              "avg_feature_coverage": 0.48269964243146607,
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
          "n_trades": 22758,
          "n_runs": 13462,
          "n_trade_days": 63,
          "first_trade_date": "2026-01-29",
          "last_trade_date": "2026-04-30",
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
            "retail_pct": 0.3579840056243958,
            "mixed_pct": 0.2886457509447227,
            "instit_pct": 0.22361367431232973,
            "ambiguous_pct": 0.1297565691185517,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.1297565691185517,
            "retail_qty_pct": 0.02209787668100972,
            "mixed_qty_pct": 0.17821927284238664,
            "instit_qty_pct": 0.5539359369687306,
            "ambiguous_qty_pct": 0.24574691350787303,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.24574691350787303,
            "retail_notional_pct": 0.022056860350107364,
            "mixed_notional_pct": 0.17929888467598962,
            "instit_notional_pct": 0.5526941787028835,
            "ambiguous_notional_pct": 0.2459500762710195,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.2459500762710195
          },
          "run_composition": {
            "retail_pct": 0.5999851433665131,
            "mixed_pct": 0.2517456544347051,
            "instit_pct": 0.051255385529638986,
            "ambiguous_pct": 0.09701381666914277,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.09701381666914277,
            "retail_notional_pct": 0.022056860350107364,
            "mixed_notional_pct": 0.17929888467598962,
            "instit_notional_pct": 0.5526941787028835,
            "unclear_notional_pct": 0.2459500762710195
          },
          "counts": {
            "trades": {
              "retail": 8147,
              "mixed": 6569,
              "institutional": 5089,
              "ambiguous": 2953,
              "unobservable": 0,
              "unclear": 2953
            },
            "runs": {
              "retail": 8077,
              "mixed": 3389,
              "institutional": 690,
              "ambiguous": 1306,
              "unobservable": 0,
              "unclear": 1306
            }
          },
          "confidence": {
            "high": 0.6511662457287178,
            "medium": 0.25181993760213933,
            "low": 0.09701381666914277,
            "na": 0.0
          },
          "confidence_counts": {
            "high": 8766,
            "medium": 3390,
            "low": 1306,
            "na": 0
          },
          "trade_confidence": {
            "high": 0.5815097987520872,
            "medium": 0.2887336321293611,
            "low": 0.1297565691185517,
            "na": 0.0
          },
          "trade_confidence_counts": {
            "high": 13234,
            "medium": 6571,
            "low": 2953,
            "na": 0
          },
          "observability": {
            "avg_feature_coverage": 0.8773844896746397,
            "observable_run_pct": 1.0,
            "ambiguous_run_pct": 0.09701381666914277,
            "unobservable_run_pct": 0.0
          },
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "dominant_share": 0.5999851433665131,
          "dominance_gap": 0.348239488931808,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 21990,
              "WALK_BOOK": 762,
              "UNOBSERVABLE": 6
            },
            "d2_information": {
              "UNOBSERVABLE": 22758
            },
            "d3_urgency": {
              "UNOBSERVABLE": 13462
            },
            "participant_confidence": {
              "HIGH": 8766,
              "MEDIUM": 3390,
              "LOW": 1306
            }
          },
          "trade_size": {
            "avg": 1993.1000746990069,
            "median": 131.0
          },
          "run_size": {
            "avg": 3369.4080745803003,
            "median": 133.0,
            "avg_length": 1.357376318526222
          },
          "recent_trades": [
            {
              "trade_id": "BMLL-301",
              "timestamp": "2026-04-30T08:59:56.752700",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 48208,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-300",
              "timestamp": "2026-04-30T08:59:50.419200",
              "price": 0.665,
              "size": 9800.0,
              "notional": 6517.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 48208,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-299",
              "timestamp": "2026-04-30T08:59:50.419200",
              "price": 0.665,
              "size": 200.0,
              "notional": 133.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 48208,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-298",
              "timestamp": "2026-04-30T08:59:49.449200",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 48207,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-297",
              "timestamp": "2026-04-30T08:59:39.101500",
              "price": 0.665,
              "size": 7300.0,
              "notional": 4854.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48206,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-296",
              "timestamp": "2026-04-30T08:59:39.101500",
              "price": 0.665,
              "size": 200.0,
              "notional": 133.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48206,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-295",
              "timestamp": "2026-04-30T08:59:39.101500",
              "price": 0.665,
              "size": 700.0,
              "notional": 465.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48206,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-294",
              "timestamp": "2026-04-30T08:59:39.101500",
              "price": 0.665,
              "size": 1800.0,
              "notional": 1197.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48206,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-293",
              "timestamp": "2026-04-30T08:59:36.988300",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48206,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-292",
              "timestamp": "2026-04-30T08:59:36.112400",
              "price": 0.67,
              "size": 500.0,
              "notional": 335.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 48205,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-291",
              "timestamp": "2026-04-30T08:59:28.714000",
              "price": 0.67,
              "size": 200.0,
              "notional": 134.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 48205,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-290",
              "timestamp": "2026-04-30T08:59:27.685400",
              "price": 0.665,
              "size": 6000.0,
              "notional": 3990.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48204,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-289",
              "timestamp": "2026-04-30T08:59:27.685400",
              "price": 0.665,
              "size": 34000.0,
              "notional": 22610.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48204,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-288",
              "timestamp": "2026-04-30T08:59:24.411500",
              "price": 0.67,
              "size": 600.0,
              "notional": 402.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 48203,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-287",
              "timestamp": "2026-04-30T08:59:24.411400",
              "price": 0.665,
              "size": 200.0,
              "notional": 133.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 48202,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-286",
              "timestamp": "2026-04-30T08:59:20.099100",
              "price": 0.67,
              "size": 200.0,
              "notional": 134.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48201,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-285",
              "timestamp": "2026-04-30T08:59:16.980600",
              "price": 0.67,
              "size": 200.0,
              "notional": 134.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48201,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-284",
              "timestamp": "2026-04-30T08:59:13.923000",
              "price": 0.67,
              "size": 1100.0,
              "notional": 737.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48201,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-283",
              "timestamp": "2026-04-30T08:59:13.560400",
              "price": 0.66,
              "size": 200.0,
              "notional": 132.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 48200,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-282",
              "timestamp": "2026-04-30T08:59:06.083600",
              "price": 0.67,
              "size": 1300.0,
              "notional": 871.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 48199,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-281",
              "timestamp": "2026-04-30T08:59:06.083600",
              "price": 0.67,
              "size": 500.0,
              "notional": 335.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 48199,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-280",
              "timestamp": "2026-04-30T08:59:04.236400",
              "price": 0.67,
              "size": 200.0,
              "notional": 134.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 48199,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-279",
              "timestamp": "2026-04-30T08:59:02.779800",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 48199,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-278",
              "timestamp": "2026-04-30T08:59:02.779800",
              "price": 0.665,
              "size": 400.0,
              "notional": 266.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 48199,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-277",
              "timestamp": "2026-04-30T08:59:02.779800",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 48199,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-276",
              "timestamp": "2026-04-30T08:59:02.779800",
              "price": 0.665,
              "size": 600.0,
              "notional": 399.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 48199,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-275",
              "timestamp": "2026-04-30T08:59:02.779800",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 48199,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-274",
              "timestamp": "2026-04-30T08:59:02.779700",
              "price": 0.665,
              "size": 7000.0,
              "notional": 4655.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 48199,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-273",
              "timestamp": "2026-04-30T08:59:02.779600",
              "price": 0.665,
              "size": 200.0,
              "notional": 133.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 48199,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-272",
              "timestamp": "2026-04-30T08:58:59.734600",
              "price": 0.665,
              "size": 6000.0,
              "notional": 3990.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 48199,
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
              "retail_pct": 0.3579840056243958,
              "mixed_pct": 0.2886457509447227,
              "instit_pct": 0.22361367431232973,
              "ambiguous_pct": 0.1297565691185517,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.1297565691185517,
              "retail_qty_pct": 0.02209787668100972,
              "mixed_qty_pct": 0.17821927284238664,
              "instit_qty_pct": 0.5539359369687306,
              "ambiguous_qty_pct": 0.24574691350787303,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.24574691350787303,
              "retail_notional_pct": 0.022056860350107364,
              "mixed_notional_pct": 0.17929888467598962,
              "instit_notional_pct": 0.5526941787028835,
              "ambiguous_notional_pct": 0.2459500762710195,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.2459500762710195,
              "run_retail_pct": 0.5999851433665131,
              "run_mixed_pct": 0.2517456544347051,
              "run_instit_pct": 0.051255385529638986,
              "run_unclear_pct": 0.09701381666914277,
              "avg_trade_size": 1993.1000746990069,
              "avg_run_notional": 3369.4080745803003,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.6511662457287178,
              "medium_confidence_pct": 0.25181993760213933,
              "low_confidence_pct": 0.09701381666914277,
              "na_confidence_pct": 0.0,
              "avg_feature_coverage": 0.8773844896746397,
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
              "retail_pct": 0.4572673601349452,
              "mixed_pct": 0.04981374754006185,
              "instit_pct": 0.49063466404273265,
              "ambiguous_pct": 0.0022842282822603316,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.0022842282822603316,
              "retail_qty_pct": 0.21927054341635752,
              "mixed_qty_pct": 0.034786819522962226,
              "instit_qty_pct": 0.7453288844986856,
              "ambiguous_qty_pct": 0.0006137525619946395,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.0006137525619946395,
              "retail_notional_pct": 0.2204445260748757,
              "mixed_notional_pct": 0.03566436960428333,
              "instit_notional_pct": 0.7432822682878895,
              "ambiguous_notional_pct": 0.0006088360329515178,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.0006088360329515178,
              "run_retail_pct": 0.7817775917399191,
              "run_mixed_pct": 0.037951723175666245,
              "run_instit_pct": 0.178247523371006,
              "run_unclear_pct": 0.002023161713408679,
              "avg_trade_size": 1507.3271278465,
              "avg_run_notional": 2992.3608727501046,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.7065369052602205,
              "low_confidence_pct": 0.29346309473977955,
              "na_confidence_pct": 0.0,
              "avg_feature_coverage": 0.48706048555881126,
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
          "n_trades": 45455,
          "n_runs": 27699,
          "n_trade_days": 126,
          "first_trade_date": "2025-10-30",
          "last_trade_date": "2026-04-30",
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
            "retail_pct": 0.371840281597184,
            "mixed_pct": 0.28571114288857113,
            "instit_pct": 0.21656583434165658,
            "ambiguous_pct": 0.12588274117258827,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.12588274117258827,
            "retail_qty_pct": 0.030514123921552727,
            "mixed_qty_pct": 0.19426241555295393,
            "instit_qty_pct": 0.5269115567651397,
            "ambiguous_qty_pct": 0.2483119037603537,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.2483119037603537,
            "retail_notional_pct": 0.030589472913758933,
            "mixed_notional_pct": 0.1952410272218327,
            "instit_notional_pct": 0.5255624259496149,
            "ambiguous_notional_pct": 0.24860707391479347,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.24860707391479347
          },
          "run_composition": {
            "retail_pct": 0.6029459547276075,
            "mixed_pct": 0.2502617423011661,
            "instit_pct": 0.054297989097079315,
            "ambiguous_pct": 0.09249431387414708,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.09249431387414708,
            "retail_notional_pct": 0.03058865041728411,
            "mixed_notional_pct": 0.19524119287410505,
            "instit_notional_pct": 0.5255628718631166,
            "unclear_notional_pct": 0.24860728484549435
          },
          "counts": {
            "trades": {
              "retail": 16902,
              "mixed": 12987,
              "institutional": 9844,
              "ambiguous": 5722,
              "unobservable": 0,
              "unclear": 5722
            },
            "runs": {
              "retail": 16701,
              "mixed": 6932,
              "institutional": 1504,
              "ambiguous": 2562,
              "unobservable": 0,
              "unclear": 2562
            }
          },
          "confidence": {
            "high": 0.6572078414383191,
            "medium": 0.25029784468753385,
            "low": 0.09249431387414708,
            "na": 0.0
          },
          "confidence_counts": {
            "high": 18204,
            "medium": 6933,
            "low": 2562,
            "na": 0
          },
          "trade_confidence": {
            "high": 0.588340116598834,
            "medium": 0.2857551424485755,
            "low": 0.12590474095259047,
            "na": 0.0
          },
          "trade_confidence_counts": {
            "high": 26743,
            "medium": 12989,
            "low": 5723,
            "na": 0
          },
          "observability": {
            "avg_feature_coverage": 0.8770966460883063,
            "observable_run_pct": 1.0,
            "ambiguous_run_pct": 0.09249431387414708,
            "unobservable_run_pct": 0.0
          },
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "dominant_share": 0.6029459547276075,
          "dominance_gap": 0.3526842124264414,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 44351,
              "WALK_BOOK": 1097,
              "UNOBSERVABLE": 7
            },
            "d2_information": {
              "UNOBSERVABLE": 45455
            },
            "d3_urgency": {
              "UNOBSERVABLE": 27699
            },
            "participant_confidence": {
              "HIGH": 18204,
              "MEDIUM": 6933,
              "LOW": 2562
            }
          },
          "trade_size": {
            "avg": 1750.2341986580134,
            "median": 136.0
          },
          "run_size": {
            "avg": 2872.191342647749,
            "median": 138.0,
            "avg_length": 1.3507707859489513
          },
          "recent_trades": [
            {
              "trade_id": "BMLL-301",
              "timestamp": "2026-04-30T08:59:56.752700",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 48208,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-300",
              "timestamp": "2026-04-30T08:59:50.419200",
              "price": 0.665,
              "size": 9800.0,
              "notional": 6517.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 48208,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-299",
              "timestamp": "2026-04-30T08:59:50.419200",
              "price": 0.665,
              "size": 200.0,
              "notional": 133.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 48208,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-298",
              "timestamp": "2026-04-30T08:59:49.449200",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 48207,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-297",
              "timestamp": "2026-04-30T08:59:39.101500",
              "price": 0.665,
              "size": 7300.0,
              "notional": 4854.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48206,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-296",
              "timestamp": "2026-04-30T08:59:39.101500",
              "price": 0.665,
              "size": 200.0,
              "notional": 133.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48206,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-295",
              "timestamp": "2026-04-30T08:59:39.101500",
              "price": 0.665,
              "size": 700.0,
              "notional": 465.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48206,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-294",
              "timestamp": "2026-04-30T08:59:39.101500",
              "price": 0.665,
              "size": 1800.0,
              "notional": 1197.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48206,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-293",
              "timestamp": "2026-04-30T08:59:36.988300",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48206,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-292",
              "timestamp": "2026-04-30T08:59:36.112400",
              "price": 0.67,
              "size": 500.0,
              "notional": 335.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 48205,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-291",
              "timestamp": "2026-04-30T08:59:28.714000",
              "price": 0.67,
              "size": 200.0,
              "notional": 134.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 48205,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-290",
              "timestamp": "2026-04-30T08:59:27.685400",
              "price": 0.665,
              "size": 6000.0,
              "notional": 3990.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48204,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-289",
              "timestamp": "2026-04-30T08:59:27.685400",
              "price": 0.665,
              "size": 34000.0,
              "notional": 22610.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48204,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-288",
              "timestamp": "2026-04-30T08:59:24.411500",
              "price": 0.67,
              "size": 600.0,
              "notional": 402.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 48203,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-287",
              "timestamp": "2026-04-30T08:59:24.411400",
              "price": 0.665,
              "size": 200.0,
              "notional": 133.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 48202,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-286",
              "timestamp": "2026-04-30T08:59:20.099100",
              "price": 0.67,
              "size": 200.0,
              "notional": 134.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48201,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-285",
              "timestamp": "2026-04-30T08:59:16.980600",
              "price": 0.67,
              "size": 200.0,
              "notional": 134.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48201,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-284",
              "timestamp": "2026-04-30T08:59:13.923000",
              "price": 0.67,
              "size": 1100.0,
              "notional": 737.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 48201,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-283",
              "timestamp": "2026-04-30T08:59:13.560400",
              "price": 0.66,
              "size": 200.0,
              "notional": 132.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 48200,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-282",
              "timestamp": "2026-04-30T08:59:06.083600",
              "price": 0.67,
              "size": 1300.0,
              "notional": 871.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 48199,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-281",
              "timestamp": "2026-04-30T08:59:06.083600",
              "price": 0.67,
              "size": 500.0,
              "notional": 335.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 48199,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-280",
              "timestamp": "2026-04-30T08:59:04.236400",
              "price": 0.67,
              "size": 200.0,
              "notional": 134.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 48199,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-279",
              "timestamp": "2026-04-30T08:59:02.779800",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 48199,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-278",
              "timestamp": "2026-04-30T08:59:02.779800",
              "price": 0.665,
              "size": 400.0,
              "notional": 266.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 48199,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-277",
              "timestamp": "2026-04-30T08:59:02.779800",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 48199,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-276",
              "timestamp": "2026-04-30T08:59:02.779800",
              "price": 0.665,
              "size": 600.0,
              "notional": 399.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 48199,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-275",
              "timestamp": "2026-04-30T08:59:02.779800",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 48199,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-274",
              "timestamp": "2026-04-30T08:59:02.779700",
              "price": 0.665,
              "size": 7000.0,
              "notional": 4655.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 48199,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-273",
              "timestamp": "2026-04-30T08:59:02.779600",
              "price": 0.665,
              "size": 200.0,
              "notional": 133.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 48199,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "BMLL-272",
              "timestamp": "2026-04-30T08:58:59.734600",
              "price": 0.665,
              "size": 6000.0,
              "notional": 3990.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 48199,
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
              "retail_pct": 0.371840281597184,
              "mixed_pct": 0.28571114288857113,
              "instit_pct": 0.21656583434165658,
              "ambiguous_pct": 0.12588274117258827,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.12588274117258827,
              "retail_qty_pct": 0.030514123921552727,
              "mixed_qty_pct": 0.19426241555295393,
              "instit_qty_pct": 0.5269115567651397,
              "ambiguous_qty_pct": 0.2483119037603537,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.2483119037603537,
              "retail_notional_pct": 0.030589472913758933,
              "mixed_notional_pct": 0.1952410272218327,
              "instit_notional_pct": 0.5255624259496149,
              "ambiguous_notional_pct": 0.24860707391479347,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.24860707391479347,
              "run_retail_pct": 0.6029459547276075,
              "run_mixed_pct": 0.2502617423011661,
              "run_instit_pct": 0.054297989097079315,
              "run_unclear_pct": 0.09249431387414708,
              "avg_trade_size": 1750.2341986580134,
              "avg_run_notional": 2872.191342647749,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.6572078414383191,
              "medium_confidence_pct": 0.25029784468753385,
              "low_confidence_pct": 0.09249431387414708,
              "na_confidence_pct": 0.0,
              "avg_feature_coverage": 0.8770966460883063,
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
              "retail_pct": 0.47343881135183863,
              "mixed_pct": 0.04704029508978065,
              "instit_pct": 0.47792525359278026,
              "ambiguous_pct": 0.0015956399656004891,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.0015956399656004891,
              "retail_qty_pct": 0.2283057501567271,
              "mixed_qty_pct": 0.026395943926258405,
              "instit_qty_pct": 0.7448911729862057,
              "ambiguous_qty_pct": 0.0004071329308088549,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.0004071329308088549,
              "retail_notional_pct": 0.22954169862156235,
              "mixed_notional_pct": 0.026243955019133822,
              "instit_notional_pct": 0.7438262078038744,
              "ambiguous_notional_pct": 0.00038813855542937204,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.00038813855542937204,
              "run_retail_pct": 0.7911780570150029,
              "run_mixed_pct": 0.03603891563617476,
              "run_instit_pct": 0.17142457598337896,
              "run_unclear_pct": 0.0013584513654433946,
              "avg_trade_size": 1588.0229243728825,
              "avg_run_notional": 3061.806670395749,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.7177217971512476,
              "low_confidence_pct": 0.28227820284875244,
              "na_confidence_pct": 0.0,
              "avg_feature_coverage": 0.4851319495774817,
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
      "n_trades": 45455,
      "n_runs": 27699,
      "n_trade_days": 126,
      "first_trade_date": "2025-10-30",
      "last_trade_date": "2026-04-30",
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
        "retail_pct": 0.371840281597184,
        "mixed_pct": 0.28571114288857113,
        "instit_pct": 0.21656583434165658,
        "ambiguous_pct": 0.12588274117258827,
        "unobservable_pct": 0.0,
        "unclear_pct": 0.12588274117258827,
        "retail_qty_pct": 0.030514123921552727,
        "mixed_qty_pct": 0.19426241555295393,
        "instit_qty_pct": 0.5269115567651397,
        "ambiguous_qty_pct": 0.2483119037603537,
        "unobservable_qty_pct": 0.0,
        "unclear_qty_pct": 0.2483119037603537,
        "retail_notional_pct": 0.030589472913758933,
        "mixed_notional_pct": 0.1952410272218327,
        "instit_notional_pct": 0.5255624259496149,
        "ambiguous_notional_pct": 0.24860707391479347,
        "unobservable_notional_pct": 0.0,
        "unclear_notional_pct": 0.24860707391479347
      },
      "run_composition": {
        "retail_pct": 0.6029459547276075,
        "mixed_pct": 0.2502617423011661,
        "instit_pct": 0.054297989097079315,
        "ambiguous_pct": 0.09249431387414708,
        "unobservable_pct": 0.0,
        "unclear_pct": 0.09249431387414708
      },
      "trade_size": {
        "avg": 1750.2341986580134,
        "median": 136.0
      },
      "run_size": {
        "avg": 2872.191342647749,
        "median": 138.0,
        "avg_length": 1.3507707859489513
      },
      "confidence": {
        "high": 0.6572078414383191,
        "medium": 0.25029784468753385,
        "low": 0.09249431387414708,
        "na": 0.0
      },
      "confidence_counts": {
        "high": 18204,
        "medium": 6933,
        "low": 2562,
        "na": 0
      },
      "trade_confidence": {
        "high": 0.588340116598834,
        "medium": 0.2857551424485755,
        "low": 0.12590474095259047,
        "na": 0.0
      },
      "trade_confidence_counts": {
        "high": 26743,
        "medium": 12989,
        "low": 5723,
        "na": 0
      },
      "counts": {
        "trades": {
          "retail": 16902,
          "mixed": 12987,
          "institutional": 9844,
          "ambiguous": 5722,
          "unobservable": 0,
          "unclear": 5722
        },
        "runs": {
          "retail": 16701,
          "mixed": 6932,
          "institutional": 1504,
          "ambiguous": 2562,
          "unobservable": 0,
          "unclear": 2562
        }
      },
      "observability": {
        "avg_feature_coverage": 0.8770966460883063,
        "observable_run_pct": 1.0,
        "ambiguous_run_pct": 0.09249431387414708,
        "unobservable_run_pct": 0.0
      },
      "dominant_bucket": "RETAIL",
      "dominant_label": "Retail-led",
      "dominant_share": 0.6029459547276075,
      "dominance_gap": 0.3526842124264414,
      "over_time": {
        "valid": true,
        "periods": [
          {
            "month": "2025-11",
            "n_trades": 9778,
            "n_runs": 6115,
            "retail_pct": 0.384434444671712,
            "mixed_pct": 0.26355082839026384,
            "instit_pct": 0.22632440171814278,
            "ambiguous_pct": 0.12569032521988135,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.12569032521988135,
            "avg_trade_size": 1438.2040805890774,
            "avg_run_notional": 2299.715372035977,
            "retail_qty_pct": 0.05923939186332959,
            "mixed_qty_pct": 0.27919575917476885,
            "instit_qty_pct": 0.45065570504691244,
            "ambiguous_qty_pct": 0.21090914391498913,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.21090914391498913,
            "retail_notional_pct": 0.05908445636149861,
            "mixed_notional_pct": 0.27930140595805536,
            "instit_notional_pct": 0.45058350745456466,
            "ambiguous_notional_pct": 0.21103063022588134,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.21103063022588134,
            "run_retail_pct": 0.6031071136549468,
            "run_mixed_pct": 0.24480784955028617,
            "run_instit_pct": 0.061488143908421916,
            "run_ambiguous_pct": 0.09059689288634505,
            "run_unobservable_pct": 0.0,
            "run_unclear_pct": 0.09059689288634505,
            "avg_feature_coverage": 0.8775224856909238,
            "high_confidence_pct": 0.6645952575633688,
            "medium_confidence_pct": 0.24480784955028617,
            "low_confidence_pct": 0.09059689288634505,
            "na_confidence_pct": 0.0,
            "total_quantity": null
          },
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
          }
        ]
      },
      "peer_comparison": [
        {
          "ticker": "CRPU",
          "currency": "SGD",
          "is_target": true,
          "retail_pct": 0.371840281597184,
          "mixed_pct": 0.28571114288857113,
          "instit_pct": 0.21656583434165658,
          "ambiguous_pct": 0.12588274117258827,
          "unobservable_pct": 0.0,
          "unclear_pct": 0.12588274117258827,
          "retail_qty_pct": 0.030514123921552727,
          "mixed_qty_pct": 0.19426241555295393,
          "instit_qty_pct": 0.5269115567651397,
          "ambiguous_qty_pct": 0.2483119037603537,
          "unobservable_qty_pct": 0.0,
          "unclear_qty_pct": 0.2483119037603537,
          "retail_notional_pct": 0.030589472913758933,
          "mixed_notional_pct": 0.1952410272218327,
          "instit_notional_pct": 0.5255624259496149,
          "ambiguous_notional_pct": 0.24860707391479347,
          "unobservable_notional_pct": 0.0,
          "unclear_notional_pct": 0.24860707391479347,
          "run_retail_pct": 0.6029459547276075,
          "run_mixed_pct": 0.2502617423011661,
          "run_instit_pct": 0.054297989097079315,
          "run_unclear_pct": 0.09249431387414708,
          "avg_trade_size": 1750.2341986580134,
          "avg_run_notional": 2872.191342647749,
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "high_confidence_pct": 0.6572078414383191,
          "medium_confidence_pct": 0.25029784468753385,
          "low_confidence_pct": 0.09249431387414708,
          "na_confidence_pct": 0.0,
          "avg_feature_coverage": 0.8770966460883063,
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
          "retail_pct": 0.47343881135183863,
          "mixed_pct": 0.04704029508978065,
          "instit_pct": 0.47792525359278026,
          "ambiguous_pct": 0.0015956399656004891,
          "unobservable_pct": 0.0,
          "unclear_pct": 0.0015956399656004891,
          "retail_qty_pct": 0.2283057501567271,
          "mixed_qty_pct": 0.026395943926258405,
          "instit_qty_pct": 0.7448911729862057,
          "ambiguous_qty_pct": 0.0004071329308088549,
          "unobservable_qty_pct": 0.0,
          "unclear_qty_pct": 0.0004071329308088549,
          "retail_notional_pct": 0.22954169862156235,
          "mixed_notional_pct": 0.026243955019133822,
          "instit_notional_pct": 0.7438262078038744,
          "ambiguous_notional_pct": 0.00038813855542937204,
          "unobservable_notional_pct": 0.0,
          "unclear_notional_pct": 0.00038813855542937204,
          "run_retail_pct": 0.7911780570150029,
          "run_mixed_pct": 0.03603891563617476,
          "run_instit_pct": 0.17142457598337896,
          "run_unclear_pct": 0.0013584513654433946,
          "avg_trade_size": 1588.0229243728825,
          "avg_run_notional": 3061.806670395749,
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "high_confidence_pct": 0.0,
          "medium_confidence_pct": 0.7177217971512476,
          "low_confidence_pct": 0.28227820284875244,
          "na_confidence_pct": 0.0,
          "avg_feature_coverage": 0.4851319495774817,
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
            "retail_pct": 0.24745762711864408,
            "mixed_pct": 0.1694915254237288,
            "instit_pct": 0.3220338983050847,
            "ambiguous_pct": 0.26101694915254237,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.26101694915254237,
            "retail_qty_pct": 0.025166803230715205,
            "mixed_qty_pct": 0.1737094697413087,
            "instit_qty_pct": 0.5777829802177221,
            "ambiguous_qty_pct": 0.223340746810254,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.223340746810254,
            "retail_notional_pct": 0.02516373057541991,
            "mixed_notional_pct": 0.17376649846257824,
            "instit_notional_pct": 0.5777502424497368,
            "ambiguous_notional_pct": 0.22331952851226505,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.22331952851226505,
            "run_retail_pct": 0.5897435897435898,
            "run_mixed_pct": 0.23076923076923078,
            "run_instit_pct": 0.06837606837606838,
            "run_unclear_pct": 0.1111111111111111,
            "avg_trade_size": 1925.9627118644069,
            "avg_run_notional": 4856.059829059829,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.6581196581196581,
            "medium_confidence_pct": 0.23076923076923078,
            "low_confidence_pct": 0.1111111111111111,
            "na_confidence_pct": 0.0,
            "avg_feature_coverage": 0.8769230769230766,
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
            "retail_pct": 0.5020408163265306,
            "mixed_pct": 0.05986394557823129,
            "instit_pct": 0.4380952380952381,
            "ambiguous_pct": 0.0,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.0,
            "retail_qty_pct": 0.36878945923689266,
            "mixed_qty_pct": 0.009058468295360967,
            "instit_qty_pct": 0.6221520724677464,
            "ambiguous_qty_pct": 0.0,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.0,
            "retail_notional_pct": 0.36855824301677986,
            "mixed_notional_pct": 0.009042088659880567,
            "instit_notional_pct": 0.6223996683233396,
            "ambiguous_notional_pct": 0.0,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.0,
            "run_retail_pct": 0.8028503562945368,
            "run_mixed_pct": 0.047505938242280284,
            "run_instit_pct": 0.1496437054631829,
            "run_unclear_pct": 0.0,
            "avg_trade_size": 662.8863945578231,
            "avg_run_notional": 1157.2957244655581,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.850356294536817,
            "low_confidence_pct": 0.1496437054631829,
            "na_confidence_pct": 0.0,
            "avg_feature_coverage": 0.48028503562945374,
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
            "retail_pct": 0.33587232499093217,
            "mixed_pct": 0.2780800386893967,
            "instit_pct": 0.25486640067706445,
            "ambiguous_pct": 0.1311812356426067,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.1311812356426067,
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
            "run_unclear_pct": 0.09031126698816308,
            "avg_trade_size": 1583.4353161649135,
            "avg_run_notional": 2870.800854888207,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.6617711530030689,
            "medium_confidence_pct": 0.2479175800087681,
            "low_confidence_pct": 0.09031126698816308,
            "na_confidence_pct": 0.0,
            "avg_feature_coverage": 0.8808855765015343,
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
            "retail_pct": 0.4789487620812922,
            "mixed_pct": 0.037402356679465114,
            "instit_pct": 0.48153051767509597,
            "ambiguous_pct": 0.0021183635641466966,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.0021183635641466966,
            "retail_qty_pct": 0.193673674781508,
            "mixed_qty_pct": 0.007370106626178923,
            "instit_qty_pct": 0.7988455459447121,
            "ambiguous_qty_pct": 0.00011067264760099743,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.00011067264760099743,
            "retail_notional_pct": 0.1945957915626132,
            "mixed_notional_pct": 0.007376276334493238,
            "instit_notional_pct": 0.7979147337654632,
            "ambiguous_notional_pct": 0.00011319833743040394,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.00011319833743040394,
            "run_retail_pct": 0.7895113230035757,
            "run_mixed_pct": 0.030035756853396902,
            "run_instit_pct": 0.17854588796185936,
            "run_unclear_pct": 0.0019070321811680572,
            "avg_trade_size": 1281.8907718787236,
            "avg_run_notional": 2308.014541120381,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.7306317044100119,
            "low_confidence_pct": 0.2693682955899881,
            "na_confidence_pct": 0.0,
            "avg_feature_coverage": 0.48269964243146607,
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
            "retail_pct": 0.3579840056243958,
            "mixed_pct": 0.2886457509447227,
            "instit_pct": 0.22361367431232973,
            "ambiguous_pct": 0.1297565691185517,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.1297565691185517,
            "retail_qty_pct": 0.02209787668100972,
            "mixed_qty_pct": 0.17821927284238664,
            "instit_qty_pct": 0.5539359369687306,
            "ambiguous_qty_pct": 0.24574691350787303,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.24574691350787303,
            "retail_notional_pct": 0.022056860350107364,
            "mixed_notional_pct": 0.17929888467598962,
            "instit_notional_pct": 0.5526941787028835,
            "ambiguous_notional_pct": 0.2459500762710195,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.2459500762710195,
            "run_retail_pct": 0.5999851433665131,
            "run_mixed_pct": 0.2517456544347051,
            "run_instit_pct": 0.051255385529638986,
            "run_unclear_pct": 0.09701381666914277,
            "avg_trade_size": 1993.1000746990069,
            "avg_run_notional": 3369.4080745803003,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.6511662457287178,
            "medium_confidence_pct": 0.25181993760213933,
            "low_confidence_pct": 0.09701381666914277,
            "na_confidence_pct": 0.0,
            "avg_feature_coverage": 0.8773844896746397,
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
            "retail_pct": 0.4572673601349452,
            "mixed_pct": 0.04981374754006185,
            "instit_pct": 0.49063466404273265,
            "ambiguous_pct": 0.0022842282822603316,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.0022842282822603316,
            "retail_qty_pct": 0.21927054341635752,
            "mixed_qty_pct": 0.034786819522962226,
            "instit_qty_pct": 0.7453288844986856,
            "ambiguous_qty_pct": 0.0006137525619946395,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.0006137525619946395,
            "retail_notional_pct": 0.2204445260748757,
            "mixed_notional_pct": 0.03566436960428333,
            "instit_notional_pct": 0.7432822682878895,
            "ambiguous_notional_pct": 0.0006088360329515178,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.0006088360329515178,
            "run_retail_pct": 0.7817775917399191,
            "run_mixed_pct": 0.037951723175666245,
            "run_instit_pct": 0.178247523371006,
            "run_unclear_pct": 0.002023161713408679,
            "avg_trade_size": 1507.3271278465,
            "avg_run_notional": 2992.3608727501046,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.7065369052602205,
            "low_confidence_pct": 0.29346309473977955,
            "na_confidence_pct": 0.0,
            "avg_feature_coverage": 0.48706048555881126,
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
            "retail_pct": 0.371840281597184,
            "mixed_pct": 0.28571114288857113,
            "instit_pct": 0.21656583434165658,
            "ambiguous_pct": 0.12588274117258827,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.12588274117258827,
            "retail_qty_pct": 0.030514123921552727,
            "mixed_qty_pct": 0.19426241555295393,
            "instit_qty_pct": 0.5269115567651397,
            "ambiguous_qty_pct": 0.2483119037603537,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.2483119037603537,
            "retail_notional_pct": 0.030589472913758933,
            "mixed_notional_pct": 0.1952410272218327,
            "instit_notional_pct": 0.5255624259496149,
            "ambiguous_notional_pct": 0.24860707391479347,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.24860707391479347,
            "run_retail_pct": 0.6029459547276075,
            "run_mixed_pct": 0.2502617423011661,
            "run_instit_pct": 0.054297989097079315,
            "run_unclear_pct": 0.09249431387414708,
            "avg_trade_size": 1750.2341986580134,
            "avg_run_notional": 2872.191342647749,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.6572078414383191,
            "medium_confidence_pct": 0.25029784468753385,
            "low_confidence_pct": 0.09249431387414708,
            "na_confidence_pct": 0.0,
            "avg_feature_coverage": 0.8770966460883063,
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
            "retail_pct": 0.47343881135183863,
            "mixed_pct": 0.04704029508978065,
            "instit_pct": 0.47792525359278026,
            "ambiguous_pct": 0.0015956399656004891,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.0015956399656004891,
            "retail_qty_pct": 0.2283057501567271,
            "mixed_qty_pct": 0.026395943926258405,
            "instit_qty_pct": 0.7448911729862057,
            "ambiguous_qty_pct": 0.0004071329308088549,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.0004071329308088549,
            "retail_notional_pct": 0.22954169862156235,
            "mixed_notional_pct": 0.026243955019133822,
            "instit_notional_pct": 0.7438262078038744,
            "ambiguous_notional_pct": 0.00038813855542937204,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.00038813855542937204,
            "run_retail_pct": 0.7911780570150029,
            "run_mixed_pct": 0.03603891563617476,
            "run_instit_pct": 0.17142457598337896,
            "run_unclear_pct": 0.0013584513654433946,
            "avg_trade_size": 1588.0229243728825,
            "avg_run_notional": 3061.806670395749,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.7177217971512476,
            "low_confidence_pct": 0.28227820284875244,
            "na_confidence_pct": 0.0,
            "avg_feature_coverage": 0.4851319495774817,
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
          "trade_id": "BMLL-301",
          "timestamp": "2026-04-30T08:59:56.752700",
          "price": 0.665,
          "size": 100.0,
          "notional": 66.5,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 48208,
          "d1": "WALK_BOOK",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-300",
          "timestamp": "2026-04-30T08:59:50.419200",
          "price": 0.665,
          "size": 9800.0,
          "notional": 6517.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 48208,
          "d1": "WALK_BOOK",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-299",
          "timestamp": "2026-04-30T08:59:50.419200",
          "price": 0.665,
          "size": 200.0,
          "notional": 133.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 48208,
          "d1": "WALK_BOOK",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-298",
          "timestamp": "2026-04-30T08:59:49.449200",
          "price": 0.67,
          "size": 100.0,
          "notional": 67.0,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 48207,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-297",
          "timestamp": "2026-04-30T08:59:39.101500",
          "price": 0.665,
          "size": 7300.0,
          "notional": 4854.5,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 48206,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-296",
          "timestamp": "2026-04-30T08:59:39.101500",
          "price": 0.665,
          "size": 200.0,
          "notional": 133.0,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 48206,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-295",
          "timestamp": "2026-04-30T08:59:39.101500",
          "price": 0.665,
          "size": 700.0,
          "notional": 465.5,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 48206,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-294",
          "timestamp": "2026-04-30T08:59:39.101500",
          "price": 0.665,
          "size": 1800.0,
          "notional": 1197.0,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 48206,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-293",
          "timestamp": "2026-04-30T08:59:36.988300",
          "price": 0.665,
          "size": 100.0,
          "notional": 66.5,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 48206,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-292",
          "timestamp": "2026-04-30T08:59:36.112400",
          "price": 0.67,
          "size": 500.0,
          "notional": 335.0,
          "bucket": "AMBIGUOUS",
          "confidence": "LOW",
          "run_id": 48205,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-291",
          "timestamp": "2026-04-30T08:59:28.714000",
          "price": 0.67,
          "size": 200.0,
          "notional": 134.0,
          "bucket": "AMBIGUOUS",
          "confidence": "LOW",
          "run_id": 48205,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-290",
          "timestamp": "2026-04-30T08:59:27.685400",
          "price": 0.665,
          "size": 6000.0,
          "notional": 3990.0,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 48204,
          "d1": "WALK_BOOK",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-289",
          "timestamp": "2026-04-30T08:59:27.685400",
          "price": 0.665,
          "size": 34000.0,
          "notional": 22610.0,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 48204,
          "d1": "WALK_BOOK",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-288",
          "timestamp": "2026-04-30T08:59:24.411500",
          "price": 0.67,
          "size": 600.0,
          "notional": 402.0,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 48203,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-287",
          "timestamp": "2026-04-30T08:59:24.411400",
          "price": 0.665,
          "size": 200.0,
          "notional": 133.0,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 48202,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-286",
          "timestamp": "2026-04-30T08:59:20.099100",
          "price": 0.67,
          "size": 200.0,
          "notional": 134.0,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 48201,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-285",
          "timestamp": "2026-04-30T08:59:16.980600",
          "price": 0.67,
          "size": 200.0,
          "notional": 134.0,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 48201,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-284",
          "timestamp": "2026-04-30T08:59:13.923000",
          "price": 0.67,
          "size": 1100.0,
          "notional": 737.0,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 48201,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-283",
          "timestamp": "2026-04-30T08:59:13.560400",
          "price": 0.66,
          "size": 200.0,
          "notional": 132.0,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 48200,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-282",
          "timestamp": "2026-04-30T08:59:06.083600",
          "price": 0.67,
          "size": 1300.0,
          "notional": 871.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 48199,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-281",
          "timestamp": "2026-04-30T08:59:06.083600",
          "price": 0.67,
          "size": 500.0,
          "notional": 335.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 48199,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-280",
          "timestamp": "2026-04-30T08:59:04.236400",
          "price": 0.67,
          "size": 200.0,
          "notional": 134.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 48199,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-279",
          "timestamp": "2026-04-30T08:59:02.779800",
          "price": 0.665,
          "size": 100.0,
          "notional": 66.5,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 48199,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-278",
          "timestamp": "2026-04-30T08:59:02.779800",
          "price": 0.665,
          "size": 400.0,
          "notional": 266.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 48199,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-277",
          "timestamp": "2026-04-30T08:59:02.779800",
          "price": 0.665,
          "size": 100.0,
          "notional": 66.5,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 48199,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-276",
          "timestamp": "2026-04-30T08:59:02.779800",
          "price": 0.665,
          "size": 600.0,
          "notional": 399.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 48199,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-275",
          "timestamp": "2026-04-30T08:59:02.779800",
          "price": 0.665,
          "size": 100.0,
          "notional": 66.5,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 48199,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-274",
          "timestamp": "2026-04-30T08:59:02.779700",
          "price": 0.665,
          "size": 7000.0,
          "notional": 4655.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 48199,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-273",
          "timestamp": "2026-04-30T08:59:02.779600",
          "price": 0.665,
          "size": 200.0,
          "notional": 133.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 48199,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "BMLL-272",
          "timestamp": "2026-04-30T08:58:59.734600",
          "price": 0.665,
          "size": 6000.0,
          "notional": 3990.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 48199,
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
      "total_trades": 45454,
      "price_moving_trades": 10722,
      "pct_price_moving": 23.58868306419677,
      "all_movers": {
        "count": 10722,
        "avg_size": 1433.9410557731767,
        "median_size": 190.5,
        "retail_count": 5701,
        "mixed_count": 3150,
        "institutional_count": 680,
        "ambiguous_count": 1191,
        "unobservable_count": 0,
        "retail_pct": 53.17105017720575,
        "mixed_pct": 29.378847229994403,
        "instit_pct": 6.342100354411491,
        "unclear_pct": 11.10800223838836
      },
      "positive_movers": {
        "count": 5353,
        "avg_size": 1470.0415654773024,
        "median_size": 138.0,
        "retail_count": 2732,
        "mixed_count": 1624,
        "institutional_count": 336,
        "ambiguous_count": 661,
        "unobservable_count": 0,
        "retail_pct": 51.036801793386886,
        "mixed_pct": 30.33812815243789,
        "instit_pct": 6.276854100504391,
        "unclear_pct": 12.34821595367084
      },
      "negative_movers": {
        "count": 5369,
        "avg_size": 1397.9481281430435,
        "median_size": 192.0,
        "retail_count": 2969,
        "mixed_count": 1526,
        "institutional_count": 344,
        "ambiguous_count": 530,
        "unobservable_count": 0,
        "retail_pct": 55.29893834978581,
        "mixed_pct": 28.42242503259452,
        "instit_pct": 6.407152169864035,
        "unclear_pct": 9.871484447755634
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
            "avg_short_ratio": 0.04315130547777004,
            "max_short_ratio": 0.1613056945437217,
            "interpretation": "Low short interest"
          }
        },
        "3M": {
          "stats": {
            "valid": true,
            "avg_short_ratio": 0.06754433147954712,
            "max_short_ratio": 0.36836158192090396,
            "interpretation": "Moderate short interest"
          }
        },
        "6M": {
          "stats": {
            "valid": true,
            "avg_short_ratio": 0.06213658758146757,
            "max_short_ratio": 0.36836158192090396,
            "interpretation": "Moderate short interest"
          }
        }
      },
      "correlation": {
        "valid": true,
        "correlation": -0.12217533888265908,
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
          },
          {
            "month": "2025-05",
            "avg_short_ratio": 0.03425148828958405
          }
        ],
        "mom_change": [
          {
            "month": "2026-04",
            "avg_short_ratio": 0.039248558959178885,
            "change_pct": null
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
          },
          {
            "month": "2025-05",
            "avg_short_ratio": 0.03425148828958405,
            "change_pct": 39.08434243757299
          }
        ],
        "interpretation": "Shorts covering significantly (-73% MoM)"
      },
      "short_series": {
        "valid": true,
        "rows": [
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
          },
          {
            "date": "2025-12-17",
            "short_ratio": 0.13839969372128638,
            "short_vol": 72300,
            "total_vol": 522400,
            "close": 0.675,
            "return": 0.00746268656716409
          },
          {
            "date": "2025-12-16",
            "short_ratio": 0.04323945307935024,
            "short_vol": 37000,
            "total_vol": 855700,
            "close": 0.67,
            "return": -0.007407407407407418
          },
          {
            "date": "2025-12-15",
            "short_ratio": 0.01097147416716537,
            "short_vol": 5500,
            "total_vol": 501300,
            "close": 0.675,
            "return": 0.00746268656716409
          },
          {
            "date": "2025-12-12",
            "short_ratio": 0.03396362760448031,
            "short_vol": 28200,
            "total_vol": 830300,
            "close": 0.67,
            "return": 0.0
          },
          {
            "date": "2025-12-11",
            "short_ratio": 0.04602865135203865,
            "short_vol": 54300,
            "total_vol": 1179700,
            "close": 0.67,
            "return": 0.0
          },
          {
            "date": "2025-12-10",
            "short_ratio": 0.16329378925331473,
            "short_vol": 23400,
            "total_vol": 143300,
            "close": 0.67,
            "return": -0.007407407407407418
          },
          {
            "date": "2025-12-09",
            "short_ratio": 0.08530183727034121,
            "short_vol": 84500,
            "total_vol": 990600,
            "close": 0.675,
            "return": 0.0
          },
          {
            "date": "2025-12-08",
            "short_ratio": 0.1941747572815534,
            "short_vol": 98000,
            "total_vol": 504700,
            "close": 0.675,
            "return": -0.007352941176470562
          },
          {
            "date": "2025-12-05",
            "short_ratio": 0.09750975097509751,
            "short_vol": 130000,
            "total_vol": 1333200,
            "close": 0.68,
            "return": 0.007407407407407307
          }
        ]
      },
      "peer_comparison": [
        {
          "ticker": "CRPU",
          "avg_short_ratio": 0.06754433147954712,
          "max_short_ratio": 0.36836158192090396,
          "is_target": true
        },
        {
          "ticker": "AU8U",
          "avg_short_ratio": 0.06211129393780841,
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
          "opening": 0.0001882441129397146,
          "continuous": 0.9485145316576512,
          "closing": 0.04236618066482531,
          "auctions": 0.051485468342348795,
          "other": 0.0
        },
        "1M": {
          "opening": 0.03680077684307834,
          "continuous": 0.8913320338198609,
          "closing": 0.06211282237593347,
          "auctions": 0.10866796618013902,
          "other": 0.0
        },
        "3M": {
          "opening": 0.049206194134224994,
          "continuous": 0.8681592886754818,
          "closing": 0.0691835444597238,
          "auctions": 0.13184071132451836,
          "other": 0.0
        },
        "6M": {
          "opening": 0.03659767777461183,
          "continuous": 0.8715863581905939,
          "closing": 0.08068934527172808,
          "auctions": 0.1284136418094062,
          "other": 0.0
        }
      },
      "hhi": {
        "1D": 0.26749623679710854,
        "1M": 0.23126805042521148,
        "3M": 0.23696720591015463,
        "6M": 0.23126693693593142
      },
      "profile_buckets": [
        {
          "time": "08:30",
          "avg_share": 0.0178
        },
        {
          "time": "09:00",
          "avg_share": 0.1002
        },
        {
          "time": "09:30",
          "avg_share": 0.0389
        },
        {
          "time": "10:00",
          "avg_share": 0.0434
        },
        {
          "time": "10:30",
          "avg_share": 0.0347
        },
        {
          "time": "11:00",
          "avg_share": 0.0309
        },
        {
          "time": "11:30",
          "avg_share": 0.0382
        },
        {
          "time": "12:00",
          "avg_share": 0.2363
        },
        {
          "time": "12:30",
          "avg_share": 0.0094
        },
        {
          "time": "13:00",
          "avg_share": 0.0189
        },
        {
          "time": "13:30",
          "avg_share": 0.0196
        },
        {
          "time": "14:00",
          "avg_share": 0.0353
        },
        {
          "time": "14:30",
          "avg_share": 0.0328
        },
        {
          "time": "15:00",
          "avg_share": 0.0288
        },
        {
          "time": "15:30",
          "avg_share": 0.0498
        },
        {
          "time": "16:00",
          "avg_share": 0.0433
        },
        {
          "time": "16:30",
          "avg_share": 0.1045
        },
        {
          "time": "17:00",
          "avg_share": 0.117
        }
      ],
      "peers_hhi_rows": [
        {
          "ticker": "CRPU",
          "auctions_pct": 11.726906038834105,
          "hhi": 0.22749897930164076,
          "interp": {
            "text": "Moderate",
            "cls": "bg-amber-500/20 text-amber-400",
            "you": true
          }
        },
        {
          "ticker": "AU8U",
          "auctions_pct": 13.879864828775085,
          "hhi": 0.17307757602903842,
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
