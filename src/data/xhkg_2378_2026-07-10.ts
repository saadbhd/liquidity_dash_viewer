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
      "ticker": "2378",
      "name": "PRU",
      "marketCap": 274114927086.0,
      "sector": "Insurance",
      "industry": "Financials - Insurance"
    },
    {
      "ticker": "2601",
      "name": "CPIC",
      "marketCap": 76043220000.0,
      "sector": "Insurance",
      "industry": "Financials - Insurance"
    },
    {
      "ticker": "1299",
      "name": "AIA",
      "marketCap": 751683749805.5,
      "sector": "Insurance",
      "industry": "Financials - Insurance"
    },
    {
      "ticker": "945",
      "name": "MANULIFE-S",
      "marketCap": 541011071104.0,
      "sector": "Insurance",
      "industry": "Financials - Insurance"
    },
    {
      "ticker": "1828",
      "name": "FWD",
      "marketCap": 37109040204.0,
      "sector": "Insurance",
      "industry": "Financials - Insurance"
    }
  ]
};

export const REPORT_DATA: ReportData = {
  "meta": {
    "market": "XHKG",
    "currency": "HKD",
    "ticker": "2378",
    "company": "PRU",
    "asof_date": "2026-07-10",
    "industry": "Financials - Insurance",
    "sector": "Insurance",
    "market_cap_display": "274.1B",
    "market_cap_category": "large",
    "universe_total": 2564,
    "peers_count": 4,
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
          "score_pca": 69.38377535101404,
          "score_pca_percentile": 69.38377535101404,
          "rank_pca": 786,
          "total": 2564,
          "adv_notional_sgd": 18045300.0,
          "adv_volume_shares": 165250.0,
          "free_float_shares": 2557509480.0,
          "turnover_ratio": 6.461364123662994e-05,
          "votes": 817.0,
          "trades": 817.0,
          "spread_pct": 0.002853328040399479,
          "spread_ticks": 3.099049371358479,
          "amihud": 1.672938618104604e-09,
          "volatility": 0.2286769713959769
        },
        "pca": {
          "valid": true,
          "window_days": 1,
          "variance_explained": 0.5488198737045598,
          "loadings": {
            "log_adv": 0.5354965741393368,
            "log_trades": 0.5003884704043069,
            "log_turnover": 0.5041835224483527,
            "neg_spread": 0.38038145573919546,
            "neg_amihud": 0.03798764214413727,
            "neg_vol": -0.25004131785987466
          }
        },
        "data_quality": {
          "turnover_ratio": {
            "valid": true,
            "reason": null
          }
        },
        "peer_summary": {
          "n_peers": 4,
          "peer_median_adv": 97178871.39999999,
          "peer_median_score_pca": 84.301872074883,
          "peer_median_trades": 4876.0,
          "peer_median_volatility": 0.28432101726833514,
          "peer_median_spread_pct": 0.0017971417341839189,
          "peer_median_spread_ticks": 2.5553507548338157,
          "peer_median_amihud": 1.5344882063569454e-10,
          "peer_median_turnover_ratio": 0.002196985452887039,
          "target_vs_peer": {
            "score_pca_delta": -14.92,
            "adv_delta_pct": -81.4,
            "trades_delta_pct": -83.24,
            "volatility_delta_pct": 19.57,
            "spread_pct_delta_pct": -58.77,
            "spread_ticks_delta_pct": 21.28,
            "amihud_delta_pct": -990.23,
            "turnover_ratio_delta_pct": -97.06
          }
        },
        "peer_liquidity": [
          {
            "ticker": "2378",
            "score_pca": 69.38377535101404,
            "rank_pca": 786,
            "adv": 18045300.0,
            "trades": 817.0,
            "volatility": 0.2286769713959769,
            "spread_pct": 0.002853328040399479,
            "spread_ticks": 3.099049371358479,
            "amihud": 1.672938618104604e-09,
            "turnover_ratio": 6.461364123662994e-05,
            "is_target": true,
            "company_name": "PRU",
            "label": "PRU (2378)"
          },
          {
            "ticker": "2601",
            "score_pca": 90.6396255850234,
            "rank_pca": 241,
            "adv": 180637842.79999998,
            "trades": 7994.0,
            "volatility": 0.2564630852788712,
            "spread_pct": 0.0013880420940398316,
            "spread_ticks": 1.9120559114735003,
            "amihud": 4.043782734542399e-12,
            "turnover_ratio": 0.0031445169261937636,
            "is_target": false,
            "company_name": "CPIC",
            "label": "CPIC (2601)"
          },
          {
            "ticker": "1299",
            "score_pca": 95.55382215288611,
            "rank_pca": 115,
            "adv": 1861841798.1000001,
            "trades": 14097.0,
            "volatility": 0.31217894925779915,
            "spread_pct": 0.0007397682067376132,
            "spread_ticks": 1.0876543593890946,
            "amihud": 2.600081559307664e-12,
            "turnover_ratio": 0.0026656023903384772,
            "is_target": false,
            "company_name": "AIA",
            "label": "AIA (1299)"
          },
          {
            "ticker": "945",
            "score_pca": 58.38533541341654,
            "rank_pca": 1068,
            "adv": 8509760.0,
            "trades": 120.0,
            "volatility": 0.05881334854152028,
            "spread_pct": 0.0035276719358920874,
            "spread_ticks": 5.718631178707224,
            "amihud": 1.837275285358533e-09,
            "turnover_ratio": 1.533936557124034e-05,
            "is_target": false,
            "company_name": "MANULIFE-S",
            "label": "MANULIFE-S (945)"
          },
          {
            "ticker": "1828",
            "score_pca": 77.96411856474259,
            "rank_pca": 566,
            "adv": 13719900.0,
            "trades": 1758.0,
            "volatility": 0.32764783225337946,
            "spread_pct": 0.002206241374328006,
            "spread_ticks": 3.198645598194131,
            "amihud": 3.028538585368467e-10,
            "turnover_ratio": 0.0017283685154356003,
            "is_target": false,
            "company_name": "FWD",
            "label": "FWD (1828)"
          }
        ],
        "market_comparison": {
          "sector_name": "Insurance",
          "sector_count": 21,
          "market_count": 2564,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.5128883113837529,
              "median": 0.3368551800081968,
              "min": 0.0,
              "max": 11.943358028156938,
              "p5": 0.0,
              "p95": 1.666983221835253,
              "count": 2564
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 83821478.27376848,
              "median": 162393.0,
              "min": 0.0,
              "max": 18608187000.0,
              "p5": 0.0,
              "p95": 256889212.61949962,
              "count": 2564
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.05791656250039184,
              "median": 0.032209224739699394,
              "min": 0.0004762617797187049,
              "max": 0.9593495934959348,
              "p5": 0.0015340050254407454,
              "p95": 0.1931328784707857,
              "count": 2564
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.006569886400035236,
              "median": 0.0007542110193812434,
              "min": 0.0,
              "max": 0.5116441198977938,
              "p5": 0.0,
              "p95": 0.025495382165765197,
              "count": 2545
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 6.706577021058376e-06,
              "median": 5.636426081047189e-09,
              "min": 0.0,
              "max": 0.005761316872427985,
              "p5": 0.0,
              "p95": 8.637584953374427e-06,
              "count": 2115
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1379.2113884555383,
              "median": 19.0,
              "min": 0.0,
              "max": 112961.0,
              "p5": 0.0,
              "p95": 6791.04999999999,
              "count": 2564
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.3830204426781931,
              "median": 0.2564630852788712,
              "min": 0.0,
              "max": 1.8957672440241442,
              "p5": 0.0,
              "p95": 1.5303063507521248,
              "count": 21
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 272945378.8921567,
              "median": 18045300.0,
              "min": 0.0,
              "max": 1861841798.1000001,
              "p5": 52160.0,
              "p95": 1398796564.6499999,
              "count": 21
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.019991126800660692,
              "median": 0.002389707993899826,
              "min": 0.0007397682067376132,
              "max": 0.16816700127366538,
              "p5": 0.0008410444070973238,
              "p95": 0.11941433732648789,
              "count": 21
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0029170288124405848,
              "median": 0.0026013439036452657,
              "min": 0.0,
              "max": 0.009004663779874562,
              "p5": 1.4561839754484053e-07,
              "p95": 0.007428071677111913,
              "count": 21
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.4680527055612384e-08,
              "median": 1.2372130435428582e-10,
              "min": 0.0,
              "max": 2.774415727380108e-07,
              "p5": 0.0,
              "p95": 2.2958368588408355e-08,
              "count": 20
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 4290.714285714285,
              "median": 1758.0,
              "min": 0.0,
              "max": 14097.0,
              "p5": 1.0,
              "p95": 13711.0,
              "count": 21
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 516177325.225,
              "median": 97178871.39999999,
              "min": 8509760.0,
              "max": 1861841798.1000001,
              "p5": 9291281.0,
              "p95": 1609661204.8049996,
              "count": 4
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 5992.25,
              "median": 4876.0,
              "min": 120.0,
              "max": 14097.0,
              "p5": 365.70000000000005,
              "p95": 13181.549999999997,
              "count": 4
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.2387758038328925,
              "median": 0.28432101726833514,
              "min": 0.05881334854152028,
              "max": 0.32764783225337946,
              "p5": 0.08846080905212292,
              "p95": 0.3253274998040424,
              "count": 4
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.0019654309027493846,
              "median": 0.0017971417341839189,
              "min": 0.0007397682067376132,
              "max": 0.0035276719358920874,
              "p5": 0.0008370092898329459,
              "p95": 0.0033294573516574745,
              "count": 4
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 2.979246761940988,
              "median": 2.5553507548338157,
              "min": 1.0876543593890946,
              "max": 5.718631178707224,
              "p5": 1.2113145922017554,
              "p95": 5.34063334163026,
              "count": 4
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 5.366932520473074e-10,
              "median": 1.5344882063569454e-10,
              "min": 2.600081559307664e-12,
              "max": 1.837275285358533e-09,
              "p5": 2.8166367355928742e-12,
              "p95": 1.6071120713352796e-09,
              "count": 4
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0018884567993847703,
              "median": 0.002196985452887039,
              "min": 1.533936557124034e-05,
              "max": 0.0031445169261937636,
              "p5": 0.0002722937380508944,
              "p95": 0.0030726797458154706,
              "count": 4
            }
          },
          "returns": {
            "window_days": 1,
            "n_obs": 1,
            "stock": 0.030188679245283012,
            "market": 0.0019330386452445225,
            "sector": 0.0,
            "peers": 0.004498032589663747,
            "vs_market": 0.02825564060003849,
            "vs_sector": 0.030188679245283012,
            "vs_peers": 0.025690646655619265,
            "peer_rows": [
              {
                "listing_id": 534129733,
                "name": "PRU",
                "stock_code": "2378",
                "ticker": "2378",
                "return": 0.030188679245283012,
                "n_obs": 1,
                "is_target": true
              },
              {
                "listing_id": 534129636,
                "name": "CPIC",
                "stock_code": "2601",
                "ticker": "2601",
                "return": 0.0007304601899196239,
                "n_obs": 1,
                "is_target": false
              },
              {
                "listing_id": 534130087,
                "name": "AIA",
                "stock_code": "1299",
                "ticker": "1299",
                "return": 0.004840940525588033,
                "n_obs": 1,
                "is_target": false
              },
              {
                "listing_id": 534130284,
                "name": "MANULIFE-S",
                "stock_code": "945",
                "ticker": "945",
                "return": 0.01563477173233263,
                "n_obs": 1,
                "is_target": false
              },
              {
                "listing_id": 772037047,
                "name": "FWD",
                "stock_code": "1828",
                "ticker": "1828",
                "return": 0.0041551246537396835,
                "n_obs": 1,
                "is_target": false
              }
            ]
          }
        }
      },
      "1w": {
        "label": "1W",
        "window_days": 5,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 5,
          "score_pca": 68.29173166926678,
          "score_pca_percentile": 68.29173166926678,
          "rank_pca": 814,
          "total": 2564,
          "adv_notional_sgd": 8618130.0,
          "adv_volume_shares": 79650.0,
          "free_float_shares": 2557509480.0,
          "turnover_ratio": 3.1143579573359e-05,
          "votes": 246.0,
          "trades": 246.0,
          "spread_pct": 0.003503653608816688,
          "spread_ticks": 3.7777777777777777,
          "amihud": 1.672938618104604e-09,
          "volatility": 0.2778564482152027
        },
        "pca": {
          "valid": true,
          "window_days": 5,
          "variance_explained": 0.5510002059836978,
          "loadings": {
            "log_adv": 0.5362277084554651,
            "log_trades": 0.49646864536124835,
            "log_turnover": 0.49825170797870966,
            "neg_spread": 0.4405152211964971,
            "neg_amihud": 0.1537514334889001,
            "neg_vol": 0.00554986021230559
          }
        },
        "data_quality": {
          "turnover_ratio": {
            "valid": true,
            "reason": null
          }
        },
        "peer_summary": {
          "n_peers": 4,
          "peer_median_adv": 130635516.93,
          "peer_median_score_pca": 86.83697347893916,
          "peer_median_trades": 4663.0,
          "peer_median_volatility": 0.2878924301278054,
          "peer_median_spread_pct": 0.0018768944834155919,
          "peer_median_spread_ticks": 2.6645518285000613,
          "peer_median_amihud": 3.7899613685953757e-10,
          "peer_median_turnover_ratio": 0.0019346889072006119,
          "target_vs_peer": {
            "score_pca_delta": -18.55,
            "adv_delta_pct": -93.4,
            "trades_delta_pct": -94.72,
            "volatility_delta_pct": 3.49,
            "spread_pct_delta_pct": -86.67,
            "spread_ticks_delta_pct": 41.78,
            "amihud_delta_pct": -341.41,
            "turnover_ratio_delta_pct": -98.39
          }
        },
        "peer_liquidity": [
          {
            "ticker": "2378",
            "score_pca": 68.29173166926678,
            "rank_pca": 814,
            "adv": 8618130.0,
            "trades": 246.0,
            "volatility": 0.2778564482152027,
            "spread_pct": 0.003503653608816688,
            "spread_ticks": 3.7777777777777777,
            "amihud": 1.672938618104604e-09,
            "turnover_ratio": 3.1143579573359e-05,
            "is_target": true,
            "company_name": "PRU",
            "label": "PRU (2378)"
          },
          {
            "ticker": "2601",
            "score_pca": 94.22776911076443,
            "rank_pca": 149,
            "adv": 250964595.86,
            "trades": 7994.0,
            "volatility": 0.316781915401242,
            "spread_pct": 0.0012649237197476751,
            "spread_ticks": 1.776502170436372,
            "amihud": 8.123784599840789e-11,
            "turnover_ratio": 0.004284319183797514,
            "is_target": false,
            "company_name": "CPIC",
            "label": "CPIC (2601)"
          },
          {
            "ticker": "1299",
            "score_pca": 97.69890795631825,
            "rank_pca": 60,
            "adv": 1756895133.3,
            "trades": 14097.0,
            "volatility": 0.2590029448543688,
            "spread_pct": 0.0007436833008136093,
            "spread_ticks": 1.0760388586541885,
            "amihud": 6.501803080967413e-12,
            "turnover_ratio": 0.0025275267137470363,
            "is_target": false,
            "company_name": "AIA",
            "label": "AIA (1299)"
          },
          {
            "ticker": "945",
            "score_pca": 61.89547581903276,
            "rank_pca": 978,
            "adv": 5129340.0,
            "trades": 67.0,
            "volatility": 0.16650547645720307,
            "spread_pct": 0.004048772293790562,
            "spread_ticks": 6.4944444444444445,
            "amihud": 1.2387498768508462e-09,
            "turnover_ratio": 9.309004297050436e-06,
            "is_target": false,
            "company_name": "MANULIFE-S",
            "label": "MANULIFE-S (945)"
          },
          {
            "ticker": "1828",
            "score_pca": 79.44617784711389,
            "rank_pca": 528,
            "adv": 10306438.0,
            "trades": 1332.0,
            "volatility": 0.41323661157824554,
            "spread_pct": 0.0024888652470835084,
            "spread_ticks": 3.5526014865637507,
            "amihud": 6.767544277206673e-10,
            "turnover_ratio": 0.0013418511006541873,
            "is_target": false,
            "company_name": "FWD",
            "label": "FWD (1828)"
          }
        ],
        "market_comparison": {
          "sector_name": "Insurance",
          "sector_count": 21,
          "market_count": 2564,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.6199524357618937,
              "median": 0.43691055281357766,
              "min": 0.0,
              "max": 46.76812467429817,
              "p5": 0.0,
              "p95": 1.6364194370332297,
              "count": 2561
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 79318315.93895943,
              "median": 143998.40872411567,
              "min": 0.0,
              "max": 19907893680.0,
              "p5": 0.0,
              "p95": 239423626.66249958,
              "count": 2564
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.056325072005891784,
              "median": 0.034617359015008814,
              "min": 0.0004762617797187049,
              "max": 0.9331667707682696,
              "p5": 0.0016455285130263747,
              "p95": 0.18722479573277195,
              "count": 2564
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.004935171082182461,
              "median": 0.0006075780578315074,
              "min": 0.0,
              "max": 0.5213232337643808,
              "p5": 0.0,
              "p95": 0.019413445304545165,
              "count": 2545
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 5.113596653702954e-06,
              "median": 4.1135809050865474e-08,
              "min": 0.0,
              "max": 0.0010975609756097564,
              "p5": 0.0,
              "p95": 1.2526146247076491e-05,
              "count": 2459
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1294.0405616224648,
              "median": 16.0,
              "min": 0.0,
              "max": 117212.0,
              "p5": 0.0,
              "p95": 6664.549999999999,
              "count": 2564
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.4223073570447201,
              "median": 0.410185563374055,
              "min": 0.0,
              "max": 1.8160736843097878,
              "p5": 0.13587059633225637,
              "p95": 0.5795523317961889,
              "count": 21
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 297108933.8167258,
              "median": 19172956.619999997,
              "min": 0.0,
              "max": 1756895133.3,
              "p5": 59040.0,
              "p95": 1520243885.3,
              "count": 21
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.01816070015862577,
              "median": 0.0024888652470835084,
              "min": 0.0007436833008136093,
              "max": 0.16117150865795193,
              "p5": 0.0008581792246412868,
              "p95": 0.08258897254828602,
              "count": 21
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0033741358313590813,
              "median": 0.0025275267137470363,
              "min": 0.0,
              "max": 0.009151983587336389,
              "p5": 1.4561839754484053e-07,
              "p95": 0.008641080677059333,
              "count": 21
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 4.5322415654388006e-08,
              "median": 3.3578112588388286e-10,
              "min": 0.0,
              "max": 6.481717595826325e-07,
              "p5": 6.176712926919043e-12,
              "p95": 2.415399224571851e-07,
              "count": 20
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 4636.857142857143,
              "median": 1332.0,
              "min": 0.0,
              "max": 15187.0,
              "p5": 1.0,
              "p95": 14097.0,
              "count": 21
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 505823876.78999996,
              "median": 130635516.93,
              "min": 5129340.0,
              "max": 1756895133.3,
              "p5": 5905904.7,
              "p95": 1531005552.6839995,
              "count": 4
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 5872.5,
              "median": 4663.0,
              "min": 67.0,
              "max": 14097.0,
              "p5": 256.75,
              "p95": 13181.549999999997,
              "count": 4
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.2888817370727649,
              "median": 0.2878924301278054,
              "min": 0.16650547645720307,
              "max": 0.41323661157824554,
              "p5": 0.18038009671677793,
              "p95": 0.398768407151695,
              "count": 4
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.0021365611403588386,
              "median": 0.0018768944834155919,
              "min": 0.0007436833008136093,
              "max": 0.004048772293790562,
              "p5": 0.0008218693636537193,
              "p95": 0.0038147862367845036,
              "count": 4
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 3.224896740024689,
              "median": 2.6645518285000613,
              "min": 1.0760388586541885,
              "max": 6.4944444444444445,
              "p5": 1.181108355421516,
              "p95": 6.053168000762339,
              "count": 4
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 5.008109884127222e-10,
              "median": 3.7899613685953757e-10,
              "min": 6.501803080967413e-12,
              "max": 1.2387498768508462e-09,
              "p5": 1.7712209518583487e-11,
              "p95": 1.1544505594813192e-09,
              "count": 4
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0020407515006239467,
              "median": 0.0019346889072006119,
              "min": 9.309004297050436e-06,
              "max": 0.004284319183797514,
              "p5": 0.000209190318750621,
              "p95": 0.0040208003132899415,
              "count": 4
            }
          },
          "returns": {
            "window_days": 5,
            "n_obs": 5,
            "stock": 0.017707362534948645,
            "market": 0.0006748308677375636,
            "sector": 0.006555844242801756,
            "peers": -0.003930066675829957,
            "vs_market": 0.01703253166721108,
            "vs_sector": 0.01115151829214689,
            "vs_peers": 0.021637429210778603,
            "peer_rows": [
              {
                "listing_id": 534129733,
                "name": "PRU",
                "stock_code": "2378",
                "ticker": "2378",
                "return": 0.017707362534948645,
                "n_obs": 5,
                "is_target": true
              },
              {
                "listing_id": 534129636,
                "name": "CPIC",
                "stock_code": "2601",
                "ticker": "2601",
                "return": -0.007965242577842147,
                "n_obs": 5,
                "is_target": false
              },
              {
                "listing_id": 534130087,
                "name": "AIA",
                "stock_code": "1299",
                "ticker": "1299",
                "return": -0.008191126279863181,
                "n_obs": 5,
                "is_target": false
              },
              {
                "listing_id": 534130284,
                "name": "MANULIFE-S",
                "stock_code": "945",
                "ticker": "945",
                "return": 0.009322560596644047,
                "n_obs": 5,
                "is_target": false
              },
              {
                "listing_id": 772037047,
                "name": "FWD",
                "stock_code": "1828",
                "ticker": "1828",
                "return": 0.03276353276353272,
                "n_obs": 5,
                "is_target": false
              }
            ]
          }
        }
      },
      "30d": {
        "label": "1M",
        "window_days": 21,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 21,
          "score_pca": 69.03276131045241,
          "score_pca_percentile": 69.03276131045241,
          "rank_pca": 795,
          "total": 2564,
          "adv_notional_sgd": 9275150.0,
          "adv_volume_shares": 90050.0,
          "free_float_shares": 2557509480.0,
          "turnover_ratio": 3.521003566328912e-05,
          "votes": 359.0,
          "trades": 359.0,
          "spread_pct": 0.003266116538200523,
          "spread_ticks": 3.4927536231884058,
          "amihud": 1.1036661471710073e-09,
          "volatility": 0.2955973504852906
        },
        "pca": {
          "valid": true,
          "window_days": 21,
          "variance_explained": 0.5672966974817474,
          "loadings": {
            "log_adv": 0.5280572838377725,
            "log_trades": 0.488042698560314,
            "log_turnover": 0.4835708929148585,
            "neg_spread": 0.4658242697852211,
            "neg_amihud": 0.1736469548222491,
            "neg_vol": 0.044536565352435914
          }
        },
        "data_quality": {
          "turnover_ratio": {
            "valid": true,
            "reason": null
          }
        },
        "peer_summary": {
          "n_peers": 4,
          "peer_median_adv": 197280627.0,
          "peer_median_score_pca": 87.26599063962558,
          "peer_median_trades": 6026.0,
          "peer_median_volatility": 0.3059988378027274,
          "peer_median_spread_pct": 0.0017793006846118344,
          "peer_median_spread_ticks": 2.646849331467089,
          "peer_median_amihud": 5.114092557381542e-10,
          "peer_median_turnover_ratio": 0.0022749117664588275,
          "target_vs_peer": {
            "score_pca_delta": -18.23,
            "adv_delta_pct": -95.3,
            "trades_delta_pct": -94.04,
            "volatility_delta_pct": 3.4,
            "spread_pct_delta_pct": -83.56,
            "spread_ticks_delta_pct": 31.96,
            "amihud_delta_pct": -115.81,
            "turnover_ratio_delta_pct": -98.45
          }
        },
        "peer_liquidity": [
          {
            "ticker": "2378",
            "score_pca": 69.03276131045241,
            "rank_pca": 795,
            "adv": 9275150.0,
            "trades": 359.0,
            "volatility": 0.2955973504852906,
            "spread_pct": 0.003266116538200523,
            "spread_ticks": 3.4927536231884058,
            "amihud": 1.1036661471710073e-09,
            "turnover_ratio": 3.521003566328912e-05,
            "is_target": true,
            "company_name": "PRU",
            "label": "PRU (2378)"
          },
          {
            "ticker": "2601",
            "score_pca": 95.94383775351014,
            "rank_pca": 105,
            "adv": 383099166.0,
            "trades": 10651.0,
            "volatility": 0.3935402734941703,
            "spread_pct": 0.0011524723739543448,
            "spread_ticks": 1.705463368816531,
            "amihud": 4.338248902084457e-11,
            "turnover_ratio": 0.006347213374372772,
            "is_target": false,
            "company_name": "CPIC",
            "label": "CPIC (2601)"
          },
          {
            "ticker": "1299",
            "score_pca": 98.32293291731669,
            "rank_pca": 44,
            "adv": 2230818455.25,
            "trades": 16908.0,
            "volatility": 0.3005089207991953,
            "spread_pct": 0.0007452512294699164,
            "spread_ticks": 1.0886625730118316,
            "amihud": 6.501803080967413e-12,
            "turnover_ratio": 0.0031250428924190624,
            "is_target": false,
            "company_name": "AIA",
            "label": "AIA (1299)"
          },
          {
            "ticker": "945",
            "score_pca": 60.9984399375975,
            "rank_pca": 1001,
            "adv": 4669080.0,
            "trades": 67.0,
            "volatility": 0.16933378400039048,
            "spread_pct": 0.005363124289588901,
            "spread_ticks": 8.520440251572326,
            "amihud": 1.837275285358533e-09,
            "turnover_ratio": 8.547890738172098e-06,
            "is_target": false,
            "company_name": "MANULIFE-S",
            "label": "MANULIFE-S (945)"
          },
          {
            "ticker": "1828",
            "score_pca": 78.58814352574103,
            "rank_pca": 550,
            "adv": 11462088.0,
            "trades": 1401.0,
            "volatility": 0.3114887548062595,
            "spread_pct": 0.002406128995269324,
            "spread_ticks": 3.588235294117647,
            "amihud": 9.794360224554639e-10,
            "turnover_ratio": 0.0014247806404985926,
            "is_target": false,
            "company_name": "FWD",
            "label": "FWD (1828)"
          }
        ],
        "market_comparison": {
          "sector_name": "Insurance",
          "sector_count": 21,
          "market_count": 2564,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.7532891220202267,
              "median": 0.5832263100634045,
              "min": 0.0,
              "max": 60.64606755759934,
              "p5": 0.20391229524417478,
              "p95": 1.6973450566575905,
              "count": 2561
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 73879110.92399967,
              "median": 183935.0,
              "min": 0.0,
              "max": 13890845540.0,
              "p5": 0.0,
              "p95": 251647037.20949996,
              "count": 2564
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.05120031807800786,
              "median": 0.03404104583197896,
              "min": 0.0004951528306756644,
              "max": 0.5463694548664754,
              "p5": 0.0015296413161422688,
              "p95": 0.15538973024407574,
              "count": 2564
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0046928439570664785,
              "median": 0.0007497056680768099,
              "min": 0.0,
              "max": 0.28413144139353297,
              "p5": 0.0,
              "p95": 0.019879717477978266,
              "count": 2545
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.9438055664611247e-06,
              "median": 6.620598572031738e-08,
              "min": 0.0,
              "max": 0.0006343283582089554,
              "p5": 3.264595634097498e-11,
              "p95": 6.613609793571581e-06,
              "count": 2552
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1256.9457878315134,
              "median": 19.0,
              "min": 0.0,
              "max": 91779.0,
              "p5": 0.0,
              "p95": 7006.149999999989,
              "count": 2564
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.45236590065313753,
              "median": 0.35257261209801044,
              "min": 0.16933378400039048,
              "max": 1.0268638192258008,
              "p5": 0.23871364442727155,
              "p95": 0.9210991480700359,
              "count": 21
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 379236812.8734241,
              "median": 20521140.0,
              "min": 0.0,
              "max": 2279000881.5,
              "p5": 0.0,
              "p95": 2230818455.25,
              "count": 21
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.014790749132059019,
              "median": 0.002406128995269324,
              "min": 0.0007452512294699164,
              "max": 0.11009174311926609,
              "p5": 0.0008495595147358719,
              "p95": 0.0878951426368543,
              "count": 21
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0040008098423345555,
              "median": 0.0031250428924190624,
              "min": 0.0,
              "max": 0.011353235098987672,
              "p5": 0.0,
              "p95": 0.008814364312979992,
              "count": 21
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 6.355132710495133e-08,
              "median": 5.307944768314861e-10,
              "min": 6.501803080967413e-12,
              "max": 4.916245028856901e-07,
              "p5": 6.845654434446505e-12,
              "p95": 4.576848989146818e-07,
              "count": 21
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 5206.190476190476,
              "median": 1401.0,
              "min": 0.0,
              "max": 16959.0,
              "p5": 0.0,
              "p95": 16908.0,
              "count": 21
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 657512197.3125,
              "median": 197280627.0,
              "min": 4669080.0,
              "max": 2230818455.25,
              "p5": 5688031.2,
              "p95": 1953660561.8624992,
              "count": 4
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 7256.75,
              "median": 6026.0,
              "min": 67.0,
              "max": 16908.0,
              "p5": 267.1,
              "p95": 15969.449999999997,
              "count": 4
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.29371793327500384,
              "median": 0.3059988378027274,
              "min": 0.16933378400039048,
              "max": 0.3935402734941703,
              "p5": 0.1890100545202112,
              "p95": 0.38123254569098364,
              "count": 4
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.0024167442220706216,
              "median": 0.0017793006846118344,
              "min": 0.0007452512294699164,
              "max": 0.005363124289588901,
              "p5": 0.0008063344011425807,
              "p95": 0.0049195749954409635,
              "count": 4
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 3.725700371879584,
              "median": 2.646849331467089,
              "min": 1.0886625730118316,
              "max": 8.520440251572326,
              "p5": 1.1811826923825366,
              "p95": 7.780609507954122,
              "count": 4
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 7.166488999789522e-10,
              "median": 5.114092557381542e-10,
              "min": 6.501803080967413e-12,
              "max": 1.837275285358533e-09,
              "p5": 1.2033905971948986e-11,
              "p95": 1.7085993959230723e-09,
              "count": 4
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.00272639619950715,
              "median": 0.0022749117664588275,
              "min": 8.547890738172098e-06,
              "max": 0.006347213374372772,
              "p5": 0.0002209828032022352,
              "p95": 0.005863887802079715,
              "count": 4
            }
          },
          "returns": {
            "window_days": 21,
            "n_obs": 21,
            "stock": 0.0985915492957743,
            "market": -0.023116963196228246,
            "sector": -0.06431565583959131,
            "peers": -0.023789702118320988,
            "vs_market": 0.12170851249200254,
            "vs_sector": 0.1629072051353656,
            "vs_peers": 0.12238125141409528,
            "peer_rows": [
              {
                "listing_id": 534129733,
                "name": "PRU",
                "stock_code": "2378",
                "ticker": "2378",
                "return": 0.0985915492957743,
                "n_obs": 21,
                "is_target": true
              },
              {
                "listing_id": 534129636,
                "name": "CPIC",
                "stock_code": "2601",
                "ticker": "2601",
                "return": -0.13510101010101006,
                "n_obs": 21,
                "is_target": false
              },
              {
                "listing_id": 534130087,
                "name": "AIA",
                "stock_code": "1299",
                "ticker": "1299",
                "return": 0.02323943661971839,
                "n_obs": 21,
                "is_target": false
              },
              {
                "listing_id": 534130284,
                "name": "MANULIFE-S",
                "stock_code": "945",
                "ticker": "945",
                "return": 0.06982872200263524,
                "n_obs": 21,
                "is_target": false
              },
              {
                "listing_id": 772037047,
                "name": "FWD",
                "stock_code": "1828",
                "ticker": "1828",
                "return": -0.030100334448160182,
                "n_obs": 21,
                "is_target": false
              }
            ]
          }
        }
      },
      "3m": {
        "label": "3M",
        "window_days": 63,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 63,
          "score_pca": 69.03276131045241,
          "score_pca_percentile": 69.03276131045241,
          "rank_pca": 795,
          "total": 2564,
          "adv_notional_sgd": 10157415.0,
          "adv_volume_shares": 90050.0,
          "free_float_shares": 2557509480.0,
          "turnover_ratio": 3.521003566328912e-05,
          "votes": 310.0,
          "trades": 310.0,
          "spread_pct": 0.0030731265440082883,
          "spread_ticks": 3.448202959830867,
          "amihud": 1.0998660951187802e-09,
          "volatility": 0.3222611129902431
        },
        "pca": {
          "valid": true,
          "window_days": 63,
          "variance_explained": 0.5782799806588609,
          "loadings": {
            "log_adv": 0.5222964475175296,
            "log_trades": 0.48153693821873145,
            "log_turnover": 0.4713361091479724,
            "neg_spread": 0.4705151389220809,
            "neg_amihud": 0.21347282861553576,
            "neg_vol": 0.0788398740661392
          }
        },
        "data_quality": {
          "turnover_ratio": {
            "valid": true,
            "reason": null
          }
        },
        "peer_summary": {
          "n_peers": 4,
          "peer_median_adv": 184174602.52,
          "peer_median_score_pca": 85.8619344773791,
          "peer_median_trades": 5446.5,
          "peer_median_volatility": 0.2766966062874635,
          "peer_median_spread_pct": 0.001850456160240864,
          "peer_median_spread_ticks": 2.644641770554995,
          "peer_median_amihud": 6.956338617415147e-10,
          "peer_median_turnover_ratio": 0.0018876810711271866,
          "target_vs_peer": {
            "score_pca_delta": -16.83,
            "adv_delta_pct": -94.5,
            "trades_delta_pct": -94.31,
            "volatility_delta_pct": -16.47,
            "spread_pct_delta_pct": -66.07,
            "spread_ticks_delta_pct": 30.38,
            "amihud_delta_pct": -58.11,
            "turnover_ratio_delta_pct": -98.13
          }
        },
        "peer_liquidity": [
          {
            "ticker": "2378",
            "score_pca": 69.03276131045241,
            "rank_pca": 795,
            "adv": 10157415.0,
            "trades": 310.0,
            "volatility": 0.3222611129902431,
            "spread_pct": 0.0030731265440082883,
            "spread_ticks": 3.448202959830867,
            "amihud": 1.0998660951187802e-09,
            "turnover_ratio": 3.521003566328912e-05,
            "is_target": true,
            "company_name": "PRU",
            "label": "PRU (2378)"
          },
          {
            "ticker": "2601",
            "score_pca": 96.13884555382215,
            "rank_pca": 100,
            "adv": 360563559.04,
            "trades": 10100.0,
            "volatility": 0.3066207988831542,
            "spread_pct": 0.0011325687600784356,
            "spread_ticks": 1.6070041852519399,
            "amihud": 3.219664058461062e-11,
            "turnover_ratio": 0.005509091704113104,
            "is_target": false,
            "company_name": "CPIC",
            "label": "CPIC (2601)"
          },
          {
            "ticker": "1299",
            "score_pca": 98.71294851794072,
            "rank_pca": 34,
            "adv": 2291887555.0,
            "trades": 16943.0,
            "volatility": 0.29588148046799423,
            "spread_pct": 0.0006927154199901853,
            "spread_ticks": 1.110988715086534,
            "amihud": 5.206507312992787e-12,
            "turnover_ratio": 0.002827335023768771,
            "is_target": false,
            "company_name": "AIA",
            "label": "AIA (1299)"
          },
          {
            "ticker": "945",
            "score_pca": 60.37441497659907,
            "rank_pca": 1017,
            "adv": 3938879.9999999995,
            "trades": 65.0,
            "volatility": 0.1801554140954655,
            "spread_pct": 0.004869238179796444,
            "spread_ticks": 7.425531914893617,
            "amihud": 1.7052072548063986e-09,
            "turnover_ratio": 7.728229982456965e-06,
            "is_target": false,
            "company_name": "MANULIFE-S",
            "label": "MANULIFE-S (945)"
          },
          {
            "ticker": "1828",
            "score_pca": 75.58502340093604,
            "rank_pca": 627,
            "adv": 7785646.0,
            "trades": 793.0,
            "volatility": 0.25751173210693273,
            "spread_pct": 0.0025683435604032926,
            "spread_ticks": 3.68227935585805,
            "amihud": 1.3590710828984187e-09,
            "turnover_ratio": 0.000948027118485602,
            "is_target": false,
            "company_name": "FWD",
            "label": "FWD (1828)"
          }
        ],
        "market_comparison": {
          "sector_name": "Insurance",
          "sector_count": 21,
          "market_count": 2564,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.7691821527997414,
              "median": 0.5986443450491619,
              "min": 0.0,
              "max": 35.02749924686524,
              "p5": 0.22427067371359255,
              "p95": 1.6631364204073313,
              "count": 2561
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 65427002.04780692,
              "median": 208351.4,
              "min": 0.0,
              "max": 13121101040.0,
              "p5": 0.0,
              "p95": 256661942.41499993,
              "count": 2564
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.04486091453472507,
              "median": 0.030795420123895082,
              "min": 0.0004862932853403058,
              "max": 0.3844140738586799,
              "p5": 0.0014662784486513532,
              "p95": 0.1341236458270289,
              "count": 2564
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.004196191050720441,
              "median": 0.0008625,
              "min": 0.0,
              "max": 0.1721383823814342,
              "p5": 0.0,
              "p95": 0.017559628209827927,
              "count": 2545
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 9.145431964956373e-07,
              "median": 5.732249296031947e-08,
              "min": 0.0,
              "max": 0.00020885547201336674,
              "p5": 4.961125305472904e-11,
              "p95": 3.831533587967401e-06,
              "count": 2560
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1162.304407176287,
              "median": 20.0,
              "min": 0.0,
              "max": 77548.0,
              "p5": 0.0,
              "p95": 6179.4,
              "count": 2564
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.41038676018742287,
              "median": 0.3222611129902431,
              "min": 0.1801554140954655,
              "max": 1.5382226752461614,
              "p5": 0.23147222284315447,
              "p95": 0.7010266140473439,
              "count": 21
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 364354734.6254655,
              "median": 26526150.0,
              "min": 0.0,
              "max": 2291887555.0,
              "p5": 0.0,
              "p95": 2037199152.0,
              "count": 21
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.01110964901370251,
              "median": 0.0024461342482240017,
              "min": 0.0006927154199901853,
              "max": 0.08435999164752553,
              "p5": 0.0008734336841850196,
              "p95": 0.05151563460793911,
              "count": 21
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0035232171718277707,
              "median": 0.0034978167120357138,
              "min": 0.0,
              "max": 0.008937617714701982,
              "p5": 0.0,
              "p95": 0.00876064803277968,
              "count": 21
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 4.2485209820943555e-08,
              "median": 4.757510476886273e-10,
              "min": 4.952079555319346e-12,
              "max": 3.539214496622596e-07,
              "p5": 5.206507312992787e-12,
              "p95": 2.721659797222065e-07,
              "count": 21
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 4862.285714285715,
              "median": 1289.0,
              "min": 0.0,
              "max": 16943.0,
              "p5": 0.0,
              "p95": 15388.0,
              "count": 21
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 666043910.01,
              "median": 184174602.52,
              "min": 3938879.9999999995,
              "max": 2291887555.0,
              "p5": 4515894.899999999,
              "p95": 2002188955.6059992,
              "count": 4
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 6975.25,
              "median": 5446.5,
              "min": 65.0,
              "max": 16943.0,
              "p5": 174.20000000000002,
              "p95": 15916.549999999997,
              "count": 4
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.2600423563883867,
              "median": 0.2766966062874635,
              "min": 0.1801554140954655,
              "max": 0.3066207988831542,
              "p5": 0.1917588617971856,
              "p95": 0.30500990112088017,
              "count": 4
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.002315716480067089,
              "median": 0.001850456160240864,
              "min": 0.0006927154199901853,
              "max": 0.004869238179796444,
              "p5": 0.0007586934210034228,
              "p95": 0.004524103986887471,
              "count": 4
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 3.4564510427725352,
              "median": 2.644641770554995,
              "min": 1.110988715086534,
              "max": 7.425531914893617,
              "p5": 1.185391035611345,
              "p95": 6.864044031038281,
              "count": 4
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 7.754203714006052e-10,
              "median": 6.956338617415147e-10,
              "min": 5.206507312992787e-12,
              "max": 1.7052072548063986e-09,
              "p5": 9.255027303735461e-12,
              "p95": 1.6532868290202016e-09,
              "count": 4
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.002323045519087483,
              "median": 0.0018876810711271866,
              "min": 7.728229982456965e-06,
              "max": 0.005509091704113104,
              "p5": 0.00014877306325792876,
              "p95": 0.0051068282020614525,
              "count": 4
            }
          },
          "returns": {
            "window_days": 63,
            "n_obs": 63,
            "stock": -0.07848101265822804,
            "market": -0.013505515431773918,
            "sector": -0.14704523748655807,
            "peers": -0.06461507627549723,
            "vs_market": -0.06497549722645413,
            "vs_sector": 0.06856422482833002,
            "vs_peers": -0.013865936382730815,
            "peer_rows": [
              {
                "listing_id": 534129733,
                "name": "PRU",
                "stock_code": "2378",
                "ticker": "2378",
                "return": -0.07848101265822804,
                "n_obs": 63,
                "is_target": true
              },
              {
                "listing_id": 534129636,
                "name": "CPIC",
                "stock_code": "2601",
                "ticker": "2601",
                "return": -0.19789227166276346,
                "n_obs": 63,
                "is_target": false
              },
              {
                "listing_id": 534130087,
                "name": "AIA",
                "stock_code": "1299",
                "ticker": "1299",
                "return": -0.1804850535814997,
                "n_obs": 63,
                "is_target": false
              },
              {
                "listing_id": 534130284,
                "name": "MANULIFE-S",
                "stock_code": "945",
                "ticker": "945",
                "return": 0.1534090909090906,
                "n_obs": 63,
                "is_target": false
              },
              {
                "listing_id": 772037047,
                "name": "FWD",
                "stock_code": "1828",
                "ticker": "1828",
                "return": -0.1098833640270096,
                "n_obs": 63,
                "is_target": false
              }
            ]
          }
        }
      },
      "6m": {
        "label": "6M",
        "window_days": 126,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 126,
          "score_pca": 68.60374414976599,
          "score_pca_percentile": 68.60374414976599,
          "rank_pca": 806,
          "total": 2564,
          "adv_notional_sgd": 9435015.0,
          "adv_volume_shares": 79250.0,
          "free_float_shares": 2557509480.0,
          "turnover_ratio": 3.0987177416053996e-05,
          "votes": 271.0,
          "trades": 271.0,
          "spread_pct": 0.0033094229828760447,
          "spread_ticks": 3.935083572110793,
          "amihud": 1.3596912281424743e-09,
          "volatility": 0.36188581876310444
        },
        "pca": {
          "valid": true,
          "window_days": 126,
          "variance_explained": 0.6278718716561701,
          "loadings": {
            "log_adv": 0.4960064503840712,
            "log_trades": 0.4514973544835308,
            "log_turnover": 0.446706576388435,
            "neg_spread": 0.4649018075687632,
            "neg_amihud": 0.3477155709213691,
            "neg_vol": 0.11636651469049335
          }
        },
        "data_quality": {
          "turnover_ratio": {
            "valid": true,
            "reason": null
          }
        },
        "peer_summary": {
          "n_peers": 4,
          "peer_median_adv": 234549580.99999997,
          "peer_median_score_pca": 87.16848673946959,
          "peer_median_trades": 6155.5,
          "peer_median_volatility": 0.2867827289996945,
          "peer_median_spread_pct": 0.0017772485172121673,
          "peer_median_spread_ticks": 2.644641770554995,
          "peer_median_amihud": 4.628445839483635e-10,
          "peer_median_turnover_ratio": 0.0019962208718874884,
          "target_vs_peer": {
            "score_pca_delta": -18.56,
            "adv_delta_pct": -96.0,
            "trades_delta_pct": -95.6,
            "volatility_delta_pct": -26.19,
            "spread_pct_delta_pct": -86.21,
            "spread_ticks_delta_pct": 48.79,
            "amihud_delta_pct": -193.77,
            "turnover_ratio_delta_pct": -98.45
          }
        },
        "peer_liquidity": [
          {
            "ticker": "2378",
            "score_pca": 68.60374414976599,
            "rank_pca": 806,
            "adv": 9435015.0,
            "trades": 271.0,
            "volatility": 0.36188581876310444,
            "spread_pct": 0.0033094229828760447,
            "spread_ticks": 3.935083572110793,
            "amihud": 1.3596912281424743e-09,
            "turnover_ratio": 3.0987177416053996e-05,
            "is_target": true,
            "company_name": "PRU",
            "label": "PRU (2378)"
          },
          {
            "ticker": "2601",
            "score_pca": 97.46489859594384,
            "rank_pca": 66,
            "adv": 459413263.99999994,
            "trades": 11420.0,
            "volatility": 0.321053420414264,
            "spread_pct": 0.001159385533009543,
            "spread_ticks": 1.6070041852519399,
            "amihud": 2.784997455018527e-11,
            "turnover_ratio": 0.006414232200003247,
            "is_target": false,
            "company_name": "CPIC",
            "label": "CPIC (2601)"
          },
          {
            "ticker": "1299",
            "score_pca": 99.02496099843994,
            "rank_pca": 26,
            "adv": 2330915428.375,
            "trades": 16045.5,
            "volatility": 0.3678457895215191,
            "spread_pct": 0.0006787922622548757,
            "spread_ticks": 1.120157495877919,
            "amihud": 5.825611603372586e-12,
            "turnover_ratio": 0.0029032152105322707,
            "is_target": false,
            "company_name": "AIA",
            "label": "AIA (1299)"
          },
          {
            "ticker": "945",
            "score_pca": 60.14040561622465,
            "rank_pca": 1023,
            "adv": 3587050.0,
            "trades": 62.0,
            "volatility": 0.22885375737585553,
            "spread_pct": 0.004562861457869171,
            "spread_ticks": 6.852191560420273,
            "amihud": 2.5092866268628036e-09,
            "turnover_ratio": 7.289126006181001e-06,
            "is_target": false,
            "company_name": "MANULIFE-S",
            "label": "MANULIFE-S (945)"
          },
          {
            "ticker": "1828",
            "score_pca": 76.87207488299532,
            "rank_pca": 594,
            "adv": 9685898.0,
            "trades": 891.0,
            "volatility": 0.2525120375851249,
            "spread_pct": 0.0023951115014147917,
            "spread_ticks": 3.68227935585805,
            "amihud": 8.978391933465418e-10,
            "turnover_ratio": 0.001089226533242706,
            "is_target": false,
            "company_name": "FWD",
            "label": "FWD (1828)"
          }
        ],
        "market_comparison": {
          "sector_name": "Insurance",
          "sector_count": 21,
          "market_count": 2564,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.7654109466214373,
              "median": 0.6259439370114613,
              "min": 0.0,
              "max": 24.76952454360446,
              "p5": 0.23781872163080933,
              "p95": 1.6573761973506673,
              "count": 2561
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 60683164.259191625,
              "median": 210592.5,
              "min": 0.0,
              "max": 13434176175.0,
              "p5": 0.0,
              "p95": 241123160.66199997,
              "count": 2564
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.04306644394380114,
              "median": 0.02933505699852,
              "min": 0.0005566825134406019,
              "max": 0.3826262083780881,
              "p5": 0.0014449424597040273,
              "p95": 0.13484892201060472,
              "count": 2564
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.003815532707975971,
              "median": 0.0008717585801998126,
              "min": 0.0,
              "max": 0.23562551439647736,
              "p5": 0.0,
              "p95": 0.015428896052880928,
              "count": 2545
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 6.321801310917604e-07,
              "median": 4.98405103668262e-08,
              "min": 0.0,
              "max": 2.2277917014758908e-05,
              "p5": 5.248965246085058e-11,
              "p95": 3.0007359699800055e-06,
              "count": 2561
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1097.4278471138846,
              "median": 19.5,
              "min": 0.0,
              "max": 74478.0,
              "p5": 0.0,
              "p95": 6102.624999999996,
              "count": 2564
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.4505624333588343,
              "median": 0.37212147311459254,
              "min": 0.22885375737585553,
              "max": 1.9789785227188692,
              "p5": 0.24697767399980397,
              "p95": 0.5972586568944221,
              "count": 21
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 398963609.56418484,
              "median": 30192159.785,
              "min": 0.0,
              "max": 2330915428.375,
              "p5": 21260.0,
              "p95": 2279375309.1000004,
              "count": 21
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.008982885818005252,
              "median": 0.0022431813643818627,
              "min": 0.0006787922622548757,
              "max": 0.05657905171784787,
              "p5": 0.0008458970714429544,
              "p95": 0.04068464391997677,
              "count": 21
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0036804031715224604,
              "median": 0.003287655192358329,
              "min": 0.0,
              "max": 0.00981633989160146,
              "p5": 2.2882891042760654e-07,
              "p95": 0.009311897211264424,
              "count": 21
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 3.077562875417401e-08,
              "median": 4.5143335322185514e-10,
              "min": 5.24529039236037e-12,
              "max": 2.3096821877309703e-07,
              "p5": 5.825611603372586e-12,
              "p95": 1.7076502732240377e-07,
              "count": 21
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 5090.357142857143,
              "median": 1296.5,
              "min": 0.0,
              "max": 17238.0,
              "p5": 2.0,
              "p95": 16429.5,
              "count": 21
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 700900410.09375,
              "median": 234549580.99999997,
              "min": 3587050.0,
              "max": 2330915428.375,
              "p5": 4501877.2,
              "p95": 2050190103.7187493,
              "count": 4
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 7104.625,
              "median": 6155.5,
              "min": 62.0,
              "max": 16045.5,
              "p5": 186.35000000000002,
              "p95": 15351.675,
              "count": 4
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.2925662512241909,
              "median": 0.2867827289996945,
              "min": 0.22885375737585553,
              "max": 0.3678457895215191,
              "p5": 0.23240249940724594,
              "p95": 0.3608269341554308,
              "count": 4
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.0021990376886370953,
              "median": 0.0017772485172121673,
              "min": 0.0006787922622548757,
              "max": 0.004562861457869171,
              "p5": 0.0007508812528680758,
              "p95": 0.004237698964401014,
              "count": 4
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 3.3154081493520455,
              "median": 2.644641770554995,
              "min": 1.120157495877919,
              "max": 6.852191560420273,
              "p5": 1.1931844992840221,
              "p95": 6.3767047297359385,
              "count": 4
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 8.602003515907258e-10,
              "median": 4.628445839483635e-10,
              "min": 5.825611603372586e-12,
              "max": 2.5092866268628036e-09,
              "p5": 9.129266045394489e-12,
              "p95": 2.2675695118353636e-09,
              "count": 4
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0026034907674461014,
              "median": 0.0019962208718874884,
              "min": 7.289126006181001e-06,
              "max": 0.006414232200003247,
              "p5": 0.0001695797370916598,
              "p95": 0.005887579651582599,
              "count": 4
            }
          },
          "returns": {
            "window_days": 126,
            "n_obs": 126,
            "stock": -0.08542713567839266,
            "market": 0.06483113675813645,
            "sector": -0.19634788457856267,
            "peers": -0.09055174646778896,
            "vs_market": -0.15025827243652912,
            "vs_sector": 0.11092074890017001,
            "vs_peers": 0.0051246107893963,
            "peer_rows": [
              {
                "listing_id": 534129733,
                "name": "PRU",
                "stock_code": "2378",
                "ticker": "2378",
                "return": -0.08542713567839266,
                "n_obs": 126,
                "is_target": true
              },
              {
                "listing_id": 534129636,
                "name": "CPIC",
                "stock_code": "2601",
                "ticker": "2601",
                "return": -0.22159090909090917,
                "n_obs": 126,
                "is_target": false
              },
              {
                "listing_id": 534130087,
                "name": "AIA",
                "stock_code": "1299",
                "ticker": "1299",
                "return": -0.09073842302878654,
                "n_obs": 126,
                "is_target": false
              },
              {
                "listing_id": 534130284,
                "name": "MANULIFE-S",
                "stock_code": "945",
                "ticker": "945",
                "return": 0.14608327452364156,
                "n_obs": 126,
                "is_target": false
              },
              {
                "listing_id": 772037047,
                "name": "FWD",
                "stock_code": "1828",
                "ticker": "1828",
                "return": -0.23764458464773852,
                "n_obs": 126,
                "is_target": false
              }
            ]
          }
        }
      }
    },
    "total_returns": null,
    "market_performance": {
      "basis": "calendar_month_compounded_daily_price_returns",
      "window_note": "Best and worst months are detected from each security's maximum available daily close history up to the report as-of date. Stock and peer rows use OHLCV close-to-close price returns; the S-REIT row uses the SGX iEdge S-REIT Index from market.index_prices.",
      "window_start": "2025-01-02",
      "window_end": "2026-07-10",
      "rows": [
        {
          "key": "listing_534129733",
          "name": "PRU",
          "stock_code": "2378",
          "label": "PRU",
          "is_target": true,
          "is_index": false,
          "best_month": {
            "value": 0.21094312455003572,
            "month": "Mar 2025",
            "available": true,
            "n_months": 19
          },
          "worst_month": {
            "value": -0.10640066500415646,
            "month": "Mar 2026",
            "available": true,
            "n_months": 19
          },
          "history_window": {
            "start_date": "2025-01-02",
            "end_date": "2026-07-10",
            "n_obs": 366
          }
        },
        {
          "key": "listing_534129636",
          "name": "CPIC",
          "stock_code": "2601",
          "label": "CPIC",
          "is_target": false,
          "is_index": false,
          "best_month": {
            "value": 0.1787709497206702,
            "month": "Jul 2025",
            "available": true,
            "n_months": 19
          },
          "worst_month": {
            "value": -0.14449395289624445,
            "month": "Jun 2026",
            "available": true,
            "n_months": 19
          },
          "history_window": {
            "start_date": "2025-01-02",
            "end_date": "2026-07-10",
            "n_obs": 366
          }
        },
        {
          "key": "listing_534130087",
          "name": "AIA",
          "stock_code": "1299",
          "label": "AIA",
          "is_target": false,
          "is_index": false,
          "best_month": {
            "value": 0.1307884856070085,
            "month": "Jan 2026",
            "available": true,
            "n_months": 19
          },
          "worst_month": {
            "value": -0.13130699088145859,
            "month": "Jun 2026",
            "available": true,
            "n_months": 19
          },
          "history_window": {
            "start_date": "2025-01-02",
            "end_date": "2026-07-10",
            "n_obs": 366
          }
        },
        {
          "key": "listing_534130284",
          "name": "MANULIFE-S",
          "stock_code": "945",
          "label": "MANULIFE-S",
          "is_target": false,
          "is_index": false,
          "best_month": {
            "value": 0.12951807228915646,
            "month": "Apr 2026",
            "available": true,
            "n_months": 19
          },
          "worst_month": {
            "value": -0.06346967559943584,
            "month": "Mar 2026",
            "available": true,
            "n_months": 19
          },
          "history_window": {
            "start_date": "2025-01-02",
            "end_date": "2026-07-10",
            "n_obs": 366
          }
        },
        {
          "key": "listing_772037047",
          "name": "FWD",
          "stock_code": "1828",
          "label": "FWD",
          "is_target": false,
          "is_index": false,
          "best_month": {
            "value": 0.14389610389610374,
            "month": "Aug 2025",
            "available": true,
            "n_months": 13
          },
          "worst_month": {
            "value": -0.1789189189189192,
            "month": "Mar 2026",
            "available": true,
            "n_months": 13
          },
          "history_window": {
            "start_date": "2025-07-07",
            "end_date": "2026-07-10",
            "n_obs": 243
          }
        }
      ]
    },
    "period_insights": {
      "1d": {
        "liquidity": "Near-term access looks balanced on screen, with displayed bid depth at 1.01x ask depth and a 3-tick spread, which supports orderly trading today.",
        "market_comparison": "Return 3.0% vs peers 0.4%."
      },
      "1w": {
        "liquidity": "1W score 68.3 vs peer median 86.8 (-18.5 pts).",
        "market_comparison": "The stock gained 1.8% while peers fell 0.4%, so relative performance stayed firm even as trading activity dropped."
      },
      "30d": {
        "liquidity": "Monthly liquidity remains weak for its size, with a score of 69.0 compared with a peer median of 87.3, which keeps accessibility below the peer set.",
        "market_comparison": "The stock returned 9.9% compared with peers at -2.4% and the market at -2.3%, giving the tape a stronger backdrop than the main comparison groups."
      },
      "3m": {
        "liquidity": "Accessibility looks consistently below peer standards over the medium term, with liquidity still screening weaker than the broader group.",
        "market_comparison": "Return -7.8% vs peers -6.5%."
      },
      "6m": {
        "liquidity": "Structural liquidity is weak, with a 6M score of 68.6 compared with a peer median of 87.2, which indicates access screens below peers on a sustained basis.",
        "market_comparison": "The stock fell 8.5% while peers fell 9.1%, so relative returns were slightly better even though liquidity remained weaker than the group."
      }
    }
  },
  "q02": {
    "driver_model": {
      "valid": true,
      "model_method": "ols_with_hmm_jump_regimes",
      "regime_method": "hmm_jump_aware",
      "estimation_window_days": 251,
      "reporting_window_days": 63,
      "available_history_days": 251,
      "n_regimes": 4,
      "current_regime": 2,
      "current_regime_label": "Stressed / Illiquid",
      "current_regime_probability": 0.9999991891244512,
      "current_regime_probability_display": ">99.9%",
      "current_probability_basis": "filtered",
      "historical_probability_basis": "smoothed",
      "current_driver_mix": {
        "market_share": {
          "median": 0.6049992321895827,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "60.5%",
          "display_range": null,
          "display_text": "60.5%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "share_pct",
          "value_pct": 60.5,
          "plain_english": "Market explains about 60.5% of price moves in the current state."
        },
        "sector_share": {
          "median": 0.3753500135947343,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "37.5%",
          "display_range": null,
          "display_text": "37.5%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "share_pct",
          "value_pct": 37.5,
          "plain_english": "Sector explains about 37.5% of price moves in the current state."
        },
        "company_share": {
          "median": 0.019650754215682867,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "2.0%",
          "display_range": null,
          "display_text": "2.0%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "share_pct",
          "value_pct": 2.0,
          "plain_english": "Company-specific explains about 2.0% of price moves in the current state."
        },
        "basis": "current_state"
      },
      "current_sensitivities": {
        "beta_market": {
          "median": -2.8394946753462724,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "-2.84",
          "display_range": null,
          "display_text": "-2.84",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "beta",
          "strength_label": "High",
          "plain_english": "High market link: a 1% market move has lined up with about a 2.84% stock move in the opposite direction in this state.",
          "value_num": -2.84
        },
        "beta_stock_lag": {
          "median": 0.15822685193819677,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "0.16",
          "display_range": null,
          "display_text": "0.16",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "lag_beta",
          "value_num": 0.16
        },
        "beta_sector": {
          "median": 1.7277647559851212,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "1.73",
          "display_range": null,
          "display_text": "1.73",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "beta",
          "strength_label": "High",
          "plain_english": "High sector link: a 1% sector move has lined up with about a 1.73% stock move in the same direction in this state.",
          "value_num": 1.73
        },
        "beta_market_lag": {
          "median": -0.8396467354231927,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "-0.84",
          "display_range": null,
          "display_text": "-0.84",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "lag_beta",
          "value_num": -0.84
        },
        "beta_sector_lag": {
          "median": -0.07855177105616969,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "-0.08",
          "display_range": null,
          "display_text": "-0.08",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "lag_beta",
          "value_num": -0.08
        },
        "posterior_source": null,
        "intervals_collapsed": false,
        "confidence_label": "High, limited history",
        "confidence_note": "Based on 251 trading days relative to the 252-day target."
      },
      "rolling_windows": {},
      "monthly_history": [
        {
          "month_key": "2025-06",
          "month_label": "June 2025",
          "month_short_label": "Jun",
          "period_label": "2025-06-24 to 2025-06-30",
          "n_obs": 5,
          "partial_month": true,
          "dominant_driver": "sector",
          "dominant_driver_label": "Sector",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.4614980176922014,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "46.1%",
            "display_range": null,
            "display_text": "46.1%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
            "kind": "share_pct",
            "value_pct": 46.1,
            "plain_english": "Sector explains about 46.1% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.4481359055212802,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "44.8%",
              "display_range": null,
              "display_text": "44.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
              "kind": "share_pct",
              "value_pct": 44.8,
              "plain_english": "Market explains about 44.8% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.4614980176922014,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "46.1%",
              "display_range": null,
              "display_text": "46.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
              "kind": "share_pct",
              "value_pct": 46.1,
              "plain_english": "Sector explains about 46.1% of price moves in the current state."
            },
            "company_share": {
              "median": 0.09036607678651838,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "9.0%",
              "display_range": null,
              "display_text": "9.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
              "kind": "share_pct",
              "value_pct": 9.0,
              "plain_english": "Company-specific explains about 9.0% of price moves in the current state."
            }
          },
          "summary": "Jun: Mostly sector-driven, though based on only 5 trading days."
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
            "median": 0.5054295233700818,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "50.5%",
            "display_range": null,
            "display_text": "50.5%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
            "kind": "share_pct",
            "value_pct": 50.5,
            "plain_english": "Company-specific explains about 50.5% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.3494437387752558,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "34.9%",
              "display_range": null,
              "display_text": "34.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 34.9,
              "plain_english": "Market explains about 34.9% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.14512673785466226,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "14.5%",
              "display_range": null,
              "display_text": "14.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 14.5,
              "plain_english": "Sector explains about 14.5% of price moves in the current state."
            },
            "company_share": {
              "median": 0.5054295233700818,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "50.5%",
              "display_range": null,
              "display_text": "50.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 50.5,
              "plain_english": "Company-specific explains about 50.5% of price moves in the current state."
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
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.65166978841492,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "65.2%",
            "display_range": null,
            "display_text": "65.2%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
            "kind": "share_pct",
            "value_pct": 65.2,
            "plain_english": "Company-specific explains about 65.2% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.3002138426012119,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "30.0%",
              "display_range": null,
              "display_text": "30.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 30.0,
              "plain_english": "Market explains about 30.0% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.04811636898386811,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "4.8%",
              "display_range": null,
              "display_text": "4.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 4.8,
              "plain_english": "Sector explains about 4.8% of price moves in the current state."
            },
            "company_share": {
              "median": 0.65166978841492,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "65.2%",
              "display_range": null,
              "display_text": "65.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 65.2,
              "plain_english": "Company-specific explains about 65.2% of price moves in the current state."
            }
          },
          "summary": "Aug: Still clearly company-driven."
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
            "median": 0.5927672802826431,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "59.3%",
            "display_range": null,
            "display_text": "59.3%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
            "kind": "share_pct",
            "value_pct": 59.3,
            "plain_english": "Company-specific explains about 59.3% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.12568359055849787,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "12.6%",
              "display_range": null,
              "display_text": "12.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 12.6,
              "plain_english": "Market explains about 12.6% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.28154912915885905,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "28.2%",
              "display_range": null,
              "display_text": "28.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 28.2,
              "plain_english": "Sector explains about 28.2% of price moves in the current state."
            },
            "company_share": {
              "median": 0.5927672802826431,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "59.3%",
              "display_range": null,
              "display_text": "59.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 59.3,
              "plain_english": "Company-specific explains about 59.3% of price moves in the current state."
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
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.48691285678975366,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "48.7%",
            "display_range": null,
            "display_text": "48.7%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
            "kind": "share_pct",
            "value_pct": 48.7,
            "plain_english": "Market explains about 48.7% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.48691285678975366,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "48.7%",
              "display_range": null,
              "display_text": "48.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 48.7,
              "plain_english": "Market explains about 48.7% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.13222415962862155,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "13.2%",
              "display_range": null,
              "display_text": "13.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 13.2,
              "plain_english": "Sector explains about 13.2% of price moves in the current state."
            },
            "company_share": {
              "median": 0.38086298358162496,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "38.1%",
              "display_range": null,
              "display_text": "38.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 38.1,
              "plain_english": "Company-specific explains about 38.1% of price moves in the current state."
            }
          },
          "summary": "Oct: Mostly market-driven."
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
            "median": 0.5647317635382599,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "56.5%",
            "display_range": null,
            "display_text": "56.5%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
            "kind": "share_pct",
            "value_pct": 56.5,
            "plain_english": "Market explains about 56.5% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.5647317635382599,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "56.5%",
              "display_range": null,
              "display_text": "56.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 56.5,
              "plain_english": "Market explains about 56.5% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.14495541048124663,
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
              "median": 0.2903128259804934,
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
              "plain_english": "Company-specific explains about 29.0% of price moves in the current state."
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
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.6335823999366534,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "63.4%",
            "display_range": null,
            "display_text": "63.4%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
            "kind": "share_pct",
            "value_pct": 63.4,
            "plain_english": "Company-specific explains about 63.4% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.22547128443555933,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "22.5%",
              "display_range": null,
              "display_text": "22.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
              "kind": "share_pct",
              "value_pct": 22.5,
              "plain_english": "Market explains about 22.5% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.1409463156277872,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "14.1%",
              "display_range": null,
              "display_text": "14.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
              "kind": "share_pct",
              "value_pct": 14.1,
              "plain_english": "Sector explains about 14.1% of price moves in the current state."
            },
            "company_share": {
              "median": 0.6335823999366534,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "63.4%",
              "display_range": null,
              "display_text": "63.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
              "kind": "share_pct",
              "value_pct": 63.4,
              "plain_english": "Company-specific explains about 63.4% of price moves in the current state."
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
            "median": 0.4785126833782454,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "47.9%",
            "display_range": null,
            "display_text": "47.9%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
            "kind": "share_pct",
            "value_pct": 47.9,
            "plain_english": "Company-specific explains about 47.9% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.14853676995054788,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "14.9%",
              "display_range": null,
              "display_text": "14.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 14.9,
              "plain_english": "Market explains about 14.9% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.37295054667120686,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "37.3%",
              "display_range": null,
              "display_text": "37.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 37.3,
              "plain_english": "Sector explains about 37.3% of price moves in the current state."
            },
            "company_share": {
              "median": 0.4785126833782454,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "47.9%",
              "display_range": null,
              "display_text": "47.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 47.9,
              "plain_english": "Company-specific explains about 47.9% of price moves in the current state."
            }
          },
          "summary": "Jan: Mostly company-driven."
        },
        {
          "month_key": "2026-02",
          "month_label": "February 2026",
          "month_short_label": "Feb",
          "period_label": "2026-02-02 to 2026-02-27",
          "n_obs": 17,
          "partial_month": false,
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.41091720809650517,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "41.1%",
            "display_range": null,
            "display_text": "41.1%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
            "kind": "share_pct",
            "value_pct": 41.1,
            "plain_english": "Market explains about 41.1% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.41091720809650517,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "41.1%",
              "display_range": null,
              "display_text": "41.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
              "kind": "share_pct",
              "value_pct": 41.1,
              "plain_english": "Market explains about 41.1% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.2843924922862215,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "28.4%",
              "display_range": null,
              "display_text": "28.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
              "kind": "share_pct",
              "value_pct": 28.4,
              "plain_english": "Sector explains about 28.4% of price moves in the current state."
            },
            "company_share": {
              "median": 0.3046902996172734,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "30.5%",
              "display_range": null,
              "display_text": "30.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
              "kind": "share_pct",
              "value_pct": 30.5,
              "plain_english": "Company-specific explains about 30.5% of price moves in the current state."
            }
          },
          "summary": "Feb: More mixed, though market-driven still has the largest share."
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
            "median": 0.4087274421418909,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "40.9%",
            "display_range": null,
            "display_text": "40.9%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
            "kind": "share_pct",
            "value_pct": 40.9,
            "plain_english": "Market explains about 40.9% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.4087274421418909,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "40.9%",
              "display_range": null,
              "display_text": "40.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 40.9,
              "plain_english": "Market explains about 40.9% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.3596265749733328,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "36.0%",
              "display_range": null,
              "display_text": "36.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 36.0,
              "plain_english": "Sector explains about 36.0% of price moves in the current state."
            },
            "company_share": {
              "median": 0.2316459828847763,
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
              "plain_english": "Company-specific explains about 23.2% of price moves in the current state."
            }
          },
          "summary": "Mar: More mixed, though market-driven still has the largest share."
        },
        {
          "month_key": "2026-04",
          "month_label": "April 2026",
          "month_short_label": "Apr",
          "period_label": "2026-04-01 to 2026-04-30",
          "n_obs": 19,
          "partial_month": false,
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.4991300096904983,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "49.9%",
            "display_range": null,
            "display_text": "49.9%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
            "kind": "share_pct",
            "value_pct": 49.9,
            "plain_english": "Market explains about 49.9% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.4991300096904983,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "49.9%",
              "display_range": null,
              "display_text": "49.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
              "kind": "share_pct",
              "value_pct": 49.9,
              "plain_english": "Market explains about 49.9% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.24395848210669555,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "24.4%",
              "display_range": null,
              "display_text": "24.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
              "kind": "share_pct",
              "value_pct": 24.4,
              "plain_english": "Sector explains about 24.4% of price moves in the current state."
            },
            "company_share": {
              "median": 0.25691150820280617,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "25.7%",
              "display_range": null,
              "display_text": "25.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
              "kind": "share_pct",
              "value_pct": 25.7,
              "plain_english": "Company-specific explains about 25.7% of price moves in the current state."
            }
          },
          "summary": "Apr: Mostly market-driven."
        },
        {
          "month_key": "2026-05",
          "month_label": "May 2026",
          "month_short_label": "May",
          "period_label": "2026-05-04 to 2026-05-29",
          "n_obs": 19,
          "partial_month": true,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.40471113292050437,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "40.5%",
            "display_range": null,
            "display_text": "40.5%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
            "kind": "share_pct",
            "value_pct": 40.5,
            "plain_english": "Company-specific explains about 40.5% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.24962796452940275,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "25.0%",
              "display_range": null,
              "display_text": "25.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
              "kind": "share_pct",
              "value_pct": 25.0,
              "plain_english": "Market explains about 25.0% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.3456609025500928,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "34.6%",
              "display_range": null,
              "display_text": "34.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
              "kind": "share_pct",
              "value_pct": 34.6,
              "plain_english": "Sector explains about 34.6% of price moves in the current state."
            },
            "company_share": {
              "median": 0.40471113292050437,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "40.5%",
              "display_range": null,
              "display_text": "40.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
              "kind": "share_pct",
              "value_pct": 40.5,
              "plain_english": "Company-specific explains about 40.5% of price moves in the current state."
            }
          },
          "summary": "May: More mixed, though company-driven still has the largest share."
        },
        {
          "month_key": "2026-06",
          "month_label": "June 2026",
          "month_short_label": "Jun",
          "period_label": "2026-06-01 to 2026-06-30",
          "n_obs": 21,
          "partial_month": false,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.6510373488803847,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "65.1%",
            "display_range": null,
            "display_text": "65.1%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
            "kind": "share_pct",
            "value_pct": 65.1,
            "plain_english": "Company-specific explains about 65.1% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.12234835155094716,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "12.2%",
              "display_range": null,
              "display_text": "12.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 12.2,
              "plain_english": "Market explains about 12.2% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.2266142995686683,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "22.7%",
              "display_range": null,
              "display_text": "22.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 22.7,
              "plain_english": "Sector explains about 22.7% of price moves in the current state."
            },
            "company_share": {
              "median": 0.6510373488803847,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "65.1%",
              "display_range": null,
              "display_text": "65.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 65.1,
              "plain_english": "Company-specific explains about 65.1% of price moves in the current state."
            }
          },
          "summary": "Jun: Still clearly company-driven."
        },
        {
          "month_key": "2026-07",
          "month_label": "July 2026",
          "month_short_label": "Jul",
          "period_label": "2026-07-02 to 2026-07-10",
          "n_obs": 7,
          "partial_month": true,
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.4743765937635683,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "47.4%",
            "display_range": null,
            "display_text": "47.4%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 7 trading days.",
            "kind": "share_pct",
            "value_pct": 47.4,
            "plain_english": "Market explains about 47.4% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.4743765937635683,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "47.4%",
              "display_range": null,
              "display_text": "47.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 7 trading days.",
              "kind": "share_pct",
              "value_pct": 47.4,
              "plain_english": "Market explains about 47.4% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.42919448215458167,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "42.9%",
              "display_range": null,
              "display_text": "42.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 7 trading days.",
              "kind": "share_pct",
              "value_pct": 42.9,
              "plain_english": "Sector explains about 42.9% of price moves in the current state."
            },
            "company_share": {
              "median": 0.0964289240818501,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "9.6%",
              "display_range": null,
              "display_text": "9.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 7 trading days.",
              "kind": "share_pct",
              "value_pct": 9.6,
              "plain_english": "Company-specific explains about 9.6% of price moves in the current state."
            }
          },
          "summary": "Jul: Mostly market-driven, though based on only 7 trading days."
        }
      ],
      "regimes": [
        {
          "id": 0,
          "label": "Calm / Liquid",
          "pct_time": 0.27611688211244817,
          "expected_duration_days": 8.72943458936433,
          "current_probability": 8.108748662275551e-07,
          "current_probability_display": "<0.1%",
          "current_probability_basis": "filtered",
          "n_days_effective": 69.3053374102245,
          "volatility": {
            "median": 0.01174669545988608,
            "low": 0.01174669545988608,
            "high": 0.01174669545988608
          },
          "volatility_label": "Calm / Liquid",
          "jump_probability": 0.22140501822177386,
          "jump_rate": 0.05771535288285429,
          "risk_score": 0.09636405302551113,
          "metrics": {
            "rolling_vol_10d": 0.013221782761109316,
            "downside_vol_10d": 0.006762684474718974,
            "drawdown_21d": 0.01751294810177373,
            "amihud_stress": 0.12333847410375143,
            "spread_rel": 27.2883115639542,
            "spread_ticks": 3.4819418741103316,
            "log_notional": 15.880736528830658,
            "log_trade_count": 5.557487960465699
          }
        },
        {
          "id": 1,
          "label": "Normal / Active",
          "pct_time": 0.2956406492644645,
          "expected_duration_days": 3.1172795448780737,
          "current_probability": 3.456886017198692e-21,
          "current_probability_display": "<0.1%",
          "current_probability_basis": "filtered",
          "n_days_effective": 74.20580296538058,
          "volatility": {
            "median": 0.007448628267091885,
            "low": 0.007448628267091885,
            "high": 0.007448628267091885
          },
          "volatility_label": "Normal / Active",
          "jump_probability": 0.14660506412157406,
          "jump_rate": 9.662297498410176e-18,
          "risk_score": 0.24223183199766474,
          "metrics": {
            "rolling_vol_10d": 0.017316313656480595,
            "downside_vol_10d": 0.008479232036661132,
            "drawdown_21d": 0.03105897113376099,
            "amihud_stress": 0.074333341043624,
            "spread_rel": 35.464805121507226,
            "spread_ticks": 4.2657016507412235,
            "log_notional": 15.885917301225494,
            "log_trade_count": 5.571492992082682
          }
        },
        {
          "id": 2,
          "label": "Stressed / Illiquid",
          "pct_time": 0.20561202990242133,
          "expected_duration_days": 1.8298682838206493,
          "current_probability": 0.9999991891244512,
          "current_probability_display": ">99.9%",
          "current_probability_basis": "filtered",
          "n_days_effective": 51.608619505507754,
          "volatility": {
            "median": 0.027642774090180674,
            "low": 0.027642774090180674,
            "high": 0.027642774090180674
          },
          "volatility_label": "Stressed / Illiquid",
          "jump_probability": 0.3406607097480544,
          "jump_rate": 0.13602489167013562,
          "risk_score": 0.483989465779863,
          "metrics": {
            "rolling_vol_10d": 0.019557533200824682,
            "downside_vol_10d": 0.009456070824095138,
            "drawdown_21d": 0.03496534002340606,
            "amihud_stress": 0.2052168970456058,
            "spread_rel": 27.674105717652445,
            "spread_ticks": 3.307508887599394,
            "log_notional": 16.384382115712523,
            "log_trade_count": 5.888420397020878
          }
        },
        {
          "id": 3,
          "label": "Jump / Tail Shock",
          "pct_time": 0.22263043872066599,
          "expected_duration_days": 18.586746607961267,
          "current_probability": 6.824704893333518e-13,
          "current_probability_display": "<0.1%",
          "current_probability_basis": "filtered",
          "n_days_effective": 55.880240118887166,
          "volatility": {
            "median": 0.02636141898605917,
            "low": 0.02636141898605917,
            "high": 0.02636141898605917
          },
          "volatility_label": "Jump / Tail Shock",
          "jump_probability": 0.2642115209808701,
          "jump_rate": 0.08911846310299719,
          "risk_score": 0.9015112540009089,
          "metrics": {
            "rolling_vol_10d": 0.026355721457824968,
            "downside_vol_10d": 0.01692117094073311,
            "drawdown_21d": 0.0949866011333817,
            "amihud_stress": 0.20804701989661156,
            "spread_rel": 40.72951839289389,
            "spread_ticks": 4.7215660272468245,
            "log_notional": 15.925090262581989,
            "log_trade_count": 5.579776310156814
          }
        }
      ],
      "transitions": {
        "mean": [
          [
            0.8854450434603899,
            0.00014485385624318336,
            0.11426610338551553,
            0.0001439992978514564
          ],
          [
            0.014334414718310661,
            0.6792074674075748,
            0.266216155362562,
            0.040241962511552716
          ],
          [
            0.13554865910127323,
            0.41069532283860627,
            0.4535125785599916,
            0.00024343950012884933
          ],
          [
            0.00017850683347907242,
            0.05343936709589751,
            0.000183903277381565,
            0.9461982227932418
          ]
        ],
        "low": [],
        "high": [],
        "counts": [
          [
            62.0,
            0.0,
            8.0,
            0.0
          ],
          [
            1.0,
            52.0,
            19.0,
            3.0
          ],
          [
            7.0,
            20.0,
            22.0,
            0.0
          ],
          [
            0.0,
            3.0,
            0.0,
            53.0
          ]
        ]
      },
      "current_state_is_transition": false,
      "state_probabilities": [
        {
          "id": 0,
          "label": "Calm / Liquid",
          "probability": 8.108748662275551e-07,
          "probability_display": "<0.1%",
          "basis": "filtered"
        },
        {
          "id": 1,
          "label": "Normal / Active",
          "probability": 3.456886017198692e-21,
          "probability_display": "<0.1%",
          "basis": "filtered"
        },
        {
          "id": 2,
          "label": "Stressed / Illiquid",
          "probability": 0.9999991891244512,
          "probability_display": ">99.9%",
          "basis": "filtered"
        },
        {
          "id": 3,
          "label": "Jump / Tail Shock",
          "probability": 6.824704893333518e-13,
          "probability_display": "<0.1%",
          "basis": "filtered"
        }
      ],
      "jump_risk": {
        "current_probability": 0.34066061304655926,
        "current_score": 1.64050155500402,
        "current_flag": false,
        "jump_threshold_score": 2.5,
        "method": "robust_residual_and_return_jump_overlay",
        "model_definition": "jump_score_feature_overlay"
      },
      "model_selection": {
        "chosen": 4,
        "criterion": "bic_with_min_state_support",
        "bic": 11681.736161701148,
        "loglik": -5313.187325163489,
        "n_params": 191,
        "bic_delta_vs_next_best": 199.0171719818518,
        "candidates": [
          {
            "k": 2,
            "valid": true,
            "reason": "ok",
            "bic": 12343.0724400894,
            "loglik": -5920.128111314204,
            "n_params": 91,
            "converged": true,
            "iterations": 11,
            "best_seed": 2027,
            "seed_runs": [
              {
                "seed": 42,
                "k": 2,
                "valid": true,
                "reason": "ok",
                "bic": 12351.920745222158,
                "loglik": -5924.552263880583,
                "n_params": 91,
                "converged": true,
                "iterations": 12
              },
              {
                "seed": 1337,
                "k": 2,
                "valid": true,
                "reason": "ok",
                "bic": 12343.072471592412,
                "loglik": -5920.12812706571,
                "n_params": 91,
                "converged": true,
                "iterations": 13
              },
              {
                "seed": 2027,
                "k": 2,
                "valid": true,
                "reason": "ok",
                "bic": 12343.0724400894,
                "loglik": -5920.128111314204,
                "n_params": 91,
                "converged": true,
                "iterations": 11
              }
            ]
          },
          {
            "k": 3,
            "valid": true,
            "reason": "ok",
            "bic": 11880.753333683,
            "loglik": -5553.594961102275,
            "n_params": 140,
            "converged": true,
            "iterations": 27,
            "best_seed": 2027,
            "seed_runs": [
              {
                "seed": 42,
                "k": 3,
                "valid": true,
                "reason": "ok",
                "bic": 11880.753337217848,
                "loglik": -5553.594962869699,
                "n_params": 140,
                "converged": true,
                "iterations": 30
              },
              {
                "seed": 1337,
                "k": 3,
                "valid": true,
                "reason": "ok",
                "bic": 11880.753344441708,
                "loglik": -5553.594966481629,
                "n_params": 140,
                "converged": true,
                "iterations": 38
              },
              {
                "seed": 2027,
                "k": 3,
                "valid": true,
                "reason": "ok",
                "bic": 11880.753333683,
                "loglik": -5553.594961102275,
                "n_params": 140,
                "converged": true,
                "iterations": 27
              }
            ]
          },
          {
            "k": 4,
            "valid": true,
            "reason": "ok",
            "bic": 11681.736161701148,
            "loglik": -5313.187325163489,
            "n_params": 191,
            "converged": true,
            "iterations": 50,
            "best_seed": 1337,
            "seed_runs": [
              {
                "seed": 42,
                "k": 4,
                "valid": true,
                "reason": "ok",
                "bic": 11681.736199231758,
                "loglik": -5313.187343928794,
                "n_params": 191,
                "converged": true,
                "iterations": 37
              },
              {
                "seed": 1337,
                "k": 4,
                "valid": true,
                "reason": "ok",
                "bic": 11681.736161701148,
                "loglik": -5313.187325163489,
                "n_params": 191,
                "converged": true,
                "iterations": 50
              },
              {
                "seed": 2027,
                "k": 4,
                "valid": true,
                "reason": "ok",
                "bic": 11681.736191813725,
                "loglik": -5313.187340219777,
                "n_params": 191,
                "converged": true,
                "iterations": 39
              }
            ]
          }
        ],
        "seed_stability": {
          "seeds_tested": [
            42,
            1337,
            2027
          ],
          "valid_seed_count": 3,
          "selected_by_seed": [
            {
              "seed": 42,
              "selected_states": 4,
              "bic": 11681.736199231758,
              "valid": true,
              "reason": null
            },
            {
              "seed": 1337,
              "selected_states": 4,
              "bic": 11681.736161701148,
              "valid": true,
              "reason": null
            },
            {
              "seed": 2027,
              "selected_states": 4,
              "bic": 11681.736191813725,
              "valid": true,
              "reason": null
            }
          ],
          "selected_state_counts": {
            "4": 3
          },
          "selected_state_share": 1.0,
          "stable": true,
          "majority_support": true
        },
        "rolling_window_stability": {
          "status": "mixed",
          "minimum_history_days": 160,
          "windows": [
            {
              "window_days": 126,
              "candidate_states": [
                2,
                3,
                4
              ],
              "selected_states": 3,
              "bic_by_state": {
                "2": 6814.627512101873,
                "3": 6624.93564694188,
                "4": 6644.607999865784
              },
              "valid": true
            },
            {
              "window_days": 189,
              "candidate_states": [
                2,
                3,
                4
              ],
              "selected_states": 4,
              "bic_by_state": {
                "2": 9751.065787982263,
                "3": 9540.222984162905,
                "4": 9277.680033419667
              },
              "valid": true
            },
            {
              "window_days": 251,
              "candidate_states": [
                2,
                3,
                4
              ],
              "selected_states": 4,
              "bic_by_state": {
                "2": 12351.920775664292,
                "3": 11880.753388330648,
                "4": 11681.736199231758
              },
              "valid": true
            }
          ],
          "stable": false
        }
      },
      "robustness_diagnostics": {
        "history_used_days": 251,
        "n_features": 22,
        "candidate_states": [
          2,
          3,
          4
        ],
        "selected_states": 4,
        "bic_delta_vs_next_best": 199.0171719818518,
        "state_count_interpretation": "251 observations allowed the current rule to test up to 4 states; BIC preferred 4 with a 199.02 improvement versus the next best valid state count.",
        "parameter_count": {
          "formula": "k^2 - 1 + 2*k*d",
          "n_parameters": 191,
          "observations_per_parameter": 1.3141361256544504,
          "parameter_pressure_label": "parameter_heavy"
        },
        "state_occupancy": {
          "min_effective_days_required": 7.529999999999999,
          "min_effective_days_observed": 51.608619505507754,
          "passes": true,
          "states": [
            {
              "id": 0,
              "label": "Calm / Liquid",
              "effective_days": 69.3053374102245,
              "pct_time": 0.27611688211244817,
              "passes_min_support": true
            },
            {
              "id": 1,
              "label": "Normal / Active",
              "effective_days": 74.20580296538058,
              "pct_time": 0.2956406492644645,
              "passes_min_support": true
            },
            {
              "id": 2,
              "label": "Stressed / Illiquid",
              "effective_days": 51.608619505507754,
              "pct_time": 0.20561202990242133,
              "passes_min_support": true
            },
            {
              "id": 3,
              "label": "Jump / Tail Shock",
              "effective_days": 55.880240118887166,
              "pct_time": 0.22263043872066599,
              "passes_min_support": true
            }
          ]
        },
        "transition_diagnostics": {
          "self_transition_probabilities": [
            0.8854450434603899,
            0.6792074674075748,
            0.4535125785599916,
            0.9461982227932418
          ],
          "expected_duration_days": [
            8.72943458936433,
            3.1172795448780737,
            1.8298682838206493,
            18.586746607961267
          ],
          "nearly_absorbing_state_ids": [],
          "fast_switching_state_ids": [
            2
          ],
          "warnings": [
            "fast_switching_states"
          ]
        },
        "seed_stability": {
          "seeds_tested": [
            42,
            1337,
            2027
          ],
          "valid_seed_count": 3,
          "selected_by_seed": [
            {
              "seed": 42,
              "selected_states": 4,
              "bic": 11681.736199231758,
              "valid": true,
              "reason": null
            },
            {
              "seed": 1337,
              "selected_states": 4,
              "bic": 11681.736161701148,
              "valid": true,
              "reason": null
            },
            {
              "seed": 2027,
              "selected_states": 4,
              "bic": 11681.736191813725,
              "valid": true,
              "reason": null
            }
          ],
          "selected_state_counts": {
            "4": 3
          },
          "selected_state_share": 1.0,
          "stable": true,
          "majority_support": true
        },
        "rolling_window_stability": {
          "status": "mixed",
          "minimum_history_days": 160,
          "windows": [
            {
              "window_days": 126,
              "candidate_states": [
                2,
                3,
                4
              ],
              "selected_states": 3,
              "bic_by_state": {
                "2": 6814.627512101873,
                "3": 6624.93564694188,
                "4": 6644.607999865784
              },
              "valid": true
            },
            {
              "window_days": 189,
              "candidate_states": [
                2,
                3,
                4
              ],
              "selected_states": 4,
              "bic_by_state": {
                "2": 9751.065787982263,
                "3": 9540.222984162905,
                "4": 9277.680033419667
              },
              "valid": true
            },
            {
              "window_days": 251,
              "candidate_states": [
                2,
                3,
                4
              ],
              "selected_states": 4,
              "bic_by_state": {
                "2": 12351.920775664292,
                "3": 11880.753388330648,
                "4": 11681.736199231758
              },
              "valid": true
            }
          ],
          "stable": false
        },
        "feature_profile_by_state": [
          {
            "id": 0,
            "label": "Calm / Liquid",
            "risk_score": 0.09636405302551113,
            "jump_probability": 0.22140501822177386,
            "jump_rate": 0.05771535288285429,
            "rolling_vol_10d": 0.013221782761109316,
            "downside_vol_10d": 0.006762684474718974,
            "drawdown_21d": 0.01751294810177373,
            "amihud_stress": 0.12333847410375143,
            "spread_rel": 27.2883115639542,
            "spread_ticks": 3.4819418741103316,
            "log_notional": 15.880736528830658,
            "log_trade_count": 5.557487960465699
          },
          {
            "id": 1,
            "label": "Normal / Active",
            "risk_score": 0.24223183199766474,
            "jump_probability": 0.14660506412157406,
            "jump_rate": 9.662297498410176e-18,
            "rolling_vol_10d": 0.017316313656480595,
            "downside_vol_10d": 0.008479232036661132,
            "drawdown_21d": 0.03105897113376099,
            "amihud_stress": 0.074333341043624,
            "spread_rel": 35.464805121507226,
            "spread_ticks": 4.2657016507412235,
            "log_notional": 15.885917301225494,
            "log_trade_count": 5.571492992082682
          },
          {
            "id": 2,
            "label": "Stressed / Illiquid",
            "risk_score": 0.483989465779863,
            "jump_probability": 0.3406607097480544,
            "jump_rate": 0.13602489167013562,
            "rolling_vol_10d": 0.019557533200824682,
            "downside_vol_10d": 0.009456070824095138,
            "drawdown_21d": 0.03496534002340606,
            "amihud_stress": 0.2052168970456058,
            "spread_rel": 27.674105717652445,
            "spread_ticks": 3.307508887599394,
            "log_notional": 16.384382115712523,
            "log_trade_count": 5.888420397020878
          },
          {
            "id": 3,
            "label": "Jump / Tail Shock",
            "risk_score": 0.9015112540009089,
            "jump_probability": 0.2642115209808701,
            "jump_rate": 0.08911846310299719,
            "rolling_vol_10d": 0.026355721457824968,
            "downside_vol_10d": 0.01692117094073311,
            "drawdown_21d": 0.0949866011333817,
            "amihud_stress": 0.20804701989661156,
            "spread_rel": 40.72951839289389,
            "spread_ticks": 4.7215660272468245,
            "log_notional": 15.925090262581989,
            "log_trade_count": 5.579776310156814
          }
        ],
        "jump_model_definition": {
          "type": "jump_score_feature_overlay",
          "method_name": "hmm_jump_aware",
          "description": "Jump score enters the HMM feature panel and current jump risk overlay; the likelihood is still diagonal Gaussian, not a full jump-diffusion emission model."
        },
        "probability_basis": {
          "current_state": "filtered_forward_probability",
          "historical_states": "smoothed_forward_backward_probability",
          "lookahead_note": "Current live monitoring uses filtered probabilities; smoothed probabilities are retained for retrospective historical charts."
        }
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
          "trade_date": "2026-06-26",
          "state": 2,
          "probabilities": [
            1.0500197034940023e-16,
            4.25311151984619e-12,
            0.9997916179893203,
            0.0002083820064265556
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            7.134247155774456e-14,
            2.5755005668348517e-12,
            0.9983942192439654,
            0.0016057807533876975
          ],
          "jump_probability": 0.30976870001538426,
          "jump_score": 1.5533035923619745
        },
        {
          "trade_date": "2026-06-29",
          "state": 1,
          "probabilities": [
            1.1450424623414394e-09,
            0.9955612384679958,
            0.004438676169994974,
            8.421696669338257e-08
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            2.0589012656641854e-07,
            0.9928398246393163,
            0.007158888694388268,
            1.0807761686776044e-06
          ],
          "jump_probability": 0.1322325378088754,
          "jump_score": 0.6140332562617581
        },
        {
          "trade_date": "2026-06-30",
          "state": 1,
          "probabilities": [
            1.8420088765551851e-09,
            0.9874725611020473,
            0.012527432711701954,
            4.344241811783996e-09
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            4.313834388422992e-09,
            0.9926032259188922,
            0.007391999495757905,
            4.770271515439794e-06
          ],
          "jump_probability": 0.1378203455425977,
          "jump_score": 0.6556411550748412
        },
        {
          "trade_date": "2026-07-02",
          "state": 2,
          "probabilities": [
            2.159793720265458e-25,
            8.811995581095956e-40,
            0.9999905648648938,
            9.435135106165054e-06
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            5.8864822065504e-22,
            5.328181286296295e-40,
            0.9999275384079019,
            7.246159209811259e-05
          ],
          "jump_probability": 0.649512762117573,
          "jump_score": 2.786433209064982
        },
        {
          "trade_date": "2026-07-03",
          "state": 1,
          "probabilities": [
            5.317988354913863e-10,
            0.9999436787863979,
            5.629145863358046e-05,
            2.922316975208682e-08
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            2.278616655118193e-06,
            0.9999042667820942,
            9.308319578464794e-05,
            3.7140546601907596e-07
          ],
          "jump_probability": 0.1414002668855365,
          "jump_score": 0.6815580834426668
        },
        {
          "trade_date": "2026-07-06",
          "state": 1,
          "probabilities": [
            1.1199936919154056e-09,
            0.9999531054298649,
            4.671436463065915e-05,
            1.790855107789512e-07
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            4.012204600273386e-06,
            0.9999164793925163,
            7.723198969534458e-05,
            2.276413188169158e-06
          ],
          "jump_probability": 0.11246973968516484,
          "jump_score": 0.4536883373814746
        },
        {
          "trade_date": "2026-07-07",
          "state": 1,
          "probabilities": [
            1.0734485153941584e-08,
            0.999847986131998,
            0.000152002877849702,
            2.5566712237774933e-10
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            2.5009515762154937e-08,
            0.9999103723127805,
            8.923255743366936e-05,
            3.7012027006157867e-07
          ],
          "jump_probability": 0.09274159396237186,
          "jump_score": 0.26686065634152006
        },
        {
          "trade_date": "2026-07-08",
          "state": 2,
          "probabilities": [
            3.2284747767521884e-07,
            3.5227936044881055e-18,
            0.9999996770400525,
            1.1246974118011201e-10
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            5.213824565455057e-08,
            2.502847402714591e-17,
            0.9999999004900885,
            4.737166594609047e-08
          ],
          "jump_probability": 0.38980505399125975,
          "jump_score": 1.8603202285722673
        },
        {
          "trade_date": "2026-07-09",
          "state": 0,
          "probabilities": [
            0.9461791694058724,
            0.008529018698004558,
            0.04529181189609683,
            2.6293850438945156e-14
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            0.98431992712419,
            0.0038084244141953875,
            0.011871648444618702,
            1.6995922735678825e-11
          ],
          "jump_probability": 0.14170600214587684,
          "jump_score": 0.6837459202475179
        },
        {
          "trade_date": "2026-07-10",
          "state": 2,
          "probabilities": [
            8.108748662275551e-07,
            3.456886017198692e-21,
            0.9999991891244512,
            6.824704893333518e-13
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            8.108748662275551e-07,
            3.456886017198692e-21,
            0.9999991891244512,
            6.824704893333518e-13
          ],
          "jump_probability": 0.3316075716952018,
          "jump_score": 1.64050155500402
        }
      ],
      "methodology": {
        "estimation_window_days": 251,
        "reporting_window_days": 63,
        "current_mix_method": "ols_last_5d",
        "monthly_history_method": "ols_per_month",
        "regime_inference": "hmm_jump_aware",
        "regime_feature_stack": "returns_volatility_shape_liquidity_activity_jump_score",
        "regime_scaling": "robust_median_iqr",
        "regime_model_selection": "bic_with_min_state_support",
        "jump_component": "robust_residual_and_return_jump_overlay",
        "jump_model_definition": "jump_score_feature_overlay_not_full_jump_diffusion",
        "current_state_probability_basis": "filtered",
        "historical_state_probability_basis": "smoothed",
        "distribution": "gaussian",
        "history_limited": true,
        "current_driver_mix_basis": "ols_recent_window",
        "sector_proxy_equals_market": false
      },
      "client_read": {
        "market_link_display": "-2.84",
        "sector_link_display": "1.73",
        "market_link_explainer": "High market link. A 1% market move has lined up with about a 2.84% stock move in the opposite direction in this state. This is a point estimate from 251 trading days.",
        "sector_link_explainer": "High sector link. A 1% sector move has lined up with about a 1.73% stock move in the same direction in this state. This is a point estimate from 251 trading days.",
        "stock_persistence_display": "0.16",
        "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
        "history_limited_note": "Read is based on 251 trading days versus the 252-day target."
      },
      "current_summary": {
        "regime_label": "Stressed / Illiquid",
        "dominant_driver": "market",
        "dominant_driver_label": "Market",
        "driver_share_pct": 60.5,
        "driver_share_display": "60.5%",
        "confidence_label": "High, limited history",
        "confidence_pct": 99.9,
        "confidence_display": ">99.9%",
        "probability_basis": "filtered",
        "display_confidence_pct": null,
        "confidence_note": "Based on 251 trading days relative to the 252-day target.",
        "history_days": 251,
        "history_limited": true,
        "volatility_label": "Stressed / Illiquid",
        "jump_risk_label": "Watch",
        "jump_risk_probability": 34.1,
        "jump_risk_score": 1.64,
        "jump_risk_note": "Jump risk is watch based on recent residual and return shocks.",
        "lead_signal_text": "No stable lead signal.",
        "state_term": "state",
        "stay_probability": 0.4535125785599916,
        "effective_days": 51.6,
        "persistence_note": "This looks like a short-lived state, not a sticky regime: the typical run length is about 1.8 days.",
        "expected_duration_days": 1.8
      },
      "display_notes": {
        "collapsed_interval": "When only one number is shown, the run produced a point estimate instead of a wider uncertainty range."
      }
    },
    "regime_switching": {
      "valid": true,
      "regime_method": "hmm_jump_aware",
      "n_regimes": 4,
      "regimes": [
        {
          "id": 0,
          "label": "Calm / Liquid",
          "pct_time": 0.27611688211244817,
          "expected_duration_days": 8.72943458936433,
          "current_probability": 8.108748662275551e-07,
          "current_probability_display": "<0.1%",
          "current_probability_basis": "filtered",
          "n_days_effective": 69.3053374102245,
          "volatility": {
            "median": 0.01174669545988608,
            "low": 0.01174669545988608,
            "high": 0.01174669545988608
          },
          "volatility_label": "Calm / Liquid",
          "jump_probability": 0.22140501822177386,
          "jump_rate": 0.05771535288285429,
          "risk_score": 0.09636405302551113,
          "metrics": {
            "rolling_vol_10d": 0.013221782761109316,
            "downside_vol_10d": 0.006762684474718974,
            "drawdown_21d": 0.01751294810177373,
            "amihud_stress": 0.12333847410375143,
            "spread_rel": 27.2883115639542,
            "spread_ticks": 3.4819418741103316,
            "log_notional": 15.880736528830658,
            "log_trade_count": 5.557487960465699
          }
        },
        {
          "id": 1,
          "label": "Normal / Active",
          "pct_time": 0.2956406492644645,
          "expected_duration_days": 3.1172795448780737,
          "current_probability": 3.456886017198692e-21,
          "current_probability_display": "<0.1%",
          "current_probability_basis": "filtered",
          "n_days_effective": 74.20580296538058,
          "volatility": {
            "median": 0.007448628267091885,
            "low": 0.007448628267091885,
            "high": 0.007448628267091885
          },
          "volatility_label": "Normal / Active",
          "jump_probability": 0.14660506412157406,
          "jump_rate": 9.662297498410176e-18,
          "risk_score": 0.24223183199766474,
          "metrics": {
            "rolling_vol_10d": 0.017316313656480595,
            "downside_vol_10d": 0.008479232036661132,
            "drawdown_21d": 0.03105897113376099,
            "amihud_stress": 0.074333341043624,
            "spread_rel": 35.464805121507226,
            "spread_ticks": 4.2657016507412235,
            "log_notional": 15.885917301225494,
            "log_trade_count": 5.571492992082682
          }
        },
        {
          "id": 2,
          "label": "Stressed / Illiquid",
          "pct_time": 0.20561202990242133,
          "expected_duration_days": 1.8298682838206493,
          "current_probability": 0.9999991891244512,
          "current_probability_display": ">99.9%",
          "current_probability_basis": "filtered",
          "n_days_effective": 51.608619505507754,
          "volatility": {
            "median": 0.027642774090180674,
            "low": 0.027642774090180674,
            "high": 0.027642774090180674
          },
          "volatility_label": "Stressed / Illiquid",
          "jump_probability": 0.3406607097480544,
          "jump_rate": 0.13602489167013562,
          "risk_score": 0.483989465779863,
          "metrics": {
            "rolling_vol_10d": 0.019557533200824682,
            "downside_vol_10d": 0.009456070824095138,
            "drawdown_21d": 0.03496534002340606,
            "amihud_stress": 0.2052168970456058,
            "spread_rel": 27.674105717652445,
            "spread_ticks": 3.307508887599394,
            "log_notional": 16.384382115712523,
            "log_trade_count": 5.888420397020878
          }
        },
        {
          "id": 3,
          "label": "Jump / Tail Shock",
          "pct_time": 0.22263043872066599,
          "expected_duration_days": 18.586746607961267,
          "current_probability": 6.824704893333518e-13,
          "current_probability_display": "<0.1%",
          "current_probability_basis": "filtered",
          "n_days_effective": 55.880240118887166,
          "volatility": {
            "median": 0.02636141898605917,
            "low": 0.02636141898605917,
            "high": 0.02636141898605917
          },
          "volatility_label": "Jump / Tail Shock",
          "jump_probability": 0.2642115209808701,
          "jump_rate": 0.08911846310299719,
          "risk_score": 0.9015112540009089,
          "metrics": {
            "rolling_vol_10d": 0.026355721457824968,
            "downside_vol_10d": 0.01692117094073311,
            "drawdown_21d": 0.0949866011333817,
            "amihud_stress": 0.20804701989661156,
            "spread_rel": 40.72951839289389,
            "spread_ticks": 4.7215660272468245,
            "log_notional": 15.925090262581989,
            "log_trade_count": 5.579776310156814
          }
        }
      ],
      "transitions": [
        [
          0.8854450434603899,
          0.00014485385624318336,
          0.11426610338551553,
          0.0001439992978514564
        ],
        [
          0.014334414718310661,
          0.6792074674075748,
          0.266216155362562,
          0.040241962511552716
        ],
        [
          0.13554865910127323,
          0.41069532283860627,
          0.4535125785599916,
          0.00024343950012884933
        ],
        [
          0.00017850683347907242,
          0.05343936709589751,
          0.000183903277381565,
          0.9461982227932418
        ]
      ],
      "transition_intervals": {
        "mean": [
          [
            0.8854450434603899,
            0.00014485385624318336,
            0.11426610338551553,
            0.0001439992978514564
          ],
          [
            0.014334414718310661,
            0.6792074674075748,
            0.266216155362562,
            0.040241962511552716
          ],
          [
            0.13554865910127323,
            0.41069532283860627,
            0.4535125785599916,
            0.00024343950012884933
          ],
          [
            0.00017850683347907242,
            0.05343936709589751,
            0.000183903277381565,
            0.9461982227932418
          ]
        ],
        "low": [],
        "high": [],
        "counts": [
          [
            62.0,
            0.0,
            8.0,
            0.0
          ],
          [
            1.0,
            52.0,
            19.0,
            3.0
          ],
          [
            7.0,
            20.0,
            22.0,
            0.0
          ],
          [
            0.0,
            3.0,
            0.0,
            53.0
          ]
        ]
      },
      "current_regime": 2,
      "current_regime_label": "Stressed / Illiquid",
      "current_regime_probability": 0.9999991891244512,
      "current_regime_probability_display": ">99.9%",
      "current_probability_basis": "filtered",
      "historical_probability_basis": "smoothed",
      "current_state_is_transition": false,
      "state_probabilities": [
        {
          "id": 0,
          "label": "Calm / Liquid",
          "probability": 8.108748662275551e-07,
          "probability_display": "<0.1%",
          "basis": "filtered"
        },
        {
          "id": 1,
          "label": "Normal / Active",
          "probability": 3.456886017198692e-21,
          "probability_display": "<0.1%",
          "basis": "filtered"
        },
        {
          "id": 2,
          "label": "Stressed / Illiquid",
          "probability": 0.9999991891244512,
          "probability_display": ">99.9%",
          "basis": "filtered"
        },
        {
          "id": 3,
          "label": "Jump / Tail Shock",
          "probability": 6.824704893333518e-13,
          "probability_display": "<0.1%",
          "basis": "filtered"
        }
      ],
      "jump_risk": {
        "current_probability": 0.34066061304655926,
        "current_score": 1.64050155500402,
        "current_flag": false,
        "jump_threshold_score": 2.5,
        "method": "robust_residual_and_return_jump_overlay",
        "model_definition": "jump_score_feature_overlay"
      },
      "model_selection": {
        "chosen": 4,
        "criterion": "bic_with_min_state_support",
        "bic": 11681.736161701148,
        "loglik": -5313.187325163489,
        "n_params": 191,
        "bic_delta_vs_next_best": 199.0171719818518,
        "candidates": [
          {
            "k": 2,
            "valid": true,
            "reason": "ok",
            "bic": 12343.0724400894,
            "loglik": -5920.128111314204,
            "n_params": 91,
            "converged": true,
            "iterations": 11,
            "best_seed": 2027,
            "seed_runs": [
              {
                "seed": 42,
                "k": 2,
                "valid": true,
                "reason": "ok",
                "bic": 12351.920745222158,
                "loglik": -5924.552263880583,
                "n_params": 91,
                "converged": true,
                "iterations": 12
              },
              {
                "seed": 1337,
                "k": 2,
                "valid": true,
                "reason": "ok",
                "bic": 12343.072471592412,
                "loglik": -5920.12812706571,
                "n_params": 91,
                "converged": true,
                "iterations": 13
              },
              {
                "seed": 2027,
                "k": 2,
                "valid": true,
                "reason": "ok",
                "bic": 12343.0724400894,
                "loglik": -5920.128111314204,
                "n_params": 91,
                "converged": true,
                "iterations": 11
              }
            ]
          },
          {
            "k": 3,
            "valid": true,
            "reason": "ok",
            "bic": 11880.753333683,
            "loglik": -5553.594961102275,
            "n_params": 140,
            "converged": true,
            "iterations": 27,
            "best_seed": 2027,
            "seed_runs": [
              {
                "seed": 42,
                "k": 3,
                "valid": true,
                "reason": "ok",
                "bic": 11880.753337217848,
                "loglik": -5553.594962869699,
                "n_params": 140,
                "converged": true,
                "iterations": 30
              },
              {
                "seed": 1337,
                "k": 3,
                "valid": true,
                "reason": "ok",
                "bic": 11880.753344441708,
                "loglik": -5553.594966481629,
                "n_params": 140,
                "converged": true,
                "iterations": 38
              },
              {
                "seed": 2027,
                "k": 3,
                "valid": true,
                "reason": "ok",
                "bic": 11880.753333683,
                "loglik": -5553.594961102275,
                "n_params": 140,
                "converged": true,
                "iterations": 27
              }
            ]
          },
          {
            "k": 4,
            "valid": true,
            "reason": "ok",
            "bic": 11681.736161701148,
            "loglik": -5313.187325163489,
            "n_params": 191,
            "converged": true,
            "iterations": 50,
            "best_seed": 1337,
            "seed_runs": [
              {
                "seed": 42,
                "k": 4,
                "valid": true,
                "reason": "ok",
                "bic": 11681.736199231758,
                "loglik": -5313.187343928794,
                "n_params": 191,
                "converged": true,
                "iterations": 37
              },
              {
                "seed": 1337,
                "k": 4,
                "valid": true,
                "reason": "ok",
                "bic": 11681.736161701148,
                "loglik": -5313.187325163489,
                "n_params": 191,
                "converged": true,
                "iterations": 50
              },
              {
                "seed": 2027,
                "k": 4,
                "valid": true,
                "reason": "ok",
                "bic": 11681.736191813725,
                "loglik": -5313.187340219777,
                "n_params": 191,
                "converged": true,
                "iterations": 39
              }
            ]
          }
        ],
        "seed_stability": {
          "seeds_tested": [
            42,
            1337,
            2027
          ],
          "valid_seed_count": 3,
          "selected_by_seed": [
            {
              "seed": 42,
              "selected_states": 4,
              "bic": 11681.736199231758,
              "valid": true,
              "reason": null
            },
            {
              "seed": 1337,
              "selected_states": 4,
              "bic": 11681.736161701148,
              "valid": true,
              "reason": null
            },
            {
              "seed": 2027,
              "selected_states": 4,
              "bic": 11681.736191813725,
              "valid": true,
              "reason": null
            }
          ],
          "selected_state_counts": {
            "4": 3
          },
          "selected_state_share": 1.0,
          "stable": true,
          "majority_support": true
        },
        "rolling_window_stability": {
          "status": "mixed",
          "minimum_history_days": 160,
          "windows": [
            {
              "window_days": 126,
              "candidate_states": [
                2,
                3,
                4
              ],
              "selected_states": 3,
              "bic_by_state": {
                "2": 6814.627512101873,
                "3": 6624.93564694188,
                "4": 6644.607999865784
              },
              "valid": true
            },
            {
              "window_days": 189,
              "candidate_states": [
                2,
                3,
                4
              ],
              "selected_states": 4,
              "bic_by_state": {
                "2": 9751.065787982263,
                "3": 9540.222984162905,
                "4": 9277.680033419667
              },
              "valid": true
            },
            {
              "window_days": 251,
              "candidate_states": [
                2,
                3,
                4
              ],
              "selected_states": 4,
              "bic_by_state": {
                "2": 12351.920775664292,
                "3": 11880.753388330648,
                "4": 11681.736199231758
              },
              "valid": true
            }
          ],
          "stable": false
        }
      },
      "robustness_diagnostics": {
        "history_used_days": 251,
        "n_features": 22,
        "candidate_states": [
          2,
          3,
          4
        ],
        "selected_states": 4,
        "bic_delta_vs_next_best": 199.0171719818518,
        "state_count_interpretation": "251 observations allowed the current rule to test up to 4 states; BIC preferred 4 with a 199.02 improvement versus the next best valid state count.",
        "parameter_count": {
          "formula": "k^2 - 1 + 2*k*d",
          "n_parameters": 191,
          "observations_per_parameter": 1.3141361256544504,
          "parameter_pressure_label": "parameter_heavy"
        },
        "state_occupancy": {
          "min_effective_days_required": 7.529999999999999,
          "min_effective_days_observed": 51.608619505507754,
          "passes": true,
          "states": [
            {
              "id": 0,
              "label": "Calm / Liquid",
              "effective_days": 69.3053374102245,
              "pct_time": 0.27611688211244817,
              "passes_min_support": true
            },
            {
              "id": 1,
              "label": "Normal / Active",
              "effective_days": 74.20580296538058,
              "pct_time": 0.2956406492644645,
              "passes_min_support": true
            },
            {
              "id": 2,
              "label": "Stressed / Illiquid",
              "effective_days": 51.608619505507754,
              "pct_time": 0.20561202990242133,
              "passes_min_support": true
            },
            {
              "id": 3,
              "label": "Jump / Tail Shock",
              "effective_days": 55.880240118887166,
              "pct_time": 0.22263043872066599,
              "passes_min_support": true
            }
          ]
        },
        "transition_diagnostics": {
          "self_transition_probabilities": [
            0.8854450434603899,
            0.6792074674075748,
            0.4535125785599916,
            0.9461982227932418
          ],
          "expected_duration_days": [
            8.72943458936433,
            3.1172795448780737,
            1.8298682838206493,
            18.586746607961267
          ],
          "nearly_absorbing_state_ids": [],
          "fast_switching_state_ids": [
            2
          ],
          "warnings": [
            "fast_switching_states"
          ]
        },
        "seed_stability": {
          "seeds_tested": [
            42,
            1337,
            2027
          ],
          "valid_seed_count": 3,
          "selected_by_seed": [
            {
              "seed": 42,
              "selected_states": 4,
              "bic": 11681.736199231758,
              "valid": true,
              "reason": null
            },
            {
              "seed": 1337,
              "selected_states": 4,
              "bic": 11681.736161701148,
              "valid": true,
              "reason": null
            },
            {
              "seed": 2027,
              "selected_states": 4,
              "bic": 11681.736191813725,
              "valid": true,
              "reason": null
            }
          ],
          "selected_state_counts": {
            "4": 3
          },
          "selected_state_share": 1.0,
          "stable": true,
          "majority_support": true
        },
        "rolling_window_stability": {
          "status": "mixed",
          "minimum_history_days": 160,
          "windows": [
            {
              "window_days": 126,
              "candidate_states": [
                2,
                3,
                4
              ],
              "selected_states": 3,
              "bic_by_state": {
                "2": 6814.627512101873,
                "3": 6624.93564694188,
                "4": 6644.607999865784
              },
              "valid": true
            },
            {
              "window_days": 189,
              "candidate_states": [
                2,
                3,
                4
              ],
              "selected_states": 4,
              "bic_by_state": {
                "2": 9751.065787982263,
                "3": 9540.222984162905,
                "4": 9277.680033419667
              },
              "valid": true
            },
            {
              "window_days": 251,
              "candidate_states": [
                2,
                3,
                4
              ],
              "selected_states": 4,
              "bic_by_state": {
                "2": 12351.920775664292,
                "3": 11880.753388330648,
                "4": 11681.736199231758
              },
              "valid": true
            }
          ],
          "stable": false
        },
        "feature_profile_by_state": [
          {
            "id": 0,
            "label": "Calm / Liquid",
            "risk_score": 0.09636405302551113,
            "jump_probability": 0.22140501822177386,
            "jump_rate": 0.05771535288285429,
            "rolling_vol_10d": 0.013221782761109316,
            "downside_vol_10d": 0.006762684474718974,
            "drawdown_21d": 0.01751294810177373,
            "amihud_stress": 0.12333847410375143,
            "spread_rel": 27.2883115639542,
            "spread_ticks": 3.4819418741103316,
            "log_notional": 15.880736528830658,
            "log_trade_count": 5.557487960465699
          },
          {
            "id": 1,
            "label": "Normal / Active",
            "risk_score": 0.24223183199766474,
            "jump_probability": 0.14660506412157406,
            "jump_rate": 9.662297498410176e-18,
            "rolling_vol_10d": 0.017316313656480595,
            "downside_vol_10d": 0.008479232036661132,
            "drawdown_21d": 0.03105897113376099,
            "amihud_stress": 0.074333341043624,
            "spread_rel": 35.464805121507226,
            "spread_ticks": 4.2657016507412235,
            "log_notional": 15.885917301225494,
            "log_trade_count": 5.571492992082682
          },
          {
            "id": 2,
            "label": "Stressed / Illiquid",
            "risk_score": 0.483989465779863,
            "jump_probability": 0.3406607097480544,
            "jump_rate": 0.13602489167013562,
            "rolling_vol_10d": 0.019557533200824682,
            "downside_vol_10d": 0.009456070824095138,
            "drawdown_21d": 0.03496534002340606,
            "amihud_stress": 0.2052168970456058,
            "spread_rel": 27.674105717652445,
            "spread_ticks": 3.307508887599394,
            "log_notional": 16.384382115712523,
            "log_trade_count": 5.888420397020878
          },
          {
            "id": 3,
            "label": "Jump / Tail Shock",
            "risk_score": 0.9015112540009089,
            "jump_probability": 0.2642115209808701,
            "jump_rate": 0.08911846310299719,
            "rolling_vol_10d": 0.026355721457824968,
            "downside_vol_10d": 0.01692117094073311,
            "drawdown_21d": 0.0949866011333817,
            "amihud_stress": 0.20804701989661156,
            "spread_rel": 40.72951839289389,
            "spread_ticks": 4.7215660272468245,
            "log_notional": 15.925090262581989,
            "log_trade_count": 5.579776310156814
          }
        ],
        "jump_model_definition": {
          "type": "jump_score_feature_overlay",
          "method_name": "hmm_jump_aware",
          "description": "Jump score enters the HMM feature panel and current jump risk overlay; the likelihood is still diagonal Gaussian, not a full jump-diffusion emission model."
        },
        "probability_basis": {
          "current_state": "filtered_forward_probability",
          "historical_states": "smoothed_forward_backward_probability",
          "lookahead_note": "Current live monitoring uses filtered probabilities; smoothed probabilities are retained for retrospective historical charts."
        }
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
          "trade_date": "2026-06-26",
          "state": 2,
          "probabilities": [
            1.0500197034940023e-16,
            4.25311151984619e-12,
            0.9997916179893203,
            0.0002083820064265556
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            7.134247155774456e-14,
            2.5755005668348517e-12,
            0.9983942192439654,
            0.0016057807533876975
          ],
          "jump_probability": 0.30976870001538426,
          "jump_score": 1.5533035923619745
        },
        {
          "trade_date": "2026-06-29",
          "state": 1,
          "probabilities": [
            1.1450424623414394e-09,
            0.9955612384679958,
            0.004438676169994974,
            8.421696669338257e-08
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            2.0589012656641854e-07,
            0.9928398246393163,
            0.007158888694388268,
            1.0807761686776044e-06
          ],
          "jump_probability": 0.1322325378088754,
          "jump_score": 0.6140332562617581
        },
        {
          "trade_date": "2026-06-30",
          "state": 1,
          "probabilities": [
            1.8420088765551851e-09,
            0.9874725611020473,
            0.012527432711701954,
            4.344241811783996e-09
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            4.313834388422992e-09,
            0.9926032259188922,
            0.007391999495757905,
            4.770271515439794e-06
          ],
          "jump_probability": 0.1378203455425977,
          "jump_score": 0.6556411550748412
        },
        {
          "trade_date": "2026-07-02",
          "state": 2,
          "probabilities": [
            2.159793720265458e-25,
            8.811995581095956e-40,
            0.9999905648648938,
            9.435135106165054e-06
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            5.8864822065504e-22,
            5.328181286296295e-40,
            0.9999275384079019,
            7.246159209811259e-05
          ],
          "jump_probability": 0.649512762117573,
          "jump_score": 2.786433209064982
        },
        {
          "trade_date": "2026-07-03",
          "state": 1,
          "probabilities": [
            5.317988354913863e-10,
            0.9999436787863979,
            5.629145863358046e-05,
            2.922316975208682e-08
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            2.278616655118193e-06,
            0.9999042667820942,
            9.308319578464794e-05,
            3.7140546601907596e-07
          ],
          "jump_probability": 0.1414002668855365,
          "jump_score": 0.6815580834426668
        },
        {
          "trade_date": "2026-07-06",
          "state": 1,
          "probabilities": [
            1.1199936919154056e-09,
            0.9999531054298649,
            4.671436463065915e-05,
            1.790855107789512e-07
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            4.012204600273386e-06,
            0.9999164793925163,
            7.723198969534458e-05,
            2.276413188169158e-06
          ],
          "jump_probability": 0.11246973968516484,
          "jump_score": 0.4536883373814746
        },
        {
          "trade_date": "2026-07-07",
          "state": 1,
          "probabilities": [
            1.0734485153941584e-08,
            0.999847986131998,
            0.000152002877849702,
            2.5566712237774933e-10
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            2.5009515762154937e-08,
            0.9999103723127805,
            8.923255743366936e-05,
            3.7012027006157867e-07
          ],
          "jump_probability": 0.09274159396237186,
          "jump_score": 0.26686065634152006
        },
        {
          "trade_date": "2026-07-08",
          "state": 2,
          "probabilities": [
            3.2284747767521884e-07,
            3.5227936044881055e-18,
            0.9999996770400525,
            1.1246974118011201e-10
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            5.213824565455057e-08,
            2.502847402714591e-17,
            0.9999999004900885,
            4.737166594609047e-08
          ],
          "jump_probability": 0.38980505399125975,
          "jump_score": 1.8603202285722673
        },
        {
          "trade_date": "2026-07-09",
          "state": 0,
          "probabilities": [
            0.9461791694058724,
            0.008529018698004558,
            0.04529181189609683,
            2.6293850438945156e-14
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            0.98431992712419,
            0.0038084244141953875,
            0.011871648444618702,
            1.6995922735678825e-11
          ],
          "jump_probability": 0.14170600214587684,
          "jump_score": 0.6837459202475179
        },
        {
          "trade_date": "2026-07-10",
          "state": 2,
          "probabilities": [
            8.108748662275551e-07,
            3.456886017198692e-21,
            0.9999991891244512,
            6.824704893333518e-13
          ],
          "probability_basis": "smoothed",
          "filtered_probabilities": [
            8.108748662275551e-07,
            3.456886017198692e-21,
            0.9999991891244512,
            6.824704893333518e-13
          ],
          "jump_probability": 0.3316075716952018,
          "jump_score": 1.64050155500402
        }
      ]
    }
  },
  "peer_analysis": {
    "enabled": true,
    "scope": "drivers_market_state_l2_when_available",
    "excluded_sections": [],
    "periods": {
      "1d": {
        "label": "1D",
        "window_days": 1,
        "market_comparison": {
          "returns": {
            "window_days": 1,
            "n_obs": 1,
            "stock": 0.030188679245283012,
            "market": 0.0019330386452445225,
            "sector": 0.0,
            "peers": 0.004498032589663747,
            "peer_rows": [
              {
                "listing_id": 534129733,
                "name": "PRU",
                "stock_code": "2378",
                "ticker": "2378",
                "return": 0.030188679245283012,
                "n_obs": 1,
                "is_target": true
              },
              {
                "listing_id": 534129636,
                "name": "CPIC",
                "stock_code": "2601",
                "ticker": "2601",
                "return": 0.0007304601899196239,
                "n_obs": 1,
                "is_target": false
              },
              {
                "listing_id": 534130087,
                "name": "AIA",
                "stock_code": "1299",
                "ticker": "1299",
                "return": 0.004840940525588033,
                "n_obs": 1,
                "is_target": false
              },
              {
                "listing_id": 534130284,
                "name": "MANULIFE-S",
                "stock_code": "945",
                "ticker": "945",
                "return": 0.01563477173233263,
                "n_obs": 1,
                "is_target": false
              },
              {
                "listing_id": 772037047,
                "name": "FWD",
                "stock_code": "1828",
                "ticker": "1828",
                "return": 0.0041551246537396835,
                "n_obs": 1,
                "is_target": false
              }
            ]
          },
          "metric_rows": [
            {
              "ticker": "2378",
              "score_pca": 69.38377535101404,
              "rank_pca": 786,
              "adv": 18045300.0,
              "trades": 817.0,
              "volatility": 0.2286769713959769,
              "spread_pct": 0.002853328040399479,
              "spread_ticks": 3.099049371358479,
              "amihud": 1.672938618104604e-09,
              "turnover_ratio": 6.461364123662994e-05,
              "is_target": true,
              "company_name": "PRU",
              "label": "PRU (2378)"
            },
            {
              "ticker": "2601",
              "score_pca": 90.6396255850234,
              "rank_pca": 241,
              "adv": 180637842.79999998,
              "trades": 7994.0,
              "volatility": 0.2564630852788712,
              "spread_pct": 0.0013880420940398316,
              "spread_ticks": 1.9120559114735003,
              "amihud": 4.043782734542399e-12,
              "turnover_ratio": 0.0031445169261937636,
              "is_target": false,
              "company_name": "CPIC",
              "label": "CPIC (2601)"
            },
            {
              "ticker": "1299",
              "score_pca": 95.55382215288611,
              "rank_pca": 115,
              "adv": 1861841798.1000001,
              "trades": 14097.0,
              "volatility": 0.31217894925779915,
              "spread_pct": 0.0007397682067376132,
              "spread_ticks": 1.0876543593890946,
              "amihud": 2.600081559307664e-12,
              "turnover_ratio": 0.0026656023903384772,
              "is_target": false,
              "company_name": "AIA",
              "label": "AIA (1299)"
            },
            {
              "ticker": "945",
              "score_pca": 58.38533541341654,
              "rank_pca": 1068,
              "adv": 8509760.0,
              "trades": 120.0,
              "volatility": 0.05881334854152028,
              "spread_pct": 0.0035276719358920874,
              "spread_ticks": 5.718631178707224,
              "amihud": 1.837275285358533e-09,
              "turnover_ratio": 1.533936557124034e-05,
              "is_target": false,
              "company_name": "MANULIFE-S",
              "label": "MANULIFE-S (945)"
            },
            {
              "ticker": "1828",
              "score_pca": 77.96411856474259,
              "rank_pca": 566,
              "adv": 13719900.0,
              "trades": 1758.0,
              "volatility": 0.32764783225337946,
              "spread_pct": 0.002206241374328006,
              "spread_ticks": 3.198645598194131,
              "amihud": 3.028538585368467e-10,
              "turnover_ratio": 0.0017283685154356003,
              "is_target": false,
              "company_name": "FWD",
              "label": "FWD (1828)"
            }
          ]
        },
        "liquidity": {
          "rows": [
            {
              "ticker": "2378",
              "score_pca": 69.38377535101404,
              "rank_pca": 786,
              "adv": 18045300.0,
              "trades": 817.0,
              "volatility": 0.2286769713959769,
              "spread_pct": 0.002853328040399479,
              "spread_ticks": 3.099049371358479,
              "amihud": 1.672938618104604e-09,
              "turnover_ratio": 6.461364123662994e-05,
              "is_target": true,
              "company_name": "PRU",
              "label": "PRU (2378)"
            },
            {
              "ticker": "2601",
              "score_pca": 90.6396255850234,
              "rank_pca": 241,
              "adv": 180637842.79999998,
              "trades": 7994.0,
              "volatility": 0.2564630852788712,
              "spread_pct": 0.0013880420940398316,
              "spread_ticks": 1.9120559114735003,
              "amihud": 4.043782734542399e-12,
              "turnover_ratio": 0.0031445169261937636,
              "is_target": false,
              "company_name": "CPIC",
              "label": "CPIC (2601)"
            },
            {
              "ticker": "1299",
              "score_pca": 95.55382215288611,
              "rank_pca": 115,
              "adv": 1861841798.1000001,
              "trades": 14097.0,
              "volatility": 0.31217894925779915,
              "spread_pct": 0.0007397682067376132,
              "spread_ticks": 1.0876543593890946,
              "amihud": 2.600081559307664e-12,
              "turnover_ratio": 0.0026656023903384772,
              "is_target": false,
              "company_name": "AIA",
              "label": "AIA (1299)"
            },
            {
              "ticker": "945",
              "score_pca": 58.38533541341654,
              "rank_pca": 1068,
              "adv": 8509760.0,
              "trades": 120.0,
              "volatility": 0.05881334854152028,
              "spread_pct": 0.0035276719358920874,
              "spread_ticks": 5.718631178707224,
              "amihud": 1.837275285358533e-09,
              "turnover_ratio": 1.533936557124034e-05,
              "is_target": false,
              "company_name": "MANULIFE-S",
              "label": "MANULIFE-S (945)"
            },
            {
              "ticker": "1828",
              "score_pca": 77.96411856474259,
              "rank_pca": 566,
              "adv": 13719900.0,
              "trades": 1758.0,
              "volatility": 0.32764783225337946,
              "spread_pct": 0.002206241374328006,
              "spread_ticks": 3.198645598194131,
              "amihud": 3.028538585368467e-10,
              "turnover_ratio": 0.0017283685154356003,
              "is_target": false,
              "company_name": "FWD",
              "label": "FWD (1828)"
            }
          ],
          "summary": {
            "n_peers": 4,
            "peer_median_adv": 97178871.39999999,
            "peer_median_score_pca": 84.301872074883,
            "peer_median_trades": 4876.0,
            "peer_median_volatility": 0.28432101726833514,
            "peer_median_spread_pct": 0.0017971417341839189,
            "peer_median_spread_ticks": 2.5553507548338157,
            "peer_median_amihud": 1.5344882063569454e-10,
            "peer_median_turnover_ratio": 0.002196985452887039,
            "target_vs_peer": {
              "score_pca_delta": -14.92,
              "adv_delta_pct": -81.4,
              "trades_delta_pct": -83.24,
              "volatility_delta_pct": 19.57,
              "spread_pct_delta_pct": -58.77,
              "spread_ticks_delta_pct": 21.28,
              "amihud_delta_pct": -990.23,
              "turnover_ratio_delta_pct": -97.06
            }
          }
        },
        "takeaways": [
          "Liquidity score is below the peer median (69.4 vs 84.3).",
          "ADV is below the peer median.",
          "Window return outperformed the peer median."
        ],
        "performance": {
          "period_key": "1d",
          "label": "1D",
          "window_days": 1,
          "n_obs": 1,
          "rows": [
            {
              "listing_id": 534129733,
              "name": "PRU",
              "stock_code": "2378",
              "ticker": "2378",
              "return": 0.030188679245283012,
              "n_obs": 1,
              "is_target": true
            },
            {
              "listing_id": 534129636,
              "name": "CPIC",
              "stock_code": "2601",
              "ticker": "2601",
              "return": 0.0007304601899196239,
              "n_obs": 1,
              "is_target": false
            },
            {
              "listing_id": 534130087,
              "name": "AIA",
              "stock_code": "1299",
              "ticker": "1299",
              "return": 0.004840940525588033,
              "n_obs": 1,
              "is_target": false
            },
            {
              "listing_id": 534130284,
              "name": "MANULIFE-S",
              "stock_code": "945",
              "ticker": "945",
              "return": 0.01563477173233263,
              "n_obs": 1,
              "is_target": false
            },
            {
              "listing_id": 772037047,
              "name": "FWD",
              "stock_code": "1828",
              "ticker": "1828",
              "return": 0.0041551246537396835,
              "n_obs": 1,
              "is_target": false
            }
          ],
          "summary": {
            "target_return": 0.030188679245283012,
            "peer_median_return": 0.0044980325896638584,
            "peer_rank": 1,
            "peer_count": 4,
            "peers_up": 4,
            "peers_down": 0,
            "dispersion": 0.014904311542413007
          },
          "takeaway": "Target return is above the peer median for this window."
        },
        "drivers": {
          "breadth_context": {
            "period_key": "1d",
            "label": "1D",
            "window_days": 1,
            "target_return": 0.030188679245283012,
            "peer_median_return": 0.0044980325896638584,
            "peer_up_count": 4,
            "peer_down_count": 0,
            "peer_count": 4,
            "dispersion": 0.014904311542413007,
            "interpretation": "more peers rose than fell; Target return is above the peer median for this window."
          }
        },
        "market_state": {
          "period_key": "1d",
          "label": "1D",
          "window_days": 1,
          "rows": [
            {
              "ticker": "2378",
              "company_name": "PRU",
              "label": "PRU (2378)",
              "score_pca": 69.38377535101404,
              "rank_pca": 786,
              "adv": 18045300.0,
              "trades": 817.0,
              "volatility": 0.2286769713959769,
              "spread_pct": 0.002853328040399479,
              "spread_ticks": 3.099049371358479,
              "amihud": 1.672938618104604e-09,
              "turnover_ratio": 6.461364123662994e-05,
              "is_target": true
            },
            {
              "ticker": "2601",
              "company_name": "CPIC",
              "label": "CPIC (2601)",
              "score_pca": 90.6396255850234,
              "rank_pca": 241,
              "adv": 180637842.79999998,
              "trades": 7994.0,
              "volatility": 0.2564630852788712,
              "spread_pct": 0.0013880420940398316,
              "spread_ticks": 1.9120559114735003,
              "amihud": 4.043782734542399e-12,
              "turnover_ratio": 0.0031445169261937636,
              "is_target": false
            },
            {
              "ticker": "1299",
              "company_name": "AIA",
              "label": "AIA (1299)",
              "score_pca": 95.55382215288611,
              "rank_pca": 115,
              "adv": 1861841798.1000001,
              "trades": 14097.0,
              "volatility": 0.31217894925779915,
              "spread_pct": 0.0007397682067376132,
              "spread_ticks": 1.0876543593890946,
              "amihud": 2.600081559307664e-12,
              "turnover_ratio": 0.0026656023903384772,
              "is_target": false
            },
            {
              "ticker": "945",
              "company_name": "MANULIFE-S",
              "label": "MANULIFE-S (945)",
              "score_pca": 58.38533541341654,
              "rank_pca": 1068,
              "adv": 8509760.0,
              "trades": 120.0,
              "volatility": 0.05881334854152028,
              "spread_pct": 0.0035276719358920874,
              "spread_ticks": 5.718631178707224,
              "amihud": 1.837275285358533e-09,
              "turnover_ratio": 1.533936557124034e-05,
              "is_target": false
            },
            {
              "ticker": "1828",
              "company_name": "FWD",
              "label": "FWD (1828)",
              "score_pca": 77.96411856474259,
              "rank_pca": 566,
              "adv": 13719900.0,
              "trades": 1758.0,
              "volatility": 0.32764783225337946,
              "spread_pct": 0.002206241374328006,
              "spread_ticks": 3.198645598194131,
              "amihud": 3.028538585368467e-10,
              "turnover_ratio": 0.0017283685154356003,
              "is_target": false
            }
          ],
          "summary": {
            "target": {
              "score_pca": 69.38377535101404,
              "adv": 18045300.0,
              "trades": 817.0,
              "volatility": 0.2286769713959769,
              "spread_pct": 0.002853328040399479,
              "spread_ticks": 3.099049371358479,
              "amihud": 1.672938618104604e-09,
              "turnover_ratio": 6.461364123662994e-05
            },
            "peer_medians": {
              "score_pca": 84.301872074883,
              "adv": 97178871.39999999,
              "trades": 4876.0,
              "volatility": 0.28432101726833514,
              "spread_pct": 0.0017971417341839189,
              "spread_ticks": 2.5553507548338157,
              "amihud": 1.5344882063569454e-10,
              "turnover_ratio": 0.002196985452887039
            },
            "peer_count": 4
          },
          "takeaways": [
            "Liquidity score is weaker than the peer median.",
            "ADV is weaker than the peer median.",
            "Spread is weaker than the peer median."
          ]
        }
      },
      "1w": {
        "label": "1W",
        "window_days": 5,
        "market_comparison": {
          "returns": {
            "window_days": 5,
            "n_obs": 5,
            "stock": 0.017707362534948645,
            "market": 0.0006748308677375636,
            "sector": 0.006555844242801756,
            "peers": -0.003930066675829957,
            "peer_rows": [
              {
                "listing_id": 534129733,
                "name": "PRU",
                "stock_code": "2378",
                "ticker": "2378",
                "return": 0.017707362534948645,
                "n_obs": 5,
                "is_target": true
              },
              {
                "listing_id": 534129636,
                "name": "CPIC",
                "stock_code": "2601",
                "ticker": "2601",
                "return": -0.007965242577842147,
                "n_obs": 5,
                "is_target": false
              },
              {
                "listing_id": 534130087,
                "name": "AIA",
                "stock_code": "1299",
                "ticker": "1299",
                "return": -0.008191126279863181,
                "n_obs": 5,
                "is_target": false
              },
              {
                "listing_id": 534130284,
                "name": "MANULIFE-S",
                "stock_code": "945",
                "ticker": "945",
                "return": 0.009322560596644047,
                "n_obs": 5,
                "is_target": false
              },
              {
                "listing_id": 772037047,
                "name": "FWD",
                "stock_code": "1828",
                "ticker": "1828",
                "return": 0.03276353276353272,
                "n_obs": 5,
                "is_target": false
              }
            ]
          },
          "metric_rows": [
            {
              "ticker": "2378",
              "score_pca": 68.29173166926678,
              "rank_pca": 814,
              "adv": 8618130.0,
              "trades": 246.0,
              "volatility": 0.2778564482152027,
              "spread_pct": 0.003503653608816688,
              "spread_ticks": 3.7777777777777777,
              "amihud": 1.672938618104604e-09,
              "turnover_ratio": 3.1143579573359e-05,
              "is_target": true,
              "company_name": "PRU",
              "label": "PRU (2378)"
            },
            {
              "ticker": "2601",
              "score_pca": 94.22776911076443,
              "rank_pca": 149,
              "adv": 250964595.86,
              "trades": 7994.0,
              "volatility": 0.316781915401242,
              "spread_pct": 0.0012649237197476751,
              "spread_ticks": 1.776502170436372,
              "amihud": 8.123784599840789e-11,
              "turnover_ratio": 0.004284319183797514,
              "is_target": false,
              "company_name": "CPIC",
              "label": "CPIC (2601)"
            },
            {
              "ticker": "1299",
              "score_pca": 97.69890795631825,
              "rank_pca": 60,
              "adv": 1756895133.3,
              "trades": 14097.0,
              "volatility": 0.2590029448543688,
              "spread_pct": 0.0007436833008136093,
              "spread_ticks": 1.0760388586541885,
              "amihud": 6.501803080967413e-12,
              "turnover_ratio": 0.0025275267137470363,
              "is_target": false,
              "company_name": "AIA",
              "label": "AIA (1299)"
            },
            {
              "ticker": "945",
              "score_pca": 61.89547581903276,
              "rank_pca": 978,
              "adv": 5129340.0,
              "trades": 67.0,
              "volatility": 0.16650547645720307,
              "spread_pct": 0.004048772293790562,
              "spread_ticks": 6.4944444444444445,
              "amihud": 1.2387498768508462e-09,
              "turnover_ratio": 9.309004297050436e-06,
              "is_target": false,
              "company_name": "MANULIFE-S",
              "label": "MANULIFE-S (945)"
            },
            {
              "ticker": "1828",
              "score_pca": 79.44617784711389,
              "rank_pca": 528,
              "adv": 10306438.0,
              "trades": 1332.0,
              "volatility": 0.41323661157824554,
              "spread_pct": 0.0024888652470835084,
              "spread_ticks": 3.5526014865637507,
              "amihud": 6.767544277206673e-10,
              "turnover_ratio": 0.0013418511006541873,
              "is_target": false,
              "company_name": "FWD",
              "label": "FWD (1828)"
            }
          ]
        },
        "liquidity": {
          "rows": [
            {
              "ticker": "2378",
              "score_pca": 68.29173166926678,
              "rank_pca": 814,
              "adv": 8618130.0,
              "trades": 246.0,
              "volatility": 0.2778564482152027,
              "spread_pct": 0.003503653608816688,
              "spread_ticks": 3.7777777777777777,
              "amihud": 1.672938618104604e-09,
              "turnover_ratio": 3.1143579573359e-05,
              "is_target": true,
              "company_name": "PRU",
              "label": "PRU (2378)"
            },
            {
              "ticker": "2601",
              "score_pca": 94.22776911076443,
              "rank_pca": 149,
              "adv": 250964595.86,
              "trades": 7994.0,
              "volatility": 0.316781915401242,
              "spread_pct": 0.0012649237197476751,
              "spread_ticks": 1.776502170436372,
              "amihud": 8.123784599840789e-11,
              "turnover_ratio": 0.004284319183797514,
              "is_target": false,
              "company_name": "CPIC",
              "label": "CPIC (2601)"
            },
            {
              "ticker": "1299",
              "score_pca": 97.69890795631825,
              "rank_pca": 60,
              "adv": 1756895133.3,
              "trades": 14097.0,
              "volatility": 0.2590029448543688,
              "spread_pct": 0.0007436833008136093,
              "spread_ticks": 1.0760388586541885,
              "amihud": 6.501803080967413e-12,
              "turnover_ratio": 0.0025275267137470363,
              "is_target": false,
              "company_name": "AIA",
              "label": "AIA (1299)"
            },
            {
              "ticker": "945",
              "score_pca": 61.89547581903276,
              "rank_pca": 978,
              "adv": 5129340.0,
              "trades": 67.0,
              "volatility": 0.16650547645720307,
              "spread_pct": 0.004048772293790562,
              "spread_ticks": 6.4944444444444445,
              "amihud": 1.2387498768508462e-09,
              "turnover_ratio": 9.309004297050436e-06,
              "is_target": false,
              "company_name": "MANULIFE-S",
              "label": "MANULIFE-S (945)"
            },
            {
              "ticker": "1828",
              "score_pca": 79.44617784711389,
              "rank_pca": 528,
              "adv": 10306438.0,
              "trades": 1332.0,
              "volatility": 0.41323661157824554,
              "spread_pct": 0.0024888652470835084,
              "spread_ticks": 3.5526014865637507,
              "amihud": 6.767544277206673e-10,
              "turnover_ratio": 0.0013418511006541873,
              "is_target": false,
              "company_name": "FWD",
              "label": "FWD (1828)"
            }
          ],
          "summary": {
            "n_peers": 4,
            "peer_median_adv": 130635516.93,
            "peer_median_score_pca": 86.83697347893916,
            "peer_median_trades": 4663.0,
            "peer_median_volatility": 0.2878924301278054,
            "peer_median_spread_pct": 0.0018768944834155919,
            "peer_median_spread_ticks": 2.6645518285000613,
            "peer_median_amihud": 3.7899613685953757e-10,
            "peer_median_turnover_ratio": 0.0019346889072006119,
            "target_vs_peer": {
              "score_pca_delta": -18.55,
              "adv_delta_pct": -93.4,
              "trades_delta_pct": -94.72,
              "volatility_delta_pct": 3.49,
              "spread_pct_delta_pct": -86.67,
              "spread_ticks_delta_pct": 41.78,
              "amihud_delta_pct": -341.41,
              "turnover_ratio_delta_pct": -98.39
            }
          }
        },
        "takeaways": [
          "Liquidity score is below the peer median (68.3 vs 86.8).",
          "ADV is below the peer median.",
          "Window return outperformed the peer median."
        ],
        "performance": {
          "period_key": "1w",
          "label": "1W",
          "window_days": 5,
          "n_obs": 5,
          "rows": [
            {
              "listing_id": 534129733,
              "name": "PRU",
              "stock_code": "2378",
              "ticker": "2378",
              "return": 0.017707362534948645,
              "n_obs": 5,
              "is_target": true
            },
            {
              "listing_id": 534129636,
              "name": "CPIC",
              "stock_code": "2601",
              "ticker": "2601",
              "return": -0.007965242577842147,
              "n_obs": 5,
              "is_target": false
            },
            {
              "listing_id": 534130087,
              "name": "AIA",
              "stock_code": "1299",
              "ticker": "1299",
              "return": -0.008191126279863181,
              "n_obs": 5,
              "is_target": false
            },
            {
              "listing_id": 534130284,
              "name": "MANULIFE-S",
              "stock_code": "945",
              "ticker": "945",
              "return": 0.009322560596644047,
              "n_obs": 5,
              "is_target": false
            },
            {
              "listing_id": 772037047,
              "name": "FWD",
              "stock_code": "1828",
              "ticker": "1828",
              "return": 0.03276353276353272,
              "n_obs": 5,
              "is_target": false
            }
          ],
          "summary": {
            "target_return": 0.017707362534948645,
            "peer_median_return": 0.0006786590094009504,
            "peer_rank": 2,
            "peer_count": 4,
            "peers_up": 2,
            "peers_down": 2,
            "dispersion": 0.0409546590433959
          },
          "takeaway": "Target return is above the peer median for this window."
        },
        "drivers": {
          "breadth_context": {
            "period_key": "1w",
            "label": "1W",
            "window_days": 5,
            "target_return": 0.017707362534948645,
            "peer_median_return": 0.0006786590094009504,
            "peer_up_count": 2,
            "peer_down_count": 2,
            "peer_count": 4,
            "dispersion": 0.0409546590433959,
            "interpretation": "peer breadth was balanced; Target return is above the peer median for this window."
          }
        },
        "market_state": {
          "period_key": "1w",
          "label": "1W",
          "window_days": 5,
          "rows": [
            {
              "ticker": "2378",
              "company_name": "PRU",
              "label": "PRU (2378)",
              "score_pca": 68.29173166926678,
              "rank_pca": 814,
              "adv": 8618130.0,
              "trades": 246.0,
              "volatility": 0.2778564482152027,
              "spread_pct": 0.003503653608816688,
              "spread_ticks": 3.7777777777777777,
              "amihud": 1.672938618104604e-09,
              "turnover_ratio": 3.1143579573359e-05,
              "is_target": true
            },
            {
              "ticker": "2601",
              "company_name": "CPIC",
              "label": "CPIC (2601)",
              "score_pca": 94.22776911076443,
              "rank_pca": 149,
              "adv": 250964595.86,
              "trades": 7994.0,
              "volatility": 0.316781915401242,
              "spread_pct": 0.0012649237197476751,
              "spread_ticks": 1.776502170436372,
              "amihud": 8.123784599840789e-11,
              "turnover_ratio": 0.004284319183797514,
              "is_target": false
            },
            {
              "ticker": "1299",
              "company_name": "AIA",
              "label": "AIA (1299)",
              "score_pca": 97.69890795631825,
              "rank_pca": 60,
              "adv": 1756895133.3,
              "trades": 14097.0,
              "volatility": 0.2590029448543688,
              "spread_pct": 0.0007436833008136093,
              "spread_ticks": 1.0760388586541885,
              "amihud": 6.501803080967413e-12,
              "turnover_ratio": 0.0025275267137470363,
              "is_target": false
            },
            {
              "ticker": "945",
              "company_name": "MANULIFE-S",
              "label": "MANULIFE-S (945)",
              "score_pca": 61.89547581903276,
              "rank_pca": 978,
              "adv": 5129340.0,
              "trades": 67.0,
              "volatility": 0.16650547645720307,
              "spread_pct": 0.004048772293790562,
              "spread_ticks": 6.4944444444444445,
              "amihud": 1.2387498768508462e-09,
              "turnover_ratio": 9.309004297050436e-06,
              "is_target": false
            },
            {
              "ticker": "1828",
              "company_name": "FWD",
              "label": "FWD (1828)",
              "score_pca": 79.44617784711389,
              "rank_pca": 528,
              "adv": 10306438.0,
              "trades": 1332.0,
              "volatility": 0.41323661157824554,
              "spread_pct": 0.0024888652470835084,
              "spread_ticks": 3.5526014865637507,
              "amihud": 6.767544277206673e-10,
              "turnover_ratio": 0.0013418511006541873,
              "is_target": false
            }
          ],
          "summary": {
            "target": {
              "score_pca": 68.29173166926678,
              "adv": 8618130.0,
              "trades": 246.0,
              "volatility": 0.2778564482152027,
              "spread_pct": 0.003503653608816688,
              "spread_ticks": 3.7777777777777777,
              "amihud": 1.672938618104604e-09,
              "turnover_ratio": 3.1143579573359e-05
            },
            "peer_medians": {
              "score_pca": 86.83697347893916,
              "adv": 130635516.93,
              "trades": 4663.0,
              "volatility": 0.2878924301278054,
              "spread_pct": 0.0018768944834155919,
              "spread_ticks": 2.6645518285000613,
              "amihud": 3.7899613685953757e-10,
              "turnover_ratio": 0.0019346889072006119
            },
            "peer_count": 4
          },
          "takeaways": [
            "Liquidity score is weaker than the peer median.",
            "ADV is weaker than the peer median.",
            "Spread is weaker than the peer median."
          ]
        }
      },
      "30d": {
        "label": "1M",
        "window_days": 21,
        "market_comparison": {
          "returns": {
            "window_days": 21,
            "n_obs": 21,
            "stock": 0.0985915492957743,
            "market": -0.023116963196228246,
            "sector": -0.06431565583959131,
            "peers": -0.023789702118320988,
            "peer_rows": [
              {
                "listing_id": 534129733,
                "name": "PRU",
                "stock_code": "2378",
                "ticker": "2378",
                "return": 0.0985915492957743,
                "n_obs": 21,
                "is_target": true
              },
              {
                "listing_id": 534129636,
                "name": "CPIC",
                "stock_code": "2601",
                "ticker": "2601",
                "return": -0.13510101010101006,
                "n_obs": 21,
                "is_target": false
              },
              {
                "listing_id": 534130087,
                "name": "AIA",
                "stock_code": "1299",
                "ticker": "1299",
                "return": 0.02323943661971839,
                "n_obs": 21,
                "is_target": false
              },
              {
                "listing_id": 534130284,
                "name": "MANULIFE-S",
                "stock_code": "945",
                "ticker": "945",
                "return": 0.06982872200263524,
                "n_obs": 21,
                "is_target": false
              },
              {
                "listing_id": 772037047,
                "name": "FWD",
                "stock_code": "1828",
                "ticker": "1828",
                "return": -0.030100334448160182,
                "n_obs": 21,
                "is_target": false
              }
            ]
          },
          "metric_rows": [
            {
              "ticker": "2378",
              "score_pca": 69.03276131045241,
              "rank_pca": 795,
              "adv": 9275150.0,
              "trades": 359.0,
              "volatility": 0.2955973504852906,
              "spread_pct": 0.003266116538200523,
              "spread_ticks": 3.4927536231884058,
              "amihud": 1.1036661471710073e-09,
              "turnover_ratio": 3.521003566328912e-05,
              "is_target": true,
              "company_name": "PRU",
              "label": "PRU (2378)"
            },
            {
              "ticker": "2601",
              "score_pca": 95.94383775351014,
              "rank_pca": 105,
              "adv": 383099166.0,
              "trades": 10651.0,
              "volatility": 0.3935402734941703,
              "spread_pct": 0.0011524723739543448,
              "spread_ticks": 1.705463368816531,
              "amihud": 4.338248902084457e-11,
              "turnover_ratio": 0.006347213374372772,
              "is_target": false,
              "company_name": "CPIC",
              "label": "CPIC (2601)"
            },
            {
              "ticker": "1299",
              "score_pca": 98.32293291731669,
              "rank_pca": 44,
              "adv": 2230818455.25,
              "trades": 16908.0,
              "volatility": 0.3005089207991953,
              "spread_pct": 0.0007452512294699164,
              "spread_ticks": 1.0886625730118316,
              "amihud": 6.501803080967413e-12,
              "turnover_ratio": 0.0031250428924190624,
              "is_target": false,
              "company_name": "AIA",
              "label": "AIA (1299)"
            },
            {
              "ticker": "945",
              "score_pca": 60.9984399375975,
              "rank_pca": 1001,
              "adv": 4669080.0,
              "trades": 67.0,
              "volatility": 0.16933378400039048,
              "spread_pct": 0.005363124289588901,
              "spread_ticks": 8.520440251572326,
              "amihud": 1.837275285358533e-09,
              "turnover_ratio": 8.547890738172098e-06,
              "is_target": false,
              "company_name": "MANULIFE-S",
              "label": "MANULIFE-S (945)"
            },
            {
              "ticker": "1828",
              "score_pca": 78.58814352574103,
              "rank_pca": 550,
              "adv": 11462088.0,
              "trades": 1401.0,
              "volatility": 0.3114887548062595,
              "spread_pct": 0.002406128995269324,
              "spread_ticks": 3.588235294117647,
              "amihud": 9.794360224554639e-10,
              "turnover_ratio": 0.0014247806404985926,
              "is_target": false,
              "company_name": "FWD",
              "label": "FWD (1828)"
            }
          ]
        },
        "liquidity": {
          "rows": [
            {
              "ticker": "2378",
              "score_pca": 69.03276131045241,
              "rank_pca": 795,
              "adv": 9275150.0,
              "trades": 359.0,
              "volatility": 0.2955973504852906,
              "spread_pct": 0.003266116538200523,
              "spread_ticks": 3.4927536231884058,
              "amihud": 1.1036661471710073e-09,
              "turnover_ratio": 3.521003566328912e-05,
              "is_target": true,
              "company_name": "PRU",
              "label": "PRU (2378)"
            },
            {
              "ticker": "2601",
              "score_pca": 95.94383775351014,
              "rank_pca": 105,
              "adv": 383099166.0,
              "trades": 10651.0,
              "volatility": 0.3935402734941703,
              "spread_pct": 0.0011524723739543448,
              "spread_ticks": 1.705463368816531,
              "amihud": 4.338248902084457e-11,
              "turnover_ratio": 0.006347213374372772,
              "is_target": false,
              "company_name": "CPIC",
              "label": "CPIC (2601)"
            },
            {
              "ticker": "1299",
              "score_pca": 98.32293291731669,
              "rank_pca": 44,
              "adv": 2230818455.25,
              "trades": 16908.0,
              "volatility": 0.3005089207991953,
              "spread_pct": 0.0007452512294699164,
              "spread_ticks": 1.0886625730118316,
              "amihud": 6.501803080967413e-12,
              "turnover_ratio": 0.0031250428924190624,
              "is_target": false,
              "company_name": "AIA",
              "label": "AIA (1299)"
            },
            {
              "ticker": "945",
              "score_pca": 60.9984399375975,
              "rank_pca": 1001,
              "adv": 4669080.0,
              "trades": 67.0,
              "volatility": 0.16933378400039048,
              "spread_pct": 0.005363124289588901,
              "spread_ticks": 8.520440251572326,
              "amihud": 1.837275285358533e-09,
              "turnover_ratio": 8.547890738172098e-06,
              "is_target": false,
              "company_name": "MANULIFE-S",
              "label": "MANULIFE-S (945)"
            },
            {
              "ticker": "1828",
              "score_pca": 78.58814352574103,
              "rank_pca": 550,
              "adv": 11462088.0,
              "trades": 1401.0,
              "volatility": 0.3114887548062595,
              "spread_pct": 0.002406128995269324,
              "spread_ticks": 3.588235294117647,
              "amihud": 9.794360224554639e-10,
              "turnover_ratio": 0.0014247806404985926,
              "is_target": false,
              "company_name": "FWD",
              "label": "FWD (1828)"
            }
          ],
          "summary": {
            "n_peers": 4,
            "peer_median_adv": 197280627.0,
            "peer_median_score_pca": 87.26599063962558,
            "peer_median_trades": 6026.0,
            "peer_median_volatility": 0.3059988378027274,
            "peer_median_spread_pct": 0.0017793006846118344,
            "peer_median_spread_ticks": 2.646849331467089,
            "peer_median_amihud": 5.114092557381542e-10,
            "peer_median_turnover_ratio": 0.0022749117664588275,
            "target_vs_peer": {
              "score_pca_delta": -18.23,
              "adv_delta_pct": -95.3,
              "trades_delta_pct": -94.04,
              "volatility_delta_pct": 3.4,
              "spread_pct_delta_pct": -83.56,
              "spread_ticks_delta_pct": 31.96,
              "amihud_delta_pct": -115.81,
              "turnover_ratio_delta_pct": -98.45
            }
          }
        },
        "takeaways": [
          "Liquidity score is below the peer median (69.0 vs 87.3).",
          "ADV is below the peer median.",
          "Window return outperformed the peer median."
        ],
        "performance": {
          "period_key": "30d",
          "label": "1M",
          "window_days": 21,
          "n_obs": 21,
          "rows": [
            {
              "listing_id": 534129733,
              "name": "PRU",
              "stock_code": "2378",
              "ticker": "2378",
              "return": 0.0985915492957743,
              "n_obs": 21,
              "is_target": true
            },
            {
              "listing_id": 534129636,
              "name": "CPIC",
              "stock_code": "2601",
              "ticker": "2601",
              "return": -0.13510101010101006,
              "n_obs": 21,
              "is_target": false
            },
            {
              "listing_id": 534130087,
              "name": "AIA",
              "stock_code": "1299",
              "ticker": "1299",
              "return": 0.02323943661971839,
              "n_obs": 21,
              "is_target": false
            },
            {
              "listing_id": 534130284,
              "name": "MANULIFE-S",
              "stock_code": "945",
              "ticker": "945",
              "return": 0.06982872200263524,
              "n_obs": 21,
              "is_target": false
            },
            {
              "listing_id": 772037047,
              "name": "FWD",
              "stock_code": "1828",
              "ticker": "1828",
              "return": -0.030100334448160182,
              "n_obs": 21,
              "is_target": false
            }
          ],
          "summary": {
            "target_return": 0.0985915492957743,
            "peer_median_return": -0.003430448914220896,
            "peer_rank": 1,
            "peer_count": 4,
            "peers_up": 2,
            "peers_down": 2,
            "dispersion": 0.2049297321036453
          },
          "takeaway": "Target return is above the peer median for this window."
        },
        "drivers": {
          "breadth_context": {
            "period_key": "30d",
            "label": "1M",
            "window_days": 21,
            "target_return": 0.0985915492957743,
            "peer_median_return": -0.003430448914220896,
            "peer_up_count": 2,
            "peer_down_count": 2,
            "peer_count": 4,
            "dispersion": 0.2049297321036453,
            "interpretation": "peer breadth was balanced; Target return is above the peer median for this window."
          }
        },
        "market_state": {
          "period_key": "30d",
          "label": "1M",
          "window_days": 21,
          "rows": [
            {
              "ticker": "2378",
              "company_name": "PRU",
              "label": "PRU (2378)",
              "score_pca": 69.03276131045241,
              "rank_pca": 795,
              "adv": 9275150.0,
              "trades": 359.0,
              "volatility": 0.2955973504852906,
              "spread_pct": 0.003266116538200523,
              "spread_ticks": 3.4927536231884058,
              "amihud": 1.1036661471710073e-09,
              "turnover_ratio": 3.521003566328912e-05,
              "is_target": true
            },
            {
              "ticker": "2601",
              "company_name": "CPIC",
              "label": "CPIC (2601)",
              "score_pca": 95.94383775351014,
              "rank_pca": 105,
              "adv": 383099166.0,
              "trades": 10651.0,
              "volatility": 0.3935402734941703,
              "spread_pct": 0.0011524723739543448,
              "spread_ticks": 1.705463368816531,
              "amihud": 4.338248902084457e-11,
              "turnover_ratio": 0.006347213374372772,
              "is_target": false
            },
            {
              "ticker": "1299",
              "company_name": "AIA",
              "label": "AIA (1299)",
              "score_pca": 98.32293291731669,
              "rank_pca": 44,
              "adv": 2230818455.25,
              "trades": 16908.0,
              "volatility": 0.3005089207991953,
              "spread_pct": 0.0007452512294699164,
              "spread_ticks": 1.0886625730118316,
              "amihud": 6.501803080967413e-12,
              "turnover_ratio": 0.0031250428924190624,
              "is_target": false
            },
            {
              "ticker": "945",
              "company_name": "MANULIFE-S",
              "label": "MANULIFE-S (945)",
              "score_pca": 60.9984399375975,
              "rank_pca": 1001,
              "adv": 4669080.0,
              "trades": 67.0,
              "volatility": 0.16933378400039048,
              "spread_pct": 0.005363124289588901,
              "spread_ticks": 8.520440251572326,
              "amihud": 1.837275285358533e-09,
              "turnover_ratio": 8.547890738172098e-06,
              "is_target": false
            },
            {
              "ticker": "1828",
              "company_name": "FWD",
              "label": "FWD (1828)",
              "score_pca": 78.58814352574103,
              "rank_pca": 550,
              "adv": 11462088.0,
              "trades": 1401.0,
              "volatility": 0.3114887548062595,
              "spread_pct": 0.002406128995269324,
              "spread_ticks": 3.588235294117647,
              "amihud": 9.794360224554639e-10,
              "turnover_ratio": 0.0014247806404985926,
              "is_target": false
            }
          ],
          "summary": {
            "target": {
              "score_pca": 69.03276131045241,
              "adv": 9275150.0,
              "trades": 359.0,
              "volatility": 0.2955973504852906,
              "spread_pct": 0.003266116538200523,
              "spread_ticks": 3.4927536231884058,
              "amihud": 1.1036661471710073e-09,
              "turnover_ratio": 3.521003566328912e-05
            },
            "peer_medians": {
              "score_pca": 87.26599063962558,
              "adv": 197280627.0,
              "trades": 6026.0,
              "volatility": 0.3059988378027274,
              "spread_pct": 0.0017793006846118344,
              "spread_ticks": 2.646849331467089,
              "amihud": 5.114092557381542e-10,
              "turnover_ratio": 0.0022749117664588275
            },
            "peer_count": 4
          },
          "takeaways": [
            "Liquidity score is weaker than the peer median.",
            "ADV is weaker than the peer median.",
            "Spread is weaker than the peer median."
          ]
        }
      },
      "3m": {
        "label": "3M",
        "window_days": 63,
        "market_comparison": {
          "returns": {
            "window_days": 63,
            "n_obs": 63,
            "stock": -0.07848101265822804,
            "market": -0.013505515431773918,
            "sector": -0.14704523748655807,
            "peers": -0.06461507627549723,
            "peer_rows": [
              {
                "listing_id": 534129733,
                "name": "PRU",
                "stock_code": "2378",
                "ticker": "2378",
                "return": -0.07848101265822804,
                "n_obs": 63,
                "is_target": true
              },
              {
                "listing_id": 534129636,
                "name": "CPIC",
                "stock_code": "2601",
                "ticker": "2601",
                "return": -0.19789227166276346,
                "n_obs": 63,
                "is_target": false
              },
              {
                "listing_id": 534130087,
                "name": "AIA",
                "stock_code": "1299",
                "ticker": "1299",
                "return": -0.1804850535814997,
                "n_obs": 63,
                "is_target": false
              },
              {
                "listing_id": 534130284,
                "name": "MANULIFE-S",
                "stock_code": "945",
                "ticker": "945",
                "return": 0.1534090909090906,
                "n_obs": 63,
                "is_target": false
              },
              {
                "listing_id": 772037047,
                "name": "FWD",
                "stock_code": "1828",
                "ticker": "1828",
                "return": -0.1098833640270096,
                "n_obs": 63,
                "is_target": false
              }
            ]
          },
          "metric_rows": [
            {
              "ticker": "2378",
              "score_pca": 69.03276131045241,
              "rank_pca": 795,
              "adv": 10157415.0,
              "trades": 310.0,
              "volatility": 0.3222611129902431,
              "spread_pct": 0.0030731265440082883,
              "spread_ticks": 3.448202959830867,
              "amihud": 1.0998660951187802e-09,
              "turnover_ratio": 3.521003566328912e-05,
              "is_target": true,
              "company_name": "PRU",
              "label": "PRU (2378)"
            },
            {
              "ticker": "2601",
              "score_pca": 96.13884555382215,
              "rank_pca": 100,
              "adv": 360563559.04,
              "trades": 10100.0,
              "volatility": 0.3066207988831542,
              "spread_pct": 0.0011325687600784356,
              "spread_ticks": 1.6070041852519399,
              "amihud": 3.219664058461062e-11,
              "turnover_ratio": 0.005509091704113104,
              "is_target": false,
              "company_name": "CPIC",
              "label": "CPIC (2601)"
            },
            {
              "ticker": "1299",
              "score_pca": 98.71294851794072,
              "rank_pca": 34,
              "adv": 2291887555.0,
              "trades": 16943.0,
              "volatility": 0.29588148046799423,
              "spread_pct": 0.0006927154199901853,
              "spread_ticks": 1.110988715086534,
              "amihud": 5.206507312992787e-12,
              "turnover_ratio": 0.002827335023768771,
              "is_target": false,
              "company_name": "AIA",
              "label": "AIA (1299)"
            },
            {
              "ticker": "945",
              "score_pca": 60.37441497659907,
              "rank_pca": 1017,
              "adv": 3938879.9999999995,
              "trades": 65.0,
              "volatility": 0.1801554140954655,
              "spread_pct": 0.004869238179796444,
              "spread_ticks": 7.425531914893617,
              "amihud": 1.7052072548063986e-09,
              "turnover_ratio": 7.728229982456965e-06,
              "is_target": false,
              "company_name": "MANULIFE-S",
              "label": "MANULIFE-S (945)"
            },
            {
              "ticker": "1828",
              "score_pca": 75.58502340093604,
              "rank_pca": 627,
              "adv": 7785646.0,
              "trades": 793.0,
              "volatility": 0.25751173210693273,
              "spread_pct": 0.0025683435604032926,
              "spread_ticks": 3.68227935585805,
              "amihud": 1.3590710828984187e-09,
              "turnover_ratio": 0.000948027118485602,
              "is_target": false,
              "company_name": "FWD",
              "label": "FWD (1828)"
            }
          ]
        },
        "liquidity": {
          "rows": [
            {
              "ticker": "2378",
              "score_pca": 69.03276131045241,
              "rank_pca": 795,
              "adv": 10157415.0,
              "trades": 310.0,
              "volatility": 0.3222611129902431,
              "spread_pct": 0.0030731265440082883,
              "spread_ticks": 3.448202959830867,
              "amihud": 1.0998660951187802e-09,
              "turnover_ratio": 3.521003566328912e-05,
              "is_target": true,
              "company_name": "PRU",
              "label": "PRU (2378)"
            },
            {
              "ticker": "2601",
              "score_pca": 96.13884555382215,
              "rank_pca": 100,
              "adv": 360563559.04,
              "trades": 10100.0,
              "volatility": 0.3066207988831542,
              "spread_pct": 0.0011325687600784356,
              "spread_ticks": 1.6070041852519399,
              "amihud": 3.219664058461062e-11,
              "turnover_ratio": 0.005509091704113104,
              "is_target": false,
              "company_name": "CPIC",
              "label": "CPIC (2601)"
            },
            {
              "ticker": "1299",
              "score_pca": 98.71294851794072,
              "rank_pca": 34,
              "adv": 2291887555.0,
              "trades": 16943.0,
              "volatility": 0.29588148046799423,
              "spread_pct": 0.0006927154199901853,
              "spread_ticks": 1.110988715086534,
              "amihud": 5.206507312992787e-12,
              "turnover_ratio": 0.002827335023768771,
              "is_target": false,
              "company_name": "AIA",
              "label": "AIA (1299)"
            },
            {
              "ticker": "945",
              "score_pca": 60.37441497659907,
              "rank_pca": 1017,
              "adv": 3938879.9999999995,
              "trades": 65.0,
              "volatility": 0.1801554140954655,
              "spread_pct": 0.004869238179796444,
              "spread_ticks": 7.425531914893617,
              "amihud": 1.7052072548063986e-09,
              "turnover_ratio": 7.728229982456965e-06,
              "is_target": false,
              "company_name": "MANULIFE-S",
              "label": "MANULIFE-S (945)"
            },
            {
              "ticker": "1828",
              "score_pca": 75.58502340093604,
              "rank_pca": 627,
              "adv": 7785646.0,
              "trades": 793.0,
              "volatility": 0.25751173210693273,
              "spread_pct": 0.0025683435604032926,
              "spread_ticks": 3.68227935585805,
              "amihud": 1.3590710828984187e-09,
              "turnover_ratio": 0.000948027118485602,
              "is_target": false,
              "company_name": "FWD",
              "label": "FWD (1828)"
            }
          ],
          "summary": {
            "n_peers": 4,
            "peer_median_adv": 184174602.52,
            "peer_median_score_pca": 85.8619344773791,
            "peer_median_trades": 5446.5,
            "peer_median_volatility": 0.2766966062874635,
            "peer_median_spread_pct": 0.001850456160240864,
            "peer_median_spread_ticks": 2.644641770554995,
            "peer_median_amihud": 6.956338617415147e-10,
            "peer_median_turnover_ratio": 0.0018876810711271866,
            "target_vs_peer": {
              "score_pca_delta": -16.83,
              "adv_delta_pct": -94.5,
              "trades_delta_pct": -94.31,
              "volatility_delta_pct": -16.47,
              "spread_pct_delta_pct": -66.07,
              "spread_ticks_delta_pct": 30.38,
              "amihud_delta_pct": -58.11,
              "turnover_ratio_delta_pct": -98.13
            }
          }
        },
        "takeaways": [
          "Liquidity score is below the peer median (69.0 vs 85.9).",
          "ADV is below the peer median.",
          "Window return underperformed the peer median."
        ],
        "performance": {
          "period_key": "3m",
          "label": "3M",
          "window_days": 63,
          "n_obs": 63,
          "rows": [
            {
              "listing_id": 534129733,
              "name": "PRU",
              "stock_code": "2378",
              "ticker": "2378",
              "return": -0.07848101265822804,
              "n_obs": 63,
              "is_target": true
            },
            {
              "listing_id": 534129636,
              "name": "CPIC",
              "stock_code": "2601",
              "ticker": "2601",
              "return": -0.19789227166276346,
              "n_obs": 63,
              "is_target": false
            },
            {
              "listing_id": 534130087,
              "name": "AIA",
              "stock_code": "1299",
              "ticker": "1299",
              "return": -0.1804850535814997,
              "n_obs": 63,
              "is_target": false
            },
            {
              "listing_id": 534130284,
              "name": "MANULIFE-S",
              "stock_code": "945",
              "ticker": "945",
              "return": 0.1534090909090906,
              "n_obs": 63,
              "is_target": false
            },
            {
              "listing_id": 772037047,
              "name": "FWD",
              "stock_code": "1828",
              "ticker": "1828",
              "return": -0.1098833640270096,
              "n_obs": 63,
              "is_target": false
            }
          ],
          "summary": {
            "target_return": -0.07848101265822804,
            "peer_median_return": -0.14518420880425464,
            "peer_rank": 2,
            "peer_count": 4,
            "peers_up": 1,
            "peers_down": 3,
            "dispersion": 0.35130136257185407
          },
          "takeaway": "Target return is above the peer median for this window."
        },
        "drivers": {
          "breadth_context": {
            "period_key": "3m",
            "label": "3M",
            "window_days": 63,
            "target_return": -0.07848101265822804,
            "peer_median_return": -0.14518420880425464,
            "peer_up_count": 1,
            "peer_down_count": 3,
            "peer_count": 4,
            "dispersion": 0.35130136257185407,
            "interpretation": "more peers fell than rose; Target return is above the peer median for this window."
          }
        },
        "market_state": {
          "period_key": "3m",
          "label": "3M",
          "window_days": 63,
          "rows": [
            {
              "ticker": "2378",
              "company_name": "PRU",
              "label": "PRU (2378)",
              "score_pca": 69.03276131045241,
              "rank_pca": 795,
              "adv": 10157415.0,
              "trades": 310.0,
              "volatility": 0.3222611129902431,
              "spread_pct": 0.0030731265440082883,
              "spread_ticks": 3.448202959830867,
              "amihud": 1.0998660951187802e-09,
              "turnover_ratio": 3.521003566328912e-05,
              "is_target": true
            },
            {
              "ticker": "2601",
              "company_name": "CPIC",
              "label": "CPIC (2601)",
              "score_pca": 96.13884555382215,
              "rank_pca": 100,
              "adv": 360563559.04,
              "trades": 10100.0,
              "volatility": 0.3066207988831542,
              "spread_pct": 0.0011325687600784356,
              "spread_ticks": 1.6070041852519399,
              "amihud": 3.219664058461062e-11,
              "turnover_ratio": 0.005509091704113104,
              "is_target": false
            },
            {
              "ticker": "1299",
              "company_name": "AIA",
              "label": "AIA (1299)",
              "score_pca": 98.71294851794072,
              "rank_pca": 34,
              "adv": 2291887555.0,
              "trades": 16943.0,
              "volatility": 0.29588148046799423,
              "spread_pct": 0.0006927154199901853,
              "spread_ticks": 1.110988715086534,
              "amihud": 5.206507312992787e-12,
              "turnover_ratio": 0.002827335023768771,
              "is_target": false
            },
            {
              "ticker": "945",
              "company_name": "MANULIFE-S",
              "label": "MANULIFE-S (945)",
              "score_pca": 60.37441497659907,
              "rank_pca": 1017,
              "adv": 3938879.9999999995,
              "trades": 65.0,
              "volatility": 0.1801554140954655,
              "spread_pct": 0.004869238179796444,
              "spread_ticks": 7.425531914893617,
              "amihud": 1.7052072548063986e-09,
              "turnover_ratio": 7.728229982456965e-06,
              "is_target": false
            },
            {
              "ticker": "1828",
              "company_name": "FWD",
              "label": "FWD (1828)",
              "score_pca": 75.58502340093604,
              "rank_pca": 627,
              "adv": 7785646.0,
              "trades": 793.0,
              "volatility": 0.25751173210693273,
              "spread_pct": 0.0025683435604032926,
              "spread_ticks": 3.68227935585805,
              "amihud": 1.3590710828984187e-09,
              "turnover_ratio": 0.000948027118485602,
              "is_target": false
            }
          ],
          "summary": {
            "target": {
              "score_pca": 69.03276131045241,
              "adv": 10157415.0,
              "trades": 310.0,
              "volatility": 0.3222611129902431,
              "spread_pct": 0.0030731265440082883,
              "spread_ticks": 3.448202959830867,
              "amihud": 1.0998660951187802e-09,
              "turnover_ratio": 3.521003566328912e-05
            },
            "peer_medians": {
              "score_pca": 85.8619344773791,
              "adv": 184174602.52,
              "trades": 5446.5,
              "volatility": 0.2766966062874635,
              "spread_pct": 0.001850456160240864,
              "spread_ticks": 2.644641770554995,
              "amihud": 6.956338617415147e-10,
              "turnover_ratio": 0.0018876810711271866
            },
            "peer_count": 4
          },
          "takeaways": [
            "Liquidity score is weaker than the peer median.",
            "ADV is weaker than the peer median.",
            "Spread is weaker than the peer median."
          ]
        }
      },
      "6m": {
        "label": "6M",
        "window_days": 126,
        "market_comparison": {
          "returns": {
            "window_days": 126,
            "n_obs": 126,
            "stock": -0.08542713567839266,
            "market": 0.06483113675813645,
            "sector": -0.19634788457856267,
            "peers": -0.09055174646778896,
            "peer_rows": [
              {
                "listing_id": 534129733,
                "name": "PRU",
                "stock_code": "2378",
                "ticker": "2378",
                "return": -0.08542713567839266,
                "n_obs": 126,
                "is_target": true
              },
              {
                "listing_id": 534129636,
                "name": "CPIC",
                "stock_code": "2601",
                "ticker": "2601",
                "return": -0.22159090909090917,
                "n_obs": 126,
                "is_target": false
              },
              {
                "listing_id": 534130087,
                "name": "AIA",
                "stock_code": "1299",
                "ticker": "1299",
                "return": -0.09073842302878654,
                "n_obs": 126,
                "is_target": false
              },
              {
                "listing_id": 534130284,
                "name": "MANULIFE-S",
                "stock_code": "945",
                "ticker": "945",
                "return": 0.14608327452364156,
                "n_obs": 126,
                "is_target": false
              },
              {
                "listing_id": 772037047,
                "name": "FWD",
                "stock_code": "1828",
                "ticker": "1828",
                "return": -0.23764458464773852,
                "n_obs": 126,
                "is_target": false
              }
            ]
          },
          "metric_rows": [
            {
              "ticker": "2378",
              "score_pca": 68.60374414976599,
              "rank_pca": 806,
              "adv": 9435015.0,
              "trades": 271.0,
              "volatility": 0.36188581876310444,
              "spread_pct": 0.0033094229828760447,
              "spread_ticks": 3.935083572110793,
              "amihud": 1.3596912281424743e-09,
              "turnover_ratio": 3.0987177416053996e-05,
              "is_target": true,
              "company_name": "PRU",
              "label": "PRU (2378)"
            },
            {
              "ticker": "2601",
              "score_pca": 97.46489859594384,
              "rank_pca": 66,
              "adv": 459413263.99999994,
              "trades": 11420.0,
              "volatility": 0.321053420414264,
              "spread_pct": 0.001159385533009543,
              "spread_ticks": 1.6070041852519399,
              "amihud": 2.784997455018527e-11,
              "turnover_ratio": 0.006414232200003247,
              "is_target": false,
              "company_name": "CPIC",
              "label": "CPIC (2601)"
            },
            {
              "ticker": "1299",
              "score_pca": 99.02496099843994,
              "rank_pca": 26,
              "adv": 2330915428.375,
              "trades": 16045.5,
              "volatility": 0.3678457895215191,
              "spread_pct": 0.0006787922622548757,
              "spread_ticks": 1.120157495877919,
              "amihud": 5.825611603372586e-12,
              "turnover_ratio": 0.0029032152105322707,
              "is_target": false,
              "company_name": "AIA",
              "label": "AIA (1299)"
            },
            {
              "ticker": "945",
              "score_pca": 60.14040561622465,
              "rank_pca": 1023,
              "adv": 3587050.0,
              "trades": 62.0,
              "volatility": 0.22885375737585553,
              "spread_pct": 0.004562861457869171,
              "spread_ticks": 6.852191560420273,
              "amihud": 2.5092866268628036e-09,
              "turnover_ratio": 7.289126006181001e-06,
              "is_target": false,
              "company_name": "MANULIFE-S",
              "label": "MANULIFE-S (945)"
            },
            {
              "ticker": "1828",
              "score_pca": 76.87207488299532,
              "rank_pca": 594,
              "adv": 9685898.0,
              "trades": 891.0,
              "volatility": 0.2525120375851249,
              "spread_pct": 0.0023951115014147917,
              "spread_ticks": 3.68227935585805,
              "amihud": 8.978391933465418e-10,
              "turnover_ratio": 0.001089226533242706,
              "is_target": false,
              "company_name": "FWD",
              "label": "FWD (1828)"
            }
          ]
        },
        "liquidity": {
          "rows": [
            {
              "ticker": "2378",
              "score_pca": 68.60374414976599,
              "rank_pca": 806,
              "adv": 9435015.0,
              "trades": 271.0,
              "volatility": 0.36188581876310444,
              "spread_pct": 0.0033094229828760447,
              "spread_ticks": 3.935083572110793,
              "amihud": 1.3596912281424743e-09,
              "turnover_ratio": 3.0987177416053996e-05,
              "is_target": true,
              "company_name": "PRU",
              "label": "PRU (2378)"
            },
            {
              "ticker": "2601",
              "score_pca": 97.46489859594384,
              "rank_pca": 66,
              "adv": 459413263.99999994,
              "trades": 11420.0,
              "volatility": 0.321053420414264,
              "spread_pct": 0.001159385533009543,
              "spread_ticks": 1.6070041852519399,
              "amihud": 2.784997455018527e-11,
              "turnover_ratio": 0.006414232200003247,
              "is_target": false,
              "company_name": "CPIC",
              "label": "CPIC (2601)"
            },
            {
              "ticker": "1299",
              "score_pca": 99.02496099843994,
              "rank_pca": 26,
              "adv": 2330915428.375,
              "trades": 16045.5,
              "volatility": 0.3678457895215191,
              "spread_pct": 0.0006787922622548757,
              "spread_ticks": 1.120157495877919,
              "amihud": 5.825611603372586e-12,
              "turnover_ratio": 0.0029032152105322707,
              "is_target": false,
              "company_name": "AIA",
              "label": "AIA (1299)"
            },
            {
              "ticker": "945",
              "score_pca": 60.14040561622465,
              "rank_pca": 1023,
              "adv": 3587050.0,
              "trades": 62.0,
              "volatility": 0.22885375737585553,
              "spread_pct": 0.004562861457869171,
              "spread_ticks": 6.852191560420273,
              "amihud": 2.5092866268628036e-09,
              "turnover_ratio": 7.289126006181001e-06,
              "is_target": false,
              "company_name": "MANULIFE-S",
              "label": "MANULIFE-S (945)"
            },
            {
              "ticker": "1828",
              "score_pca": 76.87207488299532,
              "rank_pca": 594,
              "adv": 9685898.0,
              "trades": 891.0,
              "volatility": 0.2525120375851249,
              "spread_pct": 0.0023951115014147917,
              "spread_ticks": 3.68227935585805,
              "amihud": 8.978391933465418e-10,
              "turnover_ratio": 0.001089226533242706,
              "is_target": false,
              "company_name": "FWD",
              "label": "FWD (1828)"
            }
          ],
          "summary": {
            "n_peers": 4,
            "peer_median_adv": 234549580.99999997,
            "peer_median_score_pca": 87.16848673946959,
            "peer_median_trades": 6155.5,
            "peer_median_volatility": 0.2867827289996945,
            "peer_median_spread_pct": 0.0017772485172121673,
            "peer_median_spread_ticks": 2.644641770554995,
            "peer_median_amihud": 4.628445839483635e-10,
            "peer_median_turnover_ratio": 0.0019962208718874884,
            "target_vs_peer": {
              "score_pca_delta": -18.56,
              "adv_delta_pct": -96.0,
              "trades_delta_pct": -95.6,
              "volatility_delta_pct": -26.19,
              "spread_pct_delta_pct": -86.21,
              "spread_ticks_delta_pct": 48.79,
              "amihud_delta_pct": -193.77,
              "turnover_ratio_delta_pct": -98.45
            }
          }
        },
        "takeaways": [
          "Liquidity score is below the peer median (68.6 vs 87.2).",
          "ADV is below the peer median.",
          "Window return outperformed the peer median."
        ],
        "performance": {
          "period_key": "6m",
          "label": "6M",
          "window_days": 126,
          "n_obs": 126,
          "rows": [
            {
              "listing_id": 534129733,
              "name": "PRU",
              "stock_code": "2378",
              "ticker": "2378",
              "return": -0.08542713567839266,
              "n_obs": 126,
              "is_target": true
            },
            {
              "listing_id": 534129636,
              "name": "CPIC",
              "stock_code": "2601",
              "ticker": "2601",
              "return": -0.22159090909090917,
              "n_obs": 126,
              "is_target": false
            },
            {
              "listing_id": 534130087,
              "name": "AIA",
              "stock_code": "1299",
              "ticker": "1299",
              "return": -0.09073842302878654,
              "n_obs": 126,
              "is_target": false
            },
            {
              "listing_id": 534130284,
              "name": "MANULIFE-S",
              "stock_code": "945",
              "ticker": "945",
              "return": 0.14608327452364156,
              "n_obs": 126,
              "is_target": false
            },
            {
              "listing_id": 772037047,
              "name": "FWD",
              "stock_code": "1828",
              "ticker": "1828",
              "return": -0.23764458464773852,
              "n_obs": 126,
              "is_target": false
            }
          ],
          "summary": {
            "target_return": -0.08542713567839266,
            "peer_median_return": -0.15616466605984786,
            "peer_rank": 2,
            "peer_count": 4,
            "peers_up": 1,
            "peers_down": 3,
            "dispersion": 0.3837278591713801
          },
          "takeaway": "Target return is above the peer median for this window."
        },
        "drivers": {
          "breadth_context": {
            "period_key": "6m",
            "label": "6M",
            "window_days": 126,
            "target_return": -0.08542713567839266,
            "peer_median_return": -0.15616466605984786,
            "peer_up_count": 1,
            "peer_down_count": 3,
            "peer_count": 4,
            "dispersion": 0.3837278591713801,
            "interpretation": "more peers fell than rose; Target return is above the peer median for this window."
          }
        },
        "market_state": {
          "period_key": "6m",
          "label": "6M",
          "window_days": 126,
          "rows": [
            {
              "ticker": "2378",
              "company_name": "PRU",
              "label": "PRU (2378)",
              "score_pca": 68.60374414976599,
              "rank_pca": 806,
              "adv": 9435015.0,
              "trades": 271.0,
              "volatility": 0.36188581876310444,
              "spread_pct": 0.0033094229828760447,
              "spread_ticks": 3.935083572110793,
              "amihud": 1.3596912281424743e-09,
              "turnover_ratio": 3.0987177416053996e-05,
              "is_target": true
            },
            {
              "ticker": "2601",
              "company_name": "CPIC",
              "label": "CPIC (2601)",
              "score_pca": 97.46489859594384,
              "rank_pca": 66,
              "adv": 459413263.99999994,
              "trades": 11420.0,
              "volatility": 0.321053420414264,
              "spread_pct": 0.001159385533009543,
              "spread_ticks": 1.6070041852519399,
              "amihud": 2.784997455018527e-11,
              "turnover_ratio": 0.006414232200003247,
              "is_target": false
            },
            {
              "ticker": "1299",
              "company_name": "AIA",
              "label": "AIA (1299)",
              "score_pca": 99.02496099843994,
              "rank_pca": 26,
              "adv": 2330915428.375,
              "trades": 16045.5,
              "volatility": 0.3678457895215191,
              "spread_pct": 0.0006787922622548757,
              "spread_ticks": 1.120157495877919,
              "amihud": 5.825611603372586e-12,
              "turnover_ratio": 0.0029032152105322707,
              "is_target": false
            },
            {
              "ticker": "945",
              "company_name": "MANULIFE-S",
              "label": "MANULIFE-S (945)",
              "score_pca": 60.14040561622465,
              "rank_pca": 1023,
              "adv": 3587050.0,
              "trades": 62.0,
              "volatility": 0.22885375737585553,
              "spread_pct": 0.004562861457869171,
              "spread_ticks": 6.852191560420273,
              "amihud": 2.5092866268628036e-09,
              "turnover_ratio": 7.289126006181001e-06,
              "is_target": false
            },
            {
              "ticker": "1828",
              "company_name": "FWD",
              "label": "FWD (1828)",
              "score_pca": 76.87207488299532,
              "rank_pca": 594,
              "adv": 9685898.0,
              "trades": 891.0,
              "volatility": 0.2525120375851249,
              "spread_pct": 0.0023951115014147917,
              "spread_ticks": 3.68227935585805,
              "amihud": 8.978391933465418e-10,
              "turnover_ratio": 0.001089226533242706,
              "is_target": false
            }
          ],
          "summary": {
            "target": {
              "score_pca": 68.60374414976599,
              "adv": 9435015.0,
              "trades": 271.0,
              "volatility": 0.36188581876310444,
              "spread_pct": 0.0033094229828760447,
              "spread_ticks": 3.935083572110793,
              "amihud": 1.3596912281424743e-09,
              "turnover_ratio": 3.0987177416053996e-05
            },
            "peer_medians": {
              "score_pca": 87.16848673946959,
              "adv": 234549580.99999997,
              "trades": 6155.5,
              "volatility": 0.2867827289996945,
              "spread_pct": 0.0017772485172121673,
              "spread_ticks": 2.644641770554995,
              "amihud": 4.628445839483635e-10,
              "turnover_ratio": 0.0019962208718874884
            },
            "peer_count": 4
          },
          "takeaways": [
            "Liquidity score is weaker than the peer median.",
            "ADV is weaker than the peer median.",
            "Spread is weaker than the peer median."
          ]
        }
      }
    },
    "peers": [
      {
        "identity": {
          "listing_id": 534129636,
          "ticker": "2601",
          "company_name": "CPIC",
          "sector": "Insurance",
          "industry": "Financials - Insurance",
          "market_mic": "XHKG"
        },
        "valid": true,
        "reason": null,
        "drivers": {
          "valid": true,
          "driver_mix": {
            "market_share": {
              "median": 0.29380833491276015,
              "low": null,
              "high": null,
              "range_collapsed": true,
              "display_value": "29.4%",
              "display_range": null,
              "display_text": "29.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
              "kind": "share_pct"
            },
            "sector_share": {
              "median": 0.6939127461711402,
              "low": null,
              "high": null,
              "range_collapsed": true,
              "display_value": "69.4%",
              "display_range": null,
              "display_text": "69.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
              "kind": "share_pct"
            },
            "company_share": {
              "median": 0.012278918916099653,
              "low": null,
              "high": null,
              "range_collapsed": true,
              "display_value": "1.2%",
              "display_range": null,
              "display_text": "1.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
              "kind": "share_pct"
            }
          },
          "dominant_driver": "sector",
          "dominant_driver_label": "Sector",
          "dominant_share": 0.6939127461711402,
          "monthly_history": [
            {
              "month_key": "2025-06",
              "month_label": "June 2025",
              "month_short_label": "Jun",
              "period_label": "2025-06-24 to 2025-06-30",
              "n_obs": 5,
              "partial_month": true,
              "dominant_driver": "sector",
              "dominant_driver_label": "Sector",
              "regime_id": null,
              "regime_label": null,
              "dominant_share": {
                "median": 0.5121176070530634,
                "low": null,
                "high": null,
                "range_collapsed": true,
                "display_value": "51.2%",
                "display_range": null,
                "display_text": "51.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
                "kind": "share_pct"
              },
              "shares": {
                "market_share": {
                  "median": 0.2955632505450696,
                  "low": null,
                  "high": null,
                  "range_collapsed": true,
                  "display_value": "29.6%",
                  "display_range": null,
                  "display_text": "29.6%",
                  "is_point_estimate": true,
                  "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
                  "kind": "share_pct"
                },
                "sector_share": {
                  "median": 0.5121176070530634,
                  "low": null,
                  "high": null,
                  "range_collapsed": true,
                  "display_value": "51.2%",
                  "display_range": null,
                  "display_text": "51.2%",
                  "is_point_estimate": true,
                  "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
                  "kind": "share_pct"
                },
                "company_share": {
                  "median": 0.19231914240186704,
                  "low": null,
                  "high": null,
                  "range_collapsed": true,
                  "display_value": "19.2%",
                  "display_range": null,
                  "display_text": "19.2%",
                  "is_point_estimate": true,
                  "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
                  "kind": "share_pct"
                }
              },
              "summary": "Jun: Mostly sector-driven, though based on only 5 trading days."
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
                "median": 0.5856619711286342,
                "low": null,
                "high": null,
                "range_collapsed": true,
                "display_value": "58.6%",
                "display_range": null,
                "display_text": "58.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct"
              },
              "shares": {
                "market_share": {
                  "median": 0.03524657713524076,
                  "low": null,
                  "high": null,
                  "range_collapsed": true,
                  "display_value": "3.5%",
                  "display_range": null,
                  "display_text": "3.5%",
                  "is_point_estimate": true,
                  "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                  "kind": "share_pct"
                },
                "sector_share": {
                  "median": 0.5856619711286342,
                  "low": null,
                  "high": null,
                  "range_collapsed": true,
                  "display_value": "58.6%",
                  "display_range": null,
                  "display_text": "58.6%",
                  "is_point_estimate": true,
                  "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                  "kind": "share_pct"
                },
                "company_share": {
                  "median": 0.3790914517361252,
                  "low": null,
                  "high": null,
                  "range_collapsed": true,
                  "display_value": "37.9%",
                  "display_range": null,
                  "display_text": "37.9%",
                  "is_point_estimate": true,
                  "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                  "kind": "share_pct"
                }
              },
              "summary": "Jul: Mostly sector-driven."
            },
            {
              "month_key": "2025-08",
              "month_label": "August 2025",
              "month_short_label": "Aug",
              "period_label": "2025-08-01 to 2025-08-29",
              "n_obs": 21,
              "partial_month": false,
              "dominant_driver": "sector",
              "dominant_driver_label": "Sector",
              "regime_id": null,
              "regime_label": null,
              "dominant_share": {
                "median": 0.5897155150998938,
                "low": null,
                "high": null,
                "range_collapsed": true,
                "display_value": "59.0%",
                "display_range": null,
                "display_text": "59.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct"
              },
              "shares": {
                "market_share": {
                  "median": 0.18949411610514988,
                  "low": null,
                  "high": null,
                  "range_collapsed": true,
                  "display_value": "18.9%",
                  "display_range": null,
                  "display_text": "18.9%",
                  "is_point_estimate": true,
                  "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                  "kind": "share_pct"
                },
                "sector_share": {
                  "median": 0.5897155150998938,
                  "low": null,
                  "high": null,
                  "range_collapsed": true,
                  "display_value": "59.0%",
                  "display_range": null,
                  "display_text": "59.0%",
                  "is_point_estimate": true,
                  "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                  "kind": "share_pct"
                },
                "company_share": {
                  "median": 0.22079036879495614,
                  "low": null,
                  "high": null,
                  "range_collapsed": true,
                  "display_value": "22.1%",
                  "display_range": null,
                  "display_text": "22.1%",
                  "is_point_estimate": true,
                  "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                  "kind": "share_pct"
                }
              },
              "summary": "Aug: Mostly sector-driven."
            },
            {
              "month_key": "2025-09",
              "month_label": "September 2025",
              "month_short_label": "Sep",
              "period_label": "2025-09-01 to 2025-09-30",
              "n_obs": 22,
              "partial_month": false,
              "dominant_driver": "sector",
              "dominant_driver_label": "Sector",
              "regime_id": null,
              "regime_label": null,
              "dominant_share": {
                "median": 0.5136678400811623,
                "low": null,
                "high": null,
                "range_collapsed": true,
                "display_value": "51.4%",
                "display_range": null,
                "display_text": "51.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct"
              },
              "shares": {
                "market_share": {
                  "median": 0.12525698017228168,
                  "low": null,
                  "high": null,
                  "range_collapsed": true,
                  "display_value": "12.5%",
                  "display_range": null,
                  "display_text": "12.5%",
                  "is_point_estimate": true,
                  "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                  "kind": "share_pct"
                },
                "sector_share": {
                  "median": 0.5136678400811623,
                  "low": null,
                  "high": null,
                  "range_collapsed": true,
                  "display_value": "51.4%",
                  "display_range": null,
                  "display_text": "51.4%",
                  "is_point_estimate": true,
                  "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                  "kind": "share_pct"
                },
                "company_share": {
                  "median": 0.36107517974655606,
                  "low": null,
                  "high": null,
                  "range_collapsed": true,
                  "display_value": "36.1%",
                  "display_range": null,
                  "display_text": "36.1%",
                  "is_point_estimate": true,
                  "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                  "kind": "share_pct"
                }
              },
              "summary": "Sep: Mostly sector-driven."
            },
            {
              "month_key": "2025-10",
              "month_label": "October 2025",
              "month_short_label": "Oct",
              "period_label": "2025-10-02 to 2025-10-31",
              "n_obs": 20,
              "partial_month": true,
              "dominant_driver": "sector",
              "dominant_driver_label": "Sector",
              "regime_id": null,
              "regime_label": null,
              "dominant_share": {
                "median": 0.4116520798866667,
                "low": null,
                "high": null,
                "range_collapsed": true,
                "display_value": "41.2%",
                "display_range": null,
                "display_text": "41.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct"
              },
              "shares": {
                "market_share": {
                  "median": 0.21286581059714135,
                  "low": null,
                  "high": null,
                  "range_collapsed": true,
                  "display_value": "21.3%",
                  "display_range": null,
                  "display_text": "21.3%",
                  "is_point_estimate": true,
                  "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                  "kind": "share_pct"
                },
                "sector_share": {
                  "median": 0.4116520798866667,
                  "low": null,
                  "high": null,
                  "range_collapsed": true,
                  "display_value": "41.2%",
                  "display_range": null,
                  "display_text": "41.2%",
                  "is_point_estimate": true,
                  "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                  "kind": "share_pct"
                },
                "company_share": {
                  "median": 0.3754821095161919,
                  "low": null,
                  "high": null,
                  "range_collapsed": true,
                  "display_value": "37.5%",
                  "display_range": null,
                  "display_text": "37.5%",
                  "is_point_estimate": true,
                  "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                  "kind": "share_pct"
                }
              },
              "summary": "Oct: More mixed, though sector-driven still has the largest share."
            },
            {
              "month_key": "2025-11",
              "month_label": "November 2025",
              "month_short_label": "Nov",
              "period_label": "2025-11-03 to 2025-11-28",
              "n_obs": 20,
              "partial_month": false,
              "dominant_driver": "sector",
              "dominant_driver_label": "Sector",
              "regime_id": null,
              "regime_label": null,
              "dominant_share": {
                "median": 0.5739308891837679,
                "low": null,
                "high": null,
                "range_collapsed": true,
                "display_value": "57.4%",
                "display_range": null,
                "display_text": "57.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct"
              },
              "shares": {
                "market_share": {
                  "median": 0.12969333258690113,
                  "low": null,
                  "high": null,
                  "range_collapsed": true,
                  "display_value": "13.0%",
                  "display_range": null,
                  "display_text": "13.0%",
                  "is_point_estimate": true,
                  "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                  "kind": "share_pct"
                },
                "sector_share": {
                  "median": 0.5739308891837679,
                  "low": null,
                  "high": null,
                  "range_collapsed": true,
                  "display_value": "57.4%",
                  "display_range": null,
                  "display_text": "57.4%",
                  "is_point_estimate": true,
                  "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                  "kind": "share_pct"
                },
                "company_share": {
                  "median": 0.29637577822933103,
                  "low": null,
                  "high": null,
                  "range_collapsed": true,
                  "display_value": "29.6%",
                  "display_range": null,
                  "display_text": "29.6%",
                  "is_point_estimate": true,
                  "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                  "kind": "share_pct"
                }
              },
              "summary": "Nov: Mostly sector-driven."
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
                "median": 0.39488468373798913,
                "low": null,
                "high": null,
                "range_collapsed": true,
                "display_value": "39.5%",
                "display_range": null,
                "display_text": "39.5%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
                "kind": "share_pct"
              },
              "shares": {
                "market_share": {
                  "median": 0.251493855960908,
                  "low": null,
                  "high": null,
                  "range_collapsed": true,
                  "display_value": "25.1%",
                  "display_range": null,
                  "display_text": "25.1%",
                  "is_point_estimate": true,
                  "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
                  "kind": "share_pct"
                },
                "sector_share": {
                  "median": 0.39488468373798913,
                  "low": null,
                  "high": null,
                  "range_collapsed": true,
                  "display_value": "39.5%",
                  "display_range": null,
                  "display_text": "39.5%",
                  "is_point_estimate": true,
                  "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
                  "kind": "share_pct"
                },
                "company_share": {
                  "median": 0.35362146030110286,
                  "low": null,
                  "high": null,
                  "range_collapsed": true,
                  "display_value": "35.4%",
                  "display_range": null,
                  "display_text": "35.4%",
                  "is_point_estimate": true,
                  "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
                  "kind": "share_pct"
                }
              },
              "summary": "Dec: More mixed, though sector-driven still has the largest share."
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
                "median": 0.5271026578856592,
                "low": null,
                "high": null,
                "range_collapsed": true,
                "display_value": "52.7%",
                "display_range": null,
                "display_text": "52.7%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct"
              },
              "shares": {
                "market_share": {
                  "median": 0.14867433116411857,
                  "low": null,
                  "high": null,
                  "range_collapsed": true,
                  "display_value": "14.9%",
                  "display_range": null,
                  "display_text": "14.9%",
                  "is_point_estimate": true,
                  "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                  "kind": "share_pct"
                },
                "sector_share": {
                  "median": 0.5271026578856592,
                  "low": null,
                  "high": null,
                  "range_collapsed": true,
                  "display_value": "52.7%",
                  "display_range": null,
                  "display_text": "52.7%",
                  "is_point_estimate": true,
                  "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                  "kind": "share_pct"
                },
                "company_share": {
                  "median": 0.32422301095022205,
                  "low": null,
                  "high": null,
                  "range_collapsed": true,
                  "display_value": "32.4%",
                  "display_range": null,
                  "display_text": "32.4%",
                  "is_point_estimate": true,
                  "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                  "kind": "share_pct"
                }
              },
              "summary": "Jan: Mostly sector-driven."
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
                "median": 0.5753846200146427,
                "low": null,
                "high": null,
                "range_collapsed": true,
                "display_value": "57.5%",
                "display_range": null,
                "display_text": "57.5%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
                "kind": "share_pct"
              },
              "shares": {
                "market_share": {
                  "median": 0.18800759544632817,
                  "low": null,
                  "high": null,
                  "range_collapsed": true,
                  "display_value": "18.8%",
                  "display_range": null,
                  "display_text": "18.8%",
                  "is_point_estimate": true,
                  "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
                  "kind": "share_pct"
                },
                "sector_share": {
                  "median": 0.5753846200146427,
                  "low": null,
                  "high": null,
                  "range_collapsed": true,
                  "display_value": "57.5%",
                  "display_range": null,
                  "display_text": "57.5%",
                  "is_point_estimate": true,
                  "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
                  "kind": "share_pct"
                },
                "company_share": {
                  "median": 0.23660778453902914,
                  "low": null,
                  "high": null,
                  "range_collapsed": true,
                  "display_value": "23.7%",
                  "display_range": null,
                  "display_text": "23.7%",
                  "is_point_estimate": true,
                  "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
                  "kind": "share_pct"
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
              "dominant_driver": "market",
              "dominant_driver_label": "Market",
              "regime_id": null,
              "regime_label": null,
              "dominant_share": {
                "median": 0.46562444723792173,
                "low": null,
                "high": null,
                "range_collapsed": true,
                "display_value": "46.6%",
                "display_range": null,
                "display_text": "46.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct"
              },
              "shares": {
                "market_share": {
                  "median": 0.46562444723792173,
                  "low": null,
                  "high": null,
                  "range_collapsed": true,
                  "display_value": "46.6%",
                  "display_range": null,
                  "display_text": "46.6%",
                  "is_point_estimate": true,
                  "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                  "kind": "share_pct"
                },
                "sector_share": {
                  "median": 0.2867608603804323,
                  "low": null,
                  "high": null,
                  "range_collapsed": true,
                  "display_value": "28.7%",
                  "display_range": null,
                  "display_text": "28.7%",
                  "is_point_estimate": true,
                  "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                  "kind": "share_pct"
                },
                "company_share": {
                  "median": 0.2476146923816459,
                  "low": null,
                  "high": null,
                  "range_collapsed": true,
                  "display_value": "24.8%",
                  "display_range": null,
                  "display_text": "24.8%",
                  "is_point_estimate": true,
                  "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                  "kind": "share_pct"
                }
              },
              "summary": "Mar: Mostly market-driven."
            },
            {
              "month_key": "2026-04",
              "month_label": "April 2026",
              "month_short_label": "Apr",
              "period_label": "2026-04-01 to 2026-04-30",
              "n_obs": 19,
              "partial_month": false,
              "dominant_driver": "company",
              "dominant_driver_label": "Company-specific",
              "regime_id": null,
              "regime_label": null,
              "dominant_share": {
                "median": 0.3772224666868104,
                "low": null,
                "high": null,
                "range_collapsed": true,
                "display_value": "37.7%",
                "display_range": null,
                "display_text": "37.7%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
                "kind": "share_pct"
              },
              "shares": {
                "market_share": {
                  "median": 0.3176760011076275,
                  "low": null,
                  "high": null,
                  "range_collapsed": true,
                  "display_value": "31.8%",
                  "display_range": null,
                  "display_text": "31.8%",
                  "is_point_estimate": true,
                  "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
                  "kind": "share_pct"
                },
                "sector_share": {
                  "median": 0.30510153220556196,
                  "low": null,
                  "high": null,
                  "range_collapsed": true,
                  "display_value": "30.5%",
                  "display_range": null,
                  "display_text": "30.5%",
                  "is_point_estimate": true,
                  "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
                  "kind": "share_pct"
                },
                "company_share": {
                  "median": 0.3772224666868104,
                  "low": null,
                  "high": null,
                  "range_collapsed": true,
                  "display_value": "37.7%",
                  "display_range": null,
                  "display_text": "37.7%",
                  "is_point_estimate": true,
                  "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
                  "kind": "share_pct"
                }
              },
              "summary": "Apr: Much more balanced across company, sector, and market factors."
            },
            {
              "month_key": "2026-05",
              "month_label": "May 2026",
              "month_short_label": "May",
              "period_label": "2026-05-04 to 2026-05-29",
              "n_obs": 19,
              "partial_month": true,
              "dominant_driver": "sector",
              "dominant_driver_label": "Sector",
              "regime_id": null,
              "regime_label": null,
              "dominant_share": {
                "median": 0.5244091788114519,
                "low": null,
                "high": null,
                "range_collapsed": true,
                "display_value": "52.4%",
                "display_range": null,
                "display_text": "52.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
                "kind": "share_pct"
              },
              "shares": {
                "market_share": {
                  "median": 0.21812634437903905,
                  "low": null,
                  "high": null,
                  "range_collapsed": true,
                  "display_value": "21.8%",
                  "display_range": null,
                  "display_text": "21.8%",
                  "is_point_estimate": true,
                  "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
                  "kind": "share_pct"
                },
                "sector_share": {
                  "median": 0.5244091788114519,
                  "low": null,
                  "high": null,
                  "range_collapsed": true,
                  "display_value": "52.4%",
                  "display_range": null,
                  "display_text": "52.4%",
                  "is_point_estimate": true,
                  "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
                  "kind": "share_pct"
                },
                "company_share": {
                  "median": 0.2574644768095092,
                  "low": null,
                  "high": null,
                  "range_collapsed": true,
                  "display_value": "25.7%",
                  "display_range": null,
                  "display_text": "25.7%",
                  "is_point_estimate": true,
                  "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
                  "kind": "share_pct"
                }
              },
              "summary": "May: Mostly sector-driven."
            },
            {
              "month_key": "2026-06",
              "month_label": "June 2026",
              "month_short_label": "Jun",
              "period_label": "2026-06-01 to 2026-06-30",
              "n_obs": 21,
              "partial_month": false,
              "dominant_driver": "sector",
              "dominant_driver_label": "Sector",
              "regime_id": null,
              "regime_label": null,
              "dominant_share": {
                "median": 0.518966062622222,
                "low": null,
                "high": null,
                "range_collapsed": true,
                "display_value": "51.9%",
                "display_range": null,
                "display_text": "51.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct"
              },
              "shares": {
                "market_share": {
                  "median": 0.23301477978978277,
                  "low": null,
                  "high": null,
                  "range_collapsed": true,
                  "display_value": "23.3%",
                  "display_range": null,
                  "display_text": "23.3%",
                  "is_point_estimate": true,
                  "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                  "kind": "share_pct"
                },
                "sector_share": {
                  "median": 0.518966062622222,
                  "low": null,
                  "high": null,
                  "range_collapsed": true,
                  "display_value": "51.9%",
                  "display_range": null,
                  "display_text": "51.9%",
                  "is_point_estimate": true,
                  "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                  "kind": "share_pct"
                },
                "company_share": {
                  "median": 0.2480191575879952,
                  "low": null,
                  "high": null,
                  "range_collapsed": true,
                  "display_value": "24.8%",
                  "display_range": null,
                  "display_text": "24.8%",
                  "is_point_estimate": true,
                  "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                  "kind": "share_pct"
                }
              },
              "summary": "Jun: Mostly sector-driven."
            },
            {
              "month_key": "2026-07",
              "month_label": "July 2026",
              "month_short_label": "Jul",
              "period_label": "2026-07-02 to 2026-07-10",
              "n_obs": 7,
              "partial_month": true,
              "dominant_driver": "sector",
              "dominant_driver_label": "Sector",
              "regime_id": null,
              "regime_label": null,
              "dominant_share": {
                "median": 0.614175230021809,
                "low": null,
                "high": null,
                "range_collapsed": true,
                "display_value": "61.4%",
                "display_range": null,
                "display_text": "61.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 7 trading days.",
                "kind": "share_pct"
              },
              "shares": {
                "market_share": {
                  "median": 0.16267565635735426,
                  "low": null,
                  "high": null,
                  "range_collapsed": true,
                  "display_value": "16.3%",
                  "display_range": null,
                  "display_text": "16.3%",
                  "is_point_estimate": true,
                  "point_estimate_note": "Point estimate only because the current state has 7 trading days.",
                  "kind": "share_pct"
                },
                "sector_share": {
                  "median": 0.614175230021809,
                  "low": null,
                  "high": null,
                  "range_collapsed": true,
                  "display_value": "61.4%",
                  "display_range": null,
                  "display_text": "61.4%",
                  "is_point_estimate": true,
                  "point_estimate_note": "Point estimate only because the current state has 7 trading days.",
                  "kind": "share_pct"
                },
                "company_share": {
                  "median": 0.2231491136208367,
                  "low": null,
                  "high": null,
                  "range_collapsed": true,
                  "display_value": "22.3%",
                  "display_range": null,
                  "display_text": "22.3%",
                  "is_point_estimate": true,
                  "point_estimate_note": "Point estimate only because the current state has 7 trading days.",
                  "kind": "share_pct"
                }
              },
              "summary": "Jul: Still clearly sector-driven, though based on only 7 trading days."
            }
          ],
          "summary": "Sector is the largest recent movement component.",
          "limitation": "Company-specific means residual movement after market and sector factors; it is not a news or causality label.",
          "source": "q02_peer_driver_regime_model"
        },
        "market_state": {
          "valid": true,
          "active_state_label": "Stressed / Illiquid",
          "active_state_probability": 0.9999999999999953,
          "active_state_probability_display": ">99.9%",
          "state_profiles": [
            {
              "id": 0,
              "label": "Calm / Liquid",
              "pct_time": 0.24192970812276246,
              "expected_duration_days": 3.5006164143004033,
              "current_probability": 0.0,
              "current_probability_display": "<0.1%",
              "current_probability_basis": "filtered",
              "n_days_effective": 60.72435673881338,
              "volatility": {
                "median": 0.010822213773089949,
                "low": 0.010822213773089949,
                "high": 0.010822213773089949
              },
              "volatility_label": "Calm / Liquid",
              "jump_probability": 0.1768493991277547,
              "jump_rate": 2.4892735791705045e-05,
              "risk_score": 0.04187546513705809,
              "metrics": {
                "rolling_vol_10d": 0.017551838148227063,
                "downside_vol_10d": 0.009067819940526403,
                "drawdown_21d": 0.05494814653057675,
                "amihud_stress": 0.003069458618899575,
                "spread_rel": 12.909473301657266,
                "spread_ticks": 1.4474803383362655,
                "log_notional": 19.502376360337706,
                "log_trade_count": 8.962482759813133
              }
            },
            {
              "id": 1,
              "label": "Normal / Active",
              "pct_time": 0.49836631141229165,
              "expected_duration_days": 7.1189623582416095,
              "current_probability": 0.0,
              "current_probability_display": "<0.1%",
              "current_probability_basis": "filtered",
              "n_days_effective": 125.0899441644852,
              "volatility": {
                "median": 0.021026746579047566,
                "low": 0.021026746579047566,
                "high": 0.021026746579047566
              },
              "volatility_label": "Normal / Active",
              "jump_probability": 0.24298567099018115,
              "jump_rate": 0.03374364475581145,
              "risk_score": 0.4767571186843982,
              "metrics": {
                "rolling_vol_10d": 0.021928374486819023,
                "downside_vol_10d": 0.01246528612467906,
                "drawdown_21d": 0.06249895785797375,
                "amihud_stress": 0.002630089554494031,
                "spread_rel": 11.949886977486315,
                "spread_ticks": 1.4474803141104253,
                "log_notional": 20.272532857449413,
                "log_trade_count": 9.641864720626167
              }
            },
            {
              "id": 2,
              "label": "Stressed / Illiquid",
              "pct_time": 0.10357873388558626,
              "expected_duration_days": 24.403963951412187,
              "current_probability": 0.9999999999999953,
              "current_probability_display": ">99.9%",
              "current_probability_basis": "filtered",
              "n_days_effective": 25.998262205282153,
              "volatility": {
                "median": 0.01673848514776017,
                "low": 0.01673848514776017,
                "high": 0.01673848514776017
              },
              "volatility_label": "Stressed / Illiquid",
              "jump_probability": 0.2956004842546664,
              "jump_rate": 0.153820536728074,
              "risk_score": 0.48850947914030163,
              "metrics": {
                "rolling_vol_10d": 0.019267369271495093,
                "downside_vol_10d": 0.012600121264722899,
                "drawdown_21d": 0.11825703426054704,
                "amihud_stress": 0.0040665574894482,
                "spread_rel": 11.490911602476489,
                "spread_ticks": 1.6698705730865113,
                "log_notional": 19.67389246909625,
                "log_trade_count": 9.25350078198841
              }
            },
            {
              "id": 3,
              "label": "Jump / Tail Shock",
              "pct_time": 0.15612524657935964,
              "expected_duration_days": 4.44039464142343,
              "current_probability": 4.655037186511378e-15,
              "current_probability_display": "<0.1%",
              "current_probability_basis": "filtered",
              "n_days_effective": 39.18743689141927,
              "volatility": {
                "median": 0.034438107649242856,
                "low": 0.034438107649242856,
                "high": 0.034438107649242856
              },
              "volatility_label": "Jump / Tail Shock",
              "jump_probability": 0.349410173020835,
              "jump_rate": 0.30056650942604207,
              "risk_score": 0.9130912833084366,
              "metrics": {
                "rolling_vol_10d": 0.02661700324436934,
                "downside_vol_10d": 0.011948257720502885,
                "drawdown_21d": 0.026548300705497567,
                "amihud_stress": 0.004288398137007528,
                "spread_rel": 19.52062686444514,
                "spread_ticks": 1.36612094575232,
                "log_notional": 20.31555585931132,
                "log_trade_count": 9.498816915235713
              }
            }
          ],
          "transitions": [
            [
              0.7143360249598071,
              0.19038551090759329,
              0.016595992490495426,
              0.07868247164210412
            ],
            [
              0.12395532765272581,
              0.8595300902466071,
              7.987855084935914e-05,
              0.016434703549817683
            ],
            [
              0.0003992505104278789,
              0.0003979370348725504,
              0.9590230504359464,
              0.04017976201875327
            ],
            [
              0.04709495757444822,
              0.15242746849531566,
              0.02568278219511144,
              0.7747947917351247
            ]
          ],
          "state_probabilities": [
            {
              "id": 0,
              "label": "Calm / Liquid",
              "probability": 0.0,
              "probability_display": "<0.1%",
              "basis": "filtered"
            },
            {
              "id": 1,
              "label": "Normal / Active",
              "probability": 0.0,
              "probability_display": "<0.1%",
              "basis": "filtered"
            },
            {
              "id": 2,
              "label": "Stressed / Illiquid",
              "probability": 0.9999999999999953,
              "probability_display": ">99.9%",
              "basis": "filtered"
            },
            {
              "id": 3,
              "label": "Jump / Tail Shock",
              "probability": 4.655037186511378e-15,
              "probability_display": "<0.1%",
              "basis": "filtered"
            }
          ],
          "summary": "Active state is Stressed / Illiquid with >99.9% model probability.",
          "limitation": "Peer state labels are stock-specific inferred states, not universal stress levels.",
          "source": "q02_peer_hmm_jump_regime_model"
        }
      },
      {
        "identity": {
          "listing_id": 534130087,
          "ticker": "1299",
          "company_name": "AIA",
          "sector": "Insurance",
          "industry": "Financials - Insurance",
          "market_mic": "XHKG"
        },
        "valid": true,
        "reason": null,
        "drivers": {
          "valid": true,
          "driver_mix": {
            "market_share": {
              "median": 0.1888795711306668,
              "low": null,
              "high": null,
              "range_collapsed": true,
              "display_value": "18.9%",
              "display_range": null,
              "display_text": "18.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
              "kind": "share_pct"
            },
            "sector_share": {
              "median": 0.732029707635706,
              "low": null,
              "high": null,
              "range_collapsed": true,
              "display_value": "73.2%",
              "display_range": null,
              "display_text": "73.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
              "kind": "share_pct"
            },
            "company_share": {
              "median": 0.07909072123362733,
              "low": null,
              "high": null,
              "range_collapsed": true,
              "display_value": "7.9%",
              "display_range": null,
              "display_text": "7.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
              "kind": "share_pct"
            }
          },
          "dominant_driver": "sector",
          "dominant_driver_label": "Sector",
          "dominant_share": 0.732029707635706,
          "monthly_history": [
            {
              "month_key": "2025-06",
              "month_label": "June 2025",
              "month_short_label": "Jun",
              "period_label": "2025-06-24 to 2025-06-30",
              "n_obs": 5,
              "partial_month": true,
              "dominant_driver": "market",
              "dominant_driver_label": "Market",
              "regime_id": null,
              "regime_label": null,
              "dominant_share": {
                "median": 0.5762630401080919,
                "low": null,
                "high": null,
                "range_collapsed": true,
                "display_value": "57.6%",
                "display_range": null,
                "display_text": "57.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
                "kind": "share_pct"
              },
              "shares": {
                "market_share": {
                  "median": 0.5762630401080919,
                  "low": null,
                  "high": null,
                  "range_collapsed": true,
                  "display_value": "57.6%",
                  "display_range": null,
                  "display_text": "57.6%",
                  "is_point_estimate": true,
                  "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
                  "kind": "share_pct"
                },
                "sector_share": {
                  "median": 0.3299175473036322,
                  "low": null,
                  "high": null,
                  "range_collapsed": true,
                  "display_value": "33.0%",
                  "display_range": null,
                  "display_text": "33.0%",
                  "is_point_estimate": true,
                  "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
                  "kind": "share_pct"
                },
                "company_share": {
                  "median": 0.09381941258827575,
                  "low": null,
                  "high": null,
                  "range_collapsed": true,
                  "display_value": "9.4%",
                  "display_range": null,
                  "display_text": "9.4%",
                  "is_point_estimate": true,
                  "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
                  "kind": "share_pct"
                }
              },
              "summary": "Jun: Mostly market-driven, though based on only 5 trading days."
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
                "median": 0.48914171172844534,
                "low": null,
                "high": null,
                "range_collapsed": true,
                "display_value": "48.9%",
                "display_range": null,
                "display_text": "48.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct"
              },
              "shares": {
                "market_share": {
                  "median": 0.25707513797043124,
                  "low": null,
                  "high": null,
                  "range_collapsed": true,
                  "display_value": "25.7%",
                  "display_range": null,
                  "display_text": "25.7%",
                  "is_point_estimate": true,
                  "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                  "kind": "share_pct"
                },
                "sector_share": {
                  "median": 0.2537831503011235,
                  "low": null,
                  "high": null,
                  "range_collapsed": true,
                  "display_value": "25.4%",
                  "display_range": null,
                  "display_text": "25.4%",
                  "is_point_estimate": true,
                  "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                  "kind": "share_pct"
                },
                "company_share": {
                  "median": 0.48914171172844534,
                  "low": null,
                  "high": null,
                  "range_collapsed": true,
                  "display_value": "48.9%",
                  "display_range": null,
                  "display_text": "48.9%",
                  "is_point_estimate": true,
                  "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                  "kind": "share_pct"
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
                "median": 0.4732342600046307,
                "low": null,
                "high": null,
                "range_collapsed": true,
                "display_value": "47.3%",
                "display_range": null,
                "display_text": "47.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct"
              },
              "shares": {
                "market_share": {
                  "median": 0.4732342600046307,
                  "low": null,
                  "high": null,
                  "range_collapsed": true,
                  "display_value": "47.3%",
                  "display_range": null,
                  "display_text": "47.3%",
                  "is_point_estimate": true,
                  "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                  "kind": "share_pct"
                },
                "sector_share": {
                  "median": 0.2588985007820881,
                  "low": null,
                  "high": null,
                  "range_collapsed": true,
                  "display_value": "25.9%",
                  "display_range": null,
                  "display_text": "25.9%",
                  "is_point_estimate": true,
                  "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                  "kind": "share_pct"
                },
                "company_share": {
                  "median": 0.26786723921328115,
                  "low": null,
                  "high": null,
                  "range_collapsed": true,
                  "display_value": "26.8%",
                  "display_range": null,
                  "display_text": "26.8%",
                  "is_point_estimate": true,
                  "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                  "kind": "share_pct"
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
                "median": 0.4319302400086341,
                "low": null,
                "high": null,
                "range_collapsed": true,
                "display_value": "43.2%",
                "display_range": null,
                "display_text": "43.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct"
              },
              "shares": {
                "market_share": {
                  "median": 0.18021009104759564,
                  "low": null,
                  "high": null,
                  "range_collapsed": true,
                  "display_value": "18.0%",
                  "display_range": null,
                  "display_text": "18.0%",
                  "is_point_estimate": true,
                  "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                  "kind": "share_pct"
                },
                "sector_share": {
                  "median": 0.38785966894377016,
                  "low": null,
                  "high": null,
                  "range_collapsed": true,
                  "display_value": "38.8%",
                  "display_range": null,
                  "display_text": "38.8%",
                  "is_point_estimate": true,
                  "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                  "kind": "share_pct"
                },
                "company_share": {
                  "median": 0.4319302400086341,
                  "low": null,
                  "high": null,
                  "range_collapsed": true,
                  "display_value": "43.2%",
                  "display_range": null,
                  "display_text": "43.2%",
                  "is_point_estimate": true,
                  "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                  "kind": "share_pct"
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
                "median": 0.42184802968972773,
                "low": null,
                "high": null,
                "range_collapsed": true,
                "display_value": "42.2%",
                "display_range": null,
                "display_text": "42.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct"
              },
              "shares": {
                "market_share": {
                  "median": 0.36854540475275804,
                  "low": null,
                  "high": null,
                  "range_collapsed": true,
                  "display_value": "36.9%",
                  "display_range": null,
                  "display_text": "36.9%",
                  "is_point_estimate": true,
                  "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                  "kind": "share_pct"
                },
                "sector_share": {
                  "median": 0.20960656555751428,
                  "low": null,
                  "high": null,
                  "range_collapsed": true,
                  "display_value": "21.0%",
                  "display_range": null,
                  "display_text": "21.0%",
                  "is_point_estimate": true,
                  "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                  "kind": "share_pct"
                },
                "company_share": {
                  "median": 0.42184802968972773,
                  "low": null,
                  "high": null,
                  "range_collapsed": true,
                  "display_value": "42.2%",
                  "display_range": null,
                  "display_text": "42.2%",
                  "is_point_estimate": true,
                  "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                  "kind": "share_pct"
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
                "median": 0.48428314296427183,
                "low": null,
                "high": null,
                "range_collapsed": true,
                "display_value": "48.4%",
                "display_range": null,
                "display_text": "48.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct"
              },
              "shares": {
                "market_share": {
                  "median": 0.48428314296427183,
                  "low": null,
                  "high": null,
                  "range_collapsed": true,
                  "display_value": "48.4%",
                  "display_range": null,
                  "display_text": "48.4%",
                  "is_point_estimate": true,
                  "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                  "kind": "share_pct"
                },
                "sector_share": {
                  "median": 0.11319144194279077,
                  "low": null,
                  "high": null,
                  "range_collapsed": true,
                  "display_value": "11.3%",
                  "display_range": null,
                  "display_text": "11.3%",
                  "is_point_estimate": true,
                  "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                  "kind": "share_pct"
                },
                "company_share": {
                  "median": 0.4025254150929373,
                  "low": null,
                  "high": null,
                  "range_collapsed": true,
                  "display_value": "40.3%",
                  "display_range": null,
                  "display_text": "40.3%",
                  "is_point_estimate": true,
                  "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                  "kind": "share_pct"
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
                "median": 0.46363046197058033,
                "low": null,
                "high": null,
                "range_collapsed": true,
                "display_value": "46.4%",
                "display_range": null,
                "display_text": "46.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
                "kind": "share_pct"
              },
              "shares": {
                "market_share": {
                  "median": 0.3641253502888841,
                  "low": null,
                  "high": null,
                  "range_collapsed": true,
                  "display_value": "36.4%",
                  "display_range": null,
                  "display_text": "36.4%",
                  "is_point_estimate": true,
                  "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
                  "kind": "share_pct"
                },
                "sector_share": {
                  "median": 0.46363046197058033,
                  "low": null,
                  "high": null,
                  "range_collapsed": true,
                  "display_value": "46.4%",
                  "display_range": null,
                  "display_text": "46.4%",
                  "is_point_estimate": true,
                  "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
                  "kind": "share_pct"
                },
                "company_share": {
                  "median": 0.17224418774053565,
                  "low": null,
                  "high": null,
                  "range_collapsed": true,
                  "display_value": "17.2%",
                  "display_range": null,
                  "display_text": "17.2%",
                  "is_point_estimate": true,
                  "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
                  "kind": "share_pct"
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
                "median": 0.3478703408322377,
                "low": null,
                "high": null,
                "range_collapsed": true,
                "display_value": "34.8%",
                "display_range": null,
                "display_text": "34.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct"
              },
              "shares": {
                "market_share": {
                  "median": 0.32033868932341775,
                  "low": null,
                  "high": null,
                  "range_collapsed": true,
                  "display_value": "32.0%",
                  "display_range": null,
                  "display_text": "32.0%",
                  "is_point_estimate": true,
                  "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                  "kind": "share_pct"
                },
                "sector_share": {
                  "median": 0.3478703408322377,
                  "low": null,
                  "high": null,
                  "range_collapsed": true,
                  "display_value": "34.8%",
                  "display_range": null,
                  "display_text": "34.8%",
                  "is_point_estimate": true,
                  "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                  "kind": "share_pct"
                },
                "company_share": {
                  "median": 0.3317909698443444,
                  "low": null,
                  "high": null,
                  "range_collapsed": true,
                  "display_value": "33.2%",
                  "display_range": null,
                  "display_text": "33.2%",
                  "is_point_estimate": true,
                  "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                  "kind": "share_pct"
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
                "median": 0.48681347129385155,
                "low": null,
                "high": null,
                "range_collapsed": true,
                "display_value": "48.7%",
                "display_range": null,
                "display_text": "48.7%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
                "kind": "share_pct"
              },
              "shares": {
                "market_share": {
                  "median": 0.16073456686852333,
                  "low": null,
                  "high": null,
                  "range_collapsed": true,
                  "display_value": "16.1%",
                  "display_range": null,
                  "display_text": "16.1%",
                  "is_point_estimate": true,
                  "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
                  "kind": "share_pct"
                },
                "sector_share": {
                  "median": 0.48681347129385155,
                  "low": null,
                  "high": null,
                  "range_collapsed": true,
                  "display_value": "48.7%",
                  "display_range": null,
                  "display_text": "48.7%",
                  "is_point_estimate": true,
                  "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
                  "kind": "share_pct"
                },
                "company_share": {
                  "median": 0.3524519618376251,
                  "low": null,
                  "high": null,
                  "range_collapsed": true,
                  "display_value": "35.2%",
                  "display_range": null,
                  "display_text": "35.2%",
                  "is_point_estimate": true,
                  "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
                  "kind": "share_pct"
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
                "median": 0.4526245602233459,
                "low": null,
                "high": null,
                "range_collapsed": true,
                "display_value": "45.3%",
                "display_range": null,
                "display_text": "45.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct"
              },
              "shares": {
                "market_share": {
                  "median": 0.10678785313284461,
                  "low": null,
                  "high": null,
                  "range_collapsed": true,
                  "display_value": "10.7%",
                  "display_range": null,
                  "display_text": "10.7%",
                  "is_point_estimate": true,
                  "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                  "kind": "share_pct"
                },
                "sector_share": {
                  "median": 0.4526245602233459,
                  "low": null,
                  "high": null,
                  "range_collapsed": true,
                  "display_value": "45.3%",
                  "display_range": null,
                  "display_text": "45.3%",
                  "is_point_estimate": true,
                  "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                  "kind": "share_pct"
                },
                "company_share": {
                  "median": 0.4405875866438095,
                  "low": null,
                  "high": null,
                  "range_collapsed": true,
                  "display_value": "44.1%",
                  "display_range": null,
                  "display_text": "44.1%",
                  "is_point_estimate": true,
                  "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                  "kind": "share_pct"
                }
              },
              "summary": "Mar: Mostly sector-driven."
            },
            {
              "month_key": "2026-04",
              "month_label": "April 2026",
              "month_short_label": "Apr",
              "period_label": "2026-04-01 to 2026-04-30",
              "n_obs": 19,
              "partial_month": false,
              "dominant_driver": "sector",
              "dominant_driver_label": "Sector",
              "regime_id": null,
              "regime_label": null,
              "dominant_share": {
                "median": 0.4849162802680627,
                "low": null,
                "high": null,
                "range_collapsed": true,
                "display_value": "48.5%",
                "display_range": null,
                "display_text": "48.5%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
                "kind": "share_pct"
              },
              "shares": {
                "market_share": {
                  "median": 0.24180034088873054,
                  "low": null,
                  "high": null,
                  "range_collapsed": true,
                  "display_value": "24.2%",
                  "display_range": null,
                  "display_text": "24.2%",
                  "is_point_estimate": true,
                  "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
                  "kind": "share_pct"
                },
                "sector_share": {
                  "median": 0.4849162802680627,
                  "low": null,
                  "high": null,
                  "range_collapsed": true,
                  "display_value": "48.5%",
                  "display_range": null,
                  "display_text": "48.5%",
                  "is_point_estimate": true,
                  "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
                  "kind": "share_pct"
                },
                "company_share": {
                  "median": 0.27328337884320675,
                  "low": null,
                  "high": null,
                  "range_collapsed": true,
                  "display_value": "27.3%",
                  "display_range": null,
                  "display_text": "27.3%",
                  "is_point_estimate": true,
                  "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
                  "kind": "share_pct"
                }
              },
              "summary": "Apr: Mostly sector-driven."
            },
            {
              "month_key": "2026-05",
              "month_label": "May 2026",
              "month_short_label": "May",
              "period_label": "2026-05-04 to 2026-05-29",
              "n_obs": 19,
              "partial_month": true,
              "dominant_driver": "company",
              "dominant_driver_label": "Company-specific",
              "regime_id": null,
              "regime_label": null,
              "dominant_share": {
                "median": 0.4632345748242443,
                "low": null,
                "high": null,
                "range_collapsed": true,
                "display_value": "46.3%",
                "display_range": null,
                "display_text": "46.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
                "kind": "share_pct"
              },
              "shares": {
                "market_share": {
                  "median": 0.14557251192852347,
                  "low": null,
                  "high": null,
                  "range_collapsed": true,
                  "display_value": "14.6%",
                  "display_range": null,
                  "display_text": "14.6%",
                  "is_point_estimate": true,
                  "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
                  "kind": "share_pct"
                },
                "sector_share": {
                  "median": 0.3911929132472323,
                  "low": null,
                  "high": null,
                  "range_collapsed": true,
                  "display_value": "39.1%",
                  "display_range": null,
                  "display_text": "39.1%",
                  "is_point_estimate": true,
                  "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
                  "kind": "share_pct"
                },
                "company_share": {
                  "median": 0.4632345748242443,
                  "low": null,
                  "high": null,
                  "range_collapsed": true,
                  "display_value": "46.3%",
                  "display_range": null,
                  "display_text": "46.3%",
                  "is_point_estimate": true,
                  "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
                  "kind": "share_pct"
                }
              },
              "summary": "May: Mostly company-driven."
            },
            {
              "month_key": "2026-06",
              "month_label": "June 2026",
              "month_short_label": "Jun",
              "period_label": "2026-06-01 to 2026-06-30",
              "n_obs": 21,
              "partial_month": false,
              "dominant_driver": "company",
              "dominant_driver_label": "Company-specific",
              "regime_id": null,
              "regime_label": null,
              "dominant_share": {
                "median": 0.4927778109752787,
                "low": null,
                "high": null,
                "range_collapsed": true,
                "display_value": "49.3%",
                "display_range": null,
                "display_text": "49.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct"
              },
              "shares": {
                "market_share": {
                  "median": 0.3082649131337539,
                  "low": null,
                  "high": null,
                  "range_collapsed": true,
                  "display_value": "30.8%",
                  "display_range": null,
                  "display_text": "30.8%",
                  "is_point_estimate": true,
                  "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                  "kind": "share_pct"
                },
                "sector_share": {
                  "median": 0.19895727589096746,
                  "low": null,
                  "high": null,
                  "range_collapsed": true,
                  "display_value": "19.9%",
                  "display_range": null,
                  "display_text": "19.9%",
                  "is_point_estimate": true,
                  "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                  "kind": "share_pct"
                },
                "company_share": {
                  "median": 0.4927778109752787,
                  "low": null,
                  "high": null,
                  "range_collapsed": true,
                  "display_value": "49.3%",
                  "display_range": null,
                  "display_text": "49.3%",
                  "is_point_estimate": true,
                  "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                  "kind": "share_pct"
                }
              },
              "summary": "Jun: Mostly company-driven."
            },
            {
              "month_key": "2026-07",
              "month_label": "July 2026",
              "month_short_label": "Jul",
              "period_label": "2026-07-02 to 2026-07-10",
              "n_obs": 7,
              "partial_month": true,
              "dominant_driver": "sector",
              "dominant_driver_label": "Sector",
              "regime_id": null,
              "regime_label": null,
              "dominant_share": {
                "median": 0.6104560751697736,
                "low": null,
                "high": null,
                "range_collapsed": true,
                "display_value": "61.0%",
                "display_range": null,
                "display_text": "61.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 7 trading days.",
                "kind": "share_pct"
              },
              "shares": {
                "market_share": {
                  "median": 0.12673028443958861,
                  "low": null,
                  "high": null,
                  "range_collapsed": true,
                  "display_value": "12.7%",
                  "display_range": null,
                  "display_text": "12.7%",
                  "is_point_estimate": true,
                  "point_estimate_note": "Point estimate only because the current state has 7 trading days.",
                  "kind": "share_pct"
                },
                "sector_share": {
                  "median": 0.6104560751697736,
                  "low": null,
                  "high": null,
                  "range_collapsed": true,
                  "display_value": "61.0%",
                  "display_range": null,
                  "display_text": "61.0%",
                  "is_point_estimate": true,
                  "point_estimate_note": "Point estimate only because the current state has 7 trading days.",
                  "kind": "share_pct"
                },
                "company_share": {
                  "median": 0.26281364039063787,
                  "low": null,
                  "high": null,
                  "range_collapsed": true,
                  "display_value": "26.3%",
                  "display_range": null,
                  "display_text": "26.3%",
                  "is_point_estimate": true,
                  "point_estimate_note": "Point estimate only because the current state has 7 trading days.",
                  "kind": "share_pct"
                }
              },
              "summary": "Jul: Still clearly sector-driven, though based on only 7 trading days."
            }
          ],
          "summary": "Sector is the largest recent movement component.",
          "limitation": "Company-specific means residual movement after market and sector factors; it is not a news or causality label.",
          "source": "q02_peer_driver_regime_model"
        },
        "market_state": {
          "valid": true,
          "active_state_label": "Normal / Active",
          "active_state_probability": 0.9938558534036424,
          "active_state_probability_display": "99.4%",
          "state_profiles": [
            {
              "id": 0,
              "label": "Calm / Liquid",
              "pct_time": 0.3796383901162008,
              "expected_duration_days": 17.49318052667739,
              "current_probability": 0.006144146591419986,
              "current_probability_display": "0.6%",
              "current_probability_basis": "filtered",
              "n_days_effective": 95.2892359191664,
              "volatility": {
                "median": 0.013727405667382751,
                "low": 0.013727405667382751,
                "high": 0.013727405667382751
              },
              "volatility_label": "Calm / Liquid",
              "jump_probability": 0.22227626650820614,
              "jump_rate": 0.031330520554287866,
              "risk_score": 0.17725339994558417,
              "metrics": {
                "rolling_vol_10d": 0.014283735129021747,
                "downside_vol_10d": 0.007599915637463835,
                "drawdown_21d": 0.03480476703005803,
                "amihud_stress": 0.0005382230293827324,
                "spread_rel": 7.313109298264579,
                "spread_ticks": 1.1489810907044387,
                "log_notional": 21.384832896085754,
                "log_trade_count": 9.558932020102915
              }
            },
            {
              "id": 1,
              "label": "Normal / Active",
              "pct_time": 0.3010602574858439,
              "expected_duration_days": 10.237455833809943,
              "current_probability": 0.9938558534036424,
              "current_probability_display": "99.4%",
              "current_probability_basis": "filtered",
              "n_days_effective": 75.56612462894682,
              "volatility": {
                "median": 0.015378301823461083,
                "low": 0.015378301823461083,
                "high": 0.015378301823461083
              },
              "volatility_label": "Normal / Active",
              "jump_probability": 0.16441980252759894,
              "jump_rate": 1.0127304119500251e-07,
              "risk_score": 0.38851319926076916,
              "metrics": {
                "rolling_vol_10d": 0.020028880579042185,
                "downside_vol_10d": 0.010218631269045,
                "drawdown_21d": 0.05237591907709185,
                "amihud_stress": 0.000659310090655478,
                "spread_rel": 7.4048861631946545,
                "spread_ticks": 1.0997206988328718,
                "log_notional": 21.370648774024293,
                "log_trade_count": 9.533689379645784
              }
            },
            {
              "id": 2,
              "label": "Stressed / Illiquid",
              "pct_time": 0.20188895443013408,
              "expected_duration_days": 5.604485550078272,
              "current_probability": 4.892153098682273e-16,
              "current_probability_display": "<0.1%",
              "current_probability_basis": "filtered",
              "n_days_effective": 50.67412756196365,
              "volatility": {
                "median": 0.016461464997843272,
                "low": 0.016461464997843272,
                "high": 0.016461464997843272
              },
              "volatility_label": "Stressed / Illiquid",
              "jump_probability": 0.16619915785494024,
              "jump_rate": 1.0092602004898328e-05,
              "risk_score": 0.5065593965308726,
              "metrics": {
                "rolling_vol_10d": 0.026251548632271086,
                "downside_vol_10d": 0.015222944200991876,
                "drawdown_21d": 0.0405281764189818,
                "amihud_stress": 0.0006289135316726442,
                "spread_rel": 6.716844977200544,
                "spread_ticks": 1.129860983082291,
                "log_notional": 21.44771238056215,
                "log_trade_count": 9.582086055383426
              }
            },
            {
              "id": 3,
              "label": "Jump / Tail Shock",
              "pct_time": 0.1174123979678212,
              "expected_duration_days": 1.8118147265309694,
              "current_probability": 4.937166032157072e-12,
              "current_probability_display": "<0.1%",
              "current_probability_basis": "filtered",
              "n_days_effective": 29.47051188992312,
              "volatility": {
                "median": 0.04391816938300522,
                "low": 0.04391816938300522,
                "high": 0.04391816938300522
              },
              "volatility_label": "Jump / Tail Shock",
              "jump_probability": 0.53839334805153,
              "jump_rate": 0.47552684531453004,
              "risk_score": 0.9029645731126612,
              "metrics": {
                "rolling_vol_10d": 0.02673522652151648,
                "downside_vol_10d": 0.0170107677563739,
                "drawdown_21d": 0.07591778698617943,
                "amihud_stress": 0.0012558736455866052,
                "spread_rel": 7.236160979621095,
                "spread_ticks": 1.134808265918595,
                "log_notional": 22.102048355756942,
                "log_trade_count": 10.053756716993263
              }
            }
          ],
          "transitions": [
            [
              0.9428348665084098,
              0.00011094697458347064,
              0.00010490659587589816,
              0.05694927992113097
            ],
            [
              0.03244654555281022,
              0.902319480910733,
              0.0001441259749875799,
              0.0650898475614693
            ],
            [
              0.03951961452499131,
              0.019914510471971764,
              0.8215714910736037,
              0.11899438392943315
            ],
            [
              0.03473654147809237,
              0.2117142116810678,
              0.305482060586466,
              0.44806718625437386
            ]
          ],
          "state_probabilities": [
            {
              "id": 0,
              "label": "Calm / Liquid",
              "probability": 0.006144146591419986,
              "probability_display": "0.6%",
              "basis": "filtered"
            },
            {
              "id": 1,
              "label": "Normal / Active",
              "probability": 0.9938558534036424,
              "probability_display": "99.4%",
              "basis": "filtered"
            },
            {
              "id": 2,
              "label": "Stressed / Illiquid",
              "probability": 4.892153098682273e-16,
              "probability_display": "<0.1%",
              "basis": "filtered"
            },
            {
              "id": 3,
              "label": "Jump / Tail Shock",
              "probability": 4.937166032157072e-12,
              "probability_display": "<0.1%",
              "basis": "filtered"
            }
          ],
          "summary": "Active state is Normal / Active with 99.4% model probability.",
          "limitation": "Peer state labels are stock-specific inferred states, not universal stress levels.",
          "source": "q02_peer_hmm_jump_regime_model"
        }
      },
      {
        "identity": {
          "listing_id": 534130284,
          "ticker": "945",
          "company_name": "MANULIFE-S",
          "sector": "Insurance",
          "industry": "Financials - Insurance",
          "market_mic": "XHKG"
        },
        "valid": true,
        "reason": null,
        "drivers": {
          "valid": true,
          "driver_mix": {
            "market_share": {
              "median": 0.3617431838562391,
              "low": null,
              "high": null,
              "range_collapsed": true,
              "display_value": "36.2%",
              "display_range": null,
              "display_text": "36.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
              "kind": "share_pct"
            },
            "sector_share": {
              "median": 0.5131175261277333,
              "low": null,
              "high": null,
              "range_collapsed": true,
              "display_value": "51.3%",
              "display_range": null,
              "display_text": "51.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
              "kind": "share_pct"
            },
            "company_share": {
              "median": 0.1251392900160277,
              "low": null,
              "high": null,
              "range_collapsed": true,
              "display_value": "12.5%",
              "display_range": null,
              "display_text": "12.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
              "kind": "share_pct"
            }
          },
          "dominant_driver": "sector",
          "dominant_driver_label": "Sector",
          "dominant_share": 0.5131175261277333,
          "monthly_history": [
            {
              "month_key": "2025-06",
              "month_label": "June 2025",
              "month_short_label": "Jun",
              "period_label": "2025-06-24 to 2025-06-30",
              "n_obs": 5,
              "partial_month": true,
              "dominant_driver": "market",
              "dominant_driver_label": "Market",
              "regime_id": null,
              "regime_label": null,
              "dominant_share": {
                "median": 0.554811964896802,
                "low": null,
                "high": null,
                "range_collapsed": true,
                "display_value": "55.5%",
                "display_range": null,
                "display_text": "55.5%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
                "kind": "share_pct"
              },
              "shares": {
                "market_share": {
                  "median": 0.554811964896802,
                  "low": null,
                  "high": null,
                  "range_collapsed": true,
                  "display_value": "55.5%",
                  "display_range": null,
                  "display_text": "55.5%",
                  "is_point_estimate": true,
                  "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
                  "kind": "share_pct"
                },
                "sector_share": {
                  "median": 0.40131667219546285,
                  "low": null,
                  "high": null,
                  "range_collapsed": true,
                  "display_value": "40.1%",
                  "display_range": null,
                  "display_text": "40.1%",
                  "is_point_estimate": true,
                  "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
                  "kind": "share_pct"
                },
                "company_share": {
                  "median": 0.043871362907735294,
                  "low": null,
                  "high": null,
                  "range_collapsed": true,
                  "display_value": "4.4%",
                  "display_range": null,
                  "display_text": "4.4%",
                  "is_point_estimate": true,
                  "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
                  "kind": "share_pct"
                }
              },
              "summary": "Jun: Mostly market-driven, though based on only 5 trading days."
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
                "median": 0.47195363867427936,
                "low": null,
                "high": null,
                "range_collapsed": true,
                "display_value": "47.2%",
                "display_range": null,
                "display_text": "47.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct"
              },
              "shares": {
                "market_share": {
                  "median": 0.2497344459483072,
                  "low": null,
                  "high": null,
                  "range_collapsed": true,
                  "display_value": "25.0%",
                  "display_range": null,
                  "display_text": "25.0%",
                  "is_point_estimate": true,
                  "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                  "kind": "share_pct"
                },
                "sector_share": {
                  "median": 0.2783119153774135,
                  "low": null,
                  "high": null,
                  "range_collapsed": true,
                  "display_value": "27.8%",
                  "display_range": null,
                  "display_text": "27.8%",
                  "is_point_estimate": true,
                  "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                  "kind": "share_pct"
                },
                "company_share": {
                  "median": 0.47195363867427936,
                  "low": null,
                  "high": null,
                  "range_collapsed": true,
                  "display_value": "47.2%",
                  "display_range": null,
                  "display_text": "47.2%",
                  "is_point_estimate": true,
                  "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                  "kind": "share_pct"
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
              "dominant_driver": "company",
              "dominant_driver_label": "Company-specific",
              "regime_id": null,
              "regime_label": null,
              "dominant_share": {
                "median": 0.6047588146374564,
                "low": null,
                "high": null,
                "range_collapsed": true,
                "display_value": "60.5%",
                "display_range": null,
                "display_text": "60.5%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct"
              },
              "shares": {
                "market_share": {
                  "median": 0.20666554343691493,
                  "low": null,
                  "high": null,
                  "range_collapsed": true,
                  "display_value": "20.7%",
                  "display_range": null,
                  "display_text": "20.7%",
                  "is_point_estimate": true,
                  "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                  "kind": "share_pct"
                },
                "sector_share": {
                  "median": 0.18857564192562876,
                  "low": null,
                  "high": null,
                  "range_collapsed": true,
                  "display_value": "18.9%",
                  "display_range": null,
                  "display_text": "18.9%",
                  "is_point_estimate": true,
                  "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                  "kind": "share_pct"
                },
                "company_share": {
                  "median": 0.6047588146374564,
                  "low": null,
                  "high": null,
                  "range_collapsed": true,
                  "display_value": "60.5%",
                  "display_range": null,
                  "display_text": "60.5%",
                  "is_point_estimate": true,
                  "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                  "kind": "share_pct"
                }
              },
              "summary": "Aug: Still clearly company-driven."
            },
            {
              "month_key": "2025-09",
              "month_label": "September 2025",
              "month_short_label": "Sep",
              "period_label": "2025-09-01 to 2025-09-30",
              "n_obs": 22,
              "partial_month": false,
              "dominant_driver": "market",
              "dominant_driver_label": "Market",
              "regime_id": null,
              "regime_label": null,
              "dominant_share": {
                "median": 0.3560000723657981,
                "low": null,
                "high": null,
                "range_collapsed": true,
                "display_value": "35.6%",
                "display_range": null,
                "display_text": "35.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct"
              },
              "shares": {
                "market_share": {
                  "median": 0.3560000723657981,
                  "low": null,
                  "high": null,
                  "range_collapsed": true,
                  "display_value": "35.6%",
                  "display_range": null,
                  "display_text": "35.6%",
                  "is_point_estimate": true,
                  "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                  "kind": "share_pct"
                },
                "sector_share": {
                  "median": 0.3516695351515491,
                  "low": null,
                  "high": null,
                  "range_collapsed": true,
                  "display_value": "35.2%",
                  "display_range": null,
                  "display_text": "35.2%",
                  "is_point_estimate": true,
                  "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                  "kind": "share_pct"
                },
                "company_share": {
                  "median": 0.29233039248265286,
                  "low": null,
                  "high": null,
                  "range_collapsed": true,
                  "display_value": "29.2%",
                  "display_range": null,
                  "display_text": "29.2%",
                  "is_point_estimate": true,
                  "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                  "kind": "share_pct"
                }
              },
              "summary": "Sep: Much more balanced across company, sector, and market factors."
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
                "median": 0.4845494461397742,
                "low": null,
                "high": null,
                "range_collapsed": true,
                "display_value": "48.5%",
                "display_range": null,
                "display_text": "48.5%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct"
              },
              "shares": {
                "market_share": {
                  "median": 0.24800478258495215,
                  "low": null,
                  "high": null,
                  "range_collapsed": true,
                  "display_value": "24.8%",
                  "display_range": null,
                  "display_text": "24.8%",
                  "is_point_estimate": true,
                  "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                  "kind": "share_pct"
                },
                "sector_share": {
                  "median": 0.2674457712752735,
                  "low": null,
                  "high": null,
                  "range_collapsed": true,
                  "display_value": "26.7%",
                  "display_range": null,
                  "display_text": "26.7%",
                  "is_point_estimate": true,
                  "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                  "kind": "share_pct"
                },
                "company_share": {
                  "median": 0.4845494461397742,
                  "low": null,
                  "high": null,
                  "range_collapsed": true,
                  "display_value": "48.5%",
                  "display_range": null,
                  "display_text": "48.5%",
                  "is_point_estimate": true,
                  "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                  "kind": "share_pct"
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
                "median": 0.5280045455208058,
                "low": null,
                "high": null,
                "range_collapsed": true,
                "display_value": "52.8%",
                "display_range": null,
                "display_text": "52.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct"
              },
              "shares": {
                "market_share": {
                  "median": 0.36822968607570816,
                  "low": null,
                  "high": null,
                  "range_collapsed": true,
                  "display_value": "36.8%",
                  "display_range": null,
                  "display_text": "36.8%",
                  "is_point_estimate": true,
                  "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                  "kind": "share_pct"
                },
                "sector_share": {
                  "median": 0.10376576840348599,
                  "low": null,
                  "high": null,
                  "range_collapsed": true,
                  "display_value": "10.4%",
                  "display_range": null,
                  "display_text": "10.4%",
                  "is_point_estimate": true,
                  "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                  "kind": "share_pct"
                },
                "company_share": {
                  "median": 0.5280045455208058,
                  "low": null,
                  "high": null,
                  "range_collapsed": true,
                  "display_value": "52.8%",
                  "display_range": null,
                  "display_text": "52.8%",
                  "is_point_estimate": true,
                  "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                  "kind": "share_pct"
                }
              },
              "summary": "Nov: Mostly company-driven."
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
                "median": 0.5706409683875806,
                "low": null,
                "high": null,
                "range_collapsed": true,
                "display_value": "57.1%",
                "display_range": null,
                "display_text": "57.1%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
                "kind": "share_pct"
              },
              "shares": {
                "market_share": {
                  "median": 0.17261787585462796,
                  "low": null,
                  "high": null,
                  "range_collapsed": true,
                  "display_value": "17.3%",
                  "display_range": null,
                  "display_text": "17.3%",
                  "is_point_estimate": true,
                  "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
                  "kind": "share_pct"
                },
                "sector_share": {
                  "median": 0.25674115575779155,
                  "low": null,
                  "high": null,
                  "range_collapsed": true,
                  "display_value": "25.7%",
                  "display_range": null,
                  "display_text": "25.7%",
                  "is_point_estimate": true,
                  "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
                  "kind": "share_pct"
                },
                "company_share": {
                  "median": 0.5706409683875806,
                  "low": null,
                  "high": null,
                  "range_collapsed": true,
                  "display_value": "57.1%",
                  "display_range": null,
                  "display_text": "57.1%",
                  "is_point_estimate": true,
                  "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
                  "kind": "share_pct"
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
                "median": 0.752488392851122,
                "low": null,
                "high": null,
                "range_collapsed": true,
                "display_value": "75.2%",
                "display_range": null,
                "display_text": "75.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct"
              },
              "shares": {
                "market_share": {
                  "median": 0.096316012408324,
                  "low": null,
                  "high": null,
                  "range_collapsed": true,
                  "display_value": "9.6%",
                  "display_range": null,
                  "display_text": "9.6%",
                  "is_point_estimate": true,
                  "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                  "kind": "share_pct"
                },
                "sector_share": {
                  "median": 0.1511955947405541,
                  "low": null,
                  "high": null,
                  "range_collapsed": true,
                  "display_value": "15.1%",
                  "display_range": null,
                  "display_text": "15.1%",
                  "is_point_estimate": true,
                  "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                  "kind": "share_pct"
                },
                "company_share": {
                  "median": 0.752488392851122,
                  "low": null,
                  "high": null,
                  "range_collapsed": true,
                  "display_value": "75.2%",
                  "display_range": null,
                  "display_text": "75.2%",
                  "is_point_estimate": true,
                  "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                  "kind": "share_pct"
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
                "median": 0.5449589054027256,
                "low": null,
                "high": null,
                "range_collapsed": true,
                "display_value": "54.5%",
                "display_range": null,
                "display_text": "54.5%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
                "kind": "share_pct"
              },
              "shares": {
                "market_share": {
                  "median": 0.2563658087368943,
                  "low": null,
                  "high": null,
                  "range_collapsed": true,
                  "display_value": "25.6%",
                  "display_range": null,
                  "display_text": "25.6%",
                  "is_point_estimate": true,
                  "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
                  "kind": "share_pct"
                },
                "sector_share": {
                  "median": 0.19867528586038002,
                  "low": null,
                  "high": null,
                  "range_collapsed": true,
                  "display_value": "19.9%",
                  "display_range": null,
                  "display_text": "19.9%",
                  "is_point_estimate": true,
                  "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
                  "kind": "share_pct"
                },
                "company_share": {
                  "median": 0.5449589054027256,
                  "low": null,
                  "high": null,
                  "range_collapsed": true,
                  "display_value": "54.5%",
                  "display_range": null,
                  "display_text": "54.5%",
                  "is_point_estimate": true,
                  "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
                  "kind": "share_pct"
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
              "dominant_driver": "sector",
              "dominant_driver_label": "Sector",
              "regime_id": null,
              "regime_label": null,
              "dominant_share": {
                "median": 0.49656652129884976,
                "low": null,
                "high": null,
                "range_collapsed": true,
                "display_value": "49.7%",
                "display_range": null,
                "display_text": "49.7%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct"
              },
              "shares": {
                "market_share": {
                  "median": 0.24810928006948813,
                  "low": null,
                  "high": null,
                  "range_collapsed": true,
                  "display_value": "24.8%",
                  "display_range": null,
                  "display_text": "24.8%",
                  "is_point_estimate": true,
                  "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                  "kind": "share_pct"
                },
                "sector_share": {
                  "median": 0.49656652129884976,
                  "low": null,
                  "high": null,
                  "range_collapsed": true,
                  "display_value": "49.7%",
                  "display_range": null,
                  "display_text": "49.7%",
                  "is_point_estimate": true,
                  "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                  "kind": "share_pct"
                },
                "company_share": {
                  "median": 0.25532419863166217,
                  "low": null,
                  "high": null,
                  "range_collapsed": true,
                  "display_value": "25.5%",
                  "display_range": null,
                  "display_text": "25.5%",
                  "is_point_estimate": true,
                  "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                  "kind": "share_pct"
                }
              },
              "summary": "Mar: Mostly sector-driven."
            },
            {
              "month_key": "2026-04",
              "month_label": "April 2026",
              "month_short_label": "Apr",
              "period_label": "2026-04-01 to 2026-04-30",
              "n_obs": 19,
              "partial_month": false,
              "dominant_driver": "market",
              "dominant_driver_label": "Market",
              "regime_id": null,
              "regime_label": null,
              "dominant_share": {
                "median": 0.49320664646892604,
                "low": null,
                "high": null,
                "range_collapsed": true,
                "display_value": "49.3%",
                "display_range": null,
                "display_text": "49.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
                "kind": "share_pct"
              },
              "shares": {
                "market_share": {
                  "median": 0.49320664646892604,
                  "low": null,
                  "high": null,
                  "range_collapsed": true,
                  "display_value": "49.3%",
                  "display_range": null,
                  "display_text": "49.3%",
                  "is_point_estimate": true,
                  "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
                  "kind": "share_pct"
                },
                "sector_share": {
                  "median": 0.21453279230915032,
                  "low": null,
                  "high": null,
                  "range_collapsed": true,
                  "display_value": "21.5%",
                  "display_range": null,
                  "display_text": "21.5%",
                  "is_point_estimate": true,
                  "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
                  "kind": "share_pct"
                },
                "company_share": {
                  "median": 0.2922605612219236,
                  "low": null,
                  "high": null,
                  "range_collapsed": true,
                  "display_value": "29.2%",
                  "display_range": null,
                  "display_text": "29.2%",
                  "is_point_estimate": true,
                  "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
                  "kind": "share_pct"
                }
              },
              "summary": "Apr: Mostly market-driven."
            },
            {
              "month_key": "2026-05",
              "month_label": "May 2026",
              "month_short_label": "May",
              "period_label": "2026-05-04 to 2026-05-29",
              "n_obs": 19,
              "partial_month": true,
              "dominant_driver": "company",
              "dominant_driver_label": "Company-specific",
              "regime_id": null,
              "regime_label": null,
              "dominant_share": {
                "median": 0.43602250432463363,
                "low": null,
                "high": null,
                "range_collapsed": true,
                "display_value": "43.6%",
                "display_range": null,
                "display_text": "43.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
                "kind": "share_pct"
              },
              "shares": {
                "market_share": {
                  "median": 0.3905263375851035,
                  "low": null,
                  "high": null,
                  "range_collapsed": true,
                  "display_value": "39.1%",
                  "display_range": null,
                  "display_text": "39.1%",
                  "is_point_estimate": true,
                  "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
                  "kind": "share_pct"
                },
                "sector_share": {
                  "median": 0.1734511580902629,
                  "low": null,
                  "high": null,
                  "range_collapsed": true,
                  "display_value": "17.3%",
                  "display_range": null,
                  "display_text": "17.3%",
                  "is_point_estimate": true,
                  "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
                  "kind": "share_pct"
                },
                "company_share": {
                  "median": 0.43602250432463363,
                  "low": null,
                  "high": null,
                  "range_collapsed": true,
                  "display_value": "43.6%",
                  "display_range": null,
                  "display_text": "43.6%",
                  "is_point_estimate": true,
                  "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
                  "kind": "share_pct"
                }
              },
              "summary": "May: More mixed, though company-driven still has the largest share."
            },
            {
              "month_key": "2026-06",
              "month_label": "June 2026",
              "month_short_label": "Jun",
              "period_label": "2026-06-01 to 2026-06-30",
              "n_obs": 21,
              "partial_month": false,
              "dominant_driver": "company",
              "dominant_driver_label": "Company-specific",
              "regime_id": null,
              "regime_label": null,
              "dominant_share": {
                "median": 0.501114968749919,
                "low": null,
                "high": null,
                "range_collapsed": true,
                "display_value": "50.1%",
                "display_range": null,
                "display_text": "50.1%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct"
              },
              "shares": {
                "market_share": {
                  "median": 0.07591701585367193,
                  "low": null,
                  "high": null,
                  "range_collapsed": true,
                  "display_value": "7.6%",
                  "display_range": null,
                  "display_text": "7.6%",
                  "is_point_estimate": true,
                  "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                  "kind": "share_pct"
                },
                "sector_share": {
                  "median": 0.4229680153964091,
                  "low": null,
                  "high": null,
                  "range_collapsed": true,
                  "display_value": "42.3%",
                  "display_range": null,
                  "display_text": "42.3%",
                  "is_point_estimate": true,
                  "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                  "kind": "share_pct"
                },
                "company_share": {
                  "median": 0.501114968749919,
                  "low": null,
                  "high": null,
                  "range_collapsed": true,
                  "display_value": "50.1%",
                  "display_range": null,
                  "display_text": "50.1%",
                  "is_point_estimate": true,
                  "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                  "kind": "share_pct"
                }
              },
              "summary": "Jun: Mostly company-driven."
            },
            {
              "month_key": "2026-07",
              "month_label": "July 2026",
              "month_short_label": "Jul",
              "period_label": "2026-07-02 to 2026-07-10",
              "n_obs": 7,
              "partial_month": true,
              "dominant_driver": "sector",
              "dominant_driver_label": "Sector",
              "regime_id": null,
              "regime_label": null,
              "dominant_share": {
                "median": 0.3923158830385116,
                "low": null,
                "high": null,
                "range_collapsed": true,
                "display_value": "39.2%",
                "display_range": null,
                "display_text": "39.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 7 trading days.",
                "kind": "share_pct"
              },
              "shares": {
                "market_share": {
                  "median": 0.3438769361664728,
                  "low": null,
                  "high": null,
                  "range_collapsed": true,
                  "display_value": "34.4%",
                  "display_range": null,
                  "display_text": "34.4%",
                  "is_point_estimate": true,
                  "point_estimate_note": "Point estimate only because the current state has 7 trading days.",
                  "kind": "share_pct"
                },
                "sector_share": {
                  "median": 0.3923158830385116,
                  "low": null,
                  "high": null,
                  "range_collapsed": true,
                  "display_value": "39.2%",
                  "display_range": null,
                  "display_text": "39.2%",
                  "is_point_estimate": true,
                  "point_estimate_note": "Point estimate only because the current state has 7 trading days.",
                  "kind": "share_pct"
                },
                "company_share": {
                  "median": 0.2638071807950156,
                  "low": null,
                  "high": null,
                  "range_collapsed": true,
                  "display_value": "26.4%",
                  "display_range": null,
                  "display_text": "26.4%",
                  "is_point_estimate": true,
                  "point_estimate_note": "Point estimate only because the current state has 7 trading days.",
                  "kind": "share_pct"
                }
              },
              "summary": "Jul: More mixed, though sector-driven still has the largest share, though based on only 7 trading days."
            }
          ],
          "summary": "Sector is the largest recent movement component.",
          "limitation": "Company-specific means residual movement after market and sector factors; it is not a news or causality label.",
          "source": "q02_peer_driver_regime_model"
        },
        "market_state": {
          "valid": true,
          "active_state_label": "Stressed / Illiquid",
          "active_state_probability": 0.9998849692801262,
          "active_state_probability_display": ">99.9%",
          "state_profiles": [
            {
              "id": 0,
              "label": "Calm / Liquid",
              "pct_time": 0.2005194376282085,
              "expected_duration_days": 2.1489926432219244,
              "current_probability": 9.916461816356026e-22,
              "current_probability_display": "<0.1%",
              "current_probability_basis": "filtered",
              "n_days_effective": 50.33037884468033,
              "volatility": {
                "median": 0.0035596942388744133,
                "low": 0.0035596942388744133,
                "high": 0.0035596942388744133
              },
              "volatility_label": "Calm / Liquid",
              "jump_probability": 0.16175251214899491,
              "jump_rate": 1.2848522790819021e-07,
              "risk_score": 0.016190826380220704,
              "metrics": {
                "rolling_vol_10d": 0.007553686778072963,
                "downside_vol_10d": 0.0038227114516155157,
                "drawdown_21d": 0.02010184784311003,
                "amihud_stress": 0.2403615481594126,
                "spread_rel": 43.98627825358832,
                "spread_ticks": 5.51112405885651,
                "log_notional": 14.145706856217972,
                "log_trade_count": 3.4552460741875723
              }
            },
            {
              "id": 1,
              "label": "Normal / Active",
              "pct_time": 0.2906087307658243,
              "expected_duration_days": 8.373582740553708,
              "current_probability": 0.0001150306939554362,
              "current_probability_display": "<0.1%",
              "current_probability_basis": "filtered",
              "n_days_effective": 72.94279142222189,
              "volatility": {
                "median": 0.01038236824380998,
                "low": 0.01038236824380998,
                "high": 0.01038236824380998
              },
              "volatility_label": "Normal / Active",
              "jump_probability": 0.18294768504498155,
              "jump_rate": 0.01599594839799745,
              "risk_score": 0.3014062317321814,
              "metrics": {
                "rolling_vol_10d": 0.011334663326977044,
                "downside_vol_10d": 0.005907531632976997,
                "drawdown_21d": 0.016385965694644622,
                "amihud_stress": 0.3518802329056307,
                "spread_rel": 57.667302580911475,
                "spread_ticks": 7.929864775674443,
                "log_notional": 14.620905806441023,
                "log_trade_count": 3.788369797861143
              }
            },
            {
              "id": 2,
              "label": "Stressed / Illiquid",
              "pct_time": 0.2896561368414188,
              "expected_duration_days": 2.8866461622024104,
              "current_probability": 0.9998849692801262,
              "current_probability_display": ">99.9%",
              "current_probability_basis": "filtered",
              "n_days_effective": 72.70369034719612,
              "volatility": {
                "median": 0.010959890492693854,
                "low": 0.010959890492693854,
                "high": 0.010959890492693854
              },
              "volatility_label": "Stressed / Illiquid",
              "jump_probability": 0.32620517359396095,
              "jump_rate": 0.13525003736079316,
              "risk_score": 0.3276065094071976,
              "metrics": {
                "rolling_vol_10d": 0.009343694498081177,
                "downside_vol_10d": 0.004444905640392624,
                "drawdown_21d": 0.012101720060342267,
                "amihud_stress": 0.22359349369535877,
                "spread_rel": 42.71495807326608,
                "spread_ticks": 6.019503013918931,
                "log_notional": 15.314080899540585,
                "log_trade_count": 4.374642428427683
              }
            },
            {
              "id": 3,
              "label": "Jump / Tail Shock",
              "pct_time": 0.2192156947645485,
              "expected_duration_days": 18.200849484763552,
              "current_probability": 2.591848047212422e-11,
              "current_probability_display": "<0.1%",
              "current_probability_basis": "filtered",
              "n_days_effective": 55.02313938590167,
              "volatility": {
                "median": 0.017763769312873223,
                "low": 0.017763769312873223,
                "high": 0.017763769312873223
              },
              "volatility_label": "Jump / Tail Shock",
              "jump_probability": 0.23488546671906602,
              "jump_rate": 0.07269718912100365,
              "risk_score": 0.8611763013250854,
              "metrics": {
                "rolling_vol_10d": 0.01778728505598965,
                "downside_vol_10d": 0.01141677446048258,
                "drawdown_21d": 0.051266964702552716,
                "amihud_stress": 0.31869841390596654,
                "spread_rel": 71.07673362935711,
                "spread_ticks": 10.06210956791614,
                "log_notional": 14.950505353315242,
                "log_trade_count": 4.08160021675665
              }
            }
          ],
          "transitions": [
            [
              0.5346656941083204,
              0.048115244756766776,
              0.4170206036155047,
              0.00019845751940806436
            ],
            [
              0.06688913184637595,
              0.8805768055342731,
              0.025031874053610362,
              0.027502188565740528
            ],
            [
              0.25872337778649124,
              0.07362987119929565,
              0.6535772159768155,
              0.014069535037397598
            ],
            [
              0.00018162154656916366,
              0.00018129103705413795,
              0.05457957792140116,
              0.9450575094949756
            ]
          ],
          "state_probabilities": [
            {
              "id": 0,
              "label": "Calm / Liquid",
              "probability": 9.916461816356026e-22,
              "probability_display": "<0.1%",
              "basis": "filtered"
            },
            {
              "id": 1,
              "label": "Normal / Active",
              "probability": 0.0001150306939554362,
              "probability_display": "<0.1%",
              "basis": "filtered"
            },
            {
              "id": 2,
              "label": "Stressed / Illiquid",
              "probability": 0.9998849692801262,
              "probability_display": ">99.9%",
              "basis": "filtered"
            },
            {
              "id": 3,
              "label": "Jump / Tail Shock",
              "probability": 2.591848047212422e-11,
              "probability_display": "<0.1%",
              "basis": "filtered"
            }
          ],
          "summary": "Active state is Stressed / Illiquid with >99.9% model probability.",
          "limitation": "Peer state labels are stock-specific inferred states, not universal stress levels.",
          "source": "q02_peer_hmm_jump_regime_model"
        }
      },
      {
        "identity": {
          "listing_id": 772037047,
          "ticker": "1828",
          "company_name": "FWD",
          "sector": "Insurance",
          "industry": "Financials - Insurance",
          "market_mic": "XHKG"
        },
        "valid": true,
        "reason": null,
        "drivers": {
          "valid": true,
          "driver_mix": {
            "market_share": {
              "median": 0.6051361503765699,
              "low": null,
              "high": null,
              "range_collapsed": true,
              "display_value": "60.5%",
              "display_range": null,
              "display_text": "60.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 241 trading days.",
              "kind": "share_pct"
            },
            "sector_share": {
              "median": 0.2373815433688878,
              "low": null,
              "high": null,
              "range_collapsed": true,
              "display_value": "23.7%",
              "display_range": null,
              "display_text": "23.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 241 trading days.",
              "kind": "share_pct"
            },
            "company_share": {
              "median": 0.15748230625454218,
              "low": null,
              "high": null,
              "range_collapsed": true,
              "display_value": "15.7%",
              "display_range": null,
              "display_text": "15.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 241 trading days.",
              "kind": "share_pct"
            }
          },
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "dominant_share": 0.6051361503765699,
          "monthly_history": [
            {
              "month_key": "2025-07",
              "month_label": "July 2025",
              "month_short_label": "Jul",
              "period_label": "2025-07-09 to 2025-07-31",
              "n_obs": 17,
              "partial_month": true,
              "dominant_driver": "company",
              "dominant_driver_label": "Company-specific",
              "regime_id": null,
              "regime_label": null,
              "dominant_share": {
                "median": 0.3703833050231238,
                "low": null,
                "high": null,
                "range_collapsed": true,
                "display_value": "37.0%",
                "display_range": null,
                "display_text": "37.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
                "kind": "share_pct"
              },
              "shares": {
                "market_share": {
                  "median": 0.3201903024738482,
                  "low": null,
                  "high": null,
                  "range_collapsed": true,
                  "display_value": "32.0%",
                  "display_range": null,
                  "display_text": "32.0%",
                  "is_point_estimate": true,
                  "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
                  "kind": "share_pct"
                },
                "sector_share": {
                  "median": 0.3094263925030281,
                  "low": null,
                  "high": null,
                  "range_collapsed": true,
                  "display_value": "30.9%",
                  "display_range": null,
                  "display_text": "30.9%",
                  "is_point_estimate": true,
                  "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
                  "kind": "share_pct"
                },
                "company_share": {
                  "median": 0.3703833050231238,
                  "low": null,
                  "high": null,
                  "range_collapsed": true,
                  "display_value": "37.0%",
                  "display_range": null,
                  "display_text": "37.0%",
                  "is_point_estimate": true,
                  "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
                  "kind": "share_pct"
                }
              },
              "summary": "Jul: Much more balanced across company, sector, and market factors."
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
                "median": 0.6132187830622525,
                "low": null,
                "high": null,
                "range_collapsed": true,
                "display_value": "61.3%",
                "display_range": null,
                "display_text": "61.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct"
              },
              "shares": {
                "market_share": {
                  "median": 0.28635372050509367,
                  "low": null,
                  "high": null,
                  "range_collapsed": true,
                  "display_value": "28.6%",
                  "display_range": null,
                  "display_text": "28.6%",
                  "is_point_estimate": true,
                  "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                  "kind": "share_pct"
                },
                "sector_share": {
                  "median": 0.10042749643265383,
                  "low": null,
                  "high": null,
                  "range_collapsed": true,
                  "display_value": "10.0%",
                  "display_range": null,
                  "display_text": "10.0%",
                  "is_point_estimate": true,
                  "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                  "kind": "share_pct"
                },
                "company_share": {
                  "median": 0.6132187830622525,
                  "low": null,
                  "high": null,
                  "range_collapsed": true,
                  "display_value": "61.3%",
                  "display_range": null,
                  "display_text": "61.3%",
                  "is_point_estimate": true,
                  "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                  "kind": "share_pct"
                }
              },
              "summary": "Aug: Still clearly company-driven."
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
                "median": 0.546687434823878,
                "low": null,
                "high": null,
                "range_collapsed": true,
                "display_value": "54.7%",
                "display_range": null,
                "display_text": "54.7%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct"
              },
              "shares": {
                "market_share": {
                  "median": 0.3891260958536974,
                  "low": null,
                  "high": null,
                  "range_collapsed": true,
                  "display_value": "38.9%",
                  "display_range": null,
                  "display_text": "38.9%",
                  "is_point_estimate": true,
                  "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                  "kind": "share_pct"
                },
                "sector_share": {
                  "median": 0.06418646932242461,
                  "low": null,
                  "high": null,
                  "range_collapsed": true,
                  "display_value": "6.4%",
                  "display_range": null,
                  "display_text": "6.4%",
                  "is_point_estimate": true,
                  "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                  "kind": "share_pct"
                },
                "company_share": {
                  "median": 0.546687434823878,
                  "low": null,
                  "high": null,
                  "range_collapsed": true,
                  "display_value": "54.7%",
                  "display_range": null,
                  "display_text": "54.7%",
                  "is_point_estimate": true,
                  "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                  "kind": "share_pct"
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
                "median": 0.4769677806984242,
                "low": null,
                "high": null,
                "range_collapsed": true,
                "display_value": "47.7%",
                "display_range": null,
                "display_text": "47.7%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct"
              },
              "shares": {
                "market_share": {
                  "median": 0.43560813590944775,
                  "low": null,
                  "high": null,
                  "range_collapsed": true,
                  "display_value": "43.6%",
                  "display_range": null,
                  "display_text": "43.6%",
                  "is_point_estimate": true,
                  "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                  "kind": "share_pct"
                },
                "sector_share": {
                  "median": 0.087424083392128,
                  "low": null,
                  "high": null,
                  "range_collapsed": true,
                  "display_value": "8.7%",
                  "display_range": null,
                  "display_text": "8.7%",
                  "is_point_estimate": true,
                  "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                  "kind": "share_pct"
                },
                "company_share": {
                  "median": 0.4769677806984242,
                  "low": null,
                  "high": null,
                  "range_collapsed": true,
                  "display_value": "47.7%",
                  "display_range": null,
                  "display_text": "47.7%",
                  "is_point_estimate": true,
                  "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                  "kind": "share_pct"
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
                "median": 0.4682936999747571,
                "low": null,
                "high": null,
                "range_collapsed": true,
                "display_value": "46.8%",
                "display_range": null,
                "display_text": "46.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct"
              },
              "shares": {
                "market_share": {
                  "median": 0.4682936999747571,
                  "low": null,
                  "high": null,
                  "range_collapsed": true,
                  "display_value": "46.8%",
                  "display_range": null,
                  "display_text": "46.8%",
                  "is_point_estimate": true,
                  "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                  "kind": "share_pct"
                },
                "sector_share": {
                  "median": 0.24384034722715073,
                  "low": null,
                  "high": null,
                  "range_collapsed": true,
                  "display_value": "24.4%",
                  "display_range": null,
                  "display_text": "24.4%",
                  "is_point_estimate": true,
                  "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                  "kind": "share_pct"
                },
                "company_share": {
                  "median": 0.2878659527980921,
                  "low": null,
                  "high": null,
                  "range_collapsed": true,
                  "display_value": "28.8%",
                  "display_range": null,
                  "display_text": "28.8%",
                  "is_point_estimate": true,
                  "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                  "kind": "share_pct"
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
              "dominant_driver": "company",
              "dominant_driver_label": "Company-specific",
              "regime_id": null,
              "regime_label": null,
              "dominant_share": {
                "median": 0.47791216820522336,
                "low": null,
                "high": null,
                "range_collapsed": true,
                "display_value": "47.8%",
                "display_range": null,
                "display_text": "47.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
                "kind": "share_pct"
              },
              "shares": {
                "market_share": {
                  "median": 0.19566646586858727,
                  "low": null,
                  "high": null,
                  "range_collapsed": true,
                  "display_value": "19.6%",
                  "display_range": null,
                  "display_text": "19.6%",
                  "is_point_estimate": true,
                  "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
                  "kind": "share_pct"
                },
                "sector_share": {
                  "median": 0.32642136592618937,
                  "low": null,
                  "high": null,
                  "range_collapsed": true,
                  "display_value": "32.6%",
                  "display_range": null,
                  "display_text": "32.6%",
                  "is_point_estimate": true,
                  "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
                  "kind": "share_pct"
                },
                "company_share": {
                  "median": 0.47791216820522336,
                  "low": null,
                  "high": null,
                  "range_collapsed": true,
                  "display_value": "47.8%",
                  "display_range": null,
                  "display_text": "47.8%",
                  "is_point_estimate": true,
                  "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
                  "kind": "share_pct"
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
                "median": 0.44659952353520127,
                "low": null,
                "high": null,
                "range_collapsed": true,
                "display_value": "44.7%",
                "display_range": null,
                "display_text": "44.7%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct"
              },
              "shares": {
                "market_share": {
                  "median": 0.2111513848082345,
                  "low": null,
                  "high": null,
                  "range_collapsed": true,
                  "display_value": "21.1%",
                  "display_range": null,
                  "display_text": "21.1%",
                  "is_point_estimate": true,
                  "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                  "kind": "share_pct"
                },
                "sector_share": {
                  "median": 0.34224909165656425,
                  "low": null,
                  "high": null,
                  "range_collapsed": true,
                  "display_value": "34.2%",
                  "display_range": null,
                  "display_text": "34.2%",
                  "is_point_estimate": true,
                  "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                  "kind": "share_pct"
                },
                "company_share": {
                  "median": 0.44659952353520127,
                  "low": null,
                  "high": null,
                  "range_collapsed": true,
                  "display_value": "44.7%",
                  "display_range": null,
                  "display_text": "44.7%",
                  "is_point_estimate": true,
                  "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                  "kind": "share_pct"
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
              "dominant_driver": "sector",
              "dominant_driver_label": "Sector",
              "regime_id": null,
              "regime_label": null,
              "dominant_share": {
                "median": 0.4464302278490803,
                "low": null,
                "high": null,
                "range_collapsed": true,
                "display_value": "44.6%",
                "display_range": null,
                "display_text": "44.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
                "kind": "share_pct"
              },
              "shares": {
                "market_share": {
                  "median": 0.2653276946686405,
                  "low": null,
                  "high": null,
                  "range_collapsed": true,
                  "display_value": "26.5%",
                  "display_range": null,
                  "display_text": "26.5%",
                  "is_point_estimate": true,
                  "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
                  "kind": "share_pct"
                },
                "sector_share": {
                  "median": 0.4464302278490803,
                  "low": null,
                  "high": null,
                  "range_collapsed": true,
                  "display_value": "44.6%",
                  "display_range": null,
                  "display_text": "44.6%",
                  "is_point_estimate": true,
                  "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
                  "kind": "share_pct"
                },
                "company_share": {
                  "median": 0.28824207748227904,
                  "low": null,
                  "high": null,
                  "range_collapsed": true,
                  "display_value": "28.8%",
                  "display_range": null,
                  "display_text": "28.8%",
                  "is_point_estimate": true,
                  "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
                  "kind": "share_pct"
                }
              },
              "summary": "Feb: More mixed, though sector-driven still has the largest share."
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
                "median": 0.4495531618605469,
                "low": null,
                "high": null,
                "range_collapsed": true,
                "display_value": "45.0%",
                "display_range": null,
                "display_text": "45.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct"
              },
              "shares": {
                "market_share": {
                  "median": 0.34246191855190333,
                  "low": null,
                  "high": null,
                  "range_collapsed": true,
                  "display_value": "34.2%",
                  "display_range": null,
                  "display_text": "34.2%",
                  "is_point_estimate": true,
                  "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                  "kind": "share_pct"
                },
                "sector_share": {
                  "median": 0.4495531618605469,
                  "low": null,
                  "high": null,
                  "range_collapsed": true,
                  "display_value": "45.0%",
                  "display_range": null,
                  "display_text": "45.0%",
                  "is_point_estimate": true,
                  "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                  "kind": "share_pct"
                },
                "company_share": {
                  "median": 0.20798491958754975,
                  "low": null,
                  "high": null,
                  "range_collapsed": true,
                  "display_value": "20.8%",
                  "display_range": null,
                  "display_text": "20.8%",
                  "is_point_estimate": true,
                  "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                  "kind": "share_pct"
                }
              },
              "summary": "Mar: More mixed, though sector-driven still has the largest share."
            },
            {
              "month_key": "2026-04",
              "month_label": "April 2026",
              "month_short_label": "Apr",
              "period_label": "2026-04-01 to 2026-04-30",
              "n_obs": 19,
              "partial_month": false,
              "dominant_driver": "market",
              "dominant_driver_label": "Market",
              "regime_id": null,
              "regime_label": null,
              "dominant_share": {
                "median": 0.5330485087225794,
                "low": null,
                "high": null,
                "range_collapsed": true,
                "display_value": "53.3%",
                "display_range": null,
                "display_text": "53.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
                "kind": "share_pct"
              },
              "shares": {
                "market_share": {
                  "median": 0.5330485087225794,
                  "low": null,
                  "high": null,
                  "range_collapsed": true,
                  "display_value": "53.3%",
                  "display_range": null,
                  "display_text": "53.3%",
                  "is_point_estimate": true,
                  "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
                  "kind": "share_pct"
                },
                "sector_share": {
                  "median": 0.20012747129731,
                  "low": null,
                  "high": null,
                  "range_collapsed": true,
                  "display_value": "20.0%",
                  "display_range": null,
                  "display_text": "20.0%",
                  "is_point_estimate": true,
                  "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
                  "kind": "share_pct"
                },
                "company_share": {
                  "median": 0.26682401998011074,
                  "low": null,
                  "high": null,
                  "range_collapsed": true,
                  "display_value": "26.7%",
                  "display_range": null,
                  "display_text": "26.7%",
                  "is_point_estimate": true,
                  "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
                  "kind": "share_pct"
                }
              },
              "summary": "Apr: Mostly market-driven."
            },
            {
              "month_key": "2026-05",
              "month_label": "May 2026",
              "month_short_label": "May",
              "period_label": "2026-05-04 to 2026-05-29",
              "n_obs": 19,
              "partial_month": true,
              "dominant_driver": "company",
              "dominant_driver_label": "Company-specific",
              "regime_id": null,
              "regime_label": null,
              "dominant_share": {
                "median": 0.5491045423537749,
                "low": null,
                "high": null,
                "range_collapsed": true,
                "display_value": "54.9%",
                "display_range": null,
                "display_text": "54.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
                "kind": "share_pct"
              },
              "shares": {
                "market_share": {
                  "median": 0.05643466360926407,
                  "low": null,
                  "high": null,
                  "range_collapsed": true,
                  "display_value": "5.6%",
                  "display_range": null,
                  "display_text": "5.6%",
                  "is_point_estimate": true,
                  "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
                  "kind": "share_pct"
                },
                "sector_share": {
                  "median": 0.39446079403696094,
                  "low": null,
                  "high": null,
                  "range_collapsed": true,
                  "display_value": "39.4%",
                  "display_range": null,
                  "display_text": "39.4%",
                  "is_point_estimate": true,
                  "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
                  "kind": "share_pct"
                },
                "company_share": {
                  "median": 0.5491045423537749,
                  "low": null,
                  "high": null,
                  "range_collapsed": true,
                  "display_value": "54.9%",
                  "display_range": null,
                  "display_text": "54.9%",
                  "is_point_estimate": true,
                  "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
                  "kind": "share_pct"
                }
              },
              "summary": "May: Mostly company-driven."
            },
            {
              "month_key": "2026-06",
              "month_label": "June 2026",
              "month_short_label": "Jun",
              "period_label": "2026-06-01 to 2026-06-30",
              "n_obs": 21,
              "partial_month": false,
              "dominant_driver": "company",
              "dominant_driver_label": "Company-specific",
              "regime_id": null,
              "regime_label": null,
              "dominant_share": {
                "median": 0.49955594556539884,
                "low": null,
                "high": null,
                "range_collapsed": true,
                "display_value": "50.0%",
                "display_range": null,
                "display_text": "50.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct"
              },
              "shares": {
                "market_share": {
                  "median": 0.3094161179159001,
                  "low": null,
                  "high": null,
                  "range_collapsed": true,
                  "display_value": "30.9%",
                  "display_range": null,
                  "display_text": "30.9%",
                  "is_point_estimate": true,
                  "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                  "kind": "share_pct"
                },
                "sector_share": {
                  "median": 0.19102793651870106,
                  "low": null,
                  "high": null,
                  "range_collapsed": true,
                  "display_value": "19.1%",
                  "display_range": null,
                  "display_text": "19.1%",
                  "is_point_estimate": true,
                  "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                  "kind": "share_pct"
                },
                "company_share": {
                  "median": 0.49955594556539884,
                  "low": null,
                  "high": null,
                  "range_collapsed": true,
                  "display_value": "50.0%",
                  "display_range": null,
                  "display_text": "50.0%",
                  "is_point_estimate": true,
                  "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                  "kind": "share_pct"
                }
              },
              "summary": "Jun: Mostly company-driven."
            },
            {
              "month_key": "2026-07",
              "month_label": "July 2026",
              "month_short_label": "Jul",
              "period_label": "2026-07-02 to 2026-07-10",
              "n_obs": 7,
              "partial_month": true,
              "dominant_driver": "sector",
              "dominant_driver_label": "Sector",
              "regime_id": null,
              "regime_label": null,
              "dominant_share": {
                "median": 0.47966588208816624,
                "low": null,
                "high": null,
                "range_collapsed": true,
                "display_value": "48.0%",
                "display_range": null,
                "display_text": "48.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 7 trading days.",
                "kind": "share_pct"
              },
              "shares": {
                "market_share": {
                  "median": 0.4734716737890229,
                  "low": null,
                  "high": null,
                  "range_collapsed": true,
                  "display_value": "47.3%",
                  "display_range": null,
                  "display_text": "47.3%",
                  "is_point_estimate": true,
                  "point_estimate_note": "Point estimate only because the current state has 7 trading days.",
                  "kind": "share_pct"
                },
                "sector_share": {
                  "median": 0.47966588208816624,
                  "low": null,
                  "high": null,
                  "range_collapsed": true,
                  "display_value": "48.0%",
                  "display_range": null,
                  "display_text": "48.0%",
                  "is_point_estimate": true,
                  "point_estimate_note": "Point estimate only because the current state has 7 trading days.",
                  "kind": "share_pct"
                },
                "company_share": {
                  "median": 0.046862444122810896,
                  "low": null,
                  "high": null,
                  "range_collapsed": true,
                  "display_value": "4.7%",
                  "display_range": null,
                  "display_text": "4.7%",
                  "is_point_estimate": true,
                  "point_estimate_note": "Point estimate only because the current state has 7 trading days.",
                  "kind": "share_pct"
                }
              },
              "summary": "Jul: Mostly sector-driven, though based on only 7 trading days."
            }
          ],
          "summary": "Market is the largest recent movement component.",
          "limitation": "Company-specific means residual movement after market and sector factors; it is not a news or causality label.",
          "source": "q02_peer_driver_regime_model"
        },
        "market_state": {
          "valid": true,
          "active_state_label": "Stressed / Illiquid",
          "active_state_probability": 0.9983576926108101,
          "active_state_probability_display": "99.8%",
          "state_profiles": [
            {
              "id": 0,
              "label": "Calm / Liquid",
              "pct_time": 0.12862703606575768,
              "expected_duration_days": 30.232147730279774,
              "current_probability": 3.1440154741044148e-168,
              "current_probability_display": "<0.1%",
              "current_probability_basis": "filtered",
              "n_days_effective": 30.9991156918476,
              "volatility": {
                "median": 0.0029807974334211743,
                "low": 0.0029807974334211743,
                "high": 0.0029807974334211743
              },
              "volatility_label": "Calm / Liquid",
              "jump_probability": 0.2134482639354634,
              "jump_rate": 0.03225898130564202,
              "risk_score": 0.012231393586259593,
              "metrics": {
                "rolling_vol_10d": 0.003915152297392897,
                "downside_vol_10d": 0.0021653985322619717,
                "drawdown_21d": 0.01054082326793275,
                "amihud_stress": 0.022367366227377894,
                "spread_rel": 12.940715169537784,
                "spread_ticks": 2.037957980725451,
                "log_notional": 16.079446660437785,
                "log_trade_count": 6.176556663654612
              }
            },
            {
              "id": 1,
              "label": "Normal / Active",
              "pct_time": 0.3564539896086481,
              "expected_duration_days": 12.232951700236995,
              "current_probability": 8.684423384569023e-76,
              "current_probability_display": "<0.1%",
              "current_probability_basis": "filtered",
              "n_days_effective": 85.90541149568419,
              "volatility": {
                "median": 0.007773864858730131,
                "low": 0.007773864858730131,
                "high": 0.007773864858730131
              },
              "volatility_label": "Normal / Active",
              "jump_probability": 0.1950417125044977,
              "jump_rate": 0.023360967832111414,
              "risk_score": 0.2619446074085604,
              "metrics": {
                "rolling_vol_10d": 0.009709709529263673,
                "downside_vol_10d": 0.005876557042398909,
                "drawdown_21d": 0.04940709379557704,
                "amihud_stress": 0.05287276483767261,
                "spread_rel": 19.406835461899497,
                "spread_ticks": 2.8099805304902756,
                "log_notional": 16.473933401174996,
                "log_trade_count": 6.877088847823006
              }
            },
            {
              "id": 2,
              "label": "Stressed / Illiquid",
              "pct_time": 0.3676810090520063,
              "expected_duration_days": 15.902186003598029,
              "current_probability": 0.9983576926108101,
              "current_probability_display": "99.8%",
              "current_probability_basis": "filtered",
              "n_days_effective": 88.61112318153351,
              "volatility": {
                "median": 0.016708291362602608,
                "low": 0.016708291362602608,
                "high": 0.016708291362602608
              },
              "volatility_label": "Stressed / Illiquid",
              "jump_probability": 0.19954057339970063,
              "jump_rate": 0.04534354970155858,
              "risk_score": 0.6385253140050204,
              "metrics": {
                "rolling_vol_10d": 0.018474496908443574,
                "downside_vol_10d": 0.010907031757441801,
                "drawdown_21d": 0.08883143757969876,
                "amihud_stress": 0.1496508332818593,
                "spread_rel": 29.76235496182297,
                "spread_ticks": 3.1068144563074647,
                "log_notional": 15.968802678297878,
                "log_trade_count": 6.582587181581205
              }
            },
            {
              "id": 3,
              "label": "Jump / Tail Shock",
              "pct_time": 0.14723796527358798,
              "expected_duration_days": 3.093266249877238,
              "current_probability": 0.0016423073891899589,
              "current_probability_display": "0.2%",
              "current_probability_basis": "filtered",
              "n_days_effective": 35.4843496309347,
              "volatility": {
                "median": 0.030606939646176078,
                "low": 0.030606939646176078,
                "high": 0.030606939646176078
              },
              "volatility_label": "Jump / Tail Shock",
              "jump_probability": 0.5712570493170402,
              "jump_rate": 0.5911119663151897,
              "risk_score": 0.8875100875396652,
              "metrics": {
                "rolling_vol_10d": 0.025549958686805097,
                "downside_vol_10d": 0.010412667531707881,
                "drawdown_21d": 0.038184519619203286,
                "amihud_stress": 0.07715677553267045,
                "spread_rel": 22.565568659328452,
                "spread_ticks": 2.6626762277431117,
                "log_notional": 17.291024724705743,
                "log_trade_count": 7.344040361721209
              }
            }
          ],
          "transitions": [
            [
              0.9669226278952578,
              0.00032113950174574095,
              0.00032113950169954976,
              0.03243509310129678
            ],
            [
              0.00011621774917822934,
              0.9182535806153288,
              0.011739410146603532,
              0.06989079148888949
            ],
            [
              0.0001142723605656342,
              0.022946180818161313,
              0.9371155638744422,
              0.03982398294683089
            ],
            [
              0.028350640675592054,
              0.14064396650976038,
              0.15428826574538446,
              0.6767171270692631
            ]
          ],
          "state_probabilities": [
            {
              "id": 0,
              "label": "Calm / Liquid",
              "probability": 3.1440154741044148e-168,
              "probability_display": "<0.1%",
              "basis": "filtered"
            },
            {
              "id": 1,
              "label": "Normal / Active",
              "probability": 8.684423384569023e-76,
              "probability_display": "<0.1%",
              "basis": "filtered"
            },
            {
              "id": 2,
              "label": "Stressed / Illiquid",
              "probability": 0.9983576926108101,
              "probability_display": "99.8%",
              "basis": "filtered"
            },
            {
              "id": 3,
              "label": "Jump / Tail Shock",
              "probability": 0.0016423073891899589,
              "probability_display": "0.2%",
              "basis": "filtered"
            }
          ],
          "summary": "Active state is Stressed / Illiquid with 99.8% model probability.",
          "limitation": "Peer state labels are stock-specific inferred states, not universal stress levels.",
          "source": "q02_peer_hmm_jump_regime_model"
        }
      }
    ],
    "coverage": {
      "drivers": {
        "available": true,
        "source": "q02_peer_driver_regime_model"
      },
      "market_state": {
        "available": true,
        "source": "q02_peer_hmm_jump_regime_model"
      },
      "trading_costs": {
        "available": true,
        "status": "available",
        "source": "q03.peer_execution_metrics",
        "reason": null
      },
      "trader_types": {
        "available": true,
        "status": "available",
        "source": "q03.trader_composition.peer_comparison",
        "reason": null
      }
    },
    "limitations": [
      "Company-specific driver share is the regression residual component; it is not a news or causality label.",
      "Peer trading costs require real peer L2/trade impact payloads; ADV-only peer comparisons are not reported as trading costs.",
      "Peer trader types are included only when Q03 produced real peer persona/trader-composition rows."
    ],
    "performance": {
      "source": "q01_market_comparison_returns",
      "periods": {
        "1d": {
          "period_key": "1d",
          "label": "1D",
          "window_days": 1,
          "n_obs": 1,
          "rows": [
            {
              "listing_id": 534129733,
              "name": "PRU",
              "stock_code": "2378",
              "ticker": "2378",
              "return": 0.030188679245283012,
              "n_obs": 1,
              "is_target": true
            },
            {
              "listing_id": 534129636,
              "name": "CPIC",
              "stock_code": "2601",
              "ticker": "2601",
              "return": 0.0007304601899196239,
              "n_obs": 1,
              "is_target": false
            },
            {
              "listing_id": 534130087,
              "name": "AIA",
              "stock_code": "1299",
              "ticker": "1299",
              "return": 0.004840940525588033,
              "n_obs": 1,
              "is_target": false
            },
            {
              "listing_id": 534130284,
              "name": "MANULIFE-S",
              "stock_code": "945",
              "ticker": "945",
              "return": 0.01563477173233263,
              "n_obs": 1,
              "is_target": false
            },
            {
              "listing_id": 772037047,
              "name": "FWD",
              "stock_code": "1828",
              "ticker": "1828",
              "return": 0.0041551246537396835,
              "n_obs": 1,
              "is_target": false
            }
          ],
          "summary": {
            "target_return": 0.030188679245283012,
            "peer_median_return": 0.0044980325896638584,
            "peer_rank": 1,
            "peer_count": 4,
            "peers_up": 4,
            "peers_down": 0,
            "dispersion": 0.014904311542413007
          },
          "takeaway": "Target return is above the peer median for this window."
        },
        "1w": {
          "period_key": "1w",
          "label": "1W",
          "window_days": 5,
          "n_obs": 5,
          "rows": [
            {
              "listing_id": 534129733,
              "name": "PRU",
              "stock_code": "2378",
              "ticker": "2378",
              "return": 0.017707362534948645,
              "n_obs": 5,
              "is_target": true
            },
            {
              "listing_id": 534129636,
              "name": "CPIC",
              "stock_code": "2601",
              "ticker": "2601",
              "return": -0.007965242577842147,
              "n_obs": 5,
              "is_target": false
            },
            {
              "listing_id": 534130087,
              "name": "AIA",
              "stock_code": "1299",
              "ticker": "1299",
              "return": -0.008191126279863181,
              "n_obs": 5,
              "is_target": false
            },
            {
              "listing_id": 534130284,
              "name": "MANULIFE-S",
              "stock_code": "945",
              "ticker": "945",
              "return": 0.009322560596644047,
              "n_obs": 5,
              "is_target": false
            },
            {
              "listing_id": 772037047,
              "name": "FWD",
              "stock_code": "1828",
              "ticker": "1828",
              "return": 0.03276353276353272,
              "n_obs": 5,
              "is_target": false
            }
          ],
          "summary": {
            "target_return": 0.017707362534948645,
            "peer_median_return": 0.0006786590094009504,
            "peer_rank": 2,
            "peer_count": 4,
            "peers_up": 2,
            "peers_down": 2,
            "dispersion": 0.0409546590433959
          },
          "takeaway": "Target return is above the peer median for this window."
        },
        "30d": {
          "period_key": "30d",
          "label": "1M",
          "window_days": 21,
          "n_obs": 21,
          "rows": [
            {
              "listing_id": 534129733,
              "name": "PRU",
              "stock_code": "2378",
              "ticker": "2378",
              "return": 0.0985915492957743,
              "n_obs": 21,
              "is_target": true
            },
            {
              "listing_id": 534129636,
              "name": "CPIC",
              "stock_code": "2601",
              "ticker": "2601",
              "return": -0.13510101010101006,
              "n_obs": 21,
              "is_target": false
            },
            {
              "listing_id": 534130087,
              "name": "AIA",
              "stock_code": "1299",
              "ticker": "1299",
              "return": 0.02323943661971839,
              "n_obs": 21,
              "is_target": false
            },
            {
              "listing_id": 534130284,
              "name": "MANULIFE-S",
              "stock_code": "945",
              "ticker": "945",
              "return": 0.06982872200263524,
              "n_obs": 21,
              "is_target": false
            },
            {
              "listing_id": 772037047,
              "name": "FWD",
              "stock_code": "1828",
              "ticker": "1828",
              "return": -0.030100334448160182,
              "n_obs": 21,
              "is_target": false
            }
          ],
          "summary": {
            "target_return": 0.0985915492957743,
            "peer_median_return": -0.003430448914220896,
            "peer_rank": 1,
            "peer_count": 4,
            "peers_up": 2,
            "peers_down": 2,
            "dispersion": 0.2049297321036453
          },
          "takeaway": "Target return is above the peer median for this window."
        },
        "3m": {
          "period_key": "3m",
          "label": "3M",
          "window_days": 63,
          "n_obs": 63,
          "rows": [
            {
              "listing_id": 534129733,
              "name": "PRU",
              "stock_code": "2378",
              "ticker": "2378",
              "return": -0.07848101265822804,
              "n_obs": 63,
              "is_target": true
            },
            {
              "listing_id": 534129636,
              "name": "CPIC",
              "stock_code": "2601",
              "ticker": "2601",
              "return": -0.19789227166276346,
              "n_obs": 63,
              "is_target": false
            },
            {
              "listing_id": 534130087,
              "name": "AIA",
              "stock_code": "1299",
              "ticker": "1299",
              "return": -0.1804850535814997,
              "n_obs": 63,
              "is_target": false
            },
            {
              "listing_id": 534130284,
              "name": "MANULIFE-S",
              "stock_code": "945",
              "ticker": "945",
              "return": 0.1534090909090906,
              "n_obs": 63,
              "is_target": false
            },
            {
              "listing_id": 772037047,
              "name": "FWD",
              "stock_code": "1828",
              "ticker": "1828",
              "return": -0.1098833640270096,
              "n_obs": 63,
              "is_target": false
            }
          ],
          "summary": {
            "target_return": -0.07848101265822804,
            "peer_median_return": -0.14518420880425464,
            "peer_rank": 2,
            "peer_count": 4,
            "peers_up": 1,
            "peers_down": 3,
            "dispersion": 0.35130136257185407
          },
          "takeaway": "Target return is above the peer median for this window."
        },
        "6m": {
          "period_key": "6m",
          "label": "6M",
          "window_days": 126,
          "n_obs": 126,
          "rows": [
            {
              "listing_id": 534129733,
              "name": "PRU",
              "stock_code": "2378",
              "ticker": "2378",
              "return": -0.08542713567839266,
              "n_obs": 126,
              "is_target": true
            },
            {
              "listing_id": 534129636,
              "name": "CPIC",
              "stock_code": "2601",
              "ticker": "2601",
              "return": -0.22159090909090917,
              "n_obs": 126,
              "is_target": false
            },
            {
              "listing_id": 534130087,
              "name": "AIA",
              "stock_code": "1299",
              "ticker": "1299",
              "return": -0.09073842302878654,
              "n_obs": 126,
              "is_target": false
            },
            {
              "listing_id": 534130284,
              "name": "MANULIFE-S",
              "stock_code": "945",
              "ticker": "945",
              "return": 0.14608327452364156,
              "n_obs": 126,
              "is_target": false
            },
            {
              "listing_id": 772037047,
              "name": "FWD",
              "stock_code": "1828",
              "ticker": "1828",
              "return": -0.23764458464773852,
              "n_obs": 126,
              "is_target": false
            }
          ],
          "summary": {
            "target_return": -0.08542713567839266,
            "peer_median_return": -0.15616466605984786,
            "peer_rank": 2,
            "peer_count": 4,
            "peers_up": 1,
            "peers_down": 3,
            "dispersion": 0.3837278591713801
          },
          "takeaway": "Target return is above the peer median for this window."
        }
      }
    },
    "drivers": {
      "source": "q02_peer_driver_regime_model",
      "method": "ols_current_driver_mix_per_peer",
      "breadth_context": {
        "1d": {
          "period_key": "1d",
          "label": "1D",
          "window_days": 1,
          "target_return": 0.030188679245283012,
          "peer_median_return": 0.0044980325896638584,
          "peer_up_count": 4,
          "peer_down_count": 0,
          "peer_count": 4,
          "dispersion": 0.014904311542413007,
          "interpretation": "more peers rose than fell; Target return is above the peer median for this window."
        },
        "1w": {
          "period_key": "1w",
          "label": "1W",
          "window_days": 5,
          "target_return": 0.017707362534948645,
          "peer_median_return": 0.0006786590094009504,
          "peer_up_count": 2,
          "peer_down_count": 2,
          "peer_count": 4,
          "dispersion": 0.0409546590433959,
          "interpretation": "peer breadth was balanced; Target return is above the peer median for this window."
        },
        "30d": {
          "period_key": "30d",
          "label": "1M",
          "window_days": 21,
          "target_return": 0.0985915492957743,
          "peer_median_return": -0.003430448914220896,
          "peer_up_count": 2,
          "peer_down_count": 2,
          "peer_count": 4,
          "dispersion": 0.2049297321036453,
          "interpretation": "peer breadth was balanced; Target return is above the peer median for this window."
        },
        "3m": {
          "period_key": "3m",
          "label": "3M",
          "window_days": 63,
          "target_return": -0.07848101265822804,
          "peer_median_return": -0.14518420880425464,
          "peer_up_count": 1,
          "peer_down_count": 3,
          "peer_count": 4,
          "dispersion": 0.35130136257185407,
          "interpretation": "more peers fell than rose; Target return is above the peer median for this window."
        },
        "6m": {
          "period_key": "6m",
          "label": "6M",
          "window_days": 126,
          "target_return": -0.08542713567839266,
          "peer_median_return": -0.15616466605984786,
          "peer_up_count": 1,
          "peer_down_count": 3,
          "peer_count": 4,
          "dispersion": 0.3837278591713801,
          "interpretation": "more peers fell than rose; Target return is above the peer median for this window."
        }
      },
      "profiles_available": true
    },
    "market_state": {
      "source": "q02_peer_hmm_jump_regime_model",
      "periods": {
        "1d": {
          "period_key": "1d",
          "label": "1D",
          "window_days": 1,
          "rows": [
            {
              "ticker": "2378",
              "company_name": "PRU",
              "label": "PRU (2378)",
              "score_pca": 69.38377535101404,
              "rank_pca": 786,
              "adv": 18045300.0,
              "trades": 817.0,
              "volatility": 0.2286769713959769,
              "spread_pct": 0.002853328040399479,
              "spread_ticks": 3.099049371358479,
              "amihud": 1.672938618104604e-09,
              "turnover_ratio": 6.461364123662994e-05,
              "is_target": true
            },
            {
              "ticker": "2601",
              "company_name": "CPIC",
              "label": "CPIC (2601)",
              "score_pca": 90.6396255850234,
              "rank_pca": 241,
              "adv": 180637842.79999998,
              "trades": 7994.0,
              "volatility": 0.2564630852788712,
              "spread_pct": 0.0013880420940398316,
              "spread_ticks": 1.9120559114735003,
              "amihud": 4.043782734542399e-12,
              "turnover_ratio": 0.0031445169261937636,
              "is_target": false
            },
            {
              "ticker": "1299",
              "company_name": "AIA",
              "label": "AIA (1299)",
              "score_pca": 95.55382215288611,
              "rank_pca": 115,
              "adv": 1861841798.1000001,
              "trades": 14097.0,
              "volatility": 0.31217894925779915,
              "spread_pct": 0.0007397682067376132,
              "spread_ticks": 1.0876543593890946,
              "amihud": 2.600081559307664e-12,
              "turnover_ratio": 0.0026656023903384772,
              "is_target": false
            },
            {
              "ticker": "945",
              "company_name": "MANULIFE-S",
              "label": "MANULIFE-S (945)",
              "score_pca": 58.38533541341654,
              "rank_pca": 1068,
              "adv": 8509760.0,
              "trades": 120.0,
              "volatility": 0.05881334854152028,
              "spread_pct": 0.0035276719358920874,
              "spread_ticks": 5.718631178707224,
              "amihud": 1.837275285358533e-09,
              "turnover_ratio": 1.533936557124034e-05,
              "is_target": false
            },
            {
              "ticker": "1828",
              "company_name": "FWD",
              "label": "FWD (1828)",
              "score_pca": 77.96411856474259,
              "rank_pca": 566,
              "adv": 13719900.0,
              "trades": 1758.0,
              "volatility": 0.32764783225337946,
              "spread_pct": 0.002206241374328006,
              "spread_ticks": 3.198645598194131,
              "amihud": 3.028538585368467e-10,
              "turnover_ratio": 0.0017283685154356003,
              "is_target": false
            }
          ],
          "summary": {
            "target": {
              "score_pca": 69.38377535101404,
              "adv": 18045300.0,
              "trades": 817.0,
              "volatility": 0.2286769713959769,
              "spread_pct": 0.002853328040399479,
              "spread_ticks": 3.099049371358479,
              "amihud": 1.672938618104604e-09,
              "turnover_ratio": 6.461364123662994e-05
            },
            "peer_medians": {
              "score_pca": 84.301872074883,
              "adv": 97178871.39999999,
              "trades": 4876.0,
              "volatility": 0.28432101726833514,
              "spread_pct": 0.0017971417341839189,
              "spread_ticks": 2.5553507548338157,
              "amihud": 1.5344882063569454e-10,
              "turnover_ratio": 0.002196985452887039
            },
            "peer_count": 4
          },
          "takeaways": [
            "Liquidity score is weaker than the peer median.",
            "ADV is weaker than the peer median.",
            "Spread is weaker than the peer median."
          ]
        },
        "1w": {
          "period_key": "1w",
          "label": "1W",
          "window_days": 5,
          "rows": [
            {
              "ticker": "2378",
              "company_name": "PRU",
              "label": "PRU (2378)",
              "score_pca": 68.29173166926678,
              "rank_pca": 814,
              "adv": 8618130.0,
              "trades": 246.0,
              "volatility": 0.2778564482152027,
              "spread_pct": 0.003503653608816688,
              "spread_ticks": 3.7777777777777777,
              "amihud": 1.672938618104604e-09,
              "turnover_ratio": 3.1143579573359e-05,
              "is_target": true
            },
            {
              "ticker": "2601",
              "company_name": "CPIC",
              "label": "CPIC (2601)",
              "score_pca": 94.22776911076443,
              "rank_pca": 149,
              "adv": 250964595.86,
              "trades": 7994.0,
              "volatility": 0.316781915401242,
              "spread_pct": 0.0012649237197476751,
              "spread_ticks": 1.776502170436372,
              "amihud": 8.123784599840789e-11,
              "turnover_ratio": 0.004284319183797514,
              "is_target": false
            },
            {
              "ticker": "1299",
              "company_name": "AIA",
              "label": "AIA (1299)",
              "score_pca": 97.69890795631825,
              "rank_pca": 60,
              "adv": 1756895133.3,
              "trades": 14097.0,
              "volatility": 0.2590029448543688,
              "spread_pct": 0.0007436833008136093,
              "spread_ticks": 1.0760388586541885,
              "amihud": 6.501803080967413e-12,
              "turnover_ratio": 0.0025275267137470363,
              "is_target": false
            },
            {
              "ticker": "945",
              "company_name": "MANULIFE-S",
              "label": "MANULIFE-S (945)",
              "score_pca": 61.89547581903276,
              "rank_pca": 978,
              "adv": 5129340.0,
              "trades": 67.0,
              "volatility": 0.16650547645720307,
              "spread_pct": 0.004048772293790562,
              "spread_ticks": 6.4944444444444445,
              "amihud": 1.2387498768508462e-09,
              "turnover_ratio": 9.309004297050436e-06,
              "is_target": false
            },
            {
              "ticker": "1828",
              "company_name": "FWD",
              "label": "FWD (1828)",
              "score_pca": 79.44617784711389,
              "rank_pca": 528,
              "adv": 10306438.0,
              "trades": 1332.0,
              "volatility": 0.41323661157824554,
              "spread_pct": 0.0024888652470835084,
              "spread_ticks": 3.5526014865637507,
              "amihud": 6.767544277206673e-10,
              "turnover_ratio": 0.0013418511006541873,
              "is_target": false
            }
          ],
          "summary": {
            "target": {
              "score_pca": 68.29173166926678,
              "adv": 8618130.0,
              "trades": 246.0,
              "volatility": 0.2778564482152027,
              "spread_pct": 0.003503653608816688,
              "spread_ticks": 3.7777777777777777,
              "amihud": 1.672938618104604e-09,
              "turnover_ratio": 3.1143579573359e-05
            },
            "peer_medians": {
              "score_pca": 86.83697347893916,
              "adv": 130635516.93,
              "trades": 4663.0,
              "volatility": 0.2878924301278054,
              "spread_pct": 0.0018768944834155919,
              "spread_ticks": 2.6645518285000613,
              "amihud": 3.7899613685953757e-10,
              "turnover_ratio": 0.0019346889072006119
            },
            "peer_count": 4
          },
          "takeaways": [
            "Liquidity score is weaker than the peer median.",
            "ADV is weaker than the peer median.",
            "Spread is weaker than the peer median."
          ]
        },
        "30d": {
          "period_key": "30d",
          "label": "1M",
          "window_days": 21,
          "rows": [
            {
              "ticker": "2378",
              "company_name": "PRU",
              "label": "PRU (2378)",
              "score_pca": 69.03276131045241,
              "rank_pca": 795,
              "adv": 9275150.0,
              "trades": 359.0,
              "volatility": 0.2955973504852906,
              "spread_pct": 0.003266116538200523,
              "spread_ticks": 3.4927536231884058,
              "amihud": 1.1036661471710073e-09,
              "turnover_ratio": 3.521003566328912e-05,
              "is_target": true
            },
            {
              "ticker": "2601",
              "company_name": "CPIC",
              "label": "CPIC (2601)",
              "score_pca": 95.94383775351014,
              "rank_pca": 105,
              "adv": 383099166.0,
              "trades": 10651.0,
              "volatility": 0.3935402734941703,
              "spread_pct": 0.0011524723739543448,
              "spread_ticks": 1.705463368816531,
              "amihud": 4.338248902084457e-11,
              "turnover_ratio": 0.006347213374372772,
              "is_target": false
            },
            {
              "ticker": "1299",
              "company_name": "AIA",
              "label": "AIA (1299)",
              "score_pca": 98.32293291731669,
              "rank_pca": 44,
              "adv": 2230818455.25,
              "trades": 16908.0,
              "volatility": 0.3005089207991953,
              "spread_pct": 0.0007452512294699164,
              "spread_ticks": 1.0886625730118316,
              "amihud": 6.501803080967413e-12,
              "turnover_ratio": 0.0031250428924190624,
              "is_target": false
            },
            {
              "ticker": "945",
              "company_name": "MANULIFE-S",
              "label": "MANULIFE-S (945)",
              "score_pca": 60.9984399375975,
              "rank_pca": 1001,
              "adv": 4669080.0,
              "trades": 67.0,
              "volatility": 0.16933378400039048,
              "spread_pct": 0.005363124289588901,
              "spread_ticks": 8.520440251572326,
              "amihud": 1.837275285358533e-09,
              "turnover_ratio": 8.547890738172098e-06,
              "is_target": false
            },
            {
              "ticker": "1828",
              "company_name": "FWD",
              "label": "FWD (1828)",
              "score_pca": 78.58814352574103,
              "rank_pca": 550,
              "adv": 11462088.0,
              "trades": 1401.0,
              "volatility": 0.3114887548062595,
              "spread_pct": 0.002406128995269324,
              "spread_ticks": 3.588235294117647,
              "amihud": 9.794360224554639e-10,
              "turnover_ratio": 0.0014247806404985926,
              "is_target": false
            }
          ],
          "summary": {
            "target": {
              "score_pca": 69.03276131045241,
              "adv": 9275150.0,
              "trades": 359.0,
              "volatility": 0.2955973504852906,
              "spread_pct": 0.003266116538200523,
              "spread_ticks": 3.4927536231884058,
              "amihud": 1.1036661471710073e-09,
              "turnover_ratio": 3.521003566328912e-05
            },
            "peer_medians": {
              "score_pca": 87.26599063962558,
              "adv": 197280627.0,
              "trades": 6026.0,
              "volatility": 0.3059988378027274,
              "spread_pct": 0.0017793006846118344,
              "spread_ticks": 2.646849331467089,
              "amihud": 5.114092557381542e-10,
              "turnover_ratio": 0.0022749117664588275
            },
            "peer_count": 4
          },
          "takeaways": [
            "Liquidity score is weaker than the peer median.",
            "ADV is weaker than the peer median.",
            "Spread is weaker than the peer median."
          ]
        },
        "3m": {
          "period_key": "3m",
          "label": "3M",
          "window_days": 63,
          "rows": [
            {
              "ticker": "2378",
              "company_name": "PRU",
              "label": "PRU (2378)",
              "score_pca": 69.03276131045241,
              "rank_pca": 795,
              "adv": 10157415.0,
              "trades": 310.0,
              "volatility": 0.3222611129902431,
              "spread_pct": 0.0030731265440082883,
              "spread_ticks": 3.448202959830867,
              "amihud": 1.0998660951187802e-09,
              "turnover_ratio": 3.521003566328912e-05,
              "is_target": true
            },
            {
              "ticker": "2601",
              "company_name": "CPIC",
              "label": "CPIC (2601)",
              "score_pca": 96.13884555382215,
              "rank_pca": 100,
              "adv": 360563559.04,
              "trades": 10100.0,
              "volatility": 0.3066207988831542,
              "spread_pct": 0.0011325687600784356,
              "spread_ticks": 1.6070041852519399,
              "amihud": 3.219664058461062e-11,
              "turnover_ratio": 0.005509091704113104,
              "is_target": false
            },
            {
              "ticker": "1299",
              "company_name": "AIA",
              "label": "AIA (1299)",
              "score_pca": 98.71294851794072,
              "rank_pca": 34,
              "adv": 2291887555.0,
              "trades": 16943.0,
              "volatility": 0.29588148046799423,
              "spread_pct": 0.0006927154199901853,
              "spread_ticks": 1.110988715086534,
              "amihud": 5.206507312992787e-12,
              "turnover_ratio": 0.002827335023768771,
              "is_target": false
            },
            {
              "ticker": "945",
              "company_name": "MANULIFE-S",
              "label": "MANULIFE-S (945)",
              "score_pca": 60.37441497659907,
              "rank_pca": 1017,
              "adv": 3938879.9999999995,
              "trades": 65.0,
              "volatility": 0.1801554140954655,
              "spread_pct": 0.004869238179796444,
              "spread_ticks": 7.425531914893617,
              "amihud": 1.7052072548063986e-09,
              "turnover_ratio": 7.728229982456965e-06,
              "is_target": false
            },
            {
              "ticker": "1828",
              "company_name": "FWD",
              "label": "FWD (1828)",
              "score_pca": 75.58502340093604,
              "rank_pca": 627,
              "adv": 7785646.0,
              "trades": 793.0,
              "volatility": 0.25751173210693273,
              "spread_pct": 0.0025683435604032926,
              "spread_ticks": 3.68227935585805,
              "amihud": 1.3590710828984187e-09,
              "turnover_ratio": 0.000948027118485602,
              "is_target": false
            }
          ],
          "summary": {
            "target": {
              "score_pca": 69.03276131045241,
              "adv": 10157415.0,
              "trades": 310.0,
              "volatility": 0.3222611129902431,
              "spread_pct": 0.0030731265440082883,
              "spread_ticks": 3.448202959830867,
              "amihud": 1.0998660951187802e-09,
              "turnover_ratio": 3.521003566328912e-05
            },
            "peer_medians": {
              "score_pca": 85.8619344773791,
              "adv": 184174602.52,
              "trades": 5446.5,
              "volatility": 0.2766966062874635,
              "spread_pct": 0.001850456160240864,
              "spread_ticks": 2.644641770554995,
              "amihud": 6.956338617415147e-10,
              "turnover_ratio": 0.0018876810711271866
            },
            "peer_count": 4
          },
          "takeaways": [
            "Liquidity score is weaker than the peer median.",
            "ADV is weaker than the peer median.",
            "Spread is weaker than the peer median."
          ]
        },
        "6m": {
          "period_key": "6m",
          "label": "6M",
          "window_days": 126,
          "rows": [
            {
              "ticker": "2378",
              "company_name": "PRU",
              "label": "PRU (2378)",
              "score_pca": 68.60374414976599,
              "rank_pca": 806,
              "adv": 9435015.0,
              "trades": 271.0,
              "volatility": 0.36188581876310444,
              "spread_pct": 0.0033094229828760447,
              "spread_ticks": 3.935083572110793,
              "amihud": 1.3596912281424743e-09,
              "turnover_ratio": 3.0987177416053996e-05,
              "is_target": true
            },
            {
              "ticker": "2601",
              "company_name": "CPIC",
              "label": "CPIC (2601)",
              "score_pca": 97.46489859594384,
              "rank_pca": 66,
              "adv": 459413263.99999994,
              "trades": 11420.0,
              "volatility": 0.321053420414264,
              "spread_pct": 0.001159385533009543,
              "spread_ticks": 1.6070041852519399,
              "amihud": 2.784997455018527e-11,
              "turnover_ratio": 0.006414232200003247,
              "is_target": false
            },
            {
              "ticker": "1299",
              "company_name": "AIA",
              "label": "AIA (1299)",
              "score_pca": 99.02496099843994,
              "rank_pca": 26,
              "adv": 2330915428.375,
              "trades": 16045.5,
              "volatility": 0.3678457895215191,
              "spread_pct": 0.0006787922622548757,
              "spread_ticks": 1.120157495877919,
              "amihud": 5.825611603372586e-12,
              "turnover_ratio": 0.0029032152105322707,
              "is_target": false
            },
            {
              "ticker": "945",
              "company_name": "MANULIFE-S",
              "label": "MANULIFE-S (945)",
              "score_pca": 60.14040561622465,
              "rank_pca": 1023,
              "adv": 3587050.0,
              "trades": 62.0,
              "volatility": 0.22885375737585553,
              "spread_pct": 0.004562861457869171,
              "spread_ticks": 6.852191560420273,
              "amihud": 2.5092866268628036e-09,
              "turnover_ratio": 7.289126006181001e-06,
              "is_target": false
            },
            {
              "ticker": "1828",
              "company_name": "FWD",
              "label": "FWD (1828)",
              "score_pca": 76.87207488299532,
              "rank_pca": 594,
              "adv": 9685898.0,
              "trades": 891.0,
              "volatility": 0.2525120375851249,
              "spread_pct": 0.0023951115014147917,
              "spread_ticks": 3.68227935585805,
              "amihud": 8.978391933465418e-10,
              "turnover_ratio": 0.001089226533242706,
              "is_target": false
            }
          ],
          "summary": {
            "target": {
              "score_pca": 68.60374414976599,
              "adv": 9435015.0,
              "trades": 271.0,
              "volatility": 0.36188581876310444,
              "spread_pct": 0.0033094229828760447,
              "spread_ticks": 3.935083572110793,
              "amihud": 1.3596912281424743e-09,
              "turnover_ratio": 3.0987177416053996e-05
            },
            "peer_medians": {
              "score_pca": 87.16848673946959,
              "adv": 234549580.99999997,
              "trades": 6155.5,
              "volatility": 0.2867827289996945,
              "spread_pct": 0.0017772485172121673,
              "spread_ticks": 2.644641770554995,
              "amihud": 4.628445839483635e-10,
              "turnover_ratio": 0.0019962208718874884
            },
            "peer_count": 4
          },
          "takeaways": [
            "Liquidity score is weaker than the peer median.",
            "ADV is weaker than the peer median.",
            "Spread is weaker than the peer median."
          ]
        }
      },
      "profiles_available": true
    }
  },
  "theme": {
    "badges": {
      "liq_section": {
        "text": "Liquidity score: 68.6 — Weak",
        "bg": "bg-red-500/20",
        "textColor": "text-red-400"
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
    "liq_subtitle": "Structural liquidity is weak relative to peers, and recent trading activity is running below the monthly average.",
    "market_comparison_title": "How You Compare to the Market",
    "market_comparison_subtitle": "Context relative to market, sector, and peer medians.",
    "perf_title": "Stock Performance",
    "perf_subtitle": "Recent returns are strong relative to peers and the market, with 1M performance at +9.9% compared with peers at -2.4% and the market at -2.3%.",
    "perf_insight": "That return backdrop is stronger than the liquidity profile. The stock still sits 18.6 points below the peer median on the 6M liquidity score, while market factors account for 60.5% of current trading, which suggests the move is being carried more by broader conditions than by stock-specific demand.",
    "drivers_title": "What Moves Your Stock Price?",
    "drivers_subtitle": "The tape is being driven mainly by broader market moves, with market factors accounting for 60.5% of current trading.",
    "drivers_strip": [
      {
        "title": "Current Driver (Last 5 Days)",
        "text": "Over the last 5 trading days, moves are mainly market-driven, accounting for about 60.5% of price changes. Other influences are sector 37.5%, and company-specific 2.0%."
      },
      {
        "title": "Driver Mix",
        "text": "Based on the last 5 trading days, current mix is market 60.5%, sector 37.5%, and company-specific 2.0%."
      },
      {
        "title": "Monthly Trend",
        "text": "The driver mix has shifted from company-driven to market-driven over May to Jul."
      }
    ],
    "drivers_pie_title": "Current Driver Mix (Last 5 Days)",
    "drivers_pie_note": "Based on the last 5 trading days, current split is market 60.5%, sector 37.5%, and company-specific 2.0%.",
    "lead_lag_title": "",
    "lead_lag_note": "",
    "rolling_title": "Monthly Driver Shift",
    "rolling_latest_label": "Latest: {period}",
    "rolling_note": "Each bar shows the monthly split between market-, sector-, and company-driven moves.",
    "drivers_bottom_line": "This matters because the stock is moving largely with the wider market while recent trading activity is down 31.5% compared with the 1M average, which can leave day-to-day access feeling thinner.",
    "drivers_wtd_title": "Key Reads",
    "drivers_wtd_list": [
      "Main driver now is the market, accounting for 60.5% of current price moves.",
      "The mix has shifted from mostly market in May and June to more market-led in July."
    ],
    "regime_title": "Market State",
    "regime_subtitle": "The stock is trading from a weak liquidity base, although the current book looks balanced.",
    "regime_badge_text": "Stressed / Illiquid",
    "regime_pie_title": "State Mix",
    "transition_title": "State Transitions",
    "transition_cols": [
      "From \\",
      "Calm / Liquid",
      "Normal / Active",
      "Stressed / Illiquid",
      "Jump / Tail Shock"
    ],
    "transition_note_template": "Rows sum to 100%. Each row shows how states tend to transition across the observed sample.",
    "market_state_strip": [],
    "exec_check_title": "Trading Costs & Market Depth",
    "exec_check_subtitle": "Combines the final continuous-session displayed book before close, trade-size stress tests based on Jul 10, 2025 to Jul 10, 2026 (240 trading days • 164,295 trades), large sell-side orders observed today, and intraday spread/depth during the continuous trading session.",
    "order_book_title": "Order Book Depth (Available Liquidity)",
    "order_book_note": "Depth shown is based on the displayed order book.",
    "peer_capacity_title": "Peer Capacity Context",
    "peer_capacity_note": "Immediate displayed depth broadly matches the stronger monthly liquidity read.",
    "impact_summary_title": "Estimated Price Impact (Sell Orders)",
    "impact_summary_subtitle": "Approximate price impact (%) for sell orders.",
    "exec_check_insight": "Displayed bid depth is 1.01x ask depth and the spread is 3 ticks. Immediate displayed liquidity looks balanced, which matters because the current book appears orderly even with weaker structural liquidity.",
    "trader_composition_title": "Who's Trading Your Stock?",
    "trader_composition_subtitle": "Shows whether trading is mostly retail-like, institution-like, mixed, or unclassified.",
    "trader_retail_threshold": "Retail-like flow",
    "trader_mixed_threshold": "Mixed flow",
    "trader_instit_threshold": "Institution-like flow",
    "peer_trader_title": "Peer Comparison: Trader Mix",
    "peer_trader_subtitle": "How the trader mix compares with peers.",
    "price_moving_title": "Which Trades Move the Price?",
    "price_moving_subtitle": "Price-moving trades are 44.2% of total trades.",
    "intraday_title": "When Does Trading Happen?",
    "intraday_subtitle": "The current trading picture is orderly, with balanced displayed depth and a contained spread.",
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
    "intraday_insight": "Near-term execution looks stable. Displayed bid depth is 1.01x ask depth and the spread is 3 ticks, which suggests the book is balanced even though recent trading activity has pulled back.",
    "short_title": "Short Selling & Lending",
    "short_subtitle": "Current trading is being shaped more by market direction than by a distinct short-driven signal.",
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
    "exec_subtitle": "Liquidity screens below peers for the stock’s size, and recent trading activity has pulled back even as the current book remains orderly.",
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
        "value": "68.6/100",
        "sub": "Peer median 87.2 (-18.6 pts)",
        "interp": {
          "text": "Weak",
          "cls": "interpretation-bad",
          "icon": "◆"
        }
      },
      {
        "title": "Volume vs Peers",
        "value": "HK$9.4M",
        "sub": "Peer median HK$234.5M",
        "interp": {
          "text": "Weak",
          "cls": "interpretation-bad",
          "icon": "◆"
        }
      },
      {
        "title": "Spread",
        "value": "0.33%",
        "sub": "3.94 ticks; peers 0.18%",
        "interp": {
          "text": "Wider",
          "cls": "interpretation-bad",
          "icon": "◆"
        }
      }
    ],
    "liq_insight": "Liquidity is weak for the stock’s size and recent activity has pulled back further. The 6M liquidity score is 68.6 compared with a peer median of 87.2, which puts the stock 18.6 points behind peers on structural access. On top of that, 1W trades are down 31.5% compared with the 1M average, so day-to-day tradability looks thinner than the monthly profile.",
    "perf_badge": "Context",
    "exec_check_tiles": [
      {
        "title": "Mid Price",
        "value": "108.550",
        "note": "final continuous-session displayed book before close",
        "color": "text-white"
      },
      {
        "title": "Spread",
        "value": "0.28%",
        "note": "3.00 ticks",
        "color": "text-slate-300"
      },
      {
        "title": "Depth",
        "value": "1.01x",
        "note": "Bid depth / ask depth on the displayed order book",
        "color": "text-slate-300"
      }
    ],
    "impact_summary_cards": [
      {
        "title": "~S$100K sell",
        "text": "Estimated impact ~-0.14% with 100.0% fill.",
        "cls": "ok"
      },
      {
        "title": "S$1.0M sell",
        "text": "Estimated impact ~-0.40% with 100.0% fill.",
        "cls": "warn"
      },
      {
        "title": "S$2.5M sell",
        "text": "Estimated impact ~-1.94% with 49.4% fill.",
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
        "value": "69",
        "suffix": "/100",
        "bar_pct": 69,
        "color_value": "text-amber-400",
        "color_bar": "bg-amber-500",
        "subtext": "Rank 806/2564",
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
        "value": "0.33",
        "suffix": "%",
        "bar_pct": 3,
        "color_value": "text-emerald-400",
        "color_bar": "bg-emerald-500",
        "subtext": "0.33% • 3.94 ticks vs peers 0.18%",
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
        "value": "9.4M",
        "value_prefix": "HK$",
        "suffix": "",
        "bar_pct": 60,
        "color_value": "text-red-400",
        "color_bar": "bg-red-500",
        "subtext": "Peer median HK$234.5M",
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
        "value": "60.5",
        "suffix": "market",
        "bar_pct": 60,
        "color_value": "text-amber-400",
        "color_bar": "bg-amber-500",
        "subtext": "Sector 37.5% • Company 2.0%",
        "interpretation": {
          "text": "Market",
          "cls": "interpretation-neutral",
          "icon": "◆"
        }
      }
    ],
    "exec_takeaways": [
      "Structural liquidity is weak relative to peers, with a 6M liquidity score of 68.6 compared with a peer median of 87.2. That leaves access starting from a weaker base for a company of this size.",
      "Recent trading activity has pulled back, with 1W trades down 31.5% compared with the 1M average. That makes near-term access look thinner than the broader monthly profile.",
      "The current book is balanced, but the tape remains market-led. Displayed bid depth is 1.01x ask depth with a 3-tick spread, while market factors account for 60.5% of trading, so immediate conditions look orderly even as broader moves remain the main influence."
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
      "overall": "6M liquidity is weak: score 68.6 vs peer median 87.2 (-18.6",
      "strengths": [
        "6M score 68.6 vs peer median 87.2 (-18.6 pts)."
      ],
      "concerns": [
        "1W trades down -31.5% vs 1M."
      ],
      "peer_context": "Primary-period score gap vs peers: -18.6 pts."
    },
    "market_comparison": {
      "returns": {
        "insight": "6M return is -8.5%, better than sector, but worse than market, which shows price performance is mixed across comparison groups.",
        "vs_market": "Worse than market: -8.5% vs market 6.5%.",
        "vs_sector": "Better than sector: -8.5% vs sector -19.6%.",
        "vs_peers": "In line with peers: -8.5% vs peers -9.1%."
      },
      "adv": {
        "insight": "ADV is HK$9.4M, better than market, but worse than sector and peers, which shows trading size is uneven across comparison groups.",
        "vs_market": "Better than market: HK$9.4M vs market HK$210.6K.",
        "vs_sector": "Worse than sector: HK$9.4M vs sector HK$30.2M.",
        "vs_peers": "Worse than peers: HK$9.4M vs peers HK$234.5M."
      },
      "spread": {
        "insight": "Spread is 0.33%, better than market, but worse than sector and peers, which shows execution cost is mixed across comparison groups.",
        "vs_market": "Better than market: 0.33% vs market 2.93%.",
        "vs_sector": "Worse than sector: 0.33% vs sector 0.22%.",
        "vs_peers": "Worse than peers: 0.33% vs peers 0.18%."
      },
      "turnover_ratio": {
        "insight": "Turnover ratio is 0.00%, worse than market, sector, and peers, which shows a lighter free-float turnover profile than comparable names.",
        "vs_market": "Worse than market: 0.00% vs market 0.09%.",
        "vs_sector": "Worse than sector: 0.00% vs sector 0.33%.",
        "vs_peers": "Worse than peers: 0.00% vs peers 0.20%."
      },
      "volatility": {
        "insight": "Volatility is 36.19%, better than market, but worse than peers, which shows price variability is mixed across comparison groups.",
        "vs_market": "Better than market: 36.19% vs market 62.59%.",
        "vs_sector": "In line with sector: 36.19% vs sector 37.21%.",
        "vs_peers": "Worse than peers: 36.19% vs peers 28.68%."
      },
      "trades": {
        "insight": "Trades is 271, better than market, but worse than sector and peers, which shows trading frequency is mixed across comparison groups.",
        "vs_market": "Better than market: 271 vs market 20.",
        "vs_sector": "Worse than sector: 271 vs sector 1296.",
        "vs_peers": "Worse than peers: 271 vs peers 6156."
      },
      "amihud": {
        "insight": "Price impact is 1.36e-09, better than market, but worse than sector and peers, which shows price impact is mixed across comparison groups.",
        "vs_market": "Better than market: 1.36e-09 vs market 4.98e-08.",
        "vs_sector": "Worse than sector: 1.36e-09 vs sector 4.51e-10.",
        "vs_peers": "Worse than peers: 1.36e-09 vs peers 4.63e-10."
      }
    },
    "performance": {
      "overall": "Recent returns are strong relative to peers and the market, but the liquidity backdrop only partly supports that move. The stock gained 9.9% over 1M while peers fell 2.4% and the market fell 2.3%, yet its 6M liquidity score of 68.6 sits 18.6 points below the peer median and 1W trades are down 31.5% from the 1M average. That matters because the price move has outpaced the quality of access, so the stronger return backdrop is not being matched by stronger trading activity.",
      "conclusion": "The move looks mainly broad-market rather than company-specific, with market factors driving 60.5% of current trading."
    },
    "drivers": {
      "overall": "The stock is being driven mainly by broader market moves now, with the market accounting for 60.5% of current price action. That matters because the tape is being shaped more by external conditions than by company news, even as the shares have outperformed with a 1M return of 9.9% compared with -2.4% for peers and -2.3% for the market.",
      "beta": "The current pattern looks real but not fully settled, because market influence is now dominant while 1W trades are down 31.5% from the 1M average. That combination points to a tape that is following broader moves, but with less trading activity behind it than the recent monthly average.",
      "rolling_change": "The driver mix has changed meaningfully over the last three months, moving from more mixed but still company-led in May, to clearly company-driven in June, and then to mostly market-driven in July. That matters because the stock is no longer trading primarily on its own story and is now more exposed to wider market direction."
    },
    "regime": {
      "overall": "Short expected duration points to a short-lived state rather than a durable market backdrop.",
      "current": "The stock is currently in a stressed, illiquid state, while broader market moves still account for 60.5% of the tape, keeping conditions tied to the wider market backdrop.",
      "transitions": "This state looks short-lived rather than durable, with a typical run length of about 1.8 days, so the current pattern can change quickly.",
      "trading_implications": "This looks like a short-lived state, not a sticky regime: the typical run length is about 1.8 days."
    },
    "execution": {
      "overall": "Displayed liquidity looks balanced, with bid depth at 1.01x ask depth and a 3 tick spread. That matters because the book is not showing a clear side imbalance at the screen level right now.",
      "concern": "The main stress point is activity rather than book shape, as 1W trades are down 31.5% compared with the 1M average. That matters because a balanced screen can still feel thinner when recent participation has pulled back.",
      "peer_context": "The displayed book is more supportive than the longer-term peer standing, even though the 6M liquidity score of 68.6 sits 18.6 points below the peer median of 87.2. That matters because the current screen does not show the same degree of weakness as the broader liquidity profile."
    },
    "trader_composition": {
      "overall": "Flow looks mainly retail-like on both trade count and trade value, which makes day-to-day activity look broad rather than block-driven.",
      "retail_heavy": "Retail-like trades account for 94.2% of trade count and 62.7% of trade value, compared with institution-like trades at 0.4% of count and 9.8% of value. That points to participation being dominated by smaller individual trades, which supports a retail-like read.",
      "institutional_gap": "Institution-like activity is a small part of the tape at 0.4% of trade count and 9.8% of trade value, so larger-value participation is present but not setting the overall flow.",
      "peer_comparison": "The mix stands out as retail-leaning relative to peers, which suggests this name relies more on broad individual participation than on institutional value flow."
    },
    "price_moving": {
      "overall": "Price-moving activity looks mixed because the flow base is retail-like while the stock has outperformed over the past month. Retail-like trades dominate both count and value, while the stock is up 9.9% over one month compared with peers at -2.4% and the market at -2.3%. That suggests price formation is being carried by broad participation against a strong return backdrop.",
      "interpretation": "",
      "asymmetry": ""
    },
    "short_selling": {
      "overall": "Short activity does not appear to be the main issue in the tape. The clearer signals are that trading activity is lower, with 1W trades down 31.5% compared with the 1M average, while the stock has still outperformed peers and the market over 1M, which points more to lighter participation than to short pressure driving conditions.",
      "level": "N/A",
      "correlation": "N/A",
      "trend": "There is no clear sign that short activity is becoming a separate driver of trading conditions. Recent volume has pulled back, but the stronger 1M share price performance suggests the broader picture is still being shaped more by market-led trading and lower activity than by a rising short overhang.",
      "peaks": "N/A"
    },
    "intraday": {
      "overall": "Liquidity appears through the continuous session, which accounts for 91.2% of activity, and the concentration score of 0.197 indicates trading is spread across the day.",
      "hhi_interpretation": "Moderately concentrated - some intervals dominate",
      "best_times": "The continuous session is the clearest source of liquidity, while the open at 0.3% and close at 4.6% play a much smaller role.",
      "peer_ranking": "The intraday pattern looks more balanced than a profile dominated by the open or close, which supports a steadier trading backdrop."
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
        "PRU (2378)",
        "CPIC (2601)",
        "AIA (1299)",
        "MANULIFE-S (945)",
        "FWD (1828)"
      ],
      "tickers": [
        "2378",
        "2601",
        "1299",
        "945",
        "1828"
      ],
      "scores": [
        68.60374414976599,
        97.46489859594384,
        99.02496099843994,
        60.14040561622465,
        76.87207488299532
      ],
      "is_target": [
        true,
        false,
        false,
        false,
        false
      ],
      "adv": [
        9435015.0,
        459413263.99999994,
        2330915428.375,
        3587050.0,
        9685898.0
      ],
      "total": 2564
    },
    "market_comparison": {
      "sector_name": "Insurance",
      "sector_count": 21,
      "market_count": 2564,
      "company": {
        "volatility": 0.36188581876310444,
        "adv": 9435015.0,
        "spread_pct": 0.0033094229828760447,
        "turnover_ratio": 3.0987177416053996e-05,
        "amihud": 1.3596912281424743e-09,
        "trades": 271.0
      },
      "market": {
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.7654109466214373,
          "median": 0.6259439370114613,
          "min": 0.0,
          "max": 24.76952454360446,
          "p5": 0.23781872163080933,
          "p95": 1.6573761973506673,
          "count": 2561
        },
        "adv": {
          "direction": "higher_is_better",
          "mean": 60683164.259191625,
          "median": 210592.5,
          "min": 0.0,
          "max": 13434176175.0,
          "p5": 0.0,
          "p95": 241123160.66199997,
          "count": 2564
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.04306644394380114,
          "median": 0.02933505699852,
          "min": 0.0005566825134406019,
          "max": 0.3826262083780881,
          "p5": 0.0014449424597040273,
          "p95": 0.13484892201060472,
          "count": 2564
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.003815532707975971,
          "median": 0.0008717585801998126,
          "min": 0.0,
          "max": 0.23562551439647736,
          "p5": 0.0,
          "p95": 0.015428896052880928,
          "count": 2545
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 6.321801310917604e-07,
          "median": 4.98405103668262e-08,
          "min": 0.0,
          "max": 2.2277917014758908e-05,
          "p5": 5.248965246085058e-11,
          "p95": 3.0007359699800055e-06,
          "count": 2561
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 1097.4278471138846,
          "median": 19.5,
          "min": 0.0,
          "max": 74478.0,
          "p5": 0.0,
          "p95": 6102.624999999996,
          "count": 2564
        }
      },
      "sector": {
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.4505624333588343,
          "median": 0.37212147311459254,
          "min": 0.22885375737585553,
          "max": 1.9789785227188692,
          "p5": 0.24697767399980397,
          "p95": 0.5972586568944221,
          "count": 21
        },
        "adv": {
          "direction": "higher_is_better",
          "mean": 398963609.56418484,
          "median": 30192159.785,
          "min": 0.0,
          "max": 2330915428.375,
          "p5": 21260.0,
          "p95": 2279375309.1000004,
          "count": 21
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.008982885818005252,
          "median": 0.0022431813643818627,
          "min": 0.0006787922622548757,
          "max": 0.05657905171784787,
          "p5": 0.0008458970714429544,
          "p95": 0.04068464391997677,
          "count": 21
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.0036804031715224604,
          "median": 0.003287655192358329,
          "min": 0.0,
          "max": 0.00981633989160146,
          "p5": 2.2882891042760654e-07,
          "p95": 0.009311897211264424,
          "count": 21
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 3.077562875417401e-08,
          "median": 4.5143335322185514e-10,
          "min": 5.24529039236037e-12,
          "max": 2.3096821877309703e-07,
          "p5": 5.825611603372586e-12,
          "p95": 1.7076502732240377e-07,
          "count": 21
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 5090.357142857143,
          "median": 1296.5,
          "min": 0.0,
          "max": 17238.0,
          "p5": 2.0,
          "p95": 16429.5,
          "count": 21
        }
      },
      "peers": {
        "adv": {
          "direction": "higher_is_better",
          "mean": 700900410.09375,
          "median": 234549580.99999997,
          "min": 3587050.0,
          "max": 2330915428.375,
          "p5": 4501877.2,
          "p95": 2050190103.7187493,
          "count": 4
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 7104.625,
          "median": 6155.5,
          "min": 62.0,
          "max": 16045.5,
          "p5": 186.35000000000002,
          "p95": 15351.675,
          "count": 4
        },
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.2925662512241909,
          "median": 0.2867827289996945,
          "min": 0.22885375737585553,
          "max": 0.3678457895215191,
          "p5": 0.23240249940724594,
          "p95": 0.3608269341554308,
          "count": 4
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.0021990376886370953,
          "median": 0.0017772485172121673,
          "min": 0.0006787922622548757,
          "max": 0.004562861457869171,
          "p5": 0.0007508812528680758,
          "p95": 0.004237698964401014,
          "count": 4
        },
        "spread_ticks": {
          "direction": "neutral",
          "mean": 3.3154081493520455,
          "median": 2.644641770554995,
          "min": 1.120157495877919,
          "max": 6.852191560420273,
          "p5": 1.1931844992840221,
          "p95": 6.3767047297359385,
          "count": 4
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 8.602003515907258e-10,
          "median": 4.628445839483635e-10,
          "min": 5.825611603372586e-12,
          "max": 2.5092866268628036e-09,
          "p5": 9.129266045394489e-12,
          "p95": 2.2675695118353636e-09,
          "count": 4
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.0026034907674461014,
          "median": 0.0019962208718874884,
          "min": 7.289126006181001e-06,
          "max": 0.006414232200003247,
          "p5": 0.0001695797370916598,
          "p95": 0.005887579651582599,
          "count": 4
        }
      }
    },
    "returns": [
      {
        "horizon": "1W",
        "stock": 0.017707362534948645,
        "market": 0.0006748308677375636,
        "sector": 0.006555844242801756,
        "peers": -0.003930066675829957
      },
      {
        "horizon": "1M",
        "stock": 0.0985915492957743,
        "market": -0.023116963196228246,
        "sector": -0.06431565583959131,
        "peers": -0.023789702118320988
      },
      {
        "horizon": "3M",
        "stock": -0.07848101265822804,
        "market": -0.013505515431773918,
        "sector": -0.14704523748655807,
        "peers": -0.06461507627549723
      },
      {
        "horizon": "6M",
        "stock": -0.08542713567839266,
        "market": 0.06483113675813645,
        "sector": -0.19634788457856267,
        "peers": -0.09055174646778896
      },
      {
        "horizon": "LAST_YEAR",
        "stock": null,
        "market": null,
        "sector": null,
        "peers": null
      }
    ],
    "total_returns": null,
    "market_performance": {
      "basis": "calendar_month_compounded_daily_price_returns",
      "window_note": "Best and worst months are detected from each security's maximum available daily close history up to the report as-of date. Stock and peer rows use OHLCV close-to-close price returns; the S-REIT row uses the SGX iEdge S-REIT Index from market.index_prices.",
      "window_start": "2025-01-02",
      "window_end": "2026-07-10",
      "rows": [
        {
          "key": "listing_534129733",
          "name": "PRU",
          "stock_code": "2378",
          "label": "PRU",
          "is_target": true,
          "is_index": false,
          "best_month": {
            "value": 0.21094312455003572,
            "month": "Mar 2025",
            "available": true,
            "n_months": 19
          },
          "worst_month": {
            "value": -0.10640066500415646,
            "month": "Mar 2026",
            "available": true,
            "n_months": 19
          },
          "history_window": {
            "start_date": "2025-01-02",
            "end_date": "2026-07-10",
            "n_obs": 366
          }
        },
        {
          "key": "listing_534129636",
          "name": "CPIC",
          "stock_code": "2601",
          "label": "CPIC",
          "is_target": false,
          "is_index": false,
          "best_month": {
            "value": 0.1787709497206702,
            "month": "Jul 2025",
            "available": true,
            "n_months": 19
          },
          "worst_month": {
            "value": -0.14449395289624445,
            "month": "Jun 2026",
            "available": true,
            "n_months": 19
          },
          "history_window": {
            "start_date": "2025-01-02",
            "end_date": "2026-07-10",
            "n_obs": 366
          }
        },
        {
          "key": "listing_534130087",
          "name": "AIA",
          "stock_code": "1299",
          "label": "AIA",
          "is_target": false,
          "is_index": false,
          "best_month": {
            "value": 0.1307884856070085,
            "month": "Jan 2026",
            "available": true,
            "n_months": 19
          },
          "worst_month": {
            "value": -0.13130699088145859,
            "month": "Jun 2026",
            "available": true,
            "n_months": 19
          },
          "history_window": {
            "start_date": "2025-01-02",
            "end_date": "2026-07-10",
            "n_obs": 366
          }
        },
        {
          "key": "listing_534130284",
          "name": "MANULIFE-S",
          "stock_code": "945",
          "label": "MANULIFE-S",
          "is_target": false,
          "is_index": false,
          "best_month": {
            "value": 0.12951807228915646,
            "month": "Apr 2026",
            "available": true,
            "n_months": 19
          },
          "worst_month": {
            "value": -0.06346967559943584,
            "month": "Mar 2026",
            "available": true,
            "n_months": 19
          },
          "history_window": {
            "start_date": "2025-01-02",
            "end_date": "2026-07-10",
            "n_obs": 366
          }
        },
        {
          "key": "listing_772037047",
          "name": "FWD",
          "stock_code": "1828",
          "label": "FWD",
          "is_target": false,
          "is_index": false,
          "best_month": {
            "value": 0.14389610389610374,
            "month": "Aug 2025",
            "available": true,
            "n_months": 13
          },
          "worst_month": {
            "value": -0.1789189189189192,
            "month": "Mar 2026",
            "available": true,
            "n_months": 13
          },
          "history_window": {
            "start_date": "2025-07-07",
            "end_date": "2026-07-10",
            "n_obs": 243
          }
        }
      ]
    },
    "drivers": {
      "share_market": 0.6049992321895827,
      "share_sector": 0.3753500135947343,
      "share_idio": 0.019650754215682867,
      "beta_market": -2.8394946753462724,
      "beta_sector": 1.7277647559851212,
      "driver_model": {
        "valid": true,
        "model_method": "ols_with_hmm_jump_regimes",
        "regime_method": "hmm_jump_aware",
        "estimation_window_days": 251,
        "reporting_window_days": 63,
        "available_history_days": 251,
        "n_regimes": 4,
        "current_regime": 2,
        "current_regime_label": "Stressed / Illiquid",
        "current_regime_probability": 0.9999991891244512,
        "current_regime_probability_display": ">99.9%",
        "current_probability_basis": "filtered",
        "historical_probability_basis": "smoothed",
        "current_driver_mix": {
          "market_share": {
            "median": 0.6049992321895827,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "60.5%",
            "display_range": null,
            "display_text": "60.5%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "share_pct",
            "value_pct": 60.5,
            "plain_english": "Market explains about 60.5% of price moves in the current state."
          },
          "sector_share": {
            "median": 0.3753500135947343,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "37.5%",
            "display_range": null,
            "display_text": "37.5%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "share_pct",
            "value_pct": 37.5,
            "plain_english": "Sector explains about 37.5% of price moves in the current state."
          },
          "company_share": {
            "median": 0.019650754215682867,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "2.0%",
            "display_range": null,
            "display_text": "2.0%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "share_pct",
            "value_pct": 2.0,
            "plain_english": "Company-specific explains about 2.0% of price moves in the current state."
          },
          "basis": "current_state"
        },
        "current_sensitivities": {
          "beta_market": {
            "median": -2.8394946753462724,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "-2.84",
            "display_range": null,
            "display_text": "-2.84",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "beta",
            "strength_label": "High",
            "plain_english": "High market link: a 1% market move has lined up with about a 2.84% stock move in the opposite direction in this state.",
            "value_num": -2.84
          },
          "beta_stock_lag": {
            "median": 0.15822685193819677,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "0.16",
            "display_range": null,
            "display_text": "0.16",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "lag_beta",
            "value_num": 0.16
          },
          "beta_sector": {
            "median": 1.7277647559851212,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "1.73",
            "display_range": null,
            "display_text": "1.73",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "beta",
            "strength_label": "High",
            "plain_english": "High sector link: a 1% sector move has lined up with about a 1.73% stock move in the same direction in this state.",
            "value_num": 1.73
          },
          "beta_market_lag": {
            "median": -0.8396467354231927,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "-0.84",
            "display_range": null,
            "display_text": "-0.84",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "lag_beta",
            "value_num": -0.84
          },
          "beta_sector_lag": {
            "median": -0.07855177105616969,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "-0.08",
            "display_range": null,
            "display_text": "-0.08",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "lag_beta",
            "value_num": -0.08
          },
          "posterior_source": null,
          "intervals_collapsed": false,
          "confidence_label": "High, limited history",
          "confidence_note": "Based on 251 trading days relative to the 252-day target."
        },
        "rolling_windows": {},
        "monthly_history": [
          {
            "month_key": "2025-06",
            "month_label": "June 2025",
            "month_short_label": "Jun",
            "period_label": "2025-06-24 to 2025-06-30",
            "n_obs": 5,
            "partial_month": true,
            "dominant_driver": "sector",
            "dominant_driver_label": "Sector",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.4614980176922014,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "46.1%",
              "display_range": null,
              "display_text": "46.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
              "kind": "share_pct",
              "value_pct": 46.1,
              "plain_english": "Sector explains about 46.1% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.4481359055212802,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "44.8%",
                "display_range": null,
                "display_text": "44.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
                "kind": "share_pct",
                "value_pct": 44.8,
                "plain_english": "Market explains about 44.8% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.4614980176922014,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "46.1%",
                "display_range": null,
                "display_text": "46.1%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
                "kind": "share_pct",
                "value_pct": 46.1,
                "plain_english": "Sector explains about 46.1% of price moves in the current state."
              },
              "company_share": {
                "median": 0.09036607678651838,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "9.0%",
                "display_range": null,
                "display_text": "9.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
                "kind": "share_pct",
                "value_pct": 9.0,
                "plain_english": "Company-specific explains about 9.0% of price moves in the current state."
              }
            },
            "summary": "Jun: Mostly sector-driven, though based on only 5 trading days."
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
              "median": 0.5054295233700818,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "50.5%",
              "display_range": null,
              "display_text": "50.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 50.5,
              "plain_english": "Company-specific explains about 50.5% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.3494437387752558,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "34.9%",
                "display_range": null,
                "display_text": "34.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 34.9,
                "plain_english": "Market explains about 34.9% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.14512673785466226,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "14.5%",
                "display_range": null,
                "display_text": "14.5%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 14.5,
                "plain_english": "Sector explains about 14.5% of price moves in the current state."
              },
              "company_share": {
                "median": 0.5054295233700818,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "50.5%",
                "display_range": null,
                "display_text": "50.5%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 50.5,
                "plain_english": "Company-specific explains about 50.5% of price moves in the current state."
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
            "dominant_driver": "company",
            "dominant_driver_label": "Company-specific",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.65166978841492,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "65.2%",
              "display_range": null,
              "display_text": "65.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 65.2,
              "plain_english": "Company-specific explains about 65.2% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.3002138426012119,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "30.0%",
                "display_range": null,
                "display_text": "30.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 30.0,
                "plain_english": "Market explains about 30.0% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.04811636898386811,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "4.8%",
                "display_range": null,
                "display_text": "4.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 4.8,
                "plain_english": "Sector explains about 4.8% of price moves in the current state."
              },
              "company_share": {
                "median": 0.65166978841492,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "65.2%",
                "display_range": null,
                "display_text": "65.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 65.2,
                "plain_english": "Company-specific explains about 65.2% of price moves in the current state."
              }
            },
            "summary": "Aug: Still clearly company-driven."
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
              "median": 0.5927672802826431,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "59.3%",
              "display_range": null,
              "display_text": "59.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 59.3,
              "plain_english": "Company-specific explains about 59.3% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.12568359055849787,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "12.6%",
                "display_range": null,
                "display_text": "12.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 12.6,
                "plain_english": "Market explains about 12.6% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.28154912915885905,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "28.2%",
                "display_range": null,
                "display_text": "28.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 28.2,
                "plain_english": "Sector explains about 28.2% of price moves in the current state."
              },
              "company_share": {
                "median": 0.5927672802826431,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "59.3%",
                "display_range": null,
                "display_text": "59.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 59.3,
                "plain_english": "Company-specific explains about 59.3% of price moves in the current state."
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
            "dominant_driver": "market",
            "dominant_driver_label": "Market",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.48691285678975366,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "48.7%",
              "display_range": null,
              "display_text": "48.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 48.7,
              "plain_english": "Market explains about 48.7% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.48691285678975366,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "48.7%",
                "display_range": null,
                "display_text": "48.7%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 48.7,
                "plain_english": "Market explains about 48.7% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.13222415962862155,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "13.2%",
                "display_range": null,
                "display_text": "13.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 13.2,
                "plain_english": "Sector explains about 13.2% of price moves in the current state."
              },
              "company_share": {
                "median": 0.38086298358162496,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "38.1%",
                "display_range": null,
                "display_text": "38.1%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 38.1,
                "plain_english": "Company-specific explains about 38.1% of price moves in the current state."
              }
            },
            "summary": "Oct: Mostly market-driven."
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
              "median": 0.5647317635382599,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "56.5%",
              "display_range": null,
              "display_text": "56.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 56.5,
              "plain_english": "Market explains about 56.5% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.5647317635382599,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "56.5%",
                "display_range": null,
                "display_text": "56.5%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 56.5,
                "plain_english": "Market explains about 56.5% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.14495541048124663,
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
                "median": 0.2903128259804934,
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
                "plain_english": "Company-specific explains about 29.0% of price moves in the current state."
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
            "dominant_driver": "company",
            "dominant_driver_label": "Company-specific",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.6335823999366534,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "63.4%",
              "display_range": null,
              "display_text": "63.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
              "kind": "share_pct",
              "value_pct": 63.4,
              "plain_english": "Company-specific explains about 63.4% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.22547128443555933,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "22.5%",
                "display_range": null,
                "display_text": "22.5%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
                "kind": "share_pct",
                "value_pct": 22.5,
                "plain_english": "Market explains about 22.5% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.1409463156277872,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "14.1%",
                "display_range": null,
                "display_text": "14.1%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
                "kind": "share_pct",
                "value_pct": 14.1,
                "plain_english": "Sector explains about 14.1% of price moves in the current state."
              },
              "company_share": {
                "median": 0.6335823999366534,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "63.4%",
                "display_range": null,
                "display_text": "63.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
                "kind": "share_pct",
                "value_pct": 63.4,
                "plain_english": "Company-specific explains about 63.4% of price moves in the current state."
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
              "median": 0.4785126833782454,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "47.9%",
              "display_range": null,
              "display_text": "47.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 47.9,
              "plain_english": "Company-specific explains about 47.9% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.14853676995054788,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "14.9%",
                "display_range": null,
                "display_text": "14.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 14.9,
                "plain_english": "Market explains about 14.9% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.37295054667120686,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "37.3%",
                "display_range": null,
                "display_text": "37.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 37.3,
                "plain_english": "Sector explains about 37.3% of price moves in the current state."
              },
              "company_share": {
                "median": 0.4785126833782454,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "47.9%",
                "display_range": null,
                "display_text": "47.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 47.9,
                "plain_english": "Company-specific explains about 47.9% of price moves in the current state."
              }
            },
            "summary": "Jan: Mostly company-driven."
          },
          {
            "month_key": "2026-02",
            "month_label": "February 2026",
            "month_short_label": "Feb",
            "period_label": "2026-02-02 to 2026-02-27",
            "n_obs": 17,
            "partial_month": false,
            "dominant_driver": "market",
            "dominant_driver_label": "Market",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.41091720809650517,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "41.1%",
              "display_range": null,
              "display_text": "41.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
              "kind": "share_pct",
              "value_pct": 41.1,
              "plain_english": "Market explains about 41.1% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.41091720809650517,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "41.1%",
                "display_range": null,
                "display_text": "41.1%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
                "kind": "share_pct",
                "value_pct": 41.1,
                "plain_english": "Market explains about 41.1% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.2843924922862215,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "28.4%",
                "display_range": null,
                "display_text": "28.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
                "kind": "share_pct",
                "value_pct": 28.4,
                "plain_english": "Sector explains about 28.4% of price moves in the current state."
              },
              "company_share": {
                "median": 0.3046902996172734,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "30.5%",
                "display_range": null,
                "display_text": "30.5%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
                "kind": "share_pct",
                "value_pct": 30.5,
                "plain_english": "Company-specific explains about 30.5% of price moves in the current state."
              }
            },
            "summary": "Feb: More mixed, though market-driven still has the largest share."
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
              "median": 0.4087274421418909,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "40.9%",
              "display_range": null,
              "display_text": "40.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 40.9,
              "plain_english": "Market explains about 40.9% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.4087274421418909,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "40.9%",
                "display_range": null,
                "display_text": "40.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 40.9,
                "plain_english": "Market explains about 40.9% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.3596265749733328,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "36.0%",
                "display_range": null,
                "display_text": "36.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 36.0,
                "plain_english": "Sector explains about 36.0% of price moves in the current state."
              },
              "company_share": {
                "median": 0.2316459828847763,
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
                "plain_english": "Company-specific explains about 23.2% of price moves in the current state."
              }
            },
            "summary": "Mar: More mixed, though market-driven still has the largest share."
          },
          {
            "month_key": "2026-04",
            "month_label": "April 2026",
            "month_short_label": "Apr",
            "period_label": "2026-04-01 to 2026-04-30",
            "n_obs": 19,
            "partial_month": false,
            "dominant_driver": "market",
            "dominant_driver_label": "Market",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.4991300096904983,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "49.9%",
              "display_range": null,
              "display_text": "49.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
              "kind": "share_pct",
              "value_pct": 49.9,
              "plain_english": "Market explains about 49.9% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.4991300096904983,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "49.9%",
                "display_range": null,
                "display_text": "49.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
                "kind": "share_pct",
                "value_pct": 49.9,
                "plain_english": "Market explains about 49.9% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.24395848210669555,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "24.4%",
                "display_range": null,
                "display_text": "24.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
                "kind": "share_pct",
                "value_pct": 24.4,
                "plain_english": "Sector explains about 24.4% of price moves in the current state."
              },
              "company_share": {
                "median": 0.25691150820280617,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "25.7%",
                "display_range": null,
                "display_text": "25.7%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
                "kind": "share_pct",
                "value_pct": 25.7,
                "plain_english": "Company-specific explains about 25.7% of price moves in the current state."
              }
            },
            "summary": "Apr: Mostly market-driven."
          },
          {
            "month_key": "2026-05",
            "month_label": "May 2026",
            "month_short_label": "May",
            "period_label": "2026-05-04 to 2026-05-29",
            "n_obs": 19,
            "partial_month": true,
            "dominant_driver": "company",
            "dominant_driver_label": "Company-specific",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.40471113292050437,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "40.5%",
              "display_range": null,
              "display_text": "40.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
              "kind": "share_pct",
              "value_pct": 40.5,
              "plain_english": "Company-specific explains about 40.5% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.24962796452940275,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "25.0%",
                "display_range": null,
                "display_text": "25.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
                "kind": "share_pct",
                "value_pct": 25.0,
                "plain_english": "Market explains about 25.0% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.3456609025500928,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "34.6%",
                "display_range": null,
                "display_text": "34.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
                "kind": "share_pct",
                "value_pct": 34.6,
                "plain_english": "Sector explains about 34.6% of price moves in the current state."
              },
              "company_share": {
                "median": 0.40471113292050437,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "40.5%",
                "display_range": null,
                "display_text": "40.5%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
                "kind": "share_pct",
                "value_pct": 40.5,
                "plain_english": "Company-specific explains about 40.5% of price moves in the current state."
              }
            },
            "summary": "May: More mixed, though company-driven still has the largest share."
          },
          {
            "month_key": "2026-06",
            "month_label": "June 2026",
            "month_short_label": "Jun",
            "period_label": "2026-06-01 to 2026-06-30",
            "n_obs": 21,
            "partial_month": false,
            "dominant_driver": "company",
            "dominant_driver_label": "Company-specific",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.6510373488803847,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "65.1%",
              "display_range": null,
              "display_text": "65.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 65.1,
              "plain_english": "Company-specific explains about 65.1% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.12234835155094716,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "12.2%",
                "display_range": null,
                "display_text": "12.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 12.2,
                "plain_english": "Market explains about 12.2% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.2266142995686683,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "22.7%",
                "display_range": null,
                "display_text": "22.7%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 22.7,
                "plain_english": "Sector explains about 22.7% of price moves in the current state."
              },
              "company_share": {
                "median": 0.6510373488803847,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "65.1%",
                "display_range": null,
                "display_text": "65.1%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 65.1,
                "plain_english": "Company-specific explains about 65.1% of price moves in the current state."
              }
            },
            "summary": "Jun: Still clearly company-driven."
          },
          {
            "month_key": "2026-07",
            "month_label": "July 2026",
            "month_short_label": "Jul",
            "period_label": "2026-07-02 to 2026-07-10",
            "n_obs": 7,
            "partial_month": true,
            "dominant_driver": "market",
            "dominant_driver_label": "Market",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.4743765937635683,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "47.4%",
              "display_range": null,
              "display_text": "47.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 7 trading days.",
              "kind": "share_pct",
              "value_pct": 47.4,
              "plain_english": "Market explains about 47.4% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.4743765937635683,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "47.4%",
                "display_range": null,
                "display_text": "47.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 7 trading days.",
                "kind": "share_pct",
                "value_pct": 47.4,
                "plain_english": "Market explains about 47.4% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.42919448215458167,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "42.9%",
                "display_range": null,
                "display_text": "42.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 7 trading days.",
                "kind": "share_pct",
                "value_pct": 42.9,
                "plain_english": "Sector explains about 42.9% of price moves in the current state."
              },
              "company_share": {
                "median": 0.0964289240818501,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "9.6%",
                "display_range": null,
                "display_text": "9.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 7 trading days.",
                "kind": "share_pct",
                "value_pct": 9.6,
                "plain_english": "Company-specific explains about 9.6% of price moves in the current state."
              }
            },
            "summary": "Jul: Mostly market-driven, though based on only 7 trading days."
          }
        ],
        "regimes": [
          {
            "id": 0,
            "label": "Calm / Liquid",
            "pct_time": 0.27611688211244817,
            "expected_duration_days": 8.72943458936433,
            "current_probability": 8.108748662275551e-07,
            "current_probability_display": "<0.1%",
            "current_probability_basis": "filtered",
            "n_days_effective": 69.3053374102245,
            "volatility": {
              "median": 0.01174669545988608,
              "low": 0.01174669545988608,
              "high": 0.01174669545988608
            },
            "volatility_label": "Calm / Liquid",
            "jump_probability": 0.22140501822177386,
            "jump_rate": 0.05771535288285429,
            "risk_score": 0.09636405302551113,
            "metrics": {
              "rolling_vol_10d": 0.013221782761109316,
              "downside_vol_10d": 0.006762684474718974,
              "drawdown_21d": 0.01751294810177373,
              "amihud_stress": 0.12333847410375143,
              "spread_rel": 27.2883115639542,
              "spread_ticks": 3.4819418741103316,
              "log_notional": 15.880736528830658,
              "log_trade_count": 5.557487960465699
            }
          },
          {
            "id": 1,
            "label": "Normal / Active",
            "pct_time": 0.2956406492644645,
            "expected_duration_days": 3.1172795448780737,
            "current_probability": 3.456886017198692e-21,
            "current_probability_display": "<0.1%",
            "current_probability_basis": "filtered",
            "n_days_effective": 74.20580296538058,
            "volatility": {
              "median": 0.007448628267091885,
              "low": 0.007448628267091885,
              "high": 0.007448628267091885
            },
            "volatility_label": "Normal / Active",
            "jump_probability": 0.14660506412157406,
            "jump_rate": 9.662297498410176e-18,
            "risk_score": 0.24223183199766474,
            "metrics": {
              "rolling_vol_10d": 0.017316313656480595,
              "downside_vol_10d": 0.008479232036661132,
              "drawdown_21d": 0.03105897113376099,
              "amihud_stress": 0.074333341043624,
              "spread_rel": 35.464805121507226,
              "spread_ticks": 4.2657016507412235,
              "log_notional": 15.885917301225494,
              "log_trade_count": 5.571492992082682
            }
          },
          {
            "id": 2,
            "label": "Stressed / Illiquid",
            "pct_time": 0.20561202990242133,
            "expected_duration_days": 1.8298682838206493,
            "current_probability": 0.9999991891244512,
            "current_probability_display": ">99.9%",
            "current_probability_basis": "filtered",
            "n_days_effective": 51.608619505507754,
            "volatility": {
              "median": 0.027642774090180674,
              "low": 0.027642774090180674,
              "high": 0.027642774090180674
            },
            "volatility_label": "Stressed / Illiquid",
            "jump_probability": 0.3406607097480544,
            "jump_rate": 0.13602489167013562,
            "risk_score": 0.483989465779863,
            "metrics": {
              "rolling_vol_10d": 0.019557533200824682,
              "downside_vol_10d": 0.009456070824095138,
              "drawdown_21d": 0.03496534002340606,
              "amihud_stress": 0.2052168970456058,
              "spread_rel": 27.674105717652445,
              "spread_ticks": 3.307508887599394,
              "log_notional": 16.384382115712523,
              "log_trade_count": 5.888420397020878
            }
          },
          {
            "id": 3,
            "label": "Jump / Tail Shock",
            "pct_time": 0.22263043872066599,
            "expected_duration_days": 18.586746607961267,
            "current_probability": 6.824704893333518e-13,
            "current_probability_display": "<0.1%",
            "current_probability_basis": "filtered",
            "n_days_effective": 55.880240118887166,
            "volatility": {
              "median": 0.02636141898605917,
              "low": 0.02636141898605917,
              "high": 0.02636141898605917
            },
            "volatility_label": "Jump / Tail Shock",
            "jump_probability": 0.2642115209808701,
            "jump_rate": 0.08911846310299719,
            "risk_score": 0.9015112540009089,
            "metrics": {
              "rolling_vol_10d": 0.026355721457824968,
              "downside_vol_10d": 0.01692117094073311,
              "drawdown_21d": 0.0949866011333817,
              "amihud_stress": 0.20804701989661156,
              "spread_rel": 40.72951839289389,
              "spread_ticks": 4.7215660272468245,
              "log_notional": 15.925090262581989,
              "log_trade_count": 5.579776310156814
            }
          }
        ],
        "transitions": {
          "mean": [
            [
              0.8854450434603899,
              0.00014485385624318336,
              0.11426610338551553,
              0.0001439992978514564
            ],
            [
              0.014334414718310661,
              0.6792074674075748,
              0.266216155362562,
              0.040241962511552716
            ],
            [
              0.13554865910127323,
              0.41069532283860627,
              0.4535125785599916,
              0.00024343950012884933
            ],
            [
              0.00017850683347907242,
              0.05343936709589751,
              0.000183903277381565,
              0.9461982227932418
            ]
          ],
          "low": [],
          "high": [],
          "counts": [
            [
              62.0,
              0.0,
              8.0,
              0.0
            ],
            [
              1.0,
              52.0,
              19.0,
              3.0
            ],
            [
              7.0,
              20.0,
              22.0,
              0.0
            ],
            [
              0.0,
              3.0,
              0.0,
              53.0
            ]
          ]
        },
        "current_state_is_transition": false,
        "state_probabilities": [
          {
            "id": 0,
            "label": "Calm / Liquid",
            "probability": 8.108748662275551e-07,
            "probability_display": "<0.1%",
            "basis": "filtered"
          },
          {
            "id": 1,
            "label": "Normal / Active",
            "probability": 3.456886017198692e-21,
            "probability_display": "<0.1%",
            "basis": "filtered"
          },
          {
            "id": 2,
            "label": "Stressed / Illiquid",
            "probability": 0.9999991891244512,
            "probability_display": ">99.9%",
            "basis": "filtered"
          },
          {
            "id": 3,
            "label": "Jump / Tail Shock",
            "probability": 6.824704893333518e-13,
            "probability_display": "<0.1%",
            "basis": "filtered"
          }
        ],
        "jump_risk": {
          "current_probability": 0.34066061304655926,
          "current_score": 1.64050155500402,
          "current_flag": false,
          "jump_threshold_score": 2.5,
          "method": "robust_residual_and_return_jump_overlay",
          "model_definition": "jump_score_feature_overlay"
        },
        "model_selection": {
          "chosen": 4,
          "criterion": "bic_with_min_state_support",
          "bic": 11681.736161701148,
          "loglik": -5313.187325163489,
          "n_params": 191,
          "bic_delta_vs_next_best": 199.0171719818518,
          "candidates": [
            {
              "k": 2,
              "valid": true,
              "reason": "ok",
              "bic": 12343.0724400894,
              "loglik": -5920.128111314204,
              "n_params": 91,
              "converged": true,
              "iterations": 11,
              "best_seed": 2027,
              "seed_runs": [
                {
                  "seed": 42,
                  "k": 2,
                  "valid": true,
                  "reason": "ok",
                  "bic": 12351.920745222158,
                  "loglik": -5924.552263880583,
                  "n_params": 91,
                  "converged": true,
                  "iterations": 12
                },
                {
                  "seed": 1337,
                  "k": 2,
                  "valid": true,
                  "reason": "ok",
                  "bic": 12343.072471592412,
                  "loglik": -5920.12812706571,
                  "n_params": 91,
                  "converged": true,
                  "iterations": 13
                },
                {
                  "seed": 2027,
                  "k": 2,
                  "valid": true,
                  "reason": "ok",
                  "bic": 12343.0724400894,
                  "loglik": -5920.128111314204,
                  "n_params": 91,
                  "converged": true,
                  "iterations": 11
                }
              ]
            },
            {
              "k": 3,
              "valid": true,
              "reason": "ok",
              "bic": 11880.753333683,
              "loglik": -5553.594961102275,
              "n_params": 140,
              "converged": true,
              "iterations": 27,
              "best_seed": 2027,
              "seed_runs": [
                {
                  "seed": 42,
                  "k": 3,
                  "valid": true,
                  "reason": "ok",
                  "bic": 11880.753337217848,
                  "loglik": -5553.594962869699,
                  "n_params": 140,
                  "converged": true,
                  "iterations": 30
                },
                {
                  "seed": 1337,
                  "k": 3,
                  "valid": true,
                  "reason": "ok",
                  "bic": 11880.753344441708,
                  "loglik": -5553.594966481629,
                  "n_params": 140,
                  "converged": true,
                  "iterations": 38
                },
                {
                  "seed": 2027,
                  "k": 3,
                  "valid": true,
                  "reason": "ok",
                  "bic": 11880.753333683,
                  "loglik": -5553.594961102275,
                  "n_params": 140,
                  "converged": true,
                  "iterations": 27
                }
              ]
            },
            {
              "k": 4,
              "valid": true,
              "reason": "ok",
              "bic": 11681.736161701148,
              "loglik": -5313.187325163489,
              "n_params": 191,
              "converged": true,
              "iterations": 50,
              "best_seed": 1337,
              "seed_runs": [
                {
                  "seed": 42,
                  "k": 4,
                  "valid": true,
                  "reason": "ok",
                  "bic": 11681.736199231758,
                  "loglik": -5313.187343928794,
                  "n_params": 191,
                  "converged": true,
                  "iterations": 37
                },
                {
                  "seed": 1337,
                  "k": 4,
                  "valid": true,
                  "reason": "ok",
                  "bic": 11681.736161701148,
                  "loglik": -5313.187325163489,
                  "n_params": 191,
                  "converged": true,
                  "iterations": 50
                },
                {
                  "seed": 2027,
                  "k": 4,
                  "valid": true,
                  "reason": "ok",
                  "bic": 11681.736191813725,
                  "loglik": -5313.187340219777,
                  "n_params": 191,
                  "converged": true,
                  "iterations": 39
                }
              ]
            }
          ],
          "seed_stability": {
            "seeds_tested": [
              42,
              1337,
              2027
            ],
            "valid_seed_count": 3,
            "selected_by_seed": [
              {
                "seed": 42,
                "selected_states": 4,
                "bic": 11681.736199231758,
                "valid": true,
                "reason": null
              },
              {
                "seed": 1337,
                "selected_states": 4,
                "bic": 11681.736161701148,
                "valid": true,
                "reason": null
              },
              {
                "seed": 2027,
                "selected_states": 4,
                "bic": 11681.736191813725,
                "valid": true,
                "reason": null
              }
            ],
            "selected_state_counts": {
              "4": 3
            },
            "selected_state_share": 1.0,
            "stable": true,
            "majority_support": true
          },
          "rolling_window_stability": {
            "status": "mixed",
            "minimum_history_days": 160,
            "windows": [
              {
                "window_days": 126,
                "candidate_states": [
                  2,
                  3,
                  4
                ],
                "selected_states": 3,
                "bic_by_state": {
                  "2": 6814.627512101873,
                  "3": 6624.93564694188,
                  "4": 6644.607999865784
                },
                "valid": true
              },
              {
                "window_days": 189,
                "candidate_states": [
                  2,
                  3,
                  4
                ],
                "selected_states": 4,
                "bic_by_state": {
                  "2": 9751.065787982263,
                  "3": 9540.222984162905,
                  "4": 9277.680033419667
                },
                "valid": true
              },
              {
                "window_days": 251,
                "candidate_states": [
                  2,
                  3,
                  4
                ],
                "selected_states": 4,
                "bic_by_state": {
                  "2": 12351.920775664292,
                  "3": 11880.753388330648,
                  "4": 11681.736199231758
                },
                "valid": true
              }
            ],
            "stable": false
          }
        },
        "robustness_diagnostics": {
          "history_used_days": 251,
          "n_features": 22,
          "candidate_states": [
            2,
            3,
            4
          ],
          "selected_states": 4,
          "bic_delta_vs_next_best": 199.0171719818518,
          "state_count_interpretation": "251 observations allowed the current rule to test up to 4 states; BIC preferred 4 with a 199.02 improvement versus the next best valid state count.",
          "parameter_count": {
            "formula": "k^2 - 1 + 2*k*d",
            "n_parameters": 191,
            "observations_per_parameter": 1.3141361256544504,
            "parameter_pressure_label": "parameter_heavy"
          },
          "state_occupancy": {
            "min_effective_days_required": 7.529999999999999,
            "min_effective_days_observed": 51.608619505507754,
            "passes": true,
            "states": [
              {
                "id": 0,
                "label": "Calm / Liquid",
                "effective_days": 69.3053374102245,
                "pct_time": 0.27611688211244817,
                "passes_min_support": true
              },
              {
                "id": 1,
                "label": "Normal / Active",
                "effective_days": 74.20580296538058,
                "pct_time": 0.2956406492644645,
                "passes_min_support": true
              },
              {
                "id": 2,
                "label": "Stressed / Illiquid",
                "effective_days": 51.608619505507754,
                "pct_time": 0.20561202990242133,
                "passes_min_support": true
              },
              {
                "id": 3,
                "label": "Jump / Tail Shock",
                "effective_days": 55.880240118887166,
                "pct_time": 0.22263043872066599,
                "passes_min_support": true
              }
            ]
          },
          "transition_diagnostics": {
            "self_transition_probabilities": [
              0.8854450434603899,
              0.6792074674075748,
              0.4535125785599916,
              0.9461982227932418
            ],
            "expected_duration_days": [
              8.72943458936433,
              3.1172795448780737,
              1.8298682838206493,
              18.586746607961267
            ],
            "nearly_absorbing_state_ids": [],
            "fast_switching_state_ids": [
              2
            ],
            "warnings": [
              "fast_switching_states"
            ]
          },
          "seed_stability": {
            "seeds_tested": [
              42,
              1337,
              2027
            ],
            "valid_seed_count": 3,
            "selected_by_seed": [
              {
                "seed": 42,
                "selected_states": 4,
                "bic": 11681.736199231758,
                "valid": true,
                "reason": null
              },
              {
                "seed": 1337,
                "selected_states": 4,
                "bic": 11681.736161701148,
                "valid": true,
                "reason": null
              },
              {
                "seed": 2027,
                "selected_states": 4,
                "bic": 11681.736191813725,
                "valid": true,
                "reason": null
              }
            ],
            "selected_state_counts": {
              "4": 3
            },
            "selected_state_share": 1.0,
            "stable": true,
            "majority_support": true
          },
          "rolling_window_stability": {
            "status": "mixed",
            "minimum_history_days": 160,
            "windows": [
              {
                "window_days": 126,
                "candidate_states": [
                  2,
                  3,
                  4
                ],
                "selected_states": 3,
                "bic_by_state": {
                  "2": 6814.627512101873,
                  "3": 6624.93564694188,
                  "4": 6644.607999865784
                },
                "valid": true
              },
              {
                "window_days": 189,
                "candidate_states": [
                  2,
                  3,
                  4
                ],
                "selected_states": 4,
                "bic_by_state": {
                  "2": 9751.065787982263,
                  "3": 9540.222984162905,
                  "4": 9277.680033419667
                },
                "valid": true
              },
              {
                "window_days": 251,
                "candidate_states": [
                  2,
                  3,
                  4
                ],
                "selected_states": 4,
                "bic_by_state": {
                  "2": 12351.920775664292,
                  "3": 11880.753388330648,
                  "4": 11681.736199231758
                },
                "valid": true
              }
            ],
            "stable": false
          },
          "feature_profile_by_state": [
            {
              "id": 0,
              "label": "Calm / Liquid",
              "risk_score": 0.09636405302551113,
              "jump_probability": 0.22140501822177386,
              "jump_rate": 0.05771535288285429,
              "rolling_vol_10d": 0.013221782761109316,
              "downside_vol_10d": 0.006762684474718974,
              "drawdown_21d": 0.01751294810177373,
              "amihud_stress": 0.12333847410375143,
              "spread_rel": 27.2883115639542,
              "spread_ticks": 3.4819418741103316,
              "log_notional": 15.880736528830658,
              "log_trade_count": 5.557487960465699
            },
            {
              "id": 1,
              "label": "Normal / Active",
              "risk_score": 0.24223183199766474,
              "jump_probability": 0.14660506412157406,
              "jump_rate": 9.662297498410176e-18,
              "rolling_vol_10d": 0.017316313656480595,
              "downside_vol_10d": 0.008479232036661132,
              "drawdown_21d": 0.03105897113376099,
              "amihud_stress": 0.074333341043624,
              "spread_rel": 35.464805121507226,
              "spread_ticks": 4.2657016507412235,
              "log_notional": 15.885917301225494,
              "log_trade_count": 5.571492992082682
            },
            {
              "id": 2,
              "label": "Stressed / Illiquid",
              "risk_score": 0.483989465779863,
              "jump_probability": 0.3406607097480544,
              "jump_rate": 0.13602489167013562,
              "rolling_vol_10d": 0.019557533200824682,
              "downside_vol_10d": 0.009456070824095138,
              "drawdown_21d": 0.03496534002340606,
              "amihud_stress": 0.2052168970456058,
              "spread_rel": 27.674105717652445,
              "spread_ticks": 3.307508887599394,
              "log_notional": 16.384382115712523,
              "log_trade_count": 5.888420397020878
            },
            {
              "id": 3,
              "label": "Jump / Tail Shock",
              "risk_score": 0.9015112540009089,
              "jump_probability": 0.2642115209808701,
              "jump_rate": 0.08911846310299719,
              "rolling_vol_10d": 0.026355721457824968,
              "downside_vol_10d": 0.01692117094073311,
              "drawdown_21d": 0.0949866011333817,
              "amihud_stress": 0.20804701989661156,
              "spread_rel": 40.72951839289389,
              "spread_ticks": 4.7215660272468245,
              "log_notional": 15.925090262581989,
              "log_trade_count": 5.579776310156814
            }
          ],
          "jump_model_definition": {
            "type": "jump_score_feature_overlay",
            "method_name": "hmm_jump_aware",
            "description": "Jump score enters the HMM feature panel and current jump risk overlay; the likelihood is still diagonal Gaussian, not a full jump-diffusion emission model."
          },
          "probability_basis": {
            "current_state": "filtered_forward_probability",
            "historical_states": "smoothed_forward_backward_probability",
            "lookahead_note": "Current live monitoring uses filtered probabilities; smoothed probabilities are retained for retrospective historical charts."
          }
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
            "trade_date": "2026-06-26",
            "state": 2,
            "probabilities": [
              1.0500197034940023e-16,
              4.25311151984619e-12,
              0.9997916179893203,
              0.0002083820064265556
            ],
            "probability_basis": "smoothed",
            "filtered_probabilities": [
              7.134247155774456e-14,
              2.5755005668348517e-12,
              0.9983942192439654,
              0.0016057807533876975
            ],
            "jump_probability": 0.30976870001538426,
            "jump_score": 1.5533035923619745
          },
          {
            "trade_date": "2026-06-29",
            "state": 1,
            "probabilities": [
              1.1450424623414394e-09,
              0.9955612384679958,
              0.004438676169994974,
              8.421696669338257e-08
            ],
            "probability_basis": "smoothed",
            "filtered_probabilities": [
              2.0589012656641854e-07,
              0.9928398246393163,
              0.007158888694388268,
              1.0807761686776044e-06
            ],
            "jump_probability": 0.1322325378088754,
            "jump_score": 0.6140332562617581
          },
          {
            "trade_date": "2026-06-30",
            "state": 1,
            "probabilities": [
              1.8420088765551851e-09,
              0.9874725611020473,
              0.012527432711701954,
              4.344241811783996e-09
            ],
            "probability_basis": "smoothed",
            "filtered_probabilities": [
              4.313834388422992e-09,
              0.9926032259188922,
              0.007391999495757905,
              4.770271515439794e-06
            ],
            "jump_probability": 0.1378203455425977,
            "jump_score": 0.6556411550748412
          },
          {
            "trade_date": "2026-07-02",
            "state": 2,
            "probabilities": [
              2.159793720265458e-25,
              8.811995581095956e-40,
              0.9999905648648938,
              9.435135106165054e-06
            ],
            "probability_basis": "smoothed",
            "filtered_probabilities": [
              5.8864822065504e-22,
              5.328181286296295e-40,
              0.9999275384079019,
              7.246159209811259e-05
            ],
            "jump_probability": 0.649512762117573,
            "jump_score": 2.786433209064982
          },
          {
            "trade_date": "2026-07-03",
            "state": 1,
            "probabilities": [
              5.317988354913863e-10,
              0.9999436787863979,
              5.629145863358046e-05,
              2.922316975208682e-08
            ],
            "probability_basis": "smoothed",
            "filtered_probabilities": [
              2.278616655118193e-06,
              0.9999042667820942,
              9.308319578464794e-05,
              3.7140546601907596e-07
            ],
            "jump_probability": 0.1414002668855365,
            "jump_score": 0.6815580834426668
          },
          {
            "trade_date": "2026-07-06",
            "state": 1,
            "probabilities": [
              1.1199936919154056e-09,
              0.9999531054298649,
              4.671436463065915e-05,
              1.790855107789512e-07
            ],
            "probability_basis": "smoothed",
            "filtered_probabilities": [
              4.012204600273386e-06,
              0.9999164793925163,
              7.723198969534458e-05,
              2.276413188169158e-06
            ],
            "jump_probability": 0.11246973968516484,
            "jump_score": 0.4536883373814746
          },
          {
            "trade_date": "2026-07-07",
            "state": 1,
            "probabilities": [
              1.0734485153941584e-08,
              0.999847986131998,
              0.000152002877849702,
              2.5566712237774933e-10
            ],
            "probability_basis": "smoothed",
            "filtered_probabilities": [
              2.5009515762154937e-08,
              0.9999103723127805,
              8.923255743366936e-05,
              3.7012027006157867e-07
            ],
            "jump_probability": 0.09274159396237186,
            "jump_score": 0.26686065634152006
          },
          {
            "trade_date": "2026-07-08",
            "state": 2,
            "probabilities": [
              3.2284747767521884e-07,
              3.5227936044881055e-18,
              0.9999996770400525,
              1.1246974118011201e-10
            ],
            "probability_basis": "smoothed",
            "filtered_probabilities": [
              5.213824565455057e-08,
              2.502847402714591e-17,
              0.9999999004900885,
              4.737166594609047e-08
            ],
            "jump_probability": 0.38980505399125975,
            "jump_score": 1.8603202285722673
          },
          {
            "trade_date": "2026-07-09",
            "state": 0,
            "probabilities": [
              0.9461791694058724,
              0.008529018698004558,
              0.04529181189609683,
              2.6293850438945156e-14
            ],
            "probability_basis": "smoothed",
            "filtered_probabilities": [
              0.98431992712419,
              0.0038084244141953875,
              0.011871648444618702,
              1.6995922735678825e-11
            ],
            "jump_probability": 0.14170600214587684,
            "jump_score": 0.6837459202475179
          },
          {
            "trade_date": "2026-07-10",
            "state": 2,
            "probabilities": [
              8.108748662275551e-07,
              3.456886017198692e-21,
              0.9999991891244512,
              6.824704893333518e-13
            ],
            "probability_basis": "smoothed",
            "filtered_probabilities": [
              8.108748662275551e-07,
              3.456886017198692e-21,
              0.9999991891244512,
              6.824704893333518e-13
            ],
            "jump_probability": 0.3316075716952018,
            "jump_score": 1.64050155500402
          }
        ],
        "methodology": {
          "estimation_window_days": 251,
          "reporting_window_days": 63,
          "current_mix_method": "ols_last_5d",
          "monthly_history_method": "ols_per_month",
          "regime_inference": "hmm_jump_aware",
          "regime_feature_stack": "returns_volatility_shape_liquidity_activity_jump_score",
          "regime_scaling": "robust_median_iqr",
          "regime_model_selection": "bic_with_min_state_support",
          "jump_component": "robust_residual_and_return_jump_overlay",
          "jump_model_definition": "jump_score_feature_overlay_not_full_jump_diffusion",
          "current_state_probability_basis": "filtered",
          "historical_state_probability_basis": "smoothed",
          "distribution": "gaussian",
          "history_limited": true,
          "current_driver_mix_basis": "ols_recent_window",
          "sector_proxy_equals_market": false
        },
        "client_read": {
          "market_link_display": "-2.84",
          "sector_link_display": "1.73",
          "market_link_explainer": "High market link. A 1% market move has lined up with about a 2.84% stock move in the opposite direction in this state. This is a point estimate from 251 trading days.",
          "sector_link_explainer": "High sector link. A 1% sector move has lined up with about a 1.73% stock move in the same direction in this state. This is a point estimate from 251 trading days.",
          "stock_persistence_display": "0.16",
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "history_limited_note": "Read is based on 251 trading days versus the 252-day target."
        },
        "current_summary": {
          "regime_label": "Stressed / Illiquid",
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "driver_share_pct": 60.5,
          "driver_share_display": "60.5%",
          "confidence_label": "High, limited history",
          "confidence_pct": 99.9,
          "confidence_display": ">99.9%",
          "probability_basis": "filtered",
          "display_confidence_pct": null,
          "confidence_note": "Based on 251 trading days relative to the 252-day target.",
          "history_days": 251,
          "history_limited": true,
          "volatility_label": "Stressed / Illiquid",
          "jump_risk_label": "Watch",
          "jump_risk_probability": 34.1,
          "jump_risk_score": 1.64,
          "jump_risk_note": "Jump risk is watch based on recent residual and return shocks.",
          "lead_signal_text": "No stable lead signal.",
          "state_term": "state",
          "stay_probability": 0.4535125785599916,
          "effective_days": 51.6,
          "persistence_note": "This looks like a short-lived state, not a sticky regime: the typical run length is about 1.8 days.",
          "expected_duration_days": 1.8
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
          "month_key": "2025-06",
          "month_label": "June 2025",
          "month_short_label": "Jun",
          "period_label": "2025-06-24 to 2025-06-30",
          "n_obs": 5,
          "partial_month": true,
          "dominant_driver": "sector",
          "dominant_driver_label": "Sector",
          "regime_label": null,
          "summary": "Jun: Mostly sector-driven, though based on only 5 trading days.",
          "share_market": 0.4481359055212802,
          "share_sector": 0.4614980176922014,
          "share_company": 0.09036607678651838,
          "share_market_display": "44.8%",
          "share_sector_display": "46.1%",
          "share_company_display": "9.0%",
          "dominant_share_display": "46.1%"
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
          "share_market": 0.3494437387752558,
          "share_sector": 0.14512673785466226,
          "share_company": 0.5054295233700818,
          "share_market_display": "34.9%",
          "share_sector_display": "14.5%",
          "share_company_display": "50.5%",
          "dominant_share_display": "50.5%"
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
          "summary": "Aug: Still clearly company-driven.",
          "share_market": 0.3002138426012119,
          "share_sector": 0.04811636898386811,
          "share_company": 0.65166978841492,
          "share_market_display": "30.0%",
          "share_sector_display": "4.8%",
          "share_company_display": "65.2%",
          "dominant_share_display": "65.2%"
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
          "share_market": 0.12568359055849787,
          "share_sector": 0.28154912915885905,
          "share_company": 0.5927672802826431,
          "share_market_display": "12.6%",
          "share_sector_display": "28.2%",
          "share_company_display": "59.3%",
          "dominant_share_display": "59.3%"
        },
        {
          "month_key": "2025-10",
          "month_label": "October 2025",
          "month_short_label": "Oct",
          "period_label": "2025-10-02 to 2025-10-31",
          "n_obs": 20,
          "partial_month": true,
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "regime_label": null,
          "summary": "Oct: Mostly market-driven.",
          "share_market": 0.48691285678975366,
          "share_sector": 0.13222415962862155,
          "share_company": 0.38086298358162496,
          "share_market_display": "48.7%",
          "share_sector_display": "13.2%",
          "share_company_display": "38.1%",
          "dominant_share_display": "48.7%"
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
          "share_market": 0.5647317635382599,
          "share_sector": 0.14495541048124663,
          "share_company": 0.2903128259804934,
          "share_market_display": "56.5%",
          "share_sector_display": "14.5%",
          "share_company_display": "29.0%",
          "dominant_share_display": "56.5%"
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
          "summary": "Dec: Still clearly company-driven.",
          "share_market": 0.22547128443555933,
          "share_sector": 0.1409463156277872,
          "share_company": 0.6335823999366534,
          "share_market_display": "22.5%",
          "share_sector_display": "14.1%",
          "share_company_display": "63.4%",
          "dominant_share_display": "63.4%"
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
          "summary": "Jan: Mostly company-driven.",
          "share_market": 0.14853676995054788,
          "share_sector": 0.37295054667120686,
          "share_company": 0.4785126833782454,
          "share_market_display": "14.9%",
          "share_sector_display": "37.3%",
          "share_company_display": "47.9%",
          "dominant_share_display": "47.9%"
        },
        {
          "month_key": "2026-02",
          "month_label": "February 2026",
          "month_short_label": "Feb",
          "period_label": "2026-02-02 to 2026-02-27",
          "n_obs": 17,
          "partial_month": false,
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "regime_label": null,
          "summary": "Feb: More mixed, though market-driven still has the largest share.",
          "share_market": 0.41091720809650517,
          "share_sector": 0.2843924922862215,
          "share_company": 0.3046902996172734,
          "share_market_display": "41.1%",
          "share_sector_display": "28.4%",
          "share_company_display": "30.5%",
          "dominant_share_display": "41.1%"
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
          "summary": "Mar: More mixed, though market-driven still has the largest share.",
          "share_market": 0.4087274421418909,
          "share_sector": 0.3596265749733328,
          "share_company": 0.2316459828847763,
          "share_market_display": "40.9%",
          "share_sector_display": "36.0%",
          "share_company_display": "23.2%",
          "dominant_share_display": "40.9%"
        },
        {
          "month_key": "2026-04",
          "month_label": "April 2026",
          "month_short_label": "Apr",
          "period_label": "2026-04-01 to 2026-04-30",
          "n_obs": 19,
          "partial_month": false,
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "regime_label": null,
          "summary": "Apr: Mostly market-driven.",
          "share_market": 0.4991300096904983,
          "share_sector": 0.24395848210669555,
          "share_company": 0.25691150820280617,
          "share_market_display": "49.9%",
          "share_sector_display": "24.4%",
          "share_company_display": "25.7%",
          "dominant_share_display": "49.9%"
        },
        {
          "month_key": "2026-05",
          "month_label": "May 2026",
          "month_short_label": "May",
          "period_label": "2026-05-04 to 2026-05-29",
          "n_obs": 19,
          "partial_month": true,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_label": null,
          "summary": "May: More mixed, though company-driven still has the largest share.",
          "share_market": 0.24962796452940275,
          "share_sector": 0.3456609025500928,
          "share_company": 0.40471113292050437,
          "share_market_display": "25.0%",
          "share_sector_display": "34.6%",
          "share_company_display": "40.5%",
          "dominant_share_display": "40.5%"
        },
        {
          "month_key": "2026-06",
          "month_label": "June 2026",
          "month_short_label": "Jun",
          "period_label": "2026-06-01 to 2026-06-30",
          "n_obs": 21,
          "partial_month": false,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_label": null,
          "summary": "Jun: Still clearly company-driven.",
          "share_market": 0.12234835155094716,
          "share_sector": 0.2266142995686683,
          "share_company": 0.6510373488803847,
          "share_market_display": "12.2%",
          "share_sector_display": "22.7%",
          "share_company_display": "65.1%",
          "dominant_share_display": "65.1%"
        },
        {
          "month_key": "2026-07",
          "month_label": "July 2026",
          "month_short_label": "Jul",
          "period_label": "2026-07-02 to 2026-07-10",
          "n_obs": 7,
          "partial_month": true,
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "regime_label": null,
          "summary": "Jul: Mostly market-driven, though based on only 7 trading days.",
          "share_market": 0.4743765937635683,
          "share_sector": 0.42919448215458167,
          "share_company": 0.0964289240818501,
          "share_market_display": "47.4%",
          "share_sector_display": "42.9%",
          "share_company_display": "9.6%",
          "dominant_share_display": "47.4%"
        }
      ],
      "regime": {
        "valid": true,
        "regime_method": "hmm_jump_aware",
        "n_regimes": 4,
        "current_regime_label": "Stressed / Illiquid",
        "current_regime_probability": 0.9999991891244512,
        "labels": [
          "Calm / Liquid",
          "Normal / Active",
          "Stressed / Illiquid",
          "Jump / Tail Shock"
        ],
        "pct_time": [
          0.27611688211244817,
          0.2956406492644645,
          0.20561202990242133,
          0.22263043872066599
        ],
        "current_regime": 2,
        "regimes": [
          {
            "id": 0,
            "label": "Calm / Liquid",
            "pct_time": 0.27611688211244817,
            "expected_duration_days": 8.72943458936433,
            "current_probability": 8.108748662275551e-07,
            "current_probability_display": "<0.1%",
            "current_probability_basis": "filtered",
            "n_days_effective": 69.3053374102245,
            "volatility": {
              "median": 0.01174669545988608,
              "low": 0.01174669545988608,
              "high": 0.01174669545988608
            },
            "volatility_label": "Calm / Liquid",
            "jump_probability": 0.22140501822177386,
            "jump_rate": 0.05771535288285429,
            "risk_score": 0.09636405302551113,
            "metrics": {
              "rolling_vol_10d": 0.013221782761109316,
              "downside_vol_10d": 0.006762684474718974,
              "drawdown_21d": 0.01751294810177373,
              "amihud_stress": 0.12333847410375143,
              "spread_rel": 27.2883115639542,
              "spread_ticks": 3.4819418741103316,
              "log_notional": 15.880736528830658,
              "log_trade_count": 5.557487960465699
            }
          },
          {
            "id": 1,
            "label": "Normal / Active",
            "pct_time": 0.2956406492644645,
            "expected_duration_days": 3.1172795448780737,
            "current_probability": 3.456886017198692e-21,
            "current_probability_display": "<0.1%",
            "current_probability_basis": "filtered",
            "n_days_effective": 74.20580296538058,
            "volatility": {
              "median": 0.007448628267091885,
              "low": 0.007448628267091885,
              "high": 0.007448628267091885
            },
            "volatility_label": "Normal / Active",
            "jump_probability": 0.14660506412157406,
            "jump_rate": 9.662297498410176e-18,
            "risk_score": 0.24223183199766474,
            "metrics": {
              "rolling_vol_10d": 0.017316313656480595,
              "downside_vol_10d": 0.008479232036661132,
              "drawdown_21d": 0.03105897113376099,
              "amihud_stress": 0.074333341043624,
              "spread_rel": 35.464805121507226,
              "spread_ticks": 4.2657016507412235,
              "log_notional": 15.885917301225494,
              "log_trade_count": 5.571492992082682
            }
          },
          {
            "id": 2,
            "label": "Stressed / Illiquid",
            "pct_time": 0.20561202990242133,
            "expected_duration_days": 1.8298682838206493,
            "current_probability": 0.9999991891244512,
            "current_probability_display": ">99.9%",
            "current_probability_basis": "filtered",
            "n_days_effective": 51.608619505507754,
            "volatility": {
              "median": 0.027642774090180674,
              "low": 0.027642774090180674,
              "high": 0.027642774090180674
            },
            "volatility_label": "Stressed / Illiquid",
            "jump_probability": 0.3406607097480544,
            "jump_rate": 0.13602489167013562,
            "risk_score": 0.483989465779863,
            "metrics": {
              "rolling_vol_10d": 0.019557533200824682,
              "downside_vol_10d": 0.009456070824095138,
              "drawdown_21d": 0.03496534002340606,
              "amihud_stress": 0.2052168970456058,
              "spread_rel": 27.674105717652445,
              "spread_ticks": 3.307508887599394,
              "log_notional": 16.384382115712523,
              "log_trade_count": 5.888420397020878
            }
          },
          {
            "id": 3,
            "label": "Jump / Tail Shock",
            "pct_time": 0.22263043872066599,
            "expected_duration_days": 18.586746607961267,
            "current_probability": 6.824704893333518e-13,
            "current_probability_display": "<0.1%",
            "current_probability_basis": "filtered",
            "n_days_effective": 55.880240118887166,
            "volatility": {
              "median": 0.02636141898605917,
              "low": 0.02636141898605917,
              "high": 0.02636141898605917
            },
            "volatility_label": "Jump / Tail Shock",
            "jump_probability": 0.2642115209808701,
            "jump_rate": 0.08911846310299719,
            "risk_score": 0.9015112540009089,
            "metrics": {
              "rolling_vol_10d": 0.026355721457824968,
              "downside_vol_10d": 0.01692117094073311,
              "drawdown_21d": 0.0949866011333817,
              "amihud_stress": 0.20804701989661156,
              "spread_rel": 40.72951839289389,
              "spread_ticks": 4.7215660272468245,
              "log_notional": 15.925090262581989,
              "log_trade_count": 5.579776310156814
            }
          }
        ],
        "transitions": [
          [
            0.8854450434603899,
            0.00014485385624318336,
            0.11426610338551553,
            0.0001439992978514564
          ],
          [
            0.014334414718310661,
            0.6792074674075748,
            0.266216155362562,
            0.040241962511552716
          ],
          [
            0.13554865910127323,
            0.41069532283860627,
            0.4535125785599916,
            0.00024343950012884933
          ],
          [
            0.00017850683347907242,
            0.05343936709589751,
            0.000183903277381565,
            0.9461982227932418
          ]
        ]
      }
    },
    "order_book": {
      "bids": [
        {
          "level": 1,
          "price": 108.4,
          "quantity": 2900.0,
          "value": 314360.0
        },
        {
          "level": 2,
          "price": 108.3,
          "quantity": 3450.0,
          "value": 373635.0
        },
        {
          "level": 3,
          "price": 108.2,
          "quantity": 800.0,
          "value": 86560.0
        },
        {
          "level": 4,
          "price": 108.0,
          "quantity": 400.0,
          "value": 43200.0
        },
        {
          "level": 5,
          "price": 107.8,
          "quantity": 50.0,
          "value": 5390.0
        },
        {
          "level": 6,
          "price": 107.6,
          "quantity": 100.0,
          "value": 10760.0
        },
        {
          "level": 7,
          "price": 107.5,
          "quantity": 200.0,
          "value": 21500.0
        },
        {
          "level": 8,
          "price": 107.3,
          "quantity": 950.0,
          "value": 101935.0
        },
        {
          "level": 9,
          "price": 107.0,
          "quantity": 250.0,
          "value": 26750.0
        },
        {
          "level": 10,
          "price": 106.7,
          "quantity": 50.0,
          "value": 5335.0
        },
        {
          "level": 11,
          "price": 106.4,
          "quantity": 50.0,
          "value": 5320.0
        },
        {
          "level": 12,
          "price": 106.2,
          "quantity": 50.0,
          "value": 5310.0
        },
        {
          "level": 13,
          "price": 106.0,
          "quantity": 50.0,
          "value": 5300.0
        },
        {
          "level": 14,
          "price": 105.4,
          "quantity": 400.0,
          "value": 42160.0
        },
        {
          "level": 15,
          "price": 104.0,
          "quantity": 200.0,
          "value": 20800.0
        },
        {
          "level": 16,
          "price": 102.8,
          "quantity": 150.0,
          "value": 15420.0
        },
        {
          "level": 17,
          "price": 100.5,
          "quantity": 500.0,
          "value": 50250.0
        },
        {
          "level": 18,
          "price": 100.2,
          "quantity": 300.0,
          "value": 30060.0
        },
        {
          "level": 19,
          "price": 97.0,
          "quantity": 50.0,
          "value": 4850.0
        },
        {
          "level": 20,
          "price": 95.0,
          "quantity": 500.0,
          "value": 47500.0
        },
        {
          "level": 21,
          "price": 92.0,
          "quantity": 200.0,
          "value": 18400.0
        }
      ],
      "asks": [
        {
          "level": 1,
          "price": 108.7,
          "quantity": 200.0,
          "value": 21740.0
        },
        {
          "level": 2,
          "price": 108.8,
          "quantity": 1150.0,
          "value": 125120.0
        },
        {
          "level": 3,
          "price": 108.9,
          "quantity": 2200.0,
          "value": 239580.0
        },
        {
          "level": 4,
          "price": 109.0,
          "quantity": 800.0,
          "value": 87200.0
        },
        {
          "level": 5,
          "price": 109.1,
          "quantity": 400.0,
          "value": 43640.0
        },
        {
          "level": 6,
          "price": 109.2,
          "quantity": 950.0,
          "value": 103740.0
        },
        {
          "level": 7,
          "price": 109.3,
          "quantity": 400.0,
          "value": 43720.0
        },
        {
          "level": 8,
          "price": 109.4,
          "quantity": 50.0,
          "value": 5470.0
        },
        {
          "level": 9,
          "price": 109.5,
          "quantity": 200.0,
          "value": 21900.0
        },
        {
          "level": 10,
          "price": 109.6,
          "quantity": 50.0,
          "value": 5480.0
        },
        {
          "level": 11,
          "price": 109.8,
          "quantity": 350.0,
          "value": 38430.0
        },
        {
          "level": 12,
          "price": 110.0,
          "quantity": 450.0,
          "value": 49500.0
        },
        {
          "level": 13,
          "price": 110.1,
          "quantity": 250.0,
          "value": 27525.0
        },
        {
          "level": 14,
          "price": 110.3,
          "quantity": 200.0,
          "value": 22060.0
        },
        {
          "level": 15,
          "price": 110.4,
          "quantity": 50.0,
          "value": 5520.0
        },
        {
          "level": 16,
          "price": 110.7,
          "quantity": 50.0,
          "value": 5535.0
        },
        {
          "level": 17,
          "price": 111.0,
          "quantity": 50.0,
          "value": 5550.0
        },
        {
          "level": 18,
          "price": 111.3,
          "quantity": 50.0,
          "value": 5565.0
        },
        {
          "level": 19,
          "price": 113.2,
          "quantity": 450.0,
          "value": 50940.0
        },
        {
          "level": 20,
          "price": 115.0,
          "quantity": 400.0,
          "value": 46000.0
        },
        {
          "level": 21,
          "price": 118.8,
          "quantity": 1150.0,
          "value": 136620.0
        },
        {
          "level": 22,
          "price": 119.8,
          "quantity": 800.0,
          "value": 95840.0
        },
        {
          "level": 23,
          "price": 120.0,
          "quantity": 300.0,
          "value": 36000.0
        }
      ]
    },
    "execution_dynamic": {
      "snapshot": {
        "valid": true,
        "snapshot_time": "2026-07-10 07:59:59.776000000",
        "snapshot_basis": "last_continuous_session_snapshot",
        "snapshot_label": "final continuous-session displayed book before close",
        "snapshot_note": "Final continuous-session displayed book before close",
        "snapshot_mic": "XHKG",
        "mid_price": 108.55000000000001,
        "spread_pct": 0.0027637033625057313,
        "spread_ticks": 3.0,
        "tick_size": 0.1,
        "displayed_levels_per_side": 100,
        "bid_depth_notional_displayed": 1234795.0,
        "ask_depth_notional_displayed": 1222675.0,
        "bid_depth_notional_top10": 1234795.0,
        "ask_depth_notional_top10": 1222675.0,
        "bid_ask_depth_ratio": 1.0099
      },
      "historical_trade_scenarios": {
        "valid": true,
        "requested_lookback_calendar_days": 365,
        "lookback_calendar_days": 365,
        "effective_calendar_days": 366,
        "history_limited": false,
        "trade_days_used": 240,
        "n_trades_used": 164295,
        "first_trade_date": "2025-07-10",
        "last_trade_date": "2026-07-10",
        "window_label": "Jul 10, 2025 to Jul 10, 2026",
        "window_short_label": "Jul 10, 2025 to Jul 10, 2026",
        "trade_days_label": "240 trading days",
        "trade_count_label": "164,295 trades",
        "window_detail_label": "240 trading days • 164,295 trades",
        "history_note": "Trade-size percentiles use Jul 10, 2025 to Jul 10, 2026 history (240 trading days • 164,295 trades).",
        "scenarios": [
          {
            "key": "p90",
            "label": "90th percentile trade",
            "quantile": 0.9,
            "trade_notional": 34037.5,
            "impact_pct": -0.001382,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 2.76,
            "pct_of_adv": 0.35
          },
          {
            "key": "p95",
            "label": "95th percentile trade",
            "quantile": 0.95,
            "trade_notional": 53250.0,
            "impact_pct": -0.001382,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 4.31,
            "pct_of_adv": 0.55
          },
          {
            "key": "p99_99",
            "label": "99.99th percentile trade",
            "quantile": 0.9999,
            "trade_notional": 3836802.56,
            "impact_pct": -0.019366,
            "filled_pct": 32.2,
            "levels_consumed": 21,
            "pct_of_bid_depth": 310.72,
            "pct_of_adv": 39.49
          }
        ]
      },
      "l3_sell_order_scenarios": {
        "valid": true,
        "trade_date": "2026-07-10",
        "selection_method": "largest_observed_ask_orders_during_day",
        "orders": [
          {
            "rank": 1,
            "order_id": "5906603777",
            "timestamp": "2026-07-10 06:37:00.738000000",
            "local_timestamp": "2026-07-10 14:37:00",
            "posted_price": 109.0,
            "size_shares": 10000.0,
            "notional": 1090000.0,
            "impact_pct": -0.00701,
            "filled_pct": 100.0,
            "levels_consumed": 17,
            "pct_of_bid_depth": 88.27,
            "price_vs_mid_pct": 0.415,
            "executed_event_count": 0,
            "event_count": 32
          },
          {
            "rank": 2,
            "order_id": "6198400257",
            "timestamp": "2026-07-10 06:59:03.555000000",
            "local_timestamp": "2026-07-10 14:59:03",
            "posted_price": 109.0,
            "size_shares": 4300.0,
            "notional": 468700.0,
            "impact_pct": -0.001685,
            "filled_pct": 100.0,
            "levels_consumed": 2,
            "pct_of_bid_depth": 37.96,
            "price_vs_mid_pct": 0.415,
            "executed_event_count": 6,
            "event_count": 8
          },
          {
            "rank": 3,
            "order_id": "6241830913",
            "timestamp": "2026-07-10 07:01:46.392000000",
            "local_timestamp": "2026-07-10 15:01:46",
            "posted_price": 109.5,
            "size_shares": 3000.0,
            "notional": 328500.0,
            "impact_pct": -0.0014219999999999999,
            "filled_pct": 100.0,
            "levels_consumed": 2,
            "pct_of_bid_depth": 26.6,
            "price_vs_mid_pct": 0.875,
            "executed_event_count": 0,
            "event_count": 2
          }
        ]
      },
      "intraday_liquidity_profile": {
        "valid": true,
        "trade_date": "2026-07-10",
        "bucket_minutes": 30,
        "displayed_levels_per_side": 100,
        "tick_size": 0.1,
        "timezone": "HKT (UTC+8)",
        "session_label": "HKEX continuous trading session",
        "bucket_label_basis": "bucket start time",
        "display_window_label": "HKEX continuous trading session",
        "bucket_note": "Buckets are shown in local market time and labeled by bucket start.",
        "reason": null,
        "rows": [
          {
            "bucket": "09:30",
            "spread_pct": 0.0036832412523019474,
            "spread_ticks": 3.9999999999999147,
            "bid_depth_notional": 1025460.0,
            "ask_depth_notional": 720945.0,
            "mid_price": 108.6
          },
          {
            "bucket": "10:00",
            "spread_pct": 0.0036900369003689247,
            "spread_ticks": 3.9999999999999147,
            "bid_depth_notional": 1013535.0,
            "ask_depth_notional": 975860.0,
            "mid_price": 108.4
          },
          {
            "bucket": "10:30",
            "spread_pct": 0.0027662517289073047,
            "spread_ticks": 2.9999999999999716,
            "bid_depth_notional": 966560.0,
            "ask_depth_notional": 1074195.0,
            "mid_price": 108.44999999999999
          },
          {
            "bucket": "11:00",
            "spread_pct": 0.0009178522257915953,
            "spread_ticks": 0.9999999999999432,
            "bid_depth_notional": 1163910.0,
            "ask_depth_notional": 885805.0,
            "mid_price": 108.95
          },
          {
            "bucket": "11:30",
            "spread_pct": 0.0018365472910927716,
            "spread_ticks": 2.0000000000000284,
            "bid_depth_notional": 624530.0,
            "ask_depth_notional": 1137035.0,
            "mid_price": 108.9
          },
          {
            "bucket": "13:00",
            "spread_pct": 0.0009186954524575887,
            "spread_ticks": 1.0000000000000853,
            "bid_depth_notional": 1029780.0,
            "ask_depth_notional": 929070.0,
            "mid_price": 108.85
          },
          {
            "bucket": "13:30",
            "spread_pct": 0.0018399264029439087,
            "spread_ticks": 2.0000000000000284,
            "bid_depth_notional": 899020.0,
            "ask_depth_notional": 1266605.0,
            "mid_price": 108.69999999999999
          },
          {
            "bucket": "14:00",
            "spread_pct": 0.0036764705882353465,
            "spread_ticks": 4.000000000000057,
            "bid_depth_notional": 1181070.0,
            "ask_depth_notional": 1076660.0,
            "mid_price": 108.8
          },
          {
            "bucket": "14:30",
            "spread_pct": 0.002738475581926035,
            "spread_ticks": 2.9999999999999716,
            "bid_depth_notional": 1753990.0,
            "ask_depth_notional": 1174460.0,
            "mid_price": 109.55000000000001
          },
          {
            "bucket": "15:00",
            "spread_pct": 0.0027637033625057313,
            "spread_ticks": 2.9999999999999716,
            "bid_depth_notional": 1364460.0,
            "ask_depth_notional": 1594025.0,
            "mid_price": 108.55000000000001
          },
          {
            "bucket": "15:30",
            "spread_pct": 0.0027637033625057313,
            "spread_ticks": 2.9999999999999716,
            "bid_depth_notional": 1234795.0,
            "ask_depth_notional": 1222675.0,
            "mid_price": 108.55000000000001
          }
        ],
        "summary": {
          "median_spread_pct": 0.0027637033625057313,
          "median_spread_ticks": 2.9999999999999716,
          "median_bid_depth_notional": 1029780.0,
          "median_ask_depth_notional": 1076660.0,
          "tightest_bucket": "11:00",
          "widest_bucket": "10:00",
          "deepest_bid_bucket": "14:30",
          "thinnest_bid_bucket": "11:30"
        }
      },
      "peer_execution_metrics": {
        "valid": true,
        "source": "peer_l2_displayed_book_and_trades",
        "reason": null,
        "rows": [
          {
            "ticker": "2601",
            "listing_id": 534129636,
            "company_name": "CPIC",
            "currency": "HKD",
            "valid": true,
            "reason": null,
            "adv_metrics": {
              "valid": true,
              "adv_sgd": 371831362.52
            },
            "current_book_snapshot": {
              "valid": true,
              "snapshot_time": "2026-07-10 07:59:59.492000000",
              "snapshot_label": "final continuous-session displayed book before close",
              "mid_price": 27.310000000000002,
              "spread_pct": 0.002196997436836277,
              "spread_ticks": 3.0,
              "displayed_levels_per_side": 100,
              "bid_depth_notional_displayed": 52433640.0,
              "ask_depth_notional_displayed": 47418528.0,
              "bid_ask_depth_ratio": 1.1058
            },
            "sell_impact": [
              {
                "valid": true,
                "trade_size_sgd": 100000.0,
                "impact_pct": -0.001098,
                "vwap": 27.28,
                "filled_pct": 100.0,
                "levels_consumed": 1,
                "pct_of_adv": 0.0,
                "model": "book_simulation",
                "reason": null
              },
              {
                "valid": true,
                "trade_size_sgd": 1000000.0,
                "impact_pct": -0.001691,
                "vwap": 27.263817,
                "filled_pct": 100.0,
                "levels_consumed": 2,
                "pct_of_adv": 0.3,
                "model": "book_simulation",
                "reason": null
              },
              {
                "valid": true,
                "trade_size_sgd": 2500000.0,
                "impact_pct": -0.0023309999999999997,
                "vwap": 27.246331,
                "filled_pct": 100.0,
                "levels_consumed": 4,
                "pct_of_adv": 0.7,
                "model": "book_simulation",
                "reason": null
              }
            ],
            "historical_trade_scenarios": {
              "valid": true,
              "reason": null,
              "trade_days_used": 240,
              "n_trades_used": 3255452,
              "scenarios": [
                {
                  "key": "p90",
                  "label": "90th percentile trade",
                  "quantile": 0.9,
                  "trade_notional": 80736.0,
                  "impact_pct": -0.001098,
                  "filled_pct": 100.0,
                  "pct_of_bid_depth": 0.15,
                  "pct_of_adv": 0.02
                },
                {
                  "key": "p95",
                  "label": "95th percentile trade",
                  "quantile": 0.95,
                  "trade_notional": 142579.6,
                  "impact_pct": -0.001098,
                  "filled_pct": 100.0,
                  "pct_of_bid_depth": 0.27,
                  "pct_of_adv": 0.04
                },
                {
                  "key": "p99_99",
                  "label": "99.99th percentile trade",
                  "quantile": 0.9999,
                  "trade_notional": 5243532.38,
                  "impact_pct": -0.003058,
                  "filled_pct": 100.0,
                  "pct_of_bid_depth": 10.0,
                  "pct_of_adv": 1.41
                }
              ]
            },
            "coverage": {
              "book": true,
              "adv": true,
              "historical_trades": true,
              "reason": null
            }
          },
          {
            "ticker": "1299",
            "listing_id": 534130087,
            "company_name": "AIA",
            "currency": "HKD",
            "valid": true,
            "reason": null,
            "adv_metrics": {
              "valid": true,
              "adv_sgd": 2114917134.8
            },
            "current_book_snapshot": {
              "valid": true,
              "snapshot_time": "2026-07-10 07:59:59.971000000",
              "snapshot_label": "final continuous-session displayed book before close",
              "mid_price": 72.775,
              "spread_pct": 0.0006870491240123278,
              "spread_ticks": 1.0,
              "displayed_levels_per_side": 100,
              "bid_depth_notional_displayed": 99206550.0,
              "ask_depth_notional_displayed": 121651810.0,
              "bid_ask_depth_ratio": 0.8155
            },
            "sell_impact": [
              {
                "valid": true,
                "trade_size_sgd": 100000.0,
                "impact_pct": -0.00043099999999999996,
                "vwap": 72.743646,
                "filled_pct": 100.0,
                "levels_consumed": 2,
                "pct_of_adv": 0.0,
                "model": "book_simulation",
                "reason": null
              },
              {
                "valid": true,
                "trade_size_sgd": 1000000.0,
                "impact_pct": -0.0009710000000000001,
                "vwap": 72.704362,
                "filled_pct": 100.0,
                "levels_consumed": 2,
                "pct_of_adv": 0.0,
                "model": "book_simulation",
                "reason": null
              },
              {
                "valid": true,
                "trade_size_sgd": 2500000.0,
                "impact_pct": -0.0012460000000000001,
                "vwap": 72.684307,
                "filled_pct": 100.0,
                "levels_consumed": 3,
                "pct_of_adv": 0.1,
                "model": "book_simulation",
                "reason": null
              }
            ],
            "historical_trade_scenarios": {
              "valid": true,
              "reason": null,
              "trade_days_used": 240,
              "n_trades_used": 3817345,
              "scenarios": [
                {
                  "key": "p90",
                  "label": "90th percentile trade",
                  "quantile": 0.9,
                  "trade_notional": 254520.0,
                  "impact_pct": -0.000795,
                  "filled_pct": 100.0,
                  "pct_of_bid_depth": 0.26,
                  "pct_of_adv": 0.01
                },
                {
                  "key": "p95",
                  "label": "95th percentile trade",
                  "quantile": 0.95,
                  "trade_notional": 462520.0,
                  "impact_pct": -0.000901,
                  "filled_pct": 100.0,
                  "pct_of_bid_depth": 0.47,
                  "pct_of_adv": 0.02
                },
                {
                  "key": "p99_99",
                  "label": "99.99th percentile trade",
                  "quantile": 0.9999,
                  "trade_notional": 40169421.54,
                  "impact_pct": -0.003814,
                  "filled_pct": 100.0,
                  "pct_of_bid_depth": 40.49,
                  "pct_of_adv": 1.9
                }
              ]
            },
            "coverage": {
              "book": true,
              "adv": true,
              "historical_trades": true,
              "reason": null
            }
          },
          {
            "ticker": "945",
            "listing_id": 534130284,
            "company_name": "MANULIFE-S",
            "currency": "HKD",
            "valid": true,
            "reason": null,
            "adv_metrics": {
              "valid": true,
              "adv_sgd": 4899210.0
            },
            "current_book_snapshot": {
              "valid": true,
              "snapshot_time": "2026-07-10 07:59:59.005000000",
              "snapshot_label": "final continuous-session displayed book before close",
              "mid_price": 324.4,
              "spread_pct": 0.002466091245376114,
              "spread_ticks": 4.0,
              "displayed_levels_per_side": 100,
              "bid_depth_notional_displayed": 748060.0,
              "ask_depth_notional_displayed": 5533380.0,
              "bid_ask_depth_ratio": 0.1352
            },
            "sell_impact": [
              {
                "valid": true,
                "trade_size_sgd": 100000.0,
                "impact_pct": -0.00125,
                "vwap": 323.994397,
                "filled_pct": 100.0,
                "levels_consumed": 2,
                "pct_of_adv": 2.0,
                "model": "book_simulation",
                "reason": null
              },
              {
                "valid": true,
                "trade_size_sgd": 1000000.0,
                "impact_pct": -0.039175,
                "vwap": 311.691667,
                "filled_pct": 74.8,
                "levels_consumed": 13,
                "pct_of_adv": 20.4,
                "model": "book_simulation",
                "reason": null
              },
              {
                "valid": true,
                "trade_size_sgd": 2500000.0,
                "impact_pct": -0.039175,
                "vwap": 311.691667,
                "filled_pct": 29.9,
                "levels_consumed": 13,
                "pct_of_adv": 51.0,
                "model": "book_simulation",
                "reason": null
              }
            ],
            "historical_trade_scenarios": {
              "valid": true,
              "reason": null,
              "trade_days_used": 240,
              "n_trades_used": 16833,
              "scenarios": [
                {
                  "key": "p90",
                  "label": "90th percentile trade",
                  "quantile": 0.9,
                  "trade_notional": 119664.0,
                  "impact_pct": -0.001349,
                  "filled_pct": 100.0,
                  "pct_of_bid_depth": 16.0,
                  "pct_of_adv": 2.44
                },
                {
                  "key": "p95",
                  "label": "95th percentile trade",
                  "quantile": 0.95,
                  "trade_notional": 147500.0,
                  "impact_pct": -0.001443,
                  "filled_pct": 100.0,
                  "pct_of_bid_depth": 19.72,
                  "pct_of_adv": 3.01
                },
                {
                  "key": "p99_99",
                  "label": "99.99th percentile trade",
                  "quantile": 0.9999,
                  "trade_notional": 1584008.26,
                  "impact_pct": -0.039175,
                  "filled_pct": 47.2,
                  "pct_of_bid_depth": 211.75,
                  "pct_of_adv": 32.33
                }
              ]
            },
            "coverage": {
              "book": true,
              "adv": true,
              "historical_trades": true,
              "reason": null
            }
          },
          {
            "ticker": "1828",
            "listing_id": 772037047,
            "company_name": "FWD",
            "currency": "HKD",
            "valid": true,
            "reason": null,
            "adv_metrics": {
              "valid": true,
              "adv_sgd": 11255964.0
            },
            "current_book_snapshot": {
              "valid": true,
              "snapshot_time": "2026-07-10 07:59:58.203000000",
              "snapshot_label": "final continuous-session displayed book before close",
              "mid_price": 28.98,
              "spread_pct": 0.0013802622498274378,
              "spread_ticks": 2.0,
              "displayed_levels_per_side": 100,
              "bid_depth_notional_displayed": 1195746.0,
              "ask_depth_notional_displayed": 1991624.0,
              "bid_ask_depth_ratio": 0.6004
            },
            "sell_impact": [
              {
                "valid": true,
                "trade_size_sgd": 100000.0,
                "impact_pct": -0.0006900000000000001,
                "vwap": 28.96,
                "filled_pct": 100.0,
                "levels_consumed": 1,
                "pct_of_adv": 0.9,
                "model": "book_simulation",
                "reason": null
              },
              {
                "valid": true,
                "trade_size_sgd": 1000000.0,
                "impact_pct": -0.008338,
                "vwap": 28.738356,
                "filled_pct": 100.0,
                "levels_consumed": 19,
                "pct_of_adv": 8.9,
                "model": "book_simulation",
                "reason": null
              },
              {
                "valid": true,
                "trade_size_sgd": 2500000.0,
                "impact_pct": -0.012893,
                "vwap": 28.606364,
                "filled_pct": 47.8,
                "levels_consumed": 34,
                "pct_of_adv": 22.2,
                "model": "book_simulation",
                "reason": null
              }
            ],
            "historical_trade_scenarios": {
              "valid": true,
              "reason": null,
              "trade_days_used": 240,
              "n_trades_used": 250094,
              "scenarios": [
                {
                  "key": "p90",
                  "label": "90th percentile trade",
                  "quantile": 0.9,
                  "trade_notional": 30734.2,
                  "impact_pct": -0.0006900000000000001,
                  "filled_pct": 100.0,
                  "pct_of_bid_depth": 2.57,
                  "pct_of_adv": 0.27
                },
                {
                  "key": "p95",
                  "label": "95th percentile trade",
                  "quantile": 0.95,
                  "trade_notional": 49380.0,
                  "impact_pct": -0.0006900000000000001,
                  "filled_pct": 100.0,
                  "pct_of_bid_depth": 4.13,
                  "pct_of_adv": 0.44
                },
                {
                  "key": "p99_99",
                  "label": "99.99th percentile trade",
                  "quantile": 0.9999,
                  "trade_notional": 5446400.0,
                  "impact_pct": -0.012892999999999998,
                  "filled_pct": 22.0,
                  "pct_of_bid_depth": 455.48,
                  "pct_of_adv": 48.39
                }
              ]
            },
            "coverage": {
              "book": true,
              "adv": true,
              "historical_trades": true,
              "reason": null
            }
          }
        ]
      }
    },
    "peer_capacity": {
      "bx_ticket_pct_adv_50k": 0.5,
      "peers": [
        {
          "ticker": "1299",
          "pct": 0.0
        },
        {
          "ticker": "2601",
          "pct": 0.3
        },
        {
          "ticker": "1828",
          "pct": 8.9
        },
        {
          "ticker": "945",
          "pct": 20.4
        }
      ]
    },
    "trader_composition": {
      "primary_period": "6m",
      "periods": {
        "1d": {
          "valid": true,
          "currency": "HKD",
          "n_trades": 754,
          "n_runs": 0,
          "n_trade_days": 1,
          "first_trade_date": "2026-07-10",
          "last_trade_date": "2026-07-10",
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
            "retail_pct": 0.9522546419098143,
            "mixed_pct": 0.046419098143236075,
            "instit_pct": 0.001326259946949602,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.7406752591912059,
            "mixed_qty_pct": 0.22914585748089117,
            "instit_qty_pct": 0.030178883327902913,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.7405455930586852,
            "mixed_notional_pct": 0.2291818956998234,
            "instit_notional_pct": 0.030272511241491527,
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
              "retail": 718,
              "mixed": 35,
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
            "avg": 26981.915649867373,
            "median": 16320.0
          },
          "run_size": {
            "avg": null,
            "median": null,
            "avg_length": null
          },
          "recent_trades": [],
          "peer_comparison": [
            {
              "ticker": "2378",
              "currency": "HKD",
              "is_target": true,
              "retail_pct": 0.9522546419098143,
              "mixed_pct": 0.046419098143236075,
              "instit_pct": 0.001326259946949602,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.7406752591912059,
              "mixed_qty_pct": 0.22914585748089117,
              "instit_qty_pct": 0.030178883327902913,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.7405455930586852,
              "mixed_notional_pct": 0.2291818956998234,
              "instit_notional_pct": 0.030272511241491527,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 26981.915649867373,
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
                "retail_max": 78000.0,
                "instit_min": 390000.0
              }
            },
            {
              "ticker": "1828",
              "currency": "HKD",
              "is_target": false,
              "retail_pct": 0.9706546275395034,
              "mixed_pct": 0.02708803611738149,
              "instit_pct": 0.002257336343115124,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.6738410863352332,
              "mixed_qty_pct": 0.2463491653422708,
              "instit_qty_pct": 0.07980974832249597,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.673318950393153,
              "mixed_notional_pct": 0.24640849767985154,
              "instit_notional_pct": 0.08027255192699544,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 14181.931896162529,
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
                "retail_max": 78000.0,
                "instit_min": 390000.0
              }
            },
            {
              "ticker": "2601",
              "currency": "HKD",
              "is_target": false,
              "retail_pct": 0.9276257722859664,
              "mixed_pct": 0.06200353045013239,
              "instit_pct": 0.010370697263901147,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.4371324850555112,
              "mixed_qty_pct": 0.31459197037793235,
              "instit_qty_pct": 0.2482755445665564,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.4376368062366652,
              "mixed_notional_pct": 0.31428656185251996,
              "instit_notional_pct": 0.2480766319108148,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 33229.13729920565,
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
                "retail_max": 78000.0,
                "instit_min": 390000.0
              }
            },
            {
              "ticker": "945",
              "currency": "HKD",
              "is_target": false,
              "retail_pct": 0.6451612903225806,
              "mixed_pct": 0.34408602150537637,
              "instit_pct": 0.010752688172043012,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.27308522318555256,
              "mixed_qty_pct": 0.5754741983114375,
              "instit_qty_pct": 0.15144057850300988,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.27321996553802635,
              "mixed_notional_pct": 0.5759082445574764,
              "instit_notional_pct": 0.15087178990449726,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 92138.33333333333,
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
                "retail_max": 78000.0,
                "instit_min": 390000.0
              }
            },
            {
              "ticker": "1299",
              "currency": "HKD",
              "is_target": false,
              "retail_pct": 0.6318046234153617,
              "mixed_pct": 0.2634228187919463,
              "instit_pct": 0.10477255779269203,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.08571131597902021,
              "mixed_qty_pct": 0.166846532859212,
              "instit_qty_pct": 0.7474421511617678,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.08573560447852864,
              "mixed_notional_pct": 0.16699197198892418,
              "instit_notional_pct": 0.7472724235325472,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 252875.735551827,
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
                "retail_max": 78000.0,
                "instit_min": 390000.0
              }
            }
          ]
        },
        "1w": {
          "valid": true,
          "currency": "HKD",
          "n_trades": 1877,
          "n_runs": 0,
          "n_trade_days": 5,
          "first_trade_date": "2026-07-06",
          "last_trade_date": "2026-07-10",
          "period_days": 4,
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
            "retail_pct": 0.9360681939264784,
            "mixed_pct": 0.06286627597229622,
            "instit_pct": 0.0010655301012253596,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.6459948980678242,
            "mixed_qty_pct": 0.3296239986712831,
            "instit_qty_pct": 0.02438110326089271,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.6462222370759799,
            "mixed_notional_pct": 0.32945225382739723,
            "instit_notional_pct": 0.024325509096622962,
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
              "retail": 1757,
              "mixed": 118,
              "institutional": 2,
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
            "avg": 27080.652797016515,
            "median": 16095.0
          },
          "run_size": {
            "avg": null,
            "median": null,
            "avg_length": null
          },
          "recent_trades": [],
          "peer_comparison": [
            {
              "ticker": "2378",
              "currency": "HKD",
              "is_target": true,
              "retail_pct": 0.9360681939264784,
              "mixed_pct": 0.06286627597229622,
              "instit_pct": 0.0010655301012253596,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.6459948980678242,
              "mixed_qty_pct": 0.3296239986712831,
              "instit_qty_pct": 0.02438110326089271,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.6462222370759799,
              "mixed_notional_pct": 0.32945225382739723,
              "instit_notional_pct": 0.024325509096622962,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 27080.652797016515,
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
                "retail_max": 78000.0,
                "instit_min": 390000.0
              }
            },
            {
              "ticker": "1828",
              "currency": "HKD",
              "is_target": false,
              "retail_pct": 0.9674078586658544,
              "mixed_pct": 0.031069144075540664,
              "instit_pct": 0.0015229972586049345,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.6625836841075294,
              "mixed_qty_pct": 0.28805655930088636,
              "instit_qty_pct": 0.04935975659158416,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.6628916569779799,
              "mixed_notional_pct": 0.2877512988115314,
              "instit_notional_pct": 0.04935704421048857,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 13908.463703929334,
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
                "retail_max": 78000.0,
                "instit_min": 390000.0
              }
            },
            {
              "ticker": "2601",
              "currency": "HKD",
              "is_target": false,
              "retail_pct": 0.8563080698883889,
              "mixed_pct": 0.114240635773973,
              "instit_pct": 0.029451294337638052,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.28044140765617076,
              "mixed_qty_pct": 0.3231720500749929,
              "instit_qty_pct": 0.39638654226883635,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.27996764981856104,
              "mixed_notional_pct": 0.3228477682237325,
              "instit_notional_pct": 0.39718458195770645,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 60622.77043358851,
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
                "retail_max": 78000.0,
                "instit_min": 390000.0
              }
            },
            {
              "ticker": "1299",
              "currency": "HKD",
              "is_target": false,
              "retail_pct": 0.6335850152461159,
              "mixed_pct": 0.26618992304341516,
              "instit_pct": 0.100225061710469,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.09172098633567477,
              "mixed_qty_pct": 0.17376429481325467,
              "instit_qty_pct": 0.7345147188510706,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.09158317690849173,
              "mixed_notional_pct": 0.17377760407473733,
              "instit_notional_pct": 0.734639219016771,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 239474.22261071583,
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
                "retail_max": 78000.0,
                "instit_min": 390000.0
              }
            },
            {
              "ticker": "945",
              "currency": "HKD",
              "is_target": false,
              "retail_pct": 0.597864768683274,
              "mixed_pct": 0.3914590747330961,
              "instit_pct": 0.010676156583629894,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.2376279097600383,
              "mixed_qty_pct": 0.6390999940159177,
              "instit_qty_pct": 0.12327209622404404,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.23762821908587967,
              "mixed_notional_pct": 0.6392341459527047,
              "instit_notional_pct": 0.12313763496141561,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 96157.77153024911,
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
                "retail_max": 78000.0,
                "instit_min": 390000.0
              }
            }
          ]
        },
        "30d": {
          "valid": true,
          "currency": "HKD",
          "n_trades": 10619,
          "n_runs": 0,
          "n_trade_days": 21,
          "first_trade_date": "2026-06-10",
          "last_trade_date": "2026-07-10",
          "period_days": 30,
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
            "retail_pct": 0.9344571051888125,
            "mixed_pct": 0.0633769658159902,
            "instit_pct": 0.002165928995197288,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.6314808630737577,
            "mixed_qty_pct": 0.3268843382059872,
            "instit_qty_pct": 0.041634798720255085,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.6335324969638636,
            "mixed_notional_pct": 0.3253031260768075,
            "instit_notional_pct": 0.041164376959328716,
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
              "retail": 9923,
              "mixed": 673,
              "institutional": 23,
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
            "avg": 27161.41393539881,
            "median": 15045.0
          },
          "run_size": {
            "avg": null,
            "median": null,
            "avg_length": null
          },
          "recent_trades": [],
          "peer_comparison": [
            {
              "ticker": "2378",
              "currency": "HKD",
              "is_target": true,
              "retail_pct": 0.9344571051888125,
              "mixed_pct": 0.0633769658159902,
              "instit_pct": 0.002165928995197288,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.6314808630737577,
              "mixed_qty_pct": 0.3268843382059872,
              "instit_qty_pct": 0.041634798720255085,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.6335324969638636,
              "mixed_notional_pct": 0.3253031260768075,
              "instit_notional_pct": 0.041164376959328716,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 27161.41393539881,
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
                "retail_max": 78000.0,
                "instit_min": 390000.0
              }
            },
            {
              "ticker": "1828",
              "currency": "HKD",
              "is_target": false,
              "retail_pct": 0.9621833490600276,
              "mixed_pct": 0.036002032372795235,
              "instit_pct": 0.0018146185671771794,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.6148845637341093,
              "mixed_qty_pct": 0.322175046637548,
              "instit_qty_pct": 0.06294038962834274,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.616605742409305,
              "mixed_notional_pct": 0.3215095574186984,
              "instit_notional_pct": 0.0618847001719966,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 16012.470035566525,
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
                "retail_max": 78000.0,
                "instit_min": 390000.0
              }
            },
            {
              "ticker": "2601",
              "currency": "HKD",
              "is_target": false,
              "retail_pct": 0.7930804988429955,
              "mixed_pct": 0.1678987569881023,
              "instit_pct": 0.03902074416890218,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.23162144542093932,
              "mixed_qty_pct": 0.34803049781089956,
              "instit_qty_pct": 0.4203480567681611,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.23064788065263206,
              "mixed_notional_pct": 0.34856120027363835,
              "instit_notional_pct": 0.4207909190737296,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 79437.48012358446,
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
                "retail_max": 78000.0,
                "instit_min": 390000.0
              }
            },
            {
              "ticker": "945",
              "currency": "HKD",
              "is_target": false,
              "retail_pct": 0.6859635210150674,
              "mixed_pct": 0.3021411578112609,
              "instit_pct": 0.011895321173671689,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.31330231515219464,
              "mixed_qty_pct": 0.567420944123674,
              "instit_qty_pct": 0.11927674072413127,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.3126444128103745,
              "mixed_notional_pct": 0.5676875971956487,
              "instit_notional_pct": 0.11966798999397693,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 80779.00681998413,
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
                "retail_max": 78000.0,
                "instit_min": 390000.0
              }
            },
            {
              "ticker": "1299",
              "currency": "HKD",
              "is_target": false,
              "retail_pct": 0.6308611160634694,
              "mixed_pct": 0.25410798122065725,
              "instit_pct": 0.1150309027158733,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.0842809523610174,
              "mixed_qty_pct": 0.16522805421635064,
              "instit_qty_pct": 0.7504909934226319,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.08434614028961078,
              "mixed_notional_pct": 0.16583175441005735,
              "instit_notional_pct": 0.7498221053003319,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 252857.27910339044,
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
                "retail_max": 78000.0,
                "instit_min": 390000.0
              }
            }
          ]
        },
        "3m": {
          "valid": true,
          "currency": "HKD",
          "n_trades": 30045,
          "n_runs": 0,
          "n_trade_days": 63,
          "first_trade_date": "2026-04-09",
          "last_trade_date": "2026-07-10",
          "period_days": 92,
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
            "retail_pct": 0.9361291396238974,
            "mixed_pct": 0.05974371775669829,
            "instit_pct": 0.004127142619404227,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.6109981960026465,
            "mixed_qty_pct": 0.293353117763875,
            "instit_qty_pct": 0.0956486862334785,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.6123321125645422,
            "mixed_notional_pct": 0.2921909919129247,
            "instit_notional_pct": 0.0954768955225331,
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
              "retail": 28126,
              "mixed": 1795,
              "institutional": 124,
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
            "avg": 29662.366256615078,
            "median": 12190.0
          },
          "run_size": {
            "avg": null,
            "median": null,
            "avg_length": null
          },
          "recent_trades": [],
          "peer_comparison": [
            {
              "ticker": "2378",
              "currency": "HKD",
              "is_target": true,
              "retail_pct": 0.9361291396238974,
              "mixed_pct": 0.05974371775669829,
              "instit_pct": 0.004127142619404227,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.6109981960026465,
              "mixed_qty_pct": 0.293353117763875,
              "instit_qty_pct": 0.0956486862334785,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.6123321125645422,
              "mixed_notional_pct": 0.2921909919129247,
              "instit_notional_pct": 0.0954768955225331,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 29662.366256615078,
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
                "retail_max": 78000.0,
                "instit_min": 390000.0
              }
            },
            {
              "ticker": "1828",
              "currency": "HKD",
              "is_target": false,
              "retail_pct": 0.9569582435906343,
              "mixed_pct": 0.04015841033835892,
              "instit_pct": 0.0028833460710067393,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.5659777979866959,
              "mixed_qty_pct": 0.31454918148247063,
              "instit_qty_pct": 0.11947302053083343,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.5665876200828208,
              "mixed_notional_pct": 0.31357248857314984,
              "instit_notional_pct": 0.11983989134402936,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 18396.840760091713,
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
                "retail_max": 78000.0,
                "instit_min": 390000.0
              }
            },
            {
              "ticker": "2601",
              "currency": "HKD",
              "is_target": false,
              "retail_pct": 0.8025502346331552,
              "mixed_pct": 0.1588780992183715,
              "instit_pct": 0.03857166614847326,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.22848820119383087,
              "mixed_qty_pct": 0.33717722105343895,
              "instit_qty_pct": 0.43433457775273016,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.22696453364604746,
              "mixed_notional_pct": 0.3367690125355415,
              "instit_notional_pct": 0.436266453818411,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 77299.11137884036,
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
                "retail_max": 78000.0,
                "instit_min": 390000.0
              }
            },
            {
              "ticker": "945",
              "currency": "HKD",
              "is_target": false,
              "retail_pct": 0.7162055335968379,
              "mixed_pct": 0.2735177865612648,
              "instit_pct": 0.010276679841897233,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.34624366287304964,
              "mixed_qty_pct": 0.5592531624109247,
              "instit_qty_pct": 0.09450317471602562,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.3455583819767152,
              "mixed_notional_pct": 0.559316272095376,
              "instit_notional_pct": 0.09512534592790886,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 73733.70993412386,
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
                "retail_max": 78000.0,
                "instit_min": 390000.0
              }
            },
            {
              "ticker": "1299",
              "currency": "HKD",
              "is_target": false,
              "retail_pct": 0.5616790576688927,
              "mixed_pct": 0.3080147954101022,
              "instit_pct": 0.13030614692100506,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.06768454668853628,
              "mixed_qty_pct": 0.176773772880373,
              "instit_qty_pct": 0.7555416804310907,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.06723083405478204,
              "mixed_notional_pct": 0.17842951648770525,
              "instit_notional_pct": 0.7543396494575128,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 277794.08736218547,
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
                "retail_max": 78000.0,
                "instit_min": 390000.0
              }
            }
          ]
        },
        "6m": {
          "valid": true,
          "currency": "HKD",
          "n_trades": 55405,
          "n_runs": 0,
          "n_trade_days": 126,
          "first_trade_date": "2026-01-02",
          "last_trade_date": "2026-07-10",
          "period_days": 189,
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
            "retail_pct": 0.9421532352675751,
            "mixed_pct": 0.05389405288331378,
            "instit_pct": 0.003952711849111091,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.6269432481482304,
            "mixed_qty_pct": 0.2756822241337875,
            "instit_qty_pct": 0.09737452771798207,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.6271565172048639,
            "mixed_notional_pct": 0.2750197657453621,
            "instit_notional_pct": 0.09782371704977401,
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
              "retail": 52200,
              "mixed": 2986,
              "institutional": 219,
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
            "avg": 28608.28119989171,
            "median": 12400.0
          },
          "run_size": {
            "avg": null,
            "median": null,
            "avg_length": null
          },
          "recent_trades": [],
          "peer_comparison": [
            {
              "ticker": "2378",
              "currency": "HKD",
              "is_target": true,
              "retail_pct": 0.9421532352675751,
              "mixed_pct": 0.05389405288331378,
              "instit_pct": 0.003952711849111091,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.6269432481482304,
              "mixed_qty_pct": 0.2756822241337875,
              "instit_qty_pct": 0.09737452771798207,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.6271565172048639,
              "mixed_notional_pct": 0.2750197657453621,
              "instit_notional_pct": 0.09782371704977401,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 28608.28119989171,
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
                "retail_max": 78000.0,
                "instit_min": 390000.0
              }
            },
            {
              "ticker": "1828",
              "currency": "HKD",
              "is_target": false,
              "retail_pct": 0.9420651897503403,
              "mixed_pct": 0.05370151531016739,
              "instit_pct": 0.004233294939492304,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.5288036542066337,
              "mixed_qty_pct": 0.33911757231861117,
              "instit_qty_pct": 0.13207877347475516,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.5278970448664739,
              "mixed_notional_pct": 0.3406584410665832,
              "instit_notional_pct": 0.1314445140669428,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 23481.661907824862,
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
                "retail_max": 78000.0,
                "instit_min": 390000.0
              }
            },
            {
              "ticker": "2601",
              "currency": "HKD",
              "is_target": false,
              "retail_pct": 0.7923078481188474,
              "mixed_pct": 0.1669092497959987,
              "instit_pct": 0.040782902085153915,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.2105983987913,
              "mixed_qty_pct": 0.3455295383097851,
              "instit_qty_pct": 0.4438720628989149,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.20861385935381338,
              "mixed_notional_pct": 0.34441316138271627,
              "instit_notional_pct": 0.44697297926347035,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 81827.0946252192,
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
                "retail_max": 78000.0,
                "instit_min": 390000.0
              }
            },
            {
              "ticker": "945",
              "currency": "HKD",
              "is_target": false,
              "retail_pct": 0.7083457083457083,
              "mixed_pct": 0.27784377784377784,
              "instit_pct": 0.01381051381051381,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.32569253199416814,
              "mixed_qty_pct": 0.5452315382657194,
              "instit_qty_pct": 0.12907592974011248,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.3256720811591348,
              "mixed_notional_pct": 0.5461954442859545,
              "instit_notional_pct": 0.12813247455491075,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 75763.00427680428,
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
                "retail_max": 78000.0,
                "instit_min": 390000.0
              }
            },
            {
              "ticker": "1299",
              "currency": "HKD",
              "is_target": false,
              "retail_pct": 0.5699035549324156,
              "mixed_pct": 0.29737856358151704,
              "instit_pct": 0.13271788148606736,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.07049979770244695,
              "mixed_qty_pct": 0.17824956200346453,
              "instit_qty_pct": 0.7512506402940885,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.07032255680434804,
              "mixed_notional_pct": 0.17912635208709946,
              "instit_notional_pct": 0.7505510911085526,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 267664.27388266963,
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
                "retail_max": 78000.0,
                "instit_min": 390000.0
              }
            }
          ]
        }
      },
      "valid": true,
      "currency": "HKD",
      "n_trades": 55405,
      "n_runs": 0,
      "n_trade_days": 126,
      "first_trade_date": "2026-01-02",
      "last_trade_date": "2026-07-10",
      "period_days": 189,
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
        "retail_pct": 0.9421532352675751,
        "mixed_pct": 0.05389405288331378,
        "instit_pct": 0.003952711849111091,
        "ambiguous_pct": null,
        "unobservable_pct": null,
        "unclear_pct": null,
        "retail_qty_pct": null,
        "mixed_qty_pct": null,
        "instit_qty_pct": null,
        "ambiguous_qty_pct": null,
        "unobservable_qty_pct": null,
        "unclear_qty_pct": null,
        "retail_notional_pct": 0.6271565172048639,
        "mixed_notional_pct": 0.2750197657453621,
        "instit_notional_pct": 0.09782371704977401,
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
        "avg": 28608.28119989171,
        "median": 12400.0
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
            "month": "2026-07",
            "n_trades": 2728,
            "n_runs": 0,
            "retail_pct": 0.9475806451612904,
            "mixed_pct": 0.05205278592375367,
            "instit_pct": 0.00036656891495601173,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "avg_trade_size": 24679.526312316717,
            "avg_run_notional": null,
            "retail_qty_pct": 0.687416749485143,
            "mixed_qty_pct": 0.30333097772595086,
            "instit_qty_pct": 0.009252272788906207,
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
            "total_quantity": 626873.0
          },
          {
            "month": "2026-06",
            "n_trades": 11192,
            "n_runs": 0,
            "retail_pct": 0.9323624017155111,
            "mixed_pct": 0.06379556826304503,
            "instit_pct": 0.0038420300214438885,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "avg_trade_size": 29902.931719085063,
            "avg_run_notional": null,
            "retail_qty_pct": 0.6014389273653306,
            "mixed_qty_pct": 0.29966811616739536,
            "instit_qty_pct": 0.0988929564672741,
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
            "total_quantity": 3228238.0
          },
          {
            "month": "2026-05",
            "n_trades": 10149,
            "n_runs": 0,
            "retail_pct": 0.9216671593260419,
            "mixed_pct": 0.07143560941964726,
            "instit_pct": 0.00689723125431077,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "avg_trade_size": 34854.91360725195,
            "avg_run_notional": null,
            "retail_qty_pct": 0.5580164542145795,
            "mixed_qty_pct": 0.31088615963758903,
            "instit_qty_pct": 0.13109738614783156,
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
            "total_quantity": 2964590.0
          },
          {
            "month": "2026-04",
            "n_trades": 7016,
            "n_runs": 0,
            "retail_pct": 0.9563854047890535,
            "mixed_pct": 0.04147662485746864,
            "instit_pct": 0.002137970353477765,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "avg_trade_size": 25364.839139110605,
            "avg_run_notional": null,
            "retail_qty_pct": 0.7181847962332227,
            "mixed_qty_pct": 0.23660053708354611,
            "instit_qty_pct": 0.04521466668323121,
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
            "total_quantity": 1529371.0
          },
          {
            "month": "2026-03",
            "n_trades": 8155,
            "n_runs": 0,
            "retail_pct": 0.9657878602084611,
            "mixed_pct": 0.03200490496627836,
            "instit_pct": 0.002207234825260576,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "avg_trade_size": 22057.96969957081,
            "avg_run_notional": null,
            "retail_qty_pct": 0.7296600803833821,
            "mixed_qty_pct": 0.2037770773553768,
            "instit_qty_pct": 0.06656284226124104,
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
            "total_quantity": 1614264.0
          },
          {
            "month": "2026-02",
            "n_trades": 5704,
            "n_runs": 0,
            "retail_pct": 0.9193548387096774,
            "mixed_pct": 0.07591164095371669,
            "instit_pct": 0.0047335203366058905,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "avg_trade_size": 33794.577927769984,
            "avg_run_notional": null,
            "retail_qty_pct": 0.5488030518336781,
            "mixed_qty_pct": 0.3395088772650328,
            "instit_qty_pct": 0.11168807090128909,
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
            "total_quantity": 1574922.0
          }
        ]
      },
      "peer_comparison": [
        {
          "ticker": "2378",
          "currency": "HKD",
          "is_target": true,
          "retail_pct": 0.9421532352675751,
          "mixed_pct": 0.05389405288331378,
          "instit_pct": 0.003952711849111091,
          "ambiguous_pct": null,
          "unobservable_pct": null,
          "unclear_pct": null,
          "retail_qty_pct": 0.6269432481482304,
          "mixed_qty_pct": 0.2756822241337875,
          "instit_qty_pct": 0.09737452771798207,
          "ambiguous_qty_pct": null,
          "unobservable_qty_pct": null,
          "unclear_qty_pct": null,
          "retail_notional_pct": 0.6271565172048639,
          "mixed_notional_pct": 0.2750197657453621,
          "instit_notional_pct": 0.09782371704977401,
          "ambiguous_notional_pct": null,
          "unobservable_notional_pct": null,
          "unclear_notional_pct": null,
          "run_retail_pct": null,
          "run_mixed_pct": null,
          "run_instit_pct": null,
          "run_unclear_pct": null,
          "avg_trade_size": 28608.28119989171,
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
            "retail_max": 78000.0,
            "instit_min": 390000.0
          }
        },
        {
          "ticker": "1828",
          "currency": "HKD",
          "is_target": false,
          "retail_pct": 0.9420651897503403,
          "mixed_pct": 0.05370151531016739,
          "instit_pct": 0.004233294939492304,
          "ambiguous_pct": null,
          "unobservable_pct": null,
          "unclear_pct": null,
          "retail_qty_pct": 0.5288036542066337,
          "mixed_qty_pct": 0.33911757231861117,
          "instit_qty_pct": 0.13207877347475516,
          "ambiguous_qty_pct": null,
          "unobservable_qty_pct": null,
          "unclear_qty_pct": null,
          "retail_notional_pct": 0.5278970448664739,
          "mixed_notional_pct": 0.3406584410665832,
          "instit_notional_pct": 0.1314445140669428,
          "ambiguous_notional_pct": null,
          "unobservable_notional_pct": null,
          "unclear_notional_pct": null,
          "run_retail_pct": null,
          "run_mixed_pct": null,
          "run_instit_pct": null,
          "run_unclear_pct": null,
          "avg_trade_size": 23481.661907824862,
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
            "retail_max": 78000.0,
            "instit_min": 390000.0
          }
        },
        {
          "ticker": "2601",
          "currency": "HKD",
          "is_target": false,
          "retail_pct": 0.7923078481188474,
          "mixed_pct": 0.1669092497959987,
          "instit_pct": 0.040782902085153915,
          "ambiguous_pct": null,
          "unobservable_pct": null,
          "unclear_pct": null,
          "retail_qty_pct": 0.2105983987913,
          "mixed_qty_pct": 0.3455295383097851,
          "instit_qty_pct": 0.4438720628989149,
          "ambiguous_qty_pct": null,
          "unobservable_qty_pct": null,
          "unclear_qty_pct": null,
          "retail_notional_pct": 0.20861385935381338,
          "mixed_notional_pct": 0.34441316138271627,
          "instit_notional_pct": 0.44697297926347035,
          "ambiguous_notional_pct": null,
          "unobservable_notional_pct": null,
          "unclear_notional_pct": null,
          "run_retail_pct": null,
          "run_mixed_pct": null,
          "run_instit_pct": null,
          "run_unclear_pct": null,
          "avg_trade_size": 81827.0946252192,
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
            "retail_max": 78000.0,
            "instit_min": 390000.0
          }
        },
        {
          "ticker": "945",
          "currency": "HKD",
          "is_target": false,
          "retail_pct": 0.7083457083457083,
          "mixed_pct": 0.27784377784377784,
          "instit_pct": 0.01381051381051381,
          "ambiguous_pct": null,
          "unobservable_pct": null,
          "unclear_pct": null,
          "retail_qty_pct": 0.32569253199416814,
          "mixed_qty_pct": 0.5452315382657194,
          "instit_qty_pct": 0.12907592974011248,
          "ambiguous_qty_pct": null,
          "unobservable_qty_pct": null,
          "unclear_qty_pct": null,
          "retail_notional_pct": 0.3256720811591348,
          "mixed_notional_pct": 0.5461954442859545,
          "instit_notional_pct": 0.12813247455491075,
          "ambiguous_notional_pct": null,
          "unobservable_notional_pct": null,
          "unclear_notional_pct": null,
          "run_retail_pct": null,
          "run_mixed_pct": null,
          "run_instit_pct": null,
          "run_unclear_pct": null,
          "avg_trade_size": 75763.00427680428,
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
            "retail_max": 78000.0,
            "instit_min": 390000.0
          }
        },
        {
          "ticker": "1299",
          "currency": "HKD",
          "is_target": false,
          "retail_pct": 0.5699035549324156,
          "mixed_pct": 0.29737856358151704,
          "instit_pct": 0.13271788148606736,
          "ambiguous_pct": null,
          "unobservable_pct": null,
          "unclear_pct": null,
          "retail_qty_pct": 0.07049979770244695,
          "mixed_qty_pct": 0.17824956200346453,
          "instit_qty_pct": 0.7512506402940885,
          "ambiguous_qty_pct": null,
          "unobservable_qty_pct": null,
          "unclear_qty_pct": null,
          "retail_notional_pct": 0.07032255680434804,
          "mixed_notional_pct": 0.17912635208709946,
          "instit_notional_pct": 0.7505510911085526,
          "ambiguous_notional_pct": null,
          "unobservable_notional_pct": null,
          "unclear_notional_pct": null,
          "run_retail_pct": null,
          "run_mixed_pct": null,
          "run_instit_pct": null,
          "run_unclear_pct": null,
          "avg_trade_size": 267664.27388266963,
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
            "retail_max": 78000.0,
            "instit_min": 390000.0
          }
        }
      ],
      "peer_comparison_periods": {
        "1d": [
          {
            "ticker": "2378",
            "currency": "HKD",
            "is_target": true,
            "retail_pct": 0.9522546419098143,
            "mixed_pct": 0.046419098143236075,
            "instit_pct": 0.001326259946949602,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.7406752591912059,
            "mixed_qty_pct": 0.22914585748089117,
            "instit_qty_pct": 0.030178883327902913,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.7405455930586852,
            "mixed_notional_pct": 0.2291818956998234,
            "instit_notional_pct": 0.030272511241491527,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 26981.915649867373,
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
              "retail_max": 78000.0,
              "instit_min": 390000.0
            }
          },
          {
            "ticker": "1828",
            "currency": "HKD",
            "is_target": false,
            "retail_pct": 0.9706546275395034,
            "mixed_pct": 0.02708803611738149,
            "instit_pct": 0.002257336343115124,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.6738410863352332,
            "mixed_qty_pct": 0.2463491653422708,
            "instit_qty_pct": 0.07980974832249597,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.673318950393153,
            "mixed_notional_pct": 0.24640849767985154,
            "instit_notional_pct": 0.08027255192699544,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 14181.931896162529,
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
              "retail_max": 78000.0,
              "instit_min": 390000.0
            }
          },
          {
            "ticker": "2601",
            "currency": "HKD",
            "is_target": false,
            "retail_pct": 0.9276257722859664,
            "mixed_pct": 0.06200353045013239,
            "instit_pct": 0.010370697263901147,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.4371324850555112,
            "mixed_qty_pct": 0.31459197037793235,
            "instit_qty_pct": 0.2482755445665564,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.4376368062366652,
            "mixed_notional_pct": 0.31428656185251996,
            "instit_notional_pct": 0.2480766319108148,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 33229.13729920565,
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
              "retail_max": 78000.0,
              "instit_min": 390000.0
            }
          },
          {
            "ticker": "945",
            "currency": "HKD",
            "is_target": false,
            "retail_pct": 0.6451612903225806,
            "mixed_pct": 0.34408602150537637,
            "instit_pct": 0.010752688172043012,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.27308522318555256,
            "mixed_qty_pct": 0.5754741983114375,
            "instit_qty_pct": 0.15144057850300988,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.27321996553802635,
            "mixed_notional_pct": 0.5759082445574764,
            "instit_notional_pct": 0.15087178990449726,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 92138.33333333333,
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
              "retail_max": 78000.0,
              "instit_min": 390000.0
            }
          },
          {
            "ticker": "1299",
            "currency": "HKD",
            "is_target": false,
            "retail_pct": 0.6318046234153617,
            "mixed_pct": 0.2634228187919463,
            "instit_pct": 0.10477255779269203,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.08571131597902021,
            "mixed_qty_pct": 0.166846532859212,
            "instit_qty_pct": 0.7474421511617678,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.08573560447852864,
            "mixed_notional_pct": 0.16699197198892418,
            "instit_notional_pct": 0.7472724235325472,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 252875.735551827,
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
              "retail_max": 78000.0,
              "instit_min": 390000.0
            }
          }
        ],
        "1w": [
          {
            "ticker": "2378",
            "currency": "HKD",
            "is_target": true,
            "retail_pct": 0.9360681939264784,
            "mixed_pct": 0.06286627597229622,
            "instit_pct": 0.0010655301012253596,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.6459948980678242,
            "mixed_qty_pct": 0.3296239986712831,
            "instit_qty_pct": 0.02438110326089271,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.6462222370759799,
            "mixed_notional_pct": 0.32945225382739723,
            "instit_notional_pct": 0.024325509096622962,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 27080.652797016515,
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
              "retail_max": 78000.0,
              "instit_min": 390000.0
            }
          },
          {
            "ticker": "1828",
            "currency": "HKD",
            "is_target": false,
            "retail_pct": 0.9674078586658544,
            "mixed_pct": 0.031069144075540664,
            "instit_pct": 0.0015229972586049345,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.6625836841075294,
            "mixed_qty_pct": 0.28805655930088636,
            "instit_qty_pct": 0.04935975659158416,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.6628916569779799,
            "mixed_notional_pct": 0.2877512988115314,
            "instit_notional_pct": 0.04935704421048857,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 13908.463703929334,
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
              "retail_max": 78000.0,
              "instit_min": 390000.0
            }
          },
          {
            "ticker": "2601",
            "currency": "HKD",
            "is_target": false,
            "retail_pct": 0.8563080698883889,
            "mixed_pct": 0.114240635773973,
            "instit_pct": 0.029451294337638052,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.28044140765617076,
            "mixed_qty_pct": 0.3231720500749929,
            "instit_qty_pct": 0.39638654226883635,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.27996764981856104,
            "mixed_notional_pct": 0.3228477682237325,
            "instit_notional_pct": 0.39718458195770645,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 60622.77043358851,
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
              "retail_max": 78000.0,
              "instit_min": 390000.0
            }
          },
          {
            "ticker": "1299",
            "currency": "HKD",
            "is_target": false,
            "retail_pct": 0.6335850152461159,
            "mixed_pct": 0.26618992304341516,
            "instit_pct": 0.100225061710469,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.09172098633567477,
            "mixed_qty_pct": 0.17376429481325467,
            "instit_qty_pct": 0.7345147188510706,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.09158317690849173,
            "mixed_notional_pct": 0.17377760407473733,
            "instit_notional_pct": 0.734639219016771,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 239474.22261071583,
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
              "retail_max": 78000.0,
              "instit_min": 390000.0
            }
          },
          {
            "ticker": "945",
            "currency": "HKD",
            "is_target": false,
            "retail_pct": 0.597864768683274,
            "mixed_pct": 0.3914590747330961,
            "instit_pct": 0.010676156583629894,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.2376279097600383,
            "mixed_qty_pct": 0.6390999940159177,
            "instit_qty_pct": 0.12327209622404404,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.23762821908587967,
            "mixed_notional_pct": 0.6392341459527047,
            "instit_notional_pct": 0.12313763496141561,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 96157.77153024911,
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
              "retail_max": 78000.0,
              "instit_min": 390000.0
            }
          }
        ],
        "30d": [
          {
            "ticker": "2378",
            "currency": "HKD",
            "is_target": true,
            "retail_pct": 0.9344571051888125,
            "mixed_pct": 0.0633769658159902,
            "instit_pct": 0.002165928995197288,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.6314808630737577,
            "mixed_qty_pct": 0.3268843382059872,
            "instit_qty_pct": 0.041634798720255085,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.6335324969638636,
            "mixed_notional_pct": 0.3253031260768075,
            "instit_notional_pct": 0.041164376959328716,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 27161.41393539881,
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
              "retail_max": 78000.0,
              "instit_min": 390000.0
            }
          },
          {
            "ticker": "1828",
            "currency": "HKD",
            "is_target": false,
            "retail_pct": 0.9621833490600276,
            "mixed_pct": 0.036002032372795235,
            "instit_pct": 0.0018146185671771794,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.6148845637341093,
            "mixed_qty_pct": 0.322175046637548,
            "instit_qty_pct": 0.06294038962834274,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.616605742409305,
            "mixed_notional_pct": 0.3215095574186984,
            "instit_notional_pct": 0.0618847001719966,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 16012.470035566525,
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
              "retail_max": 78000.0,
              "instit_min": 390000.0
            }
          },
          {
            "ticker": "2601",
            "currency": "HKD",
            "is_target": false,
            "retail_pct": 0.7930804988429955,
            "mixed_pct": 0.1678987569881023,
            "instit_pct": 0.03902074416890218,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.23162144542093932,
            "mixed_qty_pct": 0.34803049781089956,
            "instit_qty_pct": 0.4203480567681611,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.23064788065263206,
            "mixed_notional_pct": 0.34856120027363835,
            "instit_notional_pct": 0.4207909190737296,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 79437.48012358446,
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
              "retail_max": 78000.0,
              "instit_min": 390000.0
            }
          },
          {
            "ticker": "945",
            "currency": "HKD",
            "is_target": false,
            "retail_pct": 0.6859635210150674,
            "mixed_pct": 0.3021411578112609,
            "instit_pct": 0.011895321173671689,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.31330231515219464,
            "mixed_qty_pct": 0.567420944123674,
            "instit_qty_pct": 0.11927674072413127,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.3126444128103745,
            "mixed_notional_pct": 0.5676875971956487,
            "instit_notional_pct": 0.11966798999397693,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 80779.00681998413,
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
              "retail_max": 78000.0,
              "instit_min": 390000.0
            }
          },
          {
            "ticker": "1299",
            "currency": "HKD",
            "is_target": false,
            "retail_pct": 0.6308611160634694,
            "mixed_pct": 0.25410798122065725,
            "instit_pct": 0.1150309027158733,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.0842809523610174,
            "mixed_qty_pct": 0.16522805421635064,
            "instit_qty_pct": 0.7504909934226319,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.08434614028961078,
            "mixed_notional_pct": 0.16583175441005735,
            "instit_notional_pct": 0.7498221053003319,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 252857.27910339044,
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
              "retail_max": 78000.0,
              "instit_min": 390000.0
            }
          }
        ],
        "3m": [
          {
            "ticker": "2378",
            "currency": "HKD",
            "is_target": true,
            "retail_pct": 0.9361291396238974,
            "mixed_pct": 0.05974371775669829,
            "instit_pct": 0.004127142619404227,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.6109981960026465,
            "mixed_qty_pct": 0.293353117763875,
            "instit_qty_pct": 0.0956486862334785,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.6123321125645422,
            "mixed_notional_pct": 0.2921909919129247,
            "instit_notional_pct": 0.0954768955225331,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 29662.366256615078,
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
              "retail_max": 78000.0,
              "instit_min": 390000.0
            }
          },
          {
            "ticker": "1828",
            "currency": "HKD",
            "is_target": false,
            "retail_pct": 0.9569582435906343,
            "mixed_pct": 0.04015841033835892,
            "instit_pct": 0.0028833460710067393,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.5659777979866959,
            "mixed_qty_pct": 0.31454918148247063,
            "instit_qty_pct": 0.11947302053083343,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.5665876200828208,
            "mixed_notional_pct": 0.31357248857314984,
            "instit_notional_pct": 0.11983989134402936,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 18396.840760091713,
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
              "retail_max": 78000.0,
              "instit_min": 390000.0
            }
          },
          {
            "ticker": "2601",
            "currency": "HKD",
            "is_target": false,
            "retail_pct": 0.8025502346331552,
            "mixed_pct": 0.1588780992183715,
            "instit_pct": 0.03857166614847326,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.22848820119383087,
            "mixed_qty_pct": 0.33717722105343895,
            "instit_qty_pct": 0.43433457775273016,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.22696453364604746,
            "mixed_notional_pct": 0.3367690125355415,
            "instit_notional_pct": 0.436266453818411,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 77299.11137884036,
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
              "retail_max": 78000.0,
              "instit_min": 390000.0
            }
          },
          {
            "ticker": "945",
            "currency": "HKD",
            "is_target": false,
            "retail_pct": 0.7162055335968379,
            "mixed_pct": 0.2735177865612648,
            "instit_pct": 0.010276679841897233,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.34624366287304964,
            "mixed_qty_pct": 0.5592531624109247,
            "instit_qty_pct": 0.09450317471602562,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.3455583819767152,
            "mixed_notional_pct": 0.559316272095376,
            "instit_notional_pct": 0.09512534592790886,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 73733.70993412386,
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
              "retail_max": 78000.0,
              "instit_min": 390000.0
            }
          },
          {
            "ticker": "1299",
            "currency": "HKD",
            "is_target": false,
            "retail_pct": 0.5616790576688927,
            "mixed_pct": 0.3080147954101022,
            "instit_pct": 0.13030614692100506,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.06768454668853628,
            "mixed_qty_pct": 0.176773772880373,
            "instit_qty_pct": 0.7555416804310907,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.06723083405478204,
            "mixed_notional_pct": 0.17842951648770525,
            "instit_notional_pct": 0.7543396494575128,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 277794.08736218547,
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
              "retail_max": 78000.0,
              "instit_min": 390000.0
            }
          }
        ],
        "6m": [
          {
            "ticker": "2378",
            "currency": "HKD",
            "is_target": true,
            "retail_pct": 0.9421532352675751,
            "mixed_pct": 0.05389405288331378,
            "instit_pct": 0.003952711849111091,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.6269432481482304,
            "mixed_qty_pct": 0.2756822241337875,
            "instit_qty_pct": 0.09737452771798207,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.6271565172048639,
            "mixed_notional_pct": 0.2750197657453621,
            "instit_notional_pct": 0.09782371704977401,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 28608.28119989171,
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
              "retail_max": 78000.0,
              "instit_min": 390000.0
            }
          },
          {
            "ticker": "1828",
            "currency": "HKD",
            "is_target": false,
            "retail_pct": 0.9420651897503403,
            "mixed_pct": 0.05370151531016739,
            "instit_pct": 0.004233294939492304,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.5288036542066337,
            "mixed_qty_pct": 0.33911757231861117,
            "instit_qty_pct": 0.13207877347475516,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.5278970448664739,
            "mixed_notional_pct": 0.3406584410665832,
            "instit_notional_pct": 0.1314445140669428,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 23481.661907824862,
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
              "retail_max": 78000.0,
              "instit_min": 390000.0
            }
          },
          {
            "ticker": "2601",
            "currency": "HKD",
            "is_target": false,
            "retail_pct": 0.7923078481188474,
            "mixed_pct": 0.1669092497959987,
            "instit_pct": 0.040782902085153915,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.2105983987913,
            "mixed_qty_pct": 0.3455295383097851,
            "instit_qty_pct": 0.4438720628989149,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.20861385935381338,
            "mixed_notional_pct": 0.34441316138271627,
            "instit_notional_pct": 0.44697297926347035,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 81827.0946252192,
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
              "retail_max": 78000.0,
              "instit_min": 390000.0
            }
          },
          {
            "ticker": "945",
            "currency": "HKD",
            "is_target": false,
            "retail_pct": 0.7083457083457083,
            "mixed_pct": 0.27784377784377784,
            "instit_pct": 0.01381051381051381,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.32569253199416814,
            "mixed_qty_pct": 0.5452315382657194,
            "instit_qty_pct": 0.12907592974011248,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.3256720811591348,
            "mixed_notional_pct": 0.5461954442859545,
            "instit_notional_pct": 0.12813247455491075,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 75763.00427680428,
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
              "retail_max": 78000.0,
              "instit_min": 390000.0
            }
          },
          {
            "ticker": "1299",
            "currency": "HKD",
            "is_target": false,
            "retail_pct": 0.5699035549324156,
            "mixed_pct": 0.29737856358151704,
            "instit_pct": 0.13271788148606736,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.07049979770244695,
            "mixed_qty_pct": 0.17824956200346453,
            "instit_qty_pct": 0.7512506402940885,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.07032255680434804,
            "mixed_notional_pct": 0.17912635208709946,
            "instit_notional_pct": 0.7505510911085526,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 267664.27388266963,
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
              "retail_max": 78000.0,
              "instit_min": 390000.0
            }
          }
        ]
      },
      "peer_activity_enabled": true,
      "peer_activity_reason": null,
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
      "total_trades": 51647,
      "price_moving_trades": 22824,
      "pct_price_moving": 44.19230545820667,
      "all_movers": {
        "count": 22824,
        "avg_size": 31683.948912548196,
        "median_size": 12880.000000000002,
        "retail_count": 21155,
        "mixed_count": 1549,
        "institutional_count": 120,
        "ambiguous_count": 0,
        "unobservable_count": 0,
        "retail_pct": 92.68752190676481,
        "mixed_pct": 6.786715737819839,
        "instit_pct": 0.5257623554153523,
        "unclear_pct": null
      },
      "positive_movers": {
        "count": 11421,
        "avg_size": 32351.019074511867,
        "median_size": 15615.0,
        "retail_count": 10500,
        "mixed_count": 881,
        "institutional_count": 40,
        "ambiguous_count": 0,
        "unobservable_count": 0,
        "retail_pct": 91.93590753874442,
        "mixed_pct": 7.713860432536555,
        "instit_pct": 0.35023202871902637,
        "unclear_pct": null
      },
      "negative_movers": {
        "count": 11403,
        "avg_size": 31015.825759010786,
        "median_size": 12330.0,
        "retail_count": 10655,
        "mixed_count": 668,
        "institutional_count": 80,
        "ambiguous_count": 0,
        "unobservable_count": 0,
        "retail_pct": 93.44032272209067,
        "mixed_pct": 5.858107515566079,
        "instit_pct": 0.701569762343243,
        "unclear_pct": null
      }
    },
    "short_selling": {
      "data_available": false
    },
    "intraday": {
      "session_periods": [
        "1D",
        "1W",
        "1M",
        "3M",
        "6M"
      ],
      "session": {
        "1D": {
          "opening": 0.0,
          "continuous": 0.9783635351609613,
          "closing": 0.015212771599904716,
          "auctions": 0.015212771599904716,
          "other": 0.006423693239133945
        },
        "1W": {
          "opening": 6.10800495761858e-05,
          "continuous": 0.9861684711425729,
          "closing": 0.011578437685038594,
          "auctions": 0.011639517734614779,
          "other": 0.0021920111228124614
        },
        "1M": {
          "opening": 0.0004115117507946526,
          "continuous": 0.9455649699434094,
          "closing": 0.05131995686251149,
          "auctions": 0.051731468613306145,
          "other": 0.002703561443284294
        },
        "3M": {
          "opening": 0.0017939817600443524,
          "continuous": 0.9445339979266768,
          "closing": 0.02339139958277463,
          "auctions": 0.025185381342818985,
          "other": 0.03028062073050415
        },
        "6M": {
          "opening": 0.0034490942269510753,
          "continuous": 0.9119759835759896,
          "closing": 0.04579075585599264,
          "auctions": 0.049239850082943716,
          "other": 0.038784166341066774
        }
      },
      "hhi": {
        "1D": 0.16280466249473913,
        "1W": 0.22949268096098466,
        "1M": 0.19881994028668507,
        "3M": 0.19233725292196652,
        "6M": 0.1969387508360389
      },
      "profile_buckets": [
        {
          "time": "09:00",
          "avg_share": 0.0038
        },
        {
          "time": "09:30",
          "avg_share": 0.1128
        },
        {
          "time": "10:00",
          "avg_share": 0.0513
        },
        {
          "time": "10:30",
          "avg_share": 0.0501
        },
        {
          "time": "11:00",
          "avg_share": 0.0403
        },
        {
          "time": "11:30",
          "avg_share": 0.0297
        },
        {
          "time": "12:00",
          "avg_share": 0.0329
        },
        {
          "time": "13:00",
          "avg_share": 0.0795
        },
        {
          "time": "13:30",
          "avg_share": 0.0599
        },
        {
          "time": "14:00",
          "avg_share": 0.0544
        },
        {
          "time": "14:30",
          "avg_share": 0.0837
        },
        {
          "time": "15:00",
          "avg_share": 0.1352
        },
        {
          "time": "15:30",
          "avg_share": 0.2512
        },
        {
          "time": "16:00",
          "avg_share": 0.0152
        }
      ],
      "peers_hhi_rows": [
        {
          "ticker": "2378",
          "auctions_pct": 5.154152045653852,
          "hhi": 0.19591233771586675,
          "interp": {
            "text": "Moderate",
            "cls": "bg-amber-500/20 text-amber-400",
            "you": true
          }
        },
        {
          "ticker": "2601",
          "auctions_pct": 7.78909022538081,
          "hhi": 0.11251807868750092,
          "interp": {
            "text": "Spread out",
            "cls": "bg-emerald-500/20 text-emerald-400"
          }
        },
        {
          "ticker": "1299",
          "auctions_pct": 22.14403130313217,
          "hhi": 0.12060041941063084,
          "interp": {
            "text": "Spread out",
            "cls": "bg-emerald-500/20 text-emerald-400"
          }
        },
        {
          "ticker": "945",
          "auctions_pct": 2.982468324176262,
          "hhi": 0.20675655176497656,
          "interp": {
            "text": "Moderate",
            "cls": "bg-amber-500/20 text-amber-400"
          }
        },
        {
          "ticker": "1828",
          "auctions_pct": 11.633102235923221,
          "hhi": 0.1735823496098509,
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
