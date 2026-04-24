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
      "marketCap": 819255139.9300001,
      "sector": "REIT - Retail",
      "industry": "Real Estate"
    },
    {
      "ticker": "ODBU",
      "name": "UtdHampshReitUSD",
      "marketCap": 303690623.46500003,
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
      "marketCap": 1152646111.1000001,
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
      "marketCap": 4760129910.690001,
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
    "asof_date": "2026-04-17",
    "industry": "Real Estate",
    "sector": "REIT - Retail",
    "market_cap_display": "819.3M",
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
          "score_pca": 81.54121863799283,
          "score_pca_percentile": 81.54121863799283,
          "rank_pca": 104,
          "total": 558,
          "adv_notional_sgd": 573296.5,
          "adv_volume_shares": 862100.0,
          "free_float_shares": 457060801.0,
          "turnover_ratio": 0.0018861823155996262,
          "votes": 622.0,
          "trades": 622.0,
          "spread_pct": 0.007504886240725636,
          "spread_ticks": 1.0006325110689438,
          "amihud": 1.3017150056147562e-08,
          "volatility": 0.1433653116071401
        },
        "pca": {
          "valid": true,
          "window_days": 1,
          "variance_explained": 0.5076816224505996,
          "loadings": {
            "log_adv": 0.5600881322240149,
            "log_trades": 0.5186629717283819,
            "log_turnover": 0.5168764090225169,
            "neg_spread": 0.3696383495746616,
            "neg_amihud": 0.046390022353825305,
            "neg_vol": -0.10650934252645784
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
          "peer_median_adv": 409132.6411719112,
          "peer_median_score_pca": 74.2831541218638,
          "peer_median_trades": 403.0,
          "peer_median_volatility": 0.17246745597586804,
          "peer_median_spread_pct": 0.011173535559968147,
          "peer_median_spread_ticks": 1.012188032293309,
          "peer_median_amihud": 1.228002979115544e-10,
          "peer_median_turnover_ratio": 0.0006309316065849669,
          "target_vs_peer": {
            "score_pca_delta": 7.26,
            "adv_delta_pct": 40.1,
            "trades_delta_pct": 54.34,
            "volatility_delta_pct": 16.87,
            "spread_pct_delta_pct": 32.83,
            "spread_ticks_delta_pct": -1.14,
            "amihud_delta_pct": -10500.26,
            "turnover_ratio_delta_pct": 198.95
          }
        },
        "peer_liquidity": [
          {
            "ticker": "CRPU",
            "score_pca": 81.54121863799283,
            "rank_pca": 104,
            "adv": 573296.5,
            "trades": 622.0,
            "volatility": 0.1433653116071401,
            "spread_pct": 0.007504886240725636,
            "spread_ticks": 1.0006325110689438,
            "amihud": 1.3017150056147562e-08,
            "turnover_ratio": 0.0018861823155996262,
            "is_target": true
          },
          {
            "ticker": "ODBU",
            "score_pca": 67.20430107526882,
            "rank_pca": 184,
            "adv": 204642.28234382241,
            "trades": 39.0,
            "volatility": 0.18334437291812172,
            "spread_pct": 0.013727667305945303,
            "spread_ticks": 1.431578947368421,
            "amihud": 0.0,
            "turnover_ratio": 0.0005204424759535438,
            "is_target": false
          },
          {
            "ticker": "D5IU",
            "score_pca": 43.18996415770609,
            "rank_pca": 318,
            "adv": 3838.1,
            "trades": 8.0,
            "volatility": 1.469613012006543,
            "spread_pct": 0.15384615384615383,
            "spread_ticks": 1.0,
            "amihud": 4.342426374160828e-05,
            "turnover_ratio": 0.00017299660688594804,
            "is_target": false
          },
          {
            "ticker": "BMGU",
            "score_pca": 16.129032258064516,
            "rank_pca": 469,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.0,
            "spread_pct": 0.10912119950020824,
            "spread_ticks": 9.357142857142858,
            "amihud": null,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "AU8U",
            "score_pca": 81.36200716845879,
            "rank_pca": 105,
            "adv": 613623.0,
            "trades": 767.0,
            "volatility": 0.13917931217067325,
            "spread_pct": 0.007467064020482989,
            "spread_ticks": 1.0197418375094913,
            "amihud": 0.0,
            "turnover_ratio": 0.00074142073721639,
            "is_target": false
          },
          {
            "ticker": "JYEU",
            "score_pca": 92.1146953405018,
            "rank_pca": 45,
            "adv": 7168927.499999999,
            "trades": 1734.0,
            "volatility": 0.24551434613306325,
            "spread_pct": 0.008619403813990989,
            "spread_ticks": 1.0,
            "amihud": 2.384459473752126e-09,
            "turnover_ratio": 0.014802209671656259,
            "is_target": false
          },
          {
            "ticker": "AJBU",
            "score_pca": 96.7741935483871,
            "rank_pca": 19,
            "adv": 34505520.0,
            "trades": 3820.0,
            "volatility": 0.16159053903361434,
            "spread_pct": 0.004268014431091979,
            "spread_ticks": 1.0046342270771267,
            "amihud": 1.228002979115544e-10,
            "turnover_ratio": 0.00902285060327793,
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
              "mean": 0.25540538466393664,
              "median": 0.10074172127246728,
              "min": 0.0,
              "max": 16.783058541238233,
              "p5": 0.0,
              "p95": 0.8351963840498867,
              "count": 558
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 3691636.6013191165,
              "median": 19074.3,
              "min": 0.0,
              "max": 327429925.0,
              "p5": 0.0,
              "p95": 15620153.749999993,
              "count": 558
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.10730592710283769,
              "median": 0.026445786038136156,
              "min": 0.00022348851333070253,
              "max": 1.2394366197183098,
              "p5": 0.0031434949739619195,
              "p95": 0.5470219435736678,
              "count": 556
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.007656524497263137,
              "median": 0.00037021782015667846,
              "min": 0.0,
              "max": 1.4138817480719794,
              "p5": 0.0,
              "p95": 0.01911007369264079,
              "count": 551
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 5.088712342626812e-05,
              "median": 7.491439719118965e-09,
              "min": 0.0,
              "max": 0.006845564074479731,
              "p5": 0.0,
              "p95": 4.190974532079882e-05,
              "count": 411
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 542.8333333333334,
              "median": 10.0,
              "min": 0.0,
              "max": 17012.0,
              "p5": 0.0,
              "p95": 2852.649999999999,
              "count": 558
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.2881340838871889,
              "median": 0.14127231188890668,
              "min": 0.0,
              "max": 1.469613012006543,
              "p5": 0.029926341827616304,
              "p95": 1.0194189883255949,
              "count": 8
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 10535988.360292979,
              "median": 388969.3911719112,
              "min": 0.0,
              "max": 75572756.0,
              "p5": 1343.335,
              "p95": 51625776.64999996,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.038654385116552836,
              "median": 0.008236748053098247,
              "min": 0.004203306613695833,
              "max": 0.15384615384615383,
              "p5": 0.0042708170378112946,
              "p95": 0.13819241982507285,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0020813586926680394,
              "median": 0.0006309316065849669,
              "min": 0.0,
              "max": 0.008914690180689036,
              "p5": 6.054881241008182e-05,
              "p95": 0.007263362227046383,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 6.213122987936042e-06,
              "median": 6.131802531284294e-10,
              "min": 0.0,
              "max": 4.342426374160828e-05,
              "p5": 0.0,
              "p95": 3.0413174672216187e-05,
              "count": 7
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1561.75,
              "median": 554.0,
              "min": 0.0,
              "max": 9224.0,
              "p5": 2.8000000000000003,
              "p95": 6467.399999999996,
              "count": 8
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 7082758.480390637,
              "median": 409132.6411719112,
              "min": 0.0,
              "max": 34505520.0,
              "p5": 959.525,
              "p95": 27671371.875,
              "count": 6
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1061.3333333333333,
              "median": 403.0,
              "min": 0.0,
              "max": 3820.0,
              "p5": 2.0,
              "p95": 3298.5,
              "count": 6
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.36654026371033593,
              "median": 0.17246745597586804,
              "min": 0.0,
              "max": 1.469613012006543,
              "p5": 0.03479482804266831,
              "p95": 1.163588345538173,
              "count": 6
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.049508250486312216,
              "median": 0.011173535559968147,
              "min": 0.004268014431091979,
              "max": 0.15384615384615383,
              "p5": 0.005067776828439731,
              "p95": 0.14266491525966743,
              "count": 6
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 2.4688496448496493,
              "median": 1.012188032293309,
              "min": 1.0,
              "max": 9.357142857142858,
              "p5": 1.0,
              "p95": 7.375751879699249,
              "count": 6
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 8.68535420027599e-06,
              "median": 1.228002979115544e-10,
              "min": 0.0,
              "max": 4.342426374160828e-05,
              "p5": 0.0,
              "p95": 3.473988788518137e-05,
              "count": 5
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.004209986682498345,
              "median": 0.0006309316065849669,
              "min": 0.0,
              "max": 0.014802209671656259,
              "p5": 4.324915172148701e-05,
              "p95": 0.013357369904561676,
              "count": 6
            }
          },
          "returns": {
            "window_days": 1,
            "n_obs": 1,
            "stock": -0.007462686567164201,
            "market": -0.0019768846365203485,
            "sector": 0.0,
            "peers": 0.0,
            "vs_market": -0.005485801930643852,
            "vs_sector": -0.007462686567164201,
            "vs_peers": -0.007462686567164201
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
          "votes": 457.0,
          "trades": 457.0,
          "spread_pct": 0.007843137254901968,
          "spread_ticks": 1.0,
          "amihud": 5.306741041703646e-09,
          "volatility": 0.14185995900630732
        },
        "pca": {
          "valid": true,
          "window_days": 21,
          "variance_explained": 0.5239384225133584,
          "loadings": {
            "log_adv": 0.5473984544126421,
            "log_trades": 0.5019605072648121,
            "log_turnover": 0.5020898542111021,
            "neg_spread": 0.41115837320445836,
            "neg_amihud": 0.06344056656428754,
            "neg_vol": 0.15238256530602104
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
          "peer_median_adv": 631809.1299859015,
          "peer_median_score_pca": 77.15053763440861,
          "peer_median_trades": 433.5,
          "peer_median_volatility": 0.22325459280121035,
          "peer_median_spread_pct": 0.009631290055344535,
          "peer_median_spread_ticks": 1.0031960790879109,
          "peer_median_amihud": 3.752980487228235e-09,
          "peer_median_turnover_ratio": 0.0008756839180969354,
          "target_vs_peer": {
            "score_pca_delta": 6.72,
            "adv_delta_pct": 20.1,
            "trades_delta_pct": 5.42,
            "volatility_delta_pct": 36.46,
            "spread_pct_delta_pct": 18.57,
            "spread_ticks_delta_pct": -0.32,
            "amihud_delta_pct": -41.4,
            "turnover_ratio_delta_pct": 193.85
          }
        },
        "peer_liquidity": [
          {
            "ticker": "CRPU",
            "score_pca": 83.87096774193549,
            "rank_pca": 91,
            "adv": 758584.5,
            "trades": 457.0,
            "volatility": 0.14185995900630732,
            "spread_pct": 0.007843137254901968,
            "spread_ticks": 1.0,
            "amihud": 5.306741041703646e-09,
            "turnover_ratio": 0.002573180630294305,
            "is_target": true
          },
          {
            "ticker": "ODBU",
            "score_pca": 68.99641577060932,
            "rank_pca": 174,
            "adv": 168234.75997180317,
            "trades": 27.0,
            "volatility": 0.15111528898354604,
            "spread_pct": 0.01022912047302292,
            "spread_ticks": 1.03,
            "amihud": 2.387570815580795e-08,
            "turnover_ratio": 0.0004278515369275957,
            "is_target": false
          },
          {
            "ticker": "D5IU",
            "score_pca": 41.39784946236559,
            "rank_pca": 328,
            "adv": 3941.0,
            "trades": 18.0,
            "volatility": 1.6545135133888744,
            "spread_pct": 0.15384615384615383,
            "spread_ticks": 1.0,
            "amihud": 0.0,
            "turnover_ratio": 0.00017763467021117773,
            "is_target": false
          },
          {
            "ticker": "BMGU",
            "score_pca": 20.967741935483872,
            "rank_pca": 442,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.3574468677972946,
            "spread_pct": 0.100983606557377,
            "spread_ticks": 8.555555555555555,
            "amihud": 2.223951962637611e-06,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "AU8U",
            "score_pca": 85.30465949820788,
            "rank_pca": 83,
            "adv": 1095383.5,
            "trades": 840.0,
            "volatility": 0.20268558276143583,
            "spread_pct": 0.007716827383690226,
            "spread_ticks": 1.0052830188679245,
            "amihud": 6.7126638081279865e-09,
            "turnover_ratio": 0.0013235162992662752,
            "is_target": false
          },
          {
            "ticker": "JYEU",
            "score_pca": 95.6989247311828,
            "rank_pca": 25,
            "adv": 8057100.000000001,
            "trades": 2800.0,
            "volatility": 0.24382360284098487,
            "spread_pct": 0.00903345963766615,
            "spread_ticks": 1.0,
            "amihud": 7.932971663284831e-10,
            "turnover_ratio": 0.01787990388404784,
            "is_target": false
          },
          {
            "ticker": "AJBU",
            "score_pca": 97.1326164874552,
            "rank_pca": 17,
            "adv": 22536692.0,
            "trades": 3451.0,
            "volatility": 0.19096491841715432,
            "spread_pct": 0.004474984142267051,
            "spread_ticks": 1.001109139307897,
            "amihud": 2.416790685381635e-10,
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
              "mean": 0.6601877962405595,
              "median": 0.39078353475445593,
              "min": 0.0,
              "max": 10.35501095937673,
              "p5": 0.0,
              "p95": 1.9368519343177992,
              "count": 558
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 3165330.1395483785,
              "median": 11763.75,
              "min": 0.0,
              "max": 257790312.0,
              "p5": 0.0,
              "p95": 13192364.899999984,
              "count": 558
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.11044955903656753,
              "median": 0.032989422707774746,
              "min": 0.0002671610380959682,
              "max": 1.3378196500672945,
              "p5": 0.003379376945515334,
              "p95": 0.5454545454545455,
              "count": 556
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.005185015705893257,
              "median": 0.00022487334908106405,
              "min": 0.0,
              "max": 1.3677410849647353,
              "p5": 0.0,
              "p95": 0.01107234335209548,
              "count": 551
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 0.00025935051628730744,
              "median": 1.4573042639994046e-07,
              "min": 0.0,
              "max": 0.11111111111111112,
              "p5": 0.0,
              "p95": 0.00011111111111111122,
              "count": 541
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 472.38709677419354,
              "median": 6.0,
              "min": 0.0,
              "max": 11222.0,
              "p5": 0.0,
              "p95": 2894.199999999999,
              "count": 558
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.3753080998101732,
              "median": 0.1785849081362289,
              "min": 0.1376737702714697,
              "max": 1.6545135133888744,
              "p5": 0.13913893632866287,
              "p95": 1.200540187431821,
              "count": 8
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 9690008.532496475,
              "median": 867912.0,
              "min": 0.0,
              "max": 65900017.0,
              "p5": 1379.3500000000001,
              "p95": 45850844.849999964,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.03733841596231786,
              "median": 0.0085310169536581,
              "min": 0.004332557752007294,
              "max": 0.15384615384615383,
              "p5": 0.0044041222614461285,
              "p95": 0.1353442622950819,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.002405042363384658,
              "median": 0.0013189882832430866,
              "min": 0.0,
              "max": 0.008113139420650676,
              "p5": 6.217213457391221e-05,
              "p95": 0.007132235252300504,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 2.8346863132324333e-07,
              "median": 6.0097024249158166e-09,
              "min": 0.0,
              "max": 2.223951962637611e-06,
              "p5": 2.918508333345036e-11,
              "p95": 1.4539252735689788e-06,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1210.75,
              "median": 533.5,
              "min": 0.0,
              "max": 5927.0,
              "p5": 6.300000000000001,
              "p95": 4484.999999999998,
              "count": 8
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 5310225.2099953005,
              "median": 631809.1299859015,
              "min": 0.0,
              "max": 22536692.0,
              "p5": 985.25,
              "p95": 18916794.0,
              "count": 6
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1189.3333333333333,
              "median": 433.5,
              "min": 0.0,
              "max": 3451.0,
              "p5": 4.5,
              "p95": 3288.25,
              "count": 6
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.4667582956982151,
              "median": 0.22325459280121035,
              "min": 0.15111528898354604,
              "max": 1.6545135133888744,
              "p5": 0.1610776963419481,
              "p95": 1.3302468519909794,
              "count": 6
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.047714025340029526,
              "median": 0.009631290055344535,
              "min": 0.004474984142267051,
              "max": 0.15384615384615383,
              "p5": 0.005285444952622845,
              "p95": 0.14063051702395962,
              "count": 6
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 2.2653246189552294,
              "median": 1.0031960790879109,
              "min": 1.0,
              "max": 8.555555555555555,
              "p5": 1.0,
              "p95": 6.674166666666666,
              "count": 6
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 3.7592921847273563e-07,
              "median": 3.752980487228235e-09,
              "min": 0.0,
              "max": 2.223951962637611e-06,
              "p5": 6.041976713454087e-11,
              "p95": 1.6739328990171602e-06,
              "count": 6
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.004339807833651726,
              "median": 0.0008756839180969354,
              "min": 0.0,
              "max": 0.01787990388404784,
              "p5": 4.4408667552794434e-05,
              "p95": 0.014967413065900248,
              "count": 6
            }
          },
          "returns": {
            "window_days": 21,
            "n_obs": 21,
            "stock": 0.023076923076922995,
            "market": -0.0008475813816738453,
            "sector": 0.007450169903880255,
            "peers": 0.004812965070177144,
            "vs_market": 0.02392450445859684,
            "vs_sector": 0.01562675317304274,
            "vs_peers": 0.01826395800674585
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
          "adv_notional_sgd": 758584.5,
          "adv_volume_shares": 1119300.0,
          "free_float_shares": 457060801.0,
          "turnover_ratio": 0.002448908323687115,
          "votes": 356.0,
          "trades": 356.0,
          "spread_pct": 0.007517392376497309,
          "spread_ticks": 1.0,
          "amihud": 5.0607336622513225e-09,
          "volatility": 0.17753427278742037
        },
        "pca": {
          "valid": true,
          "window_days": 63,
          "variance_explained": 0.5595183268647624,
          "loadings": {
            "log_adv": 0.5178358239744278,
            "log_trades": 0.4665261667075884,
            "log_turnover": 0.47300265454112106,
            "neg_spread": 0.4254902196182877,
            "neg_amihud": 0.2318163712456813,
            "neg_vol": 0.23598120055327973
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
          "peer_median_adv": 755709.4407322877,
          "peer_median_score_pca": 76.07526881720429,
          "peer_median_trades": 455.0,
          "peer_median_volatility": 0.20694546106803502,
          "peer_median_spread_pct": 0.009450632512689065,
          "peer_median_spread_ticks": 1.0024206573030416,
          "peer_median_amihud": 2.916944113434796e-09,
          "peer_median_turnover_ratio": 0.0015160210296591538,
          "target_vs_peer": {
            "score_pca_delta": 7.97,
            "adv_delta_pct": 0.4,
            "trades_delta_pct": -21.76,
            "volatility_delta_pct": 14.21,
            "spread_pct_delta_pct": 20.46,
            "spread_ticks_delta_pct": -0.24,
            "amihud_delta_pct": -73.49,
            "turnover_ratio_delta_pct": 61.54
          }
        },
        "peer_liquidity": [
          {
            "ticker": "CRPU",
            "score_pca": 84.05017921146953,
            "rank_pca": 90,
            "adv": 758584.5,
            "trades": 356.0,
            "volatility": 0.17753427278742037,
            "spread_pct": 0.007517392376497309,
            "spread_ticks": 1.0,
            "amihud": 5.0607336622513225e-09,
            "turnover_ratio": 0.002448908323687115,
            "is_target": true
          },
          {
            "ticker": "ODBU",
            "score_pca": 65.41218637992831,
            "rank_pca": 194,
            "adv": 115583.88146457536,
            "trades": 21.0,
            "volatility": 0.19772726829255582,
            "spread_pct": 0.010245901639344272,
            "spread_ticks": 1.0869565217391304,
            "amihud": 3.238723683274141e-08,
            "turnover_ratio": 0.0002911696745559579,
            "is_target": false
          },
          {
            "ticker": "D5IU",
            "score_pca": 46.774193548387096,
            "rank_pca": 298,
            "adv": 33163.0,
            "trades": 30.0,
            "volatility": 1.4160899315262934,
            "spread_pct": 0.15384615384615383,
            "spread_ticks": 1.0,
            "amihud": 0.0,
            "turnover_ratio": 0.001294776902567691,
            "is_target": false
          },
          {
            "ticker": "BMGU",
            "score_pca": 19.892473118279568,
            "rank_pca": 448,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.43028980417941975,
            "spread_pct": 0.10238907849829346,
            "spread_ticks": 8.571428571428571,
            "amihud": 9.329750709061133e-06,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "AU8U",
            "score_pca": 86.73835125448028,
            "rank_pca": 75,
            "adv": 1395835.0,
            "trades": 880.0,
            "volatility": 0.19770888424137734,
            "spread_pct": 0.007492249568866699,
            "spread_ticks": 1.0038372985418265,
            "amihud": 5.003764356944578e-09,
            "turnover_ratio": 0.0017372651567506168,
            "is_target": false
          },
          {
            "ticker": "JYEU",
            "score_pca": 95.87813620071685,
            "rank_pca": 24,
            "adv": 8533513.5,
            "trades": 2568.0,
            "volatility": 0.21616365384351424,
            "spread_pct": 0.008655363386033857,
            "spread_ticks": 1.0,
            "amihud": 8.301238699250139e-10,
            "turnover_ratio": 0.01651362278247,
            "is_target": false
          },
          {
            "ticker": "AJBU",
            "score_pca": 97.84946236559139,
            "rank_pca": 13,
            "adv": 26369527.0,
            "trades": 3666.0,
            "volatility": 0.14816354358592554,
            "spread_pct": 0.0044405357166008965,
            "spread_ticks": 1.001004016064257,
            "amihud": 2.0660391036526782e-10,
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
              "mean": 0.6819570052332086,
              "median": 0.44813233778436457,
              "min": 0.0,
              "max": 8.244255086754888,
              "p5": 0.16075864738654488,
              "p95": 2.148447693804954,
              "count": 558
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 3174111.3186471444,
              "median": 12545.0,
              "min": 0.0,
              "max": 285980477.7,
              "p5": 0.0,
              "p95": 13337698.2,
              "count": 558
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.09899563490596801,
              "median": 0.0284648439212251,
              "min": 0.0002671610380959682,
              "max": 1.3542204201990415,
              "p5": 0.0035497559767940093,
              "p95": 0.49935452487417914,
              "count": 556
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0058010020790615,
              "median": 0.0002784742463960508,
              "min": 0.0,
              "max": 1.9774569903104608,
              "p5": 0.0,
              "p95": 0.009457556750795553,
              "count": 551
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.4006539637850474e-05,
              "median": 1.3476965259436544e-07,
              "min": 0.0,
              "max": 0.0011904761904761908,
              "p5": 0.0,
              "p95": 4.08269736638173e-05,
              "count": 555
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 452.0806451612903,
              "median": 7.0,
              "min": 0.0,
              "max": 11391.0,
              "p5": 0.0,
              "p95": 2570.9999999999995,
              "count": 558
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.3645583390004445,
              "median": 0.19771807626696658,
              "min": 0.11253701791130599,
              "max": 1.4160899315262934,
              "p5": 0.13397882691616883,
              "p95": 1.071059886954887,
              "count": 8
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 10113198.547683071,
              "median": 784064.75,
              "min": 0.0,
              "max": 66927648.0,
              "p5": 11607.050000000001,
              "p95": 47305801.34999997,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.0374109171983347,
              "median": 0.00827481162662089,
              "min": 0.004249022843416297,
              "max": 0.15384615384615383,
              "p5": 0.0043422226262970305,
              "p95": 0.13583617747440266,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.002666376965629556,
              "median": 0.0015160210296591538,
              "min": 0.0,
              "max": 0.007930308824510941,
              "p5": 0.00010190938609458527,
              "p95": 0.0074470562935024095,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.1724658549795256e-06,
              "median": 5.03224900959795e-09,
              "min": 0.0,
              "max": 9.329750709061133e-06,
              "p5": 3.099796967904169e-11,
              "p95": 6.07567349378119e-06,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1186.75,
              "median": 469.0,
              "min": 0.0,
              "max": 5742.0,
              "p5": 7.3500000000000005,
              "p95": 4391.349999999998,
              "count": 8
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 6074603.730244095,
              "median": 755709.4407322877,
              "min": 0.0,
              "max": 26369527.0,
              "p5": 8290.75,
              "p95": 21910523.625,
              "count": 6
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1194.1666666666667,
              "median": 455.0,
              "min": 0.0,
              "max": 3666.0,
              "p5": 5.25,
              "p95": 3391.5,
              "count": 6
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.43435718094484765,
              "median": 0.20694546106803502,
              "min": 0.14816354358592554,
              "max": 1.4160899315262934,
              "p5": 0.1605498787497885,
              "p95": 1.169639899689575,
              "count": 6
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.04784488044254884,
              "median": 0.009450632512689065,
              "min": 0.0044405357166008965,
              "max": 0.15384615384615383,
              "p5": 0.005203464179667347,
              "p95": 0.14098188500918873,
              "count": 6
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 2.277204401295631,
              "median": 1.0024206573030416,
              "min": 1.0,
              "max": 8.571428571428571,
              "p5": 1.0,
              "p95": 6.700310559006211,
              "count": 6
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.5613630730051847e-06,
              "median": 2.916944113434796e-09,
              "min": 0.0,
              "max": 9.329750709061133e-06,
              "p5": 5.1650977591316955e-11,
              "p95": 7.005409841004035e-06,
              "count": 6
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.004523067425397675,
              "median": 0.0015160210296591538,
              "min": 0.0,
              "max": 0.01651362278247,
              "p5": 7.279241863898947e-05,
              "p95": 0.014210609595862945,
              "count": 6
            }
          },
          "returns": {
            "window_days": 63,
            "n_obs": 63,
            "stock": -0.02919708029197121,
            "market": 0.03405312627542245,
            "sector": -0.027643743257694253,
            "peers": -0.02840073230673501,
            "vs_market": -0.06325020656739366,
            "vs_sector": -0.0015533370342769581,
            "vs_peers": -0.000796347985236201
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
          "spread_pct": 0.007398318729788046,
          "spread_ticks": 1.0,
          "amihud": 5.056605737842221e-09,
          "volatility": 0.14367004088145194
        },
        "pca": {
          "valid": true,
          "window_days": 126,
          "variance_explained": 0.5785686589410348,
          "loadings": {
            "log_adv": 0.5030333750757728,
            "log_trades": 0.4478436489843588,
            "log_turnover": 0.4562163938725468,
            "neg_spread": 0.4297005761927425,
            "neg_amihud": 0.2560583400274107,
            "neg_vol": 0.29673495397106936
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
          "peer_median_adv": 659357.6950876146,
          "peer_median_score_pca": 76.61290322580645,
          "peer_median_trades": 386.5,
          "peer_median_volatility": 0.19055310527250163,
          "peer_median_spread_pct": 0.009071939159481346,
          "peer_median_spread_ticks": 1.0044527761608082,
          "peer_median_amihud": 3.1414126462447607e-09,
          "peer_median_turnover_ratio": 0.0012480297210480825,
          "target_vs_peer": {
            "score_pca_delta": 8.87,
            "adv_delta_pct": -9.2,
            "trades_delta_pct": -0.78,
            "volatility_delta_pct": 24.6,
            "spread_pct_delta_pct": 18.45,
            "spread_ticks_delta_pct": -0.44,
            "amihud_delta_pct": -60.97,
            "turnover_ratio_delta_pct": 52.94
          }
        },
        "peer_liquidity": [
          {
            "ticker": "CRPU",
            "score_pca": 85.48387096774194,
            "rank_pca": 82,
            "adv": 598704.75,
            "trades": 383.5,
            "volatility": 0.14367004088145194,
            "spread_pct": 0.007398318729788046,
            "spread_ticks": 1.0,
            "amihud": 5.056605737842221e-09,
            "turnover_ratio": 0.0019087176106357894,
            "is_target": true
          },
          {
            "ticker": "ODBU",
            "score_pca": 66.12903225806451,
            "rank_pca": 190,
            "adv": 93673.64017522908,
            "trades": 21.0,
            "volatility": 0.17083988482350637,
            "spread_pct": 0.010046712327059847,
            "spread_ticks": 1.015401332262484,
            "amihud": 3.238723683274141e-08,
            "turnover_ratio": 0.0002407194834200246,
            "is_target": false
          },
          {
            "ticker": "D5IU",
            "score_pca": 49.283154121863795,
            "rank_pca": 284,
            "adv": 38861.2,
            "trades": 36.0,
            "volatility": 1.318111885903219,
            "spread_pct": 0.1176470588235293,
            "spread_ticks": 1.0,
            "amihud": 0.0,
            "turnover_ratio": 0.0011732880397527462,
            "is_target": false
          },
          {
            "ticker": "BMGU",
            "score_pca": 19.53405017921147,
            "rank_pca": 450,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.5681845738993425,
            "spread_pct": 0.1080229241911543,
            "spread_ticks": 9.07177033492823,
            "amihud": 5.678978692471941e-06,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "AU8U",
            "score_pca": 87.09677419354838,
            "rank_pca": 73,
            "adv": 1225041.75,
            "trades": 737.0,
            "volatility": 0.17801578764027526,
            "spread_pct": 0.0065686283041358874,
            "spread_ticks": 1.0081019193745988,
            "amihud": 5.261278976490837e-09,
            "turnover_ratio": 0.0013227714023434187,
            "is_target": false
          },
          {
            "ticker": "JYEU",
            "score_pca": 96.05734767025089,
            "rank_pca": 23,
            "adv": 7860405.5,
            "trades": 1893.5,
            "volatility": 0.20309042290472798,
            "spread_pct": 0.008097165991902843,
            "spread_ticks": 1.000170750459421,
            "amihud": 1.0215463159986848e-09,
            "turnover_ratio": 0.015346086429244727,
            "is_target": false
          },
          {
            "ticker": "AJBU",
            "score_pca": 97.4910394265233,
            "rank_pca": 15,
            "adv": 18940598.5,
            "trades": 3231.0,
            "volatility": 0.13681874762874605,
            "spread_pct": 0.004428487683346552,
            "spread_ticks": 1.0008036329470178,
            "amihud": 2.6972829512577055e-10,
            "turnover_ratio": 0.004980004930576876,
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
              "mean": 0.6944950173805591,
              "median": 0.4458334292081093,
              "min": 0.0,
              "max": 6.9851906837887325,
              "p5": 0.1539078620914039,
              "p95": 2.094583459652513,
              "count": 558
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 2565346.2976913746,
              "median": 11940.624999999998,
              "min": 0.0,
              "max": 246202433.5,
              "p5": 0.0,
              "p95": 10511060.3125,
              "count": 558
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.09435016764055447,
              "median": 0.02856023142472497,
              "min": 0.00027368816798512355,
              "max": 1.267605633802817,
              "p5": 0.0035740489524719835,
              "p95": 0.47518934346905284,
              "count": 556
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.003223945310397898,
              "median": 0.0002737039905621506,
              "min": 0.0,
              "max": 0.856898029134533,
              "p5": 0.0,
              "p95": 0.007164475683949444,
              "count": 551
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.0562556695868726e-05,
              "median": 1.768437264693635e-07,
              "min": 0.0,
              "max": 0.0006620397444526588,
              "p5": 0.0,
              "p95": 4.309132669703632e-05,
              "count": 557
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 373.7016129032258,
              "median": 6.75,
              "min": 0.0,
              "max": 10165.5,
              "p5": 0.0,
              "p95": 2020.999999999999,
              "count": 558
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.3507755130270328,
              "median": 0.16990030339887396,
              "min": 0.11573425895629749,
              "max": 1.318111885903219,
              "p5": 0.12516770086986828,
              "p95": 1.055637326701862,
              "count": 8
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 8655636.417521903,
              "median": 656706.125,
              "min": 0.0,
              "max": 56048300.0,
              "p5": 13601.42,
              "p95": 40115425.87499998,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.03339388563443992,
              "median": 0.008065971591968263,
              "min": 0.004267253241731738,
              "max": 0.1176470588235293,
              "p5": 0.004337012358515765,
              "p95": 0.11427861170219804,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.002329129389045781,
              "median": 0.0012480297210480825,
              "min": 0.0,
              "max": 0.0067441230878905615,
              "p5": 8.425181919700861e-05,
              "p95": 0.0065960937322574326,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 7.161334384809721e-07,
              "median": 5.158942357166529e-09,
              "min": 0.0,
              "max": 5.678978692471941e-06,
              "p5": 3.2673696571139536e-11,
              "p95": 3.7026716829982183e-06,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1092.5625,
              "median": 407.5,
              "min": 0.0,
              "max": 5340.0,
              "p5": 7.3500000000000005,
              "p95": 4098.024999999998,
              "count": 8
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 4693096.765029205,
              "median": 659357.6950876146,
              "min": 0.0,
              "max": 18940598.5,
              "p5": 9715.3,
              "p95": 16170550.25,
              "count": 6
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 986.4166666666666,
              "median": 386.5,
              "min": 0.0,
              "max": 3231.0,
              "p5": 5.25,
              "p95": 2896.625,
              "count": 6
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.4291768837999695,
              "median": 0.19055310527250163,
              "min": 0.13681874762874605,
              "max": 1.318111885903219,
              "p5": 0.14532403192743612,
              "p95": 1.13063005790225,
              "count": 6
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.04246849622018811,
              "median": 0.009071939159481346,
              "min": 0.004428487683346552,
              "max": 0.1176470588235293,
              "p5": 0.004963522838543886,
              "p95": 0.11524102516543555,
              "count": 6
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 2.3493746616619586,
              "median": 1.0044527761608082,
              "min": 1.0,
              "max": 9.07177033492823,
              "p5": 1.0000426876148554,
              "p95": 7.057678084261793,
              "count": 6
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 9.52986413815383e-07,
              "median": 3.1414126462447607e-09,
              "min": 0.0,
              "max": 5.678978692471941e-06,
              "p5": 6.743207378144264e-11,
              "p95": 4.267330828562141e-06,
              "count": 6
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.003843811714222965,
              "median": 0.0012480297210480825,
              "min": 0.0,
              "max": 0.015346086429244727,
              "p5": 6.017987085500615e-05,
              "p95": 0.012754566054577764,
              "count": 6
            }
          },
          "returns": {
            "window_days": 126,
            "n_obs": 126,
            "stock": -0.01481481481481417,
            "market": 0.14410479421952038,
            "sector": -0.012378014838717144,
            "peers": -0.03099527035771199,
            "vs_market": -0.15891960903433455,
            "vs_sector": -0.002436799976097026,
            "vs_peers": 0.01618045554289782
          }
        }
      }
    },
    "period_insights": {
      "1d": {
        "liquidity": "Near-term tradability is still serviceable, but activity has pulled back as 1D average volume sits 24.4% below the 1M average. That matters because access is still available, though with less immediate flow than the recent average."
      },
      "30d": {
        "market_comparison": "The 1M return of 2.3% is ahead of peers at 0.5% and the market at -0.1%, which matters because the stock is trading against a firmer backdrop than its main comparison groups."
      },
      "3m": {
        "liquidity": "Medium-term tradability looks steady, supported by a liquidity profile that remains comfortably above the peer median on the longer view. That matters because access has held up through the recent period rather than dropping away."
      },
      "6m": {
        "market_comparison": "Over 6M, the liquidity score of 85.5 is 8.9 points above the peer median of 76.6, which matters because peer-relative access is better than the company’s size alone would suggest."
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
          "median": 0.2258491624095035,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "22.6%",
          "display_range": null,
          "display_text": "22.6%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "share_pct",
          "value_pct": 22.6,
          "plain_english": "Market explains about 22.6% of price moves in the current state."
        },
        "sector_share": {
          "median": 0.41394579815036553,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "41.4%",
          "display_range": null,
          "display_text": "41.4%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "share_pct",
          "value_pct": 41.4,
          "plain_english": "Sector explains about 41.4% of price moves in the current state."
        },
        "company_share": {
          "median": 0.36020503944013094,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "36.0%",
          "display_range": null,
          "display_text": "36.0%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "share_pct",
          "value_pct": 36.0,
          "plain_english": "Company-specific explains about 36.0% of price moves in the current state."
        },
        "basis": "current_state"
      },
      "current_sensitivities": {
        "beta_market": {
          "median": 0.681665254454298,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "0.68",
          "display_range": null,
          "display_text": "0.68",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "beta",
          "strength_label": "Modest",
          "plain_english": "Modest market link: a 1% market move has lined up with about a 0.68% stock move in the same direction in this state.",
          "value_num": 0.68
        },
        "beta_stock_lag": {
          "median": -0.9220138937356507,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "-0.92",
          "display_range": null,
          "display_text": "-0.92",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "lag_beta",
          "value_num": -0.92
        },
        "beta_sector": {
          "median": -0.8162230973465712,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "-0.82",
          "display_range": null,
          "display_text": "-0.82",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "beta",
          "strength_label": "Moderate",
          "plain_english": "Moderate sector link: a 1% sector move has lined up with about a 0.82% stock move in the opposite direction in this state.",
          "value_num": -0.82
        },
        "beta_market_lag": {
          "median": 0.9701241605470787,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "0.97",
          "display_range": null,
          "display_text": "0.97",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "lag_beta",
          "value_num": 0.97
        },
        "beta_sector_lag": {
          "median": 1.5279215139913709,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "1.53",
          "display_range": null,
          "display_text": "1.53",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "lag_beta",
          "value_num": 1.53
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
          "period_label": "2025-04-22 to 2025-04-30",
          "n_obs": 7,
          "partial_month": true,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.7671656258785615,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "76.7%",
            "display_range": null,
            "display_text": "76.7%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 7 trading days.",
            "kind": "share_pct",
            "value_pct": 76.7,
            "plain_english": "Company-specific explains about 76.7% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.047080691944520844,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "4.7%",
              "display_range": null,
              "display_text": "4.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 7 trading days.",
              "kind": "share_pct",
              "value_pct": 4.7,
              "plain_english": "Market explains about 4.7% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.1857536821769176,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "18.6%",
              "display_range": null,
              "display_text": "18.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 7 trading days.",
              "kind": "share_pct",
              "value_pct": 18.6,
              "plain_english": "Sector explains about 18.6% of price moves in the current state."
            },
            "company_share": {
              "median": 0.7671656258785615,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "76.7%",
              "display_range": null,
              "display_text": "76.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 7 trading days.",
              "kind": "share_pct",
              "value_pct": 76.7,
              "plain_english": "Company-specific explains about 76.7% of price moves in the current state."
            }
          },
          "summary": "Apr: Still clearly company-driven, though based on only 7 trading days."
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
          "period_label": "2026-04-01 to 2026-04-17",
          "n_obs": 12,
          "partial_month": false,
          "dominant_driver": "sector",
          "dominant_driver_label": "Sector",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.43933458034306183,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "43.9%",
            "display_range": null,
            "display_text": "43.9%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 12 trading days.",
            "kind": "share_pct",
            "value_pct": 43.9,
            "plain_english": "Sector explains about 43.9% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.1520840736937817,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "15.2%",
              "display_range": null,
              "display_text": "15.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 12 trading days.",
              "kind": "share_pct",
              "value_pct": 15.2,
              "plain_english": "Market explains about 15.2% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.43933458034306183,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "43.9%",
              "display_range": null,
              "display_text": "43.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 12 trading days.",
              "kind": "share_pct",
              "value_pct": 43.9,
              "plain_english": "Sector explains about 43.9% of price moves in the current state."
            },
            "company_share": {
              "median": 0.4085813459631565,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "40.9%",
              "display_range": null,
              "display_text": "40.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 12 trading days.",
              "kind": "share_pct",
              "value_pct": 40.9,
              "plain_english": "Company-specific explains about 40.9% of price moves in the current state."
            }
          },
          "summary": "Apr: More mixed, though sector-driven still has the largest share."
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
            "median": 0.01146908673758023,
            "low": 0.01146908673758023,
            "high": 0.01146908673758023
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
        "market_link_display": "0.68",
        "sector_link_display": "-0.82",
        "market_link_explainer": "Modest market link. A 1% market move has lined up with about a 0.68% stock move in the same direction in this state. This is a point estimate from 251 trading days.",
        "sector_link_explainer": "Moderate sector link. A 1% sector move has lined up with about a 0.82% stock move in the opposite direction in this state. This is a point estimate from 251 trading days.",
        "stock_persistence_display": "-0.92",
        "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
        "history_limited_note": "Read is based on 251 trading days versus the 252-day target."
      },
      "current_summary": {
        "regime_label": "High Volatility",
        "dominant_driver": "sector",
        "dominant_driver_label": "Sector",
        "driver_share_pct": 41.4,
        "driver_share_display": "41.4%",
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
            "median": 0.01146908673758023,
            "low": 0.01146908673758023,
            "high": 0.01146908673758023
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
        "text": "Elevated short interest",
        "bg": "bg-red-500/20",
        "textColor": "text-red-400"
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
    "liq_subtitle": "Trading access looks balanced overall, supported by a stronger six-month liquidity score and orderly displayed depth despite lighter recent volume.",
    "market_comparison_title": "How You Compare to the Market",
    "market_comparison_subtitle": "Context relative to market, sector, and peer medians.",
    "perf_title": "Stock Performance",
    "perf_subtitle": "Recent performance is firmer than the main comparison groups, with the stock up 2.3% over one month compared with peers at 0.5% and the market at -0.1%.",
    "perf_insight": "The return backdrop is firmer than peers, with one-month performance at 2.3% compared with 0.5% for peers and -0.1% for the market. That matters because stronger price performance is arriving alongside a solid six-month liquidity standing, even as sector moves explain 41.4% of the tape.",
    "drivers_title": "What Moves Your Stock Price?",
    "drivers_subtitle": "Sector moves are the main influence on the stock now, accounting for 41.4% of current trading. That matters because the tape is being shaped more by the group backdrop than by company-specific news.",
    "drivers_strip": [
      {
        "title": "Current Driver (Last 5 Days)",
        "text": "Over the last 5 trading days, moves are mainly sector-driven, accounting for about 41.4% of price changes. Other influences are market 22.6%, and company-specific 36.0%."
      },
      {
        "title": "Driver Mix",
        "text": "Based on the last 5 trading days, current mix is market 22.6%, sector 41.4%, and company-specific 36.0%."
      },
      {
        "title": "Monthly Trend",
        "text": "The driver mix has shifted from company-driven to sector-driven over Feb to Apr."
      }
    ],
    "drivers_pie_title": "Current Driver Mix (Last 5 Days)",
    "drivers_pie_note": "Based on the last 5 trading days, current split is market 22.6%, sector 41.4%, and company-specific 36.0%.",
    "lead_lag_title": "",
    "lead_lag_note": "",
    "rolling_title": "Monthly Driver Shift",
    "rolling_latest_label": "Latest: {period}",
    "rolling_note": "Each bar shows the monthly split between market-, sector-, and company-driven moves.",
    "drivers_bottom_line": "The stock is trading with a meaningful sector lead, while recent volume is 24.4% below the one-month average. That leaves the near-term picture balanced rather than weak.",
    "drivers_wtd_title": "Key Reads",
    "drivers_wtd_list": [
      "Main driver now: sector moves lead at 41.4% of recent price action.",
      "Monthly change: the pattern has moved from clearly company-driven in February to more mixed in April, with sector moves now the largest influence."
    ],
    "regime_title": "Market State",
    "regime_subtitle": "Trading conditions look orderly, with a one-tick spread and broadly balanced displayed depth.",
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
    "exec_check_subtitle": "Combines the final continuous-session displayed book before close, trade-size stress tests based on Apr 17, 2025 to Apr 17, 2026 (253 trading days • 98,642 trades), large sell-side orders observed today, and intraday spread/depth during the continuous trading session.",
    "order_book_title": "Order Book Depth (Available Liquidity)",
    "order_book_note": "Depth shown is based on top 10 bid and top 10 ask levels.",
    "peer_capacity_title": "Peer Capacity Context",
    "peer_capacity_note": "Immediate displayed depth broadly matches the stronger monthly liquidity read.",
    "impact_summary_title": "Estimated Price Impact (Sell Orders)",
    "impact_summary_subtitle": "Approximate price impact (%) for sell orders.",
    "exec_check_insight": "The current book looks balanced, with a one-tick spread and top-10 bid depth at 0.89x of ask depth. That matters because displayed liquidity is consistent with the stronger six-month peer standing.",
    "trader_composition_title": "Who's Trading Your Stock?",
    "trader_composition_subtitle": "Shows whether trading is mostly retail-like, institution-like, mixed, or unclassified.",
    "trader_retail_threshold": "Retail-like flow",
    "trader_mixed_threshold": "Mixed flow",
    "trader_instit_threshold": "Institution-like flow",
    "peer_trader_title": "Peer Comparison: Trader Mix",
    "peer_trader_subtitle": "How the trader mix compares with peers.",
    "price_moving_title": "Which Trades Move the Price?",
    "price_moving_subtitle": "Price-moving trades are 24.3% of total trades.",
    "intraday_title": "When Does Trading Happen?",
    "intraday_subtitle": "Displayed liquidity looks usable through the session, with balanced depth and a one-tick spread supporting access.",
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
    "intraday_insight": "Immediate trading conditions look orderly, with a one-tick spread and top-10 bid depth at 0.89x of ask depth. That matters because on-screen liquidity remains accessible even with recent volume running below the monthly average.",
    "short_title": "Short Selling & Lending",
    "short_subtitle": "Recent trading looks balanced, with no sign of disorder in the displayed book.",
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
    "exec_subtitle": "Liquidity looks mixed for the stock’s size, with stronger peer-relative depth offset by lighter recent volume.",
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
        "sub": "Peer median 76.6 (+8.9 pts)",
        "interp": {
          "text": "Strong",
          "cls": "interpretation-good",
          "icon": "◆"
        }
      },
      {
        "title": "Volume vs Peers",
        "value": "S$598.7K",
        "sub": "Peer median S$659.4K",
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
    "liq_insight": "6M liquidity is strong: score 85.5 vs peer median 76.6 (+8.9 pts). 1D average volume down -24.4% from 1M. Recent flow does not show a clear deterioration from the monthly baseline.",
    "perf_badge": "Context",
    "exec_check_tiles": [
      {
        "title": "Mid Price",
        "value": "0.663",
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
        "value": "0.89x",
        "note": "Bid depth / ask depth on displayed top-10 levels",
        "color": "text-slate-300"
      }
    ],
    "impact_summary_cards": [
      {
        "title": "~S$100K sell",
        "text": "Estimated impact ~-0.38% with 100.0% fill.",
        "cls": "ok"
      },
      {
        "title": "S$1.0M sell",
        "text": "Estimated impact ~-0.61% with 100.0% fill.",
        "cls": "warn"
      },
      {
        "title": "S$2.5M sell",
        "text": "Estimated impact ~-1.88% with 100.0% fill.",
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
        "subtext": "Peer median S$659.4K",
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
        "value": "41.4",
        "suffix": "sector",
        "bar_pct": 41,
        "color_value": "text-amber-400",
        "color_bar": "bg-amber-500",
        "subtext": "Market 22.6% • Company 36.0%",
        "interpretation": {
          "text": "Sector",
          "cls": "interpretation-neutral",
          "icon": "◆"
        }
      }
    ],
    "exec_takeaways": [
      "Structural liquidity is holding up relative to peers, even if the overall read remains balanced. The six-month liquidity score is 85.5 compared with a peer median of 76.6, which supports access relative to similar names.",
      "Recent flow is lighter than the monthly average, but the change is not enough to overturn the broader picture. One-day average volume is down 24.4% from the one-month average, which means near-term activity is less full than the recent baseline.",
      "The tape remains orderly and supported by a firmer return backdrop. The spread is one tick, top-10 bid depth is 0.89x of ask depth, and the stock is up 2.3% over one month compared with 0.5% for peers, which keeps liquidity conditions balanced rather than weak."
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
      "overall": "6M liquidity is strong: score 85.5 vs peer median 76.6 (+8.9 pts). 1D average volume down -24.4% from 1M. Recent flow does not show a clear deterioration from the monthly baseline.",
      "strengths": [
        "6M score 85.5 vs peer median 76.6 (+8.9 pts)."
      ],
      "concerns": [
        "1D average volume down -24.4% from 1M."
      ],
      "peer_context": "Primary-period score gap vs peers: +8.9 pts."
    },
    "market_comparison": {
      "returns": {
        "insight": "6M return is -1.5%, better than peers, but worse than market and sector, which shows price performance is mixed across comparison groups.",
        "vs_market": "Worse than market: -1.5% vs market 14.4%.",
        "vs_sector": "Worse than sector: -1.5% vs sector -1.2%.",
        "vs_peers": "Better than peers: -1.5% vs peers -3.1%."
      },
      "adv": {
        "insight": "ADV is S$598.7K, better than market, which supports stronger day-to-day trading size than comparable names.",
        "vs_market": "Better than market: S$598.7K vs market S$11.9K.",
        "vs_sector": "In line with sector: S$598.7K vs sector S$656.7K.",
        "vs_peers": "In line with peers: S$598.7K vs peers S$659.4K."
      },
      "spread": {
        "insight": "Spread is 0.74%, better than market and peers, which keeps trading costs more competitive than comparable names.",
        "vs_market": "Better than market: 0.74% vs market 2.86%.",
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
        "insight": "Volatility is 14.37%, better than market, sector, and peers, which suggests day-to-day price swings are more contained than comparable names.",
        "vs_market": "Better than market: 14.37% vs market 44.58%.",
        "vs_sector": "Better than sector: 14.37% vs sector 16.99%.",
        "vs_peers": "Better than peers: 14.37% vs peers 19.06%."
      },
      "trades": {
        "insight": "Trades is 384, better than market, which supports more fully reflective of day-to-day access day-to-day activity than comparable names.",
        "vs_market": "Better than market: 384 vs market 7.",
        "vs_sector": "In line with sector: 384 vs sector 408.",
        "vs_peers": "In line with peers: 384 vs peers 386."
      },
      "amihud": {
        "insight": "Price impact is 5.06e-09, better than market, but worse than peers, which shows price impact is mixed across comparison groups.",
        "vs_market": "Better than market: 5.06e-09 vs market 1.77e-07.",
        "vs_sector": "In line with sector: 5.06e-09 vs sector 5.16e-09.",
        "vs_peers": "Worse than peers: 5.06e-09 vs peers 3.14e-09."
      }
    },
    "performance": {
      "overall": "Recent returns are ahead of peers and the market, with 1M performance at +2.3% compared with +0.5% for peers and -0.1% for the market. Liquidity gives mixed confirmation to that move because the 6M liquidity score is 85.5 against a peer median of 76.6, but 1D average volume is 24.4% below the 1M average. The move looks more sector-linked than company-specific because sector factors account for 41.4% of current trading.",
      "conclusion": "The recent move is positive but only partly confirmed by liquidity, and it looks primarily sector-linked rather than company-specific."
    },
    "drivers": {
      "overall": "Sector moves are leading the stock now, with 41.4% of recent price action explained by the sector. That matters because the shares are responding more to the group backdrop than to company-specific news, even as the 1M return of 2.3% remains ahead of peers at 0.5% and the market at -0.1%.",
      "beta": "The current pattern looks mixed rather than one-way, because sector influence is the largest driver while recent average volume is 24.4% below the 1M average. That points to a market that is still trading, but with less immediate flow behind each move.",
      "rolling_change": "The monthly picture has become more balanced. February was still clearly company-driven, March was mostly sector, and April is more mixed with sector moves now the largest share, which suggests the recent pattern is broader and less tied to stock-specific catalysts alone."
    },
    "regime": {
      "overall": "High Volatility is the main backdrop now, and its typical duration of about 10.3 days suggests this is a live trading condition rather than a brief spike. That matters because day-to-day execution can stay less steady even with a solid longer-term liquidity score.",
      "current": "The stock is currently in a High Volatility state, while 1D average volume is down 24.4% from the 1M average. That leaves the tape active but without stronger recent flow to fully absorb sharper moves.",
      "transitions": "The state looks fairly settled because High Volatility typically lasts about 10.3 days, although the recent drop in average volume means conditions can still shift within that higher-volatility backdrop.",
      "trading_implications": "This state looks more persistent, with a typical run length of about 10.3 days."
    },
    "execution": {
      "overall": "Displayed liquidity looks balanced overall because the spread is 1 tick and top-10 bid depth is 0.89x of ask depth. That points to orderly immediate execution even with a modest buy-side skew.",
      "concern": "Trade-size percentiles use Apr 17, 2025 to Apr 17, 2026 history (253 trading days • 98,642 trades).",
      "peer_context": "The book broadly supports the broader liquidity picture because the spread remains tight while six-month liquidity score is 85.5 compared with a peer median of 76.6. That said, the lighter bid side keeps the picture mixed rather than clearly strong."
    },
    "trader_composition": {
      "overall": "Flow looks mixed on individual trade count and value, so the trading base is broad but not clearly dominated by one participant type. Retail-like trades make up most trades by count, while institution-like trades account for the largest share of value, which matters because activity is frequent but a large part of traded value still comes from bigger tickets.",
      "retail_heavy": "Retail-like activity is prominent by count but not by value. Retail-like trades are 60.1% of individual trades and only 9.6% of trade value, which matters because day-to-day activity is supported by many smaller tickets rather than by value concentration alone.",
      "institutional_gap": "Institution-like activity is limited by count but significant by value. Institution-like trades are 10.8% of individual trades and 48.3% of trade value, which matters because larger tickets are present even though they do not dominate the tape by number of trades.",
      "peer_comparison": "The trader mix looks mixed rather than unusual relative to peers, with retail-like trades leading count and institution-like trades leading value. That matters because the stock’s flow profile appears broadly in line with a market supported by both frequent smaller trades and fewer larger value trades."
    },
    "price_moving": {
      "overall": "Price-moving activity may be read as mixed because the underlying flow is split between high trade count and high trade value. Retail-like trades dominate count at 60.1%, while institution-like trades account for 48.3% of value, which matters because price formation is unlikely to come from one clean source. The signal is mixed rather than one-sided.",
      "interpretation": "",
      "asymmetry": ""
    },
    "short_selling": {
      "overall": "Elevated short interest Recent flow does not show a clear deterioration from the monthly baseline.",
      "level": "Elevated short interest",
      "correlation": "Moderate negative - shorts somewhat predict drops",
      "trend": "The short trend is falling sharply, with covering down 76% month on month. That reduces the chance that short activity is adding fresh strain to the broader trading picture.",
      "peaks": "5 notable peak days identified."
    },
    "intraday": {
      "overall": "Session split is open 3.7%, continuous 87.1%, and close 8.0%. Current trading concentration score is 0.228.",
      "hhi_interpretation": "Intraday activity looks reasonably well distributed. A concentration score of 0.228 suggests trading is not heavily confined to a narrow part of the session, which matters because access looks steadier across the day.",
      "best_times": "Peak buckets show where activity clusters through the day.",
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
        66.12903225806451,
        49.283154121863795,
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
        93673.64017522908,
        38861.2,
        0.0,
        1225041.75,
        7860405.5,
        18940598.5
      ],
      "total": 558
    },
    "market_comparison": {
      "sector_name": "REIT - Retail",
      "sector_count": 8,
      "market_count": 558,
      "company": {
        "volatility": 0.14367004088145194,
        "adv": 598704.75,
        "spread_pct": 0.007398318729788046,
        "turnover_ratio": 0.0019087176106357894,
        "amihud": 5.056605737842221e-09,
        "trades": 383.5
      },
      "market": {
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.6944950173805591,
          "median": 0.4458334292081093,
          "min": 0.0,
          "max": 6.9851906837887325,
          "p5": 0.1539078620914039,
          "p95": 2.094583459652513,
          "count": 558
        },
        "adv": {
          "direction": "higher_is_better",
          "mean": 2565346.2976913746,
          "median": 11940.624999999998,
          "min": 0.0,
          "max": 246202433.5,
          "p5": 0.0,
          "p95": 10511060.3125,
          "count": 558
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.09435016764055447,
          "median": 0.02856023142472497,
          "min": 0.00027368816798512355,
          "max": 1.267605633802817,
          "p5": 0.0035740489524719835,
          "p95": 0.47518934346905284,
          "count": 556
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.003223945310397898,
          "median": 0.0002737039905621506,
          "min": 0.0,
          "max": 0.856898029134533,
          "p5": 0.0,
          "p95": 0.007164475683949444,
          "count": 551
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 1.0562556695868726e-05,
          "median": 1.768437264693635e-07,
          "min": 0.0,
          "max": 0.0006620397444526588,
          "p5": 0.0,
          "p95": 4.309132669703632e-05,
          "count": 557
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 373.7016129032258,
          "median": 6.75,
          "min": 0.0,
          "max": 10165.5,
          "p5": 0.0,
          "p95": 2020.999999999999,
          "count": 558
        }
      },
      "sector": {
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.3507755130270328,
          "median": 0.16990030339887396,
          "min": 0.11573425895629749,
          "max": 1.318111885903219,
          "p5": 0.12516770086986828,
          "p95": 1.055637326701862,
          "count": 8
        },
        "adv": {
          "direction": "higher_is_better",
          "mean": 8655636.417521903,
          "median": 656706.125,
          "min": 0.0,
          "max": 56048300.0,
          "p5": 13601.42,
          "p95": 40115425.87499998,
          "count": 8
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.03339388563443992,
          "median": 0.008065971591968263,
          "min": 0.004267253241731738,
          "max": 0.1176470588235293,
          "p5": 0.004337012358515765,
          "p95": 0.11427861170219804,
          "count": 8
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.002329129389045781,
          "median": 0.0012480297210480825,
          "min": 0.0,
          "max": 0.0067441230878905615,
          "p5": 8.425181919700861e-05,
          "p95": 0.0065960937322574326,
          "count": 8
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 7.161334384809721e-07,
          "median": 5.158942357166529e-09,
          "min": 0.0,
          "max": 5.678978692471941e-06,
          "p5": 3.2673696571139536e-11,
          "p95": 3.7026716829982183e-06,
          "count": 8
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 1092.5625,
          "median": 407.5,
          "min": 0.0,
          "max": 5340.0,
          "p5": 7.3500000000000005,
          "p95": 4098.024999999998,
          "count": 8
        }
      },
      "peers": {
        "adv": {
          "direction": "higher_is_better",
          "mean": 4693096.765029205,
          "median": 659357.6950876146,
          "min": 0.0,
          "max": 18940598.5,
          "p5": 9715.3,
          "p95": 16170550.25,
          "count": 6
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 986.4166666666666,
          "median": 386.5,
          "min": 0.0,
          "max": 3231.0,
          "p5": 5.25,
          "p95": 2896.625,
          "count": 6
        },
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.4291768837999695,
          "median": 0.19055310527250163,
          "min": 0.13681874762874605,
          "max": 1.318111885903219,
          "p5": 0.14532403192743612,
          "p95": 1.13063005790225,
          "count": 6
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.04246849622018811,
          "median": 0.009071939159481346,
          "min": 0.004428487683346552,
          "max": 0.1176470588235293,
          "p5": 0.004963522838543886,
          "p95": 0.11524102516543555,
          "count": 6
        },
        "spread_ticks": {
          "direction": "neutral",
          "mean": 2.3493746616619586,
          "median": 1.0044527761608082,
          "min": 1.0,
          "max": 9.07177033492823,
          "p5": 1.0000426876148554,
          "p95": 7.057678084261793,
          "count": 6
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 9.52986413815383e-07,
          "median": 3.1414126462447607e-09,
          "min": 0.0,
          "max": 5.678978692471941e-06,
          "p5": 6.743207378144264e-11,
          "p95": 4.267330828562141e-06,
          "count": 6
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.003843811714222965,
          "median": 0.0012480297210480825,
          "min": 0.0,
          "max": 0.015346086429244727,
          "p5": 6.017987085500615e-05,
          "p95": 0.012754566054577764,
          "count": 6
        }
      }
    },
    "returns": [
      {
        "horizon": "1M",
        "stock": 0.023076923076922995,
        "market": -0.0008475813816738453,
        "sector": 0.007450169903880255,
        "peers": 0.004812965070177144
      },
      {
        "horizon": "3M",
        "stock": -0.02919708029197121,
        "market": 0.03405312627542245,
        "sector": -0.027643743257694253,
        "peers": -0.02840073230673501
      },
      {
        "horizon": "6M",
        "stock": -0.01481481481481417,
        "market": 0.14410479421952038,
        "sector": -0.012378014838717144,
        "peers": -0.03099527035771199
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
      "share_market": 0.2258491624095035,
      "share_sector": 0.41394579815036553,
      "share_idio": 0.36020503944013094,
      "beta_market": 0.681665254454298,
      "beta_sector": -0.8162230973465712,
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
            "median": 0.2258491624095035,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "22.6%",
            "display_range": null,
            "display_text": "22.6%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "share_pct",
            "value_pct": 22.6,
            "plain_english": "Market explains about 22.6% of price moves in the current state."
          },
          "sector_share": {
            "median": 0.41394579815036553,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "41.4%",
            "display_range": null,
            "display_text": "41.4%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "share_pct",
            "value_pct": 41.4,
            "plain_english": "Sector explains about 41.4% of price moves in the current state."
          },
          "company_share": {
            "median": 0.36020503944013094,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "36.0%",
            "display_range": null,
            "display_text": "36.0%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "share_pct",
            "value_pct": 36.0,
            "plain_english": "Company-specific explains about 36.0% of price moves in the current state."
          },
          "basis": "current_state"
        },
        "current_sensitivities": {
          "beta_market": {
            "median": 0.681665254454298,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "0.68",
            "display_range": null,
            "display_text": "0.68",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "beta",
            "strength_label": "Modest",
            "plain_english": "Modest market link: a 1% market move has lined up with about a 0.68% stock move in the same direction in this state.",
            "value_num": 0.68
          },
          "beta_stock_lag": {
            "median": -0.9220138937356507,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "-0.92",
            "display_range": null,
            "display_text": "-0.92",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "lag_beta",
            "value_num": -0.92
          },
          "beta_sector": {
            "median": -0.8162230973465712,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "-0.82",
            "display_range": null,
            "display_text": "-0.82",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "beta",
            "strength_label": "Moderate",
            "plain_english": "Moderate sector link: a 1% sector move has lined up with about a 0.82% stock move in the opposite direction in this state.",
            "value_num": -0.82
          },
          "beta_market_lag": {
            "median": 0.9701241605470787,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "0.97",
            "display_range": null,
            "display_text": "0.97",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "lag_beta",
            "value_num": 0.97
          },
          "beta_sector_lag": {
            "median": 1.5279215139913709,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "1.53",
            "display_range": null,
            "display_text": "1.53",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "lag_beta",
            "value_num": 1.53
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
            "period_label": "2025-04-22 to 2025-04-30",
            "n_obs": 7,
            "partial_month": true,
            "dominant_driver": "company",
            "dominant_driver_label": "Company-specific",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.7671656258785615,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "76.7%",
              "display_range": null,
              "display_text": "76.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 7 trading days.",
              "kind": "share_pct",
              "value_pct": 76.7,
              "plain_english": "Company-specific explains about 76.7% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.047080691944520844,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "4.7%",
                "display_range": null,
                "display_text": "4.7%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 7 trading days.",
                "kind": "share_pct",
                "value_pct": 4.7,
                "plain_english": "Market explains about 4.7% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.1857536821769176,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "18.6%",
                "display_range": null,
                "display_text": "18.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 7 trading days.",
                "kind": "share_pct",
                "value_pct": 18.6,
                "plain_english": "Sector explains about 18.6% of price moves in the current state."
              },
              "company_share": {
                "median": 0.7671656258785615,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "76.7%",
                "display_range": null,
                "display_text": "76.7%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 7 trading days.",
                "kind": "share_pct",
                "value_pct": 76.7,
                "plain_english": "Company-specific explains about 76.7% of price moves in the current state."
              }
            },
            "summary": "Apr: Still clearly company-driven, though based on only 7 trading days."
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
            "period_label": "2026-04-01 to 2026-04-17",
            "n_obs": 12,
            "partial_month": false,
            "dominant_driver": "sector",
            "dominant_driver_label": "Sector",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.43933458034306183,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "43.9%",
              "display_range": null,
              "display_text": "43.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 12 trading days.",
              "kind": "share_pct",
              "value_pct": 43.9,
              "plain_english": "Sector explains about 43.9% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.1520840736937817,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "15.2%",
                "display_range": null,
                "display_text": "15.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 12 trading days.",
                "kind": "share_pct",
                "value_pct": 15.2,
                "plain_english": "Market explains about 15.2% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.43933458034306183,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "43.9%",
                "display_range": null,
                "display_text": "43.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 12 trading days.",
                "kind": "share_pct",
                "value_pct": 43.9,
                "plain_english": "Sector explains about 43.9% of price moves in the current state."
              },
              "company_share": {
                "median": 0.4085813459631565,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "40.9%",
                "display_range": null,
                "display_text": "40.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 12 trading days.",
                "kind": "share_pct",
                "value_pct": 40.9,
                "plain_english": "Company-specific explains about 40.9% of price moves in the current state."
              }
            },
            "summary": "Apr: More mixed, though sector-driven still has the largest share."
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
              "median": 0.01146908673758023,
              "low": 0.01146908673758023,
              "high": 0.01146908673758023
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
          "market_link_display": "0.68",
          "sector_link_display": "-0.82",
          "market_link_explainer": "Modest market link. A 1% market move has lined up with about a 0.68% stock move in the same direction in this state. This is a point estimate from 251 trading days.",
          "sector_link_explainer": "Moderate sector link. A 1% sector move has lined up with about a 0.82% stock move in the opposite direction in this state. This is a point estimate from 251 trading days.",
          "stock_persistence_display": "-0.92",
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "history_limited_note": "Read is based on 251 trading days versus the 252-day target."
        },
        "current_summary": {
          "regime_label": "High Volatility",
          "dominant_driver": "sector",
          "dominant_driver_label": "Sector",
          "driver_share_pct": 41.4,
          "driver_share_display": "41.4%",
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
          "period_label": "2025-04-22 to 2025-04-30",
          "n_obs": 7,
          "partial_month": true,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_label": null,
          "summary": "Apr: Still clearly company-driven, though based on only 7 trading days.",
          "share_market": 0.047080691944520844,
          "share_sector": 0.1857536821769176,
          "share_company": 0.7671656258785615,
          "share_market_display": "4.7%",
          "share_sector_display": "18.6%",
          "share_company_display": "76.7%",
          "dominant_share_display": "76.7%"
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
          "period_label": "2026-04-01 to 2026-04-17",
          "n_obs": 12,
          "partial_month": false,
          "dominant_driver": "sector",
          "dominant_driver_label": "Sector",
          "regime_label": null,
          "summary": "Apr: More mixed, though sector-driven still has the largest share.",
          "share_market": 0.1520840736937817,
          "share_sector": 0.43933458034306183,
          "share_company": 0.4085813459631565,
          "share_market_display": "15.2%",
          "share_sector_display": "43.9%",
          "share_company_display": "40.9%",
          "dominant_share_display": "43.9%"
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
              "median": 0.01146908673758023,
              "low": 0.01146908673758023,
              "high": 0.01146908673758023
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
          "price": 0.66,
          "quantity": 1041700.0,
          "value": 687522.0
        },
        {
          "level": 2,
          "price": 0.655,
          "quantity": 583800.0,
          "value": 382389.0
        },
        {
          "level": 3,
          "price": 0.65,
          "quantity": 943200.0,
          "value": 613080.0
        },
        {
          "level": 4,
          "price": 0.645,
          "quantity": 614100.0,
          "value": 396094.5
        },
        {
          "level": 5,
          "price": 0.64,
          "quantity": 195300.0,
          "value": 124992.0
        },
        {
          "level": 6,
          "price": 0.635,
          "quantity": 248300.0,
          "value": 157670.5
        },
        {
          "level": 7,
          "price": 0.63,
          "quantity": 727900.0,
          "value": 458577.0
        },
        {
          "level": 8,
          "price": 0.625,
          "quantity": 170700.0,
          "value": 106687.5
        },
        {
          "level": 9,
          "price": 0.62,
          "quantity": 227400.0,
          "value": 140988.0
        },
        {
          "level": 10,
          "price": 0.615,
          "quantity": 67300.0,
          "value": 41389.5
        }
      ],
      "asks": [
        {
          "level": 1,
          "price": 0.665,
          "quantity": 46500.0,
          "value": 30922.5
        },
        {
          "level": 2,
          "price": 0.67,
          "quantity": 665900.0,
          "value": 446153.0
        },
        {
          "level": 3,
          "price": 0.675,
          "quantity": 918200.0,
          "value": 619785.0
        },
        {
          "level": 4,
          "price": 0.68,
          "quantity": 539300.0,
          "value": 366724.0
        },
        {
          "level": 5,
          "price": 0.685,
          "quantity": 795200.0,
          "value": 544712.0
        },
        {
          "level": 6,
          "price": 0.69,
          "quantity": 1747800.0,
          "value": 1205982.0
        },
        {
          "level": 7,
          "price": 0.695,
          "quantity": 72700.0,
          "value": 50526.5
        },
        {
          "level": 8,
          "price": 0.7,
          "quantity": 189900.0,
          "value": 132930.0
        },
        {
          "level": 9,
          "price": 0.705,
          "quantity": 54600.0,
          "value": 38493.0
        },
        {
          "level": 10,
          "price": 0.71,
          "quantity": 71300.0,
          "value": 50623.0
        }
      ]
    },
    "execution_dynamic": {
      "snapshot": {
        "valid": true,
        "snapshot_time": "2026-04-17 08:59:57.925400",
        "snapshot_basis": "last_continuous_session_snapshot",
        "snapshot_label": "final continuous-session displayed book before close",
        "snapshot_note": "Final continuous-session displayed book before close",
        "snapshot_mic": "XSES",
        "mid_price": 0.6625000000000001,
        "spread_pct": 0.007547169811320759,
        "spread_ticks": 1.0,
        "tick_size": 0.005,
        "bid_depth_notional_top10": 3109390.0,
        "ask_depth_notional_top10": 3486851.0,
        "bid_ask_depth_ratio": 0.8917
      },
      "historical_trade_scenarios": {
        "valid": true,
        "requested_lookback_calendar_days": 365,
        "lookback_calendar_days": 365,
        "effective_calendar_days": 366,
        "history_limited": false,
        "trade_days_used": 253,
        "n_trades_used": 98642,
        "first_trade_date": "2025-04-17",
        "last_trade_date": "2026-04-17",
        "window_label": "Apr 17, 2025 to Apr 17, 2026",
        "window_short_label": "Apr 17, 2025 to Apr 17, 2026",
        "trade_days_label": "253 trading days",
        "trade_count_label": "98,642 trades",
        "window_detail_label": "253 trading days • 98,642 trades",
        "history_note": "Trade-size percentiles use Apr 17, 2025 to Apr 17, 2026 history (253 trading days • 98,642 trades).",
        "scenarios": [
          {
            "key": "p90",
            "label": "90th percentile trade",
            "quantile": 0.9,
            "trade_notional": 3400.0,
            "impact_pct": -0.003774,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 0.11,
            "pct_of_adv": 0.44
          },
          {
            "key": "p95",
            "label": "95th percentile trade",
            "quantile": 0.95,
            "trade_notional": 7874.0,
            "impact_pct": -0.003774,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 0.25,
            "pct_of_adv": 1.01
          },
          {
            "key": "p99_99",
            "label": "99.99th percentile trade",
            "quantile": 0.9999,
            "trade_notional": 340000.0,
            "impact_pct": -0.003774,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 10.93,
            "pct_of_adv": 43.64
          }
        ]
      },
      "l3_sell_order_scenarios": {
        "valid": true,
        "trade_date": "2026-04-17",
        "selection_method": "largest_observed_ask_orders_during_day",
        "orders": [
          {
            "rank": 1,
            "order_id": "8137223323647089664",
            "timestamp": "2026-04-16 22:59:01.470800000",
            "local_timestamp": "2026-04-17 06:59:01",
            "posted_price": 0.69,
            "size_shares": 1000000.0,
            "notional": 690000.0,
            "impact_pct": -0.003801,
            "filled_pct": 100.0,
            "levels_consumed": 2,
            "pct_of_bid_depth": 22.19,
            "price_vs_mid_pct": 4.151,
            "executed_event_count": 0,
            "event_count": 1
          },
          {
            "rank": 2,
            "order_id": "8137619147835821056",
            "timestamp": "2026-04-16 22:59:01.470800000",
            "local_timestamp": "2026-04-17 06:59:01",
            "posted_price": 0.78,
            "size_shares": 600000.0,
            "notional": 468000.0,
            "impact_pct": -0.003774,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 15.05,
            "price_vs_mid_pct": 17.736,
            "executed_event_count": 0,
            "event_count": 1
          },
          {
            "rank": 3,
            "order_id": "8138014972019109888",
            "timestamp": "2026-04-17 00:51:52.668600000",
            "local_timestamp": "2026-04-17 08:51:52",
            "posted_price": 0.675,
            "size_shares": 300000.0,
            "notional": 202500.0,
            "impact_pct": -0.003774,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 6.51,
            "price_vs_mid_pct": 1.887,
            "executed_event_count": 0,
            "event_count": 141
          }
        ]
      },
      "intraday_liquidity_profile": {
        "valid": true,
        "trade_date": "2026-04-17",
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
            "bid_depth_notional": 2916833.5,
            "ask_depth_notional": 3504651.0,
            "mid_price": 0.6675
          },
          {
            "bucket": "09:30",
            "spread_pct": 0.007490636704119857,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 2916235.0,
            "ask_depth_notional": 3511150.5,
            "mid_price": 0.6675
          },
          {
            "bucket": "10:00",
            "spread_pct": 0.007490636704119857,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 2960105.5,
            "ask_depth_notional": 3531451.5,
            "mid_price": 0.6675
          },
          {
            "bucket": "10:30",
            "spread_pct": 0.007490636704119857,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 2973304.5,
            "ask_depth_notional": 3502576.0,
            "mid_price": 0.6675
          },
          {
            "bucket": "11:00",
            "spread_pct": 0.007490636704119857,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 2850174.0,
            "ask_depth_notional": 3483079.5,
            "mid_price": 0.6675
          },
          {
            "bucket": "11:30",
            "spread_pct": 0.007490636704119857,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 2881428.0,
            "ask_depth_notional": 3505762.5,
            "mid_price": 0.6675
          },
          {
            "bucket": "13:00",
            "spread_pct": 0.007490636704119857,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 2954988.5,
            "ask_depth_notional": 3577467.5,
            "mid_price": 0.6675
          },
          {
            "bucket": "13:30",
            "spread_pct": 0.007490636704119857,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 2952661.0,
            "ask_depth_notional": 3602690.5,
            "mid_price": 0.6675
          },
          {
            "bucket": "14:00",
            "spread_pct": 0.007490636704119857,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 2910500.0,
            "ask_depth_notional": 3632494.5,
            "mid_price": 0.6675
          },
          {
            "bucket": "14:30",
            "spread_pct": 0.007490636704119857,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 2914030.5,
            "ask_depth_notional": 3631206.5,
            "mid_price": 0.6675
          },
          {
            "bucket": "15:00",
            "spread_pct": 0.007490636704119857,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 3153825.0,
            "ask_depth_notional": 3617337.5,
            "mid_price": 0.6675
          },
          {
            "bucket": "15:30",
            "spread_pct": 0.007490636704119857,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 3115678.0,
            "ask_depth_notional": 3460433.5,
            "mid_price": 0.6675
          },
          {
            "bucket": "16:00",
            "spread_pct": 0.00754716981132076,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 3114437.0,
            "ask_depth_notional": 3522035.0,
            "mid_price": 0.6625000000000001
          },
          {
            "bucket": "16:30",
            "spread_pct": 0.00754716981132076,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 3109390.0,
            "ask_depth_notional": 3486851.0,
            "mid_price": 0.6625000000000001
          }
        ],
        "summary": {
          "median_spread_pct": 0.007490636704119857,
          "median_spread_ticks": 1.0000000000000009,
          "median_bid_depth_notional": 2953824.75,
          "median_ask_depth_notional": 3516592.75,
          "tightest_bucket": "09:00",
          "widest_bucket": "16:00",
          "deepest_bid_bucket": "15:00",
          "thinnest_bid_bucket": "11:00"
        }
      }
    },
    "peer_capacity": {
      "bx_ticket_pct_adv_50k": 6.4,
      "peers": [
        {
          "ticker": "AJBU",
          "pct": 4.2
        },
        {
          "ticker": "JYEU",
          "pct": 13.1
        },
        {
          "ticker": "AU8U",
          "pct": 95.3
        },
        {
          "ticker": "ODBU",
          "pct": 585.1
        },
        {
          "ticker": "D5IU",
          "pct": 18317.4
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
          "n_trades": 584,
          "n_runs": 445,
          "n_trade_days": 1,
          "first_trade_date": "2026-04-17",
          "last_trade_date": "2026-04-17",
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
            "retail_pct": 0.6404109589041096,
            "mixed_pct": 0.2910958904109589,
            "instit_pct": 0.02054794520547945,
            "ambiguous_pct": 0.04794520547945205,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.04794520547945205,
            "retail_qty_pct": 0.11044226044226044,
            "mixed_qty_pct": 0.3463144963144963,
            "instit_qty_pct": 0.20503685503685504,
            "ambiguous_qty_pct": 0.3382063882063882,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.3382063882063882,
            "retail_notional_pct": 0.11029426701014745,
            "mixed_notional_pct": 0.34666814400339785,
            "instit_notional_pct": 0.20495923473957323,
            "ambiguous_notional_pct": 0.33807835424688143,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.33807835424688143
          },
          "run_composition": {
            "retail_pct": 0.8292134831460675,
            "mixed_pct": 0.16179775280898875,
            "instit_pct": 0.006741573033707865,
            "ambiguous_pct": 0.0022471910112359553,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.0022471910112359553,
            "retail_notional_pct": 0.11029426701014745,
            "mixed_notional_pct": 0.34666814400339785,
            "instit_notional_pct": 0.20495923473957323,
            "unclear_notional_pct": 0.33807835424688143
          },
          "counts": {
            "trades": {
              "retail": 374,
              "mixed": 170,
              "institutional": 12,
              "ambiguous": 28,
              "unobservable": 0,
              "unclear": 28
            },
            "runs": {
              "retail": 369,
              "mixed": 72,
              "institutional": 3,
              "ambiguous": 1,
              "unobservable": 0,
              "unclear": 1
            }
          },
          "confidence": {
            "high": 0.5910112359550562,
            "medium": 0.2449438202247191,
            "low": 0.0,
            "na": 0.16404494382022472
          },
          "confidence_counts": {
            "high": 263,
            "medium": 109,
            "low": 0,
            "na": 73
          },
          "trade_confidence": {
            "high": 0.4606164383561644,
            "medium": 0.20034246575342465,
            "low": 0.0,
            "na": 0.339041095890411
          },
          "trade_confidence_counts": {
            "high": 269,
            "medium": 117,
            "low": 0,
            "na": 198
          },
          "observability": {
            "avg_feature_coverage": 0.8658426966292132,
            "observable_run_pct": 1.0,
            "ambiguous_run_pct": 0.0022471910112359553,
            "unobservable_run_pct": 0.0
          },
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "dominant_share": 0.8292134831460675,
          "dominance_gap": 0.6674157303370787,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 479,
              "MULTI_FILL_SINGLE_PRICE": 94,
              "WALK_BOOK": 11
            },
            "d2_information": {
              "NEUTRAL_OR_REVERSING": 581,
              "PERSISTENT_POSITIVE_IMPACT": 3
            },
            "d3_urgency": {
              "IMMEDIATE": 443,
              "ADAPTIVE": 2
            },
            "participant_confidence": {
              "HIGH": 263,
              "MEDIUM": 109,
              "NA": 73
            }
          },
          "trade_size": {
            "avg": 927.2517123287671,
            "median": 133.0
          },
          "run_size": {
            "avg": 1216.887640449438,
            "median": 198.0,
            "avg_length": 1.1348314606741574
          },
          "recent_trades": [
            {
              "trade_id": "BMLL-603",
              "timestamp": "2026-04-17T08:59:53.998300",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 57821,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-602",
              "timestamp": "2026-04-17T08:59:53.998300",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 57821,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-601",
              "timestamp": "2026-04-17T08:59:23.195200",
              "price": 0.66,
              "size": 200.0,
              "notional": 132.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 57820,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-600",
              "timestamp": "2026-04-17T08:59:18.440300",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 57819,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-599",
              "timestamp": "2026-04-17T08:59:13.877800",
              "price": 0.66,
              "size": 200.0,
              "notional": 132.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57818,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-598",
              "timestamp": "2026-04-17T08:59:11.101100",
              "price": 0.66,
              "size": 200.0,
              "notional": 132.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57818,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-597",
              "timestamp": "2026-04-17T08:58:45.471600",
              "price": 0.665,
              "size": 200.0,
              "notional": 133.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 57817,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-596",
              "timestamp": "2026-04-17T08:58:24.912700",
              "price": 0.665,
              "size": 300.0,
              "notional": 199.5,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 57816,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-595",
              "timestamp": "2026-04-17T08:58:18.517500",
              "price": 0.665,
              "size": 500.0,
              "notional": 332.5,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 57815,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-594",
              "timestamp": "2026-04-17T08:58:07.086900",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 57814,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-593",
              "timestamp": "2026-04-17T08:57:41.850000",
              "price": 0.66,
              "size": 100.0,
              "notional": 66.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 57813,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-592",
              "timestamp": "2026-04-17T08:57:09.386000",
              "price": 0.66,
              "size": 200.0,
              "notional": 132.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57812,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-591",
              "timestamp": "2026-04-17T08:57:09.385900",
              "price": 0.66,
              "size": 100.0,
              "notional": 66.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57812,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-590",
              "timestamp": "2026-04-17T08:57:09.385900",
              "price": 0.66,
              "size": 300.0,
              "notional": 198.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57812,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-589",
              "timestamp": "2026-04-17T08:57:09.385900",
              "price": 0.66,
              "size": 200.0,
              "notional": 132.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57812,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-588",
              "timestamp": "2026-04-17T08:56:56.727900",
              "price": 0.66,
              "size": 200.0,
              "notional": 132.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57811,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-587",
              "timestamp": "2026-04-17T08:56:56.727800",
              "price": 0.66,
              "size": 500.0,
              "notional": 330.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57811,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-586",
              "timestamp": "2026-04-17T08:56:44.727600",
              "price": 0.66,
              "size": 300.0,
              "notional": 198.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 57810,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-585",
              "timestamp": "2026-04-17T08:56:44.576400",
              "price": 0.665,
              "size": 900.0,
              "notional": 598.5,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 57809,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-584",
              "timestamp": "2026-04-17T08:56:39.726000",
              "price": 0.66,
              "size": 400.0,
              "notional": 264.0,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 57808,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-583",
              "timestamp": "2026-04-17T08:56:39.575300",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 57807,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-582",
              "timestamp": "2026-04-17T08:56:33.813000",
              "price": 0.66,
              "size": 200.0,
              "notional": 132.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57806,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-581",
              "timestamp": "2026-04-17T08:56:33.722300",
              "price": 0.66,
              "size": 400.0,
              "notional": 264.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57806,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-580",
              "timestamp": "2026-04-17T08:56:33.692200",
              "price": 0.66,
              "size": 800.0,
              "notional": 528.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57806,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-579",
              "timestamp": "2026-04-17T08:56:33.692200",
              "price": 0.66,
              "size": 2000.0,
              "notional": 1320.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57806,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-578",
              "timestamp": "2026-04-17T08:56:33.692200",
              "price": 0.66,
              "size": 200.0,
              "notional": 132.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57806,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-577",
              "timestamp": "2026-04-17T08:56:21.569400",
              "price": 0.66,
              "size": 1000.0,
              "notional": 660.0,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 57805,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-576",
              "timestamp": "2026-04-17T08:56:06.734600",
              "price": 0.66,
              "size": 200.0,
              "notional": 132.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 57804,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-575",
              "timestamp": "2026-04-17T08:56:06.583900",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 57803,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-574",
              "timestamp": "2026-04-17T08:56:02.116800",
              "price": 0.66,
              "size": 200.0,
              "notional": 132.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 57802,
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
              "retail_pct": 0.6404109589041096,
              "mixed_pct": 0.2910958904109589,
              "instit_pct": 0.02054794520547945,
              "ambiguous_pct": 0.04794520547945205,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.04794520547945205,
              "retail_qty_pct": 0.11044226044226044,
              "mixed_qty_pct": 0.3463144963144963,
              "instit_qty_pct": 0.20503685503685504,
              "ambiguous_qty_pct": 0.3382063882063882,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.3382063882063882,
              "retail_notional_pct": 0.11029426701014745,
              "mixed_notional_pct": 0.34666814400339785,
              "instit_notional_pct": 0.20495923473957323,
              "ambiguous_notional_pct": 0.33807835424688143,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.33807835424688143,
              "run_retail_pct": 0.8292134831460675,
              "run_mixed_pct": 0.16179775280898875,
              "run_instit_pct": 0.006741573033707865,
              "run_unclear_pct": 0.0022471910112359553,
              "avg_trade_size": 927.2517123287671,
              "avg_run_notional": 1216.887640449438,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.5910112359550562,
              "medium_confidence_pct": 0.2449438202247191,
              "low_confidence_pct": 0.0,
              "na_confidence_pct": 0.16404494382022472,
              "avg_feature_coverage": 0.8658426966292132,
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
              "retail_pct": 0.23529411764705882,
              "mixed_pct": 0.14705882352941177,
              "instit_pct": 0.47058823529411764,
              "ambiguous_pct": 0.14705882352941177,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.14705882352941177,
              "retail_qty_pct": 0.1461850101282917,
              "mixed_qty_pct": 0.060432140445644836,
              "instit_qty_pct": 0.6920999324780553,
              "ambiguous_qty_pct": 0.1012829169480081,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.1012829169480081,
              "retail_notional_pct": 0.14493547581923505,
              "mixed_notional_pct": 0.06028415924068605,
              "instit_notional_pct": 0.6936422368382665,
              "ambiguous_notional_pct": 0.10113812810181239,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.10113812810181239,
              "run_retail_pct": 0.5714285714285714,
              "run_mixed_pct": 0.21428571428571427,
              "run_instit_pct": 0.14285714285714285,
              "run_unclear_pct": 0.07142857142857142,
              "avg_trade_size": 4536.60294117647,
              "avg_run_notional": 11017.464285714286,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.7142857142857143,
              "na_confidence_pct": 0.2857142857142857,
              "avg_feature_coverage": 0.8821428571428571,
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
              "retail_pct": 0.5537037037037037,
              "mixed_pct": 0.2388888888888889,
              "instit_pct": 0.20123456790123456,
              "ambiguous_pct": 0.006172839506172839,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.006172839506172839,
              "retail_qty_pct": 0.09868520343391837,
              "mixed_qty_pct": 0.19089851830150656,
              "instit_qty_pct": 0.6865972425670936,
              "ambiguous_qty_pct": 0.02381903569748138,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.02381903569748138,
              "retail_notional_pct": 0.09789579880926952,
              "mixed_notional_pct": 0.19095849550018898,
              "instit_notional_pct": 0.687220176888229,
              "ambiguous_notional_pct": 0.023925528802312482,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.023925528802312482,
              "run_retail_pct": 0.8211981566820277,
              "run_mixed_pct": 0.17050691244239632,
              "run_instit_pct": 0.0064516129032258064,
              "run_unclear_pct": 0.0018433179723502304,
              "avg_trade_size": 4048.661111111111,
              "avg_run_notional": 6045.005529953917,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.44423963133640554,
              "medium_confidence_pct": 0.36589861751152075,
              "low_confidence_pct": 0.017511520737327188,
              "na_confidence_pct": 0.17235023041474654,
              "avg_feature_coverage": 0.8697695852534562,
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
              "retail_pct": 0.3978612558267069,
              "mixed_pct": 0.290924047162051,
              "instit_pct": 0.28653687962709073,
              "ambiguous_pct": 0.024677817384151358,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.024677817384151358,
              "retail_qty_pct": 0.17989704429754577,
              "mixed_qty_pct": 0.24514664539168757,
              "instit_qty_pct": 0.5419421016640072,
              "ambiguous_qty_pct": 0.033014208646759365,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.033014208646759365,
              "retail_notional_pct": 0.17968120212709335,
              "mixed_notional_pct": 0.24489887919535613,
              "instit_notional_pct": 0.5423268268922147,
              "ambiguous_notional_pct": 0.03309309178533583,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.03309309178533583,
              "run_retail_pct": 0.7647783251231527,
              "run_mixed_pct": 0.20566502463054187,
              "run_instit_pct": 0.020935960591133004,
              "run_unclear_pct": 0.008620689655172414,
              "avg_trade_size": 6800.120647107211,
              "avg_run_notional": 15270.960591133005,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.3232758620689655,
              "medium_confidence_pct": 0.4020935960591133,
              "low_confidence_pct": 0.0603448275862069,
              "na_confidence_pct": 0.21428571428571427,
              "avg_feature_coverage": 0.8774630541871918,
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
              "retail_pct": 0.6582984658298466,
              "mixed_pct": 0.19246861924686193,
              "instit_pct": 0.09623430962343096,
              "ambiguous_pct": 0.05299860529986053,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.05299860529986053,
              "retail_qty_pct": 0.11216982269931251,
              "mixed_qty_pct": 0.37920636835122423,
              "instit_qty_pct": 0.2613677481606561,
              "ambiguous_qty_pct": 0.24725606078880713,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.24725606078880713,
              "retail_notional_pct": 0.1120458203395627,
              "mixed_notional_pct": 0.37872559095580677,
              "instit_notional_pct": 0.26167852779770795,
              "ambiguous_notional_pct": 0.24755006090692258,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.24755006090692258,
              "run_retail_pct": 0.8489208633093526,
              "run_mixed_pct": 0.12410071942446044,
              "run_instit_pct": 0.014388489208633094,
              "run_unclear_pct": 0.012589928057553957,
              "avg_trade_size": 791.1562064156207,
              "avg_run_notional": 1020.25,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.6241007194244604,
              "medium_confidence_pct": 0.2392086330935252,
              "low_confidence_pct": 0.0,
              "na_confidence_pct": 0.1366906474820144,
              "avg_feature_coverage": 0.859982014388489,
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
              "retail_qty_pct": 0.08592321755027423,
              "mixed_qty_pct": 0.9140767824497258,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": 0.0,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.0,
              "retail_notional_pct": 0.08160587772238258,
              "mixed_notional_pct": 0.9183941222776174,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": 0.0,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.0,
              "run_retail_pct": 0.8,
              "run_mixed_pct": 0.2,
              "run_instit_pct": 0.0,
              "run_unclear_pct": 0.0,
              "avg_trade_size": 762.2,
              "avg_run_notional": 762.2,
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
          "n_trades": 9145,
          "n_runs": 6640,
          "n_trade_days": 21,
          "first_trade_date": "2026-03-19",
          "last_trade_date": "2026-04-17",
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
            "retail_pct": 0.59803171131766,
            "mixed_pct": 0.26517222525970474,
            "instit_pct": 0.09185347184253691,
            "ambiguous_pct": 0.04494259158009842,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.04494259158009842,
            "retail_qty_pct": 0.08694331936522173,
            "mixed_qty_pct": 0.3061585824468955,
            "instit_qty_pct": 0.4422472309036294,
            "ambiguous_qty_pct": 0.1646508672842534,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.1646508672842534,
            "retail_notional_pct": 0.08691553087741832,
            "mixed_notional_pct": 0.30596180736536593,
            "instit_notional_pct": 0.44277502255427714,
            "ambiguous_notional_pct": 0.1643476392029386,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.1643476392029386
          },
          "run_composition": {
            "retail_pct": 0.8174698795180723,
            "mixed_pct": 0.16430722891566266,
            "instit_pct": 0.012198795180722892,
            "ambiguous_pct": 0.006024096385542169,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.006024096385542169,
            "retail_notional_pct": 0.08691553087741832,
            "mixed_notional_pct": 0.30596180736536593,
            "instit_notional_pct": 0.44277502255427714,
            "unclear_notional_pct": 0.1643476392029386
          },
          "counts": {
            "trades": {
              "retail": 5469,
              "mixed": 2425,
              "institutional": 840,
              "ambiguous": 411,
              "unobservable": 0,
              "unclear": 411
            },
            "runs": {
              "retail": 5428,
              "mixed": 1091,
              "institutional": 81,
              "ambiguous": 40,
              "unobservable": 0,
              "unclear": 40
            }
          },
          "confidence": {
            "high": 0.5194277108433735,
            "medium": 0.29036144578313255,
            "low": 0.019879518072289156,
            "na": 0.17033132530120482
          },
          "confidence_counts": {
            "high": 3449,
            "medium": 1928,
            "low": 132,
            "na": 1131
          },
          "trade_confidence": {
            "high": 0.40984144341170037,
            "medium": 0.25948605795516677,
            "low": 0.020557681793329688,
            "na": 0.3101148168398032
          },
          "trade_confidence_counts": {
            "high": 3748,
            "medium": 2373,
            "low": 188,
            "na": 2836
          },
          "observability": {
            "avg_feature_coverage": 0.8678915662650601,
            "observable_run_pct": 1.0,
            "ambiguous_run_pct": 0.006024096385542169,
            "unobservable_run_pct": 0.0
          },
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "dominant_share": 0.8174698795180723,
          "dominance_gap": 0.6531626506024096,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 7356,
              "MULTI_FILL_SINGLE_PRICE": 1778,
              "WALK_BOOK": 11
            },
            "d2_information": {
              "NEUTRAL_OR_REVERSING": 8924,
              "MOMENTUM_REACTIVE": 166,
              "PERSISTENT_POSITIVE_IMPACT": 49,
              "UNOBSERVABLE": 6
            },
            "d3_urgency": {
              "IMMEDIATE": 6602,
              "ADAPTIVE": 38
            },
            "participant_confidence": {
              "HIGH": 3449,
              "MEDIUM": 1928,
              "NA": 1131,
              "LOW": 132
            }
          },
          "trade_size": {
            "avg": 1507.5715691634773,
            "median": 127.0
          },
          "run_size": {
            "avg": 2076.3165662650604,
            "median": 128.0,
            "avg_length": 1.163855421686747
          },
          "recent_trades": [
            {
              "trade_id": "BMLL-603",
              "timestamp": "2026-04-17T08:59:53.998300",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 57821,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-602",
              "timestamp": "2026-04-17T08:59:53.998300",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 57821,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-601",
              "timestamp": "2026-04-17T08:59:23.195200",
              "price": 0.66,
              "size": 200.0,
              "notional": 132.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 57820,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-600",
              "timestamp": "2026-04-17T08:59:18.440300",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 57819,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-599",
              "timestamp": "2026-04-17T08:59:13.877800",
              "price": 0.66,
              "size": 200.0,
              "notional": 132.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57818,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-598",
              "timestamp": "2026-04-17T08:59:11.101100",
              "price": 0.66,
              "size": 200.0,
              "notional": 132.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57818,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-597",
              "timestamp": "2026-04-17T08:58:45.471600",
              "price": 0.665,
              "size": 200.0,
              "notional": 133.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 57817,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-596",
              "timestamp": "2026-04-17T08:58:24.912700",
              "price": 0.665,
              "size": 300.0,
              "notional": 199.5,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 57816,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-595",
              "timestamp": "2026-04-17T08:58:18.517500",
              "price": 0.665,
              "size": 500.0,
              "notional": 332.5,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 57815,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-594",
              "timestamp": "2026-04-17T08:58:07.086900",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 57814,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-593",
              "timestamp": "2026-04-17T08:57:41.850000",
              "price": 0.66,
              "size": 100.0,
              "notional": 66.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 57813,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-592",
              "timestamp": "2026-04-17T08:57:09.386000",
              "price": 0.66,
              "size": 200.0,
              "notional": 132.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57812,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-591",
              "timestamp": "2026-04-17T08:57:09.385900",
              "price": 0.66,
              "size": 100.0,
              "notional": 66.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57812,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-590",
              "timestamp": "2026-04-17T08:57:09.385900",
              "price": 0.66,
              "size": 300.0,
              "notional": 198.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57812,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-589",
              "timestamp": "2026-04-17T08:57:09.385900",
              "price": 0.66,
              "size": 200.0,
              "notional": 132.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57812,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-588",
              "timestamp": "2026-04-17T08:56:56.727900",
              "price": 0.66,
              "size": 200.0,
              "notional": 132.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57811,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-587",
              "timestamp": "2026-04-17T08:56:56.727800",
              "price": 0.66,
              "size": 500.0,
              "notional": 330.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57811,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-586",
              "timestamp": "2026-04-17T08:56:44.727600",
              "price": 0.66,
              "size": 300.0,
              "notional": 198.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 57810,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-585",
              "timestamp": "2026-04-17T08:56:44.576400",
              "price": 0.665,
              "size": 900.0,
              "notional": 598.5,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 57809,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-584",
              "timestamp": "2026-04-17T08:56:39.726000",
              "price": 0.66,
              "size": 400.0,
              "notional": 264.0,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 57808,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-583",
              "timestamp": "2026-04-17T08:56:39.575300",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 57807,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-582",
              "timestamp": "2026-04-17T08:56:33.813000",
              "price": 0.66,
              "size": 200.0,
              "notional": 132.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57806,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-581",
              "timestamp": "2026-04-17T08:56:33.722300",
              "price": 0.66,
              "size": 400.0,
              "notional": 264.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57806,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-580",
              "timestamp": "2026-04-17T08:56:33.692200",
              "price": 0.66,
              "size": 800.0,
              "notional": 528.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57806,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-579",
              "timestamp": "2026-04-17T08:56:33.692200",
              "price": 0.66,
              "size": 2000.0,
              "notional": 1320.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57806,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-578",
              "timestamp": "2026-04-17T08:56:33.692200",
              "price": 0.66,
              "size": 200.0,
              "notional": 132.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57806,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-577",
              "timestamp": "2026-04-17T08:56:21.569400",
              "price": 0.66,
              "size": 1000.0,
              "notional": 660.0,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 57805,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-576",
              "timestamp": "2026-04-17T08:56:06.734600",
              "price": 0.66,
              "size": 200.0,
              "notional": 132.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 57804,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-575",
              "timestamp": "2026-04-17T08:56:06.583900",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 57803,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-574",
              "timestamp": "2026-04-17T08:56:02.116800",
              "price": 0.66,
              "size": 200.0,
              "notional": 132.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 57802,
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
              "retail_pct": 0.59803171131766,
              "mixed_pct": 0.26517222525970474,
              "instit_pct": 0.09185347184253691,
              "ambiguous_pct": 0.04494259158009842,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.04494259158009842,
              "retail_qty_pct": 0.08694331936522173,
              "mixed_qty_pct": 0.3061585824468955,
              "instit_qty_pct": 0.4422472309036294,
              "ambiguous_qty_pct": 0.1646508672842534,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.1646508672842534,
              "retail_notional_pct": 0.08691553087741832,
              "mixed_notional_pct": 0.30596180736536593,
              "instit_notional_pct": 0.44277502255427714,
              "ambiguous_notional_pct": 0.1643476392029386,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.1643476392029386,
              "run_retail_pct": 0.8174698795180723,
              "run_mixed_pct": 0.16430722891566266,
              "run_instit_pct": 0.012198795180722892,
              "run_unclear_pct": 0.006024096385542169,
              "avg_trade_size": 1507.5715691634773,
              "avg_run_notional": 2076.3165662650604,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.5194277108433735,
              "medium_confidence_pct": 0.29036144578313255,
              "low_confidence_pct": 0.019879518072289156,
              "na_confidence_pct": 0.17033132530120482,
              "avg_feature_coverage": 0.8678915662650601,
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
              "retail_pct": 0.38601146409042264,
              "mixed_pct": 0.3167724627270462,
              "instit_pct": 0.2560069195021477,
              "ambiguous_pct": 0.04094527436119215,
              "unobservable_pct": 0.00026387931919135646,
              "unclear_pct": 0.041209153680383505,
              "retail_qty_pct": 0.10712743455209736,
              "mixed_qty_pct": 0.2239090184874873,
              "instit_qty_pct": 0.6055561354833393,
              "ambiguous_qty_pct": 0.05706178062247617,
              "unobservable_qty_pct": 0.006345630854599896,
              "unclear_qty_pct": 0.06340741147707607,
              "retail_notional_pct": 0.10695615026097229,
              "mixed_notional_pct": 0.2234613518883812,
              "instit_notional_pct": 0.6062017825392886,
              "ambiguous_notional_pct": 0.05722131636331289,
              "unobservable_notional_pct": 0.006159398948045072,
              "unclear_notional_pct": 0.06338071531135796,
              "run_retail_pct": 0.7393267046292745,
              "run_mixed_pct": 0.22928038237984244,
              "run_instit_pct": 0.016729118106983742,
              "run_unclear_pct": 0.014663794883899331,
              "avg_trade_size": 6048.814624778268,
              "avg_run_notional": 12173.835069188328,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.39536187413330187,
              "medium_confidence_pct": 0.32938954946449117,
              "low_confidence_pct": 0.031304399138465167,
              "na_confidence_pct": 0.24394417726374176,
              "avg_feature_coverage": 0.8811480246658601,
              "observable_run_pct": 0.9998229722951641,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "AU8U",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.486664064532917,
              "mixed_pct": 0.2738745771532657,
              "instit_pct": 0.1960057246942493,
              "ambiguous_pct": 0.04345563361956804,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.04345563361956804,
              "retail_qty_pct": 0.09144409864470607,
              "mixed_qty_pct": 0.2927607334662762,
              "instit_qty_pct": 0.510258571059065,
              "ambiguous_qty_pct": 0.10553659682995274,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.10553659682995274,
              "retail_notional_pct": 0.09129901590812046,
              "mixed_notional_pct": 0.29312493372077114,
              "instit_notional_pct": 0.5085245612219377,
              "ambiguous_notional_pct": 0.10705148914917072,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.10705148914917072,
              "run_retail_pct": 0.7945101442985787,
              "run_mixed_pct": 0.17641314961484214,
              "run_instit_pct": 0.022024519908864056,
              "run_unclear_pct": 0.007052186177715092,
              "avg_trade_size": 1529.9197241738225,
              "avg_run_notional": 2551.5814256265594,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.48822827384181405,
              "medium_confidence_pct": 0.30367798632960835,
              "low_confidence_pct": 0.024628404036020398,
              "na_confidence_pct": 0.18346533579255722,
              "avg_feature_coverage": 0.8706520559835087,
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
              "retail_pct": 0.24133663366336633,
              "mixed_pct": 0.12252475247524752,
              "instit_pct": 0.25495049504950495,
              "ambiguous_pct": 0.3811881188118812,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.3811881188118812,
              "retail_qty_pct": 0.070305195672499,
              "mixed_qty_pct": 0.13279684786964072,
              "instit_qty_pct": 0.4652731401095232,
              "ambiguous_qty_pct": 0.3316248163483371,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.3316248163483371,
              "retail_notional_pct": 0.07062456382403023,
              "mixed_notional_pct": 0.13388243622138044,
              "instit_notional_pct": 0.46422156206449,
              "ambiguous_notional_pct": 0.33127143789009933,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.33127143789009933,
              "run_retail_pct": 0.4440993788819876,
              "run_mixed_pct": 0.15527950310559005,
              "run_instit_pct": 0.11180124223602485,
              "run_unclear_pct": 0.2888198757763975,
              "avg_trade_size": 3774.683787128713,
              "avg_run_notional": 9471.877329192546,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.027950310559006212,
              "medium_confidence_pct": 0.12111801242236025,
              "low_confidence_pct": 0.40683229813664595,
              "na_confidence_pct": 0.4440993788819876,
              "avg_feature_coverage": 0.8560559006211179,
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
              "retail_pct": 0.4956820815731429,
              "mixed_pct": 0.3363864069684848,
              "instit_pct": 0.12391117424950465,
              "ambiguous_pct": 0.04388949119593256,
              "unobservable_pct": 0.000130846012935063,
              "unclear_pct": 0.04402033720886762,
              "retail_qty_pct": 0.07422782527879662,
              "mixed_qty_pct": 0.24855104076387308,
              "instit_qty_pct": 0.40868290173662297,
              "ambiguous_qty_pct": 0.04728301405885275,
              "unobservable_qty_pct": 0.2212552181618546,
              "unclear_qty_pct": 0.26853823222070733,
              "retail_notional_pct": 0.07448291018881738,
              "mixed_notional_pct": 0.24913541666291608,
              "instit_notional_pct": 0.41046014107569795,
              "ambiguous_notional_pct": 0.047856636752052525,
              "unobservable_notional_pct": 0.2180648953205161,
              "unclear_notional_pct": 0.26592153207256863,
              "run_retail_pct": 0.772813487881981,
              "run_mixed_pct": 0.2143910883636911,
              "run_instit_pct": 0.005389131416528677,
              "run_unclear_pct": 0.007406292337799187,
              "avg_trade_size": 4367.6005624509335,
              "avg_run_notional": 7034.7100674394105,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.38380249887099205,
              "medium_confidence_pct": 0.3512268553364444,
              "low_confidence_pct": 0.04317326509107331,
              "na_confidence_pct": 0.2217973807014903,
              "avg_feature_coverage": 0.8832771338250789,
              "observable_run_pct": 0.9997892518440463,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "BMGU",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.10166919575113809,
              "mixed_pct": 0.36722306525037934,
              "instit_pct": 0.07132018209408195,
              "ambiguous_pct": 0.45068285280728376,
              "unobservable_pct": 0.009104704097116844,
              "unclear_pct": 0.4597875569044006,
              "retail_qty_pct": 0.07001972386587771,
              "mixed_qty_pct": 0.252465483234714,
              "instit_qty_pct": 0.2514792899408284,
              "ambiguous_qty_pct": 0.35404339250493094,
              "unobservable_qty_pct": 0.07199211045364892,
              "unclear_qty_pct": 0.42603550295857984,
              "retail_notional_pct": 0.06977546304280344,
              "mixed_notional_pct": 0.2592234907276469,
              "instit_notional_pct": 0.24766897756929834,
              "ambiguous_notional_pct": 0.3570861932190529,
              "unobservable_notional_pct": 0.06624587544119845,
              "unclear_notional_pct": 0.4233320686602513,
              "run_retail_pct": 0.40441176470588236,
              "run_mixed_pct": 0.3014705882352941,
              "run_instit_pct": 0.07352941176470588,
              "run_unclear_pct": 0.22058823529411764,
              "avg_trade_size": 65.99317147192716,
              "avg_run_notional": 319.7757352941176,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.3014705882352941,
              "low_confidence_pct": 0.17647058823529413,
              "na_confidence_pct": 0.5220588235294118,
              "avg_feature_coverage": 0.9264705882352942,
              "observable_run_pct": 0.9926470588235294,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "D5IU",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.7307692307692307,
              "mixed_pct": 0.2579185520361991,
              "instit_pct": 0.011312217194570135,
              "ambiguous_pct": 0.0,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.0,
              "retail_qty_pct": 0.12588664094064544,
              "mixed_qty_pct": 0.7355794903829684,
              "instit_qty_pct": 0.13853386867638615,
              "ambiguous_qty_pct": 0.0,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.0,
              "retail_notional_pct": 0.12951679025975,
              "mixed_notional_pct": 0.7368435226924352,
              "instit_notional_pct": 0.1336396870478148,
              "ambiguous_notional_pct": 0.0,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.0,
              "run_retail_pct": 0.8408488063660478,
              "run_mixed_pct": 0.15649867374005305,
              "run_instit_pct": 0.002652519893899204,
              "run_unclear_pct": 0.0,
              "avg_trade_size": 1117.3117647058825,
              "avg_run_notional": 1309.9517241379313,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.6153846153846154,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.22811671087533156,
              "na_confidence_pct": 0.15649867374005305,
              "avg_feature_coverage": 0.8515915119363392,
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
          "n_trades": 22103,
          "n_runs": 15414,
          "n_trade_days": 63,
          "first_trade_date": "2026-01-16",
          "last_trade_date": "2026-04-17",
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
            "retail_pct": 0.5759399176582365,
            "mixed_pct": 0.25259014613400893,
            "instit_pct": 0.1256842962493779,
            "ambiguous_pct": 0.045785639958376693,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.045785639958376693,
            "retail_qty_pct": 0.07781903334532503,
            "mixed_qty_pct": 0.30651839442240064,
            "instit_qty_pct": 0.4648048119007194,
            "ambiguous_qty_pct": 0.15085776033155493,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.15085776033155493,
            "retail_notional_pct": 0.0777584449591868,
            "mixed_notional_pct": 0.30716335919713567,
            "instit_notional_pct": 0.464528311325101,
            "ambiguous_notional_pct": 0.1505498845185766,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.1505498845185766
          },
          "run_composition": {
            "retail_pct": 0.8207473725184897,
            "mixed_pct": 0.1569352536654989,
            "instit_pct": 0.014856623848449461,
            "ambiguous_pct": 0.007460749967561957,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.007460749967561957,
            "retail_notional_pct": 0.0777584449591868,
            "mixed_notional_pct": 0.30716335919713567,
            "instit_notional_pct": 0.464528311325101,
            "unclear_notional_pct": 0.1505498845185766
          },
          "counts": {
            "trades": {
              "retail": 12730,
              "mixed": 5583,
              "institutional": 2778,
              "ambiguous": 1012,
              "unobservable": 0,
              "unclear": 1012
            },
            "runs": {
              "retail": 12651,
              "mixed": 2419,
              "institutional": 229,
              "ambiguous": 115,
              "unobservable": 0,
              "unclear": 115
            }
          },
          "confidence": {
            "high": 0.5216686129492669,
            "medium": 0.2917477617750097,
            "low": 0.022187621642662515,
            "na": 0.16439600363306087
          },
          "confidence_counts": {
            "high": 8041,
            "medium": 4497,
            "low": 342,
            "na": 2534
          },
          "trade_confidence": {
            "high": 0.4035198841786183,
            "medium": 0.2758449079310501,
            "low": 0.02225942179794598,
            "na": 0.29837578609238563
          },
          "trade_confidence_counts": {
            "high": 8919,
            "medium": 6097,
            "low": 492,
            "na": 6595
          },
          "observability": {
            "avg_feature_coverage": 0.8655118723238612,
            "observable_run_pct": 1.0,
            "ambiguous_run_pct": 0.007460749967561957,
            "unobservable_run_pct": 0.0
          },
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "dominant_share": 0.8207473725184897,
          "dominance_gap": 0.6638121188529909,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 16697,
              "MULTI_FILL_SINGLE_PRICE": 5319,
              "WALK_BOOK": 87
            },
            "d2_information": {
              "NEUTRAL_OR_REVERSING": 21298,
              "MOMENTUM_REACTIVE": 541,
              "PERSISTENT_POSITIVE_IMPACT": 251,
              "UNOBSERVABLE": 12,
              "SHORT_HORIZON_POSITIVE_IMPACT": 1
            },
            "d3_urgency": {
              "IMMEDIATE": 15298,
              "ADAPTIVE": 116
            },
            "participant_confidence": {
              "HIGH": 8041,
              "MEDIUM": 4497,
              "NA": 2534,
              "LOW": 342
            }
          },
          "trade_size": {
            "avg": 2278.2789892774736,
            "median": 132.0
          },
          "run_size": {
            "avg": 3266.9521538860777,
            "median": 131.0,
            "avg_length": 1.1515505384715194
          },
          "recent_trades": [
            {
              "trade_id": "BMLL-603",
              "timestamp": "2026-04-17T08:59:53.998300",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 57821,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-602",
              "timestamp": "2026-04-17T08:59:53.998300",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 57821,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-601",
              "timestamp": "2026-04-17T08:59:23.195200",
              "price": 0.66,
              "size": 200.0,
              "notional": 132.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 57820,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-600",
              "timestamp": "2026-04-17T08:59:18.440300",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 57819,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-599",
              "timestamp": "2026-04-17T08:59:13.877800",
              "price": 0.66,
              "size": 200.0,
              "notional": 132.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57818,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-598",
              "timestamp": "2026-04-17T08:59:11.101100",
              "price": 0.66,
              "size": 200.0,
              "notional": 132.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57818,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-597",
              "timestamp": "2026-04-17T08:58:45.471600",
              "price": 0.665,
              "size": 200.0,
              "notional": 133.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 57817,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-596",
              "timestamp": "2026-04-17T08:58:24.912700",
              "price": 0.665,
              "size": 300.0,
              "notional": 199.5,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 57816,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-595",
              "timestamp": "2026-04-17T08:58:18.517500",
              "price": 0.665,
              "size": 500.0,
              "notional": 332.5,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 57815,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-594",
              "timestamp": "2026-04-17T08:58:07.086900",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 57814,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-593",
              "timestamp": "2026-04-17T08:57:41.850000",
              "price": 0.66,
              "size": 100.0,
              "notional": 66.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 57813,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-592",
              "timestamp": "2026-04-17T08:57:09.386000",
              "price": 0.66,
              "size": 200.0,
              "notional": 132.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57812,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-591",
              "timestamp": "2026-04-17T08:57:09.385900",
              "price": 0.66,
              "size": 100.0,
              "notional": 66.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57812,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-590",
              "timestamp": "2026-04-17T08:57:09.385900",
              "price": 0.66,
              "size": 300.0,
              "notional": 198.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57812,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-589",
              "timestamp": "2026-04-17T08:57:09.385900",
              "price": 0.66,
              "size": 200.0,
              "notional": 132.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57812,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-588",
              "timestamp": "2026-04-17T08:56:56.727900",
              "price": 0.66,
              "size": 200.0,
              "notional": 132.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57811,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-587",
              "timestamp": "2026-04-17T08:56:56.727800",
              "price": 0.66,
              "size": 500.0,
              "notional": 330.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57811,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-586",
              "timestamp": "2026-04-17T08:56:44.727600",
              "price": 0.66,
              "size": 300.0,
              "notional": 198.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 57810,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-585",
              "timestamp": "2026-04-17T08:56:44.576400",
              "price": 0.665,
              "size": 900.0,
              "notional": 598.5,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 57809,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-584",
              "timestamp": "2026-04-17T08:56:39.726000",
              "price": 0.66,
              "size": 400.0,
              "notional": 264.0,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 57808,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-583",
              "timestamp": "2026-04-17T08:56:39.575300",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 57807,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-582",
              "timestamp": "2026-04-17T08:56:33.813000",
              "price": 0.66,
              "size": 200.0,
              "notional": 132.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57806,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-581",
              "timestamp": "2026-04-17T08:56:33.722300",
              "price": 0.66,
              "size": 400.0,
              "notional": 264.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57806,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-580",
              "timestamp": "2026-04-17T08:56:33.692200",
              "price": 0.66,
              "size": 800.0,
              "notional": 528.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57806,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-579",
              "timestamp": "2026-04-17T08:56:33.692200",
              "price": 0.66,
              "size": 2000.0,
              "notional": 1320.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57806,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-578",
              "timestamp": "2026-04-17T08:56:33.692200",
              "price": 0.66,
              "size": 200.0,
              "notional": 132.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57806,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-577",
              "timestamp": "2026-04-17T08:56:21.569400",
              "price": 0.66,
              "size": 1000.0,
              "notional": 660.0,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 57805,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-576",
              "timestamp": "2026-04-17T08:56:06.734600",
              "price": 0.66,
              "size": 200.0,
              "notional": 132.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 57804,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-575",
              "timestamp": "2026-04-17T08:56:06.583900",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 57803,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-574",
              "timestamp": "2026-04-17T08:56:02.116800",
              "price": 0.66,
              "size": 200.0,
              "notional": 132.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 57802,
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
              "retail_pct": 0.5759399176582365,
              "mixed_pct": 0.25259014613400893,
              "instit_pct": 0.1256842962493779,
              "ambiguous_pct": 0.045785639958376693,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.045785639958376693,
              "retail_qty_pct": 0.07781903334532503,
              "mixed_qty_pct": 0.30651839442240064,
              "instit_qty_pct": 0.4648048119007194,
              "ambiguous_qty_pct": 0.15085776033155493,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.15085776033155493,
              "retail_notional_pct": 0.0777584449591868,
              "mixed_notional_pct": 0.30716335919713567,
              "instit_notional_pct": 0.464528311325101,
              "ambiguous_notional_pct": 0.1505498845185766,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.1505498845185766,
              "run_retail_pct": 0.8207473725184897,
              "run_mixed_pct": 0.1569352536654989,
              "run_instit_pct": 0.014856623848449461,
              "run_unclear_pct": 0.007460749967561957,
              "avg_trade_size": 2278.2789892774736,
              "avg_run_notional": 3266.9521538860777,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.5216686129492669,
              "medium_confidence_pct": 0.2917477617750097,
              "low_confidence_pct": 0.022187621642662515,
              "na_confidence_pct": 0.16439600363306087,
              "avg_feature_coverage": 0.8655118723238612,
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
              "retail_pct": 0.3745914256394664,
              "mixed_pct": 0.337938504807875,
              "instit_pct": 0.2397808901220022,
              "ambiguous_pct": 0.04735186803998328,
              "unobservable_pct": 0.0003373113906731025,
              "unclear_pct": 0.047689179430656384,
              "retail_qty_pct": 0.0980922027499404,
              "mixed_qty_pct": 0.223508319809796,
              "instit_qty_pct": 0.6161991063787484,
              "ambiguous_qty_pct": 0.051939867582390685,
              "unobservable_qty_pct": 0.01026050347912449,
              "unclear_qty_pct": 0.06220037106151517,
              "retail_notional_pct": 0.09800969616579873,
              "mixed_notional_pct": 0.22337642760913526,
              "instit_notional_pct": 0.6162906104202143,
              "ambiguous_notional_pct": 0.052146490168128244,
              "unobservable_notional_pct": 0.010176775636723466,
              "unclear_notional_pct": 0.06232326580485171,
              "run_retail_pct": 0.7214503071711547,
              "run_mixed_pct": 0.24684695029760195,
              "run_instit_pct": 0.016334615605442956,
              "run_unclear_pct": 0.015368126925800463,
              "avg_trade_size": 6566.797576346395,
              "avg_run_notional": 13226.84817754684,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.3237162925111481,
              "medium_confidence_pct": 0.3645002009530918,
              "low_confidence_pct": 0.04956842931235766,
              "na_confidence_pct": 0.2622150772234024,
              "avg_feature_coverage": 0.885691182943867,
              "observable_run_pct": 0.9996937857648658,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "JYEU",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.4674198103691749,
              "mixed_pct": 0.32882096373640896,
              "instit_pct": 0.15722802306734468,
              "ambiguous_pct": 0.04622512225831809,
              "unobservable_pct": 0.0003060805687533478,
              "unclear_pct": 0.04653120282707144,
              "retail_qty_pct": 0.08324979308208563,
              "mixed_qty_pct": 0.2321513326198132,
              "instit_qty_pct": 0.5385425052197145,
              "ambiguous_qty_pct": 0.045773105309645255,
              "unobservable_qty_pct": 0.1002832637687414,
              "unclear_qty_pct": 0.14605636907838665,
              "retail_notional_pct": 0.08290275848570011,
              "mixed_notional_pct": 0.22999915788706746,
              "instit_notional_pct": 0.5463879606554971,
              "ambiguous_notional_pct": 0.045768877881538286,
              "unobservable_notional_pct": 0.09494124509019691,
              "unclear_notional_pct": 0.14071012297173519,
              "run_retail_pct": 0.7644726126827887,
              "run_mixed_pct": 0.21896871201123583,
              "run_instit_pct": 0.007518087077623954,
              "run_unclear_pct": 0.009040588228351567,
              "avg_trade_size": 4374.814638233637,
              "avg_run_notional": 7422.402349726776,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.3715965017880537,
              "medium_confidence_pct": 0.3557577688866858,
              "low_confidence_pct": 0.04463642908567315,
              "na_confidence_pct": 0.2280093002395874,
              "avg_feature_coverage": 0.8841943136352369,
              "observable_run_pct": 0.9995279066199294,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "AU8U",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.47203202550447415,
              "mixed_pct": 0.28255986668115785,
              "instit_pct": 0.20008694707097055,
              "ambiguous_pct": 0.045321160743397454,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.045321160743397454,
              "retail_qty_pct": 0.10221393229176544,
              "mixed_qty_pct": 0.2744519025162838,
              "instit_qty_pct": 0.5458059534275482,
              "ambiguous_qty_pct": 0.07752821176440247,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.07752821176440247,
              "retail_notional_pct": 0.10302375905185257,
              "mixed_notional_pct": 0.27527805767494923,
              "instit_notional_pct": 0.5447479354400725,
              "ambiguous_notional_pct": 0.07695024783312573,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.07695024783312573,
              "run_retail_pct": 0.7847759247181589,
              "run_mixed_pct": 0.1878629771110904,
              "run_instit_pct": 0.019441597565141775,
              "run_unclear_pct": 0.00791950060560887,
              "avg_trade_size": 1677.8748596167084,
              "avg_run_notional": 2876.7588900276405,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.46383428056771947,
              "medium_confidence_pct": 0.3165936830336346,
              "low_confidence_pct": 0.023789558681946644,
              "na_confidence_pct": 0.19578247771669927,
              "avg_feature_coverage": 0.8726389018292492,
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
              "retail_pct": 0.35400390625,
              "mixed_pct": 0.1533203125,
              "instit_pct": 0.1962890625,
              "ambiguous_pct": 0.29638671875,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.29638671875,
              "retail_qty_pct": 0.0862573491905823,
              "mixed_qty_pct": 0.15725254369244812,
              "instit_qty_pct": 0.39991677628929634,
              "ambiguous_qty_pct": 0.35657333082767323,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.35657333082767323,
              "retail_notional_pct": 0.08719612335670972,
              "mixed_notional_pct": 0.1586163675691674,
              "instit_notional_pct": 0.3965173675216196,
              "ambiguous_notional_pct": 0.35767014155250326,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.35767014155250326,
              "run_retail_pct": 0.5651423641069888,
              "run_mixed_pct": 0.1725625539257981,
              "run_instit_pct": 0.07506471095772217,
              "run_unclear_pct": 0.18723037100949094,
              "avg_trade_size": 3840.7099609375,
              "avg_run_notional": 6786.690250215704,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.181190681622088,
              "medium_confidence_pct": 0.1285591026747196,
              "low_confidence_pct": 0.33045729076790337,
              "na_confidence_pct": 0.359792924935289,
              "avg_feature_coverage": 0.8459879206212252,
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
              "retail_pct": 0.11462450592885376,
              "mixed_pct": 0.33201581027667987,
              "instit_pct": 0.09749670619235837,
              "ambiguous_pct": 0.4426877470355731,
              "unobservable_pct": 0.013175230566534914,
              "unclear_pct": 0.45586297760210803,
              "retail_qty_pct": 0.05702647657841141,
              "mixed_qty_pct": 0.13441955193482688,
              "instit_qty_pct": 0.40054310930074677,
              "ambiguous_qty_pct": 0.36591989137813985,
              "unobservable_qty_pct": 0.042090970807875085,
              "unclear_qty_pct": 0.40801086218601496,
              "retail_notional_pct": 0.0589828123593943,
              "mixed_notional_pct": 0.14158329174813275,
              "instit_notional_pct": 0.3839077544809758,
              "ambiguous_notional_pct": 0.37469220134327014,
              "unobservable_notional_pct": 0.040833940068227,
              "unclear_notional_pct": 0.41552614141149713,
              "run_retail_pct": 0.3526570048309179,
              "run_mixed_pct": 0.23671497584541062,
              "run_instit_pct": 0.10628019323671498,
              "run_unclear_pct": 0.30434782608695654,
              "avg_trade_size": 161.05270092226613,
              "avg_run_notional": 590.5265700483092,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Mixed, leaning retail-like",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.19806763285024154,
              "low_confidence_pct": 0.2608695652173913,
              "na_confidence_pct": 0.5410628019323671,
              "avg_feature_coverage": 0.8876811594202896,
              "observable_run_pct": 0.9855072463768116,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "D5IU",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.6263688129653964,
              "mixed_pct": 0.23565484012264565,
              "instit_pct": 0.11826544021024968,
              "ambiguous_pct": 0.01971090670170828,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.01971090670170828,
              "retail_qty_pct": 0.12281278472221306,
              "mixed_qty_pct": 0.49649809292709396,
              "instit_qty_pct": 0.3532951051255725,
              "ambiguous_qty_pct": 0.027394017225120474,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.027394017225120474,
              "retail_notional_pct": 0.12257190273524461,
              "mixed_notional_pct": 0.498389549538007,
              "instit_notional_pct": 0.3520819515361762,
              "ambiguous_notional_pct": 0.026956596190572172,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.026956596190572172,
              "run_retail_pct": 0.8195179306290418,
              "run_mixed_pct": 0.15520282186948853,
              "run_instit_pct": 0.015873015873015872,
              "run_unclear_pct": 0.00940623162845385,
              "avg_trade_size": 2643.392159439334,
              "avg_run_notional": 3547.833215755438,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.4756025867136978,
              "medium_confidence_pct": 0.14520870076425632,
              "low_confidence_pct": 0.21457965902410348,
              "na_confidence_pct": 0.1646090534979424,
              "avg_feature_coverage": 0.8554673721340386,
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
          "n_trades": 47988,
          "n_runs": 34538,
          "n_trade_days": 126,
          "first_trade_date": "2025-10-16",
          "last_trade_date": "2026-04-17",
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
            "retail_pct": 0.6009835792281404,
            "mixed_pct": 0.24981245311327832,
            "instit_pct": 0.10806868383762608,
            "ambiguous_pct": 0.041135283820955236,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.041135283820955236,
            "retail_qty_pct": 0.09595402405311675,
            "mixed_qty_pct": 0.30439569550645473,
            "instit_qty_pct": 0.4830551835355437,
            "ambiguous_qty_pct": 0.1165950969048848,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.1165950969048848,
            "retail_notional_pct": 0.09604115454070805,
            "mixed_notional_pct": 0.30461240151302754,
            "instit_notional_pct": 0.48318535403042756,
            "ambiguous_notional_pct": 0.11616108991583686,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.11616108991583686
          },
          "run_composition": {
            "retail_pct": 0.8264230702414732,
            "mixed_pct": 0.15432277491458682,
            "instit_pct": 0.013115988186924547,
            "ambiguous_pct": 0.006138166657015462,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.006138166657015462,
            "retail_notional_pct": 0.09604115454070805,
            "mixed_notional_pct": 0.30461240151302754,
            "instit_notional_pct": 0.48318535403042756,
            "unclear_notional_pct": 0.11616108991583686
          },
          "counts": {
            "trades": {
              "retail": 28840,
              "mixed": 11988,
              "institutional": 5186,
              "ambiguous": 1974,
              "unobservable": 0,
              "unclear": 1974
            },
            "runs": {
              "retail": 28543,
              "mixed": 5330,
              "institutional": 453,
              "ambiguous": 212,
              "unobservable": 0,
              "unclear": 212
            }
          },
          "confidence": {
            "high": 0.4960044009496786,
            "medium": 0.3142915050089756,
            "low": 0.02924315246974347,
            "na": 0.1604609415716023
          },
          "confidence_counts": {
            "high": 17131,
            "medium": 10855,
            "low": 1010,
            "na": 5542
          },
          "trade_confidence": {
            "high": 0.38988913895140453,
            "medium": 0.29026006501625407,
            "low": 0.02890305909810786,
            "na": 0.29094773693423354
          },
          "trade_confidence_counts": {
            "high": 18710,
            "medium": 13929,
            "low": 1387,
            "na": 13962
          },
          "observability": {
            "avg_feature_coverage": 0.8655611210840232,
            "observable_run_pct": 1.0,
            "ambiguous_run_pct": 0.006138166657015462,
            "unobservable_run_pct": 0.0
          },
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "dominant_share": 0.8264230702414732,
          "dominance_gap": 0.6721002953268864,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 37636,
              "MULTI_FILL_SINGLE_PRICE": 10141,
              "WALK_BOOK": 211
            },
            "d2_information": {
              "NEUTRAL_OR_REVERSING": 46638,
              "MOMENTUM_REACTIVE": 911,
              "PERSISTENT_POSITIVE_IMPACT": 406,
              "UNOBSERVABLE": 29,
              "SHORT_HORIZON_POSITIVE_IMPACT": 4
            },
            "d3_urgency": {
              "IMMEDIATE": 34245,
              "ADAPTIVE": 287,
              "SCHEDULED": 6
            },
            "participant_confidence": {
              "HIGH": 17131,
              "MEDIUM": 10855,
              "NA": 5542,
              "LOW": 1010
            }
          },
          "trade_size": {
            "avg": 1880.4287217637743,
            "median": 136.0
          },
          "run_size": {
            "avg": 2612.7168191557125,
            "median": 137.0,
            "avg_length": 1.151803810295906
          },
          "recent_trades": [
            {
              "trade_id": "BMLL-603",
              "timestamp": "2026-04-17T08:59:53.998300",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 57821,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-602",
              "timestamp": "2026-04-17T08:59:53.998300",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 57821,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-601",
              "timestamp": "2026-04-17T08:59:23.195200",
              "price": 0.66,
              "size": 200.0,
              "notional": 132.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 57820,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-600",
              "timestamp": "2026-04-17T08:59:18.440300",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 57819,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-599",
              "timestamp": "2026-04-17T08:59:13.877800",
              "price": 0.66,
              "size": 200.0,
              "notional": 132.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57818,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-598",
              "timestamp": "2026-04-17T08:59:11.101100",
              "price": 0.66,
              "size": 200.0,
              "notional": 132.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57818,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-597",
              "timestamp": "2026-04-17T08:58:45.471600",
              "price": 0.665,
              "size": 200.0,
              "notional": 133.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 57817,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-596",
              "timestamp": "2026-04-17T08:58:24.912700",
              "price": 0.665,
              "size": 300.0,
              "notional": 199.5,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 57816,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-595",
              "timestamp": "2026-04-17T08:58:18.517500",
              "price": 0.665,
              "size": 500.0,
              "notional": 332.5,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 57815,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-594",
              "timestamp": "2026-04-17T08:58:07.086900",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 57814,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-593",
              "timestamp": "2026-04-17T08:57:41.850000",
              "price": 0.66,
              "size": 100.0,
              "notional": 66.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 57813,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-592",
              "timestamp": "2026-04-17T08:57:09.386000",
              "price": 0.66,
              "size": 200.0,
              "notional": 132.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57812,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-591",
              "timestamp": "2026-04-17T08:57:09.385900",
              "price": 0.66,
              "size": 100.0,
              "notional": 66.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57812,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-590",
              "timestamp": "2026-04-17T08:57:09.385900",
              "price": 0.66,
              "size": 300.0,
              "notional": 198.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57812,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-589",
              "timestamp": "2026-04-17T08:57:09.385900",
              "price": 0.66,
              "size": 200.0,
              "notional": 132.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57812,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-588",
              "timestamp": "2026-04-17T08:56:56.727900",
              "price": 0.66,
              "size": 200.0,
              "notional": 132.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57811,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-587",
              "timestamp": "2026-04-17T08:56:56.727800",
              "price": 0.66,
              "size": 500.0,
              "notional": 330.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57811,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-586",
              "timestamp": "2026-04-17T08:56:44.727600",
              "price": 0.66,
              "size": 300.0,
              "notional": 198.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 57810,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-585",
              "timestamp": "2026-04-17T08:56:44.576400",
              "price": 0.665,
              "size": 900.0,
              "notional": 598.5,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 57809,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-584",
              "timestamp": "2026-04-17T08:56:39.726000",
              "price": 0.66,
              "size": 400.0,
              "notional": 264.0,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 57808,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-583",
              "timestamp": "2026-04-17T08:56:39.575300",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 57807,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-582",
              "timestamp": "2026-04-17T08:56:33.813000",
              "price": 0.66,
              "size": 200.0,
              "notional": 132.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57806,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-581",
              "timestamp": "2026-04-17T08:56:33.722300",
              "price": 0.66,
              "size": 400.0,
              "notional": 264.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57806,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-580",
              "timestamp": "2026-04-17T08:56:33.692200",
              "price": 0.66,
              "size": 800.0,
              "notional": 528.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57806,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-579",
              "timestamp": "2026-04-17T08:56:33.692200",
              "price": 0.66,
              "size": 2000.0,
              "notional": 1320.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57806,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-578",
              "timestamp": "2026-04-17T08:56:33.692200",
              "price": 0.66,
              "size": 200.0,
              "notional": 132.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57806,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-577",
              "timestamp": "2026-04-17T08:56:21.569400",
              "price": 0.66,
              "size": 1000.0,
              "notional": 660.0,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 57805,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-576",
              "timestamp": "2026-04-17T08:56:06.734600",
              "price": 0.66,
              "size": 200.0,
              "notional": 132.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 57804,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-575",
              "timestamp": "2026-04-17T08:56:06.583900",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 57803,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-574",
              "timestamp": "2026-04-17T08:56:02.116800",
              "price": 0.66,
              "size": 200.0,
              "notional": 132.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 57802,
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
              "retail_pct": 0.6009835792281404,
              "mixed_pct": 0.24981245311327832,
              "instit_pct": 0.10806868383762608,
              "ambiguous_pct": 0.041135283820955236,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.041135283820955236,
              "retail_qty_pct": 0.09595402405311675,
              "mixed_qty_pct": 0.30439569550645473,
              "instit_qty_pct": 0.4830551835355437,
              "ambiguous_qty_pct": 0.1165950969048848,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.1165950969048848,
              "retail_notional_pct": 0.09604115454070805,
              "mixed_notional_pct": 0.30461240151302754,
              "instit_notional_pct": 0.48318535403042756,
              "ambiguous_notional_pct": 0.11616108991583686,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.11616108991583686,
              "run_retail_pct": 0.8264230702414732,
              "run_mixed_pct": 0.15432277491458682,
              "run_instit_pct": 0.013115988186924547,
              "run_unclear_pct": 0.006138166657015462,
              "avg_trade_size": 1880.4287217637743,
              "avg_run_notional": 2612.7168191557125,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.4960044009496786,
              "medium_confidence_pct": 0.3142915050089756,
              "low_confidence_pct": 0.02924315246974347,
              "na_confidence_pct": 0.1604609415716023,
              "avg_feature_coverage": 0.8655611210840232,
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
              "retail_pct": 0.36581123976164326,
              "mixed_pct": 0.3309222877622263,
              "instit_pct": 0.2324581355195267,
              "ambiguous_pct": 0.07047156130699112,
              "unobservable_pct": 0.00033677564961258235,
              "unclear_pct": 0.0708083369566037,
              "retail_qty_pct": 0.0999123066648966,
              "mixed_qty_pct": 0.22501276161017456,
              "instit_qty_pct": 0.6132187958452768,
              "ambiguous_qty_pct": 0.047432156299329536,
              "unobservable_qty_pct": 0.014423979580322502,
              "unclear_qty_pct": 0.06185613587965204,
              "retail_notional_pct": 0.09985195222280908,
              "mixed_notional_pct": 0.22495930543753603,
              "instit_notional_pct": 0.6133344185506693,
              "ambiguous_notional_pct": 0.04743384795113092,
              "unobservable_notional_pct": 0.014420475837854718,
              "unclear_notional_pct": 0.061854323788985636,
              "run_retail_pct": 0.7221820640162251,
              "run_mixed_pct": 0.24557580800332823,
              "run_instit_pct": 0.015278608388153618,
              "run_unclear_pct": 0.016963519592293093,
              "avg_trade_size": 5646.904667986962,
              "avg_run_notional": 11684.404405990796,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.31497438830962843,
              "medium_confidence_pct": 0.36971840141449336,
              "low_confidence_pct": 0.052767882680256895,
              "na_confidence_pct": 0.2625393275956213,
              "avg_feature_coverage": 0.8863712004992329,
              "observable_run_pct": 0.9995995735718557,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "JYEU",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.4494974172832612,
              "mixed_pct": 0.3104960677555959,
              "instit_pct": 0.16225355608295716,
              "ambiguous_pct": 0.07748925807002031,
              "unobservable_pct": 0.00026370080816541796,
              "unclear_pct": 0.07775295887818573,
              "retail_qty_pct": 0.08343950850977462,
              "mixed_qty_pct": 0.21816943133393274,
              "instit_qty_pct": 0.5660332960745597,
              "ambiguous_qty_pct": 0.06607966366971398,
              "unobservable_qty_pct": 0.066278100412019,
              "unclear_qty_pct": 0.13235776408173297,
              "retail_notional_pct": 0.08327593752655274,
              "mixed_notional_pct": 0.21640871785464955,
              "instit_notional_pct": 0.5716214674250991,
              "ambiguous_notional_pct": 0.06697952924384237,
              "unobservable_notional_pct": 0.061714347949856176,
              "unclear_notional_pct": 0.12869387719369854,
              "run_retail_pct": 0.766691279474988,
              "run_mixed_pct": 0.21264776310977082,
              "run_instit_pct": 0.00879160312191621,
              "run_unclear_pct": 0.011869354293324868,
              "avg_trade_size": 4050.085320745498,
              "avg_run_notional": 7207.095399866124,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.3798055358116361,
              "medium_confidence_pct": 0.35428642408098765,
              "low_confidence_pct": 0.04139092270428056,
              "na_confidence_pct": 0.22451711740309568,
              "avg_feature_coverage": 0.8832693860369467,
              "observable_run_pct": 0.9995790519698298,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "AU8U",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.4905308554523105,
              "mixed_pct": 0.26907371140464187,
              "instit_pct": 0.19734155589816244,
              "ambiguous_pct": 0.04305387724488521,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.04305387724488521,
              "retail_qty_pct": 0.11606559794161134,
              "mixed_qty_pct": 0.2685329839582024,
              "instit_qty_pct": 0.5375328733753305,
              "ambiguous_qty_pct": 0.0778685447248557,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.0778685447248557,
              "retail_notional_pct": 0.11739102818167517,
              "mixed_notional_pct": 0.2683717956679468,
              "instit_notional_pct": 0.5366924190887405,
              "ambiguous_notional_pct": 0.07754475706163752,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.07754475706163752,
              "run_retail_pct": 0.7954197676844961,
              "run_mixed_pct": 0.17674062739097168,
              "run_instit_pct": 0.019753773388050358,
              "run_unclear_pct": 0.008085831536481881,
              "avg_trade_size": 1689.218404933539,
              "avg_run_notional": 2819.7504694998956,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.46285734158725744,
              "medium_confidence_pct": 0.32845864923141127,
              "low_confidence_pct": 0.023857550253877723,
              "na_confidence_pct": 0.18482645892745359,
              "avg_feature_coverage": 0.8703067399318354,
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
              "retail_pct": 0.5296138743455497,
              "mixed_pct": 0.21515052356020942,
              "instit_pct": 0.17588350785340315,
              "ambiguous_pct": 0.0793520942408377,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.0793520942408377,
              "retail_qty_pct": 0.11660105708131441,
              "mixed_qty_pct": 0.4277170274875311,
              "instit_qty_pct": 0.38524007054489906,
              "ambiguous_qty_pct": 0.07044184488625543,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.07044184488625543,
              "retail_notional_pct": 0.11240746507163332,
              "mixed_notional_pct": 0.40146616552293196,
              "instit_notional_pct": 0.3969362708531213,
              "ambiguous_notional_pct": 0.08919009855231336,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.08919009855231336,
              "run_retail_pct": 0.7715773809523809,
              "run_mixed_pct": 0.16319444444444445,
              "run_instit_pct": 0.030257936507936508,
              "run_unclear_pct": 0.034970238095238096,
              "avg_trade_size": 1838.538727094241,
              "avg_run_notional": 2786.991245039683,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.36507936507936506,
              "medium_confidence_pct": 0.21899801587301587,
              "low_confidence_pct": 0.2177579365079365,
              "na_confidence_pct": 0.19816468253968253,
              "avg_feature_coverage": 0.8546874999999998,
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
              "retail_pct": 0.4115481941568898,
              "mixed_pct": 0.18817575339314468,
              "instit_pct": 0.15021854152288935,
              "ambiguous_pct": 0.2500575109270761,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.2500575109270761,
              "retail_qty_pct": 0.09287670494158613,
              "mixed_qty_pct": 0.17020719301421733,
              "instit_qty_pct": 0.3761714552044774,
              "ambiguous_qty_pct": 0.36074464683971913,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.36074464683971913,
              "retail_notional_pct": 0.09323049461479242,
              "mixed_notional_pct": 0.1706087576681673,
              "instit_notional_pct": 0.3748833271609538,
              "ambiguous_notional_pct": 0.36127742055608647,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.36127742055608647,
              "run_retail_pct": 0.6413632842757552,
              "run_mixed_pct": 0.1611154144074361,
              "run_instit_pct": 0.055770720371804805,
              "run_unclear_pct": 0.14175058094500387,
              "avg_trade_size": 3094.9511157119855,
              "avg_run_notional": 5210.593532145624,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.22114639814097597,
              "medium_confidence_pct": 0.18861347792408986,
              "low_confidence_pct": 0.28737412858249417,
              "na_confidence_pct": 0.30286599535243997,
              "avg_feature_coverage": 0.85,
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
              "retail_pct": 0.1408199643493761,
              "mixed_pct": 0.19607843137254902,
              "instit_pct": 0.21271538918597743,
              "ambiguous_pct": 0.44325609031491386,
              "unobservable_pct": 0.0071301247771836,
              "unclear_pct": 0.4503862150920975,
              "retail_qty_pct": 0.008149695391179797,
              "mixed_qty_pct": 0.015830504198209524,
              "instit_qty_pct": 0.07348122611608962,
              "ambiguous_qty_pct": 0.05052811142531474,
              "unobservable_qty_pct": 0.8520104628692063,
              "unclear_qty_pct": 0.9025385742945211,
              "retail_notional_pct": 0.00819901754354522,
              "mixed_notional_pct": 0.01573765343435628,
              "instit_notional_pct": 0.0709187268249064,
              "ambiguous_notional_pct": 0.05050264870577925,
              "unobservable_notional_pct": 0.8546419534914128,
              "unclear_notional_pct": 0.9051446021971921,
              "run_retail_pct": 0.48654708520179374,
              "run_mixed_pct": 0.18161434977578475,
              "run_instit_pct": 0.08520179372197309,
              "run_unclear_pct": 0.24663677130044845,
              "avg_trade_size": 1166.9731431966727,
              "avg_run_notional": 4403.622869955157,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.2062780269058296,
              "medium_confidence_pct": 0.17040358744394618,
              "low_confidence_pct": 0.19506726457399104,
              "na_confidence_pct": 0.4282511210762332,
              "avg_feature_coverage": 0.8822869955156948,
              "observable_run_pct": 0.9887892376681614,
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
      "n_trades": 47988,
      "n_runs": 34538,
      "n_trade_days": 126,
      "first_trade_date": "2025-10-16",
      "last_trade_date": "2026-04-17",
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
        "retail_pct": 0.6009835792281404,
        "mixed_pct": 0.24981245311327832,
        "instit_pct": 0.10806868383762608,
        "ambiguous_pct": 0.041135283820955236,
        "unobservable_pct": 0.0,
        "unclear_pct": 0.041135283820955236,
        "retail_qty_pct": 0.09595402405311675,
        "mixed_qty_pct": 0.30439569550645473,
        "instit_qty_pct": 0.4830551835355437,
        "ambiguous_qty_pct": 0.1165950969048848,
        "unobservable_qty_pct": 0.0,
        "unclear_qty_pct": 0.1165950969048848,
        "retail_notional_pct": 0.09604115454070805,
        "mixed_notional_pct": 0.30461240151302754,
        "instit_notional_pct": 0.48318535403042756,
        "ambiguous_notional_pct": 0.11616108991583686,
        "unobservable_notional_pct": 0.0,
        "unclear_notional_pct": 0.11616108991583686
      },
      "run_composition": {
        "retail_pct": 0.8264230702414732,
        "mixed_pct": 0.15432277491458682,
        "instit_pct": 0.013115988186924547,
        "ambiguous_pct": 0.006138166657015462,
        "unobservable_pct": 0.0,
        "unclear_pct": 0.006138166657015462
      },
      "trade_size": {
        "avg": 1880.4287217637743,
        "median": 136.0
      },
      "run_size": {
        "avg": 2612.7168191557125,
        "median": 137.0,
        "avg_length": 1.151803810295906
      },
      "confidence": {
        "high": 0.4960044009496786,
        "medium": 0.3142915050089756,
        "low": 0.02924315246974347,
        "na": 0.1604609415716023
      },
      "confidence_counts": {
        "high": 17131,
        "medium": 10855,
        "low": 1010,
        "na": 5542
      },
      "trade_confidence": {
        "high": 0.38988913895140453,
        "medium": 0.29026006501625407,
        "low": 0.02890305909810786,
        "na": 0.29094773693423354
      },
      "trade_confidence_counts": {
        "high": 18710,
        "medium": 13929,
        "low": 1387,
        "na": 13962
      },
      "counts": {
        "trades": {
          "retail": 28840,
          "mixed": 11988,
          "institutional": 5186,
          "ambiguous": 1974,
          "unobservable": 0,
          "unclear": 1974
        },
        "runs": {
          "retail": 28543,
          "mixed": 5330,
          "institutional": 453,
          "ambiguous": 212,
          "unobservable": 0,
          "unclear": 212
        }
      },
      "observability": {
        "avg_feature_coverage": 0.8655611210840232,
        "observable_run_pct": 1.0,
        "ambiguous_run_pct": 0.006138166657015462,
        "unobservable_run_pct": 0.0
      },
      "dominant_bucket": "RETAIL",
      "dominant_label": "Retail-led",
      "dominant_share": 0.8264230702414732,
      "dominance_gap": 0.6721002953268864,
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
            "n_trades": 5545,
            "n_runs": 4115,
            "retail_pct": 0.6045085662759243,
            "mixed_pct": 0.2768259693417493,
            "instit_pct": 0.06402164111812443,
            "ambiguous_pct": 0.05464382326420198,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.05464382326420198,
            "avg_trade_size": 1557.338954012624,
            "avg_run_notional": 2098.528432563791,
            "retail_qty_pct": 0.08354306750309906,
            "mixed_qty_pct": 0.2933548702152436,
            "instit_qty_pct": 0.39112730551068703,
            "ambiguous_qty_pct": 0.2319747567709703,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.2319747567709703,
            "retail_notional_pct": 0.0835860852327868,
            "mixed_notional_pct": 0.29336098448667003,
            "instit_notional_pct": 0.392770632710337,
            "ambiguous_notional_pct": 0.23028229757020613,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.23028229757020613,
            "run_retail_pct": 0.8109356014580802,
            "run_mixed_pct": 0.17278250303766707,
            "run_instit_pct": 0.009477521263669502,
            "run_ambiguous_pct": 0.006804374240583232,
            "run_unobservable_pct": 0.0,
            "run_unclear_pct": 0.006804374240583232,
            "avg_feature_coverage": 0.8703766707168893,
            "high_confidence_pct": 0.53681652490887,
            "medium_confidence_pct": 0.2675577156743621,
            "low_confidence_pct": 0.01603888213851762,
            "na_confidence_pct": 0.17958687727825032,
            "total_quantity": null
          }
        ]
      },
      "peer_comparison": [
        {
          "ticker": "CRPU",
          "currency": "SGD",
          "is_target": true,
          "retail_pct": 0.6009835792281404,
          "mixed_pct": 0.24981245311327832,
          "instit_pct": 0.10806868383762608,
          "ambiguous_pct": 0.041135283820955236,
          "unobservable_pct": 0.0,
          "unclear_pct": 0.041135283820955236,
          "retail_qty_pct": 0.09595402405311675,
          "mixed_qty_pct": 0.30439569550645473,
          "instit_qty_pct": 0.4830551835355437,
          "ambiguous_qty_pct": 0.1165950969048848,
          "unobservable_qty_pct": 0.0,
          "unclear_qty_pct": 0.1165950969048848,
          "retail_notional_pct": 0.09604115454070805,
          "mixed_notional_pct": 0.30461240151302754,
          "instit_notional_pct": 0.48318535403042756,
          "ambiguous_notional_pct": 0.11616108991583686,
          "unobservable_notional_pct": 0.0,
          "unclear_notional_pct": 0.11616108991583686,
          "run_retail_pct": 0.8264230702414732,
          "run_mixed_pct": 0.15432277491458682,
          "run_instit_pct": 0.013115988186924547,
          "run_unclear_pct": 0.006138166657015462,
          "avg_trade_size": 1880.4287217637743,
          "avg_run_notional": 2612.7168191557125,
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "high_confidence_pct": 0.4960044009496786,
          "medium_confidence_pct": 0.3142915050089756,
          "low_confidence_pct": 0.02924315246974347,
          "na_confidence_pct": 0.1604609415716023,
          "avg_feature_coverage": 0.8655611210840232,
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
          "retail_pct": 0.36581123976164326,
          "mixed_pct": 0.3309222877622263,
          "instit_pct": 0.2324581355195267,
          "ambiguous_pct": 0.07047156130699112,
          "unobservable_pct": 0.00033677564961258235,
          "unclear_pct": 0.0708083369566037,
          "retail_qty_pct": 0.0999123066648966,
          "mixed_qty_pct": 0.22501276161017456,
          "instit_qty_pct": 0.6132187958452768,
          "ambiguous_qty_pct": 0.047432156299329536,
          "unobservable_qty_pct": 0.014423979580322502,
          "unclear_qty_pct": 0.06185613587965204,
          "retail_notional_pct": 0.09985195222280908,
          "mixed_notional_pct": 0.22495930543753603,
          "instit_notional_pct": 0.6133344185506693,
          "ambiguous_notional_pct": 0.04743384795113092,
          "unobservable_notional_pct": 0.014420475837854718,
          "unclear_notional_pct": 0.061854323788985636,
          "run_retail_pct": 0.7221820640162251,
          "run_mixed_pct": 0.24557580800332823,
          "run_instit_pct": 0.015278608388153618,
          "run_unclear_pct": 0.016963519592293093,
          "avg_trade_size": 5646.904667986962,
          "avg_run_notional": 11684.404405990796,
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "high_confidence_pct": 0.31497438830962843,
          "medium_confidence_pct": 0.36971840141449336,
          "low_confidence_pct": 0.052767882680256895,
          "na_confidence_pct": 0.2625393275956213,
          "avg_feature_coverage": 0.8863712004992329,
          "observable_run_pct": 0.9995995735718557,
          "thresholds": {
            "retail_max": 10000.0,
            "instit_min": 50000.0
          }
        },
        {
          "ticker": "JYEU",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.4494974172832612,
          "mixed_pct": 0.3104960677555959,
          "instit_pct": 0.16225355608295716,
          "ambiguous_pct": 0.07748925807002031,
          "unobservable_pct": 0.00026370080816541796,
          "unclear_pct": 0.07775295887818573,
          "retail_qty_pct": 0.08343950850977462,
          "mixed_qty_pct": 0.21816943133393274,
          "instit_qty_pct": 0.5660332960745597,
          "ambiguous_qty_pct": 0.06607966366971398,
          "unobservable_qty_pct": 0.066278100412019,
          "unclear_qty_pct": 0.13235776408173297,
          "retail_notional_pct": 0.08327593752655274,
          "mixed_notional_pct": 0.21640871785464955,
          "instit_notional_pct": 0.5716214674250991,
          "ambiguous_notional_pct": 0.06697952924384237,
          "unobservable_notional_pct": 0.061714347949856176,
          "unclear_notional_pct": 0.12869387719369854,
          "run_retail_pct": 0.766691279474988,
          "run_mixed_pct": 0.21264776310977082,
          "run_instit_pct": 0.00879160312191621,
          "run_unclear_pct": 0.011869354293324868,
          "avg_trade_size": 4050.085320745498,
          "avg_run_notional": 7207.095399866124,
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "high_confidence_pct": 0.3798055358116361,
          "medium_confidence_pct": 0.35428642408098765,
          "low_confidence_pct": 0.04139092270428056,
          "na_confidence_pct": 0.22451711740309568,
          "avg_feature_coverage": 0.8832693860369467,
          "observable_run_pct": 0.9995790519698298,
          "thresholds": {
            "retail_max": 10000.0,
            "instit_min": 50000.0
          }
        },
        {
          "ticker": "AU8U",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.4905308554523105,
          "mixed_pct": 0.26907371140464187,
          "instit_pct": 0.19734155589816244,
          "ambiguous_pct": 0.04305387724488521,
          "unobservable_pct": 0.0,
          "unclear_pct": 0.04305387724488521,
          "retail_qty_pct": 0.11606559794161134,
          "mixed_qty_pct": 0.2685329839582024,
          "instit_qty_pct": 0.5375328733753305,
          "ambiguous_qty_pct": 0.0778685447248557,
          "unobservable_qty_pct": 0.0,
          "unclear_qty_pct": 0.0778685447248557,
          "retail_notional_pct": 0.11739102818167517,
          "mixed_notional_pct": 0.2683717956679468,
          "instit_notional_pct": 0.5366924190887405,
          "ambiguous_notional_pct": 0.07754475706163752,
          "unobservable_notional_pct": 0.0,
          "unclear_notional_pct": 0.07754475706163752,
          "run_retail_pct": 0.7954197676844961,
          "run_mixed_pct": 0.17674062739097168,
          "run_instit_pct": 0.019753773388050358,
          "run_unclear_pct": 0.008085831536481881,
          "avg_trade_size": 1689.218404933539,
          "avg_run_notional": 2819.7504694998956,
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "high_confidence_pct": 0.46285734158725744,
          "medium_confidence_pct": 0.32845864923141127,
          "low_confidence_pct": 0.023857550253877723,
          "na_confidence_pct": 0.18482645892745359,
          "avg_feature_coverage": 0.8703067399318354,
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
          "retail_pct": 0.5296138743455497,
          "mixed_pct": 0.21515052356020942,
          "instit_pct": 0.17588350785340315,
          "ambiguous_pct": 0.0793520942408377,
          "unobservable_pct": 0.0,
          "unclear_pct": 0.0793520942408377,
          "retail_qty_pct": 0.11660105708131441,
          "mixed_qty_pct": 0.4277170274875311,
          "instit_qty_pct": 0.38524007054489906,
          "ambiguous_qty_pct": 0.07044184488625543,
          "unobservable_qty_pct": 0.0,
          "unclear_qty_pct": 0.07044184488625543,
          "retail_notional_pct": 0.11240746507163332,
          "mixed_notional_pct": 0.40146616552293196,
          "instit_notional_pct": 0.3969362708531213,
          "ambiguous_notional_pct": 0.08919009855231336,
          "unobservable_notional_pct": 0.0,
          "unclear_notional_pct": 0.08919009855231336,
          "run_retail_pct": 0.7715773809523809,
          "run_mixed_pct": 0.16319444444444445,
          "run_instit_pct": 0.030257936507936508,
          "run_unclear_pct": 0.034970238095238096,
          "avg_trade_size": 1838.538727094241,
          "avg_run_notional": 2786.991245039683,
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "high_confidence_pct": 0.36507936507936506,
          "medium_confidence_pct": 0.21899801587301587,
          "low_confidence_pct": 0.2177579365079365,
          "na_confidence_pct": 0.19816468253968253,
          "avg_feature_coverage": 0.8546874999999998,
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
          "retail_pct": 0.4115481941568898,
          "mixed_pct": 0.18817575339314468,
          "instit_pct": 0.15021854152288935,
          "ambiguous_pct": 0.2500575109270761,
          "unobservable_pct": 0.0,
          "unclear_pct": 0.2500575109270761,
          "retail_qty_pct": 0.09287670494158613,
          "mixed_qty_pct": 0.17020719301421733,
          "instit_qty_pct": 0.3761714552044774,
          "ambiguous_qty_pct": 0.36074464683971913,
          "unobservable_qty_pct": 0.0,
          "unclear_qty_pct": 0.36074464683971913,
          "retail_notional_pct": 0.09323049461479242,
          "mixed_notional_pct": 0.1706087576681673,
          "instit_notional_pct": 0.3748833271609538,
          "ambiguous_notional_pct": 0.36127742055608647,
          "unobservable_notional_pct": 0.0,
          "unclear_notional_pct": 0.36127742055608647,
          "run_retail_pct": 0.6413632842757552,
          "run_mixed_pct": 0.1611154144074361,
          "run_instit_pct": 0.055770720371804805,
          "run_unclear_pct": 0.14175058094500387,
          "avg_trade_size": 3094.9511157119855,
          "avg_run_notional": 5210.593532145624,
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "high_confidence_pct": 0.22114639814097597,
          "medium_confidence_pct": 0.18861347792408986,
          "low_confidence_pct": 0.28737412858249417,
          "na_confidence_pct": 0.30286599535243997,
          "avg_feature_coverage": 0.85,
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
          "retail_pct": 0.1408199643493761,
          "mixed_pct": 0.19607843137254902,
          "instit_pct": 0.21271538918597743,
          "ambiguous_pct": 0.44325609031491386,
          "unobservable_pct": 0.0071301247771836,
          "unclear_pct": 0.4503862150920975,
          "retail_qty_pct": 0.008149695391179797,
          "mixed_qty_pct": 0.015830504198209524,
          "instit_qty_pct": 0.07348122611608962,
          "ambiguous_qty_pct": 0.05052811142531474,
          "unobservable_qty_pct": 0.8520104628692063,
          "unclear_qty_pct": 0.9025385742945211,
          "retail_notional_pct": 0.00819901754354522,
          "mixed_notional_pct": 0.01573765343435628,
          "instit_notional_pct": 0.0709187268249064,
          "ambiguous_notional_pct": 0.05050264870577925,
          "unobservable_notional_pct": 0.8546419534914128,
          "unclear_notional_pct": 0.9051446021971921,
          "run_retail_pct": 0.48654708520179374,
          "run_mixed_pct": 0.18161434977578475,
          "run_instit_pct": 0.08520179372197309,
          "run_unclear_pct": 0.24663677130044845,
          "avg_trade_size": 1166.9731431966727,
          "avg_run_notional": 4403.622869955157,
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "high_confidence_pct": 0.2062780269058296,
          "medium_confidence_pct": 0.17040358744394618,
          "low_confidence_pct": 0.19506726457399104,
          "na_confidence_pct": 0.4282511210762332,
          "avg_feature_coverage": 0.8822869955156948,
          "observable_run_pct": 0.9887892376681614,
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
            "retail_pct": 0.6404109589041096,
            "mixed_pct": 0.2910958904109589,
            "instit_pct": 0.02054794520547945,
            "ambiguous_pct": 0.04794520547945205,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.04794520547945205,
            "retail_qty_pct": 0.11044226044226044,
            "mixed_qty_pct": 0.3463144963144963,
            "instit_qty_pct": 0.20503685503685504,
            "ambiguous_qty_pct": 0.3382063882063882,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.3382063882063882,
            "retail_notional_pct": 0.11029426701014745,
            "mixed_notional_pct": 0.34666814400339785,
            "instit_notional_pct": 0.20495923473957323,
            "ambiguous_notional_pct": 0.33807835424688143,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.33807835424688143,
            "run_retail_pct": 0.8292134831460675,
            "run_mixed_pct": 0.16179775280898875,
            "run_instit_pct": 0.006741573033707865,
            "run_unclear_pct": 0.0022471910112359553,
            "avg_trade_size": 927.2517123287671,
            "avg_run_notional": 1216.887640449438,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.5910112359550562,
            "medium_confidence_pct": 0.2449438202247191,
            "low_confidence_pct": 0.0,
            "na_confidence_pct": 0.16404494382022472,
            "avg_feature_coverage": 0.8658426966292132,
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
            "retail_pct": 0.23529411764705882,
            "mixed_pct": 0.14705882352941177,
            "instit_pct": 0.47058823529411764,
            "ambiguous_pct": 0.14705882352941177,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.14705882352941177,
            "retail_qty_pct": 0.1461850101282917,
            "mixed_qty_pct": 0.060432140445644836,
            "instit_qty_pct": 0.6920999324780553,
            "ambiguous_qty_pct": 0.1012829169480081,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.1012829169480081,
            "retail_notional_pct": 0.14493547581923505,
            "mixed_notional_pct": 0.06028415924068605,
            "instit_notional_pct": 0.6936422368382665,
            "ambiguous_notional_pct": 0.10113812810181239,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.10113812810181239,
            "run_retail_pct": 0.5714285714285714,
            "run_mixed_pct": 0.21428571428571427,
            "run_instit_pct": 0.14285714285714285,
            "run_unclear_pct": 0.07142857142857142,
            "avg_trade_size": 4536.60294117647,
            "avg_run_notional": 11017.464285714286,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.7142857142857143,
            "na_confidence_pct": 0.2857142857142857,
            "avg_feature_coverage": 0.8821428571428571,
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
            "retail_pct": 0.5537037037037037,
            "mixed_pct": 0.2388888888888889,
            "instit_pct": 0.20123456790123456,
            "ambiguous_pct": 0.006172839506172839,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.006172839506172839,
            "retail_qty_pct": 0.09868520343391837,
            "mixed_qty_pct": 0.19089851830150656,
            "instit_qty_pct": 0.6865972425670936,
            "ambiguous_qty_pct": 0.02381903569748138,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.02381903569748138,
            "retail_notional_pct": 0.09789579880926952,
            "mixed_notional_pct": 0.19095849550018898,
            "instit_notional_pct": 0.687220176888229,
            "ambiguous_notional_pct": 0.023925528802312482,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.023925528802312482,
            "run_retail_pct": 0.8211981566820277,
            "run_mixed_pct": 0.17050691244239632,
            "run_instit_pct": 0.0064516129032258064,
            "run_unclear_pct": 0.0018433179723502304,
            "avg_trade_size": 4048.661111111111,
            "avg_run_notional": 6045.005529953917,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.44423963133640554,
            "medium_confidence_pct": 0.36589861751152075,
            "low_confidence_pct": 0.017511520737327188,
            "na_confidence_pct": 0.17235023041474654,
            "avg_feature_coverage": 0.8697695852534562,
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
            "retail_pct": 0.3978612558267069,
            "mixed_pct": 0.290924047162051,
            "instit_pct": 0.28653687962709073,
            "ambiguous_pct": 0.024677817384151358,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.024677817384151358,
            "retail_qty_pct": 0.17989704429754577,
            "mixed_qty_pct": 0.24514664539168757,
            "instit_qty_pct": 0.5419421016640072,
            "ambiguous_qty_pct": 0.033014208646759365,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.033014208646759365,
            "retail_notional_pct": 0.17968120212709335,
            "mixed_notional_pct": 0.24489887919535613,
            "instit_notional_pct": 0.5423268268922147,
            "ambiguous_notional_pct": 0.03309309178533583,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.03309309178533583,
            "run_retail_pct": 0.7647783251231527,
            "run_mixed_pct": 0.20566502463054187,
            "run_instit_pct": 0.020935960591133004,
            "run_unclear_pct": 0.008620689655172414,
            "avg_trade_size": 6800.120647107211,
            "avg_run_notional": 15270.960591133005,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.3232758620689655,
            "medium_confidence_pct": 0.4020935960591133,
            "low_confidence_pct": 0.0603448275862069,
            "na_confidence_pct": 0.21428571428571427,
            "avg_feature_coverage": 0.8774630541871918,
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
            "retail_pct": 0.6582984658298466,
            "mixed_pct": 0.19246861924686193,
            "instit_pct": 0.09623430962343096,
            "ambiguous_pct": 0.05299860529986053,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.05299860529986053,
            "retail_qty_pct": 0.11216982269931251,
            "mixed_qty_pct": 0.37920636835122423,
            "instit_qty_pct": 0.2613677481606561,
            "ambiguous_qty_pct": 0.24725606078880713,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.24725606078880713,
            "retail_notional_pct": 0.1120458203395627,
            "mixed_notional_pct": 0.37872559095580677,
            "instit_notional_pct": 0.26167852779770795,
            "ambiguous_notional_pct": 0.24755006090692258,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.24755006090692258,
            "run_retail_pct": 0.8489208633093526,
            "run_mixed_pct": 0.12410071942446044,
            "run_instit_pct": 0.014388489208633094,
            "run_unclear_pct": 0.012589928057553957,
            "avg_trade_size": 791.1562064156207,
            "avg_run_notional": 1020.25,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.6241007194244604,
            "medium_confidence_pct": 0.2392086330935252,
            "low_confidence_pct": 0.0,
            "na_confidence_pct": 0.1366906474820144,
            "avg_feature_coverage": 0.859982014388489,
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
            "retail_qty_pct": 0.08592321755027423,
            "mixed_qty_pct": 0.9140767824497258,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": 0.0,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.0,
            "retail_notional_pct": 0.08160587772238258,
            "mixed_notional_pct": 0.9183941222776174,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": 0.0,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.0,
            "run_retail_pct": 0.8,
            "run_mixed_pct": 0.2,
            "run_instit_pct": 0.0,
            "run_unclear_pct": 0.0,
            "avg_trade_size": 762.2,
            "avg_run_notional": 762.2,
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
            "retail_pct": 0.59803171131766,
            "mixed_pct": 0.26517222525970474,
            "instit_pct": 0.09185347184253691,
            "ambiguous_pct": 0.04494259158009842,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.04494259158009842,
            "retail_qty_pct": 0.08694331936522173,
            "mixed_qty_pct": 0.3061585824468955,
            "instit_qty_pct": 0.4422472309036294,
            "ambiguous_qty_pct": 0.1646508672842534,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.1646508672842534,
            "retail_notional_pct": 0.08691553087741832,
            "mixed_notional_pct": 0.30596180736536593,
            "instit_notional_pct": 0.44277502255427714,
            "ambiguous_notional_pct": 0.1643476392029386,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.1643476392029386,
            "run_retail_pct": 0.8174698795180723,
            "run_mixed_pct": 0.16430722891566266,
            "run_instit_pct": 0.012198795180722892,
            "run_unclear_pct": 0.006024096385542169,
            "avg_trade_size": 1507.5715691634773,
            "avg_run_notional": 2076.3165662650604,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.5194277108433735,
            "medium_confidence_pct": 0.29036144578313255,
            "low_confidence_pct": 0.019879518072289156,
            "na_confidence_pct": 0.17033132530120482,
            "avg_feature_coverage": 0.8678915662650601,
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
            "retail_pct": 0.38601146409042264,
            "mixed_pct": 0.3167724627270462,
            "instit_pct": 0.2560069195021477,
            "ambiguous_pct": 0.04094527436119215,
            "unobservable_pct": 0.00026387931919135646,
            "unclear_pct": 0.041209153680383505,
            "retail_qty_pct": 0.10712743455209736,
            "mixed_qty_pct": 0.2239090184874873,
            "instit_qty_pct": 0.6055561354833393,
            "ambiguous_qty_pct": 0.05706178062247617,
            "unobservable_qty_pct": 0.006345630854599896,
            "unclear_qty_pct": 0.06340741147707607,
            "retail_notional_pct": 0.10695615026097229,
            "mixed_notional_pct": 0.2234613518883812,
            "instit_notional_pct": 0.6062017825392886,
            "ambiguous_notional_pct": 0.05722131636331289,
            "unobservable_notional_pct": 0.006159398948045072,
            "unclear_notional_pct": 0.06338071531135796,
            "run_retail_pct": 0.7393267046292745,
            "run_mixed_pct": 0.22928038237984244,
            "run_instit_pct": 0.016729118106983742,
            "run_unclear_pct": 0.014663794883899331,
            "avg_trade_size": 6048.814624778268,
            "avg_run_notional": 12173.835069188328,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.39536187413330187,
            "medium_confidence_pct": 0.32938954946449117,
            "low_confidence_pct": 0.031304399138465167,
            "na_confidence_pct": 0.24394417726374176,
            "avg_feature_coverage": 0.8811480246658601,
            "observable_run_pct": 0.9998229722951641,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "AU8U",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.486664064532917,
            "mixed_pct": 0.2738745771532657,
            "instit_pct": 0.1960057246942493,
            "ambiguous_pct": 0.04345563361956804,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.04345563361956804,
            "retail_qty_pct": 0.09144409864470607,
            "mixed_qty_pct": 0.2927607334662762,
            "instit_qty_pct": 0.510258571059065,
            "ambiguous_qty_pct": 0.10553659682995274,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.10553659682995274,
            "retail_notional_pct": 0.09129901590812046,
            "mixed_notional_pct": 0.29312493372077114,
            "instit_notional_pct": 0.5085245612219377,
            "ambiguous_notional_pct": 0.10705148914917072,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.10705148914917072,
            "run_retail_pct": 0.7945101442985787,
            "run_mixed_pct": 0.17641314961484214,
            "run_instit_pct": 0.022024519908864056,
            "run_unclear_pct": 0.007052186177715092,
            "avg_trade_size": 1529.9197241738225,
            "avg_run_notional": 2551.5814256265594,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.48822827384181405,
            "medium_confidence_pct": 0.30367798632960835,
            "low_confidence_pct": 0.024628404036020398,
            "na_confidence_pct": 0.18346533579255722,
            "avg_feature_coverage": 0.8706520559835087,
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
            "retail_pct": 0.24133663366336633,
            "mixed_pct": 0.12252475247524752,
            "instit_pct": 0.25495049504950495,
            "ambiguous_pct": 0.3811881188118812,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.3811881188118812,
            "retail_qty_pct": 0.070305195672499,
            "mixed_qty_pct": 0.13279684786964072,
            "instit_qty_pct": 0.4652731401095232,
            "ambiguous_qty_pct": 0.3316248163483371,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.3316248163483371,
            "retail_notional_pct": 0.07062456382403023,
            "mixed_notional_pct": 0.13388243622138044,
            "instit_notional_pct": 0.46422156206449,
            "ambiguous_notional_pct": 0.33127143789009933,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.33127143789009933,
            "run_retail_pct": 0.4440993788819876,
            "run_mixed_pct": 0.15527950310559005,
            "run_instit_pct": 0.11180124223602485,
            "run_unclear_pct": 0.2888198757763975,
            "avg_trade_size": 3774.683787128713,
            "avg_run_notional": 9471.877329192546,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.027950310559006212,
            "medium_confidence_pct": 0.12111801242236025,
            "low_confidence_pct": 0.40683229813664595,
            "na_confidence_pct": 0.4440993788819876,
            "avg_feature_coverage": 0.8560559006211179,
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
            "retail_pct": 0.4956820815731429,
            "mixed_pct": 0.3363864069684848,
            "instit_pct": 0.12391117424950465,
            "ambiguous_pct": 0.04388949119593256,
            "unobservable_pct": 0.000130846012935063,
            "unclear_pct": 0.04402033720886762,
            "retail_qty_pct": 0.07422782527879662,
            "mixed_qty_pct": 0.24855104076387308,
            "instit_qty_pct": 0.40868290173662297,
            "ambiguous_qty_pct": 0.04728301405885275,
            "unobservable_qty_pct": 0.2212552181618546,
            "unclear_qty_pct": 0.26853823222070733,
            "retail_notional_pct": 0.07448291018881738,
            "mixed_notional_pct": 0.24913541666291608,
            "instit_notional_pct": 0.41046014107569795,
            "ambiguous_notional_pct": 0.047856636752052525,
            "unobservable_notional_pct": 0.2180648953205161,
            "unclear_notional_pct": 0.26592153207256863,
            "run_retail_pct": 0.772813487881981,
            "run_mixed_pct": 0.2143910883636911,
            "run_instit_pct": 0.005389131416528677,
            "run_unclear_pct": 0.007406292337799187,
            "avg_trade_size": 4367.6005624509335,
            "avg_run_notional": 7034.7100674394105,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.38380249887099205,
            "medium_confidence_pct": 0.3512268553364444,
            "low_confidence_pct": 0.04317326509107331,
            "na_confidence_pct": 0.2217973807014903,
            "avg_feature_coverage": 0.8832771338250789,
            "observable_run_pct": 0.9997892518440463,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "BMGU",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.10166919575113809,
            "mixed_pct": 0.36722306525037934,
            "instit_pct": 0.07132018209408195,
            "ambiguous_pct": 0.45068285280728376,
            "unobservable_pct": 0.009104704097116844,
            "unclear_pct": 0.4597875569044006,
            "retail_qty_pct": 0.07001972386587771,
            "mixed_qty_pct": 0.252465483234714,
            "instit_qty_pct": 0.2514792899408284,
            "ambiguous_qty_pct": 0.35404339250493094,
            "unobservable_qty_pct": 0.07199211045364892,
            "unclear_qty_pct": 0.42603550295857984,
            "retail_notional_pct": 0.06977546304280344,
            "mixed_notional_pct": 0.2592234907276469,
            "instit_notional_pct": 0.24766897756929834,
            "ambiguous_notional_pct": 0.3570861932190529,
            "unobservable_notional_pct": 0.06624587544119845,
            "unclear_notional_pct": 0.4233320686602513,
            "run_retail_pct": 0.40441176470588236,
            "run_mixed_pct": 0.3014705882352941,
            "run_instit_pct": 0.07352941176470588,
            "run_unclear_pct": 0.22058823529411764,
            "avg_trade_size": 65.99317147192716,
            "avg_run_notional": 319.7757352941176,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.3014705882352941,
            "low_confidence_pct": 0.17647058823529413,
            "na_confidence_pct": 0.5220588235294118,
            "avg_feature_coverage": 0.9264705882352942,
            "observable_run_pct": 0.9926470588235294,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "D5IU",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.7307692307692307,
            "mixed_pct": 0.2579185520361991,
            "instit_pct": 0.011312217194570135,
            "ambiguous_pct": 0.0,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.0,
            "retail_qty_pct": 0.12588664094064544,
            "mixed_qty_pct": 0.7355794903829684,
            "instit_qty_pct": 0.13853386867638615,
            "ambiguous_qty_pct": 0.0,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.0,
            "retail_notional_pct": 0.12951679025975,
            "mixed_notional_pct": 0.7368435226924352,
            "instit_notional_pct": 0.1336396870478148,
            "ambiguous_notional_pct": 0.0,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.0,
            "run_retail_pct": 0.8408488063660478,
            "run_mixed_pct": 0.15649867374005305,
            "run_instit_pct": 0.002652519893899204,
            "run_unclear_pct": 0.0,
            "avg_trade_size": 1117.3117647058825,
            "avg_run_notional": 1309.9517241379313,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.6153846153846154,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.22811671087533156,
            "na_confidence_pct": 0.15649867374005305,
            "avg_feature_coverage": 0.8515915119363392,
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
            "retail_pct": 0.5759399176582365,
            "mixed_pct": 0.25259014613400893,
            "instit_pct": 0.1256842962493779,
            "ambiguous_pct": 0.045785639958376693,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.045785639958376693,
            "retail_qty_pct": 0.07781903334532503,
            "mixed_qty_pct": 0.30651839442240064,
            "instit_qty_pct": 0.4648048119007194,
            "ambiguous_qty_pct": 0.15085776033155493,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.15085776033155493,
            "retail_notional_pct": 0.0777584449591868,
            "mixed_notional_pct": 0.30716335919713567,
            "instit_notional_pct": 0.464528311325101,
            "ambiguous_notional_pct": 0.1505498845185766,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.1505498845185766,
            "run_retail_pct": 0.8207473725184897,
            "run_mixed_pct": 0.1569352536654989,
            "run_instit_pct": 0.014856623848449461,
            "run_unclear_pct": 0.007460749967561957,
            "avg_trade_size": 2278.2789892774736,
            "avg_run_notional": 3266.9521538860777,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.5216686129492669,
            "medium_confidence_pct": 0.2917477617750097,
            "low_confidence_pct": 0.022187621642662515,
            "na_confidence_pct": 0.16439600363306087,
            "avg_feature_coverage": 0.8655118723238612,
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
            "retail_pct": 0.3745914256394664,
            "mixed_pct": 0.337938504807875,
            "instit_pct": 0.2397808901220022,
            "ambiguous_pct": 0.04735186803998328,
            "unobservable_pct": 0.0003373113906731025,
            "unclear_pct": 0.047689179430656384,
            "retail_qty_pct": 0.0980922027499404,
            "mixed_qty_pct": 0.223508319809796,
            "instit_qty_pct": 0.6161991063787484,
            "ambiguous_qty_pct": 0.051939867582390685,
            "unobservable_qty_pct": 0.01026050347912449,
            "unclear_qty_pct": 0.06220037106151517,
            "retail_notional_pct": 0.09800969616579873,
            "mixed_notional_pct": 0.22337642760913526,
            "instit_notional_pct": 0.6162906104202143,
            "ambiguous_notional_pct": 0.052146490168128244,
            "unobservable_notional_pct": 0.010176775636723466,
            "unclear_notional_pct": 0.06232326580485171,
            "run_retail_pct": 0.7214503071711547,
            "run_mixed_pct": 0.24684695029760195,
            "run_instit_pct": 0.016334615605442956,
            "run_unclear_pct": 0.015368126925800463,
            "avg_trade_size": 6566.797576346395,
            "avg_run_notional": 13226.84817754684,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.3237162925111481,
            "medium_confidence_pct": 0.3645002009530918,
            "low_confidence_pct": 0.04956842931235766,
            "na_confidence_pct": 0.2622150772234024,
            "avg_feature_coverage": 0.885691182943867,
            "observable_run_pct": 0.9996937857648658,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "JYEU",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.4674198103691749,
            "mixed_pct": 0.32882096373640896,
            "instit_pct": 0.15722802306734468,
            "ambiguous_pct": 0.04622512225831809,
            "unobservable_pct": 0.0003060805687533478,
            "unclear_pct": 0.04653120282707144,
            "retail_qty_pct": 0.08324979308208563,
            "mixed_qty_pct": 0.2321513326198132,
            "instit_qty_pct": 0.5385425052197145,
            "ambiguous_qty_pct": 0.045773105309645255,
            "unobservable_qty_pct": 0.1002832637687414,
            "unclear_qty_pct": 0.14605636907838665,
            "retail_notional_pct": 0.08290275848570011,
            "mixed_notional_pct": 0.22999915788706746,
            "instit_notional_pct": 0.5463879606554971,
            "ambiguous_notional_pct": 0.045768877881538286,
            "unobservable_notional_pct": 0.09494124509019691,
            "unclear_notional_pct": 0.14071012297173519,
            "run_retail_pct": 0.7644726126827887,
            "run_mixed_pct": 0.21896871201123583,
            "run_instit_pct": 0.007518087077623954,
            "run_unclear_pct": 0.009040588228351567,
            "avg_trade_size": 4374.814638233637,
            "avg_run_notional": 7422.402349726776,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.3715965017880537,
            "medium_confidence_pct": 0.3557577688866858,
            "low_confidence_pct": 0.04463642908567315,
            "na_confidence_pct": 0.2280093002395874,
            "avg_feature_coverage": 0.8841943136352369,
            "observable_run_pct": 0.9995279066199294,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "AU8U",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.47203202550447415,
            "mixed_pct": 0.28255986668115785,
            "instit_pct": 0.20008694707097055,
            "ambiguous_pct": 0.045321160743397454,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.045321160743397454,
            "retail_qty_pct": 0.10221393229176544,
            "mixed_qty_pct": 0.2744519025162838,
            "instit_qty_pct": 0.5458059534275482,
            "ambiguous_qty_pct": 0.07752821176440247,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.07752821176440247,
            "retail_notional_pct": 0.10302375905185257,
            "mixed_notional_pct": 0.27527805767494923,
            "instit_notional_pct": 0.5447479354400725,
            "ambiguous_notional_pct": 0.07695024783312573,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.07695024783312573,
            "run_retail_pct": 0.7847759247181589,
            "run_mixed_pct": 0.1878629771110904,
            "run_instit_pct": 0.019441597565141775,
            "run_unclear_pct": 0.00791950060560887,
            "avg_trade_size": 1677.8748596167084,
            "avg_run_notional": 2876.7588900276405,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.46383428056771947,
            "medium_confidence_pct": 0.3165936830336346,
            "low_confidence_pct": 0.023789558681946644,
            "na_confidence_pct": 0.19578247771669927,
            "avg_feature_coverage": 0.8726389018292492,
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
            "retail_pct": 0.35400390625,
            "mixed_pct": 0.1533203125,
            "instit_pct": 0.1962890625,
            "ambiguous_pct": 0.29638671875,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.29638671875,
            "retail_qty_pct": 0.0862573491905823,
            "mixed_qty_pct": 0.15725254369244812,
            "instit_qty_pct": 0.39991677628929634,
            "ambiguous_qty_pct": 0.35657333082767323,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.35657333082767323,
            "retail_notional_pct": 0.08719612335670972,
            "mixed_notional_pct": 0.1586163675691674,
            "instit_notional_pct": 0.3965173675216196,
            "ambiguous_notional_pct": 0.35767014155250326,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.35767014155250326,
            "run_retail_pct": 0.5651423641069888,
            "run_mixed_pct": 0.1725625539257981,
            "run_instit_pct": 0.07506471095772217,
            "run_unclear_pct": 0.18723037100949094,
            "avg_trade_size": 3840.7099609375,
            "avg_run_notional": 6786.690250215704,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.181190681622088,
            "medium_confidence_pct": 0.1285591026747196,
            "low_confidence_pct": 0.33045729076790337,
            "na_confidence_pct": 0.359792924935289,
            "avg_feature_coverage": 0.8459879206212252,
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
            "retail_pct": 0.11462450592885376,
            "mixed_pct": 0.33201581027667987,
            "instit_pct": 0.09749670619235837,
            "ambiguous_pct": 0.4426877470355731,
            "unobservable_pct": 0.013175230566534914,
            "unclear_pct": 0.45586297760210803,
            "retail_qty_pct": 0.05702647657841141,
            "mixed_qty_pct": 0.13441955193482688,
            "instit_qty_pct": 0.40054310930074677,
            "ambiguous_qty_pct": 0.36591989137813985,
            "unobservable_qty_pct": 0.042090970807875085,
            "unclear_qty_pct": 0.40801086218601496,
            "retail_notional_pct": 0.0589828123593943,
            "mixed_notional_pct": 0.14158329174813275,
            "instit_notional_pct": 0.3839077544809758,
            "ambiguous_notional_pct": 0.37469220134327014,
            "unobservable_notional_pct": 0.040833940068227,
            "unclear_notional_pct": 0.41552614141149713,
            "run_retail_pct": 0.3526570048309179,
            "run_mixed_pct": 0.23671497584541062,
            "run_instit_pct": 0.10628019323671498,
            "run_unclear_pct": 0.30434782608695654,
            "avg_trade_size": 161.05270092226613,
            "avg_run_notional": 590.5265700483092,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Mixed, leaning retail-like",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.19806763285024154,
            "low_confidence_pct": 0.2608695652173913,
            "na_confidence_pct": 0.5410628019323671,
            "avg_feature_coverage": 0.8876811594202896,
            "observable_run_pct": 0.9855072463768116,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "D5IU",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.6263688129653964,
            "mixed_pct": 0.23565484012264565,
            "instit_pct": 0.11826544021024968,
            "ambiguous_pct": 0.01971090670170828,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.01971090670170828,
            "retail_qty_pct": 0.12281278472221306,
            "mixed_qty_pct": 0.49649809292709396,
            "instit_qty_pct": 0.3532951051255725,
            "ambiguous_qty_pct": 0.027394017225120474,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.027394017225120474,
            "retail_notional_pct": 0.12257190273524461,
            "mixed_notional_pct": 0.498389549538007,
            "instit_notional_pct": 0.3520819515361762,
            "ambiguous_notional_pct": 0.026956596190572172,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.026956596190572172,
            "run_retail_pct": 0.8195179306290418,
            "run_mixed_pct": 0.15520282186948853,
            "run_instit_pct": 0.015873015873015872,
            "run_unclear_pct": 0.00940623162845385,
            "avg_trade_size": 2643.392159439334,
            "avg_run_notional": 3547.833215755438,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.4756025867136978,
            "medium_confidence_pct": 0.14520870076425632,
            "low_confidence_pct": 0.21457965902410348,
            "na_confidence_pct": 0.1646090534979424,
            "avg_feature_coverage": 0.8554673721340386,
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
            "retail_pct": 0.6009835792281404,
            "mixed_pct": 0.24981245311327832,
            "instit_pct": 0.10806868383762608,
            "ambiguous_pct": 0.041135283820955236,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.041135283820955236,
            "retail_qty_pct": 0.09595402405311675,
            "mixed_qty_pct": 0.30439569550645473,
            "instit_qty_pct": 0.4830551835355437,
            "ambiguous_qty_pct": 0.1165950969048848,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.1165950969048848,
            "retail_notional_pct": 0.09604115454070805,
            "mixed_notional_pct": 0.30461240151302754,
            "instit_notional_pct": 0.48318535403042756,
            "ambiguous_notional_pct": 0.11616108991583686,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.11616108991583686,
            "run_retail_pct": 0.8264230702414732,
            "run_mixed_pct": 0.15432277491458682,
            "run_instit_pct": 0.013115988186924547,
            "run_unclear_pct": 0.006138166657015462,
            "avg_trade_size": 1880.4287217637743,
            "avg_run_notional": 2612.7168191557125,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.4960044009496786,
            "medium_confidence_pct": 0.3142915050089756,
            "low_confidence_pct": 0.02924315246974347,
            "na_confidence_pct": 0.1604609415716023,
            "avg_feature_coverage": 0.8655611210840232,
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
            "retail_pct": 0.36581123976164326,
            "mixed_pct": 0.3309222877622263,
            "instit_pct": 0.2324581355195267,
            "ambiguous_pct": 0.07047156130699112,
            "unobservable_pct": 0.00033677564961258235,
            "unclear_pct": 0.0708083369566037,
            "retail_qty_pct": 0.0999123066648966,
            "mixed_qty_pct": 0.22501276161017456,
            "instit_qty_pct": 0.6132187958452768,
            "ambiguous_qty_pct": 0.047432156299329536,
            "unobservable_qty_pct": 0.014423979580322502,
            "unclear_qty_pct": 0.06185613587965204,
            "retail_notional_pct": 0.09985195222280908,
            "mixed_notional_pct": 0.22495930543753603,
            "instit_notional_pct": 0.6133344185506693,
            "ambiguous_notional_pct": 0.04743384795113092,
            "unobservable_notional_pct": 0.014420475837854718,
            "unclear_notional_pct": 0.061854323788985636,
            "run_retail_pct": 0.7221820640162251,
            "run_mixed_pct": 0.24557580800332823,
            "run_instit_pct": 0.015278608388153618,
            "run_unclear_pct": 0.016963519592293093,
            "avg_trade_size": 5646.904667986962,
            "avg_run_notional": 11684.404405990796,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.31497438830962843,
            "medium_confidence_pct": 0.36971840141449336,
            "low_confidence_pct": 0.052767882680256895,
            "na_confidence_pct": 0.2625393275956213,
            "avg_feature_coverage": 0.8863712004992329,
            "observable_run_pct": 0.9995995735718557,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "JYEU",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.4494974172832612,
            "mixed_pct": 0.3104960677555959,
            "instit_pct": 0.16225355608295716,
            "ambiguous_pct": 0.07748925807002031,
            "unobservable_pct": 0.00026370080816541796,
            "unclear_pct": 0.07775295887818573,
            "retail_qty_pct": 0.08343950850977462,
            "mixed_qty_pct": 0.21816943133393274,
            "instit_qty_pct": 0.5660332960745597,
            "ambiguous_qty_pct": 0.06607966366971398,
            "unobservable_qty_pct": 0.066278100412019,
            "unclear_qty_pct": 0.13235776408173297,
            "retail_notional_pct": 0.08327593752655274,
            "mixed_notional_pct": 0.21640871785464955,
            "instit_notional_pct": 0.5716214674250991,
            "ambiguous_notional_pct": 0.06697952924384237,
            "unobservable_notional_pct": 0.061714347949856176,
            "unclear_notional_pct": 0.12869387719369854,
            "run_retail_pct": 0.766691279474988,
            "run_mixed_pct": 0.21264776310977082,
            "run_instit_pct": 0.00879160312191621,
            "run_unclear_pct": 0.011869354293324868,
            "avg_trade_size": 4050.085320745498,
            "avg_run_notional": 7207.095399866124,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.3798055358116361,
            "medium_confidence_pct": 0.35428642408098765,
            "low_confidence_pct": 0.04139092270428056,
            "na_confidence_pct": 0.22451711740309568,
            "avg_feature_coverage": 0.8832693860369467,
            "observable_run_pct": 0.9995790519698298,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "AU8U",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.4905308554523105,
            "mixed_pct": 0.26907371140464187,
            "instit_pct": 0.19734155589816244,
            "ambiguous_pct": 0.04305387724488521,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.04305387724488521,
            "retail_qty_pct": 0.11606559794161134,
            "mixed_qty_pct": 0.2685329839582024,
            "instit_qty_pct": 0.5375328733753305,
            "ambiguous_qty_pct": 0.0778685447248557,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.0778685447248557,
            "retail_notional_pct": 0.11739102818167517,
            "mixed_notional_pct": 0.2683717956679468,
            "instit_notional_pct": 0.5366924190887405,
            "ambiguous_notional_pct": 0.07754475706163752,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.07754475706163752,
            "run_retail_pct": 0.7954197676844961,
            "run_mixed_pct": 0.17674062739097168,
            "run_instit_pct": 0.019753773388050358,
            "run_unclear_pct": 0.008085831536481881,
            "avg_trade_size": 1689.218404933539,
            "avg_run_notional": 2819.7504694998956,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.46285734158725744,
            "medium_confidence_pct": 0.32845864923141127,
            "low_confidence_pct": 0.023857550253877723,
            "na_confidence_pct": 0.18482645892745359,
            "avg_feature_coverage": 0.8703067399318354,
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
            "retail_pct": 0.5296138743455497,
            "mixed_pct": 0.21515052356020942,
            "instit_pct": 0.17588350785340315,
            "ambiguous_pct": 0.0793520942408377,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.0793520942408377,
            "retail_qty_pct": 0.11660105708131441,
            "mixed_qty_pct": 0.4277170274875311,
            "instit_qty_pct": 0.38524007054489906,
            "ambiguous_qty_pct": 0.07044184488625543,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.07044184488625543,
            "retail_notional_pct": 0.11240746507163332,
            "mixed_notional_pct": 0.40146616552293196,
            "instit_notional_pct": 0.3969362708531213,
            "ambiguous_notional_pct": 0.08919009855231336,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.08919009855231336,
            "run_retail_pct": 0.7715773809523809,
            "run_mixed_pct": 0.16319444444444445,
            "run_instit_pct": 0.030257936507936508,
            "run_unclear_pct": 0.034970238095238096,
            "avg_trade_size": 1838.538727094241,
            "avg_run_notional": 2786.991245039683,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.36507936507936506,
            "medium_confidence_pct": 0.21899801587301587,
            "low_confidence_pct": 0.2177579365079365,
            "na_confidence_pct": 0.19816468253968253,
            "avg_feature_coverage": 0.8546874999999998,
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
            "retail_pct": 0.4115481941568898,
            "mixed_pct": 0.18817575339314468,
            "instit_pct": 0.15021854152288935,
            "ambiguous_pct": 0.2500575109270761,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.2500575109270761,
            "retail_qty_pct": 0.09287670494158613,
            "mixed_qty_pct": 0.17020719301421733,
            "instit_qty_pct": 0.3761714552044774,
            "ambiguous_qty_pct": 0.36074464683971913,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.36074464683971913,
            "retail_notional_pct": 0.09323049461479242,
            "mixed_notional_pct": 0.1706087576681673,
            "instit_notional_pct": 0.3748833271609538,
            "ambiguous_notional_pct": 0.36127742055608647,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.36127742055608647,
            "run_retail_pct": 0.6413632842757552,
            "run_mixed_pct": 0.1611154144074361,
            "run_instit_pct": 0.055770720371804805,
            "run_unclear_pct": 0.14175058094500387,
            "avg_trade_size": 3094.9511157119855,
            "avg_run_notional": 5210.593532145624,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.22114639814097597,
            "medium_confidence_pct": 0.18861347792408986,
            "low_confidence_pct": 0.28737412858249417,
            "na_confidence_pct": 0.30286599535243997,
            "avg_feature_coverage": 0.85,
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
            "retail_pct": 0.1408199643493761,
            "mixed_pct": 0.19607843137254902,
            "instit_pct": 0.21271538918597743,
            "ambiguous_pct": 0.44325609031491386,
            "unobservable_pct": 0.0071301247771836,
            "unclear_pct": 0.4503862150920975,
            "retail_qty_pct": 0.008149695391179797,
            "mixed_qty_pct": 0.015830504198209524,
            "instit_qty_pct": 0.07348122611608962,
            "ambiguous_qty_pct": 0.05052811142531474,
            "unobservable_qty_pct": 0.8520104628692063,
            "unclear_qty_pct": 0.9025385742945211,
            "retail_notional_pct": 0.00819901754354522,
            "mixed_notional_pct": 0.01573765343435628,
            "instit_notional_pct": 0.0709187268249064,
            "ambiguous_notional_pct": 0.05050264870577925,
            "unobservable_notional_pct": 0.8546419534914128,
            "unclear_notional_pct": 0.9051446021971921,
            "run_retail_pct": 0.48654708520179374,
            "run_mixed_pct": 0.18161434977578475,
            "run_instit_pct": 0.08520179372197309,
            "run_unclear_pct": 0.24663677130044845,
            "avg_trade_size": 1166.9731431966727,
            "avg_run_notional": 4403.622869955157,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.2062780269058296,
            "medium_confidence_pct": 0.17040358744394618,
            "low_confidence_pct": 0.19506726457399104,
            "na_confidence_pct": 0.4282511210762332,
            "avg_feature_coverage": 0.8822869955156948,
            "observable_run_pct": 0.9887892376681614,
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
          "trade_id": "BMLL-603",
          "timestamp": "2026-04-17T08:59:53.998300",
          "price": 0.665,
          "size": 100.0,
          "notional": 66.5,
          "bucket": "RETAIL",
          "confidence": "MEDIUM",
          "run_id": 57821,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-602",
          "timestamp": "2026-04-17T08:59:53.998300",
          "price": 0.665,
          "size": 100.0,
          "notional": 66.5,
          "bucket": "RETAIL",
          "confidence": "MEDIUM",
          "run_id": 57821,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-601",
          "timestamp": "2026-04-17T08:59:23.195200",
          "price": 0.66,
          "size": 200.0,
          "notional": 132.0,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 57820,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-600",
          "timestamp": "2026-04-17T08:59:18.440300",
          "price": 0.665,
          "size": 100.0,
          "notional": 66.5,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 57819,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-599",
          "timestamp": "2026-04-17T08:59:13.877800",
          "price": 0.66,
          "size": 200.0,
          "notional": 132.0,
          "bucket": "MIXED",
          "confidence": "NA",
          "run_id": 57818,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-598",
          "timestamp": "2026-04-17T08:59:11.101100",
          "price": 0.66,
          "size": 200.0,
          "notional": 132.0,
          "bucket": "MIXED",
          "confidence": "NA",
          "run_id": 57818,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-597",
          "timestamp": "2026-04-17T08:58:45.471600",
          "price": 0.665,
          "size": 200.0,
          "notional": 133.0,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 57817,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-596",
          "timestamp": "2026-04-17T08:58:24.912700",
          "price": 0.665,
          "size": 300.0,
          "notional": 199.5,
          "bucket": "RETAIL",
          "confidence": "MEDIUM",
          "run_id": 57816,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-595",
          "timestamp": "2026-04-17T08:58:18.517500",
          "price": 0.665,
          "size": 500.0,
          "notional": 332.5,
          "bucket": "RETAIL",
          "confidence": "MEDIUM",
          "run_id": 57815,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-594",
          "timestamp": "2026-04-17T08:58:07.086900",
          "price": 0.665,
          "size": 100.0,
          "notional": 66.5,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 57814,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-593",
          "timestamp": "2026-04-17T08:57:41.850000",
          "price": 0.66,
          "size": 100.0,
          "notional": 66.0,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 57813,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-592",
          "timestamp": "2026-04-17T08:57:09.386000",
          "price": 0.66,
          "size": 200.0,
          "notional": 132.0,
          "bucket": "MIXED",
          "confidence": "NA",
          "run_id": 57812,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-591",
          "timestamp": "2026-04-17T08:57:09.385900",
          "price": 0.66,
          "size": 100.0,
          "notional": 66.0,
          "bucket": "MIXED",
          "confidence": "NA",
          "run_id": 57812,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-590",
          "timestamp": "2026-04-17T08:57:09.385900",
          "price": 0.66,
          "size": 300.0,
          "notional": 198.0,
          "bucket": "MIXED",
          "confidence": "NA",
          "run_id": 57812,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-589",
          "timestamp": "2026-04-17T08:57:09.385900",
          "price": 0.66,
          "size": 200.0,
          "notional": 132.0,
          "bucket": "MIXED",
          "confidence": "NA",
          "run_id": 57812,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-588",
          "timestamp": "2026-04-17T08:56:56.727900",
          "price": 0.66,
          "size": 200.0,
          "notional": 132.0,
          "bucket": "MIXED",
          "confidence": "NA",
          "run_id": 57811,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-587",
          "timestamp": "2026-04-17T08:56:56.727800",
          "price": 0.66,
          "size": 500.0,
          "notional": 330.0,
          "bucket": "MIXED",
          "confidence": "NA",
          "run_id": 57811,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-586",
          "timestamp": "2026-04-17T08:56:44.727600",
          "price": 0.66,
          "size": 300.0,
          "notional": 198.0,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 57810,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-585",
          "timestamp": "2026-04-17T08:56:44.576400",
          "price": 0.665,
          "size": 900.0,
          "notional": 598.5,
          "bucket": "RETAIL",
          "confidence": "MEDIUM",
          "run_id": 57809,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-584",
          "timestamp": "2026-04-17T08:56:39.726000",
          "price": 0.66,
          "size": 400.0,
          "notional": 264.0,
          "bucket": "RETAIL",
          "confidence": "MEDIUM",
          "run_id": 57808,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-583",
          "timestamp": "2026-04-17T08:56:39.575300",
          "price": 0.665,
          "size": 100.0,
          "notional": 66.5,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 57807,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-582",
          "timestamp": "2026-04-17T08:56:33.813000",
          "price": 0.66,
          "size": 200.0,
          "notional": 132.0,
          "bucket": "MIXED",
          "confidence": "NA",
          "run_id": 57806,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-581",
          "timestamp": "2026-04-17T08:56:33.722300",
          "price": 0.66,
          "size": 400.0,
          "notional": 264.0,
          "bucket": "MIXED",
          "confidence": "NA",
          "run_id": 57806,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-580",
          "timestamp": "2026-04-17T08:56:33.692200",
          "price": 0.66,
          "size": 800.0,
          "notional": 528.0,
          "bucket": "MIXED",
          "confidence": "NA",
          "run_id": 57806,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-579",
          "timestamp": "2026-04-17T08:56:33.692200",
          "price": 0.66,
          "size": 2000.0,
          "notional": 1320.0,
          "bucket": "MIXED",
          "confidence": "NA",
          "run_id": 57806,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-578",
          "timestamp": "2026-04-17T08:56:33.692200",
          "price": 0.66,
          "size": 200.0,
          "notional": 132.0,
          "bucket": "MIXED",
          "confidence": "NA",
          "run_id": 57806,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-577",
          "timestamp": "2026-04-17T08:56:21.569400",
          "price": 0.66,
          "size": 1000.0,
          "notional": 660.0,
          "bucket": "RETAIL",
          "confidence": "MEDIUM",
          "run_id": 57805,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-576",
          "timestamp": "2026-04-17T08:56:06.734600",
          "price": 0.66,
          "size": 200.0,
          "notional": 132.0,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 57804,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-575",
          "timestamp": "2026-04-17T08:56:06.583900",
          "price": 0.665,
          "size": 100.0,
          "notional": 66.5,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 57803,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-574",
          "timestamp": "2026-04-17T08:56:02.116800",
          "price": 0.66,
          "size": 200.0,
          "notional": 132.0,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 57802,
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
      "total_trades": 47987,
      "price_moving_trades": 11675,
      "pct_price_moving": 24.329505907850045,
      "all_movers": {
        "count": 11675,
        "avg_size": 1484.0341327623125,
        "median_size": 202.5,
        "retail_count": 9439,
        "mixed_count": 1962,
        "institutional_count": 215,
        "ambiguous_count": 59,
        "unobservable_count": 0,
        "retail_pct": 80.84796573875803,
        "mixed_pct": 16.805139186295502,
        "instit_pct": 1.841541755888651,
        "unclear_pct": 0.5053533190578158
      },
      "positive_movers": {
        "count": 5832,
        "avg_size": 1445.332733196159,
        "median_size": 190.5,
        "retail_count": 4696,
        "mixed_count": 1010,
        "institutional_count": 102,
        "ambiguous_count": 24,
        "unobservable_count": 0,
        "retail_pct": 80.52126200274348,
        "mixed_pct": 17.318244170096023,
        "instit_pct": 1.7489711934156378,
        "unclear_pct": 0.411522633744856
      },
      "negative_movers": {
        "count": 5843,
        "avg_size": 1522.6626732842717,
        "median_size": 204.00000000000003,
        "retail_count": 4743,
        "mixed_count": 952,
        "institutional_count": 113,
        "ambiguous_count": 35,
        "unobservable_count": 0,
        "retail_pct": 81.1740544240972,
        "mixed_pct": 16.293000171144957,
        "instit_pct": 1.9339380455245594,
        "unclear_pct": 0.5990073592332705
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
            "avg_short_ratio": 0.10930714748344796,
            "max_short_ratio": 0.36836158192090396,
            "interpretation": "Elevated short interest"
          }
        },
        "3M": {
          "stats": {
            "valid": true,
            "avg_short_ratio": 0.06406939784797783,
            "max_short_ratio": 0.36836158192090396,
            "interpretation": "Moderate short interest"
          }
        },
        "6M": {
          "stats": {
            "valid": true,
            "avg_short_ratio": 0.06368405734903787,
            "max_short_ratio": 0.36836158192090396,
            "interpretation": "Moderate short interest"
          }
        }
      },
      "correlation": {
        "valid": true,
        "correlation": -0.13826763650931634,
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
            "avg_short_ratio": 0.03498879724875662
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
            "avg_short_ratio": 0.03498879724875662,
            "change_pct": null
          },
          {
            "month": "2026-03",
            "avg_short_ratio": 0.1453584600680963,
            "change_pct": 315.4428602808341
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
        "interpretation": "Shorts covering significantly (-76% MoM)"
      },
      "short_series": {
        "valid": true,
        "rows": [
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
          },
          {
            "date": "2025-11-25",
            "short_ratio": 0.0633817215293396,
            "short_vol": 93000,
            "total_vol": 1467300,
            "close": 0.68,
            "return": 0.0
          },
          {
            "date": "2025-11-24",
            "short_ratio": 0.16246397694524495,
            "short_vol": 135300,
            "total_vol": 832800,
            "close": 0.68,
            "return": 0.0
          }
        ]
      },
      "peer_comparison": [
        {
          "ticker": "CRPU",
          "avg_short_ratio": 0.06406939784797783,
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
          "avg_short_ratio": 0.0008399240354307491,
          "max_short_ratio": 0.1091703056768559,
          "is_target": false
        },
        {
          "ticker": "D5IU",
          "avg_short_ratio": 0.0014637631039160618,
          "max_short_ratio": 0.2702329197017246,
          "is_target": false
        },
        {
          "ticker": "AU8U",
          "avg_short_ratio": 0.06351233039563055,
          "max_short_ratio": 0.583009889700239,
          "is_target": false
        },
        {
          "ticker": "AJBU",
          "avg_short_ratio": 0.08296383813552778,
          "max_short_ratio": 0.4312404120096428,
          "is_target": false
        },
        {
          "ticker": "JYEU",
          "avg_short_ratio": 0.10587232586111368,
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
          "opening": 0.007840707322988931,
          "continuous": 0.9595147805554943,
          "closing": 0.03065630607012014,
          "auctions": 0.04048521944450569,
          "other": 0.0
        },
        "1M": {
          "opening": 0.05421822822362795,
          "continuous": 0.8793440566500343,
          "closing": 0.053118241213132904,
          "auctions": 0.1206559433499657,
          "other": 0.0
        },
        "3M": {
          "opening": 0.04727429852817279,
          "continuous": 0.8592438624048052,
          "closing": 0.08055521661694014,
          "auctions": 0.14075613759519487,
          "other": 0.0
        },
        "6M": {
          "opening": 0.03712116835285882,
          "continuous": 0.8713089145706301,
          "closing": 0.07983407783800285,
          "auctions": 0.12869108542937005,
          "other": 0.0
        }
      },
      "hhi": {
        "1D": 0.20449698928217117,
        "1M": 0.2130255345918458,
        "3M": 0.24037653685824192,
        "6M": 0.22780779991678685
      },
      "profile_buckets": [
        {
          "time": "08:30",
          "avg_share": 0.0189
        },
        {
          "time": "09:00",
          "avg_share": 0.0941
        },
        {
          "time": "09:30",
          "avg_share": 0.0383
        },
        {
          "time": "10:00",
          "avg_share": 0.044
        },
        {
          "time": "10:30",
          "avg_share": 0.0355
        },
        {
          "time": "11:00",
          "avg_share": 0.0326
        },
        {
          "time": "11:30",
          "avg_share": 0.0414
        },
        {
          "time": "12:00",
          "avg_share": 0.2338
        },
        {
          "time": "12:30",
          "avg_share": 0.0096
        },
        {
          "time": "13:00",
          "avg_share": 0.0218
        },
        {
          "time": "13:30",
          "avg_share": 0.0191
        },
        {
          "time": "14:00",
          "avg_share": 0.0372
        },
        {
          "time": "14:30",
          "avg_share": 0.0335
        },
        {
          "time": "15:00",
          "avg_share": 0.0278
        },
        {
          "time": "15:30",
          "avg_share": 0.051
        },
        {
          "time": "16:00",
          "avg_share": 0.044
        },
        {
          "time": "16:30",
          "avg_share": 0.1021
        },
        {
          "time": "17:00",
          "avg_share": 0.1154
        }
      ],
      "peers_hhi_rows": [
        {
          "ticker": "CRPU",
          "auctions_pct": 11.621471239194147,
          "hhi": 0.2300066663194083,
          "interp": {
            "text": "Moderate",
            "cls": "bg-amber-500/20 text-amber-400",
            "you": true
          }
        },
        {
          "ticker": "ODBU",
          "auctions_pct": 6.960899254000005,
          "hhi": 0.39124010171293816,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "D5IU",
          "auctions_pct": 11.583233559620673,
          "hhi": 0.4120914721561679,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "BMGU",
          "auctions_pct": 0.815218673274224,
          "hhi": 0.7504999240944232,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "AU8U",
          "auctions_pct": 13.366782401630923,
          "hhi": 0.17431202787012226,
          "interp": {
            "text": "Moderate",
            "cls": "bg-amber-500/20 text-amber-400"
          }
        },
        {
          "ticker": "JYEU",
          "auctions_pct": 13.415699007037011,
          "hhi": 0.20915749784882515,
          "interp": {
            "text": "Moderate",
            "cls": "bg-amber-500/20 text-amber-400"
          }
        },
        {
          "ticker": "AJBU",
          "auctions_pct": 20.324154501766294,
          "hhi": 0.14740565298268973,
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
