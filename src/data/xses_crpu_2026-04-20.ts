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
      "marketCap": 831762851.99,
      "sector": "REIT - Retail",
      "industry": "Real Estate"
    },
    {
      "ticker": "ODBU",
      "name": "UtdHampshReitUSD",
      "marketCap": 306639076.12,
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
      "marketCap": 1169849784.4,
      "sector": "REIT - Retail",
      "industry": "Real Estate"
    },
    {
      "ticker": "JYEU",
      "name": "Lendlease Reit",
      "marketCap": 1405194015.74,
      "sector": "REIT - Diversified",
      "industry": "Real Estate"
    },
    {
      "ticker": "AJBU",
      "name": "Keppel DC Reit",
      "marketCap": 4904376271.62,
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
    "asof_date": "2026-04-20",
    "industry": "Real Estate",
    "sector": "REIT - Retail",
    "market_cap_display": "831.8M",
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
          "score_pca": 77.41935483870968,
          "score_pca_percentile": 77.41935483870968,
          "rank_pca": 127,
          "total": 558,
          "adv_notional_sgd": 435907.5,
          "adv_volume_shares": 655500.0,
          "free_float_shares": 457060801.0,
          "turnover_ratio": 0.001434163679243191,
          "votes": 303.0,
          "trades": 303.0,
          "spread_pct": 0.007798798237736787,
          "spread_ticks": 1.0352,
          "amihud": 0.0,
          "volatility": 0.1433653116071401
        },
        "pca": {
          "valid": true,
          "window_days": 1,
          "variance_explained": 0.5142520690839768,
          "loadings": {
            "log_adv": 0.5557299764392276,
            "log_trades": 0.5110471072537945,
            "log_turnover": 0.5166519527989007,
            "neg_spread": 0.35935683136670143,
            "neg_amihud": 0.05217554589387711,
            "neg_vol": -0.17665273075791255
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
          "peer_median_adv": 367822.29647555493,
          "peer_median_score_pca": 73.47670250896057,
          "peer_median_trades": 424.0,
          "peer_median_volatility": 0.1712534099517612,
          "peer_median_spread_pct": 0.011331054487455094,
          "peer_median_spread_ticks": 1.0154107696728136,
          "peer_median_amihud": 2.1378160199808715e-09,
          "peer_median_turnover_ratio": 0.0005760000073781728,
          "target_vs_peer": {
            "score_pca_delta": 3.94,
            "adv_delta_pct": 18.5,
            "trades_delta_pct": -28.54,
            "volatility_delta_pct": 16.28,
            "spread_pct_delta_pct": 31.17,
            "spread_ticks_delta_pct": 1.95,
            "amihud_delta_pct": 100.0,
            "turnover_ratio_delta_pct": 148.99
          }
        },
        "peer_liquidity": [
          {
            "ticker": "CRPU",
            "score_pca": 77.41935483870968,
            "rank_pca": 127,
            "adv": 435907.5,
            "trades": 303.0,
            "volatility": 0.1433653116071401,
            "spread_pct": 0.007798798237736787,
            "spread_ticks": 1.0352,
            "amihud": 0.0,
            "turnover_ratio": 0.001434163679243191,
            "is_target": true
          },
          {
            "ticker": "ODBU",
            "score_pca": 67.02508960573476,
            "rank_pca": 185,
            "adv": 190012.59295110992,
            "trades": 60.0,
            "volatility": 0.18159812993066043,
            "spread_pct": 0.013984384104416747,
            "spread_ticks": 1.4634146341463414,
            "amihud": 5.01219912632841e-08,
            "turnover_ratio": 0.00048788302486749613,
            "is_target": false
          },
          {
            "ticker": "D5IU",
            "score_pca": 36.55913978494624,
            "rank_pca": 355,
            "adv": 434.7,
            "trades": 5.0,
            "volatility": 1.469613012006543,
            "spread_pct": 0.15384615384615383,
            "spread_ticks": 1.0,
            "amihud": 0.0,
            "turnover_ratio": 1.9593451190256015e-05,
            "is_target": false
          },
          {
            "ticker": "BMGU",
            "score_pca": 16.666666666666664,
            "rank_pca": 466,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.0,
            "spread_pct": 0.10704960835509135,
            "spread_ticks": 9.11111111111111,
            "amihud": null,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "AU8U",
            "score_pca": 79.92831541218638,
            "rank_pca": 113,
            "adv": 545632.0,
            "trades": 788.0,
            "volatility": 0.14020272621957552,
            "spread_pct": 0.007535129050713284,
            "spread_ticks": 1.0279187817258884,
            "amihud": 1.337764294064991e-08,
            "turnover_ratio": 0.0006641169898888495,
            "is_target": false
          },
          {
            "ticker": "JYEU",
            "score_pca": 89.78494623655914,
            "rank_pca": 58,
            "adv": 4067539.9999999995,
            "trades": 1527.0,
            "volatility": 0.24764024948971228,
            "spread_pct": 0.008677724870493442,
            "spread_ticks": 1.0029027576197387,
            "amihud": 2.1378160199808715e-09,
            "turnover_ratio": 0.008326146476681773,
            "is_target": false
          },
          {
            "ticker": "AJBU",
            "score_pca": 97.1326164874552,
            "rank_pca": 17,
            "adv": 31966494.0,
            "trades": 5388.0,
            "volatility": 0.16090868997286198,
            "spread_pct": 0.0042031209761054875,
            "spread_ticks": 1.0006213753106876,
            "amihud": 3.9935431914455233e-10,
            "turnover_ratio": 0.008253555989689363,
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
              "mean": 0.287099905847261,
              "median": 0.11697832115734137,
              "min": 0.0,
              "max": 7.1531235914562945,
              "p5": 0.0,
              "p95": 0.9371148002711501,
              "count": 558
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 3091429.2403059234,
              "median": 17598.0,
              "min": 0.0,
              "max": 234648645.0,
              "p5": 0.0,
              "p95": 14696667.999999983,
              "count": 558
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.11235695317723049,
              "median": 0.026577856067706268,
              "min": 0.00023213750933499092,
              "max": 1.2394366197183098,
              "p5": 0.0034649831527276535,
              "p95": 0.5759771077610273,
              "count": 556
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.02403180801553035,
              "median": 0.0003277359739206263,
              "min": 0.0,
              "max": 10.853348730538775,
              "p5": 0.0,
              "p95": 0.016831842852407568,
              "count": 551
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 0.00019712873948594313,
              "median": 1.5841888400692563e-08,
              "min": 0.0,
              "max": 0.032051282051282035,
              "p5": 0.0,
              "p95": 0.00011620761239663631,
              "count": 420
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 503.6774193548387,
              "median": 11.0,
              "min": 0.0,
              "max": 12136.0,
              "p5": 0.0,
              "p95": 2998.899999999996,
              "count": 558
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.26818157556553107,
              "median": 0.13268615859335786,
              "min": 0.0,
              "max": 1.469613012006543,
              "p5": 0.0,
              "p95": 1.0188078032799832,
              "count": 8
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 947589.8491188886,
              "median": 221258.296475555,
              "min": 0.0,
              "max": 6156227.999999999,
              "p5": 0.0,
              "p95": 4192519.3999999966,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.03847024253956825,
              "median": 0.008383704051603822,
              "min": 0.004203306613695833,
              "max": 0.15384615384615383,
              "p5": 0.004263731884045859,
              "p95": 0.13746736292428194,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0008205054287869962,
              "median": 0.0004092111946850034,
              "min": 0.0,
              "max": 0.0036277469206036665,
              "p5": 0.0,
              "p95": 0.0028599927861274986,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.0701494440618795e-08,
              "median": 3.5466621988938335e-10,
              "min": 0.0,
              "max": 5.01219912632841e-08,
              "p5": 0.0,
              "p95": 4.093590418262556e-08,
              "count": 6
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 391.25,
              "median": 106.0,
              "min": 0.0,
              "max": 1822.0,
              "p5": 0.0,
              "p95": 1460.0999999999995,
              "count": 8
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 6128352.215491851,
              "median": 367822.29647555493,
              "min": 0.0,
              "max": 31966494.0,
              "p5": 108.675,
              "p95": 24991755.5,
              "count": 6
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1294.6666666666667,
              "median": 424.0,
              "min": 0.0,
              "max": 5388.0,
              "p5": 1.25,
              "p95": 4422.75,
              "count": 6
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.3666604679365588,
              "median": 0.1712534099517612,
              "min": 0.0,
              "max": 1.469613012006543,
              "p5": 0.03505068155489388,
              "p95": 1.1641198213773354,
              "count": 6
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.049216020200495696,
              "median": 0.011331054487455094,
              "min": 0.0042031209761054875,
              "max": 0.15384615384615383,
              "p5": 0.005036122994757437,
              "p95": 0.1421470174733882,
              "count": 6
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 2.434328109985628,
              "median": 1.0154107696728136,
              "min": 1.0,
              "max": 9.11111111111111,
              "p5": 1.000155343827672,
              "p95": 7.199186991869919,
              "count": 6
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.3207360908611885e-08,
              "median": 2.1378160199808715e-09,
              "min": 0.0,
              "max": 5.01219912632841e-08,
              "p5": 7.987086382891047e-11,
              "p95": 4.277312159875726e-08,
              "count": 5
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0029585493220529563,
              "median": 0.0005760000073781728,
              "min": 0.0,
              "max": 0.008326146476681773,
              "p5": 4.898362797564004e-06,
              "p95": 0.008307998854933671,
              "count": 6
            }
          },
          "returns": {
            "window_days": 1,
            "n_obs": 1,
            "stock": 0.0,
            "market": 0.001228438217734773,
            "sector": 0.0,
            "peers": 0.0,
            "vs_market": -0.001228438217734773,
            "vs_sector": 0.0,
            "vs_peers": 0.0
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
          "votes": 431.0,
          "trades": 431.0,
          "spread_pct": 0.007843137254901968,
          "spread_ticks": 1.0,
          "amihud": 5.0607336622513225e-09,
          "volatility": 0.12870054244920792
        },
        "pca": {
          "valid": true,
          "window_days": 21,
          "variance_explained": 0.5251665975902572,
          "loadings": {
            "log_adv": 0.5459745870350186,
            "log_trades": 0.49990559775960575,
            "log_turnover": 0.5000584695700022,
            "neg_spread": 0.41311795891483516,
            "neg_amihud": 0.06410150101738063,
            "neg_vol": 0.16483998374550402
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
          "peer_median_adv": 588111.5214604912,
          "peer_median_score_pca": 77.15053763440861,
          "peer_median_trades": 434.0,
          "peer_median_volatility": 0.2196728089392483,
          "peer_median_spread_pct": 0.009789137551697753,
          "peer_median_spread_ticks": 1.0037682814911204,
          "peer_median_amihud": 3.865354012468057e-09,
          "peer_median_turnover_ratio": 0.0008733419113967652,
          "target_vs_peer": {
            "score_pca_delta": 6.72,
            "adv_delta_pct": 29.0,
            "trades_delta_pct": -0.69,
            "volatility_delta_pct": 41.41,
            "spread_pct_delta_pct": 19.88,
            "spread_ticks_delta_pct": -0.38,
            "amihud_delta_pct": -30.93,
            "turnover_ratio_delta_pct": 194.64
          }
        },
        "peer_liquidity": [
          {
            "ticker": "CRPU",
            "score_pca": 83.87096774193549,
            "rank_pca": 91,
            "adv": 758584.5,
            "trades": 431.0,
            "volatility": 0.12870054244920792,
            "spread_pct": 0.007843137254901968,
            "spread_ticks": 1.0,
            "amihud": 5.0607336622513225e-09,
            "turnover_ratio": 0.002573180630294305,
            "is_target": true
          },
          {
            "ticker": "ODBU",
            "score_pca": 68.99641577060932,
            "rank_pca": 174,
            "adv": 173599.04292098244,
            "trades": 28.0,
            "volatility": 0.1550613197547513,
            "spread_pct": 0.010544815465729359,
            "spread_ticks": 1.0869565217391304,
            "amihud": 3.262338829946087e-08,
            "turnover_ratio": 0.000450066579074847,
            "is_target": false
          },
          {
            "ticker": "D5IU",
            "score_pca": 41.39784946236559,
            "rank_pca": 328,
            "adv": 3941.0,
            "trades": 18.0,
            "volatility": 1.6545135133888742,
            "spread_pct": 0.15384615384615383,
            "spread_ticks": 1.0,
            "amihud": 0.0,
            "turnover_ratio": 0.00017763467021117773,
            "is_target": false
          },
          {
            "ticker": "BMGU",
            "score_pca": 20.43010752688172,
            "rank_pca": 445,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.3574468677972946,
            "spread_pct": 0.1030927835051546,
            "spread_ticks": 8.75,
            "amihud": 2.223951962637611e-06,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "AU8U",
            "score_pca": 85.30465949820788,
            "rank_pca": 83,
            "adv": 1002624.0,
            "trades": 840.0,
            "volatility": 0.1964106569916204,
            "spread_pct": 0.007716827383690226,
            "spread_ticks": 1.0064274236743438,
            "amihud": 6.7126638081279865e-09,
            "turnover_ratio": 0.0012966172437186834,
            "is_target": false
          },
          {
            "ticker": "JYEU",
            "score_pca": 95.3405017921147,
            "rank_pca": 27,
            "adv": 7253306.999999999,
            "trades": 2800.0,
            "volatility": 0.2429349608868762,
            "spread_pct": 0.00903345963766615,
            "spread_ticks": 1.0,
            "amihud": 1.018044216808127e-09,
            "turnover_ratio": 0.015629719167485033,
            "is_target": false
          },
          {
            "ticker": "AJBU",
            "score_pca": 97.4910394265233,
            "rank_pca": 15,
            "adv": 25242931.0,
            "trades": 3666.0,
            "volatility": 0.19511903126541313,
            "spread_pct": 0.004474984142267051,
            "spread_ticks": 1.001109139307897,
            "amihud": 3.120990590179181e-10,
            "turnover_ratio": 0.006955974309001116,
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
              "mean": 0.6670847589170026,
              "median": 0.3840879024801651,
              "min": 0.0,
              "max": 10.387919701256177,
              "p5": 0.0,
              "p95": 1.9623226997186642,
              "count": 558
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 3155172.9401245494,
              "median": 11827.999999999998,
              "min": 0.0,
              "max": 257790312.0,
              "p5": 0.0,
              "p95": 12714416.099999962,
              "count": 558
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.10919532784101953,
              "median": 0.032964871194379415,
              "min": 0.0002652156920799096,
              "max": 1.27027027027027,
              "p5": 0.003399263876122767,
              "p95": 0.522357121705656,
              "count": 556
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.004286706237661212,
              "median": 0.00022487334908106405,
              "min": 0.0,
              "max": 0.8766725990376376,
              "p5": 0.0,
              "p95": 0.011889744419980822,
              "count": 551
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 0.00025833733682608143,
              "median": 1.3342799272389862e-07,
              "min": 0.0,
              "max": 0.11111111111111112,
              "p5": 0.0,
              "p95": 0.00011678218614448368,
              "count": 542
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 470.39068100358423,
              "median": 6.0,
              "min": 0.0,
              "max": 10632.0,
              "p5": 0.0,
              "p95": 2827.699999999999,
              "count": 558
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.371789992931861,
              "median": 0.17378730110503743,
              "min": 0.12870054244920792,
              "max": 1.6545135133888742,
              "p5": 0.13076970689405776,
              "p95": 1.2005401874318207,
              "count": 8
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 9666941.192865122,
              "median": 819340.25,
              "min": 0.0,
              "max": 65900017.0,
              "p5": 1379.3500000000001,
              "p95": 45850844.849999964,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.037641524954878366,
              "median": 0.0085310169536581,
              "min": 0.004332557752007294,
              "max": 0.15384615384615383,
              "p5": 0.0044041222614461285,
              "p95": 0.13608247422680408,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.00238959395282674,
              "median": 0.00124608711993779,
              "min": 0.0,
              "max": 0.008113139420650676,
              "p5": 6.217213457391221e-05,
              "p95": 0.007132235252300504,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 2.844210905087979e-07,
              "median": 5.693216014736079e-09,
              "min": 0.0,
              "max": 2.223951962637611e-06,
              "p5": 2.83839649038696e-11,
              "p95": 1.4569869616192573e-06,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1202.25,
              "median": 491.5,
              "min": 0.0,
              "max": 5927.0,
              "p5": 6.300000000000001,
              "p95": 4490.249999999998,
              "count": 8
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 5612733.673820163,
              "median": 588111.5214604912,
              "min": 0.0,
              "max": 25242931.0,
              "p5": 985.25,
              "p95": 20745525.0,
              "count": 6
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1225.3333333333333,
              "median": 434.0,
              "min": 0.0,
              "max": 3666.0,
              "p5": 4.5,
              "p95": 3449.5,
              "count": 6
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.46691439168080495,
              "median": 0.2196728089392483,
              "min": 0.1550613197547513,
              "max": 1.6545135133888742,
              "p5": 0.16507574763241675,
              "p95": 1.3302468519909794,
              "count": 6
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.04811817066344354,
              "median": 0.009789137551697753,
              "min": 0.004474984142267051,
              "max": 0.15384615384615383,
              "p5": 0.005285444952622845,
              "p95": 0.14115781126090401,
              "count": 6
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 2.3074155141202284,
              "median": 1.0037682814911204,
              "min": 1.0,
              "max": 8.75,
              "p5": 1.0,
              "p95": 6.834239130434783,
              "count": 6
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 3.7743635967017104e-07,
              "median": 3.865354012468057e-09,
              "min": 0.0,
              "max": 2.223951962637611e-06,
              "p5": 7.802476475447953e-11,
              "p95": 1.6761198190530735e-06,
              "count": 6
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.004085001994915143,
              "median": 0.0008733419113967652,
              "min": 0.0,
              "max": 0.015629719167485033,
              "p5": 4.4408667552794434e-05,
              "p95": 0.013461282952864053,
              "count": 6
            }
          },
          "returns": {
            "window_days": 21,
            "n_obs": 21,
            "stock": 0.0390625,
            "market": 0.007339537914803129,
            "sector": 0.016569031286701286,
            "peers": 0.004812965070177144,
            "vs_market": 0.03172296208519687,
            "vs_sector": 0.022493468713298714,
            "vs_peers": 0.034249534929822856
          }
        }
      },
      "3m": {
        "label": "3M",
        "window_days": 63,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 63,
          "score_pca": 83.87096774193549,
          "score_pca_percentile": 83.87096774193549,
          "rank_pca": 91,
          "total": 558,
          "adv_notional_sgd": 720015.0,
          "adv_volume_shares": 1043500.0,
          "free_float_shares": 457060801.0,
          "turnover_ratio": 0.0022830660553627307,
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
          "variance_explained": 0.563419771419332,
          "loadings": {
            "log_adv": 0.5150114909843655,
            "log_trades": 0.46370766567020194,
            "log_turnover": 0.4711209561007613,
            "neg_spread": 0.42403560274576435,
            "neg_amihud": 0.24816461267487494,
            "neg_vol": 0.2374690343927475
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
          "peer_median_trades": 454.0,
          "peer_median_volatility": 0.20787036222702593,
          "peer_median_spread_pct": 0.009492585555914933,
          "peer_median_spread_ticks": 1.0024494277010672,
          "peer_median_amihud": 3.0362268675832606e-09,
          "peer_median_turnover_ratio": 0.0015160210296591538,
          "target_vs_peer": {
            "score_pca_delta": 7.8,
            "adv_delta_pct": -4.7,
            "trades_delta_pct": -21.59,
            "volatility_delta_pct": 14.59,
            "spread_pct_delta_pct": 20.81,
            "spread_ticks_delta_pct": -0.24,
            "amihud_delta_pct": -66.68,
            "turnover_ratio_delta_pct": 50.6
          }
        },
        "peer_liquidity": [
          {
            "ticker": "CRPU",
            "score_pca": 83.87096774193549,
            "rank_pca": 91,
            "adv": 720015.0,
            "trades": 356.0,
            "volatility": 0.17753427278742037,
            "spread_pct": 0.007517392376497309,
            "spread_ticks": 1.0,
            "amihud": 5.0607336622513225e-09,
            "turnover_ratio": 0.0022830660553627307,
            "is_target": true
          },
          {
            "ticker": "ODBU",
            "score_pca": 65.41218637992831,
            "rank_pca": 194,
            "adv": 115583.88146457536,
            "trades": 21.0,
            "volatility": 0.19865751605104984,
            "spread_pct": 0.010307446241336423,
            "spread_ticks": 1.0869565217391304,
            "amihud": 3.262338829946087e-08,
            "turnover_ratio": 0.0002911696745559579,
            "is_target": false
          },
          {
            "ticker": "D5IU",
            "score_pca": 46.0573476702509,
            "rank_pca": 302,
            "adv": 32829.6,
            "trades": 28.0,
            "volatility": 1.4160899315262931,
            "spread_pct": 0.15384615384615383,
            "spread_ticks": 1.0,
            "amihud": 0.0,
            "turnover_ratio": 0.001294776902567691,
            "is_target": false
          },
          {
            "ticker": "BMGU",
            "score_pca": 19.71326164874552,
            "rank_pca": 449,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.43028980417941975,
            "spread_pct": 0.1030927835051546,
            "spread_ticks": 8.6,
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
            "volatility": 0.19787531105787848,
            "spread_pct": 0.007493574058804418,
            "spread_ticks": 1.0038948393378773,
            "amihud": 5.132415551362783e-09,
            "turnover_ratio": 0.0017372651567506168,
            "is_target": false
          },
          {
            "ticker": "JYEU",
            "score_pca": 95.6989247311828,
            "rank_pca": 25,
            "adv": 8533513.5,
            "trades": 2568.0,
            "volatility": 0.217083208403002,
            "spread_pct": 0.008677724870493442,
            "spread_ticks": 1.0,
            "amihud": 9.400381838037385e-10,
            "turnover_ratio": 0.01651362278247,
            "is_target": false
          },
          {
            "ticker": "AJBU",
            "score_pca": 97.84946236559139,
            "rank_pca": 13,
            "adv": 26369527.0,
            "trades": 3666.0,
            "volatility": 0.15006951886020714,
            "spread_pct": 0.00443959362536729,
            "spread_ticks": 1.001004016064257,
            "amihud": 2.0820116263752226e-10,
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
              "mean": 0.6881752386819189,
              "median": 0.45010813612928435,
              "min": 0.0,
              "max": 8.244255086754888,
              "p5": 0.16214365648669,
              "p95": 2.217724397739971,
              "count": 558
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 3182625.8121963833,
              "median": 12762.9,
              "min": 0.0,
              "max": 285980477.7,
              "p5": 0.0,
              "p95": 13375851.649999995,
              "count": 558
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.09965188998331558,
              "median": 0.028898939276021877,
              "min": 0.0002671610380959682,
              "max": 1.3542204201990415,
              "p5": 0.0035497559767940093,
              "p95": 0.49935452487417914,
              "count": 556
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.005802381294482941,
              "median": 0.00027425406150485447,
              "min": 0.0,
              "max": 1.9774569903104608,
              "p5": 0.0,
              "p95": 0.009641274447432787,
              "count": 551
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.321327181274868e-05,
              "median": 1.4656846579457811e-07,
              "min": 0.0,
              "max": 0.0007965556065062838,
              "p5": 0.0,
              "p95": 3.975737896669845e-05,
              "count": 555
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 454.1379928315412,
              "median": 7.0,
              "min": 0.0,
              "max": 11391.0,
              "p5": 0.0,
              "p95": 2571.8499999999995,
              "count": 558
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.36469463292079823,
              "median": 0.19826641355446417,
              "min": 0.11253069469914052,
              "max": 1.4160899315262931,
              "p5": 0.13397471682826126,
              "p95": 1.0710598869548869,
              "count": 8
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 9979881.810183072,
              "median": 764780.0,
              "min": 0.0,
              "max": 65900017.0,
              "p5": 11490.36,
              "p95": 46637841.19999997,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.03750673896068358,
              "median": 0.00827481162662089,
              "min": 0.004249022843416297,
              "max": 0.15384615384615383,
              "p5": 0.0043422226262970305,
              "p95": 0.13608247422680408,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0026412204055132273,
              "median": 0.0015160210296591538,
              "min": 0.0,
              "max": 0.007894898611904696,
              "p5": 0.00010190938609458527,
              "p95": 0.0074240396553083505,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.172516996340317e-06,
              "median": 5.096574606807052e-09,
              "min": 0.0,
              "max": 9.329750709061133e-06,
              "p5": 3.3556930318298625e-11,
              "p95": 6.075756146794543e-06,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1186.5,
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
              "mean": 6074548.16357743,
              "median": 755709.4407322877,
              "min": 0.0,
              "max": 26369527.0,
              "p5": 8207.4,
              "p95": 21910523.625,
              "count": 6
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1193.8333333333333,
              "median": 454.0,
              "min": 0.0,
              "max": 3666.0,
              "p5": 5.25,
              "p95": 3391.5,
              "count": 6
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.4350108816796417,
              "median": 0.20787036222702593,
              "min": 0.15006951886020714,
              "max": 1.4160899315262931,
              "p5": 0.16202096690962497,
              "p95": 1.1696398996895747,
              "count": 6
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.04797621269121833,
              "median": 0.009492585555914933,
              "min": 0.00443959362536729,
              "max": 0.15384615384615383,
              "p5": 0.005203088733726572,
              "p95": 0.14115781126090401,
              "count": 6
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 2.281975896190211,
              "median": 1.0024494277010672,
              "min": 1.0,
              "max": 8.6,
              "p5": 1.0,
              "p95": 6.721739130434782,
              "count": 6
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.561442458709733e-06,
              "median": 3.0362268675832606e-09,
              "min": 0.0,
              "max": 9.329750709061133e-06,
              "p5": 5.2050290659380566e-11,
              "p95": 7.005468878870715e-06,
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
            "market": 0.031958450731386145,
            "sector": -0.027643743257694253,
            "peers": -0.02840073230673501,
            "vs_market": -0.06115553102335736,
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
          "votes": 381.5,
          "trades": 381.5,
          "spread_pct": 0.007398318729788046,
          "spread_ticks": 1.0,
          "amihud": 5.056605737842221e-09,
          "volatility": 0.14367004088145197
        },
        "pca": {
          "valid": true,
          "window_days": 126,
          "variance_explained": 0.578583730478992,
          "loadings": {
            "log_adv": 0.5018211328423684,
            "log_trades": 0.4471350397170073,
            "log_turnover": 0.45530296413822896,
            "neg_spread": 0.4310379062872869,
            "neg_amihud": 0.2617308556768861,
            "neg_vol": 0.2943608334461833
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
          "peer_median_adv": 659747.1406326109,
          "peer_median_score_pca": 76.61290322580645,
          "peer_median_trades": 386.0,
          "peer_median_volatility": 0.190597614087335,
          "peer_median_spread_pct": 0.009071939159481346,
          "peer_median_spread_ticks": 1.0044527761608082,
          "peer_median_amihud": 3.1414126462447607e-09,
          "peer_median_turnover_ratio": 0.0012319069294889507,
          "target_vs_peer": {
            "score_pca_delta": 8.87,
            "adv_delta_pct": -9.3,
            "trades_delta_pct": -1.17,
            "volatility_delta_pct": 24.62,
            "spread_pct_delta_pct": 18.45,
            "spread_ticks_delta_pct": -0.44,
            "amihud_delta_pct": -60.97,
            "turnover_ratio_delta_pct": 54.94
          }
        },
        "peer_liquidity": [
          {
            "ticker": "CRPU",
            "score_pca": 85.48387096774194,
            "rank_pca": 82,
            "adv": 598704.75,
            "trades": 381.5,
            "volatility": 0.14367004088145197,
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
            "adv": 94452.5312652218,
            "trades": 21.0,
            "volatility": 0.17142875537843755,
            "spread_pct": 0.010046712327059847,
            "spread_ticks": 1.015401332262484,
            "amihud": 3.262338829946087e-08,
            "turnover_ratio": 0.00024250007840129282,
            "is_target": false
          },
          {
            "ticker": "D5IU",
            "score_pca": 49.283154121863795,
            "rank_pca": 284,
            "adv": 37871.6,
            "trades": 35.0,
            "volatility": 1.313943944244829,
            "spread_pct": 0.1176470588235293,
            "spread_ticks": 1.0,
            "amihud": 0.0,
            "turnover_ratio": 0.0011410424566344825,
            "is_target": false
          },
          {
            "ticker": "BMGU",
            "score_pca": 19.35483870967742,
            "rank_pca": 451,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.5681845738993425,
            "spread_pct": 0.1080229241911543,
            "spread_ticks": 9.1010101010101,
            "amihud": 6.330000391958183e-06,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "AU8U",
            "score_pca": 87.09677419354838,
            "rank_pca": 73,
            "adv": 1225041.75,
            "trades": 737.0,
            "volatility": 0.1779173594243016,
            "spread_pct": 0.0065839468229689285,
            "spread_ticks": 1.0081019193745988,
            "amihud": 5.261278976490837e-09,
            "turnover_ratio": 0.0013227714023434187,
            "is_target": false
          },
          {
            "ticker": "JYEU",
            "score_pca": 95.87813620071685,
            "rank_pca": 24,
            "adv": 7860405.5,
            "trades": 1882.0,
            "volatility": 0.20327786875036843,
            "spread_pct": 0.008097165991902843,
            "spread_ticks": 1.0001715149056616,
            "amihud": 1.0215463159986848e-09,
            "turnover_ratio": 0.015346086429244727,
            "is_target": false
          },
          {
            "ticker": "AJBU",
            "score_pca": 97.4910394265233,
            "rank_pca": 15,
            "adv": 19081735.68,
            "trades": 3231.0,
            "volatility": 0.1378783736862606,
            "spread_pct": 0.004428487683346552,
            "spread_ticks": 1.0008036329470178,
            "amihud": 2.7130394186595765e-10,
            "turnover_ratio": 0.005024073301787748,
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
              "mean": 0.6947503471464468,
              "median": 0.4456827228399698,
              "min": 0.0,
              "max": 6.96160900941729,
              "p5": 0.15321992530690562,
              "p95": 2.026958014344107,
              "count": 558
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 2560306.527887705,
              "median": 11551.925,
              "min": 0.0,
              "max": 243597405.0,
              "p5": 0.0,
              "p95": 10361319.637499996,
              "count": 558
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.09480512186742747,
              "median": 0.028712140051527835,
              "min": 0.00027368816798512355,
              "max": 1.267605633802817,
              "p5": 0.003574398515619928,
              "p95": 0.48213174723043983,
              "count": 556
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0032277526336973762,
              "median": 0.0002672699900169425,
              "min": 0.0,
              "max": 0.856898029134533,
              "p5": 0.0,
              "p95": 0.00721357299860245,
              "count": 551
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 9.666821782121708e-06,
              "median": 1.7837494320266074e-07,
              "min": 0.0,
              "max": 0.0006620397444526588,
              "p5": 0.0,
              "p95": 4.1115218000148154e-05,
              "count": 557
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 374.34139784946234,
              "median": 6.75,
              "min": 0.0,
              "max": 10156.5,
              "p5": 0.0,
              "p95": 2017.0499999999984,
              "count": 558
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.35023735358369856,
              "median": 0.16995912779426003,
              "min": 0.11569622475149695,
              "max": 1.313943944244829,
              "p5": 0.12510149654634936,
              "p95": 1.0529281646239084,
              "count": 8
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 8595961.328908153,
              "median": 654171.125,
              "min": 0.0,
              "max": 55576180.0,
              "p5": 13255.060000000001,
              "p95": 39808547.87499998,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.03339580044929406,
              "median": 0.008065971591968263,
              "min": 0.004267253241731738,
              "max": 0.1176470588235293,
              "p5": 0.004337012358515765,
              "p95": 0.11427861170219804,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0023188523195365315,
              "median": 0.0012319069294889507,
              "min": 0.0,
              "max": 0.006703440813375584,
              "p5": 8.48750274404525e-05,
              "p95": 0.006569650253822697,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 7.975441625380049e-07,
              "median": 5.158942357166529e-09,
              "min": 0.0,
              "max": 6.330000391958183e-06,
              "p5": 3.416998366066311e-11,
              "p95": 4.125918440677627e-06,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1091.6875,
              "median": 404.5,
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
              "mean": 4716584.510210871,
              "median": 659747.1406326109,
              "min": 0.0,
              "max": 19081735.68,
              "p5": 9467.9,
              "p95": 16276403.135,
              "count": 6
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 984.3333333333334,
              "median": 386.0,
              "min": 0.0,
              "max": 3231.0,
              "p5": 5.25,
              "p95": 2893.75,
              "count": 6
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.4287718125639233,
              "median": 0.190597614087335,
              "min": 0.1378783736862606,
              "max": 1.313943944244829,
              "p5": 0.14626596910930484,
              "p95": 1.1275041016584575,
              "count": 6
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.04247104930666029,
              "median": 0.009071939159481346,
              "min": 0.004428487683346552,
              "max": 0.1176470588235293,
              "p5": 0.004967352468252147,
              "p95": 0.11524102516543555,
              "count": 6
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 2.354248083416644,
              "median": 1.0044527761608082,
              "min": 1.0,
              "max": 9.1010101010101,
              "p5": 1.0000428787264153,
              "p95": 7.0796079088231965,
              "count": 6
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.061529651582e-06,
              "median": 3.1414126462447607e-09,
              "min": 0.0,
              "max": 6.330000391958183e-06,
              "p5": 6.782598546648941e-11,
              "p95": 4.755656141043502e-06,
              "count": 6
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0038460789447352785,
              "median": 0.0012319069294889507,
              "min": 0.0,
              "max": 0.015346086429244727,
              "p5": 6.0625019600323205e-05,
              "p95": 0.012765583147380482,
              "count": 6
            }
          },
          "returns": {
            "window_days": 126,
            "n_obs": 126,
            "stock": -0.01481481481481417,
            "market": 0.14872356637865236,
            "sector": -0.016527981337835063,
            "peers": -0.03304390614976782,
            "vs_market": -0.16353838119346653,
            "vs_sector": 0.0017131665230208926,
            "vs_peers": 0.01822909133495365
          }
        }
      }
    },
    "period_insights": {
      "1d": {
        "liquidity": "Near-term tradability is thinner, with 1D average volume down 42.5% from the 1M average, which makes current access less robust than the monthly picture.",
        "market_comparison": "Price was flat on the day, in line with peers, so the main read is lighter trading activity rather than a return-driven dislocation."
      },
      "30d": {
        "liquidity": "1M score 83.9 vs peer median 77.2 (+6.7 pts).",
        "market_comparison": "The stock returned 3.9% over 1M compared with 0.5% for peers, giving liquidity a firmer trading backdrop than the peer group."
      },
      "3m": {
        "liquidity": "Quarterly tradability remains solid, with a 3M liquidity score of 83.9 compared with a peer median of 76.1, indicating access has held up over the medium term.",
        "market_comparison": "Returns were broadly in line with peers over 3M, so the relative liquidity standing matters more than price divergence in this window."
      },
      "6m": {
        "liquidity": "6M score 85.5 vs peer median 76.6 (+8.9 pts).",
        "market_comparison": "The stock outperformed peers over 6M, which reinforces that the stronger liquidity standing has been maintained alongside a better share-price path."
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
          "median": 0.4456406106544034,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "44.6%",
          "display_range": null,
          "display_text": "44.6%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "share_pct",
          "value_pct": 44.6,
          "plain_english": "Market explains about 44.6% of price moves in the current state."
        },
        "sector_share": {
          "median": 0.42879400108839927,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "42.9%",
          "display_range": null,
          "display_text": "42.9%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "share_pct",
          "value_pct": 42.9,
          "plain_english": "Sector explains about 42.9% of price moves in the current state."
        },
        "company_share": {
          "median": 0.12556538825719735,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "12.6%",
          "display_range": null,
          "display_text": "12.6%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "share_pct",
          "value_pct": 12.6,
          "plain_english": "Company-specific explains about 12.6% of price moves in the current state."
        },
        "basis": "current_state"
      },
      "current_sensitivities": {
        "beta_market": {
          "median": 0.7870982835102613,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "0.79",
          "display_range": null,
          "display_text": "0.79",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "beta",
          "strength_label": "Modest",
          "plain_english": "Modest market link: a 1% market move has lined up with about a 0.79% stock move in the same direction in this state.",
          "value_num": 0.79
        },
        "beta_stock_lag": {
          "median": -0.19449778084111966,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "-0.19",
          "display_range": null,
          "display_text": "-0.19",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "lag_beta",
          "value_num": -0.19
        },
        "beta_sector": {
          "median": 0.08331213351811746,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "0.08",
          "display_range": null,
          "display_text": "0.08",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "beta",
          "strength_label": "Weak",
          "plain_english": "Weak sector link: a 1% sector move has lined up with about a 0.08% stock move in the same direction in this state.",
          "value_num": 0.08
        },
        "beta_market_lag": {
          "median": 1.6117938649918961,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "1.61",
          "display_range": null,
          "display_text": "1.61",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "lag_beta",
          "value_num": 1.61
        },
        "beta_sector_lag": {
          "median": 1.8182760577572799,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "1.82",
          "display_range": null,
          "display_text": "1.82",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "lag_beta",
          "value_num": 1.82
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
          "period_label": "2025-04-23 to 2025-04-30",
          "n_obs": 6,
          "partial_month": true,
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.5091610002968168,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "50.9%",
            "display_range": null,
            "display_text": "50.9%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 6 trading days.",
            "kind": "share_pct",
            "value_pct": 50.9,
            "plain_english": "Market explains about 50.9% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.5091610002968168,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "50.9%",
              "display_range": null,
              "display_text": "50.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 6 trading days.",
              "kind": "share_pct",
              "value_pct": 50.9,
              "plain_english": "Market explains about 50.9% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.3951959075780516,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "39.5%",
              "display_range": null,
              "display_text": "39.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 6 trading days.",
              "kind": "share_pct",
              "value_pct": 39.5,
              "plain_english": "Sector explains about 39.5% of price moves in the current state."
            },
            "company_share": {
              "median": 0.09564309212513157,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "9.6%",
              "display_range": null,
              "display_text": "9.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 6 trading days.",
              "kind": "share_pct",
              "value_pct": 9.6,
              "plain_english": "Company-specific explains about 9.6% of price moves in the current state."
            }
          },
          "summary": "Apr: Mostly market-driven, though based on only 6 trading days."
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
          "period_label": "2026-04-01 to 2026-04-20",
          "n_obs": 13,
          "partial_month": false,
          "dominant_driver": "sector",
          "dominant_driver_label": "Sector",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.46101919828108207,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "46.1%",
            "display_range": null,
            "display_text": "46.1%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 13 trading days.",
            "kind": "share_pct",
            "value_pct": 46.1,
            "plain_english": "Sector explains about 46.1% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.15205600878045206,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "15.2%",
              "display_range": null,
              "display_text": "15.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 13 trading days.",
              "kind": "share_pct",
              "value_pct": 15.2,
              "plain_english": "Market explains about 15.2% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.46101919828108207,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "46.1%",
              "display_range": null,
              "display_text": "46.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 13 trading days.",
              "kind": "share_pct",
              "value_pct": 46.1,
              "plain_english": "Sector explains about 46.1% of price moves in the current state."
            },
            "company_share": {
              "median": 0.38692479293846577,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "38.7%",
              "display_range": null,
              "display_text": "38.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 13 trading days.",
              "kind": "share_pct",
              "value_pct": 38.7,
              "plain_english": "Company-specific explains about 38.7% of price moves in the current state."
            }
          },
          "summary": "Apr: Mostly sector-driven."
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
            "median": 0.005585309480740537,
            "low": 0.005585309480740537,
            "high": 0.005585309480740537
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
            "median": 0.011419380524692246,
            "low": 0.011419380524692246,
            "high": 0.011419380524692246
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
        "market_link_display": "0.79",
        "sector_link_display": "0.08",
        "market_link_explainer": "Modest market link. A 1% market move has lined up with about a 0.79% stock move in the same direction in this state. This is a point estimate from 251 trading days.",
        "sector_link_explainer": "Weak sector link. A 1% sector move has lined up with about a 0.08% stock move in the same direction in this state. This is a point estimate from 251 trading days.",
        "stock_persistence_display": "-0.19",
        "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
        "history_limited_note": "Read is based on 251 trading days versus the 252-day target."
      },
      "current_summary": {
        "regime_label": "High Volatility",
        "dominant_driver": "market",
        "dominant_driver_label": "Market",
        "driver_share_pct": 44.6,
        "driver_share_display": "44.6%",
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
            "median": 0.005585309480740537,
            "low": 0.005585309480740537,
            "high": 0.005585309480740537
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
            "median": 0.011419380524692246,
            "low": 0.011419380524692246,
            "high": 0.011419380524692246
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
        "text": "Moderate short interest",
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
    "liq_subtitle": "Longer-term liquidity stands above peers, while the latest session shows lighter trading activity.",
    "market_comparison_title": "How You Compare to the Market",
    "market_comparison_subtitle": "Context relative to market, sector, and peer medians.",
    "perf_title": "Stock Performance",
    "perf_subtitle": "Recent returns are ahead of both peers and the market, with 1M performance at +3.9% compared with +0.5% for peers and +0.7% for the market.",
    "perf_insight": "Recent performance is firmer than the main comparison groups, with a 1M return of +3.9% compared with +0.5% for peers and +0.7% for the market. That matters because the stock is trading against a stronger return backdrop while market factors still account for 44.6% of the tape.",
    "drivers_title": "What Moves Your Stock Price?",
    "drivers_subtitle": "Market moves remain the main influence on trading, with market factors accounting for 44.6% of the tape.",
    "drivers_strip": [
      {
        "title": "Current Driver (Last 5 Days)",
        "text": "Over the last 5 trading days, moves are mainly market-driven, accounting for about 44.6% of price changes. Other influences are sector 42.9%, and company-specific 12.6%."
      },
      {
        "title": "Driver Mix",
        "text": "Based on the last 5 trading days, current mix is market 44.6%, sector 42.9%, and company-specific 12.6%."
      },
      {
        "title": "Monthly Trend",
        "text": "The driver mix has shifted from company-driven to sector-driven over Feb to Apr."
      }
    ],
    "drivers_pie_title": "Current Driver Mix (Last 5 Days)",
    "drivers_pie_note": "Based on the last 5 trading days, current split is market 44.6%, sector 42.9%, and company-specific 12.6%.",
    "lead_lag_title": "",
    "lead_lag_note": "",
    "rolling_title": "Monthly Driver Shift",
    "rolling_latest_label": "Latest: {period}",
    "rolling_note": "Each bar shows the monthly split between market-, sector-, and company-driven moves.",
    "drivers_bottom_line": "That matters because broader market conditions are still shaping trading while the order book remains balanced, with top-10 bid depth at 0.97x ask depth and the spread at 1 tick.",
    "drivers_wtd_title": "Key Reads",
    "drivers_wtd_list": [
      "Main driver now is the market at 44.6% of recent price moves.",
      "The pattern has shifted from mostly market in Feb and Mar to mostly sector-driven in Apr."
    ],
    "regime_title": "Market State",
    "regime_subtitle": "Current trading conditions look orderly, with balanced displayed depth and a 1-tick spread supporting execution quality.",
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
    "exec_check_subtitle": "Combines the final continuous-session displayed book before close, trade-size stress tests based on Apr 21, 2025 to Apr 20, 2026 (253 trading days • 98,733 trades), large sell-side orders observed today, and intraday spread/depth during the continuous trading session.",
    "order_book_title": "Order Book Depth (Available Liquidity)",
    "order_book_note": "Depth shown is based on top 10 bid and top 10 ask levels.",
    "peer_capacity_title": "Peer Capacity Context",
    "peer_capacity_note": "Immediate displayed depth broadly matches the stronger monthly liquidity read.",
    "impact_summary_title": "Estimated Price Impact (Sell Orders)",
    "impact_summary_subtitle": "Approximate price impact (%) for sell orders.",
    "exec_check_insight": "Execution conditions look balanced, with top-10 bid depth at 0.97x ask depth and the spread at 1 tick. That matters because displayed liquidity remains orderly even as 1D average volume sits 42.5% below the 1M average.",
    "trader_composition_title": "Who's Trading Your Stock?",
    "trader_composition_subtitle": "Shows whether trading is mostly retail-like, institution-like, mixed, or unclassified.",
    "trader_retail_threshold": "Retail-like flow",
    "trader_mixed_threshold": "Mixed flow",
    "trader_instit_threshold": "Institution-like flow",
    "peer_trader_title": "Peer Comparison: Trader Mix",
    "peer_trader_subtitle": "How the trader mix compares with peers.",
    "price_moving_title": "Which Trades Move the Price?",
    "price_moving_subtitle": "Price-moving trades are 24.2% of total trades.",
    "intraday_title": "When Does Trading Happen?",
    "intraday_subtitle": "Displayed liquidity looks balanced, with bid depth close to ask depth and a 1-tick spread.",
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
    "intraday_insight": "The order book looks orderly, with top-10 bid depth at 0.97x ask depth and the spread at 1 tick. That matters because immediate execution conditions are balanced despite lighter activity in the latest session.",
    "short_title": "Short Selling & Lending",
    "short_subtitle": "Market direction remains the clearer near-term influence on trading conditions.",
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
    "exec_subtitle": "Liquidity is mixed for the stock’s size, with stronger peer-relative standing offset by lighter recent activity.",
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
        "sub": "Peer median S$659.7K",
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
    "liq_insight": "Liquidity is mixed for the stock’s size, because longer-term standing is better than peers while the latest session was less active. The 6M liquidity score is 85.5 compared with a peer median of 76.6, but 1D average volume is down 42.5% from the 1M average. That matters because peer-relative access looks sound, though current trading activity is lighter than the recent average.",
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
        "value": "0.97x",
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
        "text": "Estimated impact ~-0.65% with 100.0% fill.",
        "cls": "warn"
      },
      {
        "title": "S$2.5M sell",
        "text": "Estimated impact ~-1.73% with 100.0% fill.",
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
        "subtext": "Peer median S$659.7K",
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
        "value": "44.6",
        "suffix": "market",
        "bar_pct": 45,
        "color_value": "text-amber-400",
        "color_bar": "bg-amber-500",
        "subtext": "Sector 42.9% • Company 12.6%",
        "interpretation": {
          "text": "Market",
          "cls": "interpretation-neutral",
          "icon": "◆"
        }
      }
    ],
    "exec_takeaways": [
      "Structural liquidity is solid relative to peers, with a 6M liquidity score of 85.5 compared with the peer median of 76.6. That matters because access to liquidity screens better than much of the peer group even if the overall picture is not unequivocally strong.",
      "Recent activity is lighter, with 1D average volume down 42.5% from the 1M average. That matters because day-to-day trading support is currently below the recent average.",
      "Execution conditions remain balanced, with top-10 bid depth at 0.97x ask depth and the spread at 1 tick. That matters because the current book looks orderly while market factors still account for 44.6% of the tape."
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
      "overall": "6M liquidity is strong: score 85.5 vs peer median 76.6 (+8.9 pts). 1D average volume down -42.5% from 1M. Recent flow does not show a clear deterioration from the monthly baseline.",
      "strengths": [
        "6M score 85.5 vs peer median 76.6 (+8.9 pts)."
      ],
      "concerns": [
        "1D average volume down -42.5% from 1M."
      ],
      "peer_context": "Primary-period score gap vs peers: +8.9 pts."
    },
    "market_comparison": {
      "returns": {
        "insight": "6M return is -1.5%, better than sector and peers, but worse than market, which shows price performance is mixed across comparison groups.",
        "vs_market": "Worse than market: -1.5% vs market 14.9%.",
        "vs_sector": "Better than sector: -1.5% vs sector -1.7%.",
        "vs_peers": "Better than peers: -1.5% vs peers -3.3%."
      },
      "adv": {
        "insight": "ADV is S$598.7K, better than market, which supports stronger day-to-day trading size than comparable names.",
        "vs_market": "Better than market: S$598.7K vs market S$11.6K.",
        "vs_sector": "In line with sector: S$598.7K vs sector S$654.2K.",
        "vs_peers": "In line with peers: S$598.7K vs peers S$659.7K."
      },
      "spread": {
        "insight": "Spread is 0.74%, better than market and peers, which keeps trading costs more competitive than comparable names.",
        "vs_market": "Better than market: 0.74% vs market 2.87%.",
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
        "vs_market": "Better than market: 14.37% vs market 44.57%.",
        "vs_sector": "Better than sector: 14.37% vs sector 17.00%.",
        "vs_peers": "Better than peers: 14.37% vs peers 19.06%."
      },
      "trades": {
        "insight": "Trades is 382, better than market, which supports more fully reflective of day-to-day access day-to-day activity than comparable names.",
        "vs_market": "Better than market: 382 vs market 7.",
        "vs_sector": "In line with sector: 382 vs sector 404.",
        "vs_peers": "In line with peers: 382 vs peers 386."
      },
      "amihud": {
        "insight": "Price impact is 5.06e-09, better than market, but worse than peers, which shows price impact is mixed across comparison groups.",
        "vs_market": "Better than market: 5.06e-09 vs market 1.78e-07.",
        "vs_sector": "In line with sector: 5.06e-09 vs sector 5.16e-09.",
        "vs_peers": "Worse than peers: 5.06e-09 vs peers 3.14e-09."
      }
    },
    "performance": {
      "overall": "Performance is mixed relative to comparison groups. Recent price performance is stronger than the main comparison groups, so the tape has a firmer return backdrop than peers. Recent flow does not show a clear deterioration from the monthly baseline.",
      "conclusion": "The recent move looks mixed in confirmation and is driven meaningfully by broader market conditions rather than by company-specific trading alone."
    },
    "drivers": {
      "overall": "The stock is being driven mainly by the market right now, with market factors explaining 44.6% of recent price moves. That matters because the tape is responding more to the broader backdrop than to company-specific developments, which can make near-term trading conditions feel more externally led.",
      "beta": "This broader-driver pattern sits alongside a 1M return of 3.9%, ahead of peers at 0.5% and the market at 0.7%. That stronger recent performance gives the stock a firmer backdrop even as current moves are being set more by external factors.",
      "rolling_change": "The monthly picture has become more balanced and less company-led. It was still clearly company-driven in Feb, mostly market in Mar, and mostly sector-driven in Apr, which suggests the current pattern is a recent shift rather than a long-standing feature."
    },
    "regime": {
      "overall": "High volatility is the active backdrop, which matters because price moves are likely to stay larger even though underlying liquidity remains respectable for the stock’s size with a 6M score of 85.5 compared with a peer median of 76.6.",
      "current": "The market state is high volatility, while the stock has still outperformed over 1M with a 3.9% return compared with 0.5% for peers and 0.7% for the market.",
      "transitions": "This looks more settled than fleeting because the typical run length is about 10.3 days, although the 1D average volume is 42.5% below the 1M average.",
      "trading_implications": "Trading conditions look active rather than dislocated, with a 1-tick spread and top-10 bid depth at 0.97x of ask depth, but lower recent volume means steadiness can be tested when volatility stays elevated."
    },
    "execution": {
      "overall": "top-10 bid depth is 0.97x ask depth; spread is 1 tick. Immediate displayed depth broadly matches the stronger monthly liquidity read.",
      "concern": "The main watchpoint is lighter recent activity, with 1D average volume down 42.5% from the 1M average. That matters because a balanced book can still feel thinner if trading interest stays below the recent average.",
      "peer_context": "The current book supports the stronger medium-term standing, with a 6M liquidity score of 85.5 compared with a peer median of 76.6. That matters because the live depth does not contradict the stock's better peer-relative liquidity position."
    },
    "trader_composition": {
      "overall": "Flow looks mixed on individual trade count and trade value, so the trading base appears balanced rather than clearly retail-led or institution-led.",
      "retail_heavy": "Retail-like trades account for 60.0% of individual trade count but only 9.5% of trade value, while institution-like trades are 11.0% of count and 48.5% of value. That split shows frequent smaller tickets alongside a meaningful share of value from larger tickets, which makes the flow look mixed.",
      "institutional_gap": "Institution-like activity is a minority of individual trades at 11.0% of count, but it carries nearly half of trade value at 48.5%. That gives the tape meaningful depth in value terms even though the trade count is broader.",
      "peer_comparison": "The trader mix does not read as unusually one-sided, with count led by retail-like activity and value supported by institution-like trades. That points to a balanced profile relative to peers rather than an extreme composition."
    },
    "price_moving": {
      "overall": "Price-moving activity is present, but the broader read stays mixed because trading is split between high trade count and concentrated trade value. The cleanest signal is the divide between count and value: retail-like trades dominate activity at 60.0% of count, while institution-like trades contribute 48.5% of value on just 11.0% of trades. That matters because price formation is likely being shaped by larger-value tickets even as day-to-day activity looks broad.",
      "interpretation": "",
      "asymmetry": ""
    },
    "short_selling": {
      "overall": "Short activity appears moderate rather than elevated, and the sharp 77% month-on-month drop in shorts points to less pressure from that side of the tape. That matters because the stronger 1M share-price gain of 3.9%, compared with 0.5% for peers and 0.7% for the market, is not being offset by rising short pressure.",
      "level": "Moderate short interest",
      "correlation": "Moderate negative - shorts somewhat predict drops",
      "trend": "The short trend is falling sharply, with shorts covering by 77% month on month. That reduces the chance that short activity is a separate driver of the current trading picture.",
      "peaks": "5 notable peak days identified."
    },
    "intraday": {
      "overall": "Liquidity is most reliable in the continuous session, which accounts for 87.2% of activity compared with 3.7% at the open and 7.9% at the close. That matters because trading is available through most of the day rather than being concentrated in the auction windows.",
      "hhi_interpretation": "A concentration score of 0.228 indicates activity is reasonably spread across the session. That supports a steadier intraday flow profile.",
      "best_times": "Peak buckets show where activity clusters through the day.",
      "peer_ranking": "Intraday activity looks broadly well distributed, with most trading taking place in the continuous session rather than being pushed into the edges of the day. That suggests a solid intraday standing relative to peers."
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
        19.35483870967742,
        87.09677419354838,
        95.87813620071685,
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
        94452.5312652218,
        37871.6,
        0.0,
        1225041.75,
        7860405.5,
        19081735.68
      ],
      "total": 558
    },
    "market_comparison": {
      "sector_name": "REIT - Retail",
      "sector_count": 8,
      "market_count": 558,
      "company": {
        "volatility": 0.14367004088145197,
        "adv": 598704.75,
        "spread_pct": 0.007398318729788046,
        "turnover_ratio": 0.0019087176106357894,
        "amihud": 5.056605737842221e-09,
        "trades": 381.5
      },
      "market": {
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.6947503471464468,
          "median": 0.4456827228399698,
          "min": 0.0,
          "max": 6.96160900941729,
          "p5": 0.15321992530690562,
          "p95": 2.026958014344107,
          "count": 558
        },
        "adv": {
          "direction": "higher_is_better",
          "mean": 2560306.527887705,
          "median": 11551.925,
          "min": 0.0,
          "max": 243597405.0,
          "p5": 0.0,
          "p95": 10361319.637499996,
          "count": 558
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.09480512186742747,
          "median": 0.028712140051527835,
          "min": 0.00027368816798512355,
          "max": 1.267605633802817,
          "p5": 0.003574398515619928,
          "p95": 0.48213174723043983,
          "count": 556
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.0032277526336973762,
          "median": 0.0002672699900169425,
          "min": 0.0,
          "max": 0.856898029134533,
          "p5": 0.0,
          "p95": 0.00721357299860245,
          "count": 551
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 9.666821782121708e-06,
          "median": 1.7837494320266074e-07,
          "min": 0.0,
          "max": 0.0006620397444526588,
          "p5": 0.0,
          "p95": 4.1115218000148154e-05,
          "count": 557
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 374.34139784946234,
          "median": 6.75,
          "min": 0.0,
          "max": 10156.5,
          "p5": 0.0,
          "p95": 2017.0499999999984,
          "count": 558
        }
      },
      "sector": {
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.35023735358369856,
          "median": 0.16995912779426003,
          "min": 0.11569622475149695,
          "max": 1.313943944244829,
          "p5": 0.12510149654634936,
          "p95": 1.0529281646239084,
          "count": 8
        },
        "adv": {
          "direction": "higher_is_better",
          "mean": 8595961.328908153,
          "median": 654171.125,
          "min": 0.0,
          "max": 55576180.0,
          "p5": 13255.060000000001,
          "p95": 39808547.87499998,
          "count": 8
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.03339580044929406,
          "median": 0.008065971591968263,
          "min": 0.004267253241731738,
          "max": 0.1176470588235293,
          "p5": 0.004337012358515765,
          "p95": 0.11427861170219804,
          "count": 8
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.0023188523195365315,
          "median": 0.0012319069294889507,
          "min": 0.0,
          "max": 0.006703440813375584,
          "p5": 8.48750274404525e-05,
          "p95": 0.006569650253822697,
          "count": 8
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 7.975441625380049e-07,
          "median": 5.158942357166529e-09,
          "min": 0.0,
          "max": 6.330000391958183e-06,
          "p5": 3.416998366066311e-11,
          "p95": 4.125918440677627e-06,
          "count": 8
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 1091.6875,
          "median": 404.5,
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
          "mean": 4716584.510210871,
          "median": 659747.1406326109,
          "min": 0.0,
          "max": 19081735.68,
          "p5": 9467.9,
          "p95": 16276403.135,
          "count": 6
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 984.3333333333334,
          "median": 386.0,
          "min": 0.0,
          "max": 3231.0,
          "p5": 5.25,
          "p95": 2893.75,
          "count": 6
        },
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.4287718125639233,
          "median": 0.190597614087335,
          "min": 0.1378783736862606,
          "max": 1.313943944244829,
          "p5": 0.14626596910930484,
          "p95": 1.1275041016584575,
          "count": 6
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.04247104930666029,
          "median": 0.009071939159481346,
          "min": 0.004428487683346552,
          "max": 0.1176470588235293,
          "p5": 0.004967352468252147,
          "p95": 0.11524102516543555,
          "count": 6
        },
        "spread_ticks": {
          "direction": "neutral",
          "mean": 2.354248083416644,
          "median": 1.0044527761608082,
          "min": 1.0,
          "max": 9.1010101010101,
          "p5": 1.0000428787264153,
          "p95": 7.0796079088231965,
          "count": 6
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 1.061529651582e-06,
          "median": 3.1414126462447607e-09,
          "min": 0.0,
          "max": 6.330000391958183e-06,
          "p5": 6.782598546648941e-11,
          "p95": 4.755656141043502e-06,
          "count": 6
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.0038460789447352785,
          "median": 0.0012319069294889507,
          "min": 0.0,
          "max": 0.015346086429244727,
          "p5": 6.0625019600323205e-05,
          "p95": 0.012765583147380482,
          "count": 6
        }
      }
    },
    "returns": [
      {
        "horizon": "1M",
        "stock": 0.0390625,
        "market": 0.007339537914803129,
        "sector": 0.016569031286701286,
        "peers": 0.004812965070177144
      },
      {
        "horizon": "3M",
        "stock": -0.02919708029197121,
        "market": 0.031958450731386145,
        "sector": -0.027643743257694253,
        "peers": -0.02840073230673501
      },
      {
        "horizon": "6M",
        "stock": -0.01481481481481417,
        "market": 0.14872356637865236,
        "sector": -0.016527981337835063,
        "peers": -0.03304390614976782
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
      "share_market": 0.4456406106544034,
      "share_sector": 0.42879400108839927,
      "share_idio": 0.12556538825719735,
      "beta_market": 0.7870982835102613,
      "beta_sector": 0.08331213351811746,
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
            "median": 0.4456406106544034,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "44.6%",
            "display_range": null,
            "display_text": "44.6%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "share_pct",
            "value_pct": 44.6,
            "plain_english": "Market explains about 44.6% of price moves in the current state."
          },
          "sector_share": {
            "median": 0.42879400108839927,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "42.9%",
            "display_range": null,
            "display_text": "42.9%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "share_pct",
            "value_pct": 42.9,
            "plain_english": "Sector explains about 42.9% of price moves in the current state."
          },
          "company_share": {
            "median": 0.12556538825719735,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "12.6%",
            "display_range": null,
            "display_text": "12.6%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "share_pct",
            "value_pct": 12.6,
            "plain_english": "Company-specific explains about 12.6% of price moves in the current state."
          },
          "basis": "current_state"
        },
        "current_sensitivities": {
          "beta_market": {
            "median": 0.7870982835102613,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "0.79",
            "display_range": null,
            "display_text": "0.79",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "beta",
            "strength_label": "Modest",
            "plain_english": "Modest market link: a 1% market move has lined up with about a 0.79% stock move in the same direction in this state.",
            "value_num": 0.79
          },
          "beta_stock_lag": {
            "median": -0.19449778084111966,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "-0.19",
            "display_range": null,
            "display_text": "-0.19",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "lag_beta",
            "value_num": -0.19
          },
          "beta_sector": {
            "median": 0.08331213351811746,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "0.08",
            "display_range": null,
            "display_text": "0.08",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "beta",
            "strength_label": "Weak",
            "plain_english": "Weak sector link: a 1% sector move has lined up with about a 0.08% stock move in the same direction in this state.",
            "value_num": 0.08
          },
          "beta_market_lag": {
            "median": 1.6117938649918961,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "1.61",
            "display_range": null,
            "display_text": "1.61",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "lag_beta",
            "value_num": 1.61
          },
          "beta_sector_lag": {
            "median": 1.8182760577572799,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "1.82",
            "display_range": null,
            "display_text": "1.82",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "lag_beta",
            "value_num": 1.82
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
            "period_label": "2025-04-23 to 2025-04-30",
            "n_obs": 6,
            "partial_month": true,
            "dominant_driver": "market",
            "dominant_driver_label": "Market",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.5091610002968168,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "50.9%",
              "display_range": null,
              "display_text": "50.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 6 trading days.",
              "kind": "share_pct",
              "value_pct": 50.9,
              "plain_english": "Market explains about 50.9% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.5091610002968168,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "50.9%",
                "display_range": null,
                "display_text": "50.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 6 trading days.",
                "kind": "share_pct",
                "value_pct": 50.9,
                "plain_english": "Market explains about 50.9% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.3951959075780516,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "39.5%",
                "display_range": null,
                "display_text": "39.5%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 6 trading days.",
                "kind": "share_pct",
                "value_pct": 39.5,
                "plain_english": "Sector explains about 39.5% of price moves in the current state."
              },
              "company_share": {
                "median": 0.09564309212513157,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "9.6%",
                "display_range": null,
                "display_text": "9.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 6 trading days.",
                "kind": "share_pct",
                "value_pct": 9.6,
                "plain_english": "Company-specific explains about 9.6% of price moves in the current state."
              }
            },
            "summary": "Apr: Mostly market-driven, though based on only 6 trading days."
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
            "period_label": "2026-04-01 to 2026-04-20",
            "n_obs": 13,
            "partial_month": false,
            "dominant_driver": "sector",
            "dominant_driver_label": "Sector",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.46101919828108207,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "46.1%",
              "display_range": null,
              "display_text": "46.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 13 trading days.",
              "kind": "share_pct",
              "value_pct": 46.1,
              "plain_english": "Sector explains about 46.1% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.15205600878045206,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "15.2%",
                "display_range": null,
                "display_text": "15.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 13 trading days.",
                "kind": "share_pct",
                "value_pct": 15.2,
                "plain_english": "Market explains about 15.2% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.46101919828108207,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "46.1%",
                "display_range": null,
                "display_text": "46.1%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 13 trading days.",
                "kind": "share_pct",
                "value_pct": 46.1,
                "plain_english": "Sector explains about 46.1% of price moves in the current state."
              },
              "company_share": {
                "median": 0.38692479293846577,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "38.7%",
                "display_range": null,
                "display_text": "38.7%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 13 trading days.",
                "kind": "share_pct",
                "value_pct": 38.7,
                "plain_english": "Company-specific explains about 38.7% of price moves in the current state."
              }
            },
            "summary": "Apr: Mostly sector-driven."
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
              "median": 0.005585309480740537,
              "low": 0.005585309480740537,
              "high": 0.005585309480740537
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
              "median": 0.011419380524692246,
              "low": 0.011419380524692246,
              "high": 0.011419380524692246
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
          "market_link_display": "0.79",
          "sector_link_display": "0.08",
          "market_link_explainer": "Modest market link. A 1% market move has lined up with about a 0.79% stock move in the same direction in this state. This is a point estimate from 251 trading days.",
          "sector_link_explainer": "Weak sector link. A 1% sector move has lined up with about a 0.08% stock move in the same direction in this state. This is a point estimate from 251 trading days.",
          "stock_persistence_display": "-0.19",
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "history_limited_note": "Read is based on 251 trading days versus the 252-day target."
        },
        "current_summary": {
          "regime_label": "High Volatility",
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "driver_share_pct": 44.6,
          "driver_share_display": "44.6%",
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
          "period_label": "2025-04-23 to 2025-04-30",
          "n_obs": 6,
          "partial_month": true,
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "regime_label": null,
          "summary": "Apr: Mostly market-driven, though based on only 6 trading days.",
          "share_market": 0.5091610002968168,
          "share_sector": 0.3951959075780516,
          "share_company": 0.09564309212513157,
          "share_market_display": "50.9%",
          "share_sector_display": "39.5%",
          "share_company_display": "9.6%",
          "dominant_share_display": "50.9%"
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
          "period_label": "2026-04-01 to 2026-04-20",
          "n_obs": 13,
          "partial_month": false,
          "dominant_driver": "sector",
          "dominant_driver_label": "Sector",
          "regime_label": null,
          "summary": "Apr: Mostly sector-driven.",
          "share_market": 0.15205600878045206,
          "share_sector": 0.46101919828108207,
          "share_company": 0.38692479293846577,
          "share_market_display": "15.2%",
          "share_sector_display": "46.1%",
          "share_company_display": "38.7%",
          "dominant_share_display": "46.1%"
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
              "median": 0.005585309480740537,
              "low": 0.005585309480740537,
              "high": 0.005585309480740537
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
              "median": 0.011419380524692246,
              "low": 0.011419380524692246,
              "high": 0.011419380524692246
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
          "quantity": 974300.0,
          "value": 643038.0
        },
        {
          "level": 2,
          "price": 0.655,
          "quantity": 906600.0,
          "value": 593823.0
        },
        {
          "level": 3,
          "price": 0.65,
          "quantity": 884300.0,
          "value": 574795.0
        },
        {
          "level": 4,
          "price": 0.645,
          "quantity": 510700.0,
          "value": 329401.5
        },
        {
          "level": 5,
          "price": 0.64,
          "quantity": 251600.0,
          "value": 161024.0
        },
        {
          "level": 6,
          "price": 0.635,
          "quantity": 199500.0,
          "value": 126682.5
        },
        {
          "level": 7,
          "price": 0.63,
          "quantity": 712900.0,
          "value": 449127.0
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
          "quantity": 173400.0,
          "value": 107508.0
        },
        {
          "level": 10,
          "price": 0.615,
          "quantity": 22800.0,
          "value": 14022.0
        }
      ],
      "asks": [
        {
          "level": 1,
          "price": 0.665,
          "quantity": 281100.0,
          "value": 186931.5
        },
        {
          "level": 2,
          "price": 0.67,
          "quantity": 692300.0,
          "value": 463841.0
        },
        {
          "level": 3,
          "price": 0.675,
          "quantity": 515000.0,
          "value": 347625.0
        },
        {
          "level": 4,
          "price": 0.68,
          "quantity": 437800.0,
          "value": 297704.0
        },
        {
          "level": 5,
          "price": 0.685,
          "quantity": 690200.0,
          "value": 472787.00000000006
        },
        {
          "level": 6,
          "price": 0.69,
          "quantity": 1752800.0,
          "value": 1209432.0
        },
        {
          "level": 7,
          "price": 0.695,
          "quantity": 52700.0,
          "value": 36626.5
        },
        {
          "level": 8,
          "price": 0.7,
          "quantity": 136200.0,
          "value": 95340.0
        },
        {
          "level": 9,
          "price": 0.705,
          "quantity": 101000.0,
          "value": 71205.0
        },
        {
          "level": 10,
          "price": 0.71,
          "quantity": 51300.0,
          "value": 36423.0
        }
      ]
    },
    "execution_dynamic": {
      "snapshot": {
        "valid": true,
        "snapshot_time": "2026-04-20 08:59:58.081100",
        "snapshot_basis": "last_continuous_session_snapshot",
        "snapshot_label": "final continuous-session displayed book before close",
        "snapshot_note": "Final continuous-session displayed book before close",
        "snapshot_mic": "XSES",
        "mid_price": 0.6625000000000001,
        "spread_pct": 0.007547169811320759,
        "spread_ticks": 1.0,
        "tick_size": 0.005,
        "bid_depth_notional_top10": 3106108.5,
        "ask_depth_notional_top10": 3217915.0,
        "bid_ask_depth_ratio": 0.9653
      },
      "historical_trade_scenarios": {
        "valid": true,
        "requested_lookback_calendar_days": 365,
        "lookback_calendar_days": 365,
        "effective_calendar_days": 365,
        "history_limited": false,
        "trade_days_used": 253,
        "n_trades_used": 98733,
        "first_trade_date": "2025-04-21",
        "last_trade_date": "2026-04-20",
        "window_label": "Apr 21, 2025 to Apr 20, 2026",
        "window_short_label": "Apr 21, 2025 to Apr 20, 2026",
        "trade_days_label": "253 trading days",
        "trade_count_label": "98,733 trades",
        "window_detail_label": "253 trading days • 98,733 trades",
        "history_note": "Trade-size percentiles use Apr 21, 2025 to Apr 20, 2026 history (253 trading days • 98,733 trades).",
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
            "pct_of_adv": 0.48
          },
          {
            "key": "p95",
            "label": "95th percentile trade",
            "quantile": 0.95,
            "trade_notional": 7876.0,
            "impact_pct": -0.003774,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 0.25,
            "pct_of_adv": 1.11
          },
          {
            "key": "p99_99",
            "label": "99.99th percentile trade",
            "quantile": 0.9999,
            "trade_notional": 340000.0,
            "impact_pct": -0.003774,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 10.95,
            "pct_of_adv": 47.75
          }
        ]
      },
      "l3_sell_order_scenarios": {
        "valid": true,
        "trade_date": "2026-04-20",
        "selection_method": "largest_observed_ask_orders_during_day",
        "orders": [
          {
            "rank": 1,
            "order_id": "8137223323647089664",
            "timestamp": "2026-04-19 22:59:01.354300000",
            "local_timestamp": "2026-04-20 06:59:01",
            "posted_price": 0.69,
            "size_shares": 1000000.0,
            "notional": 690000.0,
            "impact_pct": -0.004291,
            "filled_pct": 100.0,
            "levels_consumed": 2,
            "pct_of_bid_depth": 22.21,
            "price_vs_mid_pct": 4.151,
            "executed_event_count": 0,
            "event_count": 1
          },
          {
            "rank": 2,
            "order_id": "8137619147835821056",
            "timestamp": "2026-04-19 22:59:01.354300000",
            "local_timestamp": "2026-04-20 06:59:01",
            "posted_price": 0.78,
            "size_shares": 600000.0,
            "notional": 468000.0,
            "impact_pct": -0.003774,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 15.07,
            "price_vs_mid_pct": 17.736,
            "executed_event_count": 0,
            "event_count": 1
          },
          {
            "rank": 3,
            "order_id": "8138989689077154816",
            "timestamp": "2026-04-20 01:00:00.355300000",
            "local_timestamp": "2026-04-20 09:00:00",
            "posted_price": 0.675,
            "size_shares": 300000.0,
            "notional": 202500.0,
            "impact_pct": -0.003774,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 6.52,
            "price_vs_mid_pct": 1.887,
            "executed_event_count": 0,
            "event_count": 2
          }
        ]
      },
      "intraday_liquidity_profile": {
        "valid": true,
        "trade_date": "2026-04-20",
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
            "bid_depth_notional": 2898609.5,
            "ask_depth_notional": 3086548.5,
            "mid_price": 0.6675
          },
          {
            "bucket": "09:30",
            "spread_pct": 0.00754716981132076,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 2921950.5,
            "ask_depth_notional": 3162801.0,
            "mid_price": 0.6625000000000001
          },
          {
            "bucket": "10:00",
            "spread_pct": 0.00754716981132076,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 2979989.5,
            "ask_depth_notional": 3163067.0,
            "mid_price": 0.6625000000000001
          },
          {
            "bucket": "10:30",
            "spread_pct": 0.007490636704119857,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 2946282.0,
            "ask_depth_notional": 3165229.5,
            "mid_price": 0.6675
          },
          {
            "bucket": "11:00",
            "spread_pct": 0.00754716981132076,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 3065670.5,
            "ask_depth_notional": 3222957.5,
            "mid_price": 0.6625000000000001
          },
          {
            "bucket": "11:30",
            "spread_pct": 0.00754716981132076,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 2996280.5,
            "ask_depth_notional": 3246655.5,
            "mid_price": 0.6625000000000001
          },
          {
            "bucket": "13:00",
            "spread_pct": 0.00754716981132076,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 3061668.0,
            "ask_depth_notional": 3173328.0,
            "mid_price": 0.6625000000000001
          },
          {
            "bucket": "13:30",
            "spread_pct": 0.00754716981132076,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 3071766.0,
            "ask_depth_notional": 3240293.0,
            "mid_price": 0.6625000000000001
          },
          {
            "bucket": "14:00",
            "spread_pct": 0.00754716981132076,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 3071832.0,
            "ask_depth_notional": 3372428.5,
            "mid_price": 0.6625000000000001
          },
          {
            "bucket": "14:30",
            "spread_pct": 0.00754716981132076,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 3072355.0,
            "ask_depth_notional": 3379993.0,
            "mid_price": 0.6625000000000001
          },
          {
            "bucket": "15:00",
            "spread_pct": 0.00754716981132076,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 3071563.0,
            "ask_depth_notional": 3396160.5,
            "mid_price": 0.6625000000000001
          },
          {
            "bucket": "15:30",
            "spread_pct": 0.00754716981132076,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 3044747.0,
            "ask_depth_notional": 3432014.5,
            "mid_price": 0.6625000000000001
          },
          {
            "bucket": "16:00",
            "spread_pct": 0.00754716981132076,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 3174624.5,
            "ask_depth_notional": 3208769.0,
            "mid_price": 0.6625000000000001
          },
          {
            "bucket": "16:30",
            "spread_pct": 0.00754716981132076,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 3106108.5,
            "ask_depth_notional": 3217915.0,
            "mid_price": 0.6625000000000001
          }
        ],
        "summary": {
          "median_spread_pct": 0.00754716981132076,
          "median_spread_ticks": 1.0000000000000009,
          "median_bid_depth_notional": 3063669.25,
          "median_ask_depth_notional": 3220436.25,
          "tightest_bucket": "09:00",
          "widest_bucket": "09:30",
          "deepest_bid_bucket": "16:00",
          "thinnest_bid_bucket": "09:00"
        }
      }
    },
    "peer_capacity": {
      "bx_ticket_pct_adv_50k": 7.0,
      "peers": [
        {
          "ticker": "AJBU",
          "pct": 4.2
        },
        {
          "ticker": "JYEU",
          "pct": 13.9
        },
        {
          "ticker": "AU8U",
          "pct": 100.3
        },
        {
          "ticker": "ODBU",
          "pct": 568.2
        },
        {
          "ticker": "D5IU",
          "pct": 18327.9
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
          "n_trades": 282,
          "n_runs": 161,
          "n_trade_days": 1,
          "first_trade_date": "2026-04-20",
          "last_trade_date": "2026-04-20",
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
            "retail_pct": 0.4645390070921986,
            "mixed_pct": 0.19148936170212766,
            "instit_pct": 0.2907801418439716,
            "ambiguous_pct": 0.05319148936170213,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.05319148936170213,
            "retail_qty_pct": 0.07056120774532326,
            "mixed_qty_pct": 0.3309812930751559,
            "instit_qty_pct": 0.39284542172628817,
            "ambiguous_qty_pct": 0.20561207745323268,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.20561207745323268,
            "retail_notional_pct": 0.07035410528656401,
            "mixed_notional_pct": 0.33045132519255593,
            "instit_notional_pct": 0.3933292567680249,
            "ambiguous_notional_pct": 0.20586531275285513,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.20586531275285513
          },
          "run_composition": {
            "retail_pct": 0.8136645962732919,
            "mixed_pct": 0.10559006211180125,
            "instit_pct": 0.055900621118012424,
            "ambiguous_pct": 0.024844720496894408,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.024844720496894408,
            "retail_notional_pct": 0.07035410528656401,
            "mixed_notional_pct": 0.33045132519255593,
            "instit_notional_pct": 0.3933292567680249,
            "unclear_notional_pct": 0.20586531275285513
          },
          "counts": {
            "trades": {
              "retail": 131,
              "mixed": 54,
              "institutional": 82,
              "ambiguous": 15,
              "unobservable": 0,
              "unclear": 15
            },
            "runs": {
              "retail": 131,
              "mixed": 17,
              "institutional": 9,
              "ambiguous": 4,
              "unobservable": 0,
              "unclear": 4
            }
          },
          "confidence": {
            "high": 0.5838509316770186,
            "medium": 0.2857142857142857,
            "low": 0.0,
            "na": 0.13043478260869565
          },
          "confidence_counts": {
            "high": 94,
            "medium": 46,
            "low": 0,
            "na": 21
          },
          "trade_confidence": {
            "high": 0.4716312056737589,
            "medium": 0.28368794326241137,
            "low": 0.0,
            "na": 0.24468085106382978
          },
          "trade_confidence_counts": {
            "high": 133,
            "medium": 80,
            "low": 0,
            "na": 69
          },
          "observability": {
            "avg_feature_coverage": 0.8565217391304346,
            "observable_run_pct": 1.0,
            "ambiguous_run_pct": 0.024844720496894408,
            "unobservable_run_pct": 0.0
          },
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "dominant_share": 0.8136645962732919,
          "dominance_gap": 0.7080745341614907,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 156,
              "MULTI_FILL_SINGLE_PRICE": 126
            },
            "d2_information": {
              "NEUTRAL_OR_REVERSING": 277,
              "PERSISTENT_POSITIVE_IMPACT": 5
            },
            "d3_urgency": {
              "IMMEDIATE": 160,
              "ADAPTIVE": 1
            },
            "participant_confidence": {
              "HIGH": 94,
              "MEDIUM": 46,
              "NA": 21
            }
          },
          "trade_size": {
            "avg": 1435.2925531914893,
            "median": 133.0
          },
          "run_size": {
            "avg": 2513.990683229814,
            "median": 67.0,
            "avg_length": 1.0807453416149069
          },
          "recent_trades": [
            {
              "trade_id": "BMLL-286",
              "timestamp": "2026-04-20T08:59:53.384600",
              "price": 0.66,
              "size": 100.0,
              "notional": 66.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 57636,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-285",
              "timestamp": "2026-04-20T08:59:53.142100",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 57635,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-284",
              "timestamp": "2026-04-20T08:59:31.051200",
              "price": 0.66,
              "size": 200.0,
              "notional": 132.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57634,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-283",
              "timestamp": "2026-04-20T08:59:30.929400",
              "price": 0.66,
              "size": 200.0,
              "notional": 132.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57634,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-282",
              "timestamp": "2026-04-20T08:59:30.384200",
              "price": 0.66,
              "size": 200.0,
              "notional": 132.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57634,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-281",
              "timestamp": "2026-04-20T08:59:19.082400",
              "price": 0.66,
              "size": 200.0,
              "notional": 132.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 57633,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-280",
              "timestamp": "2026-04-20T08:59:09.088600",
              "price": 0.66,
              "size": 200.0,
              "notional": 132.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57632,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "BMLL-279",
              "timestamp": "2026-04-20T08:59:04.153500",
              "price": 0.66,
              "size": 100.0,
              "notional": 66.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57632,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "BMLL-278",
              "timestamp": "2026-04-20T08:59:00.079600",
              "price": 0.66,
              "size": 200.0,
              "notional": 132.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57632,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "BMLL-277",
              "timestamp": "2026-04-20T08:58:49.679800",
              "price": 0.66,
              "size": 200.0,
              "notional": 132.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57631,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-276",
              "timestamp": "2026-04-20T08:58:49.558900",
              "price": 0.66,
              "size": 200.0,
              "notional": 132.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57631,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-275",
              "timestamp": "2026-04-20T08:58:34.413700",
              "price": 0.66,
              "size": 200.0,
              "notional": 132.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 57630,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-274",
              "timestamp": "2026-04-20T08:58:26.495300",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 57629,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-273",
              "timestamp": "2026-04-20T08:58:07.144000",
              "price": 0.66,
              "size": 500.0,
              "notional": 330.0,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 57628,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-272",
              "timestamp": "2026-04-20T08:56:59.607800",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 57627,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-271",
              "timestamp": "2026-04-20T08:56:06.867400",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 57626,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-270",
              "timestamp": "2026-04-20T08:55:12.635200",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 57625,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-269",
              "timestamp": "2026-04-20T08:54:36.936100",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 57624,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-268",
              "timestamp": "2026-04-20T08:54:24.842200",
              "price": 0.665,
              "size": 3600.0,
              "notional": 2394.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57623,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-267",
              "timestamp": "2026-04-20T08:54:24.842200",
              "price": 0.665,
              "size": 200.0,
              "notional": 133.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57623,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-266",
              "timestamp": "2026-04-20T08:54:24.842100",
              "price": 0.665,
              "size": 200.0,
              "notional": 133.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57623,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-265",
              "timestamp": "2026-04-20T08:54:24.842100",
              "price": 0.665,
              "size": 1100.0,
              "notional": 731.5,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57623,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-264",
              "timestamp": "2026-04-20T08:54:24.842100",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57623,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-263",
              "timestamp": "2026-04-20T08:54:24.842100",
              "price": 0.665,
              "size": 200.0,
              "notional": 133.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57623,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-262",
              "timestamp": "2026-04-20T08:54:24.842100",
              "price": 0.665,
              "size": 200.0,
              "notional": 133.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57623,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-261",
              "timestamp": "2026-04-20T08:54:24.842000",
              "price": 0.665,
              "size": 200.0,
              "notional": 133.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57623,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-260",
              "timestamp": "2026-04-20T08:54:24.842000",
              "price": 0.665,
              "size": 200.0,
              "notional": 133.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57623,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-259",
              "timestamp": "2026-04-20T08:54:24.842000",
              "price": 0.665,
              "size": 200.0,
              "notional": 133.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57623,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-258",
              "timestamp": "2026-04-20T08:54:24.842000",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57623,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-257",
              "timestamp": "2026-04-20T08:54:24.842000",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57623,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            }
          ],
          "peer_comparison": [
            {
              "ticker": "CRPU",
              "currency": "SGD",
              "is_target": true,
              "retail_pct": 0.4645390070921986,
              "mixed_pct": 0.19148936170212766,
              "instit_pct": 0.2907801418439716,
              "ambiguous_pct": 0.05319148936170213,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.05319148936170213,
              "retail_qty_pct": 0.07056120774532326,
              "mixed_qty_pct": 0.3309812930751559,
              "instit_qty_pct": 0.39284542172628817,
              "ambiguous_qty_pct": 0.20561207745323268,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.20561207745323268,
              "retail_notional_pct": 0.07035410528656401,
              "mixed_notional_pct": 0.33045132519255593,
              "instit_notional_pct": 0.3933292567680249,
              "ambiguous_notional_pct": 0.20586531275285513,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.20586531275285513,
              "run_retail_pct": 0.8136645962732919,
              "run_mixed_pct": 0.10559006211180125,
              "run_instit_pct": 0.055900621118012424,
              "run_unclear_pct": 0.024844720496894408,
              "avg_trade_size": 1435.2925531914893,
              "avg_run_notional": 2513.990683229814,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.5838509316770186,
              "medium_confidence_pct": 0.2857142857142857,
              "low_confidence_pct": 0.0,
              "na_confidence_pct": 0.13043478260869565,
              "avg_feature_coverage": 0.8565217391304346,
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
              "retail_pct": 0.5395973154362416,
              "mixed_pct": 0.21476510067114093,
              "instit_pct": 0.22416107382550335,
              "ambiguous_pct": 0.021476510067114093,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.021476510067114093,
              "retail_qty_pct": 0.09623196526124107,
              "mixed_qty_pct": 0.13713405238828968,
              "instit_qty_pct": 0.7143857683148901,
              "ambiguous_qty_pct": 0.052248214035579214,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.052248214035579214,
              "retail_notional_pct": 0.09641800692067165,
              "mixed_notional_pct": 0.137358452503237,
              "instit_notional_pct": 0.7140117869618828,
              "ambiguous_notional_pct": 0.052211753614208586,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.052211753614208586,
              "run_retail_pct": 0.8298755186721992,
              "run_mixed_pct": 0.14315352697095435,
              "run_instit_pct": 0.022821576763485476,
              "run_unclear_pct": 0.004149377593360996,
              "avg_trade_size": 652.0684563758389,
              "avg_run_notional": 1007.8651452282157,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.6120331950207469,
              "medium_confidence_pct": 0.24066390041493776,
              "low_confidence_pct": 0.0,
              "na_confidence_pct": 0.14730290456431536,
              "avg_feature_coverage": 0.8643153526970953,
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
              "retail_pct": 0.5306122448979592,
              "mixed_pct": 0.3469387755102041,
              "instit_pct": 0.10204081632653061,
              "ambiguous_pct": 0.02040816326530612,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.02040816326530612,
              "retail_qty_pct": 0.10496083550913839,
              "mixed_qty_pct": 0.21514360313315928,
              "instit_qty_pct": 0.6276762402088772,
              "ambiguous_qty_pct": 0.05221932114882506,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.05221932114882506,
              "retail_notional_pct": 0.10496982356071942,
              "mixed_notional_pct": 0.2151414426446812,
              "instit_notional_pct": 0.6276699370361816,
              "ambiguous_notional_pct": 0.05221879675841777,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.05221879675841777,
              "run_retail_pct": 0.6153846153846154,
              "run_mixed_pct": 0.3076923076923077,
              "run_instit_pct": 0.038461538461538464,
              "run_unclear_pct": 0.038461538461538464,
              "avg_trade_size": 2032.265306122449,
              "avg_run_notional": 3830.0384615384614,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.0,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.6538461538461539,
              "na_confidence_pct": 0.34615384615384615,
              "avg_feature_coverage": 0.9423076923076924,
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
              "retail_pct": 0.3968841285296982,
              "mixed_pct": 0.4157740993184031,
              "instit_pct": 0.14040895813047713,
              "ambiguous_pct": 0.04673807205452775,
              "unobservable_pct": 0.00019474196689386563,
              "unclear_pct": 0.04693281402142162,
              "retail_qty_pct": 0.11791142710758362,
              "mixed_qty_pct": 0.24013734461093184,
              "instit_qty_pct": 0.6040286554070452,
              "ambiguous_qty_pct": 0.024898204992224927,
              "unobservable_qty_pct": 0.013024367882214413,
              "unclear_qty_pct": 0.03792257287443934,
              "retail_notional_pct": 0.11809867485386384,
              "mixed_notional_pct": 0.2404373561567804,
              "instit_notional_pct": 0.6034744177022339,
              "ambiguous_notional_pct": 0.024925626564124462,
              "unobservable_notional_pct": 0.0130639247229974,
              "unclear_notional_pct": 0.037989551287121864,
              "run_retail_pct": 0.6860007160759041,
              "run_mixed_pct": 0.2925170068027211,
              "run_instit_pct": 0.006802721088435374,
              "run_unclear_pct": 0.014679556032939491,
              "avg_trade_size": 5151.6061343719575,
              "avg_run_notional": 9471.356068743287,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.22663802363050484,
              "medium_confidence_pct": 0.39312567132116005,
              "low_confidence_pct": 0.07303974221267455,
              "na_confidence_pct": 0.3071965628356606,
              "avg_feature_coverage": 0.8952201933404941,
              "observable_run_pct": 0.9996419620479771,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "JYEU",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.6406362979031092,
              "mixed_pct": 0.16558206796818511,
              "instit_pct": 0.14967462039045554,
              "ambiguous_pct": 0.044107013738250184,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.044107013738250184,
              "retail_qty_pct": 0.18781381462885058,
              "mixed_qty_pct": 0.16104627493554077,
              "instit_qty_pct": 0.5011195548921156,
              "ambiguous_qty_pct": 0.15002035554349302,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.15002035554349302,
              "retail_notional_pct": 0.18705802485847337,
              "mixed_notional_pct": 0.16127781897994642,
              "instit_notional_pct": 0.5012092514666693,
              "ambiguous_notional_pct": 0.15045490469491093,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.15045490469491093,
              "run_retail_pct": 0.8619662363455809,
              "run_mixed_pct": 0.11916583912611718,
              "run_instit_pct": 0.010923535253227408,
              "run_unclear_pct": 0.007944389275074478,
              "avg_trade_size": 2465.1775126536513,
              "avg_run_notional": 3385.6410129096325,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.4856007944389275,
              "medium_confidence_pct": 0.3872889771598808,
              "low_confidence_pct": 0.0,
              "na_confidence_pct": 0.12711022840119166,
              "avg_feature_coverage": 0.8611717974180733,
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
              "retail_pct": 0.5,
              "mixed_pct": 0.5,
              "instit_pct": 0.0,
              "ambiguous_pct": 0.0,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.0,
              "retail_qty_pct": 0.19230769230769232,
              "mixed_qty_pct": 0.8076923076923077,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": 0.0,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.0,
              "retail_notional_pct": 0.21739130434782608,
              "mixed_notional_pct": 0.782608695652174,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": 0.0,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.0,
              "run_retail_pct": 0.5,
              "run_mixed_pct": 0.5,
              "run_instit_pct": 0.0,
              "run_unclear_pct": 0.0,
              "avg_trade_size": 161.0,
              "avg_run_notional": 161.0,
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
        "30d": {
          "valid": true,
          "currency": "SGD",
          "n_trades": 8964,
          "n_runs": 6423,
          "n_trade_days": 21,
          "first_trade_date": "2026-03-20",
          "last_trade_date": "2026-04-20",
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
            "retail_pct": 0.5895805443998215,
            "mixed_pct": 0.2600401606425703,
            "instit_pct": 0.10285586791610889,
            "ambiguous_pct": 0.04752342704149933,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.04752342704149933,
            "retail_qty_pct": 0.08284217419777341,
            "mixed_qty_pct": 0.2924080830760595,
            "instit_qty_pct": 0.4540228272055384,
            "ambiguous_qty_pct": 0.17072691552062869,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.17072691552062869,
            "retail_notional_pct": 0.0827971274317182,
            "mixed_notional_pct": 0.2923066302195753,
            "instit_notional_pct": 0.45445504818225807,
            "ambiguous_notional_pct": 0.17044119416644837,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.17044119416644837
          },
          "run_composition": {
            "retail_pct": 0.8164409154600654,
            "mixed_pct": 0.1626965592402304,
            "instit_pct": 0.014012143858010275,
            "ambiguous_pct": 0.006850381441693912,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.006850381441693912,
            "retail_notional_pct": 0.0827971274317182,
            "mixed_notional_pct": 0.2923066302195753,
            "instit_notional_pct": 0.45445504818225807,
            "unclear_notional_pct": 0.17044119416644837
          },
          "counts": {
            "trades": {
              "retail": 5285,
              "mixed": 2331,
              "institutional": 922,
              "ambiguous": 426,
              "unobservable": 0,
              "unclear": 426
            },
            "runs": {
              "retail": 5244,
              "mixed": 1045,
              "institutional": 90,
              "ambiguous": 44,
              "unobservable": 0,
              "unclear": 44
            }
          },
          "confidence": {
            "high": 0.5229643468784058,
            "medium": 0.2869375681145882,
            "low": 0.020551144325081736,
            "na": 0.16954694068192433
          },
          "confidence_counts": {
            "high": 3359,
            "medium": 1843,
            "low": 132,
            "na": 1089
          },
          "trade_confidence": {
            "high": 0.41242748772869253,
            "medium": 0.25903614457831325,
            "low": 0.020972780008924587,
            "na": 0.3075635876840696
          },
          "trade_confidence_counts": {
            "high": 3697,
            "medium": 2322,
            "low": 188,
            "na": 2757
          },
          "observability": {
            "avg_feature_coverage": 0.8675385333956094,
            "observable_run_pct": 1.0,
            "ambiguous_run_pct": 0.006850381441693912,
            "unobservable_run_pct": 0.0
          },
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "dominant_share": 0.8164409154600654,
          "dominance_gap": 0.653744356219835,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 7087,
              "MULTI_FILL_SINGLE_PRICE": 1866,
              "WALK_BOOK": 11
            },
            "d2_information": {
              "NEUTRAL_OR_REVERSING": 8738,
              "MOMENTUM_REACTIVE": 166,
              "PERSISTENT_POSITIVE_IMPACT": 54,
              "UNOBSERVABLE": 6
            },
            "d3_urgency": {
              "IMMEDIATE": 6384,
              "ADAPTIVE": 39
            },
            "participant_confidence": {
              "HIGH": 3359,
              "MEDIUM": 1843,
              "NA": 1089,
              "LOW": 132
            }
          },
          "trade_size": {
            "avg": 1537.5634203480588,
            "median": 127.0
          },
          "run_size": {
            "avg": 2145.83815973844,
            "median": 128.0,
            "avg_length": 1.162385178265608
          },
          "recent_trades": [
            {
              "trade_id": "BMLL-286",
              "timestamp": "2026-04-20T08:59:53.384600",
              "price": 0.66,
              "size": 100.0,
              "notional": 66.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 57636,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-285",
              "timestamp": "2026-04-20T08:59:53.142100",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 57635,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-284",
              "timestamp": "2026-04-20T08:59:31.051200",
              "price": 0.66,
              "size": 200.0,
              "notional": 132.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57634,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-283",
              "timestamp": "2026-04-20T08:59:30.929400",
              "price": 0.66,
              "size": 200.0,
              "notional": 132.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57634,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-282",
              "timestamp": "2026-04-20T08:59:30.384200",
              "price": 0.66,
              "size": 200.0,
              "notional": 132.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57634,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-281",
              "timestamp": "2026-04-20T08:59:19.082400",
              "price": 0.66,
              "size": 200.0,
              "notional": 132.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 57633,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-280",
              "timestamp": "2026-04-20T08:59:09.088600",
              "price": 0.66,
              "size": 200.0,
              "notional": 132.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57632,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "BMLL-279",
              "timestamp": "2026-04-20T08:59:04.153500",
              "price": 0.66,
              "size": 100.0,
              "notional": 66.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57632,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "BMLL-278",
              "timestamp": "2026-04-20T08:59:00.079600",
              "price": 0.66,
              "size": 200.0,
              "notional": 132.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57632,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "BMLL-277",
              "timestamp": "2026-04-20T08:58:49.679800",
              "price": 0.66,
              "size": 200.0,
              "notional": 132.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57631,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-276",
              "timestamp": "2026-04-20T08:58:49.558900",
              "price": 0.66,
              "size": 200.0,
              "notional": 132.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57631,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-275",
              "timestamp": "2026-04-20T08:58:34.413700",
              "price": 0.66,
              "size": 200.0,
              "notional": 132.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 57630,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-274",
              "timestamp": "2026-04-20T08:58:26.495300",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 57629,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-273",
              "timestamp": "2026-04-20T08:58:07.144000",
              "price": 0.66,
              "size": 500.0,
              "notional": 330.0,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 57628,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-272",
              "timestamp": "2026-04-20T08:56:59.607800",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 57627,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-271",
              "timestamp": "2026-04-20T08:56:06.867400",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 57626,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-270",
              "timestamp": "2026-04-20T08:55:12.635200",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 57625,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-269",
              "timestamp": "2026-04-20T08:54:36.936100",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 57624,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-268",
              "timestamp": "2026-04-20T08:54:24.842200",
              "price": 0.665,
              "size": 3600.0,
              "notional": 2394.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57623,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-267",
              "timestamp": "2026-04-20T08:54:24.842200",
              "price": 0.665,
              "size": 200.0,
              "notional": 133.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57623,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-266",
              "timestamp": "2026-04-20T08:54:24.842100",
              "price": 0.665,
              "size": 200.0,
              "notional": 133.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57623,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-265",
              "timestamp": "2026-04-20T08:54:24.842100",
              "price": 0.665,
              "size": 1100.0,
              "notional": 731.5,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57623,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-264",
              "timestamp": "2026-04-20T08:54:24.842100",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57623,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-263",
              "timestamp": "2026-04-20T08:54:24.842100",
              "price": 0.665,
              "size": 200.0,
              "notional": 133.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57623,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-262",
              "timestamp": "2026-04-20T08:54:24.842100",
              "price": 0.665,
              "size": 200.0,
              "notional": 133.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57623,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-261",
              "timestamp": "2026-04-20T08:54:24.842000",
              "price": 0.665,
              "size": 200.0,
              "notional": 133.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57623,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-260",
              "timestamp": "2026-04-20T08:54:24.842000",
              "price": 0.665,
              "size": 200.0,
              "notional": 133.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57623,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-259",
              "timestamp": "2026-04-20T08:54:24.842000",
              "price": 0.665,
              "size": 200.0,
              "notional": 133.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57623,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-258",
              "timestamp": "2026-04-20T08:54:24.842000",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57623,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-257",
              "timestamp": "2026-04-20T08:54:24.842000",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57623,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            }
          ],
          "peer_comparison": [
            {
              "ticker": "CRPU",
              "currency": "SGD",
              "is_target": true,
              "retail_pct": 0.5895805443998215,
              "mixed_pct": 0.2600401606425703,
              "instit_pct": 0.10285586791610889,
              "ambiguous_pct": 0.04752342704149933,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.04752342704149933,
              "retail_qty_pct": 0.08284217419777341,
              "mixed_qty_pct": 0.2924080830760595,
              "instit_qty_pct": 0.4540228272055384,
              "ambiguous_qty_pct": 0.17072691552062869,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.17072691552062869,
              "retail_notional_pct": 0.0827971274317182,
              "mixed_notional_pct": 0.2923066302195753,
              "instit_notional_pct": 0.45445504818225807,
              "ambiguous_notional_pct": 0.17044119416644837,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.17044119416644837,
              "run_retail_pct": 0.8164409154600654,
              "run_mixed_pct": 0.1626965592402304,
              "run_instit_pct": 0.014012143858010275,
              "run_unclear_pct": 0.006850381441693912,
              "avg_trade_size": 1537.5634203480588,
              "avg_run_notional": 2145.83815973844,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.5229643468784058,
              "medium_confidence_pct": 0.2869375681145882,
              "low_confidence_pct": 0.020551144325081736,
              "na_confidence_pct": 0.16954694068192433,
              "avg_feature_coverage": 0.8675385333956094,
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
              "retail_pct": 0.3834869716601501,
              "mixed_pct": 0.32007191986072664,
              "instit_pct": 0.2543594280658695,
              "ambiguous_pct": 0.04181055395416536,
              "unobservable_pct": 0.0002711264590884443,
              "unclear_pct": 0.0420816804132538,
              "retail_qty_pct": 0.10821867399719567,
              "mixed_qty_pct": 0.21777827244410908,
              "instit_qty_pct": 0.6129238916205003,
              "ambiguous_qty_pct": 0.054156732660243935,
              "unobservable_qty_pct": 0.006922429277951059,
              "unclear_qty_pct": 0.061079161938194994,
              "retail_notional_pct": 0.10809886978704844,
              "mixed_notional_pct": 0.21732688813779802,
              "instit_notional_pct": 0.6135905013113908,
              "ambiguous_notional_pct": 0.054218984790846525,
              "unobservable_notional_pct": 0.006764755972916138,
              "unclear_notional_pct": 0.060983740763762666,
              "run_retail_pct": 0.7347221021695911,
              "run_mixed_pct": 0.23378569164721813,
              "run_instit_pct": 0.016480825193764946,
              "run_unclear_pct": 0.015011380989425765,
              "avg_trade_size": 6089.944383401353,
              "avg_run_notional": 12296.399069352005,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.3886535857319849,
              "medium_confidence_pct": 0.3280894344080445,
              "low_confidence_pct": 0.03445990722332671,
              "na_confidence_pct": 0.2487970726366439,
              "avg_feature_coverage": 0.8822067594433398,
              "observable_run_pct": 0.9997983115797966,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "AU8U",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.49352231913801947,
              "mixed_pct": 0.26712416623909696,
              "instit_pct": 0.19548486403283735,
              "ambiguous_pct": 0.04386865059004618,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.04386865059004618,
              "retail_qty_pct": 0.09242970102465728,
              "mixed_qty_pct": 0.26660389276189583,
              "instit_qty_pct": 0.5289120619473167,
              "ambiguous_qty_pct": 0.11205434426613016,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.11205434426613016,
              "retail_notional_pct": 0.09227509082050228,
              "mixed_notional_pct": 0.2669968230187258,
              "instit_notional_pct": 0.5271483369453699,
              "ambiguous_notional_pct": 0.11357974921540206,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.11357974921540206,
              "run_retail_pct": 0.797799174690509,
              "run_mixed_pct": 0.17320918421331077,
              "run_instit_pct": 0.021902444185800445,
              "run_unclear_pct": 0.007089196910379854,
              "avg_trade_size": 1435.9603001539251,
              "avg_run_notional": 2369.0078298592744,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.49677282827214053,
              "medium_confidence_pct": 0.29922759496349594,
              "low_confidence_pct": 0.023701195640672943,
              "na_confidence_pct": 0.18029838112369062,
              "avg_feature_coverage": 0.8702200825309488,
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
              "retail_pct": 0.26092089728453366,
              "mixed_pct": 0.1345926800472255,
              "instit_pct": 0.24203069657615112,
              "ambiguous_pct": 0.3624557260920897,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.3624557260920897,
              "retail_qty_pct": 0.07309476474486415,
              "mixed_qty_pct": 0.13548707753479125,
              "instit_qty_pct": 0.46192842942345924,
              "ambiguous_qty_pct": 0.32948972829688533,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.32948972829688533,
              "retail_notional_pct": 0.07345325661937577,
              "mixed_notional_pct": 0.13661901151912695,
              "instit_notional_pct": 0.4608990701506017,
              "ambiguous_notional_pct": 0.32902866171089556,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.32902866171089556,
              "run_retail_pct": 0.4649122807017544,
              "run_mixed_pct": 0.16374269005847952,
              "run_instit_pct": 0.1023391812865497,
              "run_unclear_pct": 0.26900584795321636,
              "avg_trade_size": 3630.223140495868,
              "avg_run_notional": 8990.640350877193,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.02631578947368421,
              "medium_confidence_pct": 0.11403508771929824,
              "low_confidence_pct": 0.4269005847953216,
              "na_confidence_pct": 0.4327485380116959,
              "avg_feature_coverage": 0.8627192982456139,
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
              "retail_pct": 0.5016085689413724,
              "mixed_pct": 0.33246281367094355,
              "instit_pct": 0.12122932515801824,
              "ambiguous_pct": 0.04456682184625866,
              "unobservable_pct": 0.00013247038340713827,
              "unclear_pct": 0.044699292229665795,
              "retail_qty_pct": 0.07542632652183023,
              "mixed_qty_pct": 0.24444615473153083,
              "instit_qty_pct": 0.4016252542299946,
              "ambiguous_qty_pct": 0.050712637729360494,
              "unobservable_qty_pct": 0.22778962678728384,
              "unclear_qty_pct": 0.27850226451664434,
              "retail_notional_pct": 0.07575914589568902,
              "mixed_notional_pct": 0.24488454466706738,
              "instit_notional_pct": 0.4032689396298843,
              "ambiguous_notional_pct": 0.05144750511742002,
              "unobservable_notional_pct": 0.22463986468993932,
              "unclear_notional_pct": 0.2760873698073594,
              "run_retail_pct": 0.775894367899444,
              "run_mixed_pct": 0.21132463137539279,
              "run_instit_pct": 0.005348078317621465,
              "run_unclear_pct": 0.007432922407541697,
              "avg_trade_size": 4292.39955698119,
              "avg_run_notional": 6853.365282511482,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.3872975586173556,
              "medium_confidence_pct": 0.35167391829828376,
              "low_confidence_pct": 0.04227096930142615,
              "na_confidence_pct": 0.2187575537829345,
              "avg_feature_coverage": 0.8825583152042541,
              "observable_run_pct": 0.9997884940778342,
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
              "retail_pct": 0.7301587301587301,
              "mixed_pct": 0.2585034013605442,
              "instit_pct": 0.011337868480725623,
              "ambiguous_pct": 0.0,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.0,
              "retail_qty_pct": 0.12569561115399558,
              "mixed_qty_pct": 0.7355643342566105,
              "instit_qty_pct": 0.13874005458939392,
              "ambiguous_qty_pct": 0.0,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.0,
              "retail_notional_pct": 0.12935538568292487,
              "mixed_notional_pct": 0.7368157763359017,
              "instit_notional_pct": 0.13382883798117345,
              "ambiguous_notional_pct": 0.0,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.0,
              "run_retail_pct": 0.8404255319148937,
              "run_mixed_pct": 0.15691489361702127,
              "run_instit_pct": 0.0026595744680851063,
              "run_unclear_pct": 0.0,
              "avg_trade_size": 1118.2625850340137,
              "avg_run_notional": 1311.5792553191488,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.6170212765957447,
              "medium_confidence_pct": 0.0,
              "low_confidence_pct": 0.22606382978723405,
              "na_confidence_pct": 0.15691489361702127,
              "avg_feature_coverage": 0.8515957446808509,
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
          "n_trades": 22218,
          "n_runs": 15500,
          "n_trade_days": 63,
          "first_trade_date": "2026-01-19",
          "last_trade_date": "2026-04-20",
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
            "retail_pct": 0.5765145377621748,
            "mixed_pct": 0.25029255558556124,
            "instit_pct": 0.1281843550274552,
            "ambiguous_pct": 0.04500855162480871,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.04500855162480871,
            "retail_qty_pct": 0.0782944513237178,
            "mixed_qty_pct": 0.3019798935034995,
            "instit_qty_pct": 0.4702093290078602,
            "ambiguous_qty_pct": 0.14951632616492247,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.14951632616492247,
            "retail_notional_pct": 0.07824403162496636,
            "mixed_notional_pct": 0.30251320956433725,
            "instit_notional_pct": 0.47008386157298543,
            "ambiguous_notional_pct": 0.14915889723771095,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.14915889723771095
          },
          "run_composition": {
            "retail_pct": 0.8214193548387096,
            "mixed_pct": 0.15593548387096773,
            "instit_pct": 0.015225806451612903,
            "ambiguous_pct": 0.007419354838709678,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.007419354838709678,
            "retail_notional_pct": 0.07824403162496636,
            "mixed_notional_pct": 0.30251320956433725,
            "instit_notional_pct": 0.47008386157298543,
            "unclear_notional_pct": 0.14915889723771095
          },
          "counts": {
            "trades": {
              "retail": 12809,
              "mixed": 5561,
              "institutional": 2848,
              "ambiguous": 1000,
              "unobservable": 0,
              "unclear": 1000
            },
            "runs": {
              "retail": 12732,
              "mixed": 2417,
              "institutional": 236,
              "ambiguous": 115,
              "unobservable": 0,
              "unclear": 115
            }
          },
          "confidence": {
            "high": 0.5236129032258064,
            "medium": 0.29116129032258065,
            "low": 0.021870967741935483,
            "na": 0.16335483870967743
          },
          "confidence_counts": {
            "high": 8116,
            "medium": 4513,
            "low": 339,
            "na": 2532
          },
          "trade_confidence": {
            "high": 0.4065622468268971,
            "medium": 0.27657754973444953,
            "low": 0.021559096228283375,
            "na": 0.29530110721036995
          },
          "trade_confidence_counts": {
            "high": 9033,
            "medium": 6145,
            "low": 479,
            "na": 6561
          },
          "observability": {
            "avg_feature_coverage": 0.8653580645161288,
            "observable_run_pct": 1.0,
            "ambiguous_run_pct": 0.007419354838709678,
            "unobservable_run_pct": 0.0
          },
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "dominant_share": 0.8214193548387096,
          "dominance_gap": 0.665483870967742,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 16765,
              "MULTI_FILL_SINGLE_PRICE": 5366,
              "WALK_BOOK": 87
            },
            "d2_information": {
              "NEUTRAL_OR_REVERSING": 21408,
              "MOMENTUM_REACTIVE": 541,
              "PERSISTENT_POSITIVE_IMPACT": 256,
              "UNOBSERVABLE": 12,
              "SHORT_HORIZON_POSITIVE_IMPACT": 1
            },
            "d3_urgency": {
              "IMMEDIATE": 15383,
              "ADAPTIVE": 117
            },
            "participant_confidence": {
              "HIGH": 8116,
              "MEDIUM": 4513,
              "NA": 2532,
              "LOW": 339
            }
          },
          "trade_size": {
            "avg": 2249.040935277703,
            "median": 132.0
          },
          "run_size": {
            "avg": 3223.818806451613,
            "median": 131.0,
            "avg_length": 1.1498709677419354
          },
          "recent_trades": [
            {
              "trade_id": "BMLL-286",
              "timestamp": "2026-04-20T08:59:53.384600",
              "price": 0.66,
              "size": 100.0,
              "notional": 66.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 57636,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-285",
              "timestamp": "2026-04-20T08:59:53.142100",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 57635,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-284",
              "timestamp": "2026-04-20T08:59:31.051200",
              "price": 0.66,
              "size": 200.0,
              "notional": 132.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57634,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-283",
              "timestamp": "2026-04-20T08:59:30.929400",
              "price": 0.66,
              "size": 200.0,
              "notional": 132.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57634,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-282",
              "timestamp": "2026-04-20T08:59:30.384200",
              "price": 0.66,
              "size": 200.0,
              "notional": 132.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57634,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-281",
              "timestamp": "2026-04-20T08:59:19.082400",
              "price": 0.66,
              "size": 200.0,
              "notional": 132.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 57633,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-280",
              "timestamp": "2026-04-20T08:59:09.088600",
              "price": 0.66,
              "size": 200.0,
              "notional": 132.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57632,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "BMLL-279",
              "timestamp": "2026-04-20T08:59:04.153500",
              "price": 0.66,
              "size": 100.0,
              "notional": 66.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57632,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "BMLL-278",
              "timestamp": "2026-04-20T08:59:00.079600",
              "price": 0.66,
              "size": 200.0,
              "notional": 132.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57632,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "BMLL-277",
              "timestamp": "2026-04-20T08:58:49.679800",
              "price": 0.66,
              "size": 200.0,
              "notional": 132.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57631,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-276",
              "timestamp": "2026-04-20T08:58:49.558900",
              "price": 0.66,
              "size": 200.0,
              "notional": 132.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57631,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-275",
              "timestamp": "2026-04-20T08:58:34.413700",
              "price": 0.66,
              "size": 200.0,
              "notional": 132.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 57630,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-274",
              "timestamp": "2026-04-20T08:58:26.495300",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 57629,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-273",
              "timestamp": "2026-04-20T08:58:07.144000",
              "price": 0.66,
              "size": 500.0,
              "notional": 330.0,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 57628,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-272",
              "timestamp": "2026-04-20T08:56:59.607800",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 57627,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-271",
              "timestamp": "2026-04-20T08:56:06.867400",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 57626,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-270",
              "timestamp": "2026-04-20T08:55:12.635200",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 57625,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-269",
              "timestamp": "2026-04-20T08:54:36.936100",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 57624,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-268",
              "timestamp": "2026-04-20T08:54:24.842200",
              "price": 0.665,
              "size": 3600.0,
              "notional": 2394.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57623,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-267",
              "timestamp": "2026-04-20T08:54:24.842200",
              "price": 0.665,
              "size": 200.0,
              "notional": 133.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57623,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-266",
              "timestamp": "2026-04-20T08:54:24.842100",
              "price": 0.665,
              "size": 200.0,
              "notional": 133.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57623,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-265",
              "timestamp": "2026-04-20T08:54:24.842100",
              "price": 0.665,
              "size": 1100.0,
              "notional": 731.5,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57623,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-264",
              "timestamp": "2026-04-20T08:54:24.842100",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57623,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-263",
              "timestamp": "2026-04-20T08:54:24.842100",
              "price": 0.665,
              "size": 200.0,
              "notional": 133.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57623,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-262",
              "timestamp": "2026-04-20T08:54:24.842100",
              "price": 0.665,
              "size": 200.0,
              "notional": 133.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57623,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-261",
              "timestamp": "2026-04-20T08:54:24.842000",
              "price": 0.665,
              "size": 200.0,
              "notional": 133.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57623,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-260",
              "timestamp": "2026-04-20T08:54:24.842000",
              "price": 0.665,
              "size": 200.0,
              "notional": 133.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57623,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-259",
              "timestamp": "2026-04-20T08:54:24.842000",
              "price": 0.665,
              "size": 200.0,
              "notional": 133.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57623,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-258",
              "timestamp": "2026-04-20T08:54:24.842000",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57623,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-257",
              "timestamp": "2026-04-20T08:54:24.842000",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57623,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            }
          ],
          "peer_comparison": [
            {
              "ticker": "CRPU",
              "currency": "SGD",
              "is_target": true,
              "retail_pct": 0.5765145377621748,
              "mixed_pct": 0.25029255558556124,
              "instit_pct": 0.1281843550274552,
              "ambiguous_pct": 0.04500855162480871,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.04500855162480871,
              "retail_qty_pct": 0.0782944513237178,
              "mixed_qty_pct": 0.3019798935034995,
              "instit_qty_pct": 0.4702093290078602,
              "ambiguous_qty_pct": 0.14951632616492247,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.14951632616492247,
              "retail_notional_pct": 0.07824403162496636,
              "mixed_notional_pct": 0.30251320956433725,
              "instit_notional_pct": 0.47008386157298543,
              "ambiguous_notional_pct": 0.14915889723771095,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.14915889723771095,
              "run_retail_pct": 0.8214193548387096,
              "run_mixed_pct": 0.15593548387096773,
              "run_instit_pct": 0.015225806451612903,
              "run_unclear_pct": 0.007419354838709678,
              "avg_trade_size": 2249.040935277703,
              "avg_run_notional": 3223.818806451613,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.5236129032258064,
              "medium_confidence_pct": 0.29116129032258065,
              "low_confidence_pct": 0.021870967741935483,
              "na_confidence_pct": 0.16335483870967743,
              "avg_feature_coverage": 0.8653580645161288,
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
              "retail_pct": 0.3740820529817002,
              "mixed_pct": 0.3379276058805426,
              "instit_pct": 0.2402784024999408,
              "ambiguous_pct": 0.0473757723538742,
              "unobservable_pct": 0.00033616628394214155,
              "unclear_pct": 0.04771193863781634,
              "retail_qty_pct": 0.0989898168531767,
              "mixed_qty_pct": 0.2244350278734213,
              "instit_qty_pct": 0.6155049440271041,
              "ambiguous_qty_pct": 0.05185748232201546,
              "unobservable_qty_pct": 0.009212728924282414,
              "unclear_qty_pct": 0.06107021124629787,
              "retail_notional_pct": 0.09892307093954021,
              "mixed_notional_pct": 0.22431204200022428,
              "instit_notional_pct": 0.6155838502661968,
              "ambiguous_notional_pct": 0.05203444658506625,
              "unobservable_notional_pct": 0.009146590208972525,
              "unclear_notional_pct": 0.06118103679403877,
              "run_retail_pct": 0.7211569710757231,
              "run_mixed_pct": 0.24694603223154715,
              "run_instit_pct": 0.01639297252862796,
              "run_unclear_pct": 0.01550402416410178,
              "avg_trade_size": 6551.031293056509,
              "avg_run_notional": 13225.35858313101,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.3169722227532547,
              "medium_confidence_pct": 0.3693341489992162,
              "low_confidence_pct": 0.05124357185188017,
              "na_confidence_pct": 0.26245005639564895,
              "avg_feature_coverage": 0.8857376359708652,
              "observable_run_pct": 0.9996941252939264,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "AU8U",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.47294549511453404,
              "mixed_pct": 0.2805319129793245,
              "instit_pct": 0.20177064401777842,
              "ambiguous_pct": 0.04475194788836306,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.04475194788836306,
              "retail_qty_pct": 0.10213817945913829,
              "mixed_qty_pct": 0.27096288178663375,
              "instit_qty_pct": 0.5491937396882273,
              "ambiguous_qty_pct": 0.07770519906600065,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.07770519906600065,
              "retail_notional_pct": 0.10294342471578952,
              "mixed_notional_pct": 0.27142106850269715,
              "instit_notional_pct": 0.5484595355989914,
              "ambiguous_notional_pct": 0.07717597118252197,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.07717597118252197,
              "run_retail_pct": 0.7860314523589269,
              "run_mixed_pct": 0.18652482269503545,
              "run_instit_pct": 0.019642306506321306,
              "run_unclear_pct": 0.007801418439716312,
              "avg_trade_size": 1666.8946790707719,
              "avg_run_notional": 2856.4396546407647,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.4650323774283071,
              "medium_confidence_pct": 0.3170212765957447,
              "low_confidence_pct": 0.023620104841196424,
              "na_confidence_pct": 0.19432624113475178,
              "avg_feature_coverage": 0.8723805118717235,
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
              "retail_pct": 0.46918831755563895,
              "mixed_pct": 0.3268623934831867,
              "instit_pct": 0.15725565425302696,
              "ambiguous_pct": 0.04642951471426387,
              "unobservable_pct": 0.000264119993883537,
              "unclear_pct": 0.046693634708147407,
              "retail_qty_pct": 0.08387631459808152,
              "mixed_qty_pct": 0.23240860206404307,
              "instit_qty_pct": 0.538762373942151,
              "ambiguous_qty_pct": 0.04651056784553272,
              "unobservable_qty_pct": 0.0984421415501917,
              "unclear_qty_pct": 0.1449527093957244,
              "retail_notional_pct": 0.08352649944614877,
              "mixed_notional_pct": 0.2303128613166915,
              "instit_notional_pct": 0.5466516844547162,
              "ambiguous_notional_pct": 0.04651978733870669,
              "unobservable_notional_pct": 0.09298916744373675,
              "unclear_notional_pct": 0.13950895478244343,
              "run_retail_pct": 0.7660889631949513,
              "run_mixed_pct": 0.21739232816068949,
              "run_instit_pct": 0.0075234888266183155,
              "run_unclear_pct": 0.008995219817740834,
              "avg_trade_size": 4370.662028511058,
              "avg_run_notional": 7403.685552193467,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.37582122589304634,
              "medium_confidence_pct": 0.35455765653330823,
              "low_confidence_pct": 0.043233569595215106,
              "na_confidence_pct": 0.2263875479784303,
              "avg_feature_coverage": 0.8838786587232437,
              "observable_run_pct": 0.9995996891704146,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "ODBU",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.3555662188099808,
              "mixed_pct": 0.15738963531669867,
              "instit_pct": 0.1952975047984645,
              "ambiguous_pct": 0.29174664107485604,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.29174664107485604,
              "retail_qty_pct": 0.08375300121051611,
              "mixed_qty_pct": 0.15371548189910583,
              "instit_qty_pct": 0.4065461500906215,
              "ambiguous_qty_pct": 0.35598536679975656,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.35598536679975656,
              "retail_notional_pct": 0.08471234798403364,
              "mixed_notional_pct": 0.15508460338504765,
              "instit_notional_pct": 0.40308937798887867,
              "ambiguous_notional_pct": 0.35711367064204,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.35711367064204,
              "run_retail_pct": 0.5639931740614335,
              "run_mixed_pct": 0.17491467576791808,
              "run_instit_pct": 0.07508532423208192,
              "run_unclear_pct": 0.18600682593856654,
              "avg_trade_size": 3787.2322456813818,
              "avg_run_notional": 6734.293515358362,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.17918088737201365,
              "medium_confidence_pct": 0.12713310580204779,
              "low_confidence_pct": 0.33276450511945393,
              "na_confidence_pct": 0.3609215017064846,
              "avg_feature_coverage": 0.8480802047781569,
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
              "retail_pct": 0.6254480286738351,
              "mixed_pct": 0.23745519713261648,
              "instit_pct": 0.12096774193548387,
              "ambiguous_pct": 0.016129032258064516,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.016129032258064516,
              "retail_qty_pct": 0.12140698883827537,
              "mixed_qty_pct": 0.4964746429500082,
              "instit_qty_pct": 0.354622509317488,
              "ambiguous_qty_pct": 0.027495858894228453,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.027495858894228453,
              "retail_notional_pct": 0.12080302301447109,
              "mixed_notional_pct": 0.4983703509050633,
              "instit_notional_pct": 0.3537441173388637,
              "ambiguous_notional_pct": 0.027082508741601903,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.027082508741601903,
              "run_retail_pct": 0.8177991581479255,
              "run_mixed_pct": 0.15694527961515334,
              "run_instit_pct": 0.016235718580877932,
              "run_unclear_pct": 0.009019843656043296,
              "avg_trade_size": 2691.087724014337,
              "avg_run_notional": 3611.850751653638,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.4792543595911004,
              "medium_confidence_pct": 0.13770294648226097,
              "low_confidence_pct": 0.21707757065544198,
              "na_confidence_pct": 0.16596512327119664,
              "avg_feature_coverage": 0.8554119061936258,
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
          "n_trades": 47888,
          "n_runs": 34414,
          "n_trade_days": 126,
          "first_trade_date": "2025-10-17",
          "last_trade_date": "2026-04-20",
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
            "retail_pct": 0.6004426996324758,
            "mixed_pct": 0.24801620447711326,
            "instit_pct": 0.11000668225860341,
            "ambiguous_pct": 0.04153441363180755,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.04153441363180755,
            "retail_qty_pct": 0.09457942528306117,
            "mixed_qty_pct": 0.3027143978177198,
            "instit_qty_pct": 0.48511042188259035,
            "ambiguous_qty_pct": 0.11759575501662868,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.11759575501662868,
            "retail_notional_pct": 0.09466947264071349,
            "mixed_notional_pct": 0.3029264546218526,
            "instit_notional_pct": 0.48524763718938535,
            "ambiguous_notional_pct": 0.11715643554804857,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.11715643554804857
          },
          "run_composition": {
            "retail_pct": 0.8269599581565642,
            "mixed_pct": 0.15333875748241996,
            "instit_pct": 0.013424768989364793,
            "ambiguous_pct": 0.006276515371651073,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.006276515371651073,
            "retail_notional_pct": 0.09466947264071349,
            "mixed_notional_pct": 0.3029264546218526,
            "instit_notional_pct": 0.48524763718938535,
            "unclear_notional_pct": 0.11715643554804857
          },
          "counts": {
            "trades": {
              "retail": 28754,
              "mixed": 11877,
              "institutional": 5268,
              "ambiguous": 1989,
              "unobservable": 0,
              "unclear": 1989
            },
            "runs": {
              "retail": 28459,
              "mixed": 5277,
              "institutional": 462,
              "ambiguous": 216,
              "unobservable": 0,
              "unclear": 216
            }
          },
          "confidence": {
            "high": 0.49843087115708723,
            "medium": 0.3130993200441681,
            "low": 0.02885453594467368,
            "na": 0.159615272854071
          },
          "confidence_counts": {
            "high": 17153,
            "medium": 10775,
            "low": 993,
            "na": 5493
          },
          "trade_confidence": {
            "high": 0.3919771132642833,
            "medium": 0.28990561309722684,
            "low": 0.028566655529568993,
            "na": 0.2895506181089208
          },
          "trade_confidence_counts": {
            "high": 18771,
            "medium": 13883,
            "low": 1368,
            "na": 13866
          },
          "observability": {
            "avg_feature_coverage": 0.8653382344394722,
            "observable_run_pct": 1.0,
            "ambiguous_run_pct": 0.006276515371651073,
            "unobservable_run_pct": 0.0
          },
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "dominant_share": 0.8269599581565642,
          "dominance_gap": 0.6736212006741442,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 37424,
              "MULTI_FILL_SINGLE_PRICE": 10253,
              "WALK_BOOK": 211
            },
            "d2_information": {
              "NEUTRAL_OR_REVERSING": 46533,
              "MOMENTUM_REACTIVE": 911,
              "PERSISTENT_POSITIVE_IMPACT": 411,
              "UNOBSERVABLE": 29,
              "SHORT_HORIZON_POSITIVE_IMPACT": 4
            },
            "d3_urgency": {
              "IMMEDIATE": 34124,
              "ADAPTIVE": 284,
              "SCHEDULED": 6
            },
            "participant_confidence": {
              "HIGH": 17153,
              "MEDIUM": 10775,
              "NA": 5493,
              "LOW": 993
            }
          },
          "trade_size": {
            "avg": 1883.1980349983294,
            "median": 136.0
          },
          "run_size": {
            "avg": 2620.5203550880456,
            "median": 137.0,
            "avg_length": 1.1501423839135236
          },
          "recent_trades": [
            {
              "trade_id": "BMLL-286",
              "timestamp": "2026-04-20T08:59:53.384600",
              "price": 0.66,
              "size": 100.0,
              "notional": 66.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 57636,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-285",
              "timestamp": "2026-04-20T08:59:53.142100",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 57635,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-284",
              "timestamp": "2026-04-20T08:59:31.051200",
              "price": 0.66,
              "size": 200.0,
              "notional": 132.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57634,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-283",
              "timestamp": "2026-04-20T08:59:30.929400",
              "price": 0.66,
              "size": 200.0,
              "notional": 132.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57634,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-282",
              "timestamp": "2026-04-20T08:59:30.384200",
              "price": 0.66,
              "size": 200.0,
              "notional": 132.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57634,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-281",
              "timestamp": "2026-04-20T08:59:19.082400",
              "price": 0.66,
              "size": 200.0,
              "notional": 132.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 57633,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-280",
              "timestamp": "2026-04-20T08:59:09.088600",
              "price": 0.66,
              "size": 200.0,
              "notional": 132.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57632,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "BMLL-279",
              "timestamp": "2026-04-20T08:59:04.153500",
              "price": 0.66,
              "size": 100.0,
              "notional": 66.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57632,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "BMLL-278",
              "timestamp": "2026-04-20T08:59:00.079600",
              "price": 0.66,
              "size": 200.0,
              "notional": 132.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57632,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "BMLL-277",
              "timestamp": "2026-04-20T08:58:49.679800",
              "price": 0.66,
              "size": 200.0,
              "notional": 132.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57631,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-276",
              "timestamp": "2026-04-20T08:58:49.558900",
              "price": 0.66,
              "size": 200.0,
              "notional": 132.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57631,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-275",
              "timestamp": "2026-04-20T08:58:34.413700",
              "price": 0.66,
              "size": 200.0,
              "notional": 132.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 57630,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-274",
              "timestamp": "2026-04-20T08:58:26.495300",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 57629,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-273",
              "timestamp": "2026-04-20T08:58:07.144000",
              "price": 0.66,
              "size": 500.0,
              "notional": 330.0,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 57628,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-272",
              "timestamp": "2026-04-20T08:56:59.607800",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 57627,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-271",
              "timestamp": "2026-04-20T08:56:06.867400",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 57626,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-270",
              "timestamp": "2026-04-20T08:55:12.635200",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 57625,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-269",
              "timestamp": "2026-04-20T08:54:36.936100",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 57624,
              "d1": "SINGLE_FILL",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-268",
              "timestamp": "2026-04-20T08:54:24.842200",
              "price": 0.665,
              "size": 3600.0,
              "notional": 2394.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57623,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-267",
              "timestamp": "2026-04-20T08:54:24.842200",
              "price": 0.665,
              "size": 200.0,
              "notional": 133.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57623,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-266",
              "timestamp": "2026-04-20T08:54:24.842100",
              "price": 0.665,
              "size": 200.0,
              "notional": 133.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57623,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-265",
              "timestamp": "2026-04-20T08:54:24.842100",
              "price": 0.665,
              "size": 1100.0,
              "notional": 731.5,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57623,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-264",
              "timestamp": "2026-04-20T08:54:24.842100",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57623,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-263",
              "timestamp": "2026-04-20T08:54:24.842100",
              "price": 0.665,
              "size": 200.0,
              "notional": 133.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57623,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-262",
              "timestamp": "2026-04-20T08:54:24.842100",
              "price": 0.665,
              "size": 200.0,
              "notional": 133.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57623,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-261",
              "timestamp": "2026-04-20T08:54:24.842000",
              "price": 0.665,
              "size": 200.0,
              "notional": 133.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57623,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-260",
              "timestamp": "2026-04-20T08:54:24.842000",
              "price": 0.665,
              "size": 200.0,
              "notional": 133.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57623,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-259",
              "timestamp": "2026-04-20T08:54:24.842000",
              "price": 0.665,
              "size": 200.0,
              "notional": 133.0,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57623,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-258",
              "timestamp": "2026-04-20T08:54:24.842000",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57623,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "BMLL-257",
              "timestamp": "2026-04-20T08:54:24.842000",
              "price": 0.665,
              "size": 100.0,
              "notional": 66.5,
              "bucket": "MIXED",
              "confidence": "NA",
              "run_id": 57623,
              "d1": "MULTI_FILL_SINGLE_PRICE",
              "d2": "NEUTRAL_OR_REVERSING",
              "d3": "IMMEDIATE"
            }
          ],
          "peer_comparison": [
            {
              "ticker": "CRPU",
              "currency": "SGD",
              "is_target": true,
              "retail_pct": 0.6004426996324758,
              "mixed_pct": 0.24801620447711326,
              "instit_pct": 0.11000668225860341,
              "ambiguous_pct": 0.04153441363180755,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.04153441363180755,
              "retail_qty_pct": 0.09457942528306117,
              "mixed_qty_pct": 0.3027143978177198,
              "instit_qty_pct": 0.48511042188259035,
              "ambiguous_qty_pct": 0.11759575501662868,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.11759575501662868,
              "retail_notional_pct": 0.09466947264071349,
              "mixed_notional_pct": 0.3029264546218526,
              "instit_notional_pct": 0.48524763718938535,
              "ambiguous_notional_pct": 0.11715643554804857,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.11715643554804857,
              "run_retail_pct": 0.8269599581565642,
              "run_mixed_pct": 0.15333875748241996,
              "run_instit_pct": 0.013424768989364793,
              "run_unclear_pct": 0.006276515371651073,
              "avg_trade_size": 1883.1980349983294,
              "avg_run_notional": 2620.5203550880456,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.49843087115708723,
              "medium_confidence_pct": 0.3130993200441681,
              "low_confidence_pct": 0.02885453594467368,
              "na_confidence_pct": 0.159615272854071,
              "avg_feature_coverage": 0.8653382344394722,
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
              "retail_pct": 0.36566555190644023,
              "mixed_pct": 0.33163449214995194,
              "instit_pct": 0.23172911326497916,
              "ambiguous_pct": 0.0706354133290612,
              "unobservable_pct": 0.0003354293495674463,
              "unclear_pct": 0.07097084267862865,
              "retail_qty_pct": 0.10012850243489226,
              "mixed_qty_pct": 0.22518578808816725,
              "instit_qty_pct": 0.613949855675553,
              "ambiguous_qty_pct": 0.047385709125515915,
              "unobservable_qty_pct": 0.013350144675871513,
              "unclear_qty_pct": 0.06073585380138743,
              "retail_notional_pct": 0.1000810917010023,
              "mixed_notional_pct": 0.22514265799821034,
              "instit_notional_pct": 0.6140869511699807,
              "ambiguous_notional_pct": 0.04738479680771924,
              "unobservable_notional_pct": 0.013304502323087521,
              "unclear_notional_pct": 0.060689299130806756,
              "run_retail_pct": 0.7215618639195761,
              "run_mixed_pct": 0.24618157522646406,
              "run_instit_pct": 0.015211547724482978,
              "run_unclear_pct": 0.01704501312947684,
              "avg_trade_size": 5653.186056277034,
              "avg_run_notional": 11696.784139229427,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.31148194761675396,
              "medium_confidence_pct": 0.37175841762612843,
              "low_confidence_pct": 0.05353304640117673,
              "na_confidence_pct": 0.26322658835594087,
              "avg_feature_coverage": 0.8864857025953374,
              "observable_run_pct": 0.9996011953780098,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "JYEU",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.4497983228544116,
              "mixed_pct": 0.310178672739001,
              "instit_pct": 0.16224324051262523,
              "ambiguous_pct": 0.07751552408856696,
              "unobservable_pct": 0.00026423980539515507,
              "unclear_pct": 0.07777976389396211,
              "retail_qty_pct": 0.0833473849870121,
              "mixed_qty_pct": 0.21813546026712277,
              "instit_qty_pct": 0.5662010458090391,
              "ambiguous_qty_pct": 0.06595932495903384,
              "unobservable_qty_pct": 0.06635678397779217,
              "unclear_qty_pct": 0.132316108936826,
              "retail_notional_pct": 0.0831408795734681,
              "mixed_notional_pct": 0.21638708410779853,
              "instit_notional_pct": 0.5718321919725265,
              "ambiguous_notional_pct": 0.06682746106387727,
              "unobservable_notional_pct": 0.061812383282329506,
              "unclear_notional_pct": 0.1286398443462068,
              "run_retail_pct": 0.7668490425267347,
              "run_mixed_pct": 0.21246096880267484,
              "run_instit_pct": 0.00880101688358341,
              "run_unclear_pct": 0.011888971787007102,
              "avg_trade_size": 4051.9269609702264,
              "avg_run_notional": 7203.369725538147,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.3803365663599436,
              "medium_confidence_pct": 0.3539058830031225,
              "low_confidence_pct": 0.04140761004725193,
              "na_confidence_pct": 0.22434994058968194,
              "avg_feature_coverage": 0.8832542347122052,
              "observable_run_pct": 0.9995786012324187,
              "thresholds": {
                "retail_max": 10000.0,
                "instit_min": 50000.0
              }
            },
            {
              "ticker": "AU8U",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.4908333072173995,
              "mixed_pct": 0.26860760287066343,
              "instit_pct": 0.19838707992520396,
              "ambiguous_pct": 0.04217200998673311,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.04217200998673311,
              "retail_qty_pct": 0.11555930970287027,
              "mixed_qty_pct": 0.2682295204223689,
              "instit_qty_pct": 0.5386603225021219,
              "ambiguous_qty_pct": 0.07755084737263883,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.07755084737263883,
              "retail_notional_pct": 0.11685988758814624,
              "mixed_notional_pct": 0.2681090527707334,
              "instit_notional_pct": 0.5378153184682808,
              "ambiguous_notional_pct": 0.07721574117283954,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.07721574117283954,
              "run_retail_pct": 0.7958998675127258,
              "run_mixed_pct": 0.17627780489505612,
              "run_instit_pct": 0.019820793529042605,
              "run_unclear_pct": 0.008001534063175511,
              "avg_trade_size": 1690.0626625716882,
              "avg_run_notional": 2820.316374381145,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.46381005508681405,
              "medium_confidence_pct": 0.32806289659019594,
              "low_confidence_pct": 0.023847709364758385,
              "na_confidence_pct": 0.18427933895823165,
              "avg_feature_coverage": 0.8701720591311622,
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
              "retail_pct": 0.5319394138952914,
              "mixed_pct": 0.21666117879486335,
              "instit_pct": 0.17286796180441225,
              "ambiguous_pct": 0.07853144550543299,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.07853144550543299,
              "retail_qty_pct": 0.11768533024342853,
              "mixed_qty_pct": 0.4322013798159063,
              "instit_qty_pct": 0.3840224333394422,
              "ambiguous_qty_pct": 0.06609085660122295,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.06609085660122295,
              "retail_notional_pct": 0.11407762369552336,
              "mixed_notional_pct": 0.4082180919493362,
              "instit_notional_pct": 0.3951896485959216,
              "ambiguous_notional_pct": 0.0825146357592189,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.0825146357592189,
              "run_retail_pct": 0.7718120805369127,
              "run_mixed_pct": 0.16380810340541885,
              "run_instit_pct": 0.030077056922694505,
              "run_unclear_pct": 0.0343027591349739,
              "avg_trade_size": 1819.5429041817583,
              "avg_run_notional": 2747.179617201093,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.3658960974397216,
              "medium_confidence_pct": 0.21948794432015908,
              "low_confidence_pct": 0.21650509569972656,
              "na_confidence_pct": 0.19811086254039273,
              "avg_feature_coverage": 0.8551081282624904,
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
              "retail_pct": 0.4145780639227409,
              "mixed_pct": 0.1919981604966659,
              "instit_pct": 0.14532076339388364,
              "ambiguous_pct": 0.24810301218670958,
              "unobservable_pct": 0.0,
              "unclear_pct": 0.24810301218670958,
              "retail_qty_pct": 0.09317101431481858,
              "mixed_qty_pct": 0.1711179063762522,
              "instit_qty_pct": 0.3764018431623817,
              "ambiguous_qty_pct": 0.35930923614654753,
              "unobservable_qty_pct": 0.0,
              "unclear_qty_pct": 0.35930923614654753,
              "retail_notional_pct": 0.09351494047379355,
              "mixed_notional_pct": 0.17149256100074142,
              "instit_notional_pct": 0.37519730787816197,
              "ambiguous_notional_pct": 0.3597951906473031,
              "unobservable_notional_pct": 0.0,
              "unclear_notional_pct": 0.3597951906473031,
              "run_retail_pct": 0.6416988416988417,
              "run_mixed_pct": 0.1637065637065637,
              "run_instit_pct": 0.055212355212355214,
              "run_unclear_pct": 0.13938223938223937,
              "avg_trade_size": 3106.3104161876295,
              "avg_run_notional": 5215.962934362934,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.22046332046332046,
              "medium_confidence_pct": 0.18803088803088802,
              "low_confidence_pct": 0.28841698841698843,
              "na_confidence_pct": 0.3030888030888031,
              "avg_feature_coverage": 0.8519111969111969,
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
              "retail_pct": 0.14090368608799048,
              "mixed_pct": 0.19560047562425684,
              "instit_pct": 0.21284185493460167,
              "ambiguous_pct": 0.44351961950059454,
              "unobservable_pct": 0.007134363852556481,
              "unclear_pct": 0.45065398335315104,
              "retail_qty_pct": 0.00815060532201032,
              "mixed_qty_pct": 0.015720619579987025,
              "instit_qty_pct": 0.0734894304513314,
              "ambiguous_qty_pct": 0.050533752996463975,
              "unobservable_qty_pct": 0.8521055916502073,
              "unclear_qty_pct": 0.9026393446466713,
              "retail_notional_pct": 0.008199915184880259,
              "mixed_notional_pct": 0.015629894844731707,
              "instit_notional_pct": 0.07092649111865114,
              "ambiguous_notional_pct": 0.0505081778151837,
              "unobservable_notional_pct": 0.8547355210365531,
              "unclear_notional_pct": 0.9052436988517368,
              "run_retail_pct": 0.48764044943820223,
              "run_mixed_pct": 0.1797752808988764,
              "run_instit_pct": 0.0853932584269663,
              "run_unclear_pct": 0.24719101123595505,
              "avg_trade_size": 1167.5391200951249,
              "avg_run_notional": 4413.035505617978,
              "dominant_bucket": "RETAIL",
              "dominant_label": "Retail-led",
              "high_confidence_pct": 0.20674157303370785,
              "medium_confidence_pct": 0.1707865168539326,
              "low_confidence_pct": 0.19550561797752808,
              "na_confidence_pct": 0.42696629213483145,
              "avg_feature_coverage": 0.8823595505617976,
              "observable_run_pct": 0.9887640449438202,
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
      "n_trades": 47888,
      "n_runs": 34414,
      "n_trade_days": 126,
      "first_trade_date": "2025-10-17",
      "last_trade_date": "2026-04-20",
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
        "retail_pct": 0.6004426996324758,
        "mixed_pct": 0.24801620447711326,
        "instit_pct": 0.11000668225860341,
        "ambiguous_pct": 0.04153441363180755,
        "unobservable_pct": 0.0,
        "unclear_pct": 0.04153441363180755,
        "retail_qty_pct": 0.09457942528306117,
        "mixed_qty_pct": 0.3027143978177198,
        "instit_qty_pct": 0.48511042188259035,
        "ambiguous_qty_pct": 0.11759575501662868,
        "unobservable_qty_pct": 0.0,
        "unclear_qty_pct": 0.11759575501662868,
        "retail_notional_pct": 0.09466947264071349,
        "mixed_notional_pct": 0.3029264546218526,
        "instit_notional_pct": 0.48524763718938535,
        "ambiguous_notional_pct": 0.11715643554804857,
        "unobservable_notional_pct": 0.0,
        "unclear_notional_pct": 0.11715643554804857
      },
      "run_composition": {
        "retail_pct": 0.8269599581565642,
        "mixed_pct": 0.15333875748241996,
        "instit_pct": 0.013424768989364793,
        "ambiguous_pct": 0.006276515371651073,
        "unobservable_pct": 0.0,
        "unclear_pct": 0.006276515371651073
      },
      "trade_size": {
        "avg": 1883.1980349983294,
        "median": 136.0
      },
      "run_size": {
        "avg": 2620.5203550880456,
        "median": 137.0,
        "avg_length": 1.1501423839135236
      },
      "confidence": {
        "high": 0.49843087115708723,
        "medium": 0.3130993200441681,
        "low": 0.02885453594467368,
        "na": 0.159615272854071
      },
      "confidence_counts": {
        "high": 17153,
        "medium": 10775,
        "low": 993,
        "na": 5493
      },
      "trade_confidence": {
        "high": 0.3919771132642833,
        "medium": 0.28990561309722684,
        "low": 0.028566655529568993,
        "na": 0.2895506181089208
      },
      "trade_confidence_counts": {
        "high": 18771,
        "medium": 13883,
        "low": 1368,
        "na": 13866
      },
      "counts": {
        "trades": {
          "retail": 28754,
          "mixed": 11877,
          "institutional": 5268,
          "ambiguous": 1989,
          "unobservable": 0,
          "unclear": 1989
        },
        "runs": {
          "retail": 28459,
          "mixed": 5277,
          "institutional": 462,
          "ambiguous": 216,
          "unobservable": 0,
          "unclear": 216
        }
      },
      "observability": {
        "avg_feature_coverage": 0.8653382344394722,
        "observable_run_pct": 1.0,
        "ambiguous_run_pct": 0.006276515371651073,
        "unobservable_run_pct": 0.0
      },
      "dominant_bucket": "RETAIL",
      "dominant_label": "Retail-led",
      "dominant_share": 0.8269599581565642,
      "dominance_gap": 0.6736212006741442,
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
            "n_trades": 5827,
            "n_runs": 4276,
            "retail_pct": 0.5977346833705166,
            "mixed_pct": 0.27269607001887763,
            "instit_pct": 0.07499570962759568,
            "ambiguous_pct": 0.054573536983010124,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.054573536983010124,
            "avg_trade_size": 1551.432469538356,
            "avg_run_notional": 2114.1714218896163,
            "retail_qty_pct": 0.08297473401389378,
            "mixed_qty_pct": 0.2950021192680982,
            "instit_qty_pct": 0.3912025230066308,
            "ambiguous_qty_pct": 0.23082062371137724,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.23082062371137724,
            "retail_notional_pct": 0.08299365600108051,
            "mixed_notional_pct": 0.2950216129139664,
            "instit_notional_pct": 0.3927956437232507,
            "ambiguous_notional_pct": 0.2291890873617024,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.2291890873617024,
            "run_retail_pct": 0.8110383536014967,
            "run_mixed_pct": 0.17025257249766138,
            "run_instit_pct": 0.011225444340505144,
            "run_ambiguous_pct": 0.007483629560336763,
            "run_unobservable_pct": 0.0,
            "run_unclear_pct": 0.007483629560336763,
            "avg_feature_coverage": 0.8698550046772683,
            "high_confidence_pct": 0.5385874649204865,
            "medium_confidence_pct": 0.26824134705332087,
            "low_confidence_pct": 0.015434985968194575,
            "na_confidence_pct": 0.17773620205799812,
            "total_quantity": null
          }
        ]
      },
      "peer_comparison": [
        {
          "ticker": "CRPU",
          "currency": "SGD",
          "is_target": true,
          "retail_pct": 0.6004426996324758,
          "mixed_pct": 0.24801620447711326,
          "instit_pct": 0.11000668225860341,
          "ambiguous_pct": 0.04153441363180755,
          "unobservable_pct": 0.0,
          "unclear_pct": 0.04153441363180755,
          "retail_qty_pct": 0.09457942528306117,
          "mixed_qty_pct": 0.3027143978177198,
          "instit_qty_pct": 0.48511042188259035,
          "ambiguous_qty_pct": 0.11759575501662868,
          "unobservable_qty_pct": 0.0,
          "unclear_qty_pct": 0.11759575501662868,
          "retail_notional_pct": 0.09466947264071349,
          "mixed_notional_pct": 0.3029264546218526,
          "instit_notional_pct": 0.48524763718938535,
          "ambiguous_notional_pct": 0.11715643554804857,
          "unobservable_notional_pct": 0.0,
          "unclear_notional_pct": 0.11715643554804857,
          "run_retail_pct": 0.8269599581565642,
          "run_mixed_pct": 0.15333875748241996,
          "run_instit_pct": 0.013424768989364793,
          "run_unclear_pct": 0.006276515371651073,
          "avg_trade_size": 1883.1980349983294,
          "avg_run_notional": 2620.5203550880456,
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "high_confidence_pct": 0.49843087115708723,
          "medium_confidence_pct": 0.3130993200441681,
          "low_confidence_pct": 0.02885453594467368,
          "na_confidence_pct": 0.159615272854071,
          "avg_feature_coverage": 0.8653382344394722,
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
          "retail_pct": 0.36566555190644023,
          "mixed_pct": 0.33163449214995194,
          "instit_pct": 0.23172911326497916,
          "ambiguous_pct": 0.0706354133290612,
          "unobservable_pct": 0.0003354293495674463,
          "unclear_pct": 0.07097084267862865,
          "retail_qty_pct": 0.10012850243489226,
          "mixed_qty_pct": 0.22518578808816725,
          "instit_qty_pct": 0.613949855675553,
          "ambiguous_qty_pct": 0.047385709125515915,
          "unobservable_qty_pct": 0.013350144675871513,
          "unclear_qty_pct": 0.06073585380138743,
          "retail_notional_pct": 0.1000810917010023,
          "mixed_notional_pct": 0.22514265799821034,
          "instit_notional_pct": 0.6140869511699807,
          "ambiguous_notional_pct": 0.04738479680771924,
          "unobservable_notional_pct": 0.013304502323087521,
          "unclear_notional_pct": 0.060689299130806756,
          "run_retail_pct": 0.7215618639195761,
          "run_mixed_pct": 0.24618157522646406,
          "run_instit_pct": 0.015211547724482978,
          "run_unclear_pct": 0.01704501312947684,
          "avg_trade_size": 5653.186056277034,
          "avg_run_notional": 11696.784139229427,
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "high_confidence_pct": 0.31148194761675396,
          "medium_confidence_pct": 0.37175841762612843,
          "low_confidence_pct": 0.05353304640117673,
          "na_confidence_pct": 0.26322658835594087,
          "avg_feature_coverage": 0.8864857025953374,
          "observable_run_pct": 0.9996011953780098,
          "thresholds": {
            "retail_max": 10000.0,
            "instit_min": 50000.0
          }
        },
        {
          "ticker": "JYEU",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.4497983228544116,
          "mixed_pct": 0.310178672739001,
          "instit_pct": 0.16224324051262523,
          "ambiguous_pct": 0.07751552408856696,
          "unobservable_pct": 0.00026423980539515507,
          "unclear_pct": 0.07777976389396211,
          "retail_qty_pct": 0.0833473849870121,
          "mixed_qty_pct": 0.21813546026712277,
          "instit_qty_pct": 0.5662010458090391,
          "ambiguous_qty_pct": 0.06595932495903384,
          "unobservable_qty_pct": 0.06635678397779217,
          "unclear_qty_pct": 0.132316108936826,
          "retail_notional_pct": 0.0831408795734681,
          "mixed_notional_pct": 0.21638708410779853,
          "instit_notional_pct": 0.5718321919725265,
          "ambiguous_notional_pct": 0.06682746106387727,
          "unobservable_notional_pct": 0.061812383282329506,
          "unclear_notional_pct": 0.1286398443462068,
          "run_retail_pct": 0.7668490425267347,
          "run_mixed_pct": 0.21246096880267484,
          "run_instit_pct": 0.00880101688358341,
          "run_unclear_pct": 0.011888971787007102,
          "avg_trade_size": 4051.9269609702264,
          "avg_run_notional": 7203.369725538147,
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "high_confidence_pct": 0.3803365663599436,
          "medium_confidence_pct": 0.3539058830031225,
          "low_confidence_pct": 0.04140761004725193,
          "na_confidence_pct": 0.22434994058968194,
          "avg_feature_coverage": 0.8832542347122052,
          "observable_run_pct": 0.9995786012324187,
          "thresholds": {
            "retail_max": 10000.0,
            "instit_min": 50000.0
          }
        },
        {
          "ticker": "AU8U",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.4908333072173995,
          "mixed_pct": 0.26860760287066343,
          "instit_pct": 0.19838707992520396,
          "ambiguous_pct": 0.04217200998673311,
          "unobservable_pct": 0.0,
          "unclear_pct": 0.04217200998673311,
          "retail_qty_pct": 0.11555930970287027,
          "mixed_qty_pct": 0.2682295204223689,
          "instit_qty_pct": 0.5386603225021219,
          "ambiguous_qty_pct": 0.07755084737263883,
          "unobservable_qty_pct": 0.0,
          "unclear_qty_pct": 0.07755084737263883,
          "retail_notional_pct": 0.11685988758814624,
          "mixed_notional_pct": 0.2681090527707334,
          "instit_notional_pct": 0.5378153184682808,
          "ambiguous_notional_pct": 0.07721574117283954,
          "unobservable_notional_pct": 0.0,
          "unclear_notional_pct": 0.07721574117283954,
          "run_retail_pct": 0.7958998675127258,
          "run_mixed_pct": 0.17627780489505612,
          "run_instit_pct": 0.019820793529042605,
          "run_unclear_pct": 0.008001534063175511,
          "avg_trade_size": 1690.0626625716882,
          "avg_run_notional": 2820.316374381145,
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "high_confidence_pct": 0.46381005508681405,
          "medium_confidence_pct": 0.32806289659019594,
          "low_confidence_pct": 0.023847709364758385,
          "na_confidence_pct": 0.18427933895823165,
          "avg_feature_coverage": 0.8701720591311622,
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
          "retail_pct": 0.5319394138952914,
          "mixed_pct": 0.21666117879486335,
          "instit_pct": 0.17286796180441225,
          "ambiguous_pct": 0.07853144550543299,
          "unobservable_pct": 0.0,
          "unclear_pct": 0.07853144550543299,
          "retail_qty_pct": 0.11768533024342853,
          "mixed_qty_pct": 0.4322013798159063,
          "instit_qty_pct": 0.3840224333394422,
          "ambiguous_qty_pct": 0.06609085660122295,
          "unobservable_qty_pct": 0.0,
          "unclear_qty_pct": 0.06609085660122295,
          "retail_notional_pct": 0.11407762369552336,
          "mixed_notional_pct": 0.4082180919493362,
          "instit_notional_pct": 0.3951896485959216,
          "ambiguous_notional_pct": 0.0825146357592189,
          "unobservable_notional_pct": 0.0,
          "unclear_notional_pct": 0.0825146357592189,
          "run_retail_pct": 0.7718120805369127,
          "run_mixed_pct": 0.16380810340541885,
          "run_instit_pct": 0.030077056922694505,
          "run_unclear_pct": 0.0343027591349739,
          "avg_trade_size": 1819.5429041817583,
          "avg_run_notional": 2747.179617201093,
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "high_confidence_pct": 0.3658960974397216,
          "medium_confidence_pct": 0.21948794432015908,
          "low_confidence_pct": 0.21650509569972656,
          "na_confidence_pct": 0.19811086254039273,
          "avg_feature_coverage": 0.8551081282624904,
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
          "retail_pct": 0.4145780639227409,
          "mixed_pct": 0.1919981604966659,
          "instit_pct": 0.14532076339388364,
          "ambiguous_pct": 0.24810301218670958,
          "unobservable_pct": 0.0,
          "unclear_pct": 0.24810301218670958,
          "retail_qty_pct": 0.09317101431481858,
          "mixed_qty_pct": 0.1711179063762522,
          "instit_qty_pct": 0.3764018431623817,
          "ambiguous_qty_pct": 0.35930923614654753,
          "unobservable_qty_pct": 0.0,
          "unclear_qty_pct": 0.35930923614654753,
          "retail_notional_pct": 0.09351494047379355,
          "mixed_notional_pct": 0.17149256100074142,
          "instit_notional_pct": 0.37519730787816197,
          "ambiguous_notional_pct": 0.3597951906473031,
          "unobservable_notional_pct": 0.0,
          "unclear_notional_pct": 0.3597951906473031,
          "run_retail_pct": 0.6416988416988417,
          "run_mixed_pct": 0.1637065637065637,
          "run_instit_pct": 0.055212355212355214,
          "run_unclear_pct": 0.13938223938223937,
          "avg_trade_size": 3106.3104161876295,
          "avg_run_notional": 5215.962934362934,
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "high_confidence_pct": 0.22046332046332046,
          "medium_confidence_pct": 0.18803088803088802,
          "low_confidence_pct": 0.28841698841698843,
          "na_confidence_pct": 0.3030888030888031,
          "avg_feature_coverage": 0.8519111969111969,
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
          "retail_pct": 0.14090368608799048,
          "mixed_pct": 0.19560047562425684,
          "instit_pct": 0.21284185493460167,
          "ambiguous_pct": 0.44351961950059454,
          "unobservable_pct": 0.007134363852556481,
          "unclear_pct": 0.45065398335315104,
          "retail_qty_pct": 0.00815060532201032,
          "mixed_qty_pct": 0.015720619579987025,
          "instit_qty_pct": 0.0734894304513314,
          "ambiguous_qty_pct": 0.050533752996463975,
          "unobservable_qty_pct": 0.8521055916502073,
          "unclear_qty_pct": 0.9026393446466713,
          "retail_notional_pct": 0.008199915184880259,
          "mixed_notional_pct": 0.015629894844731707,
          "instit_notional_pct": 0.07092649111865114,
          "ambiguous_notional_pct": 0.0505081778151837,
          "unobservable_notional_pct": 0.8547355210365531,
          "unclear_notional_pct": 0.9052436988517368,
          "run_retail_pct": 0.48764044943820223,
          "run_mixed_pct": 0.1797752808988764,
          "run_instit_pct": 0.0853932584269663,
          "run_unclear_pct": 0.24719101123595505,
          "avg_trade_size": 1167.5391200951249,
          "avg_run_notional": 4413.035505617978,
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "high_confidence_pct": 0.20674157303370785,
          "medium_confidence_pct": 0.1707865168539326,
          "low_confidence_pct": 0.19550561797752808,
          "na_confidence_pct": 0.42696629213483145,
          "avg_feature_coverage": 0.8823595505617976,
          "observable_run_pct": 0.9887640449438202,
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
            "retail_pct": 0.4645390070921986,
            "mixed_pct": 0.19148936170212766,
            "instit_pct": 0.2907801418439716,
            "ambiguous_pct": 0.05319148936170213,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.05319148936170213,
            "retail_qty_pct": 0.07056120774532326,
            "mixed_qty_pct": 0.3309812930751559,
            "instit_qty_pct": 0.39284542172628817,
            "ambiguous_qty_pct": 0.20561207745323268,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.20561207745323268,
            "retail_notional_pct": 0.07035410528656401,
            "mixed_notional_pct": 0.33045132519255593,
            "instit_notional_pct": 0.3933292567680249,
            "ambiguous_notional_pct": 0.20586531275285513,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.20586531275285513,
            "run_retail_pct": 0.8136645962732919,
            "run_mixed_pct": 0.10559006211180125,
            "run_instit_pct": 0.055900621118012424,
            "run_unclear_pct": 0.024844720496894408,
            "avg_trade_size": 1435.2925531914893,
            "avg_run_notional": 2513.990683229814,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.5838509316770186,
            "medium_confidence_pct": 0.2857142857142857,
            "low_confidence_pct": 0.0,
            "na_confidence_pct": 0.13043478260869565,
            "avg_feature_coverage": 0.8565217391304346,
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
            "retail_pct": 0.5395973154362416,
            "mixed_pct": 0.21476510067114093,
            "instit_pct": 0.22416107382550335,
            "ambiguous_pct": 0.021476510067114093,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.021476510067114093,
            "retail_qty_pct": 0.09623196526124107,
            "mixed_qty_pct": 0.13713405238828968,
            "instit_qty_pct": 0.7143857683148901,
            "ambiguous_qty_pct": 0.052248214035579214,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.052248214035579214,
            "retail_notional_pct": 0.09641800692067165,
            "mixed_notional_pct": 0.137358452503237,
            "instit_notional_pct": 0.7140117869618828,
            "ambiguous_notional_pct": 0.052211753614208586,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.052211753614208586,
            "run_retail_pct": 0.8298755186721992,
            "run_mixed_pct": 0.14315352697095435,
            "run_instit_pct": 0.022821576763485476,
            "run_unclear_pct": 0.004149377593360996,
            "avg_trade_size": 652.0684563758389,
            "avg_run_notional": 1007.8651452282157,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.6120331950207469,
            "medium_confidence_pct": 0.24066390041493776,
            "low_confidence_pct": 0.0,
            "na_confidence_pct": 0.14730290456431536,
            "avg_feature_coverage": 0.8643153526970953,
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
            "retail_pct": 0.5306122448979592,
            "mixed_pct": 0.3469387755102041,
            "instit_pct": 0.10204081632653061,
            "ambiguous_pct": 0.02040816326530612,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.02040816326530612,
            "retail_qty_pct": 0.10496083550913839,
            "mixed_qty_pct": 0.21514360313315928,
            "instit_qty_pct": 0.6276762402088772,
            "ambiguous_qty_pct": 0.05221932114882506,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.05221932114882506,
            "retail_notional_pct": 0.10496982356071942,
            "mixed_notional_pct": 0.2151414426446812,
            "instit_notional_pct": 0.6276699370361816,
            "ambiguous_notional_pct": 0.05221879675841777,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.05221879675841777,
            "run_retail_pct": 0.6153846153846154,
            "run_mixed_pct": 0.3076923076923077,
            "run_instit_pct": 0.038461538461538464,
            "run_unclear_pct": 0.038461538461538464,
            "avg_trade_size": 2032.265306122449,
            "avg_run_notional": 3830.0384615384614,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.0,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.6538461538461539,
            "na_confidence_pct": 0.34615384615384615,
            "avg_feature_coverage": 0.9423076923076924,
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
            "retail_pct": 0.3968841285296982,
            "mixed_pct": 0.4157740993184031,
            "instit_pct": 0.14040895813047713,
            "ambiguous_pct": 0.04673807205452775,
            "unobservable_pct": 0.00019474196689386563,
            "unclear_pct": 0.04693281402142162,
            "retail_qty_pct": 0.11791142710758362,
            "mixed_qty_pct": 0.24013734461093184,
            "instit_qty_pct": 0.6040286554070452,
            "ambiguous_qty_pct": 0.024898204992224927,
            "unobservable_qty_pct": 0.013024367882214413,
            "unclear_qty_pct": 0.03792257287443934,
            "retail_notional_pct": 0.11809867485386384,
            "mixed_notional_pct": 0.2404373561567804,
            "instit_notional_pct": 0.6034744177022339,
            "ambiguous_notional_pct": 0.024925626564124462,
            "unobservable_notional_pct": 0.0130639247229974,
            "unclear_notional_pct": 0.037989551287121864,
            "run_retail_pct": 0.6860007160759041,
            "run_mixed_pct": 0.2925170068027211,
            "run_instit_pct": 0.006802721088435374,
            "run_unclear_pct": 0.014679556032939491,
            "avg_trade_size": 5151.6061343719575,
            "avg_run_notional": 9471.356068743287,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.22663802363050484,
            "medium_confidence_pct": 0.39312567132116005,
            "low_confidence_pct": 0.07303974221267455,
            "na_confidence_pct": 0.3071965628356606,
            "avg_feature_coverage": 0.8952201933404941,
            "observable_run_pct": 0.9996419620479771,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "JYEU",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.6406362979031092,
            "mixed_pct": 0.16558206796818511,
            "instit_pct": 0.14967462039045554,
            "ambiguous_pct": 0.044107013738250184,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.044107013738250184,
            "retail_qty_pct": 0.18781381462885058,
            "mixed_qty_pct": 0.16104627493554077,
            "instit_qty_pct": 0.5011195548921156,
            "ambiguous_qty_pct": 0.15002035554349302,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.15002035554349302,
            "retail_notional_pct": 0.18705802485847337,
            "mixed_notional_pct": 0.16127781897994642,
            "instit_notional_pct": 0.5012092514666693,
            "ambiguous_notional_pct": 0.15045490469491093,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.15045490469491093,
            "run_retail_pct": 0.8619662363455809,
            "run_mixed_pct": 0.11916583912611718,
            "run_instit_pct": 0.010923535253227408,
            "run_unclear_pct": 0.007944389275074478,
            "avg_trade_size": 2465.1775126536513,
            "avg_run_notional": 3385.6410129096325,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.4856007944389275,
            "medium_confidence_pct": 0.3872889771598808,
            "low_confidence_pct": 0.0,
            "na_confidence_pct": 0.12711022840119166,
            "avg_feature_coverage": 0.8611717974180733,
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
            "retail_pct": 0.5,
            "mixed_pct": 0.5,
            "instit_pct": 0.0,
            "ambiguous_pct": 0.0,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.0,
            "retail_qty_pct": 0.19230769230769232,
            "mixed_qty_pct": 0.8076923076923077,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": 0.0,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.0,
            "retail_notional_pct": 0.21739130434782608,
            "mixed_notional_pct": 0.782608695652174,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": 0.0,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.0,
            "run_retail_pct": 0.5,
            "run_mixed_pct": 0.5,
            "run_instit_pct": 0.0,
            "run_unclear_pct": 0.0,
            "avg_trade_size": 161.0,
            "avg_run_notional": 161.0,
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
        "30d": [
          {
            "ticker": "CRPU",
            "currency": "SGD",
            "is_target": true,
            "retail_pct": 0.5895805443998215,
            "mixed_pct": 0.2600401606425703,
            "instit_pct": 0.10285586791610889,
            "ambiguous_pct": 0.04752342704149933,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.04752342704149933,
            "retail_qty_pct": 0.08284217419777341,
            "mixed_qty_pct": 0.2924080830760595,
            "instit_qty_pct": 0.4540228272055384,
            "ambiguous_qty_pct": 0.17072691552062869,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.17072691552062869,
            "retail_notional_pct": 0.0827971274317182,
            "mixed_notional_pct": 0.2923066302195753,
            "instit_notional_pct": 0.45445504818225807,
            "ambiguous_notional_pct": 0.17044119416644837,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.17044119416644837,
            "run_retail_pct": 0.8164409154600654,
            "run_mixed_pct": 0.1626965592402304,
            "run_instit_pct": 0.014012143858010275,
            "run_unclear_pct": 0.006850381441693912,
            "avg_trade_size": 1537.5634203480588,
            "avg_run_notional": 2145.83815973844,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.5229643468784058,
            "medium_confidence_pct": 0.2869375681145882,
            "low_confidence_pct": 0.020551144325081736,
            "na_confidence_pct": 0.16954694068192433,
            "avg_feature_coverage": 0.8675385333956094,
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
            "retail_pct": 0.3834869716601501,
            "mixed_pct": 0.32007191986072664,
            "instit_pct": 0.2543594280658695,
            "ambiguous_pct": 0.04181055395416536,
            "unobservable_pct": 0.0002711264590884443,
            "unclear_pct": 0.0420816804132538,
            "retail_qty_pct": 0.10821867399719567,
            "mixed_qty_pct": 0.21777827244410908,
            "instit_qty_pct": 0.6129238916205003,
            "ambiguous_qty_pct": 0.054156732660243935,
            "unobservable_qty_pct": 0.006922429277951059,
            "unclear_qty_pct": 0.061079161938194994,
            "retail_notional_pct": 0.10809886978704844,
            "mixed_notional_pct": 0.21732688813779802,
            "instit_notional_pct": 0.6135905013113908,
            "ambiguous_notional_pct": 0.054218984790846525,
            "unobservable_notional_pct": 0.006764755972916138,
            "unclear_notional_pct": 0.060983740763762666,
            "run_retail_pct": 0.7347221021695911,
            "run_mixed_pct": 0.23378569164721813,
            "run_instit_pct": 0.016480825193764946,
            "run_unclear_pct": 0.015011380989425765,
            "avg_trade_size": 6089.944383401353,
            "avg_run_notional": 12296.399069352005,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.3886535857319849,
            "medium_confidence_pct": 0.3280894344080445,
            "low_confidence_pct": 0.03445990722332671,
            "na_confidence_pct": 0.2487970726366439,
            "avg_feature_coverage": 0.8822067594433398,
            "observable_run_pct": 0.9997983115797966,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "AU8U",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.49352231913801947,
            "mixed_pct": 0.26712416623909696,
            "instit_pct": 0.19548486403283735,
            "ambiguous_pct": 0.04386865059004618,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.04386865059004618,
            "retail_qty_pct": 0.09242970102465728,
            "mixed_qty_pct": 0.26660389276189583,
            "instit_qty_pct": 0.5289120619473167,
            "ambiguous_qty_pct": 0.11205434426613016,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.11205434426613016,
            "retail_notional_pct": 0.09227509082050228,
            "mixed_notional_pct": 0.2669968230187258,
            "instit_notional_pct": 0.5271483369453699,
            "ambiguous_notional_pct": 0.11357974921540206,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.11357974921540206,
            "run_retail_pct": 0.797799174690509,
            "run_mixed_pct": 0.17320918421331077,
            "run_instit_pct": 0.021902444185800445,
            "run_unclear_pct": 0.007089196910379854,
            "avg_trade_size": 1435.9603001539251,
            "avg_run_notional": 2369.0078298592744,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.49677282827214053,
            "medium_confidence_pct": 0.29922759496349594,
            "low_confidence_pct": 0.023701195640672943,
            "na_confidence_pct": 0.18029838112369062,
            "avg_feature_coverage": 0.8702200825309488,
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
            "retail_pct": 0.26092089728453366,
            "mixed_pct": 0.1345926800472255,
            "instit_pct": 0.24203069657615112,
            "ambiguous_pct": 0.3624557260920897,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.3624557260920897,
            "retail_qty_pct": 0.07309476474486415,
            "mixed_qty_pct": 0.13548707753479125,
            "instit_qty_pct": 0.46192842942345924,
            "ambiguous_qty_pct": 0.32948972829688533,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.32948972829688533,
            "retail_notional_pct": 0.07345325661937577,
            "mixed_notional_pct": 0.13661901151912695,
            "instit_notional_pct": 0.4608990701506017,
            "ambiguous_notional_pct": 0.32902866171089556,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.32902866171089556,
            "run_retail_pct": 0.4649122807017544,
            "run_mixed_pct": 0.16374269005847952,
            "run_instit_pct": 0.1023391812865497,
            "run_unclear_pct": 0.26900584795321636,
            "avg_trade_size": 3630.223140495868,
            "avg_run_notional": 8990.640350877193,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.02631578947368421,
            "medium_confidence_pct": 0.11403508771929824,
            "low_confidence_pct": 0.4269005847953216,
            "na_confidence_pct": 0.4327485380116959,
            "avg_feature_coverage": 0.8627192982456139,
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
            "retail_pct": 0.5016085689413724,
            "mixed_pct": 0.33246281367094355,
            "instit_pct": 0.12122932515801824,
            "ambiguous_pct": 0.04456682184625866,
            "unobservable_pct": 0.00013247038340713827,
            "unclear_pct": 0.044699292229665795,
            "retail_qty_pct": 0.07542632652183023,
            "mixed_qty_pct": 0.24444615473153083,
            "instit_qty_pct": 0.4016252542299946,
            "ambiguous_qty_pct": 0.050712637729360494,
            "unobservable_qty_pct": 0.22778962678728384,
            "unclear_qty_pct": 0.27850226451664434,
            "retail_notional_pct": 0.07575914589568902,
            "mixed_notional_pct": 0.24488454466706738,
            "instit_notional_pct": 0.4032689396298843,
            "ambiguous_notional_pct": 0.05144750511742002,
            "unobservable_notional_pct": 0.22463986468993932,
            "unclear_notional_pct": 0.2760873698073594,
            "run_retail_pct": 0.775894367899444,
            "run_mixed_pct": 0.21132463137539279,
            "run_instit_pct": 0.005348078317621465,
            "run_unclear_pct": 0.007432922407541697,
            "avg_trade_size": 4292.39955698119,
            "avg_run_notional": 6853.365282511482,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.3872975586173556,
            "medium_confidence_pct": 0.35167391829828376,
            "low_confidence_pct": 0.04227096930142615,
            "na_confidence_pct": 0.2187575537829345,
            "avg_feature_coverage": 0.8825583152042541,
            "observable_run_pct": 0.9997884940778342,
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
            "retail_pct": 0.7301587301587301,
            "mixed_pct": 0.2585034013605442,
            "instit_pct": 0.011337868480725623,
            "ambiguous_pct": 0.0,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.0,
            "retail_qty_pct": 0.12569561115399558,
            "mixed_qty_pct": 0.7355643342566105,
            "instit_qty_pct": 0.13874005458939392,
            "ambiguous_qty_pct": 0.0,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.0,
            "retail_notional_pct": 0.12935538568292487,
            "mixed_notional_pct": 0.7368157763359017,
            "instit_notional_pct": 0.13382883798117345,
            "ambiguous_notional_pct": 0.0,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.0,
            "run_retail_pct": 0.8404255319148937,
            "run_mixed_pct": 0.15691489361702127,
            "run_instit_pct": 0.0026595744680851063,
            "run_unclear_pct": 0.0,
            "avg_trade_size": 1118.2625850340137,
            "avg_run_notional": 1311.5792553191488,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.6170212765957447,
            "medium_confidence_pct": 0.0,
            "low_confidence_pct": 0.22606382978723405,
            "na_confidence_pct": 0.15691489361702127,
            "avg_feature_coverage": 0.8515957446808509,
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
            "retail_pct": 0.5765145377621748,
            "mixed_pct": 0.25029255558556124,
            "instit_pct": 0.1281843550274552,
            "ambiguous_pct": 0.04500855162480871,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.04500855162480871,
            "retail_qty_pct": 0.0782944513237178,
            "mixed_qty_pct": 0.3019798935034995,
            "instit_qty_pct": 0.4702093290078602,
            "ambiguous_qty_pct": 0.14951632616492247,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.14951632616492247,
            "retail_notional_pct": 0.07824403162496636,
            "mixed_notional_pct": 0.30251320956433725,
            "instit_notional_pct": 0.47008386157298543,
            "ambiguous_notional_pct": 0.14915889723771095,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.14915889723771095,
            "run_retail_pct": 0.8214193548387096,
            "run_mixed_pct": 0.15593548387096773,
            "run_instit_pct": 0.015225806451612903,
            "run_unclear_pct": 0.007419354838709678,
            "avg_trade_size": 2249.040935277703,
            "avg_run_notional": 3223.818806451613,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.5236129032258064,
            "medium_confidence_pct": 0.29116129032258065,
            "low_confidence_pct": 0.021870967741935483,
            "na_confidence_pct": 0.16335483870967743,
            "avg_feature_coverage": 0.8653580645161288,
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
            "retail_pct": 0.3740820529817002,
            "mixed_pct": 0.3379276058805426,
            "instit_pct": 0.2402784024999408,
            "ambiguous_pct": 0.0473757723538742,
            "unobservable_pct": 0.00033616628394214155,
            "unclear_pct": 0.04771193863781634,
            "retail_qty_pct": 0.0989898168531767,
            "mixed_qty_pct": 0.2244350278734213,
            "instit_qty_pct": 0.6155049440271041,
            "ambiguous_qty_pct": 0.05185748232201546,
            "unobservable_qty_pct": 0.009212728924282414,
            "unclear_qty_pct": 0.06107021124629787,
            "retail_notional_pct": 0.09892307093954021,
            "mixed_notional_pct": 0.22431204200022428,
            "instit_notional_pct": 0.6155838502661968,
            "ambiguous_notional_pct": 0.05203444658506625,
            "unobservable_notional_pct": 0.009146590208972525,
            "unclear_notional_pct": 0.06118103679403877,
            "run_retail_pct": 0.7211569710757231,
            "run_mixed_pct": 0.24694603223154715,
            "run_instit_pct": 0.01639297252862796,
            "run_unclear_pct": 0.01550402416410178,
            "avg_trade_size": 6551.031293056509,
            "avg_run_notional": 13225.35858313101,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.3169722227532547,
            "medium_confidence_pct": 0.3693341489992162,
            "low_confidence_pct": 0.05124357185188017,
            "na_confidence_pct": 0.26245005639564895,
            "avg_feature_coverage": 0.8857376359708652,
            "observable_run_pct": 0.9996941252939264,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "AU8U",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.47294549511453404,
            "mixed_pct": 0.2805319129793245,
            "instit_pct": 0.20177064401777842,
            "ambiguous_pct": 0.04475194788836306,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.04475194788836306,
            "retail_qty_pct": 0.10213817945913829,
            "mixed_qty_pct": 0.27096288178663375,
            "instit_qty_pct": 0.5491937396882273,
            "ambiguous_qty_pct": 0.07770519906600065,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.07770519906600065,
            "retail_notional_pct": 0.10294342471578952,
            "mixed_notional_pct": 0.27142106850269715,
            "instit_notional_pct": 0.5484595355989914,
            "ambiguous_notional_pct": 0.07717597118252197,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.07717597118252197,
            "run_retail_pct": 0.7860314523589269,
            "run_mixed_pct": 0.18652482269503545,
            "run_instit_pct": 0.019642306506321306,
            "run_unclear_pct": 0.007801418439716312,
            "avg_trade_size": 1666.8946790707719,
            "avg_run_notional": 2856.4396546407647,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.4650323774283071,
            "medium_confidence_pct": 0.3170212765957447,
            "low_confidence_pct": 0.023620104841196424,
            "na_confidence_pct": 0.19432624113475178,
            "avg_feature_coverage": 0.8723805118717235,
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
            "retail_pct": 0.46918831755563895,
            "mixed_pct": 0.3268623934831867,
            "instit_pct": 0.15725565425302696,
            "ambiguous_pct": 0.04642951471426387,
            "unobservable_pct": 0.000264119993883537,
            "unclear_pct": 0.046693634708147407,
            "retail_qty_pct": 0.08387631459808152,
            "mixed_qty_pct": 0.23240860206404307,
            "instit_qty_pct": 0.538762373942151,
            "ambiguous_qty_pct": 0.04651056784553272,
            "unobservable_qty_pct": 0.0984421415501917,
            "unclear_qty_pct": 0.1449527093957244,
            "retail_notional_pct": 0.08352649944614877,
            "mixed_notional_pct": 0.2303128613166915,
            "instit_notional_pct": 0.5466516844547162,
            "ambiguous_notional_pct": 0.04651978733870669,
            "unobservable_notional_pct": 0.09298916744373675,
            "unclear_notional_pct": 0.13950895478244343,
            "run_retail_pct": 0.7660889631949513,
            "run_mixed_pct": 0.21739232816068949,
            "run_instit_pct": 0.0075234888266183155,
            "run_unclear_pct": 0.008995219817740834,
            "avg_trade_size": 4370.662028511058,
            "avg_run_notional": 7403.685552193467,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.37582122589304634,
            "medium_confidence_pct": 0.35455765653330823,
            "low_confidence_pct": 0.043233569595215106,
            "na_confidence_pct": 0.2263875479784303,
            "avg_feature_coverage": 0.8838786587232437,
            "observable_run_pct": 0.9995996891704146,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "ODBU",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.3555662188099808,
            "mixed_pct": 0.15738963531669867,
            "instit_pct": 0.1952975047984645,
            "ambiguous_pct": 0.29174664107485604,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.29174664107485604,
            "retail_qty_pct": 0.08375300121051611,
            "mixed_qty_pct": 0.15371548189910583,
            "instit_qty_pct": 0.4065461500906215,
            "ambiguous_qty_pct": 0.35598536679975656,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.35598536679975656,
            "retail_notional_pct": 0.08471234798403364,
            "mixed_notional_pct": 0.15508460338504765,
            "instit_notional_pct": 0.40308937798887867,
            "ambiguous_notional_pct": 0.35711367064204,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.35711367064204,
            "run_retail_pct": 0.5639931740614335,
            "run_mixed_pct": 0.17491467576791808,
            "run_instit_pct": 0.07508532423208192,
            "run_unclear_pct": 0.18600682593856654,
            "avg_trade_size": 3787.2322456813818,
            "avg_run_notional": 6734.293515358362,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.17918088737201365,
            "medium_confidence_pct": 0.12713310580204779,
            "low_confidence_pct": 0.33276450511945393,
            "na_confidence_pct": 0.3609215017064846,
            "avg_feature_coverage": 0.8480802047781569,
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
            "retail_pct": 0.6254480286738351,
            "mixed_pct": 0.23745519713261648,
            "instit_pct": 0.12096774193548387,
            "ambiguous_pct": 0.016129032258064516,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.016129032258064516,
            "retail_qty_pct": 0.12140698883827537,
            "mixed_qty_pct": 0.4964746429500082,
            "instit_qty_pct": 0.354622509317488,
            "ambiguous_qty_pct": 0.027495858894228453,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.027495858894228453,
            "retail_notional_pct": 0.12080302301447109,
            "mixed_notional_pct": 0.4983703509050633,
            "instit_notional_pct": 0.3537441173388637,
            "ambiguous_notional_pct": 0.027082508741601903,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.027082508741601903,
            "run_retail_pct": 0.8177991581479255,
            "run_mixed_pct": 0.15694527961515334,
            "run_instit_pct": 0.016235718580877932,
            "run_unclear_pct": 0.009019843656043296,
            "avg_trade_size": 2691.087724014337,
            "avg_run_notional": 3611.850751653638,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.4792543595911004,
            "medium_confidence_pct": 0.13770294648226097,
            "low_confidence_pct": 0.21707757065544198,
            "na_confidence_pct": 0.16596512327119664,
            "avg_feature_coverage": 0.8554119061936258,
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
            "retail_pct": 0.6004426996324758,
            "mixed_pct": 0.24801620447711326,
            "instit_pct": 0.11000668225860341,
            "ambiguous_pct": 0.04153441363180755,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.04153441363180755,
            "retail_qty_pct": 0.09457942528306117,
            "mixed_qty_pct": 0.3027143978177198,
            "instit_qty_pct": 0.48511042188259035,
            "ambiguous_qty_pct": 0.11759575501662868,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.11759575501662868,
            "retail_notional_pct": 0.09466947264071349,
            "mixed_notional_pct": 0.3029264546218526,
            "instit_notional_pct": 0.48524763718938535,
            "ambiguous_notional_pct": 0.11715643554804857,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.11715643554804857,
            "run_retail_pct": 0.8269599581565642,
            "run_mixed_pct": 0.15333875748241996,
            "run_instit_pct": 0.013424768989364793,
            "run_unclear_pct": 0.006276515371651073,
            "avg_trade_size": 1883.1980349983294,
            "avg_run_notional": 2620.5203550880456,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.49843087115708723,
            "medium_confidence_pct": 0.3130993200441681,
            "low_confidence_pct": 0.02885453594467368,
            "na_confidence_pct": 0.159615272854071,
            "avg_feature_coverage": 0.8653382344394722,
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
            "retail_pct": 0.36566555190644023,
            "mixed_pct": 0.33163449214995194,
            "instit_pct": 0.23172911326497916,
            "ambiguous_pct": 0.0706354133290612,
            "unobservable_pct": 0.0003354293495674463,
            "unclear_pct": 0.07097084267862865,
            "retail_qty_pct": 0.10012850243489226,
            "mixed_qty_pct": 0.22518578808816725,
            "instit_qty_pct": 0.613949855675553,
            "ambiguous_qty_pct": 0.047385709125515915,
            "unobservable_qty_pct": 0.013350144675871513,
            "unclear_qty_pct": 0.06073585380138743,
            "retail_notional_pct": 0.1000810917010023,
            "mixed_notional_pct": 0.22514265799821034,
            "instit_notional_pct": 0.6140869511699807,
            "ambiguous_notional_pct": 0.04738479680771924,
            "unobservable_notional_pct": 0.013304502323087521,
            "unclear_notional_pct": 0.060689299130806756,
            "run_retail_pct": 0.7215618639195761,
            "run_mixed_pct": 0.24618157522646406,
            "run_instit_pct": 0.015211547724482978,
            "run_unclear_pct": 0.01704501312947684,
            "avg_trade_size": 5653.186056277034,
            "avg_run_notional": 11696.784139229427,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.31148194761675396,
            "medium_confidence_pct": 0.37175841762612843,
            "low_confidence_pct": 0.05353304640117673,
            "na_confidence_pct": 0.26322658835594087,
            "avg_feature_coverage": 0.8864857025953374,
            "observable_run_pct": 0.9996011953780098,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "JYEU",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.4497983228544116,
            "mixed_pct": 0.310178672739001,
            "instit_pct": 0.16224324051262523,
            "ambiguous_pct": 0.07751552408856696,
            "unobservable_pct": 0.00026423980539515507,
            "unclear_pct": 0.07777976389396211,
            "retail_qty_pct": 0.0833473849870121,
            "mixed_qty_pct": 0.21813546026712277,
            "instit_qty_pct": 0.5662010458090391,
            "ambiguous_qty_pct": 0.06595932495903384,
            "unobservable_qty_pct": 0.06635678397779217,
            "unclear_qty_pct": 0.132316108936826,
            "retail_notional_pct": 0.0831408795734681,
            "mixed_notional_pct": 0.21638708410779853,
            "instit_notional_pct": 0.5718321919725265,
            "ambiguous_notional_pct": 0.06682746106387727,
            "unobservable_notional_pct": 0.061812383282329506,
            "unclear_notional_pct": 0.1286398443462068,
            "run_retail_pct": 0.7668490425267347,
            "run_mixed_pct": 0.21246096880267484,
            "run_instit_pct": 0.00880101688358341,
            "run_unclear_pct": 0.011888971787007102,
            "avg_trade_size": 4051.9269609702264,
            "avg_run_notional": 7203.369725538147,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.3803365663599436,
            "medium_confidence_pct": 0.3539058830031225,
            "low_confidence_pct": 0.04140761004725193,
            "na_confidence_pct": 0.22434994058968194,
            "avg_feature_coverage": 0.8832542347122052,
            "observable_run_pct": 0.9995786012324187,
            "thresholds": {
              "retail_max": 10000.0,
              "instit_min": 50000.0
            }
          },
          {
            "ticker": "AU8U",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.4908333072173995,
            "mixed_pct": 0.26860760287066343,
            "instit_pct": 0.19838707992520396,
            "ambiguous_pct": 0.04217200998673311,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.04217200998673311,
            "retail_qty_pct": 0.11555930970287027,
            "mixed_qty_pct": 0.2682295204223689,
            "instit_qty_pct": 0.5386603225021219,
            "ambiguous_qty_pct": 0.07755084737263883,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.07755084737263883,
            "retail_notional_pct": 0.11685988758814624,
            "mixed_notional_pct": 0.2681090527707334,
            "instit_notional_pct": 0.5378153184682808,
            "ambiguous_notional_pct": 0.07721574117283954,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.07721574117283954,
            "run_retail_pct": 0.7958998675127258,
            "run_mixed_pct": 0.17627780489505612,
            "run_instit_pct": 0.019820793529042605,
            "run_unclear_pct": 0.008001534063175511,
            "avg_trade_size": 1690.0626625716882,
            "avg_run_notional": 2820.316374381145,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.46381005508681405,
            "medium_confidence_pct": 0.32806289659019594,
            "low_confidence_pct": 0.023847709364758385,
            "na_confidence_pct": 0.18427933895823165,
            "avg_feature_coverage": 0.8701720591311622,
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
            "retail_pct": 0.5319394138952914,
            "mixed_pct": 0.21666117879486335,
            "instit_pct": 0.17286796180441225,
            "ambiguous_pct": 0.07853144550543299,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.07853144550543299,
            "retail_qty_pct": 0.11768533024342853,
            "mixed_qty_pct": 0.4322013798159063,
            "instit_qty_pct": 0.3840224333394422,
            "ambiguous_qty_pct": 0.06609085660122295,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.06609085660122295,
            "retail_notional_pct": 0.11407762369552336,
            "mixed_notional_pct": 0.4082180919493362,
            "instit_notional_pct": 0.3951896485959216,
            "ambiguous_notional_pct": 0.0825146357592189,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.0825146357592189,
            "run_retail_pct": 0.7718120805369127,
            "run_mixed_pct": 0.16380810340541885,
            "run_instit_pct": 0.030077056922694505,
            "run_unclear_pct": 0.0343027591349739,
            "avg_trade_size": 1819.5429041817583,
            "avg_run_notional": 2747.179617201093,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.3658960974397216,
            "medium_confidence_pct": 0.21948794432015908,
            "low_confidence_pct": 0.21650509569972656,
            "na_confidence_pct": 0.19811086254039273,
            "avg_feature_coverage": 0.8551081282624904,
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
            "retail_pct": 0.4145780639227409,
            "mixed_pct": 0.1919981604966659,
            "instit_pct": 0.14532076339388364,
            "ambiguous_pct": 0.24810301218670958,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.24810301218670958,
            "retail_qty_pct": 0.09317101431481858,
            "mixed_qty_pct": 0.1711179063762522,
            "instit_qty_pct": 0.3764018431623817,
            "ambiguous_qty_pct": 0.35930923614654753,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.35930923614654753,
            "retail_notional_pct": 0.09351494047379355,
            "mixed_notional_pct": 0.17149256100074142,
            "instit_notional_pct": 0.37519730787816197,
            "ambiguous_notional_pct": 0.3597951906473031,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.3597951906473031,
            "run_retail_pct": 0.6416988416988417,
            "run_mixed_pct": 0.1637065637065637,
            "run_instit_pct": 0.055212355212355214,
            "run_unclear_pct": 0.13938223938223937,
            "avg_trade_size": 3106.3104161876295,
            "avg_run_notional": 5215.962934362934,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.22046332046332046,
            "medium_confidence_pct": 0.18803088803088802,
            "low_confidence_pct": 0.28841698841698843,
            "na_confidence_pct": 0.3030888030888031,
            "avg_feature_coverage": 0.8519111969111969,
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
            "retail_pct": 0.14090368608799048,
            "mixed_pct": 0.19560047562425684,
            "instit_pct": 0.21284185493460167,
            "ambiguous_pct": 0.44351961950059454,
            "unobservable_pct": 0.007134363852556481,
            "unclear_pct": 0.45065398335315104,
            "retail_qty_pct": 0.00815060532201032,
            "mixed_qty_pct": 0.015720619579987025,
            "instit_qty_pct": 0.0734894304513314,
            "ambiguous_qty_pct": 0.050533752996463975,
            "unobservable_qty_pct": 0.8521055916502073,
            "unclear_qty_pct": 0.9026393446466713,
            "retail_notional_pct": 0.008199915184880259,
            "mixed_notional_pct": 0.015629894844731707,
            "instit_notional_pct": 0.07092649111865114,
            "ambiguous_notional_pct": 0.0505081778151837,
            "unobservable_notional_pct": 0.8547355210365531,
            "unclear_notional_pct": 0.9052436988517368,
            "run_retail_pct": 0.48764044943820223,
            "run_mixed_pct": 0.1797752808988764,
            "run_instit_pct": 0.0853932584269663,
            "run_unclear_pct": 0.24719101123595505,
            "avg_trade_size": 1167.5391200951249,
            "avg_run_notional": 4413.035505617978,
            "dominant_bucket": "RETAIL",
            "dominant_label": "Retail-led",
            "high_confidence_pct": 0.20674157303370785,
            "medium_confidence_pct": 0.1707865168539326,
            "low_confidence_pct": 0.19550561797752808,
            "na_confidence_pct": 0.42696629213483145,
            "avg_feature_coverage": 0.8823595505617976,
            "observable_run_pct": 0.9887640449438202,
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
          "trade_id": "BMLL-286",
          "timestamp": "2026-04-20T08:59:53.384600",
          "price": 0.66,
          "size": 100.0,
          "notional": 66.0,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 57636,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-285",
          "timestamp": "2026-04-20T08:59:53.142100",
          "price": 0.665,
          "size": 100.0,
          "notional": 66.5,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 57635,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-284",
          "timestamp": "2026-04-20T08:59:31.051200",
          "price": 0.66,
          "size": 200.0,
          "notional": 132.0,
          "bucket": "MIXED",
          "confidence": "NA",
          "run_id": 57634,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-283",
          "timestamp": "2026-04-20T08:59:30.929400",
          "price": 0.66,
          "size": 200.0,
          "notional": 132.0,
          "bucket": "MIXED",
          "confidence": "NA",
          "run_id": 57634,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-282",
          "timestamp": "2026-04-20T08:59:30.384200",
          "price": 0.66,
          "size": 200.0,
          "notional": 132.0,
          "bucket": "MIXED",
          "confidence": "NA",
          "run_id": 57634,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-281",
          "timestamp": "2026-04-20T08:59:19.082400",
          "price": 0.66,
          "size": 200.0,
          "notional": 132.0,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 57633,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-280",
          "timestamp": "2026-04-20T08:59:09.088600",
          "price": 0.66,
          "size": 200.0,
          "notional": 132.0,
          "bucket": "MIXED",
          "confidence": "NA",
          "run_id": 57632,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "ADAPTIVE"
        },
        {
          "trade_id": "BMLL-279",
          "timestamp": "2026-04-20T08:59:04.153500",
          "price": 0.66,
          "size": 100.0,
          "notional": 66.0,
          "bucket": "MIXED",
          "confidence": "NA",
          "run_id": 57632,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "ADAPTIVE"
        },
        {
          "trade_id": "BMLL-278",
          "timestamp": "2026-04-20T08:59:00.079600",
          "price": 0.66,
          "size": 200.0,
          "notional": 132.0,
          "bucket": "MIXED",
          "confidence": "NA",
          "run_id": 57632,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "ADAPTIVE"
        },
        {
          "trade_id": "BMLL-277",
          "timestamp": "2026-04-20T08:58:49.679800",
          "price": 0.66,
          "size": 200.0,
          "notional": 132.0,
          "bucket": "MIXED",
          "confidence": "NA",
          "run_id": 57631,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-276",
          "timestamp": "2026-04-20T08:58:49.558900",
          "price": 0.66,
          "size": 200.0,
          "notional": 132.0,
          "bucket": "MIXED",
          "confidence": "NA",
          "run_id": 57631,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-275",
          "timestamp": "2026-04-20T08:58:34.413700",
          "price": 0.66,
          "size": 200.0,
          "notional": 132.0,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 57630,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-274",
          "timestamp": "2026-04-20T08:58:26.495300",
          "price": 0.665,
          "size": 100.0,
          "notional": 66.5,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 57629,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-273",
          "timestamp": "2026-04-20T08:58:07.144000",
          "price": 0.66,
          "size": 500.0,
          "notional": 330.0,
          "bucket": "RETAIL",
          "confidence": "MEDIUM",
          "run_id": 57628,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-272",
          "timestamp": "2026-04-20T08:56:59.607800",
          "price": 0.665,
          "size": 100.0,
          "notional": 66.5,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 57627,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-271",
          "timestamp": "2026-04-20T08:56:06.867400",
          "price": 0.665,
          "size": 100.0,
          "notional": 66.5,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 57626,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-270",
          "timestamp": "2026-04-20T08:55:12.635200",
          "price": 0.665,
          "size": 100.0,
          "notional": 66.5,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 57625,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-269",
          "timestamp": "2026-04-20T08:54:36.936100",
          "price": 0.665,
          "size": 100.0,
          "notional": 66.5,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 57624,
          "d1": "SINGLE_FILL",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-268",
          "timestamp": "2026-04-20T08:54:24.842200",
          "price": 0.665,
          "size": 3600.0,
          "notional": 2394.0,
          "bucket": "MIXED",
          "confidence": "NA",
          "run_id": 57623,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-267",
          "timestamp": "2026-04-20T08:54:24.842200",
          "price": 0.665,
          "size": 200.0,
          "notional": 133.0,
          "bucket": "MIXED",
          "confidence": "NA",
          "run_id": 57623,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-266",
          "timestamp": "2026-04-20T08:54:24.842100",
          "price": 0.665,
          "size": 200.0,
          "notional": 133.0,
          "bucket": "MIXED",
          "confidence": "NA",
          "run_id": 57623,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-265",
          "timestamp": "2026-04-20T08:54:24.842100",
          "price": 0.665,
          "size": 1100.0,
          "notional": 731.5,
          "bucket": "MIXED",
          "confidence": "NA",
          "run_id": 57623,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-264",
          "timestamp": "2026-04-20T08:54:24.842100",
          "price": 0.665,
          "size": 100.0,
          "notional": 66.5,
          "bucket": "MIXED",
          "confidence": "NA",
          "run_id": 57623,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-263",
          "timestamp": "2026-04-20T08:54:24.842100",
          "price": 0.665,
          "size": 200.0,
          "notional": 133.0,
          "bucket": "MIXED",
          "confidence": "NA",
          "run_id": 57623,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-262",
          "timestamp": "2026-04-20T08:54:24.842100",
          "price": 0.665,
          "size": 200.0,
          "notional": 133.0,
          "bucket": "MIXED",
          "confidence": "NA",
          "run_id": 57623,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-261",
          "timestamp": "2026-04-20T08:54:24.842000",
          "price": 0.665,
          "size": 200.0,
          "notional": 133.0,
          "bucket": "MIXED",
          "confidence": "NA",
          "run_id": 57623,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-260",
          "timestamp": "2026-04-20T08:54:24.842000",
          "price": 0.665,
          "size": 200.0,
          "notional": 133.0,
          "bucket": "MIXED",
          "confidence": "NA",
          "run_id": 57623,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-259",
          "timestamp": "2026-04-20T08:54:24.842000",
          "price": 0.665,
          "size": 200.0,
          "notional": 133.0,
          "bucket": "MIXED",
          "confidence": "NA",
          "run_id": 57623,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-258",
          "timestamp": "2026-04-20T08:54:24.842000",
          "price": 0.665,
          "size": 100.0,
          "notional": 66.5,
          "bucket": "MIXED",
          "confidence": "NA",
          "run_id": 57623,
          "d1": "MULTI_FILL_SINGLE_PRICE",
          "d2": "NEUTRAL_OR_REVERSING",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "BMLL-257",
          "timestamp": "2026-04-20T08:54:24.842000",
          "price": 0.665,
          "size": 100.0,
          "notional": 66.5,
          "bucket": "MIXED",
          "confidence": "NA",
          "run_id": 57623,
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
      "total_trades": 47887,
      "price_moving_trades": 11605,
      "pct_price_moving": 24.23413452502767,
      "all_movers": {
        "count": 11605,
        "avg_size": 1484.2574321413183,
        "median_size": 202.5,
        "retail_count": 9386,
        "mixed_count": 1942,
        "institutional_count": 218,
        "ambiguous_count": 59,
        "unobservable_count": 0,
        "retail_pct": 80.87893149504524,
        "mixed_pct": 16.734166307626023,
        "instit_pct": 1.8785006462731582,
        "unclear_pct": 0.5084015510555795
      },
      "positive_movers": {
        "count": 5797,
        "avg_size": 1445.675953079179,
        "median_size": 139.0,
        "retail_count": 4668,
        "mixed_count": 1001,
        "institutional_count": 104,
        "ambiguous_count": 24,
        "unobservable_count": 0,
        "retail_pct": 80.5244091771606,
        "mixed_pct": 17.267552182163186,
        "instit_pct": 1.794031395549422,
        "unclear_pct": 0.4140072451267897
      },
      "negative_movers": {
        "count": 5808,
        "avg_size": 1522.7658402203856,
        "median_size": 202.5,
        "retail_count": 4718,
        "mixed_count": 941,
        "institutional_count": 114,
        "ambiguous_count": 35,
        "unobservable_count": 0,
        "retail_pct": 81.23278236914601,
        "mixed_pct": 16.201790633608816,
        "instit_pct": 1.962809917355372,
        "unclear_pct": 0.6026170798898072
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
            "avg_short_ratio": 0.09980247934958895,
            "max_short_ratio": 0.36836158192090396,
            "interpretation": "Moderate short interest"
          }
        },
        "3M": {
          "stats": {
            "valid": true,
            "avg_short_ratio": 0.06612077914203622,
            "max_short_ratio": 0.36836158192090396,
            "interpretation": "Moderate short interest"
          }
        },
        "6M": {
          "stats": {
            "valid": true,
            "avg_short_ratio": 0.06345966894486449,
            "max_short_ratio": 0.36836158192090396,
            "interpretation": "Moderate short interest"
          }
        }
      },
      "correlation": {
        "valid": true,
        "correlation": -0.149441326837329,
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
            "avg_short_ratio": 0.03287236744220145
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
            "avg_short_ratio": 0.03287236744220145,
            "change_pct": null
          },
          {
            "month": "2026-03",
            "avg_short_ratio": 0.1453584600680963,
            "change_pct": 342.19042125175787
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
        "interpretation": "Shorts covering significantly (-77% MoM)"
      },
      "short_series": {
        "valid": true,
        "rows": [
          {
            "date": "2026-04-20",
            "short_ratio": 0.007475209763539283,
            "short_vol": 4900,
            "total_vol": 655500,
            "close": 0.665,
            "return": 0.0
          },
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
          }
        ]
      },
      "peer_comparison": [
        {
          "ticker": "CRPU",
          "avg_short_ratio": 0.06612077914203622,
          "max_short_ratio": 0.36836158192090396,
          "is_target": true
        },
        {
          "ticker": "BMGU",
          "avg_short_ratio": 1.981924845409862e-05,
          "max_short_ratio": 0.007352941176470588,
          "is_target": false
        },
        {
          "ticker": "ODBU",
          "avg_short_ratio": 0.0008344306810035072,
          "max_short_ratio": 0.1091703056768559,
          "is_target": false
        },
        {
          "ticker": "D5IU",
          "avg_short_ratio": 0.0014677085570263474,
          "max_short_ratio": 0.2702329197017246,
          "is_target": false
        },
        {
          "ticker": "AU8U",
          "avg_short_ratio": 0.06244492961637948,
          "max_short_ratio": 0.583009889700239,
          "is_target": false
        },
        {
          "ticker": "AJBU",
          "avg_short_ratio": 0.08179252913822299,
          "max_short_ratio": 0.4312404120096428,
          "is_target": false
        },
        {
          "ticker": "JYEU",
          "avg_short_ratio": 0.1046100824757887,
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
          "opening": 0.009011067754685824,
          "continuous": 0.9295914875438955,
          "closing": 0.06139744470141867,
          "auctions": 0.0704085124561045,
          "other": 0.0
        },
        "1M": {
          "opening": 0.06190990499000798,
          "continuous": 0.8657400014891112,
          "closing": 0.06209907884654703,
          "auctions": 0.1342599985108888,
          "other": 0.0
        },
        "3M": {
          "opening": 0.05000908952317574,
          "continuous": 0.8531824623788045,
          "closing": 0.08359823614295209,
          "auctions": 0.14681753762119554,
          "other": 0.0
        },
        "6M": {
          "opening": 0.03700733583906387,
          "continuous": 0.8724427917655344,
          "closing": 0.07882580749896356,
          "auctions": 0.12755720823446573,
          "other": 0.0
        }
      },
      "hhi": {
        "1D": 0.1618221214150909,
        "1M": 0.21384638804596792,
        "3M": 0.2404739576937997,
        "6M": 0.22799844845512704
      },
      "profile_buckets": [
        {
          "time": "08:30",
          "avg_share": 0.0185
        },
        {
          "time": "09:00",
          "avg_share": 0.0942
        },
        {
          "time": "09:30",
          "avg_share": 0.0383
        },
        {
          "time": "10:00",
          "avg_share": 0.0435
        },
        {
          "time": "10:30",
          "avg_share": 0.0355
        },
        {
          "time": "11:00",
          "avg_share": 0.0316
        },
        {
          "time": "11:30",
          "avg_share": 0.0415
        },
        {
          "time": "12:00",
          "avg_share": 0.2341
        },
        {
          "time": "12:30",
          "avg_share": 0.0093
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
          "avg_share": 0.0368
        },
        {
          "time": "14:30",
          "avg_share": 0.0335
        },
        {
          "time": "15:00",
          "avg_share": 0.0279
        },
        {
          "time": "15:30",
          "avg_share": 0.0511
        },
        {
          "time": "16:00",
          "avg_share": 0.0448
        },
        {
          "time": "16:30",
          "avg_share": 0.1047
        },
        {
          "time": "17:00",
          "avg_share": 0.1137
        }
      ],
      "peers_hhi_rows": [
        {
          "ticker": "CRPU",
          "auctions_pct": 11.662661931134691,
          "hhi": 0.22927187254071413,
          "interp": {
            "text": "Moderate",
            "cls": "bg-amber-500/20 text-amber-400",
            "you": true
          }
        },
        {
          "ticker": "ODBU",
          "auctions_pct": 7.1614728048733225,
          "hhi": 0.39323330706662946,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "D5IU",
          "auctions_pct": 12.981506762822839,
          "hhi": 0.41447246242982855,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "BMGU",
          "auctions_pct": 0.8154111959246981,
          "hhi": 0.750486769456963,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "AU8U",
          "auctions_pct": 13.371689086511479,
          "hhi": 0.17362322175622363,
          "interp": {
            "text": "Moderate",
            "cls": "bg-amber-500/20 text-amber-400"
          }
        },
        {
          "ticker": "JYEU",
          "auctions_pct": 13.41664442566001,
          "hhi": 0.20926273118441688,
          "interp": {
            "text": "Moderate",
            "cls": "bg-amber-500/20 text-amber-400"
          }
        },
        {
          "ticker": "AJBU",
          "auctions_pct": 20.46545320623712,
          "hhi": 0.1471830435878588,
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
