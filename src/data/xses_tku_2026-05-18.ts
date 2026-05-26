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
      "marketCap": 134006694.925,
      "sector": "Software - Application",
      "industry": "Technology"
    },
    {
      "ticker": "KUX",
      "name": "OIO",
      "marketCap": 9857201.58,
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
      "ticker": "U77",
      "name": "Sarine Tech",
      "marketCap": 67406733.30600001,
      "sector": "Software - Application",
      "industry": "Technology"
    },
    {
      "ticker": "J03",
      "name": "Jadason",
      "marketCap": 28414665.0,
      "sector": "Electronic Components",
      "industry": "Technology"
    },
    {
      "ticker": "NXR",
      "name": "iWOW Tech",
      "marketCap": 108471542.4,
      "sector": "Software - Application",
      "industry": "Technology"
    },
    {
      "ticker": "42F",
      "name": "Totm Tech",
      "marketCap": 39487256.172,
      "sector": "Software - Infrastructure",
      "industry": "Technology"
    },
    {
      "ticker": "LVR",
      "name": "17LIVE GROUP",
      "marketCap": 155939867.26,
      "sector": "Software - Application",
      "industry": "Technology"
    },
    {
      "ticker": "ITS",
      "name": "Info-Tech",
      "marketCap": 243810000.0,
      "sector": "Software - Application",
      "industry": "Technology"
    }
  ]
};

export const REPORT_DATA: ReportData = {
  "meta": {
    "market": "XSES",
    "currency": "SGD",
    "ticker": "TKU",
    "company": "Toku Ltd",
    "asof_date": "2026-05-18",
    "industry": "Technology",
    "sector": "Software - Application",
    "market_cap_display": "134.0M",
    "market_cap_category": "small",
    "universe_total": 556,
    "peers_count": 8,
    "page_title_template": "Liquidity Analysis Report — {market}/{ticker} — {asof}"
  },
  "q01": {
    "primary_liquidity_period": "3m",
    "periods": {
      "1d": {
        "label": "1D",
        "window_days": 1,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 1,
          "score_pca": 63.12949640287769,
          "score_pca_percentile": 63.12949640287769,
          "rank_pca": 206,
          "total": 556,
          "adv_notional_sgd": 163268.0,
          "adv_volume_shares": 666400.0,
          "free_float_shares": null,
          "turnover_ratio": 0.0011686281800147903,
          "votes": 27.0,
          "trades": 27.0,
          "spread_pct": 0.023452575330265714,
          "spread_ticks": 1.144927536231884,
          "amihud": 1.2760206123265588e-07,
          "volatility": 0.19657631614338103
        },
        "pca": {
          "valid": true,
          "window_days": 1,
          "variance_explained": 0.5092256596214683,
          "loadings": {
            "log_adv": 0.5582011022988136,
            "log_trades": 0.510854396026232,
            "log_turnover": 0.5171603184941566,
            "neg_spread": 0.3353055668670066,
            "neg_amihud": 0.03705069065280696,
            "neg_vol": -0.21489984545883706
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
          "peer_median_adv": 4659.35,
          "peer_median_score_pca": 45.05395683453238,
          "peer_median_trades": 4.5,
          "peer_median_volatility": 0.1019022726531778,
          "peer_median_spread_pct": 0.04353855171194125,
          "peer_median_spread_ticks": 1.9607576132706117,
          "peer_median_amihud": 1.1764675623345767e-06,
          "peer_median_turnover_ratio": 0.0004946405353871065,
          "target_vs_peer": {
            "score_pca_delta": 18.08,
            "adv_delta_pct": 3404.1,
            "trades_delta_pct": 500.0,
            "volatility_delta_pct": -92.91,
            "spread_pct_delta_pct": 46.13,
            "spread_ticks_delta_pct": -41.61,
            "amihud_delta_pct": 89.15,
            "turnover_ratio_delta_pct": 136.26
          }
        },
        "peer_liquidity": [
          {
            "ticker": "TKU",
            "score_pca": 63.12949640287769,
            "rank_pca": 206,
            "adv": 163268.0,
            "trades": 27.0,
            "volatility": 0.19657631614338103,
            "spread_pct": 0.023452575330265714,
            "spread_ticks": 1.144927536231884,
            "amihud": 1.2760206123265588e-07,
            "turnover_ratio": 0.0011686281800147903,
            "is_target": true
          },
          {
            "ticker": "KUX",
            "score_pca": 78.59712230215827,
            "rank_pca": 120,
            "adv": 3230.0000000000005,
            "trades": 6.0,
            "volatility": 5.992912041531934,
            "spread_pct": 0.4775086505190309,
            "spread_ticks": 21.083333333333332,
            "amihud": 7.567939456484344e-05,
            "turnover_ratio": 0.0009239306948887619,
            "is_target": false
          },
          {
            "ticker": "532",
            "score_pca": 1.8884892086330936,
            "rank_pca": 545,
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
            "ticker": "U77",
            "score_pca": 35.61151079136691,
            "rank_pca": 359,
            "adv": 4156.7,
            "trades": 3.0,
            "volatility": 0.09728261517626381,
            "spread_pct": 0.013081395348837219,
            "spread_ticks": 2.5714285714285716,
            "amihud": 2.467440579404388e-06,
            "turnover_ratio": 6.535037588545113e-05,
            "is_target": false
          },
          {
            "ticker": "J03",
            "score_pca": 82.55395683453237,
            "rank_pca": 98,
            "adv": 356335.2,
            "trades": 99.0,
            "volatility": 1.4149789738736007,
            "spread_pct": 0.038970411354342094,
            "spread_ticks": 1.0451612903225806,
            "amihud": 2.004533131404686e-07,
            "turnover_ratio": 0.023433661201689472,
            "is_target": false
          },
          {
            "ticker": "NXR",
            "score_pca": 54.49640287769785,
            "rank_pca": 254,
            "adv": 63120.0,
            "trades": 14.0,
            "volatility": 0.0,
            "spread_pct": 0.05882352941176477,
            "spread_ticks": 4.571428571428571,
            "amihud": 0.0,
            "turnover_ratio": 0.002808693979370445,
            "is_target": false
          },
          {
            "ticker": "42F",
            "score_pca": 22.841726618705035,
            "rank_pca": 430,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.0,
            "spread_pct": 0.038509627406851675,
            "spread_ticks": 1.0,
            "amihud": null,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "LVR",
            "score_pca": 33.45323741007194,
            "rank_pca": 371,
            "adv": 5162.0,
            "trades": 2.0,
            "volatility": 0.10652193013009179,
            "spread_pct": 0.0481066920695404,
            "spread_ticks": 8.416666666666666,
            "amihud": 2.152481811528685e-06,
            "turnover_ratio": 4.0095813231821614e-05,
            "is_target": false
          },
          {
            "ticker": "ITS",
            "score_pca": 77.15827338129496,
            "rank_pca": 128,
            "adv": 311521.0,
            "trades": 275.0,
            "volatility": 0.19966412623139113,
            "spread_pct": 0.007059772437887151,
            "spread_ticks": 1.3500866551126516,
            "amihud": 1.689503402575383e-08,
            "turnover_ratio": 0.004831261311697813,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Software - Application",
          "sector_count": 8,
          "market_count": 556,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.30692882216504064,
              "median": 0.16160214643757717,
              "min": 0.0,
              "max": 6.608197362010048,
              "p5": 0.0,
              "p95": 1.0340743174083704,
              "count": 556
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 3461268.2215019893,
              "median": 20145.6,
              "min": 0.0,
              "max": 278505612.0,
              "p5": 0.0,
              "p95": 16390810.0,
              "count": 556
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.10122083912945845,
              "median": 0.030010003334444844,
              "min": 0.0002805689255457263,
              "max": 1.7037037037037037,
              "p5": 0.003245852844055783,
              "p95": 0.43451335787784195,
              "count": 555
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.010647882909083506,
              "median": 0.0004904231261749721,
              "min": 0.0,
              "max": 4.02082921363127,
              "p5": 0.0,
              "p95": 0.015569356810609078,
              "count": 549
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 9.218625694870662e-05,
              "median": 5.3434788184499446e-08,
              "min": 0.0,
              "max": 0.02777777777777779,
              "p5": 0.0,
              "p95": 5.685618729096985e-05,
              "count": 417
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 590.9442446043165,
              "median": 10.0,
              "min": 0.0,
              "max": 11954.0,
              "p5": 0.0,
              "p95": 3927.0,
              "count": 556
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.8365982944567758,
              "median": 0.10317562828561827,
              "min": 0.0,
              "max": 5.992912041531934,
              "p5": 0.0,
              "p95": 3.9652752711767407,
              "count": 8
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 1018274.9624999999,
              "median": 34141.0,
              "min": 0.0,
              "max": 7595741.999999999,
              "p5": 1130.5000000000002,
              "p95": 5046264.649999996,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.1619965373526376,
              "median": 0.03577963369990306,
              "min": 0.0012730170371081137,
              "max": 0.6666666666666666,
              "p5": 0.003298381427380777,
              "p95": 0.600461361014994,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0018762174471754164,
              "median": 0.001046279437451776,
              "min": 0.0,
              "max": 0.005171779222314247,
              "p5": 1.4033534631137566e-05,
              "p95": 0.005052597953598495,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.1492017022257603e-05,
              "median": 1.2760206123265588e-07,
              "min": 0.0,
              "max": 7.567939456484344e-05,
              "p5": 9.153143049601154e-11,
              "p95": 5.371580836921167e-05,
              "count": 7
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 361.0,
              "median": 10.0,
              "min": 0.0,
              "max": 2561.0,
              "p5": 0.7000000000000001,
              "p95": 1760.8999999999987,
              "count": 8
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 92940.6125,
              "median": 4659.35,
              "min": 0.0,
              "max": 356335.2,
              "p5": 0.0,
              "p95": 340650.23,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 49.875,
              "median": 4.5,
              "min": 0.0,
              "max": 275.0,
              "p5": 0.0,
              "p95": 213.39999999999992,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.9764199608679102,
              "median": 0.1019022726531778,
              "min": 0.0,
              "max": 5.992912041531934,
              "p5": 0.0,
              "p95": 4.390635467851515,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.16859084315186507,
              "median": 0.04353855171194125,
              "min": 0.007059772437887151,
              "max": 0.6666666666666666,
              "p5": 0.009167340456719675,
              "p95": 0.600461361014994,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 5.129763136036546,
              "median": 1.9607576132706117,
              "min": 1.0,
              "max": 21.083333333333332,
              "p5": 1.0,
              "p95": 16.64999999999999,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.341944421715712e-05,
              "median": 1.1764675623345767e-06,
              "min": 0.0,
              "max": 7.567939456484344e-05,
              "p5": 4.223758506438457e-09,
              "p95": 5.7376406068483676e-05,
              "count": 6
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.00401287417209547,
              "median": 0.0004946405353871065,
              "min": 0.0,
              "max": 0.023433661201689472,
              "p5": 0.0,
              "p95": 0.01692282124019238,
              "count": 8
            }
          },
          "returns": {
            "window_days": 1,
            "n_obs": 1,
            "stock": 0.02083333333333326,
            "market": 0.001537341905700984,
            "sector": 0.0,
            "peers": 0.0,
            "vs_market": 0.019295991427632275,
            "vs_sector": 0.02083333333333326,
            "vs_peers": 0.02083333333333326
          }
        }
      },
      "1w": {
        "label": "1W",
        "window_days": 5,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 5,
          "score_pca": 75.35971223021582,
          "score_pca_percentile": 75.35971223021582,
          "rank_pca": 138,
          "total": 556,
          "adv_notional_sgd": 587239.5,
          "adv_volume_shares": 2302900.0,
          "free_float_shares": null,
          "turnover_ratio": 0.004038466140090127,
          "votes": 89.0,
          "trades": 89.0,
          "spread_pct": 0.020834715679118855,
          "spread_ticks": 1.0753424657534247,
          "amihud": 6.222341691182671e-08,
          "volatility": 0.5244342549357791
        },
        "pca": {
          "valid": true,
          "window_days": 5,
          "variance_explained": 0.5113356313857105,
          "loadings": {
            "log_adv": 0.5558989264476364,
            "log_trades": 0.5105372036989824,
            "log_turnover": 0.5120168052244324,
            "neg_spread": 0.39732714497663146,
            "neg_amihud": 0.09489626778535454,
            "neg_vol": 0.03595520277351378
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
          "peer_median_adv": 22443.5,
          "peer_median_score_pca": 44.60431654676259,
          "peer_median_trades": 3.5,
          "peer_median_volatility": 0.3606925169332368,
          "peer_median_spread_pct": 0.04272748235596535,
          "peer_median_spread_ticks": 1.6984265734265733,
          "peer_median_amihud": 1.7567918451127745e-07,
          "peer_median_turnover_ratio": 0.0008401197039585181,
          "target_vs_peer": {
            "score_pca_delta": 30.76,
            "adv_delta_pct": 2516.5,
            "trades_delta_pct": 2442.86,
            "volatility_delta_pct": -45.4,
            "spread_pct_delta_pct": 51.24,
            "spread_ticks_delta_pct": -36.69,
            "amihud_delta_pct": 64.58,
            "turnover_ratio_delta_pct": 380.7
          }
        },
        "peer_liquidity": [
          {
            "ticker": "TKU",
            "score_pca": 75.35971223021582,
            "rank_pca": 138,
            "adv": 587239.5,
            "trades": 89.0,
            "volatility": 0.5244342549357791,
            "spread_pct": 0.020834715679118855,
            "spread_ticks": 1.0753424657534247,
            "amihud": 6.222341691182671e-08,
            "turnover_ratio": 0.004038466140090127,
            "is_target": true
          },
          {
            "ticker": "KUX",
            "score_pca": 3.597122302158273,
            "rank_pca": 537,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 1.7353834030425535,
            "spread_pct": 0.5399999999999999,
            "spread_ticks": 23.142857142857142,
            "amihud": 7.567939456484344e-05,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "532",
            "score_pca": 2.5179856115107913,
            "rank_pca": 541,
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
            "ticker": "U77",
            "score_pca": 46.043165467625904,
            "rank_pca": 301,
            "adv": 9750.0,
            "trades": 6.0,
            "volatility": 0.23169506917018073,
            "spread_pct": 0.010562571756601616,
            "spread_ticks": 2.090909090909091,
            "amihud": 1.4010052492864747e-06,
            "turnover_ratio": 0.00015485871062903114,
            "is_target": false
          },
          {
            "ticker": "J03",
            "score_pca": 82.73381294964028,
            "rank_pca": 97,
            "adv": 732530.4,
            "trades": 421.0,
            "volatility": 2.819929816347621,
            "spread_pct": 0.033281927003010955,
            "spread_ticks": 1.0451612903225806,
            "amihud": 1.3388326150764117e-07,
            "turnover_ratio": 0.04473241963826574,
            "is_target": false
          },
          {
            "ticker": "NXR",
            "score_pca": 43.16546762589928,
            "rank_pca": 317,
            "adv": 35137.0,
            "trades": 1.0,
            "volatility": 0.21272514000637915,
            "spread_pct": 0.08016877637130797,
            "spread_ticks": 6.333333333333333,
            "amihud": 1.7567918451127745e-07,
            "turnover_ratio": 0.001525380697288005,
            "is_target": false
          },
          {
            "ticker": "42F",
            "score_pca": 65.28776978417267,
            "rank_pca": 194,
            "adv": 68715.0,
            "trades": 36.0,
            "volatility": 0.5258737584977429,
            "spread_pct": 0.03734827264239031,
            "spread_ticks": 1.0,
            "amihud": 0.0,
            "turnover_ratio": 0.0031034887151967674,
            "is_target": false
          },
          {
            "ticker": "LVR",
            "score_pca": 21.223021582733814,
            "rank_pca": 439,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.07888106377466128,
            "spread_pct": 0.0481066920695404,
            "spread_ticks": 8.416666666666666,
            "amihud": 1.0762409057643424e-06,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "ITS",
            "score_pca": 82.19424460431655,
            "rank_pca": 100,
            "adv": 636577.5,
            "trades": 340.0,
            "volatility": 0.48968996469629283,
            "spread_pct": 0.007059772437887151,
            "spread_ticks": 1.305944055944056,
            "amihud": 2.0217642926099477e-08,
            "turnover_ratio": 0.009669927990213068,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Software - Application",
          "sector_count": 8,
          "market_count": 556,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.5906992275483711,
              "median": 0.29102748566209724,
              "min": 0.0,
              "max": 8.694826047713663,
              "p5": 0.0,
              "p95": 2.0281728986623127,
              "count": 556
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 3785655.7608068017,
              "median": 22773.85,
              "min": 0.0,
              "max": 312928590.0,
              "p5": 0.0,
              "p95": 16329852.0,
              "count": 556
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.09761361015702467,
              "median": 0.027720152731427198,
              "min": 0.0002805689255457263,
              "max": 1.2847682119205297,
              "p5": 0.0032809060768037397,
              "p95": 0.4528026741936908,
              "count": 555
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.008645559084207697,
              "median": 0.00045522789020098866,
              "min": 0.0,
              "max": 2.7190033616768834,
              "p5": 0.0,
              "p95": 0.015908136293335113,
              "count": 549
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 0.0001967896538320582,
              "median": 8.093366383764557e-08,
              "min": 0.0,
              "max": 0.0548622164597138,
              "p5": 0.0,
              "p95": 7.250907854652191e-05,
              "count": 512
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 582.0251798561151,
              "median": 11.0,
              "min": 0.0,
              "max": 12219.0,
              "p5": 0.0,
              "p95": 3699.25,
              "count": 556
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.4180058221915042,
              "median": 0.22221010458827994,
              "min": 0.0,
              "max": 1.7353834030425535,
              "p5": 0.02493318866716549,
              "p95": 1.3115512012051818,
              "count": 8
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 1108055.75,
              "median": 22443.5,
              "min": 0.0,
              "max": 7595741.999999999,
              "p5": 0.0,
              "p95": 5160034.424999995,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.1718329238141603,
              "median": 0.03447070387432963,
              "min": 0.0012641955321598915,
              "max": 0.6666666666666666,
              "p5": 0.0032926474491644323,
              "p95": 0.6223333333333332,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.00257005159506681,
              "median": 0.0008401197039585181,
              "min": 0.0,
              "max": 0.009669927990213068,
              "p5": 0.0,
              "p95": 0.008095575921448479,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.1202152295573112e-05,
              "median": 1.7567918451127745e-07,
              "min": 3.051047683200384e-10,
              "max": 7.567939456484344e-05,
              "p5": 6.278866215653871e-09,
              "p95": 5.339587777017629e-05,
              "count": 7
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 237.875,
              "median": 3.5,
              "min": 0.0,
              "max": 1467.0,
              "p5": 0.0,
              "p95": 1072.5499999999993,
              "count": 8
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 185338.7375,
              "median": 22443.5,
              "min": 0.0,
              "max": 732530.4,
              "p5": 0.0,
              "p95": 698946.885,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 100.5,
              "median": 3.5,
              "min": 0.0,
              "max": 421.0,
              "p5": 0.0,
              "p95": 392.65,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.761772276941929,
              "median": 0.3606925169332368,
              "min": 0.0,
              "max": 2.819929816347621,
              "p5": 0.02760837232113145,
              "p95": 2.440338571690847,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.1778993348684256,
              "median": 0.04272748235596535,
              "min": 0.007059772437887151,
              "max": 0.6666666666666666,
              "p5": 0.008285752199437214,
              "p95": 0.6223333333333332,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 5.5418589475041085,
              "median": 1.6984265734265733,
              "min": 1.0,
              "max": 23.142857142857142,
              "p5": 1.0,
              "p95": 17.988690476190467,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.1212345829834183e-05,
              "median": 1.7567918451127745e-07,
              "min": 0.0,
              "max": 7.567939456484344e-05,
              "p5": 6.065292877829844e-09,
              "p95": 5.339587777017629e-05,
              "count": 7
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0073982594689490765,
              "median": 0.0008401197039585181,
              "min": 0.0,
              "max": 0.04473241963826574,
              "p5": 0.0,
              "p95": 0.032460547561447284,
              "count": 8
            }
          },
          "returns": {
            "window_days": 5,
            "n_obs": 5,
            "stock": -0.03921568627451,
            "market": 0.010920997791815212,
            "sector": -0.01005025125628145,
            "peers": -0.01005025125628145,
            "vs_market": -0.05013668406632521,
            "vs_sector": -0.029165435018228547,
            "vs_peers": -0.029165435018228547
          }
        }
      },
      "30d": {
        "label": "1M",
        "window_days": 21,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 21,
          "score_pca": 71.40287769784173,
          "score_pca_percentile": 71.40287769784173,
          "rank_pca": 160,
          "total": 556,
          "adv_notional_sgd": 235900.5,
          "adv_volume_shares": 925100.0,
          "free_float_shares": null,
          "turnover_ratio": 0.001622295812322453,
          "votes": 54.0,
          "trades": 54.0,
          "spread_pct": 0.023280423280423297,
          "spread_ticks": 1.1176470588235294,
          "amihud": 6.222341691182671e-08,
          "volatility": 0.5261870858827828
        },
        "pca": {
          "valid": true,
          "window_days": 21,
          "variance_explained": 0.52695748732042,
          "loadings": {
            "log_adv": 0.5394707757053168,
            "log_trades": 0.49002474960450093,
            "log_turnover": 0.4893552780672408,
            "neg_spread": 0.41458449888443005,
            "neg_amihud": 0.1705566312918615,
            "neg_vol": 0.16854841313344332
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
          "peer_median_adv": 5041.5,
          "peer_median_score_pca": 42.356115107913666,
          "peer_median_trades": 4.0,
          "peer_median_volatility": 0.46846141462273183,
          "peer_median_spread_pct": 0.041090594668610404,
          "peer_median_spread_ticks": 1.6926744001271254,
          "peer_median_amihud": 4.494791501733007e-07,
          "peer_median_turnover_ratio": 0.00013262633110332583,
          "target_vs_peer": {
            "score_pca_delta": 29.05,
            "adv_delta_pct": 4579.2,
            "trades_delta_pct": 1250.0,
            "volatility_delta_pct": -12.32,
            "spread_pct_delta_pct": 43.34,
            "spread_ticks_delta_pct": -33.97,
            "amihud_delta_pct": 86.16,
            "turnover_ratio_delta_pct": 1123.21
          }
        },
        "peer_liquidity": [
          {
            "ticker": "TKU",
            "score_pca": 71.40287769784173,
            "rank_pca": 160,
            "adv": 235900.5,
            "trades": 54.0,
            "volatility": 0.5261870858827828,
            "spread_pct": 0.023280423280423297,
            "spread_ticks": 1.1176470588235294,
            "amihud": 6.222341691182671e-08,
            "turnover_ratio": 0.001622295812322453,
            "is_target": true
          },
          {
            "ticker": "KUX",
            "score_pca": 2.158273381294964,
            "rank_pca": 545,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 3.9212009030237978,
            "spread_pct": 0.5660377358490567,
            "spread_ticks": 28.375,
            "amihud": 0.0003078817733990156,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "532",
            "score_pca": 3.41726618705036,
            "rank_pca": 538,
            "adv": 3.0,
            "trades": 1.0,
            "volatility": 3.9496835316263,
            "spread_pct": 0.6666666666666666,
            "spread_ticks": 1.0,
            "amihud": 0.0,
            "turnover_ratio": 3.252175546599001e-07,
            "is_target": false
          },
          {
            "ticker": "U77",
            "score_pca": 46.402877697841724,
            "rank_pca": 299,
            "adv": 5544.0,
            "trades": 5.0,
            "volatility": 0.22075152965447092,
            "spread_pct": 0.012983347445667525,
            "spread_ticks": 2.142857142857143,
            "amihud": 2.0615900012884913e-06,
            "turnover_ratio": 8.548200826722518e-05,
            "is_target": false
          },
          {
            "ticker": "J03",
            "score_pca": 69.06474820143885,
            "rank_pca": 173,
            "adv": 218727.69999999998,
            "trades": 79.0,
            "volatility": 1.6345210535100312,
            "spread_pct": 0.04444444444444448,
            "spread_ticks": 1.0655737704918034,
            "amihud": 1.4776559942962483e-07,
            "turnover_ratio": 0.017712716814542052,
            "is_target": false
          },
          {
            "ticker": "NXR",
            "score_pca": 37.94964028776979,
            "rank_pca": 346,
            "adv": 3686.5,
            "trades": 1.0,
            "volatility": 0.33640163037382187,
            "spread_pct": 0.040435458786936135,
            "spread_ticks": 3.0,
            "amihud": 1.2620526023524643e-06,
            "turnover_ratio": 0.00017977065393942648,
            "is_target": false
          },
          {
            "ticker": "42F",
            "score_pca": 72.48201438848922,
            "rank_pca": 154,
            "adv": 186482.5,
            "trades": 50.0,
            "volatility": 0.5589554454871407,
            "spread_pct": 0.037027894347074826,
            "spread_ticks": 1.0,
            "amihud": 7.338955501652384e-08,
            "turnover_ratio": 0.00872110815106983,
            "is_target": false
          },
          {
            "ticker": "LVR",
            "score_pca": 38.30935251798561,
            "rank_pca": 344,
            "adv": 4539.0,
            "trades": 3.0,
            "volatility": 0.377967383758323,
            "spread_pct": 0.041745730550284674,
            "spread_ticks": 7.333333333333333,
            "amihud": 7.511927009169765e-07,
            "turnover_ratio": 3.4565356234328974e-05,
            "is_target": false
          },
          {
            "ticker": "ITS",
            "score_pca": 84.35251798561151,
            "rank_pca": 88,
            "adv": 1027979.0000000001,
            "trades": 495.0,
            "volatility": 0.3753190577883277,
            "spread_pct": 0.009794436337312858,
            "spread_ticks": 1.2424916573971079,
            "amihud": 1.4590318448290466e-08,
            "turnover_ratio": 0.014581167263539233,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Software - Application",
          "sector_count": 8,
          "market_count": 556,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.6350136853887897,
              "median": 0.4041084218615929,
              "min": 0.0,
              "max": 5.196152422706633,
              "p5": 0.08286813140447317,
              "p95": 1.8918061115215097,
              "count": 556
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 3474763.6667374703,
              "median": 19174.95,
              "min": 0.0,
              "max": 306786193.7,
              "p5": 0.0,
              "p95": 14980107.0,
              "count": 556
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.09971918509145239,
              "median": 0.028544243577545224,
              "min": 0.0002805689255457263,
              "max": 1.4782608695652175,
              "p5": 0.003307186885310123,
              "p95": 0.4780169182996021,
              "count": 555
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.006595807646509541,
              "median": 0.0003703410631331521,
              "min": 0.0,
              "max": 2.0301891767187397,
              "p5": 0.0,
              "p95": 0.015185067826221033,
              "count": 549
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 6.81013991114424e-05,
              "median": 9.04291158260726e-08,
              "min": 0.0,
              "max": 0.010416666666666664,
              "p5": 0.0,
              "p95": 4.26483718303144e-05,
              "count": 546
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 520.7715827338129,
              "median": 8.5,
              "min": 0.0,
              "max": 12136.0,
              "p5": 0.0,
              "p95": 3031.5,
              "count": 556
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 1.2402933401544147,
              "median": 0.37664322077332535,
              "min": 0.21483559912749434,
              "max": 3.9496835316263,
              "p5": 0.21690617481193614,
              "p95": 3.9397146116154245,
              "count": 8
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 1424650.5,
              "median": 5041.5,
              "min": 0.0,
              "max": 10119552.0,
              "p5": 1.05,
              "p95": 6937501.4499999955,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.1702759993060635,
              "median": 0.03185794103367971,
              "min": 0.0012641955321598915,
              "max": 0.6666666666666666,
              "p5": 0.00424977981396343,
              "p95": 0.6314465408805031,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0029094764290889187,
              "median": 0.00013262633110332583,
              "min": 0.0,
              "max": 0.014581167263539233,
              "p5": 1.1382614413096504e-07,
              "p95": 0.011848030513599405,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 3.900423490483441e-05,
              "median": 4.0670805891440157e-07,
              "min": 0.0,
              "max": 0.0003078817733990156,
              "p5": 1.5987990958441108e-10,
              "p95": 0.00020084470920981093,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 381.25,
              "median": 4.0,
              "min": 0.0,
              "max": 2491.0,
              "p5": 0.35000000000000003,
              "p95": 1792.399999999999,
              "count": 8
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 180870.2125,
              "median": 5041.5,
              "min": 0.0,
              "max": 1027979.0000000001,
              "p5": 1.05,
              "p95": 744741.0449999997,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 79.25,
              "median": 4.0,
              "min": 0.0,
              "max": 495.0,
              "p5": 0.35000000000000003,
              "p95": 349.39999999999975,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 1.4218500669027767,
              "median": 0.46846141462273183,
              "min": 0.22075152965447092,
              "max": 3.9496835316263,
              "p5": 0.26122906490624376,
              "p95": 3.9397146116154245,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.1773919643034305,
              "median": 0.041090594668610404,
              "min": 0.009794436337312858,
              "max": 0.6666666666666666,
              "p5": 0.010910555225236991,
              "p95": 0.6314465408805031,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 5.644906988009923,
              "median": 1.6926744001271254,
              "min": 1.0,
              "max": 28.375,
              "p5": 1.0,
              "p95": 21.010416666666657,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 3.90240442720585e-05,
              "median": 4.494791501733007e-07,
              "min": 0.0,
              "max": 0.0003078817733990156,
              "p5": 5.106611456901663e-09,
              "p95": 0.00020084470920981093,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.005164391933143345,
              "median": 0.00013262633110332583,
              "min": 0.0,
              "max": 0.017712716814542052,
              "p5": 1.1382614413096504e-07,
              "p95": 0.016616674471691063,
              "count": 8
            }
          },
          "returns": {
            "window_days": 21,
            "n_obs": 21,
            "stock": -2.220446049250313e-16,
            "market": -0.002212550735976593,
            "sector": -0.032409910658899976,
            "peers": -0.026045672343968818,
            "vs_market": 0.0022125507359763708,
            "vs_sector": 0.032409910658899754,
            "vs_peers": 0.026045672343968596
          }
        }
      },
      "3m": {
        "label": "3M",
        "window_days": 63,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 63,
          "score_pca": 71.58273381294964,
          "score_pca_percentile": 71.58273381294964,
          "rank_pca": 159,
          "total": 556,
          "adv_notional_sgd": 201552.0,
          "adv_volume_shares": 839800.0,
          "free_float_shares": null,
          "turnover_ratio": 0.0014727100023655777,
          "votes": 60.0,
          "trades": 60.0,
          "spread_pct": 0.024736472241742816,
          "spread_ticks": 1.1611111111111112,
          "amihud": 7.93307656608847e-08,
          "volatility": 0.540567269056593
        },
        "pca": {
          "valid": true,
          "window_days": 63,
          "variance_explained": 0.5580245905358521,
          "loadings": {
            "log_adv": 0.5210529934952489,
            "log_trades": 0.4690568193244574,
            "log_turnover": 0.47630169208679574,
            "neg_spread": 0.41616311613972345,
            "neg_amihud": 0.22801500065979446,
            "neg_vol": 0.2375786113460313
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
          "peer_median_adv": 6900.0,
          "peer_median_score_pca": 48.56115107913669,
          "peer_median_trades": 5.5,
          "peer_median_volatility": 0.5579561459120679,
          "peer_median_spread_pct": 0.042588765095614475,
          "peer_median_spread_ticks": 1.6480061349693251,
          "peer_median_amihud": 5.817319446145111e-07,
          "peer_median_turnover_ratio": 7.792579521045769e-05,
          "target_vs_peer": {
            "score_pca_delta": 23.02,
            "adv_delta_pct": 2821.0,
            "trades_delta_pct": 990.91,
            "volatility_delta_pct": 3.12,
            "spread_pct_delta_pct": 41.92,
            "spread_ticks_delta_pct": -29.54,
            "amihud_delta_pct": 86.36,
            "turnover_ratio_delta_pct": 1789.89
          }
        },
        "peer_liquidity": [
          {
            "ticker": "TKU",
            "score_pca": 71.58273381294964,
            "rank_pca": 159,
            "adv": 201552.0,
            "trades": 60.0,
            "volatility": 0.540567269056593,
            "spread_pct": 0.024736472241742816,
            "spread_ticks": 1.1611111111111112,
            "amihud": 7.93307656608847e-08,
            "turnover_ratio": 0.0014727100023655777,
            "is_target": true
          },
          {
            "ticker": "KUX",
            "score_pca": 1.618705035971223,
            "rank_pca": 548,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 2.339194690768862,
            "spread_pct": 0.4901185770750986,
            "spread_ticks": 20.833333333333332,
            "amihud": 0.00031763779127385455,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "532",
            "score_pca": 3.776978417266187,
            "rank_pca": 535,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 2.250447984076117,
            "spread_pct": 0.6666666666666666,
            "spread_ticks": 1.0,
            "amihud": 0.0,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "U77",
            "score_pca": 48.201438848920866,
            "rank_pca": 289,
            "adv": 5600.0,
            "trades": 5.0,
            "volatility": 0.32905943808332394,
            "spread_pct": 0.017821518818991904,
            "spread_ticks": 2.0,
            "amihud": 1.4642717688402982e-06,
            "turnover_ratio": 8.672087795225743e-05,
            "is_target": false
          },
          {
            "ticker": "J03",
            "score_pca": 49.64028776978417,
            "rank_pca": 281,
            "adv": 19427.8,
            "trades": 14.0,
            "volatility": 1.3260925616466634,
            "spread_pct": 0.06896551724137925,
            "spread_ticks": 1.087837837837838,
            "amihud": 1.9649241166437706e-07,
            "turnover_ratio": 0.002205348058980466,
            "is_target": false
          },
          {
            "ticker": "NXR",
            "score_pca": 36.510791366906474,
            "rank_pca": 354,
            "adv": 852.0,
            "trades": 1.0,
            "volatility": 0.36119974367863733,
            "spread_pct": 0.043276661514683186,
            "spread_ticks": 3.25,
            "amihud": 1.5649452269170559e-06,
            "turnover_ratio": 4.271777915392312e-05,
            "is_target": false
          },
          {
            "ticker": "42F",
            "score_pca": 64.74820143884892,
            "rank_pca": 197,
            "adv": 66671.8,
            "trades": 27.0,
            "volatility": 0.6101312591659754,
            "spread_pct": 0.04190086867654577,
            "spread_ticks": 1.0434782608695652,
            "amihud": 0.0,
            "turnover_ratio": 0.0031034887151967674,
            "is_target": false
          },
          {
            "ticker": "LVR",
            "score_pca": 48.92086330935252,
            "rank_pca": 285,
            "adv": 8200.0,
            "trades": 6.0,
            "volatility": 0.35684699264903297,
            "spread_pct": 0.01938386985115959,
            "spread_ticks": 3.0,
            "amihud": 9.66971477564645e-07,
            "turnover_ratio": 6.913071246865795e-05,
            "is_target": false
          },
          {
            "ticker": "ITS",
            "score_pca": 83.09352517985612,
            "rank_pca": 95,
            "adv": 685386.0,
            "trades": 348.0,
            "volatility": 0.5057810326581604,
            "spread_pct": 0.010698983624287645,
            "spread_ticks": 1.2960122699386503,
            "amihud": 2.0193162134896955e-08,
            "turnover_ratio": 0.01005056384462948,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Software - Application",
          "sector_count": 8,
          "market_count": 556,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.694368840715762,
              "median": 0.48455231386687236,
              "min": 0.0,
              "max": 7.013811259728677,
              "p5": 0.15806343322813482,
              "p95": 2.2222291745399905,
              "count": 556
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 3339871.7928176476,
              "median": 14281.5,
              "min": 0.0,
              "max": 284335480.0,
              "p5": 0.0,
              "p95": 13478239.0,
              "count": 556
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.10054938381144313,
              "median": 0.03141361256544505,
              "min": 0.00027741427863602243,
              "max": 1.2905982905982905,
              "p5": 0.0035051980962374756,
              "p95": 0.44957360805416136,
              "count": 555
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.006727303244470469,
              "median": 0.0002904700533079706,
              "min": 0.0,
              "max": 2.4059060048777274,
              "p5": 0.0,
              "p95": 0.011937527588959215,
              "count": 549
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.2466365090814362e-05,
              "median": 1.5279973532496166e-07,
              "min": 0.0,
              "max": 0.0007142857142857141,
              "p5": 0.0,
              "p95": 3.166820316572009e-05,
              "count": 550
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 489.580035971223,
              "median": 7.0,
              "min": 0.0,
              "max": 11391.0,
              "p5": 0.0,
              "p95": 2851.75,
              "count": 556
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.8685556105316052,
              "median": 0.4334903881683989,
              "min": 0.2653477332821147,
              "max": 2.339194690768862,
              "p5": 0.28764682996253793,
              "p95": 2.3081333434264013,
              "count": 8
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 1858694.75,
              "median": 6900.0,
              "min": 0.0,
              "max": 13967968.0,
              "p5": 0.0,
              "p95": 9319064.299999993,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.1592562451490161,
              "median": 0.0220601710464512,
              "min": 0.0013472113994984552,
              "max": 0.6666666666666666,
              "p5": 0.004620331678174671,
              "p95": 0.6048748353096177,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0026117626185800887,
              "median": 7.792579521045769e-05,
              "min": 0.0,
              "max": 0.01005056384462948,
              "p5": 0.0,
              "p95": 0.009743156705233945,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 4.0216769221998987e-05,
              "median": 5.231511216127649e-07,
              "min": 0.0,
              "max": 0.00031763779127385455,
              "p5": 2.2753535685562302e-10,
              "p95": 0.00020701229515742624,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 458.375,
              "median": 5.5,
              "min": 0.0,
              "max": 3247.0,
              "p5": 0.0,
              "p95": 2232.3499999999985,
              "count": 8
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 98267.20000000001,
              "median": 6900.0,
              "min": 0.0,
              "max": 685386.0,
              "p5": 0.0,
              "p95": 468836.0299999997,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 50.125,
              "median": 5.5,
              "min": 0.0,
              "max": 348.0,
              "p5": 0.0,
              "p95": 235.64999999999984,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 1.0098442128408467,
              "median": 0.5579561459120679,
              "min": 0.32905943808332394,
              "max": 2.339194690768862,
              "p5": 0.3387850821813221,
              "p95": 2.3081333434264013,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.16985408293360155,
              "median": 0.042588765095614475,
              "min": 0.010698983624287645,
              "max": 0.6666666666666666,
              "p5": 0.013191870942434136,
              "p95": 0.6048748353096177,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 4.188832712747423,
              "median": 1.6480061349693251,
              "min": 1.0,
              "max": 20.833333333333332,
              "p5": 1.0152173913043478,
              "p95": 14.679166666666656,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 4.023133316512198e-05,
              "median": 5.817319446145111e-07,
              "min": 0.0,
              "max": 0.00031763779127385455,
              "p5": 0.0,
              "p95": 0.00020701229515742624,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.001944746248547694,
              "median": 7.792579521045769e-05,
              "min": 0.0,
              "max": 0.01005056384462948,
              "p5": 0.0,
              "p95": 0.007619087549328027,
              "count": 8
            }
          },
          "returns": {
            "window_days": 63,
            "n_obs": 63,
            "stock": 0.06521739130434545,
            "market": -0.003988583579804916,
            "sector": -0.07915560826899759,
            "peers": -0.03088483336753034,
            "vs_market": 0.06920597488415037,
            "vs_sector": 0.14437299957334304,
            "vs_peers": 0.09610222467187579
          }
        }
      }
    },
    "period_insights": {
      "1d": {
        "liquidity": "Near-term tradability still screens as strong, but the displayed book is uneven because bid depth is much lighter than ask depth.",
        "market_comparison": "Return 2.1% vs peers 0.0%."
      },
      "1w": {
        "liquidity": "1W score 75.4 vs peer median 44.6 (+30.8 pts).",
        "market_comparison": "The stock lagged peers over the week, which matters because weaker tape can make thin buy-side depth more noticeable in execution."
      },
      "30d": {
        "liquidity": "Monthly tradability remains strong and looks stable, with liquidity well above the peer group on the main score.",
        "market_comparison": "The stock held roughly flat over the month while peers fell 2.6%, which matters because relative resilience supports accessibility."
      },
      "3m": {
        "liquidity": "Three-month liquidity is clearly strong, with a score of 71.6 compared with a peer median of 48.6, supporting good access for the company’s size.",
        "market_comparison": "Average daily volume of S$201.6K compared with a peer median of S$6.9K reinforces the stock’s stronger peer standing and matters because it points to deeper natural turnover."
      }
    }
  },
  "q02": {
    "driver_model": {
      "valid": true,
      "model_method": "ols_with_hmm_jump_regimes",
      "estimation_window_days": 77,
      "reporting_window_days": 63,
      "available_history_days": 77,
      "n_regimes": 2,
      "current_regime": 0,
      "current_regime_label": "Calm / Liquid",
      "current_regime_probability": 0.9998555607447667,
      "current_driver_mix": {
        "market_share": {
          "median": 0.474603719334263,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "47.5%",
          "display_range": null,
          "display_text": "47.5%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 77 trading days.",
          "kind": "share_pct",
          "value_pct": 47.5,
          "plain_english": "Market explains about 47.5% of price moves in the current state."
        },
        "sector_share": {
          "median": 0.5021703944816686,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "50.2%",
          "display_range": null,
          "display_text": "50.2%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 77 trading days.",
          "kind": "share_pct",
          "value_pct": 50.2,
          "plain_english": "Sector explains about 50.2% of price moves in the current state."
        },
        "company_share": {
          "median": 0.0232258861840686,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "2.3%",
          "display_range": null,
          "display_text": "2.3%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 77 trading days.",
          "kind": "share_pct",
          "value_pct": 2.3,
          "plain_english": "Company-specific explains about 2.3% of price moves in the current state."
        },
        "basis": "current_state"
      },
      "current_sensitivities": {
        "beta_market": {
          "median": -9.567527986696627,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "-9.57",
          "display_range": null,
          "display_text": "-9.57",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 77 trading days.",
          "kind": "beta",
          "strength_label": "Very high",
          "plain_english": "Very high market link: a 1% market move has lined up with about a 9.57% stock move in the opposite direction in this state. The multiplier is unusually large and comes from only 77 trading days of history.",
          "value_num": -9.57
        },
        "beta_stock_lag": {
          "median": -0.24069698262616868,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "-0.24",
          "display_range": null,
          "display_text": "-0.24",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 77 trading days.",
          "kind": "lag_beta",
          "value_num": -0.24
        },
        "beta_sector": {
          "median": 11.471644333406559,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "11.47",
          "display_range": null,
          "display_text": "11.47",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 77 trading days.",
          "kind": "beta",
          "strength_label": "Very high",
          "plain_english": "Very high sector link: a 1% sector move has lined up with about a 11.47% stock move in the same direction in this state. The multiplier is unusually large and comes from only 77 trading days of history.",
          "value_num": 11.47
        },
        "beta_market_lag": {
          "median": -16.275088374176164,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "-16.28",
          "display_range": null,
          "display_text": "-16.28",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 77 trading days.",
          "kind": "lag_beta",
          "value_num": -16.28
        },
        "beta_sector_lag": {
          "median": 6.3018998165683655,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "6.30",
          "display_range": null,
          "display_text": "6.30",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 77 trading days.",
          "kind": "lag_beta",
          "value_num": 6.3
        },
        "posterior_source": null,
        "intervals_collapsed": false,
        "confidence_label": "High, limited history",
        "confidence_note": "Based on 77 trading days relative to the 252-day target."
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
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.4793194847196389,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "47.9%",
            "display_range": null,
            "display_text": "47.9%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
            "kind": "share_pct",
            "value_pct": 47.9,
            "plain_english": "Market explains about 47.9% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.4793194847196389,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "47.9%",
              "display_range": null,
              "display_text": "47.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
              "kind": "share_pct",
              "value_pct": 47.9,
              "plain_english": "Market explains about 47.9% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.29843964110240034,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "29.8%",
              "display_range": null,
              "display_text": "29.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
              "kind": "share_pct",
              "value_pct": 29.8,
              "plain_english": "Sector explains about 29.8% of price moves in the current state."
            },
            "company_share": {
              "median": 0.22224087417796085,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "22.2%",
              "display_range": null,
              "display_text": "22.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
              "kind": "share_pct",
              "value_pct": 22.2,
              "plain_english": "Company-specific explains about 22.2% of price moves in the current state."
            }
          },
          "summary": "Jan: Mostly market-driven, though based on only 5 trading days."
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
            "median": 0.5656898926629684,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "56.6%",
            "display_range": null,
            "display_text": "56.6%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
            "kind": "share_pct",
            "value_pct": 56.6,
            "plain_english": "Company-specific explains about 56.6% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.26479317957873116,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "26.5%",
              "display_range": null,
              "display_text": "26.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
              "kind": "share_pct",
              "value_pct": 26.5,
              "plain_english": "Market explains about 26.5% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.16951692775830046,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "17.0%",
              "display_range": null,
              "display_text": "17.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
              "kind": "share_pct",
              "value_pct": 17.0,
              "plain_english": "Sector explains about 17.0% of price moves in the current state."
            },
            "company_share": {
              "median": 0.5656898926629684,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "56.6%",
              "display_range": null,
              "display_text": "56.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
              "kind": "share_pct",
              "value_pct": 56.6,
              "plain_english": "Company-specific explains about 56.6% of price moves in the current state."
            }
          },
          "summary": "Feb: Mostly company-driven."
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
            "median": 0.5379214653603349,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "53.8%",
            "display_range": null,
            "display_text": "53.8%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
            "kind": "share_pct",
            "value_pct": 53.8,
            "plain_english": "Company-specific explains about 53.8% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.22982068067655395,
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
              "median": 0.23225785396311116,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "23.2%",
              "display_range": null,
              "display_text": "23.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 23.2,
              "plain_english": "Sector explains about 23.2% of price moves in the current state."
            },
            "company_share": {
              "median": 0.5379214653603349,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "53.8%",
              "display_range": null,
              "display_text": "53.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 53.8,
              "plain_english": "Company-specific explains about 53.8% of price moves in the current state."
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
            "median": 0.5202476822091706,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "52.0%",
            "display_range": null,
            "display_text": "52.0%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
            "kind": "share_pct",
            "value_pct": 52.0,
            "plain_english": "Company-specific explains about 52.0% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.3442596667740503,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "34.4%",
              "display_range": null,
              "display_text": "34.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 34.4,
              "plain_english": "Market explains about 34.4% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.1354926510167791,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "13.5%",
              "display_range": null,
              "display_text": "13.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 13.5,
              "plain_english": "Sector explains about 13.5% of price moves in the current state."
            },
            "company_share": {
              "median": 0.5202476822091706,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "52.0%",
              "display_range": null,
              "display_text": "52.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 52.0,
              "plain_english": "Company-specific explains about 52.0% of price moves in the current state."
            }
          },
          "summary": "Apr: Mostly company-driven."
        },
        {
          "month_key": "2026-05",
          "month_label": "May 2026",
          "month_short_label": "May",
          "period_label": "2026-05-04 to 2026-05-18",
          "n_obs": 11,
          "partial_month": true,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.5500131851680864,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "55.0%",
            "display_range": null,
            "display_text": "55.0%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 11 trading days.",
            "kind": "share_pct",
            "value_pct": 55.0,
            "plain_english": "Company-specific explains about 55.0% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.0579765127055313,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "5.8%",
              "display_range": null,
              "display_text": "5.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 11 trading days.",
              "kind": "share_pct",
              "value_pct": 5.8,
              "plain_english": "Market explains about 5.8% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.3920103021263821,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "39.2%",
              "display_range": null,
              "display_text": "39.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 11 trading days.",
              "kind": "share_pct",
              "value_pct": 39.2,
              "plain_english": "Sector explains about 39.2% of price moves in the current state."
            },
            "company_share": {
              "median": 0.5500131851680864,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "55.0%",
              "display_range": null,
              "display_text": "55.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 11 trading days.",
              "kind": "share_pct",
              "value_pct": 55.0,
              "plain_english": "Company-specific explains about 55.0% of price moves in the current state."
            }
          },
          "summary": "May: Mostly company-driven."
        }
      ],
      "regimes": [
        {
          "id": 0,
          "label": "Calm / Liquid",
          "pct_time": 0.6455244872542459,
          "expected_duration_days": 3.0493132974861754,
          "current_probability": 0.9998555607447667,
          "n_days_effective": 49.70538551857694,
          "volatility": {
            "median": 0.015663507974277714,
            "low": 0.015663507974277714,
            "high": 0.015663507974277714
          },
          "volatility_label": "Calm / Liquid",
          "jump_probability": 0.12593283990598694,
          "jump_rate": 8.227179860255059e-32,
          "risk_score": 0.2,
          "metrics": {
            "rolling_vol_10d": 0.03266416729343883,
            "downside_vol_10d": 0.0171035375973182,
            "drawdown_21d": 0.07894367799497644,
            "amihud_stress": 1.2622529734849603,
            "spread_rel": 240.40921535119875,
            "spread_ticks": 1.149111864804512,
            "log_notional": 12.472479943413695,
            "log_trade_count": 4.252631473758134
          },
          "current_probability_display": null
        },
        {
          "id": 1,
          "label": "Jump / Tail Shock",
          "pct_time": 0.35447551274575406,
          "expected_duration_days": 1.7121964132341292,
          "current_probability": 0.00014443925523331206,
          "n_days_effective": 27.294614481423064,
          "volatility": {
            "median": 0.05388448377986384,
            "low": 0.05388448377986384,
            "high": 0.05388448377986384
          },
          "volatility_label": "Jump / Tail Shock",
          "jump_probability": 0.3482827749813147,
          "jump_rate": 0.1831863206349018,
          "risk_score": 0.8,
          "metrics": {
            "rolling_vol_10d": 0.037959835716413017,
            "downside_vol_10d": 0.020631521578985464,
            "drawdown_21d": 0.07234405587292819,
            "amihud_stress": 2.456095444498079,
            "spread_rel": 238.26863010827762,
            "spread_ticks": 1.1447818268695031,
            "log_notional": 13.067308230001998,
            "log_trade_count": 4.782537587551914
          },
          "current_probability_display": 0.0
        }
      ],
      "transitions": {
        "mean": [
          [
            0.6720573117808556,
            0.32794268821914446
          ],
          [
            0.5840451435773789,
            0.41595485642262114
          ]
        ],
        "low": [],
        "high": [],
        "counts": [
          [
            33.0,
            16.0
          ],
          [
            16.0,
            11.0
          ]
        ]
      },
      "current_state_is_transition": false,
      "state_probabilities": [
        {
          "id": 0,
          "label": "Calm / Liquid",
          "probability": 0.9998555607447667
        },
        {
          "id": 1,
          "label": "Jump / Tail Shock",
          "probability": 0.00014443925523331206
        }
      ],
      "jump_risk": {
        "current_probability": 0.1259649559650104,
        "current_score": 0.7380705802689843,
        "current_flag": false,
        "jump_threshold_score": 2.5,
        "method": "robust_residual_and_return_jump_overlay"
      },
      "model_selection": {
        "chosen": 2,
        "criterion": "bic_with_min_state_support",
        "bic": 3814.6970992333922,
        "loglik": -1709.7054029223534,
        "candidates": [
          {
            "k": 2,
            "valid": true,
            "reason": "ok",
            "bic": 3814.6970992333922,
            "loglik": -1709.7054029223534,
            "n_params": 91,
            "converged": true,
            "iterations": 9
          },
          {
            "k": 3,
            "valid": true,
            "reason": "ok",
            "bic": 3843.6942827125868,
            "loglik": -1617.7807618265354,
            "n_params": 140,
            "converged": true,
            "iterations": 21
          }
        ]
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
          "trade_date": "2026-05-05",
          "state": 0,
          "probabilities": [
            0.999615153357132,
            0.00038484664286800573
          ],
          "jump_probability": 0.1800311778565432,
          "jump_score": 0.9316206334312906
        },
        {
          "trade_date": "2026-05-06",
          "state": 0,
          "probabilities": [
            0.9999848701233158,
            1.5129876684204593e-05
          ],
          "jump_probability": 0.14041641997052168,
          "jump_score": 0.6744907594765952
        },
        {
          "trade_date": "2026-05-07",
          "state": 0,
          "probabilities": [
            0.9999773443413925,
            2.2655658607461793e-05
          ],
          "jump_probability": 0.13851661208222518,
          "jump_score": 0.6607256419362596
        },
        {
          "trade_date": "2026-05-08",
          "state": 0,
          "probabilities": [
            0.9918107933758858,
            0.008189206624114154
          ],
          "jump_probability": 0.1497095441639406,
          "jump_score": 0.7396687311315505
        },
        {
          "trade_date": "2026-05-11",
          "state": 0,
          "probabilities": [
            0.9999999998949494,
            1.050506880160083e-10
          ],
          "jump_probability": 0.09357845767311868,
          "jump_score": 0.27547454572895985
        },
        {
          "trade_date": "2026-05-12",
          "state": 0,
          "probabilities": [
            0.999998585883064,
            1.414116935959824e-06
          ],
          "jump_probability": 0.14041641997052168,
          "jump_score": 0.6744907594765952
        },
        {
          "trade_date": "2026-05-13",
          "state": 0,
          "probabilities": [
            0.9999999998832351,
            1.1676495512894186e-10
          ],
          "jump_probability": 0.13723637233691535,
          "jump_score": 0.6513600236437003
        },
        {
          "trade_date": "2026-05-14",
          "state": 0,
          "probabilities": [
            0.9999965293290564,
            3.4706709436227477e-06
          ],
          "jump_probability": 0.18867364167795841,
          "jump_score": 0.9816072791369211
        },
        {
          "trade_date": "2026-05-15",
          "state": 1,
          "probabilities": [
            1.4490402788767738e-14,
            0.9999999999999855
          ],
          "jump_probability": 0.43839136133492607,
          "jump_score": 2.0346146048902463
        },
        {
          "trade_date": "2026-05-18",
          "state": 0,
          "probabilities": [
            0.9998555607447667,
            0.00014443925523331206
          ],
          "jump_probability": 0.14947573971019962,
          "jump_score": 0.7380705802689843
        }
      ],
      "methodology": {
        "estimation_window_days": 77,
        "reporting_window_days": 63,
        "current_mix_method": "ols_last_5d",
        "monthly_history_method": "ols_per_month",
        "regime_inference": "hmm_jump_diffusion",
        "regime_feature_stack": "returns_volatility_shape_liquidity_activity_jump_score",
        "regime_scaling": "robust_median_iqr",
        "regime_model_selection": "bic_with_min_state_support",
        "jump_component": "robust_residual_and_return_jump_overlay",
        "distribution": "gaussian",
        "history_limited": true,
        "current_driver_mix_basis": "ols_recent_window",
        "sector_proxy_equals_market": false
      },
      "client_read": {
        "market_link_display": "-9.57",
        "sector_link_display": "11.47",
        "market_link_explainer": "Very high market link. A 1% market move has lined up with about a 9.57% stock move in the opposite direction in this state. This is a point estimate from 77 trading days.",
        "sector_link_explainer": "Very high sector link. A 1% sector move has lined up with about a 11.47% stock move in the same direction in this state. This is a point estimate from 77 trading days.",
        "stock_persistence_display": "-0.24",
        "point_estimate_note": "Point estimate only because the current state has 77 trading days.",
        "history_limited_note": "Read is based on 77 trading days versus the 252-day target."
      },
      "current_summary": {
        "regime_label": "Calm / Liquid",
        "dominant_driver": "sector",
        "dominant_driver_label": "Sector",
        "driver_share_pct": 50.2,
        "driver_share_display": "50.2%",
        "confidence_label": "High, limited history",
        "confidence_pct": 100.0,
        "display_confidence_pct": null,
        "confidence_note": "Based on 77 trading days relative to the 252-day target.",
        "history_days": 77,
        "history_limited": true,
        "volatility_label": "Calm / Liquid",
        "jump_risk_label": "Contained",
        "jump_risk_probability": 12.6,
        "jump_risk_score": 0.74,
        "jump_risk_note": "Jump risk is contained based on recent residual and return shocks.",
        "lead_signal_text": "No stable lead signal.",
        "state_term": "state",
        "stay_probability": 0.6720573117808556,
        "effective_days": 49.7,
        "persistence_note": "This state looks more persistent, with a typical run length of about 3.0 days.",
        "expected_duration_days": 3.0
      },
      "display_notes": {
        "collapsed_interval": "When only one number is shown, the run produced a point estimate instead of a wider uncertainty range."
      }
    },
    "regime_switching": {
      "valid": true,
      "regime_method": "hmm_jump_diffusion",
      "n_regimes": 2,
      "regimes": [
        {
          "id": 0,
          "label": "Calm / Liquid",
          "pct_time": 0.6455244872542459,
          "expected_duration_days": 3.0493132974861754,
          "current_probability": 0.9998555607447667,
          "n_days_effective": 49.70538551857694,
          "volatility": {
            "median": 0.015663507974277714,
            "low": 0.015663507974277714,
            "high": 0.015663507974277714
          },
          "volatility_label": "Calm / Liquid",
          "jump_probability": 0.12593283990598694,
          "jump_rate": 8.227179860255059e-32,
          "risk_score": 0.2,
          "metrics": {
            "rolling_vol_10d": 0.03266416729343883,
            "downside_vol_10d": 0.0171035375973182,
            "drawdown_21d": 0.07894367799497644,
            "amihud_stress": 1.2622529734849603,
            "spread_rel": 240.40921535119875,
            "spread_ticks": 1.149111864804512,
            "log_notional": 12.472479943413695,
            "log_trade_count": 4.252631473758134
          }
        },
        {
          "id": 1,
          "label": "Jump / Tail Shock",
          "pct_time": 0.35447551274575406,
          "expected_duration_days": 1.7121964132341292,
          "current_probability": 0.00014443925523331206,
          "n_days_effective": 27.294614481423064,
          "volatility": {
            "median": 0.05388448377986384,
            "low": 0.05388448377986384,
            "high": 0.05388448377986384
          },
          "volatility_label": "Jump / Tail Shock",
          "jump_probability": 0.3482827749813147,
          "jump_rate": 0.1831863206349018,
          "risk_score": 0.8,
          "metrics": {
            "rolling_vol_10d": 0.037959835716413017,
            "downside_vol_10d": 0.020631521578985464,
            "drawdown_21d": 0.07234405587292819,
            "amihud_stress": 2.456095444498079,
            "spread_rel": 238.26863010827762,
            "spread_ticks": 1.1447818268695031,
            "log_notional": 13.067308230001998,
            "log_trade_count": 4.782537587551914
          }
        }
      ],
      "transitions": [
        [
          0.6720573117808556,
          0.32794268821914446
        ],
        [
          0.5840451435773789,
          0.41595485642262114
        ]
      ],
      "transition_intervals": {
        "mean": [
          [
            0.6720573117808556,
            0.32794268821914446
          ],
          [
            0.5840451435773789,
            0.41595485642262114
          ]
        ],
        "low": [],
        "high": [],
        "counts": [
          [
            33.0,
            16.0
          ],
          [
            16.0,
            11.0
          ]
        ]
      },
      "current_regime": 0,
      "current_regime_label": "Calm / Liquid",
      "current_regime_probability": 0.9998555607447667,
      "current_state_is_transition": false,
      "state_probabilities": [
        {
          "id": 0,
          "label": "Calm / Liquid",
          "probability": 0.9998555607447667
        },
        {
          "id": 1,
          "label": "Jump / Tail Shock",
          "probability": 0.00014443925523331206
        }
      ],
      "jump_risk": {
        "current_probability": 0.1259649559650104,
        "current_score": 0.7380705802689843,
        "current_flag": false,
        "jump_threshold_score": 2.5,
        "method": "robust_residual_and_return_jump_overlay"
      },
      "model_selection": {
        "chosen": 2,
        "criterion": "bic_with_min_state_support",
        "bic": 3814.6970992333922,
        "loglik": -1709.7054029223534,
        "candidates": [
          {
            "k": 2,
            "valid": true,
            "reason": "ok",
            "bic": 3814.6970992333922,
            "loglik": -1709.7054029223534,
            "n_params": 91,
            "converged": true,
            "iterations": 9
          },
          {
            "k": 3,
            "valid": true,
            "reason": "ok",
            "bic": 3843.6942827125868,
            "loglik": -1617.7807618265354,
            "n_params": 140,
            "converged": true,
            "iterations": 21
          }
        ]
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
          "trade_date": "2026-05-05",
          "state": 0,
          "probabilities": [
            0.999615153357132,
            0.00038484664286800573
          ],
          "jump_probability": 0.1800311778565432,
          "jump_score": 0.9316206334312906
        },
        {
          "trade_date": "2026-05-06",
          "state": 0,
          "probabilities": [
            0.9999848701233158,
            1.5129876684204593e-05
          ],
          "jump_probability": 0.14041641997052168,
          "jump_score": 0.6744907594765952
        },
        {
          "trade_date": "2026-05-07",
          "state": 0,
          "probabilities": [
            0.9999773443413925,
            2.2655658607461793e-05
          ],
          "jump_probability": 0.13851661208222518,
          "jump_score": 0.6607256419362596
        },
        {
          "trade_date": "2026-05-08",
          "state": 0,
          "probabilities": [
            0.9918107933758858,
            0.008189206624114154
          ],
          "jump_probability": 0.1497095441639406,
          "jump_score": 0.7396687311315505
        },
        {
          "trade_date": "2026-05-11",
          "state": 0,
          "probabilities": [
            0.9999999998949494,
            1.050506880160083e-10
          ],
          "jump_probability": 0.09357845767311868,
          "jump_score": 0.27547454572895985
        },
        {
          "trade_date": "2026-05-12",
          "state": 0,
          "probabilities": [
            0.999998585883064,
            1.414116935959824e-06
          ],
          "jump_probability": 0.14041641997052168,
          "jump_score": 0.6744907594765952
        },
        {
          "trade_date": "2026-05-13",
          "state": 0,
          "probabilities": [
            0.9999999998832351,
            1.1676495512894186e-10
          ],
          "jump_probability": 0.13723637233691535,
          "jump_score": 0.6513600236437003
        },
        {
          "trade_date": "2026-05-14",
          "state": 0,
          "probabilities": [
            0.9999965293290564,
            3.4706709436227477e-06
          ],
          "jump_probability": 0.18867364167795841,
          "jump_score": 0.9816072791369211
        },
        {
          "trade_date": "2026-05-15",
          "state": 1,
          "probabilities": [
            1.4490402788767738e-14,
            0.9999999999999855
          ],
          "jump_probability": 0.43839136133492607,
          "jump_score": 2.0346146048902463
        },
        {
          "trade_date": "2026-05-18",
          "state": 0,
          "probabilities": [
            0.9998555607447667,
            0.00014443925523331206
          ],
          "jump_probability": 0.14947573971019962,
          "jump_score": 0.7380705802689843
        }
      ]
    }
  },
  "theme": {
    "badges": {
      "liq_section": {
        "text": "Liquidity score: 71.6 — Strong",
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
        "text": "Execution: thin buy-side",
        "bg": "bg-red-500/20",
        "textColor": "text-red-400"
      },
      "intraday": {
        "text": "Trading Activity",
        "bg": "bg-red-500/20",
        "textColor": "text-red-400"
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
    "liq_subtitle": "Liquidity screens well relative to peers, although the displayed book is less supportive on the bid side.",
    "market_comparison_title": "How You Compare to the Market",
    "market_comparison_subtitle": "Context relative to market, sector, and peer medians.",
    "perf_title": "Stock Performance",
    "perf_subtitle": "The stock was broadly flat over the past month and still trailed peers and the market, pointing to weaker relative performance.",
    "perf_insight": "Performance is strong relative to comparison groups. Recent price performance is weaker than peers and the market, so the tape is not being cushioned by stronger momentum. Recent trend context is too limited to say whether access has changed from the 1M baseline.",
    "drivers_title": "What Moves Your Stock Price?",
    "drivers_subtitle": "Sector moves are the main current influence, with 50.2% of trading direction explained by the group.",
    "drivers_strip": [
      {
        "title": "Current Driver (Last 5 Days)",
        "text": "Over the last 5 trading days, moves are mainly sector-driven, accounting for about 50.2% of price changes. Other influences are market 47.5%, and company-specific 2.3%."
      },
      {
        "title": "Driver Mix",
        "text": "Based on the last 5 trading days, current mix is market 47.5%, sector 50.2%, and company-specific 2.3%."
      },
      {
        "title": "Monthly Trend",
        "text": "The driver mix has been consistently company-driven across Mar to May."
      }
    ],
    "drivers_pie_title": "Current Driver Mix (Last 5 Days)",
    "drivers_pie_note": "Based on the last 5 trading days, current split is market 47.5%, sector 50.2%, and company-specific 2.3%.",
    "lead_lag_title": "",
    "lead_lag_note": "",
    "rolling_title": "Monthly Driver Shift",
    "rolling_latest_label": "Latest: {period}",
    "rolling_note": "Each bar shows the monthly split between market-, sector-, and company-driven moves.",
    "drivers_bottom_line": "That matters because the tape is being driven more by the sector than by company-specific news, while displayed bid depth at 0.32x of ask depth leaves the buy side thinner than the spread alone",
    "drivers_wtd_title": "Key Reads",
    "drivers_wtd_list": [
      "Sector moves are the main driver now, accounting for 50.2% of price action.",
      "The monthly pattern still looks company-driven across March to May, so the current sector-led read looks more like a near-term shift than a broader reset."
    ],
    "regime_title": "Market State",
    "regime_subtitle": "The stock still looks liquid for its size, but the current book is less resilient because buy-side depth is thin.",
    "regime_badge_text": "Calm / Liquid",
    "regime_pie_title": "State Mix",
    "transition_title": "State Transitions",
    "transition_cols": [
      "From \\",
      "Calm / Liquid",
      "Jump / Tail Shock"
    ],
    "transition_note_template": "Rows sum to 100%. Each row shows how states tend to transition across the observed sample.",
    "market_state_strip": [],
    "exec_check_title": "Trading Costs & Market Depth",
    "exec_check_subtitle": "Combines the final continuous-session displayed book before close, trade-size stress tests based on available history from Jan 22, 2026 to May 18, 2026 (79 trading days • 12,364 trades), large sell-side orders observed today, and intraday spread/depth during the continuous trading session.",
    "order_book_title": "Order Book Depth (Available Liquidity)",
    "order_book_note": "Depth shown is based on the displayed order book.",
    "peer_capacity_title": "Peer Capacity Context",
    "peer_capacity_note": "Immediate buy-side depth is thin enough that downside execution may feel worse than the monthly liquidity score",
    "impact_summary_title": "Estimated Price Impact (Sell Orders)",
    "impact_summary_subtitle": "Approximate price impact (%) for sell orders.",
    "exec_check_insight": "The key execution watchpoint is the thin bid side, with displayed bid depth at 0.32x of ask depth despite a 1 tick spread.",
    "trader_composition_title": "Who's Trading Your Stock?",
    "trader_composition_subtitle": "Shows whether trading is mostly retail-like, institution-like, mixed, or unclassified.",
    "trader_retail_threshold": "Retail-like flow",
    "trader_mixed_threshold": "Mixed flow",
    "trader_instit_threshold": "Institution-like flow",
    "peer_trader_title": "Peer Comparison: Trader Mix",
    "peer_trader_subtitle": "How the trader mix compares with peers.",
    "price_moving_title": "Which Trades Move the Price?",
    "price_moving_subtitle": "Price-moving trades are 19.6% of total trades.",
    "intraday_title": "When Does Trading Happen?",
    "intraday_subtitle": "Trading access looks solid at a structural level, while the immediate watchpoint remains the thinner buy side in the displayed book.",
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
    "intraday_insight": "The near-term trading picture is defined by a strong 3M liquidity score of 71.6 relative to a peer median of 48.6, but displayed bid depth is only 0.32x of ask depth. That matters because the stock screens accessible overall, while downside execution can still feel less supported in the current book.",
    "short_title": "Short Selling & Lending",
    "short_subtitle": "The main market-state signal is strong structural liquidity alongside thinner displayed buy-side support.",
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
    "exec_subtitle": "Trading access looks strong for the company’s size, but the current book shows thin buy-side support.",
    "exec_takeaways_title": "Key Takeaways:",
    "metric_liquidity_score": "Liquidity Score",
    "metric_spread": "Trading Cost (Spread)",
    "metric_adv": "Average Traded Volume",
    "metric_drivers": "What Drives Price Changes",
    "metric_period_note": "The metrics shown here are based on the last 3 months of trading data, except for price driver mix which uses the last 5 trading days.",
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
        "value": "71.6/100",
        "sub": "Peer median 48.6 (+23.0 pts)",
        "interp": {
          "text": "Strong",
          "cls": "interpretation-good",
          "icon": "◆"
        }
      },
      {
        "title": "Volume vs Peers",
        "value": "S$201.6K",
        "sub": "Peer median S$6.9K",
        "interp": {
          "text": "Strong",
          "cls": "interpretation-good",
          "icon": "◆"
        }
      },
      {
        "title": "Spread",
        "value": "2.47%",
        "sub": "1.16 ticks; peers 4.26%",
        "interp": {
          "text": "Tighter",
          "cls": "interpretation-good",
          "icon": "◆"
        }
      }
    ],
    "liq_insight": "Liquidity looks strong relative to peers, with a 3M score of 71.6 compared with a peer median of 48.6. That supports the view that the stock is accessible for its size. The immediate book is less supportive, however, because displayed bid depth is only 0.32x of ask depth despite a 1 tick spread. That makes near-term sell-side execution more exposed than the headline liquidity score implies.",
    "perf_badge": "Context",
    "exec_check_tiles": [
      {
        "title": "Mid Price",
        "value": "0.242",
        "note": "final continuous-session displayed book before close",
        "color": "text-white"
      },
      {
        "title": "Spread",
        "value": "2.06%",
        "note": "1.00 ticks",
        "color": "text-slate-300"
      },
      {
        "title": "Depth",
        "value": "0.32x",
        "note": "Bid depth / ask depth on the displayed order book",
        "color": "text-slate-300"
      }
    ],
    "impact_summary_cards": [
      {
        "title": "~S$100K sell",
        "text": "Estimated impact ~-1.03% with 100.0% fill.",
        "cls": "ok"
      },
      {
        "title": "S$1.0M sell",
        "text": "Estimated impact ~-4.25% with 77.3% fill.",
        "cls": "warn"
      },
      {
        "title": "S$2.5M sell",
        "text": "Estimated impact ~-4.25% with 30.9% fill.",
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
        "value": "72",
        "suffix": "/100",
        "bar_pct": 72,
        "color_value": "text-emerald-400",
        "color_bar": "bg-emerald-500",
        "subtext": "Rank 159/556",
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
        "value": "2.47",
        "suffix": "%",
        "bar_pct": 25,
        "color_value": "text-amber-400",
        "color_bar": "bg-amber-500",
        "subtext": "2.47% • 1.16 ticks vs peers 4.26%",
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
        "value": "201.6K",
        "value_prefix": "S$",
        "suffix": "",
        "bar_pct": 60,
        "color_value": "text-emerald-400",
        "color_bar": "bg-emerald-500",
        "subtext": "Peer median S$6.9K",
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
        "value": "50.2",
        "suffix": "sector",
        "bar_pct": 50,
        "color_value": "text-amber-400",
        "color_bar": "bg-amber-500",
        "subtext": "Market 47.5% • Company 2.3%",
        "interpretation": {
          "text": "Sector",
          "cls": "interpretation-neutral",
          "icon": "◆"
        }
      }
    ],
    "exec_takeaways": [
      "Structural liquidity is strong for the stock’s size, with a 3M liquidity score of 71.6 compared with a peer median of 48.6. That points to better baseline access than the peer group.",
      "The stock has underperformed on a relative basis over the past month, with a 1M return of -0.0% compared with -2.6% for peers and -0.2% for the market. That matters because the tape is not being supported by stronger price momentum.",
      "The main near-term caveat is the displayed book, where bid depth is only 0.32x of ask depth even with a 1 tick spread. That matters because downside execution can feel worse than the stronger structural liquidity profile suggests, while sector moves still account for 50.2% of direction."
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
      "overall": "3M liquidity is strong: score 71.6 vs peer median 48.6 (+23.0 pts). Recent trend context is too limited to say whether access has changed from the 1M baseline.",
      "strengths": [
        "3M score 71.6 vs peer median 48.6 (+23.0 pts)."
      ],
      "concerns": [],
      "peer_context": "Primary-period score gap vs peers: +23.0 pts."
    },
    "market_comparison": {
      "returns": {
        "insight": "3M return is 6.5%, better than market, sector, and peers, which suggests stronger price performance than comparable names.",
        "vs_market": "Better than market: 6.5% vs market -0.4%.",
        "vs_sector": "Better than sector: 6.5% vs sector -7.9%.",
        "vs_peers": "Better than peers: 6.5% vs peers -3.1%."
      },
      "adv": {
        "insight": "ADV is S$201.6K, better than market, sector, and peers, which supports stronger day-to-day trading size than comparable names.",
        "vs_market": "Better than market: S$201.6K vs market S$14.3K.",
        "vs_sector": "Better than sector: S$201.6K vs sector S$6.9K.",
        "vs_peers": "Better than peers: S$201.6K vs peers S$6.9K."
      },
      "spread": {
        "insight": "Spread is 2.47%, better than market and peers, but worse than sector, which shows execution cost is mixed across comparison groups.",
        "vs_market": "Better than market: 2.47% vs market 3.14%.",
        "vs_sector": "Worse than sector: 2.47% vs secto%.",
        "vs_peers": "Better than peers: 2.47% vs peers 4.26%."
      },
      "turnover_ratio": {
        "insight": "Turnover ratio is 0.15%, better than market, sector, and peers, which shows a more active free-float turnover profile than comparable names.",
        "vs_market": "Better than market: 0.15% vs market 0.03%.",
        "vs_sector": "Better than sector: 0.15% vs sector 0.01%.",
        "vs_peers": "Better than peers: 0.15% vs peers 0.01%."
      },
      "volatility": {
        "insight": "Volatility is 54.06%, worse than market and sector, which suggests day-to-day price swings are heavier than comparable names.",
        "vs_market": "Worse than market: 54.06% vs market 48.46%.",
        "vs_sector": "Worse than sector: 54.06% vs sector 43.35%.",
        "vs_peers": "In line with peers: 54.06% vs peers 55.80%."
      },
      "trades": {
        "insight": "Trades is 60, better than market, sector, and peers, which supports more fully reflective of day-to-day access day-to-day activity than comparable names.",
        "vs_market": "Better than market: 60 vs market 7.",
        "vs_sector": "Better than sector: 60 vs sector 6.",
        "vs_peers": "Better than peers: 60 vs peers 6."
      },
      "amihud": {
        "insight": "Price impact is 7.93e-08, better than market, sector, and peers, which suggests trades move price less than comparable names.",
        "vs_market": "Better than market: 7.93e-08 vs market 1.53e-07.",
        "vs_sector": "Better than sector: 7.93e-08 vs sector 5.23e-07.",
        "vs_peers": "Better than peers: 7.93e-08 vs peers 5.82e-07."
      }
    },
    "performance": {
      "overall": "Recent performance looks weak relative to peers and slightly behind the market, with a 1M return of -0.0% compared with peers at -2.6% and the market at -0.2%. Liquidity gives a mixed read on that move because the 3M score of 71.6 is well above the peer median of 48.6, yet displayed bid depth at 0.32x of ask depth points to thinner immediate buy-side support than the broader liquidity profile implies.",
      "conclusion": "The recent move looks mixed but mainly sector-linked, with solid structural liquidity offset by thin displayed buy-side depth."
    },
    "drivers": {
      "overall": "The stock is being driven mainly by sector moves right now, with sector factors accounting for 50.2% of price action. That matters because the tape is being set more by broader group sentiment than by company-specific news.",
      "beta": "Current trading conditions look mixed: the spread is 1 tick, but displayed bid depth is only 0.32x ask depth. That means price moves can feel less forgiving on the downside even when headline liquidity looks solid for the stock's size.",
      "rolling_change": "The broader monthly pattern has still been mostly sector from March through May. That suggests the current sector-led behaviour is a recent change rather than the established pattern over the last few months."
    },
    "regime": {
      "overall": "The active backdrop is broadly supportive because liquidity screens well for the stock's size, with a 3M liquidity score of 71.6 compared with a peer median of 48.6. That matters because access may generally hold up better than peers even without strong price momentum.",
      "current": "Current market state is Calm / Liquid. The market has been in this state about 64.6% of the time. Jump risk is 13% on the current read. Based on 77 trading days relative to the 252-day target.",
      "transitions": "This state looks fairly settled rather than fleeting, with a typical run length of about 3.0 days, although the read is mixed.",
      "trading_implications": "Trading conditions may stay broadly steady, but the displayed book is less resilient on the buy side because bid depth is only 0.32x ask depth even with a 1 tick spread."
    },
    "execution": {
      "overall": "Displayed liquidity looks thin buy-side at the screen, with bid depth at 0.32x of ask depth while the spread remains 1 tick. That means the quote still looks orderly, but available buying visible support is materially lighter than selling interest.",
      "concern": "The clearest stress point is the imbalance in displayed depth, because the bid side is much thinner than the ask side. That leaves downside execution more exposed if selling interest rises, even though the spread is still tight.",
      "peer_context": "This sits in some tension with the stronger 3M liquidity score of 71.6 compared with the peer median of 48.6, which suggests good access for the stock's"
    },
    "trader_composition": {
      "overall": "Flow looks mainly retail-like on both trade count and trade value, which gives a clear read on who is driving activity.",
      "retail_heavy": "By trade count and value, flow leans retail-like: retail-like trades are 87.6% of count and 35.5% of value, compared with institution-like at 1.1% of count and 16.9% of value.",
      "institutional_gap": "Institution-like activity is a small share of trade count at 1.1%, even though it reaches 16.9% of trade value. That leaves the flow looking retail-led rather than anchored by larger participants.",
      "peer_comparison": "The current mix stands out as retail-leaning relative to peers, which makes this name look more dependent on broad day-to-day participation than on institutional value flow."
    },
    "price_moving": {
      "overall": "Price-moving activity is present, but the cleaner signal is that overall flow still leans retail-like on both count and value. Retail-like trades dominate count at 87.6% and still lead value at 35.5%, while institution-like trades are only 1.1% of count and 16.9% of value. That makes the price signal more reflective of broad participation than of concentrated large-value trading.",
      "interpretation": "",
      "asymmetry": ""
    },
    "short_selling": {
      "overall": "Short activity looks low and is not the main factor shaping trading conditions. The steadier read on short interest, alongside a 1M return of -0.0% compared with -2.6% for peers and -0.2% for the market, suggests the current picture is being driven more by broader trading conditions than by short pressure.",
      "level": "Low short interest",
      "correlation": "No clear relationship (correlation undefined)",
      "trend": "Short interest appears stable rather than rising, which means it is not adding a new source of pressure to the tape.",
      "peaks": "0 notable peak days identified."
    },
    "intraday": {
      "overall": "Session split is open 2.3%, continuous 95.9%, and close 1.2%. Current trading concentration score is 0.300.",
      "hhi_interpretation": "A trading concentration score of 0.300 indicates activity is reasonably spread across the session. That supports a steadier intraday flow picture.",
      "best_times": "The continuous session is the clearest window for liquidity because it accounts for 95.9% of trading. The open and close contribute only a small share of activity.",
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
        "TKU",
        "KUX",
        "532",
        "U77",
        "J03",
        "NXR",
        "42F",
        "LVR",
        "ITS"
      ],
      "scores": [
        71.58273381294964,
        1.618705035971223,
        3.776978417266187,
        48.201438848920866,
        49.64028776978417,
        36.510791366906474,
        64.74820143884892,
        48.92086330935252,
        83.09352517985612
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
        201552.0,
        0.0,
        0.0,
        5600.0,
        19427.8,
        852.0,
        66671.8,
        8200.0,
        685386.0
      ],
      "total": 556
    },
    "market_comparison": {
      "sector_name": "Software - Application",
      "sector_count": 8,
      "market_count": 556,
      "company": {
        "volatility": 0.540567269056593,
        "adv": 201552.0,
        "spread_pct": 0.024736472241742816,
        "turnover_ratio": 0.0014727100023655777,
        "amihud": 7.93307656608847e-08,
        "trades": 60.0
      },
      "market": {
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.694368840715762,
          "median": 0.48455231386687236,
          "min": 0.0,
          "max": 7.013811259728677,
          "p5": 0.15806343322813482,
          "p95": 2.2222291745399905,
          "count": 556
        },
        "adv": {
          "direction": "higher_is_better",
          "mean": 3339871.7928176476,
          "median": 14281.5,
          "min": 0.0,
          "max": 284335480.0,
          "p5": 0.0,
          "p95": 13478239.0,
          "count": 556
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.10054938381144313,
          "median": 0.03141361256544505,
          "min": 0.00027741427863602243,
          "max": 1.2905982905982905,
          "p5": 0.0035051980962374756,
          "p95": 0.44957360805416136,
          "count": 555
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.006727303244470469,
          "median": 0.0002904700533079706,
          "min": 0.0,
          "max": 2.4059060048777274,
          "p5": 0.0,
          "p95": 0.011937527588959215,
          "count": 549
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 1.2466365090814362e-05,
          "median": 1.5279973532496166e-07,
          "min": 0.0,
          "max": 0.0007142857142857141,
          "p5": 0.0,
          "p95": 3.166820316572009e-05,
          "count": 550
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 489.580035971223,
          "median": 7.0,
          "min": 0.0,
          "max": 11391.0,
          "p5": 0.0,
          "p95": 2851.75,
          "count": 556
        }
      },
      "sector": {
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.8685556105316052,
          "median": 0.4334903881683989,
          "min": 0.2653477332821147,
          "max": 2.339194690768862,
          "p5": 0.28764682996253793,
          "p95": 2.3081333434264013,
          "count": 8
        },
        "adv": {
          "direction": "higher_is_better",
          "mean": 1858694.75,
          "median": 6900.0,
          "min": 0.0,
          "max": 13967968.0,
          "p5": 0.0,
          "p95": 9319064.299999993,
          "count": 8
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.1592562451490161,
          "median": 0.0220601710464512,
          "min": 0.0013472113994984552,
          "max": 0.6666666666666666,
          "p5": 0.004620331678174671,
          "p95": 0.6048748353096177,
          "count": 8
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.0026117626185800887,
          "median": 7.792579521045769e-05,
          "min": 0.0,
          "max": 0.01005056384462948,
          "p5": 0.0,
          "p95": 0.009743156705233945,
          "count": 8
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 4.0216769221998987e-05,
          "median": 5.231511216127649e-07,
          "min": 0.0,
          "max": 0.00031763779127385455,
          "p5": 2.2753535685562302e-10,
          "p95": 0.00020701229515742624,
          "count": 8
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 458.375,
          "median": 5.5,
          "min": 0.0,
          "max": 3247.0,
          "p5": 0.0,
          "p95": 2232.3499999999985,
          "count": 8
        }
      },
      "peers": {
        "adv": {
          "direction": "higher_is_better",
          "mean": 98267.20000000001,
          "median": 6900.0,
          "min": 0.0,
          "max": 685386.0,
          "p5": 0.0,
          "p95": 468836.0299999997,
          "count": 8
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 50.125,
          "median": 5.5,
          "min": 0.0,
          "max": 348.0,
          "p5": 0.0,
          "p95": 235.64999999999984,
          "count": 8
        },
        "volatility": {
          "direction": "lower_is_better",
          "mean": 1.0098442128408467,
          "median": 0.5579561459120679,
          "min": 0.32905943808332394,
          "max": 2.339194690768862,
          "p5": 0.3387850821813221,
          "p95": 2.3081333434264013,
          "count": 8
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.16985408293360155,
          "median": 0.042588765095614475,
          "min": 0.010698983624287645,
          "max": 0.6666666666666666,
          "p5": 0.013191870942434136,
          "p95": 0.6048748353096177,
          "count": 8
        },
        "spread_ticks": {
          "direction": "neutral",
          "mean": 4.188832712747423,
          "median": 1.6480061349693251,
          "min": 1.0,
          "max": 20.833333333333332,
          "p5": 1.0152173913043478,
          "p95": 14.679166666666656,
          "count": 8
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 4.023133316512198e-05,
          "median": 5.817319446145111e-07,
          "min": 0.0,
          "max": 0.00031763779127385455,
          "p5": 0.0,
          "p95": 0.00020701229515742624,
          "count": 8
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.001944746248547694,
          "median": 7.792579521045769e-05,
          "min": 0.0,
          "max": 0.01005056384462948,
          "p5": 0.0,
          "p95": 0.007619087549328027,
          "count": 8
        }
      }
    },
    "returns": [
      {
        "horizon": "1W",
        "stock": -0.03921568627451,
        "market": 0.010920997791815212,
        "sector": -0.01005025125628145,
        "peers": -0.01005025125628145
      },
      {
        "horizon": "1M",
        "stock": -2.220446049250313e-16,
        "market": -0.002212550735976593,
        "sector": -0.032409910658899976,
        "peers": -0.026045672343968818
      },
      {
        "horizon": "3M",
        "stock": 0.06521739130434545,
        "market": -0.003988583579804916,
        "sector": -0.07915560826899759,
        "peers": -0.03088483336753034
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
      "share_market": 0.474603719334263,
      "share_sector": 0.5021703944816686,
      "share_idio": 0.0232258861840686,
      "beta_market": -9.567527986696627,
      "beta_sector": 11.471644333406559,
      "driver_model": {
        "valid": true,
        "model_method": "ols_with_hmm_jump_regimes",
        "estimation_window_days": 77,
        "reporting_window_days": 63,
        "available_history_days": 77,
        "n_regimes": 2,
        "current_regime": 0,
        "current_regime_label": "Calm / Liquid",
        "current_regime_probability": 0.9998555607447667,
        "current_driver_mix": {
          "market_share": {
            "median": 0.474603719334263,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "47.5%",
            "display_range": null,
            "display_text": "47.5%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 77 trading days.",
            "kind": "share_pct",
            "value_pct": 47.5,
            "plain_english": "Market explains about 47.5% of price moves in the current state."
          },
          "sector_share": {
            "median": 0.5021703944816686,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "50.2%",
            "display_range": null,
            "display_text": "50.2%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 77 trading days.",
            "kind": "share_pct",
            "value_pct": 50.2,
            "plain_english": "Sector explains about 50.2% of price moves in the current state."
          },
          "company_share": {
            "median": 0.0232258861840686,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "2.3%",
            "display_range": null,
            "display_text": "2.3%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 77 trading days.",
            "kind": "share_pct",
            "value_pct": 2.3,
            "plain_english": "Company-specific explains about 2.3% of price moves in the current state."
          },
          "basis": "current_state"
        },
        "current_sensitivities": {
          "beta_market": {
            "median": -9.567527986696627,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "-9.57",
            "display_range": null,
            "display_text": "-9.57",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 77 trading days.",
            "kind": "beta",
            "strength_label": "Very high",
            "plain_english": "Very high market link: a 1% market move has lined up with about a 9.57% stock move in the opposite direction in this state. The multiplier is unusually large and comes from only 77 trading days of history.",
            "value_num": -9.57
          },
          "beta_stock_lag": {
            "median": -0.24069698262616868,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "-0.24",
            "display_range": null,
            "display_text": "-0.24",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 77 trading days.",
            "kind": "lag_beta",
            "value_num": -0.24
          },
          "beta_sector": {
            "median": 11.471644333406559,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "11.47",
            "display_range": null,
            "display_text": "11.47",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 77 trading days.",
            "kind": "beta",
            "strength_label": "Very high",
            "plain_english": "Very high sector link: a 1% sector move has lined up with about a 11.47% stock move in the same direction in this state. The multiplier is unusually large and comes from only 77 trading days of history.",
            "value_num": 11.47
          },
          "beta_market_lag": {
            "median": -16.275088374176164,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "-16.28",
            "display_range": null,
            "display_text": "-16.28",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 77 trading days.",
            "kind": "lag_beta",
            "value_num": -16.28
          },
          "beta_sector_lag": {
            "median": 6.3018998165683655,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "6.30",
            "display_range": null,
            "display_text": "6.30",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 77 trading days.",
            "kind": "lag_beta",
            "value_num": 6.3
          },
          "posterior_source": null,
          "intervals_collapsed": false,
          "confidence_label": "High, limited history",
          "confidence_note": "Based on 77 trading days relative to the 252-day target."
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
            "dominant_driver": "market",
            "dominant_driver_label": "Market",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.4793194847196389,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "47.9%",
              "display_range": null,
              "display_text": "47.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
              "kind": "share_pct",
              "value_pct": 47.9,
              "plain_english": "Market explains about 47.9% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.4793194847196389,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "47.9%",
                "display_range": null,
                "display_text": "47.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
                "kind": "share_pct",
                "value_pct": 47.9,
                "plain_english": "Market explains about 47.9% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.29843964110240034,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "29.8%",
                "display_range": null,
                "display_text": "29.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
                "kind": "share_pct",
                "value_pct": 29.8,
                "plain_english": "Sector explains about 29.8% of price moves in the current state."
              },
              "company_share": {
                "median": 0.22224087417796085,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "22.2%",
                "display_range": null,
                "display_text": "22.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
                "kind": "share_pct",
                "value_pct": 22.2,
                "plain_english": "Company-specific explains about 22.2% of price moves in the current state."
              }
            },
            "summary": "Jan: Mostly market-driven, though based on only 5 trading days."
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
              "median": 0.5656898926629684,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "56.6%",
              "display_range": null,
              "display_text": "56.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
              "kind": "share_pct",
              "value_pct": 56.6,
              "plain_english": "Company-specific explains about 56.6% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.26479317957873116,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "26.5%",
                "display_range": null,
                "display_text": "26.5%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
                "kind": "share_pct",
                "value_pct": 26.5,
                "plain_english": "Market explains about 26.5% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.16951692775830046,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "17.0%",
                "display_range": null,
                "display_text": "17.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
                "kind": "share_pct",
                "value_pct": 17.0,
                "plain_english": "Sector explains about 17.0% of price moves in the current state."
              },
              "company_share": {
                "median": 0.5656898926629684,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "56.6%",
                "display_range": null,
                "display_text": "56.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
                "kind": "share_pct",
                "value_pct": 56.6,
                "plain_english": "Company-specific explains about 56.6% of price moves in the current state."
              }
            },
            "summary": "Feb: Mostly company-driven."
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
              "median": 0.5379214653603349,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "53.8%",
              "display_range": null,
              "display_text": "53.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 53.8,
              "plain_english": "Company-specific explains about 53.8% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.22982068067655395,
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
                "median": 0.23225785396311116,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "23.2%",
                "display_range": null,
                "display_text": "23.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 23.2,
                "plain_english": "Sector explains about 23.2% of price moves in the current state."
              },
              "company_share": {
                "median": 0.5379214653603349,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "53.8%",
                "display_range": null,
                "display_text": "53.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 53.8,
                "plain_english": "Company-specific explains about 53.8% of price moves in the current state."
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
              "median": 0.5202476822091706,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "52.0%",
              "display_range": null,
              "display_text": "52.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 52.0,
              "plain_english": "Company-specific explains about 52.0% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.3442596667740503,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "34.4%",
                "display_range": null,
                "display_text": "34.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 34.4,
                "plain_english": "Market explains about 34.4% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.1354926510167791,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "13.5%",
                "display_range": null,
                "display_text": "13.5%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 13.5,
                "plain_english": "Sector explains about 13.5% of price moves in the current state."
              },
              "company_share": {
                "median": 0.5202476822091706,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "52.0%",
                "display_range": null,
                "display_text": "52.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 52.0,
                "plain_english": "Company-specific explains about 52.0% of price moves in the current state."
              }
            },
            "summary": "Apr: Mostly company-driven."
          },
          {
            "month_key": "2026-05",
            "month_label": "May 2026",
            "month_short_label": "May",
            "period_label": "2026-05-04 to 2026-05-18",
            "n_obs": 11,
            "partial_month": true,
            "dominant_driver": "company",
            "dominant_driver_label": "Company-specific",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.5500131851680864,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "55.0%",
              "display_range": null,
              "display_text": "55.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 11 trading days.",
              "kind": "share_pct",
              "value_pct": 55.0,
              "plain_english": "Company-specific explains about 55.0% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.0579765127055313,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "5.8%",
                "display_range": null,
                "display_text": "5.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 11 trading days.",
                "kind": "share_pct",
                "value_pct": 5.8,
                "plain_english": "Market explains about 5.8% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.3920103021263821,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "39.2%",
                "display_range": null,
                "display_text": "39.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 11 trading days.",
                "kind": "share_pct",
                "value_pct": 39.2,
                "plain_english": "Sector explains about 39.2% of price moves in the current state."
              },
              "company_share": {
                "median": 0.5500131851680864,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "55.0%",
                "display_range": null,
                "display_text": "55.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 11 trading days.",
                "kind": "share_pct",
                "value_pct": 55.0,
                "plain_english": "Company-specific explains about 55.0% of price moves in the current state."
              }
            },
            "summary": "May: Mostly company-driven."
          }
        ],
        "regimes": [
          {
            "id": 0,
            "label": "Calm / Liquid",
            "pct_time": 0.6455244872542459,
            "expected_duration_days": 3.0493132974861754,
            "current_probability": 0.9998555607447667,
            "n_days_effective": 49.70538551857694,
            "volatility": {
              "median": 0.015663507974277714,
              "low": 0.015663507974277714,
              "high": 0.015663507974277714
            },
            "volatility_label": "Calm / Liquid",
            "jump_probability": 0.12593283990598694,
            "jump_rate": 8.227179860255059e-32,
            "risk_score": 0.2,
            "metrics": {
              "rolling_vol_10d": 0.03266416729343883,
              "downside_vol_10d": 0.0171035375973182,
              "drawdown_21d": 0.07894367799497644,
              "amihud_stress": 1.2622529734849603,
              "spread_rel": 240.40921535119875,
              "spread_ticks": 1.149111864804512,
              "log_notional": 12.472479943413695,
              "log_trade_count": 4.252631473758134
            },
            "current_probability_display": null
          },
          {
            "id": 1,
            "label": "Jump / Tail Shock",
            "pct_time": 0.35447551274575406,
            "expected_duration_days": 1.7121964132341292,
            "current_probability": 0.00014443925523331206,
            "n_days_effective": 27.294614481423064,
            "volatility": {
              "median": 0.05388448377986384,
              "low": 0.05388448377986384,
              "high": 0.05388448377986384
            },
            "volatility_label": "Jump / Tail Shock",
            "jump_probability": 0.3482827749813147,
            "jump_rate": 0.1831863206349018,
            "risk_score": 0.8,
            "metrics": {
              "rolling_vol_10d": 0.037959835716413017,
              "downside_vol_10d": 0.020631521578985464,
              "drawdown_21d": 0.07234405587292819,
              "amihud_stress": 2.456095444498079,
              "spread_rel": 238.26863010827762,
              "spread_ticks": 1.1447818268695031,
              "log_notional": 13.067308230001998,
              "log_trade_count": 4.782537587551914
            },
            "current_probability_display": 0.0
          }
        ],
        "transitions": {
          "mean": [
            [
              0.6720573117808556,
              0.32794268821914446
            ],
            [
              0.5840451435773789,
              0.41595485642262114
            ]
          ],
          "low": [],
          "high": [],
          "counts": [
            [
              33.0,
              16.0
            ],
            [
              16.0,
              11.0
            ]
          ]
        },
        "current_state_is_transition": false,
        "state_probabilities": [
          {
            "id": 0,
            "label": "Calm / Liquid",
            "probability": 0.9998555607447667
          },
          {
            "id": 1,
            "label": "Jump / Tail Shock",
            "probability": 0.00014443925523331206
          }
        ],
        "jump_risk": {
          "current_probability": 0.1259649559650104,
          "current_score": 0.7380705802689843,
          "current_flag": false,
          "jump_threshold_score": 2.5,
          "method": "robust_residual_and_return_jump_overlay"
        },
        "model_selection": {
          "chosen": 2,
          "criterion": "bic_with_min_state_support",
          "bic": 3814.6970992333922,
          "loglik": -1709.7054029223534,
          "candidates": [
            {
              "k": 2,
              "valid": true,
              "reason": "ok",
              "bic": 3814.6970992333922,
              "loglik": -1709.7054029223534,
              "n_params": 91,
              "converged": true,
              "iterations": 9
            },
            {
              "k": 3,
              "valid": true,
              "reason": "ok",
              "bic": 3843.6942827125868,
              "loglik": -1617.7807618265354,
              "n_params": 140,
              "converged": true,
              "iterations": 21
            }
          ]
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
            "trade_date": "2026-05-05",
            "state": 0,
            "probabilities": [
              0.999615153357132,
              0.00038484664286800573
            ],
            "jump_probability": 0.1800311778565432,
            "jump_score": 0.9316206334312906
          },
          {
            "trade_date": "2026-05-06",
            "state": 0,
            "probabilities": [
              0.9999848701233158,
              1.5129876684204593e-05
            ],
            "jump_probability": 0.14041641997052168,
            "jump_score": 0.6744907594765952
          },
          {
            "trade_date": "2026-05-07",
            "state": 0,
            "probabilities": [
              0.9999773443413925,
              2.2655658607461793e-05
            ],
            "jump_probability": 0.13851661208222518,
            "jump_score": 0.6607256419362596
          },
          {
            "trade_date": "2026-05-08",
            "state": 0,
            "probabilities": [
              0.9918107933758858,
              0.008189206624114154
            ],
            "jump_probability": 0.1497095441639406,
            "jump_score": 0.7396687311315505
          },
          {
            "trade_date": "2026-05-11",
            "state": 0,
            "probabilities": [
              0.9999999998949494,
              1.050506880160083e-10
            ],
            "jump_probability": 0.09357845767311868,
            "jump_score": 0.27547454572895985
          },
          {
            "trade_date": "2026-05-12",
            "state": 0,
            "probabilities": [
              0.999998585883064,
              1.414116935959824e-06
            ],
            "jump_probability": 0.14041641997052168,
            "jump_score": 0.6744907594765952
          },
          {
            "trade_date": "2026-05-13",
            "state": 0,
            "probabilities": [
              0.9999999998832351,
              1.1676495512894186e-10
            ],
            "jump_probability": 0.13723637233691535,
            "jump_score": 0.6513600236437003
          },
          {
            "trade_date": "2026-05-14",
            "state": 0,
            "probabilities": [
              0.9999965293290564,
              3.4706709436227477e-06
            ],
            "jump_probability": 0.18867364167795841,
            "jump_score": 0.9816072791369211
          },
          {
            "trade_date": "2026-05-15",
            "state": 1,
            "probabilities": [
              1.4490402788767738e-14,
              0.9999999999999855
            ],
            "jump_probability": 0.43839136133492607,
            "jump_score": 2.0346146048902463
          },
          {
            "trade_date": "2026-05-18",
            "state": 0,
            "probabilities": [
              0.9998555607447667,
              0.00014443925523331206
            ],
            "jump_probability": 0.14947573971019962,
            "jump_score": 0.7380705802689843
          }
        ],
        "methodology": {
          "estimation_window_days": 77,
          "reporting_window_days": 63,
          "current_mix_method": "ols_last_5d",
          "monthly_history_method": "ols_per_month",
          "regime_inference": "hmm_jump_diffusion",
          "regime_feature_stack": "returns_volatility_shape_liquidity_activity_jump_score",
          "regime_scaling": "robust_median_iqr",
          "regime_model_selection": "bic_with_min_state_support",
          "jump_component": "robust_residual_and_return_jump_overlay",
          "distribution": "gaussian",
          "history_limited": true,
          "current_driver_mix_basis": "ols_recent_window",
          "sector_proxy_equals_market": false
        },
        "client_read": {
          "market_link_display": "-9.57",
          "sector_link_display": "11.47",
          "market_link_explainer": "Very high market link. A 1% market move has lined up with about a 9.57% stock move in the opposite direction in this state. This is a point estimate from 77 trading days.",
          "sector_link_explainer": "Very high sector link. A 1% sector move has lined up with about a 11.47% stock move in the same direction in this state. This is a point estimate from 77 trading days.",
          "stock_persistence_display": "-0.24",
          "point_estimate_note": "Point estimate only because the current state has 77 trading days.",
          "history_limited_note": "Read is based on 77 trading days versus the 252-day target."
        },
        "current_summary": {
          "regime_label": "Calm / Liquid",
          "dominant_driver": "sector",
          "dominant_driver_label": "Sector",
          "driver_share_pct": 50.2,
          "driver_share_display": "50.2%",
          "confidence_label": "High, limited history",
          "confidence_pct": 100.0,
          "display_confidence_pct": null,
          "confidence_note": "Based on 77 trading days relative to the 252-day target.",
          "history_days": 77,
          "history_limited": true,
          "volatility_label": "Calm / Liquid",
          "jump_risk_label": "Contained",
          "jump_risk_probability": 12.6,
          "jump_risk_score": 0.74,
          "jump_risk_note": "Jump risk is contained based on recent residual and return shocks.",
          "lead_signal_text": "No stable lead signal.",
          "state_term": "state",
          "stay_probability": 0.6720573117808556,
          "effective_days": 49.7,
          "persistence_note": "This state looks more persistent, with a typical run length of about 3.0 days.",
          "expected_duration_days": 3.0
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
          "month_key": "2026-01",
          "month_label": "January 2026",
          "month_short_label": "Jan",
          "period_label": "2026-01-26 to 2026-01-30",
          "n_obs": 5,
          "partial_month": true,
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "regime_label": null,
          "summary": "Jan: Mostly market-driven, though based on only 5 trading days.",
          "share_market": 0.4793194847196389,
          "share_sector": 0.29843964110240034,
          "share_company": 0.22224087417796085,
          "share_market_display": "47.9%",
          "share_sector_display": "29.8%",
          "share_company_display": "22.2%",
          "dominant_share_display": "47.9%"
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
          "summary": "Feb: Mostly company-driven.",
          "share_market": 0.26479317957873116,
          "share_sector": 0.16951692775830046,
          "share_company": 0.5656898926629684,
          "share_market_display": "26.5%",
          "share_sector_display": "17.0%",
          "share_company_display": "56.6%",
          "dominant_share_display": "56.6%"
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
          "share_market": 0.22982068067655395,
          "share_sector": 0.23225785396311116,
          "share_company": 0.5379214653603349,
          "share_market_display": "23.0%",
          "share_sector_display": "23.2%",
          "share_company_display": "53.8%",
          "dominant_share_display": "53.8%"
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
          "share_market": 0.3442596667740503,
          "share_sector": 0.1354926510167791,
          "share_company": 0.5202476822091706,
          "share_market_display": "34.4%",
          "share_sector_display": "13.5%",
          "share_company_display": "52.0%",
          "dominant_share_display": "52.0%"
        },
        {
          "month_key": "2026-05",
          "month_label": "May 2026",
          "month_short_label": "May",
          "period_label": "2026-05-04 to 2026-05-18",
          "n_obs": 11,
          "partial_month": true,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_label": null,
          "summary": "May: Mostly company-driven.",
          "share_market": 0.0579765127055313,
          "share_sector": 0.3920103021263821,
          "share_company": 0.5500131851680864,
          "share_market_display": "5.8%",
          "share_sector_display": "39.2%",
          "share_company_display": "55.0%",
          "dominant_share_display": "55.0%"
        }
      ],
      "regime": {
        "valid": true,
        "regime_method": "hmm_jump_diffusion",
        "n_regimes": 2,
        "current_regime_label": "Calm / Liquid",
        "current_regime_probability": 0.9998555607447667,
        "labels": [
          "Calm / Liquid",
          "Jump / Tail Shock"
        ],
        "pct_time": [
          0.6455244872542459,
          0.35447551274575406
        ],
        "current_regime": 0,
        "regimes": [
          {
            "id": 0,
            "label": "Calm / Liquid",
            "pct_time": 0.6455244872542459,
            "expected_duration_days": 3.0493132974861754,
            "current_probability": 0.9998555607447667,
            "n_days_effective": 49.70538551857694,
            "volatility": {
              "median": 0.015663507974277714,
              "low": 0.015663507974277714,
              "high": 0.015663507974277714
            },
            "volatility_label": "Calm / Liquid",
            "jump_probability": 0.12593283990598694,
            "jump_rate": 8.227179860255059e-32,
            "risk_score": 0.2,
            "metrics": {
              "rolling_vol_10d": 0.03266416729343883,
              "downside_vol_10d": 0.0171035375973182,
              "drawdown_21d": 0.07894367799497644,
              "amihud_stress": 1.2622529734849603,
              "spread_rel": 240.40921535119875,
              "spread_ticks": 1.149111864804512,
              "log_notional": 12.472479943413695,
              "log_trade_count": 4.252631473758134
            }
          },
          {
            "id": 1,
            "label": "Jump / Tail Shock",
            "pct_time": 0.35447551274575406,
            "expected_duration_days": 1.7121964132341292,
            "current_probability": 0.00014443925523331206,
            "n_days_effective": 27.294614481423064,
            "volatility": {
              "median": 0.05388448377986384,
              "low": 0.05388448377986384,
              "high": 0.05388448377986384
            },
            "volatility_label": "Jump / Tail Shock",
            "jump_probability": 0.3482827749813147,
            "jump_rate": 0.1831863206349018,
            "risk_score": 0.8,
            "metrics": {
              "rolling_vol_10d": 0.037959835716413017,
              "downside_vol_10d": 0.020631521578985464,
              "drawdown_21d": 0.07234405587292819,
              "amihud_stress": 2.456095444498079,
              "spread_rel": 238.26863010827762,
              "spread_ticks": 1.1447818268695031,
              "log_notional": 13.067308230001998,
              "log_trade_count": 4.782537587551914
            }
          }
        ],
        "transitions": [
          [
            0.6720573117808556,
            0.32794268821914446
          ],
          [
            0.5840451435773789,
            0.41595485642262114
          ]
        ]
      }
    },
    "order_book": {
      "bids": [
        {
          "level": 1,
          "price": 0.24,
          "quantity": 1403700.0,
          "value": 336888.0
        },
        {
          "level": 2,
          "price": 0.235,
          "quantity": 826100.0,
          "value": 194133.5
        },
        {
          "level": 3,
          "price": 0.23,
          "quantity": 145100.0,
          "value": 33373.0
        },
        {
          "level": 4,
          "price": 0.225,
          "quantity": 251000.0,
          "value": 56475.0
        },
        {
          "level": 5,
          "price": 0.22,
          "quantity": 345400.0,
          "value": 75988.0
        },
        {
          "level": 6,
          "price": 0.215,
          "quantity": 305000.0,
          "value": 65575.0
        },
        {
          "level": 7,
          "price": 0.21,
          "quantity": 5000.0,
          "value": 1050.0
        },
        {
          "level": 8,
          "price": 0.2,
          "quantity": 50000.0,
          "value": 10000.0
        }
      ],
      "asks": [
        {
          "level": 1,
          "price": 0.245,
          "quantity": 186400.0,
          "value": 45668.0
        },
        {
          "level": 2,
          "price": 0.25,
          "quantity": 458700.0,
          "value": 114675.0
        },
        {
          "level": 3,
          "price": 0.255,
          "quantity": 441000.0,
          "value": 112455.0
        },
        {
          "level": 4,
          "price": 0.26,
          "quantity": 565800.0,
          "value": 147108.0
        },
        {
          "level": 5,
          "price": 0.265,
          "quantity": 880500.0,
          "value": 233332.5
        },
        {
          "level": 6,
          "price": 0.27,
          "quantity": 734700.0,
          "value": 198369.0
        },
        {
          "level": 7,
          "price": 0.275,
          "quantity": 160000.0,
          "value": 44000.0
        },
        {
          "level": 8,
          "price": 0.28,
          "quantity": 190800.0,
          "value": 53424.00000000001
        },
        {
          "level": 9,
          "price": 0.285,
          "quantity": 275000.0,
          "value": 78375.0
        },
        {
          "level": 10,
          "price": 0.29,
          "quantity": 348000.0,
          "value": 100920.0
        },
        {
          "level": 11,
          "price": 0.295,
          "quantity": 367200.0,
          "value": 108324.0
        },
        {
          "level": 12,
          "price": 0.3,
          "quantity": 3531000.0,
          "value": 1059300.0
        },
        {
          "level": 13,
          "price": 0.305,
          "quantity": 222000.0,
          "value": 67710.0
        },
        {
          "level": 14,
          "price": 0.31,
          "quantity": 50000.0,
          "value": 15500.0
        },
        {
          "level": 15,
          "price": 0.33,
          "quantity": 8000.0,
          "value": 2640.0
        },
        {
          "level": 16,
          "price": 0.335,
          "quantity": 10000.0,
          "value": 3350.0
        },
        {
          "level": 17,
          "price": 0.34,
          "quantity": 2000.0,
          "value": 680.0
        },
        {
          "level": 18,
          "price": 0.35,
          "quantity": 137000.0,
          "value": 47950.0
        },
        {
          "level": 19,
          "price": 0.355,
          "quantity": 10000.0,
          "value": 3550.0
        }
      ]
    },
    "execution_dynamic": {
      "snapshot": {
        "valid": true,
        "snapshot_time": "2026-05-18 08:59:59.118600000",
        "snapshot_basis": "last_continuous_session_snapshot",
        "snapshot_label": "final continuous-session displayed book before close",
        "snapshot_note": "Final continuous-session displayed book before close",
        "snapshot_mic": "XSES",
        "mid_price": 0.2425,
        "spread_pct": 0.020618556701030948,
        "spread_ticks": 1.0,
        "tick_size": 0.005,
        "displayed_levels_per_side": 100,
        "bid_depth_notional_displayed": 773482.5,
        "ask_depth_notional_displayed": 2437330.5,
        "bid_depth_notional_top10": 773482.5,
        "ask_depth_notional_top10": 2437330.5,
        "bid_ask_depth_ratio": 0.3173
      },
      "historical_trade_scenarios": {
        "valid": true,
        "requested_lookback_calendar_days": 365,
        "lookback_calendar_days": 365,
        "effective_calendar_days": 117,
        "history_limited": true,
        "trade_days_used": 79,
        "n_trades_used": 12364,
        "first_trade_date": "2026-01-22",
        "last_trade_date": "2026-05-18",
        "window_label": "Jan 22, 2026 to May 18, 2026",
        "window_short_label": "Jan 22-May 18",
        "trade_days_label": "79 trading days",
        "trade_count_label": "12,364 trades",
        "window_detail_label": "79 trading days • 12,364 trades",
        "history_note": "Trade-size percentiles use available history from Jan 22, 2026 to May 18, 2026 (79 trading days • 12,364 trades), not a full year.",
        "scenarios": [
          {
            "key": "p90",
            "label": "90th percentile trade",
            "quantile": 0.9,
            "trade_notional": 10800.0,
            "impact_pct": -0.010308999999999999,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 1.4,
            "pct_of_adv": 3.92
          },
          {
            "key": "p95",
            "label": "95th percentile trade",
            "quantile": 0.95,
            "trade_notional": 14400.0,
            "impact_pct": -0.010308999999999999,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 1.86,
            "pct_of_adv": 5.23
          },
          {
            "key": "p99_99",
            "label": "99.99th percentile trade",
            "quantile": 0.9999,
            "trade_notional": 166009.34,
            "impact_pct": -0.010308999999999999,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 21.46,
            "pct_of_adv": 60.26
          }
        ]
      },
      "l3_sell_order_scenarios": {
        "valid": true,
        "trade_date": "2026-05-18",
        "selection_method": "largest_observed_ask_orders_during_day",
        "orders": [
          {
            "rank": 1,
            "order_id": "8146327279925059584",
            "timestamp": "2026-05-17 22:59:01.308200000",
            "local_timestamp": "2026-05-18 06:59:01",
            "posted_price": 0.3,
            "size_shares": 3284000.0,
            "notional": 985200.0,
            "impact_pct": -0.04253,
            "filled_pct": 78.5,
            "levels_consumed": 8,
            "pct_of_bid_depth": 127.37,
            "price_vs_mid_pct": 23.711,
            "executed_event_count": 0,
            "event_count": 2
          },
          {
            "rank": 2,
            "order_id": "8149098049227426816",
            "timestamp": "2026-05-17 22:59:01.308200000",
            "local_timestamp": "2026-05-18 06:59:01",
            "posted_price": 0.255,
            "size_shares": 275800.0,
            "notional": 70329.0,
            "impact_pct": -0.010308999999999999,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 9.09,
            "price_vs_mid_pct": 5.155,
            "executed_event_count": 0,
            "event_count": 4
          },
          {
            "rank": 3,
            "order_id": "8149098049227101184",
            "timestamp": "2026-05-17 22:59:01.308200000",
            "local_timestamp": "2026-05-18 06:59:01",
            "posted_price": 0.27,
            "size_shares": 250000.0,
            "notional": 67500.0,
            "impact_pct": -0.010308999999999999,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 8.73,
            "price_vs_mid_pct": 11.34,
            "executed_event_count": 0,
            "event_count": 2
          }
        ]
      },
      "intraday_liquidity_profile": {
        "valid": true,
        "trade_date": "2026-05-18",
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
            "spread_pct": 0.02020202020202022,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 604841.0,
            "ask_depth_notional": 2400868.0,
            "mid_price": 0.2475
          },
          {
            "bucket": "09:30",
            "spread_pct": 0.02020202020202022,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 590741.0,
            "ask_depth_notional": 2400868.0,
            "mid_price": 0.2475
          },
          {
            "bucket": "10:00",
            "spread_pct": 0.020618556701030948,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 588285.0,
            "ask_depth_notional": 2441487.0,
            "mid_price": 0.2425
          },
          {
            "bucket": "10:30",
            "spread_pct": 0.020618556701030948,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 588510.0,
            "ask_depth_notional": 2461932.0,
            "mid_price": 0.2425
          },
          {
            "bucket": "11:00",
            "spread_pct": 0.020618556701030948,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 598510.0,
            "ask_depth_notional": 2474261.5,
            "mid_price": 0.2425
          },
          {
            "bucket": "11:30",
            "spread_pct": 0.020618556701030948,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 646510.0,
            "ask_depth_notional": 2471054.0,
            "mid_price": 0.2425
          },
          {
            "bucket": "13:00",
            "spread_pct": 0.020618556701030948,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 785890.0,
            "ask_depth_notional": 2484344.0,
            "mid_price": 0.2425
          },
          {
            "bucket": "13:30",
            "spread_pct": 0.020618556701030948,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 788240.0,
            "ask_depth_notional": 2479321.5,
            "mid_price": 0.2425
          },
          {
            "bucket": "14:00",
            "spread_pct": 0.020618556701030948,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 788240.0,
            "ask_depth_notional": 2474466.5,
            "mid_price": 0.2425
          },
          {
            "bucket": "14:30",
            "spread_pct": 0.020618556701030948,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 789463.5,
            "ask_depth_notional": 2471440.0,
            "mid_price": 0.2425
          },
          {
            "bucket": "15:00",
            "spread_pct": 0.020618556701030948,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 791359.5,
            "ask_depth_notional": 2466981.0,
            "mid_price": 0.2425
          },
          {
            "bucket": "15:30",
            "spread_pct": 0.020618556701030948,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 786559.5,
            "ask_depth_notional": 2485171.0,
            "mid_price": 0.2425
          },
          {
            "bucket": "16:00",
            "spread_pct": 0.020618556701030948,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 789103.5,
            "ask_depth_notional": 2494521.0,
            "mid_price": 0.2425
          },
          {
            "bucket": "16:30",
            "spread_pct": 0.020618556701030948,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 773482.5,
            "ask_depth_notional": 2437330.5,
            "mid_price": 0.2425
          }
        ],
        "summary": {
          "median_spread_pct": 0.020618556701030948,
          "median_spread_ticks": 1.0000000000000009,
          "median_bid_depth_notional": 779686.25,
          "median_ask_depth_notional": 2471247.0,
          "tightest_bucket": "09:00",
          "widest_bucket": "10:00",
          "deepest_bid_bucket": "15:00",
          "thinnest_bid_bucket": "10:00"
        }
      }
    },
    "peer_capacity": {
      "bx_ticket_pct_adv_50k": 18.1,
      "peers": [
        {
          "ticker": "ITS",
          "pct": 97.5
        },
        {
          "ticker": "J03",
          "pct": 436.8
        },
        {
          "ticker": "42F",
          "pct": 602.1
        },
        {
          "ticker": "U77",
          "pct": 20047.1
        },
        {
          "ticker": "NXR",
          "pct": 21653.2
        },
        {
          "ticker": "LVR",
          "pct": 22126.3
        },
        {
          "ticker": "532",
          "pct": 197413.9
        },
        {
          "ticker": "KUX",
          "pct": null
        }
      ]
    },
    "trader_composition": {
      "primary_period": "3m",
      "periods": {
        "1d": {
          "valid": true,
          "currency": "SGD",
          "n_trades": 15,
          "n_runs": 0,
          "n_trade_days": 1,
          "first_trade_date": "2026-05-18",
          "last_trade_date": "2026-05-18",
          "period_days": 0,
          "method": {
            "key": "legacy_size_threshold",
            "name": "Trade-size buckets",
            "version": "legacy",
            "unit_of_classification": null
          },
          "thresholds": {
            "retail_max": 13500.0,
            "instit_min": 67500.0
          },
          "composition": {
            "retail_pct": 0.6666666666666666,
            "mixed_pct": 0.3333333333333333,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.21733895243829018,
            "mixed_qty_pct": 0.7826610475617098,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.21684580652894875,
            "mixed_notional_pct": 0.7831541934710513,
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
              "retail": 10,
              "mixed": 5,
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
            "avg": 10845.033333333333,
            "median": 4900.0
          },
          "run_size": {
            "avg": null,
            "median": null,
            "avg_length": null
          },
          "recent_trades": [],
          "peer_comparison": [
            {
              "ticker": "TKU",
              "currency": "SGD",
              "is_target": true,
              "retail_pct": 0.6666666666666666,
              "mixed_pct": 0.3333333333333333,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.21733895243829018,
              "mixed_qty_pct": 0.7826610475617098,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.21684580652894875,
              "mixed_notional_pct": 0.7831541934710513,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 10845.033333333333,
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
              "ticker": "U77",
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
              "avg_trade_size": 1378.8999999999999,
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
              "ticker": "NXR",
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
              "avg_trade_size": 7890.0,
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
              "ticker": "LVR",
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
              "avg_trade_size": 4450.0,
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
              "ticker": "KUX",
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
              "avg_trade_size": 369.55000000000007,
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
              "ticker": "ITS",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.9790575916230366,
              "mixed_pct": 0.020942408376963352,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.5962674961119752,
              "mixed_qty_pct": 0.4037325038880249,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.5967430827978991,
              "mixed_notional_pct": 0.4032569172021009,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 1606.890052356021,
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
              "ticker": "J03",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.8421052631578947,
              "mixed_pct": 0.15789473684210525,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.4583190118545279,
              "mixed_qty_pct": 0.541680988145472,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.46147914632476006,
              "mixed_notional_pct": 0.5385208536752399,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 6365.952631578948,
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
        "1w": {
          "valid": true,
          "currency": "SGD",
          "n_trades": 187,
          "n_runs": 0,
          "n_trade_days": 5,
          "first_trade_date": "2026-05-12",
          "last_trade_date": "2026-05-18",
          "period_days": 6,
          "method": {
            "key": "legacy_size_threshold",
            "name": "Trade-size buckets",
            "version": "legacy",
            "unit_of_classification": null
          },
          "thresholds": {
            "retail_max": 13500.0,
            "instit_min": 67500.0
          },
          "composition": {
            "retail_pct": 0.7540106951871658,
            "mixed_pct": 0.22459893048128343,
            "instit_pct": 0.0213903743315508,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.3056249206416388,
            "mixed_qty_pct": 0.5255957167647183,
            "instit_qty_pct": 0.16877936259364287,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.30605662901366526,
            "mixed_notional_pct": 0.5234184692212479,
            "instit_notional_pct": 0.17052490176508683,
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
              "retail": 141,
              "mixed": 42,
              "institutional": 4,
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
            "avg": 12894.034759358288,
            "median": 6783.0
          },
          "run_size": {
            "avg": null,
            "median": null,
            "avg_length": null
          },
          "recent_trades": [],
          "peer_comparison": [
            {
              "ticker": "TKU",
              "currency": "SGD",
              "is_target": true,
              "retail_pct": 0.7540106951871658,
              "mixed_pct": 0.22459893048128343,
              "instit_pct": 0.0213903743315508,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.3056249206416388,
              "mixed_qty_pct": 0.5255957167647183,
              "instit_qty_pct": 0.16877936259364287,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.30605662901366526,
              "mixed_notional_pct": 0.5234184692212479,
              "instit_notional_pct": 0.17052490176508683,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 12894.034759358288,
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
              "ticker": "LVR",
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
              "avg_trade_size": 3570.0,
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
              "ticker": "KUX",
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
              "avg_trade_size": 369.55000000000007,
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
              "ticker": "U77",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.9743589743589743,
              "mixed_pct": 0.02564102564102564,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.7288693743139407,
              "mixed_qty_pct": 0.2711306256860593,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.7290365872164006,
              "mixed_notional_pct": 0.2709634127835993,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 1841.823076923077,
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
              "ticker": "ITS",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.9419504643962848,
              "mixed_pct": 0.05727554179566564,
              "instit_pct": 0.0007739938080495357,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.4142279504675259,
              "mixed_qty_pct": 0.5643669446550417,
              "instit_qty_pct": 0.0214051048774324,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.4154286866911637,
              "mixed_notional_pct": 0.5636911021956038,
              "instit_notional_pct": 0.020880211113232492,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 3014.09713622291,
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
              "ticker": "NXR",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.9375,
              "mixed_pct": 0.0625,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.7241379310344828,
              "mixed_qty_pct": 0.27586206896551724,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.7256957897732533,
              "mixed_notional_pct": 0.2743042102267467,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 9113.96875,
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
              "ticker": "J03",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.9361465852304275,
              "mixed_pct": 0.06385341476957246,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.49756003163025003,
              "mixed_qty_pct": 0.5024399683697499,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.5002797399962824,
              "mixed_notional_pct": 0.49972026000371766,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 2729.888784008884,
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
              "ticker": "42F",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.8898305084745762,
              "mixed_pct": 0.1016949152542373,
              "instit_pct": 0.00847457627118644,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.5206789641993604,
              "mixed_qty_pct": 0.3844246418636092,
              "instit_qty_pct": 0.0948963939370304,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.517114446179957,
              "mixed_notional_pct": 0.3855992301991359,
              "instit_notional_pct": 0.09728632362090714,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 6867.723728813558,
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
          "currency": "SGD",
          "n_trades": 890,
          "n_runs": 0,
          "n_trade_days": 21,
          "first_trade_date": "2026-04-17",
          "last_trade_date": "2026-05-18",
          "period_days": 31,
          "method": {
            "key": "legacy_size_threshold",
            "name": "Trade-size buckets",
            "version": "legacy",
            "unit_of_classification": null
          },
          "thresholds": {
            "retail_max": 13500.0,
            "instit_min": 67500.0
          },
          "composition": {
            "retail_pct": 0.8258426966292135,
            "mixed_pct": 0.15393258426966291,
            "instit_pct": 0.020224719101123594,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.29494982962351507,
            "mixed_qty_pct": 0.48438905820220673,
            "instit_qty_pct": 0.22066111217427814,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.2929308720662217,
            "mixed_notional_pct": 0.48400540537030934,
            "instit_notional_pct": 0.22306372256346893,
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
              "retail": 735,
              "mixed": 137,
              "institutional": 18,
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
            "avg": 9950.5702247191,
            "median": 2919.0
          },
          "run_size": {
            "avg": null,
            "median": null,
            "avg_length": null
          },
          "recent_trades": [],
          "peer_comparison": [
            {
              "ticker": "TKU",
              "currency": "SGD",
              "is_target": true,
              "retail_pct": 0.8258426966292135,
              "mixed_pct": 0.15393258426966291,
              "instit_pct": 0.020224719101123594,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.29494982962351507,
              "mixed_qty_pct": 0.48438905820220673,
              "instit_qty_pct": 0.22066111217427814,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.2929308720662217,
              "mixed_notional_pct": 0.48400540537030934,
              "instit_notional_pct": 0.22306372256346893,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 9950.5702247191,
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
              "ticker": "532",
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
              "avg_trade_size": 359.43730158730165,
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
              "ticker": "KUX",
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
              "avg_trade_size": 487.45882352941175,
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
              "ticker": "U77",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.9896907216494846,
              "mixed_pct": 0.010309278350515464,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.8912373403786878,
              "mixed_qty_pct": 0.1087626596213122,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.8919765522584713,
              "mixed_notional_pct": 0.10802344774152874,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 1857.5195876288662,
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
              "ticker": "NXR",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.9807692307692307,
              "mixed_pct": 0.019230769230769232,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.8408150270614454,
              "mixed_qty_pct": 0.1591849729385546,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.8372197126927929,
              "mixed_notional_pct": 0.1627802873072071,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 4725.576923076923,
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
              "ticker": "LVR",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.9565217391304348,
              "mixed_pct": 0.043478260869565216,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.7763318422122815,
              "mixed_qty_pct": 0.2236681577877186,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.7718473388269953,
              "mixed_notional_pct": 0.22815266117300476,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 3178.014492753623,
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
              "ticker": "ITS",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.9339870183676288,
              "mixed_pct": 0.06048888275100124,
              "instit_pct": 0.005524098881369977,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.3640148249959283,
              "mixed_qty_pct": 0.4781776218831558,
              "instit_qty_pct": 0.15780755312091588,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.3653774034486167,
              "mixed_notional_pct": 0.4761345784442376,
              "instit_notional_pct": 0.1584880181071457,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 3528.2315978456013,
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
              "ticker": "J03",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.9302325581395349,
              "mixed_pct": 0.06976744186046512,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.5504867098114258,
              "mixed_qty_pct": 0.4495132901885743,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.5466166871235352,
              "mixed_notional_pct": 0.4533833128764649,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 3439.9639534883727,
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
              "ticker": "42F",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.8697916666666666,
              "mixed_pct": 0.12239583333333333,
              "instit_pct": 0.0078125,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.4172751332111084,
              "mixed_qty_pct": 0.4637329966249899,
              "instit_qty_pct": 0.11899187016390171,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.41961075238212475,
              "mixed_notional_pct": 0.46037481402503655,
              "instit_notional_pct": 0.12001443359283871,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 6343.347265625001,
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
          "currency": "SGD",
          "n_trades": 3070,
          "n_runs": 0,
          "n_trade_days": 63,
          "first_trade_date": "2026-02-13",
          "last_trade_date": "2026-05-18",
          "period_days": 94,
          "method": {
            "key": "legacy_size_threshold",
            "name": "Trade-size buckets",
            "version": "legacy",
            "unit_of_classification": null
          },
          "thresholds": {
            "retail_max": 13500.0,
            "instit_min": 67500.0
          },
          "composition": {
            "retail_pct": 0.8762214983713354,
            "mixed_pct": 0.11270358306188925,
            "instit_pct": 0.011074918566775244,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.35977857281426373,
            "mixed_qty_pct": 0.47427172201594386,
            "instit_qty_pct": 0.16594970516979243,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.35545898023384553,
            "mixed_notional_pct": 0.47538083597981956,
            "instit_notional_pct": 0.16916018378633488,
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
              "retail": 2690,
              "mixed": 346,
              "institutional": 34,
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
            "avg": 7028.094625407166,
            "median": 1980.0
          },
          "run_size": {
            "avg": null,
            "median": null,
            "avg_length": null
          },
          "recent_trades": [],
          "peer_comparison": [
            {
              "ticker": "TKU",
              "currency": "SGD",
              "is_target": true,
              "retail_pct": 0.8762214983713354,
              "mixed_pct": 0.11270358306188925,
              "instit_pct": 0.011074918566775244,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.35977857281426373,
              "mixed_qty_pct": 0.47427172201594386,
              "instit_qty_pct": 0.16594970516979243,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.35545898023384553,
              "mixed_notional_pct": 0.47538083597981956,
              "instit_notional_pct": 0.16916018378633488,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 7028.094625407166,
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
              "ticker": "532",
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
              "avg_trade_size": 421.9048109965636,
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
              "ticker": "KUX",
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
              "avg_trade_size": 436.3714285714286,
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
              "ticker": "U77",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.9928952042628775,
              "mixed_pct": 0.007104795737122558,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.8865252482822767,
              "mixed_qty_pct": 0.11347475171772331,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.8866170393254122,
              "mixed_notional_pct": 0.11338296067458783,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 1200.6120781527532,
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
              "ticker": "NXR",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.9807692307692307,
              "mixed_pct": 0.009615384615384616,
              "instit_pct": 0.009615384615384616,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.38583815028901736,
              "mixed_qty_pct": 0.036127167630057806,
              "instit_qty_pct": 0.5780346820809249,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.39226503398796264,
              "mixed_notional_pct": 0.03846423835519224,
              "instit_notional_pct": 0.5692707276568452,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 9999.298076923076,
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
              "ticker": "J03",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.9354434346599811,
              "mixed_pct": 0.0645565653400188,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.6078434790009398,
              "mixed_qty_pct": 0.3921565209990602,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.5908495771570178,
              "mixed_notional_pct": 0.40915042284298225,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 3506.3797555625197,
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
              "ticker": "LVR",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.9295774647887324,
              "mixed_pct": 0.07042253521126761,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.5798561151079137,
              "mixed_qty_pct": 0.4201438848920863,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.5845562751272454,
              "mixed_notional_pct": 0.41544372487275466,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 4053.66338028169,
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
              "ticker": "ITS",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.9234078652366237,
              "mixed_pct": 0.06968429982427438,
              "instit_pct": 0.006907834939101982,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.36693459753931335,
              "mixed_qty_pct": 0.463771409221337,
              "instit_qty_pct": 0.1692939932393496,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.36740425908304436,
              "mixed_notional_pct": 0.46270991258908495,
              "instit_notional_pct": 0.16988582832787066,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 4182.320941646974,
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
              "ticker": "42F",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.8991596638655462,
              "mixed_pct": 0.09423769507803122,
              "instit_pct": 0.006602641056422569,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.46507313824720276,
              "mixed_qty_pct": 0.40033847652735044,
              "instit_qty_pct": 0.13458838522544683,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.45880671552856317,
              "mixed_notional_pct": 0.4053436546706599,
              "instit_notional_pct": 0.1358496298007769,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 5528.316926770708,
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
      "currency": "SGD",
      "n_trades": 3070,
      "n_runs": 0,
      "n_trade_days": 63,
      "first_trade_date": "2026-02-13",
      "last_trade_date": "2026-05-18",
      "period_days": 94,
      "method": {
        "key": "legacy_size_threshold",
        "name": "Trade-size buckets",
        "version": "legacy",
        "unit_of_classification": null
      },
      "thresholds": {
        "retail_max": 13500.0,
        "instit_min": 67500.0
      },
      "composition": {
        "retail_pct": 0.8762214983713354,
        "mixed_pct": 0.11270358306188925,
        "instit_pct": 0.011074918566775244,
        "ambiguous_pct": null,
        "unobservable_pct": null,
        "unclear_pct": null,
        "retail_qty_pct": null,
        "mixed_qty_pct": null,
        "instit_qty_pct": null,
        "ambiguous_qty_pct": null,
        "unobservable_qty_pct": null,
        "unclear_qty_pct": null,
        "retail_notional_pct": 0.35545898023384553,
        "mixed_notional_pct": 0.47538083597981956,
        "instit_notional_pct": 0.16916018378633488,
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
        "avg": 7028.094625407166,
        "median": 1980.0
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
            "n_trades": 457,
            "n_runs": 0,
            "retail_pct": 0.8008752735229759,
            "mixed_pct": 0.175054704595186,
            "instit_pct": 0.024070021881838075,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "avg_trade_size": 11652.30306345733,
            "avg_run_notional": null,
            "retail_qty_pct": 0.2837093282744054,
            "mixed_qty_pct": 0.49299220612901223,
            "instit_qty_pct": 0.22329846559658237,
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
            "total_quantity": 20926700.0
          },
          {
            "month": "2026-04",
            "n_trades": 913,
            "n_runs": 0,
            "retail_pct": 0.8499452354874042,
            "mixed_pct": 0.13143483023001096,
            "instit_pct": 0.018619934282584884,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "avg_trade_size": 8334.989594742607,
            "avg_run_notional": null,
            "retail_qty_pct": 0.27906226883902663,
            "mixed_qty_pct": 0.48092862697494454,
            "instit_qty_pct": 0.24000910418602886,
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
            "total_quantity": 31633800.0
          },
          {
            "month": "2026-03",
            "n_trades": 1026,
            "n_runs": 0,
            "retail_pct": 0.928849902534113,
            "mixed_pct": 0.06920077972709551,
            "instit_pct": 0.001949317738791423,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "avg_trade_size": 4442.360623781677,
            "avg_run_notional": null,
            "retail_qty_pct": 0.5525152116368385,
            "mixed_qty_pct": 0.4064222944197647,
            "instit_qty_pct": 0.0410624939433969,
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
            "total_quantity": 19606700.0
          },
          {
            "month": "2026-02",
            "n_trades": 2084,
            "n_runs": 0,
            "retail_pct": 0.9021113243761996,
            "mixed_pct": 0.09213051823416507,
            "instit_pct": 0.005758157389635317,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "avg_trade_size": 5392.230326295586,
            "avg_run_notional": null,
            "retail_qty_pct": 0.4015510527645414,
            "mixed_qty_pct": 0.4952392567491049,
            "instit_qty_pct": 0.1032096904863537,
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
            "total_quantity": 45917200.0
          },
          {
            "month": "2026-01",
            "n_trades": 2477,
            "n_runs": 0,
            "retail_pct": 0.8389180460234155,
            "mixed_pct": 0.14937424303593055,
            "instit_pct": 0.011707710940654016,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "avg_trade_size": 7226.47779572063,
            "avg_run_notional": null,
            "retail_qty_pct": 0.27654494081056014,
            "mixed_qty_pct": 0.5780789376207284,
            "instit_qty_pct": 0.1453761215687115,
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
            "total_quantity": 65332600.0
          }
        ]
      },
      "peer_comparison": [
        {
          "ticker": "TKU",
          "currency": "SGD",
          "is_target": true,
          "retail_pct": 0.8762214983713354,
          "mixed_pct": 0.11270358306188925,
          "instit_pct": 0.011074918566775244,
          "ambiguous_pct": null,
          "unobservable_pct": null,
          "unclear_pct": null,
          "retail_qty_pct": 0.35977857281426373,
          "mixed_qty_pct": 0.47427172201594386,
          "instit_qty_pct": 0.16594970516979243,
          "ambiguous_qty_pct": null,
          "unobservable_qty_pct": null,
          "unclear_qty_pct": null,
          "retail_notional_pct": 0.35545898023384553,
          "mixed_notional_pct": 0.47538083597981956,
          "instit_notional_pct": 0.16916018378633488,
          "ambiguous_notional_pct": null,
          "unobservable_notional_pct": null,
          "unclear_notional_pct": null,
          "run_retail_pct": null,
          "run_mixed_pct": null,
          "run_instit_pct": null,
          "run_unclear_pct": null,
          "avg_trade_size": 7028.094625407166,
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
          "ticker": "532",
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
          "avg_trade_size": 421.9048109965636,
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
          "ticker": "KUX",
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
          "avg_trade_size": 436.3714285714286,
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
          "ticker": "U77",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.9928952042628775,
          "mixed_pct": 0.007104795737122558,
          "instit_pct": 0.0,
          "ambiguous_pct": null,
          "unobservable_pct": null,
          "unclear_pct": null,
          "retail_qty_pct": 0.8865252482822767,
          "mixed_qty_pct": 0.11347475171772331,
          "instit_qty_pct": 0.0,
          "ambiguous_qty_pct": null,
          "unobservable_qty_pct": null,
          "unclear_qty_pct": null,
          "retail_notional_pct": 0.8866170393254122,
          "mixed_notional_pct": 0.11338296067458783,
          "instit_notional_pct": 0.0,
          "ambiguous_notional_pct": null,
          "unobservable_notional_pct": null,
          "unclear_notional_pct": null,
          "run_retail_pct": null,
          "run_mixed_pct": null,
          "run_instit_pct": null,
          "run_unclear_pct": null,
          "avg_trade_size": 1200.6120781527532,
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
          "ticker": "NXR",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.9807692307692307,
          "mixed_pct": 0.009615384615384616,
          "instit_pct": 0.009615384615384616,
          "ambiguous_pct": null,
          "unobservable_pct": null,
          "unclear_pct": null,
          "retail_qty_pct": 0.38583815028901736,
          "mixed_qty_pct": 0.036127167630057806,
          "instit_qty_pct": 0.5780346820809249,
          "ambiguous_qty_pct": null,
          "unobservable_qty_pct": null,
          "unclear_qty_pct": null,
          "retail_notional_pct": 0.39226503398796264,
          "mixed_notional_pct": 0.03846423835519224,
          "instit_notional_pct": 0.5692707276568452,
          "ambiguous_notional_pct": null,
          "unobservable_notional_pct": null,
          "unclear_notional_pct": null,
          "run_retail_pct": null,
          "run_mixed_pct": null,
          "run_instit_pct": null,
          "run_unclear_pct": null,
          "avg_trade_size": 9999.298076923076,
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
          "ticker": "J03",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.9354434346599811,
          "mixed_pct": 0.0645565653400188,
          "instit_pct": 0.0,
          "ambiguous_pct": null,
          "unobservable_pct": null,
          "unclear_pct": null,
          "retail_qty_pct": 0.6078434790009398,
          "mixed_qty_pct": 0.3921565209990602,
          "instit_qty_pct": 0.0,
          "ambiguous_qty_pct": null,
          "unobservable_qty_pct": null,
          "unclear_qty_pct": null,
          "retail_notional_pct": 0.5908495771570178,
          "mixed_notional_pct": 0.40915042284298225,
          "instit_notional_pct": 0.0,
          "ambiguous_notional_pct": null,
          "unobservable_notional_pct": null,
          "unclear_notional_pct": null,
          "run_retail_pct": null,
          "run_mixed_pct": null,
          "run_instit_pct": null,
          "run_unclear_pct": null,
          "avg_trade_size": 3506.3797555625197,
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
          "ticker": "LVR",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.9295774647887324,
          "mixed_pct": 0.07042253521126761,
          "instit_pct": 0.0,
          "ambiguous_pct": null,
          "unobservable_pct": null,
          "unclear_pct": null,
          "retail_qty_pct": 0.5798561151079137,
          "mixed_qty_pct": 0.4201438848920863,
          "instit_qty_pct": 0.0,
          "ambiguous_qty_pct": null,
          "unobservable_qty_pct": null,
          "unclear_qty_pct": null,
          "retail_notional_pct": 0.5845562751272454,
          "mixed_notional_pct": 0.41544372487275466,
          "instit_notional_pct": 0.0,
          "ambiguous_notional_pct": null,
          "unobservable_notional_pct": null,
          "unclear_notional_pct": null,
          "run_retail_pct": null,
          "run_mixed_pct": null,
          "run_instit_pct": null,
          "run_unclear_pct": null,
          "avg_trade_size": 4053.66338028169,
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
          "ticker": "ITS",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.9234078652366237,
          "mixed_pct": 0.06968429982427438,
          "instit_pct": 0.006907834939101982,
          "ambiguous_pct": null,
          "unobservable_pct": null,
          "unclear_pct": null,
          "retail_qty_pct": 0.36693459753931335,
          "mixed_qty_pct": 0.463771409221337,
          "instit_qty_pct": 0.1692939932393496,
          "ambiguous_qty_pct": null,
          "unobservable_qty_pct": null,
          "unclear_qty_pct": null,
          "retail_notional_pct": 0.36740425908304436,
          "mixed_notional_pct": 0.46270991258908495,
          "instit_notional_pct": 0.16988582832787066,
          "ambiguous_notional_pct": null,
          "unobservable_notional_pct": null,
          "unclear_notional_pct": null,
          "run_retail_pct": null,
          "run_mixed_pct": null,
          "run_instit_pct": null,
          "run_unclear_pct": null,
          "avg_trade_size": 4182.320941646974,
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
          "ticker": "42F",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.8991596638655462,
          "mixed_pct": 0.09423769507803122,
          "instit_pct": 0.006602641056422569,
          "ambiguous_pct": null,
          "unobservable_pct": null,
          "unclear_pct": null,
          "retail_qty_pct": 0.46507313824720276,
          "mixed_qty_pct": 0.40033847652735044,
          "instit_qty_pct": 0.13458838522544683,
          "ambiguous_qty_pct": null,
          "unobservable_qty_pct": null,
          "unclear_qty_pct": null,
          "retail_notional_pct": 0.45880671552856317,
          "mixed_notional_pct": 0.4053436546706599,
          "instit_notional_pct": 0.1358496298007769,
          "ambiguous_notional_pct": null,
          "unobservable_notional_pct": null,
          "unclear_notional_pct": null,
          "run_retail_pct": null,
          "run_mixed_pct": null,
          "run_instit_pct": null,
          "run_unclear_pct": null,
          "avg_trade_size": 5528.316926770708,
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
            "ticker": "TKU",
            "currency": "SGD",
            "is_target": true,
            "retail_pct": 0.6666666666666666,
            "mixed_pct": 0.3333333333333333,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.21733895243829018,
            "mixed_qty_pct": 0.7826610475617098,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.21684580652894875,
            "mixed_notional_pct": 0.7831541934710513,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 10845.033333333333,
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
            "ticker": "U77",
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
            "avg_trade_size": 1378.8999999999999,
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
            "ticker": "NXR",
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
            "avg_trade_size": 7890.0,
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
            "ticker": "LVR",
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
            "avg_trade_size": 4450.0,
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
            "ticker": "KUX",
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
            "avg_trade_size": 369.55000000000007,
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
            "ticker": "ITS",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.9790575916230366,
            "mixed_pct": 0.020942408376963352,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.5962674961119752,
            "mixed_qty_pct": 0.4037325038880249,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.5967430827978991,
            "mixed_notional_pct": 0.4032569172021009,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 1606.890052356021,
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
            "ticker": "J03",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.8421052631578947,
            "mixed_pct": 0.15789473684210525,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.4583190118545279,
            "mixed_qty_pct": 0.541680988145472,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.46147914632476006,
            "mixed_notional_pct": 0.5385208536752399,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 6365.952631578948,
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
        "1w": [
          {
            "ticker": "TKU",
            "currency": "SGD",
            "is_target": true,
            "retail_pct": 0.7540106951871658,
            "mixed_pct": 0.22459893048128343,
            "instit_pct": 0.0213903743315508,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.3056249206416388,
            "mixed_qty_pct": 0.5255957167647183,
            "instit_qty_pct": 0.16877936259364287,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.30605662901366526,
            "mixed_notional_pct": 0.5234184692212479,
            "instit_notional_pct": 0.17052490176508683,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 12894.034759358288,
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
            "ticker": "LVR",
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
            "avg_trade_size": 3570.0,
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
            "ticker": "KUX",
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
            "avg_trade_size": 369.55000000000007,
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
            "ticker": "U77",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.9743589743589743,
            "mixed_pct": 0.02564102564102564,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.7288693743139407,
            "mixed_qty_pct": 0.2711306256860593,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.7290365872164006,
            "mixed_notional_pct": 0.2709634127835993,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 1841.823076923077,
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
            "ticker": "ITS",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.9419504643962848,
            "mixed_pct": 0.05727554179566564,
            "instit_pct": 0.0007739938080495357,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.4142279504675259,
            "mixed_qty_pct": 0.5643669446550417,
            "instit_qty_pct": 0.0214051048774324,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.4154286866911637,
            "mixed_notional_pct": 0.5636911021956038,
            "instit_notional_pct": 0.020880211113232492,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 3014.09713622291,
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
            "ticker": "NXR",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.9375,
            "mixed_pct": 0.0625,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.7241379310344828,
            "mixed_qty_pct": 0.27586206896551724,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.7256957897732533,
            "mixed_notional_pct": 0.2743042102267467,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 9113.96875,
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
            "ticker": "J03",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.9361465852304275,
            "mixed_pct": 0.06385341476957246,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.49756003163025003,
            "mixed_qty_pct": 0.5024399683697499,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.5002797399962824,
            "mixed_notional_pct": 0.49972026000371766,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 2729.888784008884,
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
            "ticker": "42F",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.8898305084745762,
            "mixed_pct": 0.1016949152542373,
            "instit_pct": 0.00847457627118644,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.5206789641993604,
            "mixed_qty_pct": 0.3844246418636092,
            "instit_qty_pct": 0.0948963939370304,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.517114446179957,
            "mixed_notional_pct": 0.3855992301991359,
            "instit_notional_pct": 0.09728632362090714,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 6867.723728813558,
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
            "ticker": "TKU",
            "currency": "SGD",
            "is_target": true,
            "retail_pct": 0.8258426966292135,
            "mixed_pct": 0.15393258426966291,
            "instit_pct": 0.020224719101123594,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.29494982962351507,
            "mixed_qty_pct": 0.48438905820220673,
            "instit_qty_pct": 0.22066111217427814,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.2929308720662217,
            "mixed_notional_pct": 0.48400540537030934,
            "instit_notional_pct": 0.22306372256346893,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 9950.5702247191,
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
            "ticker": "532",
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
            "avg_trade_size": 359.43730158730165,
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
            "ticker": "KUX",
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
            "avg_trade_size": 487.45882352941175,
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
            "ticker": "U77",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.9896907216494846,
            "mixed_pct": 0.010309278350515464,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.8912373403786878,
            "mixed_qty_pct": 0.1087626596213122,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.8919765522584713,
            "mixed_notional_pct": 0.10802344774152874,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 1857.5195876288662,
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
            "ticker": "NXR",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.9807692307692307,
            "mixed_pct": 0.019230769230769232,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.8408150270614454,
            "mixed_qty_pct": 0.1591849729385546,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.8372197126927929,
            "mixed_notional_pct": 0.1627802873072071,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 4725.576923076923,
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
            "ticker": "LVR",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.9565217391304348,
            "mixed_pct": 0.043478260869565216,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.7763318422122815,
            "mixed_qty_pct": 0.2236681577877186,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.7718473388269953,
            "mixed_notional_pct": 0.22815266117300476,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 3178.014492753623,
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
            "ticker": "ITS",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.9339870183676288,
            "mixed_pct": 0.06048888275100124,
            "instit_pct": 0.005524098881369977,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.3640148249959283,
            "mixed_qty_pct": 0.4781776218831558,
            "instit_qty_pct": 0.15780755312091588,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.3653774034486167,
            "mixed_notional_pct": 0.4761345784442376,
            "instit_notional_pct": 0.1584880181071457,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 3528.2315978456013,
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
            "ticker": "J03",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.9302325581395349,
            "mixed_pct": 0.06976744186046512,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.5504867098114258,
            "mixed_qty_pct": 0.4495132901885743,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.5466166871235352,
            "mixed_notional_pct": 0.4533833128764649,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 3439.9639534883727,
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
            "ticker": "42F",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.8697916666666666,
            "mixed_pct": 0.12239583333333333,
            "instit_pct": 0.0078125,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.4172751332111084,
            "mixed_qty_pct": 0.4637329966249899,
            "instit_qty_pct": 0.11899187016390171,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.41961075238212475,
            "mixed_notional_pct": 0.46037481402503655,
            "instit_notional_pct": 0.12001443359283871,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 6343.347265625001,
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
            "ticker": "TKU",
            "currency": "SGD",
            "is_target": true,
            "retail_pct": 0.8762214983713354,
            "mixed_pct": 0.11270358306188925,
            "instit_pct": 0.011074918566775244,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.35977857281426373,
            "mixed_qty_pct": 0.47427172201594386,
            "instit_qty_pct": 0.16594970516979243,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.35545898023384553,
            "mixed_notional_pct": 0.47538083597981956,
            "instit_notional_pct": 0.16916018378633488,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 7028.094625407166,
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
            "ticker": "532",
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
            "avg_trade_size": 421.9048109965636,
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
            "ticker": "KUX",
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
            "avg_trade_size": 436.3714285714286,
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
            "ticker": "U77",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.9928952042628775,
            "mixed_pct": 0.007104795737122558,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.8865252482822767,
            "mixed_qty_pct": 0.11347475171772331,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.8866170393254122,
            "mixed_notional_pct": 0.11338296067458783,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 1200.6120781527532,
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
            "ticker": "NXR",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.9807692307692307,
            "mixed_pct": 0.009615384615384616,
            "instit_pct": 0.009615384615384616,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.38583815028901736,
            "mixed_qty_pct": 0.036127167630057806,
            "instit_qty_pct": 0.5780346820809249,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.39226503398796264,
            "mixed_notional_pct": 0.03846423835519224,
            "instit_notional_pct": 0.5692707276568452,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 9999.298076923076,
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
            "ticker": "J03",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.9354434346599811,
            "mixed_pct": 0.0645565653400188,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.6078434790009398,
            "mixed_qty_pct": 0.3921565209990602,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.5908495771570178,
            "mixed_notional_pct": 0.40915042284298225,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 3506.3797555625197,
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
            "ticker": "LVR",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.9295774647887324,
            "mixed_pct": 0.07042253521126761,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.5798561151079137,
            "mixed_qty_pct": 0.4201438848920863,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.5845562751272454,
            "mixed_notional_pct": 0.41544372487275466,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 4053.66338028169,
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
            "ticker": "ITS",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.9234078652366237,
            "mixed_pct": 0.06968429982427438,
            "instit_pct": 0.006907834939101982,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.36693459753931335,
            "mixed_qty_pct": 0.463771409221337,
            "instit_qty_pct": 0.1692939932393496,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.36740425908304436,
            "mixed_notional_pct": 0.46270991258908495,
            "instit_notional_pct": 0.16988582832787066,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 4182.320941646974,
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
            "ticker": "42F",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.8991596638655462,
            "mixed_pct": 0.09423769507803122,
            "instit_pct": 0.006602641056422569,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.46507313824720276,
            "mixed_qty_pct": 0.40033847652735044,
            "instit_qty_pct": 0.13458838522544683,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.45880671552856317,
            "mixed_notional_pct": 0.4053436546706599,
            "instit_notional_pct": 0.1358496298007769,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 5528.316926770708,
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
      "total_trades": 6956,
      "price_moving_trades": 1365,
      "pct_price_moving": 19.623346751006327,
      "all_movers": {
        "count": 1365,
        "avg_size": 7073.638461538461,
        "median_size": 980.0,
        "retail_count": 1160,
        "mixed_count": 187,
        "institutional_count": 18,
        "ambiguous_count": 0,
        "unobservable_count": 0,
        "retail_pct": 84.98168498168498,
        "mixed_pct": 13.6996336996337,
        "instit_pct": 1.3186813186813187,
        "unclear_pct": null
      },
      "positive_movers": {
        "count": 683,
        "avg_size": 5255.22401171303,
        "median_size": 73.5,
        "retail_count": 604,
        "mixed_count": 73,
        "institutional_count": 6,
        "ambiguous_count": 0,
        "unobservable_count": 0,
        "retail_pct": 88.43338213762812,
        "mixed_pct": 10.68814055636896,
        "instit_pct": 0.8784773060029283,
        "unclear_pct": null
      },
      "negative_movers": {
        "count": 682,
        "avg_size": 8894.719208211143,
        "median_size": 2450.0,
        "retail_count": 556,
        "mixed_count": 114,
        "institutional_count": 12,
        "ambiguous_count": 0,
        "unobservable_count": 0,
        "retail_pct": 81.52492668621701,
        "mixed_pct": 16.715542521994134,
        "instit_pct": 1.7595307917888565,
        "unclear_pct": null
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
        "n_days_short_data": 64,
        "window_days": 63
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
        "1M": {
          "stats": {
            "valid": true,
            "avg_short_ratio": 0.0,
            "max_short_ratio": 0.0,
            "interpretation": "Low short interest"
          }
        },
        "3M": {
          "stats": {
            "valid": true,
            "avg_short_ratio": 0.0033889444776640165,
            "max_short_ratio": 0.07371154614462645,
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
            "month": "2026-05",
            "avg_short_ratio": 0.0
          },
          {
            "month": "2026-04",
            "avg_short_ratio": 0.0
          },
          {
            "month": "2026-03",
            "avg_short_ratio": 0.006996731109067539
          },
          {
            "month": "2026-02",
            "avg_short_ratio": 0.014753167520636205
          },
          {
            "month": "2026-01",
            "avg_short_ratio": 0.009069182023479604
          }
        ],
        "mom_change": [
          {
            "month": "2026-05",
            "avg_short_ratio": 0.0,
            "change_pct": null
          },
          {
            "month": "2026-04",
            "avg_short_ratio": 0.0,
            "change_pct": null
          },
          {
            "month": "2026-03",
            "avg_short_ratio": 0.006996731109067539,
            "change_pct": null
          },
          {
            "month": "2026-02",
            "avg_short_ratio": 0.014753167520636205,
            "change_pct": 110.85800341128693
          },
          {
            "month": "2026-01",
            "avg_short_ratio": 0.009069182023479604,
            "change_pct": -38.527221284554955
          }
        ],
        "interpretation": "Short interest stable"
      },
      "short_series": {
        "valid": true,
        "rows": [
          {
            "date": "2026-05-18",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 666400,
            "close": 0.245,
            "return": 0.02083333333333326
          },
          {
            "date": "2026-05-15",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 2861300,
            "close": 0.24,
            "return": -0.05882352941176472
          },
          {
            "date": "2026-05-14",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 2302900,
            "close": 0.255,
            "return": -0.019230769230769273
          },
          {
            "date": "2026-05-13",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 2771200,
            "close": 0.26,
            "return": 0.0
          },
          {
            "date": "2026-05-12",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 1212000,
            "close": 0.26,
            "return": 0.019607843137254832
          },
          {
            "date": "2026-05-11",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 925100,
            "close": 0.255,
            "return": 0.0
          },
          {
            "date": "2026-05-08",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 8857000,
            "close": 0.255,
            "return": 0.020000000000000018
          },
          {
            "date": "2026-05-07",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 1731600,
            "close": 0.25,
            "return": 0.020408163265306145
          },
          {
            "date": "2026-05-06",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 439300,
            "close": 0.245,
            "return": 0.02083333333333326
          },
          {
            "date": "2026-05-05",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 570000,
            "close": 0.24,
            "return": -0.020408163265306145
          },
          {
            "date": "2026-05-04",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 674700,
            "close": 0.245,
            "return": 0.042553191489361764
          },
          {
            "date": "2026-04-30",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 757800,
            "close": 0.235,
            "return": -0.02083333333333337
          },
          {
            "date": "2026-04-29",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 460300,
            "close": 0.24,
            "return": 0.0
          },
          {
            "date": "2026-04-28",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 417500,
            "close": 0.24,
            "return": -0.020408163265306145
          },
          {
            "date": "2026-04-27",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 1888200,
            "close": 0.245,
            "return": -0.020000000000000018
          },
          {
            "date": "2026-04-24",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 444200,
            "close": 0.25,
            "return": -0.019607843137254943
          },
          {
            "date": "2026-04-23",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 1814600,
            "close": 0.255,
            "return": -0.019230769230769273
          },
          {
            "date": "2026-04-22",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 5476800,
            "close": 0.26,
            "return": 0.019607843137254832
          },
          {
            "date": "2026-04-21",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 7842700,
            "close": 0.255,
            "return": 0.08510638297872353
          },
          {
            "date": "2026-04-20",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 824200,
            "close": 0.235,
            "return": 0.021739130434782483
          },
          {
            "date": "2026-04-17",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 818600,
            "close": 0.23,
            "return": -0.061224489795918324
          },
          {
            "date": "2026-04-16",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 9893900,
            "close": 0.245,
            "return": 0.06521739130434767
          },
          {
            "date": "2026-04-15",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 550400,
            "close": 0.23,
            "return": 0.0
          },
          {
            "date": "2026-04-14",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 512100,
            "close": 0.23,
            "return": 0.045454545454545414
          },
          {
            "date": "2026-04-13",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 1064200,
            "close": 0.22,
            "return": -0.0434782608695653
          },
          {
            "date": "2026-04-10",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 777400,
            "close": 0.23,
            "return": 0.0
          },
          {
            "date": "2026-04-09",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 1029700,
            "close": 0.23,
            "return": 0.022222222222222143
          },
          {
            "date": "2026-04-08",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 1591000,
            "close": 0.225,
            "return": 0.022727272727272707
          },
          {
            "date": "2026-04-07",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 730200,
            "close": 0.22,
            "return": 0.0
          },
          {
            "date": "2026-04-06",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 1221000,
            "close": 0.22,
            "return": -0.0434782608695653
          },
          {
            "date": "2026-04-02",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 466000,
            "close": 0.23,
            "return": 0.0
          },
          {
            "date": "2026-04-01",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 632200,
            "close": 0.23,
            "return": 0.022222222222222143
          },
          {
            "date": "2026-03-31",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 578100,
            "close": 0.225,
            "return": 0.0
          },
          {
            "date": "2026-03-30",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 463200,
            "close": 0.225,
            "return": -0.021739130434782594
          },
          {
            "date": "2026-03-27",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 476800,
            "close": 0.23,
            "return": 0.0
          },
          {
            "date": "2026-03-26",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 458600,
            "close": 0.23,
            "return": 0.0
          },
          {
            "date": "2026-03-25",
            "short_ratio": 0.03807390817469205,
            "short_vol": 17000,
            "total_vol": 446500,
            "close": 0.23,
            "return": -0.02127659574468077
          },
          {
            "date": "2026-03-24",
            "short_ratio": 0.02231404958677686,
            "short_vol": 13500,
            "total_vol": 605000,
            "close": 0.235,
            "return": 0.04444444444444429
          },
          {
            "date": "2026-03-23",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 788800,
            "close": 0.225,
            "return": -0.021739130434782594
          },
          {
            "date": "2026-03-20",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 586700,
            "close": 0.23,
            "return": -0.02127659574468077
          },
          {
            "date": "2026-03-19",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 581900,
            "close": 0.235,
            "return": -0.02083333333333337
          },
          {
            "date": "2026-03-18",
            "short_ratio": 0.0020242914979757085,
            "short_vol": 1700,
            "total_vol": 839800,
            "close": 0.24,
            "return": -0.020408163265306145
          },
          {
            "date": "2026-03-17",
            "short_ratio": 0.07371154614462645,
            "short_vol": 36900,
            "total_vol": 500600,
            "close": 0.245,
            "return": -0.020000000000000018
          },
          {
            "date": "2026-03-16",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 921800,
            "close": 0.25,
            "return": 0.0
          },
          {
            "date": "2026-03-13",
            "short_ratio": 0.007331217857533647,
            "short_vol": 6700,
            "total_vol": 913900,
            "close": 0.25,
            "return": 0.0
          },
          {
            "date": "2026-03-12",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 2461200,
            "close": 0.25,
            "return": 0.06382978723404253
          },
          {
            "date": "2026-03-11",
            "short_ratio": 0.002012578616352201,
            "short_vol": 1600,
            "total_vol": 795000,
            "close": 0.235,
            "return": 0.06818181818181812
          },
          {
            "date": "2026-03-10",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 732800,
            "close": 0.22,
            "return": 0.023255813953488413
          },
          {
            "date": "2026-03-09",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 1332500,
            "close": 0.215,
            "return": -0.022727272727272707
          },
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
            "short_ratio": 0.008460492521528931,
            "short_vol": 16800,
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
            "short_ratio": 0.0629643621710112,
            "short_vol": 100000,
            "total_vol": 1588200,
            "close": 0.23,
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
          "ticker": "42F",
          "avg_short_ratio": 2.496750201587269e-05,
          "max_short_ratio": 0.0071947622131088565,
          "is_target": false
        },
        {
          "ticker": "532",
          "avg_short_ratio": 7.7619427677031e-05,
          "max_short_ratio": 0.0287968076681785,
          "is_target": false
        },
        {
          "ticker": "J03",
          "avg_short_ratio": 0.00046731078025598696,
          "max_short_ratio": 0.04373162853885592,
          "is_target": false
        },
        {
          "ticker": "U77",
          "avg_short_ratio": 0.004744088001131344,
          "max_short_ratio": 1.0,
          "is_target": false
        },
        {
          "ticker": "ITS",
          "avg_short_ratio": 0.006129004554762259,
          "max_short_ratio": 0.28210566910914,
          "is_target": false
        }
      ]
    },
    "intraday": {
      "session_periods": [
        "1D",
        "1M",
        "3M",
        "1W"
      ],
      "session": {
        "1D": {
          "opening": 0.0,
          "continuous": 0.9969969141760973,
          "closing": 0.0030030858239027246,
          "auctions": 0.0030030858239027246,
          "other": 0.0
        },
        "1W": {
          "opening": 0.028061231946543353,
          "continuous": 0.9616898415417309,
          "closing": 0.010153927549406768,
          "auctions": 0.03831015845826915,
          "other": 0.0
        },
        "1M": {
          "opening": 0.02894596981084555,
          "continuous": 0.9470925862209425,
          "closing": 0.015933488129615876,
          "auctions": 0.052907413779057506,
          "other": 0.0
        },
        "3M": {
          "opening": 0.023038816670683342,
          "continuous": 0.959423881519517,
          "closing": 0.01179163039361791,
          "auctions": 0.04057611848048305,
          "other": 0.0
        }
      },
      "hhi": {
        "1D": 0.5850371800955131,
        "1W": 0.32529574458150085,
        "1M": 0.3369108643713644,
        "3M": 0.29965193591468897
      },
      "profile_buckets": [
        {
          "time": "08:30",
          "avg_share": 0.0246
        },
        {
          "time": "09:00",
          "avg_share": 0.1304
        },
        {
          "time": "09:30",
          "avg_share": 0.1076
        },
        {
          "time": "10:00",
          "avg_share": 0.0535
        },
        {
          "time": "10:30",
          "avg_share": 0.0654
        },
        {
          "time": "11:00",
          "avg_share": 0.0597
        },
        {
          "time": "11:30",
          "avg_share": 0.0618
        },
        {
          "time": "12:00",
          "avg_share": 0.0024
        },
        {
          "time": "12:30",
          "avg_share": 0.0024
        },
        {
          "time": "13:00",
          "avg_share": 0.084
        },
        {
          "time": "13:30",
          "avg_share": 0.0664
        },
        {
          "time": "14:00",
          "avg_share": 0.0601
        },
        {
          "time": "14:30",
          "avg_share": 0.0582
        },
        {
          "time": "15:00",
          "avg_share": 0.0516
        },
        {
          "time": "15:30",
          "avg_share": 0.0491
        },
        {
          "time": "16:00",
          "avg_share": 0.0343
        },
        {
          "time": "16:30",
          "avg_share": 0.0616
        },
        {
          "time": "17:00",
          "avg_share": 0.0268
        }
      ],
      "peers_hhi_rows": [
        {
          "ticker": "TKU",
          "auctions_pct": 6.257989920095258,
          "hhi": 0.2710144881543455,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400",
            "you": true
          }
        },
        {
          "ticker": "KUX",
          "auctions_pct": 14.79643493761141,
          "hhi": 0.6620495370372396,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "532",
          "auctions_pct": 10.896974476164061,
          "hhi": 0.8183093421923971,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "U77",
          "auctions_pct": 3.893454703879468,
          "hhi": 0.5570750748856343,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "J03",
          "auctions_pct": 4.480134846817899,
          "hhi": 0.5310900601545343,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "NXR",
          "auctions_pct": 2.3391897579556367,
          "hhi": 0.7615117506528586,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "42F",
          "auctions_pct": 8.968792038681817,
          "hhi": 0.46066641981494105,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "LVR",
          "auctions_pct": 2.9407385181040957,
          "hhi": 0.4795358959753188,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "ITS",
          "auctions_pct": 3.165187993400931,
          "hhi": 0.19039885196267906,
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
