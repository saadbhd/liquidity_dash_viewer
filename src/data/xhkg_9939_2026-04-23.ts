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
      "ticker": "9939",
      "name": "KINTOR PHARMA-B",
      "marketCap": 1336409068.0,
      "sector": "Pharmaceuticals",
      "industry": "Healthcare - Pharmaceuticals & Biotechnology"
    },
    {
      "ticker": "1763",
      "name": "CIRC",
      "marketCap": 1503413440.0,
      "sector": "Pharmaceuticals",
      "industry": "Healthcare - Pharmaceuticals & Biotechnology"
    },
    {
      "ticker": "719",
      "name": "SHANDONG XINHUA",
      "marketCap": 1236300000.0,
      "sector": "Pharmaceuticals",
      "industry": "Healthcare - Pharmaceuticals & Biotechnology"
    },
    {
      "ticker": "2511",
      "name": "HIGHTIDE-B",
      "marketCap": 2188177308.44,
      "sector": "Pharmaceuticals",
      "industry": "Healthcare - Pharmaceuticals & Biotechnology"
    },
    {
      "ticker": "6996",
      "name": "ANTENGENE-B",
      "marketCap": 3966785730.88,
      "sector": "Pharmaceuticals",
      "industry": "Healthcare - Pharmaceuticals & Biotechnology"
    },
    {
      "ticker": "6660",
      "name": "AIM VACCINE",
      "marketCap": 1208263432.1799998,
      "sector": "Pharmaceuticals",
      "industry": "Healthcare - Pharmaceuticals & Biotechnology"
    },
    {
      "ticker": "6896",
      "name": "GOLDEN THROAT",
      "marketCap": 2631915120.0,
      "sector": "Pharmaceuticals",
      "industry": "Healthcare - Pharmaceuticals & Biotechnology"
    },
    {
      "ticker": "3880",
      "name": "MEDTIDE",
      "marketCap": 3130943999.9999995,
      "sector": "Pharmaceuticals",
      "industry": "Healthcare - Pharmaceuticals & Biotechnology"
    },
    {
      "ticker": "9989",
      "name": "HEPALINK",
      "marketCap": 1093869665.0,
      "sector": "Pharmaceuticals",
      "industry": "Healthcare - Pharmaceuticals & Biotechnology"
    }
  ]
};

export const REPORT_DATA: ReportData = {
  "meta": {
    "market": "XHKG",
    "currency": "HKD",
    "ticker": "9939",
    "company": "KINTOR PHARMA-B",
    "asof_date": "2026-04-23",
    "industry": "Healthcare - Pharmaceuticals & Biotechnology",
    "sector": "Pharmaceuticals",
    "market_cap_display": "1.3B",
    "market_cap_category": "mid",
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
          "score_pca": 62.11590820692338,
          "score_pca_percentile": 62.11590820692338,
          "rank_pca": 975,
          "total": 2571,
          "adv_notional_sgd": 1755525.0,
          "adv_volume_shares": 657500.0,
          "free_float_shares": 392967590.0,
          "turnover_ratio": 0.0016731659727968915,
          "votes": 90.0,
          "trades": 90.0,
          "spread_pct": 0.008449944565966495,
          "spread_ticks": 2.2620320855614975,
          "amihud": 2.1254857000510707e-09,
          "volatility": 0.1428283427504612
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
          "peer_median_adv": 2551660.0,
          "peer_median_score_pca": 65.01361338000777,
          "peer_median_trades": 167.5,
          "peer_median_volatility": 0.2593536341412385,
          "peer_median_spread_pct": 0.008202367944616866,
          "peer_median_spread_ticks": 2.594211027891248,
          "peer_median_amihud": 7.596786706148192e-09,
          "peer_median_turnover_ratio": 0.0026994340900879424,
          "target_vs_peer": {
            "score_pca_delta": -2.9,
            "adv_delta_pct": -31.2,
            "trades_delta_pct": -46.27,
            "volatility_delta_pct": 44.93,
            "spread_pct_delta_pct": -3.02,
            "spread_ticks_delta_pct": -12.8,
            "amihud_delta_pct": 72.02,
            "turnover_ratio_delta_pct": -38.02
          }
        },
        "peer_liquidity": [
          {
            "ticker": "9939",
            "score_pca": 62.11590820692338,
            "rank_pca": 975,
            "adv": 1755525.0,
            "trades": 90.0,
            "volatility": 0.1428283427504612,
            "spread_pct": 0.008449944565966495,
            "spread_ticks": 2.2620320855614975,
            "amihud": 2.1254857000510707e-09,
            "turnover_ratio": 0.0016731659727968915,
            "is_target": true
          },
          {
            "ticker": "1763",
            "score_pca": 60.248930377285106,
            "rank_pca": 1023,
            "adv": 1239024.0,
            "trades": 73.0,
            "volatility": 0.18960243392402343,
            "spread_pct": 0.008510075230542058,
            "spread_ticks": null,
            "amihud": 6.010221360230537e-09,
            "turnover_ratio": 0.0012239044764674873,
            "is_target": false
          },
          {
            "ticker": "719",
            "score_pca": 62.93271100739012,
            "rank_pca": 954,
            "adv": 1851354.0,
            "trades": 93.0,
            "volatility": 0.15157097577464332,
            "spread_pct": 0.002238125999068668,
            "spread_ticks": 1.4123159303882196,
            "amihud": 2.555892173370545e-09,
            "turnover_ratio": 0.0016845397830422995,
            "is_target": false
          },
          {
            "ticker": "2511",
            "score_pca": 70.4784130688448,
            "rank_pca": 760,
            "adv": 4153700.0,
            "trades": 226.0,
            "volatility": 0.6418044295479651,
            "spread_pct": 0.013539279317450845,
            "spread_ticks": 5.039426523297491,
            "amihud": 1.1314584354657913e-08,
            "turnover_ratio": 0.004354844117742525,
            "is_target": false
          },
          {
            "ticker": "6996",
            "score_pca": 85.10307273434461,
            "rank_pca": 384,
            "adv": 16490040.000000002,
            "trades": 1213.0,
            "volatility": 0.8711773998800473,
            "spread_pct": 0.0035478478910584118,
            "spread_ticks": 1.9488388969521044,
            "amihud": 4.984328771908236e-09,
            "turnover_ratio": 0.007877505544148202,
            "is_target": false
          },
          {
            "ticker": "6660",
            "score_pca": 71.72306495527032,
            "rank_pca": 728,
            "adv": 3359888.0,
            "trades": 354.0,
            "volatility": 0.6152853204781146,
            "spread_pct": 0.010656770984664596,
            "spread_ticks": 2.4619450317124736,
            "amihud": 1.1254876963285724e-08,
            "turnover_ratio": 0.004071189397177693,
            "is_target": false
          },
          {
            "ticker": "6896",
            "score_pca": 63.788409179307656,
            "rank_pca": 932,
            "adv": 2887270.0,
            "trades": 115.0,
            "volatility": 0.26631937205831147,
            "spread_pct": 0.008905233176500273,
            "spread_ticks": 3.1939655172413794,
            "amihud": 1.9457749112794405e-09,
            "turnover_ratio": 0.0010908938431114755,
            "is_target": false
          },
          {
            "ticker": "3880",
            "score_pca": 65.46091015169195,
            "rank_pca": 889,
            "adv": 2216050.0,
            "trades": 136.0,
            "volatility": 0.2523878962241656,
            "spread_pct": 0.007894660658691675,
            "spread_ticks": null,
            "amihud": 9.401111587434065e-09,
            "turnover_ratio": 0.0037069351331558225,
            "is_target": false
          },
          {
            "ticker": "9989",
            "score_pca": 64.5663166083236,
            "rank_pca": 912,
            "adv": 1533700.0,
            "trades": 199.0,
            "volatility": 0.15439387734152651,
            "spread_pct": 0.005522241870648373,
            "spread_ticks": 2.726477024070022,
            "amihud": 9.183352052065848e-09,
            "turnover_ratio": 0.0016919330470200626,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Pharmaceuticals",
          "sector_count": 53,
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
              "mean": 0.39898295482961066,
              "median": 0.3030059514991381,
              "min": 0.0,
              "max": 2.1762687534321334,
              "p5": 0.0,
              "p95": 0.9797588332410063,
              "count": 53
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 132017043.91754717,
              "median": 4153700.0,
              "min": 0.0,
              "max": 2490354092.52,
              "p5": 8838.0,
              "p95": 504995766.39199996,
              "count": 53
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.022767674746013017,
              "median": 0.007894660658691675,
              "min": 0.0008042550431441883,
              "max": 0.16955250730829774,
              "p5": 0.0012929211428059438,
              "p95": 0.1084069991633016,
              "count": 53
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.006375954227428847,
              "median": 0.004071189397177693,
              "min": 0.0,
              "max": 0.060803930539425295,
              "p5": 4.816008345106063e-05,
              "p95": 0.018785138754186276,
              "count": 53
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.943242392851951e-07,
              "median": 5.453108707541503e-10,
              "min": 0.0,
              "max": 6.152331733727061e-06,
              "p5": 0.0,
              "p95": 6.965913993736149e-07,
              "count": 52
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 2727.867924528302,
              "median": 289.0,
              "min": 0.0,
              "max": 48857.0,
              "p5": 2.6,
              "p95": 10412.199999999997,
              "count": 53
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 4216378.25,
              "median": 2551660.0,
              "min": 1239024.0,
              "max": 16490040.000000002,
              "p5": 1342160.6,
              "p95": 12172320.999999994,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 301.125,
              "median": 167.5,
              "min": 73.0,
              "max": 1213.0,
              "p5": 80.0,
              "p95": 912.3499999999996,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.3928177131535997,
              "median": 0.2593536341412385,
              "min": 0.15157097577464332,
              "max": 0.8711773998800473,
              "p5": 0.15255899132305245,
              "p95": 0.7908968602638184,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.007601779391078113,
              "median": 0.008202367944616866,
              "min": 0.002238125999068668,
              "max": 0.013539279317450845,
              "p5": 0.0026965286612650784,
              "p95": 0.012530401400975655,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 7.081267771779038e-09,
              "median": 7.596786706148192e-09,
              "min": 1.9457749112794405e-09,
              "max": 1.1314584354657913e-08,
              "p5": 2.159315953011327e-09,
              "p95": 1.1293686767677647e-08,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.003212718167733196,
              "median": 0.0026994340900879424,
              "min": 0.0010908938431114755,
              "max": 0.007877505544148202,
              "p5": 0.0011374475647860796,
              "p95": 0.006644574044906213,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 2.7971614872769486,
              "median": 2.594211027891248,
              "min": 1.4123159303882196,
              "max": 5.039426523297491,
              "p5": 1.5464466720291907,
              "p95": 4.578061271783463,
              "count": 6
            }
          },
          "returns": {
            "window_days": 1,
            "n_obs": 1,
            "stock": -0.003731343283582156,
            "market": -0.003281577241697975,
            "sector": -0.012820512820512886,
            "peers": -0.01745892018779327,
            "vs_market": -0.0004497660418841809,
            "vs_sector": 0.00908916953693073,
            "vs_peers": 0.013727576904211114
          }
        }
      },
      "30d": {
        "label": "1M",
        "window_days": 21,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 21,
          "score_pca": 73.97899649941657,
          "score_pca_percentile": 73.97899649941657,
          "rank_pca": 670,
          "total": 2571,
          "adv_notional_sgd": 6516195.0,
          "adv_volume_shares": 2404500.0,
          "free_float_shares": 392967590.0,
          "turnover_ratio": 0.00611882521914848,
          "votes": 386.0,
          "trades": 386.0,
          "spread_pct": 0.009127988961501726,
          "spread_ticks": 2.5338983050847457,
          "amihud": 4.3007942465969985e-09,
          "volatility": 0.7988927799818081
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
          "peer_median_adv": 2487036.0,
          "peer_median_score_pca": 69.77829638273045,
          "peer_median_trades": 140.0,
          "peer_median_volatility": 0.37585030438788325,
          "peer_median_spread_pct": 0.009840184391590883,
          "peer_median_spread_ticks": 2.9176724137931034,
          "peer_median_amihud": 4.012356784733284e-09,
          "peer_median_turnover_ratio": 0.0027699120107954724,
          "target_vs_peer": {
            "score_pca_delta": 4.2,
            "adv_delta_pct": 162.0,
            "trades_delta_pct": 175.71,
            "volatility_delta_pct": -112.56,
            "spread_pct_delta_pct": 7.24,
            "spread_ticks_delta_pct": -13.15,
            "amihud_delta_pct": -7.19,
            "turnover_ratio_delta_pct": 120.9
          }
        },
        "peer_liquidity": [
          {
            "ticker": "9939",
            "score_pca": 73.97899649941657,
            "rank_pca": 670,
            "adv": 6516195.0,
            "trades": 386.0,
            "volatility": 0.7988927799818081,
            "spread_pct": 0.009127988961501726,
            "spread_ticks": 2.5338983050847457,
            "amihud": 4.3007942465969985e-09,
            "turnover_ratio": 0.00611882521914848,
            "is_target": true
          },
          {
            "ticker": "1763",
            "score_pca": 70.01166861143524,
            "rank_pca": 772,
            "adv": 3303272.0,
            "trades": 135.0,
            "volatility": 0.4339562433916092,
            "spread_pct": 0.011135215808316456,
            "spread_ticks": null,
            "amihud": 4.025846048748449e-09,
            "turnover_ratio": 0.003148236213563958,
            "is_target": false
          },
          {
            "ticker": "719",
            "score_pca": 70.4006223259432,
            "rank_pca": 762,
            "adv": 2918400.0,
            "trades": 112.0,
            "volatility": 0.1827411881201825,
            "spread_pct": 0.0035422151515578214,
            "spread_ticks": 2.2988505747126435,
            "amihud": 2.1347678973603734e-09,
            "turnover_ratio": 0.00261809864031114,
            "is_target": false
          },
          {
            "ticker": "2511",
            "score_pca": 68.37806301050176,
            "rank_pca": 814,
            "adv": 2679720.0,
            "trades": 180.0,
            "volatility": 0.6024427039249945,
            "spread_pct": 0.01958186374274594,
            "spread_ticks": 7.056919642857143,
            "amihud": 1.1314584354657913e-08,
            "turnover_ratio": 0.0029217253812798046,
            "is_target": false
          },
          {
            "ticker": "6996",
            "score_pca": 80.47452353169973,
            "rank_pca": 503,
            "adv": 15449197.500000002,
            "trades": 1231.0,
            "volatility": 0.7814134378512306,
            "spread_pct": 0.0039754937652377665,
            "spread_ticks": 2.0956521739130434,
            "amihud": 1.0229736708969047e-09,
            "turnover_ratio": 0.007877505544148202,
            "is_target": false
          },
          {
            "ticker": "6660",
            "score_pca": 67.67794632438739,
            "rank_pca": 832,
            "adv": 1899520.0,
            "trades": 143.0,
            "volatility": 0.6514909148940269,
            "spread_pct": 0.012048009954023324,
            "spread_ticks": 3.5166666666666666,
            "amihud": 1.2311239873249694e-08,
            "turnover_ratio": 0.001988978026102079,
            "is_target": false
          },
          {
            "ticker": "6896",
            "score_pca": 64.37183975106963,
            "rank_pca": 917,
            "adv": 1919925.0,
            "trades": 59.0,
            "volatility": 0.23900951276310714,
            "spread_pct": 0.008768224652985136,
            "spread_ticks": 3.1939655172413794,
            "amihud": 3.7403357205652074e-09,
            "turnover_ratio": 0.0006999845800498308,
            "is_target": false
          },
          {
            "ticker": "3880",
            "score_pca": 69.93387786853364,
            "rank_pca": 774,
            "adv": 2294352.0,
            "trades": 137.0,
            "volatility": 0.3177443653841573,
            "spread_pct": 0.010912144130196628,
            "spread_ticks": null,
            "amihud": 3.9988675207181206e-09,
            "turnover_ratio": 0.0037069351331558225,
            "is_target": false
          },
          {
            "ticker": "9989",
            "score_pca": 69.62271489692726,
            "rank_pca": 782,
            "adv": 1612765.0,
            "trades": 168.0,
            "volatility": 0.2529888345812779,
            "spread_pct": 0.005329445184645182,
            "spread_ticks": 2.6413793103448278,
            "amihud": 4.099866575871505e-09,
            "turnover_ratio": 0.0017540967212715986,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Pharmaceuticals",
          "sector_count": 53,
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
              "mean": 0.5273986034931263,
              "median": 0.48901888919412323,
              "min": 0.17377920965442353,
              "max": 1.3113060453236172,
              "p5": 0.21650218290593728,
              "p95": 0.9641600209019051,
              "count": 53
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 81878817.62603775,
              "median": 6516195.0,
              "min": 0.0,
              "max": 995985236.4000001,
              "p5": 5787.800000000001,
              "p95": 421498560.4439998,
              "count": 53
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.021621509313979912,
              "median": 0.007848116834227238,
              "min": 0.0007948022779348022,
              "max": 0.1813695249845774,
              "p5": 0.0016042337050592745,
              "p95": 0.09640738555544874,
              "count": 53
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.005175536763611134,
              "median": 0.0030637526784314333,
              "min": 0.0,
              "max": 0.029499848574921765,
              "p5": 5.641034056585053e-05,
              "p95": 0.015588790325092153,
              "count": 53
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 2.26460690484695e-07,
              "median": 2.1347678973603734e-09,
              "min": 1.7614832556204676e-11,
              "max": 3.412764284466189e-06,
              "p5": 4.7446068188978723e-11,
              "p95": 1.2910038034450058e-06,
              "count": 53
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 2014.1509433962265,
              "median": 358.0,
              "min": 0.0,
              "max": 20876.0,
              "p5": 1.6,
              "p95": 8232.999999999993,
              "count": 53
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 4009643.9375,
              "median": 2487036.0,
              "min": 1612765.0,
              "max": 15449197.500000002,
              "p5": 1713129.25,
              "p95": 11198123.574999996,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 270.625,
              "median": 140.0,
              "min": 59.0,
              "max": 1231.0,
              "p5": 77.55,
              "p95": 863.1499999999994,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.43272340011382326,
              "median": 0.37585030438788325,
              "min": 0.1827411881201825,
              "max": 0.7814134378512306,
              "p5": 0.20243510174520613,
              "p95": 0.7359405548162092,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.00941157654871353,
              "median": 0.009840184391590883,
              "min": 0.0035422151515578214,
              "max": 0.01958186374274594,
              "p5": 0.0036938626663458023,
              "p95": 0.01694501491669302,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 5.331060207758521e-09,
              "median": 4.012356784733284e-09,
              "min": 1.0229736708969047e-09,
              "max": 1.2311239873249694e-08,
              "p5": 1.4121016501591188e-09,
              "p95": 1.1962410441742571e-08,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0030894450299853047,
              "median": 0.0027699120107954724,
              "min": 0.0006999845800498308,
              "max": 0.007877505544148202,
              "p5": 0.0010689238294774495,
              "p95": 0.006417805900300867,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 3.467238980955951,
              "median": 2.9176724137931034,
              "min": 2.0956521739130434,
              "max": 7.056919642857143,
              "p5": 2.1464517741129434,
              "p95": 6.171856398809524,
              "count": 6
            }
          },
          "returns": {
            "window_days": 21,
            "n_obs": 21,
            "stock": -0.10999999999999988,
            "market": 0.02409148729213495,
            "sector": -0.0023308781627467967,
            "peers": -0.025589758482583047,
            "vs_market": -0.13409148729213483,
            "vs_sector": -0.10766912183725308,
            "vs_peers": -0.08441024151741683
          }
        }
      },
      "3m": {
        "label": "3M",
        "window_days": 63,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 63,
          "score_pca": 73.12329832749903,
          "score_pca_percentile": 73.12329832749903,
          "rank_pca": 692,
          "total": 2571,
          "adv_notional_sgd": 8750240.0,
          "adv_volume_shares": 2768000.0,
          "free_float_shares": 392967590.0,
          "turnover_ratio": 0.007043837890040754,
          "votes": 391.0,
          "trades": 391.0,
          "spread_pct": 0.008497366025459266,
          "spread_ticks": 2.4471830985915495,
          "amihud": 3.371577985315248e-09,
          "volatility": 1.118136729957792
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
          "peer_median_adv": 2465772.0,
          "peer_median_score_pca": 69.54492415402567,
          "peer_median_trades": 122.5,
          "peer_median_volatility": 0.4299233353523613,
          "peer_median_spread_pct": 0.009686985390928653,
          "peer_median_spread_ticks": 2.6212001853568117,
          "peer_median_amihud": 3.7038973340102976e-09,
          "peer_median_turnover_ratio": 0.002721281058999939,
          "target_vs_peer": {
            "score_pca_delta": 3.58,
            "adv_delta_pct": 254.9,
            "trades_delta_pct": 219.18,
            "volatility_delta_pct": -160.08,
            "spread_pct_delta_pct": 12.28,
            "spread_ticks_delta_pct": -6.64,
            "amihud_delta_pct": 8.97,
            "turnover_ratio_delta_pct": 158.84
          }
        },
        "peer_liquidity": [
          {
            "ticker": "9939",
            "score_pca": 73.12329832749903,
            "rank_pca": 692,
            "adv": 8750240.0,
            "trades": 391.0,
            "volatility": 1.118136729957792,
            "spread_pct": 0.008497366025459266,
            "spread_ticks": 2.4471830985915495,
            "amihud": 3.371577985315248e-09,
            "turnover_ratio": 0.007043837890040754,
            "is_target": true
          },
          {
            "ticker": "1763",
            "score_pca": 69.77829638273046,
            "rank_pca": 778,
            "adv": 3217328.0,
            "trades": 120.0,
            "volatility": 0.36303157102233274,
            "spread_pct": 0.012340317543913664,
            "spread_ticks": null,
            "amihud": 4.025846048748449e-09,
            "turnover_ratio": 0.0028127684203153396,
            "is_target": false
          },
          {
            "ticker": "719",
            "score_pca": 72.2287047841307,
            "rank_pca": 715,
            "adv": 4361500.0,
            "trades": 125.0,
            "volatility": 0.17556791704737462,
            "spread_pct": 0.0037885625846950767,
            "spread_ticks": 2.5436046511627906,
            "amihud": 1.5583790094420874e-09,
            "turnover_ratio": 0.0037319388513207047,
            "is_target": false
          },
          {
            "ticker": "2511",
            "score_pca": 65.38311940879036,
            "rank_pca": 891,
            "adv": 1730549.9999999998,
            "trades": 101.0,
            "volatility": 0.7871033440765012,
            "spread_pct": 0.02083440949084836,
            "spread_ticks": 6.080442804428044,
            "amihud": 1.5782663168386902e-08,
            "turnover_ratio": 0.0022750042425289376,
            "is_target": false
          },
          {
            "ticker": "6996",
            "score_pca": 77.9852197588487,
            "rank_pca": 567,
            "adv": 11320690.0,
            "trades": 1054.0,
            "volatility": 0.8356528791082674,
            "spread_pct": 0.004848132476860139,
            "spread_ticks": 2.054473161033797,
            "amihud": 2.3216210338122715e-09,
            "turnover_ratio": 0.00676367004546318,
            "is_target": false
          },
          {
            "ticker": "6660",
            "score_pca": 66.2777129521587,
            "rank_pca": 868,
            "adv": 1233690.0,
            "trades": 107.0,
            "volatility": 0.4968150996823899,
            "spread_pct": 0.011446748520959628,
            "spread_ticks": 3.5428134556574924,
            "amihud": 1.3540703245630909e-08,
            "turnover_ratio": 0.0011387787136053198,
            "is_target": false
          },
          {
            "ticker": "6896",
            "score_pca": 66.90003889537145,
            "rank_pca": 852,
            "adv": 2061675.0,
            "trades": 77.0,
            "volatility": 0.30553849213993395,
            "spread_pct": 0.007927222260897678,
            "spread_ticks": 2.687179487179487,
            "amihud": 3.3819486192721468e-09,
            "turnover_ratio": 0.0008420104368715356,
            "is_target": false
          },
          {
            "ticker": "3880",
            "score_pca": 69.31155192532088,
            "rank_pca": 790,
            "adv": 2412714.0,
            "trades": 138.0,
            "volatility": 0.5268826328054904,
            "spread_pct": 0.014553229038850327,
            "spread_ticks": null,
            "amihud": 7.72170167110246e-09,
            "turnover_ratio": 0.003721401221480333,
            "is_target": false
          },
          {
            "ticker": "9989",
            "score_pca": 71.80085569817192,
            "rank_pca": 726,
            "adv": 2518830.0,
            "trades": 203.0,
            "volatility": 0.2568903764589464,
            "spread_pct": 0.004887644275647152,
            "spread_ticks": 2.5552208835341363,
            "amihud": 2.41594160031342e-09,
            "turnover_ratio": 0.0026297936976845382,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Pharmaceuticals",
          "sector_count": 53,
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
              "mean": 0.5211736700446663,
              "median": 0.43549335455623944,
              "min": 0.15183409941763734,
              "max": 1.2307594962465453,
              "p5": 0.2329017441224038,
              "p95": 0.9633584215667721,
              "count": 53
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 63419635.817924514,
              "median": 8750240.0,
              "min": 0.0,
              "max": 905601900.4499999,
              "p5": 11522.400000000001,
              "p95": 336435881.3879999,
              "count": 53
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.018297902418674867,
              "median": 0.007432166172694249,
              "min": 0.0008137615789651041,
              "max": 0.10123351765206291,
              "p5": 0.0014399880927997227,
              "p95": 0.07068146034267916,
              "count": 53
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.004129963408086307,
              "median": 0.0028127684203153396,
              "min": 0.0,
              "max": 0.017854303342370453,
              "p5": 8.632794973150598e-05,
              "p95": 0.012899070078634086,
              "count": 53
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 2.2197604979666074e-07,
              "median": 2.3216210338122715e-09,
              "min": 2.2500284865433275e-11,
              "max": 4.494786048184104e-06,
              "p5": 5.1624327392113714e-11,
              "p95": 1.5467680591273243e-06,
              "count": 53
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1591.6792452830189,
              "median": 323.0,
              "min": 0.0,
              "max": 14530.0,
              "p5": 1.6,
              "p95": 7250.199999999995,
              "count": 53
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 3607122.125,
              "median": 2465772.0,
              "min": 1233690.0,
              "max": 11320690.0,
              "p5": 1407591.0,
              "p95": 8884973.499999996,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 240.625,
              "median": 122.5,
              "min": 77.0,
              "max": 1054.0,
              "p5": 85.4,
              "p95": 756.1499999999995,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.46843528904265463,
              "median": 0.4299233353523613,
              "min": 0.17556791704737462,
              "max": 0.8356528791082674,
              "p5": 0.20403077784142476,
              "p95": 0.8186605418471492,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.010078283274084002,
              "median": 0.009686985390928653,
              "min": 0.0037885625846950767,
              "max": 0.02083440949084836,
              "p5": 0.004159412046952848,
              "p95": 0.018635996332649046,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 6.3436005495885815e-09,
              "median": 3.7038973340102976e-09,
              "min": 1.5583790094420874e-09,
              "max": 1.5782663168386902e-08,
              "p5": 1.8255137179716519e-09,
              "p95": 1.4997977195422302e-08,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.002989420703658736,
              "median": 0.002721281058999939,
              "min": 0.0008420104368715356,
              "max": 0.00676367004546318,
              "p5": 0.0009458793337283601,
              "p95": 0.005702564127513313,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 3.2439557404992914,
              "median": 2.6212001853568117,
              "min": 2.054473161033797,
              "max": 6.080442804428044,
              "p5": 2.1767560335660456,
              "p95": 5.446035467235406,
              "count": 6
            }
          },
          "returns": {
            "window_days": 63,
            "n_obs": 63,
            "stock": 0.14592274678111727,
            "market": 0.0420090494699672,
            "sector": -0.10524730495191637,
            "peers": -0.13329279518944748,
            "vs_market": 0.10391369731115008,
            "vs_sector": 0.25117005173303364,
            "vs_peers": 0.27921554197056475
          }
        }
      },
      "6m": {
        "label": "6M",
        "window_days": 126,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 126,
          "score_pca": 71.25632049786076,
          "score_pca_percentile": 71.25632049786076,
          "rank_pca": 740,
          "total": 2571,
          "adv_notional_sgd": 4434860.0,
          "adv_volume_shares": 1777250.0,
          "free_float_shares": 392967590.0,
          "turnover_ratio": 0.004522637604795856,
          "votes": 246.0,
          "trades": 246.0,
          "spread_pct": 0.009492702705044449,
          "spread_ticks": 2.242240475500302,
          "amihud": 4.956114815592118e-09,
          "volatility": 0.8733586098272835
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
          "peer_median_adv": 3528419.0,
          "peer_median_score_pca": 70.90626215480358,
          "peer_median_trades": 173.25,
          "peer_median_volatility": 0.43246688234142994,
          "peer_median_spread_pct": 0.008801836187953136,
          "peer_median_spread_ticks": 2.497884645582201,
          "peer_median_amihud": 3.113708817257694e-09,
          "peer_median_turnover_ratio": 0.003427395822714164,
          "target_vs_peer": {
            "score_pca_delta": 0.35,
            "adv_delta_pct": 25.7,
            "trades_delta_pct": 41.99,
            "volatility_delta_pct": -101.95,
            "spread_pct_delta_pct": -7.85,
            "spread_ticks_delta_pct": -10.23,
            "amihud_delta_pct": -59.17,
            "turnover_ratio_delta_pct": 31.96
          }
        },
        "peer_liquidity": [
          {
            "ticker": "9939",
            "score_pca": 71.25632049786076,
            "rank_pca": 740,
            "adv": 4434860.0,
            "trades": 246.0,
            "volatility": 0.8733586098272835,
            "spread_pct": 0.009492702705044449,
            "spread_ticks": 2.242240475500302,
            "amihud": 4.956114815592118e-09,
            "turnover_ratio": 0.004522637604795856,
            "is_target": true
          },
          {
            "ticker": "1763",
            "score_pca": 70.51730844029561,
            "rank_pca": 759,
            "adv": 3856538.0,
            "trades": 163.5,
            "volatility": 0.461321203047641,
            "spread_pct": 0.011067667460114722,
            "spread_ticks": null,
            "amihud": 3.4395232567955534e-09,
            "turnover_ratio": 0.00347633108827964,
            "is_target": false
          },
          {
            "ticker": "719",
            "score_pca": 73.317775184753,
            "rank_pca": 687,
            "adv": 6525825.675000001,
            "trades": 181.0,
            "volatility": 0.21688092500389403,
            "spread_pct": 0.003435108749996745,
            "spread_ticks": 2.3394984174088753,
            "amihud": 1.0724024929024933e-09,
            "turnover_ratio": 0.005437127739099581,
            "is_target": false
          },
          {
            "ticker": "2511",
            "score_pca": 65.34422403733956,
            "rank_pca": 892,
            "adv": 1549077.5,
            "trades": 124.0,
            "volatility": 0.7744221735189555,
            "spread_pct": 0.01954850836393292,
            "spread_ticks": 5.904570109377802,
            "amihud": 1.6930176305703723e-08,
            "turnover_ratio": 0.002016698462258621,
            "is_target": false
          },
          {
            "ticker": "6996",
            "score_pca": 77.9852197588487,
            "rank_pca": 567,
            "adv": 10237478.75,
            "trades": 1072.0,
            "volatility": 0.7299695229471831,
            "spread_pct": 0.005109118315246269,
            "spread_ticks": 2.142022127737393,
            "amihud": 2.0885880182486762e-09,
            "turnover_ratio": 0.00604799873079085,
            "is_target": false
          },
          {
            "ticker": "6660",
            "score_pca": 67.67794632438739,
            "rank_pca": 832,
            "adv": 1524209.0,
            "trades": 170.0,
            "volatility": 0.44256636207421496,
            "spread_pct": 0.00964450646222718,
            "spread_ticks": 3.085530334018816,
            "amihud": 9.681413657871639e-09,
            "turnover_ratio": 0.0012536555136619968,
            "is_target": false
          },
          {
            "ticker": "6896",
            "score_pca": 66.35550369506029,
            "rank_pca": 866,
            "adv": 2018517.5,
            "trades": 85.0,
            "volatility": 0.25456256587609216,
            "spread_pct": 0.008077288176899206,
            "spread_ticks": 2.6562708737555267,
            "amihud": 3.03318932494567e-09,
            "turnover_ratio": 0.0008325420464167552,
            "is_target": false
          },
          {
            "ticker": "3880",
            "score_pca": 71.29521586931156,
            "rank_pca": 739,
            "adv": 3785218.0,
            "trades": 176.5,
            "volatility": 0.4223674026086449,
            "spread_pct": 0.009526384199007067,
            "spread_ticks": null,
            "amihud": 3.194228309569718e-09,
            "turnover_ratio": 0.0051408861383229285,
            "is_target": false
          },
          {
            "ticker": "9989",
            "score_pca": 72.50097238428627,
            "rank_pca": 708,
            "adv": 3271620.0,
            "trades": 256.5,
            "volatility": 0.2537023510177507,
            "spread_pct": 0.0038896651934213454,
            "spread_ticks": 2.098492658544205,
            "amihud": 2.1010294764693953e-09,
            "turnover_ratio": 0.0033784605571486872,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Pharmaceuticals",
          "sector_count": 53,
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
              "mean": 0.5193058937088781,
              "median": 0.4476921614282046,
              "min": 0.19970612017327674,
              "max": 1.1649651874303022,
              "p5": 0.22317267328051768,
              "p95": 1.0672056896446196,
              "count": 53
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 67353406.35915095,
              "median": 6525825.675000001,
              "min": 0.0,
              "max": 950720140.25,
              "p5": 11405.422,
              "p95": 348731711.7619997,
              "count": 53
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.017522622453806886,
              "median": 0.0076950053593886,
              "min": 0.0008497715783145334,
              "max": 0.10570336722186166,
              "p5": 0.0013374281483640544,
              "p95": 0.0678670855861365,
              "count": 53
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.004283456710778192,
              "median": 0.0033587627325250406,
              "min": 0.0,
              "max": 0.018679058670454822,
              "p5": 8.416679068952286e-05,
              "p95": 0.01342530627884636,
              "count": 53
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 2.0277462447754667e-07,
              "median": 2.1010294764693953e-09,
              "min": 1.779018177836386e-11,
              "max": 4.609721241765988e-06,
              "p5": 4.7447124001518325e-11,
              "p95": 1.0124884697617279e-06,
              "count": 53
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1686.5283018867924,
              "median": 256.5,
              "min": 0.0,
              "max": 15929.5,
              "p5": 1.8,
              "p95": 7420.599999999995,
              "count": 53
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 4096060.553125,
              "median": 3528419.0,
              "min": 1524209.0,
              "max": 10237478.75,
              "p5": 1532912.975,
              "p95": 8938400.173749998,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 278.5625,
              "median": 173.25,
              "min": 85.0,
              "max": 1072.0,
              "p5": 98.65,
              "p95": 786.5749999999996,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.444474063261797,
              "median": 0.43246688234142994,
              "min": 0.21688092500389403,
              "max": 0.7744221735189555,
              "p5": 0.22976842410874385,
              "p95": 0.7588637458188351,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.008787280865105683,
              "median": 0.008801836187953136,
              "min": 0.003435108749996745,
              "max": 0.01954850836393292,
              "p5": 0.003594203505195355,
              "p95": 0.016580214047596548,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 5.192568855313358e-09,
              "median": 3.113708817257694e-09,
              "min": 1.0724024929024933e-09,
              "max": 1.6930176305703723e-08,
              "p5": 1.4280674267736572e-09,
              "p95": 1.439310937896249e-08,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0034479625344973827,
              "median": 0.003427395822714164,
              "min": 0.0008325420464167552,
              "max": 0.00604799873079085,
              "p5": 0.0009799317599525899,
              "p95": 0.005834193883698905,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 3.03773075347377,
              "median": 2.497884645582201,
              "min": 2.098492658544205,
              "max": 5.904570109377802,
              "p5": 2.1093750258425024,
              "p95": 5.1998101655380555,
              "count": 6
            }
          },
          "returns": {
            "window_days": 126,
            "n_obs": 126,
            "stock": 0.09876543209876609,
            "market": 0.09531099833042789,
            "sector": -0.2268754318581383,
            "peers": -0.25878223655823895,
            "vs_market": 0.0034544337683382054,
            "vs_sector": 0.3256408639569044,
            "vs_peers": 0.35754766865700505
          }
        }
      }
    },
    "period_insights": {
      "1d": {
        "liquidity": "1D score 62.1 vs peer median 65.0 (-2.9 pts).",
        "market_comparison": "The stock fell 0.4% while peers fell 1.7%, which matters because relative price resilience did not translate into stronger same-day trading flow."
      },
      "30d": {
        "liquidity": "Liquidity looks solid over the month, supported by primary average daily volume of HK$4.4M compared with a peer median of HK$3.5M, which improves accessibility for routine trading.",
        "market_comparison": "The stock returned -11.0% compared with peers at -2.6% and the market at +2.4%, which matters because weaker momentum can weigh on participation even when monthly liquidity is serviceable."
      },
      "3m": {
        "liquidity": "Tradability appears steady over the medium term, with the broader liquidity profile still sitting around peer levels, which keeps access broadly in line with the group.",
        "market_comparison": "Sector factors account for 52.4% of the current driver mix, which matters because trading conditions are still being shaped meaningfully by broader market moves."
      },
      "6m": {
        "liquidity": "Liquidity is average over six months, with a score of 71.3 compared with the peer median of 70.9, so access is neither clearly stronger nor weaker than peers.",
        "market_comparison": "That near-peer standing matters because it points to a market that remains broadly accessible relative to similar names, rather than standing out on either depth or scarcity."
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
          "median": 0.2860132473284565,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "28.6%",
          "display_range": null,
          "display_text": "28.6%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "share_pct",
          "value_pct": 28.6,
          "plain_english": "Market explains about 28.6% of price moves in the current state."
        },
        "sector_share": {
          "median": 0.5236857222998984,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "52.4%",
          "display_range": null,
          "display_text": "52.4%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "share_pct",
          "value_pct": 52.4,
          "plain_english": "Sector explains about 52.4% of price moves in the current state."
        },
        "company_share": {
          "median": 0.19030103037164514,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "19.0%",
          "display_range": null,
          "display_text": "19.0%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "share_pct",
          "value_pct": 19.0,
          "plain_english": "Company-specific explains about 19.0% of price moves in the current state."
        },
        "basis": "current_state"
      },
      "current_sensitivities": {
        "beta_market": {
          "median": 3.9187998495574154,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "3.92",
          "display_range": null,
          "display_text": "3.92",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "beta",
          "strength_label": "Very high",
          "plain_english": "Very high market link: a 1% market move has lined up with about a 3.92% stock move in the same direction in this state.",
          "value_num": 3.92
        },
        "beta_stock_lag": {
          "median": 1.4231476650939892,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "1.42",
          "display_range": null,
          "display_text": "1.42",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "lag_beta",
          "value_num": 1.42
        },
        "beta_sector": {
          "median": -3.7412854108385645,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "-3.74",
          "display_range": null,
          "display_text": "-3.74",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "beta",
          "strength_label": "Very high",
          "plain_english": "Very high sector link: a 1% sector move has lined up with about a 3.74% stock move in the opposite direction in this state.",
          "value_num": -3.74
        },
        "beta_market_lag": {
          "median": 1.9434962732746648,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "1.94",
          "display_range": null,
          "display_text": "1.94",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "lag_beta",
          "value_num": 1.94
        },
        "beta_sector_lag": {
          "median": 8.381484254725256,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "8.38",
          "display_range": null,
          "display_text": "8.38",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "lag_beta",
          "value_num": 8.38
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
            "median": 0.5870695680378831,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "58.7%",
            "display_range": null,
            "display_text": "58.7%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 16 trading days.",
            "kind": "share_pct",
            "value_pct": 58.7,
            "plain_english": "Sector explains about 58.7% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.20663875511064334,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "20.7%",
              "display_range": null,
              "display_text": "20.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 16 trading days.",
              "kind": "share_pct",
              "value_pct": 20.7,
              "plain_english": "Market explains about 20.7% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.5870695680378831,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "58.7%",
              "display_range": null,
              "display_text": "58.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 16 trading days.",
              "kind": "share_pct",
              "value_pct": 58.7,
              "plain_english": "Sector explains about 58.7% of price moves in the current state."
            },
            "company_share": {
              "median": 0.20629167685147354,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "20.6%",
              "display_range": null,
              "display_text": "20.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 16 trading days.",
              "kind": "share_pct",
              "value_pct": 20.6,
              "plain_english": "Company-specific explains about 20.6% of price moves in the current state."
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
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.5098955984387912,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "51.0%",
            "display_range": null,
            "display_text": "51.0%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
            "kind": "share_pct",
            "value_pct": 51.0,
            "plain_english": "Company-specific explains about 51.0% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.09468159257124938,
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
              "plain_english": "Market explains about 9.5% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.3954228089899596,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "39.5%",
              "display_range": null,
              "display_text": "39.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 39.5,
              "plain_english": "Sector explains about 39.5% of price moves in the current state."
            },
            "company_share": {
              "median": 0.5098955984387912,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "51.0%",
              "display_range": null,
              "display_text": "51.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 51.0,
              "plain_english": "Company-specific explains about 51.0% of price moves in the current state."
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
            "median": 0.46242197089207737,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "46.2%",
            "display_range": null,
            "display_text": "46.2%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
            "kind": "share_pct",
            "value_pct": 46.2,
            "plain_english": "Company-specific explains about 46.2% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.14601206113376963,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "14.6%",
              "display_range": null,
              "display_text": "14.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 14.6,
              "plain_english": "Market explains about 14.6% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.391565967974153,
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
              "plain_english": "Sector explains about 39.2% of price moves in the current state."
            },
            "company_share": {
              "median": 0.46242197089207737,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "46.2%",
              "display_range": null,
              "display_text": "46.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 46.2,
              "plain_english": "Company-specific explains about 46.2% of price moves in the current state."
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
            "median": 0.5649743310573022,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "56.5%",
            "display_range": null,
            "display_text": "56.5%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
            "kind": "share_pct",
            "value_pct": 56.5,
            "plain_english": "Company-specific explains about 56.5% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.11811677522392164,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "11.8%",
              "display_range": null,
              "display_text": "11.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 11.8,
              "plain_english": "Market explains about 11.8% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.3169088937187763,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "31.7%",
              "display_range": null,
              "display_text": "31.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 31.7,
              "plain_english": "Sector explains about 31.7% of price moves in the current state."
            },
            "company_share": {
              "median": 0.5649743310573022,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "56.5%",
              "display_range": null,
              "display_text": "56.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 56.5,
              "plain_english": "Company-specific explains about 56.5% of price moves in the current state."
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
          "dominant_driver": "sector",
          "dominant_driver_label": "Sector",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.5196185314556482,
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
            "plain_english": "Sector explains about 52.0% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.08505690102107066,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "8.5%",
              "display_range": null,
              "display_text": "8.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 8.5,
              "plain_english": "Market explains about 8.5% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.5196185314556482,
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
              "plain_english": "Sector explains about 52.0% of price moves in the current state."
            },
            "company_share": {
              "median": 0.3953245675232811,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "39.5%",
              "display_range": null,
              "display_text": "39.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 39.5,
              "plain_english": "Company-specific explains about 39.5% of price moves in the current state."
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
            "median": 0.3710765718045118,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "37.1%",
            "display_range": null,
            "display_text": "37.1%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
            "kind": "share_pct",
            "value_pct": 37.1,
            "plain_english": "Sector explains about 37.1% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.30619301512884745,
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
              "median": 0.3710765718045118,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "37.1%",
              "display_range": null,
              "display_text": "37.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 37.1,
              "plain_english": "Sector explains about 37.1% of price moves in the current state."
            },
            "company_share": {
              "median": 0.3227304130666408,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "32.3%",
              "display_range": null,
              "display_text": "32.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 32.3,
              "plain_english": "Company-specific explains about 32.3% of price moves in the current state."
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
            "median": 0.40777559035251953,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "40.8%",
            "display_range": null,
            "display_text": "40.8%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
            "kind": "share_pct",
            "value_pct": 40.8,
            "plain_english": "Company-specific explains about 40.8% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.2823002747040595,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "28.2%",
              "display_range": null,
              "display_text": "28.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 28.2,
              "plain_english": "Market explains about 28.2% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.30992413494342097,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "31.0%",
              "display_range": null,
              "display_text": "31.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 31.0,
              "plain_english": "Sector explains about 31.0% of price moves in the current state."
            },
            "company_share": {
              "median": 0.40777559035251953,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "40.8%",
              "display_range": null,
              "display_text": "40.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 40.8,
              "plain_english": "Company-specific explains about 40.8% of price moves in the current state."
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
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.4188524066812337,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "41.9%",
            "display_range": null,
            "display_text": "41.9%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
            "kind": "share_pct",
            "value_pct": 41.9,
            "plain_english": "Company-specific explains about 41.9% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.23664481037454532,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "23.7%",
              "display_range": null,
              "display_text": "23.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 23.7,
              "plain_english": "Market explains about 23.7% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.34450278294422104,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "34.5%",
              "display_range": null,
              "display_text": "34.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 34.5,
              "plain_english": "Sector explains about 34.5% of price moves in the current state."
            },
            "company_share": {
              "median": 0.4188524066812337,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "41.9%",
              "display_range": null,
              "display_text": "41.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 41.9,
              "plain_english": "Company-specific explains about 41.9% of price moves in the current state."
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
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.47005799397535836,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "47.0%",
            "display_range": null,
            "display_text": "47.0%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
            "kind": "share_pct",
            "value_pct": 47.0,
            "plain_english": "Company-specific explains about 47.0% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.2430866852120731,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "24.3%",
              "display_range": null,
              "display_text": "24.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
              "kind": "share_pct",
              "value_pct": 24.3,
              "plain_english": "Market explains about 24.3% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.2868553208125686,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "28.7%",
              "display_range": null,
              "display_text": "28.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
              "kind": "share_pct",
              "value_pct": 28.7,
              "plain_english": "Sector explains about 28.7% of price moves in the current state."
            },
            "company_share": {
              "median": 0.47005799397535836,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "47.0%",
              "display_range": null,
              "display_text": "47.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
              "kind": "share_pct",
              "value_pct": 47.0,
              "plain_english": "Company-specific explains about 47.0% of price moves in the current state."
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
            "median": 0.5319624292625686,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "53.2%",
            "display_range": null,
            "display_text": "53.2%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
            "kind": "share_pct",
            "value_pct": 53.2,
            "plain_english": "Company-specific explains about 53.2% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.2519531172165297,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "25.2%",
              "display_range": null,
              "display_text": "25.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 25.2,
              "plain_english": "Market explains about 25.2% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.2160844535209017,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "21.6%",
              "display_range": null,
              "display_text": "21.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 21.6,
              "plain_english": "Sector explains about 21.6% of price moves in the current state."
            },
            "company_share": {
              "median": 0.5319624292625686,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "53.2%",
              "display_range": null,
              "display_text": "53.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 53.2,
              "plain_english": "Company-specific explains about 53.2% of price moves in the current state."
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
          "dominant_driver": "sector",
          "dominant_driver_label": "Sector",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.4321610660072588,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "43.2%",
            "display_range": null,
            "display_text": "43.2%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
            "kind": "share_pct",
            "value_pct": 43.2,
            "plain_english": "Sector explains about 43.2% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.2062158589691925,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "20.6%",
              "display_range": null,
              "display_text": "20.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
              "kind": "share_pct",
              "value_pct": 20.6,
              "plain_english": "Market explains about 20.6% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.4321610660072588,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "43.2%",
              "display_range": null,
              "display_text": "43.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
              "kind": "share_pct",
              "value_pct": 43.2,
              "plain_english": "Sector explains about 43.2% of price moves in the current state."
            },
            "company_share": {
              "median": 0.3616230750235487,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "36.2%",
              "display_range": null,
              "display_text": "36.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
              "kind": "share_pct",
              "value_pct": 36.2,
              "plain_english": "Company-specific explains about 36.2% of price moves in the current state."
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
            "median": 0.4282771050311909,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "42.8%",
            "display_range": null,
            "display_text": "42.8%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
            "kind": "share_pct",
            "value_pct": 42.8,
            "plain_english": "Sector explains about 42.8% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.276550634431489,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "27.7%",
              "display_range": null,
              "display_text": "27.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 27.7,
              "plain_english": "Market explains about 27.7% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.4282771050311909,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "42.8%",
              "display_range": null,
              "display_text": "42.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 42.8,
              "plain_english": "Sector explains about 42.8% of price moves in the current state."
            },
            "company_share": {
              "median": 0.2951722605373202,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "29.5%",
              "display_range": null,
              "display_text": "29.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 29.5,
              "plain_english": "Company-specific explains about 29.5% of price moves in the current state."
            }
          },
          "summary": "Mar: More mixed, though sector-driven still has the largest share."
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
            "median": 0.6628831202917242,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "66.3%",
            "display_range": null,
            "display_text": "66.3%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 14 trading days.",
            "kind": "share_pct",
            "value_pct": 66.3,
            "plain_english": "Company-specific explains about 66.3% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.15384747245527325,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "15.4%",
              "display_range": null,
              "display_text": "15.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 14 trading days.",
              "kind": "share_pct",
              "value_pct": 15.4,
              "plain_english": "Market explains about 15.4% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.18326940725300253,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "18.3%",
              "display_range": null,
              "display_text": "18.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 14 trading days.",
              "kind": "share_pct",
              "value_pct": 18.3,
              "plain_english": "Sector explains about 18.3% of price moves in the current state."
            },
            "company_share": {
              "median": 0.6628831202917242,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "66.3%",
              "display_range": null,
              "display_text": "66.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 14 trading days.",
              "kind": "share_pct",
              "value_pct": 66.3,
              "plain_english": "Company-specific explains about 66.3% of price moves in the current state."
            }
          },
          "summary": "Apr: Still clearly company-driven."
        }
      ],
      "regimes": [
        {
          "id": 0,
          "label": "Low Volatility",
          "pct_time": 0.5020080321285141,
          "expected_duration_days": 9.615384615384615,
          "current_probability": 0.0,
          "n_days_effective": 125.0,
          "volatility": {
            "median": 0.0313415844486738,
            "low": 0.0313415844486738,
            "high": 0.0313415844486738
          },
          "volatility_label": "Low Volatility",
          "current_probability_display": 0.0
        },
        {
          "id": 1,
          "label": "High Volatility",
          "pct_time": 0.4979919678714859,
          "expected_duration_days": 8.857142857142858,
          "current_probability": 1.0,
          "n_days_effective": 124.0,
          "volatility": {
            "median": 0.06625289661716138,
            "low": 0.06625289661716138,
            "high": 0.06625289661716138
          },
          "volatility_label": "High Volatility",
          "current_probability_display": null
        }
      ],
      "transitions": {
        "mean": [
          [
            0.896,
            0.104
          ],
          [
            0.10569105691056911,
            0.8943089430894309
          ]
        ],
        "low": [],
        "high": [],
        "counts": [
          [
            112.0,
            13.0
          ],
          [
            13.0,
            110.0
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
        "market_link_display": "3.92",
        "sector_link_display": "-3.74",
        "market_link_explainer": "Very high market link. A 1% market move has lined up with about a 3.92% stock move in the same direction in this state. This is a point estimate from 251 trading days.",
        "sector_link_explainer": "Very high sector link. A 1% sector move has lined up with about a 3.74% stock move in the opposite direction in this state. This is a point estimate from 251 trading days.",
        "stock_persistence_display": "1.42",
        "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
        "history_limited_note": "Read is based on 251 trading days versus the 252-day target."
      },
      "current_summary": {
        "regime_label": "High Volatility",
        "dominant_driver": "sector",
        "dominant_driver_label": "Sector",
        "driver_share_pct": 52.4,
        "driver_share_display": "52.4%",
        "confidence_label": "High, limited history",
        "confidence_pct": 100.0,
        "display_confidence_pct": null,
        "confidence_note": "Based on 251 trading days relative to the 252-day target.",
        "history_days": 251,
        "history_limited": true,
        "volatility_label": "High Volatility",
        "lead_signal_text": "No stable lead signal.",
        "state_term": "state",
        "stay_probability": 0.8943089430894309,
        "effective_days": 124.0,
        "persistence_note": "This state looks more persistent, with a typical run length of about 8.9 days.",
        "expected_duration_days": 8.9
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
          "expected_duration_days": 9.615384615384615,
          "current_probability": 0.0,
          "n_days_effective": 125.0,
          "volatility": {
            "median": 0.0313415844486738,
            "low": 0.0313415844486738,
            "high": 0.0313415844486738
          },
          "volatility_label": "Low Volatility"
        },
        {
          "id": 1,
          "label": "High Volatility",
          "pct_time": 0.4979919678714859,
          "expected_duration_days": 8.857142857142858,
          "current_probability": 1.0,
          "n_days_effective": 124.0,
          "volatility": {
            "median": 0.06625289661716138,
            "low": 0.06625289661716138,
            "high": 0.06625289661716138
          },
          "volatility_label": "High Volatility"
        }
      ],
      "transitions": [
        [
          0.896,
          0.104
        ],
        [
          0.10569105691056911,
          0.8943089430894309
        ]
      ],
      "transition_intervals": {
        "mean": [
          [
            0.896,
            0.104
          ],
          [
            0.10569105691056911,
            0.8943089430894309
          ]
        ],
        "low": [],
        "high": [],
        "counts": [
          [
            112.0,
            13.0
          ],
          [
            13.0,
            110.0
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
        "text": "Liquidity score: 71.3 — Strong",
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
        "bg": "bg-amber-500/20",
        "textColor": "text-amber-400"
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
    "liq_subtitle": "Liquidity is around peer levels for the stock’s size, with slower recent activity but orderly displayed execution.",
    "market_comparison_title": "How You Compare to the Market",
    "market_comparison_subtitle": "Context relative to market, sector, and peer medians.",
    "perf_title": "Stock Performance",
    "perf_subtitle": "Recent performance has lagged, with the stock down 11.0% over one month compared with peers down 2.6% and the market up 2.4%.",
    "perf_insight": "The stock has underperformed over the past month, falling 11.0% while peers are down 2.6% and the market is up 2.4%. That matters because weaker momentum is not being offset by a stronger trading backdrop, even with sector factors driving 52.4% of the tape.",
    "drivers_title": "What Moves Your Stock Price?",
    "drivers_subtitle": "Sector moves are the main influence on trading, with 52.4% of the tape explained by sector factors.",
    "drivers_strip": [
      {
        "title": "Current Driver (Last 5 Days)",
        "text": "Over the last 5 trading days, moves are mainly sector-driven, accounting for about 52.4% of price changes. Other influences are market 28.6%, and company-specific 19.0%."
      },
      {
        "title": "Driver Mix",
        "text": "Based on the last 5 trading days, current mix is market 28.6%, sector 52.4%, and company-specific 19.0%."
      },
      {
        "title": "Monthly Trend",
        "text": "The driver mix has shifted from sector-driven to company-driven over Feb to Apr."
      }
    ],
    "drivers_pie_title": "Current Driver Mix (Last 5 Days)",
    "drivers_pie_note": "Based on the last 5 trading days, current split is market 28.6%, sector 52.4%, and company-specific 19.0%.",
    "lead_lag_title": "",
    "lead_lag_note": "",
    "rolling_title": "Monthly Driver Shift",
    "rolling_latest_label": "Latest: {period}",
    "rolling_note": "Each bar shows the monthly split between market-, sector-, and company-driven moves.",
    "drivers_bottom_line": "That matters because current trading is being shaped more by the group backdrop than by company-specific demand, while the stock’s 11.0% one-month decline leaves the tape under pressure.",
    "drivers_wtd_title": "Key Reads",
    "drivers_wtd_list": [
      "Main driver now: sector factors account for 52.4% of recent price moves.",
      "Monthly change: the mix was more balanced in February and March, then turned clearly company-driven in April."
    ],
    "regime_title": "Market State",
    "regime_subtitle": "Trading conditions look balanced, with peer-level liquidity and orderly displayed depth despite lighter recent volume.",
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
    "exec_check_subtitle": "Combines the final continuous-session displayed book before close, trade-size stress tests based on Apr 23, 2025 to Apr 23, 2026 (241 trading days • 129,158 trades), large sell-side orders observed today, and intraday spread/depth during the continuous trading session.",
    "order_book_title": "Order Book Depth (Available Liquidity)",
    "order_book_note": "Depth shown is based on the displayed order book.",
    "peer_capacity_title": "Peer Capacity Context",
    "peer_capacity_note": "Immediate displayed depth broadly matches the stronger monthly liquidity read.",
    "impact_summary_title": "Estimated Price Impact (Sell Orders)",
    "impact_summary_subtitle": "Approximate price impact (%) for sell orders.",
    "exec_check_insight": "Immediate execution looks orderly, with a 1 tick spread and displayed bid depth at 1.39x ask depth. That matters because the order book remains supportive even as one-day average volume sits 73.1% below the one-month average.",
    "trader_composition_title": "Who's Trading Your Stock?",
    "trader_composition_subtitle": "Shows whether trading is mostly retail-like, institution-like, mixed, or unclassified.",
    "trader_retail_threshold": "Retail-like flow",
    "trader_mixed_threshold": "Mixed flow",
    "trader_instit_threshold": "Institution-like flow",
    "peer_trader_title": "Peer Comparison: Trader Mix",
    "peer_trader_subtitle": "How the trader mix compares with peers.",
    "price_moving_title": "Which Trades Move the Price?",
    "price_moving_subtitle": "Price-moving trades are 25.1% of total trades.",
    "intraday_title": "When Does Trading Happen?",
    "intraday_subtitle": "Displayed execution looks orderly, with a tight spread and stronger bid depth supporting near-term access.",
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
    "intraday_insight": "Near-term trading conditions look stable, with a 1 tick spread and displayed bid depth at 1.39x ask depth. That matters because the order book is holding up even though one-day average volume is 73.1% below the one-month average.",
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
    "exec_subtitle": "Trading access is broadly in line with peers, while weaker recent price performance and lighter activity keep the near-term picture balanced.",
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
        "value": "71.3/100",
        "sub": "Peer median 70.9 (+0.4 pts)",
        "interp": {
          "text": "Strong",
          "cls": "interpretation-good",
          "icon": "◆"
        }
      },
      {
        "title": "Volume vs Peers",
        "value": "HK$4.4M",
        "sub": "Peer median HK$3.5M",
        "interp": {
          "text": "Strong",
          "cls": "interpretation-good",
          "icon": "◆"
        }
      },
      {
        "title": "Spread",
        "value": "0.95%",
        "sub": "2.24 ticks; peers 0.88%",
        "interp": {
          "text": "Wider",
          "cls": "interpretation-bad",
          "icon": "◆"
        }
      }
    ],
    "liq_insight": "Liquidity is mixed for the stock’s size, with a 6M score of 71.3 compared with the peer median of 70.9. Recent activity is thinner, with one-day average volume down 73.1% from the one-month average, which makes day-to-day access less robust than the medium-term picture. Immediate execution still looks orderly, with a 1 tick spread and displayed bid depth at 1.39x ask depth, supporting workable near-term access.",
    "perf_badge": "Context",
    "exec_check_tiles": [
      {
        "title": "Mid Price",
        "value": "2.675",
        "note": "final continuous-session displayed book before close",
        "color": "text-white"
      },
      {
        "title": "Spread",
        "value": "0.37%",
        "note": "1.00 ticks",
        "color": "text-slate-300"
      },
      {
        "title": "Depth",
        "value": "1.39x",
        "note": "Bid depth / ask depth on the displayed order book",
        "color": "text-slate-300"
      }
    ],
    "impact_summary_cards": [
      {
        "title": "~S$100K sell",
        "text": "Estimated impact ~-0.36% with 100.0% fill.",
        "cls": "ok"
      },
      {
        "title": "S$1.0M sell",
        "text": "Estimated impact ~-0.80% with 100.0% fill.",
        "cls": "warn"
      },
      {
        "title": "S$2.5M sell",
        "text": "Estimated impact ~-2.21% with 77.7% fill.",
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
        "value": "71",
        "suffix": "/100",
        "bar_pct": 71,
        "color_value": "text-emerald-400",
        "color_bar": "bg-emerald-500",
        "subtext": "Rank 740/2571",
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
        "value": "0.95",
        "suffix": "%",
        "bar_pct": 9,
        "color_value": "text-emerald-400",
        "color_bar": "bg-emerald-500",
        "subtext": "0.95% • 2.24 ticks vs peers 0.88%",
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
        "value": "4.4M",
        "value_prefix": "HK$",
        "suffix": "",
        "bar_pct": 60,
        "color_value": "text-emerald-400",
        "color_bar": "bg-emerald-500",
        "subtext": "Peer median HK$3.5M",
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
        "value": "52.4",
        "suffix": "sector",
        "bar_pct": 52,
        "color_value": "text-amber-400",
        "color_bar": "bg-amber-500",
        "subtext": "Market 28.6% • Company 19.0%",
        "interpretation": {
          "text": "Sector",
          "cls": "interpretation-neutral",
          "icon": "◆"
        }
      }
    ],
    "exec_takeaways": [
      "Structural liquidity is broadly in line with peers, with a 6M liquidity score of 71.3 compared with the peer median of 70.9. That keeps access reasonable for the company’s size without establishing a clear advantage.",
      "Recent activity is lighter, with one-day average volume down 73.1% from the one-month average. That matters because day-to-day trading can feel thinner even when the broader liquidity profile remains intact.",
      "The near-term tape is balanced rather than supportive, with the stock down 11.0% over one month while peers are down 2.6% and the market is up 2.4%. That matters because weaker price performance is meeting a sector-led backdrop, although a 1 tick spread and bid depth at 1.39x ask depth still point to orderly execution."
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
      "overall": "6M liquidity is strong: score 71.3 vs peer median 70.9 (+0.4 pts). 1D average volume down -73.1% from 1M. Recent flow does not show a clear deterioration from the monthly baseline.",
      "strengths": [
        "6M score 71.3 vs peer median 70.9 (+0.4 pts)."
      ],
      "concerns": [
        "1D average volume down -73.1% from 1M."
      ],
      "peer_context": "Primary-period score gap vs peers: +0.4 pts."
    },
    "market_comparison": {
      "returns": {
        "insight": "6M return is 9.9%, better than sector and peers, which suggests stronger price performance than comparable names.",
        "vs_market": "In line with market: 9.9% vs market 9.5%.",
        "vs_sector": "Better than sector: 9.9% vs sector -22.7%.",
        "vs_peers": "Better than peers: 9.9% vs peers -25.9%."
      },
      "adv": {
        "insight": "ADV is HK$4.4M, better than market and peers, but worse than sector, which shows trading size is uneven across comparison groups.",
        "vs_market": "Better than market: HK$4.4M vs market HK$216.3K.",
        "vs_sector": "Worse than sector: HK$4.4M vs sector HK$6.5M.",
        "vs_peers": "Better than peers: HK$4.4M vs peers HK$3.5M."
      },
      "spread": {
        "insight": "Spread is 0.95%, better than market, but worse than sector, which shows execution cost is mixed across comparison groups.",
        "vs_market": "Better than market: 0.95% vs market 2.71%.",
        "vs_sector": "Worse than sector: 0.95% vs sector 0.77%.",
        "vs_peers": "In line with peers: 0.95% vs peers 0.88%."
      },
      "turnover_ratio": {
        "insight": "Turnover ratio is 0.45%, better than market, sector, and peers, which shows a more active free-float turnover profile than comparable names.",
        "vs_market": "Better than market: 0.45% vs market 0.08%.",
        "vs_sector": "Better than sector: 0.45% vs sector 0.34%.",
        "vs_peers": "Better than peers: 0.45% vs peers 0.34%."
      },
      "volatility": {
        "insight": "Volatility is 87.34%, worse than market, sector, and peers, which suggests day-to-day price swings are heavier than comparable names.",
        "vs_market": "Worse than market: 87.34% vs market 59.43%.",
        "vs_sector": "Worse than sector: 87.34% vs sector 44.77%.",
        "vs_peers": "Worse than peers: 87.34% vs peers 43.25%."
      },
      "trades": {
        "insight": "Trades is 246, better than market and peers, which supports more fully reflective of day-to-day access day-to-day activity than comparable names.",
        "vs_market": "Better than market: 246 vs market 20.",
        "vs_sector": "In line with sector: 246 vs secto.",
        "vs_peers": "Better than peers: 246 vs peers 173."
      },
      "amihud": {
        "insight": "Price impact is 4.96e-09, better than market, but worse than sector and peers, which shows price impact is mixed across comparison groups.",
        "vs_market": "Better than market: 4.96e-09 vs market 4.66e-08.",
        "vs_sector": "Worse than sector: 4.96e-09 vs sectoe-09.",
        "vs_peers": "Worse than peers: 4.96e-09 vs peers 3.11e-09."
      }
    },
    "performance": {
      "overall": "Recent performance is weak relative to both peers and the market, with a one-month return of -11.0% compared with peers at -2.6% and the market at +2.4%. Liquidity gives a mixed read on that move because the six-month liquidity score of 71.3 is only 0.4 points above the peer median, while one-day average volume is 73.1% below the monthly average, so the sell-off is not being reinforced by stronger trading activity.",
      "conclusion": "The move looks mixed but mainly sector-linked, with weak returns and only partial confirmation from liquidity."
    },
    "drivers": {
      "overall": "Sector moves are the main force in the stock right now, with 52.4% of recent price action explained by the sector. That matters because the shares are trading more in line with the group at a time when the 1M return is down 11.0%, compared with peers down 2.6% and the market up 2.4%.",
      "beta": "The current pattern looks mixed rather than fully established because sector influence is leading now while 1D average volume is 73.1% below the 1M average. That matters because thinner recent activity can make the driver mix feel more temporary from day to day.",
      "rolling_change": "The monthly picture has shifted. February and March were more balanced even though sector moves had the largest share, while April was clearly company-driven, so the current sector-led read marks a change from the latest monthly pattern."
    },
    "regime": {
      "overall": "The stock is trading in a higher-volatility backdrop that appears to be sticking, with a typical spell of about 8.9 days. That matters because trading conditions are more likely to stay uneven than snap back quickly.",
      "current": "Current market state is High Volatility. The market has been in this state about 49.8% of the time. Based on 251 trading days relative to the 252-day target.",
      "transitions": "The state looks reasonably settled, with a typical run length of about 8.9 days. Sector moves still account for 52.4% of the tape, which supports the view that this backdrop can persist beyond a single session.",
      "trading_implications": "Trading conditions look mixed: the volatility regime is elevated and recent activity has pulled back, but the displayed spread is still 1 tick and bid depth is 1.39x ask depth. That points to orderly top-of-book trading even as the broader backdrop stays less steady."
    },
    "execution": {
      "overall": "displayed bid depth is 1.39x ask depth; spread is 1 tick. Immediate displayed depth broadly matches the stronger monthly liquidity read.",
      "concern": "The main stress point is lighter activity, with 1D average volume down 73.1% from the 1M",
      "peer_context": "The book broadly supports the wider liquidity view because the 6M score of 71.3 is only 0.4 points above the peer median of 70.9, and today’s tight spread and stronger bid depth fit that middle-of-the-pack standing."
    },
    "trader_composition": {
      "overall": "By trade count and value, flow looks mainly institution-like.",
      "retail_heavy": "The mix does not look retail-heavy because retail-like trades are 24.3% of count and only 6.0% of value. That gap matters because trade value is concentrated away from retail-like activity.",
      "institutional_gap": "The read is still mixed at the margin because unclear flow represents 24.1% of trade count. That leaves the institution-like signal directionally clear, but not fully clean.",
      "peer_comparison": "The mix looks more institution-like than mixed, and the peer comparison in the report tables shows how unusual that balance is relative to comparable names."
    },
    "price_moving": {
      "overall": "Price-moving trades account fo% of total trades. The clearest read is still institution-like because both trade count and trade value lean that way. That matters because price formation is more likely to reflect higher-value participation than retail-like flow alone. The balance of positive and negative price-moving trades is shown in the report tables. The main takeaway here is that the direction of price-moving flow may be read alongside the sizeable unclear share.",
      "interpretation": "",
      "asymmetry": ""
    },
    "short_selling": {
      "overall": "Short activity does not appear to be the main issue in the tape. The clearer signals are a 73.1% drop in 1D average volume from the 1M average and a 1M share price decline of 11.0%, which matters more for current liquidity conditions than any separate short-driven pressure.",
      "level": "N/A",
      "correlation": "N/A",
      "trend": "There is no clear sign that short activity is changing the picture. Trading is being shaped more by weaker recent volume and a sector-led tape at 52.4%, so short selling does not stand out as a distinct driver of liquidity right now.",
      "peaks": "N/A"
    },
    "intraday": {
      "overall": "Liquidity appears through the day rather than at the edges, with 99.2% of activity in the continuous session. That matters because access is less dependent on the open or close auctions.",
      "hhi_interpretation": "Ambiguous or unclear flow is 24.1% of trade count, so the read is not fully clean.",
      "best_times": "The continuous session is the clearest source of liquidity because it accounts for nearly all activity, while the open and close contribute only 0.3% and 0.5%. That makes the middle of the day the most reliable window for observed flow.",
      "peer_ranking": "The intraday pattern looks stable because activity is spread across the continuous session, and the peer ranking in the report tables shows how that compares with similar stocks."
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
        "9939",
        "1763",
        "719",
        "2511",
        "6996",
        "6660",
        "6896",
        "3880",
        "9989"
      ],
      "scores": [
        71.25632049786076,
        70.51730844029561,
        73.317775184753,
        65.34422403733956,
        77.9852197588487,
        67.67794632438739,
        66.35550369506029,
        71.29521586931156,
        72.50097238428627
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
        4434860.0,
        3856538.0,
        6525825.675000001,
        1549077.5,
        10237478.75,
        1524209.0,
        2018517.5,
        3785218.0,
        3271620.0
      ],
      "total": 2571
    },
    "market_comparison": {
      "sector_name": "Pharmaceuticals",
      "sector_count": 53,
      "market_count": 2571,
      "company": {
        "volatility": 0.8733586098272835,
        "adv": 4434860.0,
        "spread_pct": 0.009492702705044449,
        "turnover_ratio": 0.004522637604795856,
        "amihud": 4.956114815592118e-09,
        "trades": 246.0
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
          "mean": 0.5193058937088781,
          "median": 0.4476921614282046,
          "min": 0.19970612017327674,
          "max": 1.1649651874303022,
          "p5": 0.22317267328051768,
          "p95": 1.0672056896446196,
          "count": 53
        },
        "adv": {
          "direction": "higher_is_better",
          "mean": 67353406.35915095,
          "median": 6525825.675000001,
          "min": 0.0,
          "max": 950720140.25,
          "p5": 11405.422,
          "p95": 348731711.7619997,
          "count": 53
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.017522622453806886,
          "median": 0.0076950053593886,
          "min": 0.0008497715783145334,
          "max": 0.10570336722186166,
          "p5": 0.0013374281483640544,
          "p95": 0.0678670855861365,
          "count": 53
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.004283456710778192,
          "median": 0.0033587627325250406,
          "min": 0.0,
          "max": 0.018679058670454822,
          "p5": 8.416679068952286e-05,
          "p95": 0.01342530627884636,
          "count": 53
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 2.0277462447754667e-07,
          "median": 2.1010294764693953e-09,
          "min": 1.779018177836386e-11,
          "max": 4.609721241765988e-06,
          "p5": 4.7447124001518325e-11,
          "p95": 1.0124884697617279e-06,
          "count": 53
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 1686.5283018867924,
          "median": 256.5,
          "min": 0.0,
          "max": 15929.5,
          "p5": 1.8,
          "p95": 7420.599999999995,
          "count": 53
        }
      },
      "peers": {
        "adv": {
          "direction": "higher_is_better",
          "mean": 4096060.553125,
          "median": 3528419.0,
          "min": 1524209.0,
          "max": 10237478.75,
          "p5": 1532912.975,
          "p95": 8938400.173749998,
          "count": 8
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 278.5625,
          "median": 173.25,
          "min": 85.0,
          "max": 1072.0,
          "p5": 98.65,
          "p95": 786.5749999999996,
          "count": 8
        },
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.444474063261797,
          "median": 0.43246688234142994,
          "min": 0.21688092500389403,
          "max": 0.7744221735189555,
          "p5": 0.22976842410874385,
          "p95": 0.7588637458188351,
          "count": 8
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.008787280865105683,
          "median": 0.008801836187953136,
          "min": 0.003435108749996745,
          "max": 0.01954850836393292,
          "p5": 0.003594203505195355,
          "p95": 0.016580214047596548,
          "count": 8
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 5.192568855313358e-09,
          "median": 3.113708817257694e-09,
          "min": 1.0724024929024933e-09,
          "max": 1.6930176305703723e-08,
          "p5": 1.4280674267736572e-09,
          "p95": 1.439310937896249e-08,
          "count": 8
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.0034479625344973827,
          "median": 0.003427395822714164,
          "min": 0.0008325420464167552,
          "max": 0.00604799873079085,
          "p5": 0.0009799317599525899,
          "p95": 0.005834193883698905,
          "count": 8
        },
        "spread_ticks": {
          "direction": "neutral",
          "mean": 3.03773075347377,
          "median": 2.497884645582201,
          "min": 2.098492658544205,
          "max": 5.904570109377802,
          "p5": 2.1093750258425024,
          "p95": 5.1998101655380555,
          "count": 6
        }
      }
    },
    "returns": [
      {
        "horizon": "1M",
        "stock": -0.10999999999999988,
        "market": 0.02409148729213495,
        "sector": -0.0023308781627467967,
        "peers": -0.025589758482583047
      },
      {
        "horizon": "3M",
        "stock": 0.14592274678111727,
        "market": 0.0420090494699672,
        "sector": -0.10524730495191637,
        "peers": -0.13329279518944748
      },
      {
        "horizon": "6M",
        "stock": 0.09876543209876609,
        "market": 0.09531099833042789,
        "sector": -0.2268754318581383,
        "peers": -0.25878223655823895
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
      "share_market": 0.2860132473284565,
      "share_sector": 0.5236857222998984,
      "share_idio": 0.19030103037164514,
      "beta_market": 3.9187998495574154,
      "beta_sector": -3.7412854108385645,
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
            "median": 0.2860132473284565,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "28.6%",
            "display_range": null,
            "display_text": "28.6%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "share_pct",
            "value_pct": 28.6,
            "plain_english": "Market explains about 28.6% of price moves in the current state."
          },
          "sector_share": {
            "median": 0.5236857222998984,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "52.4%",
            "display_range": null,
            "display_text": "52.4%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "share_pct",
            "value_pct": 52.4,
            "plain_english": "Sector explains about 52.4% of price moves in the current state."
          },
          "company_share": {
            "median": 0.19030103037164514,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "19.0%",
            "display_range": null,
            "display_text": "19.0%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "share_pct",
            "value_pct": 19.0,
            "plain_english": "Company-specific explains about 19.0% of price moves in the current state."
          },
          "basis": "current_state"
        },
        "current_sensitivities": {
          "beta_market": {
            "median": 3.9187998495574154,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "3.92",
            "display_range": null,
            "display_text": "3.92",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "beta",
            "strength_label": "Very high",
            "plain_english": "Very high market link: a 1% market move has lined up with about a 3.92% stock move in the same direction in this state.",
            "value_num": 3.92
          },
          "beta_stock_lag": {
            "median": 1.4231476650939892,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "1.42",
            "display_range": null,
            "display_text": "1.42",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "lag_beta",
            "value_num": 1.42
          },
          "beta_sector": {
            "median": -3.7412854108385645,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "-3.74",
            "display_range": null,
            "display_text": "-3.74",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "beta",
            "strength_label": "Very high",
            "plain_english": "Very high sector link: a 1% sector move has lined up with about a 3.74% stock move in the opposite direction in this state.",
            "value_num": -3.74
          },
          "beta_market_lag": {
            "median": 1.9434962732746648,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "1.94",
            "display_range": null,
            "display_text": "1.94",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "lag_beta",
            "value_num": 1.94
          },
          "beta_sector_lag": {
            "median": 8.381484254725256,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "8.38",
            "display_range": null,
            "display_text": "8.38",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "lag_beta",
            "value_num": 8.38
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
              "median": 0.5870695680378831,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "58.7%",
              "display_range": null,
              "display_text": "58.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 16 trading days.",
              "kind": "share_pct",
              "value_pct": 58.7,
              "plain_english": "Sector explains about 58.7% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.20663875511064334,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "20.7%",
                "display_range": null,
                "display_text": "20.7%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 16 trading days.",
                "kind": "share_pct",
                "value_pct": 20.7,
                "plain_english": "Market explains about 20.7% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.5870695680378831,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "58.7%",
                "display_range": null,
                "display_text": "58.7%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 16 trading days.",
                "kind": "share_pct",
                "value_pct": 58.7,
                "plain_english": "Sector explains about 58.7% of price moves in the current state."
              },
              "company_share": {
                "median": 0.20629167685147354,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "20.6%",
                "display_range": null,
                "display_text": "20.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 16 trading days.",
                "kind": "share_pct",
                "value_pct": 20.6,
                "plain_english": "Company-specific explains about 20.6% of price moves in the current state."
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
            "dominant_driver": "company",
            "dominant_driver_label": "Company-specific",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.5098955984387912,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "51.0%",
              "display_range": null,
              "display_text": "51.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 51.0,
              "plain_english": "Company-specific explains about 51.0% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.09468159257124938,
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
                "plain_english": "Market explains about 9.5% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.3954228089899596,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "39.5%",
                "display_range": null,
                "display_text": "39.5%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 39.5,
                "plain_english": "Sector explains about 39.5% of price moves in the current state."
              },
              "company_share": {
                "median": 0.5098955984387912,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "51.0%",
                "display_range": null,
                "display_text": "51.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 51.0,
                "plain_english": "Company-specific explains about 51.0% of price moves in the current state."
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
              "median": 0.46242197089207737,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "46.2%",
              "display_range": null,
              "display_text": "46.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 46.2,
              "plain_english": "Company-specific explains about 46.2% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.14601206113376963,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "14.6%",
                "display_range": null,
                "display_text": "14.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 14.6,
                "plain_english": "Market explains about 14.6% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.391565967974153,
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
                "plain_english": "Sector explains about 39.2% of price moves in the current state."
              },
              "company_share": {
                "median": 0.46242197089207737,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "46.2%",
                "display_range": null,
                "display_text": "46.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 46.2,
                "plain_english": "Company-specific explains about 46.2% of price moves in the current state."
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
              "median": 0.5649743310573022,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "56.5%",
              "display_range": null,
              "display_text": "56.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 56.5,
              "plain_english": "Company-specific explains about 56.5% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.11811677522392164,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "11.8%",
                "display_range": null,
                "display_text": "11.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 11.8,
                "plain_english": "Market explains about 11.8% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.3169088937187763,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "31.7%",
                "display_range": null,
                "display_text": "31.7%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 31.7,
                "plain_english": "Sector explains about 31.7% of price moves in the current state."
              },
              "company_share": {
                "median": 0.5649743310573022,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "56.5%",
                "display_range": null,
                "display_text": "56.5%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 56.5,
                "plain_english": "Company-specific explains about 56.5% of price moves in the current state."
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
            "dominant_driver": "sector",
            "dominant_driver_label": "Sector",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.5196185314556482,
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
              "plain_english": "Sector explains about 52.0% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.08505690102107066,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "8.5%",
                "display_range": null,
                "display_text": "8.5%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 8.5,
                "plain_english": "Market explains about 8.5% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.5196185314556482,
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
                "plain_english": "Sector explains about 52.0% of price moves in the current state."
              },
              "company_share": {
                "median": 0.3953245675232811,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "39.5%",
                "display_range": null,
                "display_text": "39.5%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 39.5,
                "plain_english": "Company-specific explains about 39.5% of price moves in the current state."
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
              "median": 0.3710765718045118,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "37.1%",
              "display_range": null,
              "display_text": "37.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 37.1,
              "plain_english": "Sector explains about 37.1% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.30619301512884745,
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
                "median": 0.3710765718045118,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "37.1%",
                "display_range": null,
                "display_text": "37.1%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 37.1,
                "plain_english": "Sector explains about 37.1% of price moves in the current state."
              },
              "company_share": {
                "median": 0.3227304130666408,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "32.3%",
                "display_range": null,
                "display_text": "32.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 32.3,
                "plain_english": "Company-specific explains about 32.3% of price moves in the current state."
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
              "median": 0.40777559035251953,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "40.8%",
              "display_range": null,
              "display_text": "40.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 40.8,
              "plain_english": "Company-specific explains about 40.8% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.2823002747040595,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "28.2%",
                "display_range": null,
                "display_text": "28.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 28.2,
                "plain_english": "Market explains about 28.2% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.30992413494342097,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "31.0%",
                "display_range": null,
                "display_text": "31.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 31.0,
                "plain_english": "Sector explains about 31.0% of price moves in the current state."
              },
              "company_share": {
                "median": 0.40777559035251953,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "40.8%",
                "display_range": null,
                "display_text": "40.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 40.8,
                "plain_english": "Company-specific explains about 40.8% of price moves in the current state."
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
            "dominant_driver": "company",
            "dominant_driver_label": "Company-specific",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.4188524066812337,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "41.9%",
              "display_range": null,
              "display_text": "41.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 41.9,
              "plain_english": "Company-specific explains about 41.9% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.23664481037454532,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "23.7%",
                "display_range": null,
                "display_text": "23.7%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 23.7,
                "plain_english": "Market explains about 23.7% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.34450278294422104,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "34.5%",
                "display_range": null,
                "display_text": "34.5%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 34.5,
                "plain_english": "Sector explains about 34.5% of price moves in the current state."
              },
              "company_share": {
                "median": 0.4188524066812337,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "41.9%",
                "display_range": null,
                "display_text": "41.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 41.9,
                "plain_english": "Company-specific explains about 41.9% of price moves in the current state."
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
            "dominant_driver": "company",
            "dominant_driver_label": "Company-specific",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.47005799397535836,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "47.0%",
              "display_range": null,
              "display_text": "47.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
              "kind": "share_pct",
              "value_pct": 47.0,
              "plain_english": "Company-specific explains about 47.0% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.2430866852120731,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "24.3%",
                "display_range": null,
                "display_text": "24.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
                "kind": "share_pct",
                "value_pct": 24.3,
                "plain_english": "Market explains about 24.3% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.2868553208125686,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "28.7%",
                "display_range": null,
                "display_text": "28.7%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
                "kind": "share_pct",
                "value_pct": 28.7,
                "plain_english": "Sector explains about 28.7% of price moves in the current state."
              },
              "company_share": {
                "median": 0.47005799397535836,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "47.0%",
                "display_range": null,
                "display_text": "47.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
                "kind": "share_pct",
                "value_pct": 47.0,
                "plain_english": "Company-specific explains about 47.0% of price moves in the current state."
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
              "median": 0.5319624292625686,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "53.2%",
              "display_range": null,
              "display_text": "53.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 53.2,
              "plain_english": "Company-specific explains about 53.2% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.2519531172165297,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "25.2%",
                "display_range": null,
                "display_text": "25.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 25.2,
                "plain_english": "Market explains about 25.2% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.2160844535209017,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "21.6%",
                "display_range": null,
                "display_text": "21.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 21.6,
                "plain_english": "Sector explains about 21.6% of price moves in the current state."
              },
              "company_share": {
                "median": 0.5319624292625686,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "53.2%",
                "display_range": null,
                "display_text": "53.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 53.2,
                "plain_english": "Company-specific explains about 53.2% of price moves in the current state."
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
            "dominant_driver": "sector",
            "dominant_driver_label": "Sector",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.4321610660072588,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "43.2%",
              "display_range": null,
              "display_text": "43.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
              "kind": "share_pct",
              "value_pct": 43.2,
              "plain_english": "Sector explains about 43.2% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.2062158589691925,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "20.6%",
                "display_range": null,
                "display_text": "20.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
                "kind": "share_pct",
                "value_pct": 20.6,
                "plain_english": "Market explains about 20.6% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.4321610660072588,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "43.2%",
                "display_range": null,
                "display_text": "43.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
                "kind": "share_pct",
                "value_pct": 43.2,
                "plain_english": "Sector explains about 43.2% of price moves in the current state."
              },
              "company_share": {
                "median": 0.3616230750235487,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "36.2%",
                "display_range": null,
                "display_text": "36.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
                "kind": "share_pct",
                "value_pct": 36.2,
                "plain_english": "Company-specific explains about 36.2% of price moves in the current state."
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
              "median": 0.4282771050311909,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "42.8%",
              "display_range": null,
              "display_text": "42.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 42.8,
              "plain_english": "Sector explains about 42.8% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.276550634431489,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "27.7%",
                "display_range": null,
                "display_text": "27.7%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 27.7,
                "plain_english": "Market explains about 27.7% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.4282771050311909,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "42.8%",
                "display_range": null,
                "display_text": "42.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 42.8,
                "plain_english": "Sector explains about 42.8% of price moves in the current state."
              },
              "company_share": {
                "median": 0.2951722605373202,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "29.5%",
                "display_range": null,
                "display_text": "29.5%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 29.5,
                "plain_english": "Company-specific explains about 29.5% of price moves in the current state."
              }
            },
            "summary": "Mar: More mixed, though sector-driven still has the largest share."
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
              "median": 0.6628831202917242,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "66.3%",
              "display_range": null,
              "display_text": "66.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 14 trading days.",
              "kind": "share_pct",
              "value_pct": 66.3,
              "plain_english": "Company-specific explains about 66.3% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.15384747245527325,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "15.4%",
                "display_range": null,
                "display_text": "15.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 14 trading days.",
                "kind": "share_pct",
                "value_pct": 15.4,
                "plain_english": "Market explains about 15.4% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.18326940725300253,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "18.3%",
                "display_range": null,
                "display_text": "18.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 14 trading days.",
                "kind": "share_pct",
                "value_pct": 18.3,
                "plain_english": "Sector explains about 18.3% of price moves in the current state."
              },
              "company_share": {
                "median": 0.6628831202917242,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "66.3%",
                "display_range": null,
                "display_text": "66.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 14 trading days.",
                "kind": "share_pct",
                "value_pct": 66.3,
                "plain_english": "Company-specific explains about 66.3% of price moves in the current state."
              }
            },
            "summary": "Apr: Still clearly company-driven."
          }
        ],
        "regimes": [
          {
            "id": 0,
            "label": "Low Volatility",
            "pct_time": 0.5020080321285141,
            "expected_duration_days": 9.615384615384615,
            "current_probability": 0.0,
            "n_days_effective": 125.0,
            "volatility": {
              "median": 0.0313415844486738,
              "low": 0.0313415844486738,
              "high": 0.0313415844486738
            },
            "volatility_label": "Low Volatility",
            "current_probability_display": 0.0
          },
          {
            "id": 1,
            "label": "High Volatility",
            "pct_time": 0.4979919678714859,
            "expected_duration_days": 8.857142857142858,
            "current_probability": 1.0,
            "n_days_effective": 124.0,
            "volatility": {
              "median": 0.06625289661716138,
              "low": 0.06625289661716138,
              "high": 0.06625289661716138
            },
            "volatility_label": "High Volatility",
            "current_probability_display": null
          }
        ],
        "transitions": {
          "mean": [
            [
              0.896,
              0.104
            ],
            [
              0.10569105691056911,
              0.8943089430894309
            ]
          ],
          "low": [],
          "high": [],
          "counts": [
            [
              112.0,
              13.0
            ],
            [
              13.0,
              110.0
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
          "market_link_display": "3.92",
          "sector_link_display": "-3.74",
          "market_link_explainer": "Very high market link. A 1% market move has lined up with about a 3.92% stock move in the same direction in this state. This is a point estimate from 251 trading days.",
          "sector_link_explainer": "Very high sector link. A 1% sector move has lined up with about a 3.74% stock move in the opposite direction in this state. This is a point estimate from 251 trading days.",
          "stock_persistence_display": "1.42",
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "history_limited_note": "Read is based on 251 trading days versus the 252-day target."
        },
        "current_summary": {
          "regime_label": "High Volatility",
          "dominant_driver": "sector",
          "dominant_driver_label": "Sector",
          "driver_share_pct": 52.4,
          "driver_share_display": "52.4%",
          "confidence_label": "High, limited history",
          "confidence_pct": 100.0,
          "display_confidence_pct": null,
          "confidence_note": "Based on 251 trading days relative to the 252-day target.",
          "history_days": 251,
          "history_limited": true,
          "volatility_label": "High Volatility",
          "lead_signal_text": "No stable lead signal.",
          "state_term": "state",
          "stay_probability": 0.8943089430894309,
          "effective_days": 124.0,
          "persistence_note": "This state looks more persistent, with a typical run length of about 8.9 days.",
          "expected_duration_days": 8.9
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
          "share_market": 0.20663875511064334,
          "share_sector": 0.5870695680378831,
          "share_company": 0.20629167685147354,
          "share_market_display": "20.7%",
          "share_sector_display": "58.7%",
          "share_company_display": "20.6%",
          "dominant_share_display": "58.7%"
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
          "share_market": 0.09468159257124938,
          "share_sector": 0.3954228089899596,
          "share_company": 0.5098955984387912,
          "share_market_display": "9.5%",
          "share_sector_display": "39.5%",
          "share_company_display": "51.0%",
          "dominant_share_display": "51.0%"
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
          "share_market": 0.14601206113376963,
          "share_sector": 0.391565967974153,
          "share_company": 0.46242197089207737,
          "share_market_display": "14.6%",
          "share_sector_display": "39.2%",
          "share_company_display": "46.2%",
          "dominant_share_display": "46.2%"
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
          "share_market": 0.11811677522392164,
          "share_sector": 0.3169088937187763,
          "share_company": 0.5649743310573022,
          "share_market_display": "11.8%",
          "share_sector_display": "31.7%",
          "share_company_display": "56.5%",
          "dominant_share_display": "56.5%"
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
          "regime_label": null,
          "summary": "Aug: Mostly sector-driven.",
          "share_market": 0.08505690102107066,
          "share_sector": 0.5196185314556482,
          "share_company": 0.3953245675232811,
          "share_market_display": "8.5%",
          "share_sector_display": "52.0%",
          "share_company_display": "39.5%",
          "dominant_share_display": "52.0%"
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
          "summary": "Sep: Much more balanced across company, sector, and market factors.",
          "share_market": 0.30619301512884745,
          "share_sector": 0.3710765718045118,
          "share_company": 0.3227304130666408,
          "share_market_display": "30.6%",
          "share_sector_display": "37.1%",
          "share_company_display": "32.3%",
          "dominant_share_display": "37.1%"
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
          "share_market": 0.2823002747040595,
          "share_sector": 0.30992413494342097,
          "share_company": 0.40777559035251953,
          "share_market_display": "28.2%",
          "share_sector_display": "31.0%",
          "share_company_display": "40.8%",
          "dominant_share_display": "40.8%"
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
          "share_market": 0.23664481037454532,
          "share_sector": 0.34450278294422104,
          "share_company": 0.4188524066812337,
          "share_market_display": "23.7%",
          "share_sector_display": "34.5%",
          "share_company_display": "41.9%",
          "dominant_share_display": "41.9%"
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
          "summary": "Dec: Mostly company-driven.",
          "share_market": 0.2430866852120731,
          "share_sector": 0.2868553208125686,
          "share_company": 0.47005799397535836,
          "share_market_display": "24.3%",
          "share_sector_display": "28.7%",
          "share_company_display": "47.0%",
          "dominant_share_display": "47.0%"
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
          "share_market": 0.2519531172165297,
          "share_sector": 0.2160844535209017,
          "share_company": 0.5319624292625686,
          "share_market_display": "25.2%",
          "share_sector_display": "21.6%",
          "share_company_display": "53.2%",
          "dominant_share_display": "53.2%"
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
          "summary": "Feb: More mixed, though sector-driven still has the largest share.",
          "share_market": 0.2062158589691925,
          "share_sector": 0.4321610660072588,
          "share_company": 0.3616230750235487,
          "share_market_display": "20.6%",
          "share_sector_display": "43.2%",
          "share_company_display": "36.2%",
          "dominant_share_display": "43.2%"
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
          "share_market": 0.276550634431489,
          "share_sector": 0.4282771050311909,
          "share_company": 0.2951722605373202,
          "share_market_display": "27.7%",
          "share_sector_display": "42.8%",
          "share_company_display": "29.5%",
          "dominant_share_display": "42.8%"
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
          "summary": "Apr: Still clearly company-driven.",
          "share_market": 0.15384747245527325,
          "share_sector": 0.18326940725300253,
          "share_company": 0.6628831202917242,
          "share_market_display": "15.4%",
          "share_sector_display": "18.3%",
          "share_company_display": "66.3%",
          "dominant_share_display": "66.3%"
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
            "expected_duration_days": 9.615384615384615,
            "current_probability": 0.0,
            "n_days_effective": 125.0,
            "volatility": {
              "median": 0.0313415844486738,
              "low": 0.0313415844486738,
              "high": 0.0313415844486738
            },
            "volatility_label": "Low Volatility"
          },
          {
            "id": 1,
            "label": "High Volatility",
            "pct_time": 0.4979919678714859,
            "expected_duration_days": 8.857142857142858,
            "current_probability": 1.0,
            "n_days_effective": 124.0,
            "volatility": {
              "median": 0.06625289661716138,
              "low": 0.06625289661716138,
              "high": 0.06625289661716138
            },
            "volatility_label": "High Volatility"
          }
        ],
        "transitions": [
          [
            0.896,
            0.104
          ],
          [
            0.10569105691056911,
            0.8943089430894309
          ]
        ]
      }
    },
    "order_book": {
      "bids": [
        {
          "level": 1,
          "price": 2.67,
          "quantity": 20000.0,
          "value": 53400.0
        },
        {
          "level": 2,
          "price": 2.66,
          "quantity": 199500.0,
          "value": 530670.0
        },
        {
          "level": 3,
          "price": 2.65,
          "quantity": 112500.0,
          "value": 298125.0
        },
        {
          "level": 4,
          "price": 2.64,
          "quantity": 500.0,
          "value": 1320.0
        },
        {
          "level": 5,
          "price": 2.63,
          "quantity": 33500.0,
          "value": 88105.0
        },
        {
          "level": 6,
          "price": 2.62,
          "quantity": 44500.0,
          "value": 116590.0
        },
        {
          "level": 7,
          "price": 2.61,
          "quantity": 22500.0,
          "value": 58725.0
        },
        {
          "level": 8,
          "price": 2.6,
          "quantity": 147500.0,
          "value": 383500.0
        },
        {
          "level": 9,
          "price": 2.59,
          "quantity": 2500.0,
          "value": 6475.0
        },
        {
          "level": 10,
          "price": 2.58,
          "quantity": 100000.0,
          "value": 258000.0
        },
        {
          "level": 11,
          "price": 2.57,
          "quantity": 2500.0,
          "value": 6425.0
        },
        {
          "level": 12,
          "price": 2.56,
          "quantity": 5500.0,
          "value": 14080.0
        },
        {
          "level": 13,
          "price": 2.55,
          "quantity": 9000.0,
          "value": 22950.0
        },
        {
          "level": 14,
          "price": 2.5,
          "quantity": 14000.0,
          "value": 35000.0
        },
        {
          "level": 15,
          "price": 2.47,
          "quantity": 10000.0,
          "value": 24700.000000000004
        },
        {
          "level": 16,
          "price": 2.45,
          "quantity": 2000.0,
          "value": 4900.0
        },
        {
          "level": 17,
          "price": 2.41,
          "quantity": 4000.0,
          "value": 9640.0
        },
        {
          "level": 18,
          "price": 2.4,
          "quantity": 11000.0,
          "value": 26400.0
        },
        {
          "level": 19,
          "price": 2.29,
          "quantity": 2000.0,
          "value": 4580.0
        }
      ],
      "asks": [
        {
          "level": 1,
          "price": 2.68,
          "quantity": 56000.0,
          "value": 150080.0
        },
        {
          "level": 2,
          "price": 2.7,
          "quantity": 5500.0,
          "value": 14850.000000000002
        },
        {
          "level": 3,
          "price": 2.71,
          "quantity": 1000.0,
          "value": 2710.0
        },
        {
          "level": 4,
          "price": 2.74,
          "quantity": 13000.0,
          "value": 35620.0
        },
        {
          "level": 5,
          "price": 2.75,
          "quantity": 39500.0,
          "value": 108625.0
        },
        {
          "level": 6,
          "price": 2.78,
          "quantity": 15000.0,
          "value": 41700.0
        },
        {
          "level": 7,
          "price": 2.79,
          "quantity": 10000.0,
          "value": 27900.0
        },
        {
          "level": 8,
          "price": 2.8,
          "quantity": 161500.0,
          "value": 452200.0
        },
        {
          "level": 9,
          "price": 2.81,
          "quantity": 10000.0,
          "value": 28100.0
        },
        {
          "level": 10,
          "price": 2.87,
          "quantity": 20000.0,
          "value": 57400.0
        },
        {
          "level": 11,
          "price": 2.9,
          "quantity": 10000.0,
          "value": 29000.0
        },
        {
          "level": 12,
          "price": 2.95,
          "quantity": 5000.0,
          "value": 14750.0
        },
        {
          "level": 13,
          "price": 2.96,
          "quantity": 1500.0,
          "value": 4440.0
        },
        {
          "level": 14,
          "price": 2.98,
          "quantity": 5000.0,
          "value": 14900.0
        },
        {
          "level": 15,
          "price": 3.0,
          "quantity": 77000.0,
          "value": 231000.0
        },
        {
          "level": 16,
          "price": 3.01,
          "quantity": 61000.0,
          "value": 183610.0
        }
      ]
    },
    "execution_dynamic": {
      "snapshot": {
        "valid": true,
        "snapshot_time": "2026-04-23 07:59:31.006000000",
        "snapshot_basis": "last_continuous_session_snapshot",
        "snapshot_label": "final continuous-session displayed book before close",
        "snapshot_note": "Final continuous-session displayed book before close",
        "snapshot_mic": "XHKG",
        "mid_price": 2.675,
        "spread_pct": 0.0037383177570094327,
        "spread_ticks": 1.0,
        "tick_size": 0.01,
        "displayed_levels_per_side": 100,
        "bid_depth_notional_displayed": 1943585.0,
        "ask_depth_notional_displayed": 1396885.0,
        "bid_depth_notional_top10": 1943585.0,
        "ask_depth_notional_top10": 1396885.0,
        "bid_ask_depth_ratio": 1.3914
      },
      "historical_trade_scenarios": {
        "valid": true,
        "requested_lookback_calendar_days": 365,
        "lookback_calendar_days": 365,
        "effective_calendar_days": 366,
        "history_limited": false,
        "trade_days_used": 241,
        "n_trades_used": 129158,
        "first_trade_date": "2025-04-23",
        "last_trade_date": "2026-04-23",
        "window_label": "Apr 23, 2025 to Apr 23, 2026",
        "window_short_label": "Apr 23, 2025 to Apr 23, 2026",
        "trade_days_label": "241 trading days",
        "trade_count_label": "129,158 trades",
        "window_detail_label": "241 trading days • 129,158 trades",
        "history_note": "Trade-size percentiles use Apr 23, 2025 to Apr 23, 2026 history (241 trading days • 129,158 trades).",
        "scenarios": [
          {
            "key": "p90",
            "label": "90th percentile trade",
            "quantile": 0.9,
            "trade_notional": 41800.0,
            "impact_pct": -0.001869,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 2.15,
            "pct_of_adv": 0.66
          },
          {
            "key": "p95",
            "label": "95th percentile trade",
            "quantile": 0.95,
            "trade_notional": 65090.0,
            "impact_pct": -0.002543,
            "filled_pct": 100.0,
            "levels_consumed": 2,
            "pct_of_bid_depth": 3.35,
            "pct_of_adv": 1.03
          },
          {
            "key": "p99_99",
            "label": "99.99th percentile trade",
            "quantile": 0.9999,
            "trade_notional": 1297550.93,
            "impact_pct": -0.011944,
            "filled_pct": 100.0,
            "levels_consumed": 8,
            "pct_of_bid_depth": 66.76,
            "pct_of_adv": 20.5
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
            "order_id": "14833155",
            "timestamp": "2026-04-23 01:20:18.277000000",
            "local_timestamp": "2026-04-23 09:20:18",
            "posted_price": 3.01,
            "size_shares": 61000.0,
            "notional": 183610.0,
            "impact_pct": -0.004523,
            "filled_pct": 100.0,
            "levels_consumed": 2,
            "pct_of_bid_depth": 9.45,
            "price_vs_mid_pct": 12.523,
            "executed_event_count": 0,
            "event_count": 1
          },
          {
            "rank": 2,
            "order_id": "11878659",
            "timestamp": "2026-04-23 01:20:18.277000000",
            "local_timestamp": "2026-04-23 09:20:18",
            "posted_price": 2.8,
            "size_shares": 51500.0,
            "notional": 144200.0,
            "impact_pct": -0.004226,
            "filled_pct": 100.0,
            "levels_consumed": 2,
            "pct_of_bid_depth": 7.42,
            "price_vs_mid_pct": 4.673,
            "executed_event_count": 0,
            "event_count": 1
          },
          {
            "rank": 3,
            "order_id": "11349251",
            "timestamp": "2026-04-23 01:20:18.277000000",
            "local_timestamp": "2026-04-23 09:20:18",
            "posted_price": 3.0,
            "size_shares": 46500.0,
            "notional": 139500.0,
            "impact_pct": -0.00418,
            "filled_pct": 100.0,
            "levels_consumed": 2,
            "pct_of_bid_depth": 7.18,
            "price_vs_mid_pct": 12.15,
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
        "tick_size": 0.01,
        "timezone": "HKT (UTC+8)",
        "session_label": "HKEX continuous trading session",
        "bucket_label_basis": "bucket start time",
        "display_window_label": "HKEX continuous trading session",
        "bucket_note": "Buckets are shown in local market time and labeled by bucket start.",
        "reason": null,
        "rows": [
          {
            "bucket": "09:30",
            "spread_pct": 0.01113172541743963,
            "spread_ticks": 2.9999999999999805,
            "bid_depth_notional": 2296025.0,
            "ask_depth_notional": 1256545.0,
            "mid_price": 2.6950000000000003
          },
          {
            "bucket": "10:00",
            "spread_pct": 0.01113172541743963,
            "spread_ticks": 2.9999999999999805,
            "bid_depth_notional": 2283230.0,
            "ask_depth_notional": 1256545.0,
            "mid_price": 2.6950000000000003
          },
          {
            "bucket": "10:30",
            "spread_pct": 0.0037383177570094323,
            "spread_ticks": 1.000000000000023,
            "bid_depth_notional": 2112415.0,
            "ask_depth_notional": 1237675.0,
            "mid_price": 2.675
          },
          {
            "bucket": "11:00",
            "spread_pct": 0.0037383177570094323,
            "spread_ticks": 1.000000000000023,
            "bid_depth_notional": 1802385.0,
            "ask_depth_notional": 1207395.0,
            "mid_price": 2.675
          },
          {
            "bucket": "11:30",
            "spread_pct": 0.0075187969924812095,
            "spread_ticks": 2.0000000000000018,
            "bid_depth_notional": 1332095.0,
            "ask_depth_notional": 1197640.0,
            "mid_price": 2.66
          },
          {
            "bucket": "13:00",
            "spread_pct": 0.0075187969924812095,
            "spread_ticks": 2.0000000000000018,
            "bid_depth_notional": 1700510.0,
            "ask_depth_notional": 1494075.0,
            "mid_price": 2.66
          },
          {
            "bucket": "13:30",
            "spread_pct": 0.007490636704119857,
            "spread_ticks": 2.0000000000000018,
            "bid_depth_notional": 1756330.0,
            "ask_depth_notional": 1455500.0,
            "mid_price": 2.67
          },
          {
            "bucket": "14:00",
            "spread_pct": 0.0037523452157597697,
            "spread_ticks": 0.9999999999999787,
            "bid_depth_notional": 1975780.0,
            "ask_depth_notional": 1455360.0,
            "mid_price": 2.665
          },
          {
            "bucket": "14:30",
            "spread_pct": 0.0037523452157597697,
            "spread_ticks": 0.9999999999999787,
            "bid_depth_notional": 1949180.0,
            "ask_depth_notional": 1398190.0,
            "mid_price": 2.665
          },
          {
            "bucket": "15:00",
            "spread_pct": 0.0037523452157597697,
            "spread_ticks": 0.9999999999999787,
            "bid_depth_notional": 1925120.0,
            "ask_depth_notional": 1452925.0,
            "mid_price": 2.665
          },
          {
            "bucket": "15:30",
            "spread_pct": 0.0037383177570094323,
            "spread_ticks": 1.000000000000023,
            "bid_depth_notional": 1943585.0,
            "ask_depth_notional": 1396885.0,
            "mid_price": 2.675
          }
        ],
        "summary": {
          "median_spread_pct": 0.0037523452157597697,
          "median_spread_ticks": 1.000000000000023,
          "median_bid_depth_notional": 1943585.0,
          "median_ask_depth_notional": 1396885.0,
          "tightest_bucket": "10:30",
          "widest_bucket": "09:30",
          "deepest_bid_bucket": "09:30",
          "thinnest_bid_bucket": "11:30"
        }
      }
    },
    "peer_capacity": {
      "bx_ticket_pct_adv_50k": 0.8,
      "peers": [
        {
          "ticker": "6996",
          "pct": 6.4
        },
        {
          "ticker": "1763",
          "pct": 30.7
        },
        {
          "ticker": "719",
          "pct": 35.1
        },
        {
          "ticker": "2511",
          "pct": 37.0
        },
        {
          "ticker": "3880",
          "pct": 43.3
        },
        {
          "ticker": "6660",
          "pct": 44.5
        },
        {
          "ticker": "6896",
          "pct": 54.3
        },
        {
          "ticker": "9989",
          "pct": 62.4
        }
      ]
    },
    "trader_composition": {
      "primary_period": "6m",
      "periods": {
        "1d": {
          "valid": true,
          "currency": "HKD",
          "n_trades": 89,
          "n_runs": 34,
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
            "retail_pct": 0.23595505617977527,
            "mixed_pct": 0.23595505617977527,
            "instit_pct": 0.19101123595505617,
            "ambiguous_pct": 0.33707865168539325,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.33707865168539325,
            "retail_qty_pct": 0.05859969558599695,
            "mixed_qty_pct": 0.213089802130898,
            "instit_qty_pct": 0.4444444444444444,
            "ambiguous_qty_pct": 0.2838660578386606,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.2838660578386606,
            "retail_notional_pct": 0.05863043676483998,
            "mixed_notional_pct": 0.21302543995623233,
            "instit_notional_pct": 0.4446435898604906,
            "ambiguous_notional_pct": 0.28370053341843715,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.28370053341843715
          },
          "run_composition": {
            "retail_pct": 0.38235294117647056,
            "mixed_pct": 0.35294117647058826,
            "instit_pct": 0.11764705882352941,
            "ambiguous_pct": 0.14705882352941177,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.14705882352941177,
            "retail_notional_pct": 0.054362061251881075,
            "mixed_notional_pct": 0.3040631227884654,
            "instit_notional_pct": 0.5005816081669174,
            "unclear_notional_pct": 0.140993207792736
          },
          "counts": {
            "trades": {
              "retail": 21,
              "mixed": 21,
              "institutional": 17,
              "ambiguous": 30,
              "unobservable": 0,
              "unclear": 30
            },
            "runs": {
              "retail": 13,
              "mixed": 12,
              "institutional": 4,
              "ambiguous": 5,
              "unobservable": 0,
              "unclear": 5
            }
          },
          "confidence": {
            "high": 0.5,
            "medium": 0.35294117647058826,
            "low": 0.14705882352941177,
            "na": 0.0
          },
          "confidence_counts": {
            "high": 17,
            "medium": 12,
            "low": 5,
            "na": 0
          },
          "trade_confidence": {
            "high": 0.30337078651685395,
            "medium": 0.23595505617977527,
            "low": 0.4606741573033708,
            "na": 0.0
          },
          "trade_confidence_counts": {
            "high": 27,
            "medium": 21,
            "low": 41,
            "na": 0
          },
          "observability": {
            "avg_feature_coverage": 0.8676470588235297,
            "observable_run_pct": 1.0,
            "ambiguous_run_pct": 0.14705882352941177,
            "unobservable_run_pct": 0.0
          },
          "dominant_bucket": "RETAIL",
          "dominant_label": "Mixed, leaning retail-like",
          "dominant_share": 0.38235294117647056,
          "dominance_gap": 0.029411764705882304,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 41,
              "UNOBSERVABLE": 34,
              "WALK_BOOK": 14
            },
            "d2_information": {
              "UNOBSERVABLE": 89
            },
            "d3_urgency": {
              "UNOBSERVABLE": 34
            },
            "participant_confidence": {
              "HIGH": 17,
              "MEDIUM": 12,
              "LOW": 5
            }
          },
          "trade_size": {
            "avg": 19715.955056179777,
            "median": 13300.0
          },
          "run_size": {
            "avg": 36157.35294117647,
            "median": 18655.0,
            "avg_length": 1.1176470588235294
          },
          "recent_trades": [
            {
              "trade_id": "89",
              "timestamp": "2026-04-23T07:53:42.454441",
              "price": 2.67,
              "size": 1000.0,
              "notional": 2670.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 38442,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "88",
              "timestamp": "2026-04-23T07:53:41.862875",
              "price": 2.67,
              "size": 6000.0,
              "notional": 16020.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 38442,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "87",
              "timestamp": "2026-04-23T07:51:42.919283",
              "price": 2.67,
              "size": 1000.0,
              "notional": 2670.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "86",
              "timestamp": "2026-04-23T07:51:42.919283",
              "price": 2.67,
              "size": 5500.0,
              "notional": 14685.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "85",
              "timestamp": "2026-04-23T07:51:42.919283",
              "price": 2.67,
              "size": 2000.0,
              "notional": 5340.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "84",
              "timestamp": "2026-04-23T07:51:42.910882",
              "price": 2.67,
              "size": 20500.0,
              "notional": 54735.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "83",
              "timestamp": "2026-04-23T07:51:42.910882",
              "price": 2.67,
              "size": 9500.0,
              "notional": 25365.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "82",
              "timestamp": "2026-04-23T07:50:33.436622",
              "price": 2.67,
              "size": 1000.0,
              "notional": 2670.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 38441,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "81",
              "timestamp": "2026-04-23T07:42:27.510261",
              "price": 2.66,
              "size": 10000.0,
              "notional": 26600.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 38440,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "80",
              "timestamp": "2026-04-23T07:29:49.308223",
              "price": 2.66,
              "size": 9000.0,
              "notional": 23940.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 38439,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "79",
              "timestamp": "2026-04-23T07:22:03.033049",
              "price": 2.66,
              "size": 9000.0,
              "notional": 23940.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 38438,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "78",
              "timestamp": "2026-04-23T07:03:22.716840",
              "price": 2.67,
              "size": 2500.0,
              "notional": 6675.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "77",
              "timestamp": "2026-04-23T06:59:41.107009",
              "price": 2.67,
              "size": 1000.0,
              "notional": 2670.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 38437,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "76",
              "timestamp": "2026-04-23T06:54:15.540634",
              "price": 2.67,
              "size": 500.0,
              "notional": 1335.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "75",
              "timestamp": "2026-04-23T06:54:15.540634",
              "price": 2.67,
              "size": 4000.0,
              "notional": 10680.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "74",
              "timestamp": "2026-04-23T06:54:15.540289",
              "price": 2.67,
              "size": 5000.0,
              "notional": 13350.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "73",
              "timestamp": "2026-04-23T06:50:44.540117",
              "price": 2.67,
              "size": 5000.0,
              "notional": 13350.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 38436,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "72",
              "timestamp": "2026-04-23T06:49:37.179181",
              "price": 2.66,
              "size": 20000.0,
              "notional": 53200.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 38435,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "71",
              "timestamp": "2026-04-23T06:24:18.481105",
              "price": 2.67,
              "size": 5000.0,
              "notional": 13350.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "70",
              "timestamp": "2026-04-23T06:24:18.475142",
              "price": 2.67,
              "size": 17500.0,
              "notional": 46725.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 38434,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "69",
              "timestamp": "2026-04-23T05:42:46.265249",
              "price": 2.66,
              "size": 2000.0,
              "notional": 5320.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 38433,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "68",
              "timestamp": "2026-04-23T05:41:44.178463",
              "price": 2.66,
              "size": 5000.0,
              "notional": 13300.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 38432,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "67",
              "timestamp": "2026-04-23T05:41:44.178463",
              "price": 2.66,
              "size": 5000.0,
              "notional": 13300.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 38432,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "66",
              "timestamp": "2026-04-23T05:39:47.560475",
              "price": 2.66,
              "size": 1500.0,
              "notional": 3990.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "65",
              "timestamp": "2026-04-23T05:39:44.155500",
              "price": 2.66,
              "size": 4500.0,
              "notional": 11970.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 38431,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "64",
              "timestamp": "2026-04-23T05:30:57.548539",
              "price": 2.67,
              "size": 500.0,
              "notional": 1335.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 38430,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "63",
              "timestamp": "2026-04-23T05:29:16.286223",
              "price": 2.66,
              "size": 5000.0,
              "notional": 13300.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "62",
              "timestamp": "2026-04-23T05:28:49.274119",
              "price": 2.66,
              "size": 3000.0,
              "notional": 7980.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "61",
              "timestamp": "2026-04-23T05:28:49.273561",
              "price": 2.66,
              "size": 7000.0,
              "notional": 18620.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 38429,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "60",
              "timestamp": "2026-04-23T05:20:06.823397",
              "price": 2.66,
              "size": 5000.0,
              "notional": 13300.0,
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
          "n_trades": 9364,
          "n_runs": 3161,
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
            "retail_pct": 0.24231097821443828,
            "mixed_pct": 0.13348996155489107,
            "instit_pct": 0.37163605296881674,
            "ambiguous_pct": 0.25256300726185393,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.25256300726185393,
            "retail_qty_pct": 0.05339401249991891,
            "mixed_qty_pct": 0.10579996290298814,
            "instit_qty_pct": 0.6446962857576733,
            "ambiguous_qty_pct": 0.1961097388394196,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.1961097388394196,
            "retail_notional_pct": 0.05340857463813125,
            "mixed_notional_pct": 0.1055233357920603,
            "instit_notional_pct": 0.6447004664245909,
            "ambiguous_notional_pct": 0.19636762314521766,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.19636762314521766
          },
          "run_composition": {
            "retail_pct": 0.4644099968364442,
            "mixed_pct": 0.20468206263840558,
            "instit_pct": 0.18918063903827903,
            "ambiguous_pct": 0.14172730148687124,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.14172730148687124,
            "retail_notional_pct": 0.06492776828606661,
            "mixed_notional_pct": 0.16798527324829368,
            "instit_notional_pct": 0.6590155467115126,
            "unclear_notional_pct": 0.10807141175412704
          },
          "counts": {
            "trades": {
              "retail": 2269,
              "mixed": 1250,
              "institutional": 3480,
              "ambiguous": 2365,
              "unobservable": 0,
              "unclear": 2365
            },
            "runs": {
              "retail": 1468,
              "mixed": 647,
              "institutional": 598,
              "ambiguous": 448,
              "unobservable": 0,
              "unclear": 448
            }
          },
          "confidence": {
            "high": 0.6532742802910472,
            "medium": 0.20499841822208162,
            "low": 0.14172730148687124,
            "na": 0.0
          },
          "confidence_counts": {
            "high": 2065,
            "medium": 648,
            "low": 448,
            "na": 0
          },
          "trade_confidence": {
            "high": 0.435070482699701,
            "medium": 0.133596753524135,
            "low": 0.43133276377616403,
            "na": 0.0
          },
          "trade_confidence_counts": {
            "high": 4074,
            "medium": 1251,
            "low": 4039,
            "na": 0
          },
          "observability": {
            "avg_feature_coverage": 0.8708478329642517,
            "observable_run_pct": 1.0,
            "ambiguous_run_pct": 0.14172730148687124,
            "unobservable_run_pct": 0.0
          },
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "dominant_share": 0.4644099968364442,
          "dominance_gap": 0.25972793419803863,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 3859,
              "UNOBSERVABLE": 3158,
              "WALK_BOOK": 2347
            },
            "d2_information": {
              "UNOBSERVABLE": 9364
            },
            "d3_urgency": {
              "UNOBSERVABLE": 3161
            },
            "participant_confidence": {
              "HIGH": 2065,
              "MEDIUM": 648,
              "LOW": 448
            }
          },
          "trade_size": {
            "avg": 17861.459920973943,
            "median": 7240.0
          },
          "run_size": {
            "avg": 33237.71534324581,
            "median": 11840.0,
            "avg_length": 1.1958241062954762
          },
          "recent_trades": [
            {
              "trade_id": "89",
              "timestamp": "2026-04-23T07:53:42.454441",
              "price": 2.67,
              "size": 1000.0,
              "notional": 2670.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 38442,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "88",
              "timestamp": "2026-04-23T07:53:41.862875",
              "price": 2.67,
              "size": 6000.0,
              "notional": 16020.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 38442,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "87",
              "timestamp": "2026-04-23T07:51:42.919283",
              "price": 2.67,
              "size": 1000.0,
              "notional": 2670.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "86",
              "timestamp": "2026-04-23T07:51:42.919283",
              "price": 2.67,
              "size": 5500.0,
              "notional": 14685.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "85",
              "timestamp": "2026-04-23T07:51:42.919283",
              "price": 2.67,
              "size": 2000.0,
              "notional": 5340.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "84",
              "timestamp": "2026-04-23T07:51:42.910882",
              "price": 2.67,
              "size": 20500.0,
              "notional": 54735.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "83",
              "timestamp": "2026-04-23T07:51:42.910882",
              "price": 2.67,
              "size": 9500.0,
              "notional": 25365.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "82",
              "timestamp": "2026-04-23T07:50:33.436622",
              "price": 2.67,
              "size": 1000.0,
              "notional": 2670.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 38441,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "81",
              "timestamp": "2026-04-23T07:42:27.510261",
              "price": 2.66,
              "size": 10000.0,
              "notional": 26600.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 38440,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "80",
              "timestamp": "2026-04-23T07:29:49.308223",
              "price": 2.66,
              "size": 9000.0,
              "notional": 23940.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 38439,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "79",
              "timestamp": "2026-04-23T07:22:03.033049",
              "price": 2.66,
              "size": 9000.0,
              "notional": 23940.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 38438,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "78",
              "timestamp": "2026-04-23T07:03:22.716840",
              "price": 2.67,
              "size": 2500.0,
              "notional": 6675.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "77",
              "timestamp": "2026-04-23T06:59:41.107009",
              "price": 2.67,
              "size": 1000.0,
              "notional": 2670.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 38437,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "76",
              "timestamp": "2026-04-23T06:54:15.540634",
              "price": 2.67,
              "size": 500.0,
              "notional": 1335.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "75",
              "timestamp": "2026-04-23T06:54:15.540634",
              "price": 2.67,
              "size": 4000.0,
              "notional": 10680.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "74",
              "timestamp": "2026-04-23T06:54:15.540289",
              "price": 2.67,
              "size": 5000.0,
              "notional": 13350.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "73",
              "timestamp": "2026-04-23T06:50:44.540117",
              "price": 2.67,
              "size": 5000.0,
              "notional": 13350.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 38436,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "72",
              "timestamp": "2026-04-23T06:49:37.179181",
              "price": 2.66,
              "size": 20000.0,
              "notional": 53200.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 38435,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "71",
              "timestamp": "2026-04-23T06:24:18.481105",
              "price": 2.67,
              "size": 5000.0,
              "notional": 13350.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "70",
              "timestamp": "2026-04-23T06:24:18.475142",
              "price": 2.67,
              "size": 17500.0,
              "notional": 46725.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 38434,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "69",
              "timestamp": "2026-04-23T05:42:46.265249",
              "price": 2.66,
              "size": 2000.0,
              "notional": 5320.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 38433,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "68",
              "timestamp": "2026-04-23T05:41:44.178463",
              "price": 2.66,
              "size": 5000.0,
              "notional": 13300.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 38432,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "67",
              "timestamp": "2026-04-23T05:41:44.178463",
              "price": 2.66,
              "size": 5000.0,
              "notional": 13300.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 38432,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "66",
              "timestamp": "2026-04-23T05:39:47.560475",
              "price": 2.66,
              "size": 1500.0,
              "notional": 3990.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "65",
              "timestamp": "2026-04-23T05:39:44.155500",
              "price": 2.66,
              "size": 4500.0,
              "notional": 11970.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 38431,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "64",
              "timestamp": "2026-04-23T05:30:57.548539",
              "price": 2.67,
              "size": 500.0,
              "notional": 1335.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 38430,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "63",
              "timestamp": "2026-04-23T05:29:16.286223",
              "price": 2.66,
              "size": 5000.0,
              "notional": 13300.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "62",
              "timestamp": "2026-04-23T05:28:49.274119",
              "price": 2.66,
              "size": 3000.0,
              "notional": 7980.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "61",
              "timestamp": "2026-04-23T05:28:49.273561",
              "price": 2.66,
              "size": 7000.0,
              "notional": 18620.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 38429,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "60",
              "timestamp": "2026-04-23T05:20:06.823397",
              "price": 2.66,
              "size": 5000.0,
              "notional": 13300.0,
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
          "n_trades": 37214,
          "n_runs": 12408,
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
            "retail_pct": 0.23792121244692857,
            "mixed_pct": 0.1457784704681034,
            "instit_pct": 0.380716934487021,
            "ambiguous_pct": 0.235583382597947,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.235583382597947,
            "retail_qty_pct": 0.05924875038793486,
            "mixed_qty_pct": 0.12252281792818984,
            "instit_qty_pct": 0.6310980045527399,
            "ambiguous_qty_pct": 0.18713042713113537,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.18713042713113537,
            "retail_notional_pct": 0.059626179440248075,
            "mixed_notional_pct": 0.12416799193448896,
            "instit_notional_pct": 0.6304403871627838,
            "ambiguous_notional_pct": 0.18576544146247917,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.18576544146247917
          },
          "run_composition": {
            "retail_pct": 0.46744036105738235,
            "mixed_pct": 0.21115409413281755,
            "instit_pct": 0.1823017408123791,
            "ambiguous_pct": 0.139103803997421,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.139103803997421,
            "retail_notional_pct": 0.07367781031708599,
            "mixed_notional_pct": 0.17895692733752994,
            "instit_notional_pct": 0.6286119773835979,
            "unclear_notional_pct": 0.11875328496178626
          },
          "counts": {
            "trades": {
              "retail": 8854,
              "mixed": 5425,
              "institutional": 14168,
              "ambiguous": 8767,
              "unobservable": 0,
              "unclear": 8767
            },
            "runs": {
              "retail": 5800,
              "mixed": 2620,
              "institutional": 2262,
              "ambiguous": 1726,
              "unobservable": 0,
              "unclear": 1726
            }
          },
          "confidence": {
            "high": 0.6496615087040619,
            "medium": 0.21123468729851708,
            "low": 0.139103803997421,
            "na": 0.0
          },
          "confidence_counts": {
            "high": 8061,
            "medium": 2621,
            "low": 1726,
            "na": 0
          },
          "trade_confidence": {
            "high": 0.44561186650185414,
            "medium": 0.14155962809695277,
            "low": 0.4128285054011931,
            "na": 0.0
          },
          "trade_confidence_counts": {
            "high": 16583,
            "medium": 5268,
            "low": 15363,
            "na": 0
          },
          "observability": {
            "avg_feature_coverage": 0.8724089297227594,
            "observable_run_pct": 1.0,
            "ambiguous_run_pct": 0.139103803997421,
            "unobservable_run_pct": 0.0
          },
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "dominant_share": 0.46744036105738235,
          "dominance_gap": 0.2562862669245648,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 16530,
              "UNOBSERVABLE": 11924,
              "WALK_BOOK": 8757,
              "MULTI_FILL_SINGLE_PRICE": 3
            },
            "d2_information": {
              "UNOBSERVABLE": 37214
            },
            "d3_urgency": {
              "UNOBSERVABLE": 12408
            },
            "participant_confidence": {
              "HIGH": 8061,
              "MEDIUM": 2621,
              "LOW": 1726
            }
          },
          "trade_size": {
            "avg": 21886.830674746063,
            "median": 9720.0
          },
          "run_size": {
            "avg": 42771.09278127015,
            "median": 15390.0,
            "avg_length": 1.2212282398452612
          },
          "recent_trades": [
            {
              "trade_id": "89",
              "timestamp": "2026-04-23T07:53:42.454441",
              "price": 2.67,
              "size": 1000.0,
              "notional": 2670.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 38442,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "88",
              "timestamp": "2026-04-23T07:53:41.862875",
              "price": 2.67,
              "size": 6000.0,
              "notional": 16020.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 38442,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "87",
              "timestamp": "2026-04-23T07:51:42.919283",
              "price": 2.67,
              "size": 1000.0,
              "notional": 2670.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "86",
              "timestamp": "2026-04-23T07:51:42.919283",
              "price": 2.67,
              "size": 5500.0,
              "notional": 14685.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "85",
              "timestamp": "2026-04-23T07:51:42.919283",
              "price": 2.67,
              "size": 2000.0,
              "notional": 5340.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "84",
              "timestamp": "2026-04-23T07:51:42.910882",
              "price": 2.67,
              "size": 20500.0,
              "notional": 54735.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "83",
              "timestamp": "2026-04-23T07:51:42.910882",
              "price": 2.67,
              "size": 9500.0,
              "notional": 25365.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "82",
              "timestamp": "2026-04-23T07:50:33.436622",
              "price": 2.67,
              "size": 1000.0,
              "notional": 2670.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 38441,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "81",
              "timestamp": "2026-04-23T07:42:27.510261",
              "price": 2.66,
              "size": 10000.0,
              "notional": 26600.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 38440,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "80",
              "timestamp": "2026-04-23T07:29:49.308223",
              "price": 2.66,
              "size": 9000.0,
              "notional": 23940.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 38439,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "79",
              "timestamp": "2026-04-23T07:22:03.033049",
              "price": 2.66,
              "size": 9000.0,
              "notional": 23940.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 38438,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "78",
              "timestamp": "2026-04-23T07:03:22.716840",
              "price": 2.67,
              "size": 2500.0,
              "notional": 6675.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "77",
              "timestamp": "2026-04-23T06:59:41.107009",
              "price": 2.67,
              "size": 1000.0,
              "notional": 2670.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 38437,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "76",
              "timestamp": "2026-04-23T06:54:15.540634",
              "price": 2.67,
              "size": 500.0,
              "notional": 1335.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "75",
              "timestamp": "2026-04-23T06:54:15.540634",
              "price": 2.67,
              "size": 4000.0,
              "notional": 10680.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "74",
              "timestamp": "2026-04-23T06:54:15.540289",
              "price": 2.67,
              "size": 5000.0,
              "notional": 13350.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "73",
              "timestamp": "2026-04-23T06:50:44.540117",
              "price": 2.67,
              "size": 5000.0,
              "notional": 13350.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 38436,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "72",
              "timestamp": "2026-04-23T06:49:37.179181",
              "price": 2.66,
              "size": 20000.0,
              "notional": 53200.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 38435,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "71",
              "timestamp": "2026-04-23T06:24:18.481105",
              "price": 2.67,
              "size": 5000.0,
              "notional": 13350.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "70",
              "timestamp": "2026-04-23T06:24:18.475142",
              "price": 2.67,
              "size": 17500.0,
              "notional": 46725.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 38434,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "69",
              "timestamp": "2026-04-23T05:42:46.265249",
              "price": 2.66,
              "size": 2000.0,
              "notional": 5320.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 38433,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "68",
              "timestamp": "2026-04-23T05:41:44.178463",
              "price": 2.66,
              "size": 5000.0,
              "notional": 13300.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 38432,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "67",
              "timestamp": "2026-04-23T05:41:44.178463",
              "price": 2.66,
              "size": 5000.0,
              "notional": 13300.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 38432,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "66",
              "timestamp": "2026-04-23T05:39:47.560475",
              "price": 2.66,
              "size": 1500.0,
              "notional": 3990.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "65",
              "timestamp": "2026-04-23T05:39:44.155500",
              "price": 2.66,
              "size": 4500.0,
              "notional": 11970.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 38431,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "64",
              "timestamp": "2026-04-23T05:30:57.548539",
              "price": 2.67,
              "size": 500.0,
              "notional": 1335.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 38430,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "63",
              "timestamp": "2026-04-23T05:29:16.286223",
              "price": 2.66,
              "size": 5000.0,
              "notional": 13300.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "62",
              "timestamp": "2026-04-23T05:28:49.274119",
              "price": 2.66,
              "size": 3000.0,
              "notional": 7980.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "61",
              "timestamp": "2026-04-23T05:28:49.273561",
              "price": 2.66,
              "size": 7000.0,
              "notional": 18620.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 38429,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "60",
              "timestamp": "2026-04-23T05:20:06.823397",
              "price": 2.66,
              "size": 5000.0,
              "notional": 13300.0,
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
          "n_trades": 51592,
          "n_runs": 17748,
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
            "retail_pct": 0.24300279113040782,
            "mixed_pct": 0.1520390758257094,
            "instit_pct": 0.36437819817025896,
            "ambiguous_pct": 0.2405799348736238,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.2405799348736238,
            "retail_qty_pct": 0.059473359920905494,
            "mixed_qty_pct": 0.12880929658375584,
            "instit_qty_pct": 0.6188095802329459,
            "ambiguous_qty_pct": 0.19290776326239278,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.19290776326239278,
            "retail_notional_pct": 0.059696651577849584,
            "mixed_notional_pct": 0.1286236219438855,
            "instit_notional_pct": 0.6212574999045574,
            "ambiguous_notional_pct": 0.19042222657370755,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.19042222657370755
          },
          "run_composition": {
            "retail_pct": 0.46568627450980393,
            "mixed_pct": 0.21957403651115617,
            "instit_pct": 0.1720757268424611,
            "ambiguous_pct": 0.14266396213657878,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.14266396213657878,
            "retail_notional_pct": 0.07430756151785645,
            "mixed_notional_pct": 0.18761854924285432,
            "instit_notional_pct": 0.6131489969586942,
            "unclear_notional_pct": 0.12492489228059503
          },
          "counts": {
            "trades": {
              "retail": 12537,
              "mixed": 7844,
              "institutional": 18799,
              "ambiguous": 12412,
              "unobservable": 0,
              "unclear": 12412
            },
            "runs": {
              "retail": 8265,
              "mixed": 3897,
              "institutional": 3054,
              "ambiguous": 2532,
              "unobservable": 0,
              "unclear": 2532
            }
          },
          "confidence": {
            "high": 0.6376493125986027,
            "medium": 0.21968672526481858,
            "low": 0.14266396213657878,
            "na": 0.0
          },
          "confidence_counts": {
            "high": 11317,
            "medium": 3899,
            "low": 2532,
            "na": 0
          },
          "trade_confidence": {
            "high": 0.43514498371840593,
            "medium": 0.149015351217243,
            "low": 0.41583966506435105,
            "na": 0.0
          },
          "trade_confidence_counts": {
            "high": 22450,
            "medium": 7688,
            "low": 21454,
            "na": 0
          },
          "observability": {
            "avg_feature_coverage": 0.8699543610547666,
            "observable_run_pct": 1.0,
            "ambiguous_run_pct": 0.14266396213657878,
            "unobservable_run_pct": 0.0
          },
          "dominant_bucket": "RETAIL",
          "dominant_label": "Retail-led",
          "dominant_share": 0.46568627450980393,
          "dominance_gap": 0.24611223799864776,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 23076,
              "UNOBSERVABLE": 16403,
              "WALK_BOOK": 12110,
              "MULTI_FILL_SINGLE_PRICE": 3
            },
            "d2_information": {
              "UNOBSERVABLE": 51592
            },
            "d3_urgency": {
              "UNOBSERVABLE": 17748
            },
            "participant_confidence": {
              "HIGH": 11317,
              "MEDIUM": 3899,
              "LOW": 2532
            }
          },
          "trade_size": {
            "avg": 20170.172525391536,
            "median": 8820.0
          },
          "run_size": {
            "avg": 38346.11486308317,
            "median": 14250.0,
            "avg_length": 1.1974306964164976
          },
          "recent_trades": [
            {
              "trade_id": "89",
              "timestamp": "2026-04-23T07:53:42.454441",
              "price": 2.67,
              "size": 1000.0,
              "notional": 2670.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 38442,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "88",
              "timestamp": "2026-04-23T07:53:41.862875",
              "price": 2.67,
              "size": 6000.0,
              "notional": 16020.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 38442,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "87",
              "timestamp": "2026-04-23T07:51:42.919283",
              "price": 2.67,
              "size": 1000.0,
              "notional": 2670.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "86",
              "timestamp": "2026-04-23T07:51:42.919283",
              "price": 2.67,
              "size": 5500.0,
              "notional": 14685.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "85",
              "timestamp": "2026-04-23T07:51:42.919283",
              "price": 2.67,
              "size": 2000.0,
              "notional": 5340.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "84",
              "timestamp": "2026-04-23T07:51:42.910882",
              "price": 2.67,
              "size": 20500.0,
              "notional": 54735.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "83",
              "timestamp": "2026-04-23T07:51:42.910882",
              "price": 2.67,
              "size": 9500.0,
              "notional": 25365.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "82",
              "timestamp": "2026-04-23T07:50:33.436622",
              "price": 2.67,
              "size": 1000.0,
              "notional": 2670.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 38441,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "81",
              "timestamp": "2026-04-23T07:42:27.510261",
              "price": 2.66,
              "size": 10000.0,
              "notional": 26600.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 38440,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "80",
              "timestamp": "2026-04-23T07:29:49.308223",
              "price": 2.66,
              "size": 9000.0,
              "notional": 23940.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 38439,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "79",
              "timestamp": "2026-04-23T07:22:03.033049",
              "price": 2.66,
              "size": 9000.0,
              "notional": 23940.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 38438,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "78",
              "timestamp": "2026-04-23T07:03:22.716840",
              "price": 2.67,
              "size": 2500.0,
              "notional": 6675.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "77",
              "timestamp": "2026-04-23T06:59:41.107009",
              "price": 2.67,
              "size": 1000.0,
              "notional": 2670.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 38437,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "76",
              "timestamp": "2026-04-23T06:54:15.540634",
              "price": 2.67,
              "size": 500.0,
              "notional": 1335.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "75",
              "timestamp": "2026-04-23T06:54:15.540634",
              "price": 2.67,
              "size": 4000.0,
              "notional": 10680.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "74",
              "timestamp": "2026-04-23T06:54:15.540289",
              "price": 2.67,
              "size": 5000.0,
              "notional": 13350.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "73",
              "timestamp": "2026-04-23T06:50:44.540117",
              "price": 2.67,
              "size": 5000.0,
              "notional": 13350.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 38436,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "72",
              "timestamp": "2026-04-23T06:49:37.179181",
              "price": 2.66,
              "size": 20000.0,
              "notional": 53200.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 38435,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "71",
              "timestamp": "2026-04-23T06:24:18.481105",
              "price": 2.67,
              "size": 5000.0,
              "notional": 13350.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "70",
              "timestamp": "2026-04-23T06:24:18.475142",
              "price": 2.67,
              "size": 17500.0,
              "notional": 46725.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "HIGH",
              "run_id": 38434,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "69",
              "timestamp": "2026-04-23T05:42:46.265249",
              "price": 2.66,
              "size": 2000.0,
              "notional": 5320.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 38433,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "68",
              "timestamp": "2026-04-23T05:41:44.178463",
              "price": 2.66,
              "size": 5000.0,
              "notional": 13300.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 38432,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "67",
              "timestamp": "2026-04-23T05:41:44.178463",
              "price": 2.66,
              "size": 5000.0,
              "notional": 13300.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 38432,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "66",
              "timestamp": "2026-04-23T05:39:47.560475",
              "price": 2.66,
              "size": 1500.0,
              "notional": 3990.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "65",
              "timestamp": "2026-04-23T05:39:44.155500",
              "price": 2.66,
              "size": 4500.0,
              "notional": 11970.0,
              "bucket": "MIXED",
              "confidence": "MEDIUM",
              "run_id": 38431,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "64",
              "timestamp": "2026-04-23T05:30:57.548539",
              "price": 2.67,
              "size": 500.0,
              "notional": 1335.0,
              "bucket": "RETAIL",
              "confidence": "HIGH",
              "run_id": 38430,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "63",
              "timestamp": "2026-04-23T05:29:16.286223",
              "price": 2.66,
              "size": 5000.0,
              "notional": 13300.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "62",
              "timestamp": "2026-04-23T05:28:49.274119",
              "price": 2.66,
              "size": 3000.0,
              "notional": 7980.0,
              "bucket": "RETAIL",
              "confidence": "LOW",
              "run_id": null,
              "d1": "UNOBSERVABLE",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "61",
              "timestamp": "2026-04-23T05:28:49.273561",
              "price": 2.66,
              "size": 7000.0,
              "notional": 18620.0,
              "bucket": "AMBIGUOUS",
              "confidence": "LOW",
              "run_id": 38429,
              "d1": "WALK_BOOK",
              "d2": "UNOBSERVABLE",
              "d3": "UNOBSERVABLE"
            },
            {
              "trade_id": "60",
              "timestamp": "2026-04-23T05:20:06.823397",
              "price": 2.66,
              "size": 5000.0,
              "notional": 13300.0,
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
      "n_trades": 51592,
      "n_runs": 17748,
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
        "retail_pct": 0.24300279113040782,
        "mixed_pct": 0.1520390758257094,
        "instit_pct": 0.36437819817025896,
        "ambiguous_pct": 0.2405799348736238,
        "unobservable_pct": 0.0,
        "unclear_pct": 0.2405799348736238,
        "retail_qty_pct": 0.059473359920905494,
        "mixed_qty_pct": 0.12880929658375584,
        "instit_qty_pct": 0.6188095802329459,
        "ambiguous_qty_pct": 0.19290776326239278,
        "unobservable_qty_pct": 0.0,
        "unclear_qty_pct": 0.19290776326239278,
        "retail_notional_pct": 0.059696651577849584,
        "mixed_notional_pct": 0.1286236219438855,
        "instit_notional_pct": 0.6212574999045574,
        "ambiguous_notional_pct": 0.19042222657370755,
        "unobservable_notional_pct": 0.0,
        "unclear_notional_pct": 0.19042222657370755
      },
      "run_composition": {
        "retail_pct": 0.46568627450980393,
        "mixed_pct": 0.21957403651115617,
        "instit_pct": 0.1720757268424611,
        "ambiguous_pct": 0.14266396213657878,
        "unobservable_pct": 0.0,
        "unclear_pct": 0.14266396213657878
      },
      "trade_size": {
        "avg": 20170.172525391536,
        "median": 8820.0
      },
      "run_size": {
        "avg": 38346.11486308317,
        "median": 14250.0,
        "avg_length": 1.1974306964164976
      },
      "confidence": {
        "high": 0.6376493125986027,
        "medium": 0.21968672526481858,
        "low": 0.14266396213657878,
        "na": 0.0
      },
      "confidence_counts": {
        "high": 11317,
        "medium": 3899,
        "low": 2532,
        "na": 0
      },
      "trade_confidence": {
        "high": 0.43514498371840593,
        "medium": 0.149015351217243,
        "low": 0.41583966506435105,
        "na": 0.0
      },
      "trade_confidence_counts": {
        "high": 22450,
        "medium": 7688,
        "low": 21454,
        "na": 0
      },
      "counts": {
        "trades": {
          "retail": 12537,
          "mixed": 7844,
          "institutional": 18799,
          "ambiguous": 12412,
          "unobservable": 0,
          "unclear": 12412
        },
        "runs": {
          "retail": 8265,
          "mixed": 3897,
          "institutional": 3054,
          "ambiguous": 2532,
          "unobservable": 0,
          "unclear": 2532
        }
      },
      "observability": {
        "avg_feature_coverage": 0.8699543610547666,
        "observable_run_pct": 1.0,
        "ambiguous_run_pct": 0.14266396213657878,
        "unobservable_run_pct": 0.0
      },
      "dominant_bucket": "RETAIL",
      "dominant_label": "Retail-led",
      "dominant_share": 0.46568627450980393,
      "dominance_gap": 0.24611223799864776,
      "over_time": {
        "valid": true,
        "periods": [
          {
            "month": "2025-11",
            "n_trades": 4864,
            "n_runs": 1803,
            "retail_pct": 0.2432154605263158,
            "mixed_pct": 0.17043585526315788,
            "instit_pct": 0.34457236842105265,
            "ambiguous_pct": 0.24177631578947367,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.24177631578947367,
            "avg_trade_size": 15018.937195723684,
            "avg_run_notional": 26478.585978924013,
            "retail_qty_pct": 0.06197880514718115,
            "mixed_qty_pct": 0.1423987925433267,
            "instit_qty_pct": 0.5953941278954148,
            "ambiguous_qty_pct": 0.2002282744140773,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.2002282744140773,
            "retail_notional_pct": 0.06173935958722524,
            "mixed_notional_pct": 0.1421006857448422,
            "instit_notional_pct": 0.5959472586090591,
            "ambiguous_notional_pct": 0.20021269605887357,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.20021269605887357,
            "run_retail_pct": 0.45701608430393786,
            "run_mixed_pct": 0.24847476428175264,
            "run_instit_pct": 0.15751525235718247,
            "run_ambiguous_pct": 0.136993899057127,
            "run_unobservable_pct": 0.0,
            "run_unclear_pct": 0.136993899057127,
            "avg_feature_coverage": 0.867304492512479,
            "high_confidence_pct": 0.6145313366611204,
            "medium_confidence_pct": 0.24847476428175264,
            "low_confidence_pct": 0.136993899057127,
            "na_confidence_pct": 0.0,
            "total_quantity": null
          },
          {
            "month": "2025-12",
            "n_trades": 1190,
            "n_runs": 505,
            "retail_pct": 0.2747899159663866,
            "mixed_pct": 0.18067226890756302,
            "instit_pct": 0.25210084033613445,
            "ambiguous_pct": 0.292436974789916,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.292436974789916,
            "avg_trade_size": 16410.232235294116,
            "avg_run_notional": 27031.695762376236,
            "retail_qty_pct": 0.04914013063477759,
            "mixed_qty_pct": 0.13474644006478345,
            "instit_qty_pct": 0.6110359205189149,
            "ambiguous_qty_pct": 0.2050775087815241,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.2050775087815241,
            "retail_notional_pct": 0.049051500884745185,
            "mixed_notional_pct": 0.13560994898757664,
            "instit_notional_pct": 0.6108501777172602,
            "ambiguous_notional_pct": 0.20448837241041795,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.20448837241041795,
            "run_retail_pct": 0.4198019801980198,
            "run_mixed_pct": 0.2693069306930693,
            "run_instit_pct": 0.14653465346534653,
            "run_ambiguous_pct": 0.16435643564356436,
            "run_unobservable_pct": 0.0,
            "run_unclear_pct": 0.16435643564356436,
            "avg_feature_coverage": 0.8612871287128712,
            "high_confidence_pct": 0.5663366336633663,
            "medium_confidence_pct": 0.2693069306930693,
            "low_confidence_pct": 0.16435643564356436,
            "na_confidence_pct": 0.0,
            "total_quantity": null
          },
          {
            "month": "2026-01",
            "n_trades": 9441,
            "n_runs": 3302,
            "retail_pct": 0.24351233979451328,
            "mixed_pct": 0.15803410655650885,
            "instit_pct": 0.3606609469335875,
            "ambiguous_pct": 0.23779260671539032,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.23779260671539032,
            "avg_trade_size": 22763.36999046711,
            "avg_run_notional": 42746.492804361,
            "retail_qty_pct": 0.0613117585952004,
            "mixed_qty_pct": 0.1281633471168786,
            "instit_qty_pct": 0.6207082935505324,
            "ambiguous_qty_pct": 0.18981660073738862,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.18981660073738862,
            "retail_notional_pct": 0.06169883790737569,
            "mixed_notional_pct": 0.12866050317836494,
            "instit_notional_pct": 0.6189492752991576,
            "ambiguous_notional_pct": 0.1906913836151017,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.1906913836151017,
            "run_retail_pct": 0.483343428225318,
            "run_mixed_pct": 0.2225923682616596,
            "run_instit_pct": 0.14778921865536038,
            "run_ambiguous_pct": 0.14627498485766202,
            "run_unobservable_pct": 0.0,
            "run_unclear_pct": 0.14627498485766202,
            "avg_feature_coverage": 0.8643095093882494,
            "high_confidence_pct": 0.6311326468806784,
            "medium_confidence_pct": 0.2225923682616596,
            "low_confidence_pct": 0.14627498485766202,
            "na_confidence_pct": 0.0,
            "total_quantity": null
          },
          {
            "month": "2026-02",
            "n_trades": 3805,
            "n_runs": 1655,
            "retail_pct": 0.29750328515111696,
            "mixed_pct": 0.1521681997371879,
            "instit_pct": 0.31537450722733246,
            "ambiguous_pct": 0.2349540078843627,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.2349540078843627,
            "avg_trade_size": 19050.393955321946,
            "avg_run_notional": 26716.760725075528,
            "retail_qty_pct": 0.05970259947343049,
            "mixed_qty_pct": 0.13503541365372493,
            "instit_qty_pct": 0.5948381354989432,
            "ambiguous_qty_pct": 0.21042385137390143,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.21042385137390143,
            "retail_notional_pct": 0.05955700951631863,
            "mixed_notional_pct": 0.13494963058696424,
            "instit_notional_pct": 0.5952882505463171,
            "ambiguous_notional_pct": 0.21020510935040004,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.21020510935040004,
            "run_retail_pct": 0.5099697885196375,
            "run_mixed_pct": 0.229607250755287,
            "run_instit_pct": 0.12809667673716013,
            "run_ambiguous_pct": 0.1323262839879154,
            "run_unobservable_pct": 0.0,
            "run_unclear_pct": 0.1323262839879154,
            "avg_feature_coverage": 0.8611480362537763,
            "high_confidence_pct": 0.6380664652567976,
            "medium_confidence_pct": 0.229607250755287,
            "low_confidence_pct": 0.1323262839879154,
            "na_confidence_pct": 0.0,
            "total_quantity": null
          },
          {
            "month": "2026-03",
            "n_trades": 21780,
            "n_runs": 6848,
            "retail_pct": 0.22814508723599633,
            "mixed_pct": 0.1460973370064279,
            "instit_pct": 0.3920569329660239,
            "ambiguous_pct": 0.2337006427915519,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.2337006427915519,
            "avg_trade_size": 22436.98281772268,
            "avg_run_notional": 46871.37460134346,
            "retail_qty_pct": 0.06020652528953976,
            "mixed_qty_pct": 0.1234803836406108,
            "instit_qty_pct": 0.6361277671779331,
            "ambiguous_qty_pct": 0.18018532389191633,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.18018532389191633,
            "retail_notional_pct": 0.060588511568825075,
            "mixed_notional_pct": 0.12578259017426882,
            "instit_notional_pct": 0.634491813883018,
            "ambiguous_notional_pct": 0.1791370843738881,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.1791370843738881,
            "run_retail_pct": 0.4484521028037383,
            "run_mixed_pct": 0.20808995327102803,
            "run_instit_pct": 0.2044392523364486,
            "run_ambiguous_pct": 0.13901869158878505,
            "run_unobservable_pct": 0.0,
            "run_unclear_pct": 0.13901869158878505,
            "avg_feature_coverage": 0.8772999415887848,
            "high_confidence_pct": 0.6528913551401869,
            "medium_confidence_pct": 0.20808995327102803,
            "low_confidence_pct": 0.13901869158878505,
            "na_confidence_pct": 0.0,
            "total_quantity": null
          },
          {
            "month": "2026-04",
            "n_trades": 5352,
            "n_runs": 1820,
            "retail_pct": 0.24794469357249627,
            "mixed_pct": 0.13004484304932734,
            "instit_pct": 0.37911061285500747,
            "ambiguous_pct": 0.2428998505231689,
            "unobservable_pct": 0.0,
            "unclear_pct": 0.2428998505231689,
            "avg_trade_size": 17730.614387144993,
            "avg_run_notional": 33214.14736263736,
            "retail_qty_pct": 0.048984700996238834,
            "mixed_qty_pct": 0.10192099765190317,
            "instit_qty_pct": 0.6580560859101038,
            "ambiguous_qty_pct": 0.19103821544175426,
            "unobservable_qty_pct": 0.0,
            "unclear_qty_pct": 0.19103821544175426,
            "retail_notional_pct": 0.048825437662300804,
            "mixed_notional_pct": 0.10182498078951006,
            "instit_notional_pct": 0.6589645440702274,
            "ambiguous_notional_pct": 0.1903850374779617,
            "unobservable_notional_pct": 0.0,
            "unclear_notional_pct": 0.1903850374779617,
            "run_retail_pct": 0.4846153846153846,
            "run_mixed_pct": 0.1989010989010989,
            "run_instit_pct": 0.18076923076923077,
            "run_ambiguous_pct": 0.1357142857142857,
            "run_unobservable_pct": 0.0,
            "run_unclear_pct": 0.1357142857142857,
            "avg_feature_coverage": 0.8694780219780217,
            "high_confidence_pct": 0.6648351648351648,
            "medium_confidence_pct": 0.19945054945054946,
            "low_confidence_pct": 0.1357142857142857,
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
          "trade_id": "89",
          "timestamp": "2026-04-23T07:53:42.454441",
          "price": 2.67,
          "size": 1000.0,
          "notional": 2670.0,
          "bucket": "AMBIGUOUS",
          "confidence": "LOW",
          "run_id": 38442,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "88",
          "timestamp": "2026-04-23T07:53:41.862875",
          "price": 2.67,
          "size": 6000.0,
          "notional": 16020.0,
          "bucket": "AMBIGUOUS",
          "confidence": "LOW",
          "run_id": 38442,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "87",
          "timestamp": "2026-04-23T07:51:42.919283",
          "price": 2.67,
          "size": 1000.0,
          "notional": 2670.0,
          "bucket": "AMBIGUOUS",
          "confidence": "LOW",
          "run_id": null,
          "d1": "UNOBSERVABLE",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "86",
          "timestamp": "2026-04-23T07:51:42.919283",
          "price": 2.67,
          "size": 5500.0,
          "notional": 14685.0,
          "bucket": "AMBIGUOUS",
          "confidence": "LOW",
          "run_id": null,
          "d1": "UNOBSERVABLE",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "85",
          "timestamp": "2026-04-23T07:51:42.919283",
          "price": 2.67,
          "size": 2000.0,
          "notional": 5340.0,
          "bucket": "AMBIGUOUS",
          "confidence": "LOW",
          "run_id": null,
          "d1": "UNOBSERVABLE",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "84",
          "timestamp": "2026-04-23T07:51:42.910882",
          "price": 2.67,
          "size": 20500.0,
          "notional": 54735.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": null,
          "d1": "UNOBSERVABLE",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "83",
          "timestamp": "2026-04-23T07:51:42.910882",
          "price": 2.67,
          "size": 9500.0,
          "notional": 25365.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "LOW",
          "run_id": null,
          "d1": "UNOBSERVABLE",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "82",
          "timestamp": "2026-04-23T07:50:33.436622",
          "price": 2.67,
          "size": 1000.0,
          "notional": 2670.0,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 38441,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "81",
          "timestamp": "2026-04-23T07:42:27.510261",
          "price": 2.66,
          "size": 10000.0,
          "notional": 26600.0,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 38440,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "80",
          "timestamp": "2026-04-23T07:29:49.308223",
          "price": 2.66,
          "size": 9000.0,
          "notional": 23940.0,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 38439,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "79",
          "timestamp": "2026-04-23T07:22:03.033049",
          "price": 2.66,
          "size": 9000.0,
          "notional": 23940.0,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 38438,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "78",
          "timestamp": "2026-04-23T07:03:22.716840",
          "price": 2.67,
          "size": 2500.0,
          "notional": 6675.0,
          "bucket": "RETAIL",
          "confidence": "LOW",
          "run_id": null,
          "d1": "UNOBSERVABLE",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "77",
          "timestamp": "2026-04-23T06:59:41.107009",
          "price": 2.67,
          "size": 1000.0,
          "notional": 2670.0,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 38437,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "76",
          "timestamp": "2026-04-23T06:54:15.540634",
          "price": 2.67,
          "size": 500.0,
          "notional": 1335.0,
          "bucket": "AMBIGUOUS",
          "confidence": "LOW",
          "run_id": null,
          "d1": "UNOBSERVABLE",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "75",
          "timestamp": "2026-04-23T06:54:15.540634",
          "price": 2.67,
          "size": 4000.0,
          "notional": 10680.0,
          "bucket": "AMBIGUOUS",
          "confidence": "LOW",
          "run_id": null,
          "d1": "UNOBSERVABLE",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "74",
          "timestamp": "2026-04-23T06:54:15.540289",
          "price": 2.67,
          "size": 5000.0,
          "notional": 13350.0,
          "bucket": "AMBIGUOUS",
          "confidence": "LOW",
          "run_id": null,
          "d1": "UNOBSERVABLE",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "73",
          "timestamp": "2026-04-23T06:50:44.540117",
          "price": 2.67,
          "size": 5000.0,
          "notional": 13350.0,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 38436,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "72",
          "timestamp": "2026-04-23T06:49:37.179181",
          "price": 2.66,
          "size": 20000.0,
          "notional": 53200.0,
          "bucket": "AMBIGUOUS",
          "confidence": "LOW",
          "run_id": 38435,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "71",
          "timestamp": "2026-04-23T06:24:18.481105",
          "price": 2.67,
          "size": 5000.0,
          "notional": 13350.0,
          "bucket": "AMBIGUOUS",
          "confidence": "LOW",
          "run_id": null,
          "d1": "UNOBSERVABLE",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "70",
          "timestamp": "2026-04-23T06:24:18.475142",
          "price": 2.67,
          "size": 17500.0,
          "notional": 46725.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "HIGH",
          "run_id": 38434,
          "d1": "WALK_BOOK",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "69",
          "timestamp": "2026-04-23T05:42:46.265249",
          "price": 2.66,
          "size": 2000.0,
          "notional": 5320.0,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 38433,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "68",
          "timestamp": "2026-04-23T05:41:44.178463",
          "price": 2.66,
          "size": 5000.0,
          "notional": 13300.0,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 38432,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "67",
          "timestamp": "2026-04-23T05:41:44.178463",
          "price": 2.66,
          "size": 5000.0,
          "notional": 13300.0,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 38432,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "66",
          "timestamp": "2026-04-23T05:39:47.560475",
          "price": 2.66,
          "size": 1500.0,
          "notional": 3990.0,
          "bucket": "RETAIL",
          "confidence": "LOW",
          "run_id": null,
          "d1": "UNOBSERVABLE",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "65",
          "timestamp": "2026-04-23T05:39:44.155500",
          "price": 2.66,
          "size": 4500.0,
          "notional": 11970.0,
          "bucket": "MIXED",
          "confidence": "MEDIUM",
          "run_id": 38431,
          "d1": "WALK_BOOK",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "64",
          "timestamp": "2026-04-23T05:30:57.548539",
          "price": 2.67,
          "size": 500.0,
          "notional": 1335.0,
          "bucket": "RETAIL",
          "confidence": "HIGH",
          "run_id": 38430,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "63",
          "timestamp": "2026-04-23T05:29:16.286223",
          "price": 2.66,
          "size": 5000.0,
          "notional": 13300.0,
          "bucket": "AMBIGUOUS",
          "confidence": "LOW",
          "run_id": null,
          "d1": "UNOBSERVABLE",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "62",
          "timestamp": "2026-04-23T05:28:49.274119",
          "price": 2.66,
          "size": 3000.0,
          "notional": 7980.0,
          "bucket": "RETAIL",
          "confidence": "LOW",
          "run_id": null,
          "d1": "UNOBSERVABLE",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "61",
          "timestamp": "2026-04-23T05:28:49.273561",
          "price": 2.66,
          "size": 7000.0,
          "notional": 18620.0,
          "bucket": "AMBIGUOUS",
          "confidence": "LOW",
          "run_id": 38429,
          "d1": "WALK_BOOK",
          "d2": "UNOBSERVABLE",
          "d3": "UNOBSERVABLE"
        },
        {
          "trade_id": "60",
          "timestamp": "2026-04-23T05:20:06.823397",
          "price": 2.66,
          "size": 5000.0,
          "notional": 13300.0,
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
      "total_trades": 51591,
      "price_moving_trades": 12973,
      "pct_price_moving": 25.145858773817135,
      "all_movers": {
        "count": 12973,
        "avg_size": 20187.91463732367,
        "median_size": 8670.0,
        "retail_count": 4915,
        "mixed_count": 2703,
        "institutional_count": 3606,
        "ambiguous_count": 1749,
        "unobservable_count": 0,
        "retail_pct": 37.88637940337624,
        "mixed_pct": 20.83558159253835,
        "instit_pct": 27.796192091266477,
        "unclear_pct": 13.481846912818932
      },
      "positive_movers": {
        "count": 6413,
        "avg_size": 20197.46418524871,
        "median_size": 8340.0,
        "retail_count": 2469,
        "mixed_count": 1387,
        "institutional_count": 1715,
        "ambiguous_count": 842,
        "unobservable_count": 0,
        "retail_pct": 38.499922033369714,
        "mixed_pct": 21.627943240293153,
        "instit_pct": 26.74255418680805,
        "unclear_pct": 13.129580539529082
      },
      "negative_movers": {
        "count": 6560,
        "avg_size": 20178.579080792686,
        "median_size": 8960.0,
        "retail_count": 2446,
        "mixed_count": 1316,
        "institutional_count": 1891,
        "ambiguous_count": 907,
        "unobservable_count": 0,
        "retail_pct": 37.28658536585366,
        "mixed_pct": 20.0609756097561,
        "instit_pct": 28.826219512195124,
        "unclear_pct": 13.826219512195124
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
          "opening": 0.008243107845939922,
          "continuous": 0.9892626812951764,
          "closing": 0.0024942108588837295,
          "auctions": 0.010737318704823652,
          "other": 0.0
        },
        "1M": {
          "opening": 0.0014973757797179022,
          "continuous": 0.9924648765803914,
          "closing": 0.005685225770678948,
          "auctions": 0.00718260155039685,
          "other": 0.0003525218692116982
        },
        "3M": {
          "opening": 0.0030703616513850576,
          "continuous": 0.9919335073256768,
          "closing": 0.004836526371330602,
          "auctions": 0.00790688802271566,
          "other": 0.00015960465160757555
        },
        "6M": {
          "opening": 0.002655165877833687,
          "continuous": 0.9921898682919258,
          "closing": 0.005003134129357066,
          "auctions": 0.007658300007190753,
          "other": 0.0001518317008833126
        }
      },
      "hhi": {
        "1D": 0.14902822187812323,
        "1M": 0.15026664718770494,
        "3M": 0.15854273011199171,
        "6M": 0.17006878494310085
      },
      "profile_buckets": [
        {
          "time": "09:00",
          "avg_share": 0.0026
        },
        {
          "time": "09:30",
          "avg_share": 0.1627
        },
        {
          "time": "10:00",
          "avg_share": 0.1544
        },
        {
          "time": "10:30",
          "avg_share": 0.0982
        },
        {
          "time": "11:00",
          "avg_share": 0.0611
        },
        {
          "time": "11:30",
          "avg_share": 0.0562
        },
        {
          "time": "12:00",
          "avg_share": 0.002
        },
        {
          "time": "13:00",
          "avg_share": 0.0774
        },
        {
          "time": "13:30",
          "avg_share": 0.0776
        },
        {
          "time": "14:00",
          "avg_share": 0.074
        },
        {
          "time": "14:30",
          "avg_share": 0.0579
        },
        {
          "time": "15:00",
          "avg_share": 0.0696
        },
        {
          "time": "15:30",
          "avg_share": 0.1028
        },
        {
          "time": "16:00",
          "avg_share": 0.0037
        }
      ],
      "peers_hhi_rows": [
        {
          "ticker": "9939",
          "auctions_pct": 0.8987924015723908,
          "hhi": 0.1626688930624769,
          "interp": {
            "text": "Moderate",
            "cls": "bg-amber-500/20 text-amber-400",
            "you": true
          }
        },
        {
          "ticker": "1763",
          "auctions_pct": 0.6588470926782942,
          "hhi": 0.1913753584355584,
          "interp": {
            "text": "Moderate",
            "cls": "bg-amber-500/20 text-amber-400"
          }
        },
        {
          "ticker": "719",
          "auctions_pct": 0.90959402459874,
          "hhi": 0.16514381704378794,
          "interp": {
            "text": "Moderate",
            "cls": "bg-amber-500/20 text-amber-400"
          }
        },
        {
          "ticker": "2511",
          "auctions_pct": 0.8116027098460373,
          "hhi": 0.23005774293997444,
          "interp": {
            "text": "Moderate",
            "cls": "bg-amber-500/20 text-amber-400"
          }
        },
        {
          "ticker": "6996",
          "auctions_pct": 1.0720437408654861,
          "hhi": 0.15249466573519233,
          "interp": {
            "text": "Moderate",
            "cls": "bg-amber-500/20 text-amber-400"
          }
        },
        {
          "ticker": "6660",
          "auctions_pct": 0.4105836503565321,
          "hhi": 0.216416734270462,
          "interp": {
            "text": "Moderate",
            "cls": "bg-amber-500/20 text-amber-400"
          }
        },
        {
          "ticker": "6896",
          "auctions_pct": 2.2284884161355243,
          "hhi": 0.2114162679079507,
          "interp": {
            "text": "Moderate",
            "cls": "bg-amber-500/20 text-amber-400"
          }
        },
        {
          "ticker": "3880",
          "auctions_pct": 0.9058185236251061,
          "hhi": 0.14591711654427902,
          "interp": {
            "text": "Spread out",
            "cls": "bg-emerald-500/20 text-emerald-400"
          }
        },
        {
          "ticker": "9989",
          "auctions_pct": 1.9649042032604123,
          "hhi": 0.1607446691705304,
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
