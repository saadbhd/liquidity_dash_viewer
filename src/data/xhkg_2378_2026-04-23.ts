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
      "marketCap": 298976170117.5,
      "sector": "Insurance",
      "industry": "Financials - Insurance"
    },
    {
      "ticker": "1828",
      "name": "FWD",
      "marketCap": 39770654122.079994,
      "sector": "Insurance",
      "industry": "Financials - Insurance"
    },
    {
      "ticker": "376",
      "name": "YUNFENG FIN",
      "marketCap": 11244237934.210001,
      "sector": "Insurance",
      "industry": "Financials - Insurance"
    },
    {
      "ticker": "945",
      "name": "MANULIFE-S",
      "marketCap": 504008451038.39996,
      "sector": "Insurance",
      "industry": "Financials - Insurance"
    },
    {
      "ticker": "82318",
      "name": "PING AN-R",
      "marketCap": 397328228255.2,
      "sector": "Insurance",
      "industry": "Financials - Insurance"
    },
    {
      "ticker": "1508",
      "name": "CHINA RE",
      "marketCap": 9284389213.0,
      "sector": "Insurance",
      "industry": "Financials - Insurance"
    },
    {
      "ticker": "6963",
      "name": "SUNSHINE INS",
      "marketCap": 12662717387.32,
      "sector": "Insurance",
      "industry": "Financials - Insurance"
    },
    {
      "ticker": "81299",
      "name": "AIA-R",
      "marketCap": 758173765923.6001,
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
    "ticker": "2378",
    "company": "PRU",
    "asof_date": "2026-04-23",
    "industry": "Financials - Insurance",
    "sector": "Insurance",
    "market_cap_display": "299.0B",
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
          "score_pca": 53.59782185919876,
          "score_pca_percentile": 53.59782185919876,
          "rank_pca": 1194,
          "total": 2571,
          "adv_notional_sgd": 2261235.0,
          "adv_volume_shares": 19050.0,
          "free_float_shares": 2557509480.0,
          "turnover_ratio": 7.448652741650835e-06,
          "votes": 85.0,
          "trades": 85.0,
          "spread_pct": 0.0028831043669978163,
          "spread_ticks": 3.4111431316042267,
          "amihud": 7.463902305952737e-10,
          "volatility": 0.1449394842903175
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
          "peer_median_adv": 9344821.57242911,
          "peer_median_score_pca": 73.06495527032283,
          "peer_median_trades": 658.5,
          "peer_median_volatility": 0.2261514028228932,
          "peer_median_spread_pct": 0.0030957126945032106,
          "peer_median_spread_ticks": 1.8768083043441233,
          "peer_median_amihud": 1.3951991240609482e-09,
          "peer_median_turnover_ratio": 0.0019786974531313334,
          "target_vs_peer": {
            "score_pca_delta": -19.47,
            "adv_delta_pct": -75.8,
            "trades_delta_pct": -87.09,
            "volatility_delta_pct": 35.91,
            "spread_pct_delta_pct": 6.87,
            "spread_ticks_delta_pct": 81.75,
            "amihud_delta_pct": 46.5,
            "turnover_ratio_delta_pct": -99.62
          }
        },
        "peer_liquidity": [
          {
            "ticker": "2378",
            "score_pca": 53.59782185919876,
            "rank_pca": 1194,
            "adv": 2261235.0,
            "trades": 85.0,
            "volatility": 0.1449394842903175,
            "spread_pct": 0.0028831043669978163,
            "spread_ticks": 3.4111431316042267,
            "amihud": 7.463902305952737e-10,
            "turnover_ratio": 7.448652741650835e-06,
            "is_target": true
          },
          {
            "ticker": "1828",
            "score_pca": 71.25632049786076,
            "rank_pca": 740,
            "adv": 6799044.0,
            "trades": 800.0,
            "volatility": 0.2122830738889497,
            "spread_pct": 0.003212213396428384,
            "spread_ticks": null,
            "amihud": 3.3126013778587866e-09,
            "turnover_ratio": 0.0008127331180868864,
            "is_target": false
          },
          {
            "ticker": "376",
            "score_pca": 74.87359004278491,
            "rank_pca": 647,
            "adv": 10889120.0,
            "trades": 537.0,
            "volatility": 0.4549008809544124,
            "spread_pct": 0.004578604723352053,
            "spread_ticks": 1.2392694063926941,
            "amihud": 2.6522681746544124e-09,
            "turnover_ratio": 0.003183264849442574,
            "is_target": false
          },
          {
            "ticker": "945",
            "score_pca": 47.841306884480744,
            "rank_pca": 1342,
            "adv": 1965480.0,
            "trades": 41.0,
            "volatility": 0.07026480663864206,
            "spread_pct": 0.0037664087177342216,
            "spread_ticks": 5.620689655172414,
            "amihud": 6.077019414821059e-09,
            "turnover_ratio": 3.864114991228483e-06,
            "is_target": false
          },
          {
            "ticker": "82318",
            "score_pca": 53.98677557370672,
            "rank_pca": 1184,
            "adv": 6428940.798350254,
            "trades": 44.0,
            "volatility": 0.07208815869739976,
            "spread_pct": 0.0023774857189757673,
            "spread_ticks": 2.514347202295552,
            "amihud": 1.4577939853087926e-09,
            "turnover_ratio": 1.870814605842287e-05,
            "is_target": false
          },
          {
            "ticker": "1508",
            "score_pca": 76.3127187864644,
            "rank_pca": 610,
            "adv": 26526150.0,
            "trades": 780.0,
            "volatility": 0.2783734572135979,
            "spread_pct": 0.007503105424140774,
            "spread_ticks": 1.0290817494847722,
            "amihud": 1.0848531889198398e-09,
            "turnover_ratio": 0.0031446617881757803,
            "is_target": false
          },
          {
            "ticker": "6963",
            "score_pca": 87.63127187864644,
            "rank_pca": 319,
            "adv": 75932725.0,
            "trades": 3711.0,
            "volatility": 0.2400197317568367,
            "spread_pct": 0.0029792119925780374,
            "spread_ticks": 1.0591126796067558,
            "amihud": 3.2562080085068537e-10,
            "turnover_ratio": 0.009092110839546872,
            "is_target": false
          },
          {
            "ticker": "81299",
            "score_pca": 51.030727343446124,
            "rank_pca": 1260,
            "adv": 7800523.144858217,
            "trades": 20.0,
            "volatility": 0.14575648632832508,
            "spread_pct": 0.0020674658985774474,
            "spread_ticks": 2.9617977528089887,
            "amihud": 1.3326042628131038e-09,
            "turnover_ratio": 9.73323746681967e-06,
            "is_target": false
          },
          {
            "ticker": "6060",
            "score_pca": 90.31505250875146,
            "rank_pca": 250,
            "adv": 113043245.0,
            "trades": 4791.0,
            "volatility": 0.32733385645193785,
            "spread_pct": 0.0010482336158714933,
            "spread_ticks": null,
            "amihud": 2.3664032367919126e-10,
            "turnover_ratio": 0.007352982016641666,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Insurance",
          "sector_count": 21,
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
              "mean": 0.24117842216693244,
              "median": 0.22209089160367906,
              "min": 0.0,
              "max": 0.6985488502865183,
              "p5": 0.0,
              "p95": 0.4549008809544124,
              "count": 21
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 334585109.840629,
              "median": 26526150.0,
              "min": 0.0,
              "max": 2252481212.25,
              "p5": 0.0,
              "p95": 1586427945.7,
              "count": 21
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.009082620307555663,
              "median": 0.0024097833685150657,
              "min": 0.0006695946697762095,
              "max": 0.07013722500544549,
              "p5": 0.000849917374673124,
              "p95": 0.03373351992339986,
              "count": 21
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.003874747751100998,
              "median": 0.0031446617881757803,
              "min": 0.0,
              "max": 0.01710717691507746,
              "p5": 0.0,
              "p95": 0.010796941861669412,
              "count": 21
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 3.579549347506357e-08,
              "median": 3.2562080085068537e-10,
              "min": 5.4729969655481356e-12,
              "max": 4.583993428387018e-07,
              "p5": 6.100111233662892e-12,
              "p95": 2.2959664004247188e-07,
              "count": 19
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 4982.476190476191,
              "median": 800.0,
              "min": 0.0,
              "max": 19100.0,
              "p5": 0.0,
              "p95": 16004.0,
              "count": 21
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 31173153.492901057,
              "median": 9344821.57242911,
              "min": 1965480.0,
              "max": 113043245.0,
              "p5": 3527691.279422589,
              "p95": 100054562.99999999,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1340.5,
              "median": 658.5,
              "min": 20.0,
              "max": 4791.0,
              "p5": 27.35,
              "p95": 4412.999999999999,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.2251275564912627,
              "median": 0.2261514028228932,
              "min": 0.07026480663864206,
              "max": 0.4549008809544124,
              "p5": 0.07090297985920725,
              "p95": 0.41025242237854626,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.003441591185957272,
              "median": 0.0030957126945032106,
              "min": 0.0010482336158714933,
              "max": 0.007503105424140774,
              "p5": 0.0014049649148185773,
              "p95": 0.00647953017886472,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 2.059925191113234e-09,
              "median": 1.3951991240609482e-09,
              "min": 2.3664032367919126e-10,
              "max": 6.077019414821059e-09,
              "p5": 2.677834906892142e-10,
              "p95": 5.109473101884263e-09,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.002952257263801281,
              "median": 0.0019786974531313334,
              "min": 3.864114991228483e-06,
              "max": 0.009092110839546872,
              "p5": 5.918307857685399e-06,
              "p95": 0.00848341575153005,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 2.4040497409601964,
              "median": 1.8768083043441233,
              "min": 1.0290817494847722,
              "max": 5.620689655172414,
              "p5": 1.0365894820152681,
              "p95": 4.955966679581557,
              "count": 6
            }
          },
          "returns": {
            "window_days": 1,
            "n_obs": 1,
            "stock": 0.0016877637130801038,
            "market": -0.003281577241697975,
            "sector": -0.012891344383056946,
            "peers": -0.023623898623898687,
            "vs_market": 0.004969340954778079,
            "vs_sector": 0.01457910809613705,
            "vs_peers": 0.02531166233697879
          }
        }
      },
      "30d": {
        "label": "1M",
        "window_days": 21,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 21,
          "score_pca": 66.54998055231427,
          "score_pca_percentile": 66.54998055231427,
          "rank_pca": 861,
          "total": 2571,
          "adv_notional_sgd": 7577640.0,
          "adv_volume_shares": 65100.0,
          "free_float_shares": 2557509480.0,
          "turnover_ratio": 2.5454451101389465e-05,
          "votes": 271.0,
          "trades": 271.0,
          "spread_pct": 0.0034037942651859057,
          "spread_ticks": 4.043250327653998,
          "amihud": 1.984825860215468e-09,
          "volatility": 0.40188812699779664
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
          "peer_median_adv": 10674518.0,
          "peer_median_score_pca": 75.49591598599767,
          "peer_median_trades": 658.5,
          "peer_median_volatility": 0.3869109597048149,
          "peer_median_spread_pct": 0.0033879468087087447,
          "peer_median_spread_ticks": 1.8936264839495018,
          "peer_median_amihud": 1.5230611264458088e-09,
          "peer_median_turnover_ratio": 0.0020498648530483665,
          "target_vs_peer": {
            "score_pca_delta": -8.95,
            "adv_delta_pct": -29.0,
            "trades_delta_pct": -58.85,
            "volatility_delta_pct": -3.87,
            "spread_pct_delta_pct": -0.47,
            "spread_ticks_delta_pct": 113.52,
            "amihud_delta_pct": -30.32,
            "turnover_ratio_delta_pct": -98.76
          }
        },
        "peer_liquidity": [
          {
            "ticker": "2378",
            "score_pca": 66.54998055231427,
            "rank_pca": 861,
            "adv": 7577640.0,
            "trades": 271.0,
            "volatility": 0.40188812699779664,
            "spread_pct": 0.0034037942651859057,
            "spread_ticks": 4.043250327653998,
            "amihud": 1.984825860215468e-09,
            "turnover_ratio": 2.5454451101389465e-05,
            "is_target": true
          },
          {
            "ticker": "1828",
            "score_pca": 74.13457798521976,
            "rank_pca": 666,
            "adv": 6444900.0,
            "trades": 712.0,
            "volatility": 0.3354364590631585,
            "spread_pct": 0.003615585744882057,
            "spread_ticks": null,
            "amihud": 2.2304768618638948e-09,
            "turnover_ratio": 0.000749907903864799,
            "is_target": false
          },
          {
            "ticker": "376",
            "score_pca": 76.85725398677558,
            "rank_pca": 596,
            "adv": 14904135.999999998,
            "trades": 605.0,
            "volatility": 0.590264012584281,
            "spread_pct": 0.004578604723352053,
            "spread_ticks": 1.3242105263157895,
            "amihud": 8.156453910277227e-10,
            "turnover_ratio": 0.004202412884244347,
            "is_target": false
          },
          {
            "ticker": "945",
            "score_pca": 58.42084791909763,
            "rank_pca": 1070,
            "adv": 3786840.0000000005,
            "trades": 62.0,
            "volatility": 0.2580407004020666,
            "spread_pct": 0.004588659455916184,
            "spread_ticks": 6.306818181818182,
            "amihud": 3.4021681772837575e-09,
            "turnover_ratio": 7.435493998272989e-06,
            "is_target": false
          },
          {
            "ticker": "82318",
            "score_pca": 56.86503306106573,
            "rank_pca": 1110,
            "adv": 3912581.0025482224,
            "trades": 32.0,
            "volatility": 0.3594720106693929,
            "spread_pct": 0.0023334462640935256,
            "spread_ticks": 2.463042441583214,
            "amihud": 3.4484644615811792e-09,
            "turnover_ratio": 1.1030746496711598e-05,
            "is_target": false
          },
          {
            "ticker": "1508",
            "score_pca": 81.44690781796966,
            "rank_pca": 478,
            "adv": 31226300.0,
            "trades": 1543.0,
            "volatility": 0.41434990874023697,
            "spread_pct": 0.0072952355918196946,
            "spread_ticks": 1.0406921467959689,
            "amihud": 4.137113910486493e-10,
            "turnover_ratio": 0.003349821802231934,
            "is_target": false
          },
          {
            "ticker": "6963",
            "score_pca": 88.48697005056398,
            "rank_pca": 297,
            "adv": 59335305.120000005,
            "trades": 3067.0,
            "volatility": 0.33701265878410125,
            "spread_pct": 0.0031603078725354326,
            "spread_ticks": 1.14306640625,
            "amihud": 2.8329141644940506e-10,
            "turnover_ratio": 0.006863441680662323,
            "is_target": false
          },
          {
            "ticker": "81299",
            "score_pca": 36.05600933488915,
            "rank_pca": 1645,
            "adv": 545727.228583474,
            "trades": 4.0,
            "volatility": 0.4704102045356781,
            "spread_pct": 0.0019988762308385585,
            "spread_ticks": 2.9726962457337884,
            "amihud": 2.4914520285156068e-08,
            "turnover_ratio": 6.338873140155668e-07,
            "is_target": false
          },
          {
            "ticker": "6060",
            "score_pca": 94.20458965383119,
            "rank_pca": 150,
            "adv": 123754264.0,
            "trades": 7057.0,
            "volatility": 0.4474683044554227,
            "spread_pct": 0.0011639567169556035,
            "spread_ticks": null,
            "amihud": 1.6722086634589143e-10,
            "turnover_ratio": 0.007826015679451058,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Insurance",
          "sector_count": 21,
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
              "mean": 0.5051064772766756,
              "median": 0.4220547893007538,
              "min": 0.2064668919308894,
              "max": 2.4087957719340465,
              "p5": 0.2580407004020666,
              "p95": 0.590264012584281,
              "count": 21
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 395091005.8095777,
              "median": 31226300.0,
              "min": 11360.0,
              "max": 2390523540.6,
              "p5": 18160.0,
              "p95": 2252481212.25,
              "count": 21
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.009082920740578329,
              "median": 0.0023334462640935256,
              "min": 0.0006669768997651502,
              "max": 0.05326530976292833,
              "p5": 0.0008133717854697213,
              "p95": 0.04082671722689122,
              "count": 21
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.003745371005994063,
              "median": 0.003349821802231934,
              "min": 6.338873140155668e-07,
              "max": 0.010796941861669412,
              "p5": 7.435493998272989e-06,
              "p95": 0.0089281458680502,
              "count": 21
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 5.308050752730574e-08,
              "median": 4.137113910486493e-10,
              "min": 6.1140871632233e-12,
              "max": 6.013472148247566e-07,
              "p5": 6.880184524268378e-12,
              "p95": 2.3002951600731717e-07,
              "count": 21
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 5157.476190476191,
              "median": 1543.0,
              "min": 1.0,
              "max": 17431.0,
              "p5": 2.0,
              "p95": 16023.0,
              "count": 21
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 30488756.66889146,
              "median": 10674518.0,
              "min": 545727.228583474,
              "max": 123754264.0,
              "p5": 1680116.6985792583,
              "p95": 101207628.39199996,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1635.25,
              "median": 658.5,
              "min": 4.0,
              "max": 7057.0,
              "p5": 13.8,
              "p95": 5660.499999999998,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.40155678240429227,
              "median": 0.3869109597048149,
              "min": 0.2580407004020666,
              "max": 0.590264012584281,
              "p5": 0.28512921593344875,
              "p95": 0.5483151797672698,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.0035918340750491383,
              "median": 0.0033879468087087447,
              "min": 0.0011639567169556035,
              "max": 0.0072952355918196946,
              "p5": 0.0014561785468146377,
              "p95": 0.0063479339442534645,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 4.459437356344571e-09,
              "median": 1.5230611264458088e-09,
              "min": 1.6722086634589143e-10,
              "max": 2.4914520285156068e-08,
              "p5": 2.0784555888212122e-10,
              "p95": 1.7401400746904845e-08,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0028763375097829325,
              "median": 0.0020498648530483665,
              "min": 6.338873140155668e-07,
              "max": 0.007826015679451058,
              "p5": 3.0144496535056646e-06,
              "p95": 0.007489114779875,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 2.5417543247494905,
              "median": 1.8936264839495018,
              "min": 1.0406921467959689,
              "max": 6.306818181818182,
              "p5": 1.0662857116594766,
              "p95": 5.473287697797083,
              "count": 6
            }
          },
          "returns": {
            "window_days": 21,
            "n_obs": 21,
            "stock": 0.05137289636846698,
            "market": 0.02409148729213495,
            "sector": -0.031004187560704,
            "peers": -0.07685890338779122,
            "vs_market": 0.02728140907633203,
            "vs_sector": 0.08237708392917098,
            "vs_peers": 0.1282317997562582
          }
        }
      },
      "3m": {
        "label": "3M",
        "window_days": 63,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 63,
          "score_pca": 67.91131855309219,
          "score_pca_percentile": 67.91131855309219,
          "rank_pca": 826,
          "total": 2571,
          "adv_notional_sgd": 7689600.0,
          "adv_volume_shares": 66750.0,
          "free_float_shares": 2557509480.0,
          "turnover_ratio": 2.609961000027261e-05,
          "votes": 264.0,
          "trades": 264.0,
          "spread_pct": 0.0036488016316969527,
          "spread_ticks": 4.37045203969129,
          "amihud": 1.964611550373641e-09,
          "volatility": 0.38518849344603207
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
          "peer_median_adv": 17580133.0,
          "peer_median_score_pca": 78.10190587320109,
          "peer_median_trades": 856.0,
          "peer_median_volatility": 0.3625637867794225,
          "peer_median_spread_pct": 0.002776180848302055,
          "peer_median_spread_ticks": 1.949577031102943,
          "peer_median_amihud": 9.383503516322036e-10,
          "peer_median_turnover_ratio": 0.002077857506472973,
          "target_vs_peer": {
            "score_pca_delta": -10.19,
            "adv_delta_pct": -56.3,
            "trades_delta_pct": -69.16,
            "volatility_delta_pct": -6.24,
            "spread_pct_delta_pct": -31.43,
            "spread_ticks_delta_pct": 124.17,
            "amihud_delta_pct": -109.37,
            "turnover_ratio_delta_pct": -98.74
          }
        },
        "peer_liquidity": [
          {
            "ticker": "2378",
            "score_pca": 67.91131855309219,
            "rank_pca": 826,
            "adv": 7689600.0,
            "trades": 264.0,
            "volatility": 0.38518849344603207,
            "spread_pct": 0.0036488016316969527,
            "spread_ticks": 4.37045203969129,
            "amihud": 1.964611550373641e-09,
            "turnover_ratio": 2.609961000027261e-05,
            "is_target": true
          },
          {
            "ticker": "1828",
            "score_pca": 77.20731232983275,
            "rank_pca": 587,
            "adv": 11126250.0,
            "trades": 906.0,
            "volatility": 0.25714333996605615,
            "spread_pct": 0.0021850199445346673,
            "spread_ticks": null,
            "amihud": 8.583021520952174e-10,
            "turnover_ratio": 0.0010774705814851617,
            "is_target": false
          },
          {
            "ticker": "376",
            "score_pca": 78.99649941656943,
            "rank_pca": 541,
            "adv": 24034016.0,
            "trades": 806.0,
            "volatility": 0.6447758424296804,
            "spread_pct": 0.004552265885206973,
            "spread_ticks": 1.3460652591170825,
            "amihud": 1.0183985511691899e-09,
            "turnover_ratio": 0.006165892793330114,
            "is_target": false
          },
          {
            "ticker": "945",
            "score_pca": 60.13224426293271,
            "rank_pca": 1026,
            "adv": 3550100.0,
            "trades": 63.0,
            "volatility": 0.26994927815743464,
            "spread_pct": 0.0046545089934721005,
            "spread_ticks": 6.990049751243781,
            "amihud": 3.4021681772837575e-09,
            "turnover_ratio": 7.435493998272989e-06,
            "is_target": false
          },
          {
            "ticker": "82318",
            "score_pca": 58.265266433294435,
            "rank_pca": 1074,
            "adv": 3926294.760342672,
            "trades": 30.0,
            "volatility": 0.32194914599304547,
            "spread_pct": 0.0022497766013215084,
            "spread_ticks": 2.5530888030888033,
            "amihud": 2.8118300996197697e-09,
            "turnover_ratio": 1.0854254552764212e-05,
            "is_target": false
          },
          {
            "ticker": "1508",
            "score_pca": 80.63010501750291,
            "rank_pca": 499,
            "adv": 31226300.0,
            "trades": 1336.0,
            "volatility": 0.426201257328415,
            "spread_pct": 0.006774563667192676,
            "spread_ticks": 1.0865174672489082,
            "amihud": 4.2668890574159036e-10,
            "turnover_ratio": 0.0030782444314607846,
            "is_target": false
          },
          {
            "ticker": "6963",
            "score_pca": 86.38661999222093,
            "rank_pca": 351,
            "adv": 48086560.0,
            "trades": 2248.0,
            "volatility": 0.3370735614196465,
            "spread_pct": 0.003302585095282601,
            "spread_ticks": 1.2563739376770537,
            "amihud": 3.2562080085068537e-10,
            "turnover_ratio": 0.005244982615263042,
            "is_target": false
          },
          {
            "ticker": "81299",
            "score_pca": 36.250486192143136,
            "rank_pca": 1640,
            "adv": 365830.26859536493,
            "trades": 3.0,
            "volatility": 0.42317711761110827,
            "spread_pct": 0.002031887915554342,
            "spread_ticks": 3.044665718349929,
            "amihud": 2.8657025298877873e-08,
            "turnover_ratio": 4.2940753530086783e-07,
            "is_target": false
          },
          {
            "ticker": "6060",
            "score_pca": 94.67133411124075,
            "rank_pca": 138,
            "adv": 130469216.0,
            "trades": 7004.0,
            "volatility": 0.38805401213919855,
            "spread_pct": 0.001176169652687378,
            "spread_ticks": null,
            "amihud": 1.1406320042005405e-10,
            "turnover_ratio": 0.007525169810214059,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Insurance",
          "sector_count": 21,
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
              "mean": 0.48526823110253237,
              "median": 0.38805401213919855,
              "min": 0.20978133194870163,
              "max": 2.6819733080992987,
              "p5": 0.25714333996605615,
              "p95": 0.6447758424296804,
              "count": 21
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 409887755.6685208,
              "median": 31226300.0,
              "min": 0.0,
              "max": 2357940231.2999997,
              "p5": 26400.0,
              "p95": 2328425720.4,
              "count": 21
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.007503290930428304,
              "median": 0.0021850199445346673,
              "min": 0.0006695136869400823,
              "max": 0.03940997635401417,
              "p5": 0.0008439967286014939,
              "p95": 0.031685867225751466,
              "count": 21
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0037167498916679106,
              "median": 0.0030782444314607846,
              "min": 0.0,
              "max": 0.009976558210001108,
              "p5": 4.2940753530086783e-07,
              "p95": 0.009400602591575736,
              "count": 21
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 3.161485616438406e-08,
              "median": 4.2668890574159036e-10,
              "min": 5.752147511323922e-12,
              "max": 2.7805089056435484e-07,
              "p5": 7.494294684821568e-12,
              "p95": 1.470626904347672e-07,
              "count": 21
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 5169.571428571428,
              "median": 1336.0,
              "min": 0.0,
              "max": 17923.0,
              "p5": 2.0,
              "p95": 16778.0,
              "count": 21
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 31598070.878617257,
              "median": 17580133.0,
              "min": 365830.26859536493,
              "max": 130469216.0,
              "p5": 1480324.6745869874,
              "p95": 101635286.39999996,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1549.5,
              "median": 856.0,
              "min": 3.0,
              "max": 7004.0,
              "p5": 12.450000000000001,
              "p95": 5339.399999999998,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.3835404443805731,
              "median": 0.3625637867794225,
              "min": 0.25714333996605615,
              "max": 0.6447758424296804,
              "p5": 0.2616254183330386,
              "p95": 0.5682747376442374,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.0033658472194065306,
              "median": 0.002776180848302055,
              "min": 0.001176169652687378,
              "max": 0.006774563667192676,
              "p5": 0.0014756710446908155,
              "p95": 0.006032544531390473,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 4.701762148257267e-09,
              "median": 9.383503516322036e-10,
              "min": 1.1406320042005405e-10,
              "max": 2.8657025298877873e-08,
              "p5": 1.88108360570775e-10,
              "p95": 1.981782530631992e-08,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0028888099234799375,
              "median": 0.002077857506472973,
              "min": 4.2940753530086783e-07,
              "max": 0.007525169810214059,
              "p5": 2.8815377973411104e-06,
              "p95": 0.007049422854304678,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 2.71279348945426,
              "median": 1.949577031102943,
              "min": 1.0865174672489082,
              "max": 6.990049751243781,
              "p5": 1.1289815848559446,
              "p95": 6.003703743020318,
              "count": 6
            }
          },
          "returns": {
            "window_days": 63,
            "n_obs": 63,
            "stock": -0.03808752025932027,
            "market": 0.0420090494699672,
            "sector": -0.13057854566419014,
            "peers": -0.1867690170460259,
            "vs_market": -0.08009656972928747,
            "vs_sector": 0.09249102540486986,
            "vs_peers": 0.1486814967867056
          }
        }
      },
      "6m": {
        "label": "6M",
        "window_days": 126,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 126,
          "score_pca": 67.21120186697783,
          "score_pca_percentile": 67.21120186697783,
          "rank_pca": 844,
          "total": 2571,
          "adv_notional_sgd": 7703220.0,
          "adv_volume_shares": 68625.0,
          "free_float_shares": 2557509480.0,
          "turnover_ratio": 2.6832745112639818e-05,
          "votes": 264.5,
          "trades": 264.5,
          "spread_pct": 0.0034600924205130936,
          "spread_ticks": 4.138320463237838,
          "amihud": 1.355141205653171e-09,
          "volatility": 0.33046284735360926
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
          "peer_median_adv": 21411411.3925,
          "peer_median_score_pca": 78.45196421625826,
          "peer_median_trades": 985.25,
          "peer_median_volatility": 0.35566394452114747,
          "peer_median_spread_pct": 0.002768280883163731,
          "peer_median_spread_ticks": 1.9606818446237437,
          "peer_median_amihud": 6.989190274102028e-10,
          "peer_median_turnover_ratio": 0.00208517677436544,
          "target_vs_peer": {
            "score_pca_delta": -11.24,
            "adv_delta_pct": -64.0,
            "trades_delta_pct": -73.15,
            "volatility_delta_pct": 7.09,
            "spread_pct_delta_pct": -24.99,
            "spread_ticks_delta_pct": 111.07,
            "amihud_delta_pct": -93.89,
            "turnover_ratio_delta_pct": -98.71
          }
        },
        "peer_liquidity": [
          {
            "ticker": "2378",
            "score_pca": 67.21120186697783,
            "rank_pca": 844,
            "adv": 7703220.0,
            "trades": 264.5,
            "volatility": 0.33046284735360926,
            "spread_pct": 0.0034600924205130936,
            "spread_ticks": 4.138320463237838,
            "amihud": 1.355141205653171e-09,
            "turnover_ratio": 2.6832745112639818e-05,
            "is_target": true
          },
          {
            "ticker": "1828",
            "score_pca": 77.01283547257877,
            "rank_pca": 592,
            "adv": 12564153.0,
            "trades": 870.0,
            "volatility": 0.22744134101273863,
            "spread_pct": 0.0021572762931632156,
            "spread_ticks": null,
            "amihud": 6.278628592190549e-10,
            "turnover_ratio": 0.0011925896156377725,
            "is_target": false
          },
          {
            "ticker": "376",
            "score_pca": 81.48580318942045,
            "rank_pca": 477,
            "adv": 30906468.0,
            "trades": 1100.5,
            "volatility": 0.6460178562791752,
            "spread_pct": 0.004211722770333219,
            "spread_ticks": 1.3681043382633482,
            "amihud": 7.699751956013506e-10,
            "turnover_ratio": 0.006954820713089796,
            "is_target": false
          },
          {
            "ticker": "945",
            "score_pca": 58.965383119408784,
            "rank_pca": 1056,
            "adv": 3177480.7,
            "trades": 59.0,
            "volatility": 0.22052171689654756,
            "spread_pct": 0.00419749166256263,
            "spread_ticks": 5.676096350832266,
            "amihud": 2.721757219204559e-09,
            "turnover_ratio": 7.025663620415422e-06,
            "is_target": false
          },
          {
            "ticker": "82318",
            "score_pca": 59.08206923376118,
            "rank_pca": 1053,
            "adv": 4700143.751166745,
            "trades": 33.0,
            "volatility": 0.31739246162333856,
            "spread_pct": 0.0022755444271661453,
            "spread_ticks": 2.5532593509841393,
            "amihud": 2.095523997689705e-09,
            "turnover_ratio": 1.2663296978224915e-05,
            "is_target": false
          },
          {
            "ticker": "1508",
            "score_pca": 79.89109295993777,
            "rank_pca": 518,
            "adv": 30258669.785,
            "trades": 1126.5,
            "volatility": 0.35579007285580994,
            "spread_pct": 0.006629119170318686,
            "spread_ticks": 1.0816987438881478,
            "amihud": 4.2050119510568814e-10,
            "turnover_ratio": 0.002977763933093107,
            "is_target": false
          },
          {
            "ticker": "6963",
            "score_pca": 86.97005056398288,
            "rank_pca": 336,
            "adv": 49812182.5,
            "trades": 2298.0,
            "volatility": 0.35553781618648495,
            "spread_pct": 0.0032610173391613173,
            "spread_ticks": 1.2297856247094061,
            "amihud": 2.681830615825519e-10,
            "turnover_ratio": 0.005448911654056497,
            "is_target": false
          },
          {
            "ticker": "81299",
            "score_pca": 36.05600933488915,
            "rank_pca": 1645,
            "adv": 362456.339899492,
            "trades": 3.0,
            "volatility": 0.38176803986087327,
            "spread_pct": 0.0020506227357333694,
            "spread_ticks": 3.0106591933529594,
            "amihud": 2.9421530889692924e-08,
            "turnover_ratio": 4.3963152423660277e-07,
            "is_target": false
          },
          {
            "ticker": "6060",
            "score_pca": 95.25476468300272,
            "rank_pca": 123,
            "adv": 157669581.0,
            "trades": 7321.5,
            "volatility": 0.35827434423296256,
            "spread_pct": 0.001055364679709822,
            "spread_ticks": null,
            "amihud": 9.211502288053665e-11,
            "turnover_ratio": 0.007924138583311587,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Insurance",
          "sector_count": 21,
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
              "mean": 0.4391593094230815,
              "median": 0.35579007285580994,
              "min": 0.22052171689654756,
              "max": 1.9532717951160796,
              "p5": 0.22744134101273863,
              "p95": 0.6460178562791752,
              "count": 21
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 405305472.71505076,
              "median": 30906468.0,
              "min": 0.0,
              "max": 2369472990.6,
              "p5": 52400.0,
              "p95": 2113344346.3000002,
              "count": 21
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.008449180113828447,
              "median": 0.0021572762931632156,
              "min": 0.0006817801625866711,
              "max": 0.04885510979844958,
              "p5": 0.0008374730190405218,
              "p95": 0.03956686844600688,
              "count": 21
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0038273313530622364,
              "median": 0.002977763933093107,
              "min": 0.0,
              "max": 0.01052082920748858,
              "p5": 4.3963152423660277e-07,
              "p95": 0.009975114750220379,
              "count": 21
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 2.403112806073349e-08,
              "median": 4.2050119510568814e-10,
              "min": 4.97937442051602e-12,
              "max": 1.611645266361319e-07,
              "p5": 7.214710232545567e-12,
              "p95": 1.5257857796765333e-07,
              "count": 21
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 5043.642857142857,
              "median": 1126.5,
              "min": 0.0,
              "max": 17089.0,
              "p5": 3.0,
              "p95": 16734.0,
              "count": 21
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 36181391.88450828,
              "median": 21411411.3925,
              "min": 362456.339899492,
              "max": 157669581.0,
              "p5": 1347714.86593467,
              "p95": 119919491.52499995,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1601.4375,
              "median": 985.25,
              "min": 3.0,
              "max": 7321.5,
              "p5": 13.500000000000002,
              "p95": 5563.274999999998,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.3578429561184914,
              "median": 0.35566394452114747,
              "min": 0.22052171689654756,
              "max": 0.6460178562791752,
              "p5": 0.22294358533721445,
              "p95": 0.5535304205327694,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.0032297698847685505,
              "median": 0.002768280883163731,
              "min": 0.001055364679709822,
              "max": 0.006629119170318686,
              "p5": 0.0014037049993180636,
              "p95": 0.005783030430323771,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 4.5521811801220465e-09,
              "median": 6.989190274102028e-10,
              "min": 9.211502288053665e-11,
              "max": 2.9421530889692924e-08,
              "p5": 1.5373883642624199e-10,
              "p95": 2.0076610105021984e-08,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.003064794136413955,
              "median": 0.00208517677436544,
              "min": 4.3963152423660277e-07,
              "max": 0.007924138583311587,
              "p5": 2.74474275789919e-06,
              "p95": 0.00758487732873396,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 2.4866006003383774,
              "median": 1.9606818446237437,
              "min": 1.0816987438881478,
              "max": 5.676096350832266,
              "p5": 1.1187204640934625,
              "p95": 5.009737061462439,
              "count": 6
            }
          },
          "returns": {
            "window_days": 126,
            "n_obs": 126,
            "stock": 0.1240530303030285,
            "market": 0.09531099833042789,
            "sector": -0.09241130058213054,
            "peers": -0.2008411446029994,
            "vs_market": 0.028742031972600612,
            "vs_sector": 0.21646433088515904,
            "vs_peers": 0.3248941749060279
          }
        }
      }
    },
    "period_insights": {
      "1d": {
        "liquidity": "Liquidity is weak today, with average volume down 70.2% from the 1M average, so near-term access is thinner than the recent baseline.",
        "market_comparison": "The stock rose 0.2% while peers fell 2.4%, which matters because firmer price action has not translated into stronger trading access."
      },
      "30d": {
        "liquidity": "Liquidity is weak on the monthly view, with a 1M score of 66.5 compared with a peer median of 75.5, so access screens below the group even before the latest slowdown.",
        "market_comparison": "The stock returned 5.1% while peers fell 7.7%, which matters because stronger performance has come without matching peer-level tradability."
      },
      "3m": {
        "liquidity": "Liquidity remains weak over 3M, with a score of 67.9 compared with a peer median of 78.1, pointing to a persistent access gap rather than a short-lived dip.",
        "market_comparison": "The stock fell 3.8% while peers fell 18.7%, which matters because relative resilience in returns has not closed the liquidity gap."
      },
      "6m": {
        "liquidity": "Liquidity is weak on the structural view, with a 6M score of 67.2 compared with a peer median of 78.5, so the stock has screened as less accessible than peers for some time.",
        "market_comparison": "The stock returned 12.4% while peers fell 20.1%, which matters because sustained outperformance has not lifted liquidity to peer levels."
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
          "median": 0.38884607225475537,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "38.9%",
          "display_range": null,
          "display_text": "38.9%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "share_pct",
          "value_pct": 38.9,
          "plain_english": "Market explains about 38.9% of price moves in the current state."
        },
        "sector_share": {
          "median": 0.518760574004353,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "51.9%",
          "display_range": null,
          "display_text": "51.9%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "share_pct",
          "value_pct": 51.9,
          "plain_english": "Sector explains about 51.9% of price moves in the current state."
        },
        "company_share": {
          "median": 0.09239335374089157,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "9.2%",
          "display_range": null,
          "display_text": "9.2%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "share_pct",
          "value_pct": 9.2,
          "plain_english": "Company-specific explains about 9.2% of price moves in the current state."
        },
        "basis": "current_state"
      },
      "current_sensitivities": {
        "beta_market": {
          "median": -0.5109442269820704,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "-0.51",
          "display_range": null,
          "display_text": "-0.51",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "beta",
          "strength_label": "Modest",
          "plain_english": "Modest market link: a 1% market move has lined up with about a 0.51% stock move in the opposite direction in this state.",
          "value_num": -0.51
        },
        "beta_stock_lag": {
          "median": -0.24368273509108018,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "-0.24",
          "display_range": null,
          "display_text": "-0.24",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "lag_beta",
          "value_num": -0.24
        },
        "beta_sector": {
          "median": 0.627190447022697,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "0.63",
          "display_range": null,
          "display_text": "0.63",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "beta",
          "strength_label": "Modest",
          "plain_english": "Modest sector link: a 1% sector move has lined up with about a 0.63% stock move in the same direction in this state.",
          "value_num": 0.63
        },
        "beta_market_lag": {
          "median": -0.49553122272346894,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "-0.50",
          "display_range": null,
          "display_text": "-0.50",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "lag_beta",
          "value_num": -0.5
        },
        "beta_sector_lag": {
          "median": 0.5433908153212466,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "0.54",
          "display_range": null,
          "display_text": "0.54",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "lag_beta",
          "value_num": 0.54
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
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.4656100213028263,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "46.6%",
            "display_range": null,
            "display_text": "46.6%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 16 trading days.",
            "kind": "share_pct",
            "value_pct": 46.6,
            "plain_english": "Market explains about 46.6% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.4656100213028263,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "46.6%",
              "display_range": null,
              "display_text": "46.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 16 trading days.",
              "kind": "share_pct",
              "value_pct": 46.6,
              "plain_english": "Market explains about 46.6% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.361074973391396,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "36.1%",
              "display_range": null,
              "display_text": "36.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 16 trading days.",
              "kind": "share_pct",
              "value_pct": 36.1,
              "plain_english": "Sector explains about 36.1% of price moves in the current state."
            },
            "company_share": {
              "median": 0.1733150053057778,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "17.3%",
              "display_range": null,
              "display_text": "17.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 16 trading days.",
              "kind": "share_pct",
              "value_pct": 17.3,
              "plain_english": "Company-specific explains about 17.3% of price moves in the current state."
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
            "median": 0.4999158179489456,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "50.0%",
            "display_range": null,
            "display_text": "50.0%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
            "kind": "share_pct",
            "value_pct": 50.0,
            "plain_english": "Company-specific explains about 50.0% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.26922400082749365,
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
              "median": 0.23086018122356086,
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
              "plain_english": "Sector explains about 23.1% of price moves in the current state."
            },
            "company_share": {
              "median": 0.4999158179489456,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "50.0%",
              "display_range": null,
              "display_text": "50.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 50.0,
              "plain_english": "Company-specific explains about 50.0% of price moves in the current state."
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
            "median": 0.4801991298940855,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "48.0%",
            "display_range": null,
            "display_text": "48.0%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
            "kind": "share_pct",
            "value_pct": 48.0,
            "plain_english": "Company-specific explains about 48.0% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.3196769291121179,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "32.0%",
              "display_range": null,
              "display_text": "32.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 32.0,
              "plain_english": "Market explains about 32.0% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.20012394099379674,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "20.0%",
              "display_range": null,
              "display_text": "20.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 20.0,
              "plain_english": "Sector explains about 20.0% of price moves in the current state."
            },
            "company_share": {
              "median": 0.4801991298940855,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "48.0%",
              "display_range": null,
              "display_text": "48.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 48.0,
              "plain_english": "Company-specific explains about 48.0% of price moves in the current state."
            }
          },
          "summary": "Jun: Mostly company-driven."
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
            "median": 0.5042448028818685,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "50.4%",
            "display_range": null,
            "display_text": "50.4%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
            "kind": "share_pct",
            "value_pct": 50.4,
            "plain_english": "Company-specific explains about 50.4% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.3504511862612629,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "35.0%",
              "display_range": null,
              "display_text": "35.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 35.0,
              "plain_english": "Market explains about 35.0% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.14530401085686864,
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
              "median": 0.5042448028818685,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "50.4%",
              "display_range": null,
              "display_text": "50.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 50.4,
              "plain_english": "Company-specific explains about 50.4% of price moves in the current state."
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
            "median": 0.6554434485727345,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "65.5%",
            "display_range": null,
            "display_text": "65.5%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
            "kind": "share_pct",
            "value_pct": 65.5,
            "plain_english": "Company-specific explains about 65.5% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.2962199454554944,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "29.6%",
              "display_range": null,
              "display_text": "29.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 29.6,
              "plain_english": "Market explains about 29.6% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.04833660597177116,
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
              "median": 0.6554434485727345,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "65.5%",
              "display_range": null,
              "display_text": "65.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 65.5,
              "plain_english": "Company-specific explains about 65.5% of price moves in the current state."
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
            "median": 0.5884762236101083,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "58.8%",
            "display_range": null,
            "display_text": "58.8%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
            "kind": "share_pct",
            "value_pct": 58.8,
            "plain_english": "Company-specific explains about 58.8% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.12466811381747869,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "12.5%",
              "display_range": null,
              "display_text": "12.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 12.5,
              "plain_english": "Market explains about 12.5% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.2868556625724131,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "28.7%",
              "display_range": null,
              "display_text": "28.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 28.7,
              "plain_english": "Sector explains about 28.7% of price moves in the current state."
            },
            "company_share": {
              "median": 0.5884762236101083,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "58.8%",
              "display_range": null,
              "display_text": "58.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 58.8,
              "plain_english": "Company-specific explains about 58.8% of price moves in the current state."
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
            "median": 0.4724204640392512,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "47.2%",
            "display_range": null,
            "display_text": "47.2%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
            "kind": "share_pct",
            "value_pct": 47.2,
            "plain_english": "Market explains about 47.2% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.4724204640392512,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "47.2%",
              "display_range": null,
              "display_text": "47.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 47.2,
              "plain_english": "Market explains about 47.2% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.13659689246626538,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "13.7%",
              "display_range": null,
              "display_text": "13.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 13.7,
              "plain_english": "Sector explains about 13.7% of price moves in the current state."
            },
            "company_share": {
              "median": 0.3909826434944835,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "39.1%",
              "display_range": null,
              "display_text": "39.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 39.1,
              "plain_english": "Company-specific explains about 39.1% of price moves in the current state."
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
            "median": 0.5646223957084407,
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
              "median": 0.5646223957084407,
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
              "median": 0.14128785850993694,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "14.1%",
              "display_range": null,
              "display_text": "14.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 14.1,
              "plain_english": "Sector explains about 14.1% of price moves in the current state."
            },
            "company_share": {
              "median": 0.2940897457816223,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "29.4%",
              "display_range": null,
              "display_text": "29.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 29.4,
              "plain_english": "Company-specific explains about 29.4% of price moves in the current state."
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
            "median": 0.639687660928263,
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
            "plain_english": "Company-specific explains about 64.0% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.22153615319965228,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "22.2%",
              "display_range": null,
              "display_text": "22.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
              "kind": "share_pct",
              "value_pct": 22.2,
              "plain_english": "Market explains about 22.2% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.13877618587208473,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "13.9%",
              "display_range": null,
              "display_text": "13.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
              "kind": "share_pct",
              "value_pct": 13.9,
              "plain_english": "Sector explains about 13.9% of price moves in the current state."
            },
            "company_share": {
              "median": 0.639687660928263,
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
              "plain_english": "Company-specific explains about 64.0% of price moves in the current state."
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
            "median": 0.4779541655203372,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "47.8%",
            "display_range": null,
            "display_text": "47.8%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
            "kind": "share_pct",
            "value_pct": 47.8,
            "plain_english": "Company-specific explains about 47.8% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.1471321523347198,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "14.7%",
              "display_range": null,
              "display_text": "14.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 14.7,
              "plain_english": "Market explains about 14.7% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.374913682144943,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "37.5%",
              "display_range": null,
              "display_text": "37.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 37.5,
              "plain_english": "Sector explains about 37.5% of price moves in the current state."
            },
            "company_share": {
              "median": 0.4779541655203372,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "47.8%",
              "display_range": null,
              "display_text": "47.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 47.8,
              "plain_english": "Company-specific explains about 47.8% of price moves in the current state."
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
            "median": 0.39083554021325145,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "39.1%",
            "display_range": null,
            "display_text": "39.1%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
            "kind": "share_pct",
            "value_pct": 39.1,
            "plain_english": "Market explains about 39.1% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.39083554021325145,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "39.1%",
              "display_range": null,
              "display_text": "39.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
              "kind": "share_pct",
              "value_pct": 39.1,
              "plain_english": "Market explains about 39.1% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.2920394856229293,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "29.2%",
              "display_range": null,
              "display_text": "29.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
              "kind": "share_pct",
              "value_pct": 29.2,
              "plain_english": "Sector explains about 29.2% of price moves in the current state."
            },
            "company_share": {
              "median": 0.3171249741638193,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "31.7%",
              "display_range": null,
              "display_text": "31.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
              "kind": "share_pct",
              "value_pct": 31.7,
              "plain_english": "Company-specific explains about 31.7% of price moves in the current state."
            }
          },
          "summary": "Feb: Much more balanced across company, sector, and market factors."
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
            "median": 0.38969788593489163,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "39.0%",
            "display_range": null,
            "display_text": "39.0%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
            "kind": "share_pct",
            "value_pct": 39.0,
            "plain_english": "Market explains about 39.0% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.38969788593489163,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "39.0%",
              "display_range": null,
              "display_text": "39.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 39.0,
              "plain_english": "Market explains about 39.0% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.36915372980528727,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "36.9%",
              "display_range": null,
              "display_text": "36.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 36.9,
              "plain_english": "Sector explains about 36.9% of price moves in the current state."
            },
            "company_share": {
              "median": 0.24114838425982119,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "24.1%",
              "display_range": null,
              "display_text": "24.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 24.1,
              "plain_english": "Company-specific explains about 24.1% of price moves in the current state."
            }
          },
          "summary": "Mar: More mixed, though market-driven still has the largest share."
        },
        {
          "month_key": "2026-04",
          "month_label": "April 2026",
          "month_short_label": "Apr",
          "period_label": "2026-04-01 to 2026-04-23",
          "n_obs": 14,
          "partial_month": false,
          "dominant_driver": "sector",
          "dominant_driver_label": "Sector",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.40442794635973156,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "40.4%",
            "display_range": null,
            "display_text": "40.4%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 14 trading days.",
            "kind": "share_pct",
            "value_pct": 40.4,
            "plain_english": "Sector explains about 40.4% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.27849681972310086,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "27.8%",
              "display_range": null,
              "display_text": "27.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 14 trading days.",
              "kind": "share_pct",
              "value_pct": 27.8,
              "plain_english": "Market explains about 27.8% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.40442794635973156,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "40.4%",
              "display_range": null,
              "display_text": "40.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 14 trading days.",
              "kind": "share_pct",
              "value_pct": 40.4,
              "plain_english": "Sector explains about 40.4% of price moves in the current state."
            },
            "company_share": {
              "median": 0.3170752339171676,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "31.7%",
              "display_range": null,
              "display_text": "31.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 14 trading days.",
              "kind": "share_pct",
              "value_pct": 31.7,
              "plain_english": "Company-specific explains about 31.7% of price moves in the current state."
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
          "current_probability": 1.0,
          "n_days_effective": 125.0,
          "volatility": {
            "median": 0.012680706182482751,
            "low": 0.012680706182482751,
            "high": 0.012680706182482751
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
            "median": 0.02680654403210755,
            "low": 0.02680654403210755,
            "high": 0.02680654403210755
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
        "market_link_display": "-0.51",
        "sector_link_display": "0.63",
        "market_link_explainer": "Modest market link. A 1% market move has lined up with about a 0.51% stock move in the opposite direction in this state. This is a point estimate from 251 trading days.",
        "sector_link_explainer": "Modest sector link. A 1% sector move has lined up with about a 0.63% stock move in the same direction in this state. This is a point estimate from 251 trading days.",
        "stock_persistence_display": "-0.24",
        "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
        "history_limited_note": "Read is based on 251 trading days versus the 252-day target."
      },
      "current_summary": {
        "regime_label": "Low Volatility",
        "dominant_driver": "sector",
        "dominant_driver_label": "Sector",
        "driver_share_pct": 51.9,
        "driver_share_display": "51.9%",
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
            "median": 0.012680706182482751,
            "low": 0.012680706182482751,
            "high": 0.012680706182482751
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
            "median": 0.02680654403210755,
            "low": 0.02680654403210755,
            "high": 0.02680654403210755
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
        "text": "Liquidity score: 67.2 — Weak",
        "bg": "bg-red-500/20",
        "textColor": "text-red-400"
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
    "liq_subtitle": "Liquidity screens below peers for the stock’s size, while today’s volume is lighter than the recent monthly average.",
    "market_comparison_title": "How You Compare to the Market",
    "market_comparison_subtitle": "Context relative to market, sector, and peer medians.",
    "perf_title": "Stock Performance",
    "perf_subtitle": "Returns have outperformed over one month, with the stock up 5.1% while peers fell 7.7% and the market rose 2.4%.",
    "perf_insight": "That stronger return backdrop sits alongside weaker trading access, with the six-month liquidity score 11.2 points below the peer median. Sector factors also account for 51.9% of the move, so the tape still reflects a meaningful broader market influence.",
    "drivers_title": "What Moves Your Stock Price?",
    "drivers_subtitle": "Recent price moves are being driven mainly by the sector, with sector factors accounting for 51.9% of the tape.",
    "drivers_strip": [
      {
        "title": "Current Driver (Last 5 Days)",
        "text": "Over the last 5 trading days, moves are mainly sector-driven, accounting for about 51.9% of price changes. Other influences are market 38.9%, and company-specific 9.2%."
      },
      {
        "title": "Driver Mix",
        "text": "Based on the last 5 trading days, current mix is market 38.9%, sector 51.9%, and company-specific 9.2%."
      },
      {
        "title": "Monthly Trend",
        "text": "The driver mix has shifted from market-driven to sector-driven over Feb to Apr."
      }
    ],
    "drivers_pie_title": "Current Driver Mix (Last 5 Days)",
    "drivers_pie_note": "Based on the last 5 trading days, current split is market 38.9%, sector 51.9%, and company-specific 9.2%.",
    "lead_lag_title": "",
    "lead_lag_note": "",
    "rolling_title": "Monthly Driver Shift",
    "rolling_latest_label": "Latest: {period}",
    "rolling_note": "Each bar shows the monthly split between market-, sector-, and company-driven moves.",
    "drivers_bottom_line": "The move is being shaped more by the broader industry backdrop than by company-specific trading, while the stronger one-month return keeps the tape firmer than peers.",
    "drivers_wtd_title": "Key Reads",
    "drivers_wtd_list": [
      "Main driver now is the sector, accounting for 51.9% of recent price moves.",
      "The monthly pattern has become more mixed, shifting from balanced in February to market-led in March and sector-led in April."
    ],
    "regime_title": "Market State",
    "regime_subtitle": "Trading conditions look orderly on screen, even though the broader liquidity profile remains weaker than peers.",
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
    "exec_check_subtitle": "Combines the final continuous-session displayed book before close, trade-size stress tests based on Apr 23, 2025 to Apr 23, 2026 (241 trading days • 144,910 trades), large sell-side orders observed today, and intraday spread/depth during the continuous trading session.",
    "order_book_title": "Order Book Depth (Available Liquidity)",
    "order_book_note": "Depth shown is based on the displayed order book.",
    "peer_capacity_title": "Peer Capacity Context",
    "peer_capacity_note": "Immediate displayed depth broadly matches the stronger monthly liquidity read.",
    "impact_summary_title": "Estimated Price Impact (Sell Orders)",
    "impact_summary_subtitle": "Approximate price impact (%) for sell orders.",
    "exec_check_insight": "Near-term execution looks balanced, with bid depth at 1.54x ask depth and a 2 tick spread. That supports orderly trading on screen even though the stock’s broader liquidity standing remains weak for its size.",
    "trader_composition_title": "Who's Trading Your Stock?",
    "trader_composition_subtitle": "Shows whether trading is mostly retail-like, institution-like, mixed, or unclassified.",
    "trader_retail_threshold": "Retail-like flow",
    "trader_mixed_threshold": "Mixed flow",
    "trader_instit_threshold": "Institution-like flow",
    "peer_trader_title": "Peer Comparison: Trader Mix",
    "peer_trader_subtitle": "How the trader mix compares with peers.",
    "price_moving_title": "Which Trades Move the Price?",
    "price_moving_subtitle": "Price-moving trades are 28.3% of total trades.",
    "intraday_title": "When Does Trading Happen?",
    "intraday_subtitle": "Trading stays usable through the day, and the observed flow mix currently leans institution-like.",
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
    "intraday_insight": "The book is currently better supported on the bid side, with displayed bid depth at 1.54x ask depth. A 2 tick spread also points to orderly near-term execution conditions.",
    "short_title": "Short Selling & Lending",
    "short_subtitle": "Current trading is being explained more by sector direction than by short-driven pressure.",
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
    "exec_subtitle": "Trading access screens below peers for the company’s size, despite a firmer recent price backdrop.",
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
        "value": "67.2/100",
        "sub": "Peer median 78.5 (-11.2 pts)",
        "interp": {
          "text": "Weak",
          "cls": "interpretation-bad",
          "icon": "◆"
        }
      },
      {
        "title": "Volume vs Peers",
        "value": "HK$7.7M",
        "sub": "Peer median HK$21.4M",
        "interp": {
          "text": "Weak",
          "cls": "interpretation-bad",
          "icon": "◆"
        }
      },
      {
        "title": "Spread",
        "value": "0.35%",
        "sub": "4.14 ticks; peers 0.28%",
        "interp": {
          "text": "Wider",
          "cls": "interpretation-bad",
          "icon": "◆"
        }
      }
    ],
    "liq_insight": "Liquidity is weak for the stock’s size, with a six-month score of 67.2 compared with a peer median of 78.5. Today’s flow is also lighter, with one-day average volume down 70.2% from the one-month average, which leaves access thinner than the recent monthly baseline. Even so, the displayed book remains orderly, with a 2 tick spread and bid depth at 1.54x ask depth, so the main issue is peer standing rather than immediate screen stress.",
    "perf_badge": "Context",
    "exec_check_tiles": [
      {
        "title": "Mid Price",
        "value": "118.600",
        "note": "final continuous-session displayed book before close",
        "color": "text-white"
      },
      {
        "title": "Spread",
        "value": "0.17%",
        "note": "2.00 ticks",
        "color": "text-slate-300"
      },
      {
        "title": "Depth",
        "value": "1.54x",
        "note": "Bid depth / ask depth on the displayed order book",
        "color": "text-slate-300"
      }
    ],
    "impact_summary_cards": [
      {
        "title": "~S$100K sell",
        "text": "Estimated impact ~-0.08% with 100.0% fill.",
        "cls": "ok"
      },
      {
        "title": "S$1.0M sell",
        "text": "Estimated impact ~-0.65% with 100.0% fill.",
        "cls": "warn"
      },
      {
        "title": "S$2.5M sell",
        "text": "Estimated impact ~-3.75% with 62.6% fill.",
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
        "value": "67",
        "suffix": "/100",
        "bar_pct": 67,
        "color_value": "text-amber-400",
        "color_bar": "bg-amber-500",
        "subtext": "Rank 844/2571",
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
        "value": "0.35",
        "suffix": "%",
        "bar_pct": 3,
        "color_value": "text-emerald-400",
        "color_bar": "bg-emerald-500",
        "subtext": "0.35% • 4.14 ticks vs peers 0.28%",
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
        "value": "7.7M",
        "value_prefix": "HK$",
        "suffix": "",
        "bar_pct": 60,
        "color_value": "text-red-400",
        "color_bar": "bg-red-500",
        "subtext": "Peer median HK$21.4M",
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
        "value": "51.9",
        "suffix": "sector",
        "bar_pct": 52,
        "color_value": "text-amber-400",
        "color_bar": "bg-amber-500",
        "subtext": "Market 38.9% • Company 9.2%",
        "interpretation": {
          "text": "Sector",
          "cls": "interpretation-neutral",
          "icon": "◆"
        }
      }
    ],
    "exec_takeaways": [
      "Structural liquidity is weak for the stock’s size, with a six-month liquidity score of 67.2 compared with a peer median of 78.5. That leaves trading access screening below peers before current conditions are considered.",
      "Recent activity is lighter than the monthly average, with one-day average volume down 70.2% from one month. That points to thinner flow today rather than an improvement in access.",
      "The recent tape is supported by stronger price performance and an orderly book. The stock is up 5.1% over one month while peers are down 7.7%, and displayed bid depth is 1.54x ask depth with a 2 tick spread."
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
      "overall": "6M liquidity is weak: score 67.2 vs peer median 78.5 (-11.2 pts). 1D average volume down -70.2% from 1M. Recent flow does not show a clear deterioration from the monthly baseline.",
      "strengths": [
        "6M score 67.2 vs peer median 78.5 (-11.2 pts)."
      ],
      "concerns": [
        "1D average volume down -70.2% from 1M."
      ],
      "peer_context": "Primary-period score gap vs peers: -11.2 pts."
    },
    "market_comparison": {
      "returns": {
        "insight": "6M return is 12.4%, better than market, sector, and peers, which suggests stronger price performance than comparable names.",
        "vs_market": "Better than market: 12.4% vs market 9.5%.",
        "vs_sector": "Better than sector: 12.4% vs sector -9.2%.",
        "vs_peers": "Better than peers: 12.4% vs peers -20.1%."
      },
      "adv": {
        "insight": "ADV is HK$7.7M, better than market, but worse than sector and peers, which shows trading size is uneven across comparison groups.",
        "vs_market": "Better than market: HK$7.7M vs market HK$216.3K.",
        "vs_sector": "Worse than sector: HK$7.7M vs sector HK$30.9M.",
        "vs_peers": "Worse than peers: HK$7.7M vs peers HK$21.4M."
      },
      "spread": {
        "insight": "Spread is 0.35%, better than market, but worse than sector and peers, which shows execution cost is mixed across comparison groups.",
        "vs_market": "Better than market: 0.35% vs market 2.71%.",
        "vs_sector": "Worse than sector: 0.35% vs sector 0.22%.",
        "vs_peers": "Worse than peers: 0.35% vs peers 0.28%."
      },
      "turnover_ratio": {
        "insight": "Turnover ratio is 0.00%, worse than market, sector, and peers, which shows a lighter free-float turnover profile than comparable names.",
        "vs_market": "Worse than market: 0.00% vs market 0.08%.",
        "vs_sector": "Worse than sector: 0.00% vs sector 0.30%.",
        "vs_peers": "Worse than peers: 0.00% vs peers 0.21%."
      },
      "volatility": {
        "insight": "Volatility is 33.05%, better than market, which suggests day-to-day price swings are more contained than comparable names.",
        "vs_market": "Better than market: 33.05% vs market 59.43%.",
        "vs_sector": "In line with sector: 33.05% vs sector 35.58%.",
        "vs_peers": "In line with peers: 33.05% vs peers 35.57%."
      },
      "trades": {
        "insight": "Trades is 264, better than market, but worse than sector and peers, which shows trading frequency is mixed across comparison groups.",
        "vs_market": "Better than market: 264 vs market 20.",
        "vs_sector": "Worse than sector: 264 vs sector 1126.",
        "vs_peers": "Worse than peers: 264 vs peers 985."
      },
      "amihud": {
        "insight": "Price impact is 1.36e-09, better than market, but worse than sector and peers, which shows price impact is mixed across comparison groups.",
        "vs_market": "Better than market: 1.36e-09 vs market 4.66e-08.",
        "vs_sector": "Worse than sector: 1.36e-09 vs sector 4.21e-10.",
        "vs_peers": "Worse than peers: 1.36e-09 vs peers 6.99e-10."
      }
    },
    "performance": {
      "overall": "Recent returns are strong relative to peers and ahead of the market, with the stock up 5.1% over one month compared with peers down 7.7% and the market up 2.4%. Liquidity only partly confirms that move because the six-month liquidity score is 67.2 against a peer median of 78.5, and one-day average volume is 70.2% below the one-month average, which means the price strength is coming through a weaker trading base for its size.",
      "conclusion": "The move looks mainly sector-linked, with strong relative returns but only partial confirmation from liquidity."
    },
    "drivers": {
      "overall": "Sector moves are the main force in the stock right now, with 51.9% of recent price action explained by the sector. That matters because the tape is being shaped more by industry conditions than by company-specific news, which can make moves track the group more closely.",
      "beta": "The current read is mixed rather than one-way, with sector influence leading while market factors still account for a meaningful share. That matters because trading conditions are being set by broader external drivers, not a single stock-specific catalyst.",
      "rolling_change": "The monthly picture has shifted toward a more mixed pattern. February was balanced across company, sector, and market factors, March leaned more to the market, and April still looks mixed but with the sector now the largest influence."
    },
    "regime": {
      "overall": "Low volatility points to a steadier trading backdrop, and the pattern matters because it can keep price moves more orderly even when liquidity is weak for the stock's size.",
      "current": "Current market state is Low Volatility. The market has been in this state about 50.2% of the time. Based on 251 trading days relative to the 252-day target.",
      "transitions": "This state looks reasonably settled, with a typical run length of about 11.4 days, although the sharp 1D volume drop of 70.2% from the 1M average shows conditions can still change within that calmer backdrop.",
      "trading_implications": "This state looks more persistent, with a typical run length of about 11.4 days."
    },
    "execution": {
      "overall": "Displayed liquidity looks balanced on screen, with bid depth 1.54x the ask and a 2 tick spread. That matters because the immediate book does not show the same degree of weakness as the broader liquidity profile.",
      "concern": "The main watchpoint is thinner recent activity, with 1D average volume down 70.2% from the 1M average. That matters because a balanced book can still prove less durable when trading activity has pulled back this sharply.",
      "peer_context": "Immediate displayed depth broadly matches the stronger monthly liquidity read."
    },
    "trader_composition": {
      "overall": "By trade count and value, flow looks mainly institution-like.",
      "retail_heavy": "Institution-like trades account for 36.7% of trade count and 49.6% of trade value, compared with retail-like trades at 32.0% of count and 17.4% of value. That gap matters because the larger share of value sits with institution-like flow, not just the number of prints.",
      "institutional_gap": "The read is directionally clear rather than absolute, because 15.6% of trade count sits in ambiguous or unclear flow. That leaves the overall mix institution-like, but with some noise around the edges.",
      "peer_comparison": "The mix stands out as institution-like on both count and value, and the peer comparison in the report tables shows how far that profile differs from the group."
    },
    "price_moving": {
      "overall": "Price-moving activity is present but not dominant, with 28.3% of total trades moving price. That suggests the tape is being set by a meaningful minority of trades rather than by every print. The signal is mixed rather than fully clean because 15.6% of trade count is ambiguous or unclear. That matters because the direction of flow is readable, but not all of the price-setting activity can be tied neatly to one participant type.",
      "interpretation": "",
      "asymmetry": ""
    },
    "short_selling": {
      "overall": "Short activity does not appear to be the main issue in the tape, as the clearer signals are weak structural liquidity for size and a sharp one-day drop in average volume compared with the monthly average. That matters because current trading conditions look more driven by thinner flow than by a distinct short-selling overhang.",
      "level": "N/A",
      "correlation": "N/A",
      "trend": "The short-selling trend is not showing a clear separate signal, while the stock has still returned 5.1% over one month compared with peers at -7.7%. That matters because stronger recent price performance points away from short pressure as the factor shaping trading conditions.",
      "peaks": "N/A"
    },
    "intraday": {
      "overall": "Session split is open 0.5%, continuous 87.2%, and close 6.1%. Current trading concentration score is 0.196.",
      "hhi_interpretation": "The concentration score of 0.196 points to activity being reasonably spread across the day. That supports a steadier intraday flow profile rather than one dependent on a small number of time buckets.",
      "best_times": "Peak buckets show where activity clusters through the day.",
      "peer_ranking": "Intraday activity looks broadly distributed through the session, and the peer ranking in the report tables shows how that concentration profile compares with the wider group."
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
        "2378",
        "1828",
        "376",
        "945",
        "82318",
        "1508",
        "6963",
        "81299",
        "6060"
      ],
      "scores": [
        67.21120186697783,
        77.01283547257877,
        81.48580318942045,
        58.965383119408784,
        59.08206923376118,
        79.89109295993777,
        86.97005056398288,
        36.05600933488915,
        95.25476468300272
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
        7703220.0,
        12564153.0,
        30906468.0,
        3177480.7,
        4700143.751166745,
        30258669.785,
        49812182.5,
        362456.339899492,
        157669581.0
      ],
      "total": 2571
    },
    "market_comparison": {
      "sector_name": "Insurance",
      "sector_count": 21,
      "market_count": 2571,
      "company": {
        "volatility": 0.33046284735360926,
        "adv": 7703220.0,
        "spread_pct": 0.0034600924205130936,
        "turnover_ratio": 2.6832745112639818e-05,
        "amihud": 1.355141205653171e-09,
        "trades": 264.5
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
          "mean": 0.4391593094230815,
          "median": 0.35579007285580994,
          "min": 0.22052171689654756,
          "max": 1.9532717951160796,
          "p5": 0.22744134101273863,
          "p95": 0.6460178562791752,
          "count": 21
        },
        "adv": {
          "direction": "higher_is_better",
          "mean": 405305472.71505076,
          "median": 30906468.0,
          "min": 0.0,
          "max": 2369472990.6,
          "p5": 52400.0,
          "p95": 2113344346.3000002,
          "count": 21
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.008449180113828447,
          "median": 0.0021572762931632156,
          "min": 0.0006817801625866711,
          "max": 0.04885510979844958,
          "p5": 0.0008374730190405218,
          "p95": 0.03956686844600688,
          "count": 21
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.0038273313530622364,
          "median": 0.002977763933093107,
          "min": 0.0,
          "max": 0.01052082920748858,
          "p5": 4.3963152423660277e-07,
          "p95": 0.009975114750220379,
          "count": 21
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 2.403112806073349e-08,
          "median": 4.2050119510568814e-10,
          "min": 4.97937442051602e-12,
          "max": 1.611645266361319e-07,
          "p5": 7.214710232545567e-12,
          "p95": 1.5257857796765333e-07,
          "count": 21
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 5043.642857142857,
          "median": 1126.5,
          "min": 0.0,
          "max": 17089.0,
          "p5": 3.0,
          "p95": 16734.0,
          "count": 21
        }
      },
      "peers": {
        "adv": {
          "direction": "higher_is_better",
          "mean": 36181391.88450828,
          "median": 21411411.3925,
          "min": 362456.339899492,
          "max": 157669581.0,
          "p5": 1347714.86593467,
          "p95": 119919491.52499995,
          "count": 8
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 1601.4375,
          "median": 985.25,
          "min": 3.0,
          "max": 7321.5,
          "p5": 13.500000000000002,
          "p95": 5563.274999999998,
          "count": 8
        },
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.3578429561184914,
          "median": 0.35566394452114747,
          "min": 0.22052171689654756,
          "max": 0.6460178562791752,
          "p5": 0.22294358533721445,
          "p95": 0.5535304205327694,
          "count": 8
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.0032297698847685505,
          "median": 0.002768280883163731,
          "min": 0.001055364679709822,
          "max": 0.006629119170318686,
          "p5": 0.0014037049993180636,
          "p95": 0.005783030430323771,
          "count": 8
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 4.5521811801220465e-09,
          "median": 6.989190274102028e-10,
          "min": 9.211502288053665e-11,
          "max": 2.9421530889692924e-08,
          "p5": 1.5373883642624199e-10,
          "p95": 2.0076610105021984e-08,
          "count": 8
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.003064794136413955,
          "median": 0.00208517677436544,
          "min": 4.3963152423660277e-07,
          "max": 0.007924138583311587,
          "p5": 2.74474275789919e-06,
          "p95": 0.00758487732873396,
          "count": 8
        },
        "spread_ticks": {
          "direction": "neutral",
          "mean": 2.4866006003383774,
          "median": 1.9606818446237437,
          "min": 1.0816987438881478,
          "max": 5.676096350832266,
          "p5": 1.1187204640934625,
          "p95": 5.009737061462439,
          "count": 6
        }
      }
    },
    "returns": [
      {
        "horizon": "1M",
        "stock": 0.05137289636846698,
        "market": 0.02409148729213495,
        "sector": -0.031004187560704,
        "peers": -0.07685890338779122
      },
      {
        "horizon": "3M",
        "stock": -0.03808752025932027,
        "market": 0.0420090494699672,
        "sector": -0.13057854566419014,
        "peers": -0.1867690170460259
      },
      {
        "horizon": "6M",
        "stock": 0.1240530303030285,
        "market": 0.09531099833042789,
        "sector": -0.09241130058213054,
        "peers": -0.2008411446029994
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
      "share_market": 0.38884607225475537,
      "share_sector": 0.518760574004353,
      "share_idio": 0.09239335374089157,
      "beta_market": -0.5109442269820704,
      "beta_sector": 0.627190447022697,
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
            "median": 0.38884607225475537,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "38.9%",
            "display_range": null,
            "display_text": "38.9%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "share_pct",
            "value_pct": 38.9,
            "plain_english": "Market explains about 38.9% of price moves in the current state."
          },
          "sector_share": {
            "median": 0.518760574004353,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "51.9%",
            "display_range": null,
            "display_text": "51.9%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "share_pct",
            "value_pct": 51.9,
            "plain_english": "Sector explains about 51.9% of price moves in the current state."
          },
          "company_share": {
            "median": 0.09239335374089157,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "9.2%",
            "display_range": null,
            "display_text": "9.2%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "share_pct",
            "value_pct": 9.2,
            "plain_english": "Company-specific explains about 9.2% of price moves in the current state."
          },
          "basis": "current_state"
        },
        "current_sensitivities": {
          "beta_market": {
            "median": -0.5109442269820704,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "-0.51",
            "display_range": null,
            "display_text": "-0.51",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "beta",
            "strength_label": "Modest",
            "plain_english": "Modest market link: a 1% market move has lined up with about a 0.51% stock move in the opposite direction in this state.",
            "value_num": -0.51
          },
          "beta_stock_lag": {
            "median": -0.24368273509108018,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "-0.24",
            "display_range": null,
            "display_text": "-0.24",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "lag_beta",
            "value_num": -0.24
          },
          "beta_sector": {
            "median": 0.627190447022697,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "0.63",
            "display_range": null,
            "display_text": "0.63",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "beta",
            "strength_label": "Modest",
            "plain_english": "Modest sector link: a 1% sector move has lined up with about a 0.63% stock move in the same direction in this state.",
            "value_num": 0.63
          },
          "beta_market_lag": {
            "median": -0.49553122272346894,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "-0.50",
            "display_range": null,
            "display_text": "-0.50",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "lag_beta",
            "value_num": -0.5
          },
          "beta_sector_lag": {
            "median": 0.5433908153212466,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "0.54",
            "display_range": null,
            "display_text": "0.54",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "lag_beta",
            "value_num": 0.54
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
            "dominant_driver": "market",
            "dominant_driver_label": "Market",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.4656100213028263,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "46.6%",
              "display_range": null,
              "display_text": "46.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 16 trading days.",
              "kind": "share_pct",
              "value_pct": 46.6,
              "plain_english": "Market explains about 46.6% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.4656100213028263,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "46.6%",
                "display_range": null,
                "display_text": "46.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 16 trading days.",
                "kind": "share_pct",
                "value_pct": 46.6,
                "plain_english": "Market explains about 46.6% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.361074973391396,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "36.1%",
                "display_range": null,
                "display_text": "36.1%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 16 trading days.",
                "kind": "share_pct",
                "value_pct": 36.1,
                "plain_english": "Sector explains about 36.1% of price moves in the current state."
              },
              "company_share": {
                "median": 0.1733150053057778,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "17.3%",
                "display_range": null,
                "display_text": "17.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 16 trading days.",
                "kind": "share_pct",
                "value_pct": 17.3,
                "plain_english": "Company-specific explains about 17.3% of price moves in the current state."
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
              "median": 0.4999158179489456,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "50.0%",
              "display_range": null,
              "display_text": "50.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 50.0,
              "plain_english": "Company-specific explains about 50.0% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.26922400082749365,
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
                "median": 0.23086018122356086,
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
                "plain_english": "Sector explains about 23.1% of price moves in the current state."
              },
              "company_share": {
                "median": 0.4999158179489456,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "50.0%",
                "display_range": null,
                "display_text": "50.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 50.0,
                "plain_english": "Company-specific explains about 50.0% of price moves in the current state."
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
              "median": 0.4801991298940855,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "48.0%",
              "display_range": null,
              "display_text": "48.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 48.0,
              "plain_english": "Company-specific explains about 48.0% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.3196769291121179,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "32.0%",
                "display_range": null,
                "display_text": "32.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 32.0,
                "plain_english": "Market explains about 32.0% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.20012394099379674,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "20.0%",
                "display_range": null,
                "display_text": "20.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 20.0,
                "plain_english": "Sector explains about 20.0% of price moves in the current state."
              },
              "company_share": {
                "median": 0.4801991298940855,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "48.0%",
                "display_range": null,
                "display_text": "48.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 48.0,
                "plain_english": "Company-specific explains about 48.0% of price moves in the current state."
              }
            },
            "summary": "Jun: Mostly company-driven."
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
              "median": 0.5042448028818685,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "50.4%",
              "display_range": null,
              "display_text": "50.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 50.4,
              "plain_english": "Company-specific explains about 50.4% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.3504511862612629,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "35.0%",
                "display_range": null,
                "display_text": "35.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 35.0,
                "plain_english": "Market explains about 35.0% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.14530401085686864,
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
                "median": 0.5042448028818685,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "50.4%",
                "display_range": null,
                "display_text": "50.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 50.4,
                "plain_english": "Company-specific explains about 50.4% of price moves in the current state."
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
              "median": 0.6554434485727345,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "65.5%",
              "display_range": null,
              "display_text": "65.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 65.5,
              "plain_english": "Company-specific explains about 65.5% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.2962199454554944,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "29.6%",
                "display_range": null,
                "display_text": "29.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 29.6,
                "plain_english": "Market explains about 29.6% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.04833660597177116,
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
                "median": 0.6554434485727345,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "65.5%",
                "display_range": null,
                "display_text": "65.5%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 65.5,
                "plain_english": "Company-specific explains about 65.5% of price moves in the current state."
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
              "median": 0.5884762236101083,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "58.8%",
              "display_range": null,
              "display_text": "58.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 58.8,
              "plain_english": "Company-specific explains about 58.8% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.12466811381747869,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "12.5%",
                "display_range": null,
                "display_text": "12.5%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 12.5,
                "plain_english": "Market explains about 12.5% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.2868556625724131,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "28.7%",
                "display_range": null,
                "display_text": "28.7%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 28.7,
                "plain_english": "Sector explains about 28.7% of price moves in the current state."
              },
              "company_share": {
                "median": 0.5884762236101083,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "58.8%",
                "display_range": null,
                "display_text": "58.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 58.8,
                "plain_english": "Company-specific explains about 58.8% of price moves in the current state."
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
              "median": 0.4724204640392512,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "47.2%",
              "display_range": null,
              "display_text": "47.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 47.2,
              "plain_english": "Market explains about 47.2% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.4724204640392512,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "47.2%",
                "display_range": null,
                "display_text": "47.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 47.2,
                "plain_english": "Market explains about 47.2% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.13659689246626538,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "13.7%",
                "display_range": null,
                "display_text": "13.7%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 13.7,
                "plain_english": "Sector explains about 13.7% of price moves in the current state."
              },
              "company_share": {
                "median": 0.3909826434944835,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "39.1%",
                "display_range": null,
                "display_text": "39.1%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 39.1,
                "plain_english": "Company-specific explains about 39.1% of price moves in the current state."
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
              "median": 0.5646223957084407,
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
                "median": 0.5646223957084407,
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
                "median": 0.14128785850993694,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "14.1%",
                "display_range": null,
                "display_text": "14.1%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 14.1,
                "plain_english": "Sector explains about 14.1% of price moves in the current state."
              },
              "company_share": {
                "median": 0.2940897457816223,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "29.4%",
                "display_range": null,
                "display_text": "29.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 29.4,
                "plain_english": "Company-specific explains about 29.4% of price moves in the current state."
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
              "median": 0.639687660928263,
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
              "plain_english": "Company-specific explains about 64.0% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.22153615319965228,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "22.2%",
                "display_range": null,
                "display_text": "22.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
                "kind": "share_pct",
                "value_pct": 22.2,
                "plain_english": "Market explains about 22.2% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.13877618587208473,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "13.9%",
                "display_range": null,
                "display_text": "13.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
                "kind": "share_pct",
                "value_pct": 13.9,
                "plain_english": "Sector explains about 13.9% of price moves in the current state."
              },
              "company_share": {
                "median": 0.639687660928263,
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
                "plain_english": "Company-specific explains about 64.0% of price moves in the current state."
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
              "median": 0.4779541655203372,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "47.8%",
              "display_range": null,
              "display_text": "47.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 47.8,
              "plain_english": "Company-specific explains about 47.8% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.1471321523347198,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "14.7%",
                "display_range": null,
                "display_text": "14.7%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 14.7,
                "plain_english": "Market explains about 14.7% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.374913682144943,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "37.5%",
                "display_range": null,
                "display_text": "37.5%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 37.5,
                "plain_english": "Sector explains about 37.5% of price moves in the current state."
              },
              "company_share": {
                "median": 0.4779541655203372,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "47.8%",
                "display_range": null,
                "display_text": "47.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 47.8,
                "plain_english": "Company-specific explains about 47.8% of price moves in the current state."
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
              "median": 0.39083554021325145,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "39.1%",
              "display_range": null,
              "display_text": "39.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
              "kind": "share_pct",
              "value_pct": 39.1,
              "plain_english": "Market explains about 39.1% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.39083554021325145,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "39.1%",
                "display_range": null,
                "display_text": "39.1%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
                "kind": "share_pct",
                "value_pct": 39.1,
                "plain_english": "Market explains about 39.1% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.2920394856229293,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "29.2%",
                "display_range": null,
                "display_text": "29.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
                "kind": "share_pct",
                "value_pct": 29.2,
                "plain_english": "Sector explains about 29.2% of price moves in the current state."
              },
              "company_share": {
                "median": 0.3171249741638193,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "31.7%",
                "display_range": null,
                "display_text": "31.7%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
                "kind": "share_pct",
                "value_pct": 31.7,
                "plain_english": "Company-specific explains about 31.7% of price moves in the current state."
              }
            },
            "summary": "Feb: Much more balanced across company, sector, and market factors."
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
              "median": 0.38969788593489163,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "39.0%",
              "display_range": null,
              "display_text": "39.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 39.0,
              "plain_english": "Market explains about 39.0% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.38969788593489163,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "39.0%",
                "display_range": null,
                "display_text": "39.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 39.0,
                "plain_english": "Market explains about 39.0% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.36915372980528727,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "36.9%",
                "display_range": null,
                "display_text": "36.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 36.9,
                "plain_english": "Sector explains about 36.9% of price moves in the current state."
              },
              "company_share": {
                "median": 0.24114838425982119,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "24.1%",
                "display_range": null,
                "display_text": "24.1%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 24.1,
                "plain_english": "Company-specific explains about 24.1% of price moves in the current state."
              }
            },
            "summary": "Mar: More mixed, though market-driven still has the largest share."
          },
          {
            "month_key": "2026-04",
            "month_label": "April 2026",
            "month_short_label": "Apr",
            "period_label": "2026-04-01 to 2026-04-23",
            "n_obs": 14,
            "partial_month": false,
            "dominant_driver": "sector",
            "dominant_driver_label": "Sector",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.40442794635973156,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "40.4%",
              "display_range": null,
              "display_text": "40.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 14 trading days.",
              "kind": "share_pct",
              "value_pct": 40.4,
              "plain_english": "Sector explains about 40.4% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.27849681972310086,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "27.8%",
                "display_range": null,
                "display_text": "27.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 14 trading days.",
                "kind": "share_pct",
                "value_pct": 27.8,
                "plain_english": "Market explains about 27.8% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.40442794635973156,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "40.4%",
                "display_range": null,
                "display_text": "40.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 14 trading days.",
                "kind": "share_pct",
                "value_pct": 40.4,
                "plain_english": "Sector explains about 40.4% of price moves in the current state."
              },
              "company_share": {
                "median": 0.3170752339171676,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "31.7%",
                "display_range": null,
                "display_text": "31.7%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 14 trading days.",
                "kind": "share_pct",
                "value_pct": 31.7,
                "plain_english": "Company-specific explains about 31.7% of price moves in the current state."
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
            "current_probability": 1.0,
            "n_days_effective": 125.0,
            "volatility": {
              "median": 0.012680706182482751,
              "low": 0.012680706182482751,
              "high": 0.012680706182482751
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
              "median": 0.02680654403210755,
              "low": 0.02680654403210755,
              "high": 0.02680654403210755
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
          "market_link_display": "-0.51",
          "sector_link_display": "0.63",
          "market_link_explainer": "Modest market link. A 1% market move has lined up with about a 0.51% stock move in the opposite direction in this state. This is a point estimate from 251 trading days.",
          "sector_link_explainer": "Modest sector link. A 1% sector move has lined up with about a 0.63% stock move in the same direction in this state. This is a point estimate from 251 trading days.",
          "stock_persistence_display": "-0.24",
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "history_limited_note": "Read is based on 251 trading days versus the 252-day target."
        },
        "current_summary": {
          "regime_label": "Low Volatility",
          "dominant_driver": "sector",
          "dominant_driver_label": "Sector",
          "driver_share_pct": 51.9,
          "driver_share_display": "51.9%",
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
          "month_key": "2025-04",
          "month_label": "April 2025",
          "month_short_label": "Apr",
          "period_label": "2025-04-07 to 2025-04-30",
          "n_obs": 16,
          "partial_month": true,
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "regime_label": null,
          "summary": "Apr: Mostly market-driven.",
          "share_market": 0.4656100213028263,
          "share_sector": 0.361074973391396,
          "share_company": 0.1733150053057778,
          "share_market_display": "46.6%",
          "share_sector_display": "36.1%",
          "share_company_display": "17.3%",
          "dominant_share_display": "46.6%"
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
          "share_market": 0.26922400082749365,
          "share_sector": 0.23086018122356086,
          "share_company": 0.4999158179489456,
          "share_market_display": "26.9%",
          "share_sector_display": "23.1%",
          "share_company_display": "50.0%",
          "dominant_share_display": "50.0%"
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
          "summary": "Jun: Mostly company-driven.",
          "share_market": 0.3196769291121179,
          "share_sector": 0.20012394099379674,
          "share_company": 0.4801991298940855,
          "share_market_display": "32.0%",
          "share_sector_display": "20.0%",
          "share_company_display": "48.0%",
          "dominant_share_display": "48.0%"
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
          "share_market": 0.3504511862612629,
          "share_sector": 0.14530401085686864,
          "share_company": 0.5042448028818685,
          "share_market_display": "35.0%",
          "share_sector_display": "14.5%",
          "share_company_display": "50.4%",
          "dominant_share_display": "50.4%"
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
          "share_market": 0.2962199454554944,
          "share_sector": 0.04833660597177116,
          "share_company": 0.6554434485727345,
          "share_market_display": "29.6%",
          "share_sector_display": "4.8%",
          "share_company_display": "65.5%",
          "dominant_share_display": "65.5%"
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
          "share_market": 0.12466811381747869,
          "share_sector": 0.2868556625724131,
          "share_company": 0.5884762236101083,
          "share_market_display": "12.5%",
          "share_sector_display": "28.7%",
          "share_company_display": "58.8%",
          "dominant_share_display": "58.8%"
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
          "share_market": 0.4724204640392512,
          "share_sector": 0.13659689246626538,
          "share_company": 0.3909826434944835,
          "share_market_display": "47.2%",
          "share_sector_display": "13.7%",
          "share_company_display": "39.1%",
          "dominant_share_display": "47.2%"
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
          "share_market": 0.5646223957084407,
          "share_sector": 0.14128785850993694,
          "share_company": 0.2940897457816223,
          "share_market_display": "56.5%",
          "share_sector_display": "14.1%",
          "share_company_display": "29.4%",
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
          "share_market": 0.22153615319965228,
          "share_sector": 0.13877618587208473,
          "share_company": 0.639687660928263,
          "share_market_display": "22.2%",
          "share_sector_display": "13.9%",
          "share_company_display": "64.0%",
          "dominant_share_display": "64.0%"
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
          "share_market": 0.1471321523347198,
          "share_sector": 0.374913682144943,
          "share_company": 0.4779541655203372,
          "share_market_display": "14.7%",
          "share_sector_display": "37.5%",
          "share_company_display": "47.8%",
          "dominant_share_display": "47.8%"
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
          "summary": "Feb: Much more balanced across company, sector, and market factors.",
          "share_market": 0.39083554021325145,
          "share_sector": 0.2920394856229293,
          "share_company": 0.3171249741638193,
          "share_market_display": "39.1%",
          "share_sector_display": "29.2%",
          "share_company_display": "31.7%",
          "dominant_share_display": "39.1%"
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
          "share_market": 0.38969788593489163,
          "share_sector": 0.36915372980528727,
          "share_company": 0.24114838425982119,
          "share_market_display": "39.0%",
          "share_sector_display": "36.9%",
          "share_company_display": "24.1%",
          "dominant_share_display": "39.0%"
        },
        {
          "month_key": "2026-04",
          "month_label": "April 2026",
          "month_short_label": "Apr",
          "period_label": "2026-04-01 to 2026-04-23",
          "n_obs": 14,
          "partial_month": false,
          "dominant_driver": "sector",
          "dominant_driver_label": "Sector",
          "regime_label": null,
          "summary": "Apr: More mixed, though sector-driven still has the largest share.",
          "share_market": 0.27849681972310086,
          "share_sector": 0.40442794635973156,
          "share_company": 0.3170752339171676,
          "share_market_display": "27.8%",
          "share_sector_display": "40.4%",
          "share_company_display": "31.7%",
          "dominant_share_display": "40.4%"
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
              "median": 0.012680706182482751,
              "low": 0.012680706182482751,
              "high": 0.012680706182482751
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
              "median": 0.02680654403210755,
              "low": 0.02680654403210755,
              "high": 0.02680654403210755
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
          "price": 118.5,
          "quantity": 1000.0,
          "value": 118500.0
        },
        {
          "level": 2,
          "price": 118.4,
          "quantity": 3000.0,
          "value": 355200.0
        },
        {
          "level": 3,
          "price": 118.1,
          "quantity": 100.0,
          "value": 11810.0
        },
        {
          "level": 4,
          "price": 117.9,
          "quantity": 200.0,
          "value": 23580.0
        },
        {
          "level": 5,
          "price": 117.8,
          "quantity": 100.0,
          "value": 11780.0
        },
        {
          "level": 6,
          "price": 117.7,
          "quantity": 1300.0,
          "value": 153010.0
        },
        {
          "level": 7,
          "price": 117.5,
          "quantity": 100.0,
          "value": 11750.0
        },
        {
          "level": 8,
          "price": 117.4,
          "quantity": 100.0,
          "value": 11740.0
        },
        {
          "level": 9,
          "price": 117.3,
          "quantity": 750.0,
          "value": 87975.0
        },
        {
          "level": 10,
          "price": 117.2,
          "quantity": 200.0,
          "value": 23440.0
        },
        {
          "level": 11,
          "price": 117.1,
          "quantity": 650.0,
          "value": 76115.0
        },
        {
          "level": 12,
          "price": 117.0,
          "quantity": 350.0,
          "value": 40950.0
        },
        {
          "level": 13,
          "price": 116.8,
          "quantity": 200.0,
          "value": 23360.0
        },
        {
          "level": 14,
          "price": 116.6,
          "quantity": 100.0,
          "value": 11660.0
        },
        {
          "level": 15,
          "price": 116.4,
          "quantity": 100.0,
          "value": 11640.0
        },
        {
          "level": 16,
          "price": 116.2,
          "quantity": 800.0,
          "value": 92960.0
        },
        {
          "level": 17,
          "price": 116.0,
          "quantity": 100.0,
          "value": 11600.0
        },
        {
          "level": 18,
          "price": 115.8,
          "quantity": 100.0,
          "value": 11580.0
        },
        {
          "level": 19,
          "price": 115.6,
          "quantity": 100.0,
          "value": 11560.0
        },
        {
          "level": 20,
          "price": 115.4,
          "quantity": 100.0,
          "value": 11540.0
        },
        {
          "level": 21,
          "price": 115.0,
          "quantity": 50.0,
          "value": 5750.0
        },
        {
          "level": 22,
          "price": 112.2,
          "quantity": 500.0,
          "value": 56100.0
        },
        {
          "level": 23,
          "price": 112.0,
          "quantity": 50.0,
          "value": 5600.0
        },
        {
          "level": 24,
          "price": 111.0,
          "quantity": 300.0,
          "value": 33300.0
        },
        {
          "level": 25,
          "price": 110.0,
          "quantity": 550.0,
          "value": 60500.0
        },
        {
          "level": 26,
          "price": 109.8,
          "quantity": 200.0,
          "value": 21960.0
        },
        {
          "level": 27,
          "price": 105.4,
          "quantity": 200.0,
          "value": 21080.0
        },
        {
          "level": 28,
          "price": 105.0,
          "quantity": 200.0,
          "value": 21000.0
        },
        {
          "level": 29,
          "price": 104.8,
          "quantity": 500.0,
          "value": 52400.0
        },
        {
          "level": 30,
          "price": 104.0,
          "quantity": 300.0,
          "value": 31200.0
        },
        {
          "level": 31,
          "price": 103.2,
          "quantity": 200.0,
          "value": 20640.0
        },
        {
          "level": 32,
          "price": 103.0,
          "quantity": 200.0,
          "value": 20600.0
        },
        {
          "level": 33,
          "price": 102.0,
          "quantity": 1000.0,
          "value": 102000.0
        }
      ],
      "asks": [
        {
          "level": 1,
          "price": 118.7,
          "quantity": 600.0,
          "value": 71220.0
        },
        {
          "level": 2,
          "price": 119.0,
          "quantity": 1100.0,
          "value": 130900.0
        },
        {
          "level": 3,
          "price": 119.1,
          "quantity": 200.0,
          "value": 23820.0
        },
        {
          "level": 4,
          "price": 119.2,
          "quantity": 100.0,
          "value": 11920.0
        },
        {
          "level": 5,
          "price": 119.4,
          "quantity": 850.0,
          "value": 101490.0
        },
        {
          "level": 6,
          "price": 119.5,
          "quantity": 100.0,
          "value": 11950.0
        },
        {
          "level": 7,
          "price": 119.6,
          "quantity": 100.0,
          "value": 11960.0
        },
        {
          "level": 8,
          "price": 119.7,
          "quantity": 350.0,
          "value": 41895.0
        },
        {
          "level": 9,
          "price": 119.8,
          "quantity": 150.0,
          "value": 17970.0
        },
        {
          "level": 10,
          "price": 119.9,
          "quantity": 600.0,
          "value": 71940.0
        },
        {
          "level": 11,
          "price": 120.0,
          "quantity": 1200.0,
          "value": 144000.0
        },
        {
          "level": 12,
          "price": 120.2,
          "quantity": 100.0,
          "value": 12020.0
        },
        {
          "level": 13,
          "price": 120.4,
          "quantity": 100.0,
          "value": 12040.0
        },
        {
          "level": 14,
          "price": 120.6,
          "quantity": 100.0,
          "value": 12060.0
        },
        {
          "level": 15,
          "price": 120.8,
          "quantity": 100.0,
          "value": 12080.0
        },
        {
          "level": 16,
          "price": 121.0,
          "quantity": 200.0,
          "value": 24200.0
        },
        {
          "level": 17,
          "price": 121.2,
          "quantity": 100.0,
          "value": 12120.0
        },
        {
          "level": 18,
          "price": 122.0,
          "quantity": 650.0,
          "value": 79300.0
        },
        {
          "level": 19,
          "price": 123.0,
          "quantity": 500.0,
          "value": 61500.0
        },
        {
          "level": 20,
          "price": 124.5,
          "quantity": 300.0,
          "value": 37350.0
        },
        {
          "level": 21,
          "price": 126.0,
          "quantity": 100.0,
          "value": 12600.0
        },
        {
          "level": 22,
          "price": 126.1,
          "quantity": 50.0,
          "value": 6305.0
        },
        {
          "level": 23,
          "price": 135.0,
          "quantity": 700.0,
          "value": 94500.0
        }
      ]
    },
    "execution_dynamic": {
      "snapshot": {
        "valid": true,
        "snapshot_time": "2026-04-23 07:59:53.665000000",
        "snapshot_basis": "last_continuous_session_snapshot",
        "snapshot_label": "final continuous-session displayed book before close",
        "snapshot_note": "Final continuous-session displayed book before close",
        "snapshot_mic": "XHKG",
        "mid_price": 118.6,
        "spread_pct": 0.0016863406408094675,
        "spread_ticks": 2.0,
        "tick_size": 0.1,
        "displayed_levels_per_side": 100,
        "bid_depth_notional_displayed": 1563880.0,
        "ask_depth_notional_displayed": 1015140.0,
        "bid_depth_notional_top10": 1563880.0,
        "ask_depth_notional_top10": 1015140.0,
        "bid_ask_depth_ratio": 1.5406
      },
      "historical_trade_scenarios": {
        "valid": true,
        "requested_lookback_calendar_days": 365,
        "lookback_calendar_days": 365,
        "effective_calendar_days": 366,
        "history_limited": false,
        "trade_days_used": 241,
        "n_trades_used": 144910,
        "first_trade_date": "2025-04-23",
        "last_trade_date": "2026-04-23",
        "window_label": "Apr 23, 2025 to Apr 23, 2026",
        "window_short_label": "Apr 23, 2025 to Apr 23, 2026",
        "trade_days_label": "241 trading days",
        "trade_count_label": "144,910 trades",
        "window_detail_label": "241 trading days • 144,910 trades",
        "history_note": "Trade-size percentiles use Apr 23, 2025 to Apr 23, 2026 history (241 trading days • 144,910 trades).",
        "scenarios": [
          {
            "key": "p90",
            "label": "90th percentile trade",
            "quantile": 0.9,
            "trade_notional": 35880.0,
            "impact_pct": -0.000843,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 2.29,
            "pct_of_adv": 0.51
          },
          {
            "key": "p95",
            "label": "95th percentile trade",
            "quantile": 0.95,
            "trade_notional": 55012.37,
            "impact_pct": -0.000843,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 3.52,
            "pct_of_adv": 0.77
          },
          {
            "key": "p99_99",
            "label": "99.99th percentile trade",
            "quantile": 0.9999,
            "trade_notional": 9027180.56,
            "impact_pct": -0.037506,
            "filled_pct": 17.3,
            "levels_consumed": 33,
            "pct_of_bid_depth": 577.23,
            "pct_of_adv": 127.08
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
            "order_id": "20078337",
            "timestamp": "2026-04-23 01:20:17.800000000",
            "local_timestamp": "2026-04-23 09:20:17",
            "posted_price": 119.3,
            "size_shares": 6950.0,
            "notional": 829135.0,
            "impact_pct": -0.004665,
            "filled_pct": 100.0,
            "levels_consumed": 11,
            "pct_of_bid_depth": 53.02,
            "price_vs_mid_pct": 0.59,
            "executed_event_count": 0,
            "event_count": 1
          },
          {
            "rank": 2,
            "order_id": "4416847617",
            "timestamp": "2026-04-23 07:57:38.473000000",
            "local_timestamp": "2026-04-23 15:57:38",
            "posted_price": 119.0,
            "size_shares": 3000.0,
            "notional": 357000.0,
            "impact_pct": -0.0014069999999999998,
            "filled_pct": 100.0,
            "levels_consumed": 2,
            "pct_of_bid_depth": 22.83,
            "price_vs_mid_pct": 0.337,
            "executed_event_count": 0,
            "event_count": 2
          },
          {
            "rank": 3,
            "order_id": "4412385793",
            "timestamp": "2026-04-23 07:57:10.486000000",
            "local_timestamp": "2026-04-23 15:57:10",
            "posted_price": 119.0,
            "size_shares": 3000.0,
            "notional": 357000.0,
            "impact_pct": -0.0014069999999999998,
            "filled_pct": 100.0,
            "levels_consumed": 2,
            "pct_of_bid_depth": 22.83,
            "price_vs_mid_pct": 0.337,
            "executed_event_count": 0,
            "event_count": 1
          }
        ]
      },
      "intraday_liquidity_profile": {
        "valid": true,
        "trade_date": "2026-04-23",
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
            "spread_pct": 0.003378378378378306,
            "spread_ticks": 3.9999999999999147,
            "bid_depth_notional": 915925.0,
            "ask_depth_notional": 863230.0,
            "mid_price": 118.4
          },
          {
            "bucket": "10:00",
            "spread_pct": 0.0016949152542371918,
            "spread_ticks": 1.9999999999998863,
            "bid_depth_notional": 996830.0,
            "ask_depth_notional": 2193005.0,
            "mid_price": 118.0
          },
          {
            "bucket": "10:30",
            "spread_pct": 0.0016963528413910334,
            "spread_ticks": 2.0000000000000284,
            "bid_depth_notional": 1031280.0,
            "ask_depth_notional": 2119535.0,
            "mid_price": 117.9
          },
          {
            "bucket": "11:00",
            "spread_pct": 0.004246284501061571,
            "spread_ticks": 5.0,
            "bid_depth_notional": 1018740.0,
            "ask_depth_notional": 2261440.0,
            "mid_price": 117.75
          },
          {
            "bucket": "11:30",
            "spread_pct": 0.002549936251593686,
            "spread_ticks": 2.9999999999999716,
            "bid_depth_notional": 854615.0,
            "ask_depth_notional": 1929290.0,
            "mid_price": 117.65
          },
          {
            "bucket": "13:00",
            "spread_pct": 0.0008478168715556957,
            "spread_ticks": 0.9999999999999432,
            "bid_depth_notional": 1376805.0,
            "ask_depth_notional": 2285315.0,
            "mid_price": 117.95
          },
          {
            "bucket": "13:30",
            "spread_pct": 0.0016920473773265894,
            "spread_ticks": 2.0000000000000284,
            "bid_depth_notional": 1730370.0,
            "ask_depth_notional": 917790.0,
            "mid_price": 118.19999999999999
          },
          {
            "bucket": "14:00",
            "spread_pct": 0.0016920473773265894,
            "spread_ticks": 2.0000000000000284,
            "bid_depth_notional": 1618200.0,
            "ask_depth_notional": 1148460.0,
            "mid_price": 118.19999999999999
          },
          {
            "bucket": "14:30",
            "spread_pct": 0.0033726812816188153,
            "spread_ticks": 3.9999999999999147,
            "bid_depth_notional": 1689195.0,
            "ask_depth_notional": 1009530.0,
            "mid_price": 118.6
          },
          {
            "bucket": "15:00",
            "spread_pct": 0.0016863406408094675,
            "spread_ticks": 2.0000000000000284,
            "bid_depth_notional": 1909970.0,
            "ask_depth_notional": 1264785.0,
            "mid_price": 118.6
          },
          {
            "bucket": "15:30",
            "spread_pct": 0.0016863406408094675,
            "spread_ticks": 2.0000000000000284,
            "bid_depth_notional": 1563880.0,
            "ask_depth_notional": 1015140.0,
            "mid_price": 118.6
          }
        ],
        "summary": {
          "median_spread_pct": 0.0016949152542371918,
          "median_spread_ticks": 2.0000000000000284,
          "median_bid_depth_notional": 1376805.0,
          "median_ask_depth_notional": 1264785.0,
          "tightest_bucket": "13:00",
          "widest_bucket": "11:00",
          "deepest_bid_bucket": "15:00",
          "thinnest_bid_bucket": "11:30"
        }
      }
    },
    "peer_capacity": {
      "bx_ticket_pct_adv_50k": 0.7,
      "peers": [
        {
          "ticker": "6060",
          "pct": 0.8
        },
        {
          "ticker": "6963",
          "pct": 1.7
        },
        {
          "ticker": "1508",
          "pct": 3.3
        },
        {
          "ticker": "376",
          "pct": 7.1
        },
        {
          "ticker": "1828",
          "pct": 15.9
        },
        {
          "ticker": "82318",
          "pct": 25.8
        },
        {
          "ticker": "945",
          "pct": 29.4
        },
        {
          "ticker": "81299",
          "pct": 186.5
        }
      ]
    },
    "trader_composition": {
      "primary_period": "6m",
      "periods": {
        "1d": {
          "valid": true,
          "currency": "HKD",
          "n_trades": 220,
          "n_runs": 79,
          "n_trade_days": 1,
          "first_trade_date": "2026-04-23",
          "last_trade_date": "2026-04-23",
          "period_days": 1,
          "method": {
            "key": "persona_v4_l2_only",
            "name": "Trader persona v4 — L2-only",
            "version": "4.0",
            "unit_of_classification": "runs"
          },
          "thresholds": {
            "retail_max": 10000.0,
            "instit_min": 50000.0
          },
          "composition": {
            "retail_pct": 0.32272727272727275,
            "mixed_pct": 0.10909090909090909,
            "instit_pct": 0.509090909090909,
            "ambiguous_pct": 0.05909090909090909,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.05909090909090909,
            "retail_qty_pct": 0.21016883368911313,
            "mixed_qty_pct": 0.09897147292839123,
            "instit_qty_pct": 0.613235008732777,
            "ambiguous_qty_pct": 0.07762468464971861,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.07762468464971861,
            "retail_notional_pct": 0.21007243933816833,
            "mixed_notional_pct": 0.09900622826647514,
            "instit_notional_pct": 0.6133133832719523,
            "ambiguous_notional_pct": 0.07760794912340424,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.07760794912340424
          },
          "run_composition": {
            "retail_pct": 0.5189873417721519,
            "mixed_pct": 0.16455696202531644,
            "instit_pct": 0.25316455696202533,
            "ambiguous_pct": 0.06329113924050633,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.06329113924050633,
            "retail_notional_pct": 0.10203212564784926,
            "mixed_notional_pct": 0.12313933444332936,
            "instit_notional_pct": 0.7218247322250249,
            "unclear_notional_pct": 0.05300380768379648
          },
          "counts": {
            "trades": {
              "retail": 71,
              "mixed": 24,
              "institutional": 112,
              "ambiguous": 13,
              "unobservable": 0,
              "unclear": 13
            },
            "runs": {
              "retail": 41,
              "mixed": 13,
              "institutional": 20,
              "ambiguous": 5,
              "unobservable": 0,
              "unclear": 5
            }
          },
          "confidence": {
            "high": 0.7721518987341772,
            "medium": 0.16455696202531644,
            "low": 0.06329113924050633,
            "na": 0.0
          },
          "confidence_counts": {
            "high": 61,
            "medium": 13,
            "low": 5,
            "na": 0
          },
          "trade_confidence": {
            "high": 0.6318181818181818,
            "medium": 0.10909090909090909,
            "low": 0.2590909090909091,
            "na": 0.0
          },
          "trade_confidence_counts": {
            "high": 139,
            "medium": 24,
            "low": 57,
            "na": 0
          },
          "observability": {
            "avg_feature_coverage": 0.8784810126582274,
            "observable_run_pct": 1.0,
            "ambiguous_run_pct": 0.06329113924050633,
            "unobservable_run_pct": 0.0
          },
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "dominant_share": 0.5189873417721519,
          "dominance_gap": 0.26582278481012656,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 100,
              "WALK_BOOK": 69,
              "UNOBSERVABLE": 51
            },
            "d2_information": {
              "UNOBSERVABLE": 220
            },
            "d3_urgency": {
              "UNOBSERVABLE": 79
            },
            "participant_confidence": {
              "HIGH": 61,
              "MEDIUM": 13,
              "LOW": 5
            }
          },
          "trade_size": {
            "avg": 13846.695454545454,
            "median": 5925.0
          },
          "run_size": {
            "avg": 31003.26582278481,
            "median": 5950.0,
            "avg_length": 1.3164556962025316
          },
          "recent_trades": [
            {
              "trade_id": "220",
              "timestamp": "2026-04-23T07:59:53.512894",
              "price": 118.6,
              "size": 50.0,
              "notional": 5930.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 46308,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "219",
              "timestamp": "2026-04-23T07:59:53.512264",
              "price": 118.6,
              "size": 50.0,
              "notional": 5930.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 46308,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "218",
              "timestamp": "2026-04-23T07:59:46.356535",
              "price": 118.6,
              "size": 50.0,
              "notional": 5930.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 46308,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "217",
              "timestamp": "2026-04-23T07:58:47.418746",
              "price": 118.7,
              "size": 50.0,
              "notional": 5935.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 46307,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "216",
              "timestamp": "2026-04-23T07:58:29.676792",
              "price": 118.7,
              "size": 50.0,
              "notional": 5935.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "215",
              "timestamp": "2026-04-23T07:58:01.075333",
              "price": 118.7,
              "size": 50.0,
              "notional": 5935.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 46306,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "214",
              "timestamp": "2026-04-23T07:57:04.588224",
              "price": 118.6,
              "size": 50.0,
              "notional": 5930.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 46305,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "213",
              "timestamp": "2026-04-23T07:53:50.804944",
              "price": 118.4,
              "size": 50.0,
              "notional": 5920.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "212",
              "timestamp": "2026-04-23T07:53:45.811172",
              "price": 118.4,
              "size": 50.0,
              "notional": 5920.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 46304,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "211",
              "timestamp": "2026-04-23T07:52:44.899531",
              "price": 118.5,
              "size": 50.0,
              "notional": 5925.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 46303,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "210",
              "timestamp": "2026-04-23T07:52:29.813628",
              "price": 118.5,
              "size": 50.0,
              "notional": 5925.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 46302,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "209",
              "timestamp": "2026-04-23T07:50:57.868506",
              "price": 118.7,
              "size": 500.0,
              "notional": 59350.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 46301,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "208",
              "timestamp": "2026-04-23T07:50:57.611453",
              "price": 118.7,
              "size": 500.0,
              "notional": 59350.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 46301,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "207",
              "timestamp": "2026-04-23T07:50:57.354024",
              "price": 118.7,
              "size": 250.0,
              "notional": 29675.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 46301,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "206",
              "timestamp": "2026-04-23T07:50:18.210253",
              "price": 118.6,
              "size": 50.0,
              "notional": 5930.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 46300,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "205",
              "timestamp": "2026-04-23T07:48:38.707637",
              "price": 118.6,
              "size": 50.0,
              "notional": 5930.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "204",
              "timestamp": "2026-04-23T07:48:31.796088",
              "price": 118.6,
              "size": 200.0,
              "notional": 23720.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 46299,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "203",
              "timestamp": "2026-04-23T07:48:31.538251",
              "price": 118.6,
              "size": 50.0,
              "notional": 5930.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 46298,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "202",
              "timestamp": "2026-04-23T07:43:13.690032",
              "price": 118.5,
              "size": 50.0,
              "notional": 5925.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "201",
              "timestamp": "2026-04-23T07:40:51.518014",
              "price": 118.5,
              "size": 250.0,
              "notional": 29625.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 46297,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "200",
              "timestamp": "2026-04-23T07:40:51.518014",
              "price": 118.5,
              "size": 50.0,
              "notional": 5925.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 46297,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "199",
              "timestamp": "2026-04-23T07:40:51.518014",
              "price": 118.5,
              "size": 100.0,
              "notional": 11850.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 46297,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "198",
              "timestamp": "2026-04-23T07:36:47.487626",
              "price": 118.5,
              "size": 50.0,
              "notional": 5925.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 46296,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "197",
              "timestamp": "2026-04-23T07:33:08.303654",
              "price": 118.5,
              "size": 50.0,
              "notional": 5925.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "196",
              "timestamp": "2026-04-23T07:33:08.303654",
              "price": 118.5,
              "size": 150.0,
              "notional": 17775.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "195",
              "timestamp": "2026-04-23T07:33:08.303654",
              "price": 118.5,
              "size": 50.0,
              "notional": 5925.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "194",
              "timestamp": "2026-04-23T07:33:08.303654",
              "price": 118.5,
              "size": 50.0,
              "notional": 5925.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 46295,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "193",
              "timestamp": "2026-04-23T07:30:02.571016",
              "price": 118.6,
              "size": 150.0,
              "notional": 17790.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "192",
              "timestamp": "2026-04-23T07:26:27.571947",
              "price": 118.6,
              "size": 200.0,
              "notional": 23720.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 46294,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "191",
              "timestamp": "2026-04-23T07:26:27.314692",
              "price": 118.6,
              "size": 500.0,
              "notional": 59300.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            }
          ],
          "peer_comparison": []
        },
        "30d": {
          "valid": true,
          "currency": "HKD",
          "n_trades": 12788,
          "n_runs": 4843,
          "n_trade_days": 21,
          "first_trade_date": "2026-03-23",
          "last_trade_date": "2026-04-23",
          "period_days": 21,
          "method": {
            "key": "persona_v4_l2_only",
            "name": "Trader persona v4 — L2-only",
            "version": "4.0",
            "unit_of_classification": "runs"
          },
          "thresholds": {
            "retail_max": 10000.0,
            "instit_min": 50000.0
          },
          "composition": {
            "retail_pct": 0.33289020957147325,
            "mixed_pct": 0.15186111979981232,
            "instit_pct": 0.34743509540193934,
            "ambiguous_pct": 0.1678135752267751,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.1678135752267751,
            "retail_qty_pct": 0.20235100161493474,
            "mixed_qty_pct": 0.16026162035325486,
            "instit_qty_pct": 0.5005840811464329,
            "ambiguous_qty_pct": 0.13680329688537748,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.13680329688537748,
            "retail_notional_pct": 0.20081261340508447,
            "mixed_notional_pct": 0.15942478957256773,
            "instit_notional_pct": 0.50328805440065,
            "ambiguous_notional_pct": 0.13647454262169778,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.13647454262169778
          },
          "run_composition": {
            "retail_pct": 0.49597357010117693,
            "mixed_pct": 0.20235391286392732,
            "instit_pct": 0.18810654552963038,
            "ambiguous_pct": 0.11356597150526533,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.11356597150526533,
            "retail_notional_pct": 0.16310398508933072,
            "mixed_notional_pct": 0.14205824815471846,
            "instit_notional_pct": 0.6059225929392106,
            "unclear_notional_pct": 0.08891517381674031
          },
          "counts": {
            "trades": {
              "retail": 4257,
              "mixed": 1942,
              "institutional": 4443,
              "ambiguous": 2146,
              "unobservable": 0,
              "unclear": 2146
            },
            "runs": {
              "retail": 2402,
              "mixed": 980,
              "institutional": 911,
              "ambiguous": 550,
              "unobservable": 0,
              "unclear": 550
            }
          },
          "confidence": {
            "high": 0.6838736320462523,
            "medium": 0.20256039644848234,
            "low": 0.11356597150526533,
            "na": 0.0
          },
          "confidence_counts": {
            "high": 3312,
            "medium": 981,
            "low": 550,
            "na": 0
          },
          "trade_confidence": {
            "high": 0.5082108226462309,
            "medium": 0.1371598373475133,
            "low": 0.35462934000625584,
            "na": 0.0
          },
          "trade_confidence_counts": {
            "high": 6499,
            "medium": 1754,
            "low": 4535,
            "na": 0
          },
          "observability": {
            "avg_feature_coverage": 0.8760272558331611,
            "observable_run_pct": 1.0,
            "ambiguous_run_pct": 0.11356597150526533,
            "unobservable_run_pct": 0.0
          },
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "dominant_share": 0.49597357010117693,
          "dominance_gap": 0.2936196572372496,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 6851,
              "UNOBSERVABLE": 3543,
              "WALK_BOOK": 2394
            },
            "d2_information": {
              "UNOBSERVABLE": 12788
            },
            "d3_urgency": {
              "UNOBSERVABLE": 4843
            },
            "participant_confidence": {
              "HIGH": 3312,
              "MEDIUM": 981,
              "LOW": 550
            }
          },
          "trade_size": {
            "avg": 19364.003931811072,
            "median": 10700.0
          },
          "run_size": {
            "avg": 36953.38444765641,
            "median": 11830.0,
            "avg_length": 1.2682221763369812
          },
          "recent_trades": [
            {
              "trade_id": "220",
              "timestamp": "2026-04-23T07:59:53.512894",
              "price": 118.6,
              "size": 50.0,
              "notional": 5930.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 46308,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "219",
              "timestamp": "2026-04-23T07:59:53.512264",
              "price": 118.6,
              "size": 50.0,
              "notional": 5930.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 46308,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "218",
              "timestamp": "2026-04-23T07:59:46.356535",
              "price": 118.6,
              "size": 50.0,
              "notional": 5930.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 46308,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "217",
              "timestamp": "2026-04-23T07:58:47.418746",
              "price": 118.7,
              "size": 50.0,
              "notional": 5935.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 46307,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "216",
              "timestamp": "2026-04-23T07:58:29.676792",
              "price": 118.7,
              "size": 50.0,
              "notional": 5935.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "215",
              "timestamp": "2026-04-23T07:58:01.075333",
              "price": 118.7,
              "size": 50.0,
              "notional": 5935.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 46306,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "214",
              "timestamp": "2026-04-23T07:57:04.588224",
              "price": 118.6,
              "size": 50.0,
              "notional": 5930.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 46305,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "213",
              "timestamp": "2026-04-23T07:53:50.804944",
              "price": 118.4,
              "size": 50.0,
              "notional": 5920.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "212",
              "timestamp": "2026-04-23T07:53:45.811172",
              "price": 118.4,
              "size": 50.0,
              "notional": 5920.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 46304,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "211",
              "timestamp": "2026-04-23T07:52:44.899531",
              "price": 118.5,
              "size": 50.0,
              "notional": 5925.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 46303,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "210",
              "timestamp": "2026-04-23T07:52:29.813628",
              "price": 118.5,
              "size": 50.0,
              "notional": 5925.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 46302,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "209",
              "timestamp": "2026-04-23T07:50:57.868506",
              "price": 118.7,
              "size": 500.0,
              "notional": 59350.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 46301,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "208",
              "timestamp": "2026-04-23T07:50:57.611453",
              "price": 118.7,
              "size": 500.0,
              "notional": 59350.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 46301,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "207",
              "timestamp": "2026-04-23T07:50:57.354024",
              "price": 118.7,
              "size": 250.0,
              "notional": 29675.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 46301,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "206",
              "timestamp": "2026-04-23T07:50:18.210253",
              "price": 118.6,
              "size": 50.0,
              "notional": 5930.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 46300,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "205",
              "timestamp": "2026-04-23T07:48:38.707637",
              "price": 118.6,
              "size": 50.0,
              "notional": 5930.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "204",
              "timestamp": "2026-04-23T07:48:31.796088",
              "price": 118.6,
              "size": 200.0,
              "notional": 23720.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 46299,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "203",
              "timestamp": "2026-04-23T07:48:31.538251",
              "price": 118.6,
              "size": 50.0,
              "notional": 5930.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 46298,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "202",
              "timestamp": "2026-04-23T07:43:13.690032",
              "price": 118.5,
              "size": 50.0,
              "notional": 5925.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "201",
              "timestamp": "2026-04-23T07:40:51.518014",
              "price": 118.5,
              "size": 250.0,
              "notional": 29625.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 46297,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "200",
              "timestamp": "2026-04-23T07:40:51.518014",
              "price": 118.5,
              "size": 50.0,
              "notional": 5925.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 46297,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "199",
              "timestamp": "2026-04-23T07:40:51.518014",
              "price": 118.5,
              "size": 100.0,
              "notional": 11850.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 46297,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "198",
              "timestamp": "2026-04-23T07:36:47.487626",
              "price": 118.5,
              "size": 50.0,
              "notional": 5925.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 46296,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "197",
              "timestamp": "2026-04-23T07:33:08.303654",
              "price": 118.5,
              "size": 50.0,
              "notional": 5925.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "196",
              "timestamp": "2026-04-23T07:33:08.303654",
              "price": 118.5,
              "size": 150.0,
              "notional": 17775.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "195",
              "timestamp": "2026-04-23T07:33:08.303654",
              "price": 118.5,
              "size": 50.0,
              "notional": 5925.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "194",
              "timestamp": "2026-04-23T07:33:08.303654",
              "price": 118.5,
              "size": 50.0,
              "notional": 5925.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 46295,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "193",
              "timestamp": "2026-04-23T07:30:02.571016",
              "price": 118.6,
              "size": 150.0,
              "notional": 17790.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "192",
              "timestamp": "2026-04-23T07:26:27.571947",
              "price": 118.6,
              "size": 200.0,
              "notional": 23720.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 46294,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "191",
              "timestamp": "2026-04-23T07:26:27.314692",
              "price": 118.6,
              "size": 500.0,
              "notional": 59300.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            }
          ],
          "peer_comparison": []
        },
        "3m": {
          "valid": true,
          "currency": "HKD",
          "n_trades": 37737,
          "n_runs": 14104,
          "n_trade_days": 63,
          "first_trade_date": "2026-01-19",
          "last_trade_date": "2026-04-23",
          "period_days": 63,
          "method": {
            "key": "persona_v4_l2_only",
            "name": "Trader persona v4 — L2-only",
            "version": "4.0",
            "unit_of_classification": "runs"
          },
          "thresholds": {
            "retail_max": 10000.0,
            "instit_min": 50000.0
          },
          "composition": {
            "retail_pct": 0.3311074012242627,
            "mixed_pct": 0.15483477753928504,
            "instit_pct": 0.3563346317937303,
            "ambiguous_pct": 0.15772318944272198,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.15772318944272198,
            "retail_qty_pct": 0.18541336450934698,
            "mixed_qty_pct": 0.1894226026446447,
            "instit_qty_pct": 0.48953204184994126,
            "ambiguous_qty_pct": 0.13563199099606704,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.13563199099606704,
            "retail_notional_pct": 0.18381100381771928,
            "mixed_notional_pct": 0.18990759085021347,
            "instit_notional_pct": 0.49098363987731497,
            "ambiguous_notional_pct": 0.13529776545475225,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.13529776545475225
          },
          "run_composition": {
            "retail_pct": 0.5021270561542824,
            "mixed_pct": 0.2054736245036869,
            "instit_pct": 0.18555019852524107,
            "ambiguous_pct": 0.10684912081678956,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.10684912081678956,
            "retail_notional_pct": 0.138851741838034,
            "mixed_notional_pct": 0.15433129670282184,
            "instit_notional_pct": 0.6137723986216672,
            "unclear_notional_pct": 0.09304456283747692
          },
          "counts": {
            "trades": {
              "retail": 12495,
              "mixed": 5843,
              "institutional": 13447,
              "ambiguous": 5952,
              "unobservable": 0,
              "unclear": 5952
            },
            "runs": {
              "retail": 7082,
              "mixed": 2898,
              "institutional": 2617,
              "ambiguous": 1507,
              "unobservable": 0,
              "unclear": 1507
            }
          },
          "confidence": {
            "high": 0.6874645490640953,
            "medium": 0.20568633011911513,
            "low": 0.10684912081678956,
            "na": 0.0
          },
          "confidence_counts": {
            "high": 9696,
            "medium": 2901,
            "low": 1507,
            "na": 0
          },
          "trade_confidence": {
            "high": 0.5063200572382542,
            "medium": 0.13766330126931128,
            "low": 0.3560166414924345,
            "na": 0.0
          },
          "trade_confidence_counts": {
            "high": 19107,
            "medium": 5195,
            "low": 13435,
            "na": 0
          },
          "observability": {
            "avg_feature_coverage": 0.8762017867271694,
            "observable_run_pct": 1.0,
            "ambiguous_run_pct": 0.10684912081678956,
            "unobservable_run_pct": 0.0
          },
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "dominant_share": 0.5021270561542824,
          "dominance_gap": 0.29665343165059554,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 20125,
              "UNOBSERVABLE": 10701,
              "WALK_BOOK": 6911
            },
            "d2_information": {
              "UNOBSERVABLE": 37737
            },
            "d3_urgency": {
              "UNOBSERVABLE": 14104
            },
            "participant_confidence": {
              "HIGH": 9696,
              "MEDIUM": 2901,
              "LOW": 1507
            }
          },
          "trade_size": {
            "avg": 17965.285240745157,
            "median": 6480.0
          },
          "run_size": {
            "avg": 33441.092358905276,
            "median": 11840.0,
            "avg_length": 1.276942711287578
          },
          "recent_trades": [
            {
              "trade_id": "220",
              "timestamp": "2026-04-23T07:59:53.512894",
              "price": 118.6,
              "size": 50.0,
              "notional": 5930.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 46308,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "219",
              "timestamp": "2026-04-23T07:59:53.512264",
              "price": 118.6,
              "size": 50.0,
              "notional": 5930.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 46308,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "218",
              "timestamp": "2026-04-23T07:59:46.356535",
              "price": 118.6,
              "size": 50.0,
              "notional": 5930.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 46308,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "217",
              "timestamp": "2026-04-23T07:58:47.418746",
              "price": 118.7,
              "size": 50.0,
              "notional": 5935.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 46307,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "216",
              "timestamp": "2026-04-23T07:58:29.676792",
              "price": 118.7,
              "size": 50.0,
              "notional": 5935.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "215",
              "timestamp": "2026-04-23T07:58:01.075333",
              "price": 118.7,
              "size": 50.0,
              "notional": 5935.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 46306,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "214",
              "timestamp": "2026-04-23T07:57:04.588224",
              "price": 118.6,
              "size": 50.0,
              "notional": 5930.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 46305,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "213",
              "timestamp": "2026-04-23T07:53:50.804944",
              "price": 118.4,
              "size": 50.0,
              "notional": 5920.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "212",
              "timestamp": "2026-04-23T07:53:45.811172",
              "price": 118.4,
              "size": 50.0,
              "notional": 5920.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 46304,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "211",
              "timestamp": "2026-04-23T07:52:44.899531",
              "price": 118.5,
              "size": 50.0,
              "notional": 5925.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 46303,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "210",
              "timestamp": "2026-04-23T07:52:29.813628",
              "price": 118.5,
              "size": 50.0,
              "notional": 5925.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 46302,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "209",
              "timestamp": "2026-04-23T07:50:57.868506",
              "price": 118.7,
              "size": 500.0,
              "notional": 59350.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 46301,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "208",
              "timestamp": "2026-04-23T07:50:57.611453",
              "price": 118.7,
              "size": 500.0,
              "notional": 59350.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 46301,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "207",
              "timestamp": "2026-04-23T07:50:57.354024",
              "price": 118.7,
              "size": 250.0,
              "notional": 29675.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 46301,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "206",
              "timestamp": "2026-04-23T07:50:18.210253",
              "price": 118.6,
              "size": 50.0,
              "notional": 5930.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 46300,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "205",
              "timestamp": "2026-04-23T07:48:38.707637",
              "price": 118.6,
              "size": 50.0,
              "notional": 5930.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "204",
              "timestamp": "2026-04-23T07:48:31.796088",
              "price": 118.6,
              "size": 200.0,
              "notional": 23720.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 46299,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "203",
              "timestamp": "2026-04-23T07:48:31.538251",
              "price": 118.6,
              "size": 50.0,
              "notional": 5930.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 46298,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "202",
              "timestamp": "2026-04-23T07:43:13.690032",
              "price": 118.5,
              "size": 50.0,
              "notional": 5925.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "201",
              "timestamp": "2026-04-23T07:40:51.518014",
              "price": 118.5,
              "size": 250.0,
              "notional": 29625.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 46297,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "200",
              "timestamp": "2026-04-23T07:40:51.518014",
              "price": 118.5,
              "size": 50.0,
              "notional": 5925.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 46297,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "199",
              "timestamp": "2026-04-23T07:40:51.518014",
              "price": 118.5,
              "size": 100.0,
              "notional": 11850.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 46297,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "198",
              "timestamp": "2026-04-23T07:36:47.487626",
              "price": 118.5,
              "size": 50.0,
              "notional": 5925.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 46296,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "197",
              "timestamp": "2026-04-23T07:33:08.303654",
              "price": 118.5,
              "size": 50.0,
              "notional": 5925.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "196",
              "timestamp": "2026-04-23T07:33:08.303654",
              "price": 118.5,
              "size": 150.0,
              "notional": 17775.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "195",
              "timestamp": "2026-04-23T07:33:08.303654",
              "price": 118.5,
              "size": 50.0,
              "notional": 5925.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "194",
              "timestamp": "2026-04-23T07:33:08.303654",
              "price": 118.5,
              "size": 50.0,
              "notional": 5925.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 46295,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "193",
              "timestamp": "2026-04-23T07:30:02.571016",
              "price": 118.6,
              "size": 150.0,
              "notional": 17790.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "192",
              "timestamp": "2026-04-23T07:26:27.571947",
              "price": 118.6,
              "size": 200.0,
              "notional": 23720.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 46294,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "191",
              "timestamp": "2026-04-23T07:26:27.314692",
              "price": 118.6,
              "size": 500.0,
              "notional": 59300.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            }
          ],
          "peer_comparison": []
        },
        "6m": {
          "valid": true,
          "currency": "HKD",
          "n_trades": 78142,
          "n_runs": 28020,
          "n_trade_days": 126,
          "first_trade_date": "2025-10-08",
          "last_trade_date": "2026-04-23",
          "period_days": 126,
          "method": {
            "key": "persona_v4_l2_only",
            "name": "Trader persona v4 — L2-only",
            "version": "4.0",
            "unit_of_classification": "runs"
          },
          "thresholds": {
            "retail_max": 10000.0,
            "instit_min": 50000.0
          },
          "composition": {
            "retail_pct": 0.3203398940390571,
            "mixed_pct": 0.15672749609684933,
            "instit_pct": 0.36729287706994956,
            "ambiguous_pct": 0.155639732794144,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.155639732794144,
            "retail_qty_pct": 0.17413644135425377,
            "mixed_qty_pct": 0.19316777251843303,
            "instit_qty_pct": 0.4950360411288285,
            "ambiguous_qty_pct": 0.1376597449984847,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.1376597449984847,
            "retail_notional_pct": 0.1736432202319424,
            "mixed_notional_pct": 0.1930386091861404,
            "instit_notional_pct": 0.49580116313260586,
            "ambiguous_notional_pct": 0.13751700744931142,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.13751700744931142
          },
          "run_composition": {
            "retail_pct": 0.5012491077801571,
            "mixed_pct": 0.20770877944325483,
            "instit_pct": 0.1829764453961456,
            "ambiguous_pct": 0.10806566738044254,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.10806566738044254,
            "retail_notional_pct": 0.12923256627759958,
            "mixed_notional_pct": 0.16026289336224528,
            "instit_notional_pct": 0.6171984285867672,
            "unclear_notional_pct": 0.093306111773388
          },
          "counts": {
            "trades": {
              "retail": 25032,
              "mixed": 12247,
              "institutional": 28701,
              "ambiguous": 12162,
              "unobservable": 0,
              "unclear": 12162
            },
            "runs": {
              "retail": 14045,
              "mixed": 5820,
              "institutional": 5127,
              "ambiguous": 3028,
              "unobservable": 0,
              "unclear": 3028
            }
          },
          "confidence": {
            "high": 0.6841184867951463,
            "medium": 0.20781584582441112,
            "low": 0.10806566738044254,
            "na": 0.0
          },
          "confidence_counts": {
            "high": 19169,
            "medium": 5823,
            "low": 3028,
            "na": 0
          },
          "trade_confidence": {
            "high": 0.5057971385426531,
            "medium": 0.13973279414399425,
            "low": 0.3544700673133526,
            "na": 0.0
          },
          "trade_confidence_counts": {
            "high": 39524,
            "medium": 10919,
            "low": 27699,
            "na": 0
          },
          "observability": {
            "avg_feature_coverage": 0.8774928622412561,
            "observable_run_pct": 1.0,
            "ambiguous_run_pct": 0.10806566738044254,
            "unobservable_run_pct": 0.0
          },
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "dominant_share": 0.5012491077801571,
          "dominance_gap": 0.29354032833690225,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 41580,
              "UNOBSERVABLE": 21994,
              "WALK_BOOK": 14568
            },
            "d2_information": {
              "UNOBSERVABLE": 78142
            },
            "d3_urgency": {
              "UNOBSERVABLE": 28020
            },
            "participant_confidence": {
              "HIGH": 19169,
              "MEDIUM": 5823,
              "LOW": 3028
            }
          },
          "trade_size": {
            "avg": 17006.7218823424,
            "median": 6395.0
          },
          "run_size": {
            "avg": 33233.645304425416,
            "median": 12000.0,
            "avg_length": 1.2977159172019985
          },
          "recent_trades": [
            {
              "trade_id": "220",
              "timestamp": "2026-04-23T07:59:53.512894",
              "price": 118.6,
              "size": 50.0,
              "notional": 5930.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 46308,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "219",
              "timestamp": "2026-04-23T07:59:53.512264",
              "price": 118.6,
              "size": 50.0,
              "notional": 5930.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 46308,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "218",
              "timestamp": "2026-04-23T07:59:46.356535",
              "price": 118.6,
              "size": 50.0,
              "notional": 5930.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 46308,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "217",
              "timestamp": "2026-04-23T07:58:47.418746",
              "price": 118.7,
              "size": 50.0,
              "notional": 5935.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 46307,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "216",
              "timestamp": "2026-04-23T07:58:29.676792",
              "price": 118.7,
              "size": 50.0,
              "notional": 5935.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "215",
              "timestamp": "2026-04-23T07:58:01.075333",
              "price": 118.7,
              "size": 50.0,
              "notional": 5935.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 46306,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "214",
              "timestamp": "2026-04-23T07:57:04.588224",
              "price": 118.6,
              "size": 50.0,
              "notional": 5930.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 46305,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "213",
              "timestamp": "2026-04-23T07:53:50.804944",
              "price": 118.4,
              "size": 50.0,
              "notional": 5920.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "212",
              "timestamp": "2026-04-23T07:53:45.811172",
              "price": 118.4,
              "size": 50.0,
              "notional": 5920.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 46304,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "211",
              "timestamp": "2026-04-23T07:52:44.899531",
              "price": 118.5,
              "size": 50.0,
              "notional": 5925.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 46303,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "210",
              "timestamp": "2026-04-23T07:52:29.813628",
              "price": 118.5,
              "size": 50.0,
              "notional": 5925.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 46302,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "209",
              "timestamp": "2026-04-23T07:50:57.868506",
              "price": 118.7,
              "size": 500.0,
              "notional": 59350.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 46301,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "208",
              "timestamp": "2026-04-23T07:50:57.611453",
              "price": 118.7,
              "size": 500.0,
              "notional": 59350.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 46301,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "207",
              "timestamp": "2026-04-23T07:50:57.354024",
              "price": 118.7,
              "size": 250.0,
              "notional": 29675.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 46301,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "206",
              "timestamp": "2026-04-23T07:50:18.210253",
              "price": 118.6,
              "size": 50.0,
              "notional": 5930.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 46300,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "205",
              "timestamp": "2026-04-23T07:48:38.707637",
              "price": 118.6,
              "size": 50.0,
              "notional": 5930.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "204",
              "timestamp": "2026-04-23T07:48:31.796088",
              "price": 118.6,
              "size": 200.0,
              "notional": 23720.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 46299,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "203",
              "timestamp": "2026-04-23T07:48:31.538251",
              "price": 118.6,
              "size": 50.0,
              "notional": 5930.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 46298,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "202",
              "timestamp": "2026-04-23T07:43:13.690032",
              "price": 118.5,
              "size": 50.0,
              "notional": 5925.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "201",
              "timestamp": "2026-04-23T07:40:51.518014",
              "price": 118.5,
              "size": 250.0,
              "notional": 29625.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 46297,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "200",
              "timestamp": "2026-04-23T07:40:51.518014",
              "price": 118.5,
              "size": 50.0,
              "notional": 5925.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 46297,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "199",
              "timestamp": "2026-04-23T07:40:51.518014",
              "price": 118.5,
              "size": 100.0,
              "notional": 11850.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 46297,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "198",
              "timestamp": "2026-04-23T07:36:47.487626",
              "price": 118.5,
              "size": 50.0,
              "notional": 5925.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 46296,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "197",
              "timestamp": "2026-04-23T07:33:08.303654",
              "price": 118.5,
              "size": 50.0,
              "notional": 5925.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "196",
              "timestamp": "2026-04-23T07:33:08.303654",
              "price": 118.5,
              "size": 150.0,
              "notional": 17775.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "195",
              "timestamp": "2026-04-23T07:33:08.303654",
              "price": 118.5,
              "size": 50.0,
              "notional": 5925.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "194",
              "timestamp": "2026-04-23T07:33:08.303654",
              "price": 118.5,
              "size": 50.0,
              "notional": 5925.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 46295,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "193",
              "timestamp": "2026-04-23T07:30:02.571016",
              "price": 118.6,
              "size": 150.0,
              "notional": 17790.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "192",
              "timestamp": "2026-04-23T07:26:27.571947",
              "price": 118.6,
              "size": 200.0,
              "notional": 23720.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 46294,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "191",
              "timestamp": "2026-04-23T07:26:27.314692",
              "price": 118.6,
              "size": 500.0,
              "notional": 59300.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            }
          ],
          "peer_comparison": []
        }
      },
      "valid": true,
      "currency": "HKD",
      "n_trades": 78142,
      "n_runs": 28020,
      "n_trade_days": 126,
      "first_trade_date": "2025-10-08",
      "last_trade_date": "2026-04-23",
      "period_days": 126,
      "method": {
        "key": "persona_v4_l2_only",
        "name": "Trader persona v4 — L2-only",
        "version": "4.0",
        "unit_of_classification": "runs"
      },
      "thresholds": {
        "retail_max": 10000.0,
        "instit_min": 50000.0
      },
      "composition": {
        "retail_pct": 0.3203398940390571,
        "mixed_pct": 0.15672749609684933,
        "instit_pct": 0.36729287706994956,
        "ambiguous_pct": 0.155639732794144,
        "unobservable_pct": 0.0,
        "unclear_pct": 0.155639732794144,
        "retail_qty_pct": 0.17413644135425377,
        "mixed_qty_pct": 0.19316777251843303,
        "instit_qty_pct": 0.4950360411288285,
        "ambiguous_qty_pct": 0.1376597449984847,
        "unobservable_qty_pct": 0.0,
        "unclear_qty_pct": 0.1376597449984847,
        "retail_notional_pct": 0.1736432202319424,
        "mixed_notional_pct": 0.1930386091861404,
        "instit_notional_pct": 0.49580116313260586,
        "ambiguous_notional_pct": 0.13751700744931142,
        "unobservable_notional_pct": 0.0,
        "unclear_notional_pct": 0.13751700744931142
      },
      "run_composition": {
        "retail_pct": 0.5012491077801571,
        "mixed_pct": 0.20770877944325483,
        "instit_pct": 0.1829764453961456,
        "ambiguous_pct": 0.10806566738044254,
        "unobservable_pct": 0.0,
        "unclear_pct": 0.10806566738044254
      },
      "trade_size": {
        "avg": 17006.7218823424,
        "median": 6395.0
      },
      "run_size": {
        "avg": 33233.645304425416,
        "median": 12000.0,
        "avg_length": 1.2977159172019985
      },
      "confidence": {
        "high": 0.6841184867951463,
        "medium": 0.20781584582441112,
        "low": 0.10806566738044254,
        "na": 0.0
      },
      "confidence_counts": {
        "high": 19169,
        "medium": 5823,
        "low": 3028,
        "na": 0
      },
      "trade_confidence": {
        "high": 0.5057971385426531,
        "medium": 0.13973279414399425,
        "low": 0.3544700673133526,
        "na": 0.0
      },
      "trade_confidence_counts": {
        "high": 39524,
        "medium": 10919,
        "low": 27699,
        "na": 0
      },
      "counts": {
        "trades": {
          "retail": 25032,
          "mixed": 12247,
          "institutional": 28701,
          "ambiguous": 12162,
          "unobservable": 0,
          "unclear": 12162
        },
        "runs": {
          "retail": 14045,
          "mixed": 5820,
          "institutional": 5127,
          "ambiguous": 3028,
          "unobservable": 0,
          "unclear": 3028
        }
      },
      "observability": {
        "avg_feature_coverage": 0.8774928622412561,
        "observable_run_pct": 1.0,
        "ambiguous_run_pct": 0.10806566738044254,
        "unobservable_run_pct": 0.0
      },
      "dominant_bucket": "RETAIL",
      "dominant_label": "Retail-led",
      "dominant_share": 0.5012491077801571,
      "dominance_gap": 0.29354032833690225,
      "over_time": {
        "valid": true,
        "periods": [
          {
            "month": "2025-11",
            "n_trades": 13931,
            "n_runs": 5039,
            "retail_pct": 0.3310602253965975,
            "mixed_pct": 0.15576771229631756,
            "instit_pct": 0.3593424736199842,
            "ambiguous_pct": 0.1538295886871007,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.1538295886871007,
            "avg_trade_size": 15845.869488909628,
            "avg_run_notional": 30488.555616193687,
            "retail_qty_pct": 0.17388774607717458,
            "mixed_qty_pct": 0.20267815440876885,
            "instit_qty_pct": 0.48438372636118815,
            "ambiguous_qty_pct": 0.13905037315286845,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.13905037315286845,
            "retail_notional_pct": 0.17389132436938776,
            "mixed_notional_pct": 0.20269076982016415,
            "instit_notional_pct": 0.4844407226546207,
            "ambiguous_notional_pct": 0.1389771831558274,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.1389771831558274,
            "run_retail_pct": 0.5048620758086922,
            "run_mixed_pct": 0.20817622544155587,
            "run_instit_pct": 0.1746378249652709,
            "run_ambiguous_pct": 0.11232387378448105,
            "run_unobservable_pct": 0.0,
            "run_unclear_pct": 0.11232387378448105,
            "avg_feature_coverage": 0.8768803333994839,
            "high_confidence_pct": 0.679499900773963,
            "medium_confidence_pct": 0.20817622544155587,
            "low_confidence_pct": 0.11232387378448105,
            "na_confidence_pct": 0.0,
            "total_quantity": null
          },
          {
            "month": "2025-12",
            "n_trades": 9038,
            "n_runs": 3506,
            "retail_pct": 0.3425536623146714,
            "mixed_pct": 0.17603452091170613,
            "instit_pct": 0.3426643062624474,
            "ambiguous_pct": 0.13874751051117504,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.13874751051117504,
            "avg_trade_size": 15656.106052223944,
            "avg_run_notional": 28348.424443810614,
            "retail_qty_pct": 0.1733986740931535,
            "mixed_qty_pct": 0.19332771587663272,
            "instit_qty_pct": 0.4888903927460533,
            "ambiguous_qty_pct": 0.1443832172841605,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.1443832172841605,
            "retail_notional_pct": 0.1730004666823531,
            "mixed_notional_pct": 0.19344277636576054,
            "instit_notional_pct": 0.48943550566028193,
            "ambiguous_notional_pct": 0.14412125129160439,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.14412125129160439,
            "run_retail_pct": 0.5382201939532231,
            "run_mixed_pct": 0.2076440387906446,
            "run_instit_pct": 0.15944095835710212,
            "run_ambiguous_pct": 0.09469480889903023,
            "run_unobservable_pct": 0.0,
            "run_unclear_pct": 0.09469480889903023,
            "avg_feature_coverage": 0.8790929834569308,
            "high_confidence_pct": 0.6976611523103251,
            "medium_confidence_pct": 0.2076440387906446,
            "low_confidence_pct": 0.09469480889903023,
            "na_confidence_pct": 0.0,
            "total_quantity": null
          },
          {
            "month": "2026-01",
            "n_trades": 15782,
            "n_runs": 4931,
            "retail_pct": 0.28171334431630973,
            "mixed_pct": 0.14763654796603726,
            "instit_pct": 0.39830186288176406,
            "ambiguous_pct": 0.17234824483588898,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.17234824483588898,
            "avg_trade_size": 16462.923878469144,
            "avg_run_notional": 37021.43353275198,
            "retail_qty_pct": 0.15886022314439022,
            "mixed_qty_pct": 0.18258214008846732,
            "instit_qty_pct": 0.5085754974387037,
            "ambiguous_qty_pct": 0.14998213932843876,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.14998213932843876,
            "retail_notional_pct": 0.15881329986906273,
            "mixed_notional_pct": 0.1826820363716664,
            "instit_notional_pct": 0.5086887415460867,
            "ambiguous_notional_pct": 0.14981592221318413,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.14981592221318413,
            "run_retail_pct": 0.4788075441087001,
            "run_mixed_pct": 0.21314135063881565,
            "run_instit_pct": 0.1948894747515717,
            "run_ambiguous_pct": 0.11316163050091259,
            "run_unobservable_pct": 0.0,
            "run_unclear_pct": 0.11316163050091259,
            "avg_feature_coverage": 0.8793652403163658,
            "high_confidence_pct": 0.6736970188602718,
            "medium_confidence_pct": 0.21314135063881565,
            "low_confidence_pct": 0.11316163050091259,
            "na_confidence_pct": 0.0,
            "total_quantity": null
          },
          {
            "month": "2026-02",
            "n_trades": 9727,
            "n_runs": 3272,
            "retail_pct": 0.3054384702374833,
            "mixed_pct": 0.15256502518762208,
            "instit_pct": 0.396113909735787,
            "ambiguous_pct": 0.14588259483910765,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.14588259483910765,
            "avg_trade_size": 19849.76744114321,
            "avg_run_notional": 38406.21491442543,
            "retail_qty_pct": 0.16078242187920969,
            "mixed_qty_pct": 0.22985037347991488,
            "instit_qty_pct": 0.48879179897316005,
            "ambiguous_qty_pct": 0.1205754056677154,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.1205754056677154,
            "retail_notional_pct": 0.16127841368037388,
            "mixed_notional_pct": 0.22973344019705244,
            "instit_notional_pct": 0.4888323565202765,
            "ambiguous_notional_pct": 0.12015578960229716,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.12015578960229716,
            "run_retail_pct": 0.49602689486552565,
            "run_mixed_pct": 0.19559902200489,
            "run_instit_pct": 0.20507334963325183,
            "run_ambiguous_pct": 0.10330073349633252,
            "run_unobservable_pct": 0.0,
            "run_unclear_pct": 0.10330073349633252,
            "avg_feature_coverage": 0.8780103911980438,
            "high_confidence_pct": 0.7004889975550123,
            "medium_confidence_pct": 0.19621026894865526,
            "low_confidence_pct": 0.10330073349633252,
            "na_confidence_pct": 0.0,
            "total_quantity": null
          },
          {
            "month": "2026-03",
            "n_trades": 12719,
            "n_runs": 5010,
            "retail_pct": 0.3530937966821291,
            "mixed_pct": 0.16101894803050554,
            "instit_pct": 0.3391776083025395,
            "ambiguous_pct": 0.14670964698482586,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.14670964698482586,
            "avg_trade_size": 15392.532614985454,
            "avg_run_notional": 27543.236373253498,
            "retail_qty_pct": 0.24319489785232637,
            "mixed_qty_pct": 0.17902990443148342,
            "instit_qty_pct": 0.4469808726375363,
            "ambiguous_qty_pct": 0.13079432507865393,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.13079432507865393,
            "retail_notional_pct": 0.24253682961765083,
            "mixed_notional_pct": 0.17885767527085894,
            "instit_notional_pct": 0.4478677085586608,
            "ambiguous_notional_pct": 0.13073778655282947,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.13073778655282947,
            "run_retail_pct": 0.4994011976047904,
            "run_mixed_pct": 0.21397205588822354,
            "run_instit_pct": 0.18423153692614772,
            "run_ambiguous_pct": 0.10239520958083832,
            "run_unobservable_pct": 0.0,
            "run_unclear_pct": 0.10239520958083832,
            "avg_feature_coverage": 0.87500998003992,
            "high_confidence_pct": 0.6834331337325349,
            "medium_confidence_pct": 0.21417165668662674,
            "low_confidence_pct": 0.10239520958083832,
            "na_confidence_pct": 0.0,
            "total_quantity": null
          },
          {
            "month": "2026-04",
            "n_trades": 9281,
            "n_runs": 3545,
            "retail_pct": 0.33067557375282836,
            "mixed_pct": 0.14804439176812845,
            "instit_pct": 0.34953130050641096,
            "ambiguous_pct": 0.17174873397263227,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.17174873397263227,
            "avg_trade_size": 18781.601012821895,
            "avg_run_notional": 36386.84459802539,
            "retail_qty_pct": 0.16336749037559392,
            "mixed_qty_pct": 0.1587410976330472,
            "instit_qty_pct": 0.5324545324024454,
            "ambiguous_qty_pct": 0.1454368795889135,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.1454368795889135,
            "retail_notional_pct": 0.16291792100487104,
            "mixed_notional_pct": 0.1581361124460256,
            "instit_notional_pct": 0.5343641428002571,
            "ambiguous_notional_pct": 0.14458182374884618,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.14458182374884618,
            "run_retail_pct": 0.5102961918194641,
            "run_mixed_pct": 0.19943582510578278,
            "run_instit_pct": 0.17433004231311708,
            "run_ambiguous_pct": 0.1159379407616361,
            "run_unobservable_pct": 0.0,
            "run_unclear_pct": 0.1159379407616361,
            "avg_feature_coverage": 0.877545839210155,
            "high_confidence_pct": 0.6846262341325811,
            "medium_confidence_pct": 0.19943582510578278,
            "low_confidence_pct": 0.1159379407616361,
            "na_confidence_pct": 0.0,
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
          "trade_id": "220",
          "timestamp": "2026-04-23T07:59:53.512894",
          "price": 118.6,
          "size": 50.0,
          "notional": 5930.0,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 46308,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "219",
          "timestamp": "2026-04-23T07:59:53.512264",
          "price": 118.6,
          "size": 50.0,
          "notional": 5930.0,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 46308,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "218",
          "timestamp": "2026-04-23T07:59:46.356535",
          "price": 118.6,
          "size": 50.0,
          "notional": 5930.0,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 46308,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "217",
          "timestamp": "2026-04-23T07:58:47.418746",
          "price": 118.7,
          "size": 50.0,
          "notional": 5935.0,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 46307,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "216",
          "timestamp": "2026-04-23T07:58:29.676792",
          "price": 118.7,
          "size": 50.0,
          "notional": 5935.0,
          "bucket": "RETAIL",
          "confidence": "LOW",
          "run_id": null,
          "d1": "UNOBSERVABLE",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "215",
          "timestamp": "2026-04-23T07:58:01.075333",
          "price": 118.7,
          "size": 50.0,
          "notional": 5935.0,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 46306,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "214",
          "timestamp": "2026-04-23T07:57:04.588224",
          "price": 118.6,
          "size": 50.0,
          "notional": 5930.0,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 46305,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "213",
          "timestamp": "2026-04-23T07:53:50.804944",
          "price": 118.4,
          "size": 50.0,
          "notional": 5920.0,
          "bucket": "RETAIL",
          "confidence": "LOW",
          "run_id": null,
          "d1": "UNOBSERVABLE",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "212",
          "timestamp": "2026-04-23T07:53:45.811172",
          "price": 118.4,
          "size": 50.0,
          "notional": 5920.0,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 46304,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "211",
          "timestamp": "2026-04-23T07:52:44.899531",
          "price": 118.5,
          "size": 50.0,
          "notional": 5925.0,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 46303,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "210",
          "timestamp": "2026-04-23T07:52:29.813628",
          "price": 118.5,
          "size": 50.0,
          "notional": 5925.0,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 46302,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "209",
          "timestamp": "2026-04-23T07:50:57.868506",
          "price": 118.7,
          "size": 500.0,
          "notional": 59350.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 46301,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "208",
          "timestamp": "2026-04-23T07:50:57.611453",
          "price": 118.7,
          "size": 500.0,
          "notional": 59350.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 46301,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "207",
          "timestamp": "2026-04-23T07:50:57.354024",
          "price": 118.7,
          "size": 250.0,
          "notional": 29675.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 46301,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "206",
          "timestamp": "2026-04-23T07:50:18.210253",
          "price": 118.6,
          "size": 50.0,
          "notional": 5930.0,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 46300,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "205",
          "timestamp": "2026-04-23T07:48:38.707637",
          "price": 118.6,
          "size": 50.0,
          "notional": 5930.0,
          "bucket": "RETAIL",
          "confidence": "LOW",
          "run_id": null,
          "d1": "UNOBSERVABLE",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "204",
          "timestamp": "2026-04-23T07:48:31.796088",
          "price": 118.6,
          "size": 200.0,
          "notional": 23720.0,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 46299,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "203",
          "timestamp": "2026-04-23T07:48:31.538251",
          "price": 118.6,
          "size": 50.0,
          "notional": 5930.0,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 46298,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "202",
          "timestamp": "2026-04-23T07:43:13.690032",
          "price": 118.5,
          "size": 50.0,
          "notional": 5925.0,
          "bucket": "RETAIL",
          "confidence": "LOW",
          "run_id": null,
          "d1": "UNOBSERVABLE",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "201",
          "timestamp": "2026-04-23T07:40:51.518014",
          "price": 118.5,
          "size": 250.0,
          "notional": 29625.0,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 46297,
          "d1": "WALK_BOOK",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "200",
          "timestamp": "2026-04-23T07:40:51.518014",
          "price": 118.5,
          "size": 50.0,
          "notional": 5925.0,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 46297,
          "d1": "WALK_BOOK",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "199",
          "timestamp": "2026-04-23T07:40:51.518014",
          "price": 118.5,
          "size": 100.0,
          "notional": 11850.0,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 46297,
          "d1": "WALK_BOOK",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "198",
          "timestamp": "2026-04-23T07:36:47.487626",
          "price": 118.5,
          "size": 50.0,
          "notional": 5925.0,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 46296,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "197",
          "timestamp": "2026-04-23T07:33:08.303654",
          "price": 118.5,
          "size": 50.0,
          "notional": 5925.0,
          "bucket": "AMBIGUOUS",
          "confidence": "LOW",
          "run_id": null,
          "d1": "UNOBSERVABLE",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "196",
          "timestamp": "2026-04-23T07:33:08.303654",
          "price": 118.5,
          "size": 150.0,
          "notional": 17775.0,
          "bucket": "AMBIGUOUS",
          "confidence": "LOW",
          "run_id": null,
          "d1": "UNOBSERVABLE",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "195",
          "timestamp": "2026-04-23T07:33:08.303654",
          "price": 118.5,
          "size": 50.0,
          "notional": 5925.0,
          "bucket": "AMBIGUOUS",
          "confidence": "LOW",
          "run_id": null,
          "d1": "UNOBSERVABLE",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "194",
          "timestamp": "2026-04-23T07:33:08.303654",
          "price": 118.5,
          "size": 50.0,
          "notional": 5925.0,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 46295,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "193",
          "timestamp": "2026-04-23T07:30:02.571016",
          "price": 118.6,
          "size": 150.0,
          "notional": 17790.0,
          "bucket": "RETAIL",
          "confidence": "LOW",
          "run_id": null,
          "d1": "UNOBSERVABLE",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "192",
          "timestamp": "2026-04-23T07:26:27.571947",
          "price": 118.6,
          "size": 200.0,
          "notional": 23720.0,
          "bucket": "AMBIGUOUS",
          "confidence": "LOW",
          "run_id": 46294,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "191",
          "timestamp": "2026-04-23T07:26:27.314692",
          "price": 118.6,
          "size": 500.0,
          "notional": 59300.0,
          "bucket": "AMBIGUOUS",
          "confidence": "LOW",
          "run_id": null,
          "d1": "UNOBSERVABLE",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
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
      "total_trades": 78141,
      "price_moving_trades": 22132,
      "pct_price_moving": 28.32315941695141,
      "all_movers": {
        "count": 22132,
        "avg_size": 18616.463488613772,
        "median_size": 6310.0,
        "retail_count": 9442,
        "mixed_count": 4366,
        "institutional_count": 5938,
        "ambiguous_count": 2386,
        "unobservable_count": 0,
        "retail_pct": 42.66220856678113,
        "mixed_pct": 19.727091993493584,
        "instit_pct": 26.829929513826134,
        "unclear_pct": 10.78076992589915
      },
      "positive_movers": {
        "count": 11125,
        "avg_size": 18135.480071910115,
        "median_size": 6360.0,
        "retail_count": 4452,
        "mixed_count": 2398,
        "institutional_count": 3030,
        "ambiguous_count": 1245,
        "unobservable_count": 0,
        "retail_pct": 40.01797752808989,
        "mixed_pct": 21.55505617977528,
        "instit_pct": 27.235955056179773,
        "unclear_pct": 11.191011235955056
      },
      "negative_movers": {
        "count": 11007,
        "avg_size": 19102.60326428636,
        "median_size": 6285.0,
        "retail_count": 4990,
        "mixed_count": 1968,
        "institutional_count": 2908,
        "ambiguous_count": 1141,
        "unobservable_count": 0,
        "retail_pct": 45.3347869537567,
        "mixed_pct": 17.879531207413464,
        "instit_pct": 26.419551194694286,
        "unclear_pct": 10.36613064413555
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
          "opening": 0.012259774765480336,
          "continuous": 0.6252046020765353,
          "closing": 0.011789320759226663,
          "auctions": 0.024049095524707,
          "other": 0.35074630239875776
        },
        "1M": {
          "opening": 0.0021643416065105364,
          "continuous": 0.8169124115916157,
          "closing": 0.033003095247539284,
          "auctions": 0.03516743685404982,
          "other": 0.1479201515543347
        },
        "3M": {
          "opening": 0.004349475262956534,
          "continuous": 0.8468150301314391,
          "closing": 0.07138774263667078,
          "auctions": 0.07573721789962731,
          "other": 0.07744775196893353
        },
        "6M": {
          "opening": 0.005138198329632533,
          "continuous": 0.872314116711082,
          "closing": 0.061159137259885366,
          "auctions": 0.06629733558951789,
          "other": 0.06138854769940014
        }
      },
      "hhi": {
        "1D": 0.22279954074768524,
        "1M": 0.1914567488944466,
        "3M": 0.20517164673134267,
        "6M": 0.1962671355131676
      },
      "profile_buckets": [
        {
          "time": "09:00",
          "avg_share": 0.0078
        },
        {
          "time": "09:30",
          "avg_share": 0.1331
        },
        {
          "time": "10:00",
          "avg_share": 0.0483
        },
        {
          "time": "10:30",
          "avg_share": 0.0487
        },
        {
          "time": "11:00",
          "avg_share": 0.0317
        },
        {
          "time": "11:30",
          "avg_share": 0.0332
        },
        {
          "time": "12:00",
          "avg_share": 0.0323
        },
        {
          "time": "13:00",
          "avg_share": 0.081
        },
        {
          "time": "13:30",
          "avg_share": 0.055
        },
        {
          "time": "14:00",
          "avg_share": 0.0529
        },
        {
          "time": "14:30",
          "avg_share": 0.0853
        },
        {
          "time": "15:00",
          "avg_share": 0.1076
        },
        {
          "time": "15:30",
          "avg_share": 0.252
        },
        {
          "time": "16:00",
          "avg_share": 0.0309
        }
      ],
      "peers_hhi_rows": [
        {
          "ticker": "2378",
          "auctions_pct": 4.878547172471041,
          "hhi": 0.2021523073653817,
          "interp": {
            "text": "Moderate",
            "cls": "bg-amber-500/20 text-amber-400",
            "you": true
          }
        },
        {
          "ticker": "1828",
          "auctions_pct": 8.194474309631806,
          "hhi": 0.16820245252528016,
          "interp": {
            "text": "Moderate",
            "cls": "bg-amber-500/20 text-amber-400"
          }
        },
        {
          "ticker": "376",
          "auctions_pct": 1.2604025852718275,
          "hhi": 0.15201935919702403,
          "interp": {
            "text": "Moderate",
            "cls": "bg-amber-500/20 text-amber-400"
          }
        },
        {
          "ticker": "945",
          "auctions_pct": 3.0360825484162595,
          "hhi": 0.2142575264255842,
          "interp": {
            "text": "Moderate",
            "cls": "bg-amber-500/20 text-amber-400"
          }
        },
        {
          "ticker": "82318",
          "auctions_pct": 0.22312901887074918,
          "hhi": 0.2311928832521315,
          "interp": {
            "text": "Moderate",
            "cls": "bg-amber-500/20 text-amber-400"
          }
        },
        {
          "ticker": "1508",
          "auctions_pct": 4.1455024090072135,
          "hhi": 0.14912683132574447,
          "interp": {
            "text": "Spread out",
            "cls": "bg-emerald-500/20 text-emerald-400"
          }
        },
        {
          "ticker": "6963",
          "auctions_pct": 4.209241243399546,
          "hhi": 0.1433735269550682,
          "interp": {
            "text": "Spread out",
            "cls": "bg-emerald-500/20 text-emerald-400"
          }
        },
        {
          "ticker": "81299",
          "auctions_pct": 3.6024979091827705,
          "hhi": 0.6024888070298587,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "6060",
          "auctions_pct": 4.094633988654114,
          "hhi": 0.1233597350072018,
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
