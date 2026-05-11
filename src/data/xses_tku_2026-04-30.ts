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
      "marketCap": 67418811.30600001,
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
      "marketCap": 98736916.8,
      "sector": "Software - Application",
      "industry": "Technology"
    },
    {
      "ticker": "42F",
      "name": "Totm Tech",
      "marketCap": 43499727.864,
      "sector": "Software - Infrastructure",
      "industry": "Technology"
    },
    {
      "ticker": "LVR",
      "name": "17LIVE GROUP",
      "marketCap": 154942584.795,
      "sector": "Software - Application",
      "industry": "Technology"
    },
    {
      "ticker": "ITS",
      "name": "Info-Tech",
      "marketCap": 251550000.0,
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
    "asof_date": "2026-04-30",
    "industry": "Technology",
    "sector": "Software - Application",
    "market_cap_display": "134.0M",
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
          "score_pca": 64.51612903225806,
          "score_pca_percentile": 64.51612903225806,
          "rank_pca": 199,
          "total": 558,
          "adv_notional_sgd": 178083.0,
          "adv_volume_shares": 757800.0,
          "free_float_shares": null,
          "turnover_ratio": 0.001328911216709496,
          "votes": 21.0,
          "trades": 21.0,
          "spread_pct": 0.023336745138178114,
          "spread_ticks": 1.1176470588235294,
          "amihud": 1.1698664854777475e-07,
          "volatility": 0.20071506748399928
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
          "n_peers": 8,
          "peer_median_adv": 6481.5,
          "peer_median_score_pca": 32.795698924731184,
          "peer_median_trades": 6.5,
          "peer_median_volatility": 0.024014190746775518,
          "peer_median_spread_pct": 0.04158513926797991,
          "peer_median_spread_ticks": 2.0551215917464996,
          "peer_median_amihud": 3.041401677651175e-08,
          "peer_median_turnover_ratio": 0.00044890812081597065,
          "target_vs_peer": {
            "score_pca_delta": 31.72,
            "adv_delta_pct": 2647.6,
            "trades_delta_pct": 223.08,
            "volatility_delta_pct": -735.82,
            "spread_pct_delta_pct": 43.88,
            "spread_ticks_delta_pct": -45.62,
            "amihud_delta_pct": -284.65,
            "turnover_ratio_delta_pct": 196.03
          }
        },
        "peer_liquidity": [
          {
            "ticker": "TKU",
            "score_pca": 64.51612903225806,
            "rank_pca": 199,
            "adv": 178083.0,
            "trades": 21.0,
            "volatility": 0.20071506748399928,
            "spread_pct": 0.023336745138178114,
            "spread_ticks": 1.1176470588235294,
            "amihud": 1.1698664854777475e-07,
            "turnover_ratio": 0.001328911216709496,
            "is_target": true
          },
          {
            "ticker": "KUX",
            "score_pca": 3.584229390681003,
            "rank_pca": 539,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.0,
            "spread_pct": 0.5979381443298969,
            "spread_ticks": 33.142857142857146,
            "amihud": null,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "532",
            "score_pca": 23.655913978494624,
            "rank_pca": 427,
            "adv": 7918.5,
            "trades": 7.0,
            "volatility": 0.0,
            "spread_pct": 0.6666666666666666,
            "spread_ticks": 1.0,
            "amihud": 0.0,
            "turnover_ratio": 0.0008584117355248062,
            "is_target": false
          },
          {
            "ticker": "U77",
            "score_pca": 30.286738351254485,
            "rank_pca": 390,
            "adv": 1584.0,
            "trades": 2.0,
            "volatility": 0.048028381493551035,
            "spread_pct": 0.01418439716312058,
            "spread_ticks": 2.8,
            "amihud": 3.1724277955433873e-06,
            "turnover_ratio": 2.477739370064498e-05,
            "is_target": false
          },
          {
            "ticker": "J03",
            "score_pca": 72.22222222222221,
            "rank_pca": 156,
            "adv": 99624.79999999999,
            "trades": 44.0,
            "volatility": 0.8295328438373523,
            "spread_pct": 0.054358974358974396,
            "spread_ticks": 1.2771084337349397,
            "amihud": 1.2045193566260622e-06,
            "turnover_ratio": 0.007742826911371641,
            "is_target": false
          },
          {
            "ticker": "NXR",
            "score_pca": 17.921146953405017,
            "rank_pca": 459,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.0,
            "spread_pct": 0.043276661514683186,
            "spread_ticks": 3.111111111111111,
            "amihud": null,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "42F",
            "score_pca": 90.32258064516128,
            "rank_pca": 55,
            "adv": 1238384.1,
            "trades": 320.0,
            "volatility": 1.2730366958631603,
            "spread_pct": 0.033733376581252035,
            "spread_ticks": 1.0048309178743962,
            "amihud": 5.209702630408288e-08,
            "turnover_ratio": 0.0520738578609729,
            "is_target": false
          },
          {
            "ticker": "LVR",
            "score_pca": 35.30465949820788,
            "rank_pca": 362,
            "adv": 5044.5,
            "trades": 6.0,
            "volatility": 0.0,
            "spread_pct": 0.039893617021276626,
            "spread_ticks": 6.923076923076923,
            "amihud": 0.0,
            "turnover_ratio": 3.940450610713503e-05,
            "is_target": false
          },
          {
            "ticker": "ITS",
            "score_pca": 85.84229390681004,
            "rank_pca": 80,
            "adv": 1162785.0,
            "trades": 934.0,
            "volatility": 0.3413934839268424,
            "spread_pct": 0.006705992396355084,
            "spread_ticks": 1.3102431834929993,
            "amihud": 8.731007248940622e-09,
            "turnover_ratio": 0.017663280932957732,
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
              "mean": 0.09942514141803646,
              "median": 0.024014190746775518,
              "min": 0.0,
              "max": 0.3413934839268424,
              "p5": 0.0,
              "p95": 0.2937482340064121,
              "count": 8
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 1576375.5,
              "median": 6481.5,
              "min": 0.0,
              "max": 11255589.0,
              "p5": 0.0,
              "p95": 7723107.599999994,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.17415115611547644,
              "median": 0.03161518107972737,
              "min": 0.001207024693634312,
              "max": 0.6666666666666666,
              "p5": 0.0031316633895865824,
              "p95": 0.6426116838487972,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0034341417721118505,
              "median": 0.00044890812081597065,
              "min": 0.0,
              "max": 0.017663280932957732,
              "p5": 0.0,
              "p95": 0.014126554543585766,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 5.498916876545746e-07,
              "median": 4.967840918142734e-09,
              "min": 0.0,
              "max": 3.1724277955433873e-06,
              "p5": 0.0,
              "p95": 2.4085675087944843e-06,
              "count": 6
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 432.625,
              "median": 6.5,
              "min": 0.0,
              "max": 2491.0,
              "p5": 0.0,
              "p95": 1946.0499999999993,
              "count": 8
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 314417.6125,
              "median": 6481.5,
              "min": 0.0,
              "max": 1238384.1,
              "p5": 0.0,
              "p95": 1211924.415,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 164.125,
              "median": 6.5,
              "min": 0.0,
              "max": 934.0,
              "p5": 0.0,
              "p95": 719.0999999999997,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.3114989256401133,
              "median": 0.024014190746775518,
              "min": 0.0,
              "max": 1.2730366958631603,
              "p5": 0.0,
              "p95": 1.1178103476541272,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.18209472875402816,
              "median": 0.04158513926797991,
              "min": 0.006705992396355084,
              "max": 0.6666666666666666,
              "p5": 0.009323434064723007,
              "p95": 0.6426116838487972,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 6.32115346401844,
              "median": 2.0551215917464996,
              "min": 1.0,
              "max": 33.142857142857146,
              "p5": 1.0016908212560387,
              "p95": 23.965934065934054,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.009800319917579358,
              "median": 0.00044890812081597065,
              "min": 0.0,
              "max": 0.0520738578609729,
              "p5": 0.0,
              "p95": 0.04003015593616757,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 7.396291976204122e-07,
              "median": 3.041401677651175e-08,
              "min": 0.0,
              "max": 3.1724277955433873e-06,
              "p5": 0.0,
              "p95": 2.680450685814056e-06,
              "count": 6
            }
          },
          "returns": {
            "window_days": 1,
            "n_obs": 1,
            "stock": -0.02083333333333337,
            "market": 0.010639794994950824,
            "sector": -0.002512562814070307,
            "peers": -0.002512562814070307,
            "vs_market": -0.031473128328284194,
            "vs_sector": -0.018320770519263063,
            "vs_peers": -0.018320770519263063
          }
        }
      },
      "1w": {
        "label": "1W",
        "window_days": 5,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 5,
          "score_pca": 65.59139784946237,
          "score_pca_percentile": 65.59139784946237,
          "rank_pca": 193,
          "total": 558,
          "adv_notional_sgd": 111050.0,
          "adv_volume_shares": 460300.0,
          "free_float_shares": null,
          "turnover_ratio": 0.0008072022077743218,
          "votes": 34.0,
          "trades": 34.0,
          "spread_pct": 0.0235206272167258,
          "spread_ticks": 1.1611111111111112,
          "amihud": 1.1698664854777475e-07,
          "volatility": 0.14367641446108
        },
        "pca": {
          "valid": true,
          "window_days": 5,
          "variance_explained": 0.5126220607200482,
          "loadings": {
            "log_adv": 0.5530587498827798,
            "log_trades": 0.5039296848931332,
            "log_turnover": 0.5053635617488527,
            "neg_spread": 0.40331903755544074,
            "neg_amihud": 0.13702172297208037,
            "neg_vol": 0.05785640584441241
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
          "peer_median_adv": 8362.5,
          "peer_median_score_pca": 39.60573476702509,
          "peer_median_trades": 15.5,
          "peer_median_volatility": 0.3649671443408209,
          "peer_median_spread_pct": 0.032885995423960035,
          "peer_median_spread_ticks": 1.7259101941747574,
          "peer_median_amihud": 5.209702630408288e-08,
          "peer_median_turnover_ratio": 0.0004648081846837619,
          "target_vs_peer": {
            "score_pca_delta": 25.99,
            "adv_delta_pct": 1228.0,
            "trades_delta_pct": 119.35,
            "volatility_delta_pct": 60.63,
            "spread_pct_delta_pct": 28.48,
            "spread_ticks_delta_pct": -32.72,
            "amihud_delta_pct": -124.56,
            "turnover_ratio_delta_pct": 73.66
          }
        },
        "peer_liquidity": [
          {
            "ticker": "TKU",
            "score_pca": 65.59139784946237,
            "rank_pca": 193,
            "adv": 111050.0,
            "trades": 34.0,
            "volatility": 0.14367641446108,
            "spread_pct": 0.0235206272167258,
            "spread_ticks": 1.1611111111111112,
            "amihud": 1.1698664854777475e-07,
            "turnover_ratio": 0.0008072022077743218,
            "is_target": true
          },
          {
            "ticker": "KUX",
            "score_pca": 4.838709677419355,
            "rank_pca": 532,
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
            "score_pca": 22.401433691756274,
            "rank_pca": 434,
            "adv": 7918.5,
            "trades": 25.0,
            "volatility": 8.694826047713663,
            "spread_pct": 0.6666666666666666,
            "spread_ticks": 1.0,
            "amihud": 0.0,
            "turnover_ratio": 0.0008584117355248062,
            "is_target": false
          },
          {
            "ticker": "U77",
            "score_pca": 36.91756272401434,
            "rank_pca": 353,
            "adv": 3800.0,
            "trades": 2.0,
            "volatility": 0.2808942524451745,
            "spread_pct": 0.015959680806383887,
            "spread_ticks": 3.1666666666666665,
            "amihud": 3.7954751208186987e-06,
            "turnover_ratio": 5.884631003903183e-05,
            "is_target": false
          },
          {
            "ticker": "J03",
            "score_pca": 71.68458781362007,
            "rank_pca": 159,
            "adv": 199767.5,
            "trades": 67.0,
            "volatility": 1.4360820403847354,
            "spread_pct": 0.04367165386170642,
            "spread_ticks": 1.08,
            "amihud": 1.8455706458297627e-07,
            "turnover_ratio": 0.013662796352066374,
            "is_target": false
          },
          {
            "ticker": "NXR",
            "score_pca": 33.51254480286738,
            "rank_pca": 372,
            "adv": 852.0,
            "trades": 2.0,
            "volatility": 0.31188298858084673,
            "spread_pct": 0.030513176144244137,
            "spread_ticks": 2.2,
            "amihud": 7.64112683697464e-06,
            "turnover_ratio": 4.271777915392312e-05,
            "is_target": false
          },
          {
            "ticker": "42F",
            "score_pca": 75.08960573476703,
            "rank_pca": 140,
            "adv": 348468.0,
            "trades": 78.0,
            "volatility": 0.7957681291780223,
            "spread_pct": 0.03525881470367593,
            "spread_ticks": 1.0048309178743962,
            "amihud": 5.209702630408288e-08,
            "turnover_ratio": 0.014164590774160931,
            "is_target": false
          },
          {
            "ticker": "LVR",
            "score_pca": 42.29390681003584,
            "rank_pca": 323,
            "adv": 8806.5,
            "trades": 6.0,
            "volatility": 0.4180513001007951,
            "spread_pct": 0.02006435737270492,
            "spread_ticks": 3.533333333333333,
            "amihud": 0.0,
            "turnover_ratio": 7.120463384271768e-05,
            "is_target": false
          },
          {
            "ticker": "ITS",
            "score_pca": 85.12544802867383,
            "rank_pca": 84,
            "adv": 1162785.0,
            "trades": 524.0,
            "volatility": 0.22919987736664302,
            "spread_pct": 0.007561748389300486,
            "spread_ticks": 1.2518203883495145,
            "amihud": 8.731007248940622e-09,
            "turnover_ratio": 0.017663280932957732,
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
              "mean": 0.5255972921874864,
              "median": 0.29101146339129735,
              "min": 0.0,
              "max": 8.694826047713663,
              "p5": 0.0,
              "p95": 1.7685828195791216,
              "count": 558
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 3623807.882149447,
              "median": 20050.0,
              "min": 0.0,
              "max": 306786193.7,
              "p5": 0.0,
              "p95": 15035829.349999975,
              "count": 558
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.10583447594001849,
              "median": 0.02759137344740594,
              "min": 0.0002705286818559187,
              "max": 1.4976744186046513,
              "p5": 0.003469297439995372,
              "p95": 0.5330347144456886,
              "count": 556
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.007514707483760433,
              "median": 0.00038030479925727856,
              "min": 0.0,
              "max": 2.3103289170127215,
              "p5": 0.0,
              "p95": 0.01534394771738691,
              "count": 551
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 0.0001250547756696068,
              "median": 6.215258106793156e-08,
              "min": 0.0,
              "max": 0.02083333333333333,
              "p5": 0.0,
              "p95": 0.00011151807623011154,
              "count": 516
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 525.8243727598566,
              "median": 9.5,
              "min": 0.0,
              "max": 13325.0,
              "p5": 0.0,
              "p95": 3067.799999999995,
              "count": 558
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 1.300692495359868,
              "median": 0.2963886205130106,
              "min": 0.0,
              "max": 8.694826047713663,
              "p5": 0.05028674506137801,
              "p95": 5.797954886049155,
              "count": 8
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 1646267.75,
              "median": 8362.5,
              "min": 0.0,
              "max": 11874930.0,
              "p5": 298.20000000000005,
              "p95": 8125679.249999994,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.16559829234959433,
              "median": 0.02179249229471536,
              "min": 0.001258376039591141,
              "max": 0.6666666666666666,
              "p5": 0.0034645563619894117,
              "p95": 0.6290679304897313,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0034209732753056462,
              "median": 0.00043920342080851975,
              "min": 0.0,
              "max": 0.017663280932957732,
              "p5": 1.4951222703873094e-05,
              "p95": 0.014234275517525943,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.6518815573479045e-06,
              "median": 8.731007248940622e-09,
              "min": 0.0,
              "max": 7.64112683697464e-06,
              "p5": 0.0,
              "p95": 6.487431322127854e-06,
              "count": 7
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 385.5,
              "median": 15.5,
              "min": 0.0,
              "max": 2491.0,
              "p5": 0.7000000000000001,
              "p95": 1802.5499999999988,
              "count": 8
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 216549.6875,
              "median": 8362.5,
              "min": 0.0,
              "max": 1162785.0,
              "p5": 298.20000000000005,
              "p95": 877774.0499999996,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 88.0,
              "median": 15.5,
              "min": 0.0,
              "max": 524.0,
              "p5": 0.7000000000000001,
              "p95": 367.89999999999975,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 1.520838079471235,
              "median": 0.3649671443408209,
              "min": 0.0,
              "max": 8.694826047713663,
              "p5": 0.08021995707832506,
              "p95": 6.154265645148534,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.1723672255132275,
              "median": 0.032885995423960035,
              "min": 0.007561748389300486,
              "max": 0.6666666666666666,
              "p5": 0.010501024735279677,
              "p95": 0.6290679304897313,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 5.342081413277989,
              "median": 1.7259101941747574,
              "min": 1.0,
              "max": 29.5,
              "p5": 1.0016908212560387,
              "p95": 20.411666666666655,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.00581523106471819,
              "median": 0.0004648081846837619,
              "min": 0.0,
              "max": 0.017663280932957732,
              "p5": 1.4951222703873094e-05,
              "p95": 0.01643873937737885,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.668855293704191e-06,
              "median": 5.209702630408288e-08,
              "min": 0.0,
              "max": 7.64112683697464e-06,
              "p5": 0.0,
              "p95": 6.487431322127854e-06,
              "count": 7
            }
          },
          "returns": {
            "window_days": 5,
            "n_obs": 5,
            "stock": -0.07843137254901977,
            "market": -0.006355020973208836,
            "sector": -0.02648484863649736,
            "peers": -0.01867049287533551,
            "vs_market": -0.07207635157581094,
            "vs_sector": -0.05194652391252241,
            "vs_peers": -0.059760879673684264
          }
        }
      },
      "30d": {
        "label": "1M",
        "window_days": 21,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 21,
          "score_pca": 70.25089605734766,
          "score_pca_percentile": 70.25089605734766,
          "rank_pca": 167,
          "total": 558,
          "adv_notional_sgd": 188278.0,
          "adv_volume_shares": 818600.0,
          "free_float_shares": null,
          "turnover_ratio": 0.001435532755342298,
          "votes": 50.0,
          "trades": 50.0,
          "spread_pct": 0.02342442833240376,
          "spread_ticks": 1.1176470588235294,
          "amihud": 6.348843558145879e-08,
          "volatility": 0.5646975851696976
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
          "n_peers": 8,
          "peer_median_adv": 12043.15,
          "peer_median_score_pca": 49.01433691756272,
          "peer_median_trades": 6.5,
          "peer_median_volatility": 0.4635223749702126,
          "peer_median_spread_pct": 0.03594866986991683,
          "peer_median_spread_ticks": 1.801388888888889,
          "peer_median_amihud": 5.178020819126168e-07,
          "peer_median_turnover_ratio": 0.00012552077209279687,
          "target_vs_peer": {
            "score_pca_delta": 21.24,
            "adv_delta_pct": 1463.4,
            "trades_delta_pct": 669.23,
            "volatility_delta_pct": -21.83,
            "spread_pct_delta_pct": 34.84,
            "spread_ticks_delta_pct": -37.96,
            "amihud_delta_pct": 87.74,
            "turnover_ratio_delta_pct": 1043.66
          }
        },
        "peer_liquidity": [
          {
            "ticker": "TKU",
            "score_pca": 70.25089605734766,
            "rank_pca": 167,
            "adv": 188278.0,
            "trades": 50.0,
            "volatility": 0.5646975851696976,
            "spread_pct": 0.02342442833240376,
            "spread_ticks": 1.1176470588235294,
            "amihud": 6.348843558145879e-08,
            "turnover_ratio": 0.001435532755342298,
            "is_target": true
          },
          {
            "ticker": "KUX",
            "score_pca": 1.7921146953405016,
            "rank_pca": 549,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 4.014372790730359,
            "spread_pct": 0.5592417061611374,
            "spread_ticks": 22.857142857142858,
            "amihud": 0.00031763779127385455,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "532",
            "score_pca": 9.67741935483871,
            "rank_pca": 505,
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
            "score_pca": 44.80286738351255,
            "rank_pca": 309,
            "adv": 5114.3,
            "trades": 4.0,
            "volatility": 0.3586592445825063,
            "spread_pct": 0.01765447667087013,
            "spread_ticks": 2.8181818181818183,
            "amihud": 3.6088676194545435e-06,
            "turnover_ratio": 7.9597377263322e-05,
            "is_target": false
          },
          {
            "ticker": "J03",
            "score_pca": 66.12903225806451,
            "rank_pca": 190,
            "adv": 137406.6,
            "trades": 67.0,
            "volatility": 1.629836316647289,
            "spread_pct": 0.054358974358974396,
            "spread_ticks": 1.0449826989619377,
            "amihud": 2.8441146290825697e-07,
            "turnover_ratio": 0.013060591679735067,
            "is_target": false
          },
          {
            "ticker": "NXR",
            "score_pca": 23.655913978494624,
            "rank_pca": 427,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.23438651930981783,
            "spread_pct": 0.03416149068322985,
            "spread_ticks": 2.4444444444444446,
            "amihud": 4.024144869215278e-06,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "42F",
            "score_pca": 74.37275985663082,
            "rank_pca": 144,
            "adv": 225360.9,
            "trades": 50.0,
            "volatility": 0.4992349280218135,
            "spread_pct": 0.03773584905660381,
            "spread_ticks": 1.0379746835443038,
            "amihud": 0.0,
            "turnover_ratio": 0.010178345484924502,
            "is_target": false
          },
          {
            "ticker": "LVR",
            "score_pca": 53.2258064516129,
            "rank_pca": 262,
            "adv": 18972.0,
            "trades": 9.0,
            "volatility": 0.42780982191861167,
            "spread_pct": 0.01976794155565107,
            "spread_ticks": 3.1578947368421053,
            "amihud": 7.511927009169765e-07,
            "turnover_ratio": 0.00017144416692227172,
            "is_target": false
          },
          {
            "ticker": "ITS",
            "score_pca": 85.12544802867383,
            "rank_pca": 84,
            "adv": 986968.0,
            "trades": 434.0,
            "volatility": 0.37450331451916996,
            "spread_pct": 0.01013835115561731,
            "spread_ticks": 1.1583333333333334,
            "amihud": 1.7855362634975453e-08,
            "turnover_ratio": 0.013661420704813193,
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
              "mean": 1.2801633144783326,
              "median": 0.4011565682188908,
              "min": 0.23438651930981783,
              "max": 4.014372790730359,
              "p5": 0.2633690353409512,
              "p95": 3.9917315500439385,
              "count": 8
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 1870637.7874999999,
              "median": 12043.15,
              "min": 0.0,
              "max": 13765269.999999998,
              "p5": 0.0,
              "p95": 9292864.299999993,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.16654008018102778,
              "median": 0.021596184944027416,
              "min": 0.0012655802226460978,
              "max": 0.6666666666666666,
              "p5": 0.004371050049186022,
              "p95": 0.6290679304897313,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.002965185177445025,
              "median": 0.00012552077209279687,
              "min": 0.0,
              "max": 0.013661420704813193,
              "p5": 0.0,
              "p95": 0.011791672679433438,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 4.076302394368788e-05,
              "median": 4.073405682492176e-07,
              "min": 0.0,
              "max": 0.00031763779127385455,
              "p5": 2.979507458473297e-10,
              "p95": 0.00020787301503223063,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 511.125,
              "median": 6.5,
              "min": 0.0,
              "max": 3591.0,
              "p5": 0.0,
              "p95": 2486.0499999999984,
              "count": 8
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 171790.22499999998,
              "median": 12043.15,
              "min": 0.0,
              "max": 986968.0,
              "p5": 0.0,
              "p95": 720405.5149999997,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 70.625,
              "median": 6.5,
              "min": 0.0,
              "max": 434.0,
              "p5": 0.0,
              "p95": 305.54999999999984,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 1.4360608084194835,
              "median": 0.4635223749702126,
              "min": 0.23438651930981783,
              "max": 4.014372790730359,
              "p5": 0.2778819731552588,
              "p95": 3.9917315500439385,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.17496568203859383,
              "median": 0.03594866986991683,
              "min": 0.01013835115561731,
              "max": 0.6666666666666666,
              "p5": 0.012768995085955796,
              "p95": 0.6290679304897313,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 4.43986932155635,
              "median": 1.801388888888889,
              "min": 1.0,
              "max": 22.857142857142858,
              "p5": 1.0132911392405064,
              "p95": 15.962406015037583,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 4.079053291112307e-05,
              "median": 5.178020819126168e-07,
              "min": 0.0,
              "max": 0.00031763779127385455,
              "p5": 0.0,
              "p95": 0.00020787301503223063,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.004650700292429375,
              "median": 0.00012552077209279687,
              "min": 0.0,
              "max": 0.013661420704813193,
              "p5": 0.0,
              "p95": 0.013451130546035849,
              "count": 8
            }
          },
          "returns": {
            "window_days": 21,
            "n_obs": 21,
            "stock": 0.04444444444444384,
            "market": 0.005575688013334856,
            "sector": -0.009860428595911408,
            "peers": -0.0003239667960492909,
            "vs_market": 0.038868756431108986,
            "vs_sector": 0.05430487304035525,
            "vs_peers": 0.04476841124049313
          }
        }
      },
      "3m": {
        "label": "3M",
        "window_days": 63,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 63,
          "score_pca": 73.29749103942652,
          "score_pca_percentile": 73.29749103942652,
          "rank_pca": 150,
          "total": 558,
          "adv_notional_sgd": 236831.0,
          "adv_volume_shares": 1064200.0,
          "free_float_shares": null,
          "turnover_ratio": 0.0018662276548195378,
          "votes": 83.0,
          "trades": 83.0,
          "spread_pct": 0.024846815447748628,
          "spread_ticks": 1.1555555555555554,
          "amihud": 7.047937533847717e-08,
          "volatility": 0.57646468494843
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
          "n_peers": 8,
          "peer_median_adv": 6284.6,
          "peer_median_score_pca": 44.086021505376344,
          "peer_median_trades": 4.0,
          "peer_median_volatility": 0.5782596037653236,
          "peer_median_spread_pct": 0.045142973486562224,
          "peer_median_spread_ticks": 1.5192953020134228,
          "peer_median_amihud": 4.623216270438423e-07,
          "peer_median_turnover_ratio": 0.00011567390578804673,
          "target_vs_peer": {
            "score_pca_delta": 29.21,
            "adv_delta_pct": 3668.4,
            "trades_delta_pct": 1975.0,
            "volatility_delta_pct": 0.31,
            "spread_pct_delta_pct": 44.96,
            "spread_ticks_delta_pct": -23.94,
            "amihud_delta_pct": 84.76,
            "turnover_ratio_delta_pct": 1513.35
          }
        },
        "peer_liquidity": [
          {
            "ticker": "TKU",
            "score_pca": 73.29749103942652,
            "rank_pca": 150,
            "adv": 236831.0,
            "trades": 83.0,
            "volatility": 0.57646468494843,
            "spread_pct": 0.024846815447748628,
            "spread_ticks": 1.1555555555555554,
            "amihud": 7.047937533847717e-08,
            "turnover_ratio": 0.0018662276548195378,
            "is_target": true
          },
          {
            "ticker": "KUX",
            "score_pca": 3.225806451612903,
            "rank_pca": 541,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 2.2850987672846097,
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
            "score_pca": 46.95340501792115,
            "rank_pca": 297,
            "adv": 5600.0,
            "trades": 4.0,
            "volatility": 0.3559703069725644,
            "spread_pct": 0.023881994848981524,
            "spread_ticks": 1.75,
            "amihud": 1.5053983250529258e-06,
            "turnover_ratio": 8.548200826722518e-05,
            "is_target": false
          },
          {
            "ticker": "J03",
            "score_pca": 41.21863799283154,
            "rank_pca": 329,
            "adv": 6969.2,
            "trades": 4.0,
            "volatility": 1.1385748413082561,
            "spread_pct": 0.07213114754098364,
            "spread_ticks": 1.125,
            "amihud": 3.032362831673787e-07,
            "turnover_ratio": 0.0008511569729884291,
            "is_target": false
          },
          {
            "ticker": "NXR",
            "score_pca": 34.229390681003586,
            "rank_pca": 368,
            "adv": 400.0,
            "trades": 1.0,
            "volatility": 0.34130072560364566,
            "spread_pct": 0.04377431906614782,
            "spread_ticks": 3.4285714285714284,
            "amihud": 1.6790372046077726e-06,
            "turnover_ratio": 1.779907464746797e-05,
            "is_target": false
          },
          {
            "ticker": "42F",
            "score_pca": 61.648745519713266,
            "rank_pca": 215,
            "adv": 44042.4,
            "trades": 21.0,
            "volatility": 0.6261756988312202,
            "spread_pct": 0.046511627906976626,
            "spread_ticks": 1.0666666666666667,
            "amihud": 0.0,
            "turnover_ratio": 0.002220244362970041,
            "is_target": false
          },
          {
            "ticker": "LVR",
            "score_pca": 53.94265232974911,
            "rank_pca": 258,
            "adv": 17935.0,
            "trades": 9.0,
            "volatility": 0.33891827234898403,
            "spread_pct": 0.015033072760072139,
            "spread_ticks": 2.533333333333333,
            "amihud": 6.214069709203059e-07,
            "turnover_ratio": 0.00014586580330886828,
            "is_target": false
          },
          {
            "ticker": "ITS",
            "score_pca": 82.97491039426524,
            "rank_pca": 96,
            "adv": 809414.0,
            "trades": 315.0,
            "volatility": 0.530343508699427,
            "spread_pct": 0.010269651223321194,
            "spread_ticks": 1.2885906040268456,
            "amihud": 2.0193162134896955e-08,
            "turnover_ratio": 0.012023353564795478,
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
              "mean": 0.8716233445180118,
              "median": 0.4431569078359957,
              "min": 0.29444250621031726,
              "max": 2.2850987672846097,
              "p5": 0.31000902435885064,
              "p95": 2.2729709931616373,
              "count": 8
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 2181979.625,
              "median": 11767.5,
              "min": 0.0,
              "max": 16385657.0,
              "p5": 0.0,
              "p95": 10933971.949999992,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.1520909258775574,
              "median": 0.024364405148365076,
              "min": 0.0013156604881843018,
              "max": 0.6666666666666666,
              "p5": 0.004449557245482214,
              "p95": 0.5841620626151011,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.00305984614136373,
              "median": 0.00011567390578804673,
              "min": 0.0,
              "max": 0.012023353564795478,
              "p5": 0.0,
              "p95": 0.011434194175892002,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 4.550422165387692e-05,
              "median": 3.4594317312939154e-07,
              "min": 0.0,
              "max": 0.00036013640690511566,
              "p5": 2.979507458473297e-10,
              "p95": 0.0002346763275099377,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 517.5,
              "median": 6.5,
              "min": 0.0,
              "max": 3728.0,
              "p5": 0.0,
              "p95": 2533.449999999998,
              "count": 8
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 110545.075,
              "median": 6284.6,
              "min": 0.0,
              "max": 809414.0,
              "p5": 0.0,
              "p95": 541533.9399999996,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 44.25,
              "median": 4.0,
              "min": 0.0,
              "max": 315.0,
              "p5": 0.0,
              "p95": 212.09999999999985,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.9833537631406031,
              "median": 0.5782596037653236,
              "min": 0.33891827234898403,
              "max": 2.2850987672846097,
              "p5": 0.3397521309881156,
              "p95": 2.2729709931616373,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.16365096331656082,
              "median": 0.045142973486562224,
              "min": 0.010269651223321194,
              "max": 0.6666666666666666,
              "p5": 0.011936848761184025,
              "p95": 0.5841620626151011,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 3.7740202540747845,
              "median": 1.5192953020134228,
              "min": 1.0,
              "max": 18.0,
              "p5": 1.0233333333333334,
              "p95": 12.899999999999991,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 4.553320985637487e-05,
              "median": 4.623216270438423e-07,
              "min": 0.0,
              "max": 0.00036013640690511566,
              "p5": 0.0,
              "p95": 0.0002346763275099377,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0019179877233721887,
              "median": 0.00011567390578804673,
              "min": 0.0,
              "max": 0.012023353564795478,
              "p5": 0.0,
              "p95": 0.00859226534415657,
              "count": 8
            }
          },
          "returns": {
            "window_days": 63,
            "n_obs": 63,
            "stock": -0.06000000000000072,
            "market": 0.0006823926969565797,
            "sector": -0.10322132119425897,
            "peers": -0.03627246010872587,
            "vs_market": -0.0606823926969573,
            "vs_sector": 0.043221321194258255,
            "vs_peers": -0.02372753989127485
          }
        }
      }
    },
    "period_insights": {
      "1d": {
        "liquidity": "Near-term tradability still screens as solid, but the displayed book is less balanced because bid depth is only 0.35x of ask depth. That matters because access can feel less reliable on the buy side even with a 1 tick spread.",
        "market_comparison": "The stock fell 2.1% on the day compared with peers down 0.3%, which matters because weaker price action can coincide with a less supportive trading backdrop."
      },
      "1w": {
        "liquidity": "Liquidity is still reasonable over the week, but it has pulled back as average volume sits 41.0% below the 1M average. That matters because recent access is weaker than the monthly profile implies.",
        "market_comparison": "The stock is down 7.8% over the week compared with peers down 1.9%, which matters because relative underperformance can make trading conditions feel less steady."
      },
      "30d": {
        "liquidity": "Monthly tradability looks strong for the company’s size, supported by a 1M liquidity score of 70.3. That matters because the name remains accessible on a broader trading view despite the recent slowdown.",
        "market_comparison": "The stock returned 4.4% over the month compared with peers at 0.0% and the market at 0.6%, which matters because stronger recent performance supports a firmer trading backdrop."
      },
      "3m": {
        "liquidity": "Structural liquidity is strong over 3M, with a score of 73.3 compared with a peer median of 44.1. That matters because the stock stands out as more accessible than most peers over a sustained window.",
        "market_comparison": "Primary average daily volume is S$236.8K compared with a peer median of S$6.3K, which matters because the stock offers materially better trading access than the peer group."
      }
    }
  },
  "q02": {
    "driver_model": {
      "valid": true,
      "model_method": "ols_with_volatility_regimes",
      "estimation_window_days": 66,
      "reporting_window_days": 63,
      "available_history_days": 66,
      "n_regimes": 2,
      "current_regime": 1,
      "current_regime_label": "High Volatility",
      "current_regime_probability": 1.0,
      "current_driver_mix": {
        "market_share": {
          "median": 0.48980570890651937,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "49.0%",
          "display_range": null,
          "display_text": "49.0%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 66 trading days.",
          "kind": "share_pct",
          "value_pct": 49.0,
          "plain_english": "Market explains about 49.0% of price moves in the current state."
        },
        "sector_share": {
          "median": 0.25461806051542,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "25.5%",
          "display_range": null,
          "display_text": "25.5%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 66 trading days.",
          "kind": "share_pct",
          "value_pct": 25.5,
          "plain_english": "Sector explains about 25.5% of price moves in the current state."
        },
        "company_share": {
          "median": 0.2555762305780605,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "25.6%",
          "display_range": null,
          "display_text": "25.6%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 66 trading days.",
          "kind": "share_pct",
          "value_pct": 25.6,
          "plain_english": "Company-specific explains about 25.6% of price moves in the current state."
        },
        "basis": "current_state"
      },
      "current_sensitivities": {
        "beta_market": {
          "median": 0.3320980341104465,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "0.33",
          "display_range": null,
          "display_text": "0.33",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 66 trading days.",
          "kind": "beta",
          "strength_label": "Modest",
          "plain_english": "Modest market link: a 1% market move has lined up with about a 0.33% stock move in the same direction in this state.",
          "value_num": 0.33
        },
        "beta_stock_lag": {
          "median": -0.4629516210508663,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "-0.46",
          "display_range": null,
          "display_text": "-0.46",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 66 trading days.",
          "kind": "lag_beta",
          "value_num": -0.46
        },
        "beta_sector": {
          "median": 0.6228309721044495,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "0.62",
          "display_range": null,
          "display_text": "0.62",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 66 trading days.",
          "kind": "beta",
          "strength_label": "Modest",
          "plain_english": "Modest sector link: a 1% sector move has lined up with about a 0.62% stock move in the same direction in this state.",
          "value_num": 0.62
        },
        "beta_market_lag": {
          "median": 2.1361320844582385,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "2.14",
          "display_range": null,
          "display_text": "2.14",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 66 trading days.",
          "kind": "lag_beta",
          "value_num": 2.14
        },
        "beta_sector_lag": {
          "median": -0.2547903476826952,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "-0.25",
          "display_range": null,
          "display_text": "-0.25",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 66 trading days.",
          "kind": "lag_beta",
          "value_num": -0.25
        },
        "posterior_source": null,
        "intervals_collapsed": false,
        "confidence_label": "High, limited history",
        "confidence_note": "Based on 66 trading days relative to the 252-day target."
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
          "expected_duration_days": 10.666666666666666,
          "current_probability": 0.0,
          "n_days_effective": 32.0,
          "volatility": {
            "median": 0.028488134099198703,
            "low": 0.028488134099198703,
            "high": 0.028488134099198703
          },
          "volatility_label": "Low Volatility",
          "current_probability_display": 0.0
        },
        {
          "id": 1,
          "label": "High Volatility",
          "pct_time": 0.5,
          "expected_duration_days": 10.666666666666666,
          "current_probability": 1.0,
          "n_days_effective": 32.0,
          "volatility": {
            "median": 0.043104515965044235,
            "low": 0.043104515965044235,
            "high": 0.043104515965044235
          },
          "volatility_label": "High Volatility",
          "current_probability_display": null
        }
      ],
      "transitions": {
        "mean": [
          [
            0.90625,
            0.09375
          ],
          [
            0.06451612903225806,
            0.9354838709677419
          ]
        ],
        "low": [],
        "high": [],
        "counts": [
          [
            29.0,
            3.0
          ],
          [
            2.0,
            29.0
          ]
        ]
      },
      "methodology": {
        "estimation_window_days": 66,
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
        "market_link_display": "0.33",
        "sector_link_display": "0.62",
        "market_link_explainer": "Modest market link. A 1% market move has lined up with about a 0.33% stock move in the same direction in this state. This is a point estimate from 66 trading days.",
        "sector_link_explainer": "Modest sector link. A 1% sector move has lined up with about a 0.62% stock move in the same direction in this state. This is a point estimate from 66 trading days.",
        "stock_persistence_display": "-0.46",
        "point_estimate_note": "Point estimate only because the current state has 66 trading days.",
        "history_limited_note": "Read is based on 66 trading days versus the 252-day target."
      },
      "current_summary": {
        "regime_label": "High Volatility",
        "dominant_driver": "market",
        "dominant_driver_label": "Market",
        "driver_share_pct": 49.0,
        "driver_share_display": "49.0%",
        "confidence_label": "High, limited history",
        "confidence_pct": 100.0,
        "display_confidence_pct": null,
        "confidence_note": "Based on 66 trading days relative to the 252-day target.",
        "history_days": 66,
        "history_limited": true,
        "volatility_label": "High Volatility",
        "lead_signal_text": "No stable lead signal.",
        "state_term": "state",
        "stay_probability": 0.9354838709677419,
        "effective_days": 32.0,
        "persistence_note": "This state looks more persistent, with a typical run length of about 10.7 days.",
        "expected_duration_days": 10.7
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
          "expected_duration_days": 10.666666666666666,
          "current_probability": 0.0,
          "n_days_effective": 32.0,
          "volatility": {
            "median": 0.028488134099198703,
            "low": 0.028488134099198703,
            "high": 0.028488134099198703
          },
          "volatility_label": "Low Volatility"
        },
        {
          "id": 1,
          "label": "High Volatility",
          "pct_time": 0.5,
          "expected_duration_days": 10.666666666666666,
          "current_probability": 1.0,
          "n_days_effective": 32.0,
          "volatility": {
            "median": 0.043104515965044235,
            "low": 0.043104515965044235,
            "high": 0.043104515965044235
          },
          "volatility_label": "High Volatility"
        }
      ],
      "transitions": [
        [
          0.90625,
          0.09375
        ],
        [
          0.06451612903225806,
          0.9354838709677419
        ]
      ],
      "transition_intervals": {
        "mean": [
          [
            0.90625,
            0.09375
          ],
          [
            0.06451612903225806,
            0.9354838709677419
          ]
        ],
        "low": [],
        "high": [],
        "counts": [
          [
            29.0,
            3.0
          ],
          [
            2.0,
            29.0
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
        "text": "Liquidity score: 73.3 — Strong",
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
    "liq_subtitle": "Liquidity remains strong for the stock’s size, although recent average volume has dropped from the monthly average.",
    "market_comparison_title": "How You Compare to the Market",
    "market_comparison_subtitle": "Context relative to market, sector, and peer medians.",
    "perf_title": "Stock Performance",
    "perf_subtitle": "The 1M return is ahead of both peers and the market, giving the tape a firmer backdrop.",
    "perf_insight": "Recent performance is firm, with a 1M return of +4.4% compared with peers at -0.0% and the market at +0.6%. That matters because stronger returns can visible support trading interest even as 1W average volume sits 41.0% below the 1M average.",
    "drivers_title": "What Moves Your Stock Price?",
    "drivers_subtitle": "Market moves are the main influence right now, with 49.0% of trading driven by the broader tape.",
    "drivers_strip": [
      {
        "title": "Current Driver (Last 5 Days)",
        "text": "Over the last 5 trading days, moves are mainly market-driven, accounting for about 49.0% of price changes. Other influences are secto%, and company-specific 25.6%."
      },
      {
        "title": "Driver Mix",
        "text": "Based on the last 5 trading days, current mix is market 49.0%, secto%, and company-specific 25.6%."
      },
      {
        "title": "Monthly Trend",
        "text": "The driver mix has been consistently company-driven across Feb to Apr."
      }
    ],
    "drivers_pie_title": "Current Driver Mix (Last 5 Days)",
    "drivers_pie_note": "Based on the last 5 trading days, current split is market 49.0%, secto%, and company-specific 25.6%.",
    "lead_lag_title": "",
    "lead_lag_note": "",
    "rolling_title": "Monthly Driver Shift",
    "rolling_latest_label": "Latest: {period}",
    "rolling_note": "Each bar shows the monthly split between market-, sector-, and company-driven moves.",
    "drivers_bottom_line": "That matters because broader market conditions are setting much of the tone while recent average volume is running below the monthly average, which can make day-to-day access feel less even.",
    "drivers_wtd_title": "Key Reads",
    "drivers_wtd_list": [
      "Main driver now: market moves account for 49.0% of recent price action.",
      "Monthly change: the stock was mostly market through Feb to Apr, so the current mix looks more balanced now."
    ],
    "regime_title": "Market State",
    "regime_subtitle": "The market backdrop is the main near-term influence on trading conditions.",
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
    "exec_check_subtitle": "Combines the final continuous-session displayed book before close, trade-size stress tests based on available history from Jan 22, 2026 to Apr 30, 2026 (68 trading days • 11,482 trades), large sell-side orders observed today, and intraday spread/depth during the continuous trading session.",
    "order_book_title": "Order Book Depth (Available Liquidity)",
    "order_book_note": "Depth shown is based on the displayed order book.",
    "peer_capacity_title": "Peer Capacity Context",
    "peer_capacity_note": "Immediate buy-side depth is thin enough that downside execution may feel worse than the monthly liquidity score",
    "impact_summary_title": "Estimated Price Impact (Sell Orders)",
    "impact_summary_subtitle": "Approximate price impact (%) for sell orders.",
    "exec_check_insight": "The displayed book is thin on the bid, with bid depth at 0.35x of ask depth even though the spread is 1 tick.",
    "trader_composition_title": "Who's Trading Your Stock?",
    "trader_composition_subtitle": "Shows whether trading is mostly retail-like, institution-like, mixed, or unclassified.",
    "trader_retail_threshold": "Retail-like flow",
    "trader_mixed_threshold": "Mixed flow",
    "trader_instit_threshold": "Institution-like flow",
    "peer_trader_title": "Peer Comparison: Trader Mix",
    "peer_trader_subtitle": "How the trader mix compares with peers.",
    "price_moving_title": "Which Trades Move the Price?",
    "price_moving_subtitle": "Price-moving trades are 20.0% of total trades.",
    "intraday_title": "When Does Trading Happen?",
    "intraday_subtitle": "Trading stays usable through the day, and the observed flow mix currently leans retail-like.",
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
    "intraday_insight": "Near-term execution conditions look less balanced, with displayed bid depth at 0.35x of ask depth and a 1 tick spread. That matters because the stock can still screen liquid on a 3M basis while immediate depth remains less supportive.",
    "short_title": "Short Selling & Lending",
    "short_subtitle": "The current picture is defined more by liquidity, volume, and market direction than by short activity.",
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
    "exec_subtitle": "Liquidity is strong relative to peers, but recent trading has pulled back and the near-term book is thin on the bid.",
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
        "value": "73.3/100",
        "sub": "Peer median 44.1 (+29.2 pts)",
        "interp": {
          "text": "Strong",
          "cls": "interpretation-good",
          "icon": "◆"
        }
      },
      {
        "title": "Volume vs Peers",
        "value": "S$236.8K",
        "sub": "Peer median S$6.3K",
        "interp": {
          "text": "Strong",
          "cls": "interpretation-good",
          "icon": "◆"
        }
      },
      {
        "title": "Spread",
        "value": "2.48%",
        "sub": "1.16 ticks; peers 4.51%",
        "interp": {
          "text": "Tighter",
          "cls": "interpretation-good",
          "icon": "◆"
        }
      }
    ],
    "liq_insight": "Liquidity still stands out positively for the stock’s size, with a 3M score of 73.3 compared with a peer median of 44.1. Recent trading is lighter, with 1W average volume down 41.0% from the 1M average, so current access is not as strong as the broader score implies. The displayed book reinforces that near-term caution, with bid depth at 0.35x of ask depth despite a 1 tick spread.",
    "perf_badge": "Context",
    "exec_check_tiles": [
      {
        "title": "Mid Price",
        "value": "0.237",
        "note": "final continuous-session displayed book before close",
        "color": "text-white"
      },
      {
        "title": "Spread",
        "value": "2.11%",
        "note": "1.00 ticks",
        "color": "text-slate-300"
      },
      {
        "title": "Depth",
        "value": "0.35x",
        "note": "Bid depth / ask depth on the displayed order book",
        "color": "text-slate-300"
      }
    ],
    "impact_summary_cards": [
      {
        "title": "~S$100K sell",
        "text": "Estimated impact ~-1.05% with 100.0% fill.",
        "cls": "ok"
      },
      {
        "title": "S$1.0M sell",
        "text": "Estimated impact ~-4.78% with 44.2% fill.",
        "cls": "warn"
      },
      {
        "title": "S$2.5M sell",
        "text": "Estimated impact ~-4.78% with 17.7% fill.",
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
        "value": "73",
        "suffix": "/100",
        "bar_pct": 73,
        "color_value": "text-emerald-400",
        "color_bar": "bg-emerald-500",
        "subtext": "Rank 150/558",
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
        "value": "2.48",
        "suffix": "%",
        "bar_pct": 25,
        "color_value": "text-amber-400",
        "color_bar": "bg-amber-500",
        "subtext": "2.48% • 1.16 ticks vs peers 4.51%",
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
        "value": "236.8K",
        "value_prefix": "S$",
        "suffix": "",
        "bar_pct": 60,
        "color_value": "text-emerald-400",
        "color_bar": "bg-emerald-500",
        "subtext": "Peer median S$6.3K",
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
        "value": "49.0",
        "suffix": "market",
        "bar_pct": 49,
        "color_value": "text-amber-400",
        "color_bar": "bg-amber-500",
        "subtext": "Secto% • Company 25.6%",
        "interpretation": {
          "text": "Market",
          "cls": "interpretation-neutral",
          "icon": "◆"
        }
      }
    ],
    "exec_takeaways": [
      "Structural liquidity remains strong for the stock’s size, with a 3M liquidity score of 73.3 compared with a peer median of 44.1. That keeps the name looking accessible relative to peers in normal conditions.",
      "Recent trading has pulled back, with 1W average volume down 41.0% from the 1M",
      "The return backdrop is firmer, with the stock up 4.4% over 1M compared with peers at -0.0% and the market at +0.6%, but the displayed book is thin on the bid at 0.35x of ask depth. That supports sentiment while leaving immediate execution less well supported."
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
      "overall": "3M liquidity is strong: score 73.3 vs peer median 44.1 (+29.2",
      "strengths": [
        "3M score 73.3 vs peer median 44.1 (+29.2 pts)."
      ],
      "concerns": [
        "1W average volume down -41.0% from 1M."
      ],
      "peer_context": "Primary-period score gap vs peers: +29.2 pts."
    },
    "market_comparison": {
      "returns": {
        "insight": "3M return is -6.0%, better than sector, but worse than market and peers, which shows price performance is mixed across comparison groups.",
        "vs_market": "Worse than market: -6.0% vs market 0.1%.",
        "vs_sector": "Better than sector: -6.0% vs sector -10.3%.",
        "vs_peers": "Worse than peers: -6.0% vs peers -3.6%."
      },
      "adv": {
        "insight": "ADV is S$236.8K, better than market, sector, and peers, which supports stronger day-to-day trading size than comparable names.",
        "vs_market": "Better than market: S$236.8K vs market S$13.2K.",
        "vs_sector": "Better than sector: S$236.8K vs sector S$11.8K.",
        "vs_peers": "Better than peers: S$236.8K vs peers S$6.3K."
      },
      "spread": {
        "insight": "Spread is 2.48%, better than market and peers, which keeps trading costs more competitive than comparable names.",
        "vs_market": "Better than market: 2.48% vs market 3.01%.",
        "vs_sector": "In line with sector: 2.48% vs secto%.",
        "vs_peers": "Better than peers: 2.48% vs peers 4.51%."
      },
      "turnover_ratio": {
        "insight": "Turnover ratio is 0.19%, better than market, sector, and peers, which shows a more active free-float turnover profile than comparable names.",
        "vs_market": "Better than market: 0.19% vs market 0.03%.",
        "vs_sector": "Better than sector: 0.19% vs sector 0.01%.",
        "vs_peers": "Better than peers: 0.19% vs peers 0.01%."
      },
      "volatility": {
        "insight": "Volatility is 57.65%, worse than market and sector, which suggests day-to-day price swings are heavier than comparable names.",
        "vs_market": "Worse than market: 57.65% vs market 46.77%.",
        "vs_sector": "Worse than sector: 57.65% vs sector 44.32%.",
        "vs_peers": "In line with peers: 57.65% vs peers 57.83%."
      },
      "trades": {
        "insight": "Trades is 83, better than market, sector, and peers, which supports more fully reflective of day-to-day access day-to-day activity than comparable names.",
        "vs_market": "Better than market: 83 vs market 7.",
        "vs_sector": "Better than sector: 83 vs sector 6.",
        "vs_peers": "Better than peers: 83 vs peers 4."
      },
      "amihud": {
        "insight": "Price impact is 7.05e-08, better than market, sector, and peers, which suggests trades move price less than comparable names.",
        "vs_market": "Better than market: 7.05e-08 vs market 1.42e-07.",
        "vs_sector": "Better than sector: 7.05e-08 vs sector 3.46e-07.",
        "vs_peers": "Better than peers: 7.05e-08 vs peers 4.62e-07."
      }
    },
    "performance": {
      "overall": "Returns are mixed, with the clearest signal being 1M outperformance at +4.4% compared with flat peers and +0.6% for the market. Liquidity partly supports that move because the 3M liquidity score is 73.3 against a 44.1 peer median, but the confirmation is weaker near term as 1W average volume has dropped 41.0% from the 1M average. The driver mix points to a broad-market move rather than a purely company-specific one, with market factors explaining 49.0% of current trading.",
      "conclusion": "The move looks mixed overall, with the recent 1M strength leaning more broad-market than company-specific."
    },
    "drivers": {
      "overall": "Market moves are the clearest driver now, with 49.0% of recent price action linked to the broader tape. That matters because the stock is currently moving more with external conditions than with company-specific news, even as its 1M return of 4.4% remains ahead of peers and the market.",
      "beta": "The current pattern looks real but not fully settled, because market influence is now the largest driver while 1W average volume is down 41.0% from the 1M average. That combination points to a tape that can track broader moves more closely while trading activity is lighter than the recent monthly norm.",
      "rolling_change": "The monthly pattern had been mostly market from February through April, so the latest read marks a shift toward a more balanced mix with the market now in front. That matters because the stock's short-term behavior may feel less tied to stock-specific developments than it did through most of the last three months."
    },
    "regime": {
      "overall": "High volatility is the main feature of the tape, and it matters because trading conditions are less steady when price swings stay elevated. That matters more now because recent average volume is down 41.0% from the 1M average, leaving less activity to absorb moves.",
      "current": "The stock is currently in a high-volatility state, while broader market moves still account for 49.0% of the tape. That points to a backdrop driven meaningfully by wider market conditions rather than a brief stock-specific move.",
      "transitions": "This looks more persistent than fleeting, with a typical run length of about 10.7 days, although the read is mixed. That suggests the current state can remain in place even if day-to-day tone shifts.",
      "trading_implications": "This state looks more persistent, with a typical run length of about 10.7 days."
    },
    "execution": {
      "overall": "Displayed liquidity looks mixed at the screen level, with a 1 tick spread but a clearly bid-light book. That matters because the quoted spread looks orderly while the available buy-side depth is materially thinner than the sell side.",
      "concern": "The clearest stress point is the buy-side imbalance, with displayed bid depth at 0.35x ask depth. With 1W average volume down 41.0% from 1M, that thinner bid matters more because recent trading activity is already below the monthly average.",
      "peer_context": "The broader liquidity standing still looks strong, with a 3M score of 73.3 compared with a peer median of 44.1, but the current book does not fully visible support that headline. In practical terms, the stock screens well for size over the medium term while immediate downside liquidity looks thinner on the day."
    },
    "trader_composition": {
      "overall": "Flow leans retail-like on both trade count and trade value, which gives the read a clear direction. That matters because day-to-day activity appears to be supported by a broad base of smaller tickets rather than a narrow institutional presence.",
      "retail_heavy": "By trade count and value, flow leans retail-like: retail-like trades are 88.9% of count and 36.7% of value, compared with institution-like at 0.9% of count and 15.0% of value.",
      "institutional_gap": "Institution-like activity is a small part of the tape at 0.9% of trades and 15.0% of value. That matters because the flow base looks broad, but it is not being anchored by much institutional participation.",
      "peer_comparison": "The mix stands out as retail-leaning relative to the peer set. That matters because the stock’s trading base looks more dependent on broad day-to-day participation than on larger institutional flow."
    },
    "price_moving": {
      "overall": "The cleanest read is that broader market moves remain the main influence on the tape, with market factors accounting for 49.0%. That matters because price formation is still being driven materially by external conditions rather than company-specific trading alone. By trade count and value, flow looks mainly retail-like. Recent returns have been firmer, with the stock up 4.4% over one month compared with peers at -0.0% and the market at +0.6%.",
      "interpretation": "",
      "asymmetry": ""
    },
    "short_selling": {
      "overall": "Short activity looks low, with the 1M average short ratio near zero, so it does not appear to be driving current trading conditions. The stronger 1M share price performance, up 4.4% compared with flat peers and up 0.6% compared with the market, points to a firmer backdrop than a short-driven tape.",
      "level": "Low short interest",
      "correlation": "No clear relationship (correlation undefined)",
      "trend": "Short positioning has fallen sharply, with shorts covering significantly month on month, which further reduces the chance that short activity is shaping liquidity day to day. The signal is mixed, but the direction still suggests short selling is becoming less relevant rather than more relevant.",
      "peaks": "0 notable peak days identified."
    },
    "intraday": {
      "overall": "Session split is open 1.4%, continuous 95.2%, and close 2.5%. Current trading concentration score is 0.266.",
      "hhi_interpretation": "Concentrated - liquidity clustered at open/close",
      "best_times": "The middle of the session is the clearest source of liquidity because almost all trading takes place in continuous trading. That matters because execution conditions may be more consistent there than at the open or close.",
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
        73.29749103942652,
        3.225806451612903,
        2.867383512544803,
        46.95340501792115,
        41.21863799283154,
        34.229390681003586,
        61.648745519713266,
        53.94265232974911,
        82.97491039426524
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
        236831.0,
        0.0,
        0.0,
        5600.0,
        6969.2,
        400.0,
        44042.4,
        17935.0,
        809414.0
      ],
      "total": 558
    },
    "market_comparison": {
      "sector_name": "Software - Application",
      "sector_count": 8,
      "market_count": 558,
      "company": {
        "volatility": 0.57646468494843,
        "adv": 236831.0,
        "spread_pct": 0.024846815447748628,
        "turnover_ratio": 0.0018662276548195378,
        "amihud": 7.047937533847717e-08,
        "trades": 83.0
      },
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
          "mean": 0.8716233445180118,
          "median": 0.4431569078359957,
          "min": 0.29444250621031726,
          "max": 2.2850987672846097,
          "p5": 0.31000902435885064,
          "p95": 2.2729709931616373,
          "count": 8
        },
        "adv": {
          "direction": "higher_is_better",
          "mean": 2181979.625,
          "median": 11767.5,
          "min": 0.0,
          "max": 16385657.0,
          "p5": 0.0,
          "p95": 10933971.949999992,
          "count": 8
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.1520909258775574,
          "median": 0.024364405148365076,
          "min": 0.0013156604881843018,
          "max": 0.6666666666666666,
          "p5": 0.004449557245482214,
          "p95": 0.5841620626151011,
          "count": 8
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.00305984614136373,
          "median": 0.00011567390578804673,
          "min": 0.0,
          "max": 0.012023353564795478,
          "p5": 0.0,
          "p95": 0.011434194175892002,
          "count": 8
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 4.550422165387692e-05,
          "median": 3.4594317312939154e-07,
          "min": 0.0,
          "max": 0.00036013640690511566,
          "p5": 2.979507458473297e-10,
          "p95": 0.0002346763275099377,
          "count": 8
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 517.5,
          "median": 6.5,
          "min": 0.0,
          "max": 3728.0,
          "p5": 0.0,
          "p95": 2533.449999999998,
          "count": 8
        }
      },
      "peers": {
        "adv": {
          "direction": "higher_is_better",
          "mean": 110545.075,
          "median": 6284.6,
          "min": 0.0,
          "max": 809414.0,
          "p5": 0.0,
          "p95": 541533.9399999996,
          "count": 8
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 44.25,
          "median": 4.0,
          "min": 0.0,
          "max": 315.0,
          "p5": 0.0,
          "p95": 212.09999999999985,
          "count": 8
        },
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.9833537631406031,
          "median": 0.5782596037653236,
          "min": 0.33891827234898403,
          "max": 2.2850987672846097,
          "p5": 0.3397521309881156,
          "p95": 2.2729709931616373,
          "count": 8
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.16365096331656082,
          "median": 0.045142973486562224,
          "min": 0.010269651223321194,
          "max": 0.6666666666666666,
          "p5": 0.011936848761184025,
          "p95": 0.5841620626151011,
          "count": 8
        },
        "spread_ticks": {
          "direction": "neutral",
          "mean": 3.7740202540747845,
          "median": 1.5192953020134228,
          "min": 1.0,
          "max": 18.0,
          "p5": 1.0233333333333334,
          "p95": 12.899999999999991,
          "count": 8
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 4.553320985637487e-05,
          "median": 4.623216270438423e-07,
          "min": 0.0,
          "max": 0.00036013640690511566,
          "p5": 0.0,
          "p95": 0.0002346763275099377,
          "count": 8
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.0019179877233721887,
          "median": 0.00011567390578804673,
          "min": 0.0,
          "max": 0.012023353564795478,
          "p5": 0.0,
          "p95": 0.00859226534415657,
          "count": 8
        }
      }
    },
    "returns": [
      {
        "horizon": "1W",
        "stock": -0.07843137254901977,
        "market": -0.006355020973208836,
        "sector": -0.02648484863649736,
        "peers": -0.01867049287533551
      },
      {
        "horizon": "1M",
        "stock": 0.04444444444444384,
        "market": 0.005575688013334856,
        "sector": -0.009860428595911408,
        "peers": -0.0003239667960492909
      },
      {
        "horizon": "3M",
        "stock": -0.06000000000000072,
        "market": 0.0006823926969565797,
        "sector": -0.10322132119425897,
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
      "share_market": 0.48980570890651937,
      "share_sector": 0.25461806051542,
      "share_idio": 0.2555762305780605,
      "beta_market": 0.3320980341104465,
      "beta_sector": 0.6228309721044495,
      "driver_model": {
        "valid": true,
        "model_method": "ols_with_volatility_regimes",
        "estimation_window_days": 66,
        "reporting_window_days": 63,
        "available_history_days": 66,
        "n_regimes": 2,
        "current_regime": 1,
        "current_regime_label": "High Volatility",
        "current_regime_probability": 1.0,
        "current_driver_mix": {
          "market_share": {
            "median": 0.48980570890651937,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "49.0%",
            "display_range": null,
            "display_text": "49.0%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 66 trading days.",
            "kind": "share_pct",
            "value_pct": 49.0,
            "plain_english": "Market explains about 49.0% of price moves in the current state."
          },
          "sector_share": {
            "median": 0.25461806051542,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "25.5%",
            "display_range": null,
            "display_text": "25.5%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 66 trading days.",
            "kind": "share_pct",
            "value_pct": 25.5,
            "plain_english": "Sector explains about 25.5% of price moves in the current state."
          },
          "company_share": {
            "median": 0.2555762305780605,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "25.6%",
            "display_range": null,
            "display_text": "25.6%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 66 trading days.",
            "kind": "share_pct",
            "value_pct": 25.6,
            "plain_english": "Company-specific explains about 25.6% of price moves in the current state."
          },
          "basis": "current_state"
        },
        "current_sensitivities": {
          "beta_market": {
            "median": 0.3320980341104465,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "0.33",
            "display_range": null,
            "display_text": "0.33",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 66 trading days.",
            "kind": "beta",
            "strength_label": "Modest",
            "plain_english": "Modest market link: a 1% market move has lined up with about a 0.33% stock move in the same direction in this state.",
            "value_num": 0.33
          },
          "beta_stock_lag": {
            "median": -0.4629516210508663,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "-0.46",
            "display_range": null,
            "display_text": "-0.46",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 66 trading days.",
            "kind": "lag_beta",
            "value_num": -0.46
          },
          "beta_sector": {
            "median": 0.6228309721044495,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "0.62",
            "display_range": null,
            "display_text": "0.62",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 66 trading days.",
            "kind": "beta",
            "strength_label": "Modest",
            "plain_english": "Modest sector link: a 1% sector move has lined up with about a 0.62% stock move in the same direction in this state.",
            "value_num": 0.62
          },
          "beta_market_lag": {
            "median": 2.1361320844582385,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "2.14",
            "display_range": null,
            "display_text": "2.14",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 66 trading days.",
            "kind": "lag_beta",
            "value_num": 2.14
          },
          "beta_sector_lag": {
            "median": -0.2547903476826952,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "-0.25",
            "display_range": null,
            "display_text": "-0.25",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 66 trading days.",
            "kind": "lag_beta",
            "value_num": -0.25
          },
          "posterior_source": null,
          "intervals_collapsed": false,
          "confidence_label": "High, limited history",
          "confidence_note": "Based on 66 trading days relative to the 252-day target."
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
            "expected_duration_days": 10.666666666666666,
            "current_probability": 0.0,
            "n_days_effective": 32.0,
            "volatility": {
              "median": 0.028488134099198703,
              "low": 0.028488134099198703,
              "high": 0.028488134099198703
            },
            "volatility_label": "Low Volatility",
            "current_probability_display": 0.0
          },
          {
            "id": 1,
            "label": "High Volatility",
            "pct_time": 0.5,
            "expected_duration_days": 10.666666666666666,
            "current_probability": 1.0,
            "n_days_effective": 32.0,
            "volatility": {
              "median": 0.043104515965044235,
              "low": 0.043104515965044235,
              "high": 0.043104515965044235
            },
            "volatility_label": "High Volatility",
            "current_probability_display": null
          }
        ],
        "transitions": {
          "mean": [
            [
              0.90625,
              0.09375
            ],
            [
              0.06451612903225806,
              0.9354838709677419
            ]
          ],
          "low": [],
          "high": [],
          "counts": [
            [
              29.0,
              3.0
            ],
            [
              2.0,
              29.0
            ]
          ]
        },
        "methodology": {
          "estimation_window_days": 66,
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
          "market_link_display": "0.33",
          "sector_link_display": "0.62",
          "market_link_explainer": "Modest market link. A 1% market move has lined up with about a 0.33% stock move in the same direction in this state. This is a point estimate from 66 trading days.",
          "sector_link_explainer": "Modest sector link. A 1% sector move has lined up with about a 0.62% stock move in the same direction in this state. This is a point estimate from 66 trading days.",
          "stock_persistence_display": "-0.46",
          "point_estimate_note": "Point estimate only because the current state has 66 trading days.",
          "history_limited_note": "Read is based on 66 trading days versus the 252-day target."
        },
        "current_summary": {
          "regime_label": "High Volatility",
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "driver_share_pct": 49.0,
          "driver_share_display": "49.0%",
          "confidence_label": "High, limited history",
          "confidence_pct": 100.0,
          "display_confidence_pct": null,
          "confidence_note": "Based on 66 trading days relative to the 252-day target.",
          "history_days": 66,
          "history_limited": true,
          "volatility_label": "High Volatility",
          "lead_signal_text": "No stable lead signal.",
          "state_term": "state",
          "stay_probability": 0.9354838709677419,
          "effective_days": 32.0,
          "persistence_note": "This state looks more persistent, with a typical run length of about 10.7 days.",
          "expected_duration_days": 10.7
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
            "expected_duration_days": 10.666666666666666,
            "current_probability": 0.0,
            "n_days_effective": 32.0,
            "volatility": {
              "median": 0.028488134099198703,
              "low": 0.028488134099198703,
              "high": 0.028488134099198703
            },
            "volatility_label": "Low Volatility"
          },
          {
            "id": 1,
            "label": "High Volatility",
            "pct_time": 0.5,
            "expected_duration_days": 10.666666666666666,
            "current_probability": 1.0,
            "n_days_effective": 32.0,
            "volatility": {
              "median": 0.043104515965044235,
              "low": 0.043104515965044235,
              "high": 0.043104515965044235
            },
            "volatility_label": "High Volatility"
          }
        ],
        "transitions": [
          [
            0.90625,
            0.09375
          ],
          [
            0.06451612903225806,
            0.9354838709677419
          ]
        ]
      }
    },
    "order_book": {
      "bids": [
        {
          "level": 1,
          "price": 0.235,
          "quantity": 892600.0,
          "value": 209761.0
        },
        {
          "level": 2,
          "price": 0.23,
          "quantity": 150200.0,
          "value": 34546.0
        },
        {
          "level": 3,
          "price": 0.225,
          "quantity": 164000.0,
          "value": 36900.0
        },
        {
          "level": 4,
          "price": 0.22,
          "quantity": 145400.0,
          "value": 31988.0
        },
        {
          "level": 5,
          "price": 0.215,
          "quantity": 525800.0,
          "value": 113047.0
        },
        {
          "level": 6,
          "price": 0.21,
          "quantity": 45000.0,
          "value": 9450.0
        },
        {
          "level": 7,
          "price": 0.2,
          "quantity": 31000.0,
          "value": 6200.0
        }
      ],
      "asks": [
        {
          "level": 1,
          "price": 0.24,
          "quantity": 418900.0,
          "value": 100536.0
        },
        {
          "level": 2,
          "price": 0.245,
          "quantity": 200800.0,
          "value": 49196.0
        },
        {
          "level": 3,
          "price": 0.25,
          "quantity": 647000.0,
          "value": 161750.0
        },
        {
          "level": 4,
          "price": 0.255,
          "quantity": 70000.0,
          "value": 17850.0
        },
        {
          "level": 5,
          "price": 0.26,
          "quantity": 281200.0,
          "value": 73112.0
        },
        {
          "level": 6,
          "price": 0.265,
          "quantity": 535000.0,
          "value": 141775.0
        },
        {
          "level": 7,
          "price": 0.27,
          "quantity": 289000.0,
          "value": 78030.0
        },
        {
          "level": 8,
          "price": 0.275,
          "quantity": 190000.0,
          "value": 52250.00000000001
        },
        {
          "level": 9,
          "price": 0.28,
          "quantity": 183000.0,
          "value": 51240.00000000001
        },
        {
          "level": 10,
          "price": 0.285,
          "quantity": 264000.0,
          "value": 75240.0
        },
        {
          "level": 11,
          "price": 0.29,
          "quantity": 330000.0,
          "value": 95700.0
        },
        {
          "level": 12,
          "price": 0.295,
          "quantity": 167200.0,
          "value": 49324.0
        },
        {
          "level": 13,
          "price": 0.3,
          "quantity": 680000.0,
          "value": 204000.0
        },
        {
          "level": 14,
          "price": 0.305,
          "quantity": 237000.0,
          "value": 72285.0
        },
        {
          "level": 15,
          "price": 0.31,
          "quantity": 10000.0,
          "value": 3100.0
        },
        {
          "level": 16,
          "price": 0.34,
          "quantity": 2000.0,
          "value": 680.0
        },
        {
          "level": 17,
          "price": 0.35,
          "quantity": 86000.0,
          "value": 30099.999999999996
        },
        {
          "level": 18,
          "price": 0.395,
          "quantity": 20000.0,
          "value": 7900.0
        }
      ]
    },
    "execution_dynamic": {
      "snapshot": {
        "valid": true,
        "snapshot_time": "2026-04-30 08:59:46.575900000",
        "snapshot_basis": "last_continuous_session_snapshot",
        "snapshot_label": "final continuous-session displayed book before close",
        "snapshot_note": "Final continuous-session displayed book before close",
        "snapshot_mic": "XSES",
        "mid_price": 0.2375,
        "spread_pct": 0.02105263157894739,
        "spread_ticks": 1.0,
        "tick_size": 0.005,
        "displayed_levels_per_side": 100,
        "bid_depth_notional_displayed": 441892.0,
        "ask_depth_notional_displayed": 1264068.0,
        "bid_depth_notional_top10": 441892.0,
        "ask_depth_notional_top10": 1264068.0,
        "bid_ask_depth_ratio": 0.3496
      },
      "historical_trade_scenarios": {
        "valid": true,
        "requested_lookback_calendar_days": 365,
        "lookback_calendar_days": 365,
        "effective_calendar_days": 99,
        "history_limited": true,
        "trade_days_used": 68,
        "n_trades_used": 11482,
        "first_trade_date": "2026-01-22",
        "last_trade_date": "2026-04-30",
        "window_label": "Jan 22, 2026 to Apr 30, 2026",
        "window_short_label": "Jan 22-Apr 30",
        "trade_days_label": "68 trading days",
        "trade_count_label": "11,482 trades",
        "window_detail_label": "68 trading days • 11,482 trades",
        "history_note": "Trade-size percentiles use available history from Jan 22, 2026 to Apr 30, 2026 (68 trading days • 11,482 trades), not a full year.",
        "scenarios": [
          {
            "key": "p90",
            "label": "90th percentile trade",
            "quantile": 0.9,
            "trade_notional": 10123.3,
            "impact_pct": -0.010526,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 2.29,
            "pct_of_adv": 5.3
          },
          {
            "key": "p95",
            "label": "95th percentile trade",
            "quantile": 0.95,
            "trade_notional": 13964.85,
            "impact_pct": -0.010526,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 3.16,
            "pct_of_adv": 7.31
          },
          {
            "key": "p99_99",
            "label": "99.99th percentile trade",
            "quantile": 0.9999,
            "trade_notional": 167872.13,
            "impact_pct": -0.010526,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 37.99,
            "pct_of_adv": 87.9
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
            "order_id": "8138989689077102592",
            "timestamp": "2026-04-29 22:59:01.523200000",
            "local_timestamp": "2026-04-30 06:59:01",
            "posted_price": 0.3,
            "size_shares": 500000.0,
            "notional": 150000.0,
            "impact_pct": -0.010526,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 33.94,
            "price_vs_mid_pct": 26.316,
            "executed_event_count": 0,
            "event_count": 1
          },
          {
            "rank": 2,
            "order_id": "8141760458381766656",
            "timestamp": "2026-04-29 22:59:01.523200000",
            "local_timestamp": "2026-04-30 06:59:01",
            "posted_price": 0.25,
            "size_shares": 532800.0,
            "notional": 133200.0,
            "impact_pct": -0.010526,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 30.14,
            "price_vs_mid_pct": 5.263,
            "executed_event_count": 0,
            "event_count": 1
          },
          {
            "rank": 3,
            "order_id": "8143160686437210112",
            "timestamp": "2026-04-30 01:04:29.130800000",
            "local_timestamp": "2026-04-30 09:04:29",
            "posted_price": 0.24,
            "size_shares": 334000.0,
            "notional": 80160.0,
            "impact_pct": -0.010526,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 18.14,
            "price_vs_mid_pct": 1.053,
            "executed_event_count": 0,
            "event_count": 7
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
            "spread_pct": 0.020618556701030948,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 537961.0,
            "ask_depth_notional": 1219586.0,
            "mid_price": 0.2425
          },
          {
            "bucket": "09:30",
            "spread_pct": 0.020618556701030948,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 537961.0,
            "ask_depth_notional": 1255826.0,
            "mid_price": 0.2425
          },
          {
            "bucket": "10:00",
            "spread_pct": 0.02105263157894739,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 472919.5,
            "ask_depth_notional": 1268456.0,
            "mid_price": 0.2375
          },
          {
            "bucket": "10:30",
            "spread_pct": 0.02105263157894739,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 477804.5,
            "ask_depth_notional": 1323992.0,
            "mid_price": 0.2375
          },
          {
            "bucket": "11:00",
            "spread_pct": 0.02105263157894739,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 480624.5,
            "ask_depth_notional": 1306142.0,
            "mid_price": 0.2375
          },
          {
            "bucket": "11:30",
            "spread_pct": 0.02105263157894739,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 480847.5,
            "ask_depth_notional": 1305918.0,
            "mid_price": 0.2375
          },
          {
            "bucket": "13:00",
            "spread_pct": 0.02105263157894739,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 500247.5,
            "ask_depth_notional": 1305988.0,
            "mid_price": 0.2375
          },
          {
            "bucket": "14:30",
            "spread_pct": 0.02105263157894739,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 498572.5,
            "ask_depth_notional": 1310188.0,
            "mid_price": 0.2375
          },
          {
            "bucket": "15:30",
            "spread_pct": 0.02105263157894739,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 491672.5,
            "ask_depth_notional": 1310188.0,
            "mid_price": 0.2375
          },
          {
            "bucket": "16:00",
            "spread_pct": 0.02105263157894739,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 486620.0,
            "ask_depth_notional": 1310188.0,
            "mid_price": 0.2375
          },
          {
            "bucket": "16:30",
            "spread_pct": 0.02105263157894739,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 441892.0,
            "ask_depth_notional": 1264068.0,
            "mid_price": 0.2375
          }
        ],
        "summary": {
          "median_spread_pct": 0.02105263157894739,
          "median_spread_ticks": 1.0000000000000009,
          "median_bid_depth_notional": 486620.0,
          "median_ask_depth_notional": 1305988.0,
          "tightest_bucket": "09:00",
          "widest_bucket": "10:00",
          "deepest_bid_bucket": "09:00",
          "thinnest_bid_bucket": "16:30"
        }
      }
    },
    "peer_capacity": {
      "bx_ticket_pct_adv_50k": 26.2,
      "peers": [
        {
          "ticker": "ITS",
          "pct": 99.5
        },
        {
          "ticker": "42F",
          "pct": 384.8
        },
        {
          "ticker": "J03",
          "pct": 659.9
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
          "n_trades": 11,
          "n_runs": 0,
          "n_trade_days": 1,
          "first_trade_date": "2026-04-30",
          "last_trade_date": "2026-04-30",
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
            "retail_pct": 0.7272727272727273,
            "mixed_pct": 0.2727272727272727,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.29217293020627294,
            "mixed_qty_pct": 0.707827069793727,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.290873159528317,
            "mixed_notional_pct": 0.709126840471683,
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
              "retail": 8,
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
            "avg": 15318.454545454546,
            "median": 7200.0
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
              "retail_pct": 0.7272727272727273,
              "mixed_pct": 0.2727272727272727,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.29217293020627294,
              "mixed_qty_pct": 0.707827069793727,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.290873159528317,
              "mixed_notional_pct": 0.709126840471683,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 15318.454545454546,
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
              "avg_trade_size": 1239.0,
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
              "avg_trade_size": 597.0,
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
              "avg_trade_size": 605.0,
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
              "retail_pct": 0.9734904270986745,
              "mixed_pct": 0.023564064801178203,
              "instit_pct": 0.0029455081001472753,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.4991813873330461,
              "mixed_qty_pct": 0.35260663507109,
              "instit_qty_pct": 0.14821197759586385,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.5005967439316293,
              "mixed_notional_pct": 0.3518511885573743,
              "instit_notional_pct": 0.1475520675109963,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 1665.2717231222387,
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
              "retail_pct": 0.9615384615384616,
              "mixed_pct": 0.038461538461538464,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.8233371610281778,
              "mixed_qty_pct": 0.17666283897182228,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.8245163948419265,
              "mixed_notional_pct": 0.1754836051580735,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 4032.811538461538,
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
              "retail_pct": 0.8982035928143712,
              "mixed_pct": 0.09580838323353294,
              "instit_pct": 0.005988023952095809,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.4942770727894695,
              "mixed_qty_pct": 0.4115168577978495,
              "instit_qty_pct": 0.09420606941268098,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.4967609552322753,
              "mixed_notional_pct": 0.4030930118787374,
              "instit_notional_pct": 0.10014603288898731,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 6549.668862275447,
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
          "n_trades": 110,
          "n_runs": 0,
          "n_trade_days": 5,
          "first_trade_date": "2026-04-24",
          "last_trade_date": "2026-04-30",
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
            "retail_pct": 0.8636363636363636,
            "mixed_pct": 0.12727272727272726,
            "instit_pct": 0.00909090909090909,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.3969069069069069,
            "mixed_qty_pct": 0.513003003003003,
            "instit_qty_pct": 0.09009009009009009,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.397398969043679,
            "mixed_notional_pct": 0.5104965353358898,
            "instit_notional_pct": 0.09210449562043123,
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
              "retail": 95,
              "mixed": 14,
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
            "avg": 7402.659090909091,
            "median": 3600.0
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
              "retail_pct": 0.8636363636363636,
              "mixed_pct": 0.12727272727272726,
              "instit_pct": 0.00909090909090909,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.3969069069069069,
              "mixed_qty_pct": 0.513003003003003,
              "instit_qty_pct": 0.09009009009009009,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.397398969043679,
              "mixed_notional_pct": 0.5104965353358898,
              "instit_notional_pct": 0.09210449562043123,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 7402.659090909091,
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
              "avg_trade_size": 1473.1818181818182,
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
              "avg_trade_size": 323.4013698630137,
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
              "avg_trade_size": 2150.8333333333335,
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
              "retail_pct": 0.9629629629629629,
              "mixed_pct": 0.037037037037037035,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.7828447339847991,
              "mixed_qty_pct": 0.21715526601520088,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.7758835601777823,
              "mixed_notional_pct": 0.22411643982221774,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 2941.5925925925926,
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
              "retail_pct": 0.9212445308701993,
              "mixed_pct": 0.07049100631988332,
              "instit_pct": 0.008264462809917356,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.3328146914446003,
              "mixed_qty_pct": 0.459304873772791,
              "instit_qty_pct": 0.2078804347826087,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.3347528329373173,
              "mixed_notional_pct": 0.45862593296071263,
              "instit_notional_pct": 0.20662123410197009,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 4420.854399611084,
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
              "retail_pct": 0.9192982456140351,
              "mixed_pct": 0.08070175438596491,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.6534913051413077,
              "mixed_qty_pct": 0.34650869485869223,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.6544855664304433,
              "mixed_notional_pct": 0.34551443356955674,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 5329.875087719298,
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
              "retail_pct": 0.890728476821192,
              "mixed_pct": 0.10264900662251655,
              "instit_pct": 0.006622516556291391,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.5104571194554672,
              "mixed_qty_pct": 0.39970375809840314,
              "instit_qty_pct": 0.08983912244612964,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.5127968680735868,
              "mixed_notional_pct": 0.39323450190642245,
              "instit_notional_pct": 0.09396863001999069,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 6293.991390728476,
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
          "n_trades": 913,
          "n_runs": 0,
          "n_trade_days": 21,
          "first_trade_date": "2026-04-01",
          "last_trade_date": "2026-04-30",
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
            "retail_pct": 0.8499452354874042,
            "mixed_pct": 0.13143483023001096,
            "instit_pct": 0.018619934282584884,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.27906226883902663,
            "mixed_qty_pct": 0.48092862697494454,
            "instit_qty_pct": 0.24000910418602886,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.2777072806537268,
            "mixed_notional_pct": 0.4789696453101446,
            "instit_notional_pct": 0.2433230740361286,
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
              "retail": 776,
              "mixed": 120,
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
            "avg": 8334.989594742607,
            "median": 1824.0
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
              "retail_pct": 0.8499452354874042,
              "mixed_pct": 0.13143483023001096,
              "instit_pct": 0.018619934282584884,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.27906226883902663,
              "mixed_qty_pct": 0.48092862697494454,
              "instit_qty_pct": 0.24000910418602886,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.2777072806537268,
              "mixed_notional_pct": 0.4789696453101446,
              "instit_notional_pct": 0.2433230740361286,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 8334.989594742607,
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
              "avg_trade_size": 404.2235521235521,
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
              "avg_trade_size": 2336.157894736842,
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
              "retail_pct": 0.9891304347826086,
              "mixed_pct": 0.010869565217391304,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.9008133306883555,
              "mixed_qty_pct": 0.09918666931164452,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.9008781498582906,
              "mixed_notional_pct": 0.09912185014170938,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 2182.2065217391305,
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
              "retail_pct": 0.9326145552560647,
              "mixed_pct": 0.0673854447439353,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.6813120546671617,
              "mixed_qty_pct": 0.31868794533283834,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.6769211938980835,
              "mixed_notional_pct": 0.32307880610191647,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 4626.08697214735,
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
              "retail_pct": 0.9256676305494131,
              "mixed_pct": 0.0665079095084198,
              "instit_pct": 0.007824459942167036,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.35660939564033395,
              "mixed_qty_pct": 0.4540328407084564,
              "instit_qty_pct": 0.18935776365120963,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.3580271148811529,
              "mixed_notional_pct": 0.4527444261434469,
              "instit_notional_pct": 0.18922845897540022,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 4063.412315019561,
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
              "retail_pct": 0.8760330578512396,
              "mixed_pct": 0.12396694214876033,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.48264984227129337,
              "mixed_qty_pct": 0.5173501577287066,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.49726075843046985,
              "mixed_notional_pct": 0.5027392415695302,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 5234.603305785124,
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
              "retail_pct": 0.8482849604221636,
              "mixed_pct": 0.13852242744063326,
              "instit_pct": 0.013192612137203167,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.34591209933319755,
              "mixed_qty_pct": 0.4494677762909185,
              "instit_qty_pct": 0.20462012437588395,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.35246778660333894,
              "mixed_notional_pct": 0.4476049223533964,
              "instit_notional_pct": 0.19992729104326473,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 7736.051187335093,
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
          "n_trades": 4536,
          "n_runs": 0,
          "n_trade_days": 63,
          "first_trade_date": "2026-01-29",
          "last_trade_date": "2026-04-30",
          "period_days": 91,
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
            "retail_pct": 0.8891093474426808,
            "mixed_pct": 0.10163139329805997,
            "instit_pct": 0.009259259259259259,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.3706648607806289,
            "mixed_qty_pct": 0.48175855491543274,
            "instit_qty_pct": 0.14757658430393836,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.3670296892694224,
            "mixed_notional_pct": 0.4832475360032233,
            "instit_notional_pct": 0.1497227747273543,
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
              "retail": 4033,
              "mixed": 461,
              "institutional": 42,
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
            "avg": 6140.8054453262785,
            "median": 1380.0
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
              "retail_pct": 0.8891093474426808,
              "mixed_pct": 0.10163139329805997,
              "instit_pct": 0.009259259259259259,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.3706648607806289,
              "mixed_qty_pct": 0.48175855491543274,
              "instit_qty_pct": 0.14757658430393836,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.3670296892694224,
              "mixed_notional_pct": 0.4832475360032233,
              "instit_notional_pct": 0.1497227747273543,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 6140.8054453262785,
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
              "avg_trade_size": 396.52324723247233,
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
              "retail_pct": 0.9896729776247849,
              "mixed_pct": 0.010327022375215147,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.8448505615838569,
              "mixed_qty_pct": 0.15514943841614315,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.8384207990433307,
              "mixed_notional_pct": 0.1615792009566693,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 1334.2332185886403,
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
              "retail_pct": 0.93984375,
              "mixed_pct": 0.06015625,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.7030939142948086,
              "mixed_qty_pct": 0.2969060857051914,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.6918730924798788,
              "mixed_notional_pct": 0.30812690752012123,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 4290.22546875,
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
              "retail_pct": 0.9370932754880694,
              "mixed_pct": 0.06290672451193059,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.6264061574896388,
              "mixed_qty_pct": 0.37359384251036115,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.63412920124441,
              "mixed_notional_pct": 0.36587079875559003,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 4045.1616052060735,
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
              "retail_pct": 0.9259259259259259,
              "mixed_pct": 0.06172839506172839,
              "instit_pct": 0.012345679012345678,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.2578891799945255,
              "mixed_qty_pct": 0.11645094435537481,
              "instit_qty_pct": 0.6256598756500997,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.25839417197866527,
              "mixed_notional_pct": 0.12550071549369066,
              "instit_notional_pct": 0.6161051125276441,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 11862.654320987655,
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
              "retail_pct": 0.9128182449933666,
              "mixed_pct": 0.0786531050603323,
              "instit_pct": 0.008528649946301092,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.35191515805611884,
              "mixed_qty_pct": 0.4585665901861261,
              "instit_qty_pct": 0.18951825175775502,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.35406008754344864,
              "mixed_notional_pct": 0.45672016912254426,
              "instit_notional_pct": 0.1892197433340071,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 4766.457135637122,
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
              "retail_pct": 0.9032258064516129,
              "mixed_pct": 0.09005376344086022,
              "instit_pct": 0.006720430107526882,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.46423752755623354,
              "mixed_qty_pct": 0.3938829698599726,
              "instit_qty_pct": 0.1418795025837939,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.45497155777572046,
              "mixed_notional_pct": 0.4005758492767082,
              "instit_notional_pct": 0.14445259294757137,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 5454.216196236559,
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
      "n_trades": 4536,
      "n_runs": 0,
      "n_trade_days": 63,
      "first_trade_date": "2026-01-29",
      "last_trade_date": "2026-04-30",
      "period_days": 91,
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
        "retail_pct": 0.8891093474426808,
        "mixed_pct": 0.10163139329805997,
        "instit_pct": 0.009259259259259259,
        "ambiguous_pct": null,
        "unobservable_pct": null,
        "unclear_pct": null,
        "retail_qty_pct": null,
        "mixed_qty_pct": null,
        "instit_qty_pct": null,
        "ambiguous_qty_pct": null,
        "unobservable_qty_pct": null,
        "unclear_qty_pct": null,
        "retail_notional_pct": 0.3670296892694224,
        "mixed_notional_pct": 0.4832475360032233,
        "instit_notional_pct": 0.1497227747273543,
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
        "avg": 6140.8054453262785,
        "median": 1380.0
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
            "n_trades": 902,
            "n_runs": 0,
            "retail_pct": 0.8514412416851441,
            "mixed_pct": 0.12971175166297116,
            "instit_pct": 0.018847006651884702,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "avg_trade_size": 8249.825388026607,
            "avg_run_notional": null,
            "retail_qty_pct": 0.2787622065575891,
            "mixed_qty_pct": 0.4757356269805342,
            "instit_qty_pct": 0.24550216646187673,
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
            "total_quantity": 30926000.0
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
          "retail_pct": 0.8891093474426808,
          "mixed_pct": 0.10163139329805997,
          "instit_pct": 0.009259259259259259,
          "ambiguous_pct": null,
          "unobservable_pct": null,
          "unclear_pct": null,
          "retail_qty_pct": 0.3706648607806289,
          "mixed_qty_pct": 0.48175855491543274,
          "instit_qty_pct": 0.14757658430393836,
          "ambiguous_qty_pct": null,
          "unobservable_qty_pct": null,
          "unclear_qty_pct": null,
          "retail_notional_pct": 0.3670296892694224,
          "mixed_notional_pct": 0.4832475360032233,
          "instit_notional_pct": 0.1497227747273543,
          "ambiguous_notional_pct": null,
          "unobservable_notional_pct": null,
          "unclear_notional_pct": null,
          "run_retail_pct": null,
          "run_mixed_pct": null,
          "run_instit_pct": null,
          "run_unclear_pct": null,
          "avg_trade_size": 6140.8054453262785,
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
          "avg_trade_size": 396.52324723247233,
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
          "retail_pct": 0.9896729776247849,
          "mixed_pct": 0.010327022375215147,
          "instit_pct": 0.0,
          "ambiguous_pct": null,
          "unobservable_pct": null,
          "unclear_pct": null,
          "retail_qty_pct": 0.8448505615838569,
          "mixed_qty_pct": 0.15514943841614315,
          "instit_qty_pct": 0.0,
          "ambiguous_qty_pct": null,
          "unobservable_qty_pct": null,
          "unclear_qty_pct": null,
          "retail_notional_pct": 0.8384207990433307,
          "mixed_notional_pct": 0.1615792009566693,
          "instit_notional_pct": 0.0,
          "ambiguous_notional_pct": null,
          "unobservable_notional_pct": null,
          "unclear_notional_pct": null,
          "run_retail_pct": null,
          "run_mixed_pct": null,
          "run_instit_pct": null,
          "run_unclear_pct": null,
          "avg_trade_size": 1334.2332185886403,
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
          "retail_pct": 0.93984375,
          "mixed_pct": 0.06015625,
          "instit_pct": 0.0,
          "ambiguous_pct": null,
          "unobservable_pct": null,
          "unclear_pct": null,
          "retail_qty_pct": 0.7030939142948086,
          "mixed_qty_pct": 0.2969060857051914,
          "instit_qty_pct": 0.0,
          "ambiguous_qty_pct": null,
          "unobservable_qty_pct": null,
          "unclear_qty_pct": null,
          "retail_notional_pct": 0.6918730924798788,
          "mixed_notional_pct": 0.30812690752012123,
          "instit_notional_pct": 0.0,
          "ambiguous_notional_pct": null,
          "unobservable_notional_pct": null,
          "unclear_notional_pct": null,
          "run_retail_pct": null,
          "run_mixed_pct": null,
          "run_instit_pct": null,
          "run_unclear_pct": null,
          "avg_trade_size": 4290.22546875,
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
          "retail_pct": 0.9370932754880694,
          "mixed_pct": 0.06290672451193059,
          "instit_pct": 0.0,
          "ambiguous_pct": null,
          "unobservable_pct": null,
          "unclear_pct": null,
          "retail_qty_pct": 0.6264061574896388,
          "mixed_qty_pct": 0.37359384251036115,
          "instit_qty_pct": 0.0,
          "ambiguous_qty_pct": null,
          "unobservable_qty_pct": null,
          "unclear_qty_pct": null,
          "retail_notional_pct": 0.63412920124441,
          "mixed_notional_pct": 0.36587079875559003,
          "instit_notional_pct": 0.0,
          "ambiguous_notional_pct": null,
          "unobservable_notional_pct": null,
          "unclear_notional_pct": null,
          "run_retail_pct": null,
          "run_mixed_pct": null,
          "run_instit_pct": null,
          "run_unclear_pct": null,
          "avg_trade_size": 4045.1616052060735,
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
          "retail_pct": 0.9259259259259259,
          "mixed_pct": 0.06172839506172839,
          "instit_pct": 0.012345679012345678,
          "ambiguous_pct": null,
          "unobservable_pct": null,
          "unclear_pct": null,
          "retail_qty_pct": 0.2578891799945255,
          "mixed_qty_pct": 0.11645094435537481,
          "instit_qty_pct": 0.6256598756500997,
          "ambiguous_qty_pct": null,
          "unobservable_qty_pct": null,
          "unclear_qty_pct": null,
          "retail_notional_pct": 0.25839417197866527,
          "mixed_notional_pct": 0.12550071549369066,
          "instit_notional_pct": 0.6161051125276441,
          "ambiguous_notional_pct": null,
          "unobservable_notional_pct": null,
          "unclear_notional_pct": null,
          "run_retail_pct": null,
          "run_mixed_pct": null,
          "run_instit_pct": null,
          "run_unclear_pct": null,
          "avg_trade_size": 11862.654320987655,
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
          "retail_pct": 0.9128182449933666,
          "mixed_pct": 0.0786531050603323,
          "instit_pct": 0.008528649946301092,
          "ambiguous_pct": null,
          "unobservable_pct": null,
          "unclear_pct": null,
          "retail_qty_pct": 0.35191515805611884,
          "mixed_qty_pct": 0.4585665901861261,
          "instit_qty_pct": 0.18951825175775502,
          "ambiguous_qty_pct": null,
          "unobservable_qty_pct": null,
          "unclear_qty_pct": null,
          "retail_notional_pct": 0.35406008754344864,
          "mixed_notional_pct": 0.45672016912254426,
          "instit_notional_pct": 0.1892197433340071,
          "ambiguous_notional_pct": null,
          "unobservable_notional_pct": null,
          "unclear_notional_pct": null,
          "run_retail_pct": null,
          "run_mixed_pct": null,
          "run_instit_pct": null,
          "run_unclear_pct": null,
          "avg_trade_size": 4766.457135637122,
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
          "retail_pct": 0.9032258064516129,
          "mixed_pct": 0.09005376344086022,
          "instit_pct": 0.006720430107526882,
          "ambiguous_pct": null,
          "unobservable_pct": null,
          "unclear_pct": null,
          "retail_qty_pct": 0.46423752755623354,
          "mixed_qty_pct": 0.3938829698599726,
          "instit_qty_pct": 0.1418795025837939,
          "ambiguous_qty_pct": null,
          "unobservable_qty_pct": null,
          "unclear_qty_pct": null,
          "retail_notional_pct": 0.45497155777572046,
          "mixed_notional_pct": 0.4005758492767082,
          "instit_notional_pct": 0.14445259294757137,
          "ambiguous_notional_pct": null,
          "unobservable_notional_pct": null,
          "unclear_notional_pct": null,
          "run_retail_pct": null,
          "run_mixed_pct": null,
          "run_instit_pct": null,
          "run_unclear_pct": null,
          "avg_trade_size": 5454.216196236559,
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
            "retail_pct": 0.7272727272727273,
            "mixed_pct": 0.2727272727272727,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.29217293020627294,
            "mixed_qty_pct": 0.707827069793727,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.290873159528317,
            "mixed_notional_pct": 0.709126840471683,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 15318.454545454546,
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
            "avg_trade_size": 1239.0,
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
            "avg_trade_size": 597.0,
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
            "avg_trade_size": 605.0,
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
            "retail_pct": 0.9734904270986745,
            "mixed_pct": 0.023564064801178203,
            "instit_pct": 0.0029455081001472753,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.4991813873330461,
            "mixed_qty_pct": 0.35260663507109,
            "instit_qty_pct": 0.14821197759586385,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.5005967439316293,
            "mixed_notional_pct": 0.3518511885573743,
            "instit_notional_pct": 0.1475520675109963,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 1665.2717231222387,
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
            "retail_pct": 0.9615384615384616,
            "mixed_pct": 0.038461538461538464,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.8233371610281778,
            "mixed_qty_pct": 0.17666283897182228,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.8245163948419265,
            "mixed_notional_pct": 0.1754836051580735,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 4032.811538461538,
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
            "retail_pct": 0.8982035928143712,
            "mixed_pct": 0.09580838323353294,
            "instit_pct": 0.005988023952095809,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.4942770727894695,
            "mixed_qty_pct": 0.4115168577978495,
            "instit_qty_pct": 0.09420606941268098,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.4967609552322753,
            "mixed_notional_pct": 0.4030930118787374,
            "instit_notional_pct": 0.10014603288898731,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 6549.668862275447,
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
            "retail_pct": 0.8636363636363636,
            "mixed_pct": 0.12727272727272726,
            "instit_pct": 0.00909090909090909,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.3969069069069069,
            "mixed_qty_pct": 0.513003003003003,
            "instit_qty_pct": 0.09009009009009009,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.397398969043679,
            "mixed_notional_pct": 0.5104965353358898,
            "instit_notional_pct": 0.09210449562043123,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 7402.659090909091,
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
            "avg_trade_size": 1473.1818181818182,
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
            "avg_trade_size": 323.4013698630137,
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
            "avg_trade_size": 2150.8333333333335,
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
            "retail_pct": 0.9629629629629629,
            "mixed_pct": 0.037037037037037035,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.7828447339847991,
            "mixed_qty_pct": 0.21715526601520088,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.7758835601777823,
            "mixed_notional_pct": 0.22411643982221774,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 2941.5925925925926,
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
            "retail_pct": 0.9212445308701993,
            "mixed_pct": 0.07049100631988332,
            "instit_pct": 0.008264462809917356,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.3328146914446003,
            "mixed_qty_pct": 0.459304873772791,
            "instit_qty_pct": 0.2078804347826087,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.3347528329373173,
            "mixed_notional_pct": 0.45862593296071263,
            "instit_notional_pct": 0.20662123410197009,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 4420.854399611084,
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
            "retail_pct": 0.9192982456140351,
            "mixed_pct": 0.08070175438596491,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.6534913051413077,
            "mixed_qty_pct": 0.34650869485869223,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.6544855664304433,
            "mixed_notional_pct": 0.34551443356955674,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 5329.875087719298,
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
            "retail_pct": 0.890728476821192,
            "mixed_pct": 0.10264900662251655,
            "instit_pct": 0.006622516556291391,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.5104571194554672,
            "mixed_qty_pct": 0.39970375809840314,
            "instit_qty_pct": 0.08983912244612964,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.5127968680735868,
            "mixed_notional_pct": 0.39323450190642245,
            "instit_notional_pct": 0.09396863001999069,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 6293.991390728476,
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
            "retail_pct": 0.8499452354874042,
            "mixed_pct": 0.13143483023001096,
            "instit_pct": 0.018619934282584884,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.27906226883902663,
            "mixed_qty_pct": 0.48092862697494454,
            "instit_qty_pct": 0.24000910418602886,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.2777072806537268,
            "mixed_notional_pct": 0.4789696453101446,
            "instit_notional_pct": 0.2433230740361286,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 8334.989594742607,
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
            "avg_trade_size": 404.2235521235521,
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
            "avg_trade_size": 2336.157894736842,
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
            "retail_pct": 0.9891304347826086,
            "mixed_pct": 0.010869565217391304,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.9008133306883555,
            "mixed_qty_pct": 0.09918666931164452,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.9008781498582906,
            "mixed_notional_pct": 0.09912185014170938,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 2182.2065217391305,
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
            "retail_pct": 0.9326145552560647,
            "mixed_pct": 0.0673854447439353,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.6813120546671617,
            "mixed_qty_pct": 0.31868794533283834,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.6769211938980835,
            "mixed_notional_pct": 0.32307880610191647,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 4626.08697214735,
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
            "retail_pct": 0.9256676305494131,
            "mixed_pct": 0.0665079095084198,
            "instit_pct": 0.007824459942167036,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.35660939564033395,
            "mixed_qty_pct": 0.4540328407084564,
            "instit_qty_pct": 0.18935776365120963,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.3580271148811529,
            "mixed_notional_pct": 0.4527444261434469,
            "instit_notional_pct": 0.18922845897540022,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 4063.412315019561,
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
            "retail_pct": 0.8760330578512396,
            "mixed_pct": 0.12396694214876033,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.48264984227129337,
            "mixed_qty_pct": 0.5173501577287066,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.49726075843046985,
            "mixed_notional_pct": 0.5027392415695302,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 5234.603305785124,
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
            "retail_pct": 0.8482849604221636,
            "mixed_pct": 0.13852242744063326,
            "instit_pct": 0.013192612137203167,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.34591209933319755,
            "mixed_qty_pct": 0.4494677762909185,
            "instit_qty_pct": 0.20462012437588395,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.35246778660333894,
            "mixed_notional_pct": 0.4476049223533964,
            "instit_notional_pct": 0.19992729104326473,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 7736.051187335093,
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
            "retail_pct": 0.8891093474426808,
            "mixed_pct": 0.10163139329805997,
            "instit_pct": 0.009259259259259259,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.3706648607806289,
            "mixed_qty_pct": 0.48175855491543274,
            "instit_qty_pct": 0.14757658430393836,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.3670296892694224,
            "mixed_notional_pct": 0.4832475360032233,
            "instit_notional_pct": 0.1497227747273543,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 6140.8054453262785,
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
            "avg_trade_size": 396.52324723247233,
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
            "retail_pct": 0.9896729776247849,
            "mixed_pct": 0.010327022375215147,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.8448505615838569,
            "mixed_qty_pct": 0.15514943841614315,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.8384207990433307,
            "mixed_notional_pct": 0.1615792009566693,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 1334.2332185886403,
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
            "retail_pct": 0.93984375,
            "mixed_pct": 0.06015625,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.7030939142948086,
            "mixed_qty_pct": 0.2969060857051914,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.6918730924798788,
            "mixed_notional_pct": 0.30812690752012123,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 4290.22546875,
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
            "retail_pct": 0.9370932754880694,
            "mixed_pct": 0.06290672451193059,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.6264061574896388,
            "mixed_qty_pct": 0.37359384251036115,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.63412920124441,
            "mixed_notional_pct": 0.36587079875559003,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 4045.1616052060735,
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
            "retail_pct": 0.9259259259259259,
            "mixed_pct": 0.06172839506172839,
            "instit_pct": 0.012345679012345678,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.2578891799945255,
            "mixed_qty_pct": 0.11645094435537481,
            "instit_qty_pct": 0.6256598756500997,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.25839417197866527,
            "mixed_notional_pct": 0.12550071549369066,
            "instit_notional_pct": 0.6161051125276441,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 11862.654320987655,
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
            "retail_pct": 0.9128182449933666,
            "mixed_pct": 0.0786531050603323,
            "instit_pct": 0.008528649946301092,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.35191515805611884,
            "mixed_qty_pct": 0.4585665901861261,
            "instit_qty_pct": 0.18951825175775502,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.35406008754344864,
            "mixed_notional_pct": 0.45672016912254426,
            "instit_notional_pct": 0.1892197433340071,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 4766.457135637122,
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
            "retail_pct": 0.9032258064516129,
            "mixed_pct": 0.09005376344086022,
            "instit_pct": 0.006720430107526882,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.46423752755623354,
            "mixed_qty_pct": 0.3938829698599726,
            "instit_qty_pct": 0.1418795025837939,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.45497155777572046,
            "mixed_notional_pct": 0.4005758492767082,
            "instit_notional_pct": 0.14445259294757137,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 5454.216196236559,
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
      "total_trades": 6488,
      "price_moving_trades": 1296,
      "pct_price_moving": 19.97533908754624,
      "all_movers": {
        "count": 1296,
        "avg_size": 6887.444058641975,
        "median_size": 931.75,
        "retail_count": 1103,
        "mixed_count": 177,
        "institutional_count": 16,
        "ambiguous_count": 0,
        "unobservable_count": 0,
        "retail_pct": 85.10802469135803,
        "mixed_pct": 13.657407407407407,
        "instit_pct": 1.2345679012345678,
        "unclear_pct": null
      },
      "positive_movers": {
        "count": 649,
        "avg_size": 5040.375192604006,
        "median_size": 69.0,
        "retail_count": 576,
        "mixed_count": 68,
        "institutional_count": 5,
        "ambiguous_count": 0,
        "unobservable_count": 0,
        "retail_pct": 88.75192604006163,
        "mixed_pct": 10.477657935285054,
        "instit_pct": 0.7704160246533128,
        "unclear_pct": null
      },
      "negative_movers": {
        "count": 647,
        "avg_size": 8740.222565687789,
        "median_size": 2400.0,
        "retail_count": 527,
        "mixed_count": 109,
        "institutional_count": 11,
        "ambiguous_count": 0,
        "unobservable_count": 0,
        "retail_pct": 81.45285935085008,
        "mixed_pct": 16.846986089644513,
        "instit_pct": 1.7001545595054095,
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
        "n_days_short_data": 66,
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
            "avg_short_ratio": 0.006903055463612285,
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
          "avg_short_ratio": 2.483362801042565e-05,
          "max_short_ratio": 0.0071947622131088565,
          "is_target": false
        },
        {
          "ticker": "NXR",
          "avg_short_ratio": 8.65901786755033e-05,
          "max_short_ratio": 0.03229813664596273,
          "is_target": false
        },
        {
          "ticker": "J03",
          "avg_short_ratio": 0.00028511260075606427,
          "max_short_ratio": 0.039047524386953865,
          "is_target": false
        },
        {
          "ticker": "U77",
          "avg_short_ratio": 0.003556209468401359,
          "max_short_ratio": 1.0,
          "is_target": false
        },
        {
          "ticker": "ITS",
          "avg_short_ratio": 0.003898875820953457,
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
          "opening": 0.031295826030973924,
          "continuous": 0.9337805868797678,
          "closing": 0.03492358708925825,
          "auctions": 0.06621941312023218,
          "other": 0.0
        },
        "1W": {
          "opening": 0.018767396210519097,
          "continuous": 0.8916430489592844,
          "closing": 0.052382590940491774,
          "auctions": 0.10835695104071563,
          "other": 0.0
        },
        "1M": {
          "opening": 0.010913270277715506,
          "continuous": 0.9593957727016936,
          "closing": 0.018702136185570296,
          "auctions": 0.04060422729830641,
          "other": 0.0
        },
        "3M": {
          "opening": 0.014457596559591241,
          "continuous": 0.9521945290213696,
          "closing": 0.024786657217634605,
          "auctions": 0.04780547097863033,
          "other": 0.0
        }
      },
      "hhi": {
        "1D": 0.32513733037893,
        "1W": 0.2601234422756871,
        "1M": 0.34039373368107784,
        "3M": 0.2656995668229319
      },
      "profile_buckets": [
        {
          "time": "08:30",
          "avg_share": 0.007
        },
        {
          "time": "09:00",
          "avg_share": 0.1104
        },
        {
          "time": "09:30",
          "avg_share": 0.0975
        },
        {
          "time": "10:00",
          "avg_share": 0.0841
        },
        {
          "time": "10:30",
          "avg_share": 0.0623
        },
        {
          "time": "11:00",
          "avg_share": 0.0452
        },
        {
          "time": "11:30",
          "avg_share": 0.0643
        },
        {
          "time": "12:00",
          "avg_share": 0.0023
        },
        {
          "time": "12:30",
          "avg_share": 0.0115
        },
        {
          "time": "13:00",
          "avg_share": 0.0841
        },
        {
          "time": "13:30",
          "avg_share": 0.0574
        },
        {
          "time": "14:00",
          "avg_share": 0.0701
        },
        {
          "time": "14:30",
          "avg_share": 0.0564
        },
        {
          "time": "15:00",
          "avg_share": 0.0492
        },
        {
          "time": "15:30",
          "avg_share": 0.0473
        },
        {
          "time": "16:00",
          "avg_share": 0.0477
        },
        {
          "time": "16:30",
          "avg_share": 0.0668
        },
        {
          "time": "17:00",
          "avg_share": 0.0366
        }
      ],
      "peers_hhi_rows": [
        {
          "ticker": "TKU",
          "auctions_pct": 6.245630856712295,
          "hhi": 0.2614999794495032,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400",
            "you": true
          }
        },
        {
          "ticker": "KUX",
          "auctions_pct": 2.5745339729188172,
          "hhi": 0.7077179421101513,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "532",
          "auctions_pct": 9.172441413123947,
          "hhi": 0.8040657560647603,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "U77",
          "auctions_pct": 4.921508747541371,
          "hhi": 0.5417571020592072,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "J03",
          "auctions_pct": 4.593596960847122,
          "hhi": 0.592653817049038,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "NXR",
          "auctions_pct": 3.4909671077797633,
          "hhi": 0.73225287468922,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "42F",
          "auctions_pct": 7.995370358240822,
          "hhi": 0.4745950760512947,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "LVR",
          "auctions_pct": 2.884469817412441,
          "hhi": 0.46918397603453177,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "ITS",
          "auctions_pct": 3.296235064159783,
          "hhi": 0.20798874251250032,
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
