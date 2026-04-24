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
      "ticker": "700",
      "name": "TENCENT",
      "marketCap": 4603864007362.0,
      "sector": "Digital Solution Services",
      "industry": "Information Technology - Software & Services"
    },
    {
      "ticker": "2513",
      "name": "KNOWLEDGE ATLAS",
      "marketCap": 207150470280.0,
      "sector": "Digital Solution Services",
      "industry": "Information Technology - Software & Services"
    },
    {
      "ticker": "100",
      "name": "MINIMAX-W",
      "marketCap": 232067708452.0,
      "sector": "Digital Solution Services",
      "industry": "Information Technology - Software & Services"
    },
    {
      "ticker": "3317",
      "name": "XUNCE",
      "marketCap": 82824406860.0,
      "sector": "Digital Solution Services",
      "industry": "Information Technology - Software & Services"
    },
    {
      "ticker": "20",
      "name": "SENSETIME-W",
      "marketCap": 80227529190.26999,
      "sector": "Digital Solution Services",
      "industry": "Information Technology - Software & Services"
    },
    {
      "ticker": "9660",
      "name": "HORIZONROBOT-W",
      "marketCap": 89907376373.7,
      "sector": "Digital Solution Services",
      "industry": "Information Technology - Software & Services"
    },
    {
      "ticker": "9880",
      "name": "UBTECH ROBOTICS",
      "marketCap": 47124884624.4,
      "sector": "Digital Solution Services",
      "industry": "Information Technology - Software & Services"
    },
    {
      "ticker": "6636",
      "name": "EXTREME VISION",
      "marketCap": 11538595177.2,
      "sector": "Digital Solution Services",
      "industry": "Information Technology - Software & Services"
    },
    {
      "ticker": "1384",
      "name": "DEEPEXI TECH",
      "marketCap": 14567787200.0,
      "sector": "Digital Solution Services",
      "industry": "Information Technology - Software & Services"
    }
  ]
};

export const REPORT_DATA: ReportData = {
  "meta": {
    "market": "XHKG",
    "currency": "HKD",
    "ticker": "700",
    "company": "TENCENT",
    "asof_date": "2026-04-01",
    "industry": "Information Technology - Software & Services",
    "sector": "Digital Solution Services",
    "market_cap_display": "4603.9B",
    "market_cap_category": "large",
    "universe_total": 2580,
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
          "score_pca": 98.56589147286822,
          "score_pca_percentile": 98.56589147286822,
          "rank_pca": 38,
          "total": 2580,
          "adv_notional_sgd": 10561587990.2,
          "adv_volume_shares": 21267797.0,
          "free_float_shares": 6214887240.0,
          "turnover_ratio": 0.0034220728677291337,
          "votes": 56213.0,
          "trades": 56213.0,
          "spread_pct": 0.0005061340649462837,
          "spread_ticks": 1.1163110464828718,
          "amihud": 2.4648810269247015e-12,
          "volatility": 0.21037914693635604
        },
        "pca": {
          "valid": true,
          "window_days": 1,
          "variance_explained": 0.5501754766662059,
          "loadings": {
            "log_adv": 0.5353295723484985,
            "log_trades": 0.495199143582267,
            "log_turnover": 0.49882746008020484,
            "neg_spread": 0.41014669127810727,
            "neg_amihud": 0.05174363027878738,
            "neg_vol": -0.22016700614235374
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
          "peer_median_adv": 1084819826.17,
          "peer_median_score_pca": 98.95348837209303,
          "peer_median_trades": 16792.5,
          "peer_median_volatility": 1.105491484099714,
          "peer_median_spread_pct": 0.0026253410009644436,
          "peer_median_spread_ticks": 1.6537037420102187,
          "peer_median_amihud": 6.932810259609937e-11,
          "peer_median_turnover_ratio": 0.0286459822093332,
          "target_vs_peer": {
            "score_pca_delta": -0.39,
            "adv_delta_pct": 873.6,
            "trades_delta_pct": 234.75,
            "volatility_delta_pct": 80.97,
            "spread_pct_delta_pct": 80.72,
            "spread_ticks_delta_pct": -32.5,
            "amihud_delta_pct": 96.44,
            "turnover_ratio_delta_pct": -88.05
          }
        },
        "peer_liquidity": [
          {
            "ticker": "700",
            "score_pca": 98.56589147286822,
            "rank_pca": 38,
            "adv": 10561587990.2,
            "trades": 56213.0,
            "volatility": 0.21037914693635604,
            "spread_pct": 0.0005061340649462837,
            "spread_ticks": 1.1163110464828718,
            "amihud": 2.4648810269247015e-12,
            "turnover_ratio": 0.0034220728677291337,
            "is_target": true
          },
          {
            "ticker": "2513",
            "score_pca": 99.8062015503876,
            "rank_pca": 6,
            "adv": 5181462000.0,
            "trades": 28951.0,
            "volatility": 1.5470014958460065,
            "spread_pct": 0.0025975238114158516,
            "spread_ticks": 4.590734869635168,
            "amihud": 6.164174828491235e-11,
            "turnover_ratio": 0.03786470429232611,
            "is_target": false
          },
          {
            "ticker": "100",
            "score_pca": 97.86821705426357,
            "rank_pca": 56,
            "adv": 1823009200.0,
            "trades": 7027.0,
            "volatility": 1.025618073273914,
            "spread_pct": 0.0014164284137557705,
            "spread_ticks": 1.5135090518901668,
            "amihud": 7.701445690728639e-11,
            "turnover_ratio": 0.01369506627636633,
            "is_target": false
          },
          {
            "ticker": "3317",
            "score_pca": 99.49612403100775,
            "rank_pca": 14,
            "adv": 1337746880.0,
            "trades": 19369.0,
            "volatility": 1.325991089353861,
            "spread_pct": 0.002653158190513036,
            "spread_ticks": 3.004216713519039,
            "amihud": 1.31013495125111e-11,
            "turnover_ratio": 0.05165034397643142,
            "is_target": false
          },
          {
            "ticker": "20",
            "score_pca": 95.11627906976744,
            "rank_pca": 127,
            "adv": 831892772.3399999,
            "trades": 14216.0,
            "volatility": 0.302679820871778,
            "spread_pct": 0.005318851706597283,
            "spread_ticks": 1.0034792085848423,
            "amihud": 3.266516304384012e-11,
            "turnover_ratio": 0.013334749116577227,
            "is_target": false
          },
          {
            "ticker": "9660",
            "score_pca": 96.0077519379845,
            "rank_pca": 104,
            "adv": 789255286.99,
            "trades": 19871.0,
            "volatility": 0.3048799024737212,
            "spread_pct": 0.0015078558776360012,
            "spread_ticks": 1.0384014423076924,
            "amihud": 5.550377330096328e-11,
            "turnover_ratio": 0.011180041832641133,
            "is_target": false
          },
          {
            "ticker": "9880",
            "score_pca": 99.72868217054264,
            "rank_pca": 8,
            "adv": 2182565000.0,
            "trades": 36277.0,
            "volatility": 1.106587226187084,
            "spread_pct": 0.001016400654232649,
            "spread_ticks": 1.6537037420102187,
            "amihud": 7.832994085107657e-11,
            "turnover_ratio": 0.06684875408475838,
            "is_target": false
          },
          {
            "ticker": "6636",
            "score_pca": 99.57364341085271,
            "rank_pca": 12,
            "adv": 181164100.0,
            "trades": 4416.0,
            "volatility": 2.7810144017482745,
            "spread_pct": 0.005551146573466619,
            "spread_ticks": 9.09149044400843,
            "amihud": 8.433115489094014e-10,
            "turnover_ratio": 0.019427260126340294,
            "is_target": false
          },
          {
            "ticker": "1384",
            "score_pca": 98.4108527131783,
            "rank_pca": 42,
            "adv": 353574000.0,
            "trades": 9689.0,
            "volatility": 1.1043957420123443,
            "spread_pct": 0.0027713110156657715,
            "spread_ticks": null,
            "amihud": 1.0359219055455862e-10,
            "turnover_ratio": 0.08929806709515717,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Digital Solution Services",
          "sector_count": 68,
          "market_count": 2580,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.4929021973733366,
              "median": 0.35396977176938077,
              "min": 0.0,
              "max": 10.150540723275236,
              "p5": 0.0,
              "p95": 1.4699870258963992,
              "count": 2580
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 87559100.60785997,
              "median": 317660.0,
              "min": 0.0,
              "max": 10561587990.2,
              "p5": 0.0,
              "p95": 315594076.3999991,
              "count": 2580
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.04963259634057522,
              "median": 0.02701935578889043,
              "min": 0.0005061340649462837,
              "max": 0.7648559970834851,
              "p5": 0.0013662345656115437,
              "p95": 0.17160210431161227,
              "count": 2580
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.006712952872517842,
              "median": 0.0012447235901291492,
              "min": 0.0,
              "max": 0.6346194618337772,
              "p5": 0.0,
              "p95": 0.025418729983661684,
              "count": 2559
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 6.4108681496610655e-06,
              "median": 1.0374588971249012e-08,
              "min": 0.0,
              "max": 0.003349282296650716,
              "p5": 0.0,
              "p95": 6.244599452624035e-06,
              "count": 2228
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1534.15503875969,
              "median": 27.0,
              "min": 0.0,
              "max": 84077.0,
              "p5": 0.0,
              "p95": 8202.749999999996,
              "count": 2580
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.6238009671376139,
              "median": 0.4691398612092796,
              "min": 0.0,
              "max": 2.7810144017482745,
              "p5": 0.0,
              "p95": 1.7067817717192053,
              "count": 68
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 378441909.1030456,
              "median": 6827762.5,
              "min": 0.0,
              "max": 10561587990.2,
              "p5": 3654.0000000000005,
              "p95": 1653167387.9999993,
              "count": 68
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.028157638580243276,
              "median": 0.008665742347222633,
              "min": 0.0005061340649462837,
              "max": 0.1505376344086023,
              "p5": 0.0010463460084346328,
              "p95": 0.10813810129147543,
              "count": 68
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.010514719495572433,
              "median": 0.0031378727030900943,
              "min": 0.0,
              "max": 0.08929806709515717,
              "p5": 1.2280239408323821e-05,
              "p95": 0.04751465207119977,
              "count": 67
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.2183830949074786e-06,
              "median": 1.1360505421074779e-09,
              "min": 0.0,
              "max": 2.587991718426504e-05,
              "p5": 0.0,
              "p95": 9.714590964590955e-06,
              "count": 66
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 4190.10294117647,
              "median": 250.0,
              "min": 0.0,
              "max": 56213.0,
              "p5": 1.35,
              "p95": 19695.3,
              "count": 68
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 1585083654.91625,
              "median": 1084819826.17,
              "min": 181164100.0,
              "max": 5181462000.0,
              "p5": 241507565.0,
              "p95": 4131848049.9999986,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 17477.0,
              "median": 16792.5,
              "min": 4416.0,
              "max": 36277.0,
              "p5": 5329.85,
              "p95": 33712.899999999994,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 1.187270968970873,
              "median": 1.105491484099714,
              "min": 0.302679820871778,
              "max": 2.7810144017482745,
              "p5": 0.3034498494324581,
              "p95": 2.34910988468248,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.0028540845304103725,
              "median": 0.0026253410009644436,
              "min": 0.001016400654232649,
              "max": 0.005551146573466619,
              "p5": 0.0011564103700657416,
              "p95": 0.005469843370062351,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 3.127933638850794,
              "median": 1.6537037420102187,
              "min": 1.0034792085848423,
              "max": 9.09149044400843,
              "p5": 1.0139558787016973,
              "p95": 7.741263771696448,
              "count": 7
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.5814502142056872e-10,
              "median": 6.932810259609937e-11,
              "min": 1.31013495125111e-11,
              "max": 8.433115489094014e-10,
              "p5": 1.9948684248476257e-11,
              "p95": 5.84409773485206e-10,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.03791237335007476,
              "median": 0.0286459822093332,
              "min": 0.011180041832641133,
              "max": 0.08929806709515717,
              "p5": 0.011934189382018765,
              "p95": 0.08144080754151758,
              "count": 8
            }
          },
          "returns": {
            "window_days": 1,
            "n_obs": 1,
            "stock": 0.02603305785123977,
            "market": 0.013529893542904459,
            "sector": 0.021311151009691498,
            "peers": 0.09210235500033326,
            "vs_market": 0.012503164308335313,
            "vs_sector": 0.0047219068415482734,
            "vs_peers": -0.06606929714909349
          }
        }
      },
      "30d": {
        "label": "1M",
        "window_days": 21,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 21,
          "score_pca": 99.88372093023256,
          "score_pca_percentile": 99.88372093023256,
          "rank_pca": 4,
          "total": 2580,
          "adv_notional_sgd": 13520726500.0,
          "adv_volume_shares": 25794400.0,
          "free_float_shares": 6214887240.0,
          "turnover_ratio": 0.0041504212391792325,
          "votes": 64604.0,
          "trades": 64604.0,
          "spread_pct": 0.0009609479215323458,
          "spread_ticks": 1.0588900843369313,
          "amihud": 9.274765798281788e-13,
          "volatility": 0.4398198922435046
        },
        "pca": {
          "valid": true,
          "window_days": 21,
          "variance_explained": 0.5724765143419223,
          "loadings": {
            "log_adv": 0.5213587779933563,
            "log_trades": 0.4761963837889871,
            "log_turnover": 0.4812215188601158,
            "neg_spread": 0.45551075402573316,
            "neg_amihud": 0.24362194155164255,
            "neg_vol": 0.05482865147935145
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
          "peer_median_adv": 934463393.38,
          "peer_median_score_pca": 97.51937984496124,
          "peer_median_trades": 12333.0,
          "peer_median_volatility": 1.589895894618369,
          "peer_median_spread_pct": 0.0028237945244708965,
          "peer_median_spread_ticks": 2.4934420304562517,
          "peer_median_amihud": 5.8015304703923774e-11,
          "peer_median_turnover_ratio": 0.016848419079394612,
          "target_vs_peer": {
            "score_pca_delta": 2.36,
            "adv_delta_pct": 1346.9,
            "trades_delta_pct": 423.83,
            "volatility_delta_pct": 72.34,
            "spread_pct_delta_pct": 65.97,
            "spread_ticks_delta_pct": -57.53,
            "amihud_delta_pct": 98.4,
            "turnover_ratio_delta_pct": -75.37
          }
        },
        "peer_liquidity": [
          {
            "ticker": "700",
            "score_pca": 99.88372093023256,
            "rank_pca": 4,
            "adv": 13520726500.0,
            "trades": 64604.0,
            "volatility": 0.4398198922435046,
            "spread_pct": 0.0009609479215323458,
            "spread_ticks": 1.0588900843369313,
            "amihud": 9.274765798281788e-13,
            "turnover_ratio": 0.0041504212391792325,
            "is_target": true
          },
          {
            "ticker": "2513",
            "score_pca": 97.24806201550388,
            "rank_pca": 72,
            "adv": 1436721550.0,
            "trades": 12451.0,
            "volatility": 1.8007477251167974,
            "spread_pct": 0.0021906519798203317,
            "spread_ticks": 2.7345255703464657,
            "amihud": 5.145034632867022e-11,
            "turnover_ratio": 0.015735503392514488,
            "is_target": false
          },
          {
            "ticker": "100",
            "score_pca": 93.87596899224806,
            "rank_pca": 159,
            "adv": 1104574320.0,
            "trades": 4448.0,
            "volatility": 1.7838148012819335,
            "spread_pct": 0.0017499464589650238,
            "spread_ticks": 2.2523584905660377,
            "amihud": 8.000527847130458e-11,
            "turnover_ratio": 0.008949069892608533,
            "is_target": false
          },
          {
            "ticker": "3317",
            "score_pca": 97.86821705426357,
            "rank_pca": 56,
            "adv": 975974400.0,
            "trades": 19116.0,
            "volatility": 2.7380581341880377,
            "spread_pct": 0.003456937069121461,
            "spread_ticks": 4.77361673414305,
            "amihud": 6.458026307917733e-11,
            "turnover_ratio": 0.05165034397643142,
            "is_target": false
          },
          {
            "ticker": "20",
            "score_pca": 98.37209302325581,
            "rank_pca": 43,
            "adv": 905231053.0,
            "trades": 15243.0,
            "volatility": 0.4483723054311125,
            "spread_pct": 0.00496616230783972,
            "spread_ticks": 1.0034076387902882,
            "amihud": 1.682620940115891e-11,
            "turnover_ratio": 0.013334749116577227,
            "is_target": false
          },
          {
            "ticker": "9660",
            "score_pca": 99.14728682170542,
            "rank_pca": 23,
            "adv": 963695733.76,
            "trades": 21383.0,
            "volatility": 0.49394052765247426,
            "spread_pct": 0.0014128420749718253,
            "spread_ticks": 1.0384014423076924,
            "amihud": 1.957045859227758e-11,
            "turnover_ratio": 0.013254740258742535,
            "is_target": false
          },
          {
            "ticker": "9880",
            "score_pca": 97.79069767441861,
            "rank_pca": 58,
            "adv": 599739910.0,
            "trades": 12215.0,
            "volatility": 0.7546355800532731,
            "spread_pct": 0.001058289631216238,
            "spread_ticks": 1.3133427963094393,
            "amihud": 3.6404408548015554e-11,
            "turnover_ratio": 0.01796133476627474,
            "is_target": false
          },
          {
            "ticker": "6636",
            "score_pca": 84.49612403100775,
            "rank_pca": 401,
            "adv": 213361200.0,
            "trades": 5822.0,
            "volatility": 4.8579185071615,
            "spread_pct": 0.005551146573466619,
            "spread_ticks": 9.09149044400843,
            "amihud": 1.0778200629945102e-09,
            "turnover_ratio": 0.0263754850851654,
            "is_target": false
          },
          {
            "ticker": "1384",
            "score_pca": 93.21705426356588,
            "rank_pca": 176,
            "adv": 158637500.0,
            "trades": 4620.0,
            "volatility": 1.3959769879548045,
            "spread_pct": 0.0038060242436723933,
            "spread_ticks": 9.668650793650794,
            "amihud": 3.408818203634615e-10,
            "turnover_ratio": 0.03773221793462325,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Digital Solution Services",
          "sector_count": 68,
          "market_count": 2580,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.6719260847287878,
              "median": 0.5500288315269672,
              "min": 0.0,
              "max": 12.575339065692916,
              "p5": 0.21414088583874274,
              "p95": 1.5330846357677201,
              "count": 2577
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 73041119.56546523,
              "median": 232245.0,
              "min": 0.0,
              "max": 13520726500.0,
              "p5": 0.0,
              "p95": 258495190.88499933,
              "count": 2580
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.045779606343190185,
              "median": 0.028409155915049857,
              "min": 0.0005766037246855124,
              "max": 0.8484231943031536,
              "p5": 0.001445880794070252,
              "p95": 0.14428888342866747,
              "count": 2580
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.004850722541971117,
              "median": 0.0009059086778548557,
              "min": 0.0,
              "max": 0.9189996627814478,
              "p5": 0.0,
              "p95": 0.016626914369499698,
              "count": 2559
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.200515507958299e-06,
              "median": 4.4863882263390645e-08,
              "min": 0.0,
              "max": 0.00021538348509114532,
              "p5": 3.5747017692220256e-11,
              "p95": 4.701691282573627e-06,
              "count": 2571
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1265.2358527131782,
              "median": 21.0,
              "min": 0.0,
              "max": 108394.0,
              "p5": 0.0,
              "p95": 6390.399999999992,
              "count": 2580
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.8248085534143201,
              "median": 0.6477250971950891,
              "min": 0.1574026864768819,
              "max": 4.8579185071615,
              "p5": 0.34108117376467,
              "p95": 1.756843459104034,
              "count": 68
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 319732929.7993677,
              "median": 6801743.260795619,
              "min": 0.0,
              "max": 13520726500.0,
              "p5": 131.25000000000003,
              "p95": 971676866.816,
              "count": 68
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.03128833889552,
              "median": 0.008980840138702808,
              "min": 0.0009609479215323458,
              "max": 0.38147533619954715,
              "p5": 0.0012406357149958205,
              "p95": 0.10548390586863197,
              "count": 68
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.007430056431674859,
              "median": 0.002951733997529176,
              "min": 0.0,
              "max": 0.0783097132727146,
              "p5": 7.433763190850755e-07,
              "p95": 0.024449093551531676,
              "count": 67
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 5.297766963017534e-07,
              "median": 2.7196081735713417e-09,
              "min": 9.274765798281788e-13,
              "max": 9.824147755182241e-06,
              "p5": 4.167048677124469e-11,
              "p95": 3.660186674585791e-06,
              "count": 68
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 3286.0661764705883,
              "median": 391.0,
              "min": 0.0,
              "max": 64604.0,
              "p5": 0.3500000000000001,
              "p95": 14265.799999999996,
              "count": 68
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 794741958.345,
              "median": 934463393.38,
              "min": 158637500.0,
              "max": 1436721550.0,
              "p5": 177790795.0,
              "p95": 1320470019.4999998,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 11912.25,
              "median": 12333.0,
              "min": 4448.0,
              "max": 21383.0,
              "p5": 4508.2,
              "p95": 20589.55,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 1.7841830711049915,
              "median": 1.589895894618369,
              "min": 0.4483723054311125,
              "max": 4.8579185071615,
              "p5": 0.4643211832085891,
              "p95": 4.115967376620787,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.0030240000423842014,
              "median": 0.0028237945244708965,
              "min": 0.001058289631216238,
              "max": 0.005551146573466619,
              "p5": 0.0011823829865306936,
              "p95": 0.005346402080497204,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 3.9844742387652747,
              "median": 2.4934420304562517,
              "min": 1.0034076387902882,
              "max": 9.668650793650794,
              "p5": 1.0156554700213796,
              "p95": 9.466644671275967,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 2.1094235597232198e-10,
              "median": 5.8015304703923774e-11,
              "min": 1.682620940115891e-11,
              "max": 1.0778200629945102e-09,
              "p5": 1.7786696618050445e-11,
              "p95": 8.198916780736428e-10,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0231241805528672,
              "median": 0.016848419079394612,
              "min": 0.008949069892608533,
              "max": 0.05165034397643142,
              "p5": 0.010456054520755435,
              "p95": 0.04677899986179856,
              "count": 8
            }
          },
          "returns": {
            "window_days": 21,
            "n_obs": 21,
            "stock": -0.027228207639569013,
            "market": -0.018357235943285755,
            "sector": -0.09825595390468367,
            "peers": -0.13229935959594608,
            "vs_market": -0.008870971696283259,
            "vs_sector": 0.07102774626511466,
            "vs_peers": 0.10507115195637706
          }
        }
      },
      "3m": {
        "label": "3M",
        "window_days": 63,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 63,
          "score_pca": 99.92248062015504,
          "score_pca_percentile": 99.92248062015504,
          "rank_pca": 3,
          "total": 2580,
          "adv_notional_sgd": 13968603216.0,
          "adv_volume_shares": 24325000.0,
          "free_float_shares": 6214887240.0,
          "turnover_ratio": 0.003913988952758538,
          "votes": 57781.0,
          "trades": 57781.0,
          "spread_pct": 0.0009357439007935453,
          "spread_ticks": 1.043036039743665,
          "amihud": 8.383463032226939e-13,
          "volatility": 0.3335429130355988
        },
        "pca": {
          "valid": true,
          "window_days": 63,
          "variance_explained": 0.6154874421985675,
          "loadings": {
            "log_adv": 0.4997197685661234,
            "log_trades": 0.45294363727342635,
            "log_turnover": 0.4545026169999264,
            "neg_spread": 0.4612479973498291,
            "neg_amihud": 0.3284352241992034,
            "neg_vol": 0.13390359944358704
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
          "peer_median_adv": 858291047.5,
          "peer_median_score_pca": 92.15116279069767,
          "peer_median_trades": 9468.0,
          "peer_median_volatility": 1.3883758861890878,
          "peer_median_spread_pct": 0.0033951658949782455,
          "peer_median_spread_ticks": 3.035356789603082,
          "peer_median_amihud": 7.467054587086152e-11,
          "peer_median_turnover_ratio": 0.014056419324254367,
          "target_vs_peer": {
            "score_pca_delta": 7.77,
            "adv_delta_pct": 1527.5,
            "trades_delta_pct": 510.28,
            "volatility_delta_pct": 75.98,
            "spread_pct_delta_pct": 72.44,
            "spread_ticks_delta_pct": -65.64,
            "amihud_delta_pct": 98.88,
            "turnover_ratio_delta_pct": -72.16
          }
        },
        "peer_liquidity": [
          {
            "ticker": "700",
            "score_pca": 99.92248062015504,
            "rank_pca": 3,
            "adv": 13968603216.0,
            "trades": 57781.0,
            "volatility": 0.3335429130355988,
            "spread_pct": 0.0009357439007935453,
            "spread_ticks": 1.043036039743665,
            "amihud": 8.383463032226939e-13,
            "turnover_ratio": 0.003913988952758538,
            "is_target": true
          },
          {
            "ticker": "2513",
            "score_pca": 93.9922480620155,
            "rank_pca": 156,
            "adv": 1191510500.0,
            "trades": 13114.0,
            "volatility": 2.1270219069423897,
            "spread_pct": 0.0025148280967974904,
            "spread_ticks": 3.1650057433795906,
            "amihud": 6.182152236601055e-11,
            "turnover_ratio": 0.020337869000413063,
            "is_target": false
          },
          {
            "ticker": "100",
            "score_pca": 90.31007751937985,
            "rank_pca": 251,
            "adv": 934828595.0,
            "trades": 4719.5,
            "volatility": 1.7276762734019695,
            "spread_pct": 0.0018817854350500545,
            "spread_ticks": 2.9057078358265738,
            "amihud": 8.75195693757125e-11,
            "turnover_ratio": 0.009871672478216215,
            "is_target": false
          },
          {
            "ticker": "3317",
            "score_pca": 73.83720930232558,
            "rank_pca": 676,
            "adv": 27739664.999999996,
            "trades": 1398.0,
            "volatility": 1.8519407187832735,
            "spread_pct": 0.007222652911964113,
            "spread_ticks": 11.355833333333333,
            "amihud": 1.4097449733644303e-09,
            "turnover_ratio": 0.0032755139608956043,
            "is_target": false
          },
          {
            "ticker": "20",
            "score_pca": 99.10852713178294,
            "rank_pca": 24,
            "adv": 1269121683.2,
            "trades": 15471.0,
            "volatility": 0.5037760355555257,
            "spread_pct": 0.004275503693159001,
            "spread_ticks": 1.0076630806010929,
            "amihud": 1.396427194166554e-11,
            "turnover_ratio": 0.016027325542642103,
            "is_target": false
          },
          {
            "ticker": "9660",
            "score_pca": 99.4186046511628,
            "rank_pca": 16,
            "adv": 1085035450.28,
            "trades": 23055.0,
            "volatility": 0.446945895130105,
            "spread_pct": 0.0012592814395736781,
            "spread_ticks": 1.0498329621380846,
            "amihud": 1.8721375469393636e-11,
            "turnover_ratio": 0.01208551310586663,
            "is_target": false
          },
          {
            "ticker": "9880",
            "score_pca": 98.72093023255813,
            "rank_pca": 34,
            "adv": 781753500.0,
            "trades": 13231.0,
            "volatility": 0.6499097686119977,
            "spread_pct": 0.0010046104859952143,
            "spread_ticks": 1.3133427963094393,
            "amihud": 3.180637433422327e-11,
            "turnover_ratio": 0.019439773832085512,
            "is_target": false
          },
          {
            "ticker": "6636",
            "score_pca": 72.44186046511628,
            "rank_pca": 712,
            "adv": 213361200.0,
            "trades": 5822.0,
            "volatility": 4.8579185071615,
            "spread_pct": 0.005551146573466619,
            "spread_ticks": 9.09149044400843,
            "amihud": 1.0778200629945102e-09,
            "turnover_ratio": 0.0263754850851654,
            "is_target": false
          },
          {
            "ticker": "1384",
            "score_pca": 78.91472868217055,
            "rank_pca": 545,
            "adv": 80558420.0,
            "trades": 864.0,
            "volatility": 1.0490754989762061,
            "spread_pct": 0.006757321371136611,
            "spread_ticks": 9.920236920039487,
            "amihud": 4.245792614118259e-10,
            "turnover_ratio": 0.005726508095379167,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Digital Solution Services",
          "sector_count": 68,
          "market_count": 2580,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.7047663310521582,
              "median": 0.5729076373787829,
              "min": 0.0,
              "max": 8.183697405562258,
              "p5": 0.2233566245041061,
              "p95": 1.5567804569727781,
              "count": 2577
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 67461307.92279032,
              "median": 243406.6695,
              "min": 0.0,
              "max": 13968603216.0,
              "p5": 0.0,
              "p95": 246168812.0994985,
              "count": 2580
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.04262040605866327,
              "median": 0.026817062898379467,
              "min": 0.0005617553716258445,
              "max": 0.5518881068100528,
              "p5": 0.0014199288580577097,
              "p95": 0.13598896816668823,
              "count": 2580
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.004082274861107176,
              "median": 0.0008960772593830475,
              "min": 0.0,
              "max": 0.35733925915678066,
              "p5": 0.0,
              "p95": 0.01601268675863203,
              "count": 2559
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 7.105819799389835e-07,
              "median": 4.464483616037809e-08,
              "min": 0.0,
              "max": 4.7054394880481924e-05,
              "p5": 4.317000791993155e-11,
              "p95": 3.4296203987313285e-06,
              "count": 2577
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1146.7773255813954,
              "median": 20.0,
              "min": 0.0,
              "max": 103821.0,
              "p5": 0.0,
              "p95": 6019.999999999956,
              "count": 2580
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.8812604278608055,
              "median": 0.7089666674774355,
              "min": 0.12858373892557015,
              "max": 4.8579185071615,
              "p5": 0.3436434492953668,
              "p95": 1.7446595283435344,
              "count": 68
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 316158931.326035,
              "median": 6247665.0,
              "min": 0.0,
              "max": 13968603216.0,
              "p5": 2236.0,
              "p95": 1032463050.9319998,
              "count": 68
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.029972100428074997,
              "median": 0.009765843938113495,
              "min": 0.0009357439007935453,
              "max": 0.3470779183449777,
              "p5": 0.0012663322251616782,
              "p95": 0.11369887847924882,
              "count": 68
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.006200778024991674,
              "median": 0.002462161594318383,
              "min": 0.0,
              "max": 0.061070222788793836,
              "p5": 2.398345829414552e-05,
              "p95": 0.020068440449914793,
              "count": 67
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 2.642283429041483e-07,
              "median": 2.746878049144696e-09,
              "min": 0.0,
              "max": 4.9582093780988785e-06,
              "p5": 2.3301125072084008e-11,
              "p95": 1.2826075614455927e-06,
              "count": 68
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 2918.5588235294117,
              "median": 292.5,
              "min": 0.0,
              "max": 57781.0,
              "p5": 2.0,
              "p95": 13190.05,
              "count": 68
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 697988626.685,
              "median": 858291047.5,
              "min": 27739664.999999996,
              "max": 1269121683.2,
              "p5": 46226229.25,
              "p95": 1241957769.08,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 9709.3125,
              "median": 9468.0,
              "min": 864.0,
              "max": 23055.0,
              "p5": 1050.9,
              "p95": 20400.599999999995,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 1.6517830755703709,
              "median": 1.3883758861890878,
              "min": 0.446945895130105,
              "max": 4.8579185071615,
              "p5": 0.4668364442790023,
              "p95": 3.90210469708481,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.0038083912508928477,
              "median": 0.0033951658949782455,
              "min": 0.0010046104859952143,
              "max": 0.007222652911964113,
              "p5": 0.0010937453197476766,
              "p95": 0.0070597868726744875,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 4.976139139454505,
              "median": 3.035356789603082,
              "min": 1.0076630806010929,
              "max": 11.355833333333333,
              "p5": 1.02242253913904,
              "p95": 10.853374588680486,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 3.9074717640722147e-10,
              "median": 7.467054587086152e-11,
              "min": 1.396427194166554e-11,
              "max": 1.4097449733644303e-09,
              "p5": 1.5629258176370374e-11,
              "p95": 1.2935712547349581e-09,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.014142457637582963,
              "median": 0.014056419324254367,
              "min": 0.0032755139608956043,
              "max": 0.0263754850851654,
              "p5": 0.004133361907964851,
              "p95": 0.024262319455502078,
              "count": 8
            }
          },
          "returns": {
            "window_days": 63,
            "n_obs": 63,
            "stock": -0.16747694886839892,
            "market": 0.07290698342020385,
            "sector": -0.154319410902806,
            "peers": 0.02215748748942592,
            "vs_market": -0.24038393228860278,
            "vs_sector": -0.013157537965592936,
            "vs_peers": -0.18963443635782484
          }
        }
      },
      "6m": {
        "label": "6M",
        "window_days": 126,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 126,
          "score_pca": 99.88372093023256,
          "score_pca_percentile": 99.88372093023256,
          "rank_pca": 4,
          "total": 2580,
          "adv_notional_sgd": 11657604959.75,
          "adv_volume_shares": 19915800.0,
          "free_float_shares": 6214887240.0,
          "turnover_ratio": 0.0032045311895312844,
          "votes": 48446.5,
          "trades": 48446.5,
          "spread_pct": 0.0008504994635808207,
          "spread_ticks": 1.0454317400620532,
          "amihud": 9.37961614767253e-13,
          "volatility": 0.29807628345308473
        },
        "pca": {
          "valid": true,
          "window_days": 126,
          "variance_explained": 0.6180924827415969,
          "loadings": {
            "log_adv": 0.4999552870406214,
            "log_trades": 0.4559292630139401,
            "log_turnover": 0.45282444571963004,
            "neg_spread": 0.46413097333096975,
            "neg_amihud": 0.33104248037256756,
            "neg_vol": 0.110075225323555
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
          "peer_median_adv": 913103380.0,
          "peer_median_score_pca": 95.5813953488372,
          "peer_median_trades": 9468.0,
          "peer_median_volatility": 1.529207087480033,
          "peer_median_spread_pct": 0.003434884098137162,
          "peer_median_spread_ticks": 3.035356789603082,
          "peer_median_amihud": 7.467054587086152e-11,
          "peer_median_turnover_ratio": 0.014783056002081437,
          "target_vs_peer": {
            "score_pca_delta": 4.3,
            "adv_delta_pct": 1176.7,
            "trades_delta_pct": 411.69,
            "volatility_delta_pct": 80.51,
            "spread_pct_delta_pct": 75.24,
            "spread_ticks_delta_pct": -65.56,
            "amihud_delta_pct": 98.74,
            "turnover_ratio_delta_pct": -78.32
          }
        },
        "peer_liquidity": [
          {
            "ticker": "700",
            "score_pca": 99.88372093023256,
            "rank_pca": 4,
            "adv": 11657604959.75,
            "trades": 48446.5,
            "volatility": 0.29807628345308473,
            "spread_pct": 0.0008504994635808207,
            "spread_ticks": 1.0454317400620532,
            "amihud": 9.37961614767253e-13,
            "turnover_ratio": 0.0032045311895312844,
            "is_target": true
          },
          {
            "ticker": "2513",
            "score_pca": 97.28682170542635,
            "rank_pca": 71,
            "adv": 1191510500.0,
            "trades": 13114.0,
            "volatility": 2.1270219069423897,
            "spread_pct": 0.0025148280967974904,
            "spread_ticks": 3.1650057433795906,
            "amihud": 6.182152236601055e-11,
            "turnover_ratio": 0.020337869000413063,
            "is_target": false
          },
          {
            "ticker": "100",
            "score_pca": 93.87596899224806,
            "rank_pca": 159,
            "adv": 934828595.0,
            "trades": 4719.5,
            "volatility": 1.7276762734019695,
            "spread_pct": 0.0018817854350500545,
            "spread_ticks": 2.9057078358265738,
            "amihud": 8.75195693757125e-11,
            "turnover_ratio": 0.009871672478216215,
            "is_target": false
          },
          {
            "ticker": "3317",
            "score_pca": 75.93023255813954,
            "rank_pca": 622,
            "adv": 27739664.999999996,
            "trades": 1398.0,
            "volatility": 1.8519407187832735,
            "spread_pct": 0.007222652911964113,
            "spread_ticks": 11.355833333333333,
            "amihud": 1.4097449733644303e-09,
            "turnover_ratio": 0.0032755139608956043,
            "is_target": false
          },
          {
            "ticker": "20",
            "score_pca": 99.18604651162791,
            "rank_pca": 22,
            "adv": 1229947250.15,
            "trades": 15767.5,
            "volatility": 0.5352589107683904,
            "spread_pct": 0.004354940099476834,
            "spread_ticks": 1.0087700830945026,
            "amihud": 1.4752416743956313e-11,
            "turnover_ratio": 0.01586013116240534,
            "is_target": false
          },
          {
            "ticker": "9660",
            "score_pca": 99.53488372093024,
            "rank_pca": 13,
            "adv": 1138483332.2000003,
            "trades": 25190.0,
            "volatility": 0.48476544525707727,
            "spread_pct": 0.001237071792524899,
            "spread_ticks": 1.0435160457326234,
            "amihud": 1.6064942676428723e-11,
            "turnover_ratio": 0.013705980841757535,
            "is_target": false
          },
          {
            "ticker": "9880",
            "score_pca": 99.14728682170542,
            "rank_pca": 23,
            "adv": 891378165.0,
            "trades": 14315.5,
            "volatility": 0.6342837157925194,
            "spread_pct": 0.0010326841517801367,
            "spread_ticks": 1.3045191983925317,
            "amihud": 2.828968836167699e-11,
            "turnover_ratio": 0.02051606032001985,
            "is_target": false
          },
          {
            "ticker": "6636",
            "score_pca": 82.24806201550388,
            "rank_pca": 459,
            "adv": 213361200.0,
            "trades": 5822.0,
            "volatility": 4.8579185071615,
            "spread_pct": 0.005551146573466619,
            "spread_ticks": 9.09149044400843,
            "amihud": 1.0778200629945102e-09,
            "turnover_ratio": 0.0263754850851654,
            "is_target": false
          },
          {
            "ticker": "1384",
            "score_pca": 78.02325581395348,
            "rank_pca": 568,
            "adv": 53475900.0,
            "trades": 858.0,
            "volatility": 1.3307379015580967,
            "spread_pct": 0.005976570978375707,
            "spread_ticks": 9.332876712328767,
            "amihud": 3.9407042815609046e-10,
            "turnover_ratio": 0.004858212477847476,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Digital Solution Services",
          "sector_count": 68,
          "market_count": 2580,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.7386526036751957,
              "median": 0.5970209614848415,
              "min": 0.026427624109509794,
              "max": 33.692481563841405,
              "p5": 0.22460415844132745,
              "p95": 1.5579883557822423,
              "count": 2577
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 64659755.65554748,
              "median": 230020.0,
              "min": 0.0,
              "max": 13711894082.25,
              "p5": 0.0,
              "p95": 234015662.95,
              "count": 2580
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.04163012594350401,
              "median": 0.02621193892215143,
              "min": 0.000558678699550006,
              "max": 0.5518881068100528,
              "p5": 0.0013599734464332847,
              "p95": 0.13349769294357264,
              "count": 2580
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.003756513865876967,
              "median": 0.0008938439831340969,
              "min": 0.0,
              "max": 0.2066663157894737,
              "p5": 0.0,
              "p95": 0.015078595290963708,
              "count": 2559
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 6.319234477340354e-07,
              "median": 4.4808649144690914e-08,
              "min": 0.0,
              "max": 4.7054394880481924e-05,
              "p5": 4.551910502743741e-11,
              "p95": 3.4296029247024704e-06,
              "count": 2577
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1120.3029069767442,
              "median": 21.5,
              "min": 0.0,
              "max": 113413.5,
              "p5": 0.0,
              "p95": 6007.299999999996,
              "count": 2580
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.9068981458401691,
              "median": 0.72910942167139,
              "min": 0.13870072542329476,
              "max": 4.8579185071615,
              "p5": 0.3245361867936206,
              "p95": 1.808448162899817,
              "count": 68
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 283437537.3998824,
              "median": 6128532.9906000085,
              "min": 0.0,
              "max": 11657604959.75,
              "p5": 2278.15,
              "p95": 1067204174.18,
              "count": 68
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.02818273891803335,
              "median": 0.009282952484715695,
              "min": 0.0008504994635808207,
              "max": 0.2000000000000001,
              "p5": 0.0012195702120903944,
              "p95": 0.1084408509553371,
              "count": 68
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.005504293762442461,
              "median": 0.002462161594318383,
              "min": 0.0,
              "max": 0.034522204184883824,
              "p5": 5.85586745208426e-06,
              "p95": 0.020490916299762463,
              "count": 67
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 2.765369490215249e-07,
              "median": 2.491505150497272e-09,
              "min": 0.0,
              "max": 3.5740560344632717e-06,
              "p5": 2.0343603666265617e-11,
              "p95": 1.7135038927199205e-06,
              "count": 68
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 2836.345588235294,
              "median": 383.5,
              "min": 0.0,
              "max": 48446.5,
              "p5": 1.35,
              "p95": 13894.974999999999,
              "count": 68
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 710090575.91875,
              "median": 913103380.0,
              "min": 27739664.999999996,
              "max": 1229947250.15,
              "p5": 36747347.25,
              "p95": 1216494387.5975,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 10148.0625,
              "median": 9468.0,
              "min": 858.0,
              "max": 25190.0,
              "p5": 1047.0,
              "p95": 21892.124999999996,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 1.6937004224581522,
              "median": 1.529207087480033,
              "min": 0.48476544525707727,
              "max": 4.8579185071615,
              "p5": 0.5024381581860369,
              "p95": 3.90210469708481,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.0037214600049294815,
              "median": 0.003434884098137162,
              "min": 0.0010326841517801367,
              "max": 0.007222652911964113,
              "p5": 0.0011042198260408035,
              "p95": 0.00678652423520817,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 4.900964924512044,
              "median": 3.035356789603082,
              "min": 1.0087700830945026,
              "max": 11.355833333333333,
              "p5": 1.020931170017845,
              "p95": 10.647798515981734,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 3.86260450504852e-10,
              "median": 7.467054587086152e-11,
              "min": 1.4752416743956313e-11,
              "max": 1.4097449733644303e-09,
              "p5": 1.5211800820321657e-11,
              "p95": 1.2935712547349581e-09,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.01435011566584006,
              "median": 0.014783056002081437,
              "min": 0.0032755139608956043,
              "max": 0.0263754850851654,
              "p5": 0.0038294584418287593,
              "p95": 0.024324686417364454,
              "count": 8
            }
          },
          "returns": {
            "window_days": 126,
            "n_obs": 126,
            "stock": -0.23007751937984433,
            "market": 0.09678581532761465,
            "sector": -0.2684608373570958,
            "peers": -0.11260388046995917,
            "vs_market": -0.326863334707459,
            "vs_sector": 0.038383317977251474,
            "vs_peers": -0.11747363890988516
          }
        }
      }
    },
    "period_insights": {
      "1d": {
        "liquidity": "1D score 98.6 vs peer median 99.0 (-0.4 pts).",
        "market_comparison": "The stock rose 2.6% on the day compared with 9.2% for peers, so trading interest has been less supported by price strength."
      },
      "30d": {
        "liquidity": "Monthly tradability is solid, with a 1M liquidity score of 99.9 compared with a peer median of 97.5, which supports reliable access.",
        "market_comparison": "The stock returned -2.7% over 1M compared with -13.2% for peers, so liquidity has held up despite weaker sentiment across the group."
      },
      "3m": {
        "liquidity": "3M score 99.9 vs peer median 92.2 (+7.8 pts).",
        "market_comparison": "The stock returned -16.7% over 3M compared with 2.2% for peers, so the liquidity backdrop has not been reinforced by relative performance."
      },
      "6m": {
        "liquidity": "Six-month tradability is strong, with a 6M liquidity score of 99.9 compared with a peer median of 95.6, which indicates good structural access.",
        "market_comparison": "The stock returned -23.0% over 6M compared with -11.3% for peers, so liquidity has remained available even as performance lagged the group."
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
          "median": 0.5873466128259263,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "58.7%",
          "display_range": null,
          "display_text": "58.7%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "share_pct",
          "value_pct": 58.7,
          "plain_english": "Market explains about 58.7% of price moves in the current state."
        },
        "sector_share": {
          "median": 0.11916696364490169,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "11.9%",
          "display_range": null,
          "display_text": "11.9%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "share_pct",
          "value_pct": 11.9,
          "plain_english": "Sector explains about 11.9% of price moves in the current state."
        },
        "company_share": {
          "median": 0.293486423529172,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "29.3%",
          "display_range": null,
          "display_text": "29.3%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "share_pct",
          "value_pct": 29.3,
          "plain_english": "Company-specific explains about 29.3% of price moves in the current state."
        },
        "basis": "current_state"
      },
      "current_sensitivities": {
        "beta_market": {
          "median": 2.760965628269651,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "2.76",
          "display_range": null,
          "display_text": "2.76",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "beta",
          "strength_label": "High",
          "plain_english": "High market link: a 1% market move has lined up with about a 2.76% stock move in the same direction in this state.",
          "value_num": 2.76
        },
        "beta_stock_lag": {
          "median": -1.5563563686849244,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "-1.56",
          "display_range": null,
          "display_text": "-1.56",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "lag_beta",
          "value_num": -1.56
        },
        "beta_sector": {
          "median": -0.3528587824100249,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "-0.35",
          "display_range": null,
          "display_text": "-0.35",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "beta",
          "strength_label": "Modest",
          "plain_english": "Modest sector link: a 1% sector move has lined up with about a 0.35% stock move in the opposite direction in this state.",
          "value_num": -0.35
        },
        "beta_market_lag": {
          "median": 1.1978885481331067,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "1.20",
          "display_range": null,
          "display_text": "1.20",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "lag_beta",
          "value_num": 1.2
        },
        "beta_sector_lag": {
          "median": 0.26062385461864057,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "0.26",
          "display_range": null,
          "display_text": "0.26",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "lag_beta",
          "value_num": 0.26
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
          "period_label": "2025-03-18 to 2025-03-31",
          "n_obs": 10,
          "partial_month": true,
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.6033454695905471,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "60.3%",
            "display_range": null,
            "display_text": "60.3%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 10 trading days.",
            "kind": "share_pct",
            "value_pct": 60.3,
            "plain_english": "Market explains about 60.3% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.6033454695905471,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "60.3%",
              "display_range": null,
              "display_text": "60.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 10 trading days.",
              "kind": "share_pct",
              "value_pct": 60.3,
              "plain_english": "Market explains about 60.3% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.1571934244801925,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "15.7%",
              "display_range": null,
              "display_text": "15.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 10 trading days.",
              "kind": "share_pct",
              "value_pct": 15.7,
              "plain_english": "Sector explains about 15.7% of price moves in the current state."
            },
            "company_share": {
              "median": 0.23946110592926032,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "23.9%",
              "display_range": null,
              "display_text": "23.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 10 trading days.",
              "kind": "share_pct",
              "value_pct": 23.9,
              "plain_english": "Company-specific explains about 23.9% of price moves in the current state."
            }
          },
          "summary": "Mar: Still clearly market-driven."
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
            "median": 0.5824940664357009,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "58.2%",
            "display_range": null,
            "display_text": "58.2%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
            "kind": "share_pct",
            "value_pct": 58.2,
            "plain_english": "Market explains about 58.2% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.5824940664357009,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "58.2%",
              "display_range": null,
              "display_text": "58.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
              "kind": "share_pct",
              "value_pct": 58.2,
              "plain_english": "Market explains about 58.2% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.21144632014109754,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "21.1%",
              "display_range": null,
              "display_text": "21.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
              "kind": "share_pct",
              "value_pct": 21.1,
              "plain_english": "Sector explains about 21.1% of price moves in the current state."
            },
            "company_share": {
              "median": 0.20605961342320148,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "20.6%",
              "display_range": null,
              "display_text": "20.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
              "kind": "share_pct",
              "value_pct": 20.6,
              "plain_english": "Company-specific explains about 20.6% of price moves in the current state."
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
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.5949249584655482,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "59.5%",
            "display_range": null,
            "display_text": "59.5%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
            "kind": "share_pct",
            "value_pct": 59.5,
            "plain_english": "Market explains about 59.5% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.5949249584655482,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "59.5%",
              "display_range": null,
              "display_text": "59.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 59.5,
              "plain_english": "Market explains about 59.5% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.029464679552774053,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "2.9%",
              "display_range": null,
              "display_text": "2.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 2.9,
              "plain_english": "Sector explains about 2.9% of price moves in the current state."
            },
            "company_share": {
              "median": 0.3756103619816778,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "37.6%",
              "display_range": null,
              "display_text": "37.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 37.6,
              "plain_english": "Company-specific explains about 37.6% of price moves in the current state."
            }
          },
          "summary": "May: Mostly market-driven."
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
            "median": 0.5396038791122373,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "54.0%",
            "display_range": null,
            "display_text": "54.0%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
            "kind": "share_pct",
            "value_pct": 54.0,
            "plain_english": "Market explains about 54.0% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.5396038791122373,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "54.0%",
              "display_range": null,
              "display_text": "54.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 54.0,
              "plain_english": "Market explains about 54.0% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.12963441923498764,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "13.0%",
              "display_range": null,
              "display_text": "13.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 13.0,
              "plain_english": "Sector explains about 13.0% of price moves in the current state."
            },
            "company_share": {
              "median": 0.3307617016527751,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "33.1%",
              "display_range": null,
              "display_text": "33.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 33.1,
              "plain_english": "Company-specific explains about 33.1% of price moves in the current state."
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
            "median": 0.5130594907073394,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "51.3%",
            "display_range": null,
            "display_text": "51.3%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
            "kind": "share_pct",
            "value_pct": 51.3,
            "plain_english": "Market explains about 51.3% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.5130594907073394,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "51.3%",
              "display_range": null,
              "display_text": "51.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 51.3,
              "plain_english": "Market explains about 51.3% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.10010207471072902,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "10.0%",
              "display_range": null,
              "display_text": "10.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 10.0,
              "plain_english": "Sector explains about 10.0% of price moves in the current state."
            },
            "company_share": {
              "median": 0.3868384345819316,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "38.7%",
              "display_range": null,
              "display_text": "38.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 38.7,
              "plain_english": "Company-specific explains about 38.7% of price moves in the current state."
            }
          },
          "summary": "Jul: Mostly market-driven."
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
            "median": 0.5504893490156526,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "55.0%",
            "display_range": null,
            "display_text": "55.0%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
            "kind": "share_pct",
            "value_pct": 55.0,
            "plain_english": "Market explains about 55.0% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.5504893490156526,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "55.0%",
              "display_range": null,
              "display_text": "55.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 55.0,
              "plain_english": "Market explains about 55.0% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.12436420067390351,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "12.4%",
              "display_range": null,
              "display_text": "12.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 12.4,
              "plain_english": "Sector explains about 12.4% of price moves in the current state."
            },
            "company_share": {
              "median": 0.32514645031044387,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "32.5%",
              "display_range": null,
              "display_text": "32.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 32.5,
              "plain_english": "Company-specific explains about 32.5% of price moves in the current state."
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
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.753832783944698,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "75.4%",
            "display_range": null,
            "display_text": "75.4%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
            "kind": "share_pct",
            "value_pct": 75.4,
            "plain_english": "Market explains about 75.4% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.753832783944698,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "75.4%",
              "display_range": null,
              "display_text": "75.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 75.4,
              "plain_english": "Market explains about 75.4% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.013465087696973525,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "1.3%",
              "display_range": null,
              "display_text": "1.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 1.3,
              "plain_english": "Sector explains about 1.3% of price moves in the current state."
            },
            "company_share": {
              "median": 0.23270212835832846,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "23.3%",
              "display_range": null,
              "display_text": "23.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 23.3,
              "plain_english": "Company-specific explains about 23.3% of price moves in the current state."
            }
          },
          "summary": "Sep: Still clearly market-driven."
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
            "median": 0.6182546378382336,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "61.8%",
            "display_range": null,
            "display_text": "61.8%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
            "kind": "share_pct",
            "value_pct": 61.8,
            "plain_english": "Market explains about 61.8% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.6182546378382336,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "61.8%",
              "display_range": null,
              "display_text": "61.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 61.8,
              "plain_english": "Market explains about 61.8% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.09463925102098497,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "9.5%",
              "display_range": null,
              "display_text": "9.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 9.5,
              "plain_english": "Sector explains about 9.5% of price moves in the current state."
            },
            "company_share": {
              "median": 0.2871061111407814,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "28.7%",
              "display_range": null,
              "display_text": "28.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 28.7,
              "plain_english": "Company-specific explains about 28.7% of price moves in the current state."
            }
          },
          "summary": "Oct: Still clearly market-driven."
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
            "median": 0.5405113087070612,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "54.1%",
            "display_range": null,
            "display_text": "54.1%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
            "kind": "share_pct",
            "value_pct": 54.1,
            "plain_english": "Market explains about 54.1% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.5405113087070612,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "54.1%",
              "display_range": null,
              "display_text": "54.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 54.1,
              "plain_english": "Market explains about 54.1% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.18553186139980907,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "18.6%",
              "display_range": null,
              "display_text": "18.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 18.6,
              "plain_english": "Sector explains about 18.6% of price moves in the current state."
            },
            "company_share": {
              "median": 0.2739568298931298,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "27.4%",
              "display_range": null,
              "display_text": "27.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 27.4,
              "plain_english": "Company-specific explains about 27.4% of price moves in the current state."
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
            "median": 0.6403231652224993,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "64.0%",
            "display_range": null,
            "display_text": "64.0%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
            "kind": "share_pct",
            "value_pct": 64.0,
            "plain_english": "Market explains about 64.0% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.6403231652224993,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "64.0%",
              "display_range": null,
              "display_text": "64.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
              "kind": "share_pct",
              "value_pct": 64.0,
              "plain_english": "Market explains about 64.0% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.08517003392563319,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "8.5%",
              "display_range": null,
              "display_text": "8.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
              "kind": "share_pct",
              "value_pct": 8.5,
              "plain_english": "Sector explains about 8.5% of price moves in the current state."
            },
            "company_share": {
              "median": 0.27450680085186746,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "27.5%",
              "display_range": null,
              "display_text": "27.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
              "kind": "share_pct",
              "value_pct": 27.5,
              "plain_english": "Company-specific explains about 27.5% of price moves in the current state."
            }
          },
          "summary": "Dec: Still clearly market-driven."
        },
        {
          "month_key": "2026-01",
          "month_label": "January 2026",
          "month_short_label": "Jan",
          "period_label": "2026-01-02 to 2026-01-30",
          "n_obs": 21,
          "partial_month": true,
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.694549906155789,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "69.5%",
            "display_range": null,
            "display_text": "69.5%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
            "kind": "share_pct",
            "value_pct": 69.5,
            "plain_english": "Market explains about 69.5% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.694549906155789,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "69.5%",
              "display_range": null,
              "display_text": "69.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 69.5,
              "plain_english": "Market explains about 69.5% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.036187617320780165,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "3.6%",
              "display_range": null,
              "display_text": "3.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 3.6,
              "plain_english": "Sector explains about 3.6% of price moves in the current state."
            },
            "company_share": {
              "median": 0.2692624765234308,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "26.9%",
              "display_range": null,
              "display_text": "26.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 26.9,
              "plain_english": "Company-specific explains about 26.9% of price moves in the current state."
            }
          },
          "summary": "Jan: Still clearly market-driven."
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
            "median": 0.5214415089368656,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "52.1%",
            "display_range": null,
            "display_text": "52.1%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
            "kind": "share_pct",
            "value_pct": 52.1,
            "plain_english": "Market explains about 52.1% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.5214415089368656,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "52.1%",
              "display_range": null,
              "display_text": "52.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
              "kind": "share_pct",
              "value_pct": 52.1,
              "plain_english": "Market explains about 52.1% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.07933649311834134,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "7.9%",
              "display_range": null,
              "display_text": "7.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
              "kind": "share_pct",
              "value_pct": 7.9,
              "plain_english": "Sector explains about 7.9% of price moves in the current state."
            },
            "company_share": {
              "median": 0.399221997944793,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "39.9%",
              "display_range": null,
              "display_text": "39.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
              "kind": "share_pct",
              "value_pct": 39.9,
              "plain_english": "Company-specific explains about 39.9% of price moves in the current state."
            }
          },
          "summary": "Feb: Mostly market-driven."
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
            "median": 0.4826618360278339,
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
            "plain_english": "Market explains about 48.3% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.4826618360278339,
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
              "plain_english": "Market explains about 48.3% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.31367758228096326,
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
              "plain_english": "Sector explains about 31.4% of price moves in the current state."
            },
            "company_share": {
              "median": 0.2036605816912028,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "20.4%",
              "display_range": null,
              "display_text": "20.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 20.4,
              "plain_english": "Company-specific explains about 20.4% of price moves in the current state."
            }
          },
          "summary": "Mar: Mostly market-driven."
        }
      ],
      "regimes": [
        {
          "id": 0,
          "label": "Low Volatility",
          "pct_time": 0.5020080321285141,
          "expected_duration_days": 6.944444444444445,
          "current_probability": 0.0,
          "n_days_effective": 125.0,
          "volatility": {
            "median": 0.013175974907723695,
            "low": 0.013175974907723695,
            "high": 0.013175974907723695
          },
          "volatility_label": "Low Volatility",
          "current_probability_display": 0.0
        },
        {
          "id": 1,
          "label": "High Volatility",
          "pct_time": 0.4979919678714859,
          "expected_duration_days": 6.526315789473684,
          "current_probability": 1.0,
          "n_days_effective": 124.0,
          "volatility": {
            "median": 0.022239127076782546,
            "low": 0.022239127076782546,
            "high": 0.022239127076782546
          },
          "volatility_label": "High Volatility",
          "current_probability_display": null
        }
      ],
      "transitions": {
        "mean": [
          [
            0.856,
            0.144
          ],
          [
            0.14634146341463414,
            0.8536585365853658
          ]
        ],
        "low": [],
        "high": [],
        "counts": [
          [
            107.0,
            18.0
          ],
          [
            18.0,
            105.0
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
        "market_link_display": "2.76",
        "sector_link_display": "-0.35",
        "market_link_explainer": "High market link. A 1% market move has lined up with about a 2.76% stock move in the same direction in this state. This is a point estimate from 251 trading days.",
        "sector_link_explainer": "Modest sector link. A 1% sector move has lined up with about a 0.35% stock move in the opposite direction in this state. This is a point estimate from 251 trading days.",
        "stock_persistence_display": "-1.56",
        "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
        "history_limited_note": "Read is based on 251 trading days versus the 252-day target."
      },
      "current_summary": {
        "regime_label": "High Volatility",
        "dominant_driver": "market",
        "dominant_driver_label": "Market",
        "driver_share_pct": 58.7,
        "driver_share_display": "58.7%",
        "confidence_label": "High, limited history",
        "confidence_pct": 100.0,
        "display_confidence_pct": null,
        "confidence_note": "Based on 251 trading days relative to the 252-day target.",
        "history_days": 251,
        "history_limited": true,
        "volatility_label": "High Volatility",
        "lead_signal_text": "No stable lead signal.",
        "state_term": "state",
        "stay_probability": 0.8536585365853658,
        "effective_days": 124.0,
        "persistence_note": "This state looks more persistent, with a typical run length of about 6.5 days.",
        "expected_duration_days": 6.5
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
          "expected_duration_days": 6.944444444444445,
          "current_probability": 0.0,
          "n_days_effective": 125.0,
          "volatility": {
            "median": 0.013175974907723695,
            "low": 0.013175974907723695,
            "high": 0.013175974907723695
          },
          "volatility_label": "Low Volatility"
        },
        {
          "id": 1,
          "label": "High Volatility",
          "pct_time": 0.4979919678714859,
          "expected_duration_days": 6.526315789473684,
          "current_probability": 1.0,
          "n_days_effective": 124.0,
          "volatility": {
            "median": 0.022239127076782546,
            "low": 0.022239127076782546,
            "high": 0.022239127076782546
          },
          "volatility_label": "High Volatility"
        }
      ],
      "transitions": [
        [
          0.856,
          0.144
        ],
        [
          0.14634146341463414,
          0.8536585365853658
        ]
      ],
      "transition_intervals": {
        "mean": [
          [
            0.856,
            0.144
          ],
          [
            0.14634146341463414,
            0.8536585365853658
          ]
        ],
        "low": [],
        "high": [],
        "counts": [
          [
            107.0,
            18.0
          ],
          [
            18.0,
            105.0
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
        "text": "Liquidity score: 99.9 — Strong",
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
    "liq_subtitle": "Longer-term trading access stands above peers, but the latest volume pullback keeps the near-term picture balanced.",
    "market_comparison_title": "How You Compare to the Market",
    "market_comparison_subtitle": "Context relative to market, sector, and peer medians.",
    "perf_title": "Stock Performance",
    "perf_subtitle": "Recent performance is weaker than peers and the market, with the stock down 2.7% over one month.",
    "perf_insight": "Recent performance is lagging, with a 1M return of -2.7% compared with peers at -13.2% and the market at -1.8%. That matters because weaker price action is not being offset by stronger momentum, even as broader market moves explain 58.7% of the tape.",
    "drivers_title": "What Moves Your Stock Price?",
    "drivers_subtitle": "Broader market moves are the main influence on trading, with market factors accounting for 58.7% of the tape.",
    "drivers_strip": [
      {
        "title": "Current Driver (Last 5 Days)",
        "text": "Over the last 5 trading days, moves are mainly market-driven, accounting for about 58.7% of price changes. Other influences are sector 11.9%, and company-specific 29.3%."
      },
      {
        "title": "Driver Mix",
        "text": "Based on the last 5 trading days, current mix is market 58.7%, sector 11.9%, and company-specific 29.3%."
      },
      {
        "title": "Monthly Trend",
        "text": "The driver mix has been consistently market-driven across Jan to Mar."
      }
    ],
    "drivers_pie_title": "Current Driver Mix (Last 5 Days)",
    "drivers_pie_note": "Based on the last 5 trading days, current split is market 58.7%, sector 11.9%, and company-specific 29.3%.",
    "lead_lag_title": "",
    "lead_lag_note": "",
    "rolling_title": "Monthly Driver Shift",
    "rolling_latest_label": "Latest: {period}",
    "rolling_note": "Each bar shows the monthly split between market-, sector-, and company-driven moves.",
    "drivers_bottom_line": "This matters because the stock is trading mainly with wider market moves, while 1D average volume is 21.9% below the 1M average, leaving conditions balanced rather than especially strong.",
    "drivers_wtd_title": "Key Reads",
    "drivers_wtd_list": [
      "Main driver now: broader market moves are setting the tape, accounting for 58.7% of recent price action.",
      "Monthly change: the pattern has stayed market-led from January through March, so this looks persistent rather than temporary."
    ],
    "regime_title": "Market State",
    "regime_subtitle": "The market is the main driver of the current tape, pointing to a broader risk backdrop rather than a company-specific move.",
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
    "exec_check_subtitle": "Combines the final continuous-session displayed book before close, trade-size stress tests based on Apr 1, 2025 to Apr 1, 2026 (241 trading days • 12,454,732 trades), large sell-side orders observed today, and intraday spread/depth during the continuous trading session.",
    "order_book_title": "Order Book Depth (Available Liquidity)",
    "order_book_note": "Depth shown is based on top 10 bid and top 10 ask levels.",
    "peer_capacity_title": "Peer Capacity Context",
    "peer_capacity_note": "Immediate displayed depth broadly matches the stronger monthly liquidity read.",
    "impact_summary_title": "Estimated Price Impact (Sell Orders)",
    "impact_summary_subtitle": "Approximate price impact (%) for sell orders.",
    "exec_check_insight": "Displayed liquidity looks orderly, with top-10 bid depth at 1.06x ask depth and a 3-tick spread. That supports the view that execution conditions remain balanced.",
    "trader_composition_title": "Who's Trading Your Stock?",
    "trader_composition_subtitle": "Shows whether trading is mostly retail-like, institution-like, mixed, or unclassified.",
    "trader_retail_threshold": "Retail-like flow",
    "trader_mixed_threshold": "Mixed flow",
    "trader_instit_threshold": "Institution-like flow",
    "peer_trader_title": "Peer Comparison: Trader Mix",
    "peer_trader_subtitle": "How the trader mix compares with peers.",
    "price_moving_title": "Which Trades Move the Price?",
    "price_moving_subtitle": "Price-moving trades are 38.7% of total trades.",
    "intraday_title": "When Does Trading Happen?",
    "intraday_subtitle": "Displayed liquidity is balanced at the top of book, supporting orderly day-to-day trading.",
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
    "intraday_insight": "Session split is open 3.6%, continuous 82.9%, and close 9.0%. Current trading concentration score is 0.103.",
    "short_title": "Short Selling & Lending",
    "short_subtitle": "Current trading conditions look driven more by market direction than by short-led pressure.",
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
    "exec_subtitle": "Liquidity is balanced overall: longer-term peer standing is good, while near-term flow and price performance are less supportive.",
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
        "value": "99.9/100",
        "sub": "Peer median 95.6 (+4.3 pts)",
        "interp": {
          "text": "Strong",
          "cls": "interpretation-good",
          "icon": "◆"
        }
      },
      {
        "title": "Volume vs Peers",
        "value": "HK$11.7B",
        "sub": "Peer median HK$913.1M",
        "interp": {
          "text": "Strong",
          "cls": "interpretation-good",
          "icon": "◆"
        }
      },
      {
        "title": "Spread",
        "value": "0.09%",
        "sub": "1.05 ticks; peers 0.34%",
        "interp": {
          "text": "Tighter",
          "cls": "interpretation-good",
          "icon": "◆"
        }
      }
    ],
    "liq_insight": "Liquidity is balanced overall, with a 6M score of 99.9 compared with a peer median of 95.6 but 1D average volume down 21.9% from the 1M average. That matters because structural access is good, while near-term trading activity is lighter. Displayed conditions remain orderly, with top-10 bid depth at 1.06x ask depth and a 3-tick spread, which supports day-to-day execution.",
    "perf_badge": "Context",
    "exec_check_tiles": [
      {
        "title": "Mid Price",
        "value": "496.300",
        "note": "final continuous-session displayed book before close",
        "color": "text-white"
      },
      {
        "title": "Spread",
        "value": "0.12%",
        "note": "3.00 ticks",
        "color": "text-slate-300"
      },
      {
        "title": "Depth",
        "value": "1.06x",
        "note": "Bid depth / ask depth on displayed top-10 levels",
        "color": "text-slate-300"
      }
    ],
    "impact_summary_cards": [
      {
        "title": "~S$100K sell",
        "text": "Estimated impact ~-0.06% with 100.0% fill.",
        "cls": "ok"
      },
      {
        "title": "S$1.0M sell",
        "text": "Estimated impact ~-0.06% with 100.0% fill.",
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
        "value": "100",
        "suffix": "/100",
        "bar_pct": 100,
        "color_value": "text-emerald-400",
        "color_bar": "bg-emerald-500",
        "subtext": "Rank 4/2580",
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
        "subtext": "0.09% • 1.05 ticks vs peers 0.34%",
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
        "value": "11.7B",
        "value_prefix": "HK$",
        "suffix": "",
        "bar_pct": 60,
        "color_value": "text-emerald-400",
        "color_bar": "bg-emerald-500",
        "subtext": "Peer median HK$913.1M",
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
        "value": "58.7",
        "suffix": "market",
        "bar_pct": 59,
        "color_value": "text-amber-400",
        "color_bar": "bg-amber-500",
        "subtext": "Sector 11.9% • Company 29.3%",
        "interpretation": {
          "text": "Market",
          "cls": "interpretation-neutral",
          "icon": "◆"
        }
      }
    ],
    "exec_takeaways": [
      "Longer-term liquidity is holding up well relative to peers, with a 6M liquidity score of 99.9 compared with a peer median of 95.6. That matters because structural trading access remains competitive for the company’s size.",
      "Recent flow is lighter, with 1D average volume down 21.9% from the 1M average. That matters because day-to-day access is less robust than the recent monthly average.",
      "top-10 bid depth is 1.06x ask depth; spread is 3 ticks. Immediate displayed depth broadly matches the stronger monthly liquidity read. Current driver: Market at 58.7%. Broader market or sector moves still explain a meaningful part of the tape, so the stock is not trading on company news alone."
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
      "overall": "6M liquidity is strong: score 99.9 vs peer median 95.6 (+4.3 pts). 1D average volume down -21.9% from 1M. Recent flow does not show a clear deterioration from the monthly baseline.",
      "strengths": [
        "6M score 99.9 vs peer median 95.6 (+4.3 pts)."
      ],
      "concerns": [
        "1D average volume down -21.9% from 1M."
      ],
      "peer_context": "Primary-period score gap vs peers: +4.3 pts."
    },
    "market_comparison": {
      "returns": {
        "insight": "6M return is -23.0%, better than sector, but worse than market and peers, which shows price performance is mixed across comparison groups.",
        "vs_market": "Worse than market: -23.0% vs market 9.7%.",
        "vs_sector": "Better than sector: -23.0% vs sector -26.8%.",
        "vs_peers": "Worse than peers: -23.0% vs peers -11.3%."
      },
      "adv": {
        "insight": "ADV is HK$11.7B, better than market, sector, and peers, which supports stronger day-to-day trading size than comparable names.",
        "vs_market": "Better than market: HK$11.7B vs market HK$230.0K.",
        "vs_sector": "Better than sector: HK$11.7B vs sector HK$6.1M.",
        "vs_peers": "Better than peers: HK$11.7B vs peers HK$913.1M."
      },
      "spread": {
        "insight": "Spread is 0.09%, better than market, sector, and peers, which keeps trading costs more competitive than comparable names.",
        "vs_market": "Better than market: 0.09% vs market 2.62%.",
        "vs_sector": "Better than sector: 0.09% vs sector 0.93%.",
        "vs_peers": "Better than peers: 0.09% vs peers 0.34%."
      },
      "turnover_ratio": {
        "insight": "Turnover ratio is 0.32%, better than market and sector, but worse than peers, which shows turnover is mixed across comparison groups.",
        "vs_market": "Better than market: 0.32% vs market 0.09%.",
        "vs_sector": "Better than sector: 0.32% vs sector 0.25%.",
        "vs_peers": "Worse than peers: 0.32% vs peers 1.48%."
      },
      "volatility": {
        "insight": "Volatility is 29.81%, better than market, sector, and peers, which suggests day-to-day price swings are more contained than comparable names.",
        "vs_market": "Better than market: 29.81% vs market 59.70%.",
        "vs_sector": "Better than sector: 29.81% vs sector 72.91%.",
        "vs_peers": "Better than peers: 29.81% vs peers 152.92%."
      },
      "trades": {
        "insight": "Trades is 48446, better than market, sector, and peers, which supports more fully reflective of day-to-day access day-to-day activity than comparable names.",
        "vs_market": "Better than market: 48446 vs market 22.",
        "vs_sector": "Better than sector: 48446 vs sector 384.",
        "vs_peers": "Better than peers: 48446 vs peers 9468."
      },
      "amihud": {
        "insight": "Price impact is 9.38e-13, better than market, sector, and peers, which suggests trades move price less than comparable names.",
        "vs_market": "Better than market: 9.38e-13 vs market 4.48e-08.",
        "vs_sector": "Better than sector: 9.38e-13 vs sectoe-09.",
        "vs_peers": "Better than peers: 9.38e-13 vs peers 7.47e-11."
      }
    },
    "performance": {
      "overall": "Recent returns are weak relative to the market, with the stock down 2.7% over one month compared with the market down 1.8%. Liquidity gives a mixed read on that move because the six-month liquidity score of 99.9 sits 4.3 points above the peer median, but one-day average volume is 21.9% below the monthly average, so the pullback is not being reinforced by stronger trading activity. The move looks more broad-market than company-specific because market factors currently explain 58.7% of trading.",
      "conclusion": "This looks mainly broad-market driven, with mixed liquidity signals rather than a clear company-specific deterioration."
    },
    "drivers": {
      "overall": "The stock is being driven mainly by the market now, with 58.7% of recent price moves tied to broader conditions. That matters because the tape is responding more to external sentiment than to company-specific developments.",
      "beta": "The current pattern looks mixed rather than one-sided because average volume is 21.9% below the 1M average, yet displayed depth remains balanced with top-10 bid depth at 1.06x ask depth and a 3-tick spread. That points to orderly trading even as activity has pulled back.",
      "rolling_change": "The market-led pattern has held through January, February, and March, so the current driver mix looks established rather than short-lived. That consistency helps explain why recent moves have tracked the wider market more than stock-specific factors."
    },
    "regime": {
      "overall": "The stock is trading in a higher-volatility backdrop, and that matters because price conditions are less steady even though underlying liquidity remains respectable for its size with a 6M score of 99.9 compared with a peer median of 95.6.",
      "current": "Current market state is High Volatility. The market has been in this state about 49.8% of the time. Based on 251 trading days relative to the 252-day target.",
      "transitions": "This state looks fairly persistent, with a typical run length of about 6.5 days, so the backdrop appears established even if the evidence is mixed.",
      "trading_implications": "Trading conditions look workable but less steady, because displayed depth is broadly balanced with top-10 bid depth at 1.06x ask depth and a 3-tick spread, while 1D average volume is 21.9% below the 1M average."
    },
    "execution": {
      "overall": "Displayed liquidity looks balanced right now because top-10 bid depth is slightly stronger than ask depth at 1.06x and the spread is 3 ticks. That matters because the book is not showing a clear near-term imbalance against the broader liquidity profile.",
      "concern": "The main watchpoint is lighter recent activity, with 1D average volume down 21.9% from the 1M average. That matters because a balanced book can still feel thinner if trading interest stays below the recent monthly average.",
      "peer_context": "The book supports the broader picture rather than contradicting it, as balanced near-term depth sits alongside a six-month liquidity score of 99.9 compared with a peer median of 95.6. That matters because current displayed depth is consistent with liquidity that screens slightly ahead of peers, even if recent flow has pulled back."
    },
    "trader_composition": {
      "overall": "Flow looks mixed by trade count and value, so participation is broad but the largest value still sits with institution-like trades.",
      "retail_heavy": "Retail-like trades account for 48.5% of trade count but only 5.9% of trade value, while institution-like trades are 17.6% of count and 80.9% of value. That split shows many smaller tickets alongside a much larger share of value from institution-like activity, which keeps the flow picture mixed.",
      "institutional_gap": "Institution-like trades carry 80.9% of trade value from 17.6% of trade count. That points to large-value participation being present even though it does not dominate the number of trades.",
      "peer_comparison": "The mix looks mixed rather than unusual, with broad participation by count and a clear concentration of value in institution-like trades relative to peers."
    },
    "price_moving": {
      "overall": "Price-moving activity is present, but the broader read stays mixed because trade count and trade value point in different directions. Retail-like trades lead a large share of count at 48.5%, while institution-like trades account for 80.9% of value. That makes the price signal less one-sided because participation is broad but value is concentrated. The cleaner read is in value rather than count, with institution-like trades carrying most trade value.",
      "interpretation": "",
      "asymmetry": ""
    },
    "short_selling": {
      "overall": "Short-selling data is unavailable for this report.",
      "level": "N/A",
      "correlation": "N/A",
      "trend": "The short-selling trend is mixed rather than clearly rising or falling. With the stock down 2.7% over one month, compared with peers down 13.2% and the market down 1.8%, short activity does not stand out as the factor changing the broader liquidity picture.",
      "peaks": "N/A"
    },
    "intraday": {
      "overall": "Session split is open 3.6%, continuous 82.9%, and close 9.0%. Current trading concentration score is 0.103.",
      "hhi_interpretation": "Trading is spread through the day rather than packed into a few intervals, with a concentration score of 0.103. That supports a steadier intraday flow profile.",
      "best_times": "The continuous session is the clearest source of liquidity because it accounts for the large majority of activity. That matters more than the open or close for judging day-to-day dependability.",
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
        "700",
        "2513",
        "100",
        "3317",
        "20",
        "9660",
        "9880",
        "6636",
        "1384"
      ],
      "scores": [
        99.88372093023256,
        97.28682170542635,
        93.87596899224806,
        75.93023255813954,
        99.18604651162791,
        99.53488372093024,
        99.14728682170542,
        82.24806201550388,
        78.02325581395348
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
        11657604959.75,
        1191510500.0,
        934828595.0,
        27739664.999999996,
        1229947250.15,
        1138483332.2000003,
        891378165.0,
        213361200.0,
        53475900.0
      ],
      "total": 2580
    },
    "market_comparison": {
      "sector_name": "Digital Solution Services",
      "sector_count": 68,
      "market_count": 2580,
      "company": {
        "volatility": 0.29807628345308473,
        "adv": 11657604959.75,
        "spread_pct": 0.0008504994635808207,
        "turnover_ratio": 0.0032045311895312844,
        "amihud": 9.37961614767253e-13,
        "trades": 48446.5
      },
      "market": {
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.7386526036751957,
          "median": 0.5970209614848415,
          "min": 0.026427624109509794,
          "max": 33.692481563841405,
          "p5": 0.22460415844132745,
          "p95": 1.5579883557822423,
          "count": 2577
        },
        "adv": {
          "direction": "higher_is_better",
          "mean": 64659755.65554748,
          "median": 230020.0,
          "min": 0.0,
          "max": 13711894082.25,
          "p5": 0.0,
          "p95": 234015662.95,
          "count": 2580
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.04163012594350401,
          "median": 0.02621193892215143,
          "min": 0.000558678699550006,
          "max": 0.5518881068100528,
          "p5": 0.0013599734464332847,
          "p95": 0.13349769294357264,
          "count": 2580
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.003756513865876967,
          "median": 0.0008938439831340969,
          "min": 0.0,
          "max": 0.2066663157894737,
          "p5": 0.0,
          "p95": 0.015078595290963708,
          "count": 2559
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 6.319234477340354e-07,
          "median": 4.4808649144690914e-08,
          "min": 0.0,
          "max": 4.7054394880481924e-05,
          "p5": 4.551910502743741e-11,
          "p95": 3.4296029247024704e-06,
          "count": 2577
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 1120.3029069767442,
          "median": 21.5,
          "min": 0.0,
          "max": 113413.5,
          "p5": 0.0,
          "p95": 6007.299999999996,
          "count": 2580
        }
      },
      "sector": {
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.9068981458401691,
          "median": 0.72910942167139,
          "min": 0.13870072542329476,
          "max": 4.8579185071615,
          "p5": 0.3245361867936206,
          "p95": 1.808448162899817,
          "count": 68
        },
        "adv": {
          "direction": "higher_is_better",
          "mean": 283437537.3998824,
          "median": 6128532.9906000085,
          "min": 0.0,
          "max": 11657604959.75,
          "p5": 2278.15,
          "p95": 1067204174.18,
          "count": 68
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.02818273891803335,
          "median": 0.009282952484715695,
          "min": 0.0008504994635808207,
          "max": 0.2000000000000001,
          "p5": 0.0012195702120903944,
          "p95": 0.1084408509553371,
          "count": 68
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.005504293762442461,
          "median": 0.002462161594318383,
          "min": 0.0,
          "max": 0.034522204184883824,
          "p5": 5.85586745208426e-06,
          "p95": 0.020490916299762463,
          "count": 67
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 2.765369490215249e-07,
          "median": 2.491505150497272e-09,
          "min": 0.0,
          "max": 3.5740560344632717e-06,
          "p5": 2.0343603666265617e-11,
          "p95": 1.7135038927199205e-06,
          "count": 68
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 2836.345588235294,
          "median": 383.5,
          "min": 0.0,
          "max": 48446.5,
          "p5": 1.35,
          "p95": 13894.974999999999,
          "count": 68
        }
      },
      "peers": {
        "adv": {
          "direction": "higher_is_better",
          "mean": 710090575.91875,
          "median": 913103380.0,
          "min": 27739664.999999996,
          "max": 1229947250.15,
          "p5": 36747347.25,
          "p95": 1216494387.5975,
          "count": 8
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 10148.0625,
          "median": 9468.0,
          "min": 858.0,
          "max": 25190.0,
          "p5": 1047.0,
          "p95": 21892.124999999996,
          "count": 8
        },
        "volatility": {
          "direction": "lower_is_better",
          "mean": 1.6937004224581522,
          "median": 1.529207087480033,
          "min": 0.48476544525707727,
          "max": 4.8579185071615,
          "p5": 0.5024381581860369,
          "p95": 3.90210469708481,
          "count": 8
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.0037214600049294815,
          "median": 0.003434884098137162,
          "min": 0.0010326841517801367,
          "max": 0.007222652911964113,
          "p5": 0.0011042198260408035,
          "p95": 0.00678652423520817,
          "count": 8
        },
        "spread_ticks": {
          "direction": "neutral",
          "mean": 4.900964924512044,
          "median": 3.035356789603082,
          "min": 1.0087700830945026,
          "max": 11.355833333333333,
          "p5": 1.020931170017845,
          "p95": 10.647798515981734,
          "count": 8
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 3.86260450504852e-10,
          "median": 7.467054587086152e-11,
          "min": 1.4752416743956313e-11,
          "max": 1.4097449733644303e-09,
          "p5": 1.5211800820321657e-11,
          "p95": 1.2935712547349581e-09,
          "count": 8
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.01435011566584006,
          "median": 0.014783056002081437,
          "min": 0.0032755139608956043,
          "max": 0.0263754850851654,
          "p5": 0.0038294584418287593,
          "p95": 0.024324686417364454,
          "count": 8
        }
      }
    },
    "returns": [
      {
        "horizon": "1M",
        "stock": -0.027228207639569013,
        "market": -0.018357235943285755,
        "sector": -0.09825595390468367,
        "peers": -0.13229935959594608
      },
      {
        "horizon": "3M",
        "stock": -0.16747694886839892,
        "market": 0.07290698342020385,
        "sector": -0.154319410902806,
        "peers": 0.02215748748942592
      },
      {
        "horizon": "6M",
        "stock": -0.23007751937984433,
        "market": 0.09678581532761465,
        "sector": -0.2684608373570958,
        "peers": -0.11260388046995917
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
      "share_market": 0.5873466128259263,
      "share_sector": 0.11916696364490169,
      "share_idio": 0.293486423529172,
      "beta_market": 2.760965628269651,
      "beta_sector": -0.3528587824100249,
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
            "median": 0.5873466128259263,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "58.7%",
            "display_range": null,
            "display_text": "58.7%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "share_pct",
            "value_pct": 58.7,
            "plain_english": "Market explains about 58.7% of price moves in the current state."
          },
          "sector_share": {
            "median": 0.11916696364490169,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "11.9%",
            "display_range": null,
            "display_text": "11.9%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "share_pct",
            "value_pct": 11.9,
            "plain_english": "Sector explains about 11.9% of price moves in the current state."
          },
          "company_share": {
            "median": 0.293486423529172,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "29.3%",
            "display_range": null,
            "display_text": "29.3%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "share_pct",
            "value_pct": 29.3,
            "plain_english": "Company-specific explains about 29.3% of price moves in the current state."
          },
          "basis": "current_state"
        },
        "current_sensitivities": {
          "beta_market": {
            "median": 2.760965628269651,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "2.76",
            "display_range": null,
            "display_text": "2.76",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "beta",
            "strength_label": "High",
            "plain_english": "High market link: a 1% market move has lined up with about a 2.76% stock move in the same direction in this state.",
            "value_num": 2.76
          },
          "beta_stock_lag": {
            "median": -1.5563563686849244,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "-1.56",
            "display_range": null,
            "display_text": "-1.56",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "lag_beta",
            "value_num": -1.56
          },
          "beta_sector": {
            "median": -0.3528587824100249,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "-0.35",
            "display_range": null,
            "display_text": "-0.35",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "beta",
            "strength_label": "Modest",
            "plain_english": "Modest sector link: a 1% sector move has lined up with about a 0.35% stock move in the opposite direction in this state.",
            "value_num": -0.35
          },
          "beta_market_lag": {
            "median": 1.1978885481331067,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "1.20",
            "display_range": null,
            "display_text": "1.20",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "lag_beta",
            "value_num": 1.2
          },
          "beta_sector_lag": {
            "median": 0.26062385461864057,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "0.26",
            "display_range": null,
            "display_text": "0.26",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "lag_beta",
            "value_num": 0.26
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
            "period_label": "2025-03-18 to 2025-03-31",
            "n_obs": 10,
            "partial_month": true,
            "dominant_driver": "market",
            "dominant_driver_label": "Market",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.6033454695905471,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "60.3%",
              "display_range": null,
              "display_text": "60.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 10 trading days.",
              "kind": "share_pct",
              "value_pct": 60.3,
              "plain_english": "Market explains about 60.3% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.6033454695905471,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "60.3%",
                "display_range": null,
                "display_text": "60.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 10 trading days.",
                "kind": "share_pct",
                "value_pct": 60.3,
                "plain_english": "Market explains about 60.3% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.1571934244801925,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "15.7%",
                "display_range": null,
                "display_text": "15.7%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 10 trading days.",
                "kind": "share_pct",
                "value_pct": 15.7,
                "plain_english": "Sector explains about 15.7% of price moves in the current state."
              },
              "company_share": {
                "median": 0.23946110592926032,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "23.9%",
                "display_range": null,
                "display_text": "23.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 10 trading days.",
                "kind": "share_pct",
                "value_pct": 23.9,
                "plain_english": "Company-specific explains about 23.9% of price moves in the current state."
              }
            },
            "summary": "Mar: Still clearly market-driven."
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
              "median": 0.5824940664357009,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "58.2%",
              "display_range": null,
              "display_text": "58.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
              "kind": "share_pct",
              "value_pct": 58.2,
              "plain_english": "Market explains about 58.2% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.5824940664357009,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "58.2%",
                "display_range": null,
                "display_text": "58.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
                "kind": "share_pct",
                "value_pct": 58.2,
                "plain_english": "Market explains about 58.2% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.21144632014109754,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "21.1%",
                "display_range": null,
                "display_text": "21.1%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
                "kind": "share_pct",
                "value_pct": 21.1,
                "plain_english": "Sector explains about 21.1% of price moves in the current state."
              },
              "company_share": {
                "median": 0.20605961342320148,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "20.6%",
                "display_range": null,
                "display_text": "20.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
                "kind": "share_pct",
                "value_pct": 20.6,
                "plain_english": "Company-specific explains about 20.6% of price moves in the current state."
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
            "dominant_driver": "market",
            "dominant_driver_label": "Market",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.5949249584655482,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "59.5%",
              "display_range": null,
              "display_text": "59.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 59.5,
              "plain_english": "Market explains about 59.5% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.5949249584655482,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "59.5%",
                "display_range": null,
                "display_text": "59.5%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 59.5,
                "plain_english": "Market explains about 59.5% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.029464679552774053,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "2.9%",
                "display_range": null,
                "display_text": "2.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 2.9,
                "plain_english": "Sector explains about 2.9% of price moves in the current state."
              },
              "company_share": {
                "median": 0.3756103619816778,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "37.6%",
                "display_range": null,
                "display_text": "37.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 37.6,
                "plain_english": "Company-specific explains about 37.6% of price moves in the current state."
              }
            },
            "summary": "May: Mostly market-driven."
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
              "median": 0.5396038791122373,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "54.0%",
              "display_range": null,
              "display_text": "54.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 54.0,
              "plain_english": "Market explains about 54.0% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.5396038791122373,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "54.0%",
                "display_range": null,
                "display_text": "54.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 54.0,
                "plain_english": "Market explains about 54.0% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.12963441923498764,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "13.0%",
                "display_range": null,
                "display_text": "13.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 13.0,
                "plain_english": "Sector explains about 13.0% of price moves in the current state."
              },
              "company_share": {
                "median": 0.3307617016527751,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "33.1%",
                "display_range": null,
                "display_text": "33.1%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 33.1,
                "plain_english": "Company-specific explains about 33.1% of price moves in the current state."
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
              "median": 0.5130594907073394,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "51.3%",
              "display_range": null,
              "display_text": "51.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 51.3,
              "plain_english": "Market explains about 51.3% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.5130594907073394,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "51.3%",
                "display_range": null,
                "display_text": "51.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 51.3,
                "plain_english": "Market explains about 51.3% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.10010207471072902,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "10.0%",
                "display_range": null,
                "display_text": "10.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 10.0,
                "plain_english": "Sector explains about 10.0% of price moves in the current state."
              },
              "company_share": {
                "median": 0.3868384345819316,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "38.7%",
                "display_range": null,
                "display_text": "38.7%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 38.7,
                "plain_english": "Company-specific explains about 38.7% of price moves in the current state."
              }
            },
            "summary": "Jul: Mostly market-driven."
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
              "median": 0.5504893490156526,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "55.0%",
              "display_range": null,
              "display_text": "55.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 55.0,
              "plain_english": "Market explains about 55.0% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.5504893490156526,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "55.0%",
                "display_range": null,
                "display_text": "55.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 55.0,
                "plain_english": "Market explains about 55.0% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.12436420067390351,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "12.4%",
                "display_range": null,
                "display_text": "12.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 12.4,
                "plain_english": "Sector explains about 12.4% of price moves in the current state."
              },
              "company_share": {
                "median": 0.32514645031044387,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "32.5%",
                "display_range": null,
                "display_text": "32.5%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 32.5,
                "plain_english": "Company-specific explains about 32.5% of price moves in the current state."
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
            "dominant_driver": "market",
            "dominant_driver_label": "Market",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.753832783944698,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "75.4%",
              "display_range": null,
              "display_text": "75.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 75.4,
              "plain_english": "Market explains about 75.4% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.753832783944698,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "75.4%",
                "display_range": null,
                "display_text": "75.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 75.4,
                "plain_english": "Market explains about 75.4% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.013465087696973525,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "1.3%",
                "display_range": null,
                "display_text": "1.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 1.3,
                "plain_english": "Sector explains about 1.3% of price moves in the current state."
              },
              "company_share": {
                "median": 0.23270212835832846,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "23.3%",
                "display_range": null,
                "display_text": "23.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 23.3,
                "plain_english": "Company-specific explains about 23.3% of price moves in the current state."
              }
            },
            "summary": "Sep: Still clearly market-driven."
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
              "median": 0.6182546378382336,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "61.8%",
              "display_range": null,
              "display_text": "61.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 61.8,
              "plain_english": "Market explains about 61.8% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.6182546378382336,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "61.8%",
                "display_range": null,
                "display_text": "61.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 61.8,
                "plain_english": "Market explains about 61.8% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.09463925102098497,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "9.5%",
                "display_range": null,
                "display_text": "9.5%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 9.5,
                "plain_english": "Sector explains about 9.5% of price moves in the current state."
              },
              "company_share": {
                "median": 0.2871061111407814,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "28.7%",
                "display_range": null,
                "display_text": "28.7%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 28.7,
                "plain_english": "Company-specific explains about 28.7% of price moves in the current state."
              }
            },
            "summary": "Oct: Still clearly market-driven."
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
              "median": 0.5405113087070612,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "54.1%",
              "display_range": null,
              "display_text": "54.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 54.1,
              "plain_english": "Market explains about 54.1% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.5405113087070612,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "54.1%",
                "display_range": null,
                "display_text": "54.1%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 54.1,
                "plain_english": "Market explains about 54.1% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.18553186139980907,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "18.6%",
                "display_range": null,
                "display_text": "18.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 18.6,
                "plain_english": "Sector explains about 18.6% of price moves in the current state."
              },
              "company_share": {
                "median": 0.2739568298931298,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "27.4%",
                "display_range": null,
                "display_text": "27.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 27.4,
                "plain_english": "Company-specific explains about 27.4% of price moves in the current state."
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
              "median": 0.6403231652224993,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "64.0%",
              "display_range": null,
              "display_text": "64.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
              "kind": "share_pct",
              "value_pct": 64.0,
              "plain_english": "Market explains about 64.0% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.6403231652224993,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "64.0%",
                "display_range": null,
                "display_text": "64.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
                "kind": "share_pct",
                "value_pct": 64.0,
                "plain_english": "Market explains about 64.0% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.08517003392563319,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "8.5%",
                "display_range": null,
                "display_text": "8.5%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
                "kind": "share_pct",
                "value_pct": 8.5,
                "plain_english": "Sector explains about 8.5% of price moves in the current state."
              },
              "company_share": {
                "median": 0.27450680085186746,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "27.5%",
                "display_range": null,
                "display_text": "27.5%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
                "kind": "share_pct",
                "value_pct": 27.5,
                "plain_english": "Company-specific explains about 27.5% of price moves in the current state."
              }
            },
            "summary": "Dec: Still clearly market-driven."
          },
          {
            "month_key": "2026-01",
            "month_label": "January 2026",
            "month_short_label": "Jan",
            "period_label": "2026-01-02 to 2026-01-30",
            "n_obs": 21,
            "partial_month": true,
            "dominant_driver": "market",
            "dominant_driver_label": "Market",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.694549906155789,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "69.5%",
              "display_range": null,
              "display_text": "69.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 69.5,
              "plain_english": "Market explains about 69.5% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.694549906155789,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "69.5%",
                "display_range": null,
                "display_text": "69.5%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 69.5,
                "plain_english": "Market explains about 69.5% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.036187617320780165,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "3.6%",
                "display_range": null,
                "display_text": "3.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 3.6,
                "plain_english": "Sector explains about 3.6% of price moves in the current state."
              },
              "company_share": {
                "median": 0.2692624765234308,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "26.9%",
                "display_range": null,
                "display_text": "26.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 26.9,
                "plain_english": "Company-specific explains about 26.9% of price moves in the current state."
              }
            },
            "summary": "Jan: Still clearly market-driven."
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
              "median": 0.5214415089368656,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "52.1%",
              "display_range": null,
              "display_text": "52.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
              "kind": "share_pct",
              "value_pct": 52.1,
              "plain_english": "Market explains about 52.1% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.5214415089368656,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "52.1%",
                "display_range": null,
                "display_text": "52.1%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
                "kind": "share_pct",
                "value_pct": 52.1,
                "plain_english": "Market explains about 52.1% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.07933649311834134,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "7.9%",
                "display_range": null,
                "display_text": "7.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
                "kind": "share_pct",
                "value_pct": 7.9,
                "plain_english": "Sector explains about 7.9% of price moves in the current state."
              },
              "company_share": {
                "median": 0.399221997944793,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "39.9%",
                "display_range": null,
                "display_text": "39.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
                "kind": "share_pct",
                "value_pct": 39.9,
                "plain_english": "Company-specific explains about 39.9% of price moves in the current state."
              }
            },
            "summary": "Feb: Mostly market-driven."
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
              "median": 0.4826618360278339,
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
              "plain_english": "Market explains about 48.3% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.4826618360278339,
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
                "plain_english": "Market explains about 48.3% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.31367758228096326,
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
                "plain_english": "Sector explains about 31.4% of price moves in the current state."
              },
              "company_share": {
                "median": 0.2036605816912028,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "20.4%",
                "display_range": null,
                "display_text": "20.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 20.4,
                "plain_english": "Company-specific explains about 20.4% of price moves in the current state."
              }
            },
            "summary": "Mar: Mostly market-driven."
          }
        ],
        "regimes": [
          {
            "id": 0,
            "label": "Low Volatility",
            "pct_time": 0.5020080321285141,
            "expected_duration_days": 6.944444444444445,
            "current_probability": 0.0,
            "n_days_effective": 125.0,
            "volatility": {
              "median": 0.013175974907723695,
              "low": 0.013175974907723695,
              "high": 0.013175974907723695
            },
            "volatility_label": "Low Volatility",
            "current_probability_display": 0.0
          },
          {
            "id": 1,
            "label": "High Volatility",
            "pct_time": 0.4979919678714859,
            "expected_duration_days": 6.526315789473684,
            "current_probability": 1.0,
            "n_days_effective": 124.0,
            "volatility": {
              "median": 0.022239127076782546,
              "low": 0.022239127076782546,
              "high": 0.022239127076782546
            },
            "volatility_label": "High Volatility",
            "current_probability_display": null
          }
        ],
        "transitions": {
          "mean": [
            [
              0.856,
              0.144
            ],
            [
              0.14634146341463414,
              0.8536585365853658
            ]
          ],
          "low": [],
          "high": [],
          "counts": [
            [
              107.0,
              18.0
            ],
            [
              18.0,
              105.0
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
          "market_link_display": "2.76",
          "sector_link_display": "-0.35",
          "market_link_explainer": "High market link. A 1% market move has lined up with about a 2.76% stock move in the same direction in this state. This is a point estimate from 251 trading days.",
          "sector_link_explainer": "Modest sector link. A 1% sector move has lined up with about a 0.35% stock move in the opposite direction in this state. This is a point estimate from 251 trading days.",
          "stock_persistence_display": "-1.56",
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "history_limited_note": "Read is based on 251 trading days versus the 252-day target."
        },
        "current_summary": {
          "regime_label": "High Volatility",
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "driver_share_pct": 58.7,
          "driver_share_display": "58.7%",
          "confidence_label": "High, limited history",
          "confidence_pct": 100.0,
          "display_confidence_pct": null,
          "confidence_note": "Based on 251 trading days relative to the 252-day target.",
          "history_days": 251,
          "history_limited": true,
          "volatility_label": "High Volatility",
          "lead_signal_text": "No stable lead signal.",
          "state_term": "state",
          "stay_probability": 0.8536585365853658,
          "effective_days": 124.0,
          "persistence_note": "This state looks more persistent, with a typical run length of about 6.5 days.",
          "expected_duration_days": 6.5
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
          "period_label": "2025-03-18 to 2025-03-31",
          "n_obs": 10,
          "partial_month": true,
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "regime_label": null,
          "summary": "Mar: Still clearly market-driven.",
          "share_market": 0.6033454695905471,
          "share_sector": 0.1571934244801925,
          "share_company": 0.23946110592926032,
          "share_market_display": "60.3%",
          "share_sector_display": "15.7%",
          "share_company_display": "23.9%",
          "dominant_share_display": "60.3%"
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
          "share_market": 0.5824940664357009,
          "share_sector": 0.21144632014109754,
          "share_company": 0.20605961342320148,
          "share_market_display": "58.2%",
          "share_sector_display": "21.1%",
          "share_company_display": "20.6%",
          "dominant_share_display": "58.2%"
        },
        {
          "month_key": "2025-05",
          "month_label": "May 2025",
          "month_short_label": "May",
          "period_label": "2025-05-02 to 2025-05-30",
          "n_obs": 20,
          "partial_month": true,
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "regime_label": null,
          "summary": "May: Mostly market-driven.",
          "share_market": 0.5949249584655482,
          "share_sector": 0.029464679552774053,
          "share_company": 0.3756103619816778,
          "share_market_display": "59.5%",
          "share_sector_display": "2.9%",
          "share_company_display": "37.6%",
          "dominant_share_display": "59.5%"
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
          "share_market": 0.5396038791122373,
          "share_sector": 0.12963441923498764,
          "share_company": 0.3307617016527751,
          "share_market_display": "54.0%",
          "share_sector_display": "13.0%",
          "share_company_display": "33.1%",
          "dominant_share_display": "54.0%"
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
          "summary": "Jul: Mostly market-driven.",
          "share_market": 0.5130594907073394,
          "share_sector": 0.10010207471072902,
          "share_company": 0.3868384345819316,
          "share_market_display": "51.3%",
          "share_sector_display": "10.0%",
          "share_company_display": "38.7%",
          "dominant_share_display": "51.3%"
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
          "share_market": 0.5504893490156526,
          "share_sector": 0.12436420067390351,
          "share_company": 0.32514645031044387,
          "share_market_display": "55.0%",
          "share_sector_display": "12.4%",
          "share_company_display": "32.5%",
          "dominant_share_display": "55.0%"
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
          "regime_label": null,
          "summary": "Sep: Still clearly market-driven.",
          "share_market": 0.753832783944698,
          "share_sector": 0.013465087696973525,
          "share_company": 0.23270212835832846,
          "share_market_display": "75.4%",
          "share_sector_display": "1.3%",
          "share_company_display": "23.3%",
          "dominant_share_display": "75.4%"
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
          "summary": "Oct: Still clearly market-driven.",
          "share_market": 0.6182546378382336,
          "share_sector": 0.09463925102098497,
          "share_company": 0.2871061111407814,
          "share_market_display": "61.8%",
          "share_sector_display": "9.5%",
          "share_company_display": "28.7%",
          "dominant_share_display": "61.8%"
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
          "share_market": 0.5405113087070612,
          "share_sector": 0.18553186139980907,
          "share_company": 0.2739568298931298,
          "share_market_display": "54.1%",
          "share_sector_display": "18.6%",
          "share_company_display": "27.4%",
          "dominant_share_display": "54.1%"
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
          "summary": "Dec: Still clearly market-driven.",
          "share_market": 0.6403231652224993,
          "share_sector": 0.08517003392563319,
          "share_company": 0.27450680085186746,
          "share_market_display": "64.0%",
          "share_sector_display": "8.5%",
          "share_company_display": "27.5%",
          "dominant_share_display": "64.0%"
        },
        {
          "month_key": "2026-01",
          "month_label": "January 2026",
          "month_short_label": "Jan",
          "period_label": "2026-01-02 to 2026-01-30",
          "n_obs": 21,
          "partial_month": true,
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "regime_label": null,
          "summary": "Jan: Still clearly market-driven.",
          "share_market": 0.694549906155789,
          "share_sector": 0.036187617320780165,
          "share_company": 0.2692624765234308,
          "share_market_display": "69.5%",
          "share_sector_display": "3.6%",
          "share_company_display": "26.9%",
          "dominant_share_display": "69.5%"
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
          "summary": "Feb: Mostly market-driven.",
          "share_market": 0.5214415089368656,
          "share_sector": 0.07933649311834134,
          "share_company": 0.399221997944793,
          "share_market_display": "52.1%",
          "share_sector_display": "7.9%",
          "share_company_display": "39.9%",
          "dominant_share_display": "52.1%"
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
          "share_market": 0.4826618360278339,
          "share_sector": 0.31367758228096326,
          "share_company": 0.2036605816912028,
          "share_market_display": "48.3%",
          "share_sector_display": "31.4%",
          "share_company_display": "20.4%",
          "dominant_share_display": "48.3%"
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
            "expected_duration_days": 6.944444444444445,
            "current_probability": 0.0,
            "n_days_effective": 125.0,
            "volatility": {
              "median": 0.013175974907723695,
              "low": 0.013175974907723695,
              "high": 0.013175974907723695
            },
            "volatility_label": "Low Volatility"
          },
          {
            "id": 1,
            "label": "High Volatility",
            "pct_time": 0.4979919678714859,
            "expected_duration_days": 6.526315789473684,
            "current_probability": 1.0,
            "n_days_effective": 124.0,
            "volatility": {
              "median": 0.022239127076782546,
              "low": 0.022239127076782546,
              "high": 0.022239127076782546
            },
            "volatility_label": "High Volatility"
          }
        ],
        "transitions": [
          [
            0.856,
            0.144
          ],
          [
            0.14634146341463414,
            0.8536585365853658
          ]
        ]
      }
    },
    "order_book": {
      "bids": [
        {
          "level": 1,
          "price": 496.0,
          "quantity": 6400.0,
          "value": 3174400.0
        },
        {
          "level": 2,
          "price": 495.8,
          "quantity": 9100.0,
          "value": 4511780.0
        },
        {
          "level": 3,
          "price": 495.6,
          "quantity": 11600.0,
          "value": 5748960.0
        },
        {
          "level": 4,
          "price": 495.4,
          "quantity": 12100.0,
          "value": 5994340.0
        },
        {
          "level": 5,
          "price": 495.2,
          "quantity": 16600.0,
          "value": 8220320.0
        },
        {
          "level": 6,
          "price": 495.0,
          "quantity": 40200.0,
          "value": 19899000.0
        },
        {
          "level": 7,
          "price": 494.8,
          "quantity": 30000.0,
          "value": 14844000.0
        },
        {
          "level": 8,
          "price": 494.6,
          "quantity": 15800.0,
          "value": 7814680.0
        },
        {
          "level": 9,
          "price": 494.4,
          "quantity": 16000.0,
          "value": 7910400.0
        },
        {
          "level": 10,
          "price": 494.2,
          "quantity": 18500.0,
          "value": 9142700.0
        }
      ],
      "asks": [
        {
          "level": 1,
          "price": 496.6,
          "quantity": 9000.0,
          "value": 4469400.0
        },
        {
          "level": 2,
          "price": 496.8,
          "quantity": 16700.0,
          "value": 8296560.0
        },
        {
          "level": 3,
          "price": 497.0,
          "quantity": 13200.0,
          "value": 6560400.0
        },
        {
          "level": 4,
          "price": 497.2,
          "quantity": 13800.0,
          "value": 6861360.0
        },
        {
          "level": 5,
          "price": 497.4,
          "quantity": 15800.0,
          "value": 7858920.0
        },
        {
          "level": 6,
          "price": 497.6,
          "quantity": 10600.0,
          "value": 5274560.0
        },
        {
          "level": 7,
          "price": 497.8,
          "quantity": 10000.0,
          "value": 4978000.0
        },
        {
          "level": 8,
          "price": 498.0,
          "quantity": 29300.0,
          "value": 14591400.0
        },
        {
          "level": 9,
          "price": 498.2,
          "quantity": 13800.0,
          "value": 6875160.0
        },
        {
          "level": 10,
          "price": 498.4,
          "quantity": 33700.0,
          "value": 16796080.0
        }
      ]
    },
    "execution_dynamic": {
      "snapshot": {
        "valid": true,
        "snapshot_time": "2026-04-01 07:59:59.773000000",
        "snapshot_basis": "last_continuous_session_snapshot",
        "snapshot_label": "final continuous-session displayed book before close",
        "snapshot_note": "Final continuous-session displayed book before close",
        "snapshot_mic": "XHKG",
        "mid_price": 496.3,
        "spread_pct": 0.0012089462018940616,
        "spread_ticks": 3.0,
        "tick_size": 0.2,
        "bid_depth_notional_top10": 87260580.0,
        "ask_depth_notional_top10": 82561840.0,
        "bid_ask_depth_ratio": 1.0569
      },
      "historical_trade_scenarios": {
        "valid": true,
        "requested_lookback_calendar_days": 365,
        "lookback_calendar_days": 365,
        "effective_calendar_days": 366,
        "history_limited": false,
        "trade_days_used": 241,
        "n_trades_used": 12454732,
        "first_trade_date": "2025-04-01",
        "last_trade_date": "2026-04-01",
        "window_label": "Apr 1, 2025 to Apr 1, 2026",
        "window_short_label": "Apr 1, 2025 to Apr 1, 2026",
        "trade_days_label": "241 trading days",
        "trade_count_label": "12,454,732 trades",
        "window_detail_label": "241 trading days • 12,454,732 trades",
        "history_note": "Trade-size percentiles use Apr 1, 2025 to Apr 1, 2026 history (241 trading days • 12,454,732 trades).",
        "scenarios": [
          {
            "key": "p90",
            "label": "90th percentile trade",
            "quantile": 0.9,
            "trade_notional": 444150.0,
            "impact_pct": -0.000604,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 0.51,
            "pct_of_adv": 0.0
          },
          {
            "key": "p95",
            "label": "95th percentile trade",
            "quantile": 0.95,
            "trade_notional": 765000.0,
            "impact_pct": -0.000604,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 0.88,
            "pct_of_adv": 0.01
          },
          {
            "key": "p99_99",
            "label": "99.99th percentile trade",
            "quantile": 0.9999,
            "trade_notional": 35013627.45,
            "impact_pct": -0.001798,
            "filled_pct": 100.0,
            "levels_consumed": 6,
            "pct_of_bid_depth": 40.13,
            "pct_of_adv": 0.27
          }
        ]
      },
      "l3_sell_order_scenarios": {
        "valid": true,
        "trade_date": "2026-04-01",
        "selection_method": "largest_observed_ask_orders_during_day",
        "orders": [
          {
            "rank": 1,
            "order_id": "4897735681.0",
            "timestamp": "2026-04-01 07:27:32.019000000",
            "local_timestamp": "2026-04-01 15:27:32",
            "posted_price": 498.0,
            "size_shares": 300000.0,
            "notional": 149400000.0,
            "impact_pct": -0.00271,
            "filled_pct": 58.4,
            "levels_consumed": 10,
            "pct_of_bid_depth": 171.21,
            "price_vs_mid_pct": 0.343,
            "executed_event_count": 0,
            "event_count": 3
          },
          {
            "rank": 2,
            "order_id": "4898934017.0",
            "timestamp": "2026-04-01 07:27:35.396000000",
            "local_timestamp": "2026-04-01 15:27:35",
            "posted_price": 498.0,
            "size_shares": 300000.0,
            "notional": 149400000.0,
            "impact_pct": -0.00271,
            "filled_pct": 58.4,
            "levels_consumed": 10,
            "pct_of_bid_depth": 171.21,
            "price_vs_mid_pct": 0.343,
            "executed_event_count": 0,
            "event_count": 27
          },
          {
            "rank": 3,
            "order_id": "4883288321.0",
            "timestamp": "2026-04-01 07:26:31.408000000",
            "local_timestamp": "2026-04-01 15:26:31",
            "posted_price": 497.8,
            "size_shares": 300000.0,
            "notional": 149340000.0,
            "impact_pct": -0.00271,
            "filled_pct": 58.4,
            "levels_consumed": 10,
            "pct_of_bid_depth": 171.14,
            "price_vs_mid_pct": 0.302,
            "executed_event_count": 0,
            "event_count": 30
          }
        ]
      },
      "intraday_liquidity_profile": {
        "valid": true,
        "trade_date": "2026-04-01",
        "bucket_minutes": 30,
        "tick_size": 0.2,
        "timezone": "HKT (UTC+8)",
        "session_label": "HKEX continuous trading session",
        "bucket_label_basis": "bucket start time",
        "display_window_label": "HKEX continuous trading session",
        "bucket_note": "Buckets are shown in local market time and labeled by bucket start.",
        "rows": [
          {
            "bucket": "09:30",
            "spread_pct": 0.00040184850311430305,
            "spread_ticks": 0.9999999999999432,
            "bid_depth_notional": 121548480.0,
            "ask_depth_notional": 100549440.0,
            "mid_price": 497.70000000000005
          },
          {
            "bucket": "10:00",
            "spread_pct": 0.00040428542551038734,
            "spread_ticks": 0.9999999999999432,
            "bid_depth_notional": 107544900.0,
            "ask_depth_notional": 98320440.0,
            "mid_price": 494.70000000000005
          },
          {
            "bucket": "10:30",
            "spread_pct": 0.0004031445273130188,
            "spread_ticks": 0.9999999999999432,
            "bid_depth_notional": 85941160.0,
            "ask_depth_notional": 109299660.0,
            "mid_price": 496.1
          },
          {
            "bucket": "11:00",
            "spread_pct": 0.00040217172732754606,
            "spread_ticks": 0.9999999999999432,
            "bid_depth_notional": 88875520.0,
            "ask_depth_notional": 146019620.0,
            "mid_price": 497.29999999999995
          },
          {
            "bucket": "11:30",
            "spread_pct": 0.00040298206729798237,
            "spread_ticks": 0.9999999999999432,
            "bid_depth_notional": 111392600.0,
            "ask_depth_notional": 105232440.0,
            "mid_price": 496.29999999999995
          },
          {
            "bucket": "13:00",
            "spread_pct": 0.00040104271104870386,
            "spread_ticks": 0.9999999999999432,
            "bid_depth_notional": 98851280.0,
            "ask_depth_notional": 236721400.0,
            "mid_price": 498.70000000000005
          },
          {
            "bucket": "13:30",
            "spread_pct": 0.00040265753976240914,
            "spread_ticks": 0.9999999999999432,
            "bid_depth_notional": 114528460.0,
            "ask_depth_notional": 104837360.0,
            "mid_price": 496.70000000000005
          },
          {
            "bucket": "14:00",
            "spread_pct": 0.0004002401440864291,
            "spread_ticks": 0.9999999999999432,
            "bid_depth_notional": 130124480.0,
            "ask_depth_notional": 513251350.0,
            "mid_price": 499.70000000000005
          },
          {
            "bucket": "14:30",
            "spread_pct": 0.0004012036108325887,
            "spread_ticks": 1.0000000000002274,
            "bid_depth_notional": 115867080.0,
            "ask_depth_notional": 171731960.0,
            "mid_price": 498.5
          },
          {
            "bucket": "15:00",
            "spread_pct": 0.0004015257980325007,
            "spread_ticks": 0.9999999999999432,
            "bid_depth_notional": 132774880.0,
            "ask_depth_notional": 171567640.0,
            "mid_price": 498.1
          },
          {
            "bucket": "15:30",
            "spread_pct": 0.0012089462018940616,
            "spread_ticks": 3.0000000000001137,
            "bid_depth_notional": 87260580.0,
            "ask_depth_notional": 82561840.0,
            "mid_price": 496.3
          }
        ],
        "summary": {
          "median_spread_pct": 0.00040217172732754606,
          "median_spread_ticks": 0.9999999999999432,
          "median_bid_depth_notional": 111392600.0,
          "median_ask_depth_notional": 109299660.0,
          "tightest_bucket": "14:00",
          "widest_bucket": "15:30",
          "deepest_bid_bucket": "15:00",
          "thinnest_bid_bucket": "10:30"
        }
      }
    },
    "peer_capacity": {
      "bx_ticket_pct_adv_50k": 0.0,
      "peers": [
        {
          "ticker": "2513",
          "pct": 0.1
        },
        {
          "ticker": "3317",
          "pct": 0.1
        },
        {
          "ticker": "100",
          "pct": 0.1
        },
        {
          "ticker": "9660",
          "pct": 0.1
        },
        {
          "ticker": "20",
          "pct": 0.1
        },
        {
          "ticker": "9880",
          "pct": 0.2
        },
        {
          "ticker": "1384",
          "pct": 0.6
        },
        {
          "ticker": "6636",
          "pct": null
        }
      ]
    },
    "trader_composition": {
      "primary_period": "6m",
      "periods": {
        "1d": {
          "valid": true,
          "currency": "HKD",
          "n_trades": 25175,
          "n_runs": 0,
          "n_trade_days": 0,
          "first_trade_date": "2026-04-01",
          "last_trade_date": "2026-04-01",
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
            "retail_pct": 0.5078848063555114,
            "mixed_pct": 0.333545183714002,
            "instit_pct": 0.1585700099304866,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.07232138711723658,
            "mixed_qty_pct": 0.1567786267769378,
            "instit_qty_pct": 0.7708999861058257,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.07228647012773697,
            "mixed_notional_pct": 0.15679952562301736,
            "instit_notional_pct": 0.7709140042492457,
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
            "avg": 344562.6342436544,
            "median": 50200.0
          },
          "run_size": {
            "avg": null,
            "median": null,
            "avg_length": null
          },
          "recent_trades": [],
          "peer_comparison": []
        },
        "30d": {
          "valid": true,
          "currency": "HKD",
          "n_trades": 642439,
          "n_runs": 0,
          "n_trade_days": 0,
          "first_trade_date": "2026-03-04",
          "last_trade_date": "2026-04-01",
          "period_days": 28,
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
            "retail_pct": 0.4838249234557678,
            "mixed_pct": 0.3452888134126353,
            "instit_pct": 0.17088626313159694,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.05604021413502141,
            "mixed_qty_pct": 0.13363648192783487,
            "instit_qty_pct": 0.8103233039371437,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.0559446097081273,
            "mixed_notional_pct": 0.133331138611156,
            "instit_notional_pct": 0.8107242516807168,
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
            "avg": 440673.12583152484,
            "median": 98440.0
          },
          "run_size": {
            "avg": null,
            "median": null,
            "avg_length": null
          },
          "recent_trades": [],
          "peer_comparison": []
        },
        "3m": {
          "valid": true,
          "currency": "HKD",
          "n_trades": 1726758,
          "n_runs": 0,
          "n_trade_days": 0,
          "first_trade_date": "2025-12-30",
          "last_trade_date": "2026-04-01",
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
            "retail_pct": 0.4795692274192446,
            "mixed_pct": 0.34367294085216343,
            "instit_pct": 0.17675783172859197,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.05540280511576497,
            "mixed_qty_pct": 0.13012320216087625,
            "instit_qty_pct": 0.8144739927233587,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.0552906618055186,
            "mixed_notional_pct": 0.12974074552499398,
            "instit_notional_pct": 0.8149685926694874,
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
            "avg": 470621.74390096875,
            "median": 101200.0
          },
          "run_size": {
            "avg": null,
            "median": null,
            "avg_length": null
          },
          "recent_trades": [],
          "peer_comparison": []
        },
        "6m": {
          "valid": true,
          "currency": "HKD",
          "n_trades": 2856966,
          "n_runs": 0,
          "n_trade_days": 0,
          "first_trade_date": "2025-09-17",
          "last_trade_date": "2026-04-01",
          "period_days": 196,
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
            "retail_pct": 0.4852952397753421,
            "mixed_pct": 0.33823713687877277,
            "instit_pct": 0.17646762334588512,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.058969292951055644,
            "mixed_qty_pct": 0.1316548580515171,
            "instit_qty_pct": 0.8093758489974272,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.059174759076340885,
            "mixed_notional_pct": 0.13142612301487866,
            "instit_notional_pct": 0.8093991179087804,
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
            "avg": 470051.1793386862,
            "median": 102000.0
          },
          "run_size": {
            "avg": null,
            "median": null,
            "avg_length": null
          },
          "recent_trades": [],
          "peer_comparison": []
        }
      },
      "valid": true,
      "currency": "HKD",
      "n_trades": 2856966,
      "n_runs": 0,
      "n_trade_days": 0,
      "first_trade_date": "2025-09-17",
      "last_trade_date": "2026-04-01",
      "period_days": 196,
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
        "retail_pct": 0.4852952397753421,
        "mixed_pct": 0.33823713687877277,
        "instit_pct": 0.17646762334588512,
        "ambiguous_pct": null,
        "unobservable_pct": null,
        "unclear_pct": null,
        "retail_qty_pct": null,
        "mixed_qty_pct": null,
        "instit_qty_pct": null,
        "ambiguous_qty_pct": null,
        "unobservable_qty_pct": null,
        "unclear_qty_pct": null,
        "retail_notional_pct": 0.059174759076340885,
        "mixed_notional_pct": 0.13142612301487866,
        "instit_notional_pct": 0.8093991179087804,
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
        "avg": 470051.1793386862,
        "median": 102000.0
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
            "month": "2026-03",
            "n_trades": 667395,
            "n_runs": 0,
            "retail_pct": 0.4810614403763888,
            "mixed_pct": 0.34557645771994094,
            "instit_pct": 0.17336210190367024,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "avg_trade_size": 447709.4863296398,
            "avg_run_notional": null,
            "retail_qty_pct": 0.054841021639345094,
            "mixed_qty_pct": 0.13183436208356467,
            "instit_qty_pct": 0.8133246162770902,
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
            "total_quantity": 573471884.0
          },
          {
            "month": "2026-02",
            "n_trades": 560670,
            "n_runs": 0,
            "retail_pct": 0.49122656821303085,
            "mixed_pct": 0.33713949381989405,
            "instit_pct": 0.1716339379670751,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "avg_trade_size": 462978.44490338175,
            "avg_run_notional": null,
            "retail_qty_pct": 0.05687988043514462,
            "mixed_qty_pct": 0.1286143517955232,
            "instit_qty_pct": 0.8145057677693321,
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
            "total_quantity": 473674976.0
          },
          {
            "month": "2026-01",
            "n_trades": 450547,
            "n_runs": 0,
            "retail_pct": 0.46090418979595915,
            "mixed_pct": 0.3504917356013912,
            "instit_pct": 0.18860407460264966,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "avg_trade_size": 517485.14197128156,
            "avg_run_notional": null,
            "retail_qty_pct": 0.05376863943621027,
            "mixed_qty_pct": 0.12919314863472964,
            "instit_qty_pct": 0.8170382119290601,
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
            "total_quantity": 378573481.0
          },
          {
            "month": "2025-12",
            "n_trades": 220200,
            "n_runs": 0,
            "retail_pct": 0.471802906448683,
            "mixed_pct": 0.3542098092643052,
            "instit_pct": 0.1739872842870118,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "avg_trade_size": 468764.3511342143,
            "avg_run_notional": null,
            "retail_qty_pct": 0.059743232138889615,
            "mixed_qty_pct": 0.14040964139334497,
            "instit_qty_pct": 0.7998471264677655,
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
            "total_quantity": 170797388.0
          },
          {
            "month": "2025-11",
            "n_trades": 360723,
            "n_runs": 0,
            "retail_pct": 0.5184670786171106,
            "mixed_pct": 0.31634522888753974,
            "instit_pct": 0.16518769249534962,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "avg_trade_size": 442608.2619219512,
            "avg_run_notional": null,
            "retail_qty_pct": 0.0726433803211883,
            "mixed_qty_pct": 0.1357158800221889,
            "instit_qty_pct": 0.7916407396566227,
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
            "total_quantity": 253119237.0
          },
          {
            "month": "2025-10",
            "n_trades": 349845,
            "n_runs": 0,
            "retail_pct": 0.491397618945533,
            "mixed_pct": 0.32838542783232577,
            "instit_pct": 0.18021695322214124,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "avg_trade_size": 481093.96442052914,
            "avg_run_notional": null,
            "retail_qty_pct": 0.06369508000230667,
            "mixed_qty_pct": 0.13058513039138706,
            "instit_qty_pct": 0.8057197896063063,
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
            "total_quantity": 263028416.0
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
      "total_trades": 2609324,
      "price_moving_trades": 1009876,
      "pct_price_moving": 38.70259116920705,
      "all_movers": {
        "count": 1009876,
        "avg_size": 433021.94451646047,
        "median_size": 97880.0,
        "retail_count": 501155,
        "mixed_count": 342791,
        "institutional_count": 165930,
        "ambiguous_count": 0,
        "unobservable_count": 0,
        "retail_pct": 49.62539955400465,
        "mixed_pct": 33.943870336556174,
        "instit_pct": 16.430730109439178,
        "unclear_pct": null
      },
      "positive_movers": {
        "count": 504575,
        "avg_size": 409806.18498437695,
        "median_size": 65450.0,
        "retail_count": 259788,
        "mixed_count": 166530,
        "institutional_count": 78257,
        "ambiguous_count": 0,
        "unobservable_count": 0,
        "retail_pct": 51.48649853837388,
        "mixed_pct": 33.00401327850171,
        "instit_pct": 15.509488183124413,
        "unclear_pct": null
      },
      "negative_movers": {
        "count": 505301,
        "avg_size": 456204.34840226517,
        "median_size": 102800.0,
        "retail_count": 241367,
        "mixed_count": 176261,
        "institutional_count": 87673,
        "ambiguous_count": 0,
        "unobservable_count": 0,
        "retail_pct": 47.766974535969645,
        "mixed_pct": 34.88237703863638,
        "instit_pct": 17.35064842539397,
        "unclear_pct": null
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
          "opening": 0.03582373571232714,
          "continuous": 0.8400153896466637,
          "closing": 0.10682640930673078,
          "auctions": 0.14265014501905793,
          "other": 0.017334465334278473
        },
        "1M": {
          "opening": 0.03698264047541853,
          "continuous": 0.8538548471467875,
          "closing": 0.07710714738304196,
          "auctions": 0.1140897878584605,
          "other": 0.03205536499475189
        },
        "3M": {
          "opening": 0.03519079383181275,
          "continuous": 0.8348073445845624,
          "closing": 0.07882324059854137,
          "auctions": 0.11401403443035413,
          "other": 0.05117862098508334
        },
        "6M": {
          "opening": 0.035610799849707823,
          "continuous": 0.8286215973662743,
          "closing": 0.09007231158563594,
          "auctions": 0.12568311143534378,
          "other": 0.04569529119838197
        }
      },
      "hhi": {
        "1D": 0.10453600054397201,
        "1M": 0.10661789345374251,
        "3M": 0.10490395971423844,
        "6M": 0.10255463991506683
      },
      "profile_buckets": [
        {
          "time": "09:00",
          "avg_share": 0.0425
        },
        {
          "time": "09:30",
          "avg_share": 0.1736
        },
        {
          "time": "10:00",
          "avg_share": 0.0849
        },
        {
          "time": "10:30",
          "avg_share": 0.0706
        },
        {
          "time": "11:00",
          "avg_share": 0.0582
        },
        {
          "time": "11:30",
          "avg_share": 0.0359
        },
        {
          "time": "12:00",
          "avg_share": 0.0598
        },
        {
          "time": "13:00",
          "avg_share": 0.0678
        },
        {
          "time": "13:30",
          "avg_share": 0.0577
        },
        {
          "time": "14:00",
          "avg_share": 0.0577
        },
        {
          "time": "14:30",
          "avg_share": 0.0552
        },
        {
          "time": "15:00",
          "avg_share": 0.0623
        },
        {
          "time": "15:30",
          "avg_share": 0.0886
        },
        {
          "time": "16:00",
          "avg_share": 0.0851
        }
      ],
      "peers_hhi_rows": [
        {
          "ticker": "700",
          "auctions_pct": 12.511162498867659,
          "hhi": 0.10239945892647756,
          "interp": {
            "text": "Spread out",
            "cls": "bg-emerald-500/20 text-emerald-400",
            "you": true
          }
        },
        {
          "ticker": "2513",
          "auctions_pct": 1.3655826838014034,
          "hhi": 0.14532230485848938,
          "interp": {
            "text": "Spread out",
            "cls": "bg-emerald-500/20 text-emerald-400"
          }
        },
        {
          "ticker": "100",
          "auctions_pct": 1.7607146026159974,
          "hhi": 0.13478291159012337,
          "interp": {
            "text": "Spread out",
            "cls": "bg-emerald-500/20 text-emerald-400"
          }
        },
        {
          "ticker": "3317",
          "auctions_pct": 1.9639058656787878,
          "hhi": 0.150629385847112,
          "interp": {
            "text": "Moderate",
            "cls": "bg-amber-500/20 text-amber-400"
          }
        },
        {
          "ticker": "20",
          "auctions_pct": 4.646804006631371,
          "hhi": 0.14149338594180894,
          "interp": {
            "text": "Spread out",
            "cls": "bg-emerald-500/20 text-emerald-400"
          }
        },
        {
          "ticker": "9660",
          "auctions_pct": 5.846239791097588,
          "hhi": 0.12547460313154357,
          "interp": {
            "text": "Spread out",
            "cls": "bg-emerald-500/20 text-emerald-400"
          }
        },
        {
          "ticker": "9880",
          "auctions_pct": 3.7262352108696293,
          "hhi": 0.14058593116069845,
          "interp": {
            "text": "Spread out",
            "cls": "bg-emerald-500/20 text-emerald-400"
          }
        },
        {
          "ticker": "6636",
          "auctions_pct": 2.5292534697746563,
          "hhi": 0.13043362554696375,
          "interp": {
            "text": "Spread out",
            "cls": "bg-emerald-500/20 text-emerald-400"
          }
        },
        {
          "ticker": "1384",
          "auctions_pct": 1.5389160754469933,
          "hhi": 0.13411517876687293,
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
