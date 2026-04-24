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
      "ticker": "9MT",
      "name": "METAOPTICS LTD",
      "marketCap": 211103986.2,
      "sector": "Computer Hardware",
      "industry": "Technology"
    },
    {
      "ticker": "PCT",
      "name": "PC Partner",
      "marketCap": 733100132.52,
      "sector": "Computer Hardware",
      "industry": "Technology"
    },
    {
      "ticker": "C76",
      "name": "Creative",
      "marketCap": 44701872.115,
      "sector": "Computer Hardware",
      "industry": "Technology"
    },
    {
      "ticker": "XHV",
      "name": "Serial Achieva",
      "marketCap": 24107958.409999996,
      "sector": "Computer Hardware",
      "industry": "Technology"
    },
    {
      "ticker": "1Y1",
      "name": "9R",
      "marketCap": 47021171.232,
      "sector": "Computer Hardware",
      "industry": "Technology"
    },
    {
      "ticker": "ITS",
      "name": "Info-Tech",
      "marketCap": 281220000.0,
      "sector": "Software - Application",
      "industry": "Technology"
    },
    {
      "ticker": "QS9",
      "name": "G Invacom",
      "marketCap": 23634613.748999998,
      "sector": "Communication Equipment",
      "industry": "Technology"
    },
    {
      "ticker": "575",
      "name": "ASTI",
      "marketCap": 74359491.17,
      "sector": "Semiconductor Equipment & Materials",
      "industry": "Technology"
    },
    {
      "ticker": "5DD",
      "name": "Micro-Mechanics",
      "marketCap": 447597970.82000005,
      "sector": "Semiconductor Equipment & Materials",
      "industry": "Technology"
    }
  ]
};

export const REPORT_DATA: ReportData = {
  "meta": {
    "market": "XSES",
    "currency": "SGD",
    "ticker": "9MT",
    "company": "METAOPTICS LTD",
    "asof_date": "2026-04-22",
    "industry": "Technology",
    "sector": "Computer Hardware",
    "market_cap_display": "211.1M",
    "market_cap_category": "small",
    "universe_total": 558,
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
          "score_pca": 84.58781362007169,
          "score_pca_percentile": 84.58781362007169,
          "rank_pca": 87,
          "total": 558,
          "adv_notional_sgd": 1112991.0,
          "adv_volume_shares": 1279300.0,
          "free_float_shares": 82492746.0,
          "turnover_ratio": 0.015508030245471522,
          "votes": 353.0,
          "trades": 353.0,
          "spread_pct": 0.011991201261412092,
          "spread_ticks": 2.1132075471698113,
          "amihud": 6.246116687155616e-08,
          "volatility": 0.9648960938033861
        },
        "pca": {
          "valid": true,
          "window_days": 1,
          "variance_explained": 0.5081374438681932,
          "loadings": {
            "log_adv": 0.5599047066719145,
            "log_trades": 0.5174028716750401,
            "log_turnover": 0.519897740713243,
            "neg_spread": 0.36894986720064443,
            "neg_amihud": 0.030918261282017266,
            "neg_vol": -0.10689894125878233
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
          "peer_median_adv": 792554.8,
          "peer_median_score_pca": 84.94623655913978,
          "peer_median_trades": 596.5,
          "peer_median_volatility": 0.41896233074305045,
          "peer_median_spread_pct": 0.012951945889610714,
          "peer_median_spread_ticks": 1.4251700680272108,
          "peer_median_amihud": 1.731917982247555e-08,
          "peer_median_turnover_ratio": 0.010096721514196914,
          "target_vs_peer": {
            "score_pca_delta": -0.36,
            "adv_delta_pct": 40.4,
            "trades_delta_pct": -40.82,
            "volatility_delta_pct": -130.31,
            "spread_pct_delta_pct": 7.42,
            "spread_ticks_delta_pct": 48.28,
            "amihud_delta_pct": -260.65,
            "turnover_ratio_delta_pct": 53.59
          }
        },
        "peer_liquidity": [
          {
            "ticker": "9MT",
            "score_pca": 84.58781362007169,
            "rank_pca": 87,
            "adv": 1112991.0,
            "trades": 353.0,
            "volatility": 0.9648960938033861,
            "spread_pct": 0.011991201261412092,
            "spread_ticks": 2.1132075471698113,
            "amihud": 6.246116687155616e-08,
            "turnover_ratio": 0.015508030245471522,
            "is_target": true
          },
          {
            "ticker": "PCT",
            "score_pca": 93.9068100358423,
            "rank_pca": 35,
            "adv": 9759393.0,
            "trades": 1532.0,
            "volatility": 0.7102783047541025,
            "spread_pct": 0.006985160484852318,
            "spread_ticks": 1.3265306122448979,
            "amihud": 3.940976499413265e-09,
            "turnover_ratio": 0.02163493798008188,
            "is_target": false
          },
          {
            "ticker": "C76",
            "score_pca": 37.634408602150536,
            "rank_pca": 349,
            "adv": 1333.5,
            "trades": 3.0,
            "volatility": 0.0,
            "spread_pct": 0.017857142857142873,
            "spread_ticks": 2.2857142857142856,
            "amihud": 2.8405540216563896e-05,
            "turnover_ratio": 4.7744823290270385e-05,
            "is_target": false
          },
          {
            "ticker": "XHV",
            "score_pca": 23.655913978494624,
            "rank_pca": 427,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 0.0,
            "spread_pct": 0.02186495176848857,
            "spread_ticks": 3.090909090909091,
            "amihud": null,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "1Y1",
            "score_pca": 40.14336917562724,
            "rank_pca": 335,
            "adv": 2473.8,
            "trades": 5.0,
            "volatility": 0.0,
            "spread_pct": 0.03607666290868087,
            "spread_ticks": 1.5238095238095237,
            "amihud": 0.0,
            "turnover_ratio": 6.109719073685513e-05,
            "is_target": false
          },
          {
            "ticker": "ITS",
            "score_pca": 86.02150537634408,
            "rank_pca": 79,
            "adv": 1027979.0000000001,
            "trades": 882.0,
            "volatility": 0.2636190141409841,
            "spread_pct": 0.009794436337312858,
            "spread_ticks": 1.0607267297162768,
            "amihud": 8.843477435734727e-09,
            "turnover_ratio": 0.013968002891055206,
            "is_target": false
          },
          {
            "ticker": "QS9",
            "score_pca": 83.87096774193549,
            "rank_pca": 91,
            "adv": 557130.6,
            "trades": 374.0,
            "volatility": 0.8575317290525811,
            "spread_pct": 0.013396257304946377,
            "spread_ticks": 1.1941624365482233,
            "amihud": 4.0335085009438734e-08,
            "turnover_ratio": 0.028139733944128175,
            "is_target": false
          },
          {
            "ticker": "575",
            "score_pca": 95.51971326164875,
            "rank_pca": 26,
            "adv": 4351294.5,
            "trades": 1035.0,
            "volatility": 1.3872130732638484,
            "spread_pct": 0.012507634474275053,
            "spread_ticks": 1.1484992101105844,
            "amihud": 3.322650610134802e-08,
            "turnover_ratio": 0.12423561615745717,
            "is_target": false
          },
          {
            "ticker": "5DD",
            "score_pca": 87.45519713261649,
            "rank_pca": 71,
            "adv": 2429168.0,
            "trades": 819.0,
            "volatility": 0.5743056473451168,
            "spread_pct": 0.00583187918271197,
            "spread_ticks": 1.8658357771260996,
            "amihud": 1.731917982247555e-08,
            "turnover_ratio": 0.006225440137338623,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Computer Hardware",
          "sector_count": 5,
          "market_count": 558,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.31694019970444953,
              "median": 0.1297110289777006,
              "min": 0.0,
              "max": 10.025021556239816,
              "p5": 0.0,
              "p95": 1.189258443237123,
              "count": 558
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 3583519.9836286213,
              "median": 19551.35,
              "min": 0.0,
              "max": 255589391.20000002,
              "p5": 0.0,
              "p95": 18268858.818040315,
              "count": 558
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.10935471772383583,
              "median": 0.027562238215492463,
              "min": 0.00019851775911168494,
              "max": 1.2605042016806725,
              "p5": 0.003258120054827317,
              "p95": 0.5726492177898828,
              "count": 556
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.017464862308950096,
              "median": 0.00036778028976088733,
              "min": 0.0,
              "max": 4.365217661180873,
              "p5": 0.0,
              "p95": 0.021538958870622384,
              "count": 551
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 0.00025596190241705484,
              "median": 2.1845310781464287e-08,
              "min": 0.0,
              "max": 0.07246376811594203,
              "p5": 0.0,
              "p95": 4.879762526821346e-05,
              "count": 417
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 506.0698924731183,
              "median": 9.0,
              "min": 0.0,
              "max": 14935.0,
              "p5": 0.0,
              "p95": 2811.3499999999995,
              "count": 558
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.3350348797114977,
              "median": 0.0,
              "min": 0.0,
              "max": 0.9648960938033861,
              "p5": 0.0,
              "p95": 0.9139725359935293,
              "count": 5
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 2175238.2600000002,
              "median": 2473.8,
              "min": 0.0,
              "max": 9759393.0,
              "p5": 266.7,
              "p95": 8030112.599999999,
              "count": 5
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.018955023856115343,
              "median": 0.017857142857142873,
              "min": 0.006985160484852318,
              "max": 0.03607666290868087,
              "p5": 0.007986368640164273,
              "p95": 0.03323432068064241,
              "count": 5
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.007450362047916105,
              "median": 6.109719073685513e-05,
              "min": 0.0,
              "max": 0.02163493798008188,
              "p5": 9.548964658054077e-06,
              "p95": 0.02040955643315981,
              "count": 5
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 7.1179855899837165e-06,
              "median": 3.320107168548471e-08,
              "min": 0.0,
              "max": 2.8405540216563896e-05,
              "p5": 5.911464749119899e-10,
              "p95": 2.4154078359110036e-05,
              "count": 4
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 378.6,
              "median": 5.0,
              "min": 0.0,
              "max": 1532.0,
              "p5": 0.6000000000000001,
              "p95": 1296.1999999999998,
              "count": 5
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 2266096.55,
              "median": 792554.8,
              "min": 0.0,
              "max": 9759393.0,
              "p5": 466.725,
              "p95": 7866558.524999997,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 581.25,
              "median": 596.5,
              "min": 0.0,
              "max": 1532.0,
              "p5": 1.05,
              "p95": 1358.0499999999997,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.47411847106957916,
              "median": 0.41896233074305045,
              "min": 0.0,
              "max": 1.3872130732638484,
              "p5": 0.0,
              "p95": 1.2018246027899044,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.01553926566480136,
              "median": 0.012951945889610714,
              "min": 0.00583187918271197,
              "max": 0.03607666290868087,
              "p5": 0.0062355276384610915,
              "p95": 0.031102564009613556,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 1.6870234582723729,
              "median": 1.4251700680272108,
              "min": 1.0607267297162768,
              "max": 3.090909090909091,
              "p5": 1.0914470978542845,
              "p95": 2.8090909090909086,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 4.072743634490329e-06,
              "median": 1.731917982247555e-08,
              "min": 0.0,
              "max": 2.8405540216563896e-05,
              "p5": 1.1822929498239799e-09,
              "p95": 1.989597867709754e-05,
              "count": 7
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.02428907164051102,
              "median": 0.010096721514196914,
              "min": 0.0,
              "max": 0.12423561615745717,
              "p5": 1.6710688151594635e-05,
              "p95": 0.09060205738279198,
              "count": 8
            }
          },
          "returns": {
            "window_days": 1,
            "n_obs": 1,
            "stock": -0.06951871657754016,
            "market": -0.0024406468225245392,
            "sector": 0.0,
            "peers": 0.0,
            "vs_market": -0.06707806975501562,
            "vs_sector": -0.06951871657754016,
            "vs_peers": -0.06951871657754016
          }
        }
      },
      "30d": {
        "label": "1M",
        "window_days": 21,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 21,
          "score_pca": 79.74910394265234,
          "score_pca_percentile": 79.74910394265234,
          "rank_pca": 114,
          "total": 558,
          "adv_notional_sgd": 886212.0,
          "adv_volume_shares": 1279300.0,
          "free_float_shares": 82492746.0,
          "turnover_ratio": 0.015508030245471522,
          "votes": 310.0,
          "trades": 310.0,
          "spread_pct": 0.011991201261412092,
          "spread_ticks": 1.7812995245641838,
          "amihud": 5.181375070622124e-08,
          "volatility": 1.7477642285818666
        },
        "pca": {
          "valid": true,
          "window_days": 21,
          "variance_explained": 0.5308897370130169,
          "loadings": {
            "log_adv": 0.5411250557119529,
            "log_trades": 0.49501224759058915,
            "log_turnover": 0.4921053059515126,
            "neg_spread": 0.4148176069977428,
            "neg_amihud": 0.08652983699262848,
            "neg_vol": 0.20104192822670722
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
          "peer_median_adv": 591401.0,
          "peer_median_score_pca": 82.34767025089606,
          "peer_median_trades": 326.0,
          "peer_median_volatility": 0.4504964102204193,
          "peer_median_spread_pct": 0.0153502225433622,
          "peer_median_spread_ticks": 1.5493101041319122,
          "peer_median_amihud": 2.483251882369859e-08,
          "peer_median_turnover_ratio": 0.006939470135613152,
          "target_vs_peer": {
            "score_pca_delta": -2.6,
            "adv_delta_pct": 49.8,
            "trades_delta_pct": -4.91,
            "volatility_delta_pct": -287.96,
            "spread_pct_delta_pct": 21.88,
            "spread_ticks_delta_pct": 14.97,
            "amihud_delta_pct": -108.65,
            "turnover_ratio_delta_pct": 123.48
          }
        },
        "peer_liquidity": [
          {
            "ticker": "9MT",
            "score_pca": 79.74910394265234,
            "rank_pca": 114,
            "adv": 886212.0,
            "trades": 310.0,
            "volatility": 1.7477642285818666,
            "spread_pct": 0.011991201261412092,
            "spread_ticks": 1.7812995245641838,
            "amihud": 5.181375070622124e-08,
            "turnover_ratio": 0.015508030245471522,
            "is_target": true
          },
          {
            "ticker": "PCT",
            "score_pca": 90.32258064516128,
            "rank_pca": 55,
            "adv": 4344300.0,
            "trades": 1217.0,
            "volatility": 0.5641923885270551,
            "spread_pct": 0.008014928569243482,
            "spread_ticks": 1.1854792966534315,
            "amihud": 7.3067175915655816e-09,
            "turnover_ratio": 0.011386655101665187,
            "is_target": false
          },
          {
            "ticker": "C76",
            "score_pca": 45.878136200716845,
            "rank_pca": 303,
            "adv": 2999.25,
            "trades": 3.0,
            "volatility": 0.24093633253154206,
            "spread_pct": 0.021864440469091653,
            "spread_ticks": 2.806451612903226,
            "amihud": 8.689539271938278e-07,
            "turnover_ratio": 0.00010572068014274156,
            "is_target": false
          },
          {
            "ticker": "XHV",
            "score_pca": 39.06810035842294,
            "rank_pca": 341,
            "adv": 444.0,
            "trades": 2.0,
            "volatility": 0.2474093577247345,
            "spread_pct": 0.01787994891443169,
            "spread_ticks": 2.5555555555555554,
            "amihud": 4.68867965675115e-06,
            "turnover_ratio": 1.7670513311624714e-05,
            "is_target": false
          },
          {
            "ticker": "1Y1",
            "score_pca": 34.05017921146953,
            "rank_pca": 369,
            "adv": 156.0,
            "trades": 1.0,
            "volatility": 0.3149734674404095,
            "spread_pct": 0.057142857142857204,
            "spread_ticks": 2.230769230769231,
            "amihud": 0.0,
            "turnover_ratio": 4.149214990618345e-06,
            "is_target": false
          },
          {
            "ticker": "ITS",
            "score_pca": 83.87096774193549,
            "rank_pca": 91,
            "adv": 657712.0,
            "trades": 358.0,
            "volatility": 0.33680043191378345,
            "spread_pct": 0.010269651223321194,
            "spread_ticks": 1.180821917808219,
            "amihud": 1.7855362634975453e-08,
            "turnover_ratio": 0.009644749743033771,
            "is_target": false
          },
          {
            "ticker": "QS9",
            "score_pca": 81.00358422939068,
            "rank_pca": 107,
            "adv": 525090.0,
            "trades": 302.0,
            "volatility": 1.1683201334404483,
            "spread_pct": 0.015976558412111496,
            "spread_ticks": 1.2031029619181945,
            "amihud": 6.046623244353495e-08,
            "turnover_ratio": 0.02845743636521573,
            "is_target": false
          },
          {
            "ticker": "575",
            "score_pca": 84.05017921146953,
            "rank_pca": 90,
            "adv": 1112395.0,
            "trades": 350.0,
            "volatility": 0.896784771871849,
            "spread_pct": 0.014723886674612902,
            "spread_ticks": 1.2327844311377245,
            "amihud": 2.7520637175405113e-08,
            "turnover_ratio": 0.03415027640553728,
            "is_target": false
          },
          {
            "ticker": "5DD",
            "score_pca": 83.69175627240143,
            "rank_pca": 92,
            "adv": 1323798.0,
            "trades": 459.0,
            "volatility": 0.6249444442384848,
            "spread_pct": 0.006684316265795451,
            "spread_ticks": 1.8658357771260996,
            "amihud": 2.2144400471992065e-08,
            "turnover_ratio": 0.004234190528192534,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Computer Hardware",
          "sector_count": 5,
          "market_count": 558,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.6546032144529433,
              "median": 0.3644102249269763,
              "min": 0.0,
              "max": 9.165151389911681,
              "p5": 0.034641016151377484,
              "p95": 2.1032251853534554,
              "count": 558
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 3071860.842191335,
              "median": 12682.0,
              "min": 0.0,
              "max": 255589391.20000002,
              "p5": 0.0,
              "p95": 12714416.099999962,
              "count": 558
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.10804473253907534,
              "median": 0.032305052955585445,
              "min": 0.00024245657871967925,
              "max": 1.2394366197183098,
              "p5": 0.0033102788450015434,
              "p95": 0.4878147774548017,
              "count": 556
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0038737584668733314,
              "median": 0.00021428318677128654,
              "min": 0.0,
              "max": 0.659152330103487,
              "p5": 0.0,
              "p95": 0.011497368421794506,
              "count": 551
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 0.0003353171486950857,
              "median": 1.2973969211239899e-07,
              "min": 0.0,
              "max": 0.11111111111111112,
              "p5": 0.0,
              "p95": 0.00011077719705768502,
              "count": 544
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 464.3046594982079,
              "median": 6.0,
              "min": 0.0,
              "max": 10918.0,
              "p5": 0.0,
              "p95": 2735.899999999996,
              "count": 558
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.6230551549611215,
              "median": 0.3149734674404095,
              "min": 0.24093633253154206,
              "max": 1.7477642285818666,
              "p5": 0.24223093757018055,
              "p95": 1.5110498605709042,
              "count": 5
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 1046822.25,
              "median": 2999.25,
              "min": 156.0,
              "max": 4344300.0,
              "p5": 213.6,
              "p95": 3652682.3999999994,
              "count": 5
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.023378675271407225,
              "median": 0.01787994891443169,
              "min": 0.008014928569243482,
              "max": 0.057142857142857204,
              "p5": 0.008810183107677203,
              "p95": 0.05008717380810409,
              "count": 5
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.005404445151116339,
              "median": 0.00010572068014274156,
              "min": 4.149214990618345e-06,
              "max": 0.015508030245471522,
              "p5": 6.853474654819618e-06,
              "p95": 0.014683755216710255,
              "count": 5
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.123350810448553e-06,
              "median": 5.181375070622124e-08,
              "min": 0.0,
              "max": 4.68867965675115e-06,
              "p5": 1.4613435183131163e-09,
              "p95": 3.924734510839685e-06,
              "count": 5
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 306.6,
              "median": 3.0,
              "min": 1.0,
              "max": 1217.0,
              "p5": 1.2,
              "p95": 1035.6,
              "count": 5
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 995861.78125,
              "median": 591401.0,
              "min": 156.0,
              "max": 4344300.0,
              "p5": 256.8,
              "p95": 3287124.2999999984,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 336.5,
              "median": 326.0,
              "min": 1.0,
              "max": 1217.0,
              "p5": 1.35,
              "p95": 951.6999999999996,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.5492951659610383,
              "median": 0.4504964102204193,
              "min": 0.24093633253154206,
              "max": 1.1683201334404483,
              "p5": 0.24320189134915943,
              "p95": 1.0732827568914385,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.019069573458933134,
              "median": 0.0153502225433622,
              "min": 0.006684316265795451,
              "max": 0.057142857142857204,
              "p5": 0.0071500305720022615,
              "p95": 0.04479541130703924,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 1.7826000979839605,
              "median": 1.5493101041319122,
              "min": 1.180821917808219,
              "max": 2.806451612903226,
              "p5": 1.1824520004040435,
              "p95": 2.718637992831541,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 7.116158667828064e-07,
              "median": 2.483251882369859e-08,
              "min": 0.0,
              "max": 4.68867965675115e-06,
              "p5": 2.557351157047954e-09,
              "p95": 3.351775651406085e-06,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.011000106069011185,
              "median": 0.006939470135613152,
              "min": 4.149214990618345e-06,
              "max": 0.03415027640553728,
              "p5": 8.881669402970573e-06,
              "p95": 0.032157782391424736,
              "count": 8
            }
          },
          "returns": {
            "window_days": 21,
            "n_obs": 21,
            "stock": 0.6730769230769231,
            "market": 0.03334237016264918,
            "sector": 0.10462627187334572,
            "peers": 0.11685777901137562,
            "vs_market": 0.639734552914274,
            "vs_sector": 0.5684506512035774,
            "vs_peers": 0.5562191440655475
          }
        }
      },
      "3m": {
        "label": "3M",
        "window_days": 63,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 63,
          "score_pca": 75.98566308243727,
          "score_pca_percentile": 75.98566308243727,
          "rank_pca": 135,
          "total": 558,
          "adv_notional_sgd": 411858.0,
          "adv_volume_shares": 521900.0,
          "free_float_shares": 82492746.0,
          "turnover_ratio": 0.006326616888229179,
          "votes": 189.0,
          "trades": 189.0,
          "spread_pct": 0.013340775375380823,
          "spread_ticks": 1.6805555555555556,
          "amihud": 6.942867834873584e-08,
          "volatility": 1.14939020623801
        },
        "pca": {
          "valid": true,
          "window_days": 63,
          "variance_explained": 0.5702314765749589,
          "loadings": {
            "log_adv": 0.5103411873377398,
            "log_trades": 0.45829532880132096,
            "log_turnover": 0.4674415447675754,
            "neg_spread": 0.4281761850931824,
            "neg_amihud": 0.26415239413270375,
            "neg_vol": 0.24063319289721274
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
          "peer_median_adv": 475470.7,
          "peer_median_score_pca": 72.1326164874552,
          "peer_median_trades": 179.0,
          "peer_median_volatility": 0.6381712913119986,
          "peer_median_spread_pct": 0.018690808972755584,
          "peer_median_spread_ticks": 1.4213930529813408,
          "peer_median_amihud": 5.82439994827892e-08,
          "peer_median_turnover_ratio": 0.006086195334180472,
          "target_vs_peer": {
            "score_pca_delta": 3.85,
            "adv_delta_pct": -13.4,
            "trades_delta_pct": 5.59,
            "volatility_delta_pct": -80.11,
            "spread_pct_delta_pct": 28.62,
            "spread_ticks_delta_pct": 18.23,
            "amihud_delta_pct": -19.2,
            "turnover_ratio_delta_pct": 3.95
          }
        },
        "peer_liquidity": [
          {
            "ticker": "9MT",
            "score_pca": 75.98566308243727,
            "rank_pca": 135,
            "adv": 411858.0,
            "trades": 189.0,
            "volatility": 1.14939020623801,
            "spread_pct": 0.013340775375380823,
            "spread_ticks": 1.6805555555555556,
            "amihud": 6.942867834873584e-08,
            "turnover_ratio": 0.006326616888229179,
            "is_target": true
          },
          {
            "ticker": "PCT",
            "score_pca": 86.73835125448028,
            "rank_pca": 75,
            "adv": 3427900.0,
            "trades": 642.0,
            "volatility": 0.6416071587551895,
            "spread_pct": 0.00904264451903299,
            "spread_ticks": 1.2624113475177305,
            "amihud": 8.394334965527833e-09,
            "turnover_ratio": 0.010258757411203301,
            "is_target": false
          },
          {
            "ticker": "C76",
            "score_pca": 51.971326164874554,
            "rank_pca": 269,
            "adv": 11187.5,
            "trades": 8.0,
            "volatility": 0.559665189627242,
            "spread_pct": 0.020602218700475454,
            "spread_ticks": 2.611111111111111,
            "amihud": 4.3148316225847457e-07,
            "turnover_ratio": 0.00040696777947420946,
            "is_target": false
          },
          {
            "ticker": "XHV",
            "score_pca": 40.14336917562724,
            "rank_pca": 335,
            "adv": 2520.0,
            "trades": 3.0,
            "volatility": 0.7407197645733528,
            "spread_pct": 0.020326999558108523,
            "spread_ticks": 2.875,
            "amihud": 9.594114930810913e-07,
            "turnover_ratio": 0.00010720111409052328,
            "is_target": false
          },
          {
            "ticker": "1Y1",
            "score_pca": 30.286738351254485,
            "rank_pca": 390,
            "adv": 244.2,
            "trades": 1.0,
            "volatility": 0.6347354238688075,
            "spread_pct": 0.06622516556291397,
            "spread_ticks": 2.5,
            "amihud": 4.560154426833365e-06,
            "turnover_ratio": 6.846204734520269e-06,
            "is_target": false
          },
          {
            "ticker": "ITS",
            "score_pca": 82.43727598566308,
            "rank_pca": 99,
            "adv": 657712.0,
            "trades": 273.0,
            "volatility": 0.5402993458408166,
            "spread_pct": 0.009794436337312858,
            "spread_ticks": 1.3005940594059406,
            "amihud": 2.199530690535624e-08,
            "turnover_ratio": 0.009644749743033771,
            "is_target": false
          },
          {
            "ticker": "QS9",
            "score_pca": 77.95698924731182,
            "rank_pca": 124,
            "adv": 348395.4,
            "trades": 169.0,
            "volatility": 0.9809195550731443,
            "spread_pct": 0.019569281569427263,
            "spread_ticks": 1.1941624365482233,
            "amihud": 8.60316764296618e-08,
            "turnover_ratio": 0.022501944092740492,
            "is_target": false
          },
          {
            "ticker": "575",
            "score_pca": 66.30824372759857,
            "rank_pca": 189,
            "adv": 1112395.0,
            "trades": 306.0,
            "volatility": 3.3224455484639135,
            "spread_pct": 0.017812336376083905,
            "spread_ticks": 1.1656594450084143,
            "amihud": 3.045632253591659e-08,
            "turnover_ratio": 0.042382905685239176,
            "is_target": false
          },
          {
            "ticker": "5DD",
            "score_pca": 80.10752688172043,
            "rank_pca": 112,
            "adv": 602546.0,
            "trades": 189.0,
            "volatility": 0.5133522175505366,
            "spread_pct": 0.007519728959219914,
            "spread_ticks": 1.5421920465567411,
            "amihud": 2.930717257880268e-08,
            "turnover_ratio": 0.002527640925327174,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Computer Hardware",
          "sector_count": 5,
          "market_count": 558,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.6903837679229351,
              "median": 0.45994904950014914,
              "min": 0.0,
              "max": 8.153764220759754,
              "p5": 0.15786982120357024,
              "p95": 2.2148819314524486,
              "count": 558
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 3221958.6541778953,
              "median": 11891.5,
              "min": 0.0,
              "max": 285980477.7,
              "p5": 0.0,
              "p95": 13715674.299999999,
              "count": 558
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.09930098808874607,
              "median": 0.029350274121331243,
              "min": 0.00026514881605562373,
              "max": 1.3542204201990415,
              "p5": 0.0035651151742438986,
              "p95": 0.49935452487417914,
              "count": 556
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.005823668985621954,
              "median": 0.0002995529559330408,
              "min": 0.0,
              "max": 1.9774569903104608,
              "p5": 0.0,
              "p95": 0.00995631739909109,
              "count": 551
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.1482484310480586e-05,
              "median": 1.4181787687780857e-07,
              "min": 0.0,
              "max": 0.000575783139971117,
              "p5": 0.0,
              "p95": 4.264189909559507e-05,
              "count": 554
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 458.8799283154122,
              "median": 6.0,
              "min": 0.0,
              "max": 11391.0,
              "p5": 0.0,
              "p95": 2604.4499999999944,
              "count": 558
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.7452235486125204,
              "median": 0.6416071587551895,
              "min": 0.559665189627242,
              "max": 1.14939020623801,
              "p5": 0.5746792364755551,
              "p95": 1.0676561179050785,
              "count": 5
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 770741.9400000001,
              "median": 11187.5,
              "min": 244.2,
              "max": 3427900.0,
              "p5": 699.3600000000001,
              "p95": 2824691.5999999996,
              "count": 5
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.025907560743182352,
              "median": 0.020326999558108523,
              "min": 0.00904264451903299,
              "max": 0.06622516556291397,
              "p5": 0.009902270690302556,
              "p95": 0.05710057619042626,
              "count": 5
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0034212778795463467,
              "median": 0.00040696777947420946,
              "min": 6.846204734520269e-06,
              "max": 0.010258757411203301,
              "p5": 2.6917186605720872e-05,
              "p95": 0.009472329306608476,
              "count": 5
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.2057744190974389e-06,
              "median": 4.3148316225847457e-07,
              "min": 8.394334965527833e-09,
              "max": 4.560154426833365e-06,
              "p5": 2.0601203642169435e-08,
              "p95": 3.84000584008291e-06,
              "count": 5
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 168.6,
              "median": 8.0,
              "min": 1.0,
              "max": 642.0,
              "p5": 1.4,
              "p95": 551.3999999999999,
              "count": 5
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 770362.5125,
              "median": 475470.7,
              "min": 244.2,
              "max": 3427900.0,
              "p5": 1040.73,
              "p95": 2617473.2499999986,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 198.875,
              "median": 179.0,
              "min": 1.0,
              "max": 642.0,
              "p5": 1.7000000000000002,
              "p95": 524.3999999999999,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.9917180254691254,
              "median": 0.6381712913119986,
              "min": 0.5133522175505366,
              "max": 3.3224455484639135,
              "p5": 0.5227837124521346,
              "p95": 2.502911450777143,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.021361601447821857,
              "median": 0.018690808972755584,
              "min": 0.007519728959219914,
              "max": 0.06622516556291397,
              "p5": 0.008052749405154491,
              "p95": 0.050257134161060465,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 1.80639130576852,
              "median": 1.4213930529813408,
              "min": 1.1656594450084143,
              "max": 2.875,
              "p5": 1.1756354920473475,
              "p95": 2.7826388888888887,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 7.659042369485245e-07,
              "median": 5.82439994827892e-08,
              "min": 8.394334965527833e-09,
              "max": 4.560154426833365e-06,
              "p5": 1.3154675144467776e-08,
              "p95": 3.2998944000200674e-06,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.010979626619480395,
              "median": 0.006086195334180472,
              "min": 6.846204734520269e-06,
              "max": 0.042382905685239176,
              "p5": 4.197042300912132e-05,
              "p95": 0.035424569127864625,
              "count": 8
            }
          },
          "returns": {
            "window_days": 63,
            "n_obs": 63,
            "stock": -0.1714285714285716,
            "market": 0.03618894259398431,
            "sector": -0.14083678014271506,
            "peers": 0.07048847200863007,
            "vs_market": -0.2076175140225559,
            "vs_sector": -0.03059179128585654,
            "vs_peers": -0.24191704343720166
          }
        }
      },
      "6m": {
        "label": "6M",
        "window_days": 126,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 126,
          "score_pca": 75.44802867383513,
          "score_pca_percentile": 75.44802867383513,
          "rank_pca": 138,
          "total": 558,
          "adv_notional_sgd": 388492.5,
          "adv_volume_shares": 464500.0,
          "free_float_shares": 82492746.0,
          "turnover_ratio": 0.005630798131025969,
          "votes": 164.5,
          "trades": 164.5,
          "spread_pct": 0.013226780424116635,
          "spread_ticks": 1.6149577167019027,
          "amihud": 7.149122030086165e-08,
          "volatility": 1.1395419602275736
        },
        "pca": {
          "valid": true,
          "window_days": 126,
          "variance_explained": 0.5790012362723713,
          "loadings": {
            "log_adv": 0.5014445661734569,
            "log_trades": 0.4470073482234542,
            "log_turnover": 0.4554068242807716,
            "neg_spread": 0.4307432093732578,
            "neg_amihud": 0.26318610576149953,
            "neg_vol": 0.29416961671928915
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
          "peer_median_adv": 133488.2,
          "peer_median_score_pca": 66.12903225806453,
          "peer_median_trades": 40.25,
          "peer_median_volatility": 0.5976699631539768,
          "peer_median_spread_pct": 0.018524636634284608,
          "peer_median_spread_ticks": 1.3757994148138208,
          "peer_median_amihud": 6.225455681289847e-08,
          "peer_median_turnover_ratio": 0.0008554372864562295,
          "target_vs_peer": {
            "score_pca_delta": 9.32,
            "adv_delta_pct": 191.0,
            "trades_delta_pct": 308.7,
            "volatility_delta_pct": -90.66,
            "spread_pct_delta_pct": 28.6,
            "spread_ticks_delta_pct": 17.38,
            "amihud_delta_pct": -14.84,
            "turnover_ratio_delta_pct": 558.24
          }
        },
        "peer_liquidity": [
          {
            "ticker": "9MT",
            "score_pca": 75.44802867383513,
            "rank_pca": 138,
            "adv": 388492.5,
            "trades": 164.5,
            "volatility": 1.1395419602275736,
            "spread_pct": 0.013226780424116635,
            "spread_ticks": 1.6149577167019027,
            "amihud": 7.149122030086165e-08,
            "turnover_ratio": 0.005630798131025969,
            "is_target": true
          },
          {
            "ticker": "PCT",
            "score_pca": 81.72043010752688,
            "rank_pca": 103,
            "adv": 961229.5,
            "trades": 173.5,
            "volatility": 0.6459433947195862,
            "spread_pct": 0.00965936919962627,
            "spread_ticks": 1.3249878463782205,
            "amihud": 2.4514385098924982e-08,
            "turnover_ratio": 0.0032085588831935827,
            "is_target": false
          },
          {
            "ticker": "C76",
            "score_pca": 56.451612903225815,
            "rank_pca": 244,
            "adv": 12188.75,
            "trades": 12.0,
            "volatility": 0.5026912432253077,
            "spread_pct": 0.01923693689248531,
            "spread_ticks": 2.3756756756756756,
            "amihud": 6.514656630068227e-07,
            "turnover_ratio": 0.00046892237160086985,
            "is_target": false
          },
          {
            "ticker": "XHV",
            "score_pca": 33.15412186379928,
            "rank_pca": 374,
            "adv": 550.8,
            "trades": 2.0,
            "volatility": 0.5493965315883675,
            "spread_pct": 0.024425700358441098,
            "spread_ticks": 3.1597402597402597,
            "amihud": 9.321154793447128e-07,
            "turnover_ratio": 2.591675285704958e-05,
            "is_target": false
          },
          {
            "ticker": "1Y1",
            "score_pca": 30.286738351254485,
            "rank_pca": 390,
            "adv": 455.7,
            "trades": 2.0,
            "volatility": 0.656769849403764,
            "spread_pct": 0.06779145766833872,
            "spread_ticks": 2.7735042735042734,
            "amihud": 3.654041189011654e-06,
            "turnover_ratio": 1.1514071598965907e-05,
            "is_target": false
          },
          {
            "ticker": "ITS",
            "score_pca": 80.64516129032258,
            "rank_pca": 109,
            "adv": 265210.0,
            "trades": 125.5,
            "volatility": 0.40712086911020035,
            "spread_pct": 0.009545131276451468,
            "spread_ticks": 1.4193255067346124,
            "amihud": 4.3257532646269925e-08,
            "turnover_ratio": 0.004355096225336426,
            "is_target": false
          },
          {
            "ticker": "QS9",
            "score_pca": 76.88172043010752,
            "rank_pca": 130,
            "adv": 254787.65000000002,
            "trades": 89.0,
            "volatility": 0.8047897888469464,
            "spread_pct": 0.021237418298885837,
            "spread_ticks": 1.0976190476190477,
            "amihud": 8.125158097952704e-08,
            "turnover_ratio": 0.020456872076500564,
            "is_target": false
          },
          {
            "ticker": "575",
            "score_pca": 13.082437275985665,
            "rank_pca": 486,
            "adv": 0.0,
            "trades": 0.0,
            "volatility": 2.36480862196139,
            "spread_pct": 0.017812336376083905,
            "spread_ticks": 1.1656594450084143,
            "amihud": 3.045632253591659e-08,
            "turnover_ratio": 0.0,
            "is_target": false
          },
          {
            "ticker": "5DD",
            "score_pca": 75.80645161290323,
            "rank_pca": 136,
            "adv": 265378.0,
            "trades": 68.5,
            "volatility": 0.3900771602117763,
            "spread_pct": 0.007314761389347933,
            "spread_ticks": 1.3322733228930295,
            "amihud": 3.686041537520689e-08,
            "turnover_ratio": 0.001241952201311589,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Computer Hardware",
          "sector_count": 5,
          "market_count": 558,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.6949400865545378,
              "median": 0.4396350808083983,
              "min": 0.0,
              "max": 6.936569757452165,
              "p5": 0.15291345812470414,
              "p95": 2.1117851247065706,
              "count": 558
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 2573596.1070653573,
              "median": 11684.25,
              "min": 0.0,
              "max": 243597405.0,
              "p5": 0.0,
              "p95": 10437476.975,
              "count": 558
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.09506844984635239,
              "median": 0.028978517356113388,
              "min": 0.00027198195406526475,
              "max": 1.267605633802817,
              "p5": 0.0035774720816924444,
              "p95": 0.48590812227394437,
              "count": 556
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.003237226044862953,
              "median": 0.0002657375275951876,
              "min": 0.0,
              "max": 0.8552501483092743,
              "p5": 0.0,
              "p95": 0.007062166249711977,
              "count": 551
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 9.797468958231302e-06,
              "median": 1.7330836773744484e-07,
              "min": 0.0,
              "max": 0.0006620397444526588,
              "p5": 0.0,
              "p95": 4.2565766376012296e-05,
              "count": 557
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 375.32078853046596,
              "median": 6.75,
              "min": 0.0,
              "max": 10053.0,
              "p5": 0.0,
              "p95": 2022.8999999999985,
              "count": 558
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.6988685958329197,
              "median": 0.6459433947195862,
              "min": 0.5026912432253077,
              "max": 1.1395419602275736,
              "p5": 0.5120323008979196,
              "p95": 1.0429875380628115,
              "count": 5
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 272583.45,
              "median": 12188.75,
              "min": 455.7,
              "max": 961229.5,
              "p5": 474.71999999999997,
              "p95": 846682.0999999999,
              "count": 5
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.02686804890860161,
              "median": 0.01923693689248531,
              "min": 0.00965936919962627,
              "max": 0.06779145766833872,
              "p5": 0.010372851444524343,
              "p95": 0.05911830620635919,
              "count": 5
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0018691420420552875,
              "median": 0.00046892237160086985,
              "min": 1.1514071598965907e-05,
              "max": 0.005630798131025969,
              "p5": 1.4394607850582642e-05,
              "p95": 0.005146350281459491,
              "count": 5
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.0667255873525953e-06,
              "median": 6.514656630068227e-07,
              "min": 2.4514385098924982e-08,
              "max": 3.654041189011654e-06,
              "p5": 3.3909752139312314e-08,
              "p95": 3.109656047078265e-06,
              "count": 5
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 70.8,
              "median": 12.0,
              "min": 2.0,
              "max": 173.5,
              "p5": 2.0,
              "p95": 171.7,
              "count": 5
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 219975.05,
              "median": 133488.2,
              "min": 0.0,
              "max": 961229.5,
              "p5": 159.495,
              "p95": 717681.4749999996,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 59.0625,
              "median": 40.25,
              "min": 0.0,
              "max": 173.5,
              "p5": 0.7000000000000001,
              "p95": 156.7,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.7901996823834173,
              "median": 0.5976699631539768,
              "min": 0.3900771602117763,
              "max": 2.36480862196139,
              "p5": 0.3960424583262247,
              "p95": 1.818802030371334,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.022127888932457568,
              "median": 0.018524636634284608,
              "min": 0.007314761389347933,
              "max": 0.06779145766833872,
              "p5": 0.00809539084983417,
              "p95": 0.05261344260987453,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 1.8310981721941917,
              "median": 1.3757994148138208,
              "min": 1.0976190476190477,
              "max": 3.1597402597402597,
              "p5": 1.121433186705326,
              "p95": 3.024557664557664,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 6.817453209998792e-07,
              "median": 6.225455681289847e-08,
              "min": 2.4514385098924982e-08,
              "max": 3.654041189011654e-06,
              "p5": 2.6594063201872045e-08,
              "p95": 2.701367190628223e-06,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.003721104072799881,
              "median": 0.0008554372864562295,
              "min": 0.0,
              "max": 0.020456872076500564,
              "p5": 4.029925059638068e-06,
              "p95": 0.014821250528593108,
              "count": 8
            }
          },
          "returns": {
            "window_days": 126,
            "n_obs": 126,
            "stock": 1.0470588235294098,
            "market": 0.14189987283210126,
            "sector": -0.2637169964865361,
            "peers": 0.026556940074365265,
            "vs_market": 0.9051589506973086,
            "vs_sector": 1.3107758200159458,
            "vs_peers": 1.0205018834550446
          }
        }
      }
    },
    "period_insights": {
      "1d": {
        "liquidity": "Near-term access looks balanced overall, but the lighter bid side points to thinner buy-side liquidity today.",
        "market_comparison": "The stock fell 7.0% while peers were flat, which matters because weaker same-day price action can make access feel less reliable."
      },
      "30d": {
        "liquidity": "Monthly tradability looks average, with the current order book suggesting day-to-day access may be less firm than the monthly picture.",
        "market_comparison": "Return 67.3% vs peers 11.7%."
      },
      "3m": {
        "liquidity": "Three-month tradability is solid, with liquidity holding above peers over the period.",
        "market_comparison": "Return -17.1% vs peers 7.0%."
      },
      "6m": {
        "liquidity": "Six-month tradability is strong for its size, with a liquidity score of 75.4 compared with the peer median of 66.1.",
        "market_comparison": "The stock gained 104.7% compared with 2.7% for peers, which matters because stronger returns can help sustain market participation over time."
      }
    }
  },
  "q02": {
    "driver_model": {
      "valid": true,
      "model_method": "ols_with_volatility_regimes",
      "estimation_window_days": 154,
      "reporting_window_days": 63,
      "available_history_days": 154,
      "n_regimes": 2,
      "current_regime": 1,
      "current_regime_label": "High Volatility",
      "current_regime_probability": 1.0,
      "current_driver_mix": {
        "market_share": {
          "median": 0.10916314629642818,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "10.9%",
          "display_range": null,
          "display_text": "10.9%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 154 trading days.",
          "kind": "share_pct",
          "value_pct": 10.9,
          "plain_english": "Market explains about 10.9% of price moves in the current state."
        },
        "sector_share": {
          "median": 0.5068943782419715,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "50.7%",
          "display_range": null,
          "display_text": "50.7%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 154 trading days.",
          "kind": "share_pct",
          "value_pct": 50.7,
          "plain_english": "Sector explains about 50.7% of price moves in the current state."
        },
        "company_share": {
          "median": 0.3839424754616004,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "38.4%",
          "display_range": null,
          "display_text": "38.4%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 154 trading days.",
          "kind": "share_pct",
          "value_pct": 38.4,
          "plain_english": "Company-specific explains about 38.4% of price moves in the current state."
        },
        "basis": "current_state"
      },
      "current_sensitivities": {
        "beta_market": {
          "median": -5.246678799256408,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "-5.25",
          "display_range": null,
          "display_text": "-5.25",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 154 trading days.",
          "kind": "beta",
          "strength_label": "Very high",
          "plain_english": "Very high market link: a 1% market move has lined up with about a 5.25% stock move in the opposite direction in this state. The multiplier is unusually large and comes from only 154 trading days of history.",
          "value_num": -5.25
        },
        "beta_stock_lag": {
          "median": 1.1818145915582066,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "1.18",
          "display_range": null,
          "display_text": "1.18",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 154 trading days.",
          "kind": "lag_beta",
          "value_num": 1.18
        },
        "beta_sector": {
          "median": -7.075658036791004,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "-7.08",
          "display_range": null,
          "display_text": "-7.08",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 154 trading days.",
          "kind": "beta",
          "strength_label": "Very high",
          "plain_english": "Very high sector link: a 1% sector move has lined up with about a 7.08% stock move in the opposite direction in this state. The multiplier is unusually large and comes from only 154 trading days of history.",
          "value_num": -7.08
        },
        "beta_market_lag": {
          "median": -0.8483719314031016,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "-0.85",
          "display_range": null,
          "display_text": "-0.85",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 154 trading days.",
          "kind": "lag_beta",
          "value_num": -0.85
        },
        "beta_sector_lag": {
          "median": -2.6967658818719835,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "-2.70",
          "display_range": null,
          "display_text": "-2.70",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 154 trading days.",
          "kind": "lag_beta",
          "value_num": -2.7
        },
        "posterior_source": null,
        "intervals_collapsed": false,
        "confidence_label": "High, limited history",
        "confidence_note": "Based on 154 trading days relative to the 252-day target."
      },
      "rolling_windows": {},
      "monthly_history": [
        {
          "month_key": "2025-09",
          "month_label": "September 2025",
          "month_short_label": "Sep",
          "period_label": "2025-09-11 to 2025-09-30",
          "n_obs": 14,
          "partial_month": true,
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.5659325716194616,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "56.6%",
            "display_range": null,
            "display_text": "56.6%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 14 trading days.",
            "kind": "share_pct",
            "value_pct": 56.6,
            "plain_english": "Market explains about 56.6% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.5659325716194616,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "56.6%",
              "display_range": null,
              "display_text": "56.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 14 trading days.",
              "kind": "share_pct",
              "value_pct": 56.6,
              "plain_english": "Market explains about 56.6% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.07659979283806088,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "7.7%",
              "display_range": null,
              "display_text": "7.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 14 trading days.",
              "kind": "share_pct",
              "value_pct": 7.7,
              "plain_english": "Sector explains about 7.7% of price moves in the current state."
            },
            "company_share": {
              "median": 0.35746763554247746,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "35.7%",
              "display_range": null,
              "display_text": "35.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 14 trading days.",
              "kind": "share_pct",
              "value_pct": 35.7,
              "plain_english": "Company-specific explains about 35.7% of price moves in the current state."
            }
          },
          "summary": "Sep: Mostly market-driven."
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
            "median": 0.7228515871765109,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "72.3%",
            "display_range": null,
            "display_text": "72.3%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
            "kind": "share_pct",
            "value_pct": 72.3,
            "plain_english": "Company-specific explains about 72.3% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.10427116285925864,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "10.4%",
              "display_range": null,
              "display_text": "10.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 10.4,
              "plain_english": "Market explains about 10.4% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.17287724996423043,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "17.3%",
              "display_range": null,
              "display_text": "17.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 17.3,
              "plain_english": "Sector explains about 17.3% of price moves in the current state."
            },
            "company_share": {
              "median": 0.7228515871765109,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "72.3%",
              "display_range": null,
              "display_text": "72.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 72.3,
              "plain_english": "Company-specific explains about 72.3% of price moves in the current state."
            }
          },
          "summary": "Oct: Still clearly company-driven."
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
            "median": 0.6117167787969162,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "61.2%",
            "display_range": null,
            "display_text": "61.2%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
            "kind": "share_pct",
            "value_pct": 61.2,
            "plain_english": "Company-specific explains about 61.2% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.2503511769574372,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "25.0%",
              "display_range": null,
              "display_text": "25.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 25.0,
              "plain_english": "Market explains about 25.0% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.1379320442456465,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "13.8%",
              "display_range": null,
              "display_text": "13.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 13.8,
              "plain_english": "Sector explains about 13.8% of price moves in the current state."
            },
            "company_share": {
              "median": 0.6117167787969162,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "61.2%",
              "display_range": null,
              "display_text": "61.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 61.2,
              "plain_english": "Company-specific explains about 61.2% of price moves in the current state."
            }
          },
          "summary": "Nov: Still clearly company-driven."
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
            "median": 0.6424378883899238,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "64.2%",
            "display_range": null,
            "display_text": "64.2%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
            "kind": "share_pct",
            "value_pct": 64.2,
            "plain_english": "Company-specific explains about 64.2% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.22446432455826557,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "22.4%",
              "display_range": null,
              "display_text": "22.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 22.4,
              "plain_english": "Market explains about 22.4% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.13309778705181072,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "13.3%",
              "display_range": null,
              "display_text": "13.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 13.3,
              "plain_english": "Sector explains about 13.3% of price moves in the current state."
            },
            "company_share": {
              "median": 0.6424378883899238,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "64.2%",
              "display_range": null,
              "display_text": "64.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 64.2,
              "plain_english": "Company-specific explains about 64.2% of price moves in the current state."
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
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.4992516179769926,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "49.9%",
            "display_range": null,
            "display_text": "49.9%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
            "kind": "share_pct",
            "value_pct": 49.9,
            "plain_english": "Market explains about 49.9% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.4992516179769926,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "49.9%",
              "display_range": null,
              "display_text": "49.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 49.9,
              "plain_english": "Market explains about 49.9% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.05995205062700258,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "6.0%",
              "display_range": null,
              "display_text": "6.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 6.0,
              "plain_english": "Sector explains about 6.0% of price moves in the current state."
            },
            "company_share": {
              "median": 0.44079633139600477,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "44.1%",
              "display_range": null,
              "display_text": "44.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 44.1,
              "plain_english": "Company-specific explains about 44.1% of price moves in the current state."
            }
          },
          "summary": "Jan: Mostly market-driven."
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
            "median": 0.41751606966068017,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "41.8%",
            "display_range": null,
            "display_text": "41.8%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
            "kind": "share_pct",
            "value_pct": 41.8,
            "plain_english": "Company-specific explains about 41.8% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.25366497612047584,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "25.4%",
              "display_range": null,
              "display_text": "25.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
              "kind": "share_pct",
              "value_pct": 25.4,
              "plain_english": "Market explains about 25.4% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.3288189542188441,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "32.9%",
              "display_range": null,
              "display_text": "32.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
              "kind": "share_pct",
              "value_pct": 32.9,
              "plain_english": "Sector explains about 32.9% of price moves in the current state."
            },
            "company_share": {
              "median": 0.41751606966068017,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "41.8%",
              "display_range": null,
              "display_text": "41.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
              "kind": "share_pct",
              "value_pct": 41.8,
              "plain_english": "Company-specific explains about 41.8% of price moves in the current state."
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
            "median": 0.7742772752136576,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "77.4%",
            "display_range": null,
            "display_text": "77.4%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
            "kind": "share_pct",
            "value_pct": 77.4,
            "plain_english": "Company-specific explains about 77.4% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.07394003806391374,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "7.4%",
              "display_range": null,
              "display_text": "7.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 7.4,
              "plain_english": "Market explains about 7.4% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.15178268672242864,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "15.2%",
              "display_range": null,
              "display_text": "15.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 15.2,
              "plain_english": "Sector explains about 15.2% of price moves in the current state."
            },
            "company_share": {
              "median": 0.7742772752136576,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "77.4%",
              "display_range": null,
              "display_text": "77.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 77.4,
              "plain_english": "Company-specific explains about 77.4% of price moves in the current state."
            }
          },
          "summary": "Mar: Still clearly company-driven."
        },
        {
          "month_key": "2026-04",
          "month_label": "April 2026",
          "month_short_label": "Apr",
          "period_label": "2026-04-01 to 2026-04-22",
          "n_obs": 15,
          "partial_month": false,
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.4153423116064334,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "41.5%",
            "display_range": null,
            "display_text": "41.5%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
            "kind": "share_pct",
            "value_pct": 41.5,
            "plain_english": "Market explains about 41.5% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.4153423116064334,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "41.5%",
              "display_range": null,
              "display_text": "41.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
              "kind": "share_pct",
              "value_pct": 41.5,
              "plain_english": "Market explains about 41.5% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.17743142177928053,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "17.7%",
              "display_range": null,
              "display_text": "17.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
              "kind": "share_pct",
              "value_pct": 17.7,
              "plain_english": "Sector explains about 17.7% of price moves in the current state."
            },
            "company_share": {
              "median": 0.4072262666142861,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "40.7%",
              "display_range": null,
              "display_text": "40.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
              "kind": "share_pct",
              "value_pct": 40.7,
              "plain_english": "Company-specific explains about 40.7% of price moves in the current state."
            }
          },
          "summary": "Apr: More mixed, though market-driven still has the largest share."
        }
      ],
      "regimes": [
        {
          "id": 0,
          "label": "Low Volatility",
          "pct_time": 0.5,
          "expected_duration_days": 25.333333333333332,
          "current_probability": 0.0,
          "n_days_effective": 76.0,
          "volatility": {
            "median": 0.029746540662872984,
            "low": 0.029746540662872984,
            "high": 0.029746540662872984
          },
          "volatility_label": "Low Volatility",
          "current_probability_display": 0.0
        },
        {
          "id": 1,
          "label": "High Volatility",
          "pct_time": 0.5,
          "expected_duration_days": 19.0,
          "current_probability": 1.0,
          "n_days_effective": 76.0,
          "volatility": {
            "median": 0.11195769365391701,
            "low": 0.11195769365391701,
            "high": 0.11195769365391701
          },
          "volatility_label": "High Volatility",
          "current_probability_display": null
        }
      ],
      "transitions": {
        "mean": [
          [
            0.9605263157894737,
            0.039473684210526314
          ],
          [
            0.04,
            0.96
          ]
        ],
        "low": [],
        "high": [],
        "counts": [
          [
            73.0,
            3.0
          ],
          [
            3.0,
            72.0
          ]
        ]
      },
      "methodology": {
        "estimation_window_days": 154,
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
        "market_link_display": "-5.25",
        "sector_link_display": "-7.08",
        "market_link_explainer": "Very high market link. A 1% market move has lined up with about a 5.25% stock move in the opposite direction in this state. This is a point estimate from 154 trading days.",
        "sector_link_explainer": "Very high sector link. A 1% sector move has lined up with about a 7.08% stock move in the opposite direction in this state. This is a point estimate from 154 trading days.",
        "stock_persistence_display": "1.18",
        "point_estimate_note": "Point estimate only because the current state has 154 trading days.",
        "history_limited_note": "Read is based on 154 trading days versus the 252-day target."
      },
      "current_summary": {
        "regime_label": "High Volatility",
        "dominant_driver": "sector",
        "dominant_driver_label": "Sector",
        "driver_share_pct": 50.7,
        "driver_share_display": "50.7%",
        "confidence_label": "High, limited history",
        "confidence_pct": 100.0,
        "display_confidence_pct": null,
        "confidence_note": "Based on 154 trading days relative to the 252-day target.",
        "history_days": 154,
        "history_limited": true,
        "volatility_label": "High Volatility",
        "lead_signal_text": "No stable lead signal.",
        "state_term": "state",
        "stay_probability": 0.96,
        "effective_days": 76.0,
        "persistence_note": "This state looks more persistent, with a typical run length of about 19.0 days.",
        "expected_duration_days": 19.0
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
          "pct_time": 0.5,
          "expected_duration_days": 25.333333333333332,
          "current_probability": 0.0,
          "n_days_effective": 76.0,
          "volatility": {
            "median": 0.029746540662872984,
            "low": 0.029746540662872984,
            "high": 0.029746540662872984
          },
          "volatility_label": "Low Volatility"
        },
        {
          "id": 1,
          "label": "High Volatility",
          "pct_time": 0.5,
          "expected_duration_days": 19.0,
          "current_probability": 1.0,
          "n_days_effective": 76.0,
          "volatility": {
            "median": 0.11195769365391701,
            "low": 0.11195769365391701,
            "high": 0.11195769365391701
          },
          "volatility_label": "High Volatility"
        }
      ],
      "transitions": [
        [
          0.9605263157894737,
          0.039473684210526314
        ],
        [
          0.04,
          0.96
        ]
      ],
      "transition_intervals": {
        "mean": [
          [
            0.9605263157894737,
            0.039473684210526314
          ],
          [
            0.04,
            0.96
          ]
        ],
        "low": [],
        "high": [],
        "counts": [
          [
            73.0,
            3.0
          ],
          [
            3.0,
            72.0
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
        "text": "Liquidity score: 75.4 — Strong",
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
    "liq_subtitle": "Six-month liquidity stands above peers, while the current order book points to thinner buy-side access.",
    "market_comparison_title": "How You Compare to the Market",
    "market_comparison_subtitle": "Context relative to market, sector, and peer medians.",
    "perf_title": "Stock Performance",
    "perf_subtitle": "Recent returns are far ahead of peers and the market, giving the tape a much stronger backdrop over the past month.",
    "perf_insight": "Performance has been exceptionally strong, with a 1M return of 67.3% compared with 11.7% for peers and 3.3% for the market. That matters because the stock is trading with a firmer return backdrop than its main comparison groups, even as current buy-side depth remains lighter.",
    "drivers_title": "What Moves Your Stock Price?",
    "drivers_subtitle": "Sector moves are the main force in the tape, accounting for just over half of current trading.",
    "drivers_strip": [
      {
        "title": "Current Driver (Last 5 Days)",
        "text": "Over the last 5 trading days, moves are mainly sector-driven, accounting for about 50.7% of price changes. Other influences are market 10.9%, and company-specific 38.4%."
      },
      {
        "title": "Driver Mix",
        "text": "Based on the last 5 trading days, current mix is market 10.9%, sector 50.7%, and company-specific 38.4%."
      },
      {
        "title": "Monthly Trend",
        "text": "The driver mix has shifted from company-driven to market-driven over Feb to Apr."
      }
    ],
    "drivers_pie_title": "Current Driver Mix (Last 5 Days)",
    "drivers_pie_note": "Based on the last 5 trading days, current split is market 10.9%, sector 50.7%, and company-specific 38.4%.",
    "lead_lag_title": "",
    "lead_lag_note": "",
    "rolling_title": "Monthly Driver Shift",
    "rolling_latest_label": "Latest: {period}",
    "rolling_note": "Each bar shows the monthly split between market-, sector-, and company-driven moves.",
    "drivers_bottom_line": "Sector influence is high at 50.7%, and displayed bid depth is only 0.68x of ask depth. That matters because broader market moves are still shaping trading while immediate buy-side support is thinner.",
    "drivers_wtd_title": "Key Reads",
    "drivers_wtd_list": [
      "Sector is the main driver now, accounting for 50.7% of recent price moves.",
      "The monthly pattern is more balanced now after being clearly company-driven in March."
    ],
    "regime_title": "Market State",
    "regime_subtitle": "The tape is being driven more by broader sector conditions than by company-specific trading.",
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
    "exec_check_subtitle": "Combines the final continuous-session displayed book before close, trade-size stress tests based on available history from Sep 9, 2025 to Apr 22, 2026 (156 trading days • 33,788 trades), large sell-side orders observed today, and intraday spread/depth during the continuous trading session.",
    "order_book_title": "Order Book Depth (Available Liquidity)",
    "order_book_note": "Depth shown is based on all available displayed levels (100 per side).",
    "peer_capacity_title": "Peer Capacity Context",
    "peer_capacity_note": "Immediate buy-side depth is lighter than the monthly baseline, so day-to-day access may feel weaker than the 1M score",
    "impact_summary_title": "Estimated Price Impact (Sell Orders)",
    "impact_summary_subtitle": "Approximate price impact (%) for sell orders.",
    "exec_check_insight": "Near-term execution looks less comfortable on the buy side. Displayed bid depth is 0.68x of ask depth and the spread is 2 ticks, which matters because current access looks weaker than the stronger six-month liquidity standing.",
    "trader_composition_title": "Who's Trading Your Stock?",
    "trader_composition_subtitle": "Shows whether trading is mostly retail-like, institution-like, mixed, or unclassified.",
    "trader_retail_threshold": "Retail-like flow",
    "trader_mixed_threshold": "Mixed flow",
    "trader_instit_threshold": "Institution-like flow",
    "peer_trader_title": "Peer Comparison: Trader Mix",
    "peer_trader_subtitle": "How the trader mix compares with peers.",
    "price_moving_title": "Which Trades Move the Price?",
    "price_moving_subtitle": "Price-moving trades are 39.7% of total trades.",
    "intraday_title": "When Does Trading Happen?",
    "intraday_subtitle": "Current execution conditions are defined more by order-book balance than by a broad improvement in access.",
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
    "intraday_insight": "Session split is open 1.5%, continuous 96.0%, and close 1.5%. Current trading concentration score is 0.173.",
    "short_title": "Short Selling & Lending",
    "short_subtitle": "Price strength is the more prominent feature of the tape than any sign of pressure from short activity.",
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
    "exec_subtitle": "Liquidity is holding up in peer terms, but current buy-side depth makes day-to-day access feel less robust than the six-month score",
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
        "value": "75.4/100",
        "sub": "Peer median 66.1 (+9.3 pts)",
        "interp": {
          "text": "Strong",
          "cls": "interpretation-good",
          "icon": "◆"
        }
      },
      {
        "title": "Volume vs Peers",
        "value": "S$388.5K",
        "sub": "Peer median S$133.5K",
        "interp": {
          "text": "Strong",
          "cls": "interpretation-good",
          "icon": "◆"
        }
      },
      {
        "title": "Spread",
        "value": "1.32%",
        "sub": "1.61 ticks; peers 1.85%",
        "interp": {
          "text": "Tighter",
          "cls": "interpretation-good",
          "icon": "◆"
        }
      }
    ],
    "liq_insight": "Liquidity is solid in peer terms but less comfortable in the current book. The six-month liquidity score is 75.4, ahead of the peer median at 66.1, while displayed bid depth is only 0.68x of ask depth with a 2-tick spread. That matters because medium-term access has been better than peers, but immediate buy-side liquidity looks thinner today.",
    "perf_badge": "Context",
    "exec_check_tiles": [
      {
        "title": "Mid Price",
        "value": "0.875",
        "note": "final continuous-session displayed book before close",
        "color": "text-white"
      },
      {
        "title": "Spread",
        "value": "1.14%",
        "note": "2.00 ticks",
        "color": "text-slate-300"
      },
      {
        "title": "Depth",
        "value": "0.68x",
        "note": "Bid depth / ask depth on the displayed 100-level book",
        "color": "text-slate-300"
      }
    ],
    "impact_summary_cards": [
      {
        "title": "~S$100K sell",
        "text": "Estimated impact ~-1.80% with 100.0% fill.",
        "cls": "ok"
      },
      {
        "title": "S$1.0M sell",
        "text": "Estimated impact ~-9.57% with 48.8% fill.",
        "cls": "warn"
      },
      {
        "title": "S$2.5M sell",
        "text": "Estimated impact ~-9.57% with 19.5% fill.",
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
        "subtext": "Rank 138/558",
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
        "value": "1.32",
        "suffix": "%",
        "bar_pct": 13,
        "color_value": "text-emerald-400",
        "color_bar": "bg-emerald-500",
        "subtext": "1.32% • 1.61 ticks vs peers 1.85%",
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
        "value": "388.5K",
        "value_prefix": "S$",
        "suffix": "",
        "bar_pct": 60,
        "color_value": "text-emerald-400",
        "color_bar": "bg-emerald-500",
        "subtext": "Peer median S$133.5K",
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
        "value": "50.7",
        "suffix": "sector",
        "bar_pct": 51,
        "color_value": "text-amber-400",
        "color_bar": "bg-amber-500",
        "subtext": "Market 10.9% • Company 38.4%",
        "interpretation": {
          "text": "Sector",
          "cls": "interpretation-neutral",
          "icon": "◆"
        }
      }
    ],
    "exec_takeaways": [
      "Liquidity is respectable in peer terms, with a six-month score of 75.4 compared with a peer median of 66.1. That matters because medium-term access is holding up better than the overall mixed stance might imply.",
      "The strongest recent signal is price performance. The stock returned 67.3% over 1M, ahead of peers at 11.7% and the market at 3.3%, which matters because the tape has a much firmer return backdrop than its main comparison groups.",
      "The main near-term watchpoint is thinner buy-side support. Displayed bid depth is 0.68x of ask depth, the spread is 2 ticks, and sector factors account for 50.7% of trading, which matters because day-to-day execution can feel less robust while broader market moves remain influential."
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
      "overall": "6M liquidity is strong: score 75.4 vs peer median 66.1 (+9.3 pts). Recent trend context is too limited to say whether access has changed from the 1M baseline.",
      "strengths": [
        "6M score 75.4 vs peer median 66.1 (+9.3 pts)."
      ],
      "concerns": [],
      "peer_context": "Primary-period score gap vs peers: +9.3 pts."
    },
    "market_comparison": {
      "returns": {
        "insight": "6M return is 104.7%, better than market, sector, and peers, which suggests stronger price performance than comparable names.",
        "vs_market": "Better than market: 104.7% vs market 14.2%.",
        "vs_sector": "Better than sector: 104.7% vs sector -26.4%.",
        "vs_peers": "Better than peers: 104.7% vs peers 2.7%."
      },
      "adv": {
        "insight": "ADV is S$388.5K, better than market, sector, and peers, which supports stronger day-to-day trading size than comparable names.",
        "vs_market": "Better than market: S$388.5K vs market S$11.7K.",
        "vs_sector": "Better than sector: S$388.5K vs sector S$12.2K.",
        "vs_peers": "Better than peers: S$388.5K vs peers S$133.5K."
      },
      "spread": {
        "insight": "Spread is 1.32%, better than market, sector, and peers, which keeps trading costs more competitive than comparable names.",
        "vs_market": "Better than market: 1.32% vs market 2.90%.",
        "vs_sector": "Better than sector: 1.32% vs sector 1.92%.",
        "vs_peers": "Better than peers: 1.32% vs peers 1.85%."
      },
      "turnover_ratio": {
        "insight": "Turnover ratio is 0.56%, better than market, sector, and peers, which shows a more active free-float turnover profile than comparable names.",
        "vs_market": "Better than market: 0.56% vs market 0.03%.",
        "vs_sector": "Better than sector: 0.56% vs sector 0.05%.",
        "vs_peers": "Better than peers: 0.56% vs peers 0.09%."
      },
      "volatility": {
        "insight": "Volatility is 113.95%, worse than market, sector, and peers, which suggests day-to-day price swings are heavier than comparable names.",
        "vs_market": "Worse than market: 113.95% vs market 43.96%.",
        "vs_sector": "Worse than sector: 113.95% vs sector 64.59%.",
        "vs_peers": "Worse than peers: 113.95% vs peers 59.77%."
      },
      "trades": {
        "insight": "Trades is 164, better than market, sector, and peers, which supports more fully reflective of day-to-day access day-to-day activity than comparable names.",
        "vs_market": "Better than market: 164 vs market 7.",
        "vs_sector": "Better than sector: 164 vs sector 12.",
        "vs_peers": "Better than peers: 164 vs peers 40."
      },
      "amihud": {
        "insight": "Price impact is 7.15e-08, better than market and sector, but worse than peers, which shows price impact is mixed across comparison groups.",
        "vs_market": "Better than market: 7.15e-08 vs market 1.73e-07.",
        "vs_sector": "Better than sector: 7.15e-08 vs sector 6.51e-07.",
        "vs_peers": "Worse than peers: 7.15e-08 vs peers 6.23e-08."
      }
    },
    "performance": {
      "overall": "Performance is strong relative to comparison groups. Recent price performance is stronger than the main comparison groups, so the tape has a firmer return backdrop than peers. Recent trend context is too limited to say whether access has changed from the 1M baseline.",
      "conclusion": "The rally looks strong but only partly backed by trading conditions, and it appears meaningfully sector-linked rather than purely company-specific."
    },
    "drivers": {
      "overall": "Current driver: Sector at 50.7%. Broader market or sector moves still explain a meaningful part of the tape, so the stock is not trading on company news alone.",
      "beta": "The current pattern looks mixed rather than fully settled. The stock has still outperformed strongly over one month, up 67.3% compared with 11.7% for peers and 3.3% for the market, but today’s trading setup is less one-way because the bid is lighter even with a 2-tick spread.",
      "rolling_change": "The monthly picture has shifted away from a clearly company-driven phase into a more balanced one. February was mixed with company factors still leading, March was clearly company-driven, and April became more mixed with market forces taking the largest share."
    },
    "regime": {
      "overall": "The stock is trading in a higher-volatility backdrop that appears durable, with a typical spell lasting about 19 days. That matters because trading conditions can stay uneven for longer even when overall liquidity looks reasonable for the stock's size.",
      "current": "High volatility is in place now, while the stock has also delivered a strong 1M return of 67.3%, ahead of peers at 11.7% and the market at 3.3%. That combination points to an active tape with larger price swings than a steadier market state would imply.",
      "transitions": "This looks more settled than fleeting because high-volatility periods typically last about 19 days. Even so, the picture is mixed rather than fully stable.",
      "trading_implications": "Trading conditions are likely to feel less steady day to day because the stock is in a persistent high-volatility phase and displayed bid depth is only 0.68x ask depth, even with the spread at 2 ticks."
    },
    "execution": {
      "overall": "Displayed liquidity looks mixed in the book today because the spread is 2 ticks but the bid side is materially thinner, with only 0.68x of ask depth. That matters because immediate sell-side pressure would meet less visible support than the broader liquidity profile implies.",
      "concern": "The clearest stress point is the imbalance on the bid side, where displayed depth is well below the ask. Trade-size context is informative but may be read with some care because it is based on 156 trading days and 33,788 trades rather than a full year.",
      "peer_context": "The broader standing remains solid, with a six-month liquidity score of 75.4 compared with a peer median of 66.1, but the current book does not fully match that relative strength. In practical terms, the stock screens well over time while the live depth looks thinner on the buy side today."
    },
    "trader_composition": {
      "overall": "By trade count and value, flow looks mainly retail-like.",
      "retail_heavy": "Retail-like trades account for 92.8% of trade count and 56.4% of trade value, while institution-like trades are 0.3% of count and 5.4% of value. That keeps the tape anchored by broad day-to-day activity, even if larger-value participation is relatively light.",
      "institutional_gap": "Institution-like activity is a small share on both count and value, at 0.3% and 5.4% respectively. That leaves the flow base looking broad rather than deep.",
      "peer_comparison": "Peer trader comparison is available in this report."
    },
    "price_moving": {
      "overall": "Price-moving trades make up 39.7% of total trades, so a meaningful share of activity is still shifting the price. That signal sits alongside a retail-like flow mix, with 92.8% of count and 56.4% of value coming from retail-like trades. The result is active trading, but with price formation still influenced by a broad base of smaller individual trades. Positive and negative price-moving trade asymmetry is available in the report data.",
      "interpretation": "",
      "asymmetry": ""
    },
    "short_selling": {
      "overall": "Low short interest Recent trend context is too limited to say whether access has changed from the 1M baseline.",
      "level": "Low short interest",
      "correlation": "No clear relationship",
      "trend": "Short positioning is building, with shorts up 62% month on month, so it is worth noting even from a low base. That said, the overall read remains mixed rather than disruptive because short activity still looks modest in absolute terms.",
      "peaks": "0 notable peak days identified."
    },
    "intraday": {
      "overall": "Liquidity is available through most of the day, with 96.0% of trading in the continuous session and only 1.5% at the open and close respectively.",
      "hhi_interpretation": "A concentration score of 0.173 indicates trading is spread across the session rather than confined to a few intervals. That makes intraday access look steadier.",
      "best_times": "The continuous session is clearly the main source of liquidity, as it carries 96.0% of activity. That matters because usable flow is not dependent on the auction windows.",
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
        "9MT",
        "PCT",
        "C76",
        "XHV",
        "1Y1",
        "ITS",
        "QS9",
        "575",
        "5DD"
      ],
      "scores": [
        75.44802867383513,
        81.72043010752688,
        56.451612903225815,
        33.15412186379928,
        30.286738351254485,
        80.64516129032258,
        76.88172043010752,
        13.082437275985665,
        75.80645161290323
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
        388492.5,
        961229.5,
        12188.75,
        550.8,
        455.7,
        265210.0,
        254787.65000000002,
        0.0,
        265378.0
      ],
      "total": 558
    },
    "market_comparison": {
      "sector_name": "Computer Hardware",
      "sector_count": 5,
      "market_count": 558,
      "company": {
        "volatility": 1.1395419602275736,
        "adv": 388492.5,
        "spread_pct": 0.013226780424116635,
        "turnover_ratio": 0.005630798131025969,
        "amihud": 7.149122030086165e-08,
        "trades": 164.5
      },
      "market": {
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.6949400865545378,
          "median": 0.4396350808083983,
          "min": 0.0,
          "max": 6.936569757452165,
          "p5": 0.15291345812470414,
          "p95": 2.1117851247065706,
          "count": 558
        },
        "adv": {
          "direction": "higher_is_better",
          "mean": 2573596.1070653573,
          "median": 11684.25,
          "min": 0.0,
          "max": 243597405.0,
          "p5": 0.0,
          "p95": 10437476.975,
          "count": 558
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.09506844984635239,
          "median": 0.028978517356113388,
          "min": 0.00027198195406526475,
          "max": 1.267605633802817,
          "p5": 0.0035774720816924444,
          "p95": 0.48590812227394437,
          "count": 556
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.003237226044862953,
          "median": 0.0002657375275951876,
          "min": 0.0,
          "max": 0.8552501483092743,
          "p5": 0.0,
          "p95": 0.007062166249711977,
          "count": 551
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 9.797468958231302e-06,
          "median": 1.7330836773744484e-07,
          "min": 0.0,
          "max": 0.0006620397444526588,
          "p5": 0.0,
          "p95": 4.2565766376012296e-05,
          "count": 557
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 375.32078853046596,
          "median": 6.75,
          "min": 0.0,
          "max": 10053.0,
          "p5": 0.0,
          "p95": 2022.8999999999985,
          "count": 558
        }
      },
      "sector": {
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.6988685958329197,
          "median": 0.6459433947195862,
          "min": 0.5026912432253077,
          "max": 1.1395419602275736,
          "p5": 0.5120323008979196,
          "p95": 1.0429875380628115,
          "count": 5
        },
        "adv": {
          "direction": "higher_is_better",
          "mean": 272583.45,
          "median": 12188.75,
          "min": 455.7,
          "max": 961229.5,
          "p5": 474.71999999999997,
          "p95": 846682.0999999999,
          "count": 5
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.02686804890860161,
          "median": 0.01923693689248531,
          "min": 0.00965936919962627,
          "max": 0.06779145766833872,
          "p5": 0.010372851444524343,
          "p95": 0.05911830620635919,
          "count": 5
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.0018691420420552875,
          "median": 0.00046892237160086985,
          "min": 1.1514071598965907e-05,
          "max": 0.005630798131025969,
          "p5": 1.4394607850582642e-05,
          "p95": 0.005146350281459491,
          "count": 5
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 1.0667255873525953e-06,
          "median": 6.514656630068227e-07,
          "min": 2.4514385098924982e-08,
          "max": 3.654041189011654e-06,
          "p5": 3.3909752139312314e-08,
          "p95": 3.109656047078265e-06,
          "count": 5
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 70.8,
          "median": 12.0,
          "min": 2.0,
          "max": 173.5,
          "p5": 2.0,
          "p95": 171.7,
          "count": 5
        }
      },
      "peers": {
        "adv": {
          "direction": "higher_is_better",
          "mean": 219975.05,
          "median": 133488.2,
          "min": 0.0,
          "max": 961229.5,
          "p5": 159.495,
          "p95": 717681.4749999996,
          "count": 8
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 59.0625,
          "median": 40.25,
          "min": 0.0,
          "max": 173.5,
          "p5": 0.7000000000000001,
          "p95": 156.7,
          "count": 8
        },
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.7901996823834173,
          "median": 0.5976699631539768,
          "min": 0.3900771602117763,
          "max": 2.36480862196139,
          "p5": 0.3960424583262247,
          "p95": 1.818802030371334,
          "count": 8
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.022127888932457568,
          "median": 0.018524636634284608,
          "min": 0.007314761389347933,
          "max": 0.06779145766833872,
          "p5": 0.00809539084983417,
          "p95": 0.05261344260987453,
          "count": 8
        },
        "spread_ticks": {
          "direction": "neutral",
          "mean": 1.8310981721941917,
          "median": 1.3757994148138208,
          "min": 1.0976190476190477,
          "max": 3.1597402597402597,
          "p5": 1.121433186705326,
          "p95": 3.024557664557664,
          "count": 8
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 6.817453209998792e-07,
          "median": 6.225455681289847e-08,
          "min": 2.4514385098924982e-08,
          "max": 3.654041189011654e-06,
          "p5": 2.6594063201872045e-08,
          "p95": 2.701367190628223e-06,
          "count": 8
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.003721104072799881,
          "median": 0.0008554372864562295,
          "min": 0.0,
          "max": 0.020456872076500564,
          "p5": 4.029925059638068e-06,
          "p95": 0.014821250528593108,
          "count": 8
        }
      }
    },
    "returns": [
      {
        "horizon": "1M",
        "stock": 0.6730769230769231,
        "market": 0.03334237016264918,
        "sector": 0.10462627187334572,
        "peers": 0.11685777901137562
      },
      {
        "horizon": "3M",
        "stock": -0.1714285714285716,
        "market": 0.03618894259398431,
        "sector": -0.14083678014271506,
        "peers": 0.07048847200863007
      },
      {
        "horizon": "6M",
        "stock": 1.0470588235294098,
        "market": 0.14189987283210126,
        "sector": -0.2637169964865361,
        "peers": 0.026556940074365265
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
      "share_market": 0.10916314629642818,
      "share_sector": 0.5068943782419715,
      "share_idio": 0.3839424754616004,
      "beta_market": -5.246678799256408,
      "beta_sector": -7.075658036791004,
      "driver_model": {
        "valid": true,
        "model_method": "ols_with_volatility_regimes",
        "estimation_window_days": 154,
        "reporting_window_days": 63,
        "available_history_days": 154,
        "n_regimes": 2,
        "current_regime": 1,
        "current_regime_label": "High Volatility",
        "current_regime_probability": 1.0,
        "current_driver_mix": {
          "market_share": {
            "median": 0.10916314629642818,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "10.9%",
            "display_range": null,
            "display_text": "10.9%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 154 trading days.",
            "kind": "share_pct",
            "value_pct": 10.9,
            "plain_english": "Market explains about 10.9% of price moves in the current state."
          },
          "sector_share": {
            "median": 0.5068943782419715,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "50.7%",
            "display_range": null,
            "display_text": "50.7%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 154 trading days.",
            "kind": "share_pct",
            "value_pct": 50.7,
            "plain_english": "Sector explains about 50.7% of price moves in the current state."
          },
          "company_share": {
            "median": 0.3839424754616004,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "38.4%",
            "display_range": null,
            "display_text": "38.4%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 154 trading days.",
            "kind": "share_pct",
            "value_pct": 38.4,
            "plain_english": "Company-specific explains about 38.4% of price moves in the current state."
          },
          "basis": "current_state"
        },
        "current_sensitivities": {
          "beta_market": {
            "median": -5.246678799256408,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "-5.25",
            "display_range": null,
            "display_text": "-5.25",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 154 trading days.",
            "kind": "beta",
            "strength_label": "Very high",
            "plain_english": "Very high market link: a 1% market move has lined up with about a 5.25% stock move in the opposite direction in this state. The multiplier is unusually large and comes from only 154 trading days of history.",
            "value_num": -5.25
          },
          "beta_stock_lag": {
            "median": 1.1818145915582066,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "1.18",
            "display_range": null,
            "display_text": "1.18",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 154 trading days.",
            "kind": "lag_beta",
            "value_num": 1.18
          },
          "beta_sector": {
            "median": -7.075658036791004,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "-7.08",
            "display_range": null,
            "display_text": "-7.08",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 154 trading days.",
            "kind": "beta",
            "strength_label": "Very high",
            "plain_english": "Very high sector link: a 1% sector move has lined up with about a 7.08% stock move in the opposite direction in this state. The multiplier is unusually large and comes from only 154 trading days of history.",
            "value_num": -7.08
          },
          "beta_market_lag": {
            "median": -0.8483719314031016,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "-0.85",
            "display_range": null,
            "display_text": "-0.85",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 154 trading days.",
            "kind": "lag_beta",
            "value_num": -0.85
          },
          "beta_sector_lag": {
            "median": -2.6967658818719835,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "-2.70",
            "display_range": null,
            "display_text": "-2.70",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 154 trading days.",
            "kind": "lag_beta",
            "value_num": -2.7
          },
          "posterior_source": null,
          "intervals_collapsed": false,
          "confidence_label": "High, limited history",
          "confidence_note": "Based on 154 trading days relative to the 252-day target."
        },
        "rolling_windows": {},
        "monthly_history": [
          {
            "month_key": "2025-09",
            "month_label": "September 2025",
            "month_short_label": "Sep",
            "period_label": "2025-09-11 to 2025-09-30",
            "n_obs": 14,
            "partial_month": true,
            "dominant_driver": "market",
            "dominant_driver_label": "Market",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.5659325716194616,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "56.6%",
              "display_range": null,
              "display_text": "56.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 14 trading days.",
              "kind": "share_pct",
              "value_pct": 56.6,
              "plain_english": "Market explains about 56.6% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.5659325716194616,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "56.6%",
                "display_range": null,
                "display_text": "56.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 14 trading days.",
                "kind": "share_pct",
                "value_pct": 56.6,
                "plain_english": "Market explains about 56.6% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.07659979283806088,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "7.7%",
                "display_range": null,
                "display_text": "7.7%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 14 trading days.",
                "kind": "share_pct",
                "value_pct": 7.7,
                "plain_english": "Sector explains about 7.7% of price moves in the current state."
              },
              "company_share": {
                "median": 0.35746763554247746,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "35.7%",
                "display_range": null,
                "display_text": "35.7%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 14 trading days.",
                "kind": "share_pct",
                "value_pct": 35.7,
                "plain_english": "Company-specific explains about 35.7% of price moves in the current state."
              }
            },
            "summary": "Sep: Mostly market-driven."
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
              "median": 0.7228515871765109,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "72.3%",
              "display_range": null,
              "display_text": "72.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 72.3,
              "plain_english": "Company-specific explains about 72.3% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.10427116285925864,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "10.4%",
                "display_range": null,
                "display_text": "10.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 10.4,
                "plain_english": "Market explains about 10.4% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.17287724996423043,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "17.3%",
                "display_range": null,
                "display_text": "17.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 17.3,
                "plain_english": "Sector explains about 17.3% of price moves in the current state."
              },
              "company_share": {
                "median": 0.7228515871765109,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "72.3%",
                "display_range": null,
                "display_text": "72.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 72.3,
                "plain_english": "Company-specific explains about 72.3% of price moves in the current state."
              }
            },
            "summary": "Oct: Still clearly company-driven."
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
              "median": 0.6117167787969162,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "61.2%",
              "display_range": null,
              "display_text": "61.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 61.2,
              "plain_english": "Company-specific explains about 61.2% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.2503511769574372,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "25.0%",
                "display_range": null,
                "display_text": "25.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 25.0,
                "plain_english": "Market explains about 25.0% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.1379320442456465,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "13.8%",
                "display_range": null,
                "display_text": "13.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 13.8,
                "plain_english": "Sector explains about 13.8% of price moves in the current state."
              },
              "company_share": {
                "median": 0.6117167787969162,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "61.2%",
                "display_range": null,
                "display_text": "61.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 61.2,
                "plain_english": "Company-specific explains about 61.2% of price moves in the current state."
              }
            },
            "summary": "Nov: Still clearly company-driven."
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
              "median": 0.6424378883899238,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "64.2%",
              "display_range": null,
              "display_text": "64.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 64.2,
              "plain_english": "Company-specific explains about 64.2% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.22446432455826557,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "22.4%",
                "display_range": null,
                "display_text": "22.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 22.4,
                "plain_english": "Market explains about 22.4% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.13309778705181072,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "13.3%",
                "display_range": null,
                "display_text": "13.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 13.3,
                "plain_english": "Sector explains about 13.3% of price moves in the current state."
              },
              "company_share": {
                "median": 0.6424378883899238,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "64.2%",
                "display_range": null,
                "display_text": "64.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 64.2,
                "plain_english": "Company-specific explains about 64.2% of price moves in the current state."
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
            "dominant_driver": "market",
            "dominant_driver_label": "Market",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.4992516179769926,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "49.9%",
              "display_range": null,
              "display_text": "49.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 49.9,
              "plain_english": "Market explains about 49.9% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.4992516179769926,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "49.9%",
                "display_range": null,
                "display_text": "49.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 49.9,
                "plain_english": "Market explains about 49.9% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.05995205062700258,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "6.0%",
                "display_range": null,
                "display_text": "6.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 6.0,
                "plain_english": "Sector explains about 6.0% of price moves in the current state."
              },
              "company_share": {
                "median": 0.44079633139600477,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "44.1%",
                "display_range": null,
                "display_text": "44.1%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 44.1,
                "plain_english": "Company-specific explains about 44.1% of price moves in the current state."
              }
            },
            "summary": "Jan: Mostly market-driven."
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
              "median": 0.41751606966068017,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "41.8%",
              "display_range": null,
              "display_text": "41.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
              "kind": "share_pct",
              "value_pct": 41.8,
              "plain_english": "Company-specific explains about 41.8% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.25366497612047584,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "25.4%",
                "display_range": null,
                "display_text": "25.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
                "kind": "share_pct",
                "value_pct": 25.4,
                "plain_english": "Market explains about 25.4% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.3288189542188441,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "32.9%",
                "display_range": null,
                "display_text": "32.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
                "kind": "share_pct",
                "value_pct": 32.9,
                "plain_english": "Sector explains about 32.9% of price moves in the current state."
              },
              "company_share": {
                "median": 0.41751606966068017,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "41.8%",
                "display_range": null,
                "display_text": "41.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 18 trading days.",
                "kind": "share_pct",
                "value_pct": 41.8,
                "plain_english": "Company-specific explains about 41.8% of price moves in the current state."
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
              "median": 0.7742772752136576,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "77.4%",
              "display_range": null,
              "display_text": "77.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 77.4,
              "plain_english": "Company-specific explains about 77.4% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.07394003806391374,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "7.4%",
                "display_range": null,
                "display_text": "7.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 7.4,
                "plain_english": "Market explains about 7.4% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.15178268672242864,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "15.2%",
                "display_range": null,
                "display_text": "15.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 15.2,
                "plain_english": "Sector explains about 15.2% of price moves in the current state."
              },
              "company_share": {
                "median": 0.7742772752136576,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "77.4%",
                "display_range": null,
                "display_text": "77.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 77.4,
                "plain_english": "Company-specific explains about 77.4% of price moves in the current state."
              }
            },
            "summary": "Mar: Still clearly company-driven."
          },
          {
            "month_key": "2026-04",
            "month_label": "April 2026",
            "month_short_label": "Apr",
            "period_label": "2026-04-01 to 2026-04-22",
            "n_obs": 15,
            "partial_month": false,
            "dominant_driver": "market",
            "dominant_driver_label": "Market",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.4153423116064334,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "41.5%",
              "display_range": null,
              "display_text": "41.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
              "kind": "share_pct",
              "value_pct": 41.5,
              "plain_english": "Market explains about 41.5% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.4153423116064334,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "41.5%",
                "display_range": null,
                "display_text": "41.5%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
                "kind": "share_pct",
                "value_pct": 41.5,
                "plain_english": "Market explains about 41.5% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.17743142177928053,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "17.7%",
                "display_range": null,
                "display_text": "17.7%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
                "kind": "share_pct",
                "value_pct": 17.7,
                "plain_english": "Sector explains about 17.7% of price moves in the current state."
              },
              "company_share": {
                "median": 0.4072262666142861,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "40.7%",
                "display_range": null,
                "display_text": "40.7%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
                "kind": "share_pct",
                "value_pct": 40.7,
                "plain_english": "Company-specific explains about 40.7% of price moves in the current state."
              }
            },
            "summary": "Apr: More mixed, though market-driven still has the largest share."
          }
        ],
        "regimes": [
          {
            "id": 0,
            "label": "Low Volatility",
            "pct_time": 0.5,
            "expected_duration_days": 25.333333333333332,
            "current_probability": 0.0,
            "n_days_effective": 76.0,
            "volatility": {
              "median": 0.029746540662872984,
              "low": 0.029746540662872984,
              "high": 0.029746540662872984
            },
            "volatility_label": "Low Volatility",
            "current_probability_display": 0.0
          },
          {
            "id": 1,
            "label": "High Volatility",
            "pct_time": 0.5,
            "expected_duration_days": 19.0,
            "current_probability": 1.0,
            "n_days_effective": 76.0,
            "volatility": {
              "median": 0.11195769365391701,
              "low": 0.11195769365391701,
              "high": 0.11195769365391701
            },
            "volatility_label": "High Volatility",
            "current_probability_display": null
          }
        ],
        "transitions": {
          "mean": [
            [
              0.9605263157894737,
              0.039473684210526314
            ],
            [
              0.04,
              0.96
            ]
          ],
          "low": [],
          "high": [],
          "counts": [
            [
              73.0,
              3.0
            ],
            [
              3.0,
              72.0
            ]
          ]
        },
        "methodology": {
          "estimation_window_days": 154,
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
          "market_link_display": "-5.25",
          "sector_link_display": "-7.08",
          "market_link_explainer": "Very high market link. A 1% market move has lined up with about a 5.25% stock move in the opposite direction in this state. This is a point estimate from 154 trading days.",
          "sector_link_explainer": "Very high sector link. A 1% sector move has lined up with about a 7.08% stock move in the opposite direction in this state. This is a point estimate from 154 trading days.",
          "stock_persistence_display": "1.18",
          "point_estimate_note": "Point estimate only because the current state has 154 trading days.",
          "history_limited_note": "Read is based on 154 trading days versus the 252-day target."
        },
        "current_summary": {
          "regime_label": "High Volatility",
          "dominant_driver": "sector",
          "dominant_driver_label": "Sector",
          "driver_share_pct": 50.7,
          "driver_share_display": "50.7%",
          "confidence_label": "High, limited history",
          "confidence_pct": 100.0,
          "display_confidence_pct": null,
          "confidence_note": "Based on 154 trading days relative to the 252-day target.",
          "history_days": 154,
          "history_limited": true,
          "volatility_label": "High Volatility",
          "lead_signal_text": "No stable lead signal.",
          "state_term": "state",
          "stay_probability": 0.96,
          "effective_days": 76.0,
          "persistence_note": "This state looks more persistent, with a typical run length of about 19.0 days.",
          "expected_duration_days": 19.0
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
          "month_key": "2025-09",
          "month_label": "September 2025",
          "month_short_label": "Sep",
          "period_label": "2025-09-11 to 2025-09-30",
          "n_obs": 14,
          "partial_month": true,
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "regime_label": null,
          "summary": "Sep: Mostly market-driven.",
          "share_market": 0.5659325716194616,
          "share_sector": 0.07659979283806088,
          "share_company": 0.35746763554247746,
          "share_market_display": "56.6%",
          "share_sector_display": "7.7%",
          "share_company_display": "35.7%",
          "dominant_share_display": "56.6%"
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
          "summary": "Oct: Still clearly company-driven.",
          "share_market": 0.10427116285925864,
          "share_sector": 0.17287724996423043,
          "share_company": 0.7228515871765109,
          "share_market_display": "10.4%",
          "share_sector_display": "17.3%",
          "share_company_display": "72.3%",
          "dominant_share_display": "72.3%"
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
          "summary": "Nov: Still clearly company-driven.",
          "share_market": 0.2503511769574372,
          "share_sector": 0.1379320442456465,
          "share_company": 0.6117167787969162,
          "share_market_display": "25.0%",
          "share_sector_display": "13.8%",
          "share_company_display": "61.2%",
          "dominant_share_display": "61.2%"
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
          "share_market": 0.22446432455826557,
          "share_sector": 0.13309778705181072,
          "share_company": 0.6424378883899238,
          "share_market_display": "22.4%",
          "share_sector_display": "13.3%",
          "share_company_display": "64.2%",
          "dominant_share_display": "64.2%"
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
          "summary": "Jan: Mostly market-driven.",
          "share_market": 0.4992516179769926,
          "share_sector": 0.05995205062700258,
          "share_company": 0.44079633139600477,
          "share_market_display": "49.9%",
          "share_sector_display": "6.0%",
          "share_company_display": "44.1%",
          "dominant_share_display": "49.9%"
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
          "summary": "Feb: More mixed, though company-driven still has the largest share.",
          "share_market": 0.25366497612047584,
          "share_sector": 0.3288189542188441,
          "share_company": 0.41751606966068017,
          "share_market_display": "25.4%",
          "share_sector_display": "32.9%",
          "share_company_display": "41.8%",
          "dominant_share_display": "41.8%"
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
          "summary": "Mar: Still clearly company-driven.",
          "share_market": 0.07394003806391374,
          "share_sector": 0.15178268672242864,
          "share_company": 0.7742772752136576,
          "share_market_display": "7.4%",
          "share_sector_display": "15.2%",
          "share_company_display": "77.4%",
          "dominant_share_display": "77.4%"
        },
        {
          "month_key": "2026-04",
          "month_label": "April 2026",
          "month_short_label": "Apr",
          "period_label": "2026-04-01 to 2026-04-22",
          "n_obs": 15,
          "partial_month": false,
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "regime_label": null,
          "summary": "Apr: More mixed, though market-driven still has the largest share.",
          "share_market": 0.4153423116064334,
          "share_sector": 0.17743142177928053,
          "share_company": 0.4072262666142861,
          "share_market_display": "41.5%",
          "share_sector_display": "17.7%",
          "share_company_display": "40.7%",
          "dominant_share_display": "41.5%"
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
          0.5,
          0.5
        ],
        "current_regime": 1,
        "regimes": [
          {
            "id": 0,
            "label": "Low Volatility",
            "pct_time": 0.5,
            "expected_duration_days": 25.333333333333332,
            "current_probability": 0.0,
            "n_days_effective": 76.0,
            "volatility": {
              "median": 0.029746540662872984,
              "low": 0.029746540662872984,
              "high": 0.029746540662872984
            },
            "volatility_label": "Low Volatility"
          },
          {
            "id": 1,
            "label": "High Volatility",
            "pct_time": 0.5,
            "expected_duration_days": 19.0,
            "current_probability": 1.0,
            "n_days_effective": 76.0,
            "volatility": {
              "median": 0.11195769365391701,
              "low": 0.11195769365391701,
              "high": 0.11195769365391701
            },
            "volatility_label": "High Volatility"
          }
        ],
        "transitions": [
          [
            0.9605263157894737,
            0.039473684210526314
          ],
          [
            0.04,
            0.96
          ]
        ]
      }
    },
    "order_book": {
      "bids": [
        {
          "level": 1,
          "price": 0.87,
          "quantity": 19900.0,
          "value": 17313.0
        },
        {
          "level": 2,
          "price": 0.865,
          "quantity": 12300.0,
          "value": 10639.5
        },
        {
          "level": 3,
          "price": 0.86,
          "quantity": 26800.0,
          "value": 23048.0
        },
        {
          "level": 4,
          "price": 0.855,
          "quantity": 44900.0,
          "value": 38389.5
        },
        {
          "level": 5,
          "price": 0.85,
          "quantity": 112700.0,
          "value": 95795.0
        },
        {
          "level": 6,
          "price": 0.845,
          "quantity": 112400.0,
          "value": 94978.0
        },
        {
          "level": 7,
          "price": 0.84,
          "quantity": 20500.0,
          "value": 17220.0
        },
        {
          "level": 8,
          "price": 0.835,
          "quantity": 20300.0,
          "value": 16950.5
        },
        {
          "level": 9,
          "price": 0.83,
          "quantity": 27400.0,
          "value": 22742.0
        },
        {
          "level": 10,
          "price": 0.82,
          "quantity": 10700.0,
          "value": 8774.0
        },
        {
          "level": 11,
          "price": 0.81,
          "quantity": 1000.0,
          "value": 810.0
        },
        {
          "level": 12,
          "price": 0.805,
          "quantity": 3000.0,
          "value": 2415.0
        },
        {
          "level": 13,
          "price": 0.8,
          "quantity": 100800.0,
          "value": 80640.0
        },
        {
          "level": 14,
          "price": 0.795,
          "quantity": 1300.0,
          "value": 1033.5
        },
        {
          "level": 15,
          "price": 0.785,
          "quantity": 3000.0,
          "value": 2355.0
        },
        {
          "level": 16,
          "price": 0.78,
          "quantity": 10000.0,
          "value": 7800.0
        },
        {
          "level": 17,
          "price": 0.765,
          "quantity": 500.0,
          "value": 382.5
        },
        {
          "level": 18,
          "price": 0.76,
          "quantity": 1500.0,
          "value": 1140.0
        },
        {
          "level": 19,
          "price": 0.655,
          "quantity": 20000.0,
          "value": 13100.0
        },
        {
          "level": 20,
          "price": 0.65,
          "quantity": 20000.0,
          "value": 13000.0
        },
        {
          "level": 21,
          "price": 0.64,
          "quantity": 2000.0,
          "value": 1280.0
        },
        {
          "level": 22,
          "price": 0.6,
          "quantity": 4000.0,
          "value": 2400.0
        },
        {
          "level": 23,
          "price": 0.555,
          "quantity": 900.0,
          "value": 499.50000000000006
        },
        {
          "level": 24,
          "price": 0.485,
          "quantity": 15400.0,
          "value": 7469.0
        },
        {
          "level": 25,
          "price": 0.3,
          "quantity": 25000.0,
          "value": 7500.0
        }
      ],
      "asks": [
        {
          "level": 1,
          "price": 0.88,
          "quantity": 50000.0,
          "value": 44000.0
        },
        {
          "level": 2,
          "price": 0.885,
          "quantity": 6700.0,
          "value": 5929.5
        },
        {
          "level": 3,
          "price": 0.89,
          "quantity": 20200.0,
          "value": 17978.0
        },
        {
          "level": 4,
          "price": 0.9,
          "quantity": 10400.0,
          "value": 9360.0
        },
        {
          "level": 5,
          "price": 0.905,
          "quantity": 1700.0,
          "value": 1538.5
        },
        {
          "level": 6,
          "price": 0.91,
          "quantity": 31900.0,
          "value": 29029.0
        },
        {
          "level": 7,
          "price": 0.93,
          "quantity": 65100.0,
          "value": 60543.0
        },
        {
          "level": 8,
          "price": 0.935,
          "quantity": 2100.0,
          "value": 1963.5
        },
        {
          "level": 9,
          "price": 0.94,
          "quantity": 10000.0,
          "value": 9400.0
        },
        {
          "level": 10,
          "price": 0.95,
          "quantity": 18100.0,
          "value": 17195.0
        },
        {
          "level": 11,
          "price": 0.955,
          "quantity": 5000.0,
          "value": 4775.0
        },
        {
          "level": 12,
          "price": 0.96,
          "quantity": 3500.0,
          "value": 3360.0
        },
        {
          "level": 13,
          "price": 0.965,
          "quantity": 3600.0,
          "value": 3474.0
        },
        {
          "level": 14,
          "price": 0.97,
          "quantity": 10000.0,
          "value": 9700.0
        },
        {
          "level": 15,
          "price": 0.98,
          "quantity": 25000.0,
          "value": 24500.0
        },
        {
          "level": 16,
          "price": 0.99,
          "quantity": 30000.0,
          "value": 29700.0
        },
        {
          "level": 17,
          "price": 0.995,
          "quantity": 10500.0,
          "value": 10447.5
        },
        {
          "level": 18,
          "price": 1.0,
          "quantity": 65000.0,
          "value": 65000.0
        },
        {
          "level": 19,
          "price": 1.01,
          "quantity": 18600.0,
          "value": 18786.0
        },
        {
          "level": 20,
          "price": 1.02,
          "quantity": 7000.0,
          "value": 7140.0
        },
        {
          "level": 21,
          "price": 1.03,
          "quantity": 31100.0,
          "value": 32033.0
        },
        {
          "level": 22,
          "price": 1.04,
          "quantity": 4100.0,
          "value": 4264.0
        },
        {
          "level": 23,
          "price": 1.05,
          "quantity": 5100.0,
          "value": 5355.0
        },
        {
          "level": 24,
          "price": 1.06,
          "quantity": 4600.0,
          "value": 4876.0
        },
        {
          "level": 25,
          "price": 1.07,
          "quantity": 94800.0,
          "value": 101436.0
        },
        {
          "level": 26,
          "price": 1.08,
          "quantity": 5300.0,
          "value": 5724.0
        },
        {
          "level": 27,
          "price": 1.09,
          "quantity": 5900.0,
          "value": 6431.000000000001
        },
        {
          "level": 28,
          "price": 1.1,
          "quantity": 16400.0,
          "value": 18040.0
        },
        {
          "level": 29,
          "price": 1.11,
          "quantity": 6200.0,
          "value": 6882.000000000001
        },
        {
          "level": 30,
          "price": 1.12,
          "quantity": 8700.0,
          "value": 9744.000000000002
        },
        {
          "level": 31,
          "price": 1.13,
          "quantity": 6300.0,
          "value": 7118.999999999999
        },
        {
          "level": 32,
          "price": 1.14,
          "quantity": 8300.0,
          "value": 9462.0
        },
        {
          "level": 33,
          "price": 1.15,
          "quantity": 23700.0,
          "value": 27254.999999999996
        },
        {
          "level": 34,
          "price": 1.16,
          "quantity": 6800.0,
          "value": 7887.999999999999
        },
        {
          "level": 35,
          "price": 1.17,
          "quantity": 9800.0,
          "value": 11466.0
        },
        {
          "level": 36,
          "price": 1.19,
          "quantity": 10200.0,
          "value": 12138.0
        },
        {
          "level": 37,
          "price": 1.2,
          "quantity": 10200.0,
          "value": 12240.0
        },
        {
          "level": 38,
          "price": 1.21,
          "quantity": 10400.0,
          "value": 12584.0
        },
        {
          "level": 39,
          "price": 1.22,
          "quantity": 10400.0,
          "value": 12688.0
        },
        {
          "level": 40,
          "price": 1.23,
          "quantity": 11400.0,
          "value": 14022.0
        },
        {
          "level": 41,
          "price": 1.24,
          "quantity": 11300.0,
          "value": 14012.0
        },
        {
          "level": 42,
          "price": 1.27,
          "quantity": 5000.0,
          "value": 6350.0
        }
      ]
    },
    "execution_dynamic": {
      "snapshot": {
        "valid": true,
        "snapshot_time": "2026-04-22 08:59:58.111000000",
        "snapshot_basis": "last_continuous_session_snapshot",
        "snapshot_label": "final continuous-session displayed book before close",
        "snapshot_note": "Final continuous-session displayed book before close",
        "snapshot_mic": "XSES",
        "mid_price": 0.875,
        "spread_pct": 0.011428571428571439,
        "spread_ticks": 2.0,
        "tick_size": 0.005,
        "displayed_levels_per_side": 100,
        "bid_depth_notional_displayed": 487674.0,
        "ask_depth_notional_displayed": 715828.0,
        "bid_depth_notional_top10": 487674.0,
        "ask_depth_notional_top10": 715828.0,
        "bid_ask_depth_ratio": 0.6813
      },
      "historical_trade_scenarios": {
        "valid": true,
        "requested_lookback_calendar_days": 365,
        "lookback_calendar_days": 365,
        "effective_calendar_days": 226,
        "history_limited": true,
        "trade_days_used": 156,
        "n_trades_used": 33788,
        "first_trade_date": "2025-09-09",
        "last_trade_date": "2026-04-22",
        "window_label": "Sep 9, 2025 to Apr 22, 2026",
        "window_short_label": "Sep 9, 2025 to Apr 22, 2026",
        "trade_days_label": "156 trading days",
        "trade_count_label": "33,788 trades",
        "window_detail_label": "156 trading days • 33,788 trades",
        "history_note": "Trade-size percentiles use available history from Sep 9, 2025 to Apr 22, 2026 (156 trading days • 33,788 trades), not a full year.",
        "scenarios": [
          {
            "key": "p90",
            "label": "90th percentile trade",
            "quantile": 0.9,
            "trade_notional": 6350.0,
            "impact_pct": -0.005714,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 1.3,
            "pct_of_adv": 0.71
          },
          {
            "key": "p95",
            "label": "95th percentile trade",
            "quantile": 0.95,
            "trade_notional": 9944.87,
            "impact_pct": -0.005714,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 2.04,
            "pct_of_adv": 1.12
          },
          {
            "key": "p99_99",
            "label": "99.99th percentile trade",
            "quantile": 0.9999,
            "trade_notional": 127639.66,
            "impact_pct": -0.02032,
            "filled_pct": 100.0,
            "levels_consumed": 5,
            "pct_of_bid_depth": 26.17,
            "pct_of_adv": 14.35
          }
        ]
      },
      "l3_sell_order_scenarios": {
        "valid": true,
        "trade_date": "2026-04-22",
        "selection_method": "largest_observed_ask_orders_during_day",
        "orders": [
          {
            "rank": 1,
            "order_id": "8139994092949308416",
            "timestamp": "2026-04-22 01:22:27.990500000",
            "local_timestamp": "2026-04-22 09:22:27",
            "posted_price": 0.95,
            "size_shares": 100000.0,
            "notional": 95000.0,
            "impact_pct": -0.017453,
            "filled_pct": 100.0,
            "levels_consumed": 5,
            "pct_of_bid_depth": 19.48,
            "price_vs_mid_pct": 8.571,
            "executed_event_count": 0,
            "event_count": 1
          },
          {
            "rank": 2,
            "order_id": "8138989689079121920",
            "timestamp": "2026-04-21 22:59:03.808900000",
            "local_timestamp": "2026-04-22 06:59:03",
            "posted_price": 1.07,
            "size_shares": 80000.0,
            "notional": 85600.0,
            "impact_pct": -0.016475,
            "filled_pct": 100.0,
            "levels_consumed": 4,
            "pct_of_bid_depth": 17.55,
            "price_vs_mid_pct": 22.286,
            "executed_event_count": 0,
            "event_count": 1
          },
          {
            "rank": 3,
            "order_id": "8139994092949460992",
            "timestamp": "2026-04-22 02:14:26.794200000",
            "local_timestamp": "2026-04-22 10:14:26",
            "posted_price": 0.93,
            "size_shares": 70000.0,
            "notional": 65100.0,
            "impact_pct": -0.014447000000000002,
            "filled_pct": 100.0,
            "levels_consumed": 4,
            "pct_of_bid_depth": 13.35,
            "price_vs_mid_pct": 6.286,
            "executed_event_count": 0,
            "event_count": 4
          }
        ]
      },
      "intraday_liquidity_profile": {
        "valid": true,
        "trade_date": "2026-04-22",
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
            "spread_pct": 0.010869565217391313,
            "spread_ticks": 2.0000000000000018,
            "bid_depth_notional": 315875.0,
            "ask_depth_notional": 764463.0,
            "mid_price": 0.92
          },
          {
            "bucket": "09:30",
            "spread_pct": 0.005633802816901414,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 251030.5,
            "ask_depth_notional": 919519.5,
            "mid_price": 0.8875
          },
          {
            "bucket": "10:00",
            "spread_pct": 0.005763688760806922,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 348999.0,
            "ask_depth_notional": 899451.5,
            "mid_price": 0.8674999999999999
          },
          {
            "bucket": "10:30",
            "spread_pct": 0.011627906976744196,
            "spread_ticks": 2.0000000000000018,
            "bid_depth_notional": 391823.0,
            "ask_depth_notional": 919875.5,
            "mid_price": 0.86
          },
          {
            "bucket": "11:00",
            "spread_pct": 0.005797101449275368,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 425624.0,
            "ask_depth_notional": 950407.5,
            "mid_price": 0.8625
          },
          {
            "bucket": "11:30",
            "spread_pct": 0.005763688760806922,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 450556.0,
            "ask_depth_notional": 930281.5,
            "mid_price": 0.8674999999999999
          },
          {
            "bucket": "13:00",
            "spread_pct": 0.011494252873563229,
            "spread_ticks": 2.0000000000000018,
            "bid_depth_notional": 469790.0,
            "ask_depth_notional": 803834.5,
            "mid_price": 0.87
          },
          {
            "bucket": "13:30",
            "spread_pct": 0.005665722379603404,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 549721.0,
            "ask_depth_notional": 792290.5,
            "mid_price": 0.8825000000000001
          },
          {
            "bucket": "14:00",
            "spread_pct": 0.0056980056980057035,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 548665.0,
            "ask_depth_notional": 789994.0,
            "mid_price": 0.8775
          },
          {
            "bucket": "14:30",
            "spread_pct": 0.011494252873563229,
            "spread_ticks": 2.0000000000000018,
            "bid_depth_notional": 467149.5,
            "ask_depth_notional": 791209.0,
            "mid_price": 0.87
          },
          {
            "bucket": "15:00",
            "spread_pct": 0.005763688760806922,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 434700.5,
            "ask_depth_notional": 792978.0,
            "mid_price": 0.8674999999999999
          },
          {
            "bucket": "15:30",
            "spread_pct": 0.011428571428571439,
            "spread_ticks": 2.0000000000000018,
            "bid_depth_notional": 464953.5,
            "ask_depth_notional": 757155.5,
            "mid_price": 0.875
          },
          {
            "bucket": "16:00",
            "spread_pct": 0.005730659025787971,
            "spread_ticks": 1.0000000000000009,
            "bid_depth_notional": 480922.5,
            "ask_depth_notional": 724078.5,
            "mid_price": 0.8725
          },
          {
            "bucket": "16:30",
            "spread_pct": 0.011428571428571439,
            "spread_ticks": 2.0000000000000018,
            "bid_depth_notional": 487674.0,
            "ask_depth_notional": 715828.0,
            "mid_price": 0.875
          }
        ],
        "summary": {
          "median_spread_pct": 0.005780395105041145,
          "median_spread_ticks": 1.0000000000000009,
          "median_bid_depth_notional": 457754.75,
          "median_ask_depth_notional": 792634.25,
          "tightest_bucket": "09:30",
          "widest_bucket": "10:30",
          "deepest_bid_bucket": "13:30",
          "thinnest_bid_bucket": "09:30"
        }
      }
    },
    "peer_capacity": {
      "bx_ticket_pct_adv_50k": 5.6,
      "peers": [
        {
          "ticker": "PCT",
          "pct": 22.5
        },
        {
          "ticker": "5DD",
          "pct": 75.4
        },
        {
          "ticker": "575",
          "pct": 97.6
        },
        {
          "ticker": "ITS",
          "pct": 157.6
        },
        {
          "ticker": "QS9",
          "pct": 200.3
        },
        {
          "ticker": "C76",
          "pct": 26146.4
        },
        {
          "ticker": "XHV",
          "pct": 227531.3
        },
        {
          "ticker": "1Y1",
          "pct": 499750.1
        }
      ]
    },
    "trader_composition": {
      "primary_period": "6m",
      "periods": {
        "1d": {
          "valid": true,
          "currency": "SGD",
          "n_trades": 204,
          "n_runs": 0,
          "n_trade_days": 0,
          "first_trade_date": "2026-04-22",
          "last_trade_date": "2026-04-22",
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
            "retail_pct": 0.9117647058823529,
            "mixed_pct": 0.08823529411764706,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.563754977548081,
            "mixed_qty_pct": 0.436245022451919,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.5639538865316225,
            "mixed_notional_pct": 0.4360461134683775,
            "instit_notional_pct": 0.0,
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
            "avg": 5082.093137254902,
            "median": 2556.0
          },
          "run_size": {
            "avg": null,
            "median": null,
            "avg_length": null
          },
          "recent_trades": [],
          "peer_comparison": [
            {
              "ticker": "9MT",
              "currency": "SGD",
              "is_target": true,
              "retail_pct": 0.9117647058823529,
              "mixed_pct": 0.08823529411764706,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.563754977548081,
              "mixed_qty_pct": 0.436245022451919,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.5639538865316225,
              "mixed_notional_pct": 0.4360461134683775,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 5082.093137254902,
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
              "ticker": "C76",
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
              "avg_trade_size": 666.75,
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
              "ticker": "1Y1",
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
              "avg_trade_size": 1236.9,
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
              "retail_pct": 0.9843505477308294,
              "mixed_pct": 0.01564945226917058,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.687013468429507,
              "mixed_qty_pct": 0.312986531570493,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.6875234906305941,
              "mixed_notional_pct": 0.3124765093694058,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 1369.8732394366198,
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
              "ticker": "QS9",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.9318181818181818,
              "mixed_pct": 0.06818181818181818,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.5842747684931292,
              "mixed_qty_pct": 0.4157252315068708,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.5852233591772705,
              "mixed_notional_pct": 0.4147766408227294,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 3231.1517045454543,
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
              "ticker": "5DD",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.9317269076305221,
              "mixed_pct": 0.060240963855421686,
              "instit_pct": 0.008032128514056224,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.45428840716305374,
              "mixed_qty_pct": 0.3916790090211391,
              "instit_qty_pct": 0.1540325838158072,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.45634194431981867,
              "mixed_notional_pct": 0.3916642491136576,
              "instit_notional_pct": 0.15199380656652375,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 4762.136546184739,
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
              "ticker": "575",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.811088295687885,
              "mixed_pct": 0.17659137577002054,
              "instit_pct": 0.012320328542094456,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.3305663299767008,
              "mixed_qty_pct": 0.5492461327589583,
              "instit_qty_pct": 0.12018753726434085,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.3335898201195496,
              "mixed_notional_pct": 0.5506449398763337,
              "instit_notional_pct": 0.11576524000411682,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 8537.143942505132,
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
              "ticker": "PCT",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.781750924784217,
              "mixed_pct": 0.18495684340320592,
              "instit_pct": 0.03329223181257707,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.16621940310644873,
              "mixed_qty_pct": 0.4671667886476376,
              "instit_qty_pct": 0.36661380824591366,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.16635674170565753,
              "mixed_notional_pct": 0.4665384356378339,
              "instit_notional_pct": 0.3671048226565085,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 11517.180024660913,
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
          "n_trades": 4319,
          "n_runs": 0,
          "n_trade_days": 0,
          "first_trade_date": "2026-03-24",
          "last_trade_date": "2026-04-22",
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
            "retail_pct": 0.9247510997916184,
            "mixed_pct": 0.07200740912248206,
            "instit_pct": 0.0032414910858995136,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.5414886894020725,
            "mixed_qty_pct": 0.38106550324737126,
            "instit_qty_pct": 0.0774458073505562,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.5356320571537814,
            "mixed_notional_pct": 0.3929961023682766,
            "instit_notional_pct": 0.07137184047794198,
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
            "avg": 4449.036003704561,
            "median": 1581.0
          },
          "run_size": {
            "avg": null,
            "median": null,
            "avg_length": null
          },
          "recent_trades": [],
          "peer_comparison": [
            {
              "ticker": "9MT",
              "currency": "SGD",
              "is_target": true,
              "retail_pct": 0.9247510997916184,
              "mixed_pct": 0.07200740912248206,
              "instit_pct": 0.0032414910858995136,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.5414886894020725,
              "mixed_qty_pct": 0.38106550324737126,
              "instit_qty_pct": 0.0774458073505562,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.5356320571537814,
              "mixed_notional_pct": 0.3929961023682766,
              "instit_notional_pct": 0.07137184047794198,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 4449.036003704561,
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
              "ticker": "C76",
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
              "avg_trade_size": 1311.846590909091,
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
              "ticker": "XHV",
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
              "avg_trade_size": 1395.4096774193547,
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
              "ticker": "1Y1",
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
              "avg_trade_size": 1190.4285714285713,
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
              "retail_pct": 0.9333874898456539,
              "mixed_pct": 0.060926076360682375,
              "instit_pct": 0.005686433793663688,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.38252992170861205,
              "mixed_qty_pct": 0.46969433362330143,
              "instit_qty_pct": 0.14777574466808652,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.38238815980709784,
              "mixed_notional_pct": 0.46799120459164584,
              "instit_notional_pct": 0.14962063560125632,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 3477.6010357432983,
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
              "ticker": "QS9",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.9289044289044289,
              "mixed_pct": 0.07016317016317017,
              "instit_pct": 0.0009324009324009324,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.586220137571743,
              "mixed_qty_pct": 0.3912711431592897,
              "instit_qty_pct": 0.022508719268967376,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.5827679553988435,
              "mixed_notional_pct": 0.3935331651355542,
              "instit_notional_pct": 0.023698879465602337,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 3812.6850582750585,
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
              "ticker": "5DD",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.9118376200805702,
              "mixed_pct": 0.08134490238611713,
              "instit_pct": 0.006817477533312674,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.44897722375095317,
              "mixed_qty_pct": 0.4010128302887644,
              "instit_qty_pct": 0.15000994596028247,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.45407186675593303,
              "mixed_notional_pct": 0.40051638635417597,
              "instit_notional_pct": 0.145411746889891,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 4882.503408738767,
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
              "ticker": "575",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.8883424408014572,
              "mixed_pct": 0.10801457194899818,
              "instit_pct": 0.0036429872495446266,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.4190384053440811,
              "mixed_qty_pct": 0.5241888822530266,
              "instit_qty_pct": 0.056772712402892306,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.416894150365124,
              "mixed_notional_pct": 0.5266889777218048,
              "instit_notional_pct": 0.05641687191307123,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 5184.188870673953,
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
              "ticker": "PCT",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.8707979195737663,
              "mixed_pct": 0.11461372573893187,
              "instit_pct": 0.014588354687301788,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.23951297450880615,
              "mixed_qty_pct": 0.501143786047821,
              "instit_qty_pct": 0.2593432394433729,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.23694608763547448,
              "mixed_notional_pct": 0.5036762647471615,
              "instit_notional_pct": 0.2593776476173639,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 6286.258848154256,
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
          "n_trades": 8672,
          "n_runs": 0,
          "n_trade_days": 0,
          "first_trade_date": "2026-01-21",
          "last_trade_date": "2026-04-22",
          "period_days": 91,
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
            "retail_pct": 0.9370387453874539,
            "mixed_pct": 0.06100092250922509,
            "instit_pct": 0.001960332103321033,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.5889205862594264,
            "mixed_qty_pct": 0.3561672674974216,
            "instit_qty_pct": 0.05491214624315195,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.5834267529166814,
            "mixed_notional_pct": 0.3674483283649473,
            "instit_notional_pct": 0.04912491871837125,
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
            "avg": 3958.2412938191883,
            "median": 1200.0
          },
          "run_size": {
            "avg": null,
            "median": null,
            "avg_length": null
          },
          "recent_trades": [],
          "peer_comparison": [
            {
              "ticker": "9MT",
              "currency": "SGD",
              "is_target": true,
              "retail_pct": 0.9370387453874539,
              "mixed_pct": 0.06100092250922509,
              "instit_pct": 0.001960332103321033,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.5889205862594264,
              "mixed_qty_pct": 0.3561672674974216,
              "instit_qty_pct": 0.05491214624315195,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.5834267529166814,
              "mixed_notional_pct": 0.3674483283649473,
              "instit_notional_pct": 0.04912491871837125,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 3958.2412938191883,
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
              "ticker": "XHV",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.9915014164305949,
              "mixed_pct": 0.0084985835694051,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.9108669108669109,
              "mixed_qty_pct": 0.08913308913308914,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.9238285344938428,
              "mixed_notional_pct": 0.0761714655061572,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 1956.4849858356938,
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
              "ticker": "1Y1",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.9887005649717514,
              "mixed_pct": 0.011299435028248588,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.8517070835992342,
              "mixed_qty_pct": 0.1482929164007658,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.8574093745550838,
              "mixed_notional_pct": 0.14259062544491613,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 1376.9813559322035,
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
              "ticker": "C76",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.9846659364731654,
              "mixed_pct": 0.01533406352683461,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.8569290145722118,
              "mixed_qty_pct": 0.1430709854277882,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.8555280182860772,
              "mixed_notional_pct": 0.14447198171392284,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 2104.199069003286,
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
              "ticker": "575",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.9706836530627361,
              "mixed_pct": 0.028146063254573736,
              "instit_pct": 0.0011702836826901711,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.4150978688199918,
              "mixed_qty_pct": 0.5072413895054427,
              "instit_qty_pct": 0.0776607416745655,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.4137280671360648,
              "mixed_notional_pct": 0.508638846217919,
              "instit_notional_pct": 0.07763308664601618,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 1430.3082334641879,
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
              "ticker": "QS9",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.9224970242031477,
              "mixed_pct": 0.07697394524533792,
              "instit_pct": 0.0005290305515143499,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.5825889819620964,
              "mixed_qty_pct": 0.40710234028853515,
              "instit_qty_pct": 0.010308677749368398,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.5808139289835893,
              "mixed_notional_pct": 0.4066242791919261,
              "instit_notional_pct": 0.012561791824484594,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 4081.1748975003306,
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
              "retail_pct": 0.9110650069156293,
              "mixed_pct": 0.08084370677731674,
              "instit_pct": 0.008091286307053943,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.3635885578942916,
              "mixed_qty_pct": 0.4609634715427669,
              "instit_qty_pct": 0.17544797056294145,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.3637788545564169,
              "mixed_notional_pct": 0.4590665592454648,
              "instit_notional_pct": 0.1771545861981183,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 4820.07060857538,
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
              "ticker": "5DD",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.9049145299145299,
              "mixed_pct": 0.08886946386946387,
              "instit_pct": 0.006216006216006216,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.44613307297617316,
              "mixed_qty_pct": 0.4278069756330626,
              "instit_qty_pct": 0.12605995139076426,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.45048543968505184,
              "mixed_notional_pct": 0.4221226637046943,
              "instit_notional_pct": 0.12739189661025388,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 5133.884226884227,
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
              "ticker": "PCT",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.8277386428982174,
              "mixed_pct": 0.15245830937320298,
              "instit_pct": 0.019803047728579642,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.2338494643776021,
              "mixed_qty_pct": 0.4991279011487647,
              "instit_qty_pct": 0.2670226344736332,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.2326030846205698,
              "mixed_notional_pct": 0.5010667773024969,
              "instit_notional_pct": 0.26633013807693323,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 8431.234473835537,
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
        "6m": {
          "valid": true,
          "currency": "SGD",
          "n_trades": 15485,
          "n_runs": 0,
          "n_trade_days": 0,
          "first_trade_date": "2025-10-22",
          "last_trade_date": "2026-04-22",
          "period_days": 182,
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
            "retail_pct": 0.9278656764610914,
            "mixed_pct": 0.06961575718437198,
            "instit_pct": 0.002518566354536648,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.5677626078979934,
            "mixed_qty_pct": 0.3734445791184191,
            "instit_qty_pct": 0.058792812983587565,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.5636986905465693,
            "mixed_notional_pct": 0.3818426157283222,
            "instit_notional_pct": 0.054458693725108476,
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
            "avg": 4391.739360671618,
            "median": 1517.9999999999998
          },
          "run_size": {
            "avg": null,
            "median": null,
            "avg_length": null
          },
          "recent_trades": [],
          "peer_comparison": [
            {
              "ticker": "9MT",
              "currency": "SGD",
              "is_target": true,
              "retail_pct": 0.9278656764610914,
              "mixed_pct": 0.06961575718437198,
              "instit_pct": 0.002518566354536648,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.5677626078979934,
              "mixed_qty_pct": 0.3734445791184191,
              "instit_qty_pct": 0.058792812983587565,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.5636986905465693,
              "mixed_notional_pct": 0.3818426157283222,
              "instit_notional_pct": 0.054458693725108476,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 4391.739360671618,
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
              "ticker": "1Y1",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.9956331877729258,
              "mixed_pct": 0.004366812227074236,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.9424483149337181,
              "mixed_qty_pct": 0.05755168506628196,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.9515922949386347,
              "mixed_notional_pct": 0.04840770506136522,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 1567.5172489082968,
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
              "ticker": "C76",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.9919458762886598,
              "mixed_pct": 0.008054123711340205,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.8612202121511896,
              "mixed_qty_pct": 0.13877978784881045,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.8604372586981873,
              "mixed_notional_pct": 0.13956274130181268,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 1067.0465528350514,
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
              "ticker": "XHV",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.9908256880733946,
              "mixed_pct": 0.009174311926605505,
              "instit_pct": 0.0,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.8971167669453171,
              "mixed_qty_pct": 0.10288323305468293,
              "instit_qty_pct": 0.0,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.9061204577376931,
              "mixed_notional_pct": 0.09387954226230683,
              "instit_notional_pct": 0.0,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 1888.4418348623851,
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
              "ticker": "575",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.9706836530627361,
              "mixed_pct": 0.028146063254573736,
              "instit_pct": 0.0011702836826901711,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.4150978688199918,
              "mixed_qty_pct": 0.5072413895054427,
              "instit_qty_pct": 0.0776607416745655,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.4137280671360648,
              "mixed_notional_pct": 0.508638846217919,
              "instit_notional_pct": 0.07763308664601618,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 1430.3082334641879,
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
              "ticker": "QS9",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.9181578947368421,
              "mixed_pct": 0.0812280701754386,
              "instit_pct": 0.0006140350877192983,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.5770289206766059,
              "mixed_qty_pct": 0.4124866560531004,
              "instit_qty_pct": 0.010484423270293678,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.5737784399154641,
              "mixed_notional_pct": 0.41418677837127676,
              "instit_notional_pct": 0.012034781713259175,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 4364.191868421052,
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
              "retail_pct": 0.9152931481045444,
              "mixed_pct": 0.07752531198493054,
              "instit_pct": 0.007181539910525076,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.38595736906211936,
              "mixed_qty_pct": 0.4546613885505481,
              "instit_qty_pct": 0.15938124238733253,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.3827425622666174,
              "mixed_notional_pct": 0.4538613689469503,
              "instit_notional_pct": 0.16339606878643234,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 4637.7204497292205,
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
              "ticker": "5DD",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.896366316884919,
              "mixed_pct": 0.09704275431445668,
              "instit_pct": 0.006590928800624404,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.42200049498740494,
              "mixed_qty_pct": 0.4507673999938974,
              "instit_qty_pct": 0.12723210501869764,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.4304783272748882,
              "mixed_notional_pct": 0.441585578014304,
              "instit_notional_pct": 0.12793609471080786,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 5373.347237880496,
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
              "ticker": "PCT",
              "currency": "SGD",
              "is_target": false,
              "retail_pct": 0.8313010725229827,
              "mixed_pct": 0.15044050051072522,
              "instit_pct": 0.018258426966292134,
              "ambiguous_pct": null,
              "unobservable_pct": null,
              "unclear_pct": null,
              "retail_qty_pct": 0.266844187638507,
              "mixed_qty_pct": 0.4909330346171169,
              "instit_qty_pct": 0.24222277774437612,
              "ambiguous_qty_pct": null,
              "unobservable_qty_pct": null,
              "unclear_qty_pct": null,
              "retail_notional_pct": 0.25728296887022084,
              "mixed_notional_pct": 0.494862408524929,
              "instit_notional_pct": 0.24785462260485014,
              "ambiguous_notional_pct": null,
              "unobservable_notional_pct": null,
              "unclear_notional_pct": null,
              "run_retail_pct": null,
              "run_mixed_pct": null,
              "run_instit_pct": null,
              "run_unclear_pct": null,
              "avg_trade_size": 8321.54162410623,
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
      "n_trades": 15485,
      "n_runs": 0,
      "n_trade_days": 0,
      "first_trade_date": "2025-10-22",
      "last_trade_date": "2026-04-22",
      "period_days": 182,
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
        "retail_pct": 0.9278656764610914,
        "mixed_pct": 0.06961575718437198,
        "instit_pct": 0.002518566354536648,
        "ambiguous_pct": null,
        "unobservable_pct": null,
        "unclear_pct": null,
        "retail_qty_pct": null,
        "mixed_qty_pct": null,
        "instit_qty_pct": null,
        "ambiguous_qty_pct": null,
        "unobservable_qty_pct": null,
        "unclear_qty_pct": null,
        "retail_notional_pct": 0.5636986905465693,
        "mixed_notional_pct": 0.3818426157283222,
        "instit_notional_pct": 0.054458693725108476,
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
        "avg": 4391.739360671618,
        "median": 1517.9999999999998
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
            "n_trades": 3167,
            "n_runs": 0,
            "retail_pct": 0.9172718661193558,
            "mixed_pct": 0.07893905904641617,
            "instit_pct": 0.003789074834227976,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "avg_trade_size": 4663.145721503,
            "avg_run_notional": null,
            "retail_qty_pct": 0.5049262808599578,
            "mixed_qty_pct": 0.40914257394808146,
            "instit_qty_pct": 0.08593114519196066,
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
            "total_quantity": 18563700.0
          },
          {
            "month": "2026-03",
            "n_trades": 3040,
            "n_runs": 0,
            "retail_pct": 0.9615131578947368,
            "mixed_pct": 0.0375,
            "instit_pct": 0.000986842105263158,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "avg_trade_size": 3059.759539473684,
            "avg_run_notional": null,
            "retail_qty_pct": 0.6973911825471864,
            "mixed_qty_pct": 0.26346605035542947,
            "instit_qty_pct": 0.03914276709738418,
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
            "total_quantity": 14278500.0
          },
          {
            "month": "2026-02",
            "n_trades": 1681,
            "n_runs": 0,
            "retail_pct": 0.9369422962522308,
            "mixed_pct": 0.061867935752528254,
            "instit_pct": 0.001189767995240928,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "avg_trade_size": 3964.061273051755,
            "avg_run_notional": null,
            "retail_qty_pct": 0.596975013200252,
            "mixed_qty_pct": 0.3745294748854559,
            "instit_qty_pct": 0.02849551191429204,
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
            "total_quantity": 5871100.0
          },
          {
            "month": "2026-01",
            "n_trades": 2118,
            "n_runs": 0,
            "retail_pct": 0.9192634560906515,
            "mixed_pct": 0.07837582625118036,
            "instit_pct": 0.002360717658168083,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "avg_trade_size": 4833.764872521247,
            "avg_run_notional": null,
            "retail_qty_pct": 0.5598152269202239,
            "mixed_qty_pct": 0.40852383842470835,
            "instit_qty_pct": 0.03166093465506777,
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
            "total_quantity": 8897400.0
          },
          {
            "month": "2025-12",
            "n_trades": 3356,
            "n_runs": 0,
            "retail_pct": 0.9126936829558999,
            "mixed_pct": 0.08402860548271752,
            "instit_pct": 0.0032777115613825984,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "avg_trade_size": 5200.022794994041,
            "avg_run_notional": null,
            "retail_qty_pct": 0.5470505110256663,
            "mixed_qty_pct": 0.3904433270892898,
            "instit_qty_pct": 0.06250616188504388,
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
            "total_quantity": 15214500.0
          },
          {
            "month": "2025-11",
            "n_trades": 1556,
            "n_runs": 0,
            "retail_pct": 0.9190231362467867,
            "mixed_pct": 0.07840616966580977,
            "instit_pct": 0.002570694087403599,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "avg_trade_size": 4485.34736503856,
            "avg_run_notional": null,
            "retail_qty_pct": 0.5615033355927366,
            "mixed_qty_pct": 0.38832899290071704,
            "instit_qty_pct": 0.05016767150654632,
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
            "total_quantity": 11212400.0
          }
        ]
      },
      "peer_comparison": [
        {
          "ticker": "9MT",
          "currency": "SGD",
          "is_target": true,
          "retail_pct": 0.9278656764610914,
          "mixed_pct": 0.06961575718437198,
          "instit_pct": 0.002518566354536648,
          "ambiguous_pct": null,
          "unobservable_pct": null,
          "unclear_pct": null,
          "retail_qty_pct": 0.5677626078979934,
          "mixed_qty_pct": 0.3734445791184191,
          "instit_qty_pct": 0.058792812983587565,
          "ambiguous_qty_pct": null,
          "unobservable_qty_pct": null,
          "unclear_qty_pct": null,
          "retail_notional_pct": 0.5636986905465693,
          "mixed_notional_pct": 0.3818426157283222,
          "instit_notional_pct": 0.054458693725108476,
          "ambiguous_notional_pct": null,
          "unobservable_notional_pct": null,
          "unclear_notional_pct": null,
          "run_retail_pct": null,
          "run_mixed_pct": null,
          "run_instit_pct": null,
          "run_unclear_pct": null,
          "avg_trade_size": 4391.739360671618,
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
          "ticker": "1Y1",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.9956331877729258,
          "mixed_pct": 0.004366812227074236,
          "instit_pct": 0.0,
          "ambiguous_pct": null,
          "unobservable_pct": null,
          "unclear_pct": null,
          "retail_qty_pct": 0.9424483149337181,
          "mixed_qty_pct": 0.05755168506628196,
          "instit_qty_pct": 0.0,
          "ambiguous_qty_pct": null,
          "unobservable_qty_pct": null,
          "unclear_qty_pct": null,
          "retail_notional_pct": 0.9515922949386347,
          "mixed_notional_pct": 0.04840770506136522,
          "instit_notional_pct": 0.0,
          "ambiguous_notional_pct": null,
          "unobservable_notional_pct": null,
          "unclear_notional_pct": null,
          "run_retail_pct": null,
          "run_mixed_pct": null,
          "run_instit_pct": null,
          "run_unclear_pct": null,
          "avg_trade_size": 1567.5172489082968,
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
          "ticker": "C76",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.9919458762886598,
          "mixed_pct": 0.008054123711340205,
          "instit_pct": 0.0,
          "ambiguous_pct": null,
          "unobservable_pct": null,
          "unclear_pct": null,
          "retail_qty_pct": 0.8612202121511896,
          "mixed_qty_pct": 0.13877978784881045,
          "instit_qty_pct": 0.0,
          "ambiguous_qty_pct": null,
          "unobservable_qty_pct": null,
          "unclear_qty_pct": null,
          "retail_notional_pct": 0.8604372586981873,
          "mixed_notional_pct": 0.13956274130181268,
          "instit_notional_pct": 0.0,
          "ambiguous_notional_pct": null,
          "unobservable_notional_pct": null,
          "unclear_notional_pct": null,
          "run_retail_pct": null,
          "run_mixed_pct": null,
          "run_instit_pct": null,
          "run_unclear_pct": null,
          "avg_trade_size": 1067.0465528350514,
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
          "ticker": "XHV",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.9908256880733946,
          "mixed_pct": 0.009174311926605505,
          "instit_pct": 0.0,
          "ambiguous_pct": null,
          "unobservable_pct": null,
          "unclear_pct": null,
          "retail_qty_pct": 0.8971167669453171,
          "mixed_qty_pct": 0.10288323305468293,
          "instit_qty_pct": 0.0,
          "ambiguous_qty_pct": null,
          "unobservable_qty_pct": null,
          "unclear_qty_pct": null,
          "retail_notional_pct": 0.9061204577376931,
          "mixed_notional_pct": 0.09387954226230683,
          "instit_notional_pct": 0.0,
          "ambiguous_notional_pct": null,
          "unobservable_notional_pct": null,
          "unclear_notional_pct": null,
          "run_retail_pct": null,
          "run_mixed_pct": null,
          "run_instit_pct": null,
          "run_unclear_pct": null,
          "avg_trade_size": 1888.4418348623851,
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
          "ticker": "575",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.9706836530627361,
          "mixed_pct": 0.028146063254573736,
          "instit_pct": 0.0011702836826901711,
          "ambiguous_pct": null,
          "unobservable_pct": null,
          "unclear_pct": null,
          "retail_qty_pct": 0.4150978688199918,
          "mixed_qty_pct": 0.5072413895054427,
          "instit_qty_pct": 0.0776607416745655,
          "ambiguous_qty_pct": null,
          "unobservable_qty_pct": null,
          "unclear_qty_pct": null,
          "retail_notional_pct": 0.4137280671360648,
          "mixed_notional_pct": 0.508638846217919,
          "instit_notional_pct": 0.07763308664601618,
          "ambiguous_notional_pct": null,
          "unobservable_notional_pct": null,
          "unclear_notional_pct": null,
          "run_retail_pct": null,
          "run_mixed_pct": null,
          "run_instit_pct": null,
          "run_unclear_pct": null,
          "avg_trade_size": 1430.3082334641879,
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
          "ticker": "QS9",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.9181578947368421,
          "mixed_pct": 0.0812280701754386,
          "instit_pct": 0.0006140350877192983,
          "ambiguous_pct": null,
          "unobservable_pct": null,
          "unclear_pct": null,
          "retail_qty_pct": 0.5770289206766059,
          "mixed_qty_pct": 0.4124866560531004,
          "instit_qty_pct": 0.010484423270293678,
          "ambiguous_qty_pct": null,
          "unobservable_qty_pct": null,
          "unclear_qty_pct": null,
          "retail_notional_pct": 0.5737784399154641,
          "mixed_notional_pct": 0.41418677837127676,
          "instit_notional_pct": 0.012034781713259175,
          "ambiguous_notional_pct": null,
          "unobservable_notional_pct": null,
          "unclear_notional_pct": null,
          "run_retail_pct": null,
          "run_mixed_pct": null,
          "run_instit_pct": null,
          "run_unclear_pct": null,
          "avg_trade_size": 4364.191868421052,
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
          "retail_pct": 0.9152931481045444,
          "mixed_pct": 0.07752531198493054,
          "instit_pct": 0.007181539910525076,
          "ambiguous_pct": null,
          "unobservable_pct": null,
          "unclear_pct": null,
          "retail_qty_pct": 0.38595736906211936,
          "mixed_qty_pct": 0.4546613885505481,
          "instit_qty_pct": 0.15938124238733253,
          "ambiguous_qty_pct": null,
          "unobservable_qty_pct": null,
          "unclear_qty_pct": null,
          "retail_notional_pct": 0.3827425622666174,
          "mixed_notional_pct": 0.4538613689469503,
          "instit_notional_pct": 0.16339606878643234,
          "ambiguous_notional_pct": null,
          "unobservable_notional_pct": null,
          "unclear_notional_pct": null,
          "run_retail_pct": null,
          "run_mixed_pct": null,
          "run_instit_pct": null,
          "run_unclear_pct": null,
          "avg_trade_size": 4637.7204497292205,
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
          "ticker": "5DD",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.896366316884919,
          "mixed_pct": 0.09704275431445668,
          "instit_pct": 0.006590928800624404,
          "ambiguous_pct": null,
          "unobservable_pct": null,
          "unclear_pct": null,
          "retail_qty_pct": 0.42200049498740494,
          "mixed_qty_pct": 0.4507673999938974,
          "instit_qty_pct": 0.12723210501869764,
          "ambiguous_qty_pct": null,
          "unobservable_qty_pct": null,
          "unclear_qty_pct": null,
          "retail_notional_pct": 0.4304783272748882,
          "mixed_notional_pct": 0.441585578014304,
          "instit_notional_pct": 0.12793609471080786,
          "ambiguous_notional_pct": null,
          "unobservable_notional_pct": null,
          "unclear_notional_pct": null,
          "run_retail_pct": null,
          "run_mixed_pct": null,
          "run_instit_pct": null,
          "run_unclear_pct": null,
          "avg_trade_size": 5373.347237880496,
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
          "ticker": "PCT",
          "currency": "SGD",
          "is_target": false,
          "retail_pct": 0.8313010725229827,
          "mixed_pct": 0.15044050051072522,
          "instit_pct": 0.018258426966292134,
          "ambiguous_pct": null,
          "unobservable_pct": null,
          "unclear_pct": null,
          "retail_qty_pct": 0.266844187638507,
          "mixed_qty_pct": 0.4909330346171169,
          "instit_qty_pct": 0.24222277774437612,
          "ambiguous_qty_pct": null,
          "unobservable_qty_pct": null,
          "unclear_qty_pct": null,
          "retail_notional_pct": 0.25728296887022084,
          "mixed_notional_pct": 0.494862408524929,
          "instit_notional_pct": 0.24785462260485014,
          "ambiguous_notional_pct": null,
          "unobservable_notional_pct": null,
          "unclear_notional_pct": null,
          "run_retail_pct": null,
          "run_mixed_pct": null,
          "run_instit_pct": null,
          "run_unclear_pct": null,
          "avg_trade_size": 8321.54162410623,
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
            "ticker": "9MT",
            "currency": "SGD",
            "is_target": true,
            "retail_pct": 0.9117647058823529,
            "mixed_pct": 0.08823529411764706,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.563754977548081,
            "mixed_qty_pct": 0.436245022451919,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.5639538865316225,
            "mixed_notional_pct": 0.4360461134683775,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 5082.093137254902,
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
            "ticker": "C76",
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
            "avg_trade_size": 666.75,
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
            "ticker": "1Y1",
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
            "avg_trade_size": 1236.9,
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
            "retail_pct": 0.9843505477308294,
            "mixed_pct": 0.01564945226917058,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.687013468429507,
            "mixed_qty_pct": 0.312986531570493,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.6875234906305941,
            "mixed_notional_pct": 0.3124765093694058,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 1369.8732394366198,
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
            "ticker": "QS9",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.9318181818181818,
            "mixed_pct": 0.06818181818181818,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.5842747684931292,
            "mixed_qty_pct": 0.4157252315068708,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.5852233591772705,
            "mixed_notional_pct": 0.4147766408227294,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 3231.1517045454543,
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
            "ticker": "5DD",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.9317269076305221,
            "mixed_pct": 0.060240963855421686,
            "instit_pct": 0.008032128514056224,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.45428840716305374,
            "mixed_qty_pct": 0.3916790090211391,
            "instit_qty_pct": 0.1540325838158072,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.45634194431981867,
            "mixed_notional_pct": 0.3916642491136576,
            "instit_notional_pct": 0.15199380656652375,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 4762.136546184739,
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
            "ticker": "575",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.811088295687885,
            "mixed_pct": 0.17659137577002054,
            "instit_pct": 0.012320328542094456,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.3305663299767008,
            "mixed_qty_pct": 0.5492461327589583,
            "instit_qty_pct": 0.12018753726434085,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.3335898201195496,
            "mixed_notional_pct": 0.5506449398763337,
            "instit_notional_pct": 0.11576524000411682,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 8537.143942505132,
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
            "ticker": "PCT",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.781750924784217,
            "mixed_pct": 0.18495684340320592,
            "instit_pct": 0.03329223181257707,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.16621940310644873,
            "mixed_qty_pct": 0.4671667886476376,
            "instit_qty_pct": 0.36661380824591366,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.16635674170565753,
            "mixed_notional_pct": 0.4665384356378339,
            "instit_notional_pct": 0.3671048226565085,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 11517.180024660913,
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
            "ticker": "9MT",
            "currency": "SGD",
            "is_target": true,
            "retail_pct": 0.9247510997916184,
            "mixed_pct": 0.07200740912248206,
            "instit_pct": 0.0032414910858995136,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.5414886894020725,
            "mixed_qty_pct": 0.38106550324737126,
            "instit_qty_pct": 0.0774458073505562,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.5356320571537814,
            "mixed_notional_pct": 0.3929961023682766,
            "instit_notional_pct": 0.07137184047794198,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 4449.036003704561,
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
            "ticker": "C76",
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
            "avg_trade_size": 1311.846590909091,
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
            "ticker": "XHV",
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
            "avg_trade_size": 1395.4096774193547,
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
            "ticker": "1Y1",
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
            "avg_trade_size": 1190.4285714285713,
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
            "retail_pct": 0.9333874898456539,
            "mixed_pct": 0.060926076360682375,
            "instit_pct": 0.005686433793663688,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.38252992170861205,
            "mixed_qty_pct": 0.46969433362330143,
            "instit_qty_pct": 0.14777574466808652,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.38238815980709784,
            "mixed_notional_pct": 0.46799120459164584,
            "instit_notional_pct": 0.14962063560125632,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 3477.6010357432983,
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
            "ticker": "QS9",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.9289044289044289,
            "mixed_pct": 0.07016317016317017,
            "instit_pct": 0.0009324009324009324,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.586220137571743,
            "mixed_qty_pct": 0.3912711431592897,
            "instit_qty_pct": 0.022508719268967376,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.5827679553988435,
            "mixed_notional_pct": 0.3935331651355542,
            "instit_notional_pct": 0.023698879465602337,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 3812.6850582750585,
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
            "ticker": "5DD",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.9118376200805702,
            "mixed_pct": 0.08134490238611713,
            "instit_pct": 0.006817477533312674,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.44897722375095317,
            "mixed_qty_pct": 0.4010128302887644,
            "instit_qty_pct": 0.15000994596028247,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.45407186675593303,
            "mixed_notional_pct": 0.40051638635417597,
            "instit_notional_pct": 0.145411746889891,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 4882.503408738767,
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
            "ticker": "575",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.8883424408014572,
            "mixed_pct": 0.10801457194899818,
            "instit_pct": 0.0036429872495446266,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.4190384053440811,
            "mixed_qty_pct": 0.5241888822530266,
            "instit_qty_pct": 0.056772712402892306,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.416894150365124,
            "mixed_notional_pct": 0.5266889777218048,
            "instit_notional_pct": 0.05641687191307123,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 5184.188870673953,
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
            "ticker": "PCT",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.8707979195737663,
            "mixed_pct": 0.11461372573893187,
            "instit_pct": 0.014588354687301788,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.23951297450880615,
            "mixed_qty_pct": 0.501143786047821,
            "instit_qty_pct": 0.2593432394433729,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.23694608763547448,
            "mixed_notional_pct": 0.5036762647471615,
            "instit_notional_pct": 0.2593776476173639,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 6286.258848154256,
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
            "ticker": "9MT",
            "currency": "SGD",
            "is_target": true,
            "retail_pct": 0.9370387453874539,
            "mixed_pct": 0.06100092250922509,
            "instit_pct": 0.001960332103321033,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.5889205862594264,
            "mixed_qty_pct": 0.3561672674974216,
            "instit_qty_pct": 0.05491214624315195,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.5834267529166814,
            "mixed_notional_pct": 0.3674483283649473,
            "instit_notional_pct": 0.04912491871837125,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 3958.2412938191883,
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
            "ticker": "XHV",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.9915014164305949,
            "mixed_pct": 0.0084985835694051,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.9108669108669109,
            "mixed_qty_pct": 0.08913308913308914,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.9238285344938428,
            "mixed_notional_pct": 0.0761714655061572,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 1956.4849858356938,
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
            "ticker": "1Y1",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.9887005649717514,
            "mixed_pct": 0.011299435028248588,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.8517070835992342,
            "mixed_qty_pct": 0.1482929164007658,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.8574093745550838,
            "mixed_notional_pct": 0.14259062544491613,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 1376.9813559322035,
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
            "ticker": "C76",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.9846659364731654,
            "mixed_pct": 0.01533406352683461,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.8569290145722118,
            "mixed_qty_pct": 0.1430709854277882,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.8555280182860772,
            "mixed_notional_pct": 0.14447198171392284,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 2104.199069003286,
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
            "ticker": "575",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.9706836530627361,
            "mixed_pct": 0.028146063254573736,
            "instit_pct": 0.0011702836826901711,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.4150978688199918,
            "mixed_qty_pct": 0.5072413895054427,
            "instit_qty_pct": 0.0776607416745655,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.4137280671360648,
            "mixed_notional_pct": 0.508638846217919,
            "instit_notional_pct": 0.07763308664601618,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 1430.3082334641879,
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
            "ticker": "QS9",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.9224970242031477,
            "mixed_pct": 0.07697394524533792,
            "instit_pct": 0.0005290305515143499,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.5825889819620964,
            "mixed_qty_pct": 0.40710234028853515,
            "instit_qty_pct": 0.010308677749368398,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.5808139289835893,
            "mixed_notional_pct": 0.4066242791919261,
            "instit_notional_pct": 0.012561791824484594,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 4081.1748975003306,
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
            "retail_pct": 0.9110650069156293,
            "mixed_pct": 0.08084370677731674,
            "instit_pct": 0.008091286307053943,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.3635885578942916,
            "mixed_qty_pct": 0.4609634715427669,
            "instit_qty_pct": 0.17544797056294145,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.3637788545564169,
            "mixed_notional_pct": 0.4590665592454648,
            "instit_notional_pct": 0.1771545861981183,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 4820.07060857538,
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
            "ticker": "5DD",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.9049145299145299,
            "mixed_pct": 0.08886946386946387,
            "instit_pct": 0.006216006216006216,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.44613307297617316,
            "mixed_qty_pct": 0.4278069756330626,
            "instit_qty_pct": 0.12605995139076426,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.45048543968505184,
            "mixed_notional_pct": 0.4221226637046943,
            "instit_notional_pct": 0.12739189661025388,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 5133.884226884227,
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
            "ticker": "PCT",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.8277386428982174,
            "mixed_pct": 0.15245830937320298,
            "instit_pct": 0.019803047728579642,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.2338494643776021,
            "mixed_qty_pct": 0.4991279011487647,
            "instit_qty_pct": 0.2670226344736332,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.2326030846205698,
            "mixed_notional_pct": 0.5010667773024969,
            "instit_notional_pct": 0.26633013807693323,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 8431.234473835537,
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
        "6m": [
          {
            "ticker": "9MT",
            "currency": "SGD",
            "is_target": true,
            "retail_pct": 0.9278656764610914,
            "mixed_pct": 0.06961575718437198,
            "instit_pct": 0.002518566354536648,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.5677626078979934,
            "mixed_qty_pct": 0.3734445791184191,
            "instit_qty_pct": 0.058792812983587565,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.5636986905465693,
            "mixed_notional_pct": 0.3818426157283222,
            "instit_notional_pct": 0.054458693725108476,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 4391.739360671618,
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
            "ticker": "1Y1",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.9956331877729258,
            "mixed_pct": 0.004366812227074236,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.9424483149337181,
            "mixed_qty_pct": 0.05755168506628196,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.9515922949386347,
            "mixed_notional_pct": 0.04840770506136522,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 1567.5172489082968,
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
            "ticker": "C76",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.9919458762886598,
            "mixed_pct": 0.008054123711340205,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.8612202121511896,
            "mixed_qty_pct": 0.13877978784881045,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.8604372586981873,
            "mixed_notional_pct": 0.13956274130181268,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 1067.0465528350514,
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
            "ticker": "XHV",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.9908256880733946,
            "mixed_pct": 0.009174311926605505,
            "instit_pct": 0.0,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.8971167669453171,
            "mixed_qty_pct": 0.10288323305468293,
            "instit_qty_pct": 0.0,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.9061204577376931,
            "mixed_notional_pct": 0.09387954226230683,
            "instit_notional_pct": 0.0,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 1888.4418348623851,
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
            "ticker": "575",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.9706836530627361,
            "mixed_pct": 0.028146063254573736,
            "instit_pct": 0.0011702836826901711,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.4150978688199918,
            "mixed_qty_pct": 0.5072413895054427,
            "instit_qty_pct": 0.0776607416745655,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.4137280671360648,
            "mixed_notional_pct": 0.508638846217919,
            "instit_notional_pct": 0.07763308664601618,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 1430.3082334641879,
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
            "ticker": "QS9",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.9181578947368421,
            "mixed_pct": 0.0812280701754386,
            "instit_pct": 0.0006140350877192983,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.5770289206766059,
            "mixed_qty_pct": 0.4124866560531004,
            "instit_qty_pct": 0.010484423270293678,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.5737784399154641,
            "mixed_notional_pct": 0.41418677837127676,
            "instit_notional_pct": 0.012034781713259175,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 4364.191868421052,
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
            "retail_pct": 0.9152931481045444,
            "mixed_pct": 0.07752531198493054,
            "instit_pct": 0.007181539910525076,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.38595736906211936,
            "mixed_qty_pct": 0.4546613885505481,
            "instit_qty_pct": 0.15938124238733253,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.3827425622666174,
            "mixed_notional_pct": 0.4538613689469503,
            "instit_notional_pct": 0.16339606878643234,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 4637.7204497292205,
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
            "ticker": "5DD",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.896366316884919,
            "mixed_pct": 0.09704275431445668,
            "instit_pct": 0.006590928800624404,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.42200049498740494,
            "mixed_qty_pct": 0.4507673999938974,
            "instit_qty_pct": 0.12723210501869764,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.4304783272748882,
            "mixed_notional_pct": 0.441585578014304,
            "instit_notional_pct": 0.12793609471080786,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 5373.347237880496,
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
            "ticker": "PCT",
            "currency": "SGD",
            "is_target": false,
            "retail_pct": 0.8313010725229827,
            "mixed_pct": 0.15044050051072522,
            "instit_pct": 0.018258426966292134,
            "ambiguous_pct": null,
            "unobservable_pct": null,
            "unclear_pct": null,
            "retail_qty_pct": 0.266844187638507,
            "mixed_qty_pct": 0.4909330346171169,
            "instit_qty_pct": 0.24222277774437612,
            "ambiguous_qty_pct": null,
            "unobservable_qty_pct": null,
            "unclear_qty_pct": null,
            "retail_notional_pct": 0.25728296887022084,
            "mixed_notional_pct": 0.494862408524929,
            "instit_notional_pct": 0.24785462260485014,
            "ambiguous_notional_pct": null,
            "unobservable_notional_pct": null,
            "unclear_notional_pct": null,
            "run_retail_pct": null,
            "run_mixed_pct": null,
            "run_instit_pct": null,
            "run_unclear_pct": null,
            "avg_trade_size": 8321.54162410623,
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
      "total_trades": 15236,
      "price_moving_trades": 6046,
      "pct_price_moving": 39.68233132055657,
      "all_movers": {
        "count": 6046,
        "avg_size": 5723.707161759841,
        "median_size": 2100.0,
        "retail_count": 5378,
        "mixed_count": 643,
        "institutional_count": 25,
        "ambiguous_count": 0,
        "unobservable_count": 0,
        "retail_pct": 88.9513728084684,
        "mixed_pct": 10.635130664902414,
        "instit_pct": 0.4134965266291763,
        "unclear_pct": null
      },
      "positive_movers": {
        "count": 3047,
        "avg_size": 5340.710863144076,
        "median_size": 1560.5,
        "retail_count": 2736,
        "mixed_count": 302,
        "institutional_count": 9,
        "ambiguous_count": 0,
        "unobservable_count": 0,
        "retail_pct": 89.79323925172301,
        "mixed_pct": 9.911388250738431,
        "instit_pct": 0.29537249753856254,
        "unclear_pct": null
      },
      "negative_movers": {
        "count": 2999,
        "avg_size": 6112.833444481494,
        "median_size": 2580.0,
        "retail_count": 2642,
        "mixed_count": 341,
        "institutional_count": 16,
        "ambiguous_count": 0,
        "unobservable_count": 0,
        "retail_pct": 88.09603201067023,
        "mixed_pct": 11.370456818939646,
        "instit_pct": 0.53351117039013,
        "unclear_pct": null
      }
    },
    "short_selling": {
      "data_available": true,
      "security_name": "$ METAOPTICS LTD",
      "mapping": {
        "ticker_to_security": "$ METAOPTICS LTD",
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
            "avg_short_ratio": 0.00596284112436787,
            "max_short_ratio": 0.06229660622966062,
            "interpretation": "Low short interest"
          }
        },
        "3M": {
          "stats": {
            "valid": true,
            "avg_short_ratio": 0.0021039363704374882,
            "max_short_ratio": 0.06229660622966062,
            "interpretation": "Low short interest"
          }
        },
        "6M": {
          "stats": {
            "valid": true,
            "avg_short_ratio": 0.007551412792088769,
            "max_short_ratio": 0.08650519031141868,
            "interpretation": "Low short interest"
          }
        }
      },
      "correlation": {
        "valid": true,
        "correlation": 0.001966309422767097,
        "interpretation": "No clear relationship"
      },
      "peaks": [],
      "short_interest_change": {
        "valid": true,
        "monthly_data": [
          {
            "month": "2026-04",
            "avg_short_ratio": 0.004592393233762167
          },
          {
            "month": "2026-03",
            "avg_short_ratio": 0.0028316639195300284
          },
          {
            "month": "2026-02",
            "avg_short_ratio": 0.0003096310745746443
          },
          {
            "month": "2026-01",
            "avg_short_ratio": 0.0019160105910431546
          },
          {
            "month": "2025-12",
            "avg_short_ratio": 0.0288418325930256
          },
          {
            "month": "2025-11",
            "avg_short_ratio": 0.007919530751669252
          },
          {
            "month": "2025-10",
            "avg_short_ratio": 0.002690053040075261
          },
          {
            "month": "2025-09",
            "avg_short_ratio": 0.04424820793673391
          }
        ],
        "mom_change": [
          {
            "month": "2026-04",
            "avg_short_ratio": 0.004592393233762167,
            "change_pct": null
          },
          {
            "month": "2026-03",
            "avg_short_ratio": 0.0028316639195300284,
            "change_pct": -38.34012517237595
          },
          {
            "month": "2026-02",
            "avg_short_ratio": 0.0003096310745746443,
            "change_pct": -89.06540170819304
          },
          {
            "month": "2026-01",
            "avg_short_ratio": 0.0019160105910431546,
            "change_pct": 518.8043605362525
          },
          {
            "month": "2025-12",
            "avg_short_ratio": 0.0288418325930256,
            "change_pct": 1405.3065326388894
          },
          {
            "month": "2025-11",
            "avg_short_ratio": 0.007919530751669252,
            "change_pct": -72.54151335174063
          },
          {
            "month": "2025-10",
            "avg_short_ratio": 0.002690053040075261,
            "change_pct": -66.03267132325662
          },
          {
            "month": "2025-09",
            "avg_short_ratio": 0.04424820793673391,
            "change_pct": 1544.882360219037
          }
        ],
        "interpretation": "Shorts building significantly (+62% MoM)"
      },
      "short_series": {
        "valid": true,
        "rows": [
          {
            "date": "2026-04-22",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 1279300,
            "close": 0.87,
            "return": -0.06951871657754016
          },
          {
            "date": "2026-04-21",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 744800,
            "close": 0.935,
            "return": -0.036082474226803996
          },
          {
            "date": "2026-04-20",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 870900,
            "close": 0.97,
            "return": 0.02645502645502651
          },
          {
            "date": "2026-04-17",
            "short_ratio": 0.0070165590794274485,
            "short_vol": 10000,
            "total_vol": 1425200,
            "close": 0.945,
            "return": 0.010695187165775222
          },
          {
            "date": "2026-04-16",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 923300,
            "close": 0.935,
            "return": 0.021857923497267784
          },
          {
            "date": "2026-04-15",
            "short_ratio": 0.005713632727688264,
            "short_vol": 10000,
            "total_vol": 1750200,
            "close": 0.915,
            "return": 0.09580838323353302
          },
          {
            "date": "2026-04-14",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 871400,
            "close": 0.835,
            "return": -0.04022988505747127
          },
          {
            "date": "2026-04-13",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 473400,
            "close": 0.87,
            "return": 0.005780346820809301
          },
          {
            "date": "2026-04-10",
            "short_ratio": 0.010478212703101921,
            "short_vol": 22700,
            "total_vol": 2166400,
            "close": 0.865,
            "return": 0.18493150684931514
          },
          {
            "date": "2026-04-09",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 1054500,
            "close": 0.73,
            "return": -0.013513513513513487
          },
          {
            "date": "2026-04-08",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 1446800,
            "close": 0.74,
            "return": 0.07246376811594213
          },
          {
            "date": "2026-04-07",
            "short_ratio": 0.008784237174403709,
            "short_vol": 14400,
            "total_vol": 1639300,
            "close": 0.69,
            "return": -0.021276595744680882
          },
          {
            "date": "2026-04-06",
            "short_ratio": 0.003783006733751986,
            "short_vol": 5000,
            "total_vol": 1321700,
            "close": 0.705,
            "return": 0.09302325581395343
          },
          {
            "date": "2026-04-02",
            "short_ratio": 0.03311025008805918,
            "short_vol": 47000,
            "total_vol": 1419500,
            "close": 0.645,
            "return": -0.07194244604316535
          },
          {
            "date": "2026-04-01",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 2832600,
            "close": 0.695,
            "return": 0.09448818897637778
          },
          {
            "date": "2026-03-31",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 2419400,
            "close": 0.635,
            "return": 0.4111111111111112
          },
          {
            "date": "2026-03-30",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 715200,
            "close": 0.45,
            "return": -0.09999999999999998
          },
          {
            "date": "2026-03-27",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 301400,
            "close": 0.5,
            "return": -0.019607843137254943
          },
          {
            "date": "2026-03-26",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 862000,
            "close": 0.51,
            "return": -0.019230769230769273
          },
          {
            "date": "2026-03-25",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 645300,
            "close": 0.52,
            "return": 0.009708737864077666
          },
          {
            "date": "2026-03-24",
            "short_ratio": 0.06229660622966062,
            "short_vol": 107200,
            "total_vol": 1720800,
            "close": 0.515,
            "return": -0.009615384615384581
          },
          {
            "date": "2026-03-23",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 521900,
            "close": 0.52,
            "return": -0.07964601769911495
          },
          {
            "date": "2026-03-20",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 903300,
            "close": 0.565,
            "return": -0.08870967741935487
          },
          {
            "date": "2026-03-19",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 621000,
            "close": 0.62,
            "return": -0.04615384615384621
          },
          {
            "date": "2026-03-18",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 564600,
            "close": 0.65,
            "return": -0.044117647058823595
          },
          {
            "date": "2026-03-17",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 1137900,
            "close": 0.68,
            "return": -0.05555555555555547
          },
          {
            "date": "2026-03-16",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 238000,
            "close": 0.72,
            "return": -0.020408163265306145
          },
          {
            "date": "2026-03-13",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 177700,
            "close": 0.735,
            "return": -0.045454545454545525
          },
          {
            "date": "2026-03-12",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 512700,
            "close": 0.77,
            "return": -0.025316455696202556
          },
          {
            "date": "2026-03-11",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 347500,
            "close": 0.79,
            "return": -0.053892215568862145
          },
          {
            "date": "2026-03-10",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 285100,
            "close": 0.835,
            "return": -0.01183431952662728
          },
          {
            "date": "2026-03-09",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 376700,
            "close": 0.845,
            "return": -0.061111111111111116
          },
          {
            "date": "2026-03-06",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 122000,
            "close": 0.9,
            "return": 0.011235955056179803
          },
          {
            "date": "2026-03-05",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 223600,
            "close": 0.89,
            "return": 0.005649717514124353
          },
          {
            "date": "2026-03-04",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 584600,
            "close": 0.885,
            "return": -0.053475935828877
          },
          {
            "date": "2026-03-03",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 886900,
            "close": 0.935,
            "return": -0.09223300970873782
          },
          {
            "date": "2026-03-02",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 415300,
            "close": 1.03,
            "return": -0.04629629629629628
          },
          {
            "date": "2026-02-27",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 113500,
            "close": 1.08,
            "return": -0.00917431192660556
          },
          {
            "date": "2026-02-26",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 254000,
            "close": 1.09,
            "return": -0.03539823008849541
          },
          {
            "date": "2026-02-25",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 426200,
            "close": 1.13,
            "return": -0.0423728813559322
          },
          {
            "date": "2026-02-24",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 185200,
            "close": 1.18,
            "return": 0.01724137931034475
          },
          {
            "date": "2026-02-23",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 126300,
            "close": 1.16,
            "return": -0.025210084033613467
          },
          {
            "date": "2026-02-20",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 121800,
            "close": 1.19,
            "return": 0.017094017094017033
          },
          {
            "date": "2026-02-19",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 163000,
            "close": 1.17,
            "return": -0.025000000000000022
          },
          {
            "date": "2026-02-16",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 288100,
            "close": 1.2,
            "return": 0.008403361344537785
          },
          {
            "date": "2026-02-13",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 477400,
            "close": 1.19,
            "return": -0.016528925619834767
          },
          {
            "date": "2026-02-12",
            "short_ratio": 0.005573359342343598,
            "short_vol": 4000,
            "total_vol": 717700,
            "close": 1.21,
            "return": 0.0431034482758621
          },
          {
            "date": "2026-02-11",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 709200,
            "close": 1.16,
            "return": 0.026548672566371723
          },
          {
            "date": "2026-02-10",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 248000,
            "close": 1.13,
            "return": -0.017391304347826098
          },
          {
            "date": "2026-02-09",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 722900,
            "close": 1.15,
            "return": 0.04545454545454519
          },
          {
            "date": "2026-02-06",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 587400,
            "close": 1.1,
            "return": 0.06796116504854366
          },
          {
            "date": "2026-02-05",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 157500,
            "close": 1.03,
            "return": 0.009803921568627416
          },
          {
            "date": "2026-02-04",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 557700,
            "close": 1.02,
            "return": -0.019230769230769273
          },
          {
            "date": "2026-02-03",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 115600,
            "close": 1.04,
            "return": 0.009708737864077666
          },
          {
            "date": "2026-02-02",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 193700,
            "close": 1.03,
            "return": -0.04629629629629628
          },
          {
            "date": "2026-01-30",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 252800,
            "close": 1.08,
            "return": -0.00917431192660556
          },
          {
            "date": "2026-01-29",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 95700,
            "close": 1.09,
            "return": 0.01869158878504673
          },
          {
            "date": "2026-01-28",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 240900,
            "close": 1.07,
            "return": -0.01834862385321101
          },
          {
            "date": "2026-01-27",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 577900,
            "close": 1.09,
            "return": 0.01869158878504673
          },
          {
            "date": "2026-01-26",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 256400,
            "close": 1.07,
            "return": 0.01904761904761898
          },
          {
            "date": "2026-01-23",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 373300,
            "close": 1.05,
            "return": 0.0
          },
          {
            "date": "2026-01-22",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 455600,
            "close": 1.05,
            "return": 0.0
          },
          {
            "date": "2026-01-21",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 284300,
            "close": 1.05,
            "return": 0.0
          },
          {
            "date": "2026-01-20",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 381500,
            "close": 1.05,
            "return": 0.0
          },
          {
            "date": "2026-01-19",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 332800,
            "close": 1.05,
            "return": 0.01941747572815533
          },
          {
            "date": "2026-01-16",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 205000,
            "close": 1.03,
            "return": -0.04629629629629628
          },
          {
            "date": "2026-01-15",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 642000,
            "close": 1.08,
            "return": 0.0
          },
          {
            "date": "2026-01-14",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 399400,
            "close": 1.08,
            "return": -0.0357142857142857
          },
          {
            "date": "2026-01-13",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 437200,
            "close": 1.12,
            "return": -0.01754385964912264
          },
          {
            "date": "2026-01-12",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 528300,
            "close": 1.14,
            "return": -0.02564102564102566
          },
          {
            "date": "2026-01-09",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 265100,
            "close": 1.17,
            "return": -0.01680672268907568
          },
          {
            "date": "2026-01-08",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 196600,
            "close": 1.19,
            "return": 0.008474576271186418
          },
          {
            "date": "2026-01-07",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 558800,
            "close": 1.18,
            "return": -0.04065040650406504
          },
          {
            "date": "2026-01-06",
            "short_ratio": 0.023299987336963403,
            "short_vol": 18400,
            "total_vol": 789700,
            "close": 1.23,
            "return": -0.06106870229007644
          },
          {
            "date": "2026-01-05",
            "short_ratio": 0.01693623507494284,
            "short_vol": 20000,
            "total_vol": 1180900,
            "close": 1.31,
            "return": 0.03149606299212593
          },
          {
            "date": "2026-01-02",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 922100,
            "close": 1.27,
            "return": 0.07627118644067798
          },
          {
            "date": "2025-12-31",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 25600,
            "close": 1.18,
            "return": -0.008403361344537785
          },
          {
            "date": "2025-12-30",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 232000,
            "close": 1.19,
            "return": 0.02586206896551735
          },
          {
            "date": "2025-12-29",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 71600,
            "close": 1.16,
            "return": -0.016949152542372947
          },
          {
            "date": "2025-12-26",
            "short_ratio": 0.050761421319796954,
            "short_vol": 5000,
            "total_vol": 98500,
            "close": 1.18,
            "return": -0.008403361344537785
          },
          {
            "date": "2025-12-24",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 72300,
            "close": 1.19,
            "return": 0.0
          },
          {
            "date": "2025-12-23",
            "short_ratio": 0.005841121495327103,
            "short_vol": 4000,
            "total_vol": 684800,
            "close": 1.19,
            "return": -0.05555555555555558
          },
          {
            "date": "2025-12-22",
            "short_ratio": 0.0,
            "short_vol": 0,
            "total_vol": 324400,
            "close": 1.26,
            "return": 0.016129032258064502
          },
          {
            "date": "2025-12-19",
            "short_ratio": 0.02753303964757709,
            "short_vol": 5000,
            "total_vol": 181600,
            "close": 1.24,
            "return": -0.023622047244094557
          },
          {
            "date": "2025-12-18",
            "short_ratio": 0.08650519031141868,
            "short_vol": 10000,
            "total_vol": 115600,
            "close": 1.27,
            "return": -0.0078125
          },
          {
            "date": "2025-12-17",
            "short_ratio": 0.06837606837606838,
            "short_vol": 16000,
            "total_vol": 234000,
            "close": 1.28,
            "return": 0.032258064516129004
          },
          {
            "date": "2025-12-16",
            "short_ratio": 0.06568807339449541,
            "short_vol": 17900,
            "total_vol": 272500,
            "close": 1.24,
            "return": -0.03875968992248069
          },
          {
            "date": "2025-12-15",
            "short_ratio": 0.032053015958885586,
            "short_vol": 47400,
            "total_vol": 1478800,
            "close": 1.29,
            "return": 0.11206896551724155
          },
          {
            "date": "2025-12-12",
            "short_ratio": 0.04451038575667656,
            "short_vol": 27000,
            "total_vol": 606600,
            "close": 1.16,
            "return": -0.016949152542372947
          },
          {
            "date": "2025-12-11",
            "short_ratio": 0.018425901553040275,
            "short_vol": 7000,
            "total_vol": 379900,
            "close": 1.18,
            "return": -0.04065040650406504
          },
          {
            "date": "2025-12-10",
            "short_ratio": 0.02773037542662116,
            "short_vol": 6500,
            "total_vol": 234400,
            "close": 1.23,
            "return": 0.025000000000000133
          },
          {
            "date": "2025-12-09",
            "short_ratio": 0.07628695472400249,
            "short_vol": 73800,
            "total_vol": 967400,
            "close": 1.2,
            "return": 0.04347826086956519
          },
          {
            "date": "2025-12-08",
            "short_ratio": 0.05055593374177445,
            "short_vol": 111400,
            "total_vol": 2203500,
            "close": 1.15,
            "return": -0.08730158730158732
          },
          {
            "date": "2025-12-05",
            "short_ratio": 0.030832869855394882,
            "short_vol": 88700,
            "total_vol": 2876800,
            "close": 1.26,
            "return": 0.016129032258064502
          },
          {
            "date": "2025-12-04",
            "short_ratio": 0.011774484000554093,
            "short_vol": 17000,
            "total_vol": 1443800,
            "close": 1.24,
            "return": 0.25888324873096447
          },
          {
            "date": "2025-12-03",
            "short_ratio": 0.01742043551088777,
            "short_vol": 26000,
            "total_vol": 1492500,
            "close": 0.985,
            "return": 0.2012195121951219
          },
          {
            "date": "2025-12-02",
            "short_ratio": 0.01006588579795022,
            "short_vol": 5500,
            "total_vol": 546400,
            "close": 0.82,
            "return": -0.017964071856287456
          },
          {
            "date": "2025-12-01",
            "short_ratio": 0.01015916017609211,
            "short_vol": 15000,
            "total_vol": 1476500,
            "close": 0.835,
            "return": 0.16783216783216792
          },
          {
            "date": "2025-11-28",
            "short_ratio": 0.08547008547008547,
            "short_vol": 20000,
            "total_vol": 234000,
            "close": 0.715,
            "return": 0.014184397163120588
          },
          {
            "date": "2025-11-27",
            "short_ratio": 0.007445554383570144,
            "short_vol": 12000,
            "total_vol": 1611700,
            "close": 0.705,
            "return": -0.03424657534246578
          }
        ]
      },
      "peer_comparison": [
        {
          "ticker": "9MT",
          "avg_short_ratio": 0.0021039363704374882,
          "max_short_ratio": 0.06229660622966062,
          "is_target": true
        },
        {
          "ticker": "C76",
          "avg_short_ratio": 0.001293203877718031,
          "max_short_ratio": 0.26558891454965355,
          "is_target": false
        },
        {
          "ticker": "QS9",
          "avg_short_ratio": 0.0013264211939601606,
          "max_short_ratio": 0.0939299887277837,
          "is_target": false
        },
        {
          "ticker": "ITS",
          "avg_short_ratio": 0.003078844304598654,
          "max_short_ratio": 0.1385606874328679,
          "is_target": false
        },
        {
          "ticker": "5DD",
          "avg_short_ratio": 0.007175405994868471,
          "max_short_ratio": 0.36517719568567025,
          "is_target": false
        },
        {
          "ticker": "PCT",
          "avg_short_ratio": 0.00817999260776416,
          "max_short_ratio": 0.5856942496493689,
          "is_target": false
        },
        {
          "ticker": "XHV",
          "avg_short_ratio": 0.011046347170937327,
          "max_short_ratio": 1.0,
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
          "opening": 0.004422703435471466,
          "continuous": 0.9617636334416996,
          "closing": 0.0072817454786556855,
          "auctions": 0.038236366558300455,
          "other": 0.0
        },
        "1M": {
          "opening": 0.005421571134526574,
          "continuous": 0.9768363683022657,
          "closing": 0.01192634793381573,
          "auctions": 0.02316363169773433,
          "other": 0.0
        },
        "3M": {
          "opening": 0.010320625856150038,
          "continuous": 0.9696263777963697,
          "closing": 0.011043025564209476,
          "auctions": 0.030373622203630313,
          "other": 0.0
        },
        "6M": {
          "opening": 0.01515188961877831,
          "continuous": 0.9598685805628453,
          "closing": 0.014621609486541695,
          "auctions": 0.04013141943715473,
          "other": 0.0
        }
      },
      "hhi": {
        "1D": 0.11914151175849393,
        "1M": 0.161410905110823,
        "3M": 0.15652051398406389,
        "6M": 0.1725380322640246
      },
      "profile_buckets": [
        {
          "time": "08:30",
          "avg_share": 0.0149
        },
        {
          "time": "09:00",
          "avg_share": 0.1435
        },
        {
          "time": "09:30",
          "avg_share": 0.0924
        },
        {
          "time": "10:00",
          "avg_share": 0.0773
        },
        {
          "time": "10:30",
          "avg_share": 0.0876
        },
        {
          "time": "11:00",
          "avg_share": 0.0548
        },
        {
          "time": "11:30",
          "avg_share": 0.04
        },
        {
          "time": "12:30",
          "avg_share": 0.0093
        },
        {
          "time": "13:00",
          "avg_share": 0.0533
        },
        {
          "time": "13:30",
          "avg_share": 0.0616
        },
        {
          "time": "14:00",
          "avg_share": 0.0453
        },
        {
          "time": "14:30",
          "avg_share": 0.0569
        },
        {
          "time": "15:00",
          "avg_share": 0.0448
        },
        {
          "time": "15:30",
          "avg_share": 0.0475
        },
        {
          "time": "16:00",
          "avg_share": 0.0578
        },
        {
          "time": "16:30",
          "avg_share": 0.0915
        },
        {
          "time": "17:00",
          "avg_share": 0.0216
        }
      ],
      "peers_hhi_rows": [
        {
          "ticker": "9MT",
          "auctions_pct": 4.10046640588013,
          "hhi": 0.16921028896735882,
          "interp": {
            "text": "Moderate",
            "cls": "bg-amber-500/20 text-amber-400",
            "you": true
          }
        },
        {
          "ticker": "PCT",
          "auctions_pct": 2.6723202836033675,
          "hhi": 0.2014811826892541,
          "interp": {
            "text": "Moderate",
            "cls": "bg-amber-500/20 text-amber-400"
          }
        },
        {
          "ticker": "C76",
          "auctions_pct": 4.484751976670797,
          "hhi": 0.3677272041323292,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "XHV",
          "auctions_pct": 3.637549107780489,
          "hhi": 0.6358790874732133,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "1Y1",
          "auctions_pct": 5.312675891452347,
          "hhi": 0.7387846891129686,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "ITS",
          "auctions_pct": 4.221115831984785,
          "hhi": 0.24374986422151906,
          "interp": {
            "text": "Moderate",
            "cls": "bg-amber-500/20 text-amber-400"
          }
        },
        {
          "ticker": "QS9",
          "auctions_pct": 4.8837823658616415,
          "hhi": 0.28467207603950495,
          "interp": {
            "text": "Concentrated",
            "cls": "bg-red-500/20 text-red-400"
          }
        },
        {
          "ticker": "575",
          "auctions_pct": 3.5603318951394707,
          "hhi": 0.17891949142621236,
          "interp": {
            "text": "Moderate",
            "cls": "bg-amber-500/20 text-amber-400"
          }
        },
        {
          "ticker": "5DD",
          "auctions_pct": 4.152355363624831,
          "hhi": 0.24501991723761812,
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
