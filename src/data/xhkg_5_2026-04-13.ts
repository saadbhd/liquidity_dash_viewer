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
      "ticker": "5",
      "name": "HSBC HOLDINGS",
      "marketCap": 2385076234629.2,
      "sector": "Banks",
      "industry": "Financials - Banks"
    },
    {
      "ticker": "939",
      "name": "CCB",
      "marketCap": 2024313833389.6,
      "sector": "Banks",
      "industry": "Financials - Banks"
    },
    {
      "ticker": "1398",
      "name": "ICBC",
      "marketCap": 605822430959.0,
      "sector": "Banks",
      "industry": "Financials - Banks"
    },
    {
      "ticker": "3988",
      "name": "BANK OF CHINA",
      "marketCap": 421456273030.8,
      "sector": "Banks",
      "industry": "Financials - Banks"
    },
    {
      "ticker": "3968",
      "name": "CM BANK",
      "marketCap": 228259606271.84,
      "sector": "Banks",
      "industry": "Financials - Banks"
    },
    {
      "ticker": "1288",
      "name": "ABC",
      "marketCap": 178592562187.75998,
      "sector": "Banks",
      "industry": "Financials - Banks"
    },
    {
      "ticker": "2888",
      "name": "STANCHART",
      "marketCap": 396644755138.0,
      "sector": "Banks",
      "industry": "Financials - Banks"
    },
    {
      "ticker": "998",
      "name": "CITIC BANK",
      "marketCap": 118908482186.23,
      "sector": "Banks",
      "industry": "Financials - Banks"
    },
    {
      "ticker": "1658",
      "name": "PSBC",
      "marketCap": 98685149990.0,
      "sector": "Banks",
      "industry": "Financials - Banks"
    }
  ]
};

export const REPORT_DATA: ReportData = {
  "meta": {
    "market": "XHKG",
    "currency": "HKD",
    "ticker": "5",
    "company": "HSBC HOLDINGS",
    "asof_date": "2026-04-13",
    "industry": "Financials - Banks",
    "sector": "Banks",
    "market_cap_display": "2385.1B",
    "market_cap_category": "large",
    "universe_total": 2574,
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
          "score_pca": 95.2991452991453,
          "score_pca_percentile": 95.2991452991453,
          "rank_pca": 122,
          "total": 2574,
          "adv_notional_sgd": 2125987663.2000003,
          "adv_volume_shares": 15316914.0,
          "free_float_shares": 17175239862.0,
          "turnover_ratio": 0.0008918020431195536,
          "votes": 10789.0,
          "trades": 10789.0,
          "spread_pct": 0.0007814594801787189,
          "spread_ticks": 1.0791426500534982,
          "amihud": 3.0302981680616206e-12,
          "volatility": 0.32626397409638563
        },
        "pca": {
          "valid": true,
          "window_days": 1,
          "variance_explained": 0.5448533203102911,
          "loadings": {
            "log_adv": 0.5373384042564382,
            "log_trades": 0.5007273571742245,
            "log_turnover": 0.5010208539275326,
            "neg_spread": 0.3932827095081454,
            "neg_amihud": 0.029466942737967714,
            "neg_vol": -0.23233180304425852
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
          "peer_median_adv": 393200198.30999994,
          "peer_median_score_pca": 91.18104118104118,
          "peer_median_trades": 5484.5,
          "peer_median_volatility": 0.23104196089120438,
          "peer_median_spread_pct": 0.0014281180912195262,
          "peer_median_spread_ticks": 1.037706691392366,
          "peer_median_amihud": 1.142436050181302e-11,
          "peer_median_turnover_ratio": 0.002206436818380852,
          "target_vs_peer": {
            "score_pca_delta": 4.12,
            "adv_delta_pct": 440.7,
            "trades_delta_pct": 96.72,
            "volatility_delta_pct": -41.21,
            "spread_pct_delta_pct": 45.28,
            "spread_ticks_delta_pct": 3.99,
            "amihud_delta_pct": 73.48,
            "turnover_ratio_delta_pct": -59.58
          }
        },
        "peer_liquidity": [
          {
            "ticker": "5",
            "score_pca": 95.2991452991453,
            "rank_pca": 122,
            "adv": 2125987663.2000003,
            "trades": 10789.0,
            "volatility": 0.32626397409638563,
            "spread_pct": 0.0007814594801787189,
            "spread_ticks": 1.0791426500534982,
            "amihud": 3.0302981680616206e-12,
            "turnover_ratio": 0.0008918020431195536,
            "is_target": true
          },
          {
            "ticker": "939",
            "score_pca": 94.87179487179486,
            "rank_pca": 133,
            "adv": 1284228470.32,
            "trades": 11530.0,
            "volatility": 0.2508990475263615,
            "spread_pct": 0.0012083306545316909,
            "spread_ticks": 1.0131310555838857,
            "amihud": 2.764536015233644e-12,
            "turnover_ratio": 0.0016953990830194208,
            "is_target": false
          },
          {
            "ticker": "1398",
            "score_pca": 98.0963480963481,
            "rank_pca": 50,
            "adv": 743185385.98,
            "trades": 10796.0,
            "volatility": 1.1059613392876402,
            "spread_pct": 0.00145586576565287,
            "spread_ticks": 1.0123433874709977,
            "amihud": 1.9305011328544533e-12,
            "turnover_ratio": 0.0016808456412547306,
            "is_target": false
          },
          {
            "ticker": "3988",
            "score_pca": 93.2012432012432,
            "rank_pca": 176,
            "adv": 773497045.44,
            "trades": 6927.0,
            "volatility": 0.22927630587554557,
            "spread_pct": 0.002004495090068212,
            "spread_ticks": 1.007409498271117,
            "amihud": 0.0,
            "turnover_ratio": 0.0027174745537422826,
            "is_target": false
          },
          {
            "ticker": "3968",
            "score_pca": 92.07459207459208,
            "rank_pca": 205,
            "adv": 471752955.96,
            "trades": 6226.0,
            "volatility": 0.17655344497475536,
            "spread_pct": 0.000480077365790915,
            "spread_ticks": null,
            "amihud": 1.1870619842973224e-11,
            "turnover_ratio": 0.0036751706446218817,
            "is_target": false
          },
          {
            "ticker": "1288",
            "score_pca": 90.28749028749029,
            "rank_pca": 251,
            "adv": 314647440.65999997,
            "trades": 4743.0,
            "volatility": 0.23053038566650152,
            "spread_pct": 0.0018291138889556333,
            "spread_ticks": 1.0579431259354286,
            "amihud": 1.0978101160652815e-11,
            "turnover_ratio": 0.0029223843130595406,
            "is_target": false
          },
          {
            "ticker": "2888",
            "score_pca": 86.4024864024864,
            "rank_pca": 351,
            "adv": 262202900.0,
            "trades": 3906.0,
            "volatility": 0.2315535361159072,
            "spread_pct": 0.0012839734802262816,
            "spread_ticks": 2.273932863655201,
            "amihud": 7.354513072309194e-11,
            "turnover_ratio": 0.0007867258830075147,
            "is_target": false
          },
          {
            "ticker": "998",
            "score_pca": 86.24708624708624,
            "rank_pca": 355,
            "adv": 112855018.67,
            "trades": 3723.0,
            "volatility": 0.2907553495693436,
            "spread_pct": 0.0014003704167861826,
            "spread_ticks": 1.1094184660219897,
            "amihud": 8.961745914781304e-11,
            "turnover_ratio": 0.0015537517142691433,
            "is_target": false
          },
          {
            "ticker": "1658",
            "score_pca": 86.05283605283606,
            "rank_pca": 360,
            "adv": 146060457.34,
            "trades": 2735.0,
            "volatility": 0.15439387734152651,
            "spread_pct": 0.002097215544255517,
            "spread_ticks": 1.037706691392366,
            "amihud": 2.7662545455397136e-11,
            "turnover_ratio": 0.004191633101384547,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Banks",
          "sector_count": 37,
          "market_count": 2574,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.44715899271990633,
              "median": 0.2995098745205822,
              "min": 0.0,
              "max": 8.521314226042401,
              "p5": 0.0,
              "p95": 1.4075045606617482,
              "count": 2574
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 59168125.60115096,
              "median": 254900.0,
              "min": 0.0,
              "max": 10355121000.0,
              "p5": 0.0,
              "p95": 255245995.64399976,
              "count": 2574
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.04849621540361013,
              "median": 0.02796412967770533,
              "min": 0.0004461756629917344,
              "max": 0.7648559970834851,
              "p5": 0.001432364193350901,
              "p95": 0.1598131497494227,
              "count": 2574
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.006537377216591497,
              "median": 0.0010420291550965475,
              "min": 0.0,
              "max": 2.271727824179446,
              "p5": 0.0,
              "p95": 0.021300561369894604,
              "count": 2553
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.3905490736384505e-05,
              "median": 6.909472437596244e-09,
              "min": 0.0,
              "max": 0.019525148391127775,
              "p5": 0.0,
              "p95": 8.165515057712393e-06,
              "count": 2183
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1127.711344211344,
              "median": 22.0,
              "min": 0.0,
              "max": 69247.0,
              "p5": 0.0,
              "p95": 6158.299999999998,
              "count": 2574
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.21427407866288994,
              "median": 0.19576896435703345,
              "min": 0.0,
              "max": 1.1059613392876402,
              "p5": 0.0,
              "p95": 0.4551782800372253,
              "count": 37
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 179040006.18903255,
              "median": 7092050.000000001,
              "min": 0.0,
              "max": 2125987663.2000003,
              "p5": 0.0,
              "p95": 875643330.4159979,
              "count": 37
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.019387775403736766,
              "median": 0.003246883308278912,
              "min": 0.000480077365790915,
              "max": 0.16015624999999997,
              "p5": 0.0011229564196610965,
              "p95": 0.09355418467965212,
              "count": 37
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0017496728354493532,
              "median": 0.0008753524420642538,
              "min": 0.0,
              "max": 0.010689757447706725,
              "p5": 0.0,
              "p95": 0.005049268795348572,
              "count": 37
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 9.24235832699318e-08,
              "median": 8.158129493545248e-11,
              "min": 0.0,
              "max": 1.786423183803091e-06,
              "p5": 0.0,
              "p95": 4.6889274943255964e-07,
              "count": 34
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 2044.081081081081,
              "median": 347.0,
              "min": 0.0,
              "max": 11530.0,
              "p5": 0.0,
              "p95": 10790.4,
              "count": 37
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 513553709.29625,
              "median": 393200198.30999994,
              "min": 112855018.67,
              "max": 1284228470.32,
              "p5": 124476922.2045,
              "p95": 1105472471.6119998,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 6323.25,
              "median": 5484.5,
              "min": 2735.0,
              "max": 11530.0,
              "p5": 3080.8,
              "p95": 11273.1,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.3337404107946977,
              "median": 0.23104196089120438,
              "min": 0.15439387734152651,
              "max": 1.1059613392876402,
              "p5": 0.1621497260131566,
              "p95": 0.8206392428862359,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.0014699302757834128,
              "median": 0.0014281180912195262,
              "min": 0.000480077365790915,
              "max": 0.002097215544255517,
              "p5": 0.0007349660168501866,
              "p95": 0.00206476338528996,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 1.2159835840472837,
              "median": 1.037706691392366,
              "min": 1.007409498271117,
              "max": 2.273932863655201,
              "p5": 1.0088896650310812,
              "p95": 1.9245785443652368,
              "count": 7
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 2.729611168475203e-11,
              "median": 1.142436050181302e-11,
              "min": 0.0,
              "max": 8.961745914781304e-11,
              "p5": 6.756753964990587e-13,
              "p95": 8.399214419916065e-11,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0024029231167948823,
              "median": 0.002206436818380852,
              "min": 0.0007867258830075147,
              "max": 0.004191633101384547,
              "p5": 0.0010551849239490848,
              "p95": 0.004010871241517614,
              "count": 8
            }
          },
          "returns": {
            "window_days": 1,
            "n_obs": 1,
            "stock": -0.006442376521116566,
            "market": -0.003911099438221655,
            "sector": 0.0,
            "peers": 0.0007173601147776321,
            "vs_market": -0.0025312770828949116,
            "vs_sector": -0.006442376521116566,
            "vs_peers": -0.007159736635894198
          }
        }
      },
      "30d": {
        "label": "1M",
        "window_days": 21,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 21,
          "score_pca": 97.04739704739704,
          "score_pca_percentile": 97.04739704739704,
          "rank_pca": 77,
          "total": 2574,
          "adv_notional_sgd": 2263216800.0,
          "adv_volume_shares": 17409360.0,
          "free_float_shares": 17175239862.0,
          "turnover_ratio": 0.0010136312587120245,
          "votes": 11503.0,
          "trades": 11503.0,
          "spread_pct": 0.0008704784094407152,
          "spread_ticks": 1.091278219912295,
          "amihud": 5.435487420004142e-12,
          "volatility": 0.44182574494809806
        },
        "pca": {
          "valid": true,
          "window_days": 21,
          "variance_explained": 0.5656093828444971,
          "loadings": {
            "log_adv": 0.5256309866815597,
            "log_trades": 0.48151699787693036,
            "log_turnover": 0.48458982491041636,
            "neg_spread": 0.4613697966497511,
            "neg_amihud": 0.19479326773167047,
            "neg_vol": 0.07886470550782489
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
          "peer_median_adv": 560755913.74,
          "peer_median_score_pca": 96.44522144522143,
          "peer_median_trades": 7546.0,
          "peer_median_volatility": 0.21499315561362875,
          "peer_median_spread_pct": 0.0016570078785249145,
          "peer_median_spread_ticks": 1.0611595857457392,
          "peer_median_amihud": 1.2870730839535519e-11,
          "peer_median_turnover_ratio": 0.0040186294089769,
          "target_vs_peer": {
            "score_pca_delta": 0.6,
            "adv_delta_pct": 303.6,
            "trades_delta_pct": 52.44,
            "volatility_delta_pct": -105.51,
            "spread_pct_delta_pct": 47.47,
            "spread_ticks_delta_pct": 2.84,
            "amihud_delta_pct": 57.77,
            "turnover_ratio_delta_pct": -74.78
          }
        },
        "peer_liquidity": [
          {
            "ticker": "5",
            "score_pca": 97.04739704739704,
            "rank_pca": 77,
            "adv": 2263216800.0,
            "trades": 11503.0,
            "volatility": 0.44182574494809806,
            "spread_pct": 0.0008704784094407152,
            "spread_ticks": 1.091278219912295,
            "amihud": 5.435487420004142e-12,
            "turnover_ratio": 0.0010136312587120245,
            "is_target": true
          },
          {
            "ticker": "939",
            "score_pca": 98.83449883449883,
            "rank_pca": 31,
            "adv": 2042487979.18,
            "trades": 15440.0,
            "volatility": 0.21946928026186122,
            "spread_pct": 0.0012575181131767104,
            "spread_ticks": 1.02150614206872,
            "amihud": 4.587321756871219e-12,
            "turnover_ratio": 0.002806420405069925,
            "is_target": false
          },
          {
            "ticker": "1398",
            "score_pca": 98.32944832944833,
            "rank_pca": 44,
            "adv": 1485088522.98,
            "trades": 11780.0,
            "volatility": 0.21051703096539628,
            "spread_pct": 0.0015860165759673044,
            "spread_ticks": 1.0301547205557309,
            "amihud": 6.804631389029595e-12,
            "turnover_ratio": 0.003715429939336408,
            "is_target": false
          },
          {
            "ticker": "3988",
            "score_pca": 98.52369852369853,
            "rank_pca": 39,
            "adv": 1357898808.0,
            "trades": 12778.0,
            "volatility": 0.16115625729298724,
            "spread_pct": 0.0021825151079836787,
            "spread_ticks": 1.0245970215851414,
            "amihud": 4.674008833497951e-12,
            "turnover_ratio": 0.005095418331821843,
            "is_target": false
          },
          {
            "ticker": "3968",
            "score_pca": 96.77544677544677,
            "rank_pca": 84,
            "adv": 667143712.4,
            "trades": 7345.0,
            "volatility": 0.18689186956335266,
            "spread_pct": 0.0005957156584162828,
            "spread_ticks": null,
            "amihud": 9.442656943657209e-12,
            "turnover_ratio": 0.00533909974573798,
            "is_target": false
          },
          {
            "ticker": "1288",
            "score_pca": 96.1149961149961,
            "rank_pca": 101,
            "adv": 454368115.08,
            "trades": 7747.0,
            "volatility": 0.22156343125222136,
            "spread_pct": 0.002005686227097239,
            "spread_ticks": 1.0611595857457392,
            "amihud": 1.629880473541383e-11,
            "turnover_ratio": 0.004591513306784794,
            "is_target": false
          },
          {
            "ticker": "2888",
            "score_pca": 86.13053613053613,
            "rank_pca": 358,
            "adv": 204379604.99999997,
            "trades": 3234.0,
            "volatility": 0.5169496069344982,
            "spread_pct": 0.0012839734802262816,
            "spread_ticks": 2.1785334750265677,
            "amihud": 9.783379300105274e-11,
            "turnover_ratio": 0.0006697090533228832,
            "is_target": false
          },
          {
            "ticker": "998",
            "score_pca": 93.27894327894329,
            "rank_pca": 174,
            "adv": 234123842.33,
            "trades": 4970.0,
            "volatility": 0.2702555857730702,
            "spread_pct": 0.0017279991810825249,
            "spread_ticks": 1.3410413717162184,
            "amihud": 2.358398585689473e-11,
            "turnover_ratio": 0.0032559421699805448,
            "is_target": false
          },
          {
            "ticker": "1658",
            "score_pca": 90.87024087024088,
            "rank_pca": 236,
            "adv": 149688184.88000003,
            "trades": 2944.0,
            "volatility": 0.12926405589050327,
            "spread_pct": 0.002166388829461598,
            "spread_ticks": 1.0671182266009853,
            "amihud": 2.906385377319892e-11,
            "turnover_ratio": 0.004321828878617392,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Banks",
          "sector_count": 37,
          "market_count": 2574,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.6804640536670991,
              "median": 0.5557149783127365,
              "min": 0.0,
              "max": 10.049160326010378,
              "p5": 0.20727705144473446,
              "p95": 1.5941721104879674,
              "count": 2574
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 64359142.32970755,
              "median": 222280.0,
              "min": 0.0,
              "max": 12484489600.0,
              "p5": 0.0,
              "p95": 245338994.3399997,
              "count": 2574
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.04636574764805104,
              "median": 0.02900784686320404,
              "min": 0.0005957156584162828,
              "max": 0.7873945213823746,
              "p5": 0.001488374564717821,
              "p95": 0.14724834853523766,
              "count": 2574
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.004532772058050455,
              "median": 0.0008751640932674877,
              "min": 0.0,
              "max": 0.74849980977415,
              "p5": 0.0,
              "p95": 0.016681302164951978,
              "count": 2553
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.304847972112849e-06,
              "median": 4.6395854066480917e-08,
              "min": 0.0,
              "max": 0.0004281949934123848,
              "p5": 3.630791306986329e-11,
              "p95": 4.973974037584155e-06,
              "count": 2567
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1154.0291375291376,
              "median": 20.5,
              "min": 0.0,
              "max": 79388.0,
              "p5": 0.0,
              "p95": 6003.949999999999,
              "count": 2574
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.28451420380484965,
              "median": 0.2632480534161489,
              "min": 0.12926405589050327,
              "max": 0.9701886858315971,
              "p5": 0.13817638816513134,
              "p95": 0.5226315075548498,
              "count": 37
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 253564754.83142203,
              "median": 10570491.9,
              "min": 0.0,
              "max": 2263216800.0,
              "p5": 0.0,
              "p95": 1596568414.2199976,
              "count": 37
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.015565777851852433,
              "median": 0.0034832059712101957,
              "min": 0.0005957156584162828,
              "max": 0.0896321070234113,
              "p5": 0.0011801101724295115,
              "p95": 0.06332843533549615,
              "count": 37
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.002799186879899178,
              "median": 0.0009923074741956719,
              "min": 0.0,
              "max": 0.024937625599508233,
              "p5": 0.0,
              "p95": 0.008035586696189475,
              "count": 37
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 3.325000937409308e-07,
              "median": 8.384455594950687e-10,
              "min": 0.0,
              "max": 8.482861743731326e-06,
              "p5": 3.669857405496976e-12,
              "p95": 9.339260249789514e-07,
              "count": 37
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 2591.2702702702704,
              "median": 593.0,
              "min": 0.0,
              "max": 15440.0,
              "p5": 0.0,
              "p95": 11979.599999999995,
              "count": 37
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 824397346.2312499,
              "median": 560755913.74,
              "min": 149688184.88000003,
              "max": 2042487979.18,
              "p5": 168830181.922,
              "p95": 1847398169.5099998,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 8279.75,
              "median": 7546.0,
              "min": 2944.0,
              "max": 15440.0,
              "p5": 3045.5,
              "p95": 14508.3,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.23950838974173627,
              "median": 0.21499315561362875,
              "min": 0.12926405589050327,
              "max": 0.5169496069344982,
              "p5": 0.14042632638137267,
              "p95": 0.43060669952799824,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.0016007266466764524,
              "median": 0.0016570078785249145,
              "min": 0.0005957156584162828,
              "max": 0.0021825151079836787,
              "p5": 0.0008273465175824325,
              "p95": 0.0021768709105009503,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 1.2463015061855862,
              "median": 1.0611595857457392,
              "min": 1.02150614206872,
              "max": 2.1785334750265677,
              "p5": 1.0224334059236464,
              "p95": 1.9272858440334624,
              "count": 7
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 2.4036132036202026e-11,
              "median": 1.2870730839535519e-11,
              "min": 4.587321756871219e-12,
              "max": 9.783379300105274e-11,
              "p5": 4.617662233690576e-12,
              "p95": 7.376431427130386e-11,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0037244202288339713,
              "median": 0.0040186294089769,
              "min": 0.0006697090533228832,
              "max": 0.00533909974573798,
              "p5": 0.001417558026434348,
              "p95": 0.005253811250867332,
              "count": 8
            }
          },
          "returns": {
            "window_days": 21,
            "n_obs": 21,
            "stock": 0.021339220014716886,
            "market": -0.007811259659372016,
            "sector": 0.019888401383184817,
            "peers": 0.06260989543121065,
            "vs_market": 0.029150479674088903,
            "vs_sector": 0.0014508186315320692,
            "vs_peers": -0.04127067541649376
          }
        }
      },
      "3m": {
        "label": "3M",
        "window_days": 63,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 63,
          "score_pca": 97.12509712509713,
          "score_pca_percentile": 97.12509712509713,
          "rank_pca": 75,
          "total": 2574,
          "adv_notional_sgd": 2059379381.4,
          "adv_volume_shares": 15081463.0,
          "free_float_shares": 17175239862.0,
          "turnover_ratio": 0.0008780932971636423,
          "votes": 10789.0,
          "trades": 10789.0,
          "spread_pct": 0.0008255345081722986,
          "spread_ticks": 1.0923226433430515,
          "amihud": 6.391448750270146e-12,
          "volatility": 0.37735582444819943
        },
        "pca": {
          "valid": true,
          "window_days": 63,
          "variance_explained": 0.6175000296400199,
          "loadings": {
            "log_adv": 0.4988196357475682,
            "log_trades": 0.45226285665160737,
            "log_turnover": 0.45226788536661305,
            "neg_spread": 0.4615425072888609,
            "neg_amihud": 0.33110116296932596,
            "neg_vol": 0.13943304198745415
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
          "peer_median_adv": 583362032.405,
          "peer_median_score_pca": 97.008547008547,
          "peer_median_trades": 7298.0,
          "peer_median_volatility": 0.20807399947401423,
          "peer_median_spread_pct": 0.0017181570307216254,
          "peer_median_spread_ticks": 1.0481996328137035,
          "peer_median_amihud": 1.3707380553444825e-11,
          "peer_median_turnover_ratio": 0.0031462543399377947,
          "target_vs_peer": {
            "score_pca_delta": 0.12,
            "adv_delta_pct": 253.0,
            "trades_delta_pct": 47.84,
            "volatility_delta_pct": -81.36,
            "spread_pct_delta_pct": 51.95,
            "spread_ticks_delta_pct": 4.21,
            "amihud_delta_pct": 53.37,
            "turnover_ratio_delta_pct": -72.09
          }
        },
        "peer_liquidity": [
          {
            "ticker": "5",
            "score_pca": 97.12509712509713,
            "rank_pca": 75,
            "adv": 2059379381.4,
            "trades": 10789.0,
            "volatility": 0.37735582444819943,
            "spread_pct": 0.0008255345081722986,
            "spread_ticks": 1.0923226433430515,
            "amihud": 6.391448750270146e-12,
            "turnover_ratio": 0.0008780932971636423,
            "is_target": true
          },
          {
            "ticker": "939",
            "score_pca": 98.83449883449883,
            "rank_pca": 31,
            "adv": 1752486756.43,
            "trades": 14021.0,
            "volatility": 0.2125367030119308,
            "spread_pct": 0.0012921575547243493,
            "spread_ticks": 1.0185340489768535,
            "amihud": 4.889877300282989e-12,
            "turnover_ratio": 0.0024917770224134857,
            "is_target": false
          },
          {
            "ticker": "1398",
            "score_pca": 98.21289821289821,
            "rank_pca": 47,
            "adv": 1233883179.8999999,
            "trades": 11010.0,
            "volatility": 0.20361129593609764,
            "spread_pct": 0.0016020932974527072,
            "spread_ticks": 1.0272108843537415,
            "amihud": 6.901968291986873e-12,
            "turnover_ratio": 0.0030373282084672354,
            "is_target": false
          },
          {
            "ticker": "3988",
            "score_pca": 97.63014763014763,
            "rank_pca": 62,
            "adv": 853939729.8799999,
            "trades": 9318.0,
            "volatility": 0.17388262808120628,
            "spread_pct": 0.002227071298176431,
            "spread_ticks": 1.0170094325034793,
            "amihud": 6.853923926784943e-12,
            "turnover_ratio": 0.003255180471408354,
            "is_target": false
          },
          {
            "ticker": "3968",
            "score_pca": 97.9020979020979,
            "rank_pca": 55,
            "adv": 747976276.0,
            "trades": 7682.0,
            "volatility": 0.18749577201087392,
            "spread_pct": 0.0005607359268088029,
            "spread_ticks": 1.0598887648196529,
            "amihud": 8.016700568856697e-12,
            "turnover_ratio": 0.005967595370343816,
            "is_target": false
          },
          {
            "ticker": "1288",
            "score_pca": 96.38694638694638,
            "rank_pca": 94,
            "adv": 418747788.81,
            "trades": 6914.0,
            "volatility": 0.21858053573382855,
            "spread_pct": 0.001916671413097265,
            "spread_ticks": 1.0365105008077544,
            "amihud": 1.9398060538032954e-11,
            "turnover_ratio": 0.004214801152897546,
            "is_target": false
          },
          {
            "ticker": "2888",
            "score_pca": 85.58663558663558,
            "rank_pca": 372,
            "adv": 183241090.0,
            "trades": 2869.0,
            "volatility": 0.42848986869572453,
            "spread_pct": 0.0011834323200153886,
            "spread_ticks": 2.026202415424818,
            "amihud": 8.375469281169564e-11,
            "turnover_ratio": 0.0005013671787606018,
            "is_target": false
          },
          {
            "ticker": "998",
            "score_pca": 92.34654234654235,
            "rank_pca": 198,
            "adv": 166240771.2,
            "trades": 4511.0,
            "volatility": 0.2546925291883825,
            "spread_pct": 0.001834220763990544,
            "spread_ticks": 1.3387777777777778,
            "amihud": 6.233748126959981e-11,
            "turnover_ratio": 0.002488042124506553,
            "is_target": false
          },
          {
            "ticker": "1658",
            "score_pca": 93.5120435120435,
            "rank_pca": 168,
            "adv": 182449164.1,
            "trades": 3550.0,
            "volatility": 0.14801713404907763,
            "spread_pct": 0.0021178035241813135,
            "spread_ticks": 1.0612795238980843,
            "amihud": 3.196637272615065e-11,
            "turnover_ratio": 0.005136044484102729,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Banks",
          "sector_count": 37,
          "market_count": 2574,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.7071491439943555,
              "median": 0.5794542716508736,
              "min": 0.0,
              "max": 8.224981731095266,
              "p5": 0.22121190865710774,
              "p95": 1.5865266729904104,
              "count": 2574
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 61567077.16617986,
              "median": 233184.0,
              "min": 0.0,
              "max": 13968603216.0,
              "p5": 0.0,
              "p95": 239461326.92999986,
              "count": 2574
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.04278761289645461,
              "median": 0.027119306430072827,
              "min": 0.0005607359268088029,
              "max": 0.5173652694610777,
              "p5": 0.0014380738930340484,
              "p95": 0.1349675272478304,
              "count": 2574
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.004106812447093538,
              "median": 0.0008904739471300301,
              "min": 0.0,
              "max": 0.4542269048524885,
              "p5": 0.0,
              "p95": 0.016388330904557373,
              "count": 2553
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 7.248675400880523e-07,
              "median": 4.322802925070572e-08,
              "min": 0.0,
              "max": 4.7054394880481924e-05,
              "p5": 4.6644375118181316e-11,
              "p95": 3.663689956299134e-06,
              "count": 2574
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1090.8158508158508,
              "median": 20.0,
              "min": 0.0,
              "max": 80215.0,
              "p5": 0.0,
              "p95": 5982.399999999998,
              "count": 2574
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.2797460274596995,
              "median": 0.25490730185405186,
              "min": 0.09443840325452792,
              "max": 0.6244297904724057,
              "p5": 0.16429145797727915,
              "p95": 0.6069839052267972,
              "count": 37
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 218663189.87797657,
              "median": 10092770.0,
              "min": 0.0,
              "max": 2059379381.4,
              "p5": 0.0,
              "p95": 1337603895.2059977,
              "count": 37
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.01507506356441895,
              "median": 0.0035663249267646096,
              "min": 0.0005607359268088029,
              "max": 0.09008255826105138,
              "p5": 0.0011118527576467706,
              "p95": 0.06581412380609371,
              "count": 37
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.002820684005984255,
              "median": 0.0008908372698181988,
              "min": 0.0,
              "max": 0.03276855421560123,
              "p5": 0.0,
              "p95": 0.00707661322706304,
              "count": 37
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 2.339456392260563e-07,
              "median": 9.278298327427158e-10,
              "min": 4.889877300282989e-12,
              "max": 5.783021050196618e-06,
              "p5": 6.761428891481984e-12,
              "p95": 7.892771867024163e-07,
              "count": 37
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 2432.189189189189,
              "median": 650.0,
              "min": 0.0,
              "max": 14021.0,
              "p5": 0.0,
              "p95": 10833.199999999999,
              "count": 37
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 692370594.54,
              "median": 583362032.405,
              "min": 166240771.2,
              "max": 1752486756.43,
              "p5": 171913708.715,
              "p95": 1570975504.6444998,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 7484.375,
              "median": 7298.0,
              "min": 2869.0,
              "max": 14021.0,
              "p5": 3107.35,
              "p95": 12967.149999999998,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.22841330833839024,
              "median": 0.20807399947401423,
              "min": 0.14801713404907763,
              "max": 0.42848986869572453,
              "p5": 0.15707005696032267,
              "p95": 0.3676607998681547,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.00159177326230585,
              "median": 0.0017181570307216254,
              "min": 0.0005607359268088029,
              "max": 0.002227071298176431,
              "p5": 0.0007786796644311079,
              "p95": 0.0021888275772781397,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 1.1981766685702704,
              "median": 1.0481996328137035,
              "min": 1.0170094325034793,
              "max": 2.026202415424818,
              "p5": 1.0175430482691603,
              "p95": 1.7856037922483536,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 2.801488467917382e-11,
              "median": 1.3707380553444825e-11,
              "min": 4.889877300282989e-12,
              "max": 8.375469281169564e-11,
              "p5": 5.577293619558673e-12,
              "p95": 7.625866877196209e-11,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.00338651700161254,
              "median": 0.0031462543399377947,
              "min": 0.0005013671787606018,
              "max": 0.005967595370343816,
              "p5": 0.0011967034097716848,
              "p95": 0.005676552560159435,
              "count": 8
            }
          },
          "returns": {
            "window_days": 63,
            "n_obs": 63,
            "stock": 0.07763975155279534,
            "market": 0.058957371688082016,
            "sector": -0.004538716557025202,
            "peers": 0.03047842578860327,
            "vs_market": 0.018682379864713328,
            "vs_sector": 0.08217846810982055,
            "vs_peers": 0.047161325764192075
          }
        }
      },
      "6m": {
        "label": "6M",
        "window_days": 126,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 126,
          "score_pca": 96.15384615384616,
          "score_pca_percentile": 96.15384615384616,
          "rank_pca": 100,
          "total": 2574,
          "adv_notional_sgd": 1627838632.9,
          "adv_volume_shares": 14202896.0,
          "free_float_shares": 17175239862.0,
          "turnover_ratio": 0.0008269401833172488,
          "votes": 8275.0,
          "trades": 8275.0,
          "spread_pct": 0.0008858543349997607,
          "spread_ticks": 1.0728874489249653,
          "amihud": 6.230769372381062e-12,
          "volatility": 0.3156677031817904
        },
        "pca": {
          "valid": true,
          "window_days": 126,
          "variance_explained": 0.6222616891168559,
          "loadings": {
            "log_adv": 0.4988958277718601,
            "log_trades": 0.453806591249143,
            "log_turnover": 0.4522045244931541,
            "neg_spread": 0.4648569621315795,
            "neg_amihud": 0.3336568871676167,
            "neg_vol": 0.11512899375048713
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
          "peer_median_adv": 685270911.8299999,
          "peer_median_score_pca": 97.2027972027972,
          "peer_median_trades": 7457.0,
          "peer_median_volatility": 0.21083545047210506,
          "peer_median_spread_pct": 0.0017528867558196768,
          "peer_median_spread_ticks": 1.0512977728665711,
          "peer_median_amihud": 1.3006833869741483e-11,
          "peer_median_turnover_ratio": 0.003306652654652807,
          "target_vs_peer": {
            "score_pca_delta": -1.05,
            "adv_delta_pct": 137.5,
            "trades_delta_pct": 10.97,
            "volatility_delta_pct": -49.72,
            "spread_pct_delta_pct": 49.46,
            "spread_ticks_delta_pct": 2.05,
            "amihud_delta_pct": 52.1,
            "turnover_ratio_delta_pct": -74.99
          }
        },
        "peer_liquidity": [
          {
            "ticker": "5",
            "score_pca": 96.15384615384616,
            "rank_pca": 100,
            "adv": 1627838632.9,
            "trades": 8275.0,
            "volatility": 0.3156677031817904,
            "spread_pct": 0.0008858543349997607,
            "spread_ticks": 1.0728874489249653,
            "amihud": 6.230769372381062e-12,
            "turnover_ratio": 0.0008269401833172488,
            "is_target": true
          },
          {
            "ticker": "939",
            "score_pca": 98.79564879564879,
            "rank_pca": 32,
            "adv": 1786736479.64,
            "trades": 13603.5,
            "volatility": 0.2190459692754666,
            "spread_pct": 0.0012960115519021012,
            "spread_ticks": 1.0183670950986548,
            "amihud": 4.766860062189818e-12,
            "turnover_ratio": 0.0025068934787163487,
            "is_target": false
          },
          {
            "ticker": "1398",
            "score_pca": 98.0963480963481,
            "rank_pca": 50,
            "adv": 1235274864.9499998,
            "trades": 10912.5,
            "volatility": 0.2016971212833296,
            "spread_pct": 0.0016237999245897487,
            "spread_ticks": 1.0241912014662047,
            "amihud": 6.197000668583443e-12,
            "turnover_ratio": 0.0031451508523466704,
            "is_target": false
          },
          {
            "ticker": "3988",
            "score_pca": 97.51359751359752,
            "rank_pca": 65,
            "adv": 893243230.54,
            "trades": 9080.0,
            "volatility": 0.18290076513365097,
            "spread_pct": 0.002247486240731611,
            "spread_ticks": 1.011979468544335,
            "amihud": 7.256500594206154e-12,
            "turnover_ratio": 0.003468154456958944,
            "is_target": false
          },
          {
            "ticker": "3968",
            "score_pca": 97.86324786324786,
            "rank_pca": 56,
            "adv": 811034062.75,
            "trades": 7479.5,
            "volatility": 0.20262493166874349,
            "spread_pct": 0.0006476149172923417,
            "spread_ticks": 1.147767491992754,
            "amihud": 8.184507507376075e-12,
            "turnover_ratio": 0.0064772188022092,
            "is_target": false
          },
          {
            "ticker": "1288",
            "score_pca": 96.8919968919969,
            "rank_pca": 81,
            "adv": 559507760.91,
            "trades": 7434.5,
            "volatility": 0.22626857159000166,
            "spread_pct": 0.0018838097669364388,
            "spread_ticks": 1.0433900137638203,
            "amihud": 1.782916023210689e-11,
            "turnover_ratio": 0.0057827959551266985,
            "is_target": false
          },
          {
            "ticker": "2888",
            "score_pca": 83.76068376068376,
            "rank_pca": 419,
            "adv": 136641895.0,
            "trades": 2305.0,
            "volatility": 0.36123019153193703,
            "spread_pct": 0.0011750287953052388,
            "spread_ticks": 1.9829498535173626,
            "amihud": 8.920693364028488e-11,
            "turnover_ratio": 0.000418064120750285,
            "is_target": false
          },
          {
            "ticker": "998",
            "score_pca": 92.15229215229215,
            "rank_pca": 203,
            "adv": 171463091.755,
            "trades": 4527.5,
            "volatility": 0.2288020022601143,
            "spread_pct": 0.0018819735870496046,
            "spread_ticks": 1.3578442224379321,
            "amihud": 5.1487471525277055e-11,
            "turnover_ratio": 0.0025732994373414025,
            "is_target": false
          },
          {
            "ticker": "1658",
            "score_pca": 91.64724164724166,
            "rank_pca": 216,
            "adv": 157335704.01,
            "trades": 3173.0,
            "volatility": 0.19405701794861685,
            "spread_pct": 0.002043947989236165,
            "spread_ticks": 1.0592055319693219,
            "amihud": 3.9525928810089206e-11,
            "turnover_ratio": 0.004181570502346878,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Banks",
          "sector_count": 37,
          "market_count": 2574,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.7408307343871665,
              "median": 0.5978604855525683,
              "min": 0.0,
              "max": 33.69234598783136,
              "p5": 0.22381753945873362,
              "p95": 1.5543264436522564,
              "count": 2574
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 56586844.79622647,
              "median": 219880.125,
              "min": 0.0,
              "max": 11530530000.0,
              "p5": 0.0,
              "p95": 214466108.9999997,
              "count": 2574
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.04194981587853588,
              "median": 0.026644836960384666,
              "min": 0.000558678699550006,
              "max": 0.49098715795419084,
              "p5": 0.0013906959312210716,
              "p95": 0.1338525179693808,
              "count": 2574
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.003668552458861562,
              "median": 0.0008649390509314946,
              "min": 0.0,
              "max": 0.18328433576591843,
              "p5": 0.0,
              "p95": 0.014553740756509973,
              "count": 2553
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 6.470117342488694e-07,
              "median": 4.630396367913572e-08,
              "min": 0.0,
              "max": 4.7054394880481924e-05,
              "p5": 5.0443531668434034e-11,
              "p95": 3.6564790403449536e-06,
              "count": 2574
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1038.340909090909,
              "median": 21.0,
              "min": 0.0,
              "max": 93269.5,
              "p5": 0.0,
              "p95": 5735.124999999995,
              "count": 2574
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.26814082446884135,
              "median": 0.2504917497795204,
              "min": 0.09879154616446219,
              "max": 0.5437307639337519,
              "p5": 0.17709635538801421,
              "p95": 0.47270456430364144,
              "count": 37
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 213208192.44909042,
              "median": 10829815.0,
              "min": 0.0,
              "max": 1786736479.64,
              "p5": 0.0,
              "p95": 1313787618.5399983,
              "count": 37
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.013981279592752145,
              "median": 0.003436829759153677,
              "min": 0.0006476149172923417,
              "max": 0.0721015310844332,
              "p5": 0.0011171939032441432,
              "p95": 0.06431200666284813,
              "count": 37
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0027881839976659217,
              "median": 0.0009009160383810988,
              "min": 0.0,
              "max": 0.03292537845906206,
              "p5": 0.0,
              "p95": 0.00685561076116691,
              "count": 37
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 9.67245315415943e-08,
              "median": 8.654394066579286e-10,
              "min": 4.766860062189818e-12,
              "max": 1.447425445567088e-06,
              "p5": 6.224015631621538e-12,
              "p95": 4.936251912760149e-07,
              "count": 37
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 2348.3783783783783,
              "median": 655.5,
              "min": 0.0,
              "max": 13603.5,
              "p5": 0.0,
              "p95": 9446.499999999993,
              "count": 37
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 718904636.194375,
              "median": 685270911.8299999,
              "min": 136641895.0,
              "max": 1786736479.64,
              "p5": 143884728.1535,
              "p95": 1593724914.4984996,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 7314.4375,
              "median": 7457.0,
              "min": 2305.0,
              "max": 13603.5,
              "p5": 2608.8,
              "p95": 12661.649999999998,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.22707832133648256,
              "median": 0.21083545047210506,
              "min": 0.18290076513365097,
              "max": 0.36123019153193703,
              "p5": 0.18680545361888903,
              "p95": 0.314880325286799,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.0015999590966304063,
              "median": 0.0017528867558196768,
              "min": 0.0006476149172923417,
              "max": 0.002247486240731611,
              "p5": 0.0008322097745968557,
              "p95": 0.002176247852708205,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 1.2057118598487984,
              "median": 1.0512977728665711,
              "min": 1.011979468544335,
              "max": 1.9829498535173626,
              "p5": 1.014215137838347,
              "p95": 1.7641628826395617,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 2.8056795380014188e-11,
              "median": 1.3006833869741483e-11,
              "min": 4.766860062189818e-12,
              "max": 8.920693364028488e-11,
              "p5": 5.267409274427587e-12,
              "p95": 7.600512190003213e-11,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0035691434507245535,
              "median": 0.003306652654652807,
              "min": 0.000418064120750285,
              "max": 0.0064772188022092,
              "p5": 0.0011491543960384073,
              "p95": 0.006234170805730324,
              "count": 8
            }
          },
          "returns": {
            "window_days": 126,
            "n_obs": 126,
            "stock": 0.27808471454880324,
            "market": 0.10999472576257396,
            "sector": -0.0180253157184308,
            "peers": 0.10989938868985183,
            "vs_market": 0.16808998878622927,
            "vs_sector": 0.29611003026723404,
            "vs_peers": 0.1681853258589514
          }
        }
      }
    },
    "period_insights": {
      "1d": {
        "liquidity": "Near-term trading looks orderly, but buy-side access is thinner because bid depth is only 0.62x of ask depth despite a 1 tick spread.",
        "market_comparison": "The stock fell 0.6% on the day compared with a 0.1% gain for peers, which matters because weaker relative price action can make immediate liquidity feel less supportive."
      },
      "30d": {
        "liquidity": "Monthly tradability looks solid overall, with a 1M liquidity score of 97.0, but the lighter bid book suggests access can be less even on the buy side.",
        "market_comparison": "The stock rose 2.1% over 1M, ahead of the market at -0.8% but behind peers at 6.3%, which matters because the return backdrop is firm without clearly leading the group."
      },
      "3m": {
        "liquidity": "Three-month tradability looks steady, with a 3M liquidity score of 97.1 indicating access has broadly held up.",
        "market_comparison": "The stock gained 7.8% over 3M compared with 3.0% for peers, which matters because stronger relative performance can help keep trading interest supported."
      },
      "6m": {
        "liquidity": "Six-month liquidity is average for its size, with a score of 96.2 sitting 1.0 point below the peer median of 97.2.",
        "market_comparison": "Return 27.8% vs peers 11.0%."
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
          "median": 0.6452592558056204,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "64.5%",
          "display_range": null,
          "display_text": "64.5%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "share_pct",
          "value_pct": 64.5,
          "plain_english": "Market explains about 64.5% of price moves in the current state."
        },
        "sector_share": {
          "median": 0.27134031651771173,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "27.1%",
          "display_range": null,
          "display_text": "27.1%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "share_pct",
          "value_pct": 27.1,
          "plain_english": "Sector explains about 27.1% of price moves in the current state."
        },
        "company_share": {
          "median": 0.08340042767666775,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "8.3%",
          "display_range": null,
          "display_text": "8.3%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "share_pct",
          "value_pct": 8.3,
          "plain_english": "Company-specific explains about 8.3% of price moves in the current state."
        },
        "basis": "current_state"
      },
      "current_sensitivities": {
        "beta_market": {
          "median": 2.183345691965391,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "2.18",
          "display_range": null,
          "display_text": "2.18",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "beta",
          "strength_label": "High",
          "plain_english": "High market link: a 1% market move has lined up with about a 2.18% stock move in the same direction in this state.",
          "value_num": 2.18
        },
        "beta_stock_lag": {
          "median": 0.22195989853175854,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "0.22",
          "display_range": null,
          "display_text": "0.22",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "lag_beta",
          "value_num": 0.22
        },
        "beta_sector": {
          "median": -2.634880634056759,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "-2.63",
          "display_range": null,
          "display_text": "-2.63",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "beta",
          "strength_label": "High",
          "plain_english": "High sector link: a 1% sector move has lined up with about a 2.63% stock move in the opposite direction in this state.",
          "value_num": -2.63
        },
        "beta_market_lag": {
          "median": -1.1697239683853797,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "-1.17",
          "display_range": null,
          "display_text": "-1.17",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "lag_beta",
          "value_num": -1.17
        },
        "beta_sector_lag": {
          "median": 1.9452581264871691,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "1.95",
          "display_range": null,
          "display_text": "1.95",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "lag_beta",
          "value_num": 1.95
        },
        "posterior_source": null,
        "intervals_collapsed": false,
        "confidence_label": "High, limited history",
        "confidence_note": "Based on 251 trading days relative to the 252-day target."
      },
      "rolling_windows": {},
      "monthly_history": [
        {
          "month_key": "2025-03",
          "month_label": "March 2025",
          "month_short_label": "Mar",
          "period_label": "2025-03-25 to 2025-03-31",
          "n_obs": 5,
          "partial_month": true,
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.4788569526051969,
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
              "median": 0.4788569526051969,
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
              "median": 0.2583158874503245,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "25.8%",
              "display_range": null,
              "display_text": "25.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
              "kind": "share_pct",
              "value_pct": 25.8,
              "plain_english": "Sector explains about 25.8% of price moves in the current state."
            },
            "company_share": {
              "median": 0.26282715994447864,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "26.3%",
              "display_range": null,
              "display_text": "26.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
              "kind": "share_pct",
              "value_pct": 26.3,
              "plain_english": "Company-specific explains about 26.3% of price moves in the current state."
            }
          },
          "summary": "Mar: Mostly market-driven, though based on only 5 trading days."
        },
        {
          "month_key": "2025-04",
          "month_label": "April 2025",
          "month_short_label": "Apr",
          "period_label": "2025-04-01 to 2025-04-30",
          "n_obs": 19,
          "partial_month": false,
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.5371622350230987,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "53.7%",
            "display_range": null,
            "display_text": "53.7%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
            "kind": "share_pct",
            "value_pct": 53.7,
            "plain_english": "Market explains about 53.7% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.5371622350230987,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "53.7%",
              "display_range": null,
              "display_text": "53.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
              "kind": "share_pct",
              "value_pct": 53.7,
              "plain_english": "Market explains about 53.7% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.35837323178993846,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "35.8%",
              "display_range": null,
              "display_text": "35.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
              "kind": "share_pct",
              "value_pct": 35.8,
              "plain_english": "Sector explains about 35.8% of price moves in the current state."
            },
            "company_share": {
              "median": 0.1044645331869628,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "10.4%",
              "display_range": null,
              "display_text": "10.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
              "kind": "share_pct",
              "value_pct": 10.4,
              "plain_english": "Company-specific explains about 10.4% of price moves in the current state."
            }
          },
          "summary": "Apr: Mostly market-driven."
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
            "median": 0.4904235990085711,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "49.0%",
            "display_range": null,
            "display_text": "49.0%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
            "kind": "share_pct",
            "value_pct": 49.0,
            "plain_english": "Company-specific explains about 49.0% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.23054846342721066,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "23.1%",
              "display_range": null,
              "display_text": "23.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 23.1,
              "plain_english": "Market explains about 23.1% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.27902793756421823,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "27.9%",
              "display_range": null,
              "display_text": "27.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 27.9,
              "plain_english": "Sector explains about 27.9% of price moves in the current state."
            },
            "company_share": {
              "median": 0.4904235990085711,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "49.0%",
              "display_range": null,
              "display_text": "49.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 49.0,
              "plain_english": "Company-specific explains about 49.0% of price moves in the current state."
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
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.4845051068427767,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "48.5%",
            "display_range": null,
            "display_text": "48.5%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
            "kind": "share_pct",
            "value_pct": 48.5,
            "plain_english": "Market explains about 48.5% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.4845051068427767,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "48.5%",
              "display_range": null,
              "display_text": "48.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 48.5,
              "plain_english": "Market explains about 48.5% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.1595510638621218,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "16.0%",
              "display_range": null,
              "display_text": "16.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 16.0,
              "plain_english": "Sector explains about 16.0% of price moves in the current state."
            },
            "company_share": {
              "median": 0.3559438292951015,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "35.6%",
              "display_range": null,
              "display_text": "35.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 35.6,
              "plain_english": "Company-specific explains about 35.6% of price moves in the current state."
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
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.3977672378261076,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "39.8%",
            "display_range": null,
            "display_text": "39.8%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
            "kind": "share_pct",
            "value_pct": 39.8,
            "plain_english": "Market explains about 39.8% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.3977672378261076,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "39.8%",
              "display_range": null,
              "display_text": "39.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 39.8,
              "plain_english": "Market explains about 39.8% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.21594671914711974,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "21.6%",
              "display_range": null,
              "display_text": "21.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 21.6,
              "plain_english": "Sector explains about 21.6% of price moves in the current state."
            },
            "company_share": {
              "median": 0.38628604302677266,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "38.6%",
              "display_range": null,
              "display_text": "38.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 38.6,
              "plain_english": "Company-specific explains about 38.6% of price moves in the current state."
            }
          },
          "summary": "Jul: More mixed, though market-driven still has the largest share."
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
            "median": 0.3921365385728703,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "39.2%",
            "display_range": null,
            "display_text": "39.2%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
            "kind": "share_pct",
            "value_pct": 39.2,
            "plain_english": "Company-specific explains about 39.2% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.2244445945323739,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "22.4%",
              "display_range": null,
              "display_text": "22.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 22.4,
              "plain_english": "Market explains about 22.4% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.3834188668947559,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "38.3%",
              "display_range": null,
              "display_text": "38.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 38.3,
              "plain_english": "Sector explains about 38.3% of price moves in the current state."
            },
            "company_share": {
              "median": 0.3921365385728703,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "39.2%",
              "display_range": null,
              "display_text": "39.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 39.2,
              "plain_english": "Company-specific explains about 39.2% of price moves in the current state."
            }
          },
          "summary": "Aug: More mixed, though company-driven still has the largest share."
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
            "median": 0.5253586260514308,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "52.5%",
            "display_range": null,
            "display_text": "52.5%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
            "kind": "share_pct",
            "value_pct": 52.5,
            "plain_english": "Company-specific explains about 52.5% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.09337081010549955,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "9.3%",
              "display_range": null,
              "display_text": "9.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 9.3,
              "plain_english": "Market explains about 9.3% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.38127056384306957,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "38.1%",
              "display_range": null,
              "display_text": "38.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 38.1,
              "plain_english": "Sector explains about 38.1% of price moves in the current state."
            },
            "company_share": {
              "median": 0.5253586260514308,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "52.5%",
              "display_range": null,
              "display_text": "52.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 52.5,
              "plain_english": "Company-specific explains about 52.5% of price moves in the current state."
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
            "median": 0.4631684829115581,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "46.3%",
            "display_range": null,
            "display_text": "46.3%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
            "kind": "share_pct",
            "value_pct": 46.3,
            "plain_english": "Company-specific explains about 46.3% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.268538231040846,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "26.9%",
              "display_range": null,
              "display_text": "26.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 26.9,
              "plain_english": "Market explains about 26.9% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.26829328604759584,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "26.8%",
              "display_range": null,
              "display_text": "26.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 26.8,
              "plain_english": "Sector explains about 26.8% of price moves in the current state."
            },
            "company_share": {
              "median": 0.4631684829115581,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "46.3%",
              "display_range": null,
              "display_text": "46.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 46.3,
              "plain_english": "Company-specific explains about 46.3% of price moves in the current state."
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
            "median": 0.574591883203026,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "57.5%",
            "display_range": null,
            "display_text": "57.5%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
            "kind": "share_pct",
            "value_pct": 57.5,
            "plain_english": "Market explains about 57.5% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.574591883203026,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "57.5%",
              "display_range": null,
              "display_text": "57.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 57.5,
              "plain_english": "Market explains about 57.5% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.14531447839558084,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "14.5%",
              "display_range": null,
              "display_text": "14.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 14.5,
              "plain_english": "Sector explains about 14.5% of price moves in the current state."
            },
            "company_share": {
              "median": 0.2800936384013932,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "28.0%",
              "display_range": null,
              "display_text": "28.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 28.0,
              "plain_english": "Company-specific explains about 28.0% of price moves in the current state."
            }
          },
          "summary": "Nov: Mostly market-driven."
        },
        {
          "month_key": "2025-12",
          "month_label": "December 2025",
          "month_short_label": "Dec",
          "period_label": "2025-12-01 to 2025-12-31",
          "n_obs": 15,
          "partial_month": false,
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.5045633134315194,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "50.5%",
            "display_range": null,
            "display_text": "50.5%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
            "kind": "share_pct",
            "value_pct": 50.5,
            "plain_english": "Market explains about 50.5% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.5045633134315194,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "50.5%",
              "display_range": null,
              "display_text": "50.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
              "kind": "share_pct",
              "value_pct": 50.5,
              "plain_english": "Market explains about 50.5% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.28469741798981646,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "28.5%",
              "display_range": null,
              "display_text": "28.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
              "kind": "share_pct",
              "value_pct": 28.5,
              "plain_english": "Sector explains about 28.5% of price moves in the current state."
            },
            "company_share": {
              "median": 0.21073926857866407,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "21.1%",
              "display_range": null,
              "display_text": "21.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
              "kind": "share_pct",
              "value_pct": 21.1,
              "plain_english": "Company-specific explains about 21.1% of price moves in the current state."
            }
          },
          "summary": "Dec: Mostly market-driven."
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
            "median": 0.3910129558838437,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "39.1%",
            "display_range": null,
            "display_text": "39.1%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
            "kind": "share_pct",
            "value_pct": 39.1,
            "plain_english": "Company-specific explains about 39.1% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.3510102540288183,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "35.1%",
              "display_range": null,
              "display_text": "35.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 35.1,
              "plain_english": "Market explains about 35.1% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.25797679008733787,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "25.8%",
              "display_range": null,
              "display_text": "25.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 25.8,
              "plain_english": "Sector explains about 25.8% of price moves in the current state."
            },
            "company_share": {
              "median": 0.3910129558838437,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "39.1%",
              "display_range": null,
              "display_text": "39.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 39.1,
              "plain_english": "Company-specific explains about 39.1% of price moves in the current state."
            }
          },
          "summary": "Jan: More mixed, though company-driven still has the largest share."
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
            "median": 0.3874187265128073,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "38.7%",
            "display_range": null,
            "display_text": "38.7%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
            "kind": "share_pct",
            "value_pct": 38.7,
            "plain_english": "Company-specific explains about 38.7% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.34870035632110014,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "34.9%",
              "display_range": null,
              "display_text": "34.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
              "kind": "share_pct",
              "value_pct": 34.9,
              "plain_english": "Market explains about 34.9% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.26388091716609247,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "26.4%",
              "display_range": null,
              "display_text": "26.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
              "kind": "share_pct",
              "value_pct": 26.4,
              "plain_english": "Sector explains about 26.4% of price moves in the current state."
            },
            "company_share": {
              "median": 0.3874187265128073,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "38.7%",
              "display_range": null,
              "display_text": "38.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
              "kind": "share_pct",
              "value_pct": 38.7,
              "plain_english": "Company-specific explains about 38.7% of price moves in the current state."
            }
          },
          "summary": "Feb: More mixed, though company-driven still has the largest share."
        },
        {
          "month_key": "2026-03",
          "month_label": "March 2026",
          "month_short_label": "Mar",
          "period_label": "2026-03-02 to 2026-03-31",
          "n_obs": 22,
          "partial_month": false,
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.5104035215877255,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "51.0%",
            "display_range": null,
            "display_text": "51.0%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
            "kind": "share_pct",
            "value_pct": 51.0,
            "plain_english": "Market explains about 51.0% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.5104035215877255,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "51.0%",
              "display_range": null,
              "display_text": "51.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 51.0,
              "plain_english": "Market explains about 51.0% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.14825069273845679,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "14.8%",
              "display_range": null,
              "display_text": "14.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 14.8,
              "plain_english": "Sector explains about 14.8% of price moves in the current state."
            },
            "company_share": {
              "median": 0.3413457856738176,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "34.1%",
              "display_range": null,
              "display_text": "34.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 34.1,
              "plain_english": "Company-specific explains about 34.1% of price moves in the current state."
            }
          },
          "summary": "Mar: Mostly market-driven."
        },
        {
          "month_key": "2026-04",
          "month_label": "April 2026",
          "month_short_label": "Apr",
          "period_label": "2026-04-01 to 2026-04-13",
          "n_obs": 6,
          "partial_month": false,
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.6296340016016293,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "63.0%",
            "display_range": null,
            "display_text": "63.0%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 6 trading days.",
            "kind": "share_pct",
            "value_pct": 63.0,
            "plain_english": "Market explains about 63.0% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.6296340016016293,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "63.0%",
              "display_range": null,
              "display_text": "63.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 6 trading days.",
              "kind": "share_pct",
              "value_pct": 63.0,
              "plain_english": "Market explains about 63.0% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.2832808371767297,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "28.3%",
              "display_range": null,
              "display_text": "28.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 6 trading days.",
              "kind": "share_pct",
              "value_pct": 28.3,
              "plain_english": "Sector explains about 28.3% of price moves in the current state."
            },
            "company_share": {
              "median": 0.08708516122164102,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "8.7%",
              "display_range": null,
              "display_text": "8.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 6 trading days.",
              "kind": "share_pct",
              "value_pct": 8.7,
              "plain_english": "Company-specific explains about 8.7% of price moves in the current state."
            }
          },
          "summary": "Apr: Still clearly market-driven, though based on only 6 trading days."
        }
      ],
      "regimes": [
        {
          "id": 0,
          "label": "Low Volatility",
          "pct_time": 0.5020080321285141,
          "expected_duration_days": 12.5,
          "current_probability": 0.0,
          "n_days_effective": 125.0,
          "volatility": {
            "median": 0.008979452745803891,
            "low": 0.008979452745803891,
            "high": 0.008979452745803891
          },
          "volatility_label": "Low Volatility",
          "current_probability_display": 0.0
        },
        {
          "id": 1,
          "label": "High Volatility",
          "pct_time": 0.4979919678714859,
          "expected_duration_days": 11.272727272727273,
          "current_probability": 1.0,
          "n_days_effective": 124.0,
          "volatility": {
            "median": 0.02272924526073619,
            "low": 0.02272924526073619,
            "high": 0.02272924526073619
          },
          "volatility_label": "High Volatility",
          "current_probability_display": null
        }
      ],
      "transitions": {
        "mean": [
          [
            0.92,
            0.08
          ],
          [
            0.08130081300813008,
            0.9186991869918699
          ]
        ],
        "low": [],
        "high": [],
        "counts": [
          [
            115.0,
            10.0
          ],
          [
            10.0,
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
        "market_link_display": "2.18",
        "sector_link_display": "-2.63",
        "market_link_explainer": "High market link. A 1% market move has lined up with about a 2.18% stock move in the same direction in this state. This is a point estimate from 251 trading days.",
        "sector_link_explainer": "High sector link. A 1% sector move has lined up with about a 2.63% stock move in the opposite direction in this state. This is a point estimate from 251 trading days.",
        "stock_persistence_display": "0.22",
        "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
        "history_limited_note": "Read is based on 251 trading days versus the 252-day target."
      },
      "current_summary": {
        "regime_label": "High Volatility",
        "dominant_driver": "market",
        "dominant_driver_label": "Market",
        "driver_share_pct": 64.5,
        "driver_share_display": "64.5%",
        "confidence_label": "High, limited history",
        "confidence_pct": 100.0,
        "display_confidence_pct": null,
        "confidence_note": "Based on 251 trading days relative to the 252-day target.",
        "history_days": 251,
        "history_limited": true,
        "volatility_label": "High Volatility",
        "lead_signal_text": "No stable lead signal.",
        "state_term": "state",
        "stay_probability": 0.9186991869918699,
        "effective_days": 124.0,
        "persistence_note": "This state looks more persistent, with a typical run length of about 11.3 days.",
        "expected_duration_days": 11.3
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
          "expected_duration_days": 12.5,
          "current_probability": 0.0,
          "n_days_effective": 125.0,
          "volatility": {
            "median": 0.008979452745803891,
            "low": 0.008979452745803891,
            "high": 0.008979452745803891
          },
          "volatility_label": "Low Volatility"
        },
        {
          "id": 1,
          "label": "High Volatility",
          "pct_time": 0.4979919678714859,
          "expected_duration_days": 11.272727272727273,
          "current_probability": 1.0,
          "n_days_effective": 124.0,
          "volatility": {
            "median": 0.02272924526073619,
            "low": 0.02272924526073619,
            "high": 0.02272924526073619
          },
          "volatility_label": "High Volatility"
        }
      ],
      "transitions": [
        [
          0.92,
          0.08
        ],
        [
          0.08130081300813008,
          0.9186991869918699
        ]
      ],
      "transition_intervals": {
        "mean": [
          [
            0.92,
            0.08
          ],
          [
            0.08130081300813008,
            0.9186991869918699
          ]
        ],
        "low": [],
        "high": [],
        "counts": [
          [
            115.0,
            10.0
          ],
          [
            10.0,
            113.0
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
        "text": "Liquidity score: 96.2 — Strong",
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
        "text": "Execution: bid-light",
        "bg": "bg-amber-500/20",
        "textColor": "text-amber-400"
      },
      "intraday": {
        "text": "Trading Activity",
        "bg": "bg-emerald-500/20",
        "textColor": "text-emerald-400"
      },
      "short": {
        "text": "Short interest: N/A",
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
    "liq_subtitle": "Structural liquidity sits close to peers for the company’s size, but lighter bid depth makes near-term buying access look less robust.",
    "market_comparison_title": "How You Compare to the Market",
    "market_comparison_subtitle": "Context relative to market, sector, and peer medians.",
    "perf_title": "Stock Performance",
    "perf_subtitle": "Returns are ahead of the market but behind peers, with the stock up 2.1% over one month.",
    "perf_insight": "Performance is strong relative to comparison groups. Recent price performance is stronger than the main comparison groups, so the tape has a firmer return backdrop than peers. Recent trend context is too limited to say whether access has changed from the 1M baseline.",
    "drivers_title": "What Moves Your Stock Price?",
    "drivers_subtitle": "The tape is being driven mainly by broader market moves, with market factors accounting for 64.5% of activity.",
    "drivers_strip": [
      {
        "title": "Current Driver (Last 5 Days)",
        "text": "Over the last 5 trading days, moves are mainly market-driven, accounting for about 64.5% of price changes. Other influences are secto%, and company-specific 8.3%."
      },
      {
        "title": "Driver Mix",
        "text": "Based on the last 5 trading days, current mix is market 64.5%, secto%, and company-specific 8.3%."
      },
      {
        "title": "Monthly Trend",
        "text": "The driver mix has shifted from company-driven to market-driven over Feb to Apr."
      }
    ],
    "drivers_pie_title": "Current Driver Mix (Last 5 Days)",
    "drivers_pie_note": "Based on the last 5 trading days, current split is market 64.5%, secto%, and company-specific 8.3%.",
    "lead_lag_title": "",
    "lead_lag_note": "",
    "rolling_title": "Monthly Driver Shift",
    "rolling_latest_label": "Latest: {period}",
    "rolling_note": "Each bar shows the monthly split between market-, sector-, and company-driven moves.",
    "drivers_bottom_line": "Current driver: Market at 64.5%. Broader market or sector moves still explain a meaningful part of the tape, so the stock is not trading on company news alone. Recent trend context is too limited to say whether access has changed from the 1M baseline.",
    "drivers_wtd_title": "Key Reads",
    "drivers_wtd_list": [
      "Main driver now: market factors are leading, accounting for 64.5% of price moves.",
      "Monthly change: the pattern has moved from more mixed in February to mostly market-driven in March and still market-driven in April."
    ],
    "regime_title": "Market State",
    "regime_subtitle": "The market backdrop is supportive on returns, but trading conditions still look more externally driven than stock-specific.",
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
    "exec_check_subtitle": "Combines the final continuous-session displayed book before close, trade-size stress tests based on Apr 14, 2025 to Apr 13, 2026 (238 trading days • 2,246,553 trades), large sell-side orders observed today, and intraday spread/depth during the continuous trading session.",
    "order_book_title": "Order Book Depth (Available Liquidity)",
    "order_book_note": "Depth shown is based on top 10 bid and top 10 ask levels.",
    "peer_capacity_title": "Peer Capacity Context",
    "peer_capacity_note": "Immediate buy-side depth is lighter than the monthly baseline, so day-to-day access may feel weaker than the 1M score",
    "impact_summary_title": "Estimated Price Impact (Sell Orders)",
    "impact_summary_subtitle": "Approximate price impact (%) for sell orders.",
    "exec_check_insight": "The clearest execution watchpoint is thinner buy-side depth, with top-10 bid depth at 0.62x of ask depth while the spread remains 1 tick. That matters because buying access can be less reliable even when headline spread looks stable.",
    "trader_composition_title": "Who's Trading Your Stock?",
    "trader_composition_subtitle": "Shows whether trading is mostly retail-like, institution-like, mixed, or unclassified.",
    "trader_retail_threshold": "Retail-like flow",
    "trader_mixed_threshold": "Mixed flow",
    "trader_instit_threshold": "Institution-like flow",
    "peer_trader_title": "Peer Comparison: Trader Mix",
    "peer_trader_subtitle": "How the trader mix compares with peers.",
    "price_moving_title": "Which Trades Move the Price?",
    "price_moving_subtitle": "Price-moving trades are 19.7% of total trades.",
    "intraday_title": "When Does Trading Happen?",
    "intraday_subtitle": "Displayed liquidity is currently more notable for book imbalance than for spread pressure.",
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
    "intraday_insight": "The order book is skewed to the sell side, with top-10 bid depth at 0.62x of ask depth while the spread remains 1 tick. That matters because execution may still feel less supported for buyers even without an obvious spread penalty.",
    "short_title": "Short Selling & Lending",
    "short_subtitle": "The current trading picture is better explained by market direction and displayed depth than by short activity.",
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
    "exec_subtitle": "Liquidity looks mixed for the company’s size, and the displayed book is less supportive on the bid side than the headline score",
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
        "value": "96.2/100",
        "sub": "Peer median 97.2 (-1.0 pts)",
        "interp": {
          "text": "Strong",
          "cls": "interpretation-good",
          "icon": "◆"
        }
      },
      {
        "title": "Volume vs Peers",
        "value": "HK$1.6B",
        "sub": "Peer median HK$685.3M",
        "interp": {
          "text": "Strong",
          "cls": "interpretation-good",
          "icon": "◆"
        }
      },
      {
        "title": "Spread",
        "value": "0.09%",
        "sub": "1.07 ticks; peers 0.18%",
        "interp": {
          "text": "Tighter",
          "cls": "interpretation-good",
          "icon": "◆"
        }
      }
    ],
    "liq_insight": "6M liquidity is strong: score 96.2 vs peer median 97.2 (-1.0 pts). Recent trend context is too limited to say whether access has changed from the 1M baseline.",
    "perf_badge": "Context",
    "exec_check_tiles": [
      {
        "title": "Mid Price",
        "value": "138.850",
        "note": "final continuous-session displayed book before close",
        "color": "text-white"
      },
      {
        "title": "Spread",
        "value": "0.07%",
        "note": "1.00 ticks",
        "color": "text-slate-300"
      },
      {
        "title": "Depth",
        "value": "0.62x",
        "note": "Bid depth / ask depth on displayed top-10 levels",
        "color": "text-slate-300"
      }
    ],
    "impact_summary_cards": [
      {
        "title": "~S$100K sell",
        "text": "Estimated impact ~-0.04% with 100.0% fill.",
        "cls": "ok"
      },
      {
        "title": "S$1.0M sell",
        "text": "Estimated impact ~-0.04% with 100.0% fill.",
        "cls": "warn"
      },
      {
        "title": "S$2.5M sell",
        "text": "Estimated impact ~-0.04% with 100.0% fill.",
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
        "value": "96",
        "suffix": "/100",
        "bar_pct": 96,
        "color_value": "text-emerald-400",
        "color_bar": "bg-emerald-500",
        "subtext": "Rank 100/2574",
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
        "value": "0.09",
        "suffix": "%",
        "bar_pct": 1,
        "color_value": "text-emerald-400",
        "color_bar": "bg-emerald-500",
        "subtext": "0.09% • 1.07 ticks vs peers 0.18%",
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
        "value": "1.6B",
        "value_prefix": "HK$",
        "suffix": "",
        "bar_pct": 60,
        "color_value": "text-emerald-400",
        "color_bar": "bg-emerald-500",
        "subtext": "Peer median HK$685.3M",
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
        "value": "64.5",
        "suffix": "market",
        "bar_pct": 65,
        "color_value": "text-amber-400",
        "color_bar": "bg-amber-500",
        "subtext": "Secto% • Company 8.3%",
        "interpretation": {
          "text": "Market",
          "cls": "interpretation-neutral",
          "icon": "◆"
        }
      }
    ],
    "exec_takeaways": [
      "Liquidity is mixed for the company’s size, with a 6M liquidity score of 96.2 compared with a peer median of 97.2. That leaves access close to peer levels rather than clearly strong or weak.",
      "The clearest near-term watchpoint is thinner buy-side depth, with top-10 bid depth at 0.62x of ask depth and the spread still at 1",
      "Peer standing remains broadly intact, as the liquidity score sits only 1.0 point below the peer median. That matters because the stock screens near peer norms overall even with a weaker bid-side profile."
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
      "overall": "6M liquidity is strong: score 96.2 vs peer median 97.2 (-1.0 pts). Recent trend context is too limited to say whether access has changed from the 1M baseline.",
      "strengths": [
        "6M score 96.2 vs peer median 97.2 (-1.0 pts)."
      ],
      "concerns": [],
      "peer_context": "Primary-period score gap vs peers: -1.0 pts."
    },
    "market_comparison": {
      "returns": {
        "insight": "6M return is 27.8%, better than market, sector, and peers, which suggests stronger price performance than comparable names.",
        "vs_market": "Better than market: 27.8% vs market 11.0%.",
        "vs_sector": "Better than sector: 27.8% vs sector -1.8%.",
        "vs_peers": "Better than peers: 27.8% vs peers 11.0%."
      },
      "adv": {
        "insight": "ADV is HK$1.6B, better than market, sector, and peers, which supports stronger day-to-day trading size than comparable names.",
        "vs_market": "Better than market: HK$1.6B vs market HK$219.9K.",
        "vs_sector": "Better than sector: HK$1.6B vs sector HK$10.8M.",
        "vs_peers": "Better than peers: HK$1.6B vs peers HK$685.3M."
      },
      "spread": {
        "insight": "Spread is 0.09%, better than market, sector, and peers, which keeps trading costs more competitive than comparable names.",
        "vs_market": "Better than market: 0.09% vs market 2.66%.",
        "vs_sector": "Better than sector: 0.09% vs sector 0.34%.",
        "vs_peers": "Better than peers: 0.09% vs peers 0.18%."
      },
      "turnover_ratio": {
        "insight": "Turnover ratio is 0.08%, worse than peers, which shows a lighter free-float turnover profile than comparable names.",
        "vs_market": "In line with market: 0.08% vs market 0.09%.",
        "vs_sector": "In line with sector: 0.08% vs sector 0.09%.",
        "vs_peers": "Worse than peers: 0.08% vs peers 0.33%."
      },
      "volatility": {
        "insight": "Volatility is 31.57%, better than market, but worse than sector and peers, which shows price variability is mixed across comparison groups.",
        "vs_market": "Better than market: 31.57% vs market 59.79%.",
        "vs_sector": "Worse than sector: 31.57% vs secto%.",
        "vs_peers": "Worse than peers: 31.57% vs peers 21.08%."
      },
      "trades": {
        "insight": "Trades is 8275, better than market, sector, and peers, which supports more fully reflective of day-to-day access day-to-day activity than comparable names.",
        "vs_market": "Better than market: 8275 vs market 21.",
        "vs_sector": "Better than sector: 8275 vs sector 656.",
        "vs_peers": "Better than peers: 8275 vs peers 7457."
      },
      "amihud": {
        "insight": "Price impact is 6.23e-12, better than market, sector, and peers, which suggests trades move price less than comparable names.",
        "vs_market": "Better than market: 6.23e-12 vs market 4.63e-08.",
        "vs_sector": "Better than sector: 6.23e-12 vs sector 8.65e-10.",
        "vs_peers": "Better than peers: 6.23e-12 vs peers 1.30e-11."
      }
    },
    "performance": {
      "overall": "Performance is strong relative to comparison groups. Recent price performance is stronger than the main comparison groups, so the tape has a firmer return backdrop than peers. Recent trend context is too limited to say whether access has changed from the 1M baseline.",
      "conclusion": "Performance is strong relative to comparison groups."
    },
    "drivers": {
      "overall": "The stock is currently being driven mainly by the market, with 64.5% of recent price moves explained by broader conditions. That matters because day-to-day trading is being shaped more by the external backdrop than by stock-specific news.",
      "beta": "Based on the last 5 trading days, current mix is market 64.5%, secto%, and company-specific 8.3%.",
      "rolling_change": "The driver mix has become more market-led over the last few months, shifting from a more mixed pattern in February to mostly market-driven in March and still clearly market-driven in April. That points to a pattern that is more persistent than a one-day swing, even if the latest month is still early."
    },
    "regime": {
      "overall": "High volatility is shaping the tape now, and its typical run length of about 11.3 days suggests a backdrop that can persist long enough to matter for trading conditions.",
      "current": "Current market state is High Volatility. The market has been in this state about 49.8% of the time. Based on 251 trading days relative to the 252-day target.",
      "transitions": "This state looks reasonably settled because high-volatility periods have typically lasted about 11.3 days, although the overall read is still mixed.",
      "trading_implications": "This state looks more persistent, with a typical run length of about 11.3 days."
    },
    "execution": {
      "overall": "Displayed liquidity looks bid-light rather than fully balanced because top-10 bid depth is only 0.62x ask depth while the spread remains 1",
      "concern": "The clearest stress point is the imbalance on the bid side, with materially less displayed depth to buy than to sell. That matters because near-term selling pressure would meet a thinner book even though the spread is still only 1 tick.",
      "peer_context": "This book does not materially strengthen the broader standing because the 6M liquidity score of 96.2 already sits 1.0 point below the peer median of 97.2, and the current bid-light shape makes access look a little weaker in the moment. The longer trade history behind the trade-size percentiles adds context, but it does not offset the visible buy-side imbalance on screen."
    },
    "trader_composition": {
      "overall": "By trade count and value, flow looks mainly institution-like.",
      "retail_heavy": "Institution-like trades account for 50.8% of trade count and 61.1% of trade value, compared with retail-like trades at 4.2% of count and 1.7% of value. That gap points to larger participants setting the tone of observed activity.",
      "institutional_gap": "The read is still mixed at the margin because 41.5% of trade count is ambiguous or unclear. That leaves the overall picture institution-like, but not unequivocal.",
      "peer_comparison": "The mix looks more institution-like than retail-heavy, and the peer comparison in the report tables is the right reference for how unusual that is across the sector."
    },
    "price_moving": {
      "overall": "Price-moving activity looks meaningful rather than dominant, so the tape appears to be driven by a broad flow base instead of a narrow set of aggressive trades. Ambiguous or unclear flow is 41.5% of trade count, so the read is not fully clean. Market factors account for 64.5% of the current driver mix, which suggests price-moving trades are still operating within a broader market-led tape rather than a stock-specific burst.",
      "interpretation": "",
      "asymmetry": ""
    },
    "short_selling": {
      "overall": "Short-selling data is unavailable for this report.",
      "level": "N/A",
      "correlation": "N/A",
      "trend": "There is no clear sign that short activity is changing in a way that alters the picture. What stands out more is lighter top-10 bid depth at 0.62x of ask depth with a 1-tick spread, so any day-to-day friction looks more tied to displayed depth than to a shift in short selling.",
      "peaks": "N/A"
    },
    "intraday": {
      "overall": "Session split is open 1.5%, continuous 88.7%, and close 7.7%. Current trading concentration score is 0.118.",
      "hhi_interpretation": "Ambiguous or unclear flow is 41.5% of trade count, so the read is not fully clean.",
      "best_times": "The continuous session is the clearest source of usable liquidity because it accounts for the large majority of trading activity. The open and close matter less in this profile because their shares are much smaller.",
      "peer_ranking": "Intraday activity looks broad rather than narrowly concentrated, which is generally supportive of dependability when set against peer trading patterns."
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
        "5",
        "939",
        "1398",
        "3988",
        "3968",
        "1288",
        "2888",
        "998",
        "1658"
      ],
      "scores": [
        96.15384615384616,
        98.79564879564879,
        98.0963480963481,
        97.51359751359752,
        97.86324786324786,
        96.8919968919969,
        83.76068376068376,
        92.15229215229215,
        91.64724164724166
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
        1627838632.9,
        1786736479.64,
        1235274864.9499998,
        893243230.54,
        811034062.75,
        559507760.91,
        136641895.0,
        171463091.755,
        157335704.01
      ],
      "total": 2574
    },
    "market_comparison": {
      "sector_name": "Banks",
      "sector_count": 37,
      "market_count": 2574,
      "company": {
        "volatility": 0.3156677031817904,
        "adv": 1627838632.9,
        "spread_pct": 0.0008858543349997607,
        "turnover_ratio": 0.0008269401833172488,
        "amihud": 6.230769372381062e-12,
        "trades": 8275.0
      },
      "market": {
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.7408307343871665,
          "median": 0.5978604855525683,
          "min": 0.0,
          "max": 33.69234598783136,
          "p5": 0.22381753945873362,
          "p95": 1.5543264436522564,
          "count": 2574
        },
        "adv": {
          "direction": "higher_is_better",
          "mean": 56586844.79622647,
          "median": 219880.125,
          "min": 0.0,
          "max": 11530530000.0,
          "p5": 0.0,
          "p95": 214466108.9999997,
          "count": 2574
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.04194981587853588,
          "median": 0.026644836960384666,
          "min": 0.000558678699550006,
          "max": 0.49098715795419084,
          "p5": 0.0013906959312210716,
          "p95": 0.1338525179693808,
          "count": 2574
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.003668552458861562,
          "median": 0.0008649390509314946,
          "min": 0.0,
          "max": 0.18328433576591843,
          "p5": 0.0,
          "p95": 0.014553740756509973,
          "count": 2553
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 6.470117342488694e-07,
          "median": 4.630396367913572e-08,
          "min": 0.0,
          "max": 4.7054394880481924e-05,
          "p5": 5.0443531668434034e-11,
          "p95": 3.6564790403449536e-06,
          "count": 2574
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 1038.340909090909,
          "median": 21.0,
          "min": 0.0,
          "max": 93269.5,
          "p5": 0.0,
          "p95": 5735.124999999995,
          "count": 2574
        }
      },
      "sector": {
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.26814082446884135,
          "median": 0.2504917497795204,
          "min": 0.09879154616446219,
          "max": 0.5437307639337519,
          "p5": 0.17709635538801421,
          "p95": 0.47270456430364144,
          "count": 37
        },
        "adv": {
          "direction": "higher_is_better",
          "mean": 213208192.44909042,
          "median": 10829815.0,
          "min": 0.0,
          "max": 1786736479.64,
          "p5": 0.0,
          "p95": 1313787618.5399983,
          "count": 37
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.013981279592752145,
          "median": 0.003436829759153677,
          "min": 0.0006476149172923417,
          "max": 0.0721015310844332,
          "p5": 0.0011171939032441432,
          "p95": 0.06431200666284813,
          "count": 37
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.0027881839976659217,
          "median": 0.0009009160383810988,
          "min": 0.0,
          "max": 0.03292537845906206,
          "p5": 0.0,
          "p95": 0.00685561076116691,
          "count": 37
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 9.67245315415943e-08,
          "median": 8.654394066579286e-10,
          "min": 4.766860062189818e-12,
          "max": 1.447425445567088e-06,
          "p5": 6.224015631621538e-12,
          "p95": 4.936251912760149e-07,
          "count": 37
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 2348.3783783783783,
          "median": 655.5,
          "min": 0.0,
          "max": 13603.5,
          "p5": 0.0,
          "p95": 9446.499999999993,
          "count": 37
        }
      },
      "peers": {
        "adv": {
          "direction": "higher_is_better",
          "mean": 718904636.194375,
          "median": 685270911.8299999,
          "min": 136641895.0,
          "max": 1786736479.64,
          "p5": 143884728.1535,
          "p95": 1593724914.4984996,
          "count": 8
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 7314.4375,
          "median": 7457.0,
          "min": 2305.0,
          "max": 13603.5,
          "p5": 2608.8,
          "p95": 12661.649999999998,
          "count": 8
        },
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.22707832133648256,
          "median": 0.21083545047210506,
          "min": 0.18290076513365097,
          "max": 0.36123019153193703,
          "p5": 0.18680545361888903,
          "p95": 0.314880325286799,
          "count": 8
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.0015999590966304063,
          "median": 0.0017528867558196768,
          "min": 0.0006476149172923417,
          "max": 0.002247486240731611,
          "p5": 0.0008322097745968557,
          "p95": 0.002176247852708205,
          "count": 8
        },
        "spread_ticks": {
          "direction": "neutral",
          "mean": 1.2057118598487984,
          "median": 1.0512977728665711,
          "min": 1.011979468544335,
          "max": 1.9829498535173626,
          "p5": 1.014215137838347,
          "p95": 1.7641628826395617,
          "count": 8
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 2.8056795380014188e-11,
          "median": 1.3006833869741483e-11,
          "min": 4.766860062189818e-12,
          "max": 8.920693364028488e-11,
          "p5": 5.267409274427587e-12,
          "p95": 7.600512190003213e-11,
          "count": 8
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.0035691434507245535,
          "median": 0.003306652654652807,
          "min": 0.000418064120750285,
          "max": 0.0064772188022092,
          "p5": 0.0011491543960384073,
          "p95": 0.006234170805730324,
          "count": 8
        }
      }
    },
    "returns": [
      {
        "horizon": "1M",
        "stock": 0.021339220014716886,
        "market": -0.007811259659372016,
        "sector": 0.019888401383184817,
        "peers": 0.06260989543121065
      },
      {
        "horizon": "3M",
        "stock": 0.07763975155279534,
        "market": 0.058957371688082016,
        "sector": -0.004538716557025202,
        "peers": 0.03047842578860327
      },
      {
        "horizon": "6M",
        "stock": 0.27808471454880324,
        "market": 0.10999472576257396,
        "sector": -0.0180253157184308,
        "peers": 0.10989938868985183
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
      "share_market": 0.6452592558056204,
      "share_sector": 0.27134031651771173,
      "share_idio": 0.08340042767666775,
      "beta_market": 2.183345691965391,
      "beta_sector": -2.634880634056759,
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
            "median": 0.6452592558056204,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "64.5%",
            "display_range": null,
            "display_text": "64.5%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "share_pct",
            "value_pct": 64.5,
            "plain_english": "Market explains about 64.5% of price moves in the current state."
          },
          "sector_share": {
            "median": 0.27134031651771173,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "27.1%",
            "display_range": null,
            "display_text": "27.1%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "share_pct",
            "value_pct": 27.1,
            "plain_english": "Sector explains about 27.1% of price moves in the current state."
          },
          "company_share": {
            "median": 0.08340042767666775,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "8.3%",
            "display_range": null,
            "display_text": "8.3%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "share_pct",
            "value_pct": 8.3,
            "plain_english": "Company-specific explains about 8.3% of price moves in the current state."
          },
          "basis": "current_state"
        },
        "current_sensitivities": {
          "beta_market": {
            "median": 2.183345691965391,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "2.18",
            "display_range": null,
            "display_text": "2.18",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "beta",
            "strength_label": "High",
            "plain_english": "High market link: a 1% market move has lined up with about a 2.18% stock move in the same direction in this state.",
            "value_num": 2.18
          },
          "beta_stock_lag": {
            "median": 0.22195989853175854,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "0.22",
            "display_range": null,
            "display_text": "0.22",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "lag_beta",
            "value_num": 0.22
          },
          "beta_sector": {
            "median": -2.634880634056759,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "-2.63",
            "display_range": null,
            "display_text": "-2.63",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "beta",
            "strength_label": "High",
            "plain_english": "High sector link: a 1% sector move has lined up with about a 2.63% stock move in the opposite direction in this state.",
            "value_num": -2.63
          },
          "beta_market_lag": {
            "median": -1.1697239683853797,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "-1.17",
            "display_range": null,
            "display_text": "-1.17",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "lag_beta",
            "value_num": -1.17
          },
          "beta_sector_lag": {
            "median": 1.9452581264871691,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "1.95",
            "display_range": null,
            "display_text": "1.95",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "lag_beta",
            "value_num": 1.95
          },
          "posterior_source": null,
          "intervals_collapsed": false,
          "confidence_label": "High, limited history",
          "confidence_note": "Based on 251 trading days relative to the 252-day target."
        },
        "rolling_windows": {},
        "monthly_history": [
          {
            "month_key": "2025-03",
            "month_label": "March 2025",
            "month_short_label": "Mar",
            "period_label": "2025-03-25 to 2025-03-31",
            "n_obs": 5,
            "partial_month": true,
            "dominant_driver": "market",
            "dominant_driver_label": "Market",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.4788569526051969,
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
                "median": 0.4788569526051969,
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
                "median": 0.2583158874503245,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "25.8%",
                "display_range": null,
                "display_text": "25.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
                "kind": "share_pct",
                "value_pct": 25.8,
                "plain_english": "Sector explains about 25.8% of price moves in the current state."
              },
              "company_share": {
                "median": 0.26282715994447864,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "26.3%",
                "display_range": null,
                "display_text": "26.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
                "kind": "share_pct",
                "value_pct": 26.3,
                "plain_english": "Company-specific explains about 26.3% of price moves in the current state."
              }
            },
            "summary": "Mar: Mostly market-driven, though based on only 5 trading days."
          },
          {
            "month_key": "2025-04",
            "month_label": "April 2025",
            "month_short_label": "Apr",
            "period_label": "2025-04-01 to 2025-04-30",
            "n_obs": 19,
            "partial_month": false,
            "dominant_driver": "market",
            "dominant_driver_label": "Market",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.5371622350230987,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "53.7%",
              "display_range": null,
              "display_text": "53.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
              "kind": "share_pct",
              "value_pct": 53.7,
              "plain_english": "Market explains about 53.7% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.5371622350230987,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "53.7%",
                "display_range": null,
                "display_text": "53.7%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
                "kind": "share_pct",
                "value_pct": 53.7,
                "plain_english": "Market explains about 53.7% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.35837323178993846,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "35.8%",
                "display_range": null,
                "display_text": "35.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
                "kind": "share_pct",
                "value_pct": 35.8,
                "plain_english": "Sector explains about 35.8% of price moves in the current state."
              },
              "company_share": {
                "median": 0.1044645331869628,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "10.4%",
                "display_range": null,
                "display_text": "10.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
                "kind": "share_pct",
                "value_pct": 10.4,
                "plain_english": "Company-specific explains about 10.4% of price moves in the current state."
              }
            },
            "summary": "Apr: Mostly market-driven."
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
              "median": 0.4904235990085711,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "49.0%",
              "display_range": null,
              "display_text": "49.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 49.0,
              "plain_english": "Company-specific explains about 49.0% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.23054846342721066,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "23.1%",
                "display_range": null,
                "display_text": "23.1%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 23.1,
                "plain_english": "Market explains about 23.1% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.27902793756421823,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "27.9%",
                "display_range": null,
                "display_text": "27.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 27.9,
                "plain_english": "Sector explains about 27.9% of price moves in the current state."
              },
              "company_share": {
                "median": 0.4904235990085711,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "49.0%",
                "display_range": null,
                "display_text": "49.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 49.0,
                "plain_english": "Company-specific explains about 49.0% of price moves in the current state."
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
            "dominant_driver": "market",
            "dominant_driver_label": "Market",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.4845051068427767,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "48.5%",
              "display_range": null,
              "display_text": "48.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 48.5,
              "plain_english": "Market explains about 48.5% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.4845051068427767,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "48.5%",
                "display_range": null,
                "display_text": "48.5%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 48.5,
                "plain_english": "Market explains about 48.5% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.1595510638621218,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "16.0%",
                "display_range": null,
                "display_text": "16.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 16.0,
                "plain_english": "Sector explains about 16.0% of price moves in the current state."
              },
              "company_share": {
                "median": 0.3559438292951015,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "35.6%",
                "display_range": null,
                "display_text": "35.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 35.6,
                "plain_english": "Company-specific explains about 35.6% of price moves in the current state."
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
            "dominant_driver": "market",
            "dominant_driver_label": "Market",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.3977672378261076,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "39.8%",
              "display_range": null,
              "display_text": "39.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 39.8,
              "plain_english": "Market explains about 39.8% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.3977672378261076,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "39.8%",
                "display_range": null,
                "display_text": "39.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 39.8,
                "plain_english": "Market explains about 39.8% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.21594671914711974,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "21.6%",
                "display_range": null,
                "display_text": "21.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 21.6,
                "plain_english": "Sector explains about 21.6% of price moves in the current state."
              },
              "company_share": {
                "median": 0.38628604302677266,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "38.6%",
                "display_range": null,
                "display_text": "38.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 38.6,
                "plain_english": "Company-specific explains about 38.6% of price moves in the current state."
              }
            },
            "summary": "Jul: More mixed, though market-driven still has the largest share."
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
              "median": 0.3921365385728703,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "39.2%",
              "display_range": null,
              "display_text": "39.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 39.2,
              "plain_english": "Company-specific explains about 39.2% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.2244445945323739,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "22.4%",
                "display_range": null,
                "display_text": "22.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 22.4,
                "plain_english": "Market explains about 22.4% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.3834188668947559,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "38.3%",
                "display_range": null,
                "display_text": "38.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 38.3,
                "plain_english": "Sector explains about 38.3% of price moves in the current state."
              },
              "company_share": {
                "median": 0.3921365385728703,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "39.2%",
                "display_range": null,
                "display_text": "39.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 39.2,
                "plain_english": "Company-specific explains about 39.2% of price moves in the current state."
              }
            },
            "summary": "Aug: More mixed, though company-driven still has the largest share."
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
              "median": 0.5253586260514308,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "52.5%",
              "display_range": null,
              "display_text": "52.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 52.5,
              "plain_english": "Company-specific explains about 52.5% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.09337081010549955,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "9.3%",
                "display_range": null,
                "display_text": "9.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 9.3,
                "plain_english": "Market explains about 9.3% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.38127056384306957,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "38.1%",
                "display_range": null,
                "display_text": "38.1%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 38.1,
                "plain_english": "Sector explains about 38.1% of price moves in the current state."
              },
              "company_share": {
                "median": 0.5253586260514308,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "52.5%",
                "display_range": null,
                "display_text": "52.5%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 52.5,
                "plain_english": "Company-specific explains about 52.5% of price moves in the current state."
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
              "median": 0.4631684829115581,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "46.3%",
              "display_range": null,
              "display_text": "46.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 46.3,
              "plain_english": "Company-specific explains about 46.3% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.268538231040846,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "26.9%",
                "display_range": null,
                "display_text": "26.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 26.9,
                "plain_english": "Market explains about 26.9% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.26829328604759584,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "26.8%",
                "display_range": null,
                "display_text": "26.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 26.8,
                "plain_english": "Sector explains about 26.8% of price moves in the current state."
              },
              "company_share": {
                "median": 0.4631684829115581,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "46.3%",
                "display_range": null,
                "display_text": "46.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 46.3,
                "plain_english": "Company-specific explains about 46.3% of price moves in the current state."
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
              "median": 0.574591883203026,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "57.5%",
              "display_range": null,
              "display_text": "57.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 57.5,
              "plain_english": "Market explains about 57.5% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.574591883203026,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "57.5%",
                "display_range": null,
                "display_text": "57.5%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 57.5,
                "plain_english": "Market explains about 57.5% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.14531447839558084,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "14.5%",
                "display_range": null,
                "display_text": "14.5%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 14.5,
                "plain_english": "Sector explains about 14.5% of price moves in the current state."
              },
              "company_share": {
                "median": 0.2800936384013932,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "28.0%",
                "display_range": null,
                "display_text": "28.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 28.0,
                "plain_english": "Company-specific explains about 28.0% of price moves in the current state."
              }
            },
            "summary": "Nov: Mostly market-driven."
          },
          {
            "month_key": "2025-12",
            "month_label": "December 2025",
            "month_short_label": "Dec",
            "period_label": "2025-12-01 to 2025-12-31",
            "n_obs": 15,
            "partial_month": false,
            "dominant_driver": "market",
            "dominant_driver_label": "Market",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.5045633134315194,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "50.5%",
              "display_range": null,
              "display_text": "50.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
              "kind": "share_pct",
              "value_pct": 50.5,
              "plain_english": "Market explains about 50.5% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.5045633134315194,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "50.5%",
                "display_range": null,
                "display_text": "50.5%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
                "kind": "share_pct",
                "value_pct": 50.5,
                "plain_english": "Market explains about 50.5% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.28469741798981646,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "28.5%",
                "display_range": null,
                "display_text": "28.5%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
                "kind": "share_pct",
                "value_pct": 28.5,
                "plain_english": "Sector explains about 28.5% of price moves in the current state."
              },
              "company_share": {
                "median": 0.21073926857866407,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "21.1%",
                "display_range": null,
                "display_text": "21.1%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
                "kind": "share_pct",
                "value_pct": 21.1,
                "plain_english": "Company-specific explains about 21.1% of price moves in the current state."
              }
            },
            "summary": "Dec: Mostly market-driven."
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
              "median": 0.3910129558838437,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "39.1%",
              "display_range": null,
              "display_text": "39.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 39.1,
              "plain_english": "Company-specific explains about 39.1% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.3510102540288183,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "35.1%",
                "display_range": null,
                "display_text": "35.1%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 35.1,
                "plain_english": "Market explains about 35.1% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.25797679008733787,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "25.8%",
                "display_range": null,
                "display_text": "25.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 25.8,
                "plain_english": "Sector explains about 25.8% of price moves in the current state."
              },
              "company_share": {
                "median": 0.3910129558838437,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "39.1%",
                "display_range": null,
                "display_text": "39.1%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 39.1,
                "plain_english": "Company-specific explains about 39.1% of price moves in the current state."
              }
            },
            "summary": "Jan: More mixed, though company-driven still has the largest share."
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
              "median": 0.3874187265128073,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "38.7%",
              "display_range": null,
              "display_text": "38.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
              "kind": "share_pct",
              "value_pct": 38.7,
              "plain_english": "Company-specific explains about 38.7% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.34870035632110014,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "34.9%",
                "display_range": null,
                "display_text": "34.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
                "kind": "share_pct",
                "value_pct": 34.9,
                "plain_english": "Market explains about 34.9% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.26388091716609247,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "26.4%",
                "display_range": null,
                "display_text": "26.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
                "kind": "share_pct",
                "value_pct": 26.4,
                "plain_english": "Sector explains about 26.4% of price moves in the current state."
              },
              "company_share": {
                "median": 0.3874187265128073,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "38.7%",
                "display_range": null,
                "display_text": "38.7%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
                "kind": "share_pct",
                "value_pct": 38.7,
                "plain_english": "Company-specific explains about 38.7% of price moves in the current state."
              }
            },
            "summary": "Feb: More mixed, though company-driven still has the largest share."
          },
          {
            "month_key": "2026-03",
            "month_label": "March 2026",
            "month_short_label": "Mar",
            "period_label": "2026-03-02 to 2026-03-31",
            "n_obs": 22,
            "partial_month": false,
            "dominant_driver": "market",
            "dominant_driver_label": "Market",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.5104035215877255,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "51.0%",
              "display_range": null,
              "display_text": "51.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 51.0,
              "plain_english": "Market explains about 51.0% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.5104035215877255,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "51.0%",
                "display_range": null,
                "display_text": "51.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 51.0,
                "plain_english": "Market explains about 51.0% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.14825069273845679,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "14.8%",
                "display_range": null,
                "display_text": "14.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 14.8,
                "plain_english": "Sector explains about 14.8% of price moves in the current state."
              },
              "company_share": {
                "median": 0.3413457856738176,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "34.1%",
                "display_range": null,
                "display_text": "34.1%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 34.1,
                "plain_english": "Company-specific explains about 34.1% of price moves in the current state."
              }
            },
            "summary": "Mar: Mostly market-driven."
          },
          {
            "month_key": "2026-04",
            "month_label": "April 2026",
            "month_short_label": "Apr",
            "period_label": "2026-04-01 to 2026-04-13",
            "n_obs": 6,
            "partial_month": false,
            "dominant_driver": "market",
            "dominant_driver_label": "Market",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.6296340016016293,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "63.0%",
              "display_range": null,
              "display_text": "63.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 6 trading days.",
              "kind": "share_pct",
              "value_pct": 63.0,
              "plain_english": "Market explains about 63.0% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.6296340016016293,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "63.0%",
                "display_range": null,
                "display_text": "63.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 6 trading days.",
                "kind": "share_pct",
                "value_pct": 63.0,
                "plain_english": "Market explains about 63.0% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.2832808371767297,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "28.3%",
                "display_range": null,
                "display_text": "28.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 6 trading days.",
                "kind": "share_pct",
                "value_pct": 28.3,
                "plain_english": "Sector explains about 28.3% of price moves in the current state."
              },
              "company_share": {
                "median": 0.08708516122164102,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "8.7%",
                "display_range": null,
                "display_text": "8.7%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 6 trading days.",
                "kind": "share_pct",
                "value_pct": 8.7,
                "plain_english": "Company-specific explains about 8.7% of price moves in the current state."
              }
            },
            "summary": "Apr: Still clearly market-driven, though based on only 6 trading days."
          }
        ],
        "regimes": [
          {
            "id": 0,
            "label": "Low Volatility",
            "pct_time": 0.5020080321285141,
            "expected_duration_days": 12.5,
            "current_probability": 0.0,
            "n_days_effective": 125.0,
            "volatility": {
              "median": 0.008979452745803891,
              "low": 0.008979452745803891,
              "high": 0.008979452745803891
            },
            "volatility_label": "Low Volatility",
            "current_probability_display": 0.0
          },
          {
            "id": 1,
            "label": "High Volatility",
            "pct_time": 0.4979919678714859,
            "expected_duration_days": 11.272727272727273,
            "current_probability": 1.0,
            "n_days_effective": 124.0,
            "volatility": {
              "median": 0.02272924526073619,
              "low": 0.02272924526073619,
              "high": 0.02272924526073619
            },
            "volatility_label": "High Volatility",
            "current_probability_display": null
          }
        ],
        "transitions": {
          "mean": [
            [
              0.92,
              0.08
            ],
            [
              0.08130081300813008,
              0.9186991869918699
            ]
          ],
          "low": [],
          "high": [],
          "counts": [
            [
              115.0,
              10.0
            ],
            [
              10.0,
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
          "market_link_display": "2.18",
          "sector_link_display": "-2.63",
          "market_link_explainer": "High market link. A 1% market move has lined up with about a 2.18% stock move in the same direction in this state. This is a point estimate from 251 trading days.",
          "sector_link_explainer": "High sector link. A 1% sector move has lined up with about a 2.63% stock move in the opposite direction in this state. This is a point estimate from 251 trading days.",
          "stock_persistence_display": "0.22",
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "history_limited_note": "Read is based on 251 trading days versus the 252-day target."
        },
        "current_summary": {
          "regime_label": "High Volatility",
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "driver_share_pct": 64.5,
          "driver_share_display": "64.5%",
          "confidence_label": "High, limited history",
          "confidence_pct": 100.0,
          "display_confidence_pct": null,
          "confidence_note": "Based on 251 trading days relative to the 252-day target.",
          "history_days": 251,
          "history_limited": true,
          "volatility_label": "High Volatility",
          "lead_signal_text": "No stable lead signal.",
          "state_term": "state",
          "stay_probability": 0.9186991869918699,
          "effective_days": 124.0,
          "persistence_note": "This state looks more persistent, with a typical run length of about 11.3 days.",
          "expected_duration_days": 11.3
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
          "month_key": "2025-03",
          "month_label": "March 2025",
          "month_short_label": "Mar",
          "period_label": "2025-03-25 to 2025-03-31",
          "n_obs": 5,
          "partial_month": true,
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "regime_label": null,
          "summary": "Mar: Mostly market-driven, though based on only 5 trading days.",
          "share_market": 0.4788569526051969,
          "share_sector": 0.2583158874503245,
          "share_company": 0.26282715994447864,
          "share_market_display": "47.9%",
          "share_sector_display": "25.8%",
          "share_company_display": "26.3%",
          "dominant_share_display": "47.9%"
        },
        {
          "month_key": "2025-04",
          "month_label": "April 2025",
          "month_short_label": "Apr",
          "period_label": "2025-04-01 to 2025-04-30",
          "n_obs": 19,
          "partial_month": false,
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "regime_label": null,
          "summary": "Apr: Mostly market-driven.",
          "share_market": 0.5371622350230987,
          "share_sector": 0.35837323178993846,
          "share_company": 0.1044645331869628,
          "share_market_display": "53.7%",
          "share_sector_display": "35.8%",
          "share_company_display": "10.4%",
          "dominant_share_display": "53.7%"
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
          "share_market": 0.23054846342721066,
          "share_sector": 0.27902793756421823,
          "share_company": 0.4904235990085711,
          "share_market_display": "23.1%",
          "share_sector_display": "27.9%",
          "share_company_display": "49.0%",
          "dominant_share_display": "49.0%"
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
          "share_market": 0.4845051068427767,
          "share_sector": 0.1595510638621218,
          "share_company": 0.3559438292951015,
          "share_market_display": "48.5%",
          "share_sector_display": "16.0%",
          "share_company_display": "35.6%",
          "dominant_share_display": "48.5%"
        },
        {
          "month_key": "2025-07",
          "month_label": "July 2025",
          "month_short_label": "Jul",
          "period_label": "2025-07-02 to 2025-07-31",
          "n_obs": 22,
          "partial_month": true,
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "regime_label": null,
          "summary": "Jul: More mixed, though market-driven still has the largest share.",
          "share_market": 0.3977672378261076,
          "share_sector": 0.21594671914711974,
          "share_company": 0.38628604302677266,
          "share_market_display": "39.8%",
          "share_sector_display": "21.6%",
          "share_company_display": "38.6%",
          "dominant_share_display": "39.8%"
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
          "summary": "Aug: More mixed, though company-driven still has the largest share.",
          "share_market": 0.2244445945323739,
          "share_sector": 0.3834188668947559,
          "share_company": 0.3921365385728703,
          "share_market_display": "22.4%",
          "share_sector_display": "38.3%",
          "share_company_display": "39.2%",
          "dominant_share_display": "39.2%"
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
          "share_market": 0.09337081010549955,
          "share_sector": 0.38127056384306957,
          "share_company": 0.5253586260514308,
          "share_market_display": "9.3%",
          "share_sector_display": "38.1%",
          "share_company_display": "52.5%",
          "dominant_share_display": "52.5%"
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
          "share_market": 0.268538231040846,
          "share_sector": 0.26829328604759584,
          "share_company": 0.4631684829115581,
          "share_market_display": "26.9%",
          "share_sector_display": "26.8%",
          "share_company_display": "46.3%",
          "dominant_share_display": "46.3%"
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
          "summary": "Nov: Mostly market-driven.",
          "share_market": 0.574591883203026,
          "share_sector": 0.14531447839558084,
          "share_company": 0.2800936384013932,
          "share_market_display": "57.5%",
          "share_sector_display": "14.5%",
          "share_company_display": "28.0%",
          "dominant_share_display": "57.5%"
        },
        {
          "month_key": "2025-12",
          "month_label": "December 2025",
          "month_short_label": "Dec",
          "period_label": "2025-12-01 to 2025-12-31",
          "n_obs": 15,
          "partial_month": false,
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "regime_label": null,
          "summary": "Dec: Mostly market-driven.",
          "share_market": 0.5045633134315194,
          "share_sector": 0.28469741798981646,
          "share_company": 0.21073926857866407,
          "share_market_display": "50.5%",
          "share_sector_display": "28.5%",
          "share_company_display": "21.1%",
          "dominant_share_display": "50.5%"
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
          "summary": "Jan: More mixed, though company-driven still has the largest share.",
          "share_market": 0.3510102540288183,
          "share_sector": 0.25797679008733787,
          "share_company": 0.3910129558838437,
          "share_market_display": "35.1%",
          "share_sector_display": "25.8%",
          "share_company_display": "39.1%",
          "dominant_share_display": "39.1%"
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
          "summary": "Feb: More mixed, though company-driven still has the largest share.",
          "share_market": 0.34870035632110014,
          "share_sector": 0.26388091716609247,
          "share_company": 0.3874187265128073,
          "share_market_display": "34.9%",
          "share_sector_display": "26.4%",
          "share_company_display": "38.7%",
          "dominant_share_display": "38.7%"
        },
        {
          "month_key": "2026-03",
          "month_label": "March 2026",
          "month_short_label": "Mar",
          "period_label": "2026-03-02 to 2026-03-31",
          "n_obs": 22,
          "partial_month": false,
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "regime_label": null,
          "summary": "Mar: Mostly market-driven.",
          "share_market": 0.5104035215877255,
          "share_sector": 0.14825069273845679,
          "share_company": 0.3413457856738176,
          "share_market_display": "51.0%",
          "share_sector_display": "14.8%",
          "share_company_display": "34.1%",
          "dominant_share_display": "51.0%"
        },
        {
          "month_key": "2026-04",
          "month_label": "April 2026",
          "month_short_label": "Apr",
          "period_label": "2026-04-01 to 2026-04-13",
          "n_obs": 6,
          "partial_month": false,
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "regime_label": null,
          "summary": "Apr: Still clearly market-driven, though based on only 6 trading days.",
          "share_market": 0.6296340016016293,
          "share_sector": 0.2832808371767297,
          "share_company": 0.08708516122164102,
          "share_market_display": "63.0%",
          "share_sector_display": "28.3%",
          "share_company_display": "8.7%",
          "dominant_share_display": "63.0%"
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
            "expected_duration_days": 12.5,
            "current_probability": 0.0,
            "n_days_effective": 125.0,
            "volatility": {
              "median": 0.008979452745803891,
              "low": 0.008979452745803891,
              "high": 0.008979452745803891
            },
            "volatility_label": "Low Volatility"
          },
          {
            "id": 1,
            "label": "High Volatility",
            "pct_time": 0.4979919678714859,
            "expected_duration_days": 11.272727272727273,
            "current_probability": 1.0,
            "n_days_effective": 124.0,
            "volatility": {
              "median": 0.02272924526073619,
              "low": 0.02272924526073619,
              "high": 0.02272924526073619
            },
            "volatility_label": "High Volatility"
          }
        ],
        "transitions": [
          [
            0.92,
            0.08
          ],
          [
            0.08130081300813008,
            0.9186991869918699
          ]
        ]
      }
    },
    "order_book": {
      "bids": [
        {
          "level": 1,
          "price": 138.8,
          "quantity": 38400.0,
          "value": 5329920.0
        },
        {
          "level": 2,
          "price": 138.7,
          "quantity": 70000.0,
          "value": 9709000.0
        },
        {
          "level": 3,
          "price": 138.6,
          "quantity": 52000.0,
          "value": 7207200.0
        },
        {
          "level": 4,
          "price": 138.5,
          "quantity": 50400.0,
          "value": 6980400.0
        },
        {
          "level": 5,
          "price": 138.4,
          "quantity": 22000.0,
          "value": 3044800.0
        },
        {
          "level": 6,
          "price": 138.3,
          "quantity": 28800.0,
          "value": 3983040.0000000005
        },
        {
          "level": 7,
          "price": 138.2,
          "quantity": 29600.0,
          "value": 4090719.9999999995
        },
        {
          "level": 8,
          "price": 138.1,
          "quantity": 8400.0,
          "value": 1160040.0
        },
        {
          "level": 9,
          "price": 138.0,
          "quantity": 81200.0,
          "value": 11205600.0
        },
        {
          "level": 10,
          "price": 137.9,
          "quantity": 43200.0,
          "value": 5957280.0
        }
      ],
      "asks": [
        {
          "level": 1,
          "price": 138.9,
          "quantity": 133200.0,
          "value": 18501480.0
        },
        {
          "level": 2,
          "price": 139.0,
          "quantity": 94000.0,
          "value": 13066000.0
        },
        {
          "level": 3,
          "price": 139.1,
          "quantity": 71600.0,
          "value": 9959560.0
        },
        {
          "level": 4,
          "price": 139.2,
          "quantity": 27200.0,
          "value": 3786239.9999999995
        },
        {
          "level": 5,
          "price": 139.3,
          "quantity": 98000.0,
          "value": 13651400.000000002
        },
        {
          "level": 6,
          "price": 139.4,
          "quantity": 44400.0,
          "value": 6189360.0
        },
        {
          "level": 7,
          "price": 139.5,
          "quantity": 59200.0,
          "value": 8258400.0
        },
        {
          "level": 8,
          "price": 139.6,
          "quantity": 54400.0,
          "value": 7594240.0
        },
        {
          "level": 9,
          "price": 139.7,
          "quantity": 40800.0,
          "value": 5699760.0
        },
        {
          "level": 10,
          "price": 139.8,
          "quantity": 54000.0,
          "value": 7549200.000000001
        }
      ]
    },
    "execution_dynamic": {
      "snapshot": {
        "valid": true,
        "snapshot_time": "2026-04-13 07:59:59.227000000",
        "snapshot_basis": "last_continuous_session_snapshot",
        "snapshot_label": "final continuous-session displayed book before close",
        "snapshot_note": "Final continuous-session displayed book before close",
        "snapshot_mic": "XHKG",
        "mid_price": 138.85000000000002,
        "spread_pct": 0.0007202016564637688,
        "spread_ticks": 1.0,
        "tick_size": 0.1,
        "bid_depth_notional_top10": 58668000.0,
        "ask_depth_notional_top10": 94255640.0,
        "bid_ask_depth_ratio": 0.6224
      },
      "historical_trade_scenarios": {
        "valid": true,
        "requested_lookback_calendar_days": 365,
        "lookback_calendar_days": 365,
        "effective_calendar_days": 365,
        "history_limited": false,
        "trade_days_used": 238,
        "n_trades_used": 2246553,
        "first_trade_date": "2025-04-14",
        "last_trade_date": "2026-04-13",
        "window_label": "Apr 14, 2025 to Apr 13, 2026",
        "window_short_label": "Apr 14, 2025 to Apr 13, 2026",
        "trade_days_label": "238 trading days",
        "trade_count_label": "2,246,553 trades",
        "window_detail_label": "238 trading days • 2,246,553 trades",
        "history_note": "Trade-size percentiles use Apr 14, 2025 to Apr 13, 2026 history (238 trading days • 2,246,553 trades).",
        "scenarios": [
          {
            "key": "p90",
            "label": "90th percentile trade",
            "quantile": 0.9,
            "trade_notional": 394560.0,
            "impact_pct": -0.00035999999999999997,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 0.67,
            "pct_of_adv": 0.02
          },
          {
            "key": "p95",
            "label": "95th percentile trade",
            "quantile": 0.95,
            "trade_notional": 715680.0,
            "impact_pct": -0.00035999999999999997,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 1.22,
            "pct_of_adv": 0.03
          },
          {
            "key": "p99_99",
            "label": "99.99th percentile trade",
            "quantile": 0.9999,
            "trade_notional": 18853824.8,
            "impact_pct": -0.001023,
            "filled_pct": 100.0,
            "levels_consumed": 3,
            "pct_of_bid_depth": 32.14,
            "pct_of_adv": 0.82
          }
        ]
      },
      "l3_sell_order_scenarios": {
        "valid": true,
        "trade_date": "2026-04-13",
        "selection_method": "largest_observed_ask_orders_during_day",
        "orders": [
          {
            "rank": 1,
            "order_id": "3220559107.0",
            "timestamp": "2026-04-13 05:39:30.522000000",
            "local_timestamp": "2026-04-13 13:39:30",
            "posted_price": 138.9,
            "size_shares": 165600.0,
            "notional": 23001840.0,
            "impact_pct": -0.001187,
            "filled_pct": 100.0,
            "levels_consumed": 4,
            "pct_of_bid_depth": 39.21,
            "price_vs_mid_pct": 0.036,
            "executed_event_count": 0,
            "event_count": 12
          },
          {
            "rank": 2,
            "order_id": "4303810307.0",
            "timestamp": "2026-04-13 07:49:41.244000000",
            "local_timestamp": "2026-04-13 15:49:41",
            "posted_price": 138.9,
            "size_shares": 122400.0,
            "notional": 17001360.0,
            "impact_pct": -0.0009379999999999999,
            "filled_pct": 100.0,
            "levels_consumed": 3,
            "pct_of_bid_depth": 28.98,
            "price_vs_mid_pct": 0.036,
            "executed_event_count": 0,
            "event_count": 15
          },
          {
            "rank": 3,
            "order_id": "4270189059.0",
            "timestamp": "2026-04-13 07:45:44.788000000",
            "local_timestamp": "2026-04-13 15:45:44",
            "posted_price": 138.9,
            "size_shares": 112800.0,
            "notional": 15667920.0,
            "impact_pct": -0.0008640000000000001,
            "filled_pct": 100.0,
            "levels_consumed": 3,
            "pct_of_bid_depth": 26.71,
            "price_vs_mid_pct": 0.036,
            "executed_event_count": 0,
            "event_count": 16
          }
        ]
      },
      "intraday_liquidity_profile": {
        "valid": true,
        "trade_date": "2026-04-13",
        "bucket_minutes": 30,
        "tick_size": 0.1,
        "timezone": "HKT (UTC+8)",
        "session_label": "HKEX continuous trading session",
        "bucket_label_basis": "bucket start time",
        "display_window_label": "HKEX continuous trading session",
        "bucket_note": "Buckets are shown in local market time and labeled by bucket start.",
        "rows": [
          {
            "bucket": "09:30",
            "spread_pct": 0.0007238508867172952,
            "spread_ticks": 0.9999999999999432,
            "bid_depth_notional": 72827240.0,
            "ask_depth_notional": 94677720.0,
            "mid_price": 138.14999999999998
          },
          {
            "bucket": "10:00",
            "spread_pct": 0.0014482259232439438,
            "spread_ticks": 1.9999999999998863,
            "bid_depth_notional": 109133480.0,
            "ask_depth_notional": 106728760.0,
            "mid_price": 138.1
          },
          {
            "bucket": "10:30",
            "spread_pct": 0.0014482259232439438,
            "spread_ticks": 1.9999999999998863,
            "bid_depth_notional": 115472800.0,
            "ask_depth_notional": 132431960.0,
            "mid_price": 138.1
          },
          {
            "bucket": "11:00",
            "spread_pct": 0.0007280669821623174,
            "spread_ticks": 0.9999999999999432,
            "bid_depth_notional": 82184240.0,
            "ask_depth_notional": 121148960.0,
            "mid_price": 137.35000000000002
          },
          {
            "bucket": "11:30",
            "spread_pct": 0.0014545454545453718,
            "spread_ticks": 1.9999999999998863,
            "bid_depth_notional": 71701400.0,
            "ask_depth_notional": 105257320.0,
            "mid_price": 137.5
          },
          {
            "bucket": "13:00",
            "spread_pct": 0.0007249003262051057,
            "spread_ticks": 0.9999999999999432,
            "bid_depth_notional": 90382680.0,
            "ask_depth_notional": 87065880.0,
            "mid_price": 137.95
          },
          {
            "bucket": "13:30",
            "spread_pct": 0.000724375226367217,
            "spread_ticks": 0.9999999999999432,
            "bid_depth_notional": 80431160.0,
            "ask_depth_notional": 119852120.0,
            "mid_price": 138.05
          },
          {
            "bucket": "14:00",
            "spread_pct": 0.0007238508867172952,
            "spread_ticks": 0.9999999999999432,
            "bid_depth_notional": 75553320.0,
            "ask_depth_notional": 114367160.0,
            "mid_price": 138.14999999999998
          },
          {
            "bucket": "14:30",
            "spread_pct": 0.0007217610970768265,
            "spread_ticks": 0.9999999999999432,
            "bid_depth_notional": 75118720.0,
            "ask_depth_notional": 87288960.0,
            "mid_price": 138.55
          },
          {
            "bucket": "15:00",
            "spread_pct": 0.0007202016564637688,
            "spread_ticks": 0.9999999999999432,
            "bid_depth_notional": 119600960.0,
            "ask_depth_notional": 107829440.0,
            "mid_price": 138.85000000000002
          },
          {
            "bucket": "15:30",
            "spread_pct": 0.0007202016564637688,
            "spread_ticks": 0.9999999999999432,
            "bid_depth_notional": 58668000.0,
            "ask_depth_notional": 94255640.0,
            "mid_price": 138.85000000000002
          }
        ],
        "summary": {
          "median_spread_pct": 0.000724375226367217,
          "median_spread_ticks": 0.9999999999999432,
          "median_bid_depth_notional": 80431160.0,
          "median_ask_depth_notional": 106728760.0,
          "tightest_bucket": "15:00",
          "widest_bucket": "11:30",
          "deepest_bid_bucket": "15:00",
          "thinnest_bid_bucket": "15:30"
        }
      }
    },
    "peer_capacity": {
      "bx_ticket_pct_adv_50k": 0.0,
      "peers": [
        {
          "ticker": "939",
          "pct": 0.1
        },
        {
          "ticker": "1398",
          "pct": 0.1
        },
        {
          "ticker": "3988",
          "pct": 0.1
        },
        {
          "ticker": "3968",
          "pct": 0.1
        },
        {
          "ticker": "1288",
          "pct": 0.2
        },
        {
          "ticker": "998",
          "pct": 0.5
        },
        {
          "ticker": "2888",
          "pct": 0.5
        },
        {
          "ticker": "1658",
          "pct": 0.6
        }
      ]
    },
    "trader_composition": {
      "primary_period": "6m",
      "periods": {
        "1d": {
          "valid": true,
          "currency": "HKD",
          "n_trades": 10489,
          "n_runs": 1210,
          "n_trade_days": 1,
          "first_trade_date": "2026-04-13",
          "last_trade_date": "2026-04-13",
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
            "retail_pct": 0.04785966250357517,
            "mixed_pct": 0.0,
            "instit_pct": 0.5152064067117933,
            "ambiguous_pct": 0.41367146534464677,
            "unobservable_pct": 0.023262465439984746,
            "unclear_pct": 0.4369339307846315,
            "retail_qty_pct": 0.018385038974687986,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.6121503007128302,
            "ambiguous_qty_pct": 0.351324669812844,
            "unobservable_qty_pct": 0.018139990499637937,
            "unclear_qty_pct": 0.36946466031248193,
            "retail_notional_pct": 0.018359754456448864,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.6122685833011718,
            "ambiguous_notional_pct": 0.35119524918874384,
            "unobservable_notional_pct": 0.018176413053635456,
            "unclear_notional_pct": 0.3693716622423793
          },
          "run_composition": {
            "retail_pct": 0.28429752066115704,
            "mixed_pct": 0.0,
            "instit_pct": 0.128099173553719,
            "ambiguous_pct": 0.4512396694214876,
            "unobservable_pct": 0.13636363636363635,
            "unclear_pct": 0.587603305785124,
            "retail_notional_pct": 0.018359754456448864,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.6122685833011718,
            "unclear_notional_pct": 0.3693716622423793
          },
          "counts": {
            "trades": {
              "retail": 502,
              "mixed": 0,
              "institutional": 5404,
              "ambiguous": 4339,
              "unobservable": 244,
              "unclear": 4583
            },
            "runs": {
              "retail": 344,
              "mixed": 0,
              "institutional": 155,
              "ambiguous": 546,
              "unobservable": 165,
              "unclear": 711
            }
          },
          "confidence": {
            "high": 0.12644628099173555,
            "medium": 0.1487603305785124,
            "low": 0.1371900826446281,
            "na": 0.587603305785124
          },
          "confidence_counts": {
            "high": 153,
            "medium": 180,
            "low": 166,
            "na": 711
          },
          "trade_confidence": {
            "high": 0.014586709886547812,
            "medium": 0.3522738106587854,
            "low": 0.19620554867003528,
            "na": 0.4369339307846315
          },
          "trade_confidence_counts": {
            "high": 153,
            "medium": 3695,
            "low": 2058,
            "na": 4583
          },
          "observability": {
            "avg_feature_coverage": 0.7664462809917356,
            "observable_run_pct": 0.8636363636363636,
            "ambiguous_run_pct": 0.4512396694214876,
            "unobservable_run_pct": 0.13636363636363635
          },
          "dominant_bucket": "AMBIGUOUS",
          "dominant_label": "Unclassified Flow",
          "dominant_share": 0.4512396694214876,
          "dominance_gap": 0.16694214876033053,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 10489
            },
            "d2_information": {
              "UNOBSERVABLE": 10489
            },
            "d3_urgency": {
              "IMMEDIATE": 942,
              "ADAPTIVE": 267,
              "SCHEDULED": 1
            },
            "participant_confidence": {
              "NA": 711,
              "MEDIUM": 180,
              "LOW": 166,
              "HIGH": 153
            }
          },
          "trade_size": {
            "avg": 191318.56229383164,
            "median": 55600.0
          },
          "run_size": {
            "avg": 1658463.140413223,
            "median": 274800.0,
            "avg_length": 8.668595041322314
          },
          "recent_trades": [
            {
              "trade_id": "10690",
              "timestamp": "2026-04-13T07:59:59.214040",
              "price": 138.9,
              "size": 400.0,
              "notional": 55560.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 241996,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "10689",
              "timestamp": "2026-04-13T07:59:59.210565",
              "price": 138.9,
              "size": 400.0,
              "notional": 55560.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 241996,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "10688",
              "timestamp": "2026-04-13T07:59:53.158855",
              "price": 138.8,
              "size": 400.0,
              "notional": 55520.00000000001,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 241995,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "10687",
              "timestamp": "2026-04-13T07:59:51.750996",
              "price": 138.8,
              "size": 400.0,
              "notional": 55520.00000000001,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 241995,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "10686",
              "timestamp": "2026-04-13T07:59:50.034414",
              "price": 138.8,
              "size": 1600.0,
              "notional": 222080.00000000003,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 241995,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "10685",
              "timestamp": "2026-04-13T07:59:50.032336",
              "price": 138.8,
              "size": 400.0,
              "notional": 55520.00000000001,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 241995,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "10684",
              "timestamp": "2026-04-13T07:59:49.656771",
              "price": 138.8,
              "size": 1200.0,
              "notional": 166560.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 241995,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "10683",
              "timestamp": "2026-04-13T07:59:49.476271",
              "price": 138.8,
              "size": 400.0,
              "notional": 55520.00000000001,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 241995,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "10682",
              "timestamp": "2026-04-13T07:59:47.897456",
              "price": 138.8,
              "size": 1200.0,
              "notional": 166560.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 241995,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "10681",
              "timestamp": "2026-04-13T07:59:47.658363",
              "price": 138.8,
              "size": 400.0,
              "notional": 55520.00000000001,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 241995,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "10680",
              "timestamp": "2026-04-13T07:59:47.321794",
              "price": 138.8,
              "size": 400.0,
              "notional": 55520.00000000001,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 241995,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "10679",
              "timestamp": "2026-04-13T07:59:46.765414",
              "price": 138.9,
              "size": 4400.0,
              "notional": 611160.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 241995,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "10678",
              "timestamp": "2026-04-13T07:59:45.884598",
              "price": 138.8,
              "size": 2800.0,
              "notional": 388640.00000000006,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 241995,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "10677",
              "timestamp": "2026-04-13T07:59:45.656986",
              "price": 138.8,
              "size": 400.0,
              "notional": 55520.00000000001,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 241995,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "10676",
              "timestamp": "2026-04-13T07:59:44.212767",
              "price": 138.9,
              "size": 800.0,
              "notional": 111120.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 241995,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "10675",
              "timestamp": "2026-04-13T07:59:43.656776",
              "price": 138.8,
              "size": 400.0,
              "notional": 55520.00000000001,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 241995,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "10674",
              "timestamp": "2026-04-13T07:59:41.657207",
              "price": 138.8,
              "size": 400.0,
              "notional": 55520.00000000001,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 241995,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "10673",
              "timestamp": "2026-04-13T07:59:40.092882",
              "price": 138.8,
              "size": 400.0,
              "notional": 55520.00000000001,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 241995,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "10672",
              "timestamp": "2026-04-13T07:59:39.657318",
              "price": 138.8,
              "size": 400.0,
              "notional": 55520.00000000001,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 241995,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "10671",
              "timestamp": "2026-04-13T07:59:37.656947",
              "price": 138.8,
              "size": 400.0,
              "notional": 55520.00000000001,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 241995,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "10670",
              "timestamp": "2026-04-13T07:59:36.575134",
              "price": 138.7,
              "size": 2000.0,
              "notional": 277400.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 241995,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "10669",
              "timestamp": "2026-04-13T07:59:35.657253",
              "price": 138.7,
              "size": 400.0,
              "notional": 55479.99999999999,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 241995,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "10668",
              "timestamp": "2026-04-13T07:59:34.787764",
              "price": 138.9,
              "size": 400.0,
              "notional": 55560.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 241995,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "10667",
              "timestamp": "2026-04-13T07:59:33.657323",
              "price": 138.7,
              "size": 400.0,
              "notional": 55479.99999999999,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 241995,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "10666",
              "timestamp": "2026-04-13T07:59:31.729187",
              "price": 138.7,
              "size": 400.0,
              "notional": 55479.99999999999,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 241995,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "10665",
              "timestamp": "2026-04-13T07:59:30.657431",
              "price": 138.7,
              "size": 400.0,
              "notional": 55479.99999999999,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 241995,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "10664",
              "timestamp": "2026-04-13T07:59:29.107528",
              "price": 138.8,
              "size": 400.0,
              "notional": 55520.00000000001,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 241995,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "10663",
              "timestamp": "2026-04-13T07:59:29.107528",
              "price": 138.8,
              "size": 800.0,
              "notional": 111040.00000000001,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 241995,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "10662",
              "timestamp": "2026-04-13T07:59:29.107528",
              "price": 138.8,
              "size": 400.0,
              "notional": 55520.00000000001,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 241995,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "10661",
              "timestamp": "2026-04-13T07:59:29.107528",
              "price": 138.8,
              "size": 400.0,
              "notional": 55520.00000000001,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 241995,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            }
          ],
          "peer_comparison": []
        },
        "30d": {
          "valid": true,
          "currency": "HKD",
          "n_trades": 265858,
          "n_runs": 25495,
          "n_trade_days": 21,
          "first_trade_date": "2026-03-11",
          "last_trade_date": "2026-04-13",
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
            "retail_pct": 0.03666242881538265,
            "mixed_pct": 0.0,
            "instit_pct": 0.5277253270542921,
            "ambiguous_pct": 0.40772517659803353,
            "unobservable_pct": 0.027887067532291674,
            "unclear_pct": 0.43561224413032523,
            "retail_qty_pct": 0.014944234251011766,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.6155348070364706,
            "ambiguous_qty_pct": 0.3496203607295363,
            "unobservable_qty_pct": 0.01990059798298144,
            "unclear_qty_pct": 0.3695209587125177,
            "retail_notional_pct": 0.0149348663793571,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.6171645542314096,
            "ambiguous_notional_pct": 0.34814859874927584,
            "unobservable_notional_pct": 0.019751980639957503,
            "unclear_notional_pct": 0.3679005793892333
          },
          "run_composition": {
            "retail_pct": 0.2263581094332222,
            "mixed_pct": 0.0,
            "instit_pct": 0.12429888213375172,
            "ambiguous_pct": 0.45581486565993334,
            "unobservable_pct": 0.19352814277309277,
            "unclear_pct": 0.6493430084330261,
            "retail_notional_pct": 0.0149348663793571,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.6171645542314096,
            "unclear_notional_pct": 0.3679005793892333
          },
          "counts": {
            "trades": {
              "retail": 9747,
              "mixed": 0,
              "institutional": 140300,
              "ambiguous": 108397,
              "unobservable": 7414,
              "unclear": 115811
            },
            "runs": {
              "retail": 5771,
              "mixed": 0,
              "institutional": 3169,
              "ambiguous": 11621,
              "unobservable": 4934,
              "unclear": 16555
            }
          },
          "confidence": {
            "high": 0.10162777015101,
            "medium": 0.1676407138654638,
            "low": 0.0813885075505001,
            "na": 0.6493430084330261
          },
          "confidence_counts": {
            "high": 2591,
            "medium": 4274,
            "low": 2075,
            "na": 16555
          },
          "trade_confidence": {
            "high": 0.014910215227677933,
            "medium": 0.43434088874511956,
            "low": 0.11513665189687727,
            "na": 0.43561224413032523
          },
          "trade_confidence_counts": {
            "high": 3964,
            "medium": 115473,
            "low": 30610,
            "na": 115811
          },
          "observability": {
            "avg_feature_coverage": 0.7469444989213571,
            "observable_run_pct": 0.8064718572269072,
            "ambiguous_run_pct": 0.45581486565993334,
            "unobservable_run_pct": 0.19352814277309277
          },
          "dominant_bucket": "AMBIGUOUS",
          "dominant_label": "Unclassified Flow",
          "dominant_share": 0.45581486565993334,
          "dominance_gap": 0.22945675622671113,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 265858
            },
            "d2_information": {
              "UNOBSERVABLE": 265858
            },
            "d3_urgency": {
              "IMMEDIATE": 19017,
              "ADAPTIVE": 6442,
              "SCHEDULED": 27,
              "OPPORTUNISTIC": 9
            },
            "participant_confidence": {
              "NA": 16555,
              "MEDIUM": 4274,
              "HIGH": 2591,
              "LOW": 2075
            }
          },
          "trade_size": {
            "avg": 180342.6206624589,
            "median": 55560.0
          },
          "run_size": {
            "avg": 1880585.5439921555,
            "median": 277800.0,
            "avg_length": 10.427848597764267
          },
          "recent_trades": [
            {
              "trade_id": "10690",
              "timestamp": "2026-04-13T07:59:59.214040",
              "price": 138.9,
              "size": 400.0,
              "notional": 55560.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 241996,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "10689",
              "timestamp": "2026-04-13T07:59:59.210565",
              "price": 138.9,
              "size": 400.0,
              "notional": 55560.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 241996,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "10688",
              "timestamp": "2026-04-13T07:59:53.158855",
              "price": 138.8,
              "size": 400.0,
              "notional": 55520.00000000001,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 241995,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "10687",
              "timestamp": "2026-04-13T07:59:51.750996",
              "price": 138.8,
              "size": 400.0,
              "notional": 55520.00000000001,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 241995,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "10686",
              "timestamp": "2026-04-13T07:59:50.034414",
              "price": 138.8,
              "size": 1600.0,
              "notional": 222080.00000000003,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 241995,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "10685",
              "timestamp": "2026-04-13T07:59:50.032336",
              "price": 138.8,
              "size": 400.0,
              "notional": 55520.00000000001,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 241995,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "10684",
              "timestamp": "2026-04-13T07:59:49.656771",
              "price": 138.8,
              "size": 1200.0,
              "notional": 166560.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 241995,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "10683",
              "timestamp": "2026-04-13T07:59:49.476271",
              "price": 138.8,
              "size": 400.0,
              "notional": 55520.00000000001,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 241995,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "10682",
              "timestamp": "2026-04-13T07:59:47.897456",
              "price": 138.8,
              "size": 1200.0,
              "notional": 166560.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 241995,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "10681",
              "timestamp": "2026-04-13T07:59:47.658363",
              "price": 138.8,
              "size": 400.0,
              "notional": 55520.00000000001,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 241995,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "10680",
              "timestamp": "2026-04-13T07:59:47.321794",
              "price": 138.8,
              "size": 400.0,
              "notional": 55520.00000000001,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 241995,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "10679",
              "timestamp": "2026-04-13T07:59:46.765414",
              "price": 138.9,
              "size": 4400.0,
              "notional": 611160.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 241995,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "10678",
              "timestamp": "2026-04-13T07:59:45.884598",
              "price": 138.8,
              "size": 2800.0,
              "notional": 388640.00000000006,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 241995,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "10677",
              "timestamp": "2026-04-13T07:59:45.656986",
              "price": 138.8,
              "size": 400.0,
              "notional": 55520.00000000001,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 241995,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "10676",
              "timestamp": "2026-04-13T07:59:44.212767",
              "price": 138.9,
              "size": 800.0,
              "notional": 111120.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 241995,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "10675",
              "timestamp": "2026-04-13T07:59:43.656776",
              "price": 138.8,
              "size": 400.0,
              "notional": 55520.00000000001,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 241995,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "10674",
              "timestamp": "2026-04-13T07:59:41.657207",
              "price": 138.8,
              "size": 400.0,
              "notional": 55520.00000000001,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 241995,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "10673",
              "timestamp": "2026-04-13T07:59:40.092882",
              "price": 138.8,
              "size": 400.0,
              "notional": 55520.00000000001,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 241995,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "10672",
              "timestamp": "2026-04-13T07:59:39.657318",
              "price": 138.8,
              "size": 400.0,
              "notional": 55520.00000000001,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 241995,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "10671",
              "timestamp": "2026-04-13T07:59:37.656947",
              "price": 138.8,
              "size": 400.0,
              "notional": 55520.00000000001,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 241995,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "10670",
              "timestamp": "2026-04-13T07:59:36.575134",
              "price": 138.7,
              "size": 2000.0,
              "notional": 277400.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 241995,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "10669",
              "timestamp": "2026-04-13T07:59:35.657253",
              "price": 138.7,
              "size": 400.0,
              "notional": 55479.99999999999,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 241995,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "10668",
              "timestamp": "2026-04-13T07:59:34.787764",
              "price": 138.9,
              "size": 400.0,
              "notional": 55560.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 241995,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "10667",
              "timestamp": "2026-04-13T07:59:33.657323",
              "price": 138.7,
              "size": 400.0,
              "notional": 55479.99999999999,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 241995,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "10666",
              "timestamp": "2026-04-13T07:59:31.729187",
              "price": 138.7,
              "size": 400.0,
              "notional": 55479.99999999999,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 241995,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "10665",
              "timestamp": "2026-04-13T07:59:30.657431",
              "price": 138.7,
              "size": 400.0,
              "notional": 55479.99999999999,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 241995,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "10664",
              "timestamp": "2026-04-13T07:59:29.107528",
              "price": 138.8,
              "size": 400.0,
              "notional": 55520.00000000001,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 241995,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "10663",
              "timestamp": "2026-04-13T07:59:29.107528",
              "price": 138.8,
              "size": 800.0,
              "notional": 111040.00000000001,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 241995,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "10662",
              "timestamp": "2026-04-13T07:59:29.107528",
              "price": 138.8,
              "size": 400.0,
              "notional": 55520.00000000001,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 241995,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "10661",
              "timestamp": "2026-04-13T07:59:29.107528",
              "price": 138.8,
              "size": 400.0,
              "notional": 55520.00000000001,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 241995,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            }
          ],
          "peer_comparison": []
        },
        "3m": {
          "valid": true,
          "currency": "HKD",
          "n_trades": 713908,
          "n_runs": 76494,
          "n_trade_days": 63,
          "first_trade_date": "2026-01-07",
          "last_trade_date": "2026-04-13",
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
            "retail_pct": 0.03632821035763712,
            "mixed_pct": 0.0,
            "instit_pct": 0.5322674630344526,
            "ambiguous_pct": 0.3978215680451823,
            "unobservable_pct": 0.03358275856272797,
            "unclear_pct": 0.4314043266079103,
            "retail_qty_pct": 0.01506452509402825,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.6316995183807013,
            "ambiguous_qty_pct": 0.3315511813636722,
            "unobservable_qty_pct": 0.021684775161598304,
            "unclear_qty_pct": 0.35323595652527046,
            "retail_notional_pct": 0.015030084155058427,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.6328260925164148,
            "ambiguous_notional_pct": 0.33064577998473643,
            "unobservable_notional_pct": 0.021498043343790373,
            "unclear_notional_pct": 0.3521438233285268
          },
          "run_composition": {
            "retail_pct": 0.20851308599367271,
            "mixed_pct": 0.0,
            "instit_pct": 0.12232331947603733,
            "ambiguous_pct": 0.4473684210526316,
            "unobservable_pct": 0.22179517347765837,
            "unclear_pct": 0.66916359453029,
            "retail_notional_pct": 0.015030084155058427,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.6328260925164148,
            "unclear_notional_pct": 0.3521438233285268
          },
          "counts": {
            "trades": {
              "retail": 25935,
              "mixed": 0,
              "institutional": 379990,
              "ambiguous": 284008,
              "unobservable": 23975,
              "unclear": 307983
            },
            "runs": {
              "retail": 15950,
              "mixed": 0,
              "institutional": 9357,
              "ambiguous": 34221,
              "unobservable": 16966,
              "unclear": 51187
            }
          },
          "confidence": {
            "high": 0.09536695688550736,
            "medium": 0.16448348890109027,
            "low": 0.0709859596831124,
            "na": 0.66916359453029
          },
          "confidence_counts": {
            "high": 7295,
            "medium": 12582,
            "low": 5430,
            "na": 51187
          },
          "trade_confidence": {
            "high": 0.03393154299993837,
            "medium": 0.4234607260319257,
            "low": 0.11120340436022569,
            "na": 0.4314043266079103
          },
          "trade_confidence_counts": {
            "high": 24224,
            "medium": 302312,
            "low": 79389,
            "na": 307983
          },
          "observability": {
            "avg_feature_coverage": 0.7386350563442885,
            "observable_run_pct": 0.7782048265223416,
            "ambiguous_run_pct": 0.4473684210526316,
            "unobservable_run_pct": 0.22179517347765837
          },
          "dominant_bucket": "AMBIGUOUS",
          "dominant_label": "Unclassified Flow",
          "dominant_share": 0.4473684210526316,
          "dominance_gap": 0.2255732475749732,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 713908
            },
            "d2_information": {
              "UNOBSERVABLE": 713908
            },
            "d3_urgency": {
              "IMMEDIATE": 58108,
              "ADAPTIVE": 18275,
              "SCHEDULED": 89,
              "OPPORTUNISTIC": 22
            },
            "participant_confidence": {
              "NA": 51187,
              "MEDIUM": 12582,
              "HIGH": 7295,
              "LOW": 5430
            }
          },
          "trade_size": {
            "avg": 183635.62383693695,
            "median": 56320.00000000001
          },
          "run_size": {
            "avg": 1713846.0656022695,
            "median": 251400.0,
            "avg_length": 9.332862708186264
          },
          "recent_trades": [
            {
              "trade_id": "10690",
              "timestamp": "2026-04-13T07:59:59.214040",
              "price": 138.9,
              "size": 400.0,
              "notional": 55560.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 241996,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "10689",
              "timestamp": "2026-04-13T07:59:59.210565",
              "price": 138.9,
              "size": 400.0,
              "notional": 55560.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 241996,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "10688",
              "timestamp": "2026-04-13T07:59:53.158855",
              "price": 138.8,
              "size": 400.0,
              "notional": 55520.00000000001,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 241995,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "10687",
              "timestamp": "2026-04-13T07:59:51.750996",
              "price": 138.8,
              "size": 400.0,
              "notional": 55520.00000000001,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 241995,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "10686",
              "timestamp": "2026-04-13T07:59:50.034414",
              "price": 138.8,
              "size": 1600.0,
              "notional": 222080.00000000003,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 241995,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "10685",
              "timestamp": "2026-04-13T07:59:50.032336",
              "price": 138.8,
              "size": 400.0,
              "notional": 55520.00000000001,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 241995,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "10684",
              "timestamp": "2026-04-13T07:59:49.656771",
              "price": 138.8,
              "size": 1200.0,
              "notional": 166560.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 241995,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "10683",
              "timestamp": "2026-04-13T07:59:49.476271",
              "price": 138.8,
              "size": 400.0,
              "notional": 55520.00000000001,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 241995,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "10682",
              "timestamp": "2026-04-13T07:59:47.897456",
              "price": 138.8,
              "size": 1200.0,
              "notional": 166560.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 241995,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "10681",
              "timestamp": "2026-04-13T07:59:47.658363",
              "price": 138.8,
              "size": 400.0,
              "notional": 55520.00000000001,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 241995,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "10680",
              "timestamp": "2026-04-13T07:59:47.321794",
              "price": 138.8,
              "size": 400.0,
              "notional": 55520.00000000001,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 241995,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "10679",
              "timestamp": "2026-04-13T07:59:46.765414",
              "price": 138.9,
              "size": 4400.0,
              "notional": 611160.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 241995,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "10678",
              "timestamp": "2026-04-13T07:59:45.884598",
              "price": 138.8,
              "size": 2800.0,
              "notional": 388640.00000000006,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 241995,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "10677",
              "timestamp": "2026-04-13T07:59:45.656986",
              "price": 138.8,
              "size": 400.0,
              "notional": 55520.00000000001,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 241995,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "10676",
              "timestamp": "2026-04-13T07:59:44.212767",
              "price": 138.9,
              "size": 800.0,
              "notional": 111120.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 241995,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "10675",
              "timestamp": "2026-04-13T07:59:43.656776",
              "price": 138.8,
              "size": 400.0,
              "notional": 55520.00000000001,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 241995,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "10674",
              "timestamp": "2026-04-13T07:59:41.657207",
              "price": 138.8,
              "size": 400.0,
              "notional": 55520.00000000001,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 241995,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "10673",
              "timestamp": "2026-04-13T07:59:40.092882",
              "price": 138.8,
              "size": 400.0,
              "notional": 55520.00000000001,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 241995,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "10672",
              "timestamp": "2026-04-13T07:59:39.657318",
              "price": 138.8,
              "size": 400.0,
              "notional": 55520.00000000001,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 241995,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "10671",
              "timestamp": "2026-04-13T07:59:37.656947",
              "price": 138.8,
              "size": 400.0,
              "notional": 55520.00000000001,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 241995,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "10670",
              "timestamp": "2026-04-13T07:59:36.575134",
              "price": 138.7,
              "size": 2000.0,
              "notional": 277400.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 241995,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "10669",
              "timestamp": "2026-04-13T07:59:35.657253",
              "price": 138.7,
              "size": 400.0,
              "notional": 55479.99999999999,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 241995,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "10668",
              "timestamp": "2026-04-13T07:59:34.787764",
              "price": 138.9,
              "size": 400.0,
              "notional": 55560.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 241995,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "10667",
              "timestamp": "2026-04-13T07:59:33.657323",
              "price": 138.7,
              "size": 400.0,
              "notional": 55479.99999999999,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 241995,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "10666",
              "timestamp": "2026-04-13T07:59:31.729187",
              "price": 138.7,
              "size": 400.0,
              "notional": 55479.99999999999,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 241995,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "10665",
              "timestamp": "2026-04-13T07:59:30.657431",
              "price": 138.7,
              "size": 400.0,
              "notional": 55479.99999999999,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 241995,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "10664",
              "timestamp": "2026-04-13T07:59:29.107528",
              "price": 138.8,
              "size": 400.0,
              "notional": 55520.00000000001,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 241995,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "10663",
              "timestamp": "2026-04-13T07:59:29.107528",
              "price": 138.8,
              "size": 800.0,
              "notional": 111040.00000000001,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 241995,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "10662",
              "timestamp": "2026-04-13T07:59:29.107528",
              "price": 138.8,
              "size": 400.0,
              "notional": 55520.00000000001,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 241995,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "10661",
              "timestamp": "2026-04-13T07:59:29.107528",
              "price": 138.8,
              "size": 400.0,
              "notional": 55520.00000000001,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 241995,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            }
          ],
          "peer_comparison": []
        },
        "6m": {
          "valid": true,
          "currency": "HKD",
          "n_trades": 1258161,
          "n_runs": 149724,
          "n_trade_days": 126,
          "first_trade_date": "2025-09-24",
          "last_trade_date": "2026-04-13",
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
            "retail_pct": 0.04180228126607008,
            "mixed_pct": 0.0,
            "instit_pct": 0.5081877438579006,
            "ambiguous_pct": 0.4148769513599611,
            "unobservable_pct": 0.03513302351606829,
            "unclear_pct": 0.4500099748760294,
            "retail_qty_pct": 0.017219770348932413,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.6075454026574274,
            "ambiguous_qty_pct": 0.35357654237075276,
            "unobservable_qty_pct": 0.021658284622887467,
            "unclear_qty_pct": 0.37523482699364025,
            "retail_notional_pct": 0.017024897265875607,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.6105710191842737,
            "ambiguous_notional_pct": 0.350812415483009,
            "unobservable_notional_pct": 0.02159166806684173,
            "unclear_notional_pct": 0.3724040835498507
          },
          "run_composition": {
            "retail_pct": 0.23157276054607143,
            "mixed_pct": 0.0,
            "instit_pct": 0.10726403248644172,
            "ambiguous_pct": 0.4478440330207582,
            "unobservable_pct": 0.21331917394672864,
            "unclear_pct": 0.6611632069674869,
            "retail_notional_pct": 0.017024897265875607,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.6105710191842737,
            "unclear_notional_pct": 0.3724040835498507
          },
          "counts": {
            "trades": {
              "retail": 52594,
              "mixed": 0,
              "institutional": 639382,
              "ambiguous": 521982,
              "unobservable": 44203,
              "unclear": 566185
            },
            "runs": {
              "retail": 34672,
              "mixed": 0,
              "institutional": 16060,
              "ambiguous": 67053,
              "unobservable": 31939,
              "unclear": 98992
            }
          },
          "confidence": {
            "high": 0.10475942400683926,
            "medium": 0.16184446047393872,
            "low": 0.0722329085517352,
            "na": 0.6611632069674869
          },
          "confidence_counts": {
            "high": 15685,
            "medium": 24232,
            "low": 10815,
            "na": 98992
          },
          "trade_confidence": {
            "high": 0.030971393963093754,
            "medium": 0.4013158888250391,
            "low": 0.11770274233583779,
            "na": 0.4500099748760294
          },
          "trade_confidence_counts": {
            "high": 38967,
            "medium": 504920,
            "low": 148089,
            "na": 566185
          },
          "observability": {
            "avg_feature_coverage": 0.739919451791296,
            "observable_run_pct": 0.7866808260532714,
            "ambiguous_run_pct": 0.4478440330207582,
            "unobservable_run_pct": 0.21331917394672864
          },
          "dominant_bucket": "AMBIGUOUS",
          "dominant_label": "Unclassified Flow",
          "dominant_share": 0.4478440330207582,
          "dominance_gap": 0.21627127247468678,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 1258161
            },
            "d2_information": {
              "UNOBSERVABLE": 1258161
            },
            "d3_urgency": {
              "IMMEDIATE": 117082,
              "ADAPTIVE": 32477,
              "SCHEDULED": 130,
              "OPPORTUNISTIC": 35
            },
            "participant_confidence": {
              "NA": 98992,
              "MEDIUM": 24232,
              "HIGH": 15685,
              "LOW": 10815
            }
          },
          "trade_size": {
            "avg": 184309.7818986807,
            "median": 56679.99999999999
          },
          "run_size": {
            "avg": 1548792.3078693196,
            "median": 214852.5,
            "avg_length": 8.403201891480323
          },
          "recent_trades": [
            {
              "trade_id": "10690",
              "timestamp": "2026-04-13T07:59:59.214040",
              "price": 138.9,
              "size": 400.0,
              "notional": 55560.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 241996,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "10689",
              "timestamp": "2026-04-13T07:59:59.210565",
              "price": 138.9,
              "size": 400.0,
              "notional": 55560.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 241996,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "10688",
              "timestamp": "2026-04-13T07:59:53.158855",
              "price": 138.8,
              "size": 400.0,
              "notional": 55520.00000000001,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 241995,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "10687",
              "timestamp": "2026-04-13T07:59:51.750996",
              "price": 138.8,
              "size": 400.0,
              "notional": 55520.00000000001,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 241995,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "10686",
              "timestamp": "2026-04-13T07:59:50.034414",
              "price": 138.8,
              "size": 1600.0,
              "notional": 222080.00000000003,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 241995,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "10685",
              "timestamp": "2026-04-13T07:59:50.032336",
              "price": 138.8,
              "size": 400.0,
              "notional": 55520.00000000001,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 241995,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "10684",
              "timestamp": "2026-04-13T07:59:49.656771",
              "price": 138.8,
              "size": 1200.0,
              "notional": 166560.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 241995,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "10683",
              "timestamp": "2026-04-13T07:59:49.476271",
              "price": 138.8,
              "size": 400.0,
              "notional": 55520.00000000001,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 241995,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "10682",
              "timestamp": "2026-04-13T07:59:47.897456",
              "price": 138.8,
              "size": 1200.0,
              "notional": 166560.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 241995,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "10681",
              "timestamp": "2026-04-13T07:59:47.658363",
              "price": 138.8,
              "size": 400.0,
              "notional": 55520.00000000001,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 241995,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "10680",
              "timestamp": "2026-04-13T07:59:47.321794",
              "price": 138.8,
              "size": 400.0,
              "notional": 55520.00000000001,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 241995,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "10679",
              "timestamp": "2026-04-13T07:59:46.765414",
              "price": 138.9,
              "size": 4400.0,
              "notional": 611160.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 241995,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "10678",
              "timestamp": "2026-04-13T07:59:45.884598",
              "price": 138.8,
              "size": 2800.0,
              "notional": 388640.00000000006,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 241995,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "10677",
              "timestamp": "2026-04-13T07:59:45.656986",
              "price": 138.8,
              "size": 400.0,
              "notional": 55520.00000000001,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 241995,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "10676",
              "timestamp": "2026-04-13T07:59:44.212767",
              "price": 138.9,
              "size": 800.0,
              "notional": 111120.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 241995,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "10675",
              "timestamp": "2026-04-13T07:59:43.656776",
              "price": 138.8,
              "size": 400.0,
              "notional": 55520.00000000001,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 241995,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "10674",
              "timestamp": "2026-04-13T07:59:41.657207",
              "price": 138.8,
              "size": 400.0,
              "notional": 55520.00000000001,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 241995,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "10673",
              "timestamp": "2026-04-13T07:59:40.092882",
              "price": 138.8,
              "size": 400.0,
              "notional": 55520.00000000001,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 241995,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "10672",
              "timestamp": "2026-04-13T07:59:39.657318",
              "price": 138.8,
              "size": 400.0,
              "notional": 55520.00000000001,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 241995,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "10671",
              "timestamp": "2026-04-13T07:59:37.656947",
              "price": 138.8,
              "size": 400.0,
              "notional": 55520.00000000001,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 241995,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "10670",
              "timestamp": "2026-04-13T07:59:36.575134",
              "price": 138.7,
              "size": 2000.0,
              "notional": 277400.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 241995,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "10669",
              "timestamp": "2026-04-13T07:59:35.657253",
              "price": 138.7,
              "size": 400.0,
              "notional": 55479.99999999999,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 241995,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "10668",
              "timestamp": "2026-04-13T07:59:34.787764",
              "price": 138.9,
              "size": 400.0,
              "notional": 55560.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 241995,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "10667",
              "timestamp": "2026-04-13T07:59:33.657323",
              "price": 138.7,
              "size": 400.0,
              "notional": 55479.99999999999,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 241995,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "10666",
              "timestamp": "2026-04-13T07:59:31.729187",
              "price": 138.7,
              "size": 400.0,
              "notional": 55479.99999999999,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 241995,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "10665",
              "timestamp": "2026-04-13T07:59:30.657431",
              "price": 138.7,
              "size": 400.0,
              "notional": 55479.99999999999,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 241995,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "10664",
              "timestamp": "2026-04-13T07:59:29.107528",
              "price": 138.8,
              "size": 400.0,
              "notional": 55520.00000000001,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 241995,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "10663",
              "timestamp": "2026-04-13T07:59:29.107528",
              "price": 138.8,
              "size": 800.0,
              "notional": 111040.00000000001,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 241995,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "10662",
              "timestamp": "2026-04-13T07:59:29.107528",
              "price": 138.8,
              "size": 400.0,
              "notional": 55520.00000000001,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 241995,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "10661",
              "timestamp": "2026-04-13T07:59:29.107528",
              "price": 138.8,
              "size": 400.0,
              "notional": 55520.00000000001,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 241995,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            }
          ],
          "peer_comparison": []
        }
      },
      "valid": true,
      "currency": "HKD",
      "n_trades": 1258161,
      "n_runs": 149724,
      "n_trade_days": 126,
      "first_trade_date": "2025-09-24",
      "last_trade_date": "2026-04-13",
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
        "retail_pct": 0.04180228126607008,
        "mixed_pct": 0.0,
        "instit_pct": 0.5081877438579006,
        "ambiguous_pct": 0.4148769513599611,
        "unobservable_pct": 0.03513302351606829,
        "unclear_pct": 0.4500099748760294,
        "retail_qty_pct": 0.017219770348932413,
        "mixed_qty_pct": 0.0,
        "instit_qty_pct": 0.6075454026574274,
        "ambiguous_qty_pct": 0.35357654237075276,
        "unobservable_qty_pct": 0.021658284622887467,
        "unclear_qty_pct": 0.37523482699364025,
        "retail_notional_pct": 0.017024897265875607,
        "mixed_notional_pct": 0.0,
        "instit_notional_pct": 0.6105710191842737,
        "ambiguous_notional_pct": 0.350812415483009,
        "unobservable_notional_pct": 0.02159166806684173,
        "unclear_notional_pct": 0.3724040835498507
      },
      "run_composition": {
        "retail_pct": 0.23157276054607143,
        "mixed_pct": 0.0,
        "instit_pct": 0.10726403248644172,
        "ambiguous_pct": 0.4478440330207582,
        "unobservable_pct": 0.21331917394672864,
        "unclear_pct": 0.6611632069674869
      },
      "trade_size": {
        "avg": 184309.7818986807,
        "median": 56679.99999999999
      },
      "run_size": {
        "avg": 1548792.3078693196,
        "median": 214852.5,
        "avg_length": 8.403201891480323
      },
      "confidence": {
        "high": 0.10475942400683926,
        "medium": 0.16184446047393872,
        "low": 0.0722329085517352,
        "na": 0.6611632069674869
      },
      "confidence_counts": {
        "high": 15685,
        "medium": 24232,
        "low": 10815,
        "na": 98992
      },
      "trade_confidence": {
        "high": 0.030971393963093754,
        "medium": 0.4013158888250391,
        "low": 0.11770274233583779,
        "na": 0.4500099748760294
      },
      "trade_confidence_counts": {
        "high": 38967,
        "medium": 504920,
        "low": 148089,
        "na": 566185
      },
      "counts": {
        "trades": {
          "retail": 52594,
          "mixed": 0,
          "institutional": 639382,
          "ambiguous": 521982,
          "unobservable": 44203,
          "unclear": 566185
        },
        "runs": {
          "retail": 34672,
          "mixed": 0,
          "institutional": 16060,
          "ambiguous": 67053,
          "unobservable": 31939,
          "unclear": 98992
        }
      },
      "observability": {
        "avg_feature_coverage": 0.739919451791296,
        "observable_run_pct": 0.7866808260532714,
        "ambiguous_run_pct": 0.4478440330207582,
        "unobservable_run_pct": 0.21331917394672864
      },
      "dominant_bucket": "AMBIGUOUS",
      "dominant_label": "Unclassified Flow",
      "dominant_share": 0.4478440330207582,
      "dominance_gap": 0.21627127247468678,
      "over_time": {
        "valid": true,
        "periods": [
          {
            "month": "2025-11",
            "n_trades": 130529,
            "n_runs": 23891,
            "retail_pct": 0.05661577120793081,
            "mixed_pct": 0.0,
            "instit_pct": 0.41403059856430374,
            "ambiguous_pct": 0.47443096936313,
            "unobservable_pct": 0.054922660864635445,
            "unclear_pct": 0.5293536302277655,
            "avg_trade_size": 175062.38785633844,
            "avg_run_notional": 956457.1773680466,
            "retail_qty_pct": 0.022354753475751228,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.5457940844941518,
            "ambiguous_qty_pct": 0.39786715828777014,
            "unobservable_qty_pct": 0.03398400374232682,
            "unclear_qty_pct": 0.43185116203009694,
            "retail_notional_pct": 0.022326726968592604,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.5460371633708501,
            "ambiguous_notional_pct": 0.3976647256506918,
            "unobservable_notional_pct": 0.033971384009865574,
            "unclear_notional_pct": 0.4316361096605573,
            "run_retail_pct": 0.24867104767485665,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.09384286969988699,
            "run_ambiguous_pct": 0.44037503662467037,
            "run_unobservable_pct": 0.217111046000586,
            "run_unclear_pct": 0.6574860826252564,
            "avg_feature_coverage": 0.7361956385249676,
            "high_confidence_pct": 0.11493867983759574,
            "medium_confidence_pct": 0.15436775354736093,
            "low_confidence_pct": 0.07320748398978695,
            "na_confidence_pct": 0.6574860826252563,
            "total_quantity": null
          },
          {
            "month": "2025-12",
            "n_trades": 119348,
            "n_runs": 16945,
            "retail_pct": 0.04892415457318095,
            "mixed_pct": 0.0,
            "instit_pct": 0.5001508194523578,
            "ambiguous_pct": 0.41113382712739216,
            "unobservable_pct": 0.039791198847069074,
            "unclear_pct": 0.4509250259744612,
            "avg_trade_size": 187246.7599983745,
            "avg_run_notional": 1318827.1650803187,
            "retail_qty_pct": 0.021067765079017454,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.6098390447624753,
            "ambiguous_qty_pct": 0.34829796652754363,
            "unobservable_qty_pct": 0.020795223630963606,
            "unclear_qty_pct": 0.3690931901585072,
            "retail_notional_pct": 0.021028172188778133,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.6099638806562668,
            "ambiguous_notional_pct": 0.3483071457760718,
            "unobservable_notional_pct": 0.020700801378883263,
            "unclear_notional_pct": 0.36900794715495505,
            "run_retail_pct": 0.23865447034523457,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.1055768663322514,
            "run_ambiguous_pct": 0.44024786072587785,
            "run_unobservable_pct": 0.21552080259663617,
            "run_unclear_pct": 0.655768663322514,
            "avg_feature_coverage": 0.738967246975509,
            "high_confidence_pct": 0.10362938920035408,
            "medium_confidence_pct": 0.16299793449395103,
            "low_confidence_pct": 0.07760401298318088,
            "na_confidence_pct": 0.655768663322514,
            "total_quantity": null
          },
          {
            "month": "2026-01",
            "n_trades": 171594,
            "n_runs": 26776,
            "retail_pct": 0.04277538841684441,
            "mixed_pct": 0.0,
            "instit_pct": 0.4834726155926198,
            "ambiguous_pct": 0.42125016026201384,
            "unobservable_pct": 0.052501835728521976,
            "unclear_pct": 0.4737519959905358,
            "avg_trade_size": 177200.0671777568,
            "avg_run_notional": 1135586.6569801315,
            "retail_qty_pct": 0.018753089382694963,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.6100044508983486,
            "ambiguous_qty_pct": 0.340346004210495,
            "unobservable_qty_pct": 0.03089645550846136,
            "unclear_qty_pct": 0.37124245971895636,
            "retail_notional_pct": 0.01878386719075824,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.6093990804141961,
            "ambiguous_notional_pct": 0.34113309581195483,
            "unobservable_notional_pct": 0.03068395658309084,
            "unclear_notional_pct": 0.3718170523950457,
            "run_retail_pct": 0.19207499253062443,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.11741858380639379,
            "run_ambiguous_pct": 0.43322378249178367,
            "run_unobservable_pct": 0.2572826411711981,
            "run_unclear_pct": 0.6905064236629818,
            "avg_feature_coverage": 0.7287010755900806,
            "high_confidence_pct": 0.10483268598745145,
            "medium_confidence_pct": 0.14826710487003286,
            "low_confidence_pct": 0.056393785479533914,
            "na_confidence_pct": 0.6905064236629818,
            "total_quantity": null
          },
          {
            "month": "2026-02",
            "n_trades": 174154,
            "n_runs": 19847,
            "retail_pct": 0.03211525431514636,
            "mixed_pct": 0.0,
            "instit_pct": 0.5500246907909092,
            "ambiguous_pct": 0.38161052861260725,
            "unobservable_pct": 0.03624952628133721,
            "unclear_pct": 0.41786005489394445,
            "avg_trade_size": 198338.99321520035,
            "avg_run_notional": 1740390.438071245,
            "retail_qty_pct": 0.012202910328618423,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.6638284465131539,
            "ambiguous_qty_pct": 0.3025095179581183,
            "unobservable_qty_pct": 0.02145912520010943,
            "unclear_qty_pct": 0.32396864315822776,
            "retail_notional_pct": 0.012200768104454822,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.6645636197513042,
            "ambiguous_notional_pct": 0.301905523624432,
            "unobservable_notional_pct": 0.02133008851980889,
            "unclear_notional_pct": 0.3232356121442409,
            "run_retail_pct": 0.1981659696679599,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.12193278581145765,
            "run_ambiguous_pct": 0.45195747468131203,
            "run_unobservable_pct": 0.22794376983927042,
            "run_unclear_pct": 0.6799012445205824,
            "avg_feature_coverage": 0.7331637023227693,
            "high_confidence_pct": 0.08762029525872927,
            "medium_confidence_pct": 0.1709578273794528,
            "low_confidence_pct": 0.06152063284123545,
            "na_confidence_pct": 0.6799012445205824,
            "total_quantity": null
          },
          {
            "month": "2026-03",
            "n_trades": 309382,
            "n_runs": 26591,
            "retail_pct": 0.03673129012030435,
            "mixed_pct": 0.0,
            "instit_pct": 0.5243582367429263,
            "ambiguous_pct": 0.41351791636229646,
            "unobservable_pct": 0.025392556774472982,
            "unclear_pct": 0.43891047313676945,
            "avg_trade_size": 175158.89463249317,
            "avg_run_notional": 2037945.5131130836,
            "retail_qty_pct": 0.015640509319784227,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.6071164299997984,
            "ambiguous_qty_pct": 0.3587747182345252,
            "unobservable_qty_pct": 0.018468342445892145,
            "unclear_qty_pct": 0.37724306068041735,
            "retail_notional_pct": 0.015653043288440208,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.6076199315594102,
            "ambiguous_notional_pct": 0.35837483795730407,
            "unobservable_notional_pct": 0.01835218719484553,
            "unclear_notional_pct": 0.3767270251521496,
            "run_retail_pct": 0.22330863826106578,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.12237223120604716,
            "run_ambiguous_pct": 0.4598548381031176,
            "run_unobservable_pct": 0.19446429242976948,
            "run_unclear_pct": 0.654319130532887,
            "avg_feature_coverage": 0.7487213718927457,
            "high_confidence_pct": 0.09074498890602084,
            "medium_confidence_pct": 0.17340453536910985,
            "low_confidence_pct": 0.08153134519198225,
            "na_confidence_pct": 0.654319130532887,
            "total_quantity": null
          },
          {
            "month": "2026-04",
            "n_trades": 86831,
            "n_runs": 7146,
            "retail_pct": 0.035114187329410004,
            "mixed_pct": 0.0,
            "instit_pct": 0.6027340465962617,
            "ambiguous_pct": 0.34191705727217236,
            "unobservable_pct": 0.02023470880215591,
            "unclear_pct": 0.36215176607432825,
            "avg_trade_size": 193820.0868801465,
            "avg_run_notional": 2355106.6280282675,
            "retail_qty_pct": 0.01382373763197755,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.6783277697280166,
            "ambiguous_qty_pct": 0.2934654253186291,
            "unobservable_qty_pct": 0.014383067321376822,
            "unclear_qty_pct": 0.30784849264000597,
            "retail_notional_pct": 0.013871949195257739,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.6784007279491416,
            "ambiguous_notional_pct": 0.29354539129646895,
            "unobservable_notional_pct": 0.01418193155913165,
            "unclear_notional_pct": 0.3077273228556006,
            "run_retail_pct": 0.2661628883291352,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.13266162888329136,
            "run_ambiguous_pct": 0.4445843828715365,
            "run_unobservable_pct": 0.15659109991603695,
            "run_unclear_pct": 0.6011754827875735,
            "avg_feature_coverage": 0.7586272040302267,
            "high_confidence_pct": 0.11950741673663588,
            "medium_confidence_pct": 0.16526728239574587,
            "low_confidence_pct": 0.11404981808004477,
            "na_confidence_pct": 0.6011754827875735,
            "total_quantity": null
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
      "recent_trades": [
        {
          "trade_id": "10690",
          "timestamp": "2026-04-13T07:59:59.214040",
          "price": 138.9,
          "size": 400.0,
          "notional": 55560.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 241996,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "10689",
          "timestamp": "2026-04-13T07:59:59.210565",
          "price": 138.9,
          "size": 400.0,
          "notional": 55560.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 241996,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "10688",
          "timestamp": "2026-04-13T07:59:53.158855",
          "price": 138.8,
          "size": 400.0,
          "notional": 55520.00000000001,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 241995,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "ADAPTIVE"
        },
        {
          "trade_id": "10687",
          "timestamp": "2026-04-13T07:59:51.750996",
          "price": 138.8,
          "size": 400.0,
          "notional": 55520.00000000001,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 241995,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "ADAPTIVE"
        },
        {
          "trade_id": "10686",
          "timestamp": "2026-04-13T07:59:50.034414",
          "price": 138.8,
          "size": 1600.0,
          "notional": 222080.00000000003,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 241995,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "ADAPTIVE"
        },
        {
          "trade_id": "10685",
          "timestamp": "2026-04-13T07:59:50.032336",
          "price": 138.8,
          "size": 400.0,
          "notional": 55520.00000000001,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 241995,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "ADAPTIVE"
        },
        {
          "trade_id": "10684",
          "timestamp": "2026-04-13T07:59:49.656771",
          "price": 138.8,
          "size": 1200.0,
          "notional": 166560.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 241995,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "ADAPTIVE"
        },
        {
          "trade_id": "10683",
          "timestamp": "2026-04-13T07:59:49.476271",
          "price": 138.8,
          "size": 400.0,
          "notional": 55520.00000000001,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 241995,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "ADAPTIVE"
        },
        {
          "trade_id": "10682",
          "timestamp": "2026-04-13T07:59:47.897456",
          "price": 138.8,
          "size": 1200.0,
          "notional": 166560.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 241995,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "ADAPTIVE"
        },
        {
          "trade_id": "10681",
          "timestamp": "2026-04-13T07:59:47.658363",
          "price": 138.8,
          "size": 400.0,
          "notional": 55520.00000000001,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 241995,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "ADAPTIVE"
        },
        {
          "trade_id": "10680",
          "timestamp": "2026-04-13T07:59:47.321794",
          "price": 138.8,
          "size": 400.0,
          "notional": 55520.00000000001,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 241995,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "ADAPTIVE"
        },
        {
          "trade_id": "10679",
          "timestamp": "2026-04-13T07:59:46.765414",
          "price": 138.9,
          "size": 4400.0,
          "notional": 611160.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 241995,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "ADAPTIVE"
        },
        {
          "trade_id": "10678",
          "timestamp": "2026-04-13T07:59:45.884598",
          "price": 138.8,
          "size": 2800.0,
          "notional": 388640.00000000006,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 241995,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "ADAPTIVE"
        },
        {
          "trade_id": "10677",
          "timestamp": "2026-04-13T07:59:45.656986",
          "price": 138.8,
          "size": 400.0,
          "notional": 55520.00000000001,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 241995,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "ADAPTIVE"
        },
        {
          "trade_id": "10676",
          "timestamp": "2026-04-13T07:59:44.212767",
          "price": 138.9,
          "size": 800.0,
          "notional": 111120.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 241995,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "ADAPTIVE"
        },
        {
          "trade_id": "10675",
          "timestamp": "2026-04-13T07:59:43.656776",
          "price": 138.8,
          "size": 400.0,
          "notional": 55520.00000000001,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 241995,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "ADAPTIVE"
        },
        {
          "trade_id": "10674",
          "timestamp": "2026-04-13T07:59:41.657207",
          "price": 138.8,
          "size": 400.0,
          "notional": 55520.00000000001,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 241995,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "ADAPTIVE"
        },
        {
          "trade_id": "10673",
          "timestamp": "2026-04-13T07:59:40.092882",
          "price": 138.8,
          "size": 400.0,
          "notional": 55520.00000000001,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 241995,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "ADAPTIVE"
        },
        {
          "trade_id": "10672",
          "timestamp": "2026-04-13T07:59:39.657318",
          "price": 138.8,
          "size": 400.0,
          "notional": 55520.00000000001,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 241995,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "ADAPTIVE"
        },
        {
          "trade_id": "10671",
          "timestamp": "2026-04-13T07:59:37.656947",
          "price": 138.8,
          "size": 400.0,
          "notional": 55520.00000000001,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 241995,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "ADAPTIVE"
        },
        {
          "trade_id": "10670",
          "timestamp": "2026-04-13T07:59:36.575134",
          "price": 138.7,
          "size": 2000.0,
          "notional": 277400.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 241995,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "ADAPTIVE"
        },
        {
          "trade_id": "10669",
          "timestamp": "2026-04-13T07:59:35.657253",
          "price": 138.7,
          "size": 400.0,
          "notional": 55479.99999999999,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 241995,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "ADAPTIVE"
        },
        {
          "trade_id": "10668",
          "timestamp": "2026-04-13T07:59:34.787764",
          "price": 138.9,
          "size": 400.0,
          "notional": 55560.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 241995,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "ADAPTIVE"
        },
        {
          "trade_id": "10667",
          "timestamp": "2026-04-13T07:59:33.657323",
          "price": 138.7,
          "size": 400.0,
          "notional": 55479.99999999999,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 241995,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "ADAPTIVE"
        },
        {
          "trade_id": "10666",
          "timestamp": "2026-04-13T07:59:31.729187",
          "price": 138.7,
          "size": 400.0,
          "notional": 55479.99999999999,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 241995,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "ADAPTIVE"
        },
        {
          "trade_id": "10665",
          "timestamp": "2026-04-13T07:59:30.657431",
          "price": 138.7,
          "size": 400.0,
          "notional": 55479.99999999999,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 241995,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "ADAPTIVE"
        },
        {
          "trade_id": "10664",
          "timestamp": "2026-04-13T07:59:29.107528",
          "price": 138.8,
          "size": 400.0,
          "notional": 55520.00000000001,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 241995,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "ADAPTIVE"
        },
        {
          "trade_id": "10663",
          "timestamp": "2026-04-13T07:59:29.107528",
          "price": 138.8,
          "size": 800.0,
          "notional": 111040.00000000001,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 241995,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "ADAPTIVE"
        },
        {
          "trade_id": "10662",
          "timestamp": "2026-04-13T07:59:29.107528",
          "price": 138.8,
          "size": 400.0,
          "notional": 55520.00000000001,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 241995,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "ADAPTIVE"
        },
        {
          "trade_id": "10661",
          "timestamp": "2026-04-13T07:59:29.107528",
          "price": 138.8,
          "size": 400.0,
          "notional": 55520.00000000001,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 241995,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "ADAPTIVE"
        }
      ],
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
      "total_trades": 1258160,
      "price_moving_trades": 247643,
      "pct_price_moving": 19.682949704330134,
      "all_movers": {
        "count": 247643,
        "avg_size": 139814.20670431227,
        "median_size": 54440.0,
        "retail_count": 23792,
        "mixed_count": 0,
        "institutional_count": 91311,
        "ambiguous_count": 119009,
        "unobservable_count": 13531,
        "retail_pct": 9.607378363208328,
        "mixed_pct": 0.0,
        "instit_pct": 36.87202949407009,
        "unclear_pct": 53.52059214272158
      },
      "positive_movers": {
        "count": 123812,
        "avg_size": 146494.59378643427,
        "median_size": 55200.0,
        "retail_count": 6503,
        "mixed_count": 0,
        "institutional_count": 45882,
        "ambiguous_count": 59404,
        "unobservable_count": 12023,
        "retail_pct": 5.252318030562466,
        "mixed_pct": 0.0,
        "instit_pct": 37.05779730559235,
        "unclear_pct": 57.689884663845184
      },
      "negative_movers": {
        "count": 123831,
        "avg_size": 133134.8446268705,
        "median_size": 53720.00000000001,
        "retail_count": 17289,
        "mixed_count": 0,
        "institutional_count": 45429,
        "ambiguous_count": 59605,
        "unobservable_count": 1508,
        "retail_pct": 13.961770477505633,
        "mixed_pct": 0.0,
        "instit_pct": 36.68629018581777,
        "unclear_pct": 49.3519393366766
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
          "opening": 0.009367852130049814,
          "continuous": 0.9478474139150632,
          "closing": 0.038863767253184654,
          "auctions": 0.04823161938323447,
          "other": 0.003920966701702235
        },
        "1M": {
          "opening": 0.016457415185924352,
          "continuous": 0.9138632214934784,
          "closing": 0.05924990548326205,
          "auctions": 0.0757073206691864,
          "other": 0.010429457837335308
        },
        "3M": {
          "opening": 0.016372384273049153,
          "continuous": 0.867786681547652,
          "closing": 0.08686696110543707,
          "auctions": 0.10323934537848622,
          "other": 0.028973973073861747
        },
        "6M": {
          "opening": 0.01530829343779262,
          "continuous": 0.8871049889866113,
          "closing": 0.07726106225712585,
          "auctions": 0.09256935569491848,
          "other": 0.020325655318470262
        }
      },
      "hhi": {
        "1D": 0.11389825208819025,
        "1M": 0.11366365408115645,
        "3M": 0.11941933600428489,
        "6M": 0.11791193336679555
      },
      "profile_buckets": [
        {
          "time": "09:00",
          "avg_share": 0.0139
        },
        {
          "time": "09:30",
          "avg_share": 0.1937
        },
        {
          "time": "10:00",
          "avg_share": 0.0829
        },
        {
          "time": "10:30",
          "avg_share": 0.0654
        },
        {
          "time": "11:00",
          "avg_share": 0.0576
        },
        {
          "time": "11:30",
          "avg_share": 0.045
        },
        {
          "time": "12:00",
          "avg_share": 0.0326
        },
        {
          "time": "13:00",
          "avg_share": 0.0657
        },
        {
          "time": "13:30",
          "avg_share": 0.0485
        },
        {
          "time": "14:00",
          "avg_share": 0.0562
        },
        {
          "time": "14:30",
          "avg_share": 0.062
        },
        {
          "time": "15:00",
          "avg_share": 0.0842
        },
        {
          "time": "15:30",
          "avg_share": 0.1269
        },
        {
          "time": "16:00",
          "avg_share": 0.0654
        }
      ],
      "peers_hhi_rows": [
        {
          "ticker": "5",
          "auctions_pct": 8.846529883997418,
          "hhi": 0.1155512583522395,
          "interp": {
            "text": "Spread out",
            "cls": "bg-emerald-500/20 text-emerald-400",
            "you": true
          }
        },
        {
          "ticker": "939",
          "auctions_pct": 14.720575056172343,
          "hhi": 0.1100418036893808,
          "interp": {
            "text": "Spread out",
            "cls": "bg-emerald-500/20 text-emerald-400"
          }
        },
        {
          "ticker": "1398",
          "auctions_pct": 11.697477192820394,
          "hhi": 0.1096291127193958,
          "interp": {
            "text": "Spread out",
            "cls": "bg-emerald-500/20 text-emerald-400"
          }
        },
        {
          "ticker": "3988",
          "auctions_pct": 12.522995806148504,
          "hhi": 0.11417913105908255,
          "interp": {
            "text": "Spread out",
            "cls": "bg-emerald-500/20 text-emerald-400"
          }
        },
        {
          "ticker": "3968",
          "auctions_pct": 10.551980199373718,
          "hhi": 0.11202306914666732,
          "interp": {
            "text": "Spread out",
            "cls": "bg-emerald-500/20 text-emerald-400"
          }
        },
        {
          "ticker": "1288",
          "auctions_pct": 10.041558661217506,
          "hhi": 0.11611891184654276,
          "interp": {
            "text": "Spread out",
            "cls": "bg-emerald-500/20 text-emerald-400"
          }
        },
        {
          "ticker": "2888",
          "auctions_pct": 5.194829862239573,
          "hhi": 0.11866634893213177,
          "interp": {
            "text": "Spread out",
            "cls": "bg-emerald-500/20 text-emerald-400"
          }
        },
        {
          "ticker": "998",
          "auctions_pct": 10.571680106524251,
          "hhi": 0.1177900621910869,
          "interp": {
            "text": "Spread out",
            "cls": "bg-emerald-500/20 text-emerald-400"
          }
        },
        {
          "ticker": "1658",
          "auctions_pct": 9.486591529147525,
          "hhi": 0.13165804950406848,
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
