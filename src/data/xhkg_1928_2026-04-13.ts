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
      "ticker": "1928",
      "name": "SANDS CHINA LTD",
      "marketCap": 138073055395.96,
      "sector": "Casinos & Gaming",
      "industry": "Consumer Discretionary - Travel & Leisure"
    },
    {
      "ticker": "27",
      "name": "GALAXY ENT",
      "marketCap": 150558295678.56,
      "sector": "Casinos & Gaming",
      "industry": "Consumer Discretionary - Travel & Leisure"
    },
    {
      "ticker": "2282",
      "name": "MGM CHINA",
      "marketCap": 41990000011.05,
      "sector": "Casinos & Gaming",
      "industry": "Consumer Discretionary - Travel & Leisure"
    },
    {
      "ticker": "1128",
      "name": "WYNN MACAU",
      "marketCap": 29529455736.0,
      "sector": "Casinos & Gaming",
      "industry": "Consumer Discretionary - Travel & Leisure"
    },
    {
      "ticker": "200",
      "name": "MELCO INT'L DEV",
      "marketCap": 9532357398.080002,
      "sector": "Casinos & Gaming",
      "industry": "Consumer Discretionary - Travel & Leisure"
    },
    {
      "ticker": "880",
      "name": "SJM HOLDINGS",
      "marketCap": 14558701000.3,
      "sector": "Casinos & Gaming",
      "industry": "Consumer Discretionary - Travel & Leisure"
    },
    {
      "ticker": "3918",
      "name": "NAGACORP",
      "marketCap": 19018857688.0,
      "sector": "Casinos & Gaming",
      "industry": "Consumer Discretionary - Travel & Leisure"
    },
    {
      "ticker": "753",
      "name": "AIR CHINA",
      "marketCap": 23985155652.48,
      "sector": "Airlines",
      "industry": "Consumer Discretionary - Travel & Leisure"
    },
    {
      "ticker": "9987",
      "name": "YUM CHINA",
      "marketCap": 136053800316.2,
      "sector": "Restaurants",
      "industry": "Consumer Discretionary - Travel & Leisure"
    }
  ]
};

export const REPORT_DATA: ReportData = {
  "meta": {
    "market": "XHKG",
    "currency": "HKD",
    "ticker": "1928",
    "company": "SANDS CHINA LTD",
    "asof_date": "2026-04-13",
    "industry": "Consumer Discretionary - Travel & Leisure",
    "sector": "Casinos & Gaming",
    "market_cap_display": "138.1B",
    "market_cap_category": "large",
    "universe_total": 2574,
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
          "score_pca": 88.65578865578865,
          "score_pca_percentile": 88.65578865578865,
          "rank_pca": 293,
          "total": 2574,
          "adv_notional_sgd": 139059045.5,
          "adv_volume_shares": 8151175.0,
          "free_float_shares": 2039531692.0,
          "turnover_ratio": 0.003996591488120892,
          "votes": 4989.0,
          "trades": 4989.0,
          "spread_pct": 0.0009338821847625905,
          "spread_ticks": null,
          "amihud": 6.26774248240058e-11,
          "volatility": 0.14641395424785653
        },
        "pca": {
          "valid": true,
          "window_days": 1,
          "variance_explained": 0.5448533203102911,
          "loadings": {
            "log_adv": 0.5373384042564382,
            "log_trades": 0.5007273571742245,
            "log_turnover": 0.5010208539275326,
            "neg_spread": 0.3932827095081454,
            "neg_amihud": 0.029466942737967714,
            "neg_vol": -0.23233180304425852
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
          "peer_median_adv": 42188937.975,
          "peer_median_score_pca": 80.05050505050505,
          "peer_median_trades": 1477.5,
          "peer_median_volatility": 0.2363284444666054,
          "peer_median_spread_pct": 0.0029151446864286437,
          "peer_median_spread_ticks": 1.5269570819761702,
          "peer_median_amihud": 3.8216608385572887e-10,
          "peer_median_turnover_ratio": 0.004637903074948425,
          "target_vs_peer": {
            "score_pca_delta": 8.61,
            "adv_delta_pct": 229.6,
            "trades_delta_pct": 237.66,
            "volatility_delta_pct": 38.05,
            "spread_pct_delta_pct": 67.96,
            "spread_ticks_delta_pct": null,
            "amihud_delta_pct": 83.6,
            "turnover_ratio_delta_pct": -13.83
          }
        },
        "peer_liquidity": [
          {
            "ticker": "1928",
            "score_pca": 88.65578865578865,
            "rank_pca": 293,
            "adv": 139059045.5,
            "trades": 4989.0,
            "volatility": 0.14641395424785653,
            "spread_pct": 0.0009338821847625905,
            "spread_ticks": null,
            "amihud": 6.26774248240058e-11,
            "turnover_ratio": 0.003996591488120892,
            "is_target": true
          },
          {
            "ticker": "27",
            "score_pca": 95.8041958041958,
            "rank_pca": 109,
            "adv": 642715809.84,
            "trades": 6226.0,
            "volatility": 0.38261566062062774,
            "spread_pct": 0.0009373543825369423,
            "spread_ticks": null,
            "amihud": 3.451650014151582e-11,
            "turnover_ratio": 0.0130494314243858,
            "is_target": false
          },
          {
            "ticker": "2282",
            "score_pca": 86.67443667443668,
            "rank_pca": 344,
            "adv": 59724575.95,
            "trades": 3386.0,
            "volatility": 0.2418075092873466,
            "spread_pct": 0.0014691472310879284,
            "spread_ticks": null,
            "amihud": 1.946921646874262e-10,
            "turnover_ratio": 0.006596708223753104,
            "is_target": false
          },
          {
            "ticker": "1128",
            "score_pca": 71.95027195027195,
            "rank_pca": 723,
            "adv": 10545419.940000001,
            "trades": 711.0,
            "volatility": 0.18777643591643056,
            "spread_pct": 0.002860913394949032,
            "spread_ticks": 1.5986808726534754,
            "amihud": 5.044037095188583e-10,
            "turnover_ratio": 0.0012418128718328968,
            "is_target": false
          },
          {
            "ticker": "200",
            "score_pca": 79.44832944832945,
            "rank_pca": 530,
            "adv": 17348477.12,
            "trades": 838.0,
            "volatility": 0.5555132528145118,
            "spread_pct": 0.003475859119273311,
            "spread_ticks": 1.455233291298865,
            "amihud": 2.3742678429468047e-09,
            "turnover_ratio": 0.004711730087162366,
            "is_target": false
          },
          {
            "ticker": "880",
            "score_pca": 78.94327894327894,
            "rank_pca": 543,
            "adv": 24653299.999999996,
            "trades": 1443.0,
            "volatility": 0.23084937964586416,
            "spread_pct": 0.005101843207803943,
            "spread_ticks": 1.0471491228070176,
            "amihud": 9.657743105192389e-10,
            "turnover_ratio": 0.0045640760627344845,
            "is_target": false
          },
          {
            "ticker": "3918",
            "score_pca": 71.63947163947164,
            "rank_pca": 731,
            "adv": 8809977.6,
            "trades": 379.0,
            "volatility": 0.22275811444493276,
            "spread_pct": 0.003969311785313183,
            "spread_ticks": 1.7020648967551621,
            "amihud": 1.304685822761139e-09,
            "turnover_ratio": 0.004405980087801416,
            "is_target": false
          },
          {
            "ticker": "753",
            "score_pca": 85.74203574203574,
            "rank_pca": 368,
            "adv": 85493609.96,
            "trades": 1819.0,
            "volatility": 0.25581922141303254,
            "spread_pct": 0.0029693759779082555,
            "spread_ticks": 1.4367063492063492,
            "amihud": 2.5992845819259937e-10,
            "turnover_ratio": 0.010359455624876378,
            "is_target": false
          },
          {
            "ticker": "9987",
            "score_pca": 80.65268065268066,
            "rank_pca": 499,
            "adv": 145797990.0,
            "trades": 1512.0,
            "volatility": 0.19739035478652558,
            "spread_pct": 0.000975509207591954,
            "spread_ticks": 1.8923476005188067,
            "amihud": 9.429110905543269e-11,
            "turnover_ratio": 0.0010955224841893779,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Casinos & Gaming",
          "sector_count": 17,
          "market_count": 2574,
          "market": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.44715899271990633,
              "median": 0.2995098745205822,
              "min": 0.0,
              "max": 8.521314226042401,
              "p5": 0.0,
              "p95": 1.4075045606617482,
              "count": 2574
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 59168125.60115096,
              "median": 254900.0,
              "min": 0.0,
              "max": 10355121000.0,
              "p5": 0.0,
              "p95": 255245995.64399976,
              "count": 2574
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.04849621540361013,
              "median": 0.02796412967770533,
              "min": 0.0004461756629917344,
              "max": 0.7648559970834851,
              "p5": 0.001432364193350901,
              "p95": 0.1598131497494227,
              "count": 2574
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.006537377216591497,
              "median": 0.0010420291550965475,
              "min": 0.0,
              "max": 2.271727824179446,
              "p5": 0.0,
              "p95": 0.021300561369894604,
              "count": 2553
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.3905490736384505e-05,
              "median": 6.909472437596244e-09,
              "min": 0.0,
              "max": 0.019525148391127775,
              "p5": 0.0,
              "p95": 8.165515057712393e-06,
              "count": 2183
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1127.711344211344,
              "median": 22.0,
              "min": 0.0,
              "max": 69247.0,
              "p5": 0.0,
              "p95": 6158.299999999998,
              "count": 2574
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.5441499381755321,
              "median": 0.2418075092873466,
              "min": 0.0,
              "max": 2.7426497078697025,
              "p5": 0.0,
              "p95": 2.106707277534981,
              "count": 17
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 53266144.761764705,
              "median": 305280.0,
              "min": 0.0,
              "max": 642715809.84,
              "p5": 0.0,
              "p95": 239790398.36799964,
              "count": 17
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.04329183156135142,
              "median": 0.022155943757988954,
              "min": 0.0009338821847625905,
              "max": 0.16791409046534328,
              "p5": 0.0009366599429820719,
              "p95": 0.11937538169385137,
              "count": 17
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.004113843813274885,
              "median": 0.001293736992840497,
              "min": 0.0,
              "max": 0.01832078660316485,
              "p5": 0.0,
              "p95": 0.014103702460141606,
              "count": 17
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 2.908203589403553e-06,
              "median": 1.07754446507797e-08,
              "min": 3.451650014151582e-11,
              "max": 2.7226195229970648e-05,
              "p5": 5.2821101185134305e-11,
              "p95": 1.5650992634132186e-05,
              "count": 14
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1064.2941176470588,
              "median": 42.0,
              "min": 0.0,
              "max": 6226.0,
              "p5": 0.0,
              "p95": 5236.399999999999,
              "count": 17
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 124386145.05125001,
              "median": 42188937.975,
              "min": 8809977.6,
              "max": 642715809.84,
              "p5": 9417382.419,
              "p95": 468794572.8959998,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 2039.25,
              "median": 1477.5,
              "min": 379.0,
              "max": 6226.0,
              "p5": 495.20000000000005,
              "p95": 5231.999999999998,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.28431624111615894,
              "median": 0.2363284444666054,
              "min": 0.18777643591643056,
              "max": 0.5555132528145118,
              "p5": 0.1911413075209638,
              "p95": 0.4949990955466523,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.0027199142883080688,
              "median": 0.0029151446864286437,
              "min": 0.0009373543825369423,
              "max": 0.005101843207803943,
              "p5": 0.0009507085713061963,
              "p95": 0.004705457209932176,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 7.165699897278769e-10,
              "median": 3.8216608385572887e-10,
              "min": 3.451650014151582e-11,
              "max": 2.3742678429468047e-09,
              "p5": 5.5437613261386724e-11,
              "p95": 1.999914135881821e-09,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.005753089608341978,
              "median": 0.004637903074948425,
              "min": 0.0010955224841893779,
              "max": 0.0130494314243858,
              "p5": 0.0011467241198646096,
              "p95": 0.0121079398945575,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 1.522030355539946,
              "median": 1.5269570819761702,
              "min": 1.0471491228070176,
              "max": 1.8923476005188067,
              "p5": 1.1445384294068504,
              "p95": 1.8447769245778955,
              "count": 6
            }
          },
          "returns": {
            "window_days": 1,
            "n_obs": 1,
            "stock": -0.008715862870424251,
            "market": -0.003911099438221655,
            "sector": -0.011494252873563204,
            "peers": -0.01796587725822485,
            "vs_market": -0.004804763432202597,
            "vs_sector": 0.002778390003138953,
            "vs_peers": 0.009250014387800598
          }
        }
      },
      "30d": {
        "label": "1M",
        "window_days": 21,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 21,
          "score_pca": 93.5120435120435,
          "score_pca_percentile": 93.5120435120435,
          "rank_pca": 168,
          "total": 2574,
          "adv_notional_sgd": 181804929.5,
          "adv_volume_shares": 10551650.0,
          "free_float_shares": 2039531692.0,
          "turnover_ratio": 0.005173565108788709,
          "votes": 4862.0,
          "trades": 4862.0,
          "spread_pct": 0.000817474901178665,
          "spread_ticks": null,
          "amihud": 9.20861426744221e-11,
          "volatility": 0.3298296176676582
        },
        "pca": {
          "valid": true,
          "window_days": 21,
          "variance_explained": 0.5656093828444971,
          "loadings": {
            "log_adv": 0.5256309866815597,
            "log_trades": 0.48151699787693036,
            "log_turnover": 0.48458982491041636,
            "neg_spread": 0.4613697966497511,
            "neg_amihud": 0.19479326773167047,
            "neg_vol": 0.07886470550782489
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
          "peer_median_adv": 35954440.6,
          "peer_median_score_pca": 83.35275835275836,
          "peer_median_trades": 1651.0,
          "peer_median_volatility": 0.35689895794721027,
          "peer_median_spread_pct": 0.0028021418975176394,
          "peer_median_spread_ticks": 1.4076894835218412,
          "peer_median_amihud": 4.1209024592370326e-10,
          "peer_median_turnover_ratio": 0.0049280354262078805,
          "target_vs_peer": {
            "score_pca_delta": 10.16,
            "adv_delta_pct": 405.7,
            "trades_delta_pct": 194.49,
            "volatility_delta_pct": 7.58,
            "spread_pct_delta_pct": 70.83,
            "spread_ticks_delta_pct": null,
            "amihud_delta_pct": 77.65,
            "turnover_ratio_delta_pct": 4.98
          }
        },
        "peer_liquidity": [
          {
            "ticker": "1928",
            "score_pca": 93.5120435120435,
            "rank_pca": 168,
            "adv": 181804929.5,
            "trades": 4862.0,
            "volatility": 0.3298296176676582,
            "spread_pct": 0.000817474901178665,
            "spread_ticks": null,
            "amihud": 9.20861426744221e-11,
            "turnover_ratio": 0.005173565108788709,
            "is_target": true
          },
          {
            "ticker": "27",
            "score_pca": 94.48329448329449,
            "rank_pca": 143,
            "adv": 340850954.7,
            "trades": 4128.0,
            "volatility": 0.30978089337706677,
            "spread_pct": 0.0008234198131386994,
            "spread_ticks": null,
            "amihud": 3.9581273206217715e-11,
            "turnover_ratio": 0.006616409859996801,
            "is_target": false
          },
          {
            "ticker": "2282",
            "score_pca": 85.93628593628594,
            "rank_pca": 363,
            "adv": 49938767.0,
            "trades": 2281.0,
            "volatility": 0.40401702251735383,
            "spread_pct": 0.00180719883078967,
            "spread_ticks": null,
            "amihud": 3.3017478024112625e-10,
            "turnover_ratio": 0.005301591966595504,
            "is_target": false
          },
          {
            "ticker": "1128",
            "score_pca": 80.76923076923077,
            "rank_pca": 496,
            "adv": 21970114.2,
            "trades": 1331.0,
            "volatility": 0.2985813934669915,
            "spread_pct": 0.0027615898638434825,
            "spread_ticks": 1.5341246290801187,
            "amihud": 4.940057116062803e-10,
            "turnover_ratio": 0.002546317754381663,
            "is_target": false
          },
          {
            "ticker": "200",
            "score_pca": 77.81662781662781,
            "rank_pca": 572,
            "adv": 14488192.06,
            "trades": 846.0,
            "volatility": 0.6919692334448153,
            "spread_pct": 0.0036327725085412853,
            "spread_ticks": 1.4106295476115154,
            "amihud": 1.34052497038377e-09,
            "turnover_ratio": 0.004554478885820257,
            "is_target": false
          },
          {
            "ticker": "880",
            "score_pca": 80.4972804972805,
            "rank_pca": 503,
            "adv": 21493969.639999997,
            "trades": 1136.0,
            "volatility": 0.2782699022116973,
            "spread_pct": 0.004972418615492231,
            "spread_ticks": 1.068675543097407,
            "amihud": 6.537108364472342e-10,
            "turnover_ratio": 0.003903031164815378,
            "is_target": false
          },
          {
            "ticker": "3918",
            "score_pca": 77.03962703962704,
            "rank_pca": 592,
            "adv": 11539153.649999999,
            "trades": 498.0,
            "volatility": 0.4103823507971734,
            "spread_pct": 0.004130534916788498,
            "spread_ticks": 1.6886682242990654,
            "amihud": 1.5936570120356933e-09,
            "turnover_ratio": 0.00614340113477677,
            "is_target": false
          },
          {
            "ticker": "753",
            "score_pca": 94.52214452214453,
            "rank_pca": 142,
            "adv": 192672000.0,
            "trades": 4383.0,
            "volatility": 0.6278937878833066,
            "spread_pct": 0.002842693931191796,
            "spread_ticks": 1.4047494194321672,
            "amihud": 1.3208417804847453e-10,
            "turnover_ratio": 0.023528743750309764,
            "is_target": false
          },
          {
            "ticker": "9987",
            "score_pca": 87.25718725718725,
            "rank_pca": 329,
            "adv": 217657440.0,
            "trades": 1971.0,
            "volatility": 0.2940019260569599,
            "spread_pct": 0.0006544301819062883,
            "spread_ticks": 1.3679360111284995,
            "amihud": 5.919019087588772e-11,
            "turnover_ratio": 0.0016138107220262817,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Casinos & Gaming",
          "sector_count": 17,
          "market_count": 2574,
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
              "mean": 64359142.32970755,
              "median": 222280.0,
              "min": 0.0,
              "max": 12484489600.0,
              "p5": 0.0,
              "p95": 245338994.3399997,
              "count": 2574
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.04636574764805104,
              "median": 0.02900784686320404,
              "min": 0.0005957156584162828,
              "max": 0.7873945213823746,
              "p5": 0.001488374564717821,
              "p95": 0.14724834853523766,
              "count": 2574
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.004532772058050455,
              "median": 0.0008751640932674877,
              "min": 0.0,
              "max": 0.74849980977415,
              "p5": 0.0,
              "p95": 0.016681302164951978,
              "count": 2553
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.304847972112849e-06,
              "median": 4.6395854066480917e-08,
              "min": 0.0,
              "max": 0.0004281949934123848,
              "p5": 3.630791306986329e-11,
              "p95": 4.973974037584155e-06,
              "count": 2567
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1154.0291375291376,
              "median": 20.5,
              "min": 0.0,
              "max": 79388.0,
              "p5": 0.0,
              "p95": 6003.949999999999,
              "count": 2574
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.5993379445120316,
              "median": 0.5052921531001933,
              "min": 0.2782699022116973,
              "max": 1.4746935881150318,
              "p5": 0.2945190952159326,
              "p95": 1.2832437856457266,
              "count": 17
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 37891086.45294117,
              "median": 605520.0,
              "min": 0.0,
              "max": 340850954.7,
              "p5": 1933.3600000000004,
              "p95": 213614134.53999987,
              "count": 17
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.03650482582392658,
              "median": 0.03350214257888577,
              "min": 0.000817474901178665,
              "max": 0.1084819803421916,
              "p5": 0.0008222308307466925,
              "p95": 0.10001807439011662,
              "count": 17
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0025932775598020144,
              "median": 0.002546317754381663,
              "min": 0.0,
              "max": 0.006616409859996801,
              "p5": 8.18533870064409e-06,
              "p95": 0.006238002879820776,
              "count": 17
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 1.0490076652339179e-06,
              "median": 1.9090928181837257e-08,
              "min": 3.9581273206217715e-11,
              "max": 1.3855734096586349e-05,
              "p5": 8.158516878078122e-11,
              "p95": 3.722122250812175e-06,
              "count": 17
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 904.1176470588235,
              "median": 37.0,
              "min": 0.0,
              "max": 4862.0,
              "p5": 0.8,
              "p95": 4274.799999999999,
              "count": 17
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 108826323.90625,
              "median": 35954440.6,
              "min": 11539153.649999999,
              "max": 340850954.7,
              "p5": 12571317.0935,
              "p95": 297733224.55499995,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 2071.75,
              "median": 1651.0,
              "min": 498.0,
              "max": 4383.0,
              "p5": 619.8,
              "p95": 4293.75,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.4143620637194205,
              "median": 0.35689895794721027,
              "min": 0.2782699022116973,
              "max": 0.6919692334448153,
              "p5": 0.2837761105575392,
              "p95": 0.6695428274982872,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.002703132332711494,
              "median": 0.0028021418975176394,
              "min": 0.0006544301819062883,
              "max": 0.004972418615492231,
              "p5": 0.0007135765528376322,
              "p95": 0.0046777593209459244,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 5.803661191055855e-10,
              "median": 4.1209024592370326e-10,
              "min": 3.9581273206217715e-11,
              "max": 1.5936570120356933e-09,
              "p5": 4.644439439060222e-11,
              "p95": 1.50506079745752e-09,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.006775973154840302,
              "median": 0.0049280354262078805,
              "min": 0.0016138107220262817,
              "max": 0.023528743750309764,
              "p5": 0.0019401881833506652,
              "p95": 0.017609426888700215,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 1.4124638957747955,
              "median": 1.4076894835218412,
              "min": 1.068675543097407,
              "max": 1.6886682242990654,
              "p5": 1.1434906601051802,
              "p95": 1.6500323254943288,
              "count": 6
            }
          },
          "returns": {
            "window_days": 21,
            "n_obs": 21,
            "stock": -0.012159814707585093,
            "market": -0.007811259659372016,
            "sector": -0.022798696748552727,
            "peers": -0.06806818666435188,
            "vs_market": -0.004348555048213076,
            "vs_sector": 0.010638882040967634,
            "vs_peers": 0.05590837195676679
          }
        }
      },
      "3m": {
        "label": "3M",
        "window_days": 63,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 63,
          "score_pca": 95.88189588189589,
          "score_pca_percentile": 95.88189588189589,
          "rank_pca": 107,
          "total": 2574,
          "adv_notional_sgd": 238984232.2,
          "adv_volume_shares": 13900557.0,
          "free_float_shares": 2039531692.0,
          "turnover_ratio": 0.006815563128792999,
          "votes": 6484.0,
          "trades": 6484.0,
          "spread_pct": 0.0007475954602971933,
          "spread_ticks": null,
          "amihud": 5.3692910481230097e-11,
          "volatility": 0.3350149061823258
        },
        "pca": {
          "valid": true,
          "window_days": 63,
          "variance_explained": 0.6175000296400199,
          "loadings": {
            "log_adv": 0.4988196357475682,
            "log_trades": 0.45226285665160737,
            "log_turnover": 0.45226788536661305,
            "neg_spread": 0.4615425072888609,
            "neg_amihud": 0.33110116296932596,
            "neg_vol": 0.13943304198745415
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
          "peer_median_adv": 58695920.96,
          "peer_median_score_pca": 86.13053613053614,
          "peer_median_trades": 1915.0,
          "peer_median_volatility": 0.3508552819314935,
          "peer_median_spread_pct": 0.0026699670499478172,
          "peer_median_spread_ticks": 1.453402809171445,
          "peer_median_amihud": 2.3307967095030264e-10,
          "peer_median_turnover_ratio": 0.006443217411004657,
          "target_vs_peer": {
            "score_pca_delta": 9.75,
            "adv_delta_pct": 307.2,
            "trades_delta_pct": 238.59,
            "volatility_delta_pct": 4.51,
            "spread_pct_delta_pct": 72.0,
            "spread_ticks_delta_pct": null,
            "amihud_delta_pct": 76.96,
            "turnover_ratio_delta_pct": 5.78
          }
        },
        "peer_liquidity": [
          {
            "ticker": "1928",
            "score_pca": 95.88189588189589,
            "rank_pca": 107,
            "adv": 238984232.2,
            "trades": 6484.0,
            "volatility": 0.3350149061823258,
            "spread_pct": 0.0007475954602971933,
            "spread_ticks": null,
            "amihud": 5.3692910481230097e-11,
            "turnover_ratio": 0.006815563128792999,
            "is_target": true
          },
          {
            "ticker": "27",
            "score_pca": 95.4933954933955,
            "rank_pca": 117,
            "adv": 364837277.28,
            "trades": 4349.0,
            "volatility": 0.30607527299926707,
            "spread_pct": 0.0007649513338553219,
            "spread_ticks": null,
            "amihud": 3.4009924445772823e-11,
            "turnover_ratio": 0.006600255886424345,
            "is_target": false
          },
          {
            "ticker": "2282",
            "score_pca": 91.33644133644133,
            "rank_pca": 224,
            "adv": 82845624.0,
            "trades": 3221.0,
            "volatility": 0.33318628456458177,
            "spread_pct": 0.0015903937181096235,
            "spread_ticks": null,
            "amihud": 1.822701917157517e-10,
            "turnover_ratio": 0.007826066579539501,
            "is_target": false
          },
          {
            "ticker": "1128",
            "score_pca": 85.23698523698525,
            "rank_pca": 381,
            "adv": 34546217.92,
            "trades": 1859.0,
            "volatility": 0.24690492285214247,
            "spread_pct": 0.002508893106523775,
            "spread_ticks": 1.451572327044025,
            "amihud": 2.838891501848536e-10,
            "turnover_ratio": 0.003918696591755292,
            "is_target": false
          },
          {
            "ticker": "200",
            "score_pca": 80.69153069153069,
            "rank_pca": 498,
            "adv": 23904000.000000004,
            "trades": 1087.0,
            "volatility": 0.5449005233697602,
            "spread_pct": 0.003500065741186519,
            "spread_ticks": 1.455233291298865,
            "amihud": 7.911868118652714e-10,
            "turnover_ratio": 0.006286178935584968,
            "is_target": false
          },
          {
            "ticker": "880",
            "score_pca": 82.82828282828282,
            "rank_pca": 443,
            "adv": 27288430.0,
            "trades": 1323.0,
            "volatility": 0.21713068429396268,
            "spread_pct": 0.004719429387811907,
            "spread_ticks": 1.0810169491525423,
            "amihud": 3.2532236690049115e-10,
            "turnover_ratio": 0.0045640760627344845,
            "is_target": false
          },
          {
            "ticker": "3918",
            "score_pca": 79.68142968142968,
            "rank_pca": 524,
            "adv": 17861134.5,
            "trades": 689.0,
            "volatility": 0.3880770357238242,
            "spread_pct": 0.004158095193056281,
            "spread_ticks": 1.8229098090849243,
            "amihud": 1.0603553147924134e-09,
            "turnover_ratio": 0.008652566314072048,
            "is_target": false
          },
          {
            "ticker": "753",
            "score_pca": 94.13364413364414,
            "rank_pca": 152,
            "adv": 183733200.0,
            "trades": 4094.0,
            "volatility": 0.4737865331743411,
            "spread_pct": 0.0028310409933718595,
            "spread_ticks": 1.6775987615389025,
            "amihud": 1.0003400879473646e-10,
            "turnover_ratio": 0.016551000058730076,
            "is_target": false
          },
          {
            "ticker": "9987",
            "score_pca": 87.02408702408702,
            "rank_pca": 335,
            "adv": 201824000.0,
            "trades": 1971.0,
            "volatility": 0.3685242792984052,
            "spread_pct": 0.0006496281744675677,
            "spread_ticks": 1.2939649884395792,
            "amihud": 5.841203232263234e-11,
            "turnover_ratio": 0.001454438180484184,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Casinos & Gaming",
          "sector_count": 17,
          "market_count": 2574,
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
              "mean": 61567077.16617986,
              "median": 233184.0,
              "min": 0.0,
              "max": 13968603216.0,
              "p5": 0.0,
              "p95": 239461326.92999986,
              "count": 2574
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.04278761289645461,
              "median": 0.027119306430072827,
              "min": 0.0005607359268088029,
              "max": 0.5173652694610777,
              "p5": 0.0014380738930340484,
              "p95": 0.1349675272478304,
              "count": 2574
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.004106812447093538,
              "median": 0.0008904739471300301,
              "min": 0.0,
              "max": 0.4542269048524885,
              "p5": 0.0,
              "p95": 0.016388330904557373,
              "count": 2553
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 7.248675400880523e-07,
              "median": 4.322802925070572e-08,
              "min": 0.0,
              "max": 4.7054394880481924e-05,
              "p5": 4.6644375118181316e-11,
              "p95": 3.663689956299134e-06,
              "count": 2574
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1090.8158508158508,
              "median": 20.0,
              "min": 0.0,
              "max": 80215.0,
              "p5": 0.0,
              "p95": 5982.399999999998,
              "count": 2574
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.5608230299872311,
              "median": 0.45345500564169905,
              "min": 0.21713068429396268,
              "max": 1.3267983411115674,
              "p5": 0.2409500751405065,
              "p95": 1.2138263698121625,
              "count": 17
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 46542381.5727647,
              "median": 222440.0,
              "min": 4100.0,
              "max": 364837277.28,
              "p5": 9124.0,
              "p95": 264154841.2159999,
              "count": 17
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.03496833147390201,
              "median": 0.03016858917480038,
              "min": 0.0007475954602971933,
              "max": 0.10831267127756751,
              "p5": 0.0007614801591436962,
              "p95": 0.09067159272380887,
              "count": 17
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.0030175332447950395,
              "median": 0.001536913341781604,
              "min": 2.6213006894020814e-05,
              "max": 0.008652566314072048,
              "p5": 5.5991701322797525e-05,
              "p95": 0.00799136652644601,
              "count": 17
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 4.627007937863862e-07,
              "median": 4.1724733587576e-08,
              "min": 3.4009924445772823e-11,
              "max": 3.227168302266003e-06,
              "p5": 4.975631327413864e-11,
              "p95": 2.901639990522085e-06,
              "count": 17
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1123.9411764705883,
              "median": 22.0,
              "min": 2.0,
              "max": 6484.0,
              "p5": 2.0,
              "p95": 4775.999999999998,
              "count": 17
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 117104985.4625,
              "median": 58695920.96,
              "min": 17861134.5,
              "max": 364837277.28,
              "p5": 19976137.425,
              "p95": 307782630.2319999,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 2324.125,
              "median": 1915.0,
              "min": 689.0,
              "max": 4349.0,
              "p5": 828.3,
              "p95": 4259.75,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.3598231920345356,
              "median": 0.3508552819314935,
              "min": 0.21713068429396268,
              "max": 0.5449005233697602,
              "p5": 0.22755166778932562,
              "p95": 0.5200106268013636,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.0025903122060478567,
              "median": 0.0026699670499478172,
              "min": 0.0006496281744675677,
              "max": 0.004719429387811907,
              "p5": 0.0006899912802532817,
              "p95": 0.004522962419647438,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 3.544349751277404e-10,
              "median": 2.3307967095030264e-10,
              "min": 3.4009924445772823e-11,
              "max": 1.0603553147924134e-09,
              "p5": 4.2550662202673653e-11,
              "p95": 9.661463387679135e-10,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.006981659826165613,
              "median": 0.006443217411004657,
              "min": 0.001454438180484184,
              "max": 0.016551000058730076,
              "p5": 0.002316928624429072,
              "p95": 0.013786548248099762,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 1.4637160210931397,
              "median": 1.453402809171445,
              "min": 1.0810169491525423,
              "max": 1.8229098090849243,
              "p5": 1.1342539589743015,
              "p95": 1.7865820471984188,
              "count": 6
            }
          },
          "returns": {
            "window_days": 63,
            "n_obs": 63,
            "stock": -0.1444332998996991,
            "market": 0.058957371688082016,
            "sector": -0.08883675933942037,
            "peers": -0.14021548093561298,
            "vs_market": -0.20339067158778112,
            "vs_sector": -0.05559654056027874,
            "vs_peers": -0.0042178189640861286
          }
        }
      },
      "6m": {
        "label": "6M",
        "window_days": 126,
        "liquidity": {
          "metric_aggregation": "median",
          "metric_window_days": 126,
          "score_pca": 95.64879564879564,
          "score_pca_percentile": 95.64879564879564,
          "rank_pca": 113,
          "total": 2574,
          "adv_notional_sgd": 262943942.925,
          "adv_volume_shares": 13858288.0,
          "free_float_shares": 2039531692.0,
          "turnover_ratio": 0.006794838273099019,
          "votes": 6522.5,
          "trades": 6522.5,
          "spread_pct": 0.0007991552324913559,
          "spread_ticks": null,
          "amihud": 5.434436535745722e-11,
          "volatility": 0.3603948769943667
        },
        "pca": {
          "valid": true,
          "window_days": 126,
          "variance_explained": 0.6222616891168559,
          "loadings": {
            "log_adv": 0.4988958277718601,
            "log_trades": 0.453806591249143,
            "log_turnover": 0.4522045244931541,
            "neg_spread": 0.4648569621315795,
            "neg_amihud": 0.3336568871676167,
            "neg_vol": 0.11512899375048713
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
          "peer_median_adv": 63193071.03999999,
          "peer_median_score_pca": 86.26651126651127,
          "peer_median_trades": 1943.25,
          "peer_median_volatility": 0.3605090899841059,
          "peer_median_spread_pct": 0.0024774686157370976,
          "peer_median_spread_ticks": 1.4328347923392015,
          "peer_median_amihud": 2.0861275482479165e-10,
          "peer_median_turnover_ratio": 0.006547975647984235,
          "target_vs_peer": {
            "score_pca_delta": 9.38,
            "adv_delta_pct": 316.1,
            "trades_delta_pct": 235.65,
            "volatility_delta_pct": 0.03,
            "spread_pct_delta_pct": 67.74,
            "spread_ticks_delta_pct": null,
            "amihud_delta_pct": 73.95,
            "turnover_ratio_delta_pct": 3.77
          }
        },
        "peer_liquidity": [
          {
            "ticker": "1928",
            "score_pca": 95.64879564879564,
            "rank_pca": 113,
            "adv": 262943942.925,
            "trades": 6522.5,
            "volatility": 0.3603948769943667,
            "spread_pct": 0.0007991552324913559,
            "spread_ticks": null,
            "amihud": 5.434436535745722e-11,
            "turnover_ratio": 0.006794838273099019,
            "is_target": true
          },
          {
            "ticker": "27",
            "score_pca": 95.41569541569541,
            "rank_pca": 119,
            "adv": 389033146.81000006,
            "trades": 4725.5,
            "volatility": 0.3041388828431332,
            "spread_pct": 0.00074595992335246,
            "spread_ticks": null,
            "amihud": 3.385313829807865e-11,
            "turnover_ratio": 0.006960337953245059,
            "is_target": false
          },
          {
            "ticker": "2282",
            "score_pca": 91.76379176379177,
            "rank_pca": 213,
            "adv": 85404247.47999999,
            "trades": 3872.0,
            "volatility": 0.4237385064523876,
            "spread_pct": 0.0013676925369788125,
            "spread_ticks": null,
            "amihud": 1.5460673500809477e-10,
            "turnover_ratio": 0.007756589215596772,
            "is_target": false
          },
          {
            "ticker": "1128",
            "score_pca": 86.20823620823622,
            "rank_pca": 356,
            "adv": 40981894.6,
            "trades": 2122.5,
            "volatility": 0.2758096832518512,
            "spread_pct": 0.002223156922117692,
            "spread_ticks": 1.368358311560176,
            "amihud": 2.6261877464148854e-10,
            "turnover_ratio": 0.004313279768960869,
            "is_target": false
          },
          {
            "ticker": "200",
            "score_pca": 81.11888111888112,
            "rank_pca": 487,
            "adv": 24878163.29,
            "trades": 1050.0,
            "volatility": 0.5345388739578594,
            "spread_pct": 0.003307078229919321,
            "spread_ticks": 1.467123135468459,
            "amihud": 7.553402817740718e-10,
            "turnover_ratio": 0.00613561334272341,
            "is_target": false
          },
          {
            "ticker": "880",
            "score_pca": 83.13908313908314,
            "rank_pca": 435,
            "adv": 32429707.759999998,
            "trades": 1444.5,
            "volatility": 0.2805141086578372,
            "spread_pct": 0.004513420293122505,
            "spread_ticks": 1.088234867770649,
            "amihud": 3.2285771883933153e-10,
            "turnover_ratio": 0.004789298377300708,
            "is_target": false
          },
          {
            "ticker": "3918",
            "score_pca": 81.04118104118105,
            "rank_pca": 489,
            "adv": 21556250.47,
            "trades": 815.5,
            "volatility": 0.4084100782496625,
            "spread_pct": 0.00407952705270007,
            "spread_ticks": 1.8351360216041819,
            "amihud": 7.634986400985725e-10,
            "turnover_ratio": 0.01018748812637234,
            "is_target": false
          },
          {
            "ticker": "753",
            "score_pca": 93.62859362859362,
            "rank_pca": 165,
            "adv": 157150932.32,
            "trades": 3533.5,
            "volatility": 0.4514332190147968,
            "spread_pct": 0.002731780309356503,
            "spread_ticks": 1.6769381043483556,
            "amihud": 1.1042431042683425e-10,
            "turnover_ratio": 0.014708028614309377,
            "is_target": false
          },
          {
            "ticker": "9987",
            "score_pca": 86.32478632478633,
            "rank_pca": 353,
            "adv": 171249910.0,
            "trades": 1764.0,
            "volatility": 0.3126081017185493,
            "spread_pct": 0.0007246096098790177,
            "spread_ticks": 1.398546449209944,
            "amihud": 6.942252893161753e-11,
            "turnover_ratio": 0.001317115812497911,
            "is_target": false
          }
        ],
        "market_comparison": {
          "sector_name": "Casinos & Gaming",
          "sector_count": 17,
          "market_count": 2574,
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
              "mean": 56586844.79622647,
              "median": 219880.125,
              "min": 0.0,
              "max": 11530530000.0,
              "p5": 0.0,
              "p95": 214466108.9999997,
              "count": 2574
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.04194981587853588,
              "median": 0.026644836960384666,
              "min": 0.000558678699550006,
              "max": 0.49098715795419084,
              "p5": 0.0013906959312210716,
              "p95": 0.1338525179693808,
              "count": 2574
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.003668552458861562,
              "median": 0.0008649390509314946,
              "min": 0.0,
              "max": 0.18328433576591843,
              "p5": 0.0,
              "p95": 0.014553740756509973,
              "count": 2553
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 6.470117342488694e-07,
              "median": 4.630396367913572e-08,
              "min": 0.0,
              "max": 4.7054394880481924e-05,
              "p5": 5.0443531668434034e-11,
              "p95": 3.6564790403449536e-06,
              "count": 2574
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1038.340909090909,
              "median": 21.0,
              "min": 0.0,
              "max": 93269.5,
              "p5": 0.0,
              "p95": 5735.124999999995,
              "count": 2574
            }
          },
          "sector": {
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.5870442074301228,
              "median": 0.474053409328299,
              "min": 0.2758096832518512,
              "max": 1.4985951208408825,
              "p5": 0.27957322357664,
              "p95": 1.3273851891546613,
              "count": 17
            },
            "adv": {
              "direction": "higher_is_better",
              "mean": 50475852.53844118,
              "median": 227748.0,
              "min": 1040.0,
              "max": 389033146.81000006,
              "p5": 4249.6,
              "p95": 288161783.7019999,
              "count": 17
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.03486845213939596,
              "median": 0.027008381574215975,
              "min": 0.00074595992335246,
              "max": 0.10839732580987957,
              "p5": 0.0007885161706635767,
              "p95": 0.09841513259531777,
              "count": 17
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.00305335530478503,
              "median": 0.00108623042001703,
              "min": 3.938170719700699e-05,
              "max": 0.01018748812637234,
              "p5": 6.517371234391002e-05,
              "p95": 0.008242768997751884,
              "count": 17
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 4.910297149668166e-07,
              "median": 5.591406505744432e-08,
              "min": 3.385313829807865e-11,
              "max": 4.447646169403344e-06,
              "p5": 5.0246119945581504e-11,
              "p95": 2.462627986727983e-06,
              "count": 17
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 1214.264705882353,
              "median": 17.5,
              "min": 2.0,
              "max": 6522.5,
              "p5": 2.8,
              "p95": 5084.899999999999,
              "count": 17
            }
          },
          "peers": {
            "adv": {
              "direction": "higher_is_better",
              "mean": 115335531.59125,
              "median": 63193071.03999999,
              "min": 21556250.47,
              "max": 389033146.81000006,
              "p5": 22718919.957,
              "p95": 312809013.9264999,
              "count": 8
            },
            "trades": {
              "direction": "higher_is_better",
              "mean": 2415.9375,
              "median": 1943.25,
              "min": 815.5,
              "max": 4725.5,
              "p5": 897.575,
              "p95": 4426.775,
              "count": 8
            },
            "volatility": {
              "direction": "lower_is_better",
              "mean": 0.3738989317682596,
              "median": 0.3605090899841059,
              "min": 0.2758096832518512,
              "max": 0.5345388739578594,
              "p5": 0.27745623214394627,
              "p95": 0.5054518947277874,
              "count": 8
            },
            "spread_pct": {
              "direction": "lower_is_better",
              "mean": 0.002461653109678298,
              "median": 0.0024774686157370976,
              "min": 0.0007246096098790177,
              "max": 0.004513420293122505,
              "p5": 0.0007320822195947225,
              "p95": 0.004361557658974653,
              "count": 8
            },
            "amihud": {
              "direction": "lower_is_better",
              "mean": 3.0907776600226125e-10,
              "median": 2.0861275482479165e-10,
              "min": 3.385313829807865e-11,
              "max": 7.634986400985725e-10,
              "p5": 4.630242501981726e-11,
              "p95": 7.606432146849972e-10,
              "count": 8
            },
            "turnover_ratio": {
              "direction": "higher_is_better",
              "mean": 0.007020968901375805,
              "median": 0.006547975647984235,
              "min": 0.001317115812497911,
              "max": 0.014708028614309377,
              "p5": 0.002365773197259946,
              "p95": 0.013125839443531412,
              "count": 8
            },
            "spread_ticks": {
              "direction": "neutral",
              "mean": 1.4723894816602943,
              "median": 1.4328347923392015,
              "min": 1.088234867770649,
              "max": 1.8351360216041819,
              "p5": 1.158265728718031,
              "p95": 1.7955865422902253,
              "count": 6
            }
          },
          "returns": {
            "window_days": 126,
            "n_obs": 126,
            "stock": -0.17980769230769256,
            "market": 0.10999472576257396,
            "sector": -0.26304887815603717,
            "peers": -0.2384363085538389,
            "vs_market": -0.2898024180702665,
            "vs_sector": 0.08324118584834461,
            "vs_peers": 0.05862861624614635
          }
        }
      }
    },
    "period_insights": {
      "1d": {
        "liquidity": "Near-term tradability is still reasonable, but it is softer today as average volume is 23.5% below the 1M average and bid depth is lighter than ask depth.",
        "market_comparison": "The stock fell 0.9% compared with peers down 1.8%, which matters because relative resilience in price does not fully offset thinner buy-side access."
      },
      "30d": {
        "liquidity": "Monthly tradability is solid for the company’s size, supported by a 1M liquidity score of 93.5 and average daily volume well ahead of peers.",
        "market_comparison": "The stock returned -1.2% compared with peers at -6.8%, which matters because better relative performance has not come at the expense of accessible trading."
      },
      "3m": {
        "liquidity": "Three-month tradability remains strong, with a 3M liquidity score of 95.9 indicating consistently good access over the quarter.",
        "market_comparison": "The stock returned -14.4% compared with peers at -14.0%, which matters because liquidity has held up even as performance tracked the group closely."
      },
      "6m": {
        "liquidity": "Six-month tradability is strong, with a liquidity score of 95.6 compared with the peer median of 86.3, pointing to better access than most peers.",
        "market_comparison": "The stock returned -18.0% compared with peers at -23.8%, which matters because relative outperformance has been supported by stronger structural liquidity."
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
          "median": 0.5003632590171251,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "50.0%",
          "display_range": null,
          "display_text": "50.0%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "share_pct",
          "value_pct": 50.0,
          "plain_english": "Market explains about 50.0% of price moves in the current state."
        },
        "sector_share": {
          "median": 0.34998770450972655,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "35.0%",
          "display_range": null,
          "display_text": "35.0%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "share_pct",
          "value_pct": 35.0,
          "plain_english": "Sector explains about 35.0% of price moves in the current state."
        },
        "company_share": {
          "median": 0.1496490364731484,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "15.0%",
          "display_range": null,
          "display_text": "15.0%",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "share_pct",
          "value_pct": 15.0,
          "plain_english": "Company-specific explains about 15.0% of price moves in the current state."
        },
        "basis": "current_state"
      },
      "current_sensitivities": {
        "beta_market": {
          "median": 0.42844945744384744,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "0.43",
          "display_range": null,
          "display_text": "0.43",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "beta",
          "strength_label": "Modest",
          "plain_english": "Modest market link: a 1% market move has lined up with about a 0.43% stock move in the same direction in this state.",
          "value_num": 0.43
        },
        "beta_stock_lag": {
          "median": 0.25286235135454443,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "0.25",
          "display_range": null,
          "display_text": "0.25",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "lag_beta",
          "value_num": 0.25
        },
        "beta_sector": {
          "median": 0.5619356474058902,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "0.56",
          "display_range": null,
          "display_text": "0.56",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "beta",
          "strength_label": "Modest",
          "plain_english": "Modest sector link: a 1% sector move has lined up with about a 0.56% stock move in the same direction in this state.",
          "value_num": 0.56
        },
        "beta_market_lag": {
          "median": -0.6816528563200539,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "-0.68",
          "display_range": null,
          "display_text": "-0.68",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "lag_beta",
          "value_num": -0.68
        },
        "beta_sector_lag": {
          "median": 0.43879458914082287,
          "low": null,
          "high": null,
          "range_collapsed": false,
          "display_value": "0.44",
          "display_range": null,
          "display_text": "0.44",
          "is_point_estimate": true,
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "kind": "lag_beta",
          "value_num": 0.44
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
            "median": 0.558150826416637,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "55.8%",
            "display_range": null,
            "display_text": "55.8%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
            "kind": "share_pct",
            "value_pct": 55.8,
            "plain_english": "Sector explains about 55.8% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.41919278881758376,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "41.9%",
              "display_range": null,
              "display_text": "41.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
              "kind": "share_pct",
              "value_pct": 41.9,
              "plain_english": "Market explains about 41.9% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.558150826416637,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "55.8%",
              "display_range": null,
              "display_text": "55.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
              "kind": "share_pct",
              "value_pct": 55.8,
              "plain_english": "Sector explains about 55.8% of price moves in the current state."
            },
            "company_share": {
              "median": 0.02265638476577919,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "2.3%",
              "display_range": null,
              "display_text": "2.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
              "kind": "share_pct",
              "value_pct": 2.3,
              "plain_english": "Company-specific explains about 2.3% of price moves in the current state."
            }
          },
          "summary": "Mar: Mostly sector-driven, though based on only 5 trading days."
        },
        {
          "month_key": "2025-04",
          "month_label": "April 2025",
          "month_short_label": "Apr",
          "period_label": "2025-04-01 to 2025-04-30",
          "n_obs": 19,
          "partial_month": false,
          "dominant_driver": "sector",
          "dominant_driver_label": "Sector",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.5802615288885123,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "58.0%",
            "display_range": null,
            "display_text": "58.0%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
            "kind": "share_pct",
            "value_pct": 58.0,
            "plain_english": "Sector explains about 58.0% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.05911520641326348,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "5.9%",
              "display_range": null,
              "display_text": "5.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
              "kind": "share_pct",
              "value_pct": 5.9,
              "plain_english": "Market explains about 5.9% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.5802615288885123,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "58.0%",
              "display_range": null,
              "display_text": "58.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
              "kind": "share_pct",
              "value_pct": 58.0,
              "plain_english": "Sector explains about 58.0% of price moves in the current state."
            },
            "company_share": {
              "median": 0.36062326469822414,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "36.1%",
              "display_range": null,
              "display_text": "36.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
              "kind": "share_pct",
              "value_pct": 36.1,
              "plain_english": "Company-specific explains about 36.1% of price moves in the current state."
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
            "median": 0.45448517750664635,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "45.4%",
            "display_range": null,
            "display_text": "45.4%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
            "kind": "share_pct",
            "value_pct": 45.4,
            "plain_english": "Company-specific explains about 45.4% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.1112203891986454,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "11.1%",
              "display_range": null,
              "display_text": "11.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 11.1,
              "plain_english": "Market explains about 11.1% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.4342944332947083,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "43.4%",
              "display_range": null,
              "display_text": "43.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 43.4,
              "plain_english": "Sector explains about 43.4% of price moves in the current state."
            },
            "company_share": {
              "median": 0.45448517750664635,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "45.4%",
              "display_range": null,
              "display_text": "45.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 45.4,
              "plain_english": "Company-specific explains about 45.4% of price moves in the current state."
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
          "dominant_driver": "sector",
          "dominant_driver_label": "Sector",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.4709410363393602,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "47.1%",
            "display_range": null,
            "display_text": "47.1%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
            "kind": "share_pct",
            "value_pct": 47.1,
            "plain_english": "Sector explains about 47.1% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.08396629619251364,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "8.4%",
              "display_range": null,
              "display_text": "8.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 8.4,
              "plain_english": "Market explains about 8.4% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.4709410363393602,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "47.1%",
              "display_range": null,
              "display_text": "47.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 47.1,
              "plain_english": "Sector explains about 47.1% of price moves in the current state."
            },
            "company_share": {
              "median": 0.4450926674681262,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "44.5%",
              "display_range": null,
              "display_text": "44.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 44.5,
              "plain_english": "Company-specific explains about 44.5% of price moves in the current state."
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
            "median": 0.48566784308316024,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "48.6%",
            "display_range": null,
            "display_text": "48.6%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
            "kind": "share_pct",
            "value_pct": 48.6,
            "plain_english": "Company-specific explains about 48.6% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.15106730147621164,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "15.1%",
              "display_range": null,
              "display_text": "15.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 15.1,
              "plain_english": "Market explains about 15.1% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.36326485544062803,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "36.3%",
              "display_range": null,
              "display_text": "36.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 36.3,
              "plain_english": "Sector explains about 36.3% of price moves in the current state."
            },
            "company_share": {
              "median": 0.48566784308316024,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "48.6%",
              "display_range": null,
              "display_text": "48.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 48.6,
              "plain_english": "Company-specific explains about 48.6% of price moves in the current state."
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
            "median": 0.4850792491094469,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "48.5%",
            "display_range": null,
            "display_text": "48.5%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
            "kind": "share_pct",
            "value_pct": 48.5,
            "plain_english": "Company-specific explains about 48.5% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.17768789620812492,
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
              "plain_english": "Market explains about 17.8% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.33723285468242825,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "33.7%",
              "display_range": null,
              "display_text": "33.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 33.7,
              "plain_english": "Sector explains about 33.7% of price moves in the current state."
            },
            "company_share": {
              "median": 0.4850792491094469,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "48.5%",
              "display_range": null,
              "display_text": "48.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 48.5,
              "plain_english": "Company-specific explains about 48.5% of price moves in the current state."
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
            "median": 0.5334208542197828,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "53.3%",
            "display_range": null,
            "display_text": "53.3%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
            "kind": "share_pct",
            "value_pct": 53.3,
            "plain_english": "Company-specific explains about 53.3% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.2154859417386471,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "21.5%",
              "display_range": null,
              "display_text": "21.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 21.5,
              "plain_english": "Market explains about 21.5% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.2510932040415701,
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
              "median": 0.5334208542197828,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "53.3%",
              "display_range": null,
              "display_text": "53.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 53.3,
              "plain_english": "Company-specific explains about 53.3% of price moves in the current state."
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
          "dominant_driver": "sector",
          "dominant_driver_label": "Sector",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.41743285017478565,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "41.7%",
            "display_range": null,
            "display_text": "41.7%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
            "kind": "share_pct",
            "value_pct": 41.7,
            "plain_english": "Sector explains about 41.7% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.2684007298482119,
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
              "median": 0.41743285017478565,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "41.7%",
              "display_range": null,
              "display_text": "41.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 41.7,
              "plain_english": "Sector explains about 41.7% of price moves in the current state."
            },
            "company_share": {
              "median": 0.3141664199770024,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "31.4%",
              "display_range": null,
              "display_text": "31.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 31.4,
              "plain_english": "Company-specific explains about 31.4% of price moves in the current state."
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
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.37479966242963164,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "37.5%",
            "display_range": null,
            "display_text": "37.5%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
            "kind": "share_pct",
            "value_pct": 37.5,
            "plain_english": "Company-specific explains about 37.5% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.2624002323100912,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "26.2%",
              "display_range": null,
              "display_text": "26.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 26.2,
              "plain_english": "Market explains about 26.2% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.3628001052602772,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "36.3%",
              "display_range": null,
              "display_text": "36.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 36.3,
              "plain_english": "Sector explains about 36.3% of price moves in the current state."
            },
            "company_share": {
              "median": 0.37479966242963164,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "37.5%",
              "display_range": null,
              "display_text": "37.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 37.5,
              "plain_english": "Company-specific explains about 37.5% of price moves in the current state."
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
            "median": 0.5315515668489208,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "53.2%",
            "display_range": null,
            "display_text": "53.2%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
            "kind": "share_pct",
            "value_pct": 53.2,
            "plain_english": "Sector explains about 53.2% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.1409603189878976,
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
              "plain_english": "Market explains about 14.1% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.5315515668489208,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "53.2%",
              "display_range": null,
              "display_text": "53.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
              "kind": "share_pct",
              "value_pct": 53.2,
              "plain_english": "Sector explains about 53.2% of price moves in the current state."
            },
            "company_share": {
              "median": 0.32748811416318163,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "32.7%",
              "display_range": null,
              "display_text": "32.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
              "kind": "share_pct",
              "value_pct": 32.7,
              "plain_english": "Company-specific explains about 32.7% of price moves in the current state."
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
            "median": 0.421532223170824,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "42.2%",
            "display_range": null,
            "display_text": "42.2%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
            "kind": "share_pct",
            "value_pct": 42.2,
            "plain_english": "Sector explains about 42.2% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.2530800465830239,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "25.3%",
              "display_range": null,
              "display_text": "25.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 25.3,
              "plain_english": "Market explains about 25.3% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.421532223170824,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "42.2%",
              "display_range": null,
              "display_text": "42.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 42.2,
              "plain_english": "Sector explains about 42.2% of price moves in the current state."
            },
            "company_share": {
              "median": 0.3253877302461522,
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
          "summary": "Jan: More mixed, though sector-driven still has the largest share."
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
            "median": 0.37355987741308533,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "37.4%",
            "display_range": null,
            "display_text": "37.4%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
            "kind": "share_pct",
            "value_pct": 37.4,
            "plain_english": "Sector explains about 37.4% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.2666843689693755,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "26.7%",
              "display_range": null,
              "display_text": "26.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
              "kind": "share_pct",
              "value_pct": 26.7,
              "plain_english": "Market explains about 26.7% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.37355987741308533,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "37.4%",
              "display_range": null,
              "display_text": "37.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
              "kind": "share_pct",
              "value_pct": 37.4,
              "plain_english": "Sector explains about 37.4% of price moves in the current state."
            },
            "company_share": {
              "median": 0.3597557536175392,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "36.0%",
              "display_range": null,
              "display_text": "36.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
              "kind": "share_pct",
              "value_pct": 36.0,
              "plain_english": "Company-specific explains about 36.0% of price moves in the current state."
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
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.39199543473835874,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "39.2%",
            "display_range": null,
            "display_text": "39.2%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
            "kind": "share_pct",
            "value_pct": 39.2,
            "plain_english": "Company-specific explains about 39.2% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.21859886983816437,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "21.9%",
              "display_range": null,
              "display_text": "21.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 21.9,
              "plain_english": "Market explains about 21.9% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.3894056954234769,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "38.9%",
              "display_range": null,
              "display_text": "38.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 38.9,
              "plain_english": "Sector explains about 38.9% of price moves in the current state."
            },
            "company_share": {
              "median": 0.39199543473835874,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "39.2%",
              "display_range": null,
              "display_text": "39.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 39.2,
              "plain_english": "Company-specific explains about 39.2% of price moves in the current state."
            }
          },
          "summary": "Mar: More mixed, though company-driven still has the largest share."
        },
        {
          "month_key": "2026-04",
          "month_label": "April 2026",
          "month_short_label": "Apr",
          "period_label": "2026-04-01 to 2026-04-13",
          "n_obs": 6,
          "partial_month": false,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_id": null,
          "regime_label": null,
          "dominant_share": {
            "median": 0.3755407011695937,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "37.6%",
            "display_range": null,
            "display_text": "37.6%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 6 trading days.",
            "kind": "share_pct",
            "value_pct": 37.6,
            "plain_english": "Company-specific explains about 37.6% of price moves in the current state."
          },
          "shares": {
            "market_share": {
              "median": 0.3485396565173743,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "34.9%",
              "display_range": null,
              "display_text": "34.9%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 6 trading days.",
              "kind": "share_pct",
              "value_pct": 34.9,
              "plain_english": "Market explains about 34.9% of price moves in the current state."
            },
            "sector_share": {
              "median": 0.27591964231303207,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "27.6%",
              "display_range": null,
              "display_text": "27.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 6 trading days.",
              "kind": "share_pct",
              "value_pct": 27.6,
              "plain_english": "Sector explains about 27.6% of price moves in the current state."
            },
            "company_share": {
              "median": 0.3755407011695937,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "37.6%",
              "display_range": null,
              "display_text": "37.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 6 trading days.",
              "kind": "share_pct",
              "value_pct": 37.6,
              "plain_english": "Company-specific explains about 37.6% of price moves in the current state."
            }
          },
          "summary": "Apr: Much more balanced across company, sector, and market factors, though based on only 6 trading days."
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
            "median": 0.017081489728116274,
            "low": 0.017081489728116274,
            "high": 0.017081489728116274
          },
          "volatility_label": "Low Volatility",
          "current_probability_display": 0.0
        },
        {
          "id": 1,
          "label": "High Volatility",
          "pct_time": 0.4979919678714859,
          "expected_duration_days": 9.538461538461538,
          "current_probability": 1.0,
          "n_days_effective": 124.0,
          "volatility": {
            "median": 0.028082871609813695,
            "low": 0.028082871609813695,
            "high": 0.028082871609813695
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
            0.0975609756097561,
            0.9024390243902439
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
            12.0,
            111.0
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
        "market_link_display": "0.43",
        "sector_link_display": "0.56",
        "market_link_explainer": "Modest market link. A 1% market move has lined up with about a 0.43% stock move in the same direction in this state. This is a point estimate from 251 trading days.",
        "sector_link_explainer": "Modest sector link. A 1% sector move has lined up with about a 0.56% stock move in the same direction in this state. This is a point estimate from 251 trading days.",
        "stock_persistence_display": "0.25",
        "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
        "history_limited_note": "Read is based on 251 trading days versus the 252-day target."
      },
      "current_summary": {
        "regime_label": "High Volatility",
        "dominant_driver": "market",
        "dominant_driver_label": "Market",
        "driver_share_pct": 50.0,
        "driver_share_display": "50.0%",
        "confidence_label": "High, limited history",
        "confidence_pct": 100.0,
        "display_confidence_pct": null,
        "confidence_note": "Based on 251 trading days relative to the 252-day target.",
        "history_days": 251,
        "history_limited": true,
        "volatility_label": "High Volatility",
        "lead_signal_text": "No stable lead signal.",
        "state_term": "state",
        "stay_probability": 0.9024390243902439,
        "effective_days": 124.0,
        "persistence_note": "This state looks more persistent, with a typical run length of about 9.5 days.",
        "expected_duration_days": 9.5
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
            "median": 0.017081489728116274,
            "low": 0.017081489728116274,
            "high": 0.017081489728116274
          },
          "volatility_label": "Low Volatility"
        },
        {
          "id": 1,
          "label": "High Volatility",
          "pct_time": 0.4979919678714859,
          "expected_duration_days": 9.538461538461538,
          "current_probability": 1.0,
          "n_days_effective": 124.0,
          "volatility": {
            "median": 0.028082871609813695,
            "low": 0.028082871609813695,
            "high": 0.028082871609813695
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
          0.0975609756097561,
          0.9024390243902439
        ]
      ],
      "transition_intervals": {
        "mean": [
          [
            0.896,
            0.104
          ],
          [
            0.0975609756097561,
            0.9024390243902439
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
            12.0,
            111.0
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
        "text": "Liquidity score: 95.6 — Strong",
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
    "liq_subtitle": "Structural liquidity is ahead of peers, but day-to-day access looks less even as volume has dropped and bid depth is lighter.",
    "market_comparison_title": "How You Compare to the Market",
    "market_comparison_subtitle": "Context relative to market, sector, and peer medians.",
    "perf_title": "Stock Performance",
    "perf_subtitle": "The stock has outperformed peers over one month but still trails the market, with returns down 1.2% compared with peers down 6.8% and the market down 0.8%.",
    "perf_insight": "Relative performance is stronger than peers, but the trading backdrop is not especially supportive. One-day average volume is 23.5% below the monthly average, and market factors still explain 50.0% of the tape.",
    "drivers_title": "What Moves Your Stock Price?",
    "drivers_subtitle": "Market moves are the main current driver, with broader conditions accounting for 50.0% of trading.",
    "drivers_strip": [
      {
        "title": "Current Driver (Last 5 Days)",
        "text": "Over the last 5 trading days, moves are mainly market-driven, accounting for about 50.0% of price changes. Other influences are sector 35.0%, and company-specific 15.0%."
      },
      {
        "title": "Driver Mix",
        "text": "Based on the last 5 trading days, current mix is market 50.0%, sector 35.0%, and company-specific 15.0%."
      },
      {
        "title": "Monthly Trend",
        "text": "The driver mix has shifted from sector-driven to company-driven over Feb to Apr."
      }
    ],
    "drivers_pie_title": "Current Driver Mix (Last 5 Days)",
    "drivers_pie_note": "Based on the last 5 trading days, current split is market 50.0%, sector 35.0%, and company-specific 15.0%.",
    "lead_lag_title": "",
    "lead_lag_note": "",
    "rolling_title": "Monthly Driver Shift",
    "rolling_latest_label": "Latest: {period}",
    "rolling_note": "Each bar shows the monthly split between market-, sector-, and company-driven moves.",
    "drivers_bottom_line": "That matters because the tape is being shaped as much by external conditions as by stock-specific demand, while one-day average volume is 23.5% below the monthly average.",
    "drivers_wtd_title": "Key Reads",
    "drivers_wtd_list": [
      "Main driver now: market factors account for 50.0% of current price moves.",
      "Monthly change: the mix has become more balanced from February to April rather than staying led by one factor."
    ],
    "regime_title": "Market State",
    "regime_subtitle": "Current conditions look balanced at the structural level, but the live book is less supportive on the bid side.",
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
    "exec_check_subtitle": "Combines the final continuous-session displayed book before close, trade-size stress tests based on Apr 14, 2025 to Apr 13, 2026 (238 trading days • 1,738,649 trades), large sell-side orders observed today, and intraday spread/depth during the continuous trading session.",
    "order_book_title": "Order Book Depth (Available Liquidity)",
    "order_book_note": "Depth shown is based on top 10 bid and top 10 ask levels.",
    "peer_capacity_title": "Peer Capacity Context",
    "peer_capacity_note": "Immediate buy-side depth is lighter than the monthly baseline, so day-to-day access may feel weaker than the 1M score",
    "impact_summary_title": "Estimated Price Impact (Sell Orders)",
    "impact_summary_subtitle": "Approximate price impact (%) for sell orders.",
    "exec_check_insight": "The clearest near-term watchpoint is lighter buy-side support, with top-10 bid depth at 0.74x ask depth even though the spread remains 1 tick.",
    "trader_composition_title": "Who's Trading Your Stock?",
    "trader_composition_subtitle": "Shows whether trading is mostly retail-like, institution-like, mixed, or unclassified.",
    "trader_retail_threshold": "Retail-like flow",
    "trader_mixed_threshold": "Mixed flow",
    "trader_instit_threshold": "Institution-like flow",
    "peer_trader_title": "Peer Comparison: Trader Mix",
    "peer_trader_subtitle": "How the trader mix compares with peers.",
    "price_moving_title": "Which Trades Move the Price?",
    "price_moving_subtitle": "Price-moving trades are 16.2% of total trades.",
    "intraday_title": "When Does Trading Happen?",
    "intraday_subtitle": "Immediate execution conditions look orderly on spread, but available buy-side depth is thinner than sell-side depth.",
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
    "intraday_insight": "The spread is 1 tick, which keeps displayed pricing",
    "short_title": "Short Selling & Lending",
    "short_subtitle": "Current liquidity signals are better explained by market direction and displayed depth than by short activity.",
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
    "exec_subtitle": "Liquidity is mixed for its size.",
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
        "value": "95.6/100",
        "sub": "Peer median 86.3 (+9.4 pts)",
        "interp": {
          "text": "Strong",
          "cls": "interpretation-good",
          "icon": "◆"
        }
      },
      {
        "title": "Volume vs Peers",
        "value": "HK$262.9M",
        "sub": "Peer median HK$63.2M",
        "interp": {
          "text": "Strong",
          "cls": "interpretation-good",
          "icon": "◆"
        }
      },
      {
        "title": "Spread",
        "value": "0.08%",
        "sub": "N/A ticks; peers 0.25%",
        "interp": {
          "text": "Tighter",
          "cls": "interpretation-good",
          "icon": "◆"
        }
      }
    ],
    "liq_insight": "Liquidity is structurally ahead of peers, with a 6M score of 95.6 compared with the peer median of 86.3. Near-term trading is less supportive, with one-day average volume down 23.5% from the monthly average and top-10 bid depth at 0.74x ask depth despite a 1 tick spread. That leaves the stock looking sound in broader peer terms, but thinner on immediate buy-side access.",
    "perf_badge": "Context",
    "exec_check_tiles": [
      {
        "title": "Mid Price",
        "value": "17.040",
        "note": "final continuous-session displayed book before close",
        "color": "text-white"
      },
      {
        "title": "Spread",
        "value": "0.12%",
        "note": "1.00 ticks",
        "color": "text-slate-300"
      },
      {
        "title": "Depth",
        "value": "0.74x",
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
        "text": "Estimated impact ~-0.11% with 100.0% fill.",
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
        "value": "96",
        "suffix": "/100",
        "bar_pct": 96,
        "color_value": "text-emerald-400",
        "color_bar": "bg-emerald-500",
        "subtext": "Rank 113/2574",
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
        "value": "0.08",
        "suffix": "%",
        "bar_pct": 1,
        "color_value": "text-emerald-400",
        "color_bar": "bg-emerald-500",
        "subtext": "0.08% vs peers 0.25%",
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
        "value": "262.9M",
        "value_prefix": "HK$",
        "suffix": "",
        "bar_pct": 60,
        "color_value": "text-emerald-400",
        "color_bar": "bg-emerald-500",
        "subtext": "Peer median HK$63.2M",
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
        "value": "50.0",
        "suffix": "market",
        "bar_pct": 50,
        "color_value": "text-amber-400",
        "color_bar": "bg-amber-500",
        "subtext": "Sector 35.0% • Company 15.0%",
        "interpretation": {
          "text": "Market",
          "cls": "interpretation-neutral",
          "icon": "◆"
        }
      }
    ],
    "exec_takeaways": [
      "Structural liquidity is better than peers, with a 6M liquidity score of 95.6 compared with a peer median of 86.3. That gives the stock a solid underlying trading base even though the overall picture remains mixed for its size.",
      "Recent flow is lighter than the monthly average, with one-day average volume down 23.5% from 1M. That matters because day-to-day access can feel less reliable than the six-month score implies.",
      "The main near-term constraint is on the bid side, with top-10 bid depth at 0.74x ask depth while market factors account for 50.0% of the tape. That matters because immediate buy-side liquidity looks thinner when broader market moves are still driving trading."
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
      "overall": "6M liquidity is strong: score 95.6 vs peer median 86.3 (+9.4 pts). 1D average volume down -23.5% from 1M. Recent flow does not show a clear deterioration from the monthly baseline.",
      "strengths": [
        "6M score 95.6 vs peer median 86.3 (+9.4 pts)."
      ],
      "concerns": [
        "1D average volume down -23.5% from 1M."
      ],
      "peer_context": "Primary-period score gap vs peers: +9.4 pts."
    },
    "market_comparison": {
      "returns": {
        "insight": "6M return is -18.0%, better than sector and peers, but worse than market, which shows price performance is mixed across comparison groups.",
        "vs_market": "Worse than market: -18.0% vs market 11.0%.",
        "vs_sector": "Better than sector: -18.0% vs sector -26.3%.",
        "vs_peers": "Better than peers: -18.0% vs peers -23.8%."
      },
      "adv": {
        "insight": "ADV is HK$262.9M, better than market, sector, and peers, which supports stronger day-to-day trading size than comparable names.",
        "vs_market": "Better than market: HK$262.9M vs market HK$219.9K.",
        "vs_sector": "Better than sector: HK$262.9M vs sector HK$227.7K.",
        "vs_peers": "Better than peers: HK$262.9M vs peers HK$63.2M."
      },
      "spread": {
        "insight": "Spread is 0.08%, better than market, sector, and peers, which keeps trading costs more competitive than comparable names.",
        "vs_market": "Better than market: 0.08% vs market 2.66%.",
        "vs_sector": "Better than sector: 0.08% vs secto%.",
        "vs_peers": "Better than peers: 0.08% vs peers 0.25%."
      },
      "turnover_ratio": {
        "insight": "Turnover ratio is 0.68%, better than market and sector, which shows a more active free-float turnover profile than comparable names.",
        "vs_market": "Better than market: 0.68% vs market 0.09%.",
        "vs_sector": "Better than sector: 0.68% vs sector 0.11%.",
        "vs_peers": "In line with peers: 0.68% vs peers 0.65%."
      },
      "volatility": {
        "insight": "Volatility is 36.04%, better than market and sector, which suggests day-to-day price swings are more contained than comparable names.",
        "vs_market": "Better than market: 36.04% vs market 59.79%.",
        "vs_sector": "Better than sector: 36.04% vs sector 47.41%.",
        "vs_peers": "In line with peers: 36.04% vs peers 36.05%."
      },
      "trades": {
        "insight": "Trades is 6522, better than market, sector, and peers, which supports more fully reflective of day-to-day access day-to-day activity than comparable names.",
        "vs_market": "Better than market: 6522 vs market 21.",
        "vs_sector": "Better than sector: 6522 vs sector 18.",
        "vs_peers": "Better than peers: 6522 vs peers 1943."
      },
      "amihud": {
        "insight": "Price impact is 5.43e-11, better than market, sector, and peers, which suggests trades move price less than comparable names.",
        "vs_market": "Better than market: 5.43e-11 vs market 4.63e-08.",
        "vs_sector": "Better than sector: 5.43e-11 vs sector 5.59e-08.",
        "vs_peers": "Better than peers: 5.43e-11 vs peers 2.09e-10."
      }
    },
    "performance": {
      "overall": "Recent performance is mixed rather than outright weak, with the stock down 1.2% over one month, better than peers at -6.8% but slightly behind the market at -0.8%. Liquidity only partly supports that move because the six-month liquidity score of 95.6 sits 9.4 points above the peer median, yet one-day average volume is 23.5% below the monthly average and top-10 bid depth is only 0.74x ask depth.",
      "conclusion": "The move looks mainly broad-market rather than company-specific, with market factors driving 50.0% of the tape and liquidity giving a mixed read."
    },
    "drivers": {
      "overall": "The stock is being driven mainly by the market right now, with market factors accounting for 50.0% of current moves. That means broader conditions are setting the tone more than company-specific news, which matters when judging whether current price action is stock-specific or part of a wider move.",
      "beta": "This market-led pattern is mixed rather than fully settled because average volume is 23.5% below the monthly average. That matters because thinner recent flow can make externally driven moves feel sharper even when the broader six-month liquidity standing remains ahead of the peer median at 95.6 compared with 86.3.",
      "rolling_change": "The driver mix has become more balanced over recent months, moving from a more sector-led pattern in February to a more even split across company, sector, and market factors by April. That matters because the stock is no longer moving under one clear influence, so the current market-led read looks more like a near-term condition than a deeply entrenched pattern."
    },
    "regime": {
      "overall": "Short expected duration points to a short-lived state rather than a durable market backdrop.",
      "current": "High volatility is active now, with broader market moves still explaining 50.0% of the tape. That leaves the stock more exposed to wider market swings than to company-specific trading.",
      "transitions": "The state looks relatively stable for now because its typical run length is about 9.5 days. Even so, the picture is mixed because 1D average volume is 23.5% below the 1M average.",
      "trading_implications": "Trading conditions look steady in direction but less robust in depth, because high volatility is persisting while recent volume has pulled back from the monthly average. That can make day-to-day liquidity feel less dependable even if the broader state is not changing quickly."
    },
    "execution": {
      "overall": "Displayed liquidity is mixed rather than fully supportive of the broader profile because the spread is only 1 tick but the book is bid-light, with top-10 bid depth at 0.74x ask depth. That matters because access looks orderly on the surface while buy-side support is thinner than the offer side.",
      "concern": "Trade-size percentiles use Apr 14, 2025 to Apr 13, 2026 history (238 trading days • 1,738,649 trades).",
      "peer_context": "The broader standing still looks solid, with a 6M liquidity score of 95.6 compared with a peer median of 86.3, but the displayed book does not fully match that strength today. That matters because peer-relative liquidity appears better over time than the immediate depth currently on show."
    },
    "trader_composition": {
      "overall": "By trade count and value, flow looks mainly institution-like.",
      "retail_heavy": "Institution-like trades account for 56.3% of trade count and 68.7% of trade value, while retail-like trades are only 4.0% of count and 1.6% of value. That gap shows the observed flow is being set by larger participants rather than broad retail activity.",
      "institutional_gap": "The read is still mixed at the margin because unclear flow represents 33.2% of trade count. That leaves a meaningful share of activity outside a clean classification, even though the overall balance still points institutional.",
      "peer_comparison": "The mix stands out as institution-leaning, and the peer comparison in the report tables provides the cross-check on how far that differs from the group."
    },
    "price_moving": {
      "overall": "Price-moving activity looks present but not dominant, with 16.2% of total trades moving price. Ambiguous or unclear flow is 33.2% of trade count, so the read is not fully clean. The clearer read is that institution-like flow leads both count and value, which matters more for price formation than the small retail share of 4.0% of count and 1.6% of value.",
      "interpretation": "",
      "asymmetry": ""
    },
    "short_selling": {
      "overall": "Short activity does not appear to be a defining factor in current trading. The clearer signals are a 23.5% drop in 1D average volume from the 1M average and lighter displayed bid depth at 0.74x of ask depth, which matter more for near-term access.",
      "level": "N/A",
      "correlation": "N/A",
      "trend": "There is no clear sign that short activity is rising or falling enough to change the picture. Recent trading still looks more shaped by market moves, which account for 50.0% of the current driver mix, than by a separate short-driven pressure point.",
      "peaks": "N/A"
    },
    "intraday": {
      "overall": "Session split is open 0.7%, continuous 77.2%, and close 10.3%. Current trading concentration score is 0.113.",
      "hhi_interpretation": "A concentration score of 0.113 indicates activity is relatively well distributed through the day. That matters because trading does not rely on a narrow set of time windows to find liquidity.",
      "best_times": "The continuous session is the clearest source of usable liquidity because it holds the large majority of activity. That makes intraday access look steadier away from the opening and closing auctions.",
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
        "1928",
        "27",
        "2282",
        "1128",
        "200",
        "880",
        "3918",
        "753",
        "9987"
      ],
      "scores": [
        95.64879564879564,
        95.41569541569541,
        91.76379176379177,
        86.20823620823622,
        81.11888111888112,
        83.13908313908314,
        81.04118104118105,
        93.62859362859362,
        86.32478632478633
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
        262943942.925,
        389033146.81000006,
        85404247.47999999,
        40981894.6,
        24878163.29,
        32429707.759999998,
        21556250.47,
        157150932.32,
        171249910.0
      ],
      "total": 2574
    },
    "market_comparison": {
      "sector_name": "Casinos & Gaming",
      "sector_count": 17,
      "market_count": 2574,
      "company": {
        "volatility": 0.3603948769943667,
        "adv": 262943942.925,
        "spread_pct": 0.0007991552324913559,
        "turnover_ratio": 0.006794838273099019,
        "amihud": 5.434436535745722e-11,
        "trades": 6522.5
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
          "mean": 56586844.79622647,
          "median": 219880.125,
          "min": 0.0,
          "max": 11530530000.0,
          "p5": 0.0,
          "p95": 214466108.9999997,
          "count": 2574
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.04194981587853588,
          "median": 0.026644836960384666,
          "min": 0.000558678699550006,
          "max": 0.49098715795419084,
          "p5": 0.0013906959312210716,
          "p95": 0.1338525179693808,
          "count": 2574
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.003668552458861562,
          "median": 0.0008649390509314946,
          "min": 0.0,
          "max": 0.18328433576591843,
          "p5": 0.0,
          "p95": 0.014553740756509973,
          "count": 2553
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 6.470117342488694e-07,
          "median": 4.630396367913572e-08,
          "min": 0.0,
          "max": 4.7054394880481924e-05,
          "p5": 5.0443531668434034e-11,
          "p95": 3.6564790403449536e-06,
          "count": 2574
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 1038.340909090909,
          "median": 21.0,
          "min": 0.0,
          "max": 93269.5,
          "p5": 0.0,
          "p95": 5735.124999999995,
          "count": 2574
        }
      },
      "sector": {
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.5870442074301228,
          "median": 0.474053409328299,
          "min": 0.2758096832518512,
          "max": 1.4985951208408825,
          "p5": 0.27957322357664,
          "p95": 1.3273851891546613,
          "count": 17
        },
        "adv": {
          "direction": "higher_is_better",
          "mean": 50475852.53844118,
          "median": 227748.0,
          "min": 1040.0,
          "max": 389033146.81000006,
          "p5": 4249.6,
          "p95": 288161783.7019999,
          "count": 17
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.03486845213939596,
          "median": 0.027008381574215975,
          "min": 0.00074595992335246,
          "max": 0.10839732580987957,
          "p5": 0.0007885161706635767,
          "p95": 0.09841513259531777,
          "count": 17
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.00305335530478503,
          "median": 0.00108623042001703,
          "min": 3.938170719700699e-05,
          "max": 0.01018748812637234,
          "p5": 6.517371234391002e-05,
          "p95": 0.008242768997751884,
          "count": 17
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 4.910297149668166e-07,
          "median": 5.591406505744432e-08,
          "min": 3.385313829807865e-11,
          "max": 4.447646169403344e-06,
          "p5": 5.0246119945581504e-11,
          "p95": 2.462627986727983e-06,
          "count": 17
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 1214.264705882353,
          "median": 17.5,
          "min": 2.0,
          "max": 6522.5,
          "p5": 2.8,
          "p95": 5084.899999999999,
          "count": 17
        }
      },
      "peers": {
        "adv": {
          "direction": "higher_is_better",
          "mean": 115335531.59125,
          "median": 63193071.03999999,
          "min": 21556250.47,
          "max": 389033146.81000006,
          "p5": 22718919.957,
          "p95": 312809013.9264999,
          "count": 8
        },
        "trades": {
          "direction": "higher_is_better",
          "mean": 2415.9375,
          "median": 1943.25,
          "min": 815.5,
          "max": 4725.5,
          "p5": 897.575,
          "p95": 4426.775,
          "count": 8
        },
        "volatility": {
          "direction": "lower_is_better",
          "mean": 0.3738989317682596,
          "median": 0.3605090899841059,
          "min": 0.2758096832518512,
          "max": 0.5345388739578594,
          "p5": 0.27745623214394627,
          "p95": 0.5054518947277874,
          "count": 8
        },
        "spread_pct": {
          "direction": "lower_is_better",
          "mean": 0.002461653109678298,
          "median": 0.0024774686157370976,
          "min": 0.0007246096098790177,
          "max": 0.004513420293122505,
          "p5": 0.0007320822195947225,
          "p95": 0.004361557658974653,
          "count": 8
        },
        "amihud": {
          "direction": "lower_is_better",
          "mean": 3.0907776600226125e-10,
          "median": 2.0861275482479165e-10,
          "min": 3.385313829807865e-11,
          "max": 7.634986400985725e-10,
          "p5": 4.630242501981726e-11,
          "p95": 7.606432146849972e-10,
          "count": 8
        },
        "turnover_ratio": {
          "direction": "higher_is_better",
          "mean": 0.007020968901375805,
          "median": 0.006547975647984235,
          "min": 0.001317115812497911,
          "max": 0.014708028614309377,
          "p5": 0.002365773197259946,
          "p95": 0.013125839443531412,
          "count": 8
        },
        "spread_ticks": {
          "direction": "neutral",
          "mean": 1.4723894816602943,
          "median": 1.4328347923392015,
          "min": 1.088234867770649,
          "max": 1.8351360216041819,
          "p5": 1.158265728718031,
          "p95": 1.7955865422902253,
          "count": 6
        }
      }
    },
    "returns": [
      {
        "horizon": "1M",
        "stock": -0.012159814707585093,
        "market": -0.007811259659372016,
        "sector": -0.022798696748552727,
        "peers": -0.06806818666435188
      },
      {
        "horizon": "3M",
        "stock": -0.1444332998996991,
        "market": 0.058957371688082016,
        "sector": -0.08883675933942037,
        "peers": -0.14021548093561298
      },
      {
        "horizon": "6M",
        "stock": -0.17980769230769256,
        "market": 0.10999472576257396,
        "sector": -0.26304887815603717,
        "peers": -0.2384363085538389
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
      "share_market": 0.5003632590171251,
      "share_sector": 0.34998770450972655,
      "share_idio": 0.1496490364731484,
      "beta_market": 0.42844945744384744,
      "beta_sector": 0.5619356474058902,
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
            "median": 0.5003632590171251,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "50.0%",
            "display_range": null,
            "display_text": "50.0%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "share_pct",
            "value_pct": 50.0,
            "plain_english": "Market explains about 50.0% of price moves in the current state."
          },
          "sector_share": {
            "median": 0.34998770450972655,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "35.0%",
            "display_range": null,
            "display_text": "35.0%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "share_pct",
            "value_pct": 35.0,
            "plain_english": "Sector explains about 35.0% of price moves in the current state."
          },
          "company_share": {
            "median": 0.1496490364731484,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "15.0%",
            "display_range": null,
            "display_text": "15.0%",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "share_pct",
            "value_pct": 15.0,
            "plain_english": "Company-specific explains about 15.0% of price moves in the current state."
          },
          "basis": "current_state"
        },
        "current_sensitivities": {
          "beta_market": {
            "median": 0.42844945744384744,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "0.43",
            "display_range": null,
            "display_text": "0.43",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "beta",
            "strength_label": "Modest",
            "plain_english": "Modest market link: a 1% market move has lined up with about a 0.43% stock move in the same direction in this state.",
            "value_num": 0.43
          },
          "beta_stock_lag": {
            "median": 0.25286235135454443,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "0.25",
            "display_range": null,
            "display_text": "0.25",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "lag_beta",
            "value_num": 0.25
          },
          "beta_sector": {
            "median": 0.5619356474058902,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "0.56",
            "display_range": null,
            "display_text": "0.56",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "beta",
            "strength_label": "Modest",
            "plain_english": "Modest sector link: a 1% sector move has lined up with about a 0.56% stock move in the same direction in this state.",
            "value_num": 0.56
          },
          "beta_market_lag": {
            "median": -0.6816528563200539,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "-0.68",
            "display_range": null,
            "display_text": "-0.68",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "lag_beta",
            "value_num": -0.68
          },
          "beta_sector_lag": {
            "median": 0.43879458914082287,
            "low": null,
            "high": null,
            "range_collapsed": false,
            "display_value": "0.44",
            "display_range": null,
            "display_text": "0.44",
            "is_point_estimate": true,
            "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
            "kind": "lag_beta",
            "value_num": 0.44
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
              "median": 0.558150826416637,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "55.8%",
              "display_range": null,
              "display_text": "55.8%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
              "kind": "share_pct",
              "value_pct": 55.8,
              "plain_english": "Sector explains about 55.8% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.41919278881758376,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "41.9%",
                "display_range": null,
                "display_text": "41.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
                "kind": "share_pct",
                "value_pct": 41.9,
                "plain_english": "Market explains about 41.9% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.558150826416637,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "55.8%",
                "display_range": null,
                "display_text": "55.8%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
                "kind": "share_pct",
                "value_pct": 55.8,
                "plain_english": "Sector explains about 55.8% of price moves in the current state."
              },
              "company_share": {
                "median": 0.02265638476577919,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "2.3%",
                "display_range": null,
                "display_text": "2.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 5 trading days.",
                "kind": "share_pct",
                "value_pct": 2.3,
                "plain_english": "Company-specific explains about 2.3% of price moves in the current state."
              }
            },
            "summary": "Mar: Mostly sector-driven, though based on only 5 trading days."
          },
          {
            "month_key": "2025-04",
            "month_label": "April 2025",
            "month_short_label": "Apr",
            "period_label": "2025-04-01 to 2025-04-30",
            "n_obs": 19,
            "partial_month": false,
            "dominant_driver": "sector",
            "dominant_driver_label": "Sector",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.5802615288885123,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "58.0%",
              "display_range": null,
              "display_text": "58.0%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
              "kind": "share_pct",
              "value_pct": 58.0,
              "plain_english": "Sector explains about 58.0% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.05911520641326348,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "5.9%",
                "display_range": null,
                "display_text": "5.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
                "kind": "share_pct",
                "value_pct": 5.9,
                "plain_english": "Market explains about 5.9% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.5802615288885123,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "58.0%",
                "display_range": null,
                "display_text": "58.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
                "kind": "share_pct",
                "value_pct": 58.0,
                "plain_english": "Sector explains about 58.0% of price moves in the current state."
              },
              "company_share": {
                "median": 0.36062326469822414,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "36.1%",
                "display_range": null,
                "display_text": "36.1%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 19 trading days.",
                "kind": "share_pct",
                "value_pct": 36.1,
                "plain_english": "Company-specific explains about 36.1% of price moves in the current state."
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
              "median": 0.45448517750664635,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "45.4%",
              "display_range": null,
              "display_text": "45.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 45.4,
              "plain_english": "Company-specific explains about 45.4% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.1112203891986454,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "11.1%",
                "display_range": null,
                "display_text": "11.1%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 11.1,
                "plain_english": "Market explains about 11.1% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.4342944332947083,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "43.4%",
                "display_range": null,
                "display_text": "43.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 43.4,
                "plain_english": "Sector explains about 43.4% of price moves in the current state."
              },
              "company_share": {
                "median": 0.45448517750664635,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "45.4%",
                "display_range": null,
                "display_text": "45.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 45.4,
                "plain_english": "Company-specific explains about 45.4% of price moves in the current state."
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
            "dominant_driver": "sector",
            "dominant_driver_label": "Sector",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.4709410363393602,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "47.1%",
              "display_range": null,
              "display_text": "47.1%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 47.1,
              "plain_english": "Sector explains about 47.1% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.08396629619251364,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "8.4%",
                "display_range": null,
                "display_text": "8.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 8.4,
                "plain_english": "Market explains about 8.4% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.4709410363393602,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "47.1%",
                "display_range": null,
                "display_text": "47.1%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 47.1,
                "plain_english": "Sector explains about 47.1% of price moves in the current state."
              },
              "company_share": {
                "median": 0.4450926674681262,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "44.5%",
                "display_range": null,
                "display_text": "44.5%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 44.5,
                "plain_english": "Company-specific explains about 44.5% of price moves in the current state."
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
              "median": 0.48566784308316024,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "48.6%",
              "display_range": null,
              "display_text": "48.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 48.6,
              "plain_english": "Company-specific explains about 48.6% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.15106730147621164,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "15.1%",
                "display_range": null,
                "display_text": "15.1%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 15.1,
                "plain_english": "Market explains about 15.1% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.36326485544062803,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "36.3%",
                "display_range": null,
                "display_text": "36.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 36.3,
                "plain_english": "Sector explains about 36.3% of price moves in the current state."
              },
              "company_share": {
                "median": 0.48566784308316024,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "48.6%",
                "display_range": null,
                "display_text": "48.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 48.6,
                "plain_english": "Company-specific explains about 48.6% of price moves in the current state."
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
              "median": 0.4850792491094469,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "48.5%",
              "display_range": null,
              "display_text": "48.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 48.5,
              "plain_english": "Company-specific explains about 48.5% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.17768789620812492,
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
                "plain_english": "Market explains about 17.8% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.33723285468242825,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "33.7%",
                "display_range": null,
                "display_text": "33.7%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 33.7,
                "plain_english": "Sector explains about 33.7% of price moves in the current state."
              },
              "company_share": {
                "median": 0.4850792491094469,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "48.5%",
                "display_range": null,
                "display_text": "48.5%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 48.5,
                "plain_english": "Company-specific explains about 48.5% of price moves in the current state."
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
              "median": 0.5334208542197828,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "53.3%",
              "display_range": null,
              "display_text": "53.3%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 53.3,
              "plain_english": "Company-specific explains about 53.3% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.2154859417386471,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "21.5%",
                "display_range": null,
                "display_text": "21.5%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 21.5,
                "plain_english": "Market explains about 21.5% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.2510932040415701,
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
                "median": 0.5334208542197828,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "53.3%",
                "display_range": null,
                "display_text": "53.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 53.3,
                "plain_english": "Company-specific explains about 53.3% of price moves in the current state."
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
            "dominant_driver": "sector",
            "dominant_driver_label": "Sector",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.41743285017478565,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "41.7%",
              "display_range": null,
              "display_text": "41.7%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 41.7,
              "plain_english": "Sector explains about 41.7% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.2684007298482119,
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
                "median": 0.41743285017478565,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "41.7%",
                "display_range": null,
                "display_text": "41.7%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 41.7,
                "plain_english": "Sector explains about 41.7% of price moves in the current state."
              },
              "company_share": {
                "median": 0.3141664199770024,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "31.4%",
                "display_range": null,
                "display_text": "31.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 31.4,
                "plain_english": "Company-specific explains about 31.4% of price moves in the current state."
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
            "dominant_driver": "company",
            "dominant_driver_label": "Company-specific",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.37479966242963164,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "37.5%",
              "display_range": null,
              "display_text": "37.5%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
              "kind": "share_pct",
              "value_pct": 37.5,
              "plain_english": "Company-specific explains about 37.5% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.2624002323100912,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "26.2%",
                "display_range": null,
                "display_text": "26.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 26.2,
                "plain_english": "Market explains about 26.2% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.3628001052602772,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "36.3%",
                "display_range": null,
                "display_text": "36.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 36.3,
                "plain_english": "Sector explains about 36.3% of price moves in the current state."
              },
              "company_share": {
                "median": 0.37479966242963164,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "37.5%",
                "display_range": null,
                "display_text": "37.5%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 20 trading days.",
                "kind": "share_pct",
                "value_pct": 37.5,
                "plain_english": "Company-specific explains about 37.5% of price moves in the current state."
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
              "median": 0.5315515668489208,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "53.2%",
              "display_range": null,
              "display_text": "53.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
              "kind": "share_pct",
              "value_pct": 53.2,
              "plain_english": "Sector explains about 53.2% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.1409603189878976,
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
                "plain_english": "Market explains about 14.1% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.5315515668489208,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "53.2%",
                "display_range": null,
                "display_text": "53.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
                "kind": "share_pct",
                "value_pct": 53.2,
                "plain_english": "Sector explains about 53.2% of price moves in the current state."
              },
              "company_share": {
                "median": 0.32748811416318163,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "32.7%",
                "display_range": null,
                "display_text": "32.7%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 15 trading days.",
                "kind": "share_pct",
                "value_pct": 32.7,
                "plain_english": "Company-specific explains about 32.7% of price moves in the current state."
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
              "median": 0.421532223170824,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "42.2%",
              "display_range": null,
              "display_text": "42.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
              "kind": "share_pct",
              "value_pct": 42.2,
              "plain_english": "Sector explains about 42.2% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.2530800465830239,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "25.3%",
                "display_range": null,
                "display_text": "25.3%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 25.3,
                "plain_english": "Market explains about 25.3% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.421532223170824,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "42.2%",
                "display_range": null,
                "display_text": "42.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 21 trading days.",
                "kind": "share_pct",
                "value_pct": 42.2,
                "plain_english": "Sector explains about 42.2% of price moves in the current state."
              },
              "company_share": {
                "median": 0.3253877302461522,
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
            "summary": "Jan: More mixed, though sector-driven still has the largest share."
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
              "median": 0.37355987741308533,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "37.4%",
              "display_range": null,
              "display_text": "37.4%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
              "kind": "share_pct",
              "value_pct": 37.4,
              "plain_english": "Sector explains about 37.4% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.2666843689693755,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "26.7%",
                "display_range": null,
                "display_text": "26.7%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
                "kind": "share_pct",
                "value_pct": 26.7,
                "plain_english": "Market explains about 26.7% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.37355987741308533,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "37.4%",
                "display_range": null,
                "display_text": "37.4%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
                "kind": "share_pct",
                "value_pct": 37.4,
                "plain_english": "Sector explains about 37.4% of price moves in the current state."
              },
              "company_share": {
                "median": 0.3597557536175392,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "36.0%",
                "display_range": null,
                "display_text": "36.0%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 17 trading days.",
                "kind": "share_pct",
                "value_pct": 36.0,
                "plain_english": "Company-specific explains about 36.0% of price moves in the current state."
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
            "dominant_driver": "company",
            "dominant_driver_label": "Company-specific",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.39199543473835874,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "39.2%",
              "display_range": null,
              "display_text": "39.2%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
              "kind": "share_pct",
              "value_pct": 39.2,
              "plain_english": "Company-specific explains about 39.2% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.21859886983816437,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "21.9%",
                "display_range": null,
                "display_text": "21.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 21.9,
                "plain_english": "Market explains about 21.9% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.3894056954234769,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "38.9%",
                "display_range": null,
                "display_text": "38.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 38.9,
                "plain_english": "Sector explains about 38.9% of price moves in the current state."
              },
              "company_share": {
                "median": 0.39199543473835874,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "39.2%",
                "display_range": null,
                "display_text": "39.2%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 22 trading days.",
                "kind": "share_pct",
                "value_pct": 39.2,
                "plain_english": "Company-specific explains about 39.2% of price moves in the current state."
              }
            },
            "summary": "Mar: More mixed, though company-driven still has the largest share."
          },
          {
            "month_key": "2026-04",
            "month_label": "April 2026",
            "month_short_label": "Apr",
            "period_label": "2026-04-01 to 2026-04-13",
            "n_obs": 6,
            "partial_month": false,
            "dominant_driver": "company",
            "dominant_driver_label": "Company-specific",
            "regime_id": null,
            "regime_label": null,
            "dominant_share": {
              "median": 0.3755407011695937,
              "low": null,
              "high": null,
              "range_collapsed": false,
              "display_value": "37.6%",
              "display_range": null,
              "display_text": "37.6%",
              "is_point_estimate": true,
              "point_estimate_note": "Point estimate only because the current state has 6 trading days.",
              "kind": "share_pct",
              "value_pct": 37.6,
              "plain_english": "Company-specific explains about 37.6% of price moves in the current state."
            },
            "shares": {
              "market_share": {
                "median": 0.3485396565173743,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "34.9%",
                "display_range": null,
                "display_text": "34.9%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 6 trading days.",
                "kind": "share_pct",
                "value_pct": 34.9,
                "plain_english": "Market explains about 34.9% of price moves in the current state."
              },
              "sector_share": {
                "median": 0.27591964231303207,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "27.6%",
                "display_range": null,
                "display_text": "27.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 6 trading days.",
                "kind": "share_pct",
                "value_pct": 27.6,
                "plain_english": "Sector explains about 27.6% of price moves in the current state."
              },
              "company_share": {
                "median": 0.3755407011695937,
                "low": null,
                "high": null,
                "range_collapsed": false,
                "display_value": "37.6%",
                "display_range": null,
                "display_text": "37.6%",
                "is_point_estimate": true,
                "point_estimate_note": "Point estimate only because the current state has 6 trading days.",
                "kind": "share_pct",
                "value_pct": 37.6,
                "plain_english": "Company-specific explains about 37.6% of price moves in the current state."
              }
            },
            "summary": "Apr: Much more balanced across company, sector, and market factors, though based on only 6 trading days."
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
              "median": 0.017081489728116274,
              "low": 0.017081489728116274,
              "high": 0.017081489728116274
            },
            "volatility_label": "Low Volatility",
            "current_probability_display": 0.0
          },
          {
            "id": 1,
            "label": "High Volatility",
            "pct_time": 0.4979919678714859,
            "expected_duration_days": 9.538461538461538,
            "current_probability": 1.0,
            "n_days_effective": 124.0,
            "volatility": {
              "median": 0.028082871609813695,
              "low": 0.028082871609813695,
              "high": 0.028082871609813695
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
              0.0975609756097561,
              0.9024390243902439
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
              12.0,
              111.0
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
          "market_link_display": "0.43",
          "sector_link_display": "0.56",
          "market_link_explainer": "Modest market link. A 1% market move has lined up with about a 0.43% stock move in the same direction in this state. This is a point estimate from 251 trading days.",
          "sector_link_explainer": "Modest sector link. A 1% sector move has lined up with about a 0.56% stock move in the same direction in this state. This is a point estimate from 251 trading days.",
          "stock_persistence_display": "0.25",
          "point_estimate_note": "Point estimate only because the current state has 251 trading days.",
          "history_limited_note": "Read is based on 251 trading days versus the 252-day target."
        },
        "current_summary": {
          "regime_label": "High Volatility",
          "dominant_driver": "market",
          "dominant_driver_label": "Market",
          "driver_share_pct": 50.0,
          "driver_share_display": "50.0%",
          "confidence_label": "High, limited history",
          "confidence_pct": 100.0,
          "display_confidence_pct": null,
          "confidence_note": "Based on 251 trading days relative to the 252-day target.",
          "history_days": 251,
          "history_limited": true,
          "volatility_label": "High Volatility",
          "lead_signal_text": "No stable lead signal.",
          "state_term": "state",
          "stay_probability": 0.9024390243902439,
          "effective_days": 124.0,
          "persistence_note": "This state looks more persistent, with a typical run length of about 9.5 days.",
          "expected_duration_days": 9.5
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
          "summary": "Mar: Mostly sector-driven, though based on only 5 trading days.",
          "share_market": 0.41919278881758376,
          "share_sector": 0.558150826416637,
          "share_company": 0.02265638476577919,
          "share_market_display": "41.9%",
          "share_sector_display": "55.8%",
          "share_company_display": "2.3%",
          "dominant_share_display": "55.8%"
        },
        {
          "month_key": "2025-04",
          "month_label": "April 2025",
          "month_short_label": "Apr",
          "period_label": "2025-04-01 to 2025-04-30",
          "n_obs": 19,
          "partial_month": false,
          "dominant_driver": "sector",
          "dominant_driver_label": "Sector",
          "regime_label": null,
          "summary": "Apr: Mostly sector-driven.",
          "share_market": 0.05911520641326348,
          "share_sector": 0.5802615288885123,
          "share_company": 0.36062326469822414,
          "share_market_display": "5.9%",
          "share_sector_display": "58.0%",
          "share_company_display": "36.1%",
          "dominant_share_display": "58.0%"
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
          "share_market": 0.1112203891986454,
          "share_sector": 0.4342944332947083,
          "share_company": 0.45448517750664635,
          "share_market_display": "11.1%",
          "share_sector_display": "43.4%",
          "share_company_display": "45.4%",
          "dominant_share_display": "45.4%"
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
          "share_market": 0.08396629619251364,
          "share_sector": 0.4709410363393602,
          "share_company": 0.4450926674681262,
          "share_market_display": "8.4%",
          "share_sector_display": "47.1%",
          "share_company_display": "44.5%",
          "dominant_share_display": "47.1%"
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
          "share_market": 0.15106730147621164,
          "share_sector": 0.36326485544062803,
          "share_company": 0.48566784308316024,
          "share_market_display": "15.1%",
          "share_sector_display": "36.3%",
          "share_company_display": "48.6%",
          "dominant_share_display": "48.6%"
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
          "share_market": 0.17768789620812492,
          "share_sector": 0.33723285468242825,
          "share_company": 0.4850792491094469,
          "share_market_display": "17.8%",
          "share_sector_display": "33.7%",
          "share_company_display": "48.5%",
          "dominant_share_display": "48.5%"
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
          "share_market": 0.2154859417386471,
          "share_sector": 0.2510932040415701,
          "share_company": 0.5334208542197828,
          "share_market_display": "21.5%",
          "share_sector_display": "25.1%",
          "share_company_display": "53.3%",
          "dominant_share_display": "53.3%"
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
          "regime_label": null,
          "summary": "Oct: More mixed, though sector-driven still has the largest share.",
          "share_market": 0.2684007298482119,
          "share_sector": 0.41743285017478565,
          "share_company": 0.3141664199770024,
          "share_market_display": "26.8%",
          "share_sector_display": "41.7%",
          "share_company_display": "31.4%",
          "dominant_share_display": "41.7%"
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
          "share_market": 0.2624002323100912,
          "share_sector": 0.3628001052602772,
          "share_company": 0.37479966242963164,
          "share_market_display": "26.2%",
          "share_sector_display": "36.3%",
          "share_company_display": "37.5%",
          "dominant_share_display": "37.5%"
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
          "share_market": 0.1409603189878976,
          "share_sector": 0.5315515668489208,
          "share_company": 0.32748811416318163,
          "share_market_display": "14.1%",
          "share_sector_display": "53.2%",
          "share_company_display": "32.7%",
          "dominant_share_display": "53.2%"
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
          "summary": "Jan: More mixed, though sector-driven still has the largest share.",
          "share_market": 0.2530800465830239,
          "share_sector": 0.421532223170824,
          "share_company": 0.3253877302461522,
          "share_market_display": "25.3%",
          "share_sector_display": "42.2%",
          "share_company_display": "32.5%",
          "dominant_share_display": "42.2%"
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
          "share_market": 0.2666843689693755,
          "share_sector": 0.37355987741308533,
          "share_company": 0.3597557536175392,
          "share_market_display": "26.7%",
          "share_sector_display": "37.4%",
          "share_company_display": "36.0%",
          "dominant_share_display": "37.4%"
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
          "share_market": 0.21859886983816437,
          "share_sector": 0.3894056954234769,
          "share_company": 0.39199543473835874,
          "share_market_display": "21.9%",
          "share_sector_display": "38.9%",
          "share_company_display": "39.2%",
          "dominant_share_display": "39.2%"
        },
        {
          "month_key": "2026-04",
          "month_label": "April 2026",
          "month_short_label": "Apr",
          "period_label": "2026-04-01 to 2026-04-13",
          "n_obs": 6,
          "partial_month": false,
          "dominant_driver": "company",
          "dominant_driver_label": "Company-specific",
          "regime_label": null,
          "summary": "Apr: Much more balanced across company, sector, and market factors, though based on only 6 trading days.",
          "share_market": 0.3485396565173743,
          "share_sector": 0.27591964231303207,
          "share_company": 0.3755407011695937,
          "share_market_display": "34.9%",
          "share_sector_display": "27.6%",
          "share_company_display": "37.6%",
          "dominant_share_display": "37.6%"
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
              "median": 0.017081489728116274,
              "low": 0.017081489728116274,
              "high": 0.017081489728116274
            },
            "volatility_label": "Low Volatility"
          },
          {
            "id": 1,
            "label": "High Volatility",
            "pct_time": 0.4979919678714859,
            "expected_duration_days": 9.538461538461538,
            "current_probability": 1.0,
            "n_days_effective": 124.0,
            "volatility": {
              "median": 0.028082871609813695,
              "low": 0.028082871609813695,
              "high": 0.028082871609813695
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
            0.0975609756097561,
            0.9024390243902439
          ]
        ]
      }
    },
    "order_book": {
      "bids": [
        {
          "level": 1,
          "price": 17.03,
          "quantity": 23200.0,
          "value": 395096.0
        },
        {
          "level": 2,
          "price": 17.02,
          "quantity": 19600.0,
          "value": 333592.0
        },
        {
          "level": 3,
          "price": 17.01,
          "quantity": 24400.0,
          "value": 415044.00000000006
        },
        {
          "level": 4,
          "price": 17.0,
          "quantity": 76400.0,
          "value": 1298800.0
        },
        {
          "level": 5,
          "price": 16.99,
          "quantity": 37200.0,
          "value": 632028.0
        },
        {
          "level": 6,
          "price": 16.98,
          "quantity": 25600.0,
          "value": 434688.0
        },
        {
          "level": 7,
          "price": 16.97,
          "quantity": 29600.0,
          "value": 502311.99999999994
        },
        {
          "level": 8,
          "price": 16.96,
          "quantity": 14800.0,
          "value": 251008.0
        },
        {
          "level": 9,
          "price": 16.95,
          "quantity": 26000.0,
          "value": 440700.0
        },
        {
          "level": 10,
          "price": 16.94,
          "quantity": 16800.0,
          "value": 284592.0
        }
      ],
      "asks": [
        {
          "level": 1,
          "price": 17.05,
          "quantity": 14000.0,
          "value": 238700.0
        },
        {
          "level": 2,
          "price": 17.06,
          "quantity": 115200.0,
          "value": 1965311.9999999998
        },
        {
          "level": 3,
          "price": 17.07,
          "quantity": 15200.0,
          "value": 259464.0
        },
        {
          "level": 4,
          "price": 17.08,
          "quantity": 31600.0,
          "value": 539728.0
        },
        {
          "level": 5,
          "price": 17.09,
          "quantity": 41600.0,
          "value": 710944.0
        },
        {
          "level": 6,
          "price": 17.1,
          "quantity": 29600.0,
          "value": 506160.00000000006
        },
        {
          "level": 7,
          "price": 17.11,
          "quantity": 23600.0,
          "value": 403796.0
        },
        {
          "level": 8,
          "price": 17.12,
          "quantity": 102000.0,
          "value": 1746240.0
        },
        {
          "level": 9,
          "price": 17.13,
          "quantity": 4000.0,
          "value": 68520.0
        },
        {
          "level": 10,
          "price": 17.14,
          "quantity": 16400.0,
          "value": 281096.0
        }
      ]
    },
    "execution_dynamic": {
      "snapshot": {
        "valid": true,
        "snapshot_time": "2026-04-13 07:59:59.353000000",
        "snapshot_basis": "last_continuous_session_snapshot",
        "snapshot_label": "final continuous-session displayed book before close",
        "snapshot_note": "Final continuous-session displayed book before close",
        "snapshot_mic": "XHKG",
        "mid_price": 17.04,
        "spread_pct": 0.0011737089201877685,
        "spread_ticks": 1.0,
        "tick_size": 0.02,
        "bid_depth_notional_top10": 4987860.0,
        "ask_depth_notional_top10": 6719960.0,
        "bid_ask_depth_ratio": 0.7422
      },
      "historical_trade_scenarios": {
        "valid": true,
        "requested_lookback_calendar_days": 365,
        "lookback_calendar_days": 365,
        "effective_calendar_days": 365,
        "history_limited": false,
        "trade_days_used": 238,
        "n_trades_used": 1738649,
        "first_trade_date": "2025-04-14",
        "last_trade_date": "2026-04-13",
        "window_label": "Apr 14, 2025 to Apr 13, 2026",
        "window_short_label": "Apr 14, 2025 to Apr 13, 2026",
        "trade_days_label": "238 trading days",
        "trade_count_label": "1,738,649 trades",
        "window_detail_label": "238 trading days • 1,738,649 trades",
        "history_note": "Trade-size percentiles use Apr 14, 2025 to Apr 13, 2026 history (238 trading days • 1,738,649 trades).",
        "scenarios": [
          {
            "key": "p90",
            "label": "90th percentile trade",
            "quantile": 0.9,
            "trade_notional": 87024.0,
            "impact_pct": -0.0005870000000000001,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 1.74,
            "pct_of_adv": 0.05
          },
          {
            "key": "p95",
            "label": "95th percentile trade",
            "quantile": 0.95,
            "trade_notional": 147168.0,
            "impact_pct": -0.0005870000000000001,
            "filled_pct": 100.0,
            "levels_consumed": 1,
            "pct_of_bid_depth": 2.95,
            "pct_of_adv": 0.08
          },
          {
            "key": "p99_99",
            "label": "99.99th percentile trade",
            "quantile": 0.9999,
            "trade_notional": 9567018.27,
            "impact_pct": -0.003015,
            "filled_pct": 52.1,
            "levels_consumed": 10,
            "pct_of_bid_depth": 191.81,
            "pct_of_adv": 5.16
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
            "order_id": "3467777.0",
            "timestamp": "2026-04-13 01:20:11.630000000",
            "local_timestamp": "2026-04-13 09:20:11",
            "posted_price": 19.0,
            "size_shares": 278000.0,
            "notional": 5282000.0,
            "impact_pct": -0.003015,
            "filled_pct": 94.4,
            "levels_consumed": 10,
            "pct_of_bid_depth": 105.9,
            "price_vs_mid_pct": 11.502,
            "executed_event_count": 0,
            "event_count": 1
          },
          {
            "rank": 2,
            "order_id": "3801400577.0",
            "timestamp": "2026-04-13 07:11:12.479000000",
            "local_timestamp": "2026-04-13 15:11:12",
            "posted_price": 17.21,
            "size_shares": 296400.0,
            "notional": 5101044.0,
            "impact_pct": -0.003015,
            "filled_pct": 97.8,
            "levels_consumed": 10,
            "pct_of_bid_depth": 102.27,
            "price_vs_mid_pct": 0.998,
            "executed_event_count": 0,
            "event_count": 1
          },
          {
            "rank": 3,
            "order_id": "2524037633.0",
            "timestamp": "2026-04-13 05:00:16.359000000",
            "local_timestamp": "2026-04-13 13:00:16",
            "posted_price": 17.04,
            "size_shares": 293600.0,
            "notional": 5002944.0,
            "impact_pct": -0.003015,
            "filled_pct": 99.7,
            "levels_consumed": 10,
            "pct_of_bid_depth": 100.3,
            "price_vs_mid_pct": 0.0,
            "executed_event_count": 0,
            "event_count": 1
          }
        ]
      },
      "intraday_liquidity_profile": {
        "valid": true,
        "trade_date": "2026-04-13",
        "bucket_minutes": 30,
        "tick_size": 0.02,
        "timezone": "HKT (UTC+8)",
        "session_label": "HKEX continuous trading session",
        "bucket_label_basis": "bucket start time",
        "display_window_label": "HKEX continuous trading session",
        "bucket_note": "Buckets are shown in local market time and labeled by bucket start.",
        "rows": [
          {
            "bucket": "09:30",
            "spread_pct": 0.0005897965202006231,
            "spread_ticks": 0.5000000000000782,
            "bid_depth_notional": 6615196.0,
            "ask_depth_notional": 6339996.0,
            "mid_price": 16.955
          },
          {
            "bucket": "10:00",
            "spread_pct": 0.0005901445854233113,
            "spread_ticks": 0.4999999999999005,
            "bid_depth_notional": 9409100.0,
            "ask_depth_notional": 5624164.0,
            "mid_price": 16.945
          },
          {
            "bucket": "10:30",
            "spread_pct": 0.0005918910920389471,
            "spread_ticks": 0.4999999999999005,
            "bid_depth_notional": 15186512.0,
            "ask_depth_notional": 7124144.0,
            "mid_price": 16.895
          },
          {
            "bucket": "11:00",
            "spread_pct": 0.0005936479667558067,
            "spread_ticks": 0.5000000000000782,
            "bid_depth_notional": 17047208.0,
            "ask_depth_notional": 6840416.0,
            "mid_price": 16.845
          },
          {
            "bucket": "11:30",
            "spread_pct": 0.0005940005940006869,
            "spread_ticks": 0.5000000000000782,
            "bid_depth_notional": 10535144.0,
            "ask_depth_notional": 7618036.0,
            "mid_price": 16.835
          },
          {
            "bucket": "13:00",
            "spread_pct": 0.0005904930617066171,
            "spread_ticks": 0.5000000000000782,
            "bid_depth_notional": 8860780.0,
            "ask_depth_notional": 7466428.0,
            "mid_price": 16.935000000000002
          },
          {
            "bucket": "13:30",
            "spread_pct": 0.0005904930617066171,
            "spread_ticks": 0.5000000000000782,
            "bid_depth_notional": 8438172.0,
            "ask_depth_notional": 8273760.0,
            "mid_price": 16.935000000000002
          },
          {
            "bucket": "14:00",
            "spread_pct": 0.000589448865310817,
            "spread_ticks": 0.4999999999999005,
            "bid_depth_notional": 9596056.0,
            "ask_depth_notional": 7269020.0,
            "mid_price": 16.965
          },
          {
            "bucket": "14:30",
            "spread_pct": 0.0005887547836324999,
            "spread_ticks": 0.4999999999999005,
            "bid_depth_notional": 10866404.0,
            "ask_depth_notional": 6397320.0,
            "mid_price": 16.985
          },
          {
            "bucket": "15:00",
            "spread_pct": 0.0005884083553987388,
            "spread_ticks": 0.5000000000000782,
            "bid_depth_notional": 10095152.0,
            "ask_depth_notional": 7288208.0,
            "mid_price": 16.994999999999997
          },
          {
            "bucket": "15:30",
            "spread_pct": 0.0011737089201877685,
            "spread_ticks": 0.9999999999999787,
            "bid_depth_notional": 4987860.0,
            "ask_depth_notional": 6719960.0,
            "mid_price": 17.04
          }
        ],
        "summary": {
          "median_spread_pct": 0.0005904930617066171,
          "median_spread_ticks": 0.5000000000000782,
          "median_bid_depth_notional": 9596056.0,
          "median_ask_depth_notional": 7124144.0,
          "tightest_bucket": "15:00",
          "widest_bucket": "15:30",
          "deepest_bid_bucket": "11:00",
          "thinnest_bid_bucket": "15:30"
        }
      }
    },
    "peer_capacity": {
      "bx_ticket_pct_adv_50k": 0.0,
      "peers": [
        {
          "ticker": "27",
          "pct": 0.3
        },
        {
          "ticker": "9987",
          "pct": 0.5
        },
        {
          "ticker": "753",
          "pct": 0.5
        },
        {
          "ticker": "2282",
          "pct": 2.0
        },
        {
          "ticker": "880",
          "pct": 4.4
        },
        {
          "ticker": "1128",
          "pct": 4.6
        },
        {
          "ticker": "200",
          "pct": 6.4
        },
        {
          "ticker": "3918",
          "pct": 7.6
        }
      ]
    },
    "trader_composition": {
      "primary_period": "6m",
      "periods": {
        "1d": {
          "valid": true,
          "currency": "HKD",
          "n_trades": 4655,
          "n_runs": 748,
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
            "retail_pct": 0.021697099892588615,
            "mixed_pct": 0.0,
            "instit_pct": 0.5959183673469388,
            "ambiguous_pct": 0.2915145005370569,
            "unobservable_pct": 0.09087003222341568,
            "unclear_pct": 0.3823845327604726,
            "retail_qty_pct": 0.010925296637126075,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.695281879256924,
            "ambiguous_qty_pct": 0.22823876190318235,
            "unobservable_qty_pct": 0.06555406220276755,
            "unclear_qty_pct": 0.29379282410594987,
            "retail_notional_pct": 0.010907343873356281,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.6951971482942271,
            "ambiguous_notional_pct": 0.2282627203678475,
            "unobservable_notional_pct": 0.06563278746456916,
            "unclear_notional_pct": 0.2938955078324167
          },
          "run_composition": {
            "retail_pct": 0.11497326203208556,
            "mixed_pct": 0.0,
            "instit_pct": 0.18449197860962566,
            "ambiguous_pct": 0.3622994652406417,
            "unobservable_pct": 0.3382352941176471,
            "unclear_pct": 0.7005347593582888,
            "retail_notional_pct": 0.010907343873356281,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.6951971482942271,
            "unclear_notional_pct": 0.2938955078324167
          },
          "counts": {
            "trades": {
              "retail": 101,
              "mixed": 0,
              "institutional": 2774,
              "ambiguous": 1357,
              "unobservable": 423,
              "unclear": 1780
            },
            "runs": {
              "retail": 86,
              "mixed": 0,
              "institutional": 138,
              "ambiguous": 271,
              "unobservable": 253,
              "unclear": 524
            }
          },
          "confidence": {
            "high": 0.08155080213903744,
            "medium": 0.1804812834224599,
            "low": 0.0374331550802139,
            "na": 0.7005347593582888
          },
          "confidence_counts": {
            "high": 61,
            "medium": 135,
            "low": 28,
            "na": 524
          },
          "trade_confidence": {
            "high": 0.030934479054779807,
            "medium": 0.5136412459720731,
            "low": 0.07303974221267455,
            "na": 0.38238453276047263
          },
          "trade_confidence_counts": {
            "high": 144,
            "medium": 2391,
            "low": 340,
            "na": 1780
          },
          "observability": {
            "avg_feature_coverage": 0.6897727272727273,
            "observable_run_pct": 0.6617647058823529,
            "ambiguous_run_pct": 0.3622994652406417,
            "unobservable_run_pct": 0.3382352941176471
          },
          "dominant_bucket": "AMBIGUOUS",
          "dominant_label": "Mixed, mostly unclassified",
          "dominant_share": 0.3622994652406417,
          "dominance_gap": 0.024064171122994638,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 4655
            },
            "d2_information": {
              "UNOBSERVABLE": 4655
            },
            "d3_urgency": {
              "IMMEDIATE": 662,
              "ADAPTIVE": 86
            },
            "participant_confidence": {
              "NA": 524,
              "MEDIUM": 135,
              "HIGH": 61,
              "LOW": 28
            }
          },
          "trade_size": {
            "avg": 23915.857250268527,
            "median": 13568.0
          },
          "run_size": {
            "avg": 148834.64639037434,
            "median": 40656.0,
            "avg_length": 6.223262032085562
          },
          "recent_trades": [
            {
              "trade_id": "4879",
              "timestamp": "2026-04-13T07:59:59.353460",
              "price": 17.03,
              "size": 400.0,
              "notional": 6812.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 197640,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "4878",
              "timestamp": "2026-04-13T07:59:58.681696",
              "price": 17.05,
              "size": 400.0,
              "notional": 6820.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 197640,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "4877",
              "timestamp": "2026-04-13T07:59:50.032374",
              "price": 17.03,
              "size": 800.0,
              "notional": 13624.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 197639,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "4876",
              "timestamp": "2026-04-13T07:59:49.864565",
              "price": 17.03,
              "size": 400.0,
              "notional": 6812.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 197639,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "4875",
              "timestamp": "2026-04-13T07:59:39.353291",
              "price": 17.03,
              "size": 400.0,
              "notional": 6812.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 197638,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "4874",
              "timestamp": "2026-04-13T07:59:38.702791",
              "price": 17.05,
              "size": 2000.0,
              "notional": 34100.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 197638,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "4873",
              "timestamp": "2026-04-13T07:59:31.832364",
              "price": 17.03,
              "size": 800.0,
              "notional": 13624.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 197637,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "4872",
              "timestamp": "2026-04-13T07:59:31.016391",
              "price": 17.04,
              "size": 400.0,
              "notional": 6816.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 197637,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "4871",
              "timestamp": "2026-04-13T07:59:31.016391",
              "price": 17.04,
              "size": 1600.0,
              "notional": 27264.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 197637,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "4869",
              "timestamp": "2026-04-13T07:59:31.002173",
              "price": 17.03,
              "size": 800.0,
              "notional": 13624.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 197637,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "4868",
              "timestamp": "2026-04-13T07:59:30.831877",
              "price": 17.03,
              "size": 800.0,
              "notional": 13624.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 197637,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "4867",
              "timestamp": "2026-04-13T07:59:30.191499",
              "price": 17.03,
              "size": 800.0,
              "notional": 13624.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 197637,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "4866",
              "timestamp": "2026-04-13T07:59:30.166797",
              "price": 17.04,
              "size": 400.0,
              "notional": 6816.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 197637,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "4865",
              "timestamp": "2026-04-13T07:59:30.078889",
              "price": 17.03,
              "size": 1200.0,
              "notional": 20436.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 197637,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "4863",
              "timestamp": "2026-04-13T07:59:24.728802",
              "price": 17.04,
              "size": 800.0,
              "notional": 13632.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 197636,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "4862",
              "timestamp": "2026-04-13T07:59:23.555532",
              "price": 17.03,
              "size": 400.0,
              "notional": 6812.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 197636,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "4861",
              "timestamp": "2026-04-13T07:59:18.689848",
              "price": 17.04,
              "size": 1200.0,
              "notional": 20448.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 197636,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "4860",
              "timestamp": "2026-04-13T07:59:18.689848",
              "price": 17.04,
              "size": 400.0,
              "notional": 6816.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 197636,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "4859",
              "timestamp": "2026-04-13T07:59:18.689848",
              "price": 17.04,
              "size": 800.0,
              "notional": 13632.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 197636,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "4858",
              "timestamp": "2026-04-13T07:59:18.689848",
              "price": 17.04,
              "size": 1600.0,
              "notional": 27264.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 197636,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "4857",
              "timestamp": "2026-04-13T07:59:18.689848",
              "price": 17.04,
              "size": 2000.0,
              "notional": 34080.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 197636,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "4856",
              "timestamp": "2026-04-13T07:59:17.598420",
              "price": 17.03,
              "size": 400.0,
              "notional": 6812.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 197636,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "4854",
              "timestamp": "2026-04-13T07:59:17.551506",
              "price": 17.03,
              "size": 1200.0,
              "notional": 20436.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 197636,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "4853",
              "timestamp": "2026-04-13T07:59:11.864914",
              "price": 17.03,
              "size": 2800.0,
              "notional": 47684.0,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 197635,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "4851",
              "timestamp": "2026-04-13T07:59:05.299723",
              "price": 17.03,
              "size": 400.0,
              "notional": 6812.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 197634,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "4850",
              "timestamp": "2026-04-13T07:59:05.291812",
              "price": 17.03,
              "size": 400.0,
              "notional": 6812.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 197634,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "4849",
              "timestamp": "2026-04-13T07:59:05.279359",
              "price": 17.04,
              "size": 400.0,
              "notional": 6816.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 197634,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "4848",
              "timestamp": "2026-04-13T07:59:05.279359",
              "price": 17.04,
              "size": 4400.0,
              "notional": 74976.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 197634,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "4847",
              "timestamp": "2026-04-13T07:59:02.243308",
              "price": 17.04,
              "size": 400.0,
              "notional": 6816.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 197634,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "4846",
              "timestamp": "2026-04-13T07:59:00.818042",
              "price": 17.04,
              "size": 400.0,
              "notional": 6816.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 197634,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            }
          ],
          "peer_comparison": []
        },
        "30d": {
          "valid": true,
          "currency": "HKD",
          "n_trades": 99922,
          "n_runs": 15199,
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
            "retail_pct": 0.034667040291427316,
            "mixed_pct": 0.0,
            "instit_pct": 0.5730669922539581,
            "ambiguous_pct": 0.29011629070675127,
            "unobservable_pct": 0.10214967674786334,
            "unclear_pct": 0.3922659674546146,
            "retail_qty_pct": 0.013877389459825196,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.6856334938571625,
            "ambiguous_qty_pct": 0.22840416058964588,
            "unobservable_qty_pct": 0.07208495609336632,
            "unclear_qty_pct": 0.3004891166830122,
            "retail_notional_pct": 0.013905926681256939,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.6852564221013902,
            "ambiguous_notional_pct": 0.22869726412199806,
            "unobservable_notional_pct": 0.07214038709535475,
            "unclear_notional_pct": 0.30083765121735284
          },
          "run_composition": {
            "retail_pct": 0.1819856569511152,
            "mixed_pct": 0.0,
            "instit_pct": 0.18145930653332457,
            "ambiguous_pct": 0.3229159813145602,
            "unobservable_pct": 0.31363905520100005,
            "unclear_pct": 0.6365550365155602,
            "retail_notional_pct": 0.013905926681256939,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.6852564221013902,
            "unclear_notional_pct": 0.30083765121735284
          },
          "counts": {
            "trades": {
              "retail": 3464,
              "mixed": 0,
              "institutional": 57262,
              "ambiguous": 28989,
              "unobservable": 10207,
              "unclear": 39196
            },
            "runs": {
              "retail": 2766,
              "mixed": 0,
              "institutional": 2758,
              "ambiguous": 4908,
              "unobservable": 4767,
              "unclear": 9675
            }
          },
          "confidence": {
            "high": 0.045463517336666884,
            "medium": 0.1985656951115205,
            "low": 0.11941575103625239,
            "na": 0.6365550365155602
          },
          "confidence_counts": {
            "high": 691,
            "medium": 3018,
            "low": 1815,
            "na": 9675
          },
          "trade_confidence": {
            "high": 0.01586237265066752,
            "medium": 0.38642140869878505,
            "low": 0.20545025119593283,
            "na": 0.3922659674546146
          },
          "trade_confidence_counts": {
            "high": 1585,
            "medium": 38612,
            "low": 20529,
            "na": 39196
          },
          "observability": {
            "avg_feature_coverage": 0.7006513586420159,
            "observable_run_pct": 0.686360944799,
            "ambiguous_run_pct": 0.3229159813145602,
            "unobservable_run_pct": 0.31363905520100005
          },
          "dominant_bucket": "AMBIGUOUS",
          "dominant_label": "Mixed, mostly unclassified",
          "dominant_share": 0.3229159813145602,
          "dominance_gap": 0.009276926113560124,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 99922
            },
            "d2_information": {
              "UNOBSERVABLE": 99922
            },
            "d3_urgency": {
              "IMMEDIATE": 13870,
              "ADAPTIVE": 1320,
              "SCHEDULED": 8,
              "OPPORTUNISTIC": 1
            },
            "participant_confidence": {
              "NA": 9675,
              "MEDIUM": 3018,
              "LOW": 1815,
              "HIGH": 691
            }
          },
          "trade_size": {
            "avg": 29509.09919016833,
            "median": 13656.0
          },
          "run_size": {
            "avg": 194000.14535693135,
            "median": 40584.0,
            "avg_length": 6.574248305809593
          },
          "recent_trades": [
            {
              "trade_id": "4879",
              "timestamp": "2026-04-13T07:59:59.353460",
              "price": 17.03,
              "size": 400.0,
              "notional": 6812.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 197640,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "4878",
              "timestamp": "2026-04-13T07:59:58.681696",
              "price": 17.05,
              "size": 400.0,
              "notional": 6820.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 197640,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "4877",
              "timestamp": "2026-04-13T07:59:50.032374",
              "price": 17.03,
              "size": 800.0,
              "notional": 13624.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 197639,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "4876",
              "timestamp": "2026-04-13T07:59:49.864565",
              "price": 17.03,
              "size": 400.0,
              "notional": 6812.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 197639,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "4875",
              "timestamp": "2026-04-13T07:59:39.353291",
              "price": 17.03,
              "size": 400.0,
              "notional": 6812.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 197638,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "4874",
              "timestamp": "2026-04-13T07:59:38.702791",
              "price": 17.05,
              "size": 2000.0,
              "notional": 34100.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 197638,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "4873",
              "timestamp": "2026-04-13T07:59:31.832364",
              "price": 17.03,
              "size": 800.0,
              "notional": 13624.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 197637,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "4872",
              "timestamp": "2026-04-13T07:59:31.016391",
              "price": 17.04,
              "size": 400.0,
              "notional": 6816.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 197637,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "4871",
              "timestamp": "2026-04-13T07:59:31.016391",
              "price": 17.04,
              "size": 1600.0,
              "notional": 27264.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 197637,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "4869",
              "timestamp": "2026-04-13T07:59:31.002173",
              "price": 17.03,
              "size": 800.0,
              "notional": 13624.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 197637,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "4868",
              "timestamp": "2026-04-13T07:59:30.831877",
              "price": 17.03,
              "size": 800.0,
              "notional": 13624.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 197637,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "4867",
              "timestamp": "2026-04-13T07:59:30.191499",
              "price": 17.03,
              "size": 800.0,
              "notional": 13624.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 197637,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "4866",
              "timestamp": "2026-04-13T07:59:30.166797",
              "price": 17.04,
              "size": 400.0,
              "notional": 6816.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 197637,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "4865",
              "timestamp": "2026-04-13T07:59:30.078889",
              "price": 17.03,
              "size": 1200.0,
              "notional": 20436.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 197637,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "4863",
              "timestamp": "2026-04-13T07:59:24.728802",
              "price": 17.04,
              "size": 800.0,
              "notional": 13632.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 197636,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "4862",
              "timestamp": "2026-04-13T07:59:23.555532",
              "price": 17.03,
              "size": 400.0,
              "notional": 6812.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 197636,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "4861",
              "timestamp": "2026-04-13T07:59:18.689848",
              "price": 17.04,
              "size": 1200.0,
              "notional": 20448.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 197636,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "4860",
              "timestamp": "2026-04-13T07:59:18.689848",
              "price": 17.04,
              "size": 400.0,
              "notional": 6816.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 197636,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "4859",
              "timestamp": "2026-04-13T07:59:18.689848",
              "price": 17.04,
              "size": 800.0,
              "notional": 13632.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 197636,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "4858",
              "timestamp": "2026-04-13T07:59:18.689848",
              "price": 17.04,
              "size": 1600.0,
              "notional": 27264.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 197636,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "4857",
              "timestamp": "2026-04-13T07:59:18.689848",
              "price": 17.04,
              "size": 2000.0,
              "notional": 34080.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 197636,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "4856",
              "timestamp": "2026-04-13T07:59:17.598420",
              "price": 17.03,
              "size": 400.0,
              "notional": 6812.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 197636,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "4854",
              "timestamp": "2026-04-13T07:59:17.551506",
              "price": 17.03,
              "size": 1200.0,
              "notional": 20436.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 197636,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "4853",
              "timestamp": "2026-04-13T07:59:11.864914",
              "price": 17.03,
              "size": 2800.0,
              "notional": 47684.0,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 197635,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "4851",
              "timestamp": "2026-04-13T07:59:05.299723",
              "price": 17.03,
              "size": 400.0,
              "notional": 6812.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 197634,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "4850",
              "timestamp": "2026-04-13T07:59:05.291812",
              "price": 17.03,
              "size": 400.0,
              "notional": 6812.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 197634,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "4849",
              "timestamp": "2026-04-13T07:59:05.279359",
              "price": 17.04,
              "size": 400.0,
              "notional": 6816.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 197634,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "4848",
              "timestamp": "2026-04-13T07:59:05.279359",
              "price": 17.04,
              "size": 4400.0,
              "notional": 74976.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 197634,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "4847",
              "timestamp": "2026-04-13T07:59:02.243308",
              "price": 17.04,
              "size": 400.0,
              "notional": 6816.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 197634,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "4846",
              "timestamp": "2026-04-13T07:59:00.818042",
              "price": 17.04,
              "size": 400.0,
              "notional": 6816.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 197634,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            }
          ],
          "peer_comparison": []
        },
        "3m": {
          "valid": true,
          "currency": "HKD",
          "n_trades": 418709,
          "n_runs": 57219,
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
            "retail_pct": 0.03975553427320645,
            "mixed_pct": 0.0,
            "instit_pct": 0.572860865183218,
            "ambiguous_pct": 0.31928141023956974,
            "unobservable_pct": 0.06810219030400588,
            "unclear_pct": 0.3873836005435756,
            "retail_qty_pct": 0.016346310543742294,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.6924028557454348,
            "ambiguous_qty_pct": 0.24622875184228607,
            "unobservable_qty_pct": 0.045022081868536824,
            "unclear_qty_pct": 0.2912508337108229,
            "retail_notional_pct": 0.016473987035497028,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.692200007083019,
            "ambiguous_notional_pct": 0.24661146636257741,
            "unobservable_notional_pct": 0.04471453951890652,
            "unclear_notional_pct": 0.29132600588148394
          },
          "run_composition": {
            "retail_pct": 0.21924535556371136,
            "mixed_pct": 0.0,
            "instit_pct": 0.17020570090354603,
            "ambiguous_pct": 0.36302626749855815,
            "unobservable_pct": 0.24752267603418446,
            "unclear_pct": 0.6105489435327426,
            "retail_notional_pct": 0.016473987035497028,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.692200007083019,
            "unclear_notional_pct": 0.29132600588148394
          },
          "counts": {
            "trades": {
              "retail": 16646,
              "mixed": 0,
              "institutional": 239862,
              "ambiguous": 133686,
              "unobservable": 28515,
              "unclear": 162201
            },
            "runs": {
              "retail": 12545,
              "mixed": 0,
              "institutional": 9739,
              "ambiguous": 20772,
              "unobservable": 14163,
              "unclear": 34935
            }
          },
          "confidence": {
            "high": 0.04879498068823293,
            "medium": 0.20591062409339556,
            "low": 0.1347454516856289,
            "na": 0.6105489435327426
          },
          "confidence_counts": {
            "high": 2792,
            "medium": 11782,
            "low": 7710,
            "na": 34935
          },
          "trade_confidence": {
            "high": 0.010529986219546272,
            "medium": 0.3964901638130539,
            "low": 0.20559624942382418,
            "na": 0.3873836005435756
          },
          "trade_confidence_counts": {
            "high": 4409,
            "medium": 166014,
            "low": 86085,
            "na": 162201
          },
          "observability": {
            "avg_feature_coverage": 0.7214998514479456,
            "observable_run_pct": 0.7524773239658156,
            "ambiguous_run_pct": 0.36302626749855815,
            "unobservable_run_pct": 0.24752267603418446
          },
          "dominant_bucket": "AMBIGUOUS",
          "dominant_label": "Unclassified Flow",
          "dominant_share": 0.36302626749855815,
          "dominance_gap": 0.1155035914643737,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 418709
            },
            "d2_information": {
              "UNOBSERVABLE": 418709
            },
            "d3_urgency": {
              "IMMEDIATE": 50389,
              "ADAPTIVE": 6794,
              "SCHEDULED": 30,
              "OPPORTUNISTIC": 6
            },
            "participant_confidence": {
              "NA": 34935,
              "MEDIUM": 11782,
              "LOW": 7710,
              "HIGH": 2792
            }
          },
          "trade_size": {
            "avg": 32077.80564076722,
            "median": 14784.0
          },
          "run_size": {
            "avg": 234734.37008755835,
            "median": 42816.0,
            "avg_length": 7.317656722417379
          },
          "recent_trades": [
            {
              "trade_id": "4879",
              "timestamp": "2026-04-13T07:59:59.353460",
              "price": 17.03,
              "size": 400.0,
              "notional": 6812.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 197640,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "4878",
              "timestamp": "2026-04-13T07:59:58.681696",
              "price": 17.05,
              "size": 400.0,
              "notional": 6820.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 197640,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "4877",
              "timestamp": "2026-04-13T07:59:50.032374",
              "price": 17.03,
              "size": 800.0,
              "notional": 13624.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 197639,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "4876",
              "timestamp": "2026-04-13T07:59:49.864565",
              "price": 17.03,
              "size": 400.0,
              "notional": 6812.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 197639,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "4875",
              "timestamp": "2026-04-13T07:59:39.353291",
              "price": 17.03,
              "size": 400.0,
              "notional": 6812.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 197638,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "4874",
              "timestamp": "2026-04-13T07:59:38.702791",
              "price": 17.05,
              "size": 2000.0,
              "notional": 34100.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 197638,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "4873",
              "timestamp": "2026-04-13T07:59:31.832364",
              "price": 17.03,
              "size": 800.0,
              "notional": 13624.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 197637,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "4872",
              "timestamp": "2026-04-13T07:59:31.016391",
              "price": 17.04,
              "size": 400.0,
              "notional": 6816.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 197637,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "4871",
              "timestamp": "2026-04-13T07:59:31.016391",
              "price": 17.04,
              "size": 1600.0,
              "notional": 27264.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 197637,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "4869",
              "timestamp": "2026-04-13T07:59:31.002173",
              "price": 17.03,
              "size": 800.0,
              "notional": 13624.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 197637,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "4868",
              "timestamp": "2026-04-13T07:59:30.831877",
              "price": 17.03,
              "size": 800.0,
              "notional": 13624.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 197637,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "4867",
              "timestamp": "2026-04-13T07:59:30.191499",
              "price": 17.03,
              "size": 800.0,
              "notional": 13624.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 197637,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "4866",
              "timestamp": "2026-04-13T07:59:30.166797",
              "price": 17.04,
              "size": 400.0,
              "notional": 6816.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 197637,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "4865",
              "timestamp": "2026-04-13T07:59:30.078889",
              "price": 17.03,
              "size": 1200.0,
              "notional": 20436.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 197637,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "4863",
              "timestamp": "2026-04-13T07:59:24.728802",
              "price": 17.04,
              "size": 800.0,
              "notional": 13632.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 197636,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "4862",
              "timestamp": "2026-04-13T07:59:23.555532",
              "price": 17.03,
              "size": 400.0,
              "notional": 6812.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 197636,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "4861",
              "timestamp": "2026-04-13T07:59:18.689848",
              "price": 17.04,
              "size": 1200.0,
              "notional": 20448.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 197636,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "4860",
              "timestamp": "2026-04-13T07:59:18.689848",
              "price": 17.04,
              "size": 400.0,
              "notional": 6816.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 197636,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "4859",
              "timestamp": "2026-04-13T07:59:18.689848",
              "price": 17.04,
              "size": 800.0,
              "notional": 13632.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 197636,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "4858",
              "timestamp": "2026-04-13T07:59:18.689848",
              "price": 17.04,
              "size": 1600.0,
              "notional": 27264.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 197636,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "4857",
              "timestamp": "2026-04-13T07:59:18.689848",
              "price": 17.04,
              "size": 2000.0,
              "notional": 34080.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 197636,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "4856",
              "timestamp": "2026-04-13T07:59:17.598420",
              "price": 17.03,
              "size": 400.0,
              "notional": 6812.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 197636,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "4854",
              "timestamp": "2026-04-13T07:59:17.551506",
              "price": 17.03,
              "size": 1200.0,
              "notional": 20436.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 197636,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "4853",
              "timestamp": "2026-04-13T07:59:11.864914",
              "price": 17.03,
              "size": 2800.0,
              "notional": 47684.0,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 197635,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "4851",
              "timestamp": "2026-04-13T07:59:05.299723",
              "price": 17.03,
              "size": 400.0,
              "notional": 6812.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 197634,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "4850",
              "timestamp": "2026-04-13T07:59:05.291812",
              "price": 17.03,
              "size": 400.0,
              "notional": 6812.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 197634,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "4849",
              "timestamp": "2026-04-13T07:59:05.279359",
              "price": 17.04,
              "size": 400.0,
              "notional": 6816.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 197634,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "4848",
              "timestamp": "2026-04-13T07:59:05.279359",
              "price": 17.04,
              "size": 4400.0,
              "notional": 74976.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 197634,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "4847",
              "timestamp": "2026-04-13T07:59:02.243308",
              "price": 17.04,
              "size": 400.0,
              "notional": 6816.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 197634,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "4846",
              "timestamp": "2026-04-13T07:59:00.818042",
              "price": 17.04,
              "size": 400.0,
              "notional": 6816.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 197634,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            }
          ],
          "peer_comparison": []
        },
        "6m": {
          "valid": true,
          "currency": "HKD",
          "n_trades": 847531,
          "n_runs": 117964,
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
            "retail_pct": 0.039793234701739524,
            "mixed_pct": 0.0,
            "instit_pct": 0.5628997641384209,
            "ambiguous_pct": 0.3323559846188517,
            "unobservable_pct": 0.06495101654098788,
            "unclear_pct": 0.3973070011598396,
            "retail_qty_pct": 0.016316715967478686,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.6871600315051797,
            "ambiguous_qty_pct": 0.25421246658515684,
            "unobservable_qty_pct": 0.04231078594218478,
            "unclear_qty_pct": 0.29652325252734163,
            "retail_notional_pct": 0.016339443968040653,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.6869291053167164,
            "ambiguous_notional_pct": 0.25450853684465785,
            "unobservable_notional_pct": 0.04222291387058526,
            "unclear_notional_pct": 0.2967314507152431
          },
          "run_composition": {
            "retail_pct": 0.20759723305415212,
            "mixed_pct": 0.0,
            "instit_pct": 0.16364314536638297,
            "ambiguous_pct": 0.37038418500559495,
            "unobservable_pct": 0.25837543657387,
            "unclear_pct": 0.628759621579465,
            "retail_notional_pct": 0.016339443968040653,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.6869291053167164,
            "unclear_notional_pct": 0.2967314507152431
          },
          "counts": {
            "trades": {
              "retail": 33726,
              "mixed": 0,
              "institutional": 477075,
              "ambiguous": 281682,
              "unobservable": 55048,
              "unclear": 336730
            },
            "runs": {
              "retail": 24489,
              "mixed": 0,
              "institutional": 19304,
              "ambiguous": 43692,
              "unobservable": 30479,
              "unclear": 74171
            }
          },
          "confidence": {
            "high": 0.054169068529381845,
            "medium": 0.19935743108066867,
            "low": 0.11771387881048455,
            "na": 0.628759621579465
          },
          "confidence_counts": {
            "high": 6390,
            "medium": 23517,
            "low": 13886,
            "na": 74171
          },
          "trade_confidence": {
            "high": 0.022390921394025706,
            "medium": 0.39401980576521684,
            "low": 0.18628227168091788,
            "na": 0.3973070011598396
          },
          "trade_confidence_counts": {
            "high": 18977,
            "medium": 333944,
            "low": 157880,
            "na": 336730
          },
          "observability": {
            "avg_feature_coverage": 0.7191634736021159,
            "observable_run_pct": 0.74162456342613,
            "ambiguous_run_pct": 0.37038418500559495,
            "unobservable_run_pct": 0.25837543657387
          },
          "dominant_bucket": "AMBIGUOUS",
          "dominant_label": "Unclassified Flow",
          "dominant_share": 0.37038418500559495,
          "dominance_gap": 0.11200874843172492,
          "diagnostics": {
            "d1_cluster_mechanic": {
              "SINGLE_FILL": 847531
            },
            "d2_information": {
              "UNOBSERVABLE": 847531
            },
            "d3_urgency": {
              "IMMEDIATE": 102583,
              "ADAPTIVE": 15280,
              "SCHEDULED": 92,
              "OPPORTUNISTIC": 9
            },
            "participant_confidence": {
              "NA": 74171,
              "MEDIUM": 23517,
              "LOW": 13886,
              "HIGH": 6390
            }
          },
          "trade_size": {
            "avg": 34947.85811687124,
            "median": 16000.0
          },
          "run_size": {
            "avg": 251088.40949484587,
            "median": 43360.0,
            "avg_length": 7.184658031263775
          },
          "recent_trades": [
            {
              "trade_id": "4879",
              "timestamp": "2026-04-13T07:59:59.353460",
              "price": 17.03,
              "size": 400.0,
              "notional": 6812.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 197640,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "4878",
              "timestamp": "2026-04-13T07:59:58.681696",
              "price": 17.05,
              "size": 400.0,
              "notional": 6820.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 197640,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "4877",
              "timestamp": "2026-04-13T07:59:50.032374",
              "price": 17.03,
              "size": 800.0,
              "notional": 13624.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 197639,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "4876",
              "timestamp": "2026-04-13T07:59:49.864565",
              "price": 17.03,
              "size": 400.0,
              "notional": 6812.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 197639,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "4875",
              "timestamp": "2026-04-13T07:59:39.353291",
              "price": 17.03,
              "size": 400.0,
              "notional": 6812.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 197638,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "4874",
              "timestamp": "2026-04-13T07:59:38.702791",
              "price": 17.05,
              "size": 2000.0,
              "notional": 34100.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 197638,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "4873",
              "timestamp": "2026-04-13T07:59:31.832364",
              "price": 17.03,
              "size": 800.0,
              "notional": 13624.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 197637,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "4872",
              "timestamp": "2026-04-13T07:59:31.016391",
              "price": 17.04,
              "size": 400.0,
              "notional": 6816.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 197637,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "4871",
              "timestamp": "2026-04-13T07:59:31.016391",
              "price": 17.04,
              "size": 1600.0,
              "notional": 27264.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 197637,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "4869",
              "timestamp": "2026-04-13T07:59:31.002173",
              "price": 17.03,
              "size": 800.0,
              "notional": 13624.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 197637,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "4868",
              "timestamp": "2026-04-13T07:59:30.831877",
              "price": 17.03,
              "size": 800.0,
              "notional": 13624.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 197637,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "4867",
              "timestamp": "2026-04-13T07:59:30.191499",
              "price": 17.03,
              "size": 800.0,
              "notional": 13624.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 197637,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "4866",
              "timestamp": "2026-04-13T07:59:30.166797",
              "price": 17.04,
              "size": 400.0,
              "notional": 6816.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 197637,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "4865",
              "timestamp": "2026-04-13T07:59:30.078889",
              "price": 17.03,
              "size": 1200.0,
              "notional": 20436.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 197637,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "4863",
              "timestamp": "2026-04-13T07:59:24.728802",
              "price": 17.04,
              "size": 800.0,
              "notional": 13632.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 197636,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "4862",
              "timestamp": "2026-04-13T07:59:23.555532",
              "price": 17.03,
              "size": 400.0,
              "notional": 6812.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 197636,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "4861",
              "timestamp": "2026-04-13T07:59:18.689848",
              "price": 17.04,
              "size": 1200.0,
              "notional": 20448.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 197636,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "4860",
              "timestamp": "2026-04-13T07:59:18.689848",
              "price": 17.04,
              "size": 400.0,
              "notional": 6816.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 197636,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "4859",
              "timestamp": "2026-04-13T07:59:18.689848",
              "price": 17.04,
              "size": 800.0,
              "notional": 13632.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 197636,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "4858",
              "timestamp": "2026-04-13T07:59:18.689848",
              "price": 17.04,
              "size": 1600.0,
              "notional": 27264.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 197636,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "4857",
              "timestamp": "2026-04-13T07:59:18.689848",
              "price": 17.04,
              "size": 2000.0,
              "notional": 34080.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 197636,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "4856",
              "timestamp": "2026-04-13T07:59:17.598420",
              "price": 17.03,
              "size": 400.0,
              "notional": 6812.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 197636,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "4854",
              "timestamp": "2026-04-13T07:59:17.551506",
              "price": 17.03,
              "size": 1200.0,
              "notional": 20436.0,
              "bucket": "AMBIGUOUS",
              "confidence": "NA",
              "run_id": 197636,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "4853",
              "timestamp": "2026-04-13T07:59:11.864914",
              "price": 17.03,
              "size": 2800.0,
              "notional": 47684.0,
              "bucket": "RETAIL",
              "confidence": "MEDIUM",
              "run_id": 197635,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "IMMEDIATE"
            },
            {
              "trade_id": "4851",
              "timestamp": "2026-04-13T07:59:05.299723",
              "price": 17.03,
              "size": 400.0,
              "notional": 6812.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 197634,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "4850",
              "timestamp": "2026-04-13T07:59:05.291812",
              "price": 17.03,
              "size": 400.0,
              "notional": 6812.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 197634,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "4849",
              "timestamp": "2026-04-13T07:59:05.279359",
              "price": 17.04,
              "size": 400.0,
              "notional": 6816.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 197634,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "4848",
              "timestamp": "2026-04-13T07:59:05.279359",
              "price": 17.04,
              "size": 4400.0,
              "notional": 74976.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 197634,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "4847",
              "timestamp": "2026-04-13T07:59:02.243308",
              "price": 17.04,
              "size": 400.0,
              "notional": 6816.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 197634,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            },
            {
              "trade_id": "4846",
              "timestamp": "2026-04-13T07:59:00.818042",
              "price": 17.04,
              "size": 400.0,
              "notional": 6816.0,
              "bucket": "INSTITUTIONAL",
              "confidence": "MEDIUM",
              "run_id": 197634,
              "d1": "SINGLE_FILL",
              "d2": "UNOBSERVABLE",
              "d3": "ADAPTIVE"
            }
          ],
          "peer_comparison": []
        }
      },
      "valid": true,
      "currency": "HKD",
      "n_trades": 847531,
      "n_runs": 117964,
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
        "retail_pct": 0.039793234701739524,
        "mixed_pct": 0.0,
        "instit_pct": 0.5628997641384209,
        "ambiguous_pct": 0.3323559846188517,
        "unobservable_pct": 0.06495101654098788,
        "unclear_pct": 0.3973070011598396,
        "retail_qty_pct": 0.016316715967478686,
        "mixed_qty_pct": 0.0,
        "instit_qty_pct": 0.6871600315051797,
        "ambiguous_qty_pct": 0.25421246658515684,
        "unobservable_qty_pct": 0.04231078594218478,
        "unclear_qty_pct": 0.29652325252734163,
        "retail_notional_pct": 0.016339443968040653,
        "mixed_notional_pct": 0.0,
        "instit_notional_pct": 0.6869291053167164,
        "ambiguous_notional_pct": 0.25450853684465785,
        "unobservable_notional_pct": 0.04222291387058526,
        "unclear_notional_pct": 0.2967314507152431
      },
      "run_composition": {
        "retail_pct": 0.20759723305415212,
        "mixed_pct": 0.0,
        "instit_pct": 0.16364314536638297,
        "ambiguous_pct": 0.37038418500559495,
        "unobservable_pct": 0.25837543657387,
        "unclear_pct": 0.628759621579465
      },
      "trade_size": {
        "avg": 34947.85811687124,
        "median": 16000.0
      },
      "run_size": {
        "avg": 251088.40949484587,
        "median": 43360.0,
        "avg_length": 7.184658031263775
      },
      "confidence": {
        "high": 0.054169068529381845,
        "medium": 0.19935743108066867,
        "low": 0.11771387881048455,
        "na": 0.628759621579465
      },
      "confidence_counts": {
        "high": 6390,
        "medium": 23517,
        "low": 13886,
        "na": 74171
      },
      "trade_confidence": {
        "high": 0.022390921394025706,
        "medium": 0.39401980576521684,
        "low": 0.18628227168091788,
        "na": 0.3973070011598396
      },
      "trade_confidence_counts": {
        "high": 18977,
        "medium": 333944,
        "low": 157880,
        "na": 336730
      },
      "counts": {
        "trades": {
          "retail": 33726,
          "mixed": 0,
          "institutional": 477075,
          "ambiguous": 281682,
          "unobservable": 55048,
          "unclear": 336730
        },
        "runs": {
          "retail": 24489,
          "mixed": 0,
          "institutional": 19304,
          "ambiguous": 43692,
          "unobservable": 30479,
          "unclear": 74171
        }
      },
      "observability": {
        "avg_feature_coverage": 0.7191634736021159,
        "observable_run_pct": 0.74162456342613,
        "ambiguous_run_pct": 0.37038418500559495,
        "unobservable_run_pct": 0.25837543657387
      },
      "dominant_bucket": "AMBIGUOUS",
      "dominant_label": "Unclassified Flow",
      "dominant_share": 0.37038418500559495,
      "dominance_gap": 0.11200874843172492,
      "over_time": {
        "valid": true,
        "periods": [
          {
            "month": "2025-11",
            "n_trades": 108532,
            "n_runs": 16944,
            "retail_pct": 0.040928021228762025,
            "mixed_pct": 0.0,
            "instit_pct": 0.5423193159621126,
            "ambiguous_pct": 0.34939925551910955,
            "unobservable_pct": 0.06735340729001585,
            "unclear_pct": 0.4167526628091254,
            "avg_trade_size": 35451.41263009988,
            "avg_run_notional": 227078.1819859537,
            "retail_qty_pct": 0.018446527697339187,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.6736330846015391,
            "ambiguous_qty_pct": 0.2666767826663376,
            "unobservable_qty_pct": 0.04124360503478404,
            "unclear_qty_pct": 0.3079203877011216,
            "retail_notional_pct": 0.018425245826618388,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.6742114141016657,
            "ambiguous_notional_pct": 0.26597114147399226,
            "unobservable_notional_pct": 0.04139219859772359,
            "unclear_notional_pct": 0.30736334007171584,
            "run_retail_pct": 0.19399197355996223,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.15509915014164305,
            "run_ambiguous_pct": 0.37092776203966005,
            "run_unobservable_pct": 0.2799811142587347,
            "run_unclear_pct": 0.6509088762983948,
            "avg_feature_coverage": 0.7136419971671388,
            "high_confidence_pct": 0.059490084985835696,
            "medium_confidence_pct": 0.18938857412653445,
            "low_confidence_pct": 0.10021246458923513,
            "na_confidence_pct": 0.6509088762983947,
            "total_quantity": null
          },
          {
            "month": "2025-12",
            "n_trades": 72887,
            "n_runs": 12283,
            "retail_pct": 0.04220231316970104,
            "mixed_pct": 0.0,
            "instit_pct": 0.5439378764388711,
            "ambiguous_pct": 0.32974330127457574,
            "unobservable_pct": 0.08411650911685212,
            "unclear_pct": 0.41385981039142783,
            "avg_trade_size": 33303.79026849781,
            "avg_run_notional": 197623.8183912725,
            "retail_qty_pct": 0.016612897284835244,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.6852453987763452,
            "ambiguous_qty_pct": 0.2427875883632392,
            "unobservable_qty_pct": 0.055354115575580405,
            "unclear_qty_pct": 0.2981417039388196,
            "retail_notional_pct": 0.01665445936177479,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.6852420491000285,
            "ambiguous_notional_pct": 0.24265076350018688,
            "unobservable_notional_pct": 0.05545272803800975,
            "unclear_notional_pct": 0.29810349153819665,
            "run_retail_pct": 0.19840429862411463,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.15769763087193683,
            "run_ambiguous_pct": 0.33941219571765857,
            "run_unobservable_pct": 0.30448587478628997,
            "run_unclear_pct": 0.6438980705039485,
            "avg_feature_coverage": 0.7074126841976716,
            "high_confidence_pct": 0.0486037612961003,
            "medium_confidence_pct": 0.2024749653993324,
            "low_confidence_pct": 0.10502320280061875,
            "na_confidence_pct": 0.6438980705039485,
            "total_quantity": null
          },
          {
            "month": "2026-01",
            "n_trades": 164418,
            "n_runs": 21775,
            "retail_pct": 0.045524212677444074,
            "mixed_pct": 0.0,
            "instit_pct": 0.5876059798805484,
            "ambiguous_pct": 0.313809923487696,
            "unobservable_pct": 0.05305988395431157,
            "unclear_pct": 0.36686980744200753,
            "avg_trade_size": 33876.24932908806,
            "avg_run_notional": 255791.74108794492,
            "retail_qty_pct": 0.01931256621111777,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.6992364229329997,
            "ambiguous_qty_pct": 0.24664116373100778,
            "unobservable_qty_pct": 0.034809847124874733,
            "unclear_qty_pct": 0.28145101085588253,
            "retail_notional_pct": 0.019480107517959835,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.6982301401405695,
            "ambiguous_notional_pct": 0.24708318790950545,
            "unobservable_notional_pct": 0.035206564431965105,
            "unclear_notional_pct": 0.2822897523414706,
            "run_retail_pct": 0.25979334098737084,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.16459242250287026,
            "run_ambiguous_pct": 0.3741446613088404,
            "run_unobservable_pct": 0.2014695752009185,
            "run_unclear_pct": 0.5756142365097588,
            "avg_feature_coverage": 0.7342181400688863,
            "high_confidence_pct": 0.04105625717566016,
            "medium_confidence_pct": 0.22112514351320323,
            "low_confidence_pct": 0.16220436280137773,
            "na_confidence_pct": 0.5756142365097588,
            "total_quantity": null
          },
          {
            "month": "2026-02",
            "n_trades": 122404,
            "n_runs": 16890,
            "retail_pct": 0.041689814058364104,
            "mixed_pct": 0.0,
            "instit_pct": 0.5560030717950394,
            "ambiguous_pct": 0.33788111499624196,
            "unobservable_pct": 0.06442599915035456,
            "unclear_pct": 0.40230711414659653,
            "avg_trade_size": 32463.558531747327,
            "avg_run_notional": 235267.57954529306,
            "retail_qty_pct": 0.016734751060898553,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.6896607631463016,
            "ambiguous_qty_pct": 0.2522569129205372,
            "unobservable_qty_pct": 0.04134757287226255,
            "unclear_qty_pct": 0.29360448579279974,
            "retail_notional_pct": 0.01674562846619071,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.6895980928329476,
            "ambiguous_notional_pct": 0.25223207474397896,
            "unobservable_notional_pct": 0.041424203956882705,
            "unclear_notional_pct": 0.29365627870086164,
            "run_retail_pct": 0.22391947898164594,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.16725873297809354,
            "run_ambiguous_pct": 0.3700414446417999,
            "run_unobservable_pct": 0.23878034339846063,
            "run_unclear_pct": 0.6088217880402605,
            "avg_feature_coverage": 0.7239964476021314,
            "high_confidence_pct": 0.0477797513321492,
            "medium_confidence_pct": 0.20775606867969212,
            "low_confidence_pct": 0.13564239194789818,
            "na_confidence_pct": 0.6088217880402605,
            "total_quantity": null
          },
          {
            "month": "2026-03",
            "n_trades": 120010,
            "n_runs": 16900,
            "retail_pct": 0.03362219815015415,
            "mixed_pct": 0.0,
            "instit_pct": 0.5639696691942339,
            "ambiguous_pct": 0.31736521956503627,
            "unobservable_pct": 0.08504291309057578,
            "unclear_pct": 0.40240813265561204,
            "avg_trade_size": 30353.711512457292,
            "avg_run_notional": 215547.27329053252,
            "retail_qty_pct": 0.013034158371814831,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.6829718983700898,
            "ambiguous_qty_pct": 0.24504252363924223,
            "unobservable_qty_pct": 0.05895141961885314,
            "unclear_qty_pct": 0.30399394325809537,
            "retail_notional_pct": 0.013042941765014561,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.682790622294407,
            "ambiguous_notional_pct": 0.2454812758248567,
            "unobservable_notional_pct": 0.058685160115721724,
            "unclear_notional_pct": 0.30416643594057846,
            "run_retail_pct": 0.18520710059171597,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.17437869822485208,
            "run_ambiguous_pct": 0.35124260355029585,
            "run_unobservable_pct": 0.2891715976331361,
            "run_unclear_pct": 0.640414201183432,
            "avg_feature_coverage": 0.7094704142011834,
            "high_confidence_pct": 0.05798816568047337,
            "medium_confidence_pct": 0.1898224852071006,
            "low_confidence_pct": 0.11177514792899408,
            "na_confidence_pct": 0.640414201183432,
            "total_quantity": null
          },
          {
            "month": "2026-04",
            "n_trades": 28650,
            "n_runs": 4431,
            "retail_pct": 0.032984293193717276,
            "mixed_pct": 0.0,
            "instit_pct": 0.5969633507853404,
            "ambiguous_pct": 0.27200698080279234,
            "unobservable_pct": 0.09804537521815009,
            "unclear_pct": 0.37005235602094244,
            "avg_trade_size": 25235.267085514835,
            "avg_run_notional": 163166.4188670729,
            "retail_qty_pct": 0.015697694934271932,
            "mixed_qty_pct": 0.0,
            "instit_qty_pct": 0.6966110800873089,
            "ambiguous_qty_pct": 0.21960226351374101,
            "unobservable_qty_pct": 0.06808896146467816,
            "unclear_qty_pct": 0.28769122497841915,
            "retail_notional_pct": 0.015664459249626388,
            "mixed_notional_pct": 0.0,
            "instit_notional_pct": 0.6965013956851948,
            "ambiguous_notional_pct": 0.21974355429963233,
            "unobservable_notional_pct": 0.06809059076554658,
            "unclear_notional_pct": 0.2878341450651789,
            "run_retail_pct": 0.17061611374407584,
            "run_mixed_pct": 0.0,
            "run_instit_pct": 0.18505980591288648,
            "run_ambiguous_pct": 0.316632814263146,
            "run_unobservable_pct": 0.3276912660798917,
            "run_unclear_pct": 0.6443240803430377,
            "avg_feature_coverage": 0.6956668923493569,
            "high_confidence_pct": 0.04107424960505529,
            "medium_confidence_pct": 0.2051455653351388,
            "low_confidence_pct": 0.10945610471676823,
            "na_confidence_pct": 0.6443240803430377,
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
          "trade_id": "4879",
          "timestamp": "2026-04-13T07:59:59.353460",
          "price": 17.03,
          "size": 400.0,
          "notional": 6812.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 197640,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "4878",
          "timestamp": "2026-04-13T07:59:58.681696",
          "price": 17.05,
          "size": 400.0,
          "notional": 6820.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 197640,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "4877",
          "timestamp": "2026-04-13T07:59:50.032374",
          "price": 17.03,
          "size": 800.0,
          "notional": 13624.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 197639,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "4876",
          "timestamp": "2026-04-13T07:59:49.864565",
          "price": 17.03,
          "size": 400.0,
          "notional": 6812.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 197639,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "4875",
          "timestamp": "2026-04-13T07:59:39.353291",
          "price": 17.03,
          "size": 400.0,
          "notional": 6812.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 197638,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "4874",
          "timestamp": "2026-04-13T07:59:38.702791",
          "price": 17.05,
          "size": 2000.0,
          "notional": 34100.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 197638,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "4873",
          "timestamp": "2026-04-13T07:59:31.832364",
          "price": 17.03,
          "size": 800.0,
          "notional": 13624.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 197637,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "4872",
          "timestamp": "2026-04-13T07:59:31.016391",
          "price": 17.04,
          "size": 400.0,
          "notional": 6816.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 197637,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "4871",
          "timestamp": "2026-04-13T07:59:31.016391",
          "price": 17.04,
          "size": 1600.0,
          "notional": 27264.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 197637,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "4869",
          "timestamp": "2026-04-13T07:59:31.002173",
          "price": 17.03,
          "size": 800.0,
          "notional": 13624.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 197637,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "4868",
          "timestamp": "2026-04-13T07:59:30.831877",
          "price": 17.03,
          "size": 800.0,
          "notional": 13624.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 197637,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "4867",
          "timestamp": "2026-04-13T07:59:30.191499",
          "price": 17.03,
          "size": 800.0,
          "notional": 13624.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 197637,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "4866",
          "timestamp": "2026-04-13T07:59:30.166797",
          "price": 17.04,
          "size": 400.0,
          "notional": 6816.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 197637,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "4865",
          "timestamp": "2026-04-13T07:59:30.078889",
          "price": 17.03,
          "size": 1200.0,
          "notional": 20436.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 197637,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "4863",
          "timestamp": "2026-04-13T07:59:24.728802",
          "price": 17.04,
          "size": 800.0,
          "notional": 13632.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 197636,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "ADAPTIVE"
        },
        {
          "trade_id": "4862",
          "timestamp": "2026-04-13T07:59:23.555532",
          "price": 17.03,
          "size": 400.0,
          "notional": 6812.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 197636,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "ADAPTIVE"
        },
        {
          "trade_id": "4861",
          "timestamp": "2026-04-13T07:59:18.689848",
          "price": 17.04,
          "size": 1200.0,
          "notional": 20448.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 197636,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "ADAPTIVE"
        },
        {
          "trade_id": "4860",
          "timestamp": "2026-04-13T07:59:18.689848",
          "price": 17.04,
          "size": 400.0,
          "notional": 6816.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 197636,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "ADAPTIVE"
        },
        {
          "trade_id": "4859",
          "timestamp": "2026-04-13T07:59:18.689848",
          "price": 17.04,
          "size": 800.0,
          "notional": 13632.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 197636,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "ADAPTIVE"
        },
        {
          "trade_id": "4858",
          "timestamp": "2026-04-13T07:59:18.689848",
          "price": 17.04,
          "size": 1600.0,
          "notional": 27264.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 197636,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "ADAPTIVE"
        },
        {
          "trade_id": "4857",
          "timestamp": "2026-04-13T07:59:18.689848",
          "price": 17.04,
          "size": 2000.0,
          "notional": 34080.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 197636,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "ADAPTIVE"
        },
        {
          "trade_id": "4856",
          "timestamp": "2026-04-13T07:59:17.598420",
          "price": 17.03,
          "size": 400.0,
          "notional": 6812.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 197636,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "ADAPTIVE"
        },
        {
          "trade_id": "4854",
          "timestamp": "2026-04-13T07:59:17.551506",
          "price": 17.03,
          "size": 1200.0,
          "notional": 20436.0,
          "bucket": "AMBIGUOUS",
          "confidence": "NA",
          "run_id": 197636,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "ADAPTIVE"
        },
        {
          "trade_id": "4853",
          "timestamp": "2026-04-13T07:59:11.864914",
          "price": 17.03,
          "size": 2800.0,
          "notional": 47684.0,
          "bucket": "RETAIL",
          "confidence": "MEDIUM",
          "run_id": 197635,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "IMMEDIATE"
        },
        {
          "trade_id": "4851",
          "timestamp": "2026-04-13T07:59:05.299723",
          "price": 17.03,
          "size": 400.0,
          "notional": 6812.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 197634,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "ADAPTIVE"
        },
        {
          "trade_id": "4850",
          "timestamp": "2026-04-13T07:59:05.291812",
          "price": 17.03,
          "size": 400.0,
          "notional": 6812.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 197634,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "ADAPTIVE"
        },
        {
          "trade_id": "4849",
          "timestamp": "2026-04-13T07:59:05.279359",
          "price": 17.04,
          "size": 400.0,
          "notional": 6816.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 197634,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "ADAPTIVE"
        },
        {
          "trade_id": "4848",
          "timestamp": "2026-04-13T07:59:05.279359",
          "price": 17.04,
          "size": 4400.0,
          "notional": 74976.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 197634,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "ADAPTIVE"
        },
        {
          "trade_id": "4847",
          "timestamp": "2026-04-13T07:59:02.243308",
          "price": 17.04,
          "size": 400.0,
          "notional": 6816.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 197634,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "ADAPTIVE"
        },
        {
          "trade_id": "4846",
          "timestamp": "2026-04-13T07:59:00.818042",
          "price": 17.04,
          "size": 400.0,
          "notional": 6816.0,
          "bucket": "INSTITUTIONAL",
          "confidence": "MEDIUM",
          "run_id": 197634,
          "d1": "SINGLE_FILL",
          "d2": "UNOBSERVABLE",
          "d3": "ADAPTIVE"
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
      "total_trades": 847530,
      "price_moving_trades": 137070,
      "pct_price_moving": 16.17287883614739,
      "all_movers": {
        "count": 137070,
        "avg_size": 31305.07233005034,
        "median_size": 15088.0,
        "retail_count": 11128,
        "mixed_count": 0,
        "institutional_count": 63939,
        "ambiguous_count": 50731,
        "unobservable_count": 11272,
        "retail_pct": 8.118479608958925,
        "mixed_pct": 0.0,
        "instit_pct": 46.646968702123004,
        "unclear_pct": 45.23455168891807
      },
      "positive_movers": {
        "count": 68241,
        "avg_size": 31183.827815829194,
        "median_size": 15247.999999999998,
        "retail_count": 1702,
        "mixed_count": 0,
        "institutional_count": 31713,
        "ambiguous_count": 24638,
        "unobservable_count": 10188,
        "retail_pct": 2.4941017863161443,
        "mixed_pct": 0.0,
        "instit_pct": 46.472062249967024,
        "unclear_pct": 51.033835963716825
      },
      "negative_movers": {
        "count": 68829,
        "avg_size": 31425.281063214636,
        "median_size": 15000.0,
        "retail_count": 9426,
        "mixed_count": 0,
        "institutional_count": 32226,
        "ambiguous_count": 26093,
        "unobservable_count": 1084,
        "retail_pct": 13.694808874166412,
        "mixed_pct": 0.0,
        "instit_pct": 46.820380944078806,
        "unclear_pct": 39.48481018175479
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
          "opening": 0.009436922892966942,
          "continuous": 0.8052524214193493,
          "closing": 0.17591509820968,
          "auctions": 0.18535202110264692,
          "other": 0.009395557478003786
        },
        "1M": {
          "opening": 0.009307260834592443,
          "continuous": 0.7730451573556252,
          "closing": 0.18036167245967022,
          "auctions": 0.18966893329426265,
          "other": 0.037285909350112126
        },
        "3M": {
          "opening": 0.008297620551021144,
          "continuous": 0.7716150542123916,
          "closing": 0.10835077590500491,
          "auctions": 0.11664839645602607,
          "other": 0.11173654933158239
        },
        "6M": {
          "opening": 0.007097858814717132,
          "continuous": 0.7724398568529346,
          "closing": 0.10309644163711787,
          "auctions": 0.110194300451835,
          "other": 0.11736584269523044
        }
      },
      "hhi": {
        "1D": 0.11992964712634933,
        "1M": 0.11791852376012538,
        "3M": 0.11082459706582204,
        "6M": 0.11259025164201299
      },
      "profile_buckets": [
        {
          "time": "09:00",
          "avg_share": 0.0109
        },
        {
          "time": "09:30",
          "avg_share": 0.1553
        },
        {
          "time": "10:00",
          "avg_share": 0.0778
        },
        {
          "time": "10:30",
          "avg_share": 0.063
        },
        {
          "time": "11:00",
          "avg_share": 0.0498
        },
        {
          "time": "11:30",
          "avg_share": 0.0388
        },
        {
          "time": "12:00",
          "avg_share": 0.0953
        },
        {
          "time": "13:00",
          "avg_share": 0.0632
        },
        {
          "time": "13:30",
          "avg_share": 0.0483
        },
        {
          "time": "14:00",
          "avg_share": 0.0602
        },
        {
          "time": "14:30",
          "avg_share": 0.055
        },
        {
          "time": "15:00",
          "avg_share": 0.0644
        },
        {
          "time": "15:30",
          "avg_share": 0.1127
        },
        {
          "time": "16:00",
          "avg_share": 0.1055
        }
      ],
      "peers_hhi_rows": [
        {
          "ticker": "1928",
          "auctions_pct": 10.555066962824949,
          "hhi": 0.11143695250495418,
          "interp": {
            "text": "Spread out",
            "cls": "bg-emerald-500/20 text-emerald-400",
            "you": true
          }
        },
        {
          "ticker": "27",
          "auctions_pct": 12.135461238020556,
          "hhi": 0.11403769153740916,
          "interp": {
            "text": "Spread out",
            "cls": "bg-emerald-500/20 text-emerald-400"
          }
        },
        {
          "ticker": "2282",
          "auctions_pct": 9.104122834526873,
          "hhi": 0.11581509627163367,
          "interp": {
            "text": "Spread out",
            "cls": "bg-emerald-500/20 text-emerald-400"
          }
        },
        {
          "ticker": "1128",
          "auctions_pct": 3.955233881505243,
          "hhi": 0.13076016685800326,
          "interp": {
            "text": "Spread out",
            "cls": "bg-emerald-500/20 text-emerald-400"
          }
        },
        {
          "ticker": "200",
          "auctions_pct": 1.83581050907661,
          "hhi": 0.14180837011536113,
          "interp": {
            "text": "Spread out",
            "cls": "bg-emerald-500/20 text-emerald-400"
          }
        },
        {
          "ticker": "880",
          "auctions_pct": 2.283265363190852,
          "hhi": 0.14289243235312626,
          "interp": {
            "text": "Spread out",
            "cls": "bg-emerald-500/20 text-emerald-400"
          }
        },
        {
          "ticker": "3918",
          "auctions_pct": 2.0695644920007688,
          "hhi": 0.137314768728205,
          "interp": {
            "text": "Spread out",
            "cls": "bg-emerald-500/20 text-emerald-400"
          }
        },
        {
          "ticker": "753",
          "auctions_pct": 1.3879566974976856,
          "hhi": 0.13107939604935756,
          "interp": {
            "text": "Spread out",
            "cls": "bg-emerald-500/20 text-emerald-400"
          }
        },
        {
          "ticker": "9987",
          "auctions_pct": 16.147698807458397,
          "hhi": 0.1253463686091631,
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
