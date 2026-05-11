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
      "ticker": "2382",
      "name": "SUNNY OPTICAL",
      "marketCap": 69970867280.0,
      "sector": "Electronic Components",
      "industry": "Industrials - Industrial Engineering"
    },
    {
      "ticker": "6088",
      "name": "FIT HON TENG",
      "marketCap": 59160282433.2,
      "sector": "Electronic Components",
      "industry": "Industrials - Industrial Engineering"
    },
    {
      "ticker": "1989",
      "name": "DELTON",
      "marketCap": 6844800000.000001,
      "sector": "Electronic Components",
      "industry": "Industrials - Industrial Engineering"
    },
    {
      "ticker": "6613",
      "name": "LENS",
      "marketCap": 5404585984.000001,
      "sector": "Electronic Components",
      "industry": "Industrials - Industrial Engineering"
    },
    {
      "ticker": "2018",
      "name": "AAC TECH",
      "marketCap": 45166584750.0,
      "sector": "Electronic Components",
      "industry": "Industrials - Industrial Engineering"
    },
    {
      "ticker": "1415",
      "name": "COWELL",
      "marketCap": 26029949124.0,
      "sector": "Electronic Components",
      "industry": "Industrials - Industrial Engineering"
    },
    {
      "ticker": "1478",
      "name": "Q TECH",
      "marketCap": 10115864778.25,
      "sector": "Electronic Components",
      "industry": "Industrials - Industrial Engineering"
    },
    {
      "ticker": "1888",
      "name": "KB LAMINATES",
      "marketCap": 96756129500.0,
      "sector": "Industrial Components & Equipment",
      "industry": "Industrials - Industrial Engineering"
    },
    {
      "ticker": "2338",
      "name": "WEICHAI POWER",
      "marketCap": 64353484799.99999,
      "sector": "Commercial Vehicles & Trucks",
      "industry": "Industrials - Industrial Engineering"
    }
  ]
};

export const REPORT_DATA: ReportData = {
  "meta": {
    "market": "XHKG",
    "currency": "HKD",
    "ticker": "2382",
    "company": "SUNNY OPTICAL",
    "asof_date": "2026-04-23",
    "industry": "Industrials - Industrial Engineering",
    "sector": "Electronic Components",
    "market_cap_display": "70.0B",
    "market_cap_category": "large",
    "universe_total": 2571,
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
          "score_pca": 95.87709062621548,
          "score_pca_percentile": 95.87709062621548,
          "rank_pca": 107,
          "total": 2571,
          "adv_notional_sgd": 495506070.0,
          "adv_volume_shares": 7827900.0,
          "free_float_shares": 630999840.0,
          "turnover_ratio": 0.012405549896811384,
          "votes": 12761.0,
          "trades": 12761.0,
          "spread_pct": 0.0008686405520007199,
          "spread_ticks": 1.1093515879777889,
          "amihud": 4.8236161298769294e-11,
          "volatility": 0.3267290133813408
        },
        "pca": {
          "valid": true,
          "window_days": 1,
          "variance_explained": 0.5503977061314171,
          "loadings": {
            "log_adv": 0.5363720935166331,
            "log_trades": 0.49859717164827566,
            "log_turnover": 0.5027289183245505,
            "neg_spread": 0.4003313164622275,
            "neg_amihud": 0.045628599611344335,
            "neg_vol": -0.22050473999050255
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
          "peer_median_adv": 367155016.7,
          "peer_median_score_pca": 96.9467133411124,
          "peer_median_trades": 10221.5,
          "peer_median_volatility": 0.5265258419323566,
          "peer_median_spread_pct": 0.0015875855422742802,
          "peer_median_spread_ticks": 1.9112166605772745,
          "peer_median_amihud": 8.476453625007702e-11,
          "peer_median_turnover_ratio": 0.03272245693229538,
          "target_vs_peer": {
            "score_pca_delta": -1.07,
            "adv_delta_pct": 35.0,
            "trades_delta_pct": 24.84,
            "volatility_delta_pct": 37.95,
            "spread_pct_delta_pct": 45.29,
            "spread_ticks_delta_pct": -41.96,
            "amihud_delta_pct": 43.09,
            "turnover_ratio_delta_pct": -62.09
          }
        },
        "peer_liquidity": [
          {
            "ticker": "2382",
            "score_pca": 95.87709062621548,
            "rank_pca": 107,
            "adv": 495506070.0,
            "trades": 12761.0,
            "volatility": 0.3267290133813408,
            "spread_pct": 0.0008686405520007199,
            "spread_ticks": 1.1093515879777889,
            "amihud": 4.8236161298769294e-11,
            "turnover_ratio": 0.012405549896811384,
            "is_target": true
          },
          {
            "ticker": "6088",
            "score_pca": 98.59976662777129,
            "rank_pca": 37,
            "adv": 548210769.4,
            "trades": 13241.0,
            "volatility": 1.055653751005677,
            "spread_pct": 0.0018046359247138176,
            "spread_ticks": 1.3851783584516968,
            "amihud": 1.0584376410833911e-10,
            "turnover_ratio": 0.041933567126961564,
            "is_target": false
          },
          {
            "ticker": "1989",
            "score_pca": 98.94982497082847,
            "rank_pca": 28,
            "adv": 639939510.0,
            "trades": 12163.0,
            "volatility": 1.1378058673121454,
            "spread_pct": 0.0034448591484553402,
            "spread_ticks": 5.2342941611234295,
            "amihud": 3.255516030465639e-11,
            "turnover_ratio": 0.1287388004058134,
            "is_target": false
          },
          {
            "ticker": "6613",
            "score_pca": 96.22714896927266,
            "rank_pca": 98,
            "adv": 186099264.0,
            "trades": 8722.0,
            "volatility": 0.557616874527235,
            "spread_pct": 0.0009669616936217292,
            "spread_ticks": null,
            "amihud": 2.3389015506415874e-10,
            "turnover_ratio": 0.03978793648425554,
            "is_target": false
          },
          {
            "ticker": "2018",
            "score_pca": 89.34266822248152,
            "rank_pca": 275,
            "adv": 183718944.36,
            "trades": 4299.0,
            "volatility": 0.17591995221318082,
            "spread_pct": 0.0010810559411841955,
            "spread_ticks": null,
            "amihud": 3.3651294034593034e-11,
            "turnover_ratio": 0.006493919569376324,
            "is_target": false
          },
          {
            "ticker": "1415",
            "score_pca": 89.53714507973551,
            "rank_pca": 270,
            "adv": 112104300.0,
            "trades": 2473.0,
            "volatility": 0.42919716982358824,
            "spread_pct": 0.0029213383361027605,
            "spread_ticks": null,
            "amihud": 1.309178235563812e-10,
            "turnover_ratio": 0.014552047708936346,
            "is_target": false
          },
          {
            "ticker": "1478",
            "score_pca": 85.80318942045896,
            "rank_pca": 366,
            "adv": 52094189.99999999,
            "trades": 1447.0,
            "volatility": 0.4612078748727941,
            "spread_pct": 0.0023243356969930317,
            "spread_ticks": 1.9112166605772745,
            "amihud": 6.119149505039938e-10,
            "turnover_ratio": 0.014417356246133871,
            "is_target": false
          },
          {
            "ticker": "1888",
            "score_pca": 99.49436017113965,
            "rank_pca": 14,
            "adv": 1845523459.68,
            "trades": 27700.0,
            "volatility": 1.1485978417540341,
            "spread_pct": 0.0013705351598347429,
            "spread_ticks": null,
            "amihud": 5.759149492269453e-11,
            "turnover_ratio": 0.0629343997005349,
            "is_target": false
          },
          {
            "ticker": "2338",
            "score_pca": 97.66627771295215,
            "rank_pca": 61,
            "adv": 1061985125.76,
            "trades": 11721.0,
            "volatility": 0.49543480933747835,
            "spread_pct": 0.000983223142367407,
            "spread_ticks": null,
            "amihud": 6.368530839181494e-11,
            "turnover_ratio": 0.02565697738033522,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Electronic Components",
          "sector_count": 24,
          "market_count": 2571,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.4468101755190163,
              "median": 0.3002961195058443,
              "min": 0.0,
              "max": 8.637276202991943,
              "p5": 0.0,
              "p95": 1.4784486156144698,
              "count": 2571
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 66471607.423283085,
              "median": 228140.0,
              "min": 0.0,
              "max": 11632693680.0,
              "p5": 0.0,
              "p95": 287950638.48,
              "count": 2571
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.04588274828357715,
              "median": 0.026607538802660594,
              "min": 0.0004200936271142237,
              "max": 0.7648559970834851,
              "p5": 0.0013444125121212184,
              "p95": 0.1509589329656546,
              "count": 2571
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.007049921167545383,
              "median": 0.0009461002343483544,
              "min": 0.0,
              "max": 1.1297316442194167,
              "p5": 0.0,
              "p95": 0.0246515983048129,
              "count": 2552
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 6.386517848833201e-06,
              "median": 6.477453907708708e-09,
              "min": 0.0,
              "max": 0.003047619047619048,
              "p5": 0.0,
              "p95": 6.112867763724547e-06,
              "count": 2154
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1211.3049397121742,
              "median": 21.0,
              "min": 0.0,
              "max": 70283.0,
              "p5": 0.0,
              "p95": 6507.0,
              "count": 2571
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.4906500881488693,
              "median": 0.38115777424543956,
              "min": 0.0,
              "max": 2.0795767506755993,
              "p5": 0.0,
              "p95": 1.4480283044722826,
              "count": 24
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 97022181.0675,
              "median": 1216105.0,
              "min": 0.0,
              "max": 639939510.0,
              "p5": 0.0,
              "p95": 540305064.4899999,
              "count": 24
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.03938828719073616,
              "median": 0.020580196814757194,
              "min": 0.0008686405520007199,
              "max": 0.32337189812354356,
              "p5": 0.0009840758307560992,
              "p95": 0.12349063485320573,
              "count": 24
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.015674614937915676,
              "median": 0.0022929749570831624,
              "min": 0.0,
              "max": 0.1287388004058134,
              "p5": 0.0,
              "p95": 0.0836380220390032,
              "count": 24
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 2.2149650969236047e-06,
              "median": 1.1282068945460859e-08,
              "min": 3.255516030465639e-11,
              "max": 4.1625041625041835e-05,
              "p5": 3.35964873480962e-11,
              "p95": 3.2979840672148714e-06,
              "count": 20
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 2367.625,
              "median": 44.0,
              "min": 0.0,
              "max": 13241.0,
              "p5": 0.0,
              "p95": 12671.3,
              "count": 24
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 578709445.4000001,
              "median": 367155016.7,
              "min": 52094189.99999999,
              "max": 1845523459.68,
              "p5": 73097728.5,
              "p95": 1571285042.8079996,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 10220.75,
              "median": 10221.5,
              "min": 1447.0,
              "max": 27700.0,
              "p5": 1806.1,
              "p95": 22639.34999999999,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.6826792676057666,
              "median": 0.5265258419323566,
              "min": 0.17591995221318082,
              "max": 1.1485978417540341,
              "p5": 0.2645669783768234,
              "p95": 1.144820650699373,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.0018621181304091282,
              "median": 0.0015875855422742802,
              "min": 0.0009669616936217292,
              "max": 0.0034448591484553402,
              "p5": 0.0009726532006827164,
              "p95": 0.003261626864131937,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 2.8435630600508,
              "median": 1.9112166605772745,
              "min": 1.3851783584516968,
              "max": 5.2342941611234295,
              "p5": 1.4377821886642546,
              "p95": 4.901986411068814,
              "count": 3
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.5875624386082896e-10,
              "median": 8.476453625007702e-11,
              "min": 3.255516030465639e-11,
              "max": 6.119149505039938e-10,
              "p5": 3.2938807110134214e-11,
              "p95": 4.796062721000514e-10,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0418143755777934,
              "median": 0.03272245693229538,
              "min": 0.006493919569376324,
              "max": 0.1287388004058134,
              "p5": 0.009267122406241467,
              "p95": 0.1057072601589659,
              "count": 8
            }
          },
          "returns": {
            "window_days": 1,
            "n_obs": 1,
            "stock": -0.02390131071703927,
            "market": -0.003281577241697975,
            "sector": -0.016953610099040395,
            "peers": -0.004247035375464114,
            "vs_market": -0.020619733475341295,
            "vs_sector": -0.006947700617998875,
            "vs_peers": -0.019654275341575156
          }
        }
      },
      "30d": {
        "label": "1M",
        "window_days": 21,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 21,
          "score_pca": 98.83313885647608,
          "score_pca_percentile": 98.83313885647608,
          "rank_pca": 31,
          "total": 2571,
          "adv_notional_sgd": 695510500.0,
          "adv_volume_shares": 11637900.0,
          "free_float_shares": 630999840.0,
          "turnover_ratio": 0.01844358629314391,
          "votes": 13666.0,
          "trades": 13666.0,
          "spread_pct": 0.0009089018326583347,
          "spread_ticks": 1.1098904901129698,
          "amihud": 2.950710275159857e-11,
          "volatility": 0.45555573571284447
        },
        "pca": {
          "valid": true,
          "window_days": 21,
          "variance_explained": 0.5859254082487187,
          "loadings": {
            "log_adv": 0.5129299436054158,
            "log_trades": 0.4653245204941875,
            "log_turnover": 0.4704589730845336,
            "neg_spread": 0.4604137498762654,
            "neg_amihud": 0.28490822029245005,
            "neg_vol": 0.07675156779317978
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
          "peer_median_adv": 264879917.0,
          "peer_median_score_pca": 96.75223648385843,
          "peer_median_trades": 7528.5,
          "peer_median_volatility": 0.7258840017881294,
          "peer_median_spread_pct": 0.0018517482037071213,
          "peer_median_spread_ticks": 2.0075734625870947,
          "peer_median_amihud": 1.2452833717858966e-10,
          "peer_median_turnover_ratio": 0.023678710379265555,
          "target_vs_peer": {
            "score_pca_delta": 2.08,
            "adv_delta_pct": 162.6,
            "trades_delta_pct": 81.52,
            "volatility_delta_pct": 37.24,
            "spread_pct_delta_pct": 50.92,
            "spread_ticks_delta_pct": -44.71,
            "amihud_delta_pct": 76.3,
            "turnover_ratio_delta_pct": -22.11
          }
        },
        "peer_liquidity": [
          {
            "ticker": "2382",
            "score_pca": 98.83313885647608,
            "rank_pca": 31,
            "adv": 695510500.0,
            "trades": 13666.0,
            "volatility": 0.45555573571284447,
            "spread_pct": 0.0009089018326583347,
            "spread_ticks": 1.1098904901129698,
            "amihud": 2.950710275159857e-11,
            "turnover_ratio": 0.01844358629314391,
            "is_target": true
          },
          {
            "ticker": "6088",
            "score_pca": 98.4441851419681,
            "rank_pca": 41,
            "adv": 521036240.0,
            "trades": 12494.0,
            "volatility": 1.1775604341039734,
            "spread_pct": 0.0021386789288654986,
            "spread_ticks": 1.6323737032717451,
            "amihud": 9.892342826434571e-11,
            "turnover_ratio": 0.04077422676688922,
            "is_target": false
          },
          {
            "ticker": "1989",
            "score_pca": 97.70517308440296,
            "rank_pca": 60,
            "adv": 357849690.0,
            "trades": 7888.0,
            "volatility": 1.3006795976410253,
            "spread_pct": 0.0033761520386107243,
            "spread_ticks": 4.268786918593279,
            "amihud": 1.362311410044246e-10,
            "turnover_ratio": 0.09475192822481085,
            "is_target": false
          },
          {
            "ticker": "6613",
            "score_pca": 96.14935822637106,
            "rank_pca": 100,
            "adv": 171910144.00000003,
            "trades": 7169.0,
            "volatility": 0.7898508502701214,
            "spread_pct": 0.0014133592203955353,
            "spread_ticks": null,
            "amihud": 1.6889225584757505e-10,
            "turnover_ratio": 0.034777432730670715,
            "is_target": false
          },
          {
            "ticker": "2018",
            "score_pca": 91.44301828082459,
            "rank_pca": 221,
            "adv": 160097723.24,
            "trades": 3534.0,
            "volatility": 0.4647882500140671,
            "spread_pct": 0.001459517008858667,
            "spread_ticks": null,
            "amihud": 1.1282553335275474e-10,
            "turnover_ratio": 0.006179171625134152,
            "is_target": false
          },
          {
            "ticker": "1415",
            "score_pca": 89.18708673667834,
            "rank_pca": 279,
            "adv": 94976700.0,
            "trades": 2338.0,
            "volatility": 0.6619171533061373,
            "spread_pct": 0.0029150320997192287,
            "spread_ticks": null,
            "amihud": 1.7565918799833648e-10,
            "turnover_ratio": 0.013340335699443885,
            "is_target": false
          },
          {
            "ticker": "1478",
            "score_pca": 85.2975495915986,
            "rank_pca": 379,
            "adv": 46416476.42,
            "trades": 1488.0,
            "volatility": 0.5464827156970643,
            "spread_pct": 0.002494216575305532,
            "spread_ticks": 2.0075734625870947,
            "amihud": 3.9041422467426517e-10,
            "turnover_ratio": 0.012570088720315668,
            "is_target": false
          },
          {
            "ticker": "1888",
            "score_pca": 98.87203422792687,
            "rank_pca": 30,
            "adv": 602980598.88,
            "trades": 14704.0,
            "volatility": 0.8429048803353753,
            "spread_pct": 0.0015648174785487443,
            "spread_ticks": null,
            "amihud": 5.759149492269453e-11,
            "turnover_ratio": 0.03121277879887765,
            "is_target": false
          },
          {
            "ticker": "2338",
            "score_pca": 97.35511474134579,
            "rank_pca": 69,
            "adv": 553657272.36,
            "trades": 8160.0,
            "volatility": 0.6212105463964367,
            "spread_pct": 0.001368138113716342,
            "spread_ticks": null,
            "amihud": 4.347892072364007e-11,
            "turnover_ratio": 0.016144641959653455,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Electronic Components",
          "sector_count": 24,
          "market_count": 2571,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.691586338290945,
              "median": 0.5444324049115428,
              "min": 0.0,
              "max": 27.98817803324715,
              "p5": 0.20268038135212688,
              "p95": 1.6150945009605304,
              "count": 2571
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 61642147.34457229,
              "median": 219719.115,
              "min": 0.0,
              "max": 11207547960.0,
              "p5": 0.0,
              "p95": 254705463.97000003,
              "count": 2571
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.04609339969830235,
              "median": 0.029277218664226883,
              "min": 0.000587472082824556,
              "max": 0.5912209998910793,
              "p5": 0.001433872608045646,
              "p95": 0.14494036154523443,
              "count": 2571
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.004285687752335215,
              "median": 0.0009057884076621849,
              "min": 0.0,
              "max": 0.4466650060282735,
              "p5": 0.0,
              "p95": 0.01644105451830562,
              "count": 2552
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.2753339030770793e-06,
              "median": 4.939757109255996e-08,
              "min": 0.0,
              "max": 0.00014832162373145977,
              "p5": 3.862469631402861e-11,
              "p95": 5.339285346387629e-06,
              "count": 2566
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1121.2969661610268,
              "median": 20.0,
              "min": 0.0,
              "max": 67896.0,
              "p5": 0.0,
              "p95": 5967.0,
              "count": 2571
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.7960872906616405,
              "median": 0.6038664827414442,
              "min": 0.2112257082401072,
              "max": 3.6184133096734645,
              "p5": 0.3031719005129197,
              "p95": 1.4513292657490524,
              "count": 24
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 86364934.80250001,
              "median": 791948.675,
              "min": 0.0,
              "max": 695510500.0,
              "p5": 0.0,
              "p95": 496558257.49999964,
              "count": 24
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.0430920997843609,
              "median": 0.020662885787778508,
              "min": 0.0009089018326583347,
              "max": 0.30976669919276145,
              "p5": 0.001420282888665005,
              "p95": 0.1559806618321245,
              "count": 24
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.010946464216537263,
              "median": 0.001629789747258528,
              "min": 0.0,
              "max": 0.09475192822481085,
              "p5": 0.0,
              "p95": 0.039874707661456434,
              "count": 24
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.8560340792624171e-06,
              "median": 2.3626013899539028e-08,
              "min": 2.950710275159857e-11,
              "max": 1.3905543730472842e-05,
              "p5": 1.0100874402760707e-10,
              "p95": 1.0261390853467644e-05,
              "count": 24
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 2073.8333333333335,
              "median": 32.0,
              "min": 0.0,
              "max": 13666.0,
              "p5": 0.0,
              "p95": 11803.09999999999,
              "count": 24
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 313615605.6125,
              "median": 264879917.0,
              "min": 46416476.42,
              "max": 602980598.88,
              "p5": 63412554.67300001,
              "p95": 585717434.5979999,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 7221.875,
              "median": 7528.5,
              "min": 1488.0,
              "max": 14704.0,
              "p5": 1785.5,
              "p95": 13930.499999999998,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.800674303470525,
              "median": 0.7258840017881294,
              "min": 0.4647882500140671,
              "max": 1.3006795976410253,
              "p5": 0.4933813130031161,
              "p95": 1.257587890403057,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.0020912389330025338,
              "median": 0.0018517482037071213,
              "min": 0.001368138113716342,
              "max": 0.0033761520386107243,
              "p5": 0.0013839655010540596,
              "p95": 0.0032147600599987006,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 2.636244694817373,
              "median": 2.0075734625870947,
              "min": 1.6323737032717451,
              "max": 4.268786918593279,
              "p5": 1.6698936792032801,
              "p95": 4.042665572992661,
              "count": 3
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.4800202334850452e-10,
              "median": 1.2452833717858966e-10,
              "min": 4.347892072364007e-11,
              "max": 3.9041422467426517e-10,
              "p5": 4.841832169330913e-11,
              "p95": 3.1524996183769004e-10,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.03121882556572445,
              "median": 0.023678710379265555,
              "min": 0.006179171625134152,
              "max": 0.09475192822481085,
              "p5": 0.008415992608447682,
              "p95": 0.07585973271453825,
              "count": 8
            }
          },
          "returns": {
            "window_days": 21,
            "n_obs": 21,
            "stock": 0.1625344352617082,
            "market": 0.02409148729213495,
            "sector": 0.020324309283795694,
            "peers": 0.1394859013866594,
            "vs_market": 0.13844294796957324,
            "vs_sector": 0.1422101259779125,
            "vs_peers": 0.023048533875048793
          }
        }
      },
      "3m": {
        "label": "3M",
        "window_days": 63,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 63,
          "score_pca": 99.02761571373007,
          "score_pca_percentile": 99.02761571373007,
          "rank_pca": 26,
          "total": 2571,
          "adv_notional_sgd": 605937510.0,
          "adv_volume_shares": 10420200.0,
          "free_float_shares": 630999840.0,
          "turnover_ratio": 0.016513791826001097,
          "votes": 12855.0,
          "trades": 12855.0,
          "spread_pct": 0.0009559362374074571,
          "spread_ticks": 1.120756020529017,
          "amihud": 2.587752594415602e-11,
          "volatility": 0.3714244511172187
        },
        "pca": {
          "valid": true,
          "window_days": 63,
          "variance_explained": 0.6256276025219251,
          "loadings": {
            "log_adv": 0.4961524380735906,
            "log_trades": 0.4485467394023611,
            "log_turnover": 0.4508718789178002,
            "neg_spread": 0.45649202510262943,
            "neg_amihud": 0.35037409050031926,
            "neg_vol": 0.13493019413774301
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
          "peer_median_adv": 285454971.95,
          "peer_median_score_pca": 96.75223648385843,
          "peer_median_trades": 7936.5,
          "peer_median_volatility": 0.6010500776222274,
          "peer_median_spread_pct": 0.0020435780105938954,
          "peer_median_spread_ticks": 2.0828112764291307,
          "peer_median_amihud": 1.186137274082484e-10,
          "peer_median_turnover_ratio": 0.02368329618759995,
          "target_vs_peer": {
            "score_pca_delta": 2.28,
            "adv_delta_pct": 112.3,
            "trades_delta_pct": 61.97,
            "volatility_delta_pct": 38.2,
            "spread_pct_delta_pct": 53.22,
            "spread_ticks_delta_pct": -46.19,
            "amihud_delta_pct": 78.18,
            "turnover_ratio_delta_pct": -30.27
          }
        },
        "peer_liquidity": [
          {
            "ticker": "2382",
            "score_pca": 99.02761571373007,
            "rank_pca": 26,
            "adv": 605937510.0,
            "trades": 12855.0,
            "volatility": 0.3714244511172187,
            "spread_pct": 0.0009559362374074571,
            "spread_ticks": 1.120756020529017,
            "amihud": 2.587752594415602e-11,
            "turnover_ratio": 0.016513791826001097,
            "is_target": true
          },
          {
            "ticker": "6088",
            "score_pca": 97.0050563982886,
            "rank_pca": 78,
            "adv": 387542016.0,
            "trades": 9839.0,
            "volatility": 1.0068133341363177,
            "spread_pct": 0.0024775882366116432,
            "spread_ticks": 1.4652126994945192,
            "amihud": 1.0198813362761885e-10,
            "turnover_ratio": 0.033834350617572444,
            "is_target": false
          },
          {
            "ticker": "1989",
            "score_pca": 97.0439517697394,
            "rank_pca": 77,
            "adv": 390318485.0,
            "trades": 8472.0,
            "volatility": 1.3006795976410253,
            "spread_pct": 0.003351433177315778,
            "spread_ticks": 4.186262797053434,
            "amihud": 1.362311410044246e-10,
            "turnover_ratio": 0.10249385779418416,
            "is_target": false
          },
          {
            "ticker": "6613",
            "score_pca": 96.49941656942825,
            "rank_pca": 91,
            "adv": 183367927.89999998,
            "trades": 7401.0,
            "volatility": 0.6052536192332229,
            "spread_pct": 0.0013352824211089642,
            "spread_ticks": null,
            "amihud": 1.2440192146374206e-10,
            "turnover_ratio": 0.029780542683986035,
            "is_target": false
          },
          {
            "ticker": "2018",
            "score_pca": 92.02644885258654,
            "rank_pca": 206,
            "adv": 153380603.51999998,
            "trades": 3534.0,
            "volatility": 0.43226480165375986,
            "spread_pct": 0.0015370227362887338,
            "spread_ticks": null,
            "amihud": 1.1282553335275474e-10,
            "turnover_ratio": 0.005887055379369927,
            "is_target": false
          },
          {
            "ticker": "1415",
            "score_pca": 88.79813302217036,
            "rank_pca": 289,
            "adv": 92263380.0,
            "trades": 2032.0,
            "volatility": 0.5474455319071437,
            "spread_pct": 0.002811439688012671,
            "spread_ticks": null,
            "amihud": 2.1141178702161906e-10,
            "turnover_ratio": 0.012712243245510799,
            "is_target": false
          },
          {
            "ticker": "1478",
            "score_pca": 87.51458576429405,
            "rank_pca": 322,
            "adv": 52094189.99999999,
            "trades": 1929.0,
            "volatility": 0.5403396749269046,
            "spread_pct": 0.0024519337032725325,
            "spread_ticks": 2.0828112764291307,
            "amihud": 3.783998183956598e-10,
            "turnover_ratio": 0.01410656253015814,
            "is_target": false
          },
          {
            "ticker": "1888",
            "score_pca": 98.24970828471412,
            "rank_pca": 46,
            "adv": 490101628.72,
            "trades": 11477.0,
            "volatility": 0.7542669842059428,
            "spread_pct": 0.0016352223179152581,
            "spread_ticks": null,
            "amihud": 5.835448694729369e-11,
            "turnover_ratio": 0.029159239368151037,
            "is_target": false
          },
          {
            "ticker": "2338",
            "score_pca": 97.70517308440296,
            "rank_pca": 60,
            "adv": 584358952.0,
            "trades": 8491.0,
            "volatility": 0.5968465360112318,
            "spread_pct": 0.0013991244911407805,
            "spread_ticks": null,
            "amihud": 3.981092670803478e-11,
            "turnover_ratio": 0.018207353007048857,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Electronic Components",
          "sector_count": 24,
          "market_count": 2571,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.7083693278260472,
              "median": 0.5729038849412829,
              "min": 0.0,
              "max": 16.135908972680973,
              "p5": 0.22639189100382076,
              "p95": 1.5615311460100023,
              "count": 2571
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 59954730.73526423,
              "median": 225600.0,
              "min": 0.0,
              "max": 13045753760.0,
              "p5": 0.0,
              "p95": 235099798.49,
              "count": 2571
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.042955822774348666,
              "median": 0.027759166027212664,
              "min": 0.0005681922931204329,
              "max": 0.586235634471959,
              "p5": 0.0014446798678041423,
              "p95": 0.1350928766249152,
              "count": 2571
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0039408152711833,
              "median": 0.0008616014497243163,
              "min": 0.0,
              "max": 0.38612653752209847,
              "p5": 0.0,
              "p95": 0.01538017009361563,
              "count": 2552
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 6.887607333290114e-07,
              "median": 4.4341297675806585e-08,
              "min": 0.0,
              "max": 2.0997788670380663e-05,
              "p5": 4.8089264371464525e-11,
              "p95": 3.6788223749430563e-06,
              "count": 2571
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1072.6361338000777,
              "median": 20.0,
              "min": 0.0,
              "max": 78392.0,
              "p5": 0.0,
              "p95": 5790.0,
              "count": 2571
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.7134436968869863,
              "median": 0.5105069475179203,
              "min": 0.2454040988905998,
              "max": 2.573333270758399,
              "p5": 0.3128690822656657,
              "p95": 1.2901388037738308,
              "count": 24
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 78994493.15291667,
              "median": 1307570.0,
              "min": 0.0,
              "max": 605937510.0,
              "p5": 0.0,
              "p95": 389902014.65,
              "count": 24
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.04221830204016214,
              "median": 0.018207877522753924,
              "min": 0.0009559362374074571,
              "max": 0.2687271147520635,
              "p5": 0.0013655434683859297,
              "p95": 0.13684576706801574,
              "count": 24
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.010472810825029086,
              "median": 0.001661673505601013,
              "min": 0.0,
              "max": 0.10249385779418416,
              "p5": 0.0,
              "p95": 0.03322627942753447,
              "count": 24
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.1920596746649552e-06,
              "median": 1.1287885614161403e-08,
              "min": 2.587752594415602e-11,
              "max": 1.4497380502227603e-05,
              "p5": 1.0361374358638923e-10,
              "p95": 6.174732625634362e-06,
              "count": 24
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1977.75,
              "median": 53.5,
              "min": 0.0,
              "max": 12855.0,
              "p5": 0.0,
              "p95": 9633.949999999997,
              "count": 24
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 291678397.89250004,
              "median": 285454971.95,
              "min": 52094189.99999999,
              "max": 584358952.0,
              "p5": 66153406.5,
              "p95": 551368888.852,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 6646.875,
              "median": 7936.5,
              "min": 1929.0,
              "max": 11477.0,
              "p5": 1965.05,
              "p95": 10903.699999999999,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.7229887599644436,
              "median": 0.6010500776222274,
              "min": 0.43226480165375986,
              "max": 1.3006795976410253,
              "p5": 0.47009100729936054,
              "p95": 1.1978264054143775,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.002124880846458295,
              "median": 0.0020435780105938954,
              "min": 0.0013352824211089642,
              "max": 0.003351433177315778,
              "p5": 0.0013576271456200999,
              "p95": 0.0031624354560596903,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 2.5780955909923615,
              "median": 2.0828112764291307,
              "min": 1.4652126994945192,
              "max": 4.186262797053434,
              "p5": 1.5269725571879804,
              "p95": 3.9759176449910036,
              "count": 3
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.4542796856514344e-10,
              "median": 1.186137274082484e-10,
              "min": 3.981092670803478e-11,
              "max": 3.783998183956598e-10,
              "p5": 4.63011727917754e-11,
              "p95": 3.1995400741474547e-10,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.030772650578247674,
              "median": 0.02368329618759995,
              "min": 0.005887055379369927,
              "max": 0.10249385779418416,
              "p5": 0.008275871132519232,
              "p95": 0.07846303028237002,
              "count": 8
            }
          },
          "returns": {
            "window_days": 63,
            "n_obs": 63,
            "stock": -0.0445283018867928,
            "market": 0.0420090494699672,
            "sector": -0.10699079605752115,
            "peers": -0.02152750158705863,
            "vs_market": -0.08653735135676,
            "vs_sector": 0.062462494170728355,
            "vs_peers": -0.02300080029973417
          }
        }
      },
      "6m": {
        "label": "6M",
        "window_days": 126,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 126,
          "score_pca": 99.26098794243485,
          "score_pca_percentile": 99.26098794243485,
          "rank_pca": 20,
          "total": 2571,
          "adv_notional_sgd": 657741572.5,
          "adv_volume_shares": 10429200.0,
          "free_float_shares": 630999840.0,
          "turnover_ratio": 0.016528054904102668,
          "votes": 13780.5,
          "trades": 13780.5,
          "spread_pct": 0.0008919234364333622,
          "spread_ticks": 1.1389470578865062,
          "amihud": 2.272657648418554e-11,
          "volatility": 0.368530038432166
        },
        "pca": {
          "valid": true,
          "window_days": 126,
          "variance_explained": 0.6305304280613672,
          "loadings": {
            "log_adv": 0.49572422017890017,
            "log_trades": 0.44926767146482127,
            "log_turnover": 0.4495732800348332,
            "neg_spread": 0.46032257397494986,
            "neg_amihud": 0.35225276682338047,
            "neg_vol": 0.11967054331651217
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
          "peer_median_adv": 238361090.44,
          "peer_median_score_pca": 96.81057954103463,
          "peer_median_trades": 6899.5,
          "peer_median_volatility": 0.587432582624906,
          "peer_median_spread_pct": 0.0020175063352108895,
          "peer_median_spread_ticks": 2.141273450824332,
          "peer_median_amihud": 1.1472447484692424e-10,
          "peer_median_turnover_ratio": 0.018699401541652387,
          "target_vs_peer": {
            "score_pca_delta": 2.45,
            "adv_delta_pct": 175.9,
            "trades_delta_pct": 99.73,
            "volatility_delta_pct": 37.26,
            "spread_pct_delta_pct": 55.79,
            "spread_ticks_delta_pct": -46.81,
            "amihud_delta_pct": 80.19,
            "turnover_ratio_delta_pct": -11.61
          }
        },
        "peer_liquidity": [
          {
            "ticker": "2382",
            "score_pca": 99.26098794243485,
            "rank_pca": 20,
            "adv": 657741572.5,
            "trades": 13780.5,
            "volatility": 0.368530038432166,
            "spread_pct": 0.0008919234364333622,
            "spread_ticks": 1.1389470578865062,
            "amihud": 2.272657648418554e-11,
            "turnover_ratio": 0.016528054904102668,
            "is_target": true
          },
          {
            "ticker": "6088",
            "score_pca": 97.19953325554259,
            "rank_pca": 73,
            "adv": 310265873.53,
            "trades": 8511.5,
            "volatility": 0.8943137890612243,
            "spread_pct": 0.002480348096391916,
            "spread_ticks": 1.3569196606394454,
            "amihud": 1.0515139517065266e-10,
            "turnover_ratio": 0.0323467504692824,
            "is_target": false
          },
          {
            "ticker": "1989",
            "score_pca": 98.05523142746013,
            "rank_pca": 51,
            "adv": 390318485.0,
            "trades": 8472.0,
            "volatility": 1.3006795976410253,
            "spread_pct": 0.003351433177315778,
            "spread_ticks": 4.186262797053434,
            "amihud": 1.362311410044246e-10,
            "turnover_ratio": 0.10249385779418416,
            "is_target": false
          },
          {
            "ticker": "6613",
            "score_pca": 96.46052119797744,
            "rank_pca": 92,
            "adv": 179940740.0,
            "trades": 6536.5,
            "volatility": 0.5638277148108692,
            "spread_pct": 0.0013194376778360465,
            "spread_ticks": null,
            "amihud": 1.2429755452319582e-10,
            "turnover_ratio": 0.026924473092651228,
            "is_target": false
          },
          {
            "ticker": "2018",
            "score_pca": 92.6098794243485,
            "rank_pca": 191,
            "adv": 161547303.24,
            "trades": 3778.0,
            "volatility": 0.3926225252146332,
            "spread_pct": 0.001454542789428849,
            "spread_ticks": null,
            "amihud": 8.9389783066828e-11,
            "turnover_ratio": 0.005948223923133164,
            "is_target": false
          },
          {
            "ticker": "1415",
            "score_pca": 90.08168028004667,
            "rank_pca": 256,
            "adv": 95461466.0,
            "trades": 2158.0,
            "volatility": 0.4963674463721851,
            "spread_pct": 0.002584655685171856,
            "spread_ticks": null,
            "amihud": 1.9495516540466881e-10,
            "turnover_ratio": 0.012861540736300638,
            "is_target": false
          },
          {
            "ticker": "1478",
            "score_pca": 88.40917930766238,
            "rank_pca": 299,
            "adv": 56972980.705,
            "trades": 2242.0,
            "volatility": 0.6032542446612779,
            "spread_pct": 0.0025143366095740994,
            "spread_ticks": 2.141273450824332,
            "amihud": 3.887369389133239e-10,
            "turnover_ratio": 0.013682185568584849,
            "is_target": false
          },
          {
            "ticker": "1888",
            "score_pca": 97.43290548424739,
            "rank_pca": 67,
            "adv": 296781440.88,
            "trades": 8853.5,
            "volatility": 0.6605192611601585,
            "spread_pct": 0.001554664574029863,
            "spread_ticks": null,
            "amihud": 8.505160016392711e-11,
            "turnover_ratio": 0.02221827427612449,
            "is_target": false
          },
          {
            "ticker": "2338",
            "score_pca": 97.1606378840918,
            "rank_pca": 74,
            "adv": 436611326.14,
            "trades": 7262.5,
            "volatility": 0.5716109205885341,
            "spread_pct": 0.0013348498309884553,
            "spread_ticks": null,
            "amihud": 4.899616845239997e-11,
            "turnover_ratio": 0.01518052880718028,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Electronic Components",
          "sector_count": 24,
          "market_count": 2571,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.7410014474990879,
              "median": 0.5942981433242553,
              "min": 0.0,
              "max": 33.69227034911436,
              "p5": 0.22075809221467163,
              "p95": 1.552970999798418,
              "count": 2571
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 56123888.36950483,
              "median": 216320.0,
              "min": 0.0,
              "max": 11463870050.0,
              "p5": 0.0,
              "p95": 210809636.25,
              "count": 2571
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.042120964152236914,
              "median": 0.027087963292653946,
              "min": 0.0005616996269061497,
              "max": 0.586235634471959,
              "p5": 0.0014031756098933932,
              "p95": 0.1346904325574228,
              "count": 2571
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0036029047373763875,
              "median": 0.0008381450893946623,
              "min": 0.0,
              "max": 0.18345863604845108,
              "p5": 0.0,
              "p95": 0.014331697415401683,
              "count": 2552
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 6.381731162008967e-07,
              "median": 4.661678670489221e-08,
              "min": 0.0,
              "max": 2.961485977790332e-05,
              "p5": 5.154284353112252e-11,
              "p95": 3.527891875138013e-06,
              "count": 2571
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1030.8090237261765,
              "median": 20.0,
              "min": 0.0,
              "max": 89671.5,
              "p5": 0.0,
              "p95": 5626.75,
              "count": 2571
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.7051785777414598,
              "median": 0.5720465549062509,
              "min": 0.2510246579025973,
              "max": 1.8604739146010858,
              "p5": 0.3707339384099274,
              "p95": 1.2976403283610503,
              "count": 24
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 78781614.02104168,
              "median": 1232340.0,
              "min": 0.0,
              "max": 657741572.5,
              "p5": 0.0,
              "p95": 378310593.2794998,
              "count": 24
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.04115662510746996,
              "median": 0.017323256743711588,
              "min": 0.0008919234364333622,
              "max": 0.2056441332784217,
              "p5": 0.001339703444574967,
              "p95": 0.17530825507800757,
              "count": 24
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.010443451126451732,
              "median": 0.0014584691663266699,
              "min": 0.0,
              "max": 0.10249385779418416,
              "p5": 0.0,
              "p95": 0.03153340886278771,
              "count": 24
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.2667290881873153e-06,
              "median": 1.0318600134431986e-08,
              "min": 2.272657648418554e-11,
              "max": 1.9086979504143505e-05,
              "p5": 9.17540248824017e-11,
              "p95": 4.863487997960925e-06,
              "count": 24
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1971.4375,
              "median": 65.0,
              "min": 0.0,
              "max": 13780.5,
              "p5": 0.0,
              "p95": 8505.575,
              "count": 24
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 240987451.936875,
              "median": 238361090.44,
              "min": 56972980.705,
              "max": 436611326.14,
              "p5": 70443950.55825,
              "p95": 420408831.74099994,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 5976.75,
              "median": 6899.5,
              "min": 2158.0,
              "max": 8853.5,
              "p5": 2187.4,
              "p95": 8733.8,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.6853994374387384,
              "median": 0.587432582624906,
              "min": 0.3926225252146332,
              "max": 1.3006795976410253,
              "p5": 0.42893324761977636,
              "p95": 1.1584515646380946,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.002074283555092108,
              "median": 0.0020175063352108895,
              "min": 0.0013194376778360465,
              "max": 0.003351433177315778,
              "p5": 0.0013248319314393896,
              "p95": 0.0030830610550654047,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 2.5614853028390705,
              "median": 2.141273450824332,
              "min": 1.3569196606394454,
              "max": 4.186262797053434,
              "p5": 1.435355039657934,
              "p95": 3.981763862430524,
              "count": 3
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.466012183374276e-10,
              "median": 1.1472447484692424e-10,
              "min": 4.899616845239997e-11,
              "max": 3.887369389133239e-10,
              "p5": 6.161556955143447e-11,
              "p95": 3.209133181852945e-10,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.02895697933343015,
              "median": 0.018699401541652387,
              "min": 0.005948223923133164,
              "max": 0.10249385779418416,
              "p5": 0.00836788480774178,
              "p95": 0.0779423702304685,
              "count": 8
            }
          },
          "returns": {
            "window_days": 126,
            "n_obs": 126,
            "stock": -0.2939208031232571,
            "market": 0.09531099833042789,
            "sector": -0.2700463311288931,
            "peers": -0.17328969792894067,
            "vs_market": -0.38923180145368497,
            "vs_sector": -0.023874471994363988,
            "vs_peers": -0.12063110519431641
          }
        }
      }
    },
    "period_insights": {
      "1d": {
        "liquidity": "Near-term tradability is a little weaker, with average volume down 28.8% from the 1M average and bid depth lighter than the ask. That matters because access can feel thinner on the buy side even with a 1 tick spread.",
        "market_comparison": "Recent price action is still firm, with 1M return up 16.3% compared with peers at 13.9% and the market at 2.4%. That matters because stronger performance can keep attention on the stock even as day-to-day flow pulls back."
      },
      "30d": {
        "liquidity": "Monthly tradability looks balanced. A 1M liquidity score of 98.8 against a peer median of 96.8 points to access that is in line with better-trading names for its size.",
        "market_comparison": "The stock has outperformed over the month, rising 16.3% compared with peers at 13.9%. That matters because a firmer tape usually supports participation and keeps liquidity accessible."
      },
      "3m": {
        "liquidity": "3M score 99.0 vs peer median 96.8 (+2.3 pts).",
        "market_comparison": "Sector moves are the main current driver at 59.3%. That matters because trading conditions are still being shaped more by the broader group than by company-specific news."
      },
      "6m": {
        "liquidity": "Longer-term tradability is solid for the company’s size. The 6M liquidity score of 99.3 is 2.5 points above the peer median, which supports a constructive view of structural access.",
        "market_comparison": "Primary average daily volume is HK$657.7M compared with a peer median of HK$238.4M. That matters because the stock screens as easier to access than many peers even if current flow is a little lighter."
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
          "median": 0.23085304391699887,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "23.1%",
          "display_range": null,
          "display_text": "23.1%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "share_pct",
          "value_pct": 23.1,
          "plain_english": "Market explains about 23.1% of price moves in the current state."
        },
        "sector_share": {
          "median": 0.5934508145135,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "59.3%",
          "display_range": null,
          "display_text": "59.3%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "share_pct",
          "value_pct": 59.3,
          "plain_english": "Sector explains about 59.3% of price moves in the current state."
        },
        "company_share": {
          "median": 0.1756961415695012,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "17.6%",
          "display_range": null,
          "display_text": "17.6%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "share_pct",
          "value_pct": 17.6,
          "plain_english": "Company-specific explains about 17.6% of price moves in the current state."
        },
        "basis": "current_state"
      },
      "current_sensitivities": {
        "beta_market": {
          "median": 0.6038293535808658,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "0.60",
          "display_range": null,
          "display_text": "0.60",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "beta",
          "strength_label": "Modest",
          "plain_english": "Modest market link: a 1% market move has lined up with about a 0.60% stock move in the same direction in this state.",
          "value_num": 0.6
        },
        "beta_stock_lag": {
          "median": -0.45732296240227294,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "-0.46",
          "display_range": null,
          "display_text": "-0.46",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "lag_beta",
          "value_num": -0.46
        },
        "beta_sector": {
          "median": 1.5839073331331972,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "1.58",
          "display_range": null,
          "display_text": "1.58",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "beta",
          "strength_label": "High",
          "plain_english": "High sector link: a 1% sector move has lined up with about a 1.58% stock move in the same direction in this state.",
          "value_num": 1.58
        },
        "beta_market_lag": {
          "median": -0.694523223789306,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "-0.69",
          "display_range": null,
          "display_text": "-0.69",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "lag_beta",
          "value_num": -0.69
        },
        "beta_sector_lag": {
          "median": 1.878698950424457,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "1.88",
          "display_range": null,
          "display_text": "1.88",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "lag_beta",
          "value_num": 1.88
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
          "period_label": "2025-04-07 to 2025-04-30",
          "n_obs": 16,
          "partial_month": true,
          "dominant_driver": "sector",
          "dominant_driver_label": "Sector",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.4806299975599088,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "48.1%",
            "display_range": null,
            "display_text": "48.1%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 16 trading days.",
            "kind": "share_pct",
            "value_pct": 48.1,
            "plain_english": "Sector explains about 48.1% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.19167339539494221,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "19.2%",
              "display_range": null,
              "display_text": "19.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 16 trading days.",
              "kind": "share_pct",
              "value_pct": 19.2,
              "plain_english": "Market explains about 19.2% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.4806299975599088,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "48.1%",
              "display_range": null,
              "display_text": "48.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 16 trading days.",
              "kind": "share_pct",
              "value_pct": 48.1,
              "plain_english": "Sector explains about 48.1% of price moves in the current state."
            },
            "company_share": {
              "median": 0.327696607045149,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "32.8%",
              "display_range": null,
              "display_text": "32.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 16 trading days.",
              "kind": "share_pct",
              "value_pct": 32.8,
              "plain_english": "Company-specific explains about 32.8% of price moves in the current state."
            }
          },
          "summary": "Apr: Mostly sector-driven."
        },
        {
          "month_key": "2025-05",
          "month_label": "May 2025",
          "month_short_label": "May",
          "period_label": "2025-05-02 to 2025-05-30",
          "n_obs": 20,
          "partial_month": true,
          "dominant_driver": "sector",
          "dominant_driver_label": "Sector",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.44508142665688993,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "44.5%",
            "display_range": null,
            "display_text": "44.5%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
            "kind": "share_pct",
            "value_pct": 44.5,
            "plain_english": "Sector explains about 44.5% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.26773067005246143,
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
              "plain_english": "Market explains about 26.8% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.44508142665688993,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "44.5%",
              "display_range": null,
              "display_text": "44.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 44.5,
              "plain_english": "Sector explains about 44.5% of price moves in the current state."
            },
            "company_share": {
              "median": 0.28718790329064864,
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
          "summary": "May: More mixed, though sector-driven still has the largest share."
        },
        {
          "month_key": "2025-06",
          "month_label": "June 2025",
          "month_short_label": "Jun",
          "period_label": "2025-06-02 to 2025-06-30",
          "n_obs": 21,
          "partial_month": false,
          "dominant_driver": "sector",
          "dominant_driver_label": "Sector",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.5266497654973087,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "52.7%",
            "display_range": null,
            "display_text": "52.7%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
            "kind": "share_pct",
            "value_pct": 52.7,
            "plain_english": "Sector explains about 52.7% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.15468233956994623,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "15.5%",
              "display_range": null,
              "display_text": "15.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 15.5,
              "plain_english": "Market explains about 15.5% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.5266497654973087,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "52.7%",
              "display_range": null,
              "display_text": "52.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 52.7,
              "plain_english": "Sector explains about 52.7% of price moves in the current state."
            },
            "company_share": {
              "median": 0.3186678949327451,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "31.9%",
              "display_range": null,
              "display_text": "31.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 31.9,
              "plain_english": "Company-specific explains about 31.9% of price moves in the current state."
            }
          },
          "summary": "Jun: Mostly sector-driven."
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
            "median": 0.4922684262115147,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "49.2%",
            "display_range": null,
            "display_text": "49.2%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
            "kind": "share_pct",
            "value_pct": 49.2,
            "plain_english": "Company-specific explains about 49.2% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.11242096122909744,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "11.2%",
              "display_range": null,
              "display_text": "11.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 11.2,
              "plain_english": "Market explains about 11.2% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.39531061255938793,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "39.5%",
              "display_range": null,
              "display_text": "39.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 39.5,
              "plain_english": "Sector explains about 39.5% of price moves in the current state."
            },
            "company_share": {
              "median": 0.4922684262115147,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "49.2%",
              "display_range": null,
              "display_text": "49.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 49.2,
              "plain_english": "Company-specific explains about 49.2% of price moves in the current state."
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
            "median": 0.37635272617302246,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "37.6%",
            "display_range": null,
            "display_text": "37.6%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
            "kind": "share_pct",
            "value_pct": 37.6,
            "plain_english": "Company-specific explains about 37.6% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.3058946769253814,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "30.6%",
              "display_range": null,
              "display_text": "30.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 30.6,
              "plain_english": "Market explains about 30.6% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.31775259690159613,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "31.8%",
              "display_range": null,
              "display_text": "31.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 31.8,
              "plain_english": "Sector explains about 31.8% of price moves in the current state."
            },
            "company_share": {
              "median": 0.37635272617302246,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "37.6%",
              "display_range": null,
              "display_text": "37.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 37.6,
              "plain_english": "Company-specific explains about 37.6% of price moves in the current state."
            }
          },
          "summary": "Aug: Much more balanced across company, sector, and market factors."
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
            "median": 0.445929518692492,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "44.6%",
            "display_range": null,
            "display_text": "44.6%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
            "kind": "share_pct",
            "value_pct": 44.6,
            "plain_english": "Sector explains about 44.6% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.1394606835392805,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "13.9%",
              "display_range": null,
              "display_text": "13.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 13.9,
              "plain_english": "Market explains about 13.9% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.445929518692492,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "44.6%",
              "display_range": null,
              "display_text": "44.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 44.6,
              "plain_english": "Sector explains about 44.6% of price moves in the current state."
            },
            "company_share": {
              "median": 0.4146097977682275,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "41.5%",
              "display_range": null,
              "display_text": "41.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 41.5,
              "plain_english": "Company-specific explains about 41.5% of price moves in the current state."
            }
          },
          "summary": "Sep: More mixed, though sector-driven still has the largest share."
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
            "median": 0.441193280963919,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "44.1%",
            "display_range": null,
            "display_text": "44.1%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
            "kind": "share_pct",
            "value_pct": 44.1,
            "plain_english": "Market explains about 44.1% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.441193280963919,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "44.1%",
              "display_range": null,
              "display_text": "44.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 44.1,
              "plain_english": "Market explains about 44.1% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.22697529795268814,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "22.7%",
              "display_range": null,
              "display_text": "22.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 22.7,
              "plain_english": "Sector explains about 22.7% of price moves in the current state."
            },
            "company_share": {
              "median": 0.33183142108339286,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "33.2%",
              "display_range": null,
              "display_text": "33.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 33.2,
              "plain_english": "Company-specific explains about 33.2% of price moves in the current state."
            }
          },
          "summary": "Oct: More mixed, though market-driven still has the largest share."
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
            "median": 0.42897021835129306,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "42.9%",
            "display_range": null,
            "display_text": "42.9%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
            "kind": "share_pct",
            "value_pct": 42.9,
            "plain_english": "Company-specific explains about 42.9% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.20558582455859373,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "20.6%",
              "display_range": null,
              "display_text": "20.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 20.6,
              "plain_english": "Market explains about 20.6% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.3654439570901133,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "36.5%",
              "display_range": null,
              "display_text": "36.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 36.5,
              "plain_english": "Sector explains about 36.5% of price moves in the current state."
            },
            "company_share": {
              "median": 0.42897021835129306,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "42.9%",
              "display_range": null,
              "display_text": "42.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 42.9,
              "plain_english": "Company-specific explains about 42.9% of price moves in the current state."
            }
          },
          "summary": "Nov: More mixed, though company-driven still has the largest share."
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
            "median": 0.5494746865385056,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "54.9%",
            "display_range": null,
            "display_text": "54.9%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
            "kind": "share_pct",
            "value_pct": 54.9,
            "plain_english": "Sector explains about 54.9% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.30512416867521014,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "30.5%",
              "display_range": null,
              "display_text": "30.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
              "kind": "share_pct",
              "value_pct": 30.5,
              "plain_english": "Market explains about 30.5% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.5494746865385056,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "54.9%",
              "display_range": null,
              "display_text": "54.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
              "kind": "share_pct",
              "value_pct": 54.9,
              "plain_english": "Sector explains about 54.9% of price moves in the current state."
            },
            "company_share": {
              "median": 0.14540114478628402,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "14.5%",
              "display_range": null,
              "display_text": "14.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
              "kind": "share_pct",
              "value_pct": 14.5,
              "plain_english": "Company-specific explains about 14.5% of price moves in the current state."
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
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.4097231064020279,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "41.0%",
            "display_range": null,
            "display_text": "41.0%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
            "kind": "share_pct",
            "value_pct": 41.0,
            "plain_english": "Company-specific explains about 41.0% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.2723025047813832,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "27.2%",
              "display_range": null,
              "display_text": "27.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 27.2,
              "plain_english": "Market explains about 27.2% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.31797438881658896,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "31.8%",
              "display_range": null,
              "display_text": "31.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 31.8,
              "plain_english": "Sector explains about 31.8% of price moves in the current state."
            },
            "company_share": {
              "median": 0.4097231064020279,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "41.0%",
              "display_range": null,
              "display_text": "41.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 41.0,
              "plain_english": "Company-specific explains about 41.0% of price moves in the current state."
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
            "median": 0.42360200737023196,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "42.4%",
            "display_range": null,
            "display_text": "42.4%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
            "kind": "share_pct",
            "value_pct": 42.4,
            "plain_english": "Company-specific explains about 42.4% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.3692519355813438,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "36.9%",
              "display_range": null,
              "display_text": "36.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
              "kind": "share_pct",
              "value_pct": 36.9,
              "plain_english": "Market explains about 36.9% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.20714605704842426,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "20.7%",
              "display_range": null,
              "display_text": "20.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
              "kind": "share_pct",
              "value_pct": 20.7,
              "plain_english": "Sector explains about 20.7% of price moves in the current state."
            },
            "company_share": {
              "median": 0.42360200737023196,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "42.4%",
              "display_range": null,
              "display_text": "42.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
              "kind": "share_pct",
              "value_pct": 42.4,
              "plain_english": "Company-specific explains about 42.4% of price moves in the current state."
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
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.3927628013644854,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "39.3%",
            "display_range": null,
            "display_text": "39.3%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
            "kind": "share_pct",
            "value_pct": 39.3,
            "plain_english": "Company-specific explains about 39.3% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.2921189260921248,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "29.2%",
              "display_range": null,
              "display_text": "29.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 29.2,
              "plain_english": "Market explains about 29.2% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.31511827254338975,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "31.5%",
              "display_range": null,
              "display_text": "31.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 31.5,
              "plain_english": "Sector explains about 31.5% of price moves in the current state."
            },
            "company_share": {
              "median": 0.3927628013644854,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "39.3%",
              "display_range": null,
              "display_text": "39.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 39.3,
              "plain_english": "Company-specific explains about 39.3% of price moves in the current state."
            }
          },
          "summary": "Mar: More mixed, though company-driven still has the largest share."
        },
        {
          "month_key": "2026-04",
          "month_label": "April 2026",
          "month_short_label": "Apr",
          "period_label": "2026-04-01 to 2026-04-23",
          "n_obs": 14,
          "partial_month": false,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.4938411532298879,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "49.4%",
            "display_range": null,
            "display_text": "49.4%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 14 trading days.",
            "kind": "share_pct",
            "value_pct": 49.4,
            "plain_english": "Company-specific explains about 49.4% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.31849758618940915,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "31.8%",
              "display_range": null,
              "display_text": "31.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 14 trading days.",
              "kind": "share_pct",
              "value_pct": 31.8,
              "plain_english": "Market explains about 31.8% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.18766126058070287,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "18.8%",
              "display_range": null,
              "display_text": "18.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 14 trading days.",
              "kind": "share_pct",
              "value_pct": 18.8,
              "plain_english": "Sector explains about 18.8% of price moves in the current state."
            },
            "company_share": {
              "median": 0.4938411532298879,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "49.4%",
              "display_range": null,
              "display_text": "49.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 14 trading days.",
              "kind": "share_pct",
              "value_pct": 49.4,
              "plain_english": "Company-specific explains about 49.4% of price moves in the current state."
            }
          },
          "summary": "Apr: Mostly company-driven."
        }
      ],
      "regimes": [
        {
          "id": 0,
          "label": "Low Volatility",
          "pct_time": 0.5020080321285141,
          "expected_duration_days": 7.8125,
          "current_probability": 1.0,
          "n_days_effective": 125.0,
          "volatility": {
            "median": 0.019633825353061053,
            "low": 0.019633825353061053,
            "high": 0.019633825353061053
          },
          "volatility_label": "Low Volatility",
          "current_probability_display": null
        },
        {
          "id": 1,
          "label": "High Volatility",
          "pct_time": 0.4979919678714859,
          "expected_duration_days": 7.75,
          "current_probability": 0.0,
          "n_days_effective": 124.0,
          "volatility": {
            "median": 0.03671456580681843,
            "low": 0.03671456580681843,
            "high": 0.03671456580681843
          },
          "volatility_label": "High Volatility",
          "current_probability_display": 0.0
        }
      ],
      "transitions": {
        "mean": [
          [
            0.8790322580645161,
            0.12096774193548387
          ],
          [
            0.12903225806451613,
            0.8709677419354839
          ]
        ],
        "low": [],
        "high": [],
        "counts": [
          [
            109.0,
            15.0
          ],
          [
            16.0,
            108.0
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
        "market_link_display": "0.60",
        "sector_link_display": "1.58",
        "market_link_explainer": "Modest market link. A 1% market move has lined up with about a 0.60% stock move in the same direction in this state. This is a point estimate from 251 trading days.",
        "sector_link_explainer": "High sector link. A 1% sector move has lined up with about a 1.58% stock move in the same direction in this state. This is a point estimate from 251 trading days.",
        "stock_persistence_display": "-0.46",
        "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
        "history_limited_note": "Read is based on 251 trading days versus the 252-day target."
      },
      "current_summary": {
        "regime_label": "Low Volatility",
        "dominant_driver": "sector",
        "dominant_driver_label": "Sector",
        "driver_share_pct": 59.3,
        "driver_share_display": "59.3%",
        "confidence_label": "High, limited history",
        "confidence_pct": 100.0,
        "display_confidence_pct": null,
        "confidence_note": "Based on 251 trading days relative to the 252-day target.",
        "history_days": 251,
        "history_limited": true,
        "volatility_label": "Low Volatility",
        "lead_signal_text": "No stable lead signal.",
        "state_term": "state",
        "stay_probability": 0.8790322580645161,
        "effective_days": 125.0,
        "persistence_note": "This state looks more persistent, with a typical run length of about 7.8 days.",
        "expected_duration_days": 7.8
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
          "expected_duration_days": 7.8125,
          "current_probability": 1.0,
          "n_days_effective": 125.0,
          "volatility": {
            "median": 0.019633825353061053,
            "low": 0.019633825353061053,
            "high": 0.019633825353061053
          },
          "volatility_label": "Low Volatility"
        },
        {
          "id": 1,
          "label": "High Volatility",
          "pct_time": 0.4979919678714859,
          "expected_duration_days": 7.75,
          "current_probability": 0.0,
          "n_days_effective": 124.0,
          "volatility": {
            "median": 0.03671456580681843,
            "low": 0.03671456580681843,
            "high": 0.03671456580681843
          },
          "volatility_label": "High Volatility"
        }
      ],
      "transitions": [
        [
          0.8790322580645161,
          0.12096774193548387
        ],
        [
          0.12903225806451613,
          0.8709677419354839
        ]
      ],
      "transition_intervals": {
        "mean": [
          [
            0.8790322580645161,
            0.12096774193548387
          ],
          [
            0.12903225806451613,
            0.8709677419354839
          ]
        ],
        "low": [],
        "high": [],
        "counts": [
          [
            109.0,
            15.0
          ],
          [
            16.0,
            108.0
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
        "text": "Liquidity score: 99.3 — Strong",
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
    "liq_subtitle": "Peer-relative liquidity is respectable, but day-to-day access looks thinner because recent volume is lower and the bid side is lighter.",
    "market_comparison_title": "How You Compare to the Market",
    "market_comparison_subtitle": "Context relative to market, sector, and peer medians.",
    "perf_title": "Stock Performance",
    "perf_subtitle": "Recent returns are strong, with the stock up 16.3% over one month and ahead of both peers and the market.",
    "perf_insight": "The return backdrop is firm, with one-month performance 13.9% ahead of peers and 2.4% ahead of the market. Trading conditions are less emphatic, as one-day average volume is 28.8% below the one-month average while sector moves still explain 59.3% of the tape.",
    "drivers_title": "What Moves Your Stock Price?",
    "drivers_subtitle": "Sector moves are the main driver now, accounting for 59.3% of recent trading.",
    "drivers_strip": [
      {
        "title": "Current Driver (Last 5 Days)",
        "text": "Over the last 5 trading days, moves are mainly sector-driven, accounting for about 59.3% of price changes. Other influences are market 23.1%, and company-specific 17.6%."
      },
      {
        "title": "Driver Mix",
        "text": "Based on the last 5 trading days, current mix is market 23.1%, sector 59.3%, and company-specific 17.6%."
      },
      {
        "title": "Monthly Trend",
        "text": "The driver mix has been consistently company-driven across Feb to Apr."
      }
    ],
    "drivers_pie_title": "Current Driver Mix (Last 5 Days)",
    "drivers_pie_note": "Based on the last 5 trading days, current split is market 23.1%, sector 59.3%, and company-specific 17.6%.",
    "lead_lag_title": "",
    "lead_lag_note": "",
    "rolling_title": "Monthly Driver Shift",
    "rolling_latest_label": "Latest: {period}",
    "rolling_note": "Each bar shows the monthly split between market-, sector-, and company-driven moves.",
    "drivers_bottom_line": "That matters because the stock is moving with a supportive sector backdrop rather than on company-specific news alone. With one-day average volume 28.8% below the one-month average, the move may feel thinner day to day.",
    "drivers_wtd_title": "Key Reads",
    "drivers_wtd_list": [
      "Main driver now: sector factors account for 59.3% of recent price moves.",
      "Monthly change: the mix was more balanced in Feb and Mar, then turned mostly sector in Apr."
    ],
    "regime_title": "Market State",
    "regime_subtitle": "Trading conditions look orderly, but immediate access is less balanced than the headline spread",
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
    "exec_check_subtitle": "Combines the final continuous-session displayed book before close, trade-size stress tests based on Apr 23, 2025 to Apr 23, 2026 (241 trading days • 3,982,148 trades), large sell-side orders observed today, and intraday spread/depth during the continuous trading session.",
    "order_book_title": "Order Book Depth (Available Liquidity)",
    "order_book_note": "Depth shown is based on the displayed order book.",
    "peer_capacity_title": "Peer Capacity Context",
    "peer_capacity_note": "Immediate buy-side depth is lighter than the monthly baseline, so day-to-day access may feel weaker than the 1M score",
    "impact_summary_title": "Estimated Price Impact (Sell Orders)",
    "impact_summary_subtitle": "Approximate price impact (%) for sell orders.",
    "exec_check_insight": "The near-term book is bid-light, with displayed bid depth at 0.62x of ask depth despite a 1 tick spread. That matters because buy-side access can feel thinner than the six-month liquidity score implies.",
    "trader_composition_title": "Who's Trading Your Stock?",
    "trader_composition_subtitle": "Shows whether trading is mostly retail-like, institution-like, mixed, or unclassified.",
    "trader_retail_threshold": "Retail-like flow",
    "trader_mixed_threshold": "Mixed flow",
    "trader_instit_threshold": "Institution-like flow",
    "peer_trader_title": "Peer Comparison: Trader Mix",
    "peer_trader_subtitle": "How the trader mix compares with peers.",
    "price_moving_title": "Which Trades Move the Price?",
    "price_moving_subtitle": "Price-moving trades are 33.3% of total trades.",
    "intraday_title": "When Does Trading Happen?",
    "intraday_subtitle": "Trading quality is better judged by the current book and recent flow than by intraday concentration.",
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
    "intraday_insight": "Immediate access looks less balanced than the spread alone suggests, with displayed bid depth at 0.62x of ask depth and a 1 tick spread. That matters because execution can feel thinner on the buy side even with a tight quoted market.",
    "short_title": "Short Selling & Lending",
    "short_subtitle": "The current trading picture is better explained by sector leadership and book balance than by short activity.",
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
    "exec_subtitle": "Liquidity is mixed for the stock’s size, with solid peer standing offset by a thinner tape today.",
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
        "value": "99.3/100",
        "sub": "Peer median 96.8 (+2.5 pts)",
        "interp": {
          "text": "Strong",
          "cls": "interpretation-good",
          "icon": "◆"
        }
      },
      {
        "title": "Volume vs Peers",
        "value": "HK$657.7M",
        "sub": "Peer median HK$238.4M",
        "interp": {
          "text": "Strong",
          "cls": "interpretation-good",
          "icon": "◆"
        }
      },
      {
        "title": "Spread",
        "value": "0.09%",
        "sub": "1.14 ticks; peers 0.20%",
        "interp": {
          "text": "Tighter",
          "cls": "interpretation-good",
          "icon": "◆"
        }
      }
    ],
    "liq_insight": "Liquidity is mixed rather than clearly strong or weak. The six-month liquidity score is 99.3, which is 2.5 points above the peer median of 96.8, so peer-relative access is holding up. Near-term trading is thinner, with one-day average volume down 28.8% from the one-month average and displayed bid depth at 0.62x of ask depth, which can make immediate buy-side access feel weaker than the longer-term profile.",
    "perf_badge": "Context",
    "exec_check_tiles": [
      {
        "title": "Mid Price",
        "value": "63.275",
        "note": "final continuous-session displayed book before close",
        "color": "text-white"
      },
      {
        "title": "Spread",
        "value": "0.08%",
        "note": "1.00 ticks",
        "color": "text-slate-300"
      },
      {
        "title": "Depth",
        "value": "0.62x",
        "note": "Bid depth / ask depth on the displayed order book",
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
        "text": "Estimated impact ~-0.10% with 100.0% fill.",
        "cls": "warn"
      },
      {
        "title": "S$2.5M sell",
        "text": "Estimated impact ~-0.18% with 100.0% fill.",
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
        "subtext": "Rank 20/2571",
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
        "subtext": "0.09% • 1.14 ticks vs peers 0.20%",
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
        "value": "657.7M",
        "value_prefix": "HK$",
        "suffix": "",
        "bar_pct": 60,
        "color_value": "text-emerald-400",
        "color_bar": "bg-emerald-500",
        "subtext": "Peer median HK$238.4M",
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
        "value": "59.3",
        "suffix": "sector",
        "bar_pct": 59,
        "color_value": "text-amber-400",
        "color_bar": "bg-amber-500",
        "subtext": "Market 23.1% • Company 17.6%",
        "interpretation": {
          "text": "Sector",
          "cls": "interpretation-neutral",
          "icon": "◆"
        }
      }
    ],
    "exec_takeaways": [
      "Liquidity is mixed for the stock’s size, with a six-month liquidity score of 99.3 compared with a peer median of 96.8. That keeps peer-relative access respectable without pointing to a clearly strong or weak profile.",
      "Recent flow is thinner than the monthly average, with one-day average volume down 28.8% from the one-month",
      "The main near-term watchpoint is book balance, with displayed bid depth at 0.62x of ask depth and a 1 tick spread. That matters because immediate buy-side access can feel thinner even with a tight quoted market."
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
      "overall": "6M liquidity is strong: score 99.3 vs peer median 96.8 (+2.5 pts). 1D average volume down -28.8% from 1M. Recent flow does not show a clear deterioration from the monthly baseline.",
      "strengths": [
        "6M score 99.3 vs peer median 96.8 (+2.5 pts)."
      ],
      "concerns": [
        "1D average volume down -28.8% from 1M."
      ],
      "peer_context": "Primary-period score gap vs peers: +2.5 pts."
    },
    "market_comparison": {
      "returns": {
        "insight": "6M return is -29.4%, worse than market and peers, which suggests weaker price performance than comparable names.",
        "vs_market": "Worse than market: -29.4% vs market 9.5%.",
        "vs_sector": "In line with sector: -29.4% vs sector -27.0%.",
        "vs_peers": "Worse than peers: -29.4% vs peers -17.3%."
      },
      "adv": {
        "insight": "ADV is HK$657.7M, better than market, sector, and peers, which supports stronger day-to-day trading size than comparable names.",
        "vs_market": "Better than market: HK$657.7M vs market HK$216.3K.",
        "vs_sector": "Better than sector: HK$657.7M vs sector HK$1.2M.",
        "vs_peers": "Better than peers: HK$657.7M vs peers HK$238.4M."
      },
      "spread": {
        "insight": "Spread is 0.09%, better than market, sector, and peers, which keeps trading costs more competitive than comparable names.",
        "vs_market": "Better than market: 0.09% vs market 2.71%.",
        "vs_sector": "Better than sector: 0.09% vs sector 1.73%.",
        "vs_peers": "Better than peers: 0.09% vs peers 0.20%."
      },
      "turnover_ratio": {
        "insight": "Turnover ratio is 1.65%, better than market and sector, but worse than peers, which shows turnover is mixed across comparison groups.",
        "vs_market": "Better than market: 1.65% vs market 0.08%.",
        "vs_sector": "Better than sector: 1.65% vs sector 0.15%.",
        "vs_peers": "Worse than peers: 1.65% vs peers 1.87%."
      },
      "volatility": {
        "insight": "Volatility is 36.85%, better than market, sector, and peers, which suggests day-to-day price swings are more contained than comparable names.",
        "vs_market": "Better than market: 36.85% vs market 59.43%.",
        "vs_sector": "Better than sector: 36.85% vs sector 57.20%.",
        "vs_peers": "Better than peers: 36.85% vs peers 58.74%."
      },
      "trades": {
        "insight": "Trades is 13780, better than market, sector, and peers, which supports more fully reflective of day-to-day access day-to-day activity than comparable names.",
        "vs_market": "Better than market: 13780 vs market 20.",
        "vs_sector": "Better than sector: 13780 vs sector 65.",
        "vs_peers": "Better than peers: 13780 vs peers 6900."
      },
      "amihud": {
        "insight": "Price impact is 2.27e-11, better than market, sector, and peers, which suggests trades move price less than comparable names.",
        "vs_market": "Better than market: 2.27e-11 vs market 4.66e-08.",
        "vs_sector": "Better than sector: 2.27e-11 vs sector 1.03e-08.",
        "vs_peers": "Better than peers: 2.27e-11 vs peers 1.15e-10."
      }
    },
    "performance": {
      "overall": "Recent performance is strong relative to both peers and the market, with a 1M return of +16.3%, 13.9% above peers and 2.4% above the market. Liquidity gives a mixed read on that strength because the 6M liquidity score is 99.3, 2.5 points above the peer median, but 1D average volume is 28.8% below the 1M average. That matters because the return backdrop is firm, yet the latest trading session shows less flow behind the move, and sector factors account for 59.3% of the current tape.",
      "conclusion": "The move looks more sector-linked than company-specific, with strong recent returns but only mixed liquidity confirmation."
    },
    "drivers": {
      "overall": "Sector factors are the main force behind the stock right now, accounting for 59.3% of recent price moves. That matters because the tape is being shaped more by the group’s direction than by company-specific news, even as the 1M return of 16.3% sits ahead of peers at 13.9% and the market at 2.4%.",
      "beta": "The current read looks constructive but mixed. Price performance has been strong relative to peers and the market, yet today’s average volume is 28.8% below the 1M average, which can make the sector-led pattern feel thinner in day-to-day trading.",
      "rolling_change": "The monthly picture has shifted rather than stayed fixed. Feb and Mar were more balanced, while Apr became mostly sector, so the current sector-led pattern looks more temporary than fully established."
    },
    "regime": {
      "overall": "Low volatility points to a steadier trading backdrop, and the state’s typical run length of about 7.8 days suggests conditions are holding for more than a brief spell. That matters because day-to-day trading quality is more likely to feel consistent while this backdrop remains in place.",
      "current": "The stock is currently in a low-volatility state, which signals a calmer tape than a high-volatility phase. That gives the market a more orderly backdrop even with recent volume running 28.8% below the 1M average.",
      "transitions": "The state looks fairly settled because low volatility has tended to persist for about 7.8 days. Even so, the drop in recent average volume means the backdrop is stable but not especially deep.",
      "trading_implications": "This state looks more persistent, with a typical run length of about 7.8 days."
    },
    "execution": {
      "overall": "Displayed liquidity looks orderly but not evenly supported, because the spread is 1 tick while bid depth is only 0.62x of ask depth. That matters because the book appears tradable at the touch, but buy-side support is thinner than the top-line liquidity picture implies.",
      "concern": "The clearest stress point is the lighter bid side, with materially less displayed buying interest than selling interest. With 1D average volume also down 28.8% from the 1M average, that imbalance matters more because there is less recent flow to absorb pressure.",
      "peer_context": "The broader standing still looks respectable, with a 6M liquidity score of 99.3 compared with a peer median of 96.8, but the current book does not fully confirm that strength. The displayed depth suggests day-to-day access can feel weaker than the longer-term peer comparison indicates."
    },
    "trader_composition": {
      "overall": "Flow looks mixed by trade count and value.",
      "retail_heavy": "Retail-like trades make up 79.4% of individual trade count but only 17.3% of trade value, while institution-like trades are 5.5% of count and 56.1% of value. That split shows frequent smaller tickets alongside a value base carried by larger participants, so the flow looks mixed rather than purely retail-led or institution-led.",
      "institutional_gap": "Institution-like activity is a small share of individual trade count at 5.5% but a majority of trade value at 56.1%. That matters because value visible support is present even though it comes from relatively few trades.",
      "peer_comparison": "The mix stands out by combining a high share of retail-like trade count with a majority of value coming from institution-like trades, making the profile more balanced than a market driven mainly by one side."
    },
    "price_moving": {
      "overall": "Price-moving activity looks meaningful, but the cleaner signal is that sector moves remain the main driver of the tape at 59.3%. That points to price formation being influenced more by broader market flow than by one investor group alone, which makes the trading signal look mixed rather than stock-specific. Recent returns are firm at +16.3% over one month, ahead of peers at +13.9% and the market at +2.4%, so any imbalance is landing on a stronger price backdrop.",
      "interpretation": "",
      "asymmetry": ""
    },
    "short_selling": {
      "overall": "Short activity does not appear to be the main factor in trading conditions, as the clearer signals are a 1 tick spread, lighter displayed bid depth at 0.62x of ask depth, and volume that is 28.8% below the 1M average. That matters because day-to-day access looks more influenced by order-book balance and recent flow than by any sign of elevated short pressure.",
      "level": "N/A",
      "correlation": "N/A",
      "trend": "The short-selling trend is not showing up as a separate driver of the tape, while the stronger near-term pattern is a 16.3% 1M return with sector moves explaining 59.3% of trading. That matters because the current picture is better explained by price strength and broader market leadership than by a change in short activity.",
      "peaks": "N/A"
    },
    "intraday": {
      "overall": "Session split is open 0.5%, continuous 91.1%, and close 7.1%. Current trading concentration score is 0.110.",
      "hhi_interpretation": "A concentration score of 0.110 indicates trading is not heavily concentrated in a few short windows, which supports a steadier intraday market.",
      "best_times": "The continuous session is the clearest source of usable liquidity because it accounts for the vast majority of trading through the day.",
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
        "2382",
        "6088",
        "1989",
        "6613",
        "2018",
        "1415",
        "1478",
        "1888",
        "2338"
      ],
      "scores": [
        99.26098794243485,
        97.19953325554259,
        98.05523142746013,
        96.46052119797744,
        92.6098794243485,
        90.08168028004667,
        88.40917930766238,
        97.43290548424739,
        97.1606378840918
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
        657741572.5,
        310265873.53,
        390318485.0,
        179940740.0,
        161547303.24,
        95461466.0,
        56972980.705,
        296781440.88,
        436611326.14
      ],
      "total": 2571
    },
    "market_comparison": {
      "sector_name": "Electronic Components",
      "sector_count": 24,
      "market_count": 2571,
      "company": {
        "volatility": 0.368530038432166,
        "adv": 657741572.5,
        "spread_pct": 0.0008919234364333622,
        "turnover_ratio": 0.016528054904102668,
        "amihud": 2.272657648418554e-11,
        "trades": 13780.5
      },
      "market": {
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.7410014474990879,
          "median": 0.5942981433242553,
          "min": 0.0,
          "max": 33.69227034911436,
          "p5": 0.22075809221467163,
          "p95": 1.552970999798418,
          "count": 2571
        },
        "adv": {
          "direction": "higher_is_better",
          "mean": 56123888.36950483,
          "median": 216320.0,
          "min": 0.0,
          "max": 11463870050.0,
          "p5": 0.0,
          "p95": 210809636.25,
          "count": 2571
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.042120964152236914,
          "median": 0.027087963292653946,
          "min": 0.0005616996269061497,
          "max": 0.586235634471959,
          "p5": 0.0014031756098933932,
          "p95": 0.1346904325574228,
          "count": 2571
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.0036029047373763875,
          "median": 0.0008381450893946623,
          "min": 0.0,
          "max": 0.18345863604845108,
          "p5": 0.0,
          "p95": 0.014331697415401683,
          "count": 2552
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 6.381731162008967e-07,
          "median": 4.661678670489221e-08,
          "min": 0.0,
          "max": 2.961485977790332e-05,
          "p5": 5.154284353112252e-11,
          "p95": 3.527891875138013e-06,
          "count": 2571
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 1030.8090237261765,
          "median": 20.0,
          "min": 0.0,
          "max": 89671.5,
          "p5": 0.0,
          "p95": 5626.75,
          "count": 2571
        }
      },
      "sector": {
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.7051785777414598,
          "median": 0.5720465549062509,
          "min": 0.2510246579025973,
          "max": 1.8604739146010858,
          "p5": 0.3707339384099274,
          "p95": 1.2976403283610503,
          "count": 24
        },
        "adv": {
          "direction": "higher_is_better",
          "mean": 78781614.02104168,
          "median": 1232340.0,
          "min": 0.0,
          "max": 657741572.5,
          "p5": 0.0,
          "p95": 378310593.2794998,
          "count": 24
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.04115662510746996,
          "median": 0.017323256743711588,
          "min": 0.0008919234364333622,
          "max": 0.2056441332784217,
          "p5": 0.001339703444574967,
          "p95": 0.17530825507800757,
          "count": 24
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.010443451126451732,
          "median": 0.0014584691663266699,
          "min": 0.0,
          "max": 0.10249385779418416,
          "p5": 0.0,
          "p95": 0.03153340886278771,
          "count": 24
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 1.2667290881873153e-06,
          "median": 1.0318600134431986e-08,
          "min": 2.272657648418554e-11,
          "max": 1.9086979504143505e-05,
          "p5": 9.17540248824017e-11,
          "p95": 4.863487997960925e-06,
          "count": 24
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 1971.4375,
          "median": 65.0,
          "min": 0.0,
          "max": 13780.5,
          "p5": 0.0,
          "p95": 8505.575,
          "count": 24
        }
      },
      "peers": {
        "adv": {
          "direction": "higher_is_better",
          "mean": 240987451.936875,
          "median": 238361090.44,
          "min": 56972980.705,
          "max": 436611326.14,
          "p5": 70443950.55825,
          "p95": 420408831.74099994,
          "count": 8
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 5976.75,
          "median": 6899.5,
          "min": 2158.0,
          "max": 8853.5,
          "p5": 2187.4,
          "p95": 8733.8,
          "count": 8
        },
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.6853994374387384,
          "median": 0.587432582624906,
          "min": 0.3926225252146332,
          "max": 1.3006795976410253,
          "p5": 0.42893324761977636,
          "p95": 1.1584515646380946,
          "count": 8
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.002074283555092108,
          "median": 0.0020175063352108895,
          "min": 0.0013194376778360465,
          "max": 0.003351433177315778,
          "p5": 0.0013248319314393896,
          "p95": 0.0030830610550654047,
          "count": 8
        },
        "spread_ticks": {
          "direction": "neutral",
          "mean": 2.5614853028390705,
          "median": 2.141273450824332,
          "min": 1.3569196606394454,
          "max": 4.186262797053434,
          "p5": 1.435355039657934,
          "p95": 3.981763862430524,
          "count": 3
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 1.466012183374276e-10,
          "median": 1.1472447484692424e-10,
          "min": 4.899616845239997e-11,
          "max": 3.887369389133239e-10,
          "p5": 6.161556955143447e-11,
          "p95": 3.209133181852945e-10,
          "count": 8
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.02895697933343015,
          "median": 0.018699401541652387,
          "min": 0.005948223923133164,
          "max": 0.10249385779418416,
          "p5": 0.00836788480774178,
          "p95": 0.0779423702304685,
          "count": 8
        }
      }
    },
    "returns": [
      {
        "horizon": "1M",
        "stock": 0.1625344352617082,
        "market": 0.02409148729213495,
        "sector": 0.020324309283795694,
        "peers": 0.1394859013866594
      },
      {
        "horizon": "3M",
        "stock": -0.0445283018867928,
        "market": 0.0420090494699672,
        "sector": -0.10699079605752115,
        "peers": -0.02152750158705863
      },
      {
        "horizon": "6M",
        "stock": -0.2939208031232571,
        "market": 0.09531099833042789,
        "sector": -0.2700463311288931,
        "peers": -0.17328969792894067
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
      "share_market": 0.23085304391699887,
      "share_sector": 0.5934508145135,
      "share_idio": 0.1756961415695012,
      "beta_market": 0.6038293535808658,
      "beta_sector": 1.5839073331331972,
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
            "median": 0.23085304391699887,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "23.1%",
            "display_range": null,
            "display_text": "23.1%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "share_pct",
            "value_pct": 23.1,
            "plain_english": "Market explains about 23.1% of price moves in the current state."
          },
          "sector_share": {
            "median": 0.5934508145135,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "59.3%",
            "display_range": null,
            "display_text": "59.3%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "share_pct",
            "value_pct": 59.3,
            "plain_english": "Sector explains about 59.3% of price moves in the current state."
          },
          "company_share": {
            "median": 0.1756961415695012,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "17.6%",
            "display_range": null,
            "display_text": "17.6%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "share_pct",
            "value_pct": 17.6,
            "plain_english": "Company-specific explains about 17.6% of price moves in the current state."
          },
          "basis": "current_state"
        },
        "current_sensitivities": {
          "beta_market": {
            "median": 0.6038293535808658,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "0.60",
            "display_range": null,
            "display_text": "0.60",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "beta",
            "strength_label": "Modest",
            "plain_english": "Modest market link: a 1% market move has lined up with about a 0.60% stock move in the same direction in this state.",
            "value_num": 0.6
          },
          "beta_stock_lag": {
            "median": -0.45732296240227294,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "-0.46",
            "display_range": null,
            "display_text": "-0.46",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "lag_beta",
            "value_num": -0.46
          },
          "beta_sector": {
            "median": 1.5839073331331972,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "1.58",
            "display_range": null,
            "display_text": "1.58",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "beta",
            "strength_label": "High",
            "plain_english": "High sector link: a 1% sector move has lined up with about a 1.58% stock move in the same direction in this state.",
            "value_num": 1.58
          },
          "beta_market_lag": {
            "median": -0.694523223789306,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "-0.69",
            "display_range": null,
            "display_text": "-0.69",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "lag_beta",
            "value_num": -0.69
          },
          "beta_sector_lag": {
            "median": 1.878698950424457,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "1.88",
            "display_range": null,
            "display_text": "1.88",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "lag_beta",
            "value_num": 1.88
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
            "period_label": "2025-04-07 to 2025-04-30",
            "n_obs": 16,
            "partial_month": true,
            "dominant_driver": "sector",
            "dominant_driver_label": "Sector",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.4806299975599088,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "48.1%",
              "display_range": null,
              "display_text": "48.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 16 trading days.",
              "kind": "share_pct",
              "value_pct": 48.1,
              "plain_english": "Sector explains about 48.1% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.19167339539494221,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "19.2%",
                "display_range": null,
                "display_text": "19.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 16 trading days.",
                "kind": "share_pct",
                "value_pct": 19.2,
                "plain_english": "Market explains about 19.2% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.4806299975599088,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "48.1%",
                "display_range": null,
                "display_text": "48.1%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 16 trading days.",
                "kind": "share_pct",
                "value_pct": 48.1,
                "plain_english": "Sector explains about 48.1% of price moves in the current state."
              },
              "company_share": {
                "median": 0.327696607045149,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "32.8%",
                "display_range": null,
                "display_text": "32.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 16 trading days.",
                "kind": "share_pct",
                "value_pct": 32.8,
                "plain_english": "Company-specific explains about 32.8% of price moves in the current state."
              }
            },
            "summary": "Apr: Mostly sector-driven."
          },
          {
            "month_key": "2025-05",
            "month_label": "May 2025",
            "month_short_label": "May",
            "period_label": "2025-05-02 to 2025-05-30",
            "n_obs": 20,
            "partial_month": true,
            "dominant_driver": "sector",
            "dominant_driver_label": "Sector",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.44508142665688993,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "44.5%",
              "display_range": null,
              "display_text": "44.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 44.5,
              "plain_english": "Sector explains about 44.5% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.26773067005246143,
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
                "plain_english": "Market explains about 26.8% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.44508142665688993,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "44.5%",
                "display_range": null,
                "display_text": "44.5%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 44.5,
                "plain_english": "Sector explains about 44.5% of price moves in the current state."
              },
              "company_share": {
                "median": 0.28718790329064864,
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
            "summary": "May: More mixed, though sector-driven still has the largest share."
          },
          {
            "month_key": "2025-06",
            "month_label": "June 2025",
            "month_short_label": "Jun",
            "period_label": "2025-06-02 to 2025-06-30",
            "n_obs": 21,
            "partial_month": false,
            "dominant_driver": "sector",
            "dominant_driver_label": "Sector",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.5266497654973087,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "52.7%",
              "display_range": null,
              "display_text": "52.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 52.7,
              "plain_english": "Sector explains about 52.7% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.15468233956994623,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "15.5%",
                "display_range": null,
                "display_text": "15.5%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 15.5,
                "plain_english": "Market explains about 15.5% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.5266497654973087,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "52.7%",
                "display_range": null,
                "display_text": "52.7%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 52.7,
                "plain_english": "Sector explains about 52.7% of price moves in the current state."
              },
              "company_share": {
                "median": 0.3186678949327451,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "31.9%",
                "display_range": null,
                "display_text": "31.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 31.9,
                "plain_english": "Company-specific explains about 31.9% of price moves in the current state."
              }
            },
            "summary": "Jun: Mostly sector-driven."
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
              "median": 0.4922684262115147,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "49.2%",
              "display_range": null,
              "display_text": "49.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 49.2,
              "plain_english": "Company-specific explains about 49.2% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.11242096122909744,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "11.2%",
                "display_range": null,
                "display_text": "11.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 11.2,
                "plain_english": "Market explains about 11.2% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.39531061255938793,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "39.5%",
                "display_range": null,
                "display_text": "39.5%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 39.5,
                "plain_english": "Sector explains about 39.5% of price moves in the current state."
              },
              "company_share": {
                "median": 0.4922684262115147,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "49.2%",
                "display_range": null,
                "display_text": "49.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 49.2,
                "plain_english": "Company-specific explains about 49.2% of price moves in the current state."
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
              "median": 0.37635272617302246,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "37.6%",
              "display_range": null,
              "display_text": "37.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 37.6,
              "plain_english": "Company-specific explains about 37.6% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.3058946769253814,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "30.6%",
                "display_range": null,
                "display_text": "30.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 30.6,
                "plain_english": "Market explains about 30.6% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.31775259690159613,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "31.8%",
                "display_range": null,
                "display_text": "31.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 31.8,
                "plain_english": "Sector explains about 31.8% of price moves in the current state."
              },
              "company_share": {
                "median": 0.37635272617302246,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "37.6%",
                "display_range": null,
                "display_text": "37.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 37.6,
                "plain_english": "Company-specific explains about 37.6% of price moves in the current state."
              }
            },
            "summary": "Aug: Much more balanced across company, sector, and market factors."
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
              "median": 0.445929518692492,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "44.6%",
              "display_range": null,
              "display_text": "44.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 44.6,
              "plain_english": "Sector explains about 44.6% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.1394606835392805,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "13.9%",
                "display_range": null,
                "display_text": "13.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 13.9,
                "plain_english": "Market explains about 13.9% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.445929518692492,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "44.6%",
                "display_range": null,
                "display_text": "44.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 44.6,
                "plain_english": "Sector explains about 44.6% of price moves in the current state."
              },
              "company_share": {
                "median": 0.4146097977682275,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "41.5%",
                "display_range": null,
                "display_text": "41.5%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 41.5,
                "plain_english": "Company-specific explains about 41.5% of price moves in the current state."
              }
            },
            "summary": "Sep: More mixed, though sector-driven still has the largest share."
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
              "median": 0.441193280963919,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "44.1%",
              "display_range": null,
              "display_text": "44.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 44.1,
              "plain_english": "Market explains about 44.1% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.441193280963919,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "44.1%",
                "display_range": null,
                "display_text": "44.1%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 44.1,
                "plain_english": "Market explains about 44.1% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.22697529795268814,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "22.7%",
                "display_range": null,
                "display_text": "22.7%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 22.7,
                "plain_english": "Sector explains about 22.7% of price moves in the current state."
              },
              "company_share": {
                "median": 0.33183142108339286,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "33.2%",
                "display_range": null,
                "display_text": "33.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 33.2,
                "plain_english": "Company-specific explains about 33.2% of price moves in the current state."
              }
            },
            "summary": "Oct: More mixed, though market-driven still has the largest share."
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
              "median": 0.42897021835129306,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "42.9%",
              "display_range": null,
              "display_text": "42.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 42.9,
              "plain_english": "Company-specific explains about 42.9% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.20558582455859373,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "20.6%",
                "display_range": null,
                "display_text": "20.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 20.6,
                "plain_english": "Market explains about 20.6% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.3654439570901133,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "36.5%",
                "display_range": null,
                "display_text": "36.5%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 36.5,
                "plain_english": "Sector explains about 36.5% of price moves in the current state."
              },
              "company_share": {
                "median": 0.42897021835129306,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "42.9%",
                "display_range": null,
                "display_text": "42.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 42.9,
                "plain_english": "Company-specific explains about 42.9% of price moves in the current state."
              }
            },
            "summary": "Nov: More mixed, though company-driven still has the largest share."
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
              "median": 0.5494746865385056,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "54.9%",
              "display_range": null,
              "display_text": "54.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
              "kind": "share_pct",
              "value_pct": 54.9,
              "plain_english": "Sector explains about 54.9% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.30512416867521014,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "30.5%",
                "display_range": null,
                "display_text": "30.5%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
                "kind": "share_pct",
                "value_pct": 30.5,
                "plain_english": "Market explains about 30.5% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.5494746865385056,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "54.9%",
                "display_range": null,
                "display_text": "54.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
                "kind": "share_pct",
                "value_pct": 54.9,
                "plain_english": "Sector explains about 54.9% of price moves in the current state."
              },
              "company_share": {
                "median": 0.14540114478628402,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "14.5%",
                "display_range": null,
                "display_text": "14.5%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
                "kind": "share_pct",
                "value_pct": 14.5,
                "plain_english": "Company-specific explains about 14.5% of price moves in the current state."
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
            "dominant_driver": "company",
            "dominant_driver_label": "Company-specific",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.4097231064020279,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "41.0%",
              "display_range": null,
              "display_text": "41.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 41.0,
              "plain_english": "Company-specific explains about 41.0% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.2723025047813832,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "27.2%",
                "display_range": null,
                "display_text": "27.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 27.2,
                "plain_english": "Market explains about 27.2% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.31797438881658896,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "31.8%",
                "display_range": null,
                "display_text": "31.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 31.8,
                "plain_english": "Sector explains about 31.8% of price moves in the current state."
              },
              "company_share": {
                "median": 0.4097231064020279,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "41.0%",
                "display_range": null,
                "display_text": "41.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 41.0,
                "plain_english": "Company-specific explains about 41.0% of price moves in the current state."
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
              "median": 0.42360200737023196,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "42.4%",
              "display_range": null,
              "display_text": "42.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
              "kind": "share_pct",
              "value_pct": 42.4,
              "plain_english": "Company-specific explains about 42.4% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.3692519355813438,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "36.9%",
                "display_range": null,
                "display_text": "36.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
                "kind": "share_pct",
                "value_pct": 36.9,
                "plain_english": "Market explains about 36.9% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.20714605704842426,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "20.7%",
                "display_range": null,
                "display_text": "20.7%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
                "kind": "share_pct",
                "value_pct": 20.7,
                "plain_english": "Sector explains about 20.7% of price moves in the current state."
              },
              "company_share": {
                "median": 0.42360200737023196,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "42.4%",
                "display_range": null,
                "display_text": "42.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
                "kind": "share_pct",
                "value_pct": 42.4,
                "plain_english": "Company-specific explains about 42.4% of price moves in the current state."
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
            "dominant_driver": "company",
            "dominant_driver_label": "Company-specific",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.3927628013644854,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "39.3%",
              "display_range": null,
              "display_text": "39.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 39.3,
              "plain_english": "Company-specific explains about 39.3% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.2921189260921248,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "29.2%",
                "display_range": null,
                "display_text": "29.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 29.2,
                "plain_english": "Market explains about 29.2% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.31511827254338975,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "31.5%",
                "display_range": null,
                "display_text": "31.5%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 31.5,
                "plain_english": "Sector explains about 31.5% of price moves in the current state."
              },
              "company_share": {
                "median": 0.3927628013644854,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "39.3%",
                "display_range": null,
                "display_text": "39.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 39.3,
                "plain_english": "Company-specific explains about 39.3% of price moves in the current state."
              }
            },
            "summary": "Mar: More mixed, though company-driven still has the largest share."
          },
          {
            "month_key": "2026-04",
            "month_label": "April 2026",
            "month_short_label": "Apr",
            "period_label": "2026-04-01 to 2026-04-23",
            "n_obs": 14,
            "partial_month": false,
            "dominant_driver": "company",
            "dominant_driver_label": "Company-specific",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.4938411532298879,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "49.4%",
              "display_range": null,
              "display_text": "49.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 14 trading days.",
              "kind": "share_pct",
              "value_pct": 49.4,
              "plain_english": "Company-specific explains about 49.4% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.31849758618940915,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "31.8%",
                "display_range": null,
                "display_text": "31.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 14 trading days.",
                "kind": "share_pct",
                "value_pct": 31.8,
                "plain_english": "Market explains about 31.8% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.18766126058070287,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "18.8%",
                "display_range": null,
                "display_text": "18.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 14 trading days.",
                "kind": "share_pct",
                "value_pct": 18.8,
                "plain_english": "Sector explains about 18.8% of price moves in the current state."
              },
              "company_share": {
                "median": 0.4938411532298879,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "49.4%",
                "display_range": null,
                "display_text": "49.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 14 trading days.",
                "kind": "share_pct",
                "value_pct": 49.4,
                "plain_english": "Company-specific explains about 49.4% of price moves in the current state."
              }
            },
            "summary": "Apr: Mostly company-driven."
          }
        ],
        "regimes": [
          {
            "id": 0,
            "label": "Low Volatility",
            "pct_time": 0.5020080321285141,
            "expected_duration_days": 7.8125,
            "current_probability": 1.0,
            "n_days_effective": 125.0,
            "volatility": {
              "median": 0.019633825353061053,
              "low": 0.019633825353061053,
              "high": 0.019633825353061053
            },
            "volatility_label": "Low Volatility",
            "current_probability_display": null
          },
          {
            "id": 1,
            "label": "High Volatility",
            "pct_time": 0.4979919678714859,
            "expected_duration_days": 7.75,
            "current_probability": 0.0,
            "n_days_effective": 124.0,
            "volatility": {
              "median": 0.03671456580681843,
              "low": 0.03671456580681843,
              "high": 0.03671456580681843
            },
            "volatility_label": "High Volatility",
            "current_probability_display": 0.0
          }
        ],
        "transitions": {
          "mean": [
            [
              0.8790322580645161,
              0.12096774193548387
            ],
            [
              0.12903225806451613,
              0.8709677419354839
            ]
          ],
          "low": [],
          "high": [],
          "counts": [
            [
              109.0,
              15.0
            ],
            [
              16.0,
              108.0
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
          "market_link_display": "0.60",
          "sector_link_display": "1.58",
          "market_link_explainer": "Modest market link. A 1% market move has lined up with about a 0.60% stock move in the same direction in this state. This is a point estimate from 251 trading days.",
          "sector_link_explainer": "High sector link. A 1% sector move has lined up with about a 1.58% stock move in the same direction in this state. This is a point estimate from 251 trading days.",
          "stock_persistence_display": "-0.46",
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "history_limited_note": "Read is based on 251 trading days versus the 252-day target."
        },
        "current_summary": {
          "regime_label": "Low Volatility",
          "dominant_driver": "sector",
          "dominant_driver_label": "Sector",
          "driver_share_pct": 59.3,
          "driver_share_display": "59.3%",
          "confidence_label": "High, limited history",
          "confidence_pct": 100.0,
          "display_confidence_pct": null,
          "confidence_note": "Based on 251 trading days relative to the 252-day target.",
          "history_days": 251,
          "history_limited": true,
          "volatility_label": "Low Volatility",
          "lead_signal_text": "No stable lead signal.",
          "state_term": "state",
          "stay_probability": 0.8790322580645161,
          "effective_days": 125.0,
          "persistence_note": "This state looks more persistent, with a typical run length of about 7.8 days.",
          "expected_duration_days": 7.8
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
          "period_label": "2025-04-07 to 2025-04-30",
          "n_obs": 16,
          "partial_month": true,
          "dominant_driver": "sector",
          "dominant_driver_label": "Sector",
          "regime_label": null,
          "summary": "Apr: Mostly sector-driven.",
          "share_market": 0.19167339539494221,
          "share_sector": 0.4806299975599088,
          "share_company": 0.327696607045149,
          "share_market_display": "19.2%",
          "share_sector_display": "48.1%",
          "share_company_display": "32.8%",
          "dominant_share_display": "48.1%"
        },
        {
          "month_key": "2025-05",
          "month_label": "May 2025",
          "month_short_label": "May",
          "period_label": "2025-05-02 to 2025-05-30",
          "n_obs": 20,
          "partial_month": true,
          "dominant_driver": "sector",
          "dominant_driver_label": "Sector",
          "regime_label": null,
          "summary": "May: More mixed, though sector-driven still has the largest share.",
          "share_market": 0.26773067005246143,
          "share_sector": 0.44508142665688993,
          "share_company": 0.28718790329064864,
          "share_market_display": "26.8%",
          "share_sector_display": "44.5%",
          "share_company_display": "28.7%",
          "dominant_share_display": "44.5%"
        },
        {
          "month_key": "2025-06",
          "month_label": "June 2025",
          "month_short_label": "Jun",
          "period_label": "2025-06-02 to 2025-06-30",
          "n_obs": 21,
          "partial_month": false,
          "dominant_driver": "sector",
          "dominant_driver_label": "Sector",
          "regime_label": null,
          "summary": "Jun: Mostly sector-driven.",
          "share_market": 0.15468233956994623,
          "share_sector": 0.5266497654973087,
          "share_company": 0.3186678949327451,
          "share_market_display": "15.5%",
          "share_sector_display": "52.7%",
          "share_company_display": "31.9%",
          "dominant_share_display": "52.7%"
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
          "share_market": 0.11242096122909744,
          "share_sector": 0.39531061255938793,
          "share_company": 0.4922684262115147,
          "share_market_display": "11.2%",
          "share_sector_display": "39.5%",
          "share_company_display": "49.2%",
          "dominant_share_display": "49.2%"
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
          "summary": "Aug: Much more balanced across company, sector, and market factors.",
          "share_market": 0.3058946769253814,
          "share_sector": 0.31775259690159613,
          "share_company": 0.37635272617302246,
          "share_market_display": "30.6%",
          "share_sector_display": "31.8%",
          "share_company_display": "37.6%",
          "dominant_share_display": "37.6%"
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
          "regime_label": null,
          "summary": "Sep: More mixed, though sector-driven still has the largest share.",
          "share_market": 0.1394606835392805,
          "share_sector": 0.445929518692492,
          "share_company": 0.4146097977682275,
          "share_market_display": "13.9%",
          "share_sector_display": "44.6%",
          "share_company_display": "41.5%",
          "dominant_share_display": "44.6%"
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
          "summary": "Oct: More mixed, though market-driven still has the largest share.",
          "share_market": 0.441193280963919,
          "share_sector": 0.22697529795268814,
          "share_company": 0.33183142108339286,
          "share_market_display": "44.1%",
          "share_sector_display": "22.7%",
          "share_company_display": "33.2%",
          "dominant_share_display": "44.1%"
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
          "regime_label": null,
          "summary": "Nov: More mixed, though company-driven still has the largest share.",
          "share_market": 0.20558582455859373,
          "share_sector": 0.3654439570901133,
          "share_company": 0.42897021835129306,
          "share_market_display": "20.6%",
          "share_sector_display": "36.5%",
          "share_company_display": "42.9%",
          "dominant_share_display": "42.9%"
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
          "share_market": 0.30512416867521014,
          "share_sector": 0.5494746865385056,
          "share_company": 0.14540114478628402,
          "share_market_display": "30.5%",
          "share_sector_display": "54.9%",
          "share_company_display": "14.5%",
          "dominant_share_display": "54.9%"
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
          "share_market": 0.2723025047813832,
          "share_sector": 0.31797438881658896,
          "share_company": 0.4097231064020279,
          "share_market_display": "27.2%",
          "share_sector_display": "31.8%",
          "share_company_display": "41.0%",
          "dominant_share_display": "41.0%"
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
          "share_market": 0.3692519355813438,
          "share_sector": 0.20714605704842426,
          "share_company": 0.42360200737023196,
          "share_market_display": "36.9%",
          "share_sector_display": "20.7%",
          "share_company_display": "42.4%",
          "dominant_share_display": "42.4%"
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
          "summary": "Mar: More mixed, though company-driven still has the largest share.",
          "share_market": 0.2921189260921248,
          "share_sector": 0.31511827254338975,
          "share_company": 0.3927628013644854,
          "share_market_display": "29.2%",
          "share_sector_display": "31.5%",
          "share_company_display": "39.3%",
          "dominant_share_display": "39.3%"
        },
        {
          "month_key": "2026-04",
          "month_label": "April 2026",
          "month_short_label": "Apr",
          "period_label": "2026-04-01 to 2026-04-23",
          "n_obs": 14,
          "partial_month": false,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_label": null,
          "summary": "Apr: Mostly company-driven.",
          "share_market": 0.31849758618940915,
          "share_sector": 0.18766126058070287,
          "share_company": 0.4938411532298879,
          "share_market_display": "31.8%",
          "share_sector_display": "18.8%",
          "share_company_display": "49.4%",
          "dominant_share_display": "49.4%"
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
            "expected_duration_days": 7.8125,
            "current_probability": 1.0,
            "n_days_effective": 125.0,
            "volatility": {
              "median": 0.019633825353061053,
              "low": 0.019633825353061053,
              "high": 0.019633825353061053
            },
            "volatility_label": "Low Volatility"
          },
          {
            "id": 1,
            "label": "High Volatility",
            "pct_time": 0.4979919678714859,
            "expected_duration_days": 7.75,
            "current_probability": 0.0,
            "n_days_effective": 124.0,
            "volatility": {
              "median": 0.03671456580681843,
              "low": 0.03671456580681843,
              "high": 0.03671456580681843
            },
            "volatility_label": "High Volatility"
          }
        ],
        "transitions": [
          [
            0.8790322580645161,
            0.12096774193548387
          ],
          [
            0.12903225806451613,
            0.8709677419354839
          ]
        ]
      }
    },
    "order_book": {
      "bids": [
        {
          "level": 1,
          "price": 63.25,
          "quantity": 4000.0,
          "value": 253000.0
        },
        {
          "level": 2,
          "price": 63.2,
          "quantity": 12800.0,
          "value": 808960.0
        },
        {
          "level": 3,
          "price": 63.15,
          "quantity": 12000.0,
          "value": 757800.0
        },
        {
          "level": 4,
          "price": 63.1,
          "quantity": 20600.0,
          "value": 1299860.0
        },
        {
          "level": 5,
          "price": 63.05,
          "quantity": 20800.0,
          "value": 1311440.0
        },
        {
          "level": 6,
          "price": 63.0,
          "quantity": 53600.0,
          "value": 3376800.0
        },
        {
          "level": 7,
          "price": 62.95,
          "quantity": 23600.0,
          "value": 1485620.0
        },
        {
          "level": 8,
          "price": 62.9,
          "quantity": 43100.0,
          "value": 2710990.0
        },
        {
          "level": 9,
          "price": 62.85,
          "quantity": 31600.0,
          "value": 1986060.0
        },
        {
          "level": 10,
          "price": 62.8,
          "quantity": 62000.0,
          "value": 3893600.0
        },
        {
          "level": 11,
          "price": 62.75,
          "quantity": 11700.0,
          "value": 734175.0
        },
        {
          "level": 12,
          "price": 62.7,
          "quantity": 60200.0,
          "value": 3774540.0
        },
        {
          "level": 13,
          "price": 62.65,
          "quantity": 6000.0,
          "value": 375900.0
        },
        {
          "level": 14,
          "price": 62.6,
          "quantity": 63900.0,
          "value": 4000140.0
        },
        {
          "level": 15,
          "price": 62.55,
          "quantity": 55700.0,
          "value": 3484035.0
        },
        {
          "level": 16,
          "price": 62.5,
          "quantity": 3000.0,
          "value": 187500.0
        },
        {
          "level": 17,
          "price": 62.45,
          "quantity": 47200.0,
          "value": 2947640.0
        },
        {
          "level": 18,
          "price": 62.4,
          "quantity": 3100.0,
          "value": 193440.0
        },
        {
          "level": 19,
          "price": 62.35,
          "quantity": 12200.0,
          "value": 760670.0
        },
        {
          "level": 20,
          "price": 62.3,
          "quantity": 1000.0,
          "value": 62300.0
        },
        {
          "level": 21,
          "price": 62.25,
          "quantity": 1000.0,
          "value": 62250.0
        },
        {
          "level": 22,
          "price": 62.2,
          "quantity": 14400.0,
          "value": 895680.0
        },
        {
          "level": 23,
          "price": 62.15,
          "quantity": 1000.0,
          "value": 62150.0
        },
        {
          "level": 24,
          "price": 62.1,
          "quantity": 11500.0,
          "value": 714150.0
        },
        {
          "level": 25,
          "price": 62.05,
          "quantity": 200.0,
          "value": 12410.0
        },
        {
          "level": 26,
          "price": 62.0,
          "quantity": 20200.0,
          "value": 1252400.0
        },
        {
          "level": 27,
          "price": 61.8,
          "quantity": 1200.0,
          "value": 74160.0
        },
        {
          "level": 28,
          "price": 61.7,
          "quantity": 200.0,
          "value": 12340.0
        },
        {
          "level": 29,
          "price": 61.6,
          "quantity": 1900.0,
          "value": 117040.0
        },
        {
          "level": 30,
          "price": 61.5,
          "quantity": 9000.0,
          "value": 553500.0
        },
        {
          "level": 31,
          "price": 61.3,
          "quantity": 1200.0,
          "value": 73560.0
        },
        {
          "level": 32,
          "price": 61.2,
          "quantity": 2100.0,
          "value": 128520.0
        },
        {
          "level": 33,
          "price": 61.15,
          "quantity": 2700.0,
          "value": 165105.0
        },
        {
          "level": 34,
          "price": 61.1,
          "quantity": 5200.0,
          "value": 317720.0
        },
        {
          "level": 35,
          "price": 61.0,
          "quantity": 12400.0,
          "value": 756400.0
        },
        {
          "level": 36,
          "price": 60.9,
          "quantity": 500.0,
          "value": 30450.0
        },
        {
          "level": 37,
          "price": 60.7,
          "quantity": 500.0,
          "value": 30350.0
        },
        {
          "level": 38,
          "price": 60.55,
          "quantity": 4000.0,
          "value": 242200.0
        },
        {
          "level": 39,
          "price": 60.5,
          "quantity": 3700.0,
          "value": 223850.0
        },
        {
          "level": 40,
          "price": 60.45,
          "quantity": 100.0,
          "value": 6045.0
        },
        {
          "level": 41,
          "price": 60.4,
          "quantity": 500.0,
          "value": 30200.0
        },
        {
          "level": 42,
          "price": 60.35,
          "quantity": 100.0,
          "value": 6035.0
        },
        {
          "level": 43,
          "price": 60.3,
          "quantity": 500.0,
          "value": 30150.0
        },
        {
          "level": 44,
          "price": 60.25,
          "quantity": 800.0,
          "value": 48200.0
        },
        {
          "level": 45,
          "price": 60.2,
          "quantity": 300.0,
          "value": 18060.0
        },
        {
          "level": 46,
          "price": 60.15,
          "quantity": 500.0,
          "value": 30075.0
        },
        {
          "level": 47,
          "price": 60.1,
          "quantity": 600.0,
          "value": 36060.0
        },
        {
          "level": 48,
          "price": 60.05,
          "quantity": 700.0,
          "value": 42035.0
        },
        {
          "level": 49,
          "price": 60.0,
          "quantity": 21500.0,
          "value": 1290000.0
        },
        {
          "level": 50,
          "price": 59.9,
          "quantity": 100.0,
          "value": 5990.0
        },
        {
          "level": 51,
          "price": 59.85,
          "quantity": 1200.0,
          "value": 71820.0
        },
        {
          "level": 52,
          "price": 59.3,
          "quantity": 2500.0,
          "value": 148250.0
        },
        {
          "level": 53,
          "price": 59.25,
          "quantity": 81500.0,
          "value": 4828875.0
        },
        {
          "level": 54,
          "price": 59.2,
          "quantity": 100.0,
          "value": 5920.0
        },
        {
          "level": 55,
          "price": 59.15,
          "quantity": 2000.0,
          "value": 118300.0
        },
        {
          "level": 56,
          "price": 59.1,
          "quantity": 20000.0,
          "value": 1182000.0
        },
        {
          "level": 57,
          "price": 59.05,
          "quantity": 300.0,
          "value": 17715.0
        },
        {
          "level": 58,
          "price": 59.0,
          "quantity": 33600.0,
          "value": 1982400.0
        },
        {
          "level": 59,
          "price": 58.95,
          "quantity": 300.0,
          "value": 17685.0
        },
        {
          "level": 60,
          "price": 58.8,
          "quantity": 8500.0,
          "value": 499800.0
        },
        {
          "level": 61,
          "price": 58.75,
          "quantity": 100.0,
          "value": 5875.0
        },
        {
          "level": 62,
          "price": 58.6,
          "quantity": 400.0,
          "value": 23440.0
        },
        {
          "level": 63,
          "price": 58.5,
          "quantity": 30200.0,
          "value": 1766700.0
        },
        {
          "level": 64,
          "price": 58.3,
          "quantity": 1000.0,
          "value": 58300.0
        },
        {
          "level": 65,
          "price": 58.2,
          "quantity": 1000.0,
          "value": 58200.0
        },
        {
          "level": 66,
          "price": 58.1,
          "quantity": 700.0,
          "value": 40670.0
        },
        {
          "level": 67,
          "price": 58.0,
          "quantity": 4400.0,
          "value": 255200.0
        },
        {
          "level": 68,
          "price": 57.85,
          "quantity": 2000.0,
          "value": 115700.0
        },
        {
          "level": 69,
          "price": 57.8,
          "quantity": 1900.0,
          "value": 109820.0
        },
        {
          "level": 70,
          "price": 57.75,
          "quantity": 91600.0,
          "value": 5289900.0
        },
        {
          "level": 71,
          "price": 57.55,
          "quantity": 300.0,
          "value": 17265.0
        },
        {
          "level": 72,
          "price": 57.5,
          "quantity": 3300.0,
          "value": 189750.0
        },
        {
          "level": 73,
          "price": 57.3,
          "quantity": 200.0,
          "value": 11460.0
        },
        {
          "level": 74,
          "price": 57.25,
          "quantity": 200.0,
          "value": 11450.0
        },
        {
          "level": 75,
          "price": 57.05,
          "quantity": 400.0,
          "value": 22820.0
        },
        {
          "level": 76,
          "price": 57.0,
          "quantity": 11100.0,
          "value": 632700.0
        },
        {
          "level": 77,
          "price": 56.5,
          "quantity": 100.0,
          "value": 5650.0
        },
        {
          "level": 78,
          "price": 56.4,
          "quantity": 500.0,
          "value": 28200.0
        },
        {
          "level": 79,
          "price": 56.35,
          "quantity": 2200.0,
          "value": 123970.0
        },
        {
          "level": 80,
          "price": 56.0,
          "quantity": 7400.0,
          "value": 414400.0
        },
        {
          "level": 81,
          "price": 55.6,
          "quantity": 100.0,
          "value": 5560.0
        },
        {
          "level": 82,
          "price": 55.55,
          "quantity": 900.0,
          "value": 49995.0
        },
        {
          "level": 83,
          "price": 55.5,
          "quantity": 17400.0,
          "value": 965700.0
        },
        {
          "level": 84,
          "price": 55.45,
          "quantity": 400.0,
          "value": 22180.0
        },
        {
          "level": 85,
          "price": 55.35,
          "quantity": 200.0,
          "value": 11070.0
        },
        {
          "level": 86,
          "price": 55.3,
          "quantity": 1700.0,
          "value": 94010.0
        },
        {
          "level": 87,
          "price": 55.2,
          "quantity": 2000.0,
          "value": 110400.0
        },
        {
          "level": 88,
          "price": 55.15,
          "quantity": 3700.0,
          "value": 204055.0
        }
      ],
      "asks": [
        {
          "level": 1,
          "price": 63.3,
          "quantity": 9200.0,
          "value": 582360.0
        },
        {
          "level": 2,
          "price": 63.35,
          "quantity": 30600.0,
          "value": 1938510.0
        },
        {
          "level": 3,
          "price": 63.4,
          "quantity": 20400.0,
          "value": 1293360.0
        },
        {
          "level": 4,
          "price": 63.45,
          "quantity": 15800.0,
          "value": 1002510.0
        },
        {
          "level": 5,
          "price": 63.5,
          "quantity": 23000.0,
          "value": 1460500.0
        },
        {
          "level": 6,
          "price": 63.55,
          "quantity": 12800.0,
          "value": 813440.0
        },
        {
          "level": 7,
          "price": 63.6,
          "quantity": 13300.0,
          "value": 845880.0
        },
        {
          "level": 8,
          "price": 63.65,
          "quantity": 37000.0,
          "value": 2355050.0
        },
        {
          "level": 9,
          "price": 63.7,
          "quantity": 29200.0,
          "value": 1860040.0
        },
        {
          "level": 10,
          "price": 63.75,
          "quantity": 10300.0,
          "value": 656625.0
        },
        {
          "level": 11,
          "price": 63.8,
          "quantity": 34100.0,
          "value": 2175580.0
        },
        {
          "level": 12,
          "price": 63.85,
          "quantity": 40000.0,
          "value": 2554000.0
        },
        {
          "level": 13,
          "price": 63.9,
          "quantity": 11500.0,
          "value": 734850.0
        },
        {
          "level": 14,
          "price": 63.95,
          "quantity": 43500.0,
          "value": 2781825.0
        },
        {
          "level": 15,
          "price": 64.0,
          "quantity": 2600.0,
          "value": 166400.0
        },
        {
          "level": 16,
          "price": 64.05,
          "quantity": 900.0,
          "value": 57645.0
        },
        {
          "level": 17,
          "price": 64.1,
          "quantity": 76300.0,
          "value": 4890830.0
        },
        {
          "level": 18,
          "price": 64.15,
          "quantity": 100.0,
          "value": 6415.000000000001
        },
        {
          "level": 19,
          "price": 64.2,
          "quantity": 10600.0,
          "value": 680520.0
        },
        {
          "level": 20,
          "price": 64.25,
          "quantity": 1000.0,
          "value": 64250.0
        },
        {
          "level": 21,
          "price": 64.3,
          "quantity": 1900.0,
          "value": 122170.0
        },
        {
          "level": 22,
          "price": 64.35,
          "quantity": 300.0,
          "value": 19305.0
        },
        {
          "level": 23,
          "price": 64.45,
          "quantity": 100.0,
          "value": 6445.0
        },
        {
          "level": 24,
          "price": 64.5,
          "quantity": 10200.0,
          "value": 657900.0
        },
        {
          "level": 25,
          "price": 64.55,
          "quantity": 2500.0,
          "value": 161375.0
        },
        {
          "level": 26,
          "price": 64.6,
          "quantity": 7500.0,
          "value": 484499.99999999994
        },
        {
          "level": 27,
          "price": 64.7,
          "quantity": 10300.0,
          "value": 666410.0
        },
        {
          "level": 28,
          "price": 64.75,
          "quantity": 1400.0,
          "value": 90650.0
        },
        {
          "level": 29,
          "price": 64.8,
          "quantity": 6900.0,
          "value": 447120.0
        },
        {
          "level": 30,
          "price": 64.85,
          "quantity": 10000.0,
          "value": 648500.0
        },
        {
          "level": 31,
          "price": 64.9,
          "quantity": 5200.0,
          "value": 337480.00000000006
        },
        {
          "level": 32,
          "price": 64.95,
          "quantity": 800.0,
          "value": 51960.0
        },
        {
          "level": 33,
          "price": 65.0,
          "quantity": 15600.0,
          "value": 1014000.0
        },
        {
          "level": 34,
          "price": 65.1,
          "quantity": 2700.0,
          "value": 175769.99999999997
        },
        {
          "level": 35,
          "price": 65.2,
          "quantity": 25100.0,
          "value": 1636520.0
        },
        {
          "level": 36,
          "price": 65.25,
          "quantity": 100.0,
          "value": 6525.0
        },
        {
          "level": 37,
          "price": 65.3,
          "quantity": 9400.0,
          "value": 613820.0
        },
        {
          "level": 38,
          "price": 65.4,
          "quantity": 66000.0,
          "value": 4316400.0
        },
        {
          "level": 39,
          "price": 65.45,
          "quantity": 1200.0,
          "value": 78540.0
        },
        {
          "level": 40,
          "price": 65.5,
          "quantity": 5500.0,
          "value": 360250.0
        },
        {
          "level": 41,
          "price": 65.55,
          "quantity": 800.0,
          "value": 52440.0
        },
        {
          "level": 42,
          "price": 65.65,
          "quantity": 2000.0,
          "value": 131300.0
        },
        {
          "level": 43,
          "price": 65.7,
          "quantity": 1500.0,
          "value": 98550.0
        },
        {
          "level": 44,
          "price": 65.75,
          "quantity": 600.0,
          "value": 39450.0
        },
        {
          "level": 45,
          "price": 65.8,
          "quantity": 3900.0,
          "value": 256620.0
        },
        {
          "level": 46,
          "price": 65.85,
          "quantity": 500.0,
          "value": 32925.0
        },
        {
          "level": 47,
          "price": 65.9,
          "quantity": 1400.0,
          "value": 92260.00000000001
        },
        {
          "level": 48,
          "price": 65.95,
          "quantity": 5000.0,
          "value": 329750.0
        },
        {
          "level": 49,
          "price": 66.0,
          "quantity": 41700.0,
          "value": 2752200.0
        },
        {
          "level": 50,
          "price": 66.05,
          "quantity": 2000.0,
          "value": 132100.0
        },
        {
          "level": 51,
          "price": 66.1,
          "quantity": 100.0,
          "value": 6609.999999999999
        },
        {
          "level": 52,
          "price": 66.15,
          "quantity": 800.0,
          "value": 52920.00000000001
        },
        {
          "level": 53,
          "price": 66.2,
          "quantity": 3600.0,
          "value": 238320.0
        },
        {
          "level": 54,
          "price": 66.25,
          "quantity": 9100.0,
          "value": 602875.0
        },
        {
          "level": 55,
          "price": 66.3,
          "quantity": 2000.0,
          "value": 132600.0
        },
        {
          "level": 56,
          "price": 66.4,
          "quantity": 2500.0,
          "value": 166000.0
        },
        {
          "level": 57,
          "price": 66.45,
          "quantity": 800.0,
          "value": 53160.0
        },
        {
          "level": 58,
          "price": 66.5,
          "quantity": 9300.0,
          "value": 618450.0
        },
        {
          "level": 59,
          "price": 66.55,
          "quantity": 1000.0,
          "value": 66550.0
        },
        {
          "level": 60,
          "price": 66.6,
          "quantity": 5900.0,
          "value": 392939.99999999994
        },
        {
          "level": 61,
          "price": 66.65,
          "quantity": 100.0,
          "value": 6665.000000000001
        },
        {
          "level": 62,
          "price": 66.75,
          "quantity": 2500.0,
          "value": 166875.0
        },
        {
          "level": 63,
          "price": 66.8,
          "quantity": 20300.0,
          "value": 1356040.0
        },
        {
          "level": 64,
          "price": 66.85,
          "quantity": 5000.0,
          "value": 334250.0
        },
        {
          "level": 65,
          "price": 66.9,
          "quantity": 400.0,
          "value": 26760.000000000004
        },
        {
          "level": 66,
          "price": 66.95,
          "quantity": 2300.0,
          "value": 153985.0
        },
        {
          "level": 67,
          "price": 67.0,
          "quantity": 11700.0,
          "value": 783900.0
        },
        {
          "level": 68,
          "price": 67.05,
          "quantity": 100.0,
          "value": 6705.0
        },
        {
          "level": 69,
          "price": 67.1,
          "quantity": 500.0,
          "value": 33550.0
        },
        {
          "level": 70,
          "price": 67.2,
          "quantity": 84700.0,
          "value": 5691840.0
        },
        {
          "level": 71,
          "price": 67.3,
          "quantity": 3100.0,
          "value": 208630.0
        },
        {
          "level": 72,
          "price": 67.4,
          "quantity": 3800.0,
          "value": 256120.00000000003
        },
        {
          "level": 73,
          "price": 67.45,
          "quantity": 1700.0,
          "value": 114665.0
        },
        {
          "level": 74,
          "price": 67.5,
          "quantity": 24700.0,
          "value": 1667250.0
        },
        {
          "level": 75,
          "price": 67.55,
          "quantity": 1000.0,
          "value": 67550.0
        },
        {
          "level": 76,
          "price": 67.6,
          "quantity": 4800.0,
          "value": 324480.0
        },
        {
          "level": 77,
          "price": 67.7,
          "quantity": 600.0,
          "value": 40620.0
        },
        {
          "level": 78,
          "price": 67.75,
          "quantity": 40500.0,
          "value": 2743875.0
        },
        {
          "level": 79,
          "price": 67.8,
          "quantity": 23700.0,
          "value": 1606860.0
        },
        {
          "level": 80,
          "price": 67.85,
          "quantity": 3600.0,
          "value": 244259.99999999997
        },
        {
          "level": 81,
          "price": 67.9,
          "quantity": 5400.0,
          "value": 366660.00000000006
        },
        {
          "level": 82,
          "price": 67.95,
          "quantity": 5200.0,
          "value": 353340.0
        },
        {
          "level": 83,
          "price": 68.0,
          "quantity": 163500.0,
          "value": 11118000.0
        },
        {
          "level": 84,
          "price": 68.1,
          "quantity": 400.0,
          "value": 27239.999999999996
        },
        {
          "level": 85,
          "price": 68.15,
          "quantity": 1100.0,
          "value": 74965.0
        },
        {
          "level": 86,
          "price": 68.2,
          "quantity": 66500.0,
          "value": 4535300.0
        },
        {
          "level": 87,
          "price": 68.25,
          "quantity": 100.0,
          "value": 6825.0
        },
        {
          "level": 88,
          "price": 68.35,
          "quantity": 5000.0,
          "value": 341750.0
        },
        {
          "level": 89,
          "price": 68.4,
          "quantity": 50900.0,
          "value": 3481560.0000000005
        },
        {
          "level": 90,
          "price": 68.45,
          "quantity": 1900.0,
          "value": 130055.0
        },
        {
          "level": 91,
          "price": 68.5,
          "quantity": 19000.0,
          "value": 1301500.0
        },
        {
          "level": 92,
          "price": 68.55,
          "quantity": 1000.0,
          "value": 68550.0
        },
        {
          "level": 93,
          "price": 68.6,
          "quantity": 50300.0,
          "value": 3450579.9999999995
        },
        {
          "level": 94,
          "price": 68.65,
          "quantity": 1300.0,
          "value": 89245.00000000001
        },
        {
          "level": 95,
          "price": 68.7,
          "quantity": 600.0,
          "value": 41220.0
        },
        {
          "level": 96,
          "price": 68.75,
          "quantity": 1200.0,
          "value": 82500.0
        },
        {
          "level": 97,
          "price": 68.8,
          "quantity": 57300.0,
          "value": 3942240.0
        },
        {
          "level": 98,
          "price": 68.9,
          "quantity": 2100.0,
          "value": 144690.0
        },
        {
          "level": 99,
          "price": 68.95,
          "quantity": 300.0,
          "value": 20685.0
        },
        {
          "level": 100,
          "price": 69.0,
          "quantity": 109100.0,
          "value": 7527900.0
        }
      ]
    },
    "execution_dynamic": {
      "snapshot": {
        "valid": true,
        "snapshot_time": "2026-04-23 07:59:59.167000000",
        "snapshot_basis": "last_continuous_session_snapshot",
        "snapshot_label": "final continuous-session displayed book before close",
        "snapshot_note": "Final continuous-session displayed book before close",
        "snapshot_mic": "XHKG",
        "mid_price": 63.275,
        "spread_pct": 0.0007902015013828077,
        "spread_ticks": 1.0,
        "tick_size": 0.05,
        "displayed_levels_per_side": 100,
        "bid_depth_notional_displayed": 61188760.0,
        "ask_depth_notional_displayed": 98003935.0,
        "bid_depth_notional_top10": 61188760.0,
        "ask_depth_notional_top10": 98003935.0,
        "bid_ask_depth_ratio": 0.6244
      },
      "historical_trade_scenarios": {
        "valid": true,
        "requested_lookback_calendar_days": 365,
        "lookback_calendar_days": 365,
        "effective_calendar_days": 366,
        "history_limited": false,
        "trade_days_used": 241,
        "n_trades_used": 3982148,
        "first_trade_date": "2025-04-23",
        "last_trade_date": "2026-04-23",
        "window_label": "Apr 23, 2025 to Apr 23, 2026",
        "window_short_label": "Apr 23, 2025 to Apr 23, 2026",
        "trade_days_label": "241 trading days",
        "trade_count_label": "3,982,148 trades",
        "window_detail_label": "241 trading days • 3,982,148 trades",
        "history_note": "Trade-size percentiles use Apr 23, 2025 to Apr 23, 2026 history (241 trading days • 3,982,148 trades).",
        "scenarios": [
          {
            "key": "p90",
            "label": "90th percentile trade",
            "quantile": 0.9,
            "trade_notional": 94320.0,
            "impact_pct": -0.000395,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 0.15,
            "pct_of_adv": 0.02
          },
          {
            "key": "p95",
            "label": "95th percentile trade",
            "quantile": 0.95,
            "trade_notional": 154560.0,
            "impact_pct": -0.000395,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 0.25,
            "pct_of_adv": 0.03
          },
          {
            "key": "p99_99",
            "label": "99.99th percentile trade",
            "quantile": 0.9999,
            "trade_notional": 5159127.91,
            "impact_pct": -0.002711,
            "filled_pct": 100.0,
            "levels_consumed": 6,
            "pct_of_bid_depth": 8.43,
            "pct_of_adv": 0.87
          }
        ]
      },
      "l3_sell_order_scenarios": {
        "valid": true,
        "trade_date": "2026-04-23",
        "selection_method": "largest_observed_ask_orders_during_day",
        "orders": [
          {
            "rank": 1,
            "order_id": "4009217",
            "timestamp": "2026-04-23 01:20:17.806000000",
            "local_timestamp": "2026-04-23 09:20:17",
            "posted_price": 72.4,
            "size_shares": 117400.0,
            "notional": 8499760.0,
            "impact_pct": -0.0034189999999999997,
            "filled_pct": 100.0,
            "levels_consumed": 7,
            "pct_of_bid_depth": 13.89,
            "price_vs_mid_pct": 14.421,
            "executed_event_count": 0,
            "event_count": 1
          },
          {
            "rank": 2,
            "order_id": "3790359553",
            "timestamp": "2026-04-23 06:38:26.916000000",
            "local_timestamp": "2026-04-23 14:38:26",
            "posted_price": 63.3,
            "size_shares": 84100.0,
            "notional": 5323530.0,
            "impact_pct": -0.002761,
            "filled_pct": 100.0,
            "levels_consumed": 6,
            "pct_of_bid_depth": 8.7,
            "price_vs_mid_pct": 0.04,
            "executed_event_count": 0,
            "event_count": 35
          },
          {
            "rank": 3,
            "order_id": "2258662913",
            "timestamp": "2026-04-23 03:10:40.852000000",
            "local_timestamp": "2026-04-23 11:10:40",
            "posted_price": 63.4,
            "size_shares": 66000.0,
            "notional": 4184400.0,
            "impact_pct": -0.002376,
            "filled_pct": 100.0,
            "levels_consumed": 5,
            "pct_of_bid_depth": 6.84,
            "price_vs_mid_pct": 0.198,
            "executed_event_count": 0,
            "event_count": 22
          }
        ]
      },
      "intraday_liquidity_profile": {
        "valid": true,
        "trade_date": "2026-04-23",
        "bucket_minutes": 30,
        "displayed_levels_per_side": 100,
        "tick_size": 0.05,
        "timezone": "HKT (UTC+8)",
        "session_label": "HKEX continuous trading session",
        "bucket_label_basis": "bucket start time",
        "display_window_label": "HKEX continuous trading session",
        "bucket_note": "Buckets are shown in local market time and labeled by bucket start.",
        "reason": null,
        "rows": [
          {
            "bucket": "09:30",
            "spread_pct": 0.0007766990291263902,
            "spread_ticks": 1.0000000000002274,
            "bid_depth_notional": 53496730.0,
            "ask_depth_notional": 106623590.0,
            "mid_price": 64.375
          },
          {
            "bucket": "10:00",
            "spread_pct": 0.0007791195948577662,
            "spread_ticks": 0.9999999999999432,
            "bid_depth_notional": 56388305.0,
            "ask_depth_notional": 109951500.0,
            "mid_price": 64.17500000000001
          },
          {
            "bucket": "10:30",
            "spread_pct": 0.0007840062720501318,
            "spread_ticks": 0.9999999999999432,
            "bid_depth_notional": 59027130.0,
            "ask_depth_notional": 111180760.0,
            "mid_price": 63.775
          },
          {
            "bucket": "11:00",
            "spread_pct": 0.000789577575996909,
            "spread_ticks": 1.0000000000000853,
            "bid_depth_notional": 59907305.0,
            "ask_depth_notional": 102668555.0,
            "mid_price": 63.325
          },
          {
            "bucket": "11:30",
            "spread_pct": 0.0007870916961825606,
            "spread_ticks": 0.9999999999999432,
            "bid_depth_notional": 56950980.0,
            "ask_depth_notional": 99254245.0,
            "mid_price": 63.525
          },
          {
            "bucket": "13:00",
            "spread_pct": 0.0007840062720501318,
            "spread_ticks": 0.9999999999999432,
            "bid_depth_notional": 63344475.0,
            "ask_depth_notional": 103789895.0,
            "mid_price": 63.775
          },
          {
            "bucket": "13:30",
            "spread_pct": 0.0007852375343542091,
            "spread_ticks": 1.0000000000000853,
            "bid_depth_notional": 66627915.0,
            "ask_depth_notional": 107480745.0,
            "mid_price": 63.675
          },
          {
            "bucket": "14:00",
            "spread_pct": 0.0007889546351084365,
            "spread_ticks": 0.9999999999999432,
            "bid_depth_notional": 56564115.0,
            "ask_depth_notional": 116217230.0,
            "mid_price": 63.375
          },
          {
            "bucket": "14:30",
            "spread_pct": 0.0007914523149980889,
            "spread_ticks": 1.0000000000000853,
            "bid_depth_notional": 57233700.0,
            "ask_depth_notional": 112843025.0,
            "mid_price": 63.175
          },
          {
            "bucket": "15:00",
            "spread_pct": 0.0007908264136021693,
            "spread_ticks": 0.9999999999999432,
            "bid_depth_notional": 59415530.0,
            "ask_depth_notional": 94362995.0,
            "mid_price": 63.225
          },
          {
            "bucket": "15:30",
            "spread_pct": 0.0007902015013828077,
            "spread_ticks": 0.9999999999999432,
            "bid_depth_notional": 61188760.0,
            "ask_depth_notional": 98003935.0,
            "mid_price": 63.275
          }
        ],
        "summary": {
          "median_spread_pct": 0.0007870916961825606,
          "median_spread_ticks": 0.9999999999999432,
          "median_bid_depth_notional": 59027130.0,
          "median_ask_depth_notional": 106623590.0,
          "tightest_bucket": "09:30",
          "widest_bucket": "14:30",
          "deepest_bid_bucket": "13:30",
          "thinnest_bid_bucket": "09:30"
        }
      }
    },
    "peer_capacity": {
      "bx_ticket_pct_adv_50k": 0.0,
      "peers": [
        {
          "ticker": "2338",
          "pct": 0.2
        },
        {
          "ticker": "1888",
          "pct": 0.2
        },
        {
          "ticker": "6088",
          "pct": 0.2
        },
        {
          "ticker": "1989",
          "pct": 0.3
        },
        {
          "ticker": "6613",
          "pct": 0.6
        },
        {
          "ticker": "2018",
          "pct": 0.6
        },
        {
          "ticker": "1415",
          "pct": 1.1
        },
        {
          "ticker": "1478",
          "pct": 2.2
        }
      ]
    },
    "trader_composition": {
      "primary_period": "6m",
      "periods": {
        "1d": {
          "valid": true,
          "currency": "HKD",
          "n_trades": 5994,
          "n_runs": 0,
          "n_trade_days": 1,
          "first_trade_date": "2026-04-23",
          "last_trade_date": "2026-04-23",
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
            "retail_pct": 0.8476810143476811,
            "mixed_pct": 0.11061061061061062,
            "instit_pct": 0.04170837504170837,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.1961281708761982,
            "mixed_qty_pct": 0.2637337656231575,
            "instit_qty_pct": 0.5401380635006443,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.19628900724328324,
            "mixed_notional_pct": 0.2641711036269148,
            "instit_notional_pct": 0.539539889129802,
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
              "retail": 5081,
              "mixed": 663,
              "institutional": 250,
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
            "avg": 77443.45631464798,
            "median": 12760.0
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
          "n_trades": 141235,
          "n_runs": 0,
          "n_trade_days": 21,
          "first_trade_date": "2026-03-23",
          "last_trade_date": "2026-04-23",
          "period_days": 31,
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
            "retail_pct": 0.7908592062873934,
            "mixed_pct": 0.14665628208305306,
            "instit_pct": 0.06248451162955358,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.15778455439868525,
            "mixed_qty_pct": 0.2383573982288852,
            "instit_qty_pct": 0.6038580473724295,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.1577550549643337,
            "mixed_notional_pct": 0.23703714936247203,
            "instit_notional_pct": 0.6052077956731943,
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
              "retail": 111697,
              "mixed": 20713,
              "institutional": 8825,
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
            "avg": 109200.02931808689,
            "median": 21760.0
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
          "n_trades": 381583,
          "n_runs": 0,
          "n_trade_days": 63,
          "first_trade_date": "2026-01-19",
          "last_trade_date": "2026-04-23",
          "period_days": 94,
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
            "retail_pct": 0.7912275966172497,
            "mixed_pct": 0.14668368349743044,
            "instit_pct": 0.06208871988531984,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.15821394264475883,
            "mixed_qty_pct": 0.2400757185100949,
            "instit_qty_pct": 0.6017103388451462,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.1582386989020946,
            "mixed_notional_pct": 0.23917787257527473,
            "instit_notional_pct": 0.6025834285226307,
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
              "retail": 301919,
              "mixed": 55972,
              "institutional": 23692,
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
            "avg": 107917.58131203434,
            "median": 21420.0
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
          "n_trades": 864732,
          "n_runs": 0,
          "n_trade_days": 126,
          "first_trade_date": "2025-10-08",
          "last_trade_date": "2026-04-23",
          "period_days": 197,
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
            "retail_pct": 0.7935984790663466,
            "mixed_pct": 0.15104448545907864,
            "instit_pct": 0.05535703547457478,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.17186046556526166,
            "mixed_qty_pct": 0.2635870166441306,
            "instit_qty_pct": 0.5645525177906078,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.1727340049639038,
            "mixed_notional_pct": 0.2663116983287457,
            "instit_notional_pct": 0.5609542967073505,
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
              "retail": 686250,
              "mixed": 130613,
              "institutional": 47869,
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
            "avg": 98752.1488394786,
            "median": 19875.0
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
      "n_trades": 864732,
      "n_runs": 0,
      "n_trade_days": 126,
      "first_trade_date": "2025-10-08",
      "last_trade_date": "2026-04-23",
      "period_days": 197,
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
        "retail_pct": 0.7935984790663466,
        "mixed_pct": 0.15104448545907864,
        "instit_pct": 0.05535703547457478,
        "ambiguous_pct": null,
        "unobservable_pct": null,
        "unclear_pct": null,
        "retail_qty_pct": null,
        "mixed_qty_pct": null,
        "instit_qty_pct": null,
        "ambiguous_qty_pct": null,
        "unobservable_qty_pct": null,
        "unclear_qty_pct": null,
        "retail_notional_pct": 0.1727340049639038,
        "mixed_notional_pct": 0.2663116983287457,
        "instit_notional_pct": 0.5609542967073505,
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
        "avg": 98752.1488394786,
        "median": 19875.0
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
            "n_trades": 96242,
            "n_runs": 0,
            "retail_pct": 0.7915047484466241,
            "mixed_pct": 0.14438602689054675,
            "instit_pct": 0.06410922466282912,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "avg_trade_size": 113490.812038611,
            "avg_run_notional": null,
            "retail_qty_pct": 0.15627851366653203,
            "mixed_qty_pct": 0.22485198956414,
            "instit_qty_pct": 0.618869496769328,
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
            "total_quantity": 175680011.0
          },
          {
            "month": "2026-03",
            "n_trades": 113231,
            "n_runs": 0,
            "retail_pct": 0.7691003347139918,
            "mixed_pct": 0.16336515618514363,
            "instit_pct": 0.0675345091008646,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "avg_trade_size": 110538.61216257031,
            "avg_run_notional": null,
            "retail_qty_pct": 0.1472274538644013,
            "mixed_qty_pct": 0.25803713347647234,
            "instit_qty_pct": 0.5947354126591263,
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
            "total_quantity": 228446965.0
          },
          {
            "month": "2026-02",
            "n_trades": 109838,
            "n_runs": 0,
            "retail_pct": 0.819880187184763,
            "mixed_pct": 0.1283071432473279,
            "instit_pct": 0.0518126695679091,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "avg_trade_size": 91953.27583386442,
            "avg_run_notional": null,
            "retail_qty_pct": 0.18248587274053585,
            "mixed_qty_pct": 0.24440655104963854,
            "instit_qty_pct": 0.5731075762098257,
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
            "total_quantity": 171643517.0
          },
          {
            "month": "2026-01",
            "n_trades": 128883,
            "n_runs": 0,
            "retail_pct": 0.7589984714818867,
            "mixed_pct": 0.17186905953461667,
            "instit_pct": 0.06913246898349666,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "avg_trade_size": 124107.23029336684,
            "avg_run_notional": null,
            "retail_qty_pct": 0.14693267711783756,
            "mixed_qty_pct": 0.24983496595734142,
            "instit_qty_pct": 0.603232356924821,
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
            "total_quantity": 248018526.0
          },
          {
            "month": "2025-12",
            "n_trades": 82893,
            "n_runs": 0,
            "retail_pct": 0.8069921465021171,
            "mixed_pct": 0.14655037216652794,
            "instit_pct": 0.046457481331354876,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "avg_trade_size": 89827.3069113194,
            "avg_run_notional": null,
            "retail_qty_pct": 0.2041692157813397,
            "mixed_qty_pct": 0.28023375942679873,
            "instit_qty_pct": 0.5155970247918615,
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
            "total_quantity": 113016362.0
          },
          {
            "month": "2025-11",
            "n_trades": 200102,
            "n_runs": 0,
            "retail_pct": 0.834694305903989,
            "mixed_pct": 0.1243465832425463,
            "instit_pct": 0.040959110853464736,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "avg_trade_size": 77314.8072731407,
            "avg_run_notional": null,
            "retail_qty_pct": 0.21185286513912446,
            "mixed_qty_pct": 0.2784244129230486,
            "instit_qty_pct": 0.509722721937827,
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
            "total_quantity": 229074740.0
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
      "total_trades": 772210,
      "price_moving_trades": 257358,
      "pct_price_moving": 33.327462736820294,
      "all_movers": {
        "count": 257358,
        "avg_size": 111779.95079640034,
        "median_size": 23640.0,
        "retail_count": 200171,
        "mixed_count": 41075,
        "institutional_count": 16112,
        "ambiguous_count": 0,
        "unobservable_count": 0,
        "retail_pct": 77.77920251167633,
        "mixed_pct": 15.960257695505872,
        "instit_pct": 6.260539792817788,
        "unclear_pct": null
      },
      "positive_movers": {
        "count": 128549,
        "avg_size": 106400.73870275148,
        "median_size": 22240.0,
        "retail_count": 102550,
        "mixed_count": 18638,
        "institutional_count": 7361,
        "ambiguous_count": 0,
        "unobservable_count": 0,
        "retail_pct": 79.77502742145019,
        "mixed_pct": 14.498751448863858,
        "instit_pct": 5.726221129685957,
        "unclear_pct": null
      },
      "negative_movers": {
        "count": 128809,
        "avg_size": 117148.30499080033,
        "median_size": 25120.0,
        "retail_count": 97621,
        "mixed_count": 22437,
        "institutional_count": 8751,
        "ambiguous_count": 0,
        "unobservable_count": 0,
        "retail_pct": 75.78740615950748,
        "mixed_pct": 17.418813902755243,
        "instit_pct": 6.79377993773727,
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
          "opening": 0.007834635832440989,
          "continuous": 0.9354526855011729,
          "closing": 0.05474217208993943,
          "auctions": 0.06257680792238042,
          "other": 0.001970506576446789
        },
        "1M": {
          "opening": 0.006351127136456295,
          "continuous": 0.9160484858677814,
          "closing": 0.062282315993295624,
          "auctions": 0.06863344312975192,
          "other": 0.01531807100246655
        },
        "3M": {
          "opening": 0.005848482140999359,
          "continuous": 0.9072998480685623,
          "closing": 0.0729361157872357,
          "auctions": 0.07878459792823506,
          "other": 0.013915554003202584
        },
        "6M": {
          "opening": 0.005102805070888309,
          "continuous": 0.9105699319627578,
          "closing": 0.07072543463094333,
          "auctions": 0.07582823970183164,
          "other": 0.013601828335410458
        }
      },
      "hhi": {
        "1D": 0.10725761671932654,
        "1M": 0.11421947853821166,
        "3M": 0.11019885017354143,
        "6M": 0.11001305574553348
      },
      "profile_buckets": [
        {
          "time": "09:00",
          "avg_share": 0.0044
        },
        {
          "time": "09:30",
          "avg_share": 0.167
        },
        {
          "time": "10:00",
          "avg_share": 0.0924
        },
        {
          "time": "10:30",
          "avg_share": 0.066
        },
        {
          "time": "11:00",
          "avg_share": 0.057
        },
        {
          "time": "11:30",
          "avg_share": 0.0352
        },
        {
          "time": "12:00",
          "avg_share": 0.0795
        },
        {
          "time": "13:00",
          "avg_share": 0.0714
        },
        {
          "time": "13:30",
          "avg_share": 0.0644
        },
        {
          "time": "14:00",
          "avg_share": 0.062
        },
        {
          "time": "14:30",
          "avg_share": 0.056
        },
        {
          "time": "15:00",
          "avg_share": 0.068
        },
        {
          "time": "15:30",
          "avg_share": 0.1158
        },
        {
          "time": "16:00",
          "avg_share": 0.0608
        }
      ],
      "peers_hhi_rows": [
        {
          "ticker": "2382",
          "auctions_pct": 7.065610881296873,
          "hhi": 0.11151181693716712,
          "interp": {
            "text": "Spread out",
            "cls": "bg-emerald-500/20 text-emerald-400",
            "you": true
          }
        },
        {
          "ticker": "6088",
          "auctions_pct": 1.776714543835256,
          "hhi": 0.14795833966522992,
          "interp": {
            "text": "Spread out",
            "cls": "bg-emerald-500/20 text-emerald-400"
          }
        },
        {
          "ticker": "1989",
          "auctions_pct": 1.4655011980641504,
          "hhi": 0.1629070252616385,
          "interp": {
            "text": "Moderate",
            "cls": "bg-amber-500/20 text-amber-400"
          }
        },
        {
          "ticker": "6613",
          "auctions_pct": 2.088884251916265,
          "hhi": 0.1365828217114902,
          "interp": {
            "text": "Spread out",
            "cls": "bg-emerald-500/20 text-emerald-400"
          }
        },
        {
          "ticker": "2018",
          "auctions_pct": 6.945529152265452,
          "hhi": 0.11457311459681499,
          "interp": {
            "text": "Spread out",
            "cls": "bg-emerald-500/20 text-emerald-400"
          }
        },
        {
          "ticker": "1415",
          "auctions_pct": 2.187249722164147,
          "hhi": 0.12393189005299605,
          "interp": {
            "text": "Spread out",
            "cls": "bg-emerald-500/20 text-emerald-400"
          }
        },
        {
          "ticker": "1478",
          "auctions_pct": 2.6780837891816054,
          "hhi": 0.12995118814576231,
          "interp": {
            "text": "Spread out",
            "cls": "bg-emerald-500/20 text-emerald-400"
          }
        },
        {
          "ticker": "1888",
          "auctions_pct": 2.5620060398374367,
          "hhi": 0.13208953733514803,
          "interp": {
            "text": "Spread out",
            "cls": "bg-emerald-500/20 text-emerald-400"
          }
        },
        {
          "ticker": "2338",
          "auctions_pct": 8.88642357782291,
          "hhi": 0.12002183867003266,
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
