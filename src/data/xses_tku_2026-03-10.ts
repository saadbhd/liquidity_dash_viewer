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
      "marketCap": 125453076.1,
      "sector": "Software - Application",
      "industry": "Technology"
    },
    {
      "ticker": "ITS",
      "name": "Info-Tech",
      "marketCap": 270900000.0,
      "sector": "Software - Application",
      "industry": "Technology"
    },
    {
      "ticker": "LVR",
      "name": "17LIVE GROUP",
      "marketCap": 144792568.73999998,
      "sector": "Software - Application",
      "industry": "Technology"
    },
    {
      "ticker": "NXR",
      "name": "iWOW Tech",
      "marketCap": 102908899.2,
      "sector": "Software - Application",
      "industry": "Technology"
    },
    {
      "ticker": "U77",
      "name": "Sarine Tech",
      "marketCap": 69836744.63499999,
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
      "ticker": "9MT",
      "name": "METAOPTICS LTD",
      "marketCap": 202611297.1,
      "sector": "Computer Hardware",
      "industry": "Technology"
    },
    {
      "ticker": "QS9",
      "name": "G Invacom",
      "marketCap": 15484746.939000001,
      "sector": "Communication Equipment",
      "industry": "Technology"
    }
  ]
};

export const REPORT_DATA: ReportData = {
  "meta": {
    "market": "XSES",
    "ticker": "TKU",
    "company": "Toku Ltd",
    "asof_date": "2026-03-10",
    "industry": "Technology",
    "sector": "Software - Application",
    "market_cap_display": "125.5M",
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
          "score_pca": 69.71326164874552,
          "score_pca_percentile": 69.71326164874552,
          "rank_pca": 170,
          "total": 558,
          "adv_notional_sgd": 161216.0,
          "adv_volume_shares": 732800.0,
          "free_float_shares": null,
          "turnover_ratio": 0.0012850701235216663,
          "votes": 101.0,
          "trades": 101.0,
          "spread_pct": 0.02611025597172341,
          "spread_ticks": 1.150753768844221,
          "amihud": 1.4425251807195573e-07,
          "volatility": 0.21424752335923616
        },
        "pca": {
          "valid": true,
          "window_days": 1,
          "variance_explained": 0.5242663206266652,
          "loadings": {
            "log_adv": 0.5507301931953623,
            "log_trades": 0.510049925609745,
            "log_turnover": 0.5190726764383364,
            "neg_spread": 0.37334263364820885,
            "neg_amihud": 0.03674383916418776,
            "neg_vol": -0.1624009003907609
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
          "peer_median_adv": 11381.0,
          "peer_median_score_pca": 55.55555555555556,
          "peer_median_trades": 90.0,
          "peer_median_volatility": 0.11770491315351803,
          "peer_median_spread_pct": 0.02414513741605822,
          "peer_median_spread_ticks": 1.6434397977941178,
          "peer_median_amihud": 5.3656239895319894e-08,
          "peer_median_turnover_ratio": 0.00013537245011198184,
          "target_vs_peer": {
            "score_pca_delta": 14.16,
            "adv_delta_pct": 1316.5,
            "trades_delta_pct": 12.22,
            "volatility_delta_pct": -82.02,
            "spread_pct_delta_pct": -8.14,
            "spread_ticks_delta_pct": -29.98,
            "amihud_delta_pct": -168.85,
            "turnover_ratio_delta_pct": 849.28
          }
        },
        "peer_liquidity": [
          {
            "ticker": "TKU",
            "score_pca": 69.71326164874552,
            "rank_pca": 170,
            "adv": 161216.0,
            "trades": 101.0,
            "volatility": 0.21424752335923616,
            "spread_pct": 0.02611025597172341,
            "spread_ticks": 1.150753768844221,
            "amihud": 1.4425251807195573e-07,
            "turnover_ratio": 0.0012850701235216663,
            "is_target": true
          },
          {
            "ticker": "ITS",
            "score_pca": 81.89964157706093,
            "rank_pca": 102,
            "adv": 510615.0,
            "trades": 326.0,
            "volatility": 0.3632292108029483,
            "spread_pct": 0.012875255776579752,
            "spread_ticks": 1.345703125,
            "amihud": 5.760066724612961e-08,
            "turnover_ratio": 0.007202459766642081,
            "is_target": false
          },
          {
            "ticker": "LVR",
            "score_pca": 46.59498207885305,
            "rank_pca": 299,
            "adv": 10790.0,
            "trades": 4.0,
            "volatility": 0.0,
            "spread_pct": 0.011766803351756118,
            "spread_ticks": 1.9411764705882353,
            "amihud": 1.130224462578269e-06,
            "turnover_ratio": 8.986992620925533e-05,
            "is_target": false
          },
          {
            "ticker": "NXR",
            "score_pca": 33.33333333333333,
            "rank_pca": 373,
            "adv": 74.0,
            "trades": 1.0,
            "volatility": 0.0,
            "spread_pct": 0.04844290657439451,
            "spread_ticks": 3.5,
            "amihud": 0.0,
            "turnover_ratio": 3.5598149294935937e-06,
            "is_target": false
          },
          {
            "ticker": "U77",
            "score_pca": 64.51612903225806,
            "rank_pca": 199,
            "adv": 11972.0,
            "trades": 198.0,
            "volatility": 0.23540982630703605,
            "spread_pct": 0.025260029717681903,
            "spread_ticks": 1.1428571428571428,
            "amihud": 0.0,
            "turnover_ratio": 0.00018087497401470836,
            "is_target": false
          },
          {
            "ticker": "532",
            "score_pca": 2.956989247311828,
            "rank_pca": 539,
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
            "score_pca": 7.347670250896058,
            "rank_pca": 518,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.0,
            "spread_pct": 0.4235727440147329,
            "spread_ticks": 16.428571428571427,
            "amihud": null,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "9MT",
            "score_pca": 79.03225806451613,
            "rank_pca": 118,
            "adv": 238058.5,
            "trades": 176.0,
            "volatility": 0.799693653395486,
            "spread_pct": 0.016695290969365333,
            "spread_ticks": 2.759075907590759,
            "amihud": 4.971181254451019e-08,
            "turnover_ratio": 0.0034560614578159395,
            "is_target": false
          },
          {
            "ticker": "QS9",
            "score_pca": 82.25806451612904,
            "rank_pca": 100,
            "adv": 499684.80000000005,
            "trades": 179.0,
            "volatility": 0.5154559940369705,
            "spread_pct": 0.02303024511443454,
            "spread_ticks": 1.2617801047120418,
            "amihud": 1.924289995490082e-07,
            "turnover_ratio": 0.038521528412474665,
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
              "mean": 0.29504598379690194,
              "median": 0.13917931217067325,
              "min": 0.0,
              "max": 6.608197362010048,
              "p5": 0.0,
              "p95": 1.1254178447808398,
              "count": 558
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 4232586.412905457,
              "median": 10988.2,
              "min": 0.0,
              "max": 395087175.0,
              "p5": 0.0,
              "p95": 19365005.79999997,
              "count": 558
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.11817201901561605,
              "median": 0.03846153846153849,
              "min": 0.00028468976419645744,
              "max": 1.4382566585956416,
              "p5": 0.0036232006948550945,
              "p95": 0.6016961651917385,
              "count": 557
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.011623889217375147,
              "median": 0.00025307969939134857,
              "min": 0.0,
              "max": 4.62395359567596,
              "p5": 0.0,
              "p95": 0.01140213665307803,
              "count": 551
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 0.00048758923865941577,
              "median": 2.6486062795382535e-08,
              "min": 0.0,
              "max": 0.16666666666666666,
              "p5": 0.0,
              "p95": 3.514807715842972e-05,
              "count": 387
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 595.0394265232975,
              "median": 7.0,
              "min": 0.0,
              "max": 17071.0,
              "p5": 0.0,
              "p95": 3611.7499999999986,
              "count": 558
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.11380571358112987,
              "median": 0.04877957408990926,
              "min": 0.0,
              "max": 0.3632292108029483,
              "p5": 0.0,
              "p95": 0.31849242622937896,
              "count": 8
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 1809849.125,
              "median": 11381.0,
              "min": 0.0,
              "max": 13784126.0,
              "p5": 0.0,
              "p95": 9138397.149999993,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.15201601621257704,
              "median": 0.025685142844702656,
              "min": 0.0014334676270811582,
              "max": 0.6666666666666666,
              "p5": 0.005050135130717394,
              "p95": 0.5815837937384897,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.002241761542173502,
              "median": 0.00013537245011198184,
              "min": 0.0,
              "max": 0.009172257732070813,
              "p5": 0.0,
              "p95": 0.008482828444170755,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 2.222081856563579e-07,
              "median": 2.9386066643961384e-08,
              "min": 0.0,
              "max": 1.130224462578269e-06,
              "p5": 0.0,
              "p95": 8.837314764516906e-07,
              "count": 6
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 478.25,
              "median": 52.5,
              "min": 0.0,
              "max": 3196.0,
              "p5": 0.0,
              "p95": 2191.4999999999986,
              "count": 8
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 158899.2875,
              "median": 11381.0,
              "min": 0.0,
              "max": 510615.0,
              "p5": 0.0,
              "p95": 506789.43,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 110.5,
              "median": 90.0,
              "min": 0.0,
              "max": 326.0,
              "p5": 0.0,
              "p95": 281.19999999999993,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.2392235855678051,
              "median": 0.11770491315351803,
              "min": 0.0,
              "max": 0.799693653395486,
              "p5": 0.0,
              "p95": 0.7002104726200055,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.15353874277320145,
              "median": 0.02414513741605822,
              "min": 0.011766803351756118,
              "max": 0.6666666666666666,
              "p5": 0.01215476170044439,
              "p95": 0.5815837937384897,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 3.6723955224149507,
              "median": 1.6434397977941178,
              "min": 1.0,
              "max": 16.428571428571427,
              "p5": 1.05,
              "p95": 11.903571428571421,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 2.383276569863195e-07,
              "median": 5.3656239895319894e-08,
              "min": 0.0,
              "max": 1.130224462578269e-06,
              "p5": 0.0,
              "p95": 8.957755968209538e-07,
              "count": 6
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.006181794294010768,
              "median": 0.00013537245011198184,
              "min": 0.0,
              "max": 0.038521528412474665,
              "p5": 0.0,
              "p95": 0.02755985438643324,
              "count": 8
            }
          },
          "returns": {
            "window_days": 1,
            "n_obs": 1,
            "stock": 0.023255813953488413,
            "market": null,
            "sector": 0.0060975609756097615,
            "peers": 0.0,
            "vs_market": null,
            "vs_sector": 0.017158252977878652,
            "vs_peers": 0.023255813953488413
          }
        }
      },
      "1w": {
        "label": "1W",
        "window_days": 5,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 5,
          "score_pca": 70.96774193548387,
          "score_pca_percentile": 70.96774193548387,
          "rank_pca": 163,
          "total": 558,
          "adv_notional_sgd": 174064.0,
          "adv_volume_shares": 791200.0,
          "free_float_shares": null,
          "turnover_ratio": 0.0013874829172084366,
          "votes": 85.0,
          "trades": 85.0,
          "spread_pct": 0.02611025597172341,
          "spread_ticks": 1.150753768844221,
          "amihud": 7.93307656608847e-08,
          "volatility": 0.40306757927150916
        },
        "pca": {
          "valid": true,
          "window_days": 5,
          "variance_explained": 0.5216878276860113,
          "loadings": {
            "log_adv": 0.5506764781136808,
            "log_trades": 0.5032377052243078,
            "log_turnover": 0.5067391207359233,
            "neg_spread": 0.41381675677521873,
            "neg_amihud": 0.10785968738459131,
            "neg_vol": 0.06200541636023733
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
          "peer_median_adv": 17423.75,
          "peer_median_score_pca": 53.584229390681,
          "peer_median_trades": 17.0,
          "peer_median_volatility": 0.491858554647516,
          "peer_median_spread_pct": 0.027013733183172017,
          "peer_median_spread_ticks": 2.073963610611756,
          "peer_median_amihud": 5.208116985652514e-07,
          "peer_median_turnover_ratio": 0.00021675380950629054,
          "target_vs_peer": {
            "score_pca_delta": 17.38,
            "adv_delta_pct": 899.0,
            "trades_delta_pct": 400.0,
            "volatility_delta_pct": 18.05,
            "spread_pct_delta_pct": 3.34,
            "spread_ticks_delta_pct": -44.51,
            "amihud_delta_pct": 84.77,
            "turnover_ratio_delta_pct": 540.12
          }
        },
        "peer_liquidity": [
          {
            "ticker": "TKU",
            "score_pca": 70.96774193548387,
            "rank_pca": 163,
            "adv": 174064.0,
            "trades": 85.0,
            "volatility": 0.40306757927150916,
            "spread_pct": 0.02611025597172341,
            "spread_ticks": 1.150753768844221,
            "amihud": 7.93307656608847e-08,
            "turnover_ratio": 0.0013874829172084366,
            "is_target": true
          },
          {
            "ticker": "ITS",
            "score_pca": 80.82437275985663,
            "rank_pca": 108,
            "adv": 550341.0,
            "trades": 326.0,
            "volatility": 0.7373289085591023,
            "spread_pct": 0.013555878084179965,
            "spread_ticks": 1.4755134281200633,
            "amihud": 5.876805237032714e-08,
            "turnover_ratio": 0.007477939412250847,
            "is_target": false
          },
          {
            "ticker": "LVR",
            "score_pca": 51.075268817204304,
            "rank_pca": 274,
            "adv": 17935.0,
            "trades": 8.0,
            "volatility": 0.2738432734892126,
            "spread_pct": 0.01565419380901885,
            "spread_ticks": 2.6724137931034484,
            "amihud": 1.130224462578269e-06,
            "turnover_ratio": 0.00014586580330886828,
            "is_target": false
          },
          {
            "ticker": "NXR",
            "score_pca": 37.096774193548384,
            "rank_pca": 352,
            "adv": 3850.0,
            "trades": 1.0,
            "volatility": 0.45169326961269685,
            "spread_pct": 0.054257724189902067,
            "spread_ticks": 4.0,
            "amihud": 8.491943975814946e-07,
            "turnover_ratio": 0.00017799074647467967,
            "is_target": false
          },
          {
            "ticker": "U77",
            "score_pca": 56.09318996415771,
            "rank_pca": 246,
            "adv": 16912.5,
            "trades": 26.0,
            "volatility": 0.5503031256555411,
            "spread_pct": 0.031088082901554397,
            "spread_ticks": 1.4,
            "amihud": 1.4078062858550678e-06,
            "turnover_ratio": 0.00025551687253790137,
            "is_target": false
          },
          {
            "ticker": "532",
            "score_pca": 3.136200716845878,
            "rank_pca": 538,
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
            "score_pca": 6.093189964157706,
            "rank_pca": 525,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.0,
            "spread_pct": 0.4381778741865511,
            "spread_ticks": 17.0,
            "amihud": null,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "9MT",
            "score_pca": 75.80645161290323,
            "rank_pca": 136,
            "adv": 238058.5,
            "trades": 151.0,
            "volatility": 0.5320238396823351,
            "spread_pct": 0.016695290969365333,
            "spread_ticks": 2.759075907590759,
            "amihud": 1.0233110251529874e-07,
            "turnover_ratio": 0.0034560614578159395,
            "is_target": false
          },
          {
            "ticker": "QS9",
            "score_pca": 76.16487455197132,
            "rank_pca": 134,
            "adv": 259646.4,
            "trades": 125.0,
            "volatility": 1.3813402706473705,
            "spread_pct": 0.022939383464789638,
            "spread_ticks": 1.2617801047120418,
            "amihud": 1.924289995490082e-07,
            "turnover_ratio": 0.021941241064652364,
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
              "mean": 0.6493645023449501,
              "median": 0.3985936598682142,
              "min": 0.0,
              "max": 9.513056291224183,
              "p5": 0.0,
              "p95": 2.005240893143937,
              "count": 558
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 4513086.083690558,
              "median": 16931.85,
              "min": 0.0,
              "max": 395087175.0,
              "p5": 0.0,
              "p95": 20797852.55,
              "count": 558
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.10985883801272332,
              "median": 0.03639076111569916,
              "min": 0.00028468976419645744,
              "max": 1.401569955364014,
              "p5": 0.00414775831269617,
              "p95": 0.5055755917588985,
              "count": 557
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.01327198363049357,
              "median": 0.00036391969807634574,
              "min": 0.0,
              "max": 5.602794805879639,
              "p5": 0.0,
              "p95": 0.012343636064234359,
              "count": 551
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 0.00012714189193146463,
              "median": 1.2031448429241632e-07,
              "min": 0.0,
              "max": 0.02889784946236561,
              "p5": 0.0,
              "p95": 8.491045937785569e-05,
              "count": 505
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 643.752688172043,
              "median": 8.0,
              "min": 0.0,
              "max": 17071.0,
              "p5": 0.0,
              "p95": 3949.6499999999996,
              "count": 558
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.34460596893293904,
              "median": 0.3718395870734799,
              "min": 0.0,
              "max": 0.7373289085591023,
              "p5": 0.0,
              "p95": 0.6718698845428558,
              "count": 8
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 2240345.8125,
              "median": 17423.75,
              "min": 0.0,
              "max": 17159664.0,
              "p5": 0.0,
              "p95": 11346400.949999992,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.1558683455150869,
              "median": 0.028599169436638903,
              "min": 0.0014360883110988742,
              "max": 0.6666666666666666,
              "p5": 0.0056780147316772564,
              "p95": 0.5866955892986261,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.002630948799737208,
              "median": 0.00021675380950629054,
              "min": 0.0,
              "max": 0.011602794646116932,
              "p5": 0.0,
              "p95": 0.0101590953142638,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 5.87733529720818e-07,
              "median": 4.6426258162118966e-07,
              "min": 1.0772142788650438e-09,
              "max": 1.4078062858550678e-06,
              "p5": 1.549992380173057e-08,
              "p95": 1.3384108300358681e-06,
              "count": 6
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 521.75,
              "median": 17.0,
              "min": 0.0,
              "max": 3728.0,
              "p5": 0.0,
              "p95": 2537.2999999999984,
              "count": 8
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 135842.925,
              "median": 17423.75,
              "min": 0.0,
              "max": 550341.0,
              "p5": 0.0,
              "p95": 448597.88999999984,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 79.625,
              "median": 17.0,
              "min": 0.0,
              "max": 326.0,
              "p5": 0.0,
              "p95": 264.7499999999999,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.49081658595578226,
              "median": 0.491858554647516,
              "min": 0.0,
              "max": 1.3813402706473705,
              "p5": 0.0,
              "p95": 1.1559362939164763,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.15737938678400348,
              "median": 0.027013733183172017,
              "min": 0.013555878084179965,
              "max": 0.6666666666666666,
              "p5": 0.014290288587873574,
              "p95": 0.5866955892986261,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 3.946097904190789,
              "median": 2.073963610611756,
              "min": 1.0,
              "max": 17.0,
              "p5": 1.0916230366492146,
              "p95": 12.449999999999992,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 6.234588834082442e-07,
              "median": 5.208116985652514e-07,
              "min": 5.876805237032714e-08,
              "max": 1.4078062858550678e-06,
              "p5": 6.965881490657005e-08,
              "p95": 1.3384108300358681e-06,
              "count": 6
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.004181826919630075,
              "median": 0.00021675380950629054,
              "min": 0.0,
              "max": 0.021941241064652364,
              "p5": 0.0,
              "p95": 0.016879085486311826,
              "count": 8
            }
          },
          "returns": {
            "window_days": 5,
            "n_obs": 5,
            "stock": -0.0434782608695653,
            "market": -0.03255062740713133,
            "sector": -0.04147966362555733,
            "peers": -0.07107912926959803,
            "vs_market": -0.010927633462433972,
            "vs_sector": -0.0019985972440079713,
            "vs_peers": 0.02760086840003273
          }
        }
      },
      "2w": {
        "label": "2W",
        "window_days": 10,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 10,
          "score_pca": 72.40143369175627,
          "score_pca_percentile": 72.40143369175627,
          "rank_pca": 155,
          "total": 558,
          "adv_notional_sgd": 346206.25,
          "adv_volume_shares": 1478100.0,
          "free_float_shares": null,
          "turnover_ratio": 0.0025920607936372473,
          "votes": 87.5,
          "trades": 87.5,
          "spread_pct": 0.02560452208794506,
          "spread_ticks": 1.1641799732251994,
          "amihud": 8.245510131688448e-08,
          "volatility": 0.5446188468168305
        },
        "pca": {
          "valid": true,
          "window_days": 10,
          "variance_explained": 0.5260527189244161,
          "loadings": {
            "log_adv": 0.5457734344825078,
            "log_trades": 0.4950754047102084,
            "log_turnover": 0.5017317267861313,
            "neg_spread": 0.41720513412819726,
            "neg_amihud": 0.15647085862044072,
            "neg_vol": 0.08218103589060947
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
          "peer_median_adv": 13119.5,
          "peer_median_score_pca": 48.924731182795696,
          "peer_median_trades": 8.25,
          "peer_median_volatility": 0.4041642369637638,
          "peer_median_spread_pct": 0.026705297064069003,
          "peer_median_spread_ticks": 1.8758191278534306,
          "peer_median_amihud": 1.0284600477058013e-07,
          "peer_median_turnover_ratio": 0.00017765198507246015,
          "target_vs_peer": {
            "score_pca_delta": 23.48,
            "adv_delta_pct": 2538.9,
            "trades_delta_pct": 960.61,
            "volatility_delta_pct": -34.75,
            "spread_pct_delta_pct": 4.12,
            "spread_ticks_delta_pct": -37.94,
            "amihud_delta_pct": 19.83,
            "turnover_ratio_delta_pct": 1359.07
          }
        },
        "peer_liquidity": [
          {
            "ticker": "TKU",
            "score_pca": 72.40143369175627,
            "rank_pca": 155,
            "adv": 346206.25,
            "trades": 87.5,
            "volatility": 0.5446188468168305,
            "spread_pct": 0.02560452208794506,
            "spread_ticks": 1.1641799732251994,
            "amihud": 8.245510131688448e-08,
            "turnover_ratio": 0.0025920607936372473,
            "is_target": true
          },
          {
            "ticker": "ITS",
            "score_pca": 85.30465949820788,
            "rank_pca": 83,
            "adv": 1422023.0,
            "trades": 585.5,
            "volatility": 1.0337149342686391,
            "spread_pct": 0.012516410316412884,
            "spread_ticks": 1.3231485922029704,
            "amihud": 3.681810714274681e-08,
            "turnover_ratio": 0.01878297239575465,
            "is_target": false
          },
          {
            "ticker": "LVR",
            "score_pca": 48.5663082437276,
            "rank_pca": 288,
            "adv": 14362.5,
            "trades": 6.5,
            "volatility": 0.2107046945883762,
            "spread_pct": 0.014845936948838949,
            "spread_ticks": 2.602873563218391,
            "amihud": 7.281441023896174e-07,
            "turnover_ratio": 0.0001178678647590618,
            "is_target": false
          },
          {
            "ticker": "NXR",
            "score_pca": 36.55913978494624,
            "rank_pca": 355,
            "adv": 3975.0,
            "trades": 1.0,
            "volatility": 0.3444461012384481,
            "spread_pct": 0.04939024390243894,
            "spread_ticks": 3.95,
            "amihud": 0.0,
            "turnover_ratio": 0.00017799074647467967,
            "is_target": false
          },
          {
            "ticker": "U77",
            "score_pca": 49.283154121863795,
            "rank_pca": 284,
            "adv": 11876.5,
            "trades": 10.0,
            "volatility": 0.4638823726890795,
            "spread_pct": 0.03241151133029527,
            "spread_ticks": 1.4592592592592593,
            "amihud": 1.592450829504778e-06,
            "turnover_ratio": 0.00017731322367024063,
            "is_target": false
          },
          {
            "ticker": "532",
            "score_pca": 2.7777777777777777,
            "rank_pca": 541,
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
            "score_pca": 5.376344086021505,
            "rank_pca": 529,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.0,
            "spread_pct": 0.48240629191007667,
            "spread_ticks": 19.77777777777778,
            "amihud": null,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "9MT",
            "score_pca": 75.98566308243727,
            "rank_pca": 135,
            "adv": 297585.75,
            "trades": 176.5,
            "volatility": 0.5144527530519254,
            "spread_pct": 0.014435936615055175,
            "spread_ticks": 2.292378996447602,
            "amihud": 1.0284600477058013e-07,
            "turnover_ratio": 0.0040112617902185,
            "is_target": false
          },
          {
            "ticker": "QS9",
            "score_pca": 79.56989247311827,
            "rank_pca": 115,
            "adv": 488360.9,
            "trades": 184.5,
            "volatility": 1.0617868892463382,
            "spread_pct": 0.020999082797842742,
            "spread_ticks": 1.2333960047003525,
            "amihud": 1.1126775111119368e-07,
            "turnover_ratio": 0.03831719697982499,
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
              "mean": 0.6457880413120979,
              "median": 0.4485569678356033,
              "min": 0.0,
              "max": 8.197560612767678,
              "p5": 0.0,
              "p95": 1.9607934300082868,
              "count": 558
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 4604945.409819771,
              "median": 20631.25,
              "min": 0.0,
              "max": 382575336.74,
              "p5": 0.0,
              "p95": 20135552.762499977,
              "count": 558
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.10035790319787141,
              "median": 0.032162954609477344,
              "min": 0.00028526572008990577,
              "max": 1.390422856550258,
              "p5": 0.0038204549847344624,
              "p95": 0.4830443750918471,
              "count": 557
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.013554239724676368,
              "median": 0.00043219772757904925,
              "min": 0.0,
              "max": 5.676949443016281,
              "p5": 0.0,
              "p95": 0.012826446558011306,
              "count": 551
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 9.068153728964548e-05,
              "median": 1.1333277289183857e-07,
              "min": 0.0,
              "max": 0.012127022859756413,
              "p5": 0.0,
              "p95": 5.861089748137199e-05,
              "count": 534
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 612.1155913978495,
              "median": 8.5,
              "min": 0.0,
              "max": 16138.0,
              "p5": 0.0,
              "p95": 3548.2749999999996,
              "count": 558
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.3571941471425948,
              "median": 0.3023161643889166,
              "min": 0.0,
              "max": 1.0337149342686391,
              "p5": 0.0,
              "p95": 0.8625313036605058,
              "count": 8
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 2868042.71875,
              "median": 13119.5,
              "min": 0.0,
              "max": 21145898.5,
              "p5": 0.0,
              "p95": 14242542.07499999,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.16065954514147052,
              "median": 0.029008016709120163,
              "min": 0.001434777969090016,
              "max": 0.6666666666666666,
              "p5": 0.00531334929065302,
              "p95": 0.6021755355018601,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.004437340511164212,
              "median": 0.00017765198507246015,
              "min": 0.0,
              "max": 0.01878297239575465,
              "p5": 0.0,
              "p95": 0.01698661372999676,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 3.486415225562166e-07,
              "median": 3.681810714274681e-08,
              "min": 0.0,
              "max": 1.592450829504778e-06,
              "p5": 0.0,
              "p95": 1.3331588113702292e-06,
              "count": 7
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 610.5625,
              "median": 8.25,
              "min": 0.0,
              "max": 4194.0,
              "p5": 0.0,
              "p95": 2931.024999999998,
              "count": 8
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 279772.95625,
              "median": 13119.5,
              "min": 0.0,
              "max": 1422023.0,
              "p5": 0.0,
              "p95": 1095241.2649999994,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 120.5,
              "median": 8.25,
              "min": 0.0,
              "max": 585.5,
              "p5": 0.0,
              "p95": 445.14999999999975,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.4536234681353508,
              "median": 0.4041642369637638,
              "min": 0.0,
              "max": 1.0617868892463382,
              "p5": 0.0,
              "p95": 1.0519617050041434,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.1617090100609534,
              "median": 0.026705297064069003,
              "min": 0.012516410316412884,
              "max": 0.6666666666666666,
              "p5": 0.013188244520937685,
              "p95": 0.6021755355018601,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 4.204854274200795,
              "median": 1.8758191278534306,
              "min": 1.0,
              "max": 19.77777777777778,
              "p5": 1.0816886016451235,
              "p95": 14.238055555555547,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 3.6736097070270234e-07,
              "median": 1.0284600477058013e-07,
              "min": 0.0,
              "max": 1.592450829504778e-06,
              "p5": 0.0,
              "p95": 1.3331588113702292e-06,
              "count": 7
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.007698075375087765,
              "median": 0.00017765198507246015,
              "min": 0.0,
              "max": 0.03831719697982499,
              "p5": 0.0,
              "p95": 0.03148021837540036,
              "count": 8
            }
          },
          "returns": {
            "window_days": 10,
            "n_obs": 10,
            "stock": -0.13725490196078438,
            "market": -0.0526172522104863,
            "sector": -0.06295550297099661,
            "peers": -0.08142233952984945,
            "vs_market": -0.08463764975029808,
            "vs_sector": -0.07429939898978777,
            "vs_peers": -0.05583256243093493
          }
        }
      },
      "30d": {
        "label": "1M",
        "window_days": 21,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 21,
          "score_pca": 74.55197132616487,
          "score_pca_percentile": 74.55197132616487,
          "rank_pca": 143,
          "total": 558,
          "adv_notional_sgd": 430575.0,
          "adv_volume_shares": 1722300.0,
          "free_float_shares": null,
          "turnover_ratio": 0.0030203005918959685,
          "votes": 107.0,
          "trades": 107.0,
          "spread_pct": 0.025405971712938697,
          "spread_ticks": 1.1776061776061777,
          "amihud": 5.1995850315178163e-08,
          "volatility": 0.6528198349730021
        },
        "pca": {
          "valid": true,
          "window_days": 21,
          "variance_explained": 0.5416913146660943,
          "loadings": {
            "log_adv": 0.5304076907583306,
            "log_trades": 0.4793621597336657,
            "log_turnover": 0.4864206783535814,
            "neg_spread": 0.42140093729476014,
            "neg_amihud": 0.19536974334794688,
            "neg_vol": 0.19111891194014743
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
          "peer_median_adv": 11167.5,
          "peer_median_score_pca": 48.028673835125446,
          "peer_median_trades": 6.0,
          "peer_median_volatility": 0.36240041118345323,
          "peer_median_spread_pct": 0.02715977230925669,
          "peer_median_spread_ticks": 1.4158730158730157,
          "peer_median_amihud": 2.340919882082665e-07,
          "peer_median_turnover_ratio": 0.00014056938531481242,
          "target_vs_peer": {
            "score_pca_delta": 26.52,
            "adv_delta_pct": 3755.6,
            "trades_delta_pct": 1683.33,
            "volatility_delta_pct": -80.14,
            "spread_pct_delta_pct": 6.46,
            "spread_ticks_delta_pct": -16.83,
            "amihud_delta_pct": 77.79,
            "turnover_ratio_delta_pct": 2048.62
          }
        },
        "peer_liquidity": [
          {
            "ticker": "TKU",
            "score_pca": 74.55197132616487,
            "rank_pca": 143,
            "adv": 430575.0,
            "trades": 107.0,
            "volatility": 0.6528198349730021,
            "spread_pct": 0.025405971712938697,
            "spread_ticks": 1.1776061776061777,
            "amihud": 5.1995850315178163e-08,
            "turnover_ratio": 0.0030203005918959685,
            "is_target": true
          },
          {
            "ticker": "ITS",
            "score_pca": 83.33333333333334,
            "rank_pca": 94,
            "adv": 1033802.0,
            "trades": 326.0,
            "volatility": 0.7887267034818698,
            "spread_pct": 0.008059221113614427,
            "spread_ticks": 1.2885906040268456,
            "amihud": 2.0880650627709966e-08,
            "turnover_ratio": 0.015623842911434776,
            "is_target": false
          },
          {
            "ticker": "LVR",
            "score_pca": 53.76344086021505,
            "rank_pca": 259,
            "adv": 17935.0,
            "trades": 8.0,
            "volatility": 0.1939444734476871,
            "spread_pct": 0.012931310415466373,
            "spread_ticks": 2.3333333333333335,
            "amihud": 3.2606374220096594e-07,
            "turnover_ratio": 0.00014586580330886828,
            "is_target": false
          },
          {
            "ticker": "NXR",
            "score_pca": 37.096774193548384,
            "rank_pca": 352,
            "adv": 3002.0,
            "trades": 1.0,
            "volatility": 0.3284344689775406,
            "spread_pct": 0.05018820577164361,
            "spread_ticks": 4.0,
            "amihud": 3.438232394432282e-07,
            "turnover_ratio": 0.00013527296732075656,
            "is_target": false
          },
          {
            "ticker": "U77",
            "score_pca": 42.29390681003584,
            "rank_pca": 323,
            "adv": 4400.0,
            "trades": 4.0,
            "volatility": 0.3963663533893659,
            "spread_pct": 0.031890660592255156,
            "spread_ticks": 1.4,
            "amihud": 3.1608590623317324e-06,
            "turnover_ratio": 6.194348425161246e-05,
            "is_target": false
          },
          {
            "ticker": "532",
            "score_pca": 3.763440860215054,
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
            "score_pca": 2.867383512544803,
            "rank_pca": 543,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.20784609690826467,
            "spread_pct": 0.4331210191082802,
            "spread_ticks": 18.0,
            "amihud": 0.0018867924528301833,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "9MT",
            "score_pca": 76.34408602150538,
            "rank_pca": 133,
            "adv": 318311.5,
            "trades": 176.0,
            "volatility": 0.6213340337973093,
            "spread_pct": 0.01241723480755252,
            "spread_ticks": 1.4317460317460318,
            "amihud": 8.798246150573749e-08,
            "turnover_ratio": 0.003492428291816107,
            "is_target": false
          },
          {
            "ticker": "QS9",
            "score_pca": 72.75985663082437,
            "rank_pca": 153,
            "adv": 249597.2,
            "trades": 106.0,
            "volatility": 1.1376530556547035,
            "spread_pct": 0.022428884026258217,
            "spread_ticks": 1.226792009400705,
            "amihud": 1.4212023421556703e-07,
            "turnover_ratio": 0.01891010510246435,
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
              "mean": 0.637201451791224,
              "median": 0.42692493828575745,
              "min": 0.0,
              "max": 7.056911505750941,
              "p5": 0.08542159664601061,
              "p95": 1.7248883264024404,
              "count": 558
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 3784436.5805412256,
              "median": 15469.9,
              "min": 0.0,
              "max": 370063498.47999996,
              "p5": 0.0,
              "p95": 13903062.099999972,
              "count": 558
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.09770674263929202,
              "median": 0.026293324227420204,
              "min": 0.0002643593769330142,
              "max": 1.3890746934225195,
              "p5": 0.0036649467828402944,
              "p95": 0.4719388661809131,
              "count": 557
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.009201275231180807,
              "median": 0.0003543713862413109,
              "min": 0.0,
              "max": 3.7143233801331488,
              "p5": 0.0,
              "p95": 0.009921246770236807,
              "count": 551
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 4.7550994331051866e-05,
              "median": 8.854399386092281e-08,
              "min": 0.0,
              "max": 0.004381883679421881,
              "p5": 0.0,
              "p95": 4.918433781221018e-05,
              "count": 548
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 497.9641577060932,
              "median": 7.0,
              "min": 0.0,
              "max": 15205.0,
              "p5": 0.0,
              "p95": 2657.5499999999984,
              "count": 558
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.35370688866987854,
              "median": 0.2949758235794194,
              "min": 0.0,
              "max": 0.7887267034818698,
              "p5": 0.06788056570669049,
              "p95": 0.741159299503766,
              "count": 8
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 2889054.25,
              "median": 11167.5,
              "min": 0.0,
              "max": 21622720.0,
              "p5": 0.0,
              "p95": 14416598.699999988,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.15369218530505652,
              "median": 0.028648316152596928,
              "min": 0.0012744270595871114,
              "max": 0.6666666666666666,
              "p5": 0.003649104978496672,
              "p95": 0.5849256900212313,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.003982036430616477,
              "median": 0.00014056938531481242,
              "min": 0.0,
              "max": 0.015623842911434776,
              "p5": 0.0,
              "p95": 0.014659670882784543,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 0.00023633705841360136,
              "median": 1.8902979625807206e-07,
              "min": 0.0,
              "max": 0.0018867924528301833,
              "p5": 1.371767980752788e-10,
              "p95": 0.0012275213950114342,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 638.625,
              "median": 6.0,
              "min": 0.0,
              "max": 4663.0,
              "p5": 0.0,
              "p95": 3145.0499999999975,
              "count": 8
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 203380.9625,
              "median": 11167.5,
              "min": 0.0,
              "max": 1033802.0,
              "p5": 0.0,
              "p95": 783380.3249999996,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 77.625,
              "median": 6.0,
              "min": 0.0,
              "max": 326.0,
              "p5": 0.0,
              "p95": 273.49999999999994,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.45928814820709263,
              "median": 0.36240041118345323,
              "min": 0.0,
              "max": 1.1376530556547035,
              "p5": 0.06788056570669049,
              "p95": 1.0155288323942115,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.15471290031271714,
              "median": 0.02715977230925669,
              "min": 0.008059221113614427,
              "max": 0.6666666666666666,
              "p5": 0.00958452590649276,
              "p95": 0.5849256900212313,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 3.835057747313365,
              "median": 1.4158730158730157,
              "min": 1.0,
              "max": 18.0,
              "p5": 1.0793772032902467,
              "p95": 13.099999999999993,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 0.0002363592727775635,
              "median": 2.340919882082665e-07,
              "min": 0.0,
              "max": 0.0018867924528301833,
              "p5": 7.308227719698489e-09,
              "p95": 0.0012275213950114342,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.004796182320074558,
              "median": 0.00014056938531481242,
              "min": 0.0,
              "max": 0.01891010510246435,
              "p5": 0.0,
              "p95": 0.017759913335603998,
              "count": 8
            }
          },
          "returns": {
            "window_days": 21,
            "n_obs": 21,
            "stock": -0.12,
            "market": -0.044064706019734334,
            "sector": -0.0763112545820871,
            "peers": -0.06069065822574671,
            "vs_market": -0.07593529398026566,
            "vs_sector": -0.0436887454179129,
            "vs_peers": -0.05930934177425329
          }
        }
      }
    },
    "period_insights": {
      "1d": {
        "liquidity": "Current tradability looks solid, but this is only a snapshot and immediate buy-side depth is lighter, which can make access feel less even through the day.",
        "market_comparison": "The stock outperformed peers on the day, up 2.3% compared with 0.0%, which matters because stronger price action can help keep attention on the name."
      },
      "1w": {
        "liquidity": "1W score 71.0 vs peer median 53.6 (+17.4 pts).",
        "market_comparison": "Return -4.3% vs peers -7.1%."
      },
      "2w": {
        "liquidity": "Two-week tradability still looks healthy for the company’s size, though the recent slowdown means conditions are less steady than the headline level implies.",
        "market_comparison": "The stock is down 13.7% over two weeks compared with an 8.1% drop for peers, which matters because weaker relative performance can make liquidity feel thinner."
      },
      "30d": {
        "liquidity": "Monthly tradability is strong for the company’s size, with a liquidity score of 74.6 compared with a peer median of 48.0, so the name remains accessible in a peer context.",
        "market_comparison": "Return -12.0% vs peers -6.1%."
      }
    }
  },
  "q02": {
    "driver_model": {
      "valid": true,
      "model_method": "simple_markov_return_model",
      "estimation_window_days": 29,
      "reporting_window_days": 29,
      "available_history_days": 29,
      "n_regimes": 2,
      "current_regime": 0,
      "current_regime_label": "High Volatility",
      "current_regime_probability": 1.0,
      "current_driver_mix": {
        "market_share": {
          "median": 0.2418578017062258,
          "low": 0.2418578017062258,
          "high": 0.2418578017062258,
          "value_pct": 24.2,
          "range_collapsed": true,
          "display_value": "24.2%",
          "display_range": null,
          "display_text": "24.2%",
          "uncertainty_note": "Point estimate only; current-state history is limited to 29 trading days.",
          "plain_english": "Market explains about 24.2% of price moves in the current state. This is a point estimate from 29 trading days."
        },
        "sector_share": {
          "median": 0.10479705418490258,
          "low": 0.10479705418490258,
          "high": 0.10479705418490258,
          "value_pct": 10.5,
          "range_collapsed": true,
          "display_value": "10.5%",
          "display_range": null,
          "display_text": "10.5%",
          "uncertainty_note": "Point estimate only; current-state history is limited to 29 trading days.",
          "plain_english": "Sector explains about 10.5% of price moves in the current state. This is a point estimate from 29 trading days."
        },
        "company_share": {
          "median": 0.6533451441088716,
          "low": 0.6533451441088716,
          "high": 0.6533451441088716,
          "value_pct": 65.3,
          "range_collapsed": true,
          "display_value": "65.3%",
          "display_range": null,
          "display_text": "65.3%",
          "uncertainty_note": "Point estimate only; current-state history is limited to 29 trading days.",
          "plain_english": "Company-specific explains about 65.3% of price moves in the current state. This is a point estimate from 29 trading days."
        },
        "basis": "current_state"
      },
      "reporting_window_driver_mix": {
        "market_share": {
          "median": 0.2512874106241509,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "25.1%",
          "display_range": null,
          "display_text": "25.1%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 29 trading days.",
          "kind": "share_pct",
          "value_pct": 25.1,
          "plain_english": "Market explains about 25.1% of price moves in the current state."
        },
        "sector_share": {
          "median": 0.11097783553524268,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "11.1%",
          "display_range": null,
          "display_text": "11.1%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 29 trading days.",
          "kind": "share_pct",
          "value_pct": 11.1,
          "plain_english": "Sector explains about 11.1% of price moves in the current state."
        },
        "company_share": {
          "median": 0.6377347538406065,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "63.8%",
          "display_range": null,
          "display_text": "63.8%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 29 trading days.",
          "kind": "share_pct",
          "value_pct": 63.8,
          "plain_english": "Company-specific explains about 63.8% of price moves in the current state."
        },
        "basis": "reporting_window"
      },
      "current_sensitivities": {
        "beta_market": {
          "median": 1.2023242741150038,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "1.20",
          "display_range": null,
          "display_text": "1.20",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 29 trading days.",
          "kind": "beta",
          "strength_label": "Moderate",
          "plain_english": "Moderate market link: a 1% market move has lined up with about a 1.20% stock move in the same direction in this state.",
          "value_num": 1.2
        },
        "beta_stock_lag": {
          "median": -0.07208232516050307,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "-0.07",
          "display_range": null,
          "display_text": "-0.07",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 29 trading days.",
          "kind": "lag_beta",
          "value_num": -0.07
        },
        "beta_sector": {
          "median": 0.21078731255456962,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "0.21",
          "display_range": null,
          "display_text": "0.21",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 29 trading days.",
          "kind": "beta",
          "strength_label": "Weak",
          "plain_english": "Weak sector link: a 1% sector move has lined up with about a 0.21% stock move in the same direction in this state.",
          "value_num": 0.21
        },
        "beta_market_lag": {
          "median": 0.06332377337776876,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "0.06",
          "display_range": null,
          "display_text": "0.06",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 29 trading days.",
          "kind": "lag_beta",
          "value_num": 0.06
        },
        "beta_sector_lag": {
          "median": 0.33823267504699284,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "0.34",
          "display_range": null,
          "display_text": "0.34",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 29 trading days.",
          "kind": "lag_beta",
          "value_num": 0.34
        },
        "posterior_source": null,
        "intervals_collapsed": false,
        "confidence_label": "High, limited history",
        "confidence_note": "Based on 29 trading days relative to the 252-day target."
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
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_id": 0,
          "regime_label": "High Volatility",
          "dominant_share": {
            "median": 0.728833142929896,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "72.9%",
            "display_range": null,
            "display_text": "72.9%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
            "kind": "share_pct",
            "value_pct": 72.9,
            "plain_english": "Company-specific explains about 72.9% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.20745049622286799,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "20.7%",
              "display_range": null,
              "display_text": "20.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
              "kind": "share_pct",
              "value_pct": 20.7,
              "plain_english": "Market explains about 20.7% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.06371636084723604,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "6.4%",
              "display_range": null,
              "display_text": "6.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
              "kind": "share_pct",
              "value_pct": 6.4,
              "plain_english": "Sector explains about 6.4% of price moves in the current state."
            },
            "company_share": {
              "median": 0.728833142929896,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "72.9%",
              "display_range": null,
              "display_text": "72.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
              "kind": "share_pct",
              "value_pct": 72.9,
              "plain_english": "Company-specific explains about 72.9% of price moves in the current state."
            }
          },
          "summary": "Jan: Still clearly company-driven, though based on only 5 trading days."
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
          "regime_id": 0,
          "regime_label": "High Volatility",
          "dominant_share": {
            "median": 0.6862644582007311,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "68.6%",
            "display_range": null,
            "display_text": "68.6%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
            "kind": "share_pct",
            "value_pct": 68.6,
            "plain_english": "Company-specific explains about 68.6% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.22030082029398396,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "22.0%",
              "display_range": null,
              "display_text": "22.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
              "kind": "share_pct",
              "value_pct": 22.0,
              "plain_english": "Market explains about 22.0% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.09343472150528484,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "9.3%",
              "display_range": null,
              "display_text": "9.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
              "kind": "share_pct",
              "value_pct": 9.3,
              "plain_english": "Sector explains about 9.3% of price moves in the current state."
            },
            "company_share": {
              "median": 0.6862644582007311,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "68.6%",
              "display_range": null,
              "display_text": "68.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
              "kind": "share_pct",
              "value_pct": 68.6,
              "plain_english": "Company-specific explains about 68.6% of price moves in the current state."
            }
          },
          "summary": "Feb: Still clearly company-driven."
        },
        {
          "month_key": "2026-03",
          "month_label": "March 2026",
          "month_short_label": "Mar",
          "period_label": "2026-03-02 to 2026-03-09",
          "n_obs": 6,
          "partial_month": false,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_id": 0,
          "regime_label": "High Volatility",
          "dominant_share": {
            "median": 0.44950581542146933,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "45.0%",
            "display_range": null,
            "display_text": "45.0%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 6 trading days.",
            "kind": "share_pct",
            "value_pct": 45.0,
            "plain_english": "Company-specific explains about 45.0% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.36072152033201216,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "36.1%",
              "display_range": null,
              "display_text": "36.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 6 trading days.",
              "kind": "share_pct",
              "value_pct": 36.1,
              "plain_english": "Market explains about 36.1% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.18977266424651854,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "19.0%",
              "display_range": null,
              "display_text": "19.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 6 trading days.",
              "kind": "share_pct",
              "value_pct": 19.0,
              "plain_english": "Sector explains about 19.0% of price moves in the current state."
            },
            "company_share": {
              "median": 0.44950581542146933,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "45.0%",
              "display_range": null,
              "display_text": "45.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 6 trading days.",
              "kind": "share_pct",
              "value_pct": 45.0,
              "plain_english": "Company-specific explains about 45.0% of price moves in the current state."
            }
          },
          "summary": "Mar: More mixed, though company-driven still has the largest share, though based on only 6 trading days."
        }
      ],
      "regimes": [
        {
          "id": 0,
          "label": "High Volatility",
          "pct_time": 0.9310344827586209,
          "dominant_driver": "company",
          "dominant_driver_probability": 0.6533451441088716,
          "expected_duration_days": 9.206550820910467,
          "current_probability": 1.0,
          "n_days_effective": 27.000000000000007,
          "shares": {
            "market": {
              "median": 0.2418578017062258,
              "low": 0.2418578017062258,
              "high": 0.2418578017062258,
              "value_pct": 24.2,
              "range_collapsed": true,
              "display_value": "24.2%",
              "display_range": null,
              "display_text": "24.2%",
              "uncertainty_note": "Point estimate only; current-state history is limited to 29 trading days.",
              "plain_english": "Market explains about 24.2% of price moves in the current state. This is a point estimate from 29 trading days."
            },
            "sector": {
              "median": 0.10479705418490258,
              "low": 0.10479705418490258,
              "high": 0.10479705418490258,
              "value_pct": 10.5,
              "range_collapsed": true,
              "display_value": "10.5%",
              "display_range": null,
              "display_text": "10.5%",
              "uncertainty_note": "Point estimate only; current-state history is limited to 29 trading days.",
              "plain_english": "Sector explains about 10.5% of price moves in the current state. This is a point estimate from 29 trading days."
            },
            "company": {
              "median": 0.6533451441088716,
              "low": 0.6533451441088716,
              "high": 0.6533451441088716,
              "value_pct": 65.3,
              "range_collapsed": true,
              "display_value": "65.3%",
              "display_range": null,
              "display_text": "65.3%",
              "uncertainty_note": "Point estimate only; current-state history is limited to 29 trading days.",
              "plain_english": "Company-specific explains about 65.3% of price moves in the current state. This is a point estimate from 29 trading days."
            }
          },
          "sensitivities": {
            "beta_market": {
              "median": 1.2023242741150038,
              "low": 1.2023242741150038,
              "high": 1.2023242741150038,
              "value_num": 1.2,
              "range_collapsed": true,
              "display_value": "1.20",
              "display_range": null,
              "display_text": "1.20",
              "uncertainty_note": "Point estimate only; current-state history is limited to 29 trading days.",
              "strength_label": "Moderate",
              "plain_english": "Moderate market link: a 1% market move has lined up with about a 1.20% stock move in the same direction in this state. Shown as a point estimate because only 29 trading days are available."
            },
            "beta_sector": {
              "median": 0.21078731255456962,
              "low": 0.21078731255456962,
              "high": 0.21078731255456962,
              "value_num": 0.21,
              "range_collapsed": true,
              "display_value": "0.21",
              "display_range": null,
              "display_text": "0.21",
              "uncertainty_note": "Point estimate only; current-state history is limited to 29 trading days.",
              "strength_label": "Weak",
              "plain_english": "Weak sector link: a 1% sector move has lined up with about a 0.21% stock move in the same direction in this state. Shown as a point estimate because only 29 trading days are available."
            },
            "beta_market_lag": {
              "median": 0.06332377337776876,
              "low": 0.06332377337776876,
              "high": 0.06332377337776876
            },
            "beta_sector_lag": {
              "median": 0.33823267504699284,
              "low": 0.33823267504699284,
              "high": 0.33823267504699284
            },
            "beta_stock_lag": null
          },
          "volatility": {
            "median": 0.02952716360403115,
            "low": 0.02952716360403115,
            "high": 0.02952716360403115
          },
          "volatility_label": "High Volatility",
          "lead_signal": {
            "lead_factor": "none",
            "lead_confidence": null,
            "lead_horizon_days": 1
          },
          "dominant_driver_label": "Company-specific",
          "current_probability_display": null
        },
        {
          "id": 1,
          "label": "Low Volatility",
          "pct_time": 0.0689655172413793,
          "dominant_driver": "market",
          "dominant_driver_probability": 0.6365173260037387,
          "expected_duration_days": 1.3102691304383978,
          "current_probability": 0.0,
          "n_days_effective": 1.9999999999999996,
          "shares": {
            "market": {
              "median": 0.6365173260037387,
              "low": 0.6365173260037387,
              "high": 0.6365173260037387,
              "value_pct": 63.7,
              "range_collapsed": true,
              "display_value": "63.7%",
              "display_range": null,
              "display_text": "63.7%",
              "uncertainty_note": "Point estimate only; current-state history is limited to 29 trading days.",
              "plain_english": "Market explains about 63.7% of price moves in the current state. This is a point estimate from 29 trading days."
            },
            "sector": {
              "median": 0.36348267399626133,
              "low": 0.36348267399626133,
              "high": 0.36348267399626133,
              "value_pct": 36.3,
              "range_collapsed": true,
              "display_value": "36.3%",
              "display_range": null,
              "display_text": "36.3%",
              "uncertainty_note": "Point estimate only; current-state history is limited to 29 trading days.",
              "plain_english": "Sector explains about 36.3% of price moves in the current state. This is a point estimate from 29 trading days."
            },
            "company": {
              "median": 0.0,
              "low": 0.0,
              "high": 0.0,
              "value_pct": 0.0,
              "range_collapsed": true,
              "display_value": "0.0%",
              "display_range": null,
              "display_text": "0.0%",
              "uncertainty_note": "Point estimate only; current-state history is limited to 29 trading days.",
              "plain_english": "Company-specific explains about 0.0% of price moves in the current state. This is a point estimate from 29 trading days."
            }
          },
          "sensitivities": {
            "beta_market": {
              "median": -0.1963463433583605,
              "low": -0.1963463433583605,
              "high": -0.1963463433583605,
              "value_num": -0.2,
              "range_collapsed": true,
              "display_value": "-0.20",
              "display_range": null,
              "display_text": "-0.20",
              "uncertainty_note": "Point estimate only; current-state history is limited to 29 trading days.",
              "strength_label": "Weak",
              "plain_english": "Weak market link: a 1% market move has lined up with about a 0.20% stock move in the opposite direction in this state. Shown as a point estimate because only 29 trading days are available."
            },
            "beta_sector": {
              "median": 0.5224518905255764,
              "low": 0.5224518905255764,
              "high": 0.5224518905255764,
              "value_num": 0.52,
              "range_collapsed": true,
              "display_value": "0.52",
              "display_range": null,
              "display_text": "0.52",
              "uncertainty_note": "Point estimate only; current-state history is limited to 29 trading days.",
              "strength_label": "Modest",
              "plain_english": "Modest sector link: a 1% sector move has lined up with about a 0.52% stock move in the same direction in this state. Shown as a point estimate because only 29 trading days are available."
            },
            "beta_market_lag": {
              "median": -0.8157674275331763,
              "low": -0.8157674275331763,
              "high": -0.8157674275331763
            },
            "beta_sector_lag": {
              "median": -0.3614270625510734,
              "low": -0.3614270625510734,
              "high": -0.3614270625510734
            },
            "beta_stock_lag": null
          },
          "volatility": {
            "median": 2.3771643168712227e-17,
            "low": 2.3771643168712227e-17,
            "high": 2.3771643168712227e-17
          },
          "volatility_label": "Low Volatility",
          "lead_signal": {
            "lead_factor": "market",
            "lead_confidence": 0.8359505384491904,
            "lead_horizon_days": 1
          },
          "dominant_driver_label": "Market",
          "current_probability_display": 0.0
        }
      ],
      "transitions": {
        "mean": [
          [
            0.8913816890329068,
            0.10861831096709279
          ],
          [
            0.7632019840575914,
            0.23679801594240882
          ]
        ],
        "low": [
          [
            0.8210121113334605,
            0.039516730378396425
          ],
          [
            0.49130089875946903,
            0.03584708176158796
          ]
        ],
        "high": [
          [
            0.9604832696216037,
            0.1789878886665395
          ],
          [
            0.9641529182384121,
            0.5086991012405311
          ]
        ],
        "counts": [
          [
            24.0,
            2.0
          ],
          [
            2.0,
            0.0
          ]
        ]
      },
      "methodology": {
        "estimation_window_days": 29,
        "reporting_window_days": 29,
        "regime_inference": "statsmodels_markov_regression",
        "distribution": "gaussian",
        "history_limited": true,
        "selection_metric": "bic_with_small_state_penalty",
        "selection_reason": "bic",
        "candidate_regime_counts": [
          2
        ],
        "lead_horizon_days": 1,
        "lead_definition": "compare lagged market, sector, and stock-persistence contributions",
        "state_label_definition": "volatility bucket only",
        "market_regime_definition": "volatility bucket within the fitted Markov states",
        "current_driver_mix_basis": "active_regime",
        "reporting_window_driver_mix_basis": "probability_weighted_recent_average",
        "sector_proxy_equals_market": false
      },
      "client_read": {
        "market_link_display": "1.20",
        "sector_link_display": "0.21",
        "market_link_explainer": "Moderate market link. A 1% market move has lined up with about a 1.20% stock move in the same direction in this state. This is a point estimate from 29 trading days.",
        "sector_link_explainer": "Weak sector link. A 1% sector move has lined up with about a 0.21% stock move in the same direction in this state. This is a point estimate from 29 trading days.",
        "stock_persistence_display": "-0.07",
        "point_estimate_note": "Point estimate only because the current state has 29 trading days.",
        "history_limited_note": "Read is based on 29 trading days versus the 252-day target."
      },
      "current_summary": {
        "regime_label": "High Volatility",
        "dominant_driver": "company",
        "dominant_driver_label": "Company-specific",
        "driver_share_pct": 65.3,
        "driver_share_display": "65.3%",
        "confidence_label": "High, limited history",
        "confidence_pct": 100.0,
        "display_confidence_pct": null,
        "confidence_note": "Based on 29 trading days relative to the 252-day target.",
        "history_days": 29,
        "history_limited": true,
        "volatility_label": "High Volatility",
        "lead_signal_text": "No stable lead signal.",
        "state_term": "state",
        "stay_probability": 0.8913816890329068,
        "effective_days": 27.0,
        "persistence_note": "This state looks more persistent, with a typical run length of about 9.2 days.",
        "expected_duration_days": 9.2
      },
      "display_notes": {
        "current_driver_mix": "Current state shares come from the active regime, not the full reporting window average.",
        "collapsed_interval": "When only one number is shown, the run produced a point estimate instead of a wider uncertainty range."
      }
    },
    "regime_switching": {
      "valid": true,
      "regime_method": "simple_markov_return_model",
      "n_regimes": 2,
      "regimes": [
        {
          "id": 0,
          "label": "High Volatility",
          "pct_time": 0.9310344827586209,
          "dominant_driver": "company",
          "dominant_driver_probability": 0.6533451441088716,
          "expected_duration_days": 9.206550820910467,
          "current_probability": 1.0,
          "n_days_effective": 27.000000000000007,
          "shares": {
            "market": {
              "median": 0.2418578017062258,
              "low": 0.2418578017062258,
              "high": 0.2418578017062258
            },
            "sector": {
              "median": 0.10479705418490258,
              "low": 0.10479705418490258,
              "high": 0.10479705418490258
            },
            "company": {
              "median": 0.6533451441088716,
              "low": 0.6533451441088716,
              "high": 0.6533451441088716
            }
          },
          "sensitivities": {
            "beta_market": {
              "median": 1.2023242741150038,
              "low": 1.2023242741150038,
              "high": 1.2023242741150038
            },
            "beta_sector": {
              "median": 0.21078731255456962,
              "low": 0.21078731255456962,
              "high": 0.21078731255456962
            },
            "beta_market_lag": {
              "median": 0.06332377337776876,
              "low": 0.06332377337776876,
              "high": 0.06332377337776876
            },
            "beta_sector_lag": {
              "median": 0.33823267504699284,
              "low": 0.33823267504699284,
              "high": 0.33823267504699284
            }
          },
          "volatility": {
            "median": 0.02952716360403115,
            "low": 0.02952716360403115,
            "high": 0.02952716360403115
          },
          "volatility_label": "High Volatility",
          "lead_signal": {
            "lead_factor": "none",
            "lead_confidence": null,
            "lead_horizon_days": 1
          }
        },
        {
          "id": 1,
          "label": "Low Volatility",
          "pct_time": 0.0689655172413793,
          "dominant_driver": "market",
          "dominant_driver_probability": 0.6365173260037387,
          "expected_duration_days": 1.3102691304383978,
          "current_probability": 0.0,
          "n_days_effective": 1.9999999999999996,
          "shares": {
            "market": {
              "median": 0.6365173260037387,
              "low": 0.6365173260037387,
              "high": 0.6365173260037387
            },
            "sector": {
              "median": 0.36348267399626133,
              "low": 0.36348267399626133,
              "high": 0.36348267399626133
            },
            "company": {
              "median": 0.0,
              "low": 0.0,
              "high": 0.0
            }
          },
          "sensitivities": {
            "beta_market": {
              "median": -0.1963463433583605,
              "low": -0.1963463433583605,
              "high": -0.1963463433583605
            },
            "beta_sector": {
              "median": 0.5224518905255764,
              "low": 0.5224518905255764,
              "high": 0.5224518905255764
            },
            "beta_market_lag": {
              "median": -0.8157674275331763,
              "low": -0.8157674275331763,
              "high": -0.8157674275331763
            },
            "beta_sector_lag": {
              "median": -0.3614270625510734,
              "low": -0.3614270625510734,
              "high": -0.3614270625510734
            }
          },
          "volatility": {
            "median": 2.3771643168712227e-17,
            "low": 2.3771643168712227e-17,
            "high": 2.3771643168712227e-17
          },
          "volatility_label": "Low Volatility",
          "lead_signal": {
            "lead_factor": "market",
            "lead_confidence": 0.8359505384491904,
            "lead_horizon_days": 1
          }
        }
      ],
      "transitions": [
        [
          0.8913816890329068,
          0.10861831096709279
        ],
        [
          0.7632019840575914,
          0.23679801594240882
        ]
      ],
      "transition_intervals": {
        "mean": [
          [
            0.8913816890329068,
            0.10861831096709279
          ],
          [
            0.7632019840575914,
            0.23679801594240882
          ]
        ],
        "low": [
          [
            0.8210121113334605,
            0.039516730378396425
          ],
          [
            0.49130089875946903,
            0.03584708176158796
          ]
        ],
        "high": [
          [
            0.9604832696216037,
            0.1789878886665395
          ],
          [
            0.9641529182384121,
            0.5086991012405311
          ]
        ],
        "counts": [
          [
            24.0,
            2.0
          ],
          [
            2.0,
            0.0
          ]
        ]
      },
      "current_regime": 0,
      "current_regime_label": "High Volatility",
      "current_regime_probability": 1.0
    }
  },
  "theme": {
    "badges": {
      "liq_section": {
        "text": "Liquidity score: 74.6 — Strong",
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
        "bg": "bg-amber-500/20",
        "textColor": "text-amber-400"
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
    "liq_subtitle": "Monthly liquidity remains strong for size, but recent activity has dropped and near-term access looks weaker.",
    "market_comparison_title": "How You Compare to the Market",
    "market_comparison_subtitle": "Context relative to market, sector, and peer medians.",
    "perf_title": "Stock Performance",
    "perf_subtitle": "Recent performance has lagged, with the stock down 12.0% over 1M compared with peers down 6.1% and the market down 4.4%.",
    "perf_insight": "Performance has been weak, with the stock down 12.0% over 1M compared with peers down 6.1% and the market down 4.4%. The move looks mainly company-driven, with company-specific factors at 65.3%, which means stock news is carrying more weight than the broader tape.",
    "drivers_title": "What Moves Your Stock Price?",
    "drivers_subtitle": "Price action is being driven mainly by company-specific factors, with stock-specific drivers at 65.3%.",
    "drivers_strip": [
      {
        "title": "Current Driver",
        "text": "Recent moves are mainly company-driven, accounting for about 65.3% of current price changes. Other influences are market 24.2%, and sector 10.5%."
      },
      {
        "title": "Driver Mix",
        "text": "Current mix is market 24.2%, sector 10.5%, and company-specific 65.3%."
      },
      {
        "title": "Monthly Trend",
        "text": "The driver mix has been consistently company-driven across Jan to Mar."
      }
    ],
    "drivers_pie_title": "Current Driver Mix",
    "drivers_pie_note": "Current split is market 24.2%, sector 10.5%, and company-specific 65.3%. Recent reporting-window mix was market 25.1%, sector 11.1%, company 63.8%.",
    "lead_lag_title": "",
    "lead_lag_note": "",
    "rolling_title": "Monthly Driver Shift",
    "rolling_latest_label": "Latest: {period}",
    "rolling_note": "Each bar shows the monthly split between market-, sector-, and company-driven moves.",
    "drivers_bottom_line": "The stock is moving mainly on its own story, with company-specific drivers at 65.3%. That matters because company news is likely to shape trading more than broader market moves while recent volume is thinner.",
    "drivers_wtd_title": "Key Reads",
    "drivers_wtd_list": [
      "Main driver now: price action is primarily company-driven, with stock-specific factors at 65.3%.",
      "Monthly change: the name has stayed company-driven from Jan through Feb, but March looks more mixed so far."
    ],
    "regime_title": "Market State",
    "regime_subtitle": "Snapshot unavailable.",
    "regime_badge_text": "High Volatility",
    "regime_pie_title": "State Mix",
    "transition_title": "State Transitions",
    "transition_cols": [
      "From \\",
      "High Volatility",
      "Low Volatility"
    ],
    "transition_note_template": "Rows sum to 100%. Each row shows how states tend to transition across the observed sample.",
    "market_state_strip": [],
    "exec_check_title": "Trading Costs & Market Depth",
    "exec_check_subtitle": "Combines the final continuous-session displayed book before close, trade-size stress tests based on available history from Jan 22, 2026 to Mar 10, 2026 (32 trading days • 9,035 trades), large sell-side orders observed today, and intraday spread/depth during the continuous trading session.",
    "order_book_title": "Order Book Depth (Available Liquidity)",
    "order_book_note": "Depth shown is based on top 10 bid and top 10 ask levels.",
    "peer_capacity_title": "Peer Capacity Context",
    "peer_capacity_note": "Immediate buy-side depth is lighter than the monthly baseline, so day-to-day access may feel weaker than the 1M score",
    "impact_summary_title": "Estimated Price Impact (Sell Orders)",
    "impact_summary_subtitle": "Approximate price impact (%) for sell orders.",
    "exec_check_insight": "Immediate buy-side support looks lighter, with top-10 bid depth at 0.57x ask depth even as the spread remains 1 tick. That matters because the monthly liquidity profile is not fully showing up in the displayed bid.",
    "trader_composition_title": "Who's Trading Your Stock?",
    "trader_composition_subtitle": "Shows whether trading is mostly retail-like, institution-like, mixed, or unclassified.",
    "trader_retail_threshold": "Retail-like flow",
    "trader_mixed_threshold": "Mixed flow",
    "trader_instit_threshold": "Institution-like flow",
    "peer_trader_title": "Peer Comparison: Trader Mix",
    "peer_trader_subtitle": "How the trader mix compares with peers.",
    "price_moving_title": "Which Trades Move the Price?",
    "price_moving_subtitle": "Price-moving trades are 14.6% of total trades.",
    "intraday_title": "When Does Trading Happen?",
    "intraday_subtitle": "History is limited.",
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
    "intraday_insight": "Trade-size history is limited, covering Jan 22, 2026 to Mar 10, 2026 across 32 trading days and 9,035 trades. That means intraday read-through may be treated as a recent snapshot.",
    "short_title": "Short Selling & Lending",
    "short_subtitle": "Snapshot unavailable.",
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
    "exec_subtitle": "Liquidity is strong relative to peers, but recent daily trading is thinner.",
    "exec_takeaways_title": "Key Takeaways:",
    "metric_liquidity_score": "Liquidity Score",
    "metric_spread": "Trading Cost (Spread)",
    "metric_adv": "Average Traded Volume",
    "metric_drivers": "What Drives Price Changes",
    "metric_period_note": "The metrics shown here are based on the last 1 month of trading data.",
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
        "value": "74.6/100",
        "sub": "Peer median 48.0 (+26.5 pts)",
        "interp": {
          "text": "Strong",
          "cls": "interpretation-good",
          "icon": "◆"
        }
      },
      {
        "title": "Volume vs Peers",
        "value": "S$430.6K",
        "sub": "Peer median S$11.2K",
        "interp": {
          "text": "Strong",
          "cls": "interpretation-good",
          "icon": "◆"
        }
      },
      {
        "title": "Spread",
        "value": "2.54%",
        "sub": "1.18 ticks; peers 2.72%",
        "interp": {
          "text": "Tighter",
          "cls": "interpretation-good",
          "icon": "◆"
        }
      }
    ],
    "liq_insight": "Liquidity still looks strong for the stock’s size, with a 1M score of 74.6 compared with a peer median of 48.0. Recent activity has dropped, with 1W average volume down 59.6% from the 1M average, so day-to-day access is weaker than the monthly standing implies.",
    "perf_badge": "Context",
    "exec_check_tiles": [
      {
        "title": "Mid Price",
        "value": "0.223",
        "note": "final continuous-session displayed book before close",
        "color": "text-white"
      },
      {
        "title": "Spread",
        "value": "2.25%",
        "note": "1.00 ticks",
        "color": "text-slate-300"
      },
      {
        "title": "Depth",
        "value": "0.57x",
        "note": "Bid depth / ask depth on displayed top-10 levels",
        "color": "text-slate-300"
      }
    ],
    "impact_summary_cards": [
      {
        "title": "~S$100K sell",
        "text": "Estimated impact ~-3.32% with 100.0% fill.",
        "cls": "ok"
      },
      {
        "title": "S$1.0M sell",
        "text": "Estimated impact ~-6.88% with 30.4% fill.",
        "cls": "warn"
      },
      {
        "title": "S$2.5M sell",
        "text": "Estimated impact ~-6.88% with 12.2% fill.",
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
        "value": "75",
        "suffix": "/100",
        "bar_pct": 75,
        "color_value": "text-emerald-400",
        "color_bar": "bg-emerald-500",
        "subtext": "Rank 143/558",
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
        "value": "2.54",
        "suffix": "%",
        "bar_pct": 25,
        "color_value": "text-amber-400",
        "color_bar": "bg-amber-500",
        "subtext": "2.54% • 1.18 ticks vs peers 2.72%",
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
        "value": "S$430.6K",
        "suffix": "",
        "bar_pct": 60,
        "color_value": "text-emerald-400",
        "color_bar": "bg-emerald-500",
        "subtext": "Peer median S$11.2K",
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
        "value": "65.3",
        "suffix": "company-specific",
        "bar_pct": 65,
        "color_value": "text-amber-400",
        "color_bar": "bg-amber-500",
        "subtext": "Market 24.2% • Sector 10.5%",
        "interpretation": {
          "text": "Company",
          "cls": "interpretation-neutral",
          "icon": "◆"
        }
      }
    ],
    "exec_takeaways": [
      "Structural liquidity remains strong for size, with a 1M score of 74.6 compared with a peer median of 48.0. That supports good underlying access relative to peers.",
      "Recent trading has pulled back sharply, with 1W average volume down 59.6% from the 1M",
      "The backdrop is mixed, with top-10 bid depth at 0.57x ask depth and company-specific drivers at 65.3%. That means buy-side support looks lighter while stock news is likely to matter more than the market."
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
      "overall": "1M liquidity is strong: score 74.6 vs peer median 48.0 (+26.5",
      "strengths": [
        "1M score 74.6 vs peer median 48.0 (+26.5 pts)."
      ],
      "concerns": [
        "1W average volume down -59.6% from 1M."
      ],
      "peer_context": "Primary-period score gap vs peers: +26.5 pts."
    },
    "market_comparison": {
      "returns": {
        "insight": "1M return is -12.0%, worse than market, sector, and peers, which suggests weaker price performance than comparable names.",
        "vs_market": "Worse than market: -12.0% vs market -4.4%.",
        "vs_sector": "Worse than sector: -12.0% vs sector -7.6%.",
        "vs_peers": "Worse than peers: -12.0% vs peers -6.1%."
      },
      "adv": {
        "insight": "ADV is S$430.6K, better than market, sector, and peers, which supports stronger day-to-day trading size than comparable names.",
        "vs_market": "Better than market: S$430.6K vs market S$15.5K.",
        "vs_sector": "Better than sector: S$430.6K vs sector S$11.2K.",
        "vs_peers": "Better than peers: S$430.6K vs peers S$11.2K."
      },
      "spread": {
        "insight": "Spread is 2.54%, better than sector, which keeps trading costs more competitive than comparable names.",
        "vs_market": "In line with market: 2.54% vs market 2.63%.",
        "vs_sector": "Better than sector: 2.54% vs secto%.",
        "vs_peers": "In line with peers: 2.54% vs peers 2.72%."
      },
      "turnover_ratio": {
        "insight": "Turnover ratio is 0.30%, better than market, sector, and peers, which shows a more active free-float turnover profile than comparable names.",
        "vs_market": "Better than market: 0.30% vs market 0.04%.",
        "vs_sector": "Better than sector: 0.30% vs sector 0.01%.",
        "vs_peers": "Better than peers: 0.30% vs peers 0.01%."
      },
      "volatility": {
        "insight": "Volatility is 65.28%, worse than market, sector, and peers, which suggests day-to-day price swings are heavier than comparable names.",
        "vs_market": "Worse than market: 65.28% vs market 42.69%.",
        "vs_sector": "Worse than sector: 65.28% vs secto%.",
        "vs_peers": "Worse than peers: 65.28% vs peers 36.24%."
      },
      "trades": {
        "insight": "Trades is 107, better than market, sector, and peers, which supports more fully reflective of day-to-day access day-to-day activity than comparable names.",
        "vs_market": "Better than market: 107 vs market 7.",
        "vs_sector": "Better than sector: 107 vs sector 6.",
        "vs_peers": "Better than peers: 107 vs peers 6."
      },
      "amihud": {
        "insight": "Price impact is 5.20e-08, better than market, sector, and peers, which suggests trades move price less than comparable names.",
        "vs_market": "Better than market: 5.20e-08 vs market 8.85e-08.",
        "vs_sector": "Better than sector: 5.20e-08 vs sector 1.89e-07.",
        "vs_peers": "Better than peers: 5.20e-08 vs peers 2.34e-07."
      }
    },
    "performance": {
      "overall": "Recent performance is weak relative to peers and the market, with the stock down 12.0% over 1M compared with peers down 6.1% and the market down 4.4%. Liquidity gives a mixed read: the 1M liquidity score of 74.6 compared with a peer median of 48.0 suggests the name remains accessible for its size, but 1W average volume has dropped 59.6% from the 1M average, so the recent sell-off is happening in thinner trading conditions.",
      "conclusion": "The move looks mainly company-specific rather than broad-market, and liquidity is mixed because structural access is strong but recent trading activity has pulled back."
    },
    "drivers": {
      "overall": "The stock is being driven mainly by company-specific factors, with 65.3% of the current move tied to the company rather than broader forces. That matters because stock news is likely to matter more than market direction in the near term.",
      "beta": "This matters more because recent price performance has been weak, with the stock down 12.0% over 1M compared with peers down 6.1% and the market down 4.4%. That leaves the shares more exposed to their own news flow, while evidence is mixed.",
      "rolling_change": "The pattern still looks company-driven over the past few months, but it is less clean in March than it was in February. That matters because the main driver has not fully changed, yet the current read looks less settled and history is limited."
    },
    "regime": {
      "overall": "The stock is trading in a higher-volatility backdrop, and that matters because price conditions are less steady even though the broader liquidity profile remains strong for its size. Evidence is mixed, with the state looking persistent while recent average volume has dropped 59.6% from the 1M average.",
      "current": "Current market state is High Volatility. It represents about 93.1% of the observed sample. Based on 29 trading days relative to the 252-day target.",
      "transitions": "This state looks relatively settled for now, with a typical run length of about 9.2 days, although history is limited.",
      "trading_implications": "This state looks more persistent, with a typical run length of about 9.2 days."
    },
    "execution": {
      "overall": "The current book looks bid-light. A 1 tick spread points to orderly quoting, but top-10 bid depth at 0.57x of ask depth shows thinner immediate buy-side support, which makes near-term access look less robust than the broader monthly profile.",
      "concern": "Trade-size percentiles use available history from Jan 22, 2026 to Mar 10, 2026 (32 trading days • 9,035 trades), not a full year.",
      "peer_context": "The broader liquidity picture still looks strong for size, with a 1M score of 74.6 compared with a peer median of 48.0, but the current book only partly supports that view because recent average volume is down 59.6% from the 1M average and trade-size history is limited."
    },
    "trader_composition": {
      "overall": "By trade count and value, flow looks mainly institution-like.",
      "retail_heavy": "The flow does not read as retail-heavy. Retail-like trades are 28.8% of count and only 8.0% of value, so smaller-value activity is present but does not dominate overall trading.",
      "institutional_gap": "The read is directionally clear but not fully clean. Ambiguous flow is 17.6% of trade count, which means dependability looks reasonable rather than definitive.",
      "peer_comparison": "The mix appears institution-like, while the peer comparison is available in the report tables. That matters because the relative picture is better judged alongside the wider group."
    },
    "price_moving": {
      "overall": "Price-moving trades account for 14.6% of total trades, so most activity is not shifting price on each print. That matters because the signal from aggressive trading looks present but not dominant. The read is mixed rather than fully clean because ambiguous flow is 17.6% of trade count. That matters because conviction on who is driving price is moderate, not absolute. Positive and negative price-moving trade asymmetry is available in the report tables. The directional read is therefore best treated as mixed.",
      "interpretation": "",
      "asymmetry": ""
    },
    "short_selling": {
      "overall": "Short activity appears low and is not the main issue in current trading. The clearer pressure points are weaker recent average volume and weaker 1M share price performance compared with peers and the market, which matters more for day-to-day access.",
      "level": "Low short interest",
      "correlation": "No clear relationship (correlation undefined)",
      "trend": "Short positioning has dropped sharply, with shorts covering significantly month on month. Evidence is mixed, but that points away from rising short pressure as a separate source of strain in the stock.",
      "peaks": "0 notable peak days identified."
    },
    "intraday": {
      "overall": "Liquidity is concentrated in the continuous session, with 96.7% of activity there compared with 1.2% at the open and 1.5% at the close. That matters because access appears to be available through the day rather than relying on auction windows.",
      "hhi_interpretation": "The concentration score is 0.213, which suggests trading is not heavily concentrated into a narrow part of the session. That supports a steadier intraday profile, although evidence is mixed.",
      "best_times": "The continuous session is the clearest source of liquidity because it captures 96.7% of trading activity. That matters because the open and close contribute only a small share of flow.",
      "peer_ranking": "Peer intraday concentration comparison is available in the report tables. That matters because the relative standing is best read against the broader peer set."
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
        "LVR",
        "NXR",
        "U77",
        "532",
        "KUX",
        "9MT",
        "QS9"
      ],
      "scores": [
        74.55197132616487,
        83.33333333333334,
        53.76344086021505,
        37.096774193548384,
        42.29390681003584,
        3.763440860215054,
        2.867383512544803,
        76.34408602150538,
        72.75985663082437
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
        430575.0,
        1033802.0,
        17935.0,
        3002.0,
        4400.0,
        0.0,
        0.0,
        318311.5,
        249597.2
      ],
      "total": 558
    },
    "market_comparison": {
      "sector_name": "Software - Application",
      "sector_count": 8,
      "market_count": 558,
      "company": {
        "volatility": 0.6528198349730021,
        "adv": 430575.0,
        "spread_pct": 0.025405971712938697,
        "turnover_ratio": 0.0030203005918959685,
        "amihud": 5.1995850315178163e-08,
        "trades": 107.0
      },
      "market": {
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.637201451791224,
          "median": 0.42692493828575745,
          "min": 0.0,
          "max": 7.056911505750941,
          "p5": 0.08542159664601061,
          "p95": 1.7248883264024404,
          "count": 558
        },
        "adv": {
          "direction": "higher_is_better",
          "mean": 3784436.5805412256,
          "median": 15469.9,
          "min": 0.0,
          "max": 370063498.47999996,
          "p5": 0.0,
          "p95": 13903062.099999972,
          "count": 558
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.09770674263929202,
          "median": 0.026293324227420204,
          "min": 0.0002643593769330142,
          "max": 1.3890746934225195,
          "p5": 0.0036649467828402944,
          "p95": 0.4719388661809131,
          "count": 557
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.009201275231180807,
          "median": 0.0003543713862413109,
          "min": 0.0,
          "max": 3.7143233801331488,
          "p5": 0.0,
          "p95": 0.009921246770236807,
          "count": 551
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 4.7550994331051866e-05,
          "median": 8.854399386092281e-08,
          "min": 0.0,
          "max": 0.004381883679421881,
          "p5": 0.0,
          "p95": 4.918433781221018e-05,
          "count": 548
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 497.9641577060932,
          "median": 7.0,
          "min": 0.0,
          "max": 15205.0,
          "p5": 0.0,
          "p95": 2657.5499999999984,
          "count": 558
        }
      },
      "sector": {
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.35370688866987854,
          "median": 0.2949758235794194,
          "min": 0.0,
          "max": 0.7887267034818698,
          "p5": 0.06788056570669049,
          "p95": 0.741159299503766,
          "count": 8
        },
        "adv": {
          "direction": "higher_is_better",
          "mean": 2889054.25,
          "median": 11167.5,
          "min": 0.0,
          "max": 21622720.0,
          "p5": 0.0,
          "p95": 14416598.699999988,
          "count": 8
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.15369218530505652,
          "median": 0.028648316152596928,
          "min": 0.0012744270595871114,
          "max": 0.6666666666666666,
          "p5": 0.003649104978496672,
          "p95": 0.5849256900212313,
          "count": 8
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.003982036430616477,
          "median": 0.00014056938531481242,
          "min": 0.0,
          "max": 0.015623842911434776,
          "p5": 0.0,
          "p95": 0.014659670882784543,
          "count": 8
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 0.00023633705841360136,
          "median": 1.8902979625807206e-07,
          "min": 0.0,
          "max": 0.0018867924528301833,
          "p5": 1.371767980752788e-10,
          "p95": 0.0012275213950114342,
          "count": 8
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 638.625,
          "median": 6.0,
          "min": 0.0,
          "max": 4663.0,
          "p5": 0.0,
          "p95": 3145.0499999999975,
          "count": 8
        }
      },
      "peers": {
        "adv": {
          "direction": "higher_is_better",
          "mean": 203380.9625,
          "median": 11167.5,
          "min": 0.0,
          "max": 1033802.0,
          "p5": 0.0,
          "p95": 783380.3249999996,
          "count": 8
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 77.625,
          "median": 6.0,
          "min": 0.0,
          "max": 326.0,
          "p5": 0.0,
          "p95": 273.49999999999994,
          "count": 8
        },
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.45928814820709263,
          "median": 0.36240041118345323,
          "min": 0.0,
          "max": 1.1376530556547035,
          "p5": 0.06788056570669049,
          "p95": 1.0155288323942115,
          "count": 8
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.15471290031271714,
          "median": 0.02715977230925669,
          "min": 0.008059221113614427,
          "max": 0.6666666666666666,
          "p5": 0.00958452590649276,
          "p95": 0.5849256900212313,
          "count": 8
        },
        "spread_ticks": {
          "direction": "neutral",
          "mean": 3.835057747313365,
          "median": 1.4158730158730157,
          "min": 1.0,
          "max": 18.0,
          "p5": 1.0793772032902467,
          "p95": 13.099999999999993,
          "count": 8
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 0.0002363592727775635,
          "median": 2.340919882082665e-07,
          "min": 0.0,
          "max": 0.0018867924528301833,
          "p5": 7.308227719698489e-09,
          "p95": 0.0012275213950114342,
          "count": 8
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.004796182320074558,
          "median": 0.00014056938531481242,
          "min": 0.0,
          "max": 0.01891010510246435,
          "p5": 0.0,
          "p95": 0.017759913335603998,
          "count": 8
        }
      }
    },
    "returns": [
      {
        "horizon": "1W",
        "stock": -0.0434782608695653,
        "market": -0.03255062740713133,
        "sector": -0.04147966362555733,
        "peers": -0.07107912926959803
      },
      {
        "horizon": "2W",
        "stock": -0.13725490196078438,
        "market": -0.0526172522104863,
        "sector": -0.06295550297099661,
        "peers": -0.08142233952984945
      },
      {
        "horizon": "1M",
        "stock": -0.12,
        "market": -0.044064706019734334,
        "sector": -0.0763112545820871,
        "peers": -0.06069065822574671
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
      "share_market": 0.2418578017062258,
      "share_sector": 0.10479705418490258,
      "share_idio": 0.6533451441088716,
      "beta_market": 1.2023242741150038,
      "beta_sector": 0.21078731255456962,
      "driver_model": {
        "valid": true,
        "model_method": "simple_markov_return_model",
        "estimation_window_days": 29,
        "reporting_window_days": 29,
        "available_history_days": 29,
        "n_regimes": 2,
        "current_regime": 0,
        "current_regime_label": "High Volatility",
        "current_regime_probability": 1.0,
        "current_driver_mix": {
          "market_share": {
            "median": 0.2418578017062258,
            "low": 0.2418578017062258,
            "high": 0.2418578017062258,
            "value_pct": 24.2,
            "range_collapsed": true,
            "display_value": "24.2%",
            "display_range": null,
            "display_text": "24.2%",
            "uncertainty_note": "Point estimate only; current-state history is limited to 29 trading days.",
            "plain_english": "Market explains about 24.2% of price moves in the current state. This is a point estimate from 29 trading days."
          },
          "sector_share": {
            "median": 0.10479705418490258,
            "low": 0.10479705418490258,
            "high": 0.10479705418490258,
            "value_pct": 10.5,
            "range_collapsed": true,
            "display_value": "10.5%",
            "display_range": null,
            "display_text": "10.5%",
            "uncertainty_note": "Point estimate only; current-state history is limited to 29 trading days.",
            "plain_english": "Sector explains about 10.5% of price moves in the current state. This is a point estimate from 29 trading days."
          },
          "company_share": {
            "median": 0.6533451441088716,
            "low": 0.6533451441088716,
            "high": 0.6533451441088716,
            "value_pct": 65.3,
            "range_collapsed": true,
            "display_value": "65.3%",
            "display_range": null,
            "display_text": "65.3%",
            "uncertainty_note": "Point estimate only; current-state history is limited to 29 trading days.",
            "plain_english": "Company-specific explains about 65.3% of price moves in the current state. This is a point estimate from 29 trading days."
          },
          "basis": "current_state"
        },
        "reporting_window_driver_mix": {
          "market_share": {
            "median": 0.2512874106241509,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "25.1%",
            "display_range": null,
            "display_text": "25.1%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 29 trading days.",
            "kind": "share_pct",
            "value_pct": 25.1,
            "plain_english": "Market explains about 25.1% of price moves in the current state."
          },
          "sector_share": {
            "median": 0.11097783553524268,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "11.1%",
            "display_range": null,
            "display_text": "11.1%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 29 trading days.",
            "kind": "share_pct",
            "value_pct": 11.1,
            "plain_english": "Sector explains about 11.1% of price moves in the current state."
          },
          "company_share": {
            "median": 0.6377347538406065,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "63.8%",
            "display_range": null,
            "display_text": "63.8%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 29 trading days.",
            "kind": "share_pct",
            "value_pct": 63.8,
            "plain_english": "Company-specific explains about 63.8% of price moves in the current state."
          },
          "basis": "reporting_window"
        },
        "current_sensitivities": {
          "beta_market": {
            "median": 1.2023242741150038,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "1.20",
            "display_range": null,
            "display_text": "1.20",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 29 trading days.",
            "kind": "beta",
            "strength_label": "Moderate",
            "plain_english": "Moderate market link: a 1% market move has lined up with about a 1.20% stock move in the same direction in this state.",
            "value_num": 1.2
          },
          "beta_stock_lag": {
            "median": -0.07208232516050307,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "-0.07",
            "display_range": null,
            "display_text": "-0.07",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 29 trading days.",
            "kind": "lag_beta",
            "value_num": -0.07
          },
          "beta_sector": {
            "median": 0.21078731255456962,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "0.21",
            "display_range": null,
            "display_text": "0.21",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 29 trading days.",
            "kind": "beta",
            "strength_label": "Weak",
            "plain_english": "Weak sector link: a 1% sector move has lined up with about a 0.21% stock move in the same direction in this state.",
            "value_num": 0.21
          },
          "beta_market_lag": {
            "median": 0.06332377337776876,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "0.06",
            "display_range": null,
            "display_text": "0.06",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 29 trading days.",
            "kind": "lag_beta",
            "value_num": 0.06
          },
          "beta_sector_lag": {
            "median": 0.33823267504699284,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "0.34",
            "display_range": null,
            "display_text": "0.34",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 29 trading days.",
            "kind": "lag_beta",
            "value_num": 0.34
          },
          "posterior_source": null,
          "intervals_collapsed": false,
          "confidence_label": "High, limited history",
          "confidence_note": "Based on 29 trading days relative to the 252-day target."
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
            "dominant_driver": "company",
            "dominant_driver_label": "Company-specific",
            "regime_id": 0,
            "regime_label": "High Volatility",
            "dominant_share": {
              "median": 0.728833142929896,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "72.9%",
              "display_range": null,
              "display_text": "72.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
              "kind": "share_pct",
              "value_pct": 72.9,
              "plain_english": "Company-specific explains about 72.9% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.20745049622286799,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "20.7%",
                "display_range": null,
                "display_text": "20.7%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
                "kind": "share_pct",
                "value_pct": 20.7,
                "plain_english": "Market explains about 20.7% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.06371636084723604,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "6.4%",
                "display_range": null,
                "display_text": "6.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
                "kind": "share_pct",
                "value_pct": 6.4,
                "plain_english": "Sector explains about 6.4% of price moves in the current state."
              },
              "company_share": {
                "median": 0.728833142929896,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "72.9%",
                "display_range": null,
                "display_text": "72.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
                "kind": "share_pct",
                "value_pct": 72.9,
                "plain_english": "Company-specific explains about 72.9% of price moves in the current state."
              }
            },
            "summary": "Jan: Still clearly company-driven, though based on only 5 trading days."
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
            "regime_id": 0,
            "regime_label": "High Volatility",
            "dominant_share": {
              "median": 0.6862644582007311,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "68.6%",
              "display_range": null,
              "display_text": "68.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
              "kind": "share_pct",
              "value_pct": 68.6,
              "plain_english": "Company-specific explains about 68.6% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.22030082029398396,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "22.0%",
                "display_range": null,
                "display_text": "22.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
                "kind": "share_pct",
                "value_pct": 22.0,
                "plain_english": "Market explains about 22.0% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.09343472150528484,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "9.3%",
                "display_range": null,
                "display_text": "9.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
                "kind": "share_pct",
                "value_pct": 9.3,
                "plain_english": "Sector explains about 9.3% of price moves in the current state."
              },
              "company_share": {
                "median": 0.6862644582007311,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "68.6%",
                "display_range": null,
                "display_text": "68.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
                "kind": "share_pct",
                "value_pct": 68.6,
                "plain_english": "Company-specific explains about 68.6% of price moves in the current state."
              }
            },
            "summary": "Feb: Still clearly company-driven."
          },
          {
            "month_key": "2026-03",
            "month_label": "March 2026",
            "month_short_label": "Mar",
            "period_label": "2026-03-02 to 2026-03-09",
            "n_obs": 6,
            "partial_month": false,
            "dominant_driver": "company",
            "dominant_driver_label": "Company-specific",
            "regime_id": 0,
            "regime_label": "High Volatility",
            "dominant_share": {
              "median": 0.44950581542146933,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "45.0%",
              "display_range": null,
              "display_text": "45.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 6 trading days.",
              "kind": "share_pct",
              "value_pct": 45.0,
              "plain_english": "Company-specific explains about 45.0% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.36072152033201216,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "36.1%",
                "display_range": null,
                "display_text": "36.1%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 6 trading days.",
                "kind": "share_pct",
                "value_pct": 36.1,
                "plain_english": "Market explains about 36.1% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.18977266424651854,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "19.0%",
                "display_range": null,
                "display_text": "19.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 6 trading days.",
                "kind": "share_pct",
                "value_pct": 19.0,
                "plain_english": "Sector explains about 19.0% of price moves in the current state."
              },
              "company_share": {
                "median": 0.44950581542146933,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "45.0%",
                "display_range": null,
                "display_text": "45.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 6 trading days.",
                "kind": "share_pct",
                "value_pct": 45.0,
                "plain_english": "Company-specific explains about 45.0% of price moves in the current state."
              }
            },
            "summary": "Mar: More mixed, though company-driven still has the largest share, though based on only 6 trading days."
          }
        ],
        "regimes": [
          {
            "id": 0,
            "label": "High Volatility",
            "pct_time": 0.9310344827586209,
            "dominant_driver": "company",
            "dominant_driver_probability": 0.6533451441088716,
            "expected_duration_days": 9.206550820910467,
            "current_probability": 1.0,
            "n_days_effective": 27.000000000000007,
            "shares": {
              "market": {
                "median": 0.2418578017062258,
                "low": 0.2418578017062258,
                "high": 0.2418578017062258,
                "value_pct": 24.2,
                "range_collapsed": true,
                "display_value": "24.2%",
                "display_range": null,
                "display_text": "24.2%",
                "uncertainty_note": "Point estimate only; current-state history is limited to 29 trading days.",
                "plain_english": "Market explains about 24.2% of price moves in the current state. This is a point estimate from 29 trading days."
              },
              "sector": {
                "median": 0.10479705418490258,
                "low": 0.10479705418490258,
                "high": 0.10479705418490258,
                "value_pct": 10.5,
                "range_collapsed": true,
                "display_value": "10.5%",
                "display_range": null,
                "display_text": "10.5%",
                "uncertainty_note": "Point estimate only; current-state history is limited to 29 trading days.",
                "plain_english": "Sector explains about 10.5% of price moves in the current state. This is a point estimate from 29 trading days."
              },
              "company": {
                "median": 0.6533451441088716,
                "low": 0.6533451441088716,
                "high": 0.6533451441088716,
                "value_pct": 65.3,
                "range_collapsed": true,
                "display_value": "65.3%",
                "display_range": null,
                "display_text": "65.3%",
                "uncertainty_note": "Point estimate only; current-state history is limited to 29 trading days.",
                "plain_english": "Company-specific explains about 65.3% of price moves in the current state. This is a point estimate from 29 trading days."
              }
            },
            "sensitivities": {
              "beta_market": {
                "median": 1.2023242741150038,
                "low": 1.2023242741150038,
                "high": 1.2023242741150038,
                "value_num": 1.2,
                "range_collapsed": true,
                "display_value": "1.20",
                "display_range": null,
                "display_text": "1.20",
                "uncertainty_note": "Point estimate only; current-state history is limited to 29 trading days.",
                "strength_label": "Moderate",
                "plain_english": "Moderate market link: a 1% market move has lined up with about a 1.20% stock move in the same direction in this state. Shown as a point estimate because only 29 trading days are available."
              },
              "beta_sector": {
                "median": 0.21078731255456962,
                "low": 0.21078731255456962,
                "high": 0.21078731255456962,
                "value_num": 0.21,
                "range_collapsed": true,
                "display_value": "0.21",
                "display_range": null,
                "display_text": "0.21",
                "uncertainty_note": "Point estimate only; current-state history is limited to 29 trading days.",
                "strength_label": "Weak",
                "plain_english": "Weak sector link: a 1% sector move has lined up with about a 0.21% stock move in the same direction in this state. Shown as a point estimate because only 29 trading days are available."
              },
              "beta_market_lag": {
                "median": 0.06332377337776876,
                "low": 0.06332377337776876,
                "high": 0.06332377337776876
              },
              "beta_sector_lag": {
                "median": 0.33823267504699284,
                "low": 0.33823267504699284,
                "high": 0.33823267504699284
              },
              "beta_stock_lag": null
            },
            "volatility": {
              "median": 0.02952716360403115,
              "low": 0.02952716360403115,
              "high": 0.02952716360403115
            },
            "volatility_label": "High Volatility",
            "lead_signal": {
              "lead_factor": "none",
              "lead_confidence": null,
              "lead_horizon_days": 1
            },
            "dominant_driver_label": "Company-specific",
            "current_probability_display": null
          },
          {
            "id": 1,
            "label": "Low Volatility",
            "pct_time": 0.0689655172413793,
            "dominant_driver": "market",
            "dominant_driver_probability": 0.6365173260037387,
            "expected_duration_days": 1.3102691304383978,
            "current_probability": 0.0,
            "n_days_effective": 1.9999999999999996,
            "shares": {
              "market": {
                "median": 0.6365173260037387,
                "low": 0.6365173260037387,
                "high": 0.6365173260037387,
                "value_pct": 63.7,
                "range_collapsed": true,
                "display_value": "63.7%",
                "display_range": null,
                "display_text": "63.7%",
                "uncertainty_note": "Point estimate only; current-state history is limited to 29 trading days.",
                "plain_english": "Market explains about 63.7% of price moves in the current state. This is a point estimate from 29 trading days."
              },
              "sector": {
                "median": 0.36348267399626133,
                "low": 0.36348267399626133,
                "high": 0.36348267399626133,
                "value_pct": 36.3,
                "range_collapsed": true,
                "display_value": "36.3%",
                "display_range": null,
                "display_text": "36.3%",
                "uncertainty_note": "Point estimate only; current-state history is limited to 29 trading days.",
                "plain_english": "Sector explains about 36.3% of price moves in the current state. This is a point estimate from 29 trading days."
              },
              "company": {
                "median": 0.0,
                "low": 0.0,
                "high": 0.0,
                "value_pct": 0.0,
                "range_collapsed": true,
                "display_value": "0.0%",
                "display_range": null,
                "display_text": "0.0%",
                "uncertainty_note": "Point estimate only; current-state history is limited to 29 trading days.",
                "plain_english": "Company-specific explains about 0.0% of price moves in the current state. This is a point estimate from 29 trading days."
              }
            },
            "sensitivities": {
              "beta_market": {
                "median": -0.1963463433583605,
                "low": -0.1963463433583605,
                "high": -0.1963463433583605,
                "value_num": -0.2,
                "range_collapsed": true,
                "display_value": "-0.20",
                "display_range": null,
                "display_text": "-0.20",
                "uncertainty_note": "Point estimate only; current-state history is limited to 29 trading days.",
                "strength_label": "Weak",
                "plain_english": "Weak market link: a 1% market move has lined up with about a 0.20% stock move in the opposite direction in this state. Shown as a point estimate because only 29 trading days are available."
              },
              "beta_sector": {
                "median": 0.5224518905255764,
                "low": 0.5224518905255764,
                "high": 0.5224518905255764,
                "value_num": 0.52,
                "range_collapsed": true,
                "display_value": "0.52",
                "display_range": null,
                "display_text": "0.52",
                "uncertainty_note": "Point estimate only; current-state history is limited to 29 trading days.",
                "strength_label": "Modest",
                "plain_english": "Modest sector link: a 1% sector move has lined up with about a 0.52% stock move in the same direction in this state. Shown as a point estimate because only 29 trading days are available."
              },
              "beta_market_lag": {
                "median": -0.8157674275331763,
                "low": -0.8157674275331763,
                "high": -0.8157674275331763
              },
              "beta_sector_lag": {
                "median": -0.3614270625510734,
                "low": -0.3614270625510734,
                "high": -0.3614270625510734
              },
              "beta_stock_lag": null
            },
            "volatility": {
              "median": 2.3771643168712227e-17,
              "low": 2.3771643168712227e-17,
              "high": 2.3771643168712227e-17
            },
            "volatility_label": "Low Volatility",
            "lead_signal": {
              "lead_factor": "market",
              "lead_confidence": 0.8359505384491904,
              "lead_horizon_days": 1
            },
            "dominant_driver_label": "Market",
            "current_probability_display": 0.0
          }
        ],
        "transitions": {
          "mean": [
            [
              0.8913816890329068,
              0.10861831096709279
            ],
            [
              0.7632019840575914,
              0.23679801594240882
            ]
          ],
          "low": [
            [
              0.8210121113334605,
              0.039516730378396425
            ],
            [
              0.49130089875946903,
              0.03584708176158796
            ]
          ],
          "high": [
            [
              0.9604832696216037,
              0.1789878886665395
            ],
            [
              0.9641529182384121,
              0.5086991012405311
            ]
          ],
          "counts": [
            [
              24.0,
              2.0
            ],
            [
              2.0,
              0.0
            ]
          ]
        },
        "methodology": {
          "estimation_window_days": 29,
          "reporting_window_days": 29,
          "regime_inference": "statsmodels_markov_regression",
          "distribution": "gaussian",
          "history_limited": true,
          "selection_metric": "bic_with_small_state_penalty",
          "selection_reason": "bic",
          "candidate_regime_counts": [
            2
          ],
          "lead_horizon_days": 1,
          "lead_definition": "compare lagged market, sector, and stock-persistence contributions",
          "state_label_definition": "volatility bucket only",
          "market_regime_definition": "volatility bucket within the fitted Markov states",
          "current_driver_mix_basis": "active_regime",
          "reporting_window_driver_mix_basis": "probability_weighted_recent_average",
          "sector_proxy_equals_market": false
        },
        "client_read": {
          "market_link_display": "1.20",
          "sector_link_display": "0.21",
          "market_link_explainer": "Moderate market link. A 1% market move has lined up with about a 1.20% stock move in the same direction in this state. This is a point estimate from 29 trading days.",
          "sector_link_explainer": "Weak sector link. A 1% sector move has lined up with about a 0.21% stock move in the same direction in this state. This is a point estimate from 29 trading days.",
          "stock_persistence_display": "-0.07",
          "point_estimate_note": "Point estimate only because the current state has 29 trading days.",
          "history_limited_note": "Read is based on 29 trading days versus the 252-day target."
        },
        "current_summary": {
          "regime_label": "High Volatility",
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "driver_share_pct": 65.3,
          "driver_share_display": "65.3%",
          "confidence_label": "High, limited history",
          "confidence_pct": 100.0,
          "display_confidence_pct": null,
          "confidence_note": "Based on 29 trading days relative to the 252-day target.",
          "history_days": 29,
          "history_limited": true,
          "volatility_label": "High Volatility",
          "lead_signal_text": "No stable lead signal.",
          "state_term": "state",
          "stay_probability": 0.8913816890329068,
          "effective_days": 27.0,
          "persistence_note": "This state looks more persistent, with a typical run length of about 9.2 days.",
          "expected_duration_days": 9.2
        },
        "display_notes": {
          "current_driver_mix": "Current state shares come from the active regime, not the full reporting window average.",
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
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_label": "High Volatility",
          "summary": "Jan: Still clearly company-driven, though based on only 5 trading days.",
          "share_market": 0.20745049622286799,
          "share_sector": 0.06371636084723604,
          "share_company": 0.728833142929896,
          "share_market_display": "20.7%",
          "share_sector_display": "6.4%",
          "share_company_display": "72.9%",
          "dominant_share_display": "72.9%"
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
          "regime_label": "High Volatility",
          "summary": "Feb: Still clearly company-driven.",
          "share_market": 0.22030082029398396,
          "share_sector": 0.09343472150528484,
          "share_company": 0.6862644582007311,
          "share_market_display": "22.0%",
          "share_sector_display": "9.3%",
          "share_company_display": "68.6%",
          "dominant_share_display": "68.6%"
        },
        {
          "month_key": "2026-03",
          "month_label": "March 2026",
          "month_short_label": "Mar",
          "period_label": "2026-03-02 to 2026-03-09",
          "n_obs": 6,
          "partial_month": false,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_label": "High Volatility",
          "summary": "Mar: More mixed, though company-driven still has the largest share, though based on only 6 trading days.",
          "share_market": 0.36072152033201216,
          "share_sector": 0.18977266424651854,
          "share_company": 0.44950581542146933,
          "share_market_display": "36.1%",
          "share_sector_display": "19.0%",
          "share_company_display": "45.0%",
          "dominant_share_display": "45.0%"
        }
      ],
      "regime": {
        "valid": true,
        "regime_method": "simple_markov_return_model",
        "n_regimes": 2,
        "current_regime_label": "High Volatility",
        "current_regime_probability": 1.0,
        "labels": [
          "High Volatility",
          "Low Volatility"
        ],
        "pct_time": [
          0.9310344827586209,
          0.0689655172413793
        ],
        "current_regime": 0,
        "regimes": [
          {
            "id": 0,
            "label": "High Volatility",
            "pct_time": 0.9310344827586209,
            "dominant_driver": "company",
            "dominant_driver_probability": 0.6533451441088716,
            "expected_duration_days": 9.206550820910467,
            "current_probability": 1.0,
            "n_days_effective": 27.000000000000007,
            "shares": {
              "market": {
                "median": 0.2418578017062258,
                "low": 0.2418578017062258,
                "high": 0.2418578017062258
              },
              "sector": {
                "median": 0.10479705418490258,
                "low": 0.10479705418490258,
                "high": 0.10479705418490258
              },
              "company": {
                "median": 0.6533451441088716,
                "low": 0.6533451441088716,
                "high": 0.6533451441088716
              }
            },
            "sensitivities": {
              "beta_market": {
                "median": 1.2023242741150038,
                "low": 1.2023242741150038,
                "high": 1.2023242741150038
              },
              "beta_sector": {
                "median": 0.21078731255456962,
                "low": 0.21078731255456962,
                "high": 0.21078731255456962
              },
              "beta_market_lag": {
                "median": 0.06332377337776876,
                "low": 0.06332377337776876,
                "high": 0.06332377337776876
              },
              "beta_sector_lag": {
                "median": 0.33823267504699284,
                "low": 0.33823267504699284,
                "high": 0.33823267504699284
              }
            },
            "volatility": {
              "median": 0.02952716360403115,
              "low": 0.02952716360403115,
              "high": 0.02952716360403115
            },
            "volatility_label": "High Volatility",
            "lead_signal": {
              "lead_factor": "none",
              "lead_confidence": null,
              "lead_horizon_days": 1
            }
          },
          {
            "id": 1,
            "label": "Low Volatility",
            "pct_time": 0.0689655172413793,
            "dominant_driver": "market",
            "dominant_driver_probability": 0.6365173260037387,
            "expected_duration_days": 1.3102691304383978,
            "current_probability": 0.0,
            "n_days_effective": 1.9999999999999996,
            "shares": {
              "market": {
                "median": 0.6365173260037387,
                "low": 0.6365173260037387,
                "high": 0.6365173260037387
              },
              "sector": {
                "median": 0.36348267399626133,
                "low": 0.36348267399626133,
                "high": 0.36348267399626133
              },
              "company": {
                "median": 0.0,
                "low": 0.0,
                "high": 0.0
              }
            },
            "sensitivities": {
              "beta_market": {
                "median": -0.1963463433583605,
                "low": -0.1963463433583605,
                "high": -0.1963463433583605
              },
              "beta_sector": {
                "median": 0.5224518905255764,
                "low": 0.5224518905255764,
                "high": 0.5224518905255764
              },
              "beta_market_lag": {
                "median": -0.8157674275331763,
                "low": -0.8157674275331763,
                "high": -0.8157674275331763
              },
              "beta_sector_lag": {
                "median": -0.3614270625510734,
                "low": -0.3614270625510734,
                "high": -0.3614270625510734
              }
            },
            "volatility": {
              "median": 2.3771643168712227e-17,
              "low": 2.3771643168712227e-17,
              "high": 2.3771643168712227e-17
            },
            "volatility_label": "Low Volatility",
            "lead_signal": {
              "lead_factor": "market",
              "lead_confidence": 0.8359505384491904,
              "lead_horizon_days": 1
            }
          }
        ],
        "transitions": [
          [
            0.8913816890329068,
            0.10861831096709279
          ],
          [
            0.7632019840575914,
            0.23679801594240882
          ]
        ]
      }
    },
    "order_book": {
      "bids": [
        {
          "level": 1,
          "price": 0.22,
          "quantity": 10000.0,
          "value": 2200.0
        },
        {
          "level": 2,
          "price": 0.215,
          "quantity": 566000.0,
          "value": 121690.0
        },
        {
          "level": 3,
          "price": 0.21,
          "quantity": 306800.0,
          "value": 64428.0
        },
        {
          "level": 4,
          "price": 0.205,
          "quantity": 122000.0,
          "value": 25010.0
        },
        {
          "level": 5,
          "price": 0.2,
          "quantity": 189600.0,
          "value": 37920.0
        },
        {
          "level": 6,
          "price": 0.199,
          "quantity": 105000.0,
          "value": 20895.0
        },
        {
          "level": 7,
          "price": 0.195,
          "quantity": 100000.0,
          "value": 19500.0
        },
        {
          "level": 8,
          "price": 0.19,
          "quantity": 20000.0,
          "value": 3800.0
        },
        {
          "level": 9,
          "price": 0.18,
          "quantity": 50000.0,
          "value": 9000.0
        }
      ],
      "asks": [
        {
          "level": 1,
          "price": 0.225,
          "quantity": 170600.0,
          "value": 38385.0
        },
        {
          "level": 2,
          "price": 0.23,
          "quantity": 84300.0,
          "value": 19389.0
        },
        {
          "level": 3,
          "price": 0.235,
          "quantity": 81100.0,
          "value": 19058.5
        },
        {
          "level": 4,
          "price": 0.24,
          "quantity": 95400.0,
          "value": 22896.0
        },
        {
          "level": 5,
          "price": 0.26,
          "quantity": 218800.0,
          "value": 56888.0
        },
        {
          "level": 6,
          "price": 0.265,
          "quantity": 512000.0,
          "value": 135680.0
        },
        {
          "level": 7,
          "price": 0.27,
          "quantity": 231000.0,
          "value": 62370.00000000001
        },
        {
          "level": 8,
          "price": 0.275,
          "quantity": 180500.0,
          "value": 49637.50000000001
        },
        {
          "level": 9,
          "price": 0.28,
          "quantity": 305000.0,
          "value": 85400.00000000001
        },
        {
          "level": 10,
          "price": 0.285,
          "quantity": 144000.0,
          "value": 41040.0
        }
      ]
    },
    "execution_dynamic": {
      "snapshot": {
        "valid": true,
        "snapshot_time": "2026-03-10 08:59:36.797900",
        "snapshot_basis": "last_continuous_session_snapshot",
        "snapshot_label": "final continuous-session displayed book before close",
        "snapshot_note": "Final continuous-session displayed book before close",
        "snapshot_mic": "XSES",
        "mid_price": 0.2225,
        "spread_pct": 0.02247191011235957,
        "spread_ticks": 1.0,
        "tick_size": 0.005,
        "bid_depth_notional_top10": 304443.0,
        "ask_depth_notional_top10": 530744.0,
        "bid_ask_depth_ratio": 0.5736
      },
      "historical_trade_scenarios": {
        "valid": true,
        "requested_lookback_calendar_days": 365,
        "lookback_calendar_days": 365,
        "effective_calendar_days": 48,
        "history_limited": true,
        "trade_days_used": 32,
        "n_trades_used": 9035,
        "first_trade_date": "2026-01-22",
        "last_trade_date": "2026-03-10",
        "window_label": "Jan 22, 2026 to Mar 10, 2026",
        "window_short_label": "Jan 22-Mar 10",
        "trade_days_label": "32 trading days",
        "trade_count_label": "9,035 trades",
        "window_detail_label": "32 trading days • 9,035 trades",
        "history_note": "Trade-size percentiles use available history from Jan 22, 2026 to Mar 10, 2026 (32 trading days • 9,035 trades), not a full year.",
        "scenarios": [
          {
            "key": "p90",
            "label": "90th percentile trade",
            "quantile": 0.9,
            "trade_notional": 9864.0,
            "impact_pct": -0.028784999999999998,
            "filled_pct": 100.0,
            "levels_consumed": 2,
            "pct_of_bid_depth": 3.24,
            "pct_of_adv": 2.36
          },
          {
            "key": "p95",
            "label": "95th percentile trade",
            "quantile": 0.95,
            "trade_notional": 13750.0,
            "impact_pct": -0.030181,
            "filled_pct": 100.0,
            "levels_consumed": 2,
            "pct_of_bid_depth": 4.52,
            "pct_of_adv": 3.29
          },
          {
            "key": "p99_99",
            "label": "99.99th percentile trade",
            "quantile": 0.9999,
            "trade_notional": 110414.38,
            "impact_pct": -0.03327,
            "filled_pct": 100.0,
            "levels_consumed": 2,
            "pct_of_bid_depth": 36.27,
            "pct_of_adv": 26.4
          }
        ]
      },
      "l3_sell_order_scenarios": {
        "valid": true,
        "trade_date": "2026-03-10",
        "selection_method": "largest_observed_ask_orders_during_day",
        "orders": [
          {
            "rank": 1,
            "order_id": "8117432114348421120",
            "timestamp": "2026-03-09 22:59:02.299400000",
            "local_timestamp": "2026-03-10 06:59:02",
            "posted_price": 0.3,
            "size_shares": 200000.0,
            "notional": 60000.0,
            "impact_pct": -0.032902,
            "filled_pct": 100.0,
            "levels_consumed": 2,
            "pct_of_bid_depth": 19.71,
            "price_vs_mid_pct": 34.831,
            "executed_event_count": 0,
            "event_count": 1
          },
          {
            "rank": 2,
            "order_id": "8119594029086503936",
            "timestamp": "2026-03-09 22:59:02.299400000",
            "local_timestamp": "2026-03-10 06:59:02",
            "posted_price": 0.28,
            "size_shares": 200000.0,
            "notional": 56000.0,
            "impact_pct": -0.032844000000000005,
            "filled_pct": 100.0,
            "levels_consumed": 2,
            "pct_of_bid_depth": 18.39,
            "price_vs_mid_pct": 25.843,
            "executed_event_count": 0,
            "event_count": 1
          },
          {
            "rank": 3,
            "order_id": "8116823259784643584",
            "timestamp": "2026-03-09 22:59:02.299400000",
            "local_timestamp": "2026-03-10 06:59:02",
            "posted_price": 0.265,
            "size_shares": 200000.0,
            "notional": 53000.0,
            "impact_pct": -0.032795,
            "filled_pct": 100.0,
            "levels_consumed": 2,
            "pct_of_bid_depth": 17.41,
            "price_vs_mid_pct": 19.101,
            "executed_event_count": 0,
            "event_count": 1
          }
        ]
      },
      "intraday_liquidity_profile": {
        "valid": true,
        "trade_date": "2026-03-10",
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
            "spread_pct": 0.022988505747126457,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 190534.5,
            "ask_depth_notional": 480555.5,
            "mid_price": 0.2175
          },
          {
            "bucket": "09:30",
            "spread_pct": 0.022988505747126457,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 233534.5,
            "ask_depth_notional": 472880.5,
            "mid_price": 0.2175
          },
          {
            "bucket": "10:00",
            "spread_pct": 0.022988505747126457,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 278846.5,
            "ask_depth_notional": 482456.5,
            "mid_price": 0.2175
          },
          {
            "bucket": "10:30",
            "spread_pct": 0.022988505747126457,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 286271.5,
            "ask_depth_notional": 484216.5,
            "mid_price": 0.2175
          },
          {
            "bucket": "11:00",
            "spread_pct": 0.022988505747126457,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 286207.0,
            "ask_depth_notional": 484040.5,
            "mid_price": 0.2175
          },
          {
            "bucket": "11:30",
            "spread_pct": 0.02247191011235957,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 290348.0,
            "ask_depth_notional": 550472.5,
            "mid_price": 0.2225
          },
          {
            "bucket": "13:00",
            "spread_pct": 0.02247191011235957,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 299348.0,
            "ask_depth_notional": 565435.0,
            "mid_price": 0.2225
          },
          {
            "bucket": "13:30",
            "spread_pct": 0.02247191011235957,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 292570.0,
            "ask_depth_notional": 559945.0,
            "mid_price": 0.2225
          },
          {
            "bucket": "14:00",
            "spread_pct": 0.02247191011235957,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 328110.0,
            "ask_depth_notional": 499053.0,
            "mid_price": 0.2225
          },
          {
            "bucket": "14:30",
            "spread_pct": 0.02247191011235957,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 328110.0,
            "ask_depth_notional": 499672.5,
            "mid_price": 0.2225
          },
          {
            "bucket": "15:00",
            "spread_pct": 0.02247191011235957,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 333310.0,
            "ask_depth_notional": 499739.5,
            "mid_price": 0.2225
          },
          {
            "bucket": "15:30",
            "spread_pct": 0.02247191011235957,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 332020.0,
            "ask_depth_notional": 502613.0,
            "mid_price": 0.2225
          },
          {
            "bucket": "16:00",
            "spread_pct": 0.02247191011235957,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 316664.0,
            "ask_depth_notional": 512902.5,
            "mid_price": 0.2225
          },
          {
            "bucket": "16:30",
            "spread_pct": 0.02247191011235957,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 304443.0,
            "ask_depth_notional": 530744.0,
            "mid_price": 0.2225
          }
        ],
        "summary": {
          "median_spread_pct": 0.02247191011235957,
          "median_spread_ticks": 1.0000000000000009,
          "median_bid_depth_notional": 295959.0,
          "median_ask_depth_notional": 499706.0,
          "tightest_bucket": "11:30",
          "widest_bucket": "09:00",
          "deepest_bid_bucket": "15:00",
          "thinnest_bid_bucket": "09:00"
        }
      }
    },
    "peer_capacity": {
      "bx_ticket_pct_adv_50k": 12.0,
      "peers": [
        {
          "ticker": "ITS",
          "pct": 98.3
        },
        {
          "ticker": "9MT",
          "pct": 334.1
        },
        {
          "ticker": "QS9",
          "pct": 392.7
        },
        {
          "ticker": "LVR",
          "pct": 6801.6
        },
        {
          "ticker": "U77",
          "pct": 26333.1
        },
        {
          "ticker": "NXR",
          "pct": 43936.7
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
          "n_trades": 101,
          "n_runs": 84,
          "n_trade_days": 1,
          "first_trade_date": "2026-03-10",
          "last_trade_date": "2026-03-10",
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
            "retail_pct": 0.6138613861386139,
            "mixed_pct": 0.1188118811881188,
            "instit_pct": 0.22772277227722773,
            "ambiguous_pct": 0.039603960396039604,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.039603960396039604,
            "retail_qty_pct": 0.10589519650655022,
            "mixed_qty_pct": 0.1960971615720524,
            "instit_qty_pct": 0.6206331877729258,
            "ambiguous_qty_pct": 0.07737445414847162,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.07737445414847162,
            "retail_notional_pct": 0.10561947609740507,
            "mixed_notional_pct": 0.1943061548106354,
            "instit_notional_pct": 0.6234065961082224,
            "ambiguous_notional_pct": 0.07666777298373714,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.07666777298373714
          },
          "run_composition": {
            "retail_pct": 0.7380952380952381,
            "mixed_pct": 0.13095238095238096,
            "instit_pct": 0.08333333333333333,
            "ambiguous_pct": 0.047619047619047616,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.047619047619047616,
            "retail_notional_pct": 0.10561947609740507,
            "mixed_notional_pct": 0.1943061548106354,
            "instit_notional_pct": 0.6234065961082224,
            "unclear_notional_pct": 0.07666777298373714
          },
          "counts": {
            "trades": {
              "retail": 62,
              "mixed": 12,
              "institutional": 23,
              "ambiguous": 4,
              "unobservable": 0,
              "unclear": 4
            },
            "runs": {
              "retail": 62,
              "mixed": 11,
              "institutional": 7,
              "ambiguous": 4,
              "unobservable": 0,
              "unclear": 4
            }
          },
          "confidence": {
            "high": 0.32142857142857145,
            "medium": 0.44047619047619047,
            "low": 0.05952380952380952,
            "na": 0.17857142857142858
          },
          "confidence_counts": {
            "high": 27,
            "medium": 37,
            "low": 5,
            "na": 15
          },
          "trade_confidence": {
            "high": 0.26732673267326734,
            "medium": 0.5148514851485149,
            "low": 0.0594059405940594,
            "na": 0.15841584158415842
          },
          "trade_confidence_counts": {
            "high": 27,
            "medium": 52,
            "low": 6,
            "na": 16
          },
          "observability": {
            "avg_feature_coverage": 0.8517857142857139,
            "observable_run_pct": 1.0,
            "ambiguous_run_pct": 0.047619047619047616,
            "unobservable_run_pct": 0.0
          },
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "dominant_share": 0.7380952380952381,
          "dominance_gap": 0.6071428571428572,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 81,
              "MULTI_FILL_SINGLE_PRICE": 20
            },
            "d2_information": {
              "NEUTRAL_OR_REVERSING": 95,
              "PERSISTENT_POSITIVE_IMPACT": 6
            },
            "d3_urgency": {
              "IMMEDIATE": 84
            },
            "participant_confidence": {
              "MEDIUM": 37,
              "HIGH": 27,
              "NA": 15,
              "LOW": 5
            }
          },
          "trade_size": {
            "avg": 1610.9108910891089,
            "median": 270.0
          },
          "run_size": {
            "avg": 1936.9285714285713,
            "median": 270.0,
            "avg_length": 1.0476190476190477
          },
          "recent_trades": [
            {
              "trade_id": "BMLL-101",
              "timestamp": "2026-03-10T08:50:11.716800",
              "price": 0.22,
              "size": 6200.0,
              "notional": 1364.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 3593,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-100",
              "timestamp": "2026-03-10T08:48:41.648600",
              "price": 0.22,
              "size": 20000.0,
              "notional": 4400.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 3592,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-99",
              "timestamp": "2026-03-10T08:48:29.345400",
              "price": 0.22,
              "size": 11900.0,
              "notional": 2618.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 3591,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-98",
              "timestamp": "2026-03-10T08:48:29.345100",
              "price": 0.22,
              "size": 8100.0,
              "notional": 1782.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 3591,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-97",
              "timestamp": "2026-03-10T08:48:29.345100",
              "price": 0.22,
              "size": 20000.0,
              "notional": 4400.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 3591,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-96",
              "timestamp": "2026-03-10T08:48:29.345100",
              "price": 0.22,
              "size": 15800.0,
              "notional": 3476.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 3591,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-95",
              "timestamp": "2026-03-10T08:44:30.011400",
              "price": 0.22,
              "size": 4200.0,
              "notional": 924.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 3590,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-94",
              "timestamp": "2026-03-10T08:44:23.653300",
              "price": 0.22,
              "size": 2700.0,
              "notional": 594.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 3589,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-93",
              "timestamp": "2026-03-10T08:44:23.623100",
              "price": 0.22,
              "size": 8900.0,
              "notional": 1958.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 3589,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-92",
              "timestamp": "2026-03-10T08:44:23.593000",
              "price": 0.22,
              "size": 11100.0,
              "notional": 2442.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 3589,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-91",
              "timestamp": "2026-03-10T08:43:45.063700",
              "price": 0.22,
              "size": 2700.0,
              "notional": 594.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 3588,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-90",
              "timestamp": "2026-03-10T08:43:45.063700",
              "price": 0.22,
              "size": 27000.0,
              "notional": 5940.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 3588,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-89",
              "timestamp": "2026-03-10T08:28:00.596000",
              "price": 0.225,
              "size": 300.0,
              "notional": 67.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 3587,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-88",
              "timestamp": "2026-03-10T08:07:02.575200",
              "price": 0.22,
              "size": 27000.0,
              "notional": 5940.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 3586,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-87",
              "timestamp": "2026-03-10T08:06:43.331000",
              "price": 0.22,
              "size": 300.0,
              "notional": 66.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 3585,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-86",
              "timestamp": "2026-03-10T08:06:43.330900",
              "price": 0.22,
              "size": 100.0,
              "notional": 22.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 3585,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-85",
              "timestamp": "2026-03-10T08:06:43.330800",
              "price": 0.22,
              "size": 300.0,
              "notional": 66.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 3585,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-84",
              "timestamp": "2026-03-10T08:06:43.330700",
              "price": 0.22,
              "size": 100.0,
              "notional": 22.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 3585,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-83",
              "timestamp": "2026-03-10T08:06:43.330700",
              "price": 0.22,
              "size": 100.0,
              "notional": 22.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 3585,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-82",
              "timestamp": "2026-03-10T08:06:43.330400",
              "price": 0.22,
              "size": 100.0,
              "notional": 22.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 3585,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-81",
              "timestamp": "2026-03-10T08:06:40.133000",
              "price": 0.22,
              "size": 30000.0,
              "notional": 6600.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 3585,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-80",
              "timestamp": "2026-03-10T08:06:40.133000",
              "price": 0.22,
              "size": 20000.0,
              "notional": 4400.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 3585,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-79",
              "timestamp": "2026-03-10T06:12:24.870000",
              "price": 0.225,
              "size": 20000.0,
              "notional": 4500.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 3584,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-78",
              "timestamp": "2026-03-10T06:12:24.870000",
              "price": 0.225,
              "size": 4700.0,
              "notional": 1057.5,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 3584,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-77",
              "timestamp": "2026-03-10T06:12:09.594600",
              "price": 0.225,
              "size": 72200.0,
              "notional": 16245.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 3583,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-76",
              "timestamp": "2026-03-10T06:12:09.594600",
              "price": 0.225,
              "size": 177800.0,
              "notional": 40005.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 3583,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-75",
              "timestamp": "2026-03-10T05:43:14.231500",
              "price": 0.22,
              "size": 20000.0,
              "notional": 4400.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 3582,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-74",
              "timestamp": "2026-03-10T05:42:45.574800",
              "price": 0.22,
              "size": 20000.0,
              "notional": 4400.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 3581,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-73",
              "timestamp": "2026-03-10T05:42:40.480600",
              "price": 0.22,
              "size": 10000.0,
              "notional": 2200.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 3580,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-72",
              "timestamp": "2026-03-10T05:42:05.484200",
              "price": 0.22,
              "size": 20000.0,
              "notional": 4400.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 3579,
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
              "retail_pct": 0.6138613861386139,
              "mixed_pct": 0.1188118811881188,
              "instit_pct": 0.22772277227722773,
              "ambiguous_pct": 0.039603960396039604,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.039603960396039604,
              "retail_qty_pct": 0.10589519650655022,
              "mixed_qty_pct": 0.1960971615720524,
              "instit_qty_pct": 0.6206331877729258,
              "ambiguous_qty_pct": 0.07737445414847162,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.07737445414847162,
              "retail_notional_pct": 0.10561947609740507,
              "mixed_notional_pct": 0.1943061548106354,
              "instit_notional_pct": 0.6234065961082224,
              "ambiguous_notional_pct": 0.07666777298373714,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.07666777298373714,
              "run_retail_pct": 0.7380952380952381,
              "run_mixed_pct": 0.13095238095238096,
              "run_instit_pct": 0.08333333333333333,
              "run_unclear_pct": 0.047619047619047616,
              "avg_trade_size": 1610.9108910891089,
              "avg_run_notional": 1936.9285714285713,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.32142857142857145,
              "medium_confidence_pct": 0.44047619047619047,
              "low_confidence_pct": 0.05952380952380952,
              "na_confidence_pct": 0.17857142857142858,
              "avg_feature_coverage": 0.8517857142857139,
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
              "avg_trade_size": 74.0,
              "avg_run_notional": 74.0,
              "dominant_bucket": "INSTITUTIONAL",
              "dominant_label": "Institution-led",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 1.0,
              "na_confidence_pct": 0.0,
              "avg_feature_coverage": 0.8500000000000001,
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
              "retail_pct": 0.25,
              "mixed_pct": 0.25,
              "instit_pct": 0.5,
              "ambiguous_pct": 0.0,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.0,
              "retail_qty_pct": 0.07692307692307693,
              "mixed_qty_pct": 0.15384615384615385,
              "instit_qty_pct": 0.7692307692307693,
              "ambiguous_qty_pct": 0.0,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.0,
              "retail_notional_pct": 0.07692307692307693,
              "mixed_notional_pct": 0.15384615384615385,
              "instit_notional_pct": 0.7692307692307693,
              "ambiguous_notional_pct": 0.0,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.0,
              "run_retail_pct": 0.3333333333333333,
              "run_mixed_pct": 0.3333333333333333,
              "run_instit_pct": 0.3333333333333333,
              "run_unclear_pct": 0.0,
              "avg_trade_size": 2697.5,
              "avg_run_notional": 3596.6666666666665,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Mixed, leaning retail-like",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.6666666666666666,
              "na_confidence_pct": 0.3333333333333333,
              "avg_feature_coverage": 0.8500000000000001,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "QS9",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.2655367231638418,
              "mixed_pct": 0.022598870056497175,
              "instit_pct": 0.4011299435028249,
              "ambiguous_pct": 0.3107344632768362,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.3107344632768362,
              "retail_qty_pct": 0.11466254341529834,
              "mixed_qty_pct": 0.030924385262453412,
              "instit_qty_pct": 0.5696894868629058,
              "ambiguous_qty_pct": 0.28472358445934254,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.28472358445934254,
              "retail_notional_pct": 0.11500376326183381,
              "mixed_notional_pct": 0.030624874390987402,
              "instit_notional_pct": 0.5697675423991707,
              "ambiguous_notional_pct": 0.28460381994800815,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.28460381994800815,
              "run_retail_pct": 0.48314606741573035,
              "run_mixed_pct": 0.033707865168539325,
              "run_instit_pct": 0.19101123595505617,
              "run_unclear_pct": 0.29213483146067415,
              "avg_trade_size": 2679.0378531073447,
              "avg_run_notional": 5327.974157303372,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.3146067415730337,
              "low_confidence_pct": 0.3595505617977528,
              "na_confidence_pct": 0.3258426966292135,
              "avg_feature_coverage": 0.8196629213483145,
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
              "retail_pct": 0.47766323024054985,
              "mixed_pct": 0.10652920962199312,
              "instit_pct": 0.24398625429553264,
              "ambiguous_pct": 0.1718213058419244,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.1718213058419244,
              "retail_qty_pct": 0.06276870163370593,
              "mixed_qty_pct": 0.14251934651762682,
              "instit_qty_pct": 0.4778589853826311,
              "ambiguous_qty_pct": 0.3168529664660361,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.3168529664660361,
              "retail_notional_pct": 0.06287167986486791,
              "mixed_notional_pct": 0.1430510086732989,
              "instit_notional_pct": 0.48053888839918085,
              "ambiguous_notional_pct": 0.31353842306265234,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.31353842306265234,
              "run_retail_pct": 0.776536312849162,
              "run_mixed_pct": 0.09497206703910614,
              "run_instit_pct": 0.061452513966480445,
              "run_unclear_pct": 0.0670391061452514,
              "avg_trade_size": 1676.3539518900343,
              "avg_run_notional": 2725.245810055866,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.48044692737430167,
              "medium_confidence_pct": 0.3575418994413408,
              "low_confidence_pct": 0.0,
              "na_confidence_pct": 0.16201117318435754,
              "avg_feature_coverage": 0.8592178770949718,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "9MT",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.28160919540229884,
              "mixed_pct": 0.12643678160919541,
              "instit_pct": 0.3448275862068966,
              "ambiguous_pct": 0.22988505747126436,
              "unobservable_pct": 0.017241379310344827,
              "unclear_pct": 0.2471264367816092,
              "retail_qty_pct": 0.06676036542515812,
              "mixed_qty_pct": 0.1802529866479269,
              "instit_qty_pct": 0.4349964862965566,
              "ambiguous_qty_pct": 0.2832044975404076,
              "unobservable_qty_pct": 0.03478566408995081,
              "unclear_qty_pct": 0.3179901616303584,
              "retail_notional_pct": 0.06705148039477193,
              "mixed_notional_pct": 0.1810616164310483,
              "instit_notional_pct": 0.4320448119498533,
              "ambiguous_notional_pct": 0.2854030408108829,
              "unobservable_notional_pct": 0.034439050413443584,
              "unclear_notional_pct": 0.3198420912243265,
              "run_retail_pct": 0.5411764705882353,
              "run_mixed_pct": 0.10588235294117647,
              "run_instit_pct": 0.12941176470588237,
              "run_unclear_pct": 0.22352941176470587,
              "avg_trade_size": 1346.6235632183907,
              "avg_run_notional": 2756.6176470588234,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.36470588235294116,
              "low_confidence_pct": 0.3058823529411765,
              "na_confidence_pct": 0.32941176470588235,
              "avg_feature_coverage": 0.8523529411764701,
              "observable_run_pct": 0.9882352941176471,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "U77",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.859375,
              "mixed_pct": 0.125,
              "instit_pct": 0.015625,
              "ambiguous_pct": 0.0,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.0,
              "retail_qty_pct": 0.4617067833698031,
              "mixed_qty_pct": 0.20568927789934355,
              "instit_qty_pct": 0.33260393873085337,
              "ambiguous_qty_pct": 0.0,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.0,
              "retail_notional_pct": 0.465367848877886,
              "mixed_notional_pct": 0.20741617781604862,
              "instit_notional_pct": 0.32721597330606533,
              "ambiguous_notional_pct": 0.0,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.0,
              "run_retail_pct": 0.8776595744680851,
              "run_mixed_pct": 0.11702127659574468,
              "run_instit_pct": 0.005319148936170213,
              "run_unclear_pct": 0.0,
              "avg_trade_size": 48.388020833333336,
              "avg_run_notional": 49.41755319148936,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.8829787234042553,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.0,
              "na_confidence_pct": 0.11702127659574468,
              "avg_feature_coverage": 0.8507978723404251,
              "observable_run_pct": 1.0,
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
          "n_trades": 469,
          "n_runs": 250,
          "n_trade_days": 5,
          "first_trade_date": "2026-03-04",
          "last_trade_date": "2026-03-10",
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
            "retail_pct": 0.31343283582089554,
            "mixed_pct": 0.14712153518123666,
            "instit_pct": 0.35394456289978676,
            "ambiguous_pct": 0.18550106609808104,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.18550106609808104,
            "retail_qty_pct": 0.08723195981013243,
            "mixed_qty_pct": 0.17213674897955414,
            "instit_qty_pct": 0.48619396782594243,
            "ambiguous_qty_pct": 0.25443732338437103,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.25443732338437103,
            "retail_notional_pct": 0.08731298092265118,
            "mixed_notional_pct": 0.17159688725208952,
            "instit_notional_pct": 0.48892103299274914,
            "ambiguous_notional_pct": 0.25216909883251015,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.25216909883251015
          },
          "run_composition": {
            "retail_pct": 0.556,
            "mixed_pct": 0.144,
            "instit_pct": 0.168,
            "ambiguous_pct": 0.132,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.132,
            "retail_notional_pct": 0.08731298092265118,
            "mixed_notional_pct": 0.17159688725208952,
            "instit_notional_pct": 0.48892103299274914,
            "unclear_notional_pct": 0.25216909883251015
          },
          "counts": {
            "trades": {
              "retail": 147,
              "mixed": 69,
              "institutional": 166,
              "ambiguous": 87,
              "unobservable": 0,
              "unclear": 87
            },
            "runs": {
              "retail": 139,
              "mixed": 36,
              "institutional": 42,
              "ambiguous": 33,
              "unobservable": 0,
              "unclear": 33
            }
          },
          "confidence": {
            "high": 0.108,
            "medium": 0.336,
            "low": 0.28,
            "na": 0.276
          },
          "confidence_counts": {
            "high": 27,
            "medium": 84,
            "low": 70,
            "na": 69
          },
          "trade_confidence": {
            "high": 0.057569296375266525,
            "medium": 0.3049040511727079,
            "low": 0.3049040511727079,
            "na": 0.3326226012793177
          },
          "trade_confidence_counts": {
            "high": 27,
            "medium": 143,
            "low": 143,
            "na": 156
          },
          "observability": {
            "avg_feature_coverage": 0.856,
            "observable_run_pct": 1.0,
            "ambiguous_run_pct": 0.132,
            "unobservable_run_pct": 0.0
          },
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "dominant_share": 0.556,
          "dominance_gap": 0.388,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "MULTI_FILL_SINGLE_PRICE": 256,
              "SINGLE_FILL": 211,
              "WALK_BOOK": 2
            },
            "d2_information": {
              "NEUTRAL_OR_REVERSING": 377,
              "PERSISTENT_POSITIVE_IMPACT": 62,
              "MOMENTUM_REACTIVE": 29,
              "UNOBSERVABLE": 1
            },
            "d3_urgency": {
              "IMMEDIATE": 250
            },
            "participant_confidence": {
              "MEDIUM": 84,
              "LOW": 70,
              "NA": 69,
              "HIGH": 27
            }
          },
          "trade_size": {
            "avg": 2545.6908315565033,
            "median": 1100.0
          },
          "run_size": {
            "avg": 4775.716,
            "median": 1606.0,
            "avg_length": 1.164
          },
          "recent_trades": [
            {
              "trade_id": "BMLL-101",
              "timestamp": "2026-03-10T08:50:11.716800",
              "price": 0.22,
              "size": 6200.0,
              "notional": 1364.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 3593,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-100",
              "timestamp": "2026-03-10T08:48:41.648600",
              "price": 0.22,
              "size": 20000.0,
              "notional": 4400.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 3592,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-99",
              "timestamp": "2026-03-10T08:48:29.345400",
              "price": 0.22,
              "size": 11900.0,
              "notional": 2618.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 3591,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-98",
              "timestamp": "2026-03-10T08:48:29.345100",
              "price": 0.22,
              "size": 8100.0,
              "notional": 1782.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 3591,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-97",
              "timestamp": "2026-03-10T08:48:29.345100",
              "price": 0.22,
              "size": 20000.0,
              "notional": 4400.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 3591,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-96",
              "timestamp": "2026-03-10T08:48:29.345100",
              "price": 0.22,
              "size": 15800.0,
              "notional": 3476.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 3591,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-95",
              "timestamp": "2026-03-10T08:44:30.011400",
              "price": 0.22,
              "size": 4200.0,
              "notional": 924.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 3590,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-94",
              "timestamp": "2026-03-10T08:44:23.653300",
              "price": 0.22,
              "size": 2700.0,
              "notional": 594.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 3589,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-93",
              "timestamp": "2026-03-10T08:44:23.623100",
              "price": 0.22,
              "size": 8900.0,
              "notional": 1958.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 3589,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-92",
              "timestamp": "2026-03-10T08:44:23.593000",
              "price": 0.22,
              "size": 11100.0,
              "notional": 2442.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 3589,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-91",
              "timestamp": "2026-03-10T08:43:45.063700",
              "price": 0.22,
              "size": 2700.0,
              "notional": 594.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 3588,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-90",
              "timestamp": "2026-03-10T08:43:45.063700",
              "price": 0.22,
              "size": 27000.0,
              "notional": 5940.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 3588,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-89",
              "timestamp": "2026-03-10T08:28:00.596000",
              "price": 0.225,
              "size": 300.0,
              "notional": 67.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 3587,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-88",
              "timestamp": "2026-03-10T08:07:02.575200",
              "price": 0.22,
              "size": 27000.0,
              "notional": 5940.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 3586,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-87",
              "timestamp": "2026-03-10T08:06:43.331000",
              "price": 0.22,
              "size": 300.0,
              "notional": 66.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 3585,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-86",
              "timestamp": "2026-03-10T08:06:43.330900",
              "price": 0.22,
              "size": 100.0,
              "notional": 22.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 3585,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-85",
              "timestamp": "2026-03-10T08:06:43.330800",
              "price": 0.22,
              "size": 300.0,
              "notional": 66.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 3585,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-84",
              "timestamp": "2026-03-10T08:06:43.330700",
              "price": 0.22,
              "size": 100.0,
              "notional": 22.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 3585,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-83",
              "timestamp": "2026-03-10T08:06:43.330700",
              "price": 0.22,
              "size": 100.0,
              "notional": 22.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 3585,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-82",
              "timestamp": "2026-03-10T08:06:43.330400",
              "price": 0.22,
              "size": 100.0,
              "notional": 22.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 3585,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-81",
              "timestamp": "2026-03-10T08:06:40.133000",
              "price": 0.22,
              "size": 30000.0,
              "notional": 6600.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 3585,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-80",
              "timestamp": "2026-03-10T08:06:40.133000",
              "price": 0.22,
              "size": 20000.0,
              "notional": 4400.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 3585,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-79",
              "timestamp": "2026-03-10T06:12:24.870000",
              "price": 0.225,
              "size": 20000.0,
              "notional": 4500.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 3584,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-78",
              "timestamp": "2026-03-10T06:12:24.870000",
              "price": 0.225,
              "size": 4700.0,
              "notional": 1057.5,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 3584,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-77",
              "timestamp": "2026-03-10T06:12:09.594600",
              "price": 0.225,
              "size": 72200.0,
              "notional": 16245.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 3583,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-76",
              "timestamp": "2026-03-10T06:12:09.594600",
              "price": 0.225,
              "size": 177800.0,
              "notional": 40005.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 3583,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-75",
              "timestamp": "2026-03-10T05:43:14.231500",
              "price": 0.22,
              "size": 20000.0,
              "notional": 4400.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 3582,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-74",
              "timestamp": "2026-03-10T05:42:45.574800",
              "price": 0.22,
              "size": 20000.0,
              "notional": 4400.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 3581,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-73",
              "timestamp": "2026-03-10T05:42:40.480600",
              "price": 0.22,
              "size": 10000.0,
              "notional": 2200.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 3580,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-72",
              "timestamp": "2026-03-10T05:42:05.484200",
              "price": 0.22,
              "size": 20000.0,
              "notional": 4400.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 3579,
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
              "retail_pct": 0.31343283582089554,
              "mixed_pct": 0.14712153518123666,
              "instit_pct": 0.35394456289978676,
              "ambiguous_pct": 0.18550106609808104,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.18550106609808104,
              "retail_qty_pct": 0.08723195981013243,
              "mixed_qty_pct": 0.17213674897955414,
              "instit_qty_pct": 0.48619396782594243,
              "ambiguous_qty_pct": 0.25443732338437103,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.25443732338437103,
              "retail_notional_pct": 0.08731298092265118,
              "mixed_notional_pct": 0.17159688725208952,
              "instit_notional_pct": 0.48892103299274914,
              "ambiguous_notional_pct": 0.25216909883251015,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.25216909883251015,
              "run_retail_pct": 0.556,
              "run_mixed_pct": 0.144,
              "run_instit_pct": 0.168,
              "run_unclear_pct": 0.132,
              "avg_trade_size": 2545.6908315565033,
              "avg_run_notional": 4775.716,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.108,
              "medium_confidence_pct": 0.336,
              "low_confidence_pct": 0.28,
              "na_confidence_pct": 0.276,
              "avg_feature_coverage": 0.856,
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
              "retail_pct": 0.38166980539861894,
              "mixed_pct": 0.15128688010043942,
              "instit_pct": 0.30947897049591966,
              "ambiguous_pct": 0.15128688010043942,
              "unobservable_pct": 0.006277463904582548,
              "unclear_pct": 0.15756434400502198,
              "retail_qty_pct": 0.06444143630664007,
              "mixed_qty_pct": 0.16012396694214875,
              "instit_qty_pct": 0.5540039897406669,
              "ambiguous_qty_pct": 0.20867768595041322,
              "unobservable_qty_pct": 0.012752921060131091,
              "unclear_qty_pct": 0.22143060701054432,
              "retail_notional_pct": 0.06422296669681381,
              "mixed_notional_pct": 0.16002153574882375,
              "instit_notional_pct": 0.5527164341919211,
              "ambiguous_notional_pct": 0.2107183234278828,
              "unobservable_notional_pct": 0.012320739934558528,
              "unclear_notional_pct": 0.22303906336244134,
              "run_retail_pct": 0.70267131242741,
              "run_mixed_pct": 0.11962833914053426,
              "run_instit_pct": 0.10685249709639953,
              "run_unclear_pct": 0.07084785133565621,
              "avg_trade_size": 1873.7002510985562,
              "avg_run_notional": 3466.671893147503,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.45993031358885017,
              "medium_confidence_pct": 0.281068524970964,
              "low_confidence_pct": 0.06852497096399536,
              "na_confidence_pct": 0.19047619047619047,
              "avg_feature_coverage": 0.8645180023228801,
              "observable_run_pct": 0.9988385598141696,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "NXR",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.05263157894736842,
              "mixed_pct": 0.10526315789473684,
              "instit_pct": 0.47368421052631576,
              "ambiguous_pct": 0.3684210526315789,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.3684210526315789,
              "retail_qty_pct": 0.02344273275284662,
              "mixed_qty_pct": 0.06697923643670463,
              "instit_qty_pct": 0.5492297387809779,
              "ambiguous_qty_pct": 0.3603482920294709,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.3603482920294709,
              "retail_notional_pct": 0.023800902579682242,
              "mixed_notional_pct": 0.06782594872428928,
              "instit_notional_pct": 0.546767228055921,
              "ambiguous_notional_pct": 0.3616059206401074,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.3616059206401074,
              "run_retail_pct": 0.07692307692307693,
              "run_mixed_pct": 0.07692307692307693,
              "run_instit_pct": 0.38461538461538464,
              "run_unclear_pct": 0.46153846153846156,
              "avg_trade_size": 2979.7631578947367,
              "avg_run_notional": 4355.038461538462,
              "dominant_bucket": "AMBIGUOUS",
              "dominant_label": "Mixed, mostly unclassified",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.46153846153846156,
              "na_confidence_pct": 0.5384615384615384,
              "avg_feature_coverage": 0.8269230769230768,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "QS9",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.2434325744308231,
              "mixed_pct": 0.0647985989492119,
              "instit_pct": 0.329246935201401,
              "ambiguous_pct": 0.36252189141856395,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.36252189141856395,
              "retail_qty_pct": 0.08280329883940313,
              "mixed_qty_pct": 0.052544880224115256,
              "instit_qty_pct": 0.47733834543479503,
              "ambiguous_qty_pct": 0.3873134755016866,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.3873134755016866,
              "retail_notional_pct": 0.0828345513050364,
              "mixed_notional_pct": 0.05172937625284688,
              "instit_notional_pct": 0.4768106896800443,
              "ambiguous_notional_pct": 0.38862538276207237,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.38862538276207237,
              "run_retail_pct": 0.4329896907216495,
              "run_mixed_pct": 0.061855670103092786,
              "run_instit_pct": 0.15463917525773196,
              "run_unclear_pct": 0.35051546391752575,
              "avg_trade_size": 2699.9803852889668,
              "avg_run_notional": 5297.899656357387,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Mixed, leaning retail-like",
              "high_confidence_pct": 0.030927835051546393,
              "medium_confidence_pct": 0.3402061855670103,
              "low_confidence_pct": 0.21649484536082475,
              "na_confidence_pct": 0.41237113402061853,
              "avg_feature_coverage": 0.8273195876288659,
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
              "retail_pct": 0.7045454545454546,
              "mixed_pct": 0.14488636363636365,
              "instit_pct": 0.07954545454545454,
              "ambiguous_pct": 0.07102272727272728,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.07102272727272728,
              "retail_qty_pct": 0.12401013620525815,
              "mixed_qty_pct": 0.08188153310104529,
              "instit_qty_pct": 0.47339246119733924,
              "ambiguous_qty_pct": 0.3207158694963573,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.3207158694963573,
              "retail_notional_pct": 0.12471773292332354,
              "mixed_notional_pct": 0.08303083551054696,
              "instit_notional_pct": 0.4757963207016408,
              "ambiguous_notional_pct": 0.3164551108644887,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.3164551108644887,
              "run_retail_pct": 0.7784810126582279,
              "run_mixed_pct": 0.14240506329113925,
              "run_instit_pct": 0.028481012658227847,
              "run_unclear_pct": 0.05063291139240506,
              "avg_trade_size": 368.61647727272725,
              "avg_run_notional": 410.6107594936709,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.6234177215189873,
              "medium_confidence_pct": 0.14873417721518986,
              "low_confidence_pct": 0.03481012658227848,
              "na_confidence_pct": 0.1930379746835443,
              "avg_feature_coverage": 0.8504746835443037,
              "observable_run_pct": 1.0,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "9MT",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.32644628099173556,
              "mixed_pct": 0.07162534435261708,
              "instit_pct": 0.27548209366391185,
              "ambiguous_pct": 0.3002754820936639,
              "unobservable_pct": 0.026170798898071626,
              "unclear_pct": 0.3264462809917355,
              "retail_qty_pct": 0.055222630324118824,
              "mixed_qty_pct": 0.062310715896642825,
              "instit_qty_pct": 0.4703266963077518,
              "ambiguous_qty_pct": 0.36200786133127133,
              "unobservable_qty_pct": 0.05013209614021522,
              "unclear_qty_pct": 0.4121399574714866,
              "retail_notional_pct": 0.05489527709129648,
              "mixed_notional_pct": 0.060749999628035414,
              "instit_notional_pct": 0.471547685115614,
              "ambiguous_notional_pct": 0.363922336770782,
              "unobservable_notional_pct": 0.04888470139427204,
              "unclear_notional_pct": 0.41280703816505404,
              "run_retail_pct": 0.5111111111111111,
              "run_mixed_pct": 0.057777777777777775,
              "run_instit_pct": 0.14444444444444443,
              "run_unclear_pct": 0.2866666666666667,
              "avg_trade_size": 1851.534435261708,
              "avg_run_notional": 2987.1422222222222,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.0022222222222222222,
              "medium_confidence_pct": 0.37555555555555553,
              "low_confidence_pct": 0.2777777777777778,
              "na_confidence_pct": 0.34444444444444444,
              "avg_feature_coverage": 0.832222222222222,
              "observable_run_pct": 0.9911111111111112,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "LVR",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.17307692307692307,
              "mixed_pct": 0.038461538461538464,
              "instit_pct": 0.28846153846153844,
              "ambiguous_pct": 0.46153846153846156,
              "unobservable_pct": 0.038461538461538464,
              "unclear_pct": 0.5,
              "retail_qty_pct": 0.06278366111951589,
              "mixed_qty_pct": 0.0453857791225416,
              "instit_qty_pct": 0.4394856278366112,
              "ambiguous_qty_pct": 0.41376701966717094,
              "unobservable_qty_pct": 0.038577912254160365,
              "unclear_qty_pct": 0.4523449319213313,
              "retail_notional_pct": 0.06280254089363158,
              "mixed_notional_pct": 0.044807543502906194,
              "instit_notional_pct": 0.4404455561353944,
              "ambiguous_notional_pct": 0.4131651400910547,
              "unobservable_notional_pct": 0.03877921937701319,
              "unclear_notional_pct": 0.4519443594680679,
              "run_retail_pct": 0.2727272727272727,
              "run_mixed_pct": 0.06060606060606061,
              "run_instit_pct": 0.18181818181818182,
              "run_unclear_pct": 0.48484848484848486,
              "avg_trade_size": 2137.346153846154,
              "avg_run_notional": 3367.939393939394,
              "dominant_bucket": "AMBIGUOUS",
              "dominant_label": "Unclassified Flow",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.45454545454545453,
              "na_confidence_pct": 0.5454545454545454,
              "avg_feature_coverage": 0.8196969696969698,
              "observable_run_pct": 0.9696969696969697,
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
          "n_trades": 949,
          "n_runs": 498,
          "n_trade_days": 10,
          "first_trade_date": "2026-02-25",
          "last_trade_date": "2026-03-10",
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
            "retail_pct": 0.30031612223393045,
            "mixed_pct": 0.1559536354056902,
            "instit_pct": 0.38883034773445735,
            "ambiguous_pct": 0.15489989462592202,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.15489989462592202,
            "retail_qty_pct": 0.07260137011664507,
            "mixed_qty_pct": 0.17285687835586003,
            "instit_qty_pct": 0.5843436400666543,
            "ambiguous_qty_pct": 0.17019811146084057,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.17019811146084057,
            "retail_notional_pct": 0.07230874933427653,
            "mixed_notional_pct": 0.17251033493669882,
            "instit_notional_pct": 0.5895476645497989,
            "ambiguous_notional_pct": 0.16563325117922573,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.16563325117922573
          },
          "run_composition": {
            "retail_pct": 0.5461847389558233,
            "mixed_pct": 0.15461847389558234,
            "instit_pct": 0.17269076305220885,
            "ambiguous_pct": 0.12650602409638553,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.12650602409638553,
            "retail_notional_pct": 0.07230874933427653,
            "mixed_notional_pct": 0.17251033493669882,
            "instit_notional_pct": 0.5895476645497989,
            "unclear_notional_pct": 0.16563325117922573
          },
          "counts": {
            "trades": {
              "retail": 285,
              "mixed": 148,
              "institutional": 369,
              "ambiguous": 147,
              "unobservable": 0,
              "unclear": 147
            },
            "runs": {
              "retail": 272,
              "mixed": 77,
              "institutional": 86,
              "ambiguous": 63,
              "unobservable": 0,
              "unclear": 63
            }
          },
          "confidence": {
            "high": 0.0963855421686747,
            "medium": 0.3714859437751004,
            "low": 0.25100401606425704,
            "na": 0.28112449799196787
          },
          "confidence_counts": {
            "high": 48,
            "medium": 185,
            "low": 125,
            "na": 140
          },
          "trade_confidence": {
            "high": 0.05690200210748156,
            "medium": 0.3761854583772392,
            "low": 0.256059009483667,
            "na": 0.3108535300316122
          },
          "trade_confidence_counts": {
            "high": 54,
            "medium": 357,
            "low": 243,
            "na": 295
          },
          "observability": {
            "avg_feature_coverage": 0.8545180722891565,
            "observable_run_pct": 1.0,
            "ambiguous_run_pct": 0.12650602409638553,
            "unobservable_run_pct": 0.0
          },
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "dominant_share": 0.5461847389558233,
          "dominance_gap": 0.37349397590361444,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "MULTI_FILL_SINGLE_PRICE": 521,
              "SINGLE_FILL": 418,
              "WALK_BOOK": 10
            },
            "d2_information": {
              "NEUTRAL_OR_REVERSING": 731,
              "PERSISTENT_POSITIVE_IMPACT": 163,
              "MOMENTUM_REACTIVE": 54,
              "UNOBSERVABLE": 1
            },
            "d3_urgency": {
              "IMMEDIATE": 497,
              "ADAPTIVE": 1
            },
            "participant_confidence": {
              "MEDIUM": 185,
              "NA": 140,
              "LOW": 125,
              "HIGH": 48
            }
          },
          "trade_size": {
            "avg": 3369.4931506849316,
            "median": 1543.5
          },
          "run_size": {
            "avg": 6420.981927710844,
            "median": 1943.0,
            "avg_length": 1.1686746987951808
          },
          "recent_trades": [
            {
              "trade_id": "BMLL-101",
              "timestamp": "2026-03-10T08:50:11.716800",
              "price": 0.22,
              "size": 6200.0,
              "notional": 1364.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 3593,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-100",
              "timestamp": "2026-03-10T08:48:41.648600",
              "price": 0.22,
              "size": 20000.0,
              "notional": 4400.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 3592,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-99",
              "timestamp": "2026-03-10T08:48:29.345400",
              "price": 0.22,
              "size": 11900.0,
              "notional": 2618.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 3591,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-98",
              "timestamp": "2026-03-10T08:48:29.345100",
              "price": 0.22,
              "size": 8100.0,
              "notional": 1782.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 3591,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-97",
              "timestamp": "2026-03-10T08:48:29.345100",
              "price": 0.22,
              "size": 20000.0,
              "notional": 4400.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 3591,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-96",
              "timestamp": "2026-03-10T08:48:29.345100",
              "price": 0.22,
              "size": 15800.0,
              "notional": 3476.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 3591,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-95",
              "timestamp": "2026-03-10T08:44:30.011400",
              "price": 0.22,
              "size": 4200.0,
              "notional": 924.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 3590,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-94",
              "timestamp": "2026-03-10T08:44:23.653300",
              "price": 0.22,
              "size": 2700.0,
              "notional": 594.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 3589,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-93",
              "timestamp": "2026-03-10T08:44:23.623100",
              "price": 0.22,
              "size": 8900.0,
              "notional": 1958.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 3589,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-92",
              "timestamp": "2026-03-10T08:44:23.593000",
              "price": 0.22,
              "size": 11100.0,
              "notional": 2442.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 3589,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-91",
              "timestamp": "2026-03-10T08:43:45.063700",
              "price": 0.22,
              "size": 2700.0,
              "notional": 594.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 3588,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-90",
              "timestamp": "2026-03-10T08:43:45.063700",
              "price": 0.22,
              "size": 27000.0,
              "notional": 5940.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 3588,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-89",
              "timestamp": "2026-03-10T08:28:00.596000",
              "price": 0.225,
              "size": 300.0,
              "notional": 67.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 3587,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-88",
              "timestamp": "2026-03-10T08:07:02.575200",
              "price": 0.22,
              "size": 27000.0,
              "notional": 5940.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 3586,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-87",
              "timestamp": "2026-03-10T08:06:43.331000",
              "price": 0.22,
              "size": 300.0,
              "notional": 66.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 3585,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-86",
              "timestamp": "2026-03-10T08:06:43.330900",
              "price": 0.22,
              "size": 100.0,
              "notional": 22.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 3585,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-85",
              "timestamp": "2026-03-10T08:06:43.330800",
              "price": 0.22,
              "size": 300.0,
              "notional": 66.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 3585,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-84",
              "timestamp": "2026-03-10T08:06:43.330700",
              "price": 0.22,
              "size": 100.0,
              "notional": 22.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 3585,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-83",
              "timestamp": "2026-03-10T08:06:43.330700",
              "price": 0.22,
              "size": 100.0,
              "notional": 22.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 3585,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-82",
              "timestamp": "2026-03-10T08:06:43.330400",
              "price": 0.22,
              "size": 100.0,
              "notional": 22.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 3585,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-81",
              "timestamp": "2026-03-10T08:06:40.133000",
              "price": 0.22,
              "size": 30000.0,
              "notional": 6600.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 3585,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-80",
              "timestamp": "2026-03-10T08:06:40.133000",
              "price": 0.22,
              "size": 20000.0,
              "notional": 4400.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 3585,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-79",
              "timestamp": "2026-03-10T06:12:24.870000",
              "price": 0.225,
              "size": 20000.0,
              "notional": 4500.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 3584,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-78",
              "timestamp": "2026-03-10T06:12:24.870000",
              "price": 0.225,
              "size": 4700.0,
              "notional": 1057.5,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 3584,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-77",
              "timestamp": "2026-03-10T06:12:09.594600",
              "price": 0.225,
              "size": 72200.0,
              "notional": 16245.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 3583,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-76",
              "timestamp": "2026-03-10T06:12:09.594600",
              "price": 0.225,
              "size": 177800.0,
              "notional": 40005.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 3583,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-75",
              "timestamp": "2026-03-10T05:43:14.231500",
              "price": 0.22,
              "size": 20000.0,
              "notional": 4400.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 3582,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-74",
              "timestamp": "2026-03-10T05:42:45.574800",
              "price": 0.22,
              "size": 20000.0,
              "notional": 4400.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 3581,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-73",
              "timestamp": "2026-03-10T05:42:40.480600",
              "price": 0.22,
              "size": 10000.0,
              "notional": 2200.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 3580,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-72",
              "timestamp": "2026-03-10T05:42:05.484200",
              "price": 0.22,
              "size": 20000.0,
              "notional": 4400.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 3579,
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
              "retail_pct": 0.30031612223393045,
              "mixed_pct": 0.1559536354056902,
              "instit_pct": 0.38883034773445735,
              "ambiguous_pct": 0.15489989462592202,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.15489989462592202,
              "retail_qty_pct": 0.07260137011664507,
              "mixed_qty_pct": 0.17285687835586003,
              "instit_qty_pct": 0.5843436400666543,
              "ambiguous_qty_pct": 0.17019811146084057,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.17019811146084057,
              "retail_notional_pct": 0.07230874933427653,
              "mixed_notional_pct": 0.17251033493669882,
              "instit_notional_pct": 0.5895476645497989,
              "ambiguous_notional_pct": 0.16563325117922573,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.16563325117922573,
              "run_retail_pct": 0.5461847389558233,
              "run_mixed_pct": 0.15461847389558234,
              "run_instit_pct": 0.17269076305220885,
              "run_unclear_pct": 0.12650602409638553,
              "avg_trade_size": 3369.4931506849316,
              "avg_run_notional": 6420.981927710844,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.0963855421686747,
              "medium_confidence_pct": 0.3714859437751004,
              "low_confidence_pct": 0.25100401606425704,
              "na_confidence_pct": 0.28112449799196787,
              "avg_feature_coverage": 0.8545180722891565,
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
              "retail_pct": 0.03571428571428571,
              "mixed_pct": 0.10714285714285714,
              "instit_pct": 0.5,
              "ambiguous_pct": 0.2857142857142857,
              "unobservable_pct": 0.07142857142857142,
              "unclear_pct": 0.3571428571428571,
              "retail_qty_pct": 0.017543859649122806,
              "mixed_qty_pct": 0.0506265664160401,
              "instit_qty_pct": 0.6115288220551378,
              "ambiguous_qty_pct": 0.27017543859649124,
              "unobservable_qty_pct": 0.05012531328320802,
              "unclear_qty_pct": 0.32030075187969925,
              "retail_notional_pct": 0.017571083017662362,
              "mixed_notional_pct": 0.05060732704382013,
              "instit_notional_pct": 0.6121713164294517,
              "ambiguous_notional_pct": 0.26747817469372853,
              "unobservable_notional_pct": 0.052172098815337374,
              "unclear_notional_pct": 0.3196502735090659,
              "run_retail_pct": 0.05263157894736842,
              "run_mixed_pct": 0.10526315789473684,
              "run_instit_pct": 0.42105263157894735,
              "run_unclear_pct": 0.42105263157894735,
              "avg_trade_size": 2738.875,
              "avg_run_notional": 4036.2368421052633,
              "dominant_bucket": "INSTITUTIONAL",
              "dominant_label": "Mixed, leaning institution-like",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.47368421052631576,
              "na_confidence_pct": 0.5263157894736842,
              "avg_feature_coverage": 0.8131578947368422,
              "observable_run_pct": 0.9473684210526316,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "LVR",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.1919191919191919,
              "mixed_pct": 0.030303030303030304,
              "instit_pct": 0.3434343434343434,
              "ambiguous_pct": 0.3838383838383838,
              "unobservable_pct": 0.050505050505050504,
              "unclear_pct": 0.4343434343434343,
              "retail_qty_pct": 0.07694459988808058,
              "mixed_qty_pct": 0.01706771124790151,
              "instit_qty_pct": 0.5881365416899832,
              "ambiguous_qty_pct": 0.2921096810296586,
              "unobservable_qty_pct": 0.02574146614437605,
              "unclear_qty_pct": 0.3178511471740347,
              "retail_notional_pct": 0.07850714501415437,
              "mixed_notional_pct": 0.01637806160101931,
              "instit_notional_pct": 0.5892000394029484,
              "ambiguous_notional_pct": 0.29037389199393454,
              "unobservable_notional_pct": 0.025540861987943343,
              "unclear_notional_pct": 0.3159147539818779,
              "run_retail_pct": 0.30158730158730157,
              "run_mixed_pct": 0.047619047619047616,
              "run_instit_pct": 0.20634920634920634,
              "run_unclear_pct": 0.4444444444444444,
              "avg_trade_size": 3127.489898989899,
              "avg_run_notional": 4914.626984126984,
              "dominant_bucket": "AMBIGUOUS",
              "dominant_label": "Unclassified Flow",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.5079365079365079,
              "na_confidence_pct": 0.49206349206349204,
              "avg_feature_coverage": 0.8134920634920636,
              "observable_run_pct": 0.9682539682539683,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "9MT",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.2988826815642458,
              "mixed_pct": 0.10558659217877095,
              "instit_pct": 0.31452513966480444,
              "ambiguous_pct": 0.2664804469273743,
              "unobservable_pct": 0.01452513966480447,
              "unclear_pct": 0.2810055865921788,
              "retail_qty_pct": 0.05158884745951361,
              "mixed_qty_pct": 0.07482330680616618,
              "instit_qty_pct": 0.5450219823028549,
              "ambiguous_qty_pct": 0.3036340363960154,
              "unobservable_qty_pct": 0.024931827035449942,
              "unclear_qty_pct": 0.3285658634314653,
              "retail_notional_pct": 0.0511348096781271,
              "mixed_notional_pct": 0.07600933715547659,
              "instit_notional_pct": 0.5504651673026915,
              "ambiguous_notional_pct": 0.3001501282240342,
              "unobservable_notional_pct": 0.022240557639670682,
              "unclear_notional_pct": 0.3223906858637049,
              "run_retail_pct": 0.5222672064777328,
              "run_mixed_pct": 0.08502024291497975,
              "run_instit_pct": 0.14676113360323886,
              "run_unclear_pct": 0.24595141700404857,
              "avg_trade_size": 1941.5432960893854,
              "avg_run_notional": 3517.5733805668015,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.016194331983805668,
              "medium_confidence_pct": 0.3917004048582996,
              "low_confidence_pct": 0.2611336032388664,
              "na_confidence_pct": 0.3309716599190283,
              "avg_feature_coverage": 0.8423076923076921,
              "observable_run_pct": 0.9939271255060729,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "ITS",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.2721737699522791,
              "mixed_pct": 0.15287148263946027,
              "instit_pct": 0.3347046239921014,
              "ambiguous_pct": 0.23860457462563764,
              "unobservable_pct": 0.001645548790521639,
              "unclear_pct": 0.24025012341615928,
              "retail_qty_pct": 0.08317583679236952,
              "mixed_qty_pct": 0.13075156760575818,
              "instit_qty_pct": 0.4911286761458977,
              "ambiguous_qty_pct": 0.29336306632517883,
              "unobservable_qty_pct": 0.0015808531307957255,
              "unclear_qty_pct": 0.29494391945597453,
              "retail_notional_pct": 0.08361153796844145,
              "mixed_notional_pct": 0.13140834637937274,
              "instit_notional_pct": 0.4921666191426174,
              "ambiguous_notional_pct": 0.29127649666013383,
              "unobservable_notional_pct": 0.001536999849434617,
              "unclear_notional_pct": 0.29281349650956845,
              "run_retail_pct": 0.5831052014078999,
              "run_mixed_pct": 0.1388345717637857,
              "run_instit_pct": 0.12710207274149393,
              "run_unclear_pct": 0.15095815408682048,
              "avg_trade_size": 3937.219433931216,
              "avg_run_notional": 9357.247751271021,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.16699256941728588,
              "medium_confidence_pct": 0.3551036370746969,
              "low_confidence_pct": 0.18811106765741104,
              "na_confidence_pct": 0.28979272585060617,
              "avg_feature_coverage": 0.8623386781384433,
              "observable_run_pct": 0.9996089166992569,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "QS9",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.2114604462474645,
              "mixed_pct": 0.07860040567951318,
              "instit_pct": 0.36815415821501013,
              "ambiguous_pct": 0.3407707910750507,
              "unobservable_pct": 0.0010141987829614604,
              "unclear_pct": 0.34178498985801214,
              "retail_qty_pct": 0.0622969020473945,
              "mixed_qty_pct": 0.06603832149465767,
              "instit_qty_pct": 0.47224855249806,
              "ambiguous_qty_pct": 0.3994138363278219,
              "unobservable_qty_pct": 2.387632065898645e-06,
              "unclear_qty_pct": 0.3994162239598878,
              "retail_notional_pct": 0.06123054884313587,
              "mixed_notional_pct": 0.06637467912490533,
              "instit_notional_pct": 0.47322292608706995,
              "ambiguous_notional_pct": 0.3991693779217322,
              "unobservable_notional_pct": 2.468023156691256e-06,
              "unclear_notional_pct": 0.39917184594488886,
              "run_retail_pct": 0.40311804008908686,
              "run_mixed_pct": 0.07683741648106904,
              "run_instit_pct": 0.18819599109131402,
              "run_unclear_pct": 0.33184855233853006,
              "avg_trade_size": 2568.348022312373,
              "avg_run_notional": 5640.069376391983,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Mixed, leaning retail-like",
              "high_confidence_pct": 0.013363028953229399,
              "medium_confidence_pct": 0.3106904231625835,
              "low_confidence_pct": 0.267260579064588,
              "na_confidence_pct": 0.4086859688195991,
              "avg_feature_coverage": 0.8365256124721602,
              "observable_run_pct": 0.9988864142538976,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "U77",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.6605263157894737,
              "mixed_pct": 0.15263157894736842,
              "instit_pct": 0.07894736842105263,
              "ambiguous_pct": 0.10789473684210527,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.10789473684210527,
              "retail_qty_pct": 0.08859357696567,
              "mixed_qty_pct": 0.07940199335548173,
              "instit_qty_pct": 0.40852713178294575,
              "ambiguous_qty_pct": 0.42347729789590255,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.42347729789590255,
              "retail_notional_pct": 0.087912058712554,
              "mixed_notional_pct": 0.07999904342326926,
              "instit_notional_pct": 0.4085964362202465,
              "ambiguous_notional_pct": 0.42349246164393023,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.42349246164393023,
              "run_retail_pct": 0.7337278106508875,
              "run_mixed_pct": 0.14497041420118342,
              "run_instit_pct": 0.03254437869822485,
              "run_unclear_pct": 0.08875739644970414,
              "avg_trade_size": 495.18684210526317,
              "avg_run_notional": 556.7189349112426,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.5828402366863905,
              "medium_confidence_pct": 0.1390532544378698,
              "low_confidence_pct": 0.04437869822485207,
              "na_confidence_pct": 0.23372781065088757,
              "avg_feature_coverage": 0.8491124260355027,
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
              "avg_trade_size": 300.0,
              "avg_run_notional": 300.0,
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
        "30d": {
          "valid": true,
          "currency": "SGD",
          "n_trades": 2546,
          "n_runs": 1228,
          "n_trade_days": 21,
          "first_trade_date": "2026-02-06",
          "last_trade_date": "2026-03-10",
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
            "retail_pct": 0.2882953652788688,
            "mixed_pct": 0.16732128829536527,
            "instit_pct": 0.3684210526315789,
            "ambiguous_pct": 0.17596229379418696,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.17596229379418696,
            "retail_qty_pct": 0.08056792215203079,
            "mixed_qty_pct": 0.17013531891573927,
            "instit_qty_pct": 0.4918212875281862,
            "ambiguous_qty_pct": 0.25747547140404375,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.25747547140404375,
            "retail_notional_pct": 0.08030906783886742,
            "mixed_notional_pct": 0.1709991653216173,
            "instit_notional_pct": 0.4929789460188268,
            "ambiguous_notional_pct": 0.25571282082068847,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.25571282082068847
          },
          "run_composition": {
            "retail_pct": 0.5667752442996743,
            "mixed_pct": 0.14169381107491857,
            "instit_pct": 0.15309446254071662,
            "ambiguous_pct": 0.13843648208469056,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.13843648208469056,
            "retail_notional_pct": 0.08030906783886742,
            "mixed_notional_pct": 0.1709991653216173,
            "instit_notional_pct": 0.4929789460188268,
            "unclear_notional_pct": 0.25571282082068847
          },
          "counts": {
            "trades": {
              "retail": 734,
              "mixed": 426,
              "institutional": 938,
              "ambiguous": 448,
              "unobservable": 0,
              "unclear": 448
            },
            "runs": {
              "retail": 696,
              "mixed": 174,
              "institutional": 188,
              "ambiguous": 170,
              "unobservable": 0,
              "unclear": 170
            }
          },
          "confidence": {
            "high": 0.061074918566775244,
            "medium": 0.3941368078175896,
            "low": 0.26465798045602607,
            "na": 0.28013029315960913
          },
          "confidence_counts": {
            "high": 75,
            "medium": 484,
            "low": 325,
            "na": 344
          },
          "trade_confidence": {
            "high": 0.03260015710919089,
            "medium": 0.37431264728986646,
            "low": 0.2498036135113904,
            "na": 0.34328358208955223
          },
          "trade_confidence_counts": {
            "high": 83,
            "medium": 953,
            "low": 636,
            "na": 874
          },
          "observability": {
            "avg_feature_coverage": 0.8493892508143323,
            "observable_run_pct": 1.0,
            "ambiguous_run_pct": 0.13843648208469056,
            "unobservable_run_pct": 0.0
          },
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "dominant_share": 0.5667752442996743,
          "dominance_gap": 0.41368078175895767,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "MULTI_FILL_SINGLE_PRICE": 1495,
              "SINGLE_FILL": 1041,
              "WALK_BOOK": 10
            },
            "d2_information": {
              "NEUTRAL_OR_REVERSING": 1951,
              "PERSISTENT_POSITIVE_IMPACT": 372,
              "MOMENTUM_REACTIVE": 214,
              "SHORT_HORIZON_POSITIVE_IMPACT": 6,
              "UNOBSERVABLE": 3
            },
            "d3_urgency": {
              "IMMEDIATE": 1222,
              "ADAPTIVE": 6
            },
            "participant_confidence": {
              "MEDIUM": 484,
              "NA": 344,
              "LOW": 325,
              "HIGH": 75
            }
          },
          "trade_size": {
            "avg": 3689.959347996858,
            "median": 1464.0
          },
          "run_size": {
            "avg": 7650.355456026059,
            "median": 2200.0,
            "avg_length": 1.1636807817589576
          },
          "recent_trades": [
            {
              "trade_id": "BMLL-101",
              "timestamp": "2026-03-10T08:50:11.716800",
              "price": 0.22,
              "size": 6200.0,
              "notional": 1364.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 3593,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-100",
              "timestamp": "2026-03-10T08:48:41.648600",
              "price": 0.22,
              "size": 20000.0,
              "notional": 4400.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 3592,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-99",
              "timestamp": "2026-03-10T08:48:29.345400",
              "price": 0.22,
              "size": 11900.0,
              "notional": 2618.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 3591,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-98",
              "timestamp": "2026-03-10T08:48:29.345100",
              "price": 0.22,
              "size": 8100.0,
              "notional": 1782.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 3591,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-97",
              "timestamp": "2026-03-10T08:48:29.345100",
              "price": 0.22,
              "size": 20000.0,
              "notional": 4400.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 3591,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-96",
              "timestamp": "2026-03-10T08:48:29.345100",
              "price": 0.22,
              "size": 15800.0,
              "notional": 3476.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 3591,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-95",
              "timestamp": "2026-03-10T08:44:30.011400",
              "price": 0.22,
              "size": 4200.0,
              "notional": 924.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 3590,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-94",
              "timestamp": "2026-03-10T08:44:23.653300",
              "price": 0.22,
              "size": 2700.0,
              "notional": 594.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 3589,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-93",
              "timestamp": "2026-03-10T08:44:23.623100",
              "price": 0.22,
              "size": 8900.0,
              "notional": 1958.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 3589,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-92",
              "timestamp": "2026-03-10T08:44:23.593000",
              "price": 0.22,
              "size": 11100.0,
              "notional": 2442.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 3589,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-91",
              "timestamp": "2026-03-10T08:43:45.063700",
              "price": 0.22,
              "size": 2700.0,
              "notional": 594.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 3588,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-90",
              "timestamp": "2026-03-10T08:43:45.063700",
              "price": 0.22,
              "size": 27000.0,
              "notional": 5940.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 3588,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-89",
              "timestamp": "2026-03-10T08:28:00.596000",
              "price": 0.225,
              "size": 300.0,
              "notional": 67.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 3587,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-88",
              "timestamp": "2026-03-10T08:07:02.575200",
              "price": 0.22,
              "size": 27000.0,
              "notional": 5940.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 3586,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-87",
              "timestamp": "2026-03-10T08:06:43.331000",
              "price": 0.22,
              "size": 300.0,
              "notional": 66.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 3585,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-86",
              "timestamp": "2026-03-10T08:06:43.330900",
              "price": 0.22,
              "size": 100.0,
              "notional": 22.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 3585,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-85",
              "timestamp": "2026-03-10T08:06:43.330800",
              "price": 0.22,
              "size": 300.0,
              "notional": 66.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 3585,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-84",
              "timestamp": "2026-03-10T08:06:43.330700",
              "price": 0.22,
              "size": 100.0,
              "notional": 22.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 3585,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-83",
              "timestamp": "2026-03-10T08:06:43.330700",
              "price": 0.22,
              "size": 100.0,
              "notional": 22.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 3585,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-82",
              "timestamp": "2026-03-10T08:06:43.330400",
              "price": 0.22,
              "size": 100.0,
              "notional": 22.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 3585,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-81",
              "timestamp": "2026-03-10T08:06:40.133000",
              "price": 0.22,
              "size": 30000.0,
              "notional": 6600.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 3585,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-80",
              "timestamp": "2026-03-10T08:06:40.133000",
              "price": 0.22,
              "size": 20000.0,
              "notional": 4400.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 3585,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-79",
              "timestamp": "2026-03-10T06:12:24.870000",
              "price": 0.225,
              "size": 20000.0,
              "notional": 4500.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 3584,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-78",
              "timestamp": "2026-03-10T06:12:24.870000",
              "price": 0.225,
              "size": 4700.0,
              "notional": 1057.5,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 3584,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "PERSISTENT_POSITIVE_IMPACT",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-77",
              "timestamp": "2026-03-10T06:12:09.594600",
              "price": 0.225,
              "size": 72200.0,
              "notional": 16245.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 3583,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-76",
              "timestamp": "2026-03-10T06:12:09.594600",
              "price": 0.225,
              "size": 177800.0,
              "notional": 40005.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": 3583,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-75",
              "timestamp": "2026-03-10T05:43:14.231500",
              "price": 0.22,
              "size": 20000.0,
              "notional": 4400.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 3582,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-74",
              "timestamp": "2026-03-10T05:42:45.574800",
              "price": 0.22,
              "size": 20000.0,
              "notional": 4400.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 3581,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-73",
              "timestamp": "2026-03-10T05:42:40.480600",
              "price": 0.22,
              "size": 10000.0,
              "notional": 2200.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 3580,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-72",
              "timestamp": "2026-03-10T05:42:05.484200",
              "price": 0.22,
              "size": 20000.0,
              "notional": 4400.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 3579,
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
              "retail_pct": 0.2882953652788688,
              "mixed_pct": 0.16732128829536527,
              "instit_pct": 0.3684210526315789,
              "ambiguous_pct": 0.17596229379418696,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.17596229379418696,
              "retail_qty_pct": 0.08056792215203079,
              "mixed_qty_pct": 0.17013531891573927,
              "instit_qty_pct": 0.4918212875281862,
              "ambiguous_qty_pct": 0.25747547140404375,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.25747547140404375,
              "retail_notional_pct": 0.08030906783886742,
              "mixed_notional_pct": 0.1709991653216173,
              "instit_notional_pct": 0.4929789460188268,
              "ambiguous_notional_pct": 0.25571282082068847,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.25571282082068847,
              "run_retail_pct": 0.5667752442996743,
              "run_mixed_pct": 0.14169381107491857,
              "run_instit_pct": 0.15309446254071662,
              "run_unclear_pct": 0.13843648208469056,
              "avg_trade_size": 3689.959347996858,
              "avg_run_notional": 7650.355456026059,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.061074918566775244,
              "medium_confidence_pct": 0.3941368078175896,
              "low_confidence_pct": 0.26465798045602607,
              "na_confidence_pct": 0.28013029315960913,
              "avg_feature_coverage": 0.8493892508143323,
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
              "retail_pct": 0.21862348178137653,
              "mixed_pct": 0.04048582995951417,
              "instit_pct": 0.31983805668016196,
              "ambiguous_pct": 0.39271255060728744,
              "unobservable_pct": 0.02834008097165992,
              "unclear_pct": 0.42105263157894735,
              "retail_qty_pct": 0.06634484465899244,
              "mixed_qty_pct": 0.014977101126377027,
              "instit_qty_pct": 0.5265503156331229,
              "ambiguous_qty_pct": 0.37937863596979826,
              "unobservable_qty_pct": 0.01274910261170937,
              "unclear_qty_pct": 0.3921277385815076,
              "retail_notional_pct": 0.06698783838106129,
              "mixed_notional_pct": 0.014748488389288444,
              "instit_notional_pct": 0.5255954972086665,
              "ambiguous_notional_pct": 0.38028161191265186,
              "unobservable_notional_pct": 0.012386564108331928,
              "unclear_notional_pct": 0.3926681760209838,
              "run_retail_pct": 0.3231707317073171,
              "run_mixed_pct": 0.04878048780487805,
              "run_instit_pct": 0.20121951219512196,
              "run_unclear_pct": 0.4268292682926829,
              "avg_trade_size": 2915.6902834008097,
              "avg_run_notional": 4391.3140243902435,
              "dominant_bucket": "AMBIGUOUS",
              "dominant_label": "Mixed, mostly unclassified",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.524390243902439,
              "na_confidence_pct": 0.47560975609756095,
              "avg_feature_coverage": 0.8170731707317072,
              "observable_run_pct": 0.9817073170731707,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "QS9",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.21780821917808219,
              "mixed_pct": 0.09315068493150686,
              "instit_pct": 0.39095890410958906,
              "ambiguous_pct": 0.29753424657534244,
              "unobservable_pct": 0.000547945205479452,
              "unclear_pct": 0.2980821917808219,
              "retail_qty_pct": 0.05946219148685571,
              "mixed_qty_pct": 0.09357870717315306,
              "instit_qty_pct": 0.5085786359865238,
              "ambiguous_qty_pct": 0.33837917105111587,
              "unobservable_qty_pct": 1.2943023516179427e-06,
              "unclear_qty_pct": 0.3383804653534675,
              "retail_notional_pct": 0.05857105784920402,
              "mixed_notional_pct": 0.09277443149128033,
              "instit_notional_pct": 0.5094680138259952,
              "ambiguous_notional_pct": 0.3391851329099343,
              "unobservable_notional_pct": 1.3639235861047087e-06,
              "unclear_notional_pct": 0.3391864968335204,
              "run_retail_pct": 0.44189016602809705,
              "run_mixed_pct": 0.10025542784163474,
              "run_instit_pct": 0.17496807151979565,
              "run_unclear_pct": 0.2828863346104726,
              "avg_trade_size": 2510.8866575342468,
              "avg_run_notional": 5852.322030651341,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.037675606641123884,
              "medium_confidence_pct": 0.31353767560664114,
              "low_confidence_pct": 0.2656449553001277,
              "na_confidence_pct": 0.3831417624521073,
              "avg_feature_coverage": 0.8440613026819923,
              "observable_run_pct": 0.9993614303959132,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "9MT",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.26175759204514915,
              "mixed_pct": 0.10507927976350444,
              "instit_pct": 0.30529427573233003,
              "ambiguous_pct": 0.31980650362805696,
              "unobservable_pct": 0.00806234883095942,
              "unclear_pct": 0.32786885245901637,
              "retail_qty_pct": 0.057043573325003906,
              "mixed_qty_pct": 0.08259149357072205,
              "instit_qty_pct": 0.4890806392836691,
              "ambiguous_qty_pct": 0.3590764745692123,
              "unobservable_qty_pct": 0.012207819251392577,
              "unclear_qty_pct": 0.3712842938206049,
              "retail_notional_pct": 0.05726872541057771,
              "mixed_notional_pct": 0.08426575234072378,
              "instit_notional_pct": 0.4868433321635764,
              "ambiguous_notional_pct": 0.3616607689816657,
              "unobservable_notional_pct": 0.009961421103456429,
              "unclear_notional_pct": 0.37162219008512215,
              "run_retail_pct": 0.4880636604774536,
              "run_mixed_pct": 0.09283819628647215,
              "run_instit_pct": 0.14058355437665782,
              "run_unclear_pct": 0.27851458885941643,
              "avg_trade_size": 2212.054420854609,
              "avg_run_notional": 4366.607161803713,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.010079575596816976,
              "medium_confidence_pct": 0.386737400530504,
              "low_confidence_pct": 0.23183023872679046,
              "na_confidence_pct": 0.3713527851458886,
              "avg_feature_coverage": 0.8452785145888592,
              "observable_run_pct": 0.9962864721485412,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "ITS",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.2656372934697089,
              "mixed_pct": 0.14103068450039338,
              "instit_pct": 0.31835169158143195,
              "ambiguous_pct": 0.2739968528717545,
              "unobservable_pct": 0.000983477576711251,
              "unclear_pct": 0.27498033044846576,
              "retail_qty_pct": 0.08511710970538218,
              "mixed_qty_pct": 0.11586561855695961,
              "instit_qty_pct": 0.44927837947658056,
              "ambiguous_qty_pct": 0.3488409424960997,
              "unobservable_qty_pct": 0.0008979497649779526,
              "unclear_qty_pct": 0.3497388922610777,
              "retail_notional_pct": 0.08533956580462337,
              "mixed_notional_pct": 0.11757989653141035,
              "instit_notional_pct": 0.4557595217461716,
              "ambiguous_notional_pct": 0.34039392997315876,
              "unobservable_notional_pct": 0.0009270859446359148,
              "unclear_notional_pct": 0.3413210159177947,
              "run_retail_pct": 0.5735329630524028,
              "run_mixed_pct": 0.1357160106254528,
              "run_instit_pct": 0.12533204539966192,
              "run_unclear_pct": 0.1654189809224825,
              "avg_trade_size": 3901.190401258851,
              "avg_run_notional": 9579.160589229654,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.1538275778797392,
              "medium_confidence_pct": 0.36585365853658536,
              "low_confidence_pct": 0.17918377203574015,
              "na_confidence_pct": 0.30113499154793527,
              "avg_feature_coverage": 0.8640545761893261,
              "observable_run_pct": 0.9997585124366095,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "U77",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.6219512195121951,
              "mixed_pct": 0.14146341463414633,
              "instit_pct": 0.1024390243902439,
              "ambiguous_pct": 0.13414634146341464,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.13414634146341464,
              "retail_qty_pct": 0.07988061797752809,
              "mixed_qty_pct": 0.06293890449438203,
              "instit_qty_pct": 0.4143258426966292,
              "ambiguous_qty_pct": 0.44285463483146065,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.44285463483146065,
              "retail_notional_pct": 0.07885599035222689,
              "mixed_notional_pct": 0.06260032436478563,
              "instit_notional_pct": 0.41472948808583193,
              "ambiguous_notional_pct": 0.4438141971971556,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.4438141971971556,
              "run_retail_pct": 0.7058823529411765,
              "run_mixed_pct": 0.13725490196078433,
              "run_instit_pct": 0.04201680672268908,
              "run_unclear_pct": 0.11484593837535013,
              "avg_trade_size": 586.5121951219512,
              "avg_run_notional": 673.5854341736695,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.5518207282913166,
              "medium_confidence_pct": 0.13165266106442577,
              "low_confidence_pct": 0.06442577030812324,
              "na_confidence_pct": 0.25210084033613445,
              "avg_feature_coverage": 0.8453781512605041,
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
              "retail_pct": 0.08888888888888889,
              "mixed_pct": 0.1111111111111111,
              "instit_pct": 0.37777777777777777,
              "ambiguous_pct": 0.28888888888888886,
              "unobservable_pct": 0.13333333333333333,
              "unclear_pct": 0.42222222222222217,
              "retail_qty_pct": 0.016763048093111778,
              "mixed_qty_pct": 0.015299026425591099,
              "instit_qty_pct": 0.13783763999707196,
              "ambiguous_qty_pct": 0.08520606104970353,
              "unobservable_qty_pct": 0.7448942244345216,
              "unclear_qty_pct": 0.8301002854842251,
              "retail_notional_pct": 0.016730689277848914,
              "mixed_notional_pct": 0.01508702742417077,
              "instit_notional_pct": 0.13459682348288535,
              "ambiguous_notional_pct": 0.08315564638869145,
              "unobservable_notional_pct": 0.7504298134264035,
              "unclear_notional_pct": 0.8335854598150949,
              "run_retail_pct": 0.12903225806451613,
              "run_mixed_pct": 0.12903225806451613,
              "run_instit_pct": 0.3225806451612903,
              "run_unclear_pct": 0.4193548387096774,
              "avg_trade_size": 12053.033333333333,
              "avg_run_notional": 17496.33870967742,
              "dominant_bucket": "INSTITUTIONAL",
              "dominant_label": "Mixed, leaning institution-like",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.45161290322580644,
              "na_confidence_pct": 0.5483870967741935,
              "avg_feature_coverage": 0.7903225806451617,
              "observable_run_pct": 0.9032258064516129,
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
              "instit_pct": 0.3333333333333333,
              "ambiguous_pct": 0.0,
              "unobservable_pct": 0.6666666666666666,
              "unclear_pct": 0.6666666666666666,
              "retail_qty_pct": 0.0,
              "mixed_qty_pct": 0.0,
              "instit_qty_pct": 0.09090909090909091,
              "ambiguous_qty_pct": 0.0,
              "unobservable_qty_pct": 0.9090909090909091,
              "unclear_qty_pct": 0.9090909090909091,
              "retail_notional_pct": 0.0,
              "mixed_notional_pct": 0.0,
              "instit_notional_pct": 0.09090909090909091,
              "ambiguous_notional_pct": 0.0,
              "unobservable_notional_pct": 0.9090909090909091,
              "unclear_notional_pct": 0.9090909090909091,
              "run_retail_pct": 0.0,
              "run_mixed_pct": 0.0,
              "run_instit_pct": 0.3333333333333333,
              "run_unclear_pct": 0.6666666666666666,
              "avg_trade_size": 220.0,
              "avg_run_notional": 220.0,
              "dominant_bucket": "UNOBSERVABLE",
              "dominant_label": "Not Observable",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.3333333333333333,
              "na_confidence_pct": 0.6666666666666666,
              "avg_feature_coverage": 0.6,
              "observable_run_pct": 0.33333333333333337,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "KUX",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.5,
              "mixed_pct": 0.5,
              "instit_pct": 0.0,
              "ambiguous_pct": 0.0,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.0,
              "retail_qty_pct": 0.16666666666666666,
              "mixed_qty_pct": 0.8333333333333334,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": 0.0,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.0,
              "retail_notional_pct": 0.20895522388059704,
              "mixed_notional_pct": 0.7910447761194029,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": 0.0,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.0,
              "run_retail_pct": 0.5,
              "run_mixed_pct": 0.5,
              "run_instit_pct": 0.0,
              "run_unclear_pct": 0.0,
              "avg_trade_size": 16.75,
              "avg_run_notional": 16.75,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Mixed, leaning retail-like",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.5,
              "na_confidence_pct": 0.5,
              "avg_feature_coverage": 0.8500000000000001,
              "observable_run_pct": 1.0,
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
      "n_trades": 2546,
      "n_runs": 1228,
      "n_trade_days": 21,
      "first_trade_date": "2026-02-06",
      "last_trade_date": "2026-03-10",
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
        "retail_pct": 0.2882953652788688,
        "mixed_pct": 0.16732128829536527,
        "instit_pct": 0.3684210526315789,
        "ambiguous_pct": 0.17596229379418696,
        "unobservable_pct": 0.0,
        "unclear_pct": 0.17596229379418696,
        "retail_qty_pct": 0.08056792215203079,
        "mixed_qty_pct": 0.17013531891573927,
        "instit_qty_pct": 0.4918212875281862,
        "ambiguous_qty_pct": 0.25747547140404375,
        "unobservable_qty_pct": 0.0,
        "unclear_qty_pct": 0.25747547140404375,
        "retail_notional_pct": 0.08030906783886742,
        "mixed_notional_pct": 0.1709991653216173,
        "instit_notional_pct": 0.4929789460188268,
        "ambiguous_notional_pct": 0.25571282082068847,
        "unobservable_notional_pct": 0.0,
        "unclear_notional_pct": 0.25571282082068847
      },
      "run_composition": {
        "retail_pct": 0.5667752442996743,
        "mixed_pct": 0.14169381107491857,
        "instit_pct": 0.15309446254071662,
        "ambiguous_pct": 0.13843648208469056,
        "unobservable_pct": 0.0,
        "unclear_pct": 0.13843648208469056
      },
      "trade_size": {
        "avg": 3689.959347996858,
        "median": 1464.0
      },
      "run_size": {
        "avg": 7650.355456026059,
        "median": 2200.0,
        "avg_length": 1.1636807817589576
      },
      "confidence": {
        "high": 0.061074918566775244,
        "medium": 0.3941368078175896,
        "low": 0.26465798045602607,
        "na": 0.28013029315960913
      },
      "confidence_counts": {
        "high": 75,
        "medium": 484,
        "low": 325,
        "na": 344
      },
      "trade_confidence": {
        "high": 0.03260015710919089,
        "medium": 0.37431264728986646,
        "low": 0.2498036135113904,
        "na": 0.34328358208955223
      },
      "trade_confidence_counts": {
        "high": 83,
        "medium": 953,
        "low": 636,
        "na": 874
      },
      "counts": {
        "trades": {
          "retail": 734,
          "mixed": 426,
          "institutional": 938,
          "ambiguous": 448,
          "unobservable": 0,
          "unclear": 448
        },
        "runs": {
          "retail": 696,
          "mixed": 174,
          "institutional": 188,
          "ambiguous": 170,
          "unobservable": 0,
          "unclear": 170
        }
      },
      "observability": {
        "avg_feature_coverage": 0.8493892508143323,
        "observable_run_pct": 1.0,
        "ambiguous_run_pct": 0.13843648208469056,
        "unobservable_run_pct": 0.0
      },
      "dominant_bucket": "RETAIL",
      "dominant_label": "Retail-led",
      "dominant_share": 0.5667752442996743,
      "dominance_gap": 0.41368078175895767,
      "over_time": {
        "valid": true,
        "periods": [
          {
            "month": "2026-01",
            "n_trades": 4547,
            "n_runs": 1810,
            "retail_pct": 0.27996481196393225,
            "mixed_pct": 0.15350780734550254,
            "instit_pct": 0.3597976687926105,
            "ambiguous_pct": 0.2067297118979547,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.2067297118979547,
            "avg_trade_size": 3936.658346162305,
            "avg_run_notional": 9889.494751381215,
            "retail_qty_pct": 0.07277836792045625,
            "mixed_qty_pct": 0.15789513963932247,
            "instit_qty_pct": 0.5176925455285722,
            "ambiguous_qty_pct": 0.25163394691164903,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.25163394691164903,
            "retail_notional_pct": 0.07160620325642163,
            "mixed_notional_pct": 0.15785828429861018,
            "instit_notional_pct": 0.5175693857405639,
            "ambiguous_notional_pct": 0.2529661267044043,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.2529661267044043,
            "run_retail_pct": 0.6430939226519337,
            "run_mixed_pct": 0.13425414364640884,
            "run_instit_pct": 0.1011049723756906,
            "run_ambiguous_pct": 0.12154696132596685,
            "run_unobservable_pct": 0.0,
            "run_unclear_pct": 0.12154696132596685,
            "avg_feature_coverage": 0.8573204419889502,
            "high_confidence_pct": 0.14585635359116023,
            "medium_confidence_pct": 0.46243093922651934,
            "low_confidence_pct": 0.13591160220994475,
            "na_confidence_pct": 0.2558011049723757,
            "total_quantity": null
          },
          {
            "month": "2026-02",
            "n_trades": 3236,
            "n_runs": 1422,
            "retail_pct": 0.2778121137206428,
            "mixed_pct": 0.16718170580964153,
            "instit_pct": 0.32169344870210137,
            "ambiguous_pct": 0.23331273176761433,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.23331273176761433,
            "avg_trade_size": 3472.6229913473426,
            "avg_run_notional": 7902.537271448664,
            "retail_qty_pct": 0.0936751369857047,
            "mixed_qty_pct": 0.18777930710060717,
            "instit_qty_pct": 0.44697847429721327,
            "ambiguous_qty_pct": 0.27156708161647486,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.27156708161647486,
            "retail_notional_pct": 0.09379533963704086,
            "mixed_notional_pct": 0.18970958427423834,
            "instit_notional_pct": 0.44554998803994655,
            "ambiguous_notional_pct": 0.27094508804877426,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.27094508804877426,
            "run_retail_pct": 0.5759493670886076,
            "run_mixed_pct": 0.14627285513361463,
            "run_instit_pct": 0.12447257383966245,
            "run_ambiguous_pct": 0.15330520393811534,
            "run_unobservable_pct": 0.0,
            "run_unclear_pct": 0.15330520393811534,
            "avg_feature_coverage": 0.85210970464135,
            "high_confidence_pct": 0.053445850914205346,
            "medium_confidence_pct": 0.4310829817158931,
            "low_confidence_pct": 0.2158931082981716,
            "na_confidence_pct": 0.29957805907172996,
            "total_quantity": null
          },
          {
            "month": "2026-03",
            "n_trades": 680,
            "n_runs": 362,
            "retail_pct": 0.3014705882352941,
            "mixed_pct": 0.1588235294117647,
            "instit_pct": 0.38529411764705884,
            "ambiguous_pct": 0.15441176470588236,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.15441176470588236,
            "avg_trade_size": 2809.8735294117646,
            "avg_run_notional": 5278.215469613259,
            "retail_qty_pct": 0.07236974511359197,
            "mixed_qty_pct": 0.17009790574056755,
            "instit_qty_pct": 0.5614130627804284,
            "ambiguous_qty_pct": 0.19611928636541218,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.19611928636541218,
            "retail_notional_pct": 0.07174255278393313,
            "mixed_notional_pct": 0.16956567021542732,
            "instit_notional_pct": 0.5667988511101085,
            "ambiguous_notional_pct": 0.19189292589053097,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.19189292589053097,
            "run_retail_pct": 0.5386740331491713,
            "run_mixed_pct": 0.15193370165745856,
            "run_instit_pct": 0.1850828729281768,
            "run_ambiguous_pct": 0.12430939226519337,
            "run_unobservable_pct": 0.0,
            "run_unclear_pct": 0.12430939226519337,
            "avg_feature_coverage": 0.8566298342541435,
            "high_confidence_pct": 0.07458563535911603,
            "medium_confidence_pct": 0.356353591160221,
            "low_confidence_pct": 0.292817679558011,
            "na_confidence_pct": 0.27624309392265195,
            "total_quantity": null
          }
        ]
      },
      "peer_comparison": [
        {
          "ticker": "TKU",
          "currency": "SGD",
          "is_target": true,
          "retail_pct": 0.2882953652788688,
          "mixed_pct": 0.16732128829536527,
          "instit_pct": 0.3684210526315789,
          "ambiguous_pct": 0.17596229379418696,
          "unobservable_pct": 0.0,
          "unclear_pct": 0.17596229379418696,
          "retail_qty_pct": 0.08056792215203079,
          "mixed_qty_pct": 0.17013531891573927,
          "instit_qty_pct": 0.4918212875281862,
          "ambiguous_qty_pct": 0.25747547140404375,
          "unobservable_qty_pct": 0.0,
          "unclear_qty_pct": 0.25747547140404375,
          "retail_notional_pct": 0.08030906783886742,
          "mixed_notional_pct": 0.1709991653216173,
          "instit_notional_pct": 0.4929789460188268,
          "ambiguous_notional_pct": 0.25571282082068847,
          "unobservable_notional_pct": 0.0,
          "unclear_notional_pct": 0.25571282082068847,
          "run_retail_pct": 0.5667752442996743,
          "run_mixed_pct": 0.14169381107491857,
          "run_instit_pct": 0.15309446254071662,
          "run_unclear_pct": 0.13843648208469056,
          "avg_trade_size": 3689.959347996858,
          "avg_run_notional": 7650.355456026059,
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "high_confidence_pct": 0.061074918566775244,
          "medium_confidence_pct": 0.3941368078175896,
          "low_confidence_pct": 0.26465798045602607,
          "na_confidence_pct": 0.28013029315960913,
          "avg_feature_coverage": 0.8493892508143323,
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
          "retail_pct": 0.21862348178137653,
          "mixed_pct": 0.04048582995951417,
          "instit_pct": 0.31983805668016196,
          "ambiguous_pct": 0.39271255060728744,
          "unobservable_pct": 0.02834008097165992,
          "unclear_pct": 0.42105263157894735,
          "retail_qty_pct": 0.06634484465899244,
          "mixed_qty_pct": 0.014977101126377027,
          "instit_qty_pct": 0.5265503156331229,
          "ambiguous_qty_pct": 0.37937863596979826,
          "unobservable_qty_pct": 0.01274910261170937,
          "unclear_qty_pct": 0.3921277385815076,
          "retail_notional_pct": 0.06698783838106129,
          "mixed_notional_pct": 0.014748488389288444,
          "instit_notional_pct": 0.5255954972086665,
          "ambiguous_notional_pct": 0.38028161191265186,
          "unobservable_notional_pct": 0.012386564108331928,
          "unclear_notional_pct": 0.3926681760209838,
          "run_retail_pct": 0.3231707317073171,
          "run_mixed_pct": 0.04878048780487805,
          "run_instit_pct": 0.20121951219512196,
          "run_unclear_pct": 0.4268292682926829,
          "avg_trade_size": 2915.6902834008097,
          "avg_run_notional": 4391.3140243902435,
          "dominant_bucket": "AMBIGUOUS",
          "dominant_label": "Mixed, mostly unclassified",
          "high_confidence_pct": 0.0,
          "medium_confidence_pct": 0.0,
          "low_confidence_pct": 0.524390243902439,
          "na_confidence_pct": 0.47560975609756095,
          "avg_feature_coverage": 0.8170731707317072,
          "observable_run_pct": 0.9817073170731707,
          "thresholds": {
            "retail_max": 10000.0,
            "instit_min": 50000.0
          }
        },
        {
          "ticker": "QS9",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.21780821917808219,
          "mixed_pct": 0.09315068493150686,
          "instit_pct": 0.39095890410958906,
          "ambiguous_pct": 0.29753424657534244,
          "unobservable_pct": 0.000547945205479452,
          "unclear_pct": 0.2980821917808219,
          "retail_qty_pct": 0.05946219148685571,
          "mixed_qty_pct": 0.09357870717315306,
          "instit_qty_pct": 0.5085786359865238,
          "ambiguous_qty_pct": 0.33837917105111587,
          "unobservable_qty_pct": 1.2943023516179427e-06,
          "unclear_qty_pct": 0.3383804653534675,
          "retail_notional_pct": 0.05857105784920402,
          "mixed_notional_pct": 0.09277443149128033,
          "instit_notional_pct": 0.5094680138259952,
          "ambiguous_notional_pct": 0.3391851329099343,
          "unobservable_notional_pct": 1.3639235861047087e-06,
          "unclear_notional_pct": 0.3391864968335204,
          "run_retail_pct": 0.44189016602809705,
          "run_mixed_pct": 0.10025542784163474,
          "run_instit_pct": 0.17496807151979565,
          "run_unclear_pct": 0.2828863346104726,
          "avg_trade_size": 2510.8866575342468,
          "avg_run_notional": 5852.322030651341,
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "high_confidence_pct": 0.037675606641123884,
          "medium_confidence_pct": 0.31353767560664114,
          "low_confidence_pct": 0.2656449553001277,
          "na_confidence_pct": 0.3831417624521073,
          "avg_feature_coverage": 0.8440613026819923,
          "observable_run_pct": 0.9993614303959132,
          "thresholds": {
            "retail_max": 10000.0,
            "instit_min": 50000.0
          }
        },
        {
          "ticker": "9MT",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.26175759204514915,
          "mixed_pct": 0.10507927976350444,
          "instit_pct": 0.30529427573233003,
          "ambiguous_pct": 0.31980650362805696,
          "unobservable_pct": 0.00806234883095942,
          "unclear_pct": 0.32786885245901637,
          "retail_qty_pct": 0.057043573325003906,
          "mixed_qty_pct": 0.08259149357072205,
          "instit_qty_pct": 0.4890806392836691,
          "ambiguous_qty_pct": 0.3590764745692123,
          "unobservable_qty_pct": 0.012207819251392577,
          "unclear_qty_pct": 0.3712842938206049,
          "retail_notional_pct": 0.05726872541057771,
          "mixed_notional_pct": 0.08426575234072378,
          "instit_notional_pct": 0.4868433321635764,
          "ambiguous_notional_pct": 0.3616607689816657,
          "unobservable_notional_pct": 0.009961421103456429,
          "unclear_notional_pct": 0.37162219008512215,
          "run_retail_pct": 0.4880636604774536,
          "run_mixed_pct": 0.09283819628647215,
          "run_instit_pct": 0.14058355437665782,
          "run_unclear_pct": 0.27851458885941643,
          "avg_trade_size": 2212.054420854609,
          "avg_run_notional": 4366.607161803713,
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "high_confidence_pct": 0.010079575596816976,
          "medium_confidence_pct": 0.386737400530504,
          "low_confidence_pct": 0.23183023872679046,
          "na_confidence_pct": 0.3713527851458886,
          "avg_feature_coverage": 0.8452785145888592,
          "observable_run_pct": 0.9962864721485412,
          "thresholds": {
            "retail_max": 10000.0,
            "instit_min": 50000.0
          }
        },
        {
          "ticker": "ITS",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.2656372934697089,
          "mixed_pct": 0.14103068450039338,
          "instit_pct": 0.31835169158143195,
          "ambiguous_pct": 0.2739968528717545,
          "unobservable_pct": 0.000983477576711251,
          "unclear_pct": 0.27498033044846576,
          "retail_qty_pct": 0.08511710970538218,
          "mixed_qty_pct": 0.11586561855695961,
          "instit_qty_pct": 0.44927837947658056,
          "ambiguous_qty_pct": 0.3488409424960997,
          "unobservable_qty_pct": 0.0008979497649779526,
          "unclear_qty_pct": 0.3497388922610777,
          "retail_notional_pct": 0.08533956580462337,
          "mixed_notional_pct": 0.11757989653141035,
          "instit_notional_pct": 0.4557595217461716,
          "ambiguous_notional_pct": 0.34039392997315876,
          "unobservable_notional_pct": 0.0009270859446359148,
          "unclear_notional_pct": 0.3413210159177947,
          "run_retail_pct": 0.5735329630524028,
          "run_mixed_pct": 0.1357160106254528,
          "run_instit_pct": 0.12533204539966192,
          "run_unclear_pct": 0.1654189809224825,
          "avg_trade_size": 3901.190401258851,
          "avg_run_notional": 9579.160589229654,
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "high_confidence_pct": 0.1538275778797392,
          "medium_confidence_pct": 0.36585365853658536,
          "low_confidence_pct": 0.17918377203574015,
          "na_confidence_pct": 0.30113499154793527,
          "avg_feature_coverage": 0.8640545761893261,
          "observable_run_pct": 0.9997585124366095,
          "thresholds": {
            "retail_max": 10000.0,
            "instit_min": 50000.0
          }
        },
        {
          "ticker": "U77",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.6219512195121951,
          "mixed_pct": 0.14146341463414633,
          "instit_pct": 0.1024390243902439,
          "ambiguous_pct": 0.13414634146341464,
          "unobservable_pct": 0.0,
          "unclear_pct": 0.13414634146341464,
          "retail_qty_pct": 0.07988061797752809,
          "mixed_qty_pct": 0.06293890449438203,
          "instit_qty_pct": 0.4143258426966292,
          "ambiguous_qty_pct": 0.44285463483146065,
          "unobservable_qty_pct": 0.0,
          "unclear_qty_pct": 0.44285463483146065,
          "retail_notional_pct": 0.07885599035222689,
          "mixed_notional_pct": 0.06260032436478563,
          "instit_notional_pct": 0.41472948808583193,
          "ambiguous_notional_pct": 0.4438141971971556,
          "unobservable_notional_pct": 0.0,
          "unclear_notional_pct": 0.4438141971971556,
          "run_retail_pct": 0.7058823529411765,
          "run_mixed_pct": 0.13725490196078433,
          "run_instit_pct": 0.04201680672268908,
          "run_unclear_pct": 0.11484593837535013,
          "avg_trade_size": 586.5121951219512,
          "avg_run_notional": 673.5854341736695,
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "high_confidence_pct": 0.5518207282913166,
          "medium_confidence_pct": 0.13165266106442577,
          "low_confidence_pct": 0.06442577030812324,
          "na_confidence_pct": 0.25210084033613445,
          "avg_feature_coverage": 0.8453781512605041,
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
          "retail_pct": 0.08888888888888889,
          "mixed_pct": 0.1111111111111111,
          "instit_pct": 0.37777777777777777,
          "ambiguous_pct": 0.28888888888888886,
          "unobservable_pct": 0.13333333333333333,
          "unclear_pct": 0.42222222222222217,
          "retail_qty_pct": 0.016763048093111778,
          "mixed_qty_pct": 0.015299026425591099,
          "instit_qty_pct": 0.13783763999707196,
          "ambiguous_qty_pct": 0.08520606104970353,
          "unobservable_qty_pct": 0.7448942244345216,
          "unclear_qty_pct": 0.8301002854842251,
          "retail_notional_pct": 0.016730689277848914,
          "mixed_notional_pct": 0.01508702742417077,
          "instit_notional_pct": 0.13459682348288535,
          "ambiguous_notional_pct": 0.08315564638869145,
          "unobservable_notional_pct": 0.7504298134264035,
          "unclear_notional_pct": 0.8335854598150949,
          "run_retail_pct": 0.12903225806451613,
          "run_mixed_pct": 0.12903225806451613,
          "run_instit_pct": 0.3225806451612903,
          "run_unclear_pct": 0.4193548387096774,
          "avg_trade_size": 12053.033333333333,
          "avg_run_notional": 17496.33870967742,
          "dominant_bucket": "INSTITUTIONAL",
          "dominant_label": "Mixed, leaning institution-like",
          "high_confidence_pct": 0.0,
          "medium_confidence_pct": 0.0,
          "low_confidence_pct": 0.45161290322580644,
          "na_confidence_pct": 0.5483870967741935,
          "avg_feature_coverage": 0.7903225806451617,
          "observable_run_pct": 0.9032258064516129,
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
          "instit_pct": 0.3333333333333333,
          "ambiguous_pct": 0.0,
          "unobservable_pct": 0.6666666666666666,
          "unclear_pct": 0.6666666666666666,
          "retail_qty_pct": 0.0,
          "mixed_qty_pct": 0.0,
          "instit_qty_pct": 0.09090909090909091,
          "ambiguous_qty_pct": 0.0,
          "unobservable_qty_pct": 0.9090909090909091,
          "unclear_qty_pct": 0.9090909090909091,
          "retail_notional_pct": 0.0,
          "mixed_notional_pct": 0.0,
          "instit_notional_pct": 0.09090909090909091,
          "ambiguous_notional_pct": 0.0,
          "unobservable_notional_pct": 0.9090909090909091,
          "unclear_notional_pct": 0.9090909090909091,
          "run_retail_pct": 0.0,
          "run_mixed_pct": 0.0,
          "run_instit_pct": 0.3333333333333333,
          "run_unclear_pct": 0.6666666666666666,
          "avg_trade_size": 220.0,
          "avg_run_notional": 220.0,
          "dominant_bucket": "UNOBSERVABLE",
          "dominant_label": "Not Observable",
          "high_confidence_pct": 0.0,
          "medium_confidence_pct": 0.0,
          "low_confidence_pct": 0.3333333333333333,
          "na_confidence_pct": 0.6666666666666666,
          "avg_feature_coverage": 0.6,
          "observable_run_pct": 0.33333333333333337,
          "thresholds": {
            "retail_max": 10000.0,
            "instit_min": 50000.0
          }
        },
        {
          "ticker": "KUX",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.5,
          "mixed_pct": 0.5,
          "instit_pct": 0.0,
          "ambiguous_pct": 0.0,
          "unobservable_pct": 0.0,
          "unclear_pct": 0.0,
          "retail_qty_pct": 0.16666666666666666,
          "mixed_qty_pct": 0.8333333333333334,
          "instit_qty_pct": 0.0,
          "ambiguous_qty_pct": 0.0,
          "unobservable_qty_pct": 0.0,
          "unclear_qty_pct": 0.0,
          "retail_notional_pct": 0.20895522388059704,
          "mixed_notional_pct": 0.7910447761194029,
          "instit_notional_pct": 0.0,
          "ambiguous_notional_pct": 0.0,
          "unobservable_notional_pct": 0.0,
          "unclear_notional_pct": 0.0,
          "run_retail_pct": 0.5,
          "run_mixed_pct": 0.5,
          "run_instit_pct": 0.0,
          "run_unclear_pct": 0.0,
          "avg_trade_size": 16.75,
          "avg_run_notional": 16.75,
          "dominant_bucket": "RETAIL",
          "dominant_label": "Mixed, leaning retail-like",
          "high_confidence_pct": 0.0,
          "medium_confidence_pct": 0.0,
          "low_confidence_pct": 0.5,
          "na_confidence_pct": 0.5,
          "avg_feature_coverage": 0.8500000000000001,
          "observable_run_pct": 1.0,
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
            "retail_pct": 0.6138613861386139,
            "mixed_pct": 0.1188118811881188,
            "instit_pct": 0.22772277227722773,
            "ambiguous_pct": 0.039603960396039604,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.039603960396039604,
            "retail_qty_pct": 0.10589519650655022,
            "mixed_qty_pct": 0.1960971615720524,
            "instit_qty_pct": 0.6206331877729258,
            "ambiguous_qty_pct": 0.07737445414847162,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.07737445414847162,
            "retail_notional_pct": 0.10561947609740507,
            "mixed_notional_pct": 0.1943061548106354,
            "instit_notional_pct": 0.6234065961082224,
            "ambiguous_notional_pct": 0.07666777298373714,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.07666777298373714,
            "run_retail_pct": 0.7380952380952381,
            "run_mixed_pct": 0.13095238095238096,
            "run_instit_pct": 0.08333333333333333,
            "run_unclear_pct": 0.047619047619047616,
            "avg_trade_size": 1610.9108910891089,
            "avg_run_notional": 1936.9285714285713,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.32142857142857145,
            "medium_confidence_pct": 0.44047619047619047,
            "low_confidence_pct": 0.05952380952380952,
            "na_confidence_pct": 0.17857142857142858,
            "avg_feature_coverage": 0.8517857142857139,
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
            "avg_trade_size": 74.0,
            "avg_run_notional": 74.0,
            "dominant_bucket": "INSTITUTIONAL",
            "dominant_label": "Institution-led",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 1.0,
            "na_confidence_pct": 0.0,
            "avg_feature_coverage": 0.8500000000000001,
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
            "retail_pct": 0.25,
            "mixed_pct": 0.25,
            "instit_pct": 0.5,
            "ambiguous_pct": 0.0,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.0,
            "retail_qty_pct": 0.07692307692307693,
            "mixed_qty_pct": 0.15384615384615385,
            "instit_qty_pct": 0.7692307692307693,
            "ambiguous_qty_pct": 0.0,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.0,
            "retail_notional_pct": 0.07692307692307693,
            "mixed_notional_pct": 0.15384615384615385,
            "instit_notional_pct": 0.7692307692307693,
            "ambiguous_notional_pct": 0.0,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.0,
            "run_retail_pct": 0.3333333333333333,
            "run_mixed_pct": 0.3333333333333333,
            "run_instit_pct": 0.3333333333333333,
            "run_unclear_pct": 0.0,
            "avg_trade_size": 2697.5,
            "avg_run_notional": 3596.6666666666665,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Mixed, leaning retail-like",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.6666666666666666,
            "na_confidence_pct": 0.3333333333333333,
            "avg_feature_coverage": 0.8500000000000001,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "QS9",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.2655367231638418,
            "mixed_pct": 0.022598870056497175,
            "instit_pct": 0.4011299435028249,
            "ambiguous_pct": 0.3107344632768362,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.3107344632768362,
            "retail_qty_pct": 0.11466254341529834,
            "mixed_qty_pct": 0.030924385262453412,
            "instit_qty_pct": 0.5696894868629058,
            "ambiguous_qty_pct": 0.28472358445934254,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.28472358445934254,
            "retail_notional_pct": 0.11500376326183381,
            "mixed_notional_pct": 0.030624874390987402,
            "instit_notional_pct": 0.5697675423991707,
            "ambiguous_notional_pct": 0.28460381994800815,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.28460381994800815,
            "run_retail_pct": 0.48314606741573035,
            "run_mixed_pct": 0.033707865168539325,
            "run_instit_pct": 0.19101123595505617,
            "run_unclear_pct": 0.29213483146067415,
            "avg_trade_size": 2679.0378531073447,
            "avg_run_notional": 5327.974157303372,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.3146067415730337,
            "low_confidence_pct": 0.3595505617977528,
            "na_confidence_pct": 0.3258426966292135,
            "avg_feature_coverage": 0.8196629213483145,
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
            "retail_pct": 0.47766323024054985,
            "mixed_pct": 0.10652920962199312,
            "instit_pct": 0.24398625429553264,
            "ambiguous_pct": 0.1718213058419244,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.1718213058419244,
            "retail_qty_pct": 0.06276870163370593,
            "mixed_qty_pct": 0.14251934651762682,
            "instit_qty_pct": 0.4778589853826311,
            "ambiguous_qty_pct": 0.3168529664660361,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.3168529664660361,
            "retail_notional_pct": 0.06287167986486791,
            "mixed_notional_pct": 0.1430510086732989,
            "instit_notional_pct": 0.48053888839918085,
            "ambiguous_notional_pct": 0.31353842306265234,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.31353842306265234,
            "run_retail_pct": 0.776536312849162,
            "run_mixed_pct": 0.09497206703910614,
            "run_instit_pct": 0.061452513966480445,
            "run_unclear_pct": 0.0670391061452514,
            "avg_trade_size": 1676.3539518900343,
            "avg_run_notional": 2725.245810055866,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.48044692737430167,
            "medium_confidence_pct": 0.3575418994413408,
            "low_confidence_pct": 0.0,
            "na_confidence_pct": 0.16201117318435754,
            "avg_feature_coverage": 0.8592178770949718,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "9MT",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.28160919540229884,
            "mixed_pct": 0.12643678160919541,
            "instit_pct": 0.3448275862068966,
            "ambiguous_pct": 0.22988505747126436,
            "unobservable_pct": 0.017241379310344827,
            "unclear_pct": 0.2471264367816092,
            "retail_qty_pct": 0.06676036542515812,
            "mixed_qty_pct": 0.1802529866479269,
            "instit_qty_pct": 0.4349964862965566,
            "ambiguous_qty_pct": 0.2832044975404076,
            "unobservable_qty_pct": 0.03478566408995081,
            "unclear_qty_pct": 0.3179901616303584,
            "retail_notional_pct": 0.06705148039477193,
            "mixed_notional_pct": 0.1810616164310483,
            "instit_notional_pct": 0.4320448119498533,
            "ambiguous_notional_pct": 0.2854030408108829,
            "unobservable_notional_pct": 0.034439050413443584,
            "unclear_notional_pct": 0.3198420912243265,
            "run_retail_pct": 0.5411764705882353,
            "run_mixed_pct": 0.10588235294117647,
            "run_instit_pct": 0.12941176470588237,
            "run_unclear_pct": 0.22352941176470587,
            "avg_trade_size": 1346.6235632183907,
            "avg_run_notional": 2756.6176470588234,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.36470588235294116,
            "low_confidence_pct": 0.3058823529411765,
            "na_confidence_pct": 0.32941176470588235,
            "avg_feature_coverage": 0.8523529411764701,
            "observable_run_pct": 0.9882352941176471,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "U77",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.859375,
            "mixed_pct": 0.125,
            "instit_pct": 0.015625,
            "ambiguous_pct": 0.0,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.0,
            "retail_qty_pct": 0.4617067833698031,
            "mixed_qty_pct": 0.20568927789934355,
            "instit_qty_pct": 0.33260393873085337,
            "ambiguous_qty_pct": 0.0,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.0,
            "retail_notional_pct": 0.465367848877886,
            "mixed_notional_pct": 0.20741617781604862,
            "instit_notional_pct": 0.32721597330606533,
            "ambiguous_notional_pct": 0.0,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.0,
            "run_retail_pct": 0.8776595744680851,
            "run_mixed_pct": 0.11702127659574468,
            "run_instit_pct": 0.005319148936170213,
            "run_unclear_pct": 0.0,
            "avg_trade_size": 48.388020833333336,
            "avg_run_notional": 49.41755319148936,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.8829787234042553,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.0,
            "na_confidence_pct": 0.11702127659574468,
            "avg_feature_coverage": 0.8507978723404251,
            "observable_run_pct": 1.0,
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
            "retail_pct": 0.31343283582089554,
            "mixed_pct": 0.14712153518123666,
            "instit_pct": 0.35394456289978676,
            "ambiguous_pct": 0.18550106609808104,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.18550106609808104,
            "retail_qty_pct": 0.08723195981013243,
            "mixed_qty_pct": 0.17213674897955414,
            "instit_qty_pct": 0.48619396782594243,
            "ambiguous_qty_pct": 0.25443732338437103,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.25443732338437103,
            "retail_notional_pct": 0.08731298092265118,
            "mixed_notional_pct": 0.17159688725208952,
            "instit_notional_pct": 0.48892103299274914,
            "ambiguous_notional_pct": 0.25216909883251015,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.25216909883251015,
            "run_retail_pct": 0.556,
            "run_mixed_pct": 0.144,
            "run_instit_pct": 0.168,
            "run_unclear_pct": 0.132,
            "avg_trade_size": 2545.6908315565033,
            "avg_run_notional": 4775.716,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.108,
            "medium_confidence_pct": 0.336,
            "low_confidence_pct": 0.28,
            "na_confidence_pct": 0.276,
            "avg_feature_coverage": 0.856,
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
            "retail_pct": 0.38166980539861894,
            "mixed_pct": 0.15128688010043942,
            "instit_pct": 0.30947897049591966,
            "ambiguous_pct": 0.15128688010043942,
            "unobservable_pct": 0.006277463904582548,
            "unclear_pct": 0.15756434400502198,
            "retail_qty_pct": 0.06444143630664007,
            "mixed_qty_pct": 0.16012396694214875,
            "instit_qty_pct": 0.5540039897406669,
            "ambiguous_qty_pct": 0.20867768595041322,
            "unobservable_qty_pct": 0.012752921060131091,
            "unclear_qty_pct": 0.22143060701054432,
            "retail_notional_pct": 0.06422296669681381,
            "mixed_notional_pct": 0.16002153574882375,
            "instit_notional_pct": 0.5527164341919211,
            "ambiguous_notional_pct": 0.2107183234278828,
            "unobservable_notional_pct": 0.012320739934558528,
            "unclear_notional_pct": 0.22303906336244134,
            "run_retail_pct": 0.70267131242741,
            "run_mixed_pct": 0.11962833914053426,
            "run_instit_pct": 0.10685249709639953,
            "run_unclear_pct": 0.07084785133565621,
            "avg_trade_size": 1873.7002510985562,
            "avg_run_notional": 3466.671893147503,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.45993031358885017,
            "medium_confidence_pct": 0.281068524970964,
            "low_confidence_pct": 0.06852497096399536,
            "na_confidence_pct": 0.19047619047619047,
            "avg_feature_coverage": 0.8645180023228801,
            "observable_run_pct": 0.9988385598141696,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "NXR",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.05263157894736842,
            "mixed_pct": 0.10526315789473684,
            "instit_pct": 0.47368421052631576,
            "ambiguous_pct": 0.3684210526315789,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.3684210526315789,
            "retail_qty_pct": 0.02344273275284662,
            "mixed_qty_pct": 0.06697923643670463,
            "instit_qty_pct": 0.5492297387809779,
            "ambiguous_qty_pct": 0.3603482920294709,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.3603482920294709,
            "retail_notional_pct": 0.023800902579682242,
            "mixed_notional_pct": 0.06782594872428928,
            "instit_notional_pct": 0.546767228055921,
            "ambiguous_notional_pct": 0.3616059206401074,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.3616059206401074,
            "run_retail_pct": 0.07692307692307693,
            "run_mixed_pct": 0.07692307692307693,
            "run_instit_pct": 0.38461538461538464,
            "run_unclear_pct": 0.46153846153846156,
            "avg_trade_size": 2979.7631578947367,
            "avg_run_notional": 4355.038461538462,
            "dominant_bucket": "AMBIGUOUS",
            "dominant_label": "Mixed, mostly unclassified",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.46153846153846156,
            "na_confidence_pct": 0.5384615384615384,
            "avg_feature_coverage": 0.8269230769230768,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "QS9",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.2434325744308231,
            "mixed_pct": 0.0647985989492119,
            "instit_pct": 0.329246935201401,
            "ambiguous_pct": 0.36252189141856395,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.36252189141856395,
            "retail_qty_pct": 0.08280329883940313,
            "mixed_qty_pct": 0.052544880224115256,
            "instit_qty_pct": 0.47733834543479503,
            "ambiguous_qty_pct": 0.3873134755016866,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.3873134755016866,
            "retail_notional_pct": 0.0828345513050364,
            "mixed_notional_pct": 0.05172937625284688,
            "instit_notional_pct": 0.4768106896800443,
            "ambiguous_notional_pct": 0.38862538276207237,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.38862538276207237,
            "run_retail_pct": 0.4329896907216495,
            "run_mixed_pct": 0.061855670103092786,
            "run_instit_pct": 0.15463917525773196,
            "run_unclear_pct": 0.35051546391752575,
            "avg_trade_size": 2699.9803852889668,
            "avg_run_notional": 5297.899656357387,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Mixed, leaning retail-like",
            "high_confidence_pct": 0.030927835051546393,
            "medium_confidence_pct": 0.3402061855670103,
            "low_confidence_pct": 0.21649484536082475,
            "na_confidence_pct": 0.41237113402061853,
            "avg_feature_coverage": 0.8273195876288659,
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
            "retail_pct": 0.7045454545454546,
            "mixed_pct": 0.14488636363636365,
            "instit_pct": 0.07954545454545454,
            "ambiguous_pct": 0.07102272727272728,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.07102272727272728,
            "retail_qty_pct": 0.12401013620525815,
            "mixed_qty_pct": 0.08188153310104529,
            "instit_qty_pct": 0.47339246119733924,
            "ambiguous_qty_pct": 0.3207158694963573,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.3207158694963573,
            "retail_notional_pct": 0.12471773292332354,
            "mixed_notional_pct": 0.08303083551054696,
            "instit_notional_pct": 0.4757963207016408,
            "ambiguous_notional_pct": 0.3164551108644887,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.3164551108644887,
            "run_retail_pct": 0.7784810126582279,
            "run_mixed_pct": 0.14240506329113925,
            "run_instit_pct": 0.028481012658227847,
            "run_unclear_pct": 0.05063291139240506,
            "avg_trade_size": 368.61647727272725,
            "avg_run_notional": 410.6107594936709,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.6234177215189873,
            "medium_confidence_pct": 0.14873417721518986,
            "low_confidence_pct": 0.03481012658227848,
            "na_confidence_pct": 0.1930379746835443,
            "avg_feature_coverage": 0.8504746835443037,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "9MT",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.32644628099173556,
            "mixed_pct": 0.07162534435261708,
            "instit_pct": 0.27548209366391185,
            "ambiguous_pct": 0.3002754820936639,
            "unobservable_pct": 0.026170798898071626,
            "unclear_pct": 0.3264462809917355,
            "retail_qty_pct": 0.055222630324118824,
            "mixed_qty_pct": 0.062310715896642825,
            "instit_qty_pct": 0.4703266963077518,
            "ambiguous_qty_pct": 0.36200786133127133,
            "unobservable_qty_pct": 0.05013209614021522,
            "unclear_qty_pct": 0.4121399574714866,
            "retail_notional_pct": 0.05489527709129648,
            "mixed_notional_pct": 0.060749999628035414,
            "instit_notional_pct": 0.471547685115614,
            "ambiguous_notional_pct": 0.363922336770782,
            "unobservable_notional_pct": 0.04888470139427204,
            "unclear_notional_pct": 0.41280703816505404,
            "run_retail_pct": 0.5111111111111111,
            "run_mixed_pct": 0.057777777777777775,
            "run_instit_pct": 0.14444444444444443,
            "run_unclear_pct": 0.2866666666666667,
            "avg_trade_size": 1851.534435261708,
            "avg_run_notional": 2987.1422222222222,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.0022222222222222222,
            "medium_confidence_pct": 0.37555555555555553,
            "low_confidence_pct": 0.2777777777777778,
            "na_confidence_pct": 0.34444444444444444,
            "avg_feature_coverage": 0.832222222222222,
            "observable_run_pct": 0.9911111111111112,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "LVR",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.17307692307692307,
            "mixed_pct": 0.038461538461538464,
            "instit_pct": 0.28846153846153844,
            "ambiguous_pct": 0.46153846153846156,
            "unobservable_pct": 0.038461538461538464,
            "unclear_pct": 0.5,
            "retail_qty_pct": 0.06278366111951589,
            "mixed_qty_pct": 0.0453857791225416,
            "instit_qty_pct": 0.4394856278366112,
            "ambiguous_qty_pct": 0.41376701966717094,
            "unobservable_qty_pct": 0.038577912254160365,
            "unclear_qty_pct": 0.4523449319213313,
            "retail_notional_pct": 0.06280254089363158,
            "mixed_notional_pct": 0.044807543502906194,
            "instit_notional_pct": 0.4404455561353944,
            "ambiguous_notional_pct": 0.4131651400910547,
            "unobservable_notional_pct": 0.03877921937701319,
            "unclear_notional_pct": 0.4519443594680679,
            "run_retail_pct": 0.2727272727272727,
            "run_mixed_pct": 0.06060606060606061,
            "run_instit_pct": 0.18181818181818182,
            "run_unclear_pct": 0.48484848484848486,
            "avg_trade_size": 2137.346153846154,
            "avg_run_notional": 3367.939393939394,
            "dominant_bucket": "AMBIGUOUS",
            "dominant_label": "Unclassified Flow",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.45454545454545453,
            "na_confidence_pct": 0.5454545454545454,
            "avg_feature_coverage": 0.8196969696969698,
            "observable_run_pct": 0.9696969696969697,
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
            "retail_pct": 0.30031612223393045,
            "mixed_pct": 0.1559536354056902,
            "instit_pct": 0.38883034773445735,
            "ambiguous_pct": 0.15489989462592202,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.15489989462592202,
            "retail_qty_pct": 0.07260137011664507,
            "mixed_qty_pct": 0.17285687835586003,
            "instit_qty_pct": 0.5843436400666543,
            "ambiguous_qty_pct": 0.17019811146084057,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.17019811146084057,
            "retail_notional_pct": 0.07230874933427653,
            "mixed_notional_pct": 0.17251033493669882,
            "instit_notional_pct": 0.5895476645497989,
            "ambiguous_notional_pct": 0.16563325117922573,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.16563325117922573,
            "run_retail_pct": 0.5461847389558233,
            "run_mixed_pct": 0.15461847389558234,
            "run_instit_pct": 0.17269076305220885,
            "run_unclear_pct": 0.12650602409638553,
            "avg_trade_size": 3369.4931506849316,
            "avg_run_notional": 6420.981927710844,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.0963855421686747,
            "medium_confidence_pct": 0.3714859437751004,
            "low_confidence_pct": 0.25100401606425704,
            "na_confidence_pct": 0.28112449799196787,
            "avg_feature_coverage": 0.8545180722891565,
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
            "retail_pct": 0.03571428571428571,
            "mixed_pct": 0.10714285714285714,
            "instit_pct": 0.5,
            "ambiguous_pct": 0.2857142857142857,
            "unobservable_pct": 0.07142857142857142,
            "unclear_pct": 0.3571428571428571,
            "retail_qty_pct": 0.017543859649122806,
            "mixed_qty_pct": 0.0506265664160401,
            "instit_qty_pct": 0.6115288220551378,
            "ambiguous_qty_pct": 0.27017543859649124,
            "unobservable_qty_pct": 0.05012531328320802,
            "unclear_qty_pct": 0.32030075187969925,
            "retail_notional_pct": 0.017571083017662362,
            "mixed_notional_pct": 0.05060732704382013,
            "instit_notional_pct": 0.6121713164294517,
            "ambiguous_notional_pct": 0.26747817469372853,
            "unobservable_notional_pct": 0.052172098815337374,
            "unclear_notional_pct": 0.3196502735090659,
            "run_retail_pct": 0.05263157894736842,
            "run_mixed_pct": 0.10526315789473684,
            "run_instit_pct": 0.42105263157894735,
            "run_unclear_pct": 0.42105263157894735,
            "avg_trade_size": 2738.875,
            "avg_run_notional": 4036.2368421052633,
            "dominant_bucket": "INSTITUTIONAL",
            "dominant_label": "Mixed, leaning institution-like",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.47368421052631576,
            "na_confidence_pct": 0.5263157894736842,
            "avg_feature_coverage": 0.8131578947368422,
            "observable_run_pct": 0.9473684210526316,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "LVR",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.1919191919191919,
            "mixed_pct": 0.030303030303030304,
            "instit_pct": 0.3434343434343434,
            "ambiguous_pct": 0.3838383838383838,
            "unobservable_pct": 0.050505050505050504,
            "unclear_pct": 0.4343434343434343,
            "retail_qty_pct": 0.07694459988808058,
            "mixed_qty_pct": 0.01706771124790151,
            "instit_qty_pct": 0.5881365416899832,
            "ambiguous_qty_pct": 0.2921096810296586,
            "unobservable_qty_pct": 0.02574146614437605,
            "unclear_qty_pct": 0.3178511471740347,
            "retail_notional_pct": 0.07850714501415437,
            "mixed_notional_pct": 0.01637806160101931,
            "instit_notional_pct": 0.5892000394029484,
            "ambiguous_notional_pct": 0.29037389199393454,
            "unobservable_notional_pct": 0.025540861987943343,
            "unclear_notional_pct": 0.3159147539818779,
            "run_retail_pct": 0.30158730158730157,
            "run_mixed_pct": 0.047619047619047616,
            "run_instit_pct": 0.20634920634920634,
            "run_unclear_pct": 0.4444444444444444,
            "avg_trade_size": 3127.489898989899,
            "avg_run_notional": 4914.626984126984,
            "dominant_bucket": "AMBIGUOUS",
            "dominant_label": "Unclassified Flow",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.5079365079365079,
            "na_confidence_pct": 0.49206349206349204,
            "avg_feature_coverage": 0.8134920634920636,
            "observable_run_pct": 0.9682539682539683,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "9MT",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.2988826815642458,
            "mixed_pct": 0.10558659217877095,
            "instit_pct": 0.31452513966480444,
            "ambiguous_pct": 0.2664804469273743,
            "unobservable_pct": 0.01452513966480447,
            "unclear_pct": 0.2810055865921788,
            "retail_qty_pct": 0.05158884745951361,
            "mixed_qty_pct": 0.07482330680616618,
            "instit_qty_pct": 0.5450219823028549,
            "ambiguous_qty_pct": 0.3036340363960154,
            "unobservable_qty_pct": 0.024931827035449942,
            "unclear_qty_pct": 0.3285658634314653,
            "retail_notional_pct": 0.0511348096781271,
            "mixed_notional_pct": 0.07600933715547659,
            "instit_notional_pct": 0.5504651673026915,
            "ambiguous_notional_pct": 0.3001501282240342,
            "unobservable_notional_pct": 0.022240557639670682,
            "unclear_notional_pct": 0.3223906858637049,
            "run_retail_pct": 0.5222672064777328,
            "run_mixed_pct": 0.08502024291497975,
            "run_instit_pct": 0.14676113360323886,
            "run_unclear_pct": 0.24595141700404857,
            "avg_trade_size": 1941.5432960893854,
            "avg_run_notional": 3517.5733805668015,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.016194331983805668,
            "medium_confidence_pct": 0.3917004048582996,
            "low_confidence_pct": 0.2611336032388664,
            "na_confidence_pct": 0.3309716599190283,
            "avg_feature_coverage": 0.8423076923076921,
            "observable_run_pct": 0.9939271255060729,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "ITS",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.2721737699522791,
            "mixed_pct": 0.15287148263946027,
            "instit_pct": 0.3347046239921014,
            "ambiguous_pct": 0.23860457462563764,
            "unobservable_pct": 0.001645548790521639,
            "unclear_pct": 0.24025012341615928,
            "retail_qty_pct": 0.08317583679236952,
            "mixed_qty_pct": 0.13075156760575818,
            "instit_qty_pct": 0.4911286761458977,
            "ambiguous_qty_pct": 0.29336306632517883,
            "unobservable_qty_pct": 0.0015808531307957255,
            "unclear_qty_pct": 0.29494391945597453,
            "retail_notional_pct": 0.08361153796844145,
            "mixed_notional_pct": 0.13140834637937274,
            "instit_notional_pct": 0.4921666191426174,
            "ambiguous_notional_pct": 0.29127649666013383,
            "unobservable_notional_pct": 0.001536999849434617,
            "unclear_notional_pct": 0.29281349650956845,
            "run_retail_pct": 0.5831052014078999,
            "run_mixed_pct": 0.1388345717637857,
            "run_instit_pct": 0.12710207274149393,
            "run_unclear_pct": 0.15095815408682048,
            "avg_trade_size": 3937.219433931216,
            "avg_run_notional": 9357.247751271021,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.16699256941728588,
            "medium_confidence_pct": 0.3551036370746969,
            "low_confidence_pct": 0.18811106765741104,
            "na_confidence_pct": 0.28979272585060617,
            "avg_feature_coverage": 0.8623386781384433,
            "observable_run_pct": 0.9996089166992569,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "QS9",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.2114604462474645,
            "mixed_pct": 0.07860040567951318,
            "instit_pct": 0.36815415821501013,
            "ambiguous_pct": 0.3407707910750507,
            "unobservable_pct": 0.0010141987829614604,
            "unclear_pct": 0.34178498985801214,
            "retail_qty_pct": 0.0622969020473945,
            "mixed_qty_pct": 0.06603832149465767,
            "instit_qty_pct": 0.47224855249806,
            "ambiguous_qty_pct": 0.3994138363278219,
            "unobservable_qty_pct": 2.387632065898645e-06,
            "unclear_qty_pct": 0.3994162239598878,
            "retail_notional_pct": 0.06123054884313587,
            "mixed_notional_pct": 0.06637467912490533,
            "instit_notional_pct": 0.47322292608706995,
            "ambiguous_notional_pct": 0.3991693779217322,
            "unobservable_notional_pct": 2.468023156691256e-06,
            "unclear_notional_pct": 0.39917184594488886,
            "run_retail_pct": 0.40311804008908686,
            "run_mixed_pct": 0.07683741648106904,
            "run_instit_pct": 0.18819599109131402,
            "run_unclear_pct": 0.33184855233853006,
            "avg_trade_size": 2568.348022312373,
            "avg_run_notional": 5640.069376391983,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Mixed, leaning retail-like",
            "high_confidence_pct": 0.013363028953229399,
            "medium_confidence_pct": 0.3106904231625835,
            "low_confidence_pct": 0.267260579064588,
            "na_confidence_pct": 0.4086859688195991,
            "avg_feature_coverage": 0.8365256124721602,
            "observable_run_pct": 0.9988864142538976,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "U77",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.6605263157894737,
            "mixed_pct": 0.15263157894736842,
            "instit_pct": 0.07894736842105263,
            "ambiguous_pct": 0.10789473684210527,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.10789473684210527,
            "retail_qty_pct": 0.08859357696567,
            "mixed_qty_pct": 0.07940199335548173,
            "instit_qty_pct": 0.40852713178294575,
            "ambiguous_qty_pct": 0.42347729789590255,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.42347729789590255,
            "retail_notional_pct": 0.087912058712554,
            "mixed_notional_pct": 0.07999904342326926,
            "instit_notional_pct": 0.4085964362202465,
            "ambiguous_notional_pct": 0.42349246164393023,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.42349246164393023,
            "run_retail_pct": 0.7337278106508875,
            "run_mixed_pct": 0.14497041420118342,
            "run_instit_pct": 0.03254437869822485,
            "run_unclear_pct": 0.08875739644970414,
            "avg_trade_size": 495.18684210526317,
            "avg_run_notional": 556.7189349112426,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.5828402366863905,
            "medium_confidence_pct": 0.1390532544378698,
            "low_confidence_pct": 0.04437869822485207,
            "na_confidence_pct": 0.23372781065088757,
            "avg_feature_coverage": 0.8491124260355027,
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
            "avg_trade_size": 300.0,
            "avg_run_notional": 300.0,
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
        "30d": [
          {
            "ticker": "TKU",
            "currency": "SGD",
            "is_target": true,
            "retail_pct": 0.2882953652788688,
            "mixed_pct": 0.16732128829536527,
            "instit_pct": 0.3684210526315789,
            "ambiguous_pct": 0.17596229379418696,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.17596229379418696,
            "retail_qty_pct": 0.08056792215203079,
            "mixed_qty_pct": 0.17013531891573927,
            "instit_qty_pct": 0.4918212875281862,
            "ambiguous_qty_pct": 0.25747547140404375,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.25747547140404375,
            "retail_notional_pct": 0.08030906783886742,
            "mixed_notional_pct": 0.1709991653216173,
            "instit_notional_pct": 0.4929789460188268,
            "ambiguous_notional_pct": 0.25571282082068847,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.25571282082068847,
            "run_retail_pct": 0.5667752442996743,
            "run_mixed_pct": 0.14169381107491857,
            "run_instit_pct": 0.15309446254071662,
            "run_unclear_pct": 0.13843648208469056,
            "avg_trade_size": 3689.959347996858,
            "avg_run_notional": 7650.355456026059,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.061074918566775244,
            "medium_confidence_pct": 0.3941368078175896,
            "low_confidence_pct": 0.26465798045602607,
            "na_confidence_pct": 0.28013029315960913,
            "avg_feature_coverage": 0.8493892508143323,
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
            "retail_pct": 0.21862348178137653,
            "mixed_pct": 0.04048582995951417,
            "instit_pct": 0.31983805668016196,
            "ambiguous_pct": 0.39271255060728744,
            "unobservable_pct": 0.02834008097165992,
            "unclear_pct": 0.42105263157894735,
            "retail_qty_pct": 0.06634484465899244,
            "mixed_qty_pct": 0.014977101126377027,
            "instit_qty_pct": 0.5265503156331229,
            "ambiguous_qty_pct": 0.37937863596979826,
            "unobservable_qty_pct": 0.01274910261170937,
            "unclear_qty_pct": 0.3921277385815076,
            "retail_notional_pct": 0.06698783838106129,
            "mixed_notional_pct": 0.014748488389288444,
            "instit_notional_pct": 0.5255954972086665,
            "ambiguous_notional_pct": 0.38028161191265186,
            "unobservable_notional_pct": 0.012386564108331928,
            "unclear_notional_pct": 0.3926681760209838,
            "run_retail_pct": 0.3231707317073171,
            "run_mixed_pct": 0.04878048780487805,
            "run_instit_pct": 0.20121951219512196,
            "run_unclear_pct": 0.4268292682926829,
            "avg_trade_size": 2915.6902834008097,
            "avg_run_notional": 4391.3140243902435,
            "dominant_bucket": "AMBIGUOUS",
            "dominant_label": "Mixed, mostly unclassified",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.524390243902439,
            "na_confidence_pct": 0.47560975609756095,
            "avg_feature_coverage": 0.8170731707317072,
            "observable_run_pct": 0.9817073170731707,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "QS9",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.21780821917808219,
            "mixed_pct": 0.09315068493150686,
            "instit_pct": 0.39095890410958906,
            "ambiguous_pct": 0.29753424657534244,
            "unobservable_pct": 0.000547945205479452,
            "unclear_pct": 0.2980821917808219,
            "retail_qty_pct": 0.05946219148685571,
            "mixed_qty_pct": 0.09357870717315306,
            "instit_qty_pct": 0.5085786359865238,
            "ambiguous_qty_pct": 0.33837917105111587,
            "unobservable_qty_pct": 1.2943023516179427e-06,
            "unclear_qty_pct": 0.3383804653534675,
            "retail_notional_pct": 0.05857105784920402,
            "mixed_notional_pct": 0.09277443149128033,
            "instit_notional_pct": 0.5094680138259952,
            "ambiguous_notional_pct": 0.3391851329099343,
            "unobservable_notional_pct": 1.3639235861047087e-06,
            "unclear_notional_pct": 0.3391864968335204,
            "run_retail_pct": 0.44189016602809705,
            "run_mixed_pct": 0.10025542784163474,
            "run_instit_pct": 0.17496807151979565,
            "run_unclear_pct": 0.2828863346104726,
            "avg_trade_size": 2510.8866575342468,
            "avg_run_notional": 5852.322030651341,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.037675606641123884,
            "medium_confidence_pct": 0.31353767560664114,
            "low_confidence_pct": 0.2656449553001277,
            "na_confidence_pct": 0.3831417624521073,
            "avg_feature_coverage": 0.8440613026819923,
            "observable_run_pct": 0.9993614303959132,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "9MT",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.26175759204514915,
            "mixed_pct": 0.10507927976350444,
            "instit_pct": 0.30529427573233003,
            "ambiguous_pct": 0.31980650362805696,
            "unobservable_pct": 0.00806234883095942,
            "unclear_pct": 0.32786885245901637,
            "retail_qty_pct": 0.057043573325003906,
            "mixed_qty_pct": 0.08259149357072205,
            "instit_qty_pct": 0.4890806392836691,
            "ambiguous_qty_pct": 0.3590764745692123,
            "unobservable_qty_pct": 0.012207819251392577,
            "unclear_qty_pct": 0.3712842938206049,
            "retail_notional_pct": 0.05726872541057771,
            "mixed_notional_pct": 0.08426575234072378,
            "instit_notional_pct": 0.4868433321635764,
            "ambiguous_notional_pct": 0.3616607689816657,
            "unobservable_notional_pct": 0.009961421103456429,
            "unclear_notional_pct": 0.37162219008512215,
            "run_retail_pct": 0.4880636604774536,
            "run_mixed_pct": 0.09283819628647215,
            "run_instit_pct": 0.14058355437665782,
            "run_unclear_pct": 0.27851458885941643,
            "avg_trade_size": 2212.054420854609,
            "avg_run_notional": 4366.607161803713,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.010079575596816976,
            "medium_confidence_pct": 0.386737400530504,
            "low_confidence_pct": 0.23183023872679046,
            "na_confidence_pct": 0.3713527851458886,
            "avg_feature_coverage": 0.8452785145888592,
            "observable_run_pct": 0.9962864721485412,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "ITS",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.2656372934697089,
            "mixed_pct": 0.14103068450039338,
            "instit_pct": 0.31835169158143195,
            "ambiguous_pct": 0.2739968528717545,
            "unobservable_pct": 0.000983477576711251,
            "unclear_pct": 0.27498033044846576,
            "retail_qty_pct": 0.08511710970538218,
            "mixed_qty_pct": 0.11586561855695961,
            "instit_qty_pct": 0.44927837947658056,
            "ambiguous_qty_pct": 0.3488409424960997,
            "unobservable_qty_pct": 0.0008979497649779526,
            "unclear_qty_pct": 0.3497388922610777,
            "retail_notional_pct": 0.08533956580462337,
            "mixed_notional_pct": 0.11757989653141035,
            "instit_notional_pct": 0.4557595217461716,
            "ambiguous_notional_pct": 0.34039392997315876,
            "unobservable_notional_pct": 0.0009270859446359148,
            "unclear_notional_pct": 0.3413210159177947,
            "run_retail_pct": 0.5735329630524028,
            "run_mixed_pct": 0.1357160106254528,
            "run_instit_pct": 0.12533204539966192,
            "run_unclear_pct": 0.1654189809224825,
            "avg_trade_size": 3901.190401258851,
            "avg_run_notional": 9579.160589229654,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.1538275778797392,
            "medium_confidence_pct": 0.36585365853658536,
            "low_confidence_pct": 0.17918377203574015,
            "na_confidence_pct": 0.30113499154793527,
            "avg_feature_coverage": 0.8640545761893261,
            "observable_run_pct": 0.9997585124366095,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "U77",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.6219512195121951,
            "mixed_pct": 0.14146341463414633,
            "instit_pct": 0.1024390243902439,
            "ambiguous_pct": 0.13414634146341464,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.13414634146341464,
            "retail_qty_pct": 0.07988061797752809,
            "mixed_qty_pct": 0.06293890449438203,
            "instit_qty_pct": 0.4143258426966292,
            "ambiguous_qty_pct": 0.44285463483146065,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.44285463483146065,
            "retail_notional_pct": 0.07885599035222689,
            "mixed_notional_pct": 0.06260032436478563,
            "instit_notional_pct": 0.41472948808583193,
            "ambiguous_notional_pct": 0.4438141971971556,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.4438141971971556,
            "run_retail_pct": 0.7058823529411765,
            "run_mixed_pct": 0.13725490196078433,
            "run_instit_pct": 0.04201680672268908,
            "run_unclear_pct": 0.11484593837535013,
            "avg_trade_size": 586.5121951219512,
            "avg_run_notional": 673.5854341736695,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.5518207282913166,
            "medium_confidence_pct": 0.13165266106442577,
            "low_confidence_pct": 0.06442577030812324,
            "na_confidence_pct": 0.25210084033613445,
            "avg_feature_coverage": 0.8453781512605041,
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
            "retail_pct": 0.08888888888888889,
            "mixed_pct": 0.1111111111111111,
            "instit_pct": 0.37777777777777777,
            "ambiguous_pct": 0.28888888888888886,
            "unobservable_pct": 0.13333333333333333,
            "unclear_pct": 0.42222222222222217,
            "retail_qty_pct": 0.016763048093111778,
            "mixed_qty_pct": 0.015299026425591099,
            "instit_qty_pct": 0.13783763999707196,
            "ambiguous_qty_pct": 0.08520606104970353,
            "unobservable_qty_pct": 0.7448942244345216,
            "unclear_qty_pct": 0.8301002854842251,
            "retail_notional_pct": 0.016730689277848914,
            "mixed_notional_pct": 0.01508702742417077,
            "instit_notional_pct": 0.13459682348288535,
            "ambiguous_notional_pct": 0.08315564638869145,
            "unobservable_notional_pct": 0.7504298134264035,
            "unclear_notional_pct": 0.8335854598150949,
            "run_retail_pct": 0.12903225806451613,
            "run_mixed_pct": 0.12903225806451613,
            "run_instit_pct": 0.3225806451612903,
            "run_unclear_pct": 0.4193548387096774,
            "avg_trade_size": 12053.033333333333,
            "avg_run_notional": 17496.33870967742,
            "dominant_bucket": "INSTITUTIONAL",
            "dominant_label": "Mixed, leaning institution-like",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.45161290322580644,
            "na_confidence_pct": 0.5483870967741935,
            "avg_feature_coverage": 0.7903225806451617,
            "observable_run_pct": 0.9032258064516129,
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
            "instit_pct": 0.3333333333333333,
            "ambiguous_pct": 0.0,
            "unobservable_pct": 0.6666666666666666,
            "unclear_pct": 0.6666666666666666,
            "retail_qty_pct": 0.0,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.09090909090909091,
            "ambiguous_qty_pct": 0.0,
            "unobservable_qty_pct": 0.9090909090909091,
            "unclear_qty_pct": 0.9090909090909091,
            "retail_notional_pct": 0.0,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.09090909090909091,
            "ambiguous_notional_pct": 0.0,
            "unobservable_notional_pct": 0.9090909090909091,
            "unclear_notional_pct": 0.9090909090909091,
            "run_retail_pct": 0.0,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.3333333333333333,
            "run_unclear_pct": 0.6666666666666666,
            "avg_trade_size": 220.0,
            "avg_run_notional": 220.0,
            "dominant_bucket": "UNOBSERVABLE",
            "dominant_label": "Not Observable",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.3333333333333333,
            "na_confidence_pct": 0.6666666666666666,
            "avg_feature_coverage": 0.6,
            "observable_run_pct": 0.33333333333333337,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "KUX",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.5,
            "mixed_pct": 0.5,
            "instit_pct": 0.0,
            "ambiguous_pct": 0.0,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.0,
            "retail_qty_pct": 0.16666666666666666,
            "mixed_qty_pct": 0.8333333333333334,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": 0.0,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.0,
            "retail_notional_pct": 0.20895522388059704,
            "mixed_notional_pct": 0.7910447761194029,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": 0.0,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.0,
            "run_retail_pct": 0.5,
            "run_mixed_pct": 0.5,
            "run_instit_pct": 0.0,
            "run_unclear_pct": 0.0,
            "avg_trade_size": 16.75,
            "avg_run_notional": 16.75,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Mixed, leaning retail-like",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.5,
            "na_confidence_pct": 0.5,
            "avg_feature_coverage": 0.8500000000000001,
            "observable_run_pct": 1.0,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          }
        ]
      },
      "recent_trades": [
        {
          "trade_id": "BMLL-101",
          "timestamp": "2026-03-10T08:50:11.716800",
          "price": 0.22,
          "size": 6200.0,
          "notional": 1364.0,
          "bucket": "MIXED",
          "confidence": "NA",
          "run_id": 3593,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-100",
          "timestamp": "2026-03-10T08:48:41.648600",
          "price": 0.22,
          "size": 20000.0,
          "notional": 4400.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 3592,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-99",
          "timestamp": "2026-03-10T08:48:29.345400",
          "price": 0.22,
          "size": 11900.0,
          "notional": 2618.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 3591,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-98",
          "timestamp": "2026-03-10T08:48:29.345100",
          "price": 0.22,
          "size": 8100.0,
          "notional": 1782.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 3591,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-97",
          "timestamp": "2026-03-10T08:48:29.345100",
          "price": 0.22,
          "size": 20000.0,
          "notional": 4400.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 3591,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-96",
          "timestamp": "2026-03-10T08:48:29.345100",
          "price": 0.22,
          "size": 15800.0,
          "notional": 3476.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 3591,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-95",
          "timestamp": "2026-03-10T08:44:30.011400",
          "price": 0.22,
          "size": 4200.0,
          "notional": 924.0,
          "bucket": "MIXED",
          "confidence": "NA",
          "run_id": 3590,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-94",
          "timestamp": "2026-03-10T08:44:23.653300",
          "price": 0.22,
          "size": 2700.0,
          "notional": 594.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 3589,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-93",
          "timestamp": "2026-03-10T08:44:23.623100",
          "price": 0.22,
          "size": 8900.0,
          "notional": 1958.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 3589,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-92",
          "timestamp": "2026-03-10T08:44:23.593000",
          "price": 0.22,
          "size": 11100.0,
          "notional": 2442.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 3589,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-91",
          "timestamp": "2026-03-10T08:43:45.063700",
          "price": 0.22,
          "size": 2700.0,
          "notional": 594.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 3588,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "PERSISTENT_POSITIVE_IMPACT",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-90",
          "timestamp": "2026-03-10T08:43:45.063700",
          "price": 0.22,
          "size": 27000.0,
          "notional": 5940.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 3588,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "PERSISTENT_POSITIVE_IMPACT",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-89",
          "timestamp": "2026-03-10T08:28:00.596000",
          "price": 0.225,
          "size": 300.0,
          "notional": 67.5,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 3587,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-88",
          "timestamp": "2026-03-10T08:07:02.575200",
          "price": 0.22,
          "size": 27000.0,
          "notional": 5940.0,
          "bucket": "MIXED",
          "confidence": "NA",
          "run_id": 3586,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-87",
          "timestamp": "2026-03-10T08:06:43.331000",
          "price": 0.22,
          "size": 300.0,
          "notional": 66.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 3585,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-86",
          "timestamp": "2026-03-10T08:06:43.330900",
          "price": 0.22,
          "size": 100.0,
          "notional": 22.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 3585,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-85",
          "timestamp": "2026-03-10T08:06:43.330800",
          "price": 0.22,
          "size": 300.0,
          "notional": 66.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 3585,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-84",
          "timestamp": "2026-03-10T08:06:43.330700",
          "price": 0.22,
          "size": 100.0,
          "notional": 22.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 3585,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-83",
          "timestamp": "2026-03-10T08:06:43.330700",
          "price": 0.22,
          "size": 100.0,
          "notional": 22.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 3585,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-82",
          "timestamp": "2026-03-10T08:06:43.330400",
          "price": 0.22,
          "size": 100.0,
          "notional": 22.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 3585,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-81",
          "timestamp": "2026-03-10T08:06:40.133000",
          "price": 0.22,
          "size": 30000.0,
          "notional": 6600.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 3585,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-80",
          "timestamp": "2026-03-10T08:06:40.133000",
          "price": 0.22,
          "size": 20000.0,
          "notional": 4400.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 3585,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-79",
          "timestamp": "2026-03-10T06:12:24.870000",
          "price": 0.225,
          "size": 20000.0,
          "notional": 4500.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 3584,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "PERSISTENT_POSITIVE_IMPACT",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-78",
          "timestamp": "2026-03-10T06:12:24.870000",
          "price": 0.225,
          "size": 4700.0,
          "notional": 1057.5,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 3584,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "PERSISTENT_POSITIVE_IMPACT",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-77",
          "timestamp": "2026-03-10T06:12:09.594600",
          "price": 0.225,
          "size": 72200.0,
          "notional": 16245.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 3583,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-76",
          "timestamp": "2026-03-10T06:12:09.594600",
          "price": 0.225,
          "size": 177800.0,
          "notional": 40005.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": 3583,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-75",
          "timestamp": "2026-03-10T05:43:14.231500",
          "price": 0.22,
          "size": 20000.0,
          "notional": 4400.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 3582,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-74",
          "timestamp": "2026-03-10T05:42:45.574800",
          "price": 0.22,
          "size": 20000.0,
          "notional": 4400.0,
          "bucket": "MIXED",
          "confidence": "NA",
          "run_id": 3581,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-73",
          "timestamp": "2026-03-10T05:42:40.480600",
          "price": 0.22,
          "size": 10000.0,
          "notional": 2200.0,
          "bucket": "MIXED",
          "confidence": "NA",
          "run_id": 3580,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-72",
          "timestamp": "2026-03-10T05:42:05.484200",
          "price": 0.22,
          "size": 20000.0,
          "notional": 4400.0,
          "bucket": "MIXED",
          "confidence": "NA",
          "run_id": 3579,
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
      "total_trades": 2545,
      "price_moving_trades": 371,
      "pct_price_moving": 14.577603143418468,
      "all_movers": {
        "count": 371,
        "avg_size": 3285.5929919137466,
        "median_size": 225.0,
        "retail_count": 224,
        "mixed_count": 48,
        "institutional_count": 56,
        "ambiguous_count": 43,
        "unobservable_count": 0,
        "retail_pct": 60.37735849056604,
        "mixed_pct": 12.93800539083558,
        "instit_pct": 15.09433962264151,
        "unclear_pct": 11.590296495956872
      },
      "positive_movers": {
        "count": 186,
        "avg_size": 1377.465053763441,
        "median_size": 25.0,
        "retail_count": 149,
        "mixed_count": 19,
        "institutional_count": 13,
        "ambiguous_count": 5,
        "unobservable_count": 0,
        "retail_pct": 80.10752688172043,
        "mixed_pct": 10.21505376344086,
        "instit_pct": 6.989247311827956,
        "unclear_pct": 2.6881720430107525
      },
      "negative_movers": {
        "count": 185,
        "avg_size": 5204.0351351351355,
        "median_size": 2300.0,
        "retail_count": 75,
        "mixed_count": 29,
        "institutional_count": 43,
        "ambiguous_count": 38,
        "unobservable_count": 0,
        "retail_pct": 40.54054054054054,
        "mixed_pct": 15.675675675675677,
        "instit_pct": 23.243243243243246,
        "unclear_pct": 20.54054054054054
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
        "n_days_short_data": 21,
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
            "avg_short_ratio": 0.0,
            "max_short_ratio": 0.0,
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
            "month": "2026-03",
            "avg_short_ratio": 0.0
          },
          {
            "month": "2026-02",
            "avg_short_ratio": 0.0019135943047530368
          },
          {
            "month": "2026-01",
            "avg_short_ratio": 0.009069182023479604
          }
        ],
        "mom_change": [
          {
            "month": "2026-03",
            "avg_short_ratio": 0.0,
            "change_pct": null
          },
          {
            "month": "2026-02",
            "avg_short_ratio": 0.0019135943047530368,
            "change_pct": null
          },
          {
            "month": "2026-01",
            "avg_short_ratio": 0.009069182023479604,
            "change_pct": 373.9344176011251
          }
        ],
        "interpretation": "Shorts covering significantly (-100% MoM)"
      },
      "short_series": {
        "valid": true,
        "rows": [
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
            "short_ratio": 0.0,
            "short_vol": 0,
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
            "short_ratio": 0.0,
            "short_vol": 0,
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
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 4116600,
            "close": 0.22,
            "return": -0.06382978723404253
          },
          {
            "date": "2026-02-06",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 5132900,
            "close": 0.235,
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
          "ticker": "NXR",
          "avg_short_ratio": 8.65901786755033e-05,
          "max_short_ratio": 0.03229813664596273,
          "is_target": false
        },
        {
          "ticker": "QS9",
          "avg_short_ratio": 0.00029038005036423353,
          "max_short_ratio": 0.036503810997868175,
          "is_target": false
        },
        {
          "ticker": "U77",
          "avg_short_ratio": 0.0008358152750363119,
          "max_short_ratio": 0.12345679012345678,
          "is_target": false
        },
        {
          "ticker": "ITS",
          "avg_short_ratio": 0.002896509767500916,
          "max_short_ratio": 0.1385606874328679,
          "is_target": false
        },
        {
          "ticker": "9MT",
          "avg_short_ratio": 0.012700790860009943,
          "max_short_ratio": 0.14153787262548448,
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
          "opening": 0.026242496063736864,
          "continuous": 0.964410617617768,
          "closing": 0.0,
          "auctions": 0.03558938238223201,
          "other": 0.0
        },
        "1W": {
          "opening": 0.01611300695293594,
          "continuous": 0.9775623282870401,
          "closing": 0.004175854535780248,
          "auctions": 0.022437671712959885,
          "other": 0.0
        },
        "2W": {
          "opening": 0.020666158814429857,
          "continuous": 0.9709869936861193,
          "closing": 0.0039697281159134165,
          "auctions": 0.02901300631388072,
          "other": 0.0
        },
        "1M": {
          "opening": 0.012350525632551011,
          "continuous": 0.9673733879854373,
          "closing": 0.015322675270358887,
          "auctions": 0.03262661201456275,
          "other": 0.0
        }
      },
      "hhi": {
        "1D": 0.18066211845134017,
        "1W": 0.18311721030346437,
        "2W": 0.23469106332344336,
        "1M": 0.21324028429632685
      },
      "profile_buckets": [
        {
          "time": "08:30",
          "avg_share": 0.0152
        },
        {
          "time": "09:00",
          "avg_share": 0.1141
        },
        {
          "time": "09:30",
          "avg_share": 0.0958
        },
        {
          "time": "10:00",
          "avg_share": 0.0877
        },
        {
          "time": "10:30",
          "avg_share": 0.0577
        },
        {
          "time": "11:00",
          "avg_share": 0.023
        },
        {
          "time": "11:30",
          "avg_share": 0.0509
        },
        {
          "time": "12:00",
          "avg_share": 0.0024
        },
        {
          "time": "12:30",
          "avg_share": 0.0338
        },
        {
          "time": "13:00",
          "avg_share": 0.0886
        },
        {
          "time": "13:30",
          "avg_share": 0.0293
        },
        {
          "time": "14:00",
          "avg_share": 0.0579
        },
        {
          "time": "14:30",
          "avg_share": 0.0574
        },
        {
          "time": "15:00",
          "avg_share": 0.0564
        },
        {
          "time": "15:30",
          "avg_share": 0.0642
        },
        {
          "time": "16:00",
          "avg_share": 0.0801
        },
        {
          "time": "16:30",
          "avg_share": 0.0668
        },
        {
          "time": "17:00",
          "avg_share": 0.0188
        }
      ],
      "peers_hhi_rows": [
        {
          "ticker": "TKU",
          "auctions_pct": 7.157551749528065,
          "hhi": 0.19174389108913803,
          "interp": {
            "text": "Moderate",
            "cls": "bg-amber-500/20 text-amber-400",
            "you": true
          }
        },
        {
          "ticker": "ITS",
          "auctions_pct": 5.765129081176463,
          "hhi": 0.2477337436717611,
          "interp": {
            "text": "Moderate",
            "cls": "bg-amber-500/20 text-amber-400"
          }
        },
        {
          "ticker": "LVR",
          "auctions_pct": 2.637158091939449,
          "hhi": 0.34803951842734315,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "NXR",
          "auctions_pct": 2.5111618343360536,
          "hhi": 0.6541010571207647,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "U77",
          "auctions_pct": 8.35207121361496,
          "hhi": 0.5060933820556043,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "532",
          "auctions_pct": 7.916175447850615,
          "hhi": 0.7820036756064912,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "KUX",
          "auctions_pct": 2.7774164544367466,
          "hhi": 0.8114309581918787,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "9MT",
          "auctions_pct": 4.804743535407927,
          "hhi": 0.17282582057447085,
          "interp": {
            "text": "Moderate",
            "cls": "bg-amber-500/20 text-amber-400"
          }
        },
        {
          "ticker": "QS9",
          "auctions_pct": 6.038937517052925,
          "hhi": 0.45519572095433875,
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
