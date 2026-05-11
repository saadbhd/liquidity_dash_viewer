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
      "ticker": "1328",
      "name": "GOLDSTREAM INV",
      "marketCap": 1110216087.52,
      "sector": "Other Support Services",
      "industry": "Consumer Discretionary - Support Services"
    },
    {
      "ticker": "1483",
      "name": "NET-A-GO TECH",
      "marketCap": 1081674000.0,
      "sector": "Other Support Services",
      "industry": "Consumer Discretionary - Support Services"
    },
    {
      "ticker": "331",
      "name": "FSE LIFESTYLE",
      "marketCap": 2520000000.0,
      "sector": "Other Support Services",
      "industry": "Consumer Discretionary - Support Services"
    },
    {
      "ticker": "2443",
      "name": "AUTOSTREETS",
      "marketCap": 1598711861.76,
      "sector": "Other Support Services",
      "industry": "Consumer Discretionary - Support Services"
    },
    {
      "ticker": "6959",
      "name": "CHANGJIU HLDGS",
      "marketCap": 810661600.0,
      "sector": "Other Support Services",
      "industry": "Consumer Discretionary - Support Services"
    },
    {
      "ticker": "2180",
      "name": "MANPOWER GRC",
      "marketCap": 1135052350.0,
      "sector": "Other Support Services",
      "industry": "Consumer Discretionary - Support Services"
    },
    {
      "ticker": "6100",
      "name": "TONGDAO LIEPIN",
      "marketCap": 1302655348.92,
      "sector": "Other Support Services",
      "industry": "Consumer Discretionary - Support Services"
    },
    {
      "ticker": "2521",
      "name": "SHENGHUI CLEAN",
      "marketCap": 2242195250.0,
      "sector": "Other Support Services",
      "industry": "Consumer Discretionary - Support Services"
    },
    {
      "ticker": "1463",
      "name": "C-LINK SQ",
      "marketCap": 905389221.555,
      "sector": "Other Support Services",
      "industry": "Consumer Discretionary - Support Services"
    }
  ]
};

export const REPORT_DATA: ReportData = {
  "meta": {
    "market": "XHKG",
    "currency": "HKD",
    "ticker": "1328",
    "company": "GOLDSTREAM INV",
    "asof_date": "2026-04-23",
    "industry": "Consumer Discretionary - Support Services",
    "sector": "Other Support Services",
    "market_cap_display": "1.1B",
    "market_cap_category": "mid",
    "universe_total": 2570,
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
          "score_pca": 98.40466926070039,
          "score_pca_percentile": 98.40466926070039,
          "rank_pca": 42,
          "total": 2570,
          "adv_notional_sgd": 6940560.000000001,
          "adv_volume_shares": 1577400.0,
          "free_float_shares": 54910787.0,
          "turnover_ratio": 0.028726596105788833,
          "votes": 535.0,
          "trades": 535.0,
          "spread_pct": 0.02660949618513148,
          "spread_ticks": 11.86875,
          "amihud": 4.403650169378921e-08,
          "volatility": 3.994756398480362
        },
        "pca": {
          "valid": true,
          "window_days": 1,
          "variance_explained": 0.5504712752426593,
          "loadings": {
            "log_adv": 0.5363474722282557,
            "log_trades": 0.4985896196111139,
            "log_turnover": 0.5027586184314453,
            "neg_spread": 0.40039359295738686,
            "neg_amihud": 0.04561677793545561,
            "neg_vol": -0.22040333965884298
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
          "peer_median_adv": 413240.0,
          "peer_median_score_pca": 49.98054474708171,
          "peer_median_trades": 25.5,
          "peer_median_volatility": 0.36887375546633006,
          "peer_median_spread_pct": 0.019538706711032847,
          "peer_median_spread_ticks": 2.872767857142857,
          "peer_median_amihud": 1.4075794587988253e-08,
          "peer_median_turnover_ratio": 0.0005769806491335637,
          "target_vs_peer": {
            "score_pca_delta": 48.42,
            "adv_delta_pct": 1579.5,
            "trades_delta_pct": 1998.04,
            "volatility_delta_pct": -982.96,
            "spread_pct_delta_pct": -36.19,
            "spread_ticks_delta_pct": 313.15,
            "amihud_delta_pct": -212.85,
            "turnover_ratio_delta_pct": 4878.78
          }
        },
        "peer_liquidity": [
          {
            "ticker": "1328",
            "score_pca": 98.40466926070039,
            "rank_pca": 42,
            "adv": 6940560.000000001,
            "trades": 535.0,
            "volatility": 3.994756398480362,
            "spread_pct": 0.02660949618513148,
            "spread_ticks": 11.86875,
            "amihud": 4.403650169378921e-08,
            "turnover_ratio": 0.028726596105788833,
            "is_target": true
          },
          {
            "ticker": "1483",
            "score_pca": 54.31906614785992,
            "rank_pca": 1175,
            "adv": 567500.0,
            "trades": 33.0,
            "volatility": 0.3798754941710788,
            "spread_pct": 0.023965410747374943,
            "spread_ticks": 3.03125,
            "amihud": 4.129955947136564e-08,
            "turnover_ratio": 0.001051739076044905,
            "is_target": false
          },
          {
            "ticker": "331",
            "score_pca": 45.6420233463035,
            "rank_pca": 1398,
            "adv": 258980.0,
            "trades": 18.0,
            "volatility": 0.06749489121072853,
            "spread_pct": 0.004808996076871631,
            "spread_ticks": 2.7142857142857144,
            "amihud": 0.0,
            "turnover_ratio": 0.00010222222222222222,
            "is_target": false
          },
          {
            "ticker": "2443",
            "score_pca": 62.45136186770428,
            "rank_pca": 966,
            "adv": 1133680.0,
            "trades": 96.0,
            "volatility": 0.35787201676158137,
            "spread_pct": 0.00975999361047879,
            "spread_ticks": 1.818452380952381,
            "amihud": 1.4075794587988253e-08,
            "turnover_ratio": 0.0011450729123308335,
            "is_target": false
          },
          {
            "ticker": "6959",
            "score_pca": 27.354085603112843,
            "rank_pca": 1868,
            "adv": 10530.0,
            "trades": 5.0,
            "volatility": 0.5923403910791747,
            "spread_pct": 0.06358095865590517,
            "spread_ticks": 25.733333333333334,
            "amihud": 5.720889255025809e-06,
            "turnover_ratio": 4.3436293436293434e-05,
            "is_target": false
          },
          {
            "ticker": "2180",
            "score_pca": 27.042801556420233,
            "rank_pca": 1876,
            "adv": 10820.0,
            "trades": 2.0,
            "volatility": 0.3460856804533884,
            "spread_pct": 0.03432286438166261,
            "spread_ticks": 18.894736842105264,
            "amihud": 3.2948820596966726e-06,
            "turnover_ratio": 3.912635773107582e-05,
            "is_target": false
          },
          {
            "ticker": "6100",
            "score_pca": 70.93385214007782,
            "rank_pca": 748,
            "adv": 2131556.0,
            "trades": 494.0,
            "volatility": 0.39063098963861337,
            "spread_pct": 0.005630256602560688,
            "spread_ticks": 1.5209840810419681,
            "amihud": 6.873858651621027e-09,
            "turnover_ratio": 0.00359456345412689,
            "is_target": false
          },
          {
            "ticker": "2521",
            "score_pca": 64.04669260700389,
            "rank_pca": 925,
            "adv": 2374050.0,
            "trades": 70.0,
            "volatility": 0.5730075857237527,
            "spread_pct": 0.015112002674690749,
            "spread_ticks": 1.765625,
            "amihud": 1.0893649655869652e-08,
            "turnover_ratio": 0.0022932616042485687,
            "is_target": false
          },
          {
            "ticker": "1463",
            "score_pca": 1.9455252918287937,
            "rank_pca": 2521,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.0,
            "spread_pct": 0.19342359767891681,
            "spread_ticks": 11.11111111111111,
            "amihud": null,
            "turnover_ratio": 0.0,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Other Support Services",
          "sector_count": 42,
          "market_count": 2570,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.44682272023595204,
              "median": 0.3002961195058443,
              "min": 0.0,
              "max": 8.637276202991943,
              "p5": 0.0,
              "p95": 1.4793321759752576,
              "count": 2570
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 66497406.433889784,
              "median": 228680.0,
              "min": 0.0,
              "max": 11632693680.0,
              "p5": 0.0,
              "p95": 288439431.9119974,
              "count": 2570
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.045888778065762685,
              "median": 0.02660691120716105,
              "min": 0.0004200936271142237,
              "max": 0.7648559970834851,
              "p5": 0.0013440322613031467,
              "p95": 0.1510010628213596,
              "count": 2570
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.006985206755037552,
              "median": 0.000946296785815808,
              "min": 0.0,
              "max": 1.1297316442194167,
              "p5": 0.0,
              "p95": 0.024861697689331455,
              "count": 2551
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 6.389363263394742e-06,
              "median": 6.446372522233959e-09,
              "min": 0.0,
              "max": 0.003047619047619048,
              "p5": 0.0,
              "p95": 6.115903453724737e-06,
              "count": 2153
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1211.7704280155642,
              "median": 21.0,
              "min": 0.0,
              "max": 70283.0,
              "p5": 0.0,
              "p95": 6509.299999999987,
              "count": 2570
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.4724721029977842,
              "median": 0.25206945487679516,
              "min": 0.0,
              "max": 3.994756398480362,
              "p5": 0.0,
              "p95": 1.572021526929702,
              "count": 42
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 640113.6071428572,
              "median": 42300.0,
              "min": 0.0,
              "max": 6940560.000000001,
              "p5": 0.0,
              "p95": 3517183.5749999946,
              "count": 42
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.06643343201008758,
              "median": 0.04579645823649606,
              "min": 0.0040054208333486965,
              "max": 0.3174603174603174,
              "p5": 0.005659893414245261,
              "p95": 0.1924686660185616,
              "count": 42
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0026101354044419543,
              "median": 0.0004413316049913659,
              "min": 0.0,
              "max": 0.028726596105788833,
              "p5": 0.0,
              "p95": 0.020838248322957692,
              "count": 42
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 7.043200699638316e-06,
              "median": 1.0878207893251926e-07,
              "min": 0.0,
              "max": 0.00019696969696969698,
              "p5": 0.0,
              "p95": 6.862705306480405e-06,
              "count": 32
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 61.19047619047619,
              "median": 8.0,
              "min": 0.0,
              "max": 579.0,
              "p5": 0.0,
              "p95": 481.69999999999897,
              "count": 42
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 810889.5,
              "median": 413240.0,
              "min": 0.0,
              "max": 2374050.0,
              "p5": 3685.5000000000005,
              "p95": 2289177.1,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 89.75,
              "median": 25.5,
              "min": 0.0,
              "max": 494.0,
              "p5": 0.7000000000000001,
              "p95": 354.6999999999998,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.33841338112978975,
              "median": 0.36887375546633006,
              "min": 0.0,
              "max": 0.5923403910791747,
              "p5": 0.023623211923754987,
              "p95": 0.5855739092047769,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.04382551005355768,
              "median": 0.019538706711032847,
              "min": 0.004808996076871631,
              "max": 0.19342359767891681,
              "p5": 0.005096437260862801,
              "p95": 0.14797867402086268,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 8.323722307853721,
              "median": 2.872767857142857,
              "min": 1.5209840810419681,
              "max": 25.733333333333334,
              "p5": 1.6066084026772793,
              "p95": 23.339824561403507,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.2984163110127609e-06,
              "median": 1.4075794587988253e-08,
              "min": 0.0,
              "max": 5.720889255025809e-06,
              "p5": 2.0621575954863086e-09,
              "p95": 4.993087096427067e-06,
              "count": 7
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0010336777400175986,
              "median": 0.0005769806491335637,
              "min": 0.0,
              "max": 0.00359456345412689,
              "p5": 1.3694225205876538e-05,
              "p95": 0.003139107806669477,
              "count": 8
            }
          },
          "returns": {
            "window_days": 1,
            "n_obs": 1,
            "stock": 0.3056379821958457,
            "market": -0.0032925940906346485,
            "sector": 0.0,
            "peers": -0.015304730730262617,
            "vs_market": 0.30893057628648035,
            "vs_sector": 0.3056379821958457,
            "vs_peers": 0.3209427129261083
          }
        }
      },
      "30d": {
        "label": "1M",
        "window_days": 21,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 21,
          "score_pca": 50.27237354085603,
          "score_pca_percentile": 50.27237354085603,
          "rank_pca": 1279,
          "total": 2570,
          "adv_notional_sgd": 293040.0,
          "adv_volume_shares": 88000.0,
          "free_float_shares": 54910787.0,
          "turnover_ratio": 0.0016025995038096976,
          "votes": 22.0,
          "trades": 22.0,
          "spread_pct": 0.038448167976082845,
          "spread_ticks": 11.464788732394366,
          "amihud": 5.5512071099860586e-08,
          "volatility": 1.2330095767938047
        },
        "pca": {
          "valid": true,
          "window_days": 21,
          "variance_explained": 0.5860345951947027,
          "loadings": {
            "log_adv": 0.5128675414231458,
            "log_trades": 0.46522661211089344,
            "log_turnover": 0.47044702174282327,
            "neg_spread": 0.46036931664900843,
            "neg_amihud": 0.28512457107875067,
            "neg_vol": 0.0772965414943602
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
          "peer_median_adv": 413310.0,
          "peer_median_score_pca": 49.00778210116732,
          "peer_median_trades": 15.0,
          "peer_median_volatility": 0.6473119662229601,
          "peer_median_spread_pct": 0.024334812732340907,
          "peer_median_spread_ticks": 5.513582342954159,
          "peer_median_amihud": 2.6312300915534362e-08,
          "peer_median_turnover_ratio": 0.0004370739482189571,
          "target_vs_peer": {
            "score_pca_delta": 1.26,
            "adv_delta_pct": -29.1,
            "trades_delta_pct": 46.67,
            "volatility_delta_pct": -90.48,
            "spread_pct_delta_pct": -58.0,
            "spread_ticks_delta_pct": 107.94,
            "amihud_delta_pct": -110.97,
            "turnover_ratio_delta_pct": 266.67
          }
        },
        "peer_liquidity": [
          {
            "ticker": "1328",
            "score_pca": 50.27237354085603,
            "rank_pca": 1279,
            "adv": 293040.0,
            "trades": 22.0,
            "volatility": 1.2330095767938047,
            "spread_pct": 0.038448167976082845,
            "spread_ticks": 11.464788732394366,
            "amihud": 5.5512071099860586e-08,
            "turnover_ratio": 0.0016025995038096976,
            "is_target": true
          },
          {
            "ticker": "1483",
            "score_pca": 41.08949416342412,
            "rank_pca": 1515,
            "adv": 337280.0,
            "trades": 14.0,
            "volatility": 1.6148018254254246,
            "spread_pct": 0.055469251641500385,
            "spread_ticks": 6.790322580645161,
            "amihud": 4.129955947136564e-08,
            "turnover_ratio": 0.0006301168032691942,
            "is_target": false
          },
          {
            "ticker": "331",
            "score_pca": 54.74708171206226,
            "rank_pca": 1164,
            "adv": 489340.00000000006,
            "trades": 16.0,
            "volatility": 0.1346880434338552,
            "spread_pct": 0.0075412179313404356,
            "spread_ticks": 4.2368421052631575,
            "amihud": 9.667600737821011e-09,
            "turnover_ratio": 0.0001911111111111111,
            "is_target": false
          },
          {
            "ticker": "2443",
            "score_pca": 67.39299610894942,
            "rank_pca": 839,
            "adv": 1133680.0,
            "trades": 170.0,
            "volatility": 0.25892696705173346,
            "spread_pct": 0.009778864837942566,
            "spread_ticks": 1.9370485036119711,
            "amihud": 6.4730913721122885e-09,
            "turnover_ratio": 0.0011450729123308335,
            "is_target": false
          },
          {
            "ticker": "6959",
            "score_pca": 34.94163424124513,
            "rank_pca": 1673,
            "adv": 51875.00000000001,
            "trades": 8.0,
            "volatility": 0.8691048527192019,
            "spread_pct": 0.04916290193994153,
            "spread_ticks": 22.235294117647058,
            "amihud": 1.8941546387847033e-07,
            "turnover_ratio": 0.00020109395109395108,
            "is_target": false
          },
          {
            "ticker": "2180",
            "score_pca": 43.268482490272376,
            "rank_pca": 1459,
            "adv": 65114.28,
            "trades": 14.0,
            "volatility": 0.5405319127940849,
            "spread_pct": 0.028451360099948884,
            "spread_ticks": 15.904761904761905,
            "amihud": 9.834028826110442e-08,
            "turnover_ratio": 0.00024403109316871989,
            "is_target": false
          },
          {
            "ticker": "6100",
            "score_pca": 72.33463035019454,
            "rank_pca": 712,
            "adv": 1866479.9999999998,
            "trades": 508.0,
            "volatility": 0.6311195585727474,
            "spread_pct": 0.006444132909900683,
            "spread_ticks": 1.825197889182058,
            "amihud": 1.1325042359703088e-08,
            "turnover_ratio": 0.0030238970198397087,
            "is_target": false
          },
          {
            "ticker": "2521",
            "score_pca": 67.19844357976655,
            "rank_pca": 844,
            "adv": 3243000.0,
            "trades": 101.0,
            "volatility": 0.6635043738731727,
            "spread_pct": 0.02021826536473293,
            "spread_ticks": 2.153973509933775,
            "amihud": 3.8442317302886795e-09,
            "turnover_ratio": 0.0038106076281122837,
            "is_target": false
          },
          {
            "ticker": "1463",
            "score_pca": 3.8910505836575875,
            "rank_pca": 2471,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 1.0327677910958937,
            "spread_pct": 0.1824918943955535,
            "spread_ticks": 10.368421052631579,
            "amihud": 2.86805889415536e-07,
            "turnover_ratio": 0.0,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Other Support Services",
          "sector_count": 42,
          "market_count": 2570,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.6921305704877337,
              "median": 0.5450501736672351,
              "min": 0.0,
              "max": 27.98817803324715,
              "p5": 0.20315172868936052,
              "p95": 1.615123768514041,
              "count": 2570
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 61666171.58483452,
              "median": 220280.0,
              "min": 0.0,
              "max": 11207547960.0,
              "p5": 0.0,
              "p95": 254724843.5729999,
              "count": 2570
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.04608844244431638,
              "median": 0.029270415520647887,
              "min": 0.000587472082824556,
              "max": 0.5912209998910793,
              "p5": 0.0014331670193849452,
              "p95": 0.1449741704270304,
              "count": 2570
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.004268217053388044,
              "median": 0.0009111829995295472,
              "min": 0.0,
              "max": 0.4466650060282735,
              "p5": 0.0,
              "p95": 0.01640470430626092,
              "count": 2551
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.2758110261957494e-06,
              "median": 4.941785763703751e-08,
              "min": 0.0,
              "max": 0.00014832162373145977,
              "p5": 3.9594667713996224e-11,
              "p95": 5.345874664056457e-06,
              "count": 2565
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1121.7301556420234,
              "median": 20.5,
              "min": 0.0,
              "max": 67896.0,
              "p5": 0.0,
              "p95": 5968.599999999991,
              "count": 2570
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.8127104384996131,
              "median": 0.7565441528169446,
              "min": 0.1346880434338552,
              "max": 1.9822061482432334,
              "p5": 0.25291478208614165,
              "p95": 1.6454654004033198,
              "count": 42
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 453175.34773809527,
              "median": 31495.802499999998,
              "min": 0.0,
              "max": 5006820.0,
              "p5": 0.0,
              "p95": 3174173.999999994,
              "count": 42
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.07067022126846642,
              "median": 0.05680942434914836,
              "min": 0.005060285516878971,
              "max": 0.26006191950464397,
              "p5": 0.007653100276670543,
              "p95": 0.1735842511708751,
              "count": 42
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0012583379405103476,
              "median": 0.0002461388648371209,
              "min": 0.0,
              "max": 0.01642247547309517,
              "p5": 0.0,
              "p95": 0.005481057909721479,
              "count": 42
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 2.555723139927533e-06,
              "median": 2.3811067664700318e-07,
              "min": 0.0,
              "max": 4.699248120300752e-05,
              "p5": 3.890795892754077e-09,
              "p95": 6.260179470605133e-06,
              "count": 42
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 44.904761904761905,
              "median": 6.5,
              "min": 0.0,
              "max": 508.0,
              "p5": 0.0,
              "p95": 297.29999999999944,
              "count": 42
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 898346.1599999999,
              "median": 413310.0,
              "min": 0.0,
              "max": 3243000.0,
              "p5": 18156.250000000004,
              "p95": 2761217.999999999,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 103.875,
              "median": 15.0,
              "min": 0.0,
              "max": 508.0,
              "p5": 2.8000000000000003,
              "p95": 389.6999999999998,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.7181806656207642,
              "median": 0.6473119662229601,
              "min": 0.1346880434338552,
              "max": 1.6148018254254246,
              "p5": 0.17817166670011259,
              "p95": 1.4110899134100885,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.04494473614010761,
              "median": 0.024334812732340907,
              "min": 0.006444132909900683,
              "max": 0.1824918943955535,
              "p5": 0.006828112667404597,
              "p95": 0.13803396943163485,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 8.181482707959583,
              "median": 5.513582342954159,
              "min": 1.825197889182058,
              "max": 22.235294117647058,
              "p5": 1.8643456042325275,
              "p95": 20.01960784313725,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 8.089639590330018e-08,
              "median": 2.6312300915534362e-08,
              "min": 3.8442317302886795e-09,
              "max": 2.86805889415536e-07,
              "p5": 4.764332604926943e-09,
              "p95": 2.52719240477563e-07,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0011557413148657251,
              "median": 0.0004370739482189571,
              "min": 0.0,
              "max": 0.0038106076281122837,
              "p5": 6.68888888888889e-05,
              "p95": 0.0035352589152168818,
              "count": 8
            }
          },
          "returns": {
            "window_days": 21,
            "n_obs": 21,
            "stock": 0.44736842105263075,
            "market": 0.02414767314911015,
            "sector": -0.021897157638716247,
            "peers": -0.08421467913237646,
            "vs_market": 0.4232207479035206,
            "vs_sector": 0.469265578691347,
            "vs_peers": 0.5315831001850072
          }
        }
      },
      "3m": {
        "label": "3M",
        "window_days": 63,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 63,
          "score_pca": 46.57587548638132,
          "score_pca_percentile": 46.57587548638132,
          "rank_pca": 1374,
          "total": 2570,
          "adv_notional_sgd": 152650.0,
          "adv_volume_shares": 50000.0,
          "free_float_shares": 54910787.0,
          "turnover_ratio": 0.0009105678998918737,
          "votes": 17.0,
          "trades": 17.0,
          "spread_pct": 0.028323353293413185,
          "spread_ticks": 8.841121495327103,
          "amihud": 1.1788189805573455e-07,
          "volatility": 1.0403576065628095
        },
        "pca": {
          "valid": true,
          "window_days": 63,
          "variance_explained": 0.6255442573263524,
          "loadings": {
            "log_adv": 0.4960780653441559,
            "log_trades": 0.44854955472282976,
            "log_turnover": 0.45072408585687446,
            "neg_spread": 0.45667186205682153,
            "neg_amihud": 0.35109813273997315,
            "neg_vol": 0.13318618570593382
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
          "peer_median_adv": 391960.0,
          "peer_median_score_pca": 53.054474708171206,
          "peer_median_trades": 17.5,
          "peer_median_volatility": 0.5732859450944477,
          "peer_median_spread_pct": 0.023467768574596884,
          "peer_median_spread_ticks": 4.434968017057569,
          "peer_median_amihud": 2.5961129072238124e-08,
          "peer_median_turnover_ratio": 0.0004240742319514694,
          "target_vs_peer": {
            "score_pca_delta": -6.48,
            "adv_delta_pct": -61.1,
            "trades_delta_pct": -2.86,
            "volatility_delta_pct": -81.47,
            "spread_pct_delta_pct": -20.69,
            "spread_ticks_delta_pct": 99.35,
            "amihud_delta_pct": -354.07,
            "turnover_ratio_delta_pct": 114.72
          }
        },
        "peer_liquidity": [
          {
            "ticker": "1328",
            "score_pca": 46.57587548638132,
            "rank_pca": 1374,
            "adv": 152650.0,
            "trades": 17.0,
            "volatility": 1.0403576065628095,
            "spread_pct": 0.028323353293413185,
            "spread_ticks": 8.841121495327103,
            "amihud": 1.1788189805573455e-07,
            "turnover_ratio": 0.0009105678998918737,
            "is_target": true
          },
          {
            "ticker": "1483",
            "score_pca": 41.82879377431907,
            "rank_pca": 1496,
            "adv": 237440.00000000003,
            "trades": 15.0,
            "volatility": 0.9809269859042032,
            "spread_pct": 0.04921135646687682,
            "spread_ticks": 5.571428571428571,
            "amihud": 4.385780247849198e-08,
            "turnover_ratio": 0.000491120449606872,
            "is_target": false
          },
          {
            "ticker": "331",
            "score_pca": 58.5603112840467,
            "rank_pca": 1066,
            "adv": 546480.0,
            "trades": 18.0,
            "volatility": 0.10290122441781246,
            "spread_pct": 0.005769655008569645,
            "spread_ticks": 3.298507462686567,
            "amihud": 8.064455665984267e-09,
            "turnover_ratio": 0.00022,
            "is_target": false
          },
          {
            "ticker": "2443",
            "score_pca": 73.2295719844358,
            "rank_pca": 689,
            "adv": 4670204.0,
            "trades": 420.0,
            "volatility": 0.5883633069425113,
            "spread_pct": 0.008218974514320342,
            "spread_ticks": 1.6125730994152048,
            "amihud": 3.959554036125779e-09,
            "turnover_ratio": 0.0035398598647511928,
            "is_target": false
          },
          {
            "ticker": "6959",
            "score_pca": 37.93774319066148,
            "rank_pca": 1596,
            "adv": 51875.00000000001,
            "trades": 7.0,
            "volatility": 0.5582085832463842,
            "spread_pct": 0.036746387643248675,
            "spread_ticks": 20.5,
            "amihud": 1.2555526817349726e-07,
            "turnover_ratio": 0.00016087516087516087,
            "is_target": false
          },
          {
            "ticker": "2180",
            "score_pca": 47.548638132295714,
            "rank_pca": 1349,
            "adv": 102420.0,
            "trades": 17.0,
            "volatility": 0.5251295797981923,
            "spread_pct": 0.0247541164769588,
            "spread_ticks": 12.71875,
            "amihud": 9.518111996506076e-08,
            "turnover_ratio": 0.00035702801429606684,
            "is_target": false
          },
          {
            "ticker": "6100",
            "score_pca": 74.31906614785993,
            "rank_pca": 661,
            "adv": 2745036.0,
            "trades": 641.0,
            "volatility": 0.5425083192919296,
            "spread_pct": 0.005770646289287241,
            "spread_ticks": 1.9093504639543184,
            "amihud": 6.196471462336569e-09,
            "turnover_ratio": 0.004294060784548857,
            "is_target": false
          },
          {
            "ticker": "2521",
            "score_pca": 67.04280155642023,
            "rank_pca": 848,
            "adv": 4028099.9999999995,
            "trades": 142.0,
            "volatility": 1.0640070291956067,
            "spread_pct": 0.02218142067223497,
            "spread_ticks": 2.2268041237113403,
            "amihud": 6.050320515729319e-09,
            "turnover_ratio": 0.004448582660873164,
            "is_target": false
          },
          {
            "ticker": "1463",
            "score_pca": 6.498054474708172,
            "rank_pca": 2404,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.7779392619813047,
            "spread_pct": 0.12534059945504092,
            "spread_ticks": 7.464285714285714,
            "amihud": 3.0162678714213676e-07,
            "turnover_ratio": 0.0,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Other Support Services",
          "sector_count": 42,
          "market_count": 2570,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.7054261639368724,
              "median": 0.5726697411393592,
              "min": 0.0,
              "max": 16.135908972680973,
              "p5": 0.2263807866630155,
              "p95": 1.558374626991632,
              "count": 2570
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 59978210.70502247,
              "median": 226680.0,
              "min": 0.0,
              "max": 13045753760.0,
              "p5": 0.0,
              "p95": 235137595.7589998,
              "count": 2570
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.04294163688752076,
              "median": 0.02770394130441295,
              "min": 0.0005681922931204329,
              "max": 0.586235634471959,
              "p5": 0.0014441895608789464,
              "p95": 0.13511356651933285,
              "count": 2570
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.003932979333257075,
              "median": 0.0008686375788138418,
              "min": 0.0,
              "max": 0.38612653752209847,
              "p5": 0.0,
              "p95": 0.015343502951144412,
              "count": 2551
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 6.889665562812844e-07,
              "median": 4.435807406809365e-08,
              "min": 0.0,
              "max": 2.0997788670380663e-05,
              "p5": 4.827399748713608e-11,
              "p95": 3.6793456782680804e-06,
              "count": 2570
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1073.0515564202335,
              "median": 20.0,
              "min": 0.0,
              "max": 78392.0,
              "p5": 0.0,
              "p95": 5796.199999999966,
              "count": 2570
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.8406241764612442,
              "median": 0.7268164486820767,
              "min": 0.10290122441781246,
              "max": 2.4362592679557227,
              "p5": 0.2336727325326073,
              "p95": 1.7208138859469007,
              "count": 42
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 805038.0490476191,
              "median": 48937.5,
              "min": 0.0,
              "max": 12770549.999999998,
              "p5": 0.0,
              "p95": 4638098.799999997,
              "count": 42
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.062407661751792416,
              "median": 0.050896261937052455,
              "min": 0.004486548612210849,
              "max": 0.23289183222958063,
              "p5": 0.005893062700538896,
              "p95": 0.14014415597066937,
              "count": 42
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0014625498095747886,
              "median": 0.0002903464650826721,
              "min": 0.0,
              "max": 0.012128020386312569,
              "p5": 0.0,
              "p95": 0.008337695306687404,
              "count": 42
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.2590573694576345e-06,
              "median": 1.8373684059435423e-07,
              "min": 0.0,
              "max": 2.088903743315508e-05,
              "p5": 3.256698232017079e-09,
              "p95": 5.045964003858625e-06,
              "count": 42
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 62.73809523809524,
              "median": 8.0,
              "min": 0.0,
              "max": 641.0,
              "p5": 0.0,
              "p95": 419.9,
              "count": 42
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 1547694.375,
              "median": 391960.0,
              "min": 0.0,
              "max": 4670204.0,
              "p5": 18156.250000000004,
              "p95": 4445467.6,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 157.5,
              "median": 17.5,
              "min": 0.0,
              "max": 641.0,
              "p5": 2.45,
              "p95": 563.6499999999999,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.642498036347243,
              "median": 0.5732859450944477,
              "min": 0.10290122441781246,
              "max": 1.0640070291956067,
              "p5": 0.2506811488009454,
              "p95": 1.0349290140436154,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.03474914456581718,
              "median": 0.023467768574596884,
              "min": 0.005769655008569645,
              "max": 0.12534059945504092,
              "p5": 0.0057700019568208034,
              "p95": 0.09869536440918344,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 6.9127124294352145,
              "median": 4.434968017057569,
              "min": 1.6125730994152048,
              "max": 20.5,
              "p5": 1.7164451770038947,
              "p95": 17.776562499999997,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 7.381147242992034e-08,
              "median": 2.5961129072238124e-08,
              "min": 3.959554036125779e-09,
              "max": 3.0162678714213676e-07,
              "p5": 4.691322303987018e-09,
              "p95": 2.4000175550311284e-07,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.001688940866868914,
              "median": 0.0004240742319514694,
              "min": 0.0,
              "max": 0.004448582660873164,
              "p5": 5.630630630630631e-05,
              "p95": 0.004394500004159656,
              "count": 8
            }
          },
          "returns": {
            "window_days": 63,
            "n_obs": 63,
            "stock": 0.2716763005780347,
            "market": 0.041011153040892534,
            "sector": -0.021897157638716247,
            "peers": -0.0967871617377758,
            "vs_market": 0.23066514753714218,
            "vs_sector": 0.29357345821675096,
            "vs_peers": 0.3684634623158105
          }
        }
      },
      "6m": {
        "label": "6M",
        "window_days": 126,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 126,
          "score_pca": 51.20622568093385,
          "score_pca_percentile": 51.20622568093385,
          "rank_pca": 1255,
          "total": 2570,
          "adv_notional_sgd": 246430.0,
          "adv_volume_shares": 70000.0,
          "free_float_shares": 54910787.0,
          "turnover_ratio": 0.0012747950598486232,
          "votes": 25.0,
          "trades": 25.0,
          "spread_pct": 0.028189153147068123,
          "spread_ticks": 9.681921764089832,
          "amihud": 1.0200714582231951e-07,
          "volatility": 1.0037202238753096
        },
        "pca": {
          "valid": true,
          "window_days": 126,
          "variance_explained": 0.6305152469330463,
          "loadings": {
            "log_adv": 0.4957103694432075,
            "log_trades": 0.4492451456660449,
            "log_turnover": 0.4496576460345292,
            "neg_spread": 0.46029419827062906,
            "neg_amihud": 0.3525134547982796,
            "neg_vol": 0.11883410835799404
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
          "peer_median_adv": 290176.25,
          "peer_median_score_pca": 51.51750972762646,
          "peer_median_trades": 14.5,
          "peer_median_volatility": 0.5354295884226179,
          "peer_median_spread_pct": 0.024164367905797006,
          "peer_median_spread_ticks": 4.75781460151282,
          "peer_median_amihud": 4.560035892231411e-08,
          "peer_median_turnover_ratio": 0.00027984922352685234,
          "target_vs_peer": {
            "score_pca_delta": -0.31,
            "adv_delta_pct": -15.1,
            "trades_delta_pct": 72.41,
            "volatility_delta_pct": -87.46,
            "spread_pct_delta_pct": -16.66,
            "spread_ticks_delta_pct": 103.5,
            "amihud_delta_pct": -123.7,
            "turnover_ratio_delta_pct": 355.53
          }
        },
        "peer_liquidity": [
          {
            "ticker": "1328",
            "score_pca": 51.20622568093385,
            "rank_pca": 1255,
            "adv": 246430.0,
            "trades": 25.0,
            "volatility": 1.0037202238753096,
            "spread_pct": 0.028189153147068123,
            "spread_ticks": 9.681921764089832,
            "amihud": 1.0200714582231951e-07,
            "turnover_ratio": 0.0012747950598486232,
            "is_target": true
          },
          {
            "ticker": "1483",
            "score_pca": 27.7431906614786,
            "rank_pca": 1858,
            "adv": 52250.0,
            "trades": 5.0,
            "volatility": 0.7918063146852711,
            "spread_pct": 0.07208535768182218,
            "spread_ticks": 7.796153846153846,
            "amihud": 8.282916838802554e-08,
            "turnover_ratio": 0.00010888047703548577,
            "is_target": false
          },
          {
            "ticker": "331",
            "score_pca": 57.31517509727626,
            "rank_pca": 1098,
            "adv": 485370.0,
            "trades": 19.0,
            "volatility": 0.10854218200954618,
            "spread_pct": 0.005770788325180367,
            "spread_ticks": 3.3137575452716295,
            "amihud": 8.371549456602695e-09,
            "turnover_ratio": 0.00018777777777777779,
            "is_target": false
          },
          {
            "ticker": "2443",
            "score_pca": 75.71984435797665,
            "rank_pca": 625,
            "adv": 8056868.0,
            "trades": 564.5,
            "volatility": 0.5826421217887156,
            "spread_pct": 0.005233921973994709,
            "spread_ticks": 1.467293663928066,
            "amihud": 1.7096376812048943e-09,
            "turnover_ratio": 0.004775933186400746,
            "is_target": false
          },
          {
            "ticker": "6959",
            "score_pca": 39.8443579766537,
            "rank_pca": 1547,
            "adv": 66528.0,
            "trades": 8.0,
            "volatility": 0.47912963939823,
            "spread_pct": 0.03420914160652015,
            "spread_ticks": 19.481557377049178,
            "amihud": 1.2555526817349726e-07,
            "turnover_ratio": 0.00020511583011583012,
            "is_target": false
          },
          {
            "ticker": "2180",
            "score_pca": 45.719844357976655,
            "rank_pca": 1396,
            "adv": 94982.5,
            "trades": 10.0,
            "volatility": 0.4325346760047776,
            "spread_pct": 0.02479293725549263,
            "spread_ticks": 12.708212209302324,
            "amihud": 9.685911740984831e-08,
            "turnover_ratio": 0.0003545826169378746,
            "is_target": false
          },
          {
            "ticker": "6100",
            "score_pca": 75.13618677042801,
            "rank_pca": 640,
            "adv": 3518741.0,
            "trades": 723.0,
            "volatility": 0.4882170550565202,
            "spread_pct": 0.005074056446661139,
            "spread_ticks": 1.7804103874904675,
            "amihud": 4.469476385981558e-09,
            "turnover_ratio": 0.004579620816650432,
            "is_target": false
          },
          {
            "ticker": "2521",
            "score_pca": 66.96498054474708,
            "rank_pca": 850,
            "adv": 3847375.0,
            "trades": 132.0,
            "volatility": 1.0310748606158326,
            "spread_pct": 0.023535798556101377,
            "spread_ticks": 1.9728582768516822,
            "amihud": 7.59876842143682e-09,
            "turnover_ratio": 0.005461583557486723,
            "is_target": false
          },
          {
            "ticker": "1463",
            "score_pca": 8.715953307392995,
            "rank_pca": 2347,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.640531972983761,
            "spread_pct": 0.07597751496266644,
            "spread_ticks": 6.201871657754011,
            "amihud": 3.1418349992040597e-07,
            "turnover_ratio": 0.0,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Other Support Services",
          "sector_count": 42,
          "market_count": 2570,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.7391826955291299,
              "median": 0.5942736874178158,
              "min": 0.0,
              "max": 33.69227034911436,
              "p5": 0.22074746744764606,
              "p95": 1.5523854340199539,
              "count": 2570
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 56145764.834515855,
              "median": 216647.5,
              "min": 0.0,
              "max": 11463870050.0,
              "p5": 0.0,
              "p95": 210825143.6249999,
              "count": 2570
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.04210179416577523,
              "median": 0.02707420995450322,
              "min": 0.0005616996269061497,
              "max": 0.586235634471959,
              "p5": 0.0014027808755638215,
              "p95": 0.13469060668991223,
              "count": 2570
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0035999674216896727,
              "median": 0.0008406243451926764,
              "min": 0.0,
              "max": 0.18345863604845108,
              "p5": 0.0,
              "p95": 0.014337945085637195,
              "count": 2551
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 6.383314168860201e-07,
              "median": 4.662001424208288e-08,
              "min": 0.0,
              "max": 2.961485977790332e-05,
              "p5": 5.195200789240232e-11,
              "p95": 3.531112017226262e-06,
              "count": 2570
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1031.2101167315175,
              "median": 20.0,
              "min": 0.0,
              "max": 89671.5,
              "p5": 0.0,
              "p95": 5626.924999999999,
              "count": 2570
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.8295368847290663,
              "median": 0.7252479277290148,
              "min": 0.10854218200954618,
              "max": 1.9489665962739755,
              "p5": 0.2514677725436407,
              "p95": 1.8785666664324685,
              "count": 42
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 822411.8416071428,
              "median": 32338.5,
              "min": 0.0,
              "max": 8056868.0,
              "p5": 0.0,
              "p95": 5446824.7499999935,
              "count": 42
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.059983788895455005,
              "median": 0.05502867589873949,
              "min": 0.004161276059091302,
              "max": 0.19287504935329344,
              "p5": 0.0052607652915539925,
              "p95": 0.12302785077024248,
              "count": 42
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0016220762435254935,
              "median": 0.00021138990797461247,
              "min": 0.0,
              "max": 0.01647576191450194,
              "p5": 0.0,
              "p95": 0.005965284068369782,
              "count": 42
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.0870493981975073e-06,
              "median": 2.2899456330524526e-07,
              "min": 1.7096376812048943e-09,
              "max": 1.4648561037318155e-05,
              "p5": 3.1739052725251612e-09,
              "p95": 5.202147352682826e-06,
              "count": 42
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 71.82142857142857,
              "median": 7.0,
              "min": 0.0,
              "max": 723.0,
              "p5": 0.0,
              "p95": 534.4499999999996,
              "count": 42
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 2015264.3125,
              "median": 290176.25,
              "min": 0.0,
              "max": 8056868.0,
              "p5": 18287.5,
              "p95": 6583545.449999997,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 182.6875,
              "median": 14.5,
              "min": 0.0,
              "max": 723.0,
              "p5": 1.7500000000000002,
              "p95": 667.5249999999999,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.5693098528178318,
              "median": 0.5354295884226179,
              "min": 0.10854218200954618,
              "max": 1.0310748606158326,
              "p5": 0.2219395549078772,
              "p95": 0.947330869540136,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.030834939601054875,
              "median": 0.024164367905797006,
              "min": 0.005074056446661139,
              "max": 0.07597751496266644,
              "p5": 0.005130009381227888,
              "p95": 0.07461525991437096,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 6.840264370475151,
              "median": 4.75781460151282,
              "min": 1.467293663928066,
              "max": 19.481557377049178,
              "p5": 1.5768845171749066,
              "p95": 17.110886568337776,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 8.019706072962539e-08,
              "median": 4.560035892231411e-08,
              "min": 1.7096376812048943e-09,
              "max": 3.1418349992040597e-07,
              "p5": 2.675581227876727e-09,
              "p95": 2.4816361880898784e-07,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0019591867828006085,
              "median": 0.00027984922352685234,
              "min": 0.0,
              "max": 0.005461583557486723,
              "p5": 3.810816696242002e-05,
              "p95": 0.005221605927606631,
              "count": 8
            }
          },
          "returns": {
            "window_days": 126,
            "n_obs": 126,
            "stock": -0.3939393939393939,
            "market": 0.09474979759512481,
            "sector": -0.024444300457365342,
            "peers": -0.12144387806013979,
            "vs_market": -0.48868919153451873,
            "vs_sector": -0.3694950934820286,
            "vs_peers": -0.27249551587925414
          }
        }
      }
    },
    "period_insights": {
      "1d": {
        "liquidity": "Today’s trading looks unusually easy to access, with the 1D liquidity score at 98.4 compared with a peer median of 50.0. That matters because current conditions are stronger than the broader structural picture.",
        "market_comparison": "Return 30.6% vs peers -1.5%."
      },
      "30d": {
        "liquidity": "Over the past month, tradability has been broadly average, with a 1M score of 50.3 compared with a peer median of 49.0. That suggests access has been serviceable rather than clearly strong.",
        "market_comparison": "The stock returned 44.7% compared with peers at -8.4%, giving it a much stronger return backdrop that can help keep attention on the name."
      },
      "3m": {
        "liquidity": "Over three months, tradability has been a bit weaker, with a 3M score of 46.6 compared with a peer median of 53.1. That points to access being somewhat less consistent over this window.",
        "market_comparison": "The stock gained 27.2% while peers fell 9.7%, showing strong relative performance even as liquidity trailed the peer group."
      },
      "6m": {
        "liquidity": "Over six months, tradability has been close to average, with a score of 51.2 compared with a peer median of 51.5. That keeps the structural liquidity picture balanced rather than clearly strong or weak.",
        "market_comparison": "The stock fell 39.4% compared with peers down 12.1%, which shows weaker longer-term price performance and matters because it can weigh on sustained trading interest."
      }
    }
  },
  "q02": {
    "driver_model": {
      "valid": true,
      "model_method": "ols_with_volatility_regimes",
      "estimation_window_days": 226,
      "reporting_window_days": 63,
      "available_history_days": 226,
      "n_regimes": 2,
      "current_regime": 1,
      "current_regime_label": "High Volatility",
      "current_regime_probability": 1.0,
      "current_driver_mix": {
        "market_share": {
          "median": 0.4927897738842565,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "49.3%",
          "display_range": null,
          "display_text": "49.3%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 226 trading days.",
          "kind": "share_pct",
          "value_pct": 49.3,
          "plain_english": "Market explains about 49.3% of price moves in the current state."
        },
        "sector_share": {
          "median": 0.2737133427954812,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "27.4%",
          "display_range": null,
          "display_text": "27.4%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 226 trading days.",
          "kind": "share_pct",
          "value_pct": 27.4,
          "plain_english": "Sector explains about 27.4% of price moves in the current state."
        },
        "company_share": {
          "median": 0.23349688332026222,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "23.3%",
          "display_range": null,
          "display_text": "23.3%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 226 trading days.",
          "kind": "share_pct",
          "value_pct": 23.3,
          "plain_english": "Company-specific explains about 23.3% of price moves in the current state."
        },
        "basis": "current_state"
      },
      "current_sensitivities": {
        "beta_market": {
          "median": -22.24260521018066,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "-22.24",
          "display_range": null,
          "display_text": "-22.24",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 226 trading days.",
          "kind": "beta",
          "strength_label": "Very high",
          "plain_english": "Very high market link: a 1% market move has lined up with about a 22.24% stock move in the opposite direction in this state. The multiplier is unusually large and comes from only 226 trading days of history.",
          "value_num": -22.24
        },
        "beta_stock_lag": {
          "median": -6.936517770026607,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "-6.94",
          "display_range": null,
          "display_text": "-6.94",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 226 trading days.",
          "kind": "lag_beta",
          "value_num": -6.94
        },
        "beta_sector": {
          "median": 14.860404496730645,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "14.86",
          "display_range": null,
          "display_text": "14.86",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 226 trading days.",
          "kind": "beta",
          "strength_label": "Very high",
          "plain_english": "Very high sector link: a 1% sector move has lined up with about a 14.86% stock move in the same direction in this state. The multiplier is unusually large and comes from only 226 trading days of history.",
          "value_num": 14.86
        },
        "beta_market_lag": {
          "median": -7.889062987114955,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "-7.89",
          "display_range": null,
          "display_text": "-7.89",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 226 trading days.",
          "kind": "lag_beta",
          "value_num": -7.89
        },
        "beta_sector_lag": {
          "median": 12.879179752221678,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "12.88",
          "display_range": null,
          "display_text": "12.88",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 226 trading days.",
          "kind": "lag_beta",
          "value_num": 12.88
        },
        "posterior_source": null,
        "intervals_collapsed": false,
        "confidence_label": "High, limited history",
        "confidence_note": "Based on 226 trading days relative to the 252-day target."
      },
      "rolling_windows": {},
      "monthly_history": [
        {
          "month_key": "2025-05",
          "month_label": "May 2025",
          "month_short_label": "May",
          "period_label": "2025-05-16 to 2025-05-30",
          "n_obs": 11,
          "partial_month": true,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.3931497991084709,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "39.3%",
            "display_range": null,
            "display_text": "39.3%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 11 trading days.",
            "kind": "share_pct",
            "value_pct": 39.3,
            "plain_english": "Company-specific explains about 39.3% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.23160931511355232,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "23.2%",
              "display_range": null,
              "display_text": "23.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 11 trading days.",
              "kind": "share_pct",
              "value_pct": 23.2,
              "plain_english": "Market explains about 23.2% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.3752408857779769,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "37.5%",
              "display_range": null,
              "display_text": "37.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 11 trading days.",
              "kind": "share_pct",
              "value_pct": 37.5,
              "plain_english": "Sector explains about 37.5% of price moves in the current state."
            },
            "company_share": {
              "median": 0.3931497991084709,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "39.3%",
              "display_range": null,
              "display_text": "39.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 11 trading days.",
              "kind": "share_pct",
              "value_pct": 39.3,
              "plain_english": "Company-specific explains about 39.3% of price moves in the current state."
            }
          },
          "summary": "May: More mixed, though company-driven still has the largest share."
        },
        {
          "month_key": "2025-06",
          "month_label": "June 2025",
          "month_short_label": "Jun",
          "period_label": "2025-06-02 to 2025-06-30",
          "n_obs": 21,
          "partial_month": false,
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.47362926479826056,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "47.4%",
            "display_range": null,
            "display_text": "47.4%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
            "kind": "share_pct",
            "value_pct": 47.4,
            "plain_english": "Market explains about 47.4% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.47362926479826056,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "47.4%",
              "display_range": null,
              "display_text": "47.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 47.4,
              "plain_english": "Market explains about 47.4% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.07468157742130066,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "7.5%",
              "display_range": null,
              "display_text": "7.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 7.5,
              "plain_english": "Sector explains about 7.5% of price moves in the current state."
            },
            "company_share": {
              "median": 0.4516891577804388,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "45.2%",
              "display_range": null,
              "display_text": "45.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 45.2,
              "plain_english": "Company-specific explains about 45.2% of price moves in the current state."
            }
          },
          "summary": "Jun: Mostly market-driven."
        },
        {
          "month_key": "2025-07",
          "month_label": "July 2025",
          "month_short_label": "Jul",
          "period_label": "2025-07-02 to 2025-07-31",
          "n_obs": 22,
          "partial_month": true,
          "dominant_driver": "sector",
          "dominant_driver_label": "Sector",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.37703690212487,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "37.7%",
            "display_range": null,
            "display_text": "37.7%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
            "kind": "share_pct",
            "value_pct": 37.7,
            "plain_english": "Sector explains about 37.7% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.2483050334508801,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "24.8%",
              "display_range": null,
              "display_text": "24.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 24.8,
              "plain_english": "Market explains about 24.8% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.37703690212487,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "37.7%",
              "display_range": null,
              "display_text": "37.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 37.7,
              "plain_english": "Sector explains about 37.7% of price moves in the current state."
            },
            "company_share": {
              "median": 0.37465806442425,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "37.5%",
              "display_range": null,
              "display_text": "37.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 37.5,
              "plain_english": "Company-specific explains about 37.5% of price moves in the current state."
            }
          },
          "summary": "Jul: More mixed, though sector-driven still has the largest share."
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
            "median": 0.5397213562132807,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "54.0%",
            "display_range": null,
            "display_text": "54.0%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
            "kind": "share_pct",
            "value_pct": 54.0,
            "plain_english": "Company-specific explains about 54.0% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.27921097851933036,
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
              "plain_english": "Market explains about 27.9% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.18106766526738882,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "18.1%",
              "display_range": null,
              "display_text": "18.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 18.1,
              "plain_english": "Sector explains about 18.1% of price moves in the current state."
            },
            "company_share": {
              "median": 0.5397213562132807,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "54.0%",
              "display_range": null,
              "display_text": "54.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 54.0,
              "plain_english": "Company-specific explains about 54.0% of price moves in the current state."
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
            "median": 0.5442921737269129,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "54.4%",
            "display_range": null,
            "display_text": "54.4%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
            "kind": "share_pct",
            "value_pct": 54.4,
            "plain_english": "Company-specific explains about 54.4% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.24456978941043203,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "24.5%",
              "display_range": null,
              "display_text": "24.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 24.5,
              "plain_english": "Market explains about 24.5% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.21113803686265503,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "21.1%",
              "display_range": null,
              "display_text": "21.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 21.1,
              "plain_english": "Sector explains about 21.1% of price moves in the current state."
            },
            "company_share": {
              "median": 0.5442921737269129,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "54.4%",
              "display_range": null,
              "display_text": "54.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 54.4,
              "plain_english": "Company-specific explains about 54.4% of price moves in the current state."
            }
          },
          "summary": "Sep: Mostly company-driven."
        },
        {
          "month_key": "2025-10",
          "month_label": "October 2025",
          "month_short_label": "Oct",
          "period_label": "2025-10-02 to 2025-10-31",
          "n_obs": 20,
          "partial_month": true,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.5762091677759787,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "57.6%",
            "display_range": null,
            "display_text": "57.6%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
            "kind": "share_pct",
            "value_pct": 57.6,
            "plain_english": "Company-specific explains about 57.6% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.2896853423577539,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "29.0%",
              "display_range": null,
              "display_text": "29.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 29.0,
              "plain_english": "Market explains about 29.0% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.13410548986626722,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "13.4%",
              "display_range": null,
              "display_text": "13.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 13.4,
              "plain_english": "Sector explains about 13.4% of price moves in the current state."
            },
            "company_share": {
              "median": 0.5762091677759787,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "57.6%",
              "display_range": null,
              "display_text": "57.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 57.6,
              "plain_english": "Company-specific explains about 57.6% of price moves in the current state."
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
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.6745757582179575,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "67.5%",
            "display_range": null,
            "display_text": "67.5%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
            "kind": "share_pct",
            "value_pct": 67.5,
            "plain_english": "Company-specific explains about 67.5% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.07212351002457416,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "7.2%",
              "display_range": null,
              "display_text": "7.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 7.2,
              "plain_english": "Market explains about 7.2% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.2533007317574684,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "25.3%",
              "display_range": null,
              "display_text": "25.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 25.3,
              "plain_english": "Sector explains about 25.3% of price moves in the current state."
            },
            "company_share": {
              "median": 0.6745757582179575,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "67.5%",
              "display_range": null,
              "display_text": "67.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 67.5,
              "plain_english": "Company-specific explains about 67.5% of price moves in the current state."
            }
          },
          "summary": "Nov: Still clearly company-driven."
        },
        {
          "month_key": "2025-12",
          "month_label": "December 2025",
          "month_short_label": "Dec",
          "period_label": "2025-12-01 to 2025-12-31",
          "n_obs": 15,
          "partial_month": false,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.5780965817124002,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "57.8%",
            "display_range": null,
            "display_text": "57.8%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
            "kind": "share_pct",
            "value_pct": 57.8,
            "plain_english": "Company-specific explains about 57.8% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.23886064783753053,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "23.9%",
              "display_range": null,
              "display_text": "23.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
              "kind": "share_pct",
              "value_pct": 23.9,
              "plain_english": "Market explains about 23.9% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.18304277045006923,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "18.3%",
              "display_range": null,
              "display_text": "18.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
              "kind": "share_pct",
              "value_pct": 18.3,
              "plain_english": "Sector explains about 18.3% of price moves in the current state."
            },
            "company_share": {
              "median": 0.5780965817124002,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "57.8%",
              "display_range": null,
              "display_text": "57.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
              "kind": "share_pct",
              "value_pct": 57.8,
              "plain_english": "Company-specific explains about 57.8% of price moves in the current state."
            }
          },
          "summary": "Dec: Mostly company-driven."
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
            "median": 0.8224990404352737,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "82.2%",
            "display_range": null,
            "display_text": "82.2%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
            "kind": "share_pct",
            "value_pct": 82.2,
            "plain_english": "Company-specific explains about 82.2% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.046384343601328815,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "4.6%",
              "display_range": null,
              "display_text": "4.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 4.6,
              "plain_english": "Market explains about 4.6% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.1311166159633975,
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
              "plain_english": "Sector explains about 13.1% of price moves in the current state."
            },
            "company_share": {
              "median": 0.8224990404352737,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "82.2%",
              "display_range": null,
              "display_text": "82.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 82.2,
              "plain_english": "Company-specific explains about 82.2% of price moves in the current state."
            }
          },
          "summary": "Jan: Still clearly company-driven."
        },
        {
          "month_key": "2026-02",
          "month_label": "February 2026",
          "month_short_label": "Feb",
          "period_label": "2026-02-02 to 2026-02-27",
          "n_obs": 17,
          "partial_month": false,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.5997190503526413,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "60.0%",
            "display_range": null,
            "display_text": "60.0%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
            "kind": "share_pct",
            "value_pct": 60.0,
            "plain_english": "Company-specific explains about 60.0% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.2219597942963262,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "22.2%",
              "display_range": null,
              "display_text": "22.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
              "kind": "share_pct",
              "value_pct": 22.2,
              "plain_english": "Market explains about 22.2% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.17832115535103246,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "17.8%",
              "display_range": null,
              "display_text": "17.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
              "kind": "share_pct",
              "value_pct": 17.8,
              "plain_english": "Sector explains about 17.8% of price moves in the current state."
            },
            "company_share": {
              "median": 0.5997190503526413,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "60.0%",
              "display_range": null,
              "display_text": "60.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
              "kind": "share_pct",
              "value_pct": 60.0,
              "plain_english": "Company-specific explains about 60.0% of price moves in the current state."
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
            "median": 0.4230149890138839,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "42.3%",
            "display_range": null,
            "display_text": "42.3%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
            "kind": "share_pct",
            "value_pct": 42.3,
            "plain_english": "Company-specific explains about 42.3% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.15586005293732022,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "15.6%",
              "display_range": null,
              "display_text": "15.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 15.6,
              "plain_english": "Market explains about 15.6% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.4211249580487959,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "42.1%",
              "display_range": null,
              "display_text": "42.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 42.1,
              "plain_english": "Sector explains about 42.1% of price moves in the current state."
            },
            "company_share": {
              "median": 0.4230149890138839,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "42.3%",
              "display_range": null,
              "display_text": "42.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 42.3,
              "plain_english": "Company-specific explains about 42.3% of price moves in the current state."
            }
          },
          "summary": "Mar: More mixed, though company-driven still has the largest share."
        },
        {
          "month_key": "2026-04",
          "month_label": "April 2026",
          "month_short_label": "Apr",
          "period_label": "2026-04-01 to 2026-04-23",
          "n_obs": 14,
          "partial_month": false,
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.44541018385179354,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "44.5%",
            "display_range": null,
            "display_text": "44.5%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 14 trading days.",
            "kind": "share_pct",
            "value_pct": 44.5,
            "plain_english": "Market explains about 44.5% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.44541018385179354,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "44.5%",
              "display_range": null,
              "display_text": "44.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 14 trading days.",
              "kind": "share_pct",
              "value_pct": 44.5,
              "plain_english": "Market explains about 44.5% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.2187542106475976,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "21.9%",
              "display_range": null,
              "display_text": "21.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 14 trading days.",
              "kind": "share_pct",
              "value_pct": 21.9,
              "plain_english": "Sector explains about 21.9% of price moves in the current state."
            },
            "company_share": {
              "median": 0.3358356055006089,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "33.6%",
              "display_range": null,
              "display_text": "33.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 14 trading days.",
              "kind": "share_pct",
              "value_pct": 33.6,
              "plain_english": "Company-specific explains about 33.6% of price moves in the current state."
            }
          },
          "summary": "Apr: More mixed, though market-driven still has the largest share."
        }
      ],
      "regimes": [
        {
          "id": 0,
          "label": "Low Volatility",
          "pct_time": 0.5,
          "expected_duration_days": 9.333333333333334,
          "current_probability": 0.0,
          "n_days_effective": 112.0,
          "volatility": {
            "median": 0.03074789416252019,
            "low": 0.03074789416252019,
            "high": 0.03074789416252019
          },
          "volatility_label": "Low Volatility",
          "current_probability_display": 0.0
        },
        {
          "id": 1,
          "label": "High Volatility",
          "pct_time": 0.5,
          "expected_duration_days": 8.615384615384615,
          "current_probability": 1.0,
          "n_days_effective": 112.0,
          "volatility": {
            "median": 0.22415455753135433,
            "low": 0.22415455753135433,
            "high": 0.22415455753135433
          },
          "volatility_label": "High Volatility",
          "current_probability_display": null
        }
      ],
      "transitions": {
        "mean": [
          [
            0.8928571428571429,
            0.10714285714285714
          ],
          [
            0.10810810810810811,
            0.8918918918918919
          ]
        ],
        "low": [],
        "high": [],
        "counts": [
          [
            100.0,
            12.0
          ],
          [
            12.0,
            99.0
          ]
        ]
      },
      "methodology": {
        "estimation_window_days": 226,
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
        "market_link_display": "-22.24",
        "sector_link_display": "14.86",
        "market_link_explainer": "Very high market link. A 1% market move has lined up with about a 22.24% stock move in the opposite direction in this state. This is a point estimate from 226 trading days.",
        "sector_link_explainer": "Very high sector link. A 1% sector move has lined up with about a 14.86% stock move in the same direction in this state. This is a point estimate from 226 trading days.",
        "stock_persistence_display": "-6.94",
        "point_estimate_note": "Point estimate only because the current state has 226 trading days.",
        "history_limited_note": "Read is based on 226 trading days versus the 252-day target."
      },
      "current_summary": {
        "regime_label": "High Volatility",
        "dominant_driver": "market",
        "dominant_driver_label": "Market",
        "driver_share_pct": 49.3,
        "driver_share_display": "49.3%",
        "confidence_label": "High, limited history",
        "confidence_pct": 100.0,
        "display_confidence_pct": null,
        "confidence_note": "Based on 226 trading days relative to the 252-day target.",
        "history_days": 226,
        "history_limited": true,
        "volatility_label": "High Volatility",
        "lead_signal_text": "No stable lead signal.",
        "state_term": "state",
        "stay_probability": 0.8918918918918919,
        "effective_days": 112.0,
        "persistence_note": "This state looks more persistent, with a typical run length of about 8.6 days.",
        "expected_duration_days": 8.6
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
          "pct_time": 0.5,
          "expected_duration_days": 9.333333333333334,
          "current_probability": 0.0,
          "n_days_effective": 112.0,
          "volatility": {
            "median": 0.03074789416252019,
            "low": 0.03074789416252019,
            "high": 0.03074789416252019
          },
          "volatility_label": "Low Volatility"
        },
        {
          "id": 1,
          "label": "High Volatility",
          "pct_time": 0.5,
          "expected_duration_days": 8.615384615384615,
          "current_probability": 1.0,
          "n_days_effective": 112.0,
          "volatility": {
            "median": 0.22415455753135433,
            "low": 0.22415455753135433,
            "high": 0.22415455753135433
          },
          "volatility_label": "High Volatility"
        }
      ],
      "transitions": [
        [
          0.8928571428571429,
          0.10714285714285714
        ],
        [
          0.10810810810810811,
          0.8918918918918919
        ]
      ],
      "transition_intervals": {
        "mean": [
          [
            0.8928571428571429,
            0.10714285714285714
          ],
          [
            0.10810810810810811,
            0.8918918918918919
          ]
        ],
        "low": [],
        "high": [],
        "counts": [
          [
            100.0,
            12.0
          ],
          [
            12.0,
            99.0
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
        "text": "Liquidity score: 51.2 — Moderate",
        "bg": "bg-amber-500/20",
        "textColor": "text-amber-400"
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
        "bg": "bg-red-500/20",
        "textColor": "text-red-400"
      },
      "short": {
        "text": "Short interest: N/A",
        "bg": "bg-amber-500/20",
        "textColor": "text-amber-400"
      },
      "header_health": {
        "text": "Liquidity Health: MODERATE",
        "bg": "bg-amber-500/20",
        "textColor": "text-amber-400",
        "dot": "bg-amber-500"
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
    "liq_subtitle": "Peer-relative liquidity is close to the middle, while lighter bid depth makes near-term access less even.",
    "market_comparison_title": "How You Compare to the Market",
    "market_comparison_subtitle": "Context relative to market, sector, and peer medians.",
    "perf_title": "Stock Performance",
    "perf_subtitle": "Recent returns are far stronger than peers and ahead of the market over one month.",
    "perf_insight": "That price strength sits alongside a 6M liquidity score of 51.2, almost level with the 51.5 peer median, while market factors still explain 49.3% of trading. The backdrop is firmer than peers, but access has not moved clearly above the group.",
    "drivers_title": "What Moves Your Stock Price?",
    "drivers_subtitle": "Market moves are the main influence at 49.3%, so broader conditions still shape much of the tape.",
    "drivers_strip": [
      {
        "title": "Current Driver (Last 5 Days)",
        "text": "Over the last 5 trading days, moves are mainly market-driven, accounting for about 49.3% of price changes. Other influences are secto%, and company-specific 23.3%."
      },
      {
        "title": "Driver Mix",
        "text": "Based on the last 5 trading days, current mix is market 49.3%, secto%, and company-specific 23.3%."
      },
      {
        "title": "Monthly Trend",
        "text": "The driver mix has shifted from company-driven to market-driven over Feb to Apr."
      }
    ],
    "drivers_pie_title": "Current Driver Mix (Last 5 Days)",
    "drivers_pie_note": "Based on the last 5 trading days, current split is market 49.3%, secto%, and company-specific 23.3%.",
    "lead_lag_title": "",
    "lead_lag_note": "",
    "rolling_title": "Monthly Driver Shift",
    "rolling_latest_label": "Latest: {period}",
    "rolling_note": "Each bar shows the monthly split between market-, sector-, and company-driven moves.",
    "drivers_bottom_line": "That matters because the stock has risen 44.7% over one month while peers fell 8.4%, yet displayed bid depth is only 0.46x ask depth. The return backdrop is strong, but buy-side support is thinner.",
    "drivers_wtd_title": "Key Reads",
    "drivers_wtd_list": [
      "Market moves are the main driver now, accounting for 49.3% of recent price action.",
      "The pattern has become more mixed over recent months, shifting from mostly market in February to market-led in April."
    ],
    "regime_title": "Market State",
    "regime_subtitle": "The current trading backdrop is supportive, with strong relative returns and liquidity still near peer levels.",
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
    "exec_check_subtitle": "Combines the final continuous-session displayed book before close, trade-size stress tests based on available history from May 14, 2025 to Apr 23, 2026 (209 trading days • 67,236 trades), large sell-side orders observed today, and intraday spread/depth during the continuous trading session.",
    "order_book_title": "Order Book Depth (Available Liquidity)",
    "order_book_note": "Depth shown is based on the displayed order book.",
    "peer_capacity_title": "Peer Capacity Context",
    "peer_capacity_note": "Immediate buy-side depth is lighter than the monthly baseline, so day-to-day access may feel weaker than the 1M score",
    "impact_summary_title": "Estimated Price Impact (Sell Orders)",
    "impact_summary_subtitle": "Approximate price impact (%) for sell orders.",
    "exec_check_insight": "The clearest execution watchpoint is a lighter bid, with displayed bid depth at 0.46x ask depth despite a 1 tick spread. Near-term buy-side access may therefore feel weaker than the broader monthly liquidity picture.",
    "trader_composition_title": "Who's Trading Your Stock?",
    "trader_composition_subtitle": "Shows whether trading is mostly retail-like, institution-like, mixed, or unclassified.",
    "trader_retail_threshold": "Retail-like flow",
    "trader_mixed_threshold": "Mixed flow",
    "trader_instit_threshold": "Institution-like flow",
    "peer_trader_title": "Peer Comparison: Trader Mix",
    "peer_trader_subtitle": "How the trader mix compares with peers.",
    "price_moving_title": "Which Trades Move the Price?",
    "price_moving_subtitle": "Price-moving trades are 55.7% of total trades.",
    "intraday_title": "When Does Trading Happen?",
    "intraday_subtitle": "The order book is the key near-term signal, with a clear imbalance toward the ask side.",
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
    "intraday_insight": "Session split is open 0.1%, continuous 99.2%, and close 0.7%. Current trading concentration score is 0.329.",
    "short_title": "Short Selling & Lending",
    "short_subtitle": "The current trading picture is better explained by market direction and order-book balance.",
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
    "exec_subtitle": "Liquidity looks broadly in line for the company’s size, with strong recent returns but a thinner buy-side book today.",
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
        "value": "51.2/100",
        "sub": "Peer median 51.5 (-0.3 pts)",
        "interp": {
          "text": "Moderate",
          "cls": "interpretation-neutral",
          "icon": "◆"
        }
      },
      {
        "title": "Volume vs Peers",
        "value": "HK$246.4K",
        "sub": "Peer median HK$290.2K",
        "interp": {
          "text": "Weak",
          "cls": "interpretation-bad",
          "icon": "◆"
        }
      },
      {
        "title": "Spread",
        "value": "2.82%",
        "sub": "9.68 ticks; peers 2.42%",
        "interp": {
          "text": "Wider",
          "cls": "interpretation-bad",
          "icon": "◆"
        }
      }
    ],
    "liq_insight": "Liquidity is broadly average for the company’s size, with a 6M score of 51.2 compared with a peer median of 51.5. That keeps peer-relative access close to the middle rather than clearly ahead. The more important near-term signal is the order book, where displayed bid depth is only 0.46x ask depth despite a 1 tick spread. The stock remains tradable, but buy-side access looks less well supported day to day.",
    "perf_badge": "Context",
    "exec_check_tiles": [
      {
        "title": "Mid Price",
        "value": "4.325",
        "note": "final continuous-session displayed book before close",
        "color": "text-white"
      },
      {
        "title": "Spread",
        "value": "0.23%",
        "note": "1.00 ticks",
        "color": "text-slate-300"
      },
      {
        "title": "Depth",
        "value": "0.46x",
        "note": "Bid depth / ask depth on the displayed order book",
        "color": "text-slate-300"
      }
    ],
    "impact_summary_cards": [
      {
        "title": "~S$100K sell",
        "text": "Estimated impact ~-0.56% with 100.0% fill.",
        "cls": "ok"
      },
      {
        "title": "S$1.0M sell",
        "text": "Estimated impact ~-1.86% with 31.0% fill.",
        "cls": "warn"
      },
      {
        "title": "S$2.5M sell",
        "text": "Estimated impact ~-1.86% with 12.4% fill.",
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
        "value": "51",
        "suffix": "/100",
        "bar_pct": 51,
        "color_value": "text-amber-400",
        "color_bar": "bg-amber-500",
        "subtext": "Rank 1255/2570",
        "interpretation": {
          "text": "Moderate",
          "cls": "interpretation-neutral",
          "icon": "◆"
        }
      },
      {
        "title": "Trading Cost (Spread)",
        "tooltip": {
          "title": "Trading Cost (Spread)",
          "body": "The gap between best buy and sell prices in the selected window."
        },
        "value": "2.82",
        "suffix": "%",
        "bar_pct": 28,
        "color_value": "text-amber-400",
        "color_bar": "bg-amber-500",
        "subtext": "2.82% • 9.68 ticks vs peers 2.42%",
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
        "value": "246.4K",
        "value_prefix": "HK$",
        "suffix": "",
        "bar_pct": 60,
        "color_value": "text-red-400",
        "color_bar": "bg-red-500",
        "subtext": "Peer median HK$290.2K",
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
        "value": "49.3",
        "suffix": "market",
        "bar_pct": 49,
        "color_value": "text-amber-400",
        "color_bar": "bg-amber-500",
        "subtext": "Secto% • Company 23.3%",
        "interpretation": {
          "text": "Market",
          "cls": "interpretation-neutral",
          "icon": "◆"
        }
      }
    ],
    "exec_takeaways": [
      "Structural liquidity is broadly in line with peers, with a 6M score of 51.2 compared with a peer median of 51.5. That leaves access mixed rather than clearly strong or weak for the stock’s size.",
      "The strongest signal is in performance, with a 1M return of 44.7% compared with peers at -8.4% and the market at 2.4%. That gives the stock a firmer return backdrop than the wider group.",
      "The main near-term constraint is on the buy side, with displayed bid depth at 0.46x ask depth even as spread stays at 1 tick. That matters because day-to-day buying access may feel thinner, while market factors still account for 49.3% of trading direction."
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
      "overall": "6M liquidity is mixed: score 51.2 vs peer median 51.5 (-0.3 pts). Recent trend context is too limited to say whether access has changed from the 1M baseline.",
      "strengths": [
        "6M score 51.2 vs peer median 51.5 (-0.3 pts)."
      ],
      "concerns": [],
      "peer_context": "Primary-period score gap vs peers: -0.3 pts."
    },
    "market_comparison": {
      "returns": {
        "insight": "6M return is -39.4%, worse than market, sector, and peers, which suggests weaker price performance than comparable names.",
        "vs_market": "Worse than market: -39.4% vs market 9.5%.",
        "vs_sector": "Worse than sector: -39.4% vs sector -2.4%.",
        "vs_peers": "Worse than peers: -39.4% vs peers -12.1%."
      },
      "adv": {
        "insight": "ADV is HK$246.4K, better than market and sector, but worse than peers, which shows trading size is uneven across comparison groups.",
        "vs_market": "Better than market: HK$246.4K vs market HK$216.6K.",
        "vs_sector": "Better than sector: HK$246.4K vs sector HK$32.3K.",
        "vs_peers": "Worse than peers: HK$246.4K vs peers HK$290.2K."
      },
      "spread": {
        "insight": "Spread is 2.82%, better than sector, but worse than peers, which shows execution cost is mixed across comparison groups.",
        "vs_market": "In line with market: 2.82% vs market 2.71%.",
        "vs_sector": "Better than sector: 2.82% vs sector 5.50%.",
        "vs_peers": "Worse than peers: 2.82% vs peers 2.42%."
      },
      "turnover_ratio": {
        "insight": "Turnover ratio is 0.13%, better than market, sector, and peers, which shows a more active free-float turnover profile than comparable names.",
        "vs_market": "Better than market: 0.13% vs market 0.08%.",
        "vs_sector": "Better than sector: 0.13% vs sector 0.02%.",
        "vs_peers": "Better than peers: 0.13% vs peers 0.03%."
      },
      "volatility": {
        "insight": "Volatility is 100.37%, worse than market, sector, and peers, which suggests day-to-day price swings are heavier than comparable names.",
        "vs_market": "Worse than market: 100.37% vs market 59.43%.",
        "vs_sector": "Worse than sector: 100.37% vs sector 72.52%.",
        "vs_peers": "Worse than peers: 100.37% vs peers 53.54%."
      },
      "trades": {
        "insight": "Trades is 25, better than market, sector, and peers, which supports more fully reflective of day-to-day access day-to-day activity than comparable names.",
        "vs_market": "Better than market: 25 vs market 20.",
        "vs_sector": "Better than sector: 25 vs sector 7.",
        "vs_peers": "Better than peers: 25 vs peers 14."
      },
      "amihud": {
        "insight": "Price impact is 1.02e-07, better than sector, but worse than market and peers, which shows price impact is mixed across comparison groups.",
        "vs_market": "Worse than market: 1.02e-07 vs market 4.66e-08.",
        "vs_sector": "Better than sector: 1.02e-07 vs sectoe-07.",
        "vs_peers": "Worse than peers: 1.02e-07 vs peers 4.56e-08."
      }
    },
    "performance": {
      "overall": "Recent returns are far ahead of the main comparison groups, with the stock up 44.7% over 1M compared with peers down 8.4% and the market up 2.4%. Liquidity only partly supports that move because the 6M liquidity score of 51.2 is essentially in line with the 51.5 peer median, while the order book is less supportive on the buy side with displayed bid depth at 0.46x ask depth despite a 1 tick spread.",
      "conclusion": "The move looks more market-linked than purely company-specific, with strong returns but only mixed liquidity confirmation."
    },
    "drivers": {
      "overall": "Market factors are driving the stock now, accounting for 49.3% of recent moves, which means the tape is being shaped more by broader conditions than by stock-specific news. That matters because the recent return backdrop is strong, with the shares up 44.7% over one month compared with peers down 8.4%, so market support is landing on a stock that has already outperformed.",
      "beta": "Based on the last 5 trading days, current mix is market 49.3%, secto%, and company-specific 23.3%.",
      "rolling_change": "The driver mix is more balanced than it was earlier in the quarter, moving from mostly market in February to mixed in March and then market-led in April. That shift matters because the stock now appears more exposed to swings in the broader tape than it was a few months ago."
    },
    "regime": {
      "overall": "Short expected duration points to a short-lived state rather than a durable market backdrop.",
      "current": "The stock is currently in a high-volatility state, which sits alongside a strong 1M return of +44.7% compared with peers at -8.4% and the market at +2.4%.",
      "transitions": "This looks more settled than short-lived, with a typical run length of about 8.6 days, although the read is still mixed rather than definitive.",
      "trading_implications": "This state looks more persistent, with a typical run length of about 8.6 days."
    },
    "execution": {
      "overall": "Displayed liquidity looks bid-light because the spread is 1 tick but bid depth is only 0.46x ask depth, which means the book is orderly on price but not evenly supported on",
      "concern": "Trade-size percentiles use available history from May 14, 2025 to Ap, 2026 (209 trading days • 67,236 trades), not a full year.",
      "peer_context": "This book does not materially improve the broader read because the 6M liquidity score of 51.2 sits almost in line with the peer median of 51.5, while the current bid-light shape points to slightly weaker day-to-day access than that peer-relative standing implies."
    },
    "trader_composition": {
      "overall": "By trade count and value, flow looks mainly retail-like, which makes activity look broad-based rather than institution-led.",
      "retail_heavy": "Retail-like trades account for 97.8% of trade count and 81.4% of trade value, while institution-like trades are 0.0% of count and 0.8% of value. That points to participation being dominated by smaller individual tickets, which supports a steadier underlying flow mix.",
      "institutional_gap": "Institution-like activity is minimal at 0.0% of trade count and 0.8% of trade value, so there is little sign that large-ticket participation is setting the tone.",
      "peer_comparison": "The mix stands out as clearly retail-leaning, with retail-like activity dominating both trade count and trade value rather than only one side of the picture."
    },
    "price_moving": {
      "overall": "Price action is being set against a retail-leaning flow backdrop, so the signal looks mixed rather than clearly driven by large-ticket trades. Retail-like trades dominate both trade count and trade value, while market factors still explain 49.3% of trading. That means price moves are likely reflecting broad participation alongside wider market direction.",
      "interpretation": "",
      "asymmetry": ""
    },
    "short_selling": {
      "overall": "Short activity does not stand out as a key factor in the tape. The clearer signals are the strong 1M share price gain of 44.7% and a market-driven tape at 49.3%, which point to broader buying interest and market moves as the main influences on trading conditions.",
      "level": "N/A",
      "correlation": "N/A",
      "trend": "There is no clear sign that short activity is rising or falling in a way that changes the picture. What matters more near term is that displayed bid depth is only 0.46x of ask depth, so day-to-day access can still feel thinner even without short activity emerging as a separate pressure point.",
      "peaks": "N/A"
    },
    "intraday": {
      "overall": "Liquidity is most available during the continuous session, which carries 99.2% of activity compared with 0.1% at the open and 0.7% at the close.",
      "hhi_interpretation": "Concentrated - liquidity clustered at open/close",
      "best_times": "The clearest liquidity window is the continuous session, where almost all trading takes place and access may be most consistent.",
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
        "1328",
        "1483",
        "331",
        "2443",
        "6959",
        "2180",
        "6100",
        "2521",
        "1463"
      ],
      "scores": [
        51.20622568093385,
        27.7431906614786,
        57.31517509727626,
        75.71984435797665,
        39.8443579766537,
        45.719844357976655,
        75.13618677042801,
        66.96498054474708,
        8.715953307392995
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
        246430.0,
        52250.0,
        485370.0,
        8056868.0,
        66528.0,
        94982.5,
        3518741.0,
        3847375.0,
        0.0
      ],
      "total": 2570
    },
    "market_comparison": {
      "sector_name": "Other Support Services",
      "sector_count": 42,
      "market_count": 2570,
      "company": {
        "volatility": 1.0037202238753096,
        "adv": 246430.0,
        "spread_pct": 0.028189153147068123,
        "turnover_ratio": 0.0012747950598486232,
        "amihud": 1.0200714582231951e-07,
        "trades": 25.0
      },
      "market": {
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.7391826955291299,
          "median": 0.5942736874178158,
          "min": 0.0,
          "max": 33.69227034911436,
          "p5": 0.22074746744764606,
          "p95": 1.5523854340199539,
          "count": 2570
        },
        "adv": {
          "direction": "higher_is_better",
          "mean": 56145764.834515855,
          "median": 216647.5,
          "min": 0.0,
          "max": 11463870050.0,
          "p5": 0.0,
          "p95": 210825143.6249999,
          "count": 2570
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.04210179416577523,
          "median": 0.02707420995450322,
          "min": 0.0005616996269061497,
          "max": 0.586235634471959,
          "p5": 0.0014027808755638215,
          "p95": 0.13469060668991223,
          "count": 2570
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.0035999674216896727,
          "median": 0.0008406243451926764,
          "min": 0.0,
          "max": 0.18345863604845108,
          "p5": 0.0,
          "p95": 0.014337945085637195,
          "count": 2551
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 6.383314168860201e-07,
          "median": 4.662001424208288e-08,
          "min": 0.0,
          "max": 2.961485977790332e-05,
          "p5": 5.195200789240232e-11,
          "p95": 3.531112017226262e-06,
          "count": 2570
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 1031.2101167315175,
          "median": 20.0,
          "min": 0.0,
          "max": 89671.5,
          "p5": 0.0,
          "p95": 5626.924999999999,
          "count": 2570
        }
      },
      "sector": {
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.8295368847290663,
          "median": 0.7252479277290148,
          "min": 0.10854218200954618,
          "max": 1.9489665962739755,
          "p5": 0.2514677725436407,
          "p95": 1.8785666664324685,
          "count": 42
        },
        "adv": {
          "direction": "higher_is_better",
          "mean": 822411.8416071428,
          "median": 32338.5,
          "min": 0.0,
          "max": 8056868.0,
          "p5": 0.0,
          "p95": 5446824.7499999935,
          "count": 42
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.059983788895455005,
          "median": 0.05502867589873949,
          "min": 0.004161276059091302,
          "max": 0.19287504935329344,
          "p5": 0.0052607652915539925,
          "p95": 0.12302785077024248,
          "count": 42
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.0016220762435254935,
          "median": 0.00021138990797461247,
          "min": 0.0,
          "max": 0.01647576191450194,
          "p5": 0.0,
          "p95": 0.005965284068369782,
          "count": 42
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 1.0870493981975073e-06,
          "median": 2.2899456330524526e-07,
          "min": 1.7096376812048943e-09,
          "max": 1.4648561037318155e-05,
          "p5": 3.1739052725251612e-09,
          "p95": 5.202147352682826e-06,
          "count": 42
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 71.82142857142857,
          "median": 7.0,
          "min": 0.0,
          "max": 723.0,
          "p5": 0.0,
          "p95": 534.4499999999996,
          "count": 42
        }
      },
      "peers": {
        "adv": {
          "direction": "higher_is_better",
          "mean": 2015264.3125,
          "median": 290176.25,
          "min": 0.0,
          "max": 8056868.0,
          "p5": 18287.5,
          "p95": 6583545.449999997,
          "count": 8
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 182.6875,
          "median": 14.5,
          "min": 0.0,
          "max": 723.0,
          "p5": 1.7500000000000002,
          "p95": 667.5249999999999,
          "count": 8
        },
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.5693098528178318,
          "median": 0.5354295884226179,
          "min": 0.10854218200954618,
          "max": 1.0310748606158326,
          "p5": 0.2219395549078772,
          "p95": 0.947330869540136,
          "count": 8
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.030834939601054875,
          "median": 0.024164367905797006,
          "min": 0.005074056446661139,
          "max": 0.07597751496266644,
          "p5": 0.005130009381227888,
          "p95": 0.07461525991437096,
          "count": 8
        },
        "spread_ticks": {
          "direction": "neutral",
          "mean": 6.840264370475151,
          "median": 4.75781460151282,
          "min": 1.467293663928066,
          "max": 19.481557377049178,
          "p5": 1.5768845171749066,
          "p95": 17.110886568337776,
          "count": 8
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 8.019706072962539e-08,
          "median": 4.560035892231411e-08,
          "min": 1.7096376812048943e-09,
          "max": 3.1418349992040597e-07,
          "p5": 2.675581227876727e-09,
          "p95": 2.4816361880898784e-07,
          "count": 8
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.0019591867828006085,
          "median": 0.00027984922352685234,
          "min": 0.0,
          "max": 0.005461583557486723,
          "p5": 3.810816696242002e-05,
          "p95": 0.005221605927606631,
          "count": 8
        }
      }
    },
    "returns": [
      {
        "horizon": "1M",
        "stock": 0.44736842105263075,
        "market": 0.02414767314911015,
        "sector": -0.021897157638716247,
        "peers": -0.08421467913237646
      },
      {
        "horizon": "3M",
        "stock": 0.2716763005780347,
        "market": 0.041011153040892534,
        "sector": -0.021897157638716247,
        "peers": -0.0967871617377758
      },
      {
        "horizon": "6M",
        "stock": -0.3939393939393939,
        "market": 0.09474979759512481,
        "sector": -0.024444300457365342,
        "peers": -0.12144387806013979
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
      "share_market": 0.4927897738842565,
      "share_sector": 0.2737133427954812,
      "share_idio": 0.23349688332026222,
      "beta_market": -22.24260521018066,
      "beta_sector": 14.860404496730645,
      "driver_model": {
        "valid": true,
        "model_method": "ols_with_volatility_regimes",
        "estimation_window_days": 226,
        "reporting_window_days": 63,
        "available_history_days": 226,
        "n_regimes": 2,
        "current_regime": 1,
        "current_regime_label": "High Volatility",
        "current_regime_probability": 1.0,
        "current_driver_mix": {
          "market_share": {
            "median": 0.4927897738842565,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "49.3%",
            "display_range": null,
            "display_text": "49.3%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 226 trading days.",
            "kind": "share_pct",
            "value_pct": 49.3,
            "plain_english": "Market explains about 49.3% of price moves in the current state."
          },
          "sector_share": {
            "median": 0.2737133427954812,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "27.4%",
            "display_range": null,
            "display_text": "27.4%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 226 trading days.",
            "kind": "share_pct",
            "value_pct": 27.4,
            "plain_english": "Sector explains about 27.4% of price moves in the current state."
          },
          "company_share": {
            "median": 0.23349688332026222,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "23.3%",
            "display_range": null,
            "display_text": "23.3%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 226 trading days.",
            "kind": "share_pct",
            "value_pct": 23.3,
            "plain_english": "Company-specific explains about 23.3% of price moves in the current state."
          },
          "basis": "current_state"
        },
        "current_sensitivities": {
          "beta_market": {
            "median": -22.24260521018066,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "-22.24",
            "display_range": null,
            "display_text": "-22.24",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 226 trading days.",
            "kind": "beta",
            "strength_label": "Very high",
            "plain_english": "Very high market link: a 1% market move has lined up with about a 22.24% stock move in the opposite direction in this state. The multiplier is unusually large and comes from only 226 trading days of history.",
            "value_num": -22.24
          },
          "beta_stock_lag": {
            "median": -6.936517770026607,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "-6.94",
            "display_range": null,
            "display_text": "-6.94",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 226 trading days.",
            "kind": "lag_beta",
            "value_num": -6.94
          },
          "beta_sector": {
            "median": 14.860404496730645,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "14.86",
            "display_range": null,
            "display_text": "14.86",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 226 trading days.",
            "kind": "beta",
            "strength_label": "Very high",
            "plain_english": "Very high sector link: a 1% sector move has lined up with about a 14.86% stock move in the same direction in this state. The multiplier is unusually large and comes from only 226 trading days of history.",
            "value_num": 14.86
          },
          "beta_market_lag": {
            "median": -7.889062987114955,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "-7.89",
            "display_range": null,
            "display_text": "-7.89",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 226 trading days.",
            "kind": "lag_beta",
            "value_num": -7.89
          },
          "beta_sector_lag": {
            "median": 12.879179752221678,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "12.88",
            "display_range": null,
            "display_text": "12.88",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 226 trading days.",
            "kind": "lag_beta",
            "value_num": 12.88
          },
          "posterior_source": null,
          "intervals_collapsed": false,
          "confidence_label": "High, limited history",
          "confidence_note": "Based on 226 trading days relative to the 252-day target."
        },
        "rolling_windows": {},
        "monthly_history": [
          {
            "month_key": "2025-05",
            "month_label": "May 2025",
            "month_short_label": "May",
            "period_label": "2025-05-16 to 2025-05-30",
            "n_obs": 11,
            "partial_month": true,
            "dominant_driver": "company",
            "dominant_driver_label": "Company-specific",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.3931497991084709,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "39.3%",
              "display_range": null,
              "display_text": "39.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 11 trading days.",
              "kind": "share_pct",
              "value_pct": 39.3,
              "plain_english": "Company-specific explains about 39.3% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.23160931511355232,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "23.2%",
                "display_range": null,
                "display_text": "23.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 11 trading days.",
                "kind": "share_pct",
                "value_pct": 23.2,
                "plain_english": "Market explains about 23.2% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.3752408857779769,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "37.5%",
                "display_range": null,
                "display_text": "37.5%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 11 trading days.",
                "kind": "share_pct",
                "value_pct": 37.5,
                "plain_english": "Sector explains about 37.5% of price moves in the current state."
              },
              "company_share": {
                "median": 0.3931497991084709,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "39.3%",
                "display_range": null,
                "display_text": "39.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 11 trading days.",
                "kind": "share_pct",
                "value_pct": 39.3,
                "plain_english": "Company-specific explains about 39.3% of price moves in the current state."
              }
            },
            "summary": "May: More mixed, though company-driven still has the largest share."
          },
          {
            "month_key": "2025-06",
            "month_label": "June 2025",
            "month_short_label": "Jun",
            "period_label": "2025-06-02 to 2025-06-30",
            "n_obs": 21,
            "partial_month": false,
            "dominant_driver": "market",
            "dominant_driver_label": "Market",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.47362926479826056,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "47.4%",
              "display_range": null,
              "display_text": "47.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 47.4,
              "plain_english": "Market explains about 47.4% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.47362926479826056,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "47.4%",
                "display_range": null,
                "display_text": "47.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 47.4,
                "plain_english": "Market explains about 47.4% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.07468157742130066,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "7.5%",
                "display_range": null,
                "display_text": "7.5%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 7.5,
                "plain_english": "Sector explains about 7.5% of price moves in the current state."
              },
              "company_share": {
                "median": 0.4516891577804388,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "45.2%",
                "display_range": null,
                "display_text": "45.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 45.2,
                "plain_english": "Company-specific explains about 45.2% of price moves in the current state."
              }
            },
            "summary": "Jun: Mostly market-driven."
          },
          {
            "month_key": "2025-07",
            "month_label": "July 2025",
            "month_short_label": "Jul",
            "period_label": "2025-07-02 to 2025-07-31",
            "n_obs": 22,
            "partial_month": true,
            "dominant_driver": "sector",
            "dominant_driver_label": "Sector",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.37703690212487,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "37.7%",
              "display_range": null,
              "display_text": "37.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 37.7,
              "plain_english": "Sector explains about 37.7% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.2483050334508801,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "24.8%",
                "display_range": null,
                "display_text": "24.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 24.8,
                "plain_english": "Market explains about 24.8% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.37703690212487,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "37.7%",
                "display_range": null,
                "display_text": "37.7%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 37.7,
                "plain_english": "Sector explains about 37.7% of price moves in the current state."
              },
              "company_share": {
                "median": 0.37465806442425,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "37.5%",
                "display_range": null,
                "display_text": "37.5%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 37.5,
                "plain_english": "Company-specific explains about 37.5% of price moves in the current state."
              }
            },
            "summary": "Jul: More mixed, though sector-driven still has the largest share."
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
              "median": 0.5397213562132807,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "54.0%",
              "display_range": null,
              "display_text": "54.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 54.0,
              "plain_english": "Company-specific explains about 54.0% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.27921097851933036,
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
                "plain_english": "Market explains about 27.9% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.18106766526738882,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "18.1%",
                "display_range": null,
                "display_text": "18.1%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 18.1,
                "plain_english": "Sector explains about 18.1% of price moves in the current state."
              },
              "company_share": {
                "median": 0.5397213562132807,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "54.0%",
                "display_range": null,
                "display_text": "54.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 54.0,
                "plain_english": "Company-specific explains about 54.0% of price moves in the current state."
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
              "median": 0.5442921737269129,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "54.4%",
              "display_range": null,
              "display_text": "54.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 54.4,
              "plain_english": "Company-specific explains about 54.4% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.24456978941043203,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "24.5%",
                "display_range": null,
                "display_text": "24.5%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 24.5,
                "plain_english": "Market explains about 24.5% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.21113803686265503,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "21.1%",
                "display_range": null,
                "display_text": "21.1%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 21.1,
                "plain_english": "Sector explains about 21.1% of price moves in the current state."
              },
              "company_share": {
                "median": 0.5442921737269129,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "54.4%",
                "display_range": null,
                "display_text": "54.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 54.4,
                "plain_english": "Company-specific explains about 54.4% of price moves in the current state."
              }
            },
            "summary": "Sep: Mostly company-driven."
          },
          {
            "month_key": "2025-10",
            "month_label": "October 2025",
            "month_short_label": "Oct",
            "period_label": "2025-10-02 to 2025-10-31",
            "n_obs": 20,
            "partial_month": true,
            "dominant_driver": "company",
            "dominant_driver_label": "Company-specific",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.5762091677759787,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "57.6%",
              "display_range": null,
              "display_text": "57.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 57.6,
              "plain_english": "Company-specific explains about 57.6% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.2896853423577539,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "29.0%",
                "display_range": null,
                "display_text": "29.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 29.0,
                "plain_english": "Market explains about 29.0% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.13410548986626722,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "13.4%",
                "display_range": null,
                "display_text": "13.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 13.4,
                "plain_english": "Sector explains about 13.4% of price moves in the current state."
              },
              "company_share": {
                "median": 0.5762091677759787,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "57.6%",
                "display_range": null,
                "display_text": "57.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 57.6,
                "plain_english": "Company-specific explains about 57.6% of price moves in the current state."
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
            "dominant_driver": "company",
            "dominant_driver_label": "Company-specific",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.6745757582179575,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "67.5%",
              "display_range": null,
              "display_text": "67.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 67.5,
              "plain_english": "Company-specific explains about 67.5% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.07212351002457416,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "7.2%",
                "display_range": null,
                "display_text": "7.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 7.2,
                "plain_english": "Market explains about 7.2% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.2533007317574684,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "25.3%",
                "display_range": null,
                "display_text": "25.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 25.3,
                "plain_english": "Sector explains about 25.3% of price moves in the current state."
              },
              "company_share": {
                "median": 0.6745757582179575,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "67.5%",
                "display_range": null,
                "display_text": "67.5%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 67.5,
                "plain_english": "Company-specific explains about 67.5% of price moves in the current state."
              }
            },
            "summary": "Nov: Still clearly company-driven."
          },
          {
            "month_key": "2025-12",
            "month_label": "December 2025",
            "month_short_label": "Dec",
            "period_label": "2025-12-01 to 2025-12-31",
            "n_obs": 15,
            "partial_month": false,
            "dominant_driver": "company",
            "dominant_driver_label": "Company-specific",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.5780965817124002,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "57.8%",
              "display_range": null,
              "display_text": "57.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
              "kind": "share_pct",
              "value_pct": 57.8,
              "plain_english": "Company-specific explains about 57.8% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.23886064783753053,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "23.9%",
                "display_range": null,
                "display_text": "23.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
                "kind": "share_pct",
                "value_pct": 23.9,
                "plain_english": "Market explains about 23.9% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.18304277045006923,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "18.3%",
                "display_range": null,
                "display_text": "18.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
                "kind": "share_pct",
                "value_pct": 18.3,
                "plain_english": "Sector explains about 18.3% of price moves in the current state."
              },
              "company_share": {
                "median": 0.5780965817124002,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "57.8%",
                "display_range": null,
                "display_text": "57.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
                "kind": "share_pct",
                "value_pct": 57.8,
                "plain_english": "Company-specific explains about 57.8% of price moves in the current state."
              }
            },
            "summary": "Dec: Mostly company-driven."
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
              "median": 0.8224990404352737,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "82.2%",
              "display_range": null,
              "display_text": "82.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 82.2,
              "plain_english": "Company-specific explains about 82.2% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.046384343601328815,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "4.6%",
                "display_range": null,
                "display_text": "4.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 4.6,
                "plain_english": "Market explains about 4.6% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.1311166159633975,
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
                "plain_english": "Sector explains about 13.1% of price moves in the current state."
              },
              "company_share": {
                "median": 0.8224990404352737,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "82.2%",
                "display_range": null,
                "display_text": "82.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 82.2,
                "plain_english": "Company-specific explains about 82.2% of price moves in the current state."
              }
            },
            "summary": "Jan: Still clearly company-driven."
          },
          {
            "month_key": "2026-02",
            "month_label": "February 2026",
            "month_short_label": "Feb",
            "period_label": "2026-02-02 to 2026-02-27",
            "n_obs": 17,
            "partial_month": false,
            "dominant_driver": "company",
            "dominant_driver_label": "Company-specific",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.5997190503526413,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "60.0%",
              "display_range": null,
              "display_text": "60.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
              "kind": "share_pct",
              "value_pct": 60.0,
              "plain_english": "Company-specific explains about 60.0% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.2219597942963262,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "22.2%",
                "display_range": null,
                "display_text": "22.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
                "kind": "share_pct",
                "value_pct": 22.2,
                "plain_english": "Market explains about 22.2% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.17832115535103246,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "17.8%",
                "display_range": null,
                "display_text": "17.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
                "kind": "share_pct",
                "value_pct": 17.8,
                "plain_english": "Sector explains about 17.8% of price moves in the current state."
              },
              "company_share": {
                "median": 0.5997190503526413,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "60.0%",
                "display_range": null,
                "display_text": "60.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
                "kind": "share_pct",
                "value_pct": 60.0,
                "plain_english": "Company-specific explains about 60.0% of price moves in the current state."
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
              "median": 0.4230149890138839,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "42.3%",
              "display_range": null,
              "display_text": "42.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 42.3,
              "plain_english": "Company-specific explains about 42.3% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.15586005293732022,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "15.6%",
                "display_range": null,
                "display_text": "15.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 15.6,
                "plain_english": "Market explains about 15.6% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.4211249580487959,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "42.1%",
                "display_range": null,
                "display_text": "42.1%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 42.1,
                "plain_english": "Sector explains about 42.1% of price moves in the current state."
              },
              "company_share": {
                "median": 0.4230149890138839,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "42.3%",
                "display_range": null,
                "display_text": "42.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 42.3,
                "plain_english": "Company-specific explains about 42.3% of price moves in the current state."
              }
            },
            "summary": "Mar: More mixed, though company-driven still has the largest share."
          },
          {
            "month_key": "2026-04",
            "month_label": "April 2026",
            "month_short_label": "Apr",
            "period_label": "2026-04-01 to 2026-04-23",
            "n_obs": 14,
            "partial_month": false,
            "dominant_driver": "market",
            "dominant_driver_label": "Market",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.44541018385179354,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "44.5%",
              "display_range": null,
              "display_text": "44.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 14 trading days.",
              "kind": "share_pct",
              "value_pct": 44.5,
              "plain_english": "Market explains about 44.5% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.44541018385179354,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "44.5%",
                "display_range": null,
                "display_text": "44.5%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 14 trading days.",
                "kind": "share_pct",
                "value_pct": 44.5,
                "plain_english": "Market explains about 44.5% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.2187542106475976,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "21.9%",
                "display_range": null,
                "display_text": "21.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 14 trading days.",
                "kind": "share_pct",
                "value_pct": 21.9,
                "plain_english": "Sector explains about 21.9% of price moves in the current state."
              },
              "company_share": {
                "median": 0.3358356055006089,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "33.6%",
                "display_range": null,
                "display_text": "33.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 14 trading days.",
                "kind": "share_pct",
                "value_pct": 33.6,
                "plain_english": "Company-specific explains about 33.6% of price moves in the current state."
              }
            },
            "summary": "Apr: More mixed, though market-driven still has the largest share."
          }
        ],
        "regimes": [
          {
            "id": 0,
            "label": "Low Volatility",
            "pct_time": 0.5,
            "expected_duration_days": 9.333333333333334,
            "current_probability": 0.0,
            "n_days_effective": 112.0,
            "volatility": {
              "median": 0.03074789416252019,
              "low": 0.03074789416252019,
              "high": 0.03074789416252019
            },
            "volatility_label": "Low Volatility",
            "current_probability_display": 0.0
          },
          {
            "id": 1,
            "label": "High Volatility",
            "pct_time": 0.5,
            "expected_duration_days": 8.615384615384615,
            "current_probability": 1.0,
            "n_days_effective": 112.0,
            "volatility": {
              "median": 0.22415455753135433,
              "low": 0.22415455753135433,
              "high": 0.22415455753135433
            },
            "volatility_label": "High Volatility",
            "current_probability_display": null
          }
        ],
        "transitions": {
          "mean": [
            [
              0.8928571428571429,
              0.10714285714285714
            ],
            [
              0.10810810810810811,
              0.8918918918918919
            ]
          ],
          "low": [],
          "high": [],
          "counts": [
            [
              100.0,
              12.0
            ],
            [
              12.0,
              99.0
            ]
          ]
        },
        "methodology": {
          "estimation_window_days": 226,
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
          "market_link_display": "-22.24",
          "sector_link_display": "14.86",
          "market_link_explainer": "Very high market link. A 1% market move has lined up with about a 22.24% stock move in the opposite direction in this state. This is a point estimate from 226 trading days.",
          "sector_link_explainer": "Very high sector link. A 1% sector move has lined up with about a 14.86% stock move in the same direction in this state. This is a point estimate from 226 trading days.",
          "stock_persistence_display": "-6.94",
          "point_estimate_note": "Point estimate only because the current state has 226 trading days.",
          "history_limited_note": "Read is based on 226 trading days versus the 252-day target."
        },
        "current_summary": {
          "regime_label": "High Volatility",
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "driver_share_pct": 49.3,
          "driver_share_display": "49.3%",
          "confidence_label": "High, limited history",
          "confidence_pct": 100.0,
          "display_confidence_pct": null,
          "confidence_note": "Based on 226 trading days relative to the 252-day target.",
          "history_days": 226,
          "history_limited": true,
          "volatility_label": "High Volatility",
          "lead_signal_text": "No stable lead signal.",
          "state_term": "state",
          "stay_probability": 0.8918918918918919,
          "effective_days": 112.0,
          "persistence_note": "This state looks more persistent, with a typical run length of about 8.6 days.",
          "expected_duration_days": 8.6
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
          "period_label": "2025-05-16 to 2025-05-30",
          "n_obs": 11,
          "partial_month": true,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_label": null,
          "summary": "May: More mixed, though company-driven still has the largest share.",
          "share_market": 0.23160931511355232,
          "share_sector": 0.3752408857779769,
          "share_company": 0.3931497991084709,
          "share_market_display": "23.2%",
          "share_sector_display": "37.5%",
          "share_company_display": "39.3%",
          "dominant_share_display": "39.3%"
        },
        {
          "month_key": "2025-06",
          "month_label": "June 2025",
          "month_short_label": "Jun",
          "period_label": "2025-06-02 to 2025-06-30",
          "n_obs": 21,
          "partial_month": false,
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "regime_label": null,
          "summary": "Jun: Mostly market-driven.",
          "share_market": 0.47362926479826056,
          "share_sector": 0.07468157742130066,
          "share_company": 0.4516891577804388,
          "share_market_display": "47.4%",
          "share_sector_display": "7.5%",
          "share_company_display": "45.2%",
          "dominant_share_display": "47.4%"
        },
        {
          "month_key": "2025-07",
          "month_label": "July 2025",
          "month_short_label": "Jul",
          "period_label": "2025-07-02 to 2025-07-31",
          "n_obs": 22,
          "partial_month": true,
          "dominant_driver": "sector",
          "dominant_driver_label": "Sector",
          "regime_label": null,
          "summary": "Jul: More mixed, though sector-driven still has the largest share.",
          "share_market": 0.2483050334508801,
          "share_sector": 0.37703690212487,
          "share_company": 0.37465806442425,
          "share_market_display": "24.8%",
          "share_sector_display": "37.7%",
          "share_company_display": "37.5%",
          "dominant_share_display": "37.7%"
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
          "share_market": 0.27921097851933036,
          "share_sector": 0.18106766526738882,
          "share_company": 0.5397213562132807,
          "share_market_display": "27.9%",
          "share_sector_display": "18.1%",
          "share_company_display": "54.0%",
          "dominant_share_display": "54.0%"
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
          "share_market": 0.24456978941043203,
          "share_sector": 0.21113803686265503,
          "share_company": 0.5442921737269129,
          "share_market_display": "24.5%",
          "share_sector_display": "21.1%",
          "share_company_display": "54.4%",
          "dominant_share_display": "54.4%"
        },
        {
          "month_key": "2025-10",
          "month_label": "October 2025",
          "month_short_label": "Oct",
          "period_label": "2025-10-02 to 2025-10-31",
          "n_obs": 20,
          "partial_month": true,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_label": null,
          "summary": "Oct: Mostly company-driven.",
          "share_market": 0.2896853423577539,
          "share_sector": 0.13410548986626722,
          "share_company": 0.5762091677759787,
          "share_market_display": "29.0%",
          "share_sector_display": "13.4%",
          "share_company_display": "57.6%",
          "dominant_share_display": "57.6%"
        },
        {
          "month_key": "2025-11",
          "month_label": "November 2025",
          "month_short_label": "Nov",
          "period_label": "2025-11-03 to 2025-11-28",
          "n_obs": 20,
          "partial_month": false,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_label": null,
          "summary": "Nov: Still clearly company-driven.",
          "share_market": 0.07212351002457416,
          "share_sector": 0.2533007317574684,
          "share_company": 0.6745757582179575,
          "share_market_display": "7.2%",
          "share_sector_display": "25.3%",
          "share_company_display": "67.5%",
          "dominant_share_display": "67.5%"
        },
        {
          "month_key": "2025-12",
          "month_label": "December 2025",
          "month_short_label": "Dec",
          "period_label": "2025-12-01 to 2025-12-31",
          "n_obs": 15,
          "partial_month": false,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_label": null,
          "summary": "Dec: Mostly company-driven.",
          "share_market": 0.23886064783753053,
          "share_sector": 0.18304277045006923,
          "share_company": 0.5780965817124002,
          "share_market_display": "23.9%",
          "share_sector_display": "18.3%",
          "share_company_display": "57.8%",
          "dominant_share_display": "57.8%"
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
          "share_market": 0.046384343601328815,
          "share_sector": 0.1311166159633975,
          "share_company": 0.8224990404352737,
          "share_market_display": "4.6%",
          "share_sector_display": "13.1%",
          "share_company_display": "82.2%",
          "dominant_share_display": "82.2%"
        },
        {
          "month_key": "2026-02",
          "month_label": "February 2026",
          "month_short_label": "Feb",
          "period_label": "2026-02-02 to 2026-02-27",
          "n_obs": 17,
          "partial_month": false,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_label": null,
          "summary": "Feb: Mostly company-driven.",
          "share_market": 0.2219597942963262,
          "share_sector": 0.17832115535103246,
          "share_company": 0.5997190503526413,
          "share_market_display": "22.2%",
          "share_sector_display": "17.8%",
          "share_company_display": "60.0%",
          "dominant_share_display": "60.0%"
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
          "summary": "Mar: More mixed, though company-driven still has the largest share.",
          "share_market": 0.15586005293732022,
          "share_sector": 0.4211249580487959,
          "share_company": 0.4230149890138839,
          "share_market_display": "15.6%",
          "share_sector_display": "42.1%",
          "share_company_display": "42.3%",
          "dominant_share_display": "42.3%"
        },
        {
          "month_key": "2026-04",
          "month_label": "April 2026",
          "month_short_label": "Apr",
          "period_label": "2026-04-01 to 2026-04-23",
          "n_obs": 14,
          "partial_month": false,
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "regime_label": null,
          "summary": "Apr: More mixed, though market-driven still has the largest share.",
          "share_market": 0.44541018385179354,
          "share_sector": 0.2187542106475976,
          "share_company": 0.3358356055006089,
          "share_market_display": "44.5%",
          "share_sector_display": "21.9%",
          "share_company_display": "33.6%",
          "dominant_share_display": "44.5%"
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
          0.5,
          0.5
        ],
        "current_regime": 1,
        "regimes": [
          {
            "id": 0,
            "label": "Low Volatility",
            "pct_time": 0.5,
            "expected_duration_days": 9.333333333333334,
            "current_probability": 0.0,
            "n_days_effective": 112.0,
            "volatility": {
              "median": 0.03074789416252019,
              "low": 0.03074789416252019,
              "high": 0.03074789416252019
            },
            "volatility_label": "Low Volatility"
          },
          {
            "id": 1,
            "label": "High Volatility",
            "pct_time": 0.5,
            "expected_duration_days": 8.615384615384615,
            "current_probability": 1.0,
            "n_days_effective": 112.0,
            "volatility": {
              "median": 0.22415455753135433,
              "low": 0.22415455753135433,
              "high": 0.22415455753135433
            },
            "volatility_label": "High Volatility"
          }
        ],
        "transitions": [
          [
            0.8928571428571429,
            0.10714285714285714
          ],
          [
            0.10810810810810811,
            0.8918918918918919
          ]
        ]
      }
    },
    "order_book": {
      "bids": [
        {
          "level": 1,
          "price": 4.32,
          "quantity": 1000.0,
          "value": 4320.0
        },
        {
          "level": 2,
          "price": 4.3,
          "quantity": 57000.0,
          "value": 245100.0
        },
        {
          "level": 3,
          "price": 4.28,
          "quantity": 2000.0,
          "value": 8560.0
        },
        {
          "level": 4,
          "price": 4.1,
          "quantity": 10000.0,
          "value": 41000.0
        },
        {
          "level": 5,
          "price": 4.04,
          "quantity": 1000.0,
          "value": 4040.0
        },
        {
          "level": 6,
          "price": 3.42,
          "quantity": 2000.0,
          "value": 6840.0
        }
      ],
      "asks": [
        {
          "level": 1,
          "price": 4.33,
          "quantity": 1000.0,
          "value": 4330.0
        },
        {
          "level": 2,
          "price": 4.4,
          "quantity": 1000.0,
          "value": 4400.0
        },
        {
          "level": 3,
          "price": 4.42,
          "quantity": 10000.0,
          "value": 44200.0
        },
        {
          "level": 4,
          "price": 4.46,
          "quantity": 1000.0,
          "value": 4460.0
        },
        {
          "level": 5,
          "price": 4.52,
          "quantity": 1000.0,
          "value": 4520.0
        },
        {
          "level": 6,
          "price": 4.54,
          "quantity": 15000.0,
          "value": 68100.0
        },
        {
          "level": 7,
          "price": 4.55,
          "quantity": 4000.0,
          "value": 18200.0
        },
        {
          "level": 8,
          "price": 4.56,
          "quantity": 21000.0,
          "value": 95759.99999999999
        },
        {
          "level": 9,
          "price": 4.58,
          "quantity": 10000.0,
          "value": 45800.0
        },
        {
          "level": 10,
          "price": 4.6,
          "quantity": 10000.0,
          "value": 46000.0
        },
        {
          "level": 11,
          "price": 4.66,
          "quantity": 1000.0,
          "value": 4660.0
        },
        {
          "level": 12,
          "price": 4.88,
          "quantity": 20000.0,
          "value": 97600.0
        },
        {
          "level": 13,
          "price": 4.89,
          "quantity": 1000.0,
          "value": 4890.0
        },
        {
          "level": 14,
          "price": 4.9,
          "quantity": 10000.0,
          "value": 49000.0
        },
        {
          "level": 15,
          "price": 4.95,
          "quantity": 5000.0,
          "value": 24750.0
        },
        {
          "level": 16,
          "price": 4.98,
          "quantity": 10000.0,
          "value": 49800.00000000001
        },
        {
          "level": 17,
          "price": 5.0,
          "quantity": 4000.0,
          "value": 20000.0
        },
        {
          "level": 18,
          "price": 5.02,
          "quantity": 1000.0,
          "value": 5020.0
        },
        {
          "level": 19,
          "price": 5.15,
          "quantity": 8000.0,
          "value": 41200.0
        },
        {
          "level": 20,
          "price": 5.19,
          "quantity": 1000.0,
          "value": 5190.0
        },
        {
          "level": 21,
          "price": 5.2,
          "quantity": 5000.0,
          "value": 26000.0
        },
        {
          "level": 22,
          "price": 5.3,
          "quantity": 1000.0,
          "value": 5300.0
        }
      ]
    },
    "execution_dynamic": {
      "snapshot": {
        "valid": true,
        "snapshot_time": "2026-04-23 07:59:17.648000000",
        "snapshot_basis": "last_continuous_session_snapshot",
        "snapshot_label": "final continuous-session displayed book before close",
        "snapshot_note": "Final continuous-session displayed book before close",
        "snapshot_mic": "XHKG",
        "mid_price": 4.325,
        "spread_pct": 0.00231213872832365,
        "spread_ticks": 1.0,
        "tick_size": 0.01,
        "displayed_levels_per_side": 100,
        "bid_depth_notional_displayed": 309860.0,
        "ask_depth_notional_displayed": 669180.0,
        "bid_depth_notional_top10": 309860.0,
        "ask_depth_notional_top10": 669180.0,
        "bid_ask_depth_ratio": 0.463
      },
      "historical_trade_scenarios": {
        "valid": true,
        "requested_lookback_calendar_days": 365,
        "lookback_calendar_days": 365,
        "effective_calendar_days": 345,
        "history_limited": true,
        "trade_days_used": 209,
        "n_trades_used": 67236,
        "first_trade_date": "2025-05-14",
        "last_trade_date": "2026-04-23",
        "window_label": "May 14, 2025 to Apr 23, 2026",
        "window_short_label": "May 14, 2025 to Apr 23, 2026",
        "trade_days_label": "209 trading days",
        "trade_count_label": "67,236 trades",
        "window_detail_label": "209 trading days • 67,236 trades",
        "history_note": "Trade-size percentiles use available history from May 14, 2025 to Apr 23, 2026 (209 trading days • 67,236 trades), not a full year.",
        "scenarios": [
          {
            "key": "p90",
            "label": "90th percentile trade",
            "quantile": 0.9,
            "trade_notional": 49800.0,
            "impact_pct": -0.005381,
            "filled_pct": 100.0,
            "levels_consumed": 2,
            "pct_of_bid_depth": 16.07,
            "pct_of_adv": 15.34
          },
          {
            "key": "p95",
            "label": "95th percentile trade",
            "quantile": 0.95,
            "trade_notional": 75600.0,
            "impact_pct": -0.005516999999999999,
            "filled_pct": 100.0,
            "levels_consumed": 2,
            "pct_of_bid_depth": 24.4,
            "pct_of_adv": 23.29
          },
          {
            "key": "p99_99",
            "label": "99.99th percentile trade",
            "quantile": 0.9999,
            "trade_notional": 1015922.82,
            "impact_pct": -0.018576,
            "filled_pct": 30.5,
            "levels_consumed": 6,
            "pct_of_bid_depth": 327.87,
            "pct_of_adv": 312.98
          }
        ]
      },
      "l3_sell_order_scenarios": {
        "valid": true,
        "trade_date": "2026-04-23",
        "selection_method": "largest_observed_ask_orders_during_day",
        "orders": [
          {
            "rank": 1,
            "order_id": "2364882690",
            "timestamp": "2026-04-23 03:15:39.240000000",
            "local_timestamp": "2026-04-23 11:15:39",
            "posted_price": 4.8,
            "size_shares": 160000.0,
            "notional": 768000.0,
            "impact_pct": -0.018576,
            "filled_pct": 40.3,
            "levels_consumed": 6,
            "pct_of_bid_depth": 247.85,
            "price_vs_mid_pct": 10.983,
            "executed_event_count": 0,
            "event_count": 3
          },
          {
            "rank": 2,
            "order_id": "2450423554",
            "timestamp": "2026-04-23 03:22:31.345000000",
            "local_timestamp": "2026-04-23 11:22:31",
            "posted_price": 4.89,
            "size_shares": 50000.0,
            "notional": 244500.0,
            "impact_pct": -0.005698999999999999,
            "filled_pct": 100.0,
            "levels_consumed": 2,
            "pct_of_bid_depth": 78.91,
            "price_vs_mid_pct": 13.064,
            "executed_event_count": 0,
            "event_count": 2
          },
          {
            "rank": 3,
            "order_id": "2917487874",
            "timestamp": "2026-04-23 05:07:47.182000000",
            "local_timestamp": "2026-04-23 13:07:47",
            "posted_price": 4.58,
            "size_shares": 50000.0,
            "notional": 229000.0,
            "impact_pct": -0.005694,
            "filled_pct": 100.0,
            "levels_consumed": 2,
            "pct_of_bid_depth": 73.9,
            "price_vs_mid_pct": 5.896,
            "executed_event_count": 0,
            "event_count": 1
          }
        ]
      },
      "intraday_liquidity_profile": {
        "valid": true,
        "trade_date": "2026-04-23",
        "bucket_minutes": 30,
        "displayed_levels_per_side": 100,
        "tick_size": 0.01,
        "timezone": "HKT (UTC+8)",
        "session_label": "HKEX continuous trading session",
        "bucket_label_basis": "bucket start time",
        "display_window_label": "HKEX continuous trading session",
        "bucket_note": "Buckets are shown in local market time and labeled by bucket start.",
        "reason": null,
        "rows": [
          {
            "bucket": "09:30",
            "spread_pct": null,
            "spread_ticks": null,
            "bid_depth_notional": 20100.0,
            "ask_depth_notional": 0.0,
            "mid_price": null
          },
          {
            "bucket": "10:00",
            "spread_pct": null,
            "spread_ticks": null,
            "bid_depth_notional": 127080.0,
            "ask_depth_notional": 0.0,
            "mid_price": null
          },
          {
            "bucket": "10:30",
            "spread_pct": 0.034285714285714364,
            "spread_ticks": 15.000000000000036,
            "bid_depth_notional": 337350.0,
            "ask_depth_notional": 130400.0,
            "mid_price": 4.375
          },
          {
            "bucket": "11:00",
            "spread_pct": 0.02911534154535272,
            "spread_ticks": 12.99999999999999,
            "bid_depth_notional": 156740.0,
            "ask_depth_notional": 563020.0,
            "mid_price": 4.465
          },
          {
            "bucket": "11:30",
            "spread_pct": 0.03850509626274064,
            "spread_ticks": 16.999999999999993,
            "bid_depth_notional": 159620.0,
            "ask_depth_notional": 515590.0,
            "mid_price": 4.415
          },
          {
            "bucket": "13:00",
            "spread_pct": 0.013245033112582696,
            "spread_ticks": 5.999999999999961,
            "bid_depth_notional": 538630.0,
            "ask_depth_notional": 675530.0,
            "mid_price": 4.529999999999999
          },
          {
            "bucket": "13:30",
            "spread_pct": 0.04100227790432815,
            "spread_ticks": 18.00000000000006,
            "bid_depth_notional": 275940.0,
            "ask_depth_notional": 795630.0,
            "mid_price": 4.390000000000001
          },
          {
            "bucket": "14:00",
            "spread_pct": 0.05186020293122875,
            "spread_ticks": 22.999999999999954,
            "bid_depth_notional": 374720.0,
            "ask_depth_notional": 667230.0,
            "mid_price": 4.4350000000000005
          },
          {
            "bucket": "14:30",
            "spread_pct": 0.01372997711670492,
            "spread_ticks": 6.00000000000005,
            "bid_depth_notional": 573440.0,
            "ask_depth_notional": 858670.0,
            "mid_price": 4.37
          },
          {
            "bucket": "15:00",
            "spread_pct": 0.009049773755656116,
            "spread_ticks": 4.0000000000000036,
            "bid_depth_notional": 607100.0,
            "ask_depth_notional": 813060.0,
            "mid_price": 4.42
          },
          {
            "bucket": "15:30",
            "spread_pct": 0.00231213872832365,
            "spread_ticks": 0.9999999999999787,
            "bid_depth_notional": 309860.0,
            "ask_depth_notional": 669180.0,
            "mid_price": 4.325
          }
        ],
        "summary": {
          "median_spread_pct": 0.02911534154535272,
          "median_spread_ticks": 12.99999999999999,
          "median_bid_depth_notional": 309860.0,
          "median_ask_depth_notional": 667230.0,
          "tightest_bucket": "15:30",
          "widest_bucket": "14:00",
          "deepest_bid_bucket": "15:00",
          "thinnest_bid_bucket": "09:30"
        }
      }
    },
    "peer_capacity": {
      "bx_ticket_pct_adv_50k": 15.4,
      "peers": [
        {
          "ticker": "2521",
          "pct": 34.0
        },
        {
          "ticker": "6100",
          "pct": 53.8
        },
        {
          "ticker": "2443",
          "pct": 95.6
        },
        {
          "ticker": "331",
          "pct": 215.0
        },
        {
          "ticker": "1483",
          "pct": 237.0
        },
        {
          "ticker": "2180",
          "pct": 1410.0
        },
        {
          "ticker": "6959",
          "pct": 2209.6
        },
        {
          "ticker": "1463",
          "pct": null
        }
      ]
    },
    "trader_composition": {
      "primary_period": "6m",
      "periods": {
        "1d": {
          "valid": true,
          "currency": "HKD",
          "n_trades": 448,
          "n_runs": 0,
          "n_trade_days": 1,
          "first_trade_date": "2026-04-23",
          "last_trade_date": "2026-04-23",
          "period_days": 0,
          "method": {
            "key": "legacy_size_threshold",
            "name": "Trade-size buckets",
            "version": "legacy",
            "unit_of_classification": null
          },
          "thresholds": {
            "retail_max": 78000.0,
            "instit_min": 390000.0
          },
          "composition": {
            "retail_pct": 0.9732142857142857,
            "mixed_pct": 0.026785714285714284,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.8127459692776438,
            "mixed_qty_pct": 0.18725403072235622,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.8147412199368336,
            "mixed_notional_pct": 0.18525878006316646,
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
              "retail": 436,
              "mixed": 12,
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
            "avg": 15749.205357142857,
            "median": 8610.0
          },
          "run_size": {
            "avg": null,
            "median": null,
            "avg_length": null
          },
          "recent_trades": [],
          "peer_comparison": []
        },
        "30d": {
          "valid": true,
          "currency": "HKD",
          "n_trades": 837,
          "n_runs": 0,
          "n_trade_days": 21,
          "first_trade_date": "2026-03-23",
          "last_trade_date": "2026-04-23",
          "period_days": 31,
          "method": {
            "key": "legacy_size_threshold",
            "name": "Trade-size buckets",
            "version": "legacy",
            "unit_of_classification": null
          },
          "thresholds": {
            "retail_max": 78000.0,
            "instit_min": 390000.0
          },
          "composition": {
            "retail_pct": 0.97610513739546,
            "mixed_pct": 0.023894862604540025,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.8036473809939987,
            "mixed_qty_pct": 0.1963526190060013,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.8078992468356228,
            "mixed_notional_pct": 0.1921007531643773,
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
              "retail": 817,
              "mixed": 20,
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
            "avg": 15235.123058542413,
            "median": 8130.0
          },
          "run_size": {
            "avg": null,
            "median": null,
            "avg_length": null
          },
          "recent_trades": [],
          "peer_comparison": []
        },
        "3m": {
          "valid": true,
          "currency": "HKD",
          "n_trades": 1632,
          "n_runs": 0,
          "n_trade_days": 63,
          "first_trade_date": "2026-01-19",
          "last_trade_date": "2026-04-23",
          "period_days": 94,
          "method": {
            "key": "legacy_size_threshold",
            "name": "Trade-size buckets",
            "version": "legacy",
            "unit_of_classification": null
          },
          "thresholds": {
            "retail_max": 78000.0,
            "instit_min": 390000.0
          },
          "composition": {
            "retail_pct": 0.9791666666666666,
            "mixed_pct": 0.020833333333333332,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.8081127393051288,
            "mixed_qty_pct": 0.1918872606948712,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.8114033252980968,
            "mixed_notional_pct": 0.1885966747019032,
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
              "retail": 1598,
              "mixed": 34,
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
            "avg": 14061.838235294117,
            "median": 6380.0
          },
          "run_size": {
            "avg": null,
            "median": null,
            "avg_length": null
          },
          "recent_trades": [],
          "peer_comparison": []
        },
        "6m": {
          "valid": true,
          "currency": "HKD",
          "n_trades": 4224,
          "n_runs": 0,
          "n_trade_days": 125,
          "first_trade_date": "2025-10-08",
          "last_trade_date": "2026-04-23",
          "period_days": 197,
          "method": {
            "key": "legacy_size_threshold",
            "name": "Trade-size buckets",
            "version": "legacy",
            "unit_of_classification": null
          },
          "thresholds": {
            "retail_max": 78000.0,
            "instit_min": 390000.0
          },
          "composition": {
            "retail_pct": 0.978219696969697,
            "mixed_pct": 0.021543560606060608,
            "instit_pct": 0.00023674242424242425,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.8206248550240526,
            "mixed_qty_pct": 0.17311787247678648,
            "instit_qty_pct": 0.006257272499160957,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.8142709605723548,
            "mixed_notional_pct": 0.17816349531045278,
            "instit_notional_pct": 0.007565544117192441,
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
              "retail": 4132,
              "mixed": 91,
              "institutional": 1,
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
            "avg": 15179.840104166668,
            "median": 7000.0
          },
          "run_size": {
            "avg": null,
            "median": null,
            "avg_length": null
          },
          "recent_trades": [],
          "peer_comparison": []
        }
      },
      "valid": true,
      "currency": "HKD",
      "n_trades": 4224,
      "n_runs": 0,
      "n_trade_days": 125,
      "first_trade_date": "2025-10-08",
      "last_trade_date": "2026-04-23",
      "period_days": 197,
      "method": {
        "key": "legacy_size_threshold",
        "name": "Trade-size buckets",
        "version": "legacy",
        "unit_of_classification": null
      },
      "thresholds": {
        "retail_max": 78000.0,
        "instit_min": 390000.0
      },
      "composition": {
        "retail_pct": 0.978219696969697,
        "mixed_pct": 0.021543560606060608,
        "instit_pct": 0.00023674242424242425,
        "ambiguous_pct": null,
        "unobservable_pct": null,
        "unclear_pct": null,
        "retail_qty_pct": null,
        "mixed_qty_pct": null,
        "instit_qty_pct": null,
        "ambiguous_qty_pct": null,
        "unobservable_qty_pct": null,
        "unclear_qty_pct": null,
        "retail_notional_pct": 0.8142709605723548,
        "mixed_notional_pct": 0.17816349531045278,
        "instit_notional_pct": 0.007565544117192441,
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
        "avg": 15179.840104166668,
        "median": 7000.0
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
            "month": "2026-04",
            "n_trades": 335,
            "n_runs": 0,
            "retail_pct": 0.9761194029850746,
            "mixed_pct": 0.023880597014925373,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "avg_trade_size": 15493.10447761194,
            "avg_run_notional": null,
            "retail_qty_pct": 0.7738393603055257,
            "mixed_qty_pct": 0.22616063969447428,
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
            "total_quantity": 1675800.0
          },
          {
            "month": "2026-03",
            "n_trades": 327,
            "n_runs": 0,
            "retail_pct": 0.9938837920489296,
            "mixed_pct": 0.0061162079510703364,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "avg_trade_size": 11479.25993883792,
            "avg_run_notional": null,
            "retail_qty_pct": 0.9391036050665801,
            "mixed_qty_pct": 0.06089639493341994,
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
            "total_quantity": 1231600.0
          },
          {
            "month": "2026-02",
            "n_trades": 388,
            "n_runs": 0,
            "retail_pct": 0.979381443298969,
            "mixed_pct": 0.020618556701030927,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "avg_trade_size": 13532.88144329897,
            "avg_run_notional": null,
            "retail_qty_pct": 0.7743682310469314,
            "mixed_qty_pct": 0.22563176895306858,
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
            "total_quantity": 1772800.0
          },
          {
            "month": "2026-01",
            "n_trades": 431,
            "n_runs": 0,
            "retail_pct": 0.9791183294663574,
            "mixed_pct": 0.02088167053364269,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "avg_trade_size": 13832.802784222738,
            "avg_run_notional": null,
            "retail_qty_pct": 0.828644786782764,
            "mixed_qty_pct": 0.17135521321723599,
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
            "total_quantity": 1791600.0
          },
          {
            "month": "2025-12",
            "n_trades": 238,
            "n_runs": 0,
            "retail_pct": 0.9915966386554622,
            "mixed_pct": 0.008403361344537815,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "avg_trade_size": 10804.655462184874,
            "avg_run_notional": null,
            "retail_qty_pct": 0.8952448210922788,
            "mixed_qty_pct": 0.10475517890772128,
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
            "total_quantity": 849600.0
          },
          {
            "month": "2025-11",
            "n_trades": 1336,
            "n_runs": 0,
            "retail_pct": 0.9850299401197605,
            "mixed_pct": 0.014221556886227544,
            "instit_pct": 0.0007485029940119761,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "avg_trade_size": 14324.373203592815,
            "avg_run_notional": null,
            "retail_qty_pct": 0.853260589955061,
            "mixed_qty_pct": 0.124594285663157,
            "instit_qty_pct": 0.022145124381781945,
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
            "total_quantity": 4470510.0
          }
        ]
      },
      "peer_comparison": [],
      "peer_comparison_periods": {
        "1d": [],
        "30d": [],
        "3m": [],
        "6m": []
      },
      "peer_activity_enabled": false,
      "peer_activity_reason": "Disabled for XHKG to avoid fetching peer L2/L3 history.",
      "recent_trades": [],
      "currency_thresholds": {
        "HKD": {
          "retail_max": 78000.0,
          "instit_min": 390000.0
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
      "total_trades": 3235,
      "price_moving_trades": 1803,
      "pct_price_moving": 55.734157650695515,
      "all_movers": {
        "count": 1803,
        "avg_size": 13601.508929561842,
        "median_size": 6680.0,
        "retail_count": 1771,
        "mixed_count": 32,
        "institutional_count": 0,
        "ambiguous_count": 0,
        "unobservable_count": 0,
        "retail_pct": 98.22518025513034,
        "mixed_pct": 1.7748197448696619,
        "instit_pct": 0.0,
        "unclear_pct": null
      },
      "positive_movers": {
        "count": 872,
        "avg_size": 13347.606880733943,
        "median_size": 6800.0,
        "retail_count": 859,
        "mixed_count": 13,
        "institutional_count": 0,
        "ambiguous_count": 0,
        "unobservable_count": 0,
        "retail_pct": 98.5091743119266,
        "mixed_pct": 1.4908256880733946,
        "instit_pct": 0.0,
        "unclear_pct": null
      },
      "negative_movers": {
        "count": 931,
        "avg_size": 13839.320515574651,
        "median_size": 6560.0,
        "retail_count": 912,
        "mixed_count": 19,
        "institutional_count": 0,
        "ambiguous_count": 0,
        "unobservable_count": 0,
        "retail_pct": 97.95918367346938,
        "mixed_pct": 2.0408163265306123,
        "instit_pct": 0.0,
        "unclear_pct": null
      }
    },
    "short_selling": {
      "data_available": false
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
          "opening": 0.0,
          "continuous": 0.9971324172452175,
          "closing": 0.002867582754782524,
          "auctions": 0.002867582754782524,
          "other": 0.0
        },
        "1M": {
          "opening": 0.00022950393271381844,
          "continuous": 0.9954380238680968,
          "closing": 0.004332472199189429,
          "auctions": 0.004561976131903248,
          "other": 0.0
        },
        "3M": {
          "opening": 0.0003852730986859451,
          "continuous": 0.9967983675192625,
          "closing": 0.002816359382051486,
          "auctions": 0.003201632480737431,
          "other": 0.0
        },
        "6M": {
          "opening": 0.000873613673353742,
          "continuous": 0.9917916390075814,
          "closing": 0.007334747319064869,
          "auctions": 0.00820836099241861,
          "other": 0.0
        }
      },
      "hhi": {
        "1D": 0.3867468836876819,
        "1M": 0.3787152874624627,
        "3M": 0.3617196378995642,
        "6M": 0.3289329171980186
      },
      "profile_buckets": [
        {
          "time": "09:00",
          "avg_share": 0.01
        },
        {
          "time": "09:30",
          "avg_share": 0.0938
        },
        {
          "time": "10:00",
          "avg_share": 0.1063
        },
        {
          "time": "10:30",
          "avg_share": 0.0925
        },
        {
          "time": "11:00",
          "avg_share": 0.066
        },
        {
          "time": "11:30",
          "avg_share": 0.0579
        },
        {
          "time": "13:00",
          "avg_share": 0.0849
        },
        {
          "time": "13:30",
          "avg_share": 0.1156
        },
        {
          "time": "14:00",
          "avg_share": 0.0601
        },
        {
          "time": "14:30",
          "avg_share": 0.0744
        },
        {
          "time": "15:00",
          "avg_share": 0.0951
        },
        {
          "time": "15:30",
          "avg_share": 0.1259
        },
        {
          "time": "16:00",
          "avg_share": 0.0173
        }
      ],
      "peers_hhi_rows": [
        {
          "ticker": "1328",
          "auctions_pct": 0.5748958164192446,
          "hhi": 0.28642870088780664,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400",
            "you": true
          }
        },
        {
          "ticker": "1483",
          "auctions_pct": 2.3751061215535705,
          "hhi": 0.6125744899142036,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "331",
          "auctions_pct": 0.9746431492762386,
          "hhi": 0.3028708923611057,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "2443",
          "auctions_pct": 1.3932677107788602,
          "hhi": 0.17609460198501292,
          "interp": {
            "text": "Moderate",
            "cls": "bg-amber-500/20 text-amber-400"
          }
        },
        {
          "ticker": "6959",
          "auctions_pct": 0.7400723745355351,
          "hhi": 0.44772192072710776,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "2180",
          "auctions_pct": 1.6468739282465223,
          "hhi": 0.5576513024585247,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "6100",
          "auctions_pct": 0.8780161353125763,
          "hhi": 0.16086745519909526,
          "interp": {
            "text": "Moderate",
            "cls": "bg-amber-500/20 text-amber-400"
          }
        },
        {
          "ticker": "2521",
          "auctions_pct": 0.5319631429162796,
          "hhi": 0.32232956023625126,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "1463",
          "auctions_pct": 0.3608962036902568,
          "hhi": 0.708555486190415,
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
