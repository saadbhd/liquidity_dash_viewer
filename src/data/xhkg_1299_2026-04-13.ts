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
      "ticker": "1299",
      "name": "AIA",
      "marketCap": 918425324209.6001,
      "sector": "Insurance",
      "industry": "Financials - Insurance"
    },
    {
      "ticker": "2318",
      "name": "PING AN",
      "marketCap": 459143116624.8,
      "sector": "Insurance",
      "industry": "Financials - Insurance"
    },
    {
      "ticker": "2628",
      "name": "CHINA LIFE",
      "marketCap": 201358195500.0,
      "sector": "Insurance",
      "industry": "Financials - Insurance"
    },
    {
      "ticker": "2328",
      "name": "PICC P&C",
      "marketCap": 100729689961.8,
      "sector": "Insurance",
      "industry": "Financials - Insurance"
    },
    {
      "ticker": "2601",
      "name": "CPIC",
      "marketCap": 92806032000.0,
      "sector": "Insurance",
      "industry": "Financials - Insurance"
    },
    {
      "ticker": "1336",
      "name": "NCI",
      "marketCap": 48954637688.4,
      "sector": "Insurance",
      "industry": "Financials - Insurance"
    },
    {
      "ticker": "1339",
      "name": "PICC GROUP",
      "marketCap": 48168811680.0,
      "sector": "Insurance",
      "industry": "Financials - Insurance"
    },
    {
      "ticker": "966",
      "name": "CHINA TAIPING",
      "marketCap": 80074733026.64,
      "sector": "Insurance",
      "industry": "Financials - Insurance"
    },
    {
      "ticker": "6060",
      "name": "ZA ONLINE",
      "marketCap": 20778471959.0,
      "sector": "Insurance",
      "industry": "Financials - Insurance"
    }
  ]
};

export const REPORT_DATA: ReportData = {
  "meta": {
    "market": "XHKG",
    "currency": "HKD",
    "ticker": "1299",
    "company": "AIA",
    "asof_date": "2026-04-13",
    "industry": "Financials - Insurance",
    "sector": "Insurance",
    "market_cap_display": "918.4B",
    "market_cap_category": "large",
    "universe_total": 2576,
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
          "score_pca": 95.38043478260869,
          "score_pca_percentile": 95.38043478260869,
          "rank_pca": 120,
          "total": 2576,
          "adv_notional_sgd": 1345835367.6000001,
          "adv_volume_shares": 15398574.0,
          "free_float_shares": 9775918706.0,
          "turnover_ratio": 0.0015751536467410554,
          "votes": 10582.0,
          "trades": 10582.0,
          "spread_pct": 0.0006927154199901853,
          "spread_ticks": 1.203899395593683,
          "amihud": 1.2947735194465424e-11,
          "volatility": 0.26271091160529797
        },
        "pca": {
          "valid": true,
          "window_days": 1,
          "variance_explained": 0.5365337895742821,
          "loadings": {
            "log_adv": 0.5421941507658652,
            "log_trades": 0.5059716800137949,
            "log_turnover": 0.5023732484268949,
            "neg_spread": 0.40255774248878545,
            "neg_amihud": 0.02972322281039682,
            "neg_vol": -0.1862876140606398
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
          "peer_median_adv": 345498596.08000004,
          "peer_median_score_pca": 95.1863354037267,
          "peer_median_trades": 8718.0,
          "peer_median_volatility": 0.3427423904399871,
          "peer_median_spread_pct": 0.0010696222753607335,
          "peer_median_spread_ticks": 1.1725376662643716,
          "peer_median_amihud": 3.3108695780625504e-11,
          "peer_median_turnover_ratio": 0.0071904303332841315,
          "target_vs_peer": {
            "score_pca_delta": 0.19,
            "adv_delta_pct": 289.5,
            "trades_delta_pct": 21.38,
            "volatility_delta_pct": 23.35,
            "spread_pct_delta_pct": 35.24,
            "spread_ticks_delta_pct": 2.67,
            "amihud_delta_pct": 60.89,
            "turnover_ratio_delta_pct": -78.09
          }
        },
        "peer_liquidity": [
          {
            "ticker": "1299",
            "score_pca": 95.38043478260869,
            "rank_pca": 120,
            "adv": 1345835367.6000001,
            "trades": 10582.0,
            "volatility": 0.26271091160529797,
            "spread_pct": 0.0006927154199901853,
            "spread_ticks": 1.203899395593683,
            "amihud": 1.2947735194465424e-11,
            "turnover_ratio": 0.0015751536467410554,
            "is_target": true
          },
          {
            "ticker": "2318",
            "score_pca": 96.8555900621118,
            "rank_pca": 82,
            "adv": 1527923920.95,
            "trades": 9787.0,
            "volatility": 0.23291745348711335,
            "spread_pct": 0.0008980942351534561,
            "spread_ticks": 1.103305112341257,
            "amihud": 1.1473006108306965e-11,
            "turnover_ratio": 0.0043763531510884,
            "is_target": false
          },
          {
            "ticker": "2628",
            "score_pca": 98.79658385093167,
            "rank_pca": 32,
            "adv": 1870820565.8999999,
            "trades": 17977.0,
            "volatility": 0.4155049668105786,
            "spread_pct": 0.0010521306908870592,
            "spread_ticks": null,
            "amihud": 1.9680589321579e-12,
            "turnover_ratio": 0.011196069828473832,
            "is_target": false
          },
          {
            "ticker": "2328",
            "score_pca": 94.72049689440993,
            "rank_pca": 137,
            "adv": 524073774.4,
            "trades": 4738.0,
            "volatility": 0.4975188042425369,
            "spread_pct": 0.0008938564631480789,
            "spread_ticks": null,
            "amihud": 2.5785517561883168e-11,
            "turnover_ratio": 0.005924385012181307,
            "is_target": false
          },
          {
            "ticker": "2601",
            "score_pca": 90.527950310559,
            "rank_pca": 245,
            "adv": 205374535.51999998,
            "trades": 4919.0,
            "volatility": 0.21772419521325978,
            "spread_pct": 0.0011591852823017673,
            "spread_ticks": null,
            "amihud": 4.043187399936784e-11,
            "turnover_ratio": 0.0029378613543053385,
            "is_target": false
          },
          {
            "ticker": "1336",
            "score_pca": 95.65217391304348,
            "rank_pca": 113,
            "adv": 365274209.16,
            "trades": 10699.0,
            "volatility": 0.2530474069762312,
            "spread_pct": 0.0009126550343190079,
            "spread_ticks": null,
            "amihud": 1.609717372566064e-11,
            "turnover_ratio": 0.008407569300435248,
            "is_target": false
          },
          {
            "ticker": "1339",
            "score_pca": 94.29347826086956,
            "rank_pca": 148,
            "adv": 278571850.79999995,
            "trades": 7337.0,
            "volatility": 0.3272925886429993,
            "spread_pct": 0.0022608300347459536,
            "spread_ticks": 1.2417702201874863,
            "amihud": 7.637740742138504e-11,
            "turnover_ratio": 0.006527028548993405,
            "is_target": false
          },
          {
            "ticker": "966",
            "score_pca": 94.68167701863354,
            "rank_pca": 138,
            "adv": 243664930.36,
            "trades": 7649.0,
            "volatility": 0.3581921922369749,
            "spread_pct": 0.0013555117288079194,
            "spread_ticks": null,
            "amihud": 1.0062337963599935e-10,
            "turnover_ratio": 0.007853832117574858,
            "is_target": false
          },
          {
            "ticker": "6060",
            "score_pca": 98.09782608695652,
            "rank_pca": 50,
            "adv": 325722983.0,
            "trades": 13408.0,
            "volatility": 0.5258704294513414,
            "spread_pct": 0.001087113859834408,
            "spread_ticks": null,
            "amihud": 2.0091052792116948e-10,
            "turnover_ratio": 0.020620131972980352,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Insurance",
          "sector_count": 21,
          "market_count": 2576,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.45538068815349253,
              "median": 0.2995098745205822,
              "min": 0.0,
              "max": 21.951956473421735,
              "p5": 0.0,
              "p95": 1.4093731639647114,
              "count": 2576
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 59122167.303579345,
              "median": 252316.0,
              "min": 0.0,
              "max": 10355121000.0,
              "p5": 0.0,
              "p95": 254971566.54,
              "count": 2576
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.04854834441141965,
              "median": 0.027987082884822406,
              "min": 0.0004461756629917344,
              "max": 0.7648559970834851,
              "p5": 0.0014324597898074246,
              "p95": 0.1599403098239771,
              "count": 2575
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0065250122747281215,
              "median": 0.0010286626312121148,
              "min": 0.0,
              "max": 2.271727824179446,
              "p5": 0.0,
              "p95": 0.021300561369894604,
              "count": 2553
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.3905492798207699e-05,
              "median": 6.909472437596244e-09,
              "min": 0.0,
              "max": 0.019525148391127775,
              "p5": 0.0,
              "p95": 8.165515057712393e-06,
              "count": 2183
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1126.8377329192547,
              "median": 22.0,
              "min": 0.0,
              "max": 69247.0,
              "p5": 0.0,
              "p95": 6156.5,
              "count": 2576
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.3304170924800025,
              "median": 0.2530474069762312,
              "min": 0.0,
              "max": 1.6848527932313067,
              "p5": 0.05030942315137457,
              "p95": 0.5258704294513414,
              "count": 21
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 324758383.79833096,
              "median": 37828800.0,
              "min": 0.0,
              "max": 1870820565.8999999,
              "p5": 61159.99999999999,
              "p95": 1527923920.95,
              "count": 21
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.00861679558149306,
              "median": 0.002783531490631668,
              "min": 0.0006927154199901853,
              "max": 0.04082671722689122,
              "p5": 0.0008938564631480789,
              "p95": 0.03963361944812487,
              "count": 21
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.004339488070709055,
              "median": 0.0029378613543053385,
              "min": 0.0,
              "max": 0.020620131972980352,
              "p5": 2.455012231768041e-07,
              "p95": 0.011196069828473832,
              "count": 21
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 5.039073744892662e-08,
              "median": 2.4210097218528726e-10,
              "min": 0.0,
              "max": 4.0257823987318537e-07,
              "p5": 1.8696559855500054e-12,
              "p95": 3.4829147797160636e-07,
              "count": 20
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 4452.333333333333,
              "median": 1502.0,
              "min": 0.0,
              "max": 17977.0,
              "p5": 2.0,
              "p95": 13408.0,
              "count": 21
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 667678346.26125,
              "median": 345498596.08000004,
              "min": 205374535.51999998,
              "max": 1870820565.8999999,
              "p5": 218776173.714,
              "p95": 1750806740.1674998,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 9564.25,
              "median": 8718.0,
              "min": 4738.0,
              "max": 17977.0,
              "p5": 4801.35,
              "p95": 16377.849999999999,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.3535085046326294,
              "median": 0.3427423904399871,
              "min": 0.21772419521325978,
              "max": 0.5258704294513414,
              "p5": 0.22304183560910854,
              "p95": 0.5159473606282599,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.0012024221661497063,
              "median": 0.0010696222753607335,
              "min": 0.0008938564631480789,
              "max": 0.0022608300347459536,
              "p5": 0.0008953396833499609,
              "p95": 0.0019439686276676413,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 1.1725376662643716,
              "median": 1.1725376662643716,
              "min": 1.103305112341257,
              "max": 1.2417702201874863,
              "p5": 1.1102283677335685,
              "p95": 1.2348469647951748,
              "count": 2
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 5.92083681632413e-11,
              "median": 3.3108695780625504e-11,
              "min": 1.9680589321579e-12,
              "max": 2.0091052792116948e-10,
              "p5": 5.294790443810073e-12,
              "p95": 1.658100260213599e-10,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.008480403910754093,
              "median": 0.0071904303332841315,
              "min": 0.0029378613543053385,
              "max": 0.020620131972980352,
              "p5": 0.00344133348317941,
              "p95": 0.017321710222403065,
              "count": 8
            }
          },
          "returns": {
            "window_days": 1,
            "n_obs": 1,
            "stock": -0.017425519955030833,
            "market": -0.003911099438221655,
            "sector": -0.0158311345646438,
            "peers": -0.015521696995800638,
            "vs_market": -0.013514420516809178,
            "vs_sector": -0.001594385390387032,
            "vs_peers": -0.0019038229592301947
          }
        }
      },
      "30d": {
        "label": "1M",
        "window_days": 21,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 21,
          "score_pca": 98.5636645962733,
          "score_pca_percentile": 98.5636645962733,
          "rank_pca": 38,
          "total": 2576,
          "adv_notional_sgd": 2255352501.75,
          "adv_volume_shares": 26750232.0,
          "free_float_shares": 9775918706.0,
          "turnover_ratio": 0.002736339448443036,
          "votes": 16042.0,
          "trades": 16042.0,
          "spread_pct": 0.0006782780395324874,
          "spread_ticks": 1.1538176838521041,
          "amihud": 8.849418762602096e-12,
          "volatility": 0.4852458619739504
        },
        "pca": {
          "valid": true,
          "window_days": 21,
          "variance_explained": 0.5652953676446191,
          "loadings": {
            "log_adv": 0.5257653882334109,
            "log_trades": 0.481742192444087,
            "log_turnover": 0.4845905077124492,
            "neg_spread": 0.461239295655666,
            "neg_amihud": 0.1945902144220682,
            "neg_vol": 0.07784739548735399
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
          "peer_median_adv": 473468689.0,
          "peer_median_score_pca": 96.71972049689441,
          "peer_median_trades": 9286.0,
          "peer_median_volatility": 0.44461778449302064,
          "peer_median_spread_pct": 0.0010853091150464433,
          "peer_median_spread_ticks": 1.2712917149173597,
          "peer_median_amihud": 3.586845552016795e-11,
          "peer_median_turnover_ratio": 0.0068815173428988415,
          "target_vs_peer": {
            "score_pca_delta": 1.84,
            "adv_delta_pct": 376.3,
            "trades_delta_pct": 72.75,
            "volatility_delta_pct": -9.14,
            "spread_pct_delta_pct": 37.5,
            "spread_ticks_delta_pct": -9.24,
            "amihud_delta_pct": 75.33,
            "turnover_ratio_delta_pct": -60.24
          }
        },
        "peer_liquidity": [
          {
            "ticker": "1299",
            "score_pca": 98.5636645962733,
            "rank_pca": 38,
            "adv": 2255352501.75,
            "trades": 16042.0,
            "volatility": 0.4852458619739504,
            "spread_pct": 0.0006782780395324874,
            "spread_ticks": 1.1538176838521041,
            "amihud": 8.849418762602096e-12,
            "turnover_ratio": 0.002736339448443036,
            "is_target": true
          },
          {
            "ticker": "2318",
            "score_pca": 99.10714285714286,
            "rank_pca": 24,
            "adv": 1976955496.5,
            "trades": 15383.0,
            "volatility": 0.37981495350414257,
            "spread_pct": 0.0008906239141975615,
            "spread_ticks": 1.088673440850191,
            "amihud": 5.752147511323922e-12,
            "turnover_ratio": 0.005532370344884463,
            "is_target": false
          },
          {
            "ticker": "2628",
            "score_pca": 98.91304347826086,
            "rank_pca": 29,
            "adv": 1409482649.1200001,
            "trades": 14928.0,
            "volatility": 0.5169681446510168,
            "spread_pct": 0.0009445812783304676,
            "spread_ticks": null,
            "amihud": 1.4275636782139949e-11,
            "turnover_ratio": 0.00799541155049597,
            "is_target": false
          },
          {
            "ticker": "2328",
            "score_pca": 96.15683229813664,
            "rank_pca": 100,
            "adv": 515362280.76,
            "trades": 6566.0,
            "volatility": 0.2962759108312453,
            "spread_pct": 0.00091270473401192,
            "spread_ticks": null,
            "amihud": 2.395304200224627e-11,
            "turnover_ratio": 0.005817936272480755,
            "is_target": false
          },
          {
            "ticker": "2601",
            "score_pca": 97.28260869565217,
            "rank_pca": 71,
            "adv": 465659295.99999994,
            "trades": 11084.0,
            "volatility": 0.3053890935471681,
            "spread_pct": 0.0012781774369827522,
            "spread_ticks": null,
            "amihud": 2.5582032358235057e-11,
            "turnover_ratio": 0.0065369633866709355,
            "is_target": false
          },
          {
            "ticker": "1336",
            "score_pca": 97.74844720496894,
            "rank_pca": 59,
            "adv": 481278082.0,
            "trades": 11659.0,
            "volatility": 0.46666189183514256,
            "spread_pct": 0.0009308061130556341,
            "spread_ticks": 1.5901870532470748,
            "amihud": 4.615487868210084e-11,
            "turnover_ratio": 0.010301486361053689,
            "is_target": false
          },
          {
            "ticker": "1339",
            "score_pca": 93.86645962732919,
            "rank_pca": 159,
            "adv": 242773167.11999997,
            "trades": 5293.0,
            "volatility": 0.4229054055626876,
            "spread_pct": 0.002199181401454845,
            "spread_ticks": 1.2712917149173597,
            "amihud": 7.152835215986116e-11,
            "turnover_ratio": 0.0053602583437895755,
            "is_target": false
          },
          {
            "ticker": "966",
            "score_pca": 95.1863354037267,
            "rank_pca": 125,
            "adv": 218124348.0,
            "trades": 7488.0,
            "volatility": 0.46881009364061127,
            "spread_pct": 0.0015759194130527802,
            "spread_ticks": null,
            "amihud": 1.0062337963599935e-10,
            "turnover_ratio": 0.007226071299126747,
            "is_target": false
          },
          {
            "ticker": "6060",
            "score_pca": 94.29347826086956,
            "rank_pca": 148,
            "adv": 126637728.0,
            "trades": 7057.0,
            "volatility": 0.4663301634233537,
            "spread_pct": 0.001226036951762419,
            "spread_ticks": null,
            "amihud": 1.4393356444561903e-10,
            "turnover_ratio": 0.007310417837763256,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Insurance",
          "sector_count": 21,
          "market_count": 2576,
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
              "mean": 64309155.04327383,
              "median": 221797.5,
              "min": 0.0,
              "max": 12484489600.0,
              "p5": 0.0,
              "p95": 245012729.9,
              "count": 2576
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.04641870402197923,
              "median": 0.029013203613620597,
              "min": 0.0005957156584162828,
              "max": 0.7873945213823746,
              "p5": 0.0014889976315259788,
              "p95": 0.1485737622237792,
              "count": 2575
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.004498458752410253,
              "median": 0.0008751640932674877,
              "min": 0.0,
              "max": 0.6759592138881427,
              "p5": 0.0,
              "p95": 0.016590545900840005,
              "count": 2553
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.3048494165648461e-06,
              "median": 4.6395854066480917e-08,
              "min": 0.0,
              "max": 0.0004281949934123848,
              "p5": 3.630791306986329e-11,
              "p95": 4.973974037584155e-06,
              "count": 2567
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1153.1350931677018,
              "median": 20.0,
              "min": 0.0,
              "max": 79388.0,
              "p5": 0.0,
              "p95": 6002.25,
              "count": 2576
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.4854894780094215,
              "median": 0.4663301634233537,
              "min": 0.25849248968320093,
              "max": 1.4661806219487916,
              "p5": 0.2659319389119841,
              "p95": 0.8775062235908344,
              "count": 21
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 372671052.1117686,
              "median": 31745120.0,
              "min": 0.0,
              "max": 2255352501.75,
              "p5": 11360.0,
              "p95": 1976955496.5,
              "count": 21
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.009608342965652791,
              "median": 0.002361845487398344,
              "min": 0.0006782780395324874,
              "max": 0.05326530976292833,
              "p5": 0.0008906239141975615,
              "p95": 0.04082671722689122,
              "count": 21
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0036726135015348223,
              "median": 0.0031036910813829156,
              "min": 0.0,
              "max": 0.010301486361053689,
              "p5": 2.455012231768041e-07,
              "p95": 0.00799541155049597,
              "count": 21
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 5.335218277030956e-08,
              "median": 4.1315351559226593e-10,
              "min": 5.752147511323922e-12,
              "max": 5.805717470565019e-07,
              "p5": 8.849418762602096e-12,
              "p95": 2.294200994031404e-07,
              "count": 21
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 4836.047619047619,
              "median": 1643.0,
              "min": 0.0,
              "max": 16042.0,
              "p5": 1.0,
              "p95": 15383.0,
              "count": 21
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 679534130.9375,
              "median": 473468689.0,
              "min": 126637728.0,
              "max": 1976955496.5,
              "p5": 158658045.0,
              "p95": 1778339999.9169998,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 9932.25,
              "median": 9286.0,
              "min": 5293.0,
              "max": 15383.0,
              "p5": 5738.55,
              "p95": 15223.75,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.415394457124421,
              "median": 0.44461778449302064,
              "min": 0.2962759108312453,
              "max": 0.5169681446510168,
              "p5": 0.2994655247818183,
              "p95": 0.5001128267973749,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.0012447539053560474,
              "median": 0.0010853091150464433,
              "min": 0.0008906239141975615,
              "max": 0.002199181401454845,
              "p5": 0.000898352201132587,
              "p95": 0.001981039705514122,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 1.3167174030048752,
              "median": 1.2712917149173597,
              "min": 1.088673440850191,
              "max": 1.5901870532470748,
              "p5": 1.1069352682569078,
              "p95": 1.5582975194141033,
              "count": 3
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 5.397537919719069e-11,
              "median": 3.586845552016795e-11,
              "min": 5.752147511323922e-12,
              "max": 1.4393356444561903e-10,
              "p5": 8.735368756109531e-12,
              "p95": 1.287749997622521e-10,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.007010114424533174,
              "median": 0.0068815173428988415,
              "min": 0.0053602583437895755,
              "max": 0.010301486361053689,
              "p5": 0.0054204975441727865,
              "p95": 0.009494360177358486,
              "count": 8
            }
          },
          "returns": {
            "window_days": 21,
            "n_obs": 21,
            "stock": 0.02043199065966128,
            "market": -0.007811259659372016,
            "sector": -0.025075823463395097,
            "peers": -0.04568550494966461,
            "vs_market": 0.028243250319033297,
            "vs_sector": 0.04550781412305638,
            "vs_peers": 0.0661174956093259
          }
        }
      },
      "3m": {
        "label": "3M",
        "window_days": 63,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 63,
          "score_pca": 98.91304347826086,
          "score_pca_percentile": 98.91304347826086,
          "rank_pca": 29,
          "total": 2576,
          "adv_notional_sgd": 2417829675.2999997,
          "adv_volume_shares": 28270721.0,
          "free_float_shares": 9775918706.0,
          "turnover_ratio": 0.0028918735773292344,
          "votes": 15173.0,
          "trades": 15173.0,
          "spread_pct": 0.0006682821895243901,
          "spread_ticks": 1.123968851052597,
          "amihud": 6.880184524268378e-12,
          "volatility": 0.4172827138823195
        },
        "pca": {
          "valid": true,
          "window_days": 63,
          "variance_explained": 0.6168955913599982,
          "loadings": {
            "log_adv": 0.49906876739352124,
            "log_trades": 0.45259708956768363,
            "log_turnover": 0.4522303786631408,
            "neg_spread": 0.46143935024373584,
            "neg_amihud": 0.3308549211253371,
            "neg_vol": 0.1385015225734064
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
          "peer_median_adv": 534745225.16499996,
          "peer_median_score_pca": 97.49611801242236,
          "peer_median_trades": 10182.5,
          "peer_median_volatility": 0.3782991664431765,
          "peer_median_spread_pct": 0.001192278320075154,
          "peer_median_spread_ticks": 1.269184969568669,
          "peer_median_amihud": 3.0471532038499666e-11,
          "peer_median_turnover_ratio": 0.0076670510564078725,
          "target_vs_peer": {
            "score_pca_delta": 1.42,
            "adv_delta_pct": 352.1,
            "trades_delta_pct": 49.01,
            "volatility_delta_pct": -10.3,
            "spread_pct_delta_pct": 43.95,
            "spread_ticks_delta_pct": -11.44,
            "amihud_delta_pct": 77.42,
            "turnover_ratio_delta_pct": -62.28
          }
        },
        "peer_liquidity": [
          {
            "ticker": "1299",
            "score_pca": 98.91304347826086,
            "rank_pca": 29,
            "adv": 2417829675.2999997,
            "trades": 15173.0,
            "volatility": 0.4172827138823195,
            "spread_pct": 0.0006682821895243901,
            "spread_ticks": 1.123968851052597,
            "amihud": 6.880184524268378e-12,
            "turnover_ratio": 0.0028918735773292344,
            "is_target": true
          },
          {
            "ticker": "2318",
            "score_pca": 99.68944099378882,
            "rank_pca": 9,
            "adv": 2583869872.5,
            "trades": 19161.0,
            "volatility": 0.3396784226569705,
            "spread_pct": 0.0008209808642056306,
            "spread_ticks": 1.0974239713774598,
            "amihud": 5.3002557405654205e-12,
            "turnover_ratio": 0.006982974088928238,
            "is_target": false
          },
          {
            "ticker": "2628",
            "score_pca": 99.57298136645963,
            "rank_pca": 12,
            "adv": 1988998366.68,
            "trades": 19336.0,
            "volatility": 0.4630439134335733,
            "spread_pct": 0.0008146904245321069,
            "spread_ticks": null,
            "amihud": 1.0613456294901722e-11,
            "turnover_ratio": 0.010571909313792843,
            "is_target": false
          },
          {
            "ticker": "2328",
            "score_pca": 96.8555900621118,
            "rank_pca": 82,
            "adv": 532563774.3299999,
            "trades": 6808.0,
            "volatility": 0.28310003454377874,
            "spread_pct": 0.0008804001889405242,
            "spread_ticks": null,
            "amihud": 2.185462284565704e-11,
            "turnover_ratio": 0.005514388374240784,
            "is_target": false
          },
          {
            "ticker": "2601",
            "score_pca": 98.6024844720497,
            "rank_pca": 37,
            "adv": 571368397.44,
            "trades": 14252.0,
            "volatility": 0.31458286927141643,
            "spread_pct": 0.0011848996112379397,
            "spread_ticks": null,
            "amihud": 2.5582032358235057e-11,
            "turnover_ratio": 0.00790483448193948,
            "is_target": false
          },
          {
            "ticker": "1336",
            "score_pca": 98.13664596273291,
            "rank_pca": 49,
            "adv": 536926676.0,
            "trades": 10809.0,
            "volatility": 0.3962948124161979,
            "spread_pct": 0.0013402930963793637,
            "spread_ticks": 1.612522033406381,
            "amihud": 3.536103171876427e-11,
            "turnover_ratio": 0.010313690235271627,
            "is_target": false
          },
          {
            "ticker": "1339",
            "score_pca": 95.45807453416148,
            "rank_pca": 118,
            "adv": 276851364.5,
            "trades": 6515.0,
            "volatility": 0.3617230757651536,
            "spread_pct": 0.002020967701928999,
            "spread_ticks": 1.269184969568669,
            "amihud": 5.735373151462852e-11,
            "turnover_ratio": 0.005555535633595077,
            "is_target": false
          },
          {
            "ticker": "966",
            "score_pca": 96.46739130434783,
            "rank_pca": 92,
            "adv": 245898380.0,
            "trades": 9556.0,
            "volatility": 0.42285009551601566,
            "spread_pct": 0.0015759194130527802,
            "spread_ticks": null,
            "amihud": 7.812995109500058e-11,
            "turnover_ratio": 0.007508086433364686,
            "is_target": false
          },
          {
            "ticker": "6060",
            "score_pca": 95.34161490683229,
            "rank_pca": 121,
            "adv": 156825120.0,
            "trades": 7471.0,
            "volatility": 0.3948752571211995,
            "spread_pct": 0.0011996570289123682,
            "spread_ticks": null,
            "amihud": 1.071153662845073e-10,
            "turnover_ratio": 0.007826015679451058,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Insurance",
          "sector_count": 21,
          "market_count": 2576,
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
              "mean": 61519254.895679474,
              "median": 230944.0,
              "min": 0.0,
              "max": 13968603216.0,
              "p5": 0.0,
              "p95": 239325014.14999998,
              "count": 2576
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.04284195883727662,
              "median": 0.027128862094951047,
              "min": 0.0005607359268088029,
              "max": 0.5173652694610777,
              "p5": 0.0014388773987694728,
              "p95": 0.1353564638187657,
              "count": 2575
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0040854276768171535,
              "median": 0.0008904739471300301,
              "min": 0.0,
              "max": 0.4102056640783613,
              "p5": 0.0,
              "p95": 0.01626861087639243,
              "count": 2553
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 7.24868725009713e-07,
              "median": 4.322802925070572e-08,
              "min": 0.0,
              "max": 4.7054394880481924e-05,
              "p5": 4.6644375118181316e-11,
              "p95": 3.663689956299134e-06,
              "count": 2574
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1089.9708850931677,
              "median": 20.0,
              "min": 0.0,
              "max": 80215.0,
              "p5": 0.0,
              "p95": 5980.0,
              "count": 2576
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.47562095040750263,
              "median": 0.3948752571211995,
              "min": 0.24856337466919198,
              "max": 2.4058764852881547,
              "p5": 0.2651868023933991,
              "p95": 0.7033677500953865,
              "count": 21
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 449881719.1708381,
              "median": 30871479.520000003,
              "min": 0.0,
              "max": 2583869872.5,
              "p5": 33000.0,
              "p95": 2417829675.2999997,
              "count": 21
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.0074078852989457,
              "median": 0.0020282069014012382,
              "min": 0.0006682821895243901,
              "max": 0.03467838593687578,
              "p5": 0.0008146904245321069,
              "p95": 0.03333872794950646,
              "count": 21
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.003926392786506905,
              "median": 0.002952022966257726,
              "min": 0.0,
              "max": 0.010571909313792843,
              "p5": 3.068765289710051e-07,
              "p95": 0.010313690235271627,
              "count": 21
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 2.7667021088482126e-08,
              "median": 4.2201851557282863e-10,
              "min": 5.3002557405654205e-12,
              "max": 2.09709949881046e-07,
              "p5": 6.880184524268378e-12,
              "p95": 1.3594652769910502e-07,
              "count": 21
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 5472.952380952381,
              "median": 1304.0,
              "min": 0.0,
              "max": 19336.0,
              "p5": 2.0,
              "p95": 19161.0,
              "count": 21
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 861662743.9312501,
              "median": 534745225.16499996,
              "min": 156825120.0,
              "max": 2583869872.5,
              "p5": 188000761.0,
              "p95": 2375664845.463,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 11738.5,
              "median": 10182.5,
              "min": 6515.0,
              "max": 19336.0,
              "p5": 6617.55,
              "p95": 19274.75,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.3720185600905382,
              "median": 0.3782991664431765,
              "min": 0.28310003454377874,
              "max": 0.4630439134335733,
              "p5": 0.2941190266984519,
              "p95": 0.4489760771624281,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.0012297260411487142,
              "median": 0.001192278320075154,
              "min": 0.0008146904245321069,
              "max": 0.002020967701928999,
              "p5": 0.0008168920784178402,
              "p95": 0.0018652008008223223,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 1.3263769914508365,
              "median": 1.269184969568669,
              "min": 1.0974239713774598,
              "max": 1.612522033406381,
              "p5": 1.1146000711965807,
              "p95": 1.5781883270226098,
              "count": 3
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 4.266380598153249e-11,
              "median": 3.0471532038499666e-11,
              "min": 5.3002557405654205e-12,
              "max": 1.071153662845073e-10,
              "p5": 7.159875934583126e-12,
              "p95": 9.697047096817993e-11,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.007772179280072974,
              "median": 0.0076670510564078725,
              "min": 0.005514388374240784,
              "max": 0.010571909313792843,
              "p5": 0.005528789915014786,
              "p95": 0.010481532636310418,
              "count": 8
            }
          },
          "returns": {
            "window_days": 63,
            "n_obs": 63,
            "stock": 0.01568855316676321,
            "market": 0.058957371688082016,
            "sector": -0.1405102130267416,
            "peers": -0.1799476513506988,
            "vs_market": -0.04326881852131881,
            "vs_sector": 0.1561987661935048,
            "vs_peers": 0.195636204517462
          }
        }
      },
      "6m": {
        "label": "6M",
        "window_days": 126,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 126,
          "score_pca": 98.87422360248446,
          "score_pca_percentile": 98.87422360248446,
          "rank_pca": 30,
          "total": 2576,
          "adv_notional_sgd": 2106529895.55,
          "adv_volume_shares": 25489730.0,
          "free_float_shares": 9775918706.0,
          "turnover_ratio": 0.0026073999556026997,
          "votes": 14042.5,
          "trades": 14042.5,
          "spread_pct": 0.0006855428586916405,
          "spread_ticks": 1.1202020525307097,
          "amihud": 7.122807834281049e-12,
          "volatility": 0.3685963113204544
        },
        "pca": {
          "valid": true,
          "window_days": 126,
          "variance_explained": 0.6216687403222395,
          "loadings": {
            "log_adv": 0.4991145262019067,
            "log_trades": 0.4541151172880886,
            "log_turnover": 0.4521541573785128,
            "neg_spread": 0.4647282542844904,
            "neg_amihud": 0.33336737825935425,
            "neg_vol": 0.11451903218318861
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
          "peer_median_adv": 512775188.47,
          "peer_median_score_pca": 97.10791925465838,
          "peer_median_trades": 9820.0,
          "peer_median_volatility": 0.3608821390975261,
          "peer_median_spread_pct": 0.0011054140365871594,
          "peer_median_spread_ticks": 1.347247426610128,
          "peer_median_amihud": 3.0103686872155973e-11,
          "peer_median_turnover_ratio": 0.007421600858403567,
          "target_vs_peer": {
            "score_pca_delta": 1.77,
            "adv_delta_pct": 310.8,
            "trades_delta_pct": 43.0,
            "volatility_delta_pct": -2.14,
            "spread_pct_delta_pct": 37.98,
            "spread_ticks_delta_pct": -16.85,
            "amihud_delta_pct": 76.34,
            "turnover_ratio_delta_pct": -64.87
          }
        },
        "peer_liquidity": [
          {
            "ticker": "1299",
            "score_pca": 98.87422360248446,
            "rank_pca": 30,
            "adv": 2106529895.55,
            "trades": 14042.5,
            "volatility": 0.3685963113204544,
            "spread_pct": 0.0006855428586916405,
            "spread_ticks": 1.1202020525307097,
            "amihud": 7.122807834281049e-12,
            "turnover_ratio": 0.0026073999556026997,
            "is_target": true
          },
          {
            "ticker": "2318",
            "score_pca": 99.49534161490683,
            "rank_pca": 14,
            "adv": 2325332997.6,
            "trades": 16964.5,
            "volatility": 0.3183358675933496,
            "spread_pct": 0.0008760736010061354,
            "spread_ticks": 1.0892712356537555,
            "amihud": 4.883409595552578e-12,
            "turnover_ratio": 0.0063646937470449826,
            "is_target": false
          },
          {
            "ticker": "2628",
            "score_pca": 99.37888198757764,
            "rank_pca": 17,
            "adv": 1704905641.23,
            "trades": 16910.0,
            "volatility": 0.43941475498785504,
            "spread_pct": 0.0008594033118223315,
            "spread_ticks": null,
            "amihud": 1.0319483511426497e-11,
            "turnover_ratio": 0.010143194879377005,
            "is_target": false
          },
          {
            "ticker": "2328",
            "score_pca": 96.07919254658384,
            "rank_pca": 102,
            "adv": 490083553.85,
            "trades": 6170.0,
            "volatility": 0.2743643924739824,
            "spread_pct": 0.0008309453103125118,
            "spread_ticks": null,
            "amihud": 2.167599590585155e-11,
            "turnover_ratio": 0.004853047153888867,
            "is_target": false
          },
          {
            "ticker": "2601",
            "score_pca": 98.29192546583852,
            "rank_pca": 45,
            "adv": 535466823.09000003,
            "trades": 12737.5,
            "volatility": 0.3392826732444454,
            "spread_pct": 0.0011695675776394378,
            "spread_ticks": null,
            "amihud": 2.6738432275792517e-11,
            "turnover_ratio": 0.007399987661962272,
            "is_target": false
          },
          {
            "ticker": "1336",
            "score_pca": 98.13664596273291,
            "rank_pca": 49,
            "adv": 539941446.0,
            "trades": 10944.5,
            "volatility": 0.43040284215192764,
            "spread_pct": 0.0012550801285389937,
            "spread_ticks": 1.5803440561598396,
            "amihud": 3.346894146851943e-11,
            "turnover_ratio": 0.010603968100598278,
            "is_target": false
          },
          {
            "ticker": "1339",
            "score_pca": 95.2251552795031,
            "rank_pca": 124,
            "adv": 272037603.38,
            "trades": 6494.5,
            "volatility": 0.3656583456176334,
            "spread_pct": 0.0020280127681907333,
            "spread_ticks": 1.347247426610128,
            "amihud": 5.109186720256527e-11,
            "turnover_ratio": 0.005324640090088324,
            "is_target": false
          },
          {
            "ticker": "966",
            "score_pca": 95.96273291925466,
            "rank_pca": 105,
            "adv": 210541952.0,
            "trades": 8695.5,
            "volatility": 0.4179801431150967,
            "spread_pct": 0.0015674071061934395,
            "spread_ticks": null,
            "amihud": 8.454515241067818e-11,
            "turnover_ratio": 0.007443214054844863,
            "is_target": false
          },
          {
            "ticker": "6060",
            "score_pca": 95.61335403726709,
            "rank_pca": 114,
            "adv": 162242990.5,
            "trades": 7803.0,
            "volatility": 0.35610593257741885,
            "spread_pct": 0.0010412604955348807,
            "spread_ticks": null,
            "amihud": 8.126669328686517e-11,
            "turnover_ratio": 0.008344711292191448,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Insurance",
          "sector_count": 21,
          "market_count": 2576,
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
              "mean": 56542891.208101414,
              "median": 219410.125,
              "min": 0.0,
              "max": 11530530000.0,
              "p5": 0.0,
              "p95": 214127775.0,
              "count": 2576
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.042004487177423104,
              "median": 0.026651223195499653,
              "min": 0.000558678699550006,
              "max": 0.49098715795419084,
              "p5": 0.001390744598616606,
              "p95": 0.13470487233538153,
              "count": 2575
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.003659746886055854,
              "median": 0.000864143138348958,
              "min": 0.0,
              "max": 0.17601894736842105,
              "p5": 0.0,
              "p95": 0.014489803074043354,
              "count": 2553
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 6.470128402567895e-07,
              "median": 4.630396367913572e-08,
              "min": 0.0,
              "max": 4.7054394880481924e-05,
              "p5": 5.0443531668434034e-11,
              "p95": 3.6564790403449536e-06,
              "count": 2574
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1037.5366847826087,
              "median": 21.0,
              "min": 0.0,
              "max": 93269.5,
              "p5": 0.0,
              "p95": 5730.375,
              "count": 2576
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.4312214588775826,
              "median": 0.35628871258488604,
              "min": 0.2184376456206474,
              "max": 1.7718045486705873,
              "p5": 0.23085045282299188,
              "p95": 0.6883592835320167,
              "count": 21
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 404363853.93562084,
              "median": 33925103.0,
              "min": 0.0,
              "max": 2325332997.6,
              "p5": 54080.0,
              "p95": 2106529895.55,
              "count": 21
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.008451158330572837,
              "median": 0.0021516238350374234,
              "min": 0.0006855428586916405,
              "max": 0.046039005437009034,
              "p5": 0.0008309453103125118,
              "p95": 0.04255319148936175,
              "count": 21
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0039028924565726853,
              "median": 0.002977763933093107,
              "min": 0.0,
              "max": 0.010603968100598278,
              "p5": 5.114608816183419e-07,
              "p95": 0.010143194879377005,
              "count": 21
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 2.3645224298529327e-08,
              "median": 4.1606869511540676e-10,
              "min": 4.883409595552578e-12,
              "max": 1.7076502732240377e-07,
              "p5": 7.122807834281049e-12,
              "p95": 1.4333218667584128e-07,
              "count": 21
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 5076.738095238095,
              "median": 1203.5,
              "min": 0.0,
              "max": 16964.5,
              "p5": 3.5,
              "p95": 16910.0,
              "count": 21
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 780069125.9562501,
              "median": 512775188.47,
              "min": 162242990.5,
              "max": 2325332997.6,
              "p5": 179147627.025,
              "p95": 2108183422.8704996,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 10839.9375,
              "median": 9820.0,
              "min": 6170.0,
              "max": 16964.5,
              "p5": 6283.575,
              "p95": 16945.425,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.3676931189702136,
              "median": 0.3608821390975261,
              "min": 0.2743643924739824,
              "max": 0.43941475498785504,
              "p5": 0.2897544087657609,
              "p95": 0.43626058549528046,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.0012034687874048079,
              "median": 0.0011054140365871594,
              "min": 0.0008309453103125118,
              "max": 0.0020280127681907333,
              "p5": 0.0008409056108409488,
              "p95": 0.0018668007864916802,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 1.3389542394745744,
              "median": 1.347247426610128,
              "min": 1.0892712356537555,
              "max": 1.5803440561598396,
              "p5": 1.1150688547493928,
              "p95": 1.5570343932048685,
              "count": 3
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 3.9248746957156394e-11,
              "median": 3.0103686872155973e-11,
              "min": 4.883409595552578e-12,
              "max": 8.454515241067818e-11,
              "p5": 6.78603546610845e-12,
              "p95": 8.339769171734362e-11,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.007559682122499505,
              "median": 0.007421600858403567,
              "min": 0.004853047153888867,
              "max": 0.010603968100598278,
              "p5": 0.005018104681558677,
              "p95": 0.010442697473170831,
              "count": 8
            }
          },
          "returns": {
            "window_days": 126,
            "n_obs": 126,
            "stock": 0.23272214386459944,
            "market": 0.10999472576257396,
            "sector": -0.05168246693843748,
            "peers": 0.04330716022722392,
            "vs_market": 0.12272741810202548,
            "vs_sector": 0.2844046108030369,
            "vs_peers": 0.18941498363737552
          }
        }
      }
    },
    "period_insights": {
      "1d": {
        "liquidity": "1D score 95.4 vs peer median 95.2 (+0.2 pts).",
        "market_comparison": "The stock fell 1.7% on the day compared with peers down 1.6%, so trading conditions were broadly in line with the peer move rather than driven by a sharper stock-specific dislocation."
      },
      "30d": {
        "liquidity": "1M score 98.6 vs peer median 96.7 (+1.8 pts).",
        "market_comparison": "The stock returned 2.0% over one month while peers fell 4.6%, giving liquidity a firmer price backdrop than the group."
      },
      "3m": {
        "liquidity": "Three-month tradability remains solid, with a liquidity score of 98.9 compared with a peer median of 97.5, indicating access has held up over the quarter.",
        "market_comparison": "The stock rose 1.6% over three months while peers fell 18.0%, which matters because stronger relative performance usually supports steadier market participation."
      },
      "6m": {
        "liquidity": "Six-month tradability is solid for its size, with a liquidity score of 98.9 against a peer median of 97.1, showing access has been consistently better than the peer middle.",
        "market_comparison": "The stock gained 23.3% over six months compared with peers up 4.3%, reinforcing that liquidity has sat alongside a much stronger return backdrop than the group."
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
      "current_regime": 0,
      "current_regime_label": "Low Volatility",
      "current_regime_probability": 1.0,
      "current_driver_mix": {
        "market_share": {
          "median": 0.321679077920109,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "32.2%",
          "display_range": null,
          "display_text": "32.2%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "share_pct",
          "value_pct": 32.2,
          "plain_english": "Market explains about 32.2% of price moves in the current state."
        },
        "sector_share": {
          "median": 0.3951752574837606,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "39.5%",
          "display_range": null,
          "display_text": "39.5%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "share_pct",
          "value_pct": 39.5,
          "plain_english": "Sector explains about 39.5% of price moves in the current state."
        },
        "company_share": {
          "median": 0.28314566459613044,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "28.3%",
          "display_range": null,
          "display_text": "28.3%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "share_pct",
          "value_pct": 28.3,
          "plain_english": "Company-specific explains about 28.3% of price moves in the current state."
        },
        "basis": "current_state"
      },
      "current_sensitivities": {
        "beta_market": {
          "median": -1.1604166111628564,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "-1.16",
          "display_range": null,
          "display_text": "-1.16",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "beta",
          "strength_label": "Moderate",
          "plain_english": "Moderate market link: a 1% market move has lined up with about a 1.16% stock move in the opposite direction in this state.",
          "value_num": -1.16
        },
        "beta_stock_lag": {
          "median": -1.3419991981321466,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "-1.34",
          "display_range": null,
          "display_text": "-1.34",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "lag_beta",
          "value_num": -1.34
        },
        "beta_sector": {
          "median": 1.6255417744312808,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "1.63",
          "display_range": null,
          "display_text": "1.63",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "beta",
          "strength_label": "High",
          "plain_english": "High sector link: a 1% sector move has lined up with about a 1.63% stock move in the same direction in this state.",
          "value_num": 1.63
        },
        "beta_market_lag": {
          "median": 0.9720875387882666,
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
          "median": 0.47090252272058414,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "0.47",
          "display_range": null,
          "display_text": "0.47",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "lag_beta",
          "value_num": 0.47
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
          "dominant_driver": "sector",
          "dominant_driver_label": "Sector",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.7261711514391566,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "72.6%",
            "display_range": null,
            "display_text": "72.6%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
            "kind": "share_pct",
            "value_pct": 72.6,
            "plain_english": "Sector explains about 72.6% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.22258119830379813,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "22.3%",
              "display_range": null,
              "display_text": "22.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
              "kind": "share_pct",
              "value_pct": 22.3,
              "plain_english": "Market explains about 22.3% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.7261711514391566,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "72.6%",
              "display_range": null,
              "display_text": "72.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
              "kind": "share_pct",
              "value_pct": 72.6,
              "plain_english": "Sector explains about 72.6% of price moves in the current state."
            },
            "company_share": {
              "median": 0.05124765025704525,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "5.1%",
              "display_range": null,
              "display_text": "5.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
              "kind": "share_pct",
              "value_pct": 5.1,
              "plain_english": "Company-specific explains about 5.1% of price moves in the current state."
            }
          },
          "summary": "Mar: Still clearly sector-driven, though based on only 5 trading days."
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
            "median": 0.39790876846464956,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "39.8%",
            "display_range": null,
            "display_text": "39.8%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
            "kind": "share_pct",
            "value_pct": 39.8,
            "plain_english": "Market explains about 39.8% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.39790876846464956,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "39.8%",
              "display_range": null,
              "display_text": "39.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
              "kind": "share_pct",
              "value_pct": 39.8,
              "plain_english": "Market explains about 39.8% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.35990827515839346,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "36.0%",
              "display_range": null,
              "display_text": "36.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
              "kind": "share_pct",
              "value_pct": 36.0,
              "plain_english": "Sector explains about 36.0% of price moves in the current state."
            },
            "company_share": {
              "median": 0.24218295637695705,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "24.2%",
              "display_range": null,
              "display_text": "24.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
              "kind": "share_pct",
              "value_pct": 24.2,
              "plain_english": "Company-specific explains about 24.2% of price moves in the current state."
            }
          },
          "summary": "Apr: More mixed, though market-driven still has the largest share."
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
            "median": 0.43475807077944445,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "43.5%",
            "display_range": null,
            "display_text": "43.5%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
            "kind": "share_pct",
            "value_pct": 43.5,
            "plain_english": "Company-specific explains about 43.5% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.3418042133012487,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "34.2%",
              "display_range": null,
              "display_text": "34.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 34.2,
              "plain_english": "Market explains about 34.2% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.2234377159193067,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "22.3%",
              "display_range": null,
              "display_text": "22.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 22.3,
              "plain_english": "Sector explains about 22.3% of price moves in the current state."
            },
            "company_share": {
              "median": 0.43475807077944445,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "43.5%",
              "display_range": null,
              "display_text": "43.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 43.5,
              "plain_english": "Company-specific explains about 43.5% of price moves in the current state."
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
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.4499101746759693,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "45.0%",
            "display_range": null,
            "display_text": "45.0%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
            "kind": "share_pct",
            "value_pct": 45.0,
            "plain_english": "Company-specific explains about 45.0% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.41084732800760765,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "41.1%",
              "display_range": null,
              "display_text": "41.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 41.1,
              "plain_english": "Market explains about 41.1% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.1392424973164231,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "13.9%",
              "display_range": null,
              "display_text": "13.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 13.9,
              "plain_english": "Sector explains about 13.9% of price moves in the current state."
            },
            "company_share": {
              "median": 0.4499101746759693,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "45.0%",
              "display_range": null,
              "display_text": "45.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 45.0,
              "plain_english": "Company-specific explains about 45.0% of price moves in the current state."
            }
          },
          "summary": "Jun: More mixed, though company-driven still has the largest share."
        },
        {
          "month_key": "2025-07",
          "month_label": "July 2025",
          "month_short_label": "Jul",
          "period_label": "2025-07-02 to 2025-07-31",
          "n_obs": 22,
          "partial_month": true,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.48457914546259995,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "48.5%",
            "display_range": null,
            "display_text": "48.5%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
            "kind": "share_pct",
            "value_pct": 48.5,
            "plain_english": "Company-specific explains about 48.5% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.26427430463345386,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "26.4%",
              "display_range": null,
              "display_text": "26.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 26.4,
              "plain_english": "Market explains about 26.4% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.2511465499039463,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "25.1%",
              "display_range": null,
              "display_text": "25.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 25.1,
              "plain_english": "Sector explains about 25.1% of price moves in the current state."
            },
            "company_share": {
              "median": 0.48457914546259995,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "48.5%",
              "display_range": null,
              "display_text": "48.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 48.5,
              "plain_english": "Company-specific explains about 48.5% of price moves in the current state."
            }
          },
          "summary": "Jul: Mostly company-driven."
        },
        {
          "month_key": "2025-08",
          "month_label": "August 2025",
          "month_short_label": "Aug",
          "period_label": "2025-08-01 to 2025-08-29",
          "n_obs": 21,
          "partial_month": false,
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.451871888575332,
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
            "plain_english": "Market explains about 45.2% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.451871888575332,
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
              "plain_english": "Market explains about 45.2% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.27285631905051366,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "27.3%",
              "display_range": null,
              "display_text": "27.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 27.3,
              "plain_english": "Sector explains about 27.3% of price moves in the current state."
            },
            "company_share": {
              "median": 0.27527179237415433,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "27.5%",
              "display_range": null,
              "display_text": "27.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 27.5,
              "plain_english": "Company-specific explains about 27.5% of price moves in the current state."
            }
          },
          "summary": "Aug: Mostly market-driven."
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
            "median": 0.42525232402700364,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "42.5%",
            "display_range": null,
            "display_text": "42.5%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
            "kind": "share_pct",
            "value_pct": 42.5,
            "plain_english": "Company-specific explains about 42.5% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.19890050656378852,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "19.9%",
              "display_range": null,
              "display_text": "19.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 19.9,
              "plain_english": "Market explains about 19.9% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.37584716940920787,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "37.6%",
              "display_range": null,
              "display_text": "37.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 37.6,
              "plain_english": "Sector explains about 37.6% of price moves in the current state."
            },
            "company_share": {
              "median": 0.42525232402700364,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "42.5%",
              "display_range": null,
              "display_text": "42.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 42.5,
              "plain_english": "Company-specific explains about 42.5% of price moves in the current state."
            }
          },
          "summary": "Sep: More mixed, though company-driven still has the largest share."
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
            "median": 0.41371572372126036,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "41.4%",
            "display_range": null,
            "display_text": "41.4%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
            "kind": "share_pct",
            "value_pct": 41.4,
            "plain_english": "Company-specific explains about 41.4% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.36581132735847177,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "36.6%",
              "display_range": null,
              "display_text": "36.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 36.6,
              "plain_english": "Market explains about 36.6% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.22047294892026786,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "22.0%",
              "display_range": null,
              "display_text": "22.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 22.0,
              "plain_english": "Sector explains about 22.0% of price moves in the current state."
            },
            "company_share": {
              "median": 0.41371572372126036,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "41.4%",
              "display_range": null,
              "display_text": "41.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 41.4,
              "plain_english": "Company-specific explains about 41.4% of price moves in the current state."
            }
          },
          "summary": "Oct: More mixed, though company-driven still has the largest share."
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
            "median": 0.4815424507819696,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "48.2%",
            "display_range": null,
            "display_text": "48.2%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
            "kind": "share_pct",
            "value_pct": 48.2,
            "plain_english": "Market explains about 48.2% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.4815424507819696,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "48.2%",
              "display_range": null,
              "display_text": "48.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 48.2,
              "plain_english": "Market explains about 48.2% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.11488423147705379,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "11.5%",
              "display_range": null,
              "display_text": "11.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 11.5,
              "plain_english": "Sector explains about 11.5% of price moves in the current state."
            },
            "company_share": {
              "median": 0.4035733177409765,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "40.4%",
              "display_range": null,
              "display_text": "40.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 40.4,
              "plain_english": "Company-specific explains about 40.4% of price moves in the current state."
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
          "dominant_driver": "sector",
          "dominant_driver_label": "Sector",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.45085519029993254,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "45.1%",
            "display_range": null,
            "display_text": "45.1%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
            "kind": "share_pct",
            "value_pct": 45.1,
            "plain_english": "Sector explains about 45.1% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.37409050753946577,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "37.4%",
              "display_range": null,
              "display_text": "37.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
              "kind": "share_pct",
              "value_pct": 37.4,
              "plain_english": "Market explains about 37.4% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.45085519029993254,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "45.1%",
              "display_range": null,
              "display_text": "45.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
              "kind": "share_pct",
              "value_pct": 45.1,
              "plain_english": "Sector explains about 45.1% of price moves in the current state."
            },
            "company_share": {
              "median": 0.17505430216060164,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "17.5%",
              "display_range": null,
              "display_text": "17.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
              "kind": "share_pct",
              "value_pct": 17.5,
              "plain_english": "Company-specific explains about 17.5% of price moves in the current state."
            }
          },
          "summary": "Dec: Mostly sector-driven."
        },
        {
          "month_key": "2026-01",
          "month_label": "January 2026",
          "month_short_label": "Jan",
          "period_label": "2026-01-02 to 2026-01-30",
          "n_obs": 21,
          "partial_month": true,
          "dominant_driver": "sector",
          "dominant_driver_label": "Sector",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.34214863152507524,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "34.2%",
            "display_range": null,
            "display_text": "34.2%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
            "kind": "share_pct",
            "value_pct": 34.2,
            "plain_english": "Sector explains about 34.2% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.32301133692272965,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "32.3%",
              "display_range": null,
              "display_text": "32.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 32.3,
              "plain_english": "Market explains about 32.3% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.34214863152507524,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "34.2%",
              "display_range": null,
              "display_text": "34.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 34.2,
              "plain_english": "Sector explains about 34.2% of price moves in the current state."
            },
            "company_share": {
              "median": 0.334840031552195,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "33.5%",
              "display_range": null,
              "display_text": "33.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 33.5,
              "plain_english": "Company-specific explains about 33.5% of price moves in the current state."
            }
          },
          "summary": "Jan: Much more balanced across company, sector, and market factors."
        },
        {
          "month_key": "2026-02",
          "month_label": "February 2026",
          "month_short_label": "Feb",
          "period_label": "2026-02-02 to 2026-02-27",
          "n_obs": 17,
          "partial_month": false,
          "dominant_driver": "sector",
          "dominant_driver_label": "Sector",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.49020416547716783,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "49.0%",
            "display_range": null,
            "display_text": "49.0%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
            "kind": "share_pct",
            "value_pct": 49.0,
            "plain_english": "Sector explains about 49.0% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.15999497601130064,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "16.0%",
              "display_range": null,
              "display_text": "16.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
              "kind": "share_pct",
              "value_pct": 16.0,
              "plain_english": "Market explains about 16.0% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.49020416547716783,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "49.0%",
              "display_range": null,
              "display_text": "49.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
              "kind": "share_pct",
              "value_pct": 49.0,
              "plain_english": "Sector explains about 49.0% of price moves in the current state."
            },
            "company_share": {
              "median": 0.34980085851153164,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "35.0%",
              "display_range": null,
              "display_text": "35.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
              "kind": "share_pct",
              "value_pct": 35.0,
              "plain_english": "Company-specific explains about 35.0% of price moves in the current state."
            }
          },
          "summary": "Feb: Mostly sector-driven."
        },
        {
          "month_key": "2026-03",
          "month_label": "March 2026",
          "month_short_label": "Mar",
          "period_label": "2026-03-02 to 2026-03-31",
          "n_obs": 22,
          "partial_month": false,
          "dominant_driver": "sector",
          "dominant_driver_label": "Sector",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.4432251955411244,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "44.3%",
            "display_range": null,
            "display_text": "44.3%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
            "kind": "share_pct",
            "value_pct": 44.3,
            "plain_english": "Sector explains about 44.3% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.12059205213231389,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "12.1%",
              "display_range": null,
              "display_text": "12.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 12.1,
              "plain_english": "Market explains about 12.1% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.4432251955411244,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "44.3%",
              "display_range": null,
              "display_text": "44.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 44.3,
              "plain_english": "Sector explains about 44.3% of price moves in the current state."
            },
            "company_share": {
              "median": 0.43618275232656184,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "43.6%",
              "display_range": null,
              "display_text": "43.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 43.6,
              "plain_english": "Company-specific explains about 43.6% of price moves in the current state."
            }
          },
          "summary": "Mar: More mixed, though sector-driven still has the largest share."
        },
        {
          "month_key": "2026-04",
          "month_label": "April 2026",
          "month_short_label": "Apr",
          "period_label": "2026-04-01 to 2026-04-13",
          "n_obs": 6,
          "partial_month": false,
          "dominant_driver": "sector",
          "dominant_driver_label": "Sector",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.580318424922653,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "58.0%",
            "display_range": null,
            "display_text": "58.0%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 6 trading days.",
            "kind": "share_pct",
            "value_pct": 58.0,
            "plain_english": "Sector explains about 58.0% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.4134025944466529,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "41.3%",
              "display_range": null,
              "display_text": "41.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 6 trading days.",
              "kind": "share_pct",
              "value_pct": 41.3,
              "plain_english": "Market explains about 41.3% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.580318424922653,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "58.0%",
              "display_range": null,
              "display_text": "58.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 6 trading days.",
              "kind": "share_pct",
              "value_pct": 58.0,
              "plain_english": "Sector explains about 58.0% of price moves in the current state."
            },
            "company_share": {
              "median": 0.006278980630694007,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "0.6%",
              "display_range": null,
              "display_text": "0.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 6 trading days.",
              "kind": "share_pct",
              "value_pct": 0.6,
              "plain_english": "Company-specific explains about 0.6% of price moves in the current state."
            }
          },
          "summary": "Apr: Mostly sector-driven, though based on only 6 trading days."
        }
      ],
      "regimes": [
        {
          "id": 0,
          "label": "Low Volatility",
          "pct_time": 0.5020080321285141,
          "expected_duration_days": 11.363636363636363,
          "current_probability": 1.0,
          "n_days_effective": 125.0,
          "volatility": {
            "median": 0.015105905285132167,
            "low": 0.015105905285132167,
            "high": 0.015105905285132167
          },
          "volatility_label": "Low Volatility",
          "current_probability_display": null
        },
        {
          "id": 1,
          "label": "High Volatility",
          "pct_time": 0.4979919678714859,
          "expected_duration_days": 11.272727272727273,
          "current_probability": 0.0,
          "n_days_effective": 124.0,
          "volatility": {
            "median": 0.02681186422793405,
            "low": 0.02681186422793405,
            "high": 0.02681186422793405
          },
          "volatility_label": "High Volatility",
          "current_probability_display": 0.0
        }
      ],
      "transitions": {
        "mean": [
          [
            0.9193548387096774,
            0.08064516129032258
          ],
          [
            0.08870967741935484,
            0.9112903225806451
          ]
        ],
        "low": [],
        "high": [],
        "counts": [
          [
            114.0,
            10.0
          ],
          [
            11.0,
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
        "market_link_display": "-1.16",
        "sector_link_display": "1.63",
        "market_link_explainer": "Moderate market link. A 1% market move has lined up with about a 1.16% stock move in the opposite direction in this state. This is a point estimate from 251 trading days.",
        "sector_link_explainer": "High sector link. A 1% sector move has lined up with about a 1.63% stock move in the same direction in this state. This is a point estimate from 251 trading days.",
        "stock_persistence_display": "-1.34",
        "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
        "history_limited_note": "Read is based on 251 trading days versus the 252-day target."
      },
      "current_summary": {
        "regime_label": "Low Volatility",
        "dominant_driver": "sector",
        "dominant_driver_label": "Sector",
        "driver_share_pct": 39.5,
        "driver_share_display": "39.5%",
        "confidence_label": "High, limited history",
        "confidence_pct": 100.0,
        "display_confidence_pct": null,
        "confidence_note": "Based on 251 trading days relative to the 252-day target.",
        "history_days": 251,
        "history_limited": true,
        "volatility_label": "Low Volatility",
        "lead_signal_text": "No stable lead signal.",
        "state_term": "state",
        "stay_probability": 0.9193548387096774,
        "effective_days": 125.0,
        "persistence_note": "This state looks more persistent, with a typical run length of about 11.4 days.",
        "expected_duration_days": 11.4
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
          "current_probability": 1.0,
          "n_days_effective": 125.0,
          "volatility": {
            "median": 0.015105905285132167,
            "low": 0.015105905285132167,
            "high": 0.015105905285132167
          },
          "volatility_label": "Low Volatility"
        },
        {
          "id": 1,
          "label": "High Volatility",
          "pct_time": 0.4979919678714859,
          "expected_duration_days": 11.272727272727273,
          "current_probability": 0.0,
          "n_days_effective": 124.0,
          "volatility": {
            "median": 0.02681186422793405,
            "low": 0.02681186422793405,
            "high": 0.02681186422793405
          },
          "volatility_label": "High Volatility"
        }
      ],
      "transitions": [
        [
          0.9193548387096774,
          0.08064516129032258
        ],
        [
          0.08870967741935484,
          0.9112903225806451
        ]
      ],
      "transition_intervals": {
        "mean": [
          [
            0.9193548387096774,
            0.08064516129032258
          ],
          [
            0.08870967741935484,
            0.9112903225806451
          ]
        ],
        "low": [],
        "high": [],
        "counts": [
          [
            114.0,
            10.0
          ],
          [
            11.0,
            113.0
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
        "text": "Liquidity score: 98.9 — Strong",
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
        "text": "Execution: balanced",
        "bg": "bg-emerald-500/20",
        "textColor": "text-emerald-400"
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
    "liq_subtitle": "Liquidity looks balanced for the stock’s size, supported by slightly better six-month peer standing but held back by lighter one-day average volume.",
    "market_comparison_title": "How You Compare to the Market",
    "market_comparison_subtitle": "Context relative to market, sector, and peer medians.",
    "perf_title": "Stock Performance",
    "perf_subtitle": "Recent performance is firm, with the stock up 2.0% over one month while peers fell 4.6% and the market fell 0.8%.",
    "perf_insight": "The return backdrop is stronger than the main comparison groups, with one-month performance at +2.0% compared with peers at -4.6% and the market at -0.8%. That matters because the tape is entering trading from a position of relative strength even as sector moves still explain 39.5% of activity.",
    "drivers_title": "What Moves Your Stock Price?",
    "drivers_subtitle": "Sector moves are the main current driver, accounting for 39.5% of trading and keeping the stock tied to the broader group.",
    "drivers_strip": [
      {
        "title": "Current Driver (Last 5 Days)",
        "text": "Over the last 5 trading days, moves are mainly sector-driven, accounting for about 39.5% of price changes. Other influences are market 32.2%, and company-specific 28.3%."
      },
      {
        "title": "Driver Mix",
        "text": "Based on the last 5 trading days, current mix is market 32.2%, sector 39.5%, and company-specific 28.3%."
      },
      {
        "title": "Monthly Trend",
        "text": "The driver mix has been consistently sector-driven across Feb to Apr."
      }
    ],
    "drivers_pie_title": "Current Driver Mix (Last 5 Days)",
    "drivers_pie_note": "Based on the last 5 trading days, current split is market 32.2%, sector 39.5%, and company-specific 28.3%.",
    "lead_lag_title": "",
    "lead_lag_note": "",
    "rolling_title": "Monthly Driver Shift",
    "rolling_latest_label": "Latest: {period}",
    "rolling_note": "Each bar shows the monthly split between market-, sector-, and company-driven moves.",
    "drivers_bottom_line": "The tape is being shaped more by the sector than by company-specific moves, with sector factors explaining 39.5% of activity. That matters because broader group direction remains a meaningful influence on trading conditions.",
    "drivers_wtd_title": "Key Reads",
    "drivers_wtd_list": [
      "Main driver now: sector moves are leading, at 39.5% of recent price action.",
      "Monthly change: the pattern stayed sector-led from February into April, with March more balanced but still led by the sector."
    ],
    "regime_title": "Market State",
    "regime_subtitle": "Trading conditions look orderly, with a 1 tick spread and bid depth close to ask depth on the displayed book.",
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
    "exec_check_subtitle": "Combines the final continuous-session displayed book before close, trade-size stress tests based on Apr 14, 2025 to Apr 13, 2026 (238 trading days • 3,573,321 trades), large sell-side orders observed today, and intraday spread/depth during the continuous trading session.",
    "order_book_title": "Order Book Depth (Available Liquidity)",
    "order_book_note": "Depth shown is based on top 10 bid and top 10 ask levels.",
    "peer_capacity_title": "Peer Capacity Context",
    "peer_capacity_note": "Immediate displayed depth broadly matches the stronger monthly liquidity read.",
    "impact_summary_title": "Estimated Price Impact (Sell Orders)",
    "impact_summary_subtitle": "Approximate price impact (%) for sell orders.",
    "exec_check_insight": "The displayed book is balanced, with a 1 tick spread and top-10 bid depth at 0.92x of ask depth. That matters because immediate execution conditions broadly match the steadier six-month liquidity picture.",
    "trader_composition_title": "Who's Trading Your Stock?",
    "trader_composition_subtitle": "Shows whether trading is mostly retail-like, institution-like, mixed, or unclassified.",
    "trader_retail_threshold": "Retail-like flow",
    "trader_mixed_threshold": "Mixed flow",
    "trader_instit_threshold": "Institution-like flow",
    "peer_trader_title": "Peer Comparison: Trader Mix",
    "peer_trader_subtitle": "How the trader mix compares with peers.",
    "price_moving_title": "Which Trades Move the Price?",
    "price_moving_subtitle": "Price-moving trades are 15.3% of total trades.",
    "intraday_title": "When Does Trading Happen?",
    "intraday_subtitle": "Displayed liquidity looks orderly through the session, with a 1 tick spread and bid depth close to ask depth.",
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
    "intraday_insight": "Immediate trading conditions look balanced, with a 1 tick spread and top-10 bid depth at 0.92x of ask depth. That matters because the screen still shows usable liquidity even with one-day average volume running 40.3% below the one-month average.",
    "short_title": "Short Selling & Lending",
    "short_subtitle": "Short activity is not a defining feature of the current trading picture.",
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
    "exec_subtitle": "Liquidity is balanced overall, with six-month peer standing slightly ahead of the group while near-term flow is lighter and sector moves still shape the tape.",
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
        "value": "98.9/100",
        "sub": "Peer median 97.1 (+1.8 pts)",
        "interp": {
          "text": "Strong",
          "cls": "interpretation-good",
          "icon": "◆"
        }
      },
      {
        "title": "Volume vs Peers",
        "value": "HK$2.1B",
        "sub": "Peer median HK$512.8M",
        "interp": {
          "text": "Strong",
          "cls": "interpretation-good",
          "icon": "◆"
        }
      },
      {
        "title": "Spread",
        "value": "0.07%",
        "sub": "1.12 ticks; peers 0.11%",
        "interp": {
          "text": "Tighter",
          "cls": "interpretation-good",
          "icon": "◆"
        }
      }
    ],
    "liq_insight": "Liquidity is balanced rather than weak, with a six-month liquidity score of 98.9 sitting 1.8 points above the peer median of 97.1. Recent flow is lighter, with one-day average volume down 40.3% from the one-month average, which makes current trading support thinner than the broader trend. Even so, a 1 tick spread and top-10 bid depth at 0.92x of ask depth show the displayed book remains orderly.",
    "perf_badge": "Context",
    "exec_check_tiles": [
      {
        "title": "Mid Price",
        "value": "87.575",
        "note": "final continuous-session displayed book before close",
        "color": "text-white"
      },
      {
        "title": "Spread",
        "value": "0.06%",
        "note": "1.00 ticks",
        "color": "text-slate-300"
      },
      {
        "title": "Depth",
        "value": "0.92x",
        "note": "Bid depth / ask depth on displayed top-10 levels",
        "color": "text-slate-300"
      }
    ],
    "impact_summary_cards": [
      {
        "title": "~S$100K sell",
        "text": "Estimated impact ~-0.03% with 100.0% fill.",
        "cls": "ok"
      },
      {
        "title": "S$1.0M sell",
        "text": "Estimated impact ~-0.03% with 100.0% fill.",
        "cls": "warn"
      },
      {
        "title": "S$2.5M sell",
        "text": "Estimated impact ~-0.06% with 100.0% fill.",
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
        "value": "99",
        "suffix": "/100",
        "bar_pct": 99,
        "color_value": "text-emerald-400",
        "color_bar": "bg-emerald-500",
        "subtext": "Rank 30/2576",
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
        "value": "0.07",
        "suffix": "%",
        "bar_pct": 1,
        "color_value": "text-emerald-400",
        "color_bar": "bg-emerald-500",
        "subtext": "0.07% • 1.12 ticks vs peers 0.11%",
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
        "value": "2.1B",
        "value_prefix": "HK$",
        "suffix": "",
        "bar_pct": 60,
        "color_value": "text-emerald-400",
        "color_bar": "bg-emerald-500",
        "subtext": "Peer median HK$512.8M",
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
        "value": "39.5",
        "suffix": "sector",
        "bar_pct": 40,
        "color_value": "text-amber-400",
        "color_bar": "bg-amber-500",
        "subtext": "Market 32.2% • Company 28.3%",
        "interpretation": {
          "text": "Sector",
          "cls": "interpretation-neutral",
          "icon": "◆"
        }
      }
    ],
    "exec_takeaways": [
      "Liquidity is balanced for the stock’s size, with a six-month liquidity score of 98.9 compared with a peer median of 97.1. That keeps peer-relative access slightly ahead of the group without pointing to an unusually strong market.",
      "Recent flow is lighter, with one-day average volume down 40.3% from the one-month average. That matters because day-to-day trading support is thinner than the broader monthly picture.",
      "The tape remains orderly, with a 1 tick spread and top-10 bid depth at 0.92x of ask depth, while sector factors account for 39.5% of activity. That matters because execution conditions are stable even as broader group moves remain a key driver."
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
      "overall": "6M liquidity is strong: score 98.9 vs peer median 97.1 (+1.8 pts). 1D average volume down -40.3% from 1M. Recent flow does not show a clear deterioration from the monthly baseline.",
      "strengths": [
        "6M score 98.9 vs peer median 97.1 (+1.8 pts)."
      ],
      "concerns": [
        "1D average volume down -40.3% from 1M."
      ],
      "peer_context": "Primary-period score gap vs peers: +1.8 pts."
    },
    "market_comparison": {
      "returns": {
        "insight": "6M return is 23.3%, better than market, sector, and peers, which suggests stronger price performance than comparable names.",
        "vs_market": "Better than market: 23.3% vs market 11.0%.",
        "vs_sector": "Better than sector: 23.3% vs sector -5.2%.",
        "vs_peers": "Better than peers: 23.3% vs peers 4.3%."
      },
      "adv": {
        "insight": "ADV is HK$2.1B, better than market, sector, and peers, which supports stronger day-to-day trading size than comparable names.",
        "vs_market": "Better than market: HK$2.1B vs market HK$219.4K.",
        "vs_sector": "Better than sector: HK$2.1B vs sector HK$33.9M.",
        "vs_peers": "Better than peers: HK$2.1B vs peers HK$512.8M."
      },
      "spread": {
        "insight": "Spread is 0.07%, better than market, sector, and peers, which keeps trading costs more competitive than comparable names.",
        "vs_market": "Better than market: 0.07% vs market 2.67%.",
        "vs_sector": "Better than sector: 0.07% vs sector 0.22%.",
        "vs_peers": "Better than peers: 0.07% vs peers 0.11%."
      },
      "turnover_ratio": {
        "insight": "Turnover ratio is 0.26%, better than market, but worse than sector and peers, which shows turnover is mixed across comparison groups.",
        "vs_market": "Better than market: 0.26% vs market 0.09%.",
        "vs_sector": "Worse than sector: 0.26% vs sector 0.30%.",
        "vs_peers": "Worse than peers: 0.26% vs peers 0.74%."
      },
      "volatility": {
        "insight": "Volatility is 36.86%, better than market, which suggests day-to-day price swings are more contained than comparable names.",
        "vs_market": "Better than market: 36.86% vs market 59.79%.",
        "vs_sector": "In line with sector: 36.86% vs sector 35.63%.",
        "vs_peers": "In line with peers: 36.86% vs peers 36.09%."
      },
      "trades": {
        "insight": "Trades is 14042, better than market, sector, and peers, which supports more fully reflective of day-to-day access day-to-day activity than comparable names.",
        "vs_market": "Better than market: 14042 vs market 21.",
        "vs_sector": "Better than sector: 14042 vs sector 1204.",
        "vs_peers": "Better than peers: 14042 vs peers 9820."
      },
      "amihud": {
        "insight": "Price impact is 7.12e-12, better than market, sector, and peers, which suggests trades move price less than comparable names.",
        "vs_market": "Better than market: 7.12e-12 vs market 4.63e-08.",
        "vs_sector": "Better than sector: 7.12e-12 vs sector 4.16e-10.",
        "vs_peers": "Better than peers: 7.12e-12 vs peers 3.01e-11."
      }
    },
    "performance": {
      "overall": "Recent returns are stronger than the main comparison groups, with the stock up 2.0% over one month while peers fell 4.6% and the market fell 0.8%. Liquidity gives a mixed confirmation to that move because the six-month liquidity score is 98.9, or 1.8 points above the peer median, but one-day average volume is 40.3% below the one-month average.",
      "conclusion": "The move looks sector-linked with mixed liquidity confirmation."
    },
    "drivers": {
      "overall": "Sector moves are leading the stock now, with the sector driving 39.5% of recent price action. That matters because the tape is being set more by the group backdrop than by company-specific developments, even as the stock has outperformed with a 1M return of +2.0% compared with peers at -4.6% and the market at -0.8%.",
      "beta": "The current pattern looks real but not one-sided, because sector influence is the largest share while recent average volume is 40.3% below the 1M average. That leaves trading conditions mixed, with price direction still tied mainly to the sector backdrop.",
      "rolling_change": "Feb: Mostly sector-driven. | Mar: More mixed, though sector-driven still has the largest share. | Apr: Mostly sector-driven, though based on only 6 trading days."
    },
    "regime": {
      "overall": "Low volatility points to a steadier trading backdrop, and the 1 tick spread supports that even as recent average volume is 40.3% below the 1M average. That matters because price conditions look orderly, but day-to-day flow is not especially full.",
      "current": "Current market state is Low Volatility. The market has been in this state about 50.2% of the time. Based on 251 trading days relative to the 252-day target.",
      "transitions": "This state looks reasonably stable rather than short-lived, with a typical run length of about 11.4 days.",
      "trading_implications": "Trading conditions look broadly steady, with a 1 tick spread and top-10 bid depth at 0.92x of ask depth, although the drop in recent average volume means liquidity can still feel thinner on the day."
    },
    "execution": {
      "overall": "top-10 bid depth is 0.92x ask depth; spread is 1 tick. Immediate displayed depth broadly matches the stronger monthly liquidity read.",
      "concern": "The main watchpoint is a slightly lighter bid side, with top-10 bid depth at 0.92x of ask depth, while 1D average volume is down 40.3% from the 1M average. That matters because a quieter session can make the buy side feel thinner even when the spread stays tight.",
      "peer_context": "The book broadly supports the broader picture because current depth is balanced on screen and the six-month liquidity score of 98.9 sits 1.8 points above the peer median of 97.1. That matters because peer-relative liquidity still looks solid even with lighter recent volume."
    },
    "trader_composition": {
      "overall": "By trade count and value, flow looks mainly institution-like.",
      "retail_heavy": "The observed mix is not retail-heavy. Retail-like trades are only 1.2% of count and 0.4% of value, compared with institution-like flow at 68.4% and 78.9%, which keeps the headline read firmly institutional.",
      "institutional_gap": "The institutional read is clear, but it is not fully clean because 25.2% of trade count is ambiguous or unclear. That matters because a meaningful share of activity sits outside the identified buyer base.",
      "peer_comparison": "The mix stands out as institution-like rather than retail-driven, with both count and value pointing the same way. That makes the flow profile look more durable relative to a peer set where the comparison is a key reference point."
    },
    "price_moving": {
      "overall": "Price-moving trades are a minority of activity at 15.3% of total trades. That suggests most trading is not aggressively shifting the price. The signal is directionally useful but mixed because 25.2% of trade count is ambiguous or unclear. That matters because the price impact read is less clean than the headline trader mix. The cleaner takeaway is that institution-like flow dominates both count and value, while price-moving activity remains a smaller share of total trades.",
      "interpretation": "",
      "asymmetry": ""
    },
    "short_selling": {
      "overall": "Short-selling data is unavailable for this report.",
      "level": "N/A",
      "correlation": "N/A",
      "trend": "There is no sign that short activity is changing the picture in a meaningful way. Recent average volume is down 40.3% from the 1M average, but the stock still returned 2.0% over 1M compared with peers at -4.6%, so the broader tape remains more defined by relative price strength than by short pressure.",
      "peaks": "N/A"
    },
    "intraday": {
      "overall": "Liquidity appears most reliable in the continuous session, which carries 64.7% of activity compared with 6.9% at the open and 17.1% at the close. That matters because trading interest is present through the day rather than being confined to the auction windows.",
      "hhi_interpretation": "Ambiguous or unclear flow is 25.2% of trade count, so the read is not fully clean.",
      "best_times": "The continuous session is the clearest source of usable liquidity, given its 64.7% share of activity. That makes the middle of the day the most representative picture of underlying flow.",
      "peer_ranking": "The intraday pattern looks constructive because activity is spread through the session and anchored by the continuous market. Relative to peers, that supports a credible day-to-day liquidity profile."
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
        "1299",
        "2318",
        "2628",
        "2328",
        "2601",
        "1336",
        "1339",
        "966",
        "6060"
      ],
      "scores": [
        98.87422360248446,
        99.49534161490683,
        99.37888198757764,
        96.07919254658384,
        98.29192546583852,
        98.13664596273291,
        95.2251552795031,
        95.96273291925466,
        95.61335403726709
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
        2106529895.55,
        2325332997.6,
        1704905641.23,
        490083553.85,
        535466823.09000003,
        539941446.0,
        272037603.38,
        210541952.0,
        162242990.5
      ],
      "total": 2576
    },
    "market_comparison": {
      "sector_name": "Insurance",
      "sector_count": 21,
      "market_count": 2576,
      "company": {
        "volatility": 0.3685963113204544,
        "adv": 2106529895.55,
        "spread_pct": 0.0006855428586916405,
        "turnover_ratio": 0.0026073999556026997,
        "amihud": 7.122807834281049e-12,
        "trades": 14042.5
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
          "mean": 56542891.208101414,
          "median": 219410.125,
          "min": 0.0,
          "max": 11530530000.0,
          "p5": 0.0,
          "p95": 214127775.0,
          "count": 2576
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.042004487177423104,
          "median": 0.026651223195499653,
          "min": 0.000558678699550006,
          "max": 0.49098715795419084,
          "p5": 0.001390744598616606,
          "p95": 0.13470487233538153,
          "count": 2575
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.003659746886055854,
          "median": 0.000864143138348958,
          "min": 0.0,
          "max": 0.17601894736842105,
          "p5": 0.0,
          "p95": 0.014489803074043354,
          "count": 2553
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 6.470128402567895e-07,
          "median": 4.630396367913572e-08,
          "min": 0.0,
          "max": 4.7054394880481924e-05,
          "p5": 5.0443531668434034e-11,
          "p95": 3.6564790403449536e-06,
          "count": 2574
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 1037.5366847826087,
          "median": 21.0,
          "min": 0.0,
          "max": 93269.5,
          "p5": 0.0,
          "p95": 5730.375,
          "count": 2576
        }
      },
      "sector": {
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.4312214588775826,
          "median": 0.35628871258488604,
          "min": 0.2184376456206474,
          "max": 1.7718045486705873,
          "p5": 0.23085045282299188,
          "p95": 0.6883592835320167,
          "count": 21
        },
        "adv": {
          "direction": "higher_is_better",
          "mean": 404363853.93562084,
          "median": 33925103.0,
          "min": 0.0,
          "max": 2325332997.6,
          "p5": 54080.0,
          "p95": 2106529895.55,
          "count": 21
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.008451158330572837,
          "median": 0.0021516238350374234,
          "min": 0.0006855428586916405,
          "max": 0.046039005437009034,
          "p5": 0.0008309453103125118,
          "p95": 0.04255319148936175,
          "count": 21
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.0039028924565726853,
          "median": 0.002977763933093107,
          "min": 0.0,
          "max": 0.010603968100598278,
          "p5": 5.114608816183419e-07,
          "p95": 0.010143194879377005,
          "count": 21
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 2.3645224298529327e-08,
          "median": 4.1606869511540676e-10,
          "min": 4.883409595552578e-12,
          "max": 1.7076502732240377e-07,
          "p5": 7.122807834281049e-12,
          "p95": 1.4333218667584128e-07,
          "count": 21
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 5076.738095238095,
          "median": 1203.5,
          "min": 0.0,
          "max": 16964.5,
          "p5": 3.5,
          "p95": 16910.0,
          "count": 21
        }
      },
      "peers": {
        "adv": {
          "direction": "higher_is_better",
          "mean": 780069125.9562501,
          "median": 512775188.47,
          "min": 162242990.5,
          "max": 2325332997.6,
          "p5": 179147627.025,
          "p95": 2108183422.8704996,
          "count": 8
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 10839.9375,
          "median": 9820.0,
          "min": 6170.0,
          "max": 16964.5,
          "p5": 6283.575,
          "p95": 16945.425,
          "count": 8
        },
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.3676931189702136,
          "median": 0.3608821390975261,
          "min": 0.2743643924739824,
          "max": 0.43941475498785504,
          "p5": 0.2897544087657609,
          "p95": 0.43626058549528046,
          "count": 8
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.0012034687874048079,
          "median": 0.0011054140365871594,
          "min": 0.0008309453103125118,
          "max": 0.0020280127681907333,
          "p5": 0.0008409056108409488,
          "p95": 0.0018668007864916802,
          "count": 8
        },
        "spread_ticks": {
          "direction": "neutral",
          "mean": 1.3389542394745744,
          "median": 1.347247426610128,
          "min": 1.0892712356537555,
          "max": 1.5803440561598396,
          "p5": 1.1150688547493928,
          "p95": 1.5570343932048685,
          "count": 3
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 3.9248746957156394e-11,
          "median": 3.0103686872155973e-11,
          "min": 4.883409595552578e-12,
          "max": 8.454515241067818e-11,
          "p5": 6.78603546610845e-12,
          "p95": 8.339769171734362e-11,
          "count": 8
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.007559682122499505,
          "median": 0.007421600858403567,
          "min": 0.004853047153888867,
          "max": 0.010603968100598278,
          "p5": 0.005018104681558677,
          "p95": 0.010442697473170831,
          "count": 8
        }
      }
    },
    "returns": [
      {
        "horizon": "1M",
        "stock": 0.02043199065966128,
        "market": -0.007811259659372016,
        "sector": -0.025075823463395097,
        "peers": -0.04568550494966461
      },
      {
        "horizon": "3M",
        "stock": 0.01568855316676321,
        "market": 0.058957371688082016,
        "sector": -0.1405102130267416,
        "peers": -0.1799476513506988
      },
      {
        "horizon": "6M",
        "stock": 0.23272214386459944,
        "market": 0.10999472576257396,
        "sector": -0.05168246693843748,
        "peers": 0.04330716022722392
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
      "share_market": 0.321679077920109,
      "share_sector": 0.3951752574837606,
      "share_idio": 0.28314566459613044,
      "beta_market": -1.1604166111628564,
      "beta_sector": 1.6255417744312808,
      "driver_model": {
        "valid": true,
        "model_method": "ols_with_volatility_regimes",
        "estimation_window_days": 251,
        "reporting_window_days": 63,
        "available_history_days": 251,
        "n_regimes": 2,
        "current_regime": 0,
        "current_regime_label": "Low Volatility",
        "current_regime_probability": 1.0,
        "current_driver_mix": {
          "market_share": {
            "median": 0.321679077920109,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "32.2%",
            "display_range": null,
            "display_text": "32.2%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "share_pct",
            "value_pct": 32.2,
            "plain_english": "Market explains about 32.2% of price moves in the current state."
          },
          "sector_share": {
            "median": 0.3951752574837606,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "39.5%",
            "display_range": null,
            "display_text": "39.5%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "share_pct",
            "value_pct": 39.5,
            "plain_english": "Sector explains about 39.5% of price moves in the current state."
          },
          "company_share": {
            "median": 0.28314566459613044,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "28.3%",
            "display_range": null,
            "display_text": "28.3%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "share_pct",
            "value_pct": 28.3,
            "plain_english": "Company-specific explains about 28.3% of price moves in the current state."
          },
          "basis": "current_state"
        },
        "current_sensitivities": {
          "beta_market": {
            "median": -1.1604166111628564,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "-1.16",
            "display_range": null,
            "display_text": "-1.16",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "beta",
            "strength_label": "Moderate",
            "plain_english": "Moderate market link: a 1% market move has lined up with about a 1.16% stock move in the opposite direction in this state.",
            "value_num": -1.16
          },
          "beta_stock_lag": {
            "median": -1.3419991981321466,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "-1.34",
            "display_range": null,
            "display_text": "-1.34",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "lag_beta",
            "value_num": -1.34
          },
          "beta_sector": {
            "median": 1.6255417744312808,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "1.63",
            "display_range": null,
            "display_text": "1.63",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "beta",
            "strength_label": "High",
            "plain_english": "High sector link: a 1% sector move has lined up with about a 1.63% stock move in the same direction in this state.",
            "value_num": 1.63
          },
          "beta_market_lag": {
            "median": 0.9720875387882666,
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
            "median": 0.47090252272058414,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "0.47",
            "display_range": null,
            "display_text": "0.47",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "lag_beta",
            "value_num": 0.47
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
            "dominant_driver": "sector",
            "dominant_driver_label": "Sector",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.7261711514391566,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "72.6%",
              "display_range": null,
              "display_text": "72.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
              "kind": "share_pct",
              "value_pct": 72.6,
              "plain_english": "Sector explains about 72.6% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.22258119830379813,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "22.3%",
                "display_range": null,
                "display_text": "22.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
                "kind": "share_pct",
                "value_pct": 22.3,
                "plain_english": "Market explains about 22.3% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.7261711514391566,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "72.6%",
                "display_range": null,
                "display_text": "72.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
                "kind": "share_pct",
                "value_pct": 72.6,
                "plain_english": "Sector explains about 72.6% of price moves in the current state."
              },
              "company_share": {
                "median": 0.05124765025704525,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "5.1%",
                "display_range": null,
                "display_text": "5.1%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
                "kind": "share_pct",
                "value_pct": 5.1,
                "plain_english": "Company-specific explains about 5.1% of price moves in the current state."
              }
            },
            "summary": "Mar: Still clearly sector-driven, though based on only 5 trading days."
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
              "median": 0.39790876846464956,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "39.8%",
              "display_range": null,
              "display_text": "39.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
              "kind": "share_pct",
              "value_pct": 39.8,
              "plain_english": "Market explains about 39.8% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.39790876846464956,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "39.8%",
                "display_range": null,
                "display_text": "39.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
                "kind": "share_pct",
                "value_pct": 39.8,
                "plain_english": "Market explains about 39.8% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.35990827515839346,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "36.0%",
                "display_range": null,
                "display_text": "36.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
                "kind": "share_pct",
                "value_pct": 36.0,
                "plain_english": "Sector explains about 36.0% of price moves in the current state."
              },
              "company_share": {
                "median": 0.24218295637695705,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "24.2%",
                "display_range": null,
                "display_text": "24.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
                "kind": "share_pct",
                "value_pct": 24.2,
                "plain_english": "Company-specific explains about 24.2% of price moves in the current state."
              }
            },
            "summary": "Apr: More mixed, though market-driven still has the largest share."
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
              "median": 0.43475807077944445,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "43.5%",
              "display_range": null,
              "display_text": "43.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 43.5,
              "plain_english": "Company-specific explains about 43.5% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.3418042133012487,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "34.2%",
                "display_range": null,
                "display_text": "34.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 34.2,
                "plain_english": "Market explains about 34.2% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.2234377159193067,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "22.3%",
                "display_range": null,
                "display_text": "22.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 22.3,
                "plain_english": "Sector explains about 22.3% of price moves in the current state."
              },
              "company_share": {
                "median": 0.43475807077944445,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "43.5%",
                "display_range": null,
                "display_text": "43.5%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 43.5,
                "plain_english": "Company-specific explains about 43.5% of price moves in the current state."
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
            "dominant_driver": "company",
            "dominant_driver_label": "Company-specific",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.4499101746759693,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "45.0%",
              "display_range": null,
              "display_text": "45.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 45.0,
              "plain_english": "Company-specific explains about 45.0% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.41084732800760765,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "41.1%",
                "display_range": null,
                "display_text": "41.1%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 41.1,
                "plain_english": "Market explains about 41.1% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.1392424973164231,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "13.9%",
                "display_range": null,
                "display_text": "13.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 13.9,
                "plain_english": "Sector explains about 13.9% of price moves in the current state."
              },
              "company_share": {
                "median": 0.4499101746759693,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "45.0%",
                "display_range": null,
                "display_text": "45.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 45.0,
                "plain_english": "Company-specific explains about 45.0% of price moves in the current state."
              }
            },
            "summary": "Jun: More mixed, though company-driven still has the largest share."
          },
          {
            "month_key": "2025-07",
            "month_label": "July 2025",
            "month_short_label": "Jul",
            "period_label": "2025-07-02 to 2025-07-31",
            "n_obs": 22,
            "partial_month": true,
            "dominant_driver": "company",
            "dominant_driver_label": "Company-specific",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.48457914546259995,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "48.5%",
              "display_range": null,
              "display_text": "48.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 48.5,
              "plain_english": "Company-specific explains about 48.5% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.26427430463345386,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "26.4%",
                "display_range": null,
                "display_text": "26.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 26.4,
                "plain_english": "Market explains about 26.4% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.2511465499039463,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "25.1%",
                "display_range": null,
                "display_text": "25.1%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 25.1,
                "plain_english": "Sector explains about 25.1% of price moves in the current state."
              },
              "company_share": {
                "median": 0.48457914546259995,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "48.5%",
                "display_range": null,
                "display_text": "48.5%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 48.5,
                "plain_english": "Company-specific explains about 48.5% of price moves in the current state."
              }
            },
            "summary": "Jul: Mostly company-driven."
          },
          {
            "month_key": "2025-08",
            "month_label": "August 2025",
            "month_short_label": "Aug",
            "period_label": "2025-08-01 to 2025-08-29",
            "n_obs": 21,
            "partial_month": false,
            "dominant_driver": "market",
            "dominant_driver_label": "Market",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.451871888575332,
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
              "plain_english": "Market explains about 45.2% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.451871888575332,
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
                "plain_english": "Market explains about 45.2% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.27285631905051366,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "27.3%",
                "display_range": null,
                "display_text": "27.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 27.3,
                "plain_english": "Sector explains about 27.3% of price moves in the current state."
              },
              "company_share": {
                "median": 0.27527179237415433,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "27.5%",
                "display_range": null,
                "display_text": "27.5%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 27.5,
                "plain_english": "Company-specific explains about 27.5% of price moves in the current state."
              }
            },
            "summary": "Aug: Mostly market-driven."
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
              "median": 0.42525232402700364,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "42.5%",
              "display_range": null,
              "display_text": "42.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 42.5,
              "plain_english": "Company-specific explains about 42.5% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.19890050656378852,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "19.9%",
                "display_range": null,
                "display_text": "19.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 19.9,
                "plain_english": "Market explains about 19.9% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.37584716940920787,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "37.6%",
                "display_range": null,
                "display_text": "37.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 37.6,
                "plain_english": "Sector explains about 37.6% of price moves in the current state."
              },
              "company_share": {
                "median": 0.42525232402700364,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "42.5%",
                "display_range": null,
                "display_text": "42.5%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 42.5,
                "plain_english": "Company-specific explains about 42.5% of price moves in the current state."
              }
            },
            "summary": "Sep: More mixed, though company-driven still has the largest share."
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
              "median": 0.41371572372126036,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "41.4%",
              "display_range": null,
              "display_text": "41.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 41.4,
              "plain_english": "Company-specific explains about 41.4% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.36581132735847177,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "36.6%",
                "display_range": null,
                "display_text": "36.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 36.6,
                "plain_english": "Market explains about 36.6% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.22047294892026786,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "22.0%",
                "display_range": null,
                "display_text": "22.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 22.0,
                "plain_english": "Sector explains about 22.0% of price moves in the current state."
              },
              "company_share": {
                "median": 0.41371572372126036,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "41.4%",
                "display_range": null,
                "display_text": "41.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 41.4,
                "plain_english": "Company-specific explains about 41.4% of price moves in the current state."
              }
            },
            "summary": "Oct: More mixed, though company-driven still has the largest share."
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
              "median": 0.4815424507819696,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "48.2%",
              "display_range": null,
              "display_text": "48.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 48.2,
              "plain_english": "Market explains about 48.2% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.4815424507819696,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "48.2%",
                "display_range": null,
                "display_text": "48.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 48.2,
                "plain_english": "Market explains about 48.2% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.11488423147705379,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "11.5%",
                "display_range": null,
                "display_text": "11.5%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 11.5,
                "plain_english": "Sector explains about 11.5% of price moves in the current state."
              },
              "company_share": {
                "median": 0.4035733177409765,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "40.4%",
                "display_range": null,
                "display_text": "40.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 40.4,
                "plain_english": "Company-specific explains about 40.4% of price moves in the current state."
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
            "dominant_driver": "sector",
            "dominant_driver_label": "Sector",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.45085519029993254,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "45.1%",
              "display_range": null,
              "display_text": "45.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
              "kind": "share_pct",
              "value_pct": 45.1,
              "plain_english": "Sector explains about 45.1% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.37409050753946577,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "37.4%",
                "display_range": null,
                "display_text": "37.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
                "kind": "share_pct",
                "value_pct": 37.4,
                "plain_english": "Market explains about 37.4% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.45085519029993254,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "45.1%",
                "display_range": null,
                "display_text": "45.1%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
                "kind": "share_pct",
                "value_pct": 45.1,
                "plain_english": "Sector explains about 45.1% of price moves in the current state."
              },
              "company_share": {
                "median": 0.17505430216060164,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "17.5%",
                "display_range": null,
                "display_text": "17.5%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
                "kind": "share_pct",
                "value_pct": 17.5,
                "plain_english": "Company-specific explains about 17.5% of price moves in the current state."
              }
            },
            "summary": "Dec: Mostly sector-driven."
          },
          {
            "month_key": "2026-01",
            "month_label": "January 2026",
            "month_short_label": "Jan",
            "period_label": "2026-01-02 to 2026-01-30",
            "n_obs": 21,
            "partial_month": true,
            "dominant_driver": "sector",
            "dominant_driver_label": "Sector",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.34214863152507524,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "34.2%",
              "display_range": null,
              "display_text": "34.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 34.2,
              "plain_english": "Sector explains about 34.2% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.32301133692272965,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "32.3%",
                "display_range": null,
                "display_text": "32.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 32.3,
                "plain_english": "Market explains about 32.3% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.34214863152507524,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "34.2%",
                "display_range": null,
                "display_text": "34.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 34.2,
                "plain_english": "Sector explains about 34.2% of price moves in the current state."
              },
              "company_share": {
                "median": 0.334840031552195,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "33.5%",
                "display_range": null,
                "display_text": "33.5%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 33.5,
                "plain_english": "Company-specific explains about 33.5% of price moves in the current state."
              }
            },
            "summary": "Jan: Much more balanced across company, sector, and market factors."
          },
          {
            "month_key": "2026-02",
            "month_label": "February 2026",
            "month_short_label": "Feb",
            "period_label": "2026-02-02 to 2026-02-27",
            "n_obs": 17,
            "partial_month": false,
            "dominant_driver": "sector",
            "dominant_driver_label": "Sector",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.49020416547716783,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "49.0%",
              "display_range": null,
              "display_text": "49.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
              "kind": "share_pct",
              "value_pct": 49.0,
              "plain_english": "Sector explains about 49.0% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.15999497601130064,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "16.0%",
                "display_range": null,
                "display_text": "16.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
                "kind": "share_pct",
                "value_pct": 16.0,
                "plain_english": "Market explains about 16.0% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.49020416547716783,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "49.0%",
                "display_range": null,
                "display_text": "49.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
                "kind": "share_pct",
                "value_pct": 49.0,
                "plain_english": "Sector explains about 49.0% of price moves in the current state."
              },
              "company_share": {
                "median": 0.34980085851153164,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "35.0%",
                "display_range": null,
                "display_text": "35.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
                "kind": "share_pct",
                "value_pct": 35.0,
                "plain_english": "Company-specific explains about 35.0% of price moves in the current state."
              }
            },
            "summary": "Feb: Mostly sector-driven."
          },
          {
            "month_key": "2026-03",
            "month_label": "March 2026",
            "month_short_label": "Mar",
            "period_label": "2026-03-02 to 2026-03-31",
            "n_obs": 22,
            "partial_month": false,
            "dominant_driver": "sector",
            "dominant_driver_label": "Sector",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.4432251955411244,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "44.3%",
              "display_range": null,
              "display_text": "44.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 44.3,
              "plain_english": "Sector explains about 44.3% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.12059205213231389,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "12.1%",
                "display_range": null,
                "display_text": "12.1%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 12.1,
                "plain_english": "Market explains about 12.1% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.4432251955411244,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "44.3%",
                "display_range": null,
                "display_text": "44.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 44.3,
                "plain_english": "Sector explains about 44.3% of price moves in the current state."
              },
              "company_share": {
                "median": 0.43618275232656184,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "43.6%",
                "display_range": null,
                "display_text": "43.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 43.6,
                "plain_english": "Company-specific explains about 43.6% of price moves in the current state."
              }
            },
            "summary": "Mar: More mixed, though sector-driven still has the largest share."
          },
          {
            "month_key": "2026-04",
            "month_label": "April 2026",
            "month_short_label": "Apr",
            "period_label": "2026-04-01 to 2026-04-13",
            "n_obs": 6,
            "partial_month": false,
            "dominant_driver": "sector",
            "dominant_driver_label": "Sector",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.580318424922653,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "58.0%",
              "display_range": null,
              "display_text": "58.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 6 trading days.",
              "kind": "share_pct",
              "value_pct": 58.0,
              "plain_english": "Sector explains about 58.0% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.4134025944466529,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "41.3%",
                "display_range": null,
                "display_text": "41.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 6 trading days.",
                "kind": "share_pct",
                "value_pct": 41.3,
                "plain_english": "Market explains about 41.3% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.580318424922653,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "58.0%",
                "display_range": null,
                "display_text": "58.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 6 trading days.",
                "kind": "share_pct",
                "value_pct": 58.0,
                "plain_english": "Sector explains about 58.0% of price moves in the current state."
              },
              "company_share": {
                "median": 0.006278980630694007,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "0.6%",
                "display_range": null,
                "display_text": "0.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 6 trading days.",
                "kind": "share_pct",
                "value_pct": 0.6,
                "plain_english": "Company-specific explains about 0.6% of price moves in the current state."
              }
            },
            "summary": "Apr: Mostly sector-driven, though based on only 6 trading days."
          }
        ],
        "regimes": [
          {
            "id": 0,
            "label": "Low Volatility",
            "pct_time": 0.5020080321285141,
            "expected_duration_days": 11.363636363636363,
            "current_probability": 1.0,
            "n_days_effective": 125.0,
            "volatility": {
              "median": 0.015105905285132167,
              "low": 0.015105905285132167,
              "high": 0.015105905285132167
            },
            "volatility_label": "Low Volatility",
            "current_probability_display": null
          },
          {
            "id": 1,
            "label": "High Volatility",
            "pct_time": 0.4979919678714859,
            "expected_duration_days": 11.272727272727273,
            "current_probability": 0.0,
            "n_days_effective": 124.0,
            "volatility": {
              "median": 0.02681186422793405,
              "low": 0.02681186422793405,
              "high": 0.02681186422793405
            },
            "volatility_label": "High Volatility",
            "current_probability_display": 0.0
          }
        ],
        "transitions": {
          "mean": [
            [
              0.9193548387096774,
              0.08064516129032258
            ],
            [
              0.08870967741935484,
              0.9112903225806451
            ]
          ],
          "low": [],
          "high": [],
          "counts": [
            [
              114.0,
              10.0
            ],
            [
              11.0,
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
          "market_link_display": "-1.16",
          "sector_link_display": "1.63",
          "market_link_explainer": "Moderate market link. A 1% market move has lined up with about a 1.16% stock move in the opposite direction in this state. This is a point estimate from 251 trading days.",
          "sector_link_explainer": "High sector link. A 1% sector move has lined up with about a 1.63% stock move in the same direction in this state. This is a point estimate from 251 trading days.",
          "stock_persistence_display": "-1.34",
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "history_limited_note": "Read is based on 251 trading days versus the 252-day target."
        },
        "current_summary": {
          "regime_label": "Low Volatility",
          "dominant_driver": "sector",
          "dominant_driver_label": "Sector",
          "driver_share_pct": 39.5,
          "driver_share_display": "39.5%",
          "confidence_label": "High, limited history",
          "confidence_pct": 100.0,
          "display_confidence_pct": null,
          "confidence_note": "Based on 251 trading days relative to the 252-day target.",
          "history_days": 251,
          "history_limited": true,
          "volatility_label": "Low Volatility",
          "lead_signal_text": "No stable lead signal.",
          "state_term": "state",
          "stay_probability": 0.9193548387096774,
          "effective_days": 125.0,
          "persistence_note": "This state looks more persistent, with a typical run length of about 11.4 days.",
          "expected_duration_days": 11.4
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
          "dominant_driver": "sector",
          "dominant_driver_label": "Sector",
          "regime_label": null,
          "summary": "Mar: Still clearly sector-driven, though based on only 5 trading days.",
          "share_market": 0.22258119830379813,
          "share_sector": 0.7261711514391566,
          "share_company": 0.05124765025704525,
          "share_market_display": "22.3%",
          "share_sector_display": "72.6%",
          "share_company_display": "5.1%",
          "dominant_share_display": "72.6%"
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
          "summary": "Apr: More mixed, though market-driven still has the largest share.",
          "share_market": 0.39790876846464956,
          "share_sector": 0.35990827515839346,
          "share_company": 0.24218295637695705,
          "share_market_display": "39.8%",
          "share_sector_display": "36.0%",
          "share_company_display": "24.2%",
          "dominant_share_display": "39.8%"
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
          "summary": "May: More mixed, though company-driven still has the largest share.",
          "share_market": 0.3418042133012487,
          "share_sector": 0.2234377159193067,
          "share_company": 0.43475807077944445,
          "share_market_display": "34.2%",
          "share_sector_display": "22.3%",
          "share_company_display": "43.5%",
          "dominant_share_display": "43.5%"
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
          "summary": "Jun: More mixed, though company-driven still has the largest share.",
          "share_market": 0.41084732800760765,
          "share_sector": 0.1392424973164231,
          "share_company": 0.4499101746759693,
          "share_market_display": "41.1%",
          "share_sector_display": "13.9%",
          "share_company_display": "45.0%",
          "dominant_share_display": "45.0%"
        },
        {
          "month_key": "2025-07",
          "month_label": "July 2025",
          "month_short_label": "Jul",
          "period_label": "2025-07-02 to 2025-07-31",
          "n_obs": 22,
          "partial_month": true,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_label": null,
          "summary": "Jul: Mostly company-driven.",
          "share_market": 0.26427430463345386,
          "share_sector": 0.2511465499039463,
          "share_company": 0.48457914546259995,
          "share_market_display": "26.4%",
          "share_sector_display": "25.1%",
          "share_company_display": "48.5%",
          "dominant_share_display": "48.5%"
        },
        {
          "month_key": "2025-08",
          "month_label": "August 2025",
          "month_short_label": "Aug",
          "period_label": "2025-08-01 to 2025-08-29",
          "n_obs": 21,
          "partial_month": false,
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "regime_label": null,
          "summary": "Aug: Mostly market-driven.",
          "share_market": 0.451871888575332,
          "share_sector": 0.27285631905051366,
          "share_company": 0.27527179237415433,
          "share_market_display": "45.2%",
          "share_sector_display": "27.3%",
          "share_company_display": "27.5%",
          "dominant_share_display": "45.2%"
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
          "summary": "Sep: More mixed, though company-driven still has the largest share.",
          "share_market": 0.19890050656378852,
          "share_sector": 0.37584716940920787,
          "share_company": 0.42525232402700364,
          "share_market_display": "19.9%",
          "share_sector_display": "37.6%",
          "share_company_display": "42.5%",
          "dominant_share_display": "42.5%"
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
          "summary": "Oct: More mixed, though company-driven still has the largest share.",
          "share_market": 0.36581132735847177,
          "share_sector": 0.22047294892026786,
          "share_company": 0.41371572372126036,
          "share_market_display": "36.6%",
          "share_sector_display": "22.0%",
          "share_company_display": "41.4%",
          "dominant_share_display": "41.4%"
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
          "share_market": 0.4815424507819696,
          "share_sector": 0.11488423147705379,
          "share_company": 0.4035733177409765,
          "share_market_display": "48.2%",
          "share_sector_display": "11.5%",
          "share_company_display": "40.4%",
          "dominant_share_display": "48.2%"
        },
        {
          "month_key": "2025-12",
          "month_label": "December 2025",
          "month_short_label": "Dec",
          "period_label": "2025-12-01 to 2025-12-31",
          "n_obs": 15,
          "partial_month": false,
          "dominant_driver": "sector",
          "dominant_driver_label": "Sector",
          "regime_label": null,
          "summary": "Dec: Mostly sector-driven.",
          "share_market": 0.37409050753946577,
          "share_sector": 0.45085519029993254,
          "share_company": 0.17505430216060164,
          "share_market_display": "37.4%",
          "share_sector_display": "45.1%",
          "share_company_display": "17.5%",
          "dominant_share_display": "45.1%"
        },
        {
          "month_key": "2026-01",
          "month_label": "January 2026",
          "month_short_label": "Jan",
          "period_label": "2026-01-02 to 2026-01-30",
          "n_obs": 21,
          "partial_month": true,
          "dominant_driver": "sector",
          "dominant_driver_label": "Sector",
          "regime_label": null,
          "summary": "Jan: Much more balanced across company, sector, and market factors.",
          "share_market": 0.32301133692272965,
          "share_sector": 0.34214863152507524,
          "share_company": 0.334840031552195,
          "share_market_display": "32.3%",
          "share_sector_display": "34.2%",
          "share_company_display": "33.5%",
          "dominant_share_display": "34.2%"
        },
        {
          "month_key": "2026-02",
          "month_label": "February 2026",
          "month_short_label": "Feb",
          "period_label": "2026-02-02 to 2026-02-27",
          "n_obs": 17,
          "partial_month": false,
          "dominant_driver": "sector",
          "dominant_driver_label": "Sector",
          "regime_label": null,
          "summary": "Feb: Mostly sector-driven.",
          "share_market": 0.15999497601130064,
          "share_sector": 0.49020416547716783,
          "share_company": 0.34980085851153164,
          "share_market_display": "16.0%",
          "share_sector_display": "49.0%",
          "share_company_display": "35.0%",
          "dominant_share_display": "49.0%"
        },
        {
          "month_key": "2026-03",
          "month_label": "March 2026",
          "month_short_label": "Mar",
          "period_label": "2026-03-02 to 2026-03-31",
          "n_obs": 22,
          "partial_month": false,
          "dominant_driver": "sector",
          "dominant_driver_label": "Sector",
          "regime_label": null,
          "summary": "Mar: More mixed, though sector-driven still has the largest share.",
          "share_market": 0.12059205213231389,
          "share_sector": 0.4432251955411244,
          "share_company": 0.43618275232656184,
          "share_market_display": "12.1%",
          "share_sector_display": "44.3%",
          "share_company_display": "43.6%",
          "dominant_share_display": "44.3%"
        },
        {
          "month_key": "2026-04",
          "month_label": "April 2026",
          "month_short_label": "Apr",
          "period_label": "2026-04-01 to 2026-04-13",
          "n_obs": 6,
          "partial_month": false,
          "dominant_driver": "sector",
          "dominant_driver_label": "Sector",
          "regime_label": null,
          "summary": "Apr: Mostly sector-driven, though based on only 6 trading days.",
          "share_market": 0.4134025944466529,
          "share_sector": 0.580318424922653,
          "share_company": 0.006278980630694007,
          "share_market_display": "41.3%",
          "share_sector_display": "58.0%",
          "share_company_display": "0.6%",
          "dominant_share_display": "58.0%"
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
          0.5020080321285141,
          0.4979919678714859
        ],
        "current_regime": 0,
        "regimes": [
          {
            "id": 0,
            "label": "Low Volatility",
            "pct_time": 0.5020080321285141,
            "expected_duration_days": 11.363636363636363,
            "current_probability": 1.0,
            "n_days_effective": 125.0,
            "volatility": {
              "median": 0.015105905285132167,
              "low": 0.015105905285132167,
              "high": 0.015105905285132167
            },
            "volatility_label": "Low Volatility"
          },
          {
            "id": 1,
            "label": "High Volatility",
            "pct_time": 0.4979919678714859,
            "expected_duration_days": 11.272727272727273,
            "current_probability": 0.0,
            "n_days_effective": 124.0,
            "volatility": {
              "median": 0.02681186422793405,
              "low": 0.02681186422793405,
              "high": 0.02681186422793405
            },
            "volatility_label": "High Volatility"
          }
        ],
        "transitions": [
          [
            0.9193548387096774,
            0.08064516129032258
          ],
          [
            0.08870967741935484,
            0.9112903225806451
          ]
        ]
      }
    },
    "order_book": {
      "bids": [
        {
          "level": 1,
          "price": 87.55,
          "quantity": 11000.0,
          "value": 963050.0
        },
        {
          "level": 2,
          "price": 87.5,
          "quantity": 21400.0,
          "value": 1872500.0
        },
        {
          "level": 3,
          "price": 87.45,
          "quantity": 30200.0,
          "value": 2640990.0
        },
        {
          "level": 4,
          "price": 87.4,
          "quantity": 47000.0,
          "value": 4107800.0000000005
        },
        {
          "level": 5,
          "price": 87.35,
          "quantity": 35000.0,
          "value": 3057250.0
        },
        {
          "level": 6,
          "price": 87.3,
          "quantity": 27000.0,
          "value": 2357100.0
        },
        {
          "level": 7,
          "price": 87.25,
          "quantity": 23600.0,
          "value": 2059100.0
        },
        {
          "level": 8,
          "price": 87.2,
          "quantity": 12000.0,
          "value": 1046400.0
        },
        {
          "level": 9,
          "price": 87.15,
          "quantity": 31600.0,
          "value": 2753940.0
        },
        {
          "level": 10,
          "price": 87.1,
          "quantity": 14800.0,
          "value": 1289080.0
        }
      ],
      "asks": [
        {
          "level": 1,
          "price": 87.6,
          "quantity": 2400.0,
          "value": 210240.0
        },
        {
          "level": 2,
          "price": 87.65,
          "quantity": 14400.0,
          "value": 1262160.0
        },
        {
          "level": 3,
          "price": 87.7,
          "quantity": 25000.0,
          "value": 2192500.0
        },
        {
          "level": 4,
          "price": 87.75,
          "quantity": 26600.0,
          "value": 2334150.0
        },
        {
          "level": 5,
          "price": 87.8,
          "quantity": 38600.0,
          "value": 3389080.0
        },
        {
          "level": 6,
          "price": 87.85,
          "quantity": 23800.0,
          "value": 2090829.9999999998
        },
        {
          "level": 7,
          "price": 87.9,
          "quantity": 73600.0,
          "value": 6469440.0
        },
        {
          "level": 8,
          "price": 87.95,
          "quantity": 15200.0,
          "value": 1336840.0
        },
        {
          "level": 9,
          "price": 88.0,
          "quantity": 22600.0,
          "value": 1988800.0
        },
        {
          "level": 10,
          "price": 88.05,
          "quantity": 32600.0,
          "value": 2870430.0
        }
      ]
    },
    "execution_dynamic": {
      "snapshot": {
        "valid": true,
        "snapshot_time": "2026-04-13 07:59:58.229000000",
        "snapshot_basis": "last_continuous_session_snapshot",
        "snapshot_label": "final continuous-session displayed book before close",
        "snapshot_note": "Final continuous-session displayed book before close",
        "snapshot_mic": "XHKG",
        "mid_price": 87.57499999999999,
        "spread_pct": 0.0005709391949757027,
        "spread_ticks": 1.0,
        "tick_size": 0.05,
        "bid_depth_notional_top10": 22147210.0,
        "ask_depth_notional_top10": 24144470.0,
        "bid_ask_depth_ratio": 0.9173
      },
      "historical_trade_scenarios": {
        "valid": true,
        "requested_lookback_calendar_days": 365,
        "lookback_calendar_days": 365,
        "effective_calendar_days": 365,
        "history_limited": false,
        "trade_days_used": 238,
        "n_trades_used": 3573321,
        "first_trade_date": "2025-04-14",
        "last_trade_date": "2026-04-13",
        "window_label": "Apr 14, 2025 to Apr 13, 2026",
        "window_short_label": "Apr 14, 2025 to Apr 13, 2026",
        "trade_days_label": "238 trading days",
        "trade_count_label": "3,573,321 trades",
        "window_detail_label": "238 trading days • 3,573,321 trades",
        "history_note": "Trade-size percentiles use Apr 14, 2025 to Apr 13, 2026 history (238 trading days • 3,573,321 trades).",
        "scenarios": [
          {
            "key": "p90",
            "label": "90th percentile trade",
            "quantile": 0.9,
            "trade_notional": 253620.0,
            "impact_pct": -0.000285,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 1.15,
            "pct_of_adv": 0.01
          },
          {
            "key": "p95",
            "label": "95th percentile trade",
            "quantile": 0.95,
            "trade_notional": 467500.0,
            "impact_pct": -0.000285,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 2.11,
            "pct_of_adv": 0.02
          },
          {
            "key": "p99_99",
            "label": "99.99th percentile trade",
            "quantile": 0.9999,
            "trade_notional": 35215355.4,
            "impact_pct": -0.002783,
            "filled_pct": 62.9,
            "levels_consumed": 10,
            "pct_of_bid_depth": 159.01,
            "pct_of_adv": 1.59
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
            "order_id": "316675.0",
            "timestamp": "2026-04-13 01:20:11.466000000",
            "local_timestamp": "2026-04-13 09:20:11",
            "posted_price": 99.0,
            "size_shares": 133600.0,
            "notional": 13226400.0,
            "impact_pct": -0.001781,
            "filled_pct": 100.0,
            "levels_consumed": 6,
            "pct_of_bid_depth": 59.72,
            "price_vs_mid_pct": 13.046,
            "executed_event_count": 0,
            "event_count": 1
          },
          {
            "rank": 2,
            "order_id": "18841347.0",
            "timestamp": "2026-04-13 01:30:00.151000000",
            "local_timestamp": "2026-04-13 09:30:00",
            "posted_price": 91.0,
            "size_shares": 115000.0,
            "notional": 10465000.0,
            "impact_pct": -0.0015409999999999998,
            "filled_pct": 100.0,
            "levels_consumed": 5,
            "pct_of_bid_depth": 47.25,
            "price_vs_mid_pct": 3.911,
            "executed_event_count": 0,
            "event_count": 1
          },
          {
            "rank": 3,
            "order_id": "4335093763.0",
            "timestamp": "2026-04-13 07:54:00.205000000",
            "local_timestamp": "2026-04-13 15:54:00",
            "posted_price": 89.0,
            "size_shares": 70000.0,
            "notional": 6230000.0,
            "impact_pct": -0.001149,
            "filled_pct": 100.0,
            "levels_consumed": 4,
            "pct_of_bid_depth": 28.13,
            "price_vs_mid_pct": 1.627,
            "executed_event_count": 0,
            "event_count": 1
          }
        ]
      },
      "intraday_liquidity_profile": {
        "valid": true,
        "trade_date": "2026-04-13",
        "bucket_minutes": 30,
        "tick_size": 0.05,
        "timezone": "HKT (UTC+8)",
        "session_label": "HKEX continuous trading session",
        "bucket_label_basis": "bucket start time",
        "display_window_label": "HKEX continuous trading session",
        "bucket_note": "Buckets are shown in local market time and labeled by bucket start.",
        "rows": [
          {
            "bucket": "09:30",
            "spread_pct": 0.0005798782255725969,
            "spread_ticks": 0.9999999999999432,
            "bid_depth_notional": 39280210.0,
            "ask_depth_notional": 38934690.0,
            "mid_price": 86.225
          },
          {
            "bucket": "10:00",
            "spread_pct": 0.0005765350245027058,
            "spread_ticks": 0.9999999999999432,
            "bid_depth_notional": 34293260.0,
            "ask_depth_notional": 39154540.0,
            "mid_price": 86.725
          },
          {
            "bucket": "10:30",
            "spread_pct": 0.0005762028233938019,
            "spread_ticks": 0.9999999999999432,
            "bid_depth_notional": 48426620.0,
            "ask_depth_notional": 29631460.0,
            "mid_price": 86.775
          },
          {
            "bucket": "11:00",
            "spread_pct": 0.0005775339301183618,
            "spread_ticks": 0.9999999999999432,
            "bid_depth_notional": 55115600.0,
            "ask_depth_notional": 40008960.0,
            "mid_price": 86.57499999999999
          },
          {
            "bucket": "11:30",
            "spread_pct": 0.0005762028233938019,
            "spread_ticks": 0.9999999999999432,
            "bid_depth_notional": 31773650.0,
            "ask_depth_notional": 28547810.0,
            "mid_price": 86.775
          },
          {
            "bucket": "13:00",
            "spread_pct": 0.0005762028233938019,
            "spread_ticks": 0.9999999999999432,
            "bid_depth_notional": 34643310.0,
            "ask_depth_notional": 51746960.0,
            "mid_price": 86.775
          },
          {
            "bucket": "13:30",
            "spread_pct": 0.0011540680900174094,
            "spread_ticks": 2.0000000000001705,
            "bid_depth_notional": 51916160.0,
            "ask_depth_notional": 55822640.0,
            "mid_price": 86.65
          },
          {
            "bucket": "14:00",
            "spread_pct": 0.0005735589331803516,
            "spread_ticks": 0.9999999999999432,
            "bid_depth_notional": 51428910.0,
            "ask_depth_notional": 35676690.0,
            "mid_price": 87.17500000000001
          },
          {
            "bucket": "14:30",
            "spread_pct": 0.0005735589331803516,
            "spread_ticks": 0.9999999999999432,
            "bid_depth_notional": 60937970.0,
            "ask_depth_notional": 34700060.0,
            "mid_price": 87.17500000000001
          },
          {
            "bucket": "15:00",
            "spread_pct": 0.0005725737188662716,
            "spread_ticks": 0.9999999999999432,
            "bid_depth_notional": 64691450.0,
            "ask_depth_notional": 40456190.0,
            "mid_price": 87.32499999999999
          },
          {
            "bucket": "15:30",
            "spread_pct": 0.0005709391949757027,
            "spread_ticks": 0.9999999999999432,
            "bid_depth_notional": 22147210.0,
            "ask_depth_notional": 24144470.0,
            "mid_price": 87.57499999999999
          }
        ],
        "summary": {
          "median_spread_pct": 0.0005762028233938019,
          "median_spread_ticks": 0.9999999999999432,
          "median_bid_depth_notional": 48426620.0,
          "median_ask_depth_notional": 38934690.0,
          "tightest_bucket": "15:30",
          "widest_bucket": "13:30",
          "deepest_bid_bucket": "15:00",
          "thinnest_bid_bucket": "15:30"
        }
      }
    },
    "peer_capacity": {
      "bx_ticket_pct_adv_50k": 0.0,
      "peers": [
        {
          "ticker": "2318",
          "pct": 0.0
        },
        {
          "ticker": "2628",
          "pct": 0.1
        },
        {
          "ticker": "2328",
          "pct": 0.2
        },
        {
          "ticker": "1336",
          "pct": 0.2
        },
        {
          "ticker": "2601",
          "pct": 0.2
        },
        {
          "ticker": "1339",
          "pct": 0.4
        },
        {
          "ticker": "966",
          "pct": 0.5
        },
        {
          "ticker": "6060",
          "pct": 0.8
        }
      ]
    },
    "trader_composition": {
      "primary_period": "6m",
      "periods": {
        "1d": {
          "valid": true,
          "currency": "HKD",
          "n_trades": 9773,
          "n_runs": 1067,
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
            "retail_pct": 0.03939424946280569,
            "mixed_pct": 0.0,
            "instit_pct": 0.5707561649442341,
            "ambiguous_pct": 0.3513762406630513,
            "unobservable_pct": 0.038473344929908934,
            "unclear_pct": 0.38984958559296023,
            "retail_qty_pct": 0.014205186711689835,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.6891855373788374,
            "ambiguous_qty_pct": 0.27152826012254694,
            "unobservable_qty_pct": 0.02508101578692586,
            "unclear_qty_pct": 0.2966092759094728,
            "retail_notional_pct": 0.014187012455700908,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.6889298567999034,
            "ambiguous_notional_pct": 0.2717949090399712,
            "unobservable_notional_pct": 0.02508822170442442,
            "unclear_notional_pct": 0.29688313074439565
          },
          "run_composition": {
            "retail_pct": 0.2380506091846298,
            "mixed_pct": 0.0,
            "instit_pct": 0.1302717900656045,
            "ambiguous_pct": 0.41518275538894095,
            "unobservable_pct": 0.21649484536082475,
            "unclear_pct": 0.6316776007497658,
            "retail_notional_pct": 0.014187012455700908,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.6889298567999034,
            "unclear_notional_pct": 0.29688313074439565
          },
          "counts": {
            "trades": {
              "retail": 385,
              "mixed": 0,
              "institutional": 5578,
              "ambiguous": 3434,
              "unobservable": 376,
              "unclear": 3810
            },
            "runs": {
              "retail": 254,
              "mixed": 0,
              "institutional": 139,
              "ambiguous": 443,
              "unobservable": 231,
              "unclear": 674
            }
          },
          "confidence": {
            "high": 0.1105904404873477,
            "medium": 0.1527647610121837,
            "low": 0.1049671977507029,
            "na": 0.6316776007497656
          },
          "confidence_counts": {
            "high": 118,
            "medium": 163,
            "low": 112,
            "na": 674
          },
          "trade_confidence": {
            "high": 0.01207408165353525,
            "medium": 0.4940141205361711,
            "low": 0.10406221221733347,
            "na": 0.3898495855929602
          },
          "trade_confidence_counts": {
            "high": 118,
            "medium": 4828,
            "low": 1017,
            "na": 3810
          },
          "observability": {
            "avg_feature_coverage": 0.7402061855670102,
            "observable_run_pct": 0.7835051546391752,
            "ambiguous_run_pct": 0.41518275538894095,
            "unobservable_run_pct": 0.21649484536082475
          },
          "dominant_bucket": "AMBIGUOUS",
          "dominant_label": "Unclassified Flow",
          "dominant_share": 0.41518275538894095,
          "dominance_gap": 0.17713214620431114,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 9773
            },
            "d2_information": {
              "UNOBSERVABLE": 9773
            },
            "d3_urgency": {
              "IMMEDIATE": 864,
              "ADAPTIVE": 201,
              "SCHEDULED": 2
            },
            "participant_confidence": {
              "NA": 674,
              "MEDIUM": 163,
              "HIGH": 118,
              "LOW": 112
            }
          },
          "trade_size": {
            "avg": 89934.68433439067,
            "median": 34720.0
          },
          "run_size": {
            "avg": 823741.0215557638,
            "median": 121940.0,
            "avg_length": 9.159325210871602
          },
          "recent_trades": [
            {
              "trade_id": "10366",
              "timestamp": "2026-04-13T07:59:57.418059",
              "price": 87.6,
              "size": 200.0,
              "notional": 17520.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 244590,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "10365",
              "timestamp": "2026-04-13T07:59:55.302931",
              "price": 87.55,
              "size": 200.0,
              "notional": 17510.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 244590,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "10364",
              "timestamp": "2026-04-13T07:59:54.910684",
              "price": 87.6,
              "size": 2000.0,
              "notional": 175200.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 244590,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "10363",
              "timestamp": "2026-04-13T07:59:54.910684",
              "price": 87.6,
              "size": 1000.0,
              "notional": 87600.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 244590,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "10362",
              "timestamp": "2026-04-13T07:59:53.640372",
              "price": 87.55,
              "size": 200.0,
              "notional": 17510.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 244590,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "10361",
              "timestamp": "2026-04-13T07:59:53.639657",
              "price": 87.55,
              "size": 200.0,
              "notional": 17510.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 244590,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "10360",
              "timestamp": "2026-04-13T07:59:50.046269",
              "price": 87.55,
              "size": 2000.0,
              "notional": 175100.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 244590,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "10359",
              "timestamp": "2026-04-13T07:59:50.046269",
              "price": 87.55,
              "size": 200.0,
              "notional": 17510.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 244590,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "10358",
              "timestamp": "2026-04-13T07:59:49.751682",
              "price": 87.55,
              "size": 200.0,
              "notional": 17510.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 244590,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "10357",
              "timestamp": "2026-04-13T07:59:48.751072",
              "price": 87.55,
              "size": 200.0,
              "notional": 17510.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 244590,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "10356",
              "timestamp": "2026-04-13T07:59:47.752033",
              "price": 87.55,
              "size": 200.0,
              "notional": 17510.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 244590,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "10355",
              "timestamp": "2026-04-13T07:59:46.751221",
              "price": 87.55,
              "size": 200.0,
              "notional": 17510.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 244590,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "10354",
              "timestamp": "2026-04-13T07:59:45.751539",
              "price": 87.55,
              "size": 200.0,
              "notional": 17510.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 244590,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "10353",
              "timestamp": "2026-04-13T07:59:44.956564",
              "price": 87.55,
              "size": 200.0,
              "notional": 17510.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 244590,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "10352",
              "timestamp": "2026-04-13T07:59:44.751132",
              "price": 87.55,
              "size": 200.0,
              "notional": 17510.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 244590,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "10351",
              "timestamp": "2026-04-13T07:59:43.751329",
              "price": 87.55,
              "size": 200.0,
              "notional": 17510.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 244590,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "10350",
              "timestamp": "2026-04-13T07:59:41.752003",
              "price": 87.55,
              "size": 200.0,
              "notional": 17510.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 244590,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "10349",
              "timestamp": "2026-04-13T07:59:40.750950",
              "price": 87.55,
              "size": 200.0,
              "notional": 17510.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 244590,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "10348",
              "timestamp": "2026-04-13T07:59:37.686670",
              "price": 87.65,
              "size": 200.0,
              "notional": 17530.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 244590,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "10347",
              "timestamp": "2026-04-13T07:59:36.853047",
              "price": 87.65,
              "size": 200.0,
              "notional": 17530.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 244590,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "10346",
              "timestamp": "2026-04-13T07:59:35.191939",
              "price": 87.65,
              "size": 200.0,
              "notional": 17530.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 244590,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "10345",
              "timestamp": "2026-04-13T07:59:35.191939",
              "price": 87.65,
              "size": 200.0,
              "notional": 17530.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 244590,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "10344",
              "timestamp": "2026-04-13T07:59:35.105679",
              "price": 87.55,
              "size": 200.0,
              "notional": 17510.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 244590,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "10343",
              "timestamp": "2026-04-13T07:59:35.070315",
              "price": 87.55,
              "size": 400.0,
              "notional": 35020.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 244590,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "10342",
              "timestamp": "2026-04-13T07:59:34.706791",
              "price": 87.65,
              "size": 400.0,
              "notional": 35060.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 244590,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "10341",
              "timestamp": "2026-04-13T07:59:34.706791",
              "price": 87.65,
              "size": 400.0,
              "notional": 35060.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 244590,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "10340",
              "timestamp": "2026-04-13T07:59:31.511358",
              "price": 87.65,
              "size": 200.0,
              "notional": 17530.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 244590,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "10339",
              "timestamp": "2026-04-13T07:59:31.511358",
              "price": 87.65,
              "size": 600.0,
              "notional": 52590.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 244590,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "10338",
              "timestamp": "2026-04-13T07:59:31.148505",
              "price": 87.65,
              "size": 200.0,
              "notional": 17530.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 244590,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "10337",
              "timestamp": "2026-04-13T07:59:31.031158",
              "price": 87.55,
              "size": 200.0,
              "notional": 17510.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 244590,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            }
          ],
          "peer_comparison": []
        },
        "30d": {
          "valid": true,
          "currency": "HKD",
          "n_trades": 332914,
          "n_runs": 26657,
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
            "retail_pct": 0.031407510648395684,
            "mixed_pct": 0.0,
            "instit_pct": 0.6203914524471785,
            "ambiguous_pct": 0.31411715938650825,
            "unobservable_pct": 0.03408387751791754,
            "unclear_pct": 0.3482010369044258,
            "retail_qty_pct": 0.012357330407985216,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.7218294491675842,
            "ambiguous_qty_pct": 0.2444740797043532,
            "unobservable_qty_pct": 0.021339140720077428,
            "unclear_qty_pct": 0.2658132204244306,
            "retail_notional_pct": 0.012522967209985398,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.7209366132301828,
            "ambiguous_notional_pct": 0.24528888812402028,
            "unobservable_notional_pct": 0.021251531435811554,
            "unclear_notional_pct": 0.2665404195598318
          },
          "run_composition": {
            "retail_pct": 0.19555838991634467,
            "mixed_pct": 0.0,
            "instit_pct": 0.15343061859924223,
            "ambiguous_pct": 0.4225531755261282,
            "unobservable_pct": 0.22845781595828488,
            "unclear_pct": 0.6510109914844131,
            "retail_notional_pct": 0.012522967209985398,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.7209366132301828,
            "unclear_notional_pct": 0.2665404195598318
          },
          "counts": {
            "trades": {
              "retail": 10456,
              "mixed": 0,
              "institutional": 206537,
              "ambiguous": 104574,
              "unobservable": 11347,
              "unclear": 115921
            },
            "runs": {
              "retail": 5213,
              "mixed": 0,
              "institutional": 4090,
              "ambiguous": 11264,
              "unobservable": 6090,
              "unclear": 17354
            }
          },
          "confidence": {
            "high": 0.045616535994297935,
            "medium": 0.20414900401395505,
            "low": 0.0992234685073339,
            "na": 0.6510109914844131
          },
          "confidence_counts": {
            "high": 1216,
            "medium": 5442,
            "low": 2645,
            "na": 17354
          },
          "trade_confidence": {
            "high": 0.031035042082940337,
            "medium": 0.4979994833500544,
            "low": 0.12276443766257952,
            "na": 0.3482010369044258
          },
          "trade_confidence_counts": {
            "high": 10332,
            "medium": 165791,
            "low": 40870,
            "na": 115921
          },
          "observability": {
            "avg_feature_coverage": 0.7122275574895899,
            "observable_run_pct": 0.7715421840417152,
            "ambiguous_run_pct": 0.4225531755261282,
            "unobservable_run_pct": 0.22845781595828488
          },
          "dominant_bucket": "AMBIGUOUS",
          "dominant_label": "Unclassified Flow",
          "dominant_share": 0.4225531755261282,
          "dominance_gap": 0.19409535956784332,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 332914
            },
            "d2_information": {
              "UNOBSERVABLE": 332914
            },
            "d3_urgency": {
              "IMMEDIATE": 19084,
              "ADAPTIVE": 7533,
              "SCHEDULED": 31,
              "OPPORTUNISTIC": 9
            },
            "participant_confidence": {
              "NA": 17354,
              "MEDIUM": 5442,
              "LOW": 2645,
              "HIGH": 1216
            }
          },
          "trade_size": {
            "avg": 100701.45375416173,
            "median": 35940.0
          },
          "run_size": {
            "avg": 1257640.5362611322,
            "median": 184770.0,
            "avg_length": 12.488802190794162
          },
          "recent_trades": [
            {
              "trade_id": "10366",
              "timestamp": "2026-04-13T07:59:57.418059",
              "price": 87.6,
              "size": 200.0,
              "notional": 17520.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 244590,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "10365",
              "timestamp": "2026-04-13T07:59:55.302931",
              "price": 87.55,
              "size": 200.0,
              "notional": 17510.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 244590,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "10364",
              "timestamp": "2026-04-13T07:59:54.910684",
              "price": 87.6,
              "size": 2000.0,
              "notional": 175200.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 244590,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "10363",
              "timestamp": "2026-04-13T07:59:54.910684",
              "price": 87.6,
              "size": 1000.0,
              "notional": 87600.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 244590,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "10362",
              "timestamp": "2026-04-13T07:59:53.640372",
              "price": 87.55,
              "size": 200.0,
              "notional": 17510.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 244590,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "10361",
              "timestamp": "2026-04-13T07:59:53.639657",
              "price": 87.55,
              "size": 200.0,
              "notional": 17510.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 244590,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "10360",
              "timestamp": "2026-04-13T07:59:50.046269",
              "price": 87.55,
              "size": 2000.0,
              "notional": 175100.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 244590,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "10359",
              "timestamp": "2026-04-13T07:59:50.046269",
              "price": 87.55,
              "size": 200.0,
              "notional": 17510.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 244590,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "10358",
              "timestamp": "2026-04-13T07:59:49.751682",
              "price": 87.55,
              "size": 200.0,
              "notional": 17510.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 244590,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "10357",
              "timestamp": "2026-04-13T07:59:48.751072",
              "price": 87.55,
              "size": 200.0,
              "notional": 17510.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 244590,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "10356",
              "timestamp": "2026-04-13T07:59:47.752033",
              "price": 87.55,
              "size": 200.0,
              "notional": 17510.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 244590,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "10355",
              "timestamp": "2026-04-13T07:59:46.751221",
              "price": 87.55,
              "size": 200.0,
              "notional": 17510.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 244590,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "10354",
              "timestamp": "2026-04-13T07:59:45.751539",
              "price": 87.55,
              "size": 200.0,
              "notional": 17510.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 244590,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "10353",
              "timestamp": "2026-04-13T07:59:44.956564",
              "price": 87.55,
              "size": 200.0,
              "notional": 17510.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 244590,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "10352",
              "timestamp": "2026-04-13T07:59:44.751132",
              "price": 87.55,
              "size": 200.0,
              "notional": 17510.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 244590,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "10351",
              "timestamp": "2026-04-13T07:59:43.751329",
              "price": 87.55,
              "size": 200.0,
              "notional": 17510.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 244590,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "10350",
              "timestamp": "2026-04-13T07:59:41.752003",
              "price": 87.55,
              "size": 200.0,
              "notional": 17510.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 244590,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "10349",
              "timestamp": "2026-04-13T07:59:40.750950",
              "price": 87.55,
              "size": 200.0,
              "notional": 17510.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 244590,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "10348",
              "timestamp": "2026-04-13T07:59:37.686670",
              "price": 87.65,
              "size": 200.0,
              "notional": 17530.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 244590,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "10347",
              "timestamp": "2026-04-13T07:59:36.853047",
              "price": 87.65,
              "size": 200.0,
              "notional": 17530.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 244590,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "10346",
              "timestamp": "2026-04-13T07:59:35.191939",
              "price": 87.65,
              "size": 200.0,
              "notional": 17530.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 244590,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "10345",
              "timestamp": "2026-04-13T07:59:35.191939",
              "price": 87.65,
              "size": 200.0,
              "notional": 17530.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 244590,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "10344",
              "timestamp": "2026-04-13T07:59:35.105679",
              "price": 87.55,
              "size": 200.0,
              "notional": 17510.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 244590,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "10343",
              "timestamp": "2026-04-13T07:59:35.070315",
              "price": 87.55,
              "size": 400.0,
              "notional": 35020.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 244590,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "10342",
              "timestamp": "2026-04-13T07:59:34.706791",
              "price": 87.65,
              "size": 400.0,
              "notional": 35060.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 244590,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "10341",
              "timestamp": "2026-04-13T07:59:34.706791",
              "price": 87.65,
              "size": 400.0,
              "notional": 35060.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 244590,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "10340",
              "timestamp": "2026-04-13T07:59:31.511358",
              "price": 87.65,
              "size": 200.0,
              "notional": 17530.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 244590,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "10339",
              "timestamp": "2026-04-13T07:59:31.511358",
              "price": 87.65,
              "size": 600.0,
              "notional": 52590.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 244590,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "10338",
              "timestamp": "2026-04-13T07:59:31.148505",
              "price": 87.65,
              "size": 200.0,
              "notional": 17530.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 244590,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "10337",
              "timestamp": "2026-04-13T07:59:31.031158",
              "price": 87.55,
              "size": 200.0,
              "notional": 17510.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 244590,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            }
          ],
          "peer_comparison": []
        },
        "3m": {
          "valid": true,
          "currency": "HKD",
          "n_trades": 932659,
          "n_runs": 77523,
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
            "retail_pct": 0.01622994041766605,
            "mixed_pct": 0.0,
            "instit_pct": 0.6689079288357267,
            "ambiguous_pct": 0.2711601989580329,
            "unobservable_pct": 0.043701931788574386,
            "unclear_pct": 0.3148621307466073,
            "retail_qty_pct": 0.005453875429728267,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.7718392020018056,
            "ambiguous_qty_pct": 0.19698092948767784,
            "unobservable_qty_pct": 0.02572599308078836,
            "unclear_qty_pct": 0.2227069225684662,
            "retail_notional_pct": 0.005506281038198269,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.7714843640018082,
            "ambiguous_notional_pct": 0.19730934969964756,
            "unobservable_notional_pct": 0.02570000526034599,
            "unclear_notional_pct": 0.22300935495999355
          },
          "run_composition": {
            "retail_pct": 0.09299175728493479,
            "mixed_pct": 0.0,
            "instit_pct": 0.17308411697173742,
            "ambiguous_pct": 0.42039136772312735,
            "unobservable_pct": 0.3135327580202005,
            "unclear_pct": 0.7339241257433278,
            "retail_notional_pct": 0.005506281038198269,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.7714843640018082,
            "unclear_notional_pct": 0.22300935495999355
          },
          "counts": {
            "trades": {
              "retail": 15137,
              "mixed": 0,
              "institutional": 623863,
              "ambiguous": 252900,
              "unobservable": 40759,
              "unclear": 293659
            },
            "runs": {
              "retail": 7209,
              "mixed": 0,
              "institutional": 13418,
              "ambiguous": 32590,
              "unobservable": 24306,
              "unclear": 56896
            }
          },
          "confidence": {
            "high": 0.02303832411026405,
            "medium": 0.19658681939553424,
            "low": 0.046450730750873935,
            "na": 0.7339241257433278
          },
          "confidence_counts": {
            "high": 1786,
            "medium": 15240,
            "low": 3601,
            "na": 56896
          },
          "trade_confidence": {
            "high": 0.07663894306493585,
            "medium": 0.5490559786588668,
            "low": 0.05944294752959013,
            "na": 0.3148621307466073
          },
          "trade_confidence_counts": {
            "high": 71478,
            "medium": 512082,
            "low": 55440,
            "na": 293659
          },
          "observability": {
            "avg_feature_coverage": 0.6689569547102151,
            "observable_run_pct": 0.6864672419797995,
            "ambiguous_run_pct": 0.42039136772312735,
            "unobservable_run_pct": 0.3135327580202005
          },
          "dominant_bucket": "AMBIGUOUS",
          "dominant_label": "Unclassified Flow",
          "dominant_share": 0.42039136772312735,
          "dominance_gap": 0.10685860970292688,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 932659
            },
            "d2_information": {
              "UNOBSERVABLE": 932659
            },
            "d3_urgency": {
              "IMMEDIATE": 56679,
              "ADAPTIVE": 20710,
              "SCHEDULED": 114,
              "OPPORTUNISTIC": 20
            },
            "participant_confidence": {
              "NA": 56896,
              "MEDIUM": 15240,
              "LOW": 3601,
              "HIGH": 1786
            }
          },
          "trade_size": {
            "avg": 106400.98162731288,
            "median": 35940.0
          },
          "run_size": {
            "avg": 1280082.4674425398,
            "median": 166240.0,
            "avg_length": 12.030739264476349
          },
          "recent_trades": [
            {
              "trade_id": "10366",
              "timestamp": "2026-04-13T07:59:57.418059",
              "price": 87.6,
              "size": 200.0,
              "notional": 17520.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 244590,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "10365",
              "timestamp": "2026-04-13T07:59:55.302931",
              "price": 87.55,
              "size": 200.0,
              "notional": 17510.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 244590,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "10364",
              "timestamp": "2026-04-13T07:59:54.910684",
              "price": 87.6,
              "size": 2000.0,
              "notional": 175200.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 244590,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "10363",
              "timestamp": "2026-04-13T07:59:54.910684",
              "price": 87.6,
              "size": 1000.0,
              "notional": 87600.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 244590,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "10362",
              "timestamp": "2026-04-13T07:59:53.640372",
              "price": 87.55,
              "size": 200.0,
              "notional": 17510.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 244590,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "10361",
              "timestamp": "2026-04-13T07:59:53.639657",
              "price": 87.55,
              "size": 200.0,
              "notional": 17510.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 244590,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "10360",
              "timestamp": "2026-04-13T07:59:50.046269",
              "price": 87.55,
              "size": 2000.0,
              "notional": 175100.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 244590,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "10359",
              "timestamp": "2026-04-13T07:59:50.046269",
              "price": 87.55,
              "size": 200.0,
              "notional": 17510.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 244590,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "10358",
              "timestamp": "2026-04-13T07:59:49.751682",
              "price": 87.55,
              "size": 200.0,
              "notional": 17510.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 244590,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "10357",
              "timestamp": "2026-04-13T07:59:48.751072",
              "price": 87.55,
              "size": 200.0,
              "notional": 17510.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 244590,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "10356",
              "timestamp": "2026-04-13T07:59:47.752033",
              "price": 87.55,
              "size": 200.0,
              "notional": 17510.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 244590,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "10355",
              "timestamp": "2026-04-13T07:59:46.751221",
              "price": 87.55,
              "size": 200.0,
              "notional": 17510.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 244590,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "10354",
              "timestamp": "2026-04-13T07:59:45.751539",
              "price": 87.55,
              "size": 200.0,
              "notional": 17510.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 244590,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "10353",
              "timestamp": "2026-04-13T07:59:44.956564",
              "price": 87.55,
              "size": 200.0,
              "notional": 17510.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 244590,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "10352",
              "timestamp": "2026-04-13T07:59:44.751132",
              "price": 87.55,
              "size": 200.0,
              "notional": 17510.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 244590,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "10351",
              "timestamp": "2026-04-13T07:59:43.751329",
              "price": 87.55,
              "size": 200.0,
              "notional": 17510.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 244590,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "10350",
              "timestamp": "2026-04-13T07:59:41.752003",
              "price": 87.55,
              "size": 200.0,
              "notional": 17510.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 244590,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "10349",
              "timestamp": "2026-04-13T07:59:40.750950",
              "price": 87.55,
              "size": 200.0,
              "notional": 17510.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 244590,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "10348",
              "timestamp": "2026-04-13T07:59:37.686670",
              "price": 87.65,
              "size": 200.0,
              "notional": 17530.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 244590,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "10347",
              "timestamp": "2026-04-13T07:59:36.853047",
              "price": 87.65,
              "size": 200.0,
              "notional": 17530.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 244590,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "10346",
              "timestamp": "2026-04-13T07:59:35.191939",
              "price": 87.65,
              "size": 200.0,
              "notional": 17530.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 244590,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "10345",
              "timestamp": "2026-04-13T07:59:35.191939",
              "price": 87.65,
              "size": 200.0,
              "notional": 17530.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 244590,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "10344",
              "timestamp": "2026-04-13T07:59:35.105679",
              "price": 87.55,
              "size": 200.0,
              "notional": 17510.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 244590,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "10343",
              "timestamp": "2026-04-13T07:59:35.070315",
              "price": 87.55,
              "size": 400.0,
              "notional": 35020.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 244590,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "10342",
              "timestamp": "2026-04-13T07:59:34.706791",
              "price": 87.65,
              "size": 400.0,
              "notional": 35060.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 244590,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "10341",
              "timestamp": "2026-04-13T07:59:34.706791",
              "price": 87.65,
              "size": 400.0,
              "notional": 35060.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 244590,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "10340",
              "timestamp": "2026-04-13T07:59:31.511358",
              "price": 87.65,
              "size": 200.0,
              "notional": 17530.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 244590,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "10339",
              "timestamp": "2026-04-13T07:59:31.511358",
              "price": 87.65,
              "size": 600.0,
              "notional": 52590.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 244590,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "10338",
              "timestamp": "2026-04-13T07:59:31.148505",
              "price": 87.65,
              "size": 200.0,
              "notional": 17530.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 244590,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "10337",
              "timestamp": "2026-04-13T07:59:31.031158",
              "price": 87.55,
              "size": 200.0,
              "notional": 17510.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 244590,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            }
          ],
          "peer_comparison": []
        },
        "6m": {
          "valid": true,
          "currency": "HKD",
          "n_trades": 1680923,
          "n_runs": 149089,
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
            "retail_pct": 0.011783407092412919,
            "mixed_pct": 0.0,
            "instit_pct": 0.6839813602407725,
            "ambiguous_pct": 0.25199845561039974,
            "unobservable_pct": 0.052236777056414836,
            "unclear_pct": 0.30423523266681457,
            "retail_qty_pct": 0.0035502483191255808,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.7899266115279954,
            "ambiguous_qty_pct": 0.17519318052147015,
            "unobservable_qty_pct": 0.03132995963140889,
            "unclear_qty_pct": 0.20652314015287904,
            "retail_notional_pct": 0.003686147655270005,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.7887227262240035,
            "ambiguous_notional_pct": 0.17649654058132025,
            "unobservable_notional_pct": 0.03109458553940633,
            "unclear_notional_pct": 0.20759112612072658
          },
          "run_composition": {
            "retail_pct": 0.061828840491250196,
            "mixed_pct": 0.0,
            "instit_pct": 0.1776522748157141,
            "ambiguous_pct": 0.4074948520682277,
            "unobservable_pct": 0.353024032624808,
            "unclear_pct": 0.7605188846930357,
            "retail_notional_pct": 0.003686147655270005,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.7887227262240035,
            "unclear_notional_pct": 0.20759112612072658
          },
          "counts": {
            "trades": {
              "retail": 19807,
              "mixed": 0,
              "institutional": 1149720,
              "ambiguous": 423590,
              "unobservable": 87806,
              "unclear": 511396
            },
            "runs": {
              "retail": 9218,
              "mixed": 0,
              "institutional": 26486,
              "ambiguous": 60753,
              "unobservable": 52632,
              "unclear": 113385
            }
          },
          "confidence": {
            "high": 0.02204723353164888,
            "medium": 0.18725727585536156,
            "low": 0.03017660591995385,
            "na": 0.7605188846930357
          },
          "confidence_counts": {
            "high": 3287,
            "medium": 27918,
            "low": 4499,
            "na": 113385
          },
          "trade_confidence": {
            "high": 0.10432958559077364,
            "medium": 0.5506885205330643,
            "low": 0.04074666120934748,
            "na": 0.3042352326668146
          },
          "trade_confidence_counts": {
            "high": 175370,
            "medium": 925665,
            "low": 68492,
            "na": 511396
          },
          "observability": {
            "avg_feature_coverage": 0.6553572027446694,
            "observable_run_pct": 0.646975967375192,
            "ambiguous_run_pct": 0.4074948520682277,
            "unobservable_run_pct": 0.353024032624808
          },
          "dominant_bucket": "AMBIGUOUS",
          "dominant_label": "Mixed, mostly unclassified",
          "dominant_share": 0.4074948520682277,
          "dominance_gap": 0.054470819443419694,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 1680923
            },
            "d2_information": {
              "UNOBSERVABLE": 1680923
            },
            "d3_urgency": {
              "IMMEDIATE": 113579,
              "ADAPTIVE": 35295,
              "SCHEDULED": 186,
              "OPPORTUNISTIC": 29
            },
            "participant_confidence": {
              "NA": 113385,
              "MEDIUM": 27918,
              "LOW": 4499,
              "HIGH": 3287
            }
          },
          "trade_size": {
            "avg": 106876.15283484074,
            "median": 36380.0
          },
          "run_size": {
            "avg": 1204988.8553253359,
            "median": 150120.4,
            "avg_length": 11.274627906820758
          },
          "recent_trades": [
            {
              "trade_id": "10366",
              "timestamp": "2026-04-13T07:59:57.418059",
              "price": 87.6,
              "size": 200.0,
              "notional": 17520.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 244590,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "10365",
              "timestamp": "2026-04-13T07:59:55.302931",
              "price": 87.55,
              "size": 200.0,
              "notional": 17510.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 244590,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "10364",
              "timestamp": "2026-04-13T07:59:54.910684",
              "price": 87.6,
              "size": 2000.0,
              "notional": 175200.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 244590,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "10363",
              "timestamp": "2026-04-13T07:59:54.910684",
              "price": 87.6,
              "size": 1000.0,
              "notional": 87600.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 244590,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "10362",
              "timestamp": "2026-04-13T07:59:53.640372",
              "price": 87.55,
              "size": 200.0,
              "notional": 17510.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 244590,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "10361",
              "timestamp": "2026-04-13T07:59:53.639657",
              "price": 87.55,
              "size": 200.0,
              "notional": 17510.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 244590,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "10360",
              "timestamp": "2026-04-13T07:59:50.046269",
              "price": 87.55,
              "size": 2000.0,
              "notional": 175100.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 244590,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "10359",
              "timestamp": "2026-04-13T07:59:50.046269",
              "price": 87.55,
              "size": 200.0,
              "notional": 17510.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 244590,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "10358",
              "timestamp": "2026-04-13T07:59:49.751682",
              "price": 87.55,
              "size": 200.0,
              "notional": 17510.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 244590,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "10357",
              "timestamp": "2026-04-13T07:59:48.751072",
              "price": 87.55,
              "size": 200.0,
              "notional": 17510.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 244590,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "10356",
              "timestamp": "2026-04-13T07:59:47.752033",
              "price": 87.55,
              "size": 200.0,
              "notional": 17510.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 244590,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "10355",
              "timestamp": "2026-04-13T07:59:46.751221",
              "price": 87.55,
              "size": 200.0,
              "notional": 17510.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 244590,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "10354",
              "timestamp": "2026-04-13T07:59:45.751539",
              "price": 87.55,
              "size": 200.0,
              "notional": 17510.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 244590,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "10353",
              "timestamp": "2026-04-13T07:59:44.956564",
              "price": 87.55,
              "size": 200.0,
              "notional": 17510.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 244590,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "10352",
              "timestamp": "2026-04-13T07:59:44.751132",
              "price": 87.55,
              "size": 200.0,
              "notional": 17510.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 244590,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "10351",
              "timestamp": "2026-04-13T07:59:43.751329",
              "price": 87.55,
              "size": 200.0,
              "notional": 17510.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 244590,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "10350",
              "timestamp": "2026-04-13T07:59:41.752003",
              "price": 87.55,
              "size": 200.0,
              "notional": 17510.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 244590,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "10349",
              "timestamp": "2026-04-13T07:59:40.750950",
              "price": 87.55,
              "size": 200.0,
              "notional": 17510.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 244590,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "10348",
              "timestamp": "2026-04-13T07:59:37.686670",
              "price": 87.65,
              "size": 200.0,
              "notional": 17530.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 244590,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "10347",
              "timestamp": "2026-04-13T07:59:36.853047",
              "price": 87.65,
              "size": 200.0,
              "notional": 17530.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 244590,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "10346",
              "timestamp": "2026-04-13T07:59:35.191939",
              "price": 87.65,
              "size": 200.0,
              "notional": 17530.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 244590,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "10345",
              "timestamp": "2026-04-13T07:59:35.191939",
              "price": 87.65,
              "size": 200.0,
              "notional": 17530.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 244590,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "10344",
              "timestamp": "2026-04-13T07:59:35.105679",
              "price": 87.55,
              "size": 200.0,
              "notional": 17510.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 244590,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "10343",
              "timestamp": "2026-04-13T07:59:35.070315",
              "price": 87.55,
              "size": 400.0,
              "notional": 35020.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 244590,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "10342",
              "timestamp": "2026-04-13T07:59:34.706791",
              "price": 87.65,
              "size": 400.0,
              "notional": 35060.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 244590,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "10341",
              "timestamp": "2026-04-13T07:59:34.706791",
              "price": 87.65,
              "size": 400.0,
              "notional": 35060.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 244590,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "10340",
              "timestamp": "2026-04-13T07:59:31.511358",
              "price": 87.65,
              "size": 200.0,
              "notional": 17530.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 244590,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "10339",
              "timestamp": "2026-04-13T07:59:31.511358",
              "price": 87.65,
              "size": 600.0,
              "notional": 52590.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 244590,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "10338",
              "timestamp": "2026-04-13T07:59:31.148505",
              "price": 87.65,
              "size": 200.0,
              "notional": 17530.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 244590,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            },
            {
              "trade_id": "10337",
              "timestamp": "2026-04-13T07:59:31.031158",
              "price": 87.55,
              "size": 200.0,
              "notional": 17510.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 244590,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "SCHEDULED"
            }
          ],
          "peer_comparison": []
        }
      },
      "valid": true,
      "currency": "HKD",
      "n_trades": 1680923,
      "n_runs": 149089,
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
        "retail_pct": 0.011783407092412919,
        "mixed_pct": 0.0,
        "instit_pct": 0.6839813602407725,
        "ambiguous_pct": 0.25199845561039974,
        "unobservable_pct": 0.052236777056414836,
        "unclear_pct": 0.30423523266681457,
        "retail_qty_pct": 0.0035502483191255808,
        "mixed_qty_pct": 0.0,
        "instit_qty_pct": 0.7899266115279954,
        "ambiguous_qty_pct": 0.17519318052147015,
        "unobservable_qty_pct": 0.03132995963140889,
        "unclear_qty_pct": 0.20652314015287904,
        "retail_notional_pct": 0.003686147655270005,
        "mixed_notional_pct": 0.0,
        "instit_notional_pct": 0.7887227262240035,
        "ambiguous_notional_pct": 0.17649654058132025,
        "unobservable_notional_pct": 0.03109458553940633,
        "unclear_notional_pct": 0.20759112612072658
      },
      "run_composition": {
        "retail_pct": 0.061828840491250196,
        "mixed_pct": 0.0,
        "instit_pct": 0.1776522748157141,
        "ambiguous_pct": 0.4074948520682277,
        "unobservable_pct": 0.353024032624808,
        "unclear_pct": 0.7605188846930357
      },
      "trade_size": {
        "avg": 106876.15283484074,
        "median": 36380.0
      },
      "run_size": {
        "avg": 1204988.8553253359,
        "median": 150120.4,
        "avg_length": 11.274627906820758
      },
      "confidence": {
        "high": 0.02204723353164888,
        "medium": 0.18725727585536156,
        "low": 0.03017660591995385,
        "na": 0.7605188846930357
      },
      "confidence_counts": {
        "high": 3287,
        "medium": 27918,
        "low": 4499,
        "na": 113385
      },
      "trade_confidence": {
        "high": 0.10432958559077364,
        "medium": 0.5506885205330643,
        "low": 0.04074666120934748,
        "na": 0.3042352326668146
      },
      "trade_confidence_counts": {
        "high": 175370,
        "medium": 925665,
        "low": 68492,
        "na": 511396
      },
      "counts": {
        "trades": {
          "retail": 19807,
          "mixed": 0,
          "institutional": 1149720,
          "ambiguous": 423590,
          "unobservable": 87806,
          "unclear": 511396
        },
        "runs": {
          "retail": 9218,
          "mixed": 0,
          "institutional": 26486,
          "ambiguous": 60753,
          "unobservable": 52632,
          "unclear": 113385
        }
      },
      "observability": {
        "avg_feature_coverage": 0.6553572027446694,
        "observable_run_pct": 0.646975967375192,
        "ambiguous_run_pct": 0.4074948520682277,
        "unobservable_run_pct": 0.353024032624808
      },
      "dominant_bucket": "AMBIGUOUS",
      "dominant_label": "Mixed, mostly unclassified",
      "dominant_share": 0.4074948520682277,
      "dominance_gap": 0.054470819443419694,
      "over_time": {
        "valid": true,
        "periods": [
          {
            "month": "2025-11",
            "n_trades": 267252,
            "n_runs": 24254,
            "retail_pct": 0.006873662311226857,
            "mixed_pct": 0.0,
            "instit_pct": 0.7181798452396989,
            "ambiguous_pct": 0.21753625791387904,
            "unobservable_pct": 0.05741023453519525,
            "unclear_pct": 0.27494649244907426,
            "avg_trade_size": 108537.84883075523,
            "avg_run_notional": 1195965.9097764082,
            "retail_qty_pct": 0.001570456778752304,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.826590399544855,
            "ambiguous_qty_pct": 0.13762013359013184,
            "unobservable_qty_pct": 0.03421901008626084,
            "unclear_qty_pct": 0.1718391436763927,
            "retail_notional_pct": 0.001569352045243428,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.826567885680941,
            "ambiguous_notional_pct": 0.1375125281777648,
            "unobservable_notional_pct": 0.03435023409605082,
            "unclear_notional_pct": 0.1718627622738156,
            "run_retail_pct": 0.032654407520409004,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.1873093098045683,
            "run_ambiguous_pct": 0.3991094252494434,
            "run_unobservable_pct": 0.3809268574255793,
            "run_unclear_pct": 0.7800362826750227,
            "avg_feature_coverage": 0.6428568483549105,
            "high_confidence_pct": 0.012410324070256452,
            "medium_confidence_pct": 0.18937082543085676,
            "low_confidence_pct": 0.018182567823864106,
            "na_confidence_pct": 0.7800362826750227,
            "total_quantity": null
          },
          {
            "month": "2025-12",
            "n_trades": 150012,
            "n_runs": 16233,
            "retail_pct": 0.006086179772284884,
            "mixed_pct": 0.0,
            "instit_pct": 0.6792389942137962,
            "ambiguous_pct": 0.24072074234061275,
            "unobservable_pct": 0.07395408367330614,
            "unclear_pct": 0.3146748260139189,
            "avg_trade_size": 94844.41952876435,
            "avg_run_notional": 876473.9150094868,
            "retail_qty_pct": 0.0018077717243607846,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.7844791669554687,
            "ambiguous_qty_pct": 0.16579012481963898,
            "unobservable_qty_pct": 0.0479229365005315,
            "unclear_qty_pct": 0.21371306132017048,
            "retail_notional_pct": 0.0018370758865308952,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.7843051504580616,
            "ambiguous_notional_pct": 0.1657633423471991,
            "unobservable_notional_pct": 0.048094431308208514,
            "unclear_notional_pct": 0.21385777365540762,
            "run_retail_pct": 0.021869032218320705,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.18135896014291875,
            "run_ambiguous_pct": 0.38544939321135957,
            "run_unobservable_pct": 0.411322614427401,
            "run_unclear_pct": 0.7967720076387605,
            "avg_feature_coverage": 0.6383016078358899,
            "high_confidence_pct": 0.02605802993901312,
            "medium_confidence_pct": 0.1694079960574139,
            "low_confidence_pct": 0.007761966364812419,
            "na_confidence_pct": 0.7967720076387605,
            "total_quantity": null
          },
          {
            "month": "2026-01",
            "n_trades": 276840,
            "n_runs": 24854,
            "retail_pct": 0.007932379713914174,
            "mixed_pct": 0.0,
            "instit_pct": 0.6777958387516255,
            "ambiguous_pct": 0.2564008091316284,
            "unobservable_pct": 0.05787097240283196,
            "unclear_pct": 0.31427178153446034,
            "avg_trade_size": 103270.70306144343,
            "avg_run_notional": 1150296.1871541804,
            "retail_qty_pct": 0.0018628149330495573,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.771646454744897,
            "ambiguous_qty_pct": 0.18866117473556512,
            "unobservable_qty_pct": 0.037829555586488324,
            "unclear_qty_pct": 0.22649073032205344,
            "retail_notional_pct": 0.001867314603683101,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.7718243341541958,
            "ambiguous_notional_pct": 0.18884020031995102,
            "unobservable_notional_pct": 0.03746815092217011,
            "unclear_notional_pct": 0.22630835124212112,
            "run_retail_pct": 0.039390037820873906,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.17976985595879938,
            "run_ambiguous_pct": 0.4093506075480808,
            "run_unobservable_pct": 0.3714894986722459,
            "run_unclear_pct": 0.7808401062203267,
            "avg_feature_coverage": 0.6442765751991631,
            "high_confidence_pct": 0.007966524503098094,
            "medium_confidence_pct": 0.19831817816045708,
            "low_confidence_pct": 0.01287519111611813,
            "na_confidence_pct": 0.7808401062203267,
            "total_quantity": null
          },
          {
            "month": "2026-02",
            "n_trades": 237706,
            "n_runs": 20712,
            "retail_pct": 0.006684728193650981,
            "mixed_pct": 0.0,
            "instit_pct": 0.7087915323971629,
            "ambiguous_pct": 0.23640547567162798,
            "unobservable_pct": 0.04811826373755816,
            "unclear_pct": 0.2845237394091861,
            "avg_trade_size": 114485.08673344382,
            "avg_run_notional": 1313914.253913673,
            "retail_qty_pct": 0.001697298401704876,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.8182220767444152,
            "ambiguous_qty_pct": 0.1562434791602848,
            "unobservable_qty_pct": 0.0238371456935952,
            "unclear_qty_pct": 0.18008062485388,
            "retail_notional_pct": 0.0016539129712333039,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.8183105774201375,
            "ambiguous_notional_pct": 0.156014497500137,
            "unobservable_notional_pct": 0.024021012108492317,
            "unclear_notional_pct": 0.1800355096086293,
            "run_retail_pct": 0.03273464658169177,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.18679992275009658,
            "run_ambiguous_pct": 0.4167149478563152,
            "run_unobservable_pct": 0.3637504828118965,
            "run_unclear_pct": 0.7804654306682117,
            "avg_feature_coverage": 0.6454325994592507,
            "high_confidence_pct": 0.016801853997682505,
            "medium_confidence_pct": 0.186655079181151,
            "low_confidence_pct": 0.016077636152954808,
            "na_confidence_pct": 0.7804654306682116,
            "total_quantity": null
          },
          {
            "month": "2026-03",
            "n_trades": 371997,
            "n_runs": 27671,
            "retail_pct": 0.020107689040503016,
            "mixed_pct": 0.0,
            "instit_pct": 0.6550859281123235,
            "ambiguous_pct": 0.2886689946424299,
            "unobservable_pct": 0.03613738820474359,
            "unclear_pct": 0.3248063828471735,
            "avg_trade_size": 102603.59494541085,
            "avg_run_notional": 1379358.5164579523,
            "retail_qty_pct": 0.007045276706806998,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.7576390589403058,
            "ambiguous_qty_pct": 0.2136006904182554,
            "unobservable_qty_pct": 0.021714973934631825,
            "unclear_qty_pct": 0.23531566435288723,
            "retail_notional_pct": 0.007111342234112592,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.7569891085814379,
            "ambiguous_notional_pct": 0.21412231642608934,
            "unobservable_notional_pct": 0.021777232758360153,
            "unclear_notional_pct": 0.2358995491844495,
            "run_retail_pct": 0.11853565104260778,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.16797369086769542,
            "run_ambiguous_pct": 0.4343536554515558,
            "run_unobservable_pct": 0.279137002638141,
            "run_unclear_pct": 0.7134906580896968,
            "avg_feature_coverage": 0.6808698637562791,
            "high_confidence_pct": 0.021394239456470673,
            "medium_confidence_pct": 0.2003541613964078,
            "low_confidence_pct": 0.06476094105742473,
            "na_confidence_pct": 0.7134906580896968,
            "total_quantity": null
          },
          {
            "month": "2026-04",
            "n_trades": 82087,
            "n_runs": 7566,
            "retail_pct": 0.050202833579007636,
            "mixed_pct": 0.0,
            "instit_pct": 0.5825161109554498,
            "ambiguous_pct": 0.3437937797702438,
            "unobservable_pct": 0.02348727569529889,
            "unclear_pct": 0.3672810554655427,
            "avg_trade_size": 110479.85892955036,
            "avg_run_notional": 1198646.6005749407,
            "retail_qty_pct": 0.02019497198745285,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.6854296301022018,
            "ambiguous_qty_pct": 0.27949928373091754,
            "unobservable_qty_pct": 0.014876114179427781,
            "unclear_qty_pct": 0.29437539791034534,
            "retail_notional_pct": 0.02021358008664348,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.6858418270786025,
            "ambiguous_notional_pct": 0.27908968539477635,
            "unobservable_notional_pct": 0.014854907439977617,
            "unclear_notional_pct": 0.293944592834754,
            "run_retail_pct": 0.31509384086703673,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.12926249008723237,
            "run_ambiguous_pct": 0.41554321966693103,
            "run_unobservable_pct": 0.1401004493787999,
            "run_unclear_pct": 0.5556436690457309,
            "avg_feature_coverage": 0.759635210150674,
            "high_confidence_pct": 0.09463388844832143,
            "medium_confidence_pct": 0.19561194818926778,
            "low_confidence_pct": 0.1541104943166799,
            "na_confidence_pct": 0.5556436690457309,
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
          "trade_id": "10366",
          "timestamp": "2026-04-13T07:59:57.418059",
          "price": 87.6,
          "size": 200.0,
          "notional": 17520.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 244590,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "SCHEDULED"
        },
        {
          "trade_id": "10365",
          "timestamp": "2026-04-13T07:59:55.302931",
          "price": 87.55,
          "size": 200.0,
          "notional": 17510.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 244590,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "SCHEDULED"
        },
        {
          "trade_id": "10364",
          "timestamp": "2026-04-13T07:59:54.910684",
          "price": 87.6,
          "size": 2000.0,
          "notional": 175200.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 244590,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "SCHEDULED"
        },
        {
          "trade_id": "10363",
          "timestamp": "2026-04-13T07:59:54.910684",
          "price": 87.6,
          "size": 1000.0,
          "notional": 87600.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 244590,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "SCHEDULED"
        },
        {
          "trade_id": "10362",
          "timestamp": "2026-04-13T07:59:53.640372",
          "price": 87.55,
          "size": 200.0,
          "notional": 17510.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 244590,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "SCHEDULED"
        },
        {
          "trade_id": "10361",
          "timestamp": "2026-04-13T07:59:53.639657",
          "price": 87.55,
          "size": 200.0,
          "notional": 17510.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 244590,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "SCHEDULED"
        },
        {
          "trade_id": "10360",
          "timestamp": "2026-04-13T07:59:50.046269",
          "price": 87.55,
          "size": 2000.0,
          "notional": 175100.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 244590,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "SCHEDULED"
        },
        {
          "trade_id": "10359",
          "timestamp": "2026-04-13T07:59:50.046269",
          "price": 87.55,
          "size": 200.0,
          "notional": 17510.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 244590,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "SCHEDULED"
        },
        {
          "trade_id": "10358",
          "timestamp": "2026-04-13T07:59:49.751682",
          "price": 87.55,
          "size": 200.0,
          "notional": 17510.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 244590,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "SCHEDULED"
        },
        {
          "trade_id": "10357",
          "timestamp": "2026-04-13T07:59:48.751072",
          "price": 87.55,
          "size": 200.0,
          "notional": 17510.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 244590,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "SCHEDULED"
        },
        {
          "trade_id": "10356",
          "timestamp": "2026-04-13T07:59:47.752033",
          "price": 87.55,
          "size": 200.0,
          "notional": 17510.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 244590,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "SCHEDULED"
        },
        {
          "trade_id": "10355",
          "timestamp": "2026-04-13T07:59:46.751221",
          "price": 87.55,
          "size": 200.0,
          "notional": 17510.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 244590,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "SCHEDULED"
        },
        {
          "trade_id": "10354",
          "timestamp": "2026-04-13T07:59:45.751539",
          "price": 87.55,
          "size": 200.0,
          "notional": 17510.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 244590,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "SCHEDULED"
        },
        {
          "trade_id": "10353",
          "timestamp": "2026-04-13T07:59:44.956564",
          "price": 87.55,
          "size": 200.0,
          "notional": 17510.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 244590,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "SCHEDULED"
        },
        {
          "trade_id": "10352",
          "timestamp": "2026-04-13T07:59:44.751132",
          "price": 87.55,
          "size": 200.0,
          "notional": 17510.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 244590,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "SCHEDULED"
        },
        {
          "trade_id": "10351",
          "timestamp": "2026-04-13T07:59:43.751329",
          "price": 87.55,
          "size": 200.0,
          "notional": 17510.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 244590,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "SCHEDULED"
        },
        {
          "trade_id": "10350",
          "timestamp": "2026-04-13T07:59:41.752003",
          "price": 87.55,
          "size": 200.0,
          "notional": 17510.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 244590,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "SCHEDULED"
        },
        {
          "trade_id": "10349",
          "timestamp": "2026-04-13T07:59:40.750950",
          "price": 87.55,
          "size": 200.0,
          "notional": 17510.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 244590,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "SCHEDULED"
        },
        {
          "trade_id": "10348",
          "timestamp": "2026-04-13T07:59:37.686670",
          "price": 87.65,
          "size": 200.0,
          "notional": 17530.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 244590,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "SCHEDULED"
        },
        {
          "trade_id": "10347",
          "timestamp": "2026-04-13T07:59:36.853047",
          "price": 87.65,
          "size": 200.0,
          "notional": 17530.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 244590,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "SCHEDULED"
        },
        {
          "trade_id": "10346",
          "timestamp": "2026-04-13T07:59:35.191939",
          "price": 87.65,
          "size": 200.0,
          "notional": 17530.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 244590,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "SCHEDULED"
        },
        {
          "trade_id": "10345",
          "timestamp": "2026-04-13T07:59:35.191939",
          "price": 87.65,
          "size": 200.0,
          "notional": 17530.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 244590,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "SCHEDULED"
        },
        {
          "trade_id": "10344",
          "timestamp": "2026-04-13T07:59:35.105679",
          "price": 87.55,
          "size": 200.0,
          "notional": 17510.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 244590,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "SCHEDULED"
        },
        {
          "trade_id": "10343",
          "timestamp": "2026-04-13T07:59:35.070315",
          "price": 87.55,
          "size": 400.0,
          "notional": 35020.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 244590,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "SCHEDULED"
        },
        {
          "trade_id": "10342",
          "timestamp": "2026-04-13T07:59:34.706791",
          "price": 87.65,
          "size": 400.0,
          "notional": 35060.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 244590,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "SCHEDULED"
        },
        {
          "trade_id": "10341",
          "timestamp": "2026-04-13T07:59:34.706791",
          "price": 87.65,
          "size": 400.0,
          "notional": 35060.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 244590,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "SCHEDULED"
        },
        {
          "trade_id": "10340",
          "timestamp": "2026-04-13T07:59:31.511358",
          "price": 87.65,
          "size": 200.0,
          "notional": 17530.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 244590,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "SCHEDULED"
        },
        {
          "trade_id": "10339",
          "timestamp": "2026-04-13T07:59:31.511358",
          "price": 87.65,
          "size": 600.0,
          "notional": 52590.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 244590,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "SCHEDULED"
        },
        {
          "trade_id": "10338",
          "timestamp": "2026-04-13T07:59:31.148505",
          "price": 87.65,
          "size": 200.0,
          "notional": 17530.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 244590,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "SCHEDULED"
        },
        {
          "trade_id": "10337",
          "timestamp": "2026-04-13T07:59:31.031158",
          "price": 87.55,
          "size": 200.0,
          "notional": 17510.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 244590,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "SCHEDULED"
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
      "total_trades": 1680922,
      "price_moving_trades": 256619,
      "pct_price_moving": 15.266562041546248,
      "all_movers": {
        "count": 256619,
        "avg_size": 86982.4075610886,
        "median_size": 34080.0,
        "retail_count": 6722,
        "mixed_count": 0,
        "institutional_count": 147623,
        "ambiguous_count": 81033,
        "unobservable_count": 21241,
        "retail_pct": 2.619447507783913,
        "mixed_pct": 0.0,
        "instit_pct": 57.52613797107775,
        "unclear_pct": 39.854414521138345
      },
      "positive_movers": {
        "count": 128180,
        "avg_size": 89603.28398289905,
        "median_size": 34440.0,
        "retail_count": 2760,
        "mixed_count": 0,
        "institutional_count": 74388,
        "ambiguous_count": 40130,
        "unobservable_count": 10902,
        "retail_pct": 2.1532220315181774,
        "mixed_pct": 0.0,
        "instit_pct": 58.03401466687471,
        "unclear_pct": 39.81276330160712
      },
      "negative_movers": {
        "count": 128439,
        "avg_size": 84366.81619283084,
        "median_size": 33620.0,
        "retail_count": 3962,
        "mixed_count": 0,
        "institutional_count": 73235,
        "ambiguous_count": 40903,
        "unobservable_count": 10339,
        "retail_pct": 3.0847328303708377,
        "mixed_pct": 0.0,
        "instit_pct": 57.01928541953768,
        "unclear_pct": 39.89598175009149
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
          "opening": 0.06867368471055016,
          "continuous": 0.6548767190141929,
          "closing": 0.19651980515712458,
          "auctions": 0.26519348986767477,
          "other": 0.07992979111813234
        },
        "1M": {
          "opening": 0.06436173579386678,
          "continuous": 0.6728692915768086,
          "closing": 0.1822943111565508,
          "auctions": 0.24665604695041757,
          "other": 0.08047466147277384
        },
        "3M": {
          "opening": 0.06670809398741503,
          "continuous": 0.6388633803370075,
          "closing": 0.16812326567252014,
          "auctions": 0.23483135965993518,
          "other": 0.12630526000305736
        },
        "6M": {
          "opening": 0.06854493649988211,
          "continuous": 0.6472517070495212,
          "closing": 0.17121413465110344,
          "auctions": 0.23975907115098555,
          "other": 0.11298922179949335
        }
      },
      "hhi": {
        "1D": 0.12119045146375007,
        "1M": 0.11731892951978055,
        "3M": 0.1204327587869724,
        "6M": 0.12086257828629232
      },
      "profile_buckets": [
        {
          "time": "09:00",
          "avg_share": 0.111
        },
        {
          "time": "09:30",
          "avg_share": 0.1351
        },
        {
          "time": "10:00",
          "avg_share": 0.0611
        },
        {
          "time": "10:30",
          "avg_share": 0.049
        },
        {
          "time": "11:00",
          "avg_share": 0.0389
        },
        {
          "time": "11:30",
          "avg_share": 0.0287
        },
        {
          "time": "12:00",
          "avg_share": 0.1169
        },
        {
          "time": "13:00",
          "avg_share": 0.0478
        },
        {
          "time": "13:30",
          "avg_share": 0.0359
        },
        {
          "time": "14:00",
          "avg_share": 0.0352
        },
        {
          "time": "14:30",
          "avg_share": 0.0382
        },
        {
          "time": "15:00",
          "avg_share": 0.051
        },
        {
          "time": "15:30",
          "avg_share": 0.1013
        },
        {
          "time": "16:00",
          "avg_share": 0.1498
        }
      ],
      "peers_hhi_rows": [
        {
          "ticker": "1299",
          "auctions_pct": 23.31878319673527,
          "hhi": 0.11954769434937479,
          "interp": {
            "text": "Spread out",
            "cls": "bg-emerald-500/20 text-emerald-400",
            "you": true
          }
        },
        {
          "ticker": "2318",
          "auctions_pct": 9.069302431801479,
          "hhi": 0.10508271780515757,
          "interp": {
            "text": "Spread out",
            "cls": "bg-emerald-500/20 text-emerald-400"
          }
        },
        {
          "ticker": "2628",
          "auctions_pct": 5.764978723639178,
          "hhi": 0.11603723989307202,
          "interp": {
            "text": "Spread out",
            "cls": "bg-emerald-500/20 text-emerald-400"
          }
        },
        {
          "ticker": "2328",
          "auctions_pct": 10.88536169022625,
          "hhi": 0.11429688702643341,
          "interp": {
            "text": "Spread out",
            "cls": "bg-emerald-500/20 text-emerald-400"
          }
        },
        {
          "ticker": "2601",
          "auctions_pct": 6.068549808506246,
          "hhi": 0.10966512850361729,
          "interp": {
            "text": "Spread out",
            "cls": "bg-emerald-500/20 text-emerald-400"
          }
        },
        {
          "ticker": "1336",
          "auctions_pct": 3.957995222394664,
          "hhi": 0.12057818075129281,
          "interp": {
            "text": "Spread out",
            "cls": "bg-emerald-500/20 text-emerald-400"
          }
        },
        {
          "ticker": "1339",
          "auctions_pct": 6.759560653355454,
          "hhi": 0.11760887979647165,
          "interp": {
            "text": "Spread out",
            "cls": "bg-emerald-500/20 text-emerald-400"
          }
        },
        {
          "ticker": "966",
          "auctions_pct": 4.431432295197596,
          "hhi": 0.11585861343047182,
          "interp": {
            "text": "Spread out",
            "cls": "bg-emerald-500/20 text-emerald-400"
          }
        },
        {
          "ticker": "6060",
          "auctions_pct": 3.6441362319826713,
          "hhi": 0.1239566473777206,
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
