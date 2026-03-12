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
      "marketCap": 125453076.1,
      "sector": "Software - Application",
      "industry": "Technology"
    },
    {
      "ticker": "ITS",
      "name": "Info-Tech",
      "marketCap": 270900000.0,
      "sector": "Software - Application",
      "industry": "Technology"
    },
    {
      "ticker": "LVR",
      "name": "17LIVE GROUP",
      "marketCap": 144792568.73999998,
      "sector": "Software - Application",
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
      "ticker": "U77",
      "name": "Sarine Tech",
      "marketCap": 69836744.63499999,
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
      "ticker": "KUX",
      "name": "OIO",
      "marketCap": 11609592.972,
      "sector": "Software - Application",
      "industry": "Technology"
    },
    {
      "ticker": "QS9",
      "name": "G Invacom",
      "marketCap": 15484746.939000001,
      "sector": "Communication Equipment",
      "industry": "Technology"
    },
    {
      "ticker": "5DD",
      "name": "Micro-Mechanics",
      "marketCap": 265550892.70999998,
      "sector": "Semiconductor Equipment & Materials",
      "industry": "Technology"
    }
  ]
};

export const REPORT_DATA: ReportData = {
  "meta": {
    "market": "XSES",
    "ticker": "TKU",
    "company": "Toku Ltd",
    "asof_date": "2026-03-06",
    "industry": "Technology",
    "sector": "Software - Application",
    "market_cap_display": "125.5M",
    "market_cap_category": "small",
    "universe_total": 558,
    "peers_count": 8,
    "page_title_template": "Liquidity Analysis Report — {market}/{ticker} — {asof}"
  },
  "q01": {
    "primary_liquidity_period": "30d",
    "periods": {
      "1d": {
        "label": "1D",
        "window_days": 1,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 1,
          "score_pca": 72.93906810035843,
          "score_pca_percentile": 72.93906810035843,
          "rank_pca": 152,
          "total": 558,
          "adv_notional_sgd": 150238.0,
          "adv_volume_shares": 682900.0,
          "free_float_shares": null,
          "turnover_ratio": 0.001197563301518758,
          "votes": 85.0,
          "trades": 85.0,
          "spread_pct": 0.026210630344175673,
          "spread_ticks": 1.1776061776061777,
          "amihud": 0.0,
          "volatility": 0.42378592656177866
        },
        "pca": {
          "valid": true,
          "window_days": 1,
          "variance_explained": 0.5218151727479609,
          "loadings": {
            "log_adv": 0.5510032902118109,
            "log_trades": 0.5084246213675546,
            "log_turnover": 0.5171734904639673,
            "neg_spread": 0.3619129804355501,
            "neg_amihud": 0.047689569659793866,
            "neg_vol": -0.19281094072239802
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
          "peer_median_adv": 10122.5,
          "peer_median_score_pca": 44.713261648745515,
          "peer_median_trades": 5.0,
          "peer_median_volatility": 0.11350076166974442,
          "peer_median_spread_pct": 0.030731906499236388,
          "peer_median_spread_ticks": 1.8727063475669135,
          "peer_median_amihud": 2.967744593051291e-07,
          "peer_median_turnover_ratio": 8.996735982362756e-05,
          "target_vs_peer": {
            "score_pca_delta": 28.23,
            "adv_delta_pct": 1384.2,
            "trades_delta_pct": 1600.0,
            "volatility_delta_pct": -273.38,
            "spread_pct_delta_pct": 14.71,
            "spread_ticks_delta_pct": -37.12,
            "amihud_delta_pct": 100.0,
            "turnover_ratio_delta_pct": 1231.11
          }
        },
        "peer_liquidity": [
          {
            "ticker": "TKU",
            "score_pca": 72.93906810035843,
            "rank_pca": 152,
            "adv": 150238.0,
            "trades": 85.0,
            "volatility": 0.42378592656177866,
            "spread_pct": 0.026210630344175673,
            "spread_ticks": 1.1776061776061777,
            "amihud": 0.0,
            "turnover_ratio": 0.001197563301518758,
            "is_target": true
          },
          {
            "ticker": "ITS",
            "score_pca": 75.80645161290323,
            "rank_pca": 136,
            "adv": 145908.0,
            "trades": 153.0,
            "volatility": 0.35313717009689455,
            "spread_pct": 0.01304000336516217,
            "spread_ticks": 1.4133738601823709,
            "amihud": 6.287737428109193e-08,
            "turnover_ratio": 0.0020009301140722704,
            "is_target": false
          },
          {
            "ticker": "LVR",
            "score_pca": 50.7168458781362,
            "rank_pca": 276,
            "adv": 17935.0,
            "trades": 8.0,
            "volatility": 0.22700152333948884,
            "spread_pct": 0.02772887323943663,
            "spread_ticks": 4.666666666666667,
            "amihud": 3.2606374220096594e-07,
            "turnover_ratio": 0.00014586580330886828,
            "is_target": false
          },
          {
            "ticker": "NXR",
            "score_pca": 21.68458781362007,
            "rank_pca": 438,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.0,
            "spread_pct": 0.07565263718700053,
            "spread_ticks": 5.916666666666667,
            "amihud": null,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "U77",
            "score_pca": 38.70967741935484,
            "rank_pca": 343,
            "adv": 2310.0,
            "trades": 2.0,
            "volatility": 0.0,
            "spread_pct": 0.033734939759036145,
            "spread_ticks": 1.4,
            "amihud": 1.9677292404565162e-05,
            "turnover_ratio": 3.406891633838685e-05,
            "is_target": false
          },
          {
            "ticker": "532",
            "score_pca": 3.136200716845878,
            "rank_pca": 538,
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
            "ticker": "KUX",
            "score_pca": 6.272401433691756,
            "rank_pca": 524,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.0,
            "spread_pct": 0.4331210191082802,
            "spread_ticks": 17.0,
            "amihud": null,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "QS9",
            "score_pca": 82.79569892473118,
            "rank_pca": 97,
            "adv": 249597.2,
            "trades": 99.0,
            "volatility": 1.022437442791736,
            "spread_pct": 0.022428884026258217,
            "spread_ticks": 1.25,
            "amihud": 2.967744593051291e-07,
            "turnover_ratio": 0.01891010510246435,
            "is_target": false
          },
          {
            "ticker": "5DD",
            "score_pca": 74.91039426523297,
            "rank_pca": 141,
            "adv": 296541.0,
            "trades": 99.0,
            "volatility": 0.25289582490582113,
            "spread_pct": 0.012332811336739139,
            "spread_ticks": 2.3320388349514563,
            "amihud": 5.4390564063871446e-08,
            "turnover_ratio": 0.0012947661155201882,
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
              "mean": 0.2741482008630471,
              "median": 0.1358467348483638,
              "min": 0.0,
              "max": 6.608197362010048,
              "p5": 0.0,
              "p95": 1.004466441120945,
              "count": 558
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 3608814.094188679,
              "median": 12272.849999999999,
              "min": 0.0,
              "max": 278393500.0,
              "p5": 0.0,
              "p95": 16403130.649999999,
              "count": 558
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.1143745021047,
              "median": 0.033141950240395845,
              "min": 0.0002766527981379454,
              "max": 1.4654377880184328,
              "p5": 0.003961946407659959,
              "p95": 0.5334272135187442,
              "count": 557
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.013521212572884566,
              "median": 0.0002545433798972171,
              "min": 0.0,
              "max": 5.751104080152923,
              "p5": 0.0,
              "p95": 0.009758343521984304,
              "count": 551
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 0.0012988376714894627,
              "median": 1.2954611786250723e-08,
              "min": 0.0,
              "max": 0.45454545454545453,
              "p5": 0.0,
              "p95": 6.26615423193764e-05,
              "count": 399
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 505.93189964157705,
              "median": 6.0,
              "min": 0.0,
              "max": 11102.0,
              "p5": 0.0,
              "p95": 3253.2999999999993,
              "count": 558
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.1509466687610723,
              "median": 0.10182436504520818,
              "min": 0.0,
              "max": 0.42378592656177866,
              "p5": 0.0,
              "p95": 0.3990588617990692,
              "count": 8
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 2087756.0,
              "median": 10122.5,
              "min": 0.0,
              "max": 16385657.0,
              "p5": 0.0,
              "p95": 10703260.34999999,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.1596988572476071,
              "median": 0.030731906499236388,
              "min": 0.0014360883110988742,
              "max": 0.6666666666666666,
              "p5": 0.005497458580021028,
              "p95": 0.5849256900212313,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0017669104222301669,
              "median": 8.996735982362756e-05,
              "min": 0.0,
              "max": 0.010756855242603051,
              "p5": 0.0,
              "p95": 0.007692281447617274,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 4.013328166702082e-06,
              "median": 6.287737428109193e-08,
              "min": 0.0,
              "max": 1.9677292404565162e-05,
              "p5": 8.146249263831093e-11,
              "p95": 1.5807046672092318e-05,
              "count": 5
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 436.875,
              "median": 5.0,
              "min": 0.0,
              "max": 3247.0,
              "p5": 0.0,
              "p95": 2164.0999999999985,
              "count": 8
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 89036.4,
              "median": 10122.5,
              "min": 0.0,
              "max": 296541.0,
              "p5": 0.0,
              "p95": 280110.67,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 45.125,
              "median": 5.0,
              "min": 0.0,
              "max": 153.0,
              "p5": 0.0,
              "p95": 134.09999999999997,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.23193399514174257,
              "median": 0.11350076166974442,
              "min": 0.0,
              "max": 1.022437442791736,
              "p5": 0.0,
              "p95": 0.7881823473485412,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.16058822933607247,
              "median": 0.030731906499236388,
              "min": 0.012332811336739139,
              "max": 0.6666666666666666,
              "p5": 0.012580328546687199,
              "p95": 0.5849256900212313,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 4.372343253558395,
              "median": 1.8727063475669135,
              "min": 1.0,
              "max": 17.0,
              "p5": 1.0875,
              "p95": 13.120833333333328,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 4.083479708883244e-06,
              "median": 2.967744593051291e-07,
              "min": 5.4390564063871446e-08,
              "max": 1.9677292404565162e-05,
              "p5": 5.608792610731554e-08,
              "p95": 1.5807046672092318e-05,
              "count": 5
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.002798217006463008,
              "median": 8.996735982362756e-05,
              "min": 0.0,
              "max": 0.01891010510246435,
              "p5": 0.0,
              "p95": 0.012991893856527114,
              "count": 8
            }
          },
          "returns": {
            "window_days": 1,
            "n_obs": 1,
            "stock": 0.0,
            "market": 0.0003486888402948196,
            "sector": -0.0029239766081872176,
            "peers": 0.0,
            "vs_market": -0.0003486888402948196,
            "vs_sector": 0.0029239766081872176,
            "vs_peers": 0.0
          }
        }
      },
      "1w": {
        "label": "1W",
        "window_days": 5,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 5,
          "score_pca": 70.96774193548387,
          "score_pca_percentile": 70.96774193548387,
          "rank_pca": 163,
          "total": 558,
          "adv_notional_sgd": 258704.0,
          "adv_volume_shares": 1124800.0,
          "free_float_shares": null,
          "turnover_ratio": 0.0019724984647068373,
          "votes": 89.0,
          "trades": 89.0,
          "spread_pct": 0.026210630344175673,
          "spread_ticks": 1.1888111888111887,
          "amihud": 9.952583899784664e-08,
          "volatility": 0.5199005799316613
        },
        "pca": {
          "valid": true,
          "window_days": 5,
          "variance_explained": 0.5193371659350308,
          "loadings": {
            "log_adv": 0.5529454316548981,
            "log_trades": 0.5073922439741514,
            "log_turnover": 0.5105808443510677,
            "neg_spread": 0.40729871030743015,
            "neg_amihud": 0.09463647829712117,
            "neg_vol": 0.035543766064214645
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
          "peer_median_adv": 22365.5,
          "peer_median_score_pca": 50.26881720430107,
          "peer_median_trades": 9.5,
          "peer_median_volatility": 0.431903452977571,
          "peer_median_spread_pct": 0.02808191189264718,
          "peer_median_spread_ticks": 1.8727063475669135,
          "peer_median_amihud": 5.4390564063871446e-08,
          "peer_median_turnover_ratio": 0.00027761328278349975,
          "target_vs_peer": {
            "score_pca_delta": 20.7,
            "adv_delta_pct": 1056.7,
            "trades_delta_pct": 836.84,
            "volatility_delta_pct": -20.37,
            "spread_pct_delta_pct": 6.66,
            "spread_ticks_delta_pct": -36.52,
            "amihud_delta_pct": -82.98,
            "turnover_ratio_delta_pct": 610.52
          }
        },
        "peer_liquidity": [
          {
            "ticker": "TKU",
            "score_pca": 70.96774193548387,
            "rank_pca": 163,
            "adv": 258704.0,
            "trades": 89.0,
            "volatility": 0.5199005799316613,
            "spread_pct": 0.026210630344175673,
            "spread_ticks": 1.1888111888111887,
            "amihud": 9.952583899784664e-08,
            "turnover_ratio": 0.0019724984647068373,
            "is_target": true
          },
          {
            "ticker": "ITS",
            "score_pca": 83.69175627240143,
            "rank_pca": 92,
            "adv": 976910.0,
            "trades": 412.0,
            "volatility": 0.906346648142768,
            "spread_pct": 0.01304000336516217,
            "spread_ticks": 1.4133738601823709,
            "amihud": 3.96725648662304e-08,
            "turnover_ratio": 0.013522199808645321,
            "is_target": false
          },
          {
            "ticker": "LVR",
            "score_pca": 49.10394265232975,
            "rank_pca": 285,
            "adv": 17935.0,
            "trades": 8.0,
            "volatility": 0.08821256840113587,
            "spread_pct": 0.016704013037278483,
            "spread_ticks": 2.9285714285714284,
            "amihud": 3.2606374220096594e-07,
            "turnover_ratio": 0.00014586580330886828,
            "is_target": false
          },
          {
            "ticker": "NXR",
            "score_pca": 37.27598566308244,
            "rank_pca": 351,
            "adv": 3850.0,
            "trades": 1.0,
            "volatility": 0.4328838865682642,
            "spread_pct": 0.038647342995169046,
            "spread_ticks": 3.076923076923077,
            "amihud": 0.0,
            "turnover_ratio": 0.00017799074647467967,
            "is_target": false
          },
          {
            "ticker": "U77",
            "score_pca": 51.4336917562724,
            "rank_pca": 272,
            "adv": 26796.0,
            "trades": 11.0,
            "volatility": 0.5616434499183248,
            "spread_pct": 0.033734939759036145,
            "spread_ticks": 1.4,
            "amihud": 1.7770953731544884e-06,
            "turnover_ratio": 0.0003772358190923198,
            "is_target": false
          },
          {
            "ticker": "532",
            "score_pca": 2.1505376344086025,
            "rank_pca": 544,
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
            "ticker": "KUX",
            "score_pca": 4.121863799283155,
            "rank_pca": 536,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.0,
            "spread_pct": 0.5013979496738118,
            "spread_ticks": 20.555555555555557,
            "amihud": null,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "QS9",
            "score_pca": 79.21146953405018,
            "rank_pca": 117,
            "adv": 477037.0,
            "trades": 165.0,
            "volatility": 0.8705046110634768,
            "spread_pct": 0.022428884026258217,
            "spread_ticks": 1.25,
            "amihud": 1.3650382579272555e-07,
            "turnover_ratio": 0.03811286554717532,
            "is_target": false
          },
          {
            "ticker": "5DD",
            "score_pca": 74.37275985663082,
            "rank_pca": 144,
            "adv": 403180.0,
            "trades": 160.0,
            "volatility": 0.43092301938687777,
            "spread_pct": 0.012332811336739139,
            "spread_ticks": 2.3320388349514563,
            "amihud": 5.4390564063871446e-08,
            "turnover_ratio": 0.001751111342978865,
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
              "mean": 0.5743224548774535,
              "median": 0.358237128577251,
              "min": 0.0,
              "max": 8.694826047713663,
              "p5": 0.0,
              "p95": 1.745460845429757,
              "count": 558
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 5081284.188116431,
              "median": 22883.55,
              "min": 0.0,
              "max": 478549500.0,
              "p5": 0.0,
              "p95": 24140548.149999995,
              "count": 558
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.10209786053439489,
              "median": 0.03275027912169709,
              "min": 0.00028584167598335404,
              "max": 1.401569955364014,
              "p5": 0.0038621955604619205,
              "p95": 0.4789924533462627,
              "count": 557
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.014095088836963079,
              "median": 0.0004274593074469813,
              "min": 0.0,
              "max": 5.751104080152923,
              "p5": 0.0,
              "p95": 0.015550722553619618,
              "count": 551
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 0.0002466379912358987,
              "median": 8.012576326132786e-08,
              "min": 0.0,
              "max": 0.05557821834235311,
              "p5": 0.0,
              "p95": 0.00014451523286719846,
              "count": 517
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 648.3673835125448,
              "median": 10.0,
              "min": 0.0,
              "max": 17131.0,
              "p5": 0.0,
              "p95": 3980.3999999999983,
              "count": 558
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.34657928682543077,
              "median": 0.3482655241047781,
              "min": 0.0,
              "max": 0.906346648142768,
              "p5": 0.0,
              "p95": 0.7857005287642127,
              "count": 8
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 3210399.375,
              "median": 22365.5,
              "min": 0.0,
              "max": 24399000.0,
              "p5": 0.0,
              "p95": 16201268.499999989,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.16223180382714336,
              "median": 0.02997278505160591,
              "min": 0.0014528847758469578,
              "max": 0.6666666666666666,
              "p5": 0.005508376282107282,
              "p95": 0.6088226157191674,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.00401108308437252,
              "median": 0.00027761328278349975,
              "min": 0.0,
              "max": 0.015892874032752125,
              "p5": 0.0,
              "p95": 0.015063138054314742,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 3.2044549263339567e-07,
              "median": 3.96725648662304e-08,
              "min": 0.0,
              "max": 1.7770953731544884e-06,
              "p5": 0.0,
              "p95": 1.3417858838684306e-06,
              "count": 7
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 700.0,
              "median": 9.5,
              "min": 0.0,
              "max": 5079.0,
              "p5": 0.0,
              "p95": 3445.5499999999975,
              "count": 8
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 238213.5,
              "median": 22365.5,
              "min": 0.0,
              "max": 976910.0,
              "p5": 0.0,
              "p95": 801954.4499999997,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 94.625,
              "median": 9.5,
              "min": 0.0,
              "max": 412.0,
              "p5": 0.0,
              "p95": 325.54999999999984,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.4113142729351059,
              "median": 0.431903452977571,
              "min": 0.0,
              "max": 0.906346648142768,
              "p5": 0.0,
              "p95": 0.893801935165016,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.1631190763575152,
              "median": 0.02808191189264718,
              "min": 0.012332811336739139,
              "max": 0.6666666666666666,
              "p5": 0.012580328546687199,
              "p95": 0.6088226157191674,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 4.244557844522986,
              "median": 1.8727063475669135,
              "min": 1.0,
              "max": 20.555555555555557,
              "p5": 1.0875,
              "p95": 14.43803418803418,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 3.333894385826117e-07,
              "median": 5.4390564063871446e-08,
              "min": 0.0,
              "max": 1.7770953731544884e-06,
              "p5": 0.0,
              "p95": 1.3417858838684306e-06,
              "count": 7
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0067609086334594224,
              "median": 0.00027761328278349975,
              "min": 0.0,
              "max": 0.03811286554717532,
              "p5": 0.0,
              "p95": 0.02950613253868981,
              "count": 8
            }
          },
          "returns": {
            "window_days": 5,
            "n_obs": 5,
            "stock": -0.15384615384615397,
            "market": -0.02939294732315645,
            "sector": -0.04331843913049227,
            "peers": -0.04038069913564735,
            "vs_market": -0.12445320652299752,
            "vs_sector": -0.1105277147156617,
            "vs_peers": -0.11346545471050662
          }
        }
      },
      "2w": {
        "label": "2W",
        "window_days": 10,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 10,
          "score_pca": 73.11827956989248,
          "score_pca_percentile": 73.11827956989248,
          "rank_pca": 151,
          "total": 558,
          "adv_notional_sgd": 418250.0,
          "adv_volume_shares": 1673000.0,
          "free_float_shares": null,
          "turnover_ratio": 0.0029338459561295683,
          "votes": 89.0,
          "trades": 89.0,
          "spread_pct": 0.025180622615063375,
          "spread_ticks": 1.1832086832086832,
          "amihud": 6.517387626349488e-08,
          "volatility": 0.6405277162569054
        },
        "pca": {
          "valid": true,
          "window_days": 10,
          "variance_explained": 0.518284515130764,
          "loadings": {
            "log_adv": 0.5509300971068782,
            "log_trades": 0.5007777741119152,
            "log_turnover": 0.5063576985944067,
            "neg_spread": 0.4090207918584399,
            "neg_amihud": 0.1366939598102251,
            "neg_vol": 0.057587180087184435
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
          "peer_median_adv": 11110.25,
          "peer_median_score_pca": 47.043010752688176,
          "peer_median_trades": 7.5,
          "peer_median_volatility": 0.40161753134357253,
          "peer_median_spread_pct": 0.02687804483680266,
          "peer_median_spread_ticks": 1.60400275357721,
          "peer_median_amihud": 6.443837541992862e-08,
          "peer_median_turnover_ratio": 0.00015959134601847765,
          "target_vs_peer": {
            "score_pca_delta": 26.08,
            "adv_delta_pct": 3664.5,
            "trades_delta_pct": 1086.67,
            "volatility_delta_pct": -59.49,
            "spread_pct_delta_pct": 6.32,
            "spread_ticks_delta_pct": -26.23,
            "amihud_delta_pct": -1.14,
            "turnover_ratio_delta_pct": 1738.35
          }
        },
        "peer_liquidity": [
          {
            "ticker": "TKU",
            "score_pca": 73.11827956989248,
            "rank_pca": 151,
            "adv": 418250.0,
            "trades": 89.0,
            "volatility": 0.6405277162569054,
            "spread_pct": 0.025180622615063375,
            "spread_ticks": 1.1832086832086832,
            "amihud": 6.517387626349488e-08,
            "turnover_ratio": 0.0029338459561295683,
            "is_target": true
          },
          {
            "ticker": "ITS",
            "score_pca": 85.84229390681004,
            "rank_pca": 80,
            "adv": 1580268.25,
            "trades": 602.5,
            "volatility": 0.9896850460376542,
            "spread_pct": 0.011780782344205655,
            "spread_ticks": 1.2935502644534325,
            "amihud": 2.5216080611249932e-08,
            "turnover_ratio": 0.02154591475534149,
            "is_target": false
          },
          {
            "ticker": "LVR",
            "score_pca": 48.028673835125446,
            "rank_pca": 291,
            "adv": 12621.25,
            "trades": 7.5,
            "volatility": 0.13170731388761142,
            "spread_pct": 0.015343633284545495,
            "spread_ticks": 2.711206896551724,
            "amihud": 2.648487318911764e-07,
            "turnover_ratio": 0.00010023953307955402,
            "is_target": false
          },
          {
            "ticker": "NXR",
            "score_pca": 36.200716845878134,
            "rank_pca": 357,
            "adv": 4120.5,
            "trades": 1.5,
            "volatility": 0.3454482454090976,
            "spread_pct": 0.04939024390243894,
            "spread_ticks": 3.95,
            "amihud": 0.0,
            "turnover_ratio": 0.0001788807002070531,
            "is_target": false
          },
          {
            "ticker": "U77",
            "score_pca": 46.0573476702509,
            "rank_pca": 302,
            "adv": 9599.25,
            "trades": 7.5,
            "volatility": 0.4577868172780475,
            "spread_pct": 0.03445648746853568,
            "spread_ticks": 1.4592592592592593,
            "amihud": 1.7770953731544884e-06,
            "turnover_ratio": 0.0001403019918299022,
            "is_target": false
          },
          {
            "ticker": "532",
            "score_pca": 2.5089605734767026,
            "rank_pca": 542,
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
            "ticker": "KUX",
            "score_pca": 3.405017921146954,
            "rank_pca": 540,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.3011976095522664,
            "spread_pct": 0.5398174701117032,
            "spread_ticks": 22.596153846153847,
            "amihud": 0.0018867924528301833,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "QS9",
            "score_pca": 80.82437275985663,
            "rank_pca": 108,
            "adv": 697770.2,
            "trades": 230.5,
            "volatility": 1.4005213411618949,
            "spread_pct": 0.019299602205069634,
            "spread_ticks": 1.196236241386743,
            "amihud": 8.459168106692574e-08,
            "turnover_ratio": 0.04852761669820724,
            "is_target": false
          },
          {
            "ticker": "5DD",
            "score_pca": 74.91039426523297,
            "rank_pca": 141,
            "adv": 423175.0,
            "trades": 154.5,
            "volatility": 0.5579911098216846,
            "spread_pct": 0.009494196983022776,
            "spread_ticks": 1.7487462478951608,
            "amihud": 4.4285069772931515e-08,
            "turnover_ratio": 0.00188025786756708,
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
              "mean": 0.5962987628229371,
              "median": 0.4000358774709386,
              "min": 0.0,
              "max": 8.734987120768983,
              "p5": 0.0,
              "p95": 1.6670054520244688,
              "count": 558
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 4260698.454005603,
              "median": 20243.35,
              "min": 0.0,
              "max": 305832197.0,
              "p5": 0.0,
              "p95": 17007082.824999932,
              "count": 558
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.09657130531340709,
              "median": 0.026972187098427674,
              "min": 0.0002795081736230097,
              "max": 1.3933244615959963,
              "p5": 0.0038043288147770007,
              "p95": 0.4825165094130002,
              "count": 557
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.013659715970111952,
              "median": 0.00041638637883354026,
              "min": 0.0,
              "max": 5.800540504910685,
              "p5": 0.0,
              "p95": 0.013610026730226519,
              "count": 551
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 0.0001120388756284065,
              "median": 9.006712774066731e-08,
              "min": 0.0,
              "max": 0.01961646977631635,
              "p5": 0.0,
              "p95": 4.9276287070367166e-05,
              "count": 533
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 564.5564516129032,
              "median": 7.5,
              "min": 0.0,
              "max": 14460.0,
              "p5": 0.0,
              "p95": 3039.424999999995,
              "count": 558
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.38294689427921513,
              "median": 0.323322927480682,
              "min": 0.0,
              "max": 0.9896850460376542,
              "p5": 0.046097559860664,
              "p95": 0.8674799806143919,
              "count": 8
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 3257189.28125,
              "median": 11110.25,
              "min": 0.0,
              "max": 24032655.0,
              "p5": 0.0,
              "p95": 16174319.637499988,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.16800192230757402,
              "median": 0.02981855504179953,
              "min": 0.001379472067433298,
              "max": 0.6666666666666666,
              "p5": 0.005019930664303623,
              "p95": 0.6222694478724293,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.005024884831956245,
              "median": 0.00015959134601847765,
              "min": 0.0,
              "max": 0.02154591475534149,
              "p5": 0.0,
              "p95": 0.0193598080926438,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 0.00023611564767277342,
              "median": 4.5194978437372406e-08,
              "min": 0.0,
              "max": 0.0018867924528301833,
              "p5": 0.0,
              "p95": 0.0012270370777202222,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 631.4375,
              "median": 7.5,
              "min": 0.0,
              "max": 4343.5,
              "p5": 0.0,
              "p95": 3034.149999999998,
              "count": 8
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 340944.30625,
              "median": 11110.25,
              "min": 0.0,
              "max": 1580268.25,
              "p5": 0.0,
              "p95": 1271393.9324999996,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 125.5,
              "median": 7.5,
              "min": 0.0,
              "max": 602.5,
              "p5": 0.0,
              "p95": 472.29999999999984,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.5230421853935321,
              "median": 0.40161753134357253,
              "min": 0.0,
              "max": 1.4005213411618949,
              "p5": 0.046097559860664,
              "p95": 1.2567286378684104,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.1682811353707735,
              "median": 0.02687804483680266,
              "min": 0.009494196983022776,
              "max": 0.6666666666666666,
              "p5": 0.010294501859436783,
              "p95": 0.6222694478724293,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 4.494394094462521,
              "median": 1.60400275357721,
              "min": 1.0,
              "max": 22.596153846153847,
              "p5": 1.06868268448536,
              "p95": 16.06999999999999,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 0.00023612356122083503,
              "median": 6.443837541992862e-08,
              "min": 0.0,
              "max": 0.0018867924528301833,
              "p5": 0.0,
              "p95": 0.0012270370777202222,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.00904665144327904,
              "median": 0.00015959134601847765,
              "min": 0.0,
              "max": 0.04852761669820724,
              "p5": 0.0,
              "p95": 0.03908402101820421,
              "count": 8
            }
          },
          "returns": {
            "window_days": 10,
            "n_obs": 10,
            "stock": -0.10204081632653061,
            "market": -0.0337512145966663,
            "sector": -0.04486147390608841,
            "peers": -0.037623172409025685,
            "vs_market": -0.06828960172986431,
            "vs_sector": -0.0571793424204422,
            "vs_peers": -0.06441764391750493
          }
        }
      },
      "30d": {
        "label": "1M",
        "window_days": 21,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 21,
          "score_pca": 74.91039426523297,
          "score_pca_percentile": 74.91039426523297,
          "rank_pca": 141,
          "total": 558,
          "adv_notional_sgd": 458344.0,
          "adv_volume_shares": 1985700.0,
          "free_float_shares": null,
          "turnover_ratio": 0.0034822103497229432,
          "votes": 120.0,
          "trades": 120.0,
          "spread_pct": 0.025399671298371417,
          "spread_ticks": 1.1776061776061777,
          "amihud": 4.9741695520304396e-08,
          "volatility": 0.6660946281778591
        },
        "pca": {
          "valid": true,
          "window_days": 21,
          "variance_explained": 0.5330037192936461,
          "loadings": {
            "log_adv": 0.5388267246342163,
            "log_trades": 0.4876030852236808,
            "log_turnover": 0.492820133008446,
            "neg_spread": 0.41824038545499603,
            "neg_amihud": 0.11772842282792442,
            "neg_vol": 0.20062977604223006
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
          "peer_median_adv": 11993.5,
          "peer_median_score_pca": 46.32616487455197,
          "peer_median_trades": 6.0,
          "peer_median_volatility": 0.3494316424112754,
          "peer_median_spread_pct": 0.02760788463607991,
          "peer_median_spread_ticks": 1.3680942184154175,
          "peer_median_amihud": 1.6779713867549607e-07,
          "peer_median_turnover_ratio": 0.00014575418874996176,
          "target_vs_peer": {
            "score_pca_delta": 28.58,
            "adv_delta_pct": 3721.6,
            "trades_delta_pct": 1900.0,
            "volatility_delta_pct": -90.62,
            "spread_pct_delta_pct": 8.0,
            "spread_ticks_delta_pct": -13.92,
            "amihud_delta_pct": 70.36,
            "turnover_ratio_delta_pct": 2289.1
          }
        },
        "peer_liquidity": [
          {
            "ticker": "TKU",
            "score_pca": 74.91039426523297,
            "rank_pca": 141,
            "adv": 458344.0,
            "trades": 120.0,
            "volatility": 0.6660946281778591,
            "spread_pct": 0.025399671298371417,
            "spread_ticks": 1.1776061776061777,
            "amihud": 4.9741695520304396e-08,
            "turnover_ratio": 0.0034822103497229432,
            "is_target": true
          },
          {
            "ticker": "ITS",
            "score_pca": 83.51254480286738,
            "rank_pca": 93,
            "adv": 1293400.5,
            "trades": 298.0,
            "volatility": 0.7587949857260791,
            "spread_pct": 0.007453548421444918,
            "spread_ticks": 1.2775768535262206,
            "amihud": 1.798091146438942e-08,
            "turnover_ratio": 0.019252472651980344,
            "is_target": false
          },
          {
            "ticker": "LVR",
            "score_pca": 55.017921146953405,
            "rank_pca": 252,
            "adv": 20792.0,
            "trades": 10.0,
            "volatility": 0.14919774106347208,
            "spread_pct": 0.012592192840438938,
            "spread_ticks": 2.3333333333333335,
            "amihud": 1.9347404313542508e-07,
            "turnover_ratio": 0.00015623541017916696,
            "is_target": false
          },
          {
            "ticker": "NXR",
            "score_pca": 37.096774193548384,
            "rank_pca": 352,
            "adv": 3002.0,
            "trades": 1.0,
            "volatility": 0.3072843568518021,
            "spread_pct": 0.049999999999999906,
            "spread_ticks": 4.0,
            "amihud": 3.0864197530864087e-07,
            "turnover_ratio": 0.00013527296732075656,
            "is_target": false
          },
          {
            "ticker": "U77",
            "score_pca": 37.634408602150536,
            "rank_pca": 349,
            "adv": 3195.0,
            "trades": 2.0,
            "volatility": 0.39157892797074867,
            "spread_pct": 0.032786885245901606,
            "spread_ticks": 1.4,
            "amihud": 4.347707942718943e-06,
            "turnover_ratio": 4.397987381864484e-05,
            "is_target": false
          },
          {
            "ticker": "532",
            "score_pca": 3.763440860215054,
            "rank_pca": 536,
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
            "ticker": "KUX",
            "score_pca": 5.913978494623656,
            "rank_pca": 526,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.20784609690826472,
            "spread_pct": 0.409090909090909,
            "spread_ticks": 18.0,
            "amihud": 0.0018867924528301833,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "QS9",
            "score_pca": 69.17562724014337,
            "rank_pca": 173,
            "adv": 136256.6,
            "trades": 62.0,
            "volatility": 1.0295558085768146,
            "spread_pct": 0.022428884026258217,
            "spread_ticks": 1.2295081967213115,
            "amihud": 1.4212023421556703e-07,
            "turnover_ratio": 0.013016131971001916,
            "is_target": false
          },
          {
            "ticker": "5DD",
            "score_pca": 77.41935483870968,
            "rank_pca": 127,
            "adv": 422895.0,
            "trades": 149.0,
            "volatility": 0.4376614189039379,
            "spread_pct": 0.007680260871430724,
            "spread_ticks": 1.3361884368308352,
            "amihud": 3.743030944260651e-08,
            "turnover_ratio": 0.002009404392155295,
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
              "mean": 0.6068630781262149,
              "median": 0.4015569698190837,
              "min": 0.0,
              "max": 7.056911505750941,
              "p5": 0.077659249896115,
              "p95": 1.724309567544175,
              "count": 558
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 3579790.7689520433,
              "median": 15281.400000000001,
              "min": 0.0,
              "max": 331579444.0,
              "p5": 0.0,
              "p95": 12631639.849999981,
              "count": 558
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.09670362566397174,
              "median": 0.025779235997187674,
              "min": 0.00026223252265518936,
              "max": 1.3890746934225195,
              "p5": 0.003635509382659547,
              "p95": 0.4805620271579231,
              "count": 557
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.007748647232924669,
              "median": 0.0003062885870976392,
              "min": 0.0,
              "max": 2.966185485465691,
              "p5": 0.0,
              "p95": 0.010220419596079961,
              "count": 551
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 7.564377419345673e-05,
              "median": 9.567083938226952e-08,
              "min": 0.0,
              "max": 0.01961646977631635,
              "p5": 0.0,
              "p95": 4.6556410256587504e-05,
              "count": 546
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 472.13440860215053,
              "median": 7.0,
              "min": 0.0,
              "max": 12958.0,
              "p5": 0.0,
              "p95": 2389.9499999999994,
              "count": 558
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.3443962769296637,
              "median": 0.29082891779544284,
              "min": 0.0,
              "max": 0.7587949857260791,
              "p5": 0.05221920937221523,
              "p95": 0.726349860584202,
              "count": 8
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 3180630.4375,
              "median": 11993.5,
              "min": 0.0,
              "max": 23666310.0,
              "p5": 0.0,
              "p95": 15835791.674999988,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.15065448041001278,
              "median": 0.02909327827213651,
              "min": 0.0012459697163697393,
              "max": 0.6666666666666666,
              "p5": 0.0034186222631460523,
              "p95": 0.5765151515151513,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.004754598933629584,
              "median": 0.00014575418874996176,
              "min": 0.0,
              "max": 0.019252472651980344,
              "p5": 0.0,
              "p95": 0.01775242429939241,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 0.00023646379891650496,
              "median": 1.2160786932786474e-07,
              "min": 0.0,
              "max": 0.0018867924528301833,
              "p5": 1.371767980752788e-10,
              "p95": 0.0012279367921195698,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 652.625,
              "median": 6.0,
              "min": 0.0,
              "max": 4790.0,
              "p5": 0.0,
              "p95": 3217.7999999999975,
              "count": 8
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 234942.6375,
              "median": 11993.5,
              "min": 0.0,
              "max": 1293400.5,
              "p5": 0.0,
              "p95": 988723.5749999995,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 65.25,
              "median": 6.0,
              "min": 0.0,
              "max": 298.0,
              "p5": 0.0,
              "p95": 245.8499999999999,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.4102399170001399,
              "median": 0.3494316424112754,
              "min": 0.0,
              "max": 1.0295558085768146,
              "p5": 0.05221920937221523,
              "p95": 0.9347895205790571,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.15108741839538126,
              "median": 0.02760788463607991,
              "min": 0.007453548421444918,
              "max": 0.6666666666666666,
              "p5": 0.00753289777893995,
              "p95": 0.5765151515151513,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 3.8220758525514626,
              "median": 1.3680942184154175,
              "min": 1.0,
              "max": 18.0,
              "p5": 1.0803278688524591,
              "p95": 13.099999999999993,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 0.00023647997603080858,
              "median": 1.6779713867549607e-07,
              "min": 0.0,
              "max": 0.0018867924528301833,
              "p5": 6.293319012536297e-09,
              "p95": 0.0012279367921195698,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.004326687158307016,
              "median": 0.00014575418874996176,
              "min": 0.0,
              "max": 0.019252472651980344,
              "p5": 0.0,
              "p95": 0.01706975341363789,
              "count": 8
            }
          },
          "returns": {
            "window_days": 21,
            "n_obs": 21,
            "stock": -0.16981132075471728,
            "market": -0.019384729399922307,
            "sector": -0.056954078994335355,
            "peers": -0.04014134914953704,
            "vs_market": -0.15042659135479497,
            "vs_sector": -0.11285724176038192,
            "vs_peers": -0.12966997160518023
          }
        }
      }
    },
    "period_insights": {
      "1d": {
        "liquidity": "Current tradability looks solid, but this is only a snapshot and near-term conditions have been softer than the monthly average.",
        "market_comparison": "The stock remains ahead of peers on liquidity standing, which matters because accessibility still screens well even as day-to-day conditions can vary."
      },
      "1w": {
        "liquidity": "Near-term liquidity has softened, with average volume 43.6% below the 1M average, so access looks less robust than the broader monthly picture.",
        "market_comparison": "The stock still sits above peers on liquidity score, which matters because relative accessibility remains supportive even during a quieter week."
      },
      "2w": {
        "liquidity": "Two-week tradability appears resilient, but the recent slowdown means conditions are not as firm as the monthly profile alone would suggest.",
        "market_comparison": "Liquidity standing remains comfortably ahead of peers, which matters because the name still looks easier to access than most of its group."
      },
      "30d": {
        "liquidity": "Monthly tradability is strong, with a 1M score of 74.9, so the stock screens as accessible for its size.",
        "market_comparison": "That 1M score compares with a peer median of 46.3, which matters because the stock’s liquidity profile is materially stronger than its peer set."
      }
    }
  },
  "q02": {
    "driver_model": {
      "valid": true,
      "model_method": "simple_markov_return_model",
      "estimation_window_days": 28,
      "reporting_window_days": 28,
      "available_history_days": 28,
      "n_regimes": 2,
      "current_regime": 0,
      "current_regime_label": "High Volatility",
      "current_regime_probability": 1.0,
      "current_driver_mix": {
        "market_share": {
          "median": 0.21293595633158108,
          "low": 0.21293595633158108,
          "high": 0.21293595633158108,
          "value_pct": 21.3,
          "range_collapsed": true,
          "display_value": "21.3%",
          "display_range": null,
          "display_text": "21.3%",
          "uncertainty_note": "Point estimate only; current-state history is limited to 28 trading days.",
          "plain_english": "Market explains about 21.3% of price moves in the current state. This is a point estimate from 28 trading days."
        },
        "sector_share": {
          "median": 0.17587484412478943,
          "low": 0.17587484412478943,
          "high": 0.17587484412478943,
          "value_pct": 17.6,
          "range_collapsed": true,
          "display_value": "17.6%",
          "display_range": null,
          "display_text": "17.6%",
          "uncertainty_note": "Point estimate only; current-state history is limited to 28 trading days.",
          "plain_english": "Sector explains about 17.6% of price moves in the current state. This is a point estimate from 28 trading days."
        },
        "company_share": {
          "median": 0.6111891995436295,
          "low": 0.6111891995436295,
          "high": 0.6111891995436295,
          "value_pct": 61.1,
          "range_collapsed": true,
          "display_value": "61.1%",
          "display_range": null,
          "display_text": "61.1%",
          "uncertainty_note": "Point estimate only; current-state history is limited to 28 trading days.",
          "plain_english": "Company-specific explains about 61.1% of price moves in the current state. This is a point estimate from 28 trading days."
        },
        "basis": "current_state"
      },
      "reporting_window_driver_mix": {
        "market_share": {
          "median": 0.22290286732441617,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "22.3%",
          "display_range": null,
          "display_text": "22.3%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 28 trading days.",
          "kind": "share_pct",
          "value_pct": 22.3,
          "plain_english": "Market explains about 22.3% of price moves in the current state."
        },
        "sector_share": {
          "median": 0.18028927468233533,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "18.0%",
          "display_range": null,
          "display_text": "18.0%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 28 trading days.",
          "kind": "share_pct",
          "value_pct": 18.0,
          "plain_english": "Sector explains about 18.0% of price moves in the current state."
        },
        "company_share": {
          "median": 0.5968078579932485,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "59.7%",
          "display_range": null,
          "display_text": "59.7%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 28 trading days.",
          "kind": "share_pct",
          "value_pct": 59.7,
          "plain_english": "Company-specific explains about 59.7% of price moves in the current state."
        },
        "basis": "reporting_window"
      },
      "current_sensitivities": {
        "beta_market": {
          "median": 1.1731909796153825,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "1.17",
          "display_range": null,
          "display_text": "1.17",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 28 trading days.",
          "kind": "beta",
          "strength_label": "Moderate",
          "plain_english": "Moderate market link: a 1% market move has lined up with about a 1.17% stock move in the same direction in this state.",
          "value_num": 1.17
        },
        "beta_stock_lag": {
          "median": -0.06257301294109417,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "-0.06",
          "display_range": null,
          "display_text": "-0.06",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 28 trading days.",
          "kind": "lag_beta",
          "value_num": -0.06
        },
        "beta_sector": {
          "median": 0.5642321255191352,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "0.56",
          "display_range": null,
          "display_text": "0.56",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 28 trading days.",
          "kind": "beta",
          "strength_label": "Modest",
          "plain_english": "Modest sector link: a 1% sector move has lined up with about a 0.56% stock move in the same direction in this state.",
          "value_num": 0.56
        },
        "beta_market_lag": {
          "median": 0.06969357040788807,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "0.07",
          "display_range": null,
          "display_text": "0.07",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 28 trading days.",
          "kind": "lag_beta",
          "value_num": 0.07
        },
        "beta_sector_lag": {
          "median": 0.47340680833975896,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "0.47",
          "display_range": null,
          "display_text": "0.47",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 28 trading days.",
          "kind": "lag_beta",
          "value_num": 0.47
        },
        "posterior_source": null,
        "intervals_collapsed": false,
        "confidence_label": "High, limited history",
        "confidence_note": "Based on 28 trading days relative to the 252-day target."
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
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_id": 0,
          "regime_label": "High Volatility",
          "dominant_share": {
            "median": 0.7064851543789502,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "70.6%",
            "display_range": null,
            "display_text": "70.6%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
            "kind": "share_pct",
            "value_pct": 70.6,
            "plain_english": "Company-specific explains about 70.6% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.19077209692753005,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "19.1%",
              "display_range": null,
              "display_text": "19.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
              "kind": "share_pct",
              "value_pct": 19.1,
              "plain_english": "Market explains about 19.1% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.1027427486935198,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "10.3%",
              "display_range": null,
              "display_text": "10.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
              "kind": "share_pct",
              "value_pct": 10.3,
              "plain_english": "Sector explains about 10.3% of price moves in the current state."
            },
            "company_share": {
              "median": 0.7064851543789502,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "70.6%",
              "display_range": null,
              "display_text": "70.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
              "kind": "share_pct",
              "value_pct": 70.6,
              "plain_english": "Company-specific explains about 70.6% of price moves in the current state."
            }
          },
          "summary": "Jan: Still clearly company-driven, though based on only 5 trading days."
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
          "regime_id": 0,
          "regime_label": "High Volatility",
          "dominant_share": {
            "median": 0.6437921491578471,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "64.4%",
            "display_range": null,
            "display_text": "64.4%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
            "kind": "share_pct",
            "value_pct": 64.4,
            "plain_english": "Company-specific explains about 64.4% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.20358382131492836,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "20.4%",
              "display_range": null,
              "display_text": "20.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
              "kind": "share_pct",
              "value_pct": 20.4,
              "plain_english": "Market explains about 20.4% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.1526240295272246,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "15.3%",
              "display_range": null,
              "display_text": "15.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
              "kind": "share_pct",
              "value_pct": 15.3,
              "plain_english": "Sector explains about 15.3% of price moves in the current state."
            },
            "company_share": {
              "median": 0.6437921491578471,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "64.4%",
              "display_range": null,
              "display_text": "64.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
              "kind": "share_pct",
              "value_pct": 64.4,
              "plain_english": "Company-specific explains about 64.4% of price moves in the current state."
            }
          },
          "summary": "Feb: Still clearly company-driven."
        },
        {
          "month_key": "2026-03",
          "month_label": "March 2026",
          "month_short_label": "Mar",
          "period_label": "2026-03-02 to 2026-03-06",
          "n_obs": 5,
          "partial_month": false,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_id": 0,
          "regime_label": "High Volatility",
          "dominant_share": {
            "median": 0.34934549714252944,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "34.9%",
            "display_range": null,
            "display_text": "34.9%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
            "kind": "share_pct",
            "value_pct": 34.9,
            "plain_english": "Company-specific explains about 34.9% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.3124812087855,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "31.2%",
              "display_range": null,
              "display_text": "31.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
              "kind": "share_pct",
              "value_pct": 31.2,
              "plain_english": "Market explains about 31.2% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.3381732940719706,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "33.8%",
              "display_range": null,
              "display_text": "33.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
              "kind": "share_pct",
              "value_pct": 33.8,
              "plain_english": "Sector explains about 33.8% of price moves in the current state."
            },
            "company_share": {
              "median": 0.34934549714252944,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "34.9%",
              "display_range": null,
              "display_text": "34.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
              "kind": "share_pct",
              "value_pct": 34.9,
              "plain_english": "Company-specific explains about 34.9% of price moves in the current state."
            }
          },
          "summary": "Mar: Much more balanced across company, sector, and market factors, though based on only 5 trading days."
        }
      ],
      "regimes": [
        {
          "id": 0,
          "label": "High Volatility",
          "pct_time": 0.9285714285714286,
          "dominant_driver": "company",
          "dominant_driver_probability": 0.6111891995436295,
          "expected_duration_days": 8.872668748002374,
          "current_probability": 1.0,
          "n_days_effective": 26.0,
          "shares": {
            "market": {
              "median": 0.21293595633158108,
              "low": 0.21293595633158108,
              "high": 0.21293595633158108,
              "value_pct": 21.3,
              "range_collapsed": true,
              "display_value": "21.3%",
              "display_range": null,
              "display_text": "21.3%",
              "uncertainty_note": "Point estimate only; current-state history is limited to 28 trading days.",
              "plain_english": "Market explains about 21.3% of price moves in the current state. This is a point estimate from 28 trading days."
            },
            "sector": {
              "median": 0.17587484412478943,
              "low": 0.17587484412478943,
              "high": 0.17587484412478943,
              "value_pct": 17.6,
              "range_collapsed": true,
              "display_value": "17.6%",
              "display_range": null,
              "display_text": "17.6%",
              "uncertainty_note": "Point estimate only; current-state history is limited to 28 trading days.",
              "plain_english": "Sector explains about 17.6% of price moves in the current state. This is a point estimate from 28 trading days."
            },
            "company": {
              "median": 0.6111891995436295,
              "low": 0.6111891995436295,
              "high": 0.6111891995436295,
              "value_pct": 61.1,
              "range_collapsed": true,
              "display_value": "61.1%",
              "display_range": null,
              "display_text": "61.1%",
              "uncertainty_note": "Point estimate only; current-state history is limited to 28 trading days.",
              "plain_english": "Company-specific explains about 61.1% of price moves in the current state. This is a point estimate from 28 trading days."
            }
          },
          "sensitivities": {
            "beta_market": {
              "median": 1.1731909796153825,
              "low": 1.1731909796153825,
              "high": 1.1731909796153825,
              "value_num": 1.17,
              "range_collapsed": true,
              "display_value": "1.17",
              "display_range": null,
              "display_text": "1.17",
              "uncertainty_note": "Point estimate only; current-state history is limited to 28 trading days.",
              "strength_label": "Moderate",
              "plain_english": "Moderate market link: a 1% market move has lined up with about a 1.17% stock move in the same direction in this state. Shown as a point estimate because only 28 trading days are available."
            },
            "beta_sector": {
              "median": 0.5642321255191352,
              "low": 0.5642321255191352,
              "high": 0.5642321255191352,
              "value_num": 0.56,
              "range_collapsed": true,
              "display_value": "0.56",
              "display_range": null,
              "display_text": "0.56",
              "uncertainty_note": "Point estimate only; current-state history is limited to 28 trading days.",
              "strength_label": "Modest",
              "plain_english": "Modest sector link: a 1% sector move has lined up with about a 0.56% stock move in the same direction in this state. Shown as a point estimate because only 28 trading days are available."
            },
            "beta_market_lag": {
              "median": 0.06969357040788807,
              "low": 0.06969357040788807,
              "high": 0.06969357040788807
            },
            "beta_sector_lag": {
              "median": 0.47340680833975896,
              "low": 0.47340680833975896,
              "high": 0.47340680833975896
            },
            "beta_stock_lag": null
          },
          "volatility": {
            "median": 0.029682510292879126,
            "low": 0.029682510292879126,
            "high": 0.029682510292879126
          },
          "volatility_label": "High Volatility",
          "lead_signal": {
            "lead_factor": "sector",
            "lead_confidence": 0.560664539456816,
            "lead_horizon_days": 1
          },
          "dominant_driver_label": "Company-specific",
          "current_probability_display": null
        },
        {
          "id": 1,
          "label": "Low Volatility",
          "pct_time": 0.0714285714285714,
          "dominant_driver": "market",
          "dominant_driver_probability": 0.6365173260037383,
          "expected_duration_days": 1.3102691304383978,
          "current_probability": 0.0,
          "n_days_effective": 1.9999999999999991,
          "shares": {
            "market": {
              "median": 0.6365173260037383,
              "low": 0.6365173260037383,
              "high": 0.6365173260037383,
              "value_pct": 63.7,
              "range_collapsed": true,
              "display_value": "63.7%",
              "display_range": null,
              "display_text": "63.7%",
              "uncertainty_note": "Point estimate only; current-state history is limited to 28 trading days.",
              "plain_english": "Market explains about 63.7% of price moves in the current state. This is a point estimate from 28 trading days."
            },
            "sector": {
              "median": 0.3634826739962611,
              "low": 0.3634826739962611,
              "high": 0.3634826739962611,
              "value_pct": 36.3,
              "range_collapsed": true,
              "display_value": "36.3%",
              "display_range": null,
              "display_text": "36.3%",
              "uncertainty_note": "Point estimate only; current-state history is limited to 28 trading days.",
              "plain_english": "Sector explains about 36.3% of price moves in the current state. This is a point estimate from 28 trading days."
            },
            "company": {
              "median": 5.379888800973428e-16,
              "low": 5.379888800973428e-16,
              "high": 5.379888800973428e-16,
              "value_pct": 0.0,
              "range_collapsed": true,
              "display_value": "0.0%",
              "display_range": null,
              "display_text": "0.0%",
              "uncertainty_note": "Point estimate only; current-state history is limited to 28 trading days.",
              "plain_english": "Company-specific explains about 0.0% of price moves in the current state. This is a point estimate from 28 trading days."
            }
          },
          "sensitivities": {
            "beta_market": {
              "median": -0.19634634335836015,
              "low": -0.19634634335836015,
              "high": -0.19634634335836015,
              "value_num": -0.2,
              "range_collapsed": true,
              "display_value": "-0.20",
              "display_range": null,
              "display_text": "-0.20",
              "uncertainty_note": "Point estimate only; current-state history is limited to 28 trading days.",
              "strength_label": "Weak",
              "plain_english": "Weak market link: a 1% market move has lined up with about a 0.20% stock move in the opposite direction in this state. Shown as a point estimate because only 28 trading days are available."
            },
            "beta_sector": {
              "median": 0.5224518905255764,
              "low": 0.5224518905255764,
              "high": 0.5224518905255764,
              "value_num": 0.52,
              "range_collapsed": true,
              "display_value": "0.52",
              "display_range": null,
              "display_text": "0.52",
              "uncertainty_note": "Point estimate only; current-state history is limited to 28 trading days.",
              "strength_label": "Modest",
              "plain_english": "Modest sector link: a 1% sector move has lined up with about a 0.52% stock move in the same direction in this state. Shown as a point estimate because only 28 trading days are available."
            },
            "beta_market_lag": {
              "median": -0.8157674275331768,
              "low": -0.8157674275331768,
              "high": -0.8157674275331768
            },
            "beta_sector_lag": {
              "median": -0.3614270625510738,
              "low": -0.3614270625510738,
              "high": -0.3614270625510738
            },
            "beta_stock_lag": null
          },
          "volatility": {
            "median": 2.377096750253987e-17,
            "low": 2.377096750253987e-17,
            "high": 2.377096750253987e-17
          },
          "volatility_label": "Low Volatility",
          "lead_signal": {
            "lead_factor": "market",
            "lead_confidence": 0.8359505384491904,
            "lead_horizon_days": 1
          },
          "dominant_driver_label": "Market",
          "current_probability_display": 0.0
        }
      ],
      "transitions": {
        "mean": [
          [
            0.8872943385579289,
            0.11270566144207125
          ],
          [
            0.7632019840575914,
            0.23679801594240882
          ]
        ],
        "low": [
          [
            0.8146402668313328,
            0.04087956791445042
          ],
          [
            0.49130089875946903,
            0.03584708176158796
          ]
        ],
        "high": [
          [
            0.9591204320855498,
            0.18535973316866733
          ],
          [
            0.9641529182384121,
            0.5086991012405311
          ]
        ],
        "counts": [
          [
            23.0,
            2.0
          ],
          [
            2.0,
            0.0
          ]
        ]
      },
      "methodology": {
        "estimation_window_days": 28,
        "reporting_window_days": 28,
        "regime_inference": "statsmodels_markov_regression",
        "distribution": "gaussian",
        "history_limited": true,
        "selection_metric": "bic_with_small_state_penalty",
        "selection_reason": "bic",
        "candidate_regime_counts": [
          2
        ],
        "lead_horizon_days": 1,
        "lead_definition": "compare lagged market, sector, and stock-persistence contributions",
        "state_label_definition": "volatility bucket only",
        "market_regime_definition": "volatility bucket within the fitted Markov states",
        "current_driver_mix_basis": "active_regime",
        "reporting_window_driver_mix_basis": "probability_weighted_recent_average",
        "sector_proxy_equals_market": false
      },
      "client_read": {
        "market_link_display": "1.17",
        "sector_link_display": "0.56",
        "market_link_explainer": "Moderate market link. A 1% market move has lined up with about a 1.17% stock move in the same direction in this state. This is a point estimate from 28 trading days.",
        "sector_link_explainer": "Modest sector link. A 1% sector move has lined up with about a 0.56% stock move in the same direction in this state. This is a point estimate from 28 trading days.",
        "stock_persistence_display": "-0.06",
        "point_estimate_note": "Point estimate only because the current state has 28 trading days.",
        "history_limited_note": "Read is based on 28 trading days versus the 252-day target."
      },
      "current_summary": {
        "regime_label": "High Volatility",
        "dominant_driver": "company",
        "dominant_driver_label": "Company-specific",
        "driver_share_pct": 61.1,
        "driver_share_display": "61.1%",
        "confidence_label": "High, limited history",
        "confidence_pct": 100.0,
        "display_confidence_pct": null,
        "confidence_note": "Based on 28 trading days relative to the 252-day target.",
        "history_days": 28,
        "history_limited": true,
        "volatility_label": "High Volatility",
        "lead_signal_text": "Recent sector moves have tended to show up about a day before the stock.",
        "state_term": "state",
        "stay_probability": 0.8872943385579289,
        "effective_days": 26.0,
        "persistence_note": "This state looks more persistent, with a typical run length of about 8.9 days.",
        "expected_duration_days": 8.9
      },
      "display_notes": {
        "current_driver_mix": "Current state shares come from the active regime, not the full reporting window average.",
        "collapsed_interval": "When only one number is shown, the run produced a point estimate instead of a wider uncertainty range."
      }
    },
    "regime_switching": {
      "valid": true,
      "regime_method": "simple_markov_return_model",
      "n_regimes": 2,
      "regimes": [
        {
          "id": 0,
          "label": "High Volatility",
          "pct_time": 0.9285714285714286,
          "dominant_driver": "company",
          "dominant_driver_probability": 0.6111891995436295,
          "expected_duration_days": 8.872668748002374,
          "current_probability": 1.0,
          "n_days_effective": 26.0,
          "shares": {
            "market": {
              "median": 0.21293595633158108,
              "low": 0.21293595633158108,
              "high": 0.21293595633158108
            },
            "sector": {
              "median": 0.17587484412478943,
              "low": 0.17587484412478943,
              "high": 0.17587484412478943
            },
            "company": {
              "median": 0.6111891995436295,
              "low": 0.6111891995436295,
              "high": 0.6111891995436295
            }
          },
          "sensitivities": {
            "beta_market": {
              "median": 1.1731909796153825,
              "low": 1.1731909796153825,
              "high": 1.1731909796153825
            },
            "beta_sector": {
              "median": 0.5642321255191352,
              "low": 0.5642321255191352,
              "high": 0.5642321255191352
            },
            "beta_market_lag": {
              "median": 0.06969357040788807,
              "low": 0.06969357040788807,
              "high": 0.06969357040788807
            },
            "beta_sector_lag": {
              "median": 0.47340680833975896,
              "low": 0.47340680833975896,
              "high": 0.47340680833975896
            }
          },
          "volatility": {
            "median": 0.029682510292879126,
            "low": 0.029682510292879126,
            "high": 0.029682510292879126
          },
          "volatility_label": "High Volatility",
          "lead_signal": {
            "lead_factor": "sector",
            "lead_confidence": 0.560664539456816,
            "lead_horizon_days": 1
          }
        },
        {
          "id": 1,
          "label": "Low Volatility",
          "pct_time": 0.0714285714285714,
          "dominant_driver": "market",
          "dominant_driver_probability": 0.6365173260037383,
          "expected_duration_days": 1.3102691304383978,
          "current_probability": 0.0,
          "n_days_effective": 1.9999999999999991,
          "shares": {
            "market": {
              "median": 0.6365173260037383,
              "low": 0.6365173260037383,
              "high": 0.6365173260037383
            },
            "sector": {
              "median": 0.3634826739962611,
              "low": 0.3634826739962611,
              "high": 0.3634826739962611
            },
            "company": {
              "median": 5.379888800973428e-16,
              "low": 5.379888800973428e-16,
              "high": 5.379888800973428e-16
            }
          },
          "sensitivities": {
            "beta_market": {
              "median": -0.19634634335836015,
              "low": -0.19634634335836015,
              "high": -0.19634634335836015
            },
            "beta_sector": {
              "median": 0.5224518905255764,
              "low": 0.5224518905255764,
              "high": 0.5224518905255764
            },
            "beta_market_lag": {
              "median": -0.8157674275331768,
              "low": -0.8157674275331768,
              "high": -0.8157674275331768
            },
            "beta_sector_lag": {
              "median": -0.3614270625510738,
              "low": -0.3614270625510738,
              "high": -0.3614270625510738
            }
          },
          "volatility": {
            "median": 2.377096750253987e-17,
            "low": 2.377096750253987e-17,
            "high": 2.377096750253987e-17
          },
          "volatility_label": "Low Volatility",
          "lead_signal": {
            "lead_factor": "market",
            "lead_confidence": 0.8359505384491904,
            "lead_horizon_days": 1
          }
        }
      ],
      "transitions": [
        [
          0.8872943385579289,
          0.11270566144207125
        ],
        [
          0.7632019840575914,
          0.23679801594240882
        ]
      ],
      "transition_intervals": {
        "mean": [
          [
            0.8872943385579289,
            0.11270566144207125
          ],
          [
            0.7632019840575914,
            0.23679801594240882
          ]
        ],
        "low": [
          [
            0.8146402668313328,
            0.04087956791445042
          ],
          [
            0.49130089875946903,
            0.03584708176158796
          ]
        ],
        "high": [
          [
            0.9591204320855498,
            0.18535973316866733
          ],
          [
            0.9641529182384121,
            0.5086991012405311
          ]
        ],
        "counts": [
          [
            23.0,
            2.0
          ],
          [
            2.0,
            0.0
          ]
        ]
      },
      "current_regime": 0,
      "current_regime_label": "High Volatility",
      "current_regime_probability": 1.0
    }
  },
  "theme": {
    "badges": {
      "liq_section": {
        "text": "Liquidity score: 74.9 — Strong",
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
    "liq_subtitle": "Monthly liquidity still stands well ahead of peers, but recent flow is lighter than that broader profile",
    "market_comparison_title": "How You Compare to the Market",
    "market_comparison_subtitle": "Context relative to market, sector, and peer medians.",
    "perf_title": "Stock Performance",
    "perf_subtitle": "Recent performance is weak, with the stock down 17.0% over 1M compared with peers down 4.0% and the market down 1.9%.",
    "perf_insight": "The recent move looks stock-specific rather than market-led, with company-specific drivers at 61.1%. That matters because weak performance is not being offset by stronger market support, while 1W average volume is 43.6% below the 1M average.",
    "drivers_title": "What Moves Your Stock Price?",
    "drivers_subtitle": "Price action is being driven mainly by company-specific factors, with stock-specific drivers accounting for 61.1% of the current move.",
    "drivers_strip": [
      {
        "title": "Current Driver",
        "text": "Recent moves are mainly company-driven, accounting for about 61.1% of current price changes. Other influences are market 21.3%, and sector 17.6%."
      },
      {
        "title": "Driver Mix",
        "text": "Current mix is market 21.3%, sector 17.6%, and company-specific 61.1%."
      },
      {
        "title": "Monthly Driver Shift",
        "text": "Jan: Still clearly company-driven, though based on only 5 trading days. | Feb: Still clearly company-driven. | Mar: Much more balanced across company, sector, and market factors, though based on only 5 trading days."
      }
    ],
    "drivers_pie_title": "Current Driver Mix",
    "drivers_pie_note": "Current split is market 21.3%, sector 17.6%, and company-specific 61.1%. Recent reporting-window mix was market 22.3%, sector 18.0%, company 59.7%.",
    "lead_lag_title": "",
    "lead_lag_note": "",
    "rolling_title": "Monthly Driver Shift",
    "rolling_latest_label": "Latest: {period}",
    "rolling_note": "Each bar shows the monthly split between market-, sector-, and company-driven moves.",
    "drivers_bottom_line": "The stock is trading mainly on its own story, with company-specific drivers at 61.1%. That matters because company news is likely carrying more weight than broader market direction while recent flow is softer.",
    "drivers_wtd_title": "Key Reads",
    "drivers_wtd_list": [
      "Main driver now: price action is primarily company-specific, at 61.1% of the current move.",
      "Monthly change: the pattern was clearly company-driven in January and February, but March looks more balanced so far."
    ],
    "regime_title": "Market State",
    "regime_subtitle": "Trading conditions look softer in the near term, even though the broader liquidity profile remains strong for size.",
    "regime_badge_text": "High Volatility",
    "regime_pie_title": "State Mix",
    "transition_title": "State Transitions",
    "transition_cols": [
      "From \\",
      "High Volatility",
      "Low Volatility"
    ],
    "transition_note_template": "Rows sum to 100%. Each row shows how states tend to transition across the observed sample.",
    "market_state_strip": [],
    "exec_check_title": "Trading Costs & Market Depth",
    "exec_check_subtitle": "Combines the final continuous-session displayed book before close, trade-size stress tests based on available history from Jan 22, 2026 to Mar 6, 2026 (30 trading days • 8,849 trades), large sell-side orders observed today, and intraday spread/depth during the continuous trading session.",
    "order_book_title": "Order Book Depth (Available Liquidity)",
    "order_book_note": "Depth shown is based on top 10 bid and top 10 ask levels.",
    "peer_capacity_title": "Peer Capacity Context",
    "peer_capacity_note": "Immediate buy-side depth is lighter than the monthly baseline, so day-to-day access may feel weaker than the 1M score",
    "impact_summary_title": "Estimated Price Impact (Sell Orders)",
    "impact_summary_subtitle": "Approximate price impact (%) for sell orders.",
    "exec_check_insight": "The order book looks less supportive than the monthly liquidity profile, with top-10 bid depth at 0.50x ask depth despite a 1 tick spread.",
    "trader_composition_title": "Who's Trading Your Stock?",
    "trader_composition_subtitle": "Shows whether trading is mostly retail-like, institution-like, mixed, or unclassified.",
    "trader_retail_threshold": "Retail-like flow",
    "trader_mixed_threshold": "Mixed flow",
    "trader_instit_threshold": "Institution-like flow",
    "peer_trader_title": "Peer Comparison: Trader Mix",
    "peer_trader_subtitle": "How the trader mix compares with peers.",
    "price_moving_title": "Which Trades Move the Price?",
    "price_moving_subtitle": "Price-moving trades are 13.7% of total trades.",
    "intraday_title": "When Does Trading Happen?",
    "intraday_subtitle": "Recent access looks softer than the monthly profile suggests, and the immediate book is skewed to the ask side.",
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
    "intraday_insight": "Near-term trading conditions look less supportive, with 1W average volume down 43.6% from the 1M average. That matters because lighter recent flow and bid depth at 0.50x ask depth can make day-to-day access feel less consistent.",
    "short_title": "Short Selling & Lending",
    "short_subtitle": "Short activity is not a major feature of the current trading picture.",
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
    "exec_subtitle": "Liquidity remains strong for the company’s size, but recent trading conditions have softened relative to the monthly picture.",
    "exec_takeaways_title": "Key Takeaways:",
    "metric_liquidity_score": "Liquidity Score",
    "metric_spread": "Trading Cost (Spread)",
    "metric_adv": "Average Traded Volume",
    "metric_drivers": "What Drives Price Changes",
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
        "value": "74.9/100",
        "sub": "Peer median 46.3 (+28.6 pts)",
        "interp": {
          "text": "Strong",
          "cls": "interpretation-good",
          "icon": "◆"
        }
      },
      {
        "title": "Volume vs Peers",
        "value": "S$458.3K",
        "sub": "Peer median S$12.0K",
        "interp": {
          "text": "Strong",
          "cls": "interpretation-good",
          "icon": "◆"
        }
      },
      {
        "title": "Spread",
        "value": "2.54%",
        "sub": "1.18 ticks; peers 2.76%",
        "interp": {
          "text": "Tighter",
          "cls": "interpretation-good",
          "icon": "◆"
        }
      }
    ],
    "liq_insight": "Liquidity remains strong for the company’s size, with a 1M score of 74.9 compared with a peer median of 46.3. The near-term picture is softer, with 1W average volume down 43.6% from the 1M average. That matters because the stock still screens well on a monthly basis, but day-to-day access may feel weaker than that broader standing implies.",
    "perf_badge": "Context",
    "exec_check_tiles": [
      {
        "title": "Mid Price",
        "value": "0.228",
        "note": "final continuous-session displayed book before close",
        "color": "text-white"
      },
      {
        "title": "Spread",
        "value": "2.20%",
        "note": "1.00 ticks",
        "color": "text-slate-300"
      },
      {
        "title": "Depth",
        "value": "0.50x",
        "note": "Bid depth / ask depth on displayed top-10 levels",
        "color": "text-slate-300"
      }
    ],
    "impact_summary_cards": [
      {
        "title": "~S$100K sell",
        "text": "Estimated impact ~-3.44% with 100.0% fill.",
        "cls": "ok"
      },
      {
        "title": "S$1.0M sell",
        "text": "Estimated impact ~-8.01% with 30.5% fill.",
        "cls": "warn"
      },
      {
        "title": "S$2.5M sell",
        "text": "Estimated impact ~-8.01% with 12.2% fill.",
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
        "value": "75",
        "suffix": "/100",
        "bar_pct": 75,
        "color_value": "text-emerald-400",
        "color_bar": "bg-emerald-500",
        "subtext": "Rank 141/558",
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
        "value": "2.54",
        "suffix": "%",
        "bar_pct": 25,
        "color_value": "text-amber-400",
        "color_bar": "bg-amber-500",
        "subtext": "2.54% • 1.18 ticks vs peers 2.76%",
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
        "value": "S$458.3K",
        "suffix": "",
        "bar_pct": 60,
        "color_value": "text-emerald-400",
        "color_bar": "bg-emerald-500",
        "subtext": "Peer median S$12.0K",
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
        "value": "61.1",
        "suffix": "company-specific",
        "bar_pct": 61,
        "color_value": "text-amber-400",
        "color_bar": "bg-amber-500",
        "subtext": "Market 21.3% • Sector 17.6%",
        "interpretation": {
          "text": "Company",
          "cls": "interpretation-neutral",
          "icon": "◆"
        }
      }
    ],
    "exec_takeaways": [
      "Structural liquidity remains strong for the company’s size, with a 1M score of 74.9 compared with a peer median of 46.3. That matters because the stock still screens as accessible relative to peers over a monthly horizon.",
      "Recent flow has softened, with 1W average volume down 43.6% from the 1M",
      "The current tape is under pressure and more company-driven, with a 1M return of -17.0% compared with -4.0% for peers and -1.9% for the market, while company-specific drivers account for 61.1%. That matters because weaker price performance is being shaped more by stock news than by broader market moves."
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
      "overall": "1M liquidity is strong: score 74.9 vs peer median 46.3 (+28.6",
      "strengths": [
        "1M score 74.9 vs peer median 46.3 (+28.6 pts)."
      ],
      "concerns": [
        "1W average volume down -43.6% from 1M."
      ],
      "peer_context": "Primary-period score gap vs peers: +28.6 pts."
    },
    "market_comparison": {
      "returns": {
        "insight": "1M return is -17.0%, worse than market, sector, and peers, which suggests weaker price performance than comparable names.",
        "vs_market": "Worse than market: -17.0% vs market -1.9%.",
        "vs_sector": "Worse than sector: -17.0% vs sector -5.7%.",
        "vs_peers": "Worse than peers: -17.0% vs peers -4.0%."
      },
      "adv": {
        "insight": "ADV is S$458.3K, better than market, sector, and peers, which supports stronger day-to-day trading size than comparable names.",
        "vs_market": "Better than market: S$458.3K vs market S$15.3K.",
        "vs_sector": "Better than sector: S$458.3K vs sector S$12.0K.",
        "vs_peers": "Better than peers: S$458.3K vs peers S$12.0K."
      },
      "spread": {
        "insight": "Spread is 2.54%, better than sector, which keeps trading costs more competitive than comparable names.",
        "vs_market": "In line with market: 2.54% vs market 2.58%.",
        "vs_sector": "Better than sector: 2.54% vs secto%.",
        "vs_peers": "In line with peers: 2.54% vs peers 2.76%."
      },
      "turnover_ratio": {
        "insight": "Turnover ratio is 0.35%, better than market, sector, and peers, which shows a more active free-float turnover profile than comparable names.",
        "vs_market": "Better than market: 0.35% vs market 0.03%.",
        "vs_sector": "Better than sector: 0.35% vs sector 0.01%.",
        "vs_peers": "Better than peers: 0.35% vs peers 0.01%."
      },
      "volatility": {
        "insight": "Volatility is 66.61%, worse than market, sector, and peers, which suggests day-to-day price swings are heavier than comparable names.",
        "vs_market": "Worse than market: 66.61% vs market 40.16%.",
        "vs_sector": "Worse than sector: 66.61% vs secto%.",
        "vs_peers": "Worse than peers: 66.61% vs peers 34.94%."
      },
      "trades": {
        "insight": "Trades is 120, better than market, sector, and peers, which supports more fully reflective of day-to-day access day-to-day activity than comparable names.",
        "vs_market": "Better than market: 120 vs market 7.",
        "vs_sector": "Better than sector: 120 vs sector 6.",
        "vs_peers": "Better than peers: 120 vs peers 6."
      },
      "amihud": {
        "insight": "Price impact is 4.97e-08, better than market, sector, and peers, which suggests trades move price less than comparable names.",
        "vs_market": "Better than market: 4.97e-08 vs market 9.57e-08.",
        "vs_sector": "Better than sector: 4.97e-08 vs sector 1.22e-07.",
        "vs_peers": "Better than peers: 4.97e-08 vs peers 1.68e-07."
      }
    },
    "performance": {
      "overall": "Recent performance is weak relative to peers and the market, with the stock down 17.0% over 1M compared with peers down 4.0% and the market down 1.9%. Liquidity gives a mixed read because the 1M liquidity score of 74.9 sits well above the peer median of 46.3, yet 1W average volume is 43.6% below the 1M average, which suggests the recent decline has come with softer near-term trading activity rather than stronger participation.",
      "conclusion": "The move looks primarily company-specific rather than broad-market, with liquidity evidence mixed as strong monthly access is offset by softer recent volume."
    },
    "drivers": {
      "overall": "The main driver now is company-specific, with 61.1% of current price movement tied to stock-level factors. That matters because the shares are reacting more to their own story, while the 1M return of -17.0% compared with -4.0% for peers shows that stock-specific pressure has been meaningful.",
      "beta": "Broader market and sector influences are secondary at the moment, so the stock is not moving mainly in line with external factors. That matters for trading conditions because the current tape is being shaped more by company-level developments than by a general market move.",
      "rolling_change": "The pattern still points to a company-driven stock, but the monthly trend is becoming less one-sided. January and February were clearly company-led, while March has been more balanced so far, so the recent setup looks less entrenched and history is limited."
    },
    "regime": {
      "overall": "The stock is trading in a higher-volatility backdrop, and that matters because price conditions look less steady even though monthly liquidity remains strong for its size. Evidence is mixed because the state appears persistent, but recent average volume is 43.6% below the 1M average, which can make conditions feel less resilient day to day.",
      "current": "High volatility is the active state, with company-specific factors accounting for 61.1% of the current driver mix, so stock-level developments are carrying more weight in the tape.",
      "transitions": "The state looks relatively settled, with a typical duration of about 8.9 days, although the history is limited and the recent drop in average volume suggests conditions can still shift.",
      "trading_implications": "This state looks more persistent, with a typical run length of about 8.9 days."
    },
    "execution": {
      "overall": "The current book reads as bid-light rather than bid-light, because the spread is still 1 tick but buy-side depth is materially thinner than sell-side depth. That matters because immediate liquidity is available, but not evenly supported for buyers and sellers.",
      "concern": "The clearest stress point is the buy-side imbalance, with top-10 bid depth at 0.50x ask depth. Recent flow has also softened, with 1W average volume down 43.6% from 1M, which makes that asymmetry more relevant day to day.",
      "peer_context": "The broader picture remains solid for size, with a 1M liquidity score of 74.9 compared with a peer median of 46.3, but the displayed book is less supportive than that headline suggests. Historical trade-size context is limited to 30 trading days and 8,849 trades, so the book signal carries more weight than longer-term size calibration right now."
    },
    "trader_composition": {
      "overall": "Flow looks mixed: by trade count and notional it leans institution-like, but the sequential trading pattern leans retail-like.",
      "retail_heavy": "Observed flow leans institution-like on the main measures. Institution-like trades account for 37.7% of trade count and 50.5% of notional, compared with retail-like trades at 27.1% of count and 7.9% of notional, which suggests larger orders are carrying more of the activity.",
      "institutional_gap": "The sequential trading pattern changes the story and keeps the read mixed. Retail-like sequences are 54.9% compared with institution-like sequences at 15.4%, indicating the trading sequence still looks more retail-like even though count and notional lean institution-like.",
      "peer_comparison": "Peer comparison suggests the mix is notable, but the read is mixed rather than extreme. The main measures lean institution-like while the trading sequence leans retail-like, so relative positioning may be read with that split in mind."
    },
    "price_moving": {
      "overall": "Price-moving trades account for 13.7% of total trades. The read is directionally useful but not fully clean. With 18.9% of trade count classified as ambiguous or unclear, any conclusion on who is moving price may be treated as mixed rather than definitive. Asymmetry in price-moving flow is available, but the broader signal remains mixed. The main reason is that ambiguous flow is still meaningful at 18.9% of trade count, which reduces clarity on whether one side is consistently driving moves.",
      "interpretation": "",
      "asymmetry": ""
    },
    "short_selling": {
      "overall": "Short activity appears immaterial to the current trading picture, with the main read pointing to low short interest. The stock has still underperformed peers and the market over one month, which matters because the weaker tape does not appear to be driven by elevated short pressure.",
      "level": "Low short interest",
      "correlation": "No clear relationship (correlation undefined)",
      "trend": "Short activity has fallen sharply, with shorts covering significantly month on month, but the evidence is mixed. That matters because any short overhang looks to be easing rather than adding to the recent softness in trading activity.",
      "peaks": "0 notable peak days identified."
    },
    "intraday": {
      "overall": "Intraday liquidity is concentrated in continuous trading and looks broadly available through the session. The split is 1.5% at the open, 95.0% in continuous trading, and 2.9% at the close, which means access depends mainly on daytime flow rather than auction windows.",
      "hhi_interpretation": "Ambiguous or unclear flow is 18.9% of trade count, so the read is not fully clean.",
      "best_times": "The clearest liquidity appears during continuous trading. With 95.0% of activity occurring there, the open and close contribute relatively little to overall access.",
      "peer_ranking": "Peer ranking is available, but the main takeaway is straightforward. This name relies heavily on continuous-session trading, so its intraday profile may be judged primarily on daytime participation relative to peers."
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
        "ITS",
        "LVR",
        "NXR",
        "U77",
        "532",
        "KUX",
        "QS9",
        "5DD"
      ],
      "scores": [
        74.91039426523297,
        83.51254480286738,
        55.017921146953405,
        37.096774193548384,
        37.634408602150536,
        3.763440860215054,
        5.913978494623656,
        69.17562724014337,
        77.41935483870968
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
        458344.0,
        1293400.5,
        20792.0,
        3002.0,
        3195.0,
        0.0,
        0.0,
        136256.6,
        422895.0
      ],
      "total": 558
    },
    "market_comparison": {
      "sector_name": "Software - Application",
      "sector_count": 8,
      "market_count": 558,
      "company": {
        "volatility": 0.6660946281778591,
        "adv": 458344.0,
        "spread_pct": 0.025399671298371417,
        "turnover_ratio": 0.0034822103497229432,
        "amihud": 4.9741695520304396e-08,
        "trades": 120.0
      },
      "market": {
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.6068630781262149,
          "median": 0.4015569698190837,
          "min": 0.0,
          "max": 7.056911505750941,
          "p5": 0.077659249896115,
          "p95": 1.724309567544175,
          "count": 558
        },
        "adv": {
          "direction": "higher_is_better",
          "mean": 3579790.7689520433,
          "median": 15281.400000000001,
          "min": 0.0,
          "max": 331579444.0,
          "p5": 0.0,
          "p95": 12631639.849999981,
          "count": 558
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.09670362566397174,
          "median": 0.025779235997187674,
          "min": 0.00026223252265518936,
          "max": 1.3890746934225195,
          "p5": 0.003635509382659547,
          "p95": 0.4805620271579231,
          "count": 557
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.007748647232924669,
          "median": 0.0003062885870976392,
          "min": 0.0,
          "max": 2.966185485465691,
          "p5": 0.0,
          "p95": 0.010220419596079961,
          "count": 551
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 7.564377419345673e-05,
          "median": 9.567083938226952e-08,
          "min": 0.0,
          "max": 0.01961646977631635,
          "p5": 0.0,
          "p95": 4.6556410256587504e-05,
          "count": 546
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 472.13440860215053,
          "median": 7.0,
          "min": 0.0,
          "max": 12958.0,
          "p5": 0.0,
          "p95": 2389.9499999999994,
          "count": 558
        }
      },
      "sector": {
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.3443962769296637,
          "median": 0.29082891779544284,
          "min": 0.0,
          "max": 0.7587949857260791,
          "p5": 0.05221920937221523,
          "p95": 0.726349860584202,
          "count": 8
        },
        "adv": {
          "direction": "higher_is_better",
          "mean": 3180630.4375,
          "median": 11993.5,
          "min": 0.0,
          "max": 23666310.0,
          "p5": 0.0,
          "p95": 15835791.674999988,
          "count": 8
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.15065448041001278,
          "median": 0.02909327827213651,
          "min": 0.0012459697163697393,
          "max": 0.6666666666666666,
          "p5": 0.0034186222631460523,
          "p95": 0.5765151515151513,
          "count": 8
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.004754598933629584,
          "median": 0.00014575418874996176,
          "min": 0.0,
          "max": 0.019252472651980344,
          "p5": 0.0,
          "p95": 0.01775242429939241,
          "count": 8
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 0.00023646379891650496,
          "median": 1.2160786932786474e-07,
          "min": 0.0,
          "max": 0.0018867924528301833,
          "p5": 1.371767980752788e-10,
          "p95": 0.0012279367921195698,
          "count": 8
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 652.625,
          "median": 6.0,
          "min": 0.0,
          "max": 4790.0,
          "p5": 0.0,
          "p95": 3217.7999999999975,
          "count": 8
        }
      },
      "peers": {
        "adv": {
          "direction": "higher_is_better",
          "mean": 234942.6375,
          "median": 11993.5,
          "min": 0.0,
          "max": 1293400.5,
          "p5": 0.0,
          "p95": 988723.5749999995,
          "count": 8
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 65.25,
          "median": 6.0,
          "min": 0.0,
          "max": 298.0,
          "p5": 0.0,
          "p95": 245.8499999999999,
          "count": 8
        },
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.4102399170001399,
          "median": 0.3494316424112754,
          "min": 0.0,
          "max": 1.0295558085768146,
          "p5": 0.05221920937221523,
          "p95": 0.9347895205790571,
          "count": 8
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.15108741839538126,
          "median": 0.02760788463607991,
          "min": 0.007453548421444918,
          "max": 0.6666666666666666,
          "p5": 0.00753289777893995,
          "p95": 0.5765151515151513,
          "count": 8
        },
        "spread_ticks": {
          "direction": "neutral",
          "mean": 3.8220758525514626,
          "median": 1.3680942184154175,
          "min": 1.0,
          "max": 18.0,
          "p5": 1.0803278688524591,
          "p95": 13.099999999999993,
          "count": 8
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 0.00023647997603080858,
          "median": 1.6779713867549607e-07,
          "min": 0.0,
          "max": 0.0018867924528301833,
          "p5": 6.293319012536297e-09,
          "p95": 0.0012279367921195698,
          "count": 8
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.004326687158307016,
          "median": 0.00014575418874996176,
          "min": 0.0,
          "max": 0.019252472651980344,
          "p5": 0.0,
          "p95": 0.01706975341363789,
          "count": 8
        }
      }
    },
    "returns": [
      {
        "horizon": "1W",
        "stock": -0.15384615384615397,
        "market": -0.02939294732315645,
        "sector": -0.04331843913049227,
        "peers": -0.04038069913564735
      },
      {
        "horizon": "2W",
        "stock": -0.10204081632653061,
        "market": -0.0337512145966663,
        "sector": -0.04486147390608841,
        "peers": -0.037623172409025685
      },
      {
        "horizon": "1M",
        "stock": -0.16981132075471728,
        "market": -0.019384729399922307,
        "sector": -0.056954078994335355,
        "peers": -0.04014134914953704
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
      "share_market": 0.21293595633158108,
      "share_sector": 0.17587484412478943,
      "share_idio": 0.6111891995436295,
      "beta_market": 1.1731909796153825,
      "beta_sector": 0.5642321255191352,
      "driver_model": {
        "valid": true,
        "model_method": "simple_markov_return_model",
        "estimation_window_days": 28,
        "reporting_window_days": 28,
        "available_history_days": 28,
        "n_regimes": 2,
        "current_regime": 0,
        "current_regime_label": "High Volatility",
        "current_regime_probability": 1.0,
        "current_driver_mix": {
          "market_share": {
            "median": 0.21293595633158108,
            "low": 0.21293595633158108,
            "high": 0.21293595633158108,
            "value_pct": 21.3,
            "range_collapsed": true,
            "display_value": "21.3%",
            "display_range": null,
            "display_text": "21.3%",
            "uncertainty_note": "Point estimate only; current-state history is limited to 28 trading days.",
            "plain_english": "Market explains about 21.3% of price moves in the current state. This is a point estimate from 28 trading days."
          },
          "sector_share": {
            "median": 0.17587484412478943,
            "low": 0.17587484412478943,
            "high": 0.17587484412478943,
            "value_pct": 17.6,
            "range_collapsed": true,
            "display_value": "17.6%",
            "display_range": null,
            "display_text": "17.6%",
            "uncertainty_note": "Point estimate only; current-state history is limited to 28 trading days.",
            "plain_english": "Sector explains about 17.6% of price moves in the current state. This is a point estimate from 28 trading days."
          },
          "company_share": {
            "median": 0.6111891995436295,
            "low": 0.6111891995436295,
            "high": 0.6111891995436295,
            "value_pct": 61.1,
            "range_collapsed": true,
            "display_value": "61.1%",
            "display_range": null,
            "display_text": "61.1%",
            "uncertainty_note": "Point estimate only; current-state history is limited to 28 trading days.",
            "plain_english": "Company-specific explains about 61.1% of price moves in the current state. This is a point estimate from 28 trading days."
          },
          "basis": "current_state"
        },
        "reporting_window_driver_mix": {
          "market_share": {
            "median": 0.22290286732441617,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "22.3%",
            "display_range": null,
            "display_text": "22.3%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 28 trading days.",
            "kind": "share_pct",
            "value_pct": 22.3,
            "plain_english": "Market explains about 22.3% of price moves in the current state."
          },
          "sector_share": {
            "median": 0.18028927468233533,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "18.0%",
            "display_range": null,
            "display_text": "18.0%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 28 trading days.",
            "kind": "share_pct",
            "value_pct": 18.0,
            "plain_english": "Sector explains about 18.0% of price moves in the current state."
          },
          "company_share": {
            "median": 0.5968078579932485,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "59.7%",
            "display_range": null,
            "display_text": "59.7%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 28 trading days.",
            "kind": "share_pct",
            "value_pct": 59.7,
            "plain_english": "Company-specific explains about 59.7% of price moves in the current state."
          },
          "basis": "reporting_window"
        },
        "current_sensitivities": {
          "beta_market": {
            "median": 1.1731909796153825,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "1.17",
            "display_range": null,
            "display_text": "1.17",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 28 trading days.",
            "kind": "beta",
            "strength_label": "Moderate",
            "plain_english": "Moderate market link: a 1% market move has lined up with about a 1.17% stock move in the same direction in this state.",
            "value_num": 1.17
          },
          "beta_stock_lag": {
            "median": -0.06257301294109417,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "-0.06",
            "display_range": null,
            "display_text": "-0.06",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 28 trading days.",
            "kind": "lag_beta",
            "value_num": -0.06
          },
          "beta_sector": {
            "median": 0.5642321255191352,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "0.56",
            "display_range": null,
            "display_text": "0.56",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 28 trading days.",
            "kind": "beta",
            "strength_label": "Modest",
            "plain_english": "Modest sector link: a 1% sector move has lined up with about a 0.56% stock move in the same direction in this state.",
            "value_num": 0.56
          },
          "beta_market_lag": {
            "median": 0.06969357040788807,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "0.07",
            "display_range": null,
            "display_text": "0.07",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 28 trading days.",
            "kind": "lag_beta",
            "value_num": 0.07
          },
          "beta_sector_lag": {
            "median": 0.47340680833975896,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "0.47",
            "display_range": null,
            "display_text": "0.47",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 28 trading days.",
            "kind": "lag_beta",
            "value_num": 0.47
          },
          "posterior_source": null,
          "intervals_collapsed": false,
          "confidence_label": "High, limited history",
          "confidence_note": "Based on 28 trading days relative to the 252-day target."
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
            "dominant_driver": "company",
            "dominant_driver_label": "Company-specific",
            "regime_id": 0,
            "regime_label": "High Volatility",
            "dominant_share": {
              "median": 0.7064851543789502,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "70.6%",
              "display_range": null,
              "display_text": "70.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
              "kind": "share_pct",
              "value_pct": 70.6,
              "plain_english": "Company-specific explains about 70.6% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.19077209692753005,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "19.1%",
                "display_range": null,
                "display_text": "19.1%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
                "kind": "share_pct",
                "value_pct": 19.1,
                "plain_english": "Market explains about 19.1% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.1027427486935198,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "10.3%",
                "display_range": null,
                "display_text": "10.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
                "kind": "share_pct",
                "value_pct": 10.3,
                "plain_english": "Sector explains about 10.3% of price moves in the current state."
              },
              "company_share": {
                "median": 0.7064851543789502,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "70.6%",
                "display_range": null,
                "display_text": "70.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
                "kind": "share_pct",
                "value_pct": 70.6,
                "plain_english": "Company-specific explains about 70.6% of price moves in the current state."
              }
            },
            "summary": "Jan: Still clearly company-driven, though based on only 5 trading days."
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
            "regime_id": 0,
            "regime_label": "High Volatility",
            "dominant_share": {
              "median": 0.6437921491578471,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "64.4%",
              "display_range": null,
              "display_text": "64.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
              "kind": "share_pct",
              "value_pct": 64.4,
              "plain_english": "Company-specific explains about 64.4% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.20358382131492836,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "20.4%",
                "display_range": null,
                "display_text": "20.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
                "kind": "share_pct",
                "value_pct": 20.4,
                "plain_english": "Market explains about 20.4% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.1526240295272246,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "15.3%",
                "display_range": null,
                "display_text": "15.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
                "kind": "share_pct",
                "value_pct": 15.3,
                "plain_english": "Sector explains about 15.3% of price moves in the current state."
              },
              "company_share": {
                "median": 0.6437921491578471,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "64.4%",
                "display_range": null,
                "display_text": "64.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
                "kind": "share_pct",
                "value_pct": 64.4,
                "plain_english": "Company-specific explains about 64.4% of price moves in the current state."
              }
            },
            "summary": "Feb: Still clearly company-driven."
          },
          {
            "month_key": "2026-03",
            "month_label": "March 2026",
            "month_short_label": "Mar",
            "period_label": "2026-03-02 to 2026-03-06",
            "n_obs": 5,
            "partial_month": false,
            "dominant_driver": "company",
            "dominant_driver_label": "Company-specific",
            "regime_id": 0,
            "regime_label": "High Volatility",
            "dominant_share": {
              "median": 0.34934549714252944,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "34.9%",
              "display_range": null,
              "display_text": "34.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
              "kind": "share_pct",
              "value_pct": 34.9,
              "plain_english": "Company-specific explains about 34.9% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.3124812087855,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "31.2%",
                "display_range": null,
                "display_text": "31.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
                "kind": "share_pct",
                "value_pct": 31.2,
                "plain_english": "Market explains about 31.2% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.3381732940719706,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "33.8%",
                "display_range": null,
                "display_text": "33.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
                "kind": "share_pct",
                "value_pct": 33.8,
                "plain_english": "Sector explains about 33.8% of price moves in the current state."
              },
              "company_share": {
                "median": 0.34934549714252944,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "34.9%",
                "display_range": null,
                "display_text": "34.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
                "kind": "share_pct",
                "value_pct": 34.9,
                "plain_english": "Company-specific explains about 34.9% of price moves in the current state."
              }
            },
            "summary": "Mar: Much more balanced across company, sector, and market factors, though based on only 5 trading days."
          }
        ],
        "regimes": [
          {
            "id": 0,
            "label": "High Volatility",
            "pct_time": 0.9285714285714286,
            "dominant_driver": "company",
            "dominant_driver_probability": 0.6111891995436295,
            "expected_duration_days": 8.872668748002374,
            "current_probability": 1.0,
            "n_days_effective": 26.0,
            "shares": {
              "market": {
                "median": 0.21293595633158108,
                "low": 0.21293595633158108,
                "high": 0.21293595633158108,
                "value_pct": 21.3,
                "range_collapsed": true,
                "display_value": "21.3%",
                "display_range": null,
                "display_text": "21.3%",
                "uncertainty_note": "Point estimate only; current-state history is limited to 28 trading days.",
                "plain_english": "Market explains about 21.3% of price moves in the current state. This is a point estimate from 28 trading days."
              },
              "sector": {
                "median": 0.17587484412478943,
                "low": 0.17587484412478943,
                "high": 0.17587484412478943,
                "value_pct": 17.6,
                "range_collapsed": true,
                "display_value": "17.6%",
                "display_range": null,
                "display_text": "17.6%",
                "uncertainty_note": "Point estimate only; current-state history is limited to 28 trading days.",
                "plain_english": "Sector explains about 17.6% of price moves in the current state. This is a point estimate from 28 trading days."
              },
              "company": {
                "median": 0.6111891995436295,
                "low": 0.6111891995436295,
                "high": 0.6111891995436295,
                "value_pct": 61.1,
                "range_collapsed": true,
                "display_value": "61.1%",
                "display_range": null,
                "display_text": "61.1%",
                "uncertainty_note": "Point estimate only; current-state history is limited to 28 trading days.",
                "plain_english": "Company-specific explains about 61.1% of price moves in the current state. This is a point estimate from 28 trading days."
              }
            },
            "sensitivities": {
              "beta_market": {
                "median": 1.1731909796153825,
                "low": 1.1731909796153825,
                "high": 1.1731909796153825,
                "value_num": 1.17,
                "range_collapsed": true,
                "display_value": "1.17",
                "display_range": null,
                "display_text": "1.17",
                "uncertainty_note": "Point estimate only; current-state history is limited to 28 trading days.",
                "strength_label": "Moderate",
                "plain_english": "Moderate market link: a 1% market move has lined up with about a 1.17% stock move in the same direction in this state. Shown as a point estimate because only 28 trading days are available."
              },
              "beta_sector": {
                "median": 0.5642321255191352,
                "low": 0.5642321255191352,
                "high": 0.5642321255191352,
                "value_num": 0.56,
                "range_collapsed": true,
                "display_value": "0.56",
                "display_range": null,
                "display_text": "0.56",
                "uncertainty_note": "Point estimate only; current-state history is limited to 28 trading days.",
                "strength_label": "Modest",
                "plain_english": "Modest sector link: a 1% sector move has lined up with about a 0.56% stock move in the same direction in this state. Shown as a point estimate because only 28 trading days are available."
              },
              "beta_market_lag": {
                "median": 0.06969357040788807,
                "low": 0.06969357040788807,
                "high": 0.06969357040788807
              },
              "beta_sector_lag": {
                "median": 0.47340680833975896,
                "low": 0.47340680833975896,
                "high": 0.47340680833975896
              },
              "beta_stock_lag": null
            },
            "volatility": {
              "median": 0.029682510292879126,
              "low": 0.029682510292879126,
              "high": 0.029682510292879126
            },
            "volatility_label": "High Volatility",
            "lead_signal": {
              "lead_factor": "sector",
              "lead_confidence": 0.560664539456816,
              "lead_horizon_days": 1
            },
            "dominant_driver_label": "Company-specific",
            "current_probability_display": null
          },
          {
            "id": 1,
            "label": "Low Volatility",
            "pct_time": 0.0714285714285714,
            "dominant_driver": "market",
            "dominant_driver_probability": 0.6365173260037383,
            "expected_duration_days": 1.3102691304383978,
            "current_probability": 0.0,
            "n_days_effective": 1.9999999999999991,
            "shares": {
              "market": {
                "median": 0.6365173260037383,
                "low": 0.6365173260037383,
                "high": 0.6365173260037383,
                "value_pct": 63.7,
                "range_collapsed": true,
                "display_value": "63.7%",
                "display_range": null,
                "display_text": "63.7%",
                "uncertainty_note": "Point estimate only; current-state history is limited to 28 trading days.",
                "plain_english": "Market explains about 63.7% of price moves in the current state. This is a point estimate from 28 trading days."
              },
              "sector": {
                "median": 0.3634826739962611,
                "low": 0.3634826739962611,
                "high": 0.3634826739962611,
                "value_pct": 36.3,
                "range_collapsed": true,
                "display_value": "36.3%",
                "display_range": null,
                "display_text": "36.3%",
                "uncertainty_note": "Point estimate only; current-state history is limited to 28 trading days.",
                "plain_english": "Sector explains about 36.3% of price moves in the current state. This is a point estimate from 28 trading days."
              },
              "company": {
                "median": 5.379888800973428e-16,
                "low": 5.379888800973428e-16,
                "high": 5.379888800973428e-16,
                "value_pct": 0.0,
                "range_collapsed": true,
                "display_value": "0.0%",
                "display_range": null,
                "display_text": "0.0%",
                "uncertainty_note": "Point estimate only; current-state history is limited to 28 trading days.",
                "plain_english": "Company-specific explains about 0.0% of price moves in the current state. This is a point estimate from 28 trading days."
              }
            },
            "sensitivities": {
              "beta_market": {
                "median": -0.19634634335836015,
                "low": -0.19634634335836015,
                "high": -0.19634634335836015,
                "value_num": -0.2,
                "range_collapsed": true,
                "display_value": "-0.20",
                "display_range": null,
                "display_text": "-0.20",
                "uncertainty_note": "Point estimate only; current-state history is limited to 28 trading days.",
                "strength_label": "Weak",
                "plain_english": "Weak market link: a 1% market move has lined up with about a 0.20% stock move in the opposite direction in this state. Shown as a point estimate because only 28 trading days are available."
              },
              "beta_sector": {
                "median": 0.5224518905255764,
                "low": 0.5224518905255764,
                "high": 0.5224518905255764,
                "value_num": 0.52,
                "range_collapsed": true,
                "display_value": "0.52",
                "display_range": null,
                "display_text": "0.52",
                "uncertainty_note": "Point estimate only; current-state history is limited to 28 trading days.",
                "strength_label": "Modest",
                "plain_english": "Modest sector link: a 1% sector move has lined up with about a 0.52% stock move in the same direction in this state. Shown as a point estimate because only 28 trading days are available."
              },
              "beta_market_lag": {
                "median": -0.8157674275331768,
                "low": -0.8157674275331768,
                "high": -0.8157674275331768
              },
              "beta_sector_lag": {
                "median": -0.3614270625510738,
                "low": -0.3614270625510738,
                "high": -0.3614270625510738
              },
              "beta_stock_lag": null
            },
            "volatility": {
              "median": 2.377096750253987e-17,
              "low": 2.377096750253987e-17,
              "high": 2.377096750253987e-17
            },
            "volatility_label": "Low Volatility",
            "lead_signal": {
              "lead_factor": "market",
              "lead_confidence": 0.8359505384491904,
              "lead_horizon_days": 1
            },
            "dominant_driver_label": "Market",
            "current_probability_display": 0.0
          }
        ],
        "transitions": {
          "mean": [
            [
              0.8872943385579289,
              0.11270566144207125
            ],
            [
              0.7632019840575914,
              0.23679801594240882
            ]
          ],
          "low": [
            [
              0.8146402668313328,
              0.04087956791445042
            ],
            [
              0.49130089875946903,
              0.03584708176158796
            ]
          ],
          "high": [
            [
              0.9591204320855498,
              0.18535973316866733
            ],
            [
              0.9641529182384121,
              0.5086991012405311
            ]
          ],
          "counts": [
            [
              23.0,
              2.0
            ],
            [
              2.0,
              0.0
            ]
          ]
        },
        "methodology": {
          "estimation_window_days": 28,
          "reporting_window_days": 28,
          "regime_inference": "statsmodels_markov_regression",
          "distribution": "gaussian",
          "history_limited": true,
          "selection_metric": "bic_with_small_state_penalty",
          "selection_reason": "bic",
          "candidate_regime_counts": [
            2
          ],
          "lead_horizon_days": 1,
          "lead_definition": "compare lagged market, sector, and stock-persistence contributions",
          "state_label_definition": "volatility bucket only",
          "market_regime_definition": "volatility bucket within the fitted Markov states",
          "current_driver_mix_basis": "active_regime",
          "reporting_window_driver_mix_basis": "probability_weighted_recent_average",
          "sector_proxy_equals_market": false
        },
        "client_read": {
          "market_link_display": "1.17",
          "sector_link_display": "0.56",
          "market_link_explainer": "Moderate market link. A 1% market move has lined up with about a 1.17% stock move in the same direction in this state. This is a point estimate from 28 trading days.",
          "sector_link_explainer": "Modest sector link. A 1% sector move has lined up with about a 0.56% stock move in the same direction in this state. This is a point estimate from 28 trading days.",
          "stock_persistence_display": "-0.06",
          "point_estimate_note": "Point estimate only because the current state has 28 trading days.",
          "history_limited_note": "Read is based on 28 trading days versus the 252-day target."
        },
        "current_summary": {
          "regime_label": "High Volatility",
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "driver_share_pct": 61.1,
          "driver_share_display": "61.1%",
          "confidence_label": "High, limited history",
          "confidence_pct": 100.0,
          "display_confidence_pct": null,
          "confidence_note": "Based on 28 trading days relative to the 252-day target.",
          "history_days": 28,
          "history_limited": true,
          "volatility_label": "High Volatility",
          "lead_signal_text": "Recent sector moves have tended to show up about a day before the stock.",
          "state_term": "state",
          "stay_probability": 0.8872943385579289,
          "effective_days": 26.0,
          "persistence_note": "This state looks more persistent, with a typical run length of about 8.9 days.",
          "expected_duration_days": 8.9
        },
        "display_notes": {
          "current_driver_mix": "Current state shares come from the active regime, not the full reporting window average.",
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
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_label": "High Volatility",
          "summary": "Jan: Still clearly company-driven, though based on only 5 trading days.",
          "share_market": 0.19077209692753005,
          "share_sector": 0.1027427486935198,
          "share_company": 0.7064851543789502,
          "share_market_display": "19.1%",
          "share_sector_display": "10.3%",
          "share_company_display": "70.6%",
          "dominant_share_display": "70.6%"
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
          "regime_label": "High Volatility",
          "summary": "Feb: Still clearly company-driven.",
          "share_market": 0.20358382131492836,
          "share_sector": 0.1526240295272246,
          "share_company": 0.6437921491578471,
          "share_market_display": "20.4%",
          "share_sector_display": "15.3%",
          "share_company_display": "64.4%",
          "dominant_share_display": "64.4%"
        },
        {
          "month_key": "2026-03",
          "month_label": "March 2026",
          "month_short_label": "Mar",
          "period_label": "2026-03-02 to 2026-03-06",
          "n_obs": 5,
          "partial_month": false,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_label": "High Volatility",
          "summary": "Mar: Much more balanced across company, sector, and market factors, though based on only 5 trading days.",
          "share_market": 0.3124812087855,
          "share_sector": 0.3381732940719706,
          "share_company": 0.34934549714252944,
          "share_market_display": "31.2%",
          "share_sector_display": "33.8%",
          "share_company_display": "34.9%",
          "dominant_share_display": "34.9%"
        }
      ],
      "regime": {
        "valid": true,
        "regime_method": "simple_markov_return_model",
        "n_regimes": 2,
        "current_regime_label": "High Volatility",
        "current_regime_probability": 1.0,
        "labels": [
          "High Volatility",
          "Low Volatility"
        ],
        "pct_time": [
          0.9285714285714286,
          0.0714285714285714
        ],
        "current_regime": 0,
        "regimes": [
          {
            "id": 0,
            "label": "High Volatility",
            "pct_time": 0.9285714285714286,
            "dominant_driver": "company",
            "dominant_driver_probability": 0.6111891995436295,
            "expected_duration_days": 8.872668748002374,
            "current_probability": 1.0,
            "n_days_effective": 26.0,
            "shares": {
              "market": {
                "median": 0.21293595633158108,
                "low": 0.21293595633158108,
                "high": 0.21293595633158108
              },
              "sector": {
                "median": 0.17587484412478943,
                "low": 0.17587484412478943,
                "high": 0.17587484412478943
              },
              "company": {
                "median": 0.6111891995436295,
                "low": 0.6111891995436295,
                "high": 0.6111891995436295
              }
            },
            "sensitivities": {
              "beta_market": {
                "median": 1.1731909796153825,
                "low": 1.1731909796153825,
                "high": 1.1731909796153825
              },
              "beta_sector": {
                "median": 0.5642321255191352,
                "low": 0.5642321255191352,
                "high": 0.5642321255191352
              },
              "beta_market_lag": {
                "median": 0.06969357040788807,
                "low": 0.06969357040788807,
                "high": 0.06969357040788807
              },
              "beta_sector_lag": {
                "median": 0.47340680833975896,
                "low": 0.47340680833975896,
                "high": 0.47340680833975896
              }
            },
            "volatility": {
              "median": 0.029682510292879126,
              "low": 0.029682510292879126,
              "high": 0.029682510292879126
            },
            "volatility_label": "High Volatility",
            "lead_signal": {
              "lead_factor": "sector",
              "lead_confidence": 0.560664539456816,
              "lead_horizon_days": 1
            }
          },
          {
            "id": 1,
            "label": "Low Volatility",
            "pct_time": 0.0714285714285714,
            "dominant_driver": "market",
            "dominant_driver_probability": 0.6365173260037383,
            "expected_duration_days": 1.3102691304383978,
            "current_probability": 0.0,
            "n_days_effective": 1.9999999999999991,
            "shares": {
              "market": {
                "median": 0.6365173260037383,
                "low": 0.6365173260037383,
                "high": 0.6365173260037383
              },
              "sector": {
                "median": 0.3634826739962611,
                "low": 0.3634826739962611,
                "high": 0.3634826739962611
              },
              "company": {
                "median": 5.379888800973428e-16,
                "low": 5.379888800973428e-16,
                "high": 5.379888800973428e-16
              }
            },
            "sensitivities": {
              "beta_market": {
                "median": -0.19634634335836015,
                "low": -0.19634634335836015,
                "high": -0.19634634335836015
              },
              "beta_sector": {
                "median": 0.5224518905255764,
                "low": 0.5224518905255764,
                "high": 0.5224518905255764
              },
              "beta_market_lag": {
                "median": -0.8157674275331768,
                "low": -0.8157674275331768,
                "high": -0.8157674275331768
              },
              "beta_sector_lag": {
                "median": -0.3614270625510738,
                "low": -0.3614270625510738,
                "high": -0.3614270625510738
              }
            },
            "volatility": {
              "median": 2.377096750253987e-17,
              "low": 2.377096750253987e-17,
              "high": 2.377096750253987e-17
            },
            "volatility_label": "Low Volatility",
            "lead_signal": {
              "lead_factor": "market",
              "lead_confidence": 0.8359505384491904,
              "lead_horizon_days": 1
            }
          }
        ],
        "transitions": [
          [
            0.8872943385579289,
            0.11270566144207125
          ],
          [
            0.7632019840575914,
            0.23679801594240882
          ]
        ]
      }
    },
    "order_book": {
      "bids": [
        {
          "level": 1,
          "price": 0.225,
          "quantity": 34000.0,
          "value": 7650.0
        },
        {
          "level": 2,
          "price": 0.22,
          "quantity": 356800.0,
          "value": 78496.0
        },
        {
          "level": 3,
          "price": 0.215,
          "quantity": 391500.0,
          "value": 84172.5
        },
        {
          "level": 4,
          "price": 0.21,
          "quantity": 154000.0,
          "value": 32340.0
        },
        {
          "level": 5,
          "price": 0.205,
          "quantity": 70000.0,
          "value": 14350.0
        },
        {
          "level": 6,
          "price": 0.2,
          "quantity": 262100.0,
          "value": 52420.0
        },
        {
          "level": 7,
          "price": 0.195,
          "quantity": 110000.0,
          "value": 21450.0
        },
        {
          "level": 8,
          "price": 0.18,
          "quantity": 50000.0,
          "value": 9000.0
        },
        {
          "level": 9,
          "price": 0.178,
          "quantity": 30000.0,
          "value": 5340.0
        }
      ],
      "asks": [
        {
          "level": 1,
          "price": 0.23,
          "quantity": 746700.0,
          "value": 171741.0
        },
        {
          "level": 2,
          "price": 0.235,
          "quantity": 193600.0,
          "value": 45496.0
        },
        {
          "level": 3,
          "price": 0.24,
          "quantity": 90000.0,
          "value": 21600.0
        },
        {
          "level": 4,
          "price": 0.245,
          "quantity": 50000.0,
          "value": 12250.0
        },
        {
          "level": 5,
          "price": 0.25,
          "quantity": 120000.0,
          "value": 30000.0
        },
        {
          "level": 6,
          "price": 0.255,
          "quantity": 60000.0,
          "value": 15300.0
        },
        {
          "level": 7,
          "price": 0.26,
          "quantity": 288800.0,
          "value": 75088.0
        },
        {
          "level": 8,
          "price": 0.265,
          "quantity": 462200.0,
          "value": 122483.0
        },
        {
          "level": 9,
          "price": 0.27,
          "quantity": 201500.0,
          "value": 54405.0
        },
        {
          "level": 10,
          "price": 0.275,
          "quantity": 220500.0,
          "value": 60637.50000000001
        }
      ]
    },
    "execution_dynamic": {
      "snapshot": {
        "valid": true,
        "snapshot_time": "2026-03-06 08:59:59.520100",
        "snapshot_basis": "last_continuous_session_snapshot",
        "snapshot_label": "final continuous-session displayed book before close",
        "snapshot_note": "Final continuous-session displayed book before close",
        "snapshot_mic": "XSES",
        "mid_price": 0.2275,
        "spread_pct": 0.021978021978021997,
        "spread_ticks": 1.0,
        "tick_size": 0.005,
        "bid_depth_notional_top10": 305218.5,
        "ask_depth_notional_top10": 609000.5,
        "bid_ask_depth_ratio": 0.5012
      },
      "historical_trade_scenarios": {
        "valid": true,
        "requested_lookback_calendar_days": 365,
        "lookback_calendar_days": 365,
        "effective_calendar_days": 44,
        "history_limited": true,
        "trade_days_used": 30,
        "n_trades_used": 8849,
        "first_trade_date": "2026-01-22",
        "last_trade_date": "2026-03-06",
        "window_label": "Jan 22, 2026 to Mar 6, 2026",
        "window_short_label": "Jan 22-Mar 6",
        "trade_days_label": "30 trading days",
        "trade_count_label": "8,849 trades",
        "window_detail_label": "30 trading days • 8,849 trades",
        "history_note": "Trade-size percentiles use available history from Jan 22, 2026 to Mar 6, 2026 (30 trading days • 8,849 trades), not a full year.",
        "scenarios": [
          {
            "key": "p90",
            "label": "90th percentile trade",
            "quantile": 0.9,
            "trade_notional": 10000.0,
            "impact_pct": -0.016243,
            "filled_pct": 100.0,
            "levels_consumed": 2,
            "pct_of_bid_depth": 3.28,
            "pct_of_adv": 2.23
          },
          {
            "key": "p95",
            "label": "95th percentile trade",
            "quantile": 0.95,
            "trade_notional": 13798.2,
            "impact_pct": -0.020904,
            "filled_pct": 100.0,
            "levels_consumed": 2,
            "pct_of_bid_depth": 4.52,
            "pct_of_adv": 3.08
          },
          {
            "key": "p99_99",
            "label": "99.99th percentile trade",
            "quantile": 0.9999,
            "trade_notional": 111661.77,
            "impact_pct": -0.03662,
            "filled_pct": 100.0,
            "levels_consumed": 3,
            "pct_of_bid_depth": 36.58,
            "pct_of_adv": 24.95
          }
        ]
      },
      "l3_sell_order_scenarios": {
        "valid": true,
        "trade_date": "2026-03-06",
        "selection_method": "largest_observed_ask_orders_during_day",
        "orders": [
          {
            "rank": 1,
            "order_id": "8121390356208857088",
            "timestamp": "2026-03-06 04:08:44.757900000",
            "local_timestamp": "2026-03-06 12:08:44",
            "posted_price": 0.23,
            "size_shares": 300000.0,
            "notional": 69000.0,
            "impact_pct": -0.030579000000000002,
            "filled_pct": 100.0,
            "levels_consumed": 2,
            "pct_of_bid_depth": 22.61,
            "price_vs_mid_pct": 1.099,
            "executed_event_count": 0,
            "event_count": 4
          },
          {
            "rank": 2,
            "order_id": "8117432114348421120",
            "timestamp": "2026-03-05 22:59:01.959400000",
            "local_timestamp": "2026-03-06 06:59:01",
            "posted_price": 0.3,
            "size_shares": 200000.0,
            "notional": 60000.0,
            "impact_pct": -0.030219,
            "filled_pct": 100.0,
            "levels_consumed": 2,
            "pct_of_bid_depth": 19.66,
            "price_vs_mid_pct": 31.868,
            "executed_event_count": 0,
            "event_count": 1
          },
          {
            "rank": 3,
            "order_id": "8119594029086503936",
            "timestamp": "2026-03-05 22:59:01.959400000",
            "local_timestamp": "2026-03-06 06:59:01",
            "posted_price": 0.28,
            "size_shares": 200000.0,
            "notional": 56000.0,
            "impact_pct": -0.030022000000000004,
            "filled_pct": 100.0,
            "levels_consumed": 2,
            "pct_of_bid_depth": 18.35,
            "price_vs_mid_pct": 23.077,
            "executed_event_count": 0,
            "event_count": 1
          }
        ]
      },
      "intraday_liquidity_profile": {
        "valid": true,
        "trade_date": "2026-03-06",
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
            "spread_pct": 0.02247191011235957,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 260559.0,
            "ask_depth_notional": 416014.5,
            "mid_price": 0.2225
          },
          {
            "bucket": "09:30",
            "spread_pct": 0.02247191011235957,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 285000.0,
            "ask_depth_notional": 416013.0,
            "mid_price": 0.2225
          },
          {
            "bucket": "10:00",
            "spread_pct": 0.02247191011235957,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 288685.0,
            "ask_depth_notional": 415180.0,
            "mid_price": 0.2225
          },
          {
            "bucket": "10:30",
            "spread_pct": 0.02247191011235957,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 290753.0,
            "ask_depth_notional": 455351.0,
            "mid_price": 0.2225
          },
          {
            "bucket": "11:00",
            "spread_pct": 0.02247191011235957,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 303239.5,
            "ask_depth_notional": 486003.0,
            "mid_price": 0.2225
          },
          {
            "bucket": "11:30",
            "spread_pct": 0.021978021978021997,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 307092.0,
            "ask_depth_notional": 544928.5,
            "mid_price": 0.2275
          },
          {
            "bucket": "13:00",
            "spread_pct": 0.021978021978021997,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 317709.0,
            "ask_depth_notional": 625114.5,
            "mid_price": 0.2275
          },
          {
            "bucket": "13:30",
            "spread_pct": 0.021978021978021997,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 317767.5,
            "ask_depth_notional": 625114.5,
            "mid_price": 0.2275
          },
          {
            "bucket": "14:00",
            "spread_pct": 0.021978021978021997,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 306315.0,
            "ask_depth_notional": 624275.5,
            "mid_price": 0.2275
          },
          {
            "bucket": "14:30",
            "spread_pct": 0.02247191011235957,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 318238.5,
            "ask_depth_notional": 575481.0,
            "mid_price": 0.2225
          },
          {
            "bucket": "15:00",
            "spread_pct": 0.02247191011235957,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 313706.5,
            "ask_depth_notional": 575481.0,
            "mid_price": 0.2225
          },
          {
            "bucket": "15:30",
            "spread_pct": 0.021978021978021997,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 308108.5,
            "ask_depth_notional": 622021.5,
            "mid_price": 0.2275
          },
          {
            "bucket": "16:00",
            "spread_pct": 0.021978021978021997,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 316475.5,
            "ask_depth_notional": 622021.5,
            "mid_price": 0.2275
          },
          {
            "bucket": "16:30",
            "spread_pct": 0.021978021978021997,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 305218.5,
            "ask_depth_notional": 609000.5,
            "mid_price": 0.2275
          }
        ],
        "summary": {
          "median_spread_pct": 0.022224966045190784,
          "median_spread_ticks": 1.0000000000000009,
          "median_bid_depth_notional": 306703.5,
          "median_ask_depth_notional": 575481.0,
          "tightest_bucket": "11:30",
          "widest_bucket": "09:00",
          "deepest_bid_bucket": "14:30",
          "thinnest_bid_bucket": "09:00"
        }
      }
    },
    "peer_capacity": {
      "bx_ticket_pct_adv_50k": 11.2,
      "peers": [
        {
          "ticker": "ITS",
          "pct": 70.8
        },
        {
          "ticker": "5DD",
          "pct": 236.3
        },
        {
          "ticker": "QS9",
          "pct": 587.1
        },
        {
          "ticker": "LVR",
          "pct": 5164.4
        },
        {
          "ticker": "NXR",
          "pct": 29188.6
        },
        {
          "ticker": "U77",
          "pct": 36094.6
        },
        {
          "ticker": "532",
          "pct": null
        },
        {
          "ticker": "KUX",
          "pct": null
        }
      ]
    },
    "trader_composition": {
      "primary_period": "30d",
      "periods": {
        "1d": {
          "valid": true,
          "currency": "SGD",
          "n_trades": 82,
          "n_runs": 46,
          "n_trade_days": 1,
          "first_trade_date": "2026-03-06",
          "last_trade_date": "2026-03-06",
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
            "retail_pct": 0.32926829268292684,
            "mixed_pct": 0.15853658536585366,
            "instit_pct": 0.2804878048780488,
            "ambiguous_pct": 0.23170731707317074,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.23170731707317074,
            "retail_qty_pct": 0.0711643734280219,
            "mixed_qty_pct": 0.23672140849238052,
            "instit_qty_pct": 0.4985944666370765,
            "ambiguous_qty_pct": 0.1935197514425211,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.1935197514425211,
            "retail_notional_pct": 0.07139943685692482,
            "mixed_notional_pct": 0.23616812715454857,
            "instit_notional_pct": 0.4988421357332702,
            "ambiguous_notional_pct": 0.19359030025525645,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.19359030025525645
          },
          "run_composition": {
            "retail_pct": 0.5,
            "mixed_pct": 0.15217391304347827,
            "instit_pct": 0.1956521739130435,
            "ambiguous_pct": 0.15217391304347827,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.15217391304347827,
            "retail_notional_pct": 0.07139943685692482,
            "mixed_notional_pct": 0.23616812715454857,
            "instit_notional_pct": 0.4988421357332702,
            "unclear_notional_pct": 0.19359030025525645
          },
          "counts": {
            "trades": {
              "retail": 27,
              "mixed": 13,
              "institutional": 23,
              "ambiguous": 19,
              "unobservable": 0,
              "unclear": 19
            },
            "runs": {
              "retail": 23,
              "mixed": 7,
              "institutional": 9,
              "ambiguous": 7,
              "unobservable": 0,
              "unclear": 7
            }
          },
          "confidence": {
            "high": 0.0,
            "medium": 0.2826086956521739,
            "low": 0.41304347826086957,
            "na": 0.30434782608695654
          },
          "confidence_counts": {
            "high": 0,
            "medium": 13,
            "low": 19,
            "na": 14
          },
          "trade_confidence": {
            "high": 0.0,
            "medium": 0.15853658536585366,
            "low": 0.45121951219512196,
            "na": 0.3902439024390244
          },
          "trade_confidence_counts": {
            "high": 0,
            "medium": 13,
            "low": 37,
            "na": 32
          },
          "observability": {
            "avg_feature_coverage": 0.8663043478260873,
            "observable_run_pct": 1.0,
            "ambiguous_run_pct": 0.15217391304347827,
            "unobservable_run_pct": 0.0
          },
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "dominant_share": 0.5,
          "dominance_gap": 0.30434782608695654,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 43,
              "MULTI_FILL_SINGLE_PRICE": 39
            },
            "d2_information": {
              "NEUTRAL_OR_REVERSING": 61,
              "MOMENTUM_REACTIVE": 11,
              "PERSISTENT_POSITIVE_IMPACT": 10
            },
            "d3_urgency": {
              "IMMEDIATE": 46
            },
            "participant_confidence": {
              "LOW": 19,
              "NA": 14,
              "MEDIUM": 13
            }
          },
          "trade_size": {
            "avg": 1853.7073170731708,
            "median": 956.25
          },
          "run_size": {
            "avg": 3304.4347826086955,
            "median": 1780.5,
            "avg_length": 1.2608695652173914
          },
          "recent_trades": [
            {
              "trade_id": "BMLL-82",
              "timestamp": "2026-03-06T08:59:30.061400",
              "price": 0.23,
              "size": 5700.0,
              "notional": 1311.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 3476,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-81",
              "timestamp": "2026-03-06T08:57:53.391200",
              "price": 0.225,
              "size": 500.0,
              "notional": 112.5,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 3475,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-80",
              "timestamp": "2026-03-06T08:55:18.807200",
              "price": 0.225,
              "size": 4400.0,
              "notional": 990.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 3474,
              "d1": "SINGLE_FILL",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-79",
              "timestamp": "2026-03-06T08:55:18.686700",
              "price": 0.225,
              "size": 20000.0,
              "notional": 4500.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 3474,
              "d1": "SINGLE_FILL",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-78",
              "timestamp": "2026-03-06T08:55:11.746600",
              "price": 0.225,
              "size": 600.0,
              "notional": 135.0,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 3473,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-77",
              "timestamp": "2026-03-06T08:38:37.856400",
              "price": 0.225,
              "size": 500.0,
              "notional": 112.5,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 3472,
              "d1": "SINGLE_FILL",
              "d2": "MOMENTUM_REACTIVE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-76",
              "timestamp": "2026-03-06T08:28:16.211700",
              "price": 0.225,
              "size": 300.0,
              "notional": 67.5,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 3471,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-75",
              "timestamp": "2026-03-06T08:28:16.211700",
              "price": 0.225,
              "size": 1200.0,
              "notional": 270.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 3471,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-74",
              "timestamp": "2026-03-06T08:06:35.597000",
              "price": 0.225,
              "size": 500.0,
              "notional": 112.5,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 3470,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-73",
              "timestamp": "2026-03-06T08:01:34.814200",
              "price": 0.225,
              "size": 100.0,
              "notional": 22.5,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 3469,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-72",
              "timestamp": "2026-03-06T08:00:25.836400",
              "price": 0.225,
              "size": 300.0,
              "notional": 67.5,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 3468,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-71",
              "timestamp": "2026-03-06T08:00:21.309900",
              "price": 0.225,
              "size": 10000.0,
              "notional": 2250.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 3467,
              "d1": "SINGLE_FILL",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-70",
              "timestamp": "2026-03-06T08:00:00.036200",
              "price": 0.225,
              "size": 100.0,
              "notional": 22.5,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 3466,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-69",
              "timestamp": "2026-03-06T08:00:00.036200",
              "price": 0.225,
              "size": 10000.0,
              "notional": 2250.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 3466,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-68",
              "timestamp": "2026-03-06T08:00:00.036200",
              "price": 0.225,
              "size": 600.0,
              "notional": 135.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 3466,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-67",
              "timestamp": "2026-03-06T08:00:00.035900",
              "price": 0.225,
              "size": 13500.0,
              "notional": 3037.5,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 3466,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-66",
              "timestamp": "2026-03-06T07:58:19.901000",
              "price": 0.225,
              "size": 100.0,
              "notional": 22.5,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 3465,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-65",
              "timestamp": "2026-03-06T07:58:19.901000",
              "price": 0.225,
              "size": 14000.0,
              "notional": 3150.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 3465,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-64",
              "timestamp": "2026-03-06T07:58:02.429300",
              "price": 0.23,
              "size": 200.0,
              "notional": 46.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 3464,
              "d1": "SINGLE_FILL",
              "d2": "MOMENTUM_REACTIVE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-63",
              "timestamp": "2026-03-06T07:58:02.308200",
              "price": 0.225,
              "size": 20000.0,
              "notional": 4500.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 3464,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "MOMENTUM_REACTIVE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-62",
              "timestamp": "2026-03-06T07:58:02.308200",
              "price": 0.225,
              "size": 20000.0,
              "notional": 4500.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 3464,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "MOMENTUM_REACTIVE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-61",
              "timestamp": "2026-03-06T07:58:02.308100",
              "price": 0.225,
              "size": 46000.0,
              "notional": 10350.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 3464,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "MOMENTUM_REACTIVE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-60",
              "timestamp": "2026-03-06T07:54:48.255200",
              "price": 0.225,
              "size": 10000.0,
              "notional": 2250.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 3463,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-59",
              "timestamp": "2026-03-06T07:46:12.668100",
              "price": 0.225,
              "size": 4000.0,
              "notional": 900.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 3462,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-58",
              "timestamp": "2026-03-06T07:29:04.073500",
              "price": 0.225,
              "size": 20000.0,
              "notional": 4500.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 3461,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-57",
              "timestamp": "2026-03-06T07:20:17.215500",
              "price": 0.225,
              "size": 5000.0,
              "notional": 1125.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 3460,
              "d1": "SINGLE_FILL",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-56",
              "timestamp": "2026-03-06T07:20:14.595800",
              "price": 0.225,
              "size": 5000.0,
              "notional": 1125.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 3460,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-55",
              "timestamp": "2026-03-06T07:20:01.453600",
              "price": 0.225,
              "size": 21500.0,
              "notional": 4837.5,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 3459,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-54",
              "timestamp": "2026-03-06T07:20:01.423500",
              "price": 0.225,
              "size": 20000.0,
              "notional": 4500.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 3459,
              "d1": "SINGLE_FILL",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-53",
              "timestamp": "2026-03-06T07:19:57.383600",
              "price": 0.225,
              "size": 18500.0,
              "notional": 4162.5,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 3458,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            }
          ],
          "peer_comparison": [
            {
              "ticker": "TKU",
              "currency": "SGD",
              "is_target": true,
              "retail_pct": 0.32926829268292684,
              "mixed_pct": 0.15853658536585366,
              "instit_pct": 0.2804878048780488,
              "ambiguous_pct": 0.23170731707317074,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.23170731707317074,
              "retail_qty_pct": 0.0711643734280219,
              "mixed_qty_pct": 0.23672140849238052,
              "instit_qty_pct": 0.4985944666370765,
              "ambiguous_qty_pct": 0.1935197514425211,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.1935197514425211,
              "retail_notional_pct": 0.07139943685692482,
              "mixed_notional_pct": 0.23616812715454857,
              "instit_notional_pct": 0.4988421357332702,
              "ambiguous_notional_pct": 0.19359030025525645,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.19359030025525645,
              "run_retail_pct": 0.5,
              "run_mixed_pct": 0.15217391304347827,
              "run_instit_pct": 0.1956521739130435,
              "run_unclear_pct": 0.15217391304347827,
              "avg_trade_size": 1853.7073170731708,
              "avg_run_notional": 3304.4347826086955,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.2826086956521739,
              "low_confidence_pct": 0.41304347826086957,
              "na_confidence_pct": 0.30434782608695654,
              "avg_feature_coverage": 0.8663043478260873,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "5DD",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.15306122448979592,
              "mixed_pct": 0.04081632653061224,
              "instit_pct": 0.4489795918367347,
              "ambiguous_pct": 0.35714285714285715,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.35714285714285715,
              "retail_qty_pct": 0.06058673469387755,
              "mixed_qty_pct": 0.03762755102040816,
              "instit_qty_pct": 0.5331632653061225,
              "ambiguous_qty_pct": 0.36862244897959184,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.36862244897959184,
              "retail_notional_pct": 0.06070341391388186,
              "mixed_notional_pct": 0.03771924797481113,
              "instit_notional_pct": 0.5328463216232525,
              "ambiguous_notional_pct": 0.3687310164880545,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.3687310164880545,
              "run_retail_pct": 0.358974358974359,
              "run_mixed_pct": 0.05128205128205128,
              "run_instit_pct": 0.23076923076923078,
              "run_unclear_pct": 0.358974358974359,
              "avg_trade_size": 3026.9285714285716,
              "avg_run_notional": 7606.128205128205,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Mixed, leaning retail-like",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.1794871794871795,
              "low_confidence_pct": 0.41025641025641024,
              "na_confidence_pct": 0.41025641025641024,
              "avg_feature_coverage": 0.8653846153846158,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "ITS",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.23015873015873015,
              "mixed_pct": 0.31746031746031744,
              "instit_pct": 0.24603174603174602,
              "ambiguous_pct": 0.20634920634920634,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.20634920634920634,
              "retail_qty_pct": 0.06140350877192982,
              "mixed_qty_pct": 0.2573099415204678,
              "instit_qty_pct": 0.5175438596491229,
              "ambiguous_qty_pct": 0.16374269005847952,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.16374269005847952,
              "retail_notional_pct": 0.061777072017611935,
              "mixed_notional_pct": 0.25811574065719906,
              "instit_notional_pct": 0.5168269664543371,
              "ambiguous_notional_pct": 0.1632802208708519,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.1632802208708519,
              "run_retail_pct": 0.5283018867924528,
              "run_mixed_pct": 0.22641509433962265,
              "run_instit_pct": 0.11320754716981132,
              "run_unclear_pct": 0.1320754716981132,
              "avg_trade_size": 879.6349206349206,
              "avg_run_notional": 2091.2075471698113,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.41509433962264153,
              "low_confidence_pct": 0.22641509433962265,
              "na_confidence_pct": 0.3584905660377358,
              "avg_feature_coverage": 0.8811320754716983,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "QS9",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.24175824175824176,
              "mixed_pct": 0.07692307692307693,
              "instit_pct": 0.27472527472527475,
              "ambiguous_pct": 0.4065934065934066,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.4065934065934066,
              "retail_qty_pct": 0.055587365206603685,
              "mixed_qty_pct": 0.0489073384864968,
              "instit_qty_pct": 0.4360864586315488,
              "ambiguous_qty_pct": 0.4594188376753507,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.4594188376753507,
              "retail_notional_pct": 0.05457879143414691,
              "mixed_notional_pct": 0.047435974389323905,
              "instit_notional_pct": 0.43537026617260133,
              "ambiguous_notional_pct": 0.4626149680039279,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.4626149680039279,
              "run_retail_pct": 0.38,
              "run_mixed_pct": 0.06,
              "run_instit_pct": 0.14,
              "run_unclear_pct": 0.42,
              "avg_trade_size": 2544.7835164835165,
              "avg_run_notional": 4631.505999999999,
              "dominant_bucket": "AMBIGUOUS",
              "dominant_label": "Mixed, mostly unclassified",
              "high_confidence_pct": 0.18,
              "medium_confidence_pct": 0.26,
              "low_confidence_pct": 0.08,
              "na_confidence_pct": 0.48,
              "avg_feature_coverage": 0.8260000000000002,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "LVR",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.14285714285714285,
              "mixed_pct": 0.0,
              "instit_pct": 0.2857142857142857,
              "ambiguous_pct": 0.5714285714285714,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.5714285714285714,
              "retail_qty_pct": 0.0048543689320388345,
              "mixed_qty_pct": 0.0,
              "instit_qty_pct": 0.1941747572815534,
              "ambiguous_qty_pct": 0.8009708737864077,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.8009708737864077,
              "retail_notional_pct": 0.004947613504074505,
              "mixed_notional_pct": 0.0,
              "instit_notional_pct": 0.19324796274738068,
              "ambiguous_notional_pct": 0.8018044237485448,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.8018044237485448,
              "run_retail_pct": 0.16666666666666666,
              "run_mixed_pct": 0.0,
              "run_instit_pct": 0.16666666666666666,
              "run_unclear_pct": 0.6666666666666666,
              "avg_trade_size": 2454.285714285714,
              "avg_run_notional": 2863.3333333333335,
              "dominant_bucket": "AMBIGUOUS",
              "dominant_label": "Unclassified Flow",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.3333333333333333,
              "na_confidence_pct": 0.6666666666666666,
              "avg_feature_coverage": 0.8250000000000002,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "U77",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.5,
              "mixed_pct": 0.0,
              "instit_pct": 0.0,
              "ambiguous_pct": 0.5,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.5,
              "retail_qty_pct": 0.09090909090909091,
              "mixed_qty_pct": 0.0,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": 0.9090909090909091,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.9090909090909091,
              "retail_notional_pct": 0.09090909090909091,
              "mixed_notional_pct": 0.0,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": 0.9090909090909091,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.9090909090909091,
              "run_retail_pct": 0.5,
              "run_mixed_pct": 0.0,
              "run_instit_pct": 0.0,
              "run_unclear_pct": 0.5,
              "avg_trade_size": 1155.0,
              "avg_run_notional": 1155.0,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Mixed, leaning retail-like",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.5,
              "na_confidence_pct": 0.5,
              "avg_feature_coverage": 0.8500000000000001,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            }
          ]
        },
        "1w": {
          "valid": true,
          "currency": "SGD",
          "n_trades": 503,
          "n_runs": 245,
          "n_trade_days": 5,
          "first_trade_date": "2026-03-02",
          "last_trade_date": "2026-03-06",
          "period_days": 5,
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
            "retail_pct": 0.2544731610337972,
            "mixed_pct": 0.14910536779324055,
            "instit_pct": 0.44731610337972166,
            "ambiguous_pct": 0.14910536779324055,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.14910536779324055,
            "retail_qty_pct": 0.06881274011649523,
            "mixed_qty_pct": 0.1623652249349362,
            "instit_qty_pct": 0.6393914983269302,
            "ambiguous_qty_pct": 0.12943053662163836,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.12943053662163836,
            "retail_notional_pct": 0.06813681310257463,
            "mixed_notional_pct": 0.16225073331896084,
            "instit_notional_pct": 0.6411179141691066,
            "ambiguous_notional_pct": 0.12849453940935798,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.12849453940935798
          },
          "run_composition": {
            "retail_pct": 0.4857142857142857,
            "mixed_pct": 0.1469387755102041,
            "instit_pct": 0.22857142857142856,
            "ambiguous_pct": 0.13877551020408163,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.13877551020408163,
            "retail_notional_pct": 0.06813681310257463,
            "mixed_notional_pct": 0.16225073331896084,
            "instit_notional_pct": 0.6411179141691066,
            "unclear_notional_pct": 0.12849453940935798
          },
          "counts": {
            "trades": {
              "retail": 128,
              "mixed": 75,
              "institutional": 225,
              "ambiguous": 75,
              "unobservable": 0,
              "unclear": 75
            },
            "runs": {
              "retail": 119,
              "mixed": 36,
              "institutional": 56,
              "ambiguous": 34,
              "unobservable": 0,
              "unclear": 34
            }
          },
          "confidence": {
            "high": 0.0,
            "medium": 0.32653061224489793,
            "low": 0.3877551020408163,
            "na": 0.2857142857142857
          },
          "confidence_counts": {
            "high": 0,
            "medium": 80,
            "low": 95,
            "na": 70
          },
          "trade_confidence": {
            "high": 0.0,
            "medium": 0.31610337972166996,
            "low": 0.3856858846918489,
            "na": 0.2982107355864811
          },
          "trade_confidence_counts": {
            "high": 0,
            "medium": 159,
            "low": 194,
            "na": 150
          },
          "observability": {
            "avg_feature_coverage": 0.8604081632653059,
            "observable_run_pct": 1.0,
            "ambiguous_run_pct": 0.13877551020408163,
            "unobservable_run_pct": 0.0
          },
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "dominant_share": 0.4857142857142857,
          "dominance_gap": 0.2571428571428571,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "MULTI_FILL_SINGLE_PRICE": 283,
              "SINGLE_FILL": 210,
              "WALK_BOOK": 10
            },
            "d2_information": {
              "NEUTRAL_OR_REVERSING": 361,
              "PERSISTENT_POSITIVE_IMPACT": 113,
              "MOMENTUM_REACTIVE": 28,
              "UNOBSERVABLE": 1
            },
            "d3_urgency": {
              "IMMEDIATE": 245
            },
            "participant_confidence": {
              "LOW": 95,
              "MEDIUM": 80,
              "NA": 70
            }
          },
          "trade_size": {
            "avg": 2937.094433399602,
            "median": 1464.0
          },
          "run_size": {
            "avg": 6030.034693877551,
            "median": 2250.0,
            "avg_length": 1.2530612244897958
          },
          "recent_trades": [
            {
              "trade_id": "BMLL-82",
              "timestamp": "2026-03-06T08:59:30.061400",
              "price": 0.23,
              "size": 5700.0,
              "notional": 1311.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 3476,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-81",
              "timestamp": "2026-03-06T08:57:53.391200",
              "price": 0.225,
              "size": 500.0,
              "notional": 112.5,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 3475,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-80",
              "timestamp": "2026-03-06T08:55:18.807200",
              "price": 0.225,
              "size": 4400.0,
              "notional": 990.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 3474,
              "d1": "SINGLE_FILL",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-79",
              "timestamp": "2026-03-06T08:55:18.686700",
              "price": 0.225,
              "size": 20000.0,
              "notional": 4500.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 3474,
              "d1": "SINGLE_FILL",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-78",
              "timestamp": "2026-03-06T08:55:11.746600",
              "price": 0.225,
              "size": 600.0,
              "notional": 135.0,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 3473,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-77",
              "timestamp": "2026-03-06T08:38:37.856400",
              "price": 0.225,
              "size": 500.0,
              "notional": 112.5,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 3472,
              "d1": "SINGLE_FILL",
              "d2": "MOMENTUM_REACTIVE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-76",
              "timestamp": "2026-03-06T08:28:16.211700",
              "price": 0.225,
              "size": 300.0,
              "notional": 67.5,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 3471,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-75",
              "timestamp": "2026-03-06T08:28:16.211700",
              "price": 0.225,
              "size": 1200.0,
              "notional": 270.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 3471,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-74",
              "timestamp": "2026-03-06T08:06:35.597000",
              "price": 0.225,
              "size": 500.0,
              "notional": 112.5,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 3470,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-73",
              "timestamp": "2026-03-06T08:01:34.814200",
              "price": 0.225,
              "size": 100.0,
              "notional": 22.5,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 3469,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-72",
              "timestamp": "2026-03-06T08:00:25.836400",
              "price": 0.225,
              "size": 300.0,
              "notional": 67.5,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 3468,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-71",
              "timestamp": "2026-03-06T08:00:21.309900",
              "price": 0.225,
              "size": 10000.0,
              "notional": 2250.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 3467,
              "d1": "SINGLE_FILL",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-70",
              "timestamp": "2026-03-06T08:00:00.036200",
              "price": 0.225,
              "size": 100.0,
              "notional": 22.5,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 3466,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-69",
              "timestamp": "2026-03-06T08:00:00.036200",
              "price": 0.225,
              "size": 10000.0,
              "notional": 2250.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 3466,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-68",
              "timestamp": "2026-03-06T08:00:00.036200",
              "price": 0.225,
              "size": 600.0,
              "notional": 135.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 3466,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-67",
              "timestamp": "2026-03-06T08:00:00.035900",
              "price": 0.225,
              "size": 13500.0,
              "notional": 3037.5,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 3466,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-66",
              "timestamp": "2026-03-06T07:58:19.901000",
              "price": 0.225,
              "size": 100.0,
              "notional": 22.5,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 3465,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-65",
              "timestamp": "2026-03-06T07:58:19.901000",
              "price": 0.225,
              "size": 14000.0,
              "notional": 3150.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 3465,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-64",
              "timestamp": "2026-03-06T07:58:02.429300",
              "price": 0.23,
              "size": 200.0,
              "notional": 46.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 3464,
              "d1": "SINGLE_FILL",
              "d2": "MOMENTUM_REACTIVE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-63",
              "timestamp": "2026-03-06T07:58:02.308200",
              "price": 0.225,
              "size": 20000.0,
              "notional": 4500.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 3464,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "MOMENTUM_REACTIVE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-62",
              "timestamp": "2026-03-06T07:58:02.308200",
              "price": 0.225,
              "size": 20000.0,
              "notional": 4500.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 3464,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "MOMENTUM_REACTIVE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-61",
              "timestamp": "2026-03-06T07:58:02.308100",
              "price": 0.225,
              "size": 46000.0,
              "notional": 10350.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 3464,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "MOMENTUM_REACTIVE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-60",
              "timestamp": "2026-03-06T07:54:48.255200",
              "price": 0.225,
              "size": 10000.0,
              "notional": 2250.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 3463,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-59",
              "timestamp": "2026-03-06T07:46:12.668100",
              "price": 0.225,
              "size": 4000.0,
              "notional": 900.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 3462,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-58",
              "timestamp": "2026-03-06T07:29:04.073500",
              "price": 0.225,
              "size": 20000.0,
              "notional": 4500.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 3461,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-57",
              "timestamp": "2026-03-06T07:20:17.215500",
              "price": 0.225,
              "size": 5000.0,
              "notional": 1125.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 3460,
              "d1": "SINGLE_FILL",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-56",
              "timestamp": "2026-03-06T07:20:14.595800",
              "price": 0.225,
              "size": 5000.0,
              "notional": 1125.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 3460,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-55",
              "timestamp": "2026-03-06T07:20:01.453600",
              "price": 0.225,
              "size": 21500.0,
              "notional": 4837.5,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 3459,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-54",
              "timestamp": "2026-03-06T07:20:01.423500",
              "price": 0.225,
              "size": 20000.0,
              "notional": 4500.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 3459,
              "d1": "SINGLE_FILL",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-53",
              "timestamp": "2026-03-06T07:19:57.383600",
              "price": 0.225,
              "size": 18500.0,
              "notional": 4162.5,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 3458,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            }
          ],
          "peer_comparison": [
            {
              "ticker": "TKU",
              "currency": "SGD",
              "is_target": true,
              "retail_pct": 0.2544731610337972,
              "mixed_pct": 0.14910536779324055,
              "instit_pct": 0.44731610337972166,
              "ambiguous_pct": 0.14910536779324055,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.14910536779324055,
              "retail_qty_pct": 0.06881274011649523,
              "mixed_qty_pct": 0.1623652249349362,
              "instit_qty_pct": 0.6393914983269302,
              "ambiguous_qty_pct": 0.12943053662163836,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.12943053662163836,
              "retail_notional_pct": 0.06813681310257463,
              "mixed_notional_pct": 0.16225073331896084,
              "instit_notional_pct": 0.6411179141691066,
              "ambiguous_notional_pct": 0.12849453940935798,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.12849453940935798,
              "run_retail_pct": 0.4857142857142857,
              "run_mixed_pct": 0.1469387755102041,
              "run_instit_pct": 0.22857142857142856,
              "run_unclear_pct": 0.13877551020408163,
              "avg_trade_size": 2937.094433399602,
              "avg_run_notional": 6030.034693877551,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.32653061224489793,
              "low_confidence_pct": 0.3877551020408163,
              "na_confidence_pct": 0.2857142857142857,
              "avg_feature_coverage": 0.8604081632653059,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "LVR",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.1875,
              "mixed_pct": 0.015625,
              "instit_pct": 0.375,
              "ambiguous_pct": 0.34375,
              "unobservable_pct": 0.078125,
              "unclear_pct": 0.421875,
              "retail_qty_pct": 0.04073789392774789,
              "mixed_qty_pct": 0.015372790161414296,
              "instit_qty_pct": 0.6529592621060722,
              "ambiguous_qty_pct": 0.2555726364335127,
              "unobservable_qty_pct": 0.035357417371252885,
              "unclear_qty_pct": 0.29093005380476555,
              "retail_notional_pct": 0.04108609660923329,
              "mixed_notional_pct": 0.014788945708533044,
              "instit_notional_pct": 0.6550032963312724,
              "ambiguous_notional_pct": 0.25389546175364824,
              "unobservable_notional_pct": 0.035226199597313046,
              "unclear_notional_pct": 0.2891216613509613,
              "run_retail_pct": 0.3,
              "run_mixed_pct": 0.025,
              "run_instit_pct": 0.2,
              "run_unclear_pct": 0.475,
              "avg_trade_size": 3507.6875,
              "avg_run_notional": 5612.3,
              "dominant_bucket": "AMBIGUOUS",
              "dominant_label": "Unclassified Flow",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.5,
              "na_confidence_pct": 0.5,
              "avg_feature_coverage": 0.8150000000000001,
              "observable_run_pct": 0.95,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "5DD",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.22278481012658227,
              "mixed_pct": 0.06582278481012659,
              "instit_pct": 0.39367088607594936,
              "ambiguous_pct": 0.30759493670886073,
              "unobservable_pct": 0.010126582278481013,
              "unclear_pct": 0.31772151898734174,
              "retail_qty_pct": 0.06667243917222271,
              "mixed_qty_pct": 0.040696164170058016,
              "instit_qty_pct": 0.5386613559615551,
              "ambiguous_qty_pct": 0.33466100961122175,
              "unobservable_qty_pct": 0.01930903108494242,
              "unclear_qty_pct": 0.35397004069616417,
              "retail_notional_pct": 0.06676370561208568,
              "mixed_notional_pct": 0.04074587869220659,
              "instit_notional_pct": 0.5375442768662343,
              "ambiguous_notional_pct": 0.3359506513682263,
              "unobservable_notional_pct": 0.018995487461247063,
              "unclear_notional_pct": 0.3549461388294734,
              "run_retail_pct": 0.42748091603053434,
              "run_mixed_pct": 0.0737913486005089,
              "run_instit_pct": 0.19592875318066158,
              "run_unclear_pct": 0.30279898218829515,
              "avg_trade_size": 2778.474683544304,
              "avg_run_notional": 5585.229007633588,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.3256997455470738,
              "low_confidence_pct": 0.29770992366412213,
              "na_confidence_pct": 0.37659033078880405,
              "avg_feature_coverage": 0.8505089058524173,
              "observable_run_pct": 0.9949109414758269,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "ITS",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.24631043256997456,
              "mixed_pct": 0.166412213740458,
              "instit_pct": 0.35928753180661577,
              "ambiguous_pct": 0.22798982188295167,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.22798982188295167,
              "retail_qty_pct": 0.10361710209766598,
              "mixed_qty_pct": 0.1366437344363314,
              "instit_qty_pct": 0.5257882074874436,
              "ambiguous_qty_pct": 0.23395095597855906,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.23395095597855906,
              "retail_notional_pct": 0.10323373522179217,
              "mixed_notional_pct": 0.13647473404102728,
              "instit_notional_pct": 0.5257723835653745,
              "ambiguous_notional_pct": 0.23451914717180608,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.23451914717180608,
              "run_retail_pct": 0.5425,
              "run_mixed_pct": 0.15375,
              "run_instit_pct": 0.15125,
              "run_unclear_pct": 0.1525,
              "avg_trade_size": 2660.9740458015267,
              "avg_run_notional": 6536.0175,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.14125,
              "medium_confidence_pct": 0.3325,
              "low_confidence_pct": 0.22,
              "na_confidence_pct": 0.30625,
              "avg_feature_coverage": 0.8633124999999998,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "U77",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.5,
              "mixed_pct": 0.17647058823529413,
              "instit_pct": 0.13529411764705881,
              "ambiguous_pct": 0.18823529411764706,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.18823529411764706,
              "retail_qty_pct": 0.07993966817496229,
              "mixed_qty_pct": 0.07171260112436582,
              "instit_qty_pct": 0.4308240778829014,
              "ambiguous_qty_pct": 0.4175236528177705,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.4175236528177705,
              "retail_notional_pct": 0.07949057652036412,
              "mixed_notional_pct": 0.0719721750107664,
              "instit_notional_pct": 0.430958587973845,
              "ambiguous_notional_pct": 0.41757866049502446,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.41757866049502446,
              "run_retail_pct": 0.6029411764705882,
              "run_mixed_pct": 0.17647058823529413,
              "run_instit_pct": 0.058823529411764705,
              "run_unclear_pct": 0.16176470588235295,
              "avg_trade_size": 894.6676470588235,
              "avg_run_notional": 1118.3345588235295,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.22794117647058823,
              "medium_confidence_pct": 0.34558823529411764,
              "low_confidence_pct": 0.08823529411764706,
              "na_confidence_pct": 0.3382352941176471,
              "avg_feature_coverage": 0.8466911764705881,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "QS9",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.2020057306590258,
              "mixed_pct": 0.09025787965616046,
              "instit_pct": 0.3166189111747851,
              "ambiguous_pct": 0.39111747851002865,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.39111747851002865,
              "retail_qty_pct": 0.07439473017746226,
              "mixed_qty_pct": 0.06344987480777314,
              "instit_qty_pct": 0.40769586252091977,
              "ambiguous_qty_pct": 0.4544595324938448,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.4544595324938448,
              "retail_notional_pct": 0.07499617645226186,
              "mixed_notional_pct": 0.06451625694066508,
              "instit_notional_pct": 0.40736835775683455,
              "ambiguous_notional_pct": 0.4531192088502385,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.4531192088502385,
              "run_retail_pct": 0.3605015673981191,
              "run_mixed_pct": 0.08150470219435736,
              "run_instit_pct": 0.16614420062695925,
              "run_unclear_pct": 0.39184952978056425,
              "avg_trade_size": 3287.9498567335245,
              "avg_run_notional": 7194.322884012539,
              "dominant_bucket": "AMBIGUOUS",
              "dominant_label": "Mixed, mostly unclassified",
              "high_confidence_pct": 0.02821316614420063,
              "medium_confidence_pct": 0.30407523510971785,
              "low_confidence_pct": 0.19435736677115986,
              "na_confidence_pct": 0.47335423197492166,
              "avg_feature_coverage": 0.8311912225705328,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "NXR",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.07692307692307693,
              "mixed_pct": 0.15384615384615385,
              "instit_pct": 0.23076923076923078,
              "ambiguous_pct": 0.38461538461538464,
              "unobservable_pct": 0.15384615384615385,
              "unclear_pct": 0.5384615384615385,
              "retail_qty_pct": 0.0360082304526749,
              "mixed_qty_pct": 0.102880658436214,
              "instit_qty_pct": 0.32407407407407407,
              "ambiguous_qty_pct": 0.43415637860082307,
              "unobservable_qty_pct": 0.102880658436214,
              "unclear_qty_pct": 0.5370370370370371,
              "retail_notional_pct": 0.03593381245083268,
              "mixed_notional_pct": 0.10240136535153802,
              "instit_notional_pct": 0.3234043120574941,
              "ambiguous_notional_pct": 0.4315657542100561,
              "unobservable_notional_pct": 0.10669475593007907,
              "unclear_notional_pct": 0.5382605101401352,
              "run_retail_pct": 0.1111111111111111,
              "run_mixed_pct": 0.1111111111111111,
              "run_instit_pct": 0.2222222222222222,
              "run_unclear_pct": 0.5555555555555556,
              "avg_trade_size": 2884.576923076923,
              "avg_run_notional": 4166.611111111111,
              "dominant_bucket": "AMBIGUOUS",
              "dominant_label": "Unclassified Flow",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.3333333333333333,
              "na_confidence_pct": 0.6666666666666666,
              "avg_feature_coverage": 0.7888888888888889,
              "observable_run_pct": 0.8888888888888888,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "532",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.0,
              "mixed_pct": 0.0,
              "instit_pct": 0.0,
              "ambiguous_pct": 0.0,
              "unobservable_pct": 1.0,
              "unclear_pct": 1.0,
              "retail_qty_pct": 0.0,
              "mixed_qty_pct": 0.0,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": 0.0,
              "unobservable_qty_pct": 1.0,
              "unclear_qty_pct": 1.0,
              "retail_notional_pct": 0.0,
              "mixed_notional_pct": 0.0,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": 0.0,
              "unobservable_notional_pct": 1.0,
              "unclear_notional_pct": 1.0,
              "run_retail_pct": 0.0,
              "run_mixed_pct": 0.0,
              "run_instit_pct": 0.0,
              "run_unclear_pct": 1.0,
              "avg_trade_size": 300.0,
              "avg_run_notional": 300.0,
              "dominant_bucket": "UNOBSERVABLE",
              "dominant_label": "Not Observable",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.0,
              "na_confidence_pct": 1.0,
              "avg_feature_coverage": 0.55,
              "observable_run_pct": 0.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            }
          ]
        },
        "2w": {
          "valid": true,
          "currency": "SGD",
          "n_trades": 989,
          "n_runs": 494,
          "n_trade_days": 10,
          "first_trade_date": "2026-02-23",
          "last_trade_date": "2026-03-06",
          "period_days": 10,
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
            "retail_pct": 0.282103134479272,
            "mixed_pct": 0.15672396359959556,
            "instit_pct": 0.39332659251769464,
            "ambiguous_pct": 0.1678463094034378,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.1678463094034378,
            "retail_qty_pct": 0.07210398133016234,
            "mixed_qty_pct": 0.17331281516479183,
            "instit_qty_pct": 0.545285166508753,
            "ambiguous_qty_pct": 0.20929803699629274,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.20929803699629274,
            "retail_notional_pct": 0.07196548615501956,
            "mixed_notional_pct": 0.17395977392600345,
            "instit_notional_pct": 0.5427961065672859,
            "ambiguous_notional_pct": 0.21127863335169103,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.21127863335169103
          },
          "run_composition": {
            "retail_pct": 0.5303643724696356,
            "mixed_pct": 0.13765182186234817,
            "instit_pct": 0.1862348178137652,
            "ambiguous_pct": 0.145748987854251,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.145748987854251,
            "retail_notional_pct": 0.07196548615501956,
            "mixed_notional_pct": 0.17395977392600345,
            "instit_notional_pct": 0.5427961065672859,
            "unclear_notional_pct": 0.21127863335169103
          },
          "counts": {
            "trades": {
              "retail": 279,
              "mixed": 155,
              "institutional": 389,
              "ambiguous": 166,
              "unobservable": 0,
              "unclear": 166
            },
            "runs": {
              "retail": 262,
              "mixed": 68,
              "institutional": 92,
              "ambiguous": 72,
              "unobservable": 0,
              "unclear": 72
            }
          },
          "confidence": {
            "high": 0.058704453441295545,
            "medium": 0.3582995951417004,
            "low": 0.29959514170040485,
            "na": 0.2834008097165992
          },
          "confidence_counts": {
            "high": 29,
            "medium": 177,
            "low": 148,
            "na": 140
          },
          "trade_confidence": {
            "high": 0.03538928210313448,
            "medium": 0.3579373104145602,
            "low": 0.282103134479272,
            "na": 0.32457027300303337
          },
          "trade_confidence_counts": {
            "high": 35,
            "medium": 354,
            "low": 279,
            "na": 321
          },
          "observability": {
            "avg_feature_coverage": 0.855161943319838,
            "observable_run_pct": 1.0,
            "ambiguous_run_pct": 0.145748987854251,
            "unobservable_run_pct": 0.0
          },
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "dominant_share": 0.5303643724696356,
          "dominance_gap": 0.3441295546558705,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "MULTI_FILL_SINGLE_PRICE": 554,
              "SINGLE_FILL": 425,
              "WALK_BOOK": 10
            },
            "d2_information": {
              "NEUTRAL_OR_REVERSING": 755,
              "PERSISTENT_POSITIVE_IMPACT": 174,
              "MOMENTUM_REACTIVE": 58,
              "SHORT_HORIZON_POSITIVE_IMPACT": 1,
              "UNOBSERVABLE": 1
            },
            "d3_urgency": {
              "IMMEDIATE": 492,
              "ADAPTIVE": 2
            },
            "participant_confidence": {
              "MEDIUM": 177,
              "LOW": 148,
              "NA": 140,
              "HIGH": 29
            }
          },
          "trade_size": {
            "avg": 3868.3791708796766,
            "median": 1980.0
          },
          "run_size": {
            "avg": 7744.5890688259105,
            "median": 2300.0,
            "avg_length": 1.1983805668016194
          },
          "recent_trades": [
            {
              "trade_id": "BMLL-82",
              "timestamp": "2026-03-06T08:59:30.061400",
              "price": 0.23,
              "size": 5700.0,
              "notional": 1311.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 3476,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-81",
              "timestamp": "2026-03-06T08:57:53.391200",
              "price": 0.225,
              "size": 500.0,
              "notional": 112.5,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 3475,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-80",
              "timestamp": "2026-03-06T08:55:18.807200",
              "price": 0.225,
              "size": 4400.0,
              "notional": 990.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 3474,
              "d1": "SINGLE_FILL",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-79",
              "timestamp": "2026-03-06T08:55:18.686700",
              "price": 0.225,
              "size": 20000.0,
              "notional": 4500.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 3474,
              "d1": "SINGLE_FILL",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-78",
              "timestamp": "2026-03-06T08:55:11.746600",
              "price": 0.225,
              "size": 600.0,
              "notional": 135.0,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 3473,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-77",
              "timestamp": "2026-03-06T08:38:37.856400",
              "price": 0.225,
              "size": 500.0,
              "notional": 112.5,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 3472,
              "d1": "SINGLE_FILL",
              "d2": "MOMENTUM_REACTIVE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-76",
              "timestamp": "2026-03-06T08:28:16.211700",
              "price": 0.225,
              "size": 300.0,
              "notional": 67.5,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 3471,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-75",
              "timestamp": "2026-03-06T08:28:16.211700",
              "price": 0.225,
              "size": 1200.0,
              "notional": 270.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 3471,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-74",
              "timestamp": "2026-03-06T08:06:35.597000",
              "price": 0.225,
              "size": 500.0,
              "notional": 112.5,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 3470,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-73",
              "timestamp": "2026-03-06T08:01:34.814200",
              "price": 0.225,
              "size": 100.0,
              "notional": 22.5,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 3469,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-72",
              "timestamp": "2026-03-06T08:00:25.836400",
              "price": 0.225,
              "size": 300.0,
              "notional": 67.5,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 3468,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-71",
              "timestamp": "2026-03-06T08:00:21.309900",
              "price": 0.225,
              "size": 10000.0,
              "notional": 2250.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 3467,
              "d1": "SINGLE_FILL",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-70",
              "timestamp": "2026-03-06T08:00:00.036200",
              "price": 0.225,
              "size": 100.0,
              "notional": 22.5,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 3466,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-69",
              "timestamp": "2026-03-06T08:00:00.036200",
              "price": 0.225,
              "size": 10000.0,
              "notional": 2250.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 3466,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-68",
              "timestamp": "2026-03-06T08:00:00.036200",
              "price": 0.225,
              "size": 600.0,
              "notional": 135.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 3466,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-67",
              "timestamp": "2026-03-06T08:00:00.035900",
              "price": 0.225,
              "size": 13500.0,
              "notional": 3037.5,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 3466,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-66",
              "timestamp": "2026-03-06T07:58:19.901000",
              "price": 0.225,
              "size": 100.0,
              "notional": 22.5,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 3465,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-65",
              "timestamp": "2026-03-06T07:58:19.901000",
              "price": 0.225,
              "size": 14000.0,
              "notional": 3150.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 3465,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-64",
              "timestamp": "2026-03-06T07:58:02.429300",
              "price": 0.23,
              "size": 200.0,
              "notional": 46.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 3464,
              "d1": "SINGLE_FILL",
              "d2": "MOMENTUM_REACTIVE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-63",
              "timestamp": "2026-03-06T07:58:02.308200",
              "price": 0.225,
              "size": 20000.0,
              "notional": 4500.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 3464,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "MOMENTUM_REACTIVE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-62",
              "timestamp": "2026-03-06T07:58:02.308200",
              "price": 0.225,
              "size": 20000.0,
              "notional": 4500.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 3464,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "MOMENTUM_REACTIVE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-61",
              "timestamp": "2026-03-06T07:58:02.308100",
              "price": 0.225,
              "size": 46000.0,
              "notional": 10350.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 3464,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "MOMENTUM_REACTIVE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-60",
              "timestamp": "2026-03-06T07:54:48.255200",
              "price": 0.225,
              "size": 10000.0,
              "notional": 2250.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 3463,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-59",
              "timestamp": "2026-03-06T07:46:12.668100",
              "price": 0.225,
              "size": 4000.0,
              "notional": 900.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 3462,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-58",
              "timestamp": "2026-03-06T07:29:04.073500",
              "price": 0.225,
              "size": 20000.0,
              "notional": 4500.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 3461,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-57",
              "timestamp": "2026-03-06T07:20:17.215500",
              "price": 0.225,
              "size": 5000.0,
              "notional": 1125.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 3460,
              "d1": "SINGLE_FILL",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-56",
              "timestamp": "2026-03-06T07:20:14.595800",
              "price": 0.225,
              "size": 5000.0,
              "notional": 1125.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 3460,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-55",
              "timestamp": "2026-03-06T07:20:01.453600",
              "price": 0.225,
              "size": 21500.0,
              "notional": 4837.5,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 3459,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-54",
              "timestamp": "2026-03-06T07:20:01.423500",
              "price": 0.225,
              "size": 20000.0,
              "notional": 4500.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 3459,
              "d1": "SINGLE_FILL",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-53",
              "timestamp": "2026-03-06T07:19:57.383600",
              "price": 0.225,
              "size": 18500.0,
              "notional": 4162.5,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 3458,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            }
          ],
          "peer_comparison": [
            {
              "ticker": "TKU",
              "currency": "SGD",
              "is_target": true,
              "retail_pct": 0.282103134479272,
              "mixed_pct": 0.15672396359959556,
              "instit_pct": 0.39332659251769464,
              "ambiguous_pct": 0.1678463094034378,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.1678463094034378,
              "retail_qty_pct": 0.07210398133016234,
              "mixed_qty_pct": 0.17331281516479183,
              "instit_qty_pct": 0.545285166508753,
              "ambiguous_qty_pct": 0.20929803699629274,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.20929803699629274,
              "retail_notional_pct": 0.07196548615501956,
              "mixed_notional_pct": 0.17395977392600345,
              "instit_notional_pct": 0.5427961065672859,
              "ambiguous_notional_pct": 0.21127863335169103,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.21127863335169103,
              "run_retail_pct": 0.5303643724696356,
              "run_mixed_pct": 0.13765182186234817,
              "run_instit_pct": 0.1862348178137652,
              "run_unclear_pct": 0.145748987854251,
              "avg_trade_size": 3868.3791708796766,
              "avg_run_notional": 7744.5890688259105,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.058704453441295545,
              "medium_confidence_pct": 0.3582995951417004,
              "low_confidence_pct": 0.29959514170040485,
              "na_confidence_pct": 0.2834008097165992,
              "avg_feature_coverage": 0.855161943319838,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "LVR",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.17164179104477612,
              "mixed_pct": 0.014925373134328358,
              "instit_pct": 0.3656716417910448,
              "ambiguous_pct": 0.41044776119402987,
              "unobservable_pct": 0.03731343283582089,
              "unclear_pct": 0.44776119402985076,
              "retail_qty_pct": 0.05548216644649934,
              "mixed_qty_pct": 0.007737308926212493,
              "instit_qty_pct": 0.5472730703906398,
              "ambiguous_qty_pct": 0.372145687865635,
              "unobservable_qty_pct": 0.017361766371013398,
              "unclear_qty_pct": 0.3895074542366484,
              "retail_notional_pct": 0.05632230609670038,
              "mixed_notional_pct": 0.007294228342920685,
              "instit_notional_pct": 0.5457626756196138,
              "ambiguous_notional_pct": 0.37370998438936764,
              "unobservable_notional_pct": 0.016910805551397474,
              "unclear_notional_pct": 0.3906207899407651,
              "run_retail_pct": 0.27710843373493976,
              "run_mixed_pct": 0.024096385542168676,
              "run_instit_pct": 0.20481927710843373,
              "run_unclear_pct": 0.49397590361445787,
              "avg_trade_size": 3489.776119402985,
              "avg_run_notional": 5634.096385542169,
              "dominant_bucket": "AMBIGUOUS",
              "dominant_label": "Unclassified Flow",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.4819277108433735,
              "na_confidence_pct": 0.5180722891566265,
              "avg_feature_coverage": 0.8168674698795179,
              "observable_run_pct": 0.9759036144578314,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "QS9",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.19861202908129544,
              "mixed_pct": 0.09616655651024454,
              "instit_pct": 0.4041639127561137,
              "ambiguous_pct": 0.30039656311962987,
              "unobservable_pct": 0.0006609385327164573,
              "unclear_pct": 0.30105750165234635,
              "retail_qty_pct": 0.05847906771930928,
              "mixed_qty_pct": 0.09522379140062277,
              "instit_qty_pct": 0.5081716101028528,
              "ambiguous_qty_pct": 0.33812395810398516,
              "unobservable_qty_pct": 1.5726732299562796e-06,
              "unclear_qty_pct": 0.33812553077721513,
              "retail_notional_pct": 0.05714590278964268,
              "mixed_notional_pct": 0.09422500610801376,
              "instit_notional_pct": 0.508676144801778,
              "ambiguous_notional_pct": 0.33995133859005794,
              "unobservable_notional_pct": 1.6077105075688696e-06,
              "unclear_notional_pct": 0.3399529463005655,
              "run_retail_pct": 0.41694078947368424,
              "run_mixed_pct": 0.10526315789473684,
              "run_instit_pct": 0.18338815789473684,
              "run_unclear_pct": 0.29440789473684215,
              "avg_trade_size": 2569.4089887640453,
              "avg_run_notional": 6393.940460526315,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.009868421052631578,
              "medium_confidence_pct": 0.3207236842105263,
              "low_confidence_pct": 0.26973684210526316,
              "na_confidence_pct": 0.3996710526315789,
              "avg_feature_coverage": 0.8467927631578945,
              "observable_run_pct": 0.9991776315789473,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "ITS",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.2694815780893381,
              "mixed_pct": 0.14802738832735574,
              "instit_pct": 0.34235409194652755,
              "ambiguous_pct": 0.24013694163677862,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.24013694163677862,
              "retail_qty_pct": 0.08894291862218533,
              "mixed_qty_pct": 0.12446840954914352,
              "instit_qty_pct": 0.49956371461005405,
              "ambiguous_qty_pct": 0.2870249572186171,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.2870249572186171,
              "retail_notional_pct": 0.0890577624863218,
              "mixed_notional_pct": 0.12541807014940864,
              "instit_notional_pct": 0.49961767886795594,
              "ambiguous_notional_pct": 0.2859064884963136,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.2859064884963136,
              "run_retail_pct": 0.5720355349555813,
              "run_mixed_pct": 0.13750482811896486,
              "run_instit_pct": 0.1328698339127076,
              "run_unclear_pct": 0.15758980301274622,
              "avg_trade_size": 4041.838849038148,
              "avg_run_notional": 9576.145036693704,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.11317110853611433,
              "medium_confidence_pct": 0.3912707609115489,
              "low_confidence_pct": 0.20046349942062572,
              "na_confidence_pct": 0.2950946311317111,
              "avg_feature_coverage": 0.8612398609501737,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "5DD",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.20635838150289018,
              "mixed_pct": 0.08497109826589595,
              "instit_pct": 0.34104046242774566,
              "ambiguous_pct": 0.3491329479768786,
              "unobservable_pct": 0.018497109826589597,
              "unclear_pct": 0.3676300578034682,
              "retail_qty_pct": 0.05688990182328191,
              "mixed_qty_pct": 0.06311360448807854,
              "instit_qty_pct": 0.49795465170640485,
              "ambiguous_qty_pct": 0.35571528751753156,
              "unobservable_qty_pct": 0.026326554464703132,
              "unclear_qty_pct": 0.3820418419822347,
              "retail_notional_pct": 0.05704430660774542,
              "mixed_notional_pct": 0.0634360102038405,
              "instit_notional_pct": 0.4965053338822479,
              "ambiguous_notional_pct": 0.3565792321249336,
              "unobservable_notional_pct": 0.026435117181232596,
              "unclear_notional_pct": 0.3830143493061662,
              "run_retail_pct": 0.4188679245283019,
              "run_mixed_pct": 0.08427672955974842,
              "run_instit_pct": 0.16226415094339622,
              "run_unclear_pct": 0.33459119496855344,
              "avg_trade_size": 3717.969942196532,
              "avg_run_notional": 8090.676729559748,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Mixed, leaning retail-like",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.3371069182389937,
              "low_confidence_pct": 0.2440251572327044,
              "na_confidence_pct": 0.4188679245283019,
              "avg_feature_coverage": 0.8432704402515722,
              "observable_run_pct": 0.9937106918238994,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "U77",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.47802197802197804,
              "mixed_pct": 0.18681318681318682,
              "instit_pct": 0.14285714285714285,
              "ambiguous_pct": 0.19230769230769232,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.19230769230769232,
              "retail_qty_pct": 0.07446146183538788,
              "mixed_qty_pct": 0.07757439920308803,
              "instit_qty_pct": 0.42995890922674634,
              "ambiguous_qty_pct": 0.4180052297347777,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.4180052297347777,
              "retail_notional_pct": 0.0738004528947822,
              "mixed_notional_pct": 0.0780173669101521,
              "instit_notional_pct": 0.42990829177835493,
              "ambiguous_notional_pct": 0.41827388841671076,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.41827388841671076,
              "run_retail_pct": 0.5753424657534246,
              "run_mixed_pct": 0.18493150684931506,
              "run_instit_pct": 0.0684931506849315,
              "run_unclear_pct": 0.17123287671232876,
              "avg_trade_size": 924.4560439560439,
              "avg_run_notional": 1152.4041095890411,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.21232876712328766,
              "medium_confidence_pct": 0.3219178082191781,
              "low_confidence_pct": 0.1095890410958904,
              "na_confidence_pct": 0.3561643835616438,
              "avg_feature_coverage": 0.845890410958904,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "NXR",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.12,
              "mixed_pct": 0.16,
              "instit_pct": 0.36,
              "ambiguous_pct": 0.24,
              "unobservable_pct": 0.12,
              "unclear_pct": 0.36,
              "retail_qty_pct": 0.01749049429657795,
              "mixed_qty_pct": 0.016138572032108153,
              "instit_qty_pct": 0.06886354034643008,
              "ambiguous_qty_pct": 0.04410646387832699,
              "unobservable_qty_pct": 0.8534009294465569,
              "unclear_qty_pct": 0.8975073933248838,
              "retail_notional_pct": 0.017428873144706782,
              "mixed_notional_pct": 0.01584751139417216,
              "instit_notional_pct": 0.06825064107113162,
              "ambiguous_notional_pct": 0.04265016316729918,
              "unobservable_notional_pct": 0.8558228112226902,
              "unclear_notional_pct": 0.8984729743899894,
              "run_retail_pct": 0.15789473684210525,
              "run_mixed_pct": 0.15789473684210525,
              "run_instit_pct": 0.3157894736842105,
              "run_unclear_pct": 0.3684210526315789,
              "avg_trade_size": 18882.46,
              "avg_run_notional": 24845.342105263157,
              "dominant_bucket": "INSTITUTIONAL",
              "dominant_label": "Mixed, leaning institution-like",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.47368421052631576,
              "na_confidence_pct": 0.5263157894736842,
              "avg_feature_coverage": 0.781578947368421,
              "observable_run_pct": 0.8947368421052632,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "532",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.0,
              "mixed_pct": 0.0,
              "instit_pct": 0.0,
              "ambiguous_pct": 0.0,
              "unobservable_pct": 1.0,
              "unclear_pct": 1.0,
              "retail_qty_pct": 0.0,
              "mixed_qty_pct": 0.0,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": 0.0,
              "unobservable_qty_pct": 1.0,
              "unclear_qty_pct": 1.0,
              "retail_notional_pct": 0.0,
              "mixed_notional_pct": 0.0,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": 0.0,
              "unobservable_notional_pct": 1.0,
              "unclear_notional_pct": 1.0,
              "run_retail_pct": 0.0,
              "run_mixed_pct": 0.0,
              "run_instit_pct": 0.0,
              "run_unclear_pct": 1.0,
              "avg_trade_size": 300.0,
              "avg_run_notional": 300.0,
              "dominant_bucket": "UNOBSERVABLE",
              "dominant_label": "Not Observable",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.0,
              "na_confidence_pct": 1.0,
              "avg_feature_coverage": 0.55,
              "observable_run_pct": 0.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "KUX",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.5,
              "mixed_pct": 0.5,
              "instit_pct": 0.0,
              "ambiguous_pct": 0.0,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.0,
              "retail_qty_pct": 0.16666666666666666,
              "mixed_qty_pct": 0.8333333333333334,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": 0.0,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.0,
              "retail_notional_pct": 0.20895522388059704,
              "mixed_notional_pct": 0.7910447761194029,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": 0.0,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.0,
              "run_retail_pct": 0.5,
              "run_mixed_pct": 0.5,
              "run_instit_pct": 0.0,
              "run_unclear_pct": 0.0,
              "avg_trade_size": 16.75,
              "avg_run_notional": 16.75,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Mixed, leaning retail-like",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.5,
              "na_confidence_pct": 0.5,
              "avg_feature_coverage": 0.8500000000000001,
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
          "n_trades": 2970,
          "n_runs": 1387,
          "n_trade_days": 21,
          "first_trade_date": "2026-02-04",
          "last_trade_date": "2026-03-06",
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
            "retail_pct": 0.2713804713804714,
            "mixed_pct": 0.16296296296296298,
            "instit_pct": 0.37676767676767675,
            "ambiguous_pct": 0.18888888888888888,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.18888888888888888,
            "retail_qty_pct": 0.07968020916200286,
            "mixed_qty_pct": 0.17336813163807901,
            "instit_qty_pct": 0.5044405055988984,
            "ambiguous_qty_pct": 0.24251115360101977,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.24251115360101977,
            "retail_notional_pct": 0.07942217851737726,
            "mixed_notional_pct": 0.17453211120259365,
            "instit_notional_pct": 0.5046588616337074,
            "ambiguous_notional_pct": 0.2413868486463216,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.2413868486463216
          },
          "run_composition": {
            "retail_pct": 0.5493871665465032,
            "mixed_pct": 0.14059120403749098,
            "instit_pct": 0.15428983417447728,
            "ambiguous_pct": 0.15573179524152847,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.15573179524152847,
            "retail_notional_pct": 0.07942217851737726,
            "mixed_notional_pct": 0.17453211120259365,
            "instit_notional_pct": 0.5046588616337074,
            "unclear_notional_pct": 0.2413868486463216
          },
          "counts": {
            "trades": {
              "retail": 806,
              "mixed": 484,
              "institutional": 1119,
              "ambiguous": 561,
              "unobservable": 0,
              "unclear": 561
            },
            "runs": {
              "retail": 762,
              "mixed": 195,
              "institutional": 214,
              "ambiguous": 216,
              "unobservable": 0,
              "unclear": 216
            }
          },
          "confidence": {
            "high": 0.03460706560922855,
            "medium": 0.40591204037490985,
            "low": 0.2631578947368421,
            "na": 0.29632299927901945
          },
          "confidence_counts": {
            "high": 48,
            "medium": 563,
            "low": 365,
            "na": 411
          },
          "trade_confidence": {
            "high": 0.018855218855218854,
            "medium": 0.3734006734006734,
            "low": 0.2558922558922559,
            "na": 0.35185185185185186
          },
          "trade_confidence_counts": {
            "high": 56,
            "medium": 1109,
            "low": 760,
            "na": 1045
          },
          "observability": {
            "avg_feature_coverage": 0.8514059120403749,
            "observable_run_pct": 1.0,
            "ambiguous_run_pct": 0.15573179524152847,
            "unobservable_run_pct": 0.0
          },
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "dominant_share": 0.5493871665465032,
          "dominance_gap": 0.39365537130497474,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "MULTI_FILL_SINGLE_PRICE": 1717,
              "SINGLE_FILL": 1232,
              "WALK_BOOK": 21
            },
            "d2_information": {
              "NEUTRAL_OR_REVERSING": 2285,
              "PERSISTENT_POSITIVE_IMPACT": 434,
              "MOMENTUM_REACTIVE": 242,
              "SHORT_HORIZON_POSITIVE_IMPACT": 6,
              "UNOBSERVABLE": 3
            },
            "d3_urgency": {
              "IMMEDIATE": 1379,
              "ADAPTIVE": 8
            },
            "participant_confidence": {
              "MEDIUM": 563,
              "NA": 411,
              "LOW": 365,
              "HIGH": 48
            }
          },
          "trade_size": {
            "avg": 3459.2488215488215,
            "median": 1224.5
          },
          "run_size": {
            "avg": 7407.3316510454215,
            "median": 1856.5,
            "avg_length": 1.215573179524153
          },
          "recent_trades": [
            {
              "trade_id": "BMLL-82",
              "timestamp": "2026-03-06T08:59:30.061400",
              "price": 0.23,
              "size": 5700.0,
              "notional": 1311.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 3476,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-81",
              "timestamp": "2026-03-06T08:57:53.391200",
              "price": 0.225,
              "size": 500.0,
              "notional": 112.5,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 3475,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-80",
              "timestamp": "2026-03-06T08:55:18.807200",
              "price": 0.225,
              "size": 4400.0,
              "notional": 990.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 3474,
              "d1": "SINGLE_FILL",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-79",
              "timestamp": "2026-03-06T08:55:18.686700",
              "price": 0.225,
              "size": 20000.0,
              "notional": 4500.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 3474,
              "d1": "SINGLE_FILL",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-78",
              "timestamp": "2026-03-06T08:55:11.746600",
              "price": 0.225,
              "size": 600.0,
              "notional": 135.0,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 3473,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-77",
              "timestamp": "2026-03-06T08:38:37.856400",
              "price": 0.225,
              "size": 500.0,
              "notional": 112.5,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 3472,
              "d1": "SINGLE_FILL",
              "d2": "MOMENTUM_REACTIVE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-76",
              "timestamp": "2026-03-06T08:28:16.211700",
              "price": 0.225,
              "size": 300.0,
              "notional": 67.5,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 3471,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-75",
              "timestamp": "2026-03-06T08:28:16.211700",
              "price": 0.225,
              "size": 1200.0,
              "notional": 270.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 3471,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-74",
              "timestamp": "2026-03-06T08:06:35.597000",
              "price": 0.225,
              "size": 500.0,
              "notional": 112.5,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 3470,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-73",
              "timestamp": "2026-03-06T08:01:34.814200",
              "price": 0.225,
              "size": 100.0,
              "notional": 22.5,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 3469,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-72",
              "timestamp": "2026-03-06T08:00:25.836400",
              "price": 0.225,
              "size": 300.0,
              "notional": 67.5,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 3468,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-71",
              "timestamp": "2026-03-06T08:00:21.309900",
              "price": 0.225,
              "size": 10000.0,
              "notional": 2250.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 3467,
              "d1": "SINGLE_FILL",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-70",
              "timestamp": "2026-03-06T08:00:00.036200",
              "price": 0.225,
              "size": 100.0,
              "notional": 22.5,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 3466,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-69",
              "timestamp": "2026-03-06T08:00:00.036200",
              "price": 0.225,
              "size": 10000.0,
              "notional": 2250.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 3466,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-68",
              "timestamp": "2026-03-06T08:00:00.036200",
              "price": 0.225,
              "size": 600.0,
              "notional": 135.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 3466,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-67",
              "timestamp": "2026-03-06T08:00:00.035900",
              "price": 0.225,
              "size": 13500.0,
              "notional": 3037.5,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 3466,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-66",
              "timestamp": "2026-03-06T07:58:19.901000",
              "price": 0.225,
              "size": 100.0,
              "notional": 22.5,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 3465,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-65",
              "timestamp": "2026-03-06T07:58:19.901000",
              "price": 0.225,
              "size": 14000.0,
              "notional": 3150.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 3465,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-64",
              "timestamp": "2026-03-06T07:58:02.429300",
              "price": 0.23,
              "size": 200.0,
              "notional": 46.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 3464,
              "d1": "SINGLE_FILL",
              "d2": "MOMENTUM_REACTIVE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-63",
              "timestamp": "2026-03-06T07:58:02.308200",
              "price": 0.225,
              "size": 20000.0,
              "notional": 4500.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 3464,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "MOMENTUM_REACTIVE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-62",
              "timestamp": "2026-03-06T07:58:02.308200",
              "price": 0.225,
              "size": 20000.0,
              "notional": 4500.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 3464,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "MOMENTUM_REACTIVE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-61",
              "timestamp": "2026-03-06T07:58:02.308100",
              "price": 0.225,
              "size": 46000.0,
              "notional": 10350.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 3464,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "MOMENTUM_REACTIVE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-60",
              "timestamp": "2026-03-06T07:54:48.255200",
              "price": 0.225,
              "size": 10000.0,
              "notional": 2250.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 3463,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-59",
              "timestamp": "2026-03-06T07:46:12.668100",
              "price": 0.225,
              "size": 4000.0,
              "notional": 900.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 3462,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-58",
              "timestamp": "2026-03-06T07:29:04.073500",
              "price": 0.225,
              "size": 20000.0,
              "notional": 4500.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 3461,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-57",
              "timestamp": "2026-03-06T07:20:17.215500",
              "price": 0.225,
              "size": 5000.0,
              "notional": 1125.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 3460,
              "d1": "SINGLE_FILL",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-56",
              "timestamp": "2026-03-06T07:20:14.595800",
              "price": 0.225,
              "size": 5000.0,
              "notional": 1125.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 3460,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-55",
              "timestamp": "2026-03-06T07:20:01.453600",
              "price": 0.225,
              "size": 21500.0,
              "notional": 4837.5,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 3459,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-54",
              "timestamp": "2026-03-06T07:20:01.423500",
              "price": 0.225,
              "size": 20000.0,
              "notional": 4500.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 3459,
              "d1": "SINGLE_FILL",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-53",
              "timestamp": "2026-03-06T07:19:57.383600",
              "price": 0.225,
              "size": 18500.0,
              "notional": 4162.5,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 3458,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            }
          ],
          "peer_comparison": [
            {
              "ticker": "TKU",
              "currency": "SGD",
              "is_target": true,
              "retail_pct": 0.2713804713804714,
              "mixed_pct": 0.16296296296296298,
              "instit_pct": 0.37676767676767675,
              "ambiguous_pct": 0.18888888888888888,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.18888888888888888,
              "retail_qty_pct": 0.07968020916200286,
              "mixed_qty_pct": 0.17336813163807901,
              "instit_qty_pct": 0.5044405055988984,
              "ambiguous_qty_pct": 0.24251115360101977,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.24251115360101977,
              "retail_notional_pct": 0.07942217851737726,
              "mixed_notional_pct": 0.17453211120259365,
              "instit_notional_pct": 0.5046588616337074,
              "ambiguous_notional_pct": 0.2413868486463216,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.2413868486463216,
              "run_retail_pct": 0.5493871665465032,
              "run_mixed_pct": 0.14059120403749098,
              "run_instit_pct": 0.15428983417447728,
              "run_unclear_pct": 0.15573179524152847,
              "avg_trade_size": 3459.2488215488215,
              "avg_run_notional": 7407.3316510454215,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.03460706560922855,
              "medium_confidence_pct": 0.40591204037490985,
              "low_confidence_pct": 0.2631578947368421,
              "na_confidence_pct": 0.29632299927901945,
              "avg_feature_coverage": 0.8514059120403749,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "LVR",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.21484375,
              "mixed_pct": 0.0625,
              "instit_pct": 0.31640625,
              "ambiguous_pct": 0.37890625,
              "unobservable_pct": 0.02734375,
              "unclear_pct": 0.40625,
              "retail_qty_pct": 0.06193100143747005,
              "mixed_qty_pct": 0.031264973646382366,
              "instit_qty_pct": 0.5179683756588405,
              "ambiguous_qty_pct": 0.3764973646382367,
              "unobservable_qty_pct": 0.012338284619070435,
              "unclear_qty_pct": 0.3888356492573071,
              "retail_notional_pct": 0.06267164373627769,
              "mixed_notional_pct": 0.03146982846487256,
              "instit_notional_pct": 0.5160971664789683,
              "ambiguous_notional_pct": 0.3778371134778555,
              "unobservable_notional_pct": 0.01192424784202594,
              "unclear_notional_pct": 0.3897613613198814,
              "run_retail_pct": 0.3157894736842105,
              "run_mixed_pct": 0.07017543859649122,
              "run_instit_pct": 0.19298245614035087,
              "run_unclear_pct": 0.42105263157894735,
              "avg_trade_size": 2922.255859375,
              "avg_run_notional": 4374.839181286549,
              "dominant_bucket": "AMBIGUOUS",
              "dominant_label": "Mixed, mostly unclassified",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.5087719298245614,
              "na_confidence_pct": 0.49122807017543857,
              "avg_feature_coverage": 0.8166666666666665,
              "observable_run_pct": 0.9824561403508771,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "QS9",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.2173403632103105,
              "mixed_pct": 0.09431751611013474,
              "instit_pct": 0.38986526069127125,
              "ambiguous_pct": 0.29789103690685415,
              "unobservable_pct": 0.0005858230814294083,
              "unclear_pct": 0.29847685998828355,
              "retail_qty_pct": 0.05523732017405324,
              "mixed_qty_pct": 0.0959470920741064,
              "instit_qty_pct": 0.5048286256363638,
              "ambiguous_qty_pct": 0.3439855613973284,
              "unobservable_qty_pct": 1.4007181481945793e-06,
              "unclear_qty_pct": 0.3439869621154766,
              "retail_notional_pct": 0.05464898748655445,
              "mixed_notional_pct": 0.09492681336373027,
              "instit_notional_pct": 0.506006218759441,
              "ambiguous_notional_pct": 0.34441651394521205,
              "unobservable_notional_pct": 1.4664450621814938e-06,
              "unclear_notional_pct": 0.3444179803902742,
              "run_retail_pct": 0.43980848153214774,
              "run_mixed_pct": 0.1012311901504788,
              "run_instit_pct": 0.17647058823529413,
              "run_unclear_pct": 0.2824897400820794,
              "avg_trade_size": 2496.782425307557,
              "avg_run_notional": 5830.379753761969,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.04035567715458276,
              "medium_confidence_pct": 0.2968536251709986,
              "low_confidence_pct": 0.27906976744186046,
              "na_confidence_pct": 0.38372093023255816,
              "avg_feature_coverage": 0.8461012311901503,
              "observable_run_pct": 0.9993160054719562,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "5DD",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.2262357414448669,
              "mixed_pct": 0.1108998732572877,
              "instit_pct": 0.32953105196451205,
              "ambiguous_pct": 0.31685678073510776,
              "unobservable_pct": 0.016476552598225603,
              "unclear_pct": 0.33333333333333337,
              "retail_qty_pct": 0.06756246126872327,
              "mixed_qty_pct": 0.07480237602212784,
              "instit_qty_pct": 0.4681005426157404,
              "ambiguous_qty_pct": 0.3665150163993894,
              "unobservable_qty_pct": 0.023019603694019133,
              "unclear_qty_pct": 0.3895346200934085,
              "retail_notional_pct": 0.06681759592289302,
              "mixed_notional_pct": 0.07411808467027879,
              "instit_notional_pct": 0.46908578923901467,
              "ambiguous_notional_pct": 0.3667123273855748,
              "unobservable_notional_pct": 0.02326620278223871,
              "unclear_notional_pct": 0.38997853016781353,
              "run_retail_pct": 0.43733153638814015,
              "run_mixed_pct": 0.10714285714285714,
              "run_instit_pct": 0.1522911051212938,
              "run_unclear_pct": 0.3032345013477089,
              "avg_trade_size": 3738.7031051964514,
              "avg_run_notional": 7951.042452830188,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.3288409703504043,
              "low_confidence_pct": 0.26078167115902967,
              "na_confidence_pct": 0.41037735849056606,
              "avg_feature_coverage": 0.8512803234501346,
              "observable_run_pct": 0.9959568733153639,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "ITS",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.24729954299958454,
              "mixed_pct": 0.14270876609887828,
              "instit_pct": 0.3165766514333195,
              "ambiguous_pct": 0.2934150394682177,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.2934150394682177,
              "retail_qty_pct": 0.08768421001282946,
              "mixed_qty_pct": 0.11301872710332346,
              "instit_qty_pct": 0.43205998136558094,
              "ambiguous_qty_pct": 0.3672370815182661,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.3672370815182661,
              "retail_notional_pct": 0.0875735050035376,
              "mixed_notional_pct": 0.11475824216131762,
              "instit_notional_pct": 0.44004536023615615,
              "ambiguous_notional_pct": 0.3576228925989886,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.3576228925989886,
              "run_retail_pct": 0.5428268363829223,
              "run_mixed_pct": 0.14213736409440467,
              "run_instit_pct": 0.12967382657120127,
              "run_unclear_pct": 0.18536197295147175,
              "avg_trade_size": 4193.636580805983,
              "avg_run_notional": 10707.062582869265,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.0869795810129939,
              "medium_confidence_pct": 0.3831874834261469,
              "low_confidence_pct": 0.20233359851498275,
              "na_confidence_pct": 0.3274993370458764,
              "avg_feature_coverage": 0.8643861044815697,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "U77",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.4170403587443946,
              "mixed_pct": 0.16143497757847533,
              "instit_pct": 0.18834080717488788,
              "ambiguous_pct": 0.23318385650224216,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.23318385650224216,
              "retail_qty_pct": 0.06660075498831566,
              "mixed_qty_pct": 0.06273593384864282,
              "instit_qty_pct": 0.4379831026424591,
              "ambiguous_qty_pct": 0.4326802085205824,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.4326802085205824,
              "retail_notional_pct": 0.0656982634320233,
              "mixed_notional_pct": 0.062274311321111636,
              "instit_notional_pct": 0.4388291723242098,
              "ambiguous_notional_pct": 0.43319825292265524,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.43319825292265524,
              "run_retail_pct": 0.5202312138728323,
              "run_mixed_pct": 0.16184971098265896,
              "run_instit_pct": 0.09248554913294797,
              "run_unclear_pct": 0.2254335260115607,
              "avg_trade_size": 1066.7399103139014,
              "avg_run_notional": 1375.0462427745665,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.1791907514450867,
              "medium_confidence_pct": 0.27167630057803466,
              "low_confidence_pct": 0.16184971098265896,
              "na_confidence_pct": 0.3872832369942196,
              "avg_feature_coverage": 0.8387283236994217,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "NXR",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.10810810810810811,
              "mixed_pct": 0.13513513513513514,
              "instit_pct": 0.2972972972972973,
              "ambiguous_pct": 0.2972972972972973,
              "unobservable_pct": 0.16216216216216217,
              "unclear_pct": 0.4594594594594595,
              "retail_qty_pct": 0.016311703112757318,
              "mixed_qty_pct": 0.014887100220813448,
              "instit_qty_pct": 0.09815513925493269,
              "ambiguous_qty_pct": 0.14580810599045516,
              "unobservable_qty_pct": 0.7248379514210413,
              "unclear_qty_pct": 0.8706460574114965,
              "retail_notional_pct": 0.01621229540340468,
              "mixed_notional_pct": 0.01461956177046234,
              "instit_notional_pct": 0.0967887166926167,
              "ambiguous_notional_pct": 0.14520138745590505,
              "unobservable_notional_pct": 0.7271780386776112,
              "unclear_notional_pct": 0.8723794261335163,
              "run_retail_pct": 0.15384615384615385,
              "run_mixed_pct": 0.15384615384615385,
              "run_instit_pct": 0.2692307692307692,
              "run_unclear_pct": 0.42307692307692313,
              "avg_trade_size": 15127.824324324325,
              "avg_run_notional": 21528.05769230769,
              "dominant_bucket": "AMBIGUOUS",
              "dominant_label": "Mixed, mostly unclassified",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.4230769230769231,
              "na_confidence_pct": 0.5769230769230769,
              "avg_feature_coverage": 0.7730769230769232,
              "observable_run_pct": 0.8846153846153846,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "532",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.0,
              "mixed_pct": 0.0,
              "instit_pct": 0.3333333333333333,
              "ambiguous_pct": 0.0,
              "unobservable_pct": 0.6666666666666666,
              "unclear_pct": 0.6666666666666666,
              "retail_qty_pct": 0.0,
              "mixed_qty_pct": 0.0,
              "instit_qty_pct": 0.09090909090909091,
              "ambiguous_qty_pct": 0.0,
              "unobservable_qty_pct": 0.9090909090909091,
              "unclear_qty_pct": 0.9090909090909091,
              "retail_notional_pct": 0.0,
              "mixed_notional_pct": 0.0,
              "instit_notional_pct": 0.09090909090909091,
              "ambiguous_notional_pct": 0.0,
              "unobservable_notional_pct": 0.9090909090909091,
              "unclear_notional_pct": 0.9090909090909091,
              "run_retail_pct": 0.0,
              "run_mixed_pct": 0.0,
              "run_instit_pct": 0.3333333333333333,
              "run_unclear_pct": 0.6666666666666666,
              "avg_trade_size": 220.0,
              "avg_run_notional": 220.0,
              "dominant_bucket": "UNOBSERVABLE",
              "dominant_label": "Not Observable",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.3333333333333333,
              "na_confidence_pct": 0.6666666666666666,
              "avg_feature_coverage": 0.6,
              "observable_run_pct": 0.33333333333333337,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "KUX",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.5,
              "mixed_pct": 0.5,
              "instit_pct": 0.0,
              "ambiguous_pct": 0.0,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.0,
              "retail_qty_pct": 0.16666666666666666,
              "mixed_qty_pct": 0.8333333333333334,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": 0.0,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.0,
              "retail_notional_pct": 0.20895522388059704,
              "mixed_notional_pct": 0.7910447761194029,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": 0.0,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.0,
              "run_retail_pct": 0.5,
              "run_mixed_pct": 0.5,
              "run_instit_pct": 0.0,
              "run_unclear_pct": 0.0,
              "avg_trade_size": 16.75,
              "avg_run_notional": 16.75,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Mixed, leaning retail-like",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.5,
              "na_confidence_pct": 0.5,
              "avg_feature_coverage": 0.8500000000000001,
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
      "n_trades": 2970,
      "n_runs": 1387,
      "n_trade_days": 21,
      "first_trade_date": "2026-02-04",
      "last_trade_date": "2026-03-06",
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
        "retail_pct": 0.2713804713804714,
        "mixed_pct": 0.16296296296296298,
        "instit_pct": 0.37676767676767675,
        "ambiguous_pct": 0.18888888888888888,
        "unobservable_pct": 0.0,
        "unclear_pct": 0.18888888888888888,
        "retail_qty_pct": 0.07968020916200286,
        "mixed_qty_pct": 0.17336813163807901,
        "instit_qty_pct": 0.5044405055988984,
        "ambiguous_qty_pct": 0.24251115360101977,
        "unobservable_qty_pct": 0.0,
        "unclear_qty_pct": 0.24251115360101977,
        "retail_notional_pct": 0.07942217851737726,
        "mixed_notional_pct": 0.17453211120259365,
        "instit_notional_pct": 0.5046588616337074,
        "ambiguous_notional_pct": 0.2413868486463216,
        "unobservable_notional_pct": 0.0,
        "unclear_notional_pct": 0.2413868486463216
      },
      "run_composition": {
        "retail_pct": 0.5493871665465032,
        "mixed_pct": 0.14059120403749098,
        "instit_pct": 0.15428983417447728,
        "ambiguous_pct": 0.15573179524152847,
        "unobservable_pct": 0.0,
        "unclear_pct": 0.15573179524152847
      },
      "trade_size": {
        "avg": 3459.2488215488215,
        "median": 1224.5
      },
      "run_size": {
        "avg": 7407.3316510454215,
        "median": 1856.5,
        "avg_length": 1.215573179524153
      },
      "confidence": {
        "high": 0.03460706560922855,
        "medium": 0.40591204037490985,
        "low": 0.2631578947368421,
        "na": 0.29632299927901945
      },
      "confidence_counts": {
        "high": 48,
        "medium": 563,
        "low": 365,
        "na": 411
      },
      "trade_confidence": {
        "high": 0.018855218855218854,
        "medium": 0.3734006734006734,
        "low": 0.2558922558922559,
        "na": 0.35185185185185186
      },
      "trade_confidence_counts": {
        "high": 56,
        "medium": 1109,
        "low": 760,
        "na": 1045
      },
      "counts": {
        "trades": {
          "retail": 806,
          "mixed": 484,
          "institutional": 1119,
          "ambiguous": 561,
          "unobservable": 0,
          "unclear": 561
        },
        "runs": {
          "retail": 762,
          "mixed": 195,
          "institutional": 214,
          "ambiguous": 216,
          "unobservable": 0,
          "unclear": 216
        }
      },
      "observability": {
        "avg_feature_coverage": 0.8514059120403749,
        "observable_run_pct": 1.0,
        "ambiguous_run_pct": 0.15573179524152847,
        "unobservable_run_pct": 0.0
      },
      "dominant_bucket": "RETAIL",
      "dominant_label": "Retail-led",
      "dominant_share": 0.5493871665465032,
      "dominance_gap": 0.39365537130497474,
      "over_time": {
        "valid": true,
        "periods": [
          {
            "month": "2026-01",
            "n_trades": 4547,
            "n_runs": 1810,
            "retail_pct": 0.27996481196393225,
            "mixed_pct": 0.15350780734550254,
            "instit_pct": 0.3597976687926105,
            "ambiguous_pct": 0.2067297118979547,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.2067297118979547,
            "avg_trade_size": 3936.658346162305,
            "avg_run_notional": 9889.494751381215,
            "retail_qty_pct": 0.07277836792045625,
            "mixed_qty_pct": 0.15789513963932247,
            "instit_qty_pct": 0.5176925455285722,
            "ambiguous_qty_pct": 0.25163394691164903,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.25163394691164903,
            "retail_notional_pct": 0.07160620325642163,
            "mixed_notional_pct": 0.15785828429861018,
            "instit_notional_pct": 0.5175693857405639,
            "ambiguous_notional_pct": 0.2529661267044043,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.2529661267044043,
            "run_retail_pct": 0.6430939226519337,
            "run_mixed_pct": 0.13425414364640884,
            "run_instit_pct": 0.1011049723756906,
            "run_ambiguous_pct": 0.12154696132596685,
            "run_unobservable_pct": 0.0,
            "run_unclear_pct": 0.12154696132596685,
            "avg_feature_coverage": 0.8573204419889502,
            "high_confidence_pct": 0.14585635359116023,
            "medium_confidence_pct": 0.46243093922651934,
            "low_confidence_pct": 0.13591160220994475,
            "na_confidence_pct": 0.2558011049723757,
            "total_quantity": null
          },
          {
            "month": "2026-02",
            "n_trades": 3236,
            "n_runs": 1422,
            "retail_pct": 0.2778121137206428,
            "mixed_pct": 0.16718170580964153,
            "instit_pct": 0.32169344870210137,
            "ambiguous_pct": 0.23331273176761433,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.23331273176761433,
            "avg_trade_size": 3472.6229913473426,
            "avg_run_notional": 7902.537271448664,
            "retail_qty_pct": 0.0936751369857047,
            "mixed_qty_pct": 0.18777930710060717,
            "instit_qty_pct": 0.44697847429721327,
            "ambiguous_qty_pct": 0.27156708161647486,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.27156708161647486,
            "retail_notional_pct": 0.09379533963704086,
            "mixed_notional_pct": 0.18970958427423834,
            "instit_notional_pct": 0.44554998803994655,
            "ambiguous_notional_pct": 0.27094508804877426,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.27094508804877426,
            "run_retail_pct": 0.5759493670886076,
            "run_mixed_pct": 0.14627285513361463,
            "run_instit_pct": 0.12447257383966245,
            "run_ambiguous_pct": 0.15330520393811534,
            "run_unobservable_pct": 0.0,
            "run_unclear_pct": 0.15330520393811534,
            "avg_feature_coverage": 0.85210970464135,
            "high_confidence_pct": 0.053445850914205346,
            "medium_confidence_pct": 0.4310829817158931,
            "low_confidence_pct": 0.2158931082981716,
            "na_confidence_pct": 0.29957805907172996,
            "total_quantity": null
          },
          {
            "month": "2026-03",
            "n_trades": 503,
            "n_runs": 245,
            "retail_pct": 0.2544731610337972,
            "mixed_pct": 0.14910536779324055,
            "instit_pct": 0.44731610337972166,
            "ambiguous_pct": 0.14910536779324055,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.14910536779324055,
            "avg_trade_size": 2937.094433399602,
            "avg_run_notional": 6030.034693877551,
            "retail_qty_pct": 0.06881274011649523,
            "mixed_qty_pct": 0.1623652249349362,
            "instit_qty_pct": 0.6393914983269302,
            "ambiguous_qty_pct": 0.12943053662163836,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.12943053662163836,
            "retail_notional_pct": 0.06813681310257463,
            "mixed_notional_pct": 0.16225073331896084,
            "instit_notional_pct": 0.6411179141691066,
            "ambiguous_notional_pct": 0.12849453940935798,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.12849453940935798,
            "run_retail_pct": 0.4857142857142857,
            "run_mixed_pct": 0.1469387755102041,
            "run_instit_pct": 0.22857142857142856,
            "run_ambiguous_pct": 0.13877551020408163,
            "run_unobservable_pct": 0.0,
            "run_unclear_pct": 0.13877551020408163,
            "avg_feature_coverage": 0.8604081632653059,
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.32653061224489793,
            "low_confidence_pct": 0.3877551020408163,
            "na_confidence_pct": 0.2857142857142857,
            "total_quantity": null
          }
        ]
      },
      "peer_comparison": [
        {
          "ticker": "TKU",
          "currency": "SGD",
          "is_target": true,
          "retail_pct": 0.2713804713804714,
          "mixed_pct": 0.16296296296296298,
          "instit_pct": 0.37676767676767675,
          "ambiguous_pct": 0.18888888888888888,
          "unobservable_pct": 0.0,
          "unclear_pct": 0.18888888888888888,
          "retail_qty_pct": 0.07968020916200286,
          "mixed_qty_pct": 0.17336813163807901,
          "instit_qty_pct": 0.5044405055988984,
          "ambiguous_qty_pct": 0.24251115360101977,
          "unobservable_qty_pct": 0.0,
          "unclear_qty_pct": 0.24251115360101977,
          "retail_notional_pct": 0.07942217851737726,
          "mixed_notional_pct": 0.17453211120259365,
          "instit_notional_pct": 0.5046588616337074,
          "ambiguous_notional_pct": 0.2413868486463216,
          "unobservable_notional_pct": 0.0,
          "unclear_notional_pct": 0.2413868486463216,
          "run_retail_pct": 0.5493871665465032,
          "run_mixed_pct": 0.14059120403749098,
          "run_instit_pct": 0.15428983417447728,
          "run_unclear_pct": 0.15573179524152847,
          "avg_trade_size": 3459.2488215488215,
          "avg_run_notional": 7407.3316510454215,
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "high_confidence_pct": 0.03460706560922855,
          "medium_confidence_pct": 0.40591204037490985,
          "low_confidence_pct": 0.2631578947368421,
          "na_confidence_pct": 0.29632299927901945,
          "avg_feature_coverage": 0.8514059120403749,
          "observable_run_pct": 1.0,
          "thresholds": {
            "retail_max": 10000.0,
            "instit_min": 50000.0
          }
        },
        {
          "ticker": "LVR",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.21484375,
          "mixed_pct": 0.0625,
          "instit_pct": 0.31640625,
          "ambiguous_pct": 0.37890625,
          "unobservable_pct": 0.02734375,
          "unclear_pct": 0.40625,
          "retail_qty_pct": 0.06193100143747005,
          "mixed_qty_pct": 0.031264973646382366,
          "instit_qty_pct": 0.5179683756588405,
          "ambiguous_qty_pct": 0.3764973646382367,
          "unobservable_qty_pct": 0.012338284619070435,
          "unclear_qty_pct": 0.3888356492573071,
          "retail_notional_pct": 0.06267164373627769,
          "mixed_notional_pct": 0.03146982846487256,
          "instit_notional_pct": 0.5160971664789683,
          "ambiguous_notional_pct": 0.3778371134778555,
          "unobservable_notional_pct": 0.01192424784202594,
          "unclear_notional_pct": 0.3897613613198814,
          "run_retail_pct": 0.3157894736842105,
          "run_mixed_pct": 0.07017543859649122,
          "run_instit_pct": 0.19298245614035087,
          "run_unclear_pct": 0.42105263157894735,
          "avg_trade_size": 2922.255859375,
          "avg_run_notional": 4374.839181286549,
          "dominant_bucket": "AMBIGUOUS",
          "dominant_label": "Mixed, mostly unclassified",
          "high_confidence_pct": 0.0,
          "medium_confidence_pct": 0.0,
          "low_confidence_pct": 0.5087719298245614,
          "na_confidence_pct": 0.49122807017543857,
          "avg_feature_coverage": 0.8166666666666665,
          "observable_run_pct": 0.9824561403508771,
          "thresholds": {
            "retail_max": 10000.0,
            "instit_min": 50000.0
          }
        },
        {
          "ticker": "QS9",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.2173403632103105,
          "mixed_pct": 0.09431751611013474,
          "instit_pct": 0.38986526069127125,
          "ambiguous_pct": 0.29789103690685415,
          "unobservable_pct": 0.0005858230814294083,
          "unclear_pct": 0.29847685998828355,
          "retail_qty_pct": 0.05523732017405324,
          "mixed_qty_pct": 0.0959470920741064,
          "instit_qty_pct": 0.5048286256363638,
          "ambiguous_qty_pct": 0.3439855613973284,
          "unobservable_qty_pct": 1.4007181481945793e-06,
          "unclear_qty_pct": 0.3439869621154766,
          "retail_notional_pct": 0.05464898748655445,
          "mixed_notional_pct": 0.09492681336373027,
          "instit_notional_pct": 0.506006218759441,
          "ambiguous_notional_pct": 0.34441651394521205,
          "unobservable_notional_pct": 1.4664450621814938e-06,
          "unclear_notional_pct": 0.3444179803902742,
          "run_retail_pct": 0.43980848153214774,
          "run_mixed_pct": 0.1012311901504788,
          "run_instit_pct": 0.17647058823529413,
          "run_unclear_pct": 0.2824897400820794,
          "avg_trade_size": 2496.782425307557,
          "avg_run_notional": 5830.379753761969,
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "high_confidence_pct": 0.04035567715458276,
          "medium_confidence_pct": 0.2968536251709986,
          "low_confidence_pct": 0.27906976744186046,
          "na_confidence_pct": 0.38372093023255816,
          "avg_feature_coverage": 0.8461012311901503,
          "observable_run_pct": 0.9993160054719562,
          "thresholds": {
            "retail_max": 10000.0,
            "instit_min": 50000.0
          }
        },
        {
          "ticker": "5DD",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.2262357414448669,
          "mixed_pct": 0.1108998732572877,
          "instit_pct": 0.32953105196451205,
          "ambiguous_pct": 0.31685678073510776,
          "unobservable_pct": 0.016476552598225603,
          "unclear_pct": 0.33333333333333337,
          "retail_qty_pct": 0.06756246126872327,
          "mixed_qty_pct": 0.07480237602212784,
          "instit_qty_pct": 0.4681005426157404,
          "ambiguous_qty_pct": 0.3665150163993894,
          "unobservable_qty_pct": 0.023019603694019133,
          "unclear_qty_pct": 0.3895346200934085,
          "retail_notional_pct": 0.06681759592289302,
          "mixed_notional_pct": 0.07411808467027879,
          "instit_notional_pct": 0.46908578923901467,
          "ambiguous_notional_pct": 0.3667123273855748,
          "unobservable_notional_pct": 0.02326620278223871,
          "unclear_notional_pct": 0.38997853016781353,
          "run_retail_pct": 0.43733153638814015,
          "run_mixed_pct": 0.10714285714285714,
          "run_instit_pct": 0.1522911051212938,
          "run_unclear_pct": 0.3032345013477089,
          "avg_trade_size": 3738.7031051964514,
          "avg_run_notional": 7951.042452830188,
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "high_confidence_pct": 0.0,
          "medium_confidence_pct": 0.3288409703504043,
          "low_confidence_pct": 0.26078167115902967,
          "na_confidence_pct": 0.41037735849056606,
          "avg_feature_coverage": 0.8512803234501346,
          "observable_run_pct": 0.9959568733153639,
          "thresholds": {
            "retail_max": 10000.0,
            "instit_min": 50000.0
          }
        },
        {
          "ticker": "ITS",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.24729954299958454,
          "mixed_pct": 0.14270876609887828,
          "instit_pct": 0.3165766514333195,
          "ambiguous_pct": 0.2934150394682177,
          "unobservable_pct": 0.0,
          "unclear_pct": 0.2934150394682177,
          "retail_qty_pct": 0.08768421001282946,
          "mixed_qty_pct": 0.11301872710332346,
          "instit_qty_pct": 0.43205998136558094,
          "ambiguous_qty_pct": 0.3672370815182661,
          "unobservable_qty_pct": 0.0,
          "unclear_qty_pct": 0.3672370815182661,
          "retail_notional_pct": 0.0875735050035376,
          "mixed_notional_pct": 0.11475824216131762,
          "instit_notional_pct": 0.44004536023615615,
          "ambiguous_notional_pct": 0.3576228925989886,
          "unobservable_notional_pct": 0.0,
          "unclear_notional_pct": 0.3576228925989886,
          "run_retail_pct": 0.5428268363829223,
          "run_mixed_pct": 0.14213736409440467,
          "run_instit_pct": 0.12967382657120127,
          "run_unclear_pct": 0.18536197295147175,
          "avg_trade_size": 4193.636580805983,
          "avg_run_notional": 10707.062582869265,
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "high_confidence_pct": 0.0869795810129939,
          "medium_confidence_pct": 0.3831874834261469,
          "low_confidence_pct": 0.20233359851498275,
          "na_confidence_pct": 0.3274993370458764,
          "avg_feature_coverage": 0.8643861044815697,
          "observable_run_pct": 1.0,
          "thresholds": {
            "retail_max": 10000.0,
            "instit_min": 50000.0
          }
        },
        {
          "ticker": "U77",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.4170403587443946,
          "mixed_pct": 0.16143497757847533,
          "instit_pct": 0.18834080717488788,
          "ambiguous_pct": 0.23318385650224216,
          "unobservable_pct": 0.0,
          "unclear_pct": 0.23318385650224216,
          "retail_qty_pct": 0.06660075498831566,
          "mixed_qty_pct": 0.06273593384864282,
          "instit_qty_pct": 0.4379831026424591,
          "ambiguous_qty_pct": 0.4326802085205824,
          "unobservable_qty_pct": 0.0,
          "unclear_qty_pct": 0.4326802085205824,
          "retail_notional_pct": 0.0656982634320233,
          "mixed_notional_pct": 0.062274311321111636,
          "instit_notional_pct": 0.4388291723242098,
          "ambiguous_notional_pct": 0.43319825292265524,
          "unobservable_notional_pct": 0.0,
          "unclear_notional_pct": 0.43319825292265524,
          "run_retail_pct": 0.5202312138728323,
          "run_mixed_pct": 0.16184971098265896,
          "run_instit_pct": 0.09248554913294797,
          "run_unclear_pct": 0.2254335260115607,
          "avg_trade_size": 1066.7399103139014,
          "avg_run_notional": 1375.0462427745665,
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "high_confidence_pct": 0.1791907514450867,
          "medium_confidence_pct": 0.27167630057803466,
          "low_confidence_pct": 0.16184971098265896,
          "na_confidence_pct": 0.3872832369942196,
          "avg_feature_coverage": 0.8387283236994217,
          "observable_run_pct": 1.0,
          "thresholds": {
            "retail_max": 10000.0,
            "instit_min": 50000.0
          }
        },
        {
          "ticker": "NXR",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.10810810810810811,
          "mixed_pct": 0.13513513513513514,
          "instit_pct": 0.2972972972972973,
          "ambiguous_pct": 0.2972972972972973,
          "unobservable_pct": 0.16216216216216217,
          "unclear_pct": 0.4594594594594595,
          "retail_qty_pct": 0.016311703112757318,
          "mixed_qty_pct": 0.014887100220813448,
          "instit_qty_pct": 0.09815513925493269,
          "ambiguous_qty_pct": 0.14580810599045516,
          "unobservable_qty_pct": 0.7248379514210413,
          "unclear_qty_pct": 0.8706460574114965,
          "retail_notional_pct": 0.01621229540340468,
          "mixed_notional_pct": 0.01461956177046234,
          "instit_notional_pct": 0.0967887166926167,
          "ambiguous_notional_pct": 0.14520138745590505,
          "unobservable_notional_pct": 0.7271780386776112,
          "unclear_notional_pct": 0.8723794261335163,
          "run_retail_pct": 0.15384615384615385,
          "run_mixed_pct": 0.15384615384615385,
          "run_instit_pct": 0.2692307692307692,
          "run_unclear_pct": 0.42307692307692313,
          "avg_trade_size": 15127.824324324325,
          "avg_run_notional": 21528.05769230769,
          "dominant_bucket": "AMBIGUOUS",
          "dominant_label": "Mixed, mostly unclassified",
          "high_confidence_pct": 0.0,
          "medium_confidence_pct": 0.0,
          "low_confidence_pct": 0.4230769230769231,
          "na_confidence_pct": 0.5769230769230769,
          "avg_feature_coverage": 0.7730769230769232,
          "observable_run_pct": 0.8846153846153846,
          "thresholds": {
            "retail_max": 10000.0,
            "instit_min": 50000.0
          }
        },
        {
          "ticker": "532",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.0,
          "mixed_pct": 0.0,
          "instit_pct": 0.3333333333333333,
          "ambiguous_pct": 0.0,
          "unobservable_pct": 0.6666666666666666,
          "unclear_pct": 0.6666666666666666,
          "retail_qty_pct": 0.0,
          "mixed_qty_pct": 0.0,
          "instit_qty_pct": 0.09090909090909091,
          "ambiguous_qty_pct": 0.0,
          "unobservable_qty_pct": 0.9090909090909091,
          "unclear_qty_pct": 0.9090909090909091,
          "retail_notional_pct": 0.0,
          "mixed_notional_pct": 0.0,
          "instit_notional_pct": 0.09090909090909091,
          "ambiguous_notional_pct": 0.0,
          "unobservable_notional_pct": 0.9090909090909091,
          "unclear_notional_pct": 0.9090909090909091,
          "run_retail_pct": 0.0,
          "run_mixed_pct": 0.0,
          "run_instit_pct": 0.3333333333333333,
          "run_unclear_pct": 0.6666666666666666,
          "avg_trade_size": 220.0,
          "avg_run_notional": 220.0,
          "dominant_bucket": "UNOBSERVABLE",
          "dominant_label": "Not Observable",
          "high_confidence_pct": 0.0,
          "medium_confidence_pct": 0.0,
          "low_confidence_pct": 0.3333333333333333,
          "na_confidence_pct": 0.6666666666666666,
          "avg_feature_coverage": 0.6,
          "observable_run_pct": 0.33333333333333337,
          "thresholds": {
            "retail_max": 10000.0,
            "instit_min": 50000.0
          }
        },
        {
          "ticker": "KUX",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.5,
          "mixed_pct": 0.5,
          "instit_pct": 0.0,
          "ambiguous_pct": 0.0,
          "unobservable_pct": 0.0,
          "unclear_pct": 0.0,
          "retail_qty_pct": 0.16666666666666666,
          "mixed_qty_pct": 0.8333333333333334,
          "instit_qty_pct": 0.0,
          "ambiguous_qty_pct": 0.0,
          "unobservable_qty_pct": 0.0,
          "unclear_qty_pct": 0.0,
          "retail_notional_pct": 0.20895522388059704,
          "mixed_notional_pct": 0.7910447761194029,
          "instit_notional_pct": 0.0,
          "ambiguous_notional_pct": 0.0,
          "unobservable_notional_pct": 0.0,
          "unclear_notional_pct": 0.0,
          "run_retail_pct": 0.5,
          "run_mixed_pct": 0.5,
          "run_instit_pct": 0.0,
          "run_unclear_pct": 0.0,
          "avg_trade_size": 16.75,
          "avg_run_notional": 16.75,
          "dominant_bucket": "RETAIL",
          "dominant_label": "Mixed, leaning retail-like",
          "high_confidence_pct": 0.0,
          "medium_confidence_pct": 0.0,
          "low_confidence_pct": 0.5,
          "na_confidence_pct": 0.5,
          "avg_feature_coverage": 0.8500000000000001,
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
            "ticker": "TKU",
            "currency": "SGD",
            "is_target": true,
            "retail_pct": 0.32926829268292684,
            "mixed_pct": 0.15853658536585366,
            "instit_pct": 0.2804878048780488,
            "ambiguous_pct": 0.23170731707317074,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.23170731707317074,
            "retail_qty_pct": 0.0711643734280219,
            "mixed_qty_pct": 0.23672140849238052,
            "instit_qty_pct": 0.4985944666370765,
            "ambiguous_qty_pct": 0.1935197514425211,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.1935197514425211,
            "retail_notional_pct": 0.07139943685692482,
            "mixed_notional_pct": 0.23616812715454857,
            "instit_notional_pct": 0.4988421357332702,
            "ambiguous_notional_pct": 0.19359030025525645,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.19359030025525645,
            "run_retail_pct": 0.5,
            "run_mixed_pct": 0.15217391304347827,
            "run_instit_pct": 0.1956521739130435,
            "run_unclear_pct": 0.15217391304347827,
            "avg_trade_size": 1853.7073170731708,
            "avg_run_notional": 3304.4347826086955,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.2826086956521739,
            "low_confidence_pct": 0.41304347826086957,
            "na_confidence_pct": 0.30434782608695654,
            "avg_feature_coverage": 0.8663043478260873,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "5DD",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.15306122448979592,
            "mixed_pct": 0.04081632653061224,
            "instit_pct": 0.4489795918367347,
            "ambiguous_pct": 0.35714285714285715,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.35714285714285715,
            "retail_qty_pct": 0.06058673469387755,
            "mixed_qty_pct": 0.03762755102040816,
            "instit_qty_pct": 0.5331632653061225,
            "ambiguous_qty_pct": 0.36862244897959184,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.36862244897959184,
            "retail_notional_pct": 0.06070341391388186,
            "mixed_notional_pct": 0.03771924797481113,
            "instit_notional_pct": 0.5328463216232525,
            "ambiguous_notional_pct": 0.3687310164880545,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.3687310164880545,
            "run_retail_pct": 0.358974358974359,
            "run_mixed_pct": 0.05128205128205128,
            "run_instit_pct": 0.23076923076923078,
            "run_unclear_pct": 0.358974358974359,
            "avg_trade_size": 3026.9285714285716,
            "avg_run_notional": 7606.128205128205,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Mixed, leaning retail-like",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.1794871794871795,
            "low_confidence_pct": 0.41025641025641024,
            "na_confidence_pct": 0.41025641025641024,
            "avg_feature_coverage": 0.8653846153846158,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "ITS",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.23015873015873015,
            "mixed_pct": 0.31746031746031744,
            "instit_pct": 0.24603174603174602,
            "ambiguous_pct": 0.20634920634920634,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.20634920634920634,
            "retail_qty_pct": 0.06140350877192982,
            "mixed_qty_pct": 0.2573099415204678,
            "instit_qty_pct": 0.5175438596491229,
            "ambiguous_qty_pct": 0.16374269005847952,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.16374269005847952,
            "retail_notional_pct": 0.061777072017611935,
            "mixed_notional_pct": 0.25811574065719906,
            "instit_notional_pct": 0.5168269664543371,
            "ambiguous_notional_pct": 0.1632802208708519,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.1632802208708519,
            "run_retail_pct": 0.5283018867924528,
            "run_mixed_pct": 0.22641509433962265,
            "run_instit_pct": 0.11320754716981132,
            "run_unclear_pct": 0.1320754716981132,
            "avg_trade_size": 879.6349206349206,
            "avg_run_notional": 2091.2075471698113,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.41509433962264153,
            "low_confidence_pct": 0.22641509433962265,
            "na_confidence_pct": 0.3584905660377358,
            "avg_feature_coverage": 0.8811320754716983,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "QS9",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.24175824175824176,
            "mixed_pct": 0.07692307692307693,
            "instit_pct": 0.27472527472527475,
            "ambiguous_pct": 0.4065934065934066,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.4065934065934066,
            "retail_qty_pct": 0.055587365206603685,
            "mixed_qty_pct": 0.0489073384864968,
            "instit_qty_pct": 0.4360864586315488,
            "ambiguous_qty_pct": 0.4594188376753507,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.4594188376753507,
            "retail_notional_pct": 0.05457879143414691,
            "mixed_notional_pct": 0.047435974389323905,
            "instit_notional_pct": 0.43537026617260133,
            "ambiguous_notional_pct": 0.4626149680039279,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.4626149680039279,
            "run_retail_pct": 0.38,
            "run_mixed_pct": 0.06,
            "run_instit_pct": 0.14,
            "run_unclear_pct": 0.42,
            "avg_trade_size": 2544.7835164835165,
            "avg_run_notional": 4631.505999999999,
            "dominant_bucket": "AMBIGUOUS",
            "dominant_label": "Mixed, mostly unclassified",
            "high_confidence_pct": 0.18,
            "medium_confidence_pct": 0.26,
            "low_confidence_pct": 0.08,
            "na_confidence_pct": 0.48,
            "avg_feature_coverage": 0.8260000000000002,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "LVR",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.14285714285714285,
            "mixed_pct": 0.0,
            "instit_pct": 0.2857142857142857,
            "ambiguous_pct": 0.5714285714285714,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.5714285714285714,
            "retail_qty_pct": 0.0048543689320388345,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.1941747572815534,
            "ambiguous_qty_pct": 0.8009708737864077,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.8009708737864077,
            "retail_notional_pct": 0.004947613504074505,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.19324796274738068,
            "ambiguous_notional_pct": 0.8018044237485448,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.8018044237485448,
            "run_retail_pct": 0.16666666666666666,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.16666666666666666,
            "run_unclear_pct": 0.6666666666666666,
            "avg_trade_size": 2454.285714285714,
            "avg_run_notional": 2863.3333333333335,
            "dominant_bucket": "AMBIGUOUS",
            "dominant_label": "Unclassified Flow",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.3333333333333333,
            "na_confidence_pct": 0.6666666666666666,
            "avg_feature_coverage": 0.8250000000000002,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "U77",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.5,
            "mixed_pct": 0.0,
            "instit_pct": 0.0,
            "ambiguous_pct": 0.5,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.5,
            "retail_qty_pct": 0.09090909090909091,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": 0.9090909090909091,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.9090909090909091,
            "retail_notional_pct": 0.09090909090909091,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": 0.9090909090909091,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.9090909090909091,
            "run_retail_pct": 0.5,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.0,
            "run_unclear_pct": 0.5,
            "avg_trade_size": 1155.0,
            "avg_run_notional": 1155.0,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Mixed, leaning retail-like",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.5,
            "na_confidence_pct": 0.5,
            "avg_feature_coverage": 0.8500000000000001,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          }
        ],
        "1w": [
          {
            "ticker": "TKU",
            "currency": "SGD",
            "is_target": true,
            "retail_pct": 0.2544731610337972,
            "mixed_pct": 0.14910536779324055,
            "instit_pct": 0.44731610337972166,
            "ambiguous_pct": 0.14910536779324055,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.14910536779324055,
            "retail_qty_pct": 0.06881274011649523,
            "mixed_qty_pct": 0.1623652249349362,
            "instit_qty_pct": 0.6393914983269302,
            "ambiguous_qty_pct": 0.12943053662163836,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.12943053662163836,
            "retail_notional_pct": 0.06813681310257463,
            "mixed_notional_pct": 0.16225073331896084,
            "instit_notional_pct": 0.6411179141691066,
            "ambiguous_notional_pct": 0.12849453940935798,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.12849453940935798,
            "run_retail_pct": 0.4857142857142857,
            "run_mixed_pct": 0.1469387755102041,
            "run_instit_pct": 0.22857142857142856,
            "run_unclear_pct": 0.13877551020408163,
            "avg_trade_size": 2937.094433399602,
            "avg_run_notional": 6030.034693877551,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.32653061224489793,
            "low_confidence_pct": 0.3877551020408163,
            "na_confidence_pct": 0.2857142857142857,
            "avg_feature_coverage": 0.8604081632653059,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "LVR",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.1875,
            "mixed_pct": 0.015625,
            "instit_pct": 0.375,
            "ambiguous_pct": 0.34375,
            "unobservable_pct": 0.078125,
            "unclear_pct": 0.421875,
            "retail_qty_pct": 0.04073789392774789,
            "mixed_qty_pct": 0.015372790161414296,
            "instit_qty_pct": 0.6529592621060722,
            "ambiguous_qty_pct": 0.2555726364335127,
            "unobservable_qty_pct": 0.035357417371252885,
            "unclear_qty_pct": 0.29093005380476555,
            "retail_notional_pct": 0.04108609660923329,
            "mixed_notional_pct": 0.014788945708533044,
            "instit_notional_pct": 0.6550032963312724,
            "ambiguous_notional_pct": 0.25389546175364824,
            "unobservable_notional_pct": 0.035226199597313046,
            "unclear_notional_pct": 0.2891216613509613,
            "run_retail_pct": 0.3,
            "run_mixed_pct": 0.025,
            "run_instit_pct": 0.2,
            "run_unclear_pct": 0.475,
            "avg_trade_size": 3507.6875,
            "avg_run_notional": 5612.3,
            "dominant_bucket": "AMBIGUOUS",
            "dominant_label": "Unclassified Flow",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.5,
            "na_confidence_pct": 0.5,
            "avg_feature_coverage": 0.8150000000000001,
            "observable_run_pct": 0.95,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "5DD",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.22278481012658227,
            "mixed_pct": 0.06582278481012659,
            "instit_pct": 0.39367088607594936,
            "ambiguous_pct": 0.30759493670886073,
            "unobservable_pct": 0.010126582278481013,
            "unclear_pct": 0.31772151898734174,
            "retail_qty_pct": 0.06667243917222271,
            "mixed_qty_pct": 0.040696164170058016,
            "instit_qty_pct": 0.5386613559615551,
            "ambiguous_qty_pct": 0.33466100961122175,
            "unobservable_qty_pct": 0.01930903108494242,
            "unclear_qty_pct": 0.35397004069616417,
            "retail_notional_pct": 0.06676370561208568,
            "mixed_notional_pct": 0.04074587869220659,
            "instit_notional_pct": 0.5375442768662343,
            "ambiguous_notional_pct": 0.3359506513682263,
            "unobservable_notional_pct": 0.018995487461247063,
            "unclear_notional_pct": 0.3549461388294734,
            "run_retail_pct": 0.42748091603053434,
            "run_mixed_pct": 0.0737913486005089,
            "run_instit_pct": 0.19592875318066158,
            "run_unclear_pct": 0.30279898218829515,
            "avg_trade_size": 2778.474683544304,
            "avg_run_notional": 5585.229007633588,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.3256997455470738,
            "low_confidence_pct": 0.29770992366412213,
            "na_confidence_pct": 0.37659033078880405,
            "avg_feature_coverage": 0.8505089058524173,
            "observable_run_pct": 0.9949109414758269,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "ITS",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.24631043256997456,
            "mixed_pct": 0.166412213740458,
            "instit_pct": 0.35928753180661577,
            "ambiguous_pct": 0.22798982188295167,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.22798982188295167,
            "retail_qty_pct": 0.10361710209766598,
            "mixed_qty_pct": 0.1366437344363314,
            "instit_qty_pct": 0.5257882074874436,
            "ambiguous_qty_pct": 0.23395095597855906,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.23395095597855906,
            "retail_notional_pct": 0.10323373522179217,
            "mixed_notional_pct": 0.13647473404102728,
            "instit_notional_pct": 0.5257723835653745,
            "ambiguous_notional_pct": 0.23451914717180608,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.23451914717180608,
            "run_retail_pct": 0.5425,
            "run_mixed_pct": 0.15375,
            "run_instit_pct": 0.15125,
            "run_unclear_pct": 0.1525,
            "avg_trade_size": 2660.9740458015267,
            "avg_run_notional": 6536.0175,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.14125,
            "medium_confidence_pct": 0.3325,
            "low_confidence_pct": 0.22,
            "na_confidence_pct": 0.30625,
            "avg_feature_coverage": 0.8633124999999998,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "U77",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.5,
            "mixed_pct": 0.17647058823529413,
            "instit_pct": 0.13529411764705881,
            "ambiguous_pct": 0.18823529411764706,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.18823529411764706,
            "retail_qty_pct": 0.07993966817496229,
            "mixed_qty_pct": 0.07171260112436582,
            "instit_qty_pct": 0.4308240778829014,
            "ambiguous_qty_pct": 0.4175236528177705,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.4175236528177705,
            "retail_notional_pct": 0.07949057652036412,
            "mixed_notional_pct": 0.0719721750107664,
            "instit_notional_pct": 0.430958587973845,
            "ambiguous_notional_pct": 0.41757866049502446,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.41757866049502446,
            "run_retail_pct": 0.6029411764705882,
            "run_mixed_pct": 0.17647058823529413,
            "run_instit_pct": 0.058823529411764705,
            "run_unclear_pct": 0.16176470588235295,
            "avg_trade_size": 894.6676470588235,
            "avg_run_notional": 1118.3345588235295,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.22794117647058823,
            "medium_confidence_pct": 0.34558823529411764,
            "low_confidence_pct": 0.08823529411764706,
            "na_confidence_pct": 0.3382352941176471,
            "avg_feature_coverage": 0.8466911764705881,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "QS9",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.2020057306590258,
            "mixed_pct": 0.09025787965616046,
            "instit_pct": 0.3166189111747851,
            "ambiguous_pct": 0.39111747851002865,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.39111747851002865,
            "retail_qty_pct": 0.07439473017746226,
            "mixed_qty_pct": 0.06344987480777314,
            "instit_qty_pct": 0.40769586252091977,
            "ambiguous_qty_pct": 0.4544595324938448,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.4544595324938448,
            "retail_notional_pct": 0.07499617645226186,
            "mixed_notional_pct": 0.06451625694066508,
            "instit_notional_pct": 0.40736835775683455,
            "ambiguous_notional_pct": 0.4531192088502385,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.4531192088502385,
            "run_retail_pct": 0.3605015673981191,
            "run_mixed_pct": 0.08150470219435736,
            "run_instit_pct": 0.16614420062695925,
            "run_unclear_pct": 0.39184952978056425,
            "avg_trade_size": 3287.9498567335245,
            "avg_run_notional": 7194.322884012539,
            "dominant_bucket": "AMBIGUOUS",
            "dominant_label": "Mixed, mostly unclassified",
            "high_confidence_pct": 0.02821316614420063,
            "medium_confidence_pct": 0.30407523510971785,
            "low_confidence_pct": 0.19435736677115986,
            "na_confidence_pct": 0.47335423197492166,
            "avg_feature_coverage": 0.8311912225705328,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "NXR",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.07692307692307693,
            "mixed_pct": 0.15384615384615385,
            "instit_pct": 0.23076923076923078,
            "ambiguous_pct": 0.38461538461538464,
            "unobservable_pct": 0.15384615384615385,
            "unclear_pct": 0.5384615384615385,
            "retail_qty_pct": 0.0360082304526749,
            "mixed_qty_pct": 0.102880658436214,
            "instit_qty_pct": 0.32407407407407407,
            "ambiguous_qty_pct": 0.43415637860082307,
            "unobservable_qty_pct": 0.102880658436214,
            "unclear_qty_pct": 0.5370370370370371,
            "retail_notional_pct": 0.03593381245083268,
            "mixed_notional_pct": 0.10240136535153802,
            "instit_notional_pct": 0.3234043120574941,
            "ambiguous_notional_pct": 0.4315657542100561,
            "unobservable_notional_pct": 0.10669475593007907,
            "unclear_notional_pct": 0.5382605101401352,
            "run_retail_pct": 0.1111111111111111,
            "run_mixed_pct": 0.1111111111111111,
            "run_instit_pct": 0.2222222222222222,
            "run_unclear_pct": 0.5555555555555556,
            "avg_trade_size": 2884.576923076923,
            "avg_run_notional": 4166.611111111111,
            "dominant_bucket": "AMBIGUOUS",
            "dominant_label": "Unclassified Flow",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.3333333333333333,
            "na_confidence_pct": 0.6666666666666666,
            "avg_feature_coverage": 0.7888888888888889,
            "observable_run_pct": 0.8888888888888888,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "532",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.0,
            "mixed_pct": 0.0,
            "instit_pct": 0.0,
            "ambiguous_pct": 0.0,
            "unobservable_pct": 1.0,
            "unclear_pct": 1.0,
            "retail_qty_pct": 0.0,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": 0.0,
            "unobservable_qty_pct": 1.0,
            "unclear_qty_pct": 1.0,
            "retail_notional_pct": 0.0,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": 0.0,
            "unobservable_notional_pct": 1.0,
            "unclear_notional_pct": 1.0,
            "run_retail_pct": 0.0,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.0,
            "run_unclear_pct": 1.0,
            "avg_trade_size": 300.0,
            "avg_run_notional": 300.0,
            "dominant_bucket": "UNOBSERVABLE",
            "dominant_label": "Not Observable",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.0,
            "na_confidence_pct": 1.0,
            "avg_feature_coverage": 0.55,
            "observable_run_pct": 0.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          }
        ],
        "2w": [
          {
            "ticker": "TKU",
            "currency": "SGD",
            "is_target": true,
            "retail_pct": 0.282103134479272,
            "mixed_pct": 0.15672396359959556,
            "instit_pct": 0.39332659251769464,
            "ambiguous_pct": 0.1678463094034378,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.1678463094034378,
            "retail_qty_pct": 0.07210398133016234,
            "mixed_qty_pct": 0.17331281516479183,
            "instit_qty_pct": 0.545285166508753,
            "ambiguous_qty_pct": 0.20929803699629274,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.20929803699629274,
            "retail_notional_pct": 0.07196548615501956,
            "mixed_notional_pct": 0.17395977392600345,
            "instit_notional_pct": 0.5427961065672859,
            "ambiguous_notional_pct": 0.21127863335169103,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.21127863335169103,
            "run_retail_pct": 0.5303643724696356,
            "run_mixed_pct": 0.13765182186234817,
            "run_instit_pct": 0.1862348178137652,
            "run_unclear_pct": 0.145748987854251,
            "avg_trade_size": 3868.3791708796766,
            "avg_run_notional": 7744.5890688259105,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.058704453441295545,
            "medium_confidence_pct": 0.3582995951417004,
            "low_confidence_pct": 0.29959514170040485,
            "na_confidence_pct": 0.2834008097165992,
            "avg_feature_coverage": 0.855161943319838,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "LVR",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.17164179104477612,
            "mixed_pct": 0.014925373134328358,
            "instit_pct": 0.3656716417910448,
            "ambiguous_pct": 0.41044776119402987,
            "unobservable_pct": 0.03731343283582089,
            "unclear_pct": 0.44776119402985076,
            "retail_qty_pct": 0.05548216644649934,
            "mixed_qty_pct": 0.007737308926212493,
            "instit_qty_pct": 0.5472730703906398,
            "ambiguous_qty_pct": 0.372145687865635,
            "unobservable_qty_pct": 0.017361766371013398,
            "unclear_qty_pct": 0.3895074542366484,
            "retail_notional_pct": 0.05632230609670038,
            "mixed_notional_pct": 0.007294228342920685,
            "instit_notional_pct": 0.5457626756196138,
            "ambiguous_notional_pct": 0.37370998438936764,
            "unobservable_notional_pct": 0.016910805551397474,
            "unclear_notional_pct": 0.3906207899407651,
            "run_retail_pct": 0.27710843373493976,
            "run_mixed_pct": 0.024096385542168676,
            "run_instit_pct": 0.20481927710843373,
            "run_unclear_pct": 0.49397590361445787,
            "avg_trade_size": 3489.776119402985,
            "avg_run_notional": 5634.096385542169,
            "dominant_bucket": "AMBIGUOUS",
            "dominant_label": "Unclassified Flow",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.4819277108433735,
            "na_confidence_pct": 0.5180722891566265,
            "avg_feature_coverage": 0.8168674698795179,
            "observable_run_pct": 0.9759036144578314,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "QS9",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.19861202908129544,
            "mixed_pct": 0.09616655651024454,
            "instit_pct": 0.4041639127561137,
            "ambiguous_pct": 0.30039656311962987,
            "unobservable_pct": 0.0006609385327164573,
            "unclear_pct": 0.30105750165234635,
            "retail_qty_pct": 0.05847906771930928,
            "mixed_qty_pct": 0.09522379140062277,
            "instit_qty_pct": 0.5081716101028528,
            "ambiguous_qty_pct": 0.33812395810398516,
            "unobservable_qty_pct": 1.5726732299562796e-06,
            "unclear_qty_pct": 0.33812553077721513,
            "retail_notional_pct": 0.05714590278964268,
            "mixed_notional_pct": 0.09422500610801376,
            "instit_notional_pct": 0.508676144801778,
            "ambiguous_notional_pct": 0.33995133859005794,
            "unobservable_notional_pct": 1.6077105075688696e-06,
            "unclear_notional_pct": 0.3399529463005655,
            "run_retail_pct": 0.41694078947368424,
            "run_mixed_pct": 0.10526315789473684,
            "run_instit_pct": 0.18338815789473684,
            "run_unclear_pct": 0.29440789473684215,
            "avg_trade_size": 2569.4089887640453,
            "avg_run_notional": 6393.940460526315,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.009868421052631578,
            "medium_confidence_pct": 0.3207236842105263,
            "low_confidence_pct": 0.26973684210526316,
            "na_confidence_pct": 0.3996710526315789,
            "avg_feature_coverage": 0.8467927631578945,
            "observable_run_pct": 0.9991776315789473,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "ITS",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.2694815780893381,
            "mixed_pct": 0.14802738832735574,
            "instit_pct": 0.34235409194652755,
            "ambiguous_pct": 0.24013694163677862,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.24013694163677862,
            "retail_qty_pct": 0.08894291862218533,
            "mixed_qty_pct": 0.12446840954914352,
            "instit_qty_pct": 0.49956371461005405,
            "ambiguous_qty_pct": 0.2870249572186171,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.2870249572186171,
            "retail_notional_pct": 0.0890577624863218,
            "mixed_notional_pct": 0.12541807014940864,
            "instit_notional_pct": 0.49961767886795594,
            "ambiguous_notional_pct": 0.2859064884963136,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.2859064884963136,
            "run_retail_pct": 0.5720355349555813,
            "run_mixed_pct": 0.13750482811896486,
            "run_instit_pct": 0.1328698339127076,
            "run_unclear_pct": 0.15758980301274622,
            "avg_trade_size": 4041.838849038148,
            "avg_run_notional": 9576.145036693704,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.11317110853611433,
            "medium_confidence_pct": 0.3912707609115489,
            "low_confidence_pct": 0.20046349942062572,
            "na_confidence_pct": 0.2950946311317111,
            "avg_feature_coverage": 0.8612398609501737,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "5DD",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.20635838150289018,
            "mixed_pct": 0.08497109826589595,
            "instit_pct": 0.34104046242774566,
            "ambiguous_pct": 0.3491329479768786,
            "unobservable_pct": 0.018497109826589597,
            "unclear_pct": 0.3676300578034682,
            "retail_qty_pct": 0.05688990182328191,
            "mixed_qty_pct": 0.06311360448807854,
            "instit_qty_pct": 0.49795465170640485,
            "ambiguous_qty_pct": 0.35571528751753156,
            "unobservable_qty_pct": 0.026326554464703132,
            "unclear_qty_pct": 0.3820418419822347,
            "retail_notional_pct": 0.05704430660774542,
            "mixed_notional_pct": 0.0634360102038405,
            "instit_notional_pct": 0.4965053338822479,
            "ambiguous_notional_pct": 0.3565792321249336,
            "unobservable_notional_pct": 0.026435117181232596,
            "unclear_notional_pct": 0.3830143493061662,
            "run_retail_pct": 0.4188679245283019,
            "run_mixed_pct": 0.08427672955974842,
            "run_instit_pct": 0.16226415094339622,
            "run_unclear_pct": 0.33459119496855344,
            "avg_trade_size": 3717.969942196532,
            "avg_run_notional": 8090.676729559748,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Mixed, leaning retail-like",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.3371069182389937,
            "low_confidence_pct": 0.2440251572327044,
            "na_confidence_pct": 0.4188679245283019,
            "avg_feature_coverage": 0.8432704402515722,
            "observable_run_pct": 0.9937106918238994,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "U77",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.47802197802197804,
            "mixed_pct": 0.18681318681318682,
            "instit_pct": 0.14285714285714285,
            "ambiguous_pct": 0.19230769230769232,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.19230769230769232,
            "retail_qty_pct": 0.07446146183538788,
            "mixed_qty_pct": 0.07757439920308803,
            "instit_qty_pct": 0.42995890922674634,
            "ambiguous_qty_pct": 0.4180052297347777,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.4180052297347777,
            "retail_notional_pct": 0.0738004528947822,
            "mixed_notional_pct": 0.0780173669101521,
            "instit_notional_pct": 0.42990829177835493,
            "ambiguous_notional_pct": 0.41827388841671076,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.41827388841671076,
            "run_retail_pct": 0.5753424657534246,
            "run_mixed_pct": 0.18493150684931506,
            "run_instit_pct": 0.0684931506849315,
            "run_unclear_pct": 0.17123287671232876,
            "avg_trade_size": 924.4560439560439,
            "avg_run_notional": 1152.4041095890411,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.21232876712328766,
            "medium_confidence_pct": 0.3219178082191781,
            "low_confidence_pct": 0.1095890410958904,
            "na_confidence_pct": 0.3561643835616438,
            "avg_feature_coverage": 0.845890410958904,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "NXR",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.12,
            "mixed_pct": 0.16,
            "instit_pct": 0.36,
            "ambiguous_pct": 0.24,
            "unobservable_pct": 0.12,
            "unclear_pct": 0.36,
            "retail_qty_pct": 0.01749049429657795,
            "mixed_qty_pct": 0.016138572032108153,
            "instit_qty_pct": 0.06886354034643008,
            "ambiguous_qty_pct": 0.04410646387832699,
            "unobservable_qty_pct": 0.8534009294465569,
            "unclear_qty_pct": 0.8975073933248838,
            "retail_notional_pct": 0.017428873144706782,
            "mixed_notional_pct": 0.01584751139417216,
            "instit_notional_pct": 0.06825064107113162,
            "ambiguous_notional_pct": 0.04265016316729918,
            "unobservable_notional_pct": 0.8558228112226902,
            "unclear_notional_pct": 0.8984729743899894,
            "run_retail_pct": 0.15789473684210525,
            "run_mixed_pct": 0.15789473684210525,
            "run_instit_pct": 0.3157894736842105,
            "run_unclear_pct": 0.3684210526315789,
            "avg_trade_size": 18882.46,
            "avg_run_notional": 24845.342105263157,
            "dominant_bucket": "INSTITUTIONAL",
            "dominant_label": "Mixed, leaning institution-like",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.47368421052631576,
            "na_confidence_pct": 0.5263157894736842,
            "avg_feature_coverage": 0.781578947368421,
            "observable_run_pct": 0.8947368421052632,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "532",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.0,
            "mixed_pct": 0.0,
            "instit_pct": 0.0,
            "ambiguous_pct": 0.0,
            "unobservable_pct": 1.0,
            "unclear_pct": 1.0,
            "retail_qty_pct": 0.0,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": 0.0,
            "unobservable_qty_pct": 1.0,
            "unclear_qty_pct": 1.0,
            "retail_notional_pct": 0.0,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": 0.0,
            "unobservable_notional_pct": 1.0,
            "unclear_notional_pct": 1.0,
            "run_retail_pct": 0.0,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.0,
            "run_unclear_pct": 1.0,
            "avg_trade_size": 300.0,
            "avg_run_notional": 300.0,
            "dominant_bucket": "UNOBSERVABLE",
            "dominant_label": "Not Observable",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.0,
            "na_confidence_pct": 1.0,
            "avg_feature_coverage": 0.55,
            "observable_run_pct": 0.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "KUX",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.5,
            "mixed_pct": 0.5,
            "instit_pct": 0.0,
            "ambiguous_pct": 0.0,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.0,
            "retail_qty_pct": 0.16666666666666666,
            "mixed_qty_pct": 0.8333333333333334,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": 0.0,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.0,
            "retail_notional_pct": 0.20895522388059704,
            "mixed_notional_pct": 0.7910447761194029,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": 0.0,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.0,
            "run_retail_pct": 0.5,
            "run_mixed_pct": 0.5,
            "run_instit_pct": 0.0,
            "run_unclear_pct": 0.0,
            "avg_trade_size": 16.75,
            "avg_run_notional": 16.75,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Mixed, leaning retail-like",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.5,
            "na_confidence_pct": 0.5,
            "avg_feature_coverage": 0.8500000000000001,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          }
        ],
        "30d": [
          {
            "ticker": "TKU",
            "currency": "SGD",
            "is_target": true,
            "retail_pct": 0.2713804713804714,
            "mixed_pct": 0.16296296296296298,
            "instit_pct": 0.37676767676767675,
            "ambiguous_pct": 0.18888888888888888,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.18888888888888888,
            "retail_qty_pct": 0.07968020916200286,
            "mixed_qty_pct": 0.17336813163807901,
            "instit_qty_pct": 0.5044405055988984,
            "ambiguous_qty_pct": 0.24251115360101977,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.24251115360101977,
            "retail_notional_pct": 0.07942217851737726,
            "mixed_notional_pct": 0.17453211120259365,
            "instit_notional_pct": 0.5046588616337074,
            "ambiguous_notional_pct": 0.2413868486463216,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.2413868486463216,
            "run_retail_pct": 0.5493871665465032,
            "run_mixed_pct": 0.14059120403749098,
            "run_instit_pct": 0.15428983417447728,
            "run_unclear_pct": 0.15573179524152847,
            "avg_trade_size": 3459.2488215488215,
            "avg_run_notional": 7407.3316510454215,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.03460706560922855,
            "medium_confidence_pct": 0.40591204037490985,
            "low_confidence_pct": 0.2631578947368421,
            "na_confidence_pct": 0.29632299927901945,
            "avg_feature_coverage": 0.8514059120403749,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "LVR",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.21484375,
            "mixed_pct": 0.0625,
            "instit_pct": 0.31640625,
            "ambiguous_pct": 0.37890625,
            "unobservable_pct": 0.02734375,
            "unclear_pct": 0.40625,
            "retail_qty_pct": 0.06193100143747005,
            "mixed_qty_pct": 0.031264973646382366,
            "instit_qty_pct": 0.5179683756588405,
            "ambiguous_qty_pct": 0.3764973646382367,
            "unobservable_qty_pct": 0.012338284619070435,
            "unclear_qty_pct": 0.3888356492573071,
            "retail_notional_pct": 0.06267164373627769,
            "mixed_notional_pct": 0.03146982846487256,
            "instit_notional_pct": 0.5160971664789683,
            "ambiguous_notional_pct": 0.3778371134778555,
            "unobservable_notional_pct": 0.01192424784202594,
            "unclear_notional_pct": 0.3897613613198814,
            "run_retail_pct": 0.3157894736842105,
            "run_mixed_pct": 0.07017543859649122,
            "run_instit_pct": 0.19298245614035087,
            "run_unclear_pct": 0.42105263157894735,
            "avg_trade_size": 2922.255859375,
            "avg_run_notional": 4374.839181286549,
            "dominant_bucket": "AMBIGUOUS",
            "dominant_label": "Mixed, mostly unclassified",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.5087719298245614,
            "na_confidence_pct": 0.49122807017543857,
            "avg_feature_coverage": 0.8166666666666665,
            "observable_run_pct": 0.9824561403508771,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "QS9",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.2173403632103105,
            "mixed_pct": 0.09431751611013474,
            "instit_pct": 0.38986526069127125,
            "ambiguous_pct": 0.29789103690685415,
            "unobservable_pct": 0.0005858230814294083,
            "unclear_pct": 0.29847685998828355,
            "retail_qty_pct": 0.05523732017405324,
            "mixed_qty_pct": 0.0959470920741064,
            "instit_qty_pct": 0.5048286256363638,
            "ambiguous_qty_pct": 0.3439855613973284,
            "unobservable_qty_pct": 1.4007181481945793e-06,
            "unclear_qty_pct": 0.3439869621154766,
            "retail_notional_pct": 0.05464898748655445,
            "mixed_notional_pct": 0.09492681336373027,
            "instit_notional_pct": 0.506006218759441,
            "ambiguous_notional_pct": 0.34441651394521205,
            "unobservable_notional_pct": 1.4664450621814938e-06,
            "unclear_notional_pct": 0.3444179803902742,
            "run_retail_pct": 0.43980848153214774,
            "run_mixed_pct": 0.1012311901504788,
            "run_instit_pct": 0.17647058823529413,
            "run_unclear_pct": 0.2824897400820794,
            "avg_trade_size": 2496.782425307557,
            "avg_run_notional": 5830.379753761969,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.04035567715458276,
            "medium_confidence_pct": 0.2968536251709986,
            "low_confidence_pct": 0.27906976744186046,
            "na_confidence_pct": 0.38372093023255816,
            "avg_feature_coverage": 0.8461012311901503,
            "observable_run_pct": 0.9993160054719562,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "5DD",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.2262357414448669,
            "mixed_pct": 0.1108998732572877,
            "instit_pct": 0.32953105196451205,
            "ambiguous_pct": 0.31685678073510776,
            "unobservable_pct": 0.016476552598225603,
            "unclear_pct": 0.33333333333333337,
            "retail_qty_pct": 0.06756246126872327,
            "mixed_qty_pct": 0.07480237602212784,
            "instit_qty_pct": 0.4681005426157404,
            "ambiguous_qty_pct": 0.3665150163993894,
            "unobservable_qty_pct": 0.023019603694019133,
            "unclear_qty_pct": 0.3895346200934085,
            "retail_notional_pct": 0.06681759592289302,
            "mixed_notional_pct": 0.07411808467027879,
            "instit_notional_pct": 0.46908578923901467,
            "ambiguous_notional_pct": 0.3667123273855748,
            "unobservable_notional_pct": 0.02326620278223871,
            "unclear_notional_pct": 0.38997853016781353,
            "run_retail_pct": 0.43733153638814015,
            "run_mixed_pct": 0.10714285714285714,
            "run_instit_pct": 0.1522911051212938,
            "run_unclear_pct": 0.3032345013477089,
            "avg_trade_size": 3738.7031051964514,
            "avg_run_notional": 7951.042452830188,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.3288409703504043,
            "low_confidence_pct": 0.26078167115902967,
            "na_confidence_pct": 0.41037735849056606,
            "avg_feature_coverage": 0.8512803234501346,
            "observable_run_pct": 0.9959568733153639,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "ITS",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.24729954299958454,
            "mixed_pct": 0.14270876609887828,
            "instit_pct": 0.3165766514333195,
            "ambiguous_pct": 0.2934150394682177,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.2934150394682177,
            "retail_qty_pct": 0.08768421001282946,
            "mixed_qty_pct": 0.11301872710332346,
            "instit_qty_pct": 0.43205998136558094,
            "ambiguous_qty_pct": 0.3672370815182661,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.3672370815182661,
            "retail_notional_pct": 0.0875735050035376,
            "mixed_notional_pct": 0.11475824216131762,
            "instit_notional_pct": 0.44004536023615615,
            "ambiguous_notional_pct": 0.3576228925989886,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.3576228925989886,
            "run_retail_pct": 0.5428268363829223,
            "run_mixed_pct": 0.14213736409440467,
            "run_instit_pct": 0.12967382657120127,
            "run_unclear_pct": 0.18536197295147175,
            "avg_trade_size": 4193.636580805983,
            "avg_run_notional": 10707.062582869265,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.0869795810129939,
            "medium_confidence_pct": 0.3831874834261469,
            "low_confidence_pct": 0.20233359851498275,
            "na_confidence_pct": 0.3274993370458764,
            "avg_feature_coverage": 0.8643861044815697,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "U77",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.4170403587443946,
            "mixed_pct": 0.16143497757847533,
            "instit_pct": 0.18834080717488788,
            "ambiguous_pct": 0.23318385650224216,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.23318385650224216,
            "retail_qty_pct": 0.06660075498831566,
            "mixed_qty_pct": 0.06273593384864282,
            "instit_qty_pct": 0.4379831026424591,
            "ambiguous_qty_pct": 0.4326802085205824,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.4326802085205824,
            "retail_notional_pct": 0.0656982634320233,
            "mixed_notional_pct": 0.062274311321111636,
            "instit_notional_pct": 0.4388291723242098,
            "ambiguous_notional_pct": 0.43319825292265524,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.43319825292265524,
            "run_retail_pct": 0.5202312138728323,
            "run_mixed_pct": 0.16184971098265896,
            "run_instit_pct": 0.09248554913294797,
            "run_unclear_pct": 0.2254335260115607,
            "avg_trade_size": 1066.7399103139014,
            "avg_run_notional": 1375.0462427745665,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.1791907514450867,
            "medium_confidence_pct": 0.27167630057803466,
            "low_confidence_pct": 0.16184971098265896,
            "na_confidence_pct": 0.3872832369942196,
            "avg_feature_coverage": 0.8387283236994217,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "NXR",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.10810810810810811,
            "mixed_pct": 0.13513513513513514,
            "instit_pct": 0.2972972972972973,
            "ambiguous_pct": 0.2972972972972973,
            "unobservable_pct": 0.16216216216216217,
            "unclear_pct": 0.4594594594594595,
            "retail_qty_pct": 0.016311703112757318,
            "mixed_qty_pct": 0.014887100220813448,
            "instit_qty_pct": 0.09815513925493269,
            "ambiguous_qty_pct": 0.14580810599045516,
            "unobservable_qty_pct": 0.7248379514210413,
            "unclear_qty_pct": 0.8706460574114965,
            "retail_notional_pct": 0.01621229540340468,
            "mixed_notional_pct": 0.01461956177046234,
            "instit_notional_pct": 0.0967887166926167,
            "ambiguous_notional_pct": 0.14520138745590505,
            "unobservable_notional_pct": 0.7271780386776112,
            "unclear_notional_pct": 0.8723794261335163,
            "run_retail_pct": 0.15384615384615385,
            "run_mixed_pct": 0.15384615384615385,
            "run_instit_pct": 0.2692307692307692,
            "run_unclear_pct": 0.42307692307692313,
            "avg_trade_size": 15127.824324324325,
            "avg_run_notional": 21528.05769230769,
            "dominant_bucket": "AMBIGUOUS",
            "dominant_label": "Mixed, mostly unclassified",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.4230769230769231,
            "na_confidence_pct": 0.5769230769230769,
            "avg_feature_coverage": 0.7730769230769232,
            "observable_run_pct": 0.8846153846153846,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "532",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.0,
            "mixed_pct": 0.0,
            "instit_pct": 0.3333333333333333,
            "ambiguous_pct": 0.0,
            "unobservable_pct": 0.6666666666666666,
            "unclear_pct": 0.6666666666666666,
            "retail_qty_pct": 0.0,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.09090909090909091,
            "ambiguous_qty_pct": 0.0,
            "unobservable_qty_pct": 0.9090909090909091,
            "unclear_qty_pct": 0.9090909090909091,
            "retail_notional_pct": 0.0,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.09090909090909091,
            "ambiguous_notional_pct": 0.0,
            "unobservable_notional_pct": 0.9090909090909091,
            "unclear_notional_pct": 0.9090909090909091,
            "run_retail_pct": 0.0,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.3333333333333333,
            "run_unclear_pct": 0.6666666666666666,
            "avg_trade_size": 220.0,
            "avg_run_notional": 220.0,
            "dominant_bucket": "UNOBSERVABLE",
            "dominant_label": "Not Observable",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.3333333333333333,
            "na_confidence_pct": 0.6666666666666666,
            "avg_feature_coverage": 0.6,
            "observable_run_pct": 0.33333333333333337,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "KUX",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.5,
            "mixed_pct": 0.5,
            "instit_pct": 0.0,
            "ambiguous_pct": 0.0,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.0,
            "retail_qty_pct": 0.16666666666666666,
            "mixed_qty_pct": 0.8333333333333334,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": 0.0,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.0,
            "retail_notional_pct": 0.20895522388059704,
            "mixed_notional_pct": 0.7910447761194029,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": 0.0,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.0,
            "run_retail_pct": 0.5,
            "run_mixed_pct": 0.5,
            "run_instit_pct": 0.0,
            "run_unclear_pct": 0.0,
            "avg_trade_size": 16.75,
            "avg_run_notional": 16.75,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Mixed, leaning retail-like",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.5,
            "na_confidence_pct": 0.5,
            "avg_feature_coverage": 0.8500000000000001,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          }
        ]
      },
      "recent_trades": [
        {
          "trade_id": "BMLL-82",
          "timestamp": "2026-03-06T08:59:30.061400",
          "price": 0.23,
          "size": 5700.0,
          "notional": 1311.0,
          "bucket": "RETAIL",
          "confidence": "LOW",
          "run_id": 3476,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-81",
          "timestamp": "2026-03-06T08:57:53.391200",
          "price": 0.225,
          "size": 500.0,
          "notional": 112.5,
          "bucket": "RETAIL",
          "confidence": "MEDIUM",
          "run_id": 3475,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-80",
          "timestamp": "2026-03-06T08:55:18.807200",
          "price": 0.225,
          "size": 4400.0,
          "notional": 990.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 3474,
          "d1": "SINGLE_FILL",
          "d2": "PERSISTENT_POSITIVE_IMPACT",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-79",
          "timestamp": "2026-03-06T08:55:18.686700",
          "price": 0.225,
          "size": 20000.0,
          "notional": 4500.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 3474,
          "d1": "SINGLE_FILL",
          "d2": "PERSISTENT_POSITIVE_IMPACT",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-78",
          "timestamp": "2026-03-06T08:55:11.746600",
          "price": 0.225,
          "size": 600.0,
          "notional": 135.0,
          "bucket": "RETAIL",
          "confidence": "MEDIUM",
          "run_id": 3473,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-77",
          "timestamp": "2026-03-06T08:38:37.856400",
          "price": 0.225,
          "size": 500.0,
          "notional": 112.5,
          "bucket": "RETAIL",
          "confidence": "MEDIUM",
          "run_id": 3472,
          "d1": "SINGLE_FILL",
          "d2": "MOMENTUM_REACTIVE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-76",
          "timestamp": "2026-03-06T08:28:16.211700",
          "price": 0.225,
          "size": 300.0,
          "notional": 67.5,
          "bucket": "RETAIL",
          "confidence": "LOW",
          "run_id": 3471,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-75",
          "timestamp": "2026-03-06T08:28:16.211700",
          "price": 0.225,
          "size": 1200.0,
          "notional": 270.0,
          "bucket": "RETAIL",
          "confidence": "LOW",
          "run_id": 3471,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-74",
          "timestamp": "2026-03-06T08:06:35.597000",
          "price": 0.225,
          "size": 500.0,
          "notional": 112.5,
          "bucket": "RETAIL",
          "confidence": "MEDIUM",
          "run_id": 3470,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-73",
          "timestamp": "2026-03-06T08:01:34.814200",
          "price": 0.225,
          "size": 100.0,
          "notional": 22.5,
          "bucket": "RETAIL",
          "confidence": "MEDIUM",
          "run_id": 3469,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-72",
          "timestamp": "2026-03-06T08:00:25.836400",
          "price": 0.225,
          "size": 300.0,
          "notional": 67.5,
          "bucket": "RETAIL",
          "confidence": "MEDIUM",
          "run_id": 3468,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-71",
          "timestamp": "2026-03-06T08:00:21.309900",
          "price": 0.225,
          "size": 10000.0,
          "notional": 2250.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 3467,
          "d1": "SINGLE_FILL",
          "d2": "PERSISTENT_POSITIVE_IMPACT",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-70",
          "timestamp": "2026-03-06T08:00:00.036200",
          "price": 0.225,
          "size": 100.0,
          "notional": 22.5,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 3466,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-69",
          "timestamp": "2026-03-06T08:00:00.036200",
          "price": 0.225,
          "size": 10000.0,
          "notional": 2250.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 3466,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-68",
          "timestamp": "2026-03-06T08:00:00.036200",
          "price": 0.225,
          "size": 600.0,
          "notional": 135.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 3466,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-67",
          "timestamp": "2026-03-06T08:00:00.035900",
          "price": 0.225,
          "size": 13500.0,
          "notional": 3037.5,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 3466,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-66",
          "timestamp": "2026-03-06T07:58:19.901000",
          "price": 0.225,
          "size": 100.0,
          "notional": 22.5,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 3465,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-65",
          "timestamp": "2026-03-06T07:58:19.901000",
          "price": 0.225,
          "size": 14000.0,
          "notional": 3150.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 3465,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-64",
          "timestamp": "2026-03-06T07:58:02.429300",
          "price": 0.23,
          "size": 200.0,
          "notional": 46.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 3464,
          "d1": "SINGLE_FILL",
          "d2": "MOMENTUM_REACTIVE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-63",
          "timestamp": "2026-03-06T07:58:02.308200",
          "price": 0.225,
          "size": 20000.0,
          "notional": 4500.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 3464,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "MOMENTUM_REACTIVE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-62",
          "timestamp": "2026-03-06T07:58:02.308200",
          "price": 0.225,
          "size": 20000.0,
          "notional": 4500.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 3464,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "MOMENTUM_REACTIVE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-61",
          "timestamp": "2026-03-06T07:58:02.308100",
          "price": 0.225,
          "size": 46000.0,
          "notional": 10350.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 3464,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "MOMENTUM_REACTIVE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-60",
          "timestamp": "2026-03-06T07:54:48.255200",
          "price": 0.225,
          "size": 10000.0,
          "notional": 2250.0,
          "bucket": "RETAIL",
          "confidence": "LOW",
          "run_id": 3463,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-59",
          "timestamp": "2026-03-06T07:46:12.668100",
          "price": 0.225,
          "size": 4000.0,
          "notional": 900.0,
          "bucket": "RETAIL",
          "confidence": "LOW",
          "run_id": 3462,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-58",
          "timestamp": "2026-03-06T07:29:04.073500",
          "price": 0.225,
          "size": 20000.0,
          "notional": 4500.0,
          "bucket": "MIXED",
          "confidence": "NA",
          "run_id": 3461,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-57",
          "timestamp": "2026-03-06T07:20:17.215500",
          "price": 0.225,
          "size": 5000.0,
          "notional": 1125.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 3460,
          "d1": "SINGLE_FILL",
          "d2": "PERSISTENT_POSITIVE_IMPACT",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-56",
          "timestamp": "2026-03-06T07:20:14.595800",
          "price": 0.225,
          "size": 5000.0,
          "notional": 1125.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 3460,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-55",
          "timestamp": "2026-03-06T07:20:01.453600",
          "price": 0.225,
          "size": 21500.0,
          "notional": 4837.5,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 3459,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-54",
          "timestamp": "2026-03-06T07:20:01.423500",
          "price": 0.225,
          "size": 20000.0,
          "notional": 4500.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 3459,
          "d1": "SINGLE_FILL",
          "d2": "PERSISTENT_POSITIVE_IMPACT",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-53",
          "timestamp": "2026-03-06T07:19:57.383600",
          "price": 0.225,
          "size": 18500.0,
          "notional": 4162.5,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 3458,
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
      "total_trades": 2969,
      "price_moving_trades": 406,
      "pct_price_moving": 13.674637925227348,
      "all_movers": {
        "count": 406,
        "avg_size": 2934.304187192118,
        "median_size": 251.5,
        "retail_count": 246,
        "mixed_count": 55,
        "institutional_count": 60,
        "ambiguous_count": 45,
        "unobservable_count": 0,
        "retail_pct": 60.591133004926114,
        "mixed_pct": 13.546798029556651,
        "instit_pct": 14.77832512315271,
        "unclear_pct": 11.083743842364532
      },
      "positive_movers": {
        "count": 202,
        "avg_size": 1154.8143564356435,
        "median_size": 25.5,
        "retail_count": 154,
        "mixed_count": 24,
        "institutional_count": 17,
        "ambiguous_count": 7,
        "unobservable_count": 0,
        "retail_pct": 76.23762376237624,
        "mixed_pct": 11.881188118811881,
        "instit_pct": 8.415841584158416,
        "unclear_pct": 3.4653465346534658
      },
      "negative_movers": {
        "count": 204,
        "avg_size": 4696.348039215686,
        "median_size": 2115.0,
        "retail_count": 92,
        "mixed_count": 31,
        "institutional_count": 43,
        "ambiguous_count": 38,
        "unobservable_count": 0,
        "retail_pct": 45.09803921568628,
        "mixed_pct": 15.196078431372548,
        "instit_pct": 21.07843137254902,
        "unclear_pct": 18.627450980392158
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
        "n_days_short_data": 23,
        "window_days": 21
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
        "2W": {
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
            "avg_short_ratio": 0.0014975955428502027,
            "max_short_ratio": 0.014653168944735494,
            "interpretation": "Low short interest"
          }
        }
      },
      "correlation": {
        "valid": false,
        "correlation": null,
        "interpretation": "No clear relationship (correlation undefined)"
      },
      "peaks": [],
      "short_interest_change": {
        "valid": true,
        "monthly_data": [
          {
            "month": "2026-03",
            "avg_short_ratio": 0.0
          },
          {
            "month": "2026-02",
            "avg_short_ratio": 0.0019135943047530368
          },
          {
            "month": "2026-01",
            "avg_short_ratio": 0.009069182023479604
          }
        ],
        "mom_change": [
          {
            "month": "2026-03",
            "avg_short_ratio": 0.0,
            "change_pct": null
          },
          {
            "month": "2026-02",
            "avg_short_ratio": 0.0019135943047530368,
            "change_pct": null
          },
          {
            "month": "2026-01",
            "avg_short_ratio": 0.009069182023479604,
            "change_pct": 373.9344176011251
          }
        ],
        "interpretation": "Shorts covering significantly (-100% MoM)"
      },
      "short_series": {
        "valid": true,
        "rows": [
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
            "short_ratio": 0.0,
            "short_vol": 0,
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
            "short_ratio": 0.0,
            "short_vol": 0,
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
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 4116600,
            "close": 0.22,
            "return": -0.06382978723404253
          },
          {
            "date": "2026-02-06",
            "short_ratio": 0.0,
            "short_vol": 0,
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
            "return": null
          }
        ]
      },
      "peer_comparison": [
        {
          "ticker": "TKU",
          "avg_short_ratio": 0.0,
          "max_short_ratio": 0.0,
          "is_target": true
        },
        {
          "ticker": "NXR",
          "avg_short_ratio": 8.65901786755033e-05,
          "max_short_ratio": 0.03229813664596273,
          "is_target": false
        },
        {
          "ticker": "QS9",
          "avg_short_ratio": 0.00029038005036423353,
          "max_short_ratio": 0.036503810997868175,
          "is_target": false
        },
        {
          "ticker": "U77",
          "avg_short_ratio": 0.0008358152750363119,
          "max_short_ratio": 0.12345679012345678,
          "is_target": false
        },
        {
          "ticker": "ITS",
          "avg_short_ratio": 0.0031853657823453564,
          "max_short_ratio": 0.1385606874328679,
          "is_target": false
        },
        {
          "ticker": "5DD",
          "avg_short_ratio": 0.004208011395139728,
          "max_short_ratio": 0.36517719568567025,
          "is_target": false
        }
      ]
    },
    "intraday": {
      "session_periods": [
        "1D",
        "1W",
        "2W",
        "1M"
      ],
      "session": {
        "1D": {
          "opening": 2.8617606982696104e-05,
          "continuous": 0.9893542502024371,
          "closing": 0.010617132190580254,
          "auctions": 0.010645749797562951,
          "other": 0.0
        },
        "1W": {
          "opening": 0.008209891873782184,
          "continuous": 0.9814925318403126,
          "closing": 0.004047024153800253,
          "auctions": 0.01850746815968744,
          "other": 0.0
        },
        "2W": {
          "opening": 0.018219452242213056,
          "continuous": 0.9735971565053014,
          "closing": 0.0038220038810936456,
          "auctions": 0.026402843494698534,
          "other": 0.0
        },
        "1M": {
          "opening": 0.014909869343148667,
          "continuous": 0.9496343597838185,
          "closing": 0.029041606773500688,
          "auctions": 0.05036564021618153,
          "other": 0.0
        }
      },
      "hhi": {
        "1D": 0.18343737091353643,
        "1W": 0.20843588765832086,
        "2W": 0.24339104605787565,
        "1M": 0.21173666122312115
      },
      "profile_buckets": [
        {
          "time": "08:30",
          "avg_share": 0.0137
        },
        {
          "time": "09:00",
          "avg_share": 0.11
        },
        {
          "time": "09:30",
          "avg_share": 0.1137
        },
        {
          "time": "10:00",
          "avg_share": 0.0511
        },
        {
          "time": "10:30",
          "avg_share": 0.0314
        },
        {
          "time": "11:00",
          "avg_share": 0.0296
        },
        {
          "time": "11:30",
          "avg_share": 0.0458
        },
        {
          "time": "12:00",
          "avg_share": 0.0023
        },
        {
          "time": "12:30",
          "avg_share": 0.0231
        },
        {
          "time": "13:00",
          "avg_share": 0.1253
        },
        {
          "time": "13:30",
          "avg_share": 0.0415
        },
        {
          "time": "14:00",
          "avg_share": 0.0848
        },
        {
          "time": "14:30",
          "avg_share": 0.0752
        },
        {
          "time": "15:00",
          "avg_share": 0.0482
        },
        {
          "time": "15:30",
          "avg_share": 0.0469
        },
        {
          "time": "16:00",
          "avg_share": 0.0772
        },
        {
          "time": "16:30",
          "avg_share": 0.0622
        },
        {
          "time": "17:00",
          "avg_share": 0.0181
        }
      ],
      "peers_hhi_rows": [
        {
          "ticker": "TKU",
          "auctions_pct": 7.206563932584153,
          "hhi": 0.1924826759316579,
          "interp": {
            "text": "Moderate",
            "cls": "bg-amber-500/20 text-amber-400",
            "you": true
          }
        },
        {
          "ticker": "ITS",
          "auctions_pct": 5.7797396305836894,
          "hhi": 0.24862626941121957,
          "interp": {
            "text": "Moderate",
            "cls": "bg-amber-500/20 text-amber-400"
          }
        },
        {
          "ticker": "LVR",
          "auctions_pct": 2.6366610137244275,
          "hhi": 0.3481194971100047,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "NXR",
          "auctions_pct": 2.519514530747778,
          "hhi": 0.6534944991038285,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "U77",
          "auctions_pct": 8.306392749896002,
          "hhi": 0.5074086575894895,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "532",
          "auctions_pct": 7.900694426359804,
          "hhi": 0.7835497488291402,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "KUX",
          "auctions_pct": 2.7774164544367466,
          "hhi": 0.8114309581918787,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "QS9",
          "auctions_pct": 6.039322863885504,
          "hhi": 0.45778392444001054,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "5DD",
          "auctions_pct": 6.598970403352118,
          "hhi": 0.36617236997165653,
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
