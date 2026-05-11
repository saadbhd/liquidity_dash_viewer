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
      "marketCap": 145411520.025,
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
      "marketCap": 25257480.0,
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
      "marketCap": 40499746.632,
      "sector": "Software - Infrastructure",
      "industry": "Technology"
    },
    {
      "ticker": "LVR",
      "name": "17LIVE GROUP",
      "marketCap": 157568730.3,
      "sector": "Software - Application",
      "industry": "Technology"
    },
    {
      "ticker": "ITS",
      "name": "Info-Tech",
      "marketCap": 254130000.0,
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
    "asof_date": "2026-05-08",
    "industry": "Technology",
    "sector": "Software - Application",
    "market_cap_display": "145.4M",
    "market_cap_category": "small",
    "universe_total": 557,
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
          "score_pca": 82.58527827648115,
          "score_pca_percentile": 82.58527827648115,
          "rank_pca": 98,
          "total": 557,
          "adv_notional_sgd": 2258535.0,
          "adv_volume_shares": 8857000.0,
          "free_float_shares": null,
          "turnover_ratio": 0.015532022494584331,
          "votes": 285.0,
          "trades": 285.0,
          "spread_pct": 0.020911158878894772,
          "spread_ticks": 1.0751072961373391,
          "amihud": 8.855297792595651e-09,
          "volatility": 0.748118057313962
        },
        "pca": {
          "valid": true,
          "window_days": 1,
          "variance_explained": 0.5012539841257782,
          "loadings": {
            "log_adv": 0.5640414617425991,
            "log_trades": 0.5243567546391843,
            "log_turnover": 0.5230557804438739,
            "neg_spread": 0.3589291409946924,
            "neg_amihud": 0.06096546160555764,
            "neg_vol": -0.027802123656626085
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
          "peer_median_adv": 9834.150000000001,
          "peer_median_score_pca": 39.22800718132855,
          "peer_median_trades": 9.0,
          "peer_median_volatility": 0.0,
          "peer_median_spread_pct": 0.050183627166226735,
          "peer_median_spread_ticks": 1.869598765432099,
          "peer_median_amihud": 2.0521701042157633e-07,
          "peer_median_turnover_ratio": 0.0007539695099593177,
          "target_vs_peer": {
            "score_pca_delta": 43.36,
            "adv_delta_pct": 22866.2,
            "trades_delta_pct": 3066.67,
            "volatility_delta_pct": null,
            "spread_pct_delta_pct": 58.33,
            "spread_ticks_delta_pct": -42.5,
            "amihud_delta_pct": 95.68,
            "turnover_ratio_delta_pct": 1960.03
          }
        },
        "peer_liquidity": [
          {
            "ticker": "TKU",
            "score_pca": 82.58527827648115,
            "rank_pca": 98,
            "adv": 2258535.0,
            "trades": 285.0,
            "volatility": 0.748118057313962,
            "spread_pct": 0.020911158878894772,
            "spread_ticks": 1.0751072961373391,
            "amihud": 8.855297792595651e-09,
            "turnover_ratio": 0.015532022494584331,
            "is_target": true
          },
          {
            "ticker": "KUX",
            "score_pca": 1.7953321364452424,
            "rank_pca": 548,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.0,
            "spread_pct": 0.8288973384030416,
            "spread_ticks": 43.6,
            "amihud": null,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "532",
            "score_pca": 32.13644524236984,
            "rank_pca": 379,
            "adv": 9723.300000000001,
            "trades": 15.0,
            "volatility": 0.0,
            "spread_pct": 0.6666666666666666,
            "spread_ticks": 1.0,
            "amihud": 0.0,
            "turnover_ratio": 0.0010540626164082022,
            "is_target": false
          },
          {
            "ticker": "U77",
            "score_pca": 35.727109515260324,
            "rank_pca": 359,
            "adv": 2189.0,
            "trades": 1.0,
            "volatility": 0.0,
            "spread_pct": 0.010701920050361986,
            "spread_ticks": 2.125,
            "amihud": 2.284148012791231e-06,
            "turnover_ratio": 3.406891633838685e-05,
            "is_target": false
          },
          {
            "ticker": "J03",
            "score_pca": 74.1472172351885,
            "rank_pca": 145,
            "adv": 211864.80000000002,
            "trades": 79.0,
            "volatility": 0.763096243526681,
            "spread_pct": 0.041850220264317214,
            "spread_ticks": 1.0178571428571428,
            "amihud": 2.0521701042157633e-07,
            "turnover_ratio": 0.015093930113398867,
            "is_target": false
          },
          {
            "ticker": "NXR",
            "score_pca": 42.72890484739677,
            "rank_pca": 320,
            "adv": 9945.0,
            "trades": 3.0,
            "volatility": 0.0,
            "spread_pct": 0.05851703406813625,
            "spread_ticks": 4.5625,
            "amihud": 0.0,
            "turnover_ratio": 0.00045387640351043316,
            "is_target": false
          },
          {
            "ticker": "42F",
            "score_pca": 59.964093357271096,
            "rank_pca": 224,
            "adv": 27059.4,
            "trades": 24.0,
            "volatility": 0.3467150657358996,
            "spread_pct": 0.0363636363636364,
            "spread_ticks": 1.0,
            "amihud": 1.3198476579039335e-06,
            "turnover_ratio": 0.0012221282476896661,
            "is_target": false
          },
          {
            "ticker": "LVR",
            "score_pca": 35.18850987432675,
            "rank_pca": 362,
            "adv": 4500.0,
            "trades": 1.0,
            "volatility": 0.0,
            "spread_pct": 0.060905349794238735,
            "spread_ticks": 10.882352941176471,
            "amihud": 9.4562647754137e-06,
            "turnover_ratio": 3.4565356234328974e-05,
            "is_target": false
          },
          {
            "ticker": "ITS",
            "score_pca": 77.91741472172352,
            "rank_pca": 124,
            "adv": 510821.0,
            "trades": 170.0,
            "volatility": 0.23895019159995562,
            "spread_pct": 0.009513832305125525,
            "spread_ticks": 1.6141975308641976,
            "amihud": 4.8456260113669516e-08,
            "turnover_ratio": 0.007680846463048701,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Software - Application",
          "sector_count": 8,
          "market_count": 557,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.3112459244578871,
              "median": 0.11301621754974246,
              "min": 0.0,
              "max": 35.85782843759051,
              "p5": 0.0,
              "p95": 0.9115861012629628,
              "count": 557
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 4178028.1218900494,
              "median": 19825.0,
              "min": 0.0,
              "max": 417027024.0,
              "p5": 0.0,
              "p95": 15806579.399999976,
              "count": 557
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.1040296831544397,
              "median": 0.029704984740589874,
              "min": 0.00029332562692606454,
              "max": 1.5471698113207548,
              "p5": 0.0036355278502263645,
              "p95": 0.5058282208588948,
              "count": 555
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.005207877590601519,
              "median": 0.00037457513990092346,
              "min": 0.0,
              "max": 0.6097159053457254,
              "p5": 0.0,
              "p95": 0.015467691626938293,
              "count": 550
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 0.00013268384813239236,
              "median": 1.0657444992663314e-08,
              "min": 0.0,
              "max": 0.015166835187057663,
              "p5": 0.0,
              "p95": 1.636626472542144e-05,
              "count": 403
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 549.5170556552962,
              "median": 9.0,
              "min": 0.0,
              "max": 15141.0,
              "p5": 0.0,
              "p95": 3042.1999999999916,
              "count": 557
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.15193679162118176,
              "median": 0.0,
              "min": 0.0,
              "max": 0.748118057313962,
              "p5": 0.0,
              "p95": 0.5699093043140595,
              "count": 8
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 1614408.1625,
              "median": 9834.150000000001,
              "min": 0.0,
              "max": 10119552.0,
              "p5": 766.1500000000001,
              "p95": 7368196.049999995,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.207262213100199,
              "median": 0.03971409647351551,
              "min": 0.001984404635126496,
              "max": 0.8288973384030416,
              "p5": 0.004619704319626156,
              "p95": 0.7721166032953103,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.003945205921372301,
              "median": 0.0007539695099593177,
              "min": 0.0,
              "max": 0.015532022494584331,
              "p5": 1.1924120718435399e-05,
              "p95": 0.012784110883546857,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.685437372995811e-06,
              "median": 8.855297792595651e-09,
              "min": 0.0,
              "max": 9.4562647754137e-06,
              "p5": 0.0,
              "p95": 7.304629746626955e-06,
              "count": 7
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 268.375,
              "median": 9.0,
              "min": 0.0,
              "max": 1672.0,
              "p5": 0.35000000000000003,
              "p95": 1186.5499999999993,
              "count": 8
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 97012.8125,
              "median": 9834.150000000001,
              "min": 0.0,
              "max": 510821.0,
              "p5": 766.1500000000001,
              "p95": 406186.32999999984,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 36.625,
              "median": 9.0,
              "min": 0.0,
              "max": 170.0,
              "p5": 0.35000000000000003,
              "p95": 138.14999999999995,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.16859518760781703,
              "median": 0.0,
              "min": 0.0,
              "max": 0.763096243526681,
              "p5": 0.0,
              "p95": 0.6173628312999073,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.21417699973944052,
              "median": 0.050183627166226735,
              "min": 0.009513832305125525,
              "max": 0.8288973384030416,
              "p5": 0.009929663015958287,
              "p95": 0.7721166032953103,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 8.225238451862227,
              "median": 1.869598765432099,
              "min": 1.0,
              "max": 43.6,
              "p5": 1.0,
              "p95": 32.14882352941175,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.003196684764578573,
              "median": 0.0007539695099593177,
              "min": 0.0,
              "max": 0.015093930113398867,
              "p5": 1.1924120718435399e-05,
              "p95": 0.012499350835776305,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.9019905309491586e-06,
              "median": 2.0521701042157633e-07,
              "min": 0.0,
              "max": 9.4562647754137e-06,
              "p5": 0.0,
              "p95": 7.304629746626955e-06,
              "count": 7
            }
          },
          "returns": {
            "window_days": 1,
            "n_obs": 1,
            "stock": 0.020000000000000018,
            "market": -0.004059130133046374,
            "sector": -0.0017064846416381396,
            "peers": -0.0024999999999999467,
            "vs_market": 0.02405913013304639,
            "vs_sector": 0.021706484641638157,
            "vs_peers": 0.022499999999999964
          }
        }
      },
      "1w": {
        "label": "1W",
        "window_days": 5,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 5,
          "score_pca": 69.6588868940754,
          "score_pca_percentile": 69.6588868940754,
          "rank_pca": 170,
          "total": 557,
          "adv_notional_sgd": 165301.5,
          "adv_volume_shares": 674700.0,
          "free_float_shares": null,
          "turnover_ratio": 0.00118318342295315,
          "votes": 50.0,
          "trades": 50.0,
          "spread_pct": 0.024736472241742816,
          "spread_ticks": 1.2153846153846153,
          "amihud": 1.4918248000954785e-07,
          "volatility": 0.36261400277308736
        },
        "pca": {
          "valid": true,
          "window_days": 5,
          "variance_explained": 0.5150211998687302,
          "loadings": {
            "log_adv": 0.5520418538055655,
            "log_trades": 0.5028909034145376,
            "log_turnover": 0.5066851444821476,
            "neg_spread": 0.3937039338801553,
            "neg_amihud": 0.17154930081623315,
            "neg_vol": 0.03447818306817109
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
          "peer_median_adv": 7188.75,
          "peer_median_score_pca": 44.703770197486534,
          "peer_median_trades": 5.5,
          "peer_median_volatility": 0.3134958681409237,
          "peer_median_spread_pct": 0.04040404040404044,
          "peer_median_spread_ticks": 1.5747956800934033,
          "peer_median_amihud": 3.1054874460048885e-07,
          "peer_median_turnover_ratio": 0.0003082425904201916,
          "target_vs_peer": {
            "score_pca_delta": 24.96,
            "adv_delta_pct": 2199.4,
            "trades_delta_pct": 809.09,
            "volatility_delta_pct": -15.67,
            "spread_pct_delta_pct": 38.78,
            "spread_ticks_delta_pct": -22.82,
            "amihud_delta_pct": 51.96,
            "turnover_ratio_delta_pct": 283.85
          }
        },
        "peer_liquidity": [
          {
            "ticker": "TKU",
            "score_pca": 69.6588868940754,
            "rank_pca": 170,
            "adv": 165301.5,
            "trades": 50.0,
            "volatility": 0.36261400277308736,
            "spread_pct": 0.024736472241742816,
            "spread_ticks": 1.2153846153846153,
            "amihud": 1.4918248000954785e-07,
            "turnover_ratio": 0.00118318342295315,
            "is_target": true
          },
          {
            "ticker": "KUX",
            "score_pca": 2.872531418312388,
            "rank_pca": 542,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.0,
            "spread_pct": 0.8017118402282455,
            "spread_ticks": 40.142857142857146,
            "amihud": null,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "532",
            "score_pca": 23.518850987432675,
            "rank_pca": 427,
            "adv": 1500.0,
            "trades": 2.0,
            "volatility": 0.0,
            "spread_pct": 0.6666666666666666,
            "spread_ticks": 1.0,
            "amihud": 0.0,
            "turnover_ratio": 0.00016260877732995004,
            "is_target": false
          },
          {
            "ticker": "U77",
            "score_pca": 43.98563734290844,
            "rank_pca": 313,
            "adv": 4432.5,
            "trades": 8.0,
            "volatility": 0.1543081173318612,
            "spread_pct": 0.010701920050361986,
            "spread_ticks": 2.0,
            "amihud": 5.857087075361162e-07,
            "turnover_ratio": 6.9686419783064e-05,
            "is_target": false
          },
          {
            "ticker": "J03",
            "score_pca": 73.78815080789947,
            "rank_pca": 147,
            "adv": 211864.80000000002,
            "trades": 52.0,
            "volatility": 0.3867867137620572,
            "spread_pct": 0.04444444444444448,
            "spread_ticks": 1.043010752688172,
            "amihud": 0.0,
            "turnover_ratio": 0.015093930113398867,
            "is_target": false
          },
          {
            "ticker": "NXR",
            "score_pca": 45.421903052064636,
            "rank_pca": 305,
            "adv": 9945.0,
            "trades": 3.0,
            "volatility": 0.35953484408360903,
            "spread_pct": 0.026270702455739602,
            "spread_ticks": 1.9166666666666667,
            "amihud": 1.3851075775643653e-06,
            "turnover_ratio": 0.00045387640351043316,
            "is_target": false
          },
          {
            "ticker": "42F",
            "score_pca": 68.04308797127469,
            "rank_pca": 179,
            "adv": 115003.8,
            "trades": 29.0,
            "volatility": 0.5121275617017538,
            "spread_pct": 0.0363636363636364,
            "spread_ticks": 1.0,
            "amihud": 3.1054874460048885e-07,
            "turnover_ratio": 0.005194106024954463,
            "is_target": false
          },
          {
            "ticker": "LVR",
            "score_pca": 30.520646319569124,
            "rank_pca": 388,
            "adv": 1316.0,
            "trades": 1.0,
            "volatility": 0.5569976306825536,
            "spread_pct": 0.060905349794238735,
            "spread_ticks": 10.882352941176471,
            "amihud": 9.4562647754137e-06,
            "turnover_ratio": 9.678299745612113e-06,
            "is_target": false
          },
          {
            "ticker": "ITS",
            "score_pca": 82.2262118491921,
            "rank_pca": 100,
            "adv": 685386.0,
            "trades": 376.0,
            "volatility": 0.2674568921982383,
            "spread_pct": 0.010961596408027656,
            "spread_ticks": 1.2329246935201401,
            "amihud": 1.4590318448290466e-08,
            "turnover_ratio": 0.01005056384462948,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Software - Application",
          "sector_count": 8,
          "market_count": 557,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.5003253469289717,
              "median": 0.30148145704139345,
              "min": 0.0,
              "max": 7.09929573971954,
              "p5": 0.0,
              "p95": 1.6143666093546518,
              "count": 557
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 3679897.589932503,
              "median": 19720.0,
              "min": 0.0,
              "max": 319264520.0,
              "p5": 0.0,
              "p95": 17735342.699999984,
              "count": 557
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.10210140262819141,
              "median": 0.028547344759763935,
              "min": 0.0002879945579246963,
              "max": 1.4976744186046513,
              "p5": 0.00346489898359491,
              "p95": 0.4995610809817071,
              "count": 555
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.004583968808561456,
              "median": 0.00032041069207893857,
              "min": 0.0,
              "max": 0.6097159053457254,
              "p5": 0.0,
              "p95": 0.01504760070178789,
              "count": 550
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 9.492623244367277e-05,
              "median": 6.655242942156455e-08,
              "min": 0.0,
              "max": 0.007638888888888888,
              "p5": 0.0,
              "p95": 5.841130539787752e-05,
              "count": 515
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 552.3770197486535,
              "median": 9.0,
              "min": 0.0,
              "max": 11456.0,
              "p5": 0.0,
              "p95": 3927.999999999998,
              "count": 557
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.22395242267313903,
              "median": 0.21088250476504977,
              "min": 0.0,
              "max": 0.5569976306825536,
              "p5": 0.0,
              "p95": 0.4889633609142403,
              "count": 8
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 1598533.0,
              "median": 7188.75,
              "min": 0.0,
              "max": 11920383.0,
              "p5": 460.6,
              "p95": 7988134.049999994,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.2004132454390059,
              "median": 0.02550358734874121,
              "min": 0.0013514156670242764,
              "max": 0.8017118402282455,
              "p5": 0.004624092201192476,
              "p95": 0.7544460294816928,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.002498720510418108,
              "median": 0.0003082425904201916,
              "min": 0.0,
              "max": 0.01005056384462948,
              "p5": 3.38740491096424e-06,
              "p95": 0.009353924919396772,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.655885179712924e-06,
              "median": 1.4918248000954785e-07,
              "min": 0.0,
              "max": 9.4562647754137e-06,
              "p5": 1.0271970553465575e-10,
              "p95": 7.034917616058895e-06,
              "count": 7
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 313.125,
              "median": 5.5,
              "min": 0.0,
              "max": 2065.0,
              "p5": 0.35000000000000003,
              "p95": 1473.849999999999,
              "count": 8
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 128681.01250000001,
              "median": 7188.75,
              "min": 0.0,
              "max": 685386.0,
              "p5": 460.6,
              "p95": 519653.5799999997,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 58.875,
              "median": 5.5,
              "min": 0.0,
              "max": 376.0,
              "p5": 0.35000000000000003,
              "p95": 262.5999999999998,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.2796514699700091,
              "median": 0.3134958681409237,
              "min": 0.0,
              "max": 0.5569976306825536,
              "p5": 0.0,
              "p95": 0.5412931065392736,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.20725326955142015,
              "median": 0.04040404040404044,
              "min": 0.010701920050361986,
              "max": 0.8017118402282455,
              "p5": 0.01079280677554497,
              "p95": 0.7544460294816928,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 7.4022265246135746,
              "median": 1.5747956800934033,
              "min": 1.0,
              "max": 40.142857142857146,
              "p5": 1.0,
              "p95": 29.901680672268895,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0038793062354189837,
              "median": 0.0003082425904201916,
              "min": 0.0,
              "max": 0.015093930113398867,
              "p5": 3.38740491096424e-06,
              "p95": 0.01332875191932958,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.678888589080423e-06,
              "median": 3.1054874460048885e-07,
              "min": 0.0,
              "max": 9.4562647754137e-06,
              "p5": 0.0,
              "p95": 7.034917616058895e-06,
              "count": 7
            }
          },
          "returns": {
            "window_days": 5,
            "n_obs": 5,
            "stock": 0.0851063829787233,
            "market": 0.001874728722420338,
            "sector": 0.012747428629563462,
            "peers": 0.010082677664974726,
            "vs_market": 0.08323165425630297,
            "vs_sector": 0.07235895434915984,
            "vs_peers": 0.07502370531374858
          }
        }
      },
      "30d": {
        "label": "1M",
        "window_days": 21,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 21,
          "score_pca": 68.40215439856372,
          "score_pca_percentile": 68.40215439856372,
          "rank_pca": 177,
          "total": 557,
          "adv_notional_sgd": 188278.0,
          "adv_volume_shares": 818600.0,
          "free_float_shares": null,
          "turnover_ratio": 0.001435532755342298,
          "votes": 44.0,
          "trades": 44.0,
          "spread_pct": 0.023336745138178114,
          "spread_ticks": 1.1176470588235294,
          "amihud": 9.383156015142504e-08,
          "volatility": 0.5626901249092141
        },
        "pca": {
          "valid": true,
          "window_days": 21,
          "variance_explained": 0.5286596009677178,
          "loadings": {
            "log_adv": 0.5389301427904062,
            "log_trades": 0.489922032416946,
            "log_turnover": 0.4868880372825646,
            "neg_spread": 0.41553034473488837,
            "neg_amihud": 0.1508689445866734,
            "neg_vol": 0.19246775485597772
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
          "peer_median_adv": 7114.15,
          "peer_median_score_pca": 46.409335727109514,
          "peer_median_trades": 5.0,
          "peer_median_volatility": 0.5036750238481752,
          "peer_median_spread_pct": 0.03683548137515401,
          "peer_median_spread_ticks": 1.6745672436750998,
          "peer_median_amihud": 5.553165530146883e-07,
          "peer_median_turnover_ratio": 0.00012110307729663602,
          "target_vs_peer": {
            "score_pca_delta": 21.99,
            "adv_delta_pct": 2546.5,
            "trades_delta_pct": 780.0,
            "volatility_delta_pct": -11.72,
            "spread_pct_delta_pct": 36.65,
            "spread_ticks_delta_pct": -33.26,
            "amihud_delta_pct": 83.1,
            "turnover_ratio_delta_pct": 1085.38
          }
        },
        "peer_liquidity": [
          {
            "ticker": "TKU",
            "score_pca": 68.40215439856372,
            "rank_pca": 177,
            "adv": 188278.0,
            "trades": 44.0,
            "volatility": 0.5626901249092141,
            "spread_pct": 0.023336745138178114,
            "spread_ticks": 1.1176470588235294,
            "amihud": 9.383156015142504e-08,
            "turnover_ratio": 0.001435532755342298,
            "is_target": true
          },
          {
            "ticker": "KUX",
            "score_pca": 2.154398563734291,
            "rank_pca": 546,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 4.014372790730359,
            "spread_pct": 0.5614035087719298,
            "spread_ticks": 24.25,
            "amihud": 0.00031763779127385455,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "532",
            "score_pca": 12.926391382405743,
            "rank_pca": 486,
            "adv": 1500.0,
            "trades": 2.0,
            "volatility": 3.9496835316263,
            "spread_pct": 0.6666666666666666,
            "spread_ticks": 1.0,
            "amihud": 0.0,
            "turnover_ratio": 0.00016260877732995004,
            "is_target": false
          },
          {
            "ticker": "U77",
            "score_pca": 45.78096947935368,
            "rank_pca": 303,
            "adv": 5114.3,
            "trades": 4.0,
            "volatility": 0.27212500670118167,
            "spread_pct": 0.014243050769584209,
            "spread_ticks": 2.2,
            "amihud": 1.4642717688402982e-06,
            "turnover_ratio": 7.9597377263322e-05,
            "is_target": false
          },
          {
            "ticker": "J03",
            "score_pca": 66.78635547576302,
            "rank_pca": 186,
            "adv": 203786.0,
            "trades": 71.0,
            "volatility": 1.617764136590597,
            "spread_pct": 0.04611198625232712,
            "spread_ticks": 1.0555555555555556,
            "amihud": 2.0521701042157633e-07,
            "turnover_ratio": 0.015093930113398867,
            "is_target": false
          },
          {
            "ticker": "NXR",
            "score_pca": 22.44165170556553,
            "rank_pca": 433,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.29772217664259576,
            "spread_pct": 0.036262203626220395,
            "spread_ticks": 2.6,
            "amihud": 3.39663529307869e-06,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "42F",
            "score_pca": 73.4290843806104,
            "rank_pca": 149,
            "adv": 207399.30000000002,
            "trades": 50.0,
            "volatility": 0.5306860827878795,
            "spread_pct": 0.03740875912408763,
            "spread_ticks": 1.0232558139534884,
            "amihud": 7.338955501652384e-08,
            "turnover_ratio": 0.00872110815106983,
            "is_target": false
          },
          {
            "ticker": "LVR",
            "score_pca": 47.03770197486535,
            "rank_pca": 296,
            "adv": 9114.0,
            "trades": 6.0,
            "volatility": 0.47666396490847085,
            "spread_pct": 0.02073005858494819,
            "spread_ticks": 3.533333333333333,
            "amihud": 9.054160956078003e-07,
            "turnover_ratio": 7.120463384271768e-05,
            "is_target": false
          },
          {
            "ticker": "ITS",
            "score_pca": 85.27827648114902,
            "rank_pca": 83,
            "adv": 1027979.0000000001,
            "trades": 481.0,
            "volatility": 0.33808999400064166,
            "spread_pct": 0.010269651223321194,
            "spread_ticks": 1.1491344873501996,
            "amihud": 1.4057264723185525e-08,
            "turnover_ratio": 0.014581167263539233,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Software - Application",
          "sector_count": 8,
          "market_count": 557,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.6281920216469347,
              "median": 0.3805421491173954,
              "min": 0.0,
              "max": 5.873670062235366,
              "p5": 0.08037265342402455,
              "p95": 1.9178433474022847,
              "count": 557
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 3290284.3133458956,
              "median": 15610.5,
              "min": 0.0,
              "max": 268652400.0,
              "p5": 0.0,
              "p95": 13799501.799999936,
              "count": 557
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.10246077788577725,
              "median": 0.02947598253275106,
              "min": 0.0002620504005019638,
              "max": 1.2631578947368423,
              "p5": 0.0033289781322812803,
              "p95": 0.48891840108457263,
              "count": 555
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.004068772239622605,
              "median": 0.0003635408308854712,
              "min": 0.0,
              "max": 0.6097159053457254,
              "p5": 0.0,
              "p95": 0.013811955915964177,
              "count": 550
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 3.7102349671114585e-05,
              "median": 8.902925967240328e-08,
              "min": 0.0,
              "max": 0.007177033492822966,
              "p5": 0.0,
              "p95": 3.842310660874722e-05,
              "count": 544
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 493.3536804308797,
              "median": 8.0,
              "min": 0.0,
              "max": 12747.0,
              "p5": 0.0,
              "p95": 2879.799999999997,
              "count": 557
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 1.268398397767609,
              "median": 0.40737697945455625,
              "min": 0.23583959262210885,
              "max": 4.014372790730359,
              "p5": 0.24853948754978433,
              "p95": 3.9917315500439385,
              "count": 8
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 1681958.1625,
              "median": 7114.15,
              "min": 0.0,
              "max": 12223680.0,
              "p5": 0.0,
              "p95": 8305184.649999994,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.16677140091137047,
              "median": 0.022033401861563152,
              "min": 0.0012593225101152894,
              "max": 0.6666666666666666,
              "p5": 0.004412937559737357,
              "p95": 0.6298245614035087,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0030487847153388365,
              "median": 0.00012110307729663602,
              "min": 0.0,
              "max": 0.014581167263539233,
              "p5": 0.0,
              "p95": 0.01229881714168811,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 4.043905620916419e-05,
              "median": 4.996238278796127e-07,
              "min": 0.0,
              "max": 0.00031763779127385455,
              "p5": 1.56245970156014e-10,
              "p95": 0.00020765338668058282,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 389.25,
              "median": 5.0,
              "min": 0.0,
              "max": 2577.0,
              "p5": 0.0,
              "p95": 1843.3999999999987,
              "count": 8
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 181861.575,
              "median": 7114.15,
              "min": 0.0,
              "max": 1027979.0000000001,
              "p5": 0.0,
              "p95": 740776.1049999996,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 76.75,
              "median": 5.0,
              "min": 0.0,
              "max": 481.0,
              "p5": 0.0,
              "p95": 337.4999999999998,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 1.4371384604985034,
              "median": 0.5036750238481752,
              "min": 0.27212500670118167,
              "max": 4.014372790730359,
              "p5": 0.2810840161806766,
              "p95": 3.9917315500439385,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.1741369856273856,
              "median": 0.03683548137515401,
              "min": 0.010269651223321194,
              "max": 0.6666666666666666,
              "p5": 0.01166034106451325,
              "p95": 0.6298245614035087,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 4.601409898774072,
              "median": 1.6745672436750998,
              "min": 1.0,
              "max": 24.25,
              "p5": 1.008139534883721,
              "p95": 16.999166666666653,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 4.046209728269283e-05,
              "median": 5.553165530146883e-07,
              "min": 0.0,
              "max": 0.00031763779127385455,
              "p5": 4.920042653114934e-09,
              "p95": 0.00020765338668058282,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.004838702039555489,
              "median": 0.00012110307729663602,
              "min": 0.0,
              "max": 0.015093930113398867,
              "p5": 0.0,
              "p95": 0.014914463115947995,
              "count": 8
            }
          },
          "returns": {
            "window_days": 21,
            "n_obs": 21,
            "stock": 0.13333333333333286,
            "market": -0.01484170599624135,
            "sector": -0.0022776966084120387,
            "peers": 0.004681296454256634,
            "vs_market": 0.1481750393295742,
            "vs_sector": 0.1356110299417449,
            "vs_peers": 0.12865203687907623
          }
        }
      },
      "3m": {
        "label": "3M",
        "window_days": 63,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 63,
          "score_pca": 72.5314183123878,
          "score_pca_percentile": 72.5314183123878,
          "rank_pca": 154,
          "total": 557,
          "adv_notional_sgd": 228475.0,
          "adv_volume_shares": 913900.0,
          "free_float_shares": null,
          "turnover_ratio": 0.001602655002574305,
          "votes": 71.0,
          "trades": 71.0,
          "spread_pct": 0.02496157393175533,
          "spread_ticks": 1.1699029126213591,
          "amihud": 7.83519022118116e-08,
          "volatility": 0.5597510480519746
        },
        "pca": {
          "valid": true,
          "window_days": 63,
          "variance_explained": 0.5535253651253933,
          "loadings": {
            "log_adv": 0.5225777292733518,
            "log_trades": 0.471173834202942,
            "log_turnover": 0.47610600162495226,
            "neg_spread": 0.42503263871266594,
            "neg_amihud": 0.18779885333574603,
            "neg_vol": 0.24961902323628016
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
          "peer_median_adv": 5966.25,
          "peer_median_score_pca": 45.421903052064636,
          "peer_median_trades": 6.0,
          "peer_median_volatility": 0.5680677653093896,
          "peer_median_spread_pct": 0.044812060718844623,
          "peer_median_spread_ticks": 1.6110106489853324,
          "peer_median_amihud": 5.152466424607622e-07,
          "peer_median_turnover_ratio": 7.770425162209993e-05,
          "target_vs_peer": {
            "score_pca_delta": 27.11,
            "adv_delta_pct": 3729.5,
            "trades_delta_pct": 1083.33,
            "volatility_delta_pct": 1.46,
            "spread_pct_delta_pct": 44.3,
            "spread_ticks_delta_pct": -27.38,
            "amihud_delta_pct": 84.79,
            "turnover_ratio_delta_pct": 1962.51
          }
        },
        "peer_liquidity": [
          {
            "ticker": "TKU",
            "score_pca": 72.5314183123878,
            "rank_pca": 154,
            "adv": 228475.0,
            "trades": 71.0,
            "volatility": 0.5597510480519746,
            "spread_pct": 0.02496157393175533,
            "spread_ticks": 1.1699029126213591,
            "amihud": 7.83519022118116e-08,
            "turnover_ratio": 0.001602655002574305,
            "is_target": true
          },
          {
            "ticker": "KUX",
            "score_pca": 3.052064631956912,
            "rank_pca": 541,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 2.28509876728461,
            "spread_pct": 0.4381778741865511,
            "spread_ticks": 19.0,
            "amihud": 0.00036013640690511566,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "532",
            "score_pca": 2.6929982046678633,
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
            "score_pca": 45.78096947935368,
            "rank_pca": 303,
            "adv": 4432.5,
            "trades": 4.0,
            "volatility": 0.33979649952943153,
            "spread_pct": 0.02257525083612037,
            "spread_ticks": 1.9444444444444444,
            "amihud": 1.7770953731544884e-06,
            "turnover_ratio": 6.9686419783064e-05,
            "is_target": false
          },
          {
            "ticker": "J03",
            "score_pca": 45.062836624775585,
            "rank_pca": 307,
            "adv": 7500.0,
            "trades": 9.0,
            "volatility": 1.132293930992719,
            "spread_pct": 0.07011686143572618,
            "spread_ticks": 1.125,
            "amihud": 2.0823608708066677e-07,
            "turnover_ratio": 0.0009101463574161126,
            "is_target": false
          },
          {
            "ticker": "NXR",
            "score_pca": 34.8294434470377,
            "rank_pca": 364,
            "adv": 639.0,
            "trades": 1.0,
            "volatility": 0.357667459667796,
            "spread_pct": 0.04377431906614782,
            "spread_ticks": 3.3333333333333335,
            "amihud": 1.6790372046077726e-06,
            "turnover_ratio": 3.2038334365442344e-05,
            "is_target": false
          },
          {
            "ticker": "42F",
            "score_pca": 63.016157989228006,
            "rank_pca": 207,
            "adv": 49255.799999999996,
            "trades": 23.0,
            "volatility": 0.6045527191328599,
            "spread_pct": 0.04584980237154143,
            "spread_ticks": 1.0526315789473684,
            "amihud": 0.0,
            "turnover_ratio": 0.0027302164575457926,
            "is_target": false
          },
          {
            "ticker": "LVR",
            "score_pca": 51.526032315978455,
            "rank_pca": 271,
            "adv": 10790.0,
            "trades": 8.0,
            "volatility": 0.3594765593115577,
            "spread_pct": 0.01609538002980627,
            "spread_ticks": 2.7777777777777777,
            "amihud": 8.222571978408574e-07,
            "turnover_ratio": 8.572208346113586e-05,
            "is_target": false
          },
          {
            "ticker": "ITS",
            "score_pca": 83.66247755834829,
            "rank_pca": 92,
            "adv": 844272.0,
            "trades": 358.0,
            "volatility": 0.5315828114859193,
            "spread_pct": 0.010621495696122571,
            "spread_ticks": 1.2775768535262206,
            "amihud": 1.8048675400492878e-08,
            "turnover_ratio": 0.012023353564795478,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Software - Application",
          "sector_count": 8,
          "market_count": 557,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.6857772975939581,
              "median": 0.47113695542018347,
              "min": 0.0,
              "max": 7.013811259728676,
              "p5": 0.15928649572804995,
              "p95": 2.2156654613240514,
              "count": 557
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 3337185.7428127225,
              "median": 13673.0,
              "min": 0.0,
              "max": 290156410.0,
              "p5": 0.0,
              "p95": 13469855.999999957,
              "count": 557
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.1000191771579588,
              "median": 0.031003217315004293,
              "min": 0.0002705286818559187,
              "max": 1.3542204201990415,
              "p5": 0.0035508696516023982,
              "p95": 0.449926928849013,
              "count": 555
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.006008716965530666,
              "median": 0.0002710710295060269,
              "min": 0.0,
              "max": 2.0598510315733964,
              "p5": 0.0,
              "p95": 0.011797294577046237,
              "count": 550
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.947731127760664e-05,
              "median": 1.4041732770947104e-07,
              "min": 0.0,
              "max": 0.002923830374993834,
              "p5": 0.0,
              "p95": 4.499116061909415e-05,
              "count": 554
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 476.9631956912029,
              "median": 7.0,
              "min": 0.0,
              "max": 11391.0,
              "p5": 0.0,
              "p95": 2819.9999999999973,
              "count": 557
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.870322422367753,
              "median": 0.4455296853987385,
              "min": 0.27875824953461886,
              "max": 2.28509876728461,
              "p5": 0.3001216370328033,
              "p95": 2.2729709931616373,
              "count": 8
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 2100329.4375,
              "median": 7611.25,
              "min": 0.0,
              "max": 15714026.999999998,
              "p5": 0.0,
              "p95": 10509612.74999999,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.1530273291017815,
              "median": 0.02376841238393785,
              "min": 0.0013460724010818808,
              "max": 0.6666666666666666,
              "p5": 0.004592470554346122,
              "p95": 0.5866955892986261,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0029465669958143523,
              "median": 7.770425162209993e-05,
              "min": 0.0,
              "max": 0.012023353564795478,
              "p5": 0.0,
              "p95": 0.011230858013654449,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 4.55639812446544e-05,
              "median": 4.503045500263345e-07,
              "min": 0.0,
              "max": 0.00036013640690511566,
              "p5": 2.2844461645260412e-10,
              "p95": 0.00023471064786892906,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 504.125,
              "median": 6.0,
              "min": 0.0,
              "max": 3591.0,
              "p5": 0.0,
              "p95": 2459.449999999998,
              "count": 8
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 114611.1625,
              "median": 5966.25,
              "min": 0.0,
              "max": 844272.0,
              "p5": 0.0,
              "p95": 566016.3299999996,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 50.375,
              "median": 6.0,
              "min": 0.0,
              "max": 358.0,
              "p5": 0.0,
              "p95": 240.74999999999983,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.9826145914351263,
              "median": 0.5680677653093896,
              "min": 0.33979649952943153,
              "max": 2.28509876728461,
              "p5": 0.3460513355778591,
              "p95": 2.2729709931616373,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.16423470628608527,
              "median": 0.044812060718844623,
              "min": 0.010621495696122571,
              "max": 0.6666666666666666,
              "p5": 0.012537355212911867,
              "p95": 0.5866955892986261,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 3.938845498503643,
              "median": 1.6110106489853324,
              "min": 1.0,
              "max": 19.0,
              "p5": 1.018421052631579,
              "p95": 13.516666666666659,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 4.558013518039999e-05,
              "median": 5.152466424607622e-07,
              "min": 0.0,
              "max": 0.00036013640690511566,
              "p5": 0.0,
              "p95": 0.00023471064786892906,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.001981395402170878,
              "median": 7.770425162209993e-05,
              "min": 0.0,
              "max": 0.012023353564795478,
              "p5": 0.0,
              "p95": 0.008770755577258083,
              "count": 8
            }
          },
          "returns": {
            "window_days": 63,
            "n_obs": 63,
            "stock": 0.01999999999999913,
            "market": -0.008780605710653755,
            "sector": -0.08405923099396839,
            "peers": -0.02395965398305544,
            "vs_market": 0.028780605710652885,
            "vs_sector": 0.10405923099396752,
            "vs_peers": 0.04395965398305457
          }
        }
      }
    },
    "period_insights": {
      "1d": {
        "liquidity": "1D score 82.6 vs peer median 39.2 (+43.4 pts).",
        "market_comparison": "The stock rose 2.0% compared with peers falling 0.2%, which supports a firmer tape and can help keep attention on the name."
      },
      "1w": {
        "liquidity": "Weekly tradability appears strong for the stock’s size, supported by a liquidity score well ahead of peers. That keeps access looking healthy over the recent window.",
        "market_comparison": "The stock gained 8.5% compared with peers at 1.0%, which reinforces stronger market engagement than the peer group."
      },
      "30d": {
        "liquidity": "Monthly tradability is strong and looks broadly stable, with a 1M score of 68.4 compared with a peer median of 46.4. That suggests the stock remains accessible relative to similar names.",
        "market_comparison": "The stock returned 13.3% compared with peers at 0.5% and the market at -1.5%, giving liquidity a stronger return backdrop than the main comparison groups."
      },
      "3m": {
        "liquidity": "Three-month tradability is strong, with a score of 72.5 compared with the peer median of 45.4. That indicates liquidity is structurally better than peers for a stock of this size.",
        "market_comparison": "Primary average daily volume is S$228.5K compared with a peer median of S$6.0K, which strengthens the case that access is better than the peer set."
      }
    }
  },
  "q02": {
    "driver_model": {
      "valid": true,
      "model_method": "ols_with_volatility_regimes",
      "estimation_window_days": 71,
      "reporting_window_days": 63,
      "available_history_days": 71,
      "n_regimes": 2,
      "current_regime": 0,
      "current_regime_label": "Low Volatility",
      "current_regime_probability": 1.0,
      "current_driver_mix": {
        "market_share": {
          "median": 0.19536128624104895,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "19.5%",
          "display_range": null,
          "display_text": "19.5%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 71 trading days.",
          "kind": "share_pct",
          "value_pct": 19.5,
          "plain_english": "Market explains about 19.5% of price moves in the current state."
        },
        "sector_share": {
          "median": 0.5055691086109971,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "50.6%",
          "display_range": null,
          "display_text": "50.6%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 71 trading days.",
          "kind": "share_pct",
          "value_pct": 50.6,
          "plain_english": "Sector explains about 50.6% of price moves in the current state."
        },
        "company_share": {
          "median": 0.2990696051479539,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "29.9%",
          "display_range": null,
          "display_text": "29.9%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 71 trading days.",
          "kind": "share_pct",
          "value_pct": 29.9,
          "plain_english": "Company-specific explains about 29.9% of price moves in the current state."
        },
        "basis": "current_state"
      },
      "current_sensitivities": {
        "beta_market": {
          "median": -0.6932261714058102,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "-0.69",
          "display_range": null,
          "display_text": "-0.69",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 71 trading days.",
          "kind": "beta",
          "strength_label": "Modest",
          "plain_english": "Modest market link: a 1% market move has lined up with about a 0.69% stock move in the opposite direction in this state.",
          "value_num": -0.69
        },
        "beta_stock_lag": {
          "median": -1.0606853168796961,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "-1.06",
          "display_range": null,
          "display_text": "-1.06",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 71 trading days.",
          "kind": "lag_beta",
          "value_num": -1.06
        },
        "beta_sector": {
          "median": 3.437028661909254,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "3.44",
          "display_range": null,
          "display_text": "3.44",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 71 trading days.",
          "kind": "beta",
          "strength_label": "Very high",
          "plain_english": "Very high sector link: a 1% sector move has lined up with about a 3.44% stock move in the same direction in this state.",
          "value_num": 3.44
        },
        "beta_market_lag": {
          "median": 4.347623552435577,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "4.35",
          "display_range": null,
          "display_text": "4.35",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 71 trading days.",
          "kind": "lag_beta",
          "value_num": 4.35
        },
        "beta_sector_lag": {
          "median": 4.645709003292627,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "4.65",
          "display_range": null,
          "display_text": "4.65",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 71 trading days.",
          "kind": "lag_beta",
          "value_num": 4.65
        },
        "posterior_source": null,
        "intervals_collapsed": false,
        "confidence_label": "High, limited history",
        "confidence_note": "Based on 71 trading days relative to the 252-day target."
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
        },
        {
          "month_key": "2026-05",
          "month_label": "May 2026",
          "month_short_label": "May",
          "period_label": "2026-05-04 to 2026-05-08",
          "n_obs": 5,
          "partial_month": true,
          "dominant_driver": "sector",
          "dominant_driver_label": "Sector",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.5055691086109971,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "50.6%",
            "display_range": null,
            "display_text": "50.6%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
            "kind": "share_pct",
            "value_pct": 50.6,
            "plain_english": "Sector explains about 50.6% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.19536128624104895,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "19.5%",
              "display_range": null,
              "display_text": "19.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
              "kind": "share_pct",
              "value_pct": 19.5,
              "plain_english": "Market explains about 19.5% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.5055691086109971,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "50.6%",
              "display_range": null,
              "display_text": "50.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
              "kind": "share_pct",
              "value_pct": 50.6,
              "plain_english": "Sector explains about 50.6% of price moves in the current state."
            },
            "company_share": {
              "median": 0.2990696051479539,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "29.9%",
              "display_range": null,
              "display_text": "29.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
              "kind": "share_pct",
              "value_pct": 29.9,
              "plain_english": "Company-specific explains about 29.9% of price moves in the current state."
            }
          },
          "summary": "May: Mostly sector-driven, though based on only 5 trading days."
        }
      ],
      "regimes": [
        {
          "id": 0,
          "label": "Low Volatility",
          "pct_time": 0.5072463768115942,
          "expected_duration_days": 5.833333333333333,
          "current_probability": 1.0,
          "n_days_effective": 35.0,
          "volatility": {
            "median": 0.028001456845083605,
            "low": 0.028001456845083605,
            "high": 0.028001456845083605
          },
          "volatility_label": "Low Volatility",
          "current_probability_display": null
        },
        {
          "id": 1,
          "label": "High Volatility",
          "pct_time": 0.4927536231884058,
          "expected_duration_days": 6.8,
          "current_probability": 0.0,
          "n_days_effective": 34.0,
          "volatility": {
            "median": 0.04274693047254109,
            "low": 0.04274693047254109,
            "high": 0.04274693047254109
          },
          "volatility_label": "High Volatility",
          "current_probability_display": 0.0
        }
      ],
      "transitions": {
        "mean": [
          [
            0.8529411764705882,
            0.14705882352941177
          ],
          [
            0.14705882352941177,
            0.8529411764705882
          ]
        ],
        "low": [],
        "high": [],
        "counts": [
          [
            29.0,
            5.0
          ],
          [
            5.0,
            29.0
          ]
        ]
      },
      "methodology": {
        "estimation_window_days": 71,
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
        "market_link_display": "-0.69",
        "sector_link_display": "3.44",
        "market_link_explainer": "Modest market link. A 1% market move has lined up with about a 0.69% stock move in the opposite direction in this state. This is a point estimate from 71 trading days.",
        "sector_link_explainer": "Very high sector link. A 1% sector move has lined up with about a 3.44% stock move in the same direction in this state. This is a point estimate from 71 trading days.",
        "stock_persistence_display": "-1.06",
        "point_estimate_note": "Point estimate only because the current state has 71 trading days.",
        "history_limited_note": "Read is based on 71 trading days versus the 252-day target."
      },
      "current_summary": {
        "regime_label": "Low Volatility",
        "dominant_driver": "sector",
        "dominant_driver_label": "Sector",
        "driver_share_pct": 50.6,
        "driver_share_display": "50.6%",
        "confidence_label": "High, limited history",
        "confidence_pct": 100.0,
        "display_confidence_pct": null,
        "confidence_note": "Based on 71 trading days relative to the 252-day target.",
        "history_days": 71,
        "history_limited": true,
        "volatility_label": "Low Volatility",
        "lead_signal_text": "No stable lead signal.",
        "state_term": "state",
        "stay_probability": 0.8529411764705882,
        "effective_days": 35.0,
        "persistence_note": "This state looks more persistent, with a typical run length of about 5.8 days.",
        "expected_duration_days": 5.8
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
          "pct_time": 0.5072463768115942,
          "expected_duration_days": 5.833333333333333,
          "current_probability": 1.0,
          "n_days_effective": 35.0,
          "volatility": {
            "median": 0.028001456845083605,
            "low": 0.028001456845083605,
            "high": 0.028001456845083605
          },
          "volatility_label": "Low Volatility"
        },
        {
          "id": 1,
          "label": "High Volatility",
          "pct_time": 0.4927536231884058,
          "expected_duration_days": 6.8,
          "current_probability": 0.0,
          "n_days_effective": 34.0,
          "volatility": {
            "median": 0.04274693047254109,
            "low": 0.04274693047254109,
            "high": 0.04274693047254109
          },
          "volatility_label": "High Volatility"
        }
      ],
      "transitions": [
        [
          0.8529411764705882,
          0.14705882352941177
        ],
        [
          0.14705882352941177,
          0.8529411764705882
        ]
      ],
      "transition_intervals": {
        "mean": [
          [
            0.8529411764705882,
            0.14705882352941177
          ],
          [
            0.14705882352941177,
            0.8529411764705882
          ]
        ],
        "low": [],
        "high": [],
        "counts": [
          [
            29.0,
            5.0
          ],
          [
            5.0,
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
        "text": "Liquidity score: 72.5 — Strong",
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
    "liq_subtitle": "Structural liquidity is strong relative to peers, while displayed buy-side depth is notably thinner than the offer.",
    "market_comparison_title": "How You Compare to the Market",
    "market_comparison_subtitle": "Context relative to market, sector, and peer medians.",
    "perf_title": "Stock Performance",
    "perf_subtitle": "Recent performance is strong, with the stock up 13.3% over one month compared with peers at 0.5% and the market at -1.5%.",
    "perf_insight": "Performance is mixed relative to comparison groups. Recent price performance is stronger than the main comparison groups, so the tape has a firmer return backdrop than peers. Recent trend context is too limited to say whether access has changed from the 1M baseline.",
    "drivers_title": "What Moves Your Stock Price?",
    "drivers_subtitle": "Sector moves are the main current influence, accounting for 50.6% of price action.",
    "drivers_strip": [
      {
        "title": "Current Driver (Last 5 Days)",
        "text": "Over the last 5 trading days, moves are mainly sector-driven, accounting for about 50.6% of price changes. Other influences are market 19.5%, and company-specific 29.9%."
      },
      {
        "title": "Driver Mix",
        "text": "Based on the last 5 trading days, current mix is market 19.5%, sector 50.6%, and company-specific 29.9%."
      },
      {
        "title": "Monthly Trend",
        "text": "The driver mix has shifted from company-driven to sector-driven over Mar to May."
      }
    ],
    "drivers_pie_title": "Current Driver Mix (Last 5 Days)",
    "drivers_pie_note": "Based on the last 5 trading days, current split is market 19.5%, sector 50.6%, and company-specific 29.9%.",
    "lead_lag_title": "",
    "lead_lag_note": "",
    "rolling_title": "Monthly Driver Shift",
    "rolling_latest_label": "Latest: {period}",
    "rolling_note": "Each bar shows the monthly split between market-, sector-, and company-driven moves.",
    "drivers_bottom_line": "The tape is being driven more by sector direction than by company-specific news. That matters because broader market moves are still shaping trading conditions alongside the thin bid side.",
    "drivers_wtd_title": "Key Reads",
    "drivers_wtd_list": [
      "Main driver now: sector factors are driving 50.6% of recent price moves.",
      "For its size, monthly liquidity remains strong versus peers, but recent change versus the 1M baseline is unclear. The displayed book shows thin buy-side support, with bid depth at 0.25x ask depth and a 1-tick spread, so selling may feel harder than the monthly liquidity score suggests. Trading is still meaningfully sector-led at 50.6%, and the stock has outperformed over 1M at +13.3% versus peers at +0.5% and the market at -1.5%."
    ],
    "regime_title": "Market State",
    "regime_subtitle": "Trading conditions look supportive overall, but the displayed book is less balanced on the buy side.",
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
    "exec_check_subtitle": "Combines the final continuous-session displayed book before close, trade-size stress tests based on available history from Jan 22, 2026 to May 8, 2026 (73 trading days • 11,973 trades), large sell-side orders observed today, and intraday spread/depth during the continuous trading session.",
    "order_book_title": "Order Book Depth (Available Liquidity)",
    "order_book_note": "Depth shown is based on the displayed order book.",
    "peer_capacity_title": "Peer Capacity Context",
    "peer_capacity_note": "Immediate buy-side depth is thin enough that downside execution may feel worse than the monthly liquidity score",
    "impact_summary_title": "Estimated Price Impact (Sell Orders)",
    "impact_summary_subtitle": "Approximate price impact (%) for sell orders.",
    "exec_check_insight": "The key execution watchpoint is the bid, with displayed bid depth at 0.25x of ask depth despite a 1-tick spread.",
    "trader_composition_title": "Who's Trading Your Stock?",
    "trader_composition_subtitle": "Shows whether trading is mostly retail-like, institution-like, mixed, or unclassified.",
    "trader_retail_threshold": "Retail-like flow",
    "trader_mixed_threshold": "Mixed flow",
    "trader_instit_threshold": "Institution-like flow",
    "peer_trader_title": "Peer Comparison: Trader Mix",
    "peer_trader_subtitle": "How the trader mix compares with peers.",
    "price_moving_title": "Which Trades Move the Price?",
    "price_moving_subtitle": "Price-moving trades are 19.8% of total trades.",
    "intraday_title": "When Does Trading Happen?",
    "intraday_subtitle": "The live execution picture is defined more by book imbalance than by spread.",
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
    "intraday_insight": "The spread is only 1 tick, but displayed bid depth is just 0.25x of ask depth. That matters because a tight quoted spread does not offset the thinner buy-side support in the book.",
    "short_title": "Short Selling & Lending",
    "short_subtitle": "The main trading watchpoint remains displayed buy-side depth rather than a wider deterioration in liquidity.",
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
    "exec_subtitle": "Liquidity screens well for the stock’s size, but the live book is thin on the bid.",
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
        "value": "72.5/100",
        "sub": "Peer median 45.4 (+27.1 pts)",
        "interp": {
          "text": "Strong",
          "cls": "interpretation-good",
          "icon": "◆"
        }
      },
      {
        "title": "Volume vs Peers",
        "value": "S$228.5K",
        "sub": "Peer median S$6.0K",
        "interp": {
          "text": "Strong",
          "cls": "interpretation-good",
          "icon": "◆"
        }
      },
      {
        "title": "Spread",
        "value": "2.50%",
        "sub": "1.17 ticks; peers 4.48%",
        "interp": {
          "text": "Tighter",
          "cls": "interpretation-good",
          "icon": "◆"
        }
      }
    ],
    "liq_insight": "Liquidity looks strong relative to peers, with a three-month score of 72.5 compared with the peer median of 45.4. That points to solid accessibility for the stock’s size, although displayed bid depth at 0.25x of ask depth means the live book is thinner on the buy side than the broader liquidity profile implies.",
    "perf_badge": "Context",
    "exec_check_tiles": [
      {
        "title": "Mid Price",
        "value": "0.253",
        "note": "final continuous-session displayed book before close",
        "color": "text-white"
      },
      {
        "title": "Spread",
        "value": "1.98%",
        "note": "1.00 ticks",
        "color": "text-slate-300"
      },
      {
        "title": "Depth",
        "value": "0.25x",
        "note": "Bid depth / ask depth on the displayed order book",
        "color": "text-slate-300"
      }
    ],
    "impact_summary_cards": [
      {
        "title": "~S$100K sell",
        "text": "Estimated impact ~-1.10% with 100.0% fill.",
        "cls": "ok"
      },
      {
        "title": "S$1.0M sell",
        "text": "Estimated impact ~-6.94% with 68.1% fill.",
        "cls": "warn"
      },
      {
        "title": "S$2.5M sell",
        "text": "Estimated impact ~-6.94% with 27.2% fill.",
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
        "subtext": "Rank 154/557",
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
        "subtext": "2.50% • 1.17 ticks vs peers 4.48%",
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
        "value": "228.5K",
        "value_prefix": "S$",
        "suffix": "",
        "bar_pct": 60,
        "color_value": "text-emerald-400",
        "color_bar": "bg-emerald-500",
        "subtext": "Peer median S$6.0K",
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
        "value": "50.6",
        "suffix": "sector",
        "bar_pct": 51,
        "color_value": "text-amber-400",
        "color_bar": "bg-amber-500",
        "subtext": "Market 19.5% • Company 29.9%",
        "interpretation": {
          "text": "Sector",
          "cls": "interpretation-neutral",
          "icon": "◆"
        }
      }
    ],
    "exec_takeaways": [
      "Structural liquidity is strong for the stock’s size, with a three-month liquidity score of 72.5 compared with a peer median of 45.4. That supports better access than the peer group.",
      "Price performance is notably stronger than the main comparison groups, with a one-month return of 13.3% compared with 0.5% for peers and -1.5% for the market. That gives the tape a firmer backdrop than peers.",
      "The near-term constraint is the displayed book, where bid depth is only 0.25x of ask depth even with a 1 tick spread. That matters because immediate selling conditions can feel thinner than the broader liquidity profile suggests, while sector moves still account for 50.6% of trading."
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
      "overall": "3M liquidity is strong: score 72.5 vs peer median 45.4 (+27.1 pts). Recent trend context is too limited to say whether access has changed from the 1M baseline.",
      "strengths": [
        "3M score 72.5 vs peer median 45.4 (+27.1 pts)."
      ],
      "concerns": [],
      "peer_context": "Primary-period score gap vs peers: +27.1 pts."
    },
    "market_comparison": {
      "returns": {
        "insight": "3M return is 2.0%, better than market, sector, and peers, which suggests stronger price performance than comparable names.",
        "vs_market": "Better than market: 2.0% vs market -0.9%.",
        "vs_sector": "Better than sector: 2.0% vs sector -8.4%.",
        "vs_peers": "Better than peers: 2.0% vs peers -2.4%."
      },
      "adv": {
        "insight": "ADV is S$228.5K, better than market, sector, and peers, which supports stronger day-to-day trading size than comparable names.",
        "vs_market": "Better than market: S$228.5K vs market S$13.7K.",
        "vs_sector": "Better than sector: S$228.5K vs sector S$7.6K.",
        "vs_peers": "Better than peers: S$228.5K vs peers S$6.0K."
      },
      "spread": {
        "insight": "Spread is 2.50%, better than market and peers, which keeps trading costs more competitive than comparable names.",
        "vs_market": "Better than market: 2.50% vs market 3.10%.",
        "vs_sector": "In line with sector: 2.50% vs secto%.",
        "vs_peers": "Better than peers: 2.50% vs peers 4.48%."
      },
      "turnover_ratio": {
        "insight": "Turnover ratio is 0.16%, better than market, sector, and peers, which shows a more active free-float turnover profile than comparable names.",
        "vs_market": "Better than market: 0.16% vs market 0.03%.",
        "vs_sector": "Better than sector: 0.16% vs sector 0.01%.",
        "vs_peers": "Better than peers: 0.16% vs peers 0.01%."
      },
      "volatility": {
        "insight": "Volatility is 55.98%, worse than market and sector, which suggests day-to-day price swings are heavier than comparable names.",
        "vs_market": "Worse than market: 55.98% vs market 47.11%.",
        "vs_sector": "Worse than sector: 55.98% vs sector 44.55%.",
        "vs_peers": "In line with peers: 55.98% vs peers 56.81%."
      },
      "trades": {
        "insight": "Trades is 71, better than market, sector, and peers, which supports more fully reflective of day-to-day access day-to-day activity than comparable names.",
        "vs_market": "Better than market: 71 vs market 7.",
        "vs_sector": "Better than sector: 71 vs sector 6.",
        "vs_peers": "Better than peers: 71 vs peers 6."
      },
      "amihud": {
        "insight": "Price impact is 7.84e-08, better than market, sector, and peers, which suggests trades move price less than comparable names.",
        "vs_market": "Better than market: 7.84e-08 vs market 1.40e-07.",
        "vs_sector": "Better than sector: 7.84e-08 vs sector 4.50e-07.",
        "vs_peers": "Better than peers: 7.84e-08 vs peers 5.15e-07."
      }
    },
    "performance": {
      "overall": "Recent performance is strong relative to peers and the market, with a 13.3% one-month gain compared with 0.5% for peers and -1.5% for the market. That move is broadly confirmed by liquidity at the monthly level, as the 3M liquidity score of 72.5 sits 27.1 points above the peer median, which supports access for the stock's size.",
      "conclusion": "Performance is mixed relative to comparison groups."
    },
    "drivers": {
      "overall": "Sector direction is driving the stock now, with sector factors explaining 50.6% of recent moves. That means the tape is being set more by the broader group than by company-specific news, which matters when the stock has also outperformed with a 13.3% 1M return compared with 0.5% for peers and -1.5% for the market.",
      "beta": "Based on the last 5 trading days, current mix is market 19.5%, sector 50.6%, and company-specific 29.9%.",
      "rolling_change": "The pattern looks more temporary than fully established, because March and April were mostly sector while May has turned mostly sector-driven based on only 5 trading days. In plain terms, the stock has shifted from trading on its own story to moving more with the sector this month."
    },
    "regime": {
      "overall": "The backdrop is relatively steady, with low volatility in place and a typical spell lasting about 5.8 days, which supports a calmer trading environment even as the order book stays uneven.",
      "current": "The stock is currently in a low-volatility state, pointing to a steadier tape than a stressed market phase.",
      "transitions": "This state looks fairly stable because low-volatility periods typically last about 5.8 days, although the read is based on a shorter history window and may be treated as mixed.",
      "trading_implications": "This state looks more persistent, with a typical run length of about 5.8 days."
    },
    "execution": {
      "overall": "Displayed liquidity looks thin buy-side right now because bid depth is only 0.25x ask depth while the spread remains 1 tick. That matters because the screen looks orderly at the touch, but available visible support on the buy side is materially lighter than the sell side.",
      "concern": "The clearest stress point is the imbalance in displayed depth, with bids at just a quarter of ask depth. That leaves the book less supportive on the downside even though the quoted spread is still tight.",
      "peer_context": "This sits in contrast to the broader liquidity picture, where the 3M score of 72.5 stands 27.1 points above the peer median of 45.4. The stock still screens well on monthly liquidity, but the current book suggests that strength is not showing up evenly in immediate displayed visible support."
    },
    "trader_composition": {
      "overall": "By trade count and value, flow looks mainly retail-like.",
      "retail_heavy": "Retail-like trades account for 88.2% of trade count and 36.1% of trade value, compared with institution-like trades at 1.0% of count and 15.6% of value. That keeps the observed flow anchored in broad participation rather than a small number of larger tickets.",
      "institutional_gap": "Institution-like activity is present in trade value at 15.6%, but its 1.0% share of trade count shows it is not setting the overall tone of trading. That leaves the flow read mainly retail-like rather than mixed.",
      "peer_comparison": "The trader mix stands out as retail-leaning relative to peers, which suggests this name is drawing broader participation than a typical peer set."
    },
    "price_moving": {
      "overall": "The cleanest read is that price formation is being set within a retail-leaning tape rather than by a dominant institutional flow. That matters because day-to-day moves are more likely to reflect broad participation. Trade count and trade value both point to a retail-like mix, with retail-like activity at 88.2% of count and 36.1% of value. That gives the flow signal a consistent direction even with some institutional value present.",
      "interpretation": "",
      "asymmetry": ""
    },
    "short_selling": {
      "overall": "Short activity looks low and is not the main factor shaping trading conditions. The stronger 1M share price performance, up 13.3% compared with peers at 0.5% and the market at -1.5%, points to a firmer backdrop than one typically associates with meaningful short pressure.",
      "level": "Low short interest",
      "correlation": "No clear relationship (correlation undefined)",
      "trend": "Short interest appears stable rather than rising, so it does not suggest a new source of trading stress. That leaves the broader picture driven more by the stock’s recent outperformance than by short positioning.",
      "peaks": "0 notable peak days identified."
    },
    "intraday": {
      "overall": "Session split is open 2.0%, continuous 95.1%, and close 2.1%. Current trading concentration score is 0.281.",
      "hhi_interpretation": "A concentration score of 0.281 suggests trading is not heavily concentrated into a narrow part of the day. That supports a more consistent liquidity profile across market hours.",
      "best_times": "The continuous session is the clearest source of liquidity, while the open at 2.0% and close at 2.1% play a much smaller role. That means access is driven by the main session rather than auction windows.",
      "peer_ranking": "The intraday profile looks solid for a stock with a 3M liquidity score of 72.5 compared with a peer median of 45.4. That supports the view that trading access is strong for its size through the core session."
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
        72.5314183123878,
        3.052064631956912,
        2.6929982046678633,
        45.78096947935368,
        45.062836624775585,
        34.8294434470377,
        63.016157989228006,
        51.526032315978455,
        83.66247755834829
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
        228475.0,
        0.0,
        0.0,
        4432.5,
        7500.0,
        639.0,
        49255.799999999996,
        10790.0,
        844272.0
      ],
      "total": 557
    },
    "market_comparison": {
      "sector_name": "Software - Application",
      "sector_count": 8,
      "market_count": 557,
      "company": {
        "volatility": 0.5597510480519746,
        "adv": 228475.0,
        "spread_pct": 0.02496157393175533,
        "turnover_ratio": 0.001602655002574305,
        "amihud": 7.83519022118116e-08,
        "trades": 71.0
      },
      "market": {
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.6857772975939581,
          "median": 0.47113695542018347,
          "min": 0.0,
          "max": 7.013811259728676,
          "p5": 0.15928649572804995,
          "p95": 2.2156654613240514,
          "count": 557
        },
        "adv": {
          "direction": "higher_is_better",
          "mean": 3337185.7428127225,
          "median": 13673.0,
          "min": 0.0,
          "max": 290156410.0,
          "p5": 0.0,
          "p95": 13469855.999999957,
          "count": 557
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.1000191771579588,
          "median": 0.031003217315004293,
          "min": 0.0002705286818559187,
          "max": 1.3542204201990415,
          "p5": 0.0035508696516023982,
          "p95": 0.449926928849013,
          "count": 555
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.006008716965530666,
          "median": 0.0002710710295060269,
          "min": 0.0,
          "max": 2.0598510315733964,
          "p5": 0.0,
          "p95": 0.011797294577046237,
          "count": 550
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 1.947731127760664e-05,
          "median": 1.4041732770947104e-07,
          "min": 0.0,
          "max": 0.002923830374993834,
          "p5": 0.0,
          "p95": 4.499116061909415e-05,
          "count": 554
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 476.9631956912029,
          "median": 7.0,
          "min": 0.0,
          "max": 11391.0,
          "p5": 0.0,
          "p95": 2819.9999999999973,
          "count": 557
        }
      },
      "sector": {
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.870322422367753,
          "median": 0.4455296853987385,
          "min": 0.27875824953461886,
          "max": 2.28509876728461,
          "p5": 0.3001216370328033,
          "p95": 2.2729709931616373,
          "count": 8
        },
        "adv": {
          "direction": "higher_is_better",
          "mean": 2100329.4375,
          "median": 7611.25,
          "min": 0.0,
          "max": 15714026.999999998,
          "p5": 0.0,
          "p95": 10509612.74999999,
          "count": 8
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.1530273291017815,
          "median": 0.02376841238393785,
          "min": 0.0013460724010818808,
          "max": 0.6666666666666666,
          "p5": 0.004592470554346122,
          "p95": 0.5866955892986261,
          "count": 8
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.0029465669958143523,
          "median": 7.770425162209993e-05,
          "min": 0.0,
          "max": 0.012023353564795478,
          "p5": 0.0,
          "p95": 0.011230858013654449,
          "count": 8
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 4.55639812446544e-05,
          "median": 4.503045500263345e-07,
          "min": 0.0,
          "max": 0.00036013640690511566,
          "p5": 2.2844461645260412e-10,
          "p95": 0.00023471064786892906,
          "count": 8
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 504.125,
          "median": 6.0,
          "min": 0.0,
          "max": 3591.0,
          "p5": 0.0,
          "p95": 2459.449999999998,
          "count": 8
        }
      },
      "peers": {
        "adv": {
          "direction": "higher_is_better",
          "mean": 114611.1625,
          "median": 5966.25,
          "min": 0.0,
          "max": 844272.0,
          "p5": 0.0,
          "p95": 566016.3299999996,
          "count": 8
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 50.375,
          "median": 6.0,
          "min": 0.0,
          "max": 358.0,
          "p5": 0.0,
          "p95": 240.74999999999983,
          "count": 8
        },
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.9826145914351263,
          "median": 0.5680677653093896,
          "min": 0.33979649952943153,
          "max": 2.28509876728461,
          "p5": 0.3460513355778591,
          "p95": 2.2729709931616373,
          "count": 8
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.16423470628608527,
          "median": 0.044812060718844623,
          "min": 0.010621495696122571,
          "max": 0.6666666666666666,
          "p5": 0.012537355212911867,
          "p95": 0.5866955892986261,
          "count": 8
        },
        "spread_ticks": {
          "direction": "neutral",
          "mean": 3.938845498503643,
          "median": 1.6110106489853324,
          "min": 1.0,
          "max": 19.0,
          "p5": 1.018421052631579,
          "p95": 13.516666666666659,
          "count": 8
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 4.558013518039999e-05,
          "median": 5.152466424607622e-07,
          "min": 0.0,
          "max": 0.00036013640690511566,
          "p5": 0.0,
          "p95": 0.00023471064786892906,
          "count": 8
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.001981395402170878,
          "median": 7.770425162209993e-05,
          "min": 0.0,
          "max": 0.012023353564795478,
          "p5": 0.0,
          "p95": 0.008770755577258083,
          "count": 8
        }
      }
    },
    "returns": [
      {
        "horizon": "1W",
        "stock": 0.0851063829787233,
        "market": 0.001874728722420338,
        "sector": 0.012747428629563462,
        "peers": 0.010082677664974726
      },
      {
        "horizon": "1M",
        "stock": 0.13333333333333286,
        "market": -0.01484170599624135,
        "sector": -0.0022776966084120387,
        "peers": 0.004681296454256634
      },
      {
        "horizon": "3M",
        "stock": 0.01999999999999913,
        "market": -0.008780605710653755,
        "sector": -0.08405923099396839,
        "peers": -0.02395965398305544
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
      "share_market": 0.19536128624104895,
      "share_sector": 0.5055691086109971,
      "share_idio": 0.2990696051479539,
      "beta_market": -0.6932261714058102,
      "beta_sector": 3.437028661909254,
      "driver_model": {
        "valid": true,
        "model_method": "ols_with_volatility_regimes",
        "estimation_window_days": 71,
        "reporting_window_days": 63,
        "available_history_days": 71,
        "n_regimes": 2,
        "current_regime": 0,
        "current_regime_label": "Low Volatility",
        "current_regime_probability": 1.0,
        "current_driver_mix": {
          "market_share": {
            "median": 0.19536128624104895,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "19.5%",
            "display_range": null,
            "display_text": "19.5%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 71 trading days.",
            "kind": "share_pct",
            "value_pct": 19.5,
            "plain_english": "Market explains about 19.5% of price moves in the current state."
          },
          "sector_share": {
            "median": 0.5055691086109971,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "50.6%",
            "display_range": null,
            "display_text": "50.6%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 71 trading days.",
            "kind": "share_pct",
            "value_pct": 50.6,
            "plain_english": "Sector explains about 50.6% of price moves in the current state."
          },
          "company_share": {
            "median": 0.2990696051479539,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "29.9%",
            "display_range": null,
            "display_text": "29.9%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 71 trading days.",
            "kind": "share_pct",
            "value_pct": 29.9,
            "plain_english": "Company-specific explains about 29.9% of price moves in the current state."
          },
          "basis": "current_state"
        },
        "current_sensitivities": {
          "beta_market": {
            "median": -0.6932261714058102,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "-0.69",
            "display_range": null,
            "display_text": "-0.69",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 71 trading days.",
            "kind": "beta",
            "strength_label": "Modest",
            "plain_english": "Modest market link: a 1% market move has lined up with about a 0.69% stock move in the opposite direction in this state.",
            "value_num": -0.69
          },
          "beta_stock_lag": {
            "median": -1.0606853168796961,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "-1.06",
            "display_range": null,
            "display_text": "-1.06",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 71 trading days.",
            "kind": "lag_beta",
            "value_num": -1.06
          },
          "beta_sector": {
            "median": 3.437028661909254,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "3.44",
            "display_range": null,
            "display_text": "3.44",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 71 trading days.",
            "kind": "beta",
            "strength_label": "Very high",
            "plain_english": "Very high sector link: a 1% sector move has lined up with about a 3.44% stock move in the same direction in this state.",
            "value_num": 3.44
          },
          "beta_market_lag": {
            "median": 4.347623552435577,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "4.35",
            "display_range": null,
            "display_text": "4.35",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 71 trading days.",
            "kind": "lag_beta",
            "value_num": 4.35
          },
          "beta_sector_lag": {
            "median": 4.645709003292627,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "4.65",
            "display_range": null,
            "display_text": "4.65",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 71 trading days.",
            "kind": "lag_beta",
            "value_num": 4.65
          },
          "posterior_source": null,
          "intervals_collapsed": false,
          "confidence_label": "High, limited history",
          "confidence_note": "Based on 71 trading days relative to the 252-day target."
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
          },
          {
            "month_key": "2026-05",
            "month_label": "May 2026",
            "month_short_label": "May",
            "period_label": "2026-05-04 to 2026-05-08",
            "n_obs": 5,
            "partial_month": true,
            "dominant_driver": "sector",
            "dominant_driver_label": "Sector",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.5055691086109971,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "50.6%",
              "display_range": null,
              "display_text": "50.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
              "kind": "share_pct",
              "value_pct": 50.6,
              "plain_english": "Sector explains about 50.6% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.19536128624104895,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "19.5%",
                "display_range": null,
                "display_text": "19.5%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
                "kind": "share_pct",
                "value_pct": 19.5,
                "plain_english": "Market explains about 19.5% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.5055691086109971,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "50.6%",
                "display_range": null,
                "display_text": "50.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
                "kind": "share_pct",
                "value_pct": 50.6,
                "plain_english": "Sector explains about 50.6% of price moves in the current state."
              },
              "company_share": {
                "median": 0.2990696051479539,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "29.9%",
                "display_range": null,
                "display_text": "29.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
                "kind": "share_pct",
                "value_pct": 29.9,
                "plain_english": "Company-specific explains about 29.9% of price moves in the current state."
              }
            },
            "summary": "May: Mostly sector-driven, though based on only 5 trading days."
          }
        ],
        "regimes": [
          {
            "id": 0,
            "label": "Low Volatility",
            "pct_time": 0.5072463768115942,
            "expected_duration_days": 5.833333333333333,
            "current_probability": 1.0,
            "n_days_effective": 35.0,
            "volatility": {
              "median": 0.028001456845083605,
              "low": 0.028001456845083605,
              "high": 0.028001456845083605
            },
            "volatility_label": "Low Volatility",
            "current_probability_display": null
          },
          {
            "id": 1,
            "label": "High Volatility",
            "pct_time": 0.4927536231884058,
            "expected_duration_days": 6.8,
            "current_probability": 0.0,
            "n_days_effective": 34.0,
            "volatility": {
              "median": 0.04274693047254109,
              "low": 0.04274693047254109,
              "high": 0.04274693047254109
            },
            "volatility_label": "High Volatility",
            "current_probability_display": 0.0
          }
        ],
        "transitions": {
          "mean": [
            [
              0.8529411764705882,
              0.14705882352941177
            ],
            [
              0.14705882352941177,
              0.8529411764705882
            ]
          ],
          "low": [],
          "high": [],
          "counts": [
            [
              29.0,
              5.0
            ],
            [
              5.0,
              29.0
            ]
          ]
        },
        "methodology": {
          "estimation_window_days": 71,
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
          "market_link_display": "-0.69",
          "sector_link_display": "3.44",
          "market_link_explainer": "Modest market link. A 1% market move has lined up with about a 0.69% stock move in the opposite direction in this state. This is a point estimate from 71 trading days.",
          "sector_link_explainer": "Very high sector link. A 1% sector move has lined up with about a 3.44% stock move in the same direction in this state. This is a point estimate from 71 trading days.",
          "stock_persistence_display": "-1.06",
          "point_estimate_note": "Point estimate only because the current state has 71 trading days.",
          "history_limited_note": "Read is based on 71 trading days versus the 252-day target."
        },
        "current_summary": {
          "regime_label": "Low Volatility",
          "dominant_driver": "sector",
          "dominant_driver_label": "Sector",
          "driver_share_pct": 50.6,
          "driver_share_display": "50.6%",
          "confidence_label": "High, limited history",
          "confidence_pct": 100.0,
          "display_confidence_pct": null,
          "confidence_note": "Based on 71 trading days relative to the 252-day target.",
          "history_days": 71,
          "history_limited": true,
          "volatility_label": "Low Volatility",
          "lead_signal_text": "No stable lead signal.",
          "state_term": "state",
          "stay_probability": 0.8529411764705882,
          "effective_days": 35.0,
          "persistence_note": "This state looks more persistent, with a typical run length of about 5.8 days.",
          "expected_duration_days": 5.8
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
        },
        {
          "month_key": "2026-05",
          "month_label": "May 2026",
          "month_short_label": "May",
          "period_label": "2026-05-04 to 2026-05-08",
          "n_obs": 5,
          "partial_month": true,
          "dominant_driver": "sector",
          "dominant_driver_label": "Sector",
          "regime_label": null,
          "summary": "May: Mostly sector-driven, though based on only 5 trading days.",
          "share_market": 0.19536128624104895,
          "share_sector": 0.5055691086109971,
          "share_company": 0.2990696051479539,
          "share_market_display": "19.5%",
          "share_sector_display": "50.6%",
          "share_company_display": "29.9%",
          "dominant_share_display": "50.6%"
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
          0.5072463768115942,
          0.4927536231884058
        ],
        "current_regime": 0,
        "regimes": [
          {
            "id": 0,
            "label": "Low Volatility",
            "pct_time": 0.5072463768115942,
            "expected_duration_days": 5.833333333333333,
            "current_probability": 1.0,
            "n_days_effective": 35.0,
            "volatility": {
              "median": 0.028001456845083605,
              "low": 0.028001456845083605,
              "high": 0.028001456845083605
            },
            "volatility_label": "Low Volatility"
          },
          {
            "id": 1,
            "label": "High Volatility",
            "pct_time": 0.4927536231884058,
            "expected_duration_days": 6.8,
            "current_probability": 0.0,
            "n_days_effective": 34.0,
            "volatility": {
              "median": 0.04274693047254109,
              "low": 0.04274693047254109,
              "high": 0.04274693047254109
            },
            "volatility_label": "High Volatility"
          }
        ],
        "transitions": [
          [
            0.8529411764705882,
            0.14705882352941177
          ],
          [
            0.14705882352941177,
            0.8529411764705882
          ]
        ]
      }
    },
    "order_book": {
      "bids": [
        {
          "level": 1,
          "price": 0.25,
          "quantity": 377900.0,
          "value": 94475.0
        },
        {
          "level": 2,
          "price": 0.245,
          "quantity": 1021000.0,
          "value": 250145.0
        },
        {
          "level": 3,
          "price": 0.24,
          "quantity": 313600.0,
          "value": 75264.0
        },
        {
          "level": 4,
          "price": 0.235,
          "quantity": 173000.0,
          "value": 40655.0
        },
        {
          "level": 5,
          "price": 0.23,
          "quantity": 85400.0,
          "value": 19642.0
        },
        {
          "level": 6,
          "price": 0.225,
          "quantity": 115000.0,
          "value": 25875.0
        },
        {
          "level": 7,
          "price": 0.22,
          "quantity": 205400.0,
          "value": 45188.0
        },
        {
          "level": 8,
          "price": 0.215,
          "quantity": 526800.0,
          "value": 113262.0
        },
        {
          "level": 9,
          "price": 0.21,
          "quantity": 50000.0,
          "value": 10500.0
        },
        {
          "level": 10,
          "price": 0.2,
          "quantity": 30000.0,
          "value": 6000.0
        }
      ],
      "asks": [
        {
          "level": 1,
          "price": 0.255,
          "quantity": 255200.0,
          "value": 65076.0
        },
        {
          "level": 2,
          "price": 0.26,
          "quantity": 832900.0,
          "value": 216554.0
        },
        {
          "level": 3,
          "price": 0.265,
          "quantity": 1119800.0,
          "value": 296747.0
        },
        {
          "level": 4,
          "price": 0.27,
          "quantity": 773700.0,
          "value": 208899.0
        },
        {
          "level": 5,
          "price": 0.275,
          "quantity": 520000.0,
          "value": 143000.0
        },
        {
          "level": 6,
          "price": 0.28,
          "quantity": 860800.0,
          "value": 241024.00000000003
        },
        {
          "level": 7,
          "price": 0.285,
          "quantity": 529000.0,
          "value": 150765.0
        },
        {
          "level": 8,
          "price": 0.29,
          "quantity": 334000.0,
          "value": 96860.0
        },
        {
          "level": 9,
          "price": 0.295,
          "quantity": 408200.0,
          "value": 120419.0
        },
        {
          "level": 10,
          "price": 0.3,
          "quantity": 3531600.0,
          "value": 1059480.0
        },
        {
          "level": 11,
          "price": 0.305,
          "quantity": 242000.0,
          "value": 73810.0
        },
        {
          "level": 12,
          "price": 0.31,
          "quantity": 10000.0,
          "value": 3100.0
        },
        {
          "level": 13,
          "price": 0.33,
          "quantity": 8000.0,
          "value": 2640.0
        },
        {
          "level": 14,
          "price": 0.35,
          "quantity": 88000.0,
          "value": 30799.999999999996
        },
        {
          "level": 15,
          "price": 0.395,
          "quantity": 20000.0,
          "value": 7900.0
        },
        {
          "level": 16,
          "price": 0.4,
          "quantity": 1000.0,
          "value": 400.0
        }
      ]
    },
    "execution_dynamic": {
      "snapshot": {
        "valid": true,
        "snapshot_time": "2026-05-08 08:59:58.424700000",
        "snapshot_basis": "last_continuous_session_snapshot",
        "snapshot_label": "final continuous-session displayed book before close",
        "snapshot_note": "Final continuous-session displayed book before close",
        "snapshot_mic": "XSES",
        "mid_price": 0.2525,
        "spread_pct": 0.01980198019801982,
        "spread_ticks": 1.0,
        "tick_size": 0.005,
        "displayed_levels_per_side": 100,
        "bid_depth_notional_displayed": 681006.0,
        "ask_depth_notional_displayed": 2717474.0,
        "bid_depth_notional_top10": 681006.0,
        "ask_depth_notional_top10": 2717474.0,
        "bid_ask_depth_ratio": 0.2506
      },
      "historical_trade_scenarios": {
        "valid": true,
        "requested_lookback_calendar_days": 365,
        "lookback_calendar_days": 365,
        "effective_calendar_days": 107,
        "history_limited": true,
        "trade_days_used": 73,
        "n_trades_used": 11973,
        "first_trade_date": "2026-01-22",
        "last_trade_date": "2026-05-08",
        "window_label": "Jan 22, 2026 to May 8, 2026",
        "window_short_label": "Jan 22-May 8",
        "trade_days_label": "73 trading days",
        "trade_count_label": "11,973 trades",
        "window_detail_label": "73 trading days • 11,973 trades",
        "history_note": "Trade-size percentiles use available history from Jan 22, 2026 to May 8, 2026 (73 trading days • 11,973 trades), not a full year.",
        "scenarios": [
          {
            "key": "p90",
            "label": "90th percentile trade",
            "quantile": 0.9,
            "trade_notional": 10400.0,
            "impact_pct": -0.009901,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 1.53,
            "pct_of_adv": 5.67
          },
          {
            "key": "p95",
            "label": "95th percentile trade",
            "quantile": 0.95,
            "trade_notional": 14035.2,
            "impact_pct": -0.009901,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 2.06,
            "pct_of_adv": 7.65
          },
          {
            "key": "p99_99",
            "label": "99.99th percentile trade",
            "quantile": 0.9999,
            "trade_notional": 166835.14,
            "impact_pct": -0.018588,
            "filled_pct": 100.0,
            "levels_consumed": 2,
            "pct_of_bid_depth": 24.5,
            "pct_of_adv": 90.9
          }
        ]
      },
      "l3_sell_order_scenarios": {
        "valid": true,
        "trade_date": "2026-05-08",
        "selection_method": "largest_observed_ask_orders_during_day",
        "orders": [
          {
            "rank": 1,
            "order_id": "8146327279925059584",
            "timestamp": "2026-05-08 00:30:16.643400000",
            "local_timestamp": "2026-05-08 08:30:16",
            "posted_price": 0.3,
            "size_shares": 3284000.0,
            "notional": 985200.0,
            "impact_pct": -0.069372,
            "filled_pct": 69.1,
            "levels_consumed": 10,
            "pct_of_bid_depth": 144.67,
            "price_vs_mid_pct": 18.812,
            "executed_event_count": 0,
            "event_count": 8
          },
          {
            "rank": 2,
            "order_id": "8146327279925094400",
            "timestamp": "2026-05-08 00:49:31.341600000",
            "local_timestamp": "2026-05-08 08:49:31",
            "posted_price": 0.265,
            "size_shares": 1000000.0,
            "notional": 265000.0,
            "impact_pct": -0.022735,
            "filled_pct": 100.0,
            "levels_consumed": 2,
            "pct_of_bid_depth": 38.91,
            "price_vs_mid_pct": 4.95,
            "executed_event_count": 0,
            "event_count": 58
          },
          {
            "rank": 3,
            "order_id": "8146327279925622784",
            "timestamp": "2026-05-08 01:42:13.288000000",
            "local_timestamp": "2026-05-08 09:42:13",
            "posted_price": 0.26,
            "size_shares": 700000.0,
            "notional": 182000.0,
            "impact_pct": -0.019524,
            "filled_pct": 100.0,
            "levels_consumed": 2,
            "pct_of_bid_depth": 26.73,
            "price_vs_mid_pct": 2.97,
            "executed_event_count": 0,
            "event_count": 15
          }
        ]
      },
      "intraday_liquidity_profile": {
        "valid": true,
        "trade_date": "2026-05-08",
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
            "spread_pct": 0.019047619047619063,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 1318725.0,
            "ask_depth_notional": 2398277.5,
            "mid_price": 0.2625
          },
          {
            "bucket": "09:30",
            "spread_pct": 0.019417475728155355,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 963978.0,
            "ask_depth_notional": 2632971.5,
            "mid_price": 0.2575
          },
          {
            "bucket": "10:00",
            "spread_pct": 0.019417475728155355,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 873426.0,
            "ask_depth_notional": 2635914.0,
            "mid_price": 0.2575
          },
          {
            "bucket": "10:30",
            "spread_pct": 0.019417475728155355,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 905051.0,
            "ask_depth_notional": 2635914.0,
            "mid_price": 0.2575
          },
          {
            "bucket": "11:00",
            "spread_pct": 0.019417475728155355,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 977221.0,
            "ask_depth_notional": 2672581.0,
            "mid_price": 0.2575
          },
          {
            "bucket": "11:30",
            "spread_pct": 0.019417475728155355,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 946808.5,
            "ask_depth_notional": 2666485.0,
            "mid_price": 0.2575
          },
          {
            "bucket": "13:00",
            "spread_pct": 0.01980198019801982,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 694954.0,
            "ask_depth_notional": 2792237.0,
            "mid_price": 0.2525
          },
          {
            "bucket": "13:30",
            "spread_pct": 0.02020202020202022,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 545431.5,
            "ask_depth_notional": 2861000.0,
            "mid_price": 0.2475
          },
          {
            "bucket": "14:00",
            "spread_pct": 0.02020202020202022,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 456246.5,
            "ask_depth_notional": 2830969.5,
            "mid_price": 0.2475
          },
          {
            "bucket": "14:30",
            "spread_pct": 0.01980198019801982,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 567663.5,
            "ask_depth_notional": 2923502.5,
            "mid_price": 0.2525
          },
          {
            "bucket": "15:00",
            "spread_pct": 0.01980198019801982,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 575114.0,
            "ask_depth_notional": 2980658.0,
            "mid_price": 0.2525
          },
          {
            "bucket": "15:30",
            "spread_pct": 0.01980198019801982,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 577564.0,
            "ask_depth_notional": 2982248.0,
            "mid_price": 0.2525
          },
          {
            "bucket": "16:00",
            "spread_pct": 0.01980198019801982,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 634539.0,
            "ask_depth_notional": 2873258.5,
            "mid_price": 0.2525
          },
          {
            "bucket": "16:30",
            "spread_pct": 0.01980198019801982,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 681006.0,
            "ask_depth_notional": 2717474.0,
            "mid_price": 0.2525
          }
        ],
        "summary": {
          "median_spread_pct": 0.01980198019801982,
          "median_spread_ticks": 1.0000000000000009,
          "median_bid_depth_notional": 687980.0,
          "median_ask_depth_notional": 2754855.5,
          "tightest_bucket": "09:00",
          "widest_bucket": "13:30",
          "deepest_bid_bucket": "09:00",
          "thinnest_bid_bucket": "14:00"
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
          "ticker": "J03",
          "pct": 481.2
        },
        {
          "ticker": "42F",
          "pct": 566.5
        },
        {
          "ticker": "LVR",
          "pct": 11160.4
        },
        {
          "ticker": "U77",
          "pct": 19820.6
        },
        {
          "ticker": "532",
          "pct": 57142.9
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
          "n_trades": 144,
          "n_runs": 0,
          "n_trade_days": 1,
          "first_trade_date": "2026-05-08",
          "last_trade_date": "2026-05-08",
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
            "retail_pct": 0.7708333333333334,
            "mixed_pct": 0.2013888888888889,
            "instit_pct": 0.027777777777777776,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.2075191190737171,
            "mixed_qty_pct": 0.5338221768656058,
            "instit_qty_pct": 0.2586587040606771,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.20674869655891553,
            "mixed_notional_pct": 0.5340204870269275,
            "instit_notional_pct": 0.2592308164141569,
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
              "retail": 111,
              "mixed": 29,
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
            "avg": 14151.909722222223,
            "median": 5000.0
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
              "retail_pct": 0.7708333333333334,
              "mixed_pct": 0.2013888888888889,
              "instit_pct": 0.027777777777777776,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.2075191190737171,
              "mixed_qty_pct": 0.5338221768656058,
              "instit_qty_pct": 0.2586587040606771,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.20674869655891553,
              "mixed_notional_pct": 0.5340204870269275,
              "instit_notional_pct": 0.2592308164141569,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 14151.909722222223,
              "avg_run_notional": null,
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
              "avg_trade_size": 982.2666666666669,
              "avg_run_notional": null,
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
              "avg_trade_size": 4500.0,
              "avg_run_notional": null,
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
              "avg_trade_size": 2189.0,
              "avg_run_notional": null,
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
              "avg_trade_size": 837.5375,
              "avg_run_notional": null,
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
              "avg_trade_size": 3315.0,
              "avg_run_notional": null,
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
              "retail_pct": 0.95,
              "mixed_pct": 0.05,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.7006951579115909,
              "mixed_qty_pct": 0.29930484208840913,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.7019141460166135,
              "mixed_notional_pct": 0.2980858539833865,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 4564.96,
              "avg_run_notional": null,
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
              "retail_pct": 0.8817204301075269,
              "mixed_pct": 0.10752688172043011,
              "instit_pct": 0.010752688172043012,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.31667341157426143,
              "mixed_qty_pct": 0.5018211250505868,
              "instit_qty_pct": 0.18150546337515175,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.3168299272996715,
              "mixed_notional_pct": 0.5021520642592221,
              "instit_notional_pct": 0.1810180084411064,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 5275.0053763440865,
              "avg_run_notional": null,
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
          "n_trades": 276,
          "n_runs": 0,
          "n_trade_days": 5,
          "first_trade_date": "2026-05-04",
          "last_trade_date": "2026-05-08",
          "period_days": 4,
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
            "retail_pct": 0.8333333333333334,
            "mixed_pct": 0.14492753623188406,
            "instit_pct": 0.021739130434782608,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.2803766545260727,
            "mixed_qty_pct": 0.4820023096739806,
            "instit_qty_pct": 0.2376210357999467,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.27698479842115364,
            "mixed_notional_pct": 0.4835847320289268,
            "instit_notional_pct": 0.23943046954991953,
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
              "retail": 230,
              "mixed": 40,
              "institutional": 6,
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
            "avg": 10346.942028985508,
            "median": 2600.0
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
              "retail_pct": 0.8333333333333334,
              "mixed_pct": 0.14492753623188406,
              "instit_pct": 0.021739130434782608,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.2803766545260727,
              "mixed_qty_pct": 0.4820023096739806,
              "instit_qty_pct": 0.2376210357999467,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.27698479842115364,
              "mixed_notional_pct": 0.4835847320289268,
              "instit_notional_pct": 0.23943046954991953,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 10346.942028985508,
              "avg_run_notional": null,
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
              "avg_trade_size": 1136.7777777777778,
              "avg_run_notional": null,
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
              "avg_trade_size": 2133.590909090909,
              "avg_run_notional": null,
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
              "avg_trade_size": 615.212,
              "avg_run_notional": null,
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
              "avg_trade_size": 3233.8947368421054,
              "avg_run_notional": null,
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
              "retail_pct": 0.9228989976869699,
              "mixed_pct": 0.07401696222050887,
              "instit_pct": 0.0030840400925212026,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.32271791352093343,
              "mixed_qty_pct": 0.587920384351407,
              "instit_qty_pct": 0.08936170212765958,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.3229618128817434,
              "mixed_notional_pct": 0.587541770059217,
              "instit_notional_pct": 0.08949641705903957,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 3387.238627602159,
              "avg_run_notional": null,
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
              "retail_pct": 0.916083916083916,
              "mixed_pct": 0.08391608391608392,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.5868519595428187,
              "mixed_qty_pct": 0.41314804045718134,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.5842169112408759,
              "mixed_notional_pct": 0.415783088759124,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 3597.5657342657346,
              "avg_run_notional": null,
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
              "retail_pct": 0.9067796610169492,
              "mixed_pct": 0.09322033898305085,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.4865159112887215,
              "mixed_qty_pct": 0.5134840887112785,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.4894123184729221,
              "mixed_notional_pct": 0.5105876815270779,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 6125.002542372881,
              "avg_run_notional": null,
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
          "n_trades": 937,
          "n_runs": 0,
          "n_trade_days": 21,
          "first_trade_date": "2026-04-09",
          "last_trade_date": "2026-05-08",
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
            "retail_pct": 0.8260405549626467,
            "mixed_pct": 0.14941302027748132,
            "instit_pct": 0.02454642475987193,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.26454562486339084,
            "mixed_qty_pct": 0.4682910582137244,
            "instit_qty_pct": 0.26716331692288475,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.26360879207008153,
            "mixed_notional_pct": 0.4685042005299721,
            "instit_notional_pct": 0.26788700739994636,
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
              "retail": 774,
              "mixed": 140,
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
            "avg": 10100.811632870864,
            "median": 2550.0
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
              "retail_pct": 0.8260405549626467,
              "mixed_pct": 0.14941302027748132,
              "instit_pct": 0.02454642475987193,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.26454562486339084,
              "mixed_qty_pct": 0.4682910582137244,
              "instit_qty_pct": 0.26716331692288475,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.26360879207008153,
              "mixed_notional_pct": 0.4685042005299721,
              "instit_notional_pct": 0.26788700739994636,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 10100.811632870864,
              "avg_run_notional": null,
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
              "avg_trade_size": 399.144747081712,
              "avg_run_notional": null,
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
              "avg_trade_size": 2588.409090909091,
              "avg_run_notional": null,
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
              "retail_pct": 0.989247311827957,
              "mixed_pct": 0.010752688172043012,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.9089336126035881,
              "mixed_qty_pct": 0.09106638739641199,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.9091834266599125,
              "mixed_notional_pct": 0.09081657334008753,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 2356.1612903225805,
              "avg_run_notional": null,
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
              "retail_pct": 0.9295659295659295,
              "mixed_pct": 0.07043407043407043,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.6544195440233199,
              "mixed_qty_pct": 0.3455804559766801,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.6518059305517474,
              "mixed_notional_pct": 0.3481940694482526,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 4780.738329238329,
              "avg_run_notional": null,
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
              "retail_pct": 0.9235784685367703,
              "mixed_pct": 0.06944655041698257,
              "instit_pct": 0.006974981046247157,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.34633219602977666,
              "mixed_qty_pct": 0.4808661600496278,
              "instit_qty_pct": 0.17280164392059552,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.3480381921801921,
              "mixed_notional_pct": 0.4792983779866508,
              "instit_notional_pct": 0.17266342983315708,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 3985.462319939348,
              "avg_run_notional": null,
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
              "retail_pct": 0.9047619047619048,
              "mixed_pct": 0.09523809523809523,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.5317121261912586,
              "mixed_qty_pct": 0.4682878738087414,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.5477894614302316,
              "mixed_notional_pct": 0.4522105385697684,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 4745.019047619047,
              "avg_run_notional": null,
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
              "retail_pct": 0.87,
              "mixed_pct": 0.12125,
              "instit_pct": 0.00875,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.4086934279013386,
              "mixed_qty_pct": 0.45859069065346275,
              "instit_qty_pct": 0.13271588144519866,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.41212006544634233,
              "mixed_notional_pct": 0.45545382098521886,
              "instit_notional_pct": 0.13242611356843878,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 6319.9865,
              "avg_run_notional": null,
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
          "n_trades": 3539,
          "n_runs": 0,
          "n_trade_days": 63,
          "first_trade_date": "2026-02-05",
          "last_trade_date": "2026-05-08",
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
            "retail_pct": 0.8824526702458322,
            "mixed_pct": 0.10794009607233682,
            "instit_pct": 0.009607233681831025,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.3642245319324962,
            "mixed_qty_pct": 0.4821702095574907,
            "instit_qty_pct": 0.15360525851001308,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.36101149040154507,
            "mixed_notional_pct": 0.48305551600636915,
            "instit_notional_pct": 0.1559329935920858,
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
              "retail": 3123,
              "mixed": 382,
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
            "avg": 6571.107374964679,
            "median": 1715.0
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
              "retail_pct": 0.8824526702458322,
              "mixed_pct": 0.10794009607233682,
              "instit_pct": 0.009607233681831025,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.3642245319324962,
              "mixed_qty_pct": 0.4821702095574907,
              "instit_qty_pct": 0.15360525851001308,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.36101149040154507,
              "mixed_notional_pct": 0.48305551600636915,
              "instit_notional_pct": 0.1559329935920858,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 6571.107374964679,
              "avg_run_notional": null,
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
              "avg_trade_size": 420.118275862069,
              "avg_run_notional": null,
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
              "retail_pct": 0.9943396226415094,
              "mixed_pct": 0.005660377358490566,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.9079528233511234,
              "mixed_qty_pct": 0.09204717664887659,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.9076624188289404,
              "mixed_notional_pct": 0.09233758117105959,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 1168.3339622641508,
              "avg_run_notional": null,
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
              "retail_pct": 0.9555555555555556,
              "mixed_pct": 0.03333333333333333,
              "instit_pct": 0.011111111111111112,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.30011289757464865,
              "mixed_qty_pct": 0.07700393195001362,
              "instit_qty_pct": 0.6228831704753377,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.30055120122234213,
              "mixed_notional_pct": 0.0820199934293894,
              "instit_notional_pct": 0.6174288053482684,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 10653.5,
              "avg_run_notional": null,
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
              "retail_pct": 0.9371980676328503,
              "mixed_pct": 0.06280193236714976,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.6048859594057334,
              "mixed_qty_pct": 0.3951140405942666,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.611511556307348,
              "mixed_notional_pct": 0.38848844369265195,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 3861.945652173913,
              "avg_run_notional": null,
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
              "retail_pct": 0.9364620938628159,
              "mixed_pct": 0.06353790613718412,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.6772356943204527,
              "mixed_qty_pct": 0.3227643056795473,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.6673047446627511,
              "mixed_notional_pct": 0.3326952553372488,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 4473.045054151625,
              "avg_run_notional": null,
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
              "retail_pct": 0.9136027181167334,
              "mixed_pct": 0.07796383933988593,
              "instit_pct": 0.008433442543380658,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.34465007998543357,
              "mixed_qty_pct": 0.46345381003784675,
              "instit_qty_pct": 0.1918961099767197,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.347578941956966,
              "mixed_notional_pct": 0.4620295838764642,
              "instit_notional_pct": 0.19039147416656982,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 4674.737926222546,
              "avg_run_notional": null,
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
              "retail_pct": 0.9017857142857143,
              "mixed_pct": 0.09183673469387756,
              "instit_pct": 0.006377551020408163,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.4657631097539547,
              "mixed_qty_pct": 0.39686537762366003,
              "instit_qty_pct": 0.13737151262238528,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.4579387465086995,
              "mixed_notional_pct": 0.4032688436700989,
              "instit_notional_pct": 0.13879240982120156,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 5387.023214285715,
              "avg_run_notional": null,
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
      "n_trades": 3539,
      "n_runs": 0,
      "n_trade_days": 63,
      "first_trade_date": "2026-02-05",
      "last_trade_date": "2026-05-08",
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
        "retail_pct": 0.8824526702458322,
        "mixed_pct": 0.10794009607233682,
        "instit_pct": 0.009607233681831025,
        "ambiguous_pct": null,
        "unobservable_pct": null,
        "unclear_pct": null,
        "retail_qty_pct": null,
        "mixed_qty_pct": null,
        "instit_qty_pct": null,
        "ambiguous_qty_pct": null,
        "unobservable_qty_pct": null,
        "unclear_qty_pct": null,
        "retail_notional_pct": 0.36101149040154507,
        "mixed_notional_pct": 0.48305551600636915,
        "instit_notional_pct": 0.1559329935920858,
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
        "avg": 6571.107374964679,
        "median": 1715.0
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
            "n_trades": 132,
            "n_runs": 0,
            "retail_pct": 0.9015151515151515,
            "mixed_pct": 0.08333333333333333,
            "instit_pct": 0.015151515151515152,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "avg_trade_size": 6196.068181818182,
            "avg_run_notional": null,
            "retail_qty_pct": 0.4545618843941083,
            "mixed_qty_pct": 0.35811319618060783,
            "instit_qty_pct": 0.1873249194252839,
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
            "total_quantity": 3319900.0
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
          "retail_pct": 0.8824526702458322,
          "mixed_pct": 0.10794009607233682,
          "instit_pct": 0.009607233681831025,
          "ambiguous_pct": null,
          "unobservable_pct": null,
          "unclear_pct": null,
          "retail_qty_pct": 0.3642245319324962,
          "mixed_qty_pct": 0.4821702095574907,
          "instit_qty_pct": 0.15360525851001308,
          "ambiguous_qty_pct": null,
          "unobservable_qty_pct": null,
          "unclear_qty_pct": null,
          "retail_notional_pct": 0.36101149040154507,
          "mixed_notional_pct": 0.48305551600636915,
          "instit_notional_pct": 0.1559329935920858,
          "ambiguous_notional_pct": null,
          "unobservable_notional_pct": null,
          "unclear_notional_pct": null,
          "run_retail_pct": null,
          "run_mixed_pct": null,
          "run_instit_pct": null,
          "run_unclear_pct": null,
          "avg_trade_size": 6571.107374964679,
          "avg_run_notional": null,
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
          "avg_trade_size": 420.118275862069,
          "avg_run_notional": null,
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
          "retail_pct": 0.9943396226415094,
          "mixed_pct": 0.005660377358490566,
          "instit_pct": 0.0,
          "ambiguous_pct": null,
          "unobservable_pct": null,
          "unclear_pct": null,
          "retail_qty_pct": 0.9079528233511234,
          "mixed_qty_pct": 0.09204717664887659,
          "instit_qty_pct": 0.0,
          "ambiguous_qty_pct": null,
          "unobservable_qty_pct": null,
          "unclear_qty_pct": null,
          "retail_notional_pct": 0.9076624188289404,
          "mixed_notional_pct": 0.09233758117105959,
          "instit_notional_pct": 0.0,
          "ambiguous_notional_pct": null,
          "unobservable_notional_pct": null,
          "unclear_notional_pct": null,
          "run_retail_pct": null,
          "run_mixed_pct": null,
          "run_instit_pct": null,
          "run_unclear_pct": null,
          "avg_trade_size": 1168.3339622641508,
          "avg_run_notional": null,
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
          "retail_pct": 0.9555555555555556,
          "mixed_pct": 0.03333333333333333,
          "instit_pct": 0.011111111111111112,
          "ambiguous_pct": null,
          "unobservable_pct": null,
          "unclear_pct": null,
          "retail_qty_pct": 0.30011289757464865,
          "mixed_qty_pct": 0.07700393195001362,
          "instit_qty_pct": 0.6228831704753377,
          "ambiguous_qty_pct": null,
          "unobservable_qty_pct": null,
          "unclear_qty_pct": null,
          "retail_notional_pct": 0.30055120122234213,
          "mixed_notional_pct": 0.0820199934293894,
          "instit_notional_pct": 0.6174288053482684,
          "ambiguous_notional_pct": null,
          "unobservable_notional_pct": null,
          "unclear_notional_pct": null,
          "run_retail_pct": null,
          "run_mixed_pct": null,
          "run_instit_pct": null,
          "run_unclear_pct": null,
          "avg_trade_size": 10653.5,
          "avg_run_notional": null,
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
          "retail_pct": 0.9371980676328503,
          "mixed_pct": 0.06280193236714976,
          "instit_pct": 0.0,
          "ambiguous_pct": null,
          "unobservable_pct": null,
          "unclear_pct": null,
          "retail_qty_pct": 0.6048859594057334,
          "mixed_qty_pct": 0.3951140405942666,
          "instit_qty_pct": 0.0,
          "ambiguous_qty_pct": null,
          "unobservable_qty_pct": null,
          "unclear_qty_pct": null,
          "retail_notional_pct": 0.611511556307348,
          "mixed_notional_pct": 0.38848844369265195,
          "instit_notional_pct": 0.0,
          "ambiguous_notional_pct": null,
          "unobservable_notional_pct": null,
          "unclear_notional_pct": null,
          "run_retail_pct": null,
          "run_mixed_pct": null,
          "run_instit_pct": null,
          "run_unclear_pct": null,
          "avg_trade_size": 3861.945652173913,
          "avg_run_notional": null,
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
          "retail_pct": 0.9364620938628159,
          "mixed_pct": 0.06353790613718412,
          "instit_pct": 0.0,
          "ambiguous_pct": null,
          "unobservable_pct": null,
          "unclear_pct": null,
          "retail_qty_pct": 0.6772356943204527,
          "mixed_qty_pct": 0.3227643056795473,
          "instit_qty_pct": 0.0,
          "ambiguous_qty_pct": null,
          "unobservable_qty_pct": null,
          "unclear_qty_pct": null,
          "retail_notional_pct": 0.6673047446627511,
          "mixed_notional_pct": 0.3326952553372488,
          "instit_notional_pct": 0.0,
          "ambiguous_notional_pct": null,
          "unobservable_notional_pct": null,
          "unclear_notional_pct": null,
          "run_retail_pct": null,
          "run_mixed_pct": null,
          "run_instit_pct": null,
          "run_unclear_pct": null,
          "avg_trade_size": 4473.045054151625,
          "avg_run_notional": null,
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
          "retail_pct": 0.9136027181167334,
          "mixed_pct": 0.07796383933988593,
          "instit_pct": 0.008433442543380658,
          "ambiguous_pct": null,
          "unobservable_pct": null,
          "unclear_pct": null,
          "retail_qty_pct": 0.34465007998543357,
          "mixed_qty_pct": 0.46345381003784675,
          "instit_qty_pct": 0.1918961099767197,
          "ambiguous_qty_pct": null,
          "unobservable_qty_pct": null,
          "unclear_qty_pct": null,
          "retail_notional_pct": 0.347578941956966,
          "mixed_notional_pct": 0.4620295838764642,
          "instit_notional_pct": 0.19039147416656982,
          "ambiguous_notional_pct": null,
          "unobservable_notional_pct": null,
          "unclear_notional_pct": null,
          "run_retail_pct": null,
          "run_mixed_pct": null,
          "run_instit_pct": null,
          "run_unclear_pct": null,
          "avg_trade_size": 4674.737926222546,
          "avg_run_notional": null,
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
          "retail_pct": 0.9017857142857143,
          "mixed_pct": 0.09183673469387756,
          "instit_pct": 0.006377551020408163,
          "ambiguous_pct": null,
          "unobservable_pct": null,
          "unclear_pct": null,
          "retail_qty_pct": 0.4657631097539547,
          "mixed_qty_pct": 0.39686537762366003,
          "instit_qty_pct": 0.13737151262238528,
          "ambiguous_qty_pct": null,
          "unobservable_qty_pct": null,
          "unclear_qty_pct": null,
          "retail_notional_pct": 0.4579387465086995,
          "mixed_notional_pct": 0.4032688436700989,
          "instit_notional_pct": 0.13879240982120156,
          "ambiguous_notional_pct": null,
          "unobservable_notional_pct": null,
          "unclear_notional_pct": null,
          "run_retail_pct": null,
          "run_mixed_pct": null,
          "run_instit_pct": null,
          "run_unclear_pct": null,
          "avg_trade_size": 5387.023214285715,
          "avg_run_notional": null,
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
            "retail_pct": 0.7708333333333334,
            "mixed_pct": 0.2013888888888889,
            "instit_pct": 0.027777777777777776,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.2075191190737171,
            "mixed_qty_pct": 0.5338221768656058,
            "instit_qty_pct": 0.2586587040606771,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.20674869655891553,
            "mixed_notional_pct": 0.5340204870269275,
            "instit_notional_pct": 0.2592308164141569,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 14151.909722222223,
            "avg_run_notional": null,
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
            "avg_trade_size": 982.2666666666669,
            "avg_run_notional": null,
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
            "avg_trade_size": 4500.0,
            "avg_run_notional": null,
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
            "avg_trade_size": 2189.0,
            "avg_run_notional": null,
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
            "avg_trade_size": 837.5375,
            "avg_run_notional": null,
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
            "avg_trade_size": 3315.0,
            "avg_run_notional": null,
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
            "retail_pct": 0.95,
            "mixed_pct": 0.05,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.7006951579115909,
            "mixed_qty_pct": 0.29930484208840913,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.7019141460166135,
            "mixed_notional_pct": 0.2980858539833865,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 4564.96,
            "avg_run_notional": null,
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
            "retail_pct": 0.8817204301075269,
            "mixed_pct": 0.10752688172043011,
            "instit_pct": 0.010752688172043012,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.31667341157426143,
            "mixed_qty_pct": 0.5018211250505868,
            "instit_qty_pct": 0.18150546337515175,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.3168299272996715,
            "mixed_notional_pct": 0.5021520642592221,
            "instit_notional_pct": 0.1810180084411064,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 5275.0053763440865,
            "avg_run_notional": null,
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
            "retail_pct": 0.8333333333333334,
            "mixed_pct": 0.14492753623188406,
            "instit_pct": 0.021739130434782608,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.2803766545260727,
            "mixed_qty_pct": 0.4820023096739806,
            "instit_qty_pct": 0.2376210357999467,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.27698479842115364,
            "mixed_notional_pct": 0.4835847320289268,
            "instit_notional_pct": 0.23943046954991953,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 10346.942028985508,
            "avg_run_notional": null,
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
            "avg_trade_size": 1136.7777777777778,
            "avg_run_notional": null,
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
            "avg_trade_size": 2133.590909090909,
            "avg_run_notional": null,
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
            "avg_trade_size": 615.212,
            "avg_run_notional": null,
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
            "avg_trade_size": 3233.8947368421054,
            "avg_run_notional": null,
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
            "retail_pct": 0.9228989976869699,
            "mixed_pct": 0.07401696222050887,
            "instit_pct": 0.0030840400925212026,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.32271791352093343,
            "mixed_qty_pct": 0.587920384351407,
            "instit_qty_pct": 0.08936170212765958,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.3229618128817434,
            "mixed_notional_pct": 0.587541770059217,
            "instit_notional_pct": 0.08949641705903957,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 3387.238627602159,
            "avg_run_notional": null,
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
            "retail_pct": 0.916083916083916,
            "mixed_pct": 0.08391608391608392,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.5868519595428187,
            "mixed_qty_pct": 0.41314804045718134,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.5842169112408759,
            "mixed_notional_pct": 0.415783088759124,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 3597.5657342657346,
            "avg_run_notional": null,
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
            "retail_pct": 0.9067796610169492,
            "mixed_pct": 0.09322033898305085,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.4865159112887215,
            "mixed_qty_pct": 0.5134840887112785,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.4894123184729221,
            "mixed_notional_pct": 0.5105876815270779,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 6125.002542372881,
            "avg_run_notional": null,
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
            "retail_pct": 0.8260405549626467,
            "mixed_pct": 0.14941302027748132,
            "instit_pct": 0.02454642475987193,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.26454562486339084,
            "mixed_qty_pct": 0.4682910582137244,
            "instit_qty_pct": 0.26716331692288475,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.26360879207008153,
            "mixed_notional_pct": 0.4685042005299721,
            "instit_notional_pct": 0.26788700739994636,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 10100.811632870864,
            "avg_run_notional": null,
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
            "avg_trade_size": 399.144747081712,
            "avg_run_notional": null,
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
            "avg_trade_size": 2588.409090909091,
            "avg_run_notional": null,
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
            "retail_pct": 0.989247311827957,
            "mixed_pct": 0.010752688172043012,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.9089336126035881,
            "mixed_qty_pct": 0.09106638739641199,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.9091834266599125,
            "mixed_notional_pct": 0.09081657334008753,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 2356.1612903225805,
            "avg_run_notional": null,
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
            "retail_pct": 0.9295659295659295,
            "mixed_pct": 0.07043407043407043,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.6544195440233199,
            "mixed_qty_pct": 0.3455804559766801,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.6518059305517474,
            "mixed_notional_pct": 0.3481940694482526,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 4780.738329238329,
            "avg_run_notional": null,
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
            "retail_pct": 0.9235784685367703,
            "mixed_pct": 0.06944655041698257,
            "instit_pct": 0.006974981046247157,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.34633219602977666,
            "mixed_qty_pct": 0.4808661600496278,
            "instit_qty_pct": 0.17280164392059552,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.3480381921801921,
            "mixed_notional_pct": 0.4792983779866508,
            "instit_notional_pct": 0.17266342983315708,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 3985.462319939348,
            "avg_run_notional": null,
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
            "retail_pct": 0.9047619047619048,
            "mixed_pct": 0.09523809523809523,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.5317121261912586,
            "mixed_qty_pct": 0.4682878738087414,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.5477894614302316,
            "mixed_notional_pct": 0.4522105385697684,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 4745.019047619047,
            "avg_run_notional": null,
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
            "retail_pct": 0.87,
            "mixed_pct": 0.12125,
            "instit_pct": 0.00875,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.4086934279013386,
            "mixed_qty_pct": 0.45859069065346275,
            "instit_qty_pct": 0.13271588144519866,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.41212006544634233,
            "mixed_notional_pct": 0.45545382098521886,
            "instit_notional_pct": 0.13242611356843878,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 6319.9865,
            "avg_run_notional": null,
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
            "retail_pct": 0.8824526702458322,
            "mixed_pct": 0.10794009607233682,
            "instit_pct": 0.009607233681831025,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.3642245319324962,
            "mixed_qty_pct": 0.4821702095574907,
            "instit_qty_pct": 0.15360525851001308,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.36101149040154507,
            "mixed_notional_pct": 0.48305551600636915,
            "instit_notional_pct": 0.1559329935920858,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 6571.107374964679,
            "avg_run_notional": null,
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
            "avg_trade_size": 420.118275862069,
            "avg_run_notional": null,
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
            "retail_pct": 0.9943396226415094,
            "mixed_pct": 0.005660377358490566,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.9079528233511234,
            "mixed_qty_pct": 0.09204717664887659,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.9076624188289404,
            "mixed_notional_pct": 0.09233758117105959,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 1168.3339622641508,
            "avg_run_notional": null,
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
            "retail_pct": 0.9555555555555556,
            "mixed_pct": 0.03333333333333333,
            "instit_pct": 0.011111111111111112,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.30011289757464865,
            "mixed_qty_pct": 0.07700393195001362,
            "instit_qty_pct": 0.6228831704753377,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.30055120122234213,
            "mixed_notional_pct": 0.0820199934293894,
            "instit_notional_pct": 0.6174288053482684,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 10653.5,
            "avg_run_notional": null,
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
            "retail_pct": 0.9371980676328503,
            "mixed_pct": 0.06280193236714976,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.6048859594057334,
            "mixed_qty_pct": 0.3951140405942666,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.611511556307348,
            "mixed_notional_pct": 0.38848844369265195,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 3861.945652173913,
            "avg_run_notional": null,
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
            "retail_pct": 0.9364620938628159,
            "mixed_pct": 0.06353790613718412,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.6772356943204527,
            "mixed_qty_pct": 0.3227643056795473,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.6673047446627511,
            "mixed_notional_pct": 0.3326952553372488,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 4473.045054151625,
            "avg_run_notional": null,
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
            "retail_pct": 0.9136027181167334,
            "mixed_pct": 0.07796383933988593,
            "instit_pct": 0.008433442543380658,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.34465007998543357,
            "mixed_qty_pct": 0.46345381003784675,
            "instit_qty_pct": 0.1918961099767197,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.347578941956966,
            "mixed_notional_pct": 0.4620295838764642,
            "instit_notional_pct": 0.19039147416656982,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 4674.737926222546,
            "avg_run_notional": null,
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
            "retail_pct": 0.9017857142857143,
            "mixed_pct": 0.09183673469387756,
            "instit_pct": 0.006377551020408163,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.4657631097539547,
            "mixed_qty_pct": 0.39686537762366003,
            "instit_qty_pct": 0.13737151262238528,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.4579387465086995,
            "mixed_notional_pct": 0.4032688436700989,
            "instit_notional_pct": 0.13879240982120156,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 5387.023214285715,
            "avg_run_notional": null,
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
      "total_trades": 6631,
      "price_moving_trades": 1314,
      "pct_price_moving": 19.816015683908912,
      "all_movers": {
        "count": 1314,
        "avg_size": 6894.841704718417,
        "median_size": 931.75,
        "retail_count": 1118,
        "mixed_count": 180,
        "institutional_count": 16,
        "ambiguous_count": 0,
        "unobservable_count": 0,
        "retail_pct": 85.08371385083714,
        "mixed_pct": 13.698630136986301,
        "instit_pct": 1.21765601217656,
        "unclear_pct": null
      },
      "positive_movers": {
        "count": 659,
        "avg_size": 5065.666919575114,
        "median_size": 69.0,
        "retail_count": 584,
        "mixed_count": 70,
        "institutional_count": 5,
        "ambiguous_count": 0,
        "unobservable_count": 0,
        "retail_pct": 88.61911987860395,
        "mixed_pct": 10.62215477996965,
        "instit_pct": 0.7587253414264037,
        "unclear_pct": null
      },
      "negative_movers": {
        "count": 655,
        "avg_size": 8735.187022900764,
        "median_size": 2418.0,
        "retail_count": 534,
        "mixed_count": 110,
        "institutional_count": 11,
        "ambiguous_count": 0,
        "unobservable_count": 0,
        "retail_pct": 81.5267175572519,
        "mixed_pct": 16.793893129770993,
        "instit_pct": 1.6793893129770994,
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
            "avg_short_ratio": 0.0063558348450142065,
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
          "ticker": "J03",
          "avg_short_ratio": 0.00028587903247852676,
          "max_short_ratio": 0.039047524386953865,
          "is_target": false
        },
        {
          "ticker": "U77",
          "avg_short_ratio": 0.0034729357890875326,
          "max_short_ratio": 1.0,
          "is_target": false
        },
        {
          "ticker": "ITS",
          "avg_short_ratio": 0.0036573601540397047,
          "max_short_ratio": 0.1385606874328679,
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
          "opening": 0.08701450696372515,
          "continuous": 0.9052474302688787,
          "closing": 0.007390921475931419,
          "auctions": 0.09475256973112135,
          "other": 0.0
        },
        "1W": {
          "opening": 0.07435905585700123,
          "continuous": 0.9154642389568718,
          "closing": 0.009872787401336451,
          "auctions": 0.08453576104312817,
          "other": 0.0
        },
        "1M": {
          "opening": 0.028477627726730344,
          "continuous": 0.9464205994907645,
          "closing": 0.016397449440441563,
          "auctions": 0.0535794005092355,
          "other": 0.0
        },
        "3M": {
          "opening": 0.02013249764022032,
          "continuous": 0.9514903239597498,
          "closing": 0.021320845286633885,
          "auctions": 0.04850967604025024,
          "other": 0.0
        }
      },
      "hhi": {
        "1D": 0.32990641783692154,
        "1W": 0.3273731196437418,
        "1M": 0.34441719361812817,
        "3M": 0.28111868222555053
      },
      "profile_buckets": [
        {
          "time": "08:30",
          "avg_share": 0.0135
        },
        {
          "time": "09:00",
          "avg_share": 0.1238
        },
        {
          "time": "09:30",
          "avg_share": 0.1065
        },
        {
          "time": "10:00",
          "avg_share": 0.0508
        },
        {
          "time": "10:30",
          "avg_share": 0.0621
        },
        {
          "time": "11:00",
          "avg_share": 0.0502
        },
        {
          "time": "11:30",
          "avg_share": 0.0641
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
          "avg_share": 0.109
        },
        {
          "time": "13:30",
          "avg_share": 0.0631
        },
        {
          "time": "14:00",
          "avg_share": 0.0658
        },
        {
          "time": "14:30",
          "avg_share": 0.0562
        },
        {
          "time": "15:00",
          "avg_share": 0.0397
        },
        {
          "time": "15:30",
          "avg_share": 0.0472
        },
        {
          "time": "16:00",
          "avg_share": 0.0411
        },
        {
          "time": "16:30",
          "avg_share": 0.0683
        },
        {
          "time": "17:00",
          "avg_share": 0.0336
        }
      ],
      "peers_hhi_rows": [
        {
          "ticker": "TKU",
          "auctions_pct": 6.394248397892159,
          "hhi": 0.2665530150233464,
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
          "auctions_pct": 11.18891660340527,
          "hhi": 0.7992884702052244,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "U77",
          "auctions_pct": 4.739753167563321,
          "hhi": 0.5624133343958216,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "J03",
          "auctions_pct": 4.763784250061386,
          "hhi": 0.55327937572028,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "NXR",
          "auctions_pct": 3.2077077861888856,
          "hhi": 0.7454685597185653,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "42F",
          "auctions_pct": 9.13390496461529,
          "hhi": 0.46864649905669364,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "LVR",
          "auctions_pct": 2.9028723000297503,
          "hhi": 0.46827018642631546,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "ITS",
          "auctions_pct": 3.231625420741217,
          "hhi": 0.19665760890400671,
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
