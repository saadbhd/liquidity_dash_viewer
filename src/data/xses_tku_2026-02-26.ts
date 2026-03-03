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
      "marketCap": 148262726.3,
      "sector": "Software - Application",
      "industry": "Technology"
    },
    {
      "ticker": "ITS",
      "name": "Info-Tech",
      "marketCap": 288960000.0,
      "sector": "Software - Application",
      "industry": "Technology"
    },
    {
      "ticker": "LVR",
      "name": "17LIVE GROUP",
      "marketCap": 157003990.20000002,
      "sector": "Software - Application",
      "industry": "Technology"
    },
    {
      "ticker": "NXR",
      "name": "iWOW Tech",
      "marketCap": 114034185.6,
      "sector": "Software - Application",
      "industry": "Technology"
    },
    {
      "ticker": "U77",
      "name": "Sarine Tech",
      "marketCap": 74946750.34,
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
      "ticker": "5DD",
      "name": "Micro-Mechanics",
      "marketCap": 275283124.38,
      "sector": "Semiconductor Equipment & Materials",
      "industry": "Technology"
    },
    {
      "ticker": "BN2",
      "name": "Valuetronics",
      "marketCap": 372942594.57,
      "sector": "Electronic Components",
      "industry": "Technology"
    }
  ]
};

export const REPORT_DATA: ReportData = {
  "meta": {
    "market": "XSES",
    "ticker": "TKU",
    "company": "Toku Ltd",
    "asof_date": "2026-02-26",
    "industry": "Technology",
    "sector": "Software - Application",
    "market_cap_display": "148.3M",
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
          "score_pca": 73.11827956989248,
          "score_pca_percentile": 73.11827956989248,
          "rank_pca": 151,
          "total": 558,
          "adv_notional_sgd": 430575.0,
          "adv_volume_shares": 1722300.0,
          "free_float_shares": null,
          "turnover_ratio": 0.0030203005918959685,
          "votes": 114.0,
          "trades": 114.0,
          "spread_pct": 0.02496157393175533,
          "spread_ticks": 1.2608695652173914,
          "amihud": null,
          "volatility": null
        },
        "pca": {
          "valid": true,
          "window_days": 1,
          "variance_explained": 0.7593213132398786,
          "loadings": {
            "log_adv": 0.5609799874879083,
            "log_trades": 0.514201271146484,
            "log_turnover": 0.5179808112433504,
            "neg_spread": 0.3906333134450861,
            "neg_amihud": 0.0,
            "neg_vol": 0.0
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
          "peer_median_adv": 30296.5,
          "peer_median_score_pca": 43.63799283154122,
          "peer_median_trades": 10.5,
          "peer_median_volatility": null,
          "peer_median_spread_pct": 0.029422128259337592,
          "peer_median_amihud": null,
          "peer_median_turnover_ratio": 0.00023430347127915624,
          "target_vs_peer": {
            "score_pca_delta": 29.48,
            "adv_delta_pct": 1321.2,
            "trades_delta_pct": 985.71,
            "volatility_delta_pct": null,
            "spread_pct_delta_pct": 15.16,
            "amihud_delta_pct": null,
            "turnover_ratio_delta_pct": 1189.05
          }
        },
        "peer_liquidity": [
          {
            "ticker": "TKU",
            "score_pca": 73.11827956989248,
            "rank_pca": 151,
            "adv": 430575.0,
            "trades": 114.0,
            "volatility": null,
            "spread_pct": 0.02496157393175533,
            "spread_ticks": 1.2608695652173914,
            "amihud": null,
            "turnover_ratio": 0.0030203005918959685,
            "is_target": true
          },
          {
            "ticker": "ITS",
            "score_pca": 87.99283154121864,
            "rank_pca": 68,
            "adv": 2713200.0,
            "trades": 779.0,
            "volatility": null,
            "spread_pct": 0.011930068275406743,
            "spread_ticks": 1.2287735849056605,
            "amihud": null,
            "turnover_ratio": 0.040184482498156066,
            "is_target": false
          },
          {
            "ticker": "LVR",
            "score_pca": 57.70609318996416,
            "rank_pca": 237,
            "adv": 60120.0,
            "trades": 19.0,
            "volatility": null,
            "spread_pct": 0.013389711064129683,
            "spread_ticks": 2.4516129032258065,
            "amihud": null,
            "turnover_ratio": 0.0004617931592906351,
            "is_target": false
          },
          {
            "ticker": "NXR",
            "score_pca": 26.344086021505376,
            "rank_pca": 412,
            "adv": 41.0,
            "trades": 1.0,
            "volatility": null,
            "spread_pct": 0.048780487804877974,
            "spread_ticks": 3.9,
            "amihud": null,
            "turnover_ratio": 1.7799074647467968e-06,
            "is_target": false
          },
          {
            "ticker": "U77",
            "score_pca": 29.56989247311828,
            "rank_pca": 394,
            "adv": 473.0,
            "trades": 2.0,
            "volatility": null,
            "spread_pct": 0.0454545454545455,
            "spread_ticks": 2.0,
            "amihud": null,
            "turnover_ratio": 6.81378326767737e-06,
            "is_target": false
          },
          {
            "ticker": "532",
            "score_pca": 2.1505376344086025,
            "rank_pca": 544,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": null,
            "spread_pct": 0.6666666666666666,
            "spread_ticks": 1.0,
            "amihud": null,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "KUX",
            "score_pca": 3.225806451612903,
            "rank_pca": 541,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": null,
            "spread_pct": 0.5730994152046784,
            "spread_ticks": 24.5,
            "amihud": null,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "5DD",
            "score_pca": 84.40860215053763,
            "rank_pca": 88,
            "adv": 2190320.0,
            "trades": 402.0,
            "volatility": null,
            "spread_pct": 0.007303562033856344,
            "spread_ticks": 1.3485714285714285,
            "amihud": null,
            "turnover_ratio": 0.009513106296823918,
            "is_target": false
          },
          {
            "ticker": "BN2",
            "score_pca": 79.92831541218638,
            "rank_pca": 113,
            "adv": 1124370.0,
            "trades": 235.0,
            "volatility": null,
            "spread_pct": 0.005722441119631802,
            "spread_ticks": 1.0320197044334976,
            "amihud": null,
            "turnover_ratio": 0.004445023577998335,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Software - Application",
          "sector_count": 8,
          "market_count": 558,
          "market": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 4314569.091105786,
              "median": 26415.0,
              "min": 0.0,
              "max": 331579444.0,
              "p5": 0.0,
              "p95": 22850065.206202842,
              "count": 558
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.09419102434500713,
              "median": 0.023452514310966798,
              "min": 0.00023463548528764247,
              "max": 1.3777777777777778,
              "p5": 0.0038045047231289996,
              "p95": 0.503048513580684,
              "count": 557
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.01541635045367677,
              "median": 0.0005377471899209525,
              "min": 0.0,
              "max": 5.849976929668446,
              "p5": 0.0,
              "p95": 0.02040573455649377,
              "count": 551
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 566.4014336917563,
              "median": 10.0,
              "min": 0.0,
              "max": 14843.0,
              "p5": 0.0,
              "p95": 2847.4999999999945,
              "count": 558
            }
          },
          "sector": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 2331593.75,
              "median": 30296.5,
              "min": 0.0,
              "max": 15448340.999999998,
              "p5": 0.0,
              "p95": 10991041.649999991,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.17319461193270594,
              "median": 0.03520805969315041,
              "min": 0.0012744270595871114,
              "max": 0.6666666666666666,
              "p5": 0.0050039014851239825,
              "p95": 0.6339181286549707,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.006677962280367349,
              "median": 0.00023430347127915624,
              "min": 0.0,
              "max": 0.040184482498156066,
              "p5": 0.0,
              "p95": 0.029531898529803723,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 496.875,
              "median": 10.5,
              "min": 0.0,
              "max": 3060.0,
              "p5": 0.0,
              "p95": 2261.6499999999987,
              "count": 8
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 761065.5,
              "median": 30296.5,
              "min": 0.0,
              "max": 2713200.0,
              "p5": 0.0,
              "p95": 2530191.9999999995,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 179.75,
              "median": 10.5,
              "min": 0.0,
              "max": 779.0,
              "p5": 0.0,
              "p95": 647.0499999999998,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.17154336220297414,
              "median": 0.029422128259337592,
              "min": 0.005722441119631802,
              "max": 0.6666666666666666,
              "p5": 0.006275833439610392,
              "p95": 0.6339181286549707,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.006826624902875172,
              "median": 0.00023430347127915624,
              "min": 0.0,
              "max": 0.040184482498156066,
              "p5": 0.0,
              "p95": 0.0294495008276898,
              "count": 8
            }
          },
          "returns": {
            "window_days": 1,
            "n_obs": 1,
            "stock": 0.0,
            "market": -0.00865663640518255,
            "sector": 0.0,
            "peers": 0.0,
            "vs_market": 0.00865663640518255,
            "vs_sector": 0.0,
            "vs_peers": 0.0
          }
        }
      },
      "30d": {
        "label": "30D",
        "window_days": 30,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 30,
          "score_pca": 82.79569892473118,
          "score_pca_percentile": 82.79569892473118,
          "rank_pca": 97,
          "total": 558,
          "adv_notional_sgd": 626308.25,
          "adv_volume_shares": 2579050.0,
          "free_float_shares": null,
          "turnover_ratio": 0.004522734855442895,
          "votes": 208.0,
          "trades": 208.0,
          "spread_pct": 0.02144756100097971,
          "spread_ticks": 1.0583402951824006,
          "amihud": 3.236552327364325e-08,
          "volatility": 0.020000000000000018,
          "effective_window_days": 24,
          "data_note": "Based on 24 trading days (listed Jan 2026)"
        },
        "pca": {
          "valid": true,
          "window_days": 30,
          "variance_explained": 0.552723495335401,
          "loadings": {
            "log_adv": 0.5293049366550355,
            "log_trades": 0.4721406537431534,
            "log_turnover": 0.49548282303558056,
            "neg_spread": 0.39066630908146815,
            "neg_amihud": 0.09941727333924794,
            "neg_vol": -0.2981816558789969
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
          "peer_median_adv": 18112.625,
          "peer_median_score_pca": 45.78853046594982,
          "peer_median_trades": 11.5,
          "peer_median_volatility": 0.008242253182800863,
          "peer_median_spread_pct": 0.019529450660074735,
          "peer_median_amihud": 1.1489543096575816e-07,
          "peer_median_turnover_ratio": 0.00019407405618969992,
          "target_vs_peer": {
            "score_pca_delta": 37.01,
            "adv_delta_pct": 3357.9,
            "trades_delta_pct": 1708.7,
            "volatility_delta_pct": -142.65,
            "spread_pct_delta_pct": -9.82,
            "amihud_delta_pct": 71.83,
            "turnover_ratio_delta_pct": 2230.42
          }
        },
        "peer_liquidity": [
          {
            "ticker": "TKU",
            "score_pca": 82.79569892473118,
            "rank_pca": 97,
            "adv": 626308.25,
            "trades": 208.0,
            "volatility": 0.020000000000000018,
            "spread_pct": 0.02144756100097971,
            "spread_ticks": 1.0583402951824006,
            "amihud": 3.236552327364325e-08,
            "turnover_ratio": 0.004522734855442895,
            "is_target": true
          },
          {
            "ticker": "ITS",
            "score_pca": 81.54121863799283,
            "rank_pca": 104,
            "adv": 714690.75,
            "trades": 179.0,
            "volatility": 0.015075376884422176,
            "spread_pct": 0.0077421202381075535,
            "spread_ticks": 1.287548536763885,
            "amihud": 2.199530690535624e-08,
            "turnover_ratio": 0.0127542632696768,
            "is_target": false
          },
          {
            "ticker": "LVR",
            "score_pca": 51.61290322580645,
            "rank_pca": 271,
            "adv": 32175.25,
            "trades": 19.0,
            "volatility": 0.005434782608695676,
            "spread_pct": 0.01169252189518639,
            "spread_ticks": 1.902116402116402,
            "amihud": 1.9347404313542508e-07,
            "turnover_ratio": 0.00021015736590472017,
            "is_target": false
          },
          {
            "ticker": "NXR",
            "score_pca": 39.96415770609319,
            "rank_pca": 336,
            "adv": 4050.0,
            "trades": 1.5,
            "volatility": 0.012345679012345734,
            "spread_pct": 0.04758303224735979,
            "spread_ticks": 3.885483870967742,
            "amihud": 1.418182928843545e-06,
            "turnover_ratio": 0.00017799074647467967,
            "is_target": false
          },
          {
            "ticker": "U77",
            "score_pca": 34.76702508960574,
            "rank_pca": 365,
            "adv": 3071.25,
            "trades": 4.0,
            "volatility": 0.0,
            "spread_pct": 0.02736637942496308,
            "spread_ticks": 1.2321428571428572,
            "amihud": 6.708205941922419e-07,
            "turnover_ratio": 4.22764280017255e-05,
            "is_target": false
          },
          {
            "ticker": "532",
            "score_pca": 11.11111111111111,
            "rank_pca": 497,
            "adv": 11.8,
            "trades": 1.0,
            "volatility": 0.0,
            "spread_pct": 0.6666666666666666,
            "spread_ticks": 1.0,
            "amihud": 0.0,
            "turnover_ratio": 1.2791890483289402e-06,
            "is_target": false
          },
          {
            "ticker": "KUX",
            "score_pca": 5.913978494623656,
            "rank_pca": 526,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.0,
            "spread_pct": 0.3783981909447841,
            "spread_ticks": 16.8,
            "amihud": 0.0018867924528301833,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "5DD",
            "score_pca": 71.14695340501792,
            "rank_pca": 162,
            "adv": 363849.0,
            "trades": 85.0,
            "volatility": 0.0119760479041916,
            "spread_pct": 0.007329116983385296,
            "spread_ticks": 1.2199502133712659,
            "amihud": 3.631681879609125e-08,
            "turnover_ratio": 0.0017828822132449755,
            "is_target": false
          },
          {
            "ticker": "BN2",
            "score_pca": 78.31541218637993,
            "rank_pca": 122,
            "adv": 525738.0,
            "trades": 312.5,
            "volatility": 0.011049723756906049,
            "spread_pct": 0.006052993605603467,
            "spread_ticks": 1.0759107887186705,
            "amihud": 1.8502821957890842e-08,
            "turnover_ratio": 0.0021120355366203566,
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
              "mean": 0.00860149385346916,
              "median": 0.006204181611407511,
              "min": 0.0,
              "max": 0.10000000000000009,
              "p5": 0.0,
              "p95": 0.02941176470588236,
              "count": 558
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 2830681.9022693816,
              "median": 15867.125,
              "min": 0.0,
              "max": 285120680.0,
              "p5": 0.0,
              "p95": 10899679.92499999,
              "count": 558
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.09387684172560291,
              "median": 0.023303149449938394,
              "min": 0.00026031378750760483,
              "max": 1.3043478260869563,
              "p5": 0.0033907546219511834,
              "p95": 0.48379237545269294,
              "count": 557
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.004850471757274334,
              "median": 0.0003147095421619591,
              "min": 0.0,
              "max": 1.433656317975084,
              "p5": 0.0,
              "p95": 0.011246539136943769,
              "count": 551
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 0.00017082449123951798,
              "median": 1.3727750131147213e-07,
              "min": 0.0,
              "max": 0.041666666666666664,
              "p5": 0.0,
              "p95": 6.169692285111282e-05,
              "count": 552
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 396.1810035842294,
              "median": 8.25,
              "min": 0.0,
              "max": 11360.5,
              "p5": 0.0,
              "p95": 2049.1499999999983,
              "count": 558
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.007820572046192659,
              "median": 0.007571760236386671,
              "min": 0.0,
              "max": 0.020000000000000018,
              "p5": 0.0,
              "p95": 0.01827638190954777,
              "count": 8
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 2682145.725,
              "median": 18112.625,
              "min": 0.0,
              "max": 20076858.5,
              "p5": 4.130000000000001,
              "p95": 13300099.78749999,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.14526228364609176,
              "median": 0.024406970212971394,
              "min": 0.0012017967506868497,
              "max": 0.6666666666666666,
              "p5": 0.003490909971284096,
              "p95": 0.5657727001640076,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.003746706341539335,
              "median": 0.00019407405618969992,
              "min": 0.0,
              "max": 0.0127542632696768,
              "p5": 4.477161669151291e-07,
              "p95": 0.012583003232507856,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 0.00023614121624514854,
              "median": 1.1291978320453417e-07,
              "min": 0.0,
              "max": 0.0018867924528301833,
              "p5": 1.535571291480095e-10,
              "p95": 0.0012269114583647134,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 605.5625,
              "median": 11.5,
              "min": 0.0,
              "max": 4432.0,
              "p5": 0.35000000000000003,
              "p95": 2953.5999999999976,
              "count": 8
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 205448.25625,
              "median": 18112.625,
              "min": 0.0,
              "max": 714690.75,
              "p5": 4.130000000000001,
              "p95": 648557.2874999999,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 75.25,
              "median": 11.5,
              "min": 0.0,
              "max": 312.5,
              "p5": 0.35000000000000003,
              "p95": 265.7749999999999,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.006985201270820154,
              "median": 0.008242253182800863,
              "min": 0.0,
              "max": 0.015075376884422176,
              "p5": 0.0,
              "p95": 0.01411998262919542,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.14410387775075706,
              "median": 0.019529450660074735,
              "min": 0.006052993605603467,
              "max": 0.6666666666666666,
              "p5": 0.006499636787827107,
              "p95": 0.5657727001640076,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 0.0002361439681680017,
              "median": 1.1489543096575816e-07,
              "min": 0.0,
              "max": 0.0018867924528301833,
              "p5": 6.475987685261795e-09,
              "p95": 0.0012269114583647134,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0021351105936214484,
              "median": 0.00019407405618969992,
              "min": 0.0,
              "max": 0.0127542632696768,
              "p5": 4.477161669151291e-07,
              "p95": 0.00902948356310704,
              "count": 8
            }
          },
          "returns": {
            "window_days": 30,
            "n_obs": 23,
            "stock": -0.12280701754385959,
            "market": 0.028179587008979157,
            "sector": -0.026139939734661555,
            "peers": -0.002628314638406737,
            "vs_market": -0.15098660455283874,
            "vs_sector": -0.09666707780919803,
            "vs_peers": -0.12017870290545285
          }
        }
      },
      "3m": {
        "label": "3M",
        "window_days": 63,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 63,
          "score_pca": 87.81362007168458,
          "score_pca_percentile": 87.81362007168458,
          "rank_pca": 69,
          "total": 558,
          "adv_notional_sgd": 626308.25,
          "adv_volume_shares": 2579050.0,
          "free_float_shares": null,
          "turnover_ratio": 0.004522734855442895,
          "votes": 208.0,
          "trades": 208.0,
          "spread_pct": 0.02144756100097971,
          "spread_ticks": 1.0583402951824006,
          "amihud": 3.236552327364325e-08,
          "volatility": 0.020000000000000018,
          "effective_window_days": 24,
          "data_note": "Based on 24 trading days (listed Jan 2026)"
        },
        "pca": {
          "valid": true,
          "window_days": 63,
          "variance_explained": 0.5640947177611548,
          "loadings": {
            "log_adv": 0.5207754662616942,
            "log_trades": 0.4645276594806148,
            "log_turnover": 0.4867873237679461,
            "neg_spread": 0.3831703795232652,
            "neg_amihud": 0.1727636063012412,
            "neg_vol": -0.31524318443069493
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
          "peer_median_adv": 21915.75,
          "peer_median_score_pca": 54.21146953405018,
          "peer_median_trades": 19.0,
          "peer_median_volatility": 0.005657392410140849,
          "peer_median_spread_pct": 0.020002546164385196,
          "peer_median_amihud": 1.1317111566540977e-07,
          "peer_median_turnover_ratio": 0.000351528403157892,
          "target_vs_peer": {
            "score_pca_delta": 33.6,
            "adv_delta_pct": 2757.8,
            "trades_delta_pct": 994.74,
            "volatility_delta_pct": -253.52,
            "spread_pct_delta_pct": -7.22,
            "amihud_delta_pct": 71.4,
            "turnover_ratio_delta_pct": 1186.59
          }
        },
        "peer_liquidity": [
          {
            "ticker": "TKU",
            "score_pca": 87.81362007168458,
            "rank_pca": 69,
            "adv": 626308.25,
            "trades": 208.0,
            "volatility": 0.020000000000000018,
            "spread_pct": 0.02144756100097971,
            "spread_ticks": 1.0583402951824006,
            "amihud": 3.236552327364325e-08,
            "turnover_ratio": 0.004522734855442895,
            "is_target": true
          },
          {
            "ticker": "ITS",
            "score_pca": 73.47670250896059,
            "rank_pca": 149,
            "adv": 170720.0,
            "trades": 59.0,
            "volatility": 0.01162830003718357,
            "spread_pct": 0.008698015765153583,
            "spread_ticks": 1.46,
            "amihud": 4.7157804871232846e-08,
            "turnover_ratio": 0.0031635727044103403,
            "is_target": false
          },
          {
            "ticker": "LVR",
            "score_pca": 56.272401433691755,
            "rank_pca": 245,
            "adv": 33000.0,
            "trades": 34.0,
            "volatility": 0.005449631741506311,
            "spread_pct": 0.010154346060113737,
            "spread_ticks": 1.3636363636363635,
            "amihud": 1.791844264595867e-07,
            "turnover_ratio": 0.00023850095801686993,
            "is_target": false
          },
          {
            "ticker": "NXR",
            "score_pca": 52.1505376344086,
            "rank_pca": 268,
            "adv": 10831.5,
            "trades": 4.0,
            "volatility": 0.012739370334306999,
            "spread_pct": 0.04221474457020488,
            "spread_ticks": 3.3421052631578947,
            "amihud": 7.734960772379357e-07,
            "turnover_ratio": 0.000464555848298914,
            "is_target": false
          },
          {
            "ticker": "U77",
            "score_pca": 38.35125448028674,
            "rank_pca": 345,
            "adv": 5875.0,
            "trades": 4.0,
            "volatility": 0.0,
            "spread_pct": 0.029850746268656657,
            "spread_ticks": 1.375,
            "amihud": 8.139606184147196e-07,
            "turnover_ratio": 7.742935531451557e-05,
            "is_target": false
          },
          {
            "ticker": "532",
            "score_pca": 19.17562724014337,
            "rank_pca": 452,
            "adv": 100.0,
            "trades": 1.0,
            "volatility": 0.0,
            "spread_pct": 0.6666666666666666,
            "spread_ticks": 1.0,
            "amihud": 0.0,
            "turnover_ratio": 1.0840585155330003e-05,
            "is_target": false
          },
          {
            "ticker": "KUX",
            "score_pca": 4.659498207885305,
            "rank_pca": 533,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.0,
            "spread_pct": 0.4068522483940044,
            "spread_ticks": 20.25,
            "amihud": 0.00011438109722736405,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "5DD",
            "score_pca": 65.05376344086021,
            "rank_pca": 196,
            "adv": 161838.0,
            "trades": 42.0,
            "volatility": 0.006172839506172867,
            "spread_pct": 0.007313949671519523,
            "spread_ticks": 1.2133333333333334,
            "amihud": 3.7992123310156846e-08,
            "turnover_ratio": 0.000824392192099852,
            "is_target": false
          },
          {
            "ticker": "BN2",
            "score_pca": 77.24014336917563,
            "rank_pca": 128,
            "adv": 417582.0,
            "trades": 309.0,
            "volatility": 0.005865153078775387,
            "spread_pct": 0.006326205087999141,
            "spread_ticks": 1.0878459687123947,
            "amihud": 1.8639883260635865e-08,
            "turnover_ratio": 0.0017377327427314391,
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
              "mean": 0.006949369119730392,
              "median": 0.005082616803066375,
              "min": 0.0,
              "max": 0.10000000000000009,
              "p5": 0.0,
              "p95": 0.02351277754503557,
              "count": 558
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 2296101.6085556066,
              "median": 12483.05,
              "min": 0.0,
              "max": 229683168.0,
              "p5": 0.0,
              "p95": 8948544.999999989,
              "count": 558
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.09138805345134995,
              "median": 0.026345502446368105,
              "min": 0.000267315276395102,
              "max": 1.267605633802817,
              "p5": 0.0035274437096490014,
              "p95": 0.4820938928126297,
              "count": 557
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0027290088889379625,
              "median": 0.00026204227438169535,
              "min": 0.0,
              "max": 0.553687957286929,
              "p5": 0.0,
              "p95": 0.007145347423294427,
              "count": 551
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.8540726976424174e-05,
              "median": 1.1172354459498314e-07,
              "min": 0.0,
              "max": 0.0028758169934640513,
              "p5": 0.0,
              "p95": 4.320042530568855e-05,
              "count": 554
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 340.01702508960574,
              "median": 7.0,
              "min": 0.0,
              "max": 8883.0,
              "p5": 0.0,
              "p95": 1889.8499999999995,
              "count": 558
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.007096082482226235,
              "median": 0.006200494743159646,
              "min": 0.0,
              "max": 0.020000000000000018,
              "p5": 0.0,
              "p95": 0.017458779617007456,
              "count": 8
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 1519749.84375,
              "median": 21915.75,
              "min": 0.0,
              "max": 11311164.0,
              "p5": 35.0,
              "p95": 7571464.487499994,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.14838637620666284,
              "median": 0.025649153634818185,
              "min": 0.001206680927523094,
              "max": 0.6666666666666666,
              "p5": 0.0038286481206937653,
              "p95": 0.5757316202712347,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0018877634757611518,
              "median": 0.000351528403157892,
              "min": 0.0,
              "max": 0.0066244734994503505,
              "p5": 3.794204804365501e-06,
              "p95": 0.00588886497404774,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.4528490449801923e-05,
              "median": 1.1317111566540977e-07,
              "min": 0.0,
              "max": 0.00011438109722736405,
              "p5": 2.3167227797391054e-10,
              "p95": 7.463259941423172e-05,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 344.375,
              "median": 19.0,
              "min": 0.0,
              "max": 2445.0,
              "p5": 0.35000000000000003,
              "p95": 1662.0499999999988,
              "count": 8
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 99993.3125,
              "median": 21915.75,
              "min": 0.0,
              "max": 417582.0,
              "p5": 35.0,
              "p95": 331180.2999999999,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 56.625,
              "median": 19.0,
              "min": 0.0,
              "max": 309.0,
              "p5": 0.35000000000000003,
              "p95": 221.4999999999999,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.005231911837243142,
              "median": 0.005657392410140849,
              "min": 0.0,
              "max": 0.012739370334306999,
              "p5": 0.0,
              "p95": 0.012350495730313799,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.1472596153105398,
              "median": 0.020002546164385196,
              "min": 0.006326205087999141,
              "max": 0.6666666666666666,
              "p5": 0.0066719156922312745,
              "p95": 0.5757316202712347,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.453144102011479e-05,
              "median": 1.1317111566540977e-07,
              "min": 0.0,
              "max": 0.00011438109722736405,
              "p5": 6.523959141222554e-09,
              "p95": 7.463259941423172e-05,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0008146280482534075,
              "median": 0.000351528403157892,
              "min": 0.0,
              "max": 0.0031635727044103403,
              "p5": 3.794204804365501e-06,
              "p95": 0.002664528717822724,
              "count": 8
            }
          },
          "returns": {
            "window_days": 63,
            "n_obs": 23,
            "stock": -0.12280701754385959,
            "market": 0.028179587008979157,
            "sector": -0.026139939734661555,
            "peers": -0.002628314638406737,
            "vs_market": -0.15098660455283874,
            "vs_sector": -0.09666707780919803,
            "vs_peers": -0.12017870290545285
          }
        }
      },
      "6m": {
        "label": "6M",
        "window_days": 126,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 126,
          "score_pca": 86.55913978494624,
          "score_pca_percentile": 86.55913978494624,
          "rank_pca": 76,
          "total": 558,
          "adv_notional_sgd": 626308.25,
          "adv_volume_shares": 2579050.0,
          "free_float_shares": null,
          "turnover_ratio": 0.004522734855442895,
          "votes": 208.0,
          "trades": 208.0,
          "spread_pct": 0.02144756100097971,
          "spread_ticks": 1.0583402951824006,
          "amihud": 3.236552327364325e-08,
          "volatility": 0.020000000000000018,
          "effective_window_days": 24,
          "data_note": "Based on 24 trading days (listed Jan 2026)"
        },
        "pca": {
          "valid": true,
          "window_days": 126,
          "variance_explained": 0.5716070976371573,
          "loadings": {
            "log_adv": 0.5159970079249786,
            "log_trades": 0.45654448151149096,
            "log_turnover": 0.4821523945022942,
            "neg_spread": 0.3915047101188283,
            "neg_amihud": 0.19373429562079814,
            "neg_vol": -0.31942820374015674
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
          "peer_median_adv": 46062.75,
          "peer_median_score_pca": 59.13978494623656,
          "peer_median_trades": 25.0,
          "peer_median_volatility": 0.009989039457951376,
          "peer_median_spread_pct": 0.017688237210152044,
          "peer_median_amihud": 8.740647559592585e-08,
          "peer_median_turnover_ratio": 0.0005929816297477759,
          "target_vs_peer": {
            "score_pca_delta": 27.42,
            "adv_delta_pct": 1259.7,
            "trades_delta_pct": 732.0,
            "volatility_delta_pct": -100.22,
            "spread_pct_delta_pct": -21.25,
            "amihud_delta_pct": 62.97,
            "turnover_ratio_delta_pct": 662.71
          }
        },
        "peer_liquidity": [
          {
            "ticker": "TKU",
            "score_pca": 86.55913978494624,
            "rank_pca": 76,
            "adv": 626308.25,
            "trades": 208.0,
            "volatility": 0.020000000000000018,
            "spread_pct": 0.02144756100097971,
            "spread_ticks": 1.0583402951824006,
            "amihud": 3.236552327364325e-08,
            "turnover_ratio": 0.004522734855442895,
            "is_target": true
          },
          {
            "ticker": "ITS",
            "score_pca": 71.50537634408603,
            "rank_pca": 160,
            "adv": 171307.75,
            "trades": 58.5,
            "volatility": 0.010362694300518172,
            "spread_pct": 0.008463765974856707,
            "spread_ticks": 1.4125921794633451,
            "amihud": 4.630137229859257e-08,
            "turnover_ratio": 0.0031509835808206923,
            "is_target": false
          },
          {
            "ticker": "LVR",
            "score_pca": 70.96774193548387,
            "rank_pca": 163,
            "adv": 74219.0,
            "trades": 137.5,
            "volatility": 0.009615384615384581,
            "spread_pct": 0.009619590394279374,
            "spread_ticks": 1.0915710503089144,
            "amihud": 1.2851157889325912e-07,
            "turnover_ratio": 0.00048287802659357576,
            "is_target": false
          },
          {
            "ticker": "NXR",
            "score_pca": 52.32974910394266,
            "rank_pca": 267,
            "adv": 17906.5,
            "trades": 5.0,
            "volatility": 0.013333333333333308,
            "spread_pct": 0.03826275351324862,
            "spread_ticks": 3.1875,
            "amihud": 7.643296523217332e-07,
            "turnover_ratio": 0.0008748245189230506,
            "is_target": false
          },
          {
            "ticker": "U77",
            "score_pca": 54.83870967741935,
            "rank_pca": 253,
            "adv": 14766.0,
            "trades": 9.0,
            "volatility": 0.01666666666666672,
            "spread_pct": 0.025756884026024714,
            "spread_ticks": 1.3624633431085043,
            "amihud": 4.957521511809565e-07,
            "turnover_ratio": 0.0001636856571348859,
            "is_target": false
          },
          {
            "ticker": "532",
            "score_pca": 20.78853046594982,
            "rank_pca": 443,
            "adv": 149.10000000000002,
            "trades": 2.0,
            "volatility": 0.0,
            "spread_pct": 0.6666666666666666,
            "spread_ticks": 1.0,
            "amihud": 0.0,
            "turnover_ratio": 1.1626527579091428e-05,
            "is_target": false
          },
          {
            "ticker": "KUX",
            "score_pca": 3.763440860215054,
            "rank_pca": 538,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.0,
            "spread_pct": 0.4150943396226415,
            "spread_ticks": 22.0,
            "amihud": 0.0002052913464375108,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "5DD",
            "score_pca": 63.44086021505376,
            "rank_pca": 205,
            "adv": 146765.0,
            "trades": 41.0,
            "volatility": 0.0060606060606061,
            "spread_pct": 0.007146011890973677,
            "spread_ticks": 1.215250965250965,
            "amihud": 3.949190894705958e-08,
            "turnover_ratio": 0.0007030852329019759,
            "is_target": false
          },
          {
            "ticker": "BN2",
            "score_pca": 81.72043010752688,
            "rank_pca": 103,
            "adv": 546404.5,
            "trades": 355.5,
            "volatility": 0.011428571428571344,
            "spread_pct": 0.006501712602145907,
            "spread_ticks": 1.1030301080802882,
            "amihud": 1.88675172747214e-08,
            "turnover_ratio": 0.0023182222942806493,
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
              "mean": 0.0076320630229185,
              "median": 0.005571073867163268,
              "min": 0.0,
              "max": 0.06666666666666665,
              "p5": 0.0,
              "p95": 0.026422475106685696,
              "count": 558
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 2280310.5336548155,
              "median": 12198.925,
              "min": 0.0,
              "max": 208967857.5,
              "p5": 0.0,
              "p95": 9565671.862499995,
              "count": 558
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.09016236024508736,
              "median": 0.02725138909148773,
              "min": 0.00028072634383316064,
              "max": 1.267605633802817,
              "p5": 0.003552985129330977,
              "p95": 0.46295224883814556,
              "count": 557
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.002685942736944436,
              "median": 0.0003141444220450286,
              "min": 0.0,
              "max": 0.659152330103487,
              "p5": 0.0,
              "p95": 0.00681173421723931,
              "count": 551
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.5052881483440613e-05,
              "median": 1.8110073985633547e-07,
              "min": 0.0,
              "max": 0.002016644478507272,
              "p5": 0.0,
              "p95": 4.6427518490432786e-05,
              "count": 556
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 333.93817204301075,
              "median": 7.0,
              "min": 0.0,
              "max": 8792.0,
              "p5": 0.0,
              "p95": 1883.675,
              "count": 558
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.00968208892431692,
              "median": 0.009989039457951376,
              "min": 0.0,
              "max": 0.020000000000000018,
              "p5": 0.0,
              "p95": 0.01883333333333336,
              "count": 8
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 1416718.575,
              "median": 46062.75,
              "min": 0.0,
              "max": 10429092.0,
              "p5": 52.18500000000001,
              "p95": 6998117.687499994,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.14832484669503476,
              "median": 0.023602222513502212,
              "min": 0.001287212361580828,
              "max": 0.6666666666666666,
              "p5": 0.003799006126227386,
              "p95": 0.5786163522012577,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0019834441668378235,
              "median": 0.0006788512727583132,
              "min": 0.0,
              "max": 0.0066608201682083965,
              "p5": 4.069284652682e-06,
              "p95": 0.00591249030874047,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 2.5844930924419784e-05,
              "median": 8.740647559592585e-08,
              "min": 0.0,
              "max": 0.0002052913464375108,
              "p5": 2.94237957745388e-10,
              "p95": 0.00013370689056269454,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 370.1875,
              "median": 33.75,
              "min": 0.0,
              "max": 2541.5,
              "p5": 0.7000000000000001,
              "p95": 1724.7749999999987,
              "count": 8
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 121439.73125,
              "median": 46062.75,
              "min": 0.0,
              "max": 546404.5,
              "p5": 52.18500000000001,
              "p95": 415120.63749999984,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 76.0625,
              "median": 25.0,
              "min": 0.0,
              "max": 355.5,
              "p5": 0.7000000000000001,
              "p95": 279.1999999999999,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.008433407050635028,
              "median": 0.009989039457951376,
              "min": 0.0,
              "max": 0.01666666666666672,
              "p5": 0.0,
              "p95": 0.015500000000000022,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.14718896558635466,
              "median": 0.017688237210152044,
              "min": 0.006501712602145907,
              "max": 0.6666666666666666,
              "p5": 0.006727217353235626,
              "p95": 0.5786163522012577,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 2.584807507730339e-05,
              "median": 8.740647559592585e-08,
              "min": 0.0,
              "max": 0.0002052913464375108,
              "p5": 6.603631046152491e-09,
              "p95": 0.00013370689056269454,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0009631632297792401,
              "median": 0.0005929816297477759,
              "min": 0.0,
              "max": 0.0031509835808206923,
              "p5": 4.069284652682e-06,
              "p95": 0.002859517130531677,
              "count": 8
            }
          },
          "returns": {
            "window_days": 126,
            "n_obs": 23,
            "stock": -0.12280701754385959,
            "market": 0.028179587008979157,
            "sector": -0.026139939734661555,
            "peers": -0.002628314638406737,
            "vs_market": -0.15098660455283874,
            "vs_sector": -0.09666707780919803,
            "vs_peers": -0.12017870290545285
          }
        }
      }
    },
    "period_insights": {
      "1d": {
        "liquidity": "On the latest trading day, liquidity remains robust with a score of 73 and ADV of S$431K, reflecting solid daily trading despite a slightly wider spread of 2.5%.",
        "market_comparison": "Compared to peers, the spread is modestly wider at 2.5% versus 1.95% peer median, but volume and trades significantly exceed peer levels."
      },
      "30d": {
        "liquidity": "Over the past 30 days, liquidity is strong with a PCA score above 80 and average daily volume exceeding S$626K, underscoring well-supported trading activity.",
        "market_comparison": "Liquidity markedly outperforms peers, with a trading volume more than 33 times the median and a tighter spread nearly 10% better."
      },
      "3m": {
        "liquidity": "Based on 24 trading days since January 2026, the 3-month liquidity score stands at 87.8 with ADV of S$626K and a tight spread of 2.1%.",
        "market_comparison": "This places TKU well above its peer median liquidity score of 45.8 and with volume exceeding peers by over 3300%, indicating very strong market interest."
      },
      "6m": {
        "liquidity": "Considering the initial 6 months since listing, liquidity remains very healthy at a score of 86.6 with stable trading volume and spreads.",
        "market_comparison": "The company's liquidity health consistently surpasses peer benchmarks, confirming its competitive standing in a small-cap software segment."
      }
    }
  },
  "q02": {
    "regime_switching": {
      "valid": true,
      "regime_method": "liquidity_score_markov",
      "n_regimes": 2,
      "current_regime": 1,
      "regimes": [
        {
          "id": 0,
          "label": "Low Liquidity",
          "liquidity_score": 10.416666666666668,
          "pct_time": 0.16666666666666666
        },
        {
          "id": 1,
          "label": "Medium Liquidity",
          "liquidity_score": 60.41666666666667,
          "pct_time": 0.8333333333333334
        }
      ],
      "transitions": [
        [
          0.7501373069452079,
          0.2498626930547921
        ],
        [
          0.05001760710623382,
          0.9499823928937662
        ]
      ]
    }
  },
  "theme": {
    "badges": {
      "header_health": {
        "text": "Liquidity Health: Strong",
        "bg": "bg-emerald",
        "textColor": "text-emerald",
        "dot": "bg-emerald"
      },
      "liq_section": {
        "text": "Liquidity score: 83% — High",
        "bg": "bg-emerald",
        "textColor": "text-emerald"
      },
      "perf": {
        "text": "Stock underperformed peers and market last 30 days",
        "bg": "bg-slate-700/40",
        "textColor": "text-slate-300"
      },
      "drivers": {
        "text": "Company-driven",
        "bg": "bg-amber",
        "textColor": "text-amber"
      },
      "exec_check": {
        "text": "Execution efficient with manageable spreads",
        "bg": "bg-emerald",
        "textColor": "text-emerald"
      },
      "intraday": {
        "text": "High continuous trading participation",
        "bg": "bg-emerald",
        "textColor": "text-emerald"
      },
      "ofi": {
        "text": "Balanced order flow",
        "bg": "bg-amber",
        "textColor": "text-amber"
      },
      "short": {
        "text": "Low short interest",
        "bg": "bg-emerald",
        "textColor": "text-emerald"
      },
      "index_status": {
        "text": "Stable market presence",
        "bg": "bg-amber",
        "textColor": "text-amber"
      }
    },
    "borders": {
      "action_plan": "border-emerald",
      "index": "border-amber"
    },
    "colors": {
      "interpretation_good": "interpretation-good",
      "interpretation_neutral": "interpretation-neutral",
      "interpretation_bad": "interpretation-bad"
    }
  },
  "labels": {
    "header_title": "Liquidity Analysis Report",
    "header_meta_line1_tokens": [
      "Toku Ltd",
      "•",
      "TKU",
      "•",
      "Sector: Software - Application",
      "•",
      "Market Cap: S$148.3M (small cap)"
    ],
    "header_meta_line2_tokens": [
      "As of: 2026-02-26",
      "•",
      "Universe: 558",
      "•",
      "Peers: 8"
    ],
    "exec_title": "Executive Summary: What Matters for Trading",
    "exec_subtitle": "Review of liquidity health, trading costs, and price drivers for TKU.",
    "exec_takeaways_title": "Key Takeaways:",
    "metric_liquidity_score": "Liquidity Score",
    "metric_spread": "Trading Cost (Spread)",
    "metric_adv": "Average Traded Volume",
    "metric_drivers": "What Drives Price Changes",
    "liq_title": "Liquidity Health & Peer Comparison",
    "liq_subtitle": "Strong liquidity relative to peer group in recent months.",
    "market_comparison_title": "How You Compare to the Market",
    "market_comparison_subtitle": "TKU outperforms peers in traded volume and liquidity score.",
    "perf_title": "Stock Performance",
    "perf_subtitle": "Recent underperformance relative to market and sector.",
    "perf_insight": "TKU has seen a 12.3% price decline over 30 days, lagging sector and market gains.",
    "drivers_title": "What Moves Your Stock Price?",
    "drivers_subtitle": "Company-specific factors are dominant drivers of returns.",
    "drivers_strip": [
      {
        "title": "Key Insight",
        "text": "67.9% of price changes are company-specific."
      },
      {
        "title": "Market Link",
        "text": "Negative beta indicates inverse correlation with market."
      },
      {
        "title": "Sector Link",
        "text": "High beta vs sector suggests sensitivity to sector moves."
      }
    ],
    "drivers_pie_title": "Price Change Attribution",
    "drivers_pie_note": "Company-specific drivers dominate over market and sector influences.",
    "lead_lag_title": "Lead-Lag Relationships",
    "lead_lag_note": "Company return dynamics slightly lead sector but lag market trends.",
    "rolling_title": "Rolling Liquidity Metrics",
    "rolling_latest_label": "Latest: 6m",
    "rolling_note": "Liquidity score has remained consistently above 80 since listing.",
    "drivers_bottom_line": "Focus on company news and fundamentals for trading strategy.",
    "drivers_wtd_title": "What This Means for Trading",
    "drivers_wtd_list": [
      "Monitor company-specific news for price impact.",
      "Hedge market risk due to negative market beta.",
      "Consider sector momentum for short-term positioning."
    ],
    "regime_title": "Liquidity Regime Analysis",
    "regime_subtitle": "Majority of time spent in medium liquidity state.",
    "regime_badge_text": "Medium Liquidity",
    "regime_pie_title": "Liquidity Regime Distribution",
    "transition_title": "Liquidity Regime Transitions",
    "transition_cols": [
      "From \\ To",
      "Low Liquidity",
      "Medium Liquidity"
    ],
    "transition_note_template": "TKU spends 83.3% of time in medium liquidity regime with smooth transitions.",
    "exec_check_title": "Trading Costs & Market Depth",
    "exec_check_subtitle": "Spreads and depth support efficient execution of large trades.",
    "order_book_title": "Order Book Depth (Available Liquidity)",
    "order_book_note": "Depth allows sizeable orders with moderate price impact.",
    "peer_capacity_title": "Peer Capacity Comparison",
    "peer_capacity_note": "TKU offers superior liquidity capacity versus peers.",
    "impact_summary_title": "Estimated Price Impact (Sell Orders)",
    "impact_summary_subtitle": "Impact and fill rates vary by order size highlighting sizing considerations.",
    "exec_check_insight": "Large orders up to 1 million shares fill above 60% with acceptable price impact.",
    "trader_composition_title": "Who's Trading Your Stock?",
    "trader_composition_subtitle": "Predominantly retail-driven market participation.",
    "trader_retail_threshold": "Retail: 90%",
    "trader_mixed_threshold": "Mixed: 9.3%",
    "trader_instit_threshold": "Institutional: 0.8%",
    "peer_trader_title": "Peer Trader Composition",
    "peer_trader_subtitle": "Retail dominance is pronounced compared to typical peers.",
    "price_moving_title": "Which Trades Move the Price?",
    "price_moving_subtitle": "20.2% of trades are price-moving indicating sufficient activity for price discovery.",
    "intraday_title": "When Does Trading Happen?",
    "intraday_subtitle": "Most trading occurs in continuous session with limited auction participation.",
    "session_dist_title": "Trading by Session",
    "session_period_label": "Period:",
    "session_dist_note": "Consistently high continuous session activity.",
    "hhi_title": "Trading Concentration (HHI)",
    "hhi_note_template": "Moderate concentration with HHI around 0.19 indicates dispersed trading.",
    "intraday_intensity_title": "Trading Activity by Time of Day",
    "intraday_intensity_note": "Activity peaks mid-day in regular trading hours.",
    "peers_hhi_title": "Peer Comparison: Trading Concentration",
    "peers_hhi_cols": [
      "Ticker",
      "% Auctions",
      "HHI",
      "Interpretation"
    ],
    "peers_hhi_note": "TKU has a comparable auction participation and HHI relative to peers.",
    "intraday_insight": "Intraday trading patterns support stability in liquidity provision.",
    "ofi_title": "Order Flow Balance",
    "ofi_subtitle": "Order flow is balanced supporting stable price formation.",
    "ofi_tiles": [
      {
        "title": "Order Flow Imbalance",
        "note": "No significant persistent imbalance observed."
      },
      {
        "title": "OFI vs Daily Prices",
        "note": "Order flow changes align moderately with price moves."
      },
      {
        "title": "Short-Term Order Book Signal",
        "note": "Signal indicates occasional order flow shifts affecting price temporarily."
      }
    ],
    "ofi_table_title": "Order Flow Summary",
    "ofi_table_note": "Balanced buy and sell order flow over recent periods.",
    "ofi_table_cols": [
      "Period",
      "Avg OFI",
      "Avg |OFI|",
      "Interpretation"
    ],
    "ofi_corr_note_template": "Order flow metrics correlate with short-term price variations.",
    "ofi_pie_title": "Order Flow Days",
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
    "ofi_unusual_note": "Days with pronounced imbalance correspond to higher volatility.",
    "index_title": "Index Visibility & Eligibility",
    "index_subtitle": "Stable index eligibility supports investor access.",
    "short_title": "Short Selling & Lending",
    "short_subtitle": "Low short interest with negative correlation to returns.",
    "footer": "Liquidity Analysis Report • Generated by Deltablock"
  },
  "content": {
    "exec_metrics": [
      {
        "title": "Liquidity Score",
        "tooltip": {
          "title": "Liquidity Score Explanation",
          "body": "Reflects combined metrics of traded volume, spread, and trade count relative to universe."
        },
        "value": "83",
        "suffix": "/100",
        "bar_pct": 83,
        "color_value": "text-emerald",
        "color_bar": "bg-emerald",
        "subtext": "Rank 97/558 • Among top 17% in liquidity",
        "interpretation": {
          "text": "Strong",
          "cls": "interpretation-good",
          "icon": "◆"
        }
      },
      {
        "title": "Trading Cost (Spread)",
        "tooltip": {
          "title": "Spread Cost",
          "body": "Average bid-ask spread percentage relative to peers."
        },
        "value": "2.1",
        "suffix": "%",
        "bar_pct": 21,
        "color_value": "text-amber",
        "color_bar": "bg-amber",
        "subtext": "Slightly wider than peer median (1.95%)",
        "interpretation": {
          "text": "Moderate",
          "cls": "interpretation-neutral",
          "icon": "◆"
        }
      },
      {
        "title": "Average Traded Volume",
        "tooltip": {
          "title": "ADV",
          "body": "Average daily traded value in local currency."
        },
        "value": "S$626K",
        "suffix": "",
        "bar_pct": 75,
        "color_value": "text-emerald",
        "color_bar": "bg-emerald",
        "subtext": "33x above peer median ADV",
        "interpretation": {
          "text": "High",
          "cls": "interpretation-good",
          "icon": "◆"
        }
      },
      {
        "title": "What Drives Price Changes",
        "tooltip": {
          "title": "Price Drivers",
          "body": "Share of price variation explained by company-specific factors."
        },
        "value": "67.9",
        "suffix": "company-specific",
        "bar_pct": 68,
        "color_value": "text-amber",
        "color_bar": "bg-amber",
        "subtext": "Dominant company-specific influence over returns",
        "interpretation": {
          "text": "Company-driven",
          "cls": "interpretation-neutral",
          "icon": "◆"
        }
      }
    ],
    "exec_takeaways": [
      "TKU demonstrates strong liquidity with a score of 83 ranking in the top 20% of its universe.",
      "Despite slightly higher spreads than peers, trading volume exceeds peers by over 3300%, enhancing trading flexibility.",
      "Stock price declined 12.3% last 30 days, influenced primarily by company-specific factors and negative market beta."
    ],
    "liq_tiles": [
      {
        "title": "Liquidity Score (3M)",
        "value": "88",
        "sub": "Strong liquidity relative to peers",
        "interp": {
          "text": "Strong",
          "cls": "interpretation-good",
          "icon": "◆"
        }
      },
      {
        "title": "Spread (3M)",
        "value": "2.1%",
        "sub": "Slightly higher than peer median",
        "interp": {
          "text": "Moderate",
          "cls": "interpretation-neutral",
          "icon": "◆"
        }
      },
      {
        "title": "Average Volume (3M)",
        "value": "S$626K",
        "sub": "33x peer median ADV",
        "interp": {
          "text": "High",
          "cls": "interpretation-good",
          "icon": "◆"
        }
      }
    ],
    "liq_insight": "Liquidity is very healthy given TKU's size, driven by high volume and frequent trades despite being a recent listing.",
    "perf_badge": "Stock Price: -12.3% (30d) underperformed market and peers.",
    "exec_check_tiles": [
      {
        "title": "Mid Price",
        "value": "S$0.2525",
        "note": "Current trading price",
        "color": "text-white"
      },
      {
        "title": "Spread",
        "value": "1.98%",
        "note": "Slightly wider than peer median",
        "color": "text-amber"
      },
      {
        "title": "Depth",
        "value": "Moderate",
        "note": "Adequate liquidity for large orders",
        "color": "text-emerald"
      }
    ],
    "impact_summary_cards": [
      {
        "title": "Price Impact for 1M shares",
        "text": "Impact -6.9%, fill rate 61.7%",
        "cls": "interpretation-neutral"
      }
    ],
    "peers_hhi_header": [
      "Ticker",
      "% Auctions",
      "HHI",
      "Interpretation"
    ],
    "ofi_tiles_interpretations": [
      {
        "cls": "interpretation-neutral",
        "text": "Balanced order flow"
      },
      {
        "cls": "interpretation-neutral",
        "text": "Order flow aligns with price"
      },
      {
        "cls": "interpretation-neutral",
        "text": "Short-term signals present"
      }
    ],
    "footer": "Liquidity Analysis Report • Generated by Deltablock"
  },
  "insights": {
    "liquidity": {
      "overall": "TKU enjoys strong liquidity with a PCA score above 80 shortly after listing, supported by high trade counts and volume.",
      "strengths": [
        "ADV exceeds peer median by 3358%, supporting robust trading.",
        "Liquidity rank 97/558 places it in the top quintile.",
        "Spread is competitive though slightly wider, aiding efficient execution."
      ],
      "concerns": [
        "Limited trading history since IPO restricts longer-term assessment.",
        "Small market cap of S$148M limits some institutional participation."
      ],
      "peer_context": "TKU outperforms its small peer group on virtually all liquidity dimensions."
    },
    "market_comparison": {
      "adv": {
        "insight": "ADV of S$626K is exceptionally strong for company size.",
        "vs_market": "Far exceeds average market small-cap ADV.",
        "vs_sector": "Leading volume among software application peers.",
        "vs_peers": "33x higher than peer median ADV."
      },
      "spread": {
        "insight": "Spread at 2.1% is slightly wider than the peer average of 1.95%.",
        "vs_market": "Above market median spreads indicating room for improvement.",
        "vs_sector": "Comparable or slightly wider than sector averages.",
        "vs_peers": "9.8% wider than peer median spread."
      },
      "volatility": {
        "insight": "Measured volatility at 2% is moderate for sector standards.",
        "vs_market": "Volatility is in line with overall market.",
        "vs_sector": "Consistent with sector risk profiles.",
        "vs_peers": "Similar to peers in technology."
      },
      "trades": {
        "insight": "Trade frequency is robust with 208 daily trades versus 11.5 peers.",
        "vs_market": "Trade count far exceeds typical small cap market levels.",
        "vs_sector": "Highly active compared to sector counterparts.",
        "vs_peers": "18x above peer median trade frequency."
      }
    },
    "performance": {
      "overall": "The stock has declined 12.3% over the past 30 days, underperforming the market (up 2.8%) and sector (-2.6%).",
      "conclusion": "Price performance is weak, reflecting company-specific factors amid negative market beta."
    },
    "drivers": {
      "overall": "67.9% of price movement is company-specific, with negative market beta and positive sector beta indicating unique return drivers.",
      "interpretation": "Returns are primarily company-driven with moderate sector sensitivity and inverse market correlation.",
      "rolling_change": "Liquidity and driver metrics have remained stable since listing.",
      "beta": "Negative market beta (-0.81) implies resilience to market drops but potential lag in rallies."
    },
    "regime": {
      "overall": "Liquidity operates mostly in medium liquidity regime 83% of the time with low liquidity regime only 17%.",
      "current": "Currently in medium liquidity regime supporting active trading and price discovery.",
      "transitions": "Transitions between regimes are smooth and predictable.",
      "trading_implications": "Medium liquidity regime suggests consistent execution ability with manageable costs."
    },
    "trader_composition": {
      "overall": "Predominantly retail-driven trading environment with 90% retail participation.",
      "retail_heavy": "High retail participation may increase volatility during sentiment shifts.",
      "institutional_gap": "Institutional participation is minimal at 0.8%, limiting stable large-scale liquidity.",
      "peer_comparison": "Retail dominance exceeds typical peer compositions."
    },
    "price_moving": {
      "overall": "20.2% of trades move the price, indicating a healthy level of trade impact for price formation.",
      "interpretation": "Price-moving trades provide good signal for price discovery.",
      "asymmetry": "No evident asymmetry between buys and sells driving price."
    },
    "short_selling": {
      "overall": "Short interest is low, averaging 0.4% of volume, limiting downward pressure.",
      "level": "Low short ratios reduce volatility from short selling.",
      "correlation": "Strong negative correlation with returns shows shorts increase on price declines.",
      "trend": "Stable short interest suggests limited speculative activity."
    },
    "execution": {
      "overall": "Execution costs remain moderate with spread near 2.0% and satisfactory fill rates for large orders.",
      "concern": "Larger order executions show decreasing fill rates as order size exceeds 1M shares.",
      "peer_context": "Execution profile is favorable compared to similar small cap peers."
    },
    "intraday": {
      "overall": "92.4% of trading occurs in continuous sessions with auctions only 7.6%.",
      "hhi_interpretation": "HHI of 0.19 indicates diversified trading participation reducing concentration risk.",
      "best_times": "Highest trading intensity during regular continuous market hours.",
      "peer_ranking": "Intraday activity patterns align well with peer norms for liquidity."
    },
    "ofi": {
      "overall": "Order flow imbalance is low and balanced, indicating no directional bias in supply/demand.",
      "daily_vs_intraday": "Order flow metrics moderately correlate with daily price changes.",
      "l2_signal": "Short-term order book signals support transient price moves.",
      "day_breakdown": "No unusual clustering of aggressive buying or selling days."
    },
    "index": {
      "overall": "Index visibility is stable with no major barriers to eligibility.",
      "recommendation": "Maintain compliance to support inclusion and investor access."
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
        "5DD",
        "BN2"
      ],
      "scores": [
        82.79569892473118,
        81.54121863799283,
        51.61290322580645,
        39.96415770609319,
        34.76702508960574,
        11.11111111111111,
        5.913978494623656,
        71.14695340501792,
        78.31541218637993
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
        626308.25,
        714690.75,
        32175.25,
        4050.0,
        3071.25,
        11.8,
        0.0,
        363849.0,
        525738.0
      ],
      "total": 558
    },
    "market_comparison": {
      "sector_name": "Software - Application",
      "sector_count": 8,
      "market_count": 558,
      "company": {
        "volatility": 0.020000000000000018,
        "adv": 626308.25,
        "spread_pct": 0.02144756100097971,
        "turnover_ratio": 0.004522734855442895,
        "amihud": 3.236552327364325e-08,
        "trades": 208.0
      },
      "market": {
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.00860149385346916,
          "median": 0.006204181611407511,
          "min": 0.0,
          "max": 0.10000000000000009,
          "p5": 0.0,
          "p95": 0.02941176470588236,
          "count": 558
        },
        "adv": {
          "direction": "higher_is_better",
          "mean": 2830681.9022693816,
          "median": 15867.125,
          "min": 0.0,
          "max": 285120680.0,
          "p5": 0.0,
          "p95": 10899679.92499999,
          "count": 558
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.09387684172560291,
          "median": 0.023303149449938394,
          "min": 0.00026031378750760483,
          "max": 1.3043478260869563,
          "p5": 0.0033907546219511834,
          "p95": 0.48379237545269294,
          "count": 557
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.004850471757274334,
          "median": 0.0003147095421619591,
          "min": 0.0,
          "max": 1.433656317975084,
          "p5": 0.0,
          "p95": 0.011246539136943769,
          "count": 551
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 0.00017082449123951798,
          "median": 1.3727750131147213e-07,
          "min": 0.0,
          "max": 0.041666666666666664,
          "p5": 0.0,
          "p95": 6.169692285111282e-05,
          "count": 552
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 396.1810035842294,
          "median": 8.25,
          "min": 0.0,
          "max": 11360.5,
          "p5": 0.0,
          "p95": 2049.1499999999983,
          "count": 558
        }
      },
      "sector": {
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.007820572046192659,
          "median": 0.007571760236386671,
          "min": 0.0,
          "max": 0.020000000000000018,
          "p5": 0.0,
          "p95": 0.01827638190954777,
          "count": 8
        },
        "adv": {
          "direction": "higher_is_better",
          "mean": 2682145.725,
          "median": 18112.625,
          "min": 0.0,
          "max": 20076858.5,
          "p5": 4.130000000000001,
          "p95": 13300099.78749999,
          "count": 8
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.14526228364609176,
          "median": 0.024406970212971394,
          "min": 0.0012017967506868497,
          "max": 0.6666666666666666,
          "p5": 0.003490909971284096,
          "p95": 0.5657727001640076,
          "count": 8
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.003746706341539335,
          "median": 0.00019407405618969992,
          "min": 0.0,
          "max": 0.0127542632696768,
          "p5": 4.477161669151291e-07,
          "p95": 0.012583003232507856,
          "count": 8
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 0.00023614121624514854,
          "median": 1.1291978320453417e-07,
          "min": 0.0,
          "max": 0.0018867924528301833,
          "p5": 1.535571291480095e-10,
          "p95": 0.0012269114583647134,
          "count": 8
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 605.5625,
          "median": 11.5,
          "min": 0.0,
          "max": 4432.0,
          "p5": 0.35000000000000003,
          "p95": 2953.5999999999976,
          "count": 8
        }
      },
      "peers": {
        "adv": {
          "direction": "higher_is_better",
          "mean": 205448.25625,
          "median": 18112.625,
          "min": 0.0,
          "max": 714690.75,
          "p5": 4.130000000000001,
          "p95": 648557.2874999999,
          "count": 8
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 75.25,
          "median": 11.5,
          "min": 0.0,
          "max": 312.5,
          "p5": 0.35000000000000003,
          "p95": 265.7749999999999,
          "count": 8
        },
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.006985201270820154,
          "median": 0.008242253182800863,
          "min": 0.0,
          "max": 0.015075376884422176,
          "p5": 0.0,
          "p95": 0.01411998262919542,
          "count": 8
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.14410387775075706,
          "median": 0.019529450660074735,
          "min": 0.006052993605603467,
          "max": 0.6666666666666666,
          "p5": 0.006499636787827107,
          "p95": 0.5657727001640076,
          "count": 8
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 0.0002361439681680017,
          "median": 1.1489543096575816e-07,
          "min": 0.0,
          "max": 0.0018867924528301833,
          "p5": 6.475987685261795e-09,
          "p95": 0.0012269114583647134,
          "count": 8
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.0021351105936214484,
          "median": 0.00019407405618969992,
          "min": 0.0,
          "max": 0.0127542632696768,
          "p5": 4.477161669151291e-07,
          "p95": 0.00902948356310704,
          "count": 8
        }
      }
    },
    "returns": [
      {
        "horizon": "1M",
        "stock": -0.12280701754385959,
        "market": 0.028179587008979157,
        "sector": -0.026139939734661555,
        "peers": -0.002628314638406737
      },
      {
        "horizon": "3M",
        "stock": -0.12280701754385959,
        "market": 0.028179587008979157,
        "sector": -0.026139939734661555,
        "peers": -0.002628314638406737
      },
      {
        "horizon": "6M",
        "stock": -0.12280701754385959,
        "market": 0.028179587008979157,
        "sector": -0.026139939734661555,
        "peers": -0.002628314638406737
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
      "share_market": 0.12503498553946285,
      "share_sector": 0.19552724760991846,
      "share_idio": 0.6794377668506187,
      "beta_market": -0.8089187103739899,
      "beta_sector": 5.6064961162447755,
      "r_squared": 0.22993070535415516,
      "lead_lag": {
        "lags": [
          -5,
          -4,
          -3,
          -2,
          -1,
          0,
          1,
          2,
          3,
          4,
          5
        ],
        "corr_market": [
          0.12028557937318606,
          0.19435912886545909,
          -0.13539770271865018,
          -0.10262033825974361,
          0.08025803783373041,
          0.018459641016772194,
          -0.30238045064191976,
          0.265468814611466,
          -0.151154106159956,
          -0.4414991238447154,
          0.573019970190628
        ],
        "corr_sector": [
          -0.2603484773202062,
          0.09168754773046978,
          0.011694066703481266,
          0.19859066727112065,
          -0.17118466093669465,
          0.4585655575901818,
          0.1621618517146872,
          0.09952448130194616,
          -0.13766746028271606,
          0.11077609209465317,
          0.2317006092720929
        ],
        "best": {
          "market": 5,
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
          "valid": true,
          "period_label": "2025-12-25 to 2026-02-26",
          "shares": {
            "share_market": 0.12503498553946285,
            "share_sector": 0.19552724760991846,
            "share_company": 0.6794377668506187
          },
          "regression": {
            "r_squared": 0.22993070535415516
          }
        }
      },
      "rolling": {
        "ordered": [
          "2025-12-25 to 2026-02-26"
        ],
        "market": [
          12.5
        ],
        "sector": [
          19.6
        ],
        "idio": [
          67.9
        ]
      },
      "regime": {
        "valid": true,
        "regime_method": "liquidity_score_markov",
        "n_regimes": 2,
        "labels": [
          "Low Liquidity",
          "Medium Liquidity"
        ],
        "pct_time": [
          0.16666666666666666,
          0.8333333333333334
        ],
        "current_regime": 1,
        "regimes": [
          {
            "id": 0,
            "label": "Low Liquidity",
            "liquidity_score": 10.416666666666668,
            "pct_time": 0.16666666666666666
          },
          {
            "id": 1,
            "label": "Medium Liquidity",
            "liquidity_score": 60.41666666666667,
            "pct_time": 0.8333333333333334
          }
        ],
        "transitions": [
          [
            0.7501373069452079,
            0.2498626930547921
          ],
          [
            0.05001760710623382,
            0.9499823928937662
          ]
        ]
      }
    },
    "order_book": {
      "bids": [
        {
          "level": 1,
          "price": 0.25,
          "quantity": 368800.0,
          "value": 92200.0
        },
        {
          "level": 2,
          "price": 0.245,
          "quantity": 410000.0,
          "value": 100450.0
        },
        {
          "level": 3,
          "price": 0.24,
          "quantity": 832200.0,
          "value": 199728.0
        },
        {
          "level": 4,
          "price": 0.235,
          "quantity": 166500.0,
          "value": 39127.5
        },
        {
          "level": 5,
          "price": 0.23,
          "quantity": 68500.0,
          "value": 15755.0
        },
        {
          "level": 6,
          "price": 0.225,
          "quantity": 30000.0,
          "value": 6750.0
        },
        {
          "level": 7,
          "price": 0.22,
          "quantity": 565400.0,
          "value": 124388.0
        },
        {
          "level": 8,
          "price": 0.215,
          "quantity": 85000.0,
          "value": 18275.0
        },
        {
          "level": 9,
          "price": 0.21,
          "quantity": 51000.0,
          "value": 10710.0
        },
        {
          "level": 10,
          "price": 0.2,
          "quantity": 50000.0,
          "value": 10000.0
        }
      ],
      "asks": [
        {
          "level": 1,
          "price": 0.255,
          "quantity": 422600.0,
          "value": 107763.0
        },
        {
          "level": 2,
          "price": 0.26,
          "quantity": 741100.0,
          "value": 192686.0
        },
        {
          "level": 3,
          "price": 0.265,
          "quantity": 959200.0,
          "value": 254188.0
        },
        {
          "level": 4,
          "price": 0.27,
          "quantity": 835500.0,
          "value": 225585.00000000003
        },
        {
          "level": 5,
          "price": 0.275,
          "quantity": 849500.0,
          "value": 233612.50000000003
        },
        {
          "level": 6,
          "price": 0.28,
          "quantity": 579700.0,
          "value": 162316.00000000003
        },
        {
          "level": 7,
          "price": 0.285,
          "quantity": 674000.0,
          "value": 192089.99999999997
        },
        {
          "level": 8,
          "price": 0.29,
          "quantity": 376500.0,
          "value": 109184.99999999999
        },
        {
          "level": 9,
          "price": 0.295,
          "quantity": 280000.0,
          "value": 82600.0
        },
        {
          "level": 10,
          "price": 0.3,
          "quantity": 392600.0,
          "value": 117780.0
        }
      ]
    },
    "peer_capacity": {
      "bx_ticket_pct_adv_50k": 8.3,
      "peers": [
        {
          "ticker": "ITS",
          "pct": 98.3
        },
        {
          "ticker": "5DD",
          "pct": 207.8
        },
        {
          "ticker": "BN2",
          "pct": 245.4
        },
        {
          "ticker": "LVR",
          "pct": 3416.6
        },
        {
          "ticker": "NXR",
          "pct": 53995.7
        },
        {
          "ticker": "U77",
          "pct": 54555.4
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
      "valid": true,
      "currency": "SGD",
      "n_trades": 3026,
      "first_trade_date": "2026-01-27",
      "last_trade_date": "2026-02-25",
      "period_days": 29,
      "thresholds": {
        "retail_max": 13500.0,
        "instit_min": 67500.0
      },
      "composition": {
        "retail_pct": 0.8995373430270985,
        "mixed_pct": 0.09286186384666226,
        "instit_pct": 0.00760079312623926,
        "retail_qty_pct": 0.36643188535937443,
        "mixed_qty_pct": 0.5044633391950711,
        "instit_qty_pct": 0.12910477544555443,
        "retail_notional_pct": 0.36404195193955874,
        "mixed_notional_pct": 0.5053537532312784,
        "instit_notional_pct": 0.13060429482916286
      },
      "trade_size": {
        "avg": 5342.688697951091,
        "median": 845.75
      },
      "over_time": {
        "valid": true,
        "periods": [
          {
            "month": "2026-02",
            "n_trades": 1961,
            "retail_pct": 0.903110657827639,
            "mixed_pct": 0.0912799592044875,
            "instit_pct": 0.0056093829678735335,
            "avg_trade_size": 5282.70907700153,
            "retail_qty_pct": 0.40413626793897806,
            "mixed_qty_pct": 0.49252532769396706,
            "instit_qty_pct": 0.10333840436705492,
            "total_quantity": 42463400.0
          },
          {
            "month": "2026-01",
            "n_trades": 2477,
            "retail_pct": 0.8389180460234155,
            "mixed_pct": 0.14937424303593055,
            "instit_pct": 0.011707710940654016,
            "avg_trade_size": 7226.47779572063,
            "retail_qty_pct": 0.27654494081056014,
            "mixed_qty_pct": 0.5780789376207284,
            "instit_qty_pct": 0.1453761215687115,
            "total_quantity": 65332600.0
          }
        ]
      },
      "peer_comparison": [
        {
          "ticker": "TKU",
          "currency": "SGD",
          "is_target": true,
          "retail_pct": 0.8995373430270985,
          "mixed_pct": 0.09286186384666226,
          "instit_pct": 0.00760079312623926,
          "retail_qty_pct": 0.36643188535937443,
          "mixed_qty_pct": 0.5044633391950711,
          "instit_qty_pct": 0.12910477544555443,
          "retail_notional_pct": 0.36404195193955874,
          "mixed_notional_pct": 0.5053537532312784,
          "instit_notional_pct": 0.13060429482916286,
          "avg_trade_size": 5342.688697951091,
          "thresholds": {
            "retail_max": 13500.0,
            "instit_min": 67500.0
          }
        },
        {
          "ticker": "532",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 1.0,
          "mixed_pct": 0.0,
          "instit_pct": 0.0,
          "retail_qty_pct": 1.0,
          "mixed_qty_pct": 0.0,
          "instit_qty_pct": 0.0,
          "retail_notional_pct": 1.0,
          "mixed_notional_pct": 0.0,
          "instit_notional_pct": 0.0,
          "avg_trade_size": 410.2375,
          "thresholds": {
            "retail_max": 13500.0,
            "instit_min": 67500.0
          }
        },
        {
          "ticker": "KUX",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 1.0,
          "mixed_pct": 0.0,
          "instit_pct": 0.0,
          "retail_qty_pct": 1.0,
          "mixed_qty_pct": 0.0,
          "instit_qty_pct": 0.0,
          "retail_notional_pct": 1.0,
          "mixed_notional_pct": 0.0,
          "instit_notional_pct": 0.0,
          "avg_trade_size": 16.75,
          "thresholds": {
            "retail_max": 13500.0,
            "instit_min": 67500.0
          }
        },
        {
          "ticker": "U77",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.9727272727272728,
          "mixed_pct": 0.02727272727272727,
          "instit_pct": 0.0,
          "retail_qty_pct": 0.7670640953828919,
          "mixed_qty_pct": 0.2329359046171081,
          "instit_qty_pct": 0.0,
          "retail_notional_pct": 0.7618102109078695,
          "mixed_notional_pct": 0.23818978909213048,
          "instit_notional_pct": 0.0,
          "avg_trade_size": 2598.2909090909093,
          "thresholds": {
            "retail_max": 13500.0,
            "instit_min": 67500.0
          }
        },
        {
          "ticker": "BN2",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.9583532790809,
          "mixed_pct": 0.03709909047391096,
          "instit_pct": 0.004547630445189086,
          "retail_qty_pct": 0.3973417890076234,
          "mixed_qty_pct": 0.3758697027197976,
          "instit_qty_pct": 0.226788508272579,
          "retail_notional_pct": 0.3968234767805613,
          "mixed_notional_pct": 0.37579914235666856,
          "instit_notional_pct": 0.22737738086277015,
          "avg_trade_size": 2548.563786500718,
          "thresholds": {
            "retail_max": 13500.0,
            "instit_min": 67500.0
          }
        },
        {
          "ticker": "LVR",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.9426229508196722,
          "mixed_pct": 0.05737704918032787,
          "instit_pct": 0.0,
          "retail_qty_pct": 0.6578122117690463,
          "mixed_qty_pct": 0.3421877882309537,
          "instit_qty_pct": 0.0,
          "retail_notional_pct": 0.6566356203796991,
          "mixed_notional_pct": 0.34336437962030086,
          "instit_notional_pct": 0.0,
          "avg_trade_size": 4159.354508196721,
          "thresholds": {
            "retail_max": 13500.0,
            "instit_min": 67500.0
          }
        },
        {
          "ticker": "5DD",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.8808848553601815,
          "mixed_pct": 0.11230856494611458,
          "instit_pct": 0.006806579693703914,
          "retail_qty_pct": 0.4080155160594559,
          "mixed_qty_pct": 0.4786737781939173,
          "instit_qty_pct": 0.11331070574662676,
          "retail_notional_pct": 0.406951779205476,
          "mixed_notional_pct": 0.47905389984788643,
          "instit_notional_pct": 0.11399432094663763,
          "avg_trade_size": 5698.863868406126,
          "thresholds": {
            "retail_max": 13500.0,
            "instit_min": 67500.0
          }
        },
        {
          "ticker": "ITS",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.8639421878893596,
          "mixed_pct": 0.12085721405432345,
          "instit_pct": 0.01520059805631697,
          "retail_qty_pct": 0.3035775785763716,
          "mixed_qty_pct": 0.47357613016399247,
          "instit_qty_pct": 0.22284629125963595,
          "retail_notional_pct": 0.3015049667513963,
          "mixed_notional_pct": 0.4714913719323275,
          "instit_notional_pct": 0.2270036613162762,
          "avg_trade_size": 7224.868676800399,
          "thresholds": {
            "retail_max": 13500.0,
            "instit_min": 67500.0
          }
        },
        {
          "ticker": "NXR",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.8214285714285714,
          "mixed_pct": 0.17857142857142858,
          "instit_pct": 0.0,
          "retail_qty_pct": 0.3531711555169418,
          "mixed_qty_pct": 0.6468288444830582,
          "instit_qty_pct": 0.0,
          "retail_notional_pct": 0.35417263586338016,
          "mixed_notional_pct": 0.6458273641366199,
          "instit_notional_pct": 0.0,
          "avg_trade_size": 6668.660714285715,
          "thresholds": {
            "retail_max": 13500.0,
            "instit_min": 67500.0
          }
        }
      ],
      "currency_thresholds": {
        "SGD": {
          "retail_max": 13500.0,
          "instit_min": 67500.0
        }
      },
      "classification_legend": {
        "retail_heavy": ">70% retail",
        "institutional": ">20% institutional",
        "mixed": "otherwise"
      }
    },
    "price_moving_trades": {
      "total_trades": 4437,
      "price_moving_trades": 898,
      "pct_price_moving": 20.238900157764256,
      "all_movers": {
        "count": 898,
        "avg_size": 7196.827951002228,
        "median_size": 1000.0,
        "retail_count": 749,
        "mixed_count": 137,
        "institutional_count": 12,
        "retail_pct": 83.40757238307349,
        "mixed_pct": 15.256124721603564,
        "instit_pct": 1.3363028953229399
      },
      "positive_movers": {
        "count": 448,
        "avg_size": 5420.411830357143,
        "median_size": 208.0,
        "retail_count": 392,
        "mixed_count": 53,
        "institutional_count": 3,
        "retail_pct": 87.5,
        "mixed_pct": 11.830357142857142,
        "instit_pct": 0.6696428571428571
      },
      "negative_movers": {
        "count": 450,
        "avg_size": 8965.34888888889,
        "median_size": 2400.0,
        "retail_count": 357,
        "mixed_count": 84,
        "institutional_count": 9,
        "retail_pct": 79.33333333333333,
        "mixed_pct": 18.666666666666668,
        "instit_pct": 2.0
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
        "n_days_short_data": 24,
        "window_days": 182
      },
      "periods": {
        "1M": {
          "stats": {
            "valid": true,
            "avg_short_ratio": 0.003207329923319448,
            "max_short_ratio": 0.021019119182513736,
            "interpretation": "Low short interest"
          }
        },
        "3M": {
          "stats": {
            "valid": true,
            "avg_short_ratio": 0.0040803738187463285,
            "max_short_ratio": 0.027351428548504857,
            "interpretation": "Low short interest"
          }
        },
        "6M": {
          "stats": {
            "valid": true,
            "avg_short_ratio": 0.0040803738187463285,
            "max_short_ratio": 0.027351428548504857,
            "interpretation": "Low short interest"
          }
        }
      },
      "correlation": {
        "valid": true,
        "correlation": -0.35602558707021453,
        "interpretation": "Strong negative - high shorts coincide with price drops"
      },
      "peaks": [],
      "short_interest_change": {
        "valid": true,
        "monthly_data": [
          {
            "month": "2026-02",
            "avg_short_ratio": 0.0020261586756208623
          },
          {
            "month": "2026-01",
            "avg_short_ratio": 0.009069182023479604
          }
        ],
        "mom_change": [
          {
            "month": "2026-02",
            "avg_short_ratio": 0.0020261586756208623,
            "change_pct": null
          },
          {
            "month": "2026-01",
            "avg_short_ratio": 0.009069182023479604,
            "change_pct": 347.60472773439596
          }
        ],
        "interpretation": "Shorts covering significantly (-78% MoM)"
      },
      "short_series": {
        "valid": true,
        "rows": [
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
            "return": -0.037735849056603765
          },
          {
            "date": "2026-01-30",
            "short_ratio": 0.0030064912880081993,
            "short_vol": 44000,
            "total_vol": 14635000,
            "close": 0.265,
            "return": 0.03921568627450989
          },
          {
            "date": "2026-01-29",
            "short_ratio": 0.012090950356951265,
            "short_vol": 29300,
            "total_vol": 2423300,
            "close": 0.255,
            "return": 0.020000000000000018
          },
          {
            "date": "2026-01-28",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 2401500,
            "close": 0.25,
            "return": -0.03846153846153855
          },
          {
            "date": "2026-01-27",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 3285000,
            "close": 0.26,
            "return": 0.0
          },
          {
            "date": "2026-01-26",
            "short_ratio": 0.021019119182513736,
            "short_vol": 122800,
            "total_vol": 5842300,
            "close": 0.26,
            "return": -0.018867924528301883
          },
          {
            "date": "2026-01-23",
            "short_ratio": 0.027351428548504857,
            "short_vol": 340900,
            "total_vol": 12463700,
            "close": 0.265,
            "return": -0.07017543859649111
          },
          {
            "date": "2026-01-22",
            "short_ratio": 1.628478837917501e-05,
            "short_vol": 500,
            "total_vol": 30703500,
            "close": 0.285,
            "return": null
          }
        ]
      },
      "peer_comparison": [
        {
          "ticker": "TKU",
          "avg_short_ratio": 0.0040803738187463285,
          "max_short_ratio": 0.027351428548504857,
          "is_target": true
        },
        {
          "ticker": "NXR",
          "avg_short_ratio": 8.65901786755033e-05,
          "max_short_ratio": 0.03229813664596273,
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
          "avg_short_ratio": 0.0035971775652326424,
          "max_short_ratio": 0.1385606874328679,
          "is_target": false
        },
        {
          "ticker": "5DD",
          "avg_short_ratio": 0.004208011395139728,
          "max_short_ratio": 0.36517719568567025,
          "is_target": false
        },
        {
          "ticker": "BN2",
          "avg_short_ratio": 0.01964104089024786,
          "max_short_ratio": 0.2235388632255473,
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
          "opening": 0.01707196742369423,
          "continuous": 0.9418104718608639,
          "closing": 0.03223167178672465,
          "auctions": 0.05818952813913605,
          "other": 0.0
        },
        "3M": {
          "opening": 0.041800269952270784,
          "continuous": 0.9242712207681976,
          "closing": 0.026854840114992135,
          "auctions": 0.07572877923180235,
          "other": 0.0
        },
        "6M": {
          "opening": 0.041800269952270784,
          "continuous": 0.9242712207681976,
          "closing": 0.026854840114992135,
          "auctions": 0.07572877923180235,
          "other": 0.0
        }
      },
      "hhi": {
        "1M": 0.19603095899124395,
        "3M": 0.1899378454191701,
        "6M": 0.1899378454191701
      },
      "profile_buckets": [
        {
          "time": "08:30",
          "avg_share": 0.0126
        },
        {
          "time": "09:00",
          "avg_share": 0.154
        },
        {
          "time": "09:30",
          "avg_share": 0.1112
        },
        {
          "time": "10:00",
          "avg_share": 0.0503
        },
        {
          "time": "10:30",
          "avg_share": 0.0378
        },
        {
          "time": "11:00",
          "avg_share": 0.0389
        },
        {
          "time": "11:30",
          "avg_share": 0.057
        },
        {
          "time": "12:00",
          "avg_share": 0.0022
        },
        {
          "time": "12:30",
          "avg_share": 0.0153
        },
        {
          "time": "13:00",
          "avg_share": 0.1004
        },
        {
          "time": "13:30",
          "avg_share": 0.0536
        },
        {
          "time": "14:00",
          "avg_share": 0.0977
        },
        {
          "time": "14:30",
          "avg_share": 0.0423
        },
        {
          "time": "15:00",
          "avg_share": 0.0356
        },
        {
          "time": "15:30",
          "avg_share": 0.0415
        },
        {
          "time": "16:00",
          "avg_share": 0.0415
        },
        {
          "time": "16:30",
          "avg_share": 0.0778
        },
        {
          "time": "17:00",
          "avg_share": 0.0303
        }
      ],
      "peers_hhi_rows": [
        {
          "ticker": "TKU",
          "auctions_pct": 7.5728779231802354,
          "hhi": 0.1899378454191701,
          "interp": {
            "text": "Moderate",
            "cls": "bg-amber-500/20 text-amber-400",
            "you": true
          }
        },
        {
          "ticker": "ITS",
          "auctions_pct": 6.086839809330271,
          "hhi": 0.2533180364906859,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "LVR",
          "auctions_pct": 2.7070544854781478,
          "hhi": 0.34079774016160697,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "NXR",
          "auctions_pct": 2.5400417114572265,
          "hhi": 0.6539083068595315,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "U77",
          "auctions_pct": 8.32341889359198,
          "hhi": 0.5058677028340526,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "532",
          "auctions_pct": 7.898867032772322,
          "hhi": 0.7852268587512621,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "KUX",
          "auctions_pct": 2.951038654326811,
          "hhi": 0.8010133190718127,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "5DD",
          "auctions_pct": 6.83186761110021,
          "hhi": 0.3722255674890539,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "BN2",
          "auctions_pct": 5.49817310677428,
          "hhi": 0.23334190750773526,
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
