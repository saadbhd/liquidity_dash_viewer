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
      "marketCap": 131155488.65,
      "sector": "Software - Application",
      "industry": "Technology"
    },
    {
      "ticker": "ITS",
      "name": "Info-Tech",
      "marketCap": 260580000.0,
      "sector": "Software - Application",
      "industry": "Technology"
    },
    {
      "ticker": "NXR",
      "name": "iWOW Tech",
      "marketCap": 101518238.39999999,
      "sector": "Software - Application",
      "industry": "Technology"
    },
    {
      "ticker": "LVR",
      "name": "17LIVE GROUP",
      "marketCap": 133453391.67,
      "sector": "Software - Application",
      "industry": "Technology"
    },
    {
      "ticker": "U77",
      "name": "Sarine Tech",
      "marketCap": 68102809.4,
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
      "ticker": "42F",
      "name": "Totm Tech",
      "marketCap": 40499746.632,
      "sector": "Software - Infrastructure",
      "industry": "Technology"
    },
    {
      "ticker": "S71",
      "name": "Sunright",
      "marketCap": 58946880.0,
      "sector": "Semiconductors",
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
    "asof_date": "2026-04-10",
    "industry": "Technology",
    "sector": "Software - Application",
    "market_cap_display": "131.2M",
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
          "score_pca": 68.45878136200717,
          "score_pca_percentile": 68.45878136200717,
          "rank_pca": 177,
          "total": 558,
          "adv_notional_sgd": 178802.0,
          "adv_volume_shares": 777400.0,
          "free_float_shares": null,
          "turnover_ratio": 0.0013632826337687547,
          "votes": 31.0,
          "trades": 31.0,
          "spread_pct": 0.021978021978021997,
          "spread_ticks": 1.0,
          "amihud": 0.0,
          "volatility": 0.209538403202542
        },
        "pca": {
          "valid": true,
          "window_days": 1,
          "variance_explained": 0.5156340447318739,
          "loadings": {
            "log_adv": 0.5552916250606093,
            "log_trades": 0.5101786608233787,
            "log_turnover": 0.5115656965805693,
            "neg_spread": 0.37335728090459336,
            "neg_amihud": 0.0614747445822995,
            "neg_vol": -0.16277186438115918
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
          "peer_median_adv": 22576.0,
          "peer_median_score_pca": 56.72043010752688,
          "peer_median_trades": 12.0,
          "peer_median_volatility": 0.14090109898373734,
          "peer_median_spread_pct": 0.027025628853305117,
          "peer_median_spread_ticks": 1.7915339702760085,
          "peer_median_amihud": 1.9194521115892338e-07,
          "peer_median_turnover_ratio": 0.0002884321356745376,
          "target_vs_peer": {
            "score_pca_delta": 11.74,
            "adv_delta_pct": 692.0,
            "trades_delta_pct": 158.33,
            "volatility_delta_pct": -48.71,
            "spread_pct_delta_pct": 18.68,
            "spread_ticks_delta_pct": -44.18,
            "amihud_delta_pct": 100.0,
            "turnover_ratio_delta_pct": 372.65
          }
        },
        "peer_liquidity": [
          {
            "ticker": "TKU",
            "score_pca": 68.45878136200717,
            "rank_pca": 177,
            "adv": 178802.0,
            "trades": 31.0,
            "volatility": 0.209538403202542,
            "spread_pct": 0.021978021978021997,
            "spread_ticks": 1.0,
            "amihud": 0.0,
            "turnover_ratio": 0.0013632826337687547,
            "is_target": true
          },
          {
            "ticker": "ITS",
            "score_pca": 77.06093189964157,
            "rank_pca": 129,
            "adv": 438946.0,
            "trades": 181.0,
            "volatility": 0.2818021979674747,
            "spread_pct": 0.010569554288516964,
            "spread_ticks": 1.0748129675810474,
            "amihud": 0.0,
            "turnover_ratio": 0.006436744837718791,
            "is_target": false
          },
          {
            "ticker": "NXR",
            "score_pca": 24.731182795698924,
            "rank_pca": 421,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.0,
            "spread_pct": 0.03307223672758924,
            "spread_ticks": 2.375,
            "amihud": null,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "LVR",
            "score_pca": 55.91397849462365,
            "rank_pca": 247,
            "adv": 18972.0,
            "trades": 15.0,
            "volatility": 0.3813954006810153,
            "spread_pct": 0.020979020979020997,
            "spread_ticks": 3.1578947368421053,
            "amihud": 3.4677141937703023e-07,
            "turnover_ratio": 0.00017144416692227172,
            "is_target": false
          },
          {
            "ticker": "U77",
            "score_pca": 57.52688172043011,
            "rank_pca": 238,
            "adv": 26180.0,
            "trades": 13.0,
            "volatility": 0.42801463080648666,
            "spread_pct": 0.02021886399166227,
            "spread_ticks": 2.0416666666666665,
            "amihud": 1.9194521115892338e-07,
            "turnover_ratio": 0.0004054201044268035,
            "is_target": false
          },
          {
            "ticker": "532",
            "score_pca": 1.881720430107527,
            "rank_pca": 547,
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
            "score_pca": 5.017921146953405,
            "rank_pca": 531,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.0,
            "spread_pct": 0.4135021097046413,
            "spread_ticks": 19.6,
            "amihud": null,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "42F",
            "score_pca": 61.82795698924731,
            "rank_pca": 214,
            "adv": 109441.8,
            "trades": 11.0,
            "volatility": 0.0,
            "spread_pct": 0.03964757709251105,
            "spread_ticks": 1.0588235294117647,
            "amihud": 0.0,
            "turnover_ratio": 0.004942900258616337,
            "is_target": false
          },
          {
            "ticker": "S71",
            "score_pca": 79.39068100358423,
            "rank_pca": 116,
            "adv": 303792.0,
            "trades": 125.0,
            "volatility": 0.8033055547697695,
            "spread_pct": 0.015968327284724523,
            "spread_ticks": 1.5414012738853504,
            "amihud": 2.5889979128238533e-07,
            "turnover_ratio": 0.013473613039068261,
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
              "mean": 0.26846603871638464,
              "median": 0.11350076166974352,
              "min": 0.0,
              "max": 9.372489788739538,
              "p5": 0.0,
              "p95": 0.8734938752361594,
              "count": 558
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 3390473.0841646064,
              "median": 13118.1,
              "min": 0.0,
              "max": 285980477.7,
              "p5": 0.0,
              "p95": 12177015.999999994,
              "count": 558
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.10584102191491025,
              "median": 0.02662823791350924,
              "min": 0.0002334722276610592,
              "max": 1.2394366197183098,
              "p5": 0.0032688853554951325,
              "p95": 0.49204799860440196,
              "count": 556
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.006637293205632565,
              "median": 0.00029500255013511134,
              "min": 0.0,
              "max": 0.8726341647053794,
              "p5": 0.0,
              "p95": 0.015879606635955352,
              "count": 551
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 0.0012315106462792579,
              "median": 2.0422595229209673e-08,
              "min": 0.0,
              "max": 0.25,
              "p5": 0.0,
              "p95": 0.00010599261061795729,
              "count": 414
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 503.3584229390681,
              "median": 8.0,
              "min": 0.0,
              "max": 15043.0,
              "p5": 0.0,
              "p95": 2995.949999999998,
              "count": 558
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.1752986583217493,
              "median": 0.1555885185595088,
              "min": 0.0,
              "max": 0.42801463080648666,
              "p5": 0.0,
              "p95": 0.41169790026257164,
              "count": 8
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 881599.375,
              "median": 22576.0,
              "min": 0.0,
              "max": 6389895.0,
              "p5": 0.0,
              "p95": 4307062.849999997,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.1485232511073461,
              "median": 0.021478521478521497,
              "min": 0.0011995345226493233,
              "max": 0.6666666666666666,
              "p5": 0.004479041440702998,
              "p95": 0.5780590717299576,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0015457789696660782,
              "median": 0.0002884321356745376,
              "min": 0.0,
              "max": 0.006436744837718791,
              "p5": 0.0,
              "p95": 0.005580153149589415,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.0780984984544373e-07,
              "median": 3.3261869126504334e-10,
              "min": 0.0,
              "max": 3.4677141937703023e-07,
              "p5": 0.0,
              "p95": 3.1580617773340885e-07,
              "count": 5
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 256.625,
              "median": 14.0,
              "min": 0.0,
              "max": 1813.0,
              "p5": 0.0,
              "p95": 1241.7999999999993,
              "count": 8
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 112166.475,
              "median": 22576.0,
              "min": 0.0,
              "max": 438946.0,
              "p5": 0.0,
              "p95": 391642.0999999999,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 43.125,
              "median": 12.0,
              "min": 0.0,
              "max": 181.0,
              "p5": 0.0,
              "p95": 161.39999999999998,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.23681472302809325,
              "median": 0.14090109898373734,
              "min": 0.0,
              "max": 0.8033055547697695,
              "p5": 0.0,
              "p95": 0.6719537313826203,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.15257804459191662,
              "median": 0.027025628853305117,
              "min": 0.010569554288516964,
              "max": 0.6666666666666666,
              "p5": 0.01245912483718961,
              "p95": 0.5780590717299576,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 3.9811998967983673,
              "median": 1.7915339702760085,
              "min": 1.0,
              "max": 19.6,
              "p5": 1.0205882352941176,
              "p95": 13.84526315789473,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.5952328436366782e-07,
              "median": 1.9194521115892338e-07,
              "min": 0.0,
              "max": 3.4677141937703023e-07,
              "p5": 0.0,
              "p95": 3.2919709375810126e-07,
              "count": 5
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.003178765300844058,
              "median": 0.0002884321356745376,
              "min": 0.0,
              "max": 0.013473613039068261,
              "p5": 0.0,
              "p95": 0.011010709168595943,
              "count": 8
            }
          },
          "returns": {
            "window_days": 1,
            "n_obs": 1,
            "stock": 0.0,
            "market": 0.0024773718588921856,
            "sector": 0.0,
            "peers": 0.0,
            "vs_market": -0.0024773718588921856,
            "vs_sector": 0.0,
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
          "score_pca": 75.62724014336918,
          "score_pca_percentile": 75.62724014336918,
          "rank_pca": 137,
          "total": 558,
          "adv_notional_sgd": 236831.0,
          "adv_volume_shares": 1029700.0,
          "free_float_shares": null,
          "turnover_ratio": 0.0018057269462203327,
          "votes": 93.0,
          "trades": 93.0,
          "spread_pct": 0.02342442833240376,
          "spread_ticks": 1.072992700729927,
          "amihud": 6.348843558145879e-08,
          "volatility": 0.4274550127790744
        },
        "pca": {
          "valid": true,
          "window_days": 5,
          "variance_explained": 0.5175212397376519,
          "loadings": {
            "log_adv": 0.552736514158933,
            "log_trades": 0.5078406300858166,
            "log_turnover": 0.5090665092174663,
            "neg_spread": 0.40411891368643726,
            "neg_amihud": 0.09710793436555704,
            "neg_vol": 0.06847979429557804
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
          "peer_median_adv": 11146.0,
          "peer_median_score_pca": 51.61290322580645,
          "peer_median_trades": 10.5,
          "peer_median_volatility": 0.24945344565695654,
          "peer_median_spread_pct": 0.02943097575636148,
          "peer_median_spread_ticks": 2.071875,
          "peer_median_amihud": 1.9224682997870486e-07,
          "peer_median_turnover_ratio": 0.00011142862942555503,
          "target_vs_peer": {
            "score_pca_delta": 24.01,
            "adv_delta_pct": 2024.8,
            "trades_delta_pct": 785.71,
            "volatility_delta_pct": -71.36,
            "spread_pct_delta_pct": 20.41,
            "spread_ticks_delta_pct": -48.21,
            "amihud_delta_pct": 66.98,
            "turnover_ratio_delta_pct": 1520.52
          }
        },
        "peer_liquidity": [
          {
            "ticker": "TKU",
            "score_pca": 75.62724014336918,
            "rank_pca": 137,
            "adv": 236831.0,
            "trades": 93.0,
            "volatility": 0.4274550127790744,
            "spread_pct": 0.02342442833240376,
            "spread_ticks": 1.072992700729927,
            "amihud": 6.348843558145879e-08,
            "turnover_ratio": 0.0018057269462203327,
            "is_target": true
          },
          {
            "ticker": "ITS",
            "score_pca": 79.56989247311827,
            "rank_pca": 115,
            "adv": 438946.0,
            "trades": 167.0,
            "volatility": 0.47883195277310087,
            "spread_pct": 0.01168413185069938,
            "spread_ticks": 1.2037037037037037,
            "amihud": 4.7378096158584e-08,
            "turnover_ratio": 0.006436744837718791,
            "is_target": false
          },
          {
            "ticker": "NXR",
            "score_pca": 25.448028673835125,
            "rank_pca": 417,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.19998016168224025,
            "spread_pct": 0.03416149068322985,
            "spread_ticks": 2.4444444444444446,
            "amihud": 1.659685614052556e-06,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "LVR",
            "score_pca": 57.8853046594982,
            "rank_pca": 236,
            "adv": 18972.0,
            "trades": 15.0,
            "volatility": 0.22585705517085325,
            "spread_pct": 0.013793103448275874,
            "spread_ticks": 2.05,
            "amihud": 1.9224682997870486e-07,
            "turnover_ratio": 0.00017144416692227172,
            "is_target": false
          },
          {
            "ticker": "U77",
            "score_pca": 45.340501792114694,
            "rank_pca": 306,
            "adv": 3320.0,
            "trades": 6.0,
            "volatility": 0.47536188975104443,
            "spread_pct": 0.023881994848981524,
            "spread_ticks": 4.636363636363637,
            "amihud": 9.31442962569913e-06,
            "turnover_ratio": 5.141309192883833e-05,
            "is_target": false
          },
          {
            "ticker": "532",
            "score_pca": 3.046594982078853,
            "rank_pca": 539,
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
            "score_pca": 5.734767025089606,
            "rank_pca": 527,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.0,
            "spread_pct": 0.47943262411347515,
            "spread_ticks": 21.125,
            "amihud": null,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "42F",
            "score_pca": 77.77777777777779,
            "rank_pca": 125,
            "adv": 490473.9,
            "trades": 64.0,
            "volatility": 0.27304983614305983,
            "spread_pct": 0.04156563907170076,
            "spread_ticks": 1.1428571428571428,
            "amihud": 0.0,
            "turnover_ratio": 0.02215208053188602,
            "is_target": false
          },
          {
            "ticker": "S71",
            "score_pca": 66.48745519713262,
            "rank_pca": 188,
            "adv": 50625.0,
            "trades": 22.0,
            "volatility": 0.6081871284199456,
            "spread_pct": 0.02470046082949311,
            "spread_ticks": 2.09375,
            "amihud": 2.5889979128238533e-07,
            "turnover_ratio": 0.0023949778272952748,
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
              "mean": 0.5396518895991835,
              "median": 0.27704873157641363,
              "min": 0.0,
              "max": 9.72111104761179,
              "p5": 0.0,
              "p95": 2.065634673200401,
              "count": 558
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 3059191.261422336,
              "median": 13189.35,
              "min": 0.0,
              "max": 284335480.0,
              "p5": 0.0,
              "p95": 12440439.449999997,
              "count": 558
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.10921728603255525,
              "median": 0.029315498873198773,
              "min": 0.0002334722276610592,
              "max": 1.2704402515723272,
              "p5": 0.0031861112900137597,
              "p95": 0.49603594080338265,
              "count": 556
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0041251018285507245,
              "median": 0.00021657617639417027,
              "min": 0.0,
              "max": 0.659152330103487,
              "p5": 0.0,
              "p95": 0.011950621081105868,
              "count": 551
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 0.0006672745156333709,
              "median": 7.088720955725604e-08,
              "min": 0.0,
              "max": 0.125,
              "p5": 0.0,
              "p95": 0.00033086419753086417,
              "count": 503
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 455.9139784946237,
              "median": 6.0,
              "min": 0.0,
              "max": 11350.0,
              "p5": 0.0,
              "p95": 2616.7499999999995,
              "count": 558
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.26748938199525263,
              "median": 0.2791430194882805,
              "min": 0.0,
              "max": 0.47883195277310087,
              "p5": 0.0,
              "p95": 0.4776174307153811,
              "count": 8
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 1221480.25,
              "median": 11146.0,
              "min": 0.0,
              "max": 9073773.0,
              "p5": 0.0,
              "p95": 6051583.549999995,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.15679915612751963,
              "median": 0.02365321159069264,
              "min": 0.0013488090764248568,
              "max": 0.6666666666666666,
              "p5": 0.00496617204742094,
              "p95": 0.6011347517730495,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0018027598828699628,
              "median": 0.00011142862942555503,
              "min": 0.0,
              "max": 0.006436744837718791,
              "p5": 0.0,
              "p95": 0.006268746651576528,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.611080174308814e-06,
              "median": 6.348843558145879e-08,
              "min": 0.0,
              "max": 9.31442962569913e-06,
              "p5": 9.978560737951301e-11,
              "p95": 7.0180064222051516e-06,
              "count": 7
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 353.25,
              "median": 10.5,
              "min": 0.0,
              "max": 2545.0,
              "p5": 0.0,
              "p95": 1712.6999999999987,
              "count": 8
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 125292.1125,
              "median": 11146.0,
              "min": 0.0,
              "max": 490473.9,
              "p5": 0.0,
              "p95": 472439.135,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 34.25,
              "median": 10.5,
              "min": 0.0,
              "max": 167.0,
              "p5": 0.0,
              "p95": 130.94999999999993,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.28265850299253054,
              "median": 0.24945344565695654,
              "min": 0.0,
              "max": 0.6081871284199456,
              "p5": 0.0,
              "p95": 0.5629128169435499,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.16198576393906527,
              "median": 0.02943097575636148,
              "min": 0.01168413185069938,
              "max": 0.6666666666666666,
              "p5": 0.012422271909851153,
              "p95": 0.6011347517730495,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 4.462014865921116,
              "median": 2.071875,
              "min": 1.0,
              "max": 21.125,
              "p5": 1.05,
              "p95": 15.353977272727263,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.638948565310194e-06,
              "median": 1.9224682997870486e-07,
              "min": 0.0,
              "max": 9.31442962569913e-06,
              "p5": 0.0,
              "p95": 7.0180064222051516e-06,
              "count": 7
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0039008325569688993,
              "median": 0.00011142862942555503,
              "min": 0.0,
              "max": 0.02215208053188602,
              "p5": 0.0,
              "p95": 0.01665171303892748,
              "count": 8
            }
          },
          "returns": {
            "window_days": 5,
            "n_obs": 5,
            "stock": -2.220446049250313e-16,
            "market": 0.008470976503284433,
            "sector": 0.0033112582781456013,
            "peers": 0.0,
            "vs_market": -0.008470976503284655,
            "vs_sector": -0.0033112582781458233,
            "vs_peers": -2.220446049250313e-16
          }
        }
      },
      "2w": {
        "label": "2W",
        "window_days": 10,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 10,
          "score_pca": 72.93906810035843,
          "score_pca_percentile": 72.93906810035843,
          "rank_pca": 152,
          "total": 558,
          "adv_notional_sgd": 153025.0,
          "adv_volume_shares": 681200.0,
          "free_float_shares": null,
          "turnover_ratio": 0.0011945821071819855,
          "votes": 48.0,
          "trades": 48.0,
          "spread_pct": 0.025041146816611553,
          "spread_ticks": 1.1287926675094817,
          "amihud": 3.174421779072939e-08,
          "volatility": 0.3290425618405771
        },
        "pca": {
          "valid": true,
          "window_days": 10,
          "variance_explained": 0.5242773930004483,
          "loadings": {
            "log_adv": 0.5453115895452306,
            "log_trades": 0.4986123692076909,
            "log_turnover": 0.4987889106322271,
            "neg_spread": 0.4129789485457948,
            "neg_amihud": 0.10891182009785827,
            "neg_vol": 0.15105363852633405
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
          "peer_median_adv": 5077.825,
          "peer_median_score_pca": 48.2078853046595,
          "peer_median_trades": 6.5,
          "peer_median_volatility": 0.30012883289471737,
          "peer_median_spread_pct": 0.03173056821672153,
          "peer_median_spread_ticks": 2.4751313813813813,
          "peer_median_amihud": 3.430695926063145e-07,
          "peer_median_turnover_ratio": 6.075055584784655e-05,
          "target_vs_peer": {
            "score_pca_delta": 24.73,
            "adv_delta_pct": 2913.6,
            "trades_delta_pct": 638.46,
            "volatility_delta_pct": -9.63,
            "spread_pct_delta_pct": 21.08,
            "spread_ticks_delta_pct": -54.39,
            "amihud_delta_pct": 90.75,
            "turnover_ratio_delta_pct": 1866.37
          }
        },
        "peer_liquidity": [
          {
            "ticker": "TKU",
            "score_pca": 72.93906810035843,
            "rank_pca": 152,
            "adv": 153025.0,
            "trades": 48.0,
            "volatility": 0.3290425618405771,
            "spread_pct": 0.025041146816611553,
            "spread_ticks": 1.1287926675094817,
            "amihud": 3.174421779072939e-08,
            "turnover_ratio": 0.0011945821071819855,
            "is_target": true
          },
          {
            "ticker": "ITS",
            "score_pca": 80.64516129032258,
            "rank_pca": 109,
            "adv": 414823.0,
            "trades": 189.0,
            "volatility": 0.34452087558015704,
            "spread_pct": 0.009188650635802324,
            "spread_ticks": 1.3398484489699265,
            "amihud": 4.4032034710588365e-08,
            "turnover_ratio": 0.006111649234433178,
            "is_target": false
          },
          {
            "ticker": "NXR",
            "score_pca": 25.627240143369175,
            "rank_pca": 416,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.229728690734066,
            "spread_pct": 0.03361686370540955,
            "spread_ticks": 2.4097222222222223,
            "amihud": 2.077721413395451e-06,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "LVR",
            "score_pca": 49.46236559139785,
            "rank_pca": 283,
            "adv": 5938.5,
            "trades": 8.0,
            "volatility": 0.2585055530847775,
            "spread_pct": 0.017397010296439044,
            "spread_ticks": 2.5405405405405403,
            "amihud": 9.13607452113269e-07,
            "turnover_ratio": 5.599587709961294e-05,
            "is_target": false
          },
          {
            "ticker": "U77",
            "score_pca": 46.95340501792115,
            "rank_pca": 297,
            "adv": 4217.15,
            "trades": 5.0,
            "volatility": 0.4201160189458752,
            "spread_pct": 0.01610958188915391,
            "spread_ticks": 2.5570652173913047,
            "amihud": 5.141936457061566e-06,
            "turnover_ratio": 6.550523459608017e-05,
            "is_target": false
          },
          {
            "ticker": "532",
            "score_pca": 3.853046594982079,
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
            "score_pca": 7.347670250896058,
            "rank_pca": 518,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.0,
            "spread_pct": 0.46016359640178545,
            "spread_ticks": 20.5625,
            "amihud": null,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "42F",
            "score_pca": 68.10035842293907,
            "rank_pca": 179,
            "adv": 88056.8,
            "trades": 19.5,
            "volatility": 0.3417521127046573,
            "spread_pct": 0.041210372980030906,
            "spread_ticks": 1.1089285714285713,
            "amihud": 0.0,
            "turnover_ratio": 0.004034962135669479,
            "is_target": false
          },
          {
            "ticker": "S71",
            "score_pca": 65.41218637992831,
            "rank_pca": 194,
            "adv": 51502.5,
            "trades": 19.5,
            "volatility": 0.5463492116232261,
            "spread_pct": 0.029844272728033513,
            "spread_ticks": 2.6799059315390643,
            "amihud": 3.430695926063145e-07,
            "turnover_ratio": 0.0024364907763017264,
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
              "mean": 0.6124667662580003,
              "median": 0.3490975343294934,
              "min": 0.0,
              "max": 9.934787365615835,
              "p5": 0.0,
              "p95": 2.072926300248491,
              "count": 558
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 3202330.5913855475,
              "median": 10210.5,
              "min": 0.0,
              "max": 277532840.0,
              "p5": 0.0,
              "p95": 13000074.824999984,
              "count": 558
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.11224050157089285,
              "median": 0.033777193212664605,
              "min": 0.0002634624589661607,
              "max": 1.3040449601687822,
              "p5": 0.003444573297514715,
              "p95": 0.5466765231893185,
              "count": 556
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.003860583692718605,
              "median": 0.00019583757978258859,
              "min": 0.0,
              "max": 0.6476171643266759,
              "p5": 0.0,
              "p95": 0.010866056161029501,
              "count": 551
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 0.0005496607821892989,
              "median": 1.5929064182105248e-07,
              "min": 0.0,
              "max": 0.11111111111111112,
              "p5": 0.0,
              "p95": 0.000283016983016982,
              "count": 529
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 466.6693548387097,
              "median": 5.5,
              "min": 0.0,
              "max": 10991.0,
              "p5": 0.0,
              "p95": 2787.7999999999997,
              "count": 558
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.24376700154410214,
              "median": 0.2937740574626773,
              "min": 0.0,
              "max": 0.4201160189458752,
              "p5": 0.0,
              "p95": 0.40195322157339636,
              "count": 8
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 2111770.83125,
              "median": 5077.825,
              "min": 0.0,
              "max": 16316163.0,
              "p5": 0.0,
              "p95": 10750693.999999993,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.15369657646065069,
              "median": 0.0212190785565253,
              "min": 0.0013890952733370582,
              "max": 0.6666666666666666,
              "p5": 0.004118939650199901,
              "p95": 0.5943905920739581,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0022606892139648235,
              "median": 6.075055584784655e-05,
              "min": 0.0,
              "max": 0.010657781258407733,
              "p5": 0.0,
              "p95": 0.009066635050016637,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.1728471763587534e-06,
              "median": 4.4032034710588365e-08,
              "min": 0.0,
              "max": 5.141936457061566e-06,
              "p5": 2.6659783190136593e-10,
              "p95": 4.2226719439617295e-06,
              "count": 7
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 492.5625,
              "median": 6.5,
              "min": 0.0,
              "max": 3690.5,
              "p5": 0.0,
              "p95": 2464.974999999998,
              "count": 8
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 70567.24375,
              "median": 5077.825,
              "min": 0.0,
              "max": 414823.0,
              "p5": 0.0,
              "p95": 300454.82999999984,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 30.125,
              "median": 6.5,
              "min": 0.0,
              "max": 189.0,
              "p5": 0.0,
              "p95": 129.6749999999999,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.2676215578340949,
              "median": 0.30012883289471737,
              "min": 0.0,
              "max": 0.5463492116232261,
              "p5": 0.0,
              "p95": 0.5021675941861532,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.15927462691291516,
              "median": 0.03173056821672153,
              "min": 0.009188650635802324,
              "max": 0.6666666666666666,
              "p5": 0.011610976574475379,
              "p95": 0.5943905920739581,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 4.274813866511454,
              "median": 2.4751313813813813,
              "min": 1.0,
              "max": 20.5625,
              "p5": 1.038125,
              "p95": 14.303592076038662,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.2171952785553127e-06,
              "median": 3.430695926063145e-07,
              "min": 0.0,
              "max": 5.141936457061566e-06,
              "p5": 0.0,
              "p95": 4.2226719439617295e-06,
              "count": 7
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0015880754072625095,
              "median": 6.075055584784655e-05,
              "min": 0.0,
              "max": 0.006111649234433178,
              "p5": 0.0,
              "p95": 0.0053848087498658825,
              "count": 8
            }
          },
          "returns": {
            "window_days": 10,
            "n_obs": 10,
            "stock": -3.3306690738754696e-16,
            "market": 0.020796928551991334,
            "sector": 0.008378486855308065,
            "peers": -0.007265235834371109,
            "vs_market": -0.020796928551991667,
            "vs_sector": -0.008378486855308398,
            "vs_peers": 0.007265235834370776
          }
        }
      },
      "30d": {
        "label": "1M",
        "window_days": 21,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 21,
          "score_pca": 71.32616487455196,
          "score_pca_percentile": 71.32616487455196,
          "rank_pca": 161,
          "total": 558,
          "adv_notional_sgd": 145406.0,
          "adv_volume_shares": 632200.0,
          "free_float_shares": null,
          "turnover_ratio": 0.0011086535645338392,
          "votes": 43.0,
          "trades": 43.0,
          "spread_pct": 0.024966391396197374,
          "spread_ticks": 1.1627906976744187,
          "amihud": 1.0125507692955736e-07,
          "volatility": 0.3974024680966843
        },
        "pca": {
          "valid": true,
          "window_days": 21,
          "variance_explained": 0.5248623072786346,
          "loadings": {
            "log_adv": 0.5471870251543424,
            "log_trades": 0.5022485531933875,
            "log_turnover": 0.5045907225881288,
            "neg_spread": 0.41237432981629174,
            "neg_amihud": 0.065666169536639,
            "neg_vol": 0.13912698977132296
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
          "peer_median_adv": 7019.65,
          "peer_median_score_pca": 50.0,
          "peer_median_trades": 6.5,
          "peer_median_volatility": 0.34924505431213654,
          "peer_median_spread_pct": 0.03188695183634348,
          "peer_median_spread_ticks": 2.0274725274725274,
          "peer_median_amihud": 3.9642896785753787e-07,
          "peer_median_turnover_ratio": 8.093146255051247e-05,
          "target_vs_peer": {
            "score_pca_delta": 21.33,
            "adv_delta_pct": 1971.4,
            "trades_delta_pct": 561.54,
            "volatility_delta_pct": -13.79,
            "spread_pct_delta_pct": 21.7,
            "spread_ticks_delta_pct": -42.65,
            "amihud_delta_pct": 74.46,
            "turnover_ratio_delta_pct": 1269.87
          }
        },
        "peer_liquidity": [
          {
            "ticker": "TKU",
            "score_pca": 71.32616487455196,
            "rank_pca": 161,
            "adv": 145406.0,
            "trades": 43.0,
            "volatility": 0.3974024680966843,
            "spread_pct": 0.024966391396197374,
            "spread_ticks": 1.1627906976744187,
            "amihud": 1.0125507692955736e-07,
            "turnover_ratio": 0.0011086535645338392,
            "is_target": true
          },
          {
            "ticker": "ITS",
            "score_pca": 81.72043010752688,
            "rank_pca": 103,
            "adv": 496000.0,
            "trades": 218.0,
            "volatility": 0.3339949713683052,
            "spread_pct": 0.012262415695892103,
            "spread_ticks": 1.4199475065616798,
            "amihud": 3.6499536747879674e-08,
            "turnover_ratio": 0.0073461238829004155,
            "is_target": false
          },
          {
            "ticker": "NXR",
            "score_pca": 25.806451612903224,
            "rank_pca": 415,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.43674171817436924,
            "spread_pct": 0.04053109713487076,
            "spread_ticks": 2.9,
            "amihud": 2.2539148236729925e-06,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "LVR",
            "score_pca": 52.32974910394266,
            "rank_pca": 267,
            "adv": 8925.0,
            "trades": 9.0,
            "volatility": 0.32695141205869166,
            "spread_pct": 0.01981599433828735,
            "spread_ticks": 3.0,
            "amihud": 1.0452643373972158e-06,
            "turnover_ratio": 8.226554783770296e-05,
            "is_target": false
          },
          {
            "ticker": "U77",
            "score_pca": 47.67025089605735,
            "rank_pca": 293,
            "adv": 5114.3,
            "trades": 4.0,
            "volatility": 0.3644951372559679,
            "spread_pct": 0.014098690835850969,
            "spread_ticks": 2.0,
            "amihud": 1.5465248812655536e-06,
            "turnover_ratio": 7.9597377263322e-05,
            "is_target": false
          },
          {
            "ticker": "532",
            "score_pca": 3.136200716845878,
            "rank_pca": 540,
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
            "score_pca": 8.60215053763441,
            "rank_pca": 511,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.0,
            "spread_pct": 0.4135021097046413,
            "spread_ticks": 16.4,
            "amihud": null,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "42F",
            "score_pca": 67.20430107526882,
            "rank_pca": 184,
            "adv": 95914.59999999999,
            "trades": 22.0,
            "volatility": 0.6011656992509468,
            "spread_pct": 0.04190086867654577,
            "spread_ticks": 1.0886075949367089,
            "amihud": 0.0,
            "turnover_ratio": 0.004942900258616337,
            "is_target": false
          },
          {
            "ticker": "S71",
            "score_pca": 69.89247311827957,
            "rank_pca": 169,
            "adv": 95472.0,
            "trades": 32.0,
            "volatility": 0.7441970018101761,
            "spread_pct": 0.023242806537816192,
            "spread_ticks": 2.0549450549450547,
            "amihud": 3.9642896785753787e-07,
            "turnover_ratio": 0.0049176878053796315,
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
              "mean": 0.6275140511824993,
              "median": 0.37929264806024,
              "min": 0.0,
              "max": 10.33654217116354,
              "p5": 0.0,
              "p95": 1.8584062739389107,
              "count": 558
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 3203899.3421613364,
              "median": 9125.0,
              "min": 0.0,
              "max": 270730200.0,
              "p5": 0.0,
              "p95": 12436778.399999993,
              "count": 558
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.11102648956019748,
              "median": 0.03461702008616345,
              "min": 0.0002781015891092082,
              "max": 1.3686236766121267,
              "p5": 0.0035244213093422578,
              "p95": 0.5417690417690416,
              "count": 556
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0069402430011851176,
              "median": 0.0001823042656480005,
              "min": 0.0,
              "max": 2.4059060048777274,
              "p5": 0.0,
              "p95": 0.009837597332501068,
              "count": 551
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 0.0008945299162326034,
              "median": 1.6485903905899377e-07,
              "min": 0.0,
              "max": 0.4168860803931893,
              "p5": 0.0,
              "p95": 0.00011568846054217275,
              "count": 538
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 469.8189964157706,
              "median": 5.5,
              "min": 0.0,
              "max": 11204.0,
              "p5": 0.0,
              "p95": 2799.0499999999943,
              "count": 558
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.2726194926043589,
              "median": 0.3304731917134984,
              "min": 0.0,
              "max": 0.43674171817436924,
              "p5": 0.0,
              "p95": 0.4229729806471795,
              "count": 8
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 1447889.1625,
              "median": 7019.65,
              "min": 0.0,
              "max": 10927668.0,
              "p5": 0.0,
              "p95": 7276584.199999995,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.1491534657781197,
              "median": 0.022391192867242362,
              "min": 0.0013843604525509811,
              "max": 0.6666666666666666,
              "p5": 0.005191679787720374,
              "p95": 0.5780590717299576,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0020006957986362928,
              "median": 8.093146255051247e-05,
              "min": 0.0,
              "max": 0.007388926016555063,
              "p5": 0.0,
              "p95": 0.007373945269775937,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 7.120943262703475e-07,
              "median": 1.0125507692955736e-07,
              "min": 0.0,
              "max": 2.2539148236729925e-06,
              "p5": 3.6048836377019974e-10,
              "p95": 2.0416978409507603e-06,
              "count": 7
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 429.375,
              "median": 6.5,
              "min": 0.0,
              "max": 3161.0,
              "p5": 0.0,
              "p95": 2130.9499999999985,
              "count": 8
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 87678.23749999999,
              "median": 7019.65,
              "min": 0.0,
              "max": 496000.0,
              "p5": 0.0,
              "p95": 355970.10999999975,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 35.625,
              "median": 6.5,
              "min": 0.0,
              "max": 218.0,
              "p5": 0.0,
              "p95": 152.89999999999992,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.35094324248980713,
              "median": 0.34924505431213654,
              "min": 0.0,
              "max": 0.7441970018101761,
              "p5": 0.0,
              "p95": 0.6941360459144458,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.15400258119882138,
              "median": 0.03188695183634348,
              "min": 0.012262415695892103,
              "max": 0.6666666666666666,
              "p5": 0.012905111994877707,
              "p95": 0.5780590717299576,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 3.73293751955543,
              "median": 2.0274725274725274,
              "min": 1.0,
              "max": 16.4,
              "p5": 1.031012658227848,
              "p95": 11.709999999999992,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 7.540903638487398e-07,
              "median": 3.9642896785753787e-07,
              "min": 0.0,
              "max": 2.2539148236729925e-06,
              "p5": 0.0,
              "p95": 2.0416978409507603e-06,
              "count": 7
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.002171071858999676,
              "median": 8.093146255051247e-05,
              "min": 0.0,
              "max": 0.0073461238829004155,
              "p5": 0.0,
              "p95": 0.006504995614400986,
              "count": 8
            }
          },
          "returns": {
            "window_days": 21,
            "n_obs": 21,
            "stock": -0.021276595744681104,
            "market": 0.025823396913769336,
            "sector": -0.002833355170261287,
            "peers": 0.004842926023204797,
            "vs_market": -0.04709999265845044,
            "vs_sector": -0.018443240574419817,
            "vs_peers": -0.0261195217678859
          }
        }
      }
    },
    "period_insights": {
      "1d": {
        "liquidity": "1D score 68.5 vs peer median 56.7 (+11.7 pts).",
        "market_comparison": "The stock was flat on the day, in line with peers, so the main read is book shape rather than price divergence."
      },
      "1w": {
        "liquidity": "Weekly liquidity appears strong for its size, supporting reasonable access in normal conditions.",
        "market_comparison": "Price was broadly flat over the week, in line with peers, which keeps the focus on relative tradability rather than momentum."
      },
      "2w": {
        "liquidity": "Two-week liquidity still reads as strong, pointing to steady accessibility rather than a clear drop in trading conditions.",
        "market_comparison": "The stock was broadly flat while peers fell 0.7%, which matters because relative price resilience did not come at the expense of weaker tradability."
      },
      "30d": {
        "liquidity": "Monthly liquidity is strong, with a score of 71.3 compared with a peer median of 50.0, which keeps the name accessible relative to its size.",
        "market_comparison": "The shares fell 2.1% over the month while peers rose 0.5%, which matters because weaker price performance can make the thinner bid side more noticeable in live trading."
      }
    }
  },
  "q02": {
    "driver_model": {
      "valid": true,
      "model_method": "ols_with_volatility_regimes",
      "estimation_window_days": 52,
      "reporting_window_days": 52,
      "available_history_days": 52,
      "n_regimes": 2,
      "current_regime": 0,
      "current_regime_label": "Low Volatility",
      "current_regime_probability": 1.0,
      "current_driver_mix": {
        "market_share": {
          "median": 0.21123232424125968,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "21.1%",
          "display_range": null,
          "display_text": "21.1%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 52 trading days.",
          "kind": "share_pct",
          "value_pct": 21.1,
          "plain_english": "Market explains about 21.1% of price moves in the current state."
        },
        "sector_share": {
          "median": 0.7342703715278284,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "73.4%",
          "display_range": null,
          "display_text": "73.4%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 52 trading days.",
          "kind": "share_pct",
          "value_pct": 73.4,
          "plain_english": "Sector explains about 73.4% of price moves in the current state."
        },
        "company_share": {
          "median": 0.05449730423091183,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "5.4%",
          "display_range": null,
          "display_text": "5.4%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 52 trading days.",
          "kind": "share_pct",
          "value_pct": 5.4,
          "plain_english": "Company-specific explains about 5.4% of price moves in the current state."
        },
        "basis": "current_state"
      },
      "current_sensitivities": {
        "beta_market": {
          "median": 0.01834272424934165,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "0.02",
          "display_range": null,
          "display_text": "0.02",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 52 trading days.",
          "kind": "beta",
          "strength_label": "Weak",
          "plain_english": "Weak market link: a 1% market move has lined up with about a 0.02% stock move in the same direction in this state.",
          "value_num": 0.02
        },
        "beta_stock_lag": {
          "median": -0.15355513935092494,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "-0.15",
          "display_range": null,
          "display_text": "-0.15",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 52 trading days.",
          "kind": "lag_beta",
          "value_num": -0.15
        },
        "beta_sector": {
          "median": -2.6635612554579615,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "-2.66",
          "display_range": null,
          "display_text": "-2.66",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 52 trading days.",
          "kind": "beta",
          "strength_label": "High",
          "plain_english": "High sector link: a 1% sector move has lined up with about a 2.66% stock move in the opposite direction in this state.",
          "value_num": -2.66
        },
        "beta_market_lag": {
          "median": 2.081701669060597,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "2.08",
          "display_range": null,
          "display_text": "2.08",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 52 trading days.",
          "kind": "lag_beta",
          "value_num": 2.08
        },
        "beta_sector_lag": {
          "median": -1.508464836590326,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "-1.51",
          "display_range": null,
          "display_text": "-1.51",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 52 trading days.",
          "kind": "lag_beta",
          "value_num": -1.51
        },
        "posterior_source": null,
        "intervals_collapsed": false,
        "confidence_label": "High, limited history",
        "confidence_note": "Based on 52 trading days relative to the 252-day target."
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
            "median": 0.47931948471963925,
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
              "median": 0.47931948471963925,
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
              "median": 0.2984396411024003,
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
              "median": 0.22224087417796046,
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
            "median": 0.5656898926629687,
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
              "median": 0.2647931795787311,
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
              "median": 0.1695169277583002,
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
              "median": 0.5656898926629687,
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
              "median": 0.22982068067655406,
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
          "period_label": "2026-04-01 to 2026-04-10",
          "n_obs": 7,
          "partial_month": false,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.3819016761197408,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "38.2%",
            "display_range": null,
            "display_text": "38.2%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 7 trading days.",
            "kind": "share_pct",
            "value_pct": 38.2,
            "plain_english": "Company-specific explains about 38.2% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.27779707756328115,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "27.8%",
              "display_range": null,
              "display_text": "27.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 7 trading days.",
              "kind": "share_pct",
              "value_pct": 27.8,
              "plain_english": "Market explains about 27.8% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.340301246316978,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "34.0%",
              "display_range": null,
              "display_text": "34.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 7 trading days.",
              "kind": "share_pct",
              "value_pct": 34.0,
              "plain_english": "Sector explains about 34.0% of price moves in the current state."
            },
            "company_share": {
              "median": 0.3819016761197408,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "38.2%",
              "display_range": null,
              "display_text": "38.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 7 trading days.",
              "kind": "share_pct",
              "value_pct": 38.2,
              "plain_english": "Company-specific explains about 38.2% of price moves in the current state."
            }
          },
          "summary": "Apr: More mixed, though company-driven still has the largest share, though based on only 7 trading days."
        }
      ],
      "regimes": [
        {
          "id": 0,
          "label": "Low Volatility",
          "pct_time": 0.5,
          "expected_duration_days": 5.0,
          "current_probability": 1.0,
          "n_days_effective": 25.0,
          "volatility": {
            "median": 0.027378834743202816,
            "low": 0.027378834743202816,
            "high": 0.027378834743202816
          },
          "volatility_label": "Low Volatility",
          "current_probability_display": null
        },
        {
          "id": 1,
          "label": "High Volatility",
          "pct_time": 0.5,
          "expected_duration_days": 6.25,
          "current_probability": 0.0,
          "n_days_effective": 25.0,
          "volatility": {
            "median": 0.0422813008358722,
            "low": 0.0422813008358722,
            "high": 0.0422813008358722
          },
          "volatility_label": "High Volatility",
          "current_probability_display": 0.0
        }
      ],
      "transitions": {
        "mean": [
          [
            0.8333333333333334,
            0.16666666666666666
          ],
          [
            0.16,
            0.84
          ]
        ],
        "low": [],
        "high": [],
        "counts": [
          [
            20.0,
            4.0
          ],
          [
            4.0,
            21.0
          ]
        ]
      },
      "methodology": {
        "estimation_window_days": 52,
        "reporting_window_days": 52,
        "current_mix_method": "ols_last_5d",
        "monthly_history_method": "ols_per_month",
        "regime_inference": "volatility_kmeans",
        "distribution": "gaussian",
        "history_limited": true,
        "current_driver_mix_basis": "ols_recent_window",
        "sector_proxy_equals_market": false
      },
      "client_read": {
        "market_link_display": "0.02",
        "sector_link_display": "-2.66",
        "market_link_explainer": "Weak market link. A 1% market move has lined up with about a 0.02% stock move in the same direction in this state. This is a point estimate from 52 trading days.",
        "sector_link_explainer": "High sector link. A 1% sector move has lined up with about a 2.66% stock move in the opposite direction in this state. This is a point estimate from 52 trading days.",
        "stock_persistence_display": "-0.15",
        "point_estimate_note": "Point estimate only because the current state has 52 trading days.",
        "history_limited_note": "Read is based on 52 trading days versus the 252-day target."
      },
      "current_summary": {
        "regime_label": "Low Volatility",
        "dominant_driver": "sector",
        "dominant_driver_label": "Sector",
        "driver_share_pct": 73.4,
        "driver_share_display": "73.4%",
        "confidence_label": "High, limited history",
        "confidence_pct": 100.0,
        "display_confidence_pct": null,
        "confidence_note": "Based on 52 trading days relative to the 252-day target.",
        "history_days": 52,
        "history_limited": true,
        "volatility_label": "Low Volatility",
        "lead_signal_text": "No stable lead signal.",
        "state_term": "state",
        "stay_probability": 0.8333333333333334,
        "effective_days": 25.0,
        "persistence_note": "This state looks more persistent, with a typical run length of about 5.0 days.",
        "expected_duration_days": 5.0
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
          "expected_duration_days": 5.0,
          "current_probability": 1.0,
          "n_days_effective": 25.0,
          "volatility": {
            "median": 0.027378834743202816,
            "low": 0.027378834743202816,
            "high": 0.027378834743202816
          },
          "volatility_label": "Low Volatility"
        },
        {
          "id": 1,
          "label": "High Volatility",
          "pct_time": 0.5,
          "expected_duration_days": 6.25,
          "current_probability": 0.0,
          "n_days_effective": 25.0,
          "volatility": {
            "median": 0.0422813008358722,
            "low": 0.0422813008358722,
            "high": 0.0422813008358722
          },
          "volatility_label": "High Volatility"
        }
      ],
      "transitions": [
        [
          0.8333333333333334,
          0.16666666666666666
        ],
        [
          0.16,
          0.84
        ]
      ],
      "transition_intervals": {
        "mean": [
          [
            0.8333333333333334,
            0.16666666666666666
          ],
          [
            0.16,
            0.84
          ]
        ],
        "low": [],
        "high": [],
        "counts": [
          [
            20.0,
            4.0
          ],
          [
            4.0,
            21.0
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
        "text": "Liquidity score: 71.3 — Strong",
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
    "liq_subtitle": "Monthly liquidity is strong for the stock’s size, while the current book shows a thinner bid than the offer.",
    "market_comparison_title": "How You Compare to the Market",
    "market_comparison_subtitle": "Context relative to market, sector, and peer medians.",
    "perf_title": "Stock Performance",
    "perf_subtitle": "Performance has lagged over one month, with the stock down 2.1% compared with peers up 0.5% and the market up 2.6%.",
    "perf_insight": "The weaker month looks more like a price issue than an access issue, because the 1M liquidity score is 71.3 against a peer median of 50.0. That matters because trading conditions still screen well even as the shares underperform.",
    "drivers_title": "What Moves Your Stock Price?",
    "drivers_subtitle": "Sector moves are setting most of the tape, with sector factors accounting for 73.4% of current trading.",
    "drivers_strip": [
      {
        "title": "Current Driver (Last 5 Days)",
        "text": "Over the last 5 trading days, moves are mainly sector-driven, accounting for about 73.4% of price changes. Other influences are market 21.1%, and company-specific 5.4%."
      },
      {
        "title": "Driver Mix",
        "text": "Based on the last 5 trading days, current mix is market 21.1%, sector 73.4%, and company-specific 5.4%."
      },
      {
        "title": "Monthly Trend",
        "text": "The driver mix has been consistently company-driven across Feb to Apr."
      }
    ],
    "drivers_pie_title": "Current Driver Mix (Last 5 Days)",
    "drivers_pie_note": "Based on the last 5 trading days, current split is market 21.1%, sector 73.4%, and company-specific 5.4%.",
    "lead_lag_title": "",
    "lead_lag_note": "",
    "rolling_title": "Monthly Driver Shift",
    "rolling_latest_label": "Latest: {period}",
    "rolling_note": "Each bar shows the monthly split between market-, sector-, and company-driven moves.",
    "drivers_bottom_line": "That matters because broader sector direction is doing most of the work while the bid remains thin, with top-10 bid depth at 0.44x of ask depth despite a 1-tick spread.",
    "drivers_wtd_title": "Key Reads",
    "drivers_wtd_list": [
      "Main driver now: sector moves are dominating, accounting for 73.4% of recent price action.",
      "Monthly change: the pattern was mostly sector in February and March, and is more mixed in April."
    ],
    "regime_title": "Market State",
    "regime_subtitle": "The market backdrop looks orderly, but the displayed book is less supportive on the buy side.",
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
    "exec_check_subtitle": "Combines the final continuous-session displayed book before close, trade-size stress tests based on available history from Jan 22, 2026 to Apr 10, 2026 (54 trading days • 10,314 trades), large sell-side orders observed today, and intraday spread/depth during the continuous trading session.",
    "order_book_title": "Order Book Depth (Available Liquidity)",
    "order_book_note": "Depth shown is based on top 10 bid and top 10 ask levels.",
    "peer_capacity_title": "Peer Capacity Context",
    "peer_capacity_note": "Immediate buy-side depth is thin enough that downside execution may feel worse than the monthly liquidity score",
    "impact_summary_title": "Estimated Price Impact (Sell Orders)",
    "impact_summary_subtitle": "Approximate price impact (%) for sell orders.",
    "exec_check_insight": "The key execution watchpoint is the bid, because top-10 bid depth is only 0.44x of ask depth despite a 1-tick spread.",
    "trader_composition_title": "Who's Trading Your Stock?",
    "trader_composition_subtitle": "Shows whether trading is mostly retail-like, institution-like, mixed, or unclassified.",
    "trader_retail_threshold": "Retail-like flow",
    "trader_mixed_threshold": "Mixed flow",
    "trader_instit_threshold": "Institution-like flow",
    "peer_trader_title": "Peer Comparison: Trader Mix",
    "peer_trader_subtitle": "How the trader mix compares with peers.",
    "price_moving_title": "Which Trades Move the Price?",
    "price_moving_subtitle": "Price-moving trades are 13.1% of total trades.",
    "intraday_title": "When Does Trading Happen?",
    "intraday_subtitle": "Trading access looks stronger in the monthly profile than in the displayed buy-side depth.",
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
    "intraday_insight": "The clearest intraday signal is the shape of the book, with top-10 bid depth at 0.44x of ask depth and a 1-tick spread. That matters because the screen can look orderly while immediate buy-side support remains thin.",
    "short_title": "Short Selling & Lending",
    "short_subtitle": "The main market signal is sector-led trading rather than stock-specific pressure.",
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
    "exec_subtitle": "Liquid for its size, but the displayed book shows thin buy-side support.",
    "exec_takeaways_title": "Key Takeaways:",
    "metric_liquidity_score": "Liquidity Score",
    "metric_spread": "Trading Cost (Spread)",
    "metric_adv": "Average Traded Volume",
    "metric_drivers": "What Drives Price Changes",
    "metric_period_note": "The metrics shown here are based on the last 1 month of trading data, except for price driver mix which uses the last 5 trading days.",
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
        "value": "71.3/100",
        "sub": "Peer median 50.0 (+21.3 pts)",
        "interp": {
          "text": "Strong",
          "cls": "interpretation-good",
          "icon": "◆"
        }
      },
      {
        "title": "Volume vs Peers",
        "value": "S$145.4K",
        "sub": "Peer median S$7.0K",
        "interp": {
          "text": "Strong",
          "cls": "interpretation-good",
          "icon": "◆"
        }
      },
      {
        "title": "Spread",
        "value": "2.50%",
        "sub": "1.16 ticks; peers 3.19%",
        "interp": {
          "text": "Tighter",
          "cls": "interpretation-good",
          "icon": "◆"
        }
      }
    ],
    "liq_insight": "Liquidity looks strong relative to peers, with a 1M score of 71.3 against a peer median of 50.0. The current screen is less supportive, because top-10 bid depth is only 0.44x of ask depth even with a 1-tick spread. That matters because overall access looks good, but immediate buy-side support is thinner than the monthly ranking implies.",
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
        "value": "0.44x",
        "note": "Bid depth / ask depth on displayed top-10 levels",
        "color": "text-slate-300"
      }
    ],
    "impact_summary_cards": [
      {
        "title": "~S$100K sell",
        "text": "Estimated impact ~-2.41% with 100.0% fill.",
        "cls": "ok"
      },
      {
        "title": "S$1.0M sell",
        "text": "Estimated impact ~-4.63% with 28.6% fill.",
        "cls": "warn"
      },
      {
        "title": "S$2.5M sell",
        "text": "Estimated impact ~-4.63% with 11.4% fill.",
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
        "value": "71",
        "suffix": "/100",
        "bar_pct": 71,
        "color_value": "text-emerald-400",
        "color_bar": "bg-emerald-500",
        "subtext": "Rank 161/558",
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
        "subtext": "2.50% • 1.16 ticks vs peers 3.19%",
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
        "value": "145.4K",
        "value_prefix": "S$",
        "suffix": "",
        "bar_pct": 60,
        "color_value": "text-emerald-400",
        "color_bar": "bg-emerald-500",
        "subtext": "Peer median S$7.0K",
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
        "value": "73.4",
        "suffix": "sector",
        "bar_pct": 73,
        "color_value": "text-amber-400",
        "color_bar": "bg-amber-500",
        "subtext": "Market 21.1% • Company 5.4%",
        "interpretation": {
          "text": "Sector",
          "cls": "interpretation-neutral",
          "icon": "◆"
        }
      }
    ],
    "exec_takeaways": [
      "Structural liquidity is strong for the stock’s size, with a 1M liquidity score of 71.3 compared with a peer median of 50.0. That leaves the name looking more accessible than most peers on a monthly view.",
      "The stock has underperformed over one month, down 2.1% while peers rose 0.5% and the market gained 2.6%. That matters because weaker price momentum can make trading feel less supported even when liquidity screens well.",
      "The main watchpoint is the displayed book, with top-10 bid depth at 0.44x of ask depth despite a 1-tick spread. That matters because buy-side support is thin while sector factors still explain 73.4% of the tape."
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
      "overall": "1M liquidity is strong: score 71.3 vs peer median 50.0 (+21.3 pts). Recent trend context is too limited to say whether access has changed from the 1M baseline.",
      "strengths": [
        "1M score 71.3 vs peer median 50.0 (+21.3 pts)."
      ],
      "concerns": [],
      "peer_context": "Primary-period score gap vs peers: +21.3 pts."
    },
    "market_comparison": {
      "returns": {
        "insight": "1M return is -2.1%, worse than market, sector, and peers, which suggests weaker price performance than comparable names.",
        "vs_market": "Worse than market: -2.1% vs market 2.6%.",
        "vs_sector": "Worse than sector: -2.1% vs sector -0.3%.",
        "vs_peers": "Worse than peers: -2.1% vs peers 0.5%."
      },
      "adv": {
        "insight": "ADV is S$145.4K, better than market, sector, and peers, which supports stronger day-to-day trading size than comparable names.",
        "vs_market": "Better than market: S$145.4K vs market S$9.1K.",
        "vs_sector": "Better than sector: S$145.4K vs sector S$7.0K.",
        "vs_peers": "Better than peers: S$145.4K vs peers S$7.0K."
      },
      "spread": {
        "insight": "Spread is 2.50%, better than market and peers, but worse than sector, which shows execution cost is mixed across comparison groups.",
        "vs_market": "Better than market: 2.50% vs market 3.46%.",
        "vs_sector": "Worse than sector: 2.50% vs secto%.",
        "vs_peers": "Better than peers: 2.50% vs peers 3.19%."
      },
      "turnover_ratio": {
        "insight": "Turnover ratio is 0.11%, better than market, sector, and peers, which shows a more active free-float turnover profile than comparable names.",
        "vs_market": "Better than market: 0.11% vs market 0.02%.",
        "vs_sector": "Better than sector: 0.11% vs sector 0.01%.",
        "vs_peers": "Better than peers: 0.11% vs peers 0.01%."
      },
      "volatility": {
        "insight": "Volatility is 39.74%, worse than sector and peers, which suggests day-to-day price swings are heavier than comparable names.",
        "vs_market": "In line with market: 39.74% vs market 37.93%.",
        "vs_sector": "Worse than sector: 39.74% vs sector 33.05%.",
        "vs_peers": "Worse than peers: 39.74% vs peers 34.92%."
      },
      "trades": {
        "insight": "Trades is 43, better than market, sector, and peers, which supports more fully reflective of day-to-day access day-to-day activity than comparable names.",
        "vs_market": "Better than market: 43 vs market 6.",
        "vs_sector": "Better than sector: 43 vs sector 6.",
        "vs_peers": "Better than peers: 43 vs peers 6."
      },
      "amihud": {
        "insight": "Price impact is 1.01e-07, better than market and peers, which suggests trades move price less than comparable names.",
        "vs_market": "Better than market: 1.01e-07 vs market 1.65e-07.",
        "vs_sector": "In line with sector: 1.01e-07 vs sector 1.01e-07.",
        "vs_peers": "Better than peers: 1.01e-07 vs peers 3.96e-07."
      }
    },
    "performance": {
      "overall": "Recent performance has been weak relative to peers and the market, with a 1M return of -2.1% compared with peers at +0.5% and the market at +2.6%. That underperformance is not confirmed by the broader liquidity backdrop, because the 1M liquidity score of 71.3 is 21.3 points above the peer median and points to access that remains strong for the stock's size.",
      "conclusion": "The recent move looks mainly sector-linked, with weak returns standing out against otherwise strong liquidity for the stock's size."
    },
    "drivers": {
      "overall": "The stock is trading mainly on sector moves right now, with the sector accounting for 73.4% of recent price action. That matters because current trading conditions are being shaped more by the group backdrop than by stock-specific news, while the shares have also underperformed with a 1M return of -2.1% compared with peers at +0.5% and the market at +2.6%.",
      "beta": "Based on the last 5 trading days, current mix is market 21.1%, sector 73.4%, and company-specific 5.4%.",
      "rolling_change": "The monthly picture has become more mixed. February and March were mostly sector, while April has shifted toward a broader mix even though company factors still hold the largest share so far."
    },
    "regime": {
      "overall": "Short expected duration points to a short-lived state rather than a durable market backdrop.",
      "current": "The stock is currently in a low-volatility state, pointing to a calmer tape than a higher-volatility backdrop would imply.",
      "transitions": "This state looks fairly settled, with a typical run length of about 5.0 days, although the read is mixed.",
      "trading_implications": "This state looks more persistent, with a typical run length of about 5.0 days."
    },
    "execution": {
      "overall": "The displayed book reads as thin buy-side because bid visible support is materially lighter than sell-side depth, with top-10 bids at 0.44x of asks. That matters because the screen can look orderly on spread at 1 tick while still offering less visible support on the way down.",
      "concern": "The clearest stress point is the imbalance in displayed depth rather than the spread, as buyers are much thinner than sellers at the top 10 levels. Trade-size context is based on 54 trading days and 10,314 trades, which makes that historical sizing lens less settled than the current book signal.",
      "peer_context": "The broader liquidity picture remains strong for size, with a 1M score of 71.3 compared with a peer median of 50.0, but the current book does not fully match that standing. In practice, the stock can screen accessible on a monthly basis while still showing weaker immediate buy-side support."
    },
    "trader_composition": {
      "overall": "By trade count and value, flow looks mainly institution-like.",
      "retail_heavy": "By trade count and value, flow leans institution-like: institution-like trades are 38.8% of count and 56.8% of value, compared with retail-like at 30.1% of count and 7.0% of value.",
      "institutional_gap": "The read is directionally clear but not fully clean because ambiguous flow still represents 21.6% of trade count.",
      "peer_comparison": "The mix appears institution-like in absolute terms, and the peer comparison in the report tables shows how unusual that is relative to the group."
    },
    "price_moving": {
      "overall": "Price-moving trades make up 13.1% of total trades, so most activity is not aggressively shifting price. The signal is mixed rather than fully clean because 21.6% of trade count is ambiguous, even though the observed count and value split leans institution-like. That means the price impact read is usable, but it may be treated with some caution. The balance between positive and negative price-moving trades is shown in the report tables, which frames whether pressure is skewed to buying or selling.",
      "interpretation": "",
      "asymmetry": ""
    },
    "short_selling": {
      "overall": "Short activity appears immaterial to the current trading picture, with a 1M average short ratio of 0.61%. That matters because the recent share price weakness relative to peers and the market does not look driven by elevated short pressure.",
      "level": "Low short interest",
      "correlation": "No clear relationship (correlation undefined)",
      "trend": "Short positioning has fallen sharply, with shorts covering significantly month on month. That points away from short selling as a growing source of pressure in the stock.",
      "peaks": "0 notable peak days identified."
    },
    "intraday": {
      "overall": "Liquidity is concentrated in the continuous session, with 97.2% of trading there compared with 1.6% at the open and 0.9% at the close. That points to access being available through the day rather than only around auction periods.",
      "hhi_interpretation": "Ambiguous or unclear flow is 21.6% of trade count, so the read is not fully clean.",
      "best_times": "The continuous session is the clearest source of liquidity because it carries nearly all trading activity. That matters because execution conditions are less reliant on the open or close.",
      "peer_ranking": "Peer concentration comparisons in the report tables show whether this intraday distribution is broader or narrower than the sector pattern."
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
        "NXR",
        "LVR",
        "U77",
        "532",
        "KUX",
        "42F",
        "S71"
      ],
      "scores": [
        71.32616487455196,
        81.72043010752688,
        25.806451612903224,
        52.32974910394266,
        47.67025089605735,
        3.136200716845878,
        8.60215053763441,
        67.20430107526882,
        69.89247311827957
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
        145406.0,
        496000.0,
        0.0,
        8925.0,
        5114.3,
        0.0,
        0.0,
        95914.59999999999,
        95472.0
      ],
      "total": 558
    },
    "market_comparison": {
      "sector_name": "Software - Application",
      "sector_count": 8,
      "market_count": 558,
      "company": {
        "volatility": 0.3974024680966843,
        "adv": 145406.0,
        "spread_pct": 0.024966391396197374,
        "turnover_ratio": 0.0011086535645338392,
        "amihud": 1.0125507692955736e-07,
        "trades": 43.0
      },
      "market": {
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.6275140511824993,
          "median": 0.37929264806024,
          "min": 0.0,
          "max": 10.33654217116354,
          "p5": 0.0,
          "p95": 1.8584062739389107,
          "count": 558
        },
        "adv": {
          "direction": "higher_is_better",
          "mean": 3203899.3421613364,
          "median": 9125.0,
          "min": 0.0,
          "max": 270730200.0,
          "p5": 0.0,
          "p95": 12436778.399999993,
          "count": 558
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.11102648956019748,
          "median": 0.03461702008616345,
          "min": 0.0002781015891092082,
          "max": 1.3686236766121267,
          "p5": 0.0035244213093422578,
          "p95": 0.5417690417690416,
          "count": 556
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.0069402430011851176,
          "median": 0.0001823042656480005,
          "min": 0.0,
          "max": 2.4059060048777274,
          "p5": 0.0,
          "p95": 0.009837597332501068,
          "count": 551
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 0.0008945299162326034,
          "median": 1.6485903905899377e-07,
          "min": 0.0,
          "max": 0.4168860803931893,
          "p5": 0.0,
          "p95": 0.00011568846054217275,
          "count": 538
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 469.8189964157706,
          "median": 5.5,
          "min": 0.0,
          "max": 11204.0,
          "p5": 0.0,
          "p95": 2799.0499999999943,
          "count": 558
        }
      },
      "sector": {
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.2726194926043589,
          "median": 0.3304731917134984,
          "min": 0.0,
          "max": 0.43674171817436924,
          "p5": 0.0,
          "p95": 0.4229729806471795,
          "count": 8
        },
        "adv": {
          "direction": "higher_is_better",
          "mean": 1447889.1625,
          "median": 7019.65,
          "min": 0.0,
          "max": 10927668.0,
          "p5": 0.0,
          "p95": 7276584.199999995,
          "count": 8
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.1491534657781197,
          "median": 0.022391192867242362,
          "min": 0.0013843604525509811,
          "max": 0.6666666666666666,
          "p5": 0.005191679787720374,
          "p95": 0.5780590717299576,
          "count": 8
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.0020006957986362928,
          "median": 8.093146255051247e-05,
          "min": 0.0,
          "max": 0.007388926016555063,
          "p5": 0.0,
          "p95": 0.007373945269775937,
          "count": 8
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 7.120943262703475e-07,
          "median": 1.0125507692955736e-07,
          "min": 0.0,
          "max": 2.2539148236729925e-06,
          "p5": 3.6048836377019974e-10,
          "p95": 2.0416978409507603e-06,
          "count": 7
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 429.375,
          "median": 6.5,
          "min": 0.0,
          "max": 3161.0,
          "p5": 0.0,
          "p95": 2130.9499999999985,
          "count": 8
        }
      },
      "peers": {
        "adv": {
          "direction": "higher_is_better",
          "mean": 87678.23749999999,
          "median": 7019.65,
          "min": 0.0,
          "max": 496000.0,
          "p5": 0.0,
          "p95": 355970.10999999975,
          "count": 8
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 35.625,
          "median": 6.5,
          "min": 0.0,
          "max": 218.0,
          "p5": 0.0,
          "p95": 152.89999999999992,
          "count": 8
        },
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.35094324248980713,
          "median": 0.34924505431213654,
          "min": 0.0,
          "max": 0.7441970018101761,
          "p5": 0.0,
          "p95": 0.6941360459144458,
          "count": 8
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.15400258119882138,
          "median": 0.03188695183634348,
          "min": 0.012262415695892103,
          "max": 0.6666666666666666,
          "p5": 0.012905111994877707,
          "p95": 0.5780590717299576,
          "count": 8
        },
        "spread_ticks": {
          "direction": "neutral",
          "mean": 3.73293751955543,
          "median": 2.0274725274725274,
          "min": 1.0,
          "max": 16.4,
          "p5": 1.031012658227848,
          "p95": 11.709999999999992,
          "count": 8
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 7.540903638487398e-07,
          "median": 3.9642896785753787e-07,
          "min": 0.0,
          "max": 2.2539148236729925e-06,
          "p5": 0.0,
          "p95": 2.0416978409507603e-06,
          "count": 7
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.002171071858999676,
          "median": 8.093146255051247e-05,
          "min": 0.0,
          "max": 0.0073461238829004155,
          "p5": 0.0,
          "p95": 0.006504995614400986,
          "count": 8
        }
      }
    },
    "returns": [
      {
        "horizon": "1W",
        "stock": -2.220446049250313e-16,
        "market": 0.008470976503284433,
        "sector": 0.0033112582781456013,
        "peers": 0.0
      },
      {
        "horizon": "2W",
        "stock": -3.3306690738754696e-16,
        "market": 0.020796928551991334,
        "sector": 0.008378486855308065,
        "peers": -0.007265235834371109
      },
      {
        "horizon": "1M",
        "stock": -0.021276595744681104,
        "market": 0.025823396913769336,
        "sector": -0.002833355170261287,
        "peers": 0.004842926023204797
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
      "share_market": 0.21123232424125968,
      "share_sector": 0.7342703715278284,
      "share_idio": 0.05449730423091183,
      "beta_market": 0.01834272424934165,
      "beta_sector": -2.6635612554579615,
      "driver_model": {
        "valid": true,
        "model_method": "ols_with_volatility_regimes",
        "estimation_window_days": 52,
        "reporting_window_days": 52,
        "available_history_days": 52,
        "n_regimes": 2,
        "current_regime": 0,
        "current_regime_label": "Low Volatility",
        "current_regime_probability": 1.0,
        "current_driver_mix": {
          "market_share": {
            "median": 0.21123232424125968,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "21.1%",
            "display_range": null,
            "display_text": "21.1%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 52 trading days.",
            "kind": "share_pct",
            "value_pct": 21.1,
            "plain_english": "Market explains about 21.1% of price moves in the current state."
          },
          "sector_share": {
            "median": 0.7342703715278284,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "73.4%",
            "display_range": null,
            "display_text": "73.4%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 52 trading days.",
            "kind": "share_pct",
            "value_pct": 73.4,
            "plain_english": "Sector explains about 73.4% of price moves in the current state."
          },
          "company_share": {
            "median": 0.05449730423091183,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "5.4%",
            "display_range": null,
            "display_text": "5.4%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 52 trading days.",
            "kind": "share_pct",
            "value_pct": 5.4,
            "plain_english": "Company-specific explains about 5.4% of price moves in the current state."
          },
          "basis": "current_state"
        },
        "current_sensitivities": {
          "beta_market": {
            "median": 0.01834272424934165,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "0.02",
            "display_range": null,
            "display_text": "0.02",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 52 trading days.",
            "kind": "beta",
            "strength_label": "Weak",
            "plain_english": "Weak market link: a 1% market move has lined up with about a 0.02% stock move in the same direction in this state.",
            "value_num": 0.02
          },
          "beta_stock_lag": {
            "median": -0.15355513935092494,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "-0.15",
            "display_range": null,
            "display_text": "-0.15",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 52 trading days.",
            "kind": "lag_beta",
            "value_num": -0.15
          },
          "beta_sector": {
            "median": -2.6635612554579615,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "-2.66",
            "display_range": null,
            "display_text": "-2.66",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 52 trading days.",
            "kind": "beta",
            "strength_label": "High",
            "plain_english": "High sector link: a 1% sector move has lined up with about a 2.66% stock move in the opposite direction in this state.",
            "value_num": -2.66
          },
          "beta_market_lag": {
            "median": 2.081701669060597,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "2.08",
            "display_range": null,
            "display_text": "2.08",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 52 trading days.",
            "kind": "lag_beta",
            "value_num": 2.08
          },
          "beta_sector_lag": {
            "median": -1.508464836590326,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "-1.51",
            "display_range": null,
            "display_text": "-1.51",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 52 trading days.",
            "kind": "lag_beta",
            "value_num": -1.51
          },
          "posterior_source": null,
          "intervals_collapsed": false,
          "confidence_label": "High, limited history",
          "confidence_note": "Based on 52 trading days relative to the 252-day target."
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
              "median": 0.47931948471963925,
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
                "median": 0.47931948471963925,
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
                "median": 0.2984396411024003,
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
                "median": 0.22224087417796046,
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
              "median": 0.5656898926629687,
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
                "median": 0.2647931795787311,
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
                "median": 0.1695169277583002,
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
                "median": 0.5656898926629687,
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
                "median": 0.22982068067655406,
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
            "period_label": "2026-04-01 to 2026-04-10",
            "n_obs": 7,
            "partial_month": false,
            "dominant_driver": "company",
            "dominant_driver_label": "Company-specific",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.3819016761197408,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "38.2%",
              "display_range": null,
              "display_text": "38.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 7 trading days.",
              "kind": "share_pct",
              "value_pct": 38.2,
              "plain_english": "Company-specific explains about 38.2% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.27779707756328115,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "27.8%",
                "display_range": null,
                "display_text": "27.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 7 trading days.",
                "kind": "share_pct",
                "value_pct": 27.8,
                "plain_english": "Market explains about 27.8% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.340301246316978,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "34.0%",
                "display_range": null,
                "display_text": "34.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 7 trading days.",
                "kind": "share_pct",
                "value_pct": 34.0,
                "plain_english": "Sector explains about 34.0% of price moves in the current state."
              },
              "company_share": {
                "median": 0.3819016761197408,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "38.2%",
                "display_range": null,
                "display_text": "38.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 7 trading days.",
                "kind": "share_pct",
                "value_pct": 38.2,
                "plain_english": "Company-specific explains about 38.2% of price moves in the current state."
              }
            },
            "summary": "Apr: More mixed, though company-driven still has the largest share, though based on only 7 trading days."
          }
        ],
        "regimes": [
          {
            "id": 0,
            "label": "Low Volatility",
            "pct_time": 0.5,
            "expected_duration_days": 5.0,
            "current_probability": 1.0,
            "n_days_effective": 25.0,
            "volatility": {
              "median": 0.027378834743202816,
              "low": 0.027378834743202816,
              "high": 0.027378834743202816
            },
            "volatility_label": "Low Volatility",
            "current_probability_display": null
          },
          {
            "id": 1,
            "label": "High Volatility",
            "pct_time": 0.5,
            "expected_duration_days": 6.25,
            "current_probability": 0.0,
            "n_days_effective": 25.0,
            "volatility": {
              "median": 0.0422813008358722,
              "low": 0.0422813008358722,
              "high": 0.0422813008358722
            },
            "volatility_label": "High Volatility",
            "current_probability_display": 0.0
          }
        ],
        "transitions": {
          "mean": [
            [
              0.8333333333333334,
              0.16666666666666666
            ],
            [
              0.16,
              0.84
            ]
          ],
          "low": [],
          "high": [],
          "counts": [
            [
              20.0,
              4.0
            ],
            [
              4.0,
              21.0
            ]
          ]
        },
        "methodology": {
          "estimation_window_days": 52,
          "reporting_window_days": 52,
          "current_mix_method": "ols_last_5d",
          "monthly_history_method": "ols_per_month",
          "regime_inference": "volatility_kmeans",
          "distribution": "gaussian",
          "history_limited": true,
          "current_driver_mix_basis": "ols_recent_window",
          "sector_proxy_equals_market": false
        },
        "client_read": {
          "market_link_display": "0.02",
          "sector_link_display": "-2.66",
          "market_link_explainer": "Weak market link. A 1% market move has lined up with about a 0.02% stock move in the same direction in this state. This is a point estimate from 52 trading days.",
          "sector_link_explainer": "High sector link. A 1% sector move has lined up with about a 2.66% stock move in the opposite direction in this state. This is a point estimate from 52 trading days.",
          "stock_persistence_display": "-0.15",
          "point_estimate_note": "Point estimate only because the current state has 52 trading days.",
          "history_limited_note": "Read is based on 52 trading days versus the 252-day target."
        },
        "current_summary": {
          "regime_label": "Low Volatility",
          "dominant_driver": "sector",
          "dominant_driver_label": "Sector",
          "driver_share_pct": 73.4,
          "driver_share_display": "73.4%",
          "confidence_label": "High, limited history",
          "confidence_pct": 100.0,
          "display_confidence_pct": null,
          "confidence_note": "Based on 52 trading days relative to the 252-day target.",
          "history_days": 52,
          "history_limited": true,
          "volatility_label": "Low Volatility",
          "lead_signal_text": "No stable lead signal.",
          "state_term": "state",
          "stay_probability": 0.8333333333333334,
          "effective_days": 25.0,
          "persistence_note": "This state looks more persistent, with a typical run length of about 5.0 days.",
          "expected_duration_days": 5.0
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
          "share_market": 0.47931948471963925,
          "share_sector": 0.2984396411024003,
          "share_company": 0.22224087417796046,
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
          "share_market": 0.2647931795787311,
          "share_sector": 0.1695169277583002,
          "share_company": 0.5656898926629687,
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
          "share_market": 0.22982068067655406,
          "share_sector": 0.23225785396311108,
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
          "period_label": "2026-04-01 to 2026-04-10",
          "n_obs": 7,
          "partial_month": false,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_label": null,
          "summary": "Apr: More mixed, though company-driven still has the largest share, though based on only 7 trading days.",
          "share_market": 0.27779707756328115,
          "share_sector": 0.340301246316978,
          "share_company": 0.3819016761197408,
          "share_market_display": "27.8%",
          "share_sector_display": "34.0%",
          "share_company_display": "38.2%",
          "dominant_share_display": "38.2%"
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
            "expected_duration_days": 5.0,
            "current_probability": 1.0,
            "n_days_effective": 25.0,
            "volatility": {
              "median": 0.027378834743202816,
              "low": 0.027378834743202816,
              "high": 0.027378834743202816
            },
            "volatility_label": "Low Volatility"
          },
          {
            "id": 1,
            "label": "High Volatility",
            "pct_time": 0.5,
            "expected_duration_days": 6.25,
            "current_probability": 0.0,
            "n_days_effective": 25.0,
            "volatility": {
              "median": 0.0422813008358722,
              "low": 0.0422813008358722,
              "high": 0.0422813008358722
            },
            "volatility_label": "High Volatility"
          }
        ],
        "transitions": [
          [
            0.8333333333333334,
            0.16666666666666666
          ],
          [
            0.16,
            0.84
          ]
        ]
      }
    },
    "order_book": {
      "bids": [
        {
          "level": 1,
          "price": 0.225,
          "quantity": 180800.0,
          "value": 40680.0
        },
        {
          "level": 2,
          "price": 0.22,
          "quantity": 600500.0,
          "value": 132110.0
        },
        {
          "level": 3,
          "price": 0.215,
          "quantity": 319100.0,
          "value": 68606.5
        },
        {
          "level": 4,
          "price": 0.21,
          "quantity": 76800.0,
          "value": 16128.0
        },
        {
          "level": 5,
          "price": 0.205,
          "quantity": 50000.0,
          "value": 10250.0
        },
        {
          "level": 6,
          "price": 0.2,
          "quantity": 90000.0,
          "value": 18000.0
        }
      ],
      "asks": [
        {
          "level": 1,
          "price": 0.23,
          "quantity": 962200.0,
          "value": 221306.0
        },
        {
          "level": 2,
          "price": 0.235,
          "quantity": 272400.0,
          "value": 64014.0
        },
        {
          "level": 3,
          "price": 0.24,
          "quantity": 217600.0,
          "value": 52224.0
        },
        {
          "level": 4,
          "price": 0.245,
          "quantity": 64700.0,
          "value": 15851.5
        },
        {
          "level": 5,
          "price": 0.25,
          "quantity": 217600.0,
          "value": 54400.0
        },
        {
          "level": 6,
          "price": 0.255,
          "quantity": 300000.0,
          "value": 76500.0
        },
        {
          "level": 7,
          "price": 0.26,
          "quantity": 304500.0,
          "value": 79170.0
        },
        {
          "level": 8,
          "price": 0.265,
          "quantity": 234000.0,
          "value": 62010.0
        },
        {
          "level": 9,
          "price": 0.27,
          "quantity": 59000.0,
          "value": 15930.000000000002
        },
        {
          "level": 10,
          "price": 0.275,
          "quantity": 50000.0,
          "value": 13750.000000000002
        }
      ]
    },
    "execution_dynamic": {
      "snapshot": {
        "valid": true,
        "snapshot_time": "2026-04-10 08:59:56.577400",
        "snapshot_basis": "last_continuous_session_snapshot",
        "snapshot_label": "final continuous-session displayed book before close",
        "snapshot_note": "Final continuous-session displayed book before close",
        "snapshot_mic": "XSES",
        "mid_price": 0.2275,
        "spread_pct": 0.021978021978021997,
        "spread_ticks": 1.0,
        "tick_size": 0.005,
        "bid_depth_notional_top10": 285774.5,
        "ask_depth_notional_top10": 655155.5,
        "bid_ask_depth_ratio": 0.4362
      },
      "historical_trade_scenarios": {
        "valid": true,
        "requested_lookback_calendar_days": 365,
        "lookback_calendar_days": 365,
        "effective_calendar_days": 79,
        "history_limited": true,
        "trade_days_used": 54,
        "n_trades_used": 10314,
        "first_trade_date": "2026-01-22",
        "last_trade_date": "2026-04-10",
        "window_label": "Jan 22, 2026 to Apr 10, 2026",
        "window_short_label": "Jan 22-Apr 10",
        "trade_days_label": "54 trading days",
        "trade_count_label": "10,314 trades",
        "window_detail_label": "54 trading days • 10,314 trades",
        "history_note": "Trade-size percentiles use available history from Jan 22, 2026 to Apr 10, 2026 (54 trading days • 10,314 trades), not a full year.",
        "scenarios": [
          {
            "key": "p90",
            "label": "90th percentile trade",
            "quantile": 0.9,
            "trade_notional": 9485.55,
            "impact_pct": -0.010989,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 3.32,
            "pct_of_adv": 6.6
          },
          {
            "key": "p95",
            "label": "95th percentile trade",
            "quantile": 0.95,
            "trade_notional": 13569.4,
            "impact_pct": -0.010989,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 4.75,
            "pct_of_adv": 9.44
          },
          {
            "key": "p99_99",
            "label": "99.99th percentile trade",
            "quantile": 0.9999,
            "trade_notional": 103812.8,
            "impact_pct": -0.024472,
            "filled_pct": 100.0,
            "levels_consumed": 2,
            "pct_of_bid_depth": 36.33,
            "pct_of_adv": 72.2
          }
        ]
      },
      "l3_sell_order_scenarios": {
        "valid": true,
        "trade_date": "2026-04-10",
        "selection_method": "largest_observed_ask_orders_during_day",
        "orders": [
          {
            "rank": 1,
            "order_id": "8134848378533429248",
            "timestamp": "2026-04-09 22:59:01.509500000",
            "local_timestamp": "2026-04-10 06:59:01",
            "posted_price": 0.23,
            "size_shares": 995700.0,
            "notional": 229011.0,
            "impact_pct": -0.034668000000000004,
            "filled_pct": 100.0,
            "levels_consumed": 3,
            "pct_of_bid_depth": 80.14,
            "price_vs_mid_pct": 1.099,
            "executed_event_count": 0,
            "event_count": 15
          },
          {
            "rank": 2,
            "order_id": "8123765301325001728",
            "timestamp": "2026-04-09 22:59:01.509500000",
            "local_timestamp": "2026-04-10 06:59:01",
            "posted_price": 0.3,
            "size_shares": 140000.0,
            "notional": 42000.0,
            "impact_pct": -0.011695,
            "filled_pct": 100.0,
            "levels_consumed": 2,
            "pct_of_bid_depth": 14.7,
            "price_vs_mid_pct": 31.868,
            "executed_event_count": 0,
            "event_count": 1
          },
          {
            "rank": 3,
            "order_id": "8126536070628204544",
            "timestamp": "2026-04-09 22:59:01.509500000",
            "local_timestamp": "2026-04-10 06:59:01",
            "posted_price": 0.365,
            "size_shares": 100000.0,
            "notional": 36500.0,
            "impact_pct": -0.010989,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 12.77,
            "price_vs_mid_pct": 60.44,
            "executed_event_count": 0,
            "event_count": 1
          }
        ]
      },
      "intraday_liquidity_profile": {
        "valid": true,
        "trade_date": "2026-04-10",
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
            "spread_pct": 0.021978021978021997,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 283693.5,
            "ask_depth_notional": 672799.5,
            "mid_price": 0.2275
          },
          {
            "bucket": "09:30",
            "spread_pct": 0.021978021978021997,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 284593.5,
            "ask_depth_notional": 648465.5,
            "mid_price": 0.2275
          },
          {
            "bucket": "10:00",
            "spread_pct": 0.021978021978021997,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 327388.5,
            "ask_depth_notional": 648465.5,
            "mid_price": 0.2275
          },
          {
            "bucket": "10:30",
            "spread_pct": 0.021978021978021997,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 327388.5,
            "ask_depth_notional": 650765.5,
            "mid_price": 0.2275
          },
          {
            "bucket": "11:00",
            "spread_pct": 0.021978021978021997,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 333864.0,
            "ask_depth_notional": 660654.0,
            "mid_price": 0.2275
          },
          {
            "bucket": "11:30",
            "spread_pct": 0.021978021978021997,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 327924.0,
            "ask_depth_notional": 660654.0,
            "mid_price": 0.2275
          },
          {
            "bucket": "13:00",
            "spread_pct": 0.021978021978021997,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 338031.0,
            "ask_depth_notional": 656515.5,
            "mid_price": 0.2275
          },
          {
            "bucket": "13:30",
            "spread_pct": 0.021978021978021997,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 338031.0,
            "ask_depth_notional": 661115.5,
            "mid_price": 0.2275
          },
          {
            "bucket": "14:00",
            "spread_pct": 0.021978021978021997,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 364491.0,
            "ask_depth_notional": 661115.5,
            "mid_price": 0.2275
          },
          {
            "bucket": "14:30",
            "spread_pct": 0.021978021978021997,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 357741.0,
            "ask_depth_notional": 653939.5,
            "mid_price": 0.2275
          },
          {
            "bucket": "15:00",
            "spread_pct": 0.021978021978021997,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 364491.0,
            "ask_depth_notional": 660609.5,
            "mid_price": 0.2275
          },
          {
            "bucket": "15:30",
            "spread_pct": 0.021978021978021997,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 342666.0,
            "ask_depth_notional": 665209.5,
            "mid_price": 0.2275
          },
          {
            "bucket": "16:00",
            "spread_pct": 0.021978021978021997,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 300513.5,
            "ask_depth_notional": 658309.5,
            "mid_price": 0.2275
          },
          {
            "bucket": "16:30",
            "spread_pct": 0.021978021978021997,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 285774.5,
            "ask_depth_notional": 655155.5,
            "mid_price": 0.2275
          }
        ],
        "summary": {
          "median_spread_pct": 0.021978021978021997,
          "median_spread_ticks": 1.0000000000000009,
          "median_bid_depth_notional": 330894.0,
          "median_ask_depth_notional": 659459.5,
          "tightest_bucket": "09:00",
          "widest_bucket": "09:00",
          "deepest_bid_bucket": "14:00",
          "thinnest_bid_bucket": "09:00"
        }
      }
    },
    "peer_capacity": {
      "bx_ticket_pct_adv_50k": 34.8,
      "peers": [
        {
          "ticker": "ITS",
          "pct": 196.7
        },
        {
          "ticker": "S71",
          "pct": 1020.6
        },
        {
          "ticker": "42F",
          "pct": 1135.6
        },
        {
          "ticker": "LVR",
          "pct": 9213.6
        },
        {
          "ticker": "U77",
          "pct": 22335.6
        },
        {
          "ticker": "NXR",
          "pct": null
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
          "n_trades": 27,
          "n_runs": 14,
          "n_trade_days": 1,
          "first_trade_date": "2026-04-10",
          "last_trade_date": "2026-04-10",
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
            "retail_pct": 0.4074074074074074,
            "mixed_pct": 0.037037037037037035,
            "instit_pct": 0.5555555555555556,
            "ambiguous_pct": 0.0,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.0,
            "retail_qty_pct": 0.057917688743526846,
            "mixed_qty_pct": 0.1362769146906514,
            "instit_qty_pct": 0.8058053965658217,
            "ambiguous_qty_pct": 0.0,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.0,
            "retail_notional_pct": 0.05841089773567259,
            "mixed_notional_pct": 0.1387862239587262,
            "instit_notional_pct": 0.8028028783056013,
            "ambiguous_notional_pct": 0.0,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.0
          },
          "run_composition": {
            "retail_pct": 0.7857142857142857,
            "mixed_pct": 0.07142857142857142,
            "instit_pct": 0.14285714285714285,
            "ambiguous_pct": 0.0,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.0,
            "retail_notional_pct": 0.05841089773567259,
            "mixed_notional_pct": 0.1387862239587262,
            "instit_notional_pct": 0.8028028783056013,
            "unclear_notional_pct": 0.0
          },
          "counts": {
            "trades": {
              "retail": 11,
              "mixed": 1,
              "institutional": 15,
              "ambiguous": 0,
              "unobservable": 0,
              "unclear": 0
            },
            "runs": {
              "retail": 11,
              "mixed": 1,
              "institutional": 2,
              "ambiguous": 0,
              "unobservable": 0,
              "unclear": 0
            }
          },
          "confidence": {
            "high": 0.0,
            "medium": 0.0,
            "low": 0.9285714285714286,
            "na": 0.07142857142857142
          },
          "confidence_counts": {
            "high": 0,
            "medium": 0,
            "low": 13,
            "na": 1
          },
          "trade_confidence": {
            "high": 0.0,
            "medium": 0.0,
            "low": 0.9629629629629629,
            "na": 0.037037037037037035
          },
          "trade_confidence_counts": {
            "high": 0,
            "medium": 0,
            "low": 26,
            "na": 1
          },
          "observability": {
            "avg_feature_coverage": 0.8607142857142857,
            "observable_run_pct": 1.0,
            "ambiguous_run_pct": 0.0,
            "unobservable_run_pct": 0.0
          },
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "dominant_share": 0.7857142857142857,
          "dominance_gap": 0.6428571428571428,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "MULTI_FILL_SINGLE_PRICE": 15,
              "SINGLE_FILL": 12
            },
            "d2_information": {
              "NEUTRAL_OR_REVERSING": 27
            },
            "d3_urgency": {
              "IMMEDIATE": 14
            },
            "participant_confidence": {
              "LOW": 13,
              "NA": 1
            }
          },
          "trade_size": {
            "avg": 6137.87037037037,
            "median": 1350.0
          },
          "run_size": {
            "avg": 11837.32142857143,
            "median": 1150.0,
            "avg_length": 1.0714285714285714
          },
          "recent_trades": [
            {
              "trade_id": "BMLL-28",
              "timestamp": "2026-04-10T08:43:12.263600",
              "price": 0.23,
              "size": 200.0,
              "notional": 46.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1330,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-27",
              "timestamp": "2026-04-10T08:41:55.434500",
              "price": 0.225,
              "size": 2000.0,
              "notional": 450.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1329,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-26",
              "timestamp": "2026-04-10T08:16:02.752900",
              "price": 0.225,
              "size": 17200.0,
              "notional": 3870.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1328,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-25",
              "timestamp": "2026-04-10T08:16:02.752900",
              "price": 0.225,
              "size": 30000.0,
              "notional": 6750.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1328,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-24",
              "timestamp": "2026-04-10T08:16:02.752900",
              "price": 0.225,
              "size": 30400.0,
              "notional": 6840.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1328,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-23",
              "timestamp": "2026-04-10T08:16:02.722800",
              "price": 0.225,
              "size": 13800.0,
              "notional": 3105.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1328,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-22",
              "timestamp": "2026-04-10T08:16:02.722800",
              "price": 0.225,
              "size": 8600.0,
              "notional": 1935.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1328,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-21",
              "timestamp": "2026-04-10T08:15:55.492300",
              "price": 0.225,
              "size": 191400.0,
              "notional": 43065.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1327,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-20",
              "timestamp": "2026-04-10T08:15:55.492200",
              "price": 0.225,
              "size": 4000.0,
              "notional": 900.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1327,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-19",
              "timestamp": "2026-04-10T08:15:55.492200",
              "price": 0.225,
              "size": 2000.0,
              "notional": 450.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1327,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-18",
              "timestamp": "2026-04-10T08:15:55.492200",
              "price": 0.225,
              "size": 2000.0,
              "notional": 450.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1327,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-17",
              "timestamp": "2026-04-10T08:15:55.492200",
              "price": 0.225,
              "size": 6000.0,
              "notional": 1350.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1327,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-16",
              "timestamp": "2026-04-10T08:15:55.492200",
              "price": 0.225,
              "size": 10000.0,
              "notional": 2250.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1327,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-15",
              "timestamp": "2026-04-10T08:15:55.492200",
              "price": 0.225,
              "size": 100000.0,
              "notional": 22500.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1327,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-14",
              "timestamp": "2026-04-10T08:15:55.492200",
              "price": 0.225,
              "size": 123000.0,
              "notional": 27675.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1327,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-13",
              "timestamp": "2026-04-10T08:15:55.492200",
              "price": 0.225,
              "size": 15000.0,
              "notional": 3375.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1327,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-12",
              "timestamp": "2026-04-10T08:15:55.492200",
              "price": 0.225,
              "size": 37900.0,
              "notional": 8527.5,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1327,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-11",
              "timestamp": "2026-04-10T07:38:38.802200",
              "price": 0.225,
              "size": 17000.0,
              "notional": 3825.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1326,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-10",
              "timestamp": "2026-04-10T07:05:50.077200",
              "price": 0.23,
              "size": 1000.0,
              "notional": 230.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1325,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-9",
              "timestamp": "2026-04-10T06:58:20.689800",
              "price": 0.23,
              "size": 1200.0,
              "notional": 276.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1324,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-7",
              "timestamp": "2026-04-10T03:04:04.646000",
              "price": 0.23,
              "size": 5000.0,
              "notional": 1150.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1323,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-6",
              "timestamp": "2026-04-10T02:35:03.615700",
              "price": 0.23,
              "size": 5000.0,
              "notional": 1150.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1322,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-5",
              "timestamp": "2026-04-10T02:31:32.824000",
              "price": 0.23,
              "size": 5000.0,
              "notional": 1150.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1321,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-4",
              "timestamp": "2026-04-10T01:56:10.111500",
              "price": 0.23,
              "size": 100000.0,
              "notional": 23000.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 1320,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-3",
              "timestamp": "2026-04-10T01:54:12.093400",
              "price": 0.23,
              "size": 800.0,
              "notional": 184.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1319,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-2",
              "timestamp": "2026-04-10T01:39:30.369600",
              "price": 0.23,
              "size": 5000.0,
              "notional": 1150.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1318,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-1",
              "timestamp": "2026-04-10T01:17:15.237300",
              "price": 0.23,
              "size": 300.0,
              "notional": 69.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1317,
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
              "retail_pct": 0.4074074074074074,
              "mixed_pct": 0.037037037037037035,
              "instit_pct": 0.5555555555555556,
              "ambiguous_pct": 0.0,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.0,
              "retail_qty_pct": 0.057917688743526846,
              "mixed_qty_pct": 0.1362769146906514,
              "instit_qty_pct": 0.8058053965658217,
              "ambiguous_qty_pct": 0.0,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.0,
              "retail_notional_pct": 0.05841089773567259,
              "mixed_notional_pct": 0.1387862239587262,
              "instit_notional_pct": 0.8028028783056013,
              "ambiguous_notional_pct": 0.0,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.0,
              "run_retail_pct": 0.7857142857142857,
              "run_mixed_pct": 0.07142857142857142,
              "run_instit_pct": 0.14285714285714285,
              "run_unclear_pct": 0.0,
              "avg_trade_size": 6137.87037037037,
              "avg_run_notional": 11837.32142857143,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.9285714285714286,
              "na_confidence_pct": 0.07142857142857142,
              "avg_feature_coverage": 0.8607142857142857,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "42F",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.0,
              "mixed_pct": 0.0,
              "instit_pct": 1.0,
              "ambiguous_pct": 0.0,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.0,
              "retail_qty_pct": 0.0,
              "mixed_qty_pct": 0.0,
              "instit_qty_pct": 1.0,
              "ambiguous_qty_pct": 0.0,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.0,
              "retail_notional_pct": 0.0,
              "mixed_notional_pct": 0.0,
              "instit_notional_pct": 1.0,
              "ambiguous_notional_pct": 0.0,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.0,
              "run_retail_pct": 0.0,
              "run_mixed_pct": 0.0,
              "run_instit_pct": 1.0,
              "run_unclear_pct": 0.0,
              "avg_trade_size": 19597.95,
              "avg_run_notional": 78391.8,
              "dominant_bucket": "INSTITUTIONAL",
              "dominant_label": "Institution-led",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 1.0,
              "na_confidence_pct": 0.0,
              "avg_feature_coverage": 0.7,
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
              "retail_pct": 0.06666666666666667,
              "mixed_pct": 0.0,
              "instit_pct": 0.3333333333333333,
              "ambiguous_pct": 0.2,
              "unobservable_pct": 0.4,
              "unclear_pct": 0.6000000000000001,
              "retail_qty_pct": 0.020161290322580645,
              "mixed_qty_pct": 0.0,
              "instit_qty_pct": 0.4032258064516129,
              "ambiguous_qty_pct": 0.06048387096774194,
              "unobservable_qty_pct": 0.5161290322580645,
              "unclear_qty_pct": 0.5766129032258065,
              "retail_notional_pct": 0.01968399212640315,
              "mixed_notional_pct": 0.0,
              "instit_notional_pct": 0.40586263765494496,
              "ambiguous_notional_pct": 0.061046975581209764,
              "unobservable_notional_pct": 0.5134063946374422,
              "unclear_notional_pct": 0.574453370218652,
              "run_retail_pct": 0.2,
              "run_mixed_pct": 0.0,
              "run_instit_pct": 0.2,
              "run_unclear_pct": 0.6000000000000001,
              "avg_trade_size": 1253.1333333333334,
              "avg_run_notional": 3759.4,
              "dominant_bucket": "UNOBSERVABLE",
              "dominant_label": "Not Observable",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.4,
              "na_confidence_pct": 0.6,
              "avg_feature_coverage": 0.7500000000000001,
              "observable_run_pct": 0.6,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "S71",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.19008264462809918,
              "mixed_pct": 0.09090909090909091,
              "instit_pct": 0.17355371900826447,
              "ambiguous_pct": 0.4214876033057851,
              "unobservable_pct": 0.12396694214876033,
              "unclear_pct": 0.5454545454545454,
              "retail_qty_pct": 0.08570029382957885,
              "mixed_qty_pct": 0.08178256611165524,
              "instit_qty_pct": 0.33920992491021873,
              "ambiguous_qty_pct": 0.3881815213842638,
              "unobservable_qty_pct": 0.10512569376428338,
              "unclear_qty_pct": 0.4933072151485472,
              "retail_notional_pct": 0.085991322595664,
              "mixed_notional_pct": 0.08170660117003259,
              "instit_notional_pct": 0.34009217211759707,
              "ambiguous_notional_pct": 0.3882463681081774,
              "unobservable_notional_pct": 0.10396353600852895,
              "unclear_notional_pct": 0.4922099041167064,
              "run_retail_pct": 0.3333333333333333,
              "run_mixed_pct": 0.07936507936507936,
              "run_instit_pct": 0.12698412698412698,
              "run_unclear_pct": 0.4603174603174603,
              "avg_trade_size": 2449.603305785124,
              "avg_run_notional": 4704.793650793651,
              "dominant_bucket": "AMBIGUOUS",
              "dominant_label": "Mixed, mostly unclassified",
              "high_confidence_pct": 0.06349206349206349,
              "medium_confidence_pct": 0.25396825396825395,
              "low_confidence_pct": 0.14285714285714285,
              "na_confidence_pct": 0.5396825396825397,
              "avg_feature_coverage": 0.8142857142857146,
              "observable_run_pct": 0.9682539682539683,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "ITS",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.3253012048192771,
              "mixed_pct": 0.16265060240963855,
              "instit_pct": 0.14457831325301204,
              "ambiguous_pct": 0.3674698795180723,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.3674698795180723,
              "retail_qty_pct": 0.04519119351100811,
              "mixed_qty_pct": 0.08829663962920047,
              "instit_qty_pct": 0.3144843568945539,
              "ambiguous_qty_pct": 0.5520278099652376,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.5520278099652376,
              "retail_notional_pct": 0.04518537267215294,
              "mixed_notional_pct": 0.08863319720259309,
              "instit_notional_pct": 0.3130779000750201,
              "ambiguous_notional_pct": 0.5531035300502338,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.5531035300502338,
              "run_retail_pct": 0.65,
              "run_mixed_pct": 0.1,
              "run_instit_pct": 0.05,
              "run_unclear_pct": 0.2,
              "avg_trade_size": 2641.8614457831327,
              "avg_run_notional": 5481.8625,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.025,
              "medium_confidence_pct": 0.5,
              "low_confidence_pct": 0.175,
              "na_confidence_pct": 0.3,
              "avg_feature_coverage": 0.8349999999999997,
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
              "retail_pct": 0.0,
              "mixed_pct": 0.2,
              "instit_pct": 0.0,
              "ambiguous_pct": 0.6,
              "unobservable_pct": 0.2,
              "unclear_pct": 0.8,
              "retail_qty_pct": 0.0,
              "mixed_qty_pct": 0.1044932079414838,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": 0.7304075235109718,
              "unobservable_qty_pct": 0.16509926854754442,
              "unclear_qty_pct": 0.8955067920585162,
              "retail_notional_pct": 0.0,
              "mixed_notional_pct": 0.1071436037881797,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": 0.728576505759622,
              "unobservable_notional_pct": 0.1642798904521983,
              "unclear_notional_pct": 0.8928563962118202,
              "run_retail_pct": 0.0,
              "run_mixed_pct": 0.16666666666666666,
              "run_instit_pct": 0.0,
              "run_unclear_pct": 0.8333333333333333,
              "avg_trade_size": 1913.3200000000002,
              "avg_run_notional": 3188.866666666667,
              "dominant_bucket": "AMBIGUOUS",
              "dominant_label": "Unclassified Flow",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.0,
              "na_confidence_pct": 1.0,
              "avg_feature_coverage": 0.7583333333333334,
              "observable_run_pct": 0.8333333333333334,
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
          "n_trades": 399,
          "n_runs": 221,
          "n_trade_days": 5,
          "first_trade_date": "2026-04-06",
          "last_trade_date": "2026-04-10",
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
            "retail_pct": 0.40601503759398494,
            "mixed_pct": 0.05263157894736842,
            "instit_pct": 0.3182957393483709,
            "ambiguous_pct": 0.22305764411027568,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.22305764411027568,
            "retail_qty_pct": 0.07069426291867428,
            "mixed_qty_pct": 0.06938727737354428,
            "instit_qty_pct": 0.6475820767415095,
            "ambiguous_qty_pct": 0.21233638296627197,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.21233638296627197,
            "retail_notional_pct": 0.07116679010549133,
            "mixed_notional_pct": 0.06992704439670994,
            "instit_notional_pct": 0.6467736855937117,
            "ambiguous_notional_pct": 0.21213247990408696,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.21213247990408696
          },
          "run_composition": {
            "retail_pct": 0.7058823529411765,
            "mixed_pct": 0.049773755656108594,
            "instit_pct": 0.13574660633484162,
            "ambiguous_pct": 0.1085972850678733,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.1085972850678733,
            "retail_notional_pct": 0.07116679010549133,
            "mixed_notional_pct": 0.06992704439670994,
            "instit_notional_pct": 0.6467736855937117,
            "unclear_notional_pct": 0.21213247990408696
          },
          "counts": {
            "trades": {
              "retail": 162,
              "mixed": 21,
              "institutional": 127,
              "ambiguous": 89,
              "unobservable": 0,
              "unclear": 89
            },
            "runs": {
              "retail": 156,
              "mixed": 11,
              "institutional": 30,
              "ambiguous": 24,
              "unobservable": 0,
              "unclear": 24
            }
          },
          "confidence": {
            "high": 0.21266968325791855,
            "medium": 0.4434389140271493,
            "low": 0.18552036199095023,
            "na": 0.1583710407239819
          },
          "confidence_counts": {
            "high": 47,
            "medium": 98,
            "low": 41,
            "na": 35
          },
          "trade_confidence": {
            "high": 0.15288220551378445,
            "medium": 0.38596491228070173,
            "low": 0.18546365914786966,
            "na": 0.2756892230576441
          },
          "trade_confidence_counts": {
            "high": 61,
            "medium": 154,
            "low": 74,
            "na": 110
          },
          "observability": {
            "avg_feature_coverage": 0.8432126696832576,
            "observable_run_pct": 1.0,
            "ambiguous_run_pct": 0.1085972850678733,
            "unobservable_run_pct": 0.0
          },
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "dominant_share": 0.7058823529411765,
          "dominance_gap": 0.5701357466063349,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "MULTI_FILL_SINGLE_PRICE": 214,
              "SINGLE_FILL": 185
            },
            "d2_information": {
              "NEUTRAL_OR_REVERSING": 286,
              "PERSISTENT_POSITIVE_IMPACT": 64,
              "MOMENTUM_REACTIVE": 46,
              "SHORT_HORIZON_POSITIVE_IMPACT": 2,
              "UNOBSERVABLE": 1
            },
            "d3_urgency": {
              "IMMEDIATE": 221
            },
            "participant_confidence": {
              "MEDIUM": 98,
              "HIGH": 47,
              "LOW": 41,
              "NA": 35
            }
          },
          "trade_size": {
            "avg": 2884.8182957393483,
            "median": 616.0
          },
          "run_size": {
            "avg": 5208.337104072398,
            "median": 299.0,
            "avg_length": 1.0588235294117647
          },
          "recent_trades": [
            {
              "trade_id": "BMLL-28",
              "timestamp": "2026-04-10T08:43:12.263600",
              "price": 0.23,
              "size": 200.0,
              "notional": 46.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1330,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-27",
              "timestamp": "2026-04-10T08:41:55.434500",
              "price": 0.225,
              "size": 2000.0,
              "notional": 450.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1329,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-26",
              "timestamp": "2026-04-10T08:16:02.752900",
              "price": 0.225,
              "size": 17200.0,
              "notional": 3870.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1328,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-25",
              "timestamp": "2026-04-10T08:16:02.752900",
              "price": 0.225,
              "size": 30000.0,
              "notional": 6750.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1328,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-24",
              "timestamp": "2026-04-10T08:16:02.752900",
              "price": 0.225,
              "size": 30400.0,
              "notional": 6840.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1328,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-23",
              "timestamp": "2026-04-10T08:16:02.722800",
              "price": 0.225,
              "size": 13800.0,
              "notional": 3105.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1328,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-22",
              "timestamp": "2026-04-10T08:16:02.722800",
              "price": 0.225,
              "size": 8600.0,
              "notional": 1935.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1328,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-21",
              "timestamp": "2026-04-10T08:15:55.492300",
              "price": 0.225,
              "size": 191400.0,
              "notional": 43065.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1327,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-20",
              "timestamp": "2026-04-10T08:15:55.492200",
              "price": 0.225,
              "size": 4000.0,
              "notional": 900.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1327,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-19",
              "timestamp": "2026-04-10T08:15:55.492200",
              "price": 0.225,
              "size": 2000.0,
              "notional": 450.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1327,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-18",
              "timestamp": "2026-04-10T08:15:55.492200",
              "price": 0.225,
              "size": 2000.0,
              "notional": 450.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1327,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-17",
              "timestamp": "2026-04-10T08:15:55.492200",
              "price": 0.225,
              "size": 6000.0,
              "notional": 1350.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1327,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-16",
              "timestamp": "2026-04-10T08:15:55.492200",
              "price": 0.225,
              "size": 10000.0,
              "notional": 2250.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1327,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-15",
              "timestamp": "2026-04-10T08:15:55.492200",
              "price": 0.225,
              "size": 100000.0,
              "notional": 22500.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1327,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-14",
              "timestamp": "2026-04-10T08:15:55.492200",
              "price": 0.225,
              "size": 123000.0,
              "notional": 27675.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1327,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-13",
              "timestamp": "2026-04-10T08:15:55.492200",
              "price": 0.225,
              "size": 15000.0,
              "notional": 3375.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1327,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-12",
              "timestamp": "2026-04-10T08:15:55.492200",
              "price": 0.225,
              "size": 37900.0,
              "notional": 8527.5,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1327,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-11",
              "timestamp": "2026-04-10T07:38:38.802200",
              "price": 0.225,
              "size": 17000.0,
              "notional": 3825.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1326,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-10",
              "timestamp": "2026-04-10T07:05:50.077200",
              "price": 0.23,
              "size": 1000.0,
              "notional": 230.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1325,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-9",
              "timestamp": "2026-04-10T06:58:20.689800",
              "price": 0.23,
              "size": 1200.0,
              "notional": 276.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1324,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-7",
              "timestamp": "2026-04-10T03:04:04.646000",
              "price": 0.23,
              "size": 5000.0,
              "notional": 1150.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1323,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-6",
              "timestamp": "2026-04-10T02:35:03.615700",
              "price": 0.23,
              "size": 5000.0,
              "notional": 1150.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1322,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-5",
              "timestamp": "2026-04-10T02:31:32.824000",
              "price": 0.23,
              "size": 5000.0,
              "notional": 1150.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1321,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-4",
              "timestamp": "2026-04-10T01:56:10.111500",
              "price": 0.23,
              "size": 100000.0,
              "notional": 23000.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 1320,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-3",
              "timestamp": "2026-04-10T01:54:12.093400",
              "price": 0.23,
              "size": 800.0,
              "notional": 184.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1319,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-2",
              "timestamp": "2026-04-10T01:39:30.369600",
              "price": 0.23,
              "size": 5000.0,
              "notional": 1150.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1318,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-1",
              "timestamp": "2026-04-10T01:17:15.237300",
              "price": 0.23,
              "size": 300.0,
              "notional": 69.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1317,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-52",
              "timestamp": "2026-04-09T08:22:41.755600",
              "price": 0.23,
              "size": 300.0,
              "notional": 69.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1316,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-51",
              "timestamp": "2026-04-09T07:27:40.070400",
              "price": 0.23,
              "size": 30000.0,
              "notional": 6900.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 1315,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-50",
              "timestamp": "2026-04-09T07:27:40.070400",
              "price": 0.23,
              "size": 4200.0,
              "notional": 966.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 1315,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            }
          ],
          "peer_comparison": [
            {
              "ticker": "TKU",
              "currency": "SGD",
              "is_target": true,
              "retail_pct": 0.40601503759398494,
              "mixed_pct": 0.05263157894736842,
              "instit_pct": 0.3182957393483709,
              "ambiguous_pct": 0.22305764411027568,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.22305764411027568,
              "retail_qty_pct": 0.07069426291867428,
              "mixed_qty_pct": 0.06938727737354428,
              "instit_qty_pct": 0.6475820767415095,
              "ambiguous_qty_pct": 0.21233638296627197,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.21233638296627197,
              "retail_notional_pct": 0.07116679010549133,
              "mixed_notional_pct": 0.06992704439670994,
              "instit_notional_pct": 0.6467736855937117,
              "ambiguous_notional_pct": 0.21213247990408696,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.21213247990408696,
              "run_retail_pct": 0.7058823529411765,
              "run_mixed_pct": 0.049773755656108594,
              "run_instit_pct": 0.13574660633484162,
              "run_unclear_pct": 0.1085972850678733,
              "avg_trade_size": 2884.8182957393483,
              "avg_run_notional": 5208.337104072398,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.21266968325791855,
              "medium_confidence_pct": 0.4434389140271493,
              "low_confidence_pct": 0.18552036199095023,
              "na_confidence_pct": 0.1583710407239819,
              "avg_feature_coverage": 0.8432126696832576,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "42F",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.20426829268292682,
              "mixed_pct": 0.07926829268292683,
              "instit_pct": 0.3323170731707317,
              "ambiguous_pct": 0.38414634146341464,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.38414634146341464,
              "retail_qty_pct": 0.0348335068777629,
              "mixed_qty_pct": 0.04349661113731721,
              "instit_qty_pct": 0.571932827352744,
              "ambiguous_qty_pct": 0.34973705463217586,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.34973705463217586,
              "retail_notional_pct": 0.035241913257903434,
              "mixed_notional_pct": 0.044142865452661884,
              "instit_notional_pct": 0.5709330298111229,
              "ambiguous_notional_pct": 0.3496821914783117,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.3496821914783117,
              "run_retail_pct": 0.4230769230769231,
              "run_mixed_pct": 0.08974358974358974,
              "run_instit_pct": 0.11538461538461539,
              "run_unclear_pct": 0.3717948717948718,
              "avg_trade_size": 5560.997256097561,
              "avg_run_notional": 11692.353205128204,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Mixed, leaning retail-like",
              "high_confidence_pct": 0.019230769230769232,
              "medium_confidence_pct": 0.2564102564102564,
              "low_confidence_pct": 0.26282051282051283,
              "na_confidence_pct": 0.46153846153846156,
              "avg_feature_coverage": 0.8346153846153845,
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
              "retail_pct": 0.2923280423280423,
              "mixed_pct": 0.11904761904761904,
              "instit_pct": 0.25793650793650796,
              "ambiguous_pct": 0.3306878306878307,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.3306878306878307,
              "retail_qty_pct": 0.04616895874263261,
              "mixed_qty_pct": 0.0691466643888272,
              "instit_qty_pct": 0.43311693858375333,
              "ambiguous_qty_pct": 0.4515674382847869,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.4515674382847869,
              "retail_notional_pct": 0.046121342339171305,
              "mixed_notional_pct": 0.06952026701377395,
              "instit_notional_pct": 0.43268126331342527,
              "ambiguous_notional_pct": 0.45167712733362947,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.45167712733362947,
              "run_retail_pct": 0.6057142857142858,
              "run_mixed_pct": 0.1,
              "run_instit_pct": 0.09142857142857143,
              "run_unclear_pct": 0.20285714285714285,
              "avg_trade_size": 3154.82208994709,
              "avg_run_notional": 6814.415714285714,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.008571428571428572,
              "medium_confidence_pct": 0.52,
              "low_confidence_pct": 0.16857142857142857,
              "na_confidence_pct": 0.3028571428571429,
              "avg_feature_coverage": 0.8465714285714284,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "S71",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.17894736842105263,
              "mixed_pct": 0.06315789473684211,
              "instit_pct": 0.24210526315789474,
              "ambiguous_pct": 0.4368421052631579,
              "unobservable_pct": 0.07894736842105263,
              "unclear_pct": 0.5157894736842106,
              "retail_qty_pct": 0.0745669381668005,
              "mixed_qty_pct": 0.06894573821268785,
              "instit_qty_pct": 0.39359871515429623,
              "ambiguous_qty_pct": 0.3890099804978777,
              "unobservable_qty_pct": 0.07387862796833773,
              "unclear_qty_pct": 0.46288860846621543,
              "retail_notional_pct": 0.07529968576638088,
              "mixed_notional_pct": 0.06987333669550375,
              "instit_notional_pct": 0.39136875897117585,
              "ambiguous_notional_pct": 0.3887428715521589,
              "unobservable_notional_pct": 0.07471534701478062,
              "unclear_notional_pct": 0.46345821856693953,
              "run_retail_pct": 0.3137254901960784,
              "run_mixed_pct": 0.058823529411764705,
              "run_instit_pct": 0.16666666666666666,
              "run_unclear_pct": 0.46078431372549017,
              "avg_trade_size": 2170.694736842105,
              "avg_run_notional": 4043.450980392157,
              "dominant_bucket": "AMBIGUOUS",
              "dominant_label": "Unclassified Flow",
              "high_confidence_pct": 0.0392156862745098,
              "medium_confidence_pct": 0.1568627450980392,
              "low_confidence_pct": 0.28431372549019607,
              "na_confidence_pct": 0.5196078431372549,
              "avg_feature_coverage": 0.8132352941176468,
              "observable_run_pct": 0.9803921568627451,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "LVR",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.17543859649122806,
              "mixed_pct": 0.12280701754385964,
              "instit_pct": 0.2982456140350877,
              "ambiguous_pct": 0.2982456140350877,
              "unobservable_pct": 0.10526315789473684,
              "unclear_pct": 0.40350877192982454,
              "retail_qty_pct": 0.11431792559188275,
              "mixed_qty_pct": 0.28252536640360765,
              "instit_qty_pct": 0.33528748590755353,
              "ambiguous_qty_pct": 0.23900789177001128,
              "unobservable_qty_pct": 0.028861330326944757,
              "unclear_qty_pct": 0.267869222096956,
              "retail_notional_pct": 0.11424947617204152,
              "mixed_notional_pct": 0.2821320061518717,
              "instit_notional_pct": 0.334814562643196,
              "ambiguous_notional_pct": 0.239730185294255,
              "unobservable_notional_pct": 0.029073769738635832,
              "unclear_notional_pct": 0.26880395503289084,
              "run_retail_pct": 0.3333333333333333,
              "run_mixed_pct": 0.2,
              "run_instit_pct": 0.16666666666666666,
              "run_unclear_pct": 0.3,
              "avg_trade_size": 5823.359649122807,
              "avg_run_notional": 11064.383333333333,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Mixed, leaning retail-like",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.5,
              "na_confidence_pct": 0.5,
              "avg_feature_coverage": 0.8133333333333337,
              "observable_run_pct": 0.9333333333333333,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "U77",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.1,
              "mixed_pct": 0.1,
              "instit_pct": 0.06666666666666667,
              "ambiguous_pct": 0.43333333333333335,
              "unobservable_pct": 0.3,
              "unclear_pct": 0.7333333333333334,
              "retail_qty_pct": 0.0027624309392265192,
              "mixed_qty_pct": 0.08287292817679558,
              "instit_qty_pct": 0.03314917127071823,
              "ambiguous_qty_pct": 0.585635359116022,
              "unobservable_qty_pct": 0.2955801104972376,
              "unclear_qty_pct": 0.8812154696132597,
              "retail_notional_pct": 0.0026991068978334198,
              "mixed_notional_pct": 0.08482907393190747,
              "instit_notional_pct": 0.032180857530925096,
              "ambiguous_notional_pct": 0.5839484772799116,
              "unobservable_notional_pct": 0.29634248435942245,
              "unclear_notional_pct": 0.8802909616393341,
              "run_retail_pct": 0.15789473684210525,
              "run_mixed_pct": 0.10526315789473684,
              "run_instit_pct": 0.05263157894736842,
              "run_unclear_pct": 0.6842105263157894,
              "avg_trade_size": 959.5766666666667,
              "avg_run_notional": 1515.121052631579,
              "dominant_bucket": "AMBIGUOUS",
              "dominant_label": "Unclassified Flow",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.21052631578947367,
              "na_confidence_pct": 0.7894736842105263,
              "avg_feature_coverage": 0.7710526315789473,
              "observable_run_pct": 0.8421052631578947,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "NXR",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.2,
              "mixed_pct": 0.2,
              "instit_pct": 0.0,
              "ambiguous_pct": 0.6,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.6,
              "retail_qty_pct": 0.13978494623655913,
              "mixed_qty_pct": 0.17634408602150536,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": 0.6838709677419355,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.6838709677419355,
              "retail_notional_pct": 0.14068846917899605,
              "mixed_notional_pct": 0.17748391496427196,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": 0.681827615856732,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.681827615856732,
              "run_retail_pct": 0.25,
              "run_mixed_pct": 0.25,
              "run_instit_pct": 0.0,
              "run_unclear_pct": 0.5,
              "avg_trade_size": 3372.7,
              "avg_run_notional": 4215.875,
              "dominant_bucket": "AMBIGUOUS",
              "dominant_label": "Unclassified Flow",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.25,
              "na_confidence_pct": 0.75,
              "avg_feature_coverage": 0.8125000000000001,
              "observable_run_pct": 1.0,
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
              "avg_trade_size": 700.0,
              "avg_run_notional": 1166.6666666666667,
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
          "n_trades": 589,
          "n_runs": 318,
          "n_trade_days": 10,
          "first_trade_date": "2026-03-27",
          "last_trade_date": "2026-04-10",
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
            "retail_pct": 0.3616298811544992,
            "mixed_pct": 0.06112054329371817,
            "instit_pct": 0.3599320882852292,
            "ambiguous_pct": 0.21731748726655348,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.21731748726655348,
            "retail_qty_pct": 0.07833107278951108,
            "mixed_qty_pct": 0.0817283472195311,
            "instit_qty_pct": 0.6137441064393205,
            "ambiguous_qty_pct": 0.22619647355163727,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.22619647355163727,
            "retail_notional_pct": 0.07862212120708631,
            "mixed_notional_pct": 0.08209755625237411,
            "instit_notional_pct": 0.6130931543784122,
            "ambiguous_notional_pct": 0.2261871681621274,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.2261871681621274
          },
          "run_composition": {
            "retail_pct": 0.6257861635220126,
            "mixed_pct": 0.0660377358490566,
            "instit_pct": 0.16666666666666666,
            "ambiguous_pct": 0.14150943396226415,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.14150943396226415,
            "retail_notional_pct": 0.07862212120708631,
            "mixed_notional_pct": 0.08209755625237411,
            "instit_notional_pct": 0.6130931543784122,
            "unclear_notional_pct": 0.2261871681621274
          },
          "counts": {
            "trades": {
              "retail": 213,
              "mixed": 36,
              "institutional": 212,
              "ambiguous": 128,
              "unobservable": 0,
              "unclear": 128
            },
            "runs": {
              "retail": 199,
              "mixed": 21,
              "institutional": 53,
              "ambiguous": 45,
              "unobservable": 0,
              "unclear": 45
            }
          },
          "confidence": {
            "high": 0.14779874213836477,
            "medium": 0.3081761006289308,
            "low": 0.33647798742138363,
            "na": 0.20754716981132076
          },
          "confidence_counts": {
            "high": 47,
            "medium": 98,
            "low": 107,
            "na": 66
          },
          "trade_confidence": {
            "high": 0.1035653650254669,
            "medium": 0.2614601018675722,
            "low": 0.3565365025466893,
            "na": 0.27843803056027167
          },
          "trade_confidence_counts": {
            "high": 61,
            "medium": 154,
            "low": 210,
            "na": 164
          },
          "observability": {
            "avg_feature_coverage": 0.8471698113207546,
            "observable_run_pct": 1.0,
            "ambiguous_run_pct": 0.14150943396226415,
            "unobservable_run_pct": 0.0
          },
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "dominant_share": 0.6257861635220126,
          "dominance_gap": 0.4591194968553459,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "MULTI_FILL_SINGLE_PRICE": 330,
              "SINGLE_FILL": 259
            },
            "d2_information": {
              "NEUTRAL_OR_REVERSING": 432,
              "PERSISTENT_POSITIVE_IMPACT": 105,
              "MOMENTUM_REACTIVE": 49,
              "SHORT_HORIZON_POSITIVE_IMPACT": 2,
              "UNOBSERVABLE": 1
            },
            "d3_urgency": {
              "IMMEDIATE": 318
            },
            "participant_confidence": {
              "LOW": 107,
              "MEDIUM": 98,
              "NA": 66,
              "HIGH": 47
            }
          },
          "trade_size": {
            "avg": 2963.315789473684,
            "median": 1150.0
          },
          "run_size": {
            "avg": 5488.657232704402,
            "median": 874.0,
            "avg_length": 1.0911949685534592
          },
          "recent_trades": [
            {
              "trade_id": "BMLL-28",
              "timestamp": "2026-04-10T08:43:12.263600",
              "price": 0.23,
              "size": 200.0,
              "notional": 46.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1330,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-27",
              "timestamp": "2026-04-10T08:41:55.434500",
              "price": 0.225,
              "size": 2000.0,
              "notional": 450.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1329,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-26",
              "timestamp": "2026-04-10T08:16:02.752900",
              "price": 0.225,
              "size": 17200.0,
              "notional": 3870.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1328,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-25",
              "timestamp": "2026-04-10T08:16:02.752900",
              "price": 0.225,
              "size": 30000.0,
              "notional": 6750.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1328,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-24",
              "timestamp": "2026-04-10T08:16:02.752900",
              "price": 0.225,
              "size": 30400.0,
              "notional": 6840.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1328,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-23",
              "timestamp": "2026-04-10T08:16:02.722800",
              "price": 0.225,
              "size": 13800.0,
              "notional": 3105.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1328,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-22",
              "timestamp": "2026-04-10T08:16:02.722800",
              "price": 0.225,
              "size": 8600.0,
              "notional": 1935.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1328,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-21",
              "timestamp": "2026-04-10T08:15:55.492300",
              "price": 0.225,
              "size": 191400.0,
              "notional": 43065.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1327,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-20",
              "timestamp": "2026-04-10T08:15:55.492200",
              "price": 0.225,
              "size": 4000.0,
              "notional": 900.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1327,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-19",
              "timestamp": "2026-04-10T08:15:55.492200",
              "price": 0.225,
              "size": 2000.0,
              "notional": 450.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1327,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-18",
              "timestamp": "2026-04-10T08:15:55.492200",
              "price": 0.225,
              "size": 2000.0,
              "notional": 450.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1327,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-17",
              "timestamp": "2026-04-10T08:15:55.492200",
              "price": 0.225,
              "size": 6000.0,
              "notional": 1350.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1327,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-16",
              "timestamp": "2026-04-10T08:15:55.492200",
              "price": 0.225,
              "size": 10000.0,
              "notional": 2250.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1327,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-15",
              "timestamp": "2026-04-10T08:15:55.492200",
              "price": 0.225,
              "size": 100000.0,
              "notional": 22500.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1327,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-14",
              "timestamp": "2026-04-10T08:15:55.492200",
              "price": 0.225,
              "size": 123000.0,
              "notional": 27675.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1327,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-13",
              "timestamp": "2026-04-10T08:15:55.492200",
              "price": 0.225,
              "size": 15000.0,
              "notional": 3375.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1327,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-12",
              "timestamp": "2026-04-10T08:15:55.492200",
              "price": 0.225,
              "size": 37900.0,
              "notional": 8527.5,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1327,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-11",
              "timestamp": "2026-04-10T07:38:38.802200",
              "price": 0.225,
              "size": 17000.0,
              "notional": 3825.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1326,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-10",
              "timestamp": "2026-04-10T07:05:50.077200",
              "price": 0.23,
              "size": 1000.0,
              "notional": 230.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1325,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-9",
              "timestamp": "2026-04-10T06:58:20.689800",
              "price": 0.23,
              "size": 1200.0,
              "notional": 276.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1324,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-7",
              "timestamp": "2026-04-10T03:04:04.646000",
              "price": 0.23,
              "size": 5000.0,
              "notional": 1150.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1323,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-6",
              "timestamp": "2026-04-10T02:35:03.615700",
              "price": 0.23,
              "size": 5000.0,
              "notional": 1150.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1322,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-5",
              "timestamp": "2026-04-10T02:31:32.824000",
              "price": 0.23,
              "size": 5000.0,
              "notional": 1150.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1321,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-4",
              "timestamp": "2026-04-10T01:56:10.111500",
              "price": 0.23,
              "size": 100000.0,
              "notional": 23000.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 1320,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-3",
              "timestamp": "2026-04-10T01:54:12.093400",
              "price": 0.23,
              "size": 800.0,
              "notional": 184.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1319,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-2",
              "timestamp": "2026-04-10T01:39:30.369600",
              "price": 0.23,
              "size": 5000.0,
              "notional": 1150.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1318,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-1",
              "timestamp": "2026-04-10T01:17:15.237300",
              "price": 0.23,
              "size": 300.0,
              "notional": 69.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1317,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-52",
              "timestamp": "2026-04-09T08:22:41.755600",
              "price": 0.23,
              "size": 300.0,
              "notional": 69.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1316,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-51",
              "timestamp": "2026-04-09T07:27:40.070400",
              "price": 0.23,
              "size": 30000.0,
              "notional": 6900.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 1315,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-50",
              "timestamp": "2026-04-09T07:27:40.070400",
              "price": 0.23,
              "size": 4200.0,
              "notional": 966.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 1315,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            }
          ],
          "peer_comparison": [
            {
              "ticker": "TKU",
              "currency": "SGD",
              "is_target": true,
              "retail_pct": 0.3616298811544992,
              "mixed_pct": 0.06112054329371817,
              "instit_pct": 0.3599320882852292,
              "ambiguous_pct": 0.21731748726655348,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.21731748726655348,
              "retail_qty_pct": 0.07833107278951108,
              "mixed_qty_pct": 0.0817283472195311,
              "instit_qty_pct": 0.6137441064393205,
              "ambiguous_qty_pct": 0.22619647355163727,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.22619647355163727,
              "retail_notional_pct": 0.07862212120708631,
              "mixed_notional_pct": 0.08209755625237411,
              "instit_notional_pct": 0.6130931543784122,
              "ambiguous_notional_pct": 0.2261871681621274,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.2261871681621274,
              "run_retail_pct": 0.6257861635220126,
              "run_mixed_pct": 0.0660377358490566,
              "run_instit_pct": 0.16666666666666666,
              "run_unclear_pct": 0.14150943396226415,
              "avg_trade_size": 2963.315789473684,
              "avg_run_notional": 5488.657232704402,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.14779874213836477,
              "medium_confidence_pct": 0.3081761006289308,
              "low_confidence_pct": 0.33647798742138363,
              "na_confidence_pct": 0.20754716981132076,
              "avg_feature_coverage": 0.8471698113207546,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "42F",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.21227621483375958,
              "mixed_pct": 0.11508951406649616,
              "instit_pct": 0.3069053708439898,
              "ambiguous_pct": 0.3657289002557545,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.3657289002557545,
              "retail_qty_pct": 0.04051382355891312,
              "mixed_qty_pct": 0.07258226297756872,
              "instit_qty_pct": 0.5410588999223959,
              "ambiguous_qty_pct": 0.34584501354112224,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.34584501354112224,
              "retail_notional_pct": 0.04083010627917822,
              "mixed_notional_pct": 0.07269643342891659,
              "instit_notional_pct": 0.5406831244897776,
              "ambiguous_notional_pct": 0.3457903358021276,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.3457903358021276,
              "run_retail_pct": 0.4010152284263959,
              "run_mixed_pct": 0.1218274111675127,
              "run_instit_pct": 0.1116751269035533,
              "run_unclear_pct": 0.36548223350253806,
              "avg_trade_size": 5151.394117647059,
              "avg_run_notional": 10224.340609137056,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Mixed, leaning retail-like",
              "high_confidence_pct": 0.015228426395939087,
              "medium_confidence_pct": 0.20304568527918782,
              "low_confidence_pct": 0.29441624365482233,
              "na_confidence_pct": 0.4873096446700508,
              "avg_feature_coverage": 0.8347715736040607,
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
              "retail_pct": 0.29292107404393813,
              "mixed_pct": 0.17982099267697316,
              "instit_pct": 0.29739625711960943,
              "ambiguous_pct": 0.22986167615947925,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.22986167615947925,
              "retail_qty_pct": 0.05526650979037585,
              "mixed_qty_pct": 0.0897864899289739,
              "instit_qty_pct": 0.4996869670343905,
              "ambiguous_qty_pct": 0.3552600332462598,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.3552600332462598,
              "retail_notional_pct": 0.05510995868062516,
              "mixed_notional_pct": 0.0898400032762363,
              "instit_notional_pct": 0.4983380644771924,
              "ambiguous_notional_pct": 0.3567119735659461,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.3567119735659461,
              "run_retail_pct": 0.6065428824049514,
              "run_mixed_pct": 0.14942528735632185,
              "run_instit_pct": 0.10256410256410256,
              "run_unclear_pct": 0.14146772767462423,
              "avg_trade_size": 1887.4979658258746,
              "avg_run_notional": 4102.09549071618,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.07250221043324491,
              "medium_confidence_pct": 0.44297082228116713,
              "low_confidence_pct": 0.19363395225464192,
              "na_confidence_pct": 0.29089301503094606,
              "avg_feature_coverage": 0.8666224580017683,
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
              "retail_pct": 0.18181818181818182,
              "mixed_pct": 0.09090909090909091,
              "instit_pct": 0.36363636363636365,
              "ambiguous_pct": 0.36363636363636365,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.36363636363636365,
              "retail_qty_pct": 0.05825242718446602,
              "mixed_qty_pct": 0.07237422771403354,
              "instit_qty_pct": 0.4651368049426302,
              "ambiguous_qty_pct": 0.4042365401588703,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.4042365401588703,
              "retail_notional_pct": 0.059405330077571004,
              "mixed_notional_pct": 0.07382194433139715,
              "instit_notional_pct": 0.4588651695092925,
              "ambiguous_notional_pct": 0.40790755608173934,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.40790755608173934,
              "run_retail_pct": 0.2222222222222222,
              "run_mixed_pct": 0.1111111111111111,
              "run_instit_pct": 0.3333333333333333,
              "run_unclear_pct": 0.3333333333333333,
              "avg_trade_size": 3685.7727272727275,
              "avg_run_notional": 4504.833333333333,
              "dominant_bucket": "INSTITUTIONAL",
              "dominant_label": "Mixed, leaning institution-like",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.5555555555555556,
              "na_confidence_pct": 0.4444444444444444,
              "avg_feature_coverage": 0.8333333333333334,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "S71",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.19314641744548286,
              "mixed_pct": 0.04672897196261682,
              "instit_pct": 0.27102803738317754,
              "ambiguous_pct": 0.4423676012461059,
              "unobservable_pct": 0.04672897196261682,
              "unclear_pct": 0.48909657320872274,
              "retail_qty_pct": 0.05948393499565811,
              "mixed_qty_pct": 0.04087582185833023,
              "instit_qty_pct": 0.44851755365339285,
              "ambiguous_qty_pct": 0.41117727329115494,
              "unobservable_qty_pct": 0.039945416201463836,
              "unclear_qty_pct": 0.4511226894926188,
              "retail_notional_pct": 0.06040669086493801,
              "mixed_notional_pct": 0.042432122764782365,
              "instit_notional_pct": 0.44418011698917853,
              "ambiguous_notional_pct": 0.4112224508643417,
              "unobservable_notional_pct": 0.04175861851675935,
              "unclear_notional_pct": 0.45298106938110105,
              "run_retail_pct": 0.3155080213903743,
              "run_mixed_pct": 0.0427807486631016,
              "run_instit_pct": 0.18181818181818182,
              "run_unclear_pct": 0.45989304812834225,
              "avg_trade_size": 2298.8520249221183,
              "avg_run_notional": 3946.157754010695,
              "dominant_bucket": "AMBIGUOUS",
              "dominant_label": "Unclassified Flow",
              "high_confidence_pct": 0.03208556149732621,
              "medium_confidence_pct": 0.15508021390374332,
              "low_confidence_pct": 0.31016042780748665,
              "na_confidence_pct": 0.5026737967914439,
              "avg_feature_coverage": 0.8163101604278074,
              "observable_run_pct": 0.9893048128342246,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "LVR",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.18478260869565216,
              "mixed_pct": 0.10869565217391304,
              "instit_pct": 0.32608695652173914,
              "ambiguous_pct": 0.2717391304347826,
              "unobservable_pct": 0.10869565217391304,
              "unclear_pct": 0.3804347826086956,
              "retail_qty_pct": 0.11054131054131054,
              "mixed_qty_pct": 0.27806267806267804,
              "instit_qty_pct": 0.34890788224121555,
              "ambiguous_qty_pct": 0.23095916429249763,
              "unobservable_qty_pct": 0.0315289648622982,
              "unclear_qty_pct": 0.2624881291547958,
              "retail_notional_pct": 0.1104801475614553,
              "mixed_notional_pct": 0.2781734559957025,
              "instit_notional_pct": 0.3480856599849027,
              "ambiguous_notional_pct": 0.2316035087853294,
              "unobservable_notional_pct": 0.031657227672610116,
              "unclear_notional_pct": 0.2632607364579395,
              "run_retail_pct": 0.30357142857142855,
              "run_mixed_pct": 0.16071428571428573,
              "run_instit_pct": 0.21428571428571427,
              "run_unclear_pct": 0.3214285714285714,
              "avg_trade_size": 4269.407608695652,
              "avg_run_notional": 7014.026785714285,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Mixed, leaning retail-like",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.5178571428571429,
              "na_confidence_pct": 0.48214285714285715,
              "avg_feature_coverage": 0.8071428571428572,
              "observable_run_pct": 0.9285714285714286,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "U77",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.17857142857142858,
              "mixed_pct": 0.125,
              "instit_pct": 0.14285714285714285,
              "ambiguous_pct": 0.39285714285714285,
              "unobservable_pct": 0.16071428571428573,
              "unclear_pct": 0.5535714285714286,
              "retail_qty_pct": 0.06147968044459882,
              "mixed_qty_pct": 0.1358110455019104,
              "instit_qty_pct": 0.19798541160125044,
              "ambiguous_qty_pct": 0.45606113233761725,
              "unobservable_qty_pct": 0.14866273011462314,
              "unclear_qty_pct": 0.6047238624522404,
              "retail_notional_pct": 0.06121760697843129,
              "mixed_notional_pct": 0.13750292026833094,
              "instit_notional_pct": 0.19647389675336424,
              "ambiguous_notional_pct": 0.4549558490559409,
              "unobservable_notional_pct": 0.14984972694393262,
              "unclear_notional_pct": 0.6048055759998735,
              "run_retail_pct": 0.20588235294117646,
              "run_mixed_pct": 0.17647058823529413,
              "run_instit_pct": 0.08823529411764706,
              "run_unclear_pct": 0.5294117647058824,
              "avg_trade_size": 1016.6017857142857,
              "avg_run_notional": 1674.4029411764704,
              "dominant_bucket": "AMBIGUOUS",
              "dominant_label": "Unclassified Flow",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.29411764705882354,
              "na_confidence_pct": 0.7058823529411765,
              "avg_feature_coverage": 0.7926470588235294,
              "observable_run_pct": 0.9117647058823529,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "532",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.11904761904761904,
              "mixed_pct": 0.07142857142857142,
              "instit_pct": 0.0,
              "ambiguous_pct": 0.19047619047619047,
              "unobservable_pct": 0.6190476190476191,
              "unclear_pct": 0.8095238095238095,
              "retail_qty_pct": 0.05151539402531183,
              "mixed_qty_pct": 0.10260778104242646,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": 0.14290777303959118,
              "unobservable_qty_pct": 0.7029690518926706,
              "unclear_qty_pct": 0.8458768249322617,
              "retail_notional_pct": 0.051526237567165886,
              "mixed_notional_pct": 0.10260660797987882,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": 0.1429061392477421,
              "unobservable_notional_pct": 0.7029610152052133,
              "unclear_notional_pct": 0.8458671544529553,
              "run_retail_pct": 0.2,
              "run_mixed_pct": 0.12,
              "run_instit_pct": 0.0,
              "run_unclear_pct": 0.6799999999999999,
              "avg_trade_size": 416.5238095238095,
              "avg_run_notional": 699.76,
              "dominant_bucket": "UNOBSERVABLE",
              "dominant_label": "Not Observable",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.2,
              "na_confidence_pct": 0.8,
              "avg_feature_coverage": 0.7060000000000001,
              "observable_run_pct": 0.52,
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
          "n_trades": 1174,
          "n_runs": 611,
          "n_trade_days": 21,
          "first_trade_date": "2026-03-12",
          "last_trade_date": "2026-04-10",
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
            "retail_pct": 0.30068143100511074,
            "mixed_pct": 0.09540034071550256,
            "instit_pct": 0.38756388415672915,
            "ambiguous_pct": 0.21635434412265758,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.21635434412265758,
            "retail_qty_pct": 0.07016256151708039,
            "mixed_qty_pct": 0.12335302682084541,
            "instit_qty_pct": 0.5701926432189828,
            "ambiguous_qty_pct": 0.23629176844309144,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.23629176844309144,
            "retail_notional_pct": 0.07002555544416632,
            "mixed_notional_pct": 0.1262944967221243,
            "instit_notional_pct": 0.5676801238201074,
            "ambiguous_notional_pct": 0.23599982401360203,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.23599982401360203
          },
          "run_composition": {
            "retail_pct": 0.5482815057283142,
            "mixed_pct": 0.088379705400982,
            "instit_pct": 0.18985270049099837,
            "ambiguous_pct": 0.1734860883797054,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.1734860883797054,
            "retail_notional_pct": 0.07002555544416632,
            "mixed_notional_pct": 0.1262944967221243,
            "instit_notional_pct": 0.5676801238201074,
            "unclear_notional_pct": 0.23599982401360203
          },
          "counts": {
            "trades": {
              "retail": 353,
              "mixed": 112,
              "institutional": 455,
              "ambiguous": 254,
              "unobservable": 0,
              "unclear": 254
            },
            "runs": {
              "retail": 335,
              "mixed": 54,
              "institutional": 116,
              "ambiguous": 106,
              "unobservable": 0,
              "unclear": 106
            }
          },
          "confidence": {
            "high": 0.07692307692307693,
            "medium": 0.23240589198036007,
            "low": 0.4288052373158756,
            "na": 0.2618657937806874
          },
          "confidence_counts": {
            "high": 47,
            "medium": 142,
            "low": 262,
            "na": 160
          },
          "trade_confidence": {
            "high": 0.051959114139693355,
            "medium": 0.18313458262350937,
            "low": 0.45315161839863716,
            "na": 0.31175468483816016
          },
          "trade_confidence_counts": {
            "high": 61,
            "medium": 215,
            "low": 532,
            "na": 366
          },
          "observability": {
            "avg_feature_coverage": 0.8563829787234043,
            "observable_run_pct": 1.0,
            "ambiguous_run_pct": 0.1734860883797054,
            "unobservable_run_pct": 0.0
          },
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "dominant_share": 0.5482815057283142,
          "dominance_gap": 0.3584288052373159,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "MULTI_FILL_SINGLE_PRICE": 613,
              "SINGLE_FILL": 561
            },
            "d2_information": {
              "NEUTRAL_OR_REVERSING": 886,
              "PERSISTENT_POSITIVE_IMPACT": 202,
              "MOMENTUM_REACTIVE": 81,
              "UNOBSERVABLE": 3,
              "SHORT_HORIZON_POSITIVE_IMPACT": 2
            },
            "d3_urgency": {
              "IMMEDIATE": 609,
              "ADAPTIVE": 2
            },
            "participant_confidence": {
              "LOW": 262,
              "NA": 160,
              "MEDIUM": 142,
              "HIGH": 47
            }
          },
          "trade_size": {
            "avg": 3300.936541737649,
            "median": 1343.0
          },
          "run_size": {
            "avg": 6342.552373158756,
            "median": 1610.0,
            "avg_length": 1.2111292962356792
          },
          "recent_trades": [
            {
              "trade_id": "BMLL-28",
              "timestamp": "2026-04-10T08:43:12.263600",
              "price": 0.23,
              "size": 200.0,
              "notional": 46.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1330,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-27",
              "timestamp": "2026-04-10T08:41:55.434500",
              "price": 0.225,
              "size": 2000.0,
              "notional": 450.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1329,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-26",
              "timestamp": "2026-04-10T08:16:02.752900",
              "price": 0.225,
              "size": 17200.0,
              "notional": 3870.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1328,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-25",
              "timestamp": "2026-04-10T08:16:02.752900",
              "price": 0.225,
              "size": 30000.0,
              "notional": 6750.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1328,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-24",
              "timestamp": "2026-04-10T08:16:02.752900",
              "price": 0.225,
              "size": 30400.0,
              "notional": 6840.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1328,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-23",
              "timestamp": "2026-04-10T08:16:02.722800",
              "price": 0.225,
              "size": 13800.0,
              "notional": 3105.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1328,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-22",
              "timestamp": "2026-04-10T08:16:02.722800",
              "price": 0.225,
              "size": 8600.0,
              "notional": 1935.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1328,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-21",
              "timestamp": "2026-04-10T08:15:55.492300",
              "price": 0.225,
              "size": 191400.0,
              "notional": 43065.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1327,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-20",
              "timestamp": "2026-04-10T08:15:55.492200",
              "price": 0.225,
              "size": 4000.0,
              "notional": 900.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1327,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-19",
              "timestamp": "2026-04-10T08:15:55.492200",
              "price": 0.225,
              "size": 2000.0,
              "notional": 450.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1327,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-18",
              "timestamp": "2026-04-10T08:15:55.492200",
              "price": 0.225,
              "size": 2000.0,
              "notional": 450.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1327,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-17",
              "timestamp": "2026-04-10T08:15:55.492200",
              "price": 0.225,
              "size": 6000.0,
              "notional": 1350.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1327,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-16",
              "timestamp": "2026-04-10T08:15:55.492200",
              "price": 0.225,
              "size": 10000.0,
              "notional": 2250.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1327,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-15",
              "timestamp": "2026-04-10T08:15:55.492200",
              "price": 0.225,
              "size": 100000.0,
              "notional": 22500.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1327,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-14",
              "timestamp": "2026-04-10T08:15:55.492200",
              "price": 0.225,
              "size": 123000.0,
              "notional": 27675.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1327,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-13",
              "timestamp": "2026-04-10T08:15:55.492200",
              "price": 0.225,
              "size": 15000.0,
              "notional": 3375.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1327,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-12",
              "timestamp": "2026-04-10T08:15:55.492200",
              "price": 0.225,
              "size": 37900.0,
              "notional": 8527.5,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 1327,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-11",
              "timestamp": "2026-04-10T07:38:38.802200",
              "price": 0.225,
              "size": 17000.0,
              "notional": 3825.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1326,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-10",
              "timestamp": "2026-04-10T07:05:50.077200",
              "price": 0.23,
              "size": 1000.0,
              "notional": 230.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1325,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-9",
              "timestamp": "2026-04-10T06:58:20.689800",
              "price": 0.23,
              "size": 1200.0,
              "notional": 276.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1324,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-7",
              "timestamp": "2026-04-10T03:04:04.646000",
              "price": 0.23,
              "size": 5000.0,
              "notional": 1150.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1323,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-6",
              "timestamp": "2026-04-10T02:35:03.615700",
              "price": 0.23,
              "size": 5000.0,
              "notional": 1150.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1322,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-5",
              "timestamp": "2026-04-10T02:31:32.824000",
              "price": 0.23,
              "size": 5000.0,
              "notional": 1150.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1321,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-4",
              "timestamp": "2026-04-10T01:56:10.111500",
              "price": 0.23,
              "size": 100000.0,
              "notional": 23000.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 1320,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-3",
              "timestamp": "2026-04-10T01:54:12.093400",
              "price": 0.23,
              "size": 800.0,
              "notional": 184.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1319,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-2",
              "timestamp": "2026-04-10T01:39:30.369600",
              "price": 0.23,
              "size": 5000.0,
              "notional": 1150.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1318,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-1",
              "timestamp": "2026-04-10T01:17:15.237300",
              "price": 0.23,
              "size": 300.0,
              "notional": 69.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1317,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-52",
              "timestamp": "2026-04-09T08:22:41.755600",
              "price": 0.23,
              "size": 300.0,
              "notional": 69.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": 1316,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-51",
              "timestamp": "2026-04-09T07:27:40.070400",
              "price": 0.23,
              "size": 30000.0,
              "notional": 6900.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 1315,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-50",
              "timestamp": "2026-04-09T07:27:40.070400",
              "price": 0.23,
              "size": 4200.0,
              "notional": 966.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 1315,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            }
          ],
          "peer_comparison": [
            {
              "ticker": "TKU",
              "currency": "SGD",
              "is_target": true,
              "retail_pct": 0.30068143100511074,
              "mixed_pct": 0.09540034071550256,
              "instit_pct": 0.38756388415672915,
              "ambiguous_pct": 0.21635434412265758,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.21635434412265758,
              "retail_qty_pct": 0.07016256151708039,
              "mixed_qty_pct": 0.12335302682084541,
              "instit_qty_pct": 0.5701926432189828,
              "ambiguous_qty_pct": 0.23629176844309144,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.23629176844309144,
              "retail_notional_pct": 0.07002555544416632,
              "mixed_notional_pct": 0.1262944967221243,
              "instit_notional_pct": 0.5676801238201074,
              "ambiguous_notional_pct": 0.23599982401360203,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.23599982401360203,
              "run_retail_pct": 0.5482815057283142,
              "run_mixed_pct": 0.088379705400982,
              "run_instit_pct": 0.18985270049099837,
              "run_unclear_pct": 0.1734860883797054,
              "avg_trade_size": 3300.936541737649,
              "avg_run_notional": 6342.552373158756,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.07692307692307693,
              "medium_confidence_pct": 0.23240589198036007,
              "low_confidence_pct": 0.4288052373158756,
              "na_confidence_pct": 0.2618657937806874,
              "avg_feature_coverage": 0.8563829787234043,
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
              "retail_pct": 0.10714285714285714,
              "mixed_pct": 0.07142857142857142,
              "instit_pct": 0.39285714285714285,
              "ambiguous_pct": 0.42857142857142855,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.42857142857142855,
              "retail_qty_pct": 0.00405939536374319,
              "mixed_qty_pct": 0.007531246661681444,
              "instit_qty_pct": 0.9217498130541609,
              "ambiguous_qty_pct": 0.06665954492041448,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.06665954492041448,
              "retail_notional_pct": 0.004002108583353488,
              "mixed_notional_pct": 0.007239566060497226,
              "instit_notional_pct": 0.9227065173472979,
              "ambiguous_notional_pct": 0.06605180800885141,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.06605180800885141,
              "run_retail_pct": 0.125,
              "run_mixed_pct": 0.08333333333333333,
              "run_instit_pct": 0.375,
              "run_unclear_pct": 0.4166666666666667,
              "avg_trade_size": 24661.10714285714,
              "avg_run_notional": 28771.291666666668,
              "dominant_bucket": "AMBIGUOUS",
              "dominant_label": "Mixed, mostly unclassified",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.5,
              "na_confidence_pct": 0.5,
              "avg_feature_coverage": 0.8312500000000002,
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
              "retail_pct": 0.2936267071320182,
              "mixed_pct": 0.15990136570561456,
              "instit_pct": 0.3321320182094082,
              "ambiguous_pct": 0.21301213960546284,
              "unobservable_pct": 0.0013277693474962064,
              "unclear_pct": 0.21433990895295904,
              "retail_qty_pct": 0.0613231112135885,
              "mixed_qty_pct": 0.10701521789255246,
              "instit_qty_pct": 0.5167934824379371,
              "ambiguous_qty_pct": 0.3140323572361848,
              "unobservable_qty_pct": 0.0008358312197371455,
              "unclear_qty_pct": 0.3148681884559219,
              "retail_notional_pct": 0.06144719286732829,
              "mixed_notional_pct": 0.10712912889124697,
              "instit_notional_pct": 0.5162525130977426,
              "ambiguous_notional_pct": 0.31432820232551356,
              "unobservable_notional_pct": 0.0008429628181685985,
              "unclear_notional_pct": 0.31517116514368215,
              "run_retail_pct": 0.6020408163265306,
              "run_mixed_pct": 0.13795918367346938,
              "run_instit_pct": 0.11387755102040817,
              "run_unclear_pct": 0.14612244897959184,
              "avg_trade_size": 1997.029779969651,
              "avg_run_notional": 4297.282040816326,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.1346938775510204,
              "medium_confidence_pct": 0.43387755102040815,
              "low_confidence_pct": 0.1473469387755102,
              "na_confidence_pct": 0.28408163265306124,
              "avg_feature_coverage": 0.8611224489795918,
              "observable_run_pct": 0.9995918367346939,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "42F",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.23119469026548672,
              "mixed_pct": 0.1426991150442478,
              "instit_pct": 0.3064159292035398,
              "ambiguous_pct": 0.3196902654867257,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.3196902654867257,
              "retail_qty_pct": 0.050162370648411204,
              "mixed_qty_pct": 0.13108538959719518,
              "instit_qty_pct": 0.4918711231467764,
              "ambiguous_qty_pct": 0.3268811166076172,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.3268811166076172,
              "retail_notional_pct": 0.0498583117931453,
              "mixed_notional_pct": 0.1296751612738013,
              "instit_notional_pct": 0.49534387476822483,
              "ambiguous_notional_pct": 0.32512265216482855,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.32512265216482855,
              "run_retail_pct": 0.40853658536585363,
              "run_mixed_pct": 0.1443089430894309,
              "run_instit_pct": 0.12601626016260162,
              "run_unclear_pct": 0.32113821138211385,
              "avg_trade_size": 3905.0283185840703,
              "avg_run_notional": 7175.092682926829,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Mixed, leaning retail-like",
              "high_confidence_pct": 0.006097560975609756,
              "medium_confidence_pct": 0.2032520325203252,
              "low_confidence_pct": 0.3252032520325203,
              "na_confidence_pct": 0.4654471544715447,
              "avg_feature_coverage": 0.8390243902439022,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "S71",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.2255278310940499,
              "mixed_pct": 0.0892514395393474,
              "instit_pct": 0.2888675623800384,
              "ambiguous_pct": 0.381957773512476,
              "unobservable_pct": 0.014395393474088292,
              "unclear_pct": 0.3963531669865643,
              "retail_qty_pct": 0.052972212451635595,
              "mixed_qty_pct": 0.033644037988040804,
              "instit_qty_pct": 0.4846465001758706,
              "ambiguous_qty_pct": 0.4174111853675695,
              "unobservable_qty_pct": 0.011326064016883573,
              "unclear_qty_pct": 0.42873724938445307,
              "retail_notional_pct": 0.052771894238398384,
              "mixed_notional_pct": 0.0344242035651993,
              "instit_notional_pct": 0.48667110469748925,
              "ambiguous_notional_pct": 0.41309995889041334,
              "unobservable_notional_pct": 0.013032838608499703,
              "unclear_notional_pct": 0.42613279749891303,
              "run_retail_pct": 0.3850085178875639,
              "run_mixed_pct": 0.06984667802385008,
              "run_instit_pct": 0.1839863713798978,
              "run_unclear_pct": 0.36115843270868825,
              "avg_trade_size": 2269.109404990403,
              "avg_run_notional": 4027.959114139693,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Mixed, leaning retail-like",
              "high_confidence_pct": 0.010221465076660987,
              "medium_confidence_pct": 0.24872231686541738,
              "low_confidence_pct": 0.3100511073253833,
              "na_confidence_pct": 0.43100511073253833,
              "avg_feature_coverage": 0.8372231686541737,
              "observable_run_pct": 0.9965928449744463,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "LVR",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.18652849740932642,
              "mixed_pct": 0.08290155440414508,
              "instit_pct": 0.29533678756476683,
              "ambiguous_pct": 0.38341968911917096,
              "unobservable_pct": 0.05181347150259067,
              "unclear_pct": 0.43523316062176165,
              "retail_qty_pct": 0.10624377755653534,
              "mixed_qty_pct": 0.2139098279049922,
              "instit_qty_pct": 0.34490115204096145,
              "ambiguous_qty_pct": 0.31133551415161426,
              "unobservable_qty_pct": 0.023609728345896742,
              "unclear_qty_pct": 0.334945242497511,
              "retail_notional_pct": 0.10614155162833523,
              "mixed_notional_pct": 0.2121180103187803,
              "instit_notional_pct": 0.3438074582385621,
              "ambiguous_notional_pct": 0.31447185825780727,
              "unobservable_notional_pct": 0.023461121556515085,
              "unclear_notional_pct": 0.33793297981432235,
              "run_retail_pct": 0.2748091603053435,
              "run_mixed_pct": 0.08396946564885496,
              "run_instit_pct": 0.20610687022900764,
              "run_unclear_pct": 0.4351145038167939,
              "avg_trade_size": 2746.1373056994817,
              "avg_run_notional": 4045.835877862595,
              "dominant_bucket": "AMBIGUOUS",
              "dominant_label": "Unclassified Flow",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.48091603053435117,
              "na_confidence_pct": 0.5190839694656488,
              "avg_feature_coverage": 0.820229007633588,
              "observable_run_pct": 0.9694656488549618,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "U77",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.1652892561983471,
              "mixed_pct": 0.09917355371900827,
              "instit_pct": 0.24793388429752067,
              "ambiguous_pct": 0.4132231404958678,
              "unobservable_pct": 0.0743801652892562,
              "unclear_pct": 0.487603305785124,
              "retail_qty_pct": 0.060889659156556905,
              "mixed_qty_pct": 0.09716926632004622,
              "instit_qty_pct": 0.3389948006932409,
              "ambiguous_qty_pct": 0.4534950895436164,
              "unobservable_qty_pct": 0.04945118428653957,
              "unclear_qty_pct": 0.502946273830156,
              "retail_notional_pct": 0.06063492302010626,
              "mixed_notional_pct": 0.09887548497130773,
              "instit_notional_pct": 0.33844567598917386,
              "ambiguous_notional_pct": 0.4527396797123202,
              "unobservable_notional_pct": 0.04930423630709196,
              "unclear_notional_pct": 0.5020439160194121,
              "run_retail_pct": 0.2222222222222222,
              "run_mixed_pct": 0.125,
              "run_instit_pct": 0.1388888888888889,
              "run_unclear_pct": 0.5138888888888888,
              "avg_trade_size": 1429.9644628099174,
              "avg_run_notional": 2403.1347222222225,
              "dominant_bucket": "AMBIGUOUS",
              "dominant_label": "Unclassified Flow",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.3611111111111111,
              "na_confidence_pct": 0.6388888888888888,
              "avg_feature_coverage": 0.7979166666666667,
              "observable_run_pct": 0.9583333333333334,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "532",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.10638297872340426,
              "mixed_pct": 0.06382978723404255,
              "instit_pct": 0.02127659574468085,
              "ambiguous_pct": 0.1702127659574468,
              "unobservable_pct": 0.6382978723404256,
              "unclear_pct": 0.8085106382978724,
              "retail_qty_pct": 0.0484675081612787,
              "mixed_qty_pct": 0.0965370363398749,
              "instit_qty_pct": 0.05378107874087738,
              "ambiguous_qty_pct": 0.13445269685219347,
              "unobservable_qty_pct": 0.6667616799057755,
              "unclear_qty_pct": 0.8012143767579689,
              "retail_notional_pct": 0.04847774293996482,
              "mixed_notional_pct": 0.09653599797785317,
              "instit_notional_pct": 0.05378050026621347,
              "ambiguous_notional_pct": 0.13445125066553368,
              "unobservable_notional_pct": 0.6667545081504348,
              "unclear_notional_pct": 0.8012057588159684,
              "run_retail_pct": 0.17857142857142858,
              "run_mixed_pct": 0.10714285714285714,
              "run_instit_pct": 0.03571428571428571,
              "run_unclear_pct": 0.6785714285714286,
              "avg_trade_size": 395.6191489361702,
              "avg_run_notional": 664.0749999999999,
              "dominant_bucket": "UNOBSERVABLE",
              "dominant_label": "Not Observable",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.21428571428571427,
              "na_confidence_pct": 0.7857142857142857,
              "avg_feature_coverage": 0.6946428571428573,
              "observable_run_pct": 0.5,
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
      "n_trades": 1174,
      "n_runs": 611,
      "n_trade_days": 21,
      "first_trade_date": "2026-03-12",
      "last_trade_date": "2026-04-10",
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
        "retail_pct": 0.30068143100511074,
        "mixed_pct": 0.09540034071550256,
        "instit_pct": 0.38756388415672915,
        "ambiguous_pct": 0.21635434412265758,
        "unobservable_pct": 0.0,
        "unclear_pct": 0.21635434412265758,
        "retail_qty_pct": 0.07016256151708039,
        "mixed_qty_pct": 0.12335302682084541,
        "instit_qty_pct": 0.5701926432189828,
        "ambiguous_qty_pct": 0.23629176844309144,
        "unobservable_qty_pct": 0.0,
        "unclear_qty_pct": 0.23629176844309144,
        "retail_notional_pct": 0.07002555544416632,
        "mixed_notional_pct": 0.1262944967221243,
        "instit_notional_pct": 0.5676801238201074,
        "ambiguous_notional_pct": 0.23599982401360203,
        "unobservable_notional_pct": 0.0,
        "unclear_notional_pct": 0.23599982401360203
      },
      "run_composition": {
        "retail_pct": 0.5482815057283142,
        "mixed_pct": 0.088379705400982,
        "instit_pct": 0.18985270049099837,
        "ambiguous_pct": 0.1734860883797054,
        "unobservable_pct": 0.0,
        "unclear_pct": 0.1734860883797054
      },
      "trade_size": {
        "avg": 3300.936541737649,
        "median": 1343.0
      },
      "run_size": {
        "avg": 6342.552373158756,
        "median": 1610.0,
        "avg_length": 1.2111292962356792
      },
      "confidence": {
        "high": 0.07692307692307693,
        "medium": 0.23240589198036007,
        "low": 0.4288052373158756,
        "na": 0.2618657937806874
      },
      "confidence_counts": {
        "high": 47,
        "medium": 142,
        "low": 262,
        "na": 160
      },
      "trade_confidence": {
        "high": 0.051959114139693355,
        "medium": 0.18313458262350937,
        "low": 0.45315161839863716,
        "na": 0.31175468483816016
      },
      "trade_confidence_counts": {
        "high": 61,
        "medium": 215,
        "low": 532,
        "na": 366
      },
      "counts": {
        "trades": {
          "retail": 353,
          "mixed": 112,
          "institutional": 455,
          "ambiguous": 254,
          "unobservable": 0,
          "unclear": 254
        },
        "runs": {
          "retail": 335,
          "mixed": 54,
          "institutional": 116,
          "ambiguous": 106,
          "unobservable": 0,
          "unclear": 106
        }
      },
      "observability": {
        "avg_feature_coverage": 0.8563829787234043,
        "observable_run_pct": 1.0,
        "ambiguous_run_pct": 0.1734860883797054,
        "unobservable_run_pct": 0.0
      },
      "dominant_bucket": "RETAIL",
      "dominant_label": "Retail-led",
      "dominant_share": 0.5482815057283142,
      "dominance_gap": 0.3584288052373159,
      "over_time": {
        "valid": true,
        "periods": [
          {
            "month": "2026-02",
            "n_trades": 639,
            "n_runs": 333,
            "retail_pct": 0.29577464788732394,
            "mixed_pct": 0.1564945226917058,
            "instit_pct": 0.35524256651017216,
            "ambiguous_pct": 0.19248826291079812,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.19248826291079812,
            "avg_trade_size": 4727.304381846636,
            "avg_run_notional": 9071.313813813815,
            "retail_qty_pct": 0.0735001291376107,
            "mixed_qty_pct": 0.1805510426820632,
            "instit_qty_pct": 0.4962633407483316,
            "ambiguous_qty_pct": 0.24968548743199448,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.24968548743199448,
            "retail_notional_pct": 0.07344953525576037,
            "mixed_notional_pct": 0.1811851205703224,
            "instit_notional_pct": 0.49668699552014856,
            "ambiguous_notional_pct": 0.24867834865376864,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.24867834865376864,
            "run_retail_pct": 0.5405405405405406,
            "run_mixed_pct": 0.13213213213213212,
            "run_instit_pct": 0.16216216216216217,
            "run_ambiguous_pct": 0.16516516516516516,
            "run_unobservable_pct": 0.0,
            "run_unclear_pct": 0.16516516516516516,
            "avg_feature_coverage": 0.8509009009009006,
            "high_confidence_pct": 0.08708708708708708,
            "medium_confidence_pct": 0.37237237237237236,
            "low_confidence_pct": 0.24324324324324326,
            "na_confidence_pct": 0.2972972972972973,
            "total_quantity": null
          },
          {
            "month": "2026-03",
            "n_trades": 1431,
            "n_runs": 745,
            "retail_pct": 0.27113906359189377,
            "mixed_pct": 0.14255765199161424,
            "instit_pct": 0.3941299790356394,
            "ambiguous_pct": 0.19217330538085256,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.19217330538085256,
            "avg_trade_size": 3185.088749126485,
            "avg_run_notional": 6117.935570469798,
            "retail_qty_pct": 0.06899682251475261,
            "mixed_qty_pct": 0.16353083384761333,
            "instit_qty_pct": 0.5271616335232344,
            "ambiguous_qty_pct": 0.24031071011439967,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.24031071011439967,
            "retail_notional_pct": 0.06849428525918512,
            "mixed_notional_pct": 0.16450322541577608,
            "instit_notional_pct": 0.5287911305783282,
            "ambiguous_notional_pct": 0.23821135874671062,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.23821135874671062,
            "run_retail_pct": 0.4966442953020134,
            "run_mixed_pct": 0.13691275167785236,
            "run_instit_pct": 0.19731543624161074,
            "run_ambiguous_pct": 0.1691275167785235,
            "run_unobservable_pct": 0.0,
            "run_unclear_pct": 0.1691275167785235,
            "avg_feature_coverage": 0.8594630872483221,
            "high_confidence_pct": 0.036241610738255034,
            "medium_confidence_pct": 0.23221476510067113,
            "low_confidence_pct": 0.425503355704698,
            "na_confidence_pct": 0.30604026845637583,
            "total_quantity": null
          },
          {
            "month": "2026-04",
            "n_trades": 482,
            "n_runs": 253,
            "retail_pct": 0.3775933609958506,
            "mixed_pct": 0.043568464730290454,
            "instit_pct": 0.34854771784232363,
            "ambiguous_pct": 0.23029045643153526,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.23029045643153526,
            "avg_trade_size": 2909.4626556016597,
            "avg_run_notional": 5542.928853754941,
            "retail_qty_pct": 0.07018558688840684,
            "mixed_qty_pct": 0.05715433437776171,
            "instit_qty_pct": 0.6513858761147264,
            "ambiguous_qty_pct": 0.221274202619105,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.221274202619105,
            "retail_notional_pct": 0.07062625101525213,
            "mixed_notional_pct": 0.057395349699542415,
            "instit_notional_pct": 0.6507382906398567,
            "ambiguous_notional_pct": 0.22124010864534882,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.22124010864534882,
            "run_retail_pct": 0.6758893280632411,
            "run_mixed_pct": 0.043478260869565216,
            "run_instit_pct": 0.15019762845849802,
            "run_ambiguous_pct": 0.13043478260869565,
            "run_unobservable_pct": 0.0,
            "run_unclear_pct": 0.13043478260869565,
            "avg_feature_coverage": 0.8452569169960473,
            "high_confidence_pct": 0.1857707509881423,
            "medium_confidence_pct": 0.38735177865612647,
            "low_confidence_pct": 0.25296442687747034,
            "na_confidence_pct": 0.17391304347826086,
            "total_quantity": null
          }
        ]
      },
      "peer_comparison": [
        {
          "ticker": "TKU",
          "currency": "SGD",
          "is_target": true,
          "retail_pct": 0.30068143100511074,
          "mixed_pct": 0.09540034071550256,
          "instit_pct": 0.38756388415672915,
          "ambiguous_pct": 0.21635434412265758,
          "unobservable_pct": 0.0,
          "unclear_pct": 0.21635434412265758,
          "retail_qty_pct": 0.07016256151708039,
          "mixed_qty_pct": 0.12335302682084541,
          "instit_qty_pct": 0.5701926432189828,
          "ambiguous_qty_pct": 0.23629176844309144,
          "unobservable_qty_pct": 0.0,
          "unclear_qty_pct": 0.23629176844309144,
          "retail_notional_pct": 0.07002555544416632,
          "mixed_notional_pct": 0.1262944967221243,
          "instit_notional_pct": 0.5676801238201074,
          "ambiguous_notional_pct": 0.23599982401360203,
          "unobservable_notional_pct": 0.0,
          "unclear_notional_pct": 0.23599982401360203,
          "run_retail_pct": 0.5482815057283142,
          "run_mixed_pct": 0.088379705400982,
          "run_instit_pct": 0.18985270049099837,
          "run_unclear_pct": 0.1734860883797054,
          "avg_trade_size": 3300.936541737649,
          "avg_run_notional": 6342.552373158756,
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "high_confidence_pct": 0.07692307692307693,
          "medium_confidence_pct": 0.23240589198036007,
          "low_confidence_pct": 0.4288052373158756,
          "na_confidence_pct": 0.2618657937806874,
          "avg_feature_coverage": 0.8563829787234043,
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
          "retail_pct": 0.10714285714285714,
          "mixed_pct": 0.07142857142857142,
          "instit_pct": 0.39285714285714285,
          "ambiguous_pct": 0.42857142857142855,
          "unobservable_pct": 0.0,
          "unclear_pct": 0.42857142857142855,
          "retail_qty_pct": 0.00405939536374319,
          "mixed_qty_pct": 0.007531246661681444,
          "instit_qty_pct": 0.9217498130541609,
          "ambiguous_qty_pct": 0.06665954492041448,
          "unobservable_qty_pct": 0.0,
          "unclear_qty_pct": 0.06665954492041448,
          "retail_notional_pct": 0.004002108583353488,
          "mixed_notional_pct": 0.007239566060497226,
          "instit_notional_pct": 0.9227065173472979,
          "ambiguous_notional_pct": 0.06605180800885141,
          "unobservable_notional_pct": 0.0,
          "unclear_notional_pct": 0.06605180800885141,
          "run_retail_pct": 0.125,
          "run_mixed_pct": 0.08333333333333333,
          "run_instit_pct": 0.375,
          "run_unclear_pct": 0.4166666666666667,
          "avg_trade_size": 24661.10714285714,
          "avg_run_notional": 28771.291666666668,
          "dominant_bucket": "AMBIGUOUS",
          "dominant_label": "Mixed, mostly unclassified",
          "high_confidence_pct": 0.0,
          "medium_confidence_pct": 0.0,
          "low_confidence_pct": 0.5,
          "na_confidence_pct": 0.5,
          "avg_feature_coverage": 0.8312500000000002,
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
          "retail_pct": 0.2936267071320182,
          "mixed_pct": 0.15990136570561456,
          "instit_pct": 0.3321320182094082,
          "ambiguous_pct": 0.21301213960546284,
          "unobservable_pct": 0.0013277693474962064,
          "unclear_pct": 0.21433990895295904,
          "retail_qty_pct": 0.0613231112135885,
          "mixed_qty_pct": 0.10701521789255246,
          "instit_qty_pct": 0.5167934824379371,
          "ambiguous_qty_pct": 0.3140323572361848,
          "unobservable_qty_pct": 0.0008358312197371455,
          "unclear_qty_pct": 0.3148681884559219,
          "retail_notional_pct": 0.06144719286732829,
          "mixed_notional_pct": 0.10712912889124697,
          "instit_notional_pct": 0.5162525130977426,
          "ambiguous_notional_pct": 0.31432820232551356,
          "unobservable_notional_pct": 0.0008429628181685985,
          "unclear_notional_pct": 0.31517116514368215,
          "run_retail_pct": 0.6020408163265306,
          "run_mixed_pct": 0.13795918367346938,
          "run_instit_pct": 0.11387755102040817,
          "run_unclear_pct": 0.14612244897959184,
          "avg_trade_size": 1997.029779969651,
          "avg_run_notional": 4297.282040816326,
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "high_confidence_pct": 0.1346938775510204,
          "medium_confidence_pct": 0.43387755102040815,
          "low_confidence_pct": 0.1473469387755102,
          "na_confidence_pct": 0.28408163265306124,
          "avg_feature_coverage": 0.8611224489795918,
          "observable_run_pct": 0.9995918367346939,
          "thresholds": {
            "retail_max": 10000.0,
            "instit_min": 50000.0
          }
        },
        {
          "ticker": "42F",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.23119469026548672,
          "mixed_pct": 0.1426991150442478,
          "instit_pct": 0.3064159292035398,
          "ambiguous_pct": 0.3196902654867257,
          "unobservable_pct": 0.0,
          "unclear_pct": 0.3196902654867257,
          "retail_qty_pct": 0.050162370648411204,
          "mixed_qty_pct": 0.13108538959719518,
          "instit_qty_pct": 0.4918711231467764,
          "ambiguous_qty_pct": 0.3268811166076172,
          "unobservable_qty_pct": 0.0,
          "unclear_qty_pct": 0.3268811166076172,
          "retail_notional_pct": 0.0498583117931453,
          "mixed_notional_pct": 0.1296751612738013,
          "instit_notional_pct": 0.49534387476822483,
          "ambiguous_notional_pct": 0.32512265216482855,
          "unobservable_notional_pct": 0.0,
          "unclear_notional_pct": 0.32512265216482855,
          "run_retail_pct": 0.40853658536585363,
          "run_mixed_pct": 0.1443089430894309,
          "run_instit_pct": 0.12601626016260162,
          "run_unclear_pct": 0.32113821138211385,
          "avg_trade_size": 3905.0283185840703,
          "avg_run_notional": 7175.092682926829,
          "dominant_bucket": "RETAIL",
          "dominant_label": "Mixed, leaning retail-like",
          "high_confidence_pct": 0.006097560975609756,
          "medium_confidence_pct": 0.2032520325203252,
          "low_confidence_pct": 0.3252032520325203,
          "na_confidence_pct": 0.4654471544715447,
          "avg_feature_coverage": 0.8390243902439022,
          "observable_run_pct": 1.0,
          "thresholds": {
            "retail_max": 10000.0,
            "instit_min": 50000.0
          }
        },
        {
          "ticker": "S71",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.2255278310940499,
          "mixed_pct": 0.0892514395393474,
          "instit_pct": 0.2888675623800384,
          "ambiguous_pct": 0.381957773512476,
          "unobservable_pct": 0.014395393474088292,
          "unclear_pct": 0.3963531669865643,
          "retail_qty_pct": 0.052972212451635595,
          "mixed_qty_pct": 0.033644037988040804,
          "instit_qty_pct": 0.4846465001758706,
          "ambiguous_qty_pct": 0.4174111853675695,
          "unobservable_qty_pct": 0.011326064016883573,
          "unclear_qty_pct": 0.42873724938445307,
          "retail_notional_pct": 0.052771894238398384,
          "mixed_notional_pct": 0.0344242035651993,
          "instit_notional_pct": 0.48667110469748925,
          "ambiguous_notional_pct": 0.41309995889041334,
          "unobservable_notional_pct": 0.013032838608499703,
          "unclear_notional_pct": 0.42613279749891303,
          "run_retail_pct": 0.3850085178875639,
          "run_mixed_pct": 0.06984667802385008,
          "run_instit_pct": 0.1839863713798978,
          "run_unclear_pct": 0.36115843270868825,
          "avg_trade_size": 2269.109404990403,
          "avg_run_notional": 4027.959114139693,
          "dominant_bucket": "RETAIL",
          "dominant_label": "Mixed, leaning retail-like",
          "high_confidence_pct": 0.010221465076660987,
          "medium_confidence_pct": 0.24872231686541738,
          "low_confidence_pct": 0.3100511073253833,
          "na_confidence_pct": 0.43100511073253833,
          "avg_feature_coverage": 0.8372231686541737,
          "observable_run_pct": 0.9965928449744463,
          "thresholds": {
            "retail_max": 10000.0,
            "instit_min": 50000.0
          }
        },
        {
          "ticker": "LVR",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.18652849740932642,
          "mixed_pct": 0.08290155440414508,
          "instit_pct": 0.29533678756476683,
          "ambiguous_pct": 0.38341968911917096,
          "unobservable_pct": 0.05181347150259067,
          "unclear_pct": 0.43523316062176165,
          "retail_qty_pct": 0.10624377755653534,
          "mixed_qty_pct": 0.2139098279049922,
          "instit_qty_pct": 0.34490115204096145,
          "ambiguous_qty_pct": 0.31133551415161426,
          "unobservable_qty_pct": 0.023609728345896742,
          "unclear_qty_pct": 0.334945242497511,
          "retail_notional_pct": 0.10614155162833523,
          "mixed_notional_pct": 0.2121180103187803,
          "instit_notional_pct": 0.3438074582385621,
          "ambiguous_notional_pct": 0.31447185825780727,
          "unobservable_notional_pct": 0.023461121556515085,
          "unclear_notional_pct": 0.33793297981432235,
          "run_retail_pct": 0.2748091603053435,
          "run_mixed_pct": 0.08396946564885496,
          "run_instit_pct": 0.20610687022900764,
          "run_unclear_pct": 0.4351145038167939,
          "avg_trade_size": 2746.1373056994817,
          "avg_run_notional": 4045.835877862595,
          "dominant_bucket": "AMBIGUOUS",
          "dominant_label": "Unclassified Flow",
          "high_confidence_pct": 0.0,
          "medium_confidence_pct": 0.0,
          "low_confidence_pct": 0.48091603053435117,
          "na_confidence_pct": 0.5190839694656488,
          "avg_feature_coverage": 0.820229007633588,
          "observable_run_pct": 0.9694656488549618,
          "thresholds": {
            "retail_max": 10000.0,
            "instit_min": 50000.0
          }
        },
        {
          "ticker": "U77",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.1652892561983471,
          "mixed_pct": 0.09917355371900827,
          "instit_pct": 0.24793388429752067,
          "ambiguous_pct": 0.4132231404958678,
          "unobservable_pct": 0.0743801652892562,
          "unclear_pct": 0.487603305785124,
          "retail_qty_pct": 0.060889659156556905,
          "mixed_qty_pct": 0.09716926632004622,
          "instit_qty_pct": 0.3389948006932409,
          "ambiguous_qty_pct": 0.4534950895436164,
          "unobservable_qty_pct": 0.04945118428653957,
          "unclear_qty_pct": 0.502946273830156,
          "retail_notional_pct": 0.06063492302010626,
          "mixed_notional_pct": 0.09887548497130773,
          "instit_notional_pct": 0.33844567598917386,
          "ambiguous_notional_pct": 0.4527396797123202,
          "unobservable_notional_pct": 0.04930423630709196,
          "unclear_notional_pct": 0.5020439160194121,
          "run_retail_pct": 0.2222222222222222,
          "run_mixed_pct": 0.125,
          "run_instit_pct": 0.1388888888888889,
          "run_unclear_pct": 0.5138888888888888,
          "avg_trade_size": 1429.9644628099174,
          "avg_run_notional": 2403.1347222222225,
          "dominant_bucket": "AMBIGUOUS",
          "dominant_label": "Unclassified Flow",
          "high_confidence_pct": 0.0,
          "medium_confidence_pct": 0.0,
          "low_confidence_pct": 0.3611111111111111,
          "na_confidence_pct": 0.6388888888888888,
          "avg_feature_coverage": 0.7979166666666667,
          "observable_run_pct": 0.9583333333333334,
          "thresholds": {
            "retail_max": 10000.0,
            "instit_min": 50000.0
          }
        },
        {
          "ticker": "532",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.10638297872340426,
          "mixed_pct": 0.06382978723404255,
          "instit_pct": 0.02127659574468085,
          "ambiguous_pct": 0.1702127659574468,
          "unobservable_pct": 0.6382978723404256,
          "unclear_pct": 0.8085106382978724,
          "retail_qty_pct": 0.0484675081612787,
          "mixed_qty_pct": 0.0965370363398749,
          "instit_qty_pct": 0.05378107874087738,
          "ambiguous_qty_pct": 0.13445269685219347,
          "unobservable_qty_pct": 0.6667616799057755,
          "unclear_qty_pct": 0.8012143767579689,
          "retail_notional_pct": 0.04847774293996482,
          "mixed_notional_pct": 0.09653599797785317,
          "instit_notional_pct": 0.05378050026621347,
          "ambiguous_notional_pct": 0.13445125066553368,
          "unobservable_notional_pct": 0.6667545081504348,
          "unclear_notional_pct": 0.8012057588159684,
          "run_retail_pct": 0.17857142857142858,
          "run_mixed_pct": 0.10714285714285714,
          "run_instit_pct": 0.03571428571428571,
          "run_unclear_pct": 0.6785714285714286,
          "avg_trade_size": 395.6191489361702,
          "avg_run_notional": 664.0749999999999,
          "dominant_bucket": "UNOBSERVABLE",
          "dominant_label": "Not Observable",
          "high_confidence_pct": 0.0,
          "medium_confidence_pct": 0.0,
          "low_confidence_pct": 0.21428571428571427,
          "na_confidence_pct": 0.7857142857142857,
          "avg_feature_coverage": 0.6946428571428573,
          "observable_run_pct": 0.5,
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
            "retail_pct": 0.4074074074074074,
            "mixed_pct": 0.037037037037037035,
            "instit_pct": 0.5555555555555556,
            "ambiguous_pct": 0.0,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.0,
            "retail_qty_pct": 0.057917688743526846,
            "mixed_qty_pct": 0.1362769146906514,
            "instit_qty_pct": 0.8058053965658217,
            "ambiguous_qty_pct": 0.0,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.0,
            "retail_notional_pct": 0.05841089773567259,
            "mixed_notional_pct": 0.1387862239587262,
            "instit_notional_pct": 0.8028028783056013,
            "ambiguous_notional_pct": 0.0,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.0,
            "run_retail_pct": 0.7857142857142857,
            "run_mixed_pct": 0.07142857142857142,
            "run_instit_pct": 0.14285714285714285,
            "run_unclear_pct": 0.0,
            "avg_trade_size": 6137.87037037037,
            "avg_run_notional": 11837.32142857143,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.9285714285714286,
            "na_confidence_pct": 0.07142857142857142,
            "avg_feature_coverage": 0.8607142857142857,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "42F",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.0,
            "mixed_pct": 0.0,
            "instit_pct": 1.0,
            "ambiguous_pct": 0.0,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.0,
            "retail_qty_pct": 0.0,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 1.0,
            "ambiguous_qty_pct": 0.0,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.0,
            "retail_notional_pct": 0.0,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 1.0,
            "ambiguous_notional_pct": 0.0,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.0,
            "run_retail_pct": 0.0,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 1.0,
            "run_unclear_pct": 0.0,
            "avg_trade_size": 19597.95,
            "avg_run_notional": 78391.8,
            "dominant_bucket": "INSTITUTIONAL",
            "dominant_label": "Institution-led",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 1.0,
            "na_confidence_pct": 0.0,
            "avg_feature_coverage": 0.7,
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
            "retail_pct": 0.06666666666666667,
            "mixed_pct": 0.0,
            "instit_pct": 0.3333333333333333,
            "ambiguous_pct": 0.2,
            "unobservable_pct": 0.4,
            "unclear_pct": 0.6000000000000001,
            "retail_qty_pct": 0.020161290322580645,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.4032258064516129,
            "ambiguous_qty_pct": 0.06048387096774194,
            "unobservable_qty_pct": 0.5161290322580645,
            "unclear_qty_pct": 0.5766129032258065,
            "retail_notional_pct": 0.01968399212640315,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.40586263765494496,
            "ambiguous_notional_pct": 0.061046975581209764,
            "unobservable_notional_pct": 0.5134063946374422,
            "unclear_notional_pct": 0.574453370218652,
            "run_retail_pct": 0.2,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.2,
            "run_unclear_pct": 0.6000000000000001,
            "avg_trade_size": 1253.1333333333334,
            "avg_run_notional": 3759.4,
            "dominant_bucket": "UNOBSERVABLE",
            "dominant_label": "Not Observable",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.4,
            "na_confidence_pct": 0.6,
            "avg_feature_coverage": 0.7500000000000001,
            "observable_run_pct": 0.6,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "S71",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.19008264462809918,
            "mixed_pct": 0.09090909090909091,
            "instit_pct": 0.17355371900826447,
            "ambiguous_pct": 0.4214876033057851,
            "unobservable_pct": 0.12396694214876033,
            "unclear_pct": 0.5454545454545454,
            "retail_qty_pct": 0.08570029382957885,
            "mixed_qty_pct": 0.08178256611165524,
            "instit_qty_pct": 0.33920992491021873,
            "ambiguous_qty_pct": 0.3881815213842638,
            "unobservable_qty_pct": 0.10512569376428338,
            "unclear_qty_pct": 0.4933072151485472,
            "retail_notional_pct": 0.085991322595664,
            "mixed_notional_pct": 0.08170660117003259,
            "instit_notional_pct": 0.34009217211759707,
            "ambiguous_notional_pct": 0.3882463681081774,
            "unobservable_notional_pct": 0.10396353600852895,
            "unclear_notional_pct": 0.4922099041167064,
            "run_retail_pct": 0.3333333333333333,
            "run_mixed_pct": 0.07936507936507936,
            "run_instit_pct": 0.12698412698412698,
            "run_unclear_pct": 0.4603174603174603,
            "avg_trade_size": 2449.603305785124,
            "avg_run_notional": 4704.793650793651,
            "dominant_bucket": "AMBIGUOUS",
            "dominant_label": "Mixed, mostly unclassified",
            "high_confidence_pct": 0.06349206349206349,
            "medium_confidence_pct": 0.25396825396825395,
            "low_confidence_pct": 0.14285714285714285,
            "na_confidence_pct": 0.5396825396825397,
            "avg_feature_coverage": 0.8142857142857146,
            "observable_run_pct": 0.9682539682539683,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "ITS",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.3253012048192771,
            "mixed_pct": 0.16265060240963855,
            "instit_pct": 0.14457831325301204,
            "ambiguous_pct": 0.3674698795180723,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.3674698795180723,
            "retail_qty_pct": 0.04519119351100811,
            "mixed_qty_pct": 0.08829663962920047,
            "instit_qty_pct": 0.3144843568945539,
            "ambiguous_qty_pct": 0.5520278099652376,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.5520278099652376,
            "retail_notional_pct": 0.04518537267215294,
            "mixed_notional_pct": 0.08863319720259309,
            "instit_notional_pct": 0.3130779000750201,
            "ambiguous_notional_pct": 0.5531035300502338,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.5531035300502338,
            "run_retail_pct": 0.65,
            "run_mixed_pct": 0.1,
            "run_instit_pct": 0.05,
            "run_unclear_pct": 0.2,
            "avg_trade_size": 2641.8614457831327,
            "avg_run_notional": 5481.8625,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.025,
            "medium_confidence_pct": 0.5,
            "low_confidence_pct": 0.175,
            "na_confidence_pct": 0.3,
            "avg_feature_coverage": 0.8349999999999997,
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
            "retail_pct": 0.0,
            "mixed_pct": 0.2,
            "instit_pct": 0.0,
            "ambiguous_pct": 0.6,
            "unobservable_pct": 0.2,
            "unclear_pct": 0.8,
            "retail_qty_pct": 0.0,
            "mixed_qty_pct": 0.1044932079414838,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": 0.7304075235109718,
            "unobservable_qty_pct": 0.16509926854754442,
            "unclear_qty_pct": 0.8955067920585162,
            "retail_notional_pct": 0.0,
            "mixed_notional_pct": 0.1071436037881797,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": 0.728576505759622,
            "unobservable_notional_pct": 0.1642798904521983,
            "unclear_notional_pct": 0.8928563962118202,
            "run_retail_pct": 0.0,
            "run_mixed_pct": 0.16666666666666666,
            "run_instit_pct": 0.0,
            "run_unclear_pct": 0.8333333333333333,
            "avg_trade_size": 1913.3200000000002,
            "avg_run_notional": 3188.866666666667,
            "dominant_bucket": "AMBIGUOUS",
            "dominant_label": "Unclassified Flow",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.0,
            "na_confidence_pct": 1.0,
            "avg_feature_coverage": 0.7583333333333334,
            "observable_run_pct": 0.8333333333333334,
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
            "retail_pct": 0.40601503759398494,
            "mixed_pct": 0.05263157894736842,
            "instit_pct": 0.3182957393483709,
            "ambiguous_pct": 0.22305764411027568,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.22305764411027568,
            "retail_qty_pct": 0.07069426291867428,
            "mixed_qty_pct": 0.06938727737354428,
            "instit_qty_pct": 0.6475820767415095,
            "ambiguous_qty_pct": 0.21233638296627197,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.21233638296627197,
            "retail_notional_pct": 0.07116679010549133,
            "mixed_notional_pct": 0.06992704439670994,
            "instit_notional_pct": 0.6467736855937117,
            "ambiguous_notional_pct": 0.21213247990408696,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.21213247990408696,
            "run_retail_pct": 0.7058823529411765,
            "run_mixed_pct": 0.049773755656108594,
            "run_instit_pct": 0.13574660633484162,
            "run_unclear_pct": 0.1085972850678733,
            "avg_trade_size": 2884.8182957393483,
            "avg_run_notional": 5208.337104072398,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.21266968325791855,
            "medium_confidence_pct": 0.4434389140271493,
            "low_confidence_pct": 0.18552036199095023,
            "na_confidence_pct": 0.1583710407239819,
            "avg_feature_coverage": 0.8432126696832576,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "42F",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.20426829268292682,
            "mixed_pct": 0.07926829268292683,
            "instit_pct": 0.3323170731707317,
            "ambiguous_pct": 0.38414634146341464,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.38414634146341464,
            "retail_qty_pct": 0.0348335068777629,
            "mixed_qty_pct": 0.04349661113731721,
            "instit_qty_pct": 0.571932827352744,
            "ambiguous_qty_pct": 0.34973705463217586,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.34973705463217586,
            "retail_notional_pct": 0.035241913257903434,
            "mixed_notional_pct": 0.044142865452661884,
            "instit_notional_pct": 0.5709330298111229,
            "ambiguous_notional_pct": 0.3496821914783117,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.3496821914783117,
            "run_retail_pct": 0.4230769230769231,
            "run_mixed_pct": 0.08974358974358974,
            "run_instit_pct": 0.11538461538461539,
            "run_unclear_pct": 0.3717948717948718,
            "avg_trade_size": 5560.997256097561,
            "avg_run_notional": 11692.353205128204,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Mixed, leaning retail-like",
            "high_confidence_pct": 0.019230769230769232,
            "medium_confidence_pct": 0.2564102564102564,
            "low_confidence_pct": 0.26282051282051283,
            "na_confidence_pct": 0.46153846153846156,
            "avg_feature_coverage": 0.8346153846153845,
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
            "retail_pct": 0.2923280423280423,
            "mixed_pct": 0.11904761904761904,
            "instit_pct": 0.25793650793650796,
            "ambiguous_pct": 0.3306878306878307,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.3306878306878307,
            "retail_qty_pct": 0.04616895874263261,
            "mixed_qty_pct": 0.0691466643888272,
            "instit_qty_pct": 0.43311693858375333,
            "ambiguous_qty_pct": 0.4515674382847869,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.4515674382847869,
            "retail_notional_pct": 0.046121342339171305,
            "mixed_notional_pct": 0.06952026701377395,
            "instit_notional_pct": 0.43268126331342527,
            "ambiguous_notional_pct": 0.45167712733362947,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.45167712733362947,
            "run_retail_pct": 0.6057142857142858,
            "run_mixed_pct": 0.1,
            "run_instit_pct": 0.09142857142857143,
            "run_unclear_pct": 0.20285714285714285,
            "avg_trade_size": 3154.82208994709,
            "avg_run_notional": 6814.415714285714,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.008571428571428572,
            "medium_confidence_pct": 0.52,
            "low_confidence_pct": 0.16857142857142857,
            "na_confidence_pct": 0.3028571428571429,
            "avg_feature_coverage": 0.8465714285714284,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "S71",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.17894736842105263,
            "mixed_pct": 0.06315789473684211,
            "instit_pct": 0.24210526315789474,
            "ambiguous_pct": 0.4368421052631579,
            "unobservable_pct": 0.07894736842105263,
            "unclear_pct": 0.5157894736842106,
            "retail_qty_pct": 0.0745669381668005,
            "mixed_qty_pct": 0.06894573821268785,
            "instit_qty_pct": 0.39359871515429623,
            "ambiguous_qty_pct": 0.3890099804978777,
            "unobservable_qty_pct": 0.07387862796833773,
            "unclear_qty_pct": 0.46288860846621543,
            "retail_notional_pct": 0.07529968576638088,
            "mixed_notional_pct": 0.06987333669550375,
            "instit_notional_pct": 0.39136875897117585,
            "ambiguous_notional_pct": 0.3887428715521589,
            "unobservable_notional_pct": 0.07471534701478062,
            "unclear_notional_pct": 0.46345821856693953,
            "run_retail_pct": 0.3137254901960784,
            "run_mixed_pct": 0.058823529411764705,
            "run_instit_pct": 0.16666666666666666,
            "run_unclear_pct": 0.46078431372549017,
            "avg_trade_size": 2170.694736842105,
            "avg_run_notional": 4043.450980392157,
            "dominant_bucket": "AMBIGUOUS",
            "dominant_label": "Unclassified Flow",
            "high_confidence_pct": 0.0392156862745098,
            "medium_confidence_pct": 0.1568627450980392,
            "low_confidence_pct": 0.28431372549019607,
            "na_confidence_pct": 0.5196078431372549,
            "avg_feature_coverage": 0.8132352941176468,
            "observable_run_pct": 0.9803921568627451,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "LVR",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.17543859649122806,
            "mixed_pct": 0.12280701754385964,
            "instit_pct": 0.2982456140350877,
            "ambiguous_pct": 0.2982456140350877,
            "unobservable_pct": 0.10526315789473684,
            "unclear_pct": 0.40350877192982454,
            "retail_qty_pct": 0.11431792559188275,
            "mixed_qty_pct": 0.28252536640360765,
            "instit_qty_pct": 0.33528748590755353,
            "ambiguous_qty_pct": 0.23900789177001128,
            "unobservable_qty_pct": 0.028861330326944757,
            "unclear_qty_pct": 0.267869222096956,
            "retail_notional_pct": 0.11424947617204152,
            "mixed_notional_pct": 0.2821320061518717,
            "instit_notional_pct": 0.334814562643196,
            "ambiguous_notional_pct": 0.239730185294255,
            "unobservable_notional_pct": 0.029073769738635832,
            "unclear_notional_pct": 0.26880395503289084,
            "run_retail_pct": 0.3333333333333333,
            "run_mixed_pct": 0.2,
            "run_instit_pct": 0.16666666666666666,
            "run_unclear_pct": 0.3,
            "avg_trade_size": 5823.359649122807,
            "avg_run_notional": 11064.383333333333,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Mixed, leaning retail-like",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.5,
            "na_confidence_pct": 0.5,
            "avg_feature_coverage": 0.8133333333333337,
            "observable_run_pct": 0.9333333333333333,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "U77",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.1,
            "mixed_pct": 0.1,
            "instit_pct": 0.06666666666666667,
            "ambiguous_pct": 0.43333333333333335,
            "unobservable_pct": 0.3,
            "unclear_pct": 0.7333333333333334,
            "retail_qty_pct": 0.0027624309392265192,
            "mixed_qty_pct": 0.08287292817679558,
            "instit_qty_pct": 0.03314917127071823,
            "ambiguous_qty_pct": 0.585635359116022,
            "unobservable_qty_pct": 0.2955801104972376,
            "unclear_qty_pct": 0.8812154696132597,
            "retail_notional_pct": 0.0026991068978334198,
            "mixed_notional_pct": 0.08482907393190747,
            "instit_notional_pct": 0.032180857530925096,
            "ambiguous_notional_pct": 0.5839484772799116,
            "unobservable_notional_pct": 0.29634248435942245,
            "unclear_notional_pct": 0.8802909616393341,
            "run_retail_pct": 0.15789473684210525,
            "run_mixed_pct": 0.10526315789473684,
            "run_instit_pct": 0.05263157894736842,
            "run_unclear_pct": 0.6842105263157894,
            "avg_trade_size": 959.5766666666667,
            "avg_run_notional": 1515.121052631579,
            "dominant_bucket": "AMBIGUOUS",
            "dominant_label": "Unclassified Flow",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.21052631578947367,
            "na_confidence_pct": 0.7894736842105263,
            "avg_feature_coverage": 0.7710526315789473,
            "observable_run_pct": 0.8421052631578947,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "NXR",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.2,
            "mixed_pct": 0.2,
            "instit_pct": 0.0,
            "ambiguous_pct": 0.6,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.6,
            "retail_qty_pct": 0.13978494623655913,
            "mixed_qty_pct": 0.17634408602150536,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": 0.6838709677419355,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.6838709677419355,
            "retail_notional_pct": 0.14068846917899605,
            "mixed_notional_pct": 0.17748391496427196,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": 0.681827615856732,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.681827615856732,
            "run_retail_pct": 0.25,
            "run_mixed_pct": 0.25,
            "run_instit_pct": 0.0,
            "run_unclear_pct": 0.5,
            "avg_trade_size": 3372.7,
            "avg_run_notional": 4215.875,
            "dominant_bucket": "AMBIGUOUS",
            "dominant_label": "Unclassified Flow",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.25,
            "na_confidence_pct": 0.75,
            "avg_feature_coverage": 0.8125000000000001,
            "observable_run_pct": 1.0,
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
            "avg_trade_size": 700.0,
            "avg_run_notional": 1166.6666666666667,
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
            "retail_pct": 0.3616298811544992,
            "mixed_pct": 0.06112054329371817,
            "instit_pct": 0.3599320882852292,
            "ambiguous_pct": 0.21731748726655348,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.21731748726655348,
            "retail_qty_pct": 0.07833107278951108,
            "mixed_qty_pct": 0.0817283472195311,
            "instit_qty_pct": 0.6137441064393205,
            "ambiguous_qty_pct": 0.22619647355163727,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.22619647355163727,
            "retail_notional_pct": 0.07862212120708631,
            "mixed_notional_pct": 0.08209755625237411,
            "instit_notional_pct": 0.6130931543784122,
            "ambiguous_notional_pct": 0.2261871681621274,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.2261871681621274,
            "run_retail_pct": 0.6257861635220126,
            "run_mixed_pct": 0.0660377358490566,
            "run_instit_pct": 0.16666666666666666,
            "run_unclear_pct": 0.14150943396226415,
            "avg_trade_size": 2963.315789473684,
            "avg_run_notional": 5488.657232704402,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.14779874213836477,
            "medium_confidence_pct": 0.3081761006289308,
            "low_confidence_pct": 0.33647798742138363,
            "na_confidence_pct": 0.20754716981132076,
            "avg_feature_coverage": 0.8471698113207546,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "42F",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.21227621483375958,
            "mixed_pct": 0.11508951406649616,
            "instit_pct": 0.3069053708439898,
            "ambiguous_pct": 0.3657289002557545,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.3657289002557545,
            "retail_qty_pct": 0.04051382355891312,
            "mixed_qty_pct": 0.07258226297756872,
            "instit_qty_pct": 0.5410588999223959,
            "ambiguous_qty_pct": 0.34584501354112224,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.34584501354112224,
            "retail_notional_pct": 0.04083010627917822,
            "mixed_notional_pct": 0.07269643342891659,
            "instit_notional_pct": 0.5406831244897776,
            "ambiguous_notional_pct": 0.3457903358021276,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.3457903358021276,
            "run_retail_pct": 0.4010152284263959,
            "run_mixed_pct": 0.1218274111675127,
            "run_instit_pct": 0.1116751269035533,
            "run_unclear_pct": 0.36548223350253806,
            "avg_trade_size": 5151.394117647059,
            "avg_run_notional": 10224.340609137056,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Mixed, leaning retail-like",
            "high_confidence_pct": 0.015228426395939087,
            "medium_confidence_pct": 0.20304568527918782,
            "low_confidence_pct": 0.29441624365482233,
            "na_confidence_pct": 0.4873096446700508,
            "avg_feature_coverage": 0.8347715736040607,
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
            "retail_pct": 0.29292107404393813,
            "mixed_pct": 0.17982099267697316,
            "instit_pct": 0.29739625711960943,
            "ambiguous_pct": 0.22986167615947925,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.22986167615947925,
            "retail_qty_pct": 0.05526650979037585,
            "mixed_qty_pct": 0.0897864899289739,
            "instit_qty_pct": 0.4996869670343905,
            "ambiguous_qty_pct": 0.3552600332462598,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.3552600332462598,
            "retail_notional_pct": 0.05510995868062516,
            "mixed_notional_pct": 0.0898400032762363,
            "instit_notional_pct": 0.4983380644771924,
            "ambiguous_notional_pct": 0.3567119735659461,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.3567119735659461,
            "run_retail_pct": 0.6065428824049514,
            "run_mixed_pct": 0.14942528735632185,
            "run_instit_pct": 0.10256410256410256,
            "run_unclear_pct": 0.14146772767462423,
            "avg_trade_size": 1887.4979658258746,
            "avg_run_notional": 4102.09549071618,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.07250221043324491,
            "medium_confidence_pct": 0.44297082228116713,
            "low_confidence_pct": 0.19363395225464192,
            "na_confidence_pct": 0.29089301503094606,
            "avg_feature_coverage": 0.8666224580017683,
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
            "retail_pct": 0.18181818181818182,
            "mixed_pct": 0.09090909090909091,
            "instit_pct": 0.36363636363636365,
            "ambiguous_pct": 0.36363636363636365,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.36363636363636365,
            "retail_qty_pct": 0.05825242718446602,
            "mixed_qty_pct": 0.07237422771403354,
            "instit_qty_pct": 0.4651368049426302,
            "ambiguous_qty_pct": 0.4042365401588703,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.4042365401588703,
            "retail_notional_pct": 0.059405330077571004,
            "mixed_notional_pct": 0.07382194433139715,
            "instit_notional_pct": 0.4588651695092925,
            "ambiguous_notional_pct": 0.40790755608173934,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.40790755608173934,
            "run_retail_pct": 0.2222222222222222,
            "run_mixed_pct": 0.1111111111111111,
            "run_instit_pct": 0.3333333333333333,
            "run_unclear_pct": 0.3333333333333333,
            "avg_trade_size": 3685.7727272727275,
            "avg_run_notional": 4504.833333333333,
            "dominant_bucket": "INSTITUTIONAL",
            "dominant_label": "Mixed, leaning institution-like",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.5555555555555556,
            "na_confidence_pct": 0.4444444444444444,
            "avg_feature_coverage": 0.8333333333333334,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "S71",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.19314641744548286,
            "mixed_pct": 0.04672897196261682,
            "instit_pct": 0.27102803738317754,
            "ambiguous_pct": 0.4423676012461059,
            "unobservable_pct": 0.04672897196261682,
            "unclear_pct": 0.48909657320872274,
            "retail_qty_pct": 0.05948393499565811,
            "mixed_qty_pct": 0.04087582185833023,
            "instit_qty_pct": 0.44851755365339285,
            "ambiguous_qty_pct": 0.41117727329115494,
            "unobservable_qty_pct": 0.039945416201463836,
            "unclear_qty_pct": 0.4511226894926188,
            "retail_notional_pct": 0.06040669086493801,
            "mixed_notional_pct": 0.042432122764782365,
            "instit_notional_pct": 0.44418011698917853,
            "ambiguous_notional_pct": 0.4112224508643417,
            "unobservable_notional_pct": 0.04175861851675935,
            "unclear_notional_pct": 0.45298106938110105,
            "run_retail_pct": 0.3155080213903743,
            "run_mixed_pct": 0.0427807486631016,
            "run_instit_pct": 0.18181818181818182,
            "run_unclear_pct": 0.45989304812834225,
            "avg_trade_size": 2298.8520249221183,
            "avg_run_notional": 3946.157754010695,
            "dominant_bucket": "AMBIGUOUS",
            "dominant_label": "Unclassified Flow",
            "high_confidence_pct": 0.03208556149732621,
            "medium_confidence_pct": 0.15508021390374332,
            "low_confidence_pct": 0.31016042780748665,
            "na_confidence_pct": 0.5026737967914439,
            "avg_feature_coverage": 0.8163101604278074,
            "observable_run_pct": 0.9893048128342246,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "LVR",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.18478260869565216,
            "mixed_pct": 0.10869565217391304,
            "instit_pct": 0.32608695652173914,
            "ambiguous_pct": 0.2717391304347826,
            "unobservable_pct": 0.10869565217391304,
            "unclear_pct": 0.3804347826086956,
            "retail_qty_pct": 0.11054131054131054,
            "mixed_qty_pct": 0.27806267806267804,
            "instit_qty_pct": 0.34890788224121555,
            "ambiguous_qty_pct": 0.23095916429249763,
            "unobservable_qty_pct": 0.0315289648622982,
            "unclear_qty_pct": 0.2624881291547958,
            "retail_notional_pct": 0.1104801475614553,
            "mixed_notional_pct": 0.2781734559957025,
            "instit_notional_pct": 0.3480856599849027,
            "ambiguous_notional_pct": 0.2316035087853294,
            "unobservable_notional_pct": 0.031657227672610116,
            "unclear_notional_pct": 0.2632607364579395,
            "run_retail_pct": 0.30357142857142855,
            "run_mixed_pct": 0.16071428571428573,
            "run_instit_pct": 0.21428571428571427,
            "run_unclear_pct": 0.3214285714285714,
            "avg_trade_size": 4269.407608695652,
            "avg_run_notional": 7014.026785714285,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Mixed, leaning retail-like",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.5178571428571429,
            "na_confidence_pct": 0.48214285714285715,
            "avg_feature_coverage": 0.8071428571428572,
            "observable_run_pct": 0.9285714285714286,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "U77",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.17857142857142858,
            "mixed_pct": 0.125,
            "instit_pct": 0.14285714285714285,
            "ambiguous_pct": 0.39285714285714285,
            "unobservable_pct": 0.16071428571428573,
            "unclear_pct": 0.5535714285714286,
            "retail_qty_pct": 0.06147968044459882,
            "mixed_qty_pct": 0.1358110455019104,
            "instit_qty_pct": 0.19798541160125044,
            "ambiguous_qty_pct": 0.45606113233761725,
            "unobservable_qty_pct": 0.14866273011462314,
            "unclear_qty_pct": 0.6047238624522404,
            "retail_notional_pct": 0.06121760697843129,
            "mixed_notional_pct": 0.13750292026833094,
            "instit_notional_pct": 0.19647389675336424,
            "ambiguous_notional_pct": 0.4549558490559409,
            "unobservable_notional_pct": 0.14984972694393262,
            "unclear_notional_pct": 0.6048055759998735,
            "run_retail_pct": 0.20588235294117646,
            "run_mixed_pct": 0.17647058823529413,
            "run_instit_pct": 0.08823529411764706,
            "run_unclear_pct": 0.5294117647058824,
            "avg_trade_size": 1016.6017857142857,
            "avg_run_notional": 1674.4029411764704,
            "dominant_bucket": "AMBIGUOUS",
            "dominant_label": "Unclassified Flow",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.29411764705882354,
            "na_confidence_pct": 0.7058823529411765,
            "avg_feature_coverage": 0.7926470588235294,
            "observable_run_pct": 0.9117647058823529,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "532",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.11904761904761904,
            "mixed_pct": 0.07142857142857142,
            "instit_pct": 0.0,
            "ambiguous_pct": 0.19047619047619047,
            "unobservable_pct": 0.6190476190476191,
            "unclear_pct": 0.8095238095238095,
            "retail_qty_pct": 0.05151539402531183,
            "mixed_qty_pct": 0.10260778104242646,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": 0.14290777303959118,
            "unobservable_qty_pct": 0.7029690518926706,
            "unclear_qty_pct": 0.8458768249322617,
            "retail_notional_pct": 0.051526237567165886,
            "mixed_notional_pct": 0.10260660797987882,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": 0.1429061392477421,
            "unobservable_notional_pct": 0.7029610152052133,
            "unclear_notional_pct": 0.8458671544529553,
            "run_retail_pct": 0.2,
            "run_mixed_pct": 0.12,
            "run_instit_pct": 0.0,
            "run_unclear_pct": 0.6799999999999999,
            "avg_trade_size": 416.5238095238095,
            "avg_run_notional": 699.76,
            "dominant_bucket": "UNOBSERVABLE",
            "dominant_label": "Not Observable",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.2,
            "na_confidence_pct": 0.8,
            "avg_feature_coverage": 0.7060000000000001,
            "observable_run_pct": 0.52,
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
            "retail_pct": 0.30068143100511074,
            "mixed_pct": 0.09540034071550256,
            "instit_pct": 0.38756388415672915,
            "ambiguous_pct": 0.21635434412265758,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.21635434412265758,
            "retail_qty_pct": 0.07016256151708039,
            "mixed_qty_pct": 0.12335302682084541,
            "instit_qty_pct": 0.5701926432189828,
            "ambiguous_qty_pct": 0.23629176844309144,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.23629176844309144,
            "retail_notional_pct": 0.07002555544416632,
            "mixed_notional_pct": 0.1262944967221243,
            "instit_notional_pct": 0.5676801238201074,
            "ambiguous_notional_pct": 0.23599982401360203,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.23599982401360203,
            "run_retail_pct": 0.5482815057283142,
            "run_mixed_pct": 0.088379705400982,
            "run_instit_pct": 0.18985270049099837,
            "run_unclear_pct": 0.1734860883797054,
            "avg_trade_size": 3300.936541737649,
            "avg_run_notional": 6342.552373158756,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.07692307692307693,
            "medium_confidence_pct": 0.23240589198036007,
            "low_confidence_pct": 0.4288052373158756,
            "na_confidence_pct": 0.2618657937806874,
            "avg_feature_coverage": 0.8563829787234043,
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
            "retail_pct": 0.10714285714285714,
            "mixed_pct": 0.07142857142857142,
            "instit_pct": 0.39285714285714285,
            "ambiguous_pct": 0.42857142857142855,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.42857142857142855,
            "retail_qty_pct": 0.00405939536374319,
            "mixed_qty_pct": 0.007531246661681444,
            "instit_qty_pct": 0.9217498130541609,
            "ambiguous_qty_pct": 0.06665954492041448,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.06665954492041448,
            "retail_notional_pct": 0.004002108583353488,
            "mixed_notional_pct": 0.007239566060497226,
            "instit_notional_pct": 0.9227065173472979,
            "ambiguous_notional_pct": 0.06605180800885141,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.06605180800885141,
            "run_retail_pct": 0.125,
            "run_mixed_pct": 0.08333333333333333,
            "run_instit_pct": 0.375,
            "run_unclear_pct": 0.4166666666666667,
            "avg_trade_size": 24661.10714285714,
            "avg_run_notional": 28771.291666666668,
            "dominant_bucket": "AMBIGUOUS",
            "dominant_label": "Mixed, mostly unclassified",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.5,
            "na_confidence_pct": 0.5,
            "avg_feature_coverage": 0.8312500000000002,
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
            "retail_pct": 0.2936267071320182,
            "mixed_pct": 0.15990136570561456,
            "instit_pct": 0.3321320182094082,
            "ambiguous_pct": 0.21301213960546284,
            "unobservable_pct": 0.0013277693474962064,
            "unclear_pct": 0.21433990895295904,
            "retail_qty_pct": 0.0613231112135885,
            "mixed_qty_pct": 0.10701521789255246,
            "instit_qty_pct": 0.5167934824379371,
            "ambiguous_qty_pct": 0.3140323572361848,
            "unobservable_qty_pct": 0.0008358312197371455,
            "unclear_qty_pct": 0.3148681884559219,
            "retail_notional_pct": 0.06144719286732829,
            "mixed_notional_pct": 0.10712912889124697,
            "instit_notional_pct": 0.5162525130977426,
            "ambiguous_notional_pct": 0.31432820232551356,
            "unobservable_notional_pct": 0.0008429628181685985,
            "unclear_notional_pct": 0.31517116514368215,
            "run_retail_pct": 0.6020408163265306,
            "run_mixed_pct": 0.13795918367346938,
            "run_instit_pct": 0.11387755102040817,
            "run_unclear_pct": 0.14612244897959184,
            "avg_trade_size": 1997.029779969651,
            "avg_run_notional": 4297.282040816326,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.1346938775510204,
            "medium_confidence_pct": 0.43387755102040815,
            "low_confidence_pct": 0.1473469387755102,
            "na_confidence_pct": 0.28408163265306124,
            "avg_feature_coverage": 0.8611224489795918,
            "observable_run_pct": 0.9995918367346939,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "42F",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.23119469026548672,
            "mixed_pct": 0.1426991150442478,
            "instit_pct": 0.3064159292035398,
            "ambiguous_pct": 0.3196902654867257,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.3196902654867257,
            "retail_qty_pct": 0.050162370648411204,
            "mixed_qty_pct": 0.13108538959719518,
            "instit_qty_pct": 0.4918711231467764,
            "ambiguous_qty_pct": 0.3268811166076172,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.3268811166076172,
            "retail_notional_pct": 0.0498583117931453,
            "mixed_notional_pct": 0.1296751612738013,
            "instit_notional_pct": 0.49534387476822483,
            "ambiguous_notional_pct": 0.32512265216482855,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.32512265216482855,
            "run_retail_pct": 0.40853658536585363,
            "run_mixed_pct": 0.1443089430894309,
            "run_instit_pct": 0.12601626016260162,
            "run_unclear_pct": 0.32113821138211385,
            "avg_trade_size": 3905.0283185840703,
            "avg_run_notional": 7175.092682926829,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Mixed, leaning retail-like",
            "high_confidence_pct": 0.006097560975609756,
            "medium_confidence_pct": 0.2032520325203252,
            "low_confidence_pct": 0.3252032520325203,
            "na_confidence_pct": 0.4654471544715447,
            "avg_feature_coverage": 0.8390243902439022,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "S71",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.2255278310940499,
            "mixed_pct": 0.0892514395393474,
            "instit_pct": 0.2888675623800384,
            "ambiguous_pct": 0.381957773512476,
            "unobservable_pct": 0.014395393474088292,
            "unclear_pct": 0.3963531669865643,
            "retail_qty_pct": 0.052972212451635595,
            "mixed_qty_pct": 0.033644037988040804,
            "instit_qty_pct": 0.4846465001758706,
            "ambiguous_qty_pct": 0.4174111853675695,
            "unobservable_qty_pct": 0.011326064016883573,
            "unclear_qty_pct": 0.42873724938445307,
            "retail_notional_pct": 0.052771894238398384,
            "mixed_notional_pct": 0.0344242035651993,
            "instit_notional_pct": 0.48667110469748925,
            "ambiguous_notional_pct": 0.41309995889041334,
            "unobservable_notional_pct": 0.013032838608499703,
            "unclear_notional_pct": 0.42613279749891303,
            "run_retail_pct": 0.3850085178875639,
            "run_mixed_pct": 0.06984667802385008,
            "run_instit_pct": 0.1839863713798978,
            "run_unclear_pct": 0.36115843270868825,
            "avg_trade_size": 2269.109404990403,
            "avg_run_notional": 4027.959114139693,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Mixed, leaning retail-like",
            "high_confidence_pct": 0.010221465076660987,
            "medium_confidence_pct": 0.24872231686541738,
            "low_confidence_pct": 0.3100511073253833,
            "na_confidence_pct": 0.43100511073253833,
            "avg_feature_coverage": 0.8372231686541737,
            "observable_run_pct": 0.9965928449744463,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "LVR",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.18652849740932642,
            "mixed_pct": 0.08290155440414508,
            "instit_pct": 0.29533678756476683,
            "ambiguous_pct": 0.38341968911917096,
            "unobservable_pct": 0.05181347150259067,
            "unclear_pct": 0.43523316062176165,
            "retail_qty_pct": 0.10624377755653534,
            "mixed_qty_pct": 0.2139098279049922,
            "instit_qty_pct": 0.34490115204096145,
            "ambiguous_qty_pct": 0.31133551415161426,
            "unobservable_qty_pct": 0.023609728345896742,
            "unclear_qty_pct": 0.334945242497511,
            "retail_notional_pct": 0.10614155162833523,
            "mixed_notional_pct": 0.2121180103187803,
            "instit_notional_pct": 0.3438074582385621,
            "ambiguous_notional_pct": 0.31447185825780727,
            "unobservable_notional_pct": 0.023461121556515085,
            "unclear_notional_pct": 0.33793297981432235,
            "run_retail_pct": 0.2748091603053435,
            "run_mixed_pct": 0.08396946564885496,
            "run_instit_pct": 0.20610687022900764,
            "run_unclear_pct": 0.4351145038167939,
            "avg_trade_size": 2746.1373056994817,
            "avg_run_notional": 4045.835877862595,
            "dominant_bucket": "AMBIGUOUS",
            "dominant_label": "Unclassified Flow",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.48091603053435117,
            "na_confidence_pct": 0.5190839694656488,
            "avg_feature_coverage": 0.820229007633588,
            "observable_run_pct": 0.9694656488549618,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "U77",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.1652892561983471,
            "mixed_pct": 0.09917355371900827,
            "instit_pct": 0.24793388429752067,
            "ambiguous_pct": 0.4132231404958678,
            "unobservable_pct": 0.0743801652892562,
            "unclear_pct": 0.487603305785124,
            "retail_qty_pct": 0.060889659156556905,
            "mixed_qty_pct": 0.09716926632004622,
            "instit_qty_pct": 0.3389948006932409,
            "ambiguous_qty_pct": 0.4534950895436164,
            "unobservable_qty_pct": 0.04945118428653957,
            "unclear_qty_pct": 0.502946273830156,
            "retail_notional_pct": 0.06063492302010626,
            "mixed_notional_pct": 0.09887548497130773,
            "instit_notional_pct": 0.33844567598917386,
            "ambiguous_notional_pct": 0.4527396797123202,
            "unobservable_notional_pct": 0.04930423630709196,
            "unclear_notional_pct": 0.5020439160194121,
            "run_retail_pct": 0.2222222222222222,
            "run_mixed_pct": 0.125,
            "run_instit_pct": 0.1388888888888889,
            "run_unclear_pct": 0.5138888888888888,
            "avg_trade_size": 1429.9644628099174,
            "avg_run_notional": 2403.1347222222225,
            "dominant_bucket": "AMBIGUOUS",
            "dominant_label": "Unclassified Flow",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.3611111111111111,
            "na_confidence_pct": 0.6388888888888888,
            "avg_feature_coverage": 0.7979166666666667,
            "observable_run_pct": 0.9583333333333334,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "532",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.10638297872340426,
            "mixed_pct": 0.06382978723404255,
            "instit_pct": 0.02127659574468085,
            "ambiguous_pct": 0.1702127659574468,
            "unobservable_pct": 0.6382978723404256,
            "unclear_pct": 0.8085106382978724,
            "retail_qty_pct": 0.0484675081612787,
            "mixed_qty_pct": 0.0965370363398749,
            "instit_qty_pct": 0.05378107874087738,
            "ambiguous_qty_pct": 0.13445269685219347,
            "unobservable_qty_pct": 0.6667616799057755,
            "unclear_qty_pct": 0.8012143767579689,
            "retail_notional_pct": 0.04847774293996482,
            "mixed_notional_pct": 0.09653599797785317,
            "instit_notional_pct": 0.05378050026621347,
            "ambiguous_notional_pct": 0.13445125066553368,
            "unobservable_notional_pct": 0.6667545081504348,
            "unclear_notional_pct": 0.8012057588159684,
            "run_retail_pct": 0.17857142857142858,
            "run_mixed_pct": 0.10714285714285714,
            "run_instit_pct": 0.03571428571428571,
            "run_unclear_pct": 0.6785714285714286,
            "avg_trade_size": 395.6191489361702,
            "avg_run_notional": 664.0749999999999,
            "dominant_bucket": "UNOBSERVABLE",
            "dominant_label": "Not Observable",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.21428571428571427,
            "na_confidence_pct": 0.7857142857142857,
            "avg_feature_coverage": 0.6946428571428573,
            "observable_run_pct": 0.5,
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
          "trade_id": "BMLL-28",
          "timestamp": "2026-04-10T08:43:12.263600",
          "price": 0.23,
          "size": 200.0,
          "notional": 46.0,
          "bucket": "RETAIL",
          "confidence": "LOW",
          "run_id": 1330,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-27",
          "timestamp": "2026-04-10T08:41:55.434500",
          "price": 0.225,
          "size": 2000.0,
          "notional": 450.0,
          "bucket": "RETAIL",
          "confidence": "LOW",
          "run_id": 1329,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-26",
          "timestamp": "2026-04-10T08:16:02.752900",
          "price": 0.225,
          "size": 17200.0,
          "notional": 3870.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 1328,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-25",
          "timestamp": "2026-04-10T08:16:02.752900",
          "price": 0.225,
          "size": 30000.0,
          "notional": 6750.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 1328,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-24",
          "timestamp": "2026-04-10T08:16:02.752900",
          "price": 0.225,
          "size": 30400.0,
          "notional": 6840.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 1328,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-23",
          "timestamp": "2026-04-10T08:16:02.722800",
          "price": 0.225,
          "size": 13800.0,
          "notional": 3105.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 1328,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-22",
          "timestamp": "2026-04-10T08:16:02.722800",
          "price": 0.225,
          "size": 8600.0,
          "notional": 1935.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 1328,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-21",
          "timestamp": "2026-04-10T08:15:55.492300",
          "price": 0.225,
          "size": 191400.0,
          "notional": 43065.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 1327,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-20",
          "timestamp": "2026-04-10T08:15:55.492200",
          "price": 0.225,
          "size": 4000.0,
          "notional": 900.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 1327,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-19",
          "timestamp": "2026-04-10T08:15:55.492200",
          "price": 0.225,
          "size": 2000.0,
          "notional": 450.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 1327,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-18",
          "timestamp": "2026-04-10T08:15:55.492200",
          "price": 0.225,
          "size": 2000.0,
          "notional": 450.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 1327,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-17",
          "timestamp": "2026-04-10T08:15:55.492200",
          "price": 0.225,
          "size": 6000.0,
          "notional": 1350.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 1327,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-16",
          "timestamp": "2026-04-10T08:15:55.492200",
          "price": 0.225,
          "size": 10000.0,
          "notional": 2250.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 1327,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-15",
          "timestamp": "2026-04-10T08:15:55.492200",
          "price": 0.225,
          "size": 100000.0,
          "notional": 22500.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 1327,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-14",
          "timestamp": "2026-04-10T08:15:55.492200",
          "price": 0.225,
          "size": 123000.0,
          "notional": 27675.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 1327,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-13",
          "timestamp": "2026-04-10T08:15:55.492200",
          "price": 0.225,
          "size": 15000.0,
          "notional": 3375.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 1327,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-12",
          "timestamp": "2026-04-10T08:15:55.492200",
          "price": 0.225,
          "size": 37900.0,
          "notional": 8527.5,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 1327,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-11",
          "timestamp": "2026-04-10T07:38:38.802200",
          "price": 0.225,
          "size": 17000.0,
          "notional": 3825.0,
          "bucket": "RETAIL",
          "confidence": "LOW",
          "run_id": 1326,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-10",
          "timestamp": "2026-04-10T07:05:50.077200",
          "price": 0.23,
          "size": 1000.0,
          "notional": 230.0,
          "bucket": "RETAIL",
          "confidence": "LOW",
          "run_id": 1325,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-9",
          "timestamp": "2026-04-10T06:58:20.689800",
          "price": 0.23,
          "size": 1200.0,
          "notional": 276.0,
          "bucket": "RETAIL",
          "confidence": "LOW",
          "run_id": 1324,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-7",
          "timestamp": "2026-04-10T03:04:04.646000",
          "price": 0.23,
          "size": 5000.0,
          "notional": 1150.0,
          "bucket": "RETAIL",
          "confidence": "LOW",
          "run_id": 1323,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-6",
          "timestamp": "2026-04-10T02:35:03.615700",
          "price": 0.23,
          "size": 5000.0,
          "notional": 1150.0,
          "bucket": "RETAIL",
          "confidence": "LOW",
          "run_id": 1322,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-5",
          "timestamp": "2026-04-10T02:31:32.824000",
          "price": 0.23,
          "size": 5000.0,
          "notional": 1150.0,
          "bucket": "RETAIL",
          "confidence": "LOW",
          "run_id": 1321,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-4",
          "timestamp": "2026-04-10T01:56:10.111500",
          "price": 0.23,
          "size": 100000.0,
          "notional": 23000.0,
          "bucket": "MIXED",
          "confidence": "NA",
          "run_id": 1320,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-3",
          "timestamp": "2026-04-10T01:54:12.093400",
          "price": 0.23,
          "size": 800.0,
          "notional": 184.0,
          "bucket": "RETAIL",
          "confidence": "LOW",
          "run_id": 1319,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-2",
          "timestamp": "2026-04-10T01:39:30.369600",
          "price": 0.23,
          "size": 5000.0,
          "notional": 1150.0,
          "bucket": "RETAIL",
          "confidence": "LOW",
          "run_id": 1318,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-1",
          "timestamp": "2026-04-10T01:17:15.237300",
          "price": 0.23,
          "size": 300.0,
          "notional": 69.0,
          "bucket": "RETAIL",
          "confidence": "LOW",
          "run_id": 1317,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-52",
          "timestamp": "2026-04-09T08:22:41.755600",
          "price": 0.23,
          "size": 300.0,
          "notional": 69.0,
          "bucket": "RETAIL",
          "confidence": "LOW",
          "run_id": 1316,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-51",
          "timestamp": "2026-04-09T07:27:40.070400",
          "price": 0.23,
          "size": 30000.0,
          "notional": 6900.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 1315,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-50",
          "timestamp": "2026-04-09T07:27:40.070400",
          "price": 0.23,
          "size": 4200.0,
          "notional": 966.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 1315,
          "d1": "MULTI_FILL_SINGLE_PRICE",
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
      "total_trades": 1173,
      "price_moving_trades": 154,
      "pct_price_moving": 13.128729752770674,
      "all_movers": {
        "count": 154,
        "avg_size": 2360.344155844156,
        "median_size": 458.0,
        "retail_count": 98,
        "mixed_count": 17,
        "institutional_count": 21,
        "ambiguous_count": 18,
        "unobservable_count": 0,
        "retail_pct": 63.63636363636363,
        "mixed_pct": 11.03896103896104,
        "instit_pct": 13.636363636363635,
        "unclear_pct": 11.688311688311687
      },
      "positive_movers": {
        "count": 76,
        "avg_size": 1602.1513157894738,
        "median_size": 72.0,
        "retail_count": 55,
        "mixed_count": 10,
        "institutional_count": 6,
        "ambiguous_count": 5,
        "unobservable_count": 0,
        "retail_pct": 72.36842105263158,
        "mixed_pct": 13.157894736842104,
        "instit_pct": 7.894736842105263,
        "unclear_pct": 6.578947368421052
      },
      "negative_movers": {
        "count": 78,
        "avg_size": 3099.096153846154,
        "median_size": 1081.0,
        "retail_count": 43,
        "mixed_count": 7,
        "institutional_count": 15,
        "ambiguous_count": 13,
        "unobservable_count": 0,
        "retail_pct": 55.12820512820513,
        "mixed_pct": 8.974358974358974,
        "instit_pct": 19.230769230769234,
        "unclear_pct": 16.666666666666664
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
            "avg_short_ratio": 0.006061149661581539,
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
        "interpretation": "Shorts covering significantly (-100% MoM)"
      },
      "short_series": {
        "valid": true,
        "rows": [
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
          "avg_short_ratio": 1.93407586373894e-05,
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
          "ticker": "S71",
          "avg_short_ratio": 0.0005869377973637678,
          "max_short_ratio": 0.08042344762205719,
          "is_target": false
        },
        {
          "ticker": "ITS",
          "avg_short_ratio": 0.0032051558658129577,
          "max_short_ratio": 0.1385606874328679,
          "is_target": false
        },
        {
          "ticker": "U77",
          "avg_short_ratio": 0.00361056485986067,
          "max_short_ratio": 1.0,
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
          "opening": 0.05188958561781627,
          "continuous": 0.9350772428774508,
          "closing": 0.012886921263420085,
          "auctions": 0.06492275712254926,
          "other": 0.0
        },
        "1W": {
          "opening": 0.03086269865639618,
          "continuous": 0.9614699990172576,
          "closing": 0.007581264571449767,
          "auctions": 0.038530000982742355,
          "other": 0.0
        },
        "2W": {
          "opening": 0.021233569527740026,
          "continuous": 0.9733612780528514,
          "closing": 0.005212947018883721,
          "auctions": 0.026638721947148513,
          "other": 0.0
        },
        "1M": {
          "opening": 0.016460309200604137,
          "continuous": 0.9721658951597014,
          "closing": 0.008679168726410088,
          "auctions": 0.027834104840298544,
          "other": 0.0
        }
      },
      "hhi": {
        "1D": 0.3292680727874911,
        "1W": 0.3553292848303129,
        "2W": 0.3042898371777307,
        "1M": 0.29188929145960757
      },
      "profile_buckets": [
        {
          "time": "08:30",
          "avg_share": 0.0038
        },
        {
          "time": "09:00",
          "avg_share": 0.0853
        },
        {
          "time": "09:30",
          "avg_share": 0.0739
        },
        {
          "time": "10:00",
          "avg_share": 0.0182
        },
        {
          "time": "10:30",
          "avg_share": 0.0733
        },
        {
          "time": "11:00",
          "avg_share": 0.0696
        },
        {
          "time": "11:30",
          "avg_share": 0.0796
        },
        {
          "time": "12:30",
          "avg_share": 0.0018
        },
        {
          "time": "13:00",
          "avg_share": 0.0404
        },
        {
          "time": "13:30",
          "avg_share": 0.0783
        },
        {
          "time": "14:00",
          "avg_share": 0.0442
        },
        {
          "time": "14:30",
          "avg_share": 0.0478
        },
        {
          "time": "15:00",
          "avg_share": 0.1866
        },
        {
          "time": "15:30",
          "avg_share": 0.0476
        },
        {
          "time": "16:00",
          "avg_share": 0.0329
        },
        {
          "time": "16:30",
          "avg_share": 0.0536
        },
        {
          "time": "17:00",
          "avg_share": 0.0631
        }
      ],
      "peers_hhi_rows": [
        {
          "ticker": "TKU",
          "auctions_pct": 6.664166000613091,
          "hhi": 0.23666339394407993,
          "interp": {
            "text": "Moderate",
            "cls": "bg-amber-500/20 text-amber-400",
            "you": true
          }
        },
        {
          "ticker": "ITS",
          "auctions_pct": 3.9683863899272143,
          "hhi": 0.19662698100311127,
          "interp": {
            "text": "Moderate",
            "cls": "bg-amber-500/20 text-amber-400"
          }
        },
        {
          "ticker": "NXR",
          "auctions_pct": 2.041687462674893,
          "hhi": 0.7923841672102456,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "LVR",
          "auctions_pct": 3.393863412701248,
          "hhi": 0.4498476865748695,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "U77",
          "auctions_pct": 4.250688679269079,
          "hhi": 0.5451329504450748,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "532",
          "auctions_pct": 7.740391975733107,
          "hhi": 0.8819381282154602,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "KUX",
          "auctions_pct": 0.27495188342040144,
          "hhi": 0.5833437712921885,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "42F",
          "auctions_pct": 4.172968679945333,
          "hhi": 0.5215861501704372,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "S71",
          "auctions_pct": 1.6397204208823388,
          "hhi": 0.4213076148787461,
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
