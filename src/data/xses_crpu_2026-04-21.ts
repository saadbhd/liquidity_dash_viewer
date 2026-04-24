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
      "marketCap": 1187053457.6999998,
      "sector": "REIT - Retail",
      "industry": "Real Estate"
    },
    {
      "ticker": "JYEU",
      "name": "Lendlease Reit",
      "marketCap": 1380966532.7099998,
      "sector": "REIT - Diversified",
      "industry": "Real Estate"
    },
    {
      "ticker": "AJBU",
      "name": "Keppel DC Reit",
      "marketCap": 4924982894.610001,
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
    "asof_date": "2026-04-21",
    "industry": "Real Estate",
    "sector": "REIT - Retail",
    "market_cap_display": "831.8M",
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
          "score_pca": 79.74910394265234,
          "score_pca_percentile": 79.74910394265234,
          "rank_pca": 114,
          "total": 558,
          "adv_notional_sgd": 1148189.0,
          "adv_volume_shares": 1726600.0,
          "free_float_shares": 457060801.0,
          "turnover_ratio": 0.0037776155737319506,
          "votes": 413.0,
          "trades": 413.0,
          "spread_pct": 0.007933145915970276,
          "spread_ticks": 1.0564102564102564,
          "amihud": 0.0,
          "volatility": 0.1433653116071401
        },
        "pca": {
          "valid": true,
          "window_days": 1,
          "variance_explained": 0.5201677236251697,
          "loadings": {
            "log_adv": 0.5514808349603177,
            "log_trades": 0.5078747432124273,
            "log_turnover": 0.5138961370493252,
            "neg_spread": 0.3650104275716945,
            "neg_amihud": 0.04774729490730222,
            "neg_vol": -0.1957817095571683
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
          "peer_median_adv": 387435.15827013314,
          "peer_median_score_pca": 66.84587813620072,
          "peer_median_trades": 378.0,
          "peer_median_volatility": 0.19031847883146655,
          "peer_median_spread_pct": 0.009665419152118326,
          "peer_median_spread_ticks": 1.000103993344426,
          "peer_median_amihud": 3.0552335135750077e-09,
          "peer_median_turnover_ratio": 0.0005561184490012316,
          "target_vs_peer": {
            "score_pca_delta": 12.9,
            "adv_delta_pct": 196.4,
            "trades_delta_pct": 9.26,
            "volatility_delta_pct": 24.67,
            "spread_pct_delta_pct": 17.92,
            "spread_ticks_delta_pct": 5.63,
            "amihud_delta_pct": 100.0,
            "turnover_ratio_delta_pct": 579.28
          }
        },
        "peer_liquidity": [
          {
            "ticker": "CRPU",
            "score_pca": 79.74910394265234,
            "rank_pca": 114,
            "adv": 1148189.0,
            "trades": 413.0,
            "volatility": 0.1433653116071401,
            "spread_pct": 0.007933145915970276,
            "spread_ticks": 1.0564102564102564,
            "amihud": 0.0,
            "turnover_ratio": 0.0037776155737319506,
            "is_target": true
          },
          {
            "ticker": "ODBU",
            "score_pca": 55.376344086021504,
            "rank_pca": 250,
            "adv": 40434.31654026627,
            "trades": 31.0,
            "volatility": 0.18159812993066043,
            "spread_pct": 0.010635988712828313,
            "spread_ticks": 1.1136363636363635,
            "amihud": 2.378025755872282e-07,
            "turnover_ratio": 0.00010276576749033808,
            "is_target": false
          },
          {
            "ticker": "D5IU",
            "score_pca": 50.89605734767025,
            "rank_pca": 275,
            "adv": 5131.0,
            "trades": 10.0,
            "volatility": 1.469613012006543,
            "spread_pct": 0.15384615384615383,
            "spread_ticks": 1.0,
            "amihud": 0.0,
            "turnover_ratio": 0.00023127213723764348,
            "is_target": false
          },
          {
            "ticker": "BMGU",
            "score_pca": 12.903225806451612,
            "rank_pca": 487,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.0,
            "spread_pct": 0.15756035578144842,
            "spread_ticks": 13.777777777777779,
            "amihud": null,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "AU8U",
            "score_pca": 78.31541218637993,
            "rank_pca": 122,
            "adv": 734436.0,
            "trades": 725.0,
            "volatility": 0.13917931217067325,
            "spread_pct": 0.007277956560244679,
            "spread_ticks": 1.0,
            "amihud": 2.002336807147406e-08,
            "turnover_ratio": 0.0008809647607648198,
            "is_target": false
          },
          {
            "ticker": "JYEU",
            "score_pca": 91.0394265232975,
            "rank_pca": 51,
            "adv": 5643227.999999999,
            "trades": 1335.0,
            "volatility": 0.24764024948971228,
            "spread_pct": 0.008694849591408342,
            "spread_ticks": 1.0,
            "amihud": 3.0552335135750077e-09,
            "turnover_ratio": 0.011754196574610042,
            "is_target": false
          },
          {
            "ticker": "AJBU",
            "score_pca": 96.59498207885304,
            "rank_pca": 20,
            "adv": 41188065.0,
            "trades": 2839.0,
            "volatility": 0.19903882773227266,
            "spread_pct": 0.004182668410242471,
            "spread_ticks": 1.000207986688852,
            "amihud": 1.0201209190742791e-10,
            "turnover_ratio": 0.01059001415710405,
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
              "mean": 0.26134674409359304,
              "median": 0.13119927769224105,
              "min": 0.0,
              "max": 6.608197362010048,
              "p5": 0.0,
              "p95": 1.0294986899736356,
              "count": 558
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 3718135.0091166436,
              "median": 19180.0,
              "min": 0.0,
              "max": 199570560.0,
              "p5": 0.0,
              "p95": 19633819.65,
              "count": 558
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.11133620546487365,
              "median": 0.027958207803580777,
              "min": 0.0002366563546844375,
              "max": 1.2631578947368423,
              "p5": 0.003339571273178032,
              "p95": 0.5917338709677419,
              "count": 556
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.013255502203697445,
              "median": 0.00045468242353972503,
              "min": 0.0,
              "max": 3.7543619847653016,
              "p5": 0.0,
              "p95": 0.019058272900743405,
              "count": 551
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 8.074211559425465e-05,
              "median": 1.0271944715452783e-08,
              "min": 0.0,
              "max": 0.010683760683760675,
              "p5": 0.0,
              "p95": 2.7508247694102132e-05,
              "count": 417
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 474.89068100358423,
              "median": 10.0,
              "min": 0.0,
              "max": 12415.0,
              "p5": 0.0,
              "p95": 3028.9999999999977,
              "count": 558
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.3415283138923337,
              "median": 0.15458573290798056,
              "min": 0.0,
              "max": 1.469613012006543,
              "p5": 0.029926341827616304,
              "p95": 1.1467547229018273,
              "count": 8
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 24335217.664567534,
              "median": 941312.5,
              "min": 0.0,
              "max": 178969531.0,
              "p5": 1795.8500000000001,
              "p95": 120667052.14999992,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.04433977692505271,
              "median": 0.008452701198907847,
              "min": 0.0040897171163381775,
              "max": 0.15756035578144842,
              "p5": 0.0041992404705772195,
              "p95": 0.15626038510409532,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.004310273691207291,
              "median": 0.0013522329561198188,
              "min": 0.0,
              "max": 0.020427773868427968,
              "p5": 3.596801862161833e-05,
              "p95": 0.01581145670916395,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 3.6960128681042676e-08,
              "median": 1.8703073735651922e-10,
              "min": 0.0,
              "max": 2.378025755872282e-07,
              "p5": 0.0,
              "p95": 1.724688133325018e-07,
              "count": 7
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1852.125,
              "median": 329.0,
              "min": 0.0,
              "max": 11616.0,
              "p5": 3.5000000000000004,
              "p95": 8172.349999999995,
              "count": 8
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 7935215.719423377,
              "median": 387435.15827013314,
              "min": 0.0,
              "max": 41188065.0,
              "p5": 1282.75,
              "p95": 32301855.75,
              "count": 6
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 823.3333333333334,
              "median": 378.0,
              "min": 0.0,
              "max": 2839.0,
              "p5": 2.5,
              "p95": 2463.0,
              "count": 6
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.37284492188831025,
              "median": 0.19031847883146655,
              "min": 0.0,
              "max": 1.469613012006543,
              "p5": 0.03479482804266831,
              "p95": 1.1641198213773354,
              "count": 6
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.05703299548372099,
              "median": 0.009665419152118326,
              "min": 0.004182668410242471,
              "max": 0.15756035578144842,
              "p5": 0.004956490447743022,
              "p95": 0.15663180529762477,
              "count": 6
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 3.148603688017166,
              "median": 1.000103993344426,
              "min": 1.0,
              "max": 13.777777777777779,
              "p5": 1.0,
              "p95": 10.611742424242426,
              "count": 6
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 5.219663785283694e-08,
              "median": 3.0552335135750077e-09,
              "min": 0.0,
              "max": 2.378025755872282e-07,
              "p5": 2.0402418381485584e-11,
              "p95": 1.9424673408407733e-07,
              "count": 5
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.003926535566201149,
              "median": 0.0005561184490012316,
              "min": 0.0,
              "max": 0.011754196574610042,
              "p5": 2.569144187258452e-05,
              "p95": 0.011463150970233545,
              "count": 6
            }
          },
          "returns": {
            "window_days": 1,
            "n_obs": 1,
            "stock": 0.0,
            "market": 0.0021762559479174826,
            "sector": 0.004385964912280826,
            "peers": 0.0021008403361344463,
            "vs_market": -0.0021762559479174826,
            "vs_sector": -0.004385964912280826,
            "vs_peers": -0.0021008403361344463
          }
        }
      },
      "30d": {
        "label": "1M",
        "window_days": 21,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 21,
          "score_pca": 83.87096774193549,
          "score_pca_percentile": 83.87096774193549,
          "rank_pca": 91,
          "total": 558,
          "adv_notional_sgd": 758584.5,
          "adv_volume_shares": 1176100.0,
          "free_float_shares": 457060801.0,
          "turnover_ratio": 0.002573180630294305,
          "votes": 413.0,
          "trades": 413.0,
          "spread_pct": 0.007843137254901968,
          "spread_ticks": 1.0,
          "amihud": 5.0607336622513225e-09,
          "volatility": 0.12870054244920792
        },
        "pca": {
          "valid": true,
          "window_days": 21,
          "variance_explained": 0.526427902705686,
          "loadings": {
            "log_adv": 0.5451955175196238,
            "log_trades": 0.4988128365513369,
            "log_turnover": 0.4995997390427249,
            "neg_spread": 0.41456809808169526,
            "neg_amihud": 0.06466942361680451,
            "neg_vol": 0.16822265072978845
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
          "peer_median_adv": 582740.3012578993,
          "peer_median_score_pca": 77.24014336917563,
          "peer_median_trades": 409.5,
          "peer_median_volatility": 0.20157276314959988,
          "peer_median_spread_pct": 0.009834724175247231,
          "peer_median_spread_ticks": 1.0037682814911204,
          "peer_median_amihud": 4.1161900976872796e-09,
          "peer_median_turnover_ratio": 0.0008564575811453538,
          "target_vs_peer": {
            "score_pca_delta": 6.63,
            "adv_delta_pct": 30.2,
            "trades_delta_pct": 0.85,
            "volatility_delta_pct": 36.15,
            "spread_pct_delta_pct": 20.25,
            "spread_ticks_delta_pct": -0.38,
            "amihud_delta_pct": -22.95,
            "turnover_ratio_delta_pct": 200.44
          }
        },
        "peer_liquidity": [
          {
            "ticker": "CRPU",
            "score_pca": 83.87096774193549,
            "rank_pca": 91,
            "adv": 758584.5,
            "trades": 413.0,
            "volatility": 0.12870054244920792,
            "spread_pct": 0.007843137254901968,
            "spread_ticks": 1.0,
            "amihud": 5.0607336622513225e-09,
            "turnover_ratio": 0.002573180630294305,
            "is_target": true
          },
          {
            "ticker": "ODBU",
            "score_pca": 69.35483870967742,
            "rank_pca": 172,
            "adv": 173710.60251579864,
            "trades": 31.0,
            "volatility": 0.15427281969342196,
            "spread_pct": 0.010635988712828313,
            "spread_ticks": 1.0869565217391304,
            "amihud": 3.26024370625904e-08,
            "turnover_ratio": 0.000450066579074847,
            "is_target": false
          },
          {
            "ticker": "D5IU",
            "score_pca": 41.03942652329749,
            "rank_pca": 330,
            "adv": 5131.0,
            "trades": 14.0,
            "volatility": 1.5566403732720935,
            "spread_pct": 0.15384615384615383,
            "spread_ticks": 1.0,
            "amihud": 0.0,
            "turnover_ratio": 0.00023127213723764348,
            "is_target": false
          },
          {
            "ticker": "BMGU",
            "score_pca": 20.967741935483872,
            "rank_pca": 442,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.20805081479575477,
            "spread_pct": 0.10704960835509135,
            "spread_ticks": 9.090909090909092,
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
            "volatility": 0.1908474648912929,
            "spread_pct": 0.007716827383690226,
            "spread_ticks": 1.0064274236743438,
            "amihud": 7.015741183414496e-09,
            "turnover_ratio": 0.0012628485832158606,
            "is_target": false
          },
          {
            "ticker": "JYEU",
            "score_pca": 95.3405017921147,
            "rank_pca": 27,
            "adv": 7168927.499999999,
            "trades": 2800.0,
            "volatility": 0.24347736763094063,
            "spread_pct": 0.00903345963766615,
            "spread_ticks": 1.0,
            "amihud": 1.2166390119600636e-09,
            "turnover_ratio": 0.01550422741180483,
            "is_target": false
          },
          {
            "ticker": "AJBU",
            "score_pca": 97.31182795698925,
            "rank_pca": 16,
            "adv": 25242931.0,
            "trades": 3666.0,
            "volatility": 0.19509471150344496,
            "spread_pct": 0.004474984142267051,
            "spread_ticks": 1.001109139307897,
            "amihud": 3.120990590179181e-10,
            "turnover_ratio": 0.006955974309001116,
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
              "mean": 0.668174770993076,
              "median": 0.38756218162966455,
              "min": 0.0,
              "max": 10.387919701256179,
              "p5": 0.0,
              "p95": 1.9708802838519561,
              "count": 558
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 3116163.2221016763,
              "median": 12795.5,
              "min": 0.0,
              "max": 256901995.0,
              "p5": 0.0,
              "p95": 12714416.099999962,
              "count": 558
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.10868948856965904,
              "median": 0.03312728830288472,
              "min": 0.00026170922585241186,
              "max": 1.2507433102081267,
              "p5": 0.003382287234148161,
              "p95": 0.49520399556783024,
              "count": 556
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.003921598655798779,
              "median": 0.00023173533297420035,
              "min": 0.0,
              "max": 0.659152330103487,
              "p5": 0.0,
              "p95": 0.011339327567896278,
              "count": 551
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 0.0002598941040169018,
              "median": 1.4061617935597627e-07,
              "min": 0.0,
              "max": 0.11111111111111112,
              "p5": 0.0,
              "p95": 0.00011672215018358743,
              "count": 543
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 469.421146953405,
              "median": 6.0,
              "min": 0.0,
              "max": 11222.0,
              "p5": 0.0,
              "p95": 2827.699999999999,
              "count": 558
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.344752654332182,
              "median": 0.18843358976657176,
              "min": 0.12870054244920792,
              "max": 1.5566403732720935,
              "p5": 0.13155875763196756,
              "p95": 1.0846340278053743,
              "count": 8
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 9665747.137814475,
              "median": 819340.25,
              "min": 0.0,
              "max": 65900017.0,
              "p5": 1795.8500000000001,
              "p95": 45850844.849999964,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.03814746931024561,
              "median": 0.0085310169536581,
              "min": 0.004332557752007294,
              "max": 0.15384615384615383,
              "p5": 0.004403967122511916,
              "p95": 0.13746736292428194,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0023920775536421953,
              "median": 0.0012292027896863788,
              "min": 0.0,
              "max": 0.008113139420650676,
              "p5": 8.094524803317522e-05,
              "p95": 0.007132235252300504,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 7.50150306812873e-07,
              "median": 5.693216014736079e-09,
              "min": 0.0,
              "max": 5.949406249256326e-06,
              "p5": 2.928400997950012e-11,
              "p95": 3.878524914988516e-06,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1205.0,
              "median": 472.0,
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
              "mean": 5597078.350419301,
              "median": 582740.3012578993,
              "min": 0.0,
              "max": 25242931.0,
              "p5": 1282.75,
              "p95": 20724430.125,
              "count": 6
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1216.5,
              "median": 409.5,
              "min": 0.0,
              "max": 3666.0,
              "p5": 3.5,
              "p95": 3449.5,
              "count": 6
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.4247305919644915,
              "median": 0.20157276314959988,
              "min": 0.15427281969342196,
              "max": 1.5566403732720935,
              "p5": 0.1634164809928897,
              "p95": 1.2283496218618053,
              "count": 6
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.04879283701294949,
              "median": 0.009834724175247231,
              "min": 0.004474984142267051,
              "max": 0.15384615384615383,
              "p5": 0.005285444952622845,
              "p95": 0.1421470174733882,
              "count": 6
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 2.3642336959384105,
              "median": 1.0037682814911204,
              "min": 1.0,
              "max": 9.090909090909092,
              "p5": 1.0,
              "p95": 7.0899209486166015,
              "count": 6
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 9.984255275955514e-07,
              "median": 4.1161900976872796e-09,
              "min": 0.0,
              "max": 5.949406249256326e-06,
              "p5": 7.802476475447953e-11,
              "p95": 4.470205296207892e-06,
              "count": 6
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.004067398170055717,
              "median": 0.0008564575811453538,
              "min": 0.0,
              "max": 0.01550422741180483,
              "p5": 5.781803430941087e-05,
              "p95": 0.013367164136103902,
              "count": 6
            }
          },
          "returns": {
            "window_days": 21,
            "n_obs": 21,
            "stock": 0.0390625,
            "market": 0.013354531880008791,
            "sector": 0.018753663675275423,
            "peers": -0.004054855309977401,
            "vs_market": 0.02570796811999121,
            "vs_sector": 0.020308836324724577,
            "vs_peers": 0.0431173553099774
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
          "adv_notional_sgd": 720015.0,
          "adv_volume_shares": 1043500.0,
          "free_float_shares": 457060801.0,
          "turnover_ratio": 0.0022830660553627307,
          "votes": 364.0,
          "trades": 364.0,
          "spread_pct": 0.007533215975138409,
          "spread_ticks": 1.0,
          "amihud": 4.021536696331225e-09,
          "volatility": 0.17684531619998253
        },
        "pca": {
          "valid": true,
          "window_days": 63,
          "variance_explained": 0.5645166331613203,
          "loadings": {
            "log_adv": 0.5143126384679254,
            "log_trades": 0.46253110338722436,
            "log_turnover": 0.47055584495054575,
            "neg_spread": 0.4245599831872723,
            "neg_amihud": 0.2525039584496115,
            "neg_vol": 0.23688659045572105
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
          "peer_median_adv": 755746.5794479352,
          "peer_median_score_pca": 76.07526881720429,
          "peer_median_trades": 453.0,
          "peer_median_volatility": 0.2101199035536625,
          "peer_median_spread_pct": 0.009553749516105256,
          "peer_median_spread_ticks": 1.0024494277010672,
          "peer_median_amihud": 3.18529273878108e-09,
          "peer_median_turnover_ratio": 0.001469671947858049,
          "target_vs_peer": {
            "score_pca_delta": 7.97,
            "adv_delta_pct": -4.7,
            "trades_delta_pct": -19.65,
            "volatility_delta_pct": 15.84,
            "spread_pct_delta_pct": 21.15,
            "spread_ticks_delta_pct": -0.24,
            "amihud_delta_pct": -26.25,
            "turnover_ratio_delta_pct": 55.35
          }
        },
        "peer_liquidity": [
          {
            "ticker": "CRPU",
            "score_pca": 84.05017921146953,
            "rank_pca": 90,
            "adv": 720015.0,
            "trades": 364.0,
            "volatility": 0.17684531619998253,
            "spread_pct": 0.007533215975138409,
            "spread_ticks": 1.0,
            "amihud": 4.021536696331225e-09,
            "turnover_ratio": 0.0022830660553627307,
            "is_target": true
          },
          {
            "ticker": "ODBU",
            "score_pca": 65.41218637992831,
            "rank_pca": 194,
            "adv": 115658.15889587054,
            "trades": 21.0,
            "volatility": 0.19960076673144633,
            "spread_pct": 0.010412649440802169,
            "spread_ticks": 1.0909090909090908,
            "amihud": 3.395898784189385e-08,
            "turnover_ratio": 0.0002911696745559579,
            "is_target": false
          },
          {
            "ticker": "D5IU",
            "score_pca": 46.415770609319,
            "rank_pca": 300,
            "adv": 29917.0,
            "trades": 26.0,
            "volatility": 1.4019447004137033,
            "spread_pct": 0.15384615384615383,
            "spread_ticks": 1.0,
            "amihud": 0.0,
            "turnover_ratio": 0.0012020787389654813,
            "is_target": false
          },
          {
            "ticker": "BMGU",
            "score_pca": 20.60931899641577,
            "rank_pca": 444,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.3907138167818419,
            "spread_pct": 0.10327158060701613,
            "spread_ticks": 8.733333333333333,
            "amihud": 8.783627207968937e-06,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "AU8U",
            "score_pca": 86.73835125448028,
            "rank_pca": 75,
            "adv": 1395835.0,
            "trades": 880.0,
            "volatility": 0.2008239782849067,
            "spread_pct": 0.007493574058804418,
            "spread_ticks": 1.0038948393378773,
            "amihud": 5.3384159323742095e-09,
            "turnover_ratio": 0.0017372651567506168,
            "is_target": false
          },
          {
            "ticker": "JYEU",
            "score_pca": 95.6989247311828,
            "rank_pca": 25,
            "adv": 8533513.5,
            "trades": 2568.0,
            "volatility": 0.21941582882241834,
            "spread_pct": 0.008694849591408342,
            "spread_ticks": 1.0,
            "amihud": 1.0321695451879508e-09,
            "turnover_ratio": 0.01651362278247,
            "is_target": false
          },
          {
            "ticker": "AJBU",
            "score_pca": 97.84946236559139,
            "rank_pca": 13,
            "adv": 26923050.0,
            "trades": 3666.0,
            "volatility": 0.1497859793489671,
            "spread_pct": 0.00443781743149637,
            "spread_ticks": 1.001004016064257,
            "amihud": 2.0660391036526782e-10,
            "turnover_ratio": 0.007337272581811808,
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
              "mean": 0.6877855482487119,
              "median": 0.45588664842554166,
              "min": 0.0,
              "max": 8.24425508675489,
              "p5": 0.1563543819797988,
              "p95": 2.148447693804954,
              "count": 558
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 3209618.572422703,
              "median": 12028.0,
              "min": 0.0,
              "max": 285980477.7,
              "p5": 0.0,
              "p95": 13564889.1,
              "count": 558
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.10014269441397228,
              "median": 0.02933599589582911,
              "min": 0.0002652156920799096,
              "max": 1.3542204201990415,
              "p5": 0.0035585729255406644,
              "p95": 0.49935452487417914,
              "count": 556
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.005810054714596733,
              "median": 0.0002875303194495809,
              "min": 0.0,
              "max": 1.9774569903104608,
              "p5": 0.0,
              "p95": 0.009654366606121637,
              "count": 551
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.3449540442170468e-05,
              "median": 1.4114112512129947e-07,
              "min": 0.0,
              "max": 0.0007965556065062838,
              "p5": 0.0,
              "p95": 4.56125595369136e-05,
              "count": 555
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 456.2374551971326,
              "median": 6.5,
              "min": 0.0,
              "max": 11391.0,
              "p5": 0.0,
              "p95": 2602.2499999999977,
              "count": 558
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.36001203944487975,
              "median": 0.20021237250817653,
              "min": 0.11383851570822606,
              "max": 1.4019447004137033,
              "p5": 0.13589089588034084,
              "p95": 1.0480138911425514,
              "count": 8
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 10222093.144861983,
              "median": 768085.5,
              "min": 0.0,
              "max": 66927648.0,
              "p5": 10470.95,
              "p95": 47623001.79999997,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.03754421694817962,
              "median": 0.00828272342594144,
              "min": 0.004249022843416297,
              "max": 0.15384615384615383,
              "p5": 0.0043422226262970305,
              "p95": 0.1361450532124556,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.002685348166612301,
              "median": 0.001469671947858049,
              "min": 0.0,
              "max": 0.007967128679338773,
              "p5": 0.00010190938609458527,
              "p95": 0.007595886556178876,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.1042679319791989e-06,
              "median": 4.679976314352717e-09,
              "min": 0.0,
              "max": 8.783627207968937e-06,
              "p5": 3.3556930318298625e-11,
              "p95": 5.721243330924468e-06,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1210.375,
              "median": 473.0,
              "min": 0.0,
              "max": 5927.0,
              "p5": 7.3500000000000005,
              "p95": 4511.599999999998,
              "count": 8
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 6166328.943149312,
              "median": 755746.5794479352,
              "min": 0.0,
              "max": 26923050.0,
              "p5": 7479.25,
              "p95": 22325665.875,
              "count": 6
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1193.5,
              "median": 453.0,
              "min": 0.0,
              "max": 3666.0,
              "p5": 5.25,
              "p95": 3391.5,
              "count": 6
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.4270475117305472,
              "median": 0.2101199035536625,
              "min": 0.1497859793489671,
              "max": 1.4019447004137033,
              "p5": 0.1622396761945869,
              "p95": 1.149136979505738,
              "count": 6
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.04802610416261353,
              "median": 0.009553749516105256,
              "min": 0.00443781743149637,
              "max": 0.15384615384615383,
              "p5": 0.005201756588323382,
              "p95": 0.1412025105363694,
              "count": 6
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 2.30485687994076,
              "median": 1.0024494277010672,
              "min": 1.0,
              "max": 8.733333333333333,
              "p5": 1.0,
              "p95": 6.822727272727272,
              "count": 6
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.4706938975331263e-06,
              "median": 3.18529273878108e-09,
              "min": 0.0,
              "max": 8.783627207968937e-06,
              "p5": 5.1650977591316955e-11,
              "p95": 6.596210152937176e-06,
              "count": 6
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.004513568155758978,
              "median": 0.001469671947858049,
              "min": 0.0,
              "max": 0.01651362278247,
              "p5": 7.279241863898947e-05,
              "p95": 0.014219535232305453,
              "count": 6
            }
          },
          "returns": {
            "window_days": 63,
            "n_obs": 63,
            "stock": -0.036231884057971286,
            "market": 0.03724602937193433,
            "sector": -0.023379022833385776,
            "peers": -0.02635955737460627,
            "vs_market": -0.07347791342990562,
            "vs_sector": -0.01285286122458551,
            "vs_peers": -0.009872326683365018
          }
        }
      },
      "6m": {
        "label": "6M",
        "window_days": 126,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 126,
          "score_pca": 85.30465949820788,
          "score_pca_percentile": 85.30465949820788,
          "rank_pca": 83,
          "total": 558,
          "adv_notional_sgd": 598704.75,
          "adv_volume_shares": 872400.0,
          "free_float_shares": 457060801.0,
          "turnover_ratio": 0.0019087176106357894,
          "votes": 383.5,
          "trades": 383.5,
          "spread_pct": 0.007398318729788046,
          "spread_ticks": 1.0,
          "amihud": 4.541135179291274e-09,
          "volatility": 0.14328952096576747
        },
        "pca": {
          "valid": true,
          "window_days": 126,
          "variance_explained": 0.578795695622964,
          "loadings": {
            "log_adv": 0.501723909451949,
            "log_trades": 0.44723444801998136,
            "log_turnover": 0.4557922612485608,
            "neg_spread": 0.4302574881453756,
            "neg_amihud": 0.26468465332649666,
            "neg_vol": 0.29211027021093083
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
          "peer_median_adv": 651735.8645502663,
          "peer_median_score_pca": 76.70250896057348,
          "peer_median_trades": 381.75,
          "peer_median_volatility": 0.19190048195358944,
          "peer_median_spread_pct": 0.009072421553757596,
          "peer_median_spread_ticks": 1.0042949762213755,
          "peer_median_amihud": 3.2470394635556872e-09,
          "peer_median_turnover_ratio": 0.0012257746222750538,
          "target_vs_peer": {
            "score_pca_delta": 8.6,
            "adv_delta_pct": -8.1,
            "trades_delta_pct": 0.46,
            "volatility_delta_pct": 25.33,
            "spread_pct_delta_pct": 18.45,
            "spread_ticks_delta_pct": -0.43,
            "amihud_delta_pct": -39.85,
            "turnover_ratio_delta_pct": 55.72
          }
        },
        "peer_liquidity": [
          {
            "ticker": "CRPU",
            "score_pca": 85.30465949820788,
            "rank_pca": 83,
            "adv": 598704.75,
            "trades": 383.5,
            "volatility": 0.14328952096576747,
            "spread_pct": 0.007398318729788046,
            "spread_ticks": 1.0,
            "amihud": 4.541135179291274e-09,
            "turnover_ratio": 0.0019087176106357894,
            "is_target": true
          },
          {
            "ticker": "ODBU",
            "score_pca": 66.30824372759857,
            "rank_pca": 189,
            "adv": 94513.2291005325,
            "trades": 21.5,
            "volatility": 0.17191660791186797,
            "spread_pct": 0.010046712327059847,
            "spread_ticks": 1.015401332262484,
            "amihud": 3.395898784189385e-08,
            "turnover_ratio": 0.00024250007840129282,
            "is_target": false
          },
          {
            "ticker": "D5IU",
            "score_pca": 49.283154121863795,
            "rank_pca": 284,
            "adv": 36889.5,
            "trades": 33.0,
            "volatility": 1.3006746075492528,
            "spread_pct": 0.1176470588235293,
            "spread_ticks": 1.0,
            "amihud": 0.0,
            "turnover_ratio": 0.0011302676360524014,
            "is_target": false
          },
          {
            "ticker": "BMGU",
            "score_pca": 19.71326164874552,
            "rank_pca": 449,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.5679791886585933,
            "spread_pct": 0.10895241863685819,
            "spread_ticks": 9.126984126984127,
            "amihud": 5.678978692471941e-06,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "AU8U",
            "score_pca": 87.09677419354838,
            "rank_pca": 73,
            "adv": 1208958.5,
            "trades": 730.5,
            "volatility": 0.17917418643517788,
            "spread_pct": 0.00659361668534551,
            "spread_ticks": 1.0078349763433823,
            "amihud": 5.458407282732866e-09,
            "turnover_ratio": 0.0013212816084977059,
            "is_target": false
          },
          {
            "ticker": "JYEU",
            "score_pca": 95.87813620071685,
            "rank_pca": 24,
            "adv": 7860405.5,
            "trades": 1882.0,
            "volatility": 0.20462677747200098,
            "spread_pct": 0.008098130780455346,
            "spread_ticks": 1.000170750459421,
            "amihud": 1.0356716443785084e-09,
            "turnover_ratio": 0.015346086429244727,
            "is_target": false
          },
          {
            "ticker": "AJBU",
            "score_pca": 97.4910394265233,
            "rank_pca": 15,
            "adv": 19248890.18,
            "trades": 3231.0,
            "volatility": 0.13746381366160196,
            "spread_pct": 0.004428487683346552,
            "spread_ticks": 1.0007549760993686,
            "amihud": 2.6972829512577055e-10,
            "turnover_ratio": 0.005045826660139881,
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
              "mean": 0.6936033085055983,
              "median": 0.443703817162301,
              "min": 0.0,
              "max": 6.961609009417294,
              "p5": 0.15369172164128975,
              "p95": 2.026958014344107,
              "count": 558
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 2562632.3165911403,
              "median": 11751.624999999998,
              "min": 0.0,
              "max": 240950815.0,
              "p5": 0.0,
              "p95": 10361319.637499996,
              "count": 558
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.09506767757504428,
              "median": 0.028750082067329326,
              "min": 0.00027281479518183793,
              "max": 1.267605633802817,
              "p5": 0.0035759782629230207,
              "p95": 0.48213174723043983,
              "count": 556
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.003225065768673444,
              "median": 0.0002667457024303497,
              "min": 0.0,
              "max": 0.8552501483092743,
              "p5": 0.0,
              "p95": 0.007149468709311697,
              "count": 551
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 9.76437555976351e-06,
              "median": 1.7330836773744484e-07,
              "min": 0.0,
              "max": 0.0006620397444526588,
              "p5": 0.0,
              "p95": 4.254759927303258e-05,
              "count": 557
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 374.9166666666667,
              "median": 6.5,
              "min": 0.0,
              "max": 10145.5,
              "p5": 0.0,
              "p95": 2021.6249999999984,
              "count": 558
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.34957259609905006,
              "median": 0.16999017145517775,
              "min": 0.11576446367153023,
              "max": 1.3006746075492528,
              "p5": 0.12539823372451325,
              "p95": 1.0442312109375216,
              "count": 8
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 8594469.497387566,
              "median": 656706.125,
              "min": 0.0,
              "max": 55576180.0,
              "p5": 12911.325,
              "p95": 39808547.87499998,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.03351319598780411,
              "median": 0.008065971591968263,
              "min": 0.004267253241731738,
              "max": 0.1176470588235293,
              "p5": 0.004337012358515765,
              "p95": 0.1146039347581944,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.00231870290441081,
              "median": 0.0012257746222750538,
              "min": 0.0,
              "max": 0.006703440813375584,
              "p5": 8.48750274404525e-05,
              "p95": 0.006569650253822697,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 7.162673623617227e-07,
              "median": 4.99977123101207e-09,
              "min": 0.0,
              "max": 5.678978692471941e-06,
              "p5": 3.416998366066311e-11,
              "p95": 3.7032217958514214e-06,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1094.9375,
              "median": 405.5,
              "min": 0.0,
              "max": 5372.0,
              "p5": 7.525,
              "p95": 4118.824999999998,
              "count": 8
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 4741609.484850089,
              "median": 651735.8645502663,
              "min": 0.0,
              "max": 19248890.18,
              "p5": 9222.375,
              "p95": 16401769.01,
              "count": 6
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 983.0,
              "median": 381.75,
              "min": 0.0,
              "max": 3231.0,
              "p5": 5.375,
              "p95": 2893.75,
              "count": 6
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.42697253028141574,
              "median": 0.19190048195358944,
              "min": 0.13746381366160196,
              "max": 1.3006746075492528,
              "p5": 0.14607701222416847,
              "p95": 1.117500752826588,
              "count": 6
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.042627737489432445,
              "median": 0.009072421553757596,
              "min": 0.004428487683346552,
              "max": 0.1176470588235293,
              "p5": 0.004969769933846292,
              "p95": 0.11547339877686152,
              "count": 6
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 2.3585243603581305,
              "median": 1.0042949762213755,
              "min": 1.0,
              "max": 9.126984126984127,
              "p5": 1.0000426876148554,
              "p95": 7.099088428303716,
              "count": 6
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 9.532835812560119e-07,
              "median": 3.2470394635556872e-09,
              "min": 0.0,
              "max": 5.678978692471941e-06,
              "p5": 6.743207378144264e-11,
              "p95": 4.267723766314429e-06,
              "count": 6
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.003847660402056001,
              "median": 0.0012257746222750538,
              "min": 0.0,
              "max": 0.015346086429244727,
              "p5": 6.0625019600323205e-05,
              "p95": 0.012771021486968515,
              "count": 6
            }
          },
          "returns": {
            "window_days": 126,
            "n_obs": 126,
            "stock": -0.007462686567163979,
            "market": 0.15847559496208463,
            "sector": -0.00909846500890732,
            "peers": -0.027955742837484254,
            "vs_market": -0.1659382815292486,
            "vs_sector": 0.0016357784417433407,
            "vs_peers": 0.020493056270320276
          }
        }
      }
    },
    "period_insights": {
      "1d": {
        "liquidity": "Near-term access looks orderly, with balanced displayed depth and a 1 tick spread supporting steady trading conditions.",
        "market_comparison": "The stock outperformed the market over one month, rising 3.9% compared with 1.3%, which supports a firmer trading backdrop."
      },
      "30d": {
        "liquidity": "Monthly tradability looks average, with access supported by a solid liquidity score but not lifted by standout average volume.",
        "market_comparison": "Return 3.9% vs peers -0.4%."
      },
      "3m": {
        "liquidity": "Three-month tradability appears stable, with no sign of a clear deterioration in access from the broader liquidity profile.",
        "market_comparison": "Recent price leadership has been stronger than peers over one month, which helps keep trading conditions constructive."
      },
      "6m": {
        "liquidity": "Six-month tradability is solid, with a liquidity score of 85.3 compared with the peer median of 76.7, indicating better structural access than most peers.",
        "market_comparison": "Return -0.7% vs peers -2.8%."
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
          "median": 0.2489533630048293,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "24.9%",
          "display_range": null,
          "display_text": "24.9%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "share_pct",
          "value_pct": 24.9,
          "plain_english": "Market explains about 24.9% of price moves in the current state."
        },
        "sector_share": {
          "median": 0.5080260170734626,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "50.8%",
          "display_range": null,
          "display_text": "50.8%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "share_pct",
          "value_pct": 50.8,
          "plain_english": "Sector explains about 50.8% of price moves in the current state."
        },
        "company_share": {
          "median": 0.24302061992170815,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "24.3%",
          "display_range": null,
          "display_text": "24.3%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "share_pct",
          "value_pct": 24.3,
          "plain_english": "Company-specific explains about 24.3% of price moves in the current state."
        },
        "basis": "current_state"
      },
      "current_sensitivities": {
        "beta_market": {
          "median": -2.0784394904271304,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "-2.08",
          "display_range": null,
          "display_text": "-2.08",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "beta",
          "strength_label": "High",
          "plain_english": "High market link: a 1% market move has lined up with about a 2.08% stock move in the opposite direction in this state.",
          "value_num": -2.08
        },
        "beta_stock_lag": {
          "median": -0.9742751011111811,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "-0.97",
          "display_range": null,
          "display_text": "-0.97",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "lag_beta",
          "value_num": -0.97
        },
        "beta_sector": {
          "median": 1.2647622774105682,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "1.26",
          "display_range": null,
          "display_text": "1.26",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "beta",
          "strength_label": "Moderate",
          "plain_english": "Moderate sector link: a 1% sector move has lined up with about a 1.26% stock move in the same direction in this state.",
          "value_num": 1.26
        },
        "beta_market_lag": {
          "median": 0.5880430120317047,
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
          "median": 1.4931788096194434,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "1.49",
          "display_range": null,
          "display_text": "1.49",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "lag_beta",
          "value_num": 1.49
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
          "period_label": "2025-04-24 to 2025-04-30",
          "n_obs": 5,
          "partial_month": true,
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.5254231026338203,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "52.5%",
            "display_range": null,
            "display_text": "52.5%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
            "kind": "share_pct",
            "value_pct": 52.5,
            "plain_english": "Market explains about 52.5% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.5254231026338203,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "52.5%",
              "display_range": null,
              "display_text": "52.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
              "kind": "share_pct",
              "value_pct": 52.5,
              "plain_english": "Market explains about 52.5% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.3346450752018102,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "33.5%",
              "display_range": null,
              "display_text": "33.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
              "kind": "share_pct",
              "value_pct": 33.5,
              "plain_english": "Sector explains about 33.5% of price moves in the current state."
            },
            "company_share": {
              "median": 0.13993182216436956,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "14.0%",
              "display_range": null,
              "display_text": "14.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
              "kind": "share_pct",
              "value_pct": 14.0,
              "plain_english": "Company-specific explains about 14.0% of price moves in the current state."
            }
          },
          "summary": "Apr: Mostly market-driven, though based on only 5 trading days."
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
          "period_label": "2026-04-01 to 2026-04-21",
          "n_obs": 14,
          "partial_month": false,
          "dominant_driver": "sector",
          "dominant_driver_label": "Sector",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.4779632740546165,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "47.8%",
            "display_range": null,
            "display_text": "47.8%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 14 trading days.",
            "kind": "share_pct",
            "value_pct": 47.8,
            "plain_english": "Sector explains about 47.8% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.1444249886621205,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "14.4%",
              "display_range": null,
              "display_text": "14.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 14 trading days.",
              "kind": "share_pct",
              "value_pct": 14.4,
              "plain_english": "Market explains about 14.4% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.4779632740546165,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "47.8%",
              "display_range": null,
              "display_text": "47.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 14 trading days.",
              "kind": "share_pct",
              "value_pct": 47.8,
              "plain_english": "Sector explains about 47.8% of price moves in the current state."
            },
            "company_share": {
              "median": 0.3776117372832629,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "37.8%",
              "display_range": null,
              "display_text": "37.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 14 trading days.",
              "kind": "share_pct",
              "value_pct": 37.8,
              "plain_english": "Company-specific explains about 37.8% of price moves in the current state."
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
            "median": 0.005585309480740537,
            "low": 0.005585309480740537,
            "high": 0.005585309480740537
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
            "median": 0.011266944367824248,
            "low": 0.011266944367824248,
            "high": 0.011266944367824248
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
        "market_link_display": "-2.08",
        "sector_link_display": "1.26",
        "market_link_explainer": "High market link. A 1% market move has lined up with about a 2.08% stock move in the opposite direction in this state. This is a point estimate from 251 trading days.",
        "sector_link_explainer": "Moderate sector link. A 1% sector move has lined up with about a 1.26% stock move in the same direction in this state. This is a point estimate from 251 trading days.",
        "stock_persistence_display": "-0.97",
        "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
        "history_limited_note": "Read is based on 251 trading days versus the 252-day target."
      },
      "current_summary": {
        "regime_label": "High Volatility",
        "dominant_driver": "sector",
        "dominant_driver_label": "Sector",
        "driver_share_pct": 50.8,
        "driver_share_display": "50.8%",
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
            "median": 0.005585309480740537,
            "low": 0.005585309480740537,
            "high": 0.005585309480740537
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
            "median": 0.011266944367824248,
            "low": 0.011266944367824248,
            "high": 0.011266944367824248
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
        "text": "Liquidity score: 85.3 — Strong",
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
    "liq_subtitle": "Six-month liquidity stands above peers, while current trading conditions remain orderly rather than unusually deep.",
    "market_comparison_title": "How You Compare to the Market",
    "market_comparison_subtitle": "Context relative to market, sector, and peer medians.",
    "perf_title": "Stock Performance",
    "perf_subtitle": "Recent performance is firmer than the main comparison groups, with a 1M return of +3.9% compared with peers at -0.4% and the market at +1.3%.",
    "perf_insight": "Performance is mixed relative to comparison groups. Recent price performance is stronger than the main comparison groups, so the tape has a firmer return backdrop than peers. Recent trend context is too limited to say whether access has changed from the 1M baseline.",
    "drivers_title": "What Moves Your Stock Price?",
    "drivers_subtitle": "Sector moves are the main influence on trading, accounting for 50.8% of the tape. That matters because the stock is still moving meaningfully with the broader group rather than on company news alone.",
    "drivers_strip": [
      {
        "title": "Current Driver (Last 5 Days)",
        "text": "Over the last 5 trading days, moves are mainly sector-driven, accounting for about 50.8% of price changes. Other influences are market 24.9%, and company-specific 24.3%."
      },
      {
        "title": "Driver Mix",
        "text": "Based on the last 5 trading days, current mix is market 24.9%, sector 50.8%, and company-specific 24.3%."
      },
      {
        "title": "Monthly Trend",
        "text": "The driver mix has shifted from company-driven to sector-driven over Feb to Apr."
      }
    ],
    "drivers_pie_title": "Current Driver Mix (Last 5 Days)",
    "drivers_pie_note": "Based on the last 5 trading days, current split is market 24.9%, sector 50.8%, and company-specific 24.3%.",
    "lead_lag_title": "",
    "lead_lag_note": "",
    "rolling_title": "Monthly Driver Shift",
    "rolling_latest_label": "Latest: {period}",
    "rolling_note": "Each bar shows the monthly split between market-, sector-, and company-driven moves.",
    "drivers_bottom_line": "The tape is being led more by sector direction than by stock-specific drivers, with sector factors at 50.8%. That keeps trading conditions tied closely to the broader group backdrop.",
    "drivers_wtd_title": "Key Reads",
    "drivers_wtd_list": [
      "Sector is the main driver now, accounting for 50.8% of recent price moves.",
      "The monthly pattern has shifted from company-driven in February and March to mostly sector-driven in April."
    ],
    "regime_title": "Market State",
    "regime_subtitle": "The market backdrop looks orderly, with a balanced book and a 1-tick spread supporting steady execution conditions.",
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
    "exec_check_subtitle": "Combines the final continuous-session displayed book before close, trade-size stress tests based on Apr 21, 2025 to Apr 21, 2026 (254 trading days • 99,146 trades), large sell-side orders observed today, and intraday spread/depth during the continuous trading session.",
    "order_book_title": "Order Book Depth (Available Liquidity)",
    "order_book_note": "Depth shown is based on top 10 bid and top 10 ask levels.",
    "peer_capacity_title": "Peer Capacity Context",
    "peer_capacity_note": "Immediate displayed depth broadly matches the stronger monthly liquidity read.",
    "impact_summary_title": "Estimated Price Impact (Sell Orders)",
    "impact_summary_subtitle": "Approximate price impact (%) for sell orders.",
    "exec_check_insight": "Displayed liquidity is balanced, with top-10 bid depth at 1.01x ask depth and a 1-tick spread. That supports steady execution alongside the stronger six-month liquidity standing.",
    "trader_composition_title": "Who's Trading Your Stock?",
    "trader_composition_subtitle": "Shows whether trading is mostly retail-like, institution-like, mixed, or unclassified.",
    "trader_retail_threshold": "Retail-like flow",
    "trader_mixed_threshold": "Mixed flow",
    "trader_instit_threshold": "Institution-like flow",
    "peer_trader_title": "Peer Comparison: Trader Mix",
    "peer_trader_subtitle": "How the trader mix compares with peers.",
    "price_moving_title": "Which Trades Move the Price?",
    "price_moving_subtitle": "Price-moving trades are 24.1% of total trades.",
    "intraday_title": "When Does Trading Happen?",
    "intraday_subtitle": "Current execution conditions look balanced, with bid and ask depth closely matched and the spread at 1 tick.",
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
    "intraday_insight": "The order book is balanced, with top-10 bid depth at 1.01x ask depth and a 1-tick spread. That matters because immediate execution conditions look orderly rather than one-sided.",
    "short_title": "Short Selling & Lending",
    "short_subtitle": "Current trading conditions look balanced, with orderly spread and depth supporting execution.",
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
    "exec_subtitle": "Liquidity is mixed for the stock’s size, with stronger six-month peer standing and balanced current execution.",
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
        "value": "85.3/100",
        "sub": "Peer median 76.7 (+8.6 pts)",
        "interp": {
          "text": "Strong",
          "cls": "interpretation-good",
          "icon": "◆"
        }
      },
      {
        "title": "Volume vs Peers",
        "value": "S$598.7K",
        "sub": "Peer median S$651.7K",
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
    "liq_insight": "6M liquidity is strong: score 85.3 vs peer median 76.7 (+8.6 pts). Recent trend context is too limited to say whether access has changed from the 1M baseline.",
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
        "value": "1.01x",
        "note": "Bid depth / ask depth on displayed top-10 levels",
        "color": "text-slate-300"
      }
    ],
    "impact_summary_cards": [
      {
        "title": "~S$100K sell",
        "text": "Estimated impact ~-0.39% with 100.0% fill.",
        "cls": "ok"
      },
      {
        "title": "S$1.0M sell",
        "text": "Estimated impact ~-1.07% with 100.0% fill.",
        "cls": "warn"
      },
      {
        "title": "S$2.5M sell",
        "text": "Estimated impact ~-2.10% with 100.0% fill.",
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
        "subtext": "Rank 83/558",
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
        "subtext": "Peer median S$651.7K",
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
        "value": "50.8",
        "suffix": "sector",
        "bar_pct": 51,
        "color_value": "text-amber-400",
        "color_bar": "bg-amber-500",
        "subtext": "Market 24.9% • Company 24.3%",
        "interpretation": {
          "text": "Sector",
          "cls": "interpretation-neutral",
          "icon": "◆"
        }
      }
    ],
    "exec_takeaways": [
      "Liquidity is mixed for the stock’s size, with a 6M liquidity score of 85.3 compared with a peer median of 76.7. That points to better structural access than peers, even if the overall picture is not uniformly strong.",
      "Recent price performance is firmer, with the stock up 3.9% over 1M compared with peers down 0.4% and the market up 1.3%. That matters because a stronger return backdrop can help sustain trading interest.",
      "Current execution looks orderly, with top-10 bid depth at 1.01x ask depth and a 1-tick spread, while sector factors account for 50.8% of the tape. That means access is balanced in the book, but trading is still being shaped meaningfully by the broader group."
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
      "overall": "6M liquidity is strong: score 85.3 vs peer median 76.7 (+8.6 pts). Recent trend context is too limited to say whether access has changed from the 1M baseline.",
      "strengths": [
        "6M score 85.3 vs peer median 76.7 (+8.6 pts)."
      ],
      "concerns": [],
      "peer_context": "Primary-period score gap vs peers: +8.6 pts."
    },
    "market_comparison": {
      "returns": {
        "insight": "6M return is -0.7%, better than sector and peers, but worse than market, which shows price performance is mixed across comparison groups.",
        "vs_market": "Worse than market: -0.7% vs market 15.8%.",
        "vs_sector": "Better than sector: -0.7% vs sector -0.9%.",
        "vs_peers": "Better than peers: -0.7% vs peers -2.8%."
      },
      "adv": {
        "insight": "ADV is S$598.7K, better than market, which supports stronger day-to-day trading size than comparable names.",
        "vs_market": "Better than market: S$598.7K vs market S$11.8K.",
        "vs_sector": "In line with sector: S$598.7K vs sector S$656.7K.",
        "vs_peers": "In line with peers: S$598.7K vs peers S$651.7K."
      },
      "spread": {
        "insight": "Spread is 0.74%, better than market and peers, which keeps trading costs more competitive than comparable names.",
        "vs_market": "Better than market: 0.74% vs market 2.88%.",
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
        "insight": "Volatility is 14.33%, better than market, sector, and peers, which suggests day-to-day price swings are more contained than comparable names.",
        "vs_market": "Better than market: 14.33% vs market 44.37%.",
        "vs_sector": "Better than sector: 14.33% vs sector 17.00%.",
        "vs_peers": "Better than peers: 14.33% vs peers 19.19%."
      },
      "trades": {
        "insight": "Trades is 384, better than market, which supports more fully reflective of day-to-day access day-to-day activity than comparable names.",
        "vs_market": "Better than market: 384 vs market 6.",
        "vs_sector": "In line with sector: 384 vs sector 406.",
        "vs_peers": "In line with peers: 384 vs peers 382."
      },
      "amihud": {
        "insight": "Price impact is 4.54e-09, better than market, but worse than peers, which shows price impact is mixed across comparison groups.",
        "vs_market": "Better than market: 4.54e-09 vs market 1.73e-07.",
        "vs_sector": "In line with sector: 4.54e-09 vs sector 5.00e-09.",
        "vs_peers": "Worse than peers: 4.54e-09 vs peers 3.25e-09."
      }
    },
    "performance": {
      "overall": "Recent returns are stronger than the main comparison groups, with the stock up 3.9% over 1M compared with peers down 0.4% and the market up 1.3%. That move is broadly confirmed by liquidity rather than contradicted, as the 6M liquidity score of 85.3 sits 8.6 points above the peer median and current trading conditions remain orderly with a 1 tick spread and top-10 bid depth at 1.01x ask depth.",
      "conclusion": "The move looks mainly sector-linked and is broadly supported by solid liquidity."
    },
    "drivers": {
      "overall": "Sector moves are leading the stock now, with 50.8% of recent price action explained by the sector. That matters because the tape is being set more by broader industry sentiment than by stock-specific news.",
      "beta": "This sector-led pattern sits alongside a firmer return backdrop, with the stock up 3.9% over one month compared with peers down 0.4% and the market up 1.3%. That matters because the stock is participating in sector strength while still outperforming its main comparison groups.",
      "rolling_change": "The driver mix has become more balanced over the last three months, moving from clearly company-driven in February to mostly sector in March and mostly sector-driven in April. That matters because the current pattern looks more like a shift in what is moving the stock than a continuation of the earlier company-led tape."
    },
    "regime": {
      "overall": "High volatility is the active backdrop, but trading conditions are not dislocated because the spread is 1 tick and top-10 bid depth is 1.01x ask depth. That matters because price moves may stay larger even while immediate execution remains broadly orderly.",
      "current": "The stock is currently in a high-volatility state, which means price swings are running above its normal range. That matters because the tape is likely to feel less steady than in calmer periods.",
      "transitions": "This higher-volatility phase looks fairly persistent, with a typical run length of about 10.3 days. That matters because the current backdrop appears more settled than short-lived, even if the overall read is mixed.",
      "trading_implications": "Trading conditions look choppier rather than impaired, as displayed depth is balanced and the spread remains at 1 tick. That matters because liquidity can still be usable even while day-to-day price movement stays elevated."
    },
    "execution": {
      "overall": "Displayed liquidity looks balanced right now because top-10 bid depth is 1.01x ask depth and the spread is 1 tick. That matters because the book is showing two-way access rather than a one-sided setup.",
      "concern": "The main caution is that trade-size context is drawn from Ap, 2025 to Ap, 2026 across 254 trading days and 99,146 trades, so the book read is the cleaner signal for current conditions. That matters because immediate depth is more relevant than historical size bands when judging today's execution setup.",
      "peer_context": "The current book supports the broader picture because balanced depth and a 1-tick spread sit comfortably alongside a six-month liquidity score of 85.3, compared with a peer median of 76.7. That matters because the stronger peer standing is visible in the displayed book rather than contradicted by it."
    },
    "trader_composition": {
      "overall": "Flow looks mixed on individual trade count and value, so the trading base is not clearly dominated by either retail or institutional activity.",
      "retail_heavy": "Retail-like trades account for 59.9% of individual trade count but only 9.4% of trade value, while institution-like trades are 11.0% of count and 47.9% of value. That split shows frequent smaller trades alongside a meaningful share of value from larger participants, which makes the flow mix look balanced rather than one-sided.",
      "institutional_gap": "Institution-like activity is a much smaller share of individual trade count than retail-like activity, but it carries nearly half of total trade value. That matters because value visible support is present even though it comes from fewer trades.",
      "peer_comparison": "The mix stands out as balanced rather than extreme, with retail-like activity leading by count and institution-like activity carrying a large share of value. That makes the trading profile look less one-directional than a purely retail- or institution-led tape."
    },
    "price_moving": {
      "overall": "Price-moving activity is present, but the broader read remains mixed because trade count and trade value point in different directions. Retail-like trades dominate individual trade count at 59.9%, while institution-like trades account for 47.9% of trade value on just 11.0% of count. That matters because price formation is likely being shaped by fewer higher-value trades rather than by the largest number of prints alone.",
      "interpretation": "",
      "asymmetry": ""
    },
    "short_selling": {
      "overall": "Moderate short interest Recent trend context is too limited to say whether access has changed from the 1M baseline.",
      "level": "Moderate short interest",
      "correlation": "Moderate negative - shorts somewhat predict drops",
      "trend": "Short pressure has dropped sharply, with shorts covering 78% month on month, so this is becoming less of a factor in the current picture. That matters because a falling short overhang is less likely to distort trading relative to the broader sector-led backdrop.",
      "peaks": "5 notable peak days identified."
    },
    "intraday": {
      "overall": "Session split is open 3.6%, continuous 87.3%, and close 7.9%. Current trading concentration score is 0.227.",
      "hhi_interpretation": "Trading looks reasonably well distributed through the day, with a concentration score of 0.227 indicating activity is not heavily confined to a narrow window. That supports a steadier intraday liquidity profile.",
      "best_times": "The continuous session is the clearest source of liquidity, given it captures 87.3% of trading activity. This matters because execution conditions are more likely to be supported during the main part of the day than at the open or close.",
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
        85.30465949820788,
        66.30824372759857,
        49.283154121863795,
        19.71326164874552,
        87.09677419354838,
        95.87813620071685,
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
        94513.2291005325,
        36889.5,
        0.0,
        1208958.5,
        7860405.5,
        19248890.18
      ],
      "total": 558
    },
    "market_comparison": {
      "sector_name": "REIT - Retail",
      "sector_count": 8,
      "market_count": 558,
      "company": {
        "volatility": 0.14328952096576747,
        "adv": 598704.75,
        "spread_pct": 0.007398318729788046,
        "turnover_ratio": 0.0019087176106357894,
        "amihud": 4.541135179291274e-09,
        "trades": 383.5
      },
      "market": {
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.6936033085055983,
          "median": 0.443703817162301,
          "min": 0.0,
          "max": 6.961609009417294,
          "p5": 0.15369172164128975,
          "p95": 2.026958014344107,
          "count": 558
        },
        "adv": {
          "direction": "higher_is_better",
          "mean": 2562632.3165911403,
          "median": 11751.624999999998,
          "min": 0.0,
          "max": 240950815.0,
          "p5": 0.0,
          "p95": 10361319.637499996,
          "count": 558
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.09506767757504428,
          "median": 0.028750082067329326,
          "min": 0.00027281479518183793,
          "max": 1.267605633802817,
          "p5": 0.0035759782629230207,
          "p95": 0.48213174723043983,
          "count": 556
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.003225065768673444,
          "median": 0.0002667457024303497,
          "min": 0.0,
          "max": 0.8552501483092743,
          "p5": 0.0,
          "p95": 0.007149468709311697,
          "count": 551
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 9.76437555976351e-06,
          "median": 1.7330836773744484e-07,
          "min": 0.0,
          "max": 0.0006620397444526588,
          "p5": 0.0,
          "p95": 4.254759927303258e-05,
          "count": 557
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 374.9166666666667,
          "median": 6.5,
          "min": 0.0,
          "max": 10145.5,
          "p5": 0.0,
          "p95": 2021.6249999999984,
          "count": 558
        }
      },
      "sector": {
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.34957259609905006,
          "median": 0.16999017145517775,
          "min": 0.11576446367153023,
          "max": 1.3006746075492528,
          "p5": 0.12539823372451325,
          "p95": 1.0442312109375216,
          "count": 8
        },
        "adv": {
          "direction": "higher_is_better",
          "mean": 8594469.497387566,
          "median": 656706.125,
          "min": 0.0,
          "max": 55576180.0,
          "p5": 12911.325,
          "p95": 39808547.87499998,
          "count": 8
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.03351319598780411,
          "median": 0.008065971591968263,
          "min": 0.004267253241731738,
          "max": 0.1176470588235293,
          "p5": 0.004337012358515765,
          "p95": 0.1146039347581944,
          "count": 8
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.00231870290441081,
          "median": 0.0012257746222750538,
          "min": 0.0,
          "max": 0.006703440813375584,
          "p5": 8.48750274404525e-05,
          "p95": 0.006569650253822697,
          "count": 8
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 7.162673623617227e-07,
          "median": 4.99977123101207e-09,
          "min": 0.0,
          "max": 5.678978692471941e-06,
          "p5": 3.416998366066311e-11,
          "p95": 3.7032217958514214e-06,
          "count": 8
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 1094.9375,
          "median": 405.5,
          "min": 0.0,
          "max": 5372.0,
          "p5": 7.525,
          "p95": 4118.824999999998,
          "count": 8
        }
      },
      "peers": {
        "adv": {
          "direction": "higher_is_better",
          "mean": 4741609.484850089,
          "median": 651735.8645502663,
          "min": 0.0,
          "max": 19248890.18,
          "p5": 9222.375,
          "p95": 16401769.01,
          "count": 6
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 983.0,
          "median": 381.75,
          "min": 0.0,
          "max": 3231.0,
          "p5": 5.375,
          "p95": 2893.75,
          "count": 6
        },
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.42697253028141574,
          "median": 0.19190048195358944,
          "min": 0.13746381366160196,
          "max": 1.3006746075492528,
          "p5": 0.14607701222416847,
          "p95": 1.117500752826588,
          "count": 6
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.042627737489432445,
          "median": 0.009072421553757596,
          "min": 0.004428487683346552,
          "max": 0.1176470588235293,
          "p5": 0.004969769933846292,
          "p95": 0.11547339877686152,
          "count": 6
        },
        "spread_ticks": {
          "direction": "neutral",
          "mean": 2.3585243603581305,
          "median": 1.0042949762213755,
          "min": 1.0,
          "max": 9.126984126984127,
          "p5": 1.0000426876148554,
          "p95": 7.099088428303716,
          "count": 6
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 9.532835812560119e-07,
          "median": 3.2470394635556872e-09,
          "min": 0.0,
          "max": 5.678978692471941e-06,
          "p5": 6.743207378144264e-11,
          "p95": 4.267723766314429e-06,
          "count": 6
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.003847660402056001,
          "median": 0.0012257746222750538,
          "min": 0.0,
          "max": 0.015346086429244727,
          "p5": 6.0625019600323205e-05,
          "p95": 0.012771021486968515,
          "count": 6
        }
      }
    },
    "returns": [
      {
        "horizon": "1M",
        "stock": 0.0390625,
        "market": 0.013354531880008791,
        "sector": 0.018753663675275423,
        "peers": -0.004054855309977401
      },
      {
        "horizon": "3M",
        "stock": -0.036231884057971286,
        "market": 0.03724602937193433,
        "sector": -0.023379022833385776,
        "peers": -0.02635955737460627
      },
      {
        "horizon": "6M",
        "stock": -0.007462686567163979,
        "market": 0.15847559496208463,
        "sector": -0.00909846500890732,
        "peers": -0.027955742837484254
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
      "share_market": 0.2489533630048293,
      "share_sector": 0.5080260170734626,
      "share_idio": 0.24302061992170815,
      "beta_market": -2.0784394904271304,
      "beta_sector": 1.2647622774105682,
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
            "median": 0.2489533630048293,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "24.9%",
            "display_range": null,
            "display_text": "24.9%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "share_pct",
            "value_pct": 24.9,
            "plain_english": "Market explains about 24.9% of price moves in the current state."
          },
          "sector_share": {
            "median": 0.5080260170734626,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "50.8%",
            "display_range": null,
            "display_text": "50.8%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "share_pct",
            "value_pct": 50.8,
            "plain_english": "Sector explains about 50.8% of price moves in the current state."
          },
          "company_share": {
            "median": 0.24302061992170815,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "24.3%",
            "display_range": null,
            "display_text": "24.3%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "share_pct",
            "value_pct": 24.3,
            "plain_english": "Company-specific explains about 24.3% of price moves in the current state."
          },
          "basis": "current_state"
        },
        "current_sensitivities": {
          "beta_market": {
            "median": -2.0784394904271304,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "-2.08",
            "display_range": null,
            "display_text": "-2.08",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "beta",
            "strength_label": "High",
            "plain_english": "High market link: a 1% market move has lined up with about a 2.08% stock move in the opposite direction in this state.",
            "value_num": -2.08
          },
          "beta_stock_lag": {
            "median": -0.9742751011111811,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "-0.97",
            "display_range": null,
            "display_text": "-0.97",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "lag_beta",
            "value_num": -0.97
          },
          "beta_sector": {
            "median": 1.2647622774105682,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "1.26",
            "display_range": null,
            "display_text": "1.26",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "beta",
            "strength_label": "Moderate",
            "plain_english": "Moderate sector link: a 1% sector move has lined up with about a 1.26% stock move in the same direction in this state.",
            "value_num": 1.26
          },
          "beta_market_lag": {
            "median": 0.5880430120317047,
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
            "median": 1.4931788096194434,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "1.49",
            "display_range": null,
            "display_text": "1.49",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "lag_beta",
            "value_num": 1.49
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
            "period_label": "2025-04-24 to 2025-04-30",
            "n_obs": 5,
            "partial_month": true,
            "dominant_driver": "market",
            "dominant_driver_label": "Market",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.5254231026338203,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "52.5%",
              "display_range": null,
              "display_text": "52.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
              "kind": "share_pct",
              "value_pct": 52.5,
              "plain_english": "Market explains about 52.5% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.5254231026338203,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "52.5%",
                "display_range": null,
                "display_text": "52.5%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
                "kind": "share_pct",
                "value_pct": 52.5,
                "plain_english": "Market explains about 52.5% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.3346450752018102,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "33.5%",
                "display_range": null,
                "display_text": "33.5%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
                "kind": "share_pct",
                "value_pct": 33.5,
                "plain_english": "Sector explains about 33.5% of price moves in the current state."
              },
              "company_share": {
                "median": 0.13993182216436956,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "14.0%",
                "display_range": null,
                "display_text": "14.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
                "kind": "share_pct",
                "value_pct": 14.0,
                "plain_english": "Company-specific explains about 14.0% of price moves in the current state."
              }
            },
            "summary": "Apr: Mostly market-driven, though based on only 5 trading days."
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
            "period_label": "2026-04-01 to 2026-04-21",
            "n_obs": 14,
            "partial_month": false,
            "dominant_driver": "sector",
            "dominant_driver_label": "Sector",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.4779632740546165,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "47.8%",
              "display_range": null,
              "display_text": "47.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 14 trading days.",
              "kind": "share_pct",
              "value_pct": 47.8,
              "plain_english": "Sector explains about 47.8% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.1444249886621205,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "14.4%",
                "display_range": null,
                "display_text": "14.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 14 trading days.",
                "kind": "share_pct",
                "value_pct": 14.4,
                "plain_english": "Market explains about 14.4% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.4779632740546165,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "47.8%",
                "display_range": null,
                "display_text": "47.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 14 trading days.",
                "kind": "share_pct",
                "value_pct": 47.8,
                "plain_english": "Sector explains about 47.8% of price moves in the current state."
              },
              "company_share": {
                "median": 0.3776117372832629,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "37.8%",
                "display_range": null,
                "display_text": "37.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 14 trading days.",
                "kind": "share_pct",
                "value_pct": 37.8,
                "plain_english": "Company-specific explains about 37.8% of price moves in the current state."
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
              "median": 0.005585309480740537,
              "low": 0.005585309480740537,
              "high": 0.005585309480740537
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
              "median": 0.011266944367824248,
              "low": 0.011266944367824248,
              "high": 0.011266944367824248
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
          "market_link_display": "-2.08",
          "sector_link_display": "1.26",
          "market_link_explainer": "High market link. A 1% market move has lined up with about a 2.08% stock move in the opposite direction in this state. This is a point estimate from 251 trading days.",
          "sector_link_explainer": "Moderate sector link. A 1% sector move has lined up with about a 1.26% stock move in the same direction in this state. This is a point estimate from 251 trading days.",
          "stock_persistence_display": "-0.97",
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "history_limited_note": "Read is based on 251 trading days versus the 252-day target."
        },
        "current_summary": {
          "regime_label": "High Volatility",
          "dominant_driver": "sector",
          "dominant_driver_label": "Sector",
          "driver_share_pct": 50.8,
          "driver_share_display": "50.8%",
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
          "period_label": "2025-04-24 to 2025-04-30",
          "n_obs": 5,
          "partial_month": true,
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "regime_label": null,
          "summary": "Apr: Mostly market-driven, though based on only 5 trading days.",
          "share_market": 0.5254231026338203,
          "share_sector": 0.3346450752018102,
          "share_company": 0.13993182216436956,
          "share_market_display": "52.5%",
          "share_sector_display": "33.5%",
          "share_company_display": "14.0%",
          "dominant_share_display": "52.5%"
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
          "period_label": "2026-04-01 to 2026-04-21",
          "n_obs": 14,
          "partial_month": false,
          "dominant_driver": "sector",
          "dominant_driver_label": "Sector",
          "regime_label": null,
          "summary": "Apr: Mostly sector-driven.",
          "share_market": 0.1444249886621205,
          "share_sector": 0.4779632740546165,
          "share_company": 0.3776117372832629,
          "share_market_display": "14.4%",
          "share_sector_display": "47.8%",
          "share_company_display": "37.8%",
          "dominant_share_display": "47.8%"
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
              "median": 0.005585309480740537,
              "low": 0.005585309480740537,
              "high": 0.005585309480740537
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
              "median": 0.011266944367824248,
              "low": 0.011266944367824248,
              "high": 0.011266944367824248
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
          "quantity": 146800.0,
          "value": 97622.0
        },
        {
          "level": 2,
          "price": 0.66,
          "quantity": 1325100.0,
          "value": 874566.0
        },
        {
          "level": 3,
          "price": 0.655,
          "quantity": 670200.0,
          "value": 438981.0
        },
        {
          "level": 4,
          "price": 0.65,
          "quantity": 901800.0,
          "value": 586170.0
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
          "quantity": 255600.0,
          "value": 163584.0
        },
        {
          "level": 7,
          "price": 0.635,
          "quantity": 207300.0,
          "value": 131635.5
        },
        {
          "level": 8,
          "price": 0.63,
          "quantity": 618000.0,
          "value": 389340.0
        },
        {
          "level": 9,
          "price": 0.625,
          "quantity": 184900.0,
          "value": 115562.5
        },
        {
          "level": 10,
          "price": 0.62,
          "quantity": 173400.0,
          "value": 107508.0
        }
      ],
      "asks": [
        {
          "level": 1,
          "price": 0.67,
          "quantity": 696200.0,
          "value": 466454.0
        },
        {
          "level": 2,
          "price": 0.675,
          "quantity": 563200.0,
          "value": 380160.0
        },
        {
          "level": 3,
          "price": 0.68,
          "quantity": 451800.0,
          "value": 307224.0
        },
        {
          "level": 4,
          "price": 0.685,
          "quantity": 790200.0,
          "value": 541287.0
        },
        {
          "level": 5,
          "price": 0.69,
          "quantity": 1752800.0,
          "value": 1209432.0
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
          "quantity": 151200.0,
          "value": 105840.0
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
          "quantity": 14400.0,
          "value": 10296.0
        }
      ]
    },
    "execution_dynamic": {
      "snapshot": {
        "valid": true,
        "snapshot_time": "2026-04-21 08:59:58.407800",
        "snapshot_basis": "last_continuous_session_snapshot",
        "snapshot_label": "final continuous-session displayed book before close",
        "snapshot_note": "Final continuous-session displayed book before close",
        "snapshot_mic": "XSES",
        "mid_price": 0.6675,
        "spread_pct": 0.007490636704119858,
        "spread_ticks": 1.0,
        "tick_size": 0.005,
        "bid_depth_notional_top10": 3231790.5,
        "ask_depth_notional_top10": 3193047.5,
        "bid_ask_depth_ratio": 1.0121
      },
      "historical_trade_scenarios": {
        "valid": true,
        "requested_lookback_calendar_days": 365,
        "lookback_calendar_days": 365,
        "effective_calendar_days": 366,
        "history_limited": false,
        "trade_days_used": 254,
        "n_trades_used": 99146,
        "first_trade_date": "2025-04-21",
        "last_trade_date": "2026-04-21",
        "window_label": "Apr 21, 2025 to Apr 21, 2026",
        "window_short_label": "Apr 21, 2025 to Apr 21, 2026",
        "trade_days_label": "254 trading days",
        "trade_count_label": "99,146 trades",
        "window_detail_label": "254 trading days • 99,146 trades",
        "history_note": "Trade-size percentiles use Apr 21, 2025 to Apr 21, 2026 history (254 trading days • 99,146 trades).",
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
            "pct_of_adv": 0.48
          },
          {
            "key": "p95",
            "label": "95th percentile trade",
            "quantile": 0.95,
            "trade_notional": 7937.5,
            "impact_pct": -0.003745,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 0.25,
            "pct_of_adv": 1.11
          },
          {
            "key": "p99_99",
            "label": "99.99th percentile trade",
            "quantile": 0.9999,
            "trade_notional": 340000.0,
            "impact_pct": -0.009097,
            "filled_pct": 100.0,
            "levels_consumed": 2,
            "pct_of_bid_depth": 10.52,
            "pct_of_adv": 47.75
          }
        ]
      },
      "l3_sell_order_scenarios": {
        "valid": true,
        "trade_date": "2026-04-21",
        "selection_method": "largest_observed_ask_orders_during_day",
        "orders": [
          {
            "rank": 1,
            "order_id": "8137223323647089664",
            "timestamp": "2026-04-20 22:59:01.671600000",
            "local_timestamp": "2026-04-21 06:59:01",
            "posted_price": 0.69,
            "size_shares": 1000000.0,
            "notional": 690000.0,
            "impact_pct": -0.010183,
            "filled_pct": 100.0,
            "levels_consumed": 2,
            "pct_of_bid_depth": 21.35,
            "price_vs_mid_pct": 3.371,
            "executed_event_count": 0,
            "event_count": 1
          },
          {
            "rank": 2,
            "order_id": "8137619147835821056",
            "timestamp": "2026-04-20 22:59:01.671600000",
            "local_timestamp": "2026-04-21 06:59:01",
            "posted_price": 0.78,
            "size_shares": 600000.0,
            "notional": 468000.0,
            "impact_pct": -0.009683,
            "filled_pct": 100.0,
            "levels_consumed": 2,
            "pct_of_bid_depth": 14.48,
            "price_vs_mid_pct": 16.854,
            "executed_event_count": 0,
            "event_count": 1
          },
          {
            "rank": 3,
            "order_id": "8139598268763139072",
            "timestamp": "2026-04-21 01:00:08.077700000",
            "local_timestamp": "2026-04-21 09:00:08",
            "posted_price": 0.675,
            "size_shares": 300000.0,
            "notional": 202500.0,
            "impact_pct": -0.007639,
            "filled_pct": 100.0,
            "levels_consumed": 2,
            "pct_of_bid_depth": 6.27,
            "price_vs_mid_pct": 1.124,
            "executed_event_count": 0,
            "event_count": 18
          }
        ]
      },
      "intraday_liquidity_profile": {
        "valid": true,
        "trade_date": "2026-04-21",
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
            "bid_depth_notional": 2998089.5,
            "ask_depth_notional": 3043988.5,
            "mid_price": 0.6675
          },
          {
            "bucket": "09:30",
            "spread_pct": 0.007490636704119857,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 3047601.0,
            "ask_depth_notional": 3119797.0,
            "mid_price": 0.6675
          },
          {
            "bucket": "10:00",
            "spread_pct": 0.007490636704119857,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 3039995.0,
            "ask_depth_notional": 3158802.5,
            "mid_price": 0.6675
          },
          {
            "bucket": "10:30",
            "spread_pct": 0.007490636704119857,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 3046664.0,
            "ask_depth_notional": 3158802.5,
            "mid_price": 0.6675
          },
          {
            "bucket": "11:00",
            "spread_pct": 0.00754716981132076,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 3058913.5,
            "ask_depth_notional": 3250933.5,
            "mid_price": 0.6625000000000001
          },
          {
            "bucket": "11:30",
            "spread_pct": 0.00754716981132076,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 3086017.5,
            "ask_depth_notional": 3253992.5,
            "mid_price": 0.6625000000000001
          },
          {
            "bucket": "13:00",
            "spread_pct": 0.00754716981132076,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 3127344.5,
            "ask_depth_notional": 3255387.5,
            "mid_price": 0.6625000000000001
          },
          {
            "bucket": "13:30",
            "spread_pct": 0.007490636704119857,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 3218624.0,
            "ask_depth_notional": 3208645.0,
            "mid_price": 0.6675
          },
          {
            "bucket": "14:00",
            "spread_pct": 0.007490636704119857,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 3200430.0,
            "ask_depth_notional": 3208109.0,
            "mid_price": 0.6675
          },
          {
            "bucket": "14:30",
            "spread_pct": 0.007490636704119857,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 3144429.5,
            "ask_depth_notional": 3184463.5,
            "mid_price": 0.6675
          },
          {
            "bucket": "15:00",
            "spread_pct": 0.007490636704119857,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 3269522.5,
            "ask_depth_notional": 3176158.5,
            "mid_price": 0.6675
          },
          {
            "bucket": "15:30",
            "spread_pct": 0.007490636704119857,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 3233687.0,
            "ask_depth_notional": 3195655.5,
            "mid_price": 0.6675
          },
          {
            "bucket": "16:00",
            "spread_pct": 0.007490636704119857,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 3221196.0,
            "ask_depth_notional": 3209055.5,
            "mid_price": 0.6675
          },
          {
            "bucket": "16:30",
            "spread_pct": 0.007490636704119857,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 3231790.5,
            "ask_depth_notional": 3193047.5,
            "mid_price": 0.6675
          }
        ],
        "summary": {
          "median_spread_pct": 0.007490636704119857,
          "median_spread_ticks": 1.0000000000000009,
          "median_bid_depth_notional": 3135887.0,
          "median_ask_depth_notional": 3194351.5,
          "tightest_bucket": "09:00",
          "widest_bucket": "11:00",
          "deepest_bid_bucket": "15:00",
          "thinnest_bid_bucket": "09:00"
        }
      }
    },
    "peer_capacity": {
      "bx_ticket_pct_adv_50k": 7.0,
      "peers": [
        {
          "ticker": "AJBU",
          "pct": 4.2
        },
        {
          "ticker": "JYEU",
          "pct": 14.1
        },
        {
          "ticker": "AU8U",
          "pct": 106.5
        },
        {
          "ticker": "ODBU",
          "pct": 584.7
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
          "n_trades": 380,
          "n_runs": 207,
          "n_trade_days": 1,
          "first_trade_date": "2026-04-21",
          "last_trade_date": "2026-04-21",
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
            "retail_pct": 0.4394736842105263,
            "mixed_pct": 0.0868421052631579,
            "instit_pct": 0.17894736842105263,
            "ambiguous_pct": 0.27631578947368424,
            "unobservable_pct": 0.018421052631578946,
            "unclear_pct": 0.2947368421052632,
            "retail_qty_pct": 0.02592523013338343,
            "mixed_qty_pct": 0.15473730352558082,
            "instit_qty_pct": 0.21203581940008767,
            "ambiguous_qty_pct": 0.4820589892917528,
            "unobservable_qty_pct": 0.12524265764919532,
            "unclear_qty_pct": 0.6073016469409481,
            "retail_notional_pct": 0.025957200585210727,
            "mixed_notional_pct": 0.15459489210765243,
            "instit_notional_pct": 0.2118509876607095,
            "ambiguous_notional_pct": 0.4816387782079568,
            "unobservable_notional_pct": 0.12595814143847056,
            "unclear_notional_pct": 0.6075969196464274
          },
          "run_composition": {
            "retail_pct": 0.8019323671497585,
            "mixed_pct": 0.06280193236714976,
            "instit_pct": 0.057971014492753624,
            "ambiguous_pct": 0.07246376811594203,
            "unobservable_pct": 0.004830917874396135,
            "unclear_pct": 0.07729468599033816,
            "retail_notional_pct": 0.025957200585210727,
            "mixed_notional_pct": 0.15459489210765243,
            "instit_notional_pct": 0.2118509876607095,
            "unclear_notional_pct": 0.6075969196464274
          },
          "counts": {
            "trades": {
              "retail": 167,
              "mixed": 33,
              "institutional": 68,
              "ambiguous": 105,
              "unobservable": 7,
              "unclear": 112
            },
            "runs": {
              "retail": 166,
              "mixed": 13,
              "institutional": 12,
              "ambiguous": 15,
              "unobservable": 1,
              "unclear": 16
            }
          },
          "confidence": {
            "high": 0.642512077294686,
            "medium": 0.21739130434782608,
            "low": 0.0,
            "na": 0.14009661835748793
          },
          "confidence_counts": {
            "high": 133,
            "medium": 45,
            "low": 0,
            "na": 29
          },
          "trade_confidence": {
            "high": 0.37894736842105264,
            "medium": 0.2394736842105263,
            "low": 0.0,
            "na": 0.3815789473684211
          },
          "trade_confidence_counts": {
            "high": 144,
            "medium": 91,
            "low": 0,
            "na": 145
          },
          "observability": {
            "avg_feature_coverage": 0.8480676328502413,
            "observable_run_pct": 0.9951690821256038,
            "ambiguous_run_pct": 0.07246376811594203,
            "unobservable_run_pct": 0.004830917874396135
          },
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "dominant_share": 0.8019323671497585,
          "dominance_gap": 0.7294685990338164,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 189,
              "MULTI_FILL_SINGLE_PRICE": 184,
              "UNOBSERVABLE": 7
            },
            "d2_information": {
              "NEUTRAL_OR_REVERSING": 376,
              "PERSISTENT_POSITIVE_IMPACT": 4
            },
            "d3_urgency": {
              "IMMEDIATE": 206,
              "ADAPTIVE": 1
            },
            "participant_confidence": {
              "HIGH": 133,
              "MEDIUM": 45,
              "NA": 29
            }
          },
          "trade_size": {
            "avg": 2797.0131578947367,
            "median": 67.0
          },
          "run_size": {
            "avg": 5134.613526570049,
            "median": 67.0,
            "avg_length": 1.077294685990338
          },
          "recent_trades": [
            {
              "trade_id": "BMLL-385",
              "timestamp": "2026-04-21T08:59:44.055400",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57747,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-384",
              "timestamp": "2026-04-21T08:59:42.725500",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57747,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-383",
              "timestamp": "2026-04-21T08:59:27.976100",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57746,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "BMLL-382",
              "timestamp": "2026-04-21T08:59:26.068000",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57746,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "BMLL-381",
              "timestamp": "2026-04-21T08:59:22.798400",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57746,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "BMLL-380",
              "timestamp": "2026-04-21T08:59:03.605600",
              "price": 0.665,
              "size": 300.0,
              "notional": 199.5,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 57745,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-379",
              "timestamp": "2026-04-21T08:58:52.349500",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 57744,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-378",
              "timestamp": "2026-04-21T08:58:41.133600",
              "price": 0.67,
              "size": 200.0,
              "notional": 134.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 57743,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-377",
              "timestamp": "2026-04-21T08:58:31.851700",
              "price": 0.67,
              "size": 300.0,
              "notional": 201.0,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 57742,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-376",
              "timestamp": "2026-04-21T08:58:01.566900",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 57741,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-375",
              "timestamp": "2026-04-21T08:57:51.292100",
              "price": 0.665,
              "size": 300.0,
              "notional": 199.5,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 57740,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-374",
              "timestamp": "2026-04-21T08:57:34.239900",
              "price": 0.67,
              "size": 200.0,
              "notional": 134.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 57739,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-373",
              "timestamp": "2026-04-21T08:56:56.555800",
              "price": 0.67,
              "size": 200.0,
              "notional": 134.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 57738,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-372",
              "timestamp": "2026-04-21T08:54:32.656300",
              "price": 0.665,
              "size": 200.0,
              "notional": 133.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 57737,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-371",
              "timestamp": "2026-04-21T08:54:22.716700",
              "price": 0.67,
              "size": 300.0,
              "notional": 201.0,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 57736,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-370",
              "timestamp": "2026-04-21T08:50:22.971000",
              "price": 0.67,
              "size": 300.0,
              "notional": 201.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57735,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-369",
              "timestamp": "2026-04-21T08:50:22.397900",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57735,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-368",
              "timestamp": "2026-04-21T08:49:51.819800",
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
              "trade_id": "BMLL-367",
              "timestamp": "2026-04-21T08:49:28.870100",
              "price": 0.665,
              "size": 200.0,
              "notional": 133.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 57733,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-366",
              "timestamp": "2026-04-21T08:49:12.035800",
              "price": 0.665,
              "size": 400.0,
              "notional": 266.0,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 57732,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-365",
              "timestamp": "2026-04-21T08:48:56.190800",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 57731,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-364",
              "timestamp": "2026-04-21T08:48:02.762200",
              "price": 0.67,
              "size": 500.0,
              "notional": 335.0,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 57730,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-363",
              "timestamp": "2026-04-21T08:46:31.682200",
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
              "trade_id": "BMLL-362",
              "timestamp": "2026-04-21T08:45:50.844600",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 57728,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-361",
              "timestamp": "2026-04-21T08:45:25.306500",
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
              "trade_id": "BMLL-360",
              "timestamp": "2026-04-21T08:42:21.653000",
              "price": 0.665,
              "size": 200.0,
              "notional": 133.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 57726,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-359",
              "timestamp": "2026-04-21T08:41:23.484100",
              "price": 0.67,
              "size": 200.0,
              "notional": 134.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 57725,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-358",
              "timestamp": "2026-04-21T08:38:18.266900",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 57724,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-357",
              "timestamp": "2026-04-21T08:37:50.597500",
              "price": 0.665,
              "size": 500.0,
              "notional": 332.5,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 57723,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-356",
              "timestamp": "2026-04-21T08:35:52.917700",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 57722,
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
              "retail_pct": 0.4394736842105263,
              "mixed_pct": 0.0868421052631579,
              "instit_pct": 0.17894736842105263,
              "ambiguous_pct": 0.27631578947368424,
              "unobservable_pct": 0.018421052631578946,
              "unclear_pct": 0.2947368421052632,
              "retail_qty_pct": 0.02592523013338343,
              "mixed_qty_pct": 0.15473730352558082,
              "instit_qty_pct": 0.21203581940008767,
              "ambiguous_qty_pct": 0.4820589892917528,
              "unobservable_qty_pct": 0.12524265764919532,
              "unclear_qty_pct": 0.6073016469409481,
              "retail_notional_pct": 0.025957200585210727,
              "mixed_notional_pct": 0.15459489210765243,
              "instit_notional_pct": 0.2118509876607095,
              "ambiguous_notional_pct": 0.4816387782079568,
              "unobservable_notional_pct": 0.12595814143847056,
              "unclear_notional_pct": 0.6075969196464274,
              "run_retail_pct": 0.8019323671497585,
              "run_mixed_pct": 0.06280193236714976,
              "run_instit_pct": 0.057971014492753624,
              "run_unclear_pct": 0.07729468599033816,
              "avg_trade_size": 2797.0131578947367,
              "avg_run_notional": 5134.613526570049,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.642512077294686,
              "medium_confidence_pct": 0.21739130434782608,
              "low_confidence_pct": 0.0,
              "na_confidence_pct": 0.14009661835748793,
              "avg_feature_coverage": 0.8480676328502413,
              "observable_run_pct": 0.9951690821256038,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "AJBU",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.32978723404255317,
              "mixed_pct": 0.2784954407294833,
              "instit_pct": 0.3620820668693009,
              "ambiguous_pct": 0.028875379939209727,
              "unobservable_pct": 0.0007598784194528875,
              "unclear_pct": 0.029635258358662615,
              "retail_qty_pct": 0.06941050533387472,
              "mixed_qty_pct": 0.19033627403934886,
              "instit_qty_pct": 0.6934996862426636,
              "ambiguous_qty_pct": 0.005514746594810085,
              "unobservable_qty_pct": 0.04123878778930272,
              "unclear_qty_pct": 0.0467535343841128,
              "retail_notional_pct": 0.06940027415129676,
              "mixed_notional_pct": 0.19035977532395368,
              "instit_notional_pct": 0.693768783615646,
              "ambiguous_notional_pct": 0.005504639599698901,
              "unobservable_notional_pct": 0.04096652730940463,
              "unclear_notional_pct": 0.04647116690910353,
              "run_retail_pct": 0.7357330992098332,
              "run_mixed_pct": 0.23968393327480245,
              "run_instit_pct": 0.016681299385425813,
              "run_unclear_pct": 0.007901668129938543,
              "avg_trade_size": 12322.63905775076,
              "avg_run_notional": 28475.141352063212,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.3090430201931519,
              "medium_confidence_pct": 0.3748902546093064,
              "low_confidence_pct": 0.0684811237928007,
              "na_confidence_pct": 0.247585601404741,
              "avg_feature_coverage": 0.8868744512730465,
              "observable_run_pct": 0.9982440737489026,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "JYEU",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.4361525704809287,
              "mixed_pct": 0.2943615257048093,
              "instit_pct": 0.20978441127694858,
              "ambiguous_pct": 0.05887230514096186,
              "unobservable_pct": 0.0008291873963515755,
              "unclear_pct": 0.05970149253731344,
              "retail_qty_pct": 0.07222195738189445,
              "mixed_qty_pct": 0.19976641083091004,
              "instit_qty_pct": 0.6422391190351338,
              "ambiguous_qty_pct": 0.029997139724460123,
              "unobservable_qty_pct": 0.05577537302760166,
              "unclear_qty_pct": 0.08577251275206178,
              "retail_notional_pct": 0.07202909392788491,
              "mixed_notional_pct": 0.19961631586748146,
              "instit_notional_pct": 0.6425777967588293,
              "ambiguous_notional_pct": 0.030149725905944978,
              "unobservable_notional_pct": 0.05562706753985935,
              "unclear_notional_pct": 0.08577679344580433,
              "run_retail_pct": 0.7781065088757396,
              "run_mixed_pct": 0.20266272189349113,
              "run_instit_pct": 0.008875739644970414,
              "run_unclear_pct": 0.010355029585798817,
              "avg_trade_size": 4011.25456053068,
              "avg_run_notional": 7156.173076923077,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.35502958579881655,
              "medium_confidence_pct": 0.386094674556213,
              "low_confidence_pct": 0.04585798816568047,
              "na_confidence_pct": 0.21301775147928995,
              "avg_feature_coverage": 0.8781804733727808,
              "observable_run_pct": 0.9985207100591716,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "AU8U",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.6381381381381381,
              "mixed_pct": 0.25075075075075076,
              "instit_pct": 0.0990990990990991,
              "ambiguous_pct": 0.010510510510510511,
              "unobservable_pct": 0.0015015015015015015,
              "unclear_pct": 0.012012012012012012,
              "retail_qty_pct": 0.10232653901585341,
              "mixed_qty_pct": 0.32818612312126827,
              "instit_qty_pct": 0.4481161210623842,
              "ambiguous_qty_pct": 0.0009264978381717109,
              "unobservable_qty_pct": 0.12044471896232242,
              "unclear_qty_pct": 0.12137121680049413,
              "retail_notional_pct": 0.10227442031443136,
              "mixed_notional_pct": 0.3280027192121472,
              "instit_notional_pct": 0.4482612240497544,
              "ambiguous_notional_pct": 0.0009298627441731971,
              "unobservable_notional_pct": 0.12053177367949383,
              "unclear_notional_pct": 0.12146163642366703,
              "run_retail_pct": 0.8284600389863548,
              "run_mixed_pct": 0.15594541910331383,
              "run_instit_pct": 0.011695906432748537,
              "run_unclear_pct": 0.003898635477582846,
              "avg_trade_size": 1002.7635135135135,
              "avg_run_notional": 1301.8333333333333,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.571150097465887,
              "medium_confidence_pct": 0.26900584795321636,
              "low_confidence_pct": 0.0,
              "na_confidence_pct": 0.15984405458089668,
              "avg_feature_coverage": 0.8666666666666666,
              "observable_run_pct": 0.9980506822612085,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "ODBU",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.1,
              "mixed_pct": 0.3,
              "instit_pct": 0.36666666666666664,
              "ambiguous_pct": 0.23333333333333334,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.23333333333333334,
              "retail_qty_pct": 0.006622516556291391,
              "mixed_qty_pct": 0.4586092715231788,
              "instit_qty_pct": 0.445364238410596,
              "ambiguous_qty_pct": 0.08940397350993377,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.08940397350993377,
              "retail_notional_pct": 0.0066275566830505785,
              "mixed_notional_pct": 0.4570318693515142,
              "instit_notional_pct": 0.44728079911209767,
              "ambiguous_notional_pct": 0.08905977485333756,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.08905977485333756,
              "run_retail_pct": 0.2222222222222222,
              "run_mixed_pct": 0.3333333333333333,
              "run_instit_pct": 0.2222222222222222,
              "run_unclear_pct": 0.2222222222222222,
              "avg_trade_size": 1051.1666666666667,
              "avg_run_notional": 3503.8888888888887,
              "dominant_bucket": "MIXED",
              "dominant_label": "Mixed",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.4444444444444444,
              "na_confidence_pct": 0.5555555555555556,
              "avg_feature_coverage": 0.9500000000000001,
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
              "retail_pct": 0.8,
              "mixed_pct": 0.2,
              "instit_pct": 0.0,
              "ambiguous_pct": 0.0,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.0,
              "retail_qty_pct": 0.5195195195195195,
              "mixed_qty_pct": 0.4804804804804805,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": 0.0,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.0,
              "retail_notional_pct": 0.5445920303605313,
              "mixed_notional_pct": 0.45540796963946867,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": 0.0,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.0,
              "run_retail_pct": 0.8,
              "run_mixed_pct": 0.2,
              "run_instit_pct": 0.0,
              "run_unclear_pct": 0.0,
              "avg_trade_size": 421.6,
              "avg_run_notional": 421.6,
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
          "n_trades": 8930,
          "n_runs": 6396,
          "n_trade_days": 21,
          "first_trade_date": "2026-03-23",
          "last_trade_date": "2026-04-21",
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
            "retail_pct": 0.5884658454647257,
            "mixed_pct": 0.2585666293393057,
            "instit_pct": 0.09440089585666293,
            "ambiguous_pct": 0.057782754759238525,
            "unobservable_pct": 0.0007838745800671892,
            "unclear_pct": 0.05856662933930572,
            "retail_qty_pct": 0.08337139493819894,
            "mixed_qty_pct": 0.29509593878752205,
            "instit_qty_pct": 0.4040918187168923,
            "ambiguous_qty_pct": 0.2080235432607416,
            "unobservable_qty_pct": 0.009417304296645085,
            "unclear_qty_pct": 0.21744084755738669,
            "retail_notional_pct": 0.08315738637718564,
            "mixed_notional_pct": 0.29453260147554794,
            "instit_notional_pct": 0.40431465515907494,
            "ambiguous_notional_pct": 0.20824721662309634,
            "unobservable_notional_pct": 0.009748140365095168,
            "unclear_notional_pct": 0.2179953569881915
          },
          "run_composition": {
            "retail_pct": 0.8151969981238274,
            "mixed_pct": 0.16135084427767354,
            "instit_pct": 0.014227642276422764,
            "ambiguous_pct": 0.00906816760475297,
            "unobservable_pct": 0.00015634771732332708,
            "unclear_pct": 0.009224515322076297,
            "retail_notional_pct": 0.08315738637718564,
            "mixed_notional_pct": 0.29453260147554794,
            "instit_notional_pct": 0.40431465515907494,
            "unclear_notional_pct": 0.2179953569881915
          },
          "counts": {
            "trades": {
              "retail": 5255,
              "mixed": 2309,
              "institutional": 843,
              "ambiguous": 516,
              "unobservable": 7,
              "unclear": 523
            },
            "runs": {
              "retail": 5214,
              "mixed": 1032,
              "institutional": 91,
              "ambiguous": 58,
              "unobservable": 1,
              "unclear": 59
            }
          },
          "confidence": {
            "high": 0.524859287054409,
            "medium": 0.28392745465916197,
            "low": 0.020637898686679174,
            "na": 0.17057535959974984
          },
          "confidence_counts": {
            "high": 3357,
            "medium": 1816,
            "low": 132,
            "na": 1091
          },
          "trade_confidence": {
            "high": 0.40257558790593506,
            "medium": 0.25923852183650614,
            "low": 0.021052631578947368,
            "na": 0.3171332586786114
          },
          "trade_confidence_counts": {
            "high": 3595,
            "medium": 2315,
            "low": 188,
            "na": 2832
          },
          "observability": {
            "avg_feature_coverage": 0.8670106316447778,
            "observable_run_pct": 0.9998436522826767,
            "ambiguous_run_pct": 0.00906816760475297,
            "unobservable_run_pct": 0.00015634771732332708
          },
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "dominant_share": 0.8151969981238274,
          "dominance_gap": 0.6538461538461539,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 7029,
              "MULTI_FILL_SINGLE_PRICE": 1883,
              "WALK_BOOK": 11,
              "UNOBSERVABLE": 7
            },
            "d2_information": {
              "NEUTRAL_OR_REVERSING": 8814,
              "MOMENTUM_REACTIVE": 56,
              "PERSISTENT_POSITIVE_IMPACT": 55,
              "UNOBSERVABLE": 5
            },
            "d3_urgency": {
              "IMMEDIATE": 6356,
              "ADAPTIVE": 40
            },
            "participant_confidence": {
              "HIGH": 3357,
              "MEDIUM": 1816,
              "NA": 1091,
              "LOW": 132
            }
          },
          "trade_size": {
            "avg": 1537.9106942889139,
            "median": 127.0
          },
          "run_size": {
            "avg": 2147.2080206378987,
            "median": 129.0,
            "avg_length": 1.1596310193871169
          },
          "recent_trades": [
            {
              "trade_id": "BMLL-385",
              "timestamp": "2026-04-21T08:59:44.055400",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57747,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-384",
              "timestamp": "2026-04-21T08:59:42.725500",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57747,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-383",
              "timestamp": "2026-04-21T08:59:27.976100",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57746,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "BMLL-382",
              "timestamp": "2026-04-21T08:59:26.068000",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57746,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "BMLL-381",
              "timestamp": "2026-04-21T08:59:22.798400",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57746,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "BMLL-380",
              "timestamp": "2026-04-21T08:59:03.605600",
              "price": 0.665,
              "size": 300.0,
              "notional": 199.5,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 57745,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-379",
              "timestamp": "2026-04-21T08:58:52.349500",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 57744,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-378",
              "timestamp": "2026-04-21T08:58:41.133600",
              "price": 0.67,
              "size": 200.0,
              "notional": 134.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 57743,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-377",
              "timestamp": "2026-04-21T08:58:31.851700",
              "price": 0.67,
              "size": 300.0,
              "notional": 201.0,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 57742,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-376",
              "timestamp": "2026-04-21T08:58:01.566900",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 57741,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-375",
              "timestamp": "2026-04-21T08:57:51.292100",
              "price": 0.665,
              "size": 300.0,
              "notional": 199.5,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 57740,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-374",
              "timestamp": "2026-04-21T08:57:34.239900",
              "price": 0.67,
              "size": 200.0,
              "notional": 134.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 57739,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-373",
              "timestamp": "2026-04-21T08:56:56.555800",
              "price": 0.67,
              "size": 200.0,
              "notional": 134.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 57738,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-372",
              "timestamp": "2026-04-21T08:54:32.656300",
              "price": 0.665,
              "size": 200.0,
              "notional": 133.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 57737,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-371",
              "timestamp": "2026-04-21T08:54:22.716700",
              "price": 0.67,
              "size": 300.0,
              "notional": 201.0,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 57736,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-370",
              "timestamp": "2026-04-21T08:50:22.971000",
              "price": 0.67,
              "size": 300.0,
              "notional": 201.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57735,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-369",
              "timestamp": "2026-04-21T08:50:22.397900",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57735,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-368",
              "timestamp": "2026-04-21T08:49:51.819800",
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
              "trade_id": "BMLL-367",
              "timestamp": "2026-04-21T08:49:28.870100",
              "price": 0.665,
              "size": 200.0,
              "notional": 133.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 57733,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-366",
              "timestamp": "2026-04-21T08:49:12.035800",
              "price": 0.665,
              "size": 400.0,
              "notional": 266.0,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 57732,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-365",
              "timestamp": "2026-04-21T08:48:56.190800",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 57731,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-364",
              "timestamp": "2026-04-21T08:48:02.762200",
              "price": 0.67,
              "size": 500.0,
              "notional": 335.0,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 57730,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-363",
              "timestamp": "2026-04-21T08:46:31.682200",
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
              "trade_id": "BMLL-362",
              "timestamp": "2026-04-21T08:45:50.844600",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 57728,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-361",
              "timestamp": "2026-04-21T08:45:25.306500",
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
              "trade_id": "BMLL-360",
              "timestamp": "2026-04-21T08:42:21.653000",
              "price": 0.665,
              "size": 200.0,
              "notional": 133.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 57726,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-359",
              "timestamp": "2026-04-21T08:41:23.484100",
              "price": 0.67,
              "size": 200.0,
              "notional": 134.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 57725,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-358",
              "timestamp": "2026-04-21T08:38:18.266900",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 57724,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-357",
              "timestamp": "2026-04-21T08:37:50.597500",
              "price": 0.665,
              "size": 500.0,
              "notional": 332.5,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 57723,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-356",
              "timestamp": "2026-04-21T08:35:52.917700",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 57722,
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
              "retail_pct": 0.5884658454647257,
              "mixed_pct": 0.2585666293393057,
              "instit_pct": 0.09440089585666293,
              "ambiguous_pct": 0.057782754759238525,
              "unobservable_pct": 0.0007838745800671892,
              "unclear_pct": 0.05856662933930572,
              "retail_qty_pct": 0.08337139493819894,
              "mixed_qty_pct": 0.29509593878752205,
              "instit_qty_pct": 0.4040918187168923,
              "ambiguous_qty_pct": 0.2080235432607416,
              "unobservable_qty_pct": 0.009417304296645085,
              "unclear_qty_pct": 0.21744084755738669,
              "retail_notional_pct": 0.08315738637718564,
              "mixed_notional_pct": 0.29453260147554794,
              "instit_notional_pct": 0.40431465515907494,
              "ambiguous_notional_pct": 0.20824721662309634,
              "unobservable_notional_pct": 0.009748140365095168,
              "unclear_notional_pct": 0.2179953569881915,
              "run_retail_pct": 0.8151969981238274,
              "run_mixed_pct": 0.16135084427767354,
              "run_instit_pct": 0.014227642276422764,
              "run_unclear_pct": 0.009224515322076297,
              "avg_trade_size": 1537.9106942889139,
              "avg_run_notional": 2147.2080206378987,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.524859287054409,
              "medium_confidence_pct": 0.28392745465916197,
              "low_confidence_pct": 0.020637898686679174,
              "na_confidence_pct": 0.17057535959974984,
              "avg_feature_coverage": 0.8670106316447778,
              "observable_run_pct": 0.9998436522826767,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "AJBU",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.37850353748302723,
              "mixed_pct": 0.3182162509826342,
              "instit_pct": 0.26013006503251623,
              "ambiguous_pct": 0.042849996426784824,
              "unobservable_pct": 0.00030015007503751874,
              "unclear_pct": 0.04315014650182234,
              "retail_qty_pct": 0.10608170650931589,
              "mixed_qty_pct": 0.21026669954094415,
              "instit_qty_pct": 0.6204520143504579,
              "ambiguous_qty_pct": 0.05349139453102963,
              "unobservable_qty_pct": 0.009708185068252433,
              "unclear_qty_pct": 0.06319957959928206,
              "retail_notional_pct": 0.10583806249845484,
              "mixed_notional_pct": 0.2096697204538799,
              "instit_notional_pct": 0.6214198573768138,
              "ambiguous_notional_pct": 0.0534119067199586,
              "unobservable_notional_pct": 0.009660452950892788,
              "unclear_notional_pct": 0.0630723596708514,
              "run_retail_pct": 0.7330159471931772,
              "run_mixed_pct": 0.23470997137683275,
              "run_instit_pct": 0.01682341258251066,
              "run_unclear_pct": 0.015450668847479409,
              "avg_trade_size": 6237.191116987065,
              "avg_run_notional": 12745.635740989545,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.38241135580349317,
              "medium_confidence_pct": 0.33074361820199777,
              "low_confidence_pct": 0.03668438577019686,
              "na_confidence_pct": 0.25016064022431217,
              "avg_feature_coverage": 0.8824405631170044,
              "observable_run_pct": 0.9997371341783983,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "AU8U",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.5022688966679631,
              "mixed_pct": 0.2653312589135226,
              "instit_pct": 0.1892908077272138,
              "ambiguous_pct": 0.04304421107221574,
              "unobservable_pct": 6.482561908466225e-05,
              "unclear_pct": 0.0431090366913004,
              "retail_qty_pct": 0.09534124118961664,
              "mixed_qty_pct": 0.2538703174082235,
              "instit_qty_pct": 0.5304640005001016,
              "ambiguous_qty_pct": 0.11666744807539031,
              "unobservable_qty_pct": 0.003656992826667917,
              "unclear_qty_pct": 0.12032444090205822,
              "retail_notional_pct": 0.09515272328479633,
              "mixed_notional_pct": 0.2546449389262128,
              "instit_notional_pct": 0.528347246566716,
              "ambiguous_notional_pct": 0.11802123234634583,
              "unobservable_notional_pct": 0.003833858875929114,
              "unclear_notional_pct": 0.12185509122227495,
              "run_retail_pct": 0.8008005899083536,
              "run_mixed_pct": 0.17117876329927315,
              "run_instit_pct": 0.0211734962604024,
              "run_unclear_pct": 0.006847150531970925,
              "avg_trade_size": 1361.0837546998573,
              "avg_run_notional": 2211.7431791846625,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.5010007373854419,
              "medium_confidence_pct": 0.29758769619719794,
              "low_confidence_pct": 0.023385652586116086,
              "na_confidence_pct": 0.17802591383124408,
              "avg_feature_coverage": 0.8697197935320761,
              "observable_run_pct": 0.999894659222585,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "ODBU",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.2523041474654378,
              "mixed_pct": 0.1382488479262673,
              "instit_pct": 0.2488479262672811,
              "ambiguous_pct": 0.36059907834101385,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.36059907834101385,
              "retail_qty_pct": 0.071193122525716,
              "mixed_qty_pct": 0.1363237315929834,
              "instit_qty_pct": 0.4663000447234599,
              "ambiguous_qty_pct": 0.32618310115784066,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.32618310115784066,
              "retail_notional_pct": 0.07153073915628151,
              "mixed_notional_pct": 0.13749191476951952,
              "instit_notional_pct": 0.4653311656760651,
              "ambiguous_notional_pct": 0.3256461803981339,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.3256461803981339,
              "run_retail_pct": 0.4563953488372093,
              "run_mixed_pct": 0.16569767441860464,
              "run_instit_pct": 0.10755813953488372,
              "run_unclear_pct": 0.2703488372093023,
              "avg_trade_size": 3543.576612903226,
              "avg_run_notional": 8941.350290697674,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.02616279069767442,
              "medium_confidence_pct": 0.11337209302325581,
              "low_confidence_pct": 0.42441860465116277,
              "na_confidence_pct": 0.436046511627907,
              "avg_feature_coverage": 0.8652616279069767,
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
              "retail_pct": 0.5026660203587009,
              "mixed_pct": 0.3329132331555986,
              "instit_pct": 0.11891420261754726,
              "ambiguous_pct": 0.045351429956374215,
              "unobservable_pct": 0.00015511391177896268,
              "unclear_pct": 0.04550654386815318,
              "retail_qty_pct": 0.07450784067950077,
              "mixed_qty_pct": 0.23990445670927593,
              "instit_qty_pct": 0.395740336620847,
              "ambiguous_qty_pct": 0.049699352554038505,
              "unobservable_qty_pct": 0.2401480134363378,
              "unclear_qty_pct": 0.2898473659903763,
              "retail_notional_pct": 0.07482586819837213,
              "mixed_notional_pct": 0.24007809708329306,
              "instit_notional_pct": 0.39739265203875146,
              "ambiguous_notional_pct": 0.0504010346391643,
              "unobservable_notional_pct": 0.23730234804041908,
              "unclear_notional_pct": 0.2877033826795834,
              "run_retail_pct": 0.7764702248579195,
              "run_mixed_pct": 0.2106807511737089,
              "run_instit_pct": 0.005374351371386212,
              "run_unclear_pct": 0.007474672596985422,
              "avg_trade_size": 4185.1649905962195,
              "avg_run_notional": 6666.971966580183,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.385470719051149,
              "medium_confidence_pct": 0.3531937237459847,
              "low_confidence_pct": 0.04318013343217198,
              "na_confidence_pct": 0.21815542377069433,
              "avg_feature_coverage": 0.8823912774894983,
              "observable_run_pct": 0.9997529033852236,
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
              "retail_pct": 0.712468193384224,
              "mixed_pct": 0.2748091603053435,
              "instit_pct": 0.01272264631043257,
              "ambiguous_pct": 0.0,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.0,
              "retail_qty_pct": 0.12794271010880737,
              "mixed_qty_pct": 0.7331795536095308,
              "instit_qty_pct": 0.13887773628166183,
              "ambiguous_qty_pct": 0.0,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.0,
              "retail_notional_pct": 0.13177264898548818,
              "mixed_notional_pct": 0.7342457727659181,
              "instit_notional_pct": 0.1339815782485938,
              "ambiguous_notional_pct": 0.0,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.0,
              "run_retail_pct": 0.8353658536585366,
              "run_mixed_pct": 0.16158536585365854,
              "run_instit_pct": 0.003048780487804878,
              "run_unclear_pct": 0.0,
              "avg_trade_size": 1253.4137404580151,
              "avg_run_notional": 1501.8036585365853,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.5670731707317073,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.27134146341463417,
              "na_confidence_pct": 0.16158536585365854,
              "avg_feature_coverage": 0.8518292682926829,
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
          "n_trades": 22429,
          "n_runs": 15574,
          "n_trade_days": 63,
          "first_trade_date": "2026-01-20",
          "last_trade_date": "2026-04-21",
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
            "retail_pct": 0.5735431807035535,
            "mixed_pct": 0.24740291586784965,
            "instit_pct": 0.1295198180926479,
            "ambiguous_pct": 0.04922198938873779,
            "unobservable_pct": 0.0003120959472111998,
            "unclear_pct": 0.04953408533594899,
            "retail_qty_pct": 0.07703694330316128,
            "mixed_qty_pct": 0.2983645928486032,
            "instit_qty_pct": 0.4650925526824658,
            "ambiguous_qty_pct": 0.15686964591003216,
            "unobservable_qty_pct": 0.002636265255737502,
            "unclear_qty_pct": 0.15950591116576968,
            "retail_notional_pct": 0.07698801747379631,
            "mixed_notional_pct": 0.29888261922485015,
            "instit_notional_pct": 0.46499346625975274,
            "ambiguous_notional_pct": 0.15649417354307893,
            "unobservable_notional_pct": 0.002641723498521865,
            "unclear_notional_pct": 0.1591358970416008
          },
          "run_composition": {
            "retail_pct": 0.8209836907666623,
            "mixed_pct": 0.1548735071272634,
            "instit_pct": 0.0157955566970592,
            "ambiguous_pct": 0.008283035828945679,
            "unobservable_pct": 6.420958006934635e-05,
            "unclear_pct": 0.008347245409015025,
            "retail_notional_pct": 0.07698801747379631,
            "mixed_notional_pct": 0.29888261922485015,
            "instit_notional_pct": 0.46499346625975274,
            "unclear_notional_pct": 0.1591358970416008
          },
          "counts": {
            "trades": {
              "retail": 12864,
              "mixed": 5549,
              "institutional": 2905,
              "ambiguous": 1104,
              "unobservable": 7,
              "unclear": 1111
            },
            "runs": {
              "retail": 12786,
              "mixed": 2412,
              "institutional": 246,
              "ambiguous": 129,
              "unobservable": 1,
              "unclear": 130
            }
          },
          "confidence": {
            "high": 0.5223449338641325,
            "medium": 0.29266726595608067,
            "low": 0.02176704764350841,
            "na": 0.1632207525362784
          },
          "confidence_counts": {
            "high": 8135,
            "medium": 4558,
            "low": 339,
            "na": 2542
          },
          "trade_confidence": {
            "high": 0.403673815150029,
            "medium": 0.2780329038298631,
            "low": 0.02135627981630924,
            "na": 0.2969370012037987
          },
          "trade_confidence_counts": {
            "high": 9054,
            "medium": 6236,
            "low": 479,
            "na": 6660
          },
          "observability": {
            "avg_feature_coverage": 0.8651341980223447,
            "observable_run_pct": 0.9999357904199306,
            "ambiguous_run_pct": 0.008283035828945679,
            "unobservable_run_pct": 6.420958006934635e-05
          },
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "dominant_share": 0.8209836907666623,
          "dominance_gap": 0.666110183639399,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 16800,
              "MULTI_FILL_SINGLE_PRICE": 5535,
              "WALK_BOOK": 87,
              "UNOBSERVABLE": 7
            },
            "d2_information": {
              "NEUTRAL_OR_REVERSING": 21616,
              "MOMENTUM_REACTIVE": 541,
              "PERSISTENT_POSITIVE_IMPACT": 260,
              "UNOBSERVABLE": 11,
              "SHORT_HORIZON_POSITIVE_IMPACT": 1
            },
            "d3_urgency": {
              "IMMEDIATE": 15456,
              "ADAPTIVE": 118
            },
            "participant_confidence": {
              "HIGH": 8135,
              "MEDIUM": 4558,
              "NA": 2542,
              "LOW": 339
            }
          },
          "trade_size": {
            "avg": 2259.4726024343486,
            "median": 132.0
          },
          "run_size": {
            "avg": 3253.994542185694,
            "median": 131.0,
            "avg_length": 1.1483883395402594
          },
          "recent_trades": [
            {
              "trade_id": "BMLL-385",
              "timestamp": "2026-04-21T08:59:44.055400",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57747,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-384",
              "timestamp": "2026-04-21T08:59:42.725500",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57747,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-383",
              "timestamp": "2026-04-21T08:59:27.976100",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57746,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "BMLL-382",
              "timestamp": "2026-04-21T08:59:26.068000",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57746,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "BMLL-381",
              "timestamp": "2026-04-21T08:59:22.798400",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57746,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "BMLL-380",
              "timestamp": "2026-04-21T08:59:03.605600",
              "price": 0.665,
              "size": 300.0,
              "notional": 199.5,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 57745,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-379",
              "timestamp": "2026-04-21T08:58:52.349500",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 57744,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-378",
              "timestamp": "2026-04-21T08:58:41.133600",
              "price": 0.67,
              "size": 200.0,
              "notional": 134.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 57743,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-377",
              "timestamp": "2026-04-21T08:58:31.851700",
              "price": 0.67,
              "size": 300.0,
              "notional": 201.0,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 57742,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-376",
              "timestamp": "2026-04-21T08:58:01.566900",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 57741,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-375",
              "timestamp": "2026-04-21T08:57:51.292100",
              "price": 0.665,
              "size": 300.0,
              "notional": 199.5,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 57740,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-374",
              "timestamp": "2026-04-21T08:57:34.239900",
              "price": 0.67,
              "size": 200.0,
              "notional": 134.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 57739,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-373",
              "timestamp": "2026-04-21T08:56:56.555800",
              "price": 0.67,
              "size": 200.0,
              "notional": 134.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 57738,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-372",
              "timestamp": "2026-04-21T08:54:32.656300",
              "price": 0.665,
              "size": 200.0,
              "notional": 133.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 57737,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-371",
              "timestamp": "2026-04-21T08:54:22.716700",
              "price": 0.67,
              "size": 300.0,
              "notional": 201.0,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 57736,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-370",
              "timestamp": "2026-04-21T08:50:22.971000",
              "price": 0.67,
              "size": 300.0,
              "notional": 201.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57735,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-369",
              "timestamp": "2026-04-21T08:50:22.397900",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57735,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-368",
              "timestamp": "2026-04-21T08:49:51.819800",
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
              "trade_id": "BMLL-367",
              "timestamp": "2026-04-21T08:49:28.870100",
              "price": 0.665,
              "size": 200.0,
              "notional": 133.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 57733,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-366",
              "timestamp": "2026-04-21T08:49:12.035800",
              "price": 0.665,
              "size": 400.0,
              "notional": 266.0,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 57732,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-365",
              "timestamp": "2026-04-21T08:48:56.190800",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 57731,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-364",
              "timestamp": "2026-04-21T08:48:02.762200",
              "price": 0.67,
              "size": 500.0,
              "notional": 335.0,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 57730,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-363",
              "timestamp": "2026-04-21T08:46:31.682200",
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
              "trade_id": "BMLL-362",
              "timestamp": "2026-04-21T08:45:50.844600",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 57728,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-361",
              "timestamp": "2026-04-21T08:45:25.306500",
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
              "trade_id": "BMLL-360",
              "timestamp": "2026-04-21T08:42:21.653000",
              "price": 0.665,
              "size": 200.0,
              "notional": 133.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 57726,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-359",
              "timestamp": "2026-04-21T08:41:23.484100",
              "price": 0.67,
              "size": 200.0,
              "notional": 134.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 57725,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-358",
              "timestamp": "2026-04-21T08:38:18.266900",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 57724,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-357",
              "timestamp": "2026-04-21T08:37:50.597500",
              "price": 0.665,
              "size": 500.0,
              "notional": 332.5,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 57723,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-356",
              "timestamp": "2026-04-21T08:35:52.917700",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 57722,
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
              "retail_pct": 0.5735431807035535,
              "mixed_pct": 0.24740291586784965,
              "instit_pct": 0.1295198180926479,
              "ambiguous_pct": 0.04922198938873779,
              "unobservable_pct": 0.0003120959472111998,
              "unclear_pct": 0.04953408533594899,
              "retail_qty_pct": 0.07703694330316128,
              "mixed_qty_pct": 0.2983645928486032,
              "instit_qty_pct": 0.4650925526824658,
              "ambiguous_qty_pct": 0.15686964591003216,
              "unobservable_qty_pct": 0.002636265255737502,
              "unclear_qty_pct": 0.15950591116576968,
              "retail_notional_pct": 0.07698801747379631,
              "mixed_notional_pct": 0.29888261922485015,
              "instit_notional_pct": 0.46499346625975274,
              "ambiguous_notional_pct": 0.15649417354307893,
              "unobservable_notional_pct": 0.002641723498521865,
              "unclear_notional_pct": 0.1591358970416008,
              "run_retail_pct": 0.8209836907666623,
              "run_mixed_pct": 0.1548735071272634,
              "run_instit_pct": 0.0157955566970592,
              "run_unclear_pct": 0.008347245409015025,
              "avg_trade_size": 2259.4726024343486,
              "avg_run_notional": 3253.994542185694,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.5223449338641325,
              "medium_confidence_pct": 0.29266726595608067,
              "low_confidence_pct": 0.02176704764350841,
              "na_confidence_pct": 0.1632207525362784,
              "avg_feature_coverage": 0.8651341980223447,
              "observable_run_pct": 0.9999357904199306,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "AJBU",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.37316403988874824,
              "mixed_pct": 0.33783548479700315,
              "instit_pct": 0.24134198624882935,
              "ambiguous_pct": 0.047314945103557327,
              "unobservable_pct": 0.00034354396186191415,
              "unclear_pct": 0.04765848906541924,
              "retail_qty_pct": 0.09889098380575588,
              "mixed_qty_pct": 0.22493761181704838,
              "instit_qty_pct": 0.6149122964389157,
              "ambiguous_qty_pct": 0.05122184745714159,
              "unobservable_qty_pct": 0.010037260481138498,
              "unclear_qty_pct": 0.061259107938280086,
              "retail_notional_pct": 0.09877965112067992,
              "mixed_notional_pct": 0.22475427181135552,
              "instit_notional_pct": 0.6151299180957615,
              "ambiguous_notional_pct": 0.051333393323878554,
              "unobservable_notional_pct": 0.010002765648324597,
              "unclear_notional_pct": 0.06133615897220315,
              "run_retail_pct": 0.7208529677757152,
              "run_mixed_pct": 0.24738921414631823,
              "run_instit_pct": 0.01627873768384978,
              "run_unclear_pct": 0.015479080394116808,
              "avg_trade_size": 6579.162142584863,
              "avg_run_notional": 13308.703344661813,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.31565519539245085,
              "medium_confidence_pct": 0.3696987005569042,
              "low_confidence_pct": 0.05177780951020991,
              "na_confidence_pct": 0.26286829454043503,
              "avg_feature_coverage": 0.8858422580798704,
              "observable_run_pct": 0.9996763291922509,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "JYEU",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.4684039855323513,
              "mixed_pct": 0.3268455259766356,
              "instit_pct": 0.15783456437687948,
              "ambiguous_pct": 0.04664569504302878,
              "unobservable_pct": 0.00027022907110489045,
              "unclear_pct": 0.04691592411413367,
              "retail_qty_pct": 0.08369264010664375,
              "mixed_qty_pct": 0.23168227691139542,
              "instit_qty_pct": 0.540211518505604,
              "ambiguous_qty_pct": 0.046039562450431025,
              "unobservable_qty_pct": 0.09837400202592583,
              "unclear_qty_pct": 0.14441356447635686,
              "retail_notional_pct": 0.08333610699712936,
              "mixed_notional_pct": 0.22955734600787486,
              "instit_notional_pct": 0.5481138849375226,
              "ambiguous_notional_pct": 0.046022121957772257,
              "unobservable_notional_pct": 0.09297054009970088,
              "unclear_notional_pct": 0.13899266205747313,
              "run_retail_pct": 0.7658769332017111,
              "run_mixed_pct": 0.21755276641752455,
              "run_instit_pct": 0.007533023080900672,
              "run_unclear_pct": 0.009037277299863677,
              "avg_trade_size": 4378.023334557448,
              "avg_run_notional": 7425.434631810276,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.3752644196869271,
              "medium_confidence_pct": 0.3547101960231279,
              "low_confidence_pct": 0.04343534057255676,
              "na_confidence_pct": 0.22659004371738825,
              "avg_feature_coverage": 0.883898603864053,
              "observable_run_pct": 0.9995886804870023,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "AU8U",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.4748656226004036,
              "mixed_pct": 0.2798442829336238,
              "instit_pct": 0.20084287219414632,
              "ambiguous_pct": 0.04442936481008589,
              "unobservable_pct": 1.7857461740388223e-05,
              "unclear_pct": 0.04444722227182628,
              "retail_qty_pct": 0.10197663223165518,
              "mixed_qty_pct": 0.271456534376476,
              "instit_qty_pct": 0.5480730220053045,
              "ambiguous_qty_pct": 0.07760820990420365,
              "unobservable_qty_pct": 0.0008856014823606351,
              "unclear_qty_pct": 0.07849381138656429,
              "retail_notional_pct": 0.10275956342407937,
              "mixed_notional_pct": 0.27191925508034587,
              "instit_notional_pct": 0.5472937595347205,
              "ambiguous_notional_pct": 0.07715863950303303,
              "unobservable_notional_pct": 0.0008687824578212543,
              "unclear_notional_pct": 0.07802742196085428,
              "run_retail_pct": 0.78689924371798,
              "run_mixed_pct": 0.18580751402781165,
              "run_instit_pct": 0.019547450597706757,
              "run_unclear_pct": 0.007745791656501586,
              "avg_trade_size": 1654.56176896016,
              "avg_run_notional": 2825.5002592095634,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.4676445474505977,
              "medium_confidence_pct": 0.31583922908026346,
              "low_confidence_pct": 0.02296291778482557,
              "na_confidence_pct": 0.19355330568431325,
              "avg_feature_coverage": 0.8722386557696997,
              "observable_run_pct": 0.9999695047572579,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "ODBU",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.35118483412322277,
              "mixed_pct": 0.15924170616113745,
              "instit_pct": 0.1981042654028436,
              "ambiguous_pct": 0.2914691943127962,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.2914691943127962,
              "retail_qty_pct": 0.08263006089093046,
              "mixed_qty_pct": 0.15396992842645016,
              "instit_qty_pct": 0.4076554321119539,
              "ambiguous_qty_pct": 0.35574457857066555,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.35574457857066555,
              "retail_notional_pct": 0.08359563353023768,
              "mixed_notional_pct": 0.15532236234615532,
              "instit_notional_pct": 0.4042051937209861,
              "ambiguous_notional_pct": 0.35687681040262087,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.35687681040262087,
              "run_retail_pct": 0.5607476635514018,
              "run_mixed_pct": 0.17587085811384875,
              "run_instit_pct": 0.07646559048428207,
              "run_unclear_pct": 0.18691588785046728,
              "avg_trade_size": 3746.7772511848343,
              "avg_run_notional": 6716.822429906542,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.1784197111299915,
              "medium_confidence_pct": 0.1265930331350892,
              "low_confidence_pct": 0.3322005097706032,
              "na_confidence_pct": 0.36278674596431604,
              "avg_feature_coverage": 0.8488530161427357,
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
              "retail_pct": 0.620253164556962,
              "mixed_pct": 0.24331926863572434,
              "instit_pct": 0.11954992967651196,
              "ambiguous_pct": 0.016877637130801686,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.016877637130801686,
              "retail_qty_pct": 0.12286451347113346,
              "mixed_qty_pct": 0.4997895640080713,
              "instit_qty_pct": 0.34950633166735634,
              "ambiguous_qty_pct": 0.027839590853438918,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.027839590853438918,
              "retail_notional_pct": 0.12265846010783404,
              "mixed_notional_pct": 0.5028454818712222,
              "instit_notional_pct": 0.3469645127191524,
              "ambiguous_notional_pct": 0.027531545301791277,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.027531545301791277,
              "run_retail_pct": 0.8145569620253165,
              "run_mixed_pct": 0.160126582278481,
              "run_instit_pct": 0.015822784810126583,
              "run_unclear_pct": 0.00949367088607595,
              "avg_trade_size": 2770.062025316456,
              "avg_run_notional": 3739.583734177215,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.4544303797468354,
              "medium_confidence_pct": 0.1449367088607595,
              "low_confidence_pct": 0.2310126582278481,
              "na_confidence_pct": 0.16962025316455695,
              "avg_feature_coverage": 0.8556012658227845,
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
          "n_trades": 47959,
          "n_runs": 34419,
          "n_trade_days": 126,
          "first_trade_date": "2025-10-21",
          "last_trade_date": "2026-04-21",
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
            "retail_pct": 0.5993869763756542,
            "mixed_pct": 0.24648136950311725,
            "instit_pct": 0.11032340123855794,
            "ambiguous_pct": 0.043662294876873994,
            "unobservable_pct": 0.00014595800579661795,
            "unclear_pct": 0.04380825288267061,
            "retail_qty_pct": 0.09385097256020307,
            "mixed_qty_pct": 0.3022028604800053,
            "instit_qty_pct": 0.47871432833896344,
            "ambiguous_qty_pct": 0.12373247809809117,
            "unobservable_qty_pct": 0.0014993605227370526,
            "unclear_qty_pct": 0.1252318386208282,
            "retail_notional_pct": 0.09395681424933743,
            "mixed_notional_pct": 0.30244796889585834,
            "instit_notional_pct": 0.4788728534395832,
            "ambiguous_notional_pct": 0.12323302256250741,
            "unobservable_notional_pct": 0.0014893408527136495,
            "unclear_notional_pct": 0.12472236341522107
          },
          "run_composition": {
            "retail_pct": 0.8269269880008135,
            "mixed_pct": 0.15261919288764927,
            "instit_pct": 0.01371335599523519,
            "ambiguous_pct": 0.006711409395973154,
            "unobservable_pct": 2.9053720328888115e-05,
            "unclear_pct": 0.006740463116302042,
            "retail_notional_pct": 0.09395681424933743,
            "mixed_notional_pct": 0.30244796889585834,
            "instit_notional_pct": 0.4788728534395832,
            "unclear_notional_pct": 0.12472236341522107
          },
          "counts": {
            "trades": {
              "retail": 28746,
              "mixed": 11821,
              "institutional": 5291,
              "ambiguous": 2094,
              "unobservable": 7,
              "unclear": 2101
            },
            "runs": {
              "retail": 28462,
              "mixed": 5253,
              "institutional": 472,
              "ambiguous": 231,
              "unobservable": 1,
              "unclear": 232
            }
          },
          "confidence": {
            "high": 0.4993753450129289,
            "medium": 0.3124146546965339,
            "low": 0.028850344286585897,
            "na": 0.1593596560039513
          },
          "confidence_counts": {
            "high": 17188,
            "medium": 10753,
            "low": 993,
            "na": 5485
          },
          "trade_confidence": {
            "high": 0.39173043641443733,
            "medium": 0.2894555766383786,
            "low": 0.028524364561396193,
            "na": 0.29028962238578787
          },
          "trade_confidence_counts": {
            "high": 18787,
            "medium": 13882,
            "low": 1368,
            "na": 13922
          },
          "observability": {
            "avg_feature_coverage": 0.8651892849879427,
            "observable_run_pct": 0.9999709462796711,
            "ambiguous_run_pct": 0.006711409395973154,
            "unobservable_run_pct": 2.9053720328888115e-05
          },
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "dominant_share": 0.8269269880008135,
          "dominance_gap": 0.6743077951131643,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 37400,
              "MULTI_FILL_SINGLE_PRICE": 10341,
              "WALK_BOOK": 211,
              "UNOBSERVABLE": 7
            },
            "d2_information": {
              "NEUTRAL_OR_REVERSING": 46600,
              "MOMENTUM_REACTIVE": 911,
              "PERSISTENT_POSITIVE_IMPACT": 415,
              "UNOBSERVABLE": 29,
              "SHORT_HORIZON_POSITIVE_IMPACT": 4
            },
            "d3_urgency": {
              "IMMEDIATE": 34128,
              "ADAPTIVE": 285,
              "SCHEDULED": 6
            },
            "participant_confidence": {
              "HIGH": 17188,
              "MEDIUM": 10753,
              "NA": 5485,
              "LOW": 993
            }
          },
          "trade_size": {
            "avg": 1874.3044162722326,
            "median": 136.0
          },
          "run_size": {
            "avg": 2611.6321072663354,
            "median": 137.0,
            "avg_length": 1.149597605973445
          },
          "recent_trades": [
            {
              "trade_id": "BMLL-385",
              "timestamp": "2026-04-21T08:59:44.055400",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57747,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-384",
              "timestamp": "2026-04-21T08:59:42.725500",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57747,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-383",
              "timestamp": "2026-04-21T08:59:27.976100",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57746,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "BMLL-382",
              "timestamp": "2026-04-21T08:59:26.068000",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57746,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "BMLL-381",
              "timestamp": "2026-04-21T08:59:22.798400",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57746,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "BMLL-380",
              "timestamp": "2026-04-21T08:59:03.605600",
              "price": 0.665,
              "size": 300.0,
              "notional": 199.5,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 57745,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-379",
              "timestamp": "2026-04-21T08:58:52.349500",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 57744,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-378",
              "timestamp": "2026-04-21T08:58:41.133600",
              "price": 0.67,
              "size": 200.0,
              "notional": 134.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 57743,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-377",
              "timestamp": "2026-04-21T08:58:31.851700",
              "price": 0.67,
              "size": 300.0,
              "notional": 201.0,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 57742,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-376",
              "timestamp": "2026-04-21T08:58:01.566900",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 57741,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-375",
              "timestamp": "2026-04-21T08:57:51.292100",
              "price": 0.665,
              "size": 300.0,
              "notional": 199.5,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 57740,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-374",
              "timestamp": "2026-04-21T08:57:34.239900",
              "price": 0.67,
              "size": 200.0,
              "notional": 134.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 57739,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-373",
              "timestamp": "2026-04-21T08:56:56.555800",
              "price": 0.67,
              "size": 200.0,
              "notional": 134.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 57738,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-372",
              "timestamp": "2026-04-21T08:54:32.656300",
              "price": 0.665,
              "size": 200.0,
              "notional": 133.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 57737,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-371",
              "timestamp": "2026-04-21T08:54:22.716700",
              "price": 0.67,
              "size": 300.0,
              "notional": 201.0,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 57736,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-370",
              "timestamp": "2026-04-21T08:50:22.971000",
              "price": 0.67,
              "size": 300.0,
              "notional": 201.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57735,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-369",
              "timestamp": "2026-04-21T08:50:22.397900",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57735,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-368",
              "timestamp": "2026-04-21T08:49:51.819800",
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
              "trade_id": "BMLL-367",
              "timestamp": "2026-04-21T08:49:28.870100",
              "price": 0.665,
              "size": 200.0,
              "notional": 133.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 57733,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-366",
              "timestamp": "2026-04-21T08:49:12.035800",
              "price": 0.665,
              "size": 400.0,
              "notional": 266.0,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 57732,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-365",
              "timestamp": "2026-04-21T08:48:56.190800",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 57731,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-364",
              "timestamp": "2026-04-21T08:48:02.762200",
              "price": 0.67,
              "size": 500.0,
              "notional": 335.0,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 57730,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-363",
              "timestamp": "2026-04-21T08:46:31.682200",
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
              "trade_id": "BMLL-362",
              "timestamp": "2026-04-21T08:45:50.844600",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 57728,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-361",
              "timestamp": "2026-04-21T08:45:25.306500",
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
              "trade_id": "BMLL-360",
              "timestamp": "2026-04-21T08:42:21.653000",
              "price": 0.665,
              "size": 200.0,
              "notional": 133.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 57726,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-359",
              "timestamp": "2026-04-21T08:41:23.484100",
              "price": 0.67,
              "size": 200.0,
              "notional": 134.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 57725,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-358",
              "timestamp": "2026-04-21T08:38:18.266900",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 57724,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-357",
              "timestamp": "2026-04-21T08:37:50.597500",
              "price": 0.665,
              "size": 500.0,
              "notional": 332.5,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 57723,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-356",
              "timestamp": "2026-04-21T08:35:52.917700",
              "price": 0.67,
              "size": 100.0,
              "notional": 67.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 57722,
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
              "retail_pct": 0.5993869763756542,
              "mixed_pct": 0.24648136950311725,
              "instit_pct": 0.11032340123855794,
              "ambiguous_pct": 0.043662294876873994,
              "unobservable_pct": 0.00014595800579661795,
              "unclear_pct": 0.04380825288267061,
              "retail_qty_pct": 0.09385097256020307,
              "mixed_qty_pct": 0.3022028604800053,
              "instit_qty_pct": 0.47871432833896344,
              "ambiguous_qty_pct": 0.12373247809809117,
              "unobservable_qty_pct": 0.0014993605227370526,
              "unclear_qty_pct": 0.1252318386208282,
              "retail_notional_pct": 0.09395681424933743,
              "mixed_notional_pct": 0.30244796889585834,
              "instit_notional_pct": 0.4788728534395832,
              "ambiguous_notional_pct": 0.12323302256250741,
              "unobservable_notional_pct": 0.0014893408527136495,
              "unclear_notional_pct": 0.12472236341522107,
              "run_retail_pct": 0.8269269880008135,
              "run_mixed_pct": 0.15261919288764927,
              "run_instit_pct": 0.01371335599523519,
              "run_unclear_pct": 0.006740463116302042,
              "avg_trade_size": 1874.3044162722326,
              "avg_run_notional": 2611.6321072663354,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.4993753450129289,
              "medium_confidence_pct": 0.3124146546965339,
              "low_confidence_pct": 0.028850344286585897,
              "na_confidence_pct": 0.1593596560039513,
              "avg_feature_coverage": 0.8651892849879427,
              "observable_run_pct": 0.9999709462796711,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "AJBU",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.36585170821422147,
              "mixed_pct": 0.3314650260879995,
              "instit_pct": 0.2318958279191572,
              "ambiguous_pct": 0.0704475941067109,
              "unobservable_pct": 0.000339843671910921,
              "unclear_pct": 0.07078743777862183,
              "retail_qty_pct": 0.09983501829118042,
              "mixed_qty_pct": 0.22455880571361483,
              "instit_qty_pct": 0.6149550807687535,
              "ambiguous_qty_pct": 0.04686574469045256,
              "unobservable_qty_pct": 0.01378535053599871,
              "unclear_qty_pct": 0.06065109522645127,
              "retail_notional_pct": 0.09976975737588993,
              "mixed_notional_pct": 0.2244852147797222,
              "instit_notional_pct": 0.6151503516051795,
              "ambiguous_notional_pct": 0.04683661714083718,
              "unobservable_notional_pct": 0.013758059098371194,
              "unclear_notional_pct": 0.060594676239208375,
              "run_retail_pct": 0.7217968931737703,
              "run_mixed_pct": 0.24606994236087776,
              "run_instit_pct": 0.015151593476181861,
              "run_unclear_pct": 0.01698157098917005,
              "avg_trade_size": 5698.6364528566855,
              "avg_run_notional": 11788.896741968001,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.3124402284887177,
              "medium_confidence_pct": 0.37119594716844584,
              "low_confidence_pct": 0.053312310992788645,
              "na_confidence_pct": 0.26305151335004784,
              "avg_feature_coverage": 0.886479878001499,
              "observable_run_pct": 0.9995916151877795,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "JYEU",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.4490833725054485,
              "mixed_pct": 0.31040243035456916,
              "instit_pct": 0.16257657986643928,
              "ambiguous_pct": 0.07766956346076896,
              "unobservable_pct": 0.00026805381277412386,
              "unclear_pct": 0.07793761727354309,
              "retail_qty_pct": 0.08327206477167227,
              "mixed_qty_pct": 0.21785269288264533,
              "instit_qty_pct": 0.5667405291499752,
              "ambiguous_qty_pct": 0.06570836924893614,
              "unobservable_qty_pct": 0.06642634394677112,
              "unclear_qty_pct": 0.13213471319570724,
              "retail_notional_pct": 0.0830653313660128,
              "mixed_notional_pct": 0.21609783731404,
              "instit_notional_pct": 0.572357995884001,
              "ambiguous_notional_pct": 0.06657561466867369,
              "unobservable_notional_pct": 0.0619032207672725,
              "unclear_notional_pct": 0.12847883543594618,
              "run_retail_pct": 0.7664742282296816,
              "run_mixed_pct": 0.2127908182666713,
              "run_instit_pct": 0.008808379714453625,
              "run_unclear_pct": 0.011926573789193488,
              "avg_trade_size": 4061.7843875747344,
              "avg_run_notional": 7228.872548069278,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.3788018114564248,
              "medium_confidence_pct": 0.354824212673281,
              "low_confidence_pct": 0.041656583814429424,
              "na_confidence_pct": 0.22471739205586477,
              "avg_feature_coverage": 0.8833204272824696,
              "observable_run_pct": 0.999571334739171,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "AU8U",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.4916331994645248,
              "mixed_pct": 0.2690972222222222,
              "instit_pct": 0.19731007362784472,
              "ambiguous_pct": 0.04194904618473896,
              "unobservable_pct": 1.0458500669344042e-05,
              "unclear_pct": 0.0419595046854083,
              "retail_qty_pct": 0.11529069524913625,
              "mixed_qty_pct": 0.26984011291432364,
              "instit_qty_pct": 0.5369994732926361,
              "ambiguous_qty_pct": 0.07733338467469517,
              "unobservable_qty_pct": 0.0005363338692087976,
              "unclear_qty_pct": 0.07786971854390397,
              "retail_notional_pct": 0.11658553888850796,
              "mixed_notional_pct": 0.2697998776239027,
              "instit_notional_pct": 0.5360880876438843,
              "ambiguous_notional_pct": 0.0770256423594022,
              "unobservable_notional_pct": 0.0005008534843028451,
              "unclear_notional_pct": 0.07752649584370504,
              "run_retail_pct": 0.7958746363303775,
              "run_mixed_pct": 0.17640807651434645,
              "run_instit_pct": 0.019773174683367884,
              "run_unclear_pct": 0.007944112471908155,
              "avg_trade_size": 1680.8657546854083,
              "avg_run_notional": 2799.9104545216983,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.46389435724116307,
              "medium_confidence_pct": 0.3279211163568579,
              "low_confidence_pct": 0.023832337415724464,
              "na_confidence_pct": 0.1843521889862546,
              "avg_feature_coverage": 0.8702322259194087,
              "observable_run_pct": 0.9999825787007195,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "D5IU",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.5338308457711443,
              "mixed_pct": 0.2175787728026534,
              "instit_pct": 0.17346600331674958,
              "ambiguous_pct": 0.07512437810945273,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.07512437810945273,
              "retail_qty_pct": 0.11831772620792759,
              "mixed_qty_pct": 0.4347387496700075,
              "instit_qty_pct": 0.3848709891253706,
              "ambiguous_qty_pct": 0.06207253499669431,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.06207253499669431,
              "retail_notional_pct": 0.11496797002235226,
              "mixed_notional_pct": 0.41196378790486343,
              "instit_notional_pct": 0.3968026177552578,
              "ambiguous_notional_pct": 0.07626562431752648,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.07626562431752648,
              "run_retail_pct": 0.774024024024024,
              "run_mixed_pct": 0.16441441441441443,
              "run_instit_pct": 0.029779779779779778,
              "run_unclear_pct": 0.03178178178178178,
              "avg_trade_size": 1807.6530845771144,
              "avg_run_notional": 2727.7647897897896,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.3683683683683684,
              "medium_confidence_pct": 0.21796796796796797,
              "low_confidence_pct": 0.21746746746746748,
              "na_confidence_pct": 0.1961961961961962,
              "avg_feature_coverage": 0.8552177177177175,
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
              "retail_pct": 0.41285452881976215,
              "mixed_pct": 0.19258920402561758,
              "instit_pct": 0.14707227813357732,
              "ambiguous_pct": 0.247483989021043,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.247483989021043,
              "retail_qty_pct": 0.0931164310032819,
              "mixed_qty_pct": 0.17110005214244087,
              "instit_qty_pct": 0.37716621169831,
              "ambiguous_qty_pct": 0.35861730515596724,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.35861730515596724,
              "retail_notional_pct": 0.093452905703567,
              "mixed_notional_pct": 0.17149868864771062,
              "instit_notional_pct": 0.3759444979823614,
              "ambiguous_notional_pct": 0.35910390766636097,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.35910390766636097,
              "run_retail_pct": 0.6408477842003854,
              "run_mixed_pct": 0.16416184971098266,
              "run_instit_pct": 0.055876685934489405,
              "run_unclear_pct": 0.13911368015414258,
              "avg_trade_size": 3092.4091948764867,
              "avg_run_notional": 5210.024277456648,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.22003853564547207,
              "medium_confidence_pct": 0.18766859344894027,
              "low_confidence_pct": 0.28901734104046245,
              "na_confidence_pct": 0.30327552986512524,
              "avg_feature_coverage": 0.8522543352601156,
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
              "retail_pct": 0.14098750743604996,
              "mixed_pct": 0.1951219512195122,
              "instit_pct": 0.21296847114812612,
              "ambiguous_pct": 0.44378346222486614,
              "unobservable_pct": 0.007138607971445568,
              "unclear_pct": 0.4509220701963117,
              "retail_qty_pct": 0.008151515456054957,
              "mixed_qty_pct": 0.015610710421321684,
              "instit_qty_pct": 0.07349763661884072,
              "ambiguous_qty_pct": 0.05053939582754073,
              "unobservable_qty_pct": 0.8522007416762419,
              "unclear_qty_pct": 0.9027401375037827,
              "retail_notional_pct": 0.008200823463919253,
              "mixed_notional_pct": 0.01552085923729337,
              "instit_notional_pct": 0.0709343474249348,
              "ambiguous_notional_pct": 0.0505137724485638,
              "unobservable_notional_pct": 0.8548301974252888,
              "unclear_notional_pct": 0.9053439698738526,
              "run_retail_pct": 0.48873873873873874,
              "run_mixed_pct": 0.17792792792792791,
              "run_instit_pct": 0.08558558558558559,
              "run_unclear_pct": 0.24774774774774774,
              "avg_trade_size": 1168.1042831647828,
              "avg_run_notional": 4422.48490990991,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.2072072072072072,
              "medium_confidence_pct": 0.17117117117117117,
              "low_confidence_pct": 0.19594594594594594,
              "na_confidence_pct": 0.42567567567567566,
              "avg_feature_coverage": 0.8824324324324323,
              "observable_run_pct": 0.9887387387387387,
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
      "n_trades": 47959,
      "n_runs": 34419,
      "n_trade_days": 126,
      "first_trade_date": "2025-10-21",
      "last_trade_date": "2026-04-21",
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
        "retail_pct": 0.5993869763756542,
        "mixed_pct": 0.24648136950311725,
        "instit_pct": 0.11032340123855794,
        "ambiguous_pct": 0.043662294876873994,
        "unobservable_pct": 0.00014595800579661795,
        "unclear_pct": 0.04380825288267061,
        "retail_qty_pct": 0.09385097256020307,
        "mixed_qty_pct": 0.3022028604800053,
        "instit_qty_pct": 0.47871432833896344,
        "ambiguous_qty_pct": 0.12373247809809117,
        "unobservable_qty_pct": 0.0014993605227370526,
        "unclear_qty_pct": 0.1252318386208282,
        "retail_notional_pct": 0.09395681424933743,
        "mixed_notional_pct": 0.30244796889585834,
        "instit_notional_pct": 0.4788728534395832,
        "ambiguous_notional_pct": 0.12323302256250741,
        "unobservable_notional_pct": 0.0014893408527136495,
        "unclear_notional_pct": 0.12472236341522107
      },
      "run_composition": {
        "retail_pct": 0.8269269880008135,
        "mixed_pct": 0.15261919288764927,
        "instit_pct": 0.01371335599523519,
        "ambiguous_pct": 0.006711409395973154,
        "unobservable_pct": 2.9053720328888115e-05,
        "unclear_pct": 0.006740463116302042
      },
      "trade_size": {
        "avg": 1874.3044162722326,
        "median": 136.0
      },
      "run_size": {
        "avg": 2611.6321072663354,
        "median": 137.0,
        "avg_length": 1.149597605973445
      },
      "confidence": {
        "high": 0.4993753450129289,
        "medium": 0.3124146546965339,
        "low": 0.028850344286585897,
        "na": 0.1593596560039513
      },
      "confidence_counts": {
        "high": 17188,
        "medium": 10753,
        "low": 993,
        "na": 5485
      },
      "trade_confidence": {
        "high": 0.39173043641443733,
        "medium": 0.2894555766383786,
        "low": 0.028524364561396193,
        "na": 0.29028962238578787
      },
      "trade_confidence_counts": {
        "high": 18787,
        "medium": 13882,
        "low": 1368,
        "na": 13922
      },
      "counts": {
        "trades": {
          "retail": 28746,
          "mixed": 11821,
          "institutional": 5291,
          "ambiguous": 2094,
          "unobservable": 7,
          "unclear": 2101
        },
        "runs": {
          "retail": 28462,
          "mixed": 5253,
          "institutional": 472,
          "ambiguous": 231,
          "unobservable": 1,
          "unclear": 232
        }
      },
      "observability": {
        "avg_feature_coverage": 0.8651892849879427,
        "observable_run_pct": 0.9999709462796711,
        "ambiguous_run_pct": 0.006711409395973154,
        "unobservable_run_pct": 2.9053720328888115e-05
      },
      "dominant_bucket": "RETAIL",
      "dominant_label": "Retail-led",
      "dominant_share": 0.8269269880008135,
      "dominance_gap": 0.6743077951131643,
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
            "n_trades": 6207,
            "n_runs": 4483,
            "retail_pct": 0.5880457547929757,
            "mixed_pct": 0.26131786692444015,
            "instit_pct": 0.08135975511519253,
            "ambiguous_pct": 0.0681488641855969,
            "unobservable_pct": 0.001127758981794748,
            "unclear_pct": 0.06927662316739165,
            "avg_trade_size": 1627.6884163041727,
            "avg_run_notional": 2253.638634842739,
            "retail_qty_pct": 0.07710352650030934,
            "mixed_qty_pct": 0.2805668694576201,
            "instit_qty_pct": 0.3727637141678697,
            "ambiguous_qty_pct": 0.2566766343575995,
            "unobservable_qty_pct": 0.012889255516601361,
            "unclear_qty_pct": 0.2695658898742009,
            "retail_notional_pct": 0.07699329173670319,
            "mixed_notional_pct": 0.2802484038997286,
            "instit_notional_pct": 0.37375985617033725,
            "ambiguous_notional_pct": 0.2557473664914657,
            "unobservable_notional_pct": 0.013251081701765267,
            "unclear_notional_pct": 0.26899844819323093,
            "run_retail_pct": 0.8106178898059335,
            "run_mixed_pct": 0.16529109971001563,
            "run_instit_pct": 0.013383894713361589,
            "run_ambiguous_pct": 0.010484050858799911,
            "run_unobservable_pct": 0.00022306491188935982,
            "run_unclear_pct": 0.01070711577068927,
            "avg_feature_coverage": 0.8688489850546507,
            "high_confidence_pct": 0.5433861253624804,
            "medium_confidence_pct": 0.2658933749721169,
            "low_confidence_pct": 0.014722284184697747,
            "na_confidence_pct": 0.17599821548070488,
            "total_quantity": null
          }
        ]
      },
      "peer_comparison": [
        {
          "ticker": "CRPU",
          "currency": "SGD",
          "is_target": true,
          "retail_pct": 0.5993869763756542,
          "mixed_pct": 0.24648136950311725,
          "instit_pct": 0.11032340123855794,
          "ambiguous_pct": 0.043662294876873994,
          "unobservable_pct": 0.00014595800579661795,
          "unclear_pct": 0.04380825288267061,
          "retail_qty_pct": 0.09385097256020307,
          "mixed_qty_pct": 0.3022028604800053,
          "instit_qty_pct": 0.47871432833896344,
          "ambiguous_qty_pct": 0.12373247809809117,
          "unobservable_qty_pct": 0.0014993605227370526,
          "unclear_qty_pct": 0.1252318386208282,
          "retail_notional_pct": 0.09395681424933743,
          "mixed_notional_pct": 0.30244796889585834,
          "instit_notional_pct": 0.4788728534395832,
          "ambiguous_notional_pct": 0.12323302256250741,
          "unobservable_notional_pct": 0.0014893408527136495,
          "unclear_notional_pct": 0.12472236341522107,
          "run_retail_pct": 0.8269269880008135,
          "run_mixed_pct": 0.15261919288764927,
          "run_instit_pct": 0.01371335599523519,
          "run_unclear_pct": 0.006740463116302042,
          "avg_trade_size": 1874.3044162722326,
          "avg_run_notional": 2611.6321072663354,
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "high_confidence_pct": 0.4993753450129289,
          "medium_confidence_pct": 0.3124146546965339,
          "low_confidence_pct": 0.028850344286585897,
          "na_confidence_pct": 0.1593596560039513,
          "avg_feature_coverage": 0.8651892849879427,
          "observable_run_pct": 0.9999709462796711,
          "thresholds": {
            "retail_max": 10000.0,
            "instit_min": 50000.0
          }
        },
        {
          "ticker": "AJBU",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.36585170821422147,
          "mixed_pct": 0.3314650260879995,
          "instit_pct": 0.2318958279191572,
          "ambiguous_pct": 0.0704475941067109,
          "unobservable_pct": 0.000339843671910921,
          "unclear_pct": 0.07078743777862183,
          "retail_qty_pct": 0.09983501829118042,
          "mixed_qty_pct": 0.22455880571361483,
          "instit_qty_pct": 0.6149550807687535,
          "ambiguous_qty_pct": 0.04686574469045256,
          "unobservable_qty_pct": 0.01378535053599871,
          "unclear_qty_pct": 0.06065109522645127,
          "retail_notional_pct": 0.09976975737588993,
          "mixed_notional_pct": 0.2244852147797222,
          "instit_notional_pct": 0.6151503516051795,
          "ambiguous_notional_pct": 0.04683661714083718,
          "unobservable_notional_pct": 0.013758059098371194,
          "unclear_notional_pct": 0.060594676239208375,
          "run_retail_pct": 0.7217968931737703,
          "run_mixed_pct": 0.24606994236087776,
          "run_instit_pct": 0.015151593476181861,
          "run_unclear_pct": 0.01698157098917005,
          "avg_trade_size": 5698.6364528566855,
          "avg_run_notional": 11788.896741968001,
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "high_confidence_pct": 0.3124402284887177,
          "medium_confidence_pct": 0.37119594716844584,
          "low_confidence_pct": 0.053312310992788645,
          "na_confidence_pct": 0.26305151335004784,
          "avg_feature_coverage": 0.886479878001499,
          "observable_run_pct": 0.9995916151877795,
          "thresholds": {
            "retail_max": 10000.0,
            "instit_min": 50000.0
          }
        },
        {
          "ticker": "JYEU",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.4490833725054485,
          "mixed_pct": 0.31040243035456916,
          "instit_pct": 0.16257657986643928,
          "ambiguous_pct": 0.07766956346076896,
          "unobservable_pct": 0.00026805381277412386,
          "unclear_pct": 0.07793761727354309,
          "retail_qty_pct": 0.08327206477167227,
          "mixed_qty_pct": 0.21785269288264533,
          "instit_qty_pct": 0.5667405291499752,
          "ambiguous_qty_pct": 0.06570836924893614,
          "unobservable_qty_pct": 0.06642634394677112,
          "unclear_qty_pct": 0.13213471319570724,
          "retail_notional_pct": 0.0830653313660128,
          "mixed_notional_pct": 0.21609783731404,
          "instit_notional_pct": 0.572357995884001,
          "ambiguous_notional_pct": 0.06657561466867369,
          "unobservable_notional_pct": 0.0619032207672725,
          "unclear_notional_pct": 0.12847883543594618,
          "run_retail_pct": 0.7664742282296816,
          "run_mixed_pct": 0.2127908182666713,
          "run_instit_pct": 0.008808379714453625,
          "run_unclear_pct": 0.011926573789193488,
          "avg_trade_size": 4061.7843875747344,
          "avg_run_notional": 7228.872548069278,
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "high_confidence_pct": 0.3788018114564248,
          "medium_confidence_pct": 0.354824212673281,
          "low_confidence_pct": 0.041656583814429424,
          "na_confidence_pct": 0.22471739205586477,
          "avg_feature_coverage": 0.8833204272824696,
          "observable_run_pct": 0.999571334739171,
          "thresholds": {
            "retail_max": 10000.0,
            "instit_min": 50000.0
          }
        },
        {
          "ticker": "AU8U",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.4916331994645248,
          "mixed_pct": 0.2690972222222222,
          "instit_pct": 0.19731007362784472,
          "ambiguous_pct": 0.04194904618473896,
          "unobservable_pct": 1.0458500669344042e-05,
          "unclear_pct": 0.0419595046854083,
          "retail_qty_pct": 0.11529069524913625,
          "mixed_qty_pct": 0.26984011291432364,
          "instit_qty_pct": 0.5369994732926361,
          "ambiguous_qty_pct": 0.07733338467469517,
          "unobservable_qty_pct": 0.0005363338692087976,
          "unclear_qty_pct": 0.07786971854390397,
          "retail_notional_pct": 0.11658553888850796,
          "mixed_notional_pct": 0.2697998776239027,
          "instit_notional_pct": 0.5360880876438843,
          "ambiguous_notional_pct": 0.0770256423594022,
          "unobservable_notional_pct": 0.0005008534843028451,
          "unclear_notional_pct": 0.07752649584370504,
          "run_retail_pct": 0.7958746363303775,
          "run_mixed_pct": 0.17640807651434645,
          "run_instit_pct": 0.019773174683367884,
          "run_unclear_pct": 0.007944112471908155,
          "avg_trade_size": 1680.8657546854083,
          "avg_run_notional": 2799.9104545216983,
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "high_confidence_pct": 0.46389435724116307,
          "medium_confidence_pct": 0.3279211163568579,
          "low_confidence_pct": 0.023832337415724464,
          "na_confidence_pct": 0.1843521889862546,
          "avg_feature_coverage": 0.8702322259194087,
          "observable_run_pct": 0.9999825787007195,
          "thresholds": {
            "retail_max": 10000.0,
            "instit_min": 50000.0
          }
        },
        {
          "ticker": "D5IU",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.5338308457711443,
          "mixed_pct": 0.2175787728026534,
          "instit_pct": 0.17346600331674958,
          "ambiguous_pct": 0.07512437810945273,
          "unobservable_pct": 0.0,
          "unclear_pct": 0.07512437810945273,
          "retail_qty_pct": 0.11831772620792759,
          "mixed_qty_pct": 0.4347387496700075,
          "instit_qty_pct": 0.3848709891253706,
          "ambiguous_qty_pct": 0.06207253499669431,
          "unobservable_qty_pct": 0.0,
          "unclear_qty_pct": 0.06207253499669431,
          "retail_notional_pct": 0.11496797002235226,
          "mixed_notional_pct": 0.41196378790486343,
          "instit_notional_pct": 0.3968026177552578,
          "ambiguous_notional_pct": 0.07626562431752648,
          "unobservable_notional_pct": 0.0,
          "unclear_notional_pct": 0.07626562431752648,
          "run_retail_pct": 0.774024024024024,
          "run_mixed_pct": 0.16441441441441443,
          "run_instit_pct": 0.029779779779779778,
          "run_unclear_pct": 0.03178178178178178,
          "avg_trade_size": 1807.6530845771144,
          "avg_run_notional": 2727.7647897897896,
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "high_confidence_pct": 0.3683683683683684,
          "medium_confidence_pct": 0.21796796796796797,
          "low_confidence_pct": 0.21746746746746748,
          "na_confidence_pct": 0.1961961961961962,
          "avg_feature_coverage": 0.8552177177177175,
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
          "retail_pct": 0.41285452881976215,
          "mixed_pct": 0.19258920402561758,
          "instit_pct": 0.14707227813357732,
          "ambiguous_pct": 0.247483989021043,
          "unobservable_pct": 0.0,
          "unclear_pct": 0.247483989021043,
          "retail_qty_pct": 0.0931164310032819,
          "mixed_qty_pct": 0.17110005214244087,
          "instit_qty_pct": 0.37716621169831,
          "ambiguous_qty_pct": 0.35861730515596724,
          "unobservable_qty_pct": 0.0,
          "unclear_qty_pct": 0.35861730515596724,
          "retail_notional_pct": 0.093452905703567,
          "mixed_notional_pct": 0.17149868864771062,
          "instit_notional_pct": 0.3759444979823614,
          "ambiguous_notional_pct": 0.35910390766636097,
          "unobservable_notional_pct": 0.0,
          "unclear_notional_pct": 0.35910390766636097,
          "run_retail_pct": 0.6408477842003854,
          "run_mixed_pct": 0.16416184971098266,
          "run_instit_pct": 0.055876685934489405,
          "run_unclear_pct": 0.13911368015414258,
          "avg_trade_size": 3092.4091948764867,
          "avg_run_notional": 5210.024277456648,
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "high_confidence_pct": 0.22003853564547207,
          "medium_confidence_pct": 0.18766859344894027,
          "low_confidence_pct": 0.28901734104046245,
          "na_confidence_pct": 0.30327552986512524,
          "avg_feature_coverage": 0.8522543352601156,
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
          "retail_pct": 0.14098750743604996,
          "mixed_pct": 0.1951219512195122,
          "instit_pct": 0.21296847114812612,
          "ambiguous_pct": 0.44378346222486614,
          "unobservable_pct": 0.007138607971445568,
          "unclear_pct": 0.4509220701963117,
          "retail_qty_pct": 0.008151515456054957,
          "mixed_qty_pct": 0.015610710421321684,
          "instit_qty_pct": 0.07349763661884072,
          "ambiguous_qty_pct": 0.05053939582754073,
          "unobservable_qty_pct": 0.8522007416762419,
          "unclear_qty_pct": 0.9027401375037827,
          "retail_notional_pct": 0.008200823463919253,
          "mixed_notional_pct": 0.01552085923729337,
          "instit_notional_pct": 0.0709343474249348,
          "ambiguous_notional_pct": 0.0505137724485638,
          "unobservable_notional_pct": 0.8548301974252888,
          "unclear_notional_pct": 0.9053439698738526,
          "run_retail_pct": 0.48873873873873874,
          "run_mixed_pct": 0.17792792792792791,
          "run_instit_pct": 0.08558558558558559,
          "run_unclear_pct": 0.24774774774774774,
          "avg_trade_size": 1168.1042831647828,
          "avg_run_notional": 4422.48490990991,
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "high_confidence_pct": 0.2072072072072072,
          "medium_confidence_pct": 0.17117117117117117,
          "low_confidence_pct": 0.19594594594594594,
          "na_confidence_pct": 0.42567567567567566,
          "avg_feature_coverage": 0.8824324324324323,
          "observable_run_pct": 0.9887387387387387,
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
            "retail_pct": 0.4394736842105263,
            "mixed_pct": 0.0868421052631579,
            "instit_pct": 0.17894736842105263,
            "ambiguous_pct": 0.27631578947368424,
            "unobservable_pct": 0.018421052631578946,
            "unclear_pct": 0.2947368421052632,
            "retail_qty_pct": 0.02592523013338343,
            "mixed_qty_pct": 0.15473730352558082,
            "instit_qty_pct": 0.21203581940008767,
            "ambiguous_qty_pct": 0.4820589892917528,
            "unobservable_qty_pct": 0.12524265764919532,
            "unclear_qty_pct": 0.6073016469409481,
            "retail_notional_pct": 0.025957200585210727,
            "mixed_notional_pct": 0.15459489210765243,
            "instit_notional_pct": 0.2118509876607095,
            "ambiguous_notional_pct": 0.4816387782079568,
            "unobservable_notional_pct": 0.12595814143847056,
            "unclear_notional_pct": 0.6075969196464274,
            "run_retail_pct": 0.8019323671497585,
            "run_mixed_pct": 0.06280193236714976,
            "run_instit_pct": 0.057971014492753624,
            "run_unclear_pct": 0.07729468599033816,
            "avg_trade_size": 2797.0131578947367,
            "avg_run_notional": 5134.613526570049,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.642512077294686,
            "medium_confidence_pct": 0.21739130434782608,
            "low_confidence_pct": 0.0,
            "na_confidence_pct": 0.14009661835748793,
            "avg_feature_coverage": 0.8480676328502413,
            "observable_run_pct": 0.9951690821256038,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "AJBU",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.32978723404255317,
            "mixed_pct": 0.2784954407294833,
            "instit_pct": 0.3620820668693009,
            "ambiguous_pct": 0.028875379939209727,
            "unobservable_pct": 0.0007598784194528875,
            "unclear_pct": 0.029635258358662615,
            "retail_qty_pct": 0.06941050533387472,
            "mixed_qty_pct": 0.19033627403934886,
            "instit_qty_pct": 0.6934996862426636,
            "ambiguous_qty_pct": 0.005514746594810085,
            "unobservable_qty_pct": 0.04123878778930272,
            "unclear_qty_pct": 0.0467535343841128,
            "retail_notional_pct": 0.06940027415129676,
            "mixed_notional_pct": 0.19035977532395368,
            "instit_notional_pct": 0.693768783615646,
            "ambiguous_notional_pct": 0.005504639599698901,
            "unobservable_notional_pct": 0.04096652730940463,
            "unclear_notional_pct": 0.04647116690910353,
            "run_retail_pct": 0.7357330992098332,
            "run_mixed_pct": 0.23968393327480245,
            "run_instit_pct": 0.016681299385425813,
            "run_unclear_pct": 0.007901668129938543,
            "avg_trade_size": 12322.63905775076,
            "avg_run_notional": 28475.141352063212,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.3090430201931519,
            "medium_confidence_pct": 0.3748902546093064,
            "low_confidence_pct": 0.0684811237928007,
            "na_confidence_pct": 0.247585601404741,
            "avg_feature_coverage": 0.8868744512730465,
            "observable_run_pct": 0.9982440737489026,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "JYEU",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.4361525704809287,
            "mixed_pct": 0.2943615257048093,
            "instit_pct": 0.20978441127694858,
            "ambiguous_pct": 0.05887230514096186,
            "unobservable_pct": 0.0008291873963515755,
            "unclear_pct": 0.05970149253731344,
            "retail_qty_pct": 0.07222195738189445,
            "mixed_qty_pct": 0.19976641083091004,
            "instit_qty_pct": 0.6422391190351338,
            "ambiguous_qty_pct": 0.029997139724460123,
            "unobservable_qty_pct": 0.05577537302760166,
            "unclear_qty_pct": 0.08577251275206178,
            "retail_notional_pct": 0.07202909392788491,
            "mixed_notional_pct": 0.19961631586748146,
            "instit_notional_pct": 0.6425777967588293,
            "ambiguous_notional_pct": 0.030149725905944978,
            "unobservable_notional_pct": 0.05562706753985935,
            "unclear_notional_pct": 0.08577679344580433,
            "run_retail_pct": 0.7781065088757396,
            "run_mixed_pct": 0.20266272189349113,
            "run_instit_pct": 0.008875739644970414,
            "run_unclear_pct": 0.010355029585798817,
            "avg_trade_size": 4011.25456053068,
            "avg_run_notional": 7156.173076923077,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.35502958579881655,
            "medium_confidence_pct": 0.386094674556213,
            "low_confidence_pct": 0.04585798816568047,
            "na_confidence_pct": 0.21301775147928995,
            "avg_feature_coverage": 0.8781804733727808,
            "observable_run_pct": 0.9985207100591716,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "AU8U",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.6381381381381381,
            "mixed_pct": 0.25075075075075076,
            "instit_pct": 0.0990990990990991,
            "ambiguous_pct": 0.010510510510510511,
            "unobservable_pct": 0.0015015015015015015,
            "unclear_pct": 0.012012012012012012,
            "retail_qty_pct": 0.10232653901585341,
            "mixed_qty_pct": 0.32818612312126827,
            "instit_qty_pct": 0.4481161210623842,
            "ambiguous_qty_pct": 0.0009264978381717109,
            "unobservable_qty_pct": 0.12044471896232242,
            "unclear_qty_pct": 0.12137121680049413,
            "retail_notional_pct": 0.10227442031443136,
            "mixed_notional_pct": 0.3280027192121472,
            "instit_notional_pct": 0.4482612240497544,
            "ambiguous_notional_pct": 0.0009298627441731971,
            "unobservable_notional_pct": 0.12053177367949383,
            "unclear_notional_pct": 0.12146163642366703,
            "run_retail_pct": 0.8284600389863548,
            "run_mixed_pct": 0.15594541910331383,
            "run_instit_pct": 0.011695906432748537,
            "run_unclear_pct": 0.003898635477582846,
            "avg_trade_size": 1002.7635135135135,
            "avg_run_notional": 1301.8333333333333,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.571150097465887,
            "medium_confidence_pct": 0.26900584795321636,
            "low_confidence_pct": 0.0,
            "na_confidence_pct": 0.15984405458089668,
            "avg_feature_coverage": 0.8666666666666666,
            "observable_run_pct": 0.9980506822612085,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "ODBU",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.1,
            "mixed_pct": 0.3,
            "instit_pct": 0.36666666666666664,
            "ambiguous_pct": 0.23333333333333334,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.23333333333333334,
            "retail_qty_pct": 0.006622516556291391,
            "mixed_qty_pct": 0.4586092715231788,
            "instit_qty_pct": 0.445364238410596,
            "ambiguous_qty_pct": 0.08940397350993377,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.08940397350993377,
            "retail_notional_pct": 0.0066275566830505785,
            "mixed_notional_pct": 0.4570318693515142,
            "instit_notional_pct": 0.44728079911209767,
            "ambiguous_notional_pct": 0.08905977485333756,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.08905977485333756,
            "run_retail_pct": 0.2222222222222222,
            "run_mixed_pct": 0.3333333333333333,
            "run_instit_pct": 0.2222222222222222,
            "run_unclear_pct": 0.2222222222222222,
            "avg_trade_size": 1051.1666666666667,
            "avg_run_notional": 3503.8888888888887,
            "dominant_bucket": "MIXED",
            "dominant_label": "Mixed",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.4444444444444444,
            "na_confidence_pct": 0.5555555555555556,
            "avg_feature_coverage": 0.9500000000000001,
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
            "retail_pct": 0.8,
            "mixed_pct": 0.2,
            "instit_pct": 0.0,
            "ambiguous_pct": 0.0,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.0,
            "retail_qty_pct": 0.5195195195195195,
            "mixed_qty_pct": 0.4804804804804805,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": 0.0,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.0,
            "retail_notional_pct": 0.5445920303605313,
            "mixed_notional_pct": 0.45540796963946867,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": 0.0,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.0,
            "run_retail_pct": 0.8,
            "run_mixed_pct": 0.2,
            "run_instit_pct": 0.0,
            "run_unclear_pct": 0.0,
            "avg_trade_size": 421.6,
            "avg_run_notional": 421.6,
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
            "retail_pct": 0.5884658454647257,
            "mixed_pct": 0.2585666293393057,
            "instit_pct": 0.09440089585666293,
            "ambiguous_pct": 0.057782754759238525,
            "unobservable_pct": 0.0007838745800671892,
            "unclear_pct": 0.05856662933930572,
            "retail_qty_pct": 0.08337139493819894,
            "mixed_qty_pct": 0.29509593878752205,
            "instit_qty_pct": 0.4040918187168923,
            "ambiguous_qty_pct": 0.2080235432607416,
            "unobservable_qty_pct": 0.009417304296645085,
            "unclear_qty_pct": 0.21744084755738669,
            "retail_notional_pct": 0.08315738637718564,
            "mixed_notional_pct": 0.29453260147554794,
            "instit_notional_pct": 0.40431465515907494,
            "ambiguous_notional_pct": 0.20824721662309634,
            "unobservable_notional_pct": 0.009748140365095168,
            "unclear_notional_pct": 0.2179953569881915,
            "run_retail_pct": 0.8151969981238274,
            "run_mixed_pct": 0.16135084427767354,
            "run_instit_pct": 0.014227642276422764,
            "run_unclear_pct": 0.009224515322076297,
            "avg_trade_size": 1537.9106942889139,
            "avg_run_notional": 2147.2080206378987,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.524859287054409,
            "medium_confidence_pct": 0.28392745465916197,
            "low_confidence_pct": 0.020637898686679174,
            "na_confidence_pct": 0.17057535959974984,
            "avg_feature_coverage": 0.8670106316447778,
            "observable_run_pct": 0.9998436522826767,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "AJBU",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.37850353748302723,
            "mixed_pct": 0.3182162509826342,
            "instit_pct": 0.26013006503251623,
            "ambiguous_pct": 0.042849996426784824,
            "unobservable_pct": 0.00030015007503751874,
            "unclear_pct": 0.04315014650182234,
            "retail_qty_pct": 0.10608170650931589,
            "mixed_qty_pct": 0.21026669954094415,
            "instit_qty_pct": 0.6204520143504579,
            "ambiguous_qty_pct": 0.05349139453102963,
            "unobservable_qty_pct": 0.009708185068252433,
            "unclear_qty_pct": 0.06319957959928206,
            "retail_notional_pct": 0.10583806249845484,
            "mixed_notional_pct": 0.2096697204538799,
            "instit_notional_pct": 0.6214198573768138,
            "ambiguous_notional_pct": 0.0534119067199586,
            "unobservable_notional_pct": 0.009660452950892788,
            "unclear_notional_pct": 0.0630723596708514,
            "run_retail_pct": 0.7330159471931772,
            "run_mixed_pct": 0.23470997137683275,
            "run_instit_pct": 0.01682341258251066,
            "run_unclear_pct": 0.015450668847479409,
            "avg_trade_size": 6237.191116987065,
            "avg_run_notional": 12745.635740989545,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.38241135580349317,
            "medium_confidence_pct": 0.33074361820199777,
            "low_confidence_pct": 0.03668438577019686,
            "na_confidence_pct": 0.25016064022431217,
            "avg_feature_coverage": 0.8824405631170044,
            "observable_run_pct": 0.9997371341783983,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "AU8U",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.5022688966679631,
            "mixed_pct": 0.2653312589135226,
            "instit_pct": 0.1892908077272138,
            "ambiguous_pct": 0.04304421107221574,
            "unobservable_pct": 6.482561908466225e-05,
            "unclear_pct": 0.0431090366913004,
            "retail_qty_pct": 0.09534124118961664,
            "mixed_qty_pct": 0.2538703174082235,
            "instit_qty_pct": 0.5304640005001016,
            "ambiguous_qty_pct": 0.11666744807539031,
            "unobservable_qty_pct": 0.003656992826667917,
            "unclear_qty_pct": 0.12032444090205822,
            "retail_notional_pct": 0.09515272328479633,
            "mixed_notional_pct": 0.2546449389262128,
            "instit_notional_pct": 0.528347246566716,
            "ambiguous_notional_pct": 0.11802123234634583,
            "unobservable_notional_pct": 0.003833858875929114,
            "unclear_notional_pct": 0.12185509122227495,
            "run_retail_pct": 0.8008005899083536,
            "run_mixed_pct": 0.17117876329927315,
            "run_instit_pct": 0.0211734962604024,
            "run_unclear_pct": 0.006847150531970925,
            "avg_trade_size": 1361.0837546998573,
            "avg_run_notional": 2211.7431791846625,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.5010007373854419,
            "medium_confidence_pct": 0.29758769619719794,
            "low_confidence_pct": 0.023385652586116086,
            "na_confidence_pct": 0.17802591383124408,
            "avg_feature_coverage": 0.8697197935320761,
            "observable_run_pct": 0.999894659222585,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "ODBU",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.2523041474654378,
            "mixed_pct": 0.1382488479262673,
            "instit_pct": 0.2488479262672811,
            "ambiguous_pct": 0.36059907834101385,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.36059907834101385,
            "retail_qty_pct": 0.071193122525716,
            "mixed_qty_pct": 0.1363237315929834,
            "instit_qty_pct": 0.4663000447234599,
            "ambiguous_qty_pct": 0.32618310115784066,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.32618310115784066,
            "retail_notional_pct": 0.07153073915628151,
            "mixed_notional_pct": 0.13749191476951952,
            "instit_notional_pct": 0.4653311656760651,
            "ambiguous_notional_pct": 0.3256461803981339,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.3256461803981339,
            "run_retail_pct": 0.4563953488372093,
            "run_mixed_pct": 0.16569767441860464,
            "run_instit_pct": 0.10755813953488372,
            "run_unclear_pct": 0.2703488372093023,
            "avg_trade_size": 3543.576612903226,
            "avg_run_notional": 8941.350290697674,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.02616279069767442,
            "medium_confidence_pct": 0.11337209302325581,
            "low_confidence_pct": 0.42441860465116277,
            "na_confidence_pct": 0.436046511627907,
            "avg_feature_coverage": 0.8652616279069767,
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
            "retail_pct": 0.5026660203587009,
            "mixed_pct": 0.3329132331555986,
            "instit_pct": 0.11891420261754726,
            "ambiguous_pct": 0.045351429956374215,
            "unobservable_pct": 0.00015511391177896268,
            "unclear_pct": 0.04550654386815318,
            "retail_qty_pct": 0.07450784067950077,
            "mixed_qty_pct": 0.23990445670927593,
            "instit_qty_pct": 0.395740336620847,
            "ambiguous_qty_pct": 0.049699352554038505,
            "unobservable_qty_pct": 0.2401480134363378,
            "unclear_qty_pct": 0.2898473659903763,
            "retail_notional_pct": 0.07482586819837213,
            "mixed_notional_pct": 0.24007809708329306,
            "instit_notional_pct": 0.39739265203875146,
            "ambiguous_notional_pct": 0.0504010346391643,
            "unobservable_notional_pct": 0.23730234804041908,
            "unclear_notional_pct": 0.2877033826795834,
            "run_retail_pct": 0.7764702248579195,
            "run_mixed_pct": 0.2106807511737089,
            "run_instit_pct": 0.005374351371386212,
            "run_unclear_pct": 0.007474672596985422,
            "avg_trade_size": 4185.1649905962195,
            "avg_run_notional": 6666.971966580183,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.385470719051149,
            "medium_confidence_pct": 0.3531937237459847,
            "low_confidence_pct": 0.04318013343217198,
            "na_confidence_pct": 0.21815542377069433,
            "avg_feature_coverage": 0.8823912774894983,
            "observable_run_pct": 0.9997529033852236,
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
            "retail_pct": 0.712468193384224,
            "mixed_pct": 0.2748091603053435,
            "instit_pct": 0.01272264631043257,
            "ambiguous_pct": 0.0,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.0,
            "retail_qty_pct": 0.12794271010880737,
            "mixed_qty_pct": 0.7331795536095308,
            "instit_qty_pct": 0.13887773628166183,
            "ambiguous_qty_pct": 0.0,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.0,
            "retail_notional_pct": 0.13177264898548818,
            "mixed_notional_pct": 0.7342457727659181,
            "instit_notional_pct": 0.1339815782485938,
            "ambiguous_notional_pct": 0.0,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.0,
            "run_retail_pct": 0.8353658536585366,
            "run_mixed_pct": 0.16158536585365854,
            "run_instit_pct": 0.003048780487804878,
            "run_unclear_pct": 0.0,
            "avg_trade_size": 1253.4137404580151,
            "avg_run_notional": 1501.8036585365853,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.5670731707317073,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.27134146341463417,
            "na_confidence_pct": 0.16158536585365854,
            "avg_feature_coverage": 0.8518292682926829,
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
            "retail_pct": 0.5735431807035535,
            "mixed_pct": 0.24740291586784965,
            "instit_pct": 0.1295198180926479,
            "ambiguous_pct": 0.04922198938873779,
            "unobservable_pct": 0.0003120959472111998,
            "unclear_pct": 0.04953408533594899,
            "retail_qty_pct": 0.07703694330316128,
            "mixed_qty_pct": 0.2983645928486032,
            "instit_qty_pct": 0.4650925526824658,
            "ambiguous_qty_pct": 0.15686964591003216,
            "unobservable_qty_pct": 0.002636265255737502,
            "unclear_qty_pct": 0.15950591116576968,
            "retail_notional_pct": 0.07698801747379631,
            "mixed_notional_pct": 0.29888261922485015,
            "instit_notional_pct": 0.46499346625975274,
            "ambiguous_notional_pct": 0.15649417354307893,
            "unobservable_notional_pct": 0.002641723498521865,
            "unclear_notional_pct": 0.1591358970416008,
            "run_retail_pct": 0.8209836907666623,
            "run_mixed_pct": 0.1548735071272634,
            "run_instit_pct": 0.0157955566970592,
            "run_unclear_pct": 0.008347245409015025,
            "avg_trade_size": 2259.4726024343486,
            "avg_run_notional": 3253.994542185694,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.5223449338641325,
            "medium_confidence_pct": 0.29266726595608067,
            "low_confidence_pct": 0.02176704764350841,
            "na_confidence_pct": 0.1632207525362784,
            "avg_feature_coverage": 0.8651341980223447,
            "observable_run_pct": 0.9999357904199306,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "AJBU",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.37316403988874824,
            "mixed_pct": 0.33783548479700315,
            "instit_pct": 0.24134198624882935,
            "ambiguous_pct": 0.047314945103557327,
            "unobservable_pct": 0.00034354396186191415,
            "unclear_pct": 0.04765848906541924,
            "retail_qty_pct": 0.09889098380575588,
            "mixed_qty_pct": 0.22493761181704838,
            "instit_qty_pct": 0.6149122964389157,
            "ambiguous_qty_pct": 0.05122184745714159,
            "unobservable_qty_pct": 0.010037260481138498,
            "unclear_qty_pct": 0.061259107938280086,
            "retail_notional_pct": 0.09877965112067992,
            "mixed_notional_pct": 0.22475427181135552,
            "instit_notional_pct": 0.6151299180957615,
            "ambiguous_notional_pct": 0.051333393323878554,
            "unobservable_notional_pct": 0.010002765648324597,
            "unclear_notional_pct": 0.06133615897220315,
            "run_retail_pct": 0.7208529677757152,
            "run_mixed_pct": 0.24738921414631823,
            "run_instit_pct": 0.01627873768384978,
            "run_unclear_pct": 0.015479080394116808,
            "avg_trade_size": 6579.162142584863,
            "avg_run_notional": 13308.703344661813,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.31565519539245085,
            "medium_confidence_pct": 0.3696987005569042,
            "low_confidence_pct": 0.05177780951020991,
            "na_confidence_pct": 0.26286829454043503,
            "avg_feature_coverage": 0.8858422580798704,
            "observable_run_pct": 0.9996763291922509,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "JYEU",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.4684039855323513,
            "mixed_pct": 0.3268455259766356,
            "instit_pct": 0.15783456437687948,
            "ambiguous_pct": 0.04664569504302878,
            "unobservable_pct": 0.00027022907110489045,
            "unclear_pct": 0.04691592411413367,
            "retail_qty_pct": 0.08369264010664375,
            "mixed_qty_pct": 0.23168227691139542,
            "instit_qty_pct": 0.540211518505604,
            "ambiguous_qty_pct": 0.046039562450431025,
            "unobservable_qty_pct": 0.09837400202592583,
            "unclear_qty_pct": 0.14441356447635686,
            "retail_notional_pct": 0.08333610699712936,
            "mixed_notional_pct": 0.22955734600787486,
            "instit_notional_pct": 0.5481138849375226,
            "ambiguous_notional_pct": 0.046022121957772257,
            "unobservable_notional_pct": 0.09297054009970088,
            "unclear_notional_pct": 0.13899266205747313,
            "run_retail_pct": 0.7658769332017111,
            "run_mixed_pct": 0.21755276641752455,
            "run_instit_pct": 0.007533023080900672,
            "run_unclear_pct": 0.009037277299863677,
            "avg_trade_size": 4378.023334557448,
            "avg_run_notional": 7425.434631810276,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.3752644196869271,
            "medium_confidence_pct": 0.3547101960231279,
            "low_confidence_pct": 0.04343534057255676,
            "na_confidence_pct": 0.22659004371738825,
            "avg_feature_coverage": 0.883898603864053,
            "observable_run_pct": 0.9995886804870023,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "AU8U",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.4748656226004036,
            "mixed_pct": 0.2798442829336238,
            "instit_pct": 0.20084287219414632,
            "ambiguous_pct": 0.04442936481008589,
            "unobservable_pct": 1.7857461740388223e-05,
            "unclear_pct": 0.04444722227182628,
            "retail_qty_pct": 0.10197663223165518,
            "mixed_qty_pct": 0.271456534376476,
            "instit_qty_pct": 0.5480730220053045,
            "ambiguous_qty_pct": 0.07760820990420365,
            "unobservable_qty_pct": 0.0008856014823606351,
            "unclear_qty_pct": 0.07849381138656429,
            "retail_notional_pct": 0.10275956342407937,
            "mixed_notional_pct": 0.27191925508034587,
            "instit_notional_pct": 0.5472937595347205,
            "ambiguous_notional_pct": 0.07715863950303303,
            "unobservable_notional_pct": 0.0008687824578212543,
            "unclear_notional_pct": 0.07802742196085428,
            "run_retail_pct": 0.78689924371798,
            "run_mixed_pct": 0.18580751402781165,
            "run_instit_pct": 0.019547450597706757,
            "run_unclear_pct": 0.007745791656501586,
            "avg_trade_size": 1654.56176896016,
            "avg_run_notional": 2825.5002592095634,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.4676445474505977,
            "medium_confidence_pct": 0.31583922908026346,
            "low_confidence_pct": 0.02296291778482557,
            "na_confidence_pct": 0.19355330568431325,
            "avg_feature_coverage": 0.8722386557696997,
            "observable_run_pct": 0.9999695047572579,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "ODBU",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.35118483412322277,
            "mixed_pct": 0.15924170616113745,
            "instit_pct": 0.1981042654028436,
            "ambiguous_pct": 0.2914691943127962,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.2914691943127962,
            "retail_qty_pct": 0.08263006089093046,
            "mixed_qty_pct": 0.15396992842645016,
            "instit_qty_pct": 0.4076554321119539,
            "ambiguous_qty_pct": 0.35574457857066555,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.35574457857066555,
            "retail_notional_pct": 0.08359563353023768,
            "mixed_notional_pct": 0.15532236234615532,
            "instit_notional_pct": 0.4042051937209861,
            "ambiguous_notional_pct": 0.35687681040262087,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.35687681040262087,
            "run_retail_pct": 0.5607476635514018,
            "run_mixed_pct": 0.17587085811384875,
            "run_instit_pct": 0.07646559048428207,
            "run_unclear_pct": 0.18691588785046728,
            "avg_trade_size": 3746.7772511848343,
            "avg_run_notional": 6716.822429906542,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.1784197111299915,
            "medium_confidence_pct": 0.1265930331350892,
            "low_confidence_pct": 0.3322005097706032,
            "na_confidence_pct": 0.36278674596431604,
            "avg_feature_coverage": 0.8488530161427357,
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
            "retail_pct": 0.620253164556962,
            "mixed_pct": 0.24331926863572434,
            "instit_pct": 0.11954992967651196,
            "ambiguous_pct": 0.016877637130801686,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.016877637130801686,
            "retail_qty_pct": 0.12286451347113346,
            "mixed_qty_pct": 0.4997895640080713,
            "instit_qty_pct": 0.34950633166735634,
            "ambiguous_qty_pct": 0.027839590853438918,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.027839590853438918,
            "retail_notional_pct": 0.12265846010783404,
            "mixed_notional_pct": 0.5028454818712222,
            "instit_notional_pct": 0.3469645127191524,
            "ambiguous_notional_pct": 0.027531545301791277,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.027531545301791277,
            "run_retail_pct": 0.8145569620253165,
            "run_mixed_pct": 0.160126582278481,
            "run_instit_pct": 0.015822784810126583,
            "run_unclear_pct": 0.00949367088607595,
            "avg_trade_size": 2770.062025316456,
            "avg_run_notional": 3739.583734177215,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.4544303797468354,
            "medium_confidence_pct": 0.1449367088607595,
            "low_confidence_pct": 0.2310126582278481,
            "na_confidence_pct": 0.16962025316455695,
            "avg_feature_coverage": 0.8556012658227845,
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
            "retail_pct": 0.5993869763756542,
            "mixed_pct": 0.24648136950311725,
            "instit_pct": 0.11032340123855794,
            "ambiguous_pct": 0.043662294876873994,
            "unobservable_pct": 0.00014595800579661795,
            "unclear_pct": 0.04380825288267061,
            "retail_qty_pct": 0.09385097256020307,
            "mixed_qty_pct": 0.3022028604800053,
            "instit_qty_pct": 0.47871432833896344,
            "ambiguous_qty_pct": 0.12373247809809117,
            "unobservable_qty_pct": 0.0014993605227370526,
            "unclear_qty_pct": 0.1252318386208282,
            "retail_notional_pct": 0.09395681424933743,
            "mixed_notional_pct": 0.30244796889585834,
            "instit_notional_pct": 0.4788728534395832,
            "ambiguous_notional_pct": 0.12323302256250741,
            "unobservable_notional_pct": 0.0014893408527136495,
            "unclear_notional_pct": 0.12472236341522107,
            "run_retail_pct": 0.8269269880008135,
            "run_mixed_pct": 0.15261919288764927,
            "run_instit_pct": 0.01371335599523519,
            "run_unclear_pct": 0.006740463116302042,
            "avg_trade_size": 1874.3044162722326,
            "avg_run_notional": 2611.6321072663354,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.4993753450129289,
            "medium_confidence_pct": 0.3124146546965339,
            "low_confidence_pct": 0.028850344286585897,
            "na_confidence_pct": 0.1593596560039513,
            "avg_feature_coverage": 0.8651892849879427,
            "observable_run_pct": 0.9999709462796711,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "AJBU",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.36585170821422147,
            "mixed_pct": 0.3314650260879995,
            "instit_pct": 0.2318958279191572,
            "ambiguous_pct": 0.0704475941067109,
            "unobservable_pct": 0.000339843671910921,
            "unclear_pct": 0.07078743777862183,
            "retail_qty_pct": 0.09983501829118042,
            "mixed_qty_pct": 0.22455880571361483,
            "instit_qty_pct": 0.6149550807687535,
            "ambiguous_qty_pct": 0.04686574469045256,
            "unobservable_qty_pct": 0.01378535053599871,
            "unclear_qty_pct": 0.06065109522645127,
            "retail_notional_pct": 0.09976975737588993,
            "mixed_notional_pct": 0.2244852147797222,
            "instit_notional_pct": 0.6151503516051795,
            "ambiguous_notional_pct": 0.04683661714083718,
            "unobservable_notional_pct": 0.013758059098371194,
            "unclear_notional_pct": 0.060594676239208375,
            "run_retail_pct": 0.7217968931737703,
            "run_mixed_pct": 0.24606994236087776,
            "run_instit_pct": 0.015151593476181861,
            "run_unclear_pct": 0.01698157098917005,
            "avg_trade_size": 5698.6364528566855,
            "avg_run_notional": 11788.896741968001,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.3124402284887177,
            "medium_confidence_pct": 0.37119594716844584,
            "low_confidence_pct": 0.053312310992788645,
            "na_confidence_pct": 0.26305151335004784,
            "avg_feature_coverage": 0.886479878001499,
            "observable_run_pct": 0.9995916151877795,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "JYEU",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.4490833725054485,
            "mixed_pct": 0.31040243035456916,
            "instit_pct": 0.16257657986643928,
            "ambiguous_pct": 0.07766956346076896,
            "unobservable_pct": 0.00026805381277412386,
            "unclear_pct": 0.07793761727354309,
            "retail_qty_pct": 0.08327206477167227,
            "mixed_qty_pct": 0.21785269288264533,
            "instit_qty_pct": 0.5667405291499752,
            "ambiguous_qty_pct": 0.06570836924893614,
            "unobservable_qty_pct": 0.06642634394677112,
            "unclear_qty_pct": 0.13213471319570724,
            "retail_notional_pct": 0.0830653313660128,
            "mixed_notional_pct": 0.21609783731404,
            "instit_notional_pct": 0.572357995884001,
            "ambiguous_notional_pct": 0.06657561466867369,
            "unobservable_notional_pct": 0.0619032207672725,
            "unclear_notional_pct": 0.12847883543594618,
            "run_retail_pct": 0.7664742282296816,
            "run_mixed_pct": 0.2127908182666713,
            "run_instit_pct": 0.008808379714453625,
            "run_unclear_pct": 0.011926573789193488,
            "avg_trade_size": 4061.7843875747344,
            "avg_run_notional": 7228.872548069278,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.3788018114564248,
            "medium_confidence_pct": 0.354824212673281,
            "low_confidence_pct": 0.041656583814429424,
            "na_confidence_pct": 0.22471739205586477,
            "avg_feature_coverage": 0.8833204272824696,
            "observable_run_pct": 0.999571334739171,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "AU8U",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.4916331994645248,
            "mixed_pct": 0.2690972222222222,
            "instit_pct": 0.19731007362784472,
            "ambiguous_pct": 0.04194904618473896,
            "unobservable_pct": 1.0458500669344042e-05,
            "unclear_pct": 0.0419595046854083,
            "retail_qty_pct": 0.11529069524913625,
            "mixed_qty_pct": 0.26984011291432364,
            "instit_qty_pct": 0.5369994732926361,
            "ambiguous_qty_pct": 0.07733338467469517,
            "unobservable_qty_pct": 0.0005363338692087976,
            "unclear_qty_pct": 0.07786971854390397,
            "retail_notional_pct": 0.11658553888850796,
            "mixed_notional_pct": 0.2697998776239027,
            "instit_notional_pct": 0.5360880876438843,
            "ambiguous_notional_pct": 0.0770256423594022,
            "unobservable_notional_pct": 0.0005008534843028451,
            "unclear_notional_pct": 0.07752649584370504,
            "run_retail_pct": 0.7958746363303775,
            "run_mixed_pct": 0.17640807651434645,
            "run_instit_pct": 0.019773174683367884,
            "run_unclear_pct": 0.007944112471908155,
            "avg_trade_size": 1680.8657546854083,
            "avg_run_notional": 2799.9104545216983,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.46389435724116307,
            "medium_confidence_pct": 0.3279211163568579,
            "low_confidence_pct": 0.023832337415724464,
            "na_confidence_pct": 0.1843521889862546,
            "avg_feature_coverage": 0.8702322259194087,
            "observable_run_pct": 0.9999825787007195,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "D5IU",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.5338308457711443,
            "mixed_pct": 0.2175787728026534,
            "instit_pct": 0.17346600331674958,
            "ambiguous_pct": 0.07512437810945273,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.07512437810945273,
            "retail_qty_pct": 0.11831772620792759,
            "mixed_qty_pct": 0.4347387496700075,
            "instit_qty_pct": 0.3848709891253706,
            "ambiguous_qty_pct": 0.06207253499669431,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.06207253499669431,
            "retail_notional_pct": 0.11496797002235226,
            "mixed_notional_pct": 0.41196378790486343,
            "instit_notional_pct": 0.3968026177552578,
            "ambiguous_notional_pct": 0.07626562431752648,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.07626562431752648,
            "run_retail_pct": 0.774024024024024,
            "run_mixed_pct": 0.16441441441441443,
            "run_instit_pct": 0.029779779779779778,
            "run_unclear_pct": 0.03178178178178178,
            "avg_trade_size": 1807.6530845771144,
            "avg_run_notional": 2727.7647897897896,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.3683683683683684,
            "medium_confidence_pct": 0.21796796796796797,
            "low_confidence_pct": 0.21746746746746748,
            "na_confidence_pct": 0.1961961961961962,
            "avg_feature_coverage": 0.8552177177177175,
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
            "retail_pct": 0.41285452881976215,
            "mixed_pct": 0.19258920402561758,
            "instit_pct": 0.14707227813357732,
            "ambiguous_pct": 0.247483989021043,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.247483989021043,
            "retail_qty_pct": 0.0931164310032819,
            "mixed_qty_pct": 0.17110005214244087,
            "instit_qty_pct": 0.37716621169831,
            "ambiguous_qty_pct": 0.35861730515596724,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.35861730515596724,
            "retail_notional_pct": 0.093452905703567,
            "mixed_notional_pct": 0.17149868864771062,
            "instit_notional_pct": 0.3759444979823614,
            "ambiguous_notional_pct": 0.35910390766636097,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.35910390766636097,
            "run_retail_pct": 0.6408477842003854,
            "run_mixed_pct": 0.16416184971098266,
            "run_instit_pct": 0.055876685934489405,
            "run_unclear_pct": 0.13911368015414258,
            "avg_trade_size": 3092.4091948764867,
            "avg_run_notional": 5210.024277456648,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.22003853564547207,
            "medium_confidence_pct": 0.18766859344894027,
            "low_confidence_pct": 0.28901734104046245,
            "na_confidence_pct": 0.30327552986512524,
            "avg_feature_coverage": 0.8522543352601156,
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
            "retail_pct": 0.14098750743604996,
            "mixed_pct": 0.1951219512195122,
            "instit_pct": 0.21296847114812612,
            "ambiguous_pct": 0.44378346222486614,
            "unobservable_pct": 0.007138607971445568,
            "unclear_pct": 0.4509220701963117,
            "retail_qty_pct": 0.008151515456054957,
            "mixed_qty_pct": 0.015610710421321684,
            "instit_qty_pct": 0.07349763661884072,
            "ambiguous_qty_pct": 0.05053939582754073,
            "unobservable_qty_pct": 0.8522007416762419,
            "unclear_qty_pct": 0.9027401375037827,
            "retail_notional_pct": 0.008200823463919253,
            "mixed_notional_pct": 0.01552085923729337,
            "instit_notional_pct": 0.0709343474249348,
            "ambiguous_notional_pct": 0.0505137724485638,
            "unobservable_notional_pct": 0.8548301974252888,
            "unclear_notional_pct": 0.9053439698738526,
            "run_retail_pct": 0.48873873873873874,
            "run_mixed_pct": 0.17792792792792791,
            "run_instit_pct": 0.08558558558558559,
            "run_unclear_pct": 0.24774774774774774,
            "avg_trade_size": 1168.1042831647828,
            "avg_run_notional": 4422.48490990991,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.2072072072072072,
            "medium_confidence_pct": 0.17117117117117117,
            "low_confidence_pct": 0.19594594594594594,
            "na_confidence_pct": 0.42567567567567566,
            "avg_feature_coverage": 0.8824324324324323,
            "observable_run_pct": 0.9887387387387387,
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
          "trade_id": "BMLL-385",
          "timestamp": "2026-04-21T08:59:44.055400",
          "price": 0.67,
          "size": 100.0,
          "notional": 67.0,
          "bucket": "MIXED",
          "confidence": "NA",
          "run_id": 57747,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-384",
          "timestamp": "2026-04-21T08:59:42.725500",
          "price": 0.67,
          "size": 100.0,
          "notional": 67.0,
          "bucket": "MIXED",
          "confidence": "NA",
          "run_id": 57747,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-383",
          "timestamp": "2026-04-21T08:59:27.976100",
          "price": 0.67,
          "size": 100.0,
          "notional": 67.0,
          "bucket": "MIXED",
          "confidence": "NA",
          "run_id": 57746,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "ADAPTIVE"
        },
        {
          "trade_id": "BMLL-382",
          "timestamp": "2026-04-21T08:59:26.068000",
          "price": 0.67,
          "size": 100.0,
          "notional": 67.0,
          "bucket": "MIXED",
          "confidence": "NA",
          "run_id": 57746,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "ADAPTIVE"
        },
        {
          "trade_id": "BMLL-381",
          "timestamp": "2026-04-21T08:59:22.798400",
          "price": 0.67,
          "size": 100.0,
          "notional": 67.0,
          "bucket": "MIXED",
          "confidence": "NA",
          "run_id": 57746,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "ADAPTIVE"
        },
        {
          "trade_id": "BMLL-380",
          "timestamp": "2026-04-21T08:59:03.605600",
          "price": 0.665,
          "size": 300.0,
          "notional": 199.5,
          "bucket": "RETAIL",
          "confidence": "MEDIUM",
          "run_id": 57745,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-379",
          "timestamp": "2026-04-21T08:58:52.349500",
          "price": 0.67,
          "size": 100.0,
          "notional": 67.0,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 57744,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-378",
          "timestamp": "2026-04-21T08:58:41.133600",
          "price": 0.67,
          "size": 200.0,
          "notional": 134.0,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 57743,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-377",
          "timestamp": "2026-04-21T08:58:31.851700",
          "price": 0.67,
          "size": 300.0,
          "notional": 201.0,
          "bucket": "RETAIL",
          "confidence": "MEDIUM",
          "run_id": 57742,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-376",
          "timestamp": "2026-04-21T08:58:01.566900",
          "price": 0.665,
          "size": 100.0,
          "notional": 66.5,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 57741,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-375",
          "timestamp": "2026-04-21T08:57:51.292100",
          "price": 0.665,
          "size": 300.0,
          "notional": 199.5,
          "bucket": "RETAIL",
          "confidence": "MEDIUM",
          "run_id": 57740,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-374",
          "timestamp": "2026-04-21T08:57:34.239900",
          "price": 0.67,
          "size": 200.0,
          "notional": 134.0,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 57739,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-373",
          "timestamp": "2026-04-21T08:56:56.555800",
          "price": 0.67,
          "size": 200.0,
          "notional": 134.0,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 57738,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-372",
          "timestamp": "2026-04-21T08:54:32.656300",
          "price": 0.665,
          "size": 200.0,
          "notional": 133.0,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 57737,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-371",
          "timestamp": "2026-04-21T08:54:22.716700",
          "price": 0.67,
          "size": 300.0,
          "notional": 201.0,
          "bucket": "RETAIL",
          "confidence": "MEDIUM",
          "run_id": 57736,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-370",
          "timestamp": "2026-04-21T08:50:22.971000",
          "price": 0.67,
          "size": 300.0,
          "notional": 201.0,
          "bucket": "MIXED",
          "confidence": "NA",
          "run_id": 57735,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-369",
          "timestamp": "2026-04-21T08:50:22.397900",
          "price": 0.67,
          "size": 100.0,
          "notional": 67.0,
          "bucket": "MIXED",
          "confidence": "NA",
          "run_id": 57735,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-368",
          "timestamp": "2026-04-21T08:49:51.819800",
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
          "trade_id": "BMLL-367",
          "timestamp": "2026-04-21T08:49:28.870100",
          "price": 0.665,
          "size": 200.0,
          "notional": 133.0,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 57733,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-366",
          "timestamp": "2026-04-21T08:49:12.035800",
          "price": 0.665,
          "size": 400.0,
          "notional": 266.0,
          "bucket": "RETAIL",
          "confidence": "MEDIUM",
          "run_id": 57732,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-365",
          "timestamp": "2026-04-21T08:48:56.190800",
          "price": 0.67,
          "size": 100.0,
          "notional": 67.0,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 57731,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-364",
          "timestamp": "2026-04-21T08:48:02.762200",
          "price": 0.67,
          "size": 500.0,
          "notional": 335.0,
          "bucket": "RETAIL",
          "confidence": "MEDIUM",
          "run_id": 57730,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-363",
          "timestamp": "2026-04-21T08:46:31.682200",
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
          "trade_id": "BMLL-362",
          "timestamp": "2026-04-21T08:45:50.844600",
          "price": 0.67,
          "size": 100.0,
          "notional": 67.0,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 57728,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-361",
          "timestamp": "2026-04-21T08:45:25.306500",
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
          "trade_id": "BMLL-360",
          "timestamp": "2026-04-21T08:42:21.653000",
          "price": 0.665,
          "size": 200.0,
          "notional": 133.0,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 57726,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-359",
          "timestamp": "2026-04-21T08:41:23.484100",
          "price": 0.67,
          "size": 200.0,
          "notional": 134.0,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 57725,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-358",
          "timestamp": "2026-04-21T08:38:18.266900",
          "price": 0.67,
          "size": 100.0,
          "notional": 67.0,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 57724,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-357",
          "timestamp": "2026-04-21T08:37:50.597500",
          "price": 0.665,
          "size": 500.0,
          "notional": 332.5,
          "bucket": "RETAIL",
          "confidence": "MEDIUM",
          "run_id": 57723,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-356",
          "timestamp": "2026-04-21T08:35:52.917700",
          "price": 0.67,
          "size": 100.0,
          "notional": 67.0,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 57722,
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
      "total_trades": 47958,
      "price_moving_trades": 11567,
      "pct_price_moving": 24.11902080987531,
      "all_movers": {
        "count": 11567,
        "avg_size": 1492.163655226074,
        "median_size": 201.0,
        "retail_count": 9350,
        "mixed_count": 1935,
        "institutional_count": 217,
        "ambiguous_count": 63,
        "unobservable_count": 2,
        "retail_pct": 80.83340537736665,
        "mixed_pct": 16.728624535315987,
        "instit_pct": 1.8760266274747126,
        "unclear_pct": 0.5619434598426559
      },
      "positive_movers": {
        "count": 5778,
        "avg_size": 1459.255278643129,
        "median_size": 139.0,
        "retail_count": 4652,
        "mixed_count": 995,
        "institutional_count": 103,
        "ambiguous_count": 26,
        "unobservable_count": 2,
        "retail_pct": 80.5122879889235,
        "mixed_pct": 17.22049151955694,
        "instit_pct": 1.7826237452405678,
        "unclear_pct": 0.4845967462789893
      },
      "negative_movers": {
        "count": 5789,
        "avg_size": 1525.0095007773364,
        "median_size": 202.5,
        "retail_count": 4698,
        "mixed_count": 940,
        "institutional_count": 114,
        "ambiguous_count": 37,
        "unobservable_count": 0,
        "retail_pct": 81.15391259284851,
        "mixed_pct": 16.237692174814303,
        "instit_pct": 1.969252029711522,
        "unclear_pct": 0.6391432026256694
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
            "avg_short_ratio": 0.09291140845573617,
            "max_short_ratio": 0.36836158192090396,
            "interpretation": "Moderate short interest"
          }
        },
        "3M": {
          "stats": {
            "valid": true,
            "avg_short_ratio": 0.06635200547812659,
            "max_short_ratio": 0.36836158192090396,
            "interpretation": "Moderate short interest"
          }
        },
        "6M": {
          "stats": {
            "valid": true,
            "avg_short_ratio": 0.06296274868506571,
            "max_short_ratio": 0.36836158192090396,
            "interpretation": "Moderate short interest"
          }
        }
      },
      "correlation": {
        "valid": true,
        "correlation": -0.14312346354890304,
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
            "avg_short_ratio": 0.032191531876609905
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
            "avg_short_ratio": 0.032191531876609905,
            "change_pct": null
          },
          {
            "month": "2026-03",
            "avg_short_ratio": 0.1453584600680963,
            "change_pct": 351.5425380353289
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
        "interpretation": "Shorts covering significantly (-78% MoM)"
      },
      "short_series": {
        "valid": true,
        "rows": [
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
          },
          {
            "date": "2025-11-26",
            "short_ratio": 0.0897165991902834,
            "short_vol": 55400,
            "total_vol": 617500,
            "close": 0.68,
            "return": 0.0
          }
        ]
      },
      "peer_comparison": [
        {
          "ticker": "CRPU",
          "avg_short_ratio": 0.06635200547812659,
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
          "avg_short_ratio": 0.0008321875877750031,
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
          "avg_short_ratio": 0.062224992352074994,
          "max_short_ratio": 0.583009889700239,
          "is_target": false
        },
        {
          "ticker": "AJBU",
          "avg_short_ratio": 0.08186216656158862,
          "max_short_ratio": 0.4312404120096428,
          "is_target": false
        },
        {
          "ticker": "JYEU",
          "avg_short_ratio": 0.10417128191047509,
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
          "opening": 0.0025184203467916253,
          "continuous": 0.9262192139600196,
          "closing": 0.06488316687966425,
          "auctions": 0.07378078603998044,
          "other": 0.0
        },
        "1M": {
          "opening": 0.054936996252829357,
          "continuous": 0.8735356606401744,
          "closing": 0.06116924728104692,
          "auctions": 0.12646433935982562,
          "other": 0.0
        },
        "3M": {
          "opening": 0.04933489611601838,
          "continuous": 0.8545095700317931,
          "closing": 0.08296427242751672,
          "auctions": 0.14549042996820696,
          "other": 0.0
        },
        "6M": {
          "opening": 0.03626011046617401,
          "continuous": 0.8730426751795461,
          "closing": 0.07907241867250289,
          "auctions": 0.12695732482045397,
          "other": 0.0
        }
      },
      "hhi": {
        "1D": 0.1498297102454269,
        "1M": 0.21191185840394422,
        "3M": 0.24013949216490443,
        "6M": 0.2272436083627862
      },
      "profile_buckets": [
        {
          "time": "08:30",
          "avg_share": 0.018
        },
        {
          "time": "09:00",
          "avg_share": 0.0987
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
          "avg_share": 0.035
        },
        {
          "time": "11:00",
          "avg_share": 0.0324
        },
        {
          "time": "11:30",
          "avg_share": 0.0408
        },
        {
          "time": "12:00",
          "avg_share": 0.2327
        },
        {
          "time": "12:30",
          "avg_share": 0.0093
        },
        {
          "time": "13:00",
          "avg_share": 0.021
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
          "avg_share": 0.0281
        },
        {
          "time": "15:30",
          "avg_share": 0.0508
        },
        {
          "time": "16:00",
          "avg_share": 0.0445
        },
        {
          "time": "16:30",
          "avg_share": 0.1041
        },
        {
          "time": "17:00",
          "avg_share": 0.1134
        }
      ],
      "peers_hhi_rows": [
        {
          "ticker": "CRPU",
          "auctions_pct": 11.633115666330642,
          "hhi": 0.22853485043403948,
          "interp": {
            "text": "Moderate",
            "cls": "bg-amber-500/20 text-amber-400",
            "you": true
          }
        },
        {
          "ticker": "ODBU",
          "auctions_pct": 7.125821219152982,
          "hhi": 0.39403680953110093,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "D5IU",
          "auctions_pct": 12.659781372623618,
          "hhi": 0.4156945932698116,
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
          "auctions_pct": 13.424957764418863,
          "hhi": 0.17364145082038385,
          "interp": {
            "text": "Moderate",
            "cls": "bg-amber-500/20 text-amber-400"
          }
        },
        {
          "ticker": "JYEU",
          "auctions_pct": 13.442008404171485,
          "hhi": 0.20907151930230036,
          "interp": {
            "text": "Moderate",
            "cls": "bg-amber-500/20 text-amber-400"
          }
        },
        {
          "ticker": "AJBU",
          "auctions_pct": 20.393785162241592,
          "hhi": 0.14736754928118567,
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
