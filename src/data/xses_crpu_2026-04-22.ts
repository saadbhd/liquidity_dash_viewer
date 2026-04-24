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
      "ticker": "ODBU",
      "name": "UtdHampshReitUSD",
      "marketCap": 309587528.77500004,
      "sector": "REIT - Retail",
      "industry": "Real Estate"
    },
    {
      "ticker": "D5IU",
      "name": "LANDMARK REIT",
      "marketCap": 53877669.853,
      "sector": "REIT - Retail",
      "industry": "Real Estate"
    },
    {
      "ticker": "BMGU",
      "name": "BHG Retail Reit",
      "marketCap": 231223157.445,
      "sector": "REIT - Retail",
      "industry": "Real Estate"
    },
    {
      "ticker": "AU8U",
      "name": "CapLand China T",
      "marketCap": 1169849784.4,
      "sector": "REIT - Retail",
      "industry": "Real Estate"
    },
    {
      "ticker": "JYEU",
      "name": "Lendlease Reit",
      "marketCap": 1393080274.225,
      "sector": "REIT - Diversified",
      "industry": "Real Estate"
    },
    {
      "ticker": "AJBU",
      "name": "Keppel DC Reit",
      "marketCap": 4883769648.63,
      "sector": "REIT - Office",
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
    "asof_date": "2026-04-22",
    "industry": "Real Estate",
    "sector": "REIT - Retail",
    "market_cap_display": "838.0M",
    "market_cap_category": "small",
    "universe_total": 558,
    "peers_count": 6,
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
          "score_pca": 81.00358422939068,
          "score_pca_percentile": 81.00358422939068,
          "rank_pca": 107,
          "total": 558,
          "adv_notional_sgd": 999506.0000000001,
          "adv_volume_shares": 1491800.0,
          "free_float_shares": 457060801.0,
          "turnover_ratio": 0.003263898362616312,
          "votes": 526.0,
          "trades": 526.0,
          "spread_pct": 0.007534546613038117,
          "spread_ticks": 1.0031813361611877,
          "amihud": 7.522513113959554e-09,
          "volatility": 0.1433653116071401
        },
        "pca": {
          "valid": true,
          "window_days": 1,
          "variance_explained": 0.5081374438681932,
          "loadings": {
            "log_adv": 0.5599047066719145,
            "log_trades": 0.5174028716750401,
            "log_turnover": 0.519897740713243,
            "neg_spread": 0.36894986720064443,
            "neg_amihud": 0.030918261282017266,
            "neg_vol": -0.10689894125878233
          }
        },
        "data_quality": {
          "turnover_ratio": {
            "valid": true,
            "reason": null
          }
        },
        "peer_summary": {
          "n_peers": 6,
          "peer_median_adv": 628538.4900941715,
          "peer_median_score_pca": 78.49462365591398,
          "peer_median_trades": 866.5,
          "peer_median_volatility": 0.19567936954992582,
          "peer_median_spread_pct": 0.009154746869314013,
          "peer_median_spread_ticks": 1.0014233613262689,
          "peer_median_amihud": 3.641966404371345e-10,
          "peer_median_turnover_ratio": 0.0009367261946864557,
          "target_vs_peer": {
            "score_pca_delta": 2.51,
            "adv_delta_pct": 59.0,
            "trades_delta_pct": -39.3,
            "volatility_delta_pct": 26.73,
            "spread_pct_delta_pct": 17.7,
            "spread_ticks_delta_pct": 0.18,
            "amihud_delta_pct": -1965.51,
            "turnover_ratio_delta_pct": 248.44
          }
        },
        "peer_liquidity": [
          {
            "ticker": "CRPU",
            "score_pca": 81.00358422939068,
            "rank_pca": 107,
            "adv": 999506.0000000001,
            "trades": 526.0,
            "volatility": 0.1433653116071401,
            "spread_pct": 0.007534546613038117,
            "spread_ticks": 1.0031813361611877,
            "amihud": 7.522513113959554e-09,
            "turnover_ratio": 0.003263898362616312,
            "is_target": true
          },
          {
            "ticker": "ODBU",
            "score_pca": 72.75985663082437,
            "rank_pca": 153,
            "adv": 260400.98018834286,
            "trades": 169.0,
            "volatility": 0.18334437291812172,
            "spread_pct": 0.009557576691845237,
            "spread_ticks": 1.0,
            "amihud": 0.0,
            "turnover_ratio": 0.0006603463673389051,
            "is_target": false
          },
          {
            "ticker": "D5IU",
            "score_pca": 47.31182795698925,
            "rank_pca": 295,
            "adv": 7861.0,
            "trades": 8.0,
            "volatility": 1.469613012006543,
            "spread_pct": 0.15384615384615385,
            "spread_ticks": 1.0,
            "amihud": 0.0,
            "turnover_ratio": 0.00035432279688659427,
            "is_target": false
          },
          {
            "ticker": "BMGU",
            "score_pca": 18.996415770609318,
            "rank_pca": 453,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.0,
            "spread_pct": 0.06482593037214879,
            "spread_ticks": 5.4,
            "amihud": null,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "AU8U",
            "score_pca": 84.22939068100358,
            "rank_pca": 89,
            "adv": 996676.0000000001,
            "trades": 1564.0,
            "volatility": 0.2080143661817299,
            "spread_pct": 0.007333080253017675,
            "spread_ticks": 1.0081615120274914,
            "amihud": 1.4541088200366263e-08,
            "turnover_ratio": 0.0012131060220340064,
            "is_target": false
          },
          {
            "ticker": "JYEU",
            "score_pca": 95.16129032258065,
            "rank_pca": 28,
            "adv": 13800114.999999998,
            "trades": 1993.0,
            "volatility": 0.24980329284859662,
            "spread_pct": 0.008751917046782789,
            "spread_ticks": 1.0010431154381085,
            "amihud": 6.356417917214046e-10,
            "turnover_ratio": 0.028494108180473106,
            "is_target": false
          },
          {
            "ticker": "AJBU",
            "score_pca": 95.6989247311828,
            "rank_pca": 25,
            "adv": 22977150.0,
            "trades": 3412.0,
            "volatility": 0.1199212486582166,
            "spread_pct": 0.00420783984788142,
            "spread_ticks": 1.001803607214429,
            "amihud": 3.641966404371345e-10,
            "turnover_ratio": 0.005957593480901951,
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
              "mean": 0.31694019970444953,
              "median": 0.1297110289777006,
              "min": 0.0,
              "max": 10.025021556239816,
              "p5": 0.0,
              "p95": 1.189258443237123,
              "count": 558
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 3583519.9836286213,
              "median": 19551.35,
              "min": 0.0,
              "max": 255589391.20000002,
              "p5": 0.0,
              "p95": 18268858.818040315,
              "count": 558
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.10935471772383583,
              "median": 0.027562238215492463,
              "min": 0.00019851775911168494,
              "max": 1.2605042016806725,
              "p5": 0.003258120054827317,
              "p95": 0.5726492177898828,
              "count": 556
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.017464862308950096,
              "median": 0.00036778028976088733,
              "min": 0.0,
              "max": 4.365217661180873,
              "p5": 0.0,
              "p95": 0.021538958870622384,
              "count": 551
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 0.00025596190241705484,
              "median": 2.1845310781464287e-08,
              "min": 0.0,
              "max": 0.07246376811594203,
              "p5": 0.0,
              "p95": 4.879762526821346e-05,
              "count": 417
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 506.0698924731183,
              "median": 9.0,
              "min": 0.0,
              "max": 14935.0,
              "p5": 0.0,
              "p95": 2811.3499999999995,
              "count": 558
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.3017676417386515,
              "median": 0.1630876728969163,
              "min": 0.0,
              "max": 1.469613012006543,
              "p5": 0.029270053890645697,
              "p95": 1.0280534859678578,
              "count": 8
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 11495161.935023542,
              "median": 866497.2500000001,
              "min": 0.0,
              "max": 78488037.0,
              "p5": 2751.3500000000004,
              "p95": 54682597.64999996,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.0325802916889822,
              "median": 0.008263515401675173,
              "min": 0.004061416646373499,
              "max": 0.15384615384615385,
              "p5": 0.004211821534781653,
              "p95": 0.12268907563025203,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0026902779695215486,
              "median": 0.0010928322025067802,
              "min": 0.0,
              "max": 0.008886751071857197,
              "p5": 0.00012401297891030802,
              "p95": 0.007936322460068113,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 5.0175802469705544e-09,
              "median": 8.303323461678195e-10,
              "min": 0.0,
              "max": 1.4541088200366263e-08,
              "p5": 0.0,
              "p95": 1.3816550860822304e-08,
              "count": 7
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1582.375,
              "median": 469.0,
              "min": 0.0,
              "max": 7173.0,
              "p5": 2.8000000000000003,
              "p95": 5644.899999999998,
              "count": 8
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 6340367.163364723,
              "median": 628538.4900941715,
              "min": 0.0,
              "max": 22977150.0,
              "p5": 1965.25,
              "p95": 20682891.25,
              "count": 6
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1191.0,
              "median": 866.5,
              "min": 0.0,
              "max": 3412.0,
              "p5": 2.0,
              "p95": 3057.25,
              "count": 6
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.3717827154355346,
              "median": 0.19567936954992582,
              "min": 0.0,
              "max": 1.469613012006543,
              "p5": 0.02998031216455415,
              "p95": 1.1646605822170564,
              "count": 6
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.04142041634297163,
              "median": 0.009154746869314013,
              "min": 0.00420783984788142,
              "max": 0.15384615384615385,
              "p5": 0.004989149949165484,
              "p95": 0.1315910979776526,
              "count": 6
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 1.7351680391133382,
              "median": 1.0014233613262689,
              "min": 1.0,
              "max": 5.4,
              "p5": 1.0,
              "p95": 4.302040378006874,
              "count": 6
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 3.1081853265049604e-09,
              "median": 3.641966404371345e-10,
              "min": 0.0,
              "max": 1.4541088200366263e-08,
              "p5": 0.0,
              "p95": 1.175999891863729e-08,
              "count": 5
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.006113246141272427,
              "median": 0.0009367261946864557,
              "min": 0.0,
              "max": 0.028494108180473106,
              "p5": 8.858069922164857e-05,
              "p95": 0.022859979505580316,
              "count": 6
            }
          },
          "returns": {
            "window_days": 1,
            "n_obs": 1,
            "stock": 0.007518796992481258,
            "market": -0.0024406468225245392,
            "sector": 0.0,
            "peers": 0.0,
            "vs_market": 0.009959443815005797,
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
          "score_pca": 84.22939068100358,
          "score_pca_percentile": 84.22939068100358,
          "rank_pca": 89,
          "total": 558,
          "adv_notional_sgd": 758584.5,
          "adv_volume_shares": 1176100.0,
          "free_float_shares": 457060801.0,
          "turnover_ratio": 0.002573180630294305,
          "votes": 431.0,
          "trades": 431.0,
          "spread_pct": 0.007843137254901968,
          "spread_ticks": 1.0,
          "amihud": 5.0607336622513225e-09,
          "volatility": 0.11311578430337978
        },
        "pca": {
          "valid": true,
          "window_days": 21,
          "variance_explained": 0.5308897370130169,
          "loadings": {
            "log_adv": 0.5411250557119529,
            "log_trades": 0.49501224759058915,
            "log_turnover": 0.4921053059515126,
            "neg_spread": 0.4148176069977428,
            "neg_amihud": 0.08652983699262848,
            "neg_vol": 0.20104192822670722
          }
        },
        "data_quality": {
          "turnover_ratio": {
            "valid": true,
            "reason": null
          }
        },
        "peer_summary": {
          "n_peers": 6,
          "peer_median_adv": 582934.3466703913,
          "peer_median_score_pca": 77.95698924731182,
          "peer_median_trades": 413.5,
          "peer_median_volatility": 0.19274294011521798,
          "peer_median_spread_pct": 0.009789137551697753,
          "peer_median_spread_ticks": 1.004635325667694,
          "peer_median_amihud": 4.0168927001113114e-09,
          "peer_median_turnover_ratio": 0.0008315863005544267,
          "target_vs_peer": {
            "score_pca_delta": 6.27,
            "adv_delta_pct": 30.1,
            "trades_delta_pct": 4.23,
            "volatility_delta_pct": 41.31,
            "spread_pct_delta_pct": 19.88,
            "spread_ticks_delta_pct": -0.46,
            "amihud_delta_pct": -25.99,
            "turnover_ratio_delta_pct": 209.43
          }
        },
        "peer_liquidity": [
          {
            "ticker": "CRPU",
            "score_pca": 84.22939068100358,
            "rank_pca": 89,
            "adv": 758584.5,
            "trades": 431.0,
            "volatility": 0.11311578430337978,
            "spread_pct": 0.007843137254901968,
            "spread_ticks": 1.0,
            "amihud": 5.0607336622513225e-09,
            "turnover_ratio": 0.002573180630294305,
            "is_target": true
          },
          {
            "ticker": "ODBU",
            "score_pca": 70.78853046594982,
            "rank_pca": 164,
            "adv": 174098.6933407826,
            "trades": 39.0,
            "volatility": 0.14940118264137064,
            "spread_pct": 0.010544815465729359,
            "spread_ticks": 1.0869565217391304,
            "amihud": 2.3807186632905277e-08,
            "turnover_ratio": 0.000450066579074847,
            "is_target": false
          },
          {
            "ticker": "D5IU",
            "score_pca": 40.681003584229394,
            "rank_pca": 332,
            "adv": 5131.0,
            "trades": 14.0,
            "volatility": 1.4619900704130646,
            "spread_pct": 0.15384615384615383,
            "spread_ticks": 1.0,
            "amihud": 0.0,
            "turnover_ratio": 0.00023127213723764348,
            "is_target": false
          },
          {
            "ticker": "BMGU",
            "score_pca": 21.32616487455197,
            "rank_pca": 440,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.20805081479575477,
            "spread_pct": 0.1030927835051546,
            "spread_ticks": 8.75,
            "amihud": 5.949406249256326e-06,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "AU8U",
            "score_pca": 85.12544802867383,
            "rank_pca": 84,
            "adv": 991770.0,
            "trades": 788.0,
            "volatility": 0.1774350654346812,
            "spread_pct": 0.007692104219018656,
            "spread_ticks": 1.0081615120274914,
            "amihud": 7.015741183414496e-09,
            "turnover_ratio": 0.0012131060220340064,
            "is_target": false
          },
          {
            "ticker": "JYEU",
            "score_pca": 95.16129032258065,
            "rank_pca": 28,
            "adv": 7168927.499999999,
            "trades": 2619.0,
            "volatility": 0.21024204139259675,
            "spread_pct": 0.00903345963766615,
            "spread_ticks": 1.0,
            "amihud": 1.018044216808127e-09,
            "turnover_ratio": 0.01550422741180483,
            "is_target": false
          },
          {
            "ticker": "AJBU",
            "score_pca": 97.31182795698925,
            "rank_pca": 16,
            "adv": 22977150.0,
            "trades": 3412.0,
            "volatility": 0.16170561397572927,
            "spread_pct": 0.004372487914619673,
            "spread_ticks": 1.001109139307897,
            "amihud": 3.120990590179181e-10,
            "turnover_ratio": 0.006229940611457469,
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
              "mean": 0.6546032144529433,
              "median": 0.3644102249269763,
              "min": 0.0,
              "max": 9.165151389911681,
              "p5": 0.034641016151377484,
              "p95": 2.1032251853534554,
              "count": 558
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 3071860.842191335,
              "median": 12682.0,
              "min": 0.0,
              "max": 255589391.20000002,
              "p5": 0.0,
              "p95": 12714416.099999962,
              "count": 558
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.10804473253907534,
              "median": 0.032305052955585445,
              "min": 0.00024245657871967925,
              "max": 1.2394366197183098,
              "p5": 0.0033102788450015434,
              "p95": 0.4878147774548017,
              "count": 556
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0038737584668733314,
              "median": 0.00021428318677128654,
              "min": 0.0,
              "max": 0.659152330103487,
              "p5": 0.0,
              "p95": 0.011497368421794506,
              "count": 551
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 0.0003353171486950857,
              "median": 1.2973969211239899e-07,
              "min": 0.0,
              "max": 0.11111111111111112,
              "p5": 0.0,
              "p95": 0.00011077719705768502,
              "count": 544
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 464.3046594982079,
              "median": 6.0,
              "min": 0.0,
              "max": 10918.0,
              "p5": 0.0,
              "p95": 2735.899999999996,
              "count": 558
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.3236713199373216,
              "median": 0.17391295555390635,
              "min": 0.11311578430337978,
              "max": 1.4619900704130646,
              "p5": 0.1195683655780751,
              "p95": 1.0231113309470055,
              "count": 8
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 9664850.086667597,
              "median": 815558.0,
              "min": 0.0,
              "max": 65900017.0,
              "p5": 1795.8500000000001,
              "p95": 45850844.849999964,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.03763772060836848,
              "median": 0.008529863558326564,
              "min": 0.004329596189360625,
              "max": 0.15384615384615383,
              "p5": 0.004402042106791582,
              "p95": 0.13608247422680408,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0023804258833295157,
              "median": 0.0011825961084356612,
              "min": 0.0,
              "max": 0.008113139420650676,
              "p5": 8.094524803317522e-05,
              "p95": 0.007132235252300504,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 7.491608643054082e-07,
              "median": 6.038237422832909e-09,
              "min": 0.0,
              "max": 5.949406249256326e-06,
              "p5": 2.928400997950012e-11,
              "p95": 3.8754465773381255e-06,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1207.25,
              "median": 477.0,
              "min": 0.0,
              "max": 6041.0,
              "p5": 4.9,
              "p95": 4564.349999999998,
              "count": 8
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 5219512.865556797,
              "median": 582934.3466703913,
              "min": 0.0,
              "max": 22977150.0,
              "p5": 1282.75,
              "p95": 19025094.375,
              "count": 6
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1145.3333333333333,
              "median": 413.5,
              "min": 0.0,
              "max": 3412.0,
              "p5": 3.5,
              "p95": 3213.75,
              "count": 6
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.39480413144219956,
              "median": 0.19274294011521798,
              "min": 0.14940118264137064,
              "max": 1.4619900704130646,
              "p5": 0.1524772904749603,
              "p95": 1.1490530631579476,
              "count": 6
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.048096967431390386,
              "median": 0.009789137551697753,
              "min": 0.004372487914619673,
              "max": 0.15384615384615383,
              "p5": 0.005202391990719419,
              "p95": 0.14115781126090401,
              "count": 6
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 2.307704528845753,
              "median": 1.004635325667694,
              "min": 1.0,
              "max": 8.75,
              "p5": 1.0,
              "p95": 6.834239130434783,
              "count": 6
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 9.969265533914118e-07,
              "median": 4.0168927001113114e-09,
              "min": 0.0,
              "max": 5.949406249256326e-06,
              "p5": 7.802476475447953e-11,
              "p95": 4.468006483600471e-06,
              "count": 6
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.003938102126934799,
              "median": 0.0008315863005544267,
              "min": 0.0,
              "max": 0.01550422741180483,
              "p5": 5.781803430941087e-05,
              "p95": 0.013185655711717991,
              "count": 6
            }
          },
          "returns": {
            "window_days": 21,
            "n_obs": 21,
            "stock": 0.06349206349206327,
            "market": 0.03334237016264918,
            "sector": 0.036358083528796215,
            "peers": 0.023349862646735442,
            "vs_market": 0.030149693329414085,
            "vs_sector": 0.027133979963267052,
            "vs_peers": 0.040142200845327825
          }
        }
      },
      "3m": {
        "label": "3M",
        "window_days": 63,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 63,
          "score_pca": 84.76702508960572,
          "score_pca_percentile": 84.76702508960572,
          "rank_pca": 86,
          "total": 558,
          "adv_notional_sgd": 758584.5,
          "adv_volume_shares": 1119300.0,
          "free_float_shares": 457060801.0,
          "turnover_ratio": 0.002448908323687115,
          "votes": 406.0,
          "trades": 406.0,
          "spread_pct": 0.007534546613038117,
          "spread_ticks": 1.0,
          "amihud": 5.0607336622513225e-09,
          "volatility": 0.17757354321350788
        },
        "pca": {
          "valid": true,
          "window_days": 63,
          "variance_explained": 0.5702314765749589,
          "loadings": {
            "log_adv": 0.5103411873377398,
            "log_trades": 0.45829532880132096,
            "log_turnover": 0.4674415447675754,
            "neg_spread": 0.4281761850931824,
            "neg_amihud": 0.26415239413270375,
            "neg_vol": 0.24063319289721274
          }
        },
        "data_quality": {
          "turnover_ratio": {
            "valid": true,
            "reason": null
          }
        },
        "peer_summary": {
          "n_peers": 6,
          "peer_median_adv": 757165.1395552648,
          "peer_median_score_pca": 76.16487455197134,
          "peer_median_trades": 453.5,
          "peer_median_volatility": 0.20954086781371245,
          "peer_median_spread_pct": 0.00956309752655262,
          "peer_median_spread_ticks": 1.0024858259862395,
          "peer_median_amihud": 3.2592184084476305e-09,
          "peer_median_turnover_ratio": 0.001469671947858049,
          "target_vs_peer": {
            "score_pca_delta": 8.6,
            "adv_delta_pct": 0.2,
            "trades_delta_pct": -10.47,
            "volatility_delta_pct": 15.26,
            "spread_pct_delta_pct": 21.21,
            "spread_ticks_delta_pct": -0.25,
            "amihud_delta_pct": -55.27,
            "turnover_ratio_delta_pct": 66.63
          }
        },
        "peer_liquidity": [
          {
            "ticker": "CRPU",
            "score_pca": 84.76702508960572,
            "rank_pca": 86,
            "adv": 758584.5,
            "trades": 406.0,
            "volatility": 0.17757354321350788,
            "spread_pct": 0.007534546613038117,
            "spread_ticks": 1.0,
            "amihud": 5.0607336622513225e-09,
            "turnover_ratio": 0.002448908323687115,
            "is_target": true
          },
          {
            "ticker": "ODBU",
            "score_pca": 65.77060931899642,
            "rank_pca": 192,
            "adv": 118495.2791105298,
            "trades": 22.0,
            "volatility": 0.19864519596958813,
            "spread_pct": 0.010412649440802169,
            "spread_ticks": 1.0909090909090908,
            "amihud": 3.25297615792004e-08,
            "turnover_ratio": 0.0003033794687132258,
            "is_target": false
          },
          {
            "ticker": "D5IU",
            "score_pca": 44.623655913978496,
            "rank_pca": 310,
            "adv": 26669.3,
            "trades": 23.0,
            "volatility": 1.3835893994597364,
            "spread_pct": 0.15384615384615383,
            "spread_ticks": 1.0,
            "amihud": 0.0,
            "turnover_ratio": 0.0012020787389654813,
            "is_target": false
          },
          {
            "ticker": "BMGU",
            "score_pca": 20.07168458781362,
            "rank_pca": 447,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.390713816781842,
            "spread_pct": 0.10327158060701613,
            "spread_ticks": 8.733333333333333,
            "amihud": 8.783627207968937e-06,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "AU8U",
            "score_pca": 86.55913978494624,
            "rank_pca": 76,
            "adv": 1395835.0,
            "trades": 884.0,
            "volatility": 0.2014982711573798,
            "spread_pct": 0.007493574058804418,
            "spread_ticks": 1.0038948393378773,
            "amihud": 5.578398633091523e-09,
            "turnover_ratio": 0.0017372651567506168,
            "is_target": false
          },
          {
            "ticker": "JYEU",
            "score_pca": 95.6989247311828,
            "rank_pca": 25,
            "adv": 8533513.5,
            "trades": 2568.0,
            "volatility": 0.21758346447004506,
            "spread_pct": 0.00871354561230307,
            "spread_ticks": 1.0,
            "amihud": 9.400381838037385e-10,
            "turnover_ratio": 0.017124222687354848,
            "is_target": false
          },
          {
            "ticker": "AJBU",
            "score_pca": 97.84946236559139,
            "rank_pca": 13,
            "adv": 26369527.0,
            "trades": 3666.0,
            "volatility": 0.15082319494370802,
            "spread_pct": 0.00443395541139723,
            "spread_ticks": 1.0010768126346017,
            "amihud": 2.0820116263752226e-10,
            "turnover_ratio": 0.007301570036041782,
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
              "mean": 0.6903837679229351,
              "median": 0.45994904950014914,
              "min": 0.0,
              "max": 8.153764220759754,
              "p5": 0.15786982120357024,
              "p95": 2.2148819314524486,
              "count": 558
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 3221958.6541778953,
              "median": 11891.5,
              "min": 0.0,
              "max": 285980477.7,
              "p5": 0.0,
              "p95": 13715674.299999999,
              "count": 558
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.09930098808874607,
              "median": 0.029350274121331243,
              "min": 0.00026514881605562373,
              "max": 1.3542204201990415,
              "p5": 0.0035651151742438986,
              "p95": 0.49935452487417914,
              "count": 556
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.005823668985621954,
              "median": 0.0002995529559330408,
              "min": 0.0,
              "max": 1.9774569903104608,
              "p5": 0.0,
              "p95": 0.00995631739909109,
              "count": 551
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.1482484310480586e-05,
              "median": 1.4181787687780857e-07,
              "min": 0.0,
              "max": 0.000575783139971117,
              "p5": 0.0,
              "p95": 4.264189909559507e-05,
              "count": 554
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 458.8799283154122,
              "median": 6.0,
              "min": 0.0,
              "max": 11391.0,
              "p5": 0.0,
              "p95": 2604.4499999999944,
              "count": 558
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.3576956994110645,
              "median": 0.20007173356348396,
              "min": 0.11213146197582904,
              "max": 1.3835893994597364,
              "p5": 0.13503619040901663,
              "p95": 1.0360829455224727,
              "count": 8
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 10333448.634888817,
              "median": 787370.25,
              "min": 0.0,
              "max": 68686620.0,
              "p5": 9334.255000000001,
              "p95": 48449133.14999997,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.037544383277917086,
              "median": 0.008283388744891295,
              "min": 0.004249022843416297,
              "max": 0.15384615384615383,
              "p5": 0.0043422226262970305,
              "p95": 0.1361450532124556,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0026812498181442183,
              "median": 0.001469671947858049,
              "min": 0.0,
              "max": 0.008113139420650676,
              "p5": 0.00010618281404962904,
              "p95": 0.007565896180993237,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.1043025783773161e-06,
              "median": 5.3195661476714225e-09,
              "min": 0.0,
              "max": 8.783627207968937e-06,
              "p5": 3.611170376786596e-11,
              "p95": 5.720743101732525e-06,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1230.75,
              "median": 494.0,
              "min": 0.0,
              "max": 6041.0,
              "p5": 7.700000000000001,
              "p95": 4587.449999999998,
              "count": 8
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 6074006.6798517555,
              "median": 757165.1395552648,
              "min": 0.0,
              "max": 26369527.0,
              "p5": 6667.325,
              "p95": 21910523.625,
              "count": 6
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1193.8333333333333,
              "median": 453.5,
              "min": 0.0,
              "max": 3666.0,
              "p5": 5.5,
              "p95": 3391.5,
              "count": 6
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.42380889046371656,
              "median": 0.20954086781371245,
              "min": 0.15082319494370802,
              "max": 1.3835893994597364,
              "p5": 0.16277869520017804,
              "p95": 1.1353705037902628,
              "count": 6
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.04802857649607947,
              "median": 0.00956309752655262,
              "min": 0.00443395541139723,
              "max": 0.15384615384615383,
              "p5": 0.005198860073249027,
              "p95": 0.1412025105363694,
              "count": 6
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 2.304869012702484,
              "median": 1.0024858259862395,
              "min": 1.0,
              "max": 8.733333333333333,
              "p5": 1.0,
              "p95": 6.822727272727272,
              "count": 6
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.4704806012546122e-06,
              "median": 3.2592184084476305e-09,
              "min": 0.0,
              "max": 8.783627207968937e-06,
              "p5": 5.2050290659380566e-11,
              "p95": 6.595852846371504e-06,
              "count": 6
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.004611419347970992,
              "median": 0.001469671947858049,
              "min": 0.0,
              "max": 0.017124222687354848,
              "p5": 7.584486717830645e-05,
              "p95": 0.014668559524526581,
              "count": 6
            }
          },
          "returns": {
            "window_days": 63,
            "n_obs": 63,
            "stock": -0.02898550724637705,
            "market": 0.03618894259398431,
            "sector": -0.025409419875312422,
            "peers": -0.031538639379983024,
            "vs_market": -0.06517444984036136,
            "vs_sector": -0.003576087371064629,
            "vs_peers": 0.002553132133605973
          }
        }
      },
      "6m": {
        "label": "6M",
        "window_days": 126,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 126,
          "score_pca": 85.48387096774194,
          "score_pca_percentile": 85.48387096774194,
          "rank_pca": 82,
          "total": 558,
          "adv_notional_sgd": 598704.75,
          "adv_volume_shares": 872400.0,
          "free_float_shares": 457060801.0,
          "turnover_ratio": 0.0019087176106357894,
          "votes": 383.5,
          "trades": 383.5,
          "spread_pct": 0.007424983677409821,
          "spread_ticks": 1.0,
          "amihud": 4.541135179291274e-09,
          "volatility": 0.1421102915341772
        },
        "pca": {
          "valid": true,
          "window_days": 126,
          "variance_explained": 0.5790012362723713,
          "loadings": {
            "log_adv": 0.5014445661734569,
            "log_trades": 0.4470073482234542,
            "log_turnover": 0.4554068242807716,
            "neg_spread": 0.4307432093732578,
            "neg_amihud": 0.26318610576149953,
            "neg_vol": 0.29416961671928915
          }
        },
        "data_quality": {
          "turnover_ratio": {
            "valid": true,
            "reason": null
          }
        },
        "peer_summary": {
          "n_peers": 6,
          "peer_median_adv": 637127.8617233012,
          "peer_median_score_pca": 76.7921146953405,
          "peer_median_trades": 385.0,
          "peer_median_volatility": 0.1919100543657978,
          "peer_median_spread_pct": 0.009061409101723246,
          "peer_median_spread_ticks": 1.0044439738398123,
          "peer_median_amihud": 3.2399767993657754e-09,
          "peer_median_turnover_ratio": 0.0012236640809936273,
          "target_vs_peer": {
            "score_pca_delta": 8.69,
            "adv_delta_pct": -6.0,
            "trades_delta_pct": -0.39,
            "volatility_delta_pct": 25.95,
            "spread_pct_delta_pct": 18.06,
            "spread_ticks_delta_pct": -0.44,
            "amihud_delta_pct": -40.16,
            "turnover_ratio_delta_pct": 55.98
          }
        },
        "peer_liquidity": [
          {
            "ticker": "CRPU",
            "score_pca": 85.48387096774194,
            "rank_pca": 82,
            "adv": 598704.75,
            "trades": 383.5,
            "volatility": 0.1421102915341772,
            "spread_pct": 0.007424983677409821,
            "spread_ticks": 1.0,
            "amihud": 4.541135179291274e-09,
            "turnover_ratio": 0.0019087176106357894,
            "is_target": true
          },
          {
            "ticker": "ODBU",
            "score_pca": 66.48745519713262,
            "rank_pca": 188,
            "adv": 97191.97344660245,
            "trades": 22.0,
            "volatility": 0.1713750007809978,
            "spread_pct": 0.010023651771655593,
            "spread_ticks": 1.015401332262484,
            "amihud": 3.25297615792004e-08,
            "turnover_ratio": 0.0002448742050429838,
            "is_target": false
          },
          {
            "ticker": "D5IU",
            "score_pca": 49.46236559139785,
            "rank_pca": 283,
            "adv": 36371.55,
            "trades": 33.0,
            "volatility": 1.2958525615515648,
            "spread_pct": 0.1176470588235293,
            "spread_ticks": 1.0,
            "amihud": 0.0,
            "turnover_ratio": 0.0011302676360524014,
            "is_target": false
          },
          {
            "ticker": "BMGU",
            "score_pca": 19.53405017921147,
            "rank_pca": 450,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.5679791886585934,
            "spread_pct": 0.1080229241911543,
            "spread_ticks": 9.1010101010101,
            "amihud": 6.330000391958183e-06,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "AU8U",
            "score_pca": 87.09677419354838,
            "rank_pca": 73,
            "adv": 1177063.75,
            "trades": 737.0,
            "volatility": 0.17911290250366332,
            "spread_pct": 0.0066026770189636635,
            "spread_ticks": 1.0080843147326068,
            "amihud": 5.458407282732866e-09,
            "turnover_ratio": 0.001317060525934853,
            "is_target": false
          },
          {
            "ticker": "JYEU",
            "score_pca": 96.05734767025089,
            "rank_pca": 23,
            "adv": 7929828.0,
            "trades": 1893.5,
            "volatility": 0.2047072062279323,
            "spread_pct": 0.008099166431790898,
            "spread_ticks": 1.000170750459421,
            "amihud": 1.0215463159986848e-09,
            "turnover_ratio": 0.015566973289644933,
            "is_target": false
          },
          {
            "ticker": "AJBU",
            "score_pca": 97.4910394265233,
            "rank_pca": 15,
            "adv": 19395097.5,
            "trades": 3283.0,
            "volatility": 0.13680778744205138,
            "spread_pct": 0.004428487683346552,
            "spread_ticks": 1.0008036329470178,
            "amihud": 2.6972829512577055e-10,
            "turnover_ratio": 0.005104573017723607,
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
              "mean": 0.6949400865545378,
              "median": 0.4396350808083983,
              "min": 0.0,
              "max": 6.936569757452165,
              "p5": 0.15291345812470414,
              "p95": 2.1117851247065706,
              "count": 558
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 2573596.1070653573,
              "median": 11684.25,
              "min": 0.0,
              "max": 243597405.0,
              "p5": 0.0,
              "p95": 10437476.975,
              "count": 558
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.09506844984635239,
              "median": 0.028978517356113388,
              "min": 0.00027198195406526475,
              "max": 1.267605633802817,
              "p5": 0.0035774720816924444,
              "p95": 0.48590812227394437,
              "count": 556
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.003237226044862953,
              "median": 0.0002657375275951876,
              "min": 0.0,
              "max": 0.8552501483092743,
              "p5": 0.0,
              "p95": 0.007062166249711977,
              "count": 551
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 9.797468958231302e-06,
              "median": 1.7330836773744484e-07,
              "min": 0.0,
              "max": 0.0006620397444526588,
              "p5": 0.0,
              "p95": 4.2565766376012296e-05,
              "count": 557
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 375.32078853046596,
              "median": 6.75,
              "min": 0.0,
              "max": 10053.0,
              "p5": 0.0,
              "p95": 2022.8999999999985,
              "count": 558
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.3486336502947429,
              "median": 0.16970804541466822,
              "min": 0.1149123367194688,
              "max": 1.2958525615515648,
              "p5": 0.12443162090461674,
              "p95": 1.0410968810390244,
              "count": 8
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 8586091.096680826,
              "median": 661041.75,
              "min": 0.0,
              "max": 55576180.0,
              "p5": 12730.042500000001,
              "p95": 39792460.299999975,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.03339878972798008,
              "median": 0.00807930406577915,
              "min": 0.004267253241731738,
              "max": 0.1176470588235293,
              "p5": 0.0043375652329623315,
              "p95": 0.11427861170219804,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0023165451436264945,
              "median": 0.0012236640809936273,
              "min": 0.0,
              "max": 0.0067441230878905615,
              "p5": 8.570597176504434e-05,
              "p95": 0.006573662994566429,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 7.974664215146663e-07,
              "median": 4.99977123101207e-09,
              "min": 0.0,
              "max": 6.330000391958183e-06,
              "p5": 3.416998366066311e-11,
              "p95": 4.125885671325535e-06,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1098.5,
              "median": 405.5,
              "min": 0.0,
              "max": 5393.5,
              "p5": 7.700000000000001,
              "p95": 4132.799999999998,
              "count": 8
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 4772592.128907767,
              "median": 637127.8617233012,
              "min": 0.0,
              "max": 19395097.5,
              "p5": 9092.8875,
              "p95": 16528780.125,
              "count": 6
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 994.75,
              "median": 385.0,
              "min": 0.0,
              "max": 3283.0,
              "p5": 5.5,
              "p95": 2935.625,
              "count": 6
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.42597244119413386,
              "median": 0.1919100543657978,
              "min": 0.13680778744205138,
              "max": 1.2958525615515648,
              "p5": 0.14544959077678798,
              "p95": 1.113884218328322,
              "count": 6
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.042470660986740044,
              "median": 0.009061409101723246,
              "min": 0.004428487683346552,
              "max": 0.1176470588235293,
              "p5": 0.00497203501725083,
              "p95": 0.11524102516543555,
              "count": 6
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 2.3542450219019386,
              "median": 1.0044439738398123,
              "min": 1.0,
              "max": 9.1010101010101,
              "p5": 1.0000426876148554,
              "p95": 7.0796079088231965,
              "count": 6
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.0615466392385402e-06,
              "median": 3.2399767993657754e-09,
              "min": 0.0,
              "max": 6.330000391958183e-06,
              "p5": 6.743207378144264e-11,
              "p95": 4.7556327343634375e-06,
              "count": 6
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.003893958112399796,
              "median": 0.0012236640809936273,
              "min": 0.0,
              "max": 0.015566973289644933,
              "p5": 6.121855126074595e-05,
              "p95": 0.012951373221664602,
              "count": 6
            }
          },
          "returns": {
            "window_days": 126,
            "n_obs": 126,
            "stock": -0.014705882352941013,
            "market": 0.14189987283210126,
            "sector": -0.020120979246038617,
            "peers": -0.0388927768308418,
            "vs_market": -0.15660575518504227,
            "vs_sector": 0.005415096893097604,
            "vs_peers": 0.02418689447790079
          }
        }
      }
    },
    "period_insights": {
      "1d": {
        "liquidity": "Near-term tradability looks orderly, with a 1-tick spread and bid depth close to ask depth. That matters because immediate access appears balanced on both sides of the book.",
        "market_comparison": "The stock rose 0.8% compared with peers at 0.0%. That firmer tape supports near-term trading conditions."
      },
      "30d": {
        "liquidity": "Monthly tradability looks solid, with a 1M liquidity score of 84.2. That points to accessible trading conditions over the recent month.",
        "market_comparison": "The stock returned 6.3% over 1M, ahead of peers by 2.3% and the market by 3.3%. That stronger performance gives liquidity a firmer backdrop."
      },
      "3m": {
        "liquidity": "Three-month tradability looks solid, with a 3M liquidity score of 84.8. That suggests access has held up over a broader recent window.",
        "market_comparison": "The stock fell 2.9% over 3M compared with peers down 3.2%. That relative resilience helps keep trading conditions supported."
      },
      "6m": {
        "liquidity": "6M score 85.5 vs peer median 76.8 (+8.7 pts).",
        "market_comparison": "The 6M liquidity score is 8.7 points above the peer median of 76.8. That stronger peer standing matters because access screens better than the typical comparable name."
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
          "median": 0.12615330626996335,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "12.6%",
          "display_range": null,
          "display_text": "12.6%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "share_pct",
          "value_pct": 12.6,
          "plain_english": "Market explains about 12.6% of price moves in the current state."
        },
        "sector_share": {
          "median": 0.7357015531281275,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "73.6%",
          "display_range": null,
          "display_text": "73.6%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "share_pct",
          "value_pct": 73.6,
          "plain_english": "Sector explains about 73.6% of price moves in the current state."
        },
        "company_share": {
          "median": 0.13814514060190922,
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
          "plain_english": "Company-specific explains about 13.8% of price moves in the current state."
        },
        "basis": "current_state"
      },
      "current_sensitivities": {
        "beta_market": {
          "median": 1.0969589302082003,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "1.10",
          "display_range": null,
          "display_text": "1.10",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "beta",
          "strength_label": "Moderate",
          "plain_english": "Moderate market link: a 1% market move has lined up with about a 1.10% stock move in the same direction in this state.",
          "value_num": 1.1
        },
        "beta_stock_lag": {
          "median": -0.8484308306351035,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "-0.85",
          "display_range": null,
          "display_text": "-0.85",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "lag_beta",
          "value_num": -0.85
        },
        "beta_sector": {
          "median": 2.202632262456107,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "2.20",
          "display_range": null,
          "display_text": "2.20",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "beta",
          "strength_label": "High",
          "plain_english": "High sector link: a 1% sector move has lined up with about a 2.20% stock move in the same direction in this state.",
          "value_num": 2.2
        },
        "beta_market_lag": {
          "median": -1.1084503271719448,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "-1.11",
          "display_range": null,
          "display_text": "-1.11",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "lag_beta",
          "value_num": -1.11
        },
        "beta_sector_lag": {
          "median": 3.2049677020848257,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "3.20",
          "display_range": null,
          "display_text": "3.20",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "lag_beta",
          "value_num": 3.2
        },
        "posterior_source": null,
        "intervals_collapsed": false,
        "confidence_label": "High, limited history",
        "confidence_note": "Based on 251 trading days relative to the 252-day target."
      },
      "rolling_windows": {},
      "monthly_history": [
        {
          "month_key": "2025-04",
          "month_label": "April 2025",
          "month_short_label": "Apr",
          "period_label": "2025-04-25 to 2025-04-30",
          "n_obs": 4,
          "partial_month": true,
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.716666850885159,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "71.7%",
            "display_range": null,
            "display_text": "71.7%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 4 trading days.",
            "kind": "share_pct",
            "value_pct": 71.7,
            "plain_english": "Market explains about 71.7% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.716666850885159,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "71.7%",
              "display_range": null,
              "display_text": "71.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 4 trading days.",
              "kind": "share_pct",
              "value_pct": 71.7,
              "plain_english": "Market explains about 71.7% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.0,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "0.0%",
              "display_range": null,
              "display_text": "0.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 4 trading days.",
              "kind": "share_pct",
              "value_pct": 0.0,
              "plain_english": "Sector explains about 0.0% of price moves in the current state."
            },
            "company_share": {
              "median": 0.2833331491148409,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "28.3%",
              "display_range": null,
              "display_text": "28.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 4 trading days.",
              "kind": "share_pct",
              "value_pct": 28.3,
              "plain_english": "Company-specific explains about 28.3% of price moves in the current state."
            }
          },
          "summary": "Apr: Still clearly market-driven, though based on only 4 trading days."
        },
        {
          "month_key": "2025-05",
          "month_label": "May 2025",
          "month_short_label": "May",
          "period_label": "2025-05-02 to 2025-05-30",
          "n_obs": 20,
          "partial_month": true,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.5595856147097945,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "56.0%",
            "display_range": null,
            "display_text": "56.0%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
            "kind": "share_pct",
            "value_pct": 56.0,
            "plain_english": "Company-specific explains about 56.0% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.32623166932132414,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "32.6%",
              "display_range": null,
              "display_text": "32.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 32.6,
              "plain_english": "Market explains about 32.6% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.11418271596888128,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "11.4%",
              "display_range": null,
              "display_text": "11.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 11.4,
              "plain_english": "Sector explains about 11.4% of price moves in the current state."
            },
            "company_share": {
              "median": 0.5595856147097945,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "56.0%",
              "display_range": null,
              "display_text": "56.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 56.0,
              "plain_english": "Company-specific explains about 56.0% of price moves in the current state."
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
              "median": 0.1986365726091789,
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
              "median": 0.17795870306504716,
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
            "median": 0.6156446349712698,
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
              "median": 0.15572514972889717,
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
              "median": 0.6156446349712698,
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
            "median": 0.4539874874240681,
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
              "median": 0.20793658426811862,
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
              "median": 0.4539874874240681,
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
              "median": 0.2175839690066876,
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
            "median": 0.48281505654789303,
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
              "median": 0.31423525143745396,
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
              "median": 0.20294969201465304,
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
              "median": 0.48281505654789303,
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
            "median": 0.4219146512462775,
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
              "median": 0.4219146512462775,
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
              "median": 0.27759022888224905,
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
              "median": 0.30049511987147337,
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
            "median": 0.7687417314818246,
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
              "median": 0.12378967681730312,
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
              "median": 0.10746859170087232,
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
              "median": 0.7687417314818246,
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
            "median": 0.6344784334204319,
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
              "median": 0.20419511848433786,
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
              "median": 0.6344784334204319,
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
            "median": 0.45949639356129446,
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
              "median": 0.23035600504921908,
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
              "median": 0.45949639356129446,
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
          "period_label": "2026-04-01 to 2026-04-22",
          "n_obs": 15,
          "partial_month": false,
          "dominant_driver": "sector",
          "dominant_driver_label": "Sector",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.4805949400865393,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "48.1%",
            "display_range": null,
            "display_text": "48.1%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
            "kind": "share_pct",
            "value_pct": 48.1,
            "plain_english": "Sector explains about 48.1% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.14609324688178016,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "14.6%",
              "display_range": null,
              "display_text": "14.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
              "kind": "share_pct",
              "value_pct": 14.6,
              "plain_english": "Market explains about 14.6% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.4805949400865393,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "48.1%",
              "display_range": null,
              "display_text": "48.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
              "kind": "share_pct",
              "value_pct": 48.1,
              "plain_english": "Sector explains about 48.1% of price moves in the current state."
            },
            "company_share": {
              "median": 0.37331181303168054,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "37.3%",
              "display_range": null,
              "display_text": "37.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
              "kind": "share_pct",
              "value_pct": 37.3,
              "plain_english": "Company-specific explains about 37.3% of price moves in the current state."
            }
          },
          "summary": "Apr: Mostly sector-driven."
        }
      ],
      "regimes": [
        {
          "id": 0,
          "label": "Low Volatility",
          "pct_time": 0.5020080321285141,
          "expected_duration_days": 11.363636363636363,
          "current_probability": 0.0,
          "n_days_effective": 125.0,
          "volatility": {
            "median": 0.005585309480740532,
            "low": 0.005585309480740532,
            "high": 0.005585309480740532
          },
          "volatility_label": "Low Volatility",
          "current_probability_display": 0.0
        },
        {
          "id": 1,
          "label": "High Volatility",
          "pct_time": 0.4979919678714859,
          "expected_duration_days": 10.333333333333334,
          "current_probability": 1.0,
          "n_days_effective": 124.0,
          "volatility": {
            "median": 0.011201729080742509,
            "low": 0.011201729080742509,
            "high": 0.011201729080742509
          },
          "volatility_label": "High Volatility",
          "current_probability_display": null
        }
      ],
      "transitions": {
        "mean": [
          [
            0.912,
            0.088
          ],
          [
            0.08943089430894309,
            0.9105691056910569
          ]
        ],
        "low": [],
        "high": [],
        "counts": [
          [
            114.0,
            11.0
          ],
          [
            11.0,
            112.0
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
        "market_link_display": "1.10",
        "sector_link_display": "2.20",
        "market_link_explainer": "Moderate market link. A 1% market move has lined up with about a 1.10% stock move in the same direction in this state. This is a point estimate from 251 trading days.",
        "sector_link_explainer": "High sector link. A 1% sector move has lined up with about a 2.20% stock move in the same direction in this state. This is a point estimate from 251 trading days.",
        "stock_persistence_display": "-0.85",
        "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
        "history_limited_note": "Read is based on 251 trading days versus the 252-day target."
      },
      "current_summary": {
        "regime_label": "High Volatility",
        "dominant_driver": "sector",
        "dominant_driver_label": "Sector",
        "driver_share_pct": 73.6,
        "driver_share_display": "73.6%",
        "confidence_label": "High, limited history",
        "confidence_pct": 100.0,
        "display_confidence_pct": null,
        "confidence_note": "Based on 251 trading days relative to the 252-day target.",
        "history_days": 251,
        "history_limited": true,
        "volatility_label": "High Volatility",
        "lead_signal_text": "No stable lead signal.",
        "state_term": "state",
        "stay_probability": 0.9105691056910569,
        "effective_days": 124.0,
        "persistence_note": "This state looks more persistent, with a typical run length of about 10.3 days.",
        "expected_duration_days": 10.3
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
          "current_probability": 0.0,
          "n_days_effective": 125.0,
          "volatility": {
            "median": 0.005585309480740532,
            "low": 0.005585309480740532,
            "high": 0.005585309480740532
          },
          "volatility_label": "Low Volatility"
        },
        {
          "id": 1,
          "label": "High Volatility",
          "pct_time": 0.4979919678714859,
          "expected_duration_days": 10.333333333333334,
          "current_probability": 1.0,
          "n_days_effective": 124.0,
          "volatility": {
            "median": 0.011201729080742509,
            "low": 0.011201729080742509,
            "high": 0.011201729080742509
          },
          "volatility_label": "High Volatility"
        }
      ],
      "transitions": [
        [
          0.912,
          0.088
        ],
        [
          0.08943089430894309,
          0.9105691056910569
        ]
      ],
      "transition_intervals": {
        "mean": [
          [
            0.912,
            0.088
          ],
          [
            0.08943089430894309,
            0.9105691056910569
          ]
        ],
        "low": [],
        "high": [],
        "counts": [
          [
            114.0,
            11.0
          ],
          [
            11.0,
            112.0
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
        "text": "Liquidity score: 85.5 — Strong",
        "bg": "bg-emerald-500/20",
        "textColor": "text-emerald-400"
      },
      "perf": {
        "text": "Performance is mixed",
        "bg": "bg-amber-500/20",
        "textColor": "text-amber-400"
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
    "liq_subtitle": "Peer-relative liquidity is solid, while the live book remains balanced rather than especially deep.",
    "market_comparison_title": "How You Compare to the Market",
    "market_comparison_subtitle": "Context relative to market, sector, and peer medians.",
    "perf_title": "Stock Performance",
    "perf_subtitle": "Recent performance is ahead of both peers and the market, giving the tape a firmer backdrop.",
    "perf_insight": "The stock has outperformed over one month, rising 6.3% compared with 2.3% for peers and 3.3% for the market. That stronger return backdrop sits alongside a 6M liquidity score 8.7 points above the peer median, while sector factors still explain 73.6% of trading.",
    "drivers_title": "What Moves Your Stock Price?",
    "drivers_subtitle": "Trading is being driven mainly by the sector, pointing to a broader theme rather than company-specific news.",
    "drivers_strip": [
      {
        "title": "Current Driver (Last 5 Days)",
        "text": "Over the last 5 trading days, moves are mainly sector-driven, accounting for about 73.6% of price changes. Other influences are market 12.6%, and company-specific 13.8%."
      },
      {
        "title": "Driver Mix",
        "text": "Based on the last 5 trading days, current mix is market 12.6%, sector 73.6%, and company-specific 13.8%."
      },
      {
        "title": "Monthly Trend",
        "text": "The driver mix has shifted from company-driven to sector-driven over Feb to Apr."
      }
    ],
    "drivers_pie_title": "Current Driver Mix (Last 5 Days)",
    "drivers_pie_note": "Based on the last 5 trading days, current split is market 12.6%, sector 73.6%, and company-specific 13.8%.",
    "lead_lag_title": "",
    "lead_lag_note": "",
    "rolling_title": "Monthly Driver Shift",
    "rolling_latest_label": "Latest: {period}",
    "rolling_note": "Each bar shows the monthly split between market-, sector-, and company-driven moves.",
    "drivers_bottom_line": "That matters because sector moves are likely to shape trading conditions, while a 1 tick spread and near-balanced top-10 depth keep the book orderly.",
    "drivers_wtd_title": "Key Reads",
    "drivers_wtd_list": [
      "Main driver now: sector factors account for 73.6% of recent price moves.",
      "Monthly change: the stock has shifted from clearly company-driven in February to mostly sector-driven in April."
    ],
    "regime_title": "Market State",
    "regime_subtitle": "The market state looks orderly, with balanced displayed depth and a tight quoted spread.",
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
    "exec_check_subtitle": "Combines the final continuous-session displayed book before close, trade-size stress tests based on Apr 22, 2025 to Apr 22, 2026 (254 trading days • 99,546 trades), large sell-side orders observed today, and intraday spread/depth during the continuous trading session.",
    "order_book_title": "Order Book Depth (Available Liquidity)",
    "order_book_note": "Depth shown is based on top 10 bid and top 10 ask levels.",
    "peer_capacity_title": "Peer Capacity Context",
    "peer_capacity_note": "Immediate displayed depth broadly matches the stronger monthly liquidity read.",
    "impact_summary_title": "Estimated Price Impact (Sell Orders)",
    "impact_summary_subtitle": "Approximate price impact (%) for sell orders.",
    "exec_check_insight": "The current book looks balanced, with top-10 bid depth at 0.96x ask depth and a 1 tick spread. That supports the stronger six-month liquidity standing and points to orderly trading on screen.",
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
    "intraday_subtitle": "The live trading picture looks orderly, with balanced displayed depth and a tight spread.",
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
    "intraday_insight": "Displayed liquidity is balanced, with top-10 bid depth at 0.96x ask depth and a 1 tick spread. That aligns with the stronger six-month liquidity score and supports orderly execution conditions.",
    "short_title": "Short Selling & Lending",
    "short_subtitle": "The broader trading backdrop is being shaped mainly by sector moves.",
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
    "exec_subtitle": "Liquidity is mixed for its size, with above-median peer standing, a firm price backdrop, and a balanced live book.",
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
        "value": "85.5/100",
        "sub": "Peer median 76.8 (+8.7 pts)",
        "interp": {
          "text": "Strong",
          "cls": "interpretation-good",
          "icon": "◆"
        }
      },
      {
        "title": "Volume vs Peers",
        "value": "S$598.7K",
        "sub": "Peer median S$637.1K",
        "interp": {
          "text": "Weak",
          "cls": "interpretation-bad",
          "icon": "◆"
        }
      },
      {
        "title": "Spread",
        "value": "0.74%",
        "sub": "1.00 ticks; peers 0.91%",
        "interp": {
          "text": "Tighter",
          "cls": "interpretation-good",
          "icon": "◆"
        }
      }
    ],
    "liq_insight": "6M liquidity is strong: score 85.5 vs peer median 76.8 (+8.7 pts). Recent trend context is too limited to say whether access has changed from the 1M baseline.",
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
        "value": "0.96x",
        "note": "Bid depth / ask depth on displayed top-10 levels",
        "color": "text-slate-300"
      }
    ],
    "impact_summary_cards": [
      {
        "title": "~S$100K sell",
        "text": "Estimated impact ~-1.09% with 100.0% fill.",
        "cls": "ok"
      },
      {
        "title": "S$1.0M sell",
        "text": "Estimated impact ~-1.27% with 100.0% fill.",
        "cls": "warn"
      },
      {
        "title": "S$2.5M sell",
        "text": "Estimated impact ~-2.43% with 100.0% fill.",
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
        "subtext": "Rank 82/558",
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
        "subtext": "0.74% • 1.00 ticks vs peers 0.91%",
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
        "value": "598.7K",
        "value_prefix": "S$",
        "suffix": "",
        "bar_pct": 60,
        "color_value": "text-red-400",
        "color_bar": "bg-red-500",
        "subtext": "Peer median S$637.1K",
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
        "value": "73.6",
        "suffix": "sector",
        "bar_pct": 74,
        "color_value": "text-amber-400",
        "color_bar": "bg-amber-500",
        "subtext": "Market 12.6% • Company 13.8%",
        "interpretation": {
          "text": "Sector",
          "cls": "interpretation-neutral",
          "icon": "◆"
        }
      }
    ],
    "exec_takeaways": [
      "Liquidity is mixed for its size, but peer standing is solid, with a 6M liquidity score of 85.5 compared with a peer median of 76.8. That gives the stock a better structural footing than similar names even if access does not read as standout.",
      "The price backdrop is firm, with the stock up 6.3% over one month compared with 2.3% for peers and 3.3% for the market. That stronger performance can help keep trading interest on a better footing than the main comparison groups.",
      "The live book is balanced, with top-10 bid depth at 0.96x ask depth and a 1 tick spread, while sector factors account for 73.6% of trading. That points to orderly execution conditions with the tape still driven mainly by broader sector moves."
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
      "overall": "6M liquidity is strong: score 85.5 vs peer median 76.8 (+8.7 pts). Recent trend context is too limited to say whether access has changed from the 1M baseline.",
      "strengths": [
        "6M score 85.5 vs peer median 76.8 (+8.7 pts)."
      ],
      "concerns": [],
      "peer_context": "Primary-period score gap vs peers: +8.7 pts."
    },
    "market_comparison": {
      "returns": {
        "insight": "6M return is -1.5%, better than sector and peers, but worse than market, which shows price performance is mixed across comparison groups.",
        "vs_market": "Worse than market: -1.5% vs market 14.2%.",
        "vs_sector": "Better than sector: -1.5% vs sector -2.0%.",
        "vs_peers": "Better than peers: -1.5% vs peers -3.9%."
      },
      "adv": {
        "insight": "ADV is S$598.7K, better than market, which supports stronger day-to-day trading size than comparable names.",
        "vs_market": "Better than market: S$598.7K vs market S$11.7K.",
        "vs_sector": "In line with sector: S$598.7K vs sector S$661.0K.",
        "vs_peers": "In line with peers: S$598.7K vs peers S$637.1K."
      },
      "spread": {
        "insight": "Spread is 0.74%, better than market and peers, which keeps trading costs more competitive than comparable names.",
        "vs_market": "Better than market: 0.74% vs market 2.90%.",
        "vs_sector": "In line with sector: 0.74% vs sector 0.81%.",
        "vs_peers": "Better than peers: 0.74% vs peers 0.91%."
      },
      "turnover_ratio": {
        "insight": "Turnover ratio is 0.19%, better than market, sector, and peers, which shows a more active free-float turnover profile than comparable names.",
        "vs_market": "Better than market: 0.19% vs market 0.03%.",
        "vs_sector": "Better than sector: 0.19% vs sector 0.12%.",
        "vs_peers": "Better than peers: 0.19% vs peers 0.12%."
      },
      "volatility": {
        "insight": "Volatility is 14.21%, better than market, sector, and peers, which suggests day-to-day price swings are more contained than comparable names.",
        "vs_market": "Better than market: 14.21% vs market 43.96%.",
        "vs_sector": "Better than sector: 14.21% vs sector 16.97%.",
        "vs_peers": "Better than peers: 14.21% vs peers 19.19%."
      },
      "trades": {
        "insight": "Trades is 384, better than market, which supports more fully reflective of day-to-day access day-to-day activity than comparable names.",
        "vs_market": "Better than market: 384 vs market 7.",
        "vs_sector": "In line with sector: 384 vs sector 406.",
        "vs_peers": "In line with peers: 384 vs peers 385."
      },
      "amihud": {
        "insight": "Price impact is 4.54e-09, better than market, but worse than peers, which shows price impact is mixed across comparison groups.",
        "vs_market": "Better than market: 4.54e-09 vs market 1.73e-07.",
        "vs_sector": "In line with sector: 4.54e-09 vs sector 5.00e-09.",
        "vs_peers": "Worse than peers: 4.54e-09 vs peers 3.24e-09."
      }
    },
    "performance": {
      "overall": "Recent performance is stronger than the main comparison groups, with a 1M return of 6.3% compared with 2.3% for peers and 3.3% for the market. That move is broadly confirmed by trading conditions, as the 6M liquidity score of 85.5 sits 8.7 points above the peer median and immediate depth is balanced with top-10 bid depth at 0.96x ask depth and a 1-tick spread. The driver mix points to a broad sector-led move rather than a purely company-specific rerating, with sector factors accounting for 73.6% of current trading.",
      "conclusion": "The move looks mainly sector-linked and is being supported rather than challenged by liquidity."
    },
    "drivers": {
      "overall": "The stock is currently moving mainly with its sector, with sector factors accounting for 73.6% of recent price action. That matters because the tape is being set more by the broader industry backdrop than by company-specific developments.",
      "beta": "This sector-led pattern sits alongside a strong return backdrop, with the stock up 6.3% over one month compared with 2.3% for peers and 3.3% for the market. That combination suggests recent strength has been reinforced by the wider sector move rather than standing alone.",
      "rolling_change": "The driver mix has become more externally led over the last three months, moving from clearly company-driven in February to mostly sector in March and mostly sector-driven in April. That points to a change that is more than a one-day swing, even if the overall read remains mixed."
    },
    "regime": {
      "overall": "High volatility is the active backdrop, which matters because price moves are likely to stay larger even as trading remains orderly on the screen with a 1-tick spread and bid depth at 0.96x of ask depth.",
      "current": "The stock is currently in a high-volatility state, while recent price performance remains firm with a 1M return of +6.3% compared with +2.3% for peers and +3.3% for the market.",
      "transitions": "This looks more settled than short-lived, with a typical run length of about 10.3 days, although the overall read is still mixed.",
      "trading_implications": "Trading conditions look steady but not calm, as displayed depth is broadly balanced and the spread is 1 tick even while the market state points to larger price swings."
    },
    "execution": {
      "overall": "Displayed liquidity looks balanced right now because top-10 bid depth is 0.96x ask depth and the spread is 1 tick. That matters because the book is showing two-way interest rather than a one-sided market.",
      "concern": "The main watchpoint is a slightly lighter bid side, with bid depth at 0.96x ask depth. That is a mild imbalance rather than a clear stress signal, but it means buy-side support is marginally thinner than sell-side depth on the screen.",
      "peer_context": "The current book broadly supports the wider liquidity picture because the spread is 1 tick and depth is close to even, while the six-month liquidity score of 85.5 sits 8.7 points above the peer median of 76.8. That matters because the stronger peer standing is being matched by a stable displayed book rather than contradicted by it."
    },
    "trader_composition": {
      "overall": "Flow looks mixed on individual trade count and value, so participation is broad but not clearly anchored by one investor type.",
      "retail_heavy": "Retail-like trades dominate count at 59.6% but account for only 9.3% of trade value, while institution-like trades are 11.2% of count and 47.9% of value. That split shows frequent smaller tickets alongside a meaningful share of value from larger participants, which makes the flow look mixed rather than one-sided.",
      "institutional_gap": "Institution-like activity is a small share of trade count but nearly half of trade value at 47.9%, which indicates larger tickets are present even though they are less frequent.",
      "peer_comparison": "The mix stands out as balanced across count and value rather than clearly skewed, which places the name in a middle ground relative to peers on who is driving turnover."
    },
    "price_moving": {
      "overall": "Price-moving activity is present, but the broader read remains mixed because trade count and trade value point to different participant groups. Retail-like trades make up most individual trades at 59.6% of count, while institution-like trades account for 47.9% of value. That split suggests price formation is being shaped by both frequent smaller trades and less frequent larger tickets, which makes the signal less one-directional.",
      "interpretation": "",
      "asymmetry": ""
    },
    "short_selling": {
      "overall": "Short activity appears moderate rather than elevated, so it does not look like the main force shaping trading conditions. That matters because the stronger 1M share price performance, up 6.3% and ahead of peers and the market, points to a firmer backdrop than one driven by rising short pressure.",
      "level": "Moderate short interest",
      "correlation": "Moderate negative - shorts somewhat predict drops",
      "trend": "Shorts covering significantly (-79% MoM)",
      "peaks": "5 notable peak days identified."
    },
    "intraday": {
      "overall": "Session split is open 3.6%, continuous 87.4%, and close 7.9%. Current trading concentration score is 0.228.",
      "hhi_interpretation": "A concentration score of 0.228 indicates trading is reasonably spread through the day rather than confined to the edges of the session. That matters because access looks more consistent across trading hours.",
      "best_times": "The continuous session is the clearest source of liquidity because it captures the large majority of activity at 87.4%. That makes the middle of the day the most reliable window for steady participation.",
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
        "ODBU",
        "D5IU",
        "BMGU",
        "AU8U",
        "JYEU",
        "AJBU"
      ],
      "scores": [
        85.48387096774194,
        66.48745519713262,
        49.46236559139785,
        19.53405017921147,
        87.09677419354838,
        96.05734767025089,
        97.4910394265233
      ],
      "is_target": [
        true,
        false,
        false,
        false,
        false,
        false,
        false
      ],
      "adv": [
        598704.75,
        97191.97344660245,
        36371.55,
        0.0,
        1177063.75,
        7929828.0,
        19395097.5
      ],
      "total": 558
    },
    "market_comparison": {
      "sector_name": "REIT - Retail",
      "sector_count": 8,
      "market_count": 558,
      "company": {
        "volatility": 0.1421102915341772,
        "adv": 598704.75,
        "spread_pct": 0.007424983677409821,
        "turnover_ratio": 0.0019087176106357894,
        "amihud": 4.541135179291274e-09,
        "trades": 383.5
      },
      "market": {
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.6949400865545378,
          "median": 0.4396350808083983,
          "min": 0.0,
          "max": 6.936569757452165,
          "p5": 0.15291345812470414,
          "p95": 2.1117851247065706,
          "count": 558
        },
        "adv": {
          "direction": "higher_is_better",
          "mean": 2573596.1070653573,
          "median": 11684.25,
          "min": 0.0,
          "max": 243597405.0,
          "p5": 0.0,
          "p95": 10437476.975,
          "count": 558
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.09506844984635239,
          "median": 0.028978517356113388,
          "min": 0.00027198195406526475,
          "max": 1.267605633802817,
          "p5": 0.0035774720816924444,
          "p95": 0.48590812227394437,
          "count": 556
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.003237226044862953,
          "median": 0.0002657375275951876,
          "min": 0.0,
          "max": 0.8552501483092743,
          "p5": 0.0,
          "p95": 0.007062166249711977,
          "count": 551
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 9.797468958231302e-06,
          "median": 1.7330836773744484e-07,
          "min": 0.0,
          "max": 0.0006620397444526588,
          "p5": 0.0,
          "p95": 4.2565766376012296e-05,
          "count": 557
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 375.32078853046596,
          "median": 6.75,
          "min": 0.0,
          "max": 10053.0,
          "p5": 0.0,
          "p95": 2022.8999999999985,
          "count": 558
        }
      },
      "sector": {
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.3486336502947429,
          "median": 0.16970804541466822,
          "min": 0.1149123367194688,
          "max": 1.2958525615515648,
          "p5": 0.12443162090461674,
          "p95": 1.0410968810390244,
          "count": 8
        },
        "adv": {
          "direction": "higher_is_better",
          "mean": 8586091.096680826,
          "median": 661041.75,
          "min": 0.0,
          "max": 55576180.0,
          "p5": 12730.042500000001,
          "p95": 39792460.299999975,
          "count": 8
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.03339878972798008,
          "median": 0.00807930406577915,
          "min": 0.004267253241731738,
          "max": 0.1176470588235293,
          "p5": 0.0043375652329623315,
          "p95": 0.11427861170219804,
          "count": 8
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.0023165451436264945,
          "median": 0.0012236640809936273,
          "min": 0.0,
          "max": 0.0067441230878905615,
          "p5": 8.570597176504434e-05,
          "p95": 0.006573662994566429,
          "count": 8
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 7.974664215146663e-07,
          "median": 4.99977123101207e-09,
          "min": 0.0,
          "max": 6.330000391958183e-06,
          "p5": 3.416998366066311e-11,
          "p95": 4.125885671325535e-06,
          "count": 8
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 1098.5,
          "median": 405.5,
          "min": 0.0,
          "max": 5393.5,
          "p5": 7.700000000000001,
          "p95": 4132.799999999998,
          "count": 8
        }
      },
      "peers": {
        "adv": {
          "direction": "higher_is_better",
          "mean": 4772592.128907767,
          "median": 637127.8617233012,
          "min": 0.0,
          "max": 19395097.5,
          "p5": 9092.8875,
          "p95": 16528780.125,
          "count": 6
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 994.75,
          "median": 385.0,
          "min": 0.0,
          "max": 3283.0,
          "p5": 5.5,
          "p95": 2935.625,
          "count": 6
        },
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.42597244119413386,
          "median": 0.1919100543657978,
          "min": 0.13680778744205138,
          "max": 1.2958525615515648,
          "p5": 0.14544959077678798,
          "p95": 1.113884218328322,
          "count": 6
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.042470660986740044,
          "median": 0.009061409101723246,
          "min": 0.004428487683346552,
          "max": 0.1176470588235293,
          "p5": 0.00497203501725083,
          "p95": 0.11524102516543555,
          "count": 6
        },
        "spread_ticks": {
          "direction": "neutral",
          "mean": 2.3542450219019386,
          "median": 1.0044439738398123,
          "min": 1.0,
          "max": 9.1010101010101,
          "p5": 1.0000426876148554,
          "p95": 7.0796079088231965,
          "count": 6
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 1.0615466392385402e-06,
          "median": 3.2399767993657754e-09,
          "min": 0.0,
          "max": 6.330000391958183e-06,
          "p5": 6.743207378144264e-11,
          "p95": 4.7556327343634375e-06,
          "count": 6
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.003893958112399796,
          "median": 0.0012236640809936273,
          "min": 0.0,
          "max": 0.015566973289644933,
          "p5": 6.121855126074595e-05,
          "p95": 0.012951373221664602,
          "count": 6
        }
      }
    },
    "returns": [
      {
        "horizon": "1M",
        "stock": 0.06349206349206327,
        "market": 0.03334237016264918,
        "sector": 0.036358083528796215,
        "peers": 0.023349862646735442
      },
      {
        "horizon": "3M",
        "stock": -0.02898550724637705,
        "market": 0.03618894259398431,
        "sector": -0.025409419875312422,
        "peers": -0.031538639379983024
      },
      {
        "horizon": "6M",
        "stock": -0.014705882352941013,
        "market": 0.14189987283210126,
        "sector": -0.020120979246038617,
        "peers": -0.0388927768308418
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
      "share_market": 0.12615330626996335,
      "share_sector": 0.7357015531281275,
      "share_idio": 0.13814514060190922,
      "beta_market": 1.0969589302082003,
      "beta_sector": 2.202632262456107,
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
            "median": 0.12615330626996335,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "12.6%",
            "display_range": null,
            "display_text": "12.6%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "share_pct",
            "value_pct": 12.6,
            "plain_english": "Market explains about 12.6% of price moves in the current state."
          },
          "sector_share": {
            "median": 0.7357015531281275,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "73.6%",
            "display_range": null,
            "display_text": "73.6%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "share_pct",
            "value_pct": 73.6,
            "plain_english": "Sector explains about 73.6% of price moves in the current state."
          },
          "company_share": {
            "median": 0.13814514060190922,
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
            "plain_english": "Company-specific explains about 13.8% of price moves in the current state."
          },
          "basis": "current_state"
        },
        "current_sensitivities": {
          "beta_market": {
            "median": 1.0969589302082003,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "1.10",
            "display_range": null,
            "display_text": "1.10",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "beta",
            "strength_label": "Moderate",
            "plain_english": "Moderate market link: a 1% market move has lined up with about a 1.10% stock move in the same direction in this state.",
            "value_num": 1.1
          },
          "beta_stock_lag": {
            "median": -0.8484308306351035,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "-0.85",
            "display_range": null,
            "display_text": "-0.85",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "lag_beta",
            "value_num": -0.85
          },
          "beta_sector": {
            "median": 2.202632262456107,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "2.20",
            "display_range": null,
            "display_text": "2.20",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "beta",
            "strength_label": "High",
            "plain_english": "High sector link: a 1% sector move has lined up with about a 2.20% stock move in the same direction in this state.",
            "value_num": 2.2
          },
          "beta_market_lag": {
            "median": -1.1084503271719448,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "-1.11",
            "display_range": null,
            "display_text": "-1.11",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "lag_beta",
            "value_num": -1.11
          },
          "beta_sector_lag": {
            "median": 3.2049677020848257,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "3.20",
            "display_range": null,
            "display_text": "3.20",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "lag_beta",
            "value_num": 3.2
          },
          "posterior_source": null,
          "intervals_collapsed": false,
          "confidence_label": "High, limited history",
          "confidence_note": "Based on 251 trading days relative to the 252-day target."
        },
        "rolling_windows": {},
        "monthly_history": [
          {
            "month_key": "2025-04",
            "month_label": "April 2025",
            "month_short_label": "Apr",
            "period_label": "2025-04-25 to 2025-04-30",
            "n_obs": 4,
            "partial_month": true,
            "dominant_driver": "market",
            "dominant_driver_label": "Market",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.716666850885159,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "71.7%",
              "display_range": null,
              "display_text": "71.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 4 trading days.",
              "kind": "share_pct",
              "value_pct": 71.7,
              "plain_english": "Market explains about 71.7% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.716666850885159,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "71.7%",
                "display_range": null,
                "display_text": "71.7%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 4 trading days.",
                "kind": "share_pct",
                "value_pct": 71.7,
                "plain_english": "Market explains about 71.7% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.0,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "0.0%",
                "display_range": null,
                "display_text": "0.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 4 trading days.",
                "kind": "share_pct",
                "value_pct": 0.0,
                "plain_english": "Sector explains about 0.0% of price moves in the current state."
              },
              "company_share": {
                "median": 0.2833331491148409,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "28.3%",
                "display_range": null,
                "display_text": "28.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 4 trading days.",
                "kind": "share_pct",
                "value_pct": 28.3,
                "plain_english": "Company-specific explains about 28.3% of price moves in the current state."
              }
            },
            "summary": "Apr: Still clearly market-driven, though based on only 4 trading days."
          },
          {
            "month_key": "2025-05",
            "month_label": "May 2025",
            "month_short_label": "May",
            "period_label": "2025-05-02 to 2025-05-30",
            "n_obs": 20,
            "partial_month": true,
            "dominant_driver": "company",
            "dominant_driver_label": "Company-specific",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.5595856147097945,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "56.0%",
              "display_range": null,
              "display_text": "56.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 56.0,
              "plain_english": "Company-specific explains about 56.0% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.32623166932132414,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "32.6%",
                "display_range": null,
                "display_text": "32.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 32.6,
                "plain_english": "Market explains about 32.6% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.11418271596888128,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "11.4%",
                "display_range": null,
                "display_text": "11.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 11.4,
                "plain_english": "Sector explains about 11.4% of price moves in the current state."
              },
              "company_share": {
                "median": 0.5595856147097945,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "56.0%",
                "display_range": null,
                "display_text": "56.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 56.0,
                "plain_english": "Company-specific explains about 56.0% of price moves in the current state."
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
                "median": 0.1986365726091789,
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
                "median": 0.17795870306504716,
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
              "median": 0.6156446349712698,
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
                "median": 0.15572514972889717,
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
                "median": 0.6156446349712698,
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
              "median": 0.4539874874240681,
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
                "median": 0.20793658426811862,
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
                "median": 0.4539874874240681,
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
                "median": 0.2175839690066876,
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
              "median": 0.48281505654789303,
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
                "median": 0.31423525143745396,
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
                "median": 0.20294969201465304,
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
                "median": 0.48281505654789303,
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
              "median": 0.4219146512462775,
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
                "median": 0.4219146512462775,
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
                "median": 0.27759022888224905,
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
                "median": 0.30049511987147337,
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
              "median": 0.7687417314818246,
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
                "median": 0.12378967681730312,
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
                "median": 0.10746859170087232,
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
                "median": 0.7687417314818246,
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
              "median": 0.6344784334204319,
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
                "median": 0.20419511848433786,
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
                "median": 0.6344784334204319,
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
              "median": 0.45949639356129446,
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
                "median": 0.23035600504921908,
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
                "median": 0.45949639356129446,
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
            "period_label": "2026-04-01 to 2026-04-22",
            "n_obs": 15,
            "partial_month": false,
            "dominant_driver": "sector",
            "dominant_driver_label": "Sector",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.4805949400865393,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "48.1%",
              "display_range": null,
              "display_text": "48.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
              "kind": "share_pct",
              "value_pct": 48.1,
              "plain_english": "Sector explains about 48.1% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.14609324688178016,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "14.6%",
                "display_range": null,
                "display_text": "14.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
                "kind": "share_pct",
                "value_pct": 14.6,
                "plain_english": "Market explains about 14.6% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.4805949400865393,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "48.1%",
                "display_range": null,
                "display_text": "48.1%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
                "kind": "share_pct",
                "value_pct": 48.1,
                "plain_english": "Sector explains about 48.1% of price moves in the current state."
              },
              "company_share": {
                "median": 0.37331181303168054,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "37.3%",
                "display_range": null,
                "display_text": "37.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
                "kind": "share_pct",
                "value_pct": 37.3,
                "plain_english": "Company-specific explains about 37.3% of price moves in the current state."
              }
            },
            "summary": "Apr: Mostly sector-driven."
          }
        ],
        "regimes": [
          {
            "id": 0,
            "label": "Low Volatility",
            "pct_time": 0.5020080321285141,
            "expected_duration_days": 11.363636363636363,
            "current_probability": 0.0,
            "n_days_effective": 125.0,
            "volatility": {
              "median": 0.005585309480740532,
              "low": 0.005585309480740532,
              "high": 0.005585309480740532
            },
            "volatility_label": "Low Volatility",
            "current_probability_display": 0.0
          },
          {
            "id": 1,
            "label": "High Volatility",
            "pct_time": 0.4979919678714859,
            "expected_duration_days": 10.333333333333334,
            "current_probability": 1.0,
            "n_days_effective": 124.0,
            "volatility": {
              "median": 0.011201729080742509,
              "low": 0.011201729080742509,
              "high": 0.011201729080742509
            },
            "volatility_label": "High Volatility",
            "current_probability_display": null
          }
        ],
        "transitions": {
          "mean": [
            [
              0.912,
              0.088
            ],
            [
              0.08943089430894309,
              0.9105691056910569
            ]
          ],
          "low": [],
          "high": [],
          "counts": [
            [
              114.0,
              11.0
            ],
            [
              11.0,
              112.0
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
          "market_link_display": "1.10",
          "sector_link_display": "2.20",
          "market_link_explainer": "Moderate market link. A 1% market move has lined up with about a 1.10% stock move in the same direction in this state. This is a point estimate from 251 trading days.",
          "sector_link_explainer": "High sector link. A 1% sector move has lined up with about a 2.20% stock move in the same direction in this state. This is a point estimate from 251 trading days.",
          "stock_persistence_display": "-0.85",
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "history_limited_note": "Read is based on 251 trading days versus the 252-day target."
        },
        "current_summary": {
          "regime_label": "High Volatility",
          "dominant_driver": "sector",
          "dominant_driver_label": "Sector",
          "driver_share_pct": 73.6,
          "driver_share_display": "73.6%",
          "confidence_label": "High, limited history",
          "confidence_pct": 100.0,
          "display_confidence_pct": null,
          "confidence_note": "Based on 251 trading days relative to the 252-day target.",
          "history_days": 251,
          "history_limited": true,
          "volatility_label": "High Volatility",
          "lead_signal_text": "No stable lead signal.",
          "state_term": "state",
          "stay_probability": 0.9105691056910569,
          "effective_days": 124.0,
          "persistence_note": "This state looks more persistent, with a typical run length of about 10.3 days.",
          "expected_duration_days": 10.3
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
          "month_key": "2025-04",
          "month_label": "April 2025",
          "month_short_label": "Apr",
          "period_label": "2025-04-25 to 2025-04-30",
          "n_obs": 4,
          "partial_month": true,
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "regime_label": null,
          "summary": "Apr: Still clearly market-driven, though based on only 4 trading days.",
          "share_market": 0.716666850885159,
          "share_sector": 0.0,
          "share_company": 0.2833331491148409,
          "share_market_display": "71.7%",
          "share_sector_display": "0.0%",
          "share_company_display": "28.3%",
          "dominant_share_display": "71.7%"
        },
        {
          "month_key": "2025-05",
          "month_label": "May 2025",
          "month_short_label": "May",
          "period_label": "2025-05-02 to 2025-05-30",
          "n_obs": 20,
          "partial_month": true,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_label": null,
          "summary": "May: Mostly company-driven.",
          "share_market": 0.32623166932132414,
          "share_sector": 0.11418271596888128,
          "share_company": 0.5595856147097945,
          "share_market_display": "32.6%",
          "share_sector_display": "11.4%",
          "share_company_display": "56.0%",
          "dominant_share_display": "56.0%"
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
          "share_market": 0.1986365726091789,
          "share_sector": 0.17795870306504716,
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
          "share_market": 0.15572514972889717,
          "share_sector": 0.22863021529983313,
          "share_company": 0.6156446349712698,
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
          "share_sector": 0.20793658426811862,
          "share_company": 0.4539874874240681,
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
          "share_sector": 0.2175839690066876,
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
          "share_market": 0.31423525143745396,
          "share_sector": 0.20294969201465304,
          "share_company": 0.48281505654789303,
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
          "share_market": 0.4219146512462775,
          "share_sector": 0.27759022888224905,
          "share_company": 0.30049511987147337,
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
          "share_market": 0.12378967681730312,
          "share_sector": 0.10746859170087232,
          "share_company": 0.7687417314818246,
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
          "share_market": 0.20419511848433786,
          "share_sector": 0.16132644809523028,
          "share_company": 0.6344784334204319,
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
          "share_market": 0.23035600504921908,
          "share_sector": 0.31014760138948644,
          "share_company": 0.45949639356129446,
          "share_market_display": "23.0%",
          "share_sector_display": "31.0%",
          "share_company_display": "45.9%",
          "dominant_share_display": "45.9%"
        },
        {
          "month_key": "2026-04",
          "month_label": "April 2026",
          "month_short_label": "Apr",
          "period_label": "2026-04-01 to 2026-04-22",
          "n_obs": 15,
          "partial_month": false,
          "dominant_driver": "sector",
          "dominant_driver_label": "Sector",
          "regime_label": null,
          "summary": "Apr: Mostly sector-driven.",
          "share_market": 0.14609324688178016,
          "share_sector": 0.4805949400865393,
          "share_company": 0.37331181303168054,
          "share_market_display": "14.6%",
          "share_sector_display": "48.1%",
          "share_company_display": "37.3%",
          "dominant_share_display": "48.1%"
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
            "expected_duration_days": 11.363636363636363,
            "current_probability": 0.0,
            "n_days_effective": 125.0,
            "volatility": {
              "median": 0.005585309480740532,
              "low": 0.005585309480740532,
              "high": 0.005585309480740532
            },
            "volatility_label": "Low Volatility"
          },
          {
            "id": 1,
            "label": "High Volatility",
            "pct_time": 0.4979919678714859,
            "expected_duration_days": 10.333333333333334,
            "current_probability": 1.0,
            "n_days_effective": 124.0,
            "volatility": {
              "median": 0.011201729080742509,
              "low": 0.011201729080742509,
              "high": 0.011201729080742509
            },
            "volatility_label": "High Volatility"
          }
        ],
        "transitions": [
          [
            0.912,
            0.088
          ],
          [
            0.08943089430894309,
            0.9105691056910569
          ]
        ]
      }
    },
    "order_book": {
      "bids": [
        {
          "level": 1,
          "price": 0.665,
          "quantity": 6200.0,
          "value": 4123.0
        },
        {
          "level": 2,
          "price": 0.66,
          "quantity": 1200200.0,
          "value": 792132.0
        },
        {
          "level": 3,
          "price": 0.655,
          "quantity": 650700.0,
          "value": 426208.5
        },
        {
          "level": 4,
          "price": 0.65,
          "quantity": 904300.0,
          "value": 587795.0
        },
        {
          "level": 5,
          "price": 0.645,
          "quantity": 506700.0,
          "value": 326821.5
        },
        {
          "level": 6,
          "price": 0.64,
          "quantity": 251600.0,
          "value": 161024.0
        },
        {
          "level": 7,
          "price": 0.635,
          "quantity": 218500.0,
          "value": 138747.5
        },
        {
          "level": 8,
          "price": 0.63,
          "quantity": 654800.0,
          "value": 412524.0
        },
        {
          "level": 9,
          "price": 0.625,
          "quantity": 172300.0,
          "value": 107687.5
        },
        {
          "level": 10,
          "price": 0.62,
          "quantity": 152900.0,
          "value": 94798.0
        }
      ],
      "asks": [
        {
          "level": 1,
          "price": 0.67,
          "quantity": 608100.0,
          "value": 407427.0
        },
        {
          "level": 2,
          "price": 0.675,
          "quantity": 578700.0,
          "value": 390622.5
        },
        {
          "level": 3,
          "price": 0.68,
          "quantity": 428600.0,
          "value": 291448.0
        },
        {
          "level": 4,
          "price": 0.685,
          "quantity": 819700.0,
          "value": 561494.5
        },
        {
          "level": 5,
          "price": 0.69,
          "quantity": 1769800.0,
          "value": 1221162.0
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
          "quantity": 154400.0,
          "value": 108080.0
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
          "quantity": 71300.0,
          "value": 50623.0
        },
        {
          "level": 10,
          "price": 0.715,
          "quantity": 22100.0,
          "value": 15801.5
        }
      ]
    },
    "execution_dynamic": {
      "snapshot": {
        "valid": true,
        "snapshot_time": "2026-04-22 08:59:54.032500",
        "snapshot_basis": "last_continuous_session_snapshot",
        "snapshot_label": "final continuous-session displayed book before close",
        "snapshot_note": "Final continuous-session displayed book before close",
        "snapshot_mic": "XSES",
        "mid_price": 0.6675,
        "spread_pct": 0.007490636704119858,
        "spread_ticks": 1.0,
        "tick_size": 0.005,
        "bid_depth_notional_top10": 3051861.0,
        "ask_depth_notional_top10": 3168390.0,
        "bid_ask_depth_ratio": 0.9632
      },
      "historical_trade_scenarios": {
        "valid": true,
        "requested_lookback_calendar_days": 365,
        "lookback_calendar_days": 365,
        "effective_calendar_days": 366,
        "history_limited": false,
        "trade_days_used": 254,
        "n_trades_used": 99546,
        "first_trade_date": "2025-04-22",
        "last_trade_date": "2026-04-22",
        "window_label": "Apr 22, 2025 to Apr 22, 2026",
        "window_short_label": "Apr 22, 2025 to Apr 22, 2026",
        "trade_days_label": "254 trading days",
        "trade_count_label": "99,546 trades",
        "window_detail_label": "254 trading days • 99,546 trades",
        "history_note": "Trade-size percentiles use Apr 22, 2025 to Apr 22, 2026 history (254 trading days • 99,546 trades).",
        "scenarios": [
          {
            "key": "p90",
            "label": "90th percentile trade",
            "quantile": 0.9,
            "trade_notional": 3400.0,
            "impact_pct": -0.003745,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 0.11,
            "pct_of_adv": 0.44
          },
          {
            "key": "p95",
            "label": "95th percentile trade",
            "quantile": 0.95,
            "trade_notional": 7930.12,
            "impact_pct": -0.0073560000000000006,
            "filled_pct": 100.0,
            "levels_consumed": 2,
            "pct_of_bid_depth": 0.26,
            "pct_of_adv": 1.02
          },
          {
            "key": "p99_99",
            "label": "99.99th percentile trade",
            "quantile": 0.9999,
            "trade_notional": 340000.0,
            "impact_pct": -0.011146,
            "filled_pct": 100.0,
            "levels_consumed": 2,
            "pct_of_bid_depth": 11.14,
            "pct_of_adv": 43.64
          }
        ]
      },
      "l3_sell_order_scenarios": {
        "valid": true,
        "trade_date": "2026-04-22",
        "selection_method": "largest_observed_ask_orders_during_day",
        "orders": [
          {
            "rank": 1,
            "order_id": "8137223323647089664",
            "timestamp": "2026-04-21 22:59:01.639700000",
            "local_timestamp": "2026-04-22 06:59:01",
            "posted_price": 0.69,
            "size_shares": 1000000.0,
            "notional": 690000.0,
            "impact_pct": -0.011192,
            "filled_pct": 100.0,
            "levels_consumed": 2,
            "pct_of_bid_depth": 22.61,
            "price_vs_mid_pct": 3.371,
            "executed_event_count": 0,
            "event_count": 1
          },
          {
            "rank": 2,
            "order_id": "8137619147835821056",
            "timestamp": "2026-04-21 22:59:01.639700000",
            "local_timestamp": "2026-04-22 06:59:01",
            "posted_price": 0.78,
            "size_shares": 600000.0,
            "notional": 468000.0,
            "impact_pct": -0.01117,
            "filled_pct": 100.0,
            "levels_consumed": 2,
            "pct_of_bid_depth": 15.33,
            "price_vs_mid_pct": 16.854,
            "executed_event_count": 0,
            "event_count": 1
          },
          {
            "rank": 3,
            "order_id": "8139994092949103616",
            "timestamp": "2026-04-22 00:46:57.147500000",
            "local_timestamp": "2026-04-22 08:46:57",
            "posted_price": 0.675,
            "size_shares": 300000.0,
            "notional": 202500.0,
            "impact_pct": -0.011085000000000001,
            "filled_pct": 100.0,
            "levels_consumed": 2,
            "pct_of_bid_depth": 6.64,
            "price_vs_mid_pct": 1.124,
            "executed_event_count": 0,
            "event_count": 2
          }
        ]
      },
      "intraday_liquidity_profile": {
        "valid": true,
        "trade_date": "2026-04-22",
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
            "spread_pct": 0.007490636704119857,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 3060505.0,
            "ask_depth_notional": 3154184.5,
            "mid_price": 0.6675
          },
          {
            "bucket": "09:30",
            "spread_pct": 0.007490636704119857,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 3052287.0,
            "ask_depth_notional": 3172659.5,
            "mid_price": 0.6675
          },
          {
            "bucket": "10:00",
            "spread_pct": 0.007490636704119857,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 3023988.5,
            "ask_depth_notional": 3212395.5,
            "mid_price": 0.6675
          },
          {
            "bucket": "10:30",
            "spread_pct": 0.007490636704119857,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 3025247.5,
            "ask_depth_notional": 3158865.5,
            "mid_price": 0.6675
          },
          {
            "bucket": "11:00",
            "spread_pct": 0.007490636704119857,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 3152661.5,
            "ask_depth_notional": 3308932.0,
            "mid_price": 0.6675
          },
          {
            "bucket": "11:30",
            "spread_pct": 0.007490636704119857,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 3016642.0,
            "ask_depth_notional": 3455824.0,
            "mid_price": 0.6675
          },
          {
            "bucket": "13:00",
            "spread_pct": 0.007490636704119857,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 3010325.5,
            "ask_depth_notional": 3435071.0,
            "mid_price": 0.6675
          },
          {
            "bucket": "13:30",
            "spread_pct": 0.007490636704119857,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 3011057.0,
            "ask_depth_notional": 3464379.0,
            "mid_price": 0.6675
          },
          {
            "bucket": "14:00",
            "spread_pct": 0.007490636704119857,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 3025088.5,
            "ask_depth_notional": 3459421.0,
            "mid_price": 0.6675
          },
          {
            "bucket": "14:30",
            "spread_pct": 0.007490636704119857,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 3004673.0,
            "ask_depth_notional": 3468885.0,
            "mid_price": 0.6675
          },
          {
            "bucket": "15:00",
            "spread_pct": 0.007490636704119857,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 2957987.5,
            "ask_depth_notional": 3529319.0,
            "mid_price": 0.6675
          },
          {
            "bucket": "15:30",
            "spread_pct": 0.007490636704119857,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 2952594.5,
            "ask_depth_notional": 3182408.5,
            "mid_price": 0.6675
          },
          {
            "bucket": "16:00",
            "spread_pct": 0.00754716981132076,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 2937649.0,
            "ask_depth_notional": 3223099.0,
            "mid_price": 0.6625000000000001
          },
          {
            "bucket": "16:30",
            "spread_pct": 0.007490636704119857,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 3051861.0,
            "ask_depth_notional": 3168390.0,
            "mid_price": 0.6675
          }
        ],
        "summary": {
          "median_spread_pct": 0.007490636704119857,
          "median_spread_ticks": 1.0000000000000009,
          "median_bid_depth_notional": 3020315.25,
          "median_ask_depth_notional": 3266015.5,
          "tightest_bucket": "09:00",
          "widest_bucket": "16:00",
          "deepest_bid_bucket": "11:00",
          "thinnest_bid_bucket": "16:00"
        }
      }
    },
    "peer_capacity": {
      "bx_ticket_pct_adv_50k": 6.4,
      "peers": [
        {
          "ticker": "AJBU",
          "pct": 4.1
        },
        {
          "ticker": "JYEU",
          "pct": 14.1
        },
        {
          "ticker": "AU8U",
          "pct": 100.6
        },
        {
          "ticker": "ODBU",
          "pct": 583.4
        },
        {
          "ticker": "D5IU",
          "pct": 22061.2
        },
        {
          "ticker": "BMGU",
          "pct": null
        }
      ]
    },
    "trader_composition": {
      "primary_period": "6m",
      "periods": {
        "1d": {
          "valid": true,
          "currency": "SGD",
          "n_trades": 507,
          "n_runs": 260,
          "n_trade_days": 1,
          "first_trade_date": "2026-04-22",
          "last_trade_date": "2026-04-22",
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
            "retail_pct": 0.39644970414201186,
            "mixed_pct": 0.3155818540433925,
            "instit_pct": 0.1755424063116371,
            "ambiguous_pct": 0.11242603550295859,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.11242603550295859,
            "retail_qty_pct": 0.09457117104624559,
            "mixed_qty_pct": 0.3290577549746932,
            "instit_qty_pct": 0.3676072939055675,
            "ambiguous_qty_pct": 0.20876378007349372,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.20876378007349372,
            "retail_notional_pct": 0.09464061940215614,
            "mixed_notional_pct": 0.3289319776740713,
            "instit_notional_pct": 0.36772596450442246,
            "ambiguous_notional_pct": 0.2087014384193501,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.2087014384193501
          },
          "run_composition": {
            "retail_pct": 0.75,
            "mixed_pct": 0.18076923076923077,
            "instit_pct": 0.03461538461538462,
            "ambiguous_pct": 0.03461538461538462,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.03461538461538462,
            "retail_notional_pct": 0.09464061940215614,
            "mixed_notional_pct": 0.3289319776740713,
            "instit_notional_pct": 0.36772596450442246,
            "unclear_notional_pct": 0.2087014384193501
          },
          "counts": {
            "trades": {
              "retail": 201,
              "mixed": 160,
              "institutional": 89,
              "ambiguous": 57,
              "unobservable": 0,
              "unclear": 57
            },
            "runs": {
              "retail": 195,
              "mixed": 47,
              "institutional": 9,
              "ambiguous": 9,
              "unobservable": 0,
              "unclear": 9
            }
          },
          "confidence": {
            "high": 0.5038461538461538,
            "medium": 0.27692307692307694,
            "low": 0.0038461538461538464,
            "na": 0.2153846153846154
          },
          "confidence_counts": {
            "high": 131,
            "medium": 72,
            "low": 1,
            "na": 56
          },
          "trade_confidence": {
            "high": 0.27416173570019725,
            "medium": 0.2859960552268245,
            "low": 0.011834319526627219,
            "na": 0.4280078895463511
          },
          "trade_confidence_counts": {
            "high": 139,
            "medium": 145,
            "low": 6,
            "na": 217
          },
          "observability": {
            "avg_feature_coverage": 0.8759615384615383,
            "observable_run_pct": 1.0,
            "ambiguous_run_pct": 0.03461538461538462,
            "unobservable_run_pct": 0.0
          },
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "dominant_share": 0.75,
          "dominance_gap": 0.5692307692307692,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 312,
              "MULTI_FILL_SINGLE_PRICE": 195
            },
            "d2_information": {
              "NEUTRAL_OR_REVERSING": 497,
              "PERSISTENT_POSITIVE_IMPACT": 10
            },
            "d3_urgency": {
              "IMMEDIATE": 251,
              "ADAPTIVE": 9
            },
            "participant_confidence": {
              "HIGH": 131,
              "MEDIUM": 72,
              "NA": 56,
              "LOW": 1
            }
          },
          "trade_size": {
            "avg": 1891.1153846153845,
            "median": 332.5
          },
          "run_size": {
            "avg": 3687.675,
            "median": 266.0,
            "avg_length": 1.396153846153846
          },
          "recent_trades": [
            {
              "trade_id": "BMLL-515",
              "timestamp": "2026-04-22T08:59:45.342900",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 57743,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-514",
              "timestamp": "2026-04-22T08:59:38.340400",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 57742,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-513",
              "timestamp": "2026-04-22T08:59:24.647600",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 57741,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-512",
              "timestamp": "2026-04-22T08:59:10.801400",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 57740,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-511",
              "timestamp": "2026-04-22T08:58:58.533200",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 57739,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-510",
              "timestamp": "2026-04-22T08:58:41.012100",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 57738,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-509",
              "timestamp": "2026-04-22T08:58:25.214100",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 57737,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-508",
              "timestamp": "2026-04-22T08:58:11.849900",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 57736,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-507",
              "timestamp": "2026-04-22T08:57:55.414500",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 57735,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-506",
              "timestamp": "2026-04-22T08:57:54.208800",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 57734,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-505",
              "timestamp": "2026-04-22T08:57:45.922900",
              "price": 0.665,
              "size": 2200.0,
              "notional": 1463.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 57733,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-504",
              "timestamp": "2026-04-22T08:57:45.892800",
              "price": 0.665,
              "size": 2200.0,
              "notional": 1463.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 57733,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-503",
              "timestamp": "2026-04-22T08:57:44.897700",
              "price": 0.665,
              "size": 2200.0,
              "notional": 1463.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 57733,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-502",
              "timestamp": "2026-04-22T08:57:44.897700",
              "price": 0.665,
              "size": 2300.0,
              "notional": 1529.5,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 57733,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-501",
              "timestamp": "2026-04-22T08:57:42.696900",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 57732,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-500",
              "timestamp": "2026-04-22T08:57:31.905000",
              "price": 0.665,
              "size": 700.0,
              "notional": 465.5,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 57731,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-499",
              "timestamp": "2026-04-22T08:57:31.905000",
              "price": 0.665,
              "size": 500.0,
              "notional": 332.5,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 57731,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-498",
              "timestamp": "2026-04-22T08:57:31.905000",
              "price": 0.665,
              "size": 500.0,
              "notional": 332.5,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 57731,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-497",
              "timestamp": "2026-04-22T08:57:31.904900",
              "price": 0.665,
              "size": 1100.0,
              "notional": 731.5,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 57731,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-496",
              "timestamp": "2026-04-22T08:57:30.909200",
              "price": 0.665,
              "size": 1500.0,
              "notional": 997.5,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 57731,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-495",
              "timestamp": "2026-04-22T08:57:30.909100",
              "price": 0.665,
              "size": 1800.0,
              "notional": 1197.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 57731,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-494",
              "timestamp": "2026-04-22T08:57:30.909100",
              "price": 0.665,
              "size": 1700.0,
              "notional": 1130.5,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 57731,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-493",
              "timestamp": "2026-04-22T08:57:30.909100",
              "price": 0.665,
              "size": 1200.0,
              "notional": 798.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 57731,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-492",
              "timestamp": "2026-04-22T08:57:25.061200",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 57730,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-491",
              "timestamp": "2026-04-22T08:57:09.332300",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 57729,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-490",
              "timestamp": "2026-04-22T08:56:47.400300",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 57728,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-489",
              "timestamp": "2026-04-22T08:56:47.400300",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 57728,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-488",
              "timestamp": "2026-04-22T08:56:47.400300",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 57728,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-487",
              "timestamp": "2026-04-22T08:56:39.380700",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 57727,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-486",
              "timestamp": "2026-04-22T08:56:37.393400",
              "price": 0.665,
              "size": 400.0,
              "notional": 266.0,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 57726,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            }
          ],
          "peer_comparison": [
            {
              "ticker": "CRPU",
              "currency": "SGD",
              "is_target": true,
              "retail_pct": 0.39644970414201186,
              "mixed_pct": 0.3155818540433925,
              "instit_pct": 0.1755424063116371,
              "ambiguous_pct": 0.11242603550295859,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.11242603550295859,
              "retail_qty_pct": 0.09457117104624559,
              "mixed_qty_pct": 0.3290577549746932,
              "instit_qty_pct": 0.3676072939055675,
              "ambiguous_qty_pct": 0.20876378007349372,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.20876378007349372,
              "retail_notional_pct": 0.09464061940215614,
              "mixed_notional_pct": 0.3289319776740713,
              "instit_notional_pct": 0.36772596450442246,
              "ambiguous_notional_pct": 0.2087014384193501,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.2087014384193501,
              "run_retail_pct": 0.75,
              "run_mixed_pct": 0.18076923076923077,
              "run_instit_pct": 0.03461538461538462,
              "run_unclear_pct": 0.03461538461538462,
              "avg_trade_size": 1891.1153846153845,
              "avg_run_notional": 3687.675,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.5038461538461538,
              "medium_confidence_pct": 0.27692307692307694,
              "low_confidence_pct": 0.0038461538461538464,
              "na_confidence_pct": 0.2153846153846154,
              "avg_feature_coverage": 0.8759615384615383,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "JYEU",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.4196242171189979,
              "mixed_pct": 0.17745302713987474,
              "instit_pct": 0.3627348643006263,
              "ambiguous_pct": 0.04018789144050104,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.04018789144050104,
              "retail_qty_pct": 0.02496237099396642,
              "mixed_qty_pct": 0.1193993159930823,
              "instit_qty_pct": 0.7920894988118291,
              "ambiguous_qty_pct": 0.06354881420112218,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.06354881420112218,
              "retail_notional_pct": 0.025033151162500766,
              "mixed_notional_pct": 0.1192147537973665,
              "instit_notional_pct": 0.7919558468072503,
              "ambiguous_notional_pct": 0.06379624823288246,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.06379624823288246,
              "run_retail_pct": 0.8232848232848233,
              "run_mixed_pct": 0.1496881496881497,
              "run_instit_pct": 0.018711018711018712,
              "run_unclear_pct": 0.008316008316008316,
              "avg_trade_size": 6907.531315240083,
              "avg_run_notional": 13757.619542619543,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.448024948024948,
              "medium_confidence_pct": 0.3586278586278586,
              "low_confidence_pct": 0.035343035343035345,
              "na_confidence_pct": 0.158004158004158,
              "avg_feature_coverage": 0.8696465696465694,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "AJBU",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.3492612386042125,
              "mixed_pct": 0.260295504558315,
              "instit_pct": 0.31122288588494185,
              "ambiguous_pct": 0.07922037095253065,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.07922037095253065,
              "retail_qty_pct": 0.08920358266763495,
              "mixed_qty_pct": 0.15429072863713386,
              "instit_qty_pct": 0.6344105543451949,
              "ambiguous_qty_pct": 0.12209513435003631,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.12209513435003631,
              "retail_notional_pct": 0.08914467138793902,
              "mixed_notional_pct": 0.15438067934564187,
              "instit_notional_pct": 0.6343372185144208,
              "ambiguous_notional_pct": 0.12213743075199834,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.12213743075199834,
              "run_retail_pct": 0.7179125528913963,
              "run_mixed_pct": 0.2150916784203103,
              "run_instit_pct": 0.03314527503526093,
              "run_unclear_pct": 0.03385049365303244,
              "avg_trade_size": 4951.3593209682485,
              "avg_run_notional": 11107.38645980254,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.31946403385049366,
              "medium_confidence_pct": 0.3928067700987306,
              "low_confidence_pct": 0.038787023977433006,
              "na_confidence_pct": 0.24894217207334274,
              "avg_feature_coverage": 0.8791960507757404,
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
              "retail_pct": 0.6397884996695308,
              "mixed_pct": 0.3007270323859881,
              "instit_pct": 0.05023132848645076,
              "ambiguous_pct": 0.009253139458030404,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.009253139458030404,
              "retail_qty_pct": 0.11707550175215037,
              "mixed_qty_pct": 0.36564192417967506,
              "instit_qty_pct": 0.48255813953488375,
              "ambiguous_qty_pct": 0.034724434533290854,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.034724434533290854,
              "retail_notional_pct": 0.11717662675052518,
              "mixed_notional_pct": 0.3654499601728146,
              "instit_notional_pct": 0.48271999081044986,
              "ambiguous_notional_pct": 0.03465342226621036,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.03465342226621036,
              "run_retail_pct": 0.8316151202749141,
              "run_mixed_pct": 0.15721649484536082,
              "run_instit_pct": 0.00859106529209622,
              "run_unclear_pct": 0.002577319587628866,
              "avg_trade_size": 569.6288830138797,
              "avg_run_notional": 740.419673539519,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.46563573883161513,
              "medium_confidence_pct": 0.30326460481099654,
              "low_confidence_pct": 0.07130584192439862,
              "na_confidence_pct": 0.15979381443298968,
              "avg_feature_coverage": 0.8702319587628864,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "ODBU",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.2608695652173913,
              "mixed_pct": 0.21739130434782608,
              "instit_pct": 0.062111801242236024,
              "ambiguous_pct": 0.45962732919254656,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.45962732919254656,
              "retail_qty_pct": 0.054933611038791984,
              "mixed_qty_pct": 0.11897943243946889,
              "instit_qty_pct": 0.3392345743296017,
              "ambiguous_qty_pct": 0.48685238219213745,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.48685238219213745,
              "retail_notional_pct": 0.05472369921427627,
              "mixed_notional_pct": 0.11854971717438875,
              "instit_notional_pct": 0.33852491535192886,
              "ambiguous_notional_pct": 0.4882016682594061,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.4882016682594061,
              "run_retail_pct": 0.5384615384615384,
              "run_mixed_pct": 0.25,
              "run_instit_pct": 0.057692307692307696,
              "run_unclear_pct": 0.15384615384615385,
              "avg_trade_size": 1244.6490683229813,
              "avg_run_notional": 3853.625,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.15384615384615385,
              "medium_confidence_pct": 0.38461538461538464,
              "low_confidence_pct": 0.057692307692307696,
              "na_confidence_pct": 0.40384615384615385,
              "avg_feature_coverage": 0.9221153846153848,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "D5IU",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.6666666666666666,
              "mixed_pct": 0.3333333333333333,
              "instit_pct": 0.0,
              "ambiguous_pct": 0.0,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.0,
              "retail_qty_pct": 0.10152740341419586,
              "mixed_qty_pct": 0.8984725965858041,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": 0.0,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.0,
              "retail_notional_pct": 0.10354101299865531,
              "mixed_notional_pct": 0.8964589870013447,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": 0.0,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.0,
              "run_retail_pct": 0.8,
              "run_mixed_pct": 0.2,
              "run_instit_pct": 0.0,
              "run_unclear_pct": 0.0,
              "avg_trade_size": 1115.5,
              "avg_run_notional": 1338.6,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.8,
              "na_confidence_pct": 0.2,
              "avg_feature_coverage": 0.85,
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
          "n_trades": 9089,
          "n_runs": 6483,
          "n_trade_days": 21,
          "first_trade_date": "2026-03-24",
          "last_trade_date": "2026-04-22",
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
            "retail_pct": 0.5852128947078886,
            "mixed_pct": 0.25679392672461215,
            "instit_pct": 0.09539003190670041,
            "ambiguous_pct": 0.06183298492683464,
            "unobservable_pct": 0.0007701617339641324,
            "unclear_pct": 0.06260314666079878,
            "retail_qty_pct": 0.0858616348669278,
            "mixed_qty_pct": 0.3033774645382603,
            "instit_qty_pct": 0.38683832441817473,
            "ambiguous_qty_pct": 0.2145628296385734,
            "unobservable_qty_pct": 0.009359746538063748,
            "unclear_qty_pct": 0.22392257617663713,
            "retail_notional_pct": 0.08564914369975701,
            "mixed_notional_pct": 0.3027569743064834,
            "instit_notional_pct": 0.3872921784262886,
            "ambiguous_notional_pct": 0.2146426905051685,
            "unobservable_notional_pct": 0.00965901306230248,
            "unclear_notional_pct": 0.22430170356747098
          },
          "run_composition": {
            "retail_pct": 0.8138207619929045,
            "mixed_pct": 0.16149930587690883,
            "instit_pct": 0.014807959278111986,
            "ambiguous_pct": 0.00971772327626099,
            "unobservable_pct": 0.00015424957581366652,
            "unclear_pct": 0.009871972852074657,
            "retail_notional_pct": 0.08564914369975701,
            "mixed_notional_pct": 0.3027569743064834,
            "instit_notional_pct": 0.3872921784262886,
            "unclear_notional_pct": 0.22430170356747098
          },
          "counts": {
            "trades": {
              "retail": 5319,
              "mixed": 2334,
              "institutional": 867,
              "ambiguous": 562,
              "unobservable": 7,
              "unclear": 569
            },
            "runs": {
              "retail": 5276,
              "mixed": 1047,
              "institutional": 96,
              "ambiguous": 63,
              "unobservable": 1,
              "unclear": 64
            }
          },
          "confidence": {
            "high": 0.5300015424957581,
            "medium": 0.27903748264692274,
            "low": 0.019589696128335648,
            "na": 0.1713712787289835
          },
          "confidence_counts": {
            "high": 3436,
            "medium": 1809,
            "low": 127,
            "na": 1111
          },
          "trade_confidence": {
            "high": 0.40224447133898117,
            "medium": 0.25767411156342834,
            "low": 0.02068434371217956,
            "na": 0.31939707338541096
          },
          "trade_confidence_counts": {
            "high": 3656,
            "medium": 2342,
            "low": 188,
            "na": 2903
          },
          "observability": {
            "avg_feature_coverage": 0.8674302020669442,
            "observable_run_pct": 0.9998457504241863,
            "ambiguous_run_pct": 0.00971772327626099,
            "unobservable_run_pct": 0.00015424957581366652
          },
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "dominant_share": 0.8138207619929045,
          "dominance_gap": 0.6523214561159957,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 7169,
              "MULTI_FILL_SINGLE_PRICE": 1902,
              "WALK_BOOK": 11,
              "UNOBSERVABLE": 7
            },
            "d2_information": {
              "NEUTRAL_OR_REVERSING": 8992,
              "MOMENTUM_REACTIVE": 56,
              "PERSISTENT_POSITIVE_IMPACT": 37,
              "UNOBSERVABLE": 4
            },
            "d3_urgency": {
              "IMMEDIATE": 6435,
              "ADAPTIVE": 48
            },
            "participant_confidence": {
              "HIGH": 3436,
              "MEDIUM": 1809,
              "NA": 1111,
              "LOW": 127
            }
          },
          "trade_size": {
            "avg": 1524.9496094179779,
            "median": 128.0
          },
          "run_size": {
            "avg": 2137.9403054141603,
            "median": 129.0,
            "avg_length": 1.1676692889094555
          },
          "recent_trades": [
            {
              "trade_id": "BMLL-515",
              "timestamp": "2026-04-22T08:59:45.342900",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 57743,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-514",
              "timestamp": "2026-04-22T08:59:38.340400",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 57742,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-513",
              "timestamp": "2026-04-22T08:59:24.647600",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 57741,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-512",
              "timestamp": "2026-04-22T08:59:10.801400",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 57740,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-511",
              "timestamp": "2026-04-22T08:58:58.533200",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 57739,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-510",
              "timestamp": "2026-04-22T08:58:41.012100",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 57738,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-509",
              "timestamp": "2026-04-22T08:58:25.214100",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 57737,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-508",
              "timestamp": "2026-04-22T08:58:11.849900",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 57736,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-507",
              "timestamp": "2026-04-22T08:57:55.414500",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 57735,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-506",
              "timestamp": "2026-04-22T08:57:54.208800",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 57734,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-505",
              "timestamp": "2026-04-22T08:57:45.922900",
              "price": 0.665,
              "size": 2200.0,
              "notional": 1463.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 57733,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-504",
              "timestamp": "2026-04-22T08:57:45.892800",
              "price": 0.665,
              "size": 2200.0,
              "notional": 1463.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 57733,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-503",
              "timestamp": "2026-04-22T08:57:44.897700",
              "price": 0.665,
              "size": 2200.0,
              "notional": 1463.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 57733,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-502",
              "timestamp": "2026-04-22T08:57:44.897700",
              "price": 0.665,
              "size": 2300.0,
              "notional": 1529.5,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 57733,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-501",
              "timestamp": "2026-04-22T08:57:42.696900",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 57732,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-500",
              "timestamp": "2026-04-22T08:57:31.905000",
              "price": 0.665,
              "size": 700.0,
              "notional": 465.5,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 57731,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-499",
              "timestamp": "2026-04-22T08:57:31.905000",
              "price": 0.665,
              "size": 500.0,
              "notional": 332.5,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 57731,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-498",
              "timestamp": "2026-04-22T08:57:31.905000",
              "price": 0.665,
              "size": 500.0,
              "notional": 332.5,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 57731,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-497",
              "timestamp": "2026-04-22T08:57:31.904900",
              "price": 0.665,
              "size": 1100.0,
              "notional": 731.5,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 57731,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-496",
              "timestamp": "2026-04-22T08:57:30.909200",
              "price": 0.665,
              "size": 1500.0,
              "notional": 997.5,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 57731,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-495",
              "timestamp": "2026-04-22T08:57:30.909100",
              "price": 0.665,
              "size": 1800.0,
              "notional": 1197.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 57731,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-494",
              "timestamp": "2026-04-22T08:57:30.909100",
              "price": 0.665,
              "size": 1700.0,
              "notional": 1130.5,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 57731,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-493",
              "timestamp": "2026-04-22T08:57:30.909100",
              "price": 0.665,
              "size": 1200.0,
              "notional": 798.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 57731,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-492",
              "timestamp": "2026-04-22T08:57:25.061200",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 57730,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-491",
              "timestamp": "2026-04-22T08:57:09.332300",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 57729,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-490",
              "timestamp": "2026-04-22T08:56:47.400300",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 57728,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-489",
              "timestamp": "2026-04-22T08:56:47.400300",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 57728,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-488",
              "timestamp": "2026-04-22T08:56:47.400300",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 57728,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-487",
              "timestamp": "2026-04-22T08:56:39.380700",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 57727,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-486",
              "timestamp": "2026-04-22T08:56:37.393400",
              "price": 0.665,
              "size": 400.0,
              "notional": 266.0,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 57726,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            }
          ],
          "peer_comparison": [
            {
              "ticker": "CRPU",
              "currency": "SGD",
              "is_target": true,
              "retail_pct": 0.5852128947078886,
              "mixed_pct": 0.25679392672461215,
              "instit_pct": 0.09539003190670041,
              "ambiguous_pct": 0.06183298492683464,
              "unobservable_pct": 0.0007701617339641324,
              "unclear_pct": 0.06260314666079878,
              "retail_qty_pct": 0.0858616348669278,
              "mixed_qty_pct": 0.3033774645382603,
              "instit_qty_pct": 0.38683832441817473,
              "ambiguous_qty_pct": 0.2145628296385734,
              "unobservable_qty_pct": 0.009359746538063748,
              "unclear_qty_pct": 0.22392257617663713,
              "retail_notional_pct": 0.08564914369975701,
              "mixed_notional_pct": 0.3027569743064834,
              "instit_notional_pct": 0.3872921784262886,
              "ambiguous_notional_pct": 0.2146426905051685,
              "unobservable_notional_pct": 0.00965901306230248,
              "unclear_notional_pct": 0.22430170356747098,
              "run_retail_pct": 0.8138207619929045,
              "run_mixed_pct": 0.16149930587690883,
              "run_instit_pct": 0.014807959278111986,
              "run_unclear_pct": 0.009871972852074657,
              "avg_trade_size": 1524.9496094179779,
              "avg_run_notional": 2137.9403054141603,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.5300015424957581,
              "medium_confidence_pct": 0.27903748264692274,
              "low_confidence_pct": 0.019589696128335648,
              "na_confidence_pct": 0.1713712787289835,
              "avg_feature_coverage": 0.8674302020669442,
              "observable_run_pct": 0.9998457504241863,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "AJBU",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.38525913962707387,
              "mixed_pct": 0.3252385846424901,
              "instit_pct": 0.24755542504771694,
              "ambiguous_pct": 0.04178534723241815,
              "unobservable_pct": 0.0001615034503009837,
              "unclear_pct": 0.04194685068271913,
              "retail_qty_pct": 0.11267272442604234,
              "mixed_qty_pct": 0.21733364113546988,
              "instit_qty_pct": 0.6062460215240548,
              "ambiguous_qty_pct": 0.05347585943651638,
              "unobservable_qty_pct": 0.01027175347791653,
              "unclear_qty_pct": 0.06374761291443291,
              "retail_notional_pct": 0.11219533459476318,
              "mixed_notional_pct": 0.21638940660534745,
              "instit_notional_pct": 0.6076283034989339,
              "ambiguous_notional_pct": 0.05360815246398805,
              "unobservable_notional_pct": 0.010178802836967418,
              "unclear_notional_pct": 0.06378695530095546,
              "run_retail_pct": 0.7339859229904773,
              "run_mixed_pct": 0.2362630862956172,
              "run_instit_pct": 0.015585260542970367,
              "run_unclear_pct": 0.014165730170935116,
              "avg_trade_size": 5880.508199970635,
              "avg_run_notional": 11844.839814869581,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.3814396403856391,
              "medium_confidence_pct": 0.33083929733246586,
              "low_confidence_pct": 0.03729224581534276,
              "na_confidence_pct": 0.2504288164665523,
              "avg_feature_coverage": 0.8828710001774411,
              "observable_run_pct": 0.9997634116046608,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "AU8U",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.5303726391015824,
              "mixed_pct": 0.27565084226646247,
              "instit_pct": 0.15460694231750893,
              "ambiguous_pct": 0.039305768249106685,
              "unobservable_pct": 6.380806533945891e-05,
              "unclear_pct": 0.039369576314446146,
              "retail_qty_pct": 0.10141669788674743,
              "mixed_qty_pct": 0.271361473032788,
              "instit_qty_pct": 0.5078605225547739,
              "ambiguous_qty_pct": 0.11530269602741818,
              "unobservable_qty_pct": 0.004058610498272489,
              "unclear_qty_pct": 0.11936130652569066,
              "retail_notional_pct": 0.10099741684507128,
              "mixed_notional_pct": 0.27176800111853566,
              "instit_notional_pct": 0.506642405874576,
              "ambiguous_notional_pct": 0.1163737707584682,
              "unobservable_notional_pct": 0.0042184054033488575,
              "unclear_notional_pct": 0.12059217616181707,
              "run_retail_pct": 0.8060259944860181,
              "run_mixed_pct": 0.17073651043718,
              "run_instit_pct": 0.017132729421031903,
              "run_unclear_pct": 0.006104765655769988,
              "avg_trade_size": 1217.5913731495662,
              "avg_run_notional": 1878.89838519102,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.4995076801890508,
              "medium_confidence_pct": 0.2947026388341867,
              "low_confidence_pct": 0.028948404883812524,
              "na_confidence_pct": 0.17684127609294997,
              "avg_feature_coverage": 0.8696730996455297,
              "observable_run_pct": 0.9999015360378102,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "ODBU",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.25199203187250996,
              "mixed_pct": 0.15438247011952191,
              "instit_pct": 0.22211155378486055,
              "ambiguous_pct": 0.3715139442231076,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.3715139442231076,
              "retail_qty_pct": 0.0712159339484548,
              "mixed_qty_pct": 0.1428759395404681,
              "instit_qty_pct": 0.48328152497491816,
              "ambiguous_qty_pct": 0.30262660153615895,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.30262660153615895,
              "retail_notional_pct": 0.07150649927946959,
              "mixed_notional_pct": 0.14397940061475162,
              "instit_notional_pct": 0.4820868288715677,
              "ambiguous_notional_pct": 0.30242727123421115,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.30242727123421115,
              "run_retail_pct": 0.46596858638743455,
              "run_mixed_pct": 0.18324607329842932,
              "run_instit_pct": 0.10209424083769633,
              "run_unclear_pct": 0.2486910994764398,
              "avg_trade_size": 3089.8690239043826,
              "avg_run_notional": 8121.017015706806,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.04450261780104712,
              "medium_confidence_pct": 0.1544502617801047,
              "low_confidence_pct": 0.36910994764397903,
              "na_confidence_pct": 0.4319371727748691,
              "avg_feature_coverage": 0.8735602094240836,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "JYEU",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.5036098923015556,
              "mixed_pct": 0.31914639010769846,
              "instit_pct": 0.1299760670123654,
              "ambiguous_pct": 0.04710809732748305,
              "unobservable_pct": 0.00015955325089748703,
              "unclear_pct": 0.04726765057838054,
              "retail_qty_pct": 0.07134907535051933,
              "mixed_qty_pct": 0.22380808080513923,
              "instit_qty_pct": 0.41831181933659384,
              "ambiguous_qty_pct": 0.04734185487565204,
              "unobservable_qty_pct": 0.23918916963209555,
              "unclear_qty_pct": 0.2865310245077476,
              "retail_notional_pct": 0.07156781509871561,
              "mixed_notional_pct": 0.22353804374263242,
              "instit_notional_pct": 0.4208268523478316,
              "ambiguous_notional_pct": 0.048024524033459755,
              "unobservable_notional_pct": 0.23604276477736066,
              "unclear_notional_pct": 0.28406728881082044,
              "run_retail_pct": 0.7815769328910437,
              "run_mixed_pct": 0.2051543761163562,
              "run_instit_pct": 0.005549885174789487,
              "run_unclear_pct": 0.007718805817810666,
              "avg_trade_size": 4327.916102712405,
              "avg_run_notional": 6921.463172684358,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.3926065322786425,
              "medium_confidence_pct": 0.35260908394998725,
              "low_confidence_pct": 0.04191120183720337,
              "na_confidence_pct": 0.21287318193416688,
              "avg_feature_coverage": 0.8814637024751211,
              "observable_run_pct": 0.999744832865527,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "BMGU",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.09523809523809523,
              "mixed_pct": 0.047619047619047616,
              "instit_pct": 0.23809523809523808,
              "ambiguous_pct": 0.3333333333333333,
              "unobservable_pct": 0.2857142857142857,
              "unclear_pct": 0.6190476190476191,
              "retail_qty_pct": 0.028708133971291867,
              "mixed_qty_pct": 0.009569377990430622,
              "instit_qty_pct": 0.33014354066985646,
              "ambiguous_qty_pct": 0.2822966507177033,
              "unobservable_qty_pct": 0.3492822966507177,
              "unclear_qty_pct": 0.631578947368421,
              "retail_notional_pct": 0.03068518626140524,
              "mixed_notional_pct": 0.010344627186610101,
              "instit_notional_pct": 0.32812227581798104,
              "ambiguous_notional_pct": 0.29598419247980473,
              "unobservable_notional_pct": 0.33486371825419886,
              "unclear_notional_pct": 0.6308479107340036,
              "run_retail_pct": 0.13333333333333333,
              "run_mixed_pct": 0.06666666666666667,
              "run_instit_pct": 0.26666666666666666,
              "run_unclear_pct": 0.5333333333333333,
              "avg_trade_size": 409.6904761904762,
              "avg_run_notional": 573.5666666666667,
              "dominant_bucket": "AMBIGUOUS",
              "dominant_label": "Unclassified Flow",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.4,
              "na_confidence_pct": 0.6,
              "avg_feature_coverage": 0.8333333333333333,
              "observable_run_pct": 0.9333333333333333,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "D5IU",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.7121212121212122,
              "mixed_pct": 0.27525252525252525,
              "instit_pct": 0.012626262626262626,
              "ambiguous_pct": 0.0,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.0,
              "retail_qty_pct": 0.12891161664355832,
              "mixed_qty_pct": 0.7320630282317642,
              "instit_qty_pct": 0.13902535512467754,
              "ambiguous_qty_pct": 0.0,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.0,
              "retail_notional_pct": 0.13273772510577075,
              "mixed_notional_pct": 0.7331473962715047,
              "instit_notional_pct": 0.1341148786227246,
              "ambiguous_notional_pct": 0.0,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.0,
              "run_retail_pct": 0.8363636363636363,
              "run_mixed_pct": 0.1606060606060606,
              "run_instit_pct": 0.0030303030303030303,
              "run_unclear_pct": 0.0,
              "avg_trade_size": 1242.6818181818182,
              "avg_run_notional": 1491.2181818181818,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.5636363636363636,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.27575757575757576,
              "na_confidence_pct": 0.1606060606060606,
              "avg_feature_coverage": 0.8518181818181816,
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
          "n_trades": 22714,
          "n_runs": 15731,
          "n_trade_days": 63,
          "first_trade_date": "2026-01-21",
          "last_trade_date": "2026-04-22",
          "period_days": 63,
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
            "retail_pct": 0.5714977546887382,
            "mixed_pct": 0.2490974729241877,
            "instit_pct": 0.12895130756361714,
            "ambiguous_pct": 0.050145284846350266,
            "unobservable_pct": 0.00030817997710663026,
            "unclear_pct": 0.050453464823456896,
            "retail_qty_pct": 0.07788560388644251,
            "mixed_qty_pct": 0.29936789139070424,
            "instit_qty_pct": 0.46499236479681477,
            "ambiguous_qty_pct": 0.15514158109447926,
            "unobservable_qty_pct": 0.0026125588315591883,
            "unclear_qty_pct": 0.15775413992603846,
            "retail_notional_pct": 0.07785382552792916,
            "mixed_notional_pct": 0.29988991600390186,
            "instit_notional_pct": 0.46496148537157,
            "ambiguous_notional_pct": 0.15467572241265243,
            "unobservable_notional_pct": 0.002619050683946541,
            "unclear_notional_pct": 0.15729477309659898
          },
          "run_composition": {
            "retail_pct": 0.8199097323755642,
            "mixed_pct": 0.15555273027779543,
            "instit_pct": 0.015828618651071134,
            "ambiguous_pct": 0.008645349945966562,
            "unobservable_pct": 6.356874960269532e-05,
            "unclear_pct": 0.008708918695569258,
            "retail_notional_pct": 0.07785382552792916,
            "mixed_notional_pct": 0.29988991600390186,
            "instit_notional_pct": 0.46496148537157,
            "unclear_notional_pct": 0.15729477309659898
          },
          "counts": {
            "trades": {
              "retail": 12981,
              "mixed": 5658,
              "institutional": 2929,
              "ambiguous": 1139,
              "unobservable": 7,
              "unclear": 1146
            },
            "runs": {
              "retail": 12898,
              "mixed": 2447,
              "institutional": 249,
              "ambiguous": 136,
              "unobservable": 1,
              "unclear": 137
            }
          },
          "confidence": {
            "high": 0.5216451592397178,
            "medium": 0.2925433856716038,
            "low": 0.02154980611531371,
            "na": 0.1642616489733647
          },
          "confidence_counts": {
            "high": 8206,
            "medium": 4602,
            "low": 339,
            "na": 2584
          },
          "trade_confidence": {
            "high": 0.40208681870212204,
            "medium": 0.27709782512987585,
            "low": 0.02126441842035749,
            "na": 0.29955093774764463
          },
          "trade_confidence_counts": {
            "high": 9133,
            "medium": 6294,
            "low": 483,
            "na": 6804
          },
          "observability": {
            "avg_feature_coverage": 0.8652692136545671,
            "observable_run_pct": 0.9999364312503973,
            "ambiguous_run_pct": 0.008645349945966562,
            "unobservable_run_pct": 6.356874960269532e-05
          },
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "dominant_share": 0.8199097323755642,
          "dominance_gap": 0.6643570020977687,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 17010,
              "MULTI_FILL_SINGLE_PRICE": 5610,
              "WALK_BOOK": 87,
              "UNOBSERVABLE": 7
            },
            "d2_information": {
              "NEUTRAL_OR_REVERSING": 21891,
              "MOMENTUM_REACTIVE": 541,
              "PERSISTENT_POSITIVE_IMPACT": 270,
              "UNOBSERVABLE": 11,
              "SHORT_HORIZON_POSITIVE_IMPACT": 1
            },
            "d3_urgency": {
              "IMMEDIATE": 15604,
              "ADAPTIVE": 127
            },
            "participant_confidence": {
              "HIGH": 8206,
              "MEDIUM": 4602,
              "NA": 2584,
              "LOW": 339
            }
          },
          "trade_size": {
            "avg": 2250.4368231046933,
            "median": 133.0
          },
          "run_size": {
            "avg": 3249.407030703706,
            "median": 132.0,
            "avg_length": 1.1519293115504419
          },
          "recent_trades": [
            {
              "trade_id": "BMLL-515",
              "timestamp": "2026-04-22T08:59:45.342900",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 57743,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-514",
              "timestamp": "2026-04-22T08:59:38.340400",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 57742,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-513",
              "timestamp": "2026-04-22T08:59:24.647600",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 57741,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-512",
              "timestamp": "2026-04-22T08:59:10.801400",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 57740,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-511",
              "timestamp": "2026-04-22T08:58:58.533200",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 57739,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-510",
              "timestamp": "2026-04-22T08:58:41.012100",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 57738,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-509",
              "timestamp": "2026-04-22T08:58:25.214100",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 57737,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-508",
              "timestamp": "2026-04-22T08:58:11.849900",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 57736,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-507",
              "timestamp": "2026-04-22T08:57:55.414500",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 57735,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-506",
              "timestamp": "2026-04-22T08:57:54.208800",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 57734,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-505",
              "timestamp": "2026-04-22T08:57:45.922900",
              "price": 0.665,
              "size": 2200.0,
              "notional": 1463.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 57733,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-504",
              "timestamp": "2026-04-22T08:57:45.892800",
              "price": 0.665,
              "size": 2200.0,
              "notional": 1463.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 57733,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-503",
              "timestamp": "2026-04-22T08:57:44.897700",
              "price": 0.665,
              "size": 2200.0,
              "notional": 1463.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 57733,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-502",
              "timestamp": "2026-04-22T08:57:44.897700",
              "price": 0.665,
              "size": 2300.0,
              "notional": 1529.5,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 57733,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-501",
              "timestamp": "2026-04-22T08:57:42.696900",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 57732,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-500",
              "timestamp": "2026-04-22T08:57:31.905000",
              "price": 0.665,
              "size": 700.0,
              "notional": 465.5,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 57731,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-499",
              "timestamp": "2026-04-22T08:57:31.905000",
              "price": 0.665,
              "size": 500.0,
              "notional": 332.5,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 57731,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-498",
              "timestamp": "2026-04-22T08:57:31.905000",
              "price": 0.665,
              "size": 500.0,
              "notional": 332.5,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 57731,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-497",
              "timestamp": "2026-04-22T08:57:31.904900",
              "price": 0.665,
              "size": 1100.0,
              "notional": 731.5,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 57731,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-496",
              "timestamp": "2026-04-22T08:57:30.909200",
              "price": 0.665,
              "size": 1500.0,
              "notional": 997.5,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 57731,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-495",
              "timestamp": "2026-04-22T08:57:30.909100",
              "price": 0.665,
              "size": 1800.0,
              "notional": 1197.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 57731,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-494",
              "timestamp": "2026-04-22T08:57:30.909100",
              "price": 0.665,
              "size": 1700.0,
              "notional": 1130.5,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 57731,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-493",
              "timestamp": "2026-04-22T08:57:30.909100",
              "price": 0.665,
              "size": 1200.0,
              "notional": 798.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 57731,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-492",
              "timestamp": "2026-04-22T08:57:25.061200",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 57730,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-491",
              "timestamp": "2026-04-22T08:57:09.332300",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 57729,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-490",
              "timestamp": "2026-04-22T08:56:47.400300",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 57728,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-489",
              "timestamp": "2026-04-22T08:56:47.400300",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 57728,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-488",
              "timestamp": "2026-04-22T08:56:47.400300",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 57728,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-487",
              "timestamp": "2026-04-22T08:56:39.380700",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 57727,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-486",
              "timestamp": "2026-04-22T08:56:37.393400",
              "price": 0.665,
              "size": 400.0,
              "notional": 266.0,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 57726,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            }
          ],
          "peer_comparison": [
            {
              "ticker": "CRPU",
              "currency": "SGD",
              "is_target": true,
              "retail_pct": 0.5714977546887382,
              "mixed_pct": 0.2490974729241877,
              "instit_pct": 0.12895130756361714,
              "ambiguous_pct": 0.050145284846350266,
              "unobservable_pct": 0.00030817997710663026,
              "unclear_pct": 0.050453464823456896,
              "retail_qty_pct": 0.07788560388644251,
              "mixed_qty_pct": 0.29936789139070424,
              "instit_qty_pct": 0.46499236479681477,
              "ambiguous_qty_pct": 0.15514158109447926,
              "unobservable_qty_pct": 0.0026125588315591883,
              "unclear_qty_pct": 0.15775413992603846,
              "retail_notional_pct": 0.07785382552792916,
              "mixed_notional_pct": 0.29988991600390186,
              "instit_notional_pct": 0.46496148537157,
              "ambiguous_notional_pct": 0.15467572241265243,
              "unobservable_notional_pct": 0.002619050683946541,
              "unclear_notional_pct": 0.15729477309659898,
              "run_retail_pct": 0.8199097323755642,
              "run_mixed_pct": 0.15555273027779543,
              "run_instit_pct": 0.015828618651071134,
              "run_unclear_pct": 0.008708918695569258,
              "avg_trade_size": 2250.4368231046933,
              "avg_run_notional": 3249.407030703706,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.5216451592397178,
              "medium_confidence_pct": 0.2925433856716038,
              "low_confidence_pct": 0.02154980611531371,
              "na_confidence_pct": 0.1642616489733647,
              "avg_feature_coverage": 0.8652692136545671,
              "observable_run_pct": 0.9999364312503973,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "AJBU",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.3733185014127874,
              "mixed_pct": 0.33652501243816124,
              "instit_pct": 0.2420090681235743,
              "ambiguous_pct": 0.047818862823509535,
              "unobservable_pct": 0.0003285552019675763,
              "unclear_pct": 0.04814741802547711,
              "retail_qty_pct": 0.09918576505059859,
              "mixed_qty_pct": 0.22164852512220348,
              "instit_qty_pct": 0.618007201234829,
              "ambiguous_qty_pct": 0.052607380134964306,
              "unobservable_qty_pct": 0.008551128457404671,
              "unclear_qty_pct": 0.061158508592368974,
              "retail_notional_pct": 0.09905687298294369,
              "mixed_notional_pct": 0.22147390264533737,
              "instit_notional_pct": 0.6181766015745404,
              "ambiguous_notional_pct": 0.052747274585549155,
              "unobservable_notional_pct": 0.00854534821162948,
              "unclear_notional_pct": 0.061292622797178634,
              "run_retail_pct": 0.7208147374418383,
              "run_mixed_pct": 0.24693761276232076,
              "run_instit_pct": 0.016551134745038457,
              "run_unclear_pct": 0.01569651505080239,
              "avg_trade_size": 6464.275821341069,
              "avg_run_notional": 13077.958606400154,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.31660810939132084,
              "medium_confidence_pct": 0.36963251353147847,
              "low_confidence_pct": 0.05112524926407749,
              "na_confidence_pct": 0.2626341278131232,
              "avg_feature_coverage": 0.885757762795556,
              "observable_run_pct": 0.9997056309942076,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "JYEU",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.46672426305422127,
              "mixed_pct": 0.32671666033106406,
              "instit_pct": 0.15993364896153714,
              "ambiguous_pct": 0.04636278812592874,
              "unobservable_pct": 0.000262639527248851,
              "unclear_pct": 0.04662542765317759,
              "retail_qty_pct": 0.08268007620443858,
              "mixed_qty_pct": 0.23091404020739129,
              "instit_qty_pct": 0.5437193433134923,
              "ambiguous_qty_pct": 0.04604746059360421,
              "unobservable_qty_pct": 0.09663907968107369,
              "unclear_qty_pct": 0.1426865402746779,
              "retail_notional_pct": 0.082363702869403,
              "mixed_notional_pct": 0.22899729804545801,
              "instit_notional_pct": 0.5512926850460161,
              "ambiguous_notional_pct": 0.04599043183042864,
              "unobservable_notional_pct": 0.09135588220869413,
              "unclear_notional_pct": 0.13734631403912279,
              "run_retail_pct": 0.7655234041552517,
              "run_mixed_pct": 0.2179449493821209,
              "run_instit_pct": 0.007548589636562453,
              "run_unclear_pct": 0.008983056826064973,
              "avg_trade_size": 4404.213060026956,
              "avg_run_notional": 7492.428677468283,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.37426659925454736,
              "medium_confidence_pct": 0.35494832390739456,
              "low_confidence_pct": 0.043857070629872194,
              "na_confidence_pct": 0.22692800620818587,
              "avg_feature_coverage": 0.8839827628778703,
              "observable_run_pct": 0.9996002304553846,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "AU8U",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.4799564155287253,
              "mixed_pct": 0.2797138890353421,
              "instit_pct": 0.19765909210734434,
              "ambiguous_pct": 0.042653028945009754,
              "unobservable_pct": 1.7574383578495984e-05,
              "unclear_pct": 0.04267060332858825,
              "retail_qty_pct": 0.10249754396436343,
              "mixed_qty_pct": 0.27248323571049304,
              "instit_qty_pct": 0.5485817861760605,
              "ambiguous_qty_pct": 0.07555121620157898,
              "unobservable_qty_pct": 0.0008862179475040845,
              "unclear_qty_pct": 0.07643743414908306,
              "retail_notional_pct": 0.10333594275826213,
              "mixed_notional_pct": 0.2729422159634347,
              "instit_notional_pct": 0.5479911576246413,
              "ambiguous_notional_pct": 0.07485979464271374,
              "unobservable_notional_pct": 0.0008708890109480354,
              "unclear_notional_pct": 0.07573068365366177,
              "run_retail_pct": 0.7890462307371928,
              "run_mixed_pct": 0.18432795858868328,
              "run_instit_pct": 0.01924793240911525,
              "run_unclear_pct": 0.007377878265008627,
              "avg_trade_size": 1624.394799739899,
              "avg_run_notional": 2749.737862200274,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.4683762717915154,
              "medium_confidence_pct": 0.31516629975605404,
              "low_confidence_pct": 0.02475159159873862,
              "na_confidence_pct": 0.1917058368536919,
              "avg_feature_coverage": 0.8720964479086093,
              "observable_run_pct": 0.9999702504908669,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "ODBU",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.34450816056462286,
              "mixed_pct": 0.1627701808557565,
              "instit_pct": 0.18879576532862816,
              "ambiguous_pct": 0.3039258932509925,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.3039258932509925,
              "retail_qty_pct": 0.08168437787087653,
              "mixed_qty_pct": 0.15267036310683407,
              "instit_qty_pct": 0.4063043634065454,
              "ambiguous_qty_pct": 0.35934089561574395,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.35934089561574395,
              "retail_notional_pct": 0.0826332431845274,
              "mixed_notional_pct": 0.15399598210474075,
              "instit_notional_pct": 0.4029330598351047,
              "ambiguous_notional_pct": 0.3604377148756272,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.3604377148756272,
              "run_retail_pct": 0.5595432300163132,
              "run_mixed_pct": 0.17862969004893964,
              "run_instit_pct": 0.07585644371941272,
              "run_unclear_pct": 0.1859706362153344,
              "avg_trade_size": 3572.5701367445963,
              "avg_run_notional": 6606.049347471452,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.17781402936378465,
              "medium_confidence_pct": 0.13784665579119088,
              "low_confidence_pct": 0.3197389885807504,
              "na_confidence_pct": 0.3646003262642741,
              "avg_feature_coverage": 0.851957585644372,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "BMGU",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.11507936507936507,
              "mixed_pct": 0.3306878306878307,
              "instit_pct": 0.09788359788359788,
              "ambiguous_pct": 0.44312169312169314,
              "unobservable_pct": 0.013227513227513227,
              "unclear_pct": 0.4563492063492064,
              "retail_qty_pct": 0.057911065149948295,
              "mixed_qty_pct": 0.13478110996208204,
              "instit_qty_pct": 0.40675629093416066,
              "ambiguous_qty_pct": 0.3578076525336091,
              "unobservable_qty_pct": 0.04274388142019993,
              "unclear_qty_pct": 0.400551533953809,
              "retail_notional_pct": 0.059964403932201135,
              "mixed_notional_pct": 0.14193516192884112,
              "instit_notional_pct": 0.3902967447895008,
              "ambiguous_notional_pct": 0.36629019112094346,
              "unobservable_notional_pct": 0.04151349822851345,
              "unclear_notional_pct": 0.40780368934945693,
              "run_retail_pct": 0.35609756097560974,
              "run_mixed_pct": 0.23414634146341465,
              "run_instit_pct": 0.1073170731707317,
              "run_unclear_pct": 0.3024390243902439,
              "avg_trade_size": 159.04497354497354,
              "avg_run_notional": 586.5268292682927,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Mixed, leaning retail-like",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.2,
              "low_confidence_pct": 0.2634146341463415,
              "na_confidence_pct": 0.5365853658536586,
              "avg_feature_coverage": 0.8880487804878047,
              "observable_run_pct": 0.9853658536585366,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "D5IU",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.6171428571428571,
              "mixed_pct": 0.24428571428571427,
              "instit_pct": 0.12142857142857143,
              "ambiguous_pct": 0.017142857142857144,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.017142857142857144,
              "retail_qty_pct": 0.12282237105310576,
              "mixed_qty_pct": 0.49898491636661263,
              "instit_qty_pct": 0.3502906477808216,
              "ambiguous_qty_pct": 0.027902064799460054,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.027902064799460054,
              "retail_notional_pct": 0.1226254810595638,
              "mixed_notional_pct": 0.5015697525306828,
              "instit_notional_pct": 0.3481770097767034,
              "ambiguous_notional_pct": 0.027627756633050025,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.027627756633050025,
              "run_retail_pct": 0.813953488372093,
              "run_mixed_pct": 0.16020671834625322,
              "run_instit_pct": 0.01614987080103359,
              "run_unclear_pct": 0.009689922480620155,
              "avg_trade_size": 2803.7934761904767,
              "avg_run_notional": 3803.5958010335917,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.4437984496124031,
              "medium_confidence_pct": 0.1479328165374677,
              "low_confidence_pct": 0.23837209302325582,
              "na_confidence_pct": 0.1698966408268734,
              "avg_feature_coverage": 0.8557170542635657,
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
          "n_trades": 47941,
          "n_runs": 34216,
          "n_trade_days": 126,
          "first_trade_date": "2025-10-22",
          "last_trade_date": "2026-04-22",
          "period_days": 126,
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
            "retail_pct": 0.5955653824492605,
            "mixed_pct": 0.2474708495859494,
            "instit_pct": 0.11195010533781106,
            "ambiguous_pct": 0.04486764981956989,
            "unobservable_pct": 0.00014601280740910702,
            "unclear_pct": 0.04501366262697899,
            "retail_qty_pct": 0.09302605141591248,
            "mixed_qty_pct": 0.3008990430168303,
            "instit_qty_pct": 0.47910085245196604,
            "ambiguous_qty_pct": 0.1254807502055158,
            "unobservable_qty_pct": 0.0014933029097753848,
            "unclear_qty_pct": 0.1269740531152912,
            "retail_notional_pct": 0.09312810060553658,
            "mixed_notional_pct": 0.30112405644742046,
            "instit_notional_pct": 0.4792890435281696,
            "ambiguous_notional_pct": 0.12497520302380542,
            "unobservable_notional_pct": 0.0014835963950679347,
            "unclear_notional_pct": 0.12645879941887336
          },
          "run_composition": {
            "retail_pct": 0.8259878419452887,
            "mixed_pct": 0.1529985971475333,
            "instit_pct": 0.013970072480710779,
            "ambiguous_pct": 0.007014262333411269,
            "unobservable_pct": 2.922609305588029e-05,
            "unclear_pct": 0.0070434884264671494,
            "retail_notional_pct": 0.09312810060553658,
            "mixed_notional_pct": 0.30112405644742046,
            "instit_notional_pct": 0.4792890435281696,
            "unclear_notional_pct": 0.12645879941887336
          },
          "counts": {
            "trades": {
              "retail": 28552,
              "mixed": 11864,
              "institutional": 5367,
              "ambiguous": 2151,
              "unobservable": 7,
              "unclear": 2158
            },
            "runs": {
              "retail": 28262,
              "mixed": 5235,
              "institutional": 478,
              "ambiguous": 240,
              "unobservable": 1,
              "unclear": 241
            }
          },
          "confidence": {
            "high": 0.4989478606499883,
            "medium": 0.3119593172784662,
            "low": 0.02905073649754501,
            "na": 0.16004208557400046
          },
          "confidence_counts": {
            "high": 17072,
            "medium": 10674,
            "low": 994,
            "na": 5476
          },
          "trade_confidence": {
            "high": 0.3896247470849586,
            "medium": 0.289230512504954,
            "low": 0.028660228197159007,
            "na": 0.29248451221292837
          },
          "trade_confidence_counts": {
            "high": 18679,
            "medium": 13866,
            "low": 1374,
            "na": 14022
          },
          "observability": {
            "avg_feature_coverage": 0.8653539279869066,
            "observable_run_pct": 0.9999707739069441,
            "ambiguous_run_pct": 0.007014262333411269,
            "unobservable_run_pct": 2.922609305588029e-05
          },
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "dominant_share": 0.8259878419452887,
          "dominance_gap": 0.6729892447977555,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 37225,
              "MULTI_FILL_SINGLE_PRICE": 10498,
              "WALK_BOOK": 211,
              "UNOBSERVABLE": 7
            },
            "d2_information": {
              "NEUTRAL_OR_REVERSING": 46572,
              "MOMENTUM_REACTIVE": 911,
              "PERSISTENT_POSITIVE_IMPACT": 425,
              "UNOBSERVABLE": 29,
              "SHORT_HORIZON_POSITIVE_IMPACT": 4
            },
            "d3_urgency": {
              "IMMEDIATE": 33917,
              "ADAPTIVE": 293,
              "SCHEDULED": 6
            },
            "participant_confidence": {
              "HIGH": 17072,
              "MEDIUM": 10674,
              "NA": 5476,
              "LOW": 994
            }
          },
          "trade_size": {
            "avg": 1882.2681420913207,
            "median": 136.0
          },
          "run_size": {
            "avg": 2637.2988368014962,
            "median": 137.0,
            "avg_length": 1.1524433013794715
          },
          "recent_trades": [
            {
              "trade_id": "BMLL-515",
              "timestamp": "2026-04-22T08:59:45.342900",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 57743,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-514",
              "timestamp": "2026-04-22T08:59:38.340400",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 57742,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-513",
              "timestamp": "2026-04-22T08:59:24.647600",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 57741,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-512",
              "timestamp": "2026-04-22T08:59:10.801400",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 57740,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-511",
              "timestamp": "2026-04-22T08:58:58.533200",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 57739,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-510",
              "timestamp": "2026-04-22T08:58:41.012100",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 57738,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-509",
              "timestamp": "2026-04-22T08:58:25.214100",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 57737,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-508",
              "timestamp": "2026-04-22T08:58:11.849900",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 57736,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-507",
              "timestamp": "2026-04-22T08:57:55.414500",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 57735,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-506",
              "timestamp": "2026-04-22T08:57:54.208800",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 57734,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-505",
              "timestamp": "2026-04-22T08:57:45.922900",
              "price": 0.665,
              "size": 2200.0,
              "notional": 1463.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 57733,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-504",
              "timestamp": "2026-04-22T08:57:45.892800",
              "price": 0.665,
              "size": 2200.0,
              "notional": 1463.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 57733,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-503",
              "timestamp": "2026-04-22T08:57:44.897700",
              "price": 0.665,
              "size": 2200.0,
              "notional": 1463.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 57733,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-502",
              "timestamp": "2026-04-22T08:57:44.897700",
              "price": 0.665,
              "size": 2300.0,
              "notional": 1529.5,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 57733,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-501",
              "timestamp": "2026-04-22T08:57:42.696900",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 57732,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-500",
              "timestamp": "2026-04-22T08:57:31.905000",
              "price": 0.665,
              "size": 700.0,
              "notional": 465.5,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 57731,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-499",
              "timestamp": "2026-04-22T08:57:31.905000",
              "price": 0.665,
              "size": 500.0,
              "notional": 332.5,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 57731,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-498",
              "timestamp": "2026-04-22T08:57:31.905000",
              "price": 0.665,
              "size": 500.0,
              "notional": 332.5,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 57731,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-497",
              "timestamp": "2026-04-22T08:57:31.904900",
              "price": 0.665,
              "size": 1100.0,
              "notional": 731.5,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 57731,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-496",
              "timestamp": "2026-04-22T08:57:30.909200",
              "price": 0.665,
              "size": 1500.0,
              "notional": 997.5,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 57731,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-495",
              "timestamp": "2026-04-22T08:57:30.909100",
              "price": 0.665,
              "size": 1800.0,
              "notional": 1197.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 57731,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-494",
              "timestamp": "2026-04-22T08:57:30.909100",
              "price": 0.665,
              "size": 1700.0,
              "notional": 1130.5,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 57731,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-493",
              "timestamp": "2026-04-22T08:57:30.909100",
              "price": 0.665,
              "size": 1200.0,
              "notional": 798.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 57731,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-492",
              "timestamp": "2026-04-22T08:57:25.061200",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 57730,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-491",
              "timestamp": "2026-04-22T08:57:09.332300",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 57729,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-490",
              "timestamp": "2026-04-22T08:56:47.400300",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 57728,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-489",
              "timestamp": "2026-04-22T08:56:47.400300",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 57728,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-488",
              "timestamp": "2026-04-22T08:56:47.400300",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 57728,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-487",
              "timestamp": "2026-04-22T08:56:39.380700",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 57727,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-486",
              "timestamp": "2026-04-22T08:56:37.393400",
              "price": 0.665,
              "size": 400.0,
              "notional": 266.0,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 57726,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            }
          ],
          "peer_comparison": [
            {
              "ticker": "CRPU",
              "currency": "SGD",
              "is_target": true,
              "retail_pct": 0.5955653824492605,
              "mixed_pct": 0.2474708495859494,
              "instit_pct": 0.11195010533781106,
              "ambiguous_pct": 0.04486764981956989,
              "unobservable_pct": 0.00014601280740910702,
              "unclear_pct": 0.04501366262697899,
              "retail_qty_pct": 0.09302605141591248,
              "mixed_qty_pct": 0.3008990430168303,
              "instit_qty_pct": 0.47910085245196604,
              "ambiguous_qty_pct": 0.1254807502055158,
              "unobservable_qty_pct": 0.0014933029097753848,
              "unclear_qty_pct": 0.1269740531152912,
              "retail_notional_pct": 0.09312810060553658,
              "mixed_notional_pct": 0.30112405644742046,
              "instit_notional_pct": 0.4792890435281696,
              "ambiguous_notional_pct": 0.12497520302380542,
              "unobservable_notional_pct": 0.0014835963950679347,
              "unclear_notional_pct": 0.12645879941887336,
              "run_retail_pct": 0.8259878419452887,
              "run_mixed_pct": 0.1529985971475333,
              "run_instit_pct": 0.013970072480710779,
              "run_unclear_pct": 0.0070434884264671494,
              "avg_trade_size": 1882.2681420913207,
              "avg_run_notional": 2637.2988368014962,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.4989478606499883,
              "medium_confidence_pct": 0.3119593172784662,
              "low_confidence_pct": 0.02905073649754501,
              "na_confidence_pct": 0.16004208557400046,
              "avg_feature_coverage": 0.8653539279869066,
              "observable_run_pct": 0.9999707739069441,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "AJBU",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.36582192824093146,
              "mixed_pct": 0.33127829424264443,
              "instit_pct": 0.2319197760681584,
              "ambiguous_pct": 0.07064540213094819,
              "unobservable_pct": 0.00033459931731751226,
              "unclear_pct": 0.0709800014482657,
              "retail_qty_pct": 0.09974574998638905,
              "mixed_qty_pct": 0.2242784391911332,
              "instit_qty_pct": 0.6154825083189096,
              "ambiguous_qty_pct": 0.047457611233250055,
              "unobservable_qty_pct": 0.013035691270318086,
              "unclear_qty_pct": 0.060493302503568144,
              "retail_notional_pct": 0.09967449922677371,
              "mixed_notional_pct": 0.22419083773943277,
              "instit_notional_pct": 0.6157058388656035,
              "ambiguous_notional_pct": 0.047456441469707865,
              "unobservable_notional_pct": 0.012972382698482181,
              "unclear_notional_pct": 0.060428824168190044,
              "run_retail_pct": 0.7216442120924081,
              "run_mixed_pct": 0.24600157044261686,
              "run_instit_pct": 0.01523432656940943,
              "run_unclear_pct": 0.01711989089556557,
              "avg_trade_size": 5697.516016445306,
              "avg_run_notional": 11787.285183855436,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.3120428152250279,
              "medium_confidence_pct": 0.3714820019010621,
              "low_confidence_pct": 0.053353721535727566,
              "na_confidence_pct": 0.2631214613381824,
              "avg_feature_coverage": 0.8864420176054881,
              "observable_run_pct": 0.9996022234161259,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "JYEU",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.4484620057967425,
              "mixed_pct": 0.3097271506572608,
              "instit_pct": 0.16395726353508422,
              "ambiguous_pct": 0.07758657384655272,
              "unobservable_pct": 0.0002670061643597076,
              "unclear_pct": 0.07785358001091243,
              "retail_qty_pct": 0.08268445281342102,
              "mixed_qty_pct": 0.21694234713917862,
              "instit_qty_pct": 0.5688743561723627,
              "ambiguous_qty_pct": 0.06568072250783426,
              "unobservable_qty_pct": 0.0658181213672034,
              "unclear_qty_pct": 0.13149884387503766,
              "retail_notional_pct": 0.08252467385557792,
              "mixed_notional_pct": 0.2152811815353843,
              "instit_notional_pct": 0.5742603506069003,
              "ambiguous_notional_pct": 0.06654522649244736,
              "unobservable_notional_pct": 0.06138856750969011,
              "unclear_notional_pct": 0.12793379400213747,
              "run_retail_pct": 0.7665726326534835,
              "run_mixed_pct": 0.21263872316064641,
              "run_instit_pct": 0.008856210728154335,
              "run_unclear_pct": 0.011932433457715733,
              "avg_trade_size": 4079.82853556793,
              "avg_run_notional": 7271.979266465723,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.37851334294365546,
              "medium_confidence_pct": 0.3551243938944566,
              "low_confidence_pct": 0.041791106543525795,
              "na_confidence_pct": 0.22457115661836216,
              "avg_feature_coverage": 0.8832870060627797,
              "observable_run_pct": 0.9995723636564287,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "AU8U",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.49453404832398185,
              "mixed_pct": 0.26975713782894056,
              "instit_pct": 0.19425868030394003,
              "ambiguous_pct": 0.04143978136193296,
              "unobservable_pct": 1.0352181204579806e-05,
              "unclear_pct": 0.041450133543137535,
              "retail_qty_pct": 0.1150903460619976,
              "mixed_qty_pct": 0.2708573558305074,
              "instit_qty_pct": 0.5358729311511014,
              "ambiguous_qty_pct": 0.07764101761828732,
              "unobservable_qty_pct": 0.0005383493381063907,
              "unclear_qty_pct": 0.07817936695639371,
              "retail_notional_pct": 0.11636925959349924,
              "mixed_notional_pct": 0.2708038368591854,
              "instit_notional_pct": 0.5349368265330484,
              "ambiguous_notional_pct": 0.0773867916778691,
              "unobservable_notional_pct": 0.0005032853363978952,
              "unclear_notional_pct": 0.077890077014267,
              "run_retail_pct": 0.7965671565013117,
              "run_mixed_pct": 0.17606611910355116,
              "run_instit_pct": 0.01953051321181776,
              "run_unclear_pct": 0.00783621118331933,
              "avg_trade_size": 1655.7390370401044,
              "avg_run_notional": 2742.520953720057,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.46377681373137397,
              "medium_confidence_pct": 0.3274404567979561,
              "low_confidence_pct": 0.02488039918379945,
              "na_confidence_pct": 0.18390233028687047,
              "avg_feature_coverage": 0.8702395445738094,
              "observable_run_pct": 0.999982852929577,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "D5IU",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.5344627138349112,
              "mixed_pct": 0.21740574655372863,
              "instit_pct": 0.17372529480152799,
              "ambiguous_pct": 0.07440624480983225,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.07440624480983225,
              "retail_qty_pct": 0.11837349078894685,
              "mixed_qty_pct": 0.43498516037432117,
              "instit_qty_pct": 0.38517012765490954,
              "ambiguous_qty_pct": 0.061471221181822425,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.061471221181822425,
              "retail_notional_pct": 0.11506619794358508,
              "mixed_notional_pct": 0.4119349935253528,
              "instit_notional_pct": 0.3976258379723779,
              "ambiguous_notional_pct": 0.07537297055868424,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.07537297055868424,
              "run_retail_pct": 0.7757150025087808,
              "run_mixed_pct": 0.1638233818364275,
              "run_instit_pct": 0.02985449071751129,
              "run_unclear_pct": 0.030607124937280482,
              "avg_trade_size": 1806.6070586281348,
              "avg_run_notional": 2728.946588058204,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.369292523833417,
              "medium_confidence_pct": 0.21851480180632213,
              "low_confidence_pct": 0.21776216758655292,
              "na_confidence_pct": 0.194430506773708,
              "avg_feature_coverage": 0.8552308078273956,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "ODBU",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.40754633715798766,
              "mixed_pct": 0.19329214474845544,
              "instit_pct": 0.1440864960282436,
              "ambiguous_pct": 0.25507502206531335,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.25507502206531335,
              "retail_qty_pct": 0.09257628719886632,
              "mixed_qty_pct": 0.17021823334907887,
              "instit_qty_pct": 0.37667264997638167,
              "ambiguous_qty_pct": 0.3605328294756731,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.3605328294756731,
              "retail_notional_pct": 0.09290080189007444,
              "mixed_notional_pct": 0.17060446146003236,
              "instit_notional_pct": 0.375452708538965,
              "ambiguous_notional_pct": 0.3610420281109282,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.3610420281109282,
              "run_retail_pct": 0.6390778533635676,
              "run_mixed_pct": 0.1655328798185941,
              "run_instit_pct": 0.055933484504913075,
              "run_unclear_pct": 0.13945578231292516,
              "avg_trade_size": 3027.008274492498,
              "avg_run_notional": 5184.581065759638,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.21882086167800455,
              "medium_confidence_pct": 0.19160997732426305,
              "low_confidence_pct": 0.28458049886621317,
              "na_confidence_pct": 0.30498866213151926,
              "avg_feature_coverage": 0.853628117913832,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "BMGU",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.14115544967242405,
              "mixed_pct": 0.19416319237641452,
              "instit_pct": 0.21322215604526504,
              "ambiguous_pct": 0.4443120905300774,
              "unobservable_pct": 0.00714711137581894,
              "unclear_pct": 0.45145920190589633,
              "retail_qty_pct": 0.008152789985246801,
              "mixed_qty_pct": 0.015456796355591194,
              "instit_qty_pct": 0.07350912833273211,
              "ambiguous_qty_pct": 0.050547297908530166,
              "unobservable_qty_pct": 0.8523339874178997,
              "unclear_qty_pct": 0.9028812853264299,
              "retail_notional_pct": 0.008202095392666593,
              "mixed_notional_pct": 0.015368168800070576,
              "instit_notional_pct": 0.07094534917811979,
              "ambiguous_notional_pct": 0.05052160701781122,
              "unobservable_notional_pct": 0.8549627796113318,
              "unclear_notional_pct": 0.9054843866291431,
              "run_retail_pct": 0.4898419864559819,
              "run_mixed_pct": 0.17607223476297967,
              "run_instit_pct": 0.08577878103837472,
              "run_unclear_pct": 0.24830699774266365,
              "avg_trade_size": 1169.314353782013,
              "avg_run_notional": 4431.780586907449,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.2076749435665914,
              "medium_confidence_pct": 0.17155756207674944,
              "low_confidence_pct": 0.1963882618510158,
              "na_confidence_pct": 0.42437923250564336,
              "avg_feature_coverage": 0.8825056433408577,
              "observable_run_pct": 0.9887133182844243,
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
      "n_trades": 47941,
      "n_runs": 34216,
      "n_trade_days": 126,
      "first_trade_date": "2025-10-22",
      "last_trade_date": "2026-04-22",
      "period_days": 126,
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
        "retail_pct": 0.5955653824492605,
        "mixed_pct": 0.2474708495859494,
        "instit_pct": 0.11195010533781106,
        "ambiguous_pct": 0.04486764981956989,
        "unobservable_pct": 0.00014601280740910702,
        "unclear_pct": 0.04501366262697899,
        "retail_qty_pct": 0.09302605141591248,
        "mixed_qty_pct": 0.3008990430168303,
        "instit_qty_pct": 0.47910085245196604,
        "ambiguous_qty_pct": 0.1254807502055158,
        "unobservable_qty_pct": 0.0014933029097753848,
        "unclear_qty_pct": 0.1269740531152912,
        "retail_notional_pct": 0.09312810060553658,
        "mixed_notional_pct": 0.30112405644742046,
        "instit_notional_pct": 0.4792890435281696,
        "ambiguous_notional_pct": 0.12497520302380542,
        "unobservable_notional_pct": 0.0014835963950679347,
        "unclear_notional_pct": 0.12645879941887336
      },
      "run_composition": {
        "retail_pct": 0.8259878419452887,
        "mixed_pct": 0.1529985971475333,
        "instit_pct": 0.013970072480710779,
        "ambiguous_pct": 0.007014262333411269,
        "unobservable_pct": 2.922609305588029e-05,
        "unclear_pct": 0.0070434884264671494
      },
      "trade_size": {
        "avg": 1882.2681420913207,
        "median": 136.0
      },
      "run_size": {
        "avg": 2637.2988368014962,
        "median": 137.0,
        "avg_length": 1.1524433013794715
      },
      "confidence": {
        "high": 0.4989478606499883,
        "medium": 0.3119593172784662,
        "low": 0.02905073649754501,
        "na": 0.16004208557400046
      },
      "confidence_counts": {
        "high": 17072,
        "medium": 10674,
        "low": 994,
        "na": 5476
      },
      "trade_confidence": {
        "high": 0.3896247470849586,
        "medium": 0.289230512504954,
        "low": 0.028660228197159007,
        "na": 0.29248451221292837
      },
      "trade_confidence_counts": {
        "high": 18679,
        "medium": 13866,
        "low": 1374,
        "na": 14022
      },
      "counts": {
        "trades": {
          "retail": 28552,
          "mixed": 11864,
          "institutional": 5367,
          "ambiguous": 2151,
          "unobservable": 7,
          "unclear": 2158
        },
        "runs": {
          "retail": 28262,
          "mixed": 5235,
          "institutional": 478,
          "ambiguous": 240,
          "unobservable": 1,
          "unclear": 241
        }
      },
      "observability": {
        "avg_feature_coverage": 0.8653539279869066,
        "observable_run_pct": 0.9999707739069441,
        "ambiguous_run_pct": 0.007014262333411269,
        "unobservable_run_pct": 2.922609305588029e-05
      },
      "dominant_bucket": "RETAIL",
      "dominant_label": "Retail-led",
      "dominant_share": 0.8259878419452887,
      "dominance_gap": 0.6729892447977555,
      "over_time": {
        "valid": true,
        "periods": [
          {
            "month": "2025-11",
            "n_trades": 9842,
            "n_runs": 7179,
            "retail_pct": 0.6181670392196708,
            "mixed_pct": 0.23470839260312945,
            "instit_pct": 0.09185124974598659,
            "ambiguous_pct": 0.05527331843121317,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.05527331843121317,
            "avg_trade_size": 1573.244411704938,
            "avg_run_notional": 2156.8284580025074,
            "retail_qty_pct": 0.13906937147948673,
            "mixed_qty_pct": 0.2441389105762063,
            "instit_qty_pct": 0.5242361285712396,
            "ambiguous_qty_pct": 0.09255558937306745,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.09255558937306745,
            "retail_notional_pct": 0.13879874939545966,
            "mixed_notional_pct": 0.2440253395282956,
            "instit_notional_pct": 0.5245362569690661,
            "ambiguous_notional_pct": 0.09263965410717856,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.09263965410717856,
            "run_retail_pct": 0.8322886195849004,
            "run_mixed_pct": 0.15043877977434184,
            "run_instit_pct": 0.011561498815991085,
            "run_ambiguous_pct": 0.005711101824766681,
            "run_unobservable_pct": 0.0,
            "run_unclear_pct": 0.005711101824766681,
            "avg_feature_coverage": 0.865900543251149,
            "high_confidence_pct": 0.45048056832427913,
            "medium_confidence_pct": 0.3535311324697033,
            "low_confidence_pct": 0.03983841760690904,
            "na_confidence_pct": 0.1561498815991085,
            "total_quantity": null
          },
          {
            "month": "2025-12",
            "n_trades": 7506,
            "n_runs": 5481,
            "retail_pct": 0.6020516919797495,
            "mixed_pct": 0.2740474287236877,
            "instit_pct": 0.09592326139088729,
            "ambiguous_pct": 0.027977617905675458,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.027977617905675458,
            "avg_trade_size": 982.2464028776978,
            "avg_run_notional": 1345.1453201970444,
            "retail_qty_pct": 0.12156722835135482,
            "mixed_qty_pct": 0.3816528532484403,
            "instit_qty_pct": 0.4224436028322081,
            "ambiguous_qty_pct": 0.07433631556799677,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.07433631556799677,
            "retail_notional_pct": 0.12161432758764158,
            "mixed_notional_pct": 0.3815530491608854,
            "instit_notional_pct": 0.42238596050058175,
            "ambiguous_notional_pct": 0.07444666275089123,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.07444666275089123,
            "run_retail_pct": 0.8137201240649516,
            "run_mixed_pct": 0.16894727239554827,
            "run_instit_pct": 0.011859149790184273,
            "run_ambiguous_pct": 0.005473453749315818,
            "run_unobservable_pct": 0.0,
            "run_unclear_pct": 0.005473453749315818,
            "avg_feature_coverage": 0.8674329501915709,
            "high_confidence_pct": 0.4796569968983762,
            "medium_confidence_pct": 0.3061485130450648,
            "low_confidence_pct": 0.039773763911694945,
            "na_confidence_pct": 0.17442072614486406,
            "total_quantity": null
          },
          {
            "month": "2026-01",
            "n_trades": 5045,
            "n_runs": 3679,
            "retail_pct": 0.6166501486620416,
            "mixed_pct": 0.25867195242814667,
            "instit_pct": 0.08126858275520317,
            "ambiguous_pct": 0.043409316154608524,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.043409316154608524,
            "avg_trade_size": 2718.34271555996,
            "avg_run_notional": 3727.6539820603425,
            "retail_qty_pct": 0.06846663473818647,
            "mixed_qty_pct": 0.3614054517879949,
            "instit_qty_pct": 0.4431423611111111,
            "ambiguous_qty_pct": 0.12698555236270753,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.12698555236270753,
            "retail_notional_pct": 0.06868578250360817,
            "mixed_notional_pct": 0.362438884707853,
            "instit_notional_pct": 0.4414249879266057,
            "ambiguous_notional_pct": 0.1274503448619331,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.1274503448619331,
            "run_retail_pct": 0.8426202772492525,
            "run_mixed_pct": 0.13998369122044033,
            "run_instit_pct": 0.010872519706441968,
            "run_ambiguous_pct": 0.006523511823865181,
            "run_unobservable_pct": 0.0,
            "run_unclear_pct": 0.006523511823865181,
            "avg_feature_coverage": 0.8626393041587386,
            "high_confidence_pct": 0.6588746942103832,
            "medium_confidence_pct": 0.19189997281870072,
            "low_confidence_pct": 0.002718129926610492,
            "na_confidence_pct": 0.1465072030443055,
            "total_quantity": null
          },
          {
            "month": "2026-02",
            "n_trades": 4649,
            "n_runs": 3458,
            "retail_pct": 0.6263712626371263,
            "mixed_pct": 0.22628522262852227,
            "instit_pct": 0.12088621208862121,
            "ambiguous_pct": 0.026457302645730263,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.026457302645730263,
            "avg_trade_size": 2790.37459668746,
            "avg_run_notional": 3751.431897050318,
            "retail_qty_pct": 0.08098770128058831,
            "mixed_qty_pct": 0.2951639829254892,
            "instit_qty_pct": 0.5494220447149317,
            "ambiguous_qty_pct": 0.07442627107899075,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.07442627107899075,
            "retail_notional_pct": 0.08103094469075486,
            "mixed_notional_pct": 0.2955381640856395,
            "instit_notional_pct": 0.5487301686963332,
            "ambiguous_notional_pct": 0.0747007225272725,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.0747007225272725,
            "run_retail_pct": 0.8403701561596298,
            "run_mixed_pct": 0.137941006362059,
            "run_instit_pct": 0.0167727009832273,
            "run_ambiguous_pct": 0.004916136495083863,
            "run_unobservable_pct": 0.0,
            "run_unclear_pct": 0.004916136495083863,
            "avg_feature_coverage": 0.8607142857142854,
            "high_confidence_pct": 0.5326778484673221,
            "medium_confidence_pct": 0.30624638519375363,
            "low_confidence_pct": 0.018218623481781375,
            "na_confidence_pct": 0.14285714285714285,
            "total_quantity": null
          },
          {
            "month": "2026-03",
            "n_trades": 9747,
            "n_runs": 6347,
            "retail_pct": 0.5349338257925516,
            "mixed_pct": 0.24612701344003282,
            "instit_pct": 0.1694880476043911,
            "ambiguous_pct": 0.04945111316302452,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.04945111316302452,
            "avg_trade_size": 2229.761003385657,
            "avg_run_notional": 3424.2130927997478,
            "retail_qty_pct": 0.07765442987925424,
            "mixed_qty_pct": 0.30682198363697194,
            "instit_qty_pct": 0.4704583472733356,
            "ambiguous_qty_pct": 0.14506523921043826,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.14506523921043826,
            "retail_notional_pct": 0.07757777223026933,
            "mixed_notional_pct": 0.307640209767598,
            "instit_notional_pct": 0.4683636843164628,
            "ambiguous_notional_pct": 0.1464183336856699,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.1464183336856699,
            "run_retail_pct": 0.8134551756735465,
            "run_mixed_pct": 0.15944540727902945,
            "run_instit_pct": 0.01780368678115645,
            "run_ambiguous_pct": 0.009295730266267527,
            "run_unobservable_pct": 0.0,
            "run_unclear_pct": 0.009295730266267527,
            "avg_feature_coverage": 0.8650543563888449,
            "high_confidence_pct": 0.45753899480069327,
            "medium_confidence_pct": 0.34110603434693554,
            "low_confidence_pct": 0.03261383330707421,
            "na_confidence_pct": 0.168741137545297,
            "total_quantity": null
          },
          {
            "month": "2026-04",
            "n_trades": 6714,
            "n_runs": 4743,
            "retail_pct": 0.573577599046768,
            "mixed_pct": 0.26541554959785524,
            "instit_pct": 0.08847184986595175,
            "ambiguous_pct": 0.07149240393208221,
            "unobservable_pct": 0.0010425975573428656,
            "unclear_pct": 0.07253500148942507,
            "avg_trade_size": 1647.5808013106941,
            "avg_run_notional": 2332.2491039426523,
            "retail_qty_pct": 0.07858907607125377,
            "mixed_qty_pct": 0.2846908149606996,
            "instit_qty_pct": 0.3723251823504785,
            "ambiguous_qty_pct": 0.25260184797542323,
            "unobservable_qty_pct": 0.011793078642144924,
            "unclear_qty_pct": 0.26439492661756814,
            "retail_notional_pct": 0.07852288822198261,
            "mixed_notional_pct": 0.28446809227112174,
            "instit_notional_pct": 0.37323686370033243,
            "ambiguous_notional_pct": 0.2516696223938882,
            "unobservable_notional_pct": 0.012102533412675042,
            "unclear_notional_pct": 0.2637721558065632,
            "run_retail_pct": 0.8072949609951507,
            "run_mixed_pct": 0.16613957410921357,
            "run_instit_pct": 0.01454775458570525,
            "run_ambiguous_pct": 0.011806873286949189,
            "run_unobservable_pct": 0.0002108370229812355,
            "run_unclear_pct": 0.012017710309930424,
            "avg_feature_coverage": 0.8692388783470376,
            "high_confidence_pct": 0.5412186379928315,
            "medium_confidence_pct": 0.2664979970482817,
            "low_confidence_pct": 0.01412608053974278,
            "na_confidence_pct": 0.178157284419144,
            "total_quantity": null
          }
        ]
      },
      "peer_comparison": [
        {
          "ticker": "CRPU",
          "currency": "SGD",
          "is_target": true,
          "retail_pct": 0.5955653824492605,
          "mixed_pct": 0.2474708495859494,
          "instit_pct": 0.11195010533781106,
          "ambiguous_pct": 0.04486764981956989,
          "unobservable_pct": 0.00014601280740910702,
          "unclear_pct": 0.04501366262697899,
          "retail_qty_pct": 0.09302605141591248,
          "mixed_qty_pct": 0.3008990430168303,
          "instit_qty_pct": 0.47910085245196604,
          "ambiguous_qty_pct": 0.1254807502055158,
          "unobservable_qty_pct": 0.0014933029097753848,
          "unclear_qty_pct": 0.1269740531152912,
          "retail_notional_pct": 0.09312810060553658,
          "mixed_notional_pct": 0.30112405644742046,
          "instit_notional_pct": 0.4792890435281696,
          "ambiguous_notional_pct": 0.12497520302380542,
          "unobservable_notional_pct": 0.0014835963950679347,
          "unclear_notional_pct": 0.12645879941887336,
          "run_retail_pct": 0.8259878419452887,
          "run_mixed_pct": 0.1529985971475333,
          "run_instit_pct": 0.013970072480710779,
          "run_unclear_pct": 0.0070434884264671494,
          "avg_trade_size": 1882.2681420913207,
          "avg_run_notional": 2637.2988368014962,
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "high_confidence_pct": 0.4989478606499883,
          "medium_confidence_pct": 0.3119593172784662,
          "low_confidence_pct": 0.02905073649754501,
          "na_confidence_pct": 0.16004208557400046,
          "avg_feature_coverage": 0.8653539279869066,
          "observable_run_pct": 0.9999707739069441,
          "thresholds": {
            "retail_max": 10000.0,
            "instit_min": 50000.0
          }
        },
        {
          "ticker": "AJBU",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.36582192824093146,
          "mixed_pct": 0.33127829424264443,
          "instit_pct": 0.2319197760681584,
          "ambiguous_pct": 0.07064540213094819,
          "unobservable_pct": 0.00033459931731751226,
          "unclear_pct": 0.0709800014482657,
          "retail_qty_pct": 0.09974574998638905,
          "mixed_qty_pct": 0.2242784391911332,
          "instit_qty_pct": 0.6154825083189096,
          "ambiguous_qty_pct": 0.047457611233250055,
          "unobservable_qty_pct": 0.013035691270318086,
          "unclear_qty_pct": 0.060493302503568144,
          "retail_notional_pct": 0.09967449922677371,
          "mixed_notional_pct": 0.22419083773943277,
          "instit_notional_pct": 0.6157058388656035,
          "ambiguous_notional_pct": 0.047456441469707865,
          "unobservable_notional_pct": 0.012972382698482181,
          "unclear_notional_pct": 0.060428824168190044,
          "run_retail_pct": 0.7216442120924081,
          "run_mixed_pct": 0.24600157044261686,
          "run_instit_pct": 0.01523432656940943,
          "run_unclear_pct": 0.01711989089556557,
          "avg_trade_size": 5697.516016445306,
          "avg_run_notional": 11787.285183855436,
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "high_confidence_pct": 0.3120428152250279,
          "medium_confidence_pct": 0.3714820019010621,
          "low_confidence_pct": 0.053353721535727566,
          "na_confidence_pct": 0.2631214613381824,
          "avg_feature_coverage": 0.8864420176054881,
          "observable_run_pct": 0.9996022234161259,
          "thresholds": {
            "retail_max": 10000.0,
            "instit_min": 50000.0
          }
        },
        {
          "ticker": "JYEU",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.4484620057967425,
          "mixed_pct": 0.3097271506572608,
          "instit_pct": 0.16395726353508422,
          "ambiguous_pct": 0.07758657384655272,
          "unobservable_pct": 0.0002670061643597076,
          "unclear_pct": 0.07785358001091243,
          "retail_qty_pct": 0.08268445281342102,
          "mixed_qty_pct": 0.21694234713917862,
          "instit_qty_pct": 0.5688743561723627,
          "ambiguous_qty_pct": 0.06568072250783426,
          "unobservable_qty_pct": 0.0658181213672034,
          "unclear_qty_pct": 0.13149884387503766,
          "retail_notional_pct": 0.08252467385557792,
          "mixed_notional_pct": 0.2152811815353843,
          "instit_notional_pct": 0.5742603506069003,
          "ambiguous_notional_pct": 0.06654522649244736,
          "unobservable_notional_pct": 0.06138856750969011,
          "unclear_notional_pct": 0.12793379400213747,
          "run_retail_pct": 0.7665726326534835,
          "run_mixed_pct": 0.21263872316064641,
          "run_instit_pct": 0.008856210728154335,
          "run_unclear_pct": 0.011932433457715733,
          "avg_trade_size": 4079.82853556793,
          "avg_run_notional": 7271.979266465723,
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "high_confidence_pct": 0.37851334294365546,
          "medium_confidence_pct": 0.3551243938944566,
          "low_confidence_pct": 0.041791106543525795,
          "na_confidence_pct": 0.22457115661836216,
          "avg_feature_coverage": 0.8832870060627797,
          "observable_run_pct": 0.9995723636564287,
          "thresholds": {
            "retail_max": 10000.0,
            "instit_min": 50000.0
          }
        },
        {
          "ticker": "AU8U",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.49453404832398185,
          "mixed_pct": 0.26975713782894056,
          "instit_pct": 0.19425868030394003,
          "ambiguous_pct": 0.04143978136193296,
          "unobservable_pct": 1.0352181204579806e-05,
          "unclear_pct": 0.041450133543137535,
          "retail_qty_pct": 0.1150903460619976,
          "mixed_qty_pct": 0.2708573558305074,
          "instit_qty_pct": 0.5358729311511014,
          "ambiguous_qty_pct": 0.07764101761828732,
          "unobservable_qty_pct": 0.0005383493381063907,
          "unclear_qty_pct": 0.07817936695639371,
          "retail_notional_pct": 0.11636925959349924,
          "mixed_notional_pct": 0.2708038368591854,
          "instit_notional_pct": 0.5349368265330484,
          "ambiguous_notional_pct": 0.0773867916778691,
          "unobservable_notional_pct": 0.0005032853363978952,
          "unclear_notional_pct": 0.077890077014267,
          "run_retail_pct": 0.7965671565013117,
          "run_mixed_pct": 0.17606611910355116,
          "run_instit_pct": 0.01953051321181776,
          "run_unclear_pct": 0.00783621118331933,
          "avg_trade_size": 1655.7390370401044,
          "avg_run_notional": 2742.520953720057,
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "high_confidence_pct": 0.46377681373137397,
          "medium_confidence_pct": 0.3274404567979561,
          "low_confidence_pct": 0.02488039918379945,
          "na_confidence_pct": 0.18390233028687047,
          "avg_feature_coverage": 0.8702395445738094,
          "observable_run_pct": 0.999982852929577,
          "thresholds": {
            "retail_max": 10000.0,
            "instit_min": 50000.0
          }
        },
        {
          "ticker": "D5IU",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.5344627138349112,
          "mixed_pct": 0.21740574655372863,
          "instit_pct": 0.17372529480152799,
          "ambiguous_pct": 0.07440624480983225,
          "unobservable_pct": 0.0,
          "unclear_pct": 0.07440624480983225,
          "retail_qty_pct": 0.11837349078894685,
          "mixed_qty_pct": 0.43498516037432117,
          "instit_qty_pct": 0.38517012765490954,
          "ambiguous_qty_pct": 0.061471221181822425,
          "unobservable_qty_pct": 0.0,
          "unclear_qty_pct": 0.061471221181822425,
          "retail_notional_pct": 0.11506619794358508,
          "mixed_notional_pct": 0.4119349935253528,
          "instit_notional_pct": 0.3976258379723779,
          "ambiguous_notional_pct": 0.07537297055868424,
          "unobservable_notional_pct": 0.0,
          "unclear_notional_pct": 0.07537297055868424,
          "run_retail_pct": 0.7757150025087808,
          "run_mixed_pct": 0.1638233818364275,
          "run_instit_pct": 0.02985449071751129,
          "run_unclear_pct": 0.030607124937280482,
          "avg_trade_size": 1806.6070586281348,
          "avg_run_notional": 2728.946588058204,
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "high_confidence_pct": 0.369292523833417,
          "medium_confidence_pct": 0.21851480180632213,
          "low_confidence_pct": 0.21776216758655292,
          "na_confidence_pct": 0.194430506773708,
          "avg_feature_coverage": 0.8552308078273956,
          "observable_run_pct": 1.0,
          "thresholds": {
            "retail_max": 10000.0,
            "instit_min": 50000.0
          }
        },
        {
          "ticker": "ODBU",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.40754633715798766,
          "mixed_pct": 0.19329214474845544,
          "instit_pct": 0.1440864960282436,
          "ambiguous_pct": 0.25507502206531335,
          "unobservable_pct": 0.0,
          "unclear_pct": 0.25507502206531335,
          "retail_qty_pct": 0.09257628719886632,
          "mixed_qty_pct": 0.17021823334907887,
          "instit_qty_pct": 0.37667264997638167,
          "ambiguous_qty_pct": 0.3605328294756731,
          "unobservable_qty_pct": 0.0,
          "unclear_qty_pct": 0.3605328294756731,
          "retail_notional_pct": 0.09290080189007444,
          "mixed_notional_pct": 0.17060446146003236,
          "instit_notional_pct": 0.375452708538965,
          "ambiguous_notional_pct": 0.3610420281109282,
          "unobservable_notional_pct": 0.0,
          "unclear_notional_pct": 0.3610420281109282,
          "run_retail_pct": 0.6390778533635676,
          "run_mixed_pct": 0.1655328798185941,
          "run_instit_pct": 0.055933484504913075,
          "run_unclear_pct": 0.13945578231292516,
          "avg_trade_size": 3027.008274492498,
          "avg_run_notional": 5184.581065759638,
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "high_confidence_pct": 0.21882086167800455,
          "medium_confidence_pct": 0.19160997732426305,
          "low_confidence_pct": 0.28458049886621317,
          "na_confidence_pct": 0.30498866213151926,
          "avg_feature_coverage": 0.853628117913832,
          "observable_run_pct": 1.0,
          "thresholds": {
            "retail_max": 10000.0,
            "instit_min": 50000.0
          }
        },
        {
          "ticker": "BMGU",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.14115544967242405,
          "mixed_pct": 0.19416319237641452,
          "instit_pct": 0.21322215604526504,
          "ambiguous_pct": 0.4443120905300774,
          "unobservable_pct": 0.00714711137581894,
          "unclear_pct": 0.45145920190589633,
          "retail_qty_pct": 0.008152789985246801,
          "mixed_qty_pct": 0.015456796355591194,
          "instit_qty_pct": 0.07350912833273211,
          "ambiguous_qty_pct": 0.050547297908530166,
          "unobservable_qty_pct": 0.8523339874178997,
          "unclear_qty_pct": 0.9028812853264299,
          "retail_notional_pct": 0.008202095392666593,
          "mixed_notional_pct": 0.015368168800070576,
          "instit_notional_pct": 0.07094534917811979,
          "ambiguous_notional_pct": 0.05052160701781122,
          "unobservable_notional_pct": 0.8549627796113318,
          "unclear_notional_pct": 0.9054843866291431,
          "run_retail_pct": 0.4898419864559819,
          "run_mixed_pct": 0.17607223476297967,
          "run_instit_pct": 0.08577878103837472,
          "run_unclear_pct": 0.24830699774266365,
          "avg_trade_size": 1169.314353782013,
          "avg_run_notional": 4431.780586907449,
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "high_confidence_pct": 0.2076749435665914,
          "medium_confidence_pct": 0.17155756207674944,
          "low_confidence_pct": 0.1963882618510158,
          "na_confidence_pct": 0.42437923250564336,
          "avg_feature_coverage": 0.8825056433408577,
          "observable_run_pct": 0.9887133182844243,
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
            "retail_pct": 0.39644970414201186,
            "mixed_pct": 0.3155818540433925,
            "instit_pct": 0.1755424063116371,
            "ambiguous_pct": 0.11242603550295859,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.11242603550295859,
            "retail_qty_pct": 0.09457117104624559,
            "mixed_qty_pct": 0.3290577549746932,
            "instit_qty_pct": 0.3676072939055675,
            "ambiguous_qty_pct": 0.20876378007349372,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.20876378007349372,
            "retail_notional_pct": 0.09464061940215614,
            "mixed_notional_pct": 0.3289319776740713,
            "instit_notional_pct": 0.36772596450442246,
            "ambiguous_notional_pct": 0.2087014384193501,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.2087014384193501,
            "run_retail_pct": 0.75,
            "run_mixed_pct": 0.18076923076923077,
            "run_instit_pct": 0.03461538461538462,
            "run_unclear_pct": 0.03461538461538462,
            "avg_trade_size": 1891.1153846153845,
            "avg_run_notional": 3687.675,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.5038461538461538,
            "medium_confidence_pct": 0.27692307692307694,
            "low_confidence_pct": 0.0038461538461538464,
            "na_confidence_pct": 0.2153846153846154,
            "avg_feature_coverage": 0.8759615384615383,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "JYEU",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.4196242171189979,
            "mixed_pct": 0.17745302713987474,
            "instit_pct": 0.3627348643006263,
            "ambiguous_pct": 0.04018789144050104,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.04018789144050104,
            "retail_qty_pct": 0.02496237099396642,
            "mixed_qty_pct": 0.1193993159930823,
            "instit_qty_pct": 0.7920894988118291,
            "ambiguous_qty_pct": 0.06354881420112218,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.06354881420112218,
            "retail_notional_pct": 0.025033151162500766,
            "mixed_notional_pct": 0.1192147537973665,
            "instit_notional_pct": 0.7919558468072503,
            "ambiguous_notional_pct": 0.06379624823288246,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.06379624823288246,
            "run_retail_pct": 0.8232848232848233,
            "run_mixed_pct": 0.1496881496881497,
            "run_instit_pct": 0.018711018711018712,
            "run_unclear_pct": 0.008316008316008316,
            "avg_trade_size": 6907.531315240083,
            "avg_run_notional": 13757.619542619543,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.448024948024948,
            "medium_confidence_pct": 0.3586278586278586,
            "low_confidence_pct": 0.035343035343035345,
            "na_confidence_pct": 0.158004158004158,
            "avg_feature_coverage": 0.8696465696465694,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "AJBU",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.3492612386042125,
            "mixed_pct": 0.260295504558315,
            "instit_pct": 0.31122288588494185,
            "ambiguous_pct": 0.07922037095253065,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.07922037095253065,
            "retail_qty_pct": 0.08920358266763495,
            "mixed_qty_pct": 0.15429072863713386,
            "instit_qty_pct": 0.6344105543451949,
            "ambiguous_qty_pct": 0.12209513435003631,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.12209513435003631,
            "retail_notional_pct": 0.08914467138793902,
            "mixed_notional_pct": 0.15438067934564187,
            "instit_notional_pct": 0.6343372185144208,
            "ambiguous_notional_pct": 0.12213743075199834,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.12213743075199834,
            "run_retail_pct": 0.7179125528913963,
            "run_mixed_pct": 0.2150916784203103,
            "run_instit_pct": 0.03314527503526093,
            "run_unclear_pct": 0.03385049365303244,
            "avg_trade_size": 4951.3593209682485,
            "avg_run_notional": 11107.38645980254,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.31946403385049366,
            "medium_confidence_pct": 0.3928067700987306,
            "low_confidence_pct": 0.038787023977433006,
            "na_confidence_pct": 0.24894217207334274,
            "avg_feature_coverage": 0.8791960507757404,
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
            "retail_pct": 0.6397884996695308,
            "mixed_pct": 0.3007270323859881,
            "instit_pct": 0.05023132848645076,
            "ambiguous_pct": 0.009253139458030404,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.009253139458030404,
            "retail_qty_pct": 0.11707550175215037,
            "mixed_qty_pct": 0.36564192417967506,
            "instit_qty_pct": 0.48255813953488375,
            "ambiguous_qty_pct": 0.034724434533290854,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.034724434533290854,
            "retail_notional_pct": 0.11717662675052518,
            "mixed_notional_pct": 0.3654499601728146,
            "instit_notional_pct": 0.48271999081044986,
            "ambiguous_notional_pct": 0.03465342226621036,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.03465342226621036,
            "run_retail_pct": 0.8316151202749141,
            "run_mixed_pct": 0.15721649484536082,
            "run_instit_pct": 0.00859106529209622,
            "run_unclear_pct": 0.002577319587628866,
            "avg_trade_size": 569.6288830138797,
            "avg_run_notional": 740.419673539519,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.46563573883161513,
            "medium_confidence_pct": 0.30326460481099654,
            "low_confidence_pct": 0.07130584192439862,
            "na_confidence_pct": 0.15979381443298968,
            "avg_feature_coverage": 0.8702319587628864,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "ODBU",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.2608695652173913,
            "mixed_pct": 0.21739130434782608,
            "instit_pct": 0.062111801242236024,
            "ambiguous_pct": 0.45962732919254656,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.45962732919254656,
            "retail_qty_pct": 0.054933611038791984,
            "mixed_qty_pct": 0.11897943243946889,
            "instit_qty_pct": 0.3392345743296017,
            "ambiguous_qty_pct": 0.48685238219213745,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.48685238219213745,
            "retail_notional_pct": 0.05472369921427627,
            "mixed_notional_pct": 0.11854971717438875,
            "instit_notional_pct": 0.33852491535192886,
            "ambiguous_notional_pct": 0.4882016682594061,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.4882016682594061,
            "run_retail_pct": 0.5384615384615384,
            "run_mixed_pct": 0.25,
            "run_instit_pct": 0.057692307692307696,
            "run_unclear_pct": 0.15384615384615385,
            "avg_trade_size": 1244.6490683229813,
            "avg_run_notional": 3853.625,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.15384615384615385,
            "medium_confidence_pct": 0.38461538461538464,
            "low_confidence_pct": 0.057692307692307696,
            "na_confidence_pct": 0.40384615384615385,
            "avg_feature_coverage": 0.9221153846153848,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "D5IU",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.6666666666666666,
            "mixed_pct": 0.3333333333333333,
            "instit_pct": 0.0,
            "ambiguous_pct": 0.0,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.0,
            "retail_qty_pct": 0.10152740341419586,
            "mixed_qty_pct": 0.8984725965858041,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": 0.0,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.0,
            "retail_notional_pct": 0.10354101299865531,
            "mixed_notional_pct": 0.8964589870013447,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": 0.0,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.0,
            "run_retail_pct": 0.8,
            "run_mixed_pct": 0.2,
            "run_instit_pct": 0.0,
            "run_unclear_pct": 0.0,
            "avg_trade_size": 1115.5,
            "avg_run_notional": 1338.6,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.8,
            "na_confidence_pct": 0.2,
            "avg_feature_coverage": 0.85,
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
            "retail_pct": 0.5852128947078886,
            "mixed_pct": 0.25679392672461215,
            "instit_pct": 0.09539003190670041,
            "ambiguous_pct": 0.06183298492683464,
            "unobservable_pct": 0.0007701617339641324,
            "unclear_pct": 0.06260314666079878,
            "retail_qty_pct": 0.0858616348669278,
            "mixed_qty_pct": 0.3033774645382603,
            "instit_qty_pct": 0.38683832441817473,
            "ambiguous_qty_pct": 0.2145628296385734,
            "unobservable_qty_pct": 0.009359746538063748,
            "unclear_qty_pct": 0.22392257617663713,
            "retail_notional_pct": 0.08564914369975701,
            "mixed_notional_pct": 0.3027569743064834,
            "instit_notional_pct": 0.3872921784262886,
            "ambiguous_notional_pct": 0.2146426905051685,
            "unobservable_notional_pct": 0.00965901306230248,
            "unclear_notional_pct": 0.22430170356747098,
            "run_retail_pct": 0.8138207619929045,
            "run_mixed_pct": 0.16149930587690883,
            "run_instit_pct": 0.014807959278111986,
            "run_unclear_pct": 0.009871972852074657,
            "avg_trade_size": 1524.9496094179779,
            "avg_run_notional": 2137.9403054141603,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.5300015424957581,
            "medium_confidence_pct": 0.27903748264692274,
            "low_confidence_pct": 0.019589696128335648,
            "na_confidence_pct": 0.1713712787289835,
            "avg_feature_coverage": 0.8674302020669442,
            "observable_run_pct": 0.9998457504241863,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "AJBU",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.38525913962707387,
            "mixed_pct": 0.3252385846424901,
            "instit_pct": 0.24755542504771694,
            "ambiguous_pct": 0.04178534723241815,
            "unobservable_pct": 0.0001615034503009837,
            "unclear_pct": 0.04194685068271913,
            "retail_qty_pct": 0.11267272442604234,
            "mixed_qty_pct": 0.21733364113546988,
            "instit_qty_pct": 0.6062460215240548,
            "ambiguous_qty_pct": 0.05347585943651638,
            "unobservable_qty_pct": 0.01027175347791653,
            "unclear_qty_pct": 0.06374761291443291,
            "retail_notional_pct": 0.11219533459476318,
            "mixed_notional_pct": 0.21638940660534745,
            "instit_notional_pct": 0.6076283034989339,
            "ambiguous_notional_pct": 0.05360815246398805,
            "unobservable_notional_pct": 0.010178802836967418,
            "unclear_notional_pct": 0.06378695530095546,
            "run_retail_pct": 0.7339859229904773,
            "run_mixed_pct": 0.2362630862956172,
            "run_instit_pct": 0.015585260542970367,
            "run_unclear_pct": 0.014165730170935116,
            "avg_trade_size": 5880.508199970635,
            "avg_run_notional": 11844.839814869581,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.3814396403856391,
            "medium_confidence_pct": 0.33083929733246586,
            "low_confidence_pct": 0.03729224581534276,
            "na_confidence_pct": 0.2504288164665523,
            "avg_feature_coverage": 0.8828710001774411,
            "observable_run_pct": 0.9997634116046608,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "AU8U",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.5303726391015824,
            "mixed_pct": 0.27565084226646247,
            "instit_pct": 0.15460694231750893,
            "ambiguous_pct": 0.039305768249106685,
            "unobservable_pct": 6.380806533945891e-05,
            "unclear_pct": 0.039369576314446146,
            "retail_qty_pct": 0.10141669788674743,
            "mixed_qty_pct": 0.271361473032788,
            "instit_qty_pct": 0.5078605225547739,
            "ambiguous_qty_pct": 0.11530269602741818,
            "unobservable_qty_pct": 0.004058610498272489,
            "unclear_qty_pct": 0.11936130652569066,
            "retail_notional_pct": 0.10099741684507128,
            "mixed_notional_pct": 0.27176800111853566,
            "instit_notional_pct": 0.506642405874576,
            "ambiguous_notional_pct": 0.1163737707584682,
            "unobservable_notional_pct": 0.0042184054033488575,
            "unclear_notional_pct": 0.12059217616181707,
            "run_retail_pct": 0.8060259944860181,
            "run_mixed_pct": 0.17073651043718,
            "run_instit_pct": 0.017132729421031903,
            "run_unclear_pct": 0.006104765655769988,
            "avg_trade_size": 1217.5913731495662,
            "avg_run_notional": 1878.89838519102,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.4995076801890508,
            "medium_confidence_pct": 0.2947026388341867,
            "low_confidence_pct": 0.028948404883812524,
            "na_confidence_pct": 0.17684127609294997,
            "avg_feature_coverage": 0.8696730996455297,
            "observable_run_pct": 0.9999015360378102,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "ODBU",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.25199203187250996,
            "mixed_pct": 0.15438247011952191,
            "instit_pct": 0.22211155378486055,
            "ambiguous_pct": 0.3715139442231076,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.3715139442231076,
            "retail_qty_pct": 0.0712159339484548,
            "mixed_qty_pct": 0.1428759395404681,
            "instit_qty_pct": 0.48328152497491816,
            "ambiguous_qty_pct": 0.30262660153615895,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.30262660153615895,
            "retail_notional_pct": 0.07150649927946959,
            "mixed_notional_pct": 0.14397940061475162,
            "instit_notional_pct": 0.4820868288715677,
            "ambiguous_notional_pct": 0.30242727123421115,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.30242727123421115,
            "run_retail_pct": 0.46596858638743455,
            "run_mixed_pct": 0.18324607329842932,
            "run_instit_pct": 0.10209424083769633,
            "run_unclear_pct": 0.2486910994764398,
            "avg_trade_size": 3089.8690239043826,
            "avg_run_notional": 8121.017015706806,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.04450261780104712,
            "medium_confidence_pct": 0.1544502617801047,
            "low_confidence_pct": 0.36910994764397903,
            "na_confidence_pct": 0.4319371727748691,
            "avg_feature_coverage": 0.8735602094240836,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "JYEU",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.5036098923015556,
            "mixed_pct": 0.31914639010769846,
            "instit_pct": 0.1299760670123654,
            "ambiguous_pct": 0.04710809732748305,
            "unobservable_pct": 0.00015955325089748703,
            "unclear_pct": 0.04726765057838054,
            "retail_qty_pct": 0.07134907535051933,
            "mixed_qty_pct": 0.22380808080513923,
            "instit_qty_pct": 0.41831181933659384,
            "ambiguous_qty_pct": 0.04734185487565204,
            "unobservable_qty_pct": 0.23918916963209555,
            "unclear_qty_pct": 0.2865310245077476,
            "retail_notional_pct": 0.07156781509871561,
            "mixed_notional_pct": 0.22353804374263242,
            "instit_notional_pct": 0.4208268523478316,
            "ambiguous_notional_pct": 0.048024524033459755,
            "unobservable_notional_pct": 0.23604276477736066,
            "unclear_notional_pct": 0.28406728881082044,
            "run_retail_pct": 0.7815769328910437,
            "run_mixed_pct": 0.2051543761163562,
            "run_instit_pct": 0.005549885174789487,
            "run_unclear_pct": 0.007718805817810666,
            "avg_trade_size": 4327.916102712405,
            "avg_run_notional": 6921.463172684358,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.3926065322786425,
            "medium_confidence_pct": 0.35260908394998725,
            "low_confidence_pct": 0.04191120183720337,
            "na_confidence_pct": 0.21287318193416688,
            "avg_feature_coverage": 0.8814637024751211,
            "observable_run_pct": 0.999744832865527,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "BMGU",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.09523809523809523,
            "mixed_pct": 0.047619047619047616,
            "instit_pct": 0.23809523809523808,
            "ambiguous_pct": 0.3333333333333333,
            "unobservable_pct": 0.2857142857142857,
            "unclear_pct": 0.6190476190476191,
            "retail_qty_pct": 0.028708133971291867,
            "mixed_qty_pct": 0.009569377990430622,
            "instit_qty_pct": 0.33014354066985646,
            "ambiguous_qty_pct": 0.2822966507177033,
            "unobservable_qty_pct": 0.3492822966507177,
            "unclear_qty_pct": 0.631578947368421,
            "retail_notional_pct": 0.03068518626140524,
            "mixed_notional_pct": 0.010344627186610101,
            "instit_notional_pct": 0.32812227581798104,
            "ambiguous_notional_pct": 0.29598419247980473,
            "unobservable_notional_pct": 0.33486371825419886,
            "unclear_notional_pct": 0.6308479107340036,
            "run_retail_pct": 0.13333333333333333,
            "run_mixed_pct": 0.06666666666666667,
            "run_instit_pct": 0.26666666666666666,
            "run_unclear_pct": 0.5333333333333333,
            "avg_trade_size": 409.6904761904762,
            "avg_run_notional": 573.5666666666667,
            "dominant_bucket": "AMBIGUOUS",
            "dominant_label": "Unclassified Flow",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.4,
            "na_confidence_pct": 0.6,
            "avg_feature_coverage": 0.8333333333333333,
            "observable_run_pct": 0.9333333333333333,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "D5IU",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.7121212121212122,
            "mixed_pct": 0.27525252525252525,
            "instit_pct": 0.012626262626262626,
            "ambiguous_pct": 0.0,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.0,
            "retail_qty_pct": 0.12891161664355832,
            "mixed_qty_pct": 0.7320630282317642,
            "instit_qty_pct": 0.13902535512467754,
            "ambiguous_qty_pct": 0.0,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.0,
            "retail_notional_pct": 0.13273772510577075,
            "mixed_notional_pct": 0.7331473962715047,
            "instit_notional_pct": 0.1341148786227246,
            "ambiguous_notional_pct": 0.0,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.0,
            "run_retail_pct": 0.8363636363636363,
            "run_mixed_pct": 0.1606060606060606,
            "run_instit_pct": 0.0030303030303030303,
            "run_unclear_pct": 0.0,
            "avg_trade_size": 1242.6818181818182,
            "avg_run_notional": 1491.2181818181818,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.5636363636363636,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.27575757575757576,
            "na_confidence_pct": 0.1606060606060606,
            "avg_feature_coverage": 0.8518181818181816,
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
            "retail_pct": 0.5714977546887382,
            "mixed_pct": 0.2490974729241877,
            "instit_pct": 0.12895130756361714,
            "ambiguous_pct": 0.050145284846350266,
            "unobservable_pct": 0.00030817997710663026,
            "unclear_pct": 0.050453464823456896,
            "retail_qty_pct": 0.07788560388644251,
            "mixed_qty_pct": 0.29936789139070424,
            "instit_qty_pct": 0.46499236479681477,
            "ambiguous_qty_pct": 0.15514158109447926,
            "unobservable_qty_pct": 0.0026125588315591883,
            "unclear_qty_pct": 0.15775413992603846,
            "retail_notional_pct": 0.07785382552792916,
            "mixed_notional_pct": 0.29988991600390186,
            "instit_notional_pct": 0.46496148537157,
            "ambiguous_notional_pct": 0.15467572241265243,
            "unobservable_notional_pct": 0.002619050683946541,
            "unclear_notional_pct": 0.15729477309659898,
            "run_retail_pct": 0.8199097323755642,
            "run_mixed_pct": 0.15555273027779543,
            "run_instit_pct": 0.015828618651071134,
            "run_unclear_pct": 0.008708918695569258,
            "avg_trade_size": 2250.4368231046933,
            "avg_run_notional": 3249.407030703706,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.5216451592397178,
            "medium_confidence_pct": 0.2925433856716038,
            "low_confidence_pct": 0.02154980611531371,
            "na_confidence_pct": 0.1642616489733647,
            "avg_feature_coverage": 0.8652692136545671,
            "observable_run_pct": 0.9999364312503973,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "AJBU",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.3733185014127874,
            "mixed_pct": 0.33652501243816124,
            "instit_pct": 0.2420090681235743,
            "ambiguous_pct": 0.047818862823509535,
            "unobservable_pct": 0.0003285552019675763,
            "unclear_pct": 0.04814741802547711,
            "retail_qty_pct": 0.09918576505059859,
            "mixed_qty_pct": 0.22164852512220348,
            "instit_qty_pct": 0.618007201234829,
            "ambiguous_qty_pct": 0.052607380134964306,
            "unobservable_qty_pct": 0.008551128457404671,
            "unclear_qty_pct": 0.061158508592368974,
            "retail_notional_pct": 0.09905687298294369,
            "mixed_notional_pct": 0.22147390264533737,
            "instit_notional_pct": 0.6181766015745404,
            "ambiguous_notional_pct": 0.052747274585549155,
            "unobservable_notional_pct": 0.00854534821162948,
            "unclear_notional_pct": 0.061292622797178634,
            "run_retail_pct": 0.7208147374418383,
            "run_mixed_pct": 0.24693761276232076,
            "run_instit_pct": 0.016551134745038457,
            "run_unclear_pct": 0.01569651505080239,
            "avg_trade_size": 6464.275821341069,
            "avg_run_notional": 13077.958606400154,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.31660810939132084,
            "medium_confidence_pct": 0.36963251353147847,
            "low_confidence_pct": 0.05112524926407749,
            "na_confidence_pct": 0.2626341278131232,
            "avg_feature_coverage": 0.885757762795556,
            "observable_run_pct": 0.9997056309942076,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "JYEU",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.46672426305422127,
            "mixed_pct": 0.32671666033106406,
            "instit_pct": 0.15993364896153714,
            "ambiguous_pct": 0.04636278812592874,
            "unobservable_pct": 0.000262639527248851,
            "unclear_pct": 0.04662542765317759,
            "retail_qty_pct": 0.08268007620443858,
            "mixed_qty_pct": 0.23091404020739129,
            "instit_qty_pct": 0.5437193433134923,
            "ambiguous_qty_pct": 0.04604746059360421,
            "unobservable_qty_pct": 0.09663907968107369,
            "unclear_qty_pct": 0.1426865402746779,
            "retail_notional_pct": 0.082363702869403,
            "mixed_notional_pct": 0.22899729804545801,
            "instit_notional_pct": 0.5512926850460161,
            "ambiguous_notional_pct": 0.04599043183042864,
            "unobservable_notional_pct": 0.09135588220869413,
            "unclear_notional_pct": 0.13734631403912279,
            "run_retail_pct": 0.7655234041552517,
            "run_mixed_pct": 0.2179449493821209,
            "run_instit_pct": 0.007548589636562453,
            "run_unclear_pct": 0.008983056826064973,
            "avg_trade_size": 4404.213060026956,
            "avg_run_notional": 7492.428677468283,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.37426659925454736,
            "medium_confidence_pct": 0.35494832390739456,
            "low_confidence_pct": 0.043857070629872194,
            "na_confidence_pct": 0.22692800620818587,
            "avg_feature_coverage": 0.8839827628778703,
            "observable_run_pct": 0.9996002304553846,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "AU8U",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.4799564155287253,
            "mixed_pct": 0.2797138890353421,
            "instit_pct": 0.19765909210734434,
            "ambiguous_pct": 0.042653028945009754,
            "unobservable_pct": 1.7574383578495984e-05,
            "unclear_pct": 0.04267060332858825,
            "retail_qty_pct": 0.10249754396436343,
            "mixed_qty_pct": 0.27248323571049304,
            "instit_qty_pct": 0.5485817861760605,
            "ambiguous_qty_pct": 0.07555121620157898,
            "unobservable_qty_pct": 0.0008862179475040845,
            "unclear_qty_pct": 0.07643743414908306,
            "retail_notional_pct": 0.10333594275826213,
            "mixed_notional_pct": 0.2729422159634347,
            "instit_notional_pct": 0.5479911576246413,
            "ambiguous_notional_pct": 0.07485979464271374,
            "unobservable_notional_pct": 0.0008708890109480354,
            "unclear_notional_pct": 0.07573068365366177,
            "run_retail_pct": 0.7890462307371928,
            "run_mixed_pct": 0.18432795858868328,
            "run_instit_pct": 0.01924793240911525,
            "run_unclear_pct": 0.007377878265008627,
            "avg_trade_size": 1624.394799739899,
            "avg_run_notional": 2749.737862200274,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.4683762717915154,
            "medium_confidence_pct": 0.31516629975605404,
            "low_confidence_pct": 0.02475159159873862,
            "na_confidence_pct": 0.1917058368536919,
            "avg_feature_coverage": 0.8720964479086093,
            "observable_run_pct": 0.9999702504908669,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "ODBU",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.34450816056462286,
            "mixed_pct": 0.1627701808557565,
            "instit_pct": 0.18879576532862816,
            "ambiguous_pct": 0.3039258932509925,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.3039258932509925,
            "retail_qty_pct": 0.08168437787087653,
            "mixed_qty_pct": 0.15267036310683407,
            "instit_qty_pct": 0.4063043634065454,
            "ambiguous_qty_pct": 0.35934089561574395,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.35934089561574395,
            "retail_notional_pct": 0.0826332431845274,
            "mixed_notional_pct": 0.15399598210474075,
            "instit_notional_pct": 0.4029330598351047,
            "ambiguous_notional_pct": 0.3604377148756272,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.3604377148756272,
            "run_retail_pct": 0.5595432300163132,
            "run_mixed_pct": 0.17862969004893964,
            "run_instit_pct": 0.07585644371941272,
            "run_unclear_pct": 0.1859706362153344,
            "avg_trade_size": 3572.5701367445963,
            "avg_run_notional": 6606.049347471452,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.17781402936378465,
            "medium_confidence_pct": 0.13784665579119088,
            "low_confidence_pct": 0.3197389885807504,
            "na_confidence_pct": 0.3646003262642741,
            "avg_feature_coverage": 0.851957585644372,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "BMGU",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.11507936507936507,
            "mixed_pct": 0.3306878306878307,
            "instit_pct": 0.09788359788359788,
            "ambiguous_pct": 0.44312169312169314,
            "unobservable_pct": 0.013227513227513227,
            "unclear_pct": 0.4563492063492064,
            "retail_qty_pct": 0.057911065149948295,
            "mixed_qty_pct": 0.13478110996208204,
            "instit_qty_pct": 0.40675629093416066,
            "ambiguous_qty_pct": 0.3578076525336091,
            "unobservable_qty_pct": 0.04274388142019993,
            "unclear_qty_pct": 0.400551533953809,
            "retail_notional_pct": 0.059964403932201135,
            "mixed_notional_pct": 0.14193516192884112,
            "instit_notional_pct": 0.3902967447895008,
            "ambiguous_notional_pct": 0.36629019112094346,
            "unobservable_notional_pct": 0.04151349822851345,
            "unclear_notional_pct": 0.40780368934945693,
            "run_retail_pct": 0.35609756097560974,
            "run_mixed_pct": 0.23414634146341465,
            "run_instit_pct": 0.1073170731707317,
            "run_unclear_pct": 0.3024390243902439,
            "avg_trade_size": 159.04497354497354,
            "avg_run_notional": 586.5268292682927,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Mixed, leaning retail-like",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.2,
            "low_confidence_pct": 0.2634146341463415,
            "na_confidence_pct": 0.5365853658536586,
            "avg_feature_coverage": 0.8880487804878047,
            "observable_run_pct": 0.9853658536585366,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "D5IU",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.6171428571428571,
            "mixed_pct": 0.24428571428571427,
            "instit_pct": 0.12142857142857143,
            "ambiguous_pct": 0.017142857142857144,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.017142857142857144,
            "retail_qty_pct": 0.12282237105310576,
            "mixed_qty_pct": 0.49898491636661263,
            "instit_qty_pct": 0.3502906477808216,
            "ambiguous_qty_pct": 0.027902064799460054,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.027902064799460054,
            "retail_notional_pct": 0.1226254810595638,
            "mixed_notional_pct": 0.5015697525306828,
            "instit_notional_pct": 0.3481770097767034,
            "ambiguous_notional_pct": 0.027627756633050025,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.027627756633050025,
            "run_retail_pct": 0.813953488372093,
            "run_mixed_pct": 0.16020671834625322,
            "run_instit_pct": 0.01614987080103359,
            "run_unclear_pct": 0.009689922480620155,
            "avg_trade_size": 2803.7934761904767,
            "avg_run_notional": 3803.5958010335917,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.4437984496124031,
            "medium_confidence_pct": 0.1479328165374677,
            "low_confidence_pct": 0.23837209302325582,
            "na_confidence_pct": 0.1698966408268734,
            "avg_feature_coverage": 0.8557170542635657,
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
            "retail_pct": 0.5955653824492605,
            "mixed_pct": 0.2474708495859494,
            "instit_pct": 0.11195010533781106,
            "ambiguous_pct": 0.04486764981956989,
            "unobservable_pct": 0.00014601280740910702,
            "unclear_pct": 0.04501366262697899,
            "retail_qty_pct": 0.09302605141591248,
            "mixed_qty_pct": 0.3008990430168303,
            "instit_qty_pct": 0.47910085245196604,
            "ambiguous_qty_pct": 0.1254807502055158,
            "unobservable_qty_pct": 0.0014933029097753848,
            "unclear_qty_pct": 0.1269740531152912,
            "retail_notional_pct": 0.09312810060553658,
            "mixed_notional_pct": 0.30112405644742046,
            "instit_notional_pct": 0.4792890435281696,
            "ambiguous_notional_pct": 0.12497520302380542,
            "unobservable_notional_pct": 0.0014835963950679347,
            "unclear_notional_pct": 0.12645879941887336,
            "run_retail_pct": 0.8259878419452887,
            "run_mixed_pct": 0.1529985971475333,
            "run_instit_pct": 0.013970072480710779,
            "run_unclear_pct": 0.0070434884264671494,
            "avg_trade_size": 1882.2681420913207,
            "avg_run_notional": 2637.2988368014962,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.4989478606499883,
            "medium_confidence_pct": 0.3119593172784662,
            "low_confidence_pct": 0.02905073649754501,
            "na_confidence_pct": 0.16004208557400046,
            "avg_feature_coverage": 0.8653539279869066,
            "observable_run_pct": 0.9999707739069441,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "AJBU",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.36582192824093146,
            "mixed_pct": 0.33127829424264443,
            "instit_pct": 0.2319197760681584,
            "ambiguous_pct": 0.07064540213094819,
            "unobservable_pct": 0.00033459931731751226,
            "unclear_pct": 0.0709800014482657,
            "retail_qty_pct": 0.09974574998638905,
            "mixed_qty_pct": 0.2242784391911332,
            "instit_qty_pct": 0.6154825083189096,
            "ambiguous_qty_pct": 0.047457611233250055,
            "unobservable_qty_pct": 0.013035691270318086,
            "unclear_qty_pct": 0.060493302503568144,
            "retail_notional_pct": 0.09967449922677371,
            "mixed_notional_pct": 0.22419083773943277,
            "instit_notional_pct": 0.6157058388656035,
            "ambiguous_notional_pct": 0.047456441469707865,
            "unobservable_notional_pct": 0.012972382698482181,
            "unclear_notional_pct": 0.060428824168190044,
            "run_retail_pct": 0.7216442120924081,
            "run_mixed_pct": 0.24600157044261686,
            "run_instit_pct": 0.01523432656940943,
            "run_unclear_pct": 0.01711989089556557,
            "avg_trade_size": 5697.516016445306,
            "avg_run_notional": 11787.285183855436,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.3120428152250279,
            "medium_confidence_pct": 0.3714820019010621,
            "low_confidence_pct": 0.053353721535727566,
            "na_confidence_pct": 0.2631214613381824,
            "avg_feature_coverage": 0.8864420176054881,
            "observable_run_pct": 0.9996022234161259,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "JYEU",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.4484620057967425,
            "mixed_pct": 0.3097271506572608,
            "instit_pct": 0.16395726353508422,
            "ambiguous_pct": 0.07758657384655272,
            "unobservable_pct": 0.0002670061643597076,
            "unclear_pct": 0.07785358001091243,
            "retail_qty_pct": 0.08268445281342102,
            "mixed_qty_pct": 0.21694234713917862,
            "instit_qty_pct": 0.5688743561723627,
            "ambiguous_qty_pct": 0.06568072250783426,
            "unobservable_qty_pct": 0.0658181213672034,
            "unclear_qty_pct": 0.13149884387503766,
            "retail_notional_pct": 0.08252467385557792,
            "mixed_notional_pct": 0.2152811815353843,
            "instit_notional_pct": 0.5742603506069003,
            "ambiguous_notional_pct": 0.06654522649244736,
            "unobservable_notional_pct": 0.06138856750969011,
            "unclear_notional_pct": 0.12793379400213747,
            "run_retail_pct": 0.7665726326534835,
            "run_mixed_pct": 0.21263872316064641,
            "run_instit_pct": 0.008856210728154335,
            "run_unclear_pct": 0.011932433457715733,
            "avg_trade_size": 4079.82853556793,
            "avg_run_notional": 7271.979266465723,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.37851334294365546,
            "medium_confidence_pct": 0.3551243938944566,
            "low_confidence_pct": 0.041791106543525795,
            "na_confidence_pct": 0.22457115661836216,
            "avg_feature_coverage": 0.8832870060627797,
            "observable_run_pct": 0.9995723636564287,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "AU8U",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.49453404832398185,
            "mixed_pct": 0.26975713782894056,
            "instit_pct": 0.19425868030394003,
            "ambiguous_pct": 0.04143978136193296,
            "unobservable_pct": 1.0352181204579806e-05,
            "unclear_pct": 0.041450133543137535,
            "retail_qty_pct": 0.1150903460619976,
            "mixed_qty_pct": 0.2708573558305074,
            "instit_qty_pct": 0.5358729311511014,
            "ambiguous_qty_pct": 0.07764101761828732,
            "unobservable_qty_pct": 0.0005383493381063907,
            "unclear_qty_pct": 0.07817936695639371,
            "retail_notional_pct": 0.11636925959349924,
            "mixed_notional_pct": 0.2708038368591854,
            "instit_notional_pct": 0.5349368265330484,
            "ambiguous_notional_pct": 0.0773867916778691,
            "unobservable_notional_pct": 0.0005032853363978952,
            "unclear_notional_pct": 0.077890077014267,
            "run_retail_pct": 0.7965671565013117,
            "run_mixed_pct": 0.17606611910355116,
            "run_instit_pct": 0.01953051321181776,
            "run_unclear_pct": 0.00783621118331933,
            "avg_trade_size": 1655.7390370401044,
            "avg_run_notional": 2742.520953720057,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.46377681373137397,
            "medium_confidence_pct": 0.3274404567979561,
            "low_confidence_pct": 0.02488039918379945,
            "na_confidence_pct": 0.18390233028687047,
            "avg_feature_coverage": 0.8702395445738094,
            "observable_run_pct": 0.999982852929577,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "D5IU",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.5344627138349112,
            "mixed_pct": 0.21740574655372863,
            "instit_pct": 0.17372529480152799,
            "ambiguous_pct": 0.07440624480983225,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.07440624480983225,
            "retail_qty_pct": 0.11837349078894685,
            "mixed_qty_pct": 0.43498516037432117,
            "instit_qty_pct": 0.38517012765490954,
            "ambiguous_qty_pct": 0.061471221181822425,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.061471221181822425,
            "retail_notional_pct": 0.11506619794358508,
            "mixed_notional_pct": 0.4119349935253528,
            "instit_notional_pct": 0.3976258379723779,
            "ambiguous_notional_pct": 0.07537297055868424,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.07537297055868424,
            "run_retail_pct": 0.7757150025087808,
            "run_mixed_pct": 0.1638233818364275,
            "run_instit_pct": 0.02985449071751129,
            "run_unclear_pct": 0.030607124937280482,
            "avg_trade_size": 1806.6070586281348,
            "avg_run_notional": 2728.946588058204,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.369292523833417,
            "medium_confidence_pct": 0.21851480180632213,
            "low_confidence_pct": 0.21776216758655292,
            "na_confidence_pct": 0.194430506773708,
            "avg_feature_coverage": 0.8552308078273956,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "ODBU",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.40754633715798766,
            "mixed_pct": 0.19329214474845544,
            "instit_pct": 0.1440864960282436,
            "ambiguous_pct": 0.25507502206531335,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.25507502206531335,
            "retail_qty_pct": 0.09257628719886632,
            "mixed_qty_pct": 0.17021823334907887,
            "instit_qty_pct": 0.37667264997638167,
            "ambiguous_qty_pct": 0.3605328294756731,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.3605328294756731,
            "retail_notional_pct": 0.09290080189007444,
            "mixed_notional_pct": 0.17060446146003236,
            "instit_notional_pct": 0.375452708538965,
            "ambiguous_notional_pct": 0.3610420281109282,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.3610420281109282,
            "run_retail_pct": 0.6390778533635676,
            "run_mixed_pct": 0.1655328798185941,
            "run_instit_pct": 0.055933484504913075,
            "run_unclear_pct": 0.13945578231292516,
            "avg_trade_size": 3027.008274492498,
            "avg_run_notional": 5184.581065759638,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.21882086167800455,
            "medium_confidence_pct": 0.19160997732426305,
            "low_confidence_pct": 0.28458049886621317,
            "na_confidence_pct": 0.30498866213151926,
            "avg_feature_coverage": 0.853628117913832,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "BMGU",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.14115544967242405,
            "mixed_pct": 0.19416319237641452,
            "instit_pct": 0.21322215604526504,
            "ambiguous_pct": 0.4443120905300774,
            "unobservable_pct": 0.00714711137581894,
            "unclear_pct": 0.45145920190589633,
            "retail_qty_pct": 0.008152789985246801,
            "mixed_qty_pct": 0.015456796355591194,
            "instit_qty_pct": 0.07350912833273211,
            "ambiguous_qty_pct": 0.050547297908530166,
            "unobservable_qty_pct": 0.8523339874178997,
            "unclear_qty_pct": 0.9028812853264299,
            "retail_notional_pct": 0.008202095392666593,
            "mixed_notional_pct": 0.015368168800070576,
            "instit_notional_pct": 0.07094534917811979,
            "ambiguous_notional_pct": 0.05052160701781122,
            "unobservable_notional_pct": 0.8549627796113318,
            "unclear_notional_pct": 0.9054843866291431,
            "run_retail_pct": 0.4898419864559819,
            "run_mixed_pct": 0.17607223476297967,
            "run_instit_pct": 0.08577878103837472,
            "run_unclear_pct": 0.24830699774266365,
            "avg_trade_size": 1169.314353782013,
            "avg_run_notional": 4431.780586907449,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.2076749435665914,
            "medium_confidence_pct": 0.17155756207674944,
            "low_confidence_pct": 0.1963882618510158,
            "na_confidence_pct": 0.42437923250564336,
            "avg_feature_coverage": 0.8825056433408577,
            "observable_run_pct": 0.9887133182844243,
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
          "trade_id": "BMLL-515",
          "timestamp": "2026-04-22T08:59:45.342900",
          "price": 0.67,
          "size": 100.0,
          "notional": 67.0,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 57743,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-514",
          "timestamp": "2026-04-22T08:59:38.340400",
          "price": 0.67,
          "size": 100.0,
          "notional": 67.0,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 57742,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-513",
          "timestamp": "2026-04-22T08:59:24.647600",
          "price": 0.67,
          "size": 100.0,
          "notional": 67.0,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 57741,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-512",
          "timestamp": "2026-04-22T08:59:10.801400",
          "price": 0.67,
          "size": 100.0,
          "notional": 67.0,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 57740,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-511",
          "timestamp": "2026-04-22T08:58:58.533200",
          "price": 0.67,
          "size": 100.0,
          "notional": 67.0,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 57739,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-510",
          "timestamp": "2026-04-22T08:58:41.012100",
          "price": 0.67,
          "size": 100.0,
          "notional": 67.0,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 57738,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-509",
          "timestamp": "2026-04-22T08:58:25.214100",
          "price": 0.67,
          "size": 100.0,
          "notional": 67.0,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 57737,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-508",
          "timestamp": "2026-04-22T08:58:11.849900",
          "price": 0.67,
          "size": 100.0,
          "notional": 67.0,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 57736,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-507",
          "timestamp": "2026-04-22T08:57:55.414500",
          "price": 0.665,
          "size": 100.0,
          "notional": 66.5,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 57735,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-506",
          "timestamp": "2026-04-22T08:57:54.208800",
          "price": 0.67,
          "size": 100.0,
          "notional": 67.0,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 57734,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-505",
          "timestamp": "2026-04-22T08:57:45.922900",
          "price": 0.665,
          "size": 2200.0,
          "notional": 1463.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 57733,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-504",
          "timestamp": "2026-04-22T08:57:45.892800",
          "price": 0.665,
          "size": 2200.0,
          "notional": 1463.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 57733,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-503",
          "timestamp": "2026-04-22T08:57:44.897700",
          "price": 0.665,
          "size": 2200.0,
          "notional": 1463.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 57733,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-502",
          "timestamp": "2026-04-22T08:57:44.897700",
          "price": 0.665,
          "size": 2300.0,
          "notional": 1529.5,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 57733,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-501",
          "timestamp": "2026-04-22T08:57:42.696900",
          "price": 0.67,
          "size": 100.0,
          "notional": 67.0,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 57732,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-500",
          "timestamp": "2026-04-22T08:57:31.905000",
          "price": 0.665,
          "size": 700.0,
          "notional": 465.5,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 57731,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-499",
          "timestamp": "2026-04-22T08:57:31.905000",
          "price": 0.665,
          "size": 500.0,
          "notional": 332.5,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 57731,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-498",
          "timestamp": "2026-04-22T08:57:31.905000",
          "price": 0.665,
          "size": 500.0,
          "notional": 332.5,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 57731,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-497",
          "timestamp": "2026-04-22T08:57:31.904900",
          "price": 0.665,
          "size": 1100.0,
          "notional": 731.5,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 57731,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-496",
          "timestamp": "2026-04-22T08:57:30.909200",
          "price": 0.665,
          "size": 1500.0,
          "notional": 997.5,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 57731,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-495",
          "timestamp": "2026-04-22T08:57:30.909100",
          "price": 0.665,
          "size": 1800.0,
          "notional": 1197.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 57731,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-494",
          "timestamp": "2026-04-22T08:57:30.909100",
          "price": 0.665,
          "size": 1700.0,
          "notional": 1130.5,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 57731,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-493",
          "timestamp": "2026-04-22T08:57:30.909100",
          "price": 0.665,
          "size": 1200.0,
          "notional": 798.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 57731,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-492",
          "timestamp": "2026-04-22T08:57:25.061200",
          "price": 0.67,
          "size": 100.0,
          "notional": 67.0,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 57730,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-491",
          "timestamp": "2026-04-22T08:57:09.332300",
          "price": 0.67,
          "size": 100.0,
          "notional": 67.0,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 57729,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-490",
          "timestamp": "2026-04-22T08:56:47.400300",
          "price": 0.665,
          "size": 100.0,
          "notional": 66.5,
          "bucket": "RETAIL",
          "confidence": "MEDIUM",
          "run_id": 57728,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-489",
          "timestamp": "2026-04-22T08:56:47.400300",
          "price": 0.665,
          "size": 100.0,
          "notional": 66.5,
          "bucket": "RETAIL",
          "confidence": "MEDIUM",
          "run_id": 57728,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-488",
          "timestamp": "2026-04-22T08:56:47.400300",
          "price": 0.665,
          "size": 100.0,
          "notional": 66.5,
          "bucket": "RETAIL",
          "confidence": "MEDIUM",
          "run_id": 57728,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-487",
          "timestamp": "2026-04-22T08:56:39.380700",
          "price": 0.67,
          "size": 100.0,
          "notional": 67.0,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 57727,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-486",
          "timestamp": "2026-04-22T08:56:37.393400",
          "price": 0.665,
          "size": 400.0,
          "notional": 266.0,
          "bucket": "RETAIL",
          "confidence": "MEDIUM",
          "run_id": 57726,
          "d1": "SINGLE_FILL",
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
      "total_trades": 47940,
      "price_moving_trades": 11481,
      "pct_price_moving": 23.948685857321653,
      "all_movers": {
        "count": 11481,
        "avg_size": 1495.3997474087623,
        "median_size": 201.0,
        "retail_count": 9264,
        "mixed_count": 1928,
        "institutional_count": 221,
        "ambiguous_count": 66,
        "unobservable_count": 2,
        "retail_pct": 80.68983538019336,
        "mixed_pct": 16.7929622855152,
        "instit_pct": 1.9249194321052172,
        "unclear_pct": 0.5922829021862207
      },
      "positive_movers": {
        "count": 5735,
        "avg_size": 1471.993635571055,
        "median_size": 139.0,
        "retail_count": 4608,
        "mixed_count": 993,
        "institutional_count": 105,
        "ambiguous_count": 27,
        "unobservable_count": 2,
        "retail_pct": 80.34873583260679,
        "mixed_pct": 17.31473408892764,
        "instit_pct": 1.8308631211857016,
        "unclear_pct": 0.5056669572798606
      },
      "negative_movers": {
        "count": 5746,
        "avg_size": 1518.7610511660284,
        "median_size": 202.5,
        "retail_count": 4656,
        "mixed_count": 935,
        "institutional_count": 116,
        "ambiguous_count": 39,
        "unobservable_count": 0,
        "retail_pct": 81.03028193525931,
        "mixed_pct": 16.272189349112427,
        "instit_pct": 2.018795683954055,
        "unclear_pct": 0.6787330316742082
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
            "avg_short_ratio": 0.08408825035286806,
            "max_short_ratio": 0.36836158192090396,
            "interpretation": "Moderate short interest"
          }
        },
        "3M": {
          "stats": {
            "valid": true,
            "avg_short_ratio": 0.06552159745467778,
            "max_short_ratio": 0.36836158192090396,
            "interpretation": "Moderate short interest"
          }
        },
        "6M": {
          "stats": {
            "valid": true,
            "avg_short_ratio": 0.06208429123814737,
            "max_short_ratio": 0.36836158192090396,
            "interpretation": "Moderate short interest"
          }
        }
      },
      "correlation": {
        "valid": true,
        "correlation": -0.15051312918849302,
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
            "avg_short_ratio": 0.03035378207755164
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
            "avg_short_ratio": 0.03035378207755164,
            "change_pct": null
          },
          {
            "month": "2026-03",
            "avg_short_ratio": 0.1453584600680963,
            "change_pct": 378.88088442065083
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
        "interpretation": "Shorts covering significantly (-79% MoM)"
      },
      "short_series": {
        "valid": true,
        "rows": [
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
          },
          {
            "date": "2025-12-04",
            "short_ratio": 0.20565704183853858,
            "short_vol": 69800,
            "total_vol": 339400,
            "close": 0.675,
            "return": 0.0
          },
          {
            "date": "2025-12-03",
            "short_ratio": 0.1316745876432765,
            "short_vol": 47100,
            "total_vol": 357700,
            "close": 0.675,
            "return": -0.007352941176470562
          },
          {
            "date": "2025-12-02",
            "short_ratio": 0.23535638673253353,
            "short_vol": 66700,
            "total_vol": 283400,
            "close": 0.68,
            "return": 0.0
          },
          {
            "date": "2025-12-01",
            "short_ratio": 0.1338889874091151,
            "short_vol": 75500,
            "total_vol": 563900,
            "close": 0.68,
            "return": 0.0
          },
          {
            "date": "2025-11-28",
            "short_ratio": 0.09212067955477446,
            "short_vol": 62900,
            "total_vol": 682800,
            "close": 0.68,
            "return": 0.0
          },
          {
            "date": "2025-11-27",
            "short_ratio": 0.06048687147868608,
            "short_vol": 56900,
            "total_vol": 940700,
            "close": 0.68,
            "return": 0.0
          }
        ]
      },
      "peer_comparison": [
        {
          "ticker": "CRPU",
          "avg_short_ratio": 0.06552159745467778,
          "max_short_ratio": 0.36836158192090396,
          "is_target": true
        },
        {
          "ticker": "BMGU",
          "avg_short_ratio": 1.976597090449083e-05,
          "max_short_ratio": 0.007352941176470588,
          "is_target": false
        },
        {
          "ticker": "ODBU",
          "avg_short_ratio": 0.0008335682616543101,
          "max_short_ratio": 0.1091703056768559,
          "is_target": false
        },
        {
          "ticker": "D5IU",
          "avg_short_ratio": 0.0014637631039160614,
          "max_short_ratio": 0.2702329197017246,
          "is_target": false
        },
        {
          "ticker": "AU8U",
          "avg_short_ratio": 0.06252094579121995,
          "max_short_ratio": 0.583009889700239,
          "is_target": false
        },
        {
          "ticker": "AJBU",
          "avg_short_ratio": 0.08153051392642637,
          "max_short_ratio": 0.4312404120096428,
          "is_target": false
        },
        {
          "ticker": "JYEU",
          "avg_short_ratio": 0.10459705474964533,
          "max_short_ratio": 0.6966426355939308,
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
          "opening": 0.0023232182482185297,
          "continuous": 0.9417904868957759,
          "closing": 0.04744597367705035,
          "auctions": 0.05820951310422403,
          "other": 0.0
        },
        "1M": {
          "opening": 0.054531795015160325,
          "continuous": 0.877561931962024,
          "closing": 0.05707906718602819,
          "auctions": 0.12243806803797597,
          "other": 0.0
        },
        "3M": {
          "opening": 0.048184692136820674,
          "continuous": 0.8568423873388109,
          "closing": 0.08178610320109636,
          "auctions": 0.14315761266118912,
          "other": 0.0
        },
        "6M": {
          "opening": 0.036001391835463706,
          "continuous": 0.8736471271048842,
          "closing": 0.07866114205597817,
          "auctions": 0.12635287289511582,
          "other": 0.0
        }
      },
      "hhi": {
        "1D": 0.17386429535942724,
        "1M": 0.20854043141178735,
        "3M": 0.2393408946216202,
        "6M": 0.22770237876824656
      },
      "profile_buckets": [
        {
          "time": "08:30",
          "avg_share": 0.0175
        },
        {
          "time": "09:00",
          "avg_share": 0.0985
        },
        {
          "time": "09:30",
          "avg_share": 0.0381
        },
        {
          "time": "10:00",
          "avg_share": 0.0444
        },
        {
          "time": "10:30",
          "avg_share": 0.0353
        },
        {
          "time": "11:00",
          "avg_share": 0.0324
        },
        {
          "time": "11:30",
          "avg_share": 0.0405
        },
        {
          "time": "12:00",
          "avg_share": 0.2324
        },
        {
          "time": "12:30",
          "avg_share": 0.0098
        },
        {
          "time": "13:00",
          "avg_share": 0.0198
        },
        {
          "time": "13:30",
          "avg_share": 0.019
        },
        {
          "time": "14:00",
          "avg_share": 0.0366
        },
        {
          "time": "14:30",
          "avg_share": 0.0333
        },
        {
          "time": "15:00",
          "avg_share": 0.028
        },
        {
          "time": "15:30",
          "avg_share": 0.0507
        },
        {
          "time": "16:00",
          "avg_share": 0.0445
        },
        {
          "time": "16:30",
          "avg_share": 0.1063
        },
        {
          "time": "17:00",
          "avg_share": 0.1132
        }
      ],
      "peers_hhi_rows": [
        {
          "ticker": "CRPU",
          "auctions_pct": 11.634848951551419,
          "hhi": 0.22768282018889635,
          "interp": {
            "text": "Moderate",
            "cls": "bg-amber-500/20 text-amber-400",
            "you": true
          }
        },
        {
          "ticker": "ODBU",
          "auctions_pct": 7.118341280334996,
          "hhi": 0.3937398439858405,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "D5IU",
          "auctions_pct": 12.714280837895409,
          "hhi": 0.41882308873223156,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "BMGU",
          "auctions_pct": 0.7570181584120349,
          "hhi": 0.7504933693917757,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "AU8U",
          "auctions_pct": 13.561066574065933,
          "hhi": 0.1734768637457577,
          "interp": {
            "text": "Moderate",
            "cls": "bg-amber-500/20 text-amber-400"
          }
        },
        {
          "ticker": "JYEU",
          "auctions_pct": 13.338910643754723,
          "hhi": 0.20937640468832733,
          "interp": {
            "text": "Moderate",
            "cls": "bg-amber-500/20 text-amber-400"
          }
        },
        {
          "ticker": "AJBU",
          "auctions_pct": 20.418301919988142,
          "hhi": 0.1473452571148046,
          "interp": {
            "text": "Spread out",
            "cls": "bg-emerald-500/20 text-emerald-400"
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
