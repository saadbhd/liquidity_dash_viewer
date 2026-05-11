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
      "marketCap": 136857901.2,
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
      "marketCap": 67759310.353,
      "sector": "Software - Application",
      "industry": "Technology"
    },
    {
      "ticker": "J03",
      "name": "Jadason",
      "marketCap": 23152690.0,
      "sector": "Electronic Components",
      "industry": "Technology"
    },
    {
      "ticker": "NXR",
      "name": "iWOW Tech",
      "marketCap": 100127577.6,
      "sector": "Software - Application",
      "industry": "Technology"
    },
    {
      "ticker": "42F",
      "name": "Totm Tech",
      "marketCap": 41999737.248,
      "sector": "Software - Infrastructure",
      "industry": "Technology"
    },
    {
      "ticker": "LVR",
      "name": "17LIVE GROUP",
      "marketCap": 155817966.63,
      "sector": "Software - Application",
      "industry": "Technology"
    },
    {
      "ticker": "ITS",
      "name": "Info-Tech",
      "marketCap": 258000000.0,
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
    "asof_date": "2026-05-05",
    "industry": "Technology",
    "sector": "Software - Application",
    "market_cap_display": "136.9M",
    "market_cap_category": "small",
    "universe_total": 558,
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
          "score_pca": 66.48745519713262,
          "score_pca_percentile": 66.48745519713262,
          "rank_pca": 188,
          "total": 558,
          "adv_notional_sgd": 136800.0,
          "adv_volume_shares": 570000.0,
          "free_float_shares": null,
          "turnover_ratio": 0.0009995769246825188,
          "votes": 50.0,
          "trades": 50.0,
          "spread_pct": 0.022777369581190324,
          "spread_ticks": 1.1071428571428572,
          "amihud": 1.4918248000954785e-07,
          "volatility": 0.19657631614338103
        },
        "pca": {
          "valid": true,
          "window_days": 1,
          "variance_explained": 0.5146113584853371,
          "loadings": {
            "log_adv": 0.554100742614404,
            "log_trades": 0.5083734822828273,
            "log_turnover": 0.5175570007537794,
            "neg_spread": 0.36626765289781854,
            "neg_amihud": 0.05134126876254363,
            "neg_vol": -0.1728455989579295
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
          "peer_median_adv": 5818.8,
          "peer_median_score_pca": 37.36559139784946,
          "peer_median_trades": 2.0,
          "peer_median_volatility": 0.0,
          "peer_median_spread_pct": 0.042234296736583604,
          "peer_median_spread_ticks": 1.5427546744036107,
          "peer_median_amihud": 3.4352786629345187e-09,
          "peer_median_turnover_ratio": 0.00027960226609085025,
          "target_vs_peer": {
            "score_pca_delta": 29.12,
            "adv_delta_pct": 2251.0,
            "trades_delta_pct": 2400.0,
            "volatility_delta_pct": null,
            "spread_pct_delta_pct": 46.07,
            "spread_ticks_delta_pct": -28.24,
            "amihud_delta_pct": -4242.66,
            "turnover_ratio_delta_pct": 257.5
          }
        },
        "peer_liquidity": [
          {
            "ticker": "TKU",
            "score_pca": 66.48745519713262,
            "rank_pca": 188,
            "adv": 136800.0,
            "trades": 50.0,
            "volatility": 0.19657631614338103,
            "spread_pct": 0.022777369581190324,
            "spread_ticks": 1.1071428571428572,
            "amihud": 1.4918248000954785e-07,
            "turnover_ratio": 0.0009995769246825188,
            "is_target": true
          },
          {
            "ticker": "KUX",
            "score_pca": 1.971326164874552,
            "rank_pca": 548,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.0,
            "spread_pct": 0.6686303387334316,
            "spread_ticks": 37.833333333333336,
            "amihud": null,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "532",
            "score_pca": 2.5985663082437274,
            "rank_pca": 542,
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
            "score_pca": 31.72043010752688,
            "rank_pca": 382,
            "adv": 477.6,
            "trades": 1.0,
            "volatility": 0.0,
            "spread_pct": 0.010778039744021565,
            "spread_ticks": 2.1333333333333333,
            "amihud": 0.0,
            "turnover_ratio": 7.433218110193494e-06,
            "is_target": false
          },
          {
            "ticker": "J03",
            "score_pca": 71.14695340501792,
            "rank_pca": 162,
            "adv": 239186.19999999998,
            "trades": 52.0,
            "volatility": 0.0,
            "spread_pct": 0.04744069912609238,
            "spread_ticks": 1.0555555555555556,
            "amihud": 0.0,
            "turnover_ratio": 0.0185895213459773,
            "is_target": false
          },
          {
            "ticker": "NXR",
            "score_pca": 43.01075268817204,
            "rank_pca": 319,
            "adv": 11160.0,
            "trades": 3.0,
            "volatility": 0.13150020296500828,
            "spread_pct": 0.02616822429906544,
            "spread_ticks": 1.9090909090909092,
            "amihud": 1.2620526023524643e-06,
            "turnover_ratio": 0.000551771314071507,
            "is_target": false
          },
          {
            "ticker": "42F",
            "score_pca": 74.19354838709677,
            "rank_pca": 145,
            "adv": 252708.4,
            "trades": 100.0,
            "volatility": 0.3345470825098914,
            "spread_pct": 0.037027894347074826,
            "spread_ticks": 1.0273972602739727,
            "amihud": 1.3645275986350166e-07,
            "turnover_ratio": 0.011005861179279128,
            "is_target": false
          },
          {
            "ticker": "LVR",
            "score_pca": 19.17562724014337,
            "rank_pca": 452,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.0,
            "spread_pct": 0.07223113964687006,
            "spread_ticks": 12.857142857142858,
            "amihud": null,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "ITS",
            "score_pca": 84.58781362007169,
            "rank_pca": 87,
            "adv": 1462800.0,
            "trades": 376.0,
            "volatility": 0.2846066143911051,
            "spread_pct": 0.01145004576497924,
            "spread_ticks": 1.176418439716312,
            "amihud": 3.4352786629345187e-09,
            "turnover_ratio": 0.021665141161102273,
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
              "mean": 0.26686185259131745,
              "median": 0.11843150514969562,
              "min": 0.0,
              "max": 6.608197362010048,
              "p5": 0.0,
              "p95": 1.0469772646673634,
              "count": 558
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 3008997.2062823926,
              "median": 19544.5,
              "min": 0.0,
              "max": 197407180.0,
              "p5": 0.0,
              "p95": 17555689.799999993,
              "count": 558
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.10327075901714342,
              "median": 0.028071389487789773,
              "min": 0.0002935575658447305,
              "max": 1.4976744186046513,
              "p5": 0.0034905516765943723,
              "p95": 0.511182278212251,
              "count": 556
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.007521073119839352,
              "median": 0.0003552368337285009,
              "min": 0.0,
              "max": 1.7632324830268276,
              "p5": 0.0,
              "p95": 0.01598887852255307,
              "count": 551
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 0.00011371382324518449,
              "median": 1.820227795592876e-08,
              "min": 0.0,
              "max": 0.0308641975308642,
              "p5": 0.0,
              "p95": 6.752116389266041e-05,
              "count": 423
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 499.2831541218638,
              "median": 11.0,
              "min": 0.0,
              "max": 9355.0,
              "p5": 0.0,
              "p95": 3493.449999999999,
              "count": 558
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.08892053949452322,
              "median": 0.04934059122834567,
              "min": 0.0,
              "max": 0.2846066143911051,
              "p5": 0.0,
              "p95": 0.2537960100044016,
              "count": 8
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 1691452.575,
              "median": 5818.8,
              "min": 0.0,
              "max": 11920383.0,
              "p5": 0.0,
              "p95": 8260228.949999995,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.1850079581551306,
              "median": 0.024472796940127883,
              "min": 0.001361840804819715,
              "max": 0.6686303387334316,
              "p5": 0.004657510433540363,
              "p95": 0.6679430535100639,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.003910511191669959,
              "median": 0.00027960226609085025,
              "min": 0.0,
              "max": 0.021665141161102273,
              "p5": 0.0,
              "p95": 0.016903400175104083,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 2.8299192732360536e-07,
              "median": 3.4352786629345187e-09,
              "min": 0.0,
              "max": 1.2620526023524643e-06,
              "p5": 5.7855118616052216e-11,
              "p95": 1.0394785778838809e-06,
              "count": 5
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 395.25,
              "median": 2.0,
              "min": 0.0,
              "max": 2732.0,
              "p5": 0.0,
              "p95": 1907.3999999999987,
              "count": 8
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 245791.525,
              "median": 5818.8,
              "min": 0.0,
              "max": 1462800.0,
              "p5": 0.0,
              "p95": 1039267.9399999992,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 66.5,
              "median": 2.0,
              "min": 0.0,
              "max": 376.0,
              "p5": 0.0,
              "p95": 279.39999999999986,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.0938317374832506,
              "median": 0.0,
              "min": 0.0,
              "max": 0.3345470825098914,
              "p5": 0.0,
              "p95": 0.3170679186683162,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.19254913104102522,
              "median": 0.042234296736583604,
              "min": 0.010778039744021565,
              "max": 0.6686303387334316,
              "p5": 0.01101324185135675,
              "p95": 0.6679430535100639,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 7.374033961055785,
              "median": 1.5427546744036107,
              "min": 1.0,
              "max": 37.833333333333336,
              "p5": 1.0095890410958905,
              "p95": 29.091666666666654,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.00647746602731755,
              "median": 0.00027960226609085025,
              "min": 0.0,
              "max": 0.021665141161102273,
              "p5": 0.0,
              "p95": 0.02058867422580853,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 2.803881281757801e-07,
              "median": 3.4352786629345187e-09,
              "min": 0.0,
              "max": 1.2620526023524643e-06,
              "p5": 0.0,
              "p95": 1.0369326338546716e-06,
              "count": 5
            }
          },
          "returns": {
            "window_days": 1,
            "n_obs": 1,
            "stock": -0.020408163265306145,
            "market": -0.0007514139581934476,
            "sector": 0.0,
            "peers": 0.0,
            "vs_market": -0.019656749307112698,
            "vs_sector": -0.020408163265306145,
            "vs_peers": -0.020408163265306145
          }
        }
      },
      "1w": {
        "label": "1W",
        "window_days": 5,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 5,
          "score_pca": 65.77060931899642,
          "score_pca_percentile": 65.77060931899642,
          "rank_pca": 192,
          "total": 558,
          "adv_notional_sgd": 136800.0,
          "adv_volume_shares": 570000.0,
          "free_float_shares": null,
          "turnover_ratio": 0.0009995769246825188,
          "votes": 34.0,
          "trades": 34.0,
          "spread_pct": 0.0235206272167258,
          "spread_ticks": 1.125,
          "amihud": 1.4918248000954785e-07,
          "volatility": 0.4350928021344286
        },
        "pca": {
          "valid": true,
          "window_days": 5,
          "variance_explained": 0.5103114668310909,
          "loadings": {
            "log_adv": 0.5548130685413454,
            "log_trades": 0.5048879336418371,
            "log_turnover": 0.504903030894785,
            "neg_spread": 0.40807797378656774,
            "neg_amihud": 0.12169575562546014,
            "neg_vol": 0.031718657047071115
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
          "peer_median_adv": 3358.8,
          "peer_median_score_pca": 37.18637992831541,
          "peer_median_trades": 5.5,
          "peer_median_volatility": 0.2950128435932339,
          "peer_median_spread_pct": 0.03846075568417573,
          "peer_median_spread_ticks": 1.6925768608414238,
          "peer_median_amihud": 5.209702630408288e-08,
          "peer_median_turnover_ratio": 0.0001394453836739713,
          "target_vs_peer": {
            "score_pca_delta": 28.58,
            "adv_delta_pct": 3972.9,
            "trades_delta_pct": 518.18,
            "volatility_delta_pct": -47.48,
            "spread_pct_delta_pct": 38.85,
            "spread_ticks_delta_pct": -33.53,
            "amihud_delta_pct": -186.36,
            "turnover_ratio_delta_pct": 616.82
          }
        },
        "peer_liquidity": [
          {
            "ticker": "TKU",
            "score_pca": 65.77060931899642,
            "rank_pca": 192,
            "adv": 136800.0,
            "trades": 34.0,
            "volatility": 0.4350928021344286,
            "spread_pct": 0.0235206272167258,
            "spread_ticks": 1.125,
            "amihud": 1.4918248000954785e-07,
            "turnover_ratio": 0.0009995769246825188,
            "is_target": true
          },
          {
            "ticker": "KUX",
            "score_pca": 3.942652329749104,
            "rank_pca": 537,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.0,
            "spread_pct": 0.5592417061611374,
            "spread_ticks": 29.5,
            "amihud": null,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "532",
            "score_pca": 22.043010752688172,
            "rank_pca": 436,
            "adv": 2178.6,
            "trades": 7.0,
            "volatility": 3.54964786985977,
            "spread_pct": 0.6666666666666666,
            "spread_ticks": 1.0,
            "amihud": 0.0,
            "turnover_ratio": 0.00023617298819401944,
            "is_target": false
          },
          {
            "ticker": "U77",
            "score_pca": 35.66308243727598,
            "rank_pca": 360,
            "adv": 1584.0,
            "trades": 2.0,
            "volatility": 0.06679099855912914,
            "spread_pct": 0.010778039744021565,
            "spread_ticks": 2.1333333333333333,
            "amihud": 4.3005018376927166e-07,
            "turnover_ratio": 2.477739370064498e-05,
            "is_target": false
          },
          {
            "ticker": "J03",
            "score_pca": 71.68458781362007,
            "rank_pca": 159,
            "adv": 165692.5,
            "trades": 52.0,
            "volatility": 0.827048076420023,
            "spread_pct": 0.04588775150017653,
            "spread_ticks": 1.0672268907563025,
            "amihud": 0.0,
            "turnover_ratio": 0.011332288207865433,
            "is_target": false
          },
          {
            "ticker": "NXR",
            "score_pca": 34.946236559139784,
            "rank_pca": 364,
            "adv": 852.0,
            "trades": 3.0,
            "volatility": 0.23990175437779826,
            "spread_pct": 0.030513176144244137,
            "spread_ticks": 2.2,
            "amihud": 1.2620526023524643e-06,
            "turnover_ratio": 4.271777915392312e-05,
            "is_target": false
          },
          {
            "ticker": "42F",
            "score_pca": 75.26881720430107,
            "rank_pca": 139,
            "adv": 252708.4,
            "trades": 90.0,
            "volatility": 0.5939755114333374,
            "spread_pct": 0.037027894347074826,
            "spread_ticks": 1.0273972602739727,
            "amihud": 5.209702630408288e-08,
            "turnover_ratio": 0.011005861179279128,
            "is_target": false
          },
          {
            "ticker": "LVR",
            "score_pca": 38.70967741935484,
            "rank_pca": 343,
            "adv": 4539.0,
            "trades": 4.0,
            "volatility": 0.24220457246264315,
            "spread_pct": 0.039893617021276626,
            "spread_ticks": 6.923076923076923,
            "amihud": 6.223526673413035e-07,
            "turnover_ratio": 3.5256663359015555e-05,
            "is_target": false
          },
          {
            "ticker": "ITS",
            "score_pca": 85.84229390681004,
            "rank_pca": 80,
            "adv": 1401064.0,
            "trades": 524.0,
            "volatility": 0.34782111472382454,
            "spread_pct": 0.007561748389300486,
            "spread_ticks": 1.2518203883495145,
            "amihud": 3.604763986873607e-09,
            "turnover_ratio": 0.021066787522253126,
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
              "mean": 0.49022982837341145,
              "median": 0.3112824983431469,
              "min": 0.0,
              "max": 8.47053717304871,
              "p5": 0.0,
              "p95": 1.6870062985186705,
              "count": 558
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 3523054.8255224475,
              "median": 21878.8,
              "min": 0.0,
              "max": 319264520.0,
              "p5": 0.0,
              "p95": 15534132.899999991,
              "count": 558
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.10352466726426833,
              "median": 0.027337962443149386,
              "min": 0.0002935575658447305,
              "max": 1.4976744186046513,
              "p5": 0.003452935196291213,
              "p95": 0.4972041651024481,
              "count": 556
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.006217548517595179,
              "median": 0.0003902361193299641,
              "min": 0.0,
              "max": 1.7632324830268276,
              "p5": 0.0,
              "p95": 0.01551719266956967,
              "count": 551
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 0.00010088147168587577,
              "median": 7.213046799444671e-08,
              "min": 0.0,
              "max": 0.02083333333333333,
              "p5": 0.0,
              "p95": 8.421407039113796e-05,
              "count": 520
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 532.8853046594982,
              "median": 10.5,
              "min": 0.0,
              "max": 13325.0,
              "p5": 0.0,
              "p95": 3166.75,
              "count": 558
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.6203715496126869,
              "median": 0.2410531634202207,
              "min": 0.0,
              "max": 3.54964786985977,
              "p5": 0.0233768494956952,
              "p95": 2.459553596155899,
              "count": 8
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 1600325.825,
              "median": 3358.8,
              "min": 0.0,
              "max": 11255589.0,
              "p5": 298.20000000000005,
              "p95": 7806505.249999994,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.16742825500755654,
              "median": 0.02701690168048497,
              "min": 0.001250458717079463,
              "max": 0.6666666666666666,
              "p5": 0.0034594101023568214,
              "p95": 0.6290679304897313,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0037454547079047796,
              "median": 0.0001394453836739713,
              "min": 0.0,
              "max": 0.021066787522253126,
              "p5": 8.672087795225745e-06,
              "p95": 0.01633883382662777,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 3.525045675789345e-07,
              "median": 1.4918248000954785e-07,
              "min": 0.0,
              "max": 1.2620526023524643e-06,
              "p5": 8.678267792407833e-11,
              "p95": 1.0701426218491156e-06,
              "count": 7
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 335.25,
              "median": 5.5,
              "min": 0.0,
              "max": 2108.0,
              "p5": 0.7000000000000001,
              "p95": 1553.599999999999,
              "count": 8
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 228577.3125,
              "median": 3358.8,
              "min": 0.0,
              "max": 1401064.0,
              "p5": 298.20000000000005,
              "p95": 999139.5399999993,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 85.25,
              "median": 5.5,
              "min": 0.0,
              "max": 524.0,
              "p5": 0.7000000000000001,
              "p95": 372.0999999999998,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.7334237372295658,
              "median": 0.2950128435932339,
              "min": 0.0,
              "max": 3.54964786985977,
              "p5": 0.0233768494956952,
              "p95": 2.5967379421558574,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.1746963249967373,
              "median": 0.03846075568417573,
              "min": 0.007561748389300486,
              "max": 0.6666666666666666,
              "p5": 0.008687450363452864,
              "p95": 0.6290679304897313,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 5.6378568494737555,
              "median": 1.6925768608414238,
              "min": 1.0,
              "max": 29.5,
              "p5": 1.0095890410958905,
              "p95": 21.59807692307691,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.005467982716725661,
              "median": 0.0001394453836739713,
              "min": 0.0,
              "max": 0.021066787522253126,
              "p5": 8.672087795225745e-06,
              "p95": 0.01765971276221743,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 3.3859389196485655e-07,
              "median": 5.209702630408288e-08,
              "min": 0.0,
              "max": 1.2620526023524643e-06,
              "p5": 0.0,
              "p95": 1.0701426218491156e-06,
              "count": 7
            }
          },
          "returns": {
            "window_days": 5,
            "n_obs": 5,
            "stock": -0.020408163265306145,
            "market": 0.005698226332496059,
            "sector": -0.01269781738262532,
            "peers": -0.01867049287533551,
            "vs_market": -0.026106389597802204,
            "vs_sector": -0.007710345882680825,
            "vs_peers": -0.0017376703899706358
          }
        }
      },
      "30d": {
        "label": "1M",
        "window_days": 21,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 21,
          "score_pca": 70.07168458781362,
          "score_pca_percentile": 70.07168458781362,
          "rank_pca": 168,
          "total": 558,
          "adv_notional_sgd": 188278.0,
          "adv_volume_shares": 818600.0,
          "free_float_shares": null,
          "turnover_ratio": 0.001435532755342298,
          "votes": 50.0,
          "trades": 50.0,
          "spread_pct": 0.023336745138178114,
          "spread_ticks": 1.1071428571428572,
          "amihud": 9.383156015142504e-08,
          "volatility": 0.5837207335755551
        },
        "pca": {
          "valid": true,
          "window_days": 21,
          "variance_explained": 0.5262167980342604,
          "loadings": {
            "log_adv": 0.5428830519149568,
            "log_trades": 0.4946562146108231,
            "log_turnover": 0.4896580268583644,
            "neg_spread": 0.4177781321166893,
            "neg_amihud": 0.11714774056539685,
            "neg_vol": 0.18046073597622375
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
          "peer_median_adv": 11446.0,
          "peer_median_score_pca": 48.297491039426525,
          "peer_median_trades": 6.5,
          "peer_median_volatility": 0.45723706076550774,
          "peer_median_spread_pct": 0.03594866986991683,
          "peer_median_spread_ticks": 1.801388888888889,
          "peer_median_amihud": 4.026026966534097e-07,
          "peer_median_turnover_ratio": 0.00011669382558694209,
          "target_vs_peer": {
            "score_pca_delta": 21.77,
            "adv_delta_pct": 1544.9,
            "trades_delta_pct": 669.23,
            "volatility_delta_pct": -27.66,
            "spread_pct_delta_pct": 35.08,
            "spread_ticks_delta_pct": -38.54,
            "amihud_delta_pct": 76.69,
            "turnover_ratio_delta_pct": 1130.17
          }
        },
        "peer_liquidity": [
          {
            "ticker": "TKU",
            "score_pca": 70.07168458781362,
            "rank_pca": 168,
            "adv": 188278.0,
            "trades": 50.0,
            "volatility": 0.5837207335755551,
            "spread_pct": 0.023336745138178114,
            "spread_ticks": 1.1071428571428572,
            "amihud": 9.383156015142504e-08,
            "turnover_ratio": 0.001435532755342298,
            "is_target": true
          },
          {
            "ticker": "KUX",
            "score_pca": 1.971326164874552,
            "rank_pca": 548,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 4.014372790730359,
            "spread_pct": 0.5403899721448467,
            "spread_ticks": 22.666666666666668,
            "amihud": 0.00031763779127385455,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "532",
            "score_pca": 10.21505376344086,
            "rank_pca": 502,
            "adv": 500.0,
            "trades": 1.0,
            "volatility": 3.9496835316263,
            "spread_pct": 0.6666666666666666,
            "spread_ticks": 1.0,
            "amihud": 0.0,
            "turnover_ratio": 5.420292577665001e-05,
            "is_target": false
          },
          {
            "ticker": "U77",
            "score_pca": 44.086021505376344,
            "rank_pca": 313,
            "adv": 3920.0,
            "trades": 4.0,
            "volatility": 0.3264441861747321,
            "spread_pct": 0.016843647015745093,
            "spread_ticks": 2.8,
            "amihud": 2.3183497821918426e-06,
            "turnover_ratio": 6.194348425161246e-05,
            "is_target": false
          },
          {
            "ticker": "J03",
            "score_pca": 66.66666666666666,
            "rank_pca": 187,
            "adv": 165692.5,
            "trades": 67.0,
            "volatility": 1.623729857514887,
            "spread_pct": 0.050810014727540494,
            "spread_ticks": 1.0627615062761506,
            "amihud": 2.0823608708066677e-07,
            "turnover_ratio": 0.013147280427285314,
            "is_target": false
          },
          {
            "ticker": "NXR",
            "score_pca": 23.476702508960575,
            "rank_pca": 428,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.23424143030687525,
            "spread_pct": 0.03416149068322985,
            "spread_ticks": 2.4444444444444446,
            "amihud": 3.39663529307869e-06,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "42F",
            "score_pca": 74.73118279569893,
            "rank_pca": 142,
            "adv": 252708.4,
            "trades": 64.0,
            "volatility": 0.4966690478139347,
            "spread_pct": 0.03773584905660381,
            "spread_ticks": 1.0379746835443038,
            "amihud": 0.0,
            "turnover_ratio": 0.011005861179279128,
            "is_target": false
          },
          {
            "ticker": "LVR",
            "score_pca": 52.508960573476706,
            "rank_pca": 266,
            "adv": 18972.0,
            "trades": 9.0,
            "volatility": 0.4178050737170807,
            "spread_pct": 0.01976794155565107,
            "spread_ticks": 3.1578947368421053,
            "amihud": 5.969693062261526e-07,
            "turnover_ratio": 0.00017144416692227172,
            "is_target": false
          },
          {
            "ticker": "ITS",
            "score_pca": 84.94623655913979,
            "rank_pca": 85,
            "adv": 1027979.0000000001,
            "trades": 459.0,
            "volatility": 0.3784650484381573,
            "spread_pct": 0.010284052625979654,
            "spread_ticks": 1.1583333333333334,
            "amihud": 1.6888354466294237e-08,
            "turnover_ratio": 0.014581167263539233,
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
              "mean": 0.6287944581781851,
              "median": 0.38466186324454466,
              "min": 0.0,
              "max": 7.056911505750941,
              "p5": 0.03322637234498236,
              "p95": 1.9248817144894366,
              "count": 558
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 3134370.8426512135,
              "median": 15642.75,
              "min": 0.0,
              "max": 255589391.20000002,
              "p5": 0.0,
              "p95": 12946517.999999972,
              "count": 558
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.1042704716001038,
              "median": 0.029336562722115007,
              "min": 0.00024072671116111928,
              "max": 1.2394366197183098,
              "p5": 0.0033111441414321657,
              "p95": 0.5357344358834213,
              "count": 556
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.004426763294750324,
              "median": 0.0003198112468903873,
              "min": 0.0,
              "max": 0.8766725990376376,
              "p5": 0.0,
              "p95": 0.012751057593026367,
              "count": 551
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 3.299051714902995e-05,
              "median": 9.383156015142504e-08,
              "min": 0.0,
              "max": 0.010416666666666664,
              "p5": 0.0,
              "p95": 4.654255319148936e-05,
              "count": 541
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 473.16129032258067,
              "median": 8.0,
              "min": 0.0,
              "max": 12683.0,
              "p5": 0.0,
              "p95": 2637.549999999999,
              "count": 558
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 1.2748611137658838,
              "median": 0.398135061077619,
              "min": 0.23424143030687525,
              "max": 4.014372790730359,
              "p5": 0.25521157014477325,
              "p95": 3.9917315500439385,
              "count": 8
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 1645004.0,
              "median": 11446.0,
              "min": 0.0,
              "max": 11920383.0,
              "p5": 0.0,
              "p95": 8108041.599999994,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.16408872979255154,
              "median": 0.021552343346914592,
              "min": 0.0012593225101152894,
              "max": 0.6666666666666666,
              "p5": 0.0044179780506678175,
              "p95": 0.6224698235840296,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0030213016498730877,
              "median": 0.00011669382558694209,
              "min": 0.0,
              "max": 0.014581167263539233,
              "p5": 0.0,
              "p95": 0.01223090163240392,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 4.0507613998378315e-05,
              "median": 3.454004331887888e-07,
              "min": 0.0,
              "max": 0.00031763779127385455,
              "p5": 1.56245970156014e-10,
              "p95": 0.00020765338668058282,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 387.5,
              "median": 6.5,
              "min": 0.0,
              "max": 2577.0,
              "p5": 0.0,
              "p95": 1835.699999999999,
              "count": 8
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 183721.48750000002,
              "median": 11446.0,
              "min": 0.0,
              "max": 1027979.0000000001,
              "p5": 0.0,
              "p95": 756634.2899999997,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 75.5,
              "median": 6.5,
              "min": 0.0,
              "max": 459.0,
              "p5": 0.0,
              "p95": 321.7999999999998,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 1.4301763707902908,
              "median": 0.45723706076550774,
              "min": 0.23424143030687525,
              "max": 4.014372790730359,
              "p5": 0.26651239486062517,
              "p95": 3.9917315500439385,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.17208245430953292,
              "median": 0.03594866986991683,
              "min": 0.010284052625979654,
              "max": 0.6666666666666666,
              "p5": 0.012579910662397557,
              "p95": 0.6224698235840296,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 4.416009421388376,
              "median": 1.801388888888889,
              "min": 1.0,
              "max": 22.666666666666668,
              "p5": 1.0132911392405064,
              "p95": 15.83859649122806,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 4.052185876211228e-05,
              "median": 4.026026966534097e-07,
              "min": 0.0,
              "max": 0.00031763779127385455,
              "p5": 0.0,
              "p95": 0.00020765338668058282,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.004877737430881776,
              "median": 0.00011669382558694209,
              "min": 0.0,
              "max": 0.014581167263539233,
              "p5": 0.0,
              "p95": 0.01407930687085036,
              "count": 8
            }
          },
          "returns": {
            "window_days": 21,
            "n_obs": 21,
            "stock": 0.043478260869563856,
            "market": -0.005435095850177207,
            "sector": -0.012348216463760942,
            "peers": -0.005347464450340511,
            "vs_market": 0.048913356719741063,
            "vs_sector": 0.0558264773333248,
            "vs_peers": 0.04882572531990437
          }
        }
      },
      "3m": {
        "label": "3M",
        "window_days": 63,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 63,
          "score_pca": 72.22222222222221,
          "score_pca_percentile": 72.22222222222221,
          "rank_pca": 156,
          "total": 558,
          "adv_notional_sgd": 230450.0,
          "adv_volume_shares": 921800.0,
          "free_float_shares": null,
          "turnover_ratio": 0.0016165087880216594,
          "votes": 74.0,
          "trades": 74.0,
          "spread_pct": 0.02496157393175533,
          "spread_ticks": 1.1611111111111112,
          "amihud": 7.83519022118116e-08,
          "volatility": 0.5773191765428103
        },
        "pca": {
          "valid": true,
          "window_days": 63,
          "variance_explained": 0.5534909423216035,
          "loadings": {
            "log_adv": 0.5220867850636781,
            "log_trades": 0.47232048624791145,
            "log_turnover": 0.4738049959259314,
            "neg_spread": 0.42572407915244975,
            "neg_amihud": 0.1823401607729981,
            "neg_vol": 0.25565337307986696
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
          "peer_median_adv": 6057.15,
          "peer_median_score_pca": 44.17562724014337,
          "peer_median_trades": 4.0,
          "peer_median_volatility": 0.5768869722203949,
          "peer_median_spread_pct": 0.044894144710829906,
          "peer_median_spread_ticks": 1.5876976791949065,
          "peer_median_amihud": 4.4737167399904253e-07,
          "peer_median_turnover_ratio": 9.855979423002026e-05,
          "target_vs_peer": {
            "score_pca_delta": 28.05,
            "adv_delta_pct": 3704.6,
            "trades_delta_pct": 1750.0,
            "volatility_delta_pct": -0.07,
            "spread_pct_delta_pct": 44.4,
            "spread_ticks_delta_pct": -26.87,
            "amihud_delta_pct": 82.49,
            "turnover_ratio_delta_pct": 1540.13
          }
        },
        "peer_liquidity": [
          {
            "ticker": "TKU",
            "score_pca": 72.22222222222221,
            "rank_pca": 156,
            "adv": 230450.0,
            "trades": 74.0,
            "volatility": 0.5773191765428103,
            "spread_pct": 0.02496157393175533,
            "spread_ticks": 1.1611111111111112,
            "amihud": 7.83519022118116e-08,
            "turnover_ratio": 0.0016165087880216594,
            "is_target": true
          },
          {
            "ticker": "KUX",
            "score_pca": 3.225806451612903,
            "rank_pca": 541,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 2.28509876728461,
            "spread_pct": 0.4309392265193369,
            "spread_ticks": 18.0,
            "amihud": 0.00036013640690511566,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "532",
            "score_pca": 2.867383512544803,
            "rank_pca": 542,
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
            "score_pca": 46.415770609319,
            "rank_pca": 300,
            "adv": 5114.3,
            "trades": 4.0,
            "volatility": 0.3503945516480752,
            "spread_pct": 0.023529411764705903,
            "spread_ticks": 1.8888888888888888,
            "amihud": 1.5053983250529258e-06,
            "turnover_ratio": 7.9597377263322e-05,
            "is_target": false
          },
          {
            "ticker": "J03",
            "score_pca": 41.935483870967744,
            "rank_pca": 325,
            "adv": 7000.0,
            "trades": 4.0,
            "volatility": 1.1284544251737065,
            "spread_pct": 0.07213114754098364,
            "spread_ticks": 1.125,
            "amihud": 2.3691136486490102e-07,
            "turnover_ratio": 0.0008549186148939625,
            "is_target": false
          },
          {
            "ticker": "NXR",
            "score_pca": 31.36200716845878,
            "rank_pca": 384,
            "adv": 74.0,
            "trades": 1.0,
            "volatility": 0.3423249861374552,
            "spread_pct": 0.043276661514683186,
            "spread_ticks": 3.3333333333333335,
            "amihud": 1.6983887951629893e-06,
            "turnover_ratio": 3.5598149294935937e-06,
            "is_target": false
          },
          {
            "ticker": "42F",
            "score_pca": 62.365591397849464,
            "rank_pca": 211,
            "adv": 47072.0,
            "trades": 22.0,
            "volatility": 0.624218133692628,
            "spread_pct": 0.046511627906976626,
            "spread_ticks": 1.0666666666666667,
            "amihud": 0.0,
            "turnover_ratio": 0.0023588953126430752,
            "is_target": false
          },
          {
            "ticker": "LVR",
            "score_pca": 52.508960573476706,
            "rank_pca": 266,
            "adv": 12920.0,
            "trades": 8.0,
            "volatility": 0.3317974652054181,
            "spread_pct": 0.015331480077499801,
            "spread_ticks": 2.6724137931034484,
            "amihud": 6.57831983133184e-07,
            "turnover_ratio": 0.00011752221119671851,
            "is_target": false
          },
          {
            "ticker": "ITS",
            "score_pca": 83.51254480286738,
            "rank_pca": 93,
            "adv": 844272.0,
            "trades": 326.0,
            "volatility": 0.5295558107481616,
            "spread_pct": 0.010351413670595463,
            "spread_ticks": 1.2865064695009243,
            "amihud": 1.8590900468111437e-08,
            "turnover_ratio": 0.012716495898907856,
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
              "mean": 0.6885503770296926,
              "median": 0.46669781142851197,
              "min": 0.0,
              "max": 7.344078149840708,
              "p5": 0.15637620452022566,
              "p95": 2.2430208564033762,
              "count": 558
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 3272839.3408551286,
              "median": 12783.8,
              "min": 0.0,
              "max": 285980477.7,
              "p5": 0.0,
              "p95": 13752259.599999994,
              "count": 558
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.10063986516865239,
              "median": 0.030272657629499336,
              "min": 0.0002652156920799096,
              "max": 1.3542204201990415,
              "p5": 0.0035701061829561623,
              "p95": 0.4756571865124839,
              "count": 556
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.005943480540126935,
              "median": 0.00025254119578256204,
              "min": 0.0,
              "max": 2.0598510315733964,
              "p5": 0.0,
              "p95": 0.010620788735089955,
              "count": 551
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.9209410817033517e-05,
              "median": 1.3179432704498753e-07,
              "min": 0.0,
              "max": 0.002923830374993834,
              "p5": 0.0,
              "p95": 3.8478927015254226e-05,
              "count": 553
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 469.3781362007168,
              "median": 6.0,
              "min": 0.0,
              "max": 11391.0,
              "p5": 0.0,
              "p95": 2764.4499999999975,
              "count": 558
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.8697234364717539,
              "median": 0.4399751811981184,
              "min": 0.2908487501313845,
              "max": 2.28509876728461,
              "p5": 0.3051808004072963,
              "p95": 2.2729709931616373,
              "count": 8
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 2123988.7875,
              "median": 9017.15,
              "min": 0.0,
              "max": 15899080.000000002,
              "p5": 0.0,
              "p95": 10629897.199999992,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.1520478449084815,
              "median": 0.024245492848230618,
              "min": 0.0013263251226086567,
              "max": 0.6666666666666666,
              "p5": 0.004485106114404039,
              "p95": 0.5841620626151011,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0030812961216882735,
              "median": 9.855979423002026e-05,
              "min": 0.0,
              "max": 0.012716495898907856,
              "p5": 0.0,
              "p95": 0.011806562043405603,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 4.551197010824349e-05,
              "median": 3.680919426724978e-07,
              "min": 0.0,
              "max": 0.00036013640690511566,
              "p5": 2.772191811278055e-10,
              "p95": 0.00023468310056663205,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 512.875,
              "median": 6.0,
              "min": 0.0,
              "max": 3690.0,
              "p5": 0.0,
              "p95": 2512.5999999999985,
              "count": 8
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 114556.5375,
              "median": 6057.15,
              "min": 0.0,
              "max": 844272.0,
              "p5": 0.0,
              "p95": 565251.9999999995,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 45.625,
              "median": 4.0,
              "min": 0.0,
              "max": 326.0,
              "p5": 0.0,
              "p95": 219.59999999999985,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.9802865154957714,
              "median": 0.5768869722203949,
              "min": 0.3317974652054181,
              "max": 2.28509876728461,
              "p5": 0.3354820975316311,
              "p95": 2.2729709931616373,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.16359220445768102,
              "median": 0.044894144710829906,
              "min": 0.010351413670595463,
              "max": 0.6666666666666666,
              "p5": 0.012094436913011982,
              "p95": 0.5841620626151011,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 3.796601143936658,
              "median": 1.5876976791949065,
              "min": 1.0,
              "max": 18.0,
              "p5": 1.0233333333333334,
              "p95": 12.86666666666666,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 4.553169103422472e-05,
              "median": 4.4737167399904253e-07,
              "min": 0.0,
              "max": 0.00036013640690511566,
              "p5": 0.0,
              "p95": 0.00023468310056663205,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0020163736537293035,
              "median": 9.855979423002026e-05,
              "min": 0.0,
              "max": 0.012716495898907856,
              "p5": 0.0,
              "p95": 0.009091335693715176,
              "count": 8
            }
          },
          "returns": {
            "window_days": 63,
            "n_obs": 63,
            "stock": -0.09433962264151019,
            "market": 0.0031558757542777816,
            "sector": -0.10095672857101212,
            "peers": -0.03627246010872587,
            "vs_market": -0.09749549839578797,
            "vs_sector": 0.006617105929501932,
            "vs_peers": -0.05806716253278432
          }
        }
      }
    },
    "period_insights": {
      "1d": {
        "liquidity": "Near-term access looks a bit thinner today because displayed bid depth is only 0.48x ask depth, even though the spread remains 1 tick. That matters because buy-side liquidity is lighter at the screen.",
        "market_comparison": "Recent price action has been firmer than the main comparison groups over 1M, with the stock up 4.3% while peers and the market were both down 0.5%. That matters because the return backdrop is stronger than the broader tape."
      },
      "1w": {
        "liquidity": "Liquidity is still workable over the week, but it has pulled back. 1W average volume is down 27.3% from the 1M average, which means access is weaker than the monthly picture implies.",
        "market_comparison": "Company-specific factors are the main driver at 38.9%. That matters because trading conditions are more tied to stock news than to broader market moves."
      },
      "30d": {
        "liquidity": "Monthly tradability remains strong for the company’s size. The 3M liquidity score is 72.2 compared with a peer median of 44.2, which supports good accessibility relative to similar names.",
        "market_comparison": "Return 4.3% vs peers -0.5%."
      },
      "3m": {
        "liquidity": "Structural liquidity looks strong over the medium term. A 3M score of 72.2, 28.0 points above the peer median, indicates the stock screens as accessible relative to peers.",
        "market_comparison": "Relative standing is clearly ahead of peers on liquidity, with the 3M score at 72.2 compared with a peer median of 44.2. That matters because the stock’s tradability profile is stronger than its peer set."
      }
    }
  },
  "q02": {
    "driver_model": {
      "valid": true,
      "model_method": "ols_with_volatility_regimes",
      "estimation_window_days": 68,
      "reporting_window_days": 63,
      "available_history_days": 68,
      "n_regimes": 2,
      "current_regime": 0,
      "current_regime_label": "Low Volatility",
      "current_regime_probability": 1.0,
      "current_driver_mix": {
        "market_share": {
          "median": 0.37893020335886063,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "37.9%",
          "display_range": null,
          "display_text": "37.9%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 68 trading days.",
          "kind": "share_pct",
          "value_pct": 37.9,
          "plain_english": "Market explains about 37.9% of price moves in the current state."
        },
        "sector_share": {
          "median": 0.23229946355388711,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "23.2%",
          "display_range": null,
          "display_text": "23.2%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 68 trading days.",
          "kind": "share_pct",
          "value_pct": 23.2,
          "plain_english": "Sector explains about 23.2% of price moves in the current state."
        },
        "company_share": {
          "median": 0.38877033308725223,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "38.9%",
          "display_range": null,
          "display_text": "38.9%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 68 trading days.",
          "kind": "share_pct",
          "value_pct": 38.9,
          "plain_english": "Company-specific explains about 38.9% of price moves in the current state."
        },
        "basis": "current_state"
      },
      "current_sensitivities": {
        "beta_market": {
          "median": -0.30587024272398067,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "-0.31",
          "display_range": null,
          "display_text": "-0.31",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 68 trading days.",
          "kind": "beta",
          "strength_label": "Modest",
          "plain_english": "Modest market link: a 1% market move has lined up with about a 0.31% stock move in the opposite direction in this state.",
          "value_num": -0.31
        },
        "beta_stock_lag": {
          "median": -0.7673889285542767,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "-0.77",
          "display_range": null,
          "display_text": "-0.77",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 68 trading days.",
          "kind": "lag_beta",
          "value_num": -0.77
        },
        "beta_sector": {
          "median": 0.43696522263711823,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "0.44",
          "display_range": null,
          "display_text": "0.44",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 68 trading days.",
          "kind": "beta",
          "strength_label": "Modest",
          "plain_english": "Modest sector link: a 1% sector move has lined up with about a 0.44% stock move in the same direction in this state.",
          "value_num": 0.44
        },
        "beta_market_lag": {
          "median": 2.7881865684466836,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "2.79",
          "display_range": null,
          "display_text": "2.79",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 68 trading days.",
          "kind": "lag_beta",
          "value_num": 2.79
        },
        "beta_sector_lag": {
          "median": 0.8840337857338005,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "0.88",
          "display_range": null,
          "display_text": "0.88",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 68 trading days.",
          "kind": "lag_beta",
          "value_num": 0.88
        },
        "posterior_source": null,
        "intervals_collapsed": false,
        "confidence_label": "High, limited history",
        "confidence_note": "Based on 68 trading days relative to the 252-day target."
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
            "median": 0.47931948471963903,
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
              "median": 0.47931948471963903,
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
              "median": 0.2984396411024004,
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
              "median": 0.2222408741779605,
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
            "median": 0.5656898926629685,
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
              "median": 0.16951692775830024,
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
              "median": 0.5656898926629685,
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
            "median": 0.537921465360335,
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
              "median": 0.22982068067655398,
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
              "median": 0.23225785396311108,
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
              "median": 0.537921465360335,
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
            "median": 0.5202476822091704,
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
              "median": 0.34425966677405034,
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
              "median": 0.1354926510167792,
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
              "median": 0.5202476822091704,
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
        }
      ],
      "regimes": [
        {
          "id": 0,
          "label": "Low Volatility",
          "pct_time": 0.5,
          "expected_duration_days": 6.6,
          "current_probability": 1.0,
          "n_days_effective": 33.0,
          "volatility": {
            "median": 0.028679300304698584,
            "low": 0.028679300304698584,
            "high": 0.028679300304698584
          },
          "volatility_label": "Low Volatility",
          "current_probability_display": null
        },
        {
          "id": 1,
          "label": "High Volatility",
          "pct_time": 0.5,
          "expected_duration_days": 8.25,
          "current_probability": 0.0,
          "n_days_effective": 33.0,
          "volatility": {
            "median": 0.04292097877718646,
            "low": 0.04292097877718646,
            "high": 0.04292097877718646
          },
          "volatility_label": "High Volatility",
          "current_probability_display": 0.0
        }
      ],
      "transitions": {
        "mean": [
          [
            0.875,
            0.125
          ],
          [
            0.12121212121212122,
            0.8787878787878788
          ]
        ],
        "low": [],
        "high": [],
        "counts": [
          [
            28.0,
            4.0
          ],
          [
            4.0,
            29.0
          ]
        ]
      },
      "methodology": {
        "estimation_window_days": 68,
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
        "market_link_display": "-0.31",
        "sector_link_display": "0.44",
        "market_link_explainer": "Modest market link. A 1% market move has lined up with about a 0.31% stock move in the opposite direction in this state. This is a point estimate from 68 trading days.",
        "sector_link_explainer": "Modest sector link. A 1% sector move has lined up with about a 0.44% stock move in the same direction in this state. This is a point estimate from 68 trading days.",
        "stock_persistence_display": "-0.77",
        "point_estimate_note": "Point estimate only because the current state has 68 trading days.",
        "history_limited_note": "Read is based on 68 trading days versus the 252-day target."
      },
      "current_summary": {
        "regime_label": "Low Volatility",
        "dominant_driver": "company",
        "dominant_driver_label": "Company-specific",
        "driver_share_pct": 38.9,
        "driver_share_display": "38.9%",
        "confidence_label": "High, limited history",
        "confidence_pct": 100.0,
        "display_confidence_pct": null,
        "confidence_note": "Based on 68 trading days relative to the 252-day target.",
        "history_days": 68,
        "history_limited": true,
        "volatility_label": "Low Volatility",
        "lead_signal_text": "No stable lead signal.",
        "state_term": "state",
        "stay_probability": 0.875,
        "effective_days": 33.0,
        "persistence_note": "This state looks more persistent, with a typical run length of about 6.6 days.",
        "expected_duration_days": 6.6
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
          "expected_duration_days": 6.6,
          "current_probability": 1.0,
          "n_days_effective": 33.0,
          "volatility": {
            "median": 0.028679300304698584,
            "low": 0.028679300304698584,
            "high": 0.028679300304698584
          },
          "volatility_label": "Low Volatility"
        },
        {
          "id": 1,
          "label": "High Volatility",
          "pct_time": 0.5,
          "expected_duration_days": 8.25,
          "current_probability": 0.0,
          "n_days_effective": 33.0,
          "volatility": {
            "median": 0.04292097877718646,
            "low": 0.04292097877718646,
            "high": 0.04292097877718646
          },
          "volatility_label": "High Volatility"
        }
      ],
      "transitions": [
        [
          0.875,
          0.125
        ],
        [
          0.12121212121212122,
          0.8787878787878788
        ]
      ],
      "transition_intervals": {
        "mean": [
          [
            0.875,
            0.125
          ],
          [
            0.12121212121212122,
            0.8787878787878788
          ]
        ],
        "low": [],
        "high": [],
        "counts": [
          [
            28.0,
            4.0
          ],
          [
            4.0,
            29.0
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
        "text": "Liquidity score: 72.2 — Strong",
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
    "liq_subtitle": "Monthly liquidity still stands out relative to peers, although recent average volume has pulled back and the bid side is lighter.",
    "market_comparison_title": "How You Compare to the Market",
    "market_comparison_subtitle": "Context relative to market, sector, and peer medians.",
    "perf_title": "Stock Performance",
    "perf_subtitle": "The stock has outperformed over the past month, with a stronger return backdrop than peers and the market.",
    "perf_insight": "Recent performance is strong, with a 1M return of +4.3% compared with -0.5% for peers and -0.5% for the market. Company-specific factors are the largest current driver at 38.9%, which means the move is being led more by stock news than by broader market direction.",
    "drivers_title": "What Moves Your Stock Price?",
    "drivers_subtitle": "Company-specific factors are the main driver of price action, keeping the stock more tied to its own news flow.",
    "drivers_strip": [
      {
        "title": "Current Driver (Last 5 Days)",
        "text": "Over the last 5 trading days, moves are mainly company-driven, accounting for about 38.9% of price changes. Other influences are market 37.9%, and secto%."
      },
      {
        "title": "Driver Mix",
        "text": "Based on the last 5 trading days, current mix is market 37.9%, secto%, and company-specific 38.9%."
      },
      {
        "title": "Monthly Trend",
        "text": "The driver mix has been consistently company-driven across Feb to Apr."
      }
    ],
    "drivers_pie_title": "Current Driver Mix (Last 5 Days)",
    "drivers_pie_note": "Based on the last 5 trading days, current split is market 37.9%, secto%, and company-specific 38.9%.",
    "lead_lag_title": "",
    "lead_lag_note": "",
    "rolling_title": "Monthly Driver Shift",
    "rolling_latest_label": "Latest: {period}",
    "rolling_note": "Each bar shows the monthly split between market-, sector-, and company-driven moves.",
    "drivers_bottom_line": "That matters because the stock is already outperforming, with a 1M return of +4.3% compared with -0.5% for peers and -0.5% for the market. When stock-specific drivers lead, price moves can stay firm even as recent average volume pulls back.",
    "drivers_wtd_title": "Key Reads",
    "drivers_wtd_list": [
      "Main driver now: company-specific factors are the largest influence on price moves.",
      "Monthly change: the stock has remained mostly company-driven from February through April."
    ],
    "regime_title": "Market State",
    "regime_subtitle": "The market backdrop is supportive, with returns outperforming even as trading activity has eased from the monthly average.",
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
    "exec_check_subtitle": "Combines the final continuous-session displayed book before close, trade-size stress tests based on available history from Jan 22, 2026 to May 5, 2026 (70 trading days • 11,569 trades), large sell-side orders observed today, and intraday spread/depth during the continuous trading session.",
    "order_book_title": "Order Book Depth (Available Liquidity)",
    "order_book_note": "Depth shown is based on the displayed order book.",
    "peer_capacity_title": "Peer Capacity Context",
    "peer_capacity_note": "Immediate buy-side depth is lighter than the monthly baseline, so day-to-day access may feel weaker than the 1M score",
    "impact_summary_title": "Estimated Price Impact (Sell Orders)",
    "impact_summary_subtitle": "Approximate price impact (%) for sell orders.",
    "exec_check_insight": "Immediate buy-side depth is lighter than the offer, with displayed bid depth at 0.48x ask depth despite a 1 tick spread. That means the broader liquidity profile is not showing up evenly in the visible book.",
    "trader_composition_title": "Who's Trading Your Stock?",
    "trader_composition_subtitle": "Shows whether trading is mostly retail-like, institution-like, mixed, or unclassified.",
    "trader_retail_threshold": "Retail-like flow",
    "trader_mixed_threshold": "Mixed flow",
    "trader_instit_threshold": "Institution-like flow",
    "peer_trader_title": "Peer Comparison: Trader Mix",
    "peer_trader_subtitle": "How the trader mix compares with peers.",
    "price_moving_title": "Which Trades Move the Price?",
    "price_moving_subtitle": "Price-moving trades are 19.9% of total trades.",
    "intraday_title": "When Does Trading Happen?",
    "intraday_subtitle": "Trading access looks better on a monthly view than in the immediate book, with recent activity pointing to a less even day-to-day market.",
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
    "intraday_insight": "Recent average volume has pulled back, with 1W average volume down 27.3% from the 1M average. Displayed bid depth is also only 0.48x ask depth, which means access can feel thinner in the market even with a 1 tick spread.",
    "short_title": "Short Selling & Lending",
    "short_subtitle": "The current trading picture is better explained by strong relative liquidity, lower recent volume, and company-specific price drivers.",
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
    "exec_subtitle": "Liquidity remains strong for the company’s size, but recent activity and the near-side book make day-to-day access less robust.",
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
        "value": "72.2/100",
        "sub": "Peer median 44.2 (+28.0 pts)",
        "interp": {
          "text": "Strong",
          "cls": "interpretation-good",
          "icon": "◆"
        }
      },
      {
        "title": "Volume vs Peers",
        "value": "S$230.4K",
        "sub": "Peer median S$6.1K",
        "interp": {
          "text": "Strong",
          "cls": "interpretation-good",
          "icon": "◆"
        }
      },
      {
        "title": "Spread",
        "value": "2.50%",
        "sub": "1.16 ticks; peers 4.49%",
        "interp": {
          "text": "Tighter",
          "cls": "interpretation-good",
          "icon": "◆"
        }
      }
    ],
    "liq_insight": "Liquidity remains strong relative to peers, but the near-term trading picture is less robust. The 3M liquidity score is 72.2, which is 28.0 points above the peer median of 44.2, showing the stock screens well for its size. More recently, 1W average volume is down 27.3% from the 1M average and displayed bid depth is only 0.48x ask depth, so day-to-day access can feel thinner even with a 1 tick spread.",
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
        "value": "0.48x",
        "note": "Bid depth / ask depth on the displayed order book",
        "color": "text-slate-300"
      }
    ],
    "impact_summary_cards": [
      {
        "title": "~S$100K sell",
        "text": "Estimated impact ~-2.07% with 100.0% fill.",
        "cls": "ok"
      },
      {
        "title": "S$1.0M sell",
        "text": "Estimated impact ~-6.19% with 50.6% fill.",
        "cls": "warn"
      },
      {
        "title": "S$2.5M sell",
        "text": "Estimated impact ~-6.19% with 20.2% fill.",
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
        "subtext": "Rank 156/558",
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
        "value": "2.50",
        "suffix": "%",
        "bar_pct": 25,
        "color_value": "text-amber-400",
        "color_bar": "bg-amber-500",
        "subtext": "2.50% • 1.16 ticks vs peers 4.49%",
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
        "value": "230.4K",
        "value_prefix": "S$",
        "suffix": "",
        "bar_pct": 60,
        "color_value": "text-emerald-400",
        "color_bar": "bg-emerald-500",
        "subtext": "Peer median S$6.1K",
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
        "value": "38.9",
        "suffix": "company-specific",
        "bar_pct": 39,
        "color_value": "text-amber-400",
        "color_bar": "bg-amber-500",
        "subtext": "Market 37.9% • Secto%",
        "interpretation": {
          "text": "Company",
          "cls": "interpretation-neutral",
          "icon": "◆"
        }
      }
    ],
    "exec_takeaways": [
      "Structural liquidity remains strong for the stock’s size, with a 3M liquidity score of 72.2 compared with a peer median of 44.2. That keeps the name looking accessible relative to similar companies on a monthly average basis.",
      "Recent trading activity has pulled back, with 1W average volume down 27.3% from the 1M",
      "The return backdrop is firm, with the stock up 4.3% over 1M while peers and the market are both down 0.5%. Displayed bid depth is only 0.48x ask depth with a 1 tick spread, so immediate buy-side liquidity is thinner than the recent performance backdrop implies."
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
      "overall": "3M liquidity is strong: score 72.2 vs peer median 44.2 (+28.0",
      "strengths": [
        "3M score 72.2 vs peer median 44.2 (+28.0 pts)."
      ],
      "concerns": [
        "1W average volume down -27.3% from 1M."
      ],
      "peer_context": "Primary-period score gap vs peers: +28.0 pts."
    },
    "market_comparison": {
      "returns": {
        "insight": "3M return is -9.4%, worse than market and peers, which suggests weaker price performance than comparable names.",
        "vs_market": "Worse than market: -9.4% vs market 0.3%.",
        "vs_sector": "In line with sector: -9.4% vs sector -10.1%.",
        "vs_peers": "Worse than peers: -9.4% vs peers -3.6%."
      },
      "adv": {
        "insight": "ADV is S$230.4K, better than market, sector, and peers, which supports stronger day-to-day trading size than comparable names.",
        "vs_market": "Better than market: S$230.4K vs market S$12.8K.",
        "vs_sector": "Better than sector: S$230.4K vs sector S$9.0K.",
        "vs_peers": "Better than peers: S$230.4K vs peers S$6.1K."
      },
      "spread": {
        "insight": "Spread is 2.50%, better than market and peers, which keeps trading costs more competitive than comparable names.",
        "vs_market": "Better than market: 2.50% vs market 3.03%.",
        "vs_sector": "In line with sector: 2.50% vs secto%.",
        "vs_peers": "Better than peers: 2.50% vs peers 4.49%."
      },
      "turnover_ratio": {
        "insight": "Turnover ratio is 0.16%, better than market, sector, and peers, which shows a more active free-float turnover profile than comparable names.",
        "vs_market": "Better than market: 0.16% vs market 0.03%.",
        "vs_sector": "Better than sector: 0.16% vs sector 0.01%.",
        "vs_peers": "Better than peers: 0.16% vs peers 0.01%."
      },
      "volatility": {
        "insight": "Volatility is 57.73%, worse than market and sector, which suggests day-to-day price swings are heavier than comparable names.",
        "vs_market": "Worse than market: 57.73% vs market 46.67%.",
        "vs_sector": "Worse than sector: 57.73% vs sector 44.00%.",
        "vs_peers": "In line with peers: 57.73% vs peers 57.69%."
      },
      "trades": {
        "insight": "Trades is 74, better than market, sector, and peers, which supports more fully reflective of day-to-day access day-to-day activity than comparable names.",
        "vs_market": "Better than market: 74 vs market 6.",
        "vs_sector": "Better than sector: 74 vs sector 6.",
        "vs_peers": "Better than peers: 74 vs peers 4."
      },
      "amihud": {
        "insight": "Price impact is 7.84e-08, better than market, sector, and peers, which suggests trades move price less than comparable names.",
        "vs_market": "Better than market: 7.84e-08 vs market 1.32e-07.",
        "vs_sector": "Better than sector: 7.84e-08 vs sector 3.68e-07.",
        "vs_peers": "Better than peers: 7.84e-08 vs peers 4.47e-07."
      }
    },
    "performance": {
      "overall": "Recent returns are stronger than the main comparison groups, with the stock up 4.3% over one month while peers and the market both fell 0.5%. Liquidity gives mixed confirmation because the 3M score of 72.2 is well above the 44.2 peer median, yet 1W average volume is down 27.3% from the 1M average, so the move has come with less active recent trading.",
      "conclusion": "This looks primarily company-specific, with strong relative returns supported by solid structural liquidity but less active recent trading."
    },
    "drivers": {
      "overall": "Current driver: Company-specific at 38.9%. Price moves are being driven mainly by stock-specific factors, so company news matters more than broad market moves right now.",
      "beta": "This company-led pattern is meaningful for trading conditions because recent activity has pulled back even as the stock remains strong for its size on a 3M liquidity score of 72.2 compared with a peer median of 44.2. In practice, that means access still screens well relative to peers, but day-to-day trading can feel less supported when stock-specific news is setting the pace.",
      "rolling_change": "The pattern looks reasonably stable rather than new, as the stock was mostly company-driven in February, March, and April. The latest week’s average volume is 27.3% below the 1M average, so the driver mix has held while participation has become thinner."
    },
    "regime": {
      "overall": "Low volatility points to a steadier trading backdrop, and the typical spell of about 6.6 days suggests conditions are not flipping day to day. That matters because a calmer tape usually supports more predictable access even when activity is uneven.",
      "current": "The stock is currently in a low-volatility state, which signals a calmer market backdrop than a high-volatility phase. That matters because price moves are likely to be less abrupt in the near term.",
      "transitions": "The state looks fairly stable, with a typical run length of about 6.6 days, although the picture is mixed because 1W average volume is 27.3% below the 1M average. That matters because the backdrop appears settled, but participation has pulled back.",
      "trading_implications": "Trading conditions look broadly steady on price behaviour, but they are less robust on flow because recent average volume has dropped and displayed bid depth is only 0.48x ask depth. That matters because execution may feel orderly overall while immediate buy-side support is thinner."
    },
    "execution": {
      "overall": "The current book looks bid-light, not bid-light, because the spread is still 1 tick but displayed bid depth is only 0.48x ask depth. That matters because immediate liquidity is available, but it is less supportive for buy-side access than the headline profile implies.",
      "concern": "The clearest stress point is the imbalance on the bid side, with less than half the displayed depth of the ask side. That matters because the book can feel thinner on the buy side even before considering that 1W average volume is down 27.3% from the 1M average.",
      "peer_context": "Liquidity still looks strong for the stock’s size, with a 3M score of 72.2 versus a peer median of 44.2, but recent trading has softened: 1W average volume is 27.3% below 1M, displayed bid depth is 0.48x ask depth and the spread is 1 tick. Price moves are mainly company-specific (38.9%), and the stock has outperformed, up 4.3% over 1M versus -0.5% for peers and -0.5% for the market."
    },
    "trader_composition": {
      "overall": "Flow leans retail-like on both trade count and trade value, which gives the current activity a consumer-style profile rather than an institution-led one.",
      "retail_heavy": "Retail-like trades account for 89.7% of trade count and 39.2% of trade value, compared with institution-like trades at 0.8% of count and 13.4% of value. That shows broad participation by number of trades, while the value mix is less one-sided, so the signal is clear but not absolute.",
      "institutional_gap": "Institution-like activity is a small part of observed flow at 0.8% of trade count and 13.4% of trade value. That leaves the tape less anchored by larger-value participation.",
      "peer_comparison": "The current mix stands out as more retail-like than a typical institution-led flow profile, with retail-like activity dominating both count and value. Relative to peers, that points to a shareholder base that is being driven more by broad participation than by large-value trades."
    },
    "price_moving": {
      "overall": "Price action is being driven more by stock-specific factors than by the broader market. Company-specific drivers account for 38.9%, which makes single-name news more important to trading behaviour. The signal is mixed rather than purely institutional, because trade count and value both lean retail-like while the stock has outperformed over one month. A 4.3% return, compared with -0.5% for peers and -0.5% for the market, shows buyers have still supported the tape.",
      "interpretation": "",
      "asymmetry": ""
    },
    "short_selling": {
      "overall": "Short activity looks low and is not the main factor shaping trading conditions. The clearer signals are that 1W average volume is down 27.3% from 1M while the stock is up 4.3% over 1M compared with -0.5% for peers and -0.5% for the market, which points more to lighter recent activity than to short pressure.",
      "level": "Low short interest",
      "correlation": "No clear relationship (correlation undefined)",
      "trend": "Short interest appears stable rather than rising, so it does not add a new source of stress to the current picture. That matters because the recent change in trading conditions is better explained by lower average volume than by any build in short activity.",
      "peaks": "0 notable peak days identified."
    },
    "intraday": {
      "overall": "Session split is open 1.1%, continuous 95.8%, and close 2.2%. Current trading concentration score is 0.276.",
      "hhi_interpretation": "Concentrated - liquidity clustered at open/close",
      "best_times": "The continuous session is the clearest source of liquidity because it carries almost all activity. That matters more than the open or close for investors looking to trade during the day.",
      "peer_ranking": "Intraday liquidity looks competitive for the stock's size, supported by a 3M liquidity score of 72.2 compared with a peer median of 44.2. That suggests the session profile sits on top of a stronger structural base than many peers."
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
        72.22222222222221,
        3.225806451612903,
        2.867383512544803,
        46.415770609319,
        41.935483870967744,
        31.36200716845878,
        62.365591397849464,
        52.508960573476706,
        83.51254480286738
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
        230450.0,
        0.0,
        0.0,
        5114.3,
        7000.0,
        74.0,
        47072.0,
        12920.0,
        844272.0
      ],
      "total": 558
    },
    "market_comparison": {
      "sector_name": "Software - Application",
      "sector_count": 8,
      "market_count": 558,
      "company": {
        "volatility": 0.5773191765428103,
        "adv": 230450.0,
        "spread_pct": 0.02496157393175533,
        "turnover_ratio": 0.0016165087880216594,
        "amihud": 7.83519022118116e-08,
        "trades": 74.0
      },
      "market": {
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.6885503770296926,
          "median": 0.46669781142851197,
          "min": 0.0,
          "max": 7.344078149840708,
          "p5": 0.15637620452022566,
          "p95": 2.2430208564033762,
          "count": 558
        },
        "adv": {
          "direction": "higher_is_better",
          "mean": 3272839.3408551286,
          "median": 12783.8,
          "min": 0.0,
          "max": 285980477.7,
          "p5": 0.0,
          "p95": 13752259.599999994,
          "count": 558
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.10063986516865239,
          "median": 0.030272657629499336,
          "min": 0.0002652156920799096,
          "max": 1.3542204201990415,
          "p5": 0.0035701061829561623,
          "p95": 0.4756571865124839,
          "count": 556
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.005943480540126935,
          "median": 0.00025254119578256204,
          "min": 0.0,
          "max": 2.0598510315733964,
          "p5": 0.0,
          "p95": 0.010620788735089955,
          "count": 551
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 1.9209410817033517e-05,
          "median": 1.3179432704498753e-07,
          "min": 0.0,
          "max": 0.002923830374993834,
          "p5": 0.0,
          "p95": 3.8478927015254226e-05,
          "count": 553
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 469.3781362007168,
          "median": 6.0,
          "min": 0.0,
          "max": 11391.0,
          "p5": 0.0,
          "p95": 2764.4499999999975,
          "count": 558
        }
      },
      "sector": {
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.8697234364717539,
          "median": 0.4399751811981184,
          "min": 0.2908487501313845,
          "max": 2.28509876728461,
          "p5": 0.3051808004072963,
          "p95": 2.2729709931616373,
          "count": 8
        },
        "adv": {
          "direction": "higher_is_better",
          "mean": 2123988.7875,
          "median": 9017.15,
          "min": 0.0,
          "max": 15899080.000000002,
          "p5": 0.0,
          "p95": 10629897.199999992,
          "count": 8
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.1520478449084815,
          "median": 0.024245492848230618,
          "min": 0.0013263251226086567,
          "max": 0.6666666666666666,
          "p5": 0.004485106114404039,
          "p95": 0.5841620626151011,
          "count": 8
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.0030812961216882735,
          "median": 9.855979423002026e-05,
          "min": 0.0,
          "max": 0.012716495898907856,
          "p5": 0.0,
          "p95": 0.011806562043405603,
          "count": 8
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 4.551197010824349e-05,
          "median": 3.680919426724978e-07,
          "min": 0.0,
          "max": 0.00036013640690511566,
          "p5": 2.772191811278055e-10,
          "p95": 0.00023468310056663205,
          "count": 8
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 512.875,
          "median": 6.0,
          "min": 0.0,
          "max": 3690.0,
          "p5": 0.0,
          "p95": 2512.5999999999985,
          "count": 8
        }
      },
      "peers": {
        "adv": {
          "direction": "higher_is_better",
          "mean": 114556.5375,
          "median": 6057.15,
          "min": 0.0,
          "max": 844272.0,
          "p5": 0.0,
          "p95": 565251.9999999995,
          "count": 8
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 45.625,
          "median": 4.0,
          "min": 0.0,
          "max": 326.0,
          "p5": 0.0,
          "p95": 219.59999999999985,
          "count": 8
        },
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.9802865154957714,
          "median": 0.5768869722203949,
          "min": 0.3317974652054181,
          "max": 2.28509876728461,
          "p5": 0.3354820975316311,
          "p95": 2.2729709931616373,
          "count": 8
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.16359220445768102,
          "median": 0.044894144710829906,
          "min": 0.010351413670595463,
          "max": 0.6666666666666666,
          "p5": 0.012094436913011982,
          "p95": 0.5841620626151011,
          "count": 8
        },
        "spread_ticks": {
          "direction": "neutral",
          "mean": 3.796601143936658,
          "median": 1.5876976791949065,
          "min": 1.0,
          "max": 18.0,
          "p5": 1.0233333333333334,
          "p95": 12.86666666666666,
          "count": 8
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 4.553169103422472e-05,
          "median": 4.4737167399904253e-07,
          "min": 0.0,
          "max": 0.00036013640690511566,
          "p5": 0.0,
          "p95": 0.00023468310056663205,
          "count": 8
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.0020163736537293035,
          "median": 9.855979423002026e-05,
          "min": 0.0,
          "max": 0.012716495898907856,
          "p5": 0.0,
          "p95": 0.009091335693715176,
          "count": 8
        }
      }
    },
    "returns": [
      {
        "horizon": "1W",
        "stock": -0.020408163265306145,
        "market": 0.005698226332496059,
        "sector": -0.01269781738262532,
        "peers": -0.01867049287533551
      },
      {
        "horizon": "1M",
        "stock": 0.043478260869563856,
        "market": -0.005435095850177207,
        "sector": -0.012348216463760942,
        "peers": -0.005347464450340511
      },
      {
        "horizon": "3M",
        "stock": -0.09433962264151019,
        "market": 0.0031558757542777816,
        "sector": -0.10095672857101212,
        "peers": -0.03627246010872587
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
      "share_market": 0.37893020335886063,
      "share_sector": 0.23229946355388711,
      "share_idio": 0.38877033308725223,
      "beta_market": -0.30587024272398067,
      "beta_sector": 0.43696522263711823,
      "driver_model": {
        "valid": true,
        "model_method": "ols_with_volatility_regimes",
        "estimation_window_days": 68,
        "reporting_window_days": 63,
        "available_history_days": 68,
        "n_regimes": 2,
        "current_regime": 0,
        "current_regime_label": "Low Volatility",
        "current_regime_probability": 1.0,
        "current_driver_mix": {
          "market_share": {
            "median": 0.37893020335886063,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "37.9%",
            "display_range": null,
            "display_text": "37.9%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 68 trading days.",
            "kind": "share_pct",
            "value_pct": 37.9,
            "plain_english": "Market explains about 37.9% of price moves in the current state."
          },
          "sector_share": {
            "median": 0.23229946355388711,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "23.2%",
            "display_range": null,
            "display_text": "23.2%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 68 trading days.",
            "kind": "share_pct",
            "value_pct": 23.2,
            "plain_english": "Sector explains about 23.2% of price moves in the current state."
          },
          "company_share": {
            "median": 0.38877033308725223,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "38.9%",
            "display_range": null,
            "display_text": "38.9%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 68 trading days.",
            "kind": "share_pct",
            "value_pct": 38.9,
            "plain_english": "Company-specific explains about 38.9% of price moves in the current state."
          },
          "basis": "current_state"
        },
        "current_sensitivities": {
          "beta_market": {
            "median": -0.30587024272398067,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "-0.31",
            "display_range": null,
            "display_text": "-0.31",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 68 trading days.",
            "kind": "beta",
            "strength_label": "Modest",
            "plain_english": "Modest market link: a 1% market move has lined up with about a 0.31% stock move in the opposite direction in this state.",
            "value_num": -0.31
          },
          "beta_stock_lag": {
            "median": -0.7673889285542767,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "-0.77",
            "display_range": null,
            "display_text": "-0.77",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 68 trading days.",
            "kind": "lag_beta",
            "value_num": -0.77
          },
          "beta_sector": {
            "median": 0.43696522263711823,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "0.44",
            "display_range": null,
            "display_text": "0.44",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 68 trading days.",
            "kind": "beta",
            "strength_label": "Modest",
            "plain_english": "Modest sector link: a 1% sector move has lined up with about a 0.44% stock move in the same direction in this state.",
            "value_num": 0.44
          },
          "beta_market_lag": {
            "median": 2.7881865684466836,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "2.79",
            "display_range": null,
            "display_text": "2.79",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 68 trading days.",
            "kind": "lag_beta",
            "value_num": 2.79
          },
          "beta_sector_lag": {
            "median": 0.8840337857338005,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "0.88",
            "display_range": null,
            "display_text": "0.88",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 68 trading days.",
            "kind": "lag_beta",
            "value_num": 0.88
          },
          "posterior_source": null,
          "intervals_collapsed": false,
          "confidence_label": "High, limited history",
          "confidence_note": "Based on 68 trading days relative to the 252-day target."
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
              "median": 0.47931948471963903,
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
                "median": 0.47931948471963903,
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
                "median": 0.2984396411024004,
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
                "median": 0.2222408741779605,
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
              "median": 0.5656898926629685,
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
                "median": 0.16951692775830024,
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
                "median": 0.5656898926629685,
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
              "median": 0.537921465360335,
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
                "median": 0.22982068067655398,
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
                "median": 0.23225785396311108,
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
                "median": 0.537921465360335,
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
              "median": 0.5202476822091704,
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
                "median": 0.34425966677405034,
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
                "median": 0.1354926510167792,
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
                "median": 0.5202476822091704,
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
          }
        ],
        "regimes": [
          {
            "id": 0,
            "label": "Low Volatility",
            "pct_time": 0.5,
            "expected_duration_days": 6.6,
            "current_probability": 1.0,
            "n_days_effective": 33.0,
            "volatility": {
              "median": 0.028679300304698584,
              "low": 0.028679300304698584,
              "high": 0.028679300304698584
            },
            "volatility_label": "Low Volatility",
            "current_probability_display": null
          },
          {
            "id": 1,
            "label": "High Volatility",
            "pct_time": 0.5,
            "expected_duration_days": 8.25,
            "current_probability": 0.0,
            "n_days_effective": 33.0,
            "volatility": {
              "median": 0.04292097877718646,
              "low": 0.04292097877718646,
              "high": 0.04292097877718646
            },
            "volatility_label": "High Volatility",
            "current_probability_display": 0.0
          }
        ],
        "transitions": {
          "mean": [
            [
              0.875,
              0.125
            ],
            [
              0.12121212121212122,
              0.8787878787878788
            ]
          ],
          "low": [],
          "high": [],
          "counts": [
            [
              28.0,
              4.0
            ],
            [
              4.0,
              29.0
            ]
          ]
        },
        "methodology": {
          "estimation_window_days": 68,
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
          "market_link_display": "-0.31",
          "sector_link_display": "0.44",
          "market_link_explainer": "Modest market link. A 1% market move has lined up with about a 0.31% stock move in the opposite direction in this state. This is a point estimate from 68 trading days.",
          "sector_link_explainer": "Modest sector link. A 1% sector move has lined up with about a 0.44% stock move in the same direction in this state. This is a point estimate from 68 trading days.",
          "stock_persistence_display": "-0.77",
          "point_estimate_note": "Point estimate only because the current state has 68 trading days.",
          "history_limited_note": "Read is based on 68 trading days versus the 252-day target."
        },
        "current_summary": {
          "regime_label": "Low Volatility",
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "driver_share_pct": 38.9,
          "driver_share_display": "38.9%",
          "confidence_label": "High, limited history",
          "confidence_pct": 100.0,
          "display_confidence_pct": null,
          "confidence_note": "Based on 68 trading days relative to the 252-day target.",
          "history_days": 68,
          "history_limited": true,
          "volatility_label": "Low Volatility",
          "lead_signal_text": "No stable lead signal.",
          "state_term": "state",
          "stay_probability": 0.875,
          "effective_days": 33.0,
          "persistence_note": "This state looks more persistent, with a typical run length of about 6.6 days.",
          "expected_duration_days": 6.6
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
          "share_market": 0.47931948471963903,
          "share_sector": 0.2984396411024004,
          "share_company": 0.2222408741779605,
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
          "share_sector": 0.16951692775830024,
          "share_company": 0.5656898926629685,
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
          "share_market": 0.22982068067655398,
          "share_sector": 0.23225785396311108,
          "share_company": 0.537921465360335,
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
          "share_market": 0.34425966677405034,
          "share_sector": 0.1354926510167792,
          "share_company": 0.5202476822091704,
          "share_market_display": "34.4%",
          "share_sector_display": "13.5%",
          "share_company_display": "52.0%",
          "dominant_share_display": "52.0%"
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
          0.5,
          0.5
        ],
        "current_regime": 0,
        "regimes": [
          {
            "id": 0,
            "label": "Low Volatility",
            "pct_time": 0.5,
            "expected_duration_days": 6.6,
            "current_probability": 1.0,
            "n_days_effective": 33.0,
            "volatility": {
              "median": 0.028679300304698584,
              "low": 0.028679300304698584,
              "high": 0.028679300304698584
            },
            "volatility_label": "Low Volatility"
          },
          {
            "id": 1,
            "label": "High Volatility",
            "pct_time": 0.5,
            "expected_duration_days": 8.25,
            "current_probability": 0.0,
            "n_days_effective": 33.0,
            "volatility": {
              "median": 0.04292097877718646,
              "low": 0.04292097877718646,
              "high": 0.04292097877718646
            },
            "volatility_label": "High Volatility"
          }
        ],
        "transitions": [
          [
            0.875,
            0.125
          ],
          [
            0.12121212121212122,
            0.8787878787878788
          ]
        ]
      }
    },
    "order_book": {
      "bids": [
        {
          "level": 1,
          "price": 0.24,
          "quantity": 209100.0,
          "value": 50184.0
        },
        {
          "level": 2,
          "price": 0.235,
          "quantity": 883300.0,
          "value": 207575.5
        },
        {
          "level": 3,
          "price": 0.23,
          "quantity": 195100.0,
          "value": 44873.0
        },
        {
          "level": 4,
          "price": 0.225,
          "quantity": 223200.0,
          "value": 50220.0
        },
        {
          "level": 5,
          "price": 0.22,
          "quantity": 105400.0,
          "value": 23188.0
        },
        {
          "level": 6,
          "price": 0.215,
          "quantity": 525800.0,
          "value": 113047.0
        },
        {
          "level": 7,
          "price": 0.21,
          "quantity": 50000.0,
          "value": 10500.0
        },
        {
          "level": 8,
          "price": 0.2,
          "quantity": 30000.0,
          "value": 6000.0
        },
        {
          "level": 9,
          "price": 0.179,
          "quantity": 3100.0,
          "value": 554.9
        }
      ],
      "asks": [
        {
          "level": 1,
          "price": 0.245,
          "quantity": 72500.0,
          "value": 17762.5
        },
        {
          "level": 2,
          "price": 0.25,
          "quantity": 817000.0,
          "value": 204250.0
        },
        {
          "level": 3,
          "price": 0.255,
          "quantity": 85800.0,
          "value": 21879.0
        },
        {
          "level": 4,
          "price": 0.26,
          "quantity": 231200.0,
          "value": 60112.0
        },
        {
          "level": 5,
          "price": 0.265,
          "quantity": 431000.0,
          "value": 114215.0
        },
        {
          "level": 6,
          "price": 0.27,
          "quantity": 333000.0,
          "value": 89910.0
        },
        {
          "level": 7,
          "price": 0.275,
          "quantity": 240000.0,
          "value": 66000.0
        },
        {
          "level": 8,
          "price": 0.28,
          "quantity": 180000.0,
          "value": 50400.00000000001
        },
        {
          "level": 9,
          "price": 0.285,
          "quantity": 324000.0,
          "value": 92339.99999999999
        },
        {
          "level": 10,
          "price": 0.29,
          "quantity": 330000.0,
          "value": 95700.0
        },
        {
          "level": 11,
          "price": 0.295,
          "quantity": 167200.0,
          "value": 49324.0
        },
        {
          "level": 12,
          "price": 0.3,
          "quantity": 130000.0,
          "value": 39000.0
        },
        {
          "level": 13,
          "price": 0.305,
          "quantity": 382000.0,
          "value": 116510.0
        },
        {
          "level": 14,
          "price": 0.31,
          "quantity": 10000.0,
          "value": 3100.0
        },
        {
          "level": 15,
          "price": 0.345,
          "quantity": 2000.0,
          "value": 690.0
        },
        {
          "level": 16,
          "price": 0.35,
          "quantity": 86000.0,
          "value": 30099.999999999996
        },
        {
          "level": 17,
          "price": 0.395,
          "quantity": 20000.0,
          "value": 7900.0
        }
      ]
    },
    "execution_dynamic": {
      "snapshot": {
        "valid": true,
        "snapshot_time": "2026-05-05 08:59:51.035200000",
        "snapshot_basis": "last_continuous_session_snapshot",
        "snapshot_label": "final continuous-session displayed book before close",
        "snapshot_note": "Final continuous-session displayed book before close",
        "snapshot_mic": "XSES",
        "mid_price": 0.2425,
        "spread_pct": 0.020618556701030948,
        "spread_ticks": 1.0,
        "tick_size": 0.005,
        "displayed_levels_per_side": 100,
        "bid_depth_notional_displayed": 506142.4,
        "ask_depth_notional_displayed": 1059192.5,
        "bid_depth_notional_top10": 506142.4,
        "ask_depth_notional_top10": 1059192.5,
        "bid_ask_depth_ratio": 0.4779
      },
      "historical_trade_scenarios": {
        "valid": true,
        "requested_lookback_calendar_days": 365,
        "lookback_calendar_days": 365,
        "effective_calendar_days": 104,
        "history_limited": true,
        "trade_days_used": 70,
        "n_trades_used": 11569,
        "first_trade_date": "2026-01-22",
        "last_trade_date": "2026-05-05",
        "window_label": "Jan 22, 2026 to May 5, 2026",
        "window_short_label": "Jan 22-May 5",
        "trade_days_label": "70 trading days",
        "trade_count_label": "11,569 trades",
        "window_detail_label": "70 trading days • 11,569 trades",
        "history_note": "Trade-size percentiles use available history from Jan 22, 2026 to May 5, 2026 (70 trading days • 11,569 trades), not a full year.",
        "scenarios": [
          {
            "key": "p90",
            "label": "90th percentile trade",
            "quantile": 0.9,
            "trade_notional": 10129.8,
            "impact_pct": -0.010308999999999999,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 2.0,
            "pct_of_adv": 5.52
          },
          {
            "key": "p95",
            "label": "95th percentile trade",
            "quantile": 0.95,
            "trade_notional": 13954.8,
            "impact_pct": -0.010308999999999999,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 2.76,
            "pct_of_adv": 7.6
          },
          {
            "key": "p99_99",
            "label": "99.99th percentile trade",
            "quantile": 0.9999,
            "trade_notional": 167688.38,
            "impact_pct": -0.024848,
            "filled_pct": 100.0,
            "levels_consumed": 2,
            "pct_of_bid_depth": 33.13,
            "pct_of_adv": 91.36
          }
        ]
      },
      "l3_sell_order_scenarios": {
        "valid": true,
        "trade_date": "2026-05-05",
        "selection_method": "largest_observed_ask_orders_during_day",
        "orders": [
          {
            "rank": 1,
            "order_id": "8141760458381766656",
            "timestamp": "2026-05-04 22:59:01.443500000",
            "local_timestamp": "2026-05-05 06:59:01",
            "posted_price": 0.25,
            "size_shares": 532800.0,
            "notional": 133200.0,
            "impact_pct": -0.023260999999999997,
            "filled_pct": 100.0,
            "levels_consumed": 2,
            "pct_of_bid_depth": 26.32,
            "price_vs_mid_pct": 3.093,
            "executed_event_count": 0,
            "event_count": 1
          },
          {
            "rank": 2,
            "order_id": "8142764862252194816",
            "timestamp": "2026-05-04 22:59:01.443500000",
            "local_timestamp": "2026-05-05 06:59:01",
            "posted_price": 0.305,
            "size_shares": 200000.0,
            "notional": 61000.0,
            "impact_pct": -0.014029,
            "filled_pct": 100.0,
            "levels_consumed": 2,
            "pct_of_bid_depth": 12.05,
            "price_vs_mid_pct": 25.773,
            "executed_event_count": 0,
            "event_count": 1
          },
          {
            "rank": 3,
            "order_id": "8139994092951315456",
            "timestamp": "2026-05-04 22:59:01.443500000",
            "local_timestamp": "2026-05-05 06:59:01",
            "posted_price": 0.29,
            "size_shares": 200000.0,
            "notional": 58000.0,
            "impact_pct": -0.013139000000000001,
            "filled_pct": 100.0,
            "levels_consumed": 2,
            "pct_of_bid_depth": 11.46,
            "price_vs_mid_pct": 19.588,
            "executed_event_count": 0,
            "event_count": 1
          }
        ]
      },
      "intraday_liquidity_profile": {
        "valid": true,
        "trade_date": "2026-05-05",
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
            "spread_pct": 0.020618556701030948,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 444560.9,
            "ask_depth_notional": 1104842.0,
            "mid_price": 0.2425
          },
          {
            "bucket": "09:30",
            "spread_pct": 0.020618556701030948,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 458960.9,
            "ask_depth_notional": 1117592.0,
            "mid_price": 0.2425
          },
          {
            "bucket": "10:00",
            "spread_pct": 0.020618556701030948,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 458960.9,
            "ask_depth_notional": 1120042.0,
            "mid_price": 0.2425
          },
          {
            "bucket": "10:30",
            "spread_pct": 0.020618556701030948,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 490310.9,
            "ask_depth_notional": 1107816.5,
            "mid_price": 0.2425
          },
          {
            "bucket": "11:00",
            "spread_pct": 0.02020202020202022,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 501714.9,
            "ask_depth_notional": 1052486.0,
            "mid_price": 0.2475
          },
          {
            "bucket": "11:30",
            "spread_pct": 0.020618556701030948,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 516208.9,
            "ask_depth_notional": 1050071.0,
            "mid_price": 0.2425
          },
          {
            "bucket": "13:00",
            "spread_pct": 0.020618556701030948,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 508836.9,
            "ask_depth_notional": 1061938.5,
            "mid_price": 0.2425
          },
          {
            "bucket": "13:30",
            "spread_pct": 0.020618556701030948,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 508740.9,
            "ask_depth_notional": 1061913.5,
            "mid_price": 0.2425
          },
          {
            "bucket": "14:00",
            "spread_pct": 0.020618556701030948,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 521967.4,
            "ask_depth_notional": 1075663.5,
            "mid_price": 0.2425
          },
          {
            "bucket": "14:30",
            "spread_pct": 0.020618556701030948,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 525171.4,
            "ask_depth_notional": 1075638.5,
            "mid_price": 0.2425
          },
          {
            "bucket": "15:00",
            "spread_pct": 0.020618556701030948,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 525075.4,
            "ask_depth_notional": 1075388.5,
            "mid_price": 0.2425
          },
          {
            "bucket": "15:30",
            "spread_pct": 0.020618556701030948,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 524979.4,
            "ask_depth_notional": 1075388.5,
            "mid_price": 0.2425
          },
          {
            "bucket": "16:00",
            "spread_pct": 0.020618556701030948,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 524883.4,
            "ask_depth_notional": 1075413.5,
            "mid_price": 0.2425
          },
          {
            "bucket": "16:30",
            "spread_pct": 0.020618556701030948,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 506142.4,
            "ask_depth_notional": 1059192.5,
            "mid_price": 0.2425
          }
        ],
        "summary": {
          "median_spread_pct": 0.020618556701030948,
          "median_spread_ticks": 1.0000000000000009,
          "median_bid_depth_notional": 508788.9,
          "median_ask_depth_notional": 1075401.0,
          "tightest_bucket": "11:00",
          "widest_bucket": "09:00",
          "deepest_bid_bucket": "14:30",
          "thinnest_bid_bucket": "09:00"
        }
      }
    },
    "peer_capacity": {
      "bx_ticket_pct_adv_50k": 27.2,
      "peers": [
        {
          "ticker": "ITS",
          "pct": 94.2
        },
        {
          "ticker": "42F",
          "pct": 365.5
        },
        {
          "ticker": "J03",
          "pct": 547.3
        },
        {
          "ticker": "LVR",
          "pct": 4851.8
        },
        {
          "ticker": "U77",
          "pct": 22137.9
        },
        {
          "ticker": "532",
          "pct": 80000.0
        },
        {
          "ticker": "KUX",
          "pct": null
        },
        {
          "ticker": "NXR",
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
          "n_trades": 34,
          "n_runs": 0,
          "n_trade_days": 1,
          "first_trade_date": "2026-05-05",
          "last_trade_date": "2026-05-05",
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
            "retail_pct": 0.9411764705882353,
            "mixed_pct": 0.058823529411764705,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.5804527110019302,
            "mixed_qty_pct": 0.4195472889980698,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.5805405834720232,
            "mixed_notional_pct": 0.41945941652797686,
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
              "retail": 32,
              "mixed": 2,
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
            "avg": 4073.485294117647,
            "median": 421.25
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
              "retail_pct": 0.9411764705882353,
              "mixed_pct": 0.058823529411764705,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.5804527110019302,
              "mixed_qty_pct": 0.4195472889980698,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.5805405834720232,
              "mixed_notional_pct": 0.41945941652797686,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 4073.485294117647,
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
              "avg_trade_size": 477.6,
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
              "avg_trade_size": 3735.0,
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
              "retail_pct": 0.9230769230769231,
              "mixed_pct": 0.07692307692307693,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.63062306028929,
              "mixed_qty_pct": 0.36937693971071,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.6306530622533546,
              "mixed_notional_pct": 0.36934693774664534,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 3845.0569230769233,
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
              "retail_pct": 0.8423423423423423,
              "mixed_pct": 0.14414414414414414,
              "instit_pct": 0.013513513513513514,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.18779117566456563,
              "mixed_qty_pct": 0.6060564538229652,
              "instit_qty_pct": 0.20615237051246918,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.18739607452181947,
              "mixed_notional_pct": 0.6054746419281355,
              "instit_notional_pct": 0.207129283550045,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 6619.380630630631,
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
              "retail_pct": 0.8148148148148148,
              "mixed_pct": 0.18518518518518517,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.32699034559955226,
              "mixed_qty_pct": 0.6730096544004477,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.32699034559955226,
              "mixed_notional_pct": 0.6730096544004477,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 8735.222222222223,
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
          "n_trades": 104,
          "n_runs": 0,
          "n_trade_days": 5,
          "first_trade_date": "2026-04-28",
          "last_trade_date": "2026-05-05",
          "period_days": 7,
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
            "retail_pct": 0.8846153846153846,
            "mixed_pct": 0.11538461538461539,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.453646923021427,
            "mixed_qty_pct": 0.5463530769785729,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.45400828606450994,
            "mixed_notional_pct": 0.5459917139354901,
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
              "retail": 92,
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
            "avg": 6400.923076923077,
            "median": 2425.0
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
              "retail_pct": 0.8846153846153846,
              "mixed_pct": 0.11538461538461539,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.453646923021427,
              "mixed_qty_pct": 0.5463530769785729,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.45400828606450994,
              "mixed_notional_pct": 0.5459917139354901,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 6400.923076923077,
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
              "avg_trade_size": 1451.0,
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
              "avg_trade_size": 1786.8071428571425,
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
              "avg_trade_size": 73.448125,
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
              "avg_trade_size": 2687.7,
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
              "retail_pct": 0.9142857142857143,
              "mixed_pct": 0.08571428571428572,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.5660915922909402,
              "mixed_qty_pct": 0.4339084077090598,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.5708576849106208,
              "mixed_notional_pct": 0.4291423150893792,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 5319.152857142857,
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
              "retail_pct": 0.9023186975826344,
              "mixed_pct": 0.08830784410458806,
              "instit_pct": 0.009373458312777503,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.26916748600437423,
              "mixed_qty_pct": 0.5172863535124506,
              "instit_qty_pct": 0.21354616048317515,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.2686234960479559,
              "mixed_notional_pct": 0.5177759392059059,
              "instit_notional_pct": 0.2136005647461382,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 4875.5157868771585,
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
              "retail_pct": 0.8954802259887006,
              "mixed_pct": 0.09887005649717515,
              "instit_pct": 0.005649717514124294,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.5113553737703425,
              "mixed_qty_pct": 0.4045409743837574,
              "instit_qty_pct": 0.08410365184590006,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.5123717955042817,
              "mixed_notional_pct": 0.3990679200900684,
              "instit_notional_pct": 0.08856028440564981,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 5697.3607344632765,
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
          "n_trades": 925,
          "n_runs": 0,
          "n_trade_days": 21,
          "first_trade_date": "2026-04-06",
          "last_trade_date": "2026-05-05",
          "period_days": 29,
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
            "retail_pct": 0.8497297297297297,
            "mixed_pct": 0.1318918918918919,
            "instit_pct": 0.018378378378378378,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.2760908965048519,
            "mixed_qty_pct": 0.48501315242973836,
            "instit_qty_pct": 0.23889595106540973,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.27529056106917127,
            "mixed_notional_pct": 0.48293904840719404,
            "instit_notional_pct": 0.2417703905236347,
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
              "retail": 786,
              "mixed": 122,
              "institutional": 17,
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
            "avg": 8279.694054054055,
            "median": 1776.0
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
              "retail_pct": 0.8497297297297297,
              "mixed_pct": 0.1318918918918919,
              "instit_pct": 0.018378378378378378,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.2760908965048519,
              "mixed_qty_pct": 0.48501315242973836,
              "instit_qty_pct": 0.23889595106540973,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.27529056106917127,
              "mixed_notional_pct": 0.48293904840719404,
              "instit_notional_pct": 0.2417703905236347,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 8279.694054054055,
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
              "avg_trade_size": 389.95976095617533,
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
              "avg_trade_size": 510.14,
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
              "avg_trade_size": 2478.190476190476,
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
              "retail_pct": 0.9883720930232558,
              "mixed_pct": 0.011627906976744186,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.8956158663883089,
              "mixed_qty_pct": 0.10438413361169102,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.8958550847054033,
              "mixed_notional_pct": 0.10414491529459666,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 2221.859302325581,
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
              "retail_pct": 0.9306157849089333,
              "mixed_pct": 0.06938421509106678,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.6666594678736926,
              "mixed_qty_pct": 0.3333405321263075,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.6636190336667578,
              "mixed_notional_pct": 0.3363809663332423,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 4698.26556808326,
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
              "retail_pct": 0.9199013157894737,
              "mixed_pct": 0.07203947368421053,
              "instit_pct": 0.00805921052631579,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.3410813222918567,
              "mixed_qty_pct": 0.4721179021194422,
              "instit_qty_pct": 0.18680077558870103,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.3426703941751805,
              "mixed_notional_pct": 0.4705702736170003,
              "instit_notional_pct": 0.18675933220781915,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 4249.081332236842,
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
              "retail_pct": 0.8717948717948718,
              "mixed_pct": 0.1282051282051282,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.4810126582278481,
              "mixed_qty_pct": 0.5189873417721519,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.49646855858840383,
              "mixed_notional_pct": 0.5035314414115961,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 5405.047008547009,
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
              "retail_pct": 0.8532863849765259,
              "mixed_pct": 0.13497652582159625,
              "instit_pct": 0.011737089201877934,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.3581548910648923,
              "mixed_qty_pct": 0.4495103545048593,
              "instit_qty_pct": 0.1923347544302484,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.3643152638764937,
              "mixed_notional_pct": 0.44795851483317994,
              "instit_notional_pct": 0.18772622129032634,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 7329.86690140845,
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
          "n_trades": 4080,
          "n_runs": 0,
          "n_trade_days": 63,
          "first_trade_date": "2026-02-02",
          "last_trade_date": "2026-05-05",
          "period_days": 92,
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
            "retail_pct": 0.8973039215686275,
            "mixed_pct": 0.09509803921568627,
            "instit_pct": 0.007598039215686274,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.39354567931847123,
            "mixed_qty_pct": 0.47295540856260476,
            "instit_qty_pct": 0.13349891211892406,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.3922123889101535,
            "mixed_notional_pct": 0.47335306435936886,
            "instit_notional_pct": 0.1344345467304777,
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
              "retail": 3661,
              "mixed": 388,
              "institutional": 31,
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
            "avg": 5810.123897058824,
            "median": 1275.0
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
              "retail_pct": 0.8973039215686275,
              "mixed_pct": 0.09509803921568627,
              "instit_pct": 0.007598039215686274,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.39354567931847123,
              "mixed_qty_pct": 0.47295540856260476,
              "instit_qty_pct": 0.13349891211892406,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.3922123889101535,
              "mixed_notional_pct": 0.47335306435936886,
              "instit_notional_pct": 0.1344345467304777,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 5810.123897058824,
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
              "avg_trade_size": 403.6415492957746,
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
              "avg_trade_size": 452.0941176470588,
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
              "retail_pct": 0.9890909090909091,
              "mixed_pct": 0.01090909090909091,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.8356381446269087,
              "mixed_qty_pct": 0.16436185537309134,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.8278499972443245,
              "mixed_notional_pct": 0.1721500027556755,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 1322.8896363636366,
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
              "retail_pct": 0.9493670886075949,
              "mixed_pct": 0.0379746835443038,
              "instit_pct": 0.012658227848101266,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.2690087013092624,
              "mixed_qty_pct": 0.08042612019191672,
              "instit_qty_pct": 0.6505651784988209,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.2694682789789754,
              "mixed_notional_pct": 0.08566489364599207,
              "instit_notional_pct": 0.6448668273750325,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 11620.493670886075,
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
              "retail_pct": 0.9377372817008353,
              "mixed_pct": 0.06226271829916477,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.6893474195896265,
              "mixed_qty_pct": 0.3106525804103735,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.6791134555494633,
              "mixed_notional_pct": 0.3208865444505367,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 4379.4893697798025,
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
              "retail_pct": 0.9360189573459715,
              "mixed_pct": 0.06398104265402843,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.6061487536987813,
              "mixed_qty_pct": 0.3938512463012187,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.6124582532525078,
              "mixed_notional_pct": 0.3875417467474922,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 3969.5035545023698,
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
              "retail_pct": 0.9110761485210824,
              "mixed_pct": 0.0802391441157961,
              "instit_pct": 0.00868470736312146,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.3438696816174275,
              "mixed_qty_pct": 0.4640503271843287,
              "instit_qty_pct": 0.19207999119824384,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.3467614728949125,
              "mixed_notional_pct": 0.4621963935091188,
              "instit_notional_pct": 0.19104213359596872,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 4803.132724984267,
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
              "retail_pct": 0.9012032932235592,
              "mixed_pct": 0.09246358454718176,
              "instit_pct": 0.006333122229259025,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.46471611746125224,
              "mixed_qty_pct": 0.3998708801720758,
              "instit_qty_pct": 0.13541300236667198,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.45634940304304805,
              "mixed_notional_pct": 0.4062093942823304,
              "instit_notional_pct": 0.13744120267462148,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 5402.086637112096,
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
      "n_trades": 4080,
      "n_runs": 0,
      "n_trade_days": 63,
      "first_trade_date": "2026-02-02",
      "last_trade_date": "2026-05-05",
      "period_days": 92,
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
        "retail_pct": 0.8973039215686275,
        "mixed_pct": 0.09509803921568627,
        "instit_pct": 0.007598039215686274,
        "ambiguous_pct": null,
        "unobservable_pct": null,
        "unclear_pct": null,
        "retail_qty_pct": null,
        "mixed_qty_pct": null,
        "instit_qty_pct": null,
        "ambiguous_qty_pct": null,
        "unobservable_qty_pct": null,
        "unclear_qty_pct": null,
        "retail_notional_pct": 0.3922123889101535,
        "mixed_notional_pct": 0.47335306435936886,
        "instit_notional_pct": 0.1344345467304777,
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
        "avg": 5810.123897058824,
        "median": 1275.0
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
            "n_trades": 23,
            "n_runs": 0,
            "retail_pct": 0.8695652173913043,
            "mixed_pct": 0.13043478260869565,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "avg_trade_size": 7030.065217391304,
            "avg_run_notional": null,
            "retail_qty_pct": 0.43886171631836374,
            "mixed_qty_pct": 0.5611382836816363,
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
            "total_quantity": 674700.0
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
          "retail_pct": 0.8973039215686275,
          "mixed_pct": 0.09509803921568627,
          "instit_pct": 0.007598039215686274,
          "ambiguous_pct": null,
          "unobservable_pct": null,
          "unclear_pct": null,
          "retail_qty_pct": 0.39354567931847123,
          "mixed_qty_pct": 0.47295540856260476,
          "instit_qty_pct": 0.13349891211892406,
          "ambiguous_qty_pct": null,
          "unobservable_qty_pct": null,
          "unclear_qty_pct": null,
          "retail_notional_pct": 0.3922123889101535,
          "mixed_notional_pct": 0.47335306435936886,
          "instit_notional_pct": 0.1344345467304777,
          "ambiguous_notional_pct": null,
          "unobservable_notional_pct": null,
          "unclear_notional_pct": null,
          "run_retail_pct": null,
          "run_mixed_pct": null,
          "run_instit_pct": null,
          "run_unclear_pct": null,
          "avg_trade_size": 5810.123897058824,
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
          "avg_trade_size": 403.6415492957746,
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
          "avg_trade_size": 452.0941176470588,
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
          "retail_pct": 0.9890909090909091,
          "mixed_pct": 0.01090909090909091,
          "instit_pct": 0.0,
          "ambiguous_pct": null,
          "unobservable_pct": null,
          "unclear_pct": null,
          "retail_qty_pct": 0.8356381446269087,
          "mixed_qty_pct": 0.16436185537309134,
          "instit_qty_pct": 0.0,
          "ambiguous_qty_pct": null,
          "unobservable_qty_pct": null,
          "unclear_qty_pct": null,
          "retail_notional_pct": 0.8278499972443245,
          "mixed_notional_pct": 0.1721500027556755,
          "instit_notional_pct": 0.0,
          "ambiguous_notional_pct": null,
          "unobservable_notional_pct": null,
          "unclear_notional_pct": null,
          "run_retail_pct": null,
          "run_mixed_pct": null,
          "run_instit_pct": null,
          "run_unclear_pct": null,
          "avg_trade_size": 1322.8896363636366,
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
          "retail_pct": 0.9493670886075949,
          "mixed_pct": 0.0379746835443038,
          "instit_pct": 0.012658227848101266,
          "ambiguous_pct": null,
          "unobservable_pct": null,
          "unclear_pct": null,
          "retail_qty_pct": 0.2690087013092624,
          "mixed_qty_pct": 0.08042612019191672,
          "instit_qty_pct": 0.6505651784988209,
          "ambiguous_qty_pct": null,
          "unobservable_qty_pct": null,
          "unclear_qty_pct": null,
          "retail_notional_pct": 0.2694682789789754,
          "mixed_notional_pct": 0.08566489364599207,
          "instit_notional_pct": 0.6448668273750325,
          "ambiguous_notional_pct": null,
          "unobservable_notional_pct": null,
          "unclear_notional_pct": null,
          "run_retail_pct": null,
          "run_mixed_pct": null,
          "run_instit_pct": null,
          "run_unclear_pct": null,
          "avg_trade_size": 11620.493670886075,
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
          "retail_pct": 0.9377372817008353,
          "mixed_pct": 0.06226271829916477,
          "instit_pct": 0.0,
          "ambiguous_pct": null,
          "unobservable_pct": null,
          "unclear_pct": null,
          "retail_qty_pct": 0.6893474195896265,
          "mixed_qty_pct": 0.3106525804103735,
          "instit_qty_pct": 0.0,
          "ambiguous_qty_pct": null,
          "unobservable_qty_pct": null,
          "unclear_qty_pct": null,
          "retail_notional_pct": 0.6791134555494633,
          "mixed_notional_pct": 0.3208865444505367,
          "instit_notional_pct": 0.0,
          "ambiguous_notional_pct": null,
          "unobservable_notional_pct": null,
          "unclear_notional_pct": null,
          "run_retail_pct": null,
          "run_mixed_pct": null,
          "run_instit_pct": null,
          "run_unclear_pct": null,
          "avg_trade_size": 4379.4893697798025,
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
          "retail_pct": 0.9360189573459715,
          "mixed_pct": 0.06398104265402843,
          "instit_pct": 0.0,
          "ambiguous_pct": null,
          "unobservable_pct": null,
          "unclear_pct": null,
          "retail_qty_pct": 0.6061487536987813,
          "mixed_qty_pct": 0.3938512463012187,
          "instit_qty_pct": 0.0,
          "ambiguous_qty_pct": null,
          "unobservable_qty_pct": null,
          "unclear_qty_pct": null,
          "retail_notional_pct": 0.6124582532525078,
          "mixed_notional_pct": 0.3875417467474922,
          "instit_notional_pct": 0.0,
          "ambiguous_notional_pct": null,
          "unobservable_notional_pct": null,
          "unclear_notional_pct": null,
          "run_retail_pct": null,
          "run_mixed_pct": null,
          "run_instit_pct": null,
          "run_unclear_pct": null,
          "avg_trade_size": 3969.5035545023698,
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
          "retail_pct": 0.9110761485210824,
          "mixed_pct": 0.0802391441157961,
          "instit_pct": 0.00868470736312146,
          "ambiguous_pct": null,
          "unobservable_pct": null,
          "unclear_pct": null,
          "retail_qty_pct": 0.3438696816174275,
          "mixed_qty_pct": 0.4640503271843287,
          "instit_qty_pct": 0.19207999119824384,
          "ambiguous_qty_pct": null,
          "unobservable_qty_pct": null,
          "unclear_qty_pct": null,
          "retail_notional_pct": 0.3467614728949125,
          "mixed_notional_pct": 0.4621963935091188,
          "instit_notional_pct": 0.19104213359596872,
          "ambiguous_notional_pct": null,
          "unobservable_notional_pct": null,
          "unclear_notional_pct": null,
          "run_retail_pct": null,
          "run_mixed_pct": null,
          "run_instit_pct": null,
          "run_unclear_pct": null,
          "avg_trade_size": 4803.132724984267,
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
          "retail_pct": 0.9012032932235592,
          "mixed_pct": 0.09246358454718176,
          "instit_pct": 0.006333122229259025,
          "ambiguous_pct": null,
          "unobservable_pct": null,
          "unclear_pct": null,
          "retail_qty_pct": 0.46471611746125224,
          "mixed_qty_pct": 0.3998708801720758,
          "instit_qty_pct": 0.13541300236667198,
          "ambiguous_qty_pct": null,
          "unobservable_qty_pct": null,
          "unclear_qty_pct": null,
          "retail_notional_pct": 0.45634940304304805,
          "mixed_notional_pct": 0.4062093942823304,
          "instit_notional_pct": 0.13744120267462148,
          "ambiguous_notional_pct": null,
          "unobservable_notional_pct": null,
          "unclear_notional_pct": null,
          "run_retail_pct": null,
          "run_mixed_pct": null,
          "run_instit_pct": null,
          "run_unclear_pct": null,
          "avg_trade_size": 5402.086637112096,
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
            "retail_pct": 0.9411764705882353,
            "mixed_pct": 0.058823529411764705,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.5804527110019302,
            "mixed_qty_pct": 0.4195472889980698,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.5805405834720232,
            "mixed_notional_pct": 0.41945941652797686,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 4073.485294117647,
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
            "avg_trade_size": 477.6,
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
            "avg_trade_size": 3735.0,
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
            "retail_pct": 0.9230769230769231,
            "mixed_pct": 0.07692307692307693,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.63062306028929,
            "mixed_qty_pct": 0.36937693971071,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.6306530622533546,
            "mixed_notional_pct": 0.36934693774664534,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 3845.0569230769233,
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
            "retail_pct": 0.8423423423423423,
            "mixed_pct": 0.14414414414414414,
            "instit_pct": 0.013513513513513514,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.18779117566456563,
            "mixed_qty_pct": 0.6060564538229652,
            "instit_qty_pct": 0.20615237051246918,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.18739607452181947,
            "mixed_notional_pct": 0.6054746419281355,
            "instit_notional_pct": 0.207129283550045,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 6619.380630630631,
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
            "retail_pct": 0.8148148148148148,
            "mixed_pct": 0.18518518518518517,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.32699034559955226,
            "mixed_qty_pct": 0.6730096544004477,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.32699034559955226,
            "mixed_notional_pct": 0.6730096544004477,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 8735.222222222223,
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
            "retail_pct": 0.8846153846153846,
            "mixed_pct": 0.11538461538461539,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.453646923021427,
            "mixed_qty_pct": 0.5463530769785729,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.45400828606450994,
            "mixed_notional_pct": 0.5459917139354901,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 6400.923076923077,
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
            "avg_trade_size": 1451.0,
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
            "avg_trade_size": 1786.8071428571425,
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
            "avg_trade_size": 73.448125,
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
            "avg_trade_size": 2687.7,
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
            "retail_pct": 0.9142857142857143,
            "mixed_pct": 0.08571428571428572,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.5660915922909402,
            "mixed_qty_pct": 0.4339084077090598,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.5708576849106208,
            "mixed_notional_pct": 0.4291423150893792,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 5319.152857142857,
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
            "retail_pct": 0.9023186975826344,
            "mixed_pct": 0.08830784410458806,
            "instit_pct": 0.009373458312777503,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.26916748600437423,
            "mixed_qty_pct": 0.5172863535124506,
            "instit_qty_pct": 0.21354616048317515,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.2686234960479559,
            "mixed_notional_pct": 0.5177759392059059,
            "instit_notional_pct": 0.2136005647461382,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 4875.5157868771585,
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
            "retail_pct": 0.8954802259887006,
            "mixed_pct": 0.09887005649717515,
            "instit_pct": 0.005649717514124294,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.5113553737703425,
            "mixed_qty_pct": 0.4045409743837574,
            "instit_qty_pct": 0.08410365184590006,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.5123717955042817,
            "mixed_notional_pct": 0.3990679200900684,
            "instit_notional_pct": 0.08856028440564981,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 5697.3607344632765,
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
            "retail_pct": 0.8497297297297297,
            "mixed_pct": 0.1318918918918919,
            "instit_pct": 0.018378378378378378,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.2760908965048519,
            "mixed_qty_pct": 0.48501315242973836,
            "instit_qty_pct": 0.23889595106540973,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.27529056106917127,
            "mixed_notional_pct": 0.48293904840719404,
            "instit_notional_pct": 0.2417703905236347,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 8279.694054054055,
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
            "avg_trade_size": 389.95976095617533,
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
            "avg_trade_size": 510.14,
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
            "avg_trade_size": 2478.190476190476,
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
            "retail_pct": 0.9883720930232558,
            "mixed_pct": 0.011627906976744186,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.8956158663883089,
            "mixed_qty_pct": 0.10438413361169102,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.8958550847054033,
            "mixed_notional_pct": 0.10414491529459666,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 2221.859302325581,
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
            "retail_pct": 0.9306157849089333,
            "mixed_pct": 0.06938421509106678,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.6666594678736926,
            "mixed_qty_pct": 0.3333405321263075,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.6636190336667578,
            "mixed_notional_pct": 0.3363809663332423,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 4698.26556808326,
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
            "retail_pct": 0.9199013157894737,
            "mixed_pct": 0.07203947368421053,
            "instit_pct": 0.00805921052631579,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.3410813222918567,
            "mixed_qty_pct": 0.4721179021194422,
            "instit_qty_pct": 0.18680077558870103,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.3426703941751805,
            "mixed_notional_pct": 0.4705702736170003,
            "instit_notional_pct": 0.18675933220781915,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 4249.081332236842,
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
            "retail_pct": 0.8717948717948718,
            "mixed_pct": 0.1282051282051282,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.4810126582278481,
            "mixed_qty_pct": 0.5189873417721519,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.49646855858840383,
            "mixed_notional_pct": 0.5035314414115961,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 5405.047008547009,
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
            "retail_pct": 0.8532863849765259,
            "mixed_pct": 0.13497652582159625,
            "instit_pct": 0.011737089201877934,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.3581548910648923,
            "mixed_qty_pct": 0.4495103545048593,
            "instit_qty_pct": 0.1923347544302484,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.3643152638764937,
            "mixed_notional_pct": 0.44795851483317994,
            "instit_notional_pct": 0.18772622129032634,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 7329.86690140845,
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
            "retail_pct": 0.8973039215686275,
            "mixed_pct": 0.09509803921568627,
            "instit_pct": 0.007598039215686274,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.39354567931847123,
            "mixed_qty_pct": 0.47295540856260476,
            "instit_qty_pct": 0.13349891211892406,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.3922123889101535,
            "mixed_notional_pct": 0.47335306435936886,
            "instit_notional_pct": 0.1344345467304777,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 5810.123897058824,
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
            "avg_trade_size": 403.6415492957746,
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
            "avg_trade_size": 452.0941176470588,
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
            "retail_pct": 0.9890909090909091,
            "mixed_pct": 0.01090909090909091,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.8356381446269087,
            "mixed_qty_pct": 0.16436185537309134,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.8278499972443245,
            "mixed_notional_pct": 0.1721500027556755,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 1322.8896363636366,
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
            "retail_pct": 0.9493670886075949,
            "mixed_pct": 0.0379746835443038,
            "instit_pct": 0.012658227848101266,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.2690087013092624,
            "mixed_qty_pct": 0.08042612019191672,
            "instit_qty_pct": 0.6505651784988209,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.2694682789789754,
            "mixed_notional_pct": 0.08566489364599207,
            "instit_notional_pct": 0.6448668273750325,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 11620.493670886075,
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
            "retail_pct": 0.9377372817008353,
            "mixed_pct": 0.06226271829916477,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.6893474195896265,
            "mixed_qty_pct": 0.3106525804103735,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.6791134555494633,
            "mixed_notional_pct": 0.3208865444505367,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 4379.4893697798025,
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
            "retail_pct": 0.9360189573459715,
            "mixed_pct": 0.06398104265402843,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.6061487536987813,
            "mixed_qty_pct": 0.3938512463012187,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.6124582532525078,
            "mixed_notional_pct": 0.3875417467474922,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 3969.5035545023698,
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
            "retail_pct": 0.9110761485210824,
            "mixed_pct": 0.0802391441157961,
            "instit_pct": 0.00868470736312146,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.3438696816174275,
            "mixed_qty_pct": 0.4640503271843287,
            "instit_qty_pct": 0.19207999119824384,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.3467614728949125,
            "mixed_notional_pct": 0.4621963935091188,
            "instit_notional_pct": 0.19104213359596872,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 4803.132724984267,
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
            "retail_pct": 0.9012032932235592,
            "mixed_pct": 0.09246358454718176,
            "instit_pct": 0.006333122229259025,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.46471611746125224,
            "mixed_qty_pct": 0.3998708801720758,
            "instit_qty_pct": 0.13541300236667198,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.45634940304304805,
            "mixed_notional_pct": 0.4062093942823304,
            "instit_notional_pct": 0.13744120267462148,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 5402.086637112096,
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
      "total_trades": 6522,
      "price_moving_trades": 1299,
      "pct_price_moving": 19.917203311867524,
      "all_movers": {
        "count": 1299,
        "avg_size": 6881.129330254042,
        "median_size": 927.5,
        "retail_count": 1106,
        "mixed_count": 177,
        "institutional_count": 16,
        "ambiguous_count": 0,
        "unobservable_count": 0,
        "retail_pct": 85.14241724403388,
        "mixed_pct": 13.625866050808314,
        "instit_pct": 1.2317167051578137,
        "unclear_pct": null
      },
      "positive_movers": {
        "count": 651,
        "avg_size": 5025.980030721967,
        "median_size": 69.0,
        "retail_count": 578,
        "mixed_count": 68,
        "institutional_count": 5,
        "ambiguous_count": 0,
        "unobservable_count": 0,
        "retail_pct": 88.78648233486943,
        "mixed_pct": 10.44546850998464,
        "instit_pct": 0.7680491551459293,
        "unclear_pct": null
      },
      "negative_movers": {
        "count": 648,
        "avg_size": 8744.867283950618,
        "median_size": 2409.0,
        "retail_count": 528,
        "mixed_count": 109,
        "institutional_count": 11,
        "ambiguous_count": 0,
        "unobservable_count": 0,
        "retail_pct": 81.48148148148148,
        "mixed_pct": 16.820987654320987,
        "instit_pct": 1.6975308641975309,
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
            "avg_short_ratio": 0.006601431110296028,
            "max_short_ratio": 0.0924792304328815,
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
            "short_ratio": 0.0924792304328815,
            "short_vol": 380700,
            "total_vol": 4116600,
            "close": 0.22,
            "return": -0.06382978723404253
          },
          {
            "date": "2026-02-06",
            "short_ratio": 0.07566872528200433,
            "short_vol": 388400,
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
          "avg_short_ratio": 2.4900385074969807e-05,
          "max_short_ratio": 0.0071947622131088565,
          "is_target": false
        },
        {
          "ticker": "NXR",
          "avg_short_ratio": 8.68229479730181e-05,
          "max_short_ratio": 0.03229813664596273,
          "is_target": false
        },
        {
          "ticker": "J03",
          "avg_short_ratio": 0.00028587903247852676,
          "max_short_ratio": 0.039047524386953865,
          "is_target": false
        },
        {
          "ticker": "U77",
          "avg_short_ratio": 0.003517875296866319,
          "max_short_ratio": 1.0,
          "is_target": false
        },
        {
          "ticker": "ITS",
          "avg_short_ratio": 0.003709360535376762,
          "max_short_ratio": 0.1385606874328679,
          "is_target": false
        }
      ]
    },
    "intraday": {
      "session_periods": [
        "1D",
        "1W",
        "1M",
        "3M"
      ],
      "session": {
        "1D": {
          "opening": 0.0,
          "continuous": 0.9999200570259881,
          "closing": 0.0,
          "auctions": 7.994297401187152e-05,
          "other": 0.0
        },
        "1W": {
          "opening": 0.010529953204028374,
          "continuous": 0.8625140542640723,
          "closing": 0.03596946055694427,
          "auctions": 0.13748594573592768,
          "other": 0.0
        },
        "1M": {
          "opening": 0.01112404686337236,
          "continuous": 0.9586266127051,
          "closing": 0.019067484354626813,
          "auctions": 0.041373387294900026,
          "other": 0.0
        },
        "3M": {
          "opening": 0.011356597351417358,
          "continuous": 0.9584722264638352,
          "closing": 0.022387961007179314,
          "auctions": 0.04152777353616474,
          "other": 0.0
        }
      },
      "hhi": {
        "1D": 0.34332612031365084,
        "1W": 0.3012053217972355,
        "1M": 0.34649016158687185,
        "3M": 0.2762690035224578
      },
      "profile_buckets": [
        {
          "time": "08:30",
          "avg_share": 0.0101
        },
        {
          "time": "09:00",
          "avg_share": 0.1133
        },
        {
          "time": "09:30",
          "avg_share": 0.0983
        },
        {
          "time": "10:00",
          "avg_share": 0.0527
        },
        {
          "time": "10:30",
          "avg_share": 0.0606
        },
        {
          "time": "11:00",
          "avg_share": 0.0532
        },
        {
          "time": "11:30",
          "avg_share": 0.0754
        },
        {
          "time": "12:00",
          "avg_share": 0.0023
        },
        {
          "time": "12:30",
          "avg_share": 0.0027
        },
        {
          "time": "13:00",
          "avg_share": 0.1098
        },
        {
          "time": "13:30",
          "avg_share": 0.0591
        },
        {
          "time": "14:00",
          "avg_share": 0.0641
        },
        {
          "time": "14:30",
          "avg_share": 0.0566
        },
        {
          "time": "15:00",
          "avg_share": 0.0557
        },
        {
          "time": "15:30",
          "avg_share": 0.0454
        },
        {
          "time": "16:00",
          "avg_share": 0.0441
        },
        {
          "time": "16:30",
          "avg_share": 0.0643
        },
        {
          "time": "17:00",
          "avg_share": 0.0321
        }
      ],
      "peers_hhi_rows": [
        {
          "ticker": "TKU",
          "auctions_pct": 6.204854995089903,
          "hhi": 0.26383786918847885,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400",
            "you": true
          }
        },
        {
          "ticker": "KUX",
          "auctions_pct": 3.2801850519491573,
          "hhi": 0.6756866005597023,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "532",
          "auctions_pct": 9.697438787164355,
          "hhi": 0.7981217870698013,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "U77",
          "auctions_pct": 5.108567370467461,
          "hhi": 0.5548615430142754,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "J03",
          "auctions_pct": 4.472959247340698,
          "hhi": 0.5762609298049101,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "NXR",
          "auctions_pct": 3.78437977588696,
          "hhi": 0.7414043163986416,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "42F",
          "auctions_pct": 7.730471500005017,
          "hhi": 0.46636450767709525,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "LVR",
          "auctions_pct": 2.885461955591606,
          "hhi": 0.4664278634978508,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "ITS",
          "auctions_pct": 3.216856920392942,
          "hhi": 0.20668151529996837,
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
